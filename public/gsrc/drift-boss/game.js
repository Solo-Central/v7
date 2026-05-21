! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("babylonjs", [], t) : "object" == typeof exports ? exports.babylonjs = t() : e.BABYLON = t()
}("undefined" != typeof self ? self : "undefined" != typeof global ? global : this, function() {
    return function(e) {
        var t = {};

        function i(n) {
            if (t[n]) return t[n].exports;
            var r = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
        }
        return i.m = e, i.c = t, i.d = function(e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) i.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "", i(i.s = 129)
    }([function(e, t, i) {
        "use strict";
        i.d(t, "u", function() {
            return s
        }), i.d(t, "v", function() {
            return a
        }), i.d(t, "h", function() {
            return c
        }), i.d(t, "e", function() {
            return l
        }), i.d(t, "f", function() {
            return u
        }), i.d(t, "w", function() {
            return h
        }), i.d(t, "x", function() {
            return d
        }), i.d(t, "y", function() {
            return f
        }), i.d(t, "r", function() {
            return p
        }), i.d(t, "q", function() {
            return _
        }), i.d(t, "j", function() {
            return g
        }), i.d(t, "n", function() {
            return m
        }), i.d(t, "z", function() {
            return v
        }), i.d(t, "i", function() {
            return y
        }), i.d(t, "s", function() {
            return n
        }), i.d(t, "c", function() {
            return T
        }), i.d(t, "d", function() {
            return E
        }), i.d(t, "k", function() {
            return b
        }), i.d(t, "a", function() {
            return A
        }), i.d(t, "b", function() {
            return x
        }), i.d(t, "l", function() {
            return R
        }), i.d(t, "m", function() {
            return P
        }), i.d(t, "g", function() {
            return S
        }), i.d(t, "p", function() {
            return C
        }), i.d(t, "o", function() {
            return M
        }), i.d(t, "t", function() {
            return O
        });
        var n, r = i(34),
            o = i(12),
            s = 1 / 2.2,
            a = 2.2,
            c = .001,
            l = function() {
                function e(e, t, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === i && (i = 0), this.r = e, this.g = t, this.b = i
                }
                return e.prototype.toString = function() {
                    return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
                }, e.prototype.getClassName = function() {
                    return "Color3"
                }, e.prototype.getHashCode = function() {
                    var e = this.r || 0;
                    return e = 397 * (e = 397 * e ^ (this.g || 0)) ^ (this.b || 0)
                }, e.prototype.toArray = function(e, t) {
                    return void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, this
                }, e.prototype.toColor4 = function(e) {
                    return void 0 === e && (e = 1), new u(this.r, this.g, this.b, e)
                }, e.prototype.asArray = function() {
                    var e = new Array;
                    return this.toArray(e, 0), e
                }, e.prototype.toLuminance = function() {
                    return .3 * this.r + .59 * this.g + .11 * this.b
                }, e.prototype.multiply = function(t) {
                    return new e(this.r * t.r, this.g * t.g, this.b * t.b)
                }, e.prototype.multiplyToRef = function(e, t) {
                    return t.r = this.r * e.r, t.g = this.g * e.g, t.b = this.b * e.b, this
                }, e.prototype.equals = function(e) {
                    return e && this.r === e.r && this.g === e.g && this.b === e.b
                }, e.prototype.equalsFloats = function(e, t, i) {
                    return this.r === e && this.g === t && this.b === i
                }, e.prototype.scale = function(t) {
                    return new e(this.r * t, this.g * t, this.b * t)
                }, e.prototype.scaleToRef = function(e, t) {
                    return t.r = this.r * e, t.g = this.g * e, t.b = this.b * e, this
                }, e.prototype.scaleAndAddToRef = function(e, t) {
                    return t.r += this.r * e, t.g += this.g * e, t.b += this.b * e, this
                }, e.prototype.clampToRef = function(e, t, i) {
                    return void 0 === e && (e = 0), void 0 === t && (t = 1), i.r = o.a.Clamp(this.r, e, t), i.g = o.a.Clamp(this.g, e, t), i.b = o.a.Clamp(this.b, e, t), this
                }, e.prototype.add = function(t) {
                    return new e(this.r + t.r, this.g + t.g, this.b + t.b)
                }, e.prototype.addToRef = function(e, t) {
                    return t.r = this.r + e.r, t.g = this.g + e.g, t.b = this.b + e.b, this
                }, e.prototype.subtract = function(t) {
                    return new e(this.r - t.r, this.g - t.g, this.b - t.b)
                }, e.prototype.subtractToRef = function(e, t) {
                    return t.r = this.r - e.r, t.g = this.g - e.g, t.b = this.b - e.b, this
                }, e.prototype.clone = function() {
                    return new e(this.r, this.g, this.b)
                }, e.prototype.copyFrom = function(e) {
                    return this.r = e.r, this.g = e.g, this.b = e.b, this
                }, e.prototype.copyFromFloats = function(e, t, i) {
                    return this.r = e, this.g = t, this.b = i, this
                }, e.prototype.set = function(e, t, i) {
                    return this.copyFromFloats(e, t, i)
                }, e.prototype.toHexString = function() {
                    var e = 255 * this.r | 0,
                        t = 255 * this.g | 0,
                        i = 255 * this.b | 0;
                    return "#" + o.a.ToHex(e) + o.a.ToHex(t) + o.a.ToHex(i)
                }, e.prototype.toLinearSpace = function() {
                    var t = new e;
                    return this.toLinearSpaceToRef(t), t
                }, e.prototype.toLinearSpaceToRef = function(e) {
                    return e.r = Math.pow(this.r, a), e.g = Math.pow(this.g, a), e.b = Math.pow(this.b, a), this
                }, e.prototype.toGammaSpace = function() {
                    var t = new e;
                    return this.toGammaSpaceToRef(t), t
                }, e.prototype.toGammaSpaceToRef = function(e) {
                    return e.r = Math.pow(this.r, s), e.g = Math.pow(this.g, s), e.b = Math.pow(this.b, s), this
                }, e.FromHexString = function(t) {
                    if ("#" !== t.substring(0, 1) || 7 !== t.length) return new e(0, 0, 0);
                    var i = parseInt(t.substring(1, 3), 16),
                        n = parseInt(t.substring(3, 5), 16),
                        r = parseInt(t.substring(5, 7), 16);
                    return e.FromInts(i, n, r)
                }, e.FromArray = function(t, i) {
                    return void 0 === i && (i = 0), new e(t[i], t[i + 1], t[i + 2])
                }, e.FromInts = function(t, i, n) {
                    return new e(t / 255, i / 255, n / 255)
                }, e.Lerp = function(t, i, n) {
                    var r = new e(0, 0, 0);
                    return e.LerpToRef(t, i, n, r), r
                }, e.LerpToRef = function(e, t, i, n) {
                    n.r = e.r + (t.r - e.r) * i, n.g = e.g + (t.g - e.g) * i, n.b = e.b + (t.b - e.b) * i
                }, e.Red = function() {
                    return new e(1, 0, 0)
                }, e.Green = function() {
                    return new e(0, 1, 0)
                }, e.Blue = function() {
                    return new e(0, 0, 1)
                }, e.Black = function() {
                    return new e(0, 0, 0)
                }, Object.defineProperty(e, "BlackReadOnly", {
                    get: function() {
                        return e._BlackReadOnly
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.White = function() {
                    return new e(1, 1, 1)
                }, e.Purple = function() {
                    return new e(.5, 0, .5)
                }, e.Magenta = function() {
                    return new e(1, 0, 1)
                }, e.Yellow = function() {
                    return new e(1, 1, 0)
                }, e.Gray = function() {
                    return new e(.5, .5, .5)
                }, e.Teal = function() {
                    return new e(0, 1, 1)
                }, e.Random = function() {
                    return new e(Math.random(), Math.random(), Math.random())
                }, e._BlackReadOnly = e.Black(), e
            }(),
            u = function() {
                function e(e, t, i, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === n && (n = 1), this.r = e, this.g = t, this.b = i, this.a = n
                }
                return e.prototype.addInPlace = function(e) {
                    return this.r += e.r, this.g += e.g, this.b += e.b, this.a += e.a, this
                }, e.prototype.asArray = function() {
                    var e = new Array;
                    return this.toArray(e, 0), e
                }, e.prototype.toArray = function(e, t) {
                    return void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e[t + 3] = this.a, this
                }, e.prototype.equals = function(e) {
                    return e && this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a
                }, e.prototype.add = function(t) {
                    return new e(this.r + t.r, this.g + t.g, this.b + t.b, this.a + t.a)
                }, e.prototype.subtract = function(t) {
                    return new e(this.r - t.r, this.g - t.g, this.b - t.b, this.a - t.a)
                }, e.prototype.subtractToRef = function(e, t) {
                    return t.r = this.r - e.r, t.g = this.g - e.g, t.b = this.b - e.b, t.a = this.a - e.a, this
                }, e.prototype.scale = function(t) {
                    return new e(this.r * t, this.g * t, this.b * t, this.a * t)
                }, e.prototype.scaleToRef = function(e, t) {
                    return t.r = this.r * e, t.g = this.g * e, t.b = this.b * e, t.a = this.a * e, this
                }, e.prototype.scaleAndAddToRef = function(e, t) {
                    return t.r += this.r * e, t.g += this.g * e, t.b += this.b * e, t.a += this.a * e, this
                }, e.prototype.clampToRef = function(e, t, i) {
                    return void 0 === e && (e = 0), void 0 === t && (t = 1), i.r = o.a.Clamp(this.r, e, t), i.g = o.a.Clamp(this.g, e, t), i.b = o.a.Clamp(this.b, e, t), i.a = o.a.Clamp(this.a, e, t), this
                }, e.prototype.multiply = function(t) {
                    return new e(this.r * t.r, this.g * t.g, this.b * t.b, this.a * t.a)
                }, e.prototype.multiplyToRef = function(e, t) {
                    return t.r = this.r * e.r, t.g = this.g * e.g, t.b = this.b * e.b, t.a = this.a * e.a, t
                }, e.prototype.toString = function() {
                    return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
                }, e.prototype.getClassName = function() {
                    return "Color4"
                }, e.prototype.getHashCode = function() {
                    var e = this.r || 0;
                    return e = 397 * (e = 397 * (e = 397 * e ^ (this.g || 0)) ^ (this.b || 0)) ^ (this.a || 0)
                }, e.prototype.clone = function() {
                    return new e(this.r, this.g, this.b, this.a)
                }, e.prototype.copyFrom = function(e) {
                    return this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a, this
                }, e.prototype.copyFromFloats = function(e, t, i, n) {
                    return this.r = e, this.g = t, this.b = i, this.a = n, this
                }, e.prototype.set = function(e, t, i, n) {
                    return this.copyFromFloats(e, t, i, n)
                }, e.prototype.toHexString = function() {
                    var e = 255 * this.r | 0,
                        t = 255 * this.g | 0,
                        i = 255 * this.b | 0,
                        n = 255 * this.a | 0;
                    return "#" + o.a.ToHex(e) + o.a.ToHex(t) + o.a.ToHex(i) + o.a.ToHex(n)
                }, e.prototype.toLinearSpace = function() {
                    var t = new e;
                    return this.toLinearSpaceToRef(t), t
                }, e.prototype.toLinearSpaceToRef = function(e) {
                    return e.r = Math.pow(this.r, a), e.g = Math.pow(this.g, a), e.b = Math.pow(this.b, a), e.a = this.a, this
                }, e.prototype.toGammaSpace = function() {
                    var t = new e;
                    return this.toGammaSpaceToRef(t), t
                }, e.prototype.toGammaSpaceToRef = function(e) {
                    return e.r = Math.pow(this.r, s), e.g = Math.pow(this.g, s), e.b = Math.pow(this.b, s), e.a = this.a, this
                }, e.FromHexString = function(t) {
                    if ("#" !== t.substring(0, 1) || 9 !== t.length) return new e(0, 0, 0, 0);
                    var i = parseInt(t.substring(1, 3), 16),
                        n = parseInt(t.substring(3, 5), 16),
                        r = parseInt(t.substring(5, 7), 16),
                        o = parseInt(t.substring(7, 9), 16);
                    return e.FromInts(i, n, r, o)
                }, e.Lerp = function(t, i, n) {
                    var r = new e(0, 0, 0, 0);
                    return e.LerpToRef(t, i, n, r), r
                }, e.LerpToRef = function(e, t, i, n) {
                    n.r = e.r + (t.r - e.r) * i, n.g = e.g + (t.g - e.g) * i, n.b = e.b + (t.b - e.b) * i, n.a = e.a + (t.a - e.a) * i
                }, e.FromColor3 = function(t, i) {
                    return void 0 === i && (i = 1), new e(t.r, t.g, t.b, i)
                }, e.FromArray = function(t, i) {
                    return void 0 === i && (i = 0), new e(t[i], t[i + 1], t[i + 2], t[i + 3])
                }, e.FromInts = function(t, i, n, r) {
                    return new e(t / 255, i / 255, n / 255, r / 255)
                }, e.CheckColors4 = function(e, t) {
                    if (e.length === 3 * t) {
                        for (var i = [], n = 0; n < e.length; n += 3) {
                            var r = n / 3 * 4;
                            i[r] = e[n], i[r + 1] = e[n + 1], i[r + 2] = e[n + 2], i[r + 3] = 1
                        }
                        return i
                    }
                    return e
                }, e
            }(),
            h = function() {
                function e(e, t) {
                    void 0 === e && (e = 0), void 0 === t && (t = 0), this.x = e, this.y = t
                }
                return e.prototype.toString = function() {
                    return "{X: " + this.x + " Y:" + this.y + "}"
                }, e.prototype.getClassName = function() {
                    return "Vector2"
                }, e.prototype.getHashCode = function() {
                    var e = this.x || 0;
                    return e = 397 * e ^ (this.y || 0)
                }, e.prototype.toArray = function(e, t) {
                    return void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, this
                }, e.prototype.asArray = function() {
                    var e = new Array;
                    return this.toArray(e, 0), e
                }, e.prototype.copyFrom = function(e) {
                    return this.x = e.x, this.y = e.y, this
                }, e.prototype.copyFromFloats = function(e, t) {
                    return this.x = e, this.y = t, this
                }, e.prototype.set = function(e, t) {
                    return this.copyFromFloats(e, t)
                }, e.prototype.add = function(t) {
                    return new e(this.x + t.x, this.y + t.y)
                }, e.prototype.addToRef = function(e, t) {
                    return t.x = this.x + e.x, t.y = this.y + e.y, this
                }, e.prototype.addInPlace = function(e) {
                    return this.x += e.x, this.y += e.y, this
                }, e.prototype.addVector3 = function(t) {
                    return new e(this.x + t.x, this.y + t.y)
                }, e.prototype.subtract = function(t) {
                    return new e(this.x - t.x, this.y - t.y)
                }, e.prototype.subtractToRef = function(e, t) {
                    return t.x = this.x - e.x, t.y = this.y - e.y, this
                }, e.prototype.subtractInPlace = function(e) {
                    return this.x -= e.x, this.y -= e.y, this
                }, e.prototype.multiplyInPlace = function(e) {
                    return this.x *= e.x, this.y *= e.y, this
                }, e.prototype.multiply = function(t) {
                    return new e(this.x * t.x, this.y * t.y)
                }, e.prototype.multiplyToRef = function(e, t) {
                    return t.x = this.x * e.x, t.y = this.y * e.y, this
                }, e.prototype.multiplyByFloats = function(t, i) {
                    return new e(this.x * t, this.y * i)
                }, e.prototype.divide = function(t) {
                    return new e(this.x / t.x, this.y / t.y)
                }, e.prototype.divideToRef = function(e, t) {
                    return t.x = this.x / e.x, t.y = this.y / e.y, this
                }, e.prototype.divideInPlace = function(e) {
                    return this.divideToRef(e, this)
                }, e.prototype.negate = function() {
                    return new e(-this.x, -this.y)
                }, e.prototype.scaleInPlace = function(e) {
                    return this.x *= e, this.y *= e, this
                }, e.prototype.scale = function(t) {
                    var i = new e(0, 0);
                    return this.scaleToRef(t, i), i
                }, e.prototype.scaleToRef = function(e, t) {
                    return t.x = this.x * e, t.y = this.y * e, this
                }, e.prototype.scaleAndAddToRef = function(e, t) {
                    return t.x += this.x * e, t.y += this.y * e, this
                }, e.prototype.equals = function(e) {
                    return e && this.x === e.x && this.y === e.y
                }, e.prototype.equalsWithEpsilon = function(e, t) {
                    return void 0 === t && (t = c), e && o.a.WithinEpsilon(this.x, e.x, t) && o.a.WithinEpsilon(this.y, e.y, t)
                }, e.prototype.floor = function() {
                    return new e(Math.floor(this.x), Math.floor(this.y))
                }, e.prototype.fract = function() {
                    return new e(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
                }, e.prototype.length = function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                }, e.prototype.lengthSquared = function() {
                    return this.x * this.x + this.y * this.y
                }, e.prototype.normalize = function() {
                    var e = this.length();
                    if (0 === e) return this;
                    var t = 1 / e;
                    return this.x *= t, this.y *= t, this
                }, e.prototype.clone = function() {
                    return new e(this.x, this.y)
                }, e.Zero = function() {
                    return new e(0, 0)
                }, e.One = function() {
                    return new e(1, 1)
                }, e.FromArray = function(t, i) {
                    return void 0 === i && (i = 0), new e(t[i], t[i + 1])
                }, e.FromArrayToRef = function(e, t, i) {
                    i.x = e[t], i.y = e[t + 1]
                }, e.CatmullRom = function(t, i, n, r, o) {
                    var s = o * o,
                        a = o * s;
                    return new e(.5 * (2 * i.x + (-t.x + n.x) * o + (2 * t.x - 5 * i.x + 4 * n.x - r.x) * s + (-t.x + 3 * i.x - 3 * n.x + r.x) * a), .5 * (2 * i.y + (-t.y + n.y) * o + (2 * t.y - 5 * i.y + 4 * n.y - r.y) * s + (-t.y + 3 * i.y - 3 * n.y + r.y) * a))
                }, e.Clamp = function(t, i, n) {
                    var r = t.x;
                    r = (r = r > n.x ? n.x : r) < i.x ? i.x : r;
                    var o = t.y;
                    return new e(r, o = (o = o > n.y ? n.y : o) < i.y ? i.y : o)
                }, e.Hermite = function(t, i, n, r, o) {
                    var s = o * o,
                        a = o * s,
                        c = 2 * a - 3 * s + 1,
                        l = -2 * a + 3 * s,
                        u = a - 2 * s + o,
                        h = a - s;
                    return new e(t.x * c + n.x * l + i.x * u + r.x * h, t.y * c + n.y * l + i.y * u + r.y * h)
                }, e.Lerp = function(t, i, n) {
                    return new e(t.x + (i.x - t.x) * n, t.y + (i.y - t.y) * n)
                }, e.Dot = function(e, t) {
                    return e.x * t.x + e.y * t.y
                }, e.Normalize = function(e) {
                    var t = e.clone();
                    return t.normalize(), t
                }, e.Minimize = function(t, i) {
                    return new e(t.x < i.x ? t.x : i.x, t.y < i.y ? t.y : i.y)
                }, e.Maximize = function(t, i) {
                    return new e(t.x > i.x ? t.x : i.x, t.y > i.y ? t.y : i.y)
                }, e.Transform = function(t, i) {
                    var n = e.Zero();
                    return e.TransformToRef(t, i, n), n
                }, e.TransformToRef = function(e, t, i) {
                    var n = t.m,
                        r = e.x * n[0] + e.y * n[4] + n[12],
                        o = e.x * n[1] + e.y * n[5] + n[13];
                    i.x = r, i.y = o
                }, e.PointInTriangle = function(e, t, i, n) {
                    var r = .5 * (-i.y * n.x + t.y * (-i.x + n.x) + t.x * (i.y - n.y) + i.x * n.y),
                        o = r < 0 ? -1 : 1,
                        s = (t.y * n.x - t.x * n.y + (n.y - t.y) * e.x + (t.x - n.x) * e.y) * o,
                        a = (t.x * i.y - t.y * i.x + (t.y - i.y) * e.x + (i.x - t.x) * e.y) * o;
                    return s > 0 && a > 0 && s + a < 2 * r * o
                }, e.Distance = function(t, i) {
                    return Math.sqrt(e.DistanceSquared(t, i))
                }, e.DistanceSquared = function(e, t) {
                    var i = e.x - t.x,
                        n = e.y - t.y;
                    return i * i + n * n
                }, e.Center = function(e, t) {
                    var i = e.add(t);
                    return i.scaleInPlace(.5), i
                }, e.DistanceOfPointFromSegment = function(t, i, n) {
                    var r = e.DistanceSquared(i, n);
                    if (0 === r) return e.Distance(t, i);
                    var o = n.subtract(i),
                        s = Math.max(0, Math.min(1, e.Dot(t.subtract(i), o) / r)),
                        a = i.add(o.multiplyByFloats(s, s));
                    return e.Distance(t, a)
                }, e
            }(),
            d = function() {
                function e(e, t, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === i && (i = 0), this.x = e, this.y = t, this.z = i
                }
                return e.prototype.toString = function() {
                    return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + "}"
                }, e.prototype.getClassName = function() {
                    return "Vector3"
                }, e.prototype.getHashCode = function() {
                    var e = this.x || 0;
                    return e = 397 * (e = 397 * e ^ (this.y || 0)) ^ (this.z || 0)
                }, e.prototype.asArray = function() {
                    var e = [];
                    return this.toArray(e, 0), e
                }, e.prototype.toArray = function(e, t) {
                    return void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, this
                }, e.prototype.toQuaternion = function() {
                    return _.RotationYawPitchRoll(this.y, this.x, this.z)
                }, e.prototype.addInPlace = function(e) {
                    return this.addInPlaceFromFloats(e.x, e.y, e.z)
                }, e.prototype.addInPlaceFromFloats = function(e, t, i) {
                    return this.x += e, this.y += t, this.z += i, this
                }, e.prototype.add = function(t) {
                    return new e(this.x + t.x, this.y + t.y, this.z + t.z)
                }, e.prototype.addToRef = function(e, t) {
                    return t.copyFromFloats(this.x + e.x, this.y + e.y, this.z + e.z)
                }, e.prototype.subtractInPlace = function(e) {
                    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this
                }, e.prototype.subtract = function(t) {
                    return new e(this.x - t.x, this.y - t.y, this.z - t.z)
                }, e.prototype.subtractToRef = function(e, t) {
                    return this.subtractFromFloatsToRef(e.x, e.y, e.z, t)
                }, e.prototype.subtractFromFloats = function(t, i, n) {
                    return new e(this.x - t, this.y - i, this.z - n)
                }, e.prototype.subtractFromFloatsToRef = function(e, t, i, n) {
                    return n.copyFromFloats(this.x - e, this.y - t, this.z - i)
                }, e.prototype.negate = function() {
                    return new e(-this.x, -this.y, -this.z)
                }, e.prototype.scaleInPlace = function(e) {
                    return this.x *= e, this.y *= e, this.z *= e, this
                }, e.prototype.scale = function(t) {
                    return new e(this.x * t, this.y * t, this.z * t)
                }, e.prototype.scaleToRef = function(e, t) {
                    return t.copyFromFloats(this.x * e, this.y * e, this.z * e)
                }, e.prototype.scaleAndAddToRef = function(e, t) {
                    return t.addInPlaceFromFloats(this.x * e, this.y * e, this.z * e)
                }, e.prototype.equals = function(e) {
                    return e && this.x === e.x && this.y === e.y && this.z === e.z
                }, e.prototype.equalsWithEpsilon = function(e, t) {
                    return void 0 === t && (t = c), e && o.a.WithinEpsilon(this.x, e.x, t) && o.a.WithinEpsilon(this.y, e.y, t) && o.a.WithinEpsilon(this.z, e.z, t)
                }, e.prototype.equalsToFloats = function(e, t, i) {
                    return this.x === e && this.y === t && this.z === i
                }, e.prototype.multiplyInPlace = function(e) {
                    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this
                }, e.prototype.multiply = function(e) {
                    return this.multiplyByFloats(e.x, e.y, e.z)
                }, e.prototype.multiplyToRef = function(e, t) {
                    return t.copyFromFloats(this.x * e.x, this.y * e.y, this.z * e.z)
                }, e.prototype.multiplyByFloats = function(t, i, n) {
                    return new e(this.x * t, this.y * i, this.z * n)
                }, e.prototype.divide = function(t) {
                    return new e(this.x / t.x, this.y / t.y, this.z / t.z)
                }, e.prototype.divideToRef = function(e, t) {
                    return t.copyFromFloats(this.x / e.x, this.y / e.y, this.z / e.z)
                }, e.prototype.divideInPlace = function(e) {
                    return this.divideToRef(e, this)
                }, e.prototype.minimizeInPlace = function(e) {
                    return this.minimizeInPlaceFromFloats(e.x, e.y, e.z)
                }, e.prototype.maximizeInPlace = function(e) {
                    return this.maximizeInPlaceFromFloats(e.x, e.y, e.z)
                }, e.prototype.minimizeInPlaceFromFloats = function(e, t, i) {
                    return e < this.x && (this.x = e), t < this.y && (this.y = t), i < this.z && (this.z = i), this
                }, e.prototype.maximizeInPlaceFromFloats = function(e, t, i) {
                    return e > this.x && (this.x = e), t > this.y && (this.y = t), i > this.z && (this.z = i), this
                }, e.prototype.isNonUniformWithinEpsilon = function(e) {
                    var t = Math.abs(this.x),
                        i = Math.abs(this.y);
                    if (!o.a.WithinEpsilon(t, i, e)) return !0;
                    var n = Math.abs(this.z);
                    return !o.a.WithinEpsilon(t, n, e) || !o.a.WithinEpsilon(i, n, e)
                }, Object.defineProperty(e.prototype, "isNonUniform", {
                    get: function() {
                        var e = Math.abs(this.x),
                            t = Math.abs(this.y);
                        if (e !== t) return !0;
                        var i = Math.abs(this.z);
                        return e !== i || t !== i
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.floor = function() {
                    return new e(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
                }, e.prototype.fract = function() {
                    return new e(this.x - Math.floor(this.x), this.y - Math.floor(this.y), this.z - Math.floor(this.z))
                }, e.prototype.length = function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                }, e.prototype.lengthSquared = function() {
                    return this.x * this.x + this.y * this.y + this.z * this.z
                }, e.prototype.normalize = function() {
                    return this.normalizeFromLength(this.length())
                }, e.prototype.reorderInPlace = function(e) {
                    var t = this;
                    return "xyz" === (e = e.toLowerCase()) ? this : (I.Vector3[0].copyFrom(this), ["x", "y", "z"].forEach(function(i, n) {
                        t[i] = I.Vector3[0][e[n]]
                    }), this)
                }, e.prototype.rotateByQuaternionToRef = function(t, i) {
                    return t.toRotationMatrix(I.Matrix[0]), e.TransformCoordinatesToRef(this, I.Matrix[0], i), i
                }, e.prototype.rotateByQuaternionAroundPointToRef = function(e, t, i) {
                    return this.subtractToRef(t, I.Vector3[0]), I.Vector3[0].rotateByQuaternionToRef(e, I.Vector3[0]), t.addToRef(I.Vector3[0], i), i
                }, e.prototype.normalizeFromLength = function(e) {
                    return 0 === e || 1 === e ? this : this.scaleInPlace(1 / e)
                }, e.prototype.normalizeToNew = function() {
                    var t = new e(0, 0, 0);
                    return this.normalizeToRef(t), t
                }, e.prototype.normalizeToRef = function(e) {
                    var t = this.length();
                    return 0 === t || 1 === t ? e.copyFromFloats(this.x, this.y, this.z) : this.scaleToRef(1 / t, e)
                }, e.prototype.clone = function() {
                    return new e(this.x, this.y, this.z)
                }, e.prototype.copyFrom = function(e) {
                    return this.copyFromFloats(e.x, e.y, e.z)
                }, e.prototype.copyFromFloats = function(e, t, i) {
                    return this.x = e, this.y = t, this.z = i, this
                }, e.prototype.set = function(e, t, i) {
                    return this.copyFromFloats(e, t, i)
                }, e.prototype.setAll = function(e) {
                    return this.x = this.y = this.z = e, this
                }, e.GetClipFactor = function(t, i, n, r) {
                    var o = e.Dot(t, n) - r;
                    return o / (o - (e.Dot(i, n) - r))
                }, e.GetAngleBetweenVectors = function(t, i, n) {
                    var r = t.normalizeToRef(I.Vector3[1]),
                        o = i.normalizeToRef(I.Vector3[2]),
                        s = e.Dot(r, o),
                        a = I.Vector3[3];
                    return e.CrossToRef(r, o, a), e.Dot(a, n) > 0 ? Math.acos(s) : -Math.acos(s)
                }, e.FromArray = function(t, i) {
                    return void 0 === i && (i = 0), new e(t[i], t[i + 1], t[i + 2])
                }, e.FromFloatArray = function(t, i) {
                    return e.FromArray(t, i)
                }, e.FromArrayToRef = function(e, t, i) {
                    i.x = e[t], i.y = e[t + 1], i.z = e[t + 2]
                }, e.FromFloatArrayToRef = function(t, i, n) {
                    return e.FromArrayToRef(t, i, n)
                }, e.FromFloatsToRef = function(e, t, i, n) {
                    n.copyFromFloats(e, t, i)
                }, e.Zero = function() {
                    return new e(0, 0, 0)
                }, e.One = function() {
                    return new e(1, 1, 1)
                }, e.Up = function() {
                    return new e(0, 1, 0)
                }, Object.defineProperty(e, "UpReadOnly", {
                    get: function() {
                        return e._UpReadOnly
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.Down = function() {
                    return new e(0, -1, 0)
                }, e.Forward = function() {
                    return new e(0, 0, 1)
                }, e.Backward = function() {
                    return new e(0, 0, -1)
                }, e.Right = function() {
                    return new e(1, 0, 0)
                }, e.Left = function() {
                    return new e(-1, 0, 0)
                }, e.TransformCoordinates = function(t, i) {
                    var n = e.Zero();
                    return e.TransformCoordinatesToRef(t, i, n), n
                }, e.TransformCoordinatesToRef = function(t, i, n) {
                    e.TransformCoordinatesFromFloatsToRef(t.x, t.y, t.z, i, n)
                }, e.TransformCoordinatesFromFloatsToRef = function(e, t, i, n, r) {
                    var o = n.m,
                        s = e * o[0] + t * o[4] + i * o[8] + o[12],
                        a = e * o[1] + t * o[5] + i * o[9] + o[13],
                        c = e * o[2] + t * o[6] + i * o[10] + o[14],
                        l = 1 / (e * o[3] + t * o[7] + i * o[11] + o[15]);
                    r.x = s * l, r.y = a * l, r.z = c * l
                }, e.TransformNormal = function(t, i) {
                    var n = e.Zero();
                    return e.TransformNormalToRef(t, i, n), n
                }, e.TransformNormalToRef = function(e, t, i) {
                    this.TransformNormalFromFloatsToRef(e.x, e.y, e.z, t, i)
                }, e.TransformNormalFromFloatsToRef = function(e, t, i, n, r) {
                    var o = n.m;
                    r.x = e * o[0] + t * o[4] + i * o[8], r.y = e * o[1] + t * o[5] + i * o[9], r.z = e * o[2] + t * o[6] + i * o[10]
                }, e.CatmullRom = function(t, i, n, r, o) {
                    var s = o * o,
                        a = o * s;
                    return new e(.5 * (2 * i.x + (-t.x + n.x) * o + (2 * t.x - 5 * i.x + 4 * n.x - r.x) * s + (-t.x + 3 * i.x - 3 * n.x + r.x) * a), .5 * (2 * i.y + (-t.y + n.y) * o + (2 * t.y - 5 * i.y + 4 * n.y - r.y) * s + (-t.y + 3 * i.y - 3 * n.y + r.y) * a), .5 * (2 * i.z + (-t.z + n.z) * o + (2 * t.z - 5 * i.z + 4 * n.z - r.z) * s + (-t.z + 3 * i.z - 3 * n.z + r.z) * a))
                }, e.Clamp = function(t, i, n) {
                    var r = new e;
                    return e.ClampToRef(t, i, n, r), r
                }, e.ClampToRef = function(e, t, i, n) {
                    var r = e.x;
                    r = (r = r > i.x ? i.x : r) < t.x ? t.x : r;
                    var o = e.y;
                    o = (o = o > i.y ? i.y : o) < t.y ? t.y : o;
                    var s = e.z;
                    s = (s = s > i.z ? i.z : s) < t.z ? t.z : s, n.copyFromFloats(r, o, s)
                }, e.Hermite = function(t, i, n, r, o) {
                    var s = o * o,
                        a = o * s,
                        c = 2 * a - 3 * s + 1,
                        l = -2 * a + 3 * s,
                        u = a - 2 * s + o,
                        h = a - s;
                    return new e(t.x * c + n.x * l + i.x * u + r.x * h, t.y * c + n.y * l + i.y * u + r.y * h, t.z * c + n.z * l + i.z * u + r.z * h)
                }, e.Lerp = function(t, i, n) {
                    var r = new e(0, 0, 0);
                    return e.LerpToRef(t, i, n, r), r
                }, e.LerpToRef = function(e, t, i, n) {
                    n.x = e.x + (t.x - e.x) * i, n.y = e.y + (t.y - e.y) * i, n.z = e.z + (t.z - e.z) * i
                }, e.Dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z
                }, e.Cross = function(t, i) {
                    var n = e.Zero();
                    return e.CrossToRef(t, i, n), n
                }, e.CrossToRef = function(e, t, i) {
                    var n = e.y * t.z - e.z * t.y,
                        r = e.z * t.x - e.x * t.z,
                        o = e.x * t.y - e.y * t.x;
                    i.copyFromFloats(n, r, o)
                }, e.Normalize = function(t) {
                    var i = e.Zero();
                    return e.NormalizeToRef(t, i), i
                }, e.NormalizeToRef = function(e, t) {
                    e.normalizeToRef(t)
                }, e.Project = function(t, i, n, r) {
                    var o = r.width,
                        s = r.height,
                        a = r.x,
                        c = r.y,
                        l = I.Matrix[1];
                    g.FromValuesToRef(o / 2, 0, 0, 0, 0, -s / 2, 0, 0, 0, 0, .5, 0, a + o / 2, s / 2 + c, .5, 1, l);
                    var u = I.Matrix[0];
                    return i.multiplyToRef(n, u), u.multiplyToRef(l, u), e.TransformCoordinates(t, u)
                }, e._UnprojectFromInvertedMatrixToRef = function(t, i, n) {
                    e.TransformCoordinatesToRef(t, i, n);
                    var r = i.m,
                        s = t.x * r[3] + t.y * r[7] + t.z * r[11] + r[15];
                    o.a.WithinEpsilon(s, 1) && n.scaleInPlace(1 / s)
                }, e.UnprojectFromTransform = function(t, i, n, r, o) {
                    var s = I.Matrix[0];
                    r.multiplyToRef(o, s), s.invert(), t.x = t.x / i * 2 - 1, t.y = -(t.y / n * 2 - 1);
                    var a = new e;
                    return e._UnprojectFromInvertedMatrixToRef(t, s, a), a
                }, e.Unproject = function(t, i, n, r, o, s) {
                    var a = e.Zero();
                    return e.UnprojectToRef(t, i, n, r, o, s, a), a
                }, e.UnprojectToRef = function(t, i, n, r, o, s, a) {
                    e.UnprojectFloatsToRef(t.x, t.y, t.z, i, n, r, o, s, a)
                }, e.UnprojectFloatsToRef = function(t, i, n, r, o, s, a, c, l) {
                    var u = I.Matrix[0];
                    s.multiplyToRef(a, u), u.multiplyToRef(c, u), u.invert();
                    var h = I.Vector3[0];
                    h.x = t / r * 2 - 1, h.y = -(i / o * 2 - 1), h.z = 2 * n - 1, e._UnprojectFromInvertedMatrixToRef(h, u, l)
                }, e.Minimize = function(e, t) {
                    var i = e.clone();
                    return i.minimizeInPlace(t), i
                }, e.Maximize = function(e, t) {
                    var i = e.clone();
                    return i.maximizeInPlace(t), i
                }, e.Distance = function(t, i) {
                    return Math.sqrt(e.DistanceSquared(t, i))
                }, e.DistanceSquared = function(e, t) {
                    var i = e.x - t.x,
                        n = e.y - t.y,
                        r = e.z - t.z;
                    return i * i + n * n + r * r
                }, e.Center = function(e, t) {
                    var i = e.add(t);
                    return i.scaleInPlace(.5), i
                }, e.RotationFromAxis = function(t, i, n) {
                    var r = e.Zero();
                    return e.RotationFromAxisToRef(t, i, n, r), r
                }, e.RotationFromAxisToRef = function(e, t, i, n) {
                    var r = I.Quaternion[0];
                    _.RotationQuaternionFromAxisToRef(e, t, i, r), r.toEulerAnglesToRef(n)
                }, e._UpReadOnly = e.Up(), e
            }(),
            f = function() {
                function e(e, t, i, n) {
                    this.x = e, this.y = t, this.z = i, this.w = n
                }
                return e.prototype.toString = function() {
                    return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + " W:" + this.w + "}"
                }, e.prototype.getClassName = function() {
                    return "Vector4"
                }, e.prototype.getHashCode = function() {
                    var e = this.x || 0;
                    return e = 397 * (e = 397 * (e = 397 * e ^ (this.y || 0)) ^ (this.z || 0)) ^ (this.w || 0)
                }, e.prototype.asArray = function() {
                    var e = new Array;
                    return this.toArray(e, 0), e
                }, e.prototype.toArray = function(e, t) {
                    return void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, this
                }, e.prototype.addInPlace = function(e) {
                    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this
                }, e.prototype.add = function(t) {
                    return new e(this.x + t.x, this.y + t.y, this.z + t.z, this.w + t.w)
                }, e.prototype.addToRef = function(e, t) {
                    return t.x = this.x + e.x, t.y = this.y + e.y, t.z = this.z + e.z, t.w = this.w + e.w, this
                }, e.prototype.subtractInPlace = function(e) {
                    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this
                }, e.prototype.subtract = function(t) {
                    return new e(this.x - t.x, this.y - t.y, this.z - t.z, this.w - t.w)
                }, e.prototype.subtractToRef = function(e, t) {
                    return t.x = this.x - e.x, t.y = this.y - e.y, t.z = this.z - e.z, t.w = this.w - e.w, this
                }, e.prototype.subtractFromFloats = function(t, i, n, r) {
                    return new e(this.x - t, this.y - i, this.z - n, this.w - r)
                }, e.prototype.subtractFromFloatsToRef = function(e, t, i, n, r) {
                    return r.x = this.x - e, r.y = this.y - t, r.z = this.z - i, r.w = this.w - n, this
                }, e.prototype.negate = function() {
                    return new e(-this.x, -this.y, -this.z, -this.w)
                }, e.prototype.scaleInPlace = function(e) {
                    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
                }, e.prototype.scale = function(t) {
                    return new e(this.x * t, this.y * t, this.z * t, this.w * t)
                }, e.prototype.scaleToRef = function(e, t) {
                    return t.x = this.x * e, t.y = this.y * e, t.z = this.z * e, t.w = this.w * e, this
                }, e.prototype.scaleAndAddToRef = function(e, t) {
                    return t.x += this.x * e, t.y += this.y * e, t.z += this.z * e, t.w += this.w * e, this
                }, e.prototype.equals = function(e) {
                    return e && this.x === e.x && this.y === e.y && this.z === e.z && this.w === e.w
                }, e.prototype.equalsWithEpsilon = function(e, t) {
                    return void 0 === t && (t = c), e && o.a.WithinEpsilon(this.x, e.x, t) && o.a.WithinEpsilon(this.y, e.y, t) && o.a.WithinEpsilon(this.z, e.z, t) && o.a.WithinEpsilon(this.w, e.w, t)
                }, e.prototype.equalsToFloats = function(e, t, i, n) {
                    return this.x === e && this.y === t && this.z === i && this.w === n
                }, e.prototype.multiplyInPlace = function(e) {
                    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
                }, e.prototype.multiply = function(t) {
                    return new e(this.x * t.x, this.y * t.y, this.z * t.z, this.w * t.w)
                }, e.prototype.multiplyToRef = function(e, t) {
                    return t.x = this.x * e.x, t.y = this.y * e.y, t.z = this.z * e.z, t.w = this.w * e.w, this
                }, e.prototype.multiplyByFloats = function(t, i, n, r) {
                    return new e(this.x * t, this.y * i, this.z * n, this.w * r)
                }, e.prototype.divide = function(t) {
                    return new e(this.x / t.x, this.y / t.y, this.z / t.z, this.w / t.w)
                }, e.prototype.divideToRef = function(e, t) {
                    return t.x = this.x / e.x, t.y = this.y / e.y, t.z = this.z / e.z, t.w = this.w / e.w, this
                }, e.prototype.divideInPlace = function(e) {
                    return this.divideToRef(e, this)
                }, e.prototype.minimizeInPlace = function(e) {
                    return e.x < this.x && (this.x = e.x), e.y < this.y && (this.y = e.y), e.z < this.z && (this.z = e.z), e.w < this.w && (this.w = e.w), this
                }, e.prototype.maximizeInPlace = function(e) {
                    return e.x > this.x && (this.x = e.x), e.y > this.y && (this.y = e.y), e.z > this.z && (this.z = e.z), e.w > this.w && (this.w = e.w), this
                }, e.prototype.floor = function() {
                    return new e(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z), Math.floor(this.w))
                }, e.prototype.fract = function() {
                    return new e(this.x - Math.floor(this.x), this.y - Math.floor(this.y), this.z - Math.floor(this.z), this.w - Math.floor(this.w))
                }, e.prototype.length = function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
                }, e.prototype.lengthSquared = function() {
                    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
                }, e.prototype.normalize = function() {
                    var e = this.length();
                    return 0 === e ? this : this.scaleInPlace(1 / e)
                }, e.prototype.toVector3 = function() {
                    return new d(this.x, this.y, this.z)
                }, e.prototype.clone = function() {
                    return new e(this.x, this.y, this.z, this.w)
                }, e.prototype.copyFrom = function(e) {
                    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w, this
                }, e.prototype.copyFromFloats = function(e, t, i, n) {
                    return this.x = e, this.y = t, this.z = i, this.w = n, this
                }, e.prototype.set = function(e, t, i, n) {
                    return this.copyFromFloats(e, t, i, n)
                }, e.prototype.setAll = function(e) {
                    return this.x = this.y = this.z = this.w = e, this
                }, e.FromArray = function(t, i) {
                    return i || (i = 0), new e(t[i], t[i + 1], t[i + 2], t[i + 3])
                }, e.FromArrayToRef = function(e, t, i) {
                    i.x = e[t], i.y = e[t + 1], i.z = e[t + 2], i.w = e[t + 3]
                }, e.FromFloatArrayToRef = function(t, i, n) {
                    e.FromArrayToRef(t, i, n)
                }, e.FromFloatsToRef = function(e, t, i, n, r) {
                    r.x = e, r.y = t, r.z = i, r.w = n
                }, e.Zero = function() {
                    return new e(0, 0, 0, 0)
                }, e.One = function() {
                    return new e(1, 1, 1, 1)
                }, e.Normalize = function(t) {
                    var i = e.Zero();
                    return e.NormalizeToRef(t, i), i
                }, e.NormalizeToRef = function(e, t) {
                    t.copyFrom(e), t.normalize()
                }, e.Minimize = function(e, t) {
                    var i = e.clone();
                    return i.minimizeInPlace(t), i
                }, e.Maximize = function(e, t) {
                    var i = e.clone();
                    return i.maximizeInPlace(t), i
                }, e.Distance = function(t, i) {
                    return Math.sqrt(e.DistanceSquared(t, i))
                }, e.DistanceSquared = function(e, t) {
                    var i = e.x - t.x,
                        n = e.y - t.y,
                        r = e.z - t.z,
                        o = e.w - t.w;
                    return i * i + n * n + r * r + o * o
                }, e.Center = function(e, t) {
                    var i = e.add(t);
                    return i.scaleInPlace(.5), i
                }, e.TransformNormal = function(t, i) {
                    var n = e.Zero();
                    return e.TransformNormalToRef(t, i, n), n
                }, e.TransformNormalToRef = function(e, t, i) {
                    var n = t.m,
                        r = e.x * n[0] + e.y * n[4] + e.z * n[8],
                        o = e.x * n[1] + e.y * n[5] + e.z * n[9],
                        s = e.x * n[2] + e.y * n[6] + e.z * n[10];
                    i.x = r, i.y = o, i.z = s, i.w = e.w
                }, e.TransformNormalFromFloatsToRef = function(e, t, i, n, r, o) {
                    var s = r.m;
                    o.x = e * s[0] + t * s[4] + i * s[8], o.y = e * s[1] + t * s[5] + i * s[9], o.z = e * s[2] + t * s[6] + i * s[10], o.w = n
                }, e.FromVector3 = function(t, i) {
                    return void 0 === i && (i = 0), new e(t.x, t.y, t.z, i)
                }, e
            }(),
            p = function() {
                function e(e, t) {
                    this.width = e, this.height = t
                }
                return e.prototype.toString = function() {
                    return "{W: " + this.width + ", H: " + this.height + "}"
                }, e.prototype.getClassName = function() {
                    return "Size"
                }, e.prototype.getHashCode = function() {
                    var e = this.width || 0;
                    return e = 397 * e ^ (this.height || 0)
                }, e.prototype.copyFrom = function(e) {
                    this.width = e.width, this.height = e.height
                }, e.prototype.copyFromFloats = function(e, t) {
                    return this.width = e, this.height = t, this
                }, e.prototype.set = function(e, t) {
                    return this.copyFromFloats(e, t)
                }, e.prototype.multiplyByFloats = function(t, i) {
                    return new e(this.width * t, this.height * i)
                }, e.prototype.clone = function() {
                    return new e(this.width, this.height)
                }, e.prototype.equals = function(e) {
                    return !!e && (this.width === e.width && this.height === e.height)
                }, Object.defineProperty(e.prototype, "surface", {
                    get: function() {
                        return this.width * this.height
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.Zero = function() {
                    return new e(0, 0)
                }, e.prototype.add = function(t) {
                    return new e(this.width + t.width, this.height + t.height)
                }, e.prototype.subtract = function(t) {
                    return new e(this.width - t.width, this.height - t.height)
                }, e.Lerp = function(t, i, n) {
                    return new e(t.width + (i.width - t.width) * n, t.height + (i.height - t.height) * n)
                }, e
            }(),
            _ = function() {
                function e(e, t, i, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === n && (n = 1), this.x = e, this.y = t, this.z = i, this.w = n
                }
                return e.prototype.toString = function() {
                    return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + " W:" + this.w + "}"
                }, e.prototype.getClassName = function() {
                    return "Quaternion"
                }, e.prototype.getHashCode = function() {
                    var e = this.x || 0;
                    return e = 397 * (e = 397 * (e = 397 * e ^ (this.y || 0)) ^ (this.z || 0)) ^ (this.w || 0)
                }, e.prototype.asArray = function() {
                    return [this.x, this.y, this.z, this.w]
                }, e.prototype.equals = function(e) {
                    return e && this.x === e.x && this.y === e.y && this.z === e.z && this.w === e.w
                }, e.prototype.clone = function() {
                    return new e(this.x, this.y, this.z, this.w)
                }, e.prototype.copyFrom = function(e) {
                    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w, this
                }, e.prototype.copyFromFloats = function(e, t, i, n) {
                    return this.x = e, this.y = t, this.z = i, this.w = n, this
                }, e.prototype.set = function(e, t, i, n) {
                    return this.copyFromFloats(e, t, i, n)
                }, e.prototype.add = function(t) {
                    return new e(this.x + t.x, this.y + t.y, this.z + t.z, this.w + t.w)
                }, e.prototype.addInPlace = function(e) {
                    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this
                }, e.prototype.subtract = function(t) {
                    return new e(this.x - t.x, this.y - t.y, this.z - t.z, this.w - t.w)
                }, e.prototype.scale = function(t) {
                    return new e(this.x * t, this.y * t, this.z * t, this.w * t)
                }, e.prototype.scaleToRef = function(e, t) {
                    return t.x = this.x * e, t.y = this.y * e, t.z = this.z * e, t.w = this.w * e, this
                }, e.prototype.scaleInPlace = function(e) {
                    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
                }, e.prototype.scaleAndAddToRef = function(e, t) {
                    return t.x += this.x * e, t.y += this.y * e, t.z += this.z * e, t.w += this.w * e, this
                }, e.prototype.multiply = function(t) {
                    var i = new e(0, 0, 0, 1);
                    return this.multiplyToRef(t, i), i
                }, e.prototype.multiplyToRef = function(e, t) {
                    var i = this.x * e.w + this.y * e.z - this.z * e.y + this.w * e.x,
                        n = -this.x * e.z + this.y * e.w + this.z * e.x + this.w * e.y,
                        r = this.x * e.y - this.y * e.x + this.z * e.w + this.w * e.z,
                        o = -this.x * e.x - this.y * e.y - this.z * e.z + this.w * e.w;
                    return t.copyFromFloats(i, n, r, o), this
                }, e.prototype.multiplyInPlace = function(e) {
                    return this.multiplyToRef(e, this), this
                }, e.prototype.conjugateToRef = function(e) {
                    return e.copyFromFloats(-this.x, -this.y, -this.z, this.w), this
                }, e.prototype.conjugateInPlace = function() {
                    return this.x *= -1, this.y *= -1, this.z *= -1, this
                }, e.prototype.conjugate = function() {
                    return new e(-this.x, -this.y, -this.z, this.w)
                }, e.prototype.length = function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
                }, e.prototype.normalize = function() {
                    var e = this.length();
                    if (0 === e) return this;
                    var t = 1 / e;
                    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
                }, e.prototype.toEulerAngles = function(e) {
                    void 0 === e && (e = "YZX");
                    var t = d.Zero();
                    return this.toEulerAnglesToRef(t), t
                }, e.prototype.toEulerAnglesToRef = function(e) {
                    var t = this.z,
                        i = this.x,
                        n = this.y,
                        r = this.w,
                        o = r * r,
                        s = t * t,
                        a = i * i,
                        c = n * n,
                        l = n * t - i * r;
                    return l < -.4999999 ? (e.y = 2 * Math.atan2(n, r), e.x = Math.PI / 2, e.z = 0) : l > .4999999 ? (e.y = 2 * Math.atan2(n, r), e.x = -Math.PI / 2, e.z = 0) : (e.z = Math.atan2(2 * (i * n + t * r), -s - a + c + o), e.x = Math.asin(-2 * (t * n - i * r)), e.y = Math.atan2(2 * (t * i + n * r), s - a - c + o)), this
                }, e.prototype.toRotationMatrix = function(e) {
                    return g.FromQuaternionToRef(this, e), this
                }, e.prototype.fromRotationMatrix = function(t) {
                    return e.FromRotationMatrixToRef(t, this), this
                }, e.FromRotationMatrix = function(t) {
                    var i = new e;
                    return e.FromRotationMatrixToRef(t, i), i
                }, e.FromRotationMatrixToRef = function(e, t) {
                    var i, n = e.m,
                        r = n[0],
                        o = n[4],
                        s = n[8],
                        a = n[1],
                        c = n[5],
                        l = n[9],
                        u = n[2],
                        h = n[6],
                        d = n[10],
                        f = r + c + d;
                    f > 0 ? (i = .5 / Math.sqrt(f + 1), t.w = .25 / i, t.x = (h - l) * i, t.y = (s - u) * i, t.z = (a - o) * i) : r > c && r > d ? (i = 2 * Math.sqrt(1 + r - c - d), t.w = (h - l) / i, t.x = .25 * i, t.y = (o + a) / i, t.z = (s + u) / i) : c > d ? (i = 2 * Math.sqrt(1 + c - r - d), t.w = (s - u) / i, t.x = (o + a) / i, t.y = .25 * i, t.z = (l + h) / i) : (i = 2 * Math.sqrt(1 + d - r - c), t.w = (a - o) / i, t.x = (s + u) / i, t.y = (l + h) / i, t.z = .25 * i)
                }, e.Dot = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
                }, e.AreClose = function(t, i) {
                    return e.Dot(t, i) >= 0
                }, e.Zero = function() {
                    return new e(0, 0, 0, 0)
                }, e.Inverse = function(t) {
                    return new e(-t.x, -t.y, -t.z, t.w)
                }, e.InverseToRef = function(e, t) {
                    return t.set(-e.x, -e.y, -e.z, e.w), t
                }, e.Identity = function() {
                    return new e(0, 0, 0, 1)
                }, e.IsIdentity = function(e) {
                    return e && 0 === e.x && 0 === e.y && 0 === e.z && 1 === e.w
                }, e.RotationAxis = function(t, i) {
                    return e.RotationAxisToRef(t, i, new e)
                }, e.RotationAxisToRef = function(e, t, i) {
                    var n = Math.sin(t / 2);
                    return e.normalize(), i.w = Math.cos(t / 2), i.x = e.x * n, i.y = e.y * n, i.z = e.z * n, i
                }, e.FromArray = function(t, i) {
                    return i || (i = 0), new e(t[i], t[i + 1], t[i + 2], t[i + 3])
                }, e.FromEulerAngles = function(t, i, n) {
                    var r = new e;
                    return e.RotationYawPitchRollToRef(i, t, n, r), r
                }, e.FromEulerAnglesToRef = function(t, i, n, r) {
                    return e.RotationYawPitchRollToRef(i, t, n, r), r
                }, e.FromEulerVector = function(t) {
                    var i = new e;
                    return e.RotationYawPitchRollToRef(t.y, t.x, t.z, i), i
                }, e.FromEulerVectorToRef = function(t, i) {
                    return e.RotationYawPitchRollToRef(t.y, t.x, t.z, i), i
                }, e.RotationYawPitchRoll = function(t, i, n) {
                    var r = new e;
                    return e.RotationYawPitchRollToRef(t, i, n, r), r
                }, e.RotationYawPitchRollToRef = function(e, t, i, n) {
                    var r = .5 * i,
                        o = .5 * t,
                        s = .5 * e,
                        a = Math.sin(r),
                        c = Math.cos(r),
                        l = Math.sin(o),
                        u = Math.cos(o),
                        h = Math.sin(s),
                        d = Math.cos(s);
                    n.x = d * l * c + h * u * a, n.y = h * u * c - d * l * a, n.z = d * u * a - h * l * c, n.w = d * u * c + h * l * a
                }, e.RotationAlphaBetaGamma = function(t, i, n) {
                    var r = new e;
                    return e.RotationAlphaBetaGammaToRef(t, i, n, r), r
                }, e.RotationAlphaBetaGammaToRef = function(e, t, i, n) {
                    var r = .5 * (i + e),
                        o = .5 * (i - e),
                        s = .5 * t;
                    n.x = Math.cos(o) * Math.sin(s), n.y = Math.sin(o) * Math.sin(s), n.z = Math.sin(r) * Math.cos(s), n.w = Math.cos(r) * Math.cos(s)
                }, e.RotationQuaternionFromAxis = function(t, i, n) {
                    var r = new e(0, 0, 0, 0);
                    return e.RotationQuaternionFromAxisToRef(t, i, n, r), r
                }, e.RotationQuaternionFromAxisToRef = function(t, i, n, r) {
                    var o = I.Matrix[0];
                    g.FromXYZAxesToRef(t.normalize(), i.normalize(), n.normalize(), o), e.FromRotationMatrixToRef(o, r)
                }, e.Slerp = function(t, i, n) {
                    var r = e.Identity();
                    return e.SlerpToRef(t, i, n, r), r
                }, e.SlerpToRef = function(e, t, i, n) {
                    var r, o, s = e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w,
                        a = !1;
                    if (s < 0 && (a = !0, s = -s), s > .999999) o = 1 - i, r = a ? -i : i;
                    else {
                        var c = Math.acos(s),
                            l = 1 / Math.sin(c);
                        o = Math.sin((1 - i) * c) * l, r = a ? -Math.sin(i * c) * l : Math.sin(i * c) * l
                    }
                    n.x = o * e.x + r * t.x, n.y = o * e.y + r * t.y, n.z = o * e.z + r * t.z, n.w = o * e.w + r * t.w
                }, e.Hermite = function(t, i, n, r, o) {
                    var s = o * o,
                        a = o * s,
                        c = 2 * a - 3 * s + 1,
                        l = -2 * a + 3 * s,
                        u = a - 2 * s + o,
                        h = a - s;
                    return new e(t.x * c + n.x * l + i.x * u + r.x * h, t.y * c + n.y * l + i.y * u + r.y * h, t.z * c + n.z * l + i.z * u + r.z * h, t.w * c + n.w * l + i.w * u + r.w * h)
                }, e
            }(),
            g = function() {
                function e() {
                    this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, this._m = new Float32Array(16), this._updateIdentityStatus(!1)
                }
                return Object.defineProperty(e.prototype, "m", {
                    get: function() {
                        return this._m
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._markAsUpdated = function() {
                    this.updateFlag = e._updateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
                }, e.prototype._updateIdentityStatus = function(t, i, n, r) {
                    void 0 === i && (i = !1), void 0 === n && (n = !1), void 0 === r && (r = !0), this.updateFlag = e._updateFlagSeed++, this._isIdentity = t, this._isIdentity3x2 = t || n, this._isIdentityDirty = !this._isIdentity && i, this._isIdentity3x2Dirty = !this._isIdentity3x2 && r
                }, e.prototype.isIdentity = function() {
                    if (this._isIdentityDirty) {
                        this._isIdentityDirty = !1;
                        var e = this._m;
                        this._isIdentity = 1 === e[0] && 0 === e[1] && 0 === e[2] && 0 === e[3] && 0 === e[4] && 1 === e[5] && 0 === e[6] && 0 === e[7] && 0 === e[8] && 0 === e[9] && 1 === e[10] && 0 === e[11] && 0 === e[12] && 0 === e[13] && 0 === e[14] && 1 === e[15]
                    }
                    return this._isIdentity
                }, e.prototype.isIdentityAs3x2 = function() {
                    return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] ? this._isIdentity3x2 = !1 : 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
                }, e.prototype.determinant = function() {
                    if (!0 === this._isIdentity) return 1;
                    var e = this._m,
                        t = e[0],
                        i = e[1],
                        n = e[2],
                        r = e[3],
                        o = e[4],
                        s = e[5],
                        a = e[6],
                        c = e[7],
                        l = e[8],
                        u = e[9],
                        h = e[10],
                        d = e[11],
                        f = e[12],
                        p = e[13],
                        _ = e[14],
                        g = e[15],
                        m = h * g - _ * d,
                        v = u * g - p * d,
                        y = u * _ - p * h,
                        b = l * g - f * d,
                        T = l * _ - h * f,
                        E = l * p - f * u;
                    return t * +(s * m - a * v + c * y) + i * -(o * m - a * b + c * T) + n * +(o * v - s * b + c * E) + r * -(o * y - s * T + a * E)
                }, e.prototype.toArray = function() {
                    return this._m
                }, e.prototype.asArray = function() {
                    return this._m
                }, e.prototype.invert = function() {
                    return this.invertToRef(this), this
                }, e.prototype.reset = function() {
                    return e.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
                }, e.prototype.add = function(t) {
                    var i = new e;
                    return this.addToRef(t, i), i
                }, e.prototype.addToRef = function(e, t) {
                    for (var i = this._m, n = t._m, r = e.m, o = 0; o < 16; o++) n[o] = i[o] + r[o];
                    return t._markAsUpdated(), this
                }, e.prototype.addToSelf = function(e) {
                    for (var t = this._m, i = e.m, n = 0; n < 16; n++) t[n] += i[n];
                    return this._markAsUpdated(), this
                }, e.prototype.invertToRef = function(t) {
                    if (!0 === this._isIdentity) return e.IdentityToRef(t), this;
                    var i = this._m,
                        n = i[0],
                        r = i[1],
                        o = i[2],
                        s = i[3],
                        a = i[4],
                        c = i[5],
                        l = i[6],
                        u = i[7],
                        h = i[8],
                        d = i[9],
                        f = i[10],
                        p = i[11],
                        _ = i[12],
                        g = i[13],
                        m = i[14],
                        v = i[15],
                        y = f * v - m * p,
                        b = d * v - g * p,
                        T = d * m - g * f,
                        E = h * v - _ * p,
                        A = h * m - f * _,
                        x = h * g - _ * d,
                        R = +(c * y - l * b + u * T),
                        P = -(a * y - l * E + u * A),
                        S = +(a * b - c * E + u * x),
                        C = -(a * T - c * A + l * x),
                        M = n * R + r * P + o * S + s * C;
                    if (0 === M) return t.copyFrom(this), this;
                    var O = 1 / M,
                        I = l * v - m * u,
                        D = c * v - g * u,
                        L = c * m - g * l,
                        w = a * v - _ * u,
                        F = a * m - _ * l,
                        N = a * g - _ * c,
                        B = l * p - f * u,
                        U = c * p - d * u,
                        V = c * f - d * l,
                        G = a * p - h * u,
                        k = a * f - h * l,
                        z = a * d - h * c,
                        j = -(r * y - o * b + s * T),
                        H = +(n * y - o * E + s * A),
                        W = -(n * b - r * E + s * x),
                        X = +(n * T - r * A + o * x),
                        Y = +(r * I - o * D + s * L),
                        K = -(n * I - o * w + s * F),
                        Q = +(n * D - r * w + s * N),
                        q = -(n * L - r * F + o * N),
                        Z = -(r * B - o * U + s * V),
                        J = +(n * B - o * G + s * k),
                        $ = -(n * U - r * G + s * z),
                        ee = +(n * V - r * k + o * z);
                    return e.FromValuesToRef(R * O, j * O, Y * O, Z * O, P * O, H * O, K * O, J * O, S * O, W * O, Q * O, $ * O, C * O, X * O, q * O, ee * O, t), this
                }, e.prototype.addAtIndex = function(e, t) {
                    return this._m[e] += t, this._markAsUpdated(), this
                }, e.prototype.multiplyAtIndex = function(e, t) {
                    return this._m[e] *= t, this._markAsUpdated(), this
                }, e.prototype.setTranslationFromFloats = function(e, t, i) {
                    return this._m[12] = e, this._m[13] = t, this._m[14] = i, this._markAsUpdated(), this
                }, e.prototype.addTranslationFromFloats = function(e, t, i) {
                    return this._m[12] += e, this._m[13] += t, this._m[14] += i, this._markAsUpdated(), this
                }, e.prototype.setTranslation = function(e) {
                    return this.setTranslationFromFloats(e.x, e.y, e.z)
                }, e.prototype.getTranslation = function() {
                    return new d(this._m[12], this._m[13], this._m[14])
                }, e.prototype.getTranslationToRef = function(e) {
                    return e.x = this._m[12], e.y = this._m[13], e.z = this._m[14], this
                }, e.prototype.removeRotationAndScaling = function() {
                    var t = this.m;
                    return e.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t[12], t[13], t[14], t[15], this), this._updateIdentityStatus(0 === t[12] && 0 === t[13] && 0 === t[14] && 1 === t[15]), this
                }, e.prototype.multiply = function(t) {
                    var i = new e;
                    return this.multiplyToRef(t, i), i
                }, e.prototype.copyFrom = function(e) {
                    e.copyToArray(this._m);
                    var t = e;
                    return this._updateIdentityStatus(t._isIdentity, t._isIdentityDirty, t._isIdentity3x2, t._isIdentity3x2Dirty), this
                }, e.prototype.copyToArray = function(e, t) {
                    void 0 === t && (t = 0);
                    for (var i = 0; i < 16; i++) e[t + i] = this._m[i];
                    return this
                }, e.prototype.multiplyToRef = function(e, t) {
                    return this._isIdentity ? (t.copyFrom(e), this) : e._isIdentity ? (t.copyFrom(this), this) : (this.multiplyToArray(e, t._m, 0), t._markAsUpdated(), this)
                }, e.prototype.multiplyToArray = function(e, t, i) {
                    var n = this._m,
                        r = e.m,
                        o = n[0],
                        s = n[1],
                        a = n[2],
                        c = n[3],
                        l = n[4],
                        u = n[5],
                        h = n[6],
                        d = n[7],
                        f = n[8],
                        p = n[9],
                        _ = n[10],
                        g = n[11],
                        m = n[12],
                        v = n[13],
                        y = n[14],
                        b = n[15],
                        T = r[0],
                        E = r[1],
                        A = r[2],
                        x = r[3],
                        R = r[4],
                        P = r[5],
                        S = r[6],
                        C = r[7],
                        M = r[8],
                        O = r[9],
                        I = r[10],
                        D = r[11],
                        L = r[12],
                        w = r[13],
                        F = r[14],
                        N = r[15];
                    return t[i] = o * T + s * R + a * M + c * L, t[i + 1] = o * E + s * P + a * O + c * w, t[i + 2] = o * A + s * S + a * I + c * F, t[i + 3] = o * x + s * C + a * D + c * N, t[i + 4] = l * T + u * R + h * M + d * L, t[i + 5] = l * E + u * P + h * O + d * w, t[i + 6] = l * A + u * S + h * I + d * F, t[i + 7] = l * x + u * C + h * D + d * N, t[i + 8] = f * T + p * R + _ * M + g * L, t[i + 9] = f * E + p * P + _ * O + g * w, t[i + 10] = f * A + p * S + _ * I + g * F, t[i + 11] = f * x + p * C + _ * D + g * N, t[i + 12] = m * T + v * R + y * M + b * L, t[i + 13] = m * E + v * P + y * O + b * w, t[i + 14] = m * A + v * S + y * I + b * F, t[i + 15] = m * x + v * C + y * D + b * N, this
                }, e.prototype.equals = function(e) {
                    var t = e;
                    if (!t) return !1;
                    if ((this._isIdentity || t._isIdentity) && !this._isIdentityDirty && !t._isIdentityDirty) return this._isIdentity && t._isIdentity;
                    var i = this.m,
                        n = t.m;
                    return i[0] === n[0] && i[1] === n[1] && i[2] === n[2] && i[3] === n[3] && i[4] === n[4] && i[5] === n[5] && i[6] === n[6] && i[7] === n[7] && i[8] === n[8] && i[9] === n[9] && i[10] === n[10] && i[11] === n[11] && i[12] === n[12] && i[13] === n[13] && i[14] === n[14] && i[15] === n[15]
                }, e.prototype.clone = function() {
                    var t = new e;
                    return t.copyFrom(this), t
                }, e.prototype.getClassName = function() {
                    return "Matrix"
                }, e.prototype.getHashCode = function() {
                    for (var e = this._m[0] || 0, t = 1; t < 16; t++) e = 397 * e ^ (this._m[t] || 0);
                    return e
                }, e.prototype.decompose = function(t, i, n) {
                    if (this._isIdentity) return n && n.setAll(0), t && t.setAll(1), i && i.copyFromFloats(0, 0, 0, 1), !0;
                    var r = this._m;
                    if (n && n.copyFromFloats(r[12], r[13], r[14]), (t = t || I.Vector3[0]).x = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]), t.y = Math.sqrt(r[4] * r[4] + r[5] * r[5] + r[6] * r[6]), t.z = Math.sqrt(r[8] * r[8] + r[9] * r[9] + r[10] * r[10]), this.determinant() <= 0 && (t.y *= -1), 0 === t.x || 0 === t.y || 0 === t.z) return i && i.copyFromFloats(0, 0, 0, 1), !1;
                    if (i) {
                        var o = 1 / t.x,
                            s = 1 / t.y,
                            a = 1 / t.z;
                        e.FromValuesToRef(r[0] * o, r[1] * o, r[2] * o, 0, r[4] * s, r[5] * s, r[6] * s, 0, r[8] * a, r[9] * a, r[10] * a, 0, 0, 0, 0, 1, I.Matrix[0]), _.FromRotationMatrixToRef(I.Matrix[0], i)
                    }
                    return !0
                }, e.prototype.getRow = function(e) {
                    if (e < 0 || e > 3) return null;
                    var t = 4 * e;
                    return new f(this._m[t + 0], this._m[t + 1], this._m[t + 2], this._m[t + 3])
                }, e.prototype.setRow = function(e, t) {
                    return this.setRowFromFloats(e, t.x, t.y, t.z, t.w)
                }, e.prototype.transpose = function() {
                    return e.Transpose(this)
                }, e.prototype.transposeToRef = function(t) {
                    return e.TransposeToRef(this, t), this
                }, e.prototype.setRowFromFloats = function(e, t, i, n, r) {
                    if (e < 0 || e > 3) return this;
                    var o = 4 * e;
                    return this._m[o + 0] = t, this._m[o + 1] = i, this._m[o + 2] = n, this._m[o + 3] = r, this._markAsUpdated(), this
                }, e.prototype.scale = function(t) {
                    var i = new e;
                    return this.scaleToRef(t, i), i
                }, e.prototype.scaleToRef = function(e, t) {
                    for (var i = 0; i < 16; i++) t._m[i] = this._m[i] * e;
                    return t._markAsUpdated(), this
                }, e.prototype.scaleAndAddToRef = function(e, t) {
                    for (var i = 0; i < 16; i++) t._m[i] += this._m[i] * e;
                    return t._markAsUpdated(), this
                }, e.prototype.toNormalMatrix = function(t) {
                    var i = I.Matrix[0];
                    this.invertToRef(i), i.transposeToRef(t);
                    var n = t._m;
                    e.FromValuesToRef(n[0], n[1], n[2], 0, n[4], n[5], n[6], 0, n[8], n[9], n[10], 0, 0, 0, 0, 1, t)
                }, e.prototype.getRotationMatrix = function() {
                    var t = new e;
                    return this.getRotationMatrixToRef(t), t
                }, e.prototype.getRotationMatrixToRef = function(t) {
                    var i = I.Vector3[0];
                    if (!this.decompose(i)) return e.IdentityToRef(t), this;
                    var n = this._m,
                        r = 1 / i.x,
                        o = 1 / i.y,
                        s = 1 / i.z;
                    return e.FromValuesToRef(n[0] * r, n[1] * r, n[2] * r, 0, n[4] * o, n[5] * o, n[6] * o, 0, n[8] * s, n[9] * s, n[10] * s, 0, 0, 0, 0, 1, t), this
                }, e.prototype.toggleModelMatrixHandInPlace = function() {
                    var e = this._m;
                    e[2] *= -1, e[6] *= -1, e[8] *= -1, e[9] *= -1, e[14] *= -1, this._markAsUpdated()
                }, e.prototype.toggleProjectionMatrixHandInPlace = function() {
                    var e = this._m;
                    e[8] *= -1, e[9] *= -1, e[10] *= -1, e[11] *= -1, this._markAsUpdated()
                }, e.FromArray = function(t, i) {
                    void 0 === i && (i = 0);
                    var n = new e;
                    return e.FromArrayToRef(t, i, n), n
                }, e.FromArrayToRef = function(e, t, i) {
                    for (var n = 0; n < 16; n++) i._m[n] = e[n + t];
                    i._markAsUpdated()
                }, e.FromFloat32ArrayToRefScaled = function(e, t, i, n) {
                    for (var r = 0; r < 16; r++) n._m[r] = e[r + t] * i;
                    n._markAsUpdated()
                }, Object.defineProperty(e, "IdentityReadOnly", {
                    get: function() {
                        return e._identityReadOnly
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.FromValuesToRef = function(e, t, i, n, r, o, s, a, c, l, u, h, d, f, p, _, g) {
                    var m = g._m;
                    m[0] = e, m[1] = t, m[2] = i, m[3] = n, m[4] = r, m[5] = o, m[6] = s, m[7] = a, m[8] = c, m[9] = l, m[10] = u, m[11] = h, m[12] = d, m[13] = f, m[14] = p, m[15] = _, g._markAsUpdated()
                }, e.FromValues = function(t, i, n, r, o, s, a, c, l, u, h, d, f, p, _, g) {
                    var m = new e,
                        v = m._m;
                    return v[0] = t, v[1] = i, v[2] = n, v[3] = r, v[4] = o, v[5] = s, v[6] = a, v[7] = c, v[8] = l, v[9] = u, v[10] = h, v[11] = d, v[12] = f, v[13] = p, v[14] = _, v[15] = g, m._markAsUpdated(), m
                }, e.Compose = function(t, i, n) {
                    var r = new e;
                    return e.ComposeToRef(t, i, n, r), r
                }, e.ComposeToRef = function(e, t, i, n) {
                    var r = n._m,
                        o = t.x,
                        s = t.y,
                        a = t.z,
                        c = t.w,
                        l = o + o,
                        u = s + s,
                        h = a + a,
                        d = o * l,
                        f = o * u,
                        p = o * h,
                        _ = s * u,
                        g = s * h,
                        m = a * h,
                        v = c * l,
                        y = c * u,
                        b = c * h,
                        T = e.x,
                        E = e.y,
                        A = e.z;
                    r[0] = (1 - (_ + m)) * T, r[1] = (f + b) * T, r[2] = (p - y) * T, r[3] = 0, r[4] = (f - b) * E, r[5] = (1 - (d + m)) * E, r[6] = (g + v) * E, r[7] = 0, r[8] = (p + y) * A, r[9] = (g - v) * A, r[10] = (1 - (d + _)) * A, r[11] = 0, r[12] = i.x, r[13] = i.y, r[14] = i.z, r[15] = 1, n._markAsUpdated()
                }, e.Identity = function() {
                    var t = e.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                    return t._updateIdentityStatus(!0), t
                }, e.IdentityToRef = function(t) {
                    e.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, t), t._updateIdentityStatus(!0)
                }, e.Zero = function() {
                    var t = e.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    return t._updateIdentityStatus(!1), t
                }, e.RotationX = function(t) {
                    var i = new e;
                    return e.RotationXToRef(t, i), i
                }, e.Invert = function(t) {
                    var i = new e;
                    return t.invertToRef(i), i
                }, e.RotationXToRef = function(t, i) {
                    var n = Math.sin(t),
                        r = Math.cos(t);
                    e.FromValuesToRef(1, 0, 0, 0, 0, r, n, 0, 0, -n, r, 0, 0, 0, 0, 1, i), i._updateIdentityStatus(1 === r && 0 === n)
                }, e.RotationY = function(t) {
                    var i = new e;
                    return e.RotationYToRef(t, i), i
                }, e.RotationYToRef = function(t, i) {
                    var n = Math.sin(t),
                        r = Math.cos(t);
                    e.FromValuesToRef(r, 0, -n, 0, 0, 1, 0, 0, n, 0, r, 0, 0, 0, 0, 1, i), i._updateIdentityStatus(1 === r && 0 === n)
                }, e.RotationZ = function(t) {
                    var i = new e;
                    return e.RotationZToRef(t, i), i
                }, e.RotationZToRef = function(t, i) {
                    var n = Math.sin(t),
                        r = Math.cos(t);
                    e.FromValuesToRef(r, n, 0, 0, -n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, i), i._updateIdentityStatus(1 === r && 0 === n)
                }, e.RotationAxis = function(t, i) {
                    var n = new e;
                    return e.RotationAxisToRef(t, i, n), n
                }, e.RotationAxisToRef = function(e, t, i) {
                    var n = Math.sin(-t),
                        r = Math.cos(-t),
                        o = 1 - r;
                    e.normalize();
                    var s = i._m;
                    s[0] = e.x * e.x * o + r, s[1] = e.x * e.y * o - e.z * n, s[2] = e.x * e.z * o + e.y * n, s[3] = 0, s[4] = e.y * e.x * o + e.z * n, s[5] = e.y * e.y * o + r, s[6] = e.y * e.z * o - e.x * n, s[7] = 0, s[8] = e.z * e.x * o - e.y * n, s[9] = e.z * e.y * o + e.x * n, s[10] = e.z * e.z * o + r, s[11] = 0, s[12] = 0, s[13] = 0, s[14] = 0, s[15] = 1, i._markAsUpdated()
                }, e.RotationAlignToRef = function(e, t, i) {
                    var n = d.Cross(t, e),
                        r = d.Dot(t, e),
                        o = 1 / (1 + r),
                        s = i._m;
                    s[0] = n.x * n.x * o + r, s[1] = n.y * n.x * o - n.z, s[2] = n.z * n.x * o + n.y, s[3] = 0, s[4] = n.x * n.y * o + n.z, s[5] = n.y * n.y * o + r, s[6] = n.z * n.y * o - n.x, s[7] = 0, s[8] = n.x * n.z * o - n.y, s[9] = n.y * n.z * o + n.x, s[10] = n.z * n.z * o + r, s[11] = 0, s[12] = 0, s[13] = 0, s[14] = 0, s[15] = 1, i._markAsUpdated()
                }, e.RotationYawPitchRoll = function(t, i, n) {
                    var r = new e;
                    return e.RotationYawPitchRollToRef(t, i, n, r), r
                }, e.RotationYawPitchRollToRef = function(e, t, i, n) {
                    _.RotationYawPitchRollToRef(e, t, i, I.Quaternion[0]), I.Quaternion[0].toRotationMatrix(n)
                }, e.Scaling = function(t, i, n) {
                    var r = new e;
                    return e.ScalingToRef(t, i, n, r), r
                }, e.ScalingToRef = function(t, i, n, r) {
                    e.FromValuesToRef(t, 0, 0, 0, 0, i, 0, 0, 0, 0, n, 0, 0, 0, 0, 1, r), r._updateIdentityStatus(1 === t && 1 === i && 1 === n)
                }, e.Translation = function(t, i, n) {
                    var r = new e;
                    return e.TranslationToRef(t, i, n, r), r
                }, e.TranslationToRef = function(t, i, n, r) {
                    e.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, n, 1, r), r._updateIdentityStatus(0 === t && 0 === i && 0 === n)
                }, e.Lerp = function(t, i, n) {
                    var r = new e;
                    return e.LerpToRef(t, i, n, r), r
                }, e.LerpToRef = function(e, t, i, n) {
                    for (var r = n._m, o = e.m, s = t.m, a = 0; a < 16; a++) r[a] = o[a] * (1 - i) + s[a] * i;
                    n._markAsUpdated()
                }, e.DecomposeLerp = function(t, i, n) {
                    var r = new e;
                    return e.DecomposeLerpToRef(t, i, n, r), r
                }, e.DecomposeLerpToRef = function(t, i, n, r) {
                    var o = I.Vector3[0],
                        s = I.Quaternion[0],
                        a = I.Vector3[1];
                    t.decompose(o, s, a);
                    var c = I.Vector3[2],
                        l = I.Quaternion[1],
                        u = I.Vector3[3];
                    i.decompose(c, l, u);
                    var h = I.Vector3[4];
                    d.LerpToRef(o, c, n, h);
                    var f = I.Quaternion[2];
                    _.SlerpToRef(s, l, n, f);
                    var p = I.Vector3[5];
                    d.LerpToRef(a, u, n, p), e.ComposeToRef(h, f, p, r)
                }, e.LookAtLH = function(t, i, n) {
                    var r = new e;
                    return e.LookAtLHToRef(t, i, n, r), r
                }, e.LookAtLHToRef = function(t, i, n, r) {
                    var o = I.Vector3[0],
                        s = I.Vector3[1],
                        a = I.Vector3[2];
                    i.subtractToRef(t, a), a.normalize(), d.CrossToRef(n, a, o);
                    var c = o.lengthSquared();
                    0 === c ? o.x = 1 : o.normalizeFromLength(Math.sqrt(c)), d.CrossToRef(a, o, s), s.normalize();
                    var l = -d.Dot(o, t),
                        u = -d.Dot(s, t),
                        h = -d.Dot(a, t);
                    e.FromValuesToRef(o.x, s.x, a.x, 0, o.y, s.y, a.y, 0, o.z, s.z, a.z, 0, l, u, h, 1, r)
                }, e.LookAtRH = function(t, i, n) {
                    var r = new e;
                    return e.LookAtRHToRef(t, i, n, r), r
                }, e.LookAtRHToRef = function(t, i, n, r) {
                    var o = I.Vector3[0],
                        s = I.Vector3[1],
                        a = I.Vector3[2];
                    t.subtractToRef(i, a), a.normalize(), d.CrossToRef(n, a, o);
                    var c = o.lengthSquared();
                    0 === c ? o.x = 1 : o.normalizeFromLength(Math.sqrt(c)), d.CrossToRef(a, o, s), s.normalize();
                    var l = -d.Dot(o, t),
                        u = -d.Dot(s, t),
                        h = -d.Dot(a, t);
                    e.FromValuesToRef(o.x, s.x, a.x, 0, o.y, s.y, a.y, 0, o.z, s.z, a.z, 0, l, u, h, 1, r)
                }, e.OrthoLH = function(t, i, n, r) {
                    var o = new e;
                    return e.OrthoLHToRef(t, i, n, r, o), o
                }, e.OrthoLHToRef = function(t, i, n, r, o) {
                    var s = 2 / t,
                        a = 2 / i,
                        c = 2 / (r - n),
                        l = -(r + n) / (r - n);
                    e.FromValuesToRef(s, 0, 0, 0, 0, a, 0, 0, 0, 0, c, 0, 0, 0, l, 1, o), o._updateIdentityStatus(1 === s && 1 === a && 1 === c && 0 === l)
                }, e.OrthoOffCenterLH = function(t, i, n, r, o, s) {
                    var a = new e;
                    return e.OrthoOffCenterLHToRef(t, i, n, r, o, s, a), a
                }, e.OrthoOffCenterLHToRef = function(t, i, n, r, o, s, a) {
                    var c = 2 / (i - t),
                        l = 2 / (r - n),
                        u = 2 / (s - o),
                        h = -(s + o) / (s - o),
                        d = (t + i) / (t - i),
                        f = (r + n) / (n - r);
                    e.FromValuesToRef(c, 0, 0, 0, 0, l, 0, 0, 0, 0, u, 0, d, f, h, 1, a), a._markAsUpdated()
                }, e.OrthoOffCenterRH = function(t, i, n, r, o, s) {
                    var a = new e;
                    return e.OrthoOffCenterRHToRef(t, i, n, r, o, s, a), a
                }, e.OrthoOffCenterRHToRef = function(t, i, n, r, o, s, a) {
                    e.OrthoOffCenterLHToRef(t, i, n, r, o, s, a), a._m[10] *= -1
                }, e.PerspectiveLH = function(t, i, n, r) {
                    var o = new e,
                        s = 2 * n / t,
                        a = 2 * n / i,
                        c = (r + n) / (r - n),
                        l = -2 * r * n / (r - n);
                    return e.FromValuesToRef(s, 0, 0, 0, 0, a, 0, 0, 0, 0, c, 1, 0, 0, l, 0, o), o._updateIdentityStatus(!1), o
                }, e.PerspectiveFovLH = function(t, i, n, r) {
                    var o = new e;
                    return e.PerspectiveFovLHToRef(t, i, n, r, o), o
                }, e.PerspectiveFovLHToRef = function(t, i, n, r, o, s) {
                    void 0 === s && (s = !0);
                    var a = n,
                        c = r,
                        l = 1 / Math.tan(.5 * t),
                        u = s ? l / i : l,
                        h = s ? l : l * i,
                        d = (c + a) / (c - a),
                        f = -2 * c * a / (c - a);
                    e.FromValuesToRef(u, 0, 0, 0, 0, h, 0, 0, 0, 0, d, 1, 0, 0, f, 0, o), o._updateIdentityStatus(!1)
                }, e.PerspectiveFovRH = function(t, i, n, r) {
                    var o = new e;
                    return e.PerspectiveFovRHToRef(t, i, n, r, o), o
                }, e.PerspectiveFovRHToRef = function(t, i, n, r, o, s) {
                    void 0 === s && (s = !0);
                    var a = n,
                        c = r,
                        l = 1 / Math.tan(.5 * t),
                        u = s ? l / i : l,
                        h = s ? l : l * i,
                        d = -(c + a) / (c - a),
                        f = -2 * c * a / (c - a);
                    e.FromValuesToRef(u, 0, 0, 0, 0, h, 0, 0, 0, 0, d, -1, 0, 0, f, 0, o), o._updateIdentityStatus(!1)
                }, e.PerspectiveFovWebVRToRef = function(e, t, i, n, r) {
                    void 0 === r && (r = !1);
                    var o = r ? -1 : 1,
                        s = Math.tan(e.upDegrees * Math.PI / 180),
                        a = Math.tan(e.downDegrees * Math.PI / 180),
                        c = Math.tan(e.leftDegrees * Math.PI / 180),
                        l = Math.tan(e.rightDegrees * Math.PI / 180),
                        u = 2 / (c + l),
                        h = 2 / (s + a),
                        d = n._m;
                    d[0] = u, d[1] = d[2] = d[3] = d[4] = 0, d[5] = h, d[6] = d[7] = 0, d[8] = (c - l) * u * .5, d[9] = -(s - a) * h * .5, d[10] = -i / (t - i), d[11] = 1 * o, d[12] = d[13] = d[15] = 0, d[14] = -2 * i * t / (i - t), n._markAsUpdated()
                }, e.GetFinalMatrix = function(t, i, n, r, o, s) {
                    var a = t.width,
                        c = t.height,
                        l = t.x,
                        u = t.y,
                        h = e.FromValues(a / 2, 0, 0, 0, 0, -c / 2, 0, 0, 0, 0, s - o, 0, l + a / 2, c / 2 + u, o, 1),
                        d = I.Matrix[0];
                    return i.multiplyToRef(n, d), d.multiplyToRef(r, d), d.multiply(h)
                }, e.GetAsMatrix2x2 = function(e) {
                    var t = e.m;
                    return new Float32Array([t[0], t[1], t[4], t[5]])
                }, e.GetAsMatrix3x3 = function(e) {
                    var t = e.m;
                    return new Float32Array([t[0], t[1], t[2], t[4], t[5], t[6], t[8], t[9], t[10]])
                }, e.Transpose = function(t) {
                    var i = new e;
                    return e.TransposeToRef(t, i), i
                }, e.TransposeToRef = function(e, t) {
                    var i = t._m,
                        n = e.m;
                    i[0] = n[0], i[1] = n[4], i[2] = n[8], i[3] = n[12], i[4] = n[1], i[5] = n[5], i[6] = n[9], i[7] = n[13], i[8] = n[2], i[9] = n[6], i[10] = n[10], i[11] = n[14], i[12] = n[3], i[13] = n[7], i[14] = n[11], i[15] = n[15], t._updateIdentityStatus(e._isIdentity, e._isIdentityDirty)
                }, e.Reflection = function(t) {
                    var i = new e;
                    return e.ReflectionToRef(t, i), i
                }, e.ReflectionToRef = function(t, i) {
                    t.normalize();
                    var n = t.normal.x,
                        r = t.normal.y,
                        o = t.normal.z,
                        s = -2 * n,
                        a = -2 * r,
                        c = -2 * o;
                    e.FromValuesToRef(s * n + 1, a * n, c * n, 0, s * r, a * r + 1, c * r, 0, s * o, a * o, c * o + 1, 0, s * t.d, a * t.d, c * t.d, 1, i)
                }, e.FromXYZAxesToRef = function(t, i, n, r) {
                    e.FromValuesToRef(t.x, t.y, t.z, 0, i.x, i.y, i.z, 0, n.x, n.y, n.z, 0, 0, 0, 0, 1, r)
                }, e.FromQuaternionToRef = function(e, t) {
                    var i = e.x * e.x,
                        n = e.y * e.y,
                        r = e.z * e.z,
                        o = e.x * e.y,
                        s = e.z * e.w,
                        a = e.z * e.x,
                        c = e.y * e.w,
                        l = e.y * e.z,
                        u = e.x * e.w;
                    t._m[0] = 1 - 2 * (n + r), t._m[1] = 2 * (o + s), t._m[2] = 2 * (a - c), t._m[3] = 0, t._m[4] = 2 * (o - s), t._m[5] = 1 - 2 * (r + i), t._m[6] = 2 * (l + u), t._m[7] = 0, t._m[8] = 2 * (a + c), t._m[9] = 2 * (l - u), t._m[10] = 1 - 2 * (n + i), t._m[11] = 0, t._m[12] = 0, t._m[13] = 0, t._m[14] = 0, t._m[15] = 1, t._markAsUpdated()
                }, e._updateFlagSeed = 0, e._identityReadOnly = e.Identity(), e
            }(),
            m = function() {
                function e(e, t, i, n) {
                    this.normal = new d(e, t, i), this.d = n
                }
                return e.prototype.asArray = function() {
                    return [this.normal.x, this.normal.y, this.normal.z, this.d]
                }, e.prototype.clone = function() {
                    return new e(this.normal.x, this.normal.y, this.normal.z, this.d)
                }, e.prototype.getClassName = function() {
                    return "Plane"
                }, e.prototype.getHashCode = function() {
                    var e = this.normal.getHashCode();
                    return e = 397 * e ^ (this.d || 0)
                }, e.prototype.normalize = function() {
                    var e = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z),
                        t = 0;
                    return 0 !== e && (t = 1 / e), this.normal.x *= t, this.normal.y *= t, this.normal.z *= t, this.d *= t, this
                }, e.prototype.transform = function(t) {
                    var i = I.Matrix[0];
                    g.TransposeToRef(t, i);
                    var n = i.m,
                        r = this.normal.x,
                        o = this.normal.y,
                        s = this.normal.z,
                        a = this.d;
                    return new e(r * n[0] + o * n[1] + s * n[2] + a * n[3], r * n[4] + o * n[5] + s * n[6] + a * n[7], r * n[8] + o * n[9] + s * n[10] + a * n[11], r * n[12] + o * n[13] + s * n[14] + a * n[15])
                }, e.prototype.dotCoordinate = function(e) {
                    return this.normal.x * e.x + this.normal.y * e.y + this.normal.z * e.z + this.d
                }, e.prototype.copyFromPoints = function(e, t, i) {
                    var n, r = t.x - e.x,
                        o = t.y - e.y,
                        s = t.z - e.z,
                        a = i.x - e.x,
                        c = i.y - e.y,
                        l = i.z - e.z,
                        u = o * l - s * c,
                        h = s * a - r * l,
                        d = r * c - o * a,
                        f = Math.sqrt(u * u + h * h + d * d);
                    return n = 0 !== f ? 1 / f : 0, this.normal.x = u * n, this.normal.y = h * n, this.normal.z = d * n, this.d = -(this.normal.x * e.x + this.normal.y * e.y + this.normal.z * e.z), this
                }, e.prototype.isFrontFacingTo = function(e, t) {
                    return d.Dot(this.normal, e) <= t
                }, e.prototype.signedDistanceTo = function(e) {
                    return d.Dot(e, this.normal) + this.d
                }, e.FromArray = function(t) {
                    return new e(t[0], t[1], t[2], t[3])
                }, e.FromPoints = function(t, i, n) {
                    var r = new e(0, 0, 0, 0);
                    return r.copyFromPoints(t, i, n), r
                }, e.FromPositionAndNormal = function(t, i) {
                    var n = new e(0, 0, 0, 0);
                    return i.normalize(), n.normal = i, n.d = -(i.x * t.x + i.y * t.y + i.z * t.z), n
                }, e.SignedDistanceToPlaneFromPositionAndNormal = function(e, t, i) {
                    var n = -(t.x * e.x + t.y * e.y + t.z * e.z);
                    return d.Dot(i, t) + n
                }, e
            }(),
            v = function() {
                function e(e, t, i, n) {
                    this.x = e, this.y = t, this.width = i, this.height = n
                }
                return e.prototype.toGlobal = function(t, i) {
                    return new e(this.x * t, this.y * i, this.width * t, this.height * i)
                }, e.prototype.toGlobalToRef = function(e, t, i) {
                    return i.x = this.x * e, i.y = this.y * t, i.width = this.width * e, i.height = this.height * t, this
                }, e.prototype.clone = function() {
                    return new e(this.x, this.y, this.width, this.height)
                }, e
            }(),
            y = function() {
                function e() {}
                return e.GetPlanes = function(t) {
                    for (var i = [], n = 0; n < 6; n++) i.push(new m(0, 0, 0, 0));
                    return e.GetPlanesToRef(t, i), i
                }, e.GetNearPlaneToRef = function(e, t) {
                    var i = e.m;
                    t.normal.x = i[3] + i[2], t.normal.y = i[7] + i[6], t.normal.z = i[11] + i[10], t.d = i[15] + i[14], t.normalize()
                }, e.GetFarPlaneToRef = function(e, t) {
                    var i = e.m;
                    t.normal.x = i[3] - i[2], t.normal.y = i[7] - i[6], t.normal.z = i[11] - i[10], t.d = i[15] - i[14], t.normalize()
                }, e.GetLeftPlaneToRef = function(e, t) {
                    var i = e.m;
                    t.normal.x = i[3] + i[0], t.normal.y = i[7] + i[4], t.normal.z = i[11] + i[8], t.d = i[15] + i[12], t.normalize()
                }, e.GetRightPlaneToRef = function(e, t) {
                    var i = e.m;
                    t.normal.x = i[3] - i[0], t.normal.y = i[7] - i[4], t.normal.z = i[11] - i[8], t.d = i[15] - i[12], t.normalize()
                }, e.GetTopPlaneToRef = function(e, t) {
                    var i = e.m;
                    t.normal.x = i[3] - i[1], t.normal.y = i[7] - i[5], t.normal.z = i[11] - i[9], t.d = i[15] - i[13], t.normalize()
                }, e.GetBottomPlaneToRef = function(e, t) {
                    var i = e.m;
                    t.normal.x = i[3] + i[1], t.normal.y = i[7] + i[5], t.normal.z = i[11] + i[9], t.d = i[15] + i[13], t.normalize()
                }, e.GetPlanesToRef = function(t, i) {
                    e.GetNearPlaneToRef(t, i[0]), e.GetFarPlaneToRef(t, i[1]), e.GetLeftPlaneToRef(t, i[2]), e.GetRightPlaneToRef(t, i[3]), e.GetTopPlaneToRef(t, i[4]), e.GetBottomPlaneToRef(t, i[5])
                }, e
            }();
        ! function(e) {
            e[e.LOCAL = 0] = "LOCAL", e[e.WORLD = 1] = "WORLD", e[e.BONE = 2] = "BONE"
        }(n || (n = {}));
        var b, T = function() {
                function e() {}
                return e.X = new d(1, 0, 0), e.Y = new d(0, 1, 0), e.Z = new d(0, 0, 1), e
            }(),
            E = function() {
                function e() {}
                return e.Interpolate = function(e, t, i, n, r) {
                    for (var o = 1 - 3 * n + 3 * t, s = 3 * n - 6 * t, a = 3 * t, c = e, l = 0; l < 5; l++) {
                        var u = c * c;
                        c -= (o * (u * c) + s * u + a * c - e) * (1 / (3 * o * u + 2 * s * c + a)), c = Math.min(1, Math.max(0, c))
                    }
                    return 3 * Math.pow(1 - c, 2) * c * i + 3 * (1 - c) * Math.pow(c, 2) * r + Math.pow(c, 3)
                }, e
            }();
        ! function(e) {
            e[e.CW = 0] = "CW", e[e.CCW = 1] = "CCW"
        }(b || (b = {}));
        var A = function() {
                function e(e) {
                    this._radians = e, this._radians < 0 && (this._radians += 2 * Math.PI)
                }
                return e.prototype.degrees = function() {
                    return 180 * this._radians / Math.PI
                }, e.prototype.radians = function() {
                    return this._radians
                }, e.BetweenTwoPoints = function(t, i) {
                    var n = i.subtract(t);
                    return new e(Math.atan2(n.y, n.x))
                }, e.FromRadians = function(t) {
                    return new e(t)
                }, e.FromDegrees = function(t) {
                    return new e(t * Math.PI / 180)
                }, e
            }(),
            x = function() {
                return function(e, t, i) {
                    this.startPoint = e, this.midPoint = t, this.endPoint = i;
                    var n = Math.pow(t.x, 2) + Math.pow(t.y, 2),
                        r = (Math.pow(e.x, 2) + Math.pow(e.y, 2) - n) / 2,
                        o = (n - Math.pow(i.x, 2) - Math.pow(i.y, 2)) / 2,
                        s = (e.x - t.x) * (t.y - i.y) - (t.x - i.x) * (e.y - t.y);
                    this.centerPoint = new h((r * (t.y - i.y) - o * (e.y - t.y)) / s, ((e.x - t.x) * o - (t.x - i.x) * r) / s), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = A.BetweenTwoPoints(this.centerPoint, this.startPoint);
                    var a = this.startAngle.degrees(),
                        c = A.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
                        l = A.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
                    c - a > 180 && (c -= 360), c - a < -180 && (c += 360), l - c > 180 && (l -= 360), l - c < -180 && (l += 360), this.orientation = c - a < 0 ? b.CW : b.CCW, this.angle = A.FromDegrees(this.orientation === b.CW ? a - l : l - a)
                }
            }(),
            R = function() {
                function e(e, t) {
                    this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new h(e, t))
                }
                return e.prototype.addLineTo = function(e, t) {
                    if (this.closed) return this;
                    var i = new h(e, t),
                        n = this._points[this._points.length - 1];
                    return this._points.push(i), this._length += i.subtract(n).length(), this
                }, e.prototype.addArcTo = function(e, t, i, n, r) {
                    if (void 0 === r && (r = 36), this.closed) return this;
                    var o = this._points[this._points.length - 1],
                        s = new h(e, t),
                        a = new h(i, n),
                        c = new x(o, s, a),
                        l = c.angle.radians() / r;
                    c.orientation === b.CW && (l *= -1);
                    for (var u = c.startAngle.radians() + l, d = 0; d < r; d++) {
                        var f = Math.cos(u) * c.radius + c.centerPoint.x,
                            p = Math.sin(u) * c.radius + c.centerPoint.y;
                        this.addLineTo(f, p), u += l
                    }
                    return this
                }, e.prototype.close = function() {
                    return this.closed = !0, this
                }, e.prototype.length = function() {
                    var e = this._length;
                    if (!this.closed) {
                        var t = this._points[this._points.length - 1];
                        e += this._points[0].subtract(t).length()
                    }
                    return e
                }, e.prototype.getPoints = function() {
                    return this._points
                }, e.prototype.getPointAtLengthPosition = function(e) {
                    if (e < 0 || e > 1) return h.Zero();
                    for (var t = e * this.length(), i = 0, n = 0; n < this._points.length; n++) {
                        var r = (n + 1) % this._points.length,
                            o = this._points[n],
                            s = this._points[r].subtract(o),
                            a = s.length() + i;
                        if (t >= i && t <= a) {
                            var c = s.normalize(),
                                l = t - i;
                            return new h(o.x + c.x * l, o.y + c.y * l)
                        }
                        i = a
                    }
                    return h.Zero()
                }, e.StartingAt = function(t, i) {
                    return new e(t, i)
                }, e
            }(),
            P = function() {
                function e(e, t, i) {
                    void 0 === t && (t = null), this.path = e, this._curve = new Array, this._distances = new Array, this._tangents = new Array, this._normals = new Array, this._binormals = new Array;
                    for (var n = 0; n < e.length; n++) this._curve[n] = e[n].clone();
                    this._raw = i || !1, this._compute(t)
                }
                return e.prototype.getCurve = function() {
                    return this._curve
                }, e.prototype.getTangents = function() {
                    return this._tangents
                }, e.prototype.getNormals = function() {
                    return this._normals
                }, e.prototype.getBinormals = function() {
                    return this._binormals
                }, e.prototype.getDistances = function() {
                    return this._distances
                }, e.prototype.update = function(e, t) {
                    void 0 === t && (t = null);
                    for (var i = 0; i < e.length; i++) this._curve[i].x = e[i].x, this._curve[i].y = e[i].y, this._curve[i].z = e[i].z;
                    return this._compute(t), this
                }, e.prototype._compute = function(e) {
                    var t = this._curve.length;
                    this._tangents[0] = this._getFirstNonNullVector(0), this._raw || this._tangents[0].normalize(), this._tangents[t - 1] = this._curve[t - 1].subtract(this._curve[t - 2]), this._raw || this._tangents[t - 1].normalize();
                    var i, n, r, o, s = this._tangents[0],
                        a = this._normalVector(s, e);
                    this._normals[0] = a, this._raw || this._normals[0].normalize(), this._binormals[0] = d.Cross(s, this._normals[0]), this._raw || this._binormals[0].normalize(), this._distances[0] = 0;
                    for (var c = 1; c < t; c++) i = this._getLastNonNullVector(c), c < t - 1 && (n = this._getFirstNonNullVector(c), this._tangents[c] = i.add(n), this._tangents[c].normalize()), this._distances[c] = this._distances[c - 1] + i.length(), r = this._tangents[c], o = this._binormals[c - 1], this._normals[c] = d.Cross(o, r), this._raw || this._normals[c].normalize(), this._binormals[c] = d.Cross(r, this._normals[c]), this._raw || this._binormals[c].normalize()
                }, e.prototype._getFirstNonNullVector = function(e) {
                    for (var t = 1, i = this._curve[e + t].subtract(this._curve[e]); 0 === i.length() && e + t + 1 < this._curve.length;) t++, i = this._curve[e + t].subtract(this._curve[e]);
                    return i
                }, e.prototype._getLastNonNullVector = function(e) {
                    for (var t = 1, i = this._curve[e].subtract(this._curve[e - t]); 0 === i.length() && e > t + 1;) t++, i = this._curve[e].subtract(this._curve[e - t]);
                    return i
                }, e.prototype._normalVector = function(e, t) {
                    var i, n, r = e.length();
                    (0 === r && (r = 1), null == t) ? (n = o.a.WithinEpsilon(Math.abs(e.y) / r, 1, c) ? o.a.WithinEpsilon(Math.abs(e.x) / r, 1, c) ? o.a.WithinEpsilon(Math.abs(e.z) / r, 1, c) ? d.Zero() : new d(0, 0, 1) : new d(1, 0, 0) : new d(0, -1, 0), i = d.Cross(e, n)) : (i = d.Cross(e, t), d.CrossToRef(i, e, i));
                    return i.normalize(), i
                }, e
            }(),
            S = function() {
                function e(e) {
                    this._length = 0, this._points = e, this._length = this._computeLength(e)
                }
                return e.CreateQuadraticBezier = function(t, i, n, r) {
                    r = r > 2 ? r : 3;
                    for (var o = new Array, s = function(e, t, i, n) {
                            return (1 - e) * (1 - e) * t + 2 * e * (1 - e) * i + e * e * n
                        }, a = 0; a <= r; a++) o.push(new d(s(a / r, t.x, i.x, n.x), s(a / r, t.y, i.y, n.y), s(a / r, t.z, i.z, n.z)));
                    return new e(o)
                }, e.CreateCubicBezier = function(t, i, n, r, o) {
                    o = o > 3 ? o : 4;
                    for (var s = new Array, a = function(e, t, i, n, r) {
                            return (1 - e) * (1 - e) * (1 - e) * t + 3 * e * (1 - e) * (1 - e) * i + 3 * e * e * (1 - e) * n + e * e * e * r
                        }, c = 0; c <= o; c++) s.push(new d(a(c / o, t.x, i.x, n.x, r.x), a(c / o, t.y, i.y, n.y, r.y), a(c / o, t.z, i.z, n.z, r.z)));
                    return new e(s)
                }, e.CreateHermiteSpline = function(t, i, n, r, o) {
                    for (var s = new Array, a = 1 / o, c = 0; c <= o; c++) s.push(d.Hermite(t, i, n, r, c * a));
                    return new e(s)
                }, e.CreateCatmullRomSpline = function(t, i, n) {
                    var r = new Array,
                        o = 1 / i,
                        s = 0;
                    if (n) {
                        for (var a = t.length, c = 0; c < a; c++) {
                            s = 0;
                            for (var l = 0; l < i; l++) r.push(d.CatmullRom(t[c % a], t[(c + 1) % a], t[(c + 2) % a], t[(c + 3) % a], s)), s += o
                        }
                        r.push(r[0])
                    } else {
                        var u = new Array;
                        u.push(t[0].clone()), Array.prototype.push.apply(u, t), u.push(t[t.length - 1].clone());
                        for (c = 0; c < u.length - 3; c++) {
                            s = 0;
                            for (l = 0; l < i; l++) r.push(d.CatmullRom(u[c], u[c + 1], u[c + 2], u[c + 3], s)), s += o
                        }
                        c--, r.push(d.CatmullRom(u[c], u[c + 1], u[c + 2], u[c + 3], s))
                    }
                    return new e(r)
                }, e.prototype.getPoints = function() {
                    return this._points
                }, e.prototype.length = function() {
                    return this._length
                }, e.prototype.continue = function(t) {
                    for (var i = this._points[this._points.length - 1], n = this._points.slice(), r = t.getPoints(), o = 1; o < r.length; o++) n.push(r[o].subtract(r[0]).add(i));
                    return new e(n)
                }, e.prototype._computeLength = function(e) {
                    for (var t = 0, i = 1; i < e.length; i++) t += e[i].subtract(e[i - 1]).length();
                    return t
                }, e
            }(),
            C = function() {
                function e(e, t) {
                    void 0 === e && (e = d.Zero()), void 0 === t && (t = d.Up()), this.position = e, this.normal = t
                }
                return e.prototype.clone = function() {
                    return new e(this.position.clone(), this.normal.clone())
                }, e
            }(),
            M = function() {
                function e(e, t, i) {
                    void 0 === e && (e = d.Zero()), void 0 === t && (t = d.Up()), void 0 === i && (i = h.Zero()), this.position = e, this.normal = t, this.uv = i
                }
                return e.prototype.clone = function() {
                    return new e(this.position.clone(), this.normal.clone(), this.uv.clone())
                }, e
            }(),
            O = function() {
                function e() {}
                return e.Color3 = r.a.BuildArray(3, l.Black), e.Color4 = r.a.BuildArray(3, function() {
                    return new u(0, 0, 0, 0)
                }), e.Vector2 = r.a.BuildArray(3, h.Zero), e.Vector3 = r.a.BuildArray(13, d.Zero), e.Vector4 = r.a.BuildArray(3, f.Zero), e.Quaternion = r.a.BuildArray(2, _.Zero), e.Matrix = r.a.BuildArray(8, g.Identity), e
            }(),
            I = function() {
                function e() {}
                return e.Vector3 = r.a.BuildArray(6, d.Zero), e.Matrix = r.a.BuildArray(2, g.Identity), e.Quaternion = r.a.BuildArray(3, _.Zero), e
            }()
    }, function(e, t, i) {
        "use strict";
        i.d(t, "d", function() {
            return r
        }), i.d(t, "a", function() {
            return o
        }), i.d(t, "c", function() {
            return s
        }), i.d(t, "b", function() {
            return a
        }), i.d(t, "e", function() {
            return c
        });
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0

        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.

        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                })(e, t)
        };

        function r(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        }
        var o = function() {
            return (o = Object.assign || function(e) {
                for (var t, i = 1, n = arguments.length; i < n; i++)
                    for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        };

        function s(e, t, i, n) {
            var r, o = arguments.length,
                s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
            else
                for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
            return o > 3 && s && Object.defineProperty(t, i, s), s
        }

        function a(e, t, i, n) {
            return new(i || (i = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new i(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            })
        }

        function c(e, t) {
            var i, n, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                            switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, n = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], n = 0
                        } finally {
                            i = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        }
    }, function(e, t, i) {
        "use strict";
        i.d(t, "b", function() {
            return h
        }), i.d(t, "c", function() {
            return d
        }), i.d(t, "m", function() {
            return f
        }), i.d(t, "e", function() {
            return p
        }), i.d(t, "h", function() {
            return _
        }), i.d(t, "n", function() {
            return g
        }), i.d(t, "o", function() {
            return m
        }), i.d(t, "k", function() {
            return v
        }), i.d(t, "g", function() {
            return y
        }), i.d(t, "f", function() {
            return b
        }), i.d(t, "i", function() {
            return T
        }), i.d(t, "l", function() {
            return E
        }), i.d(t, "j", function() {
            return A
        }), i.d(t, "d", function() {
            return x
        }), i.d(t, "a", function() {
            return R
        });
        var n = i(29),
            r = i(0),
            o = i(19),
            s = {},
            a = {},
            c = function(e, t, i) {
                var r = e();
                n.a && n.a.AddTagsTo(r, t.tags);
                var o = l(r);
                for (var s in o) {
                    var a = o[s],
                        c = t[s],
                        u = a.type;
                    if (null != c && "uniqueId" !== s) switch (u) {
                        case 0:
                        case 6:
                        case 11:
                            r[s] = c;
                            break;
                        case 1:
                            r[s] = i || c.isRenderTarget ? c : c.clone();
                            break;
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 7:
                        case 10:
                        case 12:
                            r[s] = i ? c : c.clone()
                    }
                }
                return r
            };

        function l(e) {
            var t = e.getClassName();
            if (a[t]) return a[t];
            a[t] = {};
            for (var i = a[t], n = e, r = t; r;) {
                var o = s[r];
                for (var c in o) i[c] = o[c];
                var l = void 0,
                    u = !1;
                do {
                    if (!(l = Object.getPrototypeOf(n)).getClassName) {
                        u = !0;
                        break
                    }
                    if (l.getClassName() !== r) break;
                    n = l
                } while (l);
                if (u) break;
                r = l.getClassName(), n = l
            }
            return i
        }

        function u(e, t) {
            return function(i, n) {
                var r = function(e) {
                    var t = e.getClassName();
                    return s[t] || (s[t] = {}), s[t]
                }(i);
                r[n] || (r[n] = {
                    type: e,
                    sourceName: t
                })
            }
        }

        function h(e, t) {
            return void 0 === t && (t = null),
                function(e, t) {
                    return void 0 === t && (t = null),
                        function(i, n) {
                            var r = t || "_" + n;
                            Object.defineProperty(i, n, {
                                get: function() {
                                    return this[r]
                                },
                                set: function(t) {
                                    this[r] !== t && (this[r] = t, i[e].apply(this))
                                },
                                enumerable: !0,
                                configurable: !0
                            })
                        }
                }(e, t)
        }

        function d(e) {
            return u(0, e)
        }

        function f(e) {
            return u(1, e)
        }

        function p(e) {
            return u(2, e)
        }

        function _(e) {
            return u(3, e)
        }

        function g(e) {
            return u(4, e)
        }

        function m(e) {
            return u(5, e)
        }

        function v(e) {
            return u(6, e)
        }

        function y(e) {
            return u(7, e)
        }

        function b(e) {
            return u(8, e)
        }

        function T(e) {
            return u(9, e)
        }

        function E(e) {
            return u(10, e)
        }

        function A(e) {
            return u(12, e)
        }

        function x(e) {
            return u(11, e)
        }
        var R = function() {
            function e() {}
            return e.AppendSerializedAnimations = function(e, t) {
                if (e.animations) {
                    t.animations = [];
                    for (var i = 0; i < e.animations.length; i++) {
                        var n = e.animations[i];
                        t.animations.push(n.serialize())
                    }
                }
            }, e.Serialize = function(e, t) {
                t || (t = {}), n.a && (t.tags = n.a.GetTags(e));
                var i = l(e);
                for (var r in i) {
                    var o = i[r],
                        s = o.sourceName || r,
                        a = o.type,
                        c = e[r];
                    if (null != c) switch (a) {
                        case 0:
                            t[s] = c;
                            break;
                        case 1:
                            t[s] = c.serialize();
                            break;
                        case 2:
                            t[s] = c.asArray();
                            break;
                        case 3:
                            t[s] = c.serialize();
                            break;
                        case 4:
                        case 5:
                            t[s] = c.asArray();
                            break;
                        case 6:
                            t[s] = c.id;
                            break;
                        case 7:
                            t[s] = c.serialize();
                            break;
                        case 8:
                            t[s] = c.asArray();
                            break;
                        case 9:
                            t[s] = c.serialize();
                            break;
                        case 10:
                            t[s] = c.asArray();
                            break;
                        case 11:
                            t[s] = c.id;
                        case 12:
                            t[s] = c.asArray()
                    }
                }
                return t
            }, e.Parse = function(t, i, o, s) {
                void 0 === s && (s = null);
                var a = t();
                s || (s = ""), n.a && n.a.AddTagsTo(a, i.tags);
                var c = l(a);
                for (var u in c) {
                    var h = c[u],
                        d = i[h.sourceName || u],
                        f = h.type;
                    if (null != d) {
                        var p = a;
                        switch (f) {
                            case 0:
                                p[u] = d;
                                break;
                            case 1:
                                o && (p[u] = e._TextureParser(d, o, s));
                                break;
                            case 2:
                                p[u] = r.e.FromArray(d);
                                break;
                            case 3:
                                p[u] = e._FresnelParametersParser(d);
                                break;
                            case 4:
                                p[u] = r.w.FromArray(d);
                                break;
                            case 5:
                                p[u] = r.x.FromArray(d);
                                break;
                            case 6:
                                o && (p[u] = o.getLastMeshByID(d));
                                break;
                            case 7:
                                p[u] = e._ColorCurvesParser(d);
                                break;
                            case 8:
                                p[u] = r.f.FromArray(d);
                                break;
                            case 9:
                                p[u] = e._ImageProcessingConfigurationParser(d);
                                break;
                            case 10:
                                p[u] = r.q.FromArray(d);
                                break;
                            case 11:
                                o && (p[u] = o.getCameraByID(d));
                            case 12:
                                p[u] = r.j.FromArray(d)
                        }
                    }
                }
                return a
            }, e.Clone = function(e, t) {
                return c(e, t, !1)
            }, e.Instanciate = function(e, t) {
                return c(e, t, !0)
            }, e._ImageProcessingConfigurationParser = function(e) {
                throw o.a.WarnImport("ImageProcessingConfiguration")
            }, e._FresnelParametersParser = function(e) {
                throw o.a.WarnImport("FresnelParameters")
            }, e._ColorCurvesParser = function(e) {
                throw o.a.WarnImport("ColorCurves")
            }, e._TextureParser = function(e, t, i) {
                throw o.a.WarnImport("Texture")
            }, e
        }()
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        });
        var n = function() {
            function e() {}
            return e.ALPHA_DISABLE = 0, e.ALPHA_ADD = 1, e.ALPHA_COMBINE = 2, e.ALPHA_SUBTRACT = 3, e.ALPHA_MULTIPLY = 4, e.ALPHA_MAXIMIZED = 5, e.ALPHA_ONEONE = 6, e.ALPHA_PREMULTIPLIED = 7, e.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, e.ALPHA_INTERPOLATE = 9, e.ALPHA_SCREENMODE = 10, e.DELAYLOADSTATE_NONE = 0, e.DELAYLOADSTATE_LOADED = 1, e.DELAYLOADSTATE_LOADING = 2, e.DELAYLOADSTATE_NOTLOADED = 4, e.NEVER = 512, e.ALWAYS = 519, e.LESS = 513, e.EQUAL = 514, e.LEQUAL = 515, e.GREATER = 516, e.GEQUAL = 518, e.NOTEQUAL = 517, e.KEEP = 7680, e.REPLACE = 7681, e.INCR = 7682, e.DECR = 7683, e.INVERT = 5386, e.INCR_WRAP = 34055, e.DECR_WRAP = 34056, e.TEXTURE_CLAMP_ADDRESSMODE = 0, e.TEXTURE_WRAP_ADDRESSMODE = 1, e.TEXTURE_MIRROR_ADDRESSMODE = 2, e.TEXTUREFORMAT_ALPHA = 0, e.TEXTUREFORMAT_LUMINANCE = 1, e.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, e.TEXTUREFORMAT_RGB = 4, e.TEXTUREFORMAT_RGBA = 5, e.TEXTUREFORMAT_RED = 6, e.TEXTUREFORMAT_R = 6, e.TEXTUREFORMAT_RG = 7, e.TEXTUREFORMAT_RED_INTEGER = 8, e.TEXTUREFORMAT_R_INTEGER = 8, e.TEXTUREFORMAT_RG_INTEGER = 9, e.TEXTUREFORMAT_RGB_INTEGER = 10, e.TEXTUREFORMAT_RGBA_INTEGER = 11, e.TEXTURETYPE_UNSIGNED_BYTE = 0, e.TEXTURETYPE_UNSIGNED_INT = 0, e.TEXTURETYPE_FLOAT = 1, e.TEXTURETYPE_HALF_FLOAT = 2, e.TEXTURETYPE_BYTE = 3, e.TEXTURETYPE_SHORT = 4, e.TEXTURETYPE_UNSIGNED_SHORT = 5, e.TEXTURETYPE_INT = 6, e.TEXTURETYPE_UNSIGNED_INTEGER = 7, e.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, e.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, e.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, e.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, e.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, e.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, e.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, e.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, e.TEXTURE_NEAREST_SAMPLINGMODE = 1, e.TEXTURE_BILINEAR_SAMPLINGMODE = 2, e.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, e.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 1, e.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 2, e.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, e.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, e.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, e.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, e.TEXTURE_NEAREST_LINEAR = 7, e.TEXTURE_NEAREST_NEAREST = 8, e.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, e.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, e.TEXTURE_LINEAR_LINEAR = 11, e.TEXTURE_LINEAR_NEAREST = 12, e.TEXTURE_EXPLICIT_MODE = 0, e.TEXTURE_SPHERICAL_MODE = 1, e.TEXTURE_PLANAR_MODE = 2, e.TEXTURE_CUBIC_MODE = 3, e.TEXTURE_PROJECTION_MODE = 4, e.TEXTURE_SKYBOX_MODE = 5, e.TEXTURE_INVCUBIC_MODE = 6, e.TEXTURE_EQUIRECTANGULAR_MODE = 7, e.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, e.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, e.SCALEMODE_FLOOR = 1, e.SCALEMODE_NEAREST = 2, e.SCALEMODE_CEILING = 3, e.MATERIAL_TextureDirtyFlag = 1, e.MATERIAL_LightDirtyFlag = 2, e.MATERIAL_FresnelDirtyFlag = 4, e.MATERIAL_AttributesDirtyFlag = 8, e.MATERIAL_MiscDirtyFlag = 16, e.MATERIAL_AllDirtyFlag = 31, e.MATERIAL_TriangleFillMode = 0, e.MATERIAL_WireFrameFillMode = 1, e.MATERIAL_PointFillMode = 2, e.MATERIAL_PointListDrawMode = 3, e.MATERIAL_LineListDrawMode = 4, e.MATERIAL_LineLoopDrawMode = 5, e.MATERIAL_LineStripDrawMode = 6, e.MATERIAL_TriangleStripDrawMode = 7, e.MATERIAL_TriangleFanDrawMode = 8, e.MATERIAL_ClockWiseSideOrientation = 0, e.MATERIAL_CounterClockWiseSideOrientation = 1, e.ACTION_NothingTrigger = 0, e.ACTION_OnPickTrigger = 1, e.ACTION_OnLeftPickTrigger = 2, e.ACTION_OnRightPickTrigger = 3, e.ACTION_OnCenterPickTrigger = 4, e.ACTION_OnPickDownTrigger = 5, e.ACTION_OnDoublePickTrigger = 6, e.ACTION_OnPickUpTrigger = 7, e.ACTION_OnPickOutTrigger = 16, e.ACTION_OnLongPressTrigger = 8, e.ACTION_OnPointerOverTrigger = 9, e.ACTION_OnPointerOutTrigger = 10, e.ACTION_OnEveryFrameTrigger = 11, e.ACTION_OnIntersectionEnterTrigger = 12, e.ACTION_OnIntersectionExitTrigger = 13, e.ACTION_OnKeyDownTrigger = 14, e.ACTION_OnKeyUpTrigger = 15, e.PARTICLES_BILLBOARDMODE_Y = 2, e.PARTICLES_BILLBOARDMODE_ALL = 7, e.PARTICLES_BILLBOARDMODE_STRETCHED = 8, e.PARTICLES_BaseAssetsUrl = "https://assets.babylonjs.com/particles", e.MESHES_CULLINGSTRATEGY_STANDARD = 0, e.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, e.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, e.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, e.SCENELOADER_NO_LOGGING = 0, e.SCENELOADER_MINIMAL_LOGGING = 1, e.SCENELOADER_SUMMARY_LOGGING = 2, e.SCENELOADER_DETAILED_LOGGING = 3, e
        }()
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        }), i.d(t, "b", function() {
            return r
        });
        var n = function() {
                function e(e, t, i, n, r, o, s) {
                    void 0 === n && (n = 0), void 0 === r && (r = !1), void 0 === o && (o = !1), void 0 === s && (s = !1), e.getScene ? this._engine = e.getScene().getEngine() : this._engine = e, this._updatable = i, this._instanced = o, this._data = t, this.byteStride = s ? n : n * Float32Array.BYTES_PER_ELEMENT, r || this.create()
                }
                return e.prototype.createVertexBuffer = function(e, t, i, n, o, s) {
                    void 0 === s && (s = !1);
                    var a = s ? t : t * Float32Array.BYTES_PER_ELEMENT,
                        c = n ? s ? n : n * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
                    return new r(this._engine, this, e, this._updatable, !0, c, void 0 === o ? this._instanced : o, a, i, void 0, void 0, !0)
                }, e.prototype.isUpdatable = function() {
                    return this._updatable
                }, e.prototype.getData = function() {
                    return this._data
                }, e.prototype.getBuffer = function() {
                    return this._buffer
                }, e.prototype.getStrideSize = function() {
                    return this.byteStride / Float32Array.BYTES_PER_ELEMENT
                }, e.prototype.create = function(e) {
                    void 0 === e && (e = null), !e && this._buffer || (e = e || this._data) && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, e), this._data = e) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(e), this._data = e) : this._buffer = this._engine.createVertexBuffer(e))
                }, e.prototype._rebuild = function() {
                    this._buffer = null, this.create(this._data)
                }, e.prototype.update = function(e) {
                    this.create(e)
                }, e.prototype.updateDirectly = function(e, t, i, n) {
                    void 0 === n && (n = !1), this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, e, n ? t : t * Float32Array.BYTES_PER_ELEMENT, i ? i * this.byteStride : void 0), this._data = null)
                }, e.prototype.dispose = function() {
                    this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
                }, e
            }(),
            r = function() {
                function e(t, i, r, o, s, a, c, l, u, h, d, f) {
                    if (void 0 === d && (d = !1), void 0 === f && (f = !1), i instanceof n ? (this._buffer = i, this._ownsBuffer = !1) : (this._buffer = new n(t, i, o, a, s, c, f), this._ownsBuffer = !0), this._kind = r, null == h) {
                        var p = this.getData();
                        this.type = e.FLOAT, p instanceof Int8Array ? this.type = e.BYTE : p instanceof Uint8Array ? this.type = e.UNSIGNED_BYTE : p instanceof Int16Array ? this.type = e.SHORT : p instanceof Uint16Array ? this.type = e.UNSIGNED_SHORT : p instanceof Int32Array ? this.type = e.INT : p instanceof Uint32Array && (this.type = e.UNSIGNED_INT)
                    } else this.type = h;
                    var _ = e.GetTypeByteLength(this.type);
                    f ? (this._size = u || (a ? a / _ : e.DeduceStride(r)), this.byteStride = a || this._buffer.byteStride || this._size * _, this.byteOffset = l || 0) : (this._size = u || a || e.DeduceStride(r), this.byteStride = a ? a * _ : this._buffer.byteStride || this._size * _, this.byteOffset = (l || 0) * _), this.normalized = d, this._instanced = void 0 !== c && c, this._instanceDivisor = c ? 1 : 0
                }
                return Object.defineProperty(e.prototype, "instanceDivisor", {
                    get: function() {
                        return this._instanceDivisor
                    },
                    set: function(e) {
                        this._instanceDivisor = e, this._instanced = 0 != e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._rebuild = function() {
                    this._buffer && this._buffer._rebuild()
                }, e.prototype.getKind = function() {
                    return this._kind
                }, e.prototype.isUpdatable = function() {
                    return this._buffer.isUpdatable()
                }, e.prototype.getData = function() {
                    return this._buffer.getData()
                }, e.prototype.getBuffer = function() {
                    return this._buffer.getBuffer()
                }, e.prototype.getStrideSize = function() {
                    return this.byteStride / e.GetTypeByteLength(this.type)
                }, e.prototype.getOffset = function() {
                    return this.byteOffset / e.GetTypeByteLength(this.type)
                }, e.prototype.getSize = function() {
                    return this._size
                }, e.prototype.getIsInstanced = function() {
                    return this._instanced
                }, e.prototype.getInstanceDivisor = function() {
                    return this._instanceDivisor
                }, e.prototype.create = function(e) {
                    this._buffer.create(e)
                }, e.prototype.update = function(e) {
                    this._buffer.update(e)
                }, e.prototype.updateDirectly = function(e, t, i) {
                    void 0 === i && (i = !1), this._buffer.updateDirectly(e, t, void 0, i)
                }, e.prototype.dispose = function() {
                    this._ownsBuffer && this._buffer.dispose()
                }, e.prototype.forEach = function(t, i) {
                    e.ForEach(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, t, this.normalized, i)
                }, e.DeduceStride = function(t) {
                    switch (t) {
                        case e.UVKind:
                        case e.UV2Kind:
                        case e.UV3Kind:
                        case e.UV4Kind:
                        case e.UV5Kind:
                        case e.UV6Kind:
                            return 2;
                        case e.NormalKind:
                        case e.PositionKind:
                            return 3;
                        case e.ColorKind:
                        case e.MatricesIndicesKind:
                        case e.MatricesIndicesExtraKind:
                        case e.MatricesWeightsKind:
                        case e.MatricesWeightsExtraKind:
                        case e.TangentKind:
                            return 4;
                        default:
                            throw new Error("Invalid kind '" + t + "'")
                    }
                }, e.GetTypeByteLength = function(t) {
                    switch (t) {
                        case e.BYTE:
                        case e.UNSIGNED_BYTE:
                            return 1;
                        case e.SHORT:
                        case e.UNSIGNED_SHORT:
                            return 2;
                        case e.INT:
                        case e.FLOAT:
                            return 4;
                        default:
                            throw new Error("Invalid type '" + t + "'")
                    }
                }, e.ForEach = function(t, i, n, r, o, s, a, c) {
                    if (t instanceof Array)
                        for (var l = i / 4, u = n / 4, h = 0; h < s; h += r) {
                            for (var d = 0; d < r; d++) c(t[l + d], h + d);
                            l += u
                        } else {
                            var f = t instanceof ArrayBuffer ? new DataView(t) : new DataView(t.buffer, t.byteOffset, t.byteLength),
                                p = e.GetTypeByteLength(o);
                            for (h = 0; h < s; h += r) {
                                var _ = i;
                                for (d = 0; d < r; d++) {
                                    c(e._GetFloatValue(f, o, _, a), h + d), _ += p
                                }
                                i += n
                            }
                        }
                }, e._GetFloatValue = function(t, i, n, r) {
                    switch (i) {
                        case e.BYTE:
                            var o = t.getInt8(n);
                            return r && (o = Math.max(o / 127, -1)), o;
                        case e.UNSIGNED_BYTE:
                            o = t.getUint8(n);
                            return r && (o /= 255), o;
                        case e.SHORT:
                            o = t.getInt16(n, !0);
                            return r && (o = Math.max(o / 16383, -1)), o;
                        case e.UNSIGNED_SHORT:
                            o = t.getUint16(n, !0);
                            return r && (o /= 65535), o;
                        case e.FLOAT:
                            return t.getFloat32(n, !0);
                        default:
                            throw new Error("Invalid component type " + i)
                    }
                }, e.BYTE = 5120, e.UNSIGNED_BYTE = 5121, e.SHORT = 5122, e.UNSIGNED_SHORT = 5123, e.INT = 5124, e.UNSIGNED_INT = 5125, e.FLOAT = 5126, e.PositionKind = "position", e.NormalKind = "normal", e.TangentKind = "tangent", e.UVKind = "uv", e.UV2Kind = "uv2", e.UV3Kind = "uv3", e.UV4Kind = "uv4", e.UV5Kind = "uv5", e.UV6Kind = "uv6", e.ColorKind = "color", e.MatricesIndicesKind = "matricesIndices", e.MatricesWeightsKind = "matricesWeights", e.MatricesIndicesExtraKind = "matricesIndicesExtra", e.MatricesWeightsExtraKind = "matricesWeightsExtra", e
            }()
    }, function(e, t, i) {
        "use strict";
        i.d(t, "c", function() {
            return a
        }), i.d(t, "b", function() {
            return c
        }), i.d(t, "a", function() {
            return l
        });
        var n = i(8),
            r = i(3),
            o = i(35),
            s = i(6),
            a = function() {
                function e() {
                    this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
                }
                return e.prototype.unBindMesh = function() {
                    this._mesh = null
                }, e.prototype.addFallback = function(e, t) {
                    this._defines[e] || (e < this._currentRank && (this._currentRank = e), e > this._maxRank && (this._maxRank = e), this._defines[e] = new Array), this._defines[e].push(t)
                }, e.prototype.addCPUSkinningFallback = function(e, t) {
                    this._mesh = t, e < this._currentRank && (this._currentRank = e), e > this._maxRank && (this._maxRank = e)
                }, Object.defineProperty(e.prototype, "isMoreFallbacks", {
                    get: function() {
                        return this._currentRank <= this._maxRank
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.reduce = function(e, t) {
                    if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0 && this._mesh.material) {
                        this._mesh.computeBonesUsingShaders = !1, e = e.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), t._bonesComputationForcedToCPU = !0;
                        for (var i = this._mesh.getScene(), n = 0; n < i.meshes.length; n++) {
                            var r = i.meshes[n];
                            if (r.material && (r.computeBonesUsingShaders && 0 !== r.numBoneInfluencers))
                                if (r.material.getEffect() === t) r.computeBonesUsingShaders = !1;
                                else if (r.subMeshes)
                                for (var o = 0, s = r.subMeshes; o < s.length; o++) {
                                    if (s[o].effect === t) {
                                        r.computeBonesUsingShaders = !1;
                                        break
                                    }
                                }
                        }
                    } else {
                        var a = this._defines[this._currentRank];
                        if (a)
                            for (n = 0; n < a.length; n++) e = e.replace("#define " + a[n], "");
                        this._currentRank++
                    }
                    return e
                }, e
            }(),
            c = function() {
                return function() {}
            }(),
            l = function() {
                function e(t, i, r, o, s, a, c, l, u, h) {
                    var d, f, p = this;
                    if (void 0 === o && (o = null), void 0 === a && (a = null), void 0 === c && (c = null), void 0 === l && (l = null), void 0 === u && (u = null), this.name = null, this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new n.c, this.onErrorObservable = new n.c, this._onBindObservable = null, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._pipelineContext = null, this._valueCache = {}, this.name = t, i.attributes) {
                        var _ = i;
                        if (this._engine = r, this._attributesNames = _.attributes, this._uniformsNames = _.uniformsNames.concat(_.samplers), this._samplerList = _.samplers.slice(), this.defines = _.defines, this.onError = _.onError, this.onCompiled = _.onCompiled, this._fallbacks = _.fallbacks, this._indexParameters = _.indexParameters, this._transformFeedbackVaryings = _.transformFeedbackVaryings, _.uniformBuffersNames)
                            for (var g = 0; g < _.uniformBuffersNames.length; g++) this._uniformBuffersNames[_.uniformBuffersNames[g]] = g
                    } else this._engine = s, this.defines = null == a ? "" : a, this._uniformsNames = r.concat(o), this._samplerList = o ? o.slice() : [], this._attributesNames = i, this.onError = u, this.onCompiled = l, this._indexParameters = h, this._fallbacks = c;
                    this.uniqueId = e._uniqueIdSeed++, t.vertexElement ? (d = document.getElementById(t.vertexElement)) || (d = t.vertexElement) : d = t.vertex || t, t.fragmentElement ? (f = document.getElementById(t.fragmentElement)) || (f = t.fragmentElement) : f = t.fragment || t, this._loadVertexShader(d, function(e) {
                        p._processIncludes(e, function(e) {
                            p._processShaderConversion(e, !1, function(e) {
                                p._loadFragmentShader(f, function(i) {
                                    p._processIncludes(i, function(i) {
                                        p._processShaderConversion(i, !0, function(i) {
                                            if (t) {
                                                var n = t.vertexElement || t.vertex || t,
                                                    r = t.fragmentElement || t.fragment || t;
                                                p._vertexSourceCode = "#define SHADER_NAME vertex:" + n + "\n" + e, p._fragmentSourceCode = "#define SHADER_NAME fragment:" + r + "\n" + i
                                            } else p._vertexSourceCode = e, p._fragmentSourceCode = i;
                                            p._prepareEffect()
                                        })
                                    })
                                })
                            })
                        })
                    })
                }
                return Object.defineProperty(e.prototype, "onBindObservable", {
                    get: function() {
                        return this._onBindObservable || (this._onBindObservable = new n.c), this._onBindObservable
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "key", {
                    get: function() {
                        return this._key
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isReady = function() {
                    return !!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady
                }, e.prototype.getEngine = function() {
                    return this._engine
                }, e.prototype.getPipelineContext = function() {
                    return this._pipelineContext
                }, e.prototype.getAttributesNames = function() {
                    return this._attributesNames
                }, e.prototype.getAttributeLocation = function(e) {
                    return this._attributes[e]
                }, e.prototype.getAttributeLocationByName = function(e) {
                    var t = this._attributesNames.indexOf(e);
                    return this._attributes[t]
                }, e.prototype.getAttributesCount = function() {
                    return this._attributes.length
                }, e.prototype.getUniformIndex = function(e) {
                    return this._uniformsNames.indexOf(e)
                }, e.prototype.getUniform = function(e) {
                    return this._uniforms[e]
                }, e.prototype.getSamplers = function() {
                    return this._samplerList
                }, e.prototype.getCompilationError = function() {
                    return this._compilationError
                }, e.prototype.executeWhenCompiled = function(e) {
                    var t = this;
                    this.isReady() ? e(this) : (this.onCompileObservable.add(function(t) {
                        e(t)
                    }), this._pipelineContext && !this._pipelineContext.isAsync || setTimeout(function() {
                        t._checkIsReady()
                    }, 16))
                }, e.prototype._checkIsReady = function() {
                    var e = this;
                    this.isReady() || setTimeout(function() {
                        e._checkIsReady()
                    }, 16)
                }, e.prototype._loadVertexShader = function(t, i) {
                    var n;
                    if (o.a.IsWindowObjectExist() && t instanceof HTMLElement) return void i(o.a.GetDOMTextContent(t));
                    "base64:" !== t.substr(0, 7) ? e.ShadersStore[t + "VertexShader"] ? i(e.ShadersStore[t + "VertexShader"]) : (n = "." === t[0] || "/" === t[0] || t.indexOf("http") > -1 ? t : e.ShadersRepository + t, this._engine._loadFile(n + ".vertex.fx", i)) : i(window.atob(t.substr(7)))
                }, e.prototype._loadFragmentShader = function(t, i) {
                    var n;
                    if (o.a.IsWindowObjectExist() && t instanceof HTMLElement) return void i(o.a.GetDOMTextContent(t));
                    "base64:" !== t.substr(0, 7) ? e.ShadersStore[t + "PixelShader"] ? i(e.ShadersStore[t + "PixelShader"]) : e.ShadersStore[t + "FragmentShader"] ? i(e.ShadersStore[t + "FragmentShader"]) : (n = "." === t[0] || "/" === t[0] || t.indexOf("http") > -1 ? t : e.ShadersRepository + t, this._engine._loadFile(n + ".fragment.fx", i)) : i(window.atob(t.substr(7)))
                }, e.prototype._dumpShadersSource = function(e, t, i) {
                    var n = (this._engine.webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "") + (i ? i + "\n" : "");
                    t = n + t;
                    var r = 2,
                        o = /\n/gm,
                        a = "\n1\t" + (e = n + e).replace(o, function() {
                            return "\n" + r++ + "\t"
                        });
                    r = 2;
                    var c = "\n1\t" + t.replace(o, function() {
                        return "\n" + r++ + "\t"
                    });
                    this.name.vertexElement ? (s.a.Error("Vertex shader: " + this.name.vertexElement + a), s.a.Error("Fragment shader: " + this.name.fragmentElement + c)) : this.name.vertex ? (s.a.Error("Vertex shader: " + this.name.vertex + a), s.a.Error("Fragment shader: " + this.name.fragment + c)) : (s.a.Error("Vertex shader: " + this.name + a), s.a.Error("Fragment shader: " + this.name + c))
                }, e.prototype._processShaderConversion = function(e, t, i) {
                    var n = this._processPrecision(e);
                    if (1 != this._engine.webGLVersion)
                        if (-1 === n.indexOf("#version 3")) {
                            var r = -1 !== n.search(/#extension.+GL_EXT_draw_buffers.+require/),
                                o = n.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "");
                            o = (o = (o = (o = o.replace(/varying(?![\n\r])\s/g, t ? "in " : "out ")).replace(/attribute[ \t]/g, "in ")).replace(/[ \t]attribute/g, " in")).replace(/texture2D\s*\(/g, "texture("), t && (o = (o = (o = (o = (o = (o = (o = o.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (r ? "" : "out vec4 glFragColor;\n") + "void main(")), -1 !== this.defines.indexOf("#define MULTIVIEW\n") && !t && (o = "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + o), i(o)
                        } else i(n.replace("#version 300 es", ""));
                    else i(n)
                }, e.prototype._processIncludes = function(t, i) {
                    for (var n = this, r = /#include<(.+)>(\((.*)\))*(\[(.*)\])*/g, o = r.exec(t), s = new String(t); null != o;) {
                        var a = o[1];
                        if (-1 !== a.indexOf("__decl__") && (a = a.replace(/__decl__/, ""), this._engine.supportsUniformBuffers && (a = (a = a.replace(/Vertex/, "Ubo")).replace(/Fragment/, "Ubo")), a += "Declaration"), !e.IncludesShadersStore[a]) {
                            var c = e.ShadersRepository + "ShadersInclude/" + a + ".fx";
                            return void this._engine._loadFile(c, function(t) {
                                e.IncludesShadersStore[a] = t, n._processIncludes(s, i)
                            })
                        }
                        var l = e.IncludesShadersStore[a];
                        if (o[2])
                            for (var u = o[3].split(","), h = 0; h < u.length; h += 2) {
                                var d = new RegExp(u[h], "g"),
                                    f = u[h + 1];
                                l = l.replace(d, f)
                            }
                        if (o[4]) {
                            var p = o[5];
                            if (-1 !== p.indexOf("..")) {
                                var _ = p.split(".."),
                                    g = parseInt(_[0]),
                                    m = parseInt(_[1]),
                                    v = l.slice(0);
                                l = "", isNaN(m) && (m = this._indexParameters[_[1]]);
                                for (var y = g; y < m; y++) this._engine.supportsUniformBuffers || (v = v.replace(/light\{X\}.(\w*)/g, function(e, t) {
                                    return t + "{X}"
                                })), l += v.replace(/\{X\}/g, y.toString()) + "\n"
                            } else this._engine.supportsUniformBuffers || (l = l.replace(/light\{X\}.(\w*)/g, function(e, t) {
                                return t + "{X}"
                            })), l = l.replace(/\{X\}/g, p)
                        }
                        s = s.replace(o[0], l), o = r.exec(t)
                    }
                    i(s)
                }, e.prototype._processPrecision = function(e) {
                    var t = this._engine._shouldUseHighPrecisionShader;
                    return -1 === e.indexOf("precision highp float") ? e = t ? "precision highp float;\n" + e : "precision mediump float;\n" + e : t || (e = e.replace("precision highp float", "precision mediump float")), e
                }, e.prototype._rebuildProgram = function(e, t, i, n) {
                    var o = this;
                    this._isReady = !1, this._vertexSourceCodeOverride = e, this._fragmentSourceCodeOverride = t, this.onError = function(e, t) {
                        n && n(t)
                    }, this.onCompiled = function() {
                        for (var e = o.getEngine().scenes, t = 0; t < e.length; t++) e[t].markAllMaterialsAsDirty(r.a.MATERIAL_AllDirtyFlag);
                        o._pipelineContext._handlesSpectorRebuildCallback(i)
                    }, this._fallbacks = null, this._prepareEffect()
                }, e.prototype._prepareEffect = function() {
                    var e = this,
                        t = this._attributesNames,
                        i = this.defines,
                        n = this._fallbacks;
                    this._valueCache = {};
                    var r = this._pipelineContext;
                    try {
                        var o = this._engine;
                        this._pipelineContext = o.createPipelineContext();
                        var a = this._rebuildProgram.bind(this);
                        this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? o._preparePipelineContext(this._pipelineContext, this._vertexSourceCodeOverride, this._fragmentSourceCodeOverride, !0, a, null, this._transformFeedbackVaryings) : o._preparePipelineContext(this._pipelineContext, this._vertexSourceCode, this._fragmentSourceCode, !1, a, i, this._transformFeedbackVaryings), o._executeWhenRenderingStateIsCompiled(this._pipelineContext, function() {
                            if (o.supportsUniformBuffers)
                                for (var i in e._uniformBuffersNames) e.bindUniformBlock(i, e._uniformBuffersNames[i]);
                            var n;
                            for (o.getUniforms(e._pipelineContext, e._uniformsNames).forEach(function(t, i) {
                                    e._uniforms[e._uniformsNames[i]] = t
                                }), e._attributes = o.getAttributes(e._pipelineContext, t), n = 0; n < e._samplerList.length; n++) {
                                null == e.getUniform(e._samplerList[n]) && (e._samplerList.splice(n, 1), n--)
                            }
                            e._samplerList.forEach(function(t, i) {
                                e._samplers[t] = i
                            }), o.bindSamplers(e), e._compilationError = "", e._isReady = !0, e.onCompiled && e.onCompiled(e), e.onCompileObservable.notifyObservers(e), e.onCompileObservable.clear(), e._fallbacks && e._fallbacks.unBindMesh(), r && e.getEngine()._deletePipelineContext(r)
                        }), this._pipelineContext.isAsync && this._checkIsReady()
                    } catch (e) {
                        this._compilationError = e.message, s.a.Error("Unable to compile effect:"), s.a.Error("Uniforms: " + this._uniformsNames.map(function(e) {
                            return " " + e
                        })), s.a.Error("Attributes: " + t.map(function(e) {
                            return " " + e
                        })), s.a.Error("Error: " + this._compilationError), r && (this._pipelineContext = r, this._isReady = !0, this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this)), n && n.isMoreFallbacks ? (s.a.Error("Trying next fallback."), this.defines = n.reduce(this.defines, this), this._prepareEffect()) : (this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())
                    }
                }, Object.defineProperty(e.prototype, "isSupported", {
                    get: function() {
                        return "" === this._compilationError
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._bindTexture = function(e, t) {
                    this._engine._bindTexture(this._samplers[e], t)
                }, e.prototype.setTexture = function(e, t) {
                    this._engine.setTexture(this._samplers[e], this._uniforms[e], t)
                }, e.prototype.setDepthStencilTexture = function(e, t) {
                    this._engine.setDepthStencilTexture(this._samplers[e], this._uniforms[e], t)
                }, e.prototype.setTextureArray = function(e, t) {
                    var i = e + "Ex";
                    if (-1 === this._samplerList.indexOf(i))
                        for (var n = this._samplers[e], r = 1; r < t.length; r++) this._samplerList.splice(n + r, 0, i), this._samplers[i] = n + r;
                    this._engine.setTextureArray(this._samplers[e], this._uniforms[e], t)
                }, e.prototype.setTextureFromPostProcess = function(e, t) {
                    this._engine.setTextureFromPostProcess(this._samplers[e], t)
                }, e.prototype.setTextureFromPostProcessOutput = function(e, t) {
                    this._engine.setTextureFromPostProcessOutput(this._samplers[e], t)
                }, e.prototype._cacheMatrix = function(e, t) {
                    var i = this._valueCache[e],
                        n = t.updateFlag;
                    return (void 0 === i || i !== n) && (this._valueCache[e] = n, !0)
                }, e.prototype._cacheFloat2 = function(e, t, i) {
                    var n = this._valueCache[e];
                    if (!n) return n = [t, i], this._valueCache[e] = n, !0;
                    var r = !1;
                    return n[0] !== t && (n[0] = t, r = !0), n[1] !== i && (n[1] = i, r = !0), r
                }, e.prototype._cacheFloat3 = function(e, t, i, n) {
                    var r = this._valueCache[e];
                    if (!r) return r = [t, i, n], this._valueCache[e] = r, !0;
                    var o = !1;
                    return r[0] !== t && (r[0] = t, o = !0), r[1] !== i && (r[1] = i, o = !0), r[2] !== n && (r[2] = n, o = !0), o
                }, e.prototype._cacheFloat4 = function(e, t, i, n, r) {
                    var o = this._valueCache[e];
                    if (!o) return o = [t, i, n, r], this._valueCache[e] = o, !0;
                    var s = !1;
                    return o[0] !== t && (o[0] = t, s = !0), o[1] !== i && (o[1] = i, s = !0), o[2] !== n && (o[2] = n, s = !0), o[3] !== r && (o[3] = r, s = !0), s
                }, e.prototype.bindUniformBuffer = function(t, i) {
                    var n = this._uniformBuffersNames[i];
                    void 0 !== n && e._baseCache[n] !== t && (e._baseCache[n] = t, this._engine.bindUniformBufferBase(t, n))
                }, e.prototype.bindUniformBlock = function(e, t) {
                    this._engine.bindUniformBlock(this._pipelineContext, e, t)
                }, e.prototype.setInt = function(e, t) {
                    var i = this._valueCache[e];
                    return void 0 !== i && i === t ? this : (this._valueCache[e] = t, this._engine.setInt(this._uniforms[e], t), this)
                }, e.prototype.setIntArray = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setIntArray(this._uniforms[e], t), this
                }, e.prototype.setIntArray2 = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setIntArray2(this._uniforms[e], t), this
                }, e.prototype.setIntArray3 = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setIntArray3(this._uniforms[e], t), this
                }, e.prototype.setIntArray4 = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setIntArray4(this._uniforms[e], t), this
                }, e.prototype.setFloatArray = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setFloatArray(this._uniforms[e], t), this
                }, e.prototype.setFloatArray2 = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setFloatArray2(this._uniforms[e], t), this
                }, e.prototype.setFloatArray3 = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setFloatArray3(this._uniforms[e], t), this
                }, e.prototype.setFloatArray4 = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setFloatArray4(this._uniforms[e], t), this
                }, e.prototype.setArray = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setArray(this._uniforms[e], t), this
                }, e.prototype.setArray2 = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setArray2(this._uniforms[e], t), this
                }, e.prototype.setArray3 = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setArray3(this._uniforms[e], t), this
                }, e.prototype.setArray4 = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setArray4(this._uniforms[e], t), this
                }, e.prototype.setMatrices = function(e, t) {
                    return t ? (this._valueCache[e] = null, this._engine.setMatrices(this._uniforms[e], t), this) : this
                }, e.prototype.setMatrix = function(e, t) {
                    return this._cacheMatrix(e, t) && this._engine.setMatrix(this._uniforms[e], t), this
                }, e.prototype.setMatrix3x3 = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setMatrix3x3(this._uniforms[e], t), this
                }, e.prototype.setMatrix2x2 = function(e, t) {
                    return this._valueCache[e] = null, this._engine.setMatrix2x2(this._uniforms[e], t), this
                }, e.prototype.setFloat = function(e, t) {
                    var i = this._valueCache[e];
                    return void 0 !== i && i === t ? this : (this._valueCache[e] = t, this._engine.setFloat(this._uniforms[e], t), this)
                }, e.prototype.setBool = function(e, t) {
                    var i = this._valueCache[e];
                    return void 0 !== i && i === t ? this : (this._valueCache[e] = t, this._engine.setBool(this._uniforms[e], t ? 1 : 0), this)
                }, e.prototype.setVector2 = function(e, t) {
                    return this._cacheFloat2(e, t.x, t.y) && this._engine.setFloat2(this._uniforms[e], t.x, t.y), this
                }, e.prototype.setFloat2 = function(e, t, i) {
                    return this._cacheFloat2(e, t, i) && this._engine.setFloat2(this._uniforms[e], t, i), this
                }, e.prototype.setVector3 = function(e, t) {
                    return this._cacheFloat3(e, t.x, t.y, t.z) && this._engine.setFloat3(this._uniforms[e], t.x, t.y, t.z), this
                }, e.prototype.setFloat3 = function(e, t, i, n) {
                    return this._cacheFloat3(e, t, i, n) && this._engine.setFloat3(this._uniforms[e], t, i, n), this
                }, e.prototype.setVector4 = function(e, t) {
                    return this._cacheFloat4(e, t.x, t.y, t.z, t.w) && this._engine.setFloat4(this._uniforms[e], t.x, t.y, t.z, t.w), this
                }, e.prototype.setFloat4 = function(e, t, i, n, r) {
                    return this._cacheFloat4(e, t, i, n, r) && this._engine.setFloat4(this._uniforms[e], t, i, n, r), this
                }, e.prototype.setColor3 = function(e, t) {
                    return this._cacheFloat3(e, t.r, t.g, t.b) && this._engine.setColor3(this._uniforms[e], t), this
                }, e.prototype.setColor4 = function(e, t, i) {
                    return this._cacheFloat4(e, t.r, t.g, t.b, i) && this._engine.setColor4(this._uniforms[e], t, i), this
                }, e.prototype.setDirectColor4 = function(e, t) {
                    return this._cacheFloat4(e, t.r, t.g, t.b, t.a) && this._engine.setDirectColor4(this._uniforms[e], t), this
                }, e.prototype.dispose = function() {
                    this._engine._releaseEffect(this)
                }, e.RegisterShader = function(t, i, n) {
                    i && (e.ShadersStore[t + "PixelShader"] = i), n && (e.ShadersStore[t + "VertexShader"] = n)
                }, e.ResetCache = function() {
                    e._baseCache = {}
                }, e.ShadersRepository = "src/Shaders/", e._uniqueIdSeed = 0, e._baseCache = {}, e.ShadersStore = {}, e.IncludesShadersStore = {}, e
            }()
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        });
        var n = function() {
            function e() {}
            return e._AddLogEntry = function(t) {
                e._LogCache = t + e._LogCache, e.OnNewCacheEntry && e.OnNewCacheEntry(t)
            }, e._FormatMessage = function(e) {
                var t = function(e) {
                        return e < 10 ? "0" + e : "" + e
                    },
                    i = new Date;
                return "[" + t(i.getHours()) + ":" + t(i.getMinutes()) + ":" + t(i.getSeconds()) + "]: " + e
            }, e._LogDisabled = function(e) {}, e._LogEnabled = function(t) {
                var i = e._FormatMessage(t);
                console.log("BJS - " + i);
                var n = "<div style='color:white'>" + i + "</div><br>";
                e._AddLogEntry(n)
            }, e._WarnDisabled = function(e) {}, e._WarnEnabled = function(t) {
                var i = e._FormatMessage(t);
                console.warn("BJS - " + i);
                var n = "<div style='color:orange'>" + i + "</div><br>";
                e._AddLogEntry(n)
            }, e._ErrorDisabled = function(e) {}, e._ErrorEnabled = function(t) {
                e.errorsCount++;
                var i = e._FormatMessage(t);
                console.error("BJS - " + i);
                var n = "<div style='color:red'>" + i + "</div><br>";
                e._AddLogEntry(n)
            }, Object.defineProperty(e, "LogCache", {
                get: function() {
                    return e._LogCache
                },
                enumerable: !0,
                configurable: !0
            }), e.ClearLogCache = function() {
                e._LogCache = "", e.errorsCount = 0
            }, Object.defineProperty(e, "LogLevels", {
                set: function(t) {
                    (t & e.MessageLogLevel) === e.MessageLogLevel ? e.Log = e._LogEnabled : e.Log = e._LogDisabled, (t & e.WarningLogLevel) === e.WarningLogLevel ? e.Warn = e._WarnEnabled : e.Warn = e._WarnDisabled, (t & e.ErrorLogLevel) === e.ErrorLogLevel ? e.Error = e._ErrorEnabled : e.Error = e._ErrorDisabled
                },
                enumerable: !0,
                configurable: !0
            }), e.NoneLogLevel = 0, e.MessageLogLevel = 1, e.WarningLogLevel = 2, e.ErrorLogLevel = 4, e.AllLogLevel = 7, e._LogCache = "", e.errorsCount = 0, e.Log = e._LogEnabled, e.Warn = e._WarnEnabled, e.Error = e._ErrorEnabled, e
        }()
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return d
        });
        var n = i(1),
            r = i(2),
            o = i(8),
            s = i(9),
            a = i(0),
            c = i(44),
            l = i(3),
            u = i(22),
            h = i(19),
            d = function(e) {
                function t(i, n, r, a, c, u, h, d, f, p) {
                    void 0 === r && (r = !1), void 0 === a && (a = !0), void 0 === c && (c = t.TRILINEAR_SAMPLINGMODE), void 0 === u && (u = null), void 0 === h && (h = null), void 0 === d && (d = null), void 0 === f && (f = !1);
                    var _ = e.call(this, n) || this;
                    if (_.url = null, _.uOffset = 0, _.vOffset = 0, _.uScale = 1, _.vScale = 1, _.uAng = 0, _.vAng = 0, _.wAng = 0, _.uRotationCenter = .5, _.vRotationCenter = .5, _.wRotationCenter = .5, _.inspectableCustomProperties = null, _._noMipmap = !1, _._invertY = !1, _._rowGenerationMatrix = null, _._cachedTextureMatrix = null, _._projectionModeMatrix = null, _._t0 = null, _._t1 = null, _._t2 = null, _._cachedUOffset = -1, _._cachedVOffset = -1, _._cachedUScale = 0, _._cachedVScale = 0, _._cachedUAng = -1, _._cachedVAng = -1, _._cachedWAng = -1, _._cachedProjectionMatrixId = -1, _._cachedCoordinatesMode = -1, _._initialSamplingMode = t.BILINEAR_SAMPLINGMODE, _._buffer = null, _._deleteBuffer = !1, _._format = null, _._delayedOnLoad = null, _._delayedOnError = null, _.onLoadObservable = new o.c, _._isBlocking = !0, _.name = i || "", _.url = i, _._noMipmap = r, _._invertY = a, _._initialSamplingMode = c, _._buffer = d, _._deleteBuffer = f, p && (_._format = p), !(n = _.getScene())) return _;
                    n.getEngine().onBeforeTextureInitObservable.notifyObservers(_);
                    var g = function() {
                        _._texture && _._texture._invertVScale && (_.vScale = -1), _.onLoadObservable.hasObservers() && _.onLoadObservable.notifyObservers(_), u && u(), !_.isBlocking && n && n.resetCachedMaterial()
                    };
                    return _.url ? (_._texture = _._getFromCache(_.url, r, c, a), _._texture ? _._texture.isReady ? s.h.SetImmediate(function() {
                        return g()
                    }) : _._texture.onLoadedObservable.add(g) : n.useDelayedTextureLoading ? (_.delayLoadState = l.a.DELAYLOADSTATE_NOTLOADED, _._delayedOnLoad = g, _._delayedOnError = h) : (_._texture = n.getEngine().createTexture(_.url, r, a, n, c, g, h, _._buffer, void 0, _._format), f && delete _._buffer), _) : (_._delayedOnLoad = g, _._delayedOnError = h, _)
                }
                return n.d(t, e), Object.defineProperty(t.prototype, "noMipmap", {
                    get: function() {
                        return this._noMipmap
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isBlocking", {
                    get: function() {
                        return this._isBlocking
                    },
                    set: function(e) {
                        this._isBlocking = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "samplingMode", {
                    get: function() {
                        return this._texture ? this._texture.samplingMode : this._initialSamplingMode
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "invertY", {
                    get: function() {
                        return this._invertY
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.updateURL = function(e, t, i) {
                    void 0 === t && (t = null), this.url && (this.releaseInternalTexture(), this.getScene().markAllMaterialsAsDirty(l.a.MATERIAL_TextureDirtyFlag)), this.url = e, this._buffer = t, this.delayLoadState = l.a.DELAYLOADSTATE_NOTLOADED, i && (this._delayedOnLoad = i), this.delayLoad()
                }, t.prototype.delayLoad = function() {
                    if (this.delayLoadState === l.a.DELAYLOADSTATE_NOTLOADED) {
                        var e = this.getScene();
                        e && (this.delayLoadState = l.a.DELAYLOADSTATE_LOADED, this._texture = this._getFromCache(this.url, this._noMipmap, this.samplingMode, this._invertY), this._texture ? this._delayedOnLoad && (this._texture.isReady ? s.h.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = e.getEngine().createTexture(this.url, this._noMipmap, this._invertY, e, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format), this._deleteBuffer && delete this._buffer), this._delayedOnLoad = null, this._delayedOnError = null)
                    }
                }, t.prototype._prepareRowForTextureGeneration = function(e, t, i, n) {
                    e *= this.uScale, t *= this.vScale, e -= this.uRotationCenter * this.uScale, t -= this.vRotationCenter * this.vScale, i -= this.wRotationCenter, a.x.TransformCoordinatesFromFloatsToRef(e, t, i, this._rowGenerationMatrix, n), n.x += this.uRotationCenter * this.uScale + this.uOffset, n.y += this.vRotationCenter * this.vScale + this.vOffset, n.z += this.wRotationCenter
                }, t.prototype.getTextureMatrix = function() {
                    var e = this;
                    if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng) return this._cachedTextureMatrix;
                    this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedTextureMatrix || (this._cachedTextureMatrix = a.j.Zero(), this._rowGenerationMatrix = new a.j, this._t0 = a.x.Zero(), this._t1 = a.x.Zero(), this._t2 = a.x.Zero()), a.j.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.subtractInPlace(this._t0), this._t2.subtractInPlace(this._t0), a.j.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix);
                    var t = this.getScene();
                    return t ? (t.markAllMaterialsAsDirty(l.a.MATERIAL_TextureDirtyFlag, function(t) {
                        return t.hasTexture(e)
                    }), this._cachedTextureMatrix) : this._cachedTextureMatrix
                }, t.prototype.getReflectionTextureMatrix = function() {
                    var e = this,
                        i = this.getScene();
                    if (!i) return this._cachedTextureMatrix;
                    if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale === this._cachedUScale && this.vScale === this._cachedVScale && this.coordinatesMode === this._cachedCoordinatesMode) {
                        if (this.coordinatesMode !== t.PROJECTION_MODE) return this._cachedTextureMatrix;
                        if (this._cachedProjectionMatrixId === i.getProjectionMatrix().updateFlag) return this._cachedTextureMatrix
                    }
                    switch (this._cachedTextureMatrix || (this._cachedTextureMatrix = a.j.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = a.j.Zero()), this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale, this._cachedVScale = this.vScale, this._cachedCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
                        case t.PLANAR_MODE:
                            a.j.IdentityToRef(this._cachedTextureMatrix), this._cachedTextureMatrix[0] = this.uScale, this._cachedTextureMatrix[5] = this.vScale, this._cachedTextureMatrix[12] = this.uOffset, this._cachedTextureMatrix[13] = this.vOffset;
                            break;
                        case t.PROJECTION_MODE:
                            a.j.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                            var n = i.getProjectionMatrix();
                            this._cachedProjectionMatrixId = n.updateFlag, n.multiplyToRef(this._projectionModeMatrix, this._cachedTextureMatrix);
                            break;
                        default:
                            a.j.IdentityToRef(this._cachedTextureMatrix)
                    }
                    return i.markAllMaterialsAsDirty(l.a.MATERIAL_TextureDirtyFlag, function(t) {
                        return -1 !== t.getActiveTextures().indexOf(e)
                    }), this._cachedTextureMatrix
                }, t.prototype.clone = function() {
                    var e = this;
                    return r.a.Clone(function() {
                        return new t(e._texture ? e._texture.url : null, e.getScene(), e._noMipmap, e._invertY, e.samplingMode, void 0, void 0, e._texture ? e._texture._buffer : void 0)
                    }, this)
                }, t.prototype.serialize = function() {
                    var t = e.prototype.serialize.call(this);
                    return "string" == typeof this._buffer && "data:" === this._buffer.substr(0, 5) && (t.base64String = this._buffer, t.name = t.name.replace("data:", "")), t.invertY = this._invertY, t.samplingMode = this.samplingMode, t
                }, t.prototype.getClassName = function() {
                    return "Texture"
                }, t.prototype.dispose = function() {
                    e.prototype.dispose.call(this), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null
                }, t.Parse = function(e, i, n) {
                    if (e.customType) {
                        var o = s.h.Instantiate(e.customType).Parse(e, i, n);
                        return e.samplingMode && o.updateSamplingMode && o._samplingMode && o._samplingMode !== e.samplingMode && o.updateSamplingMode(e.samplingMode), o
                    }
                    if (e.isCube && !e.isRenderTarget) return t._CubeTextureParser(e, i, n);
                    if (!e.name && !e.isRenderTarget) return null;
                    var c = r.a.Parse(function() {
                        var r, o = !0;
                        if (e.noMipmap && (o = !1), e.mirrorPlane) {
                            var s = t._CreateMirror(e.name, e.renderTargetSize, i, o);
                            return s._waitingRenderList = e.renderList, s.mirrorPlane = a.n.FromArray(e.mirrorPlane), s
                        }
                        if (e.isRenderTarget) {
                            var c = null;
                            if (e.isCube) {
                                if (i.reflectionProbes)
                                    for (var l = 0; l < i.reflectionProbes.length; l++) {
                                        var u = i.reflectionProbes[l];
                                        if (u.name === e.name) return u.cubeTexture
                                    }
                            } else(c = t._CreateRenderTargetTexture(e.name, e.renderTargetSize, i, o))._waitingRenderList = e.renderList;
                            return c
                        }
                        if (e.base64String) r = t.CreateFromBase64String(e.base64String, e.name, i, !o);
                        else {
                            var h = n + e.name;
                            t.UseSerializedUrlIfAny && e.url && (h = e.url), r = new t(h, i, !o, e.invertY)
                        }
                        return r
                    }, e, i);
                    if (e.samplingMode) {
                        var l = e.samplingMode;
                        c && c.samplingMode !== l && c.updateSamplingMode(l)
                    }
                    if (c && e.animations)
                        for (var h = 0; h < e.animations.length; h++) {
                            var d = e.animations[h],
                                f = u.a.GetClass("BABYLON.Animation");
                            f && c.animations.push(f.Parse(d))
                        }
                    return c
                }, t.CreateFromBase64String = function(e, i, n, r, o, s, a, c, u) {
                    return void 0 === s && (s = t.TRILINEAR_SAMPLINGMODE), void 0 === a && (a = null), void 0 === c && (c = null), void 0 === u && (u = l.a.TEXTUREFORMAT_RGBA), new t("data:" + i, n, r, o, s, a, c, e, !1, u)
                }, t.LoadFromDataString = function(e, i, n, r, o, s, a, c, u, h) {
                    return void 0 === r && (r = !1), void 0 === o && (o = !1), void 0 === s && (s = !0), void 0 === a && (a = t.TRILINEAR_SAMPLINGMODE), void 0 === c && (c = null), void 0 === u && (u = null), void 0 === h && (h = l.a.TEXTUREFORMAT_RGBA), "data:" !== e.substr(0, 5) && (e = "data:" + e), new t(e, n, o, s, a, c, u, i, r, h)
                }, t._CubeTextureParser = function(e, t, i) {
                    throw h.a.WarnImport("CubeTexture")
                }, t._CreateMirror = function(e, t, i, n) {
                    throw h.a.WarnImport("MirrorTexture")
                }, t._CreateRenderTargetTexture = function(e, t, i, n) {
                    throw h.a.WarnImport("RenderTargetTexture")
                }, t.NEAREST_SAMPLINGMODE = l.a.TEXTURE_NEAREST_SAMPLINGMODE, t.NEAREST_NEAREST_MIPLINEAR = l.a.TEXTURE_NEAREST_NEAREST_MIPLINEAR, t.BILINEAR_SAMPLINGMODE = l.a.TEXTURE_BILINEAR_SAMPLINGMODE, t.LINEAR_LINEAR_MIPNEAREST = l.a.TEXTURE_LINEAR_LINEAR_MIPNEAREST, t.TRILINEAR_SAMPLINGMODE = l.a.TEXTURE_TRILINEAR_SAMPLINGMODE, t.LINEAR_LINEAR_MIPLINEAR = l.a.TEXTURE_LINEAR_LINEAR_MIPLINEAR, t.NEAREST_NEAREST_MIPNEAREST = l.a.TEXTURE_NEAREST_NEAREST_MIPNEAREST, t.NEAREST_LINEAR_MIPNEAREST = l.a.TEXTURE_NEAREST_LINEAR_MIPNEAREST, t.NEAREST_LINEAR_MIPLINEAR = l.a.TEXTURE_NEAREST_LINEAR_MIPLINEAR, t.NEAREST_LINEAR = l.a.TEXTURE_NEAREST_LINEAR, t.NEAREST_NEAREST = l.a.TEXTURE_NEAREST_NEAREST, t.LINEAR_NEAREST_MIPNEAREST = l.a.TEXTURE_LINEAR_NEAREST_MIPNEAREST, t.LINEAR_NEAREST_MIPLINEAR = l.a.TEXTURE_LINEAR_NEAREST_MIPLINEAR, t.LINEAR_LINEAR = l.a.TEXTURE_LINEAR_LINEAR, t.LINEAR_NEAREST = l.a.TEXTURE_LINEAR_NEAREST, t.EXPLICIT_MODE = l.a.TEXTURE_EXPLICIT_MODE, t.SPHERICAL_MODE = l.a.TEXTURE_SPHERICAL_MODE, t.PLANAR_MODE = l.a.TEXTURE_PLANAR_MODE, t.CUBIC_MODE = l.a.TEXTURE_CUBIC_MODE, t.PROJECTION_MODE = l.a.TEXTURE_PROJECTION_MODE, t.SKYBOX_MODE = l.a.TEXTURE_SKYBOX_MODE, t.INVCUBIC_MODE = l.a.TEXTURE_INVCUBIC_MODE, t.EQUIRECTANGULAR_MODE = l.a.TEXTURE_EQUIRECTANGULAR_MODE, t.FIXED_EQUIRECTANGULAR_MODE = l.a.TEXTURE_FIXED_EQUIRECTANGULAR_MODE, t.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = l.a.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE, t.CLAMP_ADDRESSMODE = l.a.TEXTURE_CLAMP_ADDRESSMODE, t.WRAP_ADDRESSMODE = l.a.TEXTURE_WRAP_ADDRESSMODE, t.MIRROR_ADDRESSMODE = l.a.TEXTURE_MIRROR_ADDRESSMODE, t.UseSerializedUrlIfAny = !1, n.c([Object(r.c)()], t.prototype, "url", void 0), n.c([Object(r.c)()], t.prototype, "uOffset", void 0), n.c([Object(r.c)()], t.prototype, "vOffset", void 0), n.c([Object(r.c)()], t.prototype, "uScale", void 0), n.c([Object(r.c)()], t.prototype, "vScale", void 0), n.c([Object(r.c)()], t.prototype, "uAng", void 0), n.c([Object(r.c)()], t.prototype, "vAng", void 0), n.c([Object(r.c)()], t.prototype, "wAng", void 0), n.c([Object(r.c)()], t.prototype, "uRotationCenter", void 0), n.c([Object(r.c)()], t.prototype, "vRotationCenter", void 0), n.c([Object(r.c)()], t.prototype, "wRotationCenter", void 0), n.c([Object(r.c)()], t.prototype, "isBlocking", null), t
            }(c.a);
        r.a._TextureParser = d.Parse
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        }), i.d(t, "d", function() {
            return r
        }), i.d(t, "b", function() {
            return o
        }), i.d(t, "c", function() {
            return s
        });
        var n = function() {
                function e(e, t, i, n) {
                    void 0 === t && (t = !1), this.initalize(e, t, i, n)
                }
                return e.prototype.initalize = function(e, t, i, n) {
                    return void 0 === t && (t = !1), this.mask = e, this.skipNextObservers = t, this.target = i, this.currentTarget = n, this
                }, e
            }(),
            r = function() {
                return function(e, t, i) {
                    void 0 === i && (i = null), this.callback = e, this.mask = t, this.scope = i, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1
                }
            }(),
            o = function() {
                function e() {}
                return e.prototype.dispose = function() {
                    if (this._observers && this._observables)
                        for (var e = 0; e < this._observers.length; e++) this._observables[e].remove(this._observers[e]);
                    this._observers = null, this._observables = null
                }, e.Watch = function(t, i, n, r) {
                    void 0 === n && (n = -1), void 0 === r && (r = null);
                    var o = new e;
                    o._observers = new Array, o._observables = t;
                    for (var s = 0, a = t; s < a.length; s++) {
                        var c = a[s].add(i, n, !1, r);
                        c && o._observers.push(c)
                    }
                    return o
                }, e
            }(),
            s = function() {
                function e(e) {
                    this._observers = new Array, this._eventState = new n(0), e && (this._onObserverAdded = e)
                }
                return e.prototype.add = function(e, t, i, n, o) {
                    if (void 0 === t && (t = -1), void 0 === i && (i = !1), void 0 === n && (n = null), void 0 === o && (o = !1), !e) return null;
                    var s = new r(e, t, n);
                    return s.unregisterOnNextCall = o, i ? this._observers.unshift(s) : this._observers.push(s), this._onObserverAdded && this._onObserverAdded(s), s
                }, e.prototype.addOnce = function(e) {
                    return this.add(e, void 0, void 0, void 0, !0)
                }, e.prototype.remove = function(e) {
                    return !!e && (-1 !== this._observers.indexOf(e) && (this._deferUnregister(e), !0))
                }, e.prototype.removeCallback = function(e, t) {
                    for (var i = 0; i < this._observers.length; i++)
                        if (this._observers[i].callback === e && (!t || t === this._observers[i].scope)) return this._deferUnregister(this._observers[i]), !0;
                    return !1
                }, e.prototype._deferUnregister = function(e) {
                    var t = this;
                    e.unregisterOnNextCall = !1, e._willBeUnregistered = !0, setTimeout(function() {
                        t._remove(e)
                    }, 0)
                }, e.prototype._remove = function(e) {
                    if (!e) return !1;
                    var t = this._observers.indexOf(e);
                    return -1 !== t && (this._observers.splice(t, 1), !0)
                }, e.prototype.makeObserverTopPriority = function(e) {
                    this._remove(e), this._observers.unshift(e)
                }, e.prototype.makeObserverBottomPriority = function(e) {
                    this._remove(e), this._observers.push(e)
                }, e.prototype.notifyObservers = function(e, t, i, n) {
                    if (void 0 === t && (t = -1), !this._observers.length) return !0;
                    var r = this._eventState;
                    r.mask = t, r.target = i, r.currentTarget = n, r.skipNextObservers = !1, r.lastReturnValue = e;
                    for (var o = 0, s = this._observers; o < s.length; o++) {
                        var a = s[o];
                        if (!a._willBeUnregistered && (a.mask & t && (a.scope ? r.lastReturnValue = a.callback.apply(a.scope, [e, r]) : r.lastReturnValue = a.callback(e, r), a.unregisterOnNextCall && this._deferUnregister(a)), r.skipNextObservers)) return !1
                    }
                    return !0
                }, e.prototype.notifyObserversWithPromise = function(e, t, i, n) {
                    var r = this;
                    void 0 === t && (t = -1);
                    var o = Promise.resolve(e);
                    if (!this._observers.length) return o;
                    var s = this._eventState;
                    return s.mask = t, s.target = i, s.currentTarget = n, s.skipNextObservers = !1, this._observers.forEach(function(i) {
                        s.skipNextObservers || i._willBeUnregistered || i.mask & t && (o = i.scope ? o.then(function(t) {
                            return s.lastReturnValue = t, i.callback.apply(i.scope, [e, s])
                        }) : o.then(function(t) {
                            return s.lastReturnValue = t, i.callback(e, s)
                        }), i.unregisterOnNextCall && r._deferUnregister(i))
                    }), o.then(function() {
                        return e
                    })
                }, e.prototype.notifyObserver = function(e, t, i) {
                    void 0 === i && (i = -1);
                    var n = this._eventState;
                    n.mask = i, n.skipNextObservers = !1, e.callback(t, n)
                }, e.prototype.hasObservers = function() {
                    return this._observers.length > 0
                }, e.prototype.clear = function() {
                    this._observers = new Array, this._onObserverAdded = null
                }, e.prototype.clone = function() {
                    var t = new e;
                    return t._observers = this._observers.slice(0), t
                }, e.prototype.hasSpecificMask = function(e) {
                    void 0 === e && (e = -1);
                    for (var t = 0, i = this._observers; t < i.length; t++) {
                        var n = i[t];
                        if (n.mask & e || n.mask === e) return !0
                    }
                    return !1
                }, e
            }()
    }, function(e, t, i) {
        "use strict";
        i.d(t, "c", function() {
            return g
        }), i.d(t, "b", function() {
            return m
        }), i.d(t, "d", function() {
            return v
        }), i.d(t, "e", function() {
            return y
        }), i.d(t, "g", function() {
            return b
        }), i.d(t, "h", function() {
            return T
        }), i.d(t, "f", function() {
            return E
        }), i.d(t, "i", function() {
            return A
        }), i.d(t, "a", function() {
            return x
        });
        var n = i(1),
            r = i(0),
            o = i(12),
            s = i(8),
            a = i(59),
            c = i(3),
            l = i(35),
            u = i(6),
            h = i(22),
            d = i(32),
            f = i(47),
            p = i(19),
            _ = i(60),
            g = function() {
                function e() {}
                return e.prototype.getColorToRef = function(e) {
                    this.color2 ? r.f.LerpToRef(this.color1, this.color2, Math.random(), e) : e.copyFrom(this.color1)
                }, e
            }(),
            m = function() {
                return function() {}
            }(),
            v = function() {
                function e() {}
                return e.prototype.getFactor = function() {
                    return void 0 === this.factor2 ? this.factor1 : o.a.Lerp(this.factor1, this.factor2, Math.random())
                }, e
            }(),
            y = function(e) {
                function t(i, n) {
                    var r = e.call(this, i) || this;
                    return r.request = n, r.name = "LoadFileError", t._setPrototypeOf(r, t.prototype), r
                }
                return n.d(t, e), t._setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, t
            }(Error),
            b = function() {
                function e() {}
                return e.ExponentialBackoff = function(e, t) {
                    return void 0 === e && (e = 3), void 0 === t && (t = 500),
                        function(i, n, r) {
                            return 0 !== n.status || r >= e || -1 !== i.indexOf("file:") ? -1 : Math.pow(2, r) * t
                        }
                }, e
            }(),
            T = function() {
                function e() {}
                return e.FetchToRef = function(e, t, i, n, r, o) {
                    var s = 4 * ((Math.abs(e) * i % i | 0) + (Math.abs(t) * n % n | 0) * i);
                    o.r = r[s] / 255, o.g = r[s + 1] / 255, o.b = r[s + 2] / 255, o.a = r[s + 3] / 255
                }, e.Mix = function(e, t, i) {
                    return e * (1 - i) + t * i
                }, e.Instantiate = function(t) {
                    if (e.RegisteredExternalClasses && e.RegisteredExternalClasses[t]) return e.RegisteredExternalClasses[t];
                    var i = h.a.GetClass(t);
                    if (i) return i;
                    u.a.Warn(t + " not found, you may have missed an import.");
                    for (var n = t.split("."), r = window || this, o = 0, s = n.length; o < s; o++) r = r[n[o]];
                    return "function" != typeof r ? null : r
                }, e.Slice = function(e, t, i) {
                    return e.slice ? e.slice(t, i) : Array.prototype.slice.call(e, t, i)
                }, e.SetImmediate = function(e) {
                    l.a.IsWindowObjectExist() && window.setImmediate ? window.setImmediate(e) : setTimeout(e, 1)
                }, e.IsExponentOfTwo = function(e) {
                    var t = 1;
                    do {
                        t *= 2
                    } while (t < e);
                    return t === e
                }, e.FloatRound = function(t) {
                    return Math.fround ? Math.fround(t) : e._tmpFloatArray[0] = t
                }, e.CeilingPOT = function(e) {
                    return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, ++e
                }, e.FloorPOT = function(e) {
                    return e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, (e |= e >> 16) - (e >> 1)
                }, e.NearestPOT = function(t) {
                    var i = e.CeilingPOT(t),
                        n = e.FloorPOT(t);
                    return i - t > t - n ? n : i
                }, e.GetExponentOfTwo = function(t, i, n) {
                    var r;
                    switch (void 0 === n && (n = c.a.SCALEMODE_NEAREST), n) {
                        case c.a.SCALEMODE_FLOOR:
                            r = e.FloorPOT(t);
                            break;
                        case c.a.SCALEMODE_NEAREST:
                            r = e.NearestPOT(t);
                            break;
                        case c.a.SCALEMODE_CEILING:
                        default:
                            r = e.CeilingPOT(t)
                    }
                    return Math.min(r, i)
                }, e.GetFilename = function(e) {
                    var t = e.lastIndexOf("/");
                    return t < 0 ? e : e.substring(t + 1)
                }, e.GetFolderPath = function(e, t) {
                    void 0 === t && (t = !1);
                    var i = e.lastIndexOf("/");
                    return i < 0 ? t ? e : "" : e.substring(0, i + 1)
                }, e.ToDegrees = function(e) {
                    return 180 * e / Math.PI
                }, e.ToRadians = function(e) {
                    return e * Math.PI / 180
                }, e.EncodeArrayBufferTobase64 = function(e) {
                    for (var t, i, n, r, o, s, a, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", l = "", u = 0, h = new Uint8Array(e); u < h.length;) r = (t = h[u++]) >> 2, o = (3 & t) << 4 | (i = u < h.length ? h[u++] : Number.NaN) >> 4, s = (15 & i) << 2 | (n = u < h.length ? h[u++] : Number.NaN) >> 6, a = 63 & n, isNaN(i) ? s = a = 64 : isNaN(n) && (a = 64), l += c.charAt(r) + c.charAt(o) + c.charAt(s) + c.charAt(a);
                    return "data:image/png;base64," + l
                }, e.ExtractMinAndMaxIndexed = function(e, t, i, n, o) {
                    void 0 === o && (o = null);
                    for (var s = new r.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), a = new r.x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), c = i; c < i + n; c++) {
                        var l = 3 * t[c],
                            u = e[l],
                            h = e[l + 1],
                            d = e[l + 2];
                        s.minimizeInPlaceFromFloats(u, h, d), a.maximizeInPlaceFromFloats(u, h, d)
                    }
                    return o && (s.x -= s.x * o.x + o.y, s.y -= s.y * o.x + o.y, s.z -= s.z * o.x + o.y, a.x += a.x * o.x + o.y, a.y += a.y * o.x + o.y, a.z += a.z * o.x + o.y), {
                        minimum: s,
                        maximum: a
                    }
                }, e.ExtractMinAndMax = function(e, t, i, n, o) {
                    void 0 === n && (n = null);
                    var s = new r.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
                        a = new r.x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                    o || (o = 3);
                    for (var c = t, l = t * o; c < t + i; c++, l += o) {
                        var u = e[l],
                            h = e[l + 1],
                            d = e[l + 2];
                        s.minimizeInPlaceFromFloats(u, h, d), a.maximizeInPlaceFromFloats(u, h, d)
                    }
                    return n && (s.x -= s.x * n.x + n.y, s.y -= s.y * n.x + n.y, s.z -= s.z * n.x + n.y, a.x += a.x * n.x + n.y, a.y += a.y * n.x + n.y, a.z += a.z * n.x + n.y), {
                        minimum: s,
                        maximum: a
                    }
                }, e.MakeArray = function(e, t) {
                    return !0 === t || void 0 !== e && null != e ? Array.isArray(e) ? e : [e] : null
                }, e.GetPointerPrefix = function() {
                    var e = "pointer";
                    return !l.a.IsWindowObjectExist() || window.PointerEvent || navigator.pointerEnabled || (e = "mouse"), e
                }, e.QueueNewFrame = function(e, t) {
                    return l.a.IsWindowObjectExist() ? (t || (t = window), t.requestAnimationFrame ? t.requestAnimationFrame(e) : t.msRequestAnimationFrame ? t.msRequestAnimationFrame(e) : t.webkitRequestAnimationFrame ? t.webkitRequestAnimationFrame(e) : t.mozRequestAnimationFrame ? t.mozRequestAnimationFrame(e) : t.oRequestAnimationFrame ? t.oRequestAnimationFrame(e) : window.setTimeout(e, 16)) : setTimeout(e, 16)
                }, e.RequestFullscreen = function(e) {
                    var t = e.requestFullscreen || e.msRequestFullscreen || e.webkitRequestFullscreen || e.mozRequestFullScreen;
                    t && t.call(e)
                }, e.ExitFullscreen = function() {
                    var e = document;
                    document.exitFullscreen ? document.exitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitCancelFullScreen ? e.webkitCancelFullScreen() : e.msCancelFullScreen && e.msCancelFullScreen()
                }, e.SetCorsBehavior = function(t, i) {
                    if ((!t || 0 !== t.indexOf("data:")) && e.CorsBehavior)
                        if ("string" == typeof e.CorsBehavior || e.CorsBehavior instanceof String) i.crossOrigin = e.CorsBehavior;
                        else {
                            var n = e.CorsBehavior(t);
                            n && (i.crossOrigin = n)
                        }
                }, e.CleanUrl = function(e) {
                    return e = e.replace(/#/gm, "%23")
                }, e.LoadImage = function(t, i, n, r) {
                    var o, s = !1;
                    t instanceof ArrayBuffer ? (o = URL.createObjectURL(new Blob([t])), s = !0) : t instanceof Blob ? (o = URL.createObjectURL(t), s = !0) : (o = e.CleanUrl(t), o = e.PreprocessUrl(t));
                    var c = new Image;
                    e.SetCorsBehavior(o, c);
                    var l = function() {
                            c.removeEventListener("load", l), c.removeEventListener("error", h), i(c), s && c.src && URL.revokeObjectURL(c.src)
                        },
                        h = function(e) {
                            c.removeEventListener("load", l), c.removeEventListener("error", h), u.a.Error("Error while trying to load image: " + t), n && n("Error while trying to load image: " + t, e), s && c.src && URL.revokeObjectURL(c.src)
                        };
                    c.addEventListener("load", l), c.addEventListener("error", h);
                    var d = function() {
                        c.src = o
                    };
                    if ("data:" !== o.substr(0, 5) && r && r.enableTexturesOffline) r.open(function() {
                        r && r.loadImage(o, c)
                    }, d);
                    else {
                        if (-1 !== o.indexOf("file:")) {
                            var f = decodeURIComponent(o.substring(5).toLowerCase());
                            if (a.a.FilesToLoad[f]) {
                                try {
                                    var p;
                                    try {
                                        p = URL.createObjectURL(a.a.FilesToLoad[f])
                                    } catch (e) {
                                        p = URL.createObjectURL(a.a.FilesToLoad[f])
                                    }
                                    c.src = p, s = !0
                                } catch (e) {
                                    c.src = ""
                                }
                                return c
                            }
                        }
                        d()
                    }
                    return c
                }, e.LoadFile = function(t, i, n, r, o, c) {
                    if (t = e.CleanUrl(t), -1 !== (t = e.PreprocessUrl(t)).indexOf("file:")) {
                        var u = decodeURIComponent(t.substring(5).toLowerCase());
                        if (a.a.FilesToLoad[u]) return e.ReadFile(a.a.FilesToLoad[u], i, n, o)
                    }
                    var h = e.BaseUrl + t,
                        d = !1,
                        f = {
                            onCompleteObservable: new s.c,
                            abort: function() {
                                return d = !0
                            }
                        },
                        p = function() {
                            var t = new _.a,
                                r = null;
                            f.abort = function() {
                                d = !0, t.readyState !== (XMLHttpRequest.DONE || 4) && t.abort(), null !== r && (clearTimeout(r), r = null)
                            };
                            var s = function(a) {
                                t.open("GET", h), o && (t.responseType = "arraybuffer"), n && t.addEventListener("progress", n);
                                var u = function() {
                                    t.removeEventListener("loadend", u), f.onCompleteObservable.notifyObservers(f), f.onCompleteObservable.clear()
                                };
                                t.addEventListener("loadend", u);
                                var p = function() {
                                    if (!d && t.readyState === (XMLHttpRequest.DONE || 4)) {
                                        if (t.removeEventListener("readystatechange", p), t.status >= 200 && t.status < 300 || 0 === t.status && (!l.a.IsWindowObjectExist() || e.IsFileURL())) return void i(o ? t.response : t.responseText, t.responseURL);
                                        var n = e.DefaultRetryStrategy;
                                        if (n) {
                                            var f = n(h, t, a);
                                            if (-1 !== f) return t.removeEventListener("loadend", u), t = new _.a, void(r = setTimeout(function() {
                                                return s(a + 1)
                                            }, f))
                                        }
                                        var g = new y("Error status: " + t.status + " " + t.statusText + " - Unable to load " + h, t);
                                        if (!c) throw g;
                                        c(t, g)
                                    }
                                };
                                t.addEventListener("readystatechange", p), t.send()
                            };
                            s(0)
                        };
                    if (r && r.enableSceneOffline) {
                        var g = function(e) {
                            e && e.status > 400 ? c && c(e) : d || p()
                        };
                        r.open(function() {
                            d || r && r.loadFile(t, function(e) {
                                d || i(e), f.onCompleteObservable.notifyObservers(f)
                            }, n ? function(e) {
                                d || n(e)
                            } : void 0, g, o)
                        }, g)
                    } else p();
                    return f
                }, e.LoadScript = function(e, t, i, n) {
                    if (l.a.IsWindowObjectExist()) {
                        var r = document.getElementsByTagName("head")[0],
                            o = document.createElement("script");
                        o.setAttribute("type", "text/javascript"), o.setAttribute("src", e), n && (o.id = n), o.onload = function() {
                            t && t()
                        }, o.onerror = function(t) {
                            i && i("Unable to load script '" + e + "'", t)
                        }, r.appendChild(o)
                    }
                }, e.LoadScriptAsync = function(e, t) {
                    return new Promise(function(i, n) {
                        if (l.a.IsWindowObjectExist()) {
                            var r = document.getElementsByTagName("head")[0],
                                o = document.createElement("script");
                            o.setAttribute("type", "text/javascript"), o.setAttribute("src", e), t && (o.id = t), o.onload = function() {
                                i(!0)
                            }, o.onerror = function(e) {
                                i(!1)
                            }, r.appendChild(o)
                        } else i(!1)
                    })
                }, e.ReadFileAsDataURL = function(e, t, i) {
                    var n = new FileReader,
                        r = {
                            onCompleteObservable: new s.c,
                            abort: function() {
                                return n.abort()
                            }
                        };
                    return n.onloadend = function(e) {
                        r.onCompleteObservable.notifyObservers(r)
                    }, n.onload = function(e) {
                        t(e.target.result)
                    }, n.onprogress = i, n.readAsDataURL(e), r
                }, e.ReadFile = function(e, t, i, n) {
                    var r = new FileReader,
                        o = {
                            onCompleteObservable: new s.c,
                            abort: function() {
                                return r.abort()
                            }
                        };
                    return r.onloadend = function(e) {
                        return o.onCompleteObservable.notifyObservers(o)
                    }, r.onerror = function(i) {
                        u.a.Log("Error while reading file: " + e.name), t(JSON.stringify({
                            autoClear: !0,
                            clearColor: [1, 0, 0],
                            ambientColor: [0, 0, 0],
                            gravity: [0, -9.807, 0],
                            meshes: [],
                            cameras: [],
                            lights: []
                        }))
                    }, r.onload = function(e) {
                        t(e.target.result)
                    }, i && (r.onprogress = i), n ? r.readAsArrayBuffer(e) : r.readAsText(e), o
                }, e.FileAsURL = function(e) {
                    var t = new Blob([e]);
                    return (window.URL || window.webkitURL).createObjectURL(t)
                }, e.Format = function(e, t) {
                    return void 0 === t && (t = 2), e.toFixed(t)
                }, e.CheckExtends = function(e, t, i) {
                    t.minimizeInPlace(e), i.maximizeInPlace(e)
                }, e.DeepCopy = function(e, t, i, n) {
                    d.a.DeepCopy(e, t, i, n)
                }, e.IsEmpty = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }, e.EndsWith = function(e, t) {
                    return -1 !== e.indexOf(t, e.length - t.length)
                }, e.RegisterTopRootEvents = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        window.addEventListener(i.name, i.handler, !1);
                        try {
                            window.parent && window.parent.addEventListener(i.name, i.handler, !1)
                        } catch (e) {}
                    }
                }, e.UnregisterTopRootEvents = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        window.removeEventListener(i.name, i.handler);
                        try {
                            window.parent && window.parent.removeEventListener(i.name, i.handler)
                        } catch (e) {}
                    }
                }, e.DumpFramebuffer = function(t, i, n, r, o, s) {
                    void 0 === o && (o = "image/png");
                    for (var a = 4 * t, c = i / 2, l = n.readPixels(0, 0, t, i), u = 0; u < c; u++)
                        for (var h = 0; h < a; h++) {
                            var d = h + u * a,
                                f = h + (i - u - 1) * a,
                                p = l[d];
                            l[d] = l[f], l[f] = p
                        }
                    e._ScreenshotCanvas || (e._ScreenshotCanvas = document.createElement("canvas")), e._ScreenshotCanvas.width = t, e._ScreenshotCanvas.height = i;
                    var _ = e._ScreenshotCanvas.getContext("2d");
                    if (_) {
                        var g = _.createImageData(t, i);
                        g.data.set(l), _.putImageData(g, 0, 0), e.EncodeScreenshotCanvasData(r, o, s)
                    }
                }, e.ToBlob = function(e, t, i) {
                    void 0 === i && (i = "image/png"), e.toBlob || (e.toBlob = function(e, t, i) {
                        var n = this;
                        setTimeout(function() {
                            for (var r = atob(n.toDataURL(t, i).split(",")[1]), o = r.length, s = new Uint8Array(o), a = 0; a < o; a++) s[a] = r.charCodeAt(a);
                            e(new Blob([s]))
                        })
                    }), e.toBlob(function(e) {
                        t(e)
                    }, i)
                }, e.EncodeScreenshotCanvasData = function(t, i, n) {
                    (void 0 === i && (i = "image/png"), t) ? t(e._ScreenshotCanvas.toDataURL(i)): this.ToBlob(e._ScreenshotCanvas, function(t) {
                        if ("download" in document.createElement("a")) {
                            if (!n) {
                                var i = new Date,
                                    r = (i.getFullYear() + "-" + (i.getMonth() + 1)).slice(2) + "-" + i.getDate() + "_" + i.getHours() + "-" + ("0" + i.getMinutes()).slice(-2);
                                n = "screenshot_" + r + ".png"
                            }
                            e.Download(t, n)
                        } else {
                            var o = URL.createObjectURL(t),
                                s = window.open("");
                            if (!s) return;
                            var a = s.document.createElement("img");
                            a.onload = function() {
                                URL.revokeObjectURL(o)
                            }, a.src = o, s.document.body.appendChild(a)
                        }
                    }, i)
                }, e.Download = function(e, t) {
                    if (navigator && navigator.msSaveBlob) navigator.msSaveBlob(e, t);
                    else {
                        var i = window.URL.createObjectURL(e),
                            n = document.createElement("a");
                        document.body.appendChild(n), n.style.display = "none", n.href = i, n.download = t, n.addEventListener("click", function() {
                            n.parentElement && n.parentElement.removeChild(n)
                        }), n.click(), window.URL.revokeObjectURL(i)
                    }
                }, e.CreateScreenshot = function(e, t, i, n, r) {
                    throw void 0 === r && (r = "image/png"), p.a.WarnImport("ScreenshotTools")
                }, e.CreateScreenshotUsingRenderTarget = function(e, t, i, n, r, o, s, a) {
                    throw void 0 === r && (r = "image/png"), void 0 === o && (o = 1), void 0 === s && (s = !1), p.a.WarnImport("ScreenshotTools")
                }, e.RandomId = function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    })
                }, e.IsBase64 = function(e) {
                    return !(e.length < 5) && "data:" === e.substr(0, 5)
                }, e.DecodeBase64 = function(e) {
                    for (var t = atob(e.split(",")[1]), i = t.length, n = new Uint8Array(new ArrayBuffer(i)), r = 0; r < i; r++) n[r] = t.charCodeAt(r);
                    return n.buffer
                }, e.GetAbsoluteUrl = function(e) {
                    var t = document.createElement("a");
                    return t.href = e, t.href
                }, Object.defineProperty(e, "errorsCount", {
                    get: function() {
                        return u.a.errorsCount
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.Log = function(e) {
                    u.a.Log(e)
                }, e.Warn = function(e) {
                    u.a.Warn(e)
                }, e.Error = function(e) {
                    u.a.Error(e)
                }, Object.defineProperty(e, "LogCache", {
                    get: function() {
                        return u.a.LogCache
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.ClearLogCache = function() {
                    u.a.ClearLogCache()
                }, Object.defineProperty(e, "LogLevels", {
                    set: function(e) {
                        u.a.LogLevels = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.IsFileURL = function() {
                    return "file:" === location.protocol
                }, Object.defineProperty(e, "PerformanceLogLevel", {
                    set: function(t) {
                        return (t & e.PerformanceUserMarkLogLevel) === e.PerformanceUserMarkLogLevel ? (e.StartPerformanceCounter = e._StartUserMark, void(e.EndPerformanceCounter = e._EndUserMark)) : (t & e.PerformanceConsoleLogLevel) === e.PerformanceConsoleLogLevel ? (e.StartPerformanceCounter = e._StartPerformanceConsole, void(e.EndPerformanceCounter = e._EndPerformanceConsole)) : (e.StartPerformanceCounter = e._StartPerformanceCounterDisabled, void(e.EndPerformanceCounter = e._EndPerformanceCounterDisabled))
                    },
                    enumerable: !0,
                    configurable: !0
                }), e._StartPerformanceCounterDisabled = function(e, t) {}, e._EndPerformanceCounterDisabled = function(e, t) {}, e._StartUserMark = function(t, i) {
                    if (void 0 === i && (i = !0), !e._performance) {
                        if (!l.a.IsWindowObjectExist()) return;
                        e._performance = window.performance
                    }
                    i && e._performance.mark && e._performance.mark(t + "-Begin")
                }, e._EndUserMark = function(t, i) {
                    void 0 === i && (i = !0), i && e._performance.mark && (e._performance.mark(t + "-End"), e._performance.measure(t, t + "-Begin", t + "-End"))
                }, e._StartPerformanceConsole = function(t, i) {
                    void 0 === i && (i = !0), i && (e._StartUserMark(t, i), console.time && console.time(t))
                }, e._EndPerformanceConsole = function(t, i) {
                    void 0 === i && (i = !0), i && (e._EndUserMark(t, i), console.time && console.timeEnd(t))
                }, Object.defineProperty(e, "Now", {
                    get: function() {
                        return f.a.Now
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.GetClassName = function(e, t) {
                    void 0 === t && (t = !1);
                    var i = null;
                    if (!t && e.getClassName) i = e.getClassName();
                    else {
                        if (e instanceof Object) i = (t ? e : Object.getPrototypeOf(e)).constructor.__bjsclassName__;
                        i || (i = typeof e)
                    }
                    return i
                }, e.First = function(e, t) {
                    for (var i = 0, n = e; i < n.length; i++) {
                        var r = n[i];
                        if (t(r)) return r
                    }
                    return null
                }, e.getFullClassName = function(e, t) {
                    void 0 === t && (t = !1);
                    var i = null,
                        n = null;
                    if (!t && e.getClassName) i = e.getClassName();
                    else {
                        if (e instanceof Object) {
                            var r = t ? e : Object.getPrototypeOf(e);
                            i = r.constructor.__bjsclassName__, n = r.constructor.__bjsmoduleName__
                        }
                        i || (i = typeof e)
                    }
                    return i ? (null != n ? n + "." : "") + i : null
                }, e.DelayAsync = function(e) {
                    return new Promise(function(t) {
                        setTimeout(function() {
                            t()
                        }, e)
                    })
                }, e.GetCurrentGradient = function(e, t, i) {
                    for (var n = 0; n < t.length - 1; n++) {
                        var r = t[n],
                            o = t[n + 1];
                        if (e >= r.gradient && e <= o.gradient) return void i(r, o, (e - r.gradient) / (o.gradient - r.gradient))
                    }
                    var s = t.length - 1;
                    i(t[s], t[s], 1)
                }, e.BaseUrl = "", e.UseCustomRequestHeaders = !1, e.CustomRequestHeaders = _.a.CustomRequestHeaders, e.DefaultRetryStrategy = b.ExponentialBackoff(), e.CorsBehavior = "anonymous", e.UseFallbackTexture = !0, e.RegisteredExternalClasses = {}, e.fallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z", e._tmpFloatArray = new Float32Array(1), e.GetDOMTextContent = l.a.GetDOMTextContent, e.PreprocessUrl = function(e) {
                    return e
                }, e.NoneLogLevel = u.a.NoneLogLevel, e.MessageLogLevel = u.a.MessageLogLevel, e.WarningLogLevel = u.a.WarningLogLevel, e.ErrorLogLevel = u.a.ErrorLogLevel, e.AllLogLevel = u.a.AllLogLevel, e.IsWindowObjectExist = l.a.IsWindowObjectExist, e.PerformanceNoneLogLevel = 0, e.PerformanceUserMarkLogLevel = 1, e.PerformanceConsoleLogLevel = 2, e.StartPerformanceCounter = e._StartPerformanceCounterDisabled, e.EndPerformanceCounter = e._EndPerformanceCounterDisabled, e
            }(),
            E = function() {
                function e() {
                    this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
                }
                return Object.defineProperty(e.prototype, "min", {
                    get: function() {
                        return this._min
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "max", {
                    get: function() {
                        return this._max
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "average", {
                    get: function() {
                        return this._average
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "lastSecAverage", {
                    get: function() {
                        return this._lastSecAverage
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "current", {
                    get: function() {
                        return this._current
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "total", {
                    get: function() {
                        return this._totalAccumulated
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "count", {
                    get: function() {
                        return this._totalValueCount
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.fetchNewFrame = function() {
                    this._totalValueCount++, this._current = 0, this._lastSecValueCount++
                }, e.prototype.addCount = function(t, i) {
                    e.Enabled && (this._current += t, i && this._fetchResult())
                }, e.prototype.beginMonitoring = function() {
                    e.Enabled && (this._startMonitoringTime = f.a.Now)
                }, e.prototype.endMonitoring = function(t) {
                    if (void 0 === t && (t = !0), e.Enabled) {
                        t && this.fetchNewFrame();
                        var i = f.a.Now;
                        this._current = i - this._startMonitoringTime, t && this._fetchResult()
                    }
                }, e.prototype._fetchResult = function() {
                    this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current), this._average = this._totalAccumulated / this._totalValueCount;
                    var e = f.a.Now;
                    e - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = e, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
                }, e.Enabled = !0, e
            }();

        function A(e, t) {
            return function(i) {
                i.__bjsclassName__ = e, i.__bjsmoduleName__ = null != t ? t : null
            }
        }
        var x = function() {
            function e(e, t, i, n) {
                void 0 === n && (n = 0), this.iterations = e, this.index = n - 1, this._done = !1, this._fn = t, this._successCallback = i
            }
            return e.prototype.executeNext = function() {
                this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
            }, e.prototype.breakLoop = function() {
                this._done = !0, this._successCallback()
            }, e.Run = function(t, i, n, r) {
                void 0 === r && (r = 0);
                var o = new e(t, i, n, r);
                return o.executeNext(), o
            }, e.SyncAsyncForLoop = function(t, i, n, r, o, s) {
                return void 0 === s && (s = 0), e.Run(Math.ceil(t / i), function(e) {
                    o && o() ? e.breakLoop() : setTimeout(function() {
                        for (var r = 0; r < i; ++r) {
                            var s = e.index * i + r;
                            if (s >= t) break;
                            if (n(s), o && o()) {
                                e.breakLoop();
                                break
                            }
                        }
                        e.executeNext()
                    }, s)
                }, r)
            }, e
        }()
    }, function(e, t, i) {
        "use strict";
        i.d(t, "d", function() {
            return x
        }), i.d(t, "a", function() {
            return R
        }), i.d(t, "c", function() {
            return P
        }), i.d(t, "b", function() {
            return S
        });
        var n = i(1),
            r = i(8),
            o = i(105),
            s = i(61),
            a = i(106),
            c = i(9),
            l = i(0),
            u = i(12),
            h = i(5),
            d = i(20),
            f = i(26),
            p = i(94),
            _ = i(3),
            g = i(35),
            m = i(6),
            v = i(23),
            y = i(92),
            b = i(19),
            T = i(107),
            E = i(73),
            A = function() {
                return function() {}
            }(),
            x = function() {
                return function() {}
            }(),
            R = function() {
                return function() {}
            }(),
            P = function() {
                return function() {}
            }(),
            S = function() {
                function e(t, i, n, s) {
                    var u = this;
                    void 0 === s && (s = !1), this.forcePOTTextures = !1, this.isFullscreen = !1, this.isPointerLock = !1, this.cullBackFaces = !0, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.scenes = new Array, this.onNewSceneAddedObservable = new r.c, this.postProcesses = new Array, this.validateShaderPrograms = !1, this.onResizeObservable = new r.c, this.onCanvasBlurObservable = new r.c, this.onCanvasFocusObservable = new r.c, this.onCanvasPointerOutObservable = new r.c, this.onBeforeTextureInitObservable = new r.c, this.disableUniformBuffers = !1, this._uniformBuffers = new Array, this.onBeginFrameObservable = new r.c, this.customAnimationFrameRequester = null, this.onEndFrameObservable = new r.c, this.onBeforeShaderCompilationObservable = new r.c, this.onAfterShaderCompilationObservable = new r.c, this._windowIsBackground = !1, this._webGLVersion = 1, this._highPrecisionShadersAllowed = !0, this._badOS = !1, this._badDesktopOS = !1, this._colorWrite = !0, this._drawCalls = new c.f, this._renderingQueueLaunched = !1, this._activeRenderLoops = new Array, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this.onContextLostObservable = new r.c, this.onContextRestoredObservable = new r.c, this._contextWasLost = !1, this._doNotHandleContextLost = !1, this._performanceMonitor = new o.a, this._fps = 60, this._deltaTime = 0, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._depthCullingState = new p.b, this._stencilState = new p.c, this._alphaState = new p.a, this._alphaMode = e.ALPHA_DISABLE, this._internalTexturesCache = new Array, this._activeChannel = 0, this._currentTextureChannel = -1, this._boundTexturesCache = {}, this._compiledEffects = {}, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._activeRequests = new Array, this._texturesSupported = new Array, this.premultipliedAlpha = !0, this._viewportCached = new l.y(0, 0, 0, 0), this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, a.a.Apply();
                    var h = null;
                    if (e.Instances.push(this), t) {
                        if (n = n || {}, t.getContext) {
                            if (h = t, this._renderingCanvas = h, null != i && (n.antialias = i), void 0 === n.deterministicLockstep && (n.deterministicLockstep = !1), void 0 === n.lockstepMaxSteps && (n.lockstepMaxSteps = 4), void 0 === n.preserveDrawingBuffer && (n.preserveDrawingBuffer = !1), void 0 === n.audioEngine && (n.audioEngine = !0), void 0 === n.stencil && (n.stencil = !0), !1 === n.premultipliedAlpha && (this.premultipliedAlpha = !1), this._deterministicLockstep = n.deterministicLockstep, this._lockstepMaxSteps = n.lockstepMaxSteps, this._doNotHandleContextLost = !!n.doNotHandleContextLost, navigator && navigator.userAgent)
                                for (var d = navigator.userAgent, f = 0, _ = e.ExceptionList; f < _.length; f++) {
                                    var v = _[f],
                                        y = v.key,
                                        b = v.targets;
                                    if (new RegExp(y).test(d)) {
                                        if (v.capture && v.captureConstraint) {
                                            var T = v.capture,
                                                E = v.captureConstraint,
                                                x = new RegExp(T).exec(d);
                                            if (x && x.length > 0)
                                                if (parseInt(x[x.length - 1]) >= E) continue
                                        }
                                        for (var R = 0, P = b; R < P.length; R++) {
                                            switch (P[R]) {
                                                case "uniformBuffer":
                                                    this.disableUniformBuffers = !0;
                                                    break;
                                                case "vao":
                                                    this.disableVertexArrayObjects = !0
                                            }
                                        }
                                    }
                                }
                            if (!n.disableWebGL2Support) try {
                                this._gl = h.getContext("webgl2", n) || h.getContext("experimental-webgl2", n), this._gl && (this._webGLVersion = 2, this._gl.deleteQuery || (this._webGLVersion = 1))
                            } catch (e) {}
                            if (!this._gl) {
                                if (!h) throw new Error("The provided canvas is null or undefined.");
                                try {
                                    this._gl = h.getContext("webgl", n) || h.getContext("experimental-webgl", n)
                                } catch (e) {
                                    throw new Error("WebGL not supported")
                                }
                            }
                            if (!this._gl) throw new Error("WebGL not supported");
                            this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._onCanvasFocus = function() {
                                u.onCanvasFocusObservable.notifyObservers(u)
                            }, this._onCanvasBlur = function() {
                                u.onCanvasBlurObservable.notifyObservers(u)
                            }, h.addEventListener("focus", this._onCanvasFocus), h.addEventListener("blur", this._onCanvasBlur), this._onBlur = function() {
                                u.disablePerformanceMonitorInBackground && u._performanceMonitor.disable(), u._windowIsBackground = !0
                            }, this._onFocus = function() {
                                u.disablePerformanceMonitorInBackground && u._performanceMonitor.enable(), u._windowIsBackground = !1
                            }, this._onCanvasPointerOut = function(e) {
                                u.onCanvasPointerOutObservable.notifyObservers(e)
                            }, g.a.IsWindowObjectExist() && (window.addEventListener("blur", this._onBlur), window.addEventListener("focus", this._onFocus)), h.addEventListener("pointerout", this._onCanvasPointerOut), this._doNotHandleContextLost || (this._onContextLost = function(e) {
                                e.preventDefault(), u._contextWasLost = !0, m.a.Warn("WebGL context lost."), u.onContextLostObservable.notifyObservers(u)
                            }, this._onContextRestored = function() {
                                setTimeout(function() {
                                    u._initGLContext(), u._rebuildEffects(), u._rebuildInternalTextures(), u._rebuildBuffers(), u.wipeCaches(!0), m.a.Warn("WebGL context successfully restored."), u.onContextRestoredObservable.notifyObservers(u), u._contextWasLost = !1
                                }, 0)
                            }, h.addEventListener("webglcontextlost", this._onContextLost, !1), h.addEventListener("webglcontextrestored", this._onContextRestored, !1)), n.doNotHandleTouchAction || this._disableTouchAction()
                        } else {
                            this._gl = t, this._renderingCanvas = this._gl.canvas, this._gl.renderbufferStorageMultisample && (this._webGLVersion = 2);
                            var S = this._gl.getContextAttributes();
                            S && (n.stencil = S.stencil)
                        }
                        void 0 !== n.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = n.useHighPrecisionFloats);
                        var C = g.a.IsWindowObjectExist() && window.devicePixelRatio || 1,
                            M = n.limitDeviceRatio || C;
                        if (this._hardwareScalingLevel = s ? 1 / Math.min(M, C) : 1, this.resize(), this._isStencilEnable = !!n.stencil, this._initGLContext(), h) {
                            var O = document;
                            this._onFullscreenChange = function() {
                                void 0 !== O.fullscreen ? u.isFullscreen = O.fullscreen : void 0 !== O.mozFullScreen ? u.isFullscreen = O.mozFullScreen : void 0 !== O.webkitIsFullScreen ? u.isFullscreen = O.webkitIsFullScreen : void 0 !== O.msIsFullScreen && (u.isFullscreen = O.msIsFullScreen), u.isFullscreen && u._pointerLockRequested && h && (h.requestPointerLock = h.requestPointerLock || h.msRequestPointerLock || h.mozRequestPointerLock || h.webkitRequestPointerLock, h.requestPointerLock && h.requestPointerLock())
                            }, document.addEventListener("fullscreenchange", this._onFullscreenChange, !1), document.addEventListener("mozfullscreenchange", this._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", this._onFullscreenChange, !1), document.addEventListener("msfullscreenchange", this._onFullscreenChange, !1), this._onPointerLockChange = function() {
                                u.isPointerLock = O.mozPointerLockElement === h || O.webkitPointerLockElement === h || O.msPointerLockElement === h || O.pointerLockElement === h
                            }, document.addEventListener("pointerlockchange", this._onPointerLockChange, !1), document.addEventListener("mspointerlockchange", this._onPointerLockChange, !1), document.addEventListener("mozpointerlockchange", this._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", this._onPointerLockChange, !1), this._connectVREvents(h, O)
                        }!e.audioEngine && n.audioEngine && e.AudioEngineFactory && (e.audioEngine = e.AudioEngineFactory(this.getRenderingCanvas()));
                        for (var I = 0; I < this._caps.maxVertexAttribs; I++) this._currentBufferPointers[I] = new A;
                        this._prepareVRComponent(), n.autoEnableWebVR && this.initWebVR(), this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), console.log("Babylon.js v" + e.Version + " - " + this.description), this.enableOfflineSupport = void 0 !== e.OfflineProviderFactory
                    }
                }
                return Object.defineProperty(e, "Instances", {
                    get: function() {
                        return v.a.Instances
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "LastCreatedEngine", {
                    get: function() {
                        return v.a.LastCreatedEngine
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "LastCreatedScene", {
                    get: function() {
                        return v.a.LastCreatedScene
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.MarkAllMaterialsAsDirty = function(t, i) {
                    for (var n = 0; n < e.Instances.length; n++)
                        for (var r = e.Instances[n], o = 0; o < r.scenes.length; o++) r.scenes[o].markAllMaterialsAsDirty(t, i)
                }, Object.defineProperty(e, "NpmPackage", {
                    get: function() {
                        return "babylonjs@4.0.3"
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "Version", {
                    get: function() {
                        return "4.0.3"
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "description", {
                    get: function() {
                        var e = "WebGL" + this.webGLVersion;
                        return this._caps.parallelShaderCompile && (e += " - Parallel shader compilation"), e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "ShadersRepository", {
                    get: function() {
                        return h.a.ShadersRepository
                    },
                    set: function(e) {
                        h.a.ShadersRepository = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.DefaultLoadingScreenFactory = function(e) {
                    throw b.a.WarnImport("LoadingScreen")
                }, Object.defineProperty(e.prototype, "supportsUniformBuffers", {
                    get: function() {
                        return this.webGLVersion > 1 && !this.disableUniformBuffers
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "_shouldUseHighPrecisionShader", {
                    get: function() {
                        return this._caps.highPrecisionShaderSupported && this._highPrecisionShadersAllowed
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "needPOTTextures", {
                    get: function() {
                        return this._webGLVersion < 2 || this.forcePOTTextures
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "doNotHandleContextLost", {
                    get: function() {
                        return this._doNotHandleContextLost
                    },
                    set: function(e) {
                        this._doNotHandleContextLost = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "performanceMonitor", {
                    get: function() {
                        return this._performanceMonitor
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "texturesSupported", {
                    get: function() {
                        return this._texturesSupported
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "textureFormatInUse", {
                    get: function() {
                        return this._textureFormatInUse
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "currentViewport", {
                    get: function() {
                        return this._cachedViewport
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "emptyTexture", {
                    get: function() {
                        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, e.TEXTUREFORMAT_RGBA, !1, !1, e.TEXTURE_NEAREST_SAMPLINGMODE)), this._emptyTexture
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "emptyTexture3D", {
                    get: function() {
                        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, e.TEXTUREFORMAT_RGBA, !1, !1, e.TEXTURE_NEAREST_SAMPLINGMODE)), this._emptyTexture3D
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "emptyCubeTexture", {
                    get: function() {
                        if (!this._emptyCubeTexture) {
                            var t = new Uint8Array(4),
                                i = [t, t, t, t, t, t];
                            this._emptyCubeTexture = this.createRawCubeTexture(i, 1, e.TEXTUREFORMAT_RGBA, e.TEXTURETYPE_UNSIGNED_INT, !1, !1, e.TEXTURE_NEAREST_SAMPLINGMODE)
                        }
                        return this._emptyCubeTexture
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.initWebVR = function() {
                    throw b.a.WarnImport("WebVRCamera")
                }, e.prototype._prepareVRComponent = function() {}, e.prototype._connectVREvents = function(e, t) {}, e.prototype._submitVRFrame = function() {}, e.prototype.disableVR = function() {}, e.prototype.isVRPresenting = function() {
                    return !1
                }, e.prototype._requestVRFrame = function() {}, e.prototype._disableTouchAction = function() {
                    this._renderingCanvas && (this._renderingCanvas.setAttribute("touch-action", "none"), this._renderingCanvas.style.touchAction = "none", this._renderingCanvas.style.msTouchAction = "none")
                }, e.prototype._rebuildInternalTextures = function() {
                    for (var e = 0, t = this._internalTexturesCache.slice(); e < t.length; e++) {
                        t[e]._rebuild()
                    }
                }, e.prototype._rebuildEffects = function() {
                    for (var e in this._compiledEffects) {
                        this._compiledEffects[e]._prepareEffect()
                    }
                    h.a.ResetCache()
                }, e.prototype.areAllEffectsReady = function() {
                    for (var e in this._compiledEffects) {
                        if (!this._compiledEffects[e].isReady()) return !1
                    }
                    return !0
                }, e.prototype._rebuildBuffers = function() {
                    for (var e = 0, t = this.scenes; e < t.length; e++) {
                        var i = t[e];
                        i.resetCachedMaterial(), i._rebuildGeometries(), i._rebuildTextures()
                    }
                    for (var n = 0, r = this._uniformBuffers; n < r.length; n++) {
                        r[n]._rebuild()
                    }
                }, e.prototype._initGLContext = function() {
                    this._caps = new P, this._caps.maxTexturesImageUnits = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS), this._caps.maxCombinedTexturesImageUnits = this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this._caps.maxVertexTextureImageUnits = this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this._caps.maxTextureSize = this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE), this._caps.maxCubemapTextureSize = this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE), this._caps.maxRenderTextureSize = this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE), this._caps.maxVertexAttribs = this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS), this._caps.maxVaryingVectors = this._gl.getParameter(this._gl.MAX_VARYING_VECTORS), this._caps.maxFragmentUniformVectors = this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS), this._caps.maxVertexUniformVectors = this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS), this._glVersion = this._gl.getParameter(this._gl.VERSION);
                    var e = this._gl.getExtension("WEBGL_debug_renderer_info");
                    if (null != e && (this._glRenderer = this._gl.getParameter(e.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(e.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = "Unknown vendor"), this._glRenderer || (this._glRenderer = "Unknown renderer"), this._gl.HALF_FLOAT_OES = 36193, 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.standardDerivatives = this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"), this._caps.astc = this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"), this._caps.s3tc = this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"), this._caps.pvrtc = this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this._caps.etc1 = this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"), this._caps.etc2 = this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"), this._caps.textureAnisotropicFilterExtension = this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.uintIndices = this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"), this._caps.fragmentDepthSupported = this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"), this._caps.highPrecisionShaderSupported = !1, this._caps.timerQuery = this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) > 0), this._caps.colorBufferFloat = this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float"), this._caps.textureFloat = !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")), this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloat = !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._webGLVersion > 1 && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._caps.textureLOD = !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")), this._caps.multiview = this._gl.getExtension("OVR_multiview2"), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0;
                    else {
                        var t = this._gl.getExtension("WEBGL_draw_buffers");
                        if (null !== t) {
                            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = t.drawBuffersWEBGL.bind(t), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
                            for (var i = 0; i < 16; i++) this._gl["COLOR_ATTACHMENT" + i + "_WEBGL"] = t["COLOR_ATTACHMENT" + i + "_WEBGL"]
                        } else this._caps.drawBuffersExtension = !1
                    }
                    if (this._caps.parallelShaderCompile = this._gl.getExtension("KHR_parallel_shader_compile"), this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
                    else {
                        var n = this._gl.getExtension("WEBGL_depth_texture");
                        null != n && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = n.UNSIGNED_INT_24_8_WEBGL)
                    }
                    if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
                    else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
                    else {
                        var r = this._gl.getExtension("OES_vertex_array_object");
                        null != r ? (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = r.createVertexArrayOES.bind(r), this._gl.bindVertexArray = r.bindVertexArrayOES.bind(r), this._gl.deleteVertexArray = r.deleteVertexArrayOES.bind(r)) : this._caps.vertexArrayObject = !1
                    }
                    if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
                    else {
                        var o = this._gl.getExtension("ANGLE_instanced_arrays");
                        null != o ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = o.drawArraysInstancedANGLE.bind(o), this._gl.drawElementsInstanced = o.drawElementsInstancedANGLE.bind(o), this._gl.vertexAttribDivisor = o.vertexAttribDivisorANGLE.bind(o)) : this._caps.instancedArrays = !1
                    }
                    if (this._caps.astc && this.texturesSupported.push("-astc.ktx"), this._caps.s3tc && this.texturesSupported.push("-dxt.ktx"), this._caps.pvrtc && this.texturesSupported.push("-pvrtc.ktx"), this._caps.etc2 && this.texturesSupported.push("-etc2.ktx"), this._caps.etc1 && this.texturesSupported.push("-etc1.ktx"), this._gl.getShaderPrecisionFormat) {
                        var s = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
                            a = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
                        s && a && (this._caps.highPrecisionShaderSupported = 0 !== s.precision && 0 !== a.precision)
                    }
                    this.setDepthBuffer(!0), this.setDepthFunctionToLessOrEqual(), this.setDepthWrite(!0), this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
                    for (var c = 0; c < this._maxSimultaneousTextures; c++) this._nextFreeTextureSlots.push(c)
                }, Object.defineProperty(e.prototype, "webGLVersion", {
                    get: function() {
                        return this._webGLVersion
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isStencilEnable", {
                    get: function() {
                        return this._isStencilEnable
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._prepareWorkingCanvas = function() {
                    if (!this._workingCanvas) {
                        this._workingCanvas = document.createElement("canvas");
                        var e = this._workingCanvas.getContext("2d");
                        e && (this._workingContext = e)
                    }
                }, e.prototype.resetTextureCache = function() {
                    for (var e in this._boundTexturesCache) this._boundTexturesCache.hasOwnProperty(e) && (this._boundTexturesCache[e] = null);
                    this._currentTextureChannel = -1
                }, e.prototype.isDeterministicLockStep = function() {
                    return this._deterministicLockstep
                }, e.prototype.getLockstepMaxSteps = function() {
                    return this._lockstepMaxSteps
                }, e.prototype.getGlInfo = function() {
                    return {
                        vendor: this._glVendor,
                        renderer: this._glRenderer,
                        version: this._glVersion
                    }
                }, e.prototype.getAspectRatio = function(e, t) {
                    void 0 === t && (t = !1);
                    var i = e.viewport;
                    return this.getRenderWidth(t) * i.width / (this.getRenderHeight(t) * i.height)
                }, e.prototype.getScreenAspectRatio = function() {
                    return this.getRenderWidth(!0) / this.getRenderHeight(!0)
                }, e.prototype.getRenderWidth = function(e) {
                    return void 0 === e && (e = !1), !e && this._currentRenderTarget ? this._currentRenderTarget.width : this._gl.drawingBufferWidth
                }, e.prototype.getRenderHeight = function(e) {
                    return void 0 === e && (e = !1), !e && this._currentRenderTarget ? this._currentRenderTarget.height : this._gl.drawingBufferHeight
                }, e.prototype.getRenderingCanvas = function() {
                    return this._renderingCanvas
                }, e.prototype.getRenderingCanvasClientRect = function() {
                    return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
                }, e.prototype.setHardwareScalingLevel = function(e) {
                    this._hardwareScalingLevel = e, this.resize()
                }, e.prototype.getHardwareScalingLevel = function() {
                    return this._hardwareScalingLevel
                }, e.prototype.getLoadedTexturesCache = function() {
                    return this._internalTexturesCache
                }, e.prototype.getCaps = function() {
                    return this._caps
                }, e.prototype.getDepthFunction = function() {
                    return this._depthCullingState.depthFunc
                }, e.prototype.setDepthFunction = function(e) {
                    this._depthCullingState.depthFunc = e
                }, e.prototype.setDepthFunctionToGreater = function() {
                    this._depthCullingState.depthFunc = this._gl.GREATER
                }, e.prototype.setDepthFunctionToGreaterOrEqual = function() {
                    this._depthCullingState.depthFunc = this._gl.GEQUAL
                }, e.prototype.setDepthFunctionToLess = function() {
                    this._depthCullingState.depthFunc = this._gl.LESS
                }, e.prototype.cacheStencilState = function() {
                    this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
                }, e.prototype.restoreStencilState = function() {
                    this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
                }, e.prototype.setDepthFunctionToLessOrEqual = function() {
                    this._depthCullingState.depthFunc = this._gl.LEQUAL
                }, e.prototype.getStencilBuffer = function() {
                    return this._stencilState.stencilTest
                }, e.prototype.setStencilBuffer = function(e) {
                    this._stencilState.stencilTest = e
                }, e.prototype.getStencilMask = function() {
                    return this._stencilState.stencilMask
                }, e.prototype.setStencilMask = function(e) {
                    this._stencilState.stencilMask = e
                }, e.prototype.getStencilFunction = function() {
                    return this._stencilState.stencilFunc
                }, e.prototype.getStencilFunctionReference = function() {
                    return this._stencilState.stencilFuncRef
                }, e.prototype.getStencilFunctionMask = function() {
                    return this._stencilState.stencilFuncMask
                }, e.prototype.setStencilFunction = function(e) {
                    this._stencilState.stencilFunc = e
                }, e.prototype.setStencilFunctionReference = function(e) {
                    this._stencilState.stencilFuncRef = e
                }, e.prototype.setStencilFunctionMask = function(e) {
                    this._stencilState.stencilFuncMask = e
                }, e.prototype.getStencilOperationFail = function() {
                    return this._stencilState.stencilOpStencilFail
                }, e.prototype.getStencilOperationDepthFail = function() {
                    return this._stencilState.stencilOpDepthFail
                }, e.prototype.getStencilOperationPass = function() {
                    return this._stencilState.stencilOpStencilDepthPass
                }, e.prototype.setStencilOperationFail = function(e) {
                    this._stencilState.stencilOpStencilFail = e
                }, e.prototype.setStencilOperationDepthFail = function(e) {
                    this._stencilState.stencilOpDepthFail = e
                }, e.prototype.setStencilOperationPass = function(e) {
                    this._stencilState.stencilOpStencilDepthPass = e
                }, e.prototype.setDitheringState = function(e) {
                    e ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
                }, e.prototype.setRasterizerState = function(e) {
                    e ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
                }, e.prototype.stopRenderLoop = function(e) {
                    if (e) {
                        var t = this._activeRenderLoops.indexOf(e);
                        t >= 0 && this._activeRenderLoops.splice(t, 1)
                    } else this._activeRenderLoops = []
                }, e.prototype._renderLoop = function() {
                    if (!this._contextWasLost) {
                        var e = !0;
                        if (!this.renderEvenInBackground && this._windowIsBackground && (e = !1), e) {
                            this.beginFrame();
                            for (var t = 0; t < this._activeRenderLoops.length; t++) {
                                (0, this._activeRenderLoops[t])()
                            }
                            this.endFrame()
                        }
                    }
                    this._activeRenderLoops.length > 0 ? this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.requestID = c.h.QueueNewFrame(this.customAnimationFrameRequester.renderFunction || this._bindedRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.requestID) : this.isVRPresenting() ? this._requestVRFrame() : this._frameHandler = c.h.QueueNewFrame(this._bindedRenderFunction) : this._renderingQueueLaunched = !1
                }, e.prototype.runRenderLoop = function(e) {
                    -1 === this._activeRenderLoops.indexOf(e) && (this._activeRenderLoops.push(e), this._renderingQueueLaunched || (this._renderingQueueLaunched = !0, this._bindedRenderFunction = this._renderLoop.bind(this), this._frameHandler = c.h.QueueNewFrame(this._bindedRenderFunction)))
                }, e.prototype.switchFullscreen = function(e) {
                    this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(e)
                }, e.prototype.enterFullscreen = function(e) {
                    this.isFullscreen || (this._pointerLockRequested = e, this._renderingCanvas && c.h.RequestFullscreen(this._renderingCanvas))
                }, e.prototype.exitFullscreen = function() {
                    this.isFullscreen && c.h.ExitFullscreen()
                }, e.prototype.clear = function(e, t, i, n) {
                    void 0 === n && (n = !1), this.applyStates();
                    var r = 0;
                    t && e && (this._gl.clearColor(e.r, e.g, e.b, void 0 !== e.a ? e.a : 1), r |= this._gl.COLOR_BUFFER_BIT), i && (this._gl.clearDepth(1), r |= this._gl.DEPTH_BUFFER_BIT), n && (this._gl.clearStencil(0), r |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(r)
                }, e.prototype.scissorClear = function(e, t, i, n, r) {
                    this.enableScissor(e, t, i, n), this.clear(r, !0, !0, !0), this.disableScissor()
                }, e.prototype.enableScissor = function(e, t, i, n) {
                    var r = this._gl;
                    r.enable(r.SCISSOR_TEST), r.scissor(e, t, i, n)
                }, e.prototype.disableScissor = function() {
                    var e = this._gl;
                    e.disable(e.SCISSOR_TEST)
                }, e.prototype._viewport = function(e, t, i, n) {
                    e === this._viewportCached.x && t === this._viewportCached.y && i === this._viewportCached.z && n === this._viewportCached.w || (this._viewportCached.x = e, this._viewportCached.y = t, this._viewportCached.z = i, this._viewportCached.w = n, this._gl.viewport(e, t, i, n))
                }, e.prototype.setViewport = function(e, t, i) {
                    var n = t || this.getRenderWidth(),
                        r = i || this.getRenderHeight(),
                        o = e.x || 0,
                        s = e.y || 0;
                    this._cachedViewport = e, this._viewport(o * n, s * r, n * e.width, r * e.height)
                }, e.prototype.setDirectViewport = function(e, t, i, n) {
                    var r = this._cachedViewport;
                    return this._cachedViewport = null, this._viewport(e, t, i, n), r
                }, e.prototype.beginFrame = function() {
                    this.onBeginFrameObservable.notifyObservers(this), this._measureFps()
                }, e.prototype.endFrame = function() {
                    this._badOS && this.flushFramebuffer(), this._submitVRFrame(), this.onEndFrameObservable.notifyObservers(this)
                }, e.prototype.resize = function() {
                    if (!this.isVRPresenting()) {
                        var e = this._renderingCanvas ? this._renderingCanvas.clientWidth : window.innerWidth,
                            t = this._renderingCanvas ? this._renderingCanvas.clientHeight : window.innerHeight;
                        this.setSize(e / this._hardwareScalingLevel, t / this._hardwareScalingLevel)
                    }
                }, e.prototype.setSize = function(e, t) {
                    if (this._renderingCanvas && (this._renderingCanvas.width !== e || this._renderingCanvas.height !== t)) {
                        this._renderingCanvas.width = e, this._renderingCanvas.height = t;
                        for (var i = 0; i < this.scenes.length; i++)
                            for (var n = this.scenes[i], r = 0; r < n.cameras.length; r++) {
                                n.cameras[r]._currentRenderId = 0
                            }
                        this.onResizeObservable.hasObservers && this.onResizeObservable.notifyObservers(this)
                    }
                }, e.prototype.bindFramebuffer = function(e, t, i, n, r, o, s) {
                    void 0 === s && (s = 0), this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = e, this._bindUnboundFramebuffer(e._MSAAFramebuffer ? e._MSAAFramebuffer : e._framebuffer);
                    var a = this._gl;
                    e.isCube && (void 0 === t && (t = 0), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_CUBE_MAP_POSITIVE_X + t, e._webGLTexture, s), o && (o._generateStencilBuffer ? a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.TEXTURE_CUBE_MAP_POSITIVE_X + t, o._webGLTexture, s) : a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.TEXTURE_CUBE_MAP_POSITIVE_X + t, o._webGLTexture, s))), this._cachedViewport && !r ? this.setViewport(this._cachedViewport, i, n) : (i || (i = e.width, s && (i /= Math.pow(2, s))), n || (n = e.height, s && (n /= Math.pow(2, s))), this._viewport(0, 0, i, n)), this.wipeCaches()
                }, e.prototype._bindUnboundFramebuffer = function(e) {
                    this._currentFramebuffer !== e && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, e), this._currentFramebuffer = e)
                }, e.prototype.unBindFramebuffer = function(e, t, i) {
                    void 0 === t && (t = !1), this._currentRenderTarget = null;
                    var n = this._gl;
                    e._MSAAFramebuffer && (n.bindFramebuffer(n.READ_FRAMEBUFFER, e._MSAAFramebuffer), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, e._framebuffer), n.blitFramebuffer(0, 0, e.width, e.height, 0, 0, e.width, e.height, n.COLOR_BUFFER_BIT, n.NEAREST)), !e.generateMipMaps || t || e.isCube || (this._bindTextureDirectly(n.TEXTURE_2D, e, !0), n.generateMipmap(n.TEXTURE_2D), this._bindTextureDirectly(n.TEXTURE_2D, null)), i && (e._MSAAFramebuffer && this._bindUnboundFramebuffer(e._framebuffer), i()), this._bindUnboundFramebuffer(null)
                }, e.prototype.generateMipMapsForCubemap = function(e) {
                    if (e.generateMipMaps) {
                        var t = this._gl;
                        this._bindTextureDirectly(t.TEXTURE_CUBE_MAP, e, !0), t.generateMipmap(t.TEXTURE_CUBE_MAP), this._bindTextureDirectly(t.TEXTURE_CUBE_MAP, null)
                    }
                }, e.prototype.flushFramebuffer = function() {
                    this._gl.flush()
                }, e.prototype.restoreDefaultFramebuffer = function() {
                    this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
                }, e.prototype.createUniformBuffer = function(e) {
                    var t = this._gl.createBuffer();
                    if (!t) throw new Error("Unable to create uniform buffer");
                    var i = new E.a(t);
                    return this.bindUniformBuffer(i), e instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, e, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(e), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), i.references = 1, i
                }, e.prototype.createDynamicUniformBuffer = function(e) {
                    var t = this._gl.createBuffer();
                    if (!t) throw new Error("Unable to create dynamic uniform buffer");
                    var i = new E.a(t);
                    return this.bindUniformBuffer(i), e instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, e, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(e), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), i.references = 1, i
                }, e.prototype.updateUniformBuffer = function(e, t, i, n) {
                    this.bindUniformBuffer(e), void 0 === i && (i = 0), void 0 === n ? t instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, i, t) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, i, new Float32Array(t)) : t instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, t.subarray(i, i + n)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(t).subarray(i, i + n)), this.bindUniformBuffer(null)
                }, e.prototype._resetVertexBufferBinding = function() {
                    this.bindArrayBuffer(null), this._cachedVertexBuffers = null
                }, e.prototype.createVertexBuffer = function(e) {
                    var t = this._gl.createBuffer();
                    if (!t) throw new Error("Unable to create vertex buffer");
                    var i = new E.a(t);
                    return this.bindArrayBuffer(i), e instanceof Array ? this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(e), this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.ARRAY_BUFFER, e, this._gl.STATIC_DRAW), this._resetVertexBufferBinding(), i.references = 1, i
                }, e.prototype.createDynamicVertexBuffer = function(e) {
                    var t = this._gl.createBuffer();
                    if (!t) throw new Error("Unable to create dynamic vertex buffer");
                    var i = new E.a(t);
                    return this.bindArrayBuffer(i), e instanceof Array ? this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(e), this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.ARRAY_BUFFER, e, this._gl.DYNAMIC_DRAW), this._resetVertexBufferBinding(), i.references = 1, i
                }, e.prototype.updateDynamicIndexBuffer = function(e, t, i) {
                    var n;
                    void 0 === i && (i = 0), this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(e), n = t instanceof Uint16Array || t instanceof Uint32Array ? t : e.is32Bits ? new Uint32Array(t) : new Uint16Array(t), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, n, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
                }, e.prototype.updateDynamicVertexBuffer = function(e, t, i, n) {
                    this.bindArrayBuffer(e), void 0 === i && (i = 0), void 0 === n ? t instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, i, new Float32Array(t)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, i, t) : t instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, new Float32Array(t).subarray(i, i + n)) : (t = t instanceof ArrayBuffer ? new Uint8Array(t, i, n) : new Uint8Array(t.buffer, t.byteOffset + i, n), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, t)), this._resetVertexBufferBinding()
                }, e.prototype._resetIndexBufferBinding = function() {
                    this.bindIndexBuffer(null), this._cachedIndexBuffer = null
                }, e.prototype.createIndexBuffer = function(e, t) {
                    var i, n = this._gl.createBuffer(),
                        r = new E.a(n);
                    if (!n) throw new Error("Unable to create index buffer");
                    this.bindIndexBuffer(r);
                    var o = !1;
                    if (e instanceof Uint16Array) i = e;
                    else if (this._caps.uintIndices)
                        if (e instanceof Uint32Array) i = e, o = !0;
                        else {
                            for (var s = 0; s < e.length; s++)
                                if (e[s] > 65535) {
                                    o = !0;
                                    break
                                } i = o ? new Uint32Array(e) : new Uint16Array(e)
                        }
                    else i = new Uint16Array(e);
                    return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, i, t ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), r.references = 1, r.is32Bits = o, r
                }, e.prototype.bindArrayBuffer = function(e) {
                    this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.bindBuffer(e, this._gl.ARRAY_BUFFER)
                }, e.prototype.bindUniformBuffer = function(e) {
                    this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, e ? e.underlyingResource : null)
                }, e.prototype.bindUniformBufferBase = function(e, t) {
                    this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, t, e ? e.underlyingResource : null)
                }, e.prototype.bindUniformBlock = function(e, t, i) {
                    var n = e.program,
                        r = this._gl.getUniformBlockIndex(n, t);
                    this._gl.uniformBlockBinding(n, r, i)
                }, e.prototype.bindIndexBuffer = function(e) {
                    this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.bindBuffer(e, this._gl.ELEMENT_ARRAY_BUFFER)
                }, e.prototype.bindBuffer = function(e, t) {
                    (this._vaoRecordInProgress || this._currentBoundBuffer[t] !== e) && (this._gl.bindBuffer(t, e ? e.underlyingResource : null), this._currentBoundBuffer[t] = e)
                }, e.prototype.updateArrayBuffer = function(e) {
                    this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, e)
                }, e.prototype._vertexAttribPointer = function(e, t, i, n, r, o, s) {
                    var a = this._currentBufferPointers[t],
                        c = !1;
                    a.active ? (a.buffer !== e && (a.buffer = e, c = !0), a.size !== i && (a.size = i, c = !0), a.type !== n && (a.type = n, c = !0), a.normalized !== r && (a.normalized = r, c = !0), a.stride !== o && (a.stride = o, c = !0), a.offset !== s && (a.offset = s, c = !0)) : (c = !0, a.active = !0, a.index = t, a.size = i, a.type = n, a.normalized = r, a.stride = o, a.offset = s, a.buffer = e), (c || this._vaoRecordInProgress) && (this.bindArrayBuffer(e), this._gl.vertexAttribPointer(t, i, n, r, o, s))
                }, e.prototype._bindIndexBufferWithCache = function(e) {
                    null != e && this._cachedIndexBuffer !== e && (this._cachedIndexBuffer = e, this.bindIndexBuffer(e), this._uintIndicesCurrentlySet = e.is32Bits)
                }, e.prototype._bindVertexBuffersAttributes = function(e, t) {
                    var i = t.getAttributesNames();
                    this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
                    for (var n = 0; n < i.length; n++) {
                        var r = t.getAttributeLocation(n);
                        if (r >= 0) {
                            var o = e[i[n]];
                            if (!o) continue;
                            this._gl.enableVertexAttribArray(r), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[r] = !0);
                            var s = o.getBuffer();
                            s && (this._vertexAttribPointer(s, r, o.getSize(), o.type, o.normalized, o.byteStride, o.byteOffset), o.getIsInstanced() && (this._gl.vertexAttribDivisor(r, o.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(r), this._currentInstanceBuffers.push(s))))
                        }
                    }
                }, e.prototype.recordVertexArrayObject = function(e, t, i) {
                    var n = this._gl.createVertexArray();
                    return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(n), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(e, i), this.bindIndexBuffer(t), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), n
                }, e.prototype.bindVertexArrayObject = function(e, t) {
                    this._cachedVertexArrayObject !== e && (this._cachedVertexArrayObject = e, this._gl.bindVertexArray(e), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != t && t.is32Bits, this._mustWipeVertexAttributes = !0)
                }, e.prototype.bindBuffersDirectly = function(e, t, i, n, r) {
                    if (this._cachedVertexBuffers !== e || this._cachedEffectForVertexBuffers !== r) {
                        this._cachedVertexBuffers = e, this._cachedEffectForVertexBuffers = r;
                        var o = r.getAttributesCount();
                        this._unbindVertexArrayObject(), this.unbindAllAttributes();
                        for (var s = 0, a = 0; a < o; a++)
                            if (a < i.length) {
                                var c = r.getAttributeLocation(a);
                                c >= 0 && (this._gl.enableVertexAttribArray(c), this._vertexAttribArraysEnabled[c] = !0, this._vertexAttribPointer(e, c, i[a], this._gl.FLOAT, !1, n, s)), s += 4 * i[a]
                            }
                    }
                    this._bindIndexBufferWithCache(t)
                }, e.prototype._unbindVertexArrayObject = function() {
                    this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
                }, e.prototype.bindBuffers = function(e, t, i) {
                    this._cachedVertexBuffers === e && this._cachedEffectForVertexBuffers === i || (this._cachedVertexBuffers = e, this._cachedEffectForVertexBuffers = i, this._bindVertexBuffersAttributes(e, i)), this._bindIndexBufferWithCache(t)
                }, e.prototype.unbindInstanceAttributes = function() {
                    for (var e, t = 0, i = this._currentInstanceLocations.length; t < i; t++) {
                        var n = this._currentInstanceBuffers[t];
                        e != n && n.references && (e = n, this.bindArrayBuffer(n));
                        var r = this._currentInstanceLocations[t];
                        this._gl.vertexAttribDivisor(r, 0)
                    }
                    this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
                }, e.prototype.releaseVertexArrayObject = function(e) {
                    this._gl.deleteVertexArray(e)
                }, e.prototype._releaseBuffer = function(e) {
                    return e.references--, 0 === e.references && (this._gl.deleteBuffer(e.underlyingResource), !0)
                }, e.prototype.createInstancesBuffer = function(e) {
                    var t = this._gl.createBuffer();
                    if (!t) throw new Error("Unable to create instance buffer");
                    var i = new E.a(t);
                    return i.capacity = e, this.bindArrayBuffer(i), this._gl.bufferData(this._gl.ARRAY_BUFFER, e, this._gl.DYNAMIC_DRAW), i
                }, e.prototype.deleteInstancesBuffer = function(e) {
                    this._gl.deleteBuffer(e)
                }, e.prototype.updateAndBindInstancesBuffer = function(e, t, i) {
                    if (this.bindArrayBuffer(e), t && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, t), void 0 !== i[0].index) {
                        for (var n = 0, r = 0; r < i.length; r++) {
                            n += 4 * (o = i[r]).attributeSize
                        }
                        for (r = 0; r < i.length; r++) {
                            var o = i[r];
                            this._vertexAttribArraysEnabled[o.index] || (this._gl.enableVertexAttribArray(o.index), this._vertexAttribArraysEnabled[o.index] = !0), this._vertexAttribPointer(e, o.index, o.attributeSize, o.attribyteType || this._gl.FLOAT, o.normalized || !1, n, o.offset), this._gl.vertexAttribDivisor(o.index, 1), this._currentInstanceLocations.push(o.index), this._currentInstanceBuffers.push(e)
                        }
                    } else
                        for (var s = 0; s < 4; s++) {
                            var a = i[s];
                            this._vertexAttribArraysEnabled[a] || (this._gl.enableVertexAttribArray(a), this._vertexAttribArraysEnabled[a] = !0), this._vertexAttribPointer(e, a, 4, this._gl.FLOAT, !1, 64, 16 * s), this._gl.vertexAttribDivisor(a, 1), this._currentInstanceLocations.push(a), this._currentInstanceBuffers.push(e)
                        }
                }, e.prototype.applyStates = function() {
                    this._depthCullingState.apply(this._gl), this._stencilState.apply(this._gl), this._alphaState.apply(this._gl)
                }, e.prototype.draw = function(e, t, i, n) {
                    this.drawElementsType(e ? d.a.TriangleFillMode : d.a.WireFrameFillMode, t, i, n)
                }, e.prototype.drawPointClouds = function(e, t, i) {
                    this.drawArraysType(d.a.PointFillMode, e, t, i)
                }, e.prototype.drawUnIndexed = function(e, t, i, n) {
                    this.drawArraysType(e ? d.a.TriangleFillMode : d.a.WireFrameFillMode, t, i, n)
                }, e.prototype.drawElementsType = function(e, t, i, n) {
                    this.applyStates(), this._drawCalls.addCount(1, !1);
                    var r = this._drawMode(e),
                        o = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
                        s = this._uintIndicesCurrentlySet ? 4 : 2;
                    n ? this._gl.drawElementsInstanced(r, i, o, t * s, n) : this._gl.drawElements(r, i, o, t * s)
                }, e.prototype.drawArraysType = function(e, t, i, n) {
                    this.applyStates(), this._drawCalls.addCount(1, !1);
                    var r = this._drawMode(e);
                    n ? this._gl.drawArraysInstanced(r, t, i, n) : this._gl.drawArrays(r, t, i)
                }, e.prototype._drawMode = function(e) {
                    switch (e) {
                        case d.a.TriangleFillMode:
                            return this._gl.TRIANGLES;
                        case d.a.PointFillMode:
                            return this._gl.POINTS;
                        case d.a.WireFrameFillMode:
                            return this._gl.LINES;
                        case d.a.PointListDrawMode:
                            return this._gl.POINTS;
                        case d.a.LineListDrawMode:
                            return this._gl.LINES;
                        case d.a.LineLoopDrawMode:
                            return this._gl.LINE_LOOP;
                        case d.a.LineStripDrawMode:
                            return this._gl.LINE_STRIP;
                        case d.a.TriangleStripDrawMode:
                            return this._gl.TRIANGLE_STRIP;
                        case d.a.TriangleFanDrawMode:
                            return this._gl.TRIANGLE_FAN;
                        default:
                            return this._gl.TRIANGLES
                    }
                }, e.prototype._releaseEffect = function(e) {
                    this._compiledEffects[e._key] && (delete this._compiledEffects[e._key], this._deletePipelineContext(e.getPipelineContext()))
                }, e.prototype._deletePipelineContext = function(e) {
                    var t = e;
                    t && t.program && (t.program.__SPECTOR_rebuildProgram = null, t.transformFeedback && (this.deleteTransformFeedback(t.transformFeedback), t.transformFeedback = null), this._gl.deleteProgram(t.program))
                }, e.prototype.createEffect = function(e, t, i, n, r, o, s, a, c) {
                    var l = (e.vertexElement || e.vertex || e) + "+" + (e.fragmentElement || e.fragment || e) + "@" + (r || t.defines);
                    if (this._compiledEffects[l]) {
                        var u = this._compiledEffects[l];
                        return s && u.isReady() && s(u), u
                    }
                    var d = new h.a(e, t, i, n, this, r, o, s, a, c);
                    return d._key = l, this._compiledEffects[l] = d, d
                }, e.prototype._compileShader = function(e, t, i, n) {
                    return this._compileRawShader(n + (i ? i + "\n" : "") + e, t)
                }, e.prototype._compileRawShader = function(e, t) {
                    var i = this._gl,
                        n = i.createShader("vertex" === t ? i.VERTEX_SHADER : i.FRAGMENT_SHADER);
                    if (!n) throw new Error("Something went wrong while compile the shader.");
                    return i.shaderSource(n, e), i.compileShader(n), n
                }, e.prototype.createRawShaderProgram = function(e, t, i, n, r) {
                    void 0 === r && (r = null), n = n || this._gl;
                    var o = this._compileRawShader(t, "vertex"),
                        s = this._compileRawShader(i, "fragment");
                    return this._createShaderProgram(e, o, s, n, r)
                }, e.prototype.createShaderProgram = function(e, t, i, n, r, o) {
                    void 0 === o && (o = null), r = r || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
                    var s = this._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "",
                        a = this._compileShader(t, "vertex", n, s),
                        c = this._compileShader(i, "fragment", n, s),
                        l = this._createShaderProgram(e, a, c, r, o);
                    return this.onAfterShaderCompilationObservable.notifyObservers(this), l
                }, e.prototype.createPipelineContext = function() {
                    var e = new T.a;
                    return e.engine = this, this._caps.parallelShaderCompile && (e.isParallelCompiled = !0), e
                }, e.prototype._createShaderProgram = function(e, t, i, n, r) {
                    void 0 === r && (r = null);
                    var o = n.createProgram();
                    if (e.program = o, !o) throw new Error("Unable to create program");
                    if (n.attachShader(o, t), n.attachShader(o, i), this.webGLVersion > 1 && r) {
                        var s = this.createTransformFeedback();
                        this.bindTransformFeedback(s), this.setTranformFeedbackVaryings(o, r), e.transformFeedback = s
                    }
                    return n.linkProgram(o), this.webGLVersion > 1 && r && this.bindTransformFeedback(null), e.context = n, e.vertexShader = t, e.fragmentShader = i, e.isParallelCompiled || this._finalizePipelineContext(e), o
                }, e.prototype._finalizePipelineContext = function(e) {
                    var t = e.context,
                        i = e.vertexShader,
                        n = e.fragmentShader,
                        r = e.program;
                    if (!t.getProgramParameter(r, t.LINK_STATUS)) {
                        var o, s;
                        if (!this._gl.getShaderParameter(i, this._gl.COMPILE_STATUS))
                            if (o = this._gl.getShaderInfoLog(i)) throw new Error(o);
                        if (!this._gl.getShaderParameter(n, this._gl.COMPILE_STATUS))
                            if (o = this._gl.getShaderInfoLog(n)) throw new Error(o);
                        if (s = t.getProgramInfoLog(r)) throw new Error(s)
                    }
                    if (this.validateShaderPrograms && (t.validateProgram(r), !t.getProgramParameter(r, t.VALIDATE_STATUS) && (s = t.getProgramInfoLog(r)))) throw new Error(s);
                    t.deleteShader(i), t.deleteShader(n), e.vertexShader = void 0, e.fragmentShader = void 0, e.onCompiled && (e.onCompiled(), e.onCompiled = void 0)
                }, e.prototype._preparePipelineContext = function(e, t, i, n, r, o, s) {
                    var a = e;
                    a.program = n ? this.createRawShaderProgram(a, t, i, void 0, s) : this.createShaderProgram(a, t, i, o, void 0, s), a.program.__SPECTOR_rebuildProgram = r
                }, e.prototype._isRenderingStateCompiled = function(e) {
                    var t = e;
                    return !!this._gl.getProgramParameter(t.program, this._caps.parallelShaderCompile.COMPLETION_STATUS_KHR) && (this._finalizePipelineContext(t), !0)
                }, e.prototype._executeWhenRenderingStateIsCompiled = function(e, t) {
                    var i = e;
                    i.isParallelCompiled ? i.onCompiled = t : t()
                }, e.prototype.getUniforms = function(e, t) {
                    for (var i = new Array, n = e, r = 0; r < t.length; r++) i.push(this._gl.getUniformLocation(n.program, t[r]));
                    return i
                }, e.prototype.getAttributes = function(e, t) {
                    for (var i = [], n = e, r = 0; r < t.length; r++) try {
                        i.push(this._gl.getAttribLocation(n.program, t[r]))
                    } catch (e) {
                        i.push(-1)
                    }
                    return i
                }, e.prototype.enableEffect = function(e) {
                    e && e !== this._currentEffect && (this.bindSamplers(e), this._currentEffect = e, e.onBind && e.onBind(e), e._onBindObservable && e._onBindObservable.notifyObservers(e))
                }, e.prototype.setIntArray = function(e, t) {
                    e && this._gl.uniform1iv(e, t)
                }, e.prototype.setIntArray2 = function(e, t) {
                    e && t.length % 2 == 0 && this._gl.uniform2iv(e, t)
                }, e.prototype.setIntArray3 = function(e, t) {
                    e && t.length % 3 == 0 && this._gl.uniform3iv(e, t)
                }, e.prototype.setIntArray4 = function(e, t) {
                    e && t.length % 4 == 0 && this._gl.uniform4iv(e, t)
                }, e.prototype.setFloatArray = function(e, t) {
                    e && this._gl.uniform1fv(e, t)
                }, e.prototype.setFloatArray2 = function(e, t) {
                    e && t.length % 2 == 0 && this._gl.uniform2fv(e, t)
                }, e.prototype.setFloatArray3 = function(e, t) {
                    e && t.length % 3 == 0 && this._gl.uniform3fv(e, t)
                }, e.prototype.setFloatArray4 = function(e, t) {
                    e && t.length % 4 == 0 && this._gl.uniform4fv(e, t)
                }, e.prototype.setArray = function(e, t) {
                    e && this._gl.uniform1fv(e, t)
                }, e.prototype.setArray2 = function(e, t) {
                    e && t.length % 2 == 0 && this._gl.uniform2fv(e, t)
                }, e.prototype.setArray3 = function(e, t) {
                    e && t.length % 3 == 0 && this._gl.uniform3fv(e, t)
                }, e.prototype.setArray4 = function(e, t) {
                    e && t.length % 4 == 0 && this._gl.uniform4fv(e, t)
                }, e.prototype.setMatrices = function(e, t) {
                    e && this._gl.uniformMatrix4fv(e, !1, t)
                }, e.prototype.setMatrix = function(e, t) {
                    e && this._gl.uniformMatrix4fv(e, !1, t.toArray())
                }, e.prototype.setMatrix3x3 = function(e, t) {
                    e && this._gl.uniformMatrix3fv(e, !1, t)
                }, e.prototype.setMatrix2x2 = function(e, t) {
                    e && this._gl.uniformMatrix2fv(e, !1, t)
                }, e.prototype.setInt = function(e, t) {
                    e && this._gl.uniform1i(e, t)
                }, e.prototype.setFloat = function(e, t) {
                    e && this._gl.uniform1f(e, t)
                }, e.prototype.setFloat2 = function(e, t, i) {
                    e && this._gl.uniform2f(e, t, i)
                }, e.prototype.setFloat3 = function(e, t, i, n) {
                    e && this._gl.uniform3f(e, t, i, n)
                }, e.prototype.setBool = function(e, t) {
                    e && this._gl.uniform1i(e, t)
                }, e.prototype.setFloat4 = function(e, t, i, n, r) {
                    e && this._gl.uniform4f(e, t, i, n, r)
                }, e.prototype.setColor3 = function(e, t) {
                    e && this._gl.uniform3f(e, t.r, t.g, t.b)
                }, e.prototype.setColor4 = function(e, t, i) {
                    e && this._gl.uniform4f(e, t.r, t.g, t.b, i)
                }, e.prototype.setDirectColor4 = function(e, t) {
                    e && this._gl.uniform4f(e, t.r, t.g, t.b, t.a)
                }, e.prototype.setState = function(e, t, i, n) {
                    void 0 === t && (t = 0), void 0 === n && (n = !1), (this._depthCullingState.cull !== e || i) && (this._depthCullingState.cull = e);
                    var r = this.cullBackFaces ? this._gl.BACK : this._gl.FRONT;
                    (this._depthCullingState.cullFace !== r || i) && (this._depthCullingState.cullFace = r), this.setZOffset(t);
                    var o = n ? this._gl.CW : this._gl.CCW;
                    (this._depthCullingState.frontFace !== o || i) && (this._depthCullingState.frontFace = o)
                }, e.prototype.setZOffset = function(e) {
                    this._depthCullingState.zOffset = e
                }, e.prototype.getZOffset = function() {
                    return this._depthCullingState.zOffset
                }, e.prototype.setDepthBuffer = function(e) {
                    this._depthCullingState.depthTest = e
                }, e.prototype.getDepthWrite = function() {
                    return this._depthCullingState.depthMask
                }, e.prototype.setDepthWrite = function(e) {
                    this._depthCullingState.depthMask = e
                }, e.prototype.setColorWrite = function(e) {
                    this._gl.colorMask(e, e, e, e), this._colorWrite = e
                }, e.prototype.getColorWrite = function() {
                    return this._colorWrite
                }, e.prototype.setAlphaConstants = function(e, t, i, n) {
                    this._alphaState.setAlphaBlendConstants(e, t, i, n)
                }, e.prototype.setAlphaMode = function(t, i) {
                    if (void 0 === i && (i = !1), this._alphaMode !== t) {
                        switch (t) {
                            case e.ALPHA_DISABLE:
                                this._alphaState.alphaBlend = !1;
                                break;
                            case e.ALPHA_PREMULTIPLIED:
                                this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE), this._alphaState.alphaBlend = !0;
                                break;
                            case e.ALPHA_PREMULTIPLIED_PORTERDUFF:
                                this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA), this._alphaState.alphaBlend = !0;
                                break;
                            case e.ALPHA_COMBINE:
                                this._alphaState.setAlphaBlendFunctionParameters(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE), this._alphaState.alphaBlend = !0;
                                break;
                            case e.ALPHA_ONEONE:
                                this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE, this._gl.ZERO, this._gl.ONE), this._alphaState.alphaBlend = !0;
                                break;
                            case e.ALPHA_ADD:
                                this._alphaState.setAlphaBlendFunctionParameters(this._gl.SRC_ALPHA, this._gl.ONE, this._gl.ZERO, this._gl.ONE), this._alphaState.alphaBlend = !0;
                                break;
                            case e.ALPHA_SUBTRACT:
                                this._alphaState.setAlphaBlendFunctionParameters(this._gl.ZERO, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ONE, this._gl.ONE), this._alphaState.alphaBlend = !0;
                                break;
                            case e.ALPHA_MULTIPLY:
                                this._alphaState.setAlphaBlendFunctionParameters(this._gl.DST_COLOR, this._gl.ZERO, this._gl.ONE, this._gl.ONE), this._alphaState.alphaBlend = !0;
                                break;
                            case e.ALPHA_MAXIMIZED:
                                this._alphaState.setAlphaBlendFunctionParameters(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ONE, this._gl.ONE), this._alphaState.alphaBlend = !0;
                                break;
                            case e.ALPHA_INTERPOLATE:
                                this._alphaState.setAlphaBlendFunctionParameters(this._gl.CONSTANT_COLOR, this._gl.ONE_MINUS_CONSTANT_COLOR, this._gl.CONSTANT_ALPHA, this._gl.ONE_MINUS_CONSTANT_ALPHA), this._alphaState.alphaBlend = !0;
                                break;
                            case e.ALPHA_SCREENMODE:
                                this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA), this._alphaState.alphaBlend = !0
                        }
                        i || this.setDepthWrite(t === e.ALPHA_DISABLE), this._alphaMode = t
                    }
                }, e.prototype.getAlphaMode = function() {
                    return this._alphaMode
                }, e.prototype.clearInternalTexturesCache = function() {
                    this._internalTexturesCache = []
                }, e.prototype.wipeCaches = function(e) {
                    this.preventCacheWipeBetweenFrames && !e || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, e && (this.resetTextureCache(), this._currentProgram = null, this._stencilState.reset(), this._depthCullingState.reset(), this.setDepthFunctionToLessOrEqual(), this._alphaState.reset(), this._unpackFlipYCached = null), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this._unbindVertexArrayObject(), this.bindIndexBuffer(null))
                }, e.prototype.setTextureFormatToUse = function(e) {
                    for (var t = 0, i = this.texturesSupported.length; t < i; t++)
                        for (var n = 0, r = e.length; n < r; n++)
                            if (this._texturesSupported[t] === e[n].toLowerCase()) return this._textureFormatInUse = this._texturesSupported[t];
                    return this._textureFormatInUse = null, null
                }, e.prototype._getSamplingParameters = function(t, i) {
                    var n = this._gl,
                        r = n.NEAREST,
                        o = n.NEAREST;
                    switch (t) {
                        case e.TEXTURE_BILINEAR_SAMPLINGMODE:
                            r = n.LINEAR, o = i ? n.LINEAR_MIPMAP_NEAREST : n.LINEAR;
                            break;
                        case e.TEXTURE_TRILINEAR_SAMPLINGMODE:
                            r = n.LINEAR, o = i ? n.LINEAR_MIPMAP_LINEAR : n.LINEAR;
                            break;
                        case e.TEXTURE_NEAREST_SAMPLINGMODE:
                            r = n.NEAREST, o = i ? n.NEAREST_MIPMAP_LINEAR : n.NEAREST;
                            break;
                        case e.TEXTURE_NEAREST_NEAREST_MIPNEAREST:
                            r = n.NEAREST, o = i ? n.NEAREST_MIPMAP_NEAREST : n.NEAREST;
                            break;
                        case e.TEXTURE_NEAREST_LINEAR_MIPNEAREST:
                            r = n.NEAREST, o = i ? n.LINEAR_MIPMAP_NEAREST : n.LINEAR;
                            break;
                        case e.TEXTURE_NEAREST_LINEAR_MIPLINEAR:
                            r = n.NEAREST, o = i ? n.LINEAR_MIPMAP_LINEAR : n.LINEAR;
                            break;
                        case e.TEXTURE_NEAREST_LINEAR:
                            r = n.NEAREST, o = n.LINEAR;
                            break;
                        case e.TEXTURE_NEAREST_NEAREST:
                            r = n.NEAREST, o = n.NEAREST;
                            break;
                        case e.TEXTURE_LINEAR_NEAREST_MIPNEAREST:
                            r = n.LINEAR, o = i ? n.NEAREST_MIPMAP_NEAREST : n.NEAREST;
                            break;
                        case e.TEXTURE_LINEAR_NEAREST_MIPLINEAR:
                            r = n.LINEAR, o = i ? n.NEAREST_MIPMAP_LINEAR : n.NEAREST;
                            break;
                        case e.TEXTURE_LINEAR_LINEAR:
                            r = n.LINEAR, o = n.LINEAR;
                            break;
                        case e.TEXTURE_LINEAR_NEAREST:
                            r = n.LINEAR, o = n.NEAREST
                    }
                    return {
                        min: o,
                        mag: r
                    }
                }, e.prototype._createTexture = function() {
                    var e = this._gl.createTexture();
                    if (!e) throw new Error("Unable to create texture");
                    return e
                }, e.prototype.createTexture = function(t, i, n, r, o, s, a, l, u, h, d, p) {
                    var _ = this;
                    void 0 === o && (o = e.TEXTURE_TRILINEAR_SAMPLINGMODE), void 0 === s && (s = null), void 0 === a && (a = null), void 0 === l && (l = null), void 0 === u && (u = null), void 0 === h && (h = null), void 0 === d && (d = null), void 0 === p && (p = []);
                    for (var g = String(t), m = "data:" === g.substr(0, 5), v = "blob:" === g.substr(0, 5), y = m && -1 !== g.indexOf(";base64,"), b = u || new f.a(this, f.a.DATASOURCE_URL), T = g.lastIndexOf("."), E = d || (T > -1 ? g.substring(T).toLowerCase() : ""), A = null, x = 0, R = e._TextureLoaders; x < R.length; x++) {
                        var P = R[x];
                        if (-1 === p.indexOf(P) && P.canLoad(E, this._textureFormatInUse, u, y, !!l)) {
                            A = P;
                            break
                        }
                    }
                    A && (g = A.transformUrl(g, this._textureFormatInUse)), r && r._addPendingData(b), b.url = g, b.generateMipMaps = !i, b.samplingMode = o, b.invertY = n, this._doNotHandleContextLost || (b._buffer = l);
                    var S = null;
                    s && !u && (S = b.onLoadedObservable.add(s)), u || this._internalTexturesCache.push(b);
                    var C = function(e, n) {
                        r && r._removePendingData(b);
                        var s = !1;
                        A && (A.getFallbackTextureUrl(g, _._textureFormatInUse) && (s = !0, p.push(A), c.h.Warn(A.constructor.name + " failed when trying to load " + b.url + ", falling back to the next supported loader"), _.createTexture(t, i, b.invertY, r, o, null, null, l, b, void 0, void 0, p)));
                        s || (S && b.onLoadedObservable.remove(S), c.h.UseFallbackTexture && _.createTexture(c.h.fallbackTexture, i, b.invertY, r, o, null, null, l, b)), a && a(e || "Unknown error", n)
                    };
                    if (A) {
                        var M = function(e) {
                            A.loadData(e, b, function(e, t, i, n, s, a) {
                                a ? C("TextureLoader failed to load data") : _._prepareWebGLTexture(b, r, e, t, b.invertY, !i, n, function() {
                                    return s(), !1
                                }, o)
                            })
                        };
                        l ? M(l) : this._loadFile(g, M, void 0, r ? r.offlineProvider : void 0, !0, function(e, t) {
                            C("Unable to load " + (e && e.responseURL, t))
                        })
                    } else {
                        var O = function(t) {
                            v && !_._doNotHandleContextLost && (b._buffer = t), _._prepareWebGLTexture(b, r, t.width, t.height, b.invertY, i, !1, function(i, n, o) {
                                var s = _._gl,
                                    a = t.width === i && t.height === n,
                                    c = h ? _._getInternalFormat(h) : ".jpg" === E ? s.RGB : s.RGBA;
                                if (a) return s.texImage2D(s.TEXTURE_2D, 0, c, c, s.UNSIGNED_BYTE, t), !1;
                                var l = _._caps.maxTextureSize;
                                if (t.width > l || t.height > l || null === e._RescalePostProcessFactory) return _._prepareWorkingCanvas(), !(!_._workingCanvas || !_._workingContext) && (_._workingCanvas.width = i, _._workingCanvas.height = n, _._workingContext.drawImage(t, 0, 0, t.width, t.height, 0, 0, i, n), s.texImage2D(s.TEXTURE_2D, 0, c, c, s.UNSIGNED_BYTE, _._workingCanvas), b.width = i, b.height = n, !1);
                                var u = new f.a(_, f.a.DATASOURCE_TEMP);
                                return _._bindTextureDirectly(s.TEXTURE_2D, u, !0), s.texImage2D(s.TEXTURE_2D, 0, c, c, s.UNSIGNED_BYTE, t), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), _._rescaleTexture(u, b, r, c, function() {
                                    _._releaseTexture(u), _._bindTextureDirectly(s.TEXTURE_2D, b, !0), o()
                                }), !0
                            }, o)
                        };
                        !m || y ? l instanceof HTMLImageElement ? O(l) : c.h.LoadImage(g, O, C, r ? r.offlineProvider : null) : "string" == typeof l || l instanceof ArrayBuffer || l instanceof Blob ? c.h.LoadImage(l, O, C, r ? r.offlineProvider : null) : O(l)
                    }
                    return b
                }, e.prototype._rescaleTexture = function(t, i, n, r, o) {
                    var s = this,
                        a = this.createRenderTargetTexture({
                            width: i.width,
                            height: i.height
                        }, {
                            generateMipMaps: !1,
                            type: e.TEXTURETYPE_UNSIGNED_INT,
                            samplingMode: e.TEXTURE_BILINEAR_SAMPLINGMODE,
                            generateDepthBuffer: !1,
                            generateStencilBuffer: !1
                        });
                    !this._rescalePostProcess && e._RescalePostProcessFactory && (this._rescalePostProcess = e._RescalePostProcessFactory(this)), this._rescalePostProcess.getEffect().executeWhenCompiled(function() {
                        s._rescalePostProcess.onApply = function(e) {
                            e._bindTexture("textureSampler", t)
                        };
                        var e = n;
                        e || (e = s.scenes[s.scenes.length - 1]), e.postProcessManager.directRender([s._rescalePostProcess], a, !0), s._bindTextureDirectly(s._gl.TEXTURE_2D, i, !0), s._gl.copyTexImage2D(s._gl.TEXTURE_2D, 0, r, 0, 0, i.width, i.height, 0), s.unBindFramebuffer(a), s._releaseTexture(a), o && o()
                    })
                }, e.prototype.createRawTexture = function(t, i, n, r, o, s, a, c, l) {
                    throw void 0 === c && (c = null), void 0 === l && (l = e.TEXTURETYPE_UNSIGNED_INT), b.a.WarnImport("Engine.RawTexture")
                }, e.prototype._unpackFlipY = function(e) {
                    this._unpackFlipYCached !== e && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, e ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = e))
                }, e.prototype._getUnpackAlignement = function() {
                    return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
                }, e.prototype.createDynamicTexture = function(e, t, i, n) {
                    var r = new f.a(this, f.a.DATASOURCE_DYNAMIC);
                    return r.baseWidth = e, r.baseHeight = t, i && (e = this.needPOTTextures ? c.h.GetExponentOfTwo(e, this._caps.maxTextureSize) : e, t = this.needPOTTextures ? c.h.GetExponentOfTwo(t, this._caps.maxTextureSize) : t), r.width = e, r.height = t, r.isReady = !1, r.generateMipMaps = i, r.samplingMode = n, this.updateTextureSamplingMode(n, r), this._internalTexturesCache.push(r), r
                }, e.prototype.updateTextureSamplingMode = function(e, t) {
                    var i = this._getSamplingParameters(e, t.generateMipMaps);
                    t.isCube ? (this._setTextureParameterInteger(this._gl.TEXTURE_CUBE_MAP, this._gl.TEXTURE_MAG_FILTER, i.mag, t), this._setTextureParameterInteger(this._gl.TEXTURE_CUBE_MAP, this._gl.TEXTURE_MIN_FILTER, i.min), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : t.is3D ? (this._setTextureParameterInteger(this._gl.TEXTURE_3D, this._gl.TEXTURE_MAG_FILTER, i.mag, t), this._setTextureParameterInteger(this._gl.TEXTURE_3D, this._gl.TEXTURE_MIN_FILTER, i.min), this._bindTextureDirectly(this._gl.TEXTURE_3D, null)) : (this._setTextureParameterInteger(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, i.mag, t), this._setTextureParameterInteger(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, i.min), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), t.samplingMode = e
                }, e.prototype.updateDynamicTexture = function(e, t, i, n, r, o) {
                    if (void 0 === n && (n = !1), void 0 === o && (o = !1), e) {
                        this._bindTextureDirectly(this._gl.TEXTURE_2D, e, !0, o), this._unpackFlipY(i), n && this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
                        var s = r ? this._getInternalFormat(r) : this._gl.RGBA;
                        this._gl.texImage2D(this._gl.TEXTURE_2D, 0, s, s, this._gl.UNSIGNED_BYTE, t), e.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), n && this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), e.isReady = !0
                    }
                }, e.prototype.updateVideoTexture = function(e, t, i) {
                    if (e && !e._isDisabled) {
                        var n = this._bindTextureDirectly(this._gl.TEXTURE_2D, e, !0);
                        this._unpackFlipY(!i);
                        try {
                            if (void 0 === this._videoTextureSupported && (this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, t), 0 !== this._gl.getError() ? this._videoTextureSupported = !1 : this._videoTextureSupported = !0), this._videoTextureSupported) this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, t);
                            else {
                                if (!e._workingCanvas) {
                                    e._workingCanvas = document.createElement("canvas");
                                    var r = e._workingCanvas.getContext("2d");
                                    if (!r) throw new Error("Unable to get 2d context");
                                    e._workingContext = r, e._workingCanvas.width = e.width, e._workingCanvas.height = e.height
                                }
                                e._workingContext.drawImage(t, 0, 0, t.videoWidth, t.videoHeight, 0, 0, e.width, e.height), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, e._workingCanvas)
                            }
                            e.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), n || this._bindTextureDirectly(this._gl.TEXTURE_2D, null), e.isReady = !0
                        } catch (t) {
                            e._isDisabled = !0
                        }
                    }
                }, e.prototype.updateTextureComparisonFunction = function(t, i) {
                    if (1 !== this.webGLVersion) {
                        var n = this._gl;
                        t.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, t, !0), 0 === i ? (n.texParameteri(n.TEXTURE_CUBE_MAP, n.TEXTURE_COMPARE_FUNC, e.LEQUAL), n.texParameteri(n.TEXTURE_CUBE_MAP, n.TEXTURE_COMPARE_MODE, n.NONE)) : (n.texParameteri(n.TEXTURE_CUBE_MAP, n.TEXTURE_COMPARE_FUNC, i), n.texParameteri(n.TEXTURE_CUBE_MAP, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, t, !0), 0 === i ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_COMPARE_FUNC, e.LEQUAL), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_COMPARE_MODE, n.NONE)) : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_COMPARE_FUNC, i), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), t._comparisonFunction = i
                    } else m.a.Error("WebGL 1 does not support texture comparison.")
                }, e.prototype._setupDepthStencilTexture = function(t, i, n, r, o) {
                    var s = i.width || i,
                        a = i.height || i;
                    t.baseWidth = s, t.baseHeight = a, t.width = s, t.height = a, t.isReady = !0, t.samples = 1, t.generateMipMaps = !1, t._generateDepthBuffer = !0, t._generateStencilBuffer = n, t.samplingMode = r ? e.TEXTURE_BILINEAR_SAMPLINGMODE : e.TEXTURE_NEAREST_SAMPLINGMODE, t.type = e.TEXTURETYPE_UNSIGNED_INT, t._comparisonFunction = o;
                    var c = this._gl,
                        l = t.isCube ? c.TEXTURE_CUBE_MAP : c.TEXTURE_2D,
                        u = this._getSamplingParameters(t.samplingMode, !1);
                    c.texParameteri(l, c.TEXTURE_MAG_FILTER, u.mag), c.texParameteri(l, c.TEXTURE_MIN_FILTER, u.min), c.texParameteri(l, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(l, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), 0 === o ? (c.texParameteri(l, c.TEXTURE_COMPARE_FUNC, e.LEQUAL), c.texParameteri(l, c.TEXTURE_COMPARE_MODE, c.NONE)) : (c.texParameteri(l, c.TEXTURE_COMPARE_FUNC, o), c.texParameteri(l, c.TEXTURE_COMPARE_MODE, c.COMPARE_REF_TO_TEXTURE))
                }, e.prototype.createDepthStencilTexture = function(e, t) {
                    if (t.isCube) {
                        var i = e.width || e;
                        return this._createDepthStencilCubeTexture(i, t)
                    }
                    return this._createDepthStencilTexture(e, t)
                }, e.prototype._createDepthStencilTexture = function(e, t) {
                    var i = new f.a(this, f.a.DATASOURCE_DEPTHTEXTURE);
                    if (!this._caps.depthTextureExtension) return m.a.Error("Depth texture is not supported by your browser or hardware."), i;
                    var r = n.a({
                            bilinearFiltering: !1,
                            comparisonFunction: 0,
                            generateStencil: !1
                        }, t),
                        o = this._gl;
                    return this._bindTextureDirectly(o.TEXTURE_2D, i, !0), this._setupDepthStencilTexture(i, e, r.generateStencil, r.bilinearFiltering, r.comparisonFunction), this.webGLVersion > 1 ? r.generateStencil ? o.texImage2D(o.TEXTURE_2D, 0, o.DEPTH24_STENCIL8, i.width, i.height, 0, o.DEPTH_STENCIL, o.UNSIGNED_INT_24_8, null) : o.texImage2D(o.TEXTURE_2D, 0, o.DEPTH_COMPONENT24, i.width, i.height, 0, o.DEPTH_COMPONENT, o.UNSIGNED_INT, null) : r.generateStencil ? o.texImage2D(o.TEXTURE_2D, 0, o.DEPTH_STENCIL, i.width, i.height, 0, o.DEPTH_STENCIL, o.UNSIGNED_INT_24_8, null) : o.texImage2D(o.TEXTURE_2D, 0, o.DEPTH_COMPONENT, i.width, i.height, 0, o.DEPTH_COMPONENT, o.UNSIGNED_INT, null), this._bindTextureDirectly(o.TEXTURE_2D, null), i
                }, e.prototype.setFrameBufferDepthStencilTexture = function(e) {
                    var t = e.getInternalTexture();
                    if (t && t._framebuffer && e.depthStencilTexture) {
                        var i = this._gl,
                            n = e.depthStencilTexture;
                        this._bindUnboundFramebuffer(t._framebuffer), n.isCube ? n._generateStencilBuffer ? i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_CUBE_MAP_POSITIVE_X, n._webGLTexture, 0) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_CUBE_MAP_POSITIVE_X, n._webGLTexture, 0) : n._generateStencilBuffer ? i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, n._webGLTexture, 0) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, n._webGLTexture, 0), this._bindUnboundFramebuffer(null)
                    }
                }, e.prototype.createRenderTargetTexture = function(t, i) {
                    var n = new y.a;
                    void 0 !== i && "object" == typeof i ? (n.generateMipMaps = i.generateMipMaps, n.generateDepthBuffer = void 0 === i.generateDepthBuffer || i.generateDepthBuffer, n.generateStencilBuffer = n.generateDepthBuffer && i.generateStencilBuffer, n.type = void 0 === i.type ? e.TEXTURETYPE_UNSIGNED_INT : i.type, n.samplingMode = void 0 === i.samplingMode ? e.TEXTURE_TRILINEAR_SAMPLINGMODE : i.samplingMode, n.format = void 0 === i.format ? e.TEXTUREFORMAT_RGBA : i.format) : (n.generateMipMaps = i, n.generateDepthBuffer = !0, n.generateStencilBuffer = !1, n.type = e.TEXTURETYPE_UNSIGNED_INT, n.samplingMode = e.TEXTURE_TRILINEAR_SAMPLINGMODE, n.format = e.TEXTUREFORMAT_RGBA), (n.type !== e.TEXTURETYPE_FLOAT || this._caps.textureFloatLinearFiltering) && (n.type !== e.TEXTURETYPE_HALF_FLOAT || this._caps.textureHalfFloatLinearFiltering) || (n.samplingMode = e.TEXTURE_NEAREST_SAMPLINGMODE);
                    var r = this._gl,
                        o = new f.a(this, f.a.DATASOURCE_RENDERTARGET);
                    this._bindTextureDirectly(r.TEXTURE_2D, o, !0);
                    var s = t.width || t,
                        a = t.height || t,
                        c = this._getSamplingParameters(n.samplingMode, !!n.generateMipMaps);
                    n.type !== e.TEXTURETYPE_FLOAT || this._caps.textureFloat || (n.type = e.TEXTURETYPE_UNSIGNED_INT, m.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, c.mag), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, c.min), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texImage2D(r.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(n.type, n.format), s, a, 0, this._getInternalFormat(n.format), this._getWebGLTextureType(n.type), null);
                    var l = this._currentFramebuffer,
                        u = r.createFramebuffer();
                    return this._bindUnboundFramebuffer(u), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, o._webGLTexture, 0), o._depthStencilBuffer = this._setupFramebufferDepthAttachments(!!n.generateStencilBuffer, n.generateDepthBuffer, s, a), n.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(r.TEXTURE_2D, null), r.bindRenderbuffer(r.RENDERBUFFER, null), this._bindUnboundFramebuffer(l), o._framebuffer = u, o.baseWidth = s, o.baseHeight = a, o.width = s, o.height = a, o.isReady = !0, o.samples = 1, o.generateMipMaps = !!n.generateMipMaps, o.samplingMode = n.samplingMode, o.type = n.type, o.format = n.format, o._generateDepthBuffer = n.generateDepthBuffer, o._generateStencilBuffer = !!n.generateStencilBuffer, this._internalTexturesCache.push(o), o
                }, e.prototype._setupFramebufferDepthAttachments = function(e, t, i, n, r) {
                    void 0 === r && (r = 1);
                    var o = null,
                        s = this._gl;
                    return e ? (o = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, o), r > 1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, r, s.DEPTH24_STENCIL8, i, n) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, i, n), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, o)) : t && (o = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, o), r > 1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, r, s.DEPTH_COMPONENT16, i, n) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_COMPONENT16, i, n), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, o)), o
                }, e.prototype.updateRenderTargetTextureSampleCount = function(e, t) {
                    if (this.webGLVersion < 2 || !e) return 1;
                    if (e.samples === t) return t;
                    var i = this._gl;
                    if (t = Math.min(t, i.getParameter(i.MAX_SAMPLES)), e._depthStencilBuffer && (i.deleteRenderbuffer(e._depthStencilBuffer), e._depthStencilBuffer = null), e._MSAAFramebuffer && (i.deleteFramebuffer(e._MSAAFramebuffer), e._MSAAFramebuffer = null), e._MSAARenderBuffer && (i.deleteRenderbuffer(e._MSAARenderBuffer), e._MSAARenderBuffer = null), t > 1) {
                        var n = i.createFramebuffer();
                        if (!n) throw new Error("Unable to create multi sampled framebuffer");
                        e._MSAAFramebuffer = n, this._bindUnboundFramebuffer(e._MSAAFramebuffer);
                        var r = i.createRenderbuffer();
                        if (!r) throw new Error("Unable to create multi sampled framebuffer");
                        i.bindRenderbuffer(i.RENDERBUFFER, r), i.renderbufferStorageMultisample(i.RENDERBUFFER, t, this._getRGBAMultiSampleBufferFormat(e.type), e.width, e.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, r), e._MSAARenderBuffer = r
                    } else this._bindUnboundFramebuffer(e._framebuffer);
                    return e.samples = t, e._depthStencilBuffer = this._setupFramebufferDepthAttachments(e._generateStencilBuffer, e._generateDepthBuffer, e.width, e.height, t), i.bindRenderbuffer(i.RENDERBUFFER, null), this._bindUnboundFramebuffer(null), t
                }, e.prototype._uploadCompressedDataToTextureDirectly = function(e, t, i, n, r, o, s) {
                    void 0 === o && (o = 0), void 0 === s && (s = 0);
                    var a = this._gl,
                        c = a.TEXTURE_2D;
                    e.isCube && (c = a.TEXTURE_CUBE_MAP_POSITIVE_X + o), this._gl.compressedTexImage2D(c, s, t, i, n, 0, r)
                }, e.prototype._uploadDataToTextureDirectly = function(e, t, i, n) {
                    void 0 === i && (i = 0), void 0 === n && (n = 0);
                    var r = this._gl,
                        o = this._getWebGLTextureType(e.type),
                        s = this._getInternalFormat(e.format),
                        a = this._getRGBABufferInternalSizedFormat(e.type, s);
                    this._unpackFlipY(e.invertY);
                    var c = r.TEXTURE_2D;
                    e.isCube && (c = r.TEXTURE_CUBE_MAP_POSITIVE_X + i);
                    var l = Math.round(u.a.Log2(e.width)),
                        h = Math.round(u.a.Log2(e.height)),
                        d = Math.pow(2, Math.max(l - n, 0)),
                        f = Math.pow(2, Math.max(h - n, 0));
                    r.texImage2D(c, n, a, d, f, 0, s, o, t)
                }, e.prototype._uploadArrayBufferViewToTexture = function(e, t, i, n) {
                    void 0 === i && (i = 0), void 0 === n && (n = 0);
                    var r = this._gl,
                        o = e.isCube ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D;
                    this._bindTextureDirectly(o, e, !0), this._uploadDataToTextureDirectly(e, t, i, n), this._bindTextureDirectly(o, null, !0)
                }, e.prototype._uploadImageToTexture = function(e, t, i, n) {
                    void 0 === i && (i = 0), void 0 === n && (n = 0);
                    var r = this._gl,
                        o = this._getWebGLTextureType(e.type),
                        s = this._getInternalFormat(e.format),
                        a = this._getRGBABufferInternalSizedFormat(e.type, s),
                        c = e.isCube ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D;
                    this._bindTextureDirectly(c, e, !0), this._unpackFlipY(e.invertY);
                    var l = r.TEXTURE_2D;
                    e.isCube && (l = r.TEXTURE_CUBE_MAP_POSITIVE_X + i), r.texImage2D(l, n, a, s, o, t), this._bindTextureDirectly(c, null, !0)
                }, e.prototype._setCubeMapTextureParams = function(e) {
                    var t = this._gl;
                    t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, e ? t.LINEAR_MIPMAP_LINEAR : t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), this._bindTextureDirectly(t.TEXTURE_CUBE_MAP, null)
                }, e.prototype.createRawCubeTexture = function(e, t, i, n, r, o, s, a) {
                    throw void 0 === a && (a = null), b.a.WarnImport("Engine.RawTexture")
                }, e.prototype.createRawTexture3D = function(t, i, n, r, o, s, a, c, l, u) {
                    throw void 0 === l && (l = null), void 0 === u && (u = e.TEXTURETYPE_UNSIGNED_INT), b.a.WarnImport("Engine.RawTexture")
                }, e.prototype._prepareWebGLTextureContinuation = function(e, t, i, n, r) {
                    var o = this._gl;
                    if (o) {
                        var s = this._getSamplingParameters(r, !i);
                        o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, s.mag), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, s.min), i || n || o.generateMipmap(o.TEXTURE_2D), this._bindTextureDirectly(o.TEXTURE_2D, null), t && t._removePendingData(e), e.onLoadedObservable.notifyObservers(e), e.onLoadedObservable.clear()
                    }
                }, e.prototype._prepareWebGLTexture = function(t, i, n, r, o, s, a, l, u) {
                    var h = this;
                    void 0 === u && (u = e.TEXTURE_TRILINEAR_SAMPLINGMODE);
                    var d = this.getCaps().maxTextureSize,
                        f = Math.min(d, this.needPOTTextures ? c.h.GetExponentOfTwo(n, d) : n),
                        p = Math.min(d, this.needPOTTextures ? c.h.GetExponentOfTwo(r, d) : r),
                        _ = this._gl;
                    _ && (t._webGLTexture ? (this._bindTextureDirectly(_.TEXTURE_2D, t, !0), this._unpackFlipY(void 0 === o || !!o), t.baseWidth = n, t.baseHeight = r, t.width = f, t.height = p, t.isReady = !0, l(f, p, function() {
                        h._prepareWebGLTextureContinuation(t, i, s, a, u)
                    }) || this._prepareWebGLTextureContinuation(t, i, s, a, u)) : i && i._removePendingData(t))
                }, e.prototype._convertRGBtoRGBATextureData = function(t, i, n, r) {
                    var o;
                    o = r === e.TEXTURETYPE_FLOAT ? new Float32Array(i * n * 4) : new Uint32Array(i * n * 4);
                    for (var s = 0; s < i; s++)
                        for (var a = 0; a < n; a++) {
                            var c = 3 * (a * i + s),
                                l = 4 * (a * i + s);
                            o[l + 0] = t[c + 0], o[l + 1] = t[c + 1], o[l + 2] = t[c + 2], o[l + 3] = 1
                        }
                    return o
                }, e.prototype._releaseFramebufferObjects = function(e) {
                    var t = this._gl;
                    e._framebuffer && (t.deleteFramebuffer(e._framebuffer), e._framebuffer = null), e._depthStencilBuffer && (t.deleteRenderbuffer(e._depthStencilBuffer), e._depthStencilBuffer = null), e._MSAAFramebuffer && (t.deleteFramebuffer(e._MSAAFramebuffer), e._MSAAFramebuffer = null), e._MSAARenderBuffer && (t.deleteRenderbuffer(e._MSAARenderBuffer), e._MSAARenderBuffer = null)
                }, e.prototype._releaseTexture = function(e) {
                    var t = this._gl;
                    this._releaseFramebufferObjects(e), t.deleteTexture(e._webGLTexture), this.unbindAllTextures();
                    var i = this._internalTexturesCache.indexOf(e); - 1 !== i && this._internalTexturesCache.splice(i, 1), e._lodTextureHigh && e._lodTextureHigh.dispose(), e._lodTextureMid && e._lodTextureMid.dispose(), e._lodTextureLow && e._lodTextureLow.dispose(), this.scenes.forEach(function(t) {
                        t.postProcesses.forEach(function(t) {
                            t._outputTexture == e && (t._outputTexture = null)
                        }), t.cameras.forEach(function(t) {
                            t._postProcesses.forEach(function(t) {
                                t && t._outputTexture == e && (t._outputTexture = null)
                            })
                        })
                    })
                }, e.prototype.setProgram = function(e) {
                    this._currentProgram !== e && (this._gl.useProgram(e), this._currentProgram = e)
                }, e.prototype.bindSamplers = function(e) {
                    var t = e.getPipelineContext();
                    this.setProgram(t.program);
                    for (var i = e.getSamplers(), n = 0; n < i.length; n++) {
                        var r = e.getUniform(i[n]);
                        r && (this._boundUniforms[n] = r)
                    }
                    this._currentEffect = null
                }, e.prototype._activateCurrentTexture = function() {
                    this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
                }, e.prototype._bindTextureDirectly = function(e, t, i, n) {
                    void 0 === i && (i = !1), void 0 === n && (n = !1);
                    var r = !1,
                        o = t && t._associatedChannel > -1;
                    return i && o && (this._activeChannel = t._associatedChannel), this._boundTexturesCache[this._activeChannel] !== t || n ? (this._activateCurrentTexture(), t && t.isMultiview ? this._gl.bindTexture(e, t ? t._colorTextureArray : null) : this._gl.bindTexture(e, t ? t._webGLTexture : null), this._boundTexturesCache[this._activeChannel] = t, t && (t._associatedChannel = this._activeChannel)) : i && (r = !0, this._activateCurrentTexture()), o && !i && this._bindSamplerUniformToChannel(t._associatedChannel, this._activeChannel), r
                }, e.prototype._bindTexture = function(e, t) {
                    void 0 !== e && (t && (t._associatedChannel = e), this._activeChannel = e, this._bindTextureDirectly(this._gl.TEXTURE_2D, t))
                }, e.prototype.setTextureFromPostProcess = function(e, t) {
                    this._bindTexture(e, t ? t._textures.data[t._currentRenderTextureInd] : null)
                }, e.prototype.setTextureFromPostProcessOutput = function(e, t) {
                    this._bindTexture(e, t ? t._outputTexture : null)
                }, e.prototype.unbindAllTextures = function() {
                    for (var e = 0; e < this._maxSimultaneousTextures; e++) this._activeChannel = e, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.webGLVersion > 1 && this._bindTextureDirectly(this._gl.TEXTURE_3D, null)
                }, e.prototype.setTexture = function(e, t, i) {
                    void 0 !== e && (t && (this._boundUniforms[e] = t), this._setTexture(e, i))
                }, e.prototype.setDepthStencilTexture = function(e, t, i) {
                    void 0 !== e && (t && (this._boundUniforms[e] = t), i && i.depthStencilTexture ? this._setTexture(e, i, !1, !0) : this._setTexture(e, null))
                }, e.prototype._bindSamplerUniformToChannel = function(e, t) {
                    var i = this._boundUniforms[e];
                    i._currentState !== t && (this._gl.uniform1i(i, t), i._currentState = t)
                }, e.prototype._getTextureWrapMode = function(t) {
                    switch (t) {
                        case e.TEXTURE_WRAP_ADDRESSMODE:
                            return this._gl.REPEAT;
                        case e.TEXTURE_CLAMP_ADDRESSMODE:
                            return this._gl.CLAMP_TO_EDGE;
                        case e.TEXTURE_MIRROR_ADDRESSMODE:
                            return this._gl.MIRRORED_REPEAT
                    }
                    return this._gl.REPEAT
                }, e.prototype._setTexture = function(t, i, n, r) {
                    if (void 0 === n && (n = !1), void 0 === r && (r = !1), !i) return null != this._boundTexturesCache[t] && (this._activeChannel = t, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.webGLVersion > 1 && this._bindTextureDirectly(this._gl.TEXTURE_3D, null)), !1;
                    if (i.video) this._activeChannel = t, i.update();
                    else if (i.delayLoadState === e.DELAYLOADSTATE_NOTLOADED) return i.delayLoad(), !1;
                    var o;
                    o = r ? i.depthStencilTexture : i.isReady() ? i.getInternalTexture() : i.isCube ? this.emptyCubeTexture : i.is3D ? this.emptyTexture3D : this.emptyTexture, !n && o && (o._associatedChannel = t);
                    var s = !0;
                    if (this._boundTexturesCache[t] === o && (n || this._bindSamplerUniformToChannel(o._associatedChannel, t), s = !1), this._activeChannel = t, o && o.isMultiview) s && this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, o, n);
                    else if (o && o.is3D) s && this._bindTextureDirectly(this._gl.TEXTURE_3D, o, n), o && o._cachedWrapU !== i.wrapU && (o._cachedWrapU = i.wrapU, this._setTextureParameterInteger(this._gl.TEXTURE_3D, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(i.wrapU), o)), o && o._cachedWrapV !== i.wrapV && (o._cachedWrapV = i.wrapV, this._setTextureParameterInteger(this._gl.TEXTURE_3D, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(i.wrapV), o)), o && o._cachedWrapR !== i.wrapR && (o._cachedWrapR = i.wrapR, this._setTextureParameterInteger(this._gl.TEXTURE_3D, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(i.wrapR), o)), this._setAnisotropicLevel(this._gl.TEXTURE_3D, i);
                    else if (o && o.isCube) {
                        if (s && this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, o, n), o._cachedCoordinatesMode !== i.coordinatesMode) {
                            o._cachedCoordinatesMode = i.coordinatesMode;
                            var a = i.coordinatesMode !== e.TEXTURE_CUBIC_MODE && i.coordinatesMode !== e.TEXTURE_SKYBOX_MODE ? this._gl.REPEAT : this._gl.CLAMP_TO_EDGE;
                            this._setTextureParameterInteger(this._gl.TEXTURE_CUBE_MAP, this._gl.TEXTURE_WRAP_S, a, o), this._setTextureParameterInteger(this._gl.TEXTURE_CUBE_MAP, this._gl.TEXTURE_WRAP_T, a)
                        }
                        this._setAnisotropicLevel(this._gl.TEXTURE_CUBE_MAP, i)
                    } else s && this._bindTextureDirectly(this._gl.TEXTURE_2D, o, n), o && o._cachedWrapU !== i.wrapU && (o._cachedWrapU = i.wrapU, this._setTextureParameterInteger(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(i.wrapU), o)), o && o._cachedWrapV !== i.wrapV && (o._cachedWrapV = i.wrapV, this._setTextureParameterInteger(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(i.wrapV), o)), this._setAnisotropicLevel(this._gl.TEXTURE_2D, i);
                    return !0
                }, e.prototype.setTextureArray = function(e, t, i) {
                    if (void 0 !== e && t) {
                        this._textureUnits && this._textureUnits.length === i.length || (this._textureUnits = new Int32Array(i.length));
                        for (var n = 0; n < i.length; n++) {
                            var r = i[n].getInternalTexture();
                            r ? (this._textureUnits[e + n] = e + n, r._associatedChannel = e + n) : this._textureUnits[e + n] = -1
                        }
                        this._gl.uniform1iv(t, this._textureUnits);
                        for (var o = 0; o < i.length; o++) this._setTexture(this._textureUnits[o], i[o], !0)
                    }
                }, e.prototype._setAnisotropicLevel = function(t, i) {
                    var n = i.getInternalTexture();
                    if (n) {
                        var r = this._caps.textureAnisotropicFilterExtension,
                            o = i.anisotropicFilteringLevel;
                        n.samplingMode !== e.TEXTURE_LINEAR_LINEAR_MIPNEAREST && n.samplingMode !== e.TEXTURE_LINEAR_LINEAR_MIPLINEAR && n.samplingMode !== e.TEXTURE_LINEAR_LINEAR && (o = 1), r && n._cachedAnisotropicFilteringLevel !== o && (this._setTextureParameterFloat(t, r.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o, this._caps.maxAnisotropy), n), n._cachedAnisotropicFilteringLevel = o)
                    }
                }, e.prototype._setTextureParameterFloat = function(e, t, i, n) {
                    this._bindTextureDirectly(e, n, !0, !0), this._gl.texParameterf(e, t, i)
                }, e.prototype._setTextureParameterInteger = function(e, t, i, n) {
                    n && this._bindTextureDirectly(e, n, !0, !0), this._gl.texParameteri(e, t, i)
                }, e.prototype.readPixels = function(e, t, i, n) {
                    var r = new Uint8Array(n * i * 4);
                    return this._gl.readPixels(e, t, i, n, this._gl.RGBA, this._gl.UNSIGNED_BYTE, r), r
                }, e.prototype.addExternalData = function(e, t) {
                    return this._externalData || (this._externalData = new s.a), this._externalData.add(e, t)
                }, e.prototype.getExternalData = function(e) {
                    return this._externalData || (this._externalData = new s.a), this._externalData.get(e)
                }, e.prototype.getOrAddExternalDataWithFactory = function(e, t) {
                    return this._externalData || (this._externalData = new s.a), this._externalData.getOrAddWithFactory(e, t)
                }, e.prototype.removeExternalData = function(e) {
                    return this._externalData || (this._externalData = new s.a), this._externalData.remove(e)
                }, e.prototype.unbindAllAttributes = function() {
                    if (this._mustWipeVertexAttributes) {
                        this._mustWipeVertexAttributes = !1;
                        for (var e = 0; e < this._caps.maxVertexAttribs; e++) this._gl.disableVertexAttribArray(e), this._vertexAttribArraysEnabled[e] = !1, this._currentBufferPointers[e].active = !1
                    } else {
                        e = 0;
                        for (var t = this._vertexAttribArraysEnabled.length; e < t; e++) e >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[e] || (this._gl.disableVertexAttribArray(e), this._vertexAttribArraysEnabled[e] = !1, this._currentBufferPointers[e].active = !1)
                    }
                }, e.prototype.releaseEffects = function() {
                    for (var e in this._compiledEffects) {
                        var t = this._compiledEffects[e].getPipelineContext();
                        this._deletePipelineContext(t)
                    }
                    this._compiledEffects = {}
                }, e.prototype.dispose = function() {
                    for (this.hideLoadingUI(), this.stopRenderLoop(), this.onNewSceneAddedObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
                    for (this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._rescalePostProcess && this._rescalePostProcess.dispose(); this.scenes.length;) this.scenes[0].dispose();
                    1 === e.Instances.length && e.audioEngine && e.audioEngine.dispose(), this.releaseEffects(), this.unbindAllAttributes(), this._boundUniforms = [], this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.disableVR(), g.a.IsWindowObjectExist() && (window.removeEventListener("blur", this._onBlur), window.removeEventListener("focus", this._onFocus), this._renderingCanvas && (this._renderingCanvas.removeEventListener("focus", this._onCanvasFocus), this._renderingCanvas.removeEventListener("blur", this._onCanvasBlur), this._renderingCanvas.removeEventListener("pointerout", this._onCanvasPointerOut), this._doNotHandleContextLost || (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored))), document.removeEventListener("fullscreenchange", this._onFullscreenChange), document.removeEventListener("mozfullscreenchange", this._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", this._onFullscreenChange), document.removeEventListener("msfullscreenchange", this._onFullscreenChange), document.removeEventListener("pointerlockchange", this._onPointerLockChange), document.removeEventListener("mspointerlockchange", this._onPointerLockChange), document.removeEventListener("mozpointerlockchange", this._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", this._onPointerLockChange));
                    var t = e.Instances.indexOf(this);
                    t >= 0 && e.Instances.splice(t, 1), this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers = [], this._renderingCanvas = null, this._currentProgram = null, this._bindedRenderFunction = null, this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), h.a.ResetCache();
                    for (var i = 0, n = this._activeRequests; i < n.length; i++) {
                        n[i].abort()
                    }
                }, e.prototype.displayLoadingUI = function() {
                    if (g.a.IsWindowObjectExist()) {
                        var e = this.loadingScreen;
                        e && e.displayLoadingUI()
                    }
                }, e.prototype.hideLoadingUI = function() {
                    if (g.a.IsWindowObjectExist()) {
                        var e = this._loadingScreen;
                        e && e.hideLoadingUI()
                    }
                }, Object.defineProperty(e.prototype, "loadingScreen", {
                    get: function() {
                        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = e.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
                    },
                    set: function(e) {
                        this._loadingScreen = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "loadingUIText", {
                    set: function(e) {
                        this.loadingScreen.loadingUIText = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "loadingUIBackgroundColor", {
                    set: function(e) {
                        this.loadingScreen.loadingUIBackgroundColor = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.attachContextLostEvent = function(e) {
                    this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", e, !1)
                }, e.prototype.attachContextRestoredEvent = function(e) {
                    this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", e, !1)
                }, e.prototype.getVertexShaderSource = function(e) {
                    var t = this._gl.getAttachedShaders(e);
                    return t ? this._gl.getShaderSource(t[0]) : null
                }, e.prototype.getFragmentShaderSource = function(e) {
                    var t = this._gl.getAttachedShaders(e);
                    return t ? this._gl.getShaderSource(t[1]) : null
                }, e.prototype.getError = function() {
                    return this._gl.getError()
                }, e.prototype.getFps = function() {
                    return this._fps
                }, e.prototype.getDeltaTime = function() {
                    return this._deltaTime
                }, e.prototype._measureFps = function() {
                    this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
                }, e.prototype._readTexturePixels = function(e, t, i, n, r, o) {
                    void 0 === n && (n = -1), void 0 === r && (r = 0), void 0 === o && (o = null);
                    var s = this._gl;
                    if (!this._dummyFramebuffer) {
                        var a = s.createFramebuffer();
                        if (!a) throw new Error("Unable to create dummy framebuffer");
                        this._dummyFramebuffer = a
                    }
                    s.bindFramebuffer(s.FRAMEBUFFER, this._dummyFramebuffer), n > -1 ? s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + n, e._webGLTexture, r) : s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, e._webGLTexture, r);
                    var c = void 0 !== e.type ? this._getWebGLTextureType(e.type) : s.UNSIGNED_BYTE;
                    switch (c) {
                        case s.UNSIGNED_BYTE:
                            o || (o = new Uint8Array(4 * t * i)), c = s.UNSIGNED_BYTE;
                            break;
                        default:
                            o || (o = new Float32Array(4 * t * i)), c = s.FLOAT
                    }
                    return s.readPixels(0, 0, t, i, s.RGBA, c, o), s.bindFramebuffer(s.FRAMEBUFFER, this._currentFramebuffer), o
                }, e.prototype._canRenderToFloatFramebuffer = function() {
                    return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(e.TEXTURETYPE_FLOAT)
                }, e.prototype._canRenderToHalfFloatFramebuffer = function() {
                    return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(e.TEXTURETYPE_HALF_FLOAT)
                }, e.prototype._canRenderToFramebuffer = function(e) {
                    for (var t = this._gl; t.getError() !== t.NO_ERROR;);
                    var i = !0,
                        n = t.createTexture();
                    t.bindTexture(t.TEXTURE_2D, n), t.texImage2D(t.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(e), 1, 1, 0, t.RGBA, this._getWebGLTextureType(e), null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST);
                    var r = t.createFramebuffer();
                    t.bindFramebuffer(t.FRAMEBUFFER, r), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0);
                    var o = t.checkFramebufferStatus(t.FRAMEBUFFER);
                    if ((i = (i = i && o === t.FRAMEBUFFER_COMPLETE) && t.getError() === t.NO_ERROR) && (t.clear(t.COLOR_BUFFER_BIT), i = i && t.getError() === t.NO_ERROR), i) {
                        t.bindFramebuffer(t.FRAMEBUFFER, null);
                        var s = t.RGBA,
                            a = t.UNSIGNED_BYTE,
                            c = new Uint8Array(4);
                        t.readPixels(0, 0, 1, 1, s, a, c), i = i && t.getError() === t.NO_ERROR
                    }
                    for (t.deleteTexture(n), t.deleteFramebuffer(r), t.bindFramebuffer(t.FRAMEBUFFER, null); !i && t.getError() !== t.NO_ERROR;);
                    return i
                }, e.prototype._getWebGLTextureType = function(t) {
                    if (1 === this._webGLVersion) {
                        switch (t) {
                            case e.TEXTURETYPE_FLOAT:
                                return this._gl.FLOAT;
                            case e.TEXTURETYPE_HALF_FLOAT:
                                return this._gl.HALF_FLOAT_OES;
                            case e.TEXTURETYPE_UNSIGNED_BYTE:
                                return this._gl.UNSIGNED_BYTE
                        }
                        return this._gl.UNSIGNED_BYTE
                    }
                    switch (t) {
                        case e.TEXTURETYPE_BYTE:
                            return this._gl.BYTE;
                        case e.TEXTURETYPE_UNSIGNED_BYTE:
                            return this._gl.UNSIGNED_BYTE;
                        case e.TEXTURETYPE_SHORT:
                            return this._gl.SHORT;
                        case e.TEXTURETYPE_UNSIGNED_SHORT:
                            return this._gl.UNSIGNED_SHORT;
                        case e.TEXTURETYPE_INT:
                            return this._gl.INT;
                        case e.TEXTURETYPE_UNSIGNED_INTEGER:
                            return this._gl.UNSIGNED_INT;
                        case e.TEXTURETYPE_FLOAT:
                            return this._gl.FLOAT;
                        case e.TEXTURETYPE_HALF_FLOAT:
                            return this._gl.HALF_FLOAT;
                        case e.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4:
                            return this._gl.UNSIGNED_SHORT_4_4_4_4;
                        case e.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1:
                            return this._gl.UNSIGNED_SHORT_5_5_5_1;
                        case e.TEXTURETYPE_UNSIGNED_SHORT_5_6_5:
                            return this._gl.UNSIGNED_SHORT_5_6_5;
                        case e.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV:
                            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
                        case e.TEXTURETYPE_UNSIGNED_INT_24_8:
                            return this._gl.UNSIGNED_INT_24_8;
                        case e.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV:
                            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
                        case e.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV:
                            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
                        case e.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV:
                            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
                    }
                    return this._gl.UNSIGNED_BYTE
                }, e.prototype._getInternalFormat = function(t) {
                    var i = this._gl.RGBA;
                    switch (t) {
                        case e.TEXTUREFORMAT_ALPHA:
                            i = this._gl.ALPHA;
                            break;
                        case e.TEXTUREFORMAT_LUMINANCE:
                            i = this._gl.LUMINANCE;
                            break;
                        case e.TEXTUREFORMAT_LUMINANCE_ALPHA:
                            i = this._gl.LUMINANCE_ALPHA;
                            break;
                        case e.TEXTUREFORMAT_RED:
                            i = this._gl.RED;
                            break;
                        case e.TEXTUREFORMAT_RG:
                            i = this._gl.RG;
                            break;
                        case e.TEXTUREFORMAT_RGB:
                            i = this._gl.RGB;
                            break;
                        case e.TEXTUREFORMAT_RGBA:
                            i = this._gl.RGBA
                    }
                    if (this._webGLVersion > 1) switch (t) {
                        case e.TEXTUREFORMAT_RED_INTEGER:
                            i = this._gl.RED_INTEGER;
                            break;
                        case e.TEXTUREFORMAT_RG_INTEGER:
                            i = this._gl.RG_INTEGER;
                            break;
                        case e.TEXTUREFORMAT_RGB_INTEGER:
                            i = this._gl.RGB_INTEGER;
                            break;
                        case e.TEXTUREFORMAT_RGBA_INTEGER:
                            i = this._gl.RGBA_INTEGER
                    }
                    return i
                }, e.prototype._getRGBABufferInternalSizedFormat = function(t, i) {
                    if (1 === this._webGLVersion) {
                        if (void 0 !== i) switch (i) {
                            case e.TEXTUREFORMAT_ALPHA:
                                return this._gl.ALPHA;
                            case e.TEXTUREFORMAT_LUMINANCE:
                                return this._gl.LUMINANCE;
                            case e.TEXTUREFORMAT_LUMINANCE_ALPHA:
                                return this._gl.LUMINANCE_ALPHA
                        }
                        return this._gl.RGBA
                    }
                    switch (t) {
                        case e.TEXTURETYPE_BYTE:
                            switch (i) {
                                case e.TEXTUREFORMAT_RED:
                                    return this._gl.R8_SNORM;
                                case e.TEXTUREFORMAT_RG:
                                    return this._gl.RG8_SNORM;
                                case e.TEXTUREFORMAT_RGB:
                                    return this._gl.RGB8_SNORM;
                                case e.TEXTUREFORMAT_RED_INTEGER:
                                    return this._gl.R8I;
                                case e.TEXTUREFORMAT_RG_INTEGER:
                                    return this._gl.RG8I;
                                case e.TEXTUREFORMAT_RGB_INTEGER:
                                    return this._gl.RGB8I;
                                case e.TEXTUREFORMAT_RGBA_INTEGER:
                                    return this._gl.RGBA8I;
                                default:
                                    return this._gl.RGBA8_SNORM
                            }
                        case e.TEXTURETYPE_UNSIGNED_BYTE:
                            switch (i) {
                                case e.TEXTUREFORMAT_RED:
                                    return this._gl.R8;
                                case e.TEXTUREFORMAT_RG:
                                    return this._gl.RG8;
                                case e.TEXTUREFORMAT_RGB:
                                    return this._gl.RGB8;
                                case e.TEXTUREFORMAT_RGBA:
                                    return this._gl.RGBA8;
                                case e.TEXTUREFORMAT_RED_INTEGER:
                                    return this._gl.R8UI;
                                case e.TEXTUREFORMAT_RG_INTEGER:
                                    return this._gl.RG8UI;
                                case e.TEXTUREFORMAT_RGB_INTEGER:
                                    return this._gl.RGB8UI;
                                case e.TEXTUREFORMAT_RGBA_INTEGER:
                                    return this._gl.RGBA8UI;
                                case e.TEXTUREFORMAT_ALPHA:
                                    return this._gl.ALPHA;
                                case e.TEXTUREFORMAT_LUMINANCE:
                                    return this._gl.LUMINANCE;
                                case e.TEXTUREFORMAT_LUMINANCE_ALPHA:
                                    return this._gl.LUMINANCE_ALPHA;
                                default:
                                    return this._gl.RGBA8
                            }
                        case e.TEXTURETYPE_SHORT:
                            switch (i) {
                                case e.TEXTUREFORMAT_RED_INTEGER:
                                    return this._gl.R16I;
                                case e.TEXTUREFORMAT_RG_INTEGER:
                                    return this._gl.RG16I;
                                case e.TEXTUREFORMAT_RGB_INTEGER:
                                    return this._gl.RGB16I;
                                case e.TEXTUREFORMAT_RGBA_INTEGER:
                                default:
                                    return this._gl.RGBA16I
                            }
                        case e.TEXTURETYPE_UNSIGNED_SHORT:
                            switch (i) {
                                case e.TEXTUREFORMAT_RED_INTEGER:
                                    return this._gl.R16UI;
                                case e.TEXTUREFORMAT_RG_INTEGER:
                                    return this._gl.RG16UI;
                                case e.TEXTUREFORMAT_RGB_INTEGER:
                                    return this._gl.RGB16UI;
                                case e.TEXTUREFORMAT_RGBA_INTEGER:
                                default:
                                    return this._gl.RGBA16UI
                            }
                        case e.TEXTURETYPE_INT:
                            switch (i) {
                                case e.TEXTUREFORMAT_RED_INTEGER:
                                    return this._gl.R32I;
                                case e.TEXTUREFORMAT_RG_INTEGER:
                                    return this._gl.RG32I;
                                case e.TEXTUREFORMAT_RGB_INTEGER:
                                    return this._gl.RGB32I;
                                case e.TEXTUREFORMAT_RGBA_INTEGER:
                                default:
                                    return this._gl.RGBA32I
                            }
                        case e.TEXTURETYPE_UNSIGNED_INTEGER:
                            switch (i) {
                                case e.TEXTUREFORMAT_RED_INTEGER:
                                    return this._gl.R32UI;
                                case e.TEXTUREFORMAT_RG_INTEGER:
                                    return this._gl.RG32UI;
                                case e.TEXTUREFORMAT_RGB_INTEGER:
                                    return this._gl.RGB32UI;
                                case e.TEXTUREFORMAT_RGBA_INTEGER:
                                default:
                                    return this._gl.RGBA32UI
                            }
                        case e.TEXTURETYPE_FLOAT:
                            switch (i) {
                                case e.TEXTUREFORMAT_RED:
                                    return this._gl.R32F;
                                case e.TEXTUREFORMAT_RG:
                                    return this._gl.RG32F;
                                case e.TEXTUREFORMAT_RGB:
                                    return this._gl.RGB32F;
                                case e.TEXTUREFORMAT_RGBA:
                                default:
                                    return this._gl.RGBA32F
                            }
                        case e.TEXTURETYPE_HALF_FLOAT:
                            switch (i) {
                                case e.TEXTUREFORMAT_RED:
                                    return this._gl.R16F;
                                case e.TEXTUREFORMAT_RG:
                                    return this._gl.RG16F;
                                case e.TEXTUREFORMAT_RGB:
                                    return this._gl.RGB16F;
                                case e.TEXTUREFORMAT_RGBA:
                                default:
                                    return this._gl.RGBA16F
                            }
                        case e.TEXTURETYPE_UNSIGNED_SHORT_5_6_5:
                            return this._gl.RGB565;
                        case e.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV:
                            return this._gl.R11F_G11F_B10F;
                        case e.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV:
                            return this._gl.RGB9_E5;
                        case e.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4:
                            return this._gl.RGBA4;
                        case e.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1:
                            return this._gl.RGB5_A1;
                        case e.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV:
                            switch (i) {
                                case e.TEXTUREFORMAT_RGBA:
                                    return this._gl.RGB10_A2;
                                case e.TEXTUREFORMAT_RGBA_INTEGER:
                                    return this._gl.RGB10_A2UI;
                                default:
                                    return this._gl.RGB10_A2
                            }
                    }
                    return this._gl.RGBA8
                }, e.prototype._getRGBAMultiSampleBufferFormat = function(t) {
                    return t === e.TEXTURETYPE_FLOAT ? this._gl.RGBA32F : t === e.TEXTURETYPE_HALF_FLOAT ? this._gl.RGBA16F : this._gl.RGBA8
                }, e.prototype._loadFile = function(e, t, i, n, r, o) {
                    var s = this,
                        a = c.h.LoadFile(e, t, i, n, r, o);
                    return this._activeRequests.push(a), a.onCompleteObservable.add(function(e) {
                        s._activeRequests.splice(s._activeRequests.indexOf(e), 1)
                    }), a
                }, e.prototype._loadFileAsync = function(e, t, i) {
                    var n = this;
                    return new Promise(function(r, o) {
                        n._loadFile(e, function(e) {
                            r(e)
                        }, void 0, t, i, function(e, t) {
                            o(t)
                        })
                    })
                }, e.isSupported = function() {
                    try {
                        var e = document.createElement("canvas");
                        return null != (e.getContext("webgl") || e.getContext("experimental-webgl")) && !!window.WebGLRenderingContext
                    } catch (e) {
                        return !1
                    }
                }, e.ExceptionList = [{
                    key: "Chrome/63.0",
                    capture: "63\\.0\\.3239\\.(\\d+)",
                    captureConstraint: 108,
                    targets: ["uniformBuffer"]
                }, {
                    key: "Firefox/58",
                    capture: null,
                    captureConstraint: null,
                    targets: ["uniformBuffer"]
                }, {
                    key: "Firefox/59",
                    capture: null,
                    captureConstraint: null,
                    targets: ["uniformBuffer"]
                }, {
                    key: "Chrome/72.+?Mobile",
                    capture: null,
                    captureConstraint: null,
                    targets: ["vao"]
                }, {
                    key: "Chrome/73.+?Mobile",
                    capture: null,
                    captureConstraint: null,
                    targets: ["vao"]
                }, {
                    key: "Chrome/74.+?Mobile",
                    capture: null,
                    captureConstraint: null,
                    targets: ["vao"]
                }, {
                    key: "Mac OS.+Chrome/71",
                    capture: null,
                    captureConstraint: null,
                    targets: ["vao"]
                }, {
                    key: "Mac OS.+Chrome/72",
                    capture: null,
                    captureConstraint: null,
                    targets: ["vao"]
                }], e._TextureLoaders = [], e.ALPHA_DISABLE = _.a.ALPHA_DISABLE, e.ALPHA_ADD = _.a.ALPHA_ADD, e.ALPHA_COMBINE = _.a.ALPHA_COMBINE, e.ALPHA_SUBTRACT = _.a.ALPHA_SUBTRACT, e.ALPHA_MULTIPLY = _.a.ALPHA_MULTIPLY, e.ALPHA_MAXIMIZED = _.a.ALPHA_MAXIMIZED, e.ALPHA_ONEONE = _.a.ALPHA_ONEONE, e.ALPHA_PREMULTIPLIED = _.a.ALPHA_PREMULTIPLIED, e.ALPHA_PREMULTIPLIED_PORTERDUFF = _.a.ALPHA_PREMULTIPLIED_PORTERDUFF, e.ALPHA_INTERPOLATE = _.a.ALPHA_INTERPOLATE, e.ALPHA_SCREENMODE = _.a.ALPHA_SCREENMODE, e.DELAYLOADSTATE_NONE = _.a.DELAYLOADSTATE_NONE, e.DELAYLOADSTATE_LOADED = _.a.DELAYLOADSTATE_LOADED, e.DELAYLOADSTATE_LOADING = _.a.DELAYLOADSTATE_LOADING, e.DELAYLOADSTATE_NOTLOADED = _.a.DELAYLOADSTATE_NOTLOADED, e.NEVER = _.a.NEVER, e.ALWAYS = _.a.ALWAYS, e.LESS = _.a.LESS, e.EQUAL = _.a.EQUAL, e.LEQUAL = _.a.LEQUAL, e.GREATER = _.a.GREATER, e.GEQUAL = _.a.GEQUAL, e.NOTEQUAL = _.a.NOTEQUAL, e.KEEP = _.a.KEEP, e.REPLACE = _.a.REPLACE, e.INCR = _.a.INCR, e.DECR = _.a.DECR, e.INVERT = _.a.INVERT, e.INCR_WRAP = _.a.INCR_WRAP, e.DECR_WRAP = _.a.DECR_WRAP, e.TEXTURE_CLAMP_ADDRESSMODE = _.a.TEXTURE_CLAMP_ADDRESSMODE, e.TEXTURE_WRAP_ADDRESSMODE = _.a.TEXTURE_WRAP_ADDRESSMODE, e.TEXTURE_MIRROR_ADDRESSMODE = _.a.TEXTURE_MIRROR_ADDRESSMODE, e.TEXTUREFORMAT_ALPHA = _.a.TEXTUREFORMAT_ALPHA, e.TEXTUREFORMAT_LUMINANCE = _.a.TEXTUREFORMAT_LUMINANCE, e.TEXTUREFORMAT_LUMINANCE_ALPHA = _.a.TEXTUREFORMAT_LUMINANCE_ALPHA, e.TEXTUREFORMAT_RGB = _.a.TEXTUREFORMAT_RGB, e.TEXTUREFORMAT_RGBA = _.a.TEXTUREFORMAT_RGBA, e.TEXTUREFORMAT_RED = _.a.TEXTUREFORMAT_RED, e.TEXTUREFORMAT_R = _.a.TEXTUREFORMAT_R, e.TEXTUREFORMAT_RG = _.a.TEXTUREFORMAT_RG, e.TEXTUREFORMAT_RED_INTEGER = _.a.TEXTUREFORMAT_RED_INTEGER, e.TEXTUREFORMAT_R_INTEGER = _.a.TEXTUREFORMAT_R_INTEGER, e.TEXTUREFORMAT_RG_INTEGER = _.a.TEXTUREFORMAT_RG_INTEGER, e.TEXTUREFORMAT_RGB_INTEGER = _.a.TEXTUREFORMAT_RGB_INTEGER, e.TEXTUREFORMAT_RGBA_INTEGER = _.a.TEXTUREFORMAT_RGBA_INTEGER, e.TEXTURETYPE_UNSIGNED_BYTE = _.a.TEXTURETYPE_UNSIGNED_BYTE, e.TEXTURETYPE_UNSIGNED_INT = _.a.TEXTURETYPE_UNSIGNED_INT, e.TEXTURETYPE_FLOAT = _.a.TEXTURETYPE_FLOAT, e.TEXTURETYPE_HALF_FLOAT = _.a.TEXTURETYPE_HALF_FLOAT, e.TEXTURETYPE_BYTE = _.a.TEXTURETYPE_BYTE, e.TEXTURETYPE_SHORT = _.a.TEXTURETYPE_SHORT, e.TEXTURETYPE_UNSIGNED_SHORT = _.a.TEXTURETYPE_UNSIGNED_SHORT, e.TEXTURETYPE_INT = _.a.TEXTURETYPE_INT, e.TEXTURETYPE_UNSIGNED_INTEGER = _.a.TEXTURETYPE_UNSIGNED_INTEGER, e.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = _.a.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4, e.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = _.a.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1, e.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = _.a.TEXTURETYPE_UNSIGNED_SHORT_5_6_5, e.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = _.a.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV, e.TEXTURETYPE_UNSIGNED_INT_24_8 = _.a.TEXTURETYPE_UNSIGNED_INT_24_8, e.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = _.a.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV, e.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = _.a.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV, e.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = _.a.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV, e.TEXTURE_NEAREST_SAMPLINGMODE = _.a.TEXTURE_NEAREST_SAMPLINGMODE, e.TEXTURE_BILINEAR_SAMPLINGMODE = _.a.TEXTURE_BILINEAR_SAMPLINGMODE, e.TEXTURE_TRILINEAR_SAMPLINGMODE = _.a.TEXTURE_TRILINEAR_SAMPLINGMODE, e.TEXTURE_NEAREST_NEAREST_MIPLINEAR = _.a.TEXTURE_NEAREST_NEAREST_MIPLINEAR, e.TEXTURE_LINEAR_LINEAR_MIPNEAREST = _.a.TEXTURE_LINEAR_LINEAR_MIPNEAREST, e.TEXTURE_LINEAR_LINEAR_MIPLINEAR = _.a.TEXTURE_LINEAR_LINEAR_MIPLINEAR, e.TEXTURE_NEAREST_NEAREST_MIPNEAREST = _.a.TEXTURE_NEAREST_NEAREST_MIPNEAREST, e.TEXTURE_NEAREST_LINEAR_MIPNEAREST = _.a.TEXTURE_NEAREST_LINEAR_MIPNEAREST, e.TEXTURE_NEAREST_LINEAR_MIPLINEAR = _.a.TEXTURE_NEAREST_LINEAR_MIPLINEAR, e.TEXTURE_NEAREST_LINEAR = _.a.TEXTURE_NEAREST_LINEAR, e.TEXTURE_NEAREST_NEAREST = _.a.TEXTURE_NEAREST_NEAREST, e.TEXTURE_LINEAR_NEAREST_MIPNEAREST = _.a.TEXTURE_LINEAR_NEAREST_MIPNEAREST, e.TEXTURE_LINEAR_NEAREST_MIPLINEAR = _.a.TEXTURE_LINEAR_NEAREST_MIPLINEAR, e.TEXTURE_LINEAR_LINEAR = _.a.TEXTURE_LINEAR_LINEAR, e.TEXTURE_LINEAR_NEAREST = _.a.TEXTURE_LINEAR_NEAREST, e.TEXTURE_EXPLICIT_MODE = _.a.TEXTURE_EXPLICIT_MODE, e.TEXTURE_SPHERICAL_MODE = _.a.TEXTURE_SPHERICAL_MODE, e.TEXTURE_PLANAR_MODE = _.a.TEXTURE_PLANAR_MODE, e.TEXTURE_CUBIC_MODE = _.a.TEXTURE_CUBIC_MODE, e.TEXTURE_PROJECTION_MODE = _.a.TEXTURE_PROJECTION_MODE, e.TEXTURE_SKYBOX_MODE = _.a.TEXTURE_SKYBOX_MODE, e.TEXTURE_INVCUBIC_MODE = _.a.TEXTURE_INVCUBIC_MODE, e.TEXTURE_EQUIRECTANGULAR_MODE = _.a.TEXTURE_EQUIRECTANGULAR_MODE, e.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = _.a.TEXTURE_FIXED_EQUIRECTANGULAR_MODE, e.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = _.a.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE, e.SCALEMODE_FLOOR = _.a.SCALEMODE_FLOOR, e.SCALEMODE_NEAREST = _.a.SCALEMODE_NEAREST, e.SCALEMODE_CEILING = _.a.SCALEMODE_CEILING, e.CollisionsEpsilon = .001, e._RescalePostProcessFactory = null, e
            }()
    }, function(e, t, i) {
        "use strict";
        i.d(t, "b", function() {
            return P
        }), i.d(t, "c", function() {
            return C
        }), i.d(t, "a", function() {
            return O
        });
        var n = i(1),
            r = i(8),
            o = i(9),
            s = i(32),
            a = i(29),
            c = i(0),
            l = i(25),
            u = i(4),
            h = i(13),
            d = i(57),
            f = i(24),
            p = i(49),
            _ = i(43),
            g = i(20),
            m = i(66),
            v = i(55),
            y = i(3),
            b = i(2),
            T = i(6),
            E = i(22),
            A = i(19),
            x = i(14),
            R = i(110),
            P = function() {
                return function() {}
            }(),
            S = function() {
                return function() {
                    this.visibleInstances = {}, this.batchCache = new C, this.instancesBufferSize = 2048
                }
            }(),
            C = function() {
                return function() {
                    this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = new Array, this.hardwareInstancedRendering = new Array
                }
            }(),
            M = function() {
                return function() {
                    this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._morphTargetManager = null
                }
            }(),
            O = function(e) {
                function t(i, n, r, o, c, l) {
                    void 0 === n && (n = null), void 0 === r && (r = null), void 0 === o && (o = null), void 0 === l && (l = !0);
                    var u = e.call(this, i, n) || this;
                    if (u._internalMeshDataInfo = new M, u.delayLoadState = y.a.DELAYLOADSTATE_NONE, u.instances = new Array, u._creationDataStorage = null, u._geometry = null, u._instanceDataStorage = new S, u._effectiveMaterial = null, u._shouldGenerateFlatShading = !1, u._originalBuilderSideOrientation = t.DEFAULTSIDE, u.overrideMaterialSideOrientation = null, n = u.getScene(), o) {
                        if (o._geometry && o._geometry.applyToMesh(u), s.a.DeepCopy(o, u, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "onBeforeDrawObservable", "onBeforeRenderObservable", "onAfterRenderObservable", "onBeforeDraw", "onAfterWorldMatrixUpdateObservable", "onCollideObservable", "onCollisionPositionChangeObservable", "onRebuildObservable", "onDisposeObservable"], ["_poseMatrix"]), u._internalMeshDataInfo._source = o, n.useClonedMeshhMap && (o._internalMeshDataInfo.meshMap || (o._internalMeshDataInfo.meshMap = {}), o._internalMeshDataInfo.meshMap[u.uniqueId] = u), u._originalBuilderSideOrientation = o._originalBuilderSideOrientation, u._creationDataStorage = o._creationDataStorage, o._ranges) {
                            var h = o._ranges;
                            for (var i in h) h.hasOwnProperty(i) && h[i] && u.createAnimationRange(i, h[i].from, h[i].to)
                        }
                        var d;
                        if (o.metadata && o.metadata.clone ? u.metadata = o.metadata.clone() : u.metadata = o.metadata, a.a && a.a.HasTags(o) && a.a.AddTagsTo(u, a.a.GetTags(o, !0)), u.parent = o.parent, u.setPivotMatrix(o.getPivotMatrix()), u.id = i + "." + o.id, u.material = o.material, !c)
                            for (var f = o.getDescendants(!0), p = 0; p < f.length; p++) {
                                var _ = f[p];
                                _.clone && _.clone(i + "." + _.name, u)
                            }
                        if (n.getPhysicsEngine) {
                            var g = n.getPhysicsEngine();
                            if (l && g) {
                                var m = g.getImpostorForPhysicsObject(o);
                                m && (u.physicsImpostor = m.clone(u))
                            }
                        }
                        for (d = 0; d < n.particleSystems.length; d++) {
                            var v = n.particleSystems[d];
                            v.emitter === o && v.clone(v.name, u)
                        }
                        u.refreshBoundingInfo(), u.computeWorldMatrix(!0)
                    }
                    return null !== r && (u.parent = r), u._instanceDataStorage.hardwareInstancedRendering = u.getEngine().getCaps().instancedArrays, u
                }
                return n.d(t, e), t._GetDefaultSideOrientation = function(e) {
                    return e || t.FRONTSIDE
                }, Object.defineProperty(t.prototype, "onBeforeRenderObservable", {
                    get: function() {
                        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new r.c), this._internalMeshDataInfo._onBeforeRenderObservable
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onBeforeBindObservable", {
                    get: function() {
                        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new r.c), this._internalMeshDataInfo._onBeforeBindObservable
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onAfterRenderObservable", {
                    get: function() {
                        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new r.c), this._internalMeshDataInfo._onAfterRenderObservable
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onBeforeDrawObservable", {
                    get: function() {
                        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new r.c), this._internalMeshDataInfo._onBeforeDrawObservable
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "onBeforeDraw", {
                    set: function(e) {
                        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "morphTargetManager", {
                    get: function() {
                        return this._internalMeshDataInfo._morphTargetManager
                    },
                    set: function(e) {
                        this._internalMeshDataInfo._morphTargetManager !== e && (this._internalMeshDataInfo._morphTargetManager = e, this._syncGeometryWithMorphTargetManager())
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "source", {
                    get: function() {
                        return this._internalMeshDataInfo._source
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isUnIndexed", {
                    get: function() {
                        return this._unIndexed
                    },
                    set: function(e) {
                        this._unIndexed !== e && (this._unIndexed = e, this._markSubMeshesAsAttributesDirty())
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getClassName = function() {
                    return "Mesh"
                }, Object.defineProperty(t.prototype, "_isMesh", {
                    get: function() {
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.toString = function(t) {
                    var i = e.prototype.toString.call(this, t);
                    if (i += ", n vertices: " + this.getTotalVertices(), i += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
                        for (var n = 0; n < this.animations.length; n++) i += ", animation[0]: " + this.animations[n].toString(t);
                    if (t)
                        if (this._geometry) {
                            var r = this.getIndices(),
                                o = this.getVerticesData(u.b.PositionKind);
                            o && r && (i += ", flat shading: " + (o.length / 3 === r.length ? "YES" : "NO"))
                        } else i += ", flat shading: UNKNOWN";
                    return i
                }, t.prototype._unBindEffect = function() {
                    e.prototype._unBindEffect.call(this);
                    for (var t = 0, i = this.instances; t < i.length; t++) {
                        i[t]._unBindEffect()
                    }
                }, Object.defineProperty(t.prototype, "hasLODLevels", {
                    get: function() {
                        return this._internalMeshDataInfo._LODLevels.length > 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getLODLevels = function() {
                    return this._internalMeshDataInfo._LODLevels
                }, t.prototype._sortLODLevels = function() {
                    this._internalMeshDataInfo._LODLevels.sort(function(e, t) {
                        return e.distance < t.distance ? 1 : e.distance > t.distance ? -1 : 0
                    })
                }, t.prototype.addLODLevel = function(e, t) {
                    if (t && t._masterMesh) return T.a.Warn("You cannot use a mesh as LOD level twice"), this;
                    var i = new R.a(e, t);
                    return this._internalMeshDataInfo._LODLevels.push(i), t && (t._masterMesh = this), this._sortLODLevels(), this
                }, t.prototype.getLODLevelAtDistance = function(e) {
                    for (var t = this._internalMeshDataInfo, i = 0; i < t._LODLevels.length; i++) {
                        var n = t._LODLevels[i];
                        if (n.distance === e) return n.mesh
                    }
                    return null
                }, t.prototype.removeLODLevel = function(e) {
                    for (var t = this._internalMeshDataInfo, i = 0; i < t._LODLevels.length; i++) t._LODLevels[i].mesh === e && (t._LODLevels.splice(i, 1), e && (e._masterMesh = null));
                    return this._sortLODLevels(), this
                }, t.prototype.getLOD = function(e, t) {
                    var i, n = this._internalMeshDataInfo;
                    if (!n._LODLevels || 0 === n._LODLevels.length) return this;
                    t ? i = t : i = this.getBoundingInfo().boundingSphere;
                    var r = i.centerWorld.subtract(e.globalPosition).length();
                    if (n._LODLevels[n._LODLevels.length - 1].distance > r) return this.onLODLevelSelection && this.onLODLevelSelection(r, this, n._LODLevels[n._LODLevels.length - 1].mesh), this;
                    for (var o = 0; o < n._LODLevels.length; o++) {
                        var s = n._LODLevels[o];
                        if (s.distance < r) return s.mesh && (s.mesh._preActivate(), s.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)), this.onLODLevelSelection && this.onLODLevelSelection(r, this, s.mesh), s.mesh
                    }
                    return this.onLODLevelSelection && this.onLODLevelSelection(r, this, this), this
                }, Object.defineProperty(t.prototype, "geometry", {
                    get: function() {
                        return this._geometry
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getTotalVertices = function() {
                    return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
                }, t.prototype.getVerticesData = function(e, t, i) {
                    return this._geometry ? this._geometry.getVerticesData(e, t, i) : null
                }, t.prototype.getVertexBuffer = function(e) {
                    return this._geometry ? this._geometry.getVertexBuffer(e) : null
                }, t.prototype.isVerticesDataPresent = function(e) {
                    return this._geometry ? this._geometry.isVerticesDataPresent(e) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(e)
                }, t.prototype.isVertexBufferUpdatable = function(e) {
                    return this._geometry ? this._geometry.isVertexBufferUpdatable(e) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(e)
                }, t.prototype.getVerticesDataKinds = function() {
                    if (!this._geometry) {
                        var e = new Array;
                        return this._delayInfo && this._delayInfo.forEach(function(t) {
                            e.push(t)
                        }), e
                    }
                    return this._geometry.getVerticesDataKinds()
                }, t.prototype.getTotalIndices = function() {
                    return this._geometry ? this._geometry.getTotalIndices() : 0
                }, t.prototype.getIndices = function(e, t) {
                    return this._geometry ? this._geometry.getIndices(e, t) : []
                }, Object.defineProperty(t.prototype, "isBlocked", {
                    get: function() {
                        return null !== this._masterMesh && void 0 !== this._masterMesh
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.isReady = function(t, i) {
                    if (void 0 === t && (t = !1), void 0 === i && (i = !1), this.delayLoadState === y.a.DELAYLOADSTATE_LOADING) return !1;
                    if (!e.prototype.isReady.call(this, t)) return !1;
                    if (!this.subMeshes || 0 === this.subMeshes.length) return !0;
                    if (!t) return !0;
                    var n = this.getEngine(),
                        r = this.getScene(),
                        o = i || n.getCaps().instancedArrays && this.instances.length > 0;
                    this.computeWorldMatrix();
                    var s = this.material || r.defaultMaterial;
                    if (s)
                        if (s._storeEffectOnSubMeshes)
                            for (var a = 0, c = this.subMeshes; a < c.length; a++) {
                                var l = (_ = c[a]).getMaterial();
                                if (l)
                                    if (l._storeEffectOnSubMeshes) {
                                        if (!l.isReadyForSubMesh(this, _, o)) return !1
                                    } else if (!l.isReady(this, o)) return !1
                            } else if (!s.isReady(this, o)) return !1;
                    for (var u = 0, h = this.lightSources; u < h.length; u++) {
                        var d = h[u].getShadowGenerator();
                        if (d)
                            for (var f = 0, p = this.subMeshes; f < p.length; f++) {
                                var _ = p[f];
                                if (!d.isReady(_, o)) return !1
                            }
                    }
                    for (var g = 0, m = this._internalMeshDataInfo._LODLevels; g < m.length; g++) {
                        var v = m[g];
                        if (v.mesh && !v.mesh.isReady(o)) return !1
                    }
                    return !0
                }, Object.defineProperty(t.prototype, "areNormalsFrozen", {
                    get: function() {
                        return this._internalMeshDataInfo._areNormalsFrozen
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.freezeNormals = function() {
                    return this._internalMeshDataInfo._areNormalsFrozen = !0, this
                }, t.prototype.unfreezeNormals = function() {
                    return this._internalMeshDataInfo._areNormalsFrozen = !1, this
                }, Object.defineProperty(t.prototype, "overridenInstanceCount", {
                    set: function(e) {
                        this._instanceDataStorage.overridenInstanceCount = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype._preActivate = function() {
                    var e = this._internalMeshDataInfo,
                        t = this.getScene().getRenderId();
                    return e._preActivateId === t ? this : (e._preActivateId = t, this._instanceDataStorage.visibleInstances = null, this)
                }, t.prototype._preActivateForIntermediateRendering = function(e) {
                    return this._instanceDataStorage.visibleInstances && (this._instanceDataStorage.visibleInstances.intermediateDefaultRenderId = e), this
                }, t.prototype._registerInstanceForRenderId = function(e, t) {
                    return this._instanceDataStorage.visibleInstances || (this._instanceDataStorage.visibleInstances = {
                        defaultRenderId: t,
                        selfDefaultRenderId: this._renderId
                    }), this._instanceDataStorage.visibleInstances[t] || (this._instanceDataStorage.visibleInstances[t] = new Array), this._instanceDataStorage.visibleInstances[t].push(e), this
                }, t.prototype.refreshBoundingInfo = function(e) {
                    if (void 0 === e && (e = !1), this._boundingInfo && this._boundingInfo.isLocked) return this;
                    var t = this.geometry ? this.geometry.boundingBias : null;
                    return this._refreshBoundingInfo(this._getPositionData(e), t), this
                }, t.prototype._createGlobalSubMesh = function(e) {
                    var t = this.getTotalVertices();
                    if (!t || !this.getIndices()) return null;
                    if (this.subMeshes && this.subMeshes.length > 0) {
                        var i = this.getIndices();
                        if (!i) return null;
                        var n = i.length,
                            r = !1;
                        if (e) r = !0;
                        else
                            for (var o = 0, s = this.subMeshes; o < s.length; o++) {
                                var a = s[o];
                                if (a.indexStart + a.indexCount >= n) {
                                    r = !0;
                                    break
                                }
                                if (a.verticesStart + a.verticesCount >= t) {
                                    r = !0;
                                    break
                                }
                            }
                        if (!r) return this.subMeshes[0]
                    }
                    return this.releaseSubMeshes(), new p.b(0, 0, t, 0, this.getTotalIndices(), this)
                }, t.prototype.subdivide = function(e) {
                    if (!(e < 1)) {
                        for (var t = this.getTotalIndices(), i = t / e | 0, n = 0; i % 3 != 0;) i++;
                        this.releaseSubMeshes();
                        for (var r = 0; r < e && !(n >= t); r++) p.b.CreateFromIndices(0, n, Math.min(i, t - n), this), n += i;
                        this.synchronizeInstances()
                    }
                }, t.prototype.setVerticesData = function(e, t, i, n) {
                    if (void 0 === i && (i = !1), this._geometry) this._geometry.setVerticesData(e, t, i, n);
                    else {
                        var r = new h.a;
                        r.set(t, e);
                        var o = this.getScene();
                        new d.a(d.a.RandomId(), o, r, i, this)
                    }
                    return this
                }, t.prototype.markVerticesDataAsUpdatable = function(e, t) {
                    void 0 === t && (t = !0);
                    var i = this.getVertexBuffer(e);
                    i && i.isUpdatable() !== t && this.setVerticesData(e, this.getVerticesData(e), t)
                }, t.prototype.setVerticesBuffer = function(e) {
                    return this._geometry || (this._geometry = d.a.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(e), this
                }, t.prototype.updateVerticesData = function(e, t, i, n) {
                    return this._geometry ? (n ? (this.makeGeometryUnique(), this.updateVerticesData(e, t, i, !1)) : this._geometry.updateVerticesData(e, t, i), this) : this
                }, t.prototype.updateMeshPositions = function(e, t) {
                    void 0 === t && (t = !0);
                    var i = this.getVerticesData(u.b.PositionKind);
                    if (!i) return this;
                    if (e(i), this.updateVerticesData(u.b.PositionKind, i, !1, !1), t) {
                        var n = this.getIndices(),
                            r = this.getVerticesData(u.b.NormalKind);
                        if (!r) return this;
                        h.a.ComputeNormals(i, n, r), this.updateVerticesData(u.b.NormalKind, r, !1, !1)
                    }
                    return this
                }, t.prototype.makeGeometryUnique = function() {
                    if (!this._geometry) return this;
                    var e = this._geometry,
                        t = this._geometry.copy(d.a.RandomId());
                    return e.releaseForMesh(this, !0), t.applyToMesh(this), this
                }, t.prototype.setIndices = function(e, t, i) {
                    if (void 0 === t && (t = null), void 0 === i && (i = !1), this._geometry) this._geometry.setIndices(e, t, i);
                    else {
                        var n = new h.a;
                        n.indices = e;
                        var r = this.getScene();
                        new d.a(d.a.RandomId(), r, n, i, this)
                    }
                    return this
                }, t.prototype.updateIndices = function(e, t, i) {
                    return void 0 === i && (i = !1), this._geometry ? (this._geometry.updateIndices(e, t, i), this) : this
                }, t.prototype.toLeftHanded = function() {
                    return this._geometry ? (this._geometry.toLeftHanded(), this) : this
                }, t.prototype._bind = function(e, t, i) {
                    if (!this._geometry) return this;
                    var n, r = this.getScene().getEngine();
                    if (this._unIndexed) n = null;
                    else switch (i) {
                        case g.a.PointFillMode:
                            n = null;
                            break;
                        case g.a.WireFrameFillMode:
                            n = e._getLinesIndexBuffer(this.getIndices(), r);
                            break;
                        default:
                        case g.a.TriangleFillMode:
                            n = this._geometry.getIndexBuffer()
                    }
                    return this._geometry._bind(t, n), this
                }, t.prototype._draw = function(e, t, i) {
                    if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
                    this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
                    var n = this.getScene().getEngine();
                    return this._unIndexed || t == g.a.PointFillMode ? n.drawArraysType(t, e.verticesStart, e.verticesCount, i) : t == g.a.WireFrameFillMode ? n.drawElementsType(t, 0, e._linesIndexCount, i) : n.drawElementsType(t, e.indexStart, e.indexCount, i), this
                }, t.prototype.registerBeforeRender = function(e) {
                    return this.onBeforeRenderObservable.add(e), this
                }, t.prototype.unregisterBeforeRender = function(e) {
                    return this.onBeforeRenderObservable.removeCallback(e), this
                }, t.prototype.registerAfterRender = function(e) {
                    return this.onAfterRenderObservable.add(e), this
                }, t.prototype.unregisterAfterRender = function(e) {
                    return this.onAfterRenderObservable.removeCallback(e), this
                }, t.prototype._getInstancesRenderList = function(e) {
                    if (this._instanceDataStorage.isFrozen && this._instanceDataStorage.previousBatch) return this._instanceDataStorage.previousBatch;
                    var t = this.getScene(),
                        i = t._isInIntermediateRendering(),
                        n = i ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
                        r = this._instanceDataStorage.batchCache;
                    if (r.mustReturn = !1, r.renderSelf[e] = !n && this.isEnabled() && this.isVisible, r.visibleInstances[e] = null, this._instanceDataStorage.visibleInstances) {
                        var o = this._instanceDataStorage.visibleInstances,
                            s = t.getRenderId(),
                            a = i ? o.intermediateDefaultRenderId : o.defaultRenderId;
                        r.visibleInstances[e] = o[s], !r.visibleInstances[e] && a && (r.visibleInstances[e] = o[a])
                    }
                    return r.hardwareInstancedRendering[e] = this._instanceDataStorage.hardwareInstancedRendering && null !== r.visibleInstances[e] && void 0 !== r.visibleInstances[e], this._instanceDataStorage.previousBatch = r, r
                }, t.prototype._renderWithInstances = function(e, t, i, n, r) {
                    var o = i.visibleInstances[e._id];
                    if (!o) return this;
                    for (var s = this._instanceDataStorage, a = s.instancesBufferSize, c = s.instancesBuffer, l = 16 * (o.length + 1) * 4; s.instancesBufferSize < l;) s.instancesBufferSize *= 2;
                    s.instancesData && a == s.instancesBufferSize || (s.instancesData = new Float32Array(s.instancesBufferSize / 4));
                    var h = 0,
                        d = 0,
                        f = this._effectiveMesh.getWorldMatrix();
                    if (i.renderSelf[e._id] && (f.copyToArray(s.instancesData, h), h += 16, d++), o)
                        for (var p = 0; p < o.length; p++) {
                            o[p].getWorldMatrix().copyToArray(s.instancesData, h), h += 16, d++
                        }
                    return c && a == s.instancesBufferSize ? c.updateDirectly(s.instancesData, 0, d) : (c && c.dispose(), c = new u.a(r, s.instancesData, !0, 16, !1, !0), s.instancesBuffer = c, this.setVerticesBuffer(c.createVertexBuffer("world0", 0, 4)), this.setVerticesBuffer(c.createVertexBuffer("world1", 4, 4)), this.setVerticesBuffer(c.createVertexBuffer("world2", 8, 4)), this.setVerticesBuffer(c.createVertexBuffer("world3", 12, 4))), this._bind(e, n, t), this._draw(e, t, d), r.unbindInstanceAttributes(), this
                }, t.prototype._processRendering = function(e, t, i, n, r, o, s) {
                    var a = this.getScene().getEngine();
                    if (r) this._renderWithInstances(e, i, n, t, a);
                    else {
                        n.renderSelf[e._id] && (o && o(!1, this._effectiveMesh.getWorldMatrix(), s), this._draw(e, i, this._instanceDataStorage.overridenInstanceCount));
                        var c = n.visibleInstances[e._id];
                        if (c)
                            for (var l = 0; l < c.length; l++) {
                                var u = c[l].getWorldMatrix();
                                o && o(!0, u, s), this._draw(e, i)
                            }
                    }
                    return this
                }, t.prototype._freeze = function() {
                    if (this._instanceDataStorage.isFrozen = !0, this.subMeshes)
                        for (var e = 0; e < this.subMeshes.length; e++) this._getInstancesRenderList(e)
                }, t.prototype._unFreeze = function() {
                    this._instanceDataStorage.isFrozen = !1
                }, t.prototype.render = function(e, t) {
                    var i = this.getScene();
                    if (i._isInIntermediateRendering() ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1, this._checkOcclusionQuery()) return this;
                    var n = this._getInstancesRenderList(e._id);
                    if (n.mustReturn) return this;
                    if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
                    this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
                    var r, o = i.getEngine(),
                        s = n.hardwareInstancedRendering[e._id],
                        a = this._instanceDataStorage,
                        c = e.getMaterial();
                    if (!c) return this;
                    if (!a.isFrozen || !this._effectiveMaterial || this._effectiveMaterial !== c)
                        if (this._effectiveMaterial = c, this._effectiveMaterial._storeEffectOnSubMeshes) {
                            if (!this._effectiveMaterial.isReadyForSubMesh(this, e, s)) return this
                        } else if (!this._effectiveMaterial.isReady(this, s)) return this;
                    t && o.setAlphaMode(this._effectiveMaterial.alphaMode);
                    for (var l = 0, u = i._beforeRenderingMeshStage; l < u.length; l++) {
                        u[l].action(this, e, n)
                    }
                    if (!(r = this._effectiveMaterial._storeEffectOnSubMeshes ? e.effect : this._effectiveMaterial.getEffect())) return this;
                    var h, d = this._effectiveMesh;
                    a.isFrozen ? h = a.sideOrientation : (null == (h = this.overrideMaterialSideOrientation) && (h = this._effectiveMaterial.sideOrientation, d._getWorldMatrixDeterminant() < 0 && (h = h === g.a.ClockWiseSideOrientation ? g.a.CounterClockWiseSideOrientation : g.a.ClockWiseSideOrientation)), a.sideOrientation = h);
                    var f = this._effectiveMaterial._preBind(r, h);
                    this._effectiveMaterial.forceDepthWrite && o.setDepthWrite(!0);
                    var p = i.forcePointsCloud ? g.a.PointFillMode : i.forceWireframe ? g.a.WireFrameFillMode : this._effectiveMaterial.fillMode;
                    this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), s || this._bind(e, r, p);
                    var _ = d.getWorldMatrix();
                    this._effectiveMaterial._storeEffectOnSubMeshes ? this._effectiveMaterial.bindForSubMesh(_, this, e) : this._effectiveMaterial.bind(_, this), !this._effectiveMaterial.backFaceCulling && this._effectiveMaterial.separateCullingPass && (o.setState(!0, this._effectiveMaterial.zOffset, !1, !f), this._processRendering(e, r, p, n, s, this._onBeforeDraw, this._effectiveMaterial), o.setState(!0, this._effectiveMaterial.zOffset, !1, f)), this._processRendering(e, r, p, n, s, this._onBeforeDraw, this._effectiveMaterial), this._effectiveMaterial.unbind();
                    for (var m = 0, v = i._afterRenderingMeshStage; m < v.length; m++) {
                        v[m].action(this, e, n)
                    }
                    return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), this
                }, t.prototype._onBeforeDraw = function(e, t, i) {
                    e && i && i.bindOnlyWorldMatrix(t)
                }, t.prototype.cleanMatrixWeights = function() {
                    this.isVerticesDataPresent(u.b.MatricesWeightsKind) && (this.isVerticesDataPresent(u.b.MatricesWeightsExtraKind) ? this.normalizeSkinWeightsAndExtra() : this.normalizeSkinFourWeights())
                }, t.prototype.normalizeSkinFourWeights = function() {
                    for (var e = this.getVerticesData(u.b.MatricesWeightsKind), t = e.length, i = 0; i < t; i += 4) {
                        var n = e[i] + e[i + 1] + e[i + 2] + e[i + 3];
                        if (0 === n) e[i] = 1;
                        else {
                            var r = 1 / n;
                            e[i] *= r, e[i + 1] *= r, e[i + 2] *= r, e[i + 3] *= r
                        }
                    }
                    this.setVerticesData(u.b.MatricesWeightsKind, e)
                }, t.prototype.normalizeSkinWeightsAndExtra = function() {
                    for (var e = this.getVerticesData(u.b.MatricesWeightsExtraKind), t = this.getVerticesData(u.b.MatricesWeightsKind), i = t.length, n = 0; n < i; n += 4) {
                        var r = t[n] + t[n + 1] + t[n + 2] + t[n + 3];
                        if (0 === (r += e[n] + e[n + 1] + e[n + 2] + e[n + 3])) t[n] = 1;
                        else {
                            var o = 1 / r;
                            t[n] *= o, t[n + 1] *= o, t[n + 2] *= o, t[n + 3] *= o, e[n] *= o, e[n + 1] *= o, e[n + 2] *= o, e[n + 3] *= o
                        }
                    }
                    this.setVerticesData(u.b.MatricesWeightsKind, t), this.setVerticesData(u.b.MatricesWeightsKind, e)
                }, t.prototype.validateSkinning = function() {
                    var e = this.getVerticesData(u.b.MatricesWeightsExtraKind),
                        t = this.getVerticesData(u.b.MatricesWeightsKind);
                    if (null === t || null == this.skeleton) return {
                        skinned: !1,
                        valid: !0,
                        report: "not skinned"
                    };
                    for (var i = t.length, n = 0, r = 0, o = 0, s = 0, a = null === e ? 4 : 8, c = new Array, l = 0; l <= a; l++) c[l] = 0;
                    for (l = 0; l < i; l += 4) {
                        for (var h = t[l], d = h, f = 0 === d ? 0 : 1, p = 1; p < a; p++) {
                            var _ = p < 4 ? t[l + p] : e[l + p - 4];
                            _ > h && n++, 0 !== _ && f++, d += _, h = _
                        }
                        if (c[f]++, f > o && (o = f), 0 === d) r++;
                        else {
                            var g = 1 / d,
                                m = 0;
                            for (p = 0; p < a; p++) m += p < 4 ? Math.abs(t[l + p] - t[l + p] * g) : Math.abs(e[l + p - 4] - e[l + p - 4] * g);
                            m > .001 && s++
                        }
                    }
                    var v = this.skeleton.bones.length,
                        y = this.getVerticesData(u.b.MatricesIndicesKind),
                        b = this.getVerticesData(u.b.MatricesIndicesExtraKind),
                        T = 0;
                    for (l = 0; l < i; l++)
                        for (p = 0; p < a; p++) {
                            var E = p < 4 ? y[p] : b[p - 4];
                            (E >= v || E < 0) && T++
                        }
                    return {
                        skinned: !0,
                        valid: 0 === r && 0 === s && 0 === T,
                        report: "Number of Weights = " + i / 4 + "\nMaximum influences = " + o + "\nMissing Weights = " + r + "\nNot Sorted = " + n + "\nNot Normalized = " + s + "\nWeightCounts = [" + c + "]\nNumber of bones = " + v + "\nBad Bone Indices = " + T
                    }
                }, t.prototype._checkDelayState = function() {
                    var e = this.getScene();
                    return this._geometry ? this._geometry.load(e) : this.delayLoadState === y.a.DELAYLOADSTATE_NOTLOADED && (this.delayLoadState = y.a.DELAYLOADSTATE_LOADING, this._queueLoad(e)), this
                }, t.prototype._queueLoad = function(e) {
                    var t = this;
                    e._addPendingData(this);
                    var i = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
                    return o.h.LoadFile(this.delayLoadingFile, function(i) {
                        i instanceof ArrayBuffer ? t._delayLoadingFunction(i, t) : t._delayLoadingFunction(JSON.parse(i), t), t.instances.forEach(function(e) {
                            e.refreshBoundingInfo(), e._syncSubMeshes()
                        }), t.delayLoadState = y.a.DELAYLOADSTATE_LOADED, e._removePendingData(t)
                    }, function() {}, e.offlineProvider, i), this
                }, t.prototype.isInFrustum = function(t) {
                    return this.delayLoadState !== y.a.DELAYLOADSTATE_LOADING && (!!e.prototype.isInFrustum.call(this, t) && (this._checkDelayState(), !0))
                }, t.prototype.setMaterialByID = function(e) {
                    var t, i = this.getScene().materials;
                    for (t = i.length - 1; t > -1; t--)
                        if (i[t].id === e) return this.material = i[t], this;
                    var n = this.getScene().multiMaterials;
                    for (t = n.length - 1; t > -1; t--)
                        if (n[t].id === e) return this.material = n[t], this;
                    return this
                }, t.prototype.getAnimatables = function() {
                    var e = new Array;
                    return this.material && e.push(this.material), this.skeleton && e.push(this.skeleton), e
                }, t.prototype.bakeTransformIntoVertices = function(e) {
                    if (!this.isVerticesDataPresent(u.b.PositionKind)) return this;
                    var t = this.subMeshes.splice(0);
                    this._resetPointsArrayCache();
                    var i, n = this.getVerticesData(u.b.PositionKind),
                        r = new Array;
                    for (i = 0; i < n.length; i += 3) c.x.TransformCoordinates(c.x.FromArray(n, i), e).toArray(r, i);
                    if (this.setVerticesData(u.b.PositionKind, r, this.getVertexBuffer(u.b.PositionKind).isUpdatable()), this.isVerticesDataPresent(u.b.NormalKind)) {
                        for (n = this.getVerticesData(u.b.NormalKind), r = [], i = 0; i < n.length; i += 3) c.x.TransformNormal(c.x.FromArray(n, i), e).normalize().toArray(r, i);
                        this.setVerticesData(u.b.NormalKind, r, this.getVertexBuffer(u.b.NormalKind).isUpdatable())
                    }
                    return e.m[0] * e.m[5] * e.m[10] < 0 && this.flipFaces(), this.releaseSubMeshes(), this.subMeshes = t, this
                }, t.prototype.bakeCurrentTransformIntoVertices = function() {
                    return this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.scaling.copyFromFloats(1, 1, 1), this.position.copyFromFloats(0, 0, 0), this.rotation.copyFromFloats(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = c.q.Identity()), this._worldMatrix = c.j.Identity(), this
                }, Object.defineProperty(t.prototype, "_positions", {
                    get: function() {
                        return this._geometry ? this._geometry._positions : null
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype._resetPointsArrayCache = function() {
                    return this._geometry && this._geometry._resetPointsArrayCache(), this
                }, t.prototype._generatePointsArray = function() {
                    return !!this._geometry && this._geometry._generatePointsArray()
                }, t.prototype.clone = function(e, i, n, r) {
                    return void 0 === e && (e = ""), void 0 === r && (r = !0), new t(e, this.getScene(), i, this, n, r)
                }, t.prototype.dispose = function(t, i) {
                    void 0 === i && (i = !1), this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
                    var n = this._internalMeshDataInfo;
                    if (n._onBeforeDrawObservable && n._onBeforeDrawObservable.clear(), n._onBeforeBindObservable && n._onBeforeBindObservable.clear(), n._onBeforeRenderObservable && n._onBeforeRenderObservable.clear(), n._onAfterRenderObservable && n._onAfterRenderObservable.clear(), this._scene.useClonedMeshhMap) {
                        if (n.meshMap)
                            for (var r in n.meshMap) {
                                (a = n.meshMap[r]) && (a._internalMeshDataInfo._source = null, n.meshMap[r] = void 0)
                            }
                        n._source && n._source._internalMeshDataInfo.meshMap && (n._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
                    } else
                        for (var o = 0, s = this.getScene().meshes; o < s.length; o++) {
                            var a;
                            (a = s[o])._internalMeshDataInfo && a._internalMeshDataInfo._source && a._internalMeshDataInfo._source === this && (a._internalMeshDataInfo._source = null)
                        }
                    for (n._source = null, this._instanceDataStorage.instancesBuffer && (this._instanceDataStorage.instancesBuffer.dispose(), this._instanceDataStorage.instancesBuffer = null); this.instances.length;) this.instances[0].dispose();
                    e.prototype.dispose.call(this, t, i)
                }, t.prototype.applyDisplacementMap = function(e, t, i, n, r, s, a) {
                    var c = this;
                    void 0 === a && (a = !1);
                    var l = this.getScene();
                    return o.h.LoadImage(e, function(e) {
                        var o = document.createElement("canvas"),
                            l = o.getContext("2d"),
                            u = e.width,
                            h = e.height;
                        o.width = u, o.height = h, l.drawImage(e, 0, 0);
                        var d = l.getImageData(0, 0, u, h).data;
                        c.applyDisplacementMapFromBuffer(d, u, h, t, i, r, s, a), n && n(c)
                    }, function() {}, l.offlineProvider), this
                }, t.prototype.applyDisplacementMapFromBuffer = function(e, t, i, n, r, o, s, a) {
                    if (void 0 === a && (a = !1), !this.isVerticesDataPresent(u.b.PositionKind) || !this.isVerticesDataPresent(u.b.NormalKind) || !this.isVerticesDataPresent(u.b.UVKind)) return T.a.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
                    var l = this.getVerticesData(u.b.PositionKind, !0, !0),
                        d = this.getVerticesData(u.b.NormalKind),
                        f = this.getVerticesData(u.b.UVKind),
                        p = c.x.Zero(),
                        _ = c.x.Zero(),
                        g = c.w.Zero();
                    o = o || c.w.Zero(), s = s || new c.w(1, 1);
                    for (var m = 0; m < l.length; m += 3) {
                        c.x.FromArrayToRef(l, m, p), c.x.FromArrayToRef(d, m, _), c.w.FromArrayToRef(f, m / 3 * 2, g);
                        var v = 4 * ((Math.abs(g.x * s.x + o.x) * t % t | 0) + (Math.abs(g.y * s.y + o.y) * i % i | 0) * t),
                            y = .3 * (e[v] / 255) + .59 * (e[v + 1] / 255) + .11 * (e[v + 2] / 255);
                        _.normalize(), _.scaleInPlace(n + (r - n) * y), (p = p.add(_)).toArray(l, m)
                    }
                    return h.a.ComputeNormals(l, this.getIndices(), d), a ? (this.setVerticesData(u.b.PositionKind, l), this.setVerticesData(u.b.NormalKind, d)) : (this.updateVerticesData(u.b.PositionKind, l), this.updateVerticesData(u.b.NormalKind, d)), this
                }, t.prototype.convertToFlatShadedMesh = function() {
                    var e, t, i = this.getVerticesDataKinds(),
                        n = {},
                        r = {},
                        o = {},
                        s = !1;
                    for (e = 0; e < i.length; e++) {
                        t = i[e];
                        var a = this.getVertexBuffer(t);
                        t !== u.b.NormalKind ? (n[t] = a, r[t] = n[t].getData(), o[t] = []) : (s = a.isUpdatable(), i.splice(e, 1), e--)
                    }
                    var l, h = this.subMeshes.slice(0),
                        d = this.getIndices(),
                        f = this.getTotalIndices();
                    for (l = 0; l < f; l++) {
                        var _ = d[l];
                        for (e = 0; e < i.length; e++)
                            for (var g = n[t = i[e]].getStrideSize(), m = 0; m < g; m++) o[t].push(r[t][_ * g + m])
                    }
                    var v = [],
                        y = o[u.b.PositionKind];
                    for (l = 0; l < f; l += 3) {
                        d[l] = l, d[l + 1] = l + 1, d[l + 2] = l + 2;
                        for (var b = c.x.FromArray(y, 3 * l), T = c.x.FromArray(y, 3 * (l + 1)), E = c.x.FromArray(y, 3 * (l + 2)), A = b.subtract(T), x = E.subtract(T), R = c.x.Normalize(c.x.Cross(A, x)), P = 0; P < 3; P++) v.push(R.x), v.push(R.y), v.push(R.z)
                    }
                    for (this.setIndices(d), this.setVerticesData(u.b.NormalKind, v, s), e = 0; e < i.length; e++) t = i[e], this.setVerticesData(t, o[t], n[t].isUpdatable());
                    this.releaseSubMeshes();
                    for (var S = 0; S < h.length; S++) {
                        var C = h[S];
                        p.b.AddToMesh(C.materialIndex, C.indexStart, C.indexCount, C.indexStart, C.indexCount, this)
                    }
                    return this.synchronizeInstances(), this
                }, t.prototype.convertToUnIndexedMesh = function() {
                    var e, t, i = this.getVerticesDataKinds(),
                        n = {},
                        r = {},
                        o = {};
                    for (e = 0; e < i.length; e++) {
                        t = i[e];
                        var s = this.getVertexBuffer(t);
                        n[t] = s, r[t] = n[t].getData(), o[t] = []
                    }
                    var a, c = this.subMeshes.slice(0),
                        l = this.getIndices(),
                        u = this.getTotalIndices();
                    for (a = 0; a < u; a++) {
                        var h = l[a];
                        for (e = 0; e < i.length; e++)
                            for (var d = n[t = i[e]].getStrideSize(), f = 0; f < d; f++) o[t].push(r[t][h * d + f])
                    }
                    for (a = 0; a < u; a += 3) l[a] = a, l[a + 1] = a + 1, l[a + 2] = a + 2;
                    for (this.setIndices(l), e = 0; e < i.length; e++) t = i[e], this.setVerticesData(t, o[t], n[t].isUpdatable());
                    this.releaseSubMeshes();
                    for (var _ = 0; _ < c.length; _++) {
                        var g = c[_];
                        p.b.AddToMesh(g.materialIndex, g.indexStart, g.indexCount, g.indexStart, g.indexCount, this)
                    }
                    return this._unIndexed = !0, this.synchronizeInstances(), this
                }, t.prototype.flipFaces = function(e) {
                    void 0 === e && (e = !1);
                    var t, i, n = h.a.ExtractFromMesh(this);
                    if (e && this.isVerticesDataPresent(u.b.NormalKind) && n.normals)
                        for (t = 0; t < n.normals.length; t++) n.normals[t] *= -1;
                    if (n.indices)
                        for (t = 0; t < n.indices.length; t += 3) i = n.indices[t + 1], n.indices[t + 1] = n.indices[t + 2], n.indices[t + 2] = i;
                    return n.applyToMesh(this), this
                }, t.prototype.increaseVertices = function(e) {
                    var t = h.a.ExtractFromMesh(this),
                        i = t.uvs,
                        n = t.indices,
                        r = t.positions,
                        o = t.normals;
                    if (null === n || null === r || null === o || null === i) T.a.Warn("VertexData contains null entries");
                    else {
                        for (var s, a, l = e + 1, u = new Array, d = 0; d < l + 1; d++) u[d] = new Array;
                        var f, p = new c.x(0, 0, 0),
                            _ = new c.x(0, 0, 0),
                            g = new c.w(0, 0),
                            m = new Array,
                            v = new Array,
                            y = new Array,
                            b = r.length,
                            E = i.length;
                        for (d = 0; d < n.length; d += 3) {
                            v[0] = n[d], v[1] = n[d + 1], v[2] = n[d + 2];
                            for (var A = 0; A < 3; A++)
                                if (s = v[A], a = v[(A + 1) % 3], void 0 === y[s] && void 0 === y[a] ? (y[s] = new Array, y[a] = new Array) : (void 0 === y[s] && (y[s] = new Array), void 0 === y[a] && (y[a] = new Array)), void 0 === y[s][a] && void 0 === y[a][s]) {
                                    y[s][a] = [], p.x = (r[3 * a] - r[3 * s]) / l, p.y = (r[3 * a + 1] - r[3 * s + 1]) / l, p.z = (r[3 * a + 2] - r[3 * s + 2]) / l, _.x = (o[3 * a] - o[3 * s]) / l, _.y = (o[3 * a + 1] - o[3 * s + 1]) / l, _.z = (o[3 * a + 2] - o[3 * s + 2]) / l, g.x = (i[2 * a] - i[2 * s]) / l, g.y = (i[2 * a + 1] - i[2 * s + 1]) / l, y[s][a].push(s);
                                    for (var x = 1; x < l; x++) y[s][a].push(r.length / 3), r[b] = r[3 * s] + x * p.x, o[b++] = o[3 * s] + x * _.x, r[b] = r[3 * s + 1] + x * p.y, o[b++] = o[3 * s + 1] + x * _.y, r[b] = r[3 * s + 2] + x * p.z, o[b++] = o[3 * s + 2] + x * _.z, i[E++] = i[2 * s] + x * g.x, i[E++] = i[2 * s + 1] + x * g.y;
                                    y[s][a].push(a), y[a][s] = new Array, f = y[s][a].length;
                                    for (var R = 0; R < f; R++) y[a][s][R] = y[s][a][f - 1 - R]
                                } u[0][0] = n[d], u[1][0] = y[n[d]][n[d + 1]][1], u[1][1] = y[n[d]][n[d + 2]][1];
                            for (x = 2; x < l; x++) {
                                u[x][0] = y[n[d]][n[d + 1]][x], u[x][x] = y[n[d]][n[d + 2]][x], p.x = (r[3 * u[x][x]] - r[3 * u[x][0]]) / x, p.y = (r[3 * u[x][x] + 1] - r[3 * u[x][0] + 1]) / x, p.z = (r[3 * u[x][x] + 2] - r[3 * u[x][0] + 2]) / x, _.x = (o[3 * u[x][x]] - o[3 * u[x][0]]) / x, _.y = (o[3 * u[x][x] + 1] - o[3 * u[x][0] + 1]) / x, _.z = (o[3 * u[x][x] + 2] - o[3 * u[x][0] + 2]) / x, g.x = (i[2 * u[x][x]] - i[2 * u[x][0]]) / x, g.y = (i[2 * u[x][x] + 1] - i[2 * u[x][0] + 1]) / x;
                                for (A = 1; A < x; A++) u[x][A] = r.length / 3, r[b] = r[3 * u[x][0]] + A * p.x, o[b++] = o[3 * u[x][0]] + A * _.x, r[b] = r[3 * u[x][0] + 1] + A * p.y, o[b++] = o[3 * u[x][0] + 1] + A * _.y, r[b] = r[3 * u[x][0] + 2] + A * p.z, o[b++] = o[3 * u[x][0] + 2] + A * _.z, i[E++] = i[2 * u[x][0]] + A * g.x, i[E++] = i[2 * u[x][0] + 1] + A * g.y
                            }
                            u[l] = y[n[d + 1]][n[d + 2]], m.push(u[0][0], u[1][0], u[1][1]);
                            for (x = 1; x < l; x++) {
                                for (A = 0; A < x; A++) m.push(u[x][A], u[x + 1][A], u[x + 1][A + 1]), m.push(u[x][A], u[x + 1][A + 1], u[x][A + 1]);
                                m.push(u[x][A], u[x + 1][A], u[x + 1][A + 1])
                            }
                        }
                        t.indices = m, t.applyToMesh(this)
                    }
                }, t.prototype.forceSharedVertices = function() {
                    var e = h.a.ExtractFromMesh(this),
                        t = e.uvs,
                        i = e.indices,
                        n = e.positions,
                        r = e.normals;
                    if (null === i || null === n || null === r || null === t) T.a.Warn("VertexData contains null entries");
                    else {
                        for (var o, s, a = new Array, c = new Array, l = new Array, u = new Array, d = 0, f = new Array, p = 0; p < i.length; p += 3) {
                            s = [i[p], i[p + 1], i[p + 2]], u = new Array;
                            for (var _ = 0; _ < 3; _++) {
                                u[_] = "";
                                for (var g = 0; g < 3; g++) Math.abs(n[3 * s[_] + g]) < 1e-8 && (n[3 * s[_] + g] = 0), u[_] += n[3 * s[_] + g] + "|";
                                u[_] = u[_].slice(0, -1)
                            }
                            if (u[0] != u[1] && u[0] != u[2] && u[1] != u[2])
                                for (_ = 0; _ < 3; _++) {
                                    if ((o = f.indexOf(u[_])) < 0) {
                                        f.push(u[_]), o = d++;
                                        for (g = 0; g < 3; g++) a.push(n[3 * s[_] + g]);
                                        for (g = 0; g < 2; g++) l.push(t[2 * s[_] + g])
                                    }
                                    c.push(o)
                                }
                        }
                        var m = new Array;
                        h.a.ComputeNormals(a, c, m), e.positions = a, e.indices = c, e.normals = m, e.uvs = l, e.applyToMesh(this)
                    }
                }, t._instancedMeshFactory = function(e, t) {
                    throw A.a.WarnImport("InstancedMesh")
                }, t._PhysicsImpostorParser = function(e, t, i) {
                    throw A.a.WarnImport("PhysicsImpostor")
                }, t.prototype.createInstance = function(e) {
                    return t._instancedMeshFactory(e, this)
                }, t.prototype.synchronizeInstances = function() {
                    for (var e = 0; e < this.instances.length; e++) {
                        this.instances[e]._syncSubMeshes()
                    }
                    return this
                }, t.prototype.optimizeIndices = function(e) {
                    var t = this,
                        i = this.getIndices(),
                        n = this.getVerticesData(u.b.PositionKind);
                    if (!n || !i) return this;
                    for (var r = new Array, s = 0; s < n.length; s += 3) r.push(c.x.FromArray(n, s));
                    var a = new Array;
                    return o.a.SyncAsyncForLoop(r.length, 40, function(e) {
                        for (var t = r.length - 1 - e, i = r[t], n = 0; n < t; ++n) {
                            var o = r[n];
                            if (i.equals(o)) {
                                a[t] = n;
                                break
                            }
                        }
                    }, function() {
                        for (var n = 0; n < i.length; ++n) i[n] = a[i[n]] || i[n];
                        var r = t.subMeshes.slice(0);
                        t.setIndices(i), t.subMeshes = r, e && e(t)
                    }), this
                }, t.prototype.serialize = function(e) {
                    e.name = this.name, e.id = this.id, e.type = this.getClassName(), a.a && a.a.HasTags(this) && (e.tags = a.a.GetTags(this)), e.position = this.position.asArray(), this.rotationQuaternion ? e.rotationQuaternion = this.rotationQuaternion.asArray() : this.rotation && (e.rotation = this.rotation.asArray()), e.scaling = this.scaling.asArray(), this._postMultiplyPivotMatrix ? e.pivotMatrix = this.getPivotMatrix().asArray() : e.localMatrix = this.getPivotMatrix().asArray(), e.isEnabled = this.isEnabled(!1), e.isVisible = this.isVisible, e.infiniteDistance = this.infiniteDistance, e.pickable = this.isPickable, e.receiveShadows = this.receiveShadows, e.billboardMode = this.billboardMode, e.visibility = this.visibility, e.checkCollisions = this.checkCollisions, e.isBlocker = this.isBlocker, this.parent && (e.parentId = this.parent.id), e.isUnIndexed = this.isUnIndexed;
                    var t = this._geometry;
                    if (t) {
                        var i = t.id;
                        e.geometryId = i, e.subMeshes = [];
                        for (var n = 0; n < this.subMeshes.length; n++) {
                            var r = this.subMeshes[n];
                            e.subMeshes.push({
                                materialIndex: r.materialIndex,
                                verticesStart: r.verticesStart,
                                verticesCount: r.verticesCount,
                                indexStart: r.indexStart,
                                indexCount: r.indexCount
                            })
                        }
                    }
                    if (this.material ? e.materialId = this.material.id : this.material = null, this.morphTargetManager && (e.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (e.skeletonId = this.skeleton.id), this.getScene()._getComponent(x.a.NAME_PHYSICSENGINE)) {
                        var o = this.getPhysicsImpostor();
                        o && (e.physicsMass = o.getParam("mass"), e.physicsFriction = o.getParam("friction"), e.physicsRestitution = o.getParam("mass"), e.physicsImpostor = o.type)
                    }
                    this.metadata && (e.metadata = this.metadata), e.instances = [];
                    for (var s = 0; s < this.instances.length; s++) {
                        var c = this.instances[s];
                        if (!c.doNotSerialize) {
                            var l = {
                                name: c.name,
                                id: c.id,
                                position: c.position.asArray(),
                                scaling: c.scaling.asArray()
                            };
                            c.parent && (l.parentId = c.parent.id), c.rotationQuaternion ? l.rotationQuaternion = c.rotationQuaternion.asArray() : c.rotation && (l.rotation = c.rotation.asArray()), e.instances.push(l), b.a.AppendSerializedAnimations(c, l), l.ranges = c.serializeAnimationRanges()
                        }
                    }
                    b.a.AppendSerializedAnimations(this, e), e.ranges = this.serializeAnimationRanges(), e.layerMask = this.layerMask, e.alphaIndex = this.alphaIndex, e.hasVertexAlpha = this.hasVertexAlpha, e.overlayAlpha = this.overlayAlpha, e.overlayColor = this.overlayColor.asArray(), e.renderOverlay = this.renderOverlay, e.applyFog = this.applyFog, this.actionManager && (e.actions = this.actionManager.serialize(this.name))
                }, t.prototype._syncGeometryWithMorphTargetManager = function() {
                    if (this.geometry) {
                        this._markSubMeshesAsAttributesDirty();
                        var e = this._internalMeshDataInfo._morphTargetManager;
                        if (e && e.vertexCount) {
                            if (e.vertexCount !== this.getTotalVertices()) return T.a.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
                            for (var t = 0; t < e.numInfluencers; t++) {
                                var i = e.getActiveTarget(t),
                                    n = i.getPositions();
                                if (!n) return void T.a.Error("Invalid morph target. Target must have positions.");
                                this.geometry.setVerticesData(u.b.PositionKind + t, n, !1, 3);
                                var r = i.getNormals();
                                r && this.geometry.setVerticesData(u.b.NormalKind + t, r, !1, 3);
                                var o = i.getTangents();
                                o && this.geometry.setVerticesData(u.b.TangentKind + t, o, !1, 3)
                            }
                        } else
                            for (t = 0; this.geometry.isVerticesDataPresent(u.b.PositionKind + t);) this.geometry.removeVerticesData(u.b.PositionKind + t), this.geometry.isVerticesDataPresent(u.b.NormalKind + t) && this.geometry.removeVerticesData(u.b.NormalKind + t), this.geometry.isVerticesDataPresent(u.b.TangentKind + t) && this.geometry.removeVerticesData(u.b.TangentKind + t), t++
                    }
                }, t.Parse = function(e, i, n) {
                    var r;
                    if ((r = e.type && "GroundMesh" === e.type ? t._GroundMeshParser(e, i) : new t(e.name, i)).id = e.id, a.a && a.a.AddTagsTo(r, e.tags), r.position = c.x.FromArray(e.position), void 0 !== e.metadata && (r.metadata = e.metadata), e.rotationQuaternion ? r.rotationQuaternion = c.q.FromArray(e.rotationQuaternion) : e.rotation && (r.rotation = c.x.FromArray(e.rotation)), r.scaling = c.x.FromArray(e.scaling), e.localMatrix ? r.setPreTransformMatrix(c.j.FromArray(e.localMatrix)) : e.pivotMatrix && r.setPivotMatrix(c.j.FromArray(e.pivotMatrix)), r.setEnabled(e.isEnabled), r.isVisible = e.isVisible, r.infiniteDistance = e.infiniteDistance, r.showBoundingBox = e.showBoundingBox, r.showSubMeshesBoundingBox = e.showSubMeshesBoundingBox, void 0 !== e.applyFog && (r.applyFog = e.applyFog), void 0 !== e.pickable && (r.isPickable = e.pickable), void 0 !== e.alphaIndex && (r.alphaIndex = e.alphaIndex), r.receiveShadows = e.receiveShadows, r.billboardMode = e.billboardMode, void 0 !== e.visibility && (r.visibility = e.visibility), r.checkCollisions = e.checkCollisions, void 0 !== e.isBlocker && (r.isBlocker = e.isBlocker), r._shouldGenerateFlatShading = e.useFlatShading, e.freezeWorldMatrix && (r._waitingData.freezeWorldMatrix = e.freezeWorldMatrix), e.parentId && (r._waitingParentId = e.parentId), void 0 !== e.actions && (r._waitingData.actions = e.actions), void 0 !== e.overlayAlpha && (r.overlayAlpha = e.overlayAlpha), void 0 !== e.overlayColor && (r.overlayColor = c.e.FromArray(e.overlayColor)), void 0 !== e.renderOverlay && (r.renderOverlay = e.renderOverlay), r.isUnIndexed = !!e.isUnIndexed, r.hasVertexAlpha = e.hasVertexAlpha, e.delayLoadingFile ? (r.delayLoadState = y.a.DELAYLOADSTATE_NOTLOADED, r.delayLoadingFile = n + e.delayLoadingFile, r._boundingInfo = new _.a(c.x.FromArray(e.boundingBoxMinimum), c.x.FromArray(e.boundingBoxMaximum)), e._binaryInfo && (r._binaryInfo = e._binaryInfo), r._delayInfo = [], e.hasUVs && r._delayInfo.push(u.b.UVKind), e.hasUVs2 && r._delayInfo.push(u.b.UV2Kind), e.hasUVs3 && r._delayInfo.push(u.b.UV3Kind), e.hasUVs4 && r._delayInfo.push(u.b.UV4Kind), e.hasUVs5 && r._delayInfo.push(u.b.UV5Kind), e.hasUVs6 && r._delayInfo.push(u.b.UV6Kind), e.hasColors && r._delayInfo.push(u.b.ColorKind), e.hasMatricesIndices && r._delayInfo.push(u.b.MatricesIndicesKind), e.hasMatricesWeights && r._delayInfo.push(u.b.MatricesWeightsKind), r._delayLoadingFunction = d.a._ImportGeometry, v.a.ForceFullSceneLoadingForIncremental && r._checkDelayState()) : d.a._ImportGeometry(e, r), e.materialId ? r.setMaterialByID(e.materialId) : r.material = null, e.morphTargetManagerId > -1 && (r.morphTargetManager = i.getMorphTargetManagerById(e.morphTargetManagerId)), e.skeletonId > -1 && (r.skeleton = i.getLastSkeletonByID(e.skeletonId), e.numBoneInfluencers && (r.numBoneInfluencers = e.numBoneInfluencers)), e.animations) {
                        for (var o = 0; o < e.animations.length; o++) {
                            var s = e.animations[o];
                            (g = E.a.GetClass("BABYLON.Animation")) && r.animations.push(g.Parse(s))
                        }
                        l.a.ParseAnimationRanges(r, e, i)
                    }
                    if (e.autoAnimate && i.beginAnimation(r, e.autoAnimateFrom, e.autoAnimateTo, e.autoAnimateLoop, e.autoAnimateSpeed || 1), e.layerMask && !isNaN(e.layerMask) ? r.layerMask = Math.abs(parseInt(e.layerMask)) : r.layerMask = 268435455, e.physicsImpostor && t._PhysicsImpostorParser(i, r, e), e.lodMeshIds && (r._waitingData.lods = {
                            ids: e.lodMeshIds,
                            distances: e.lodDistances ? e.lodDistances : null,
                            coverages: e.lodCoverages ? e.lodCoverages : null
                        }), e.instances)
                        for (var h = 0; h < e.instances.length; h++) {
                            var f = e.instances[h],
                                p = r.createInstance(f.name);
                            if (f.id && (p.id = f.id), a.a && (f.tags ? a.a.AddTagsTo(p, f.tags) : a.a.AddTagsTo(p, e.tags)), p.position = c.x.FromArray(f.position), void 0 !== f.metadata && (p.metadata = f.metadata), f.parentId && (p._waitingParentId = f.parentId), f.rotationQuaternion ? p.rotationQuaternion = c.q.FromArray(f.rotationQuaternion) : f.rotation && (p.rotation = c.x.FromArray(f.rotation)), p.scaling = c.x.FromArray(f.scaling), null != f.checkCollisions && null != f.checkCollisions && (p.checkCollisions = f.checkCollisions), null != f.pickable && null != f.pickable && (p.isPickable = f.pickable), null != f.showBoundingBox && null != f.showBoundingBox && (p.showBoundingBox = f.showBoundingBox), null != f.showSubMeshesBoundingBox && null != f.showSubMeshesBoundingBox && (p.showSubMeshesBoundingBox = f.showSubMeshesBoundingBox), null != f.alphaIndex && null != f.showSubMeshesBoundingBox && (p.alphaIndex = f.alphaIndex), f.physicsImpostor && t._PhysicsImpostorParser(i, p, f), f.animations) {
                                for (o = 0; o < f.animations.length; o++) {
                                    var g;
                                    s = f.animations[o], (g = E.a.GetClass("BABYLON.Animation")) && p.animations.push(g.Parse(s))
                                }
                                l.a.ParseAnimationRanges(p, f, i), f.autoAnimate && i.beginAnimation(p, f.autoAnimateFrom, f.autoAnimateTo, f.autoAnimateLoop, f.autoAnimateSpeed || 1)
                            }
                        }
                    return r
                }, t.CreateRibbon = function(e, t, i, n, r, o, s, a, c) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateDisc = function(e, t, i, n, r, o) {
                    throw void 0 === n && (n = null), A.a.WarnImport("MeshBuilder")
                }, t.CreateBox = function(e, t, i, n, r) {
                    throw void 0 === i && (i = null), A.a.WarnImport("MeshBuilder")
                }, t.CreateSphere = function(e, t, i, n, r, o) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateHemisphere = function(e, t, i, n) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateCylinder = function(e, t, i, n, r, o, s, a, c) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateTorus = function(e, t, i, n, r, o, s) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateTorusKnot = function(e, t, i, n, r, o, s, a, c, l) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateLines = function(e, t, i, n, r) {
                    throw void 0 === i && (i = null), void 0 === n && (n = !1), void 0 === r && (r = null), A.a.WarnImport("MeshBuilder")
                }, t.CreateDashedLines = function(e, t, i, n, r, o, s, a) {
                    throw void 0 === o && (o = null), A.a.WarnImport("MeshBuilder")
                }, t.CreatePolygon = function(e, t, i, n, r, o, s) {
                    throw void 0 === s && (s = earcut), A.a.WarnImport("MeshBuilder")
                }, t.ExtrudePolygon = function(e, t, i, n, r, o, s, a) {
                    throw void 0 === a && (a = earcut), A.a.WarnImport("MeshBuilder")
                }, t.ExtrudeShape = function(e, t, i, n, r, o, s, a, c, l) {
                    throw void 0 === s && (s = null), A.a.WarnImport("MeshBuilder")
                }, t.ExtrudeShapeCustom = function(e, t, i, n, r, o, s, a, c, l, u, h) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateLathe = function(e, t, i, n, r, o, s) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreatePlane = function(e, t, i, n, r) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateGround = function(e, t, i, n, r, o) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateTiledGround = function(e, t, i, n, r, o, s, a, c) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateGroundFromHeightMap = function(e, t, i, n, r, o, s, a, c, l, u) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateTube = function(e, t, i, n, r, o, s, a, c, l) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreatePolyhedron = function(e, t, i) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateIcoSphere = function(e, t, i) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.CreateDecal = function(e, t, i, n, r, o) {
                    throw A.a.WarnImport("MeshBuilder")
                }, t.prototype.setPositionsForCPUSkinning = function() {
                    var e = this._internalMeshDataInfo;
                    if (!e._sourcePositions) {
                        var t = this.getVerticesData(u.b.PositionKind);
                        if (!t) return e._sourcePositions;
                        e._sourcePositions = new Float32Array(t), this.isVertexBufferUpdatable(u.b.PositionKind) || this.setVerticesData(u.b.PositionKind, t, !0)
                    }
                    return e._sourcePositions
                }, t.prototype.setNormalsForCPUSkinning = function() {
                    var e = this._internalMeshDataInfo;
                    if (!e._sourceNormals) {
                        var t = this.getVerticesData(u.b.NormalKind);
                        if (!t) return e._sourceNormals;
                        e._sourceNormals = new Float32Array(t), this.isVertexBufferUpdatable(u.b.NormalKind) || this.setVerticesData(u.b.NormalKind, t, !0)
                    }
                    return e._sourceNormals
                }, t.prototype.applySkeleton = function(e) {
                    if (!this.geometry) return this;
                    if (this.geometry._softwareSkinningFrameId == this.getScene().getFrameId()) return this;
                    if (this.geometry._softwareSkinningFrameId = this.getScene().getFrameId(), !this.isVerticesDataPresent(u.b.PositionKind)) return this;
                    if (!this.isVerticesDataPresent(u.b.NormalKind)) return this;
                    if (!this.isVerticesDataPresent(u.b.MatricesIndicesKind)) return this;
                    if (!this.isVerticesDataPresent(u.b.MatricesWeightsKind)) return this;
                    var t = this._internalMeshDataInfo;
                    if (!t._sourcePositions) {
                        var i = this.subMeshes.slice();
                        this.setPositionsForCPUSkinning(), this.subMeshes = i
                    }
                    t._sourceNormals || this.setNormalsForCPUSkinning();
                    var n = this.getVerticesData(u.b.PositionKind);
                    if (!n) return this;
                    n instanceof Float32Array || (n = new Float32Array(n));
                    var r = this.getVerticesData(u.b.NormalKind);
                    if (!r) return this;
                    r instanceof Float32Array || (r = new Float32Array(r));
                    var o = this.getVerticesData(u.b.MatricesIndicesKind),
                        s = this.getVerticesData(u.b.MatricesWeightsKind);
                    if (!s || !o) return this;
                    for (var a, l = this.numBoneInfluencers > 4, h = l ? this.getVerticesData(u.b.MatricesIndicesExtraKind) : null, d = l ? this.getVerticesData(u.b.MatricesWeightsExtraKind) : null, f = e.getTransformMatrices(this), p = c.x.Zero(), _ = new c.j, g = new c.j, m = 0, v = 0; v < n.length; v += 3, m += 4) {
                        var y;
                        for (a = 0; a < 4; a++)(y = s[m + a]) > 0 && (c.j.FromFloat32ArrayToRefScaled(f, Math.floor(16 * o[m + a]), y, g), _.addToSelf(g));
                        if (l)
                            for (a = 0; a < 4; a++)(y = d[m + a]) > 0 && (c.j.FromFloat32ArrayToRefScaled(f, Math.floor(16 * h[m + a]), y, g), _.addToSelf(g));
                        c.x.TransformCoordinatesFromFloatsToRef(t._sourcePositions[v], t._sourcePositions[v + 1], t._sourcePositions[v + 2], _, p), p.toArray(n, v), c.x.TransformNormalFromFloatsToRef(t._sourceNormals[v], t._sourceNormals[v + 1], t._sourceNormals[v + 2], _, p), p.toArray(r, v), _.reset()
                    }
                    return this.updateVerticesData(u.b.PositionKind, n), this.updateVerticesData(u.b.NormalKind, r), this
                }, t.MinMax = function(e) {
                    var t = null,
                        i = null;
                    return e.forEach(function(e) {
                        var n = e.getBoundingInfo().boundingBox;
                        t && i ? (t.minimizeInPlace(n.minimumWorld), i.maximizeInPlace(n.maximumWorld)) : (t = n.minimumWorld, i = n.maximumWorld)
                    }), t && i ? {
                        min: t,
                        max: i
                    } : {
                        min: c.x.Zero(),
                        max: c.x.Zero()
                    }
                }, t.Center = function(e) {
                    var i = e instanceof Array ? t.MinMax(e) : e;
                    return c.x.Center(i.min, i.max)
                }, t.MergeMeshes = function(e, i, n, r, o, s) {
                    var a;
                    if (void 0 === i && (i = !0), !n) {
                        var c = 0;
                        for (a = 0; a < e.length; a++)
                            if (e[a] && (c += e[a].getTotalVertices()) > 65536) return T.a.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
                    }
                    if (s) {
                        var l, u, d = null;
                        o = !1
                    }
                    var f, _ = new Array,
                        g = new Array,
                        v = null,
                        y = new Array,
                        b = null;
                    for (a = 0; a < e.length; a++)
                        if (e[a]) {
                            var E = e[a];
                            if (E.isAnInstance) return T.a.Warn("Cannot merge instance meshes."), null;
                            var A = E.computeWorldMatrix(!0);
                            if ((f = h.a.ExtractFromMesh(E, !0, !0)).transform(A), v ? v.merge(f, n) : (v = f, b = E), o && y.push(E.getTotalIndices()), s)
                                if (E.material) {
                                    var x = E.material;
                                    if (x instanceof m.a) {
                                        for (u = 0; u < x.subMaterials.length; u++) _.indexOf(x.subMaterials[u]) < 0 && _.push(x.subMaterials[u]);
                                        for (l = 0; l < E.subMeshes.length; l++) g.push(_.indexOf(x.subMaterials[E.subMeshes[l].materialIndex])), y.push(E.subMeshes[l].indexCount)
                                    } else
                                        for (_.indexOf(x) < 0 && _.push(x), l = 0; l < E.subMeshes.length; l++) g.push(_.indexOf(x)), y.push(E.subMeshes[l].indexCount)
                                } else
                                    for (l = 0; l < E.subMeshes.length; l++) g.push(0), y.push(E.subMeshes[l].indexCount)
                        } if (b = b, r || (r = new t(b.name + "_merged", b.getScene())), v.applyToMesh(r), r.checkCollisions = b.checkCollisions, i)
                        for (a = 0; a < e.length; a++) e[a] && e[a].dispose();
                    if (o || s) {
                        r.releaseSubMeshes(), a = 0;
                        for (var R = 0; a < y.length;) p.b.CreateFromIndices(0, R, y[a], r), R += y[a], a++
                    }
                    if (s) {
                        for ((d = new m.a(b.name + "_merged", b.getScene())).subMaterials = _, l = 0; l < r.subMeshes.length; l++) r.subMeshes[l].materialIndex = g[l];
                        r.material = d
                    } else r.material = b.material;
                    return r
                }, t.prototype.addInstance = function(e) {
                    e._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(e)
                }, t.prototype.removeInstance = function(e) {
                    var t = e._indexInSourceMeshInstanceArray;
                    if (-1 != t) {
                        if (t !== this.instances.length - 1) {
                            var i = this.instances[this.instances.length - 1];
                            this.instances[t] = i, i._indexInSourceMeshInstanceArray = t
                        }
                        e._indexInSourceMeshInstanceArray = -1, this.instances.pop()
                    }
                }, t.FRONTSIDE = h.a.FRONTSIDE, t.BACKSIDE = h.a.BACKSIDE, t.DOUBLESIDE = h.a.DOUBLESIDE, t.DEFAULTSIDE = h.a.DEFAULTSIDE, t.NO_CAP = 0, t.CAP_START = 1, t.CAP_END = 2, t.CAP_ALL = 3, t._GroundMeshParser = function(e, t) {
                    throw A.a.WarnImport("GroundMesh")
                }, t
            }(f.a)
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        });
        var n = function() {
            function e() {}
            return e.WithinEpsilon = function(e, t, i) {
                void 0 === i && (i = 1.401298e-45);
                var n = e - t;
                return -i <= n && n <= i
            }, e.ToHex = function(e) {
                var t = e.toString(16);
                return e <= 15 ? ("0" + t).toUpperCase() : t.toUpperCase()
            }, e.Sign = function(e) {
                return 0 === (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
            }, e.Clamp = function(e, t, i) {
                return void 0 === t && (t = 0), void 0 === i && (i = 1), Math.min(i, Math.max(t, e))
            }, e.Log2 = function(e) {
                return Math.log(e) * Math.LOG2E
            }, e.Repeat = function(e, t) {
                return e - Math.floor(e / t) * t
            }, e.Normalize = function(e, t, i) {
                return (e - t) / (i - t)
            }, e.Denormalize = function(e, t, i) {
                return e * (i - t) + t
            }, e.DeltaAngle = function(t, i) {
                var n = e.Repeat(i - t, 360);
                return n > 180 && (n -= 360), n
            }, e.PingPong = function(t, i) {
                var n = e.Repeat(t, 2 * i);
                return i - Math.abs(n - i)
            }, e.SmoothStep = function(t, i, n) {
                var r = e.Clamp(n);
                return i * (r = -2 * r * r * r + 3 * r * r) + t * (1 - r)
            }, e.MoveTowards = function(t, i, n) {
                return Math.abs(i - t) <= n ? i : t + e.Sign(i - t) * n
            }, e.MoveTowardsAngle = function(t, i, n) {
                var r = e.DeltaAngle(t, i),
                    o = 0;
                return -n < r && r < n ? o = i : (i = t + r, o = e.MoveTowards(t, i, n)), o
            }, e.Lerp = function(e, t, i) {
                return e + (t - e) * i
            }, e.LerpAngle = function(t, i, n) {
                var r = e.Repeat(i - t, 360);
                return r > 180 && (r -= 360), t + r * e.Clamp(n)
            }, e.InverseLerp = function(t, i, n) {
                return t != i ? e.Clamp((n - t) / (i - t)) : 0
            }, e.Hermite = function(e, t, i, n, r) {
                var o = r * r,
                    s = r * o;
                return e * (2 * s - 3 * o + 1) + i * (-2 * s + 3 * o) + t * (s - 2 * o + r) + n * (s - o)
            }, e.RandomRange = function(e, t) {
                return e === t ? e : Math.random() * (t - e) + e
            }, e.RangeToPercent = function(e, t, i) {
                return (e - t) / (i - t)
            }, e.PercentToRange = function(e, t, i) {
                return (i - t) * e + t
            }, e.NormalizeRadians = function(t) {
                return t -= e.TwoPi * Math.floor((t + Math.PI) / e.TwoPi)
            }, e.TwoPi = 2 * Math.PI, e
        }()
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return s
        });
        var n = i(0),
            r = i(4),
            o = i(19),
            s = function() {
                function e() {}
                return e.prototype.set = function(e, t) {
                    switch (t) {
                        case r.b.PositionKind:
                            this.positions = e;
                            break;
                        case r.b.NormalKind:
                            this.normals = e;
                            break;
                        case r.b.TangentKind:
                            this.tangents = e;
                            break;
                        case r.b.UVKind:
                            this.uvs = e;
                            break;
                        case r.b.UV2Kind:
                            this.uvs2 = e;
                            break;
                        case r.b.UV3Kind:
                            this.uvs3 = e;
                            break;
                        case r.b.UV4Kind:
                            this.uvs4 = e;
                            break;
                        case r.b.UV5Kind:
                            this.uvs5 = e;
                            break;
                        case r.b.UV6Kind:
                            this.uvs6 = e;
                            break;
                        case r.b.ColorKind:
                            this.colors = e;
                            break;
                        case r.b.MatricesIndicesKind:
                            this.matricesIndices = e;
                            break;
                        case r.b.MatricesWeightsKind:
                            this.matricesWeights = e;
                            break;
                        case r.b.MatricesIndicesExtraKind:
                            this.matricesIndicesExtra = e;
                            break;
                        case r.b.MatricesWeightsExtraKind:
                            this.matricesWeightsExtra = e
                    }
                }, e.prototype.applyToMesh = function(e, t) {
                    return this._applyTo(e, t), this
                }, e.prototype.applyToGeometry = function(e, t) {
                    return this._applyTo(e, t), this
                }, e.prototype.updateMesh = function(e) {
                    return this._update(e), this
                }, e.prototype.updateGeometry = function(e) {
                    return this._update(e), this
                }, e.prototype._applyTo = function(e, t) {
                    return void 0 === t && (t = !1), this.positions && e.setVerticesData(r.b.PositionKind, this.positions, t), this.normals && e.setVerticesData(r.b.NormalKind, this.normals, t), this.tangents && e.setVerticesData(r.b.TangentKind, this.tangents, t), this.uvs && e.setVerticesData(r.b.UVKind, this.uvs, t), this.uvs2 && e.setVerticesData(r.b.UV2Kind, this.uvs2, t), this.uvs3 && e.setVerticesData(r.b.UV3Kind, this.uvs3, t), this.uvs4 && e.setVerticesData(r.b.UV4Kind, this.uvs4, t), this.uvs5 && e.setVerticesData(r.b.UV5Kind, this.uvs5, t), this.uvs6 && e.setVerticesData(r.b.UV6Kind, this.uvs6, t), this.colors && e.setVerticesData(r.b.ColorKind, this.colors, t), this.matricesIndices && e.setVerticesData(r.b.MatricesIndicesKind, this.matricesIndices, t), this.matricesWeights && e.setVerticesData(r.b.MatricesWeightsKind, this.matricesWeights, t), this.matricesIndicesExtra && e.setVerticesData(r.b.MatricesIndicesExtraKind, this.matricesIndicesExtra, t), this.matricesWeightsExtra && e.setVerticesData(r.b.MatricesWeightsExtraKind, this.matricesWeightsExtra, t), this.indices ? e.setIndices(this.indices, null, t) : e.setIndices([], null), this
                }, e.prototype._update = function(e, t, i) {
                    return this.positions && e.updateVerticesData(r.b.PositionKind, this.positions, t, i), this.normals && e.updateVerticesData(r.b.NormalKind, this.normals, t, i), this.tangents && e.updateVerticesData(r.b.TangentKind, this.tangents, t, i), this.uvs && e.updateVerticesData(r.b.UVKind, this.uvs, t, i), this.uvs2 && e.updateVerticesData(r.b.UV2Kind, this.uvs2, t, i), this.uvs3 && e.updateVerticesData(r.b.UV3Kind, this.uvs3, t, i), this.uvs4 && e.updateVerticesData(r.b.UV4Kind, this.uvs4, t, i), this.uvs5 && e.updateVerticesData(r.b.UV5Kind, this.uvs5, t, i), this.uvs6 && e.updateVerticesData(r.b.UV6Kind, this.uvs6, t, i), this.colors && e.updateVerticesData(r.b.ColorKind, this.colors, t, i), this.matricesIndices && e.updateVerticesData(r.b.MatricesIndicesKind, this.matricesIndices, t, i), this.matricesWeights && e.updateVerticesData(r.b.MatricesWeightsKind, this.matricesWeights, t, i), this.matricesIndicesExtra && e.updateVerticesData(r.b.MatricesIndicesExtraKind, this.matricesIndicesExtra, t, i), this.matricesWeightsExtra && e.updateVerticesData(r.b.MatricesWeightsExtraKind, this.matricesWeightsExtra, t, i), this.indices && e.setIndices(this.indices, null), this
                }, e.prototype.transform = function(e) {
                    var t, i = e.m[0] * e.m[5] * e.m[10] < 0,
                        r = n.x.Zero();
                    if (this.positions) {
                        var o = n.x.Zero();
                        for (t = 0; t < this.positions.length; t += 3) n.x.FromArrayToRef(this.positions, t, o), n.x.TransformCoordinatesToRef(o, e, r), this.positions[t] = r.x, this.positions[t + 1] = r.y, this.positions[t + 2] = r.z
                    }
                    if (this.normals) {
                        var s = n.x.Zero();
                        for (t = 0; t < this.normals.length; t += 3) n.x.FromArrayToRef(this.normals, t, s), n.x.TransformNormalToRef(s, e, r), this.normals[t] = r.x, this.normals[t + 1] = r.y, this.normals[t + 2] = r.z
                    }
                    if (this.tangents) {
                        var a = n.y.Zero(),
                            c = n.y.Zero();
                        for (t = 0; t < this.tangents.length; t += 4) n.y.FromArrayToRef(this.tangents, t, a), n.y.TransformNormalToRef(a, e, c), this.tangents[t] = c.x, this.tangents[t + 1] = c.y, this.tangents[t + 2] = c.z, this.tangents[t + 3] = c.w
                    }
                    if (i && this.indices)
                        for (t = 0; t < this.indices.length; t += 3) {
                            var l = this.indices[t + 1];
                            this.indices[t + 1] = this.indices[t + 2], this.indices[t + 2] = l
                        }
                    return this
                }, e.prototype.merge = function(e, t) {
                    if (void 0 === t && (t = !1), this._validate(), e._validate(), !this.normals != !e.normals || !this.tangents != !e.tangents || !this.uvs != !e.uvs || !this.uvs2 != !e.uvs2 || !this.uvs3 != !e.uvs3 || !this.uvs4 != !e.uvs4 || !this.uvs5 != !e.uvs5 || !this.uvs6 != !e.uvs6 || !this.colors != !e.colors || !this.matricesIndices != !e.matricesIndices || !this.matricesWeights != !e.matricesWeights || !this.matricesIndicesExtra != !e.matricesIndicesExtra || !this.matricesWeightsExtra != !e.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
                    if (e.indices) {
                        this.indices || (this.indices = []);
                        var i = this.positions ? this.positions.length / 3 : 0;
                        if (void 0 !== this.indices.BYTES_PER_ELEMENT) {
                            var n = this.indices.length + e.indices.length,
                                r = t || this.indices instanceof Uint32Array ? new Uint32Array(n) : new Uint16Array(n);
                            r.set(this.indices);
                            for (var o = this.indices.length, s = 0; s < e.indices.length; s++) r[o + s] = e.indices[s] + i;
                            this.indices = r
                        } else
                            for (s = 0; s < e.indices.length; s++) this.indices.push(e.indices[s] + i)
                    }
                    return this.positions = this._mergeElement(this.positions, e.positions), this.normals = this._mergeElement(this.normals, e.normals), this.tangents = this._mergeElement(this.tangents, e.tangents), this.uvs = this._mergeElement(this.uvs, e.uvs), this.uvs2 = this._mergeElement(this.uvs2, e.uvs2), this.uvs3 = this._mergeElement(this.uvs3, e.uvs3), this.uvs4 = this._mergeElement(this.uvs4, e.uvs4), this.uvs5 = this._mergeElement(this.uvs5, e.uvs5), this.uvs6 = this._mergeElement(this.uvs6, e.uvs6), this.colors = this._mergeElement(this.colors, e.colors), this.matricesIndices = this._mergeElement(this.matricesIndices, e.matricesIndices), this.matricesWeights = this._mergeElement(this.matricesWeights, e.matricesWeights), this.matricesIndicesExtra = this._mergeElement(this.matricesIndicesExtra, e.matricesIndicesExtra), this.matricesWeightsExtra = this._mergeElement(this.matricesWeightsExtra, e.matricesWeightsExtra), this
                }, e.prototype._mergeElement = function(e, t) {
                    if (!e) return t;
                    if (!t) return e;
                    var i = t.length + e.length,
                        n = e instanceof Float32Array,
                        r = t instanceof Float32Array;
                    if (n) {
                        var o = new Float32Array(i);
                        return o.set(e), o.set(t, e.length), o
                    }
                    if (r) {
                        var s = e.slice(0),
                            a = 0;
                        for (i = t.length; a < i; a++) s.push(t[a]);
                        return s
                    }
                    return e.concat(t)
                }, e.prototype._validate = function() {
                    if (!this.positions) throw new Error("Positions are required");
                    var e = function(e, t) {
                            var i = r.b.DeduceStride(e);
                            if (t.length % i != 0) throw new Error("The " + e + "s array count must be a multiple of " + i);
                            return t.length / i
                        },
                        t = e(r.b.PositionKind, this.positions),
                        i = function(i, n) {
                            var r = e(i, n);
                            if (r !== t) throw new Error("The " + i + "s element count (" + r + ") does not match the positions count (" + t + ")")
                        };
                    this.normals && i(r.b.NormalKind, this.normals), this.tangents && i(r.b.TangentKind, this.tangents), this.uvs && i(r.b.UVKind, this.uvs), this.uvs2 && i(r.b.UV2Kind, this.uvs2), this.uvs3 && i(r.b.UV3Kind, this.uvs3), this.uvs4 && i(r.b.UV4Kind, this.uvs4), this.uvs5 && i(r.b.UV5Kind, this.uvs5), this.uvs6 && i(r.b.UV6Kind, this.uvs6), this.colors && i(r.b.ColorKind, this.colors), this.matricesIndices && i(r.b.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && i(r.b.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && i(r.b.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && i(r.b.MatricesWeightsExtraKind, this.matricesWeightsExtra)
                }, e.prototype.serialize = function() {
                    var e = this.serialize();
                    return this.positions && (e.positions = this.positions), this.normals && (e.normals = this.normals), this.tangents && (e.tangents = this.tangents), this.uvs && (e.uvs = this.uvs), this.uvs2 && (e.uvs2 = this.uvs2), this.uvs3 && (e.uvs3 = this.uvs3), this.uvs4 && (e.uvs4 = this.uvs4), this.uvs5 && (e.uvs5 = this.uvs5), this.uvs6 && (e.uvs6 = this.uvs6), this.colors && (e.colors = this.colors), this.matricesIndices && (e.matricesIndices = this.matricesIndices, e.matricesIndices._isExpanded = !0), this.matricesWeights && (e.matricesWeights = this.matricesWeights), this.matricesIndicesExtra && (e.matricesIndicesExtra = this.matricesIndicesExtra, e.matricesIndicesExtra._isExpanded = !0), this.matricesWeightsExtra && (e.matricesWeightsExtra = this.matricesWeightsExtra), e.indices = this.indices, e
                }, e.ExtractFromMesh = function(t, i, n) {
                    return e._ExtractFrom(t, i, n)
                }, e.ExtractFromGeometry = function(t, i, n) {
                    return e._ExtractFrom(t, i, n)
                }, e._ExtractFrom = function(t, i, n) {
                    var o = new e;
                    return t.isVerticesDataPresent(r.b.PositionKind) && (o.positions = t.getVerticesData(r.b.PositionKind, i, n)), t.isVerticesDataPresent(r.b.NormalKind) && (o.normals = t.getVerticesData(r.b.NormalKind, i, n)), t.isVerticesDataPresent(r.b.TangentKind) && (o.tangents = t.getVerticesData(r.b.TangentKind, i, n)), t.isVerticesDataPresent(r.b.UVKind) && (o.uvs = t.getVerticesData(r.b.UVKind, i, n)), t.isVerticesDataPresent(r.b.UV2Kind) && (o.uvs2 = t.getVerticesData(r.b.UV2Kind, i, n)), t.isVerticesDataPresent(r.b.UV3Kind) && (o.uvs3 = t.getVerticesData(r.b.UV3Kind, i, n)), t.isVerticesDataPresent(r.b.UV4Kind) && (o.uvs4 = t.getVerticesData(r.b.UV4Kind, i, n)), t.isVerticesDataPresent(r.b.UV5Kind) && (o.uvs5 = t.getVerticesData(r.b.UV5Kind, i, n)), t.isVerticesDataPresent(r.b.UV6Kind) && (o.uvs6 = t.getVerticesData(r.b.UV6Kind, i, n)), t.isVerticesDataPresent(r.b.ColorKind) && (o.colors = t.getVerticesData(r.b.ColorKind, i, n)), t.isVerticesDataPresent(r.b.MatricesIndicesKind) && (o.matricesIndices = t.getVerticesData(r.b.MatricesIndicesKind, i, n)), t.isVerticesDataPresent(r.b.MatricesWeightsKind) && (o.matricesWeights = t.getVerticesData(r.b.MatricesWeightsKind, i, n)), t.isVerticesDataPresent(r.b.MatricesIndicesExtraKind) && (o.matricesIndicesExtra = t.getVerticesData(r.b.MatricesIndicesExtraKind, i, n)), t.isVerticesDataPresent(r.b.MatricesWeightsExtraKind) && (o.matricesWeightsExtra = t.getVerticesData(r.b.MatricesWeightsExtraKind, i, n)), o.indices = t.getIndices(i, n), o
                }, e.CreateRibbon = function(e) {
                    throw o.a.WarnImport("ribbonBuilder")
                }, e.CreateBox = function(e) {
                    throw o.a.WarnImport("boxBuilder")
                }, e.CreateSphere = function(e) {
                    throw o.a.WarnImport("sphereBuilder")
                }, e.CreateCylinder = function(e) {
                    throw o.a.WarnImport("cylinderBuilder")
                }, e.CreateTorus = function(e) {
                    throw o.a.WarnImport("torusBuilder")
                }, e.CreateLineSystem = function(e) {
                    throw o.a.WarnImport("linesBuilder")
                }, e.CreateDashedLines = function(e) {
                    throw o.a.WarnImport("linesBuilder")
                }, e.CreateGround = function(e) {
                    throw o.a.WarnImport("groundBuilder")
                }, e.CreateTiledGround = function(e) {
                    throw o.a.WarnImport("groundBuilder")
                }, e.CreateGroundFromHeightMap = function(e) {
                    throw o.a.WarnImport("groundBuilder")
                }, e.CreatePlane = function(e) {
                    throw o.a.WarnImport("planeBuilder")
                }, e.CreateDisc = function(e) {
                    throw o.a.WarnImport("discBuilder")
                }, e.CreatePolygon = function(e, t, i, n, r, s) {
                    throw o.a.WarnImport("polygonBuilder")
                }, e.CreateIcoSphere = function(e) {
                    throw o.a.WarnImport("icoSphereBuilder")
                }, e.CreatePolyhedron = function(e) {
                    throw o.a.WarnImport("polyhedronBuilder")
                }, e.CreateTorusKnot = function(e) {
                    throw o.a.WarnImport("torusKnotBuilder")
                }, e.ComputeNormals = function(e, t, i, r) {
                    var o = 0,
                        s = 0,
                        a = 0,
                        c = 0,
                        l = 0,
                        u = 0,
                        h = 0,
                        d = 0,
                        f = 0,
                        p = 0,
                        _ = 0,
                        g = 0,
                        m = 0,
                        v = 0,
                        y = 0,
                        b = 0,
                        T = 0,
                        E = 0,
                        A = 0,
                        x = 0,
                        R = !1,
                        P = !1,
                        S = !1,
                        C = !1,
                        M = 1,
                        O = 0,
                        I = null;
                    if (r && (R = !!r.facetNormals, P = !!r.facetPositions, S = !!r.facetPartitioning, M = !0 === r.useRightHandedSystem ? -1 : 1, O = r.ratio || 0, C = !!r.depthSort, I = r.distanceTo, C)) {
                        void 0 === I && (I = n.x.Zero());
                        var D = r.depthSortedFacets
                    }
                    var L = 0,
                        w = 0,
                        F = 0,
                        N = 0;
                    if (S && r && r.bbSize) {
                        var B = 0,
                            U = 0,
                            V = 0,
                            G = 0,
                            k = 0,
                            z = 0,
                            j = 0,
                            H = 0,
                            W = 0,
                            X = 0,
                            Y = 0,
                            K = 0,
                            Q = 0,
                            q = 0,
                            Z = 0,
                            J = 0,
                            $ = r.bbSize.x > r.bbSize.y ? r.bbSize.x : r.bbSize.y;
                        $ = $ > r.bbSize.z ? $ : r.bbSize.z, L = r.subDiv.X * O / r.bbSize.x, w = r.subDiv.Y * O / r.bbSize.y, F = r.subDiv.Z * O / r.bbSize.z, N = r.subDiv.max * r.subDiv.max, r.facetPartitioning.length = 0
                    }
                    for (o = 0; o < e.length; o++) i[o] = 0;
                    var ee = t.length / 3 | 0;
                    for (o = 0; o < ee; o++) {
                        if (m = (g = 3 * t[3 * o]) + 1, v = g + 2, b = (y = 3 * t[3 * o + 1]) + 1, T = y + 2, A = (E = 3 * t[3 * o + 2]) + 1, x = E + 2, s = e[g] - e[y], a = e[m] - e[b], c = e[v] - e[T], l = e[E] - e[y], u = e[A] - e[b], d = M * (a * (h = e[x] - e[T]) - c * u), f = M * (c * l - s * h), p = M * (s * u - a * l), d /= _ = 0 === (_ = Math.sqrt(d * d + f * f + p * p)) ? 1 : _, f /= _, p /= _, R && r && (r.facetNormals[o].x = d, r.facetNormals[o].y = f, r.facetNormals[o].z = p), P && r && (r.facetPositions[o].x = (e[g] + e[y] + e[E]) / 3, r.facetPositions[o].y = (e[m] + e[b] + e[A]) / 3, r.facetPositions[o].z = (e[v] + e[T] + e[x]) / 3), S && r && (B = Math.floor((r.facetPositions[o].x - r.bInfo.minimum.x * O) * L), U = Math.floor((r.facetPositions[o].y - r.bInfo.minimum.y * O) * w), V = Math.floor((r.facetPositions[o].z - r.bInfo.minimum.z * O) * F), G = Math.floor((e[g] - r.bInfo.minimum.x * O) * L), k = Math.floor((e[m] - r.bInfo.minimum.y * O) * w), z = Math.floor((e[v] - r.bInfo.minimum.z * O) * F), j = Math.floor((e[y] - r.bInfo.minimum.x * O) * L), H = Math.floor((e[b] - r.bInfo.minimum.y * O) * w), W = Math.floor((e[T] - r.bInfo.minimum.z * O) * F), X = Math.floor((e[E] - r.bInfo.minimum.x * O) * L), Y = Math.floor((e[A] - r.bInfo.minimum.y * O) * w), K = Math.floor((e[x] - r.bInfo.minimum.z * O) * F), q = G + r.subDiv.max * k + N * z, Z = j + r.subDiv.max * H + N * W, J = X + r.subDiv.max * Y + N * K, Q = B + r.subDiv.max * U + N * V, r.facetPartitioning[Q] = r.facetPartitioning[Q] ? r.facetPartitioning[Q] : new Array, r.facetPartitioning[q] = r.facetPartitioning[q] ? r.facetPartitioning[q] : new Array, r.facetPartitioning[Z] = r.facetPartitioning[Z] ? r.facetPartitioning[Z] : new Array, r.facetPartitioning[J] = r.facetPartitioning[J] ? r.facetPartitioning[J] : new Array, r.facetPartitioning[q].push(o), Z != q && r.facetPartitioning[Z].push(o), J != Z && J != q && r.facetPartitioning[J].push(o), Q != q && Q != Z && Q != J && r.facetPartitioning[Q].push(o)), C && r && r.facetPositions) {
                            var te = D[o];
                            te.ind = 3 * o, te.sqDistance = n.x.DistanceSquared(r.facetPositions[o], I)
                        }
                        i[g] += d, i[m] += f, i[v] += p, i[y] += d, i[b] += f, i[T] += p, i[E] += d, i[A] += f, i[x] += p
                    }
                    for (o = 0; o < i.length / 3; o++) d = i[3 * o], f = i[3 * o + 1], p = i[3 * o + 2], d /= _ = 0 === (_ = Math.sqrt(d * d + f * f + p * p)) ? 1 : _, f /= _, p /= _, i[3 * o] = d, i[3 * o + 1] = f, i[3 * o + 2] = p
                }, e._ComputeSides = function(t, i, r, o, s, a, c) {
                    var l, u, h = r.length,
                        d = o.length;
                    switch (t = t || e.DEFAULTSIDE) {
                        case e.FRONTSIDE:
                            break;
                        case e.BACKSIDE:
                            var f;
                            for (l = 0; l < h; l += 3) f = r[l], r[l] = r[l + 2], r[l + 2] = f;
                            for (u = 0; u < d; u++) o[u] = -o[u];
                            break;
                        case e.DOUBLESIDE:
                            for (var p = i.length, _ = p / 3, g = 0; g < p; g++) i[p + g] = i[g];
                            for (l = 0; l < h; l += 3) r[l + h] = r[l + 2] + _, r[l + 1 + h] = r[l + 1] + _, r[l + 2 + h] = r[l] + _;
                            for (u = 0; u < d; u++) o[d + u] = -o[u];
                            var m = s.length,
                                v = 0;
                            for (v = 0; v < m; v++) s[v + m] = s[v];
                            for (a = a || new n.y(0, 0, 1, 1), c = c || new n.y(0, 0, 1, 1), v = 0, l = 0; l < m / 2; l++) s[v] = a.x + (a.z - a.x) * s[v], s[v + 1] = a.y + (a.w - a.y) * s[v + 1], s[v + m] = c.x + (c.z - c.x) * s[v + m], s[v + m + 1] = c.y + (c.w - c.y) * s[v + m + 1], v += 2
                    }
                }, e.ImportVertexData = function(t, i) {
                    var o = new e,
                        s = t.positions;
                    s && o.set(s, r.b.PositionKind);
                    var a = t.normals;
                    a && o.set(a, r.b.NormalKind);
                    var c = t.tangents;
                    c && o.set(c, r.b.TangentKind);
                    var l = t.uvs;
                    l && o.set(l, r.b.UVKind);
                    var u = t.uv2s;
                    u && o.set(u, r.b.UV2Kind);
                    var h = t.uv3s;
                    h && o.set(h, r.b.UV3Kind);
                    var d = t.uv4s;
                    d && o.set(d, r.b.UV4Kind);
                    var f = t.uv5s;
                    f && o.set(f, r.b.UV5Kind);
                    var p = t.uv6s;
                    p && o.set(p, r.b.UV6Kind);
                    var _ = t.colors;
                    _ && o.set(n.f.CheckColors4(_, s.length / 3), r.b.ColorKind);
                    var g = t.matricesIndices;
                    g && o.set(g, r.b.MatricesIndicesKind);
                    var m = t.matricesWeights;
                    m && o.set(m, r.b.MatricesWeightsKind);
                    var v = t.indices;
                    v && (o.indices = v), i.setAllVerticesData(o, t.updatable)
                }, e.FRONTSIDE = 0, e.BACKSIDE = 1, e.DOUBLESIDE = 2, e.DEFAULTSIDE = 0, e
            }()
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return r
        }), i.d(t, "b", function() {
            return o
        });
        var n = i(1),
            r = function() {
                function e() {}
                return e.NAME_EFFECTLAYER = "EffectLayer", e.NAME_LAYER = "Layer", e.NAME_LENSFLARESYSTEM = "LensFlareSystem", e.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", e.NAME_PARTICLESYSTEM = "ParticleSystem", e.NAME_GAMEPAD = "Gamepad", e.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", e.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", e.NAME_DEPTHRENDERER = "DepthRenderer", e.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", e.NAME_SPRITE = "Sprite", e.NAME_OUTLINERENDERER = "Outline", e.NAME_PROCEDURALTEXTURE = "ProceduralTexture", e.NAME_SHADOWGENERATOR = "ShadowGenerator", e.NAME_OCTREE = "Octree", e.NAME_PHYSICSENGINE = "PhysicsEngine", e.NAME_AUDIO = "Audio", e.STEP_ISREADYFORMESH_EFFECTLAYER = 0, e.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, e.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, e.STEP_ACTIVEMESH_BOUNDINGBOXRENDERER = 0, e.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, e.STEP_BEFORECAMERADRAW_EFFECTLAYER = 0, e.STEP_BEFORECAMERADRAW_LAYER = 1, e.STEP_BEFORERENDERTARGETDRAW_LAYER = 0, e.STEP_BEFORERENDERINGMESH_OUTLINE = 0, e.STEP_AFTERRENDERINGMESH_OUTLINE = 0, e.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, e.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, e.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, e.STEP_BEFORECAMERAUPDATE_GAMEPAD = 1, e.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, e.STEP_AFTERRENDERTARGETDRAW_LAYER = 0, e.STEP_AFTERCAMERADRAW_EFFECTLAYER = 0, e.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 1, e.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 2, e.STEP_AFTERCAMERADRAW_LAYER = 3, e.STEP_AFTERRENDER_AUDIO = 0, e.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 0, e.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, e.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 2, e.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, e.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, e.STEP_POINTERMOVE_SPRITE = 0, e.STEP_POINTERDOWN_SPRITE = 0, e.STEP_POINTERUP_SPRITE = 0, e
            }(),
            o = function(e) {
                function t(t) {
                    return e.apply(this, t) || this
                }
                return n.d(t, e), t.Create = function() {
                    return Object.create(t.prototype)
                }, t.prototype.registerStep = function(e, t, i) {
                    var n = 0;
                    for (Number.MAX_VALUE; n < this.length; n++) {
                        if (e < this[n].index) break
                    }
                    this.splice(n, 0, {
                        index: e,
                        component: t,
                        action: i.bind(t)
                    })
                }, t.prototype.clear = function() {
                    this.length = 0
                }, t
            }(Array)
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return l
        });
        var n = i(6),
            r = i(16),
            o = i(0),
            s = i(23),
            a = i(4),
            c = i(38),
            l = function() {
                function e() {}
                return e.BindEyePosition = function(e, t) {
                    if (t._forcedViewPosition) e.setVector3("vEyePosition", t._forcedViewPosition);
                    else {
                        var i = t.activeCamera.globalPosition;
                        i || (i = t.activeCamera.devicePosition), e.setVector3("vEyePosition", t._mirroredCameraPosition ? t._mirroredCameraPosition : i)
                    }
                }, e.PrepareDefinesForMergedUV = function(e, t, i) {
                    t._needUVs = !0, t[i] = !0, e.getTextureMatrix().isIdentityAs3x2() ? (t[i + "DIRECTUV"] = e.coordinatesIndex + 1, 0 === e.coordinatesIndex ? t.MAINUV1 = !0 : t.MAINUV2 = !0) : t[i + "DIRECTUV"] = 0
                }, e.BindTextureMatrix = function(e, t, i) {
                    var n = e.getTextureMatrix();
                    n.isIdentityAs3x2() || t.updateMatrix(i + "Matrix", n)
                }, e.PrepareDefinesForMisc = function(e, t, i, n, o, s, a) {
                    a._areMiscDirty && (a.LOGARITHMICDEPTH = i, a.POINTSIZE = n, a.FOG = t.fogEnabled && e.applyFog && t.fogMode !== r.a.FOGMODE_NONE && o, a.NONUNIFORMSCALING = e.nonUniformScaling, a.ALPHATEST = s)
                }, e.PrepareDefinesForFrameBoundValues = function(e, t, i, n, r) {
                    void 0 === r && (r = null);
                    var o, s, a, c, l = !1;
                    o = null == r ? void 0 !== e.clipPlane && null !== e.clipPlane : r, s = null == r ? void 0 !== e.clipPlane2 && null !== e.clipPlane2 : r, a = null == r ? void 0 !== e.clipPlane3 && null !== e.clipPlane3 : r, c = null == r ? void 0 !== e.clipPlane4 && null !== e.clipPlane4 : r, i.CLIPPLANE !== o && (i.CLIPPLANE = o, l = !0), i.CLIPPLANE2 !== s && (i.CLIPPLANE2 = s, l = !0), i.CLIPPLANE3 !== a && (i.CLIPPLANE3 = a, l = !0), i.CLIPPLANE4 !== c && (i.CLIPPLANE4 = c, l = !0), i.DEPTHPREPASS !== !t.getColorWrite() && (i.DEPTHPREPASS = !i.DEPTHPREPASS, l = !0), i.INSTANCES !== n && (i.INSTANCES = n, l = !0), l && i.markAsUnprocessed()
                }, e.PrepareDefinesForAttributes = function(e, t, i, n, r, o) {
                    if (void 0 === r && (r = !1), void 0 === o && (o = !0), !t._areAttributesDirty && t._needNormals === t._normals && t._needUVs === t._uvs) return !1;
                    if (t._normals = t._needNormals, t._uvs = t._needUVs, t.NORMAL = t._needNormals && e.isVerticesDataPresent(a.b.NormalKind), t._needNormals && e.isVerticesDataPresent(a.b.TangentKind) && (t.TANGENT = !0), t._needUVs ? (t.UV1 = e.isVerticesDataPresent(a.b.UVKind), t.UV2 = e.isVerticesDataPresent(a.b.UV2Kind)) : (t.UV1 = !1, t.UV2 = !1), i) {
                        var s = e.useVertexColors && e.isVerticesDataPresent(a.b.ColorKind);
                        t.VERTEXCOLOR = s, t.VERTEXALPHA = e.hasVertexAlpha && s && o
                    }
                    if (n)
                        if (e.useBones && e.computeBonesUsingShaders && e.skeleton) {
                            t.NUM_BONE_INFLUENCERS = e.numBoneInfluencers;
                            var c = void 0 !== t.BONETEXTURE;
                            e.skeleton.isUsingTextureForMatrices && c ? t.BONETEXTURE = !0 : (t.BonesPerMesh = e.skeleton.bones.length + 1, t.BONETEXTURE = !c && void 0)
                        } else t.NUM_BONE_INFLUENCERS = 0, t.BonesPerMesh = 0;
                    if (r) {
                        var l = e.morphTargetManager;
                        l ? (t.MORPHTARGETS_TANGENT = l.supportsTangents && t.TANGENT, t.MORPHTARGETS_NORMAL = l.supportsNormals && t.NORMAL, t.MORPHTARGETS = l.numInfluencers > 0, t.NUM_MORPH_INFLUENCERS = l.numInfluencers) : (t.MORPHTARGETS_TANGENT = !1, t.MORPHTARGETS_NORMAL = !1, t.MORPHTARGETS = !1, t.NUM_MORPH_INFLUENCERS = 0)
                    }
                    return !0
                }, e.PrepareDefinesForMultiview = function(e, t) {
                    if (e.activeCamera) {
                        var i = t.MULTIVIEW;
                        t.MULTIVIEW = null !== e.activeCamera.outputRenderTarget && e.activeCamera.outputRenderTarget.getViewCount() > 1, t.MULTIVIEW != i && t.markAsUnprocessed()
                    }
                }, e.PrepareDefinesForLights = function(e, t, i, n, r, o) {
                    if (void 0 === r && (r = 4), void 0 === o && (o = !1), !i._areLightsDirty) return i._needNormals;
                    var s = 0,
                        a = !1,
                        l = !1,
                        u = !1,
                        h = !1,
                        d = !1;
                    if (e.lightsEnabled && !o)
                        for (var f = 0, p = t.lightSources; f < p.length; f++) {
                            var _ = p[f];
                            switch (a = !0, void 0 === i["LIGHT" + s] && (l = !0), i["LIGHT" + s] = !0, i["SPOTLIGHT" + s] = !1, i["HEMILIGHT" + s] = !1, i["POINTLIGHT" + s] = !1, i["DIRLIGHT" + s] = !1, _.prepareLightSpecificDefines(i, s), i["LIGHT_FALLOFF_PHYSICAL" + s] = !1, i["LIGHT_FALLOFF_GLTF" + s] = !1, i["LIGHT_FALLOFF_STANDARD" + s] = !1, _.falloffType) {
                                case c.a.FALLOFF_GLTF:
                                    i["LIGHT_FALLOFF_GLTF" + s] = !0;
                                    break;
                                case c.a.FALLOFF_PHYSICAL:
                                    i["LIGHT_FALLOFF_PHYSICAL" + s] = !0;
                                    break;
                                case c.a.FALLOFF_STANDARD:
                                    i["LIGHT_FALLOFF_STANDARD" + s] = !0
                            }
                            if (n && !_.specular.equalsFloats(0, 0, 0) && (d = !0), i["SHADOW" + s] = !1, i["SHADOWPCF" + s] = !1, i["SHADOWPCSS" + s] = !1, i["SHADOWPOISSON" + s] = !1, i["SHADOWESM" + s] = !1, i["SHADOWCUBE" + s] = !1, i["SHADOWLOWQUALITY" + s] = !1, i["SHADOWMEDIUMQUALITY" + s] = !1, t && t.receiveShadows && e.shadowsEnabled && _.shadowEnabled) {
                                var g = _.getShadowGenerator();
                                if (g) {
                                    var m = g.getShadowMap();
                                    m && m.renderList && m.renderList.length > 0 && (h = !0, g.prepareDefines(i, s))
                                }
                            }
                            if (_.lightmapMode != c.a.LIGHTMAP_DEFAULT ? (u = !0, i["LIGHTMAPEXCLUDED" + s] = !0, i["LIGHTMAPNOSPECULAR" + s] = _.lightmapMode == c.a.LIGHTMAP_SHADOWSONLY) : (i["LIGHTMAPEXCLUDED" + s] = !1, i["LIGHTMAPNOSPECULAR" + s] = !1), ++s === r) break
                        }
                    i.SPECULARTERM = d, i.SHADOWS = h;
                    for (var v = s; v < r; v++) void 0 !== i["LIGHT" + v] && (i["LIGHT" + v] = !1, i["HEMILIGHT" + v] = !1, i["POINTLIGHT" + v] = !1, i["DIRLIGHT" + v] = !1, i["SPOTLIGHT" + v] = !1, i["SHADOW" + v] = !1, i["SHADOWPCF" + v] = !1, i["SHADOWPCSS" + v] = !1, i["SHADOWPOISSON" + v] = !1, i["SHADOWESM" + v] = !1, i["SHADOWCUBE" + v] = !1, i["SHADOWLOWQUALITY" + v] = !1, i["SHADOWMEDIUMQUALITY" + v] = !1);
                    var y = e.getEngine().getCaps();
                    return void 0 === i.SHADOWFLOAT && (l = !0), i.SHADOWFLOAT = h && (y.textureFloatRender && y.textureFloatLinearFiltering || y.textureHalfFloatRender && y.textureHalfFloatLinearFiltering), i.LIGHTMAPEXCLUDED = u, l && i.rebuild(), a
                }, e.PrepareUniformsAndSamplersList = function(e, t, i, n) {
                    var r;
                    void 0 === n && (n = 4);
                    var o = null;
                    if (e.uniformsNames) {
                        var s = e;
                        r = s.uniformsNames, o = s.uniformBuffersNames, t = s.samplers, i = s.defines, n = s.maxSimultaneousLights
                    } else r = e, t || (t = []);
                    for (var a = 0; a < n && i["LIGHT" + a]; a++) r.push("vLightData" + a, "vLightDiffuse" + a, "vLightSpecular" + a, "vLightDirection" + a, "vLightFalloff" + a, "vLightGround" + a, "lightMatrix" + a, "shadowsInfo" + a, "depthValues" + a), o && o.push("Light" + a), t.push("shadowSampler" + a), t.push("depthSampler" + a), i["PROJECTEDLIGHTTEXTURE" + a] && (t.push("projectionLightSampler" + a), r.push("textureProjectionMatrix" + a));
                    i.NUM_MORPH_INFLUENCERS && r.push("morphTargetInfluences")
                }, e.HandleFallbacksForShadows = function(e, t, i, n) {
                    void 0 === i && (i = 4), void 0 === n && (n = 0);
                    for (var r = 0, o = 0; o < i && e["LIGHT" + o]; o++) o > 0 && (r = n + o, t.addFallback(r, "LIGHT" + o)), e.SHADOWS || (e["SHADOW" + o] && t.addFallback(n, "SHADOW" + o), e["SHADOWPCF" + o] && t.addFallback(n, "SHADOWPCF" + o), e["SHADOWPCSS" + o] && t.addFallback(n, "SHADOWPCSS" + o), e["SHADOWPOISSON" + o] && t.addFallback(n, "SHADOWPOISSON" + o), e["SHADOWESM" + o] && t.addFallback(n, "SHADOWESM" + o));
                    return r++
                }, e.PrepareAttributesForMorphTargets = function(e, t, i) {
                    var r = i.NUM_MORPH_INFLUENCERS;
                    if (r > 0 && s.a.LastCreatedEngine)
                        for (var o = s.a.LastCreatedEngine.getCaps().maxVertexAttribs, c = t.morphTargetManager, l = c && c.supportsNormals && i.NORMAL, u = c && c.supportsTangents && i.TANGENT, h = 0; h < r; h++) e.push(a.b.PositionKind + h), l && e.push(a.b.NormalKind + h), u && e.push(a.b.TangentKind + h), e.length > o && n.a.Error("Cannot add more vertex attributes for mesh " + t.name)
                }, e.PrepareAttributesForBones = function(e, t, i, n) {
                    i.NUM_BONE_INFLUENCERS > 0 && (n.addCPUSkinningFallback(0, t), e.push(a.b.MatricesIndicesKind), e.push(a.b.MatricesWeightsKind), i.NUM_BONE_INFLUENCERS > 4 && (e.push(a.b.MatricesIndicesExtraKind), e.push(a.b.MatricesWeightsExtraKind)))
                }, e.PrepareAttributesForInstances = function(e, t) {
                    t.INSTANCES && (e.push("world0"), e.push("world1"), e.push("world2"), e.push("world3"))
                }, e.BindLightShadow = function(e, t, i, n) {
                    if (e.shadowEnabled && t.receiveShadows) {
                        var r = e.getShadowGenerator();
                        r && r.bindShadowLight(i, n)
                    }
                }, e.BindLightProperties = function(e, t, i) {
                    e.transferToEffect(t, i + "")
                }, e.BindLights = function(t, i, n, r, s, a) {
                    void 0 === s && (s = 4), void 0 === a && (a = !1);
                    for (var c = Math.min(i.lightSources.length, s), l = 0; l < c; l++) {
                        var u = i.lightSources[l],
                            h = l.toString(),
                            d = u.getScaledIntensity();
                        u._uniformBuffer.bindToEffect(n, "Light" + l), e.BindLightProperties(u, n, l), u.diffuse.scaleToRef(d, o.t.Color3[0]), u._uniformBuffer.updateColor4("vLightDiffuse", o.t.Color3[0], a ? u.radius : u.range, h), r.SPECULARTERM && (u.specular.scaleToRef(d, o.t.Color3[1]), u._uniformBuffer.updateColor3("vLightSpecular", o.t.Color3[1], h)), t.shadowsEnabled && this.BindLightShadow(u, i, h, n), u._uniformBuffer.update()
                    }
                }, e.BindFogParameters = function(e, t, i, n) {
                    void 0 === n && (n = !1), e.fogEnabled && t.applyFog && e.fogMode !== r.a.FOGMODE_NONE && (i.setFloat4("vFogInfos", e.fogMode, e.fogStart, e.fogEnd, e.fogDensity), n ? (e.fogColor.toLinearSpaceToRef(this._tempFogColor), i.setColor3("vFogColor", this._tempFogColor)) : i.setColor3("vFogColor", e.fogColor))
                }, e.BindBonesParameters = function(e, t) {
                    if (t && e && (e.computeBonesUsingShaders && t._bonesComputationForcedToCPU && (e.computeBonesUsingShaders = !1), e.useBones && e.computeBonesUsingShaders && e.skeleton)) {
                        var i = e.skeleton;
                        if (i.isUsingTextureForMatrices && t.getUniformIndex("boneTextureWidth") > -1) {
                            var n = i.getTransformMatrixTexture();
                            t.setTexture("boneSampler", n), t.setFloat("boneTextureWidth", 4 * (i.bones.length + 1))
                        } else {
                            var r = i.getTransformMatrices(e);
                            r && t.setMatrices("mBones", r)
                        }
                    }
                }, e.BindMorphTargetParameters = function(e, t) {
                    var i = e.morphTargetManager;
                    e && i && t.setFloatArray("morphTargetInfluences", i.influences)
                }, e.BindLogDepth = function(e, t, i) {
                    e.LOGARITHMICDEPTH && t.setFloat("logarithmicDepthConstant", 2 / (Math.log(i.activeCamera.maxZ + 1) / Math.LN2))
                }, e.BindClipPlane = function(e, t) {
                    if (t.clipPlane) {
                        var i = t.clipPlane;
                        e.setFloat4("vClipPlane", i.normal.x, i.normal.y, i.normal.z, i.d)
                    }
                    if (t.clipPlane2) {
                        i = t.clipPlane2;
                        e.setFloat4("vClipPlane2", i.normal.x, i.normal.y, i.normal.z, i.d)
                    }
                    if (t.clipPlane3) {
                        i = t.clipPlane3;
                        e.setFloat4("vClipPlane3", i.normal.x, i.normal.y, i.normal.z, i.d)
                    }
                    if (t.clipPlane4) {
                        i = t.clipPlane4;
                        e.setFloat4("vClipPlane4", i.normal.x, i.normal.y, i.normal.z, i.d)
                    }
                }, e._tempFogColor = o.e.Black(), e
            }()
    }, function(e, t, i) {
        "use strict";
        var n = i(1),
            r = i(9),
            o = i(47),
            s = i(8),
            a = i(28),
            c = i(61),
            l = i(29),
            u = i(0),
            h = i(42),
            d = i(24),
            f = i(21),
            p = i(30),
            _ = i(31),
            g = i(63),
            m = i(38),
            v = i(50),
            y = i(36),
            b = i(83),
            T = i(91),
            E = i(14),
            A = i(3),
            x = i(35),
            R = i(6),
            P = i(23),
            S = i(19),
            C = i(17),
            M = i(79),
            O = i(51),
            I = function() {
                function e() {
                    this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
                }
                return Object.defineProperty(e.prototype, "singleClick", {
                    get: function() {
                        return this._singleClick
                    },
                    set: function(e) {
                        this._singleClick = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "doubleClick", {
                    get: function() {
                        return this._doubleClick
                    },
                    set: function(e) {
                        this._doubleClick = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "hasSwiped", {
                    get: function() {
                        return this._hasSwiped
                    },
                    set: function(e) {
                        this._hasSwiped = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "ignore", {
                    get: function() {
                        return this._ignore
                    },
                    set: function(e) {
                        this._ignore = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(),
            D = function() {
                function e(e) {
                    this._wheelEventName = "", this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._totalPointersPressed = 0, this._doubleClickOccured = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new u.w(0, 0), this._previousStartingPointerPosition = new u.w(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._scene = e
                }
                return Object.defineProperty(e.prototype, "meshUnderPointer", {
                    get: function() {
                        return this._pointerOverMesh
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "unTranslatedPointer", {
                    get: function() {
                        return new u.w(this._unTranslatedPointerX, this._unTranslatedPointerY)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "pointerX", {
                    get: function() {
                        return this._pointerX
                    },
                    set: function(e) {
                        this._pointerX = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "pointerY", {
                    get: function() {
                        return this._pointerY
                    },
                    set: function(e) {
                        this._pointerY = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._updatePointerPosition = function(e) {
                    var t = this._scene.getEngine().getRenderingCanvasClientRect();
                    t && (this._pointerX = e.clientX - t.left, this._pointerY = e.clientY - t.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
                }, e.prototype._processPointerMove = function(e, t) {
                    var i = this._scene,
                        n = i.getEngine().getRenderingCanvas();
                    if (n) {
                        n.tabIndex = 1, n.style.cursor = i.defaultCursor;
                        var r = !!(e && e.hit && e.pickedMesh);
                        r ? (i.setPointerOverMesh(e.pickedMesh), this._pointerOverMesh && this._pointerOverMesh.actionManager && this._pointerOverMesh.actionManager.hasPointerTriggers && (this._pointerOverMesh.actionManager.hoverCursor ? n.style.cursor = this._pointerOverMesh.actionManager.hoverCursor : n.style.cursor = i.hoverCursor)) : i.setPointerOverMesh(null);
                        for (var o = 0, s = i._pointerMoveStage; o < s.length; o++) {
                            e = s[o].action(this._unTranslatedPointerX, this._unTranslatedPointerY, e, r, n)
                        }
                        if (e) {
                            var a = t.type === this._wheelEventName ? C.a.POINTERWHEEL : C.a.POINTERMOVE;
                            if (i.onPointerMove && i.onPointerMove(t, e, a), i.onPointerObservable.hasObservers()) {
                                var c = new C.b(a, t, e);
                                this._setRayOnPointerInfo(c), i.onPointerObservable.notifyObservers(c, a)
                            }
                        }
                    }
                }, e.prototype._setRayOnPointerInfo = function(e) {
                    var t = this._scene;
                    e.pickInfo && !e.pickInfo._pickingUnavailable && (e.pickInfo.ray || (e.pickInfo.ray = t.createPickingRay(e.event.offsetX, e.event.offsetY, u.j.Identity(), t.activeCamera)))
                }, e.prototype._checkPrePointerObservable = function(e, t, i) {
                    var n = this._scene,
                        r = new C.d(i, t, this._unTranslatedPointerX, this._unTranslatedPointerY);
                    return e && (r.ray = e.ray), n.onPrePointerObservable.notifyObservers(r, i), !!r.skipOnPointerObservable
                }, e.prototype.simulatePointerMove = function(e, t) {
                    var i = new PointerEvent("pointermove", t);
                    this._checkPrePointerObservable(e, i, C.a.POINTERMOVE) || this._processPointerMove(e, i)
                }, e.prototype.simulatePointerDown = function(e, t) {
                    var i = new PointerEvent("pointerdown", t);
                    this._checkPrePointerObservable(e, i, C.a.POINTERDOWN) || this._processPointerDown(e, i)
                }, e.prototype._processPointerDown = function(t, i) {
                    var n = this,
                        r = this._scene;
                    if (t && t.hit && t.pickedMesh) {
                        this._pickedDownMesh = t.pickedMesh;
                        var o = t.pickedMesh.actionManager;
                        if (o) {
                            if (o.hasPickTriggers) switch (o.processTrigger(A.a.ACTION_OnPickDownTrigger, y.a.CreateNew(t.pickedMesh, i)), i.button) {
                                case 0:
                                    o.processTrigger(A.a.ACTION_OnLeftPickTrigger, y.a.CreateNew(t.pickedMesh, i));
                                    break;
                                case 1:
                                    o.processTrigger(A.a.ACTION_OnCenterPickTrigger, y.a.CreateNew(t.pickedMesh, i));
                                    break;
                                case 2:
                                    o.processTrigger(A.a.ACTION_OnRightPickTrigger, y.a.CreateNew(t.pickedMesh, i))
                            }
                            o.hasSpecificTrigger(A.a.ACTION_OnLongPressTrigger) && window.setTimeout(function() {
                                var t = r.pick(n._unTranslatedPointerX, n._unTranslatedPointerY, function(e) {
                                    return e.isPickable && e.isVisible && e.isReady() && e.actionManager && e.actionManager.hasSpecificTrigger(A.a.ACTION_OnLongPressTrigger) && e == n._pickedDownMesh
                                }, !1, r.cameraToUseForPointers);
                                t && t.hit && t.pickedMesh && o && 0 !== n._totalPointersPressed && Date.now() - n._startingPointerTime > e.LongPressDelay && !n._isPointerSwiping() && (n._startingPointerTime = 0, o.processTrigger(A.a.ACTION_OnLongPressTrigger, y.a.CreateNew(t.pickedMesh, i)))
                            }, e.LongPressDelay)
                        }
                    } else
                        for (var s = 0, a = r._pointerDownStage; s < a.length; s++) {
                            t = a[s].action(this._unTranslatedPointerX, this._unTranslatedPointerY, t, i)
                        }
                    if (t) {
                        var c = C.a.POINTERDOWN;
                        if (r.onPointerDown && r.onPointerDown(i, t, c), r.onPointerObservable.hasObservers()) {
                            var l = new C.b(c, i, t);
                            this._setRayOnPointerInfo(l), r.onPointerObservable.notifyObservers(l, c)
                        }
                    }
                }, e.prototype._isPointerSwiping = function() {
                    return Math.abs(this._startingPointerPosition.x - this._pointerX) > e.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > e.DragMovementThreshold
                }, e.prototype.simulatePointerUp = function(e, t, i) {
                    var n = new PointerEvent("pointerup", t),
                        r = new I;
                    i ? r.doubleClick = !0 : r.singleClick = !0, this._checkPrePointerObservable(e, n, C.a.POINTERUP) || this._processPointerUp(e, n, r)
                }, e.prototype._processPointerUp = function(e, t, i) {
                    var n = this._scene;
                    if (e && e && e.pickedMesh) {
                        if (this._pickedUpMesh = e.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (n.onPointerPick && n.onPointerPick(t, e), i.singleClick && !i.ignore && n.onPointerObservable.hasObservers())) {
                            var r = C.a.POINTERPICK,
                                o = new C.b(r, t, e);
                            this._setRayOnPointerInfo(o), n.onPointerObservable.notifyObservers(o, r)
                        }
                        var s = e.pickedMesh._getActionManagerForTrigger();
                        if (s && !i.ignore) {
                            s.processTrigger(A.a.ACTION_OnPickUpTrigger, y.a.CreateNew(e.pickedMesh, t)), !i.hasSwiped && i.singleClick && s.processTrigger(A.a.ACTION_OnPickTrigger, y.a.CreateNew(e.pickedMesh, t));
                            var a = e.pickedMesh._getActionManagerForTrigger(A.a.ACTION_OnDoublePickTrigger);
                            i.doubleClick && a && a.processTrigger(A.a.ACTION_OnDoublePickTrigger, y.a.CreateNew(e.pickedMesh, t))
                        }
                    } else if (!i.ignore)
                        for (var c = 0, l = n._pointerUpStage; c < l.length; c++) {
                            e = l[c].action(this._unTranslatedPointerX, this._unTranslatedPointerY, e, t)
                        }
                    if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
                        var u = this._pickedDownMesh._getActionManagerForTrigger(A.a.ACTION_OnPickOutTrigger);
                        u && u.processTrigger(A.a.ACTION_OnPickOutTrigger, y.a.CreateNew(this._pickedDownMesh, t))
                    }
                    var h = 0;
                    if (n.onPointerObservable.hasObservers()) {
                        if (!i.ignore && !i.hasSwiped && (i.singleClick && n.onPointerObservable.hasSpecificMask(C.a.POINTERTAP) ? h = C.a.POINTERTAP : i.doubleClick && n.onPointerObservable.hasSpecificMask(C.a.POINTERDOUBLETAP) && (h = C.a.POINTERDOUBLETAP), h)) {
                            o = new C.b(h, t, e);
                            this._setRayOnPointerInfo(o), n.onPointerObservable.notifyObservers(o, h)
                        }
                        if (!i.ignore) {
                            h = C.a.POINTERUP;
                            o = new C.b(h, t, e);
                            this._setRayOnPointerInfo(o), n.onPointerObservable.notifyObservers(o, h)
                        }
                    }
                    n.onPointerUp && !i.ignore && n.onPointerUp(t, e, h)
                }, e.prototype.isPointerCaptured = function(e) {
                    return void 0 === e && (e = 0), this._pointerCaptures[e]
                }, e.prototype.attachControl = function(t, i, n) {
                    var o = this;
                    void 0 === t && (t = !0), void 0 === i && (i = !0), void 0 === n && (n = !0);
                    var s = this._scene,
                        a = s.getEngine().getRenderingCanvas();
                    if (a) {
                        var c = s.getEngine();
                        this._initActionManager = function(e, t) {
                            if (!o._meshPickProceed) {
                                var i = s.pick(o._unTranslatedPointerX, o._unTranslatedPointerY, s.pointerDownPredicate, !1, s.cameraToUseForPointers);
                                o._currentPickResult = i, i && (e = i.hit && i.pickedMesh ? i.pickedMesh._getActionManagerForTrigger() : null), o._meshPickProceed = !0
                            }
                            return e
                        }, this._delayedSimpleClick = function(t, i, n) {
                            (Date.now() - o._previousStartingPointerTime > e.DoubleClickDelay && !o._doubleClickOccured || t !== o._previousButtonPressed) && (o._doubleClickOccured = !1, i.singleClick = !0, i.ignore = !1, n(i, o._currentPickResult))
                        }, this._initClickEvent = function(t, i, n, r) {
                            var s = new I;
                            o._currentPickResult = null;
                            var a = null,
                                c = t.hasSpecificMask(C.a.POINTERPICK) || i.hasSpecificMask(C.a.POINTERPICK) || t.hasSpecificMask(C.a.POINTERTAP) || i.hasSpecificMask(C.a.POINTERTAP) || t.hasSpecificMask(C.a.POINTERDOUBLETAP) || i.hasSpecificMask(C.a.POINTERDOUBLETAP);
                            !c && M.a && (a = o._initActionManager(a, s)) && (c = a.hasPickTriggers);
                            var l = !1;
                            if (c) {
                                var u = n.button;
              