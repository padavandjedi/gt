/*
 jQuery JavaScript Library v2.2.4
 http://jquery.com/

 Includes Sizzle.js
 http://sizzlejs.com/

 Copyright jQuery Foundation and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2016-05-20T17:23Z
 Sizzle CSS Selector Engine v2.2.1
 http://sizzlejs.com/

 Copyright jQuery Foundation and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2015-10-17
 Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)

 Copyright 2013-2017 bootstrap-select
 Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (c, l, m) {
    c instanceof String && (c = String(c));
    for (var a = c.length, d = 0; d < a; d++) {
        var g = c[d];
        if (l.call(m, g, d, c)) return {i: d, v: g}
    }
    return {i: -1, v: void 0}
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (c, l, m) {
    c != Array.prototype && c != Object.prototype && (c[l] = m.value)
};
$jscomp.getGlobal = function (c) {
    return "undefined" != typeof window && window === c ? c : "undefined" != typeof global && null != global ? global : c
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (c, l, m, a) {
    if (l) {
        m = $jscomp.global;
        c = c.split(".");
        for (a = 0; a < c.length - 1; a++) {
            var d = c[a];
            d in m || (m[d] = {});
            m = m[d]
        }
        c = c[c.length - 1];
        a = m[c];
        l = l(a);
        l != a && null != l && $jscomp.defineProperty(m, c, {configurable: !0, writable: !0, value: l})
    }
};
$jscomp.polyfill("Array.prototype.find", function (c) {
    return c ? c : function (c, m) {
        return $jscomp.findInternal(this, c, m).v
    }
}, "es6", "es3");
$jscomp.polyfill("Object.is", function (c) {
    return c ? c : function (c, m) {
        return c === m ? 0 !== c || 1 / c === 1 / m : c !== c && m !== m
    }
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function (c) {
    return c ? c : function (c, m) {
        var a = this;
        a instanceof String && (a = String(a));
        var d = a.length;
        for (m = m || 0; m < d; m++) if (a[m] == c || Object.is(a[m], c)) return !0;
        return !1
    }
}, "es7", "es3");
$jscomp.checkStringArgs = function (c, l, m) {
    if (null == c) throw new TypeError("The 'this' value for String.prototype." + m + " must not be null or undefined");
    if (l instanceof RegExp) throw new TypeError("First argument to String.prototype." + m + " must not be a regular expression");
    return c + ""
};
$jscomp.polyfill("String.prototype.includes", function (c) {
    return c ? c : function (c, m) {
        return -1 !== $jscomp.checkStringArgs(this, c, "includes").indexOf(c, m || 0)
    }
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (c) {
    return c ? c : function (c, m) {
        var a = $jscomp.checkStringArgs(this, c, "startsWith");
        c += "";
        var d = a.length, g = c.length;
        m = Math.max(0, Math.min(m | 0, a.length));
        for (var k = 0; k < g && m < d;) if (a[m++] != c[k++]) return !1;
        return k >= g
    }
}, "es6", "es3");
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
    $jscomp.initSymbol = function () {
    };
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.Symbol = function () {
    var c = 0;
    return function (l) {
        return $jscomp.SYMBOL_PREFIX + (l || "") + c++
    }
}();
$jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    var c = $jscomp.global.Symbol.iterator;
    c || (c = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[c] && $jscomp.defineProperty(Array.prototype, c, {
        configurable: !0,
        writable: !0,
        value: function () {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function () {
    }
};
$jscomp.arrayIterator = function (c) {
    var l = 0;
    return $jscomp.iteratorPrototype(function () {
        return l < c.length ? {done: !1, value: c[l++]} : {done: !0}
    })
};
$jscomp.iteratorPrototype = function (c) {
    $jscomp.initSymbolIterator();
    c = {next: c};
    c[$jscomp.global.Symbol.iterator] = function () {
        return this
    };
    return c
};
$jscomp.iteratorFromArray = function (c, l) {
    $jscomp.initSymbolIterator();
    c instanceof String && (c += "");
    var m = 0, a = {
        next: function () {
            if (m < c.length) {
                var d = m++;
                return {value: l(d, c[d]), done: !1}
            }
            a.next = function () {
                return {done: !0, value: void 0}
            };
            return a.next()
        }
    };
    a[Symbol.iterator] = function () {
        return a
    };
    return a
};
$jscomp.polyfill("Array.prototype.keys", function (c) {
    return c ? c : function () {
        return $jscomp.iteratorFromArray(this, function (c) {
            return c
        })
    }
}, "es6", "es3");
(function (c, l) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = c.document ? l(c, !0) : function (c) {
        if (!c.document) throw Error("jQuery requires a window with a document");
        return l(c)
    } : l(c)
})("undefined" !== typeof window ? window : this, function (c, l) {
    function m(b) {
        var f = !!b && "length" in b && b.length, a = e.type(b);
        return "function" === a || e.isWindow(b) ? !1 : "array" === a || 0 === f || "number" === typeof f && 0 < f && f - 1 in b
    }

    function a(b, f, a) {
        if (e.isFunction(f)) return e.grep(b, function (b, n) {
            return !!f.call(b,
                n, b) !== a
        });
        if (f.nodeType) return e.grep(b, function (b) {
            return b === f !== a
        });
        if ("string" === typeof f) {
            if (sb.test(f)) return e.filter(f, b, a);
            f = e.filter(f, b)
        }
        return e.grep(b, function (b) {
            return -1 < Fa.call(f, b) !== a
        })
    }

    function d(b, f) {
        for (; (b = b[f]) && 1 !== b.nodeType;) ;
        return b
    }

    function g(b) {
        var f = {};
        e.each(b.match(ca) || [], function (b, a) {
            f[a] = !0
        });
        return f
    }

    function k() {
        z.removeEventListener("DOMContentLoaded", k);
        c.removeEventListener("load", k);
        e.ready()
    }

    function p() {
        this.expando = e.expando + p.uid++
    }

    function C(b, f, a) {
        if (void 0 ===
            a && 1 === b.nodeType) if (a = "data-" + f.replace(Wa, "-$&").toLowerCase(), a = b.getAttribute(a), "string" === typeof a) {
            try {
                a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : +a + "" === a ? +a : tb.test(a) ? e.parseJSON(a) : a
            } catch (t) {
            }
            T.set(b, f, a)
        } else a = void 0;
        return a
    }

    function u(b, a, n, t) {
        var f = 1, c = 20, d = t ? function () {
                return t.cur()
            } : function () {
                return e.css(b, a, "")
            }, g = d(), h = n && n[3] || (e.cssNumber[a] ? "" : "px"),
            k = (e.cssNumber[a] || "px" !== h && +g) && ra.exec(e.css(b, a));
        if (k && k[3] !== h) {
            h = h || k[3];
            n = n || [];
            k = +g || 1;
            do f = f || ".5", k /= f, e.style(b,
                a, k + h); while (f !== (f = d() / g) && 1 !== f && --c)
        }
        if (n) {
            k = +k || +g || 0;
            var l = n[1] ? k + (n[1] + 1) * n[2] : +n[2];
            t && (t.unit = h, t.start = k, t.end = l)
        }
        return l
    }

    function v(b, a) {
        var f = "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName(a || "*") : "undefined" !== typeof b.querySelectorAll ? b.querySelectorAll(a || "*") : [];
        return void 0 === a || a && e.nodeName(b, a) ? e.merge([b], f) : f
    }

    function r(b, a) {
        for (var f = 0, e = b.length; f < e; f++) A.set(b[f], "globalEval", !a || A.get(a[f], "globalEval"))
    }

    function D(b, a, n, t, c) {
        for (var f, d, w, g = a.createDocumentFragment(),
                 h = [], k = 0, l = b.length; k < l; k++) if ((f = b[k]) || 0 === f) if ("object" === e.type(f)) e.merge(h, f.nodeType ? [f] : f); else if (vb.test(f)) {
            d = d || g.appendChild(a.createElement("div"));
            w = (Xa.exec(f) || ["", ""])[1].toLowerCase();
            w = V[w] || V._default;
            d.innerHTML = w[1] + e.htmlPrefilter(f) + w[2];
            for (w = w[0]; w--;) d = d.lastChild;
            e.merge(h, d.childNodes);
            d = g.firstChild;
            d.textContent = ""
        } else h.push(a.createTextNode(f));
        g.textContent = "";
        for (k = 0; f = h[k++];) if (t && -1 < e.inArray(f, t)) c && c.push(f); else if (b = e.contains(f.ownerDocument, f), d = v(g.appendChild(f),
                "script"), b && r(d), n) for (w = 0; f = d[w++];) Ya.test(f.type || "") && n.push(f);
        return g
    }

    function h() {
        return !0
    }

    function x() {
        return !1
    }

    function q() {
        try {
            return z.activeElement
        } catch (b) {
        }
    }

    function F(b, a, n, t, c, d) {
        var f;
        if ("object" === typeof a) {
            "string" !== typeof n && (t = t || n, n = void 0);
            for (f in a) F(b, f, n, t, a[f], d);
            return b
        }
        null == t && null == c ? (c = n, t = n = void 0) : null == c && ("string" === typeof n ? (c = t, t = void 0) : (c = t, t = n, n = void 0));
        if (!1 === c) c = x; else if (!c) return b;
        if (1 === d) {
            var w = c;
            c = function (b) {
                e().off(b);
                return w.apply(this, arguments)
            };
            c.guid = w.guid || (w.guid = e.guid++)
        }
        return b.each(function () {
            e.event.add(this, a, c, t, n)
        })
    }

    function J(b, a) {
        return e.nodeName(b, "table") && e.nodeName(11 !== a.nodeType ? a : a.firstChild, "tr") ? b.getElementsByTagName("tbody")[0] || b.appendChild(b.ownerDocument.createElement("tbody")) : b
    }

    function L(b) {
        b.type = (null !== b.getAttribute("type")) + "/" + b.type;
        return b
    }

    function E(b) {
        var a = wb.exec(b.type);
        a ? b.type = a[1] : b.removeAttribute("type");
        return b
    }

    function G(b, a) {
        var f, t;
        if (1 === a.nodeType) {
            if (A.hasData(b)) {
                var c = A.access(b);
                var d = A.set(a, c);
                if (c = c.events) for (t in delete d.handle, d.events = {}, c) for (d = 0, f = c[t].length; d < f; d++) e.event.add(a, t, c[t][d])
            }
            T.hasData(b) && (b = T.access(b), b = e.extend({}, b), T.set(a, b))
        }
    }

    function I(b, a, n, t) {
        a = Za.apply([], a);
        var f, c = 0, d = b.length, g = d - 1, h = a[0], k = e.isFunction(h);
        if (k || 1 < d && "string" === typeof h && !M.checkClone && xb.test(h)) return b.each(function (f) {
            var e = b.eq(f);
            k && (a[0] = h.call(this, f, e.html()));
            I(e, a, n, t)
        });
        if (d) {
            var l = D(a, b[0].ownerDocument, !1, b, t);
            var p = l.firstChild;
            1 === l.childNodes.length &&
            (l = p);
            if (p || t) {
                p = e.map(v(l, "script"), L);
                for (f = p.length; c < d; c++) {
                    var q = l;
                    c !== g && (q = e.clone(q, !0, !0), f && e.merge(p, v(q, "script")));
                    n.call(b[c], q, c)
                }
                if (f) for (l = p[p.length - 1].ownerDocument, e.map(p, E), c = 0; c < f; c++) q = p[c], Ya.test(q.type || "") && !A.access(q, "globalEval") && e.contains(l, q) && (q.src ? e._evalUrl && e._evalUrl(q.src) : e.globalEval(q.textContent.replace(zb, "")))
            }
        }
        return b
    }

    function B(b, a, n) {
        for (var f = a ? e.filter(a, b) : b, c = 0; null != (a = f[c]); c++) n || 1 !== a.nodeType || e.cleanData(v(a)), a.parentNode && (n && e.contains(a.ownerDocument,
            a) && r(v(a, "script")), a.parentNode.removeChild(a));
        return b
    }

    function R(b, a) {
        b = e(a.createElement(b)).appendTo(a.body);
        a = e.css(b[0], "display");
        b.detach();
        return a
    }

    function ma(b) {
        var a = z, n = $a[b];
        n || (n = R(b, a), "none" !== n && n || (Ga = (Ga || e("<iframe frameborder='0' width='0' height='0'/>")).appendTo(a.documentElement), a = Ga[0].contentDocument, a.write(), a.close(), n = R(b, a), Ga.detach()), $a[b] = n);
        return n
    }

    function H(b, a, n) {
        var f = b.style;
        var c = (n = n || Ha(b)) ? n.getPropertyValue(a) || n[a] : void 0;
        "" !== c && void 0 !== c || e.contains(b.ownerDocument,
            b) || (c = e.style(b, a));
        if (n && !M.pixelMarginRight() && La.test(c) && ab.test(a)) {
            b = f.width;
            a = f.minWidth;
            var d = f.maxWidth;
            f.minWidth = f.maxWidth = f.width = c;
            c = n.width;
            f.width = b;
            f.minWidth = a;
            f.maxWidth = d
        }
        return void 0 !== c ? c + "" : c
    }

    function W(b, a) {
        return {
            get: function () {
                if (b()) delete this.get; else return (this.get = a).apply(this, arguments)
            }
        }
    }

    function Z(b) {
        if (b in bb) return b;
        for (var a = b[0].toUpperCase() + b.slice(1), n = cb.length; n--;) if (b = cb[n] + a, b in bb) return b
    }

    function S(b, a, n) {
        return (b = ra.exec(a)) ? Math.max(0, b[2] -
            (n || 0)) + (b[3] || "px") : a
    }

    function U(b, a, n, t, c) {
        a = n === (t ? "border" : "content") ? 4 : "width" === a ? 1 : 0;
        for (var f = 0; 4 > a; a += 2) "margin" === n && (f += e.css(b, n + da[a], !0, c)), t ? ("content" === n && (f -= e.css(b, "padding" + da[a], !0, c)), "margin" !== n && (f -= e.css(b, "border" + da[a] + "Width", !0, c))) : (f += e.css(b, "padding" + da[a], !0, c), "padding" !== n && (f += e.css(b, "border" + da[a] + "Width", !0, c)));
        return f
    }

    function aa(b, a, n) {
        var f = !0, c = "width" === a ? b.offsetWidth : b.offsetHeight, d = Ha(b),
            g = "border-box" === e.css(b, "boxSizing", !1, d);
        if (0 >= c || null ==
            c) {
            c = H(b, a, d);
            if (0 > c || null == c) c = b.style[a];
            if (La.test(c)) return c;
            f = g && (M.boxSizingReliable() || c === b.style[a]);
            c = parseFloat(c) || 0
        }
        return c + U(b, a, n || (g ? "border" : "content"), f, d) + "px"
    }

    function ia(b, a) {
        for (var f, c, d, g = [], h = 0, k = b.length; h < k; h++) c = b[h], c.style && (g[h] = A.get(c, "olddisplay"), f = c.style.display, a ? (g[h] || "none" !== f || (c.style.display = ""), "" === c.style.display && Aa(c) && (g[h] = A.access(c, "olddisplay", ma(c.nodeName)))) : (d = Aa(c), "none" === f && d || A.set(c, "olddisplay", d ? f : e.css(c, "display"))));
        for (h = 0; h <
        k; h++) c = b[h], !c.style || a && "none" !== c.style.display && "" !== c.style.display || (c.style.display = a ? g[h] || "" : "none");
        return b
    }

    function N(b, a, n, e, c) {
        return new N.prototype.init(b, a, n, e, c)
    }

    function na() {
        c.setTimeout(function () {
            wa = void 0
        });
        return wa = e.now()
    }

    function ea(b, a) {
        var f = 0, e = {height: b};
        for (a = a ? 1 : 0; 4 > f; f += 2 - a) {
            var c = da[f];
            e["margin" + c] = e["padding" + c] = b
        }
        a && (e.opacity = e.width = b);
        return e
    }

    function X(b, a, e) {
        for (var f, n = (y.tweeners[a] || []).concat(y.tweeners["*"]), c = 0, d = n.length; c < d; c++) if (f = n[c].call(e,
                a, b)) return f
    }

    function fa(b, a) {
        var f, c;
        for (f in b) {
            var d = e.camelCase(f);
            var h = a[d];
            var g = b[f];
            e.isArray(g) && (h = g[1], g = b[f] = g[0]);
            f !== d && (b[d] = g, delete b[f]);
            if ((c = e.cssHooks[d]) && "expand" in c) for (f in g = c.expand(g), delete b[d], g) f in b || (b[f] = g[f], a[f] = h); else a[d] = h
        }
    }

    function y(b, a, c) {
        var f, n = 0, d = y.prefilters.length, g = e.Deferred().always(function () {
            delete h.elem
        }), h = function () {
            if (f) return !1;
            var a = wa || na();
            a = Math.max(0, k.startTime + k.duration - a);
            for (var e = 1 - (a / k.duration || 0), c = 0, n = k.tweens.length; c <
            n; c++) k.tweens[c].run(e);
            g.notifyWith(b, [k, e, a]);
            if (1 > e && n) return a;
            g.resolveWith(b, [k]);
            return !1
        }, k = g.promise({
            elem: b,
            props: e.extend({}, a),
            opts: e.extend(!0, {specialEasing: {}, easing: e.easing._default}, c),
            originalProperties: a,
            originalOptions: c,
            startTime: wa || na(),
            duration: c.duration,
            tweens: [],
            createTween: function (a, f) {
                a = e.Tween(b, k.opts, a, f, k.opts.specialEasing[a] || k.opts.easing);
                k.tweens.push(a);
                return a
            },
            stop: function (a) {
                var e = 0, c = a ? k.tweens.length : 0;
                if (f) return this;
                for (f = !0; e < c; e++) k.tweens[e].run(1);
                a ? (g.notifyWith(b, [k, 1, 0]), g.resolveWith(b, [k, a])) : g.rejectWith(b, [k, a]);
                return this
            }
        });
        c = k.props;
        for (fa(c, k.opts.specialEasing); n < d; n++) if (a = y.prefilters[n].call(k, b, c, k.opts)) return e.isFunction(a.stop) && (e._queueHooks(k.elem, k.opts.queue).stop = e.proxy(a.stop, a)), a;
        e.map(c, X, k);
        e.isFunction(k.opts.start) && k.opts.start.call(b, k);
        e.fx.timer(e.extend(h, {elem: b, anim: k, queue: k.opts.queue}));
        return k.progress(k.opts.progress).done(k.opts.done, k.opts.complete).fail(k.opts.fail).always(k.opts.always)
    }

    function P(b) {
        return b.getAttribute &&
            b.getAttribute("class") || ""
    }

    function oa(b) {
        return function (a, c) {
            "string" !== typeof a && (c = a, a = "*");
            var f = 0, n = a.toLowerCase().match(ca) || [];
            if (e.isFunction(c)) for (; a = n[f++];) "+" === a[0] ? (a = a.slice(1) || "*", (b[a] = b[a] || []).unshift(c)) : (b[a] = b[a] || []).push(c)
        }
    }

    function Ea(b, a, c, t) {
        function f(g) {
            var h;
            n[g] = !0;
            e.each(b[g] || [], function (b, e) {
                b = e(a, c, t);
                if ("string" === typeof b && !d && !n[b]) return a.dataTypes.unshift(b), f(b), !1;
                if (d) return !(h = b)
            });
            return h
        }

        var n = {}, d = b === Ma;
        return f(a.dataTypes[0]) || !n["*"] && f("*")
    }

    function ja(b, a) {
        var f, c, d = e.ajaxSettings.flatOptions || {};
        for (f in a) void 0 !== a[f] && ((d[f] ? b : c || (c = {}))[f] = a[f]);
        c && e.extend(!0, b, c);
        return b
    }

    function Na(b, a, c, t) {
        var f;
        if (e.isArray(a)) e.each(a, function (a, f) {
            c || Ab.test(b) ? t(b, f) : Na(b + "[" + ("object" === typeof f && null != f ? a : "") + "]", f, c, t)
        }); else if (c || "object" !== e.type(a)) t(b, a); else for (f in a) Na(b + "[" + f + "]", a[f], c, t)
    }

    function db(b) {
        return e.isWindow(b) ? b : 9 === b.nodeType && b.defaultView
    }

    var sa = [], z = c.document, ka = sa.slice, Za = sa.concat, Oa = sa.push, Fa = sa.indexOf,
        Ia = {}, Bb = Ia.toString, xa = Ia.hasOwnProperty, M = {}, e = function (b, a) {
            return new e.fn.init(b, a)
        }, Cb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Db = /^-ms-/, Eb = /-([\da-z])/gi, Fb = function (b, a) {
            return a.toUpperCase()
        };
    e.fn = e.prototype = {
        jquery: "2.2.4", constructor: e, selector: "", length: 0, toArray: function () {
            return ka.call(this)
        }, get: function (b) {
            return null != b ? 0 > b ? this[b + this.length] : this[b] : ka.call(this)
        }, pushStack: function (b) {
            b = e.merge(this.constructor(), b);
            b.prevObject = this;
            b.context = this.context;
            return b
        }, each: function (b) {
            return e.each(this,
                b)
        }, map: function (b) {
            return this.pushStack(e.map(this, function (a, c) {
                return b.call(a, c, a)
            }))
        }, slice: function () {
            return this.pushStack(ka.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (b) {
            var a = this.length;
            b = +b + (0 > b ? a : 0);
            return this.pushStack(0 <= b && b < a ? [this[b]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: Oa, sort: sa.sort, splice: sa.splice
    };
    e.extend = e.fn.extend = function () {
        var b, a, c, t = arguments[0] || {}, d = 1, g = arguments.length,
            h = !1;
        "boolean" === typeof t && (h = t, t = arguments[d] || {}, d++);
        "object" === typeof t || e.isFunction(t) || (t = {});
        d === g && (t = this, d--);
        for (; d < g; d++) if (null != (b = arguments[d])) for (a in b) {
            var k = t[a];
            var l = b[a];
            t !== l && (h && l && (e.isPlainObject(l) || (c = e.isArray(l))) ? (c ? (c = !1, k = k && e.isArray(k) ? k : []) : k = k && e.isPlainObject(k) ? k : {}, t[a] = e.extend(h, k, l)) : void 0 !== l && (t[a] = l))
        }
        return t
    };
    e.extend({
        expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (b) {
            throw Error(b);
        }, noop: function () {
        }, isFunction: function (b) {
            return "function" ===
                e.type(b)
        }, isArray: Array.isArray, isWindow: function (b) {
            return null != b && b === b.window
        }, isNumeric: function (b) {
            var a = b && b.toString();
            return !e.isArray(b) && 0 <= a - parseFloat(a) + 1
        }, isPlainObject: function (b) {
            var a;
            if ("object" !== e.type(b) || b.nodeType || e.isWindow(b) || b.constructor && !xa.call(b, "constructor") && !xa.call(b.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (a in b) ;
            return void 0 === a || xa.call(b, a)
        }, isEmptyObject: function (b) {
            for (var a in b) return !1;
            return !0
        }, type: function (b) {
            return null == b ? b + "" :
                "object" === typeof b || "function" === typeof b ? Ia[Bb.call(b)] || "object" : typeof b
        }, globalEval: function (b) {
            var a = eval;
            if (b = e.trim(b)) 1 === b.indexOf("use strict") ? (a = z.createElement("script"), a.text = b, z.head.appendChild(a).parentNode.removeChild(a)) : a(b)
        }, camelCase: function (b) {
            return b.replace(Db, "ms-").replace(Eb, Fb)
        }, nodeName: function (b, a) {
            return b.nodeName && b.nodeName.toLowerCase() === a.toLowerCase()
        }, each: function (b, a) {
            var f, c = 0;
            if (m(b)) for (f = b.length; c < f && !1 !== a.call(b[c], c, b[c]); c++) ; else for (c in b) if (!1 ===
                a.call(b[c], c, b[c])) break;
            return b
        }, trim: function (b) {
            return null == b ? "" : (b + "").replace(Cb, "")
        }, makeArray: function (b, a) {
            a = a || [];
            null != b && (m(Object(b)) ? e.merge(a, "string" === typeof b ? [b] : b) : Oa.call(a, b));
            return a
        }, inArray: function (b, a, c) {
            return null == a ? -1 : Fa.call(a, b, c)
        }, merge: function (b, a) {
            for (var f = +a.length, c = 0, e = b.length; c < f; c++) b[e++] = a[c];
            b.length = e;
            return b
        }, grep: function (b, a, c) {
            for (var f = [], e = 0, n = b.length, d = !c; e < n; e++) c = !a(b[e], e), c !== d && f.push(b[e]);
            return f
        }, map: function (b, a, c) {
            var f, e = 0, n =
                [];
            if (m(b)) for (f = b.length; e < f; e++) {
                var d = a(b[e], e, c);
                null != d && n.push(d)
            } else for (e in b) d = a(b[e], e, c), null != d && n.push(d);
            return Za.apply([], n)
        }, guid: 1, proxy: function (b, a) {
            if ("string" === typeof a) {
                var f = b[a];
                a = b;
                b = f
            }
            if (e.isFunction(b)) {
                var c = ka.call(arguments, 2);
                f = function () {
                    return b.apply(a || this, c.concat(ka.call(arguments)))
                };
                f.guid = b.guid = b.guid || e.guid++;
                return f
            }
        }, now: Date.now, support: M
    });
    "function" === typeof Symbol && (e.fn[Symbol.iterator] = sa[Symbol.iterator]);
    e.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function (b, a) {
            Ia["[object " + a + "]"] = a.toLowerCase()
        });
    var ha = function (b) {
        function a(b, a, f, c) {
            var e, n, d, t, g = a && a.ownerDocument, h = a ? a.nodeType : 9;
            f = f || [];
            if ("string" !== typeof b || !b || 1 !== h && 9 !== h && 11 !== h) return f;
            if (!c && ((a ? a.ownerDocument || a : z) !== r && Ba(a), a = a || r, G)) {
                if (11 !== h && (t = ya.exec(b))) if (e = t[1]) if (9 === h) if (n = a.getElementById(e)) {
                    if (n.id === e) return f.push(n), f
                } else return f; else {
                    if (g && (n = g.getElementById(e)) && A(a, n) && n.id === e) return f.push(n), f
                } else {
                    if (t[2]) return U.apply(f, a.getElementsByTagName(b)),
                        f;
                    if ((e = t[3]) && Q.getElementsByClassName && a.getElementsByClassName) return U.apply(f, a.getElementsByClassName(e)), f
                }
                if (!(!Q.qsa || N[b + " "] || B && B.test(b))) {
                    if (1 !== h) {
                        g = a;
                        var ba = b
                    } else if ("object" !== a.nodeName.toLowerCase()) {
                        (d = a.getAttribute("id")) ? d = d.replace(Aa, "\\$&") : a.setAttribute("id", d = H);
                        t = pa(b);
                        e = t.length;
                        for (n = ka.test(d) ? "#" + d : "[id='" + d + "']"; e--;) t[e] = n + " " + m(t[e]);
                        ba = t.join(",");
                        g = ra.test(b) && q(a.parentNode) || a
                    }
                    if (ba) try {
                        return U.apply(f, g.querySelectorAll(ba)), f
                    } catch (ic) {
                    } finally {
                        d === H &&
                        a.removeAttribute("id")
                    }
                }
            }
            return Da(b.replace(V, "$1"), a, f, c)
        }

        function c() {
            function b(f, c) {
                a.push(f + " ") > K.cacheLength && delete b[a.shift()];
                return b[f + " "] = c
            }

            var a = [];
            return b
        }

        function e(b) {
            b[H] = !0;
            return b
        }

        function d(b) {
            var a = r.createElement("div");
            try {
                return !!b(a)
            } catch (O) {
                return !1
            } finally {
                a.parentNode && a.parentNode.removeChild(a)
            }
        }

        function g(b, a) {
            b = b.split("|");
            for (var f = b.length; f--;) K.attrHandle[b[f]] = a
        }

        function h(b, a) {
            var f = a && b, c = f && 1 === b.nodeType && 1 === a.nodeType && (~a.sourceIndex || -2147483648) -
                (~b.sourceIndex || -2147483648);
            if (c) return c;
            if (f) for (; f = f.nextSibling;) if (f === a) return -1;
            return b ? 1 : -1
        }

        function k(b) {
            return function (a) {
                return "input" === a.nodeName.toLowerCase() && a.type === b
            }
        }

        function l(b) {
            return function (a) {
                var f = a.nodeName.toLowerCase();
                return ("input" === f || "button" === f) && a.type === b
            }
        }

        function p(b) {
            return e(function (a) {
                a = +a;
                return e(function (f, c) {
                    for (var e, n = b([], f.length, a), d = n.length; d--;) f[e = n[d]] && (f[e] = !(c[e] = f[e]))
                })
            })
        }

        function q(b) {
            return b && "undefined" !== typeof b.getElementsByTagName &&
                b
        }

        function y() {
        }

        function m(b) {
            for (var a = 0, f = b.length, c = ""; a < f; a++) c += b[a].value;
            return c
        }

        function x(b, a, f) {
            var c = a.dir, e = f && "parentNode" === c, n = W++;
            return a.first ? function (a, f, n) {
                for (; a = a[c];) if (1 === a.nodeType || e) return b(a, f, n)
            } : function (a, f, d) {
                var t, g = [D, n];
                if (d) for (; a = a[c];) {
                    if ((1 === a.nodeType || e) && b(a, f, d)) return !0
                } else for (; a = a[c];) if (1 === a.nodeType || e) {
                    var h = a[H] || (a[H] = {});
                    h = h[a.uniqueID] || (h[a.uniqueID] = {});
                    if ((t = h[c]) && t[0] === D && t[1] === n) return g[2] = t[2];
                    h[c] = g;
                    if (g[2] = b(a, f, d)) return !0
                }
            }
        }

        function C(b) {
            return 1 < b.length ? function (a, f, c) {
                for (var e = b.length; e--;) if (!b[e](a, f, c)) return !1;
                return !0
            } : b[0]
        }

        function L(b, a, f, c, e) {
            for (var n, d = [], t = 0, g = b.length, h = null != a; t < g; t++) if (n = b[t]) if (!f || f(n, c, e)) d.push(n), h && a.push(t);
            return d
        }

        function u(b, f, c, n, d, t) {
            n && !n[H] && (n = u(n));
            d && !d[H] && (d = u(d, t));
            return e(function (e, t, g, h) {
                var k, w = [], ba = [], Y = t.length, l;
                if (!(l = e)) {
                    l = f || "*";
                    for (var O = g.nodeType ? [g] : g, p = [], q = 0, qa = O.length; q < qa; q++) a(l, O[q], p);
                    l = p
                }
                l = !b || !e && f ? l : L(l, w, b, g, h);
                O = c ? d || (e ? b : Y || n) ? [] :
                    t : l;
                c && c(l, O, g, h);
                if (n) {
                    var y = L(O, ba);
                    n(y, [], g, h);
                    for (g = y.length; g--;) if (k = y[g]) O[ba[g]] = !(l[ba[g]] = k)
                }
                if (e) {
                    if (d || b) {
                        if (d) {
                            y = [];
                            for (g = O.length; g--;) (k = O[g]) && y.push(l[g] = k);
                            d(null, O = [], y, h)
                        }
                        for (g = O.length; g--;) (k = O[g]) && -1 < (y = d ? ja(e, k) : w[g]) && (e[y] = !(t[y] = k))
                    }
                } else O = L(O === t ? O.splice(Y, O.length) : O), d ? d(null, t, O, h) : U.apply(t, O)
            })
        }

        function P(b) {
            var a, f, c = b.length, e = K.relative[b[0].type];
            var n = e || K.relative[" "];
            for (var d = e ? 1 : 0, t = x(function (b) {
                return b === a
            }, n, !0), g = x(function (b) {
                    return -1 < ja(a, b)
                }, n,
                !0), h = [function (b, f, c) {
                b = !e && (c || f !== E) || ((a = f).nodeType ? t(b, f, c) : g(b, f, c));
                a = null;
                return b
            }]; d < c; d++) if (n = K.relative[b[d].type]) h = [x(C(h), n)]; else {
                n = K.filter[b[d].type].apply(null, b[d].matches);
                if (n[H]) {
                    for (f = ++d; f < c && !K.relative[b[f].type]; f++) ;
                    return u(1 < d && C(h), 1 < d && m(b.slice(0, d - 1).concat({value: " " === b[d - 2].type ? "*" : ""})).replace(V, "$1"), n, d < f && P(b.slice(d, f)), f < c && P(b = b.slice(f)), f < c && m(b))
                }
                h.push(n)
            }
            return C(h)
        }

        function J(b, f) {
            var c = 0 < f.length, n = 0 < b.length, d = function (e, d, t, g, h) {
                var k, w, ba =
                        0, Y = "0", l = e && [], O = [], p = E, q = e || n && K.find.TAG("*", h),
                    qa = D += null == p ? 1 : Math.random() || .1, y = q.length;
                for (h && (E = d === r || d || h); Y !== y && null != (k = q[Y]); Y++) {
                    if (n && k) {
                        var m = 0;
                        d || k.ownerDocument === r || (Ba(k), t = !G);
                        for (; w = b[m++];) if (w(k, d || r, t)) {
                            g.push(k);
                            break
                        }
                        h && (D = qa)
                    }
                    c && ((k = !w && k) && ba--, e && l.push(k))
                }
                ba += Y;
                if (c && Y !== ba) {
                    for (m = 0; w = f[m++];) w(l, O, d, t);
                    if (e) {
                        if (0 < ba) for (; Y--;) l[Y] || O[Y] || (O[Y] = na.call(g));
                        O = L(O)
                    }
                    U.apply(g, O);
                    h && !e && 0 < O.length && 1 < ba + f.length && a.uniqueSort(g)
                }
                h && (D = qa, E = p);
                return l
            };
            return c ? e(d) :
                d
        }

        var F, E, v, R, r, I, G, B, oa, ma, A, H = "sizzle" + 1 * new Date, z = b.document, D = 0, W = 0, Ea = c(),
            aa = c(), N = c(), M = function (b, a) {
                b === a && (R = !0);
                return 0
            }, Z = {}.hasOwnProperty, S = [], na = S.pop, T = S.push, U = S.push, X = S.slice, ja = function (b, a) {
                for (var f = 0, c = b.length; f < c; f++) if (b[f] === a) return f;
                return -1
            }, ia = /[\x20\t\r\n\f]+/g, V = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            ca = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, ea = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            fa = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            la = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            ka = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, da = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            }, sa = /^(?:input|select|textarea|button)$/i, wa = /^h\d$/i, ha = /^[^{]+\{\s*\[native \w/,
            ya = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ra = /[+~]/, Aa = /'|\\/g,
            ta = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, ua = function (b, a, f) {
                b = "0x" + a - 65536;
                return b !== b || f ? a : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, b & 1023 | 56320)
            }, xa = function () {
                Ba()
            };
        try {
            U.apply(S =
                X.call(z.childNodes), z.childNodes), S[z.childNodes.length].nodeType
        } catch (ba) {
            U = {
                apply: S.length ? function (b, a) {
                    T.apply(b, X.call(a))
                } : function (b, a) {
                    for (var f = b.length, c = 0; b[f++] = a[c++];) ;
                    b.length = f - 1
                }
            }
        }
        var Q = a.support = {};
        var Ca = a.isXML = function (b) {
            return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
        };
        var Ba = a.setDocument = function (b) {
            var a;
            b = b ? b.ownerDocument || b : z;
            if (b === r || 9 !== b.nodeType || !b.documentElement) return r;
            r = b;
            I = r.documentElement;
            G = !Ca(r);
            (a = r.defaultView) && a.top !== a && (a.addEventListener ?
                a.addEventListener("unload", xa, !1) : a.attachEvent && a.attachEvent("onunload", xa));
            Q.attributes = d(function (b) {
                b.className = "i";
                return !b.getAttribute("className")
            });
            Q.getElementsByTagName = d(function (b) {
                b.appendChild(r.createComment(""));
                return !b.getElementsByTagName("*").length
            });
            Q.getElementsByClassName = ha.test(r.getElementsByClassName);
            Q.getById = d(function (b) {
                I.appendChild(b).id = H;
                return !r.getElementsByName || !r.getElementsByName(H).length
            });
            Q.getById ? (K.find.ID = function (b, a) {
                if ("undefined" !== typeof a.getElementById &&
                    G) return (b = a.getElementById(b)) ? [b] : []
            }, K.filter.ID = function (b) {
                var a = b.replace(ta, ua);
                return function (b) {
                    return b.getAttribute("id") === a
                }
            }) : (delete K.find.ID, K.filter.ID = function (b) {
                var a = b.replace(ta, ua);
                return function (b) {
                    return (b = "undefined" !== typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === a
                }
            });
            K.find.TAG = Q.getElementsByTagName ? function (b, a) {
                if ("undefined" !== typeof a.getElementsByTagName) return a.getElementsByTagName(b);
                if (Q.qsa) return a.querySelectorAll(b)
            } : function (b, a) {
                var f =
                    [], c = 0;
                a = a.getElementsByTagName(b);
                if ("*" === b) {
                    for (; b = a[c++];) 1 === b.nodeType && f.push(b);
                    return f
                }
                return a
            };
            K.find.CLASS = Q.getElementsByClassName && function (b, a) {
                if ("undefined" !== typeof a.getElementsByClassName && G) return a.getElementsByClassName(b)
            };
            oa = [];
            B = [];
            if (Q.qsa = ha.test(r.querySelectorAll)) d(function (b) {
                I.appendChild(b).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                b.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                b.querySelectorAll("[selected]").length || B.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                b.querySelectorAll("[id~=" + H + "-]").length || B.push("~=");
                b.querySelectorAll(":checked").length || B.push(":checked");
                b.querySelectorAll("a#" + H + "+*").length || B.push(".#.+[+~]")
            }), d(function (b) {
                var a = r.createElement("input");
                a.setAttribute("type", "hidden");
                b.appendChild(a).setAttribute("name", "D");
                b.querySelectorAll("[name=d]").length && B.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                b.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled");
                b.querySelectorAll("*,:x");
                B.push(",.*:")
            });
            (Q.matchesSelector = ha.test(ma = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && d(function (b) {
                Q.disconnectedMatch = ma.call(b, "div");
                ma.call(b, "[s!='']:x");
                oa.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            });
            B = B.length && new RegExp(B.join("|"));
            oa = oa.length && new RegExp(oa.join("|"));
            A = (a = ha.test(I.compareDocumentPosition)) || ha.test(I.contains) ? function (b, a) {
                var f = 9 === b.nodeType ? b.documentElement : b;
                a = a && a.parentNode;
                return b === a || !!(a && 1 === a.nodeType && (f.contains ? f.contains(a) : b.compareDocumentPosition && b.compareDocumentPosition(a) & 16))
            } : function (b, a) {
                if (a) for (; a = a.parentNode;) if (a === b) return !0;
                return !1
            };
            M = a ? function (b, a) {
                if (b === a) return R = !0, 0;
                var f = !b.compareDocumentPosition - !a.compareDocumentPosition;
                if (f) return f;
                f = (b.ownerDocument || b) === (a.ownerDocument || a) ? b.compareDocumentPosition(a) : 1;
                return f & 1 || !Q.sortDetached && a.compareDocumentPosition(b) === f ? b === r || b.ownerDocument === z && A(z, b) ? -1 : a === r || a.ownerDocument === z && A(z, a) ? 1 : v ? ja(v, b) - ja(v, a) : 0 : f & 4 ? -1 : 1
            } : function (b, a) {
                if (b === a) return R = !0, 0;
                var f = 0, c = b.parentNode, e = a.parentNode, n = [b], d = [a];
                if (!c || !e) return b === r ? -1 : a === r ? 1 : c ? -1 : e ? 1 : v ? ja(v, b) - ja(v, a) : 0;
                if (c === e) return h(b, a);
                for (; b = b.parentNode;) n.unshift(b);
                for (b = a; b = b.parentNode;) d.unshift(b);
                for (; n[f] === d[f];) f++;
                return f ? h(n[f], d[f]) : n[f] === z ? -1 : d[f] === z ? 1 : 0
            };
            return r
        };
        a.matches = function (b, f) {
            return a(b, null, null, f)
        };
        a.matchesSelector = function (b, f) {
            (b.ownerDocument || b) !== r && Ba(b);
            f = f.replace(fa, "='$1']");
            if (!(!Q.matchesSelector || !G || N[f + " "] || oa && oa.test(f) || B && B.test(f))) try {
                var c = ma.call(b, f);
                if (c || Q.disconnectedMatch || b.document && 11 !== b.document.nodeType) return c
            } catch (hc) {
            }
            return 0 < a(f, r, null, [b]).length
        };
        a.contains = function (b, a) {
            (b.ownerDocument || b) !== r && Ba(b);
            return A(b, a)
        };
        a.attr =
            function (b, a) {
                (b.ownerDocument || b) !== r && Ba(b);
                var f = K.attrHandle[a.toLowerCase()];
                f = f && Z.call(K.attrHandle, a.toLowerCase()) ? f(b, a, !G) : void 0;
                return void 0 !== f ? f : Q.attributes || !G ? b.getAttribute(a) : (f = b.getAttributeNode(a)) && f.specified ? f.value : null
            };
        a.error = function (b) {
            throw Error("Syntax error, unrecognized expression: " + b);
        };
        a.uniqueSort = function (b) {
            var a, f = [], c = 0, e = 0;
            R = !Q.detectDuplicates;
            v = !Q.sortStable && b.slice(0);
            b.sort(M);
            if (R) {
                for (; a = b[e++];) a === b[e] && (c = f.push(e));
                for (; c--;) b.splice(f[c],
                    1)
            }
            v = null;
            return b
        };
        var va = a.getText = function (b) {
            var a = "", f = 0;
            var c = b.nodeType;
            if (!c) for (; c = b[f++];) a += va(c); else if (1 === c || 9 === c || 11 === c) {
                if ("string" === typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling) a += va(b)
            } else if (3 === c || 4 === c) return b.nodeValue;
            return a
        };
        var K = a.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: da,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (b) {
                    b[1] = b[1].replace(ta, ua);
                    b[3] = (b[3] || b[4] || b[5] || "").replace(ta, ua);
                    "~=" === b[2] && (b[3] = " " + b[3] + " ");
                    return b.slice(0, 4)
                }, CHILD: function (b) {
                    b[1] = b[1].toLowerCase();
                    "nth" === b[1].slice(0, 3) ? (b[3] || a.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && a.error(b[0]);
                    return b
                }, PSEUDO: function (b) {
                    var a, f = !b[6] && b[2];
                    if (da.CHILD.test(b[0])) return null;
                    b[3] ? b[2] = b[4] || b[5] || "" : f && la.test(f) && (a = pa(f, !0)) && (a = f.indexOf(")",
                        f.length - a) - f.length) && (b[0] = b[0].slice(0, a), b[2] = f.slice(0, a));
                    return b.slice(0, 3)
                }
            },
            filter: {
                TAG: function (b) {
                    var a = b.replace(ta, ua).toLowerCase();
                    return "*" === b ? function () {
                        return !0
                    } : function (b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    }
                }, CLASS: function (b) {
                    var a = Ea[b + " "];
                    return a || (a = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"), Ea(b, function (b) {
                        return a.test("string" === typeof b.className && b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                    }))
                },
                ATTR: function (b, f, c) {
                    return function (e) {
                        e = a.attr(e, b);
                        if (null == e) return "!=" === f;
                        if (!f) return !0;
                        e += "";
                        return "=" === f ? e === c : "!=" === f ? e !== c : "^=" === f ? c && 0 === e.indexOf(c) : "*=" === f ? c && -1 < e.indexOf(c) : "$=" === f ? c && e.slice(-c.length) === c : "~=" === f ? -1 < (" " + e.replace(ia, " ") + " ").indexOf(c) : "|=" === f ? e === c || e.slice(0, c.length + 1) === c + "-" : !1
                    }
                }, CHILD: function (b, a, f, c, e) {
                    var n = "nth" !== b.slice(0, 3), d = "last" !== b.slice(-4), t = "of-type" === a;
                    return 1 === c && 0 === e ? function (b) {
                        return !!b.parentNode
                    } : function (a, f, g) {
                        var h, k;
                        f =
                            n !== d ? "nextSibling" : "previousSibling";
                        var w = a.parentNode, Y = t && a.nodeName.toLowerCase();
                        g = !g && !t;
                        var l = !1;
                        if (w) {
                            if (n) {
                                for (; f;) {
                                    for (h = a; h = h[f];) if (t ? h.nodeName.toLowerCase() === Y : 1 === h.nodeType) return !1;
                                    var p = f = "only" === b && !p && "nextSibling"
                                }
                                return !0
                            }
                            p = [d ? w.firstChild : w.lastChild];
                            if (d && g) {
                                h = w;
                                var q = h[H] || (h[H] = {});
                                q = q[h.uniqueID] || (q[h.uniqueID] = {});
                                l = q[b] || [];
                                l = (k = l[0] === D && l[1]) && l[2];
                                for (h = k && w.childNodes[k]; h = ++k && h && h[f] || (l = k = 0) || p.pop();) if (1 === h.nodeType && ++l && h === a) {
                                    q[b] = [D, k, l];
                                    break
                                }
                            } else if (g &&
                                (h = a, q = h[H] || (h[H] = {}), q = q[h.uniqueID] || (q[h.uniqueID] = {}), l = q[b] || [], l = k = l[0] === D && l[1]), !1 === l) for (; (h = ++k && h && h[f] || (l = k = 0) || p.pop()) && ((t ? h.nodeName.toLowerCase() !== Y : 1 !== h.nodeType) || !++l || (g && (q = h[H] || (h[H] = {}), q = q[h.uniqueID] || (q[h.uniqueID] = {}), q[b] = [D, l]), h !== a));) ;
                            l -= e;
                            return l === c || 0 === l % c && 0 <= l / c
                        }
                    }
                }, PSEUDO: function (b, f) {
                    var c = K.pseudos[b] || K.setFilters[b.toLowerCase()] || a.error("unsupported pseudo: " + b);
                    if (c[H]) return c(f);
                    if (1 < c.length) {
                        var n = [b, b, "", f];
                        return K.setFilters.hasOwnProperty(b.toLowerCase()) ?
                            e(function (b, a) {
                                for (var e, n = c(b, f), d = n.length; d--;) e = ja(b, n[d]), b[e] = !(a[e] = n[d])
                            }) : function (b) {
                                return c(b, 0, n)
                            }
                    }
                    return c
                }
            },
            pseudos: {
                not: e(function (b) {
                    var a = [], f = [], c = za(b.replace(V, "$1"));
                    return c[H] ? e(function (b, a, f, e) {
                        e = c(b, null, e, []);
                        for (var n = b.length; n--;) if (f = e[n]) b[n] = !(a[n] = f)
                    }) : function (b, e, n) {
                        a[0] = b;
                        c(a, null, n, f);
                        a[0] = null;
                        return !f.pop()
                    }
                }), has: e(function (b) {
                    return function (f) {
                        return 0 < a(b, f).length
                    }
                }), contains: e(function (b) {
                    b = b.replace(ta, ua);
                    return function (a) {
                        return -1 < (a.textContent ||
                            a.innerText || va(a)).indexOf(b)
                    }
                }), lang: e(function (b) {
                    ka.test(b || "") || a.error("unsupported lang: " + b);
                    b = b.replace(ta, ua).toLowerCase();
                    return function (a) {
                        var f;
                        do if (f = G ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) return f = f.toLowerCase(), f === b || 0 === f.indexOf(b + "-"); while ((a = a.parentNode) && 1 === a.nodeType);
                        return !1
                    }
                }), target: function (a) {
                    var f = b.location && b.location.hash;
                    return f && f.slice(1) === a.id
                }, root: function (b) {
                    return b === I
                }, focus: function (b) {
                    return b === r.activeElement && (!r.hasFocus ||
                        r.hasFocus()) && !!(b.type || b.href || ~b.tabIndex)
                }, enabled: function (b) {
                    return !1 === b.disabled
                }, disabled: function (b) {
                    return !0 === b.disabled
                }, checked: function (b) {
                    var a = b.nodeName.toLowerCase();
                    return "input" === a && !!b.checked || "option" === a && !!b.selected
                }, selected: function (b) {
                    b.parentNode && b.parentNode.selectedIndex;
                    return !0 === b.selected
                }, empty: function (b) {
                    for (b = b.firstChild; b; b = b.nextSibling) if (6 > b.nodeType) return !1;
                    return !0
                }, parent: function (b) {
                    return !K.pseudos.empty(b)
                }, header: function (b) {
                    return wa.test(b.nodeName)
                },
                input: function (b) {
                    return sa.test(b.nodeName)
                }, button: function (b) {
                    var a = b.nodeName.toLowerCase();
                    return "input" === a && "button" === b.type || "button" === a
                }, text: function (b) {
                    var a;
                    return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (a = b.getAttribute("type")) || "text" === a.toLowerCase())
                }, first: p(function () {
                    return [0]
                }), last: p(function (b, a) {
                    return [a - 1]
                }), eq: p(function (b, a, f) {
                    return [0 > f ? f + a : f]
                }), even: p(function (b, a) {
                    for (var f = 0; f < a; f += 2) b.push(f);
                    return b
                }), odd: p(function (b, a) {
                    for (var f = 1; f < a; f +=
                        2) b.push(f);
                    return b
                }), lt: p(function (b, a, f) {
                    for (a = 0 > f ? f + a : f; 0 <= --a;) b.push(a);
                    return b
                }), gt: p(function (b, a, f) {
                    for (f = 0 > f ? f + a : f; ++f < a;) b.push(f);
                    return b
                })
            }
        };
        K.pseudos.nth = K.pseudos.eq;
        for (F in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) K.pseudos[F] = k(F);
        for (F in{submit: !0, reset: !0}) K.pseudos[F] = l(F);
        y.prototype = K.filters = K.pseudos;
        K.setFilters = new y;
        var pa = a.tokenize = function (b, f) {
            var c, e, n, d, t;
            if (d = aa[b + " "]) return f ? 0 : d.slice(0);
            d = b;
            var h = [];
            for (t = K.preFilter; d;) {
                if (!g || (c = ca.exec(d))) c &&
                (d = d.slice(c[0].length) || d), h.push(e = []);
                var g = !1;
                if (c = ea.exec(d)) g = c.shift(), e.push({
                    value: g,
                    type: c[0].replace(V, " ")
                }), d = d.slice(g.length);
                for (n in K.filter) !(c = da[n].exec(d)) || t[n] && !(c = t[n](c)) || (g = c.shift(), e.push({
                    value: g,
                    type: n,
                    matches: c
                }), d = d.slice(g.length));
                if (!g) break
            }
            return f ? d.length : d ? a.error(b) : aa(b, h).slice(0)
        };
        var za = a.compile = function (b, a) {
            var f, c = [], e = [], n = N[b + " "];
            if (!n) {
                a || (a = pa(b));
                for (f = a.length; f--;) n = P(a[f]), n[H] ? c.push(n) : e.push(n);
                n = N(b, J(e, c));
                n.selector = b
            }
            return n
        };
        var Da =
            a.select = function (b, a, f, c) {
                var e, n, d, t = "function" === typeof b && b, h = !c && pa(b = t.selector || b);
                f = f || [];
                if (1 === h.length) {
                    var g = h[0] = h[0].slice(0);
                    if (2 < g.length && "ID" === (n = g[0]).type && Q.getById && 9 === a.nodeType && G && K.relative[g[1].type]) {
                        a = (K.find.ID(n.matches[0].replace(ta, ua), a) || [])[0];
                        if (!a) return f;
                        t && (a = a.parentNode);
                        b = b.slice(g.shift().value.length)
                    }
                    for (e = da.needsContext.test(b) ? 0 : g.length; e--;) {
                        n = g[e];
                        if (K.relative[d = n.type]) break;
                        if (d = K.find[d]) if (c = d(n.matches[0].replace(ta, ua), ra.test(g[0].type) &&
                                q(a.parentNode) || a)) {
                            g.splice(e, 1);
                            b = c.length && m(g);
                            if (!b) return U.apply(f, c), f;
                            break
                        }
                    }
                }
                (t || za(b, h))(c, a, !G, f, !a || ra.test(b) && q(a.parentNode) || a);
                return f
            };
        Q.sortStable = H.split("").sort(M).join("") === H;
        Q.detectDuplicates = !!R;
        Ba();
        Q.sortDetached = d(function (b) {
            return b.compareDocumentPosition(r.createElement("div")) & 1
        });
        d(function (b) {
            b.innerHTML = "<a href='#'></a>";
            return "#" === b.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function (b, a, f) {
            if (!f) return b.getAttribute(a, "type" === a.toLowerCase() ?
                1 : 2)
        });
        Q.attributes && d(function (b) {
            b.innerHTML = "<input/>";
            b.firstChild.setAttribute("value", "");
            return "" === b.firstChild.getAttribute("value")
        }) || g("value", function (b, a, f) {
            if (!f && "input" === b.nodeName.toLowerCase()) return b.defaultValue
        });
        d(function (b) {
            return null == b.getAttribute("disabled")
        }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (b, a, f) {
            var c;
            if (!f) return !0 === b[a] ? a.toLowerCase() : (c = b.getAttributeNode(a)) &&
            c.specified ? c.value : null
        });
        return a
    }(c);
    e.find = ha;
    e.expr = ha.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.uniqueSort = e.unique = ha.uniqueSort;
    e.text = ha.getText;
    e.isXMLDoc = ha.isXML;
    e.contains = ha.contains;
    var ya = function (b, a, c) {
        for (var f = [], n = void 0 !== c; (b = b[a]) && 9 !== b.nodeType;) if (1 === b.nodeType) {
            if (n && e(b).is(c)) break;
            f.push(b)
        }
        return f
    }, eb = function (b, a) {
        for (var f = []; b; b = b.nextSibling) 1 === b.nodeType && b !== a && f.push(b);
        return f
    }, fb = e.expr.match.needsContext, gb = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, sb = /^.[^:#\[\.,]*$/;
    e.filter = function (b, a, c) {
        var f = a[0];
        c && (b = ":not(" + b + ")");
        return 1 === a.length && 1 === f.nodeType ? e.find.matchesSelector(f, b) ? [f] : [] : e.find.matches(b, e.grep(a, function (b) {
            return 1 === b.nodeType
        }))
    };
    e.fn.extend({
        find: function (b) {
            var a, c = this.length, d = [], h = this;
            if ("string" !== typeof b) return this.pushStack(e(b).filter(function () {
                for (a = 0; a < c; a++) if (e.contains(h[a], this)) return !0
            }));
            for (a = 0; a < c; a++) e.find(b, h[a], d);
            d = this.pushStack(1 < c ? e.unique(d) : d);
            d.selector = this.selector ? this.selector + " " + b : b;
            return d
        },
        filter: function (b) {
            return this.pushStack(a(this, b || [], !1))
        }, not: function (b) {
            return this.pushStack(a(this, b || [], !0))
        }, is: function (b) {
            return !!a(this, "string" === typeof b && fb.test(b) ? e(b) : b || [], !1).length
        }
    });
    var Hb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (e.fn.init = function (b, a, c) {
        if (!b) return this;
        c = c || Ib;
        if ("string" === typeof b) {
            var f = "<" === b[0] && ">" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : Hb.exec(b);
            if (!f || !f[1] && a) return !a || a.jquery ? (a || c).find(b) : this.constructor(a).find(b);
            if (f[1]) {
                if (a = a instanceof
                    e ? a[0] : a, e.merge(this, e.parseHTML(f[1], a && a.nodeType ? a.ownerDocument || a : z, !0)), gb.test(f[1]) && e.isPlainObject(a)) for (f in a) if (e.isFunction(this[f])) this[f](a[f]); else this.attr(f, a[f])
            } else (a = z.getElementById(f[2])) && a.parentNode && (this.length = 1, this[0] = a), this.context = z, this.selector = b;
            return this
        }
        if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
        if (e.isFunction(b)) return void 0 !== c.ready ? c.ready(b) : b(e);
        void 0 !== b.selector && (this.selector = b.selector, this.context = b.context);
        return e.makeArray(b,
            this)
    }).prototype = e.fn;
    var Ib = e(z);
    var Jb = /^(?:parents|prev(?:Until|All))/, Kb = {children: !0, contents: !0, next: !0, prev: !0};
    e.fn.extend({
        has: function (b) {
            var a = e(b, this), c = a.length;
            return this.filter(function () {
                for (var b = 0; b < c; b++) if (e.contains(this, a[b])) return !0
            })
        }, closest: function (b, a) {
            for (var f, c = 0, d = this.length, h = [], g = fb.test(b) || "string" !== typeof b ? e(b, a || this.context) : 0; c < d; c++) for (f = this[c]; f && f !== a; f = f.parentNode) if (11 > f.nodeType && (g ? -1 < g.index(f) : 1 === f.nodeType && e.find.matchesSelector(f, b))) {
                h.push(f);
                break
            }
            return this.pushStack(1 < h.length ? e.uniqueSort(h) : h)
        }, index: function (b) {
            return b ? "string" === typeof b ? Fa.call(e(b), this[0]) : Fa.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (b, a) {
            return this.pushStack(e.uniqueSort(e.merge(this.get(), e(b, a))))
        }, addBack: function (b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    e.each({
        parent: function (b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        }, parents: function (b) {
            return ya(b, "parentNode")
        },
        parentsUntil: function (b, a, c) {
            return ya(b, "parentNode", c)
        }, next: function (b) {
            return d(b, "nextSibling")
        }, prev: function (b) {
            return d(b, "previousSibling")
        }, nextAll: function (b) {
            return ya(b, "nextSibling")
        }, prevAll: function (b) {
            return ya(b, "previousSibling")
        }, nextUntil: function (b, a, c) {
            return ya(b, "nextSibling", c)
        }, prevUntil: function (b, a, c) {
            return ya(b, "previousSibling", c)
        }, siblings: function (b) {
            return eb((b.parentNode || {}).firstChild, b)
        }, children: function (b) {
            return eb(b.firstChild)
        }, contents: function (b) {
            return b.contentDocument ||
                e.merge([], b.childNodes)
        }
    }, function (b, a) {
        e.fn[b] = function (f, c) {
            var d = e.map(this, a, f);
            "Until" !== b.slice(-5) && (c = f);
            c && "string" === typeof c && (d = e.filter(c, d));
            1 < this.length && (Kb[b] || e.uniqueSort(d), Jb.test(b) && d.reverse());
            return this.pushStack(d)
        }
    });
    var ca = /\S+/g;
    e.Callbacks = function (b) {
        b = "string" === typeof b ? g(b) : e.extend({}, b);
        var a, c, d, h, k = [], l = [], q = -1, p = function () {
            h = b.once;
            for (d = a = !0; l.length; q = -1) for (c = l.shift(); ++q < k.length;) !1 === k[q].apply(c[0], c[1]) && b.stopOnFalse && (q = k.length, c = !1);
            b.memory ||
            (c = !1);
            a = !1;
            h && (k = c ? [] : "")
        }, y = {
            add: function () {
                k && (c && !a && (q = k.length - 1, l.push(c)), function yb(a) {
                    e.each(a, function (a, f) {
                        e.isFunction(f) ? b.unique && y.has(f) || k.push(f) : f && f.length && "string" !== e.type(f) && yb(f)
                    })
                }(arguments), c && !a && p());
                return this
            }, remove: function () {
                e.each(arguments, function (b, a) {
                    for (var f; -1 < (f = e.inArray(a, k, f));) k.splice(f, 1), f <= q && q--
                });
                return this
            }, has: function (b) {
                return b ? -1 < e.inArray(b, k) : 0 < k.length
            }, empty: function () {
                k && (k = []);
                return this
            }, disable: function () {
                h = l = [];
                k = c = "";
                return this
            },
            disabled: function () {
                return !k
            }, lock: function () {
                h = l = [];
                c || (k = c = "");
                return this
            }, locked: function () {
                return !!h
            }, fireWith: function (b, f) {
                h || (f = f || [], f = [b, f.slice ? f.slice() : f], l.push(f), a || p());
                return this
            }, fire: function () {
                y.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!d
            }
        };
        return y
    };
    e.extend({
        Deferred: function (b) {
            var a = [["resolve", "done", e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory")]],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    }, always: function () {
                        h.done(arguments).fail(arguments);
                        return this
                    }, then: function () {
                        var b = arguments;
                        return e.Deferred(function (f) {
                            e.each(a, function (a, c) {
                                var n = e.isFunction(b[a]) && b[a];
                                h[c[1]](function () {
                                    var b = n && n.apply(this, arguments);
                                    if (b && e.isFunction(b.promise)) b.promise().progress(f.notify).done(f.resolve).fail(f.reject); else f[c[0] + "With"](this === d ? f.promise() : this, n ? [b] : arguments)
                                })
                            });
                            b = null
                        }).promise()
                    }, promise: function (b) {
                        return null != b ? e.extend(b, d) : d
                    }
                }, h = {};
            d.pipe =
                d.then;
            e.each(a, function (b, f) {
                var e = f[2], n = f[3];
                d[f[1]] = e.add;
                n && e.add(function () {
                    c = n
                }, a[b ^ 1][2].disable, a[2][2].lock);
                h[f[0]] = function () {
                    h[f[0] + "With"](this === h ? d : this, arguments);
                    return this
                };
                h[f[0] + "With"] = e.fireWith
            });
            d.promise(h);
            b && b.call(h, h);
            return h
        }, when: function (b) {
            var a = 0, c = ka.call(arguments), d = c.length, h = 1 !== d || b && e.isFunction(b.promise) ? d : 0,
                g = 1 === h ? b : e.Deferred(), k = function (b, a, f) {
                    return function (c) {
                        a[b] = this;
                        f[b] = 1 < arguments.length ? ka.call(arguments) : c;
                        f === q ? g.notifyWith(a, f) : --h || g.resolveWith(a,
                            f)
                    }
                }, l;
            if (1 < d) {
                var q = Array(d);
                var p = Array(d);
                for (l = Array(d); a < d; a++) c[a] && e.isFunction(c[a].promise) ? c[a].promise().progress(k(a, p, q)).done(k(a, l, c)).fail(g.reject) : --h
            }
            h || g.resolveWith(l, c);
            return g.promise()
        }
    });
    var Ja;
    e.fn.ready = function (b) {
        e.ready.promise().done(b);
        return this
    };
    e.extend({
        isReady: !1, readyWait: 1, holdReady: function (b) {
            b ? e.readyWait++ : e.ready(!0)
        }, ready: function (b) {
            (!0 === b ? --e.readyWait : e.isReady) || (e.isReady = !0, !0 !== b && 0 < --e.readyWait || (Ja.resolveWith(z, [e]), e.fn.triggerHandler &&
            (e(z).triggerHandler("ready"), e(z).off("ready"))))
        }
    });
    e.ready.promise = function (b) {
        Ja || (Ja = e.Deferred(), "complete" === z.readyState || "loading" !== z.readyState && !z.documentElement.doScroll ? c.setTimeout(e.ready) : (z.addEventListener("DOMContentLoaded", k), c.addEventListener("load", k)));
        return Ja.promise(b)
    };
    e.ready.promise();
    var la = function (b, a, c, d, h, g, k) {
        var f = 0, n = b.length, t = null == c;
        if ("object" === e.type(c)) for (f in h = !0, c) la(b, a, f, c[f], !0, g, k); else if (void 0 !== d && (h = !0, e.isFunction(d) || (k = !0), t && (k ? (a.call(b,
                d), a = null) : (t = a, a = function (b, a, f) {
                return t.call(e(b), f)
            })), a)) for (; f < n; f++) a(b[f], c, k ? d : d.call(b[f], f, a(b[f], c)));
        return h ? b : t ? a.call(b) : n ? a(b[0], c) : g
    }, Ca = function (b) {
        return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
    };
    p.uid = 1;
    p.prototype = {
        register: function (b, a) {
            a = a || {};
            b.nodeType ? b[this.expando] = a : Object.defineProperty(b, this.expando, {
                value: a,
                writable: !0,
                configurable: !0
            });
            return b[this.expando]
        }, cache: function (b) {
            if (!Ca(b)) return {};
            var a = b[this.expando];
            a || (a = {}, Ca(b) && (b.nodeType ? b[this.expando] =
                a : Object.defineProperty(b, this.expando, {value: a, configurable: !0})));
            return a
        }, set: function (b, a, c) {
            var f;
            b = this.cache(b);
            if ("string" === typeof a) b[a] = c; else for (f in a) b[f] = a[f];
            return b
        }, get: function (b, a) {
            return void 0 === a ? this.cache(b) : b[this.expando] && b[this.expando][a]
        }, access: function (b, a, c) {
            if (void 0 === a || a && "string" === typeof a && void 0 === c) return c = this.get(b, a), void 0 !== c ? c : this.get(b, e.camelCase(a));
            this.set(b, a, c);
            return void 0 !== c ? c : a
        }, remove: function (b, a) {
            var f = b[this.expando];
            if (void 0 !==
                f) {
                if (void 0 === a) this.register(b); else {
                    if (e.isArray(a)) var c = a.concat(a.map(e.camelCase)); else {
                        var d = e.camelCase(a);
                        a in f ? c = [a, d] : (c = d, c = c in f ? [c] : c.match(ca) || [])
                    }
                    for (d = c.length; d--;) delete f[c[d]]
                }
                if (void 0 === a || e.isEmptyObject(f)) b.nodeType ? b[this.expando] = void 0 : delete b[this.expando]
            }
        }, hasData: function (b) {
            b = b[this.expando];
            return void 0 !== b && !e.isEmptyObject(b)
        }
    };
    var A = new p, T = new p, tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Wa = /[A-Z]/g;
    e.extend({
        hasData: function (b) {
            return T.hasData(b) || A.hasData(b)
        },
        data: function (b, a, c) {
            return T.access(b, a, c)
        }, removeData: function (b, a) {
            T.remove(b, a)
        }, _data: function (b, a, c) {
            return A.access(b, a, c)
        }, _removeData: function (b, a) {
            A.remove(b, a)
        }
    });
    e.fn.extend({
        data: function (b, a) {
            var f, c = this[0], d = c && c.attributes;
            if (void 0 === b) {
                if (this.length) {
                    var h = T.get(c);
                    if (1 === c.nodeType && !A.get(c, "hasDataAttrs")) {
                        for (f = d.length; f--;) if (d[f]) {
                            var g = d[f].name;
                            0 === g.indexOf("data-") && (g = e.camelCase(g.slice(5)), C(c, g, h[g]))
                        }
                        A.set(c, "hasDataAttrs", !0)
                    }
                }
                return h
            }
            return "object" === typeof b ?
                this.each(function () {
                    T.set(this, b)
                }) : la(this, function (a) {
                    if (c && void 0 === a) {
                        var f = T.get(c, b) || T.get(c, b.replace(Wa, "-$&").toLowerCase());
                        if (void 0 !== f) return f;
                        var d = e.camelCase(b);
                        f = T.get(c, d);
                        if (void 0 !== f) return f;
                        f = C(c, d, void 0);
                        if (void 0 !== f) return f
                    } else d = e.camelCase(b), this.each(function () {
                        var f = T.get(this, d);
                        T.set(this, d, a);
                        -1 < b.indexOf("-") && void 0 !== f && T.set(this, b, a)
                    })
                }, null, a, 1 < arguments.length, null, !0)
        }, removeData: function (b) {
            return this.each(function () {
                T.remove(this, b)
            })
        }
    });
    e.extend({
        queue: function (b,
                         a, c) {
            if (b) {
                a = (a || "fx") + "queue";
                var f = A.get(b, a);
                c && (!f || e.isArray(c) ? f = A.access(b, a, e.makeArray(c)) : f.push(c));
                return f || []
            }
        }, dequeue: function (b, a) {
            a = a || "fx";
            var f = e.queue(b, a), c = f.length, d = f.shift(), h = e._queueHooks(b, a), g = function () {
                e.dequeue(b, a)
            };
            "inprogress" === d && (d = f.shift(), c--);
            d && ("fx" === a && f.unshift("inprogress"), delete h.stop, d.call(b, g, h));
            !c && h && h.empty.fire()
        }, _queueHooks: function (b, a) {
            var f = a + "queueHooks";
            return A.get(b, f) || A.access(b, f, {
                empty: e.Callbacks("once memory").add(function () {
                    A.remove(b,
                        [a + "queue", f])
                })
            })
        }
    });
    e.fn.extend({
        queue: function (b, a) {
            var f = 2;
            "string" !== typeof b && (a = b, b = "fx", f--);
            return arguments.length < f ? e.queue(this[0], b) : void 0 === a ? this : this.each(function () {
                var f = e.queue(this, b, a);
                e._queueHooks(this, b);
                "fx" === b && "inprogress" !== f[0] && e.dequeue(this, b)
            })
        }, dequeue: function (b) {
            return this.each(function () {
                e.dequeue(this, b)
            })
        }, clearQueue: function (b) {
            return this.queue(b || "fx", [])
        }, promise: function (b, a) {
            var f, c = 1, d = e.Deferred(), h = this, g = this.length, k = function () {
                --c || d.resolveWith(h,
                    [h])
            };
            "string" !== typeof b && (a = b, b = void 0);
            for (b = b || "fx"; g--;) (f = A.get(h[g], b + "queueHooks")) && f.empty && (c++, f.empty.add(k));
            k();
            return d.promise(a)
        }
    });
    var hb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ra = new RegExp("^(?:([+-])=|)(" + hb + ")([a-z%]*)$", "i"),
        da = ["Top", "Right", "Bottom", "Left"], Aa = function (b, a) {
            b = a || b;
            return "none" === e.css(b, "display") || !e.contains(b.ownerDocument, b)
        }, ib = /^(?:checkbox|radio)$/i, Xa = /<([\w:-]+)/, Ya = /^$|\/(?:java|ecma)script/i, V = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    V.optgroup = V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    var vb = /<|&#?\w+;/;
    (function () {
        var b = z.createDocumentFragment().appendChild(z.createElement("div")), a = z.createElement("input");
        a.setAttribute("type", "radio");
        a.setAttribute("checked", "checked");
        a.setAttribute("name", "t");
        b.appendChild(a);
        M.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked;
        b.innerHTML = "<textarea>x</textarea>";
        M.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    })();
    var Lb = /^key/, Mb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, jb = /^([^.]*)(?:\.(.+)|)/;
    e.event = {
        global: {},
        add: function (b, a, c, d, h) {
            var f, n, g, t, k;
            if (g = A.get(b)) {
                if (c.handler) {
                    var l = c;
                    c = l.handler;
                    h = l.selector
                }
                c.guid || (c.guid = e.guid++);
                (n = g.events) || (n = g.events = {});
                (f = g.handle) || (f = g.handle = function (a) {
                    return "undefined" !== typeof e && e.event.triggered !==
                    a.type ? e.event.dispatch.apply(b, arguments) : void 0
                });
                a = (a || "").match(ca) || [""];
                for (g = a.length; g--;) {
                    var w = jb.exec(a[g]) || [];
                    var q = t = w[1];
                    var p = (w[2] || "").split(".").sort();
                    q && (w = e.event.special[q] || {}, q = (h ? w.delegateType : w.bindType) || q, w = e.event.special[q] || {}, t = e.extend({
                        type: q,
                        origType: t,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: h,
                        needsContext: h && e.expr.match.needsContext.test(h),
                        namespace: p.join(".")
                    }, l), (k = n[q]) || (k = n[q] = [], k.delegateCount = 0, w.setup && !1 !== w.setup.call(b, d, p, f) || b.addEventListener &&
                    b.addEventListener(q, f)), w.add && (w.add.call(b, t), t.handler.guid || (t.handler.guid = c.guid)), h ? k.splice(k.delegateCount++, 0, t) : k.push(t), e.event.global[q] = !0)
                }
            }
        },
        remove: function (b, a, c, d, h) {
            var f, n, g, t, k, l = A.hasData(b) && A.get(b);
            if (l && (g = l.events)) {
                a = (a || "").match(ca) || [""];
                for (t = a.length; t--;) {
                    var w = jb.exec(a[t]) || [];
                    var q = k = w[1];
                    var p = (w[2] || "").split(".").sort();
                    if (q) {
                        var y = e.event.special[q] || {};
                        q = (d ? y.delegateType : y.bindType) || q;
                        var m = g[q] || [];
                        w = w[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") +
                            "(\\.|$)");
                        for (n = f = m.length; f--;) {
                            var x = m[f];
                            !h && k !== x.origType || c && c.guid !== x.guid || w && !w.test(x.namespace) || d && d !== x.selector && ("**" !== d || !x.selector) || (m.splice(f, 1), x.selector && m.delegateCount--, y.remove && y.remove.call(b, x))
                        }
                        n && !m.length && (y.teardown && !1 !== y.teardown.call(b, p, l.handle) || e.removeEvent(b, q, l.handle), delete g[q])
                    } else for (q in g) e.event.remove(b, q + a[t], c, d, !0)
                }
                e.isEmptyObject(g) && A.remove(b, "handle events")
            }
        },
        dispatch: function (b) {
            b = e.event.fix(b);
            var a, c, d, h = ka.call(arguments);
            var g =
                (A.get(this, "events") || {})[b.type] || [];
            var k = e.event.special[b.type] || {};
            h[0] = b;
            b.delegateTarget = this;
            if (!k.preDispatch || !1 !== k.preDispatch.call(this, b)) {
                var l = e.event.handlers.call(this, b, g);
                for (g = 0; (d = l[g++]) && !b.isPropagationStopped();) for (b.currentTarget = d.elem, a = 0; (c = d.handlers[a++]) && !b.isImmediatePropagationStopped();) if (!b.rnamespace || b.rnamespace.test(c.namespace)) b.handleObj = c, b.data = c.data, c = ((e.event.special[c.origType] || {}).handle || c.handler).apply(d.elem, h), void 0 !== c && !1 === (b.result =
                    c) && (b.preventDefault(), b.stopPropagation());
                k.postDispatch && k.postDispatch.call(this, b);
                return b.result
            }
        },
        handlers: function (b, a) {
            var f, c = [], d = a.delegateCount, h = b.target;
            if (d && h.nodeType && ("click" !== b.type || isNaN(b.button) || 1 > b.button)) for (; h !== this; h = h.parentNode || this) if (1 === h.nodeType && (!0 !== h.disabled || "click" !== b.type)) {
                var g = [];
                for (f = 0; f < d; f++) {
                    var k = a[f];
                    var l = k.selector + " ";
                    void 0 === g[l] && (g[l] = k.needsContext ? -1 < e(l, this).index(h) : e.find(l, this, null, [h]).length);
                    g[l] && g.push(k)
                }
                g.length &&
                c.push({elem: h, handlers: g})
            }
            d < a.length && c.push({elem: this, handlers: a.slice(d)});
            return c
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"], filter: function (b, a) {
                null == b.which && (b.which = null != a.charCode ? a.charCode : a.keyCode);
                return b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (b, a) {
                var f = a.button;
                if (null == b.pageX && null != a.clientX) {
                    var c = b.target.ownerDocument || z;
                    var e = c.documentElement;
                    c = c.body;
                    b.pageX = a.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0);
                    b.pageY = a.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)
                }
                b.which || void 0 === f || (b.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0);
                return b
            }
        },
        fix: function (b) {
            if (b[e.expando]) return b;
            var a = b.type;
            var c = b, d = this.fixHooks[a];
            d || (this.fixHooks[a] = d = Mb.test(a) ? this.mouseHooks :
                Lb.test(a) ? this.keyHooks : {});
            var h = d.props ? this.props.concat(d.props) : this.props;
            b = new e.Event(c);
            for (a = h.length; a--;) {
                var g = h[a];
                b[g] = c[g]
            }
            b.target || (b.target = z);
            3 === b.target.nodeType && (b.target = b.target.parentNode);
            return d.filter ? d.filter(b, c) : b
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== q() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === q() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" ===
                        this.type && this.click && e.nodeName(this, "input")) return this.click(), !1
                }, _default: function (b) {
                    return e.nodeName(b.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (b) {
                    void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
                }
            }
        }
    };
    e.removeEvent = function (b, a, c) {
        b.removeEventListener && b.removeEventListener(a, c)
    };
    e.Event = function (b, a) {
        if (!(this instanceof e.Event)) return new e.Event(b, a);
        b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 ===
        b.defaultPrevented && !1 === b.returnValue ? h : x) : this.type = b;
        a && e.extend(this, a);
        this.timeStamp = b && b.timeStamp || e.now();
        this[e.expando] = !0
    };
    e.Event.prototype = {
        constructor: e.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function () {
            var b = this.originalEvent;
            this.isDefaultPrevented = h;
            b && !this.isSimulated && b.preventDefault()
        },
        stopPropagation: function () {
            var b = this.originalEvent;
            this.isPropagationStopped = h;
            b && !this.isSimulated && b.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var b = this.originalEvent;
            this.isImmediatePropagationStopped = h;
            b && !this.isSimulated && b.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (b, a) {
        e.event.special[b] = {
            delegateType: a, bindType: a, handle: function (b) {
                var c = b.relatedTarget, f = b.handleObj;
                if (!c || c !== this && !e.contains(this, c)) {
                    b.type = f.origType;
                    var d = f.handler.apply(this, arguments);
                    b.type = a
                }
                return d
            }
        }
    });
    e.fn.extend({
        on: function (b, a, c, e) {
            return F(this, b, a, c, e)
        }, one: function (b, a, c, e) {
            return F(this, b, a, c, e, 1)
        }, off: function (b, a, c) {
            if (b && b.preventDefault && b.handleObj) {
                var f = b.handleObj;
                e(b.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler);
                return this
            }
            if ("object" === typeof b) {
                for (f in b) this.off(f, a, b[f]);
                return this
            }
            if (!1 === a || "function" === typeof a) c = a, a = void 0;
            !1 === c && (c = x);
            return this.each(function () {
                e.event.remove(this, b, c, a)
            })
        }
    });
    var Nb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Ob = /<script|<style|<link/i, xb = /checked\s*(?:[^=]|=\s*.checked.)/i, wb = /^true\/(.*)/,
        zb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    e.extend({
        htmlPrefilter: function (b) {
            return b.replace(Nb, "<$1></$2>")
        }, clone: function (b, a, c) {
            var f, d = b.cloneNode(!0), h = e.contains(b.ownerDocument, b);
            if (!(M.noCloneChecked || 1 !== b.nodeType && 11 !== b.nodeType || e.isXMLDoc(b))) {
                var n = v(d);
                var g = v(b);
                var k = 0;
                for (f = g.length; k < f; k++) {
                    var l = g[k], q = n[k], p = q.nodeName.toLowerCase();
                    if ("input" === p && ib.test(l.type)) q.checked = l.checked; else if ("input" ===
                        p || "textarea" === p) q.defaultValue = l.defaultValue
                }
            }
            if (a) if (c) for (g = g || v(b), n = n || v(d), k = 0, f = g.length; k < f; k++) G(g[k], n[k]); else G(b, d);
            n = v(d, "script");
            0 < n.length && r(n, !h && v(b, "script"));
            return d
        }, cleanData: function (b) {
            for (var a, c, d, h = e.event.special, g = 0; void 0 !== (c = b[g]); g++) if (Ca(c)) {
                if (a = c[A.expando]) {
                    if (a.events) for (d in a.events) h[d] ? e.event.remove(c, d) : e.removeEvent(c, d, a.handle);
                    c[A.expando] = void 0
                }
                c[T.expando] && (c[T.expando] = void 0)
            }
        }
    });
    e.fn.extend({
        domManip: I, detach: function (b) {
            return B(this,
                b, !0)
        }, remove: function (b) {
            return B(this, b)
        }, text: function (b) {
            return la(this, function (b) {
                return void 0 === b ? e.text(this) : this.empty().each(function () {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = b
                })
            }, null, b, arguments.length)
        }, append: function () {
            return I(this, arguments, function (b) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || J(this, b).appendChild(b)
            })
        }, prepend: function () {
            return I(this, arguments, function (b) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var a =
                        J(this, b);
                    a.insertBefore(b, a.firstChild)
                }
            })
        }, before: function () {
            return I(this, arguments, function (b) {
                this.parentNode && this.parentNode.insertBefore(b, this)
            })
        }, after: function () {
            return I(this, arguments, function (b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        }, empty: function () {
            for (var b, a = 0; null != (b = this[a]); a++) 1 === b.nodeType && (e.cleanData(v(b, !1)), b.textContent = "");
            return this
        }, clone: function (b, a) {
            b = null == b ? !1 : b;
            a = null == a ? b : a;
            return this.map(function () {
                return e.clone(this, b, a)
            })
        },
        html: function (b) {
            return la(this, function (b) {
                var a = this[0] || {}, c = 0, f = this.length;
                if (void 0 === b && 1 === a.nodeType) return a.innerHTML;
                if ("string" === typeof b && !Ob.test(b) && !V[(Xa.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = e.htmlPrefilter(b);
                    try {
                        for (; c < f; c++) a = this[c] || {}, 1 === a.nodeType && (e.cleanData(v(a, !1)), a.innerHTML = b);
                        a = 0
                    } catch (Y) {
                    }
                }
                a && this.empty().append(b)
            }, null, b, arguments.length)
        }, replaceWith: function () {
            var b = [];
            return I(this, arguments, function (a) {
                var c = this.parentNode;
                0 > e.inArray(this, b) && (e.cleanData(v(this)),
                c && c.replaceChild(a, this))
            }, b)
        }
    });
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (b, a) {
        e.fn[b] = function (b) {
            for (var c = [], f = e(b), d = f.length - 1, h = 0; h <= d; h++) b = h === d ? this : this.clone(!0), e(f[h])[a](b), Oa.apply(c, b.get());
            return this.pushStack(c)
        }
    });
    var Ga, $a = {HTML: "block", BODY: "block"}, ab = /^margin/, La = new RegExp("^(" + hb + ")(?!px)[a-z%]+$", "i"),
        Ha = function (b) {
            var a = b.ownerDocument.defaultView;
            a && a.opener || (a = c);
            return a.getComputedStyle(b)
        },
        Qa = function (b, a, c, e) {
            var f, d = {};
            for (f in a) d[f] = b.style[f], b.style[f] = a[f];
            c = c.apply(b, e || []);
            for (f in a) b.style[f] = d[f];
            return c
        }, va = z.documentElement;
    (function () {
        function b() {
            l.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            l.innerHTML = "";
            va.appendChild(k);
            var b = c.getComputedStyle(l);
            a = "1%" !== b.top;
            g = "2px" === b.marginLeft;
            d = "4px" === b.width;
            l.style.marginRight = "50%";
            h = "4px" === b.marginRight;
            va.removeChild(k)
        }

        var a, d, h, g, k = z.createElement("div"), l = z.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", M.clearCloneStyle = "content-box" === l.style.backgroundClip, k.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", k.appendChild(l), e.extend(M, {
            pixelPosition: function () {
                b();
                return a
            }, boxSizingReliable: function () {
                null == d && b();
                return d
            }, pixelMarginRight: function () {
                null ==
                d && b();
                return h
            }, reliableMarginLeft: function () {
                null == d && b();
                return g
            }, reliableMarginRight: function () {
                var b = l.appendChild(z.createElement("div"));
                b.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                b.style.marginRight = b.style.width = "0";
                l.style.width = "1px";
                va.appendChild(k);
                var a = !parseFloat(c.getComputedStyle(b).marginRight);
                va.removeChild(k);
                l.removeChild(b);
                return a
            }
        }))
    })();
    var Pb = /^(none|table(?!-c[ea]).+)/, Qb = {
            position: "absolute",
            visibility: "hidden", display: "block"
        }, kb = {letterSpacing: "0", fontWeight: "400"}, cb = ["Webkit", "O", "Moz", "ms"],
        bb = z.createElement("div").style;
    e.extend({
        cssHooks: {
            opacity: {
                get: function (b, a) {
                    if (a) return b = H(b, "opacity"), "" === b ? "1" : b
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (b, a, c, d) {
            if (b && 3 !== b.nodeType && 8 !== b.nodeType &&
                b.style) {
                var f, h = e.camelCase(a), g = b.style;
                a = e.cssProps[h] || (e.cssProps[h] = Z(h) || h);
                var n = e.cssHooks[a] || e.cssHooks[h];
                if (void 0 !== c) {
                    var k = typeof c;
                    "string" === k && (f = ra.exec(c)) && f[1] && (c = u(b, a, f), k = "number");
                    null != c && c === c && ("number" === k && (c += f && f[3] || (e.cssNumber[h] ? "" : "px")), M.clearCloneStyle || "" !== c || 0 !== a.indexOf("background") || (g[a] = "inherit"), n && "set" in n && void 0 === (c = n.set(b, c, d)) || (g[a] = c))
                } else return n && "get" in n && void 0 !== (f = n.get(b, !1, d)) ? f : g[a]
            }
        },
        css: function (b, a, c, d) {
            var f;
            var h = e.camelCase(a);
            a = e.cssProps[h] || (e.cssProps[h] = Z(h) || h);
            (h = e.cssHooks[a] || e.cssHooks[h]) && "get" in h && (f = h.get(b, !0, c));
            void 0 === f && (f = H(b, a, d));
            "normal" === f && a in kb && (f = kb[a]);
            return "" === c || c ? (b = parseFloat(f), !0 === c || isFinite(b) ? b || 0 : f) : f
        }
    });
    e.each(["height", "width"], function (b, a) {
        e.cssHooks[a] = {
            get: function (b, c, f) {
                if (c) return Pb.test(e.css(b, "display")) && 0 === b.offsetWidth ? Qa(b, Qb, function () {
                    return aa(b, a, f)
                }) : aa(b, a, f)
            }, set: function (b, c, f) {
                var d, h = f && Ha(b);
                (f = f && U(b, a, f, "border-box" === e.css(b, "boxSizing", !1, h),
                    h)) && (d = ra.exec(c)) && "px" !== (d[3] || "px") && (b.style[a] = c, c = e.css(b, a));
                return S(b, c, f)
            }
        }
    });
    e.cssHooks.marginLeft = W(M.reliableMarginLeft, function (b, a) {
        if (a) return (parseFloat(H(b, "marginLeft")) || b.getBoundingClientRect().left - Qa(b, {marginLeft: 0}, function () {
            return b.getBoundingClientRect().left
        })) + "px"
    });
    e.cssHooks.marginRight = W(M.reliableMarginRight, function (b, a) {
        if (a) return Qa(b, {display: "inline-block"}, H, [b, "marginRight"])
    });
    e.each({margin: "", padding: "", border: "Width"}, function (b, a) {
        e.cssHooks[b + a] =
            {
                expand: function (c) {
                    var f = 0, e = {};
                    for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > f; f++) e[b + da[f] + a] = c[f] || c[f - 2] || c[0];
                    return e
                }
            };
        ab.test(b) || (e.cssHooks[b + a].set = S)
    });
    e.fn.extend({
        css: function (b, a) {
            return la(this, function (b, a, c) {
                var f, d = {}, h = 0;
                if (e.isArray(a)) {
                    c = Ha(b);
                    for (f = a.length; h < f; h++) d[a[h]] = e.css(b, a[h], !1, c);
                    return d
                }
                return void 0 !== c ? e.style(b, a, c) : e.css(b, a)
            }, b, a, 1 < arguments.length)
        }, show: function () {
            return ia(this, !0)
        }, hide: function () {
            return ia(this)
        }, toggle: function (b) {
            return "boolean" ===
            typeof b ? b ? this.show() : this.hide() : this.each(function () {
                Aa(this) ? e(this).show() : e(this).hide()
            })
        }
    });
    e.Tween = N;
    N.prototype = {
        constructor: N, init: function (b, a, c, d, h, g) {
            this.elem = b;
            this.prop = c;
            this.easing = h || e.easing._default;
            this.options = a;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = g || (e.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var b = N.propHooks[this.prop];
            return b && b.get ? b.get(this) : N.propHooks._default.get(this)
        }, run: function (b) {
            var a, c = N.propHooks[this.prop];
            this.pos = this.options.duration ? a =
                e.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : a = b;
            this.now = (this.end - this.start) * a + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : N.propHooks._default.set(this);
            return this
        }
    };
    N.prototype.init.prototype = N.prototype;
    N.propHooks = {
        _default: {
            get: function (b) {
                return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (b = e.css(b.elem, b.prop, "")) && "auto" !== b ? b : 0
            }, set: function (b) {
                if (e.fx.step[b.prop]) e.fx.step[b.prop](b);
                else 1 !== b.elem.nodeType || null == b.elem.style[e.cssProps[b.prop]] && !e.cssHooks[b.prop] ? b.elem[b.prop] = b.now : e.style(b.elem, b.prop, b.now + b.unit)
            }
        }
    };
    N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function (b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    e.easing = {
        linear: function (b) {
            return b
        }, swing: function (b) {
            return .5 - Math.cos(b * Math.PI) / 2
        }, _default: "swing"
    };
    e.fx = N.prototype.init;
    e.fx.step = {};
    var wa, Ka, Rb = /^(?:toggle|show|hide)$/, Sb = /queueHooks$/;
    e.Animation = e.extend(y, {
        tweeners: {
            "*": [function (b,
                            a) {
                var c = this.createTween(b, a);
                u(c.elem, b, ra.exec(a), c);
                return c
            }]
        }, tweener: function (b, a) {
            e.isFunction(b) ? (a = b, b = ["*"]) : b = b.match(ca);
            for (var c, f = 0, d = b.length; f < d; f++) c = b[f], y.tweeners[c] = y.tweeners[c] || [], y.tweeners[c].unshift(a)
        }, prefilters: [function (b, a, c) {
            var f, d = this, h = {}, g = b.style, n = b.nodeType && Aa(b), k = A.get(b, "fxshow");
            if (!c.queue) {
                var l = e._queueHooks(b, "fx");
                if (null == l.unqueued) {
                    l.unqueued = 0;
                    var q = l.empty.fire;
                    l.empty.fire = function () {
                        l.unqueued || q()
                    }
                }
                l.unqueued++;
                d.always(function () {
                    d.always(function () {
                        l.unqueued--;
                        e.queue(b, "fx").length || l.empty.fire()
                    })
                })
            }
            if (1 === b.nodeType && ("height" in a || "width" in a)) {
                c.overflow = [g.overflow, g.overflowX, g.overflowY];
                var p = e.css(b, "display");
                var y = "none" === p ? A.get(b, "olddisplay") || ma(b.nodeName) : p;
                "inline" === y && "none" === e.css(b, "float") && (g.display = "inline-block")
            }
            c.overflow && (g.overflow = "hidden", d.always(function () {
                g.overflow = c.overflow[0];
                g.overflowX = c.overflow[1];
                g.overflowY = c.overflow[2]
            }));
            for (f in a) if (y = a[f], Rb.exec(y)) {
                delete a[f];
                var m = m || "toggle" === y;
                if (y === (n ? "hide" :
                        "show")) if ("show" === y && k && void 0 !== k[f]) n = !0; else continue;
                h[f] = k && k[f] || e.style(b, f)
            } else p = void 0;
            if (e.isEmptyObject(h)) "inline" === ("none" === p ? ma(b.nodeName) : p) && (g.display = p); else for (f in k ? "hidden" in k && (n = k.hidden) : k = A.access(b, "fxshow", {}), m && (k.hidden = !n), n ? e(b).show() : d.done(function () {
                e(b).hide()
            }), d.done(function () {
                var a;
                A.remove(b, "fxshow");
                for (a in h) e.style(b, a, h[a])
            }), h) a = X(n ? k[f] : 0, f, d), f in k || (k[f] = a.start, n && (a.end = a.start, a.start = "width" === f || "height" === f ? 1 : 0))
        }], prefilter: function (b,
                                 a) {
            a ? y.prefilters.unshift(b) : y.prefilters.push(b)
        }
    });
    e.speed = function (b, a, c) {
        var f = b && "object" === typeof b ? e.extend({}, b) : {
            complete: c || !c && a || e.isFunction(b) && b,
            duration: b,
            easing: c && a || a && !e.isFunction(a) && a
        };
        f.duration = e.fx.off ? 0 : "number" === typeof f.duration ? f.duration : f.duration in e.fx.speeds ? e.fx.speeds[f.duration] : e.fx.speeds._default;
        if (null == f.queue || !0 === f.queue) f.queue = "fx";
        f.old = f.complete;
        f.complete = function () {
            e.isFunction(f.old) && f.old.call(this);
            f.queue && e.dequeue(this, f.queue)
        };
        return f
    };
    e.fn.extend({
        fadeTo: function (b, a, c, e) {
            return this.filter(Aa).css("opacity", 0).show().end().animate({opacity: a}, b, c, e)
        }, animate: function (b, a, c, d) {
            var f = e.isEmptyObject(b), h = e.speed(a, c, d);
            a = function () {
                var a = y(this, e.extend({}, b), h);
                (f || A.get(this, "finish")) && a.stop(!0)
            };
            a.finish = a;
            return f || !1 === h.queue ? this.each(a) : this.queue(h.queue, a)
        }, stop: function (b, a, c) {
            var f = function (b) {
                var a = b.stop;
                delete b.stop;
                a(c)
            };
            "string" !== typeof b && (c = a, a = b, b = void 0);
            a && !1 !== b && this.queue(b || "fx", []);
            return this.each(function () {
                var a =
                    !0, d = null != b && b + "queueHooks", h = e.timers, g = A.get(this);
                if (d) g[d] && g[d].stop && f(g[d]); else for (d in g) g[d] && g[d].stop && Sb.test(d) && f(g[d]);
                for (d = h.length; d--;) h[d].elem !== this || null != b && h[d].queue !== b || (h[d].anim.stop(c), a = !1, h.splice(d, 1));
                !a && c || e.dequeue(this, b)
            })
        }, finish: function (b) {
            !1 !== b && (b = b || "fx");
            return this.each(function () {
                var a = A.get(this), c = a[b + "queue"];
                var d = a[b + "queueHooks"];
                var h = e.timers, g = c ? c.length : 0;
                a.finish = !0;
                e.queue(this, b, []);
                d && d.stop && d.stop.call(this, !0);
                for (d = h.length; d--;) h[d].elem ===
                this && h[d].queue === b && (h[d].anim.stop(!0), h.splice(d, 1));
                for (d = 0; d < g; d++) c[d] && c[d].finish && c[d].finish.call(this);
                delete a.finish
            })
        }
    });
    e.each(["toggle", "show", "hide"], function (b, a) {
        var c = e.fn[a];
        e.fn[a] = function (b, f, d) {
            return null == b || "boolean" === typeof b ? c.apply(this, arguments) : this.animate(ea(a, !0), b, f, d)
        }
    });
    e.each({
        slideDown: ea("show"),
        slideUp: ea("hide"),
        slideToggle: ea("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (b, a) {
        e.fn[b] = function (b, c,
                            f) {
            return this.animate(a, b, c, f)
        }
    });
    e.timers = [];
    e.fx.tick = function () {
        var b = 0, a = e.timers;
        for (wa = e.now(); b < a.length; b++) {
            var c = a[b];
            c() || a[b] !== c || a.splice(b--, 1)
        }
        a.length || e.fx.stop();
        wa = void 0
    };
    e.fx.timer = function (b) {
        e.timers.push(b);
        b() ? e.fx.start() : e.timers.pop()
    };
    e.fx.interval = 13;
    e.fx.start = function () {
        Ka || (Ka = c.setInterval(e.fx.tick, e.fx.interval))
    };
    e.fx.stop = function () {
        c.clearInterval(Ka);
        Ka = null
    };
    e.fx.speeds = {slow: 600, fast: 200, _default: 400};
    e.fn.delay = function (b, a) {
        b = e.fx ? e.fx.speeds[b] || b : b;
        return this.queue(a || "fx", function (a, f) {
            var d = c.setTimeout(a, b);
            f.stop = function () {
                c.clearTimeout(d)
            }
        })
    };
    (function () {
        var b = z.createElement("input"), a = z.createElement("select"), c = a.appendChild(z.createElement("option"));
        b.type = "checkbox";
        M.checkOn = "" !== b.value;
        M.optSelected = c.selected;
        a.disabled = !0;
        M.optDisabled = !c.disabled;
        b = z.createElement("input");
        b.value = "t";
        b.type = "radio";
        M.radioValue = "t" === b.value
    })();
    var pa = e.expr.attrHandle;
    e.fn.extend({
        attr: function (b, a) {
            return la(this, e.attr, b, a, 1 < arguments.length)
        },
        removeAttr: function (b) {
            return this.each(function () {
                e.removeAttr(this, b)
            })
        }
    });
    e.extend({
        attr: function (b, a, c) {
            var f, d = b.nodeType;
            if (3 !== d && 8 !== d && 2 !== d) {
                if ("undefined" === typeof b.getAttribute) return e.prop(b, a, c);
                if (1 !== d || !e.isXMLDoc(b)) {
                    a = a.toLowerCase();
                    var h = e.attrHooks[a] || (e.expr.match.bool.test(a) ? Tb : void 0)
                }
                if (void 0 !== c) {
                    if (null === c) {
                        e.removeAttr(b, a);
                        return
                    }
                    if (h && "set" in h && void 0 !== (f = h.set(b, c, a))) return f;
                    b.setAttribute(a, c + "");
                    return c
                }
                if (h && "get" in h && null !== (f = h.get(b, a))) return f;
                f =
                    e.find.attr(b, a);
                return null == f ? void 0 : f
            }
        }, attrHooks: {
            type: {
                set: function (a, c) {
                    if (!M.radioValue && "radio" === c && e.nodeName(a, "input")) {
                        var b = a.value;
                        a.setAttribute("type", c);
                        b && (a.value = b);
                        return c
                    }
                }
            }
        }, removeAttr: function (a, c) {
            var b = 0, f = c && c.match(ca);
            if (f && 1 === a.nodeType) for (; c = f[b++];) {
                var d = e.propFix[c] || c;
                e.expr.match.bool.test(c) && (a[d] = !1);
                a.removeAttribute(c)
            }
        }
    });
    var Tb = {
        set: function (a, c, d) {
            !1 === c ? e.removeAttr(a, d) : a.setAttribute(d, d);
            return d
        }
    };
    e.each(e.expr.match.bool.source.match(/\w+/g), function (a,
                                                             c) {
        var b = pa[c] || e.find.attr;
        pa[c] = function (a, c, f) {
            if (!f) {
                var d = pa[c];
                pa[c] = e;
                var e = null != b(a, c, f) ? c.toLowerCase() : null;
                pa[c] = d
            }
            return e
        }
    });
    var Ub = /^(?:input|select|textarea|button)$/i, Vb = /^(?:a|area)$/i;
    e.fn.extend({
        prop: function (a, c) {
            return la(this, e.prop, a, c, 1 < arguments.length)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[e.propFix[a] || a]
            })
        }
    });
    e.extend({
        prop: function (a, c, d) {
            var b, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                if (1 !== f || !e.isXMLDoc(a)) {
                    c = e.propFix[c] || c;
                    var h = e.propHooks[c]
                }
                return void 0 !==
                d ? h && "set" in h && void 0 !== (b = h.set(a, d, c)) ? b : a[c] = d : h && "get" in h && null !== (b = h.get(a, c)) ? b : a[c]
            }
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = e.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Ub.test(a.nodeName) || Vb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    });
    M.optSelected || (e.propHooks.selected = {
        get: function (a) {
            (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
            return null
        }, set: function (a) {
            if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex
        }
    });
    e.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        e.propFix[this.toLowerCase()] = this
    });
    var Ra = /[\t\r\n\f]/g;
    e.fn.extend({
        addClass: function (a) {
            var b, c, d, h, g, k = 0;
            if (e.isFunction(a)) return this.each(function (b) {
                e(this).addClass(a.call(this, b, P(this)))
            });
            if ("string" === typeof a && a) for (b = a.match(ca) || []; c = this[k++];) {
                var l = P(c);
                if (d = 1 === c.nodeType && (" " + l + " ").replace(Ra, " ")) {
                    for (g = 0; h = b[g++];) 0 > d.indexOf(" " + h + " ") && (d +=
                        h + " ");
                    d = e.trim(d);
                    l !== d && c.setAttribute("class", d)
                }
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, h, g, k = 0;
            if (e.isFunction(a)) return this.each(function (b) {
                e(this).removeClass(a.call(this, b, P(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" === typeof a && a) for (b = a.match(ca) || []; c = this[k++];) {
                var l = P(c);
                if (d = 1 === c.nodeType && (" " + l + " ").replace(Ra, " ")) {
                    for (g = 0; h = b[g++];) for (; -1 < d.indexOf(" " + h + " ");) d = d.replace(" " + h + " ", " ");
                    d = e.trim(d);
                    l !== d && c.setAttribute("class", d)
                }
            }
            return this
        },
        toggleClass: function (a, c) {
            var b = typeof a;
            return "boolean" === typeof c && "string" === b ? c ? this.addClass(a) : this.removeClass(a) : e.isFunction(a) ? this.each(function (b) {
                e(this).toggleClass(a.call(this, b, P(this), c), c)
            }) : this.each(function () {
                var c, f;
                if ("string" === b) {
                    var d = 0;
                    var h = e(this);
                    for (f = a.match(ca) || []; c = f[d++];) h.hasClass(c) ? h.removeClass(c) : h.addClass(c)
                } else if (void 0 === a || "boolean" === b) (c = P(this)) && A.set(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || !1 === a ? "" : A.get(this, "__className__") ||
                    "")
            })
        }, hasClass: function (a) {
            var b, c = 0;
            for (a = " " + a + " "; b = this[c++];) if (1 === b.nodeType && -1 < (" " + P(b) + " ").replace(Ra, " ").indexOf(a)) return !0;
            return !1
        }
    });
    var Wb = /\r/g, Xb = /[\x20\t\r\n\f]+/g;
    e.fn.extend({
        val: function (a) {
            var b, c, d = this[0];
            if (arguments.length) {
                var h = e.isFunction(a);
                return this.each(function (c) {
                    1 === this.nodeType && (c = h ? a.call(this, c, e(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : e.isArray(c) && (c = e.map(c, function (a) {
                        return null == a ? "" : a + ""
                    })), b = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()],
                    b && "set" in b && void 0 !== b.set(this, c, "value") || (this.value = c))
                })
            }
            if (d) {
                if ((b = e.valHooks[d.type] || e.valHooks[d.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(d, "value"))) return c;
                c = d.value;
                return "string" === typeof c ? c.replace(Wb, "") : null == c ? "" : c
            }
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = e.find.attr(a, "value");
                    return null != b ? b : e.trim(e.text(a)).replace(Xb, " ")
                }
            }, select: {
                get: function (a) {
                    for (var b, c = a.options, d = a.selectedIndex, h = (a = "select-one" === a.type || 0 > d) ? null : [], g = a ? d + 1 : c.length,
                             k = 0 > d ? g : a ? d : 0; k < g; k++) if (b = c[k], !(!b.selected && k !== d || (M.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && e.nodeName(b.parentNode, "optgroup"))) {
                        b = e(b).val();
                        if (a) return b;
                        h.push(b)
                    }
                    return h
                }, set: function (a, c) {
                    for (var b, d = a.options, f = e.makeArray(c), h = d.length; h--;) if (c = d[h], c.selected = -1 < e.inArray(e.valHooks.option.get(c), f)) b = !0;
                    b || (a.selectedIndex = -1);
                    return f
                }
            }
        }
    });
    e.each(["radio", "checkbox"], function () {
        e.valHooks[this] = {
            set: function (a, c) {
                if (e.isArray(c)) return a.checked =
                    -1 < e.inArray(e(a).val(), c)
            }
        };
        M.checkOn || (e.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var lb = /^(?:focusinfocus|focusoutblur)$/;
    e.extend(e.event, {
        trigger: function (a, d, h, g) {
            var b, f, k = [h || z], l = xa.call(a, "type") ? a.type : a;
            var n = xa.call(a, "namespace") ? a.namespace.split(".") : [];
            var q = b = h = h || z;
            if (3 !== h.nodeType && 8 !== h.nodeType && !lb.test(l + e.event.triggered)) {
                -1 < l.indexOf(".") && (n = l.split("."), l = n.shift(), n.sort());
                var p = 0 > l.indexOf(":") && "on" + l;
                a = a[e.expando] ? a :
                    new e.Event(l, "object" === typeof a && a);
                a.isTrigger = g ? 2 : 3;
                a.namespace = n.join(".");
                a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                a.result = void 0;
                a.target || (a.target = h);
                d = null == d ? [a] : e.makeArray(d, [a]);
                n = e.event.special[l] || {};
                if (g || !n.trigger || !1 !== n.trigger.apply(h, d)) {
                    if (!g && !n.noBubble && !e.isWindow(h)) {
                        var y = n.delegateType || l;
                        lb.test(y + l) || (q = q.parentNode);
                        for (; q; q = q.parentNode) k.push(q), b = q;
                        b === (h.ownerDocument || z) && k.push(b.defaultView || b.parentWindow || c)
                    }
                    for (b =
                             0; (q = k[b++]) && !a.isPropagationStopped();) a.type = 1 < b ? y : n.bindType || l, (f = (A.get(q, "events") || {})[a.type] && A.get(q, "handle")) && f.apply(q, d), (f = p && q[p]) && f.apply && Ca(q) && (a.result = f.apply(q, d), !1 === a.result && a.preventDefault());
                    a.type = l;
                    g || a.isDefaultPrevented() || n._default && !1 !== n._default.apply(k.pop(), d) || !Ca(h) || !p || !e.isFunction(h[l]) || e.isWindow(h) || ((b = h[p]) && (h[p] = null), e.event.triggered = l, h[l](), e.event.triggered = void 0, b && (h[p] = b));
                    return a.result
                }
            }
        }, simulate: function (a, c, d) {
            a = e.extend(new e.Event,
                d, {type: a, isSimulated: !0});
            e.event.trigger(a, null, c)
        }
    });
    e.fn.extend({
        trigger: function (a, c) {
            return this.each(function () {
                e.event.trigger(a, c, this)
            })
        }, triggerHandler: function (a, c) {
            var b = this[0];
            if (b) return e.event.trigger(a, c, b, !0)
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, c) {
        e.fn[c] = function (a, b) {
            return 0 < arguments.length ?
                this.on(c, null, a, b) : this.trigger(c)
        }
    });
    e.fn.extend({
        hover: function (a, c) {
            return this.mouseenter(a).mouseleave(c || a)
        }
    });
    M.focusin = "onfocusin" in c;
    M.focusin || e.each({focus: "focusin", blur: "focusout"}, function (a, c) {
        var b = function (a) {
            e.event.simulate(c, a.target, e.event.fix(a))
        };
        e.event.special[c] = {
            setup: function () {
                var d = this.ownerDocument || this, f = A.access(d, c);
                f || d.addEventListener(a, b, !0);
                A.access(d, c, (f || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, f = A.access(d, c) - 1;
                f ? A.access(d, c, f) : (d.removeEventListener(a,
                    b, !0), A.remove(d, c))
            }
        }
    });
    var za = c.location, Sa = e.now(), Ta = /\?/;
    e.parseJSON = function (a) {
        return JSON.parse(a + "")
    };
    e.parseXML = function (a) {
        if (!a || "string" !== typeof a) return null;
        try {
            var b = (new c.DOMParser).parseFromString(a, "text/xml")
        } catch (n) {
            b = void 0
        }
        b && !b.getElementsByTagName("parsererror").length || e.error("Invalid XML: " + a);
        return b
    };
    var Yb = /#.*$/, mb = /([?&])_=[^&]*/, Zb = /^(.*?):[ \t]*([^\r\n]*)$/mg, $b = /^(?:GET|HEAD)$/, ac = /^\/\//,
        nb = {}, Ma = {}, ob = "*/".concat("*"), Ua = z.createElement("a");
    Ua.href = za.href;
    e.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: za.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(za.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ob,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": e.parseJSON, "text xml": e.parseXML},
            flatOptions: {url: !0, context: !0}
        }, ajaxSetup: function (a, c) {
            return c ? ja(ja(a, e.ajaxSettings), c) : ja(e.ajaxSettings, a)
        }, ajaxPrefilter: oa(nb), ajaxTransport: oa(Ma), ajax: function (a, d) {
            function b(a, b, d, g) {
                var n = b;
                if (2 !== F) {
                    F = 2;
                    k && c.clearTimeout(k);
                    f = void 0;
                    h = g || "";
                    r.readyState = 0 < a ? 4 : 0;
                    g = 200 <= a && 300 > a || 304 === a;
                    if (d) {
                        var q = p;
                        for (var t = r, u, P, J, w, v = q.contents, I = q.dataTypes; "*" === I[0];) I.shift(), void 0 === u && (u = q.mimeType ||
                            t.getResponseHeader("Content-Type"));
                        if (u) for (P in v) if (v[P] && v[P].test(u)) {
                            I.unshift(P);
                            break
                        }
                        if (I[0] in d) J = I[0]; else {
                            for (P in d) {
                                if (!I[0] || q.converters[P + " " + I[0]]) {
                                    J = P;
                                    break
                                }
                                w || (w = P)
                            }
                            J = J || w
                        }
                        J ? (J !== I[0] && I.unshift(J), q = d[J]) : q = void 0
                    }
                    a:{
                        d = p;
                        u = q;
                        P = r;
                        J = g;
                        var B;
                        t = {};
                        v = d.dataTypes.slice();
                        if (v[1]) for (G in d.converters) t[G.toLowerCase()] = d.converters[G];
                        for (w = v.shift(); w;) {
                            d.responseFields[w] && (P[d.responseFields[w]] = u);
                            !R && J && d.dataFilter && (u = d.dataFilter(u, d.dataType));
                            var R = w;
                            if (w = v.shift()) if ("*" ===
                                w) w = R; else if ("*" !== R && R !== w) {
                                var G = t[R + " " + w] || t["* " + w];
                                if (!G) for (B in t) if (q = B.split(" "), q[1] === w && (G = t[R + " " + q[0]] || t["* " + q[0]])) {
                                    !0 === G ? G = t[B] : !0 !== t[B] && (w = q[0], v.unshift(q[1]));
                                    break
                                }
                                if (!0 !== G) if (G && d.throws) u = G(u); else try {
                                    u = G(u)
                                } catch (Gb) {
                                    q = {state: "parsererror", error: G ? Gb : "No conversion from " + R + " to " + w};
                                    break a
                                }
                            }
                        }
                        q = {state: "success", data: u}
                    }
                    if (g) if (p.ifModified && ((n = r.getResponseHeader("Last-Modified")) && (e.lastModified[E] = n), (n = r.getResponseHeader("etag")) && (e.etag[E] = n)), 204 === a || "HEAD" ===
                        p.type) n = "nocontent"; else if (304 === a) n = "notmodified"; else {
                        n = q.state;
                        var H = q.data;
                        var qa = q.error;
                        g = !qa
                    } else if (qa = n, a || !n) n = "error", 0 > a && (a = 0);
                    r.status = a;
                    r.statusText = (b || n) + "";
                    g ? x.resolveWith(y, [H, n, r]) : x.rejectWith(y, [r, n, qa]);
                    r.statusCode(L);
                    L = void 0;
                    l && m.trigger(g ? "ajaxSuccess" : "ajaxError", [r, p, g ? H : qa]);
                    C.fireWith(y, [r, n]);
                    l && (m.trigger("ajaxComplete", [r, p]), --e.active || e.event.trigger("ajaxStop"))
                }
            }

            "object" === typeof a && (d = a, a = void 0);
            d = d || {};
            var f, h, g, k, l, q, p = e.ajaxSetup({}, d), y = p.context || p,
                m = p.context && (y.nodeType || y.jquery) ? e(y) : e.event, x = e.Deferred(),
                C = e.Callbacks("once memory"), L = p.statusCode || {}, u = {}, P = {}, F = 0, J = "canceled", r = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === F) {
                            if (!g) for (g = {}; b = Zb.exec(h);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === F ? h : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        F || (a = P[c] = P[c] || a, u[a] = b);
                        return this
                    }, overrideMimeType: function (a) {
                        F || (p.mimeType = a);
                        return this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a) if (2 > F) for (b in a) L[b] = [L[b], a[b]]; else r.always(a[r.status]);
                        return this
                    }, abort: function (a) {
                        a = a || J;
                        f && f.abort(a);
                        b(0, a);
                        return this
                    }
                };
            x.promise(r).complete = C.add;
            r.success = r.done;
            r.error = r.fail;
            p.url = ((a || p.url || za.href) + "").replace(Yb, "").replace(ac, za.protocol + "//");
            p.type = d.method || d.type || p.method || p.type;
            p.dataTypes = e.trim(p.dataType || "*").toLowerCase().match(ca) || [""];
            if (null == p.crossDomain) {
                a = z.createElement("a");
                try {
                    a.href = p.url, a.href = a.href, p.crossDomain =
                        Ua.protocol + "//" + Ua.host !== a.protocol + "//" + a.host
                } catch (Pa) {
                    p.crossDomain = !0
                }
            }
            p.data && p.processData && "string" !== typeof p.data && (p.data = e.param(p.data, p.traditional));
            Ea(nb, p, d, r);
            if (2 === F) return r;
            (l = e.event && p.global) && 0 === e.active++ && e.event.trigger("ajaxStart");
            p.type = p.type.toUpperCase();
            p.hasContent = !$b.test(p.type);
            var E = p.url;
            p.hasContent || (p.data && (E = p.url += (Ta.test(E) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = mb.test(E) ? E.replace(mb, "$1_=" + Sa++) : E + (Ta.test(E) ? "&" : "?") + "_=" + Sa++));
            p.ifModified && (e.lastModified[E] && r.setRequestHeader("If-Modified-Since", e.lastModified[E]), e.etag[E] && r.setRequestHeader("If-None-Match", e.etag[E]));
            (p.data && p.hasContent && !1 !== p.contentType || d.contentType) && r.setRequestHeader("Content-Type", p.contentType);
            r.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ob + "; q=0.01" : "") : p.accepts["*"]);
            for (q in p.headers) r.setRequestHeader(q, p.headers[q]);
            if (p.beforeSend && (!1 === p.beforeSend.call(y,
                    r, p) || 2 === F)) return r.abort();
            J = "abort";
            for (q in{success: 1, error: 1, complete: 1}) r[q](p[q]);
            if (f = Ea(Ma, p, d, r)) {
                r.readyState = 1;
                l && m.trigger("ajaxSend", [r, p]);
                if (2 === F) return r;
                p.async && 0 < p.timeout && (k = c.setTimeout(function () {
                    r.abort("timeout")
                }, p.timeout));
                try {
                    F = 1, f.send(u, b)
                } catch (Pa) {
                    if (2 > F) b(-1, Pa); else throw Pa;
                }
            } else b(-1, "No Transport");
            return r
        }, getJSON: function (a, c, d) {
            return e.get(a, c, d, "json")
        }, getScript: function (a, c) {
            return e.get(a, void 0, c, "script")
        }
    });
    e.each(["get", "post"], function (a, c) {
        e[c] =
            function (a, b, d, f) {
                e.isFunction(b) && (f = f || d, d = b, b = void 0);
                return e.ajax(e.extend({url: a, type: c, dataType: f, data: b, success: d}, e.isPlainObject(a) && a))
            }
    });
    e._evalUrl = function (a) {
        return e.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    };
    e.fn.extend({
        wrapAll: function (a) {
            if (e.isFunction(a)) return this.each(function (b) {
                e(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = e(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function () {
                    for (var a =
                        this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return e.isFunction(a) ? this.each(function (b) {
                e(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = e(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = e.isFunction(a);
            return this.each(function (c) {
                e(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    e.expr.filters.hidden = function (a) {
        return !e.expr.filters.visible(a)
    };
    e.expr.filters.visible = function (a) {
        return 0 < a.offsetWidth || 0 < a.offsetHeight || 0 < a.getClientRects().length
    };
    var bc = /%20/g, Ab = /\[\]$/, pb = /\r?\n/g, cc = /^(?:submit|button|image|reset|file)$/i,
        dc = /^(?:input|select|textarea|keygen)/i;
    e.param = function (a, c) {
        var b, d = [], f = function (a, b) {
            b = e.isFunction(b) ? b() : null == b ? "" : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        void 0 === c && (c = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(a) ||
            a.jquery && !e.isPlainObject(a)) e.each(a, function () {
            f(this.name, this.value)
        }); else for (b in a) Na(b, a[b], c, f);
        return d.join("&").replace(bc, "+")
    };
    e.fn.extend({
        serialize: function () {
            return e.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = e.prop(this, "elements");
                return a ? e.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !e(this).is(":disabled") && dc.test(this.nodeName) && !cc.test(a) && (this.checked || !ib.test(a))
            }).map(function (a, c) {
                a = e(this).val();
                return null == a ? null : e.isArray(a) ? e.map(a, function (a) {
                    return {name: c.name, value: a.replace(pb, "\r\n")}
                }) : {name: c.name, value: a.replace(pb, "\r\n")}
            }).get()
        }
    });
    e.ajaxSettings.xhr = function () {
        try {
            return new c.XMLHttpRequest
        } catch (b) {
        }
    };
    var ec = {0: 200, 1223: 204}, Da = e.ajaxSettings.xhr();
    M.cors = !!Da && "withCredentials" in Da;
    M.ajax = Da = !!Da;
    e.ajaxTransport(function (a) {
        var b, d;
        if (M.cors || Da && !a.crossDomain) return {
            send: function (f, e) {
                var h, g = a.xhr();
                g.open(a.type, a.url, a.async, a.username, a.password);
                if (a.xhrFields) for (h in a.xhrFields) g[h] =
                    a.xhrFields[h];
                a.mimeType && g.overrideMimeType && g.overrideMimeType(a.mimeType);
                a.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                for (h in f) g.setRequestHeader(h, f[h]);
                b = function (a) {
                    return function () {
                        b && (b = d = g.onload = g.onerror = g.onabort = g.onreadystatechange = null, "abort" === a ? g.abort() : "error" === a ? "number" !== typeof g.status ? e(0, "error") : e(g.status, g.statusText) : e(ec[g.status] || g.status, g.statusText, "text" !== (g.responseType || "text") || "string" !== typeof g.responseText ? {binary: g.response} :
                            {text: g.responseText}, g.getAllResponseHeaders()))
                    }
                };
                g.onload = b();
                d = g.onerror = b("error");
                void 0 !== g.onabort ? g.onabort = d : g.onreadystatechange = function () {
                    4 === g.readyState && c.setTimeout(function () {
                        b && d()
                    })
                };
                b = b("abort");
                try {
                    g.send(a.hasContent && a.data || null)
                } catch (ub) {
                    if (b) throw ub;
                }
            }, abort: function () {
                b && b()
            }
        }
    });
    e.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (a) {
                e.globalEval(a);
                return a
            }
        }
    });
    e.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    e.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, f) {
                    b = e("<script>").prop({charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
                        b.remove();
                        c = null;
                        a && f("error" === a.type ? 404 : 200, a.type)
                    });
                    z.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var qb = [], Va = /(=)\?(?=&|$)|\?\?/;
    e.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = qb.pop() ||
                e.expando + "_" + Sa++;
            this[a] = !0;
            return a
        }
    });
    e.ajaxPrefilter("json jsonp", function (a, d, h) {
        var b,
            f = !1 !== a.jsonp && (Va.test(a.url) ? "url" : "string" === typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(a.data) && "data");
        if (f || "jsonp" === a.dataTypes[0]) {
            var g = a.jsonpCallback = e.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback;
            f ? a[f] = a[f].replace(Va, "$1" + g) : !1 !== a.jsonp && (a.url += (Ta.test(a.url) ? "&" : "?") + a.jsonp + "=" + g);
            a.converters["script json"] = function () {
                b ||
                e.error(g + " was not called");
                return b[0]
            };
            a.dataTypes[0] = "json";
            var k = c[g];
            c[g] = function () {
                b = arguments
            };
            h.always(function () {
                void 0 === k ? e(c).removeProp(g) : c[g] = k;
                a[g] && (a.jsonpCallback = d.jsonpCallback, qb.push(g));
                b && e.isFunction(k) && k(b[0]);
                b = k = void 0
            });
            return "script"
        }
    });
    e.parseHTML = function (a, c, d) {
        if (!a || "string" !== typeof a) return null;
        "boolean" === typeof c && (d = c, c = !1);
        c = c || z;
        var b = gb.exec(a);
        d = !d && [];
        if (b) return [c.createElement(b[1])];
        b = D([a], c, d);
        d && d.length && e(d).remove();
        return e.merge([], b.childNodes)
    };
    var rb = e.fn.load;
    e.fn.load = function (a, c, d) {
        if ("string" !== typeof a && rb) return rb.apply(this, arguments);
        var b, f, h = this, g = a.indexOf(" ");
        if (-1 < g) {
            var k = e.trim(a.slice(g));
            a = a.slice(0, g)
        }
        e.isFunction(c) ? (d = c, c = void 0) : c && "object" === typeof c && (b = "POST");
        0 < h.length && e.ajax({url: a, type: b || "GET", dataType: "html", data: c}).done(function (a) {
            f = arguments;
            h.html(k ? e("<div>").append(e.parseHTML(a)).find(k) : a)
        }).always(d && function (a, b) {
            h.each(function () {
                d.apply(this, f || [a.responseText, b, a])
            })
        });
        return this
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
        function (a, c) {
            e.fn[c] = function (a) {
                return this.on(c, a)
            }
        });
    e.expr.filters.animated = function (a) {
        return e.grep(e.timers, function (b) {
            return a === b.elem
        }).length
    };
    e.offset = {
        setOffset: function (a, c, d) {
            var b = e.css(a, "position"), f = e(a), h = {};
            "static" === b && (a.style.position = "relative");
            var g = f.offset();
            var k = e.css(a, "top");
            var l = e.css(a, "left");
            ("absolute" === b || "fixed" === b) && -1 < (k + l).indexOf("auto") ? (l = f.position(), k = l.top, l = l.left) : (k = parseFloat(k) || 0, l = parseFloat(l) || 0);
            e.isFunction(c) && (c = c.call(a, d, e.extend({},
                g)));
            null != c.top && (h.top = c.top - g.top + k);
            null != c.left && (h.left = c.left - g.left + l);
            "using" in c ? c.using.call(a, h) : f.css(h)
        }
    };
    e.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                e.offset.setOffset(this, a, b)
            });
            var b = this[0];
            var c = {top: 0, left: 0}, d = b && b.ownerDocument;
            if (d) {
                var h = d.documentElement;
                if (!e.contains(h, b)) return c;
                c = b.getBoundingClientRect();
                b = db(d);
                return {top: c.top + b.pageYOffset - h.clientTop, left: c.left + b.pageXOffset - h.clientLeft}
            }
        }, position: function () {
            if (this[0]) {
                var a =
                    this[0], c = {top: 0, left: 0};
                if ("fixed" === e.css(a, "position")) var d = a.getBoundingClientRect(); else {
                    var h = this.offsetParent();
                    d = this.offset();
                    e.nodeName(h[0], "html") || (c = h.offset());
                    c.top += e.css(h[0], "borderTopWidth", !0);
                    c.left += e.css(h[0], "borderLeftWidth", !0)
                }
                return {
                    top: d.top - c.top - e.css(a, "marginTop", !0),
                    left: d.left - c.left - e.css(a, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent; a && "static" === e.css(a, "position");) a = a.offsetParent;
                return a || va
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, c) {
        var b = "pageYOffset" === c;
        e.fn[a] = function (d) {
            return la(this, function (a, d, e) {
                var f = db(a);
                if (void 0 === e) return f ? f[c] : a[d];
                f ? f.scrollTo(b ? f.pageXOffset : e, b ? e : f.pageYOffset) : a[d] = e
            }, a, d, arguments.length)
        }
    });
    e.each(["top", "left"], function (a, c) {
        e.cssHooks[c] = W(M.pixelPosition, function (a, b) {
            if (b) return b = H(a, c), La.test(b) ? e(a).position()[c] + "px" : b
        })
    });
    e.each({Height: "height", Width: "width"}, function (a, c) {
        e.each({padding: "inner" + a, content: c, "": "outer" + a}, function (b, d) {
            e.fn[d] =
                function (d, f) {
                    var h = arguments.length && (b || "boolean" !== typeof d),
                        g = b || (!0 === d || !0 === f ? "margin" : "border");
                    return la(this, function (b, c, d) {
                        return e.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === d ? e.css(b, c, g) : e.style(b, c, d, g)
                    }, c, h ? d : void 0, h, null)
                }
        })
    });
    e.fn.extend({
        bind: function (a, c, d) {
            return this.on(a, null, c, d)
        }, unbind: function (a, c) {
            return this.off(a, null, c)
        }, delegate: function (a,
                               c, d, e) {
            return this.on(c, a, d, e)
        }, undelegate: function (a, c, d) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(c, a || "**", d)
        }, size: function () {
            return this.length
        }
    });
    e.fn.andSelf = e.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function () {
        return e
    });
    var fc = c.jQuery, gc = c.$;
    e.noConflict = function (a) {
        c.$ === e && (c.$ = gc);
        a && c.jQuery === e && (c.jQuery = fc);
        return e
    };
    l || (c.jQuery = c.$ = e);
    return e
});
if ("undefined" == typeof jQuery) throw Error("Bootstrap's JavaScript requires jQuery");
+function (c) {
    c = c.fn.jquery.split(" ")[0].split(".");
    if (2 > c[0] && 9 > c[1] || 1 == c[0] && 9 == c[1] && 1 > c[2] || 3 < c[0]) throw Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery);
+function (c) {
    function l() {
        var c = document.createElement("bootstrap"), a = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, d;
        for (d in a) if (void 0 !== c.style[d]) return {end: a[d]};
        return !1
    }

    c.fn.emulateTransitionEnd = function (l) {
        var a = !1, d = this;
        c(this).one("bsTransitionEnd", function () {
            a = !0
        });
        return setTimeout(function () {
            a || c(d).trigger(c.support.transition.end)
        }, l), this
    };
    c(function () {
        c.support.transition = l();
        c.support.transition &&
        (c.event.special.bsTransitionEnd = {
            bindType: c.support.transition.end,
            delegateType: c.support.transition.end,
            handle: function (l) {
                if (c(l.target).is(this)) return l.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery);
+function (c) {
    var l = function (a) {
        c(a).on("click", '[data-dismiss="alert"]', this.close)
    };
    l.VERSION = "3.3.7";
    l.TRANSITION_DURATION = 150;
    l.prototype.close = function (a) {
        function d() {
            p.detach().trigger("closed.bs.alert").remove()
        }

        var g = c(this), k = g.attr("data-target");
        k || (k = g.attr("href"), k = k && k.replace(/.*(?=#[^\s]*$)/, ""));
        var p = c("#" === k ? [] : k);
        a && a.preventDefault();
        p.length || (p = g.closest(".alert"));
        p.trigger(a = c.Event("close.bs.alert"));
        a.isDefaultPrevented() || (p.removeClass("in"), c.support.transition && p.hasClass("fade") ?
            p.one("bsTransitionEnd", d).emulateTransitionEnd(l.TRANSITION_DURATION) : d())
    };
    var m = c.fn.alert;
    c.fn.alert = function (a) {
        return this.each(function () {
            var d = c(this), g = d.data("bs.alert");
            g || d.data("bs.alert", g = new l(this));
            "string" == typeof a && g[a].call(d)
        })
    };
    c.fn.alert.Constructor = l;
    c.fn.alert.noConflict = function () {
        return c.fn.alert = m, this
    };
    c(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', l.prototype.close)
}(jQuery);
+function (c) {
    function l(a) {
        return this.each(function () {
            var d = c(this), k = d.data("bs.button"), l = "object" == typeof a && a;
            k || d.data("bs.button", k = new m(this, l));
            "toggle" == a ? k.toggle() : a && k.setState(a)
        })
    }

    var m = function (a, g) {
        this.$element = c(a);
        this.options = c.extend({}, m.DEFAULTS, g);
        this.isLoading = !1
    };
    m.VERSION = "3.3.7";
    m.DEFAULTS = {loadingText: "loading..."};
    m.prototype.setState = function (a) {
        var d = this.$element, k = d.is("input") ? "val" : "html", l = d.data();
        a += "Text";
        null == l.resetText && d.data("resetText", d[k]());
        setTimeout(c.proxy(function () {
            d[k](null ==
            l[a] ? this.options[a] : l[a]);
            "loadingText" == a ? (this.isLoading = !0, d.addClass("disabled").attr("disabled", "disabled").prop("disabled", !0)) : this.isLoading && (this.isLoading = !1, d.removeClass("disabled").removeAttr("disabled").prop("disabled", !1))
        }, this), 0)
    };
    m.prototype.toggle = function () {
        var a = !0, c = this.$element.closest('[data-toggle="buttons"]');
        if (c.length) {
            var k = this.$element.find("input");
            "radio" == k.prop("type") ? (k.prop("checked") && (a = !1), c.find(".active").removeClass("active"), this.$element.addClass("active")) :
                "checkbox" == k.prop("type") && (k.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active"));
            k.prop("checked", this.$element.hasClass("active"));
            a && k.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var a = c.fn.button;
    c.fn.button = l;
    c.fn.button.Constructor = m;
    c.fn.button.noConflict = function () {
        return c.fn.button = a, this
    };
    c(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (a) {
        var d =
            c(a.target).closest(".btn");
        l.call(d, "toggle");
        c(a.target).is('input[type="radio"], input[type="checkbox"]') || (a.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (a) {
        c(a.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(a.type))
    })
}(jQuery);

+function (c) {
    function l(a) {
        var d;
        a = a.attr("data-target") || (d = a.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "");
        return c(a)
    }

    function m(d) {
        return this.each(function () {
            var g = c(this), l = g.data("bs.collapse"),
                m = c.extend({}, a.DEFAULTS, g.data(), "object" == typeof d && d);
            !l && m.toggle && /show|hide/.test(d) && (m.toggle = !1);
            l || g.data("bs.collapse", l = new a(this, m));
            "string" == typeof d && l[d]()
        })
    }

    var a = function (d, k) {
        this.$element = c(d);
        this.options = c.extend({}, a.DEFAULTS, k);
        this.$trigger = c('[data-toggle="collapse"][href="#' +
            d.id + '"],[data-toggle="collapse"][data-target="#' + d.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    };
    a.VERSION = "3.3.7";
    a.TRANSITION_DURATION = 350;
    a.DEFAULTS = {toggle: !0};
    a.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    };
    a.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var d, k = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(k && k.length && (d = k.data("bs.collapse"), d && d.transitioning))) {
                var l = c.Event("show.bs.collapse");
                if (this.$element.trigger(l), !l.isDefaultPrevented()) {
                    k && k.length && (m.call(k, "hide"), d || k.data("bs.collapse", null));
                    var C = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[C](0).attr("aria-expanded", !0);
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0);
                    this.transitioning = 1;
                    d = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[C]("");
                        this.transitioning =
                            0;
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!c.support.transition) return d.call(this);
                    k = c.camelCase(["scroll", C].join("-"));
                    this.$element.one("bsTransitionEnd", c.proxy(d, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[C](this.$element[0][k])
                }
            }
        }
    };
    a.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var d = c.Event("hide.bs.collapse");
            if (this.$element.trigger(d), !d.isDefaultPrevented()) {
                d = this.dimension();
                this.$element[d](this.$element[d]())[0].offsetHeight;
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",
                    !1);
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1);
                this.transitioning = 1;
                var k = function () {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return c.support.transition ? void this.$element[d](0).one("bsTransitionEnd", c.proxy(k, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : k.call(this)
            }
        }
    };
    a.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    a.prototype.getParent = function () {
        return c(this.options.parent).find('[data-toggle="collapse"][data-parent="' +
            this.options.parent + '"]').each(c.proxy(function (a, d) {
            a = c(d);
            this.addAriaAndCollapsedClass(l(a), a)
        }, this)).end()
    };
    a.prototype.addAriaAndCollapsedClass = function (a, c) {
        var d = a.hasClass("in");
        a.attr("aria-expanded", d);
        c.toggleClass("collapsed", !d).attr("aria-expanded", d)
    };
    var d = c.fn.collapse;
    c.fn.collapse = m;
    c.fn.collapse.Constructor = a;
    c.fn.collapse.noConflict = function () {
        return c.fn.collapse = d, this
    };
    c(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (a) {
        var d = c(this);
        d.attr("data-target") ||
        a.preventDefault();
        a = l(d);
        d = a.data("bs.collapse") ? "toggle" : d.data();
        m.call(a, d)
    })
}(jQuery);
+function (c) {
    function l(a) {
        var d = a.attr("data-target");
        d || (d = a.attr("href"), d = d && /#[A-Za-z]/.test(d) && d.replace(/.*(?=#[^\s]*$)/, ""));
        return (d = d && c(d)) && d.length ? d : a.parent()
    }

    function m(g) {
        g && 3 === g.which || (c(a).remove(), c(d).each(function () {
            var a = c(this), d = l(a), k = {relatedTarget: this};
            d.hasClass("open") && (g && "click" == g.type && /input|textarea/i.test(g.target.tagName) && c.contains(d[0], g.target) || (d.trigger(g = c.Event("hide.bs.dropdown", k)), g.isDefaultPrevented() || (a.attr("aria-expanded", "false"), d.removeClass("open").trigger(c.Event("hidden.bs.dropdown",
                k)))))
        }))
    }

    var a = ".dropdown-backdrop", d = '[data-toggle="dropdown"]', g = function (a) {
        c(a).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.7";
    g.prototype.toggle = function (a) {
        var d = c(this);
        if (!d.is(".disabled, :disabled")) {
            var g = l(d), k = g.hasClass("open");
            if (m(), !k) {
                "ontouchstart" in document.documentElement && !g.closest(".navbar-nav").length && c(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(c(this)).on("click", m);
                k = {relatedTarget: this};
                if (g.trigger(a = c.Event("show.bs.dropdown",
                        k)), a.isDefaultPrevented()) return;
                d.trigger("focus").attr("aria-expanded", "true");
                g.toggleClass("open").trigger(c.Event("shown.bs.dropdown", k))
            }
            return !1
        }
    };
    g.prototype.keydown = function (a) {
        if (/(38|40|27|32)/.test(a.which) && !/input|textarea/i.test(a.target.tagName)) {
            var g = c(this);
            if (a.preventDefault(), a.stopPropagation(), !g.is(".disabled, :disabled")) {
                var k = l(g), p = k.hasClass("open");
                if (!p && 27 != a.which || p && 27 == a.which) return 27 == a.which && k.find(d).trigger("focus"), g.trigger("click");
                g = k.find(".dropdown-menu li:not(.disabled):visible a");
                g.length && (k = g.index(a.target), 38 == a.which && 0 < k && k--, 40 == a.which && k < g.length - 1 && k++, ~k || (k = 0), g.eq(k).trigger("focus"))
            }
        }
    };
    var k = c.fn.dropdown;
    c.fn.dropdown = function (a) {
        return this.each(function () {
            var d = c(this), k = d.data("bs.dropdown");
            k || d.data("bs.dropdown", k = new g(this));
            "string" == typeof a && k[a].call(d)
        })
    };
    c.fn.dropdown.Constructor = g;
    c.fn.dropdown.noConflict = function () {
        return c.fn.dropdown = k, this
    };
    c(document).on("click.bs.dropdown.data-api", m).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api",
        d, g.prototype.toggle).on("keydown.bs.dropdown.data-api", d, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery);
+function (c) {
    function l(a, g) {
        return this.each(function () {
            var d = c(this), l = d.data("bs.modal"), C = c.extend({}, m.DEFAULTS, d.data(), "object" == typeof a && a);
            l || d.data("bs.modal", l = new m(this, C));
            "string" == typeof a ? l[a](g) : C.show && l.show(g)
        })
    }

    var m = function (a, g) {
        this.options = g;
        this.$body = c(document.body);
        this.$element = c(a);
        this.$dialog = this.$element.find(".modal-dialog");
        this.originalBodyPad = this.isShown = this.$backdrop = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote,
            c.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
    };
    m.VERSION = "3.3.7";
    m.TRANSITION_DURATION = 300;
    m.BACKDROP_TRANSITION_DURATION = 150;
    m.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0};
    m.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    };
    m.prototype.show = function (a) {
        var d = this, k = c.Event("show.bs.modal", {relatedTarget: a});
        this.$element.trigger(k);
        this.isShown || k.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"),
            this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', c.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (a) {
                c(a.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var g = c.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body);
            d.$element.show().scrollTop(0);
            d.adjustDialog();
            g && d.$element[0].offsetWidth;
            d.$element.addClass("in");
            d.enforceFocus();
            var k = c.Event("shown.bs.modal", {relatedTarget: a});
            g ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(k)
            }).emulateTransitionEnd(m.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(k)
        }))
    };
    m.prototype.hide = function (a) {
        a && a.preventDefault();
        a = c.Event("hide.bs.modal");
        this.$element.trigger(a);
        this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), c(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"), c.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", c.proxy(this.hideModal, this)).emulateTransitionEnd(m.TRANSITION_DURATION) : this.hideModal())
    };
    m.prototype.enforceFocus = function () {
        c(document).off("focusin.bs.modal").on("focusin.bs.modal", c.proxy(function (a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    };
    m.prototype.escape = function () {
        this.isShown &&
        this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", c.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    m.prototype.resize = function () {
        this.isShown ? c(window).on("resize.bs.modal", c.proxy(this.handleUpdate, this)) : c(window).off("resize.bs.modal")
    };
    m.prototype.hideModal = function () {
        var a = this;
        this.$element.hide();
        this.backdrop(function () {
            a.$body.removeClass("modal-open");
            a.resetAdjustments();
            a.resetScrollbar();
            a.$element.trigger("hidden.bs.modal")
        })
    };
    m.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    m.prototype.backdrop = function (a) {
        var d = this, k = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var l = c.support.transition && k;
            if (this.$backdrop = c(document.createElement("div")).addClass("modal-backdrop " + k).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", c.proxy(function (a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target ===
                        a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), l && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), a) l ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(m.BACKDROP_TRANSITION_DURATION) : a()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), k = function () {
            d.removeBackdrop();
            a && a()
        }, c.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", k).emulateTransitionEnd(m.BACKDROP_TRANSITION_DURATION) :
            k()) : a && a()
    };
    m.prototype.handleUpdate = function () {
        this.adjustDialog()
    };
    m.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    };
    m.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    };
    m.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        a || (a = document.documentElement.getBoundingClientRect(),
            a = a.right - Math.abs(a.left));
        this.bodyIsOverflowing = document.body.clientWidth < a;
        this.scrollbarWidth = this.measureScrollbar()
    };
    m.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    };
    m.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    m.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure";
        this.$body.append(a);
        var c = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), c
    };
    var a = c.fn.modal;
    c.fn.modal = l;
    c.fn.modal.Constructor = m;
    c.fn.modal.noConflict = function () {
        return c.fn.modal = a, this
    };
    c(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (a) {
        var d = c(this), k = d.attr("href"), p = c(d.attr("data-target") || k && k.replace(/.*(?=#[^\s]+$)/, ""));
        k = p.data("bs.modal") ? "toggle" : c.extend({remote: !/#/.test(k) && k}, p.data(), d.data());
        d.is("a") &&
        a.preventDefault();
        p.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || p.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        });
        l.call(p, k, this)
    })
}(jQuery);



+function (c) {
    function l(a) {
        return this.each(function () {
            var d = c(this), g = d.data("bs.tab");
            g || d.data("bs.tab", g = new m(this));
            "string" == typeof a && g[a]()
        })
    }

    var m = function (a) {
        this.element = c(a)
    };
    m.VERSION = "3.3.7";
    m.TRANSITION_DURATION = 150;
    m.prototype.show = function () {
        var a = this.element, d = a.closest("ul:not(.dropdown-menu)"), l = a.data("target");
        if (l || (l = a.attr("href"), l = l && l.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) {
            var m = d.find(".active:last a"), u = c.Event("hide.bs.tab", {relatedTarget: a[0]}),
                v = c.Event("show.bs.tab", {relatedTarget: m[0]});
            (m.trigger(u), a.trigger(v), v.isDefaultPrevented() || u.isDefaultPrevented()) || (l = c(l), this.activate(a.closest("li"), d), this.activate(l, l.parent(), function () {
                m.trigger({type: "hidden.bs.tab", relatedTarget: a[0]});
                a.trigger({type: "shown.bs.tab", relatedTarget: m[0]})
            }))
        }
    };
    m.prototype.activate = function (a, d, l) {
        function g() {
            k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            p ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade");
            a.parent(".dropdown-menu").length && a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            l && l()
        }

        var k = d.find("> .active"),
            p = l && c.support.transition && (k.length && k.hasClass("fade") || !!d.find("> .fade").length);
        k.length && p ? k.one("bsTransitionEnd", g).emulateTransitionEnd(m.TRANSITION_DURATION) : g();
        k.removeClass("in")
    };
    var a =
        c.fn.tab;
    c.fn.tab = l;
    c.fn.tab.Constructor = m;
    c.fn.tab.noConflict = function () {
        return c.fn.tab = a, this
    };
    var d = function (a) {
        a.preventDefault();
        l.call(c(this), "show")
    };
    c(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', d).on("click.bs.tab.data-api", '[data-toggle="pill"]', d)
}(jQuery);
+function (c) {
    function l(a) {
        return this.each(function () {
            var d = c(this), l = d.data("bs.affix"), p = "object" == typeof a && a;
            l || d.data("bs.affix", l = new m(this, p));
            "string" == typeof a && l[a]()
        })
    }

    var m = function (a, g) {
        this.options = c.extend({}, m.DEFAULTS, g);
        this.$target = c(this.options.target).on("scroll.bs.affix.data-api", c.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", c.proxy(this.checkPositionWithEventLoop, this));
        this.$element = c(a);
        this.pinnedOffset = this.unpin = this.affixed = null;
        this.checkPosition()
    };
    m.VERSION = "3.3.7";
    m.RESET = "affix affix-top affix-bottom";
    m.DEFAULTS = {offset: 0, target: window};
    m.prototype.getState = function (a, c, l, m) {
        var d = this.$target.scrollTop(), g = this.$element.offset(), k = this.$target.height();
        if (null != l && "top" == this.affixed) return d < l && "top";
        if ("bottom" == this.affixed) return null != l ? !(d + this.unpin <= g.top) && "bottom" : !(d + k <= a - m) && "bottom";
        var p = null == this.affixed;
        g = p ? d : g.top;
        return null != l && d <= l ? "top" : null != m && g + (p ? k : c) >= a - m && "bottom"
    };
    m.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(m.RESET).addClass("affix");
        var a = this.$target.scrollTop();
        return this.pinnedOffset = this.$element.offset().top - a
    };
    m.prototype.checkPositionWithEventLoop = function () {
        setTimeout(c.proxy(this.checkPosition, this), 1)
    };
    m.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var a = this.$element.height(), g = this.options.offset, l = g.top, p = g.bottom,
                C = Math.max(c(document).height(), c(document.body).height());
            "object" != typeof g && (p = l = g);
            "function" == typeof l && (l = g.top(this.$element));
            "function" == typeof p && (p = g.bottom(this.$element));
            g = this.getState(C, a, l, p);
            if (this.affixed != g) {
                null != this.unpin && this.$element.css("top", "");
                l = "affix" + (g ? "-" + g : "");
                var u = c.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = g;
                this.unpin = "bottom" == g ? this.getPinnedOffset() : null;
                this.$element.removeClass(m.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == g && this.$element.offset({top: C - a - p})
        }
    };
    var a = c.fn.affix;
    c.fn.affix = l;
    c.fn.affix.Constructor =
        m;
    c.fn.affix.noConflict = function () {
        return c.fn.affix = a, this
    };
    c(window).on("load", function () {
        c('[data-spy="affix"]').each(function () {
            var a = c(this), g = a.data();
            g.offset = g.offset || {};
            null != g.offsetBottom && (g.offset.bottom = g.offsetBottom);
            null != g.offsetTop && (g.offset.top = g.offsetTop);
            l.call(a, g)
        })
    })
}(jQuery);
"use strict";
!function (c) {
    c.fn.circliful = function (l, m) {
        var a = c.extend({
            foregroundColor: "#3498DB",
            backgroundColor: "#ccc",
            pointColor: "none",
            fillColor: "none",
            foregroundBorderWidth: 15,
            backgroundBorderWidth: 15,
            pointSize: 28.5,
            fontColor: "#aaa",
            percent: 75,
            animation: 1,
            animationStep: 5,
            icon: "none",
            iconSize: "30",
            iconColor: "#ccc",
            iconPosition: "top",
            target: 0,
            start: 0,
            showPercent: 1,
            percentageTextSize: 22,
            textAdditionalCss: "",
            targetPercent: 0,
            targetTextSize: 17,
            targetColor: "#2980B9",
            text: null,
            textStyle: null,
            textColor: "#666",
            multiPercentage: 0,
            percentages: null,
            textBelow: !1,
            noPercentageSign: !1,
            replacePercentageByText: null,
            halfCircle: !1,
            animateInView: !1,
            decimals: 0,
            alwaysDecimals: !1
        }, l);
        return this.each(function () {
            function d() {
                var c = window.setInterval(function () {
                    J >= R ? (window.clearInterval(c), E = 1, "function" == typeof m && m.call(this)) : (J += L, G += I);
                    J / 3.6 >= C && 1 == E && (J = 3.6 * C);
                    G > a.target && 1 == E && (G = a.target);
                    null == a.replacePercentageByText && (B = a.halfCircle ? parseFloat(100 * J / 360 * 2) : parseFloat(100 * J / 360), B = B.toFixed(a.decimals), !a.alwaysDecimals && (0 ==
                        C || 1 < C && 1 != E) && (B = parseInt(B)));
                    x.attr("stroke-dasharray", J + ", 20000");
                    1 == a.showPercent ? q.find(".number").text(B) : (q.find(".number").text(G), q.find(".percent").text(""))
                }.bind(x), F)
            }

            var g = c(this);
            (function (a, d) {
                c.each(a, function (c, h) {
                    c.toLowerCase() in d && (a[c] = d[c.toLowerCase()])
                })
            })(a, g.data());
            var l, p, C = a.percent, u = 83, v = 100, r = 100, D = 100, h = a.backgroundBorderWidth;
            (a.halfCircle ? "left" == a.iconPosition ? (v = 80, u = 100, D = 117, r = 100) : a.halfCircle && (u = 80, r = 100) : "bottom" == a.iconPosition ? (u = 124, r = 95) : "left" ==
            a.iconPosition ? (v = 80, u = 110, D = 117) : "middle" == a.iconPosition ? 1 == a.multiPercentage ? "object" == typeof a.percentages ? h = 30 : (u = 110, l = '<g stroke="' + ("none" != a.backgroundColor ? a.backgroundColor : "#ccc") + '" ><line x1="133" y1="50" x2="140" y2="40" stroke-width="2"  /></g>', l += '<g stroke="' + ("none" != a.backgroundColor ? a.backgroundColor : "#ccc") + '" ><line x1="140" y1="40" x2="200" y2="40" stroke-width="2"  /></g>', D = 228, r = 47) : (u = 110, l = '<g stroke="' + ("none" != a.backgroundColor ? a.backgroundColor : "#ccc") + '" ><line x1="133" y1="50" x2="140" y2="40" stroke-width="2"  /></g>',
                l += '<g stroke="' + ("none" != a.backgroundColor ? a.backgroundColor : "#ccc") + '" ><line x1="140" y1="40" x2="200" y2="40" stroke-width="2"  /></g>', D = 170, r = 35) : "right" == a.iconPosition && (v = 120, u = 110, D = 80), 0 < a.targetPercent && (r = 95, l = '<g stroke="' + ("none" != a.backgroundColor ? a.backgroundColor : "#ccc") + '" ><line x1="75" y1="101" x2="125" y2="101" stroke-width="1"  /></g>', l += '<text text-anchor="middle" x="' + D + '" y="120" style="font-size: ' + a.targetTextSize + 'px;" fill="' + a.targetColor + '">' + a.targetPercent + (a.noPercentageSign &&
            null == a.replacePercentageByText ? "" : "%") + "</text>", l += '<circle cx="100" cy="100" r="69" fill="none" stroke="' + a.backgroundColor + '" stroke-width="3" stroke-dasharray="450" transform="rotate(-90,100,100)" />', l += '<circle cx="100" cy="100" r="69" fill="none" stroke="' + a.targetColor + '" stroke-width="3" stroke-dasharray="' + 3.6 * a.targetPercent + ', 20000" transform="rotate(-90,100,100)" />'), null != a.text && (a.halfCircle ? a.textBelow ? l += '<text text-anchor="middle" x="100" y="120" style="' + a.textStyle + '" fill="' +
                a.textColor + '">' + a.text + "</text>" : 0 == a.multiPercentage ? l += '<text text-anchor="middle" x="100" y="115" style="' + a.textStyle + '" fill="' + a.textColor + '">' + a.text + "</text>" : 1 == a.multiPercentage && (l += '<text text-anchor="middle" x="228" y="65" style="' + a.textStyle + '" fill="' + a.textColor + '">' + a.text + "</text>") : a.textBelow ? l += '<text text-anchor="middle" x="100" y="190" style="' + a.textStyle + '" fill="' + a.textColor + '">' + a.text + "</text>" : 0 == a.multiPercentage ? l += '<text text-anchor="middle" x="100" y="115" style="' +
                a.textStyle + '" fill="' + a.textColor + '">' + a.text + "</text>" : 1 == a.multiPercentage && (l += '<text text-anchor="middle" x="228" y="65" style="' + a.textStyle + '" fill="' + a.textColor + '">' + a.text + "</text>")), "none" != a.icon && (p = '<text text-anchor="middle" x="' + v + '" y="' + u + '" class="icon" style="font-size: ' + a.iconSize + 'px" fill="' + a.iconColor + '">&#x' + a.icon + "</text>"), a.halfCircle) ? g.addClass("svg-container").append(c('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186" class="circliful">' +
                l + '<clipPath id="cut-off-bottom"> <rect x="100" y="0" width="100" height="200" /> </clipPath><circle cx="100" cy="100" r="57" class="border" fill="' + a.fillColor + '" stroke="' + a.backgroundColor + '" stroke-width="' + h + '" stroke-dasharray="360" clip-path="url(#cut-off-bottom)" transform="rotate(-90,100,100)" /><circle class="circle" cx="100" cy="100" r="57" class="border" fill="none" stroke="' + a.foregroundColor + '" stroke-width="' + a.foregroundBorderWidth + '" stroke-dasharray="0,20000" transform="rotate(-180,100,100)" /><circle cx="100" cy="100" r="' +
                a.pointSize + '" fill="' + a.pointColor + '" clip-path="url(#cut-off-bottom)" transform="rotate(-90,100,100)" />' + p + '<text class="timer" text-anchor="middle" x="' + D + '" y="' + r + '" style="font-size: ' + a.percentageTextSize + "px; undefined;" + a.textAdditionalCss + '" fill="' + a.fontColor + '"><tspan class="number">' + (null == a.replacePercentageByText ? 0 : a.replacePercentageByText) + '</tspan><tspan class="percent">' + (a.noPercentageSign || null != a.replacePercentageByText ? "" : "%") + "</tspan></text>")) : g.addClass("svg-container").append(c('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186" class="circliful">' +
                l + '<circle cx="100" cy="100" r="57" class="border" fill="' + a.fillColor + '" stroke="' + a.backgroundColor + '" stroke-width="' + h + '" stroke-dasharray="360" transform="rotate(-90,100,100)" /><circle class="circle" cx="100" cy="100" r="57" class="border" fill="none" stroke="' + a.foregroundColor + '" stroke-width="' + a.foregroundBorderWidth + '" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" /><circle cx="100" cy="100" r="' + a.pointSize + '" fill="' + a.pointColor + '" />' + p + '<text class="timer" text-anchor="middle" x="' +
                D + '" y="' + r + '" style="font-size: ' + a.percentageTextSize + "px; undefined;" + a.textAdditionalCss + '" fill="' + a.fontColor + '"><tspan class="number">' + (null == a.replacePercentageByText ? 0 : a.replacePercentageByText) + '</tspan><tspan class="percent">' + (a.noPercentageSign || null != a.replacePercentageByText ? "" : "%") + "</tspan></text>"));
            var x = g.find(".circle"), q = g.find(".timer"), F = 30, J = 0, L = a.animationStep, E = 0, G = 0, I = 0,
                B = C, R = 3.6 * C;
            a.halfCircle && (R = 3.6 * C / 2);
            null != a.replacePercentageByText && (B = a.replacePercentageByText);
            0 < a.start && 0 < a.target && (C = a.start / (a.target / 100), I = a.target / 100);
            1 == a.animation ? a.animateInView ? c(window).scroll(function () {
                if (!x.hasClass("start")) {
                    var a = -1 != navigator.userAgent.toLowerCase().indexOf("webkit") ? "body" : "html";
                    a = c(a).scrollTop();
                    var h = a + c(window).height(), g = Math.round(x.offset().top), l = g + x.height();
                    g < h && l > a && (x.addClass("start"), setTimeout(d, 250))
                }
            }) : d() : (x.attr("stroke-dasharray", R + ", 20000"), 1 == a.showPercent ? q.find(".number").text(B) : (q.find(".number").text(a.target), q.find(".percent").text("")))
        })
    }
}(jQuery);
(function (c) {
    "function" == typeof define && define.amd ? define(["jquery"], c) : "object" == typeof exports ? module.exports = c(require("jquery")) : c(jQuery)
})(function (c) {
    function l() {
        var a, d, g = {height: C.innerHeight, width: C.innerWidth};
        return g.height || (a = p.compatMode, !a && c.support.boxModel || (d = "CSS1Compat" === a ? u : p.body, g = {
            height: d.clientHeight,
            width: d.clientWidth
        })), g
    }

    function m() {
        if (k.length) {
            var g = 0, m = c.map(k, function (a) {
                var c = a.data.selector;
                a = a.$element;
                return c ? a.find(c) : a
            });
            a = a || l();
            for (d = d || {
                top: C.pageYOffset ||
                u.scrollTop || p.body.scrollTop, left: C.pageXOffset || u.scrollLeft || p.body.scrollLeft
            }; g < k.length; g++) if (c.contains(u, m[g][0])) {
                var D = c(m[g]), h = D[0].offsetHeight, x = D[0].offsetWidth, q = D.offset(), F = D.data("inview");
                if (!d || !a) break;
                q.top + h > d.top && q.top < d.top + a.height && q.left + x > d.left && q.left < d.left + a.width ? F || D.data("inview", !0).trigger("inview", [!0]) : F && D.data("inview", !1).trigger("inview", [!1])
            }
        }
    }

    var a, d, g, k = [], p = document, C = window, u = p.documentElement;
    c.event.special.inview = {
        add: function (a) {
            k.push({
                data: a,
                $element: c(this), element: this
            });
            !g && k.length && (g = setInterval(m, 250))
        }, remove: function (a) {
            for (var c = 0; c < k.length; c++) {
                var d = k[c];
                if (d.element === this && d.data.guid === a.guid) {
                    k.splice(c, 1);
                    break
                }
            }
            k.length || (clearInterval(g), g = null)
        }
    };
    c(C).on("scroll resize scrollstop", function () {
        a = d = null
    });
    !u.addEventListener && u.attachEvent && u.attachEvent("onfocusin", function () {
        d = null
    })
});



$(".select").on("click", ".placeholder", function () {
    var c = $(this).closest(".select");
    c.hasClass("is-open") ? c.removeClass("is-open") : (c.addClass("is-open"), $(".select.is-open").not(c).removeClass("is-open"))
}).on("click", "ul>li", function () {
    var c = $(this).closest(".select");
    c.removeClass("is-open").find(".placeholder").text($(this).text());
    c.find("input[type=hidden]").attr("value", $(this).attr("data-value"))
});
$(document).mouseup(function (c) {
    var l = $(".select.is-open");
    0 === l.has(c.target).length && l.removeClass("is-open")
});
$(document).ready(function () {
    $(".promo").hasClass("active") && ($(".promo").css({
        left: "20px",
        top: "88%"
    }), $("body").addClass("without-discount"));
    var c = /.*slider-cnt-([0-9]*).*$/.exec($(".reviews-slider").attr("class")), l = c ? c[1] : 3;
    c = 2 == l ? 570 : 370;
    $(".menu-btn").click(function () {
        minimenu = !0;
        $(this).addClass("active");
        $(this).children(".menu-text").text("Back");
        $(".navbar").css("z-index", "999");
        $(".menu.collapse").hasClass("in") && ($(this).removeClass("active"), $(this).children(".menu-text").text("Menu"),
            $(".navbar").css("z-index", "99"))
    });
    $(".close-menu").click(function () {
        event.preventDefault();
        $(".menu-btn").removeClass("active", function () {
            $(".menu-btn").children(".menu-text").text("Menu");
            $(".navbar").css("z-index", "99")
        })
    });
    $(".navbar-collapse .nav a, .navbar-collapse .account").not(".dropdown-toggle").on("click", function () {
        $(".navbar-collapse").hasClass("in") && ($(".navbar-collapse").collapse("hide"), $(".menu-btn").removeClass("active", function () {
            $(".menu-btn").children(".menu-text").text("Menu");
            $(".navbar").css("z-index", "99")
        }))
    });
    $(".btn-scroll").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = $(this.hash);
            if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html, body").animate({scrollTop: a.offset().top}, 1E3), !1
        }
    });
    $(document).on("click", function () {
        $(".navbar-collapse").hasClass("in") && ($(".navbar-collapse").collapse("hide"), $(".menu-btn").removeClass("active"), $(".menu-btn").children(".menu-text").text("Menu"),
            $(".navbar").css("z-index", "99"))
    });


    $(".promo-full .close-btn").click(function () {
        var a = new Date;
        a.setTime(a.getTime() + 31536E6);
        document.cookie = "promo_bottom_block_closed=1; expires=" + a.toUTCString();
        $(".promo-full").removeClass("active");
        $(".promo").addClass("active");
        $(".promo").animate({left: "20px", top: "88%"}, 500);
        $("body").addClass("without-discount");
        event.preventDefault()
    });
    $(".promo").click(function () {
        document.cookie =
            "promo_bottom_block_closed=0; expires=" + (new Date).toUTCString();
        $(".promo").animate({left: "84%", top: "20px"}, 500, function () {
            $(".promo").removeClass("active");
            $(".promo-full").addClass("active");
            $("body").removeClass("without-discount")
        });
        event.preventDefault()
    });
    $(".statistic-block").one("inview", function (a, c) {
        c && $(".circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 3,
            backgroundBorderWidth: 3,
            backgroundColor: "#d5d5d5",
            fontColor: "#28262b",
            foregroundColor: "#ff9948",
            multiPercentage: 1
        })
    });
    $(".button-faq").each(function (a) {
        $(this).attr("data-btn", a)
    });
    $(".text-faq").each(function (a) {
        $(this).attr("data-btn", a)
    });
    $(".button-faq").click(function () {
        if ($(".text-faq").slideUp(400), $(".button-faq").removeClass("active"), $(".button-faq i").text("+"), $(this).next().is(":visible")) $(this).next().slideUp(400), $(this).removeClass("active"), $(this).children("i").text("+"); else {
            var a = $(this).attr("data-btn");
            $('.text-faq[data-btn="' + a + '"]').slideDown(400);
            $('.button-faq[data-btn="' + a + '"]').addClass("active");
            $(this).children("span").children("i").text("")
        }
    });
    $(".button-moneyback").each(function (a) {
        $(this).attr("data-btn", a)
    });
    $(".text-moneyback").each(function (a) {
        $(this).attr("data-btn", a)
    });
    $(".button-moneyback").click(function () {
        if ($(".text-moneyback").slideUp(400), $(".button-moneyback").removeClass("active"), $(".button-moneyback i").text("+"), $(this).next().is(":visible")) $(this).next().slideUp(400), $(this).removeClass("active"), $(this).children("i").text("+"); else {
            var a = $(this).attr("data-btn");
            $('.text-moneyback[data-btn="' +
                a + '"]').slideDown(400);
            $('.button-moneyback[data-btn="' + a + '"]').addClass("active");
            $(this).children("span").children("i").text("")
        }
    })
});

function loadBG() {
    var c = document.querySelector(".first-order-discount"), l = document.querySelector(".order-free");
    "undefined" != typeof c && null != c && (c.style.background = "rgba(50, 50, 50, 0.7) url(./img/Discount.jpg) center top no-repeat");
    "undefined" != typeof l && null != l && (l.style.background = "rgba(50, 50, 50, 0.7) url(./img/Special-offer.jpg) center top no-repeat")
}

window.onload = loadBG();
$(".select").on("click", ".def", function () {
    var c = $(this).closest(".select");
    c.hasClass("is-open") ? c.removeClass("is-open") : (c.addClass("is-open"), $(".select.is-open").not(c).removeClass("is-open"))
}).on("click", "ul>li", function () {
    var c = $(this).closest(".select");
    c.removeClass("is-open").find(".placeholder").text($(this).text());
    c.find("input[type=hidden]").attr("value", $(this).attr("data-value"))
});
$(document).mouseup(function (c) {
    var l = $(".select.is-open");
    0 === l.has(c.target).length && l.removeClass("is-open")
});

function fullHeight(c) {
    $(".nw-ct").css({"min-height": $(window).height() - c + "px"})
}

fullHeight(100);
$(window).resize(fullHeight(100));
$(".promo-full .close-btn").on("click", function () {
    fullHeight("60")
});
$(".promo").on("click", function () {
    fullHeight("100")
});

$(document).ready(function () {
    $(".wrp-ms").click(function () {
        var c = $(this).parent().find(".inp-q"), l = parseInt(c.val()) - 1;
        c.val(1 > l ? 1 : l);
        c.change();
        return !1
    });
    $(".wrp-pl").click(function () {
        var c = $(this).parent().find(".inp-q");
        c.val(parseInt(c.val()) + 1);
        c.change();
        return !1
    });
    $(".inp-q").on("keydown", function (c) {
        if (1 == c.key.length && c.key.match(/[^0-9'".]/)) return !1
    })
});
/*! lightslider - v1.1.6 - 2016-10-25
* https://github.com/sachinchoolur/lightslider
* Copyright (c) 2016 Sachin N; Licensed MIT */
(function ($, undefined) {
    'use strict';
    var defaults = {
        item: 3,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 10,
        addClass: '',
        mode: 'slide',
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
        easing: 'linear', //'for jquery animation',//
        speed: 400, //ms'
        auto: false,
        pauseOnHover: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
        rtl: false,
        adaptiveHeight: false,
        vertical: false,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,
        responsive: [],
        /* jshint ignore:start */
        onBeforeStart: function ($el) {},
        onSliderLoad: function ($el) {},
        onBeforeSlide: function ($el, scene) {},
        onAfterSlide: function ($el, scene) {},
        onBeforeNextSlide: function ($el, scene) {},
        onBeforePrevSlide: function ($el, scene) {}
        /* jshint ignore:end */
    };
    $.fn.lightSlider = function (options) {
        if (this.length === 0) {
            return this;
        }

        if (this.length > 1) {
            this.each(function () {
                $(this).lightSlider(options);
            });
            return this;
        }

        var plugin = {},
            settings = $.extend(true, {}, defaults, options),
            settingsTemp = {},
            $el = this;
        plugin.$el = this;

        if (settings.mode === 'fade') {
            settings.vertical = false;
        }
        var $children = $el.children(),
            windowW = $(window).width(),
            breakpoint = null,
            resposiveObj = null,
            length = 0,
            w = 0,
            on = false,
            elSize = 0,
            $slide = '',
            scene = 0,
            property = (settings.vertical === true) ? 'height' : 'width',
            gutter = (settings.vertical === true) ? 'margin-bottom' : 'margin-right',
            slideValue = 0,
            pagerWidth = 0,
            slideWidth = 0,
            thumbWidth = 0,
            interval = null,
            isTouch = ('ontouchstart' in document.documentElement);
        var refresh = {};

        refresh.chbreakpoint = function () {
            windowW = $(window).width();
            if (settings.responsive.length) {
                var item;
                if (settings.autoWidth === false) {
                    item = settings.item;
                }
                if (windowW < settings.responsive[0].breakpoint) {
                    for (var i = 0; i < settings.responsive.length; i++) {
                        if (windowW < settings.responsive[i].breakpoint) {
                            breakpoint = settings.responsive[i].breakpoint;
                            resposiveObj = settings.responsive[i];
                        }
                    }
                }
                if (typeof resposiveObj !== 'undefined' && resposiveObj !== null) {
                    for (var j in resposiveObj.settings) {
                        if (resposiveObj.settings.hasOwnProperty(j)) {
                            if (typeof settingsTemp[j] === 'undefined' || settingsTemp[j] === null) {
                                settingsTemp[j] = settings[j];
                            }
                            settings[j] = resposiveObj.settings[j];
                        }
                    }
                }
                if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
                    for (var k in settingsTemp) {
                        if (settingsTemp.hasOwnProperty(k)) {
                            settings[k] = settingsTemp[k];
                        }
                    }
                }
                if (settings.autoWidth === false) {
                    if (slideValue > 0 && slideWidth > 0) {
                        if (item !== settings.item) {
                            scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove));
                        }
                    }
                }
            }
        };

        refresh.calSW = function () {
            if (settings.autoWidth === false) {
                slideWidth = (elSize - ((settings.item * (settings.slideMargin)) - settings.slideMargin)) / settings.item;
            }
        };

        refresh.calWidth = function (cln) {
            var ln = cln === true ? $slide.find('.lslide').length : $children.length;
            if (settings.autoWidth === false) {
                w = ln * (slideWidth + settings.slideMargin);
            } else {
                w = 0;
                for (var i = 0; i < ln; i++) {
                    w += (parseInt($children.eq(i).width()) + settings.slideMargin);
                }
            }
            return w;
        };
        plugin = {
            doCss: function () {
                var support = function () {
                    var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
                    var root = document.documentElement;
                    for (var i = 0; i < transition.length; i++) {
                        if (transition[i] in root.style) {
                            return true;
                        }
                    }
                };
                if (settings.useCSS && support()) {
                    return true;
                }
                return false;
            },
            keyPress: function () {
                if (settings.keyPress) {
                    $(document).on('keyup.lightslider', function (e) {
                        if (!$(':focus').is('input, textarea')) {
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            if (e.keyCode === 37) {
                                $el.goToPrevSlide();
                            } else if (e.keyCode === 39) {
                                $el.goToNextSlide();
                            }
                        }
                    });
                }
            },
            controls: function () {
                if (settings.controls) {
                    $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');
                    if (!settings.autoWidth) {
                        if (length <= settings.item) {
                            $slide.find('.lSAction').hide();
                        }
                    } else {
                        if (refresh.calWidth(false) < elSize) {
                            $slide.find('.lSAction').hide();
                        }
                    }
                    $slide.find('.lSAction a').on('click', function (e) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        } else {
                            e.returnValue = false;
                        }
                        if ($(this).attr('class') === 'lSPrev') {
                            $el.goToPrevSlide();
                        } else {
                            $el.goToNextSlide();
                        }
                        return false;
                    });
                }
            },
            initialStyle: function () {
                var $this = this;
                if (settings.mode === 'fade') {
                    settings.autoWidth = false;
                    settings.slideEndAnimation = false;
                }
                if (settings.auto) {
                    settings.slideEndAnimation = false;
                }
                if (settings.autoWidth) {
                    settings.slideMove = 1;
                    settings.item = 1;
                }
                if (settings.loop) {
                    settings.slideMove = 1;
                    settings.freeMove = false;
                }
                settings.onBeforeStart.call(this, $el);
                refresh.chbreakpoint();
                $el.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + settings.addClass + '"><div class="lSSlideWrapper"></div></div>');
                $slide = $el.parent('.lSSlideWrapper');
                if (settings.rtl === true) {
                    $slide.parent().addClass('lSrtl');
                }
                if (settings.vertical) {
                    $slide.parent().addClass('vertical');
                    elSize = settings.verticalHeight;
                    $slide.css('height', elSize + 'px');
                } else {
                    elSize = $el.outerWidth();
                }
                $children.addClass('lslide');
                if (settings.loop === true && settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.clone = function () {
                        if (refresh.calWidth(true) > elSize) {
                            /**/
                            var tWr = 0,
                                tI = 0;
                            for (var k = 0; k < $children.length; k++) {
                                tWr += (parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin);
                                tI++;
                                if (tWr >= (elSize + settings.slideMargin)) {
                                    break;
                                }
                            }
                            var tItem = settings.autoWidth === true ? tI : settings.item;

                            /**/
                            if (tItem < $el.find('.clone.left').length) {
                                for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
                                    $children.eq(i).remove();
                                }
                            }
                            if (tItem < $el.find('.clone.right').length) {
                                for (var j = $children.length - 1; j > ($children.length - 1 - $el.find('.clone.right').length); j--) {
                                    scene--;
                                    $children.eq(j).remove();
                                }
                            }
                            /**/
                            for (var n = $el.find('.clone.right').length; n < tItem; n++) {
                                $el.find('.lslide').eq(n).clone().removeClass('lslide').addClass('clone right').appendTo($el);
                                scene++;
                            }
                            for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > ($el.find('.lslide').length - tItem); m--) {
                                $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
                            }
                            $children = $el.children();
                        } else {
                            if ($children.hasClass('clone')) {
                                $el.find('.clone').remove();
                                $this.move($el, 0);
                            }
                        }
                    };
                    refresh.clone();
                }
                refresh.sSW = function () {
                    length = $children.length;
                    if (settings.rtl === true && settings.vertical === false) {
                        gutter = 'margin-left';
                    }
                    if (settings.autoWidth === false) {
                        $children.css(property, slideWidth + 'px');
                    }
                    $children.css(gutter, settings.slideMargin + 'px');
                    w = refresh.calWidth(false);
                    $el.css(property, w + 'px');
                    if (settings.loop === true && settings.mode === 'slide') {
                        if (on === false) {
                            scene = $el.find('.clone.left').length;
                        }
                    }
                };
                refresh.calL = function () {
                    $children = $el.children();
                    length = $children.length;
                };
                if (this.doCss()) {
                    $slide.addClass('usingCss');
                }
                refresh.calL();
                if (settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.sSW();
                    if (settings.loop === true) {
                        slideValue = $this.slideValue();
                        this.move($el, slideValue);
                    }
                    if (settings.vertical === false) {
                        this.setHeight($el, false);
                    }

                } else {
                    this.setHeight($el, true);
                    $el.addClass('lSFade');
                    if (!this.doCss()) {
                        $children.fadeOut(0);
                        $children.eq(scene).fadeIn(0);
                    }
                }
                if (settings.loop === true && settings.mode === 'slide') {
                    $children.eq(scene).addClass('active');
                } else {
                    $children.first().addClass('active');
                }
            },
            pager: function () {
                var $this = this;
                refresh.createPager = function () {
                    thumbWidth = (elSize - ((settings.thumbItem * (settings.thumbMargin)) - settings.thumbMargin)) / settings.thumbItem;
                    var $children = $slide.find('.lslide');
                    var length = $slide.find('.lslide').length;
                    var i = 0,
                        pagers = '',
                        v = 0;
                    for (i = 0; i < length; i++) {
                        if (settings.mode === 'slide') {
                            // calculate scene * slide value
                            if (!settings.autoWidth) {
                                v = i * ((slideWidth + settings.slideMargin) * settings.slideMove);
                            } else {
                                v += ((parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove);
                            }
                        }
                        var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');
                        if (settings.gallery === true) {
                            pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>';
                        } else {
                            pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                        }
                        if (settings.mode === 'slide') {
                            if ((v) >= w - elSize - settings.slideMargin) {
                                i = i + 1;
                                var minPgr = 2;
                                if (settings.autoWidth) {
                                    pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                                    minPgr = 1;
                                }
                                if (i < minPgr) {
                                    pagers = null;
                                    $slide.parent().addClass('noPager');
                                } else {
                                    $slide.parent().removeClass('noPager');
                                }
                                break;
                            }
                        }
                    }
                    var $cSouter = $slide.parent();
                    $cSouter.find('.lSPager').html(pagers); 
                    if (settings.gallery === true) {
                        if (settings.vertical === true) {
                            // set Gallery thumbnail width
                            $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
                        }
                        pagerWidth = (i * (settings.thumbMargin + thumbWidth)) + 0.5;
                        $cSouter.find('.lSPager').css({
                            property: pagerWidth + 'px',
                            'transition-duration': settings.speed + 'ms'
                        });
                        if (settings.vertical === true) {
                            $slide.parent().css('padding-right', (settings.vThumbWidth + settings.galleryMargin) + 'px');
                        }
                        $cSouter.find('.lSPager').css(property, pagerWidth + 'px');
                    }
                    var $pager = $cSouter.find('.lSPager').find('li');
                    $pager.first().addClass('active');
                    $pager.on('click', function () {
                        if (settings.loop === true && settings.mode === 'slide') {
                            scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index());
                        } else {
                            scene = $pager.index(this);
                        }
                        $el.mode(false);
                        if (settings.gallery === true) {
                            $this.slideThumb();
                        }
                        return false;
                    });
                };
                if (settings.pager) {
                    var cl = 'lSpg';
                    if (settings.gallery) {
                        cl = 'lSGallery';
                    }
                    $slide.after('<ul class="lSPager ' + cl + '"></ul>');
                    var gMargin = (settings.vertical) ? 'margin-left' : 'margin-top';
                    $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
                    refresh.createPager();
                }

                setTimeout(function () {
                    refresh.init();
                }, 0);
            },
            setHeight: function (ob, fade) {
                var obj = null,
                    $this = this;
                if (settings.loop) {
                    obj = ob.children('.lslide ').first();
                } else {
                    obj = ob.children().first();
                }
                var setCss = function () {
                    var tH = obj.outerHeight(),
                        tP = 0,
                        tHT = tH;
                    if (fade) {
                        tH = 0;
                        tP = ((tHT) * 100) / elSize;
                    }
                    ob.css({
                        'height': tH + 'px',
                        'padding-bottom': tP + '%'
                    });
                };
                setCss();
                if (obj.find('img').length) {
                    if ( obj.find('img')[0].complete) {
                        setCss();
                        if (!interval) {
                            $this.auto();
                        }   
                    }else{
                        obj.find('img').on('load', function () {
                            setTimeout(function () {
                                setCss();
                                if (!interval) {
                                    $this.auto();
                                }
                            }, 100);
                        });
                    }
                }else{
                    if (!interval) {
                        $this.auto();
                    }
                }
            },
            active: function (ob, t) {
                if (this.doCss() && settings.mode === 'fade') {
                    $slide.addClass('on');
                }
                var sc = 0;
                if (scene * settings.slideMove < length) {
                    ob.removeClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.fadeOut(settings.speed);
                    }
                    if (t === true) {
                        sc = scene;
                    } else {
                        sc = scene * settings.slideMove;
                    }
                    //t === true ? sc = scene : sc = scene * settings.slideMove;
                    var l, nl;
                    if (t === true) {
                        l = ob.length;
                        nl = l - 1;
                        if (sc + 1 >= l) {
                            sc = nl;
                        }
                    }
                    if (settings.loop === true && settings.mode === 'slide') {
                        //t === true ? sc = scene - $el.find('.clone.left').length : sc = scene * settings.slideMove;
                        if (t === true) {
                            sc = scene - $el.find('.clone.left').length;
                        } else {
                            sc = scene * settings.slideMove;
                        }
                        if (t === true) {
                            l = ob.length;
                            nl = l - 1;
                            if (sc + 1 === l) {
                                sc = nl;
                            } else if (sc + 1 > l) {
                                sc = 0;
                            }
                        }
                    }

                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                    ob.eq(sc).addClass('active');
                } else {
                    ob.removeClass('active');
                    ob.eq(ob.length - 1).addClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.fadeOut(settings.speed);
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                }
            },
            move: function (ob, v) {
                if (settings.rtl === true) {
                    v = -v;
                }
                if (this.doCss()) {
                    if (settings.vertical === true) {
                        ob.css({
                            'transform': 'translate3d(0px, ' + (-v) + 'px, 0px)',
                            '-webkit-transform': 'translate3d(0px, ' + (-v) + 'px, 0px)'
                        });
                    } else {
                        ob.css({
                            'transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                            '-webkit-transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                        });
                    }
                } else {
                    if (settings.vertical === true) {
                        ob.css('position', 'relative').animate({
                            top: -v + 'px'
                        }, settings.speed, settings.easing);
                    } else {
                        ob.css('position', 'relative').animate({
                            left: -v + 'px'
                        }, settings.speed, settings.easing);
                    }
                }
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            fade: function () {
                this.active($children, false);
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            slide: function () {
                var $this = this;
                refresh.calSlide = function () {
                    if (w > elSize) {
                        slideValue = $this.slideValue();
                        $this.active($children, false);
                        if ((slideValue) > w - elSize - settings.slideMargin) {
                            slideValue = w - elSize - settings.slideMargin;
                        } else if (slideValue < 0) {
                            slideValue = 0;
                        }
                        $this.move($el, slideValue);
                        if (settings.loop === true && settings.mode === 'slide') {
                            if (scene >= (length - ($el.find('.clone.left').length / settings.slideMove))) {
                                $this.resetSlide($el.find('.clone.left').length);
                            }
                            if (scene === 0) {
                                $this.resetSlide($slide.find('.lslide').length);
                            }
                        }
                    }
                };
                refresh.calSlide();
            },
            resetSlide: function (s) {
                var $this = this;
                $slide.find('.lSAction a').addClass('disabled');
                setTimeout(function () {
                    scene = s;
                    $slide.css('transition-duration', '0ms');
                    slideValue = $this.slideValue();
                    $this.active($children, false);
                    plugin.move($el, slideValue);
                    setTimeout(function () {
                        $slide.css('transition-duration', settings.speed + 'ms');
                        $slide.find('.lSAction a').removeClass('disabled');
                    }, 50);
                }, settings.speed + 100);
            },
            slideValue: function () {
                var _sV = 0;
                if (settings.autoWidth === false) {
                    _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove);
                } else {
                    _sV = 0;
                    for (var i = 0; i < scene; i++) {
                        _sV += (parseInt($children.eq(i).width()) + settings.slideMargin);
                    }
                }
                return _sV;
            },
            slideThumb: function () {
                var position;
                switch (settings.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = (elSize / 2) - (thumbWidth / 2);
                    break;
                case 'right':
                    position = elSize - thumbWidth;
                }
                var sc = scene - $el.find('.clone.left').length;
                var $pager = $slide.parent().find('.lSPager');
                if (settings.mode === 'slide' && settings.loop === true) {
                    if (sc >= $pager.children().length) {
                        sc = 0;
                    } else if (sc < 0) {
                        sc = $pager.children().length;
                    }
                }
                var thumbSlide = sc * ((thumbWidth + settings.thumbMargin)) - (position);
                if ((thumbSlide + elSize) > pagerWidth) {
                    thumbSlide = pagerWidth - elSize - settings.thumbMargin;
                }
                if (thumbSlide < 0) {
                    thumbSlide = 0;
                }
                this.move($pager, thumbSlide);
            },
            auto: function () {
                if (settings.auto) {
                    clearInterval(interval);
                    interval = setInterval(function () {
                        $el.goToNextSlide();
                    }, settings.pause);
                }
            },
            pauseOnHover: function(){
                var $this = this;
                if (settings.auto && settings.pauseOnHover) {
                    $slide.on('mouseenter', function(){
                        $(this).addClass('ls-hover');
                        $el.pause();
                        settings.auto = true;
                    });
                    $slide.on('mouseleave',function(){
                        $(this).removeClass('ls-hover');
                        if (!$slide.find('.lightSlider').hasClass('lsGrabbing')) {
                            $this.auto();
                        }
                    });
                }
            },
            touchMove: function (endCoords, startCoords) {
                $slide.css('transition-duration', '0ms');
                if (settings.mode === 'slide') {
                    var distance = endCoords - startCoords;
                    var swipeVal = slideValue - distance;
                    if ((swipeVal) >= w - elSize - settings.slideMargin) {
                        if (settings.freeMove === false) {
                            swipeVal = w - elSize - settings.slideMargin;
                        } else {
                            var swipeValT = w - elSize - settings.slideMargin;
                            swipeVal = swipeValT + ((swipeVal - swipeValT) / 5);

                        }
                    } else if (swipeVal < 0) {
                        if (settings.freeMove === false) {
                            swipeVal = 0;
                        } else {
                            swipeVal = swipeVal / 5;
                        }
                    }
                    this.move($el, swipeVal);
                }
            },

            touchEnd: function (distance) {
                $slide.css('transition-duration', settings.speed + 'ms');
                if (settings.mode === 'slide') {
                    var mxVal = false;
                    var _next = true;
                    slideValue = slideValue - distance;
                    if ((slideValue) > w - elSize - settings.slideMargin) {
                        slideValue = w - elSize - settings.slideMargin;
                        if (settings.autoWidth === false) {
                            mxVal = true;
                        }
                    } else if (slideValue < 0) {
                        slideValue = 0;
                    }
                    var gC = function (next) {
                        var ad = 0;
                        if (!mxVal) {
                            if (next) {
                                ad = 1;
                            }
                        }
                        if (!settings.autoWidth) {
                            var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
                            scene = parseInt(num) + ad;
                            if (slideValue >= (w - elSize - settings.slideMargin)) {
                                if (num % 1 !== 0) {
                                    scene++;
                                }
                            }
                        } else {
                            var tW = 0;
                            for (var i = 0; i < $children.length; i++) {
                                tW += (parseInt($children.eq(i).width()) + settings.slideMargin);
                                scene = i + ad;
                                if (tW >= slideValue) {
                                    break;
                                }
                            }
                        }
                    };
                    if (distance >= settings.swipeThreshold) {
                        gC(false);
                        _next = false;
                    } else if (distance <= -settings.swipeThreshold) {
                        gC(true);
                        _next = false;
                    }
                    $el.mode(_next);
                    this.slideThumb();
                } else {
                    if (distance >= settings.swipeThreshold) {
                        $el.goToPrevSlide();
                    } else if (distance <= -settings.swipeThreshold) {
                        $el.goToNextSlide();
                    }
                }
            },



            enableDrag: function () {
                var $this = this;
                if (!isTouch) {
                    var startCoords = 0,
                        endCoords = 0,
                        isDraging = false;
                    $slide.find('.lightSlider').addClass('lsGrab');
                    $slide.on('mousedown', function (e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
                            startCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            isDraging = true;
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                            $slide.scrollLeft += 1;
                            $slide.scrollLeft -= 1;
                            // *
                            $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
                            clearInterval(interval);
                        }
                    });
                    $(window).on('mousemove', function (e) {
                        if (isDraging) {
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            $this.touchMove(endCoords, startCoords);
                        }
                    });
                    $(window).on('mouseup', function (e) {
                        if (isDraging) {
                            $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
                            isDraging = false;
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            var distance = endCoords - startCoords;
                            if (Math.abs(distance) >= settings.swipeThreshold) {
                                $(window).on('click.ls', function (e) {
                                    if (e.preventDefault) {
                                        e.preventDefault();
                                    } else {
                                        e.returnValue = false;
                                    }
                                    e.stopImmediatePropagation();
                                    e.stopPropagation();
                                    $(window).off('click.ls');
                                });
                            }

                            $this.touchEnd(distance);

                        }
                    });
                }
            },




            enableTouch: function () {
                var $this = this;
                if (isTouch) {
                    var startCoords = {},
                        endCoords = {};
                    $slide.on('touchstart', function (e) {
                        endCoords = e.originalEvent.targetTouches[0];
                        startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
                        startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
                        clearInterval(interval);
                    });
                    $slide.on('touchmove', function (e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        var orig = e.originalEvent;
                        endCoords = orig.targetTouches[0];
                        var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
                        var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
                        if (settings.vertical === true) {
                            if ((yMovement * 3) > xMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageY, startCoords.pageY);
                        } else {
                            if ((xMovement * 3) > yMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageX, startCoords.pageX);
                        }

                    });
                    $slide.on('touchend', function () {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        var distance;
                        if (settings.vertical === true) {
                            distance = endCoords.pageY - startCoords.pageY;
                        } else {
                            distance = endCoords.pageX - startCoords.pageX;
                        }
                        $this.touchEnd(distance);
                    });
                }
            },
            build: function () {
                var $this = this;
                $this.initialStyle();
                if (this.doCss()) {

                    if (settings.enableTouch === true) {
                        $this.enableTouch();
                    }
                    if (settings.enableDrag === true) {
                        $this.enableDrag();
                    }
                }

                $(window).on('focus', function(){
                    $this.auto();
                });
                
                $(window).on('blur', function(){
                    clearInterval(interval);
                });

                $this.pager();
                $this.pauseOnHover();
                $this.controls();
                $this.keyPress();
            }
        };
        plugin.build();
        refresh.init = function () {
            refresh.chbreakpoint();
            if (settings.vertical === true) {
                if (settings.item > 1) {
                    elSize = settings.verticalHeight;
                } else {
                    elSize = $children.outerHeight();
                }
                $slide.css('height', elSize + 'px');
            } else {
                elSize = $slide.outerWidth();
            }
            if (settings.loop === true && settings.mode === 'slide') {
                refresh.clone();
            }
            refresh.calL();
            if (settings.mode === 'slide') {
                $el.removeClass('lSSlide');
            }
            if (settings.mode === 'slide') {
                refresh.calSW();
                refresh.sSW();
            }
            setTimeout(function () {
                if (settings.mode === 'slide') {
                    $el.addClass('lSSlide');
                }
            }, 1000);
            if (settings.pager) {
                refresh.createPager();
            }
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).outerHeight(true));
            }
            if (settings.adaptiveHeight === false) {
                if (settings.mode === 'slide') {
                    if (settings.vertical === false) {
                        plugin.setHeight($el, false);
                    }else{
                        plugin.auto();
                    }
                } else {
                    plugin.setHeight($el, true);
                }
            }
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
            if (settings.mode === 'slide') {
                plugin.slide();
            }
            if (settings.autoWidth === false) {
                if ($children.length <= settings.item) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            } else {
                if ((refresh.calWidth(false) < elSize) && (w !== 0)) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            }
        };
        $el.goToPrevSlide = function () {
            if (scene > 0) {
                settings.onBeforePrevSlide.call(this, $el, scene);
                scene--;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforePrevSlide.call(this, $el, scene);
                    if (settings.mode === 'fade') {
                        var l = (length - 1);
                        scene = parseInt(l / settings.slideMove);
                    }
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimation === true) {
                    $el.addClass('leftEnd');
                    setTimeout(function () {
                        $el.removeClass('leftEnd');
                    }, 400);
                }
            }
        };
        $el.goToNextSlide = function () {
            var nextI = true;
            if (settings.mode === 'slide') {
                var _slideValue = plugin.slideValue();
                nextI = _slideValue < w - elSize - settings.slideMargin;
            }
            if (((scene * settings.slideMove) < length - settings.slideMove) && nextI) {
                settings.onBeforeNextSlide.call(this, $el, scene);
                scene++;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforeNextSlide.call(this, $el, scene);
                    scene = 0;
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimation === true) {
                    $el.addClass('rightEnd');
                    setTimeout(function () {
                        $el.removeClass('rightEnd');
                    }, 400);
                }
            }
        };
        $el.mode = function (_touch) {
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).outerHeight(true));
            }
            if (on === false) {
                if (settings.mode === 'slide') {
                    if (plugin.doCss()) {
                        $el.addClass('lSSlide');
                        if (settings.speed !== '') {
                            $slide.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $slide.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                } else {
                    if (plugin.doCss()) {
                        if (settings.speed !== '') {
                            $el.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $el.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                }
            }
            if (!_touch) {
                settings.onBeforeSlide.call(this, $el, scene);
            }
            if (settings.mode === 'slide') {
                plugin.slide();
            } else {
                plugin.fade();
            }
            if (!$slide.hasClass('ls-hover')) {
                plugin.auto();
            }
            setTimeout(function () {
                if (!_touch) {
                    settings.onAfterSlide.call(this, $el, scene);
                }
            }, settings.speed);
            on = true;
        };
        $el.play = function () {
            $el.goToNextSlide();
            settings.auto = true;
            plugin.auto();
        };
        $el.pause = function () {
            settings.auto = false;
            clearInterval(interval);
        };
        $el.refresh = function () {
            refresh.init();
        };
        $el.getCurrentSlideCount = function () {
            var sc = scene;
            if (settings.loop) {
                var ln = $slide.find('.lslide').length,
                    cl = $el.find('.clone.left').length;
                if (scene <= cl - 1) {
                    sc = ln + (scene - cl);
                } else if (scene >= (ln + cl)) {
                    sc = scene - ln - cl;
                } else {
                    sc = scene - cl;
                }
            }
            return sc + 1;
        }; 
        $el.getTotalSlideCount = function () {
            return $slide.find('.lslide').length;
        };
        $el.goToSlide = function (s) {
            if (settings.loop) {
                scene = (s + $el.find('.clone.left').length - 1);
            } else {
                scene = s;
            }
            $el.mode(false);
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
        };
        $el.destroy = function () {
            if ($el.lightSlider) {
                $el.goToPrevSlide = function(){};
                $el.goToNextSlide = function(){};
                $el.mode = function(){};
                $el.play = function(){};
                $el.pause = function(){};
                $el.refresh = function(){};
                $el.getCurrentSlideCount = function(){};
                $el.getTotalSlideCount = function(){};
                $el.goToSlide = function(){}; 
                $el.lightSlider = null;
                refresh = {
                    init : function(){}
                };
                $el.parent().parent().find('.lSAction, .lSPager').remove();
                $el.removeClass('lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right').removeAttr('style').unwrap().unwrap();
                $el.children().removeAttr('style');
                $children.removeClass('lslide active');
                $el.find('.clone').remove();
                $children = null;
                interval = null;
                on = false;
                scene = 0;
            }

        };
        setTimeout(function () {
            settings.onSliderLoad.call(this, $el);
        }, 10);
        $(window).on('resize orientationchange', function (e) {
            setTimeout(function () {
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
                refresh.init();
            }, 200);
        });
        return this;
    };
}(jQuery));
$(document).ready(function() {
    var config = {
        item: 3,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 30,
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
        speed: 400, //ms'
        auto: false,
        loop: true,
        slideEndAnimation: true,
        pause: 0,
        keyPress: false,
        controls: false,
        prevHtml: '',
        nextHtml: '',
        rtl:false,
        adaptiveHeight: true,
        vertical:false,
        // verticalHeight:500,
        // vThumbWidth:100,
        // thumbItem:3,
        pager: true,
        gallery: false,
        // galleryMargin: 5,
        // thumbMargin: 10,
        currentPagerPosition: 'middle',
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
        responsive : [
            {
                breakpoint:992,
                settings: {
                    item:2

                }
            },
            {
                breakpoint:700,
                settings: {
                    item:1
                }
            }
        ],
        onBeforeStart: function (el) {
            pauseAllYoutube();
        },
        onSliderLoad: function (el) {
            pauseAllYoutube();
        },
        onBeforeSlide: function (el) {
            pauseAllYoutube();
        },
        onAfterSlide: function (el) {
            pauseAllYoutube();
        },
        onBeforeNextSlide: function (el) {
            pauseAllYoutube();
        },
        onBeforePrevSlide: function (el) {
            pauseAllYoutube();
        }
    };
    function pauseAllYoutube() {
        $('iframe[src*="youtube.com"]').each(function() {
            var src = $(this).attr('src');
            $(this).attr('src', '');
            $(this).attr('src', src + "autoplay=1");
        });

    }
    var slider =  $("#carousel").lightSlider(config);

    $('.prev').on('click', function () {
        slider.goToPrevSlide()
    });
    $('.next').on('click', function () {
        slider.goToNextSlide()
    });



});