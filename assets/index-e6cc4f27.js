function Jm(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function Zm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var fd = {
        exports: {}
    },
    Oi = {},
    dd = {
        exports: {}
    },
    $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr = Symbol.for("react.element"),
    ev = Symbol.for("react.portal"),
    tv = Symbol.for("react.fragment"),
    nv = Symbol.for("react.strict_mode"),
    rv = Symbol.for("react.profiler"),
    ov = Symbol.for("react.provider"),
    iv = Symbol.for("react.context"),
    lv = Symbol.for("react.forward_ref"),
    sv = Symbol.for("react.suspense"),
    uv = Symbol.for("react.memo"),
    av = Symbol.for("react.lazy"),
    dc = Symbol.iterator;

function cv(e) {
    return e === null || typeof e != "object" ? null : (e = dc && e[dc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var pd = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    hd = Object.assign,
    md = {};

function Zn(e, t, n) {
    this.props = e, this.context = t, this.refs = md, this.updater = n || pd
}
Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Zn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function vd() {}
vd.prototype = Zn.prototype;

function tu(e, t, n) {
    this.props = e, this.context = t, this.refs = md, this.updater = n || pd
}
var nu = tu.prototype = new vd;
nu.constructor = tu;
hd(nu, Zn.prototype);
nu.isPureReactComponent = !0;
var pc = Array.isArray,
    gd = Object.prototype.hasOwnProperty,
    ru = {
        current: null
    },
    yd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function wd(e, t, n) {
    var r, o = {},
        i = null,
        l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) gd.call(t, r) && !yd.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
        for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
        o.children = u
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
    return {
        $$typeof: Jr,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: ru.current
    }
}

function fv(e, t) {
    return {
        $$typeof: Jr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function ou(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Jr
}

function dv(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var hc = /\/+/g;

function dl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? dv("" + e.key) : t.toString(36)
}

function To(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0;
    else switch (i) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Jr:
                case ev:
                    l = !0
            }
    }
    if (l) return l = e, o = o(l), e = r === "" ? "." + dl(l, 0) : r, pc(o) ? (n = "", e != null && (n = e.replace(hc, "$&/") + "/"), To(o, t, n, "", function(a) {
        return a
    })) : o != null && (ou(o) && (o = fv(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(hc, "$&/") + "/") + e)), t.push(o)), 1;
    if (l = 0, r = r === "" ? "." : r + ":", pc(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var u = r + dl(i, s);
            l += To(i, t, n, u, o)
        } else if (u = cv(e), typeof u == "function")
            for (e = u.call(e), s = 0; !(i = e.next()).done;) i = i.value, u = r + dl(i, s++), l += To(i, t, n, u, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}

function lo(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return To(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function pv(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Ce = {
        current: null
    },
    _o = {
        transition: null
    },
    hv = {
        ReactCurrentDispatcher: Ce,
        ReactCurrentBatchConfig: _o,
        ReactCurrentOwner: ru
    };
$.Children = {
    map: lo,
    forEach: function(e, t, n) {
        lo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return lo(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return lo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ou(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
$.Component = Zn;
$.Fragment = tv;
$.Profiler = rv;
$.PureComponent = tu;
$.StrictMode = nv;
$.Suspense = sv;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hv;
$.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = hd({}, e.props),
        o = e.key,
        i = e.ref,
        l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, l = ru.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (u in t) gd.call(t, u) && !yd.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
        r.children = s
    }
    return {
        $$typeof: Jr,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: l
    }
};
$.createContext = function(e) {
    return e = {
        $$typeof: iv,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: ov,
        _context: e
    }, e.Consumer = e
};
$.createElement = wd;
$.createFactory = function(e) {
    var t = wd.bind(null, e);
    return t.type = e, t
};
$.createRef = function() {
    return {
        current: null
    }
};
$.forwardRef = function(e) {
    return {
        $$typeof: lv,
        render: e
    }
};
$.isValidElement = ou;
$.lazy = function(e) {
    return {
        $$typeof: av,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: pv
    }
};
$.memo = function(e, t) {
    return {
        $$typeof: uv,
        type: e,
        compare: t === void 0 ? null : t
    }
};
$.startTransition = function(e) {
    var t = _o.transition;
    _o.transition = {};
    try {
        e()
    } finally {
        _o.transition = t
    }
};
$.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
$.useCallback = function(e, t) {
    return Ce.current.useCallback(e, t)
};
$.useContext = function(e) {
    return Ce.current.useContext(e)
};
$.useDebugValue = function() {};
$.useDeferredValue = function(e) {
    return Ce.current.useDeferredValue(e)
};
$.useEffect = function(e, t) {
    return Ce.current.useEffect(e, t)
};
$.useId = function() {
    return Ce.current.useId()
};
$.useImperativeHandle = function(e, t, n) {
    return Ce.current.useImperativeHandle(e, t, n)
};
$.useInsertionEffect = function(e, t) {
    return Ce.current.useInsertionEffect(e, t)
};
$.useLayoutEffect = function(e, t) {
    return Ce.current.useLayoutEffect(e, t)
};
$.useMemo = function(e, t) {
    return Ce.current.useMemo(e, t)
};
$.useReducer = function(e, t, n) {
    return Ce.current.useReducer(e, t, n)
};
$.useRef = function(e) {
    return Ce.current.useRef(e)
};
$.useState = function(e) {
    return Ce.current.useState(e)
};
$.useSyncExternalStore = function(e, t, n) {
    return Ce.current.useSyncExternalStore(e, t, n)
};
$.useTransition = function() {
    return Ce.current.useTransition()
};
$.version = "18.2.0";
dd.exports = $;
var S = dd.exports;
const mv = Zm(S),
    Qo = Jm({
        __proto__: null,
        default: mv
    }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv = S,
    gv = Symbol.for("react.element"),
    yv = Symbol.for("react.fragment"),
    wv = Object.prototype.hasOwnProperty,
    xv = vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Sv = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function xd(e, t, n) {
    var r, o = {},
        i = null,
        l = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
    for (r in t) wv.call(t, r) && !Sv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: gv,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: xv.current
    }
}
Oi.Fragment = yv;
Oi.jsx = xd;
Oi.jsxs = xd;
fd.exports = Oi;
var v = fd.exports;
/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Tr() {
    return Tr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Tr.apply(this, arguments)
}
var _t;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(_t || (_t = {}));
const mc = "popstate";

function Ev(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {
            pathname: i,
            search: l,
            hash: s
        } = r.location;
        return Xl("", {
            pathname: i,
            search: l,
            hash: s
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : Sd(o)
    }
    return Cv(t, n, null, e)
}

function ue(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function iu(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function kv() {
    return Math.random().toString(36).substr(2, 8)
}

function vc(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Xl(e, t, n, r) {
    return n === void 0 && (n = null), Tr({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? er(t) : t, {
        state: n,
        key: t && t.key || r || kv()
    })
}

function Sd(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function er(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function Cv(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: i = !1
    } = r, l = o.history, s = _t.Pop, u = null, a = f();
    a == null && (a = 0, l.replaceState(Tr({}, l.state, {
        idx: a
    }), ""));

    function f() {
        return (l.state || {
            idx: null
        }).idx
    }

    function c() {
        s = _t.Pop;
        let E = f(),
            d = E == null ? null : E - a;
        a = E, u && u({
            action: s,
            location: w.location,
            delta: d
        })
    }

    function h(E, d) {
        s = _t.Push;
        let p = Xl(w.location, E, d);
        n && n(p, E), a = f() + 1;
        let m = vc(p, a),
            x = w.createHref(p);
        try {
            l.pushState(m, "", x)
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError") throw k;
            o.location.assign(x)
        }
        i && u && u({
            action: s,
            location: w.location,
            delta: 1
        })
    }

    function y(E, d) {
        s = _t.Replace;
        let p = Xl(w.location, E, d);
        n && n(p, E), a = f();
        let m = vc(p, a),
            x = w.createHref(p);
        l.replaceState(m, "", x), i && u && u({
            action: s,
            location: w.location,
            delta: 0
        })
    }

    function g(E) {
        let d = o.location.origin !== "null" ? o.location.origin : o.location.href,
            p = typeof E == "string" ? E : Sd(E);
        return ue(d, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, d)
    }
    let w = {
        get action() {
            return s
        },
        get location() {
            return e(o, l)
        },
        listen(E) {
            if (u) throw new Error("A history only accepts one active listener");
            return o.addEventListener(mc, c), u = E, () => {
                o.removeEventListener(mc, c), u = null
            }
        },
        createHref(E) {
            return t(o, E)
        },
        createURL: g,
        encodeLocation(E) {
            let d = g(E);
            return {
                pathname: d.pathname,
                search: d.search,
                hash: d.hash
            }
        },
        push: h,
        replace: y,
        go(E) {
            return l.go(E)
        }
    };
    return w
}
var gc;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(gc || (gc = {}));

function Rv(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? er(t) : t,
        o = Cd(r.pathname || "/", n);
    if (o == null) return null;
    let i = Ed(e);
    Pv(i);
    let l = null;
    for (let s = 0; l == null && s < i.length; ++s) l = Fv(i[s], zv(o));
    return l
}

function Ed(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, l, s) => {
        let u = {
            relativePath: s === void 0 ? i.path || "" : s,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: l,
            route: i
        };
        u.relativePath.startsWith("/") && (ue(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
        let a = ln([r, u.relativePath]),
            f = n.concat(u);
        i.children && i.children.length > 0 && (ue(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')), Ed(i.children, t, f, a)), !(i.path == null && !i.index) && t.push({
            path: a,
            score: Av(a, i.index),
            routesMeta: f
        })
    };
    return e.forEach((i, l) => {
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l);
        else
            for (let u of kd(i.path)) o(i, l, u)
    }), t
}

function kd(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let l = kd(r.join("/")),
        s = [];
    return s.push(...l.map(u => u === "" ? i : [i, u].join("/"))), o && s.push(...l), s.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function Pv(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Iv(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Nv = /^:\w+$/,
    Tv = 3,
    _v = 2,
    Ov = 1,
    jv = 10,
    Lv = -2,
    yc = e => e === "*";

function Av(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(yc) && (r += Lv), t && (r += _v), n.filter(o => !yc(o)).reduce((o, i) => o + (Nv.test(i) ? Tv : i === "" ? Ov : jv), r)
}

function Iv(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function Fv(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, o = "/", i = [];
    for (let l = 0; l < n.length; ++l) {
        let s = n[l],
            u = l === n.length - 1,
            a = o === "/" ? t : t.slice(o.length) || "/",
            f = Mv({
                path: s.relativePath,
                caseSensitive: s.caseSensitive,
                end: u
            }, a);
        if (!f) return null;
        Object.assign(r, f.params);
        let c = s.route;
        i.push({
            params: r,
            pathname: ln([o, f.pathname]),
            pathnameBase: Wv(ln([o, f.pathnameBase])),
            route: c
        }), f.pathnameBase !== "/" && (o = ln([o, f.pathnameBase]))
    }
    return i
}

function Mv(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Dv(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0],
        l = i.replace(/(.)\/+$/, "$1"),
        s = o.slice(1);
    return {
        params: r.reduce((a, f, c) => {
            if (f === "*") {
                let h = s[c] || "";
                l = i.slice(0, i.length - h.length).replace(/(.)\/+$/, "$1")
            }
            return a[f] = Bv(s[c] || "", f), a
        }, {}),
        pathname: i,
        pathnameBase: l,
        pattern: e
    }
}

function Dv(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), iu(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (l, s) => (r.push(s), "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function zv(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return iu(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function Bv(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return iu(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
    }
}

function Cd(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function $v(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: o = ""
    } = typeof e == "string" ? er(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Uv(n, t) : t,
        search: Kv(r),
        hash: Qv(o)
    }
}

function Uv(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }), n.length > 1 ? n.join("/") : "/"
}

function pl(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Hv(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Vv(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = er(e) : (o = Tr({}, e), ue(!o.pathname || !o.pathname.includes("?"), pl("?", "pathname", "search", o)), ue(!o.pathname || !o.pathname.includes("#"), pl("#", "pathname", "hash", o)), ue(!o.search || !o.search.includes("#"), pl("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "",
        l = i ? "/" : o.pathname,
        s;
    if (r || l == null) s = n;
    else {
        let c = t.length - 1;
        if (l.startsWith("..")) {
            let h = l.split("/");
            for (; h[0] === "..";) h.shift(), c -= 1;
            o.pathname = h.join("/")
        }
        s = c >= 0 ? t[c] : "/"
    }
    let u = $v(o, s),
        a = l && l !== "/" && l.endsWith("/"),
        f = (i || l === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (a || f) && (u.pathname += "/"), u
}
const ln = e => e.join("/").replace(/\/\/+/g, "/"),
    Wv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Kv = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    Qv = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function bv(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Rd = ["post", "put", "patch", "delete"];
new Set(Rd);
const qv = ["get", ...Rd];
new Set(qv);
/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function bo() {
    return bo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, bo.apply(this, arguments)
}
const lu = S.createContext(null),
    Gv = S.createContext(null),
    ji = S.createContext(null),
    Li = S.createContext(null),
    gn = S.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Pd = S.createContext(null);

function Ai() {
    return S.useContext(Li) != null
}

function Nd() {
    return Ai() || ue(!1), S.useContext(Li).location
}

function Td(e) {
    S.useContext(ji).static || S.useLayoutEffect(e)
}

function Zr() {
    let {
        isDataRoute: e
    } = S.useContext(gn);
    return e ? ag() : Xv()
}

function Xv() {
    Ai() || ue(!1);
    let e = S.useContext(lu),
        {
            basename: t,
            navigator: n
        } = S.useContext(ji),
        {
            matches: r
        } = S.useContext(gn),
        {
            pathname: o
        } = Nd(),
        i = JSON.stringify(Hv(r).map(u => u.pathnameBase)),
        l = S.useRef(!1);
    return Td(() => {
        l.current = !0
    }), S.useCallback(function(u, a) {
        if (a === void 0 && (a = {}), !l.current) return;
        if (typeof u == "number") {
            n.go(u);
            return
        }
        let f = Vv(u, JSON.parse(i), o, a.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : ln([t, f.pathname])), (a.replace ? n.replace : n.push)(f, a.state, a)
    }, [t, n, i, o, e])
}

function Yv() {
    let {
        matches: e
    } = S.useContext(gn), t = e[e.length - 1];
    return t ? t.params : {}
}

function Jv(e, t) {
    return Zv(e, t)
}

function Zv(e, t, n) {
    Ai() || ue(!1);
    let {
        navigator: r
    } = S.useContext(ji), {
        matches: o
    } = S.useContext(gn), i = o[o.length - 1], l = i ? i.params : {};
    i && i.pathname;
    let s = i ? i.pathnameBase : "/";
    i && i.route;
    let u = Nd(),
        a;
    if (t) {
        var f;
        let w = typeof t == "string" ? er(t) : t;
        s === "/" || (f = w.pathname) != null && f.startsWith(s) || ue(!1), a = w
    } else a = u;
    let c = a.pathname || "/",
        h = s === "/" ? c : c.slice(s.length) || "/",
        y = Rv(e, {
            pathname: h
        }),
        g = og(y && y.map(w => Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: ln([s, r.encodeLocation ? r.encodeLocation(w.pathname).pathname : w.pathname]),
            pathnameBase: w.pathnameBase === "/" ? s : ln([s, r.encodeLocation ? r.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
        })), o, n);
    return t && g ? S.createElement(Li.Provider, {
        value: {
            location: bo({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, a),
            navigationType: _t.Pop
        }
    }, g) : g
}

function eg() {
    let e = ug(),
        t = bv(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        },
        i = null;
    return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? S.createElement("pre", {
        style: o
    }, n) : null, i)
}
const tg = S.createElement(eg, null);
class ng extends S.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? S.createElement(gn.Provider, {
            value: this.props.routeContext
        }, S.createElement(Pd.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function rg(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = S.useContext(lu);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), S.createElement(gn.Provider, {
        value: t
    }, r)
}

function og(e, t, n) {
    var r;
    if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
        var o;
        if ((o = n) != null && o.errors) e = n.matches;
        else return null
    }
    let i = e,
        l = (r = n) == null ? void 0 : r.errors;
    if (l != null) {
        let s = i.findIndex(u => u.route.id && (l == null ? void 0 : l[u.route.id]));
        s >= 0 || ue(!1), i = i.slice(0, Math.min(i.length, s + 1))
    }
    return i.reduceRight((s, u, a) => {
        let f = u.route.id ? l == null ? void 0 : l[u.route.id] : null,
            c = null;
        n && (c = u.route.errorElement || tg);
        let h = t.concat(i.slice(0, a + 1)),
            y = () => {
                let g;
                return f ? g = c : u.route.Component ? g = S.createElement(u.route.Component, null) : u.route.element ? g = u.route.element : g = s, S.createElement(rg, {
                    match: u,
                    routeContext: {
                        outlet: s,
                        matches: h,
                        isDataRoute: n != null
                    },
                    children: g
                })
            };
        return n && (u.route.ErrorBoundary || u.route.errorElement || a === 0) ? S.createElement(ng, {
            location: n.location,
            revalidation: n.revalidation,
            component: c,
            error: f,
            children: y(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : y()
    }, null)
}
var Yl;
(function(e) {
    e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate"
})(Yl || (Yl = {}));
var _r;
(function(e) {
    e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId"
})(_r || (_r = {}));

function ig(e) {
    let t = S.useContext(lu);
    return t || ue(!1), t
}

function lg(e) {
    let t = S.useContext(Gv);
    return t || ue(!1), t
}

function sg(e) {
    let t = S.useContext(gn);
    return t || ue(!1), t
}

function _d(e) {
    let t = sg(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || ue(!1), n.route.id
}

function ug() {
    var e;
    let t = S.useContext(Pd),
        n = lg(_r.UseRouteError),
        r = _d(_r.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}

function ag() {
    let {
        router: e
    } = ig(Yl.UseNavigateStable), t = _d(_r.UseNavigateStable), n = S.useRef(!1);
    return Td(() => {
        n.current = !0
    }), S.useCallback(function(o, i) {
        i === void 0 && (i = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, bo({
            fromRouteId: t
        }, i)))
    }, [e, t])
}

function en(e) {
    ue(!1)
}

function cg(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = _t.Pop,
        navigator: i,
        static: l = !1
    } = e;
    Ai() && ue(!1);
    let s = t.replace(/^\/*/, "/"),
        u = S.useMemo(() => ({
            basename: s,
            navigator: i,
            static: l
        }), [s, i, l]);
    typeof r == "string" && (r = er(r));
    let {
        pathname: a = "/",
        search: f = "",
        hash: c = "",
        state: h = null,
        key: y = "default"
    } = r, g = S.useMemo(() => {
        let w = Cd(a, s);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: c,
                state: h,
                key: y
            },
            navigationType: o
        }
    }, [s, a, f, c, h, y, o]);
    return g == null ? null : S.createElement(ji.Provider, {
        value: u
    }, S.createElement(Li.Provider, {
        children: n,
        value: g
    }))
}

function Od(e) {
    let {
        children: t,
        location: n
    } = e;
    return Jv(Jl(t), n)
}
var wc;
(function(e) {
    e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
})(wc || (wc = {}));
new Promise(() => {});

function Jl(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return S.Children.forEach(e, (r, o) => {
        if (!S.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === S.Fragment) {
            n.push.apply(n, Jl(r.props.children, i));
            return
        }
        r.type !== en && ue(!1), !r.props.index || !r.props.children || ue(!1);
        let l = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (l.children = Jl(r.props.children, i)), n.push(l)
    }), n
}
/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const xc = "startTransition";

function fg(e) {
    let {
        basename: t,
        children: n,
        window: r
    } = e, o = S.useRef();
    o.current == null && (o.current = Ev({
        window: r,
        v5Compat: !0
    }));
    let i = o.current,
        [l, s] = S.useState({
            action: i.action,
            location: i.location
        }),
        u = S.useCallback(a => {
            xc in Qo ? Qo[xc](() => s(a)) : s(a)
        }, [s]);
    return S.useLayoutEffect(() => i.listen(u), [i, u]), S.createElement(cg, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: i
    })
}
var Sc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
})(Sc || (Sc = {}));
var Ec;
(function(e) {
    e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Ec || (Ec = {}));
const su = "lsIab2i",
    uu = "aGiS-qE",
    au = "SX1dr9D",
    cu = "pz51FLB",
    fu = "qI-SWG0",
    du = "-jJDNxh",
    pu = "vS3BlwO",
    hu = "pcYAS7Y",
    mu = "Z--0YlZ",
    vu = "u6G5-E5",
    gu = "wLJFvgN",
    yu = "v6n-3w8",
    wu = "QvVmN4E",
    jd = "FNiJcQA",
    Ld = "ivqS1PQ",
    Ad = "EbJ5U4H",
    Id = "_2-bLSUh",
    xu = "ipdUpF9",
    Su = "vmi2GK8",
    Eu = "rWrDBTM",
    ku = "rCpqHM0",
    Cu = "EjS5bpE",
    qo = "XlAKYiu",
    Fd = "af4ehsC",
    Md = "gloyL5J",
    Ru = "LxVm7UP",
    dg = {
        App: su,
        "App-logo": "ifCT-Ki",
        "App-logo-spin": "GpccbGr",
        mainBound: uu,
        navbar: au,
        footer: cu,
        footerL: fu,
        footerR: du,
        clickable: pu,
        searchParent: hu,
        searchBox: mu,
        searchIco: vu,
        goIco: gu,
        avail: yu,
        searchErr: wu,
        profileIcon: jd,
        icon: Ld,
        center: Ad,
        error: Id,
        iconCache: xu,
        veil: Su,
        tierBars: Eu,
        tierBar: ku,
        tierColor: Cu,
        rankingRow: qo,
        ht: Fd,
        lt: Md,
        retired: Ru
    },
    pg = Object.freeze(Object.defineProperty({
        __proto__: null,
        App: su,
        avail: yu,
        center: Ad,
        clickable: pu,
        default: dg,
        error: Id,
        footer: cu,
        footerL: fu,
        footerR: du,
        goIco: gu,
        ht: Fd,
        icon: Ld,
        iconCache: xu,
        lt: Md,
        mainBound: uu,
        navbar: au,
        profileIcon: jd,
        rankingRow: qo,
        retired: Ru,
        searchBox: mu,
        searchErr: wu,
        searchIco: vu,
        searchParent: hu,
        tierBar: ku,
        tierBars: Eu,
        tierColor: Cu,
        veil: Su
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function Dd(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: hg
} = Object.prototype, {
    getPrototypeOf: Pu
} = Object, Ii = (e => t => {
    const n = hg.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), ut = e => (e = e.toLowerCase(), t => Ii(t) === e), Fi = e => t => typeof t === e, {
    isArray: tr
} = Array, Or = Fi("undefined");

function mg(e) {
    return e !== null && !Or(e) && e.constructor !== null && !Or(e.constructor) && $e(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const zd = ut("ArrayBuffer");

function vg(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && zd(e.buffer), t
}
const gg = Fi("string"),
    $e = Fi("function"),
    Bd = Fi("number"),
    Mi = e => e !== null && typeof e == "object",
    yg = e => e === !0 || e === !1,
    Oo = e => {
        if (Ii(e) !== "object") return !1;
        const t = Pu(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    wg = ut("Date"),
    xg = ut("File"),
    Sg = ut("Blob"),
    Eg = ut("FileList"),
    kg = e => Mi(e) && $e(e.pipe),
    Cg = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || $e(e.append) && ((t = Ii(e)) === "formdata" || t === "object" && $e(e.toString) && e.toString() === "[object FormData]"))
    },
    Rg = ut("URLSearchParams"),
    Pg = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function eo(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let r, o;
    if (typeof e != "object" && (e = [e]), tr(e))
        for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
    else {
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            l = i.length;
        let s;
        for (r = 0; r < l; r++) s = i[r], t.call(null, e[s], s, e)
    }
}

function $d(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        o;
    for (; r-- > 0;)
        if (o = n[r], t === o.toLowerCase()) return o;
    return null
}
const Ud = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    Hd = e => !Or(e) && e !== Ud;

function Zl() {
    const {
        caseless: e
    } = Hd(this) && this || {}, t = {}, n = (r, o) => {
        const i = e && $d(t, o) || o;
        Oo(t[i]) && Oo(r) ? t[i] = Zl(t[i], r) : Oo(r) ? t[i] = Zl({}, r) : tr(r) ? t[i] = r.slice() : t[i] = r
    };
    for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && eo(arguments[r], n);
    return t
}
const Ng = (e, t, n, {
        allOwnKeys: r
    } = {}) => (eo(t, (o, i) => {
        n && $e(o) ? e[i] = Dd(o, n) : e[i] = o
    }, {
        allOwnKeys: r
    }), e),
    Tg = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    _g = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: t.prototype
        }), n && Object.assign(e.prototype, n)
    },
    Og = (e, t, n, r) => {
        let o, i, l;
        const s = {};
        if (t = t || {}, e == null) return t;
        do {
            for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0;) l = o[i], (!r || r(l, e, t)) && !s[l] && (t[l] = e[l], s[l] = !0);
            e = n !== !1 && Pu(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    jg = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    },
    Lg = e => {
        if (!e) return null;
        if (tr(e)) return e;
        let t = e.length;
        if (!Bd(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    Ag = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Pu(Uint8Array)),
    Ig = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let o;
        for (;
            (o = r.next()) && !o.done;) {
            const i = o.value;
            t.call(e, i[0], i[1])
        }
    },
    Fg = (e, t) => {
        let n;
        const r = [];
        for (;
            (n = e.exec(t)) !== null;) r.push(n);
        return r
    },
    Mg = ut("HTMLFormElement"),
    Dg = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
        return r.toUpperCase() + o
    }),
    kc = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    zg = ut("RegExp"),
    Vd = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        eo(n, (o, i) => {
            t(o, i, e) !== !1 && (r[i] = o)
        }), Object.defineProperties(e, r)
    },
    Bg = e => {
        Vd(e, (t, n) => {
            if ($e(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if ($e(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    $g = (e, t) => {
        const n = {},
            r = o => {
                o.forEach(i => {
                    n[i] = !0
                })
            };
        return tr(e) ? r(e) : r(String(e).split(t)), n
    },
    Ug = () => {},
    Hg = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
    hl = "abcdefghijklmnopqrstuvwxyz",
    Cc = "0123456789",
    Wd = {
        DIGIT: Cc,
        ALPHA: hl,
        ALPHA_DIGIT: hl + hl.toUpperCase() + Cc
    },
    Vg = (e = 16, t = Wd.ALPHA_DIGIT) => {
        let n = "";
        const {
            length: r
        } = t;
        for (; e--;) n += t[Math.random() * r | 0];
        return n
    };

function Wg(e) {
    return !!(e && $e(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const Kg = e => {
        const t = new Array(10),
            n = (r, o) => {
                if (Mi(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[o] = r;
                        const i = tr(r) ? [] : {};
                        return eo(r, (l, s) => {
                            const u = n(l, o + 1);
                            !Or(u) && (i[s] = u)
                        }), t[o] = void 0, i
                    }
                }
                return r
            };
        return n(e, 0)
    },
    Qg = ut("AsyncFunction"),
    bg = e => e && (Mi(e) || $e(e)) && $e(e.then) && $e(e.catch),
    C = {
        isArray: tr,
        isArrayBuffer: zd,
        isBuffer: mg,
        isFormData: Cg,
        isArrayBufferView: vg,
        isString: gg,
        isNumber: Bd,
        isBoolean: yg,
        isObject: Mi,
        isPlainObject: Oo,
        isUndefined: Or,
        isDate: wg,
        isFile: xg,
        isBlob: Sg,
        isRegExp: zg,
        isFunction: $e,
        isStream: kg,
        isURLSearchParams: Rg,
        isTypedArray: Ag,
        isFileList: Eg,
        forEach: eo,
        merge: Zl,
        extend: Ng,
        trim: Pg,
        stripBOM: Tg,
        inherits: _g,
        toFlatObject: Og,
        kindOf: Ii,
        kindOfTest: ut,
        endsWith: jg,
        toArray: Lg,
        forEachEntry: Ig,
        matchAll: Fg,
        isHTMLForm: Mg,
        hasOwnProperty: kc,
        hasOwnProp: kc,
        reduceDescriptors: Vd,
        freezeMethods: Bg,
        toObjectSet: $g,
        toCamelCase: Dg,
        noop: Ug,
        toFiniteNumber: Hg,
        findKey: $d,
        global: Ud,
        isContextDefined: Hd,
        ALPHABET: Wd,
        generateString: Vg,
        isSpecCompliantForm: Wg,
        toJSONObject: Kg,
        isAsyncFn: Qg,
        isThenable: bg
    };

function H(e, t, n, r, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
}
C.inherits(H, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: C.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Kd = H.prototype,
    Qd = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Qd[e] = {
        value: e
    }
});
Object.defineProperties(H, Qd);
Object.defineProperty(Kd, "isAxiosError", {
    value: !0
});
H.from = (e, t, n, r, o, i) => {
    const l = Object.create(Kd);
    return C.toFlatObject(e, l, function(u) {
        return u !== Error.prototype
    }, s => s !== "isAxiosError"), H.call(l, e.message, t, n, r, o), l.cause = e, l.name = e.name, i && Object.assign(l, i), l
};
const qg = null;

function es(e) {
    return C.isPlainObject(e) || C.isArray(e)
}

function bd(e) {
    return C.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Rc(e, t, n) {
    return e ? e.concat(t).map(function(o, i) {
        return o = bd(o), !n && i ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}

function Gg(e) {
    return C.isArray(e) && !e.some(es)
}
const Xg = C.toFlatObject(C, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function Di(e, t, n) {
    if (!C.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = C.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(w, E) {
        return !C.isUndefined(E[w])
    });
    const r = n.metaTokens,
        o = n.visitor || f,
        i = n.dots,
        l = n.indexes,
        u = (n.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(t);
    if (!C.isFunction(o)) throw new TypeError("visitor must be a function");

    function a(g) {
        if (g === null) return "";
        if (C.isDate(g)) return g.toISOString();
        if (!u && C.isBlob(g)) throw new H("Blob is not supported. Use a Buffer instead.");
        return C.isArrayBuffer(g) || C.isTypedArray(g) ? u && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g
    }

    function f(g, w, E) {
        let d = g;
        if (g && !E && typeof g == "object") {
            if (C.endsWith(w, "{}")) w = r ? w : w.slice(0, -2), g = JSON.stringify(g);
            else if (C.isArray(g) && Gg(g) || (C.isFileList(g) || C.endsWith(w, "[]")) && (d = C.toArray(g))) return w = bd(w), d.forEach(function(m, x) {
                !(C.isUndefined(m) || m === null) && t.append(l === !0 ? Rc([w], x, i) : l === null ? w : w + "[]", a(m))
            }), !1
        }
        return es(g) ? !0 : (t.append(Rc(E, w, i), a(g)), !1)
    }
    const c = [],
        h = Object.assign(Xg, {
            defaultVisitor: f,
            convertValue: a,
            isVisitable: es
        });

    function y(g, w) {
        if (!C.isUndefined(g)) {
            if (c.indexOf(g) !== -1) throw Error("Circular reference detected in " + w.join("."));
            c.push(g), C.forEach(g, function(d, p) {
                (!(C.isUndefined(d) || d === null) && o.call(t, d, C.isString(p) ? p.trim() : p, w, h)) === !0 && y(d, w ? w.concat(p) : [p])
            }), c.pop()
        }
    }
    if (!C.isObject(e)) throw new TypeError("data must be an object");
    return y(e), t
}

function Pc(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}

function Nu(e, t) {
    this._pairs = [], e && Di(e, this, t)
}
const qd = Nu.prototype;
qd.append = function(t, n) {
    this._pairs.push([t, n])
};
qd.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Pc)
    } : Pc;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
};

function Yg(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function Gd(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || Yg,
        o = n && n.serialize;
    let i;
    if (o ? i = o(t, n) : i = C.isURLSearchParams(t) ? t.toString() : new Nu(t, n).toString(r), i) {
        const l = e.indexOf("#");
        l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + i
    }
    return e
}
class Jg {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        C.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Nc = Jg,
    Xd = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    Zg = typeof URLSearchParams < "u" ? URLSearchParams : Nu,
    ey = typeof FormData < "u" ? FormData : null,
    ty = typeof Blob < "u" ? Blob : null,
    ny = (() => {
        let e;
        return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    })(),
    ry = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    ot = {
        isBrowser: !0,
        classes: {
            URLSearchParams: Zg,
            FormData: ey,
            Blob: ty
        },
        isStandardBrowserEnv: ny,
        isStandardBrowserWebWorkerEnv: ry,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function oy(e, t) {
    return Di(e, new ot.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, o, i) {
            return ot.isNode && C.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function iy(e) {
    return C.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function ly(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const o = n.length;
    let i;
    for (r = 0; r < o; r++) i = n[r], t[i] = e[i];
    return t
}

function Yd(e) {
    function t(n, r, o, i) {
        let l = n[i++];
        const s = Number.isFinite(+l),
            u = i >= n.length;
        return l = !l && C.isArray(o) ? o.length : l, u ? (C.hasOwnProp(o, l) ? o[l] = [o[l], r] : o[l] = r, !s) : ((!o[l] || !C.isObject(o[l])) && (o[l] = []), t(n, r, o[l], i) && C.isArray(o[l]) && (o[l] = ly(o[l])), !s)
    }
    if (C.isFormData(e) && C.isFunction(e.entries)) {
        const n = {};
        return C.forEachEntry(e, (r, o) => {
            t(iy(r), o, n, 0)
        }), n
    }
    return null
}
const sy = {
    "Content-Type": void 0
};

function uy(e, t, n) {
    if (C.isString(e)) try {
        return (t || JSON.parse)(e), C.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}
const zi = {
    transitional: Xd,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || "",
            o = r.indexOf("application/json") > -1,
            i = C.isObject(t);
        if (i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)) return o && o ? JSON.stringify(Yd(t)) : t;
        if (C.isArrayBuffer(t) || C.isBuffer(t) || C.isStream(t) || C.isFile(t) || C.isBlob(t)) return t;
        if (C.isArrayBufferView(t)) return t.buffer;
        if (C.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let s;
        if (i) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return oy(t, this.formSerializer).toString();
            if ((s = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const u = this.env && this.env.FormData;
                return Di(s ? {
                    "files[]": t
                } : t, u && new u, this.formSerializer)
            }
        }
        return i || o ? (n.setContentType("application/json", !1), uy(t)) : t
    }],
    transformResponse: [function(t) {
        const n = this.transitional || zi.transitional,
            r = n && n.forcedJSONParsing,
            o = this.responseType === "json";
        if (t && C.isString(t) && (r && !this.responseType || o)) {
            const l = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (s) {
                if (l) throw s.name === "SyntaxError" ? H.from(s, H.ERR_BAD_RESPONSE, this, null, this.response) : s
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: ot.classes.FormData,
        Blob: ot.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
C.forEach(["delete", "get", "head"], function(t) {
    zi.headers[t] = {}
});
C.forEach(["post", "put", "patch"], function(t) {
    zi.headers[t] = C.merge(sy)
});
const Tu = zi,
    ay = C.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    cy = e => {
        const t = {};
        let n, r, o;
        return e && e.split(`
`).forEach(function(l) {
            o = l.indexOf(":"), n = l.substring(0, o).trim().toLowerCase(), r = l.substring(o + 1).trim(), !(!n || t[n] && ay[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    },
    Tc = Symbol("internals");

function or(e) {
    return e && String(e).trim().toLowerCase()
}

function jo(e) {
    return e === !1 || e == null ? e : C.isArray(e) ? e.map(jo) : String(e)
}

function fy(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}
const dy = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function ml(e, t, n, r, o) {
    if (C.isFunction(r)) return r.call(this, t, n);
    if (o && (t = n), !!C.isString(t)) {
        if (C.isString(r)) return t.indexOf(r) !== -1;
        if (C.isRegExp(r)) return r.test(t)
    }
}

function py(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function hy(e, t) {
    const n = C.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(o, i, l) {
                return this[r].call(this, t, o, i, l)
            },
            configurable: !0
        })
    })
}
class Bi {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this;

        function i(s, u, a) {
            const f = or(u);
            if (!f) throw new Error("header name must be a non-empty string");
            const c = C.findKey(o, f);
            (!c || o[c] === void 0 || a === !0 || a === void 0 && o[c] !== !1) && (o[c || u] = jo(s))
        }
        const l = (s, u) => C.forEach(s, (a, f) => i(a, f, u));
        return C.isPlainObject(t) || t instanceof this.constructor ? l(t, n) : C.isString(t) && (t = t.trim()) && !dy(t) ? l(cy(t), n) : t != null && i(n, t, r), this
    }
    get(t, n) {
        if (t = or(t), t) {
            const r = C.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n) return o;
                if (n === !0) return fy(o);
                if (C.isFunction(n)) return n.call(this, o, r);
                if (C.isRegExp(n)) return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = or(t), t) {
            const r = C.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || ml(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let o = !1;

        function i(l) {
            if (l = or(l), l) {
                const s = C.findKey(r, l);
                s && (!n || ml(r, r[s], s, n)) && (delete r[s], o = !0)
            }
        }
        return C.isArray(t) ? t.forEach(i) : i(t), o
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            o = !1;
        for (; r--;) {
            const i = n[r];
            (!t || ml(this, this[i], i, t, !0)) && (delete this[i], o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this,
            r = {};
        return C.forEach(this, (o, i) => {
            const l = C.findKey(r, i);
            if (l) {
                n[l] = jo(o), delete n[i];
                return
            }
            const s = t ? py(i) : String(i).trim();
            s !== i && delete n[i], n[s] = jo(o), r[s] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return C.forEach(this, (r, o) => {
            r != null && r !== !1 && (n[o] = t && C.isArray(r) ? r.join(", ") : r)
        }), n
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(o => r.set(o)), r
    }
    static accessor(t) {
        const r = (this[Tc] = this[Tc] = {
                accessors: {}
            }).accessors,
            o = this.prototype;

        function i(l) {
            const s = or(l);
            r[s] || (hy(o, l), r[s] = !0)
        }
        return C.isArray(t) ? t.forEach(i) : i(t), this
    }
}
Bi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.freezeMethods(Bi.prototype);
C.freezeMethods(Bi);
const ht = Bi;

function vl(e, t) {
    const n = this || Tu,
        r = t || n,
        o = ht.from(r.headers);
    let i = r.data;
    return C.forEach(e, function(s) {
        i = s.call(n, i, o.normalize(), t ? t.status : void 0)
    }), o.normalize(), i
}

function Jd(e) {
    return !!(e && e.__CANCEL__)
}

function to(e, t, n) {
    H.call(this, e ?? "canceled", H.ERR_CANCELED, t, n), this.name = "CanceledError"
}
C.inherits(to, H, {
    __CANCEL__: !0
});

function my(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new H("Request failed with status code " + n.status, [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
const vy = ot.isStandardBrowserEnv ? function() {
    return {
        write: function(n, r, o, i, l, s) {
            const u = [];
            u.push(n + "=" + encodeURIComponent(r)), C.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), C.isString(i) && u.push("path=" + i), C.isString(l) && u.push("domain=" + l), s === !0 && u.push("secure"), document.cookie = u.join("; ")
        },
        read: function(n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        },
        remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();

function gy(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function yy(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function Zd(e, t) {
    return e && !gy(t) ? yy(e, t) : t
}
const wy = ot.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
    let r;

    function o(i) {
        let l = i;
        return t && (n.setAttribute("href", l), l = n.href), n.setAttribute("href", l), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = o(window.location.href),
        function(l) {
            const s = C.isString(l) ? o(l) : l;
            return s.protocol === r.protocol && s.host === r.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function xy(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function Sy(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let o = 0,
        i = 0,
        l;
    return t = t !== void 0 ? t : 1e3,
        function(u) {
            const a = Date.now(),
                f = r[i];
            l || (l = a), n[o] = u, r[o] = a;
            let c = i,
                h = 0;
            for (; c !== o;) h += n[c++], c = c % e;
            if (o = (o + 1) % e, o === i && (i = (i + 1) % e), a - l < t) return;
            const y = f && a - f;
            return y ? Math.round(h * 1e3 / y) : void 0
        }
}

function _c(e, t) {
    let n = 0;
    const r = Sy(50, 250);
    return o => {
        const i = o.loaded,
            l = o.lengthComputable ? o.total : void 0,
            s = i - n,
            u = r(s),
            a = i <= l;
        n = i;
        const f = {
            loaded: i,
            total: l,
            progress: l ? i / l : void 0,
            bytes: s,
            rate: u || void 0,
            estimated: u && l && a ? (l - i) / u : void 0,
            event: o
        };
        f[t ? "download" : "upload"] = !0, e(f)
    }
}
const Ey = typeof XMLHttpRequest < "u",
    ky = Ey && function(e) {
        return new Promise(function(n, r) {
            let o = e.data;
            const i = ht.from(e.headers).normalize(),
                l = e.responseType;
            let s;

            function u() {
                e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s)
            }
            C.isFormData(o) && (ot.isStandardBrowserEnv || ot.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
            let a = new XMLHttpRequest;
            if (e.auth) {
                const y = e.auth.username || "",
                    g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                i.set("Authorization", "Basic " + btoa(y + ":" + g))
            }
            const f = Zd(e.baseURL, e.url);
            a.open(e.method.toUpperCase(), Gd(f, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;

            function c() {
                if (!a) return;
                const y = ht.from("getAllResponseHeaders" in a && a.getAllResponseHeaders()),
                    w = {
                        data: !l || l === "text" || l === "json" ? a.responseText : a.response,
                        status: a.status,
                        statusText: a.statusText,
                        headers: y,
                        config: e,
                        request: a
                    };
                my(function(d) {
                    n(d), u()
                }, function(d) {
                    r(d), u()
                }, w), a = null
            }
            if ("onloadend" in a ? a.onloadend = c : a.onreadystatechange = function() {
                    !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(c)
                }, a.onabort = function() {
                    a && (r(new H("Request aborted", H.ECONNABORTED, e, a)), a = null)
                }, a.onerror = function() {
                    r(new H("Network Error", H.ERR_NETWORK, e, a)), a = null
                }, a.ontimeout = function() {
                    let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const w = e.transitional || Xd;
                    e.timeoutErrorMessage && (g = e.timeoutErrorMessage), r(new H(g, w.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED, e, a)), a = null
                }, ot.isStandardBrowserEnv) {
                const y = (e.withCredentials || wy(f)) && e.xsrfCookieName && vy.read(e.xsrfCookieName);
                y && i.set(e.xsrfHeaderName, y)
            }
            o === void 0 && i.setContentType(null), "setRequestHeader" in a && C.forEach(i.toJSON(), function(g, w) {
                a.setRequestHeader(w, g)
            }), C.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), l && l !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", _c(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", _c(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = y => {
                a && (r(!y || y.type ? new to(null, e, a) : y), a.abort(), a = null)
            }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
            const h = xy(f);
            if (h && ot.protocols.indexOf(h) === -1) {
                r(new H("Unsupported protocol " + h + ":", H.ERR_BAD_REQUEST, e));
                return
            }
            a.send(o || null)
        })
    },
    Lo = {
        http: qg,
        xhr: ky
    };
C.forEach(Lo, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const Cy = {
    getAdapter: e => {
        e = C.isArray(e) ? e : [e];
        const {
            length: t
        } = e;
        let n, r;
        for (let o = 0; o < t && (n = e[o], !(r = C.isString(n) ? Lo[n.toLowerCase()] : n)); o++);
        if (!r) throw r === !1 ? new H(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(C.hasOwnProp(Lo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
        if (!C.isFunction(r)) throw new TypeError("adapter is not a function");
        return r
    },
    adapters: Lo
};

function gl(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new to(null, e)
}

function Oc(e) {
    return gl(e), e.headers = ht.from(e.headers), e.data = vl.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Cy.getAdapter(e.adapter || Tu.adapter)(e).then(function(r) {
        return gl(e), r.data = vl.call(e, e.transformResponse, r), r.headers = ht.from(r.headers), r
    }, function(r) {
        return Jd(r) || (gl(e), r && r.response && (r.response.data = vl.call(e, e.transformResponse, r.response), r.response.headers = ht.from(r.response.headers))), Promise.reject(r)
    })
}
const jc = e => e instanceof ht ? e.toJSON() : e;

function Vn(e, t) {
    t = t || {};
    const n = {};

    function r(a, f, c) {
        return C.isPlainObject(a) && C.isPlainObject(f) ? C.merge.call({
            caseless: c
        }, a, f) : C.isPlainObject(f) ? C.merge({}, f) : C.isArray(f) ? f.slice() : f
    }

    function o(a, f, c) {
        if (C.isUndefined(f)) {
            if (!C.isUndefined(a)) return r(void 0, a, c)
        } else return r(a, f, c)
    }

    function i(a, f) {
        if (!C.isUndefined(f)) return r(void 0, f)
    }

    function l(a, f) {
        if (C.isUndefined(f)) {
            if (!C.isUndefined(a)) return r(void 0, a)
        } else return r(void 0, f)
    }

    function s(a, f, c) {
        if (c in t) return r(a, f);
        if (c in e) return r(void 0, a)
    }
    const u = {
        url: i,
        method: i,
        data: i,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: s,
        headers: (a, f) => o(jc(a), jc(f), !0)
    };
    return C.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
        const c = u[f] || o,
            h = c(e[f], t[f], f);
        C.isUndefined(h) && c !== s || (n[f] = h)
    }), n
}
const ep = "1.4.0",
    _u = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    _u[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Lc = {};
_u.transitional = function(t, n, r) {
    function o(i, l) {
        return "[Axios v" + ep + "] Transitional option '" + i + "'" + l + (r ? ". " + r : "")
    }
    return (i, l, s) => {
        if (t === !1) throw new H(o(l, " has been removed" + (n ? " in " + n : "")), H.ERR_DEPRECATED);
        return n && !Lc[l] && (Lc[l] = !0, console.warn(o(l, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(i, l, s) : !0
    }
};

function Ry(e, t, n) {
    if (typeof e != "object") throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0;) {
        const i = r[o],
            l = t[i];
        if (l) {
            const s = e[i],
                u = s === void 0 || l(s, i, e);
            if (u !== !0) throw new H("option " + i + " must be " + u, H.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new H("Unknown option " + i, H.ERR_BAD_OPTION)
    }
}
const ts = {
        assertOptions: Ry,
        validators: _u
    },
    kt = ts.validators;
class Go {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new Nc,
            response: new Nc
        }
    }
    request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Vn(this.defaults, n);
        const {
            transitional: r,
            paramsSerializer: o,
            headers: i
        } = n;
        r !== void 0 && ts.assertOptions(r, {
            silentJSONParsing: kt.transitional(kt.boolean),
            forcedJSONParsing: kt.transitional(kt.boolean),
            clarifyTimeoutError: kt.transitional(kt.boolean)
        }, !1), o != null && (C.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : ts.assertOptions(o, {
            encode: kt.function,
            serialize: kt.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let l;
        l = i && C.merge(i.common, i[n.method]), l && C.forEach(["delete", "get", "head", "post", "put", "patch", "common"], g => {
            delete i[g]
        }), n.headers = ht.concat(l, i);
        const s = [];
        let u = !0;
        this.interceptors.request.forEach(function(w) {
            typeof w.runWhen == "function" && w.runWhen(n) === !1 || (u = u && w.synchronous, s.unshift(w.fulfilled, w.rejected))
        });
        const a = [];
        this.interceptors.response.forEach(function(w) {
            a.push(w.fulfilled, w.rejected)
        });
        let f, c = 0,
            h;
        if (!u) {
            const g = [Oc.bind(this), void 0];
            for (g.unshift.apply(g, s), g.push.apply(g, a), h = g.length, f = Promise.resolve(n); c < h;) f = f.then(g[c++], g[c++]);
            return f
        }
        h = s.length;
        let y = n;
        for (c = 0; c < h;) {
            const g = s[c++],
                w = s[c++];
            try {
                y = g(y)
            } catch (E) {
                w.call(this, E);
                break
            }
        }
        try {
            f = Oc.call(this, y)
        } catch (g) {
            return Promise.reject(g)
        }
        for (c = 0, h = a.length; c < h;) f = f.then(a[c++], a[c++]);
        return f
    }
    getUri(t) {
        t = Vn(this.defaults, t);
        const n = Zd(t.baseURL, t.url);
        return Gd(n, t.params, t.paramsSerializer)
    }
}
C.forEach(["delete", "get", "head", "options"], function(t) {
    Go.prototype[t] = function(n, r) {
        return this.request(Vn(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
C.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(i, l, s) {
            return this.request(Vn(s || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: i,
                data: l
            }))
        }
    }
    Go.prototype[t] = n(), Go.prototype[t + "Form"] = n(!0)
});
const Ao = Go;
class Ou {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(i) {
            n = i
        });
        const r = this;
        this.promise.then(o => {
            if (!r._listeners) return;
            let i = r._listeners.length;
            for (; i-- > 0;) r._listeners[i](o);
            r._listeners = null
        }), this.promise.then = o => {
            let i;
            const l = new Promise(s => {
                r.subscribe(s), i = s
            }).then(o);
            return l.cancel = function() {
                r.unsubscribe(i)
            }, l
        }, t(function(i, l, s) {
            r.reason || (r.reason = new to(i, l, s), n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Ou(function(o) {
                t = o
            }),
            cancel: t
        }
    }
}
const Py = Ou;

function Ny(e) {
    return function(n) {
        return e.apply(null, n)
    }
}

function Ty(e) {
    return C.isObject(e) && e.isAxiosError === !0
}
const ns = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(ns).forEach(([e, t]) => {
    ns[t] = e
});
const _y = ns;

function tp(e) {
    const t = new Ao(e),
        n = Dd(Ao.prototype.request, t);
    return C.extend(n, Ao.prototype, t, {
        allOwnKeys: !0
    }), C.extend(n, t, null, {
        allOwnKeys: !0
    }), n.create = function(o) {
        return tp(Vn(e, o))
    }, n
}
const ae = tp(Tu);
ae.Axios = Ao;
ae.CanceledError = to;
ae.CancelToken = Py;
ae.isCancel = Jd;
ae.VERSION = ep;
ae.toFormData = Di;
ae.AxiosError = H;
ae.Cancel = ae.CanceledError;
ae.all = function(t) {
    return Promise.all(t)
};
ae.spread = Ny;
ae.isAxiosError = Ty;
ae.mergeConfig = Vn;
ae.AxiosHeaders = ht;
ae.formToJSON = e => Yd(C.isHTMLForm(e) ? new FormData(e) : e);
ae.HttpStatusCode = _y;
ae.default = ae;
const Oy = ae;

function jy(e) {
    e.code == "ERR_BAD_RESPONSE" ? (_i("Please give us a few moments...", !1), setTimeout(() => {
        _i("Please give us a few moments...", !0)
    }, 2e3)) : console.log(e)
}
async function ju(e) {
    return e = e.replace(/^\//g, ""), Oy.get(`${window.location.protocol}//${window.location.host}/api/${e}`)
}

function $i(e) {
    return new Promise((t, n) => {
        let r = ju(e);
        r.then(o => {
            _i(null, !0), t(o)
        }), r.catch(o => {
            jy(o), n(o)
        })
    })
}

function Wn({
    className: e,
    style: t,
    color: n
}) {
    return v.jsxs("div", {
        className: "lds-ellipsis " + e,
        style: t,
        children: [v.jsx("div", {
            style: {
                background: n
            }
        }), v.jsx("div", {
            style: {
                background: n
            }
        }), v.jsx("div", {
            style: {
                background: n
            }
        }), v.jsx("div", {
            style: {
                background: n
            }
        })]
    })
}

function np(e) {
    var t = e.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight)
}
const Lu = "cPVdVTf",
    Au = "NOK8An4",
    Iu = "q5a8gP5",
    Fu = "FxX8Rni",
    Xo = "_26MSXHF",
    Mu = "fmfZ1Ks",
    Du = "nUPtPHW",
    zu = "qs-82PO",
    Bu = "-nAhK-E",
    Ui = "Mtz30OF",
    $u = "JDsaPiW",
    Zt = "mcjG2ST",
    Uu = "WbyAUyb",
    Hu = "J3LWoQp",
    Vu = "_6auVtCr",
    Wu = "A96H5bu",
    Ku = "KOKZ4Ln",
    Qu = "L01uj9h",
    bu = "hoURucT",
    Hi = "_3lS8Z9g",
    qu = "Bbe5V8B",
    Gu = "_3mZ0wqH",
    Xu = "muYMFag",
    Yu = "En20RQV",
    Ju = "qQamP8Q",
    rp = "rQ0j6xx",
    op = "FQ3iLGj",
    ip = "g1K1ixg",
    lp = "-kQ8iCy",
    sp = "NmuQcNd",
    up = "WxyQJlz",
    ap = "w-F4pVE",
    Zu = "lxzlVWt",
    Vi = "CZBLzTA",
    ea = "Q8mxrfM",
    ta = "H1DCi1-",
    na = "_9SgZD3T",
    Yo = "JAKx5mJ",
    ra = "pdQCH--",
    oa = "ZRWslAM",
    ia = "TgWZqSz",
    la = "_2jy4UCc",
    Ly = {
        rankings: Lu,
        tabBar: Au,
        bottomBar: Iu,
        tabs: Fu,
        tab: Xo,
        first: Mu,
        fillerTab: Du,
        active: zu,
        tabImg: Bu,
        ranking: Ui,
        rankingTitles: $u,
        lg: Zt,
        t1: Uu,
        t2: Hu,
        t3: Vu,
        t4: Wu,
        t5: Ku,
        playerParent: Qu,
        split: bu,
        tier: Hi,
        playerBar: qu,
        regionTag: Gu,
        name: Xu,
        lt: Yu,
        colorTag: Ju,
        na: rp,
        eu: op,
        sa: ip,
        au: lp,
        me: sp,
        as: up,
        af: ap,
        colorRegionText: Zu,
        visDetector: Vi,
        infoPage: ea,
        infoPageBody: ta,
        infoPageTopBar: na,
        infoPageSegment: Yo,
        infoPageContentBody: ra,
        imgSegment: oa,
        infoPageImgInfo: ia,
        backBtn: la
    },
    cp = Object.freeze(Object.defineProperty({
        __proto__: null,
        active: zu,
        af: ap,
        as: up,
        au: lp,
        backBtn: la,
        bottomBar: Iu,
        colorRegionText: Zu,
        colorTag: Ju,
        default: Ly,
        eu: op,
        fillerTab: Du,
        first: Mu,
        imgSegment: oa,
        infoPage: ea,
        infoPageBody: ta,
        infoPageContentBody: ra,
        infoPageImgInfo: ia,
        infoPageSegment: Yo,
        infoPageTopBar: na,
        lg: Zt,
        lt: Yu,
        me: sp,
        na: rp,
        name: Xu,
        playerBar: qu,
        playerParent: Qu,
        ranking: Ui,
        rankingTitles: $u,
        rankings: Lu,
        regionTag: Gu,
        sa: ip,
        split: bu,
        t1: Uu,
        t2: Hu,
        t3: Vu,
        t4: Wu,
        t5: Ku,
        tab: Xo,
        tabBar: Au,
        tabImg: Bu,
        tabs: Fu,
        tier: Hi,
        visDetector: Vi
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    yl = {
        UNK: {
            code: "??",
            name: "Unknown"
        },
        NA: {
            code: "NA",
            name: "North America"
        },
        EU: {
            code: "EU",
            name: "Europe"
        },
        SA: {
            code: "SA",
            name: "South America"
        },
        AU: {
            code: "AU",
            name: "Australia"
        },
        ME: {
            code: "ME",
            name: "Middle East"
        },
        AS: {
            code: "AS",
            name: "Asia"
        },
        AF: {
            code: "AF",
            name: "Africa"
        }
    };

function Wi(e) {
    return e == null || e == "" ? yl.UNK : yl[e] || yl.UNK
}

function Ac() {
    return Math.min(Math.round(document.getElementsByClassName(Hi)[0].clientHeight / 32), 50) + 2
}

function Ay({
    id: e
}) {
    let [t, n] = S.useState(e), [r, o] = S.useState([
        [],
        [],
        [],
        [],
        []
    ]), [i, l] = S.useState(0), [s, u] = S.useState(0), a = S.useRef(null);
    return S.useEffect(() => {
        if (i == 0) {
            l(Ac());
            return
        }
        if (e != t) {
            o([
                [],
                [],
                [],
                [],
                []
            ]), u(0), l(Ac()), n(e);
            return
        }
        $i("/tier/" + e + "?from=" + s + "&count=" + (i - s)).then(f => {
            let c = f.data,
                h = r;
            c.rankings.forEach((y, g) => {
                y.forEach((w, E) => {
                    let d = c.players[w[0]];
                    h[g].push([{
                        uuid: w[0],
                        name: d.name,
                        region: Wi(d.region),
                        points: d.points
                    }, w[1] == 0])
                })
            }), o(h), u(i)
        })
    }, [e, i, t]), S.useEffect(() => {
        let f = c => {
            if (a.current != null && np(a.current)) {
                let h = !1;
                if (r.forEach(y => {
                        y.length >= i && (h = !0)
                    }), !h) return;
                l(i + 25)
            }
        };
        return window.addEventListener("scroll", f), () => window.removeEventListener("scroll", f)
    }, [i, r]), v.jsxs("div", {
        className: Ui,
        children: [v.jsxs("div", {
            className: $u,
            children: [v.jsxs("h1", {
                className: `${Uu} ${Zt}`,
                children: [v.jsx("i", {
                    className: "fa-solid fa-trophy"
                }), " "]
            }), v.jsx("h1", {
                className: `${Hu} ${Zt}`,
                children: v.jsx("i", {
                    className: "fa-solid fa-trophy"
                })
            }), v.jsx("h1", {
                className: `${Vu} ${Zt}`,
                children: v.jsx("i", {
                    className: "fa-solid fa-trophy"
                })
            }), v.jsx("h1", {
                className: `${Wu} ${Zt}`
            }), v.jsx("h1", {
                className: `${Ku} ${Zt}`
            })]
        }), v.jsx("div", {
            className: Qu,
            children: r.map((f, c) => {
                if (!(c > 4)) return v.jsxs(S.Fragment, {
                    children: [v.jsx(Iy, {
                        players: f,
                        loading: i > s
                    }), c < r.length - 1 && v.jsx("div", {
                        className: bu
                    })]
                }, c)
            })
        }), v.jsx("div", {
            className: Vi,
            ref: a
        })]
    })
}

function Iy({
    players: e,
    loading: t
}) {
    return v.jsxs("div", {
        className: Hi,
        children: [e.map((n, r) => v.jsx(Fy, {
            player: n[0],
            ht: n[1]
        }, r)), t && v.jsx("div", {
            className: "centerBar",
            children: v.jsx(Wn, {})
        })]
    })
}

function Fy({
    player: e,
    ht: t
}) {
    let [n, r] = S.useState(!1);
    return v.jsxs("div", {
        onClick: o => {
            n && o.target != o.currentTarget || r(!0)
        },
        children: [v.jsxs("div", {
            className: `${qu} ${t?"":Yu}`,
            children: [v.jsx("div", {
                className: `${Ju} ${cp[e.region.code.toLowerCase()]}`
            }), v.jsx("div", {
                className: Gu,
                children: e.region.code
            }), v.jsx("div", {
                className: Xu,
                children: e.name
            })]
        }), n && v.jsx(fc, {
            player: e,
            onClose: () => {
                r(!1)
            }
        })]
    })
}
const My = "PfCWXDl",
    Dy = "Ljqknki",
    zy = "Yj7U0q1",
    By = "ty2Zm-C",
    $y = "Ie-Euqb",
    Uy = "lYtKtbk",
    Hy = "sfoYDcr",
    Vy = "YOwgsvn",
    Wy = "dYiS2Yy",
    Ky = "j5yvPr9",
    Qy = "_0AcCCe-",
    by = "yTm1mVu",
    qy = "BC5wiN-",
    Gy = "zUhqIWn",
    Xy = "HiIQqzL",
    Yy = "_08m-OXa",
    fp = "p61f5dh",
    Jy = "L4M46k9";

function Zy({
    children: e,
    style: t,
    className: n,
    onClose: r
}) {
    return v.jsx("div", {
        className: My,
        onClick: o => {
            o.target == o.currentTarget && r()
        },
        children: v.jsx("div", {
            className: `${Dy} ${n}`,
            style: t,
            children: e
        })
    })
}
const e0 = "/assets/overall-ca77dd12.svg",
    t0 = "/assets/retired-11f4ccb4.svg",
    n0 = "/assets/restricted-c3913674.svg",
    r0 = "/assets/axe-09fbd7d8.svg",
    o0 = "/assets/neth_pot-07e18fb6.svg",
    i0 = "/assets/pot-5ade81ba.svg",
    l0 = "/assets/sword-9023278f.svg",
    s0 = "/assets/uhc-05be850e.svg",
    u0 = "/assets/vanilla-38455c89.svg",
    a0 = "/assets/smp-72ce94df.svg",
    c0 = "/assets/adventurous-81202832.svg",
    f0 = "/assets/combat_master-3e377832.gif",
    d0 = "/assets/designer-661b2dd9.svg",
    p0 = "/assets/mode_champion-aee148a1.svg",
    h0 = "/assets/tier_list_admin-6c81bae2.svg",
    m0 = "/assets/combat_ace-88e73444.gif",
    v0 = "/assets/combat_novice-caef606f.svg",
    g0 = "/assets/developer-9f7a7632.svg",
    y0 = "/assets/mode_expert-243c0e1b.svg",
    w0 = "/assets/trainer-ad52d87d.svg",
    x0 = "/assets/combat_cadet-c8893147.svg",
    S0 = "/assets/combat_specialist-81e01e68.svg",
    E0 = "/assets/holding_the_crown-cb7b5717.svg",
    k0 = "/assets/rookie-de83d72e.svg",
    C0 = "/assets/verified_tester-b7a84da6.svg",
    jr = {
        overall: e0,
        retired: t0,
        restricted: n0,
        axe: r0,
        neth_pot: o0,
        pot: i0,
        sword: l0,
        uhc: s0,
        vanilla: u0,
        smp: a0
    },
    dp = {
        adventurous: c0,
        combat_master: f0,
        designer: d0,
        mode_champion: p0,
        mode_expert: y0,
        tierlist_admin: h0,
        combat_ace: m0,
        combat_novice: v0,
        developer: g0,
        trainer: w0,
        combat_cadet: x0,
        combat_specialist: S0,
        holding_the_crown: E0,
        rookie: k0,
        verified_tester: C0
    },
    Ki = "_0ffvUG3",
    sa = "eniNdtn",
    ua = "Zw1udpZ",
    aa = "pku-AyF",
    pp = "zwwuTTS",
    ca = "sFFsg3r",
    fa = "KkvtMj5",
    gr = "XpMXb9n",
    da = "V43ykyx",
    pa = "OvfkF0x",
    ha = "_8h7ZAvq",
    hp = "_5cefdzo",
    mp = "MXBPmHi",
    vp = "Ib5Ap5z",
    gp = "_6hs0DHR",
    yp = "Hlu4Wkr",
    wp = "clH0vXI",
    Jo = "uot8Lvs",
    ma = "Xqriu9x",
    R0 = {
        oallRanking: Ki,
        oallPlayerBar: sa,
        bg: ua,
        oallPlayerLeftBox: aa,
        leftBox: pp,
        oallPlayerNameBox: ca,
        oallPlayerRightBox: fa,
        oallSubBox: gr,
        oallRegionBox: da,
        oallPlayerPoints: pa,
        oallPlayerRankings: ha,
        champColor1: hp,
        champColor2: mp,
        champColor3: vp,
        champBG1: gp,
        champBG2: yp,
        champBG3: wp,
        rankingRow: Jo,
        top: ma
    },
    Ic = Object.freeze(Object.defineProperty({
        __proto__: null,
        bg: ua,
        champBG1: gp,
        champBG2: yp,
        champBG3: wp,
        champColor1: hp,
        champColor2: mp,
        champColor3: vp,
        default: R0,
        leftBox: pp,
        oallPlayerBar: sa,
        oallPlayerLeftBox: aa,
        oallPlayerNameBox: ca,
        oallPlayerPoints: pa,
        oallPlayerRankings: ha,
        oallPlayerRightBox: fa,
        oallRanking: Ki,
        oallRegionBox: da,
        oallSubBox: gr,
        rankingRow: Jo,
        top: ma
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function P0() {
    return Math.min(Math.round(document.getElementsByClassName(Ki)[0].clientHeight / 90), 20)
}

function N0() {
    let [e, t] = S.useState([]), [n, r] = S.useState(0), [o, i] = S.useState(0), l = S.useRef(null);
    return S.useEffect(() => {
        if (!(o >= 100)) {
            if (n == 0) {
                r(P0());
                return
            }
            $i("/tier/overall?from=" + o + "&count=" + (n - o)).then(s => {
                let u = s.data,
                    a = e;
                u.rankings.forEach((f, c) => {
                    if (typeof f != "string") return;
                    let h = u.players[f];
                    a.push({
                        uuid: f,
                        name: h.name,
                        region: Wi(h.region),
                        points: h.points
                    })
                }), t(a), i(n)
            })
        }
    }, [n]), S.useEffect(() => {
        let s = u => {
            if (l.current != null && np(l.current)) {
                if (e.length < n) return;
                r(n + 25)
            }
        };
        return window.addEventListener("scroll", s), () => window.removeEventListener("scroll", s)
    }, [n]), v.jsxs("div", {
        className: `${Ui} ${Ki}`,
        children: [(() => {
            let s = -1,
                u = 0,
                a = 0;
            return e.map((f, c) => (f.points != s && (u = c + 1, a++, s = f.points), u >= 100 ? null : v.jsx(T0, {
                ranking: u,
                highlight: a,
                bg: c % 2 == 0,
                player: f
            }, c)))
        })(), o < n && o < 100 && v.jsx("div", {
            className: "centerBar",
            children: v.jsx(Wn, {})
        }), v.jsx("div", {
            className: Vi,
            ref: l
        })]
    })
}
let so, Fc = [];

function T0({
    ranking: e,
    bg: t,
    highlight: n,
    player: r
}) {
    var f;
    let [o, i] = S.useState(), [l, s] = S.useState(!1);
    S.useEffect(() => {
        so == null && (so = setInterval(() => {
            let c = Fc.shift();
            if (c == null) {
                clearInterval(so), so = null;
                return
            }
            $i("/rankings/" + c[0]).then(h => {
                c[1](h.data)
            })
        }, 80)), Fc.push([r.uuid, c => {
            i(c)
        }])
    }, []);
    let u = n >= 4 ? "" : Ic["champBG" + n],
        a = n >= 4 ? "" : Ic["champColor" + n];
    return v.jsxs("div", {
        onClick: c => {
            l && c.target != c.currentTarget || s(!0)
        },
        children: [v.jsxs("div", {
            className: `${sa} ${t?ua:""}`,
            children: [v.jsxs("div", {
                className: `${aa} ${u}`,
                children: [v.jsx("h1", {
                    children: e
                }), v.jsx("img", {
                    src: "https://render.crafty.gg/3d/bust/" + r.uuid,
                    alt: ""
                })]
            }), v.jsxs("div", {
                className: ca,
                children: [v.jsx("span", {
                    className: a,
                    children: v.jsx("strong", {
                        children: r.name
                    })
                }), v.jsx("br", {}), v.jsx("span", {
                    style: a != "" ? {
                        color: "white"
                    } : {},
                    children: ((f = xp(r.points, o)) == null ? void 0 : f.title) || ""
                })]
            }), v.jsxs("div", {
                className: fa,
                children: [v.jsx("div", {
                    className: `${gr} ${da}`,
                    children: v.jsx("strong", {
                        className: Zu + " " + cp[r.region.code.toLowerCase()],
                        children: r.region.code
                    })
                }), v.jsx("div", {
                    className: `${gr} ${pa}`,
                    children: v.jsx("strong", {
                        children: v.jsx("span", {
                            children: r.points
                        })
                    })
                }), v.jsx("div", {
                    className: `${gr} ${ha}`,
                    children: v.jsx(_0, {
                        rankings: o
                    })
                })]
            })]
        }), l && v.jsx(fc, {
            player: r,
            onClose: () => {
                s(!1)
            }
        })]
    })
}

function _0({
    rankings: e
}) {
    let t = e != null ? Object.entries(e).map(([n, r]) => ({
        k: n,
        v: r
    })).sort((n, r) => !n.v.retired && r.v.retired ? -1 : n.v.retired && !r.v.retired ? 1 : n.v.tier < r.v.tier ? -1 : n.v.tier > r.v.tier ? 1 : n.v.pos < r.v.pos ? -1 : n.v.pos > r.v.pos ? 1 : it.indexOf(n.k) < it.indexOf(r.k) ? -1 : it.indexOf(n.k) > it.indexOf(r.k) ? 1 : 0) : [];
    return v.jsxs(v.Fragment, {
        children: [v.jsxs("div", {
            className: `${qo} ${Jo} ${ma}`,
            children: [v.jsx(me, {
                ranking: t[0]
            }), v.jsx(me, {
                ranking: t[1]
            }), v.jsx(me, {
                ranking: t[2]
            }), v.jsx(me, {
                ranking: t[3]
            })]
        }), v.jsxs("div", {
            className: `${qo} ${Jo}`,
            children: [v.jsx(me, {
                ranking: t[4]
            }), v.jsx(me, {
                ranking: t[5]
            }), v.jsx(me, {
                ranking: t[6]
            }), v.jsx(me, {
                ranking: t[7]
            })]
        })]
    })
}

function rs({
    code: e,
    msg: t
}) {
    let n = Zr();
    return v.jsxs("div", {
        className: "center error",
        children: [v.jsx("span", {
            children: e
        }), v.jsx("br", {}), t, " ", v.jsx("br", {}), v.jsx("br", {}), v.jsx("button", {
            style: {
                fontSize: "2rem"
            },
            onClick: () => n("/"),
            children: "Click to return to the home page"
        })]
    })
}
const it = ["vanilla", "sword", "uhc", "pot", "neth_pot", "smp", "axe"];
let Mc = [{
        id: "overall",
        title: "Overall",
        icon: jr.overall
    }, {
        id: "hof",
        title: "Hall of Fame",
        icon: jr.retired
    }],
    Xt = [];

function Dc() {
    let e = Zr(),
        {
            id: t
        } = Yv(),
        [n, r] = S.useState(Mc),
        o = -1;
    n.forEach((s, u) => {
        s.id == t && (o = u)
    }), o == -1 && (o = 0, Xt.length != 0 && setTimeout(() => {
        e("/ranking/" + n[0].id)
    }, 200)), S.useEffect(() => {
        $i("/tierlists").then(s => {
            Xt = [], Object.entries(s.data).forEach(([a, f]) => {
                Xt.push({
                    id: a,
                    title: f.title,
                    info_text: f.info_text,
                    kit_image: f.kit_image,
                    icon: jr[a]
                })
            }), Xt.sort((a, f) => it.indexOf(a.id) < it.indexOf(f.id) ? -1 : 1);
            let u = structuredClone(Mc);
            Xt.reverse().forEach(a => u.splice(1, 0, a)), r(u)
        })
    }, []);
    let i = 100,
        l = Xt.find(s => s.id == t);
    return v.jsxs(Od, {
        children: [v.jsx(en, {
            path: "info",
            element: v.jsx(v.Fragment, {
                children: l != null && v.jsx(O0, {
                    gm: l
                }) || v.jsx(rs, {
                    code: 404,
                    msg: "Not Found"
                })
            })
        }), v.jsx(en, {
            path: "*",
            element: v.jsxs("div", {
                className: Lu,
                children: [v.jsxs("div", {
                    className: Au,
                    children: [v.jsxs("div", {
                        className: Fu,
                        children: [n.map((s, u) => {
                            let a = u == o;
                            return v.jsxs("div", {
                                className: `${Xo} ${u==0?Mu:""} ${a?zu:""}`,
                                style: {
                                    zIndex: a ? 101 : i--
                                },
                                onClick: () => e("/ranking/" + s.id),
                                children: [v.jsx("img", {
                                    className: Bu,
                                    src: s.icon
                                }), v.jsx("div", {
                                    children: a && v.jsx("span", {
                                        children: s.title
                                    })
                                })]
                            }, u)
                        }), v.jsx("div", {
                            className: `${Xo} ${Du}`,
                            children: l != null && v.jsx("span", {
                                onClick: () => {
                                    e("info")
                                },
                                children: v.jsx("strong", {
                                    children: "Info"
                                })
                            })
                        })]
                    }), v.jsx("div", {
                        className: Iu
                    })]
                }), t == "overall" && v.jsx(N0, {}) || t == "hof" && v.jsx(rs, {
                    code: "",
                    msg: "Coming soon!"
                }) || t != null && v.jsx(Ay, {
                    id: t
                })]
            })
        })]
    })
}

function O0({
    gm: e
}) {
    let t = Zr(),
        n = [""];
    e.info_text.split(`
`).forEach(i => {
        i.startsWith("#") ? (n.push(v.jsx("h1", {
            children: i.replace(/^#(| )/g, "")
        })), n.push("")) : n[n.length - 1] += i + `
`
    });
    let o = n.map((i, l) => {
        if (i == "" && l == 0) return;
        if (typeof i == "object") return i;
        let s = i.split(`
`);
        return v.jsx("p", {
            children: s.map((u, a) => v.jsxs(S.Fragment, {
                children: [u, a != s.length - 1 && v.jsx("br", {})]
            }, a))
        }, l)
    });
    return v.jsxs("div", {
        className: ea,
        children: [v.jsx("div", {
            className: na,
            children: v.jsx("button", {
                className: la,
                onClick: () => t(".."),
                children: v.jsx("i", {
                    className: "fa-solid fa-arrow-left"
                })
            })
        }), v.jsxs("div", {
            className: ta,
            children: [v.jsxs("div", {
                className: Yo,
                children: [v.jsxs("h1", {
                    style: {
                        fontSize: "2.0rem",
                        color: "#fbb03b"
                    },
                    children: [e.title.toUpperCase(), " RUBRIC"]
                }), v.jsx("hr", {}), v.jsx("div", {
                    className: ra,
                    children: o
                })]
            }), v.jsxs("div", {
                className: `${Yo} ${oa}`,
                children: [v.jsx("img", {
                    src: e.kit_image,
                    alt: ""
                }), v.jsx("br", {}), v.jsx("div", {
                    className: ia,
                    children: v.jsx("strong", {
                        children: "EXAMPLE KIT"
                    })
                })]
            })]
        })]
    })
}
const qt = {
    master: {
        title: "Combat Master",
        reqString: `Obtained 200+ total points &
LT2+ in every gamemode.`
    },
    ace: {
        title: "Combat Ace",
        reqString: "Obtained 100+ total points."
    },
    specialist: {
        title: "Combat Specialist",
        reqString: "Obtained 50+ total points."
    },
    cadet: {
        title: "Combat Cadet",
        reqString: "Obtained 20+ total points."
    },
    novice: {
        title: "Combat Novice",
        reqString: "Obtained 10+ total points."
    },
    rookie: {
        title: "Rookie",
        reqString: "Starting rank for players with less than 10 points."
    },
    unranked: {
        title: "Unranked",
        reqString: ""
    }
};

function xp(e, t) {
    if (e == null) return null;
    if (e >= 200 && t != null) {
        let n = !0;
        if (Xt.forEach(r => {
                t[r.id] != null && (t[r.id].peak_tier || t[r.id].tier) <= 2 || (n = !1)
            }), n) return qt.master
    }
    return e >= 100 ? qt.ace : e >= 50 ? qt.specialist : e >= 20 ? qt.cadet : e >= 10 ? qt.novice : e >= 1 ? qt.rookie : e == 0 ? qt.unranked : null
}

function j0(e) {
    if (e == null) return 0;
    let t = e.peak_tier == null ? e.tier : e.peak_tier,
        n = e.peak_pos == null ? e.pos : e.peak_pos;
    return t == 1 && n == 0 ? 60 : t == 1 && n == 1 ? 44 : t == 2 && n == 0 ? 28 : t == 2 && n == 1 ? 16 : t == 3 && n == 0 ? 10 : t == 3 && n == 1 ? 6 : t == 4 && n == 0 ? 4 : t == 4 && n == 1 ? 3 : t == 5 && n == 0 ? 2 : t == 5 && n == 1 ? 1 : 0
}

function Sp(e) {
    return e.split("-")[1]
}

function L0(e) {
    return e === "y" ? "height" : "width"
}

function Qi(e) {
    return e.split("-")[0]
}

function va(e) {
    return ["top", "bottom"].includes(Qi(e)) ? "x" : "y"
}

function zc(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const i = r.x + r.width / 2 - o.width / 2,
        l = r.y + r.height / 2 - o.height / 2,
        s = va(t),
        u = L0(s),
        a = r[u] / 2 - o[u] / 2,
        f = s === "x";
    let c;
    switch (Qi(t)) {
        case "top":
            c = {
                x: i,
                y: r.y - o.height
            };
            break;
        case "bottom":
            c = {
                x: i,
                y: r.y + r.height
            };
            break;
        case "right":
            c = {
                x: r.x + r.width,
                y: l
            };
            break;
        case "left":
            c = {
                x: r.x - o.width,
                y: l
            };
            break;
        default:
            c = {
                x: r.x,
                y: r.y
            }
    }
    switch (Sp(t)) {
        case "start":
            c[s] -= a * (n && f ? -1 : 1);
            break;
        case "end":
            c[s] += a * (n && f ? -1 : 1)
    }
    return c
}
const A0 = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: l
    } = n, s = i.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
    let a = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: f,
            y: c
        } = zc(a, r, u),
        h = r,
        y = {},
        g = 0;
    for (let w = 0; w < s.length; w++) {
        const {
            name: E,
            fn: d
        } = s[w], {
            x: p,
            y: m,
            data: x,
            reset: k
        } = await d({
            x: f,
            y: c,
            initialPlacement: r,
            placement: h,
            strategy: o,
            middlewareData: y,
            rects: a,
            platform: l,
            elements: {
                reference: e,
                floating: t
            }
        });
        f = p ?? f, c = m ?? c, y = { ...y,
            [E]: { ...y[E],
                ...x
            }
        }, k && g <= 50 && (g++, typeof k == "object" && (k.placement && (h = k.placement), k.rects && (a = k.rects === !0 ? await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : k.rects), {
            x: f,
            y: c
        } = zc(a, h, u)), w = -1)
    }
    return {
        x: f,
        y: c,
        placement: h,
        strategy: o,
        middlewareData: y
    }
};

function ga(e, t) {
    return typeof e == "function" ? e(t) : e
}

function I0(e) {
    return typeof e != "number" ? function(t) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...t
        }
    }(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Zo(e) {
    return { ...e,
        top: e.y,
        left: e.x,
        right: e.x + e.width,
        bottom: e.y + e.height
    }
}
async function F0(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: i,
        rects: l,
        elements: s,
        strategy: u
    } = e, {
        boundary: a = "clippingAncestors",
        rootBoundary: f = "viewport",
        elementContext: c = "floating",
        altBoundary: h = !1,
        padding: y = 0
    } = ga(t, e), g = I0(y), w = s[h ? c === "floating" ? "reference" : "floating" : c], E = Zo(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
        boundary: a,
        rootBoundary: f,
        strategy: u
    })), d = c === "floating" ? { ...l.floating,
        x: r,
        y: o
    } : l.reference, p = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), m = await (i.isElement == null ? void 0 : i.isElement(p)) && await (i.getScale == null ? void 0 : i.getScale(p)) || {
        x: 1,
        y: 1
    }, x = Zo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: d,
        offsetParent: p,
        strategy: u
    }) : d);
    return {
        top: (E.top - x.top + g.top) / m.y,
        bottom: (x.bottom - E.bottom + g.bottom) / m.y,
        left: (E.left - x.left + g.left) / m.x,
        right: (x.right - E.right + g.right) / m.x
    }
}
const M0 = Math.min,
    D0 = Math.max;

function Bc(e, t, n) {
    return D0(e, M0(t, n))
}
const z0 = ["top", "right", "bottom", "left"];
z0.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Ep = function(e) {
    return e === void 0 && (e = 0), {
        name: "offset",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r
            } = t, o = await async function(i, l) {
                const {
                    placement: s,
                    platform: u,
                    elements: a
                } = i, f = await (u.isRTL == null ? void 0 : u.isRTL(a.floating)), c = Qi(s), h = Sp(s), y = va(s) === "x", g = ["left", "top"].includes(c) ? -1 : 1, w = f && y ? -1 : 1, E = ga(l, i);
                let {
                    mainAxis: d,
                    crossAxis: p,
                    alignmentAxis: m
                } = typeof E == "number" ? {
                    mainAxis: E,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...E
                };
                return h && typeof m == "number" && (p = h === "end" ? -1 * m : m), y ? {
                    x: p * w,
                    y: d * g
                } : {
                    x: d * g,
                    y: p * w
                }
            }(t, e);
            return {
                x: n + o.x,
                y: r + o.y,
                data: o
            }
        }
    }
};

function B0(e) {
    return e === "x" ? "y" : "x"
}
const kp = function(e) {
    return e === void 0 && (e = {}), {
        name: "shift",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o
            } = t, {
                mainAxis: i = !0,
                crossAxis: l = !1,
                limiter: s = {
                    fn: E => {
                        let {
                            x: d,
                            y: p
                        } = E;
                        return {
                            x: d,
                            y: p
                        }
                    }
                },
                ...u
            } = ga(e, t), a = {
                x: n,
                y: r
            }, f = await F0(t, u), c = va(Qi(o)), h = B0(c);
            let y = a[c],
                g = a[h];
            if (i) {
                const E = c === "y" ? "bottom" : "right";
                y = Bc(y + f[c === "y" ? "top" : "left"], y, y - f[E])
            }
            if (l) {
                const E = h === "y" ? "bottom" : "right";
                g = Bc(g + f[h === "y" ? "top" : "left"], g, g - f[E])
            }
            const w = s.fn({ ...t,
                [c]: y,
                [h]: g
            });
            return { ...w,
                data: {
                    x: w.x - n,
                    y: w.y - r
                }
            }
        }
    }
};

function Ue(e) {
    var t;
    return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function Xe(e) {
    return Ue(e).getComputedStyle(e)
}

function Cp(e) {
    return e instanceof Ue(e).Node
}

function Ut(e) {
    return Cp(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Ze(e) {
    return e instanceof Ue(e).HTMLElement
}

function mt(e) {
    return e instanceof Ue(e).Element
}

function $c(e) {
    return typeof ShadowRoot < "u" && (e instanceof Ue(e).ShadowRoot || e instanceof ShadowRoot)
}

function Lr(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = Xe(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function $0(e) {
    return ["table", "td", "th"].includes(Ut(e))
}

function os(e) {
    const t = ya(),
        n = Xe(e);
    return n.transform !== "none" || n.perspective !== "none" || !!n.containerType && n.containerType !== "normal" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function ya() {
    return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
}

function bi(e) {
    return ["html", "body", "#document"].includes(Ut(e))
}
const is = Math.min,
    Fn = Math.max,
    ei = Math.round,
    uo = Math.floor,
    cn = e => ({
        x: e,
        y: e
    });

function Rp(e) {
    const t = Xe(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = Ze(e),
        i = o ? e.offsetWidth : n,
        l = o ? e.offsetHeight : r,
        s = ei(n) !== i || ei(r) !== l;
    return s && (n = i, r = l), {
        width: n,
        height: r,
        $: s
    }
}

function wa(e) {
    return mt(e) ? e : e.contextElement
}

function Mn(e) {
    const t = wa(e);
    if (!Ze(t)) return cn(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: i
        } = Rp(t);
    let l = (i ? ei(n.width) : n.width) / r,
        s = (i ? ei(n.height) : n.height) / o;
    return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), {
        x: l,
        y: s
    }
}
const Uc = cn(0);

function Pp(e, t, n) {
    var r, o;
    if (t === void 0 && (t = !0), !ya()) return Uc;
    const i = e ? Ue(e) : window;
    return !n || t && n !== i ? Uc : {
        x: ((r = i.visualViewport) == null ? void 0 : r.offsetLeft) || 0,
        y: ((o = i.visualViewport) == null ? void 0 : o.offsetTop) || 0
    }
}

function fn(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = wa(e);
    let l = cn(1);
    t && (r ? mt(r) && (l = Mn(r)) : l = Mn(e));
    const s = Pp(i, n, r);
    let u = (o.left + s.x) / l.x,
        a = (o.top + s.y) / l.y,
        f = o.width / l.x,
        c = o.height / l.y;
    if (i) {
        const h = Ue(i),
            y = r && mt(r) ? Ue(r) : r;
        let g = h.frameElement;
        for (; g && r && y !== h;) {
            const w = Mn(g),
                E = g.getBoundingClientRect(),
                d = getComputedStyle(g),
                p = E.left + (g.clientLeft + parseFloat(d.paddingLeft)) * w.x,
                m = E.top + (g.clientTop + parseFloat(d.paddingTop)) * w.y;
            u *= w.x, a *= w.y, f *= w.x, c *= w.y, u += p, a += m, g = Ue(g).frameElement
        }
    }
    return Zo({
        width: f,
        height: c,
        x: u,
        y: a
    })
}

function vt(e) {
    return ((Cp(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function qi(e) {
    return mt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}

function Np(e) {
    return fn(vt(e)).left + qi(e).scrollLeft
}

function Kn(e) {
    if (Ut(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || $c(e) && e.host || vt(e);
    return $c(t) ? t.host : t
}

function Tp(e) {
    const t = Kn(e);
    return bi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ze(t) && Lr(t) ? t : Tp(t)
}

function sn(e, t) {
    var n;
    t === void 0 && (t = []);
    const r = Tp(e),
        o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
        i = Ue(r);
    return o ? t.concat(i, i.visualViewport || [], Lr(r) ? r : []) : t.concat(r, sn(r))
}

function Hc(e, t, n) {
    let r;
    if (t === "viewport") r = function(o, i) {
        const l = Ue(o),
            s = vt(o),
            u = l.visualViewport;
        let a = s.clientWidth,
            f = s.clientHeight,
            c = 0,
            h = 0;
        if (u) {
            a = u.width, f = u.height;
            const y = ya();
            (!y || y && i === "fixed") && (c = u.offsetLeft, h = u.offsetTop)
        }
        return {
            width: a,
            height: f,
            x: c,
            y: h
        }
    }(e, n);
    else if (t === "document") r = function(o) {
        const i = vt(o),
            l = qi(o),
            s = o.ownerDocument.body,
            u = Fn(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth),
            a = Fn(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
        let f = -l.scrollLeft + Np(o);
        const c = -l.scrollTop;
        return Xe(s).direction === "rtl" && (f += Fn(i.clientWidth, s.clientWidth) - u), {
            width: u,
            height: a,
            x: f,
            y: c
        }
    }(vt(e));
    else if (mt(t)) r = function(o, i) {
        const l = fn(o, !0, i === "fixed"),
            s = l.top + o.clientTop,
            u = l.left + o.clientLeft,
            a = Ze(o) ? Mn(o) : cn(1);
        return {
            width: o.clientWidth * a.x,
            height: o.clientHeight * a.y,
            x: u * a.x,
            y: s * a.y
        }
    }(t, n);
    else {
        const o = Pp(e);
        r = { ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return Zo(r)
}

function _p(e, t) {
    const n = Kn(e);
    return !(n === t || !mt(n) || bi(n)) && (Xe(n).position === "fixed" || _p(n, t))
}

function Vc(e, t) {
    return Ze(e) && Xe(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null
}

function Wc(e, t) {
    const n = Ue(e);
    if (!Ze(e)) return n;
    let r = Vc(e, t);
    for (; r && $0(r) && Xe(r).position === "static";) r = Vc(r, t);
    return r && (Ut(r) === "html" || Ut(r) === "body" && Xe(r).position === "static" && !os(r)) ? n : r || function(o) {
        let i = Kn(o);
        for (; Ze(i) && !bi(i);) {
            if (os(i)) return i;
            i = Kn(i)
        }
        return null
    }(e) || n
}

function U0(e, t, n) {
    const r = Ze(t),
        o = vt(t),
        i = n === "fixed",
        l = fn(e, !0, i, t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const u = cn(0);
    if (r || !r && !i)
        if ((Ut(t) !== "body" || Lr(o)) && (s = qi(t)), Ze(t)) {
            const a = fn(t, !0, i, t);
            u.x = a.x + t.clientLeft, u.y = a.y + t.clientTop
        } else o && (u.x = Np(o));
    return {
        x: l.left + s.scrollLeft - u.x,
        y: l.top + s.scrollTop - u.y,
        width: l.width,
        height: l.height
    }
}
const H0 = {
    getClippingRect: function(e) {
        let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
        } = e;
        const i = n === "clippingAncestors" ? function(a, f) {
                const c = f.get(a);
                if (c) return c;
                let h = sn(a).filter(E => mt(E) && Ut(E) !== "body"),
                    y = null;
                const g = Xe(a).position === "fixed";
                let w = g ? Kn(a) : a;
                for (; mt(w) && !bi(w);) {
                    const E = Xe(w),
                        d = os(w);
                    d || E.position !== "fixed" || (y = null), (g ? !d && !y : !d && E.position === "static" && y && ["absolute", "fixed"].includes(y.position) || Lr(w) && !d && _p(a, w)) ? h = h.filter(p => p !== w) : y = E, w = Kn(w)
                }
                return f.set(a, h), h
            }(t, this._c) : [].concat(n),
            l = [...i, r],
            s = l[0],
            u = l.reduce((a, f) => {
                const c = Hc(t, f, o);
                return a.top = Fn(c.top, a.top), a.right = is(c.right, a.right), a.bottom = is(c.bottom, a.bottom), a.left = Fn(c.left, a.left), a
            }, Hc(t, s, o));
        return {
            width: u.right - u.left,
            height: u.bottom - u.top,
            x: u.left,
            y: u.top
        }
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let {
            rect: t,
            offsetParent: n,
            strategy: r
        } = e;
        const o = Ze(n),
            i = vt(n);
        if (n === i) return t;
        let l = {
                scrollLeft: 0,
                scrollTop: 0
            },
            s = cn(1);
        const u = cn(0);
        if ((o || !o && r !== "fixed") && ((Ut(n) !== "body" || Lr(i)) && (l = qi(n)), Ze(n))) {
            const a = fn(n);
            s = Mn(n), u.x = a.x + n.clientLeft, u.y = a.y + n.clientTop
        }
        return {
            width: t.width * s.x,
            height: t.height * s.y,
            x: t.x * s.x - l.scrollLeft * s.x + u.x,
            y: t.y * s.y - l.scrollTop * s.y + u.y
        }
    },
    isElement: mt,
    getDimensions: function(e) {
        return Rp(e)
    },
    getOffsetParent: Wc,
    getDocumentElement: vt,
    getScale: Mn,
    async getElementRects(e) {
        let {
            reference: t,
            floating: n,
            strategy: r
        } = e;
        const o = this.getOffsetParent || Wc,
            i = this.getDimensions;
        return {
            reference: U0(t, await o(n), r),
            floating: {
                x: 0,
                y: 0,
                ...await i(n)
            }
        }
    },
    getClientRects: e => Array.from(e.getClientRects()),
    isRTL: e => Xe(e).direction === "rtl"
};

function Op(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: l = typeof ResizeObserver == "function",
        layoutShift: s = typeof IntersectionObserver == "function",
        animationFrame: u = !1
    } = r, a = wa(e), f = o || i ? [...a ? sn(a) : [], ...sn(t)] : [];
    f.forEach(E => {
        o && E.addEventListener("scroll", n, {
            passive: !0
        }), i && E.addEventListener("resize", n)
    });
    const c = a && s ? function(E, d) {
        let p, m = null;
        const x = vt(E);

        function k() {
            clearTimeout(p), m && m.disconnect(), m = null
        }
        return function R(N, _) {
            N === void 0 && (N = !1), _ === void 0 && (_ = 1), k();
            const {
                left: D,
                top: I,
                width: F,
                height: Q
            } = E.getBoundingClientRect();
            if (N || d(), !F || !Q) return;
            const z = {
                rootMargin: -uo(I) + "px " + -uo(x.clientWidth - (D + F)) + "px " + -uo(x.clientHeight - (I + Q)) + "px " + -uo(D) + "px",
                threshold: Fn(0, is(1, _)) || 1
            };
            let U = !0;

            function J(B) {
                const X = B[0].intersectionRatio;
                if (X !== _) {
                    if (!U) return R();
                    X ? R(!1, X) : p = setTimeout(() => {
                        R(!1, 1e-7)
                    }, 100)
                }
                U = !1
            }
            try {
                m = new IntersectionObserver(J, { ...z,
                    root: x.ownerDocument
                })
            } catch {
                m = new IntersectionObserver(J, z)
            }
            m.observe(E)
        }(!0), k
    }(a, n) : null;
    let h, y = -1,
        g = null;
    l && (g = new ResizeObserver(E => {
        let [d] = E;
        d && d.target === a && g && (g.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
            g && g.observe(t)
        })), n()
    }), a && !u && g.observe(a), g.observe(t));
    let w = u ? fn(e) : null;
    return u && function E() {
        const d = fn(e);
        !w || d.x === w.x && d.y === w.y && d.width === w.width && d.height === w.height || n(), w = d, h = requestAnimationFrame(E)
    }(), n(), () => {
        f.forEach(E => {
            o && E.removeEventListener("scroll", n), i && E.removeEventListener("resize", n)
        }), c && c(), g && g.disconnect(), g = null, u && cancelAnimationFrame(h)
    }
}
const V0 = (e, t, n) => {
    const r = new Map,
        o = {
            platform: H0,
            ...n
        },
        i = { ...o.platform,
            _c: r
        };
    return A0(e, t, { ...o,
        platform: i
    })
};
var jp = {
        exports: {}
    },
    Fe = {},
    Lp = {
        exports: {}
    },
    Ap = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(T, O) {
        var j = T.length;
        T.push(O);
        e: for (; 0 < j;) {
            var A = j - 1 >>> 1,
                M = T[A];
            if (0 < o(M, O)) T[A] = O, T[j] = M, j = A;
            else break e
        }
    }

    function n(T) {
        return T.length === 0 ? null : T[0]
    }

    function r(T) {
        if (T.length === 0) return null;
        var O = T[0],
            j = T.pop();
        if (j !== O) {
            T[0] = j;
            e: for (var A = 0, M = T.length, oe = M >>> 1; A < oe;) {
                var W = 2 * (A + 1) - 1,
                    ce = T[W],
                    fe = W + 1,
                    bt = T[fe];
                if (0 > o(ce, j)) fe < M && 0 > o(bt, ce) ? (T[A] = bt, T[fe] = j, A = fe) : (T[A] = ce, T[W] = j, A = W);
                else if (fe < M && 0 > o(bt, j)) T[A] = bt, T[fe] = j, A = fe;
                else break e
            }
        }
        return O
    }

    function o(T, O) {
        var j = T.sortIndex - O.sortIndex;
        return j !== 0 ? j : T.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var l = Date,
            s = l.now();
        e.unstable_now = function() {
            return l.now() - s
        }
    }
    var u = [],
        a = [],
        f = 1,
        c = null,
        h = 3,
        y = !1,
        g = !1,
        w = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        d = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(T) {
        for (var O = n(a); O !== null;) {
            if (O.callback === null) r(a);
            else if (O.startTime <= T) r(a), O.sortIndex = O.expirationTime, t(u, O);
            else break;
            O = n(a)
        }
    }

    function x(T) {
        if (w = !1, m(T), !g)
            if (n(u) !== null) g = !0, B(k);
            else {
                var O = n(a);
                O !== null && X(x, O.startTime - T)
            }
    }

    function k(T, O) {
        g = !1, w && (w = !1, d(_), _ = -1), y = !0;
        var j = h;
        try {
            for (m(O), c = n(u); c !== null && (!(c.expirationTime > O) || T && !F());) {
                var A = c.callback;
                if (typeof A == "function") {
                    c.callback = null, h = c.priorityLevel;
                    var M = A(c.expirationTime <= O);
                    O = e.unstable_now(), typeof M == "function" ? c.callback = M : c === n(u) && r(u), m(O)
                } else r(u);
                c = n(u)
            }
            if (c !== null) var oe = !0;
            else {
                var W = n(a);
                W !== null && X(x, W.startTime - O), oe = !1
            }
            return oe
        } finally {
            c = null, h = j, y = !1
        }
    }
    var R = !1,
        N = null,
        _ = -1,
        D = 5,
        I = -1;

    function F() {
        return !(e.unstable_now() - I < D)
    }

    function Q() {
        if (N !== null) {
            var T = e.unstable_now();
            I = T;
            var O = !0;
            try {
                O = N(!0, T)
            } finally {
                O ? z() : (R = !1, N = null)
            }
        } else R = !1
    }
    var z;
    if (typeof p == "function") z = function() {
        p(Q)
    };
    else if (typeof MessageChannel < "u") {
        var U = new MessageChannel,
            J = U.port2;
        U.port1.onmessage = Q, z = function() {
            J.postMessage(null)
        }
    } else z = function() {
        E(Q, 0)
    };

    function B(T) {
        N = T, R || (R = !0, z())
    }

    function X(T, O) {
        _ = E(function() {
            T(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
        T.callback = null
    }, e.unstable_continueExecution = function() {
        g || y || (g = !0, B(k))
    }, e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < T ? Math.floor(1e3 / T) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(T) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var O = 3;
                break;
            default:
                O = h
        }
        var j = h;
        h = O;
        try {
            return T()
        } finally {
            h = j
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(T, O) {
        switch (T) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                T = 3
        }
        var j = h;
        h = T;
        try {
            return O()
        } finally {
            h = j
        }
    }, e.unstable_scheduleCallback = function(T, O, j) {
        var A = e.unstable_now();
        switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? A + j : A) : j = A, T) {
            case 1:
                var M = -1;
                break;
            case 2:
                M = 250;
                break;
            case 5:
                M = 1073741823;
                break;
            case 4:
                M = 1e4;
                break;
            default:
                M = 5e3
        }
        return M = j + M, T = {
            id: f++,
            callback: O,
            priorityLevel: T,
            startTime: j,
            expirationTime: M,
            sortIndex: -1
        }, j > A ? (T.sortIndex = j, t(a, T), n(u) === null && T === n(a) && (w ? (d(_), _ = -1) : w = !0, X(x, j - A))) : (T.sortIndex = M, t(u, T), g || y || (g = !0, B(k))), T
    }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(T) {
        var O = h;
        return function() {
            var j = h;
            h = O;
            try {
                return T.apply(this, arguments)
            } finally {
                h = j
            }
        }
    }
})(Ap);
Lp.exports = Ap;
var W0 = Lp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ip = S,
    Ie = W0;

function P(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Fp = new Set,
    Ar = {};

function yn(e, t) {
    Qn(e, t), Qn(e + "Capture", t)
}

function Qn(e, t) {
    for (Ar[e] = t, e = 0; e < t.length; e++) Fp.add(t[e])
}
var yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ls = Object.prototype.hasOwnProperty,
    K0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Kc = {},
    Qc = {};

function Q0(e) {
    return ls.call(Qc, e) ? !0 : ls.call(Kc, e) ? !1 : K0.test(e) ? Qc[e] = !0 : (Kc[e] = !0, !1)
}

function b0(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function q0(e, t, n, r) {
    if (t === null || typeof t > "u" || b0(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Re(e, t, n, r, o, i, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ge[e] = new Re(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ge[t] = new Re(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ge[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ge[e] = new Re(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ge[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ge[e] = new Re(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ge[e] = new Re(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ge[e] = new Re(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ge[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var xa = /[\-:]([a-z])/g;

function Sa(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(xa, Sa);
    ge[t] = new Re(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(xa, Sa);
    ge[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(xa, Sa);
    ge[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ge[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ge.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ge[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ea(e, t, n, r) {
    var o = ge.hasOwnProperty(t) ? ge[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (q0(t, n, o, r) && (n = null), r || o === null ? Q0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Et = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ao = Symbol.for("react.element"),
    kn = Symbol.for("react.portal"),
    Cn = Symbol.for("react.fragment"),
    ka = Symbol.for("react.strict_mode"),
    ss = Symbol.for("react.profiler"),
    Mp = Symbol.for("react.provider"),
    Dp = Symbol.for("react.context"),
    Ca = Symbol.for("react.forward_ref"),
    us = Symbol.for("react.suspense"),
    as = Symbol.for("react.suspense_list"),
    Ra = Symbol.for("react.memo"),
    Rt = Symbol.for("react.lazy"),
    zp = Symbol.for("react.offscreen"),
    bc = Symbol.iterator;

function ir(e) {
    return e === null || typeof e != "object" ? null : (e = bc && e[bc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var te = Object.assign,
    wl;

function pr(e) {
    if (wl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        wl = t && t[1] || ""
    }
    return `
` + wl + e
}
var xl = !1;

function Sl(e, t) {
    if (!e || xl) return "";
    xl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var o = a.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s];) s--;
            for (; 1 <= l && 0 <= s; l--, s--)
                if (o[l] !== i[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if (l--, s--, 0 > s || o[l] !== i[s]) {
                                var u = `
` + o[l].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= l && 0 <= s);
                    break
                }
        }
    } finally {
        xl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? pr(e) : ""
}

function G0(e) {
    switch (e.tag) {
        case 5:
            return pr(e.type);
        case 16:
            return pr("Lazy");
        case 13:
            return pr("Suspense");
        case 19:
            return pr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Sl(e.type, !1), e;
        case 11:
            return e = Sl(e.type.render, !1), e;
        case 1:
            return e = Sl(e.type, !0), e;
        default:
            return ""
    }
}

function cs(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Cn:
            return "Fragment";
        case kn:
            return "Portal";
        case ss:
            return "Profiler";
        case ka:
            return "StrictMode";
        case us:
            return "Suspense";
        case as:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Dp:
            return (e.displayName || "Context") + ".Consumer";
        case Mp:
            return (e._context.displayName || "Context") + ".Provider";
        case Ca:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ra:
            return t = e.displayName || null, t !== null ? t : cs(e.type) || "Memo";
        case Rt:
            t = e._payload, e = e._init;
            try {
                return cs(e(t))
            } catch {}
    }
    return null
}

function X0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return cs(t);
        case 8:
            return t === ka ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Ht(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Bp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Y0(e) {
    var t = Bp(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(l) {
                r = "" + l, i.call(this, l)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function co(e) {
    e._valueTracker || (e._valueTracker = Y0(e))
}

function $p(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Bp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ti(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function fs(e, t) {
    var n = t.checked;
    return te({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function qc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ht(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Up(e, t) {
    t = t.checked, t != null && Ea(e, "checked", t, !1)
}

function ds(e, t) {
    Up(e, t);
    var n = Ht(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ps(e, t.type, n) : t.hasOwnProperty("defaultValue") && ps(e, t.type, Ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Gc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ps(e, t, n) {
    (t !== "number" || ti(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var hr = Array.isArray;

function Dn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ht(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function hs(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
    return te({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Xc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(P(92));
            if (hr(n)) {
                if (1 < n.length) throw Error(P(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Ht(n)
    }
}

function Hp(e, t) {
    var n = Ht(t.value),
        r = Ht(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Yc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Vp(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ms(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Vp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var fo, Wp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (fo = fo || document.createElement("div"), fo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fo.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Ir(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var yr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    J0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function(e) {
    J0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), yr[t] = yr[e]
    })
});

function Kp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || yr.hasOwnProperty(e) && yr[e] ? ("" + t).trim() : t + "px"
}

function Qp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Kp(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var Z0 = te({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function vs(e, t) {
    if (t) {
        if (Z0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(P(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(P(62))
    }
}

function gs(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ys = null;

function Pa(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var ws = null,
    zn = null,
    Bn = null;

function Jc(e) {
    if (e = oo(e)) {
        if (typeof ws != "function") throw Error(P(280));
        var t = e.stateNode;
        t && (t = Zi(t), ws(e.stateNode, e.type, t))
    }
}

function bp(e) {
    zn ? Bn ? Bn.push(e) : Bn = [e] : zn = e
}

function qp() {
    if (zn) {
        var e = zn,
            t = Bn;
        if (Bn = zn = null, Jc(e), t)
            for (e = 0; e < t.length; e++) Jc(t[e])
    }
}

function Gp(e, t) {
    return e(t)
}

function Xp() {}
var El = !1;

function Yp(e, t, n) {
    if (El) return e(t, n);
    El = !0;
    try {
        return Gp(e, t, n)
    } finally {
        El = !1, (zn !== null || Bn !== null) && (Xp(), qp())
    }
}

function Fr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Zi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(P(231, t, typeof n));
    return n
}
var xs = !1;
if (yt) try {
    var lr = {};
    Object.defineProperty(lr, "passive", {
        get: function() {
            xs = !0
        }
    }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr)
} catch {
    xs = !1
}

function e1(e, t, n, r, o, i, l, s, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (f) {
        this.onError(f)
    }
}
var wr = !1,
    ni = null,
    ri = !1,
    Ss = null,
    t1 = {
        onError: function(e) {
            wr = !0, ni = e
        }
    };

function n1(e, t, n, r, o, i, l, s, u) {
    wr = !1, ni = null, e1.apply(t1, arguments)
}

function r1(e, t, n, r, o, i, l, s, u) {
    if (n1.apply(this, arguments), wr) {
        if (wr) {
            var a = ni;
            wr = !1, ni = null
        } else throw Error(P(198));
        ri || (ri = !0, Ss = a)
    }
}

function wn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Jp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Zc(e) {
    if (wn(e) !== e) throw Error(P(188))
}

function o1(e) {
    var t = e.alternate;
    if (!t) {
        if (t = wn(e), t === null) throw Error(P(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Zc(o), e;
                if (i === r) return Zc(o), t;
                i = i.sibling
            }
            throw Error(P(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var l = !1, s = o.child; s;) {
                if (s === n) {
                    l = !0, n = o, r = i;
                    break
                }
                if (s === r) {
                    l = !0, r = o, n = i;
                    break
                }
                s = s.sibling
            }
            if (!l) {
                for (s = i.child; s;) {
                    if (s === n) {
                        l = !0, n = i, r = o;
                        break
                    }
                    if (s === r) {
                        l = !0, r = i, n = o;
                        break
                    }
                    s = s.sibling
                }
                if (!l) throw Error(P(189))
            }
        }
        if (n.alternate !== r) throw Error(P(190))
    }
    if (n.tag !== 3) throw Error(P(188));
    return n.stateNode.current === n ? e : t
}

function Zp(e) {
    return e = o1(e), e !== null ? eh(e) : null
}

function eh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = eh(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var th = Ie.unstable_scheduleCallback,
    ef = Ie.unstable_cancelCallback,
    i1 = Ie.unstable_shouldYield,
    l1 = Ie.unstable_requestPaint,
    re = Ie.unstable_now,
    s1 = Ie.unstable_getCurrentPriorityLevel,
    Na = Ie.unstable_ImmediatePriority,
    nh = Ie.unstable_UserBlockingPriority,
    oi = Ie.unstable_NormalPriority,
    u1 = Ie.unstable_LowPriority,
    rh = Ie.unstable_IdlePriority,
    Gi = null,
    lt = null;

function a1(e) {
    if (lt && typeof lt.onCommitFiberRoot == "function") try {
        lt.onCommitFiberRoot(Gi, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : d1,
    c1 = Math.log,
    f1 = Math.LN2;

function d1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (c1(e) / f1 | 0) | 0
}
var po = 64,
    ho = 4194304;

function mr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function ii(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        l = n & 268435455;
    if (l !== 0) {
        var s = l & ~o;
        s !== 0 ? r = mr(s) : (i &= l, i !== 0 && (r = mr(i)))
    } else l = n & ~o, l !== 0 ? r = mr(l) : i !== 0 && (r = mr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ye(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function p1(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function h1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var l = 31 - Ye(i),
            s = 1 << l,
            u = o[l];
        u === -1 ? (!(s & n) || s & r) && (o[l] = p1(s, t)) : u <= t && (e.expiredLanes |= s), i &= ~s
    }
}

function Es(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function oh() {
    var e = po;
    return po <<= 1, !(po & 4194240) && (po = 64), e
}

function kl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function no(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ye(t), e[t] = n
}

function m1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - Ye(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function Ta(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Ye(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var K = 0;

function ih(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var lh, _a, sh, uh, ah, ks = !1,
    mo = [],
    At = null,
    It = null,
    Ft = null,
    Mr = new Map,
    Dr = new Map,
    Nt = [],
    v1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function tf(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            At = null;
            break;
        case "dragenter":
        case "dragleave":
            It = null;
            break;
        case "mouseover":
        case "mouseout":
            Ft = null;
            break;
        case "pointerover":
        case "pointerout":
            Mr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Dr.delete(t.pointerId)
    }
}

function sr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = oo(t), t !== null && _a(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function g1(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return At = sr(At, e, t, n, r, o), !0;
        case "dragenter":
            return It = sr(It, e, t, n, r, o), !0;
        case "mouseover":
            return Ft = sr(Ft, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return Mr.set(i, sr(Mr.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, Dr.set(i, sr(Dr.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function ch(e) {
    var t = tn(e.target);
    if (t !== null) {
        var n = wn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Jp(n), t !== null) {
                    e.blockedOn = t, ah(e.priority, function() {
                        sh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Io(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Cs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ys = r, n.target.dispatchEvent(r), ys = null
        } else return t = oo(n), t !== null && _a(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function nf(e, t, n) {
    Io(e) && n.delete(t)
}

function y1() {
    ks = !1, At !== null && Io(At) && (At = null), It !== null && Io(It) && (It = null), Ft !== null && Io(Ft) && (Ft = null), Mr.forEach(nf), Dr.forEach(nf)
}

function ur(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ks || (ks = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, y1)))
}

function zr(e) {
    function t(o) {
        return ur(o, e)
    }
    if (0 < mo.length) {
        ur(mo[0], e);
        for (var n = 1; n < mo.length; n++) {
            var r = mo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (At !== null && ur(At, e), It !== null && ur(It, e), Ft !== null && ur(Ft, e), Mr.forEach(t), Dr.forEach(t), n = 0; n < Nt.length; n++) r = Nt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Nt.length && (n = Nt[0], n.blockedOn === null);) ch(n), n.blockedOn === null && Nt.shift()
}
var $n = Et.ReactCurrentBatchConfig,
    li = !0;

function w1(e, t, n, r) {
    var o = K,
        i = $n.transition;
    $n.transition = null;
    try {
        K = 1, Oa(e, t, n, r)
    } finally {
        K = o, $n.transition = i
    }
}

function x1(e, t, n, r) {
    var o = K,
        i = $n.transition;
    $n.transition = null;
    try {
        K = 4, Oa(e, t, n, r)
    } finally {
        K = o, $n.transition = i
    }
}

function Oa(e, t, n, r) {
    if (li) {
        var o = Cs(e, t, n, r);
        if (o === null) Al(e, t, r, si, n), tf(e, r);
        else if (g1(o, e, t, n, r)) r.stopPropagation();
        else if (tf(e, r), t & 4 && -1 < v1.indexOf(e)) {
            for (; o !== null;) {
                var i = oo(o);
                if (i !== null && lh(i), i = Cs(e, t, n, r), i === null && Al(e, t, r, si, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else Al(e, t, r, null, n)
    }
}
var si = null;

function Cs(e, t, n, r) {
    if (si = null, e = Pa(r), e = tn(e), e !== null)
        if (t = wn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Jp(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return si = e, null
}

function fh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (s1()) {
                case Na:
                    return 1;
                case nh:
                    return 4;
                case oi:
                case u1:
                    return 16;
                case rh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Ot = null,
    ja = null,
    Fo = null;

function dh() {
    if (Fo) return Fo;
    var e, t = ja,
        n = t.length,
        r, o = "value" in Ot ? Ot.value : Ot.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
    return Fo = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Mo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function vo() {
    return !0
}

function rf() {
    return !1
}

function Me(e) {
    function t(n, r, o, i, l) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vo : rf, this.isPropagationStopped = rf, this
    }
    return te(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vo)
        },
        persist: function() {},
        isPersistent: vo
    }), t
}
var nr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    La = Me(nr),
    ro = te({}, nr, {
        view: 0,
        detail: 0
    }),
    S1 = Me(ro),
    Cl, Rl, ar, Xi = te({}, ro, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Aa,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== ar && (ar && e.type === "mousemove" ? (Cl = e.screenX - ar.screenX, Rl = e.screenY - ar.screenY) : Rl = Cl = 0, ar = e), Cl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Rl
        }
    }),
    of = Me(Xi),
    E1 = te({}, Xi, {
        dataTransfer: 0
    }),
    k1 = Me(E1),
    C1 = te({}, ro, {
        relatedTarget: 0
    }),
    Pl = Me(C1),
    R1 = te({}, nr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    P1 = Me(R1),
    N1 = te({}, nr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    T1 = Me(N1),
    _1 = te({}, nr, {
        data: 0
    }),
    lf = Me(_1),
    O1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    j1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    L1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function A1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = L1[e]) ? !!t[e] : !1
}

function Aa() {
    return A1
}
var I1 = te({}, ro, {
        key: function(e) {
            if (e.key) {
                var t = O1[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Mo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? j1[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Aa,
        charCode: function(e) {
            return e.type === "keypress" ? Mo(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Mo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    F1 = Me(I1),
    M1 = te({}, Xi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    sf = Me(M1),
    D1 = te({}, ro, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Aa
    }),
    z1 = Me(D1),
    B1 = te({}, nr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    $1 = Me(B1),
    U1 = te({}, Xi, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    H1 = Me(U1),
    V1 = [9, 13, 27, 32],
    Ia = yt && "CompositionEvent" in window,
    xr = null;
yt && "documentMode" in document && (xr = document.documentMode);
var W1 = yt && "TextEvent" in window && !xr,
    ph = yt && (!Ia || xr && 8 < xr && 11 >= xr),
    uf = String.fromCharCode(32),
    af = !1;

function hh(e, t) {
    switch (e) {
        case "keyup":
            return V1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function mh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Rn = !1;

function K1(e, t) {
    switch (e) {
        case "compositionend":
            return mh(t);
        case "keypress":
            return t.which !== 32 ? null : (af = !0, uf);
        case "textInput":
            return e = t.data, e === uf && af ? null : e;
        default:
            return null
    }
}

function Q1(e, t) {
    if (Rn) return e === "compositionend" || !Ia && hh(e, t) ? (e = dh(), Fo = ja = Ot = null, Rn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return ph && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var b1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function cf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!b1[e.type] : t === "textarea"
}

function vh(e, t, n, r) {
    bp(r), t = ui(t, "onChange"), 0 < t.length && (n = new La("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Sr = null,
    Br = null;

function q1(e) {
    Nh(e, 0)
}

function Yi(e) {
    var t = Tn(e);
    if ($p(t)) return e
}

function G1(e, t) {
    if (e === "change") return t
}
var gh = !1;
if (yt) {
    var Nl;
    if (yt) {
        var Tl = "oninput" in document;
        if (!Tl) {
            var ff = document.createElement("div");
            ff.setAttribute("oninput", "return;"), Tl = typeof ff.oninput == "function"
        }
        Nl = Tl
    } else Nl = !1;
    gh = Nl && (!document.documentMode || 9 < document.documentMode)
}

function df() {
    Sr && (Sr.detachEvent("onpropertychange", yh), Br = Sr = null)
}

function yh(e) {
    if (e.propertyName === "value" && Yi(Br)) {
        var t = [];
        vh(t, Br, e, Pa(e)), Yp(q1, t)
    }
}

function X1(e, t, n) {
    e === "focusin" ? (df(), Sr = t, Br = n, Sr.attachEvent("onpropertychange", yh)) : e === "focusout" && df()
}

function Y1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Yi(Br)
}

function J1(e, t) {
    if (e === "click") return Yi(t)
}

function Z1(e, t) {
    if (e === "input" || e === "change") return Yi(t)
}

function ew(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var et = typeof Object.is == "function" ? Object.is : ew;

function $r(e, t) {
    if (et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!ls.call(t, o) || !et(e[o], t[o])) return !1
    }
    return !0
}

function pf(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function hf(e, t) {
    var n = pf(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = pf(n)
    }
}

function wh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? wh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function xh() {
    for (var e = window, t = ti(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = ti(e.document)
    }
    return t
}

function Fa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function tw(e) {
    var t = xh(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && wh(n.ownerDocument.documentElement, n)) {
        if (r !== null && Fa(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = hf(n, i);
                var l = hf(n, r);
                o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var nw = yt && "documentMode" in document && 11 >= document.documentMode,
    Pn = null,
    Rs = null,
    Er = null,
    Ps = !1;

function mf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ps || Pn == null || Pn !== ti(r) || (r = Pn, "selectionStart" in r && Fa(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Er && $r(Er, r) || (Er = r, r = ui(Rs, "onSelect"), 0 < r.length && (t = new La("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Pn)))
}

function go(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Nn = {
        animationend: go("Animation", "AnimationEnd"),
        animationiteration: go("Animation", "AnimationIteration"),
        animationstart: go("Animation", "AnimationStart"),
        transitionend: go("Transition", "TransitionEnd")
    },
    _l = {},
    Sh = {};
yt && (Sh = document.createElement("div").style, "AnimationEvent" in window || (delete Nn.animationend.animation, delete Nn.animationiteration.animation, delete Nn.animationstart.animation), "TransitionEvent" in window || delete Nn.transitionend.transition);

function Ji(e) {
    if (_l[e]) return _l[e];
    if (!Nn[e]) return e;
    var t = Nn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Sh) return _l[e] = t[n];
    return e
}
var Eh = Ji("animationend"),
    kh = Ji("animationiteration"),
    Ch = Ji("animationstart"),
    Rh = Ji("transitionend"),
    Ph = new Map,
    vf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Wt(e, t) {
    Ph.set(e, t), yn(t, [e])
}
for (var Ol = 0; Ol < vf.length; Ol++) {
    var jl = vf[Ol],
        rw = jl.toLowerCase(),
        ow = jl[0].toUpperCase() + jl.slice(1);
    Wt(rw, "on" + ow)
}
Wt(Eh, "onAnimationEnd");
Wt(kh, "onAnimationIteration");
Wt(Ch, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Rh, "onTransitionEnd");
Qn("onMouseEnter", ["mouseout", "mouseover"]);
Qn("onMouseLeave", ["mouseout", "mouseover"]);
Qn("onPointerEnter", ["pointerout", "pointerover"]);
Qn("onPointerLeave", ["pointerout", "pointerover"]);
yn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    iw = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));

function gf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, r1(r, t, void 0, e), e.currentTarget = null
}

function Nh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var s = r[l],
                        u = s.instance,
                        a = s.currentTarget;
                    if (s = s.listener, u !== i && o.isPropagationStopped()) break e;
                    gf(o, s, a), i = u
                } else
                    for (l = 0; l < r.length; l++) {
                        if (s = r[l], u = s.instance, a = s.currentTarget, s = s.listener, u !== i && o.isPropagationStopped()) break e;
                        gf(o, s, a), i = u
                    }
        }
    }
    if (ri) throw e = Ss, ri = !1, Ss = null, e
}

function q(e, t) {
    var n = t[js];
    n === void 0 && (n = t[js] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Th(t, e, 2, !1), n.add(r))
}

function Ll(e, t, n) {
    var r = 0;
    t && (r |= 4), Th(n, e, r, t)
}
var yo = "_reactListening" + Math.random().toString(36).slice(2);

function Ur(e) {
    if (!e[yo]) {
        e[yo] = !0, Fp.forEach(function(n) {
            n !== "selectionchange" && (iw.has(n) || Ll(n, !1, e), Ll(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[yo] || (t[yo] = !0, Ll("selectionchange", !1, t))
    }
}

function Th(e, t, n, r) {
    switch (fh(t)) {
        case 1:
            var o = w1;
            break;
        case 4:
            o = x1;
            break;
        default:
            o = Oa
    }
    n = o.bind(null, t, n, e), o = void 0, !xs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function Al(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
            var s = r.stateNode.containerInfo;
            if (s === o || s.nodeType === 8 && s.parentNode === o) break;
            if (l === 4)
                for (l = r.return; l !== null;) {
                    var u = l.tag;
                    if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
                    l = l.return
                }
            for (; s !== null;) {
                if (l = tn(s), l === null) return;
                if (u = l.tag, u === 5 || u === 6) {
                    r = i = l;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    Yp(function() {
        var a = i,
            f = Pa(n),
            c = [];
        e: {
            var h = Ph.get(e);
            if (h !== void 0) {
                var y = La,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (Mo(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = F1;
                        break;
                    case "focusin":
                        g = "focus", y = Pl;
                        break;
                    case "focusout":
                        g = "blur", y = Pl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Pl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = of ;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = k1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = z1;
                        break;
                    case Eh:
                    case kh:
                    case Ch:
                        y = P1;
                        break;
                    case Rh:
                        y = $1;
                        break;
                    case "scroll":
                        y = S1;
                        break;
                    case "wheel":
                        y = H1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = T1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = sf
                }
                var w = (t & 4) !== 0,
                    E = !w && e === "scroll",
                    d = w ? h !== null ? h + "Capture" : null : h;
                w = [];
                for (var p = a, m; p !== null;) {
                    m = p;
                    var x = m.stateNode;
                    if (m.tag === 5 && x !== null && (m = x, d !== null && (x = Fr(p, d), x != null && w.push(Hr(p, x, m)))), E) break;
                    p = p.return
                }
                0 < w.length && (h = new y(h, g, null, n, f), c.push({
                    event: h,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== ys && (g = n.relatedTarget || n.fromElement) && (tn(g) || g[wt])) break e;
                if ((y || h) && (h = f.window === f ? f : (h = f.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = a, g = g ? tn(g) : null, g !== null && (E = wn(g), g !== E || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = a), y !== g)) {
                    if (w = of , x = "onMouseLeave", d = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = sf, x = "onPointerLeave", d = "onPointerEnter", p = "pointer"), E = y == null ? h : Tn(y), m = g == null ? h : Tn(g), h = new w(x, p + "leave", y, n, f), h.target = E, h.relatedTarget = m, x = null, tn(f) === a && (w = new w(d, p + "enter", g, n, f), w.target = m, w.relatedTarget = E, x = w), E = x, y && g) t: {
                        for (w = y, d = g, p = 0, m = w; m; m = xn(m)) p++;
                        for (m = 0, x = d; x; x = xn(x)) m++;
                        for (; 0 < p - m;) w = xn(w),
                        p--;
                        for (; 0 < m - p;) d = xn(d),
                        m--;
                        for (; p--;) {
                            if (w === d || d !== null && w === d.alternate) break t;
                            w = xn(w), d = xn(d)
                        }
                        w = null
                    }
                    else w = null;
                    y !== null && yf(c, h, y, w, !1), g !== null && E !== null && yf(c, E, g, w, !0)
                }
            }
            e: {
                if (h = a ? Tn(a) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var k = G1;
                else if (cf(h))
                    if (gh) k = Z1;
                    else {
                        k = Y1;
                        var R = X1
                    }
                else(y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = J1);
                if (k && (k = k(e, a))) {
                    vh(c, k, n, f);
                    break e
                }
                R && R(e, h, a),
                e === "focusout" && (R = h._wrapperState) && R.controlled && h.type === "number" && ps(h, "number", h.value)
            }
            switch (R = a ? Tn(a) : window, e) {
                case "focusin":
                    (cf(R) || R.contentEditable === "true") && (Pn = R, Rs = a, Er = null);
                    break;
                case "focusout":
                    Er = Rs = Pn = null;
                    break;
                case "mousedown":
                    Ps = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ps = !1, mf(c, n, f);
                    break;
                case "selectionchange":
                    if (nw) break;
                case "keydown":
                case "keyup":
                    mf(c, n, f)
            }
            var N;
            if (Ia) e: {
                switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                }
                _ = void 0
            }
            else Rn ? hh(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");_ && (ph && n.locale !== "ko" && (Rn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Rn && (N = dh()) : (Ot = f, ja = "value" in Ot ? Ot.value : Ot.textContent, Rn = !0)), R = ui(a, _), 0 < R.length && (_ = new lf(_, e, null, n, f), c.push({
                event: _,
                listeners: R
            }), N ? _.data = N : (N = mh(n), N !== null && (_.data = N)))),
            (N = W1 ? K1(e, n) : Q1(e, n)) && (a = ui(a, "onBeforeInput"), 0 < a.length && (f = new lf("onBeforeInput", "beforeinput", null, n, f), c.push({
                event: f,
                listeners: a
            }), f.data = N))
        }
        Nh(c, t)
    })
}

function Hr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function ui(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = Fr(e, n), i != null && r.unshift(Hr(e, i, o)), i = Fr(e, t), i != null && r.push(Hr(e, i, o))), e = e.return
    }
    return r
}

function xn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function yf(e, t, n, r, o) {
    for (var i = t._reactName, l = []; n !== null && n !== r;) {
        var s = n,
            u = s.alternate,
            a = s.stateNode;
        if (u !== null && u === r) break;
        s.tag === 5 && a !== null && (s = a, o ? (u = Fr(n, i), u != null && l.unshift(Hr(n, u, s))) : o || (u = Fr(n, i), u != null && l.push(Hr(n, u, s)))), n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var lw = /\r\n?/g,
    sw = /\u0000|\uFFFD/g;

function wf(e) {
    return (typeof e == "string" ? e : "" + e).replace(lw, `
`).replace(sw, "")
}

function wo(e, t, n) {
    if (t = wf(t), wf(e) !== t && n) throw Error(P(425))
}

function ai() {}
var Ns = null,
    Ts = null;

function _s(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Os = typeof setTimeout == "function" ? setTimeout : void 0,
    uw = typeof clearTimeout == "function" ? clearTimeout : void 0,
    xf = typeof Promise == "function" ? Promise : void 0,
    aw = typeof queueMicrotask == "function" ? queueMicrotask : typeof xf < "u" ? function(e) {
        return xf.resolve(null).then(e).catch(cw)
    } : Os;

function cw(e) {
    setTimeout(function() {
        throw e
    })
}

function Il(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), zr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    zr(t)
}

function Mt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Sf(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var rr = Math.random().toString(36).slice(2),
    rt = "__reactFiber$" + rr,
    Vr = "__reactProps$" + rr,
    wt = "__reactContainer$" + rr,
    js = "__reactEvents$" + rr,
    fw = "__reactListeners$" + rr,
    dw = "__reactHandles$" + rr;

function tn(e) {
    var t = e[rt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[wt] || n[rt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Sf(e); e !== null;) {
                    if (n = e[rt]) return n;
                    e = Sf(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function oo(e) {
    return e = e[rt] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Tn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(P(33))
}

function Zi(e) {
    return e[Vr] || null
}
var Ls = [],
    _n = -1;

function Kt(e) {
    return {
        current: e
    }
}

function G(e) {
    0 > _n || (e.current = Ls[_n], Ls[_n] = null, _n--)
}

function b(e, t) {
    _n++, Ls[_n] = e.current, e.current = t
}
var Vt = {},
    Se = Kt(Vt),
    Te = Kt(!1),
    dn = Vt;

function bn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Vt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function _e(e) {
    return e = e.childContextTypes, e != null
}

function ci() {
    G(Te), G(Se)
}

function Ef(e, t, n) {
    if (Se.current !== Vt) throw Error(P(168));
    b(Se, t), b(Te, n)
}

function _h(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(P(108, X0(e) || "Unknown", o));
    return te({}, n, r)
}

function fi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, dn = Se.current, b(Se, e), b(Te, Te.current), !0
}

function kf(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(P(169));
    n ? (e = _h(e, t, dn), r.__reactInternalMemoizedMergedChildContext = e, G(Te), G(Se), b(Se, e)) : G(Te), b(Te, n)
}
var ct = null,
    el = !1,
    Fl = !1;

function Oh(e) {
    ct === null ? ct = [e] : ct.push(e)
}

function pw(e) {
    el = !0, Oh(e)
}

function Qt() {
    if (!Fl && ct !== null) {
        Fl = !0;
        var e = 0,
            t = K;
        try {
            var n = ct;
            for (K = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            ct = null, el = !1
        } catch (o) {
            throw ct !== null && (ct = ct.slice(e + 1)), th(Na, Qt), o
        } finally {
            K = t, Fl = !1
        }
    }
    return null
}
var On = [],
    jn = 0,
    di = null,
    pi = 0,
    De = [],
    ze = 0,
    pn = null,
    dt = 1,
    pt = "";

function Yt(e, t) {
    On[jn++] = pi, On[jn++] = di, di = e, pi = t
}

function jh(e, t, n) {
    De[ze++] = dt, De[ze++] = pt, De[ze++] = pn, pn = e;
    var r = dt;
    e = pt;
    var o = 32 - Ye(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - Ye(t) + o;
    if (30 < i) {
        var l = o - o % 5;
        i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, dt = 1 << 32 - Ye(t) + o | n << o | r, pt = i + e
    } else dt = 1 << i | n << o | r, pt = e
}

function Ma(e) {
    e.return !== null && (Yt(e, 1), jh(e, 1, 0))
}

function Da(e) {
    for (; e === di;) di = On[--jn], On[jn] = null, pi = On[--jn], On[jn] = null;
    for (; e === pn;) pn = De[--ze], De[ze] = null, pt = De[--ze], De[ze] = null, dt = De[--ze], De[ze] = null
}
var Ae = null,
    Le = null,
    Y = !1,
    Ge = null;

function Lh(e, t) {
    var n = Be(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Cf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, Le = Mt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, Le = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pn !== null ? {
                id: dt,
                overflow: pt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, Le = null, !0) : !1;
        default:
            return !1
    }
}

function As(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Is(e) {
    if (Y) {
        var t = Le;
        if (t) {
            var n = t;
            if (!Cf(e, t)) {
                if (As(e)) throw Error(P(418));
                t = Mt(n.nextSibling);
                var r = Ae;
                t && Cf(e, t) ? Lh(r, n) : (e.flags = e.flags & -4097 | 2, Y = !1, Ae = e)
            }
        } else {
            if (As(e)) throw Error(P(418));
            e.flags = e.flags & -4097 | 2, Y = !1, Ae = e
        }
    }
}

function Rf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ae = e
}

function xo(e) {
    if (e !== Ae) return !1;
    if (!Y) return Rf(e), Y = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_s(e.type, e.memoizedProps)), t && (t = Le)) {
        if (As(e)) throw Ah(), Error(P(418));
        for (; t;) Lh(e, t), t = Mt(t.nextSibling)
    }
    if (Rf(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Le = Mt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Le = null
        }
    } else Le = Ae ? Mt(e.stateNode.nextSibling) : null;
    return !0
}

function Ah() {
    for (var e = Le; e;) e = Mt(e.nextSibling)
}

function qn() {
    Le = Ae = null, Y = !1
}

function za(e) {
    Ge === null ? Ge = [e] : Ge.push(e)
}
var hw = Et.ReactCurrentBatchConfig;

function be(e, t) {
    if (e && e.defaultProps) {
        t = te({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var hi = Kt(null),
    mi = null,
    Ln = null,
    Ba = null;

function $a() {
    Ba = Ln = mi = null
}

function Ua(e) {
    var t = hi.current;
    G(hi), e._currentValue = t
}

function Fs(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Un(e, t) {
    mi = e, Ba = Ln = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0), e.firstContext = null)
}

function Ve(e) {
    var t = e._currentValue;
    if (Ba !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Ln === null) {
            if (mi === null) throw Error(P(308));
            Ln = e, mi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Ln = Ln.next = e;
    return t
}
var nn = null;

function Ha(e) {
    nn === null ? nn = [e] : nn.push(e)
}

function Ih(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Ha(t)) : (n.next = o.next, o.next = n), t.interleaved = n, xt(e, r)
}

function xt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Pt = !1;

function Va(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Fh(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function gt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Dt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, V & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, xt(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, Ha(r)) : (t.next = o.next, o.next = t), r.interleaved = t, xt(e, n)
}

function Do(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ta(e, n)
    }
}

function Pf(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = l : i = i.next = l, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function vi(e, t, n, r) {
    var o = e.updateQueue;
    Pt = !1;
    var i = o.firstBaseUpdate,
        l = o.lastBaseUpdate,
        s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var u = s,
            a = u.next;
        u.next = null, l === null ? i = a : l.next = a, l = u;
        var f = e.alternate;
        f !== null && (f = f.updateQueue, s = f.lastBaseUpdate, s !== l && (s === null ? f.firstBaseUpdate = a : s.next = a, f.lastBaseUpdate = u))
    }
    if (i !== null) {
        var c = o.baseState;
        l = 0, f = a = u = null, s = i;
        do {
            var h = s.lane,
                y = s.eventTime;
            if ((r & h) === h) {
                f !== null && (f = f.next = {
                    eventTime: y,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var g = e,
                        w = s;
                    switch (h = t, y = n, w.tag) {
                        case 1:
                            if (g = w.payload, typeof g == "function") {
                                c = g.call(y, c, h);
                                break e
                            }
                            c = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = w.payload, h = typeof g == "function" ? g.call(y, c, h) : g, h == null) break e;
                            c = te({}, c, h);
                            break e;
                        case 2:
                            Pt = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [s] : h.push(s))
            } else y = {
                eventTime: y,
                lane: h,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, f === null ? (a = f = y, u = c) : f = f.next = y, l |= h;
            if (s = s.next, s === null) {
                if (s = o.shared.pending, s === null) break;
                h = s, s = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null
            }
        } while (1);
        if (f === null && (u = c), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
            o = t;
            do l |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        mn |= l, e.lanes = l, e.memoizedState = c
    }
}

function Nf(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(P(191, o));
                o.call(r)
            }
        }
}
var Mh = new Ip.Component().refs;

function Ms(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var tl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? wn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ke(),
            o = Bt(e),
            i = gt(r, o);
        i.payload = t, n != null && (i.callback = n), t = Dt(e, i, o), t !== null && (Je(t, e, o, r), Do(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ke(),
            o = Bt(e),
            i = gt(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Dt(e, i, o), t !== null && (Je(t, e, o, r), Do(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ke(),
            r = Bt(e),
            o = gt(n, r);
        o.tag = 2, t != null && (o.callback = t), t = Dt(e, o, r), t !== null && (Je(t, e, r, n), Do(t, e, r))
    }
};

function Tf(e, t, n, r, o, i, l) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !$r(n, r) || !$r(o, i) : !0
}

function Dh(e, t, n) {
    var r = !1,
        o = Vt,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = Ve(i) : (o = _e(t) ? dn : Se.current, r = t.contextTypes, i = (r = r != null) ? bn(e, o) : Vt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = tl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function _f(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && tl.enqueueReplaceState(t, t.state, null)
}

function Ds(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = Mh, Va(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Ve(i) : (i = _e(t) ? dn : Se.current, o.context = bn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ms(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && tl.enqueueReplaceState(o, o.state, null), vi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function cr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(P(309));
                var r = n.stateNode
            }
            if (!r) throw Error(P(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
                var s = o.refs;
                s === Mh && (s = o.refs = {}), l === null ? delete s[i] : s[i] = l
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(P(284));
        if (!n._owner) throw Error(P(290, e))
    }
    return e
}

function So(e, t) {
    throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Of(e) {
    var t = e._init;
    return t(e._payload)
}

function zh(e) {
    function t(d, p) {
        if (e) {
            var m = d.deletions;
            m === null ? (d.deletions = [p], d.flags |= 16) : m.push(p)
        }
    }

    function n(d, p) {
        if (!e) return null;
        for (; p !== null;) t(d, p), p = p.sibling;
        return null
    }

    function r(d, p) {
        for (d = new Map; p !== null;) p.key !== null ? d.set(p.key, p) : d.set(p.index, p), p = p.sibling;
        return d
    }

    function o(d, p) {
        return d = $t(d, p), d.index = 0, d.sibling = null, d
    }

    function i(d, p, m) {
        return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < p ? (d.flags |= 2, p) : m) : (d.flags |= 2, p)) : (d.flags |= 1048576, p)
    }

    function l(d) {
        return e && d.alternate === null && (d.flags |= 2), d
    }

    function s(d, p, m, x) {
        return p === null || p.tag !== 6 ? (p = Hl(m, d.mode, x), p.return = d, p) : (p = o(p, m), p.return = d, p)
    }

    function u(d, p, m, x) {
        var k = m.type;
        return k === Cn ? f(d, p, m.props.children, x, m.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Rt && Of(k) === p.type) ? (x = o(p, m.props), x.ref = cr(d, p, m), x.return = d, x) : (x = Vo(m.type, m.key, m.props, null, d.mode, x), x.ref = cr(d, p, m), x.return = d, x)
    }

    function a(d, p, m, x) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = Vl(m, d.mode, x), p.return = d, p) : (p = o(p, m.children || []), p.return = d, p)
    }

    function f(d, p, m, x, k) {
        return p === null || p.tag !== 7 ? (p = an(m, d.mode, x, k), p.return = d, p) : (p = o(p, m), p.return = d, p)
    }

    function c(d, p, m) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = Hl("" + p, d.mode, m), p.return = d, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case ao:
                    return m = Vo(p.type, p.key, p.props, null, d.mode, m), m.ref = cr(d, null, p), m.return = d, m;
                case kn:
                    return p = Vl(p, d.mode, m), p.return = d, p;
                case Rt:
                    var x = p._init;
                    return c(d, x(p._payload), m)
            }
            if (hr(p) || ir(p)) return p = an(p, d.mode, m, null), p.return = d, p;
            So(d, p)
        }
        return null
    }

    function h(d, p, m, x) {
        var k = p !== null ? p.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return k !== null ? null : s(d, p, "" + m, x);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case ao:
                    return m.key === k ? u(d, p, m, x) : null;
                case kn:
                    return m.key === k ? a(d, p, m, x) : null;
                case Rt:
                    return k = m._init, h(d, p, k(m._payload), x)
            }
            if (hr(m) || ir(m)) return k !== null ? null : f(d, p, m, x, null);
            So(d, m)
        }
        return null
    }

    function y(d, p, m, x, k) {
        if (typeof x == "string" && x !== "" || typeof x == "number") return d = d.get(m) || null, s(p, d, "" + x, k);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case ao:
                    return d = d.get(x.key === null ? m : x.key) || null, u(p, d, x, k);
                case kn:
                    return d = d.get(x.key === null ? m : x.key) || null, a(p, d, x, k);
                case Rt:
                    var R = x._init;
                    return y(d, p, m, R(x._payload), k)
            }
            if (hr(x) || ir(x)) return d = d.get(m) || null, f(p, d, x, k, null);
            So(p, x)
        }
        return null
    }

    function g(d, p, m, x) {
        for (var k = null, R = null, N = p, _ = p = 0, D = null; N !== null && _ < m.length; _++) {
            N.index > _ ? (D = N, N = null) : D = N.sibling;
            var I = h(d, N, m[_], x);
            if (I === null) {
                N === null && (N = D);
                break
            }
            e && N && I.alternate === null && t(d, N), p = i(I, p, _), R === null ? k = I : R.sibling = I, R = I, N = D
        }
        if (_ === m.length) return n(d, N), Y && Yt(d, _), k;
        if (N === null) {
            for (; _ < m.length; _++) N = c(d, m[_], x), N !== null && (p = i(N, p, _), R === null ? k = N : R.sibling = N, R = N);
            return Y && Yt(d, _), k
        }
        for (N = r(d, N); _ < m.length; _++) D = y(N, d, _, m[_], x), D !== null && (e && D.alternate !== null && N.delete(D.key === null ? _ : D.key), p = i(D, p, _), R === null ? k = D : R.sibling = D, R = D);
        return e && N.forEach(function(F) {
            return t(d, F)
        }), Y && Yt(d, _), k
    }

    function w(d, p, m, x) {
        var k = ir(m);
        if (typeof k != "function") throw Error(P(150));
        if (m = k.call(m), m == null) throw Error(P(151));
        for (var R = k = null, N = p, _ = p = 0, D = null, I = m.next(); N !== null && !I.done; _++, I = m.next()) {
            N.index > _ ? (D = N, N = null) : D = N.sibling;
            var F = h(d, N, I.value, x);
            if (F === null) {
                N === null && (N = D);
                break
            }
            e && N && F.alternate === null && t(d, N), p = i(F, p, _), R === null ? k = F : R.sibling = F, R = F, N = D
        }
        if (I.done) return n(d, N), Y && Yt(d, _), k;
        if (N === null) {
            for (; !I.done; _++, I = m.next()) I = c(d, I.value, x), I !== null && (p = i(I, p, _), R === null ? k = I : R.sibling = I, R = I);
            return Y && Yt(d, _), k
        }
        for (N = r(d, N); !I.done; _++, I = m.next()) I = y(N, d, _, I.value, x), I !== null && (e && I.alternate !== null && N.delete(I.key === null ? _ : I.key), p = i(I, p, _), R === null ? k = I : R.sibling = I, R = I);
        return e && N.forEach(function(Q) {
            return t(d, Q)
        }), Y && Yt(d, _), k
    }

    function E(d, p, m, x) {
        if (typeof m == "object" && m !== null && m.type === Cn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case ao:
                    e: {
                        for (var k = m.key, R = p; R !== null;) {
                            if (R.key === k) {
                                if (k = m.type, k === Cn) {
                                    if (R.tag === 7) {
                                        n(d, R.sibling), p = o(R, m.props.children), p.return = d, d = p;
                                        break e
                                    }
                                } else if (R.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Rt && Of(k) === R.type) {
                                    n(d, R.sibling), p = o(R, m.props), p.ref = cr(d, R, m), p.return = d, d = p;
                                    break e
                                }
                                n(d, R);
                                break
                            } else t(d, R);
                            R = R.sibling
                        }
                        m.type === Cn ? (p = an(m.props.children, d.mode, x, m.key), p.return = d, d = p) : (x = Vo(m.type, m.key, m.props, null, d.mode, x), x.ref = cr(d, p, m), x.return = d, d = x)
                    }
                    return l(d);
                case kn:
                    e: {
                        for (R = m.key; p !== null;) {
                            if (p.key === R)
                                if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                    n(d, p.sibling), p = o(p, m.children || []), p.return = d, d = p;
                                    break e
                                } else {
                                    n(d, p);
                                    break
                                }
                            else t(d, p);
                            p = p.sibling
                        }
                        p = Vl(m, d.mode, x),
                        p.return = d,
                        d = p
                    }
                    return l(d);
                case Rt:
                    return R = m._init, E(d, p, R(m._payload), x)
            }
            if (hr(m)) return g(d, p, m, x);
            if (ir(m)) return w(d, p, m, x);
            So(d, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(d, p.sibling), p = o(p, m), p.return = d, d = p) : (n(d, p), p = Hl(m, d.mode, x), p.return = d, d = p), l(d)) : n(d, p)
    }
    return E
}
var Gn = zh(!0),
    Bh = zh(!1),
    io = {},
    st = Kt(io),
    Wr = Kt(io),
    Kr = Kt(io);

function rn(e) {
    if (e === io) throw Error(P(174));
    return e
}

function Wa(e, t) {
    switch (b(Kr, t), b(Wr, e), b(st, io), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ms(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ms(t, e)
    }
    G(st), b(st, t)
}

function Xn() {
    G(st), G(Wr), G(Kr)
}

function $h(e) {
    rn(Kr.current);
    var t = rn(st.current),
        n = ms(t, e.type);
    t !== n && (b(Wr, e), b(st, n))
}

function Ka(e) {
    Wr.current === e && (G(st), G(Wr))
}
var Z = Kt(0);

function gi(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ml = [];

function Qa() {
    for (var e = 0; e < Ml.length; e++) Ml[e]._workInProgressVersionPrimary = null;
    Ml.length = 0
}
var zo = Et.ReactCurrentDispatcher,
    Dl = Et.ReactCurrentBatchConfig,
    hn = 0,
    ee = null,
    le = null,
    de = null,
    yi = !1,
    kr = !1,
    Qr = 0,
    mw = 0;

function ye() {
    throw Error(P(321))
}

function ba(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!et(e[n], t[n])) return !1;
    return !0
}

function qa(e, t, n, r, o, i) {
    if (hn = i, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zo.current = e === null || e.memoizedState === null ? ww : xw, e = n(r, o), kr) {
        i = 0;
        do {
            if (kr = !1, Qr = 0, 25 <= i) throw Error(P(301));
            i += 1, de = le = null, t.updateQueue = null, zo.current = Sw, e = n(r, o)
        } while (kr)
    }
    if (zo.current = wi, t = le !== null && le.next !== null, hn = 0, de = le = ee = null, yi = !1, t) throw Error(P(300));
    return e
}

function Ga() {
    var e = Qr !== 0;
    return Qr = 0, e
}

function nt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return de === null ? ee.memoizedState = de = e : de = de.next = e, de
}

function We() {
    if (le === null) {
        var e = ee.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = le.next;
    var t = de === null ? ee.memoizedState : de.next;
    if (t !== null) de = t, le = e;
    else {
        if (e === null) throw Error(P(310));
        le = e, e = {
            memoizedState: le.memoizedState,
            baseState: le.baseState,
            baseQueue: le.baseQueue,
            queue: le.queue,
            next: null
        }, de === null ? ee.memoizedState = de = e : de = de.next = e
    }
    return de
}

function br(e, t) {
    return typeof t == "function" ? t(e) : t
}

function zl(e) {
    var t = We(),
        n = t.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = le,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var l = o.next;
            o.next = i.next, i.next = l
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var s = l = null,
            u = null,
            a = i;
        do {
            var f = a.lane;
            if ((hn & f) === f) u !== null && (u = u.next = {
                lane: 0,
                action: a.action,
                hasEagerState: a.hasEagerState,
                eagerState: a.eagerState,
                next: null
            }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
            else {
                var c = {
                    lane: f,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                u === null ? (s = u = c, l = r) : u = u.next = c, ee.lanes |= f, mn |= f
            }
            a = a.next
        } while (a !== null && a !== i);
        u === null ? l = r : u.next = s, et(r, t.memoizedState) || (Ne = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, ee.lanes |= i, mn |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Bl(e) {
    var t = We(),
        n = t.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var l = o = o.next;
        do i = e(i, l.action), l = l.next; while (l !== o);
        et(i, t.memoizedState) || (Ne = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Uh() {}

function Hh(e, t) {
    var n = ee,
        r = We(),
        o = t(),
        i = !et(r.memoizedState, o);
    if (i && (r.memoizedState = o, Ne = !0), r = r.queue, Xa(Kh.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || de !== null && de.memoizedState.tag & 1) {
        if (n.flags |= 2048, qr(9, Wh.bind(null, n, r, o, t), void 0, null), pe === null) throw Error(P(349));
        hn & 30 || Vh(n, t, o)
    }
    return o
}

function Vh(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ee.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ee.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Wh(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Qh(t) && bh(e)
}

function Kh(e, t, n) {
    return n(function() {
        Qh(t) && bh(e)
    })
}

function Qh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !et(e, n)
    } catch {
        return !0
    }
}

function bh(e) {
    var t = xt(e, 1);
    t !== null && Je(t, e, 1, -1)
}

function jf(e) {
    var t = nt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: br,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = yw.bind(null, ee, e), [t.memoizedState, e]
}

function qr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ee.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ee.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function qh() {
    return We().memoizedState
}

function Bo(e, t, n, r) {
    var o = nt();
    ee.flags |= e, o.memoizedState = qr(1 | t, n, void 0, r === void 0 ? null : r)
}

function nl(e, t, n, r) {
    var o = We();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (le !== null) {
        var l = le.memoizedState;
        if (i = l.destroy, r !== null && ba(r, l.deps)) {
            o.memoizedState = qr(t, n, i, r);
            return
        }
    }
    ee.flags |= e, o.memoizedState = qr(1 | t, n, i, r)
}

function Lf(e, t) {
    return Bo(8390656, 8, e, t)
}

function Xa(e, t) {
    return nl(2048, 8, e, t)
}

function Gh(e, t) {
    return nl(4, 2, e, t)
}

function Xh(e, t) {
    return nl(4, 4, e, t)
}

function Yh(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Jh(e, t, n) {
    return n = n != null ? n.concat([e]) : null, nl(4, 4, Yh.bind(null, t, e), n)
}

function Ya() {}

function Zh(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ba(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function em(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ba(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function tm(e, t, n) {
    return hn & 21 ? (et(n, t) || (n = oh(), ee.lanes |= n, mn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ne = !0), e.memoizedState = n)
}

function vw(e, t) {
    var n = K;
    K = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Dl.transition;
    Dl.transition = {};
    try {
        e(!1), t()
    } finally {
        K = n, Dl.transition = r
    }
}

function nm() {
    return We().memoizedState
}

function gw(e, t, n) {
    var r = Bt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, rm(e)) om(t, n);
    else if (n = Ih(e, t, n, r), n !== null) {
        var o = ke();
        Je(n, e, r, o), im(n, t, r)
    }
}

function yw(e, t, n) {
    var r = Bt(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (rm(e)) om(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var l = t.lastRenderedState,
                s = i(l, n);
            if (o.hasEagerState = !0, o.eagerState = s, et(s, l)) {
                var u = t.interleaved;
                u === null ? (o.next = o, Ha(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = Ih(e, t, o, r), n !== null && (o = ke(), Je(n, e, r, o), im(n, t, r))
    }
}

function rm(e) {
    var t = e.alternate;
    return e === ee || t !== null && t === ee
}

function om(e, t) {
    kr = yi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function im(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ta(e, n)
    }
}
var wi = {
        readContext: Ve,
        useCallback: ye,
        useContext: ye,
        useEffect: ye,
        useImperativeHandle: ye,
        useInsertionEffect: ye,
        useLayoutEffect: ye,
        useMemo: ye,
        useReducer: ye,
        useRef: ye,
        useState: ye,
        useDebugValue: ye,
        useDeferredValue: ye,
        useTransition: ye,
        useMutableSource: ye,
        useSyncExternalStore: ye,
        useId: ye,
        unstable_isNewReconciler: !1
    },
    ww = {
        readContext: Ve,
        useCallback: function(e, t) {
            return nt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ve,
        useEffect: Lf,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Bo(4194308, 4, Yh.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Bo(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Bo(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = nt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = nt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = gw.bind(null, ee, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = nt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: jf,
        useDebugValue: Ya,
        useDeferredValue: function(e) {
            return nt().memoizedState = e
        },
        useTransition: function() {
            var e = jf(!1),
                t = e[0];
            return e = vw.bind(null, e[1]), nt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ee,
                o = nt();
            if (Y) {
                if (n === void 0) throw Error(P(407));
                n = n()
            } else {
                if (n = t(), pe === null) throw Error(P(349));
                hn & 30 || Vh(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, Lf(Kh.bind(null, r, i, e), [e]), r.flags |= 2048, qr(9, Wh.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = nt(),
                t = pe.identifierPrefix;
            if (Y) {
                var n = pt,
                    r = dt;
                n = (r & ~(1 << 32 - Ye(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = mw++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    xw = {
        readContext: Ve,
        useCallback: Zh,
        useContext: Ve,
        useEffect: Xa,
        useImperativeHandle: Jh,
        useInsertionEffect: Gh,
        useLayoutEffect: Xh,
        useMemo: em,
        useReducer: zl,
        useRef: qh,
        useState: function() {
            return zl(br)
        },
        useDebugValue: Ya,
        useDeferredValue: function(e) {
            var t = We();
            return tm(t, le.memoizedState, e)
        },
        useTransition: function() {
            var e = zl(br)[0],
                t = We().memoizedState;
            return [e, t]
        },
        useMutableSource: Uh,
        useSyncExternalStore: Hh,
        useId: nm,
        unstable_isNewReconciler: !1
    },
    Sw = {
        readContext: Ve,
        useCallback: Zh,
        useContext: Ve,
        useEffect: Xa,
        useImperativeHandle: Jh,
        useInsertionEffect: Gh,
        useLayoutEffect: Xh,
        useMemo: em,
        useReducer: Bl,
        useRef: qh,
        useState: function() {
            return Bl(br)
        },
        useDebugValue: Ya,
        useDeferredValue: function(e) {
            var t = We();
            return le === null ? t.memoizedState = e : tm(t, le.memoizedState, e)
        },
        useTransition: function() {
            var e = Bl(br)[0],
                t = We().memoizedState;
            return [e, t]
        },
        useMutableSource: Uh,
        useSyncExternalStore: Hh,
        useId: nm,
        unstable_isNewReconciler: !1
    };

function Yn(e, t) {
    try {
        var n = "",
            r = t;
        do n += G0(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function $l(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function zs(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Ew = typeof WeakMap == "function" ? WeakMap : Map;

function lm(e, t, n) {
    n = gt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Si || (Si = !0, qs = r), zs(e, t)
    }, n
}

function sm(e, t, n) {
    n = gt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            zs(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        zs(e, t), typeof r != "function" && (zt === null ? zt = new Set([this]) : zt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }), n
}

function Af(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Ew;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Mw.bind(null, e, t, n), t.then(e, e))
}

function If(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Ff(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1), t.tag = 2, Dt(n, t, 1))), n.lanes |= 1), e)
}
var kw = Et.ReactCurrentOwner,
    Ne = !1;

function Ee(e, t, n, r) {
    t.child = e === null ? Bh(t, null, n, r) : Gn(t, e.child, n, r)
}

function Mf(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Un(t, o), r = qa(e, t, n, r, i, o), n = Ga(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, St(e, t, o)) : (Y && n && Ma(t), t.flags |= 1, Ee(e, t, r, o), t.child)
}

function Df(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !ic(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, um(e, t, i, r, o)) : (e = Vo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var l = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : $r, n(l, r) && e.ref === t.ref) return St(e, t, o)
    }
    return t.flags |= 1, e = $t(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function um(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if ($r(i, r) && e.ref === t.ref)
            if (Ne = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Ne = !0);
            else return t.lanes = e.lanes, St(e, t, o)
    }
    return Bs(e, t, n, r, o)
}

function am(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, b(In, je), je |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, b(In, je), je |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, b(In, je), je |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, b(In, je), je |= r;
    return Ee(e, t, o, n), t.child
}

function cm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Bs(e, t, n, r, o) {
    var i = _e(n) ? dn : Se.current;
    return i = bn(t, i), Un(t, o), n = qa(e, t, n, r, i, o), r = Ga(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, St(e, t, o)) : (Y && r && Ma(t), t.flags |= 1, Ee(e, t, n, o), t.child)
}

function zf(e, t, n, r, o) {
    if (_e(n)) {
        var i = !0;
        fi(t)
    } else i = !1;
    if (Un(t, o), t.stateNode === null) $o(e, t), Dh(t, n, r), Ds(t, n, r, o), r = !0;
    else if (e === null) {
        var l = t.stateNode,
            s = t.memoizedProps;
        l.props = s;
        var u = l.context,
            a = n.contextType;
        typeof a == "object" && a !== null ? a = Ve(a) : (a = _e(n) ? dn : Se.current, a = bn(t, a));
        var f = n.getDerivedStateFromProps,
            c = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        c || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || u !== a) && _f(t, l, r, a), Pt = !1;
        var h = t.memoizedState;
        l.state = h, vi(t, r, l, o), u = t.memoizedState, s !== r || h !== u || Te.current || Pt ? (typeof f == "function" && (Ms(t, n, f, r), u = t.memoizedState), (s = Pt || Tf(t, n, s, r, h, u, a)) ? (c || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = a, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        l = t.stateNode, Fh(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : be(t.type, s), l.props = a, c = t.pendingProps, h = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ve(u) : (u = _e(n) ? dn : Se.current, u = bn(t, u));
        var y = n.getDerivedStateFromProps;
        (f = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== c || h !== u) && _f(t, l, r, u), Pt = !1, h = t.memoizedState, l.state = h, vi(t, r, l, o);
        var g = t.memoizedState;
        s !== c || h !== g || Te.current || Pt ? (typeof y == "function" && (Ms(t, n, y, r), g = t.memoizedState), (a = Pt || Tf(t, n, a, r, h, g, u) || !1) ? (f || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = u, r = a) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return $s(e, t, n, r, i, o)
}

function $s(e, t, n, r, o, i) {
    cm(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return o && kf(t, n, !1), St(e, t, i);
    r = t.stateNode, kw.current = t;
    var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && l ? (t.child = Gn(t, e.child, null, i), t.child = Gn(t, null, s, i)) : Ee(e, t, s, i), t.memoizedState = r.state, o && kf(t, n, !0), t.child
}

function fm(e) {
    var t = e.stateNode;
    t.pendingContext ? Ef(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ef(e, t.context, !1), Wa(e, t.containerInfo)
}

function Bf(e, t, n, r, o) {
    return qn(), za(o), t.flags |= 256, Ee(e, t, n, r), t.child
}
var Us = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Hs(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function dm(e, t, n) {
    var r = t.pendingProps,
        o = Z.current,
        i = !1,
        l = (t.flags & 128) !== 0,
        s;
    if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), b(Z, o & 1), e === null) return Is(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = {
        mode: "hidden",
        children: l
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = il(l, r, 0, null), e = an(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Hs(n), t.memoizedState = Us, e) : Ja(t, l));
    if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return Cw(e, t, l, r, s, o, n);
    if (i) {
        i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = $t(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = $t(s, i) : (i = an(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Hs(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Us, r
    }
    return i = e.child, e = i.sibling, r = $t(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ja(e, t) {
    return t = il({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Eo(e, t, n, r) {
    return r !== null && za(r), Gn(t, e.child, null, n), e = Ja(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Cw(e, t, n, r, o, i, l) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = $l(Error(P(422))), Eo(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = il({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = an(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Gn(t, e.child, null, l), t.child.memoizedState = Hs(l), t.memoizedState = Us, i);
    if (!(t.mode & 1)) return Eo(e, t, l, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
        return r = s, i = Error(P(419)), r = $l(i, r, void 0), Eo(e, t, l, r)
    }
    if (s = (l & e.childLanes) !== 0, Ne || s) {
        if (r = pe, r !== null) {
            switch (l & -l) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, xt(e, o), Je(r, e, o, -1))
        }
        return oc(), r = $l(Error(P(421))), Eo(e, t, l, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Dw.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Le = Mt(o.nextSibling), Ae = t, Y = !0, Ge = null, e !== null && (De[ze++] = dt, De[ze++] = pt, De[ze++] = pn, dt = e.id, pt = e.overflow, pn = t), t = Ja(t, r.children), t.flags |= 4096, t)
}

function $f(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Fs(e.return, t, n)
}

function Ul(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function pm(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (Ee(e, t, r.children, n), r = Z.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && $f(e, n, t);
            else if (e.tag === 19) $f(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (b(Z, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && gi(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ul(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && gi(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            Ul(t, !0, n, null, i);
            break;
        case "together":
            Ul(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function $o(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function St(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), mn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(P(153));
    if (t.child !== null) {
        for (e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = $t(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Rw(e, t, n) {
    switch (t.tag) {
        case 3:
            fm(t), qn();
            break;
        case 5:
            $h(t);
            break;
        case 1:
            _e(t.type) && fi(t);
            break;
        case 4:
            Wa(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            b(hi, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (b(Z, Z.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? dm(e, t, n) : (b(Z, Z.current & 1), e = St(e, t, n), e !== null ? e.sibling : null);
            b(Z, Z.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return pm(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), b(Z, Z.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, am(e, t, n)
    }
    return St(e, t, n)
}
var hm, Vs, mm, vm;
hm = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Vs = function() {};
mm = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, rn(st.current);
        var i = null;
        switch (n) {
            case "input":
                o = fs(e, o), r = fs(e, r), i = [];
                break;
            case "select":
                o = te({}, o, {
                    value: void 0
                }), r = te({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = hs(e, o), r = hs(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ai)
        }
        vs(n, r);
        var l;
        n = null;
        for (a in o)
            if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
                if (a === "style") {
                    var s = o[a];
                    for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
                } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ar.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
        for (a in r) {
            var u = r[a];
            if (s = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null))
                if (a === "style")
                    if (s) {
                        for (l in s) !s.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                        for (l in u) u.hasOwnProperty(l) && s[l] !== u[l] && (n || (n = {}), n[l] = u[l])
                    } else n || (i || (i = []), i.push(a, n)), n = u;
            else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Ar.hasOwnProperty(a) ? (u != null && a === "onScroll" && q("scroll", e), i || s === u || (i = [])) : (i = i || []).push(a, u))
        }
        n && (i = i || []).push("style", n);
        var a = i;
        (t.updateQueue = a) && (t.flags |= 4)
    }
};
vm = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function fr(e, t) {
    if (!Y) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function we(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Pw(e, t, n) {
    var r = t.pendingProps;
    switch (Da(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return we(t), null;
        case 1:
            return _e(t.type) && ci(), we(t), null;
        case 3:
            return r = t.stateNode, Xn(), G(Te), G(Se), Qa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ge !== null && (Ys(Ge), Ge = null))), Vs(e, t), we(t), null;
        case 5:
            Ka(t);
            var o = rn(Kr.current);
            if (n = t.type, e !== null && t.stateNode != null) mm(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(P(166));
                    return we(t), null
                }
                if (e = rn(st.current), xo(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[rt] = t, r[Vr] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            q("cancel", r), q("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            q("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < vr.length; o++) q(vr[o], r);
                            break;
                        case "source":
                            q("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            q("error", r), q("load", r);
                            break;
                        case "details":
                            q("toggle", r);
                            break;
                        case "input":
                            qc(r, i), q("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, q("invalid", r);
                            break;
                        case "textarea":
                            Xc(r, i), q("invalid", r)
                    }
                    vs(n, i), o = null;
                    for (var l in i)
                        if (i.hasOwnProperty(l)) {
                            var s = i[l];
                            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && wo(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && wo(r.textContent, s, e), o = ["children", "" + s]) : Ar.hasOwnProperty(l) && s != null && l === "onScroll" && q("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            co(r), Gc(r, i, !0);
                            break;
                        case "textarea":
                            co(r), Yc(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = ai)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                        is: r.is
                    }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[rt] = t, e[Vr] = r, hm(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (l = gs(n, r), n) {
                            case "dialog":
                                q("cancel", e), q("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                q("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < vr.length; o++) q(vr[o], e);
                                o = r;
                                break;
                            case "source":
                                q("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                q("error", e), q("load", e), o = r;
                                break;
                            case "details":
                                q("toggle", e), o = r;
                                break;
                            case "input":
                                qc(e, r), o = fs(e, r), q("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = te({}, r, {
                                    value: void 0
                                }), q("invalid", e);
                                break;
                            case "textarea":
                                Xc(e, r), o = hs(e, r), q("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        vs(n, o),
                        s = o;
                        for (i in s)
                            if (s.hasOwnProperty(i)) {
                                var u = s[i];
                                i === "style" ? Qp(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Wp(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Ir(e, u) : typeof u == "number" && Ir(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ar.hasOwnProperty(i) ? u != null && i === "onScroll" && q("scroll", e) : u != null && Ea(e, i, u, l))
                            }
                        switch (n) {
                            case "input":
                                co(e), Gc(e, r, !1);
                                break;
                            case "textarea":
                                co(e), Yc(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Dn(e, !!r.multiple, i, !1) : r.defaultValue != null && Dn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = ai)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return we(t), null;
        case 6:
            if (e && t.stateNode != null) vm(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
                if (n = rn(Kr.current), rn(st.current), xo(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (i = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
                        case 3:
                            wo(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && wo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r
            }
            return we(t), null;
        case 13:
            if (G(Z), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Y && Le !== null && t.mode & 1 && !(t.flags & 128)) Ah(), qn(), t.flags |= 98560, i = !1;
                else if (i = xo(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(P(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(P(317));
                        i[rt] = t
                    } else qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    we(t), i = !1
                } else Ge !== null && (Ys(Ge), Ge = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Z.current & 1 ? se === 0 && (se = 3) : oc())), t.updateQueue !== null && (t.flags |= 4), we(t), null);
        case 4:
            return Xn(), Vs(e, t), e === null && Ur(t.stateNode.containerInfo), we(t), null;
        case 10:
            return Ua(t.type._context), we(t), null;
        case 17:
            return _e(t.type) && ci(), we(t), null;
        case 19:
            if (G(Z), i = t.memoizedState, i === null) return we(t), null;
            if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
                if (r) fr(i, !1);
                else {
                    if (se !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (l = gi(e), l !== null) {
                                for (t.flags |= 128, fr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return b(Z, Z.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && re() > Jn && (t.flags |= 128, r = !0, fr(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = gi(l), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), fr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Y) return we(t), null
                    } else 2 * re() - i.renderingStartTime > Jn && n !== 1073741824 && (t.flags |= 128, r = !0, fr(i, !1), t.lanes = 4194304);
                i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = re(), t.sibling = null, n = Z.current, b(Z, r ? n & 1 | 2 : n & 1), t) : (we(t), null);
        case 22:
        case 23:
            return rc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? je & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(P(156, t.tag))
}

function Nw(e, t) {
    switch (Da(t), t.tag) {
        case 1:
            return _e(t.type) && ci(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Xn(), G(Te), G(Se), Qa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Ka(t), null;
        case 13:
            if (G(Z), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(P(340));
                qn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return G(Z), null;
        case 4:
            return Xn(), null;
        case 10:
            return Ua(t.type._context), null;
        case 22:
        case 23:
            return rc(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var ko = !1,
    xe = !1,
    Tw = typeof WeakSet == "function" ? WeakSet : Set,
    L = null;

function An(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ne(e, t, r)
        } else n.current = null
}

function Ws(e, t, n) {
    try {
        n()
    } catch (r) {
        ne(e, t, r)
    }
}
var Uf = !1;

function _w(e, t) {
    if (Ns = li, e = xh(), Fa(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var l = 0,
                    s = -1,
                    u = -1,
                    a = 0,
                    f = 0,
                    c = e,
                    h = null;
                t: for (;;) {
                    for (var y; c !== n || o !== 0 && c.nodeType !== 3 || (s = l + o), c !== i || r !== 0 && c.nodeType !== 3 || (u = l + r), c.nodeType === 3 && (l += c.nodeValue.length), (y = c.firstChild) !== null;) h = c, c = y;
                    for (;;) {
                        if (c === e) break t;
                        if (h === n && ++a === o && (s = l), h === i && ++f === r && (u = l), (y = c.nextSibling) !== null) break;
                        c = h, h = c.parentNode
                    }
                    c = y
                }
                n = s === -1 || u === -1 ? null : {
                    start: s,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Ts = {
            focusedElem: e,
            selectionRange: n
        }, li = !1, L = t; L !== null;)
        if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
        else
            for (; L !== null;) {
                t = L;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var w = g.memoizedProps,
                                    E = g.memoizedState,
                                    d = t.stateNode,
                                    p = d.getSnapshotBeforeUpdate(t.elementType === t.type ? w : be(t.type, w), E);
                                d.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                    }
                } catch (x) {
                    ne(t, t.return, x)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, L = e;
                    break
                }
                L = t.return
            }
    return g = Uf, Uf = !1, g
}

function Cr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && Ws(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function rl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ks(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function gm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, gm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[Vr], delete t[js], delete t[fw], delete t[dw])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function ym(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Hf(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || ym(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Qs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ai));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Qs(e, t, n), e = e.sibling; e !== null;) Qs(e, t, n), e = e.sibling
}

function bs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (bs(e, t, n), e = e.sibling; e !== null;) bs(e, t, n), e = e.sibling
}
var he = null,
    qe = !1;

function Ct(e, t, n) {
    for (n = n.child; n !== null;) wm(e, t, n), n = n.sibling
}

function wm(e, t, n) {
    if (lt && typeof lt.onCommitFiberUnmount == "function") try {
        lt.onCommitFiberUnmount(Gi, n)
    } catch {}
    switch (n.tag) {
        case 5:
            xe || An(n, t);
        case 6:
            var r = he,
                o = qe;
            he = null, Ct(e, t, n), he = r, qe = o, he !== null && (qe ? (e = he, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
            break;
        case 18:
            he !== null && (qe ? (e = he, n = n.stateNode, e.nodeType === 8 ? Il(e.parentNode, n) : e.nodeType === 1 && Il(e, n), zr(e)) : Il(he, n.stateNode));
            break;
        case 4:
            r = he, o = qe, he = n.stateNode.containerInfo, qe = !0, Ct(e, t, n), he = r, qe = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        l = i.destroy;
                    i = i.tag, l !== void 0 && (i & 2 || i & 4) && Ws(n, t, l), o = o.next
                } while (o !== r)
            }
            Ct(e, t, n);
            break;
        case 1:
            if (!xe && (An(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                ne(n, t, s)
            }
            Ct(e, t, n);
            break;
        case 21:
            Ct(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (xe = (r = xe) || n.memoizedState !== null, Ct(e, t, n), xe = r) : Ct(e, t, n);
            break;
        default:
            Ct(e, t, n)
    }
}

function Vf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Tw), t.forEach(function(r) {
            var o = zw.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function Ke(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    l = t,
                    s = l;
                e: for (; s !== null;) {
                    switch (s.tag) {
                        case 5:
                            he = s.stateNode, qe = !1;
                            break e;
                        case 3:
                            he = s.stateNode.containerInfo, qe = !0;
                            break e;
                        case 4:
                            he = s.stateNode.containerInfo, qe = !0;
                            break e
                    }
                    s = s.return
                }
                if (he === null) throw Error(P(160));
                wm(i, l, o), he = null, qe = !1;
                var u = o.alternate;
                u !== null && (u.return = null), o.return = null
            } catch (a) {
                ne(o, t, a)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) xm(t, e), t = t.sibling
}

function xm(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ke(t, e), tt(e), r & 4) {
                try {
                    Cr(3, e, e.return), rl(3, e)
                } catch (w) {
                    ne(e, e.return, w)
                }
                try {
                    Cr(5, e, e.return)
                } catch (w) {
                    ne(e, e.return, w)
                }
            }
            break;
        case 1:
            Ke(t, e), tt(e), r & 512 && n !== null && An(n, n.return);
            break;
        case 5:
            if (Ke(t, e), tt(e), r & 512 && n !== null && An(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Ir(o, "")
                } catch (w) {
                    ne(e, e.return, w)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : i,
                    s = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    s === "input" && i.type === "radio" && i.name != null && Up(o, i), gs(s, l);
                    var a = gs(s, i);
                    for (l = 0; l < u.length; l += 2) {
                        var f = u[l],
                            c = u[l + 1];
                        f === "style" ? Qp(o, c) : f === "dangerouslySetInnerHTML" ? Wp(o, c) : f === "children" ? Ir(o, c) : Ea(o, f, c, a)
                    }
                    switch (s) {
                        case "input":
                            ds(o, i);
                            break;
                        case "textarea":
                            Hp(o, i);
                            break;
                        case "select":
                            var h = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var y = i.value;
                            y != null ? Dn(o, !!i.multiple, y, !1) : h !== !!i.multiple && (i.defaultValue != null ? Dn(o, !!i.multiple, i.defaultValue, !0) : Dn(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Vr] = i
                } catch (w) {
                    ne(e, e.return, w)
                }
            }
            break;
        case 6:
            if (Ke(t, e), tt(e), r & 4) {
                if (e.stateNode === null) throw Error(P(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (w) {
                    ne(e, e.return, w)
                }
            }
            break;
        case 3:
            if (Ke(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                zr(t.containerInfo)
            } catch (w) {
                ne(e, e.return, w)
            }
            break;
        case 4:
            Ke(t, e), tt(e);
            break;
        case 13:
            Ke(t, e), tt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (tc = re())), r & 4 && Vf(e);
            break;
        case 22:
            if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (xe = (a = xe) || f, Ke(t, e), xe = a) : Ke(t, e), tt(e), r & 8192) {
                if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !f && e.mode & 1)
                    for (L = e, f = e.child; f !== null;) {
                        for (c = L = f; L !== null;) {
                            switch (h = L, y = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Cr(4, h, h.return);
                                    break;
                                case 1:
                                    An(h, h.return);
                                    var g = h.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount()
                                        } catch (w) {
                                            ne(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    An(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Kf(c);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = h, L = y) : Kf(c)
                        }
                        f = f.sibling
                    }
                e: for (f = null, c = e;;) {
                    if (c.tag === 5) {
                        if (f === null) {
                            f = c;
                            try {
                                o = c.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = c.stateNode, u = c.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Kp("display", l))
                            } catch (w) {
                                ne(e, e.return, w)
                            }
                        }
                    } else if (c.tag === 6) {
                        if (f === null) try {
                            c.stateNode.nodeValue = a ? "" : c.memoizedProps
                        } catch (w) {
                            ne(e, e.return, w)
                        }
                    } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                        c.child.return = c, c = c.child;
                        continue
                    }
                    if (c === e) break e;
                    for (; c.sibling === null;) {
                        if (c.return === null || c.return === e) break e;
                        f === c && (f = null), c = c.return
                    }
                    f === c && (f = null), c.sibling.return = c.return, c = c.sibling
                }
            }
            break;
        case 19:
            Ke(t, e), tt(e), r & 4 && Vf(e);
            break;
        case 21:
            break;
        default:
            Ke(t, e), tt(e)
    }
}

function tt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (ym(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Ir(o, ""), r.flags &= -33);
                    var i = Hf(e);
                    bs(e, i, o);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        s = Hf(e);
                    Qs(e, s, l);
                    break;
                default:
                    throw Error(P(161))
            }
        }
        catch (u) {
            ne(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Ow(e, t, n) {
    L = e, Sm(e)
}

function Sm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null;) {
        var o = L,
            i = o.child;
        if (o.tag === 22 && r) {
            var l = o.memoizedState !== null || ko;
            if (!l) {
                var s = o.alternate,
                    u = s !== null && s.memoizedState !== null || xe;
                s = ko;
                var a = xe;
                if (ko = l, (xe = u) && !a)
                    for (L = o; L !== null;) l = L, u = l.child, l.tag === 22 && l.memoizedState !== null ? Qf(o) : u !== null ? (u.return = l, L = u) : Qf(o);
                for (; i !== null;) L = i, Sm(i), i = i.sibling;
                L = o, ko = s, xe = a
            }
            Wf(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, L = i) : Wf(e)
    }
}

function Wf(e) {
    for (; L !== null;) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        xe || rl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !xe)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Nf(t, i, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Nf(t, l, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var a = t.alternate;
                            if (a !== null) {
                                var f = a.memoizedState;
                                if (f !== null) {
                                    var c = f.dehydrated;
                                    c !== null && zr(c)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163))
                }
                xe || t.flags & 512 && Ks(t)
            } catch (h) {
                ne(t, t.return, h)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, L = n;
            break
        }
        L = t.return
    }
}

function Kf(e) {
    for (; L !== null;) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, L = n;
            break
        }
        L = t.return
    }
}

function Qf(e) {
    for (; L !== null;) {
        var t = L;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        rl(4, t)
                    } catch (u) {
                        ne(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            ne(t, o, u)
                        }
                    }
                    var i = t.return;
                    try {
                        Ks(t)
                    } catch (u) {
                        ne(t, i, u)
                    }
                    break;
                case 5:
                    var l = t.return;
                    try {
                        Ks(t)
                    } catch (u) {
                        ne(t, l, u)
                    }
            }
        } catch (u) {
            ne(t, t.return, u)
        }
        if (t === e) {
            L = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return, L = s;
            break
        }
        L = t.return
    }
}
var jw = Math.ceil,
    xi = Et.ReactCurrentDispatcher,
    Za = Et.ReactCurrentOwner,
    He = Et.ReactCurrentBatchConfig,
    V = 0,
    pe = null,
    ie = null,
    ve = 0,
    je = 0,
    In = Kt(0),
    se = 0,
    Gr = null,
    mn = 0,
    ol = 0,
    ec = 0,
    Rr = null,
    Pe = null,
    tc = 0,
    Jn = 1 / 0,
    at = null,
    Si = !1,
    qs = null,
    zt = null,
    Co = !1,
    jt = null,
    Ei = 0,
    Pr = 0,
    Gs = null,
    Uo = -1,
    Ho = 0;

function ke() {
    return V & 6 ? re() : Uo !== -1 ? Uo : Uo = re()
}

function Bt(e) {
    return e.mode & 1 ? V & 2 && ve !== 0 ? ve & -ve : hw.transition !== null ? (Ho === 0 && (Ho = oh()), Ho) : (e = K, e !== 0 || (e = window.event, e = e === void 0 ? 16 : fh(e.type)), e) : 1
}

function Je(e, t, n, r) {
    if (50 < Pr) throw Pr = 0, Gs = null, Error(P(185));
    no(e, n, r), (!(V & 2) || e !== pe) && (e === pe && (!(V & 2) && (ol |= n), se === 4 && Tt(e, ve)), Oe(e, r), n === 1 && V === 0 && !(t.mode & 1) && (Jn = re() + 500, el && Qt()))
}

function Oe(e, t) {
    var n = e.callbackNode;
    h1(e, t);
    var r = ii(e, e === pe ? ve : 0);
    if (r === 0) n !== null && ef(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && ef(n), t === 1) e.tag === 0 ? pw(bf.bind(null, e)) : Oh(bf.bind(null, e)), aw(function() {
            !(V & 6) && Qt()
        }), n = null;
        else {
            switch (ih(r)) {
                case 1:
                    n = Na;
                    break;
                case 4:
                    n = nh;
                    break;
                case 16:
                    n = oi;
                    break;
                case 536870912:
                    n = rh;
                    break;
                default:
                    n = oi
            }
            n = _m(n, Em.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Em(e, t) {
    if (Uo = -1, Ho = 0, V & 6) throw Error(P(327));
    var n = e.callbackNode;
    if (Hn() && e.callbackNode !== n) return null;
    var r = ii(e, e === pe ? ve : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ki(e, r);
    else {
        t = r;
        var o = V;
        V |= 2;
        var i = Cm();
        (pe !== e || ve !== t) && (at = null, Jn = re() + 500, un(e, t));
        do try {
            Iw();
            break
        } catch (s) {
            km(e, s)
        }
        while (1);
        $a(), xi.current = i, V = o, ie !== null ? t = 0 : (pe = null, ve = 0, t = se)
    }
    if (t !== 0) {
        if (t === 2 && (o = Es(e), o !== 0 && (r = o, t = Xs(e, o))), t === 1) throw n = Gr, un(e, 0), Tt(e, r), Oe(e, re()), n;
        if (t === 6) Tt(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !Lw(o) && (t = ki(e, r), t === 2 && (i = Es(e), i !== 0 && (r = i, t = Xs(e, i))), t === 1)) throw n = Gr, un(e, 0), Tt(e, r), Oe(e, re()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(P(345));
                case 2:
                    Jt(e, Pe, at);
                    break;
                case 3:
                    if (Tt(e, r), (r & 130023424) === r && (t = tc + 500 - re(), 10 < t)) {
                        if (ii(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            ke(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Os(Jt.bind(null, e, Pe, at), t);
                        break
                    }
                    Jt(e, Pe, at);
                    break;
                case 4:
                    if (Tt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var l = 31 - Ye(r);
                        i = 1 << l, l = t[l], l > o && (o = l), r &= ~i
                    }
                    if (r = o, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * jw(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Os(Jt.bind(null, e, Pe, at), r);
                        break
                    }
                    Jt(e, Pe, at);
                    break;
                case 5:
                    Jt(e, Pe, at);
                    break;
                default:
                    throw Error(P(329))
            }
        }
    }
    return Oe(e, re()), e.callbackNode === n ? Em.bind(null, e) : null
}

function Xs(e, t) {
    var n = Rr;
    return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256), e = ki(e, t), e !== 2 && (t = Pe, Pe = n, t !== null && Ys(t)), e
}

function Ys(e) {
    Pe === null ? Pe = e : Pe.push.apply(Pe, e)
}

function Lw(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!et(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Tt(e, t) {
    for (t &= ~ec, t &= ~ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Ye(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function bf(e) {
    if (V & 6) throw Error(P(327));
    Hn();
    var t = ii(e, 0);
    if (!(t & 1)) return Oe(e, re()), null;
    var n = ki(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Es(e);
        r !== 0 && (t = r, n = Xs(e, r))
    }
    if (n === 1) throw n = Gr, un(e, 0), Tt(e, t), Oe(e, re()), n;
    if (n === 6) throw Error(P(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Jt(e, Pe, at), Oe(e, re()), null
}

function nc(e, t) {
    var n = V;
    V |= 1;
    try {
        return e(t)
    } finally {
        V = n, V === 0 && (Jn = re() + 500, el && Qt())
    }
}

function vn(e) {
    jt !== null && jt.tag === 0 && !(V & 6) && Hn();
    var t = V;
    V |= 1;
    var n = He.transition,
        r = K;
    try {
        if (He.transition = null, K = 1, e) return e()
    } finally {
        K = r, He.transition = n, V = t, !(V & 6) && Qt()
    }
}

function rc() {
    je = In.current, G(In)
}

function un(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, uw(n)), ie !== null)
        for (n = ie.return; n !== null;) {
            var r = n;
            switch (Da(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ci();
                    break;
                case 3:
                    Xn(), G(Te), G(Se), Qa();
                    break;
                case 5:
                    Ka(r);
                    break;
                case 4:
                    Xn();
                    break;
                case 13:
                    G(Z);
                    break;
                case 19:
                    G(Z);
                    break;
                case 10:
                    Ua(r.type._context);
                    break;
                case 22:
                case 23:
                    rc()
            }
            n = n.return
        }
    if (pe = e, ie = e = $t(e.current, null), ve = je = t, se = 0, Gr = null, ec = ol = mn = 0, Pe = Rr = null, nn !== null) {
        for (t = 0; t < nn.length; t++)
            if (n = nn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var l = i.next;
                    i.next = o, r.next = l
                }
                n.pending = r
            }
        nn = null
    }
    return e
}

function km(e, t) {
    do {
        var n = ie;
        try {
            if ($a(), zo.current = wi, yi) {
                for (var r = ee.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                yi = !1
            }
            if (hn = 0, de = le = ee = null, kr = !1, Qr = 0, Za.current = null, n === null || n.return === null) {
                se = 1, Gr = t, ie = null;
                break
            }
            e: {
                var i = e,
                    l = n.return,
                    s = n,
                    u = t;
                if (t = ve, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var a = u,
                        f = s,
                        c = f.tag;
                    if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var h = f.alternate;
                        h ? (f.updateQueue = h.updateQueue, f.memoizedState = h.memoizedState, f.lanes = h.lanes) : (f.updateQueue = null, f.memoizedState = null)
                    }
                    var y = If(l);
                    if (y !== null) {
                        y.flags &= -257, Ff(y, l, s, i, t), y.mode & 1 && Af(i, a, t), t = y, u = a;
                        var g = t.updateQueue;
                        if (g === null) {
                            var w = new Set;
                            w.add(u), t.updateQueue = w
                        } else g.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Af(i, a, t), oc();
                            break e
                        }
                        u = Error(P(426))
                    }
                } else if (Y && s.mode & 1) {
                    var E = If(l);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256), Ff(E, l, s, i, t), za(Yn(u, s));
                        break e
                    }
                }
                i = u = Yn(u, s),
                se !== 4 && (se = 2),
                Rr === null ? Rr = [i] : Rr.push(i),
                i = l;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var d = lm(i, u, t);
                            Pf(i, d);
                            break e;
                        case 1:
                            s = u;
                            var p = i.type,
                                m = i.stateNode;
                            if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (zt === null || !zt.has(m)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var x = sm(i, s, t);
                                Pf(i, x);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Pm(n)
        } catch (k) {
            t = k, ie === n && n !== null && (ie = n = n.return);
            continue
        }
        break
    } while (1)
}

function Cm() {
    var e = xi.current;
    return xi.current = wi, e === null ? wi : e
}

function oc() {
    (se === 0 || se === 3 || se === 2) && (se = 4), pe === null || !(mn & 268435455) && !(ol & 268435455) || Tt(pe, ve)
}

function ki(e, t) {
    var n = V;
    V |= 2;
    var r = Cm();
    (pe !== e || ve !== t) && (at = null, un(e, t));
    do try {
        Aw();
        break
    } catch (o) {
        km(e, o)
    }
    while (1);
    if ($a(), V = n, xi.current = r, ie !== null) throw Error(P(261));
    return pe = null, ve = 0, se
}

function Aw() {
    for (; ie !== null;) Rm(ie)
}

function Iw() {
    for (; ie !== null && !i1();) Rm(ie)
}

function Rm(e) {
    var t = Tm(e.alternate, e, je);
    e.memoizedProps = e.pendingProps, t === null ? Pm(e) : ie = t, Za.current = null
}

function Pm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Nw(n, t), n !== null) {
                n.flags &= 32767, ie = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                se = 6, ie = null;
                return
            }
        } else if (n = Pw(n, t, je), n !== null) {
            ie = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ie = t;
            return
        }
        ie = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}

function Jt(e, t, n) {
    var r = K,
        o = He.transition;
    try {
        He.transition = null, K = 1, Fw(e, t, n, r)
    } finally {
        He.transition = o, K = r
    }
    return null
}

function Fw(e, t, n, r) {
    do Hn(); while (jt !== null);
    if (V & 6) throw Error(P(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (m1(e, i), e === pe && (ie = pe = null, ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Co || (Co = !0, _m(oi, function() {
            return Hn(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = He.transition, He.transition = null;
        var l = K;
        K = 1;
        var s = V;
        V |= 4, Za.current = null, _w(e, n), xm(n, e), tw(Ts), li = !!Ns, Ts = Ns = null, e.current = n, Ow(n), l1(), V = s, K = l, He.transition = i
    } else e.current = n;
    if (Co && (Co = !1, jt = e, Ei = o), i = e.pendingLanes, i === 0 && (zt = null), a1(n.stateNode), Oe(e, re()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (Si) throw Si = !1, e = qs, qs = null, e;
    return Ei & 1 && e.tag !== 0 && Hn(), i = e.pendingLanes, i & 1 ? e === Gs ? Pr++ : (Pr = 0, Gs = e) : Pr = 0, Qt(), null
}

function Hn() {
    if (jt !== null) {
        var e = ih(Ei),
            t = He.transition,
            n = K;
        try {
            if (He.transition = null, K = 16 > e ? 16 : e, jt === null) var r = !1;
            else {
                if (e = jt, jt = null, Ei = 0, V & 6) throw Error(P(331));
                var o = V;
                for (V |= 4, L = e.current; L !== null;) {
                    var i = L,
                        l = i.child;
                    if (L.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var a = s[u];
                                for (L = a; L !== null;) {
                                    var f = L;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Cr(8, f, i)
                                    }
                                    var c = f.child;
                                    if (c !== null) c.return = f, L = c;
                                    else
                                        for (; L !== null;) {
                                            f = L;
                                            var h = f.sibling,
                                                y = f.return;
                                            if (gm(f), f === a) {
                                                L = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = y, L = h;
                                                break
                                            }
                                            L = y
                                        }
                                }
                            }
                            var g = i.alternate;
                            if (g !== null) {
                                var w = g.child;
                                if (w !== null) {
                                    g.child = null;
                                    do {
                                        var E = w.sibling;
                                        w.sibling = null, w = E
                                    } while (w !== null)
                                }
                            }
                            L = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && l !== null) l.return = i, L = l;
                    else e: for (; L !== null;) {
                        if (i = L, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Cr(9, i, i.return)
                        }
                        var d = i.sibling;
                        if (d !== null) {
                            d.return = i.return, L = d;
                            break e
                        }
                        L = i.return
                    }
                }
                var p = e.current;
                for (L = p; L !== null;) {
                    l = L;
                    var m = l.child;
                    if (l.subtreeFlags & 2064 && m !== null) m.return = l, L = m;
                    else e: for (l = p; L !== null;) {
                        if (s = L, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    rl(9, s)
                            }
                        } catch (k) {
                            ne(s, s.return, k)
                        }
                        if (s === l) {
                            L = null;
                            break e
                        }
                        var x = s.sibling;
                        if (x !== null) {
                            x.return = s.return, L = x;
                            break e
                        }
                        L = s.return
                    }
                }
                if (V = o, Qt(), lt && typeof lt.onPostCommitFiberRoot == "function") try {
                    lt.onPostCommitFiberRoot(Gi, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            K = n, He.transition = t
        }
    }
    return !1
}

function qf(e, t, n) {
    t = Yn(n, t), t = lm(e, t, 1), e = Dt(e, t, 1), t = ke(), e !== null && (no(e, 1, t), Oe(e, t))
}

function ne(e, t, n) {
    if (e.tag === 3) qf(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                qf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zt === null || !zt.has(r))) {
                    e = Yn(n, e), e = sm(t, e, 1), t = Dt(t, e, 1), e = ke(), t !== null && (no(t, 1, e), Oe(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Mw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ke(), e.pingedLanes |= e.suspendedLanes & n, pe === e && (ve & n) === n && (se === 4 || se === 3 && (ve & 130023424) === ve && 500 > re() - tc ? un(e, 0) : ec |= n), Oe(e, t)
}

function Nm(e, t) {
    t === 0 && (e.mode & 1 ? (t = ho, ho <<= 1, !(ho & 130023424) && (ho = 4194304)) : t = 1);
    var n = ke();
    e = xt(e, t), e !== null && (no(e, t, n), Oe(e, n))
}

function Dw(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Nm(e, n)
}

function zw(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(P(314))
    }
    r !== null && r.delete(t), Nm(e, n)
}
var Tm;
Tm = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Te.current) Ne = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ne = !1, Rw(e, t, n);
            Ne = !!(e.flags & 131072)
        }
    else Ne = !1, Y && t.flags & 1048576 && jh(t, pi, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            $o(e, t), e = t.pendingProps;
            var o = bn(t, Se.current);
            Un(t, n), o = qa(null, t, r, e, o, n);
            var i = Ga();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (i = !0, fi(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Va(t), o.updater = tl, t.stateNode = o, o._reactInternals = t, Ds(t, r, e, n), t = $s(null, t, r, !0, i, n)) : (t.tag = 0, Y && i && Ma(t), Ee(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch ($o(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = $w(r), e = be(r, e), o) {
                    case 0:
                        t = Bs(null, t, r, e, n);
                        break e;
                    case 1:
                        t = zf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Mf(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Df(null, t, r, be(r.type, e), n);
                        break e
                }
                throw Error(P(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), Bs(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), zf(e, t, r, o, n);
        case 3:
            e: {
                if (fm(t), e === null) throw Error(P(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                Fh(e, t),
                vi(t, r, null, n);
                var l = t.memoizedState;
                if (r = l.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: l.cache,
                            pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                            transitions: l.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = Yn(Error(P(423)), t), t = Bf(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = Yn(Error(P(424)), t), t = Bf(e, t, r, n, o);
                    break e
                } else
                    for (Le = Mt(t.stateNode.containerInfo.firstChild), Ae = t, Y = !0, Ge = null, n = Bh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (qn(), r === o) {
                        t = St(e, t, n);
                        break e
                    }
                    Ee(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return $h(t), e === null && Is(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, _s(r, o) ? l = null : i !== null && _s(r, i) && (t.flags |= 32), cm(e, t), Ee(e, t, l, n), t.child;
        case 6:
            return e === null && Is(t), null;
        case 13:
            return dm(e, t, n);
        case 4:
            return Wa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Gn(t, null, r, n) : Ee(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), Mf(e, t, r, o, n);
        case 7:
            return Ee(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ee(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ee(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, b(hi, r._currentValue), r._currentValue = l, i !== null)
                    if (et(i.value, l)) {
                        if (i.children === o.children && !Te.current) {
                            t = St(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var s = i.dependencies;
                            if (s !== null) {
                                l = i.child;
                                for (var u = s.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            u = gt(-1, n & -n), u.tag = 2;
                                            var a = i.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var f = a.pending;
                                                f === null ? u.next = u : (u.next = f.next, f.next = u), a.pending = u
                                            }
                                        }
                                        i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Fs(i.return, n, t), s.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (l = i.return, l === null) throw Error(P(341));
                                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Fs(l, n, t), l = i.sibling
                            } else l = i.child;
                            if (l !== null) l.return = i;
                            else
                                for (l = i; l !== null;) {
                                    if (l === t) {
                                        l = null;
                                        break
                                    }
                                    if (i = l.sibling, i !== null) {
                                        i.return = l.return, l = i;
                                        break
                                    }
                                    l = l.return
                                }
                            i = l
                        }
                Ee(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, Un(t, n), o = Ve(o), r = r(o), t.flags |= 1, Ee(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = be(r, t.pendingProps), o = be(r.type, o), Df(e, t, r, o, n);
        case 15:
            return um(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), $o(e, t), t.tag = 1, _e(r) ? (e = !0, fi(t)) : e = !1, Un(t, n), Dh(t, r, o), Ds(t, r, o, n), $s(null, t, r, !0, e, n);
        case 19:
            return pm(e, t, n);
        case 22:
            return am(e, t, n)
    }
    throw Error(P(156, t.tag))
};

function _m(e, t) {
    return th(e, t)
}

function Bw(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Be(e, t, n, r) {
    return new Bw(e, t, n, r)
}

function ic(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function $w(e) {
    if (typeof e == "function") return ic(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Ca) return 11;
        if (e === Ra) return 14
    }
    return 2
}

function $t(e, t) {
    var n = e.alternate;
    return n === null ? (n = Be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Vo(e, t, n, r, o, i) {
    var l = 2;
    if (r = e, typeof e == "function") ic(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else e: switch (e) {
        case Cn:
            return an(n.children, o, i, t);
        case ka:
            l = 8, o |= 8;
            break;
        case ss:
            return e = Be(12, n, t, o | 2), e.elementType = ss, e.lanes = i, e;
        case us:
            return e = Be(13, n, t, o), e.elementType = us, e.lanes = i, e;
        case as:
            return e = Be(19, n, t, o), e.elementType = as, e.lanes = i, e;
        case zp:
            return il(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Mp:
                    l = 10;
                    break e;
                case Dp:
                    l = 9;
                    break e;
                case Ca:
                    l = 11;
                    break e;
                case Ra:
                    l = 14;
                    break e;
                case Rt:
                    l = 16, r = null;
                    break e
            }
            throw Error(P(130, e == null ? e : typeof e, ""))
    }
    return t = Be(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function an(e, t, n, r) {
    return e = Be(7, e, r, t), e.lanes = n, e
}

function il(e, t, n, r) {
    return e = Be(22, e, r, t), e.elementType = zp, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Hl(e, t, n) {
    return e = Be(6, e, null, t), e.lanes = n, e
}

function Vl(e, t, n) {
    return t = Be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Uw(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kl(0), this.expirationTimes = kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function lc(e, t, n, r, o, i, l, s, u) {
    return e = new Uw(e, t, n, s, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Be(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Va(i), e
}

function Hw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: kn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Om(e) {
    if (!e) return Vt;
    e = e._reactInternals;
    e: {
        if (wn(e) !== e || e.tag !== 1) throw Error(P(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (_e(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (_e(n)) return _h(e, n, t)
    }
    return t
}

function jm(e, t, n, r, o, i, l, s, u) {
    return e = lc(n, r, !0, e, o, i, l, s, u), e.context = Om(null), n = e.current, r = ke(), o = Bt(n), i = gt(r, o), i.callback = t ?? null, Dt(n, i, o), e.current.lanes = o, no(e, o, r), Oe(e, r), e
}

function ll(e, t, n, r) {
    var o = t.current,
        i = ke(),
        l = Bt(o);
    return n = Om(n), t.context === null ? t.context = n : t.pendingContext = n, t = gt(i, l), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dt(o, t, l), e !== null && (Je(e, o, l, i), Do(e, o, l)), l
}

function Ci(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Gf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function sc(e, t) {
    Gf(e, t), (e = e.alternate) && Gf(e, t)
}

function Vw() {
    return null
}
var Lm = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function uc(e) {
    this._internalRoot = e
}
sl.prototype.render = uc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(P(409));
    ll(e, t, null, null)
};
sl.prototype.unmount = uc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        vn(function() {
            ll(null, e, null, null)
        }), t[wt] = null
    }
};

function sl(e) {
    this._internalRoot = e
}
sl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = uh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++);
        Nt.splice(n, 0, e), n === 0 && ch(e)
    }
};

function ac(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function ul(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Xf() {}

function Ww(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var a = Ci(l);
                i.call(a)
            }
        }
        var l = jm(t, r, e, 0, null, !1, !1, "", Xf);
        return e._reactRootContainer = l, e[wt] = l.current, Ur(e.nodeType === 8 ? e.parentNode : e), vn(), l
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var a = Ci(u);
            s.call(a)
        }
    }
    var u = lc(e, 0, !1, null, null, !1, !1, "", Xf);
    return e._reactRootContainer = u, e[wt] = u.current, Ur(e.nodeType === 8 ? e.parentNode : e), vn(function() {
        ll(t, u, n, r)
    }), u
}

function al(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var l = i;
        if (typeof o == "function") {
            var s = o;
            o = function() {
                var u = Ci(l);
                s.call(u)
            }
        }
        ll(t, l, e, o)
    } else l = Ww(n, t, e, o, r);
    return Ci(l)
}
lh = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = mr(t.pendingLanes);
                n !== 0 && (Ta(t, n | 1), Oe(t, re()), !(V & 6) && (Jn = re() + 500, Qt()))
            }
            break;
        case 13:
            vn(function() {
                var r = xt(e, 1);
                if (r !== null) {
                    var o = ke();
                    Je(r, e, 1, o)
                }
            }), sc(e, 1)
    }
};
_a = function(e) {
    if (e.tag === 13) {
        var t = xt(e, 134217728);
        if (t !== null) {
            var n = ke();
            Je(t, e, 134217728, n)
        }
        sc(e, 134217728)
    }
};
sh = function(e) {
    if (e.tag === 13) {
        var t = Bt(e),
            n = xt(e, t);
        if (n !== null) {
            var r = ke();
            Je(n, e, t, r)
        }
        sc(e, t)
    }
};
uh = function() {
    return K
};
ah = function(e, t) {
    var n = K;
    try {
        return K = e, t()
    } finally {
        K = n
    }
};
ws = function(e, t, n) {
    switch (t) {
        case "input":
            if (ds(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Zi(r);
                        if (!o) throw Error(P(90));
                        $p(r), ds(r, o)
                    }
                }
            }
            break;
        case "textarea":
            Hp(e, n);
            break;
        case "select":
            t = n.value, t != null && Dn(e, !!n.multiple, t, !1)
    }
};
Gp = nc;
Xp = vn;
var Kw = {
        usingClientEntryPoint: !1,
        Events: [oo, Tn, Zi, bp, qp, nc]
    },
    dr = {
        findFiberByHostInstance: tn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    Qw = {
        bundleType: dr.bundleType,
        version: dr.version,
        rendererPackageName: dr.rendererPackageName,
        rendererConfig: dr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Et.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Zp(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: dr.findFiberByHostInstance || Vw,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ro.isDisabled && Ro.supportsFiber) try {
        Gi = Ro.inject(Qw), lt = Ro
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kw;
Fe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ac(t)) throw Error(P(200));
    return Hw(e, t, null, n)
};
Fe.createRoot = function(e, t) {
    if (!ac(e)) throw Error(P(299));
    var n = !1,
        r = "",
        o = Lm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = lc(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, Ur(e.nodeType === 8 ? e.parentNode : e), new uc(t)
};
Fe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
    return e = Zp(t), e = e === null ? null : e.stateNode, e
};
Fe.flushSync = function(e) {
    return vn(e)
};
Fe.hydrate = function(e, t, n) {
    if (!ul(t)) throw Error(P(200));
    return al(null, e, t, !0, n)
};
Fe.hydrateRoot = function(e, t, n) {
    if (!ac(e)) throw Error(P(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        l = Lm;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = jm(t, null, e, 1, n ?? null, o, !1, i, l), e[wt] = t.current, Ur(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new sl(t)
};
Fe.render = function(e, t, n) {
    if (!ul(t)) throw Error(P(200));
    return al(null, e, t, !1, n)
};
Fe.unmountComponentAtNode = function(e) {
    if (!ul(e)) throw Error(P(40));
    return e._reactRootContainer ? (vn(function() {
        al(null, null, e, !1, function() {
            e._reactRootContainer = null, e[wt] = null
        })
    }), !0) : !1
};
Fe.unstable_batchedUpdates = nc;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ul(n)) throw Error(P(200));
    if (e == null || e._reactInternals === void 0) throw Error(P(38));
    return al(e, t, n, !1, r)
};
Fe.version = "18.2.0-next-9e3b772b8-20220608";

function Am() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Am)
    } catch (e) {
        console.error(e)
    }
}
Am(), jp.exports = Fe;
var Im = jp.exports,
    Wo = typeof document < "u" ? S.useLayoutEffect : S.useEffect;

function Ri(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Ri(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ri(e[i], t[i])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Fm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Yf(e, t) {
    const n = Fm(e);
    return Math.round(t * n) / n
}

function Jf(e) {
    const t = S.useRef(e);
    return Wo(() => {
        t.current = e
    }), t
}

function bw(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: i,
            floating: l
        } = {},
        transform: s = !0,
        whileElementsMounted: u,
        open: a
    } = e, [f, c] = S.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [h, y] = S.useState(r);
    Ri(h, r) || y(r);
    const [g, w] = S.useState(null), [E, d] = S.useState(null), p = S.useCallback(B => {
        B != R.current && (R.current = B, w(B))
    }, [w]), m = S.useCallback(B => {
        B !== N.current && (N.current = B, d(B))
    }, [d]), x = i || g, k = l || E, R = S.useRef(null), N = S.useRef(null), _ = S.useRef(f), D = Jf(u), I = Jf(o), F = S.useCallback(() => {
        if (!R.current || !N.current) return;
        const B = {
            placement: t,
            strategy: n,
            middleware: h
        };
        I.current && (B.platform = I.current), V0(R.current, N.current, B).then(X => {
            const T = { ...X,
                isPositioned: !0
            };
            Q.current && !Ri(_.current, T) && (_.current = T, Im.flushSync(() => {
                c(T)
            }))
        })
    }, [h, t, n, I]);
    Wo(() => {
        a === !1 && _.current.isPositioned && (_.current.isPositioned = !1, c(B => ({ ...B,
            isPositioned: !1
        })))
    }, [a]);
    const Q = S.useRef(!1);
    Wo(() => (Q.current = !0, () => {
        Q.current = !1
    }), []), Wo(() => {
        if (x && (R.current = x), k && (N.current = k), x && k) {
            if (D.current) return D.current(x, k, F);
            F()
        }
    }, [x, k, F, D]);
    const z = S.useMemo(() => ({
            reference: R,
            floating: N,
            setReference: p,
            setFloating: m
        }), [p, m]),
        U = S.useMemo(() => ({
            reference: x,
            floating: k
        }), [x, k]),
        J = S.useMemo(() => {
            const B = {
                position: n,
                left: 0,
                top: 0
            };
            if (!U.floating) return B;
            const X = Yf(U.floating, f.x),
                T = Yf(U.floating, f.y);
            return s ? { ...B,
                transform: "translate(" + X + "px, " + T + "px)",
                ...Fm(U.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: X,
                top: T
            }
        }, [n, s, U.floating, f.x, f.y]);
    return S.useMemo(() => ({ ...f,
        update: F,
        refs: z,
        elements: U,
        floatingStyles: J
    }), [f, F, z, U, J])
}
var qw = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    Sn = new WeakMap,
    Po = new WeakMap,
    No = {},
    Wl = 0,
    Mm = function(e) {
        return e && (e.host || Mm(e.parentNode))
    },
    Gw = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var r = Mm(n);
            return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(n) {
            return !!n
        })
    },
    Xw = function(e, t, n, r) {
        var o = Gw(t, Array.isArray(e) ? e : [e]);
        No[n] || (No[n] = new WeakMap);
        var i = No[n],
            l = [],
            s = new Set,
            u = new Set(o),
            a = function(c) {
                !c || s.has(c) || (s.add(c), a(c.parentNode))
            };
        o.forEach(a);
        var f = function(c) {
            !c || u.has(c) || Array.prototype.forEach.call(c.children, function(h) {
                if (s.has(h)) f(h);
                else {
                    var y = h.getAttribute(r),
                        g = y !== null && y !== "false",
                        w = (Sn.get(h) || 0) + 1,
                        E = (i.get(h) || 0) + 1;
                    Sn.set(h, w), i.set(h, E), l.push(h), w === 1 && g && Po.set(h, !0), E === 1 && h.setAttribute(n, "true"), g || h.setAttribute(r, "true")
                }
            })
        };
        return f(t), s.clear(), Wl++,
            function() {
                l.forEach(function(c) {
                    var h = Sn.get(c) - 1,
                        y = i.get(c) - 1;
                    Sn.set(c, h), i.set(c, y), h || (Po.has(c) || c.removeAttribute(r), Po.delete(c)), y || c.removeAttribute(n)
                }), Wl--, Wl || (Sn = new WeakMap, Sn = new WeakMap, Po = new WeakMap, No = {})
            }
    },
    Yw = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || qw(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Xw(r, o, n, "aria-hidden")) : function() {
            return null
        }
    };
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var Jw = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
    Js = Jw.join(","),
    Dm = typeof Element > "u",
    Xr = Dm ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    Pi = !Dm && Element.prototype.getRootNode ? function(e) {
        var t;
        return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
    } : function(e) {
        return e == null ? void 0 : e.ownerDocument
    },
    Ni = function e(t, n) {
        var r;
        n === void 0 && (n = !0);
        var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"),
            i = o === "" || o === "true",
            l = i || n && t && e(t.parentNode);
        return l
    },
    Zw = function(t) {
        var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
        return r === "" || r === "true"
    },
    ex = function(t, n, r) {
        if (Ni(t)) return [];
        var o = Array.prototype.slice.apply(t.querySelectorAll(Js));
        return n && Xr.call(t, Js) && o.unshift(t), o = o.filter(r), o
    },
    tx = function e(t, n, r) {
        for (var o = [], i = Array.from(t); i.length;) {
            var l = i.shift();
            if (!Ni(l, !1))
                if (l.tagName === "SLOT") {
                    var s = l.assignedElements(),
                        u = s.length ? s : l.children,
                        a = e(u, !0, r);
                    r.flatten ? o.push.apply(o, a) : o.push({
                        scopeParent: l,
                        candidates: a
                    })
                } else {
                    var f = Xr.call(l, Js);
                    f && r.filter(l) && (n || !t.includes(l)) && o.push(l);
                    var c = l.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(l),
                        h = !Ni(c, !1) && (!r.shadowRootFilter || r.shadowRootFilter(l));
                    if (c && h) {
                        var y = e(c === !0 ? l.children : c.children, !0, r);
                        r.flatten ? o.push.apply(o, y) : o.push({
                            scopeParent: l,
                            candidates: y
                        })
                    } else i.unshift.apply(i, l.children)
                }
        }
        return o
    },
    zm = function(t) {
        return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
    },
    Bm = function(t) {
        if (!t) throw new Error("No node provided");
        return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Zw(t)) && !zm(t) ? 0 : t.tabIndex
    },
    nx = function(t, n) {
        var r = Bm(t);
        return r < 0 && n && !zm(t) ? 0 : r
    },
    rx = function(t, n) {
        return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex
    },
    $m = function(t) {
        return t.tagName === "INPUT"
    },
    ox = function(t) {
        return $m(t) && t.type === "hidden"
    },
    ix = function(t) {
        var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
            return r.tagName === "SUMMARY"
        });
        return n
    },
    lx = function(t, n) {
        for (var r = 0; r < t.length; r++)
            if (t[r].checked && t[r].form === n) return t[r]
    },
    sx = function(t) {
        if (!t.name) return !0;
        var n = t.form || Pi(t),
            r = function(s) {
                return n.querySelectorAll('input[type="radio"][name="' + s + '"]')
            },
            o;
        if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") o = r(window.CSS.escape(t.name));
        else try {
            o = r(t.name)
        } catch (l) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", l.message), !1
        }
        var i = lx(o, t.form);
        return !i || i === t
    },
    ux = function(t) {
        return $m(t) && t.type === "radio"
    },
    ax = function(t) {
        return ux(t) && !sx(t)
    },
    cx = function(t) {
        var n, r = t && Pi(t),
            o = (n = r) === null || n === void 0 ? void 0 : n.host,
            i = !1;
        if (r && r !== t) {
            var l, s, u;
            for (i = !!((l = o) !== null && l !== void 0 && (s = l.ownerDocument) !== null && s !== void 0 && s.contains(o) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !i && o;) {
                var a, f, c;
                r = Pi(o), o = (a = r) === null || a === void 0 ? void 0 : a.host, i = !!((f = o) !== null && f !== void 0 && (c = f.ownerDocument) !== null && c !== void 0 && c.contains(o))
            }
        }
        return i
    },
    Zf = function(t) {
        var n = t.getBoundingClientRect(),
            r = n.width,
            o = n.height;
        return r === 0 && o === 0
    },
    fx = function(t, n) {
        var r = n.displayCheck,
            o = n.getShadowRoot;
        if (getComputedStyle(t).visibility === "hidden") return !0;
        var i = Xr.call(t, "details>summary:first-of-type"),
            l = i ? t.parentElement : t;
        if (Xr.call(l, "details:not([open]) *")) return !0;
        if (!r || r === "full" || r === "legacy-full") {
            if (typeof o == "function") {
                for (var s = t; t;) {
                    var u = t.parentElement,
                        a = Pi(t);
                    if (u && !u.shadowRoot && o(u) === !0) return Zf(t);
                    t.assignedSlot ? t = t.assignedSlot : !u && a !== t.ownerDocument ? t = a.host : t = u
                }
                t = s
            }
            if (cx(t)) return !t.getClientRects().length;
            if (r !== "legacy-full") return !0
        } else if (r === "non-zero-area") return Zf(t);
        return !1
    },
    dx = function(t) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
            for (var n = t.parentElement; n;) {
                if (n.tagName === "FIELDSET" && n.disabled) {
                    for (var r = 0; r < n.children.length; r++) {
                        var o = n.children.item(r);
                        if (o.tagName === "LEGEND") return Xr.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t)
                    }
                    return !0
                }
                n = n.parentElement
            }
        return !1
    },
    px = function(t, n) {
        return !(n.disabled || Ni(n) || ox(n) || fx(n, t) || ix(n) || dx(n))
    },
    ed = function(t, n) {
        return !(ax(n) || Bm(n) < 0 || !px(t, n))
    },
    hx = function(t) {
        var n = parseInt(t.getAttribute("tabindex"), 10);
        return !!(isNaN(n) || n >= 0)
    },
    mx = function e(t) {
        var n = [],
            r = [];
        return t.forEach(function(o, i) {
            var l = !!o.scopeParent,
                s = l ? o.scopeParent : o,
                u = nx(s, l),
                a = l ? e(o.candidates) : s;
            u === 0 ? l ? n.push.apply(n, a) : n.push(s) : r.push({
                documentOrder: i,
                tabIndex: u,
                item: o,
                isScope: l,
                content: a
            })
        }), r.sort(rx).reduce(function(o, i) {
            return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o
        }, []).concat(n)
    },
    Zs = function(t, n) {
        n = n || {};
        var r;
        return n.getShadowRoot ? r = tx([t], n.includeContainer, {
            filter: ed.bind(null, n),
            flatten: !1,
            getShadowRoot: n.getShadowRoot,
            shadowRootFilter: hx
        }) : r = ex(t, n.includeContainer, ed.bind(null, n)), mx(r)
    };

function Ti() {
    return Ti = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ti.apply(this, arguments)
}
var Lt = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
let Kl = !1,
    vx = 0;
const td = () => "floating-ui-" + vx++;

function gx() {
    const [e, t] = S.useState(() => Kl ? td() : void 0);
    return Lt(() => {
        e == null && t(td())
    }, []), S.useEffect(() => {
        Kl || (Kl = !0)
    }, []), e
}
const yx = Qo["useId".toString()],
    cl = yx || gx;

function wx() {
    const e = new Map;
    return {
        emit(t, n) {
            var r;
            (r = e.get(t)) == null || r.forEach(o => o(n))
        },
        on(t, n) {
            e.set(t, [...e.get(t) || [], n])
        },
        off(t, n) {
            var r;
            e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter(o => o !== n)) || [])
        }
    }
}
const xx = S.createContext(null),
    Sx = S.createContext(null),
    Ex = () => {
        var e;
        return ((e = S.useContext(xx)) == null ? void 0 : e.id) || null
    },
    cc = () => S.useContext(Sx);

function ft(e) {
    return (e == null ? void 0 : e.ownerDocument) || document
}

function kx() {
    const e = navigator.userAgentData;
    return e != null && e.platform ? e.platform : navigator.platform
}

function Cx() {
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? e.brands.map(t => {
        let {
            brand: n,
            version: r
        } = t;
        return n + "/" + r
    }).join(" ") : navigator.userAgent
}

function fl(e) {
    return ft(e).defaultView || window
}

function on(e) {
    return e ? e instanceof fl(e).Element : !1
}

function Yr(e) {
    return e ? e instanceof fl(e).HTMLElement : !1
}

function Rx(e) {
    if (typeof ShadowRoot > "u") return !1;
    const t = fl(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function Px(e) {
    if (e.mozInputSource === 0 && e.isTrusted) return !0;
    const t = /Android/i;
    return (t.test(kx()) || t.test(Cx())) && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
}

function Nx(e) {
    return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0
}

function Tx() {
    return /apple/i.test(navigator.vendor)
}

function nd(e, t) {
    const n = ["mouse", "pen"];
    return t || n.push("", void 0), n.includes(e)
}

function _x(e) {
    return "nativeEvent" in e
}

function Qe(e, t) {
    if (!e || !t) return !1;
    const n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && Rx(n)) {
        let r = t;
        for (; r;) {
            if (e === r) return !0;
            r = r.parentNode || r.host
        }
    }
    return !1
}

function Ql(e) {
    const t = S.useRef(e);
    return Lt(() => {
        t.current = e
    }), t
}

function En(e) {
    let t = e.activeElement;
    for (;
        ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null;) {
        var n, r;
        t = t.shadowRoot.activeElement
    }
    return t
}
let rd = 0;

function Gt(e, t) {
    t === void 0 && (t = {});
    const {
        preventScroll: n = !1,
        cancelPrevious: r = !0,
        sync: o = !1
    } = t;
    r && cancelAnimationFrame(rd);
    const i = () => e == null ? void 0 : e.focus({
        preventScroll: n
    });
    o ? i() : rd = requestAnimationFrame(i)
}

function Ox(e, t) {
    var n;
    let r = [],
        o = (n = e.find(i => i.id === t)) == null ? void 0 : n.parentId;
    for (; o;) {
        const i = e.find(l => l.id === o);
        o = i == null ? void 0 : i.parentId, i && (r = r.concat(i))
    }
    return r
}

function Nr(e, t) {
    let n = e.filter(o => {
            var i;
            return o.parentId === t && ((i = o.context) == null ? void 0 : i.open)
        }),
        r = n;
    for (; r.length;) r = e.filter(o => {
        var i;
        return (i = r) == null ? void 0 : i.some(l => {
            var s;
            return o.parentId === l.id && ((s = o.context) == null ? void 0 : s.open)
        })
    }), n = n.concat(r);
    return n
}

function Um(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target
}
const jx = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";

function Hm(e) {
    return Yr(e) && e.matches(jx)
}

function bl(e) {
    e.preventDefault(), e.stopPropagation()
}
const eu = () => ({
    getShadowRoot: !0,
    displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});

function Vm(e, t) {
    const n = Zs(e, eu());
    t === "prev" && n.reverse();
    const r = n.indexOf(En(ft(e)));
    return n.slice(r + 1)[0]
}

function Lx() {
    return Vm(document.body, "next")
}

function Ax() {
    return Vm(document.body, "prev")
}

function od(e, t) {
    const n = t || e.currentTarget,
        r = e.relatedTarget;
    return !r || !Qe(n, r)
}
const Wm = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "fixed",
    whiteSpace: "nowrap",
    width: "1px",
    top: 0,
    left: 0
};
let Ix;

function id(e) {
    e.key === "Tab" && (e.target, clearTimeout(Ix))
}
const ld = S.forwardRef(function(t, n) {
        const [r, o] = S.useState();
        return Lt(() => (Tx() && o("button"), document.addEventListener("keydown", id), () => {
            document.removeEventListener("keydown", id)
        }), []), S.createElement("span", Ti({}, t, {
            ref: n,
            tabIndex: 0,
            role: r,
            "aria-hidden": r ? void 0 : !0,
            "data-floating-ui-focus-guard": "",
            style: Wm
        }))
    }),
    Fx = S.createContext(null),
    Mx = () => S.useContext(Fx),
    Dx = S.forwardRef(function(t, n) {
        return S.createElement("button", Ti({}, t, {
            type: "button",
            ref: n,
            tabIndex: -1,
            style: Wm
        }))
    });

function Km(e) {
    const {
        context: t,
        children: n,
        order: r = ["content"],
        guards: o = !0,
        initialFocus: i = 0,
        returnFocus: l = !0,
        modal: s = !0,
        visuallyHiddenDismiss: u = !1,
        closeOnFocusOut: a = !0
    } = e, {
        open: f,
        refs: c,
        nodeId: h,
        onOpenChange: y,
        events: g,
        dataRef: w,
        elements: {
            domReference: E,
            floating: d
        }
    } = t, p = Ql(r), m = Ql(i), x = Ql(l), k = cc(), R = Mx(), N = typeof i == "number" && i < 0, _ = S.useRef(null), D = S.useRef(null), I = S.useRef(!1), F = S.useRef(null), Q = S.useRef(!1), z = R != null, U = E && E.getAttribute("role") === "combobox" && Hm(E), J = S.useCallback(function(O) {
        return O === void 0 && (O = d), O ? Zs(O, eu()) : []
    }, [d]), B = S.useCallback(O => {
        const j = J(O);
        return p.current.map(A => E && A === "reference" ? E : d && A === "floating" ? d : j).filter(Boolean).flat()
    }, [E, d, p, J]);
    S.useEffect(() => {
        if (!s) return;

        function O(A) {
            if (A.key === "Tab") {
                Qe(d, En(ft(d))) && J().length === 0 && !U && bl(A);
                const M = B(),
                    oe = Um(A);
                p.current[0] === "reference" && oe === E && (bl(A), A.shiftKey ? Gt(M[M.length - 1]) : Gt(M[1])), p.current[1] === "floating" && oe === d && A.shiftKey && (bl(A), Gt(M[0]))
            }
        }
        const j = ft(d);
        return j.addEventListener("keydown", O), () => {
            j.removeEventListener("keydown", O)
        }
    }, [E, d, s, p, c, U, J, B]), S.useEffect(() => {
        if (!a) return;

        function O() {
            Q.current = !0, setTimeout(() => {
                Q.current = !1
            })
        }

        function j(A) {
            const M = A.relatedTarget;
            queueMicrotask(() => {
                const oe = !(Qe(E, M) || Qe(d, M) || Qe(M, d) || Qe(R == null ? void 0 : R.portalNode, M) || M != null && M.hasAttribute("data-floating-ui-focus-guard") || k && (Nr(k.nodesRef.current, h).find(W => {
                    var ce, fe;
                    return Qe((ce = W.context) == null ? void 0 : ce.elements.floating, M) || Qe((fe = W.context) == null ? void 0 : fe.elements.domReference, M)
                }) || Ox(k.nodesRef.current, h).find(W => {
                    var ce, fe;
                    return ((ce = W.context) == null ? void 0 : ce.elements.floating) === M || ((fe = W.context) == null ? void 0 : fe.elements.domReference) === M
                })));
                M && oe && !Q.current && M !== F.current && (I.current = !0, y(!1, A))
            })
        }
        if (d && Yr(E)) return E.addEventListener("focusout", j), E.addEventListener("pointerdown", O), !s && d.addEventListener("focusout", j), () => {
            E.removeEventListener("focusout", j), E.removeEventListener("pointerdown", O), !s && d.removeEventListener("focusout", j)
        }
    }, [E, d, s, h, k, R, y, a]), S.useEffect(() => {
        var O;
        const j = Array.from((R == null || (O = R.portalNode) == null ? void 0 : O.querySelectorAll("[data-floating-ui-portal]")) || []);

        function A() {
            return [_.current, D.current].filter(Boolean)
        }
        if (d && s) {
            const M = [d, ...j, ...A()],
                oe = Yw(p.current.includes("reference") || U ? M.concat(E || []) : M);
            return () => {
                oe()
            }
        }
    }, [E, d, s, p, R, U]), S.useEffect(() => {
        if (s && !o && d) {
            const O = [],
                j = eu(),
                A = Zs(ft(d).body, j),
                M = B(),
                oe = A.filter(W => !M.includes(W));
            return oe.forEach((W, ce) => {
                O[ce] = W.getAttribute("tabindex"), W.setAttribute("tabindex", "-1")
            }), () => {
                oe.forEach((W, ce) => {
                    const fe = O[ce];
                    fe == null ? W.removeAttribute("tabindex") : W.setAttribute("tabindex", fe)
                })
            }
        }
    }, [d, s, o, B]), Lt(() => {
        if (!d) return;
        const O = ft(d),
            j = En(O);
        queueMicrotask(() => {
            const A = B(d),
                M = m.current,
                oe = (typeof M == "number" ? A[M] : M.current) || d,
                W = Qe(d, j);
            !N && !W && f && Gt(oe, {
                preventScroll: oe === d
            })
        })
    }, [f, d, N, B, m]), Lt(() => {
        if (!d) return;
        let O = !1;
        const j = ft(d),
            A = En(j),
            M = w.current;
        F.current = A;

        function oe(W) {
            if (W.type === "escapeKey" && c.domReference.current && (F.current = c.domReference.current), ["referencePress", "escapeKey"].includes(W.type)) return;
            const ce = W.data.returnFocus;
            typeof ce == "object" ? (I.current = !1, O = ce.preventScroll) : I.current = !ce
        }
        return g.on("dismiss", oe), () => {
            g.off("dismiss", oe);
            const W = En(j);
            (Qe(d, W) || k && Nr(k.nodesRef.current, h).some(fe => {
                var bt;
                return Qe((bt = fe.context) == null ? void 0 : bt.elements.floating, W)
            }) || M.openEvent && ["click", "mousedown"].includes(M.openEvent.type)) && c.domReference.current && (F.current = c.domReference.current), x.current && Yr(F.current) && !I.current && Gt(F.current, {
                cancelPrevious: !1,
                preventScroll: O
            })
        }
    }, [d, x, w, c, g, k, h]), Lt(() => {
        if (R) return R.setFocusManagerState({ ...t,
            modal: s,
            closeOnFocusOut: a,
            open: f
        }), () => {
            R.setFocusManagerState(null)
        }
    }, [R, s, f, a, t]), Lt(() => {
        if (d && typeof MutationObserver == "function") {
            const O = () => {
                const A = d.getAttribute("tabindex");
                p.current.includes("floating") || En(ft(d)) !== c.domReference.current && J().length === 0 ? A !== "0" && d.setAttribute("tabindex", "0") : A !== "-1" && d.setAttribute("tabindex", "-1")
            };
            O();
            const j = new MutationObserver(O);
            return j.observe(d, {
                childList: !0,
                subtree: !0,
                attributes: !0
            }), () => {
                j.disconnect()
            }
        }
    }, [d, c, p, J]);

    function X(O) {
        return u && s ? S.createElement(Dx, {
            ref: O === "start" ? _ : D,
            onClick: j => y(!1, j.nativeEvent)
        }, typeof u == "string" ? u : "Dismiss") : null
    }
    const T = o && !U && (z || s);
    return S.createElement(S.Fragment, null, T && S.createElement(ld, {
        "data-type": "inside",
        ref: R == null ? void 0 : R.beforeInsideRef,
        onFocus: O => {
            if (s) {
                const A = B();
                Gt(r[0] === "reference" ? A[0] : A[A.length - 1])
            } else if (R != null && R.preserveTabOrder && R.portalNode)
                if (I.current = !1, od(O, R.portalNode)) {
                    const A = Lx() || E;
                    A == null || A.focus()
                } else {
                    var j;
                    (j = R.beforeOutsideRef.current) == null || j.focus()
                }
        }
    }), !U && X("start"), n, X("end"), T && S.createElement(ld, {
        "data-type": "inside",
        ref: R == null ? void 0 : R.afterInsideRef,
        onFocus: O => {
            if (s) Gt(B()[0]);
            else if (R != null && R.preserveTabOrder && R.portalNode)
                if (a && (I.current = !0), od(O, R.portalNode)) {
                    const A = Ax() || E;
                    A == null || A.focus()
                } else {
                    var j;
                    (j = R.afterOutsideRef.current) == null || j.focus()
                }
        }
    }))
}

function sd(e) {
    return Yr(e.target) && e.target.tagName === "BUTTON"
}

function ud(e) {
    return Hm(e)
}

function Qm(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        onOpenChange: r,
        dataRef: o,
        elements: {
            domReference: i
        }
    } = e, {
        enabled: l = !0,
        event: s = "click",
        toggle: u = !0,
        ignoreMouse: a = !1,
        keyboardHandlers: f = !0
    } = t, c = S.useRef(), h = S.useRef(!1);
    return S.useMemo(() => l ? {
        reference: {
            onPointerDown(y) {
                c.current = y.pointerType
            },
            onMouseDown(y) {
                y.button === 0 && (nd(c.current, !0) && a || s !== "click" && (n ? u && (!o.current.openEvent || o.current.openEvent.type === "mousedown") && r(!1, y.nativeEvent) : (y.preventDefault(), r(!0, y.nativeEvent))))
            },
            onClick(y) {
                if (s === "mousedown" && c.current) {
                    c.current = void 0;
                    return
                }
                nd(c.current, !0) && a || (n ? u && (!o.current.openEvent || o.current.openEvent.type === "click") && r(!1, y.nativeEvent) : r(!0, y.nativeEvent))
            },
            onKeyDown(y) {
                c.current = void 0, !(y.defaultPrevented || !f || sd(y)) && (y.key === " " && !ud(i) && (y.preventDefault(), h.current = !0), y.key === "Enter" && (n ? u && r(!1, y.nativeEvent) : r(!0, y.nativeEvent)))
            },
            onKeyUp(y) {
                y.defaultPrevented || !f || sd(y) || ud(i) || y.key === " " && h.current && (h.current = !1, n ? u && r(!1, y.nativeEvent) : r(!0, y.nativeEvent))
            }
        }
    } : {}, [l, o, s, a, f, i, u, n, r])
}
const zx = Qo["useInsertionEffect".toString()],
    Bx = zx || (e => e());

function Ko(e) {
    const t = S.useRef(() => {});
    return Bx(() => {
        t.current = e
    }), S.useCallback(function() {
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return t.current == null ? void 0 : t.current(...r)
    }, [])
}

function ql(e, t) {
    if (t == null) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    const n = e;
    return n.target != null && t.contains(n.target)
}
const $x = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick"
    },
    Ux = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture"
    },
    Hx = e => {
        var t, n;
        return {
            escapeKeyBubbles: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
            outsidePressBubbles: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
        }
    };

function bm(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        onOpenChange: r,
        events: o,
        nodeId: i,
        elements: {
            reference: l,
            domReference: s,
            floating: u
        },
        dataRef: a
    } = e, {
        enabled: f = !0,
        escapeKey: c = !0,
        outsidePress: h = !0,
        outsidePressEvent: y = "pointerdown",
        referencePress: g = !1,
        referencePressEvent: w = "pointerdown",
        ancestorScroll: E = !1,
        bubbles: d
    } = t, p = cc(), m = Ex() != null, x = Ko(typeof h == "function" ? h : () => !1), k = typeof h == "function" ? x : h, R = S.useRef(!1), {
        escapeKeyBubbles: N,
        outsidePressBubbles: _
    } = Hx(d), D = Ko(F => {
        if (!n || !f || !c || F.key !== "Escape") return;
        const Q = p ? Nr(p.nodesRef.current, i) : [];
        if (!N && (F.stopPropagation(), Q.length > 0)) {
            let z = !0;
            if (Q.forEach(U => {
                    var J;
                    if ((J = U.context) != null && J.open && !U.context.dataRef.current.__escapeKeyBubbles) {
                        z = !1;
                        return
                    }
                }), !z) return
        }
        o.emit("dismiss", {
            type: "escapeKey",
            data: {
                returnFocus: {
                    preventScroll: !1
                }
            }
        }), r(!1, _x(F) ? F.nativeEvent : F)
    }), I = Ko(F => {
        const Q = R.current;
        if (R.current = !1, Q || typeof k == "function" && !k(F)) return;
        const z = Um(F);
        if (Yr(z) && u) {
            const B = z.clientWidth > 0 && z.scrollWidth > z.clientWidth,
                X = z.clientHeight > 0 && z.scrollHeight > z.clientHeight;
            let T = X && F.offsetX > z.clientWidth;
            if (X && fl(u).getComputedStyle(z).direction === "rtl" && (T = F.offsetX <= z.offsetWidth - z.clientWidth), T || B && F.offsetY > z.clientHeight) return
        }
        const U = p && Nr(p.nodesRef.current, i).some(B => {
            var X;
            return ql(F, (X = B.context) == null ? void 0 : X.elements.floating)
        });
        if (ql(F, u) || ql(F, s) || U) return;
        const J = p ? Nr(p.nodesRef.current, i) : [];
        if (J.length > 0) {
            let B = !0;
            if (J.forEach(X => {
                    var T;
                    if ((T = X.context) != null && T.open && !X.context.dataRef.current.__outsidePressBubbles) {
                        B = !1;
                        return
                    }
                }), !B) return
        }
        o.emit("dismiss", {
            type: "outsidePress",
            data: {
                returnFocus: m ? {
                    preventScroll: !0
                } : Px(F) || Nx(F)
            }
        }), r(!1, F)
    });
    return S.useEffect(() => {
        if (!n || !f) return;
        a.current.__escapeKeyBubbles = N, a.current.__outsidePressBubbles = _;

        function F(U) {
            r(!1, U)
        }
        const Q = ft(u);
        c && Q.addEventListener("keydown", D), k && Q.addEventListener(y, I);
        let z = [];
        return E && (on(s) && (z = sn(s)), on(u) && (z = z.concat(sn(u))), !on(l) && l && l.contextElement && (z = z.concat(sn(l.contextElement)))), z = z.filter(U => {
            var J;
            return U !== ((J = Q.defaultView) == null ? void 0 : J.visualViewport)
        }), z.forEach(U => {
            U.addEventListener("scroll", F, {
                passive: !0
            })
        }), () => {
            c && Q.removeEventListener("keydown", D), k && Q.removeEventListener(y, I), z.forEach(U => {
                U.removeEventListener("scroll", F)
            })
        }
    }, [a, u, s, l, c, k, y, n, r, E, f, N, _, D, I]), S.useEffect(() => {
        R.current = !1
    }, [k, y]), S.useMemo(() => f ? {
        reference: {
            onKeyDown: D,
            [$x[w]]: F => {
                g && (o.emit("dismiss", {
                    type: "referencePress",
                    data: {
                        returnFocus: !1
                    }
                }), r(!1, F.nativeEvent))
            }
        },
        floating: {
            onKeyDown: D,
            [Ux[y]]: () => {
                R.current = !0
            }
        }
    } : {}, [f, o, g, y, w, r, D])
}

function qm(e) {
    var t;
    e === void 0 && (e = {});
    const {
        open: n = !1,
        onOpenChange: r,
        nodeId: o
    } = e, [i, l] = S.useState(null), s = ((t = e.elements) == null ? void 0 : t.reference) || i, u = bw(e), a = cc(), f = Ko((x, k) => {
        x && (h.current.openEvent = k), r == null || r(x, k)
    }), c = S.useRef(null), h = S.useRef({}), y = S.useState(() => wx())[0], g = cl(), w = S.useCallback(x => {
        const k = on(x) ? {
            getBoundingClientRect: () => x.getBoundingClientRect(),
            contextElement: x
        } : x;
        u.refs.setReference(k)
    }, [u.refs]), E = S.useCallback(x => {
        (on(x) || x === null) && (c.current = x, l(x)), (on(u.refs.reference.current) || u.refs.reference.current === null || x !== null && !on(x)) && u.refs.setReference(x)
    }, [u.refs]), d = S.useMemo(() => ({ ...u.refs,
        setReference: E,
        setPositionReference: w,
        domReference: c
    }), [u.refs, E, w]), p = S.useMemo(() => ({ ...u.elements,
        domReference: s
    }), [u.elements, s]), m = S.useMemo(() => ({ ...u,
        refs: d,
        elements: p,
        dataRef: h,
        nodeId: o,
        floatingId: g,
        events: y,
        open: n,
        onOpenChange: f
    }), [u, o, g, y, n, f, d, p]);
    return Lt(() => {
        const x = a == null ? void 0 : a.nodesRef.current.find(k => k.id === o);
        x && (x.context = m)
    }), S.useMemo(() => ({ ...u,
        context: m,
        refs: d,
        elements: p
    }), [u, d, p, m])
}

function Gl(e, t, n) {
    const r = new Map;
    return { ...n === "floating" && {
            tabIndex: -1
        },
        ...e,
        ...t.map(o => o ? o[n] : null).concat(e).reduce((o, i) => (i && Object.entries(i).forEach(l => {
            let [s, u] = l;
            if (s.indexOf("on") === 0) {
                if (r.has(s) || r.set(s, []), typeof u == "function") {
                    var a;
                    (a = r.get(s)) == null || a.push(u), o[s] = function() {
                        for (var f, c = arguments.length, h = new Array(c), y = 0; y < c; y++) h[y] = arguments[y];
                        return (f = r.get(s)) == null ? void 0 : f.map(g => g(...h)).find(g => g !== void 0)
                    }
                }
            } else o[s] = u
        }), o), {})
    }
}

function Gm(e) {
    e === void 0 && (e = []);
    const t = e,
        n = S.useCallback(i => Gl(i, e, "reference"), t),
        r = S.useCallback(i => Gl(i, e, "floating"), t),
        o = S.useCallback(i => Gl(i, e, "item"), e.map(i => i == null ? void 0 : i.item));
    return S.useMemo(() => ({
        getReferenceProps: n,
        getFloatingProps: r,
        getItemProps: o
    }), [n, r, o])
}

function Xm(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        floatingId: r
    } = e, {
        enabled: o = !0,
        role: i = "dialog"
    } = t, l = cl();
    return S.useMemo(() => {
        const s = {
            id: r,
            role: i
        };
        return o ? i === "tooltip" ? {
            reference: {
                "aria-describedby": n ? r : void 0
            },
            floating: s
        } : {
            reference: {
                "aria-expanded": n ? "true" : "false",
                "aria-haspopup": i === "alertdialog" ? "dialog" : i,
                "aria-controls": n ? r : void 0,
                ...i === "listbox" && {
                    role: "combobox"
                },
                ...i === "menu" && {
                    id: l
                }
            },
            floating: { ...s,
                ...i === "menu" && {
                    "aria-labelledby": l
                }
            }
        } : {}
    }, [o, i, n, r, l])
}

function fc({
    player: e,
    onClose: t
}) {
    let [n, r] = S.useState();
    S.useEffect(() => {
        if (e == null) return;
        if ("rankings" in e) {
            r(e);
            return
        }
        let m = document.getElementById("html"),
            x = m.style.overflow;
        return m.style.overflow = "hidden", ju("/profile/" + e.uuid).then(k => {
            k.data.region = Wi(k.data.region), r(k.data)
        }), () => {
            m.style.overflow = x
        }
    }, [e]);
    let o = n != null ? Object.entries(n == null ? void 0 : n.rankings).map(([m, x]) => ({
            k: m,
            v: x
        })).sort((m, x) => !m.v.retired && x.v.retired ? -1 : m.v.retired && !x.v.retired ? 1 : m.v.tier < x.v.tier ? -1 : m.v.tier > x.v.tier ? 1 : m.v.pos < x.v.pos ? -1 : m.v.pos > x.v.pos ? 1 : it.indexOf(m.k) < it.indexOf(x.k) ? -1 : it.indexOf(m.k) > it.indexOf(x.k) ? 1 : 0) : [],
        i = e == null ? null : xp(e.points, n == null ? void 0 : n.rankings),
        l = e == null ? "" : (i == null ? void 0 : i.title) || "",
        s = i == null ? void 0 : i.reqString.split(`
`),
        [u, a] = S.useState(!1);
    const {
        refs: f,
        floatingStyles: c,
        context: h
    } = qm({
        open: u,
        onOpenChange: () => {},
        middleware: [Ep(-88 - (((s == null ? void 0 : s.length) || 1) - 1) * 30), kp()],
        whileElementsMounted: Op
    });
    S.useEffect(() => {
        let m = f.reference.current;
        if (m == null) return;
        let x = k => {
            k.type == "mouseenter" ? a(!0) : k.type == "mouseleave" ? a(!1) : k.type == "click" && a(!u)
        };
        return m.addEventListener("mouseenter", x), m.addEventListener("mouseleave", x), m.addEventListener("click", x), () => {
            m.removeEventListener("mouseenter", x), m.removeEventListener("mouseleave", x), m.removeEventListener("click", x), window.removeEventListener("click", x)
        }
    }, [f, u]);
    const y = Qm(h),
        g = bm(h),
        w = Xm(h),
        {
            getReferenceProps: E,
            getFloatingProps: d
        } = Gm([y, g, w]),
        p = cl();
    return v.jsxs(Zy, {
        className: By,
        onClose: t,
        children: [v.jsxs("div", {
            className: $y,
            children: [v.jsx("div", {
                className: Hy,
                children: v.jsxs("div", {
                    className: Vy,
                    children: [v.jsx("img", {
                        src: e == null ? "" : "https://render.crafty.gg/3d/bust/" + (e == null ? void 0 : e.uuid),
                        alt: ""
                    }), v.jsx(Wn, {
                        color: "#777777",
                        className: "center"
                    })]
                })
            }), v.jsx("div", {
                style: {
                    flexGrow: 1
                }
            }), v.jsx("div", {
                className: zy,
                onClick: () => {
                    t()
                },
                children: v.jsx("i", {
                    className: "fa-solid fa-xmark"
                })
            })]
        }), v.jsx("div", {
            className: Wy
        }), v.jsxs("div", {
            className: Ky,
            children: [v.jsx("span", {
                className: Uy,
                children: v.jsx("strong", {
                    children: (e == null ? void 0 : e.name) || ""
                })
            }), v.jsx("div", {
                style: {
                    marginBottom: "10px"
                }
            }), v.jsx("hr", {}), v.jsx("div", {
                style: {
                    marginBottom: "25px"
                }
            }), e != null && v.jsxs(v.Fragment, {
                children: [v.jsxs("span", {
                    children: [v.jsxs("div", {
                        style: {
                            position: "relative",
                            maxHeight: "30px",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "15px"
                        },
                        children: [v.jsx("span", {
                            style: {
                                marginRight: "5px"
                            },
                            children: l
                        }), i != null && l != "Unranked" && v.jsxs(v.Fragment, {
                            children: [v.jsx("img", {
                                style: {
                                    height: "100%",
                                    width: "40px"
                                },
                                src: dp[l.toLowerCase().replace(/ /g, "_")],
                                ref: f.setReference,
                                ...E()
                            }), u && (i == null ? void 0 : i.reqString) && v.jsx(Km, {
                                context: h,
                                modal: !1,
                                children: v.jsx("div", {
                                    className: fp,
                                    ref: f.setFloating,
                                    style: c,
                                    "aria-labelledby": p,
                                    ...d(),
                                    children: s.map(m => v.jsxs(v.Fragment, {
                                        children: [m, v.jsx("br", {})]
                                    }))
                                })
                            })]
                        })]
                    }), v.jsxs("span", {
                        className: Qy,
                        children: ["#", (n == null ? void 0 : n.overall) || "---", " Overall "]
                    }), v.jsxs("span", {
                        className: by,
                        children: ["(", e.points, " Points)"]
                    })]
                }), "Region: ", (n == null ? void 0 : n.region.name) || "-"]
            }) || v.jsxs(v.Fragment, {
                children: [v.jsx("div", {
                    style: {
                        marginBottom: "10px"
                    }
                }), v.jsx(Wn, {
                    color: "#7f7f7f",
                    style: {
                        left: "50%",
                        transform: "translate(-50%, 0%)"
                    }
                }), v.jsx("div", {
                    style: {
                        marginBottom: "10px"
                    }
                })]
            }), v.jsx("br", {}), v.jsxs("div", {
                className: Eu,
                children: [v.jsxs("div", {
                    className: qy,
                    children: [v.jsx(me, {
                        ranking: o[0],
                        popover: !0
                    }), v.jsx(me, {
                        ranking: o[3],
                        popover: !0
                    }), v.jsx(me, {
                        ranking: o[6],
                        popover: !0
                    })]
                }), v.jsxs("div", {
                    className: Yy,
                    children: [v.jsx(me, {
                        ranking: o[1],
                        popover: !0
                    }), v.jsx(me, {
                        ranking: o[4],
                        popover: !0,
                        loading: n == null
                    }), v.jsx(me, {
                        ranking: o[7],
                        popover: !0
                    })]
                }), v.jsxs("div", {
                    className: Xy,
                    children: [v.jsx(me, {
                        ranking: o[2],
                        popover: !0
                    }), v.jsx(me, {
                        ranking: o[5],
                        popover: !0
                    }), v.jsx(me, {
                        ranking: o[8],
                        popover: !0
                    })]
                })]
            }), v.jsx("p", {
                className: Jy,
                children: v.jsx("i", {
                    children: "Hover to see peak tiers, if any"
                })
            })]
        })]
    })
}

function me({
    ranking: e,
    loading: t,
    popover: n = !1
}) {
    var w, E, d, p, m, x, k, R;
    let r = e == null ? "" : ((w = e.v) == null ? void 0 : w.pos) == 0 ? "ht" : "lt",
        [o, i] = S.useState(!1);
    const {
        refs: l,
        floatingStyles: s,
        context: u
    } = qm({
        open: o,
        onOpenChange: () => {},
        middleware: [Ep(-115 - ((E = e == null ? void 0 : e.v) != null && E.peak_tier ? 20 : 0)), kp()],
        whileElementsMounted: Op
    });
    S.useEffect(() => {
        let N = l.reference.current;
        if ((e == null ? void 0 : e.v) == null) return;
        let _ = D => {
            D.type == "mouseenter" ? i(!0) : D.type == "mouseleave" ? i(!1) : D.type == "click" && i(!o)
        };
        return N.addEventListener("mouseenter", _), N.addEventListener("mouseleave", _), N.addEventListener("click", _), () => {
            N.removeEventListener("mouseenter", _), N.removeEventListener("mouseleave", _), N.removeEventListener("click", _), window.removeEventListener("click", _)
        }
    }, [l, o, e]);
    const a = Qm(u),
        f = bm(u),
        c = Xm(u),
        {
            getReferenceProps: h,
            getFloatingProps: y
        } = Gm([a, f, c]),
        g = cl();
    return v.jsxs(v.Fragment, {
        children: [v.jsxs("div", {
            className: `${ku} ${Gy}`,
            ref: l.setReference,
            ...h(),
            children: [e != null && v.jsx("img", {
                src: jr[e.k]
            }) || t && v.jsx(Wn, {
                className: "center",
                color: "#777777"
            }), v.jsx("div", {
                className: `${Cu} ${pg[r]} ${(d=e==null?void 0:e.v)!=null&&d.retired?Ru:""}`,
                children: e != null && v.jsxs(v.Fragment, {
                    children: [(p = e == null ? void 0 : e.v) != null && p.retired ? "R" : "", ((m = e == null ? void 0 : e.v) == null ? void 0 : m.pos) == 0 ? "HT" : "LT", (x = e == null ? void 0 : e.v) == null ? void 0 : x.tier]
                })
            })]
        }), n && o && v.jsx(Km, {
            context: u,
            modal: !1,
            children: v.jsxs("div", {
                className: fp,
                ref: l.setFloating,
                style: s,
                "aria-labelledby": g,
                ...y(),
                children: [((k = e == null ? void 0 : e.v) == null ? void 0 : k.peak_pos) != null && v.jsxs("h5", {
                    id: g,
                    children: ["Peak Tier: ", (((R = e == null ? void 0 : e.v) == null ? void 0 : R.peak_pos) == 0 ? "HT" : "LT") + (e == null ? void 0 : e.v.peak_tier)]
                }), v.jsxs("h5", {
                    children: [j0(e == null ? void 0 : e.v), " Points"]
                })]
            })
        })]
    })
}
let ad;

function Vx() {
    let e = Zr(),
        [t, n] = S.useState(""),
        [r, o] = S.useState(!1),
        [i, l] = S.useState(null),
        [s, u] = S.useState("");
    return S.useEffect(() => {
        r != !1 && ju("/search_profile/" + t).then(a => {
            a.data.region = Wi(a.data.region), console.log(a.data), l(a.data)
        }).catch(a => {
            o(!1), u("Player not found"), clearTimeout(ad), ad = setTimeout(() => {
                u("")
            }, 1e3)
        })
    }, [r]), v.jsxs("div", {
        className: au,
        children: [v.jsxs("div", {
            className: hu,
            children: [v.jsxs("div", {
                className: mu,
                children: [v.jsx("i", {
                    className: `${vu} fa-solid fa-magnifying-glass`
                }), v.jsx("input", {
                    type: "text",
                    placeholder: "Search",
                    content: t,
                    onChange: a => {
                        n(a.currentTarget.value)
                    },
                    onKeyDown: a => {
                        a.key == "Enter" && o(!0)
                    }
                }), v.jsx("i", {
                    className: `${gu} fa-solid fa-arrow-right ${t.length>2?yu:""}`,
                    onClick: () => {
                        t.length <= 2 || o(!0)
                    }
                })]
            }), s && v.jsx("div", {
                className: wu,
                children: s
            })]
        }), r && v.jsx(fc, {
            player: i,
            onClose: () => {
                o(!1), l(null)
            }
        }), v.jsx("div", {
            className: pu,
            onClick: () => e("/"),
            children: "mctiers.com"
        })]
    })
}

function Wx() {
    Zr();
    let [e, t] = S.useState([]);
    return S.useState(() => {
        let n = [];
        Object.values(jr).forEach(r => n.push(r)), Object.values(dp).forEach(r => n.push(r)), setInterval(() => {
            t([n[0], ...e]), n.shift()
        }, 300)
    }), v.jsxs("div", {
        className: cu,
        children: [v.jsxs("div", {
            className: fu,
            children: ["Copyright © 2023 QuadraticKid, Marlow", v.jsx("br", {}), "All Rights Reserved"]
        }), v.jsx("div", {
            className: du
        }), v.jsx("div", {
            className: xu,
            children: e.map((n, r) => v.jsx("img", {
                src: n
            }, r))
        })]
    })
}
let _i = (e, t) => {};

function Kx() {
    let [e, t] = S.useState("Loading MCTiers"), [n, r] = S.useState(!0);
    return _i = (o, i) => {
        t(o), r(i)
    }, v.jsx("div", {
        className: su,
        children: v.jsxs(fg, {
            children: [v.jsxs("div", {
                className: uu,
                children: [e && v.jsxs("div", {
                    className: Su,
                    children: [e, " ", v.jsx("br", {}), v.jsx(Wn, {})]
                }), n && v.jsxs(v.Fragment, {
                    children: [v.jsx(Vx, {}), v.jsx(Od, {
                        children: v.jsxs(en, {
                            path: "/",
                            children: [v.jsx(en, {
                                index: !0,
                                element: v.jsx(Dc, {})
                            }), v.jsx(en, {
                                path: "/ranking/:id/*",
                                element: v.jsx(Dc, {})
                            }), v.jsx(en, {
                                path: "*",
                                element: v.jsx(rs, {
                                    code: 404,
                                    msg: "Page Not Found"
                                })
                            })]
                        })
                    })]
                })]
            }), v.jsx(Wx, {})]
        })
    })
}
var Ym, cd = Im;
Ym = cd.createRoot, cd.hydrateRoot;
const Qx = Ym(document.getElementById("root"));
Qx.render(v.jsx(Kx, {}));