// OpenLayers. See https://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/openlayers/master/LICENSE.md
// Version: v4.3.2
;(function (root, factory) {
    if (typeof exports === "object") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.ol = factory();
    }
}(this, function () {
    var OPENLAYERS = {};
    var k, aa = this;

    function r(a, b) {
        var c = OPENLAYERS;
        a = a.split(".");
        c = c || aa;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    var ba, ca;

    function fa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function ha(a, b) {
        return 0 <= a.indexOf(b)
    }

    function ja(a, b, c) {
        var d = a.length;
        if (a[0] <= b)return 0;
        if (!(b <= a[d - 1]))if (0 < c)for (c = 1; c < d; ++c) {
            if (a[c] < b)return c - 1
        } else if (0 > c)for (c = 1; c < d; ++c) {
            if (a[c] <= b)return c
        } else for (c = 1; c < d; ++c) {
            if (a[c] == b)return c;
            if (a[c] < b)return a[c - 1] - b < b - a[c] ? c - 1 : c
        }
        return d - 1
    }

    function ka(a, b) {
        var c = Array.isArray(b) ? b : [b], d = c.length;
        for (b = 0; b < d; b++)a[a.length] = c[b]
    }

    function la(a, b) {
        for (var c = a.length >>> 0, d, e = 0; e < c; e++)if (d = a[e], b(d, e, a))return d;
        return null
    }

    function ma(a, b) {
        var c = a.length;
        if (c !== b.length)return !1;
        for (var d = 0; d < c; d++)if (a[d] !== b[d])return !1;
        return !0
    }

    function na(a) {
        var b = oa, c = a.length, d = Array(a.length), e;
        for (e = 0; e < c; e++)d[e] = {index: e, value: a[e]};
        d.sort(function (a, c) {
            return b(a.value, c.value) || a.index - c.index
        });
        for (e = 0; e < a.length; e++)a[e] = d[e].value
    }

    function pa(a, b) {
        var c;
        return a.every(function (d, e) {
            c = e;
            return !b(d, e, a)
        }) ? -1 : c
    }

    function qa(a, b) {
        var c = b || fa;
        return a.every(function (b, e) {
            if (!e)return !0;
            b = c(a[e - 1], b);
            return !(0 < b || 0 === b)
        })
    };
    function v(a, b) {
        a.prototype = Object.create(b.prototype);
        a.prototype.constructor = a
    }

    function ra() {
    }

    function w(a) {
        return a.ip || (a.ip = ++sa)
    }

    var sa = 0;

    function ua(a) {
        this.message = "Assertion failed. See https://openlayers.org/en/v4.3.2/doc/errors/#" + a + " for details.";
        this.code = a;
        this.name = "AssertionError"
    }

    v(ua, Error);
    function va(a, b) {
        if (!a)throw new ua(b);
    };
    function wa(a, b, c, d) {
        this.ca = a;
        this.da = b;
        this.ea = c;
        this.ha = d
    }

    function xa(a, b, c) {
        return a.ca <= b && b <= a.da && a.ea <= c && c <= a.ha
    }

    function ya(a, b) {
        return a.ca == b.ca && a.ea == b.ea && a.da == b.da && a.ha == b.ha
    }

    function za(a, b) {
        return a.ca <= b.da && a.da >= b.ca && a.ea <= b.ha && a.ha >= b.ea
    };
    function Aa(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    var Ba = function () {
        var a;
        "cosh" in Math ? a = Math.cosh : a = function (a) {
            a = Math.exp(a);
            return (a + 1 / a) / 2
        };
        return a
    }();

    function Ca(a) {
        va(0 < a, 29);
        return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2))
    }

    function Da(a, b, c, d, e, f) {
        var g = e - c, h = f - d;
        if (g || h) {
            var l = ((a - c) * g + (b - d) * h) / (g * g + h * h);
            1 < l ? (c = e, d = f) : 0 < l && (c += g * l, d += h * l)
        }
        return Ea(a, b, c, d)
    }

    function Ea(a, b, c, d) {
        a = c - a;
        b = d - b;
        return a * a + b * b
    }

    function Fa(a) {
        return a * Math.PI / 180
    }

    function Ga(a, b) {
        a %= b;
        return 0 > a * b ? a + b : a
    }

    function Ha(a, b, c) {
        return a + c * (b - a)
    };
    function Ia(a, b, c) {
        void 0 === c && (c = [0, 0]);
        c[0] = a[0] + 2 * b;
        c[1] = a[1] + 2 * b;
        return c
    }

    function Ja(a, b, c) {
        void 0 === c && (c = [0, 0]);
        c[0] = a[0] * b + .5 | 0;
        c[1] = a[1] * b + .5 | 0;
        return c
    }

    function Ka(a, b) {
        if (Array.isArray(a))return a;
        void 0 === b ? b = [a, a] : b[0] = b[1] = a;
        return b
    };
    function La(a) {
        for (var b = Ma(), c = 0, d = a.length; c < d; ++c)Na(b, a[c]);
        return b
    }

    function Oa(a, b, c) {
        return c ? (c[0] = a[0] - b, c[1] = a[1] - b, c[2] = a[2] + b, c[3] = a[3] + b, c) : [a[0] - b, a[1] - b, a[2] + b, a[3] + b]
    }

    function Pa(a, b) {
        return b ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b) : a.slice()
    }

    function Qa(a, b, c) {
        b = b < a[0] ? a[0] - b : a[2] < b ? b - a[2] : 0;
        a = c < a[1] ? a[1] - c : a[3] < c ? c - a[3] : 0;
        return b * b + a * a
    }

    function Ra(a, b) {
        return Sa(a, b[0], b[1])
    }

    function Ta(a, b) {
        return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
    }

    function Sa(a, b, c) {
        return a[0] <= b && b <= a[2] && a[1] <= c && c <= a[3]
    }

    function Ua(a, b) {
        var c = a[1], d = a[2], e = a[3], f = b[0];
        b = b[1];
        var g = 0;
        f < a[0] ? g |= 16 : f > d && (g |= 4);
        b < c ? g |= 8 : b > e && (g |= 2);
        g || (g = 1);
        return g
    }

    function Ma() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }

    function Va(a, b, c, d, e) {
        return e ? (e[0] = a, e[1] = b, e[2] = c, e[3] = d, e) : [a, b, c, d]
    }

    function Wa(a) {
        return Va(Infinity, Infinity, -Infinity, -Infinity, a)
    }

    function Xa(a, b) {
        var c = a[0];
        a = a[1];
        return Va(c, a, c, a, b)
    }

    function Za(a, b, c, d, e) {
        e = Wa(e);
        return $a(e, a, b, c, d)
    }

    function ab(a, b) {
        return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3]
    }

    function bb(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3]);
        return a
    }

    function Na(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1])
    }

    function $a(a, b, c, d, e) {
        for (; c < d; c += e) {
            var f = a, g = b[c], h = b[c + 1];
            f[0] = Math.min(f[0], g);
            f[1] = Math.min(f[1], h);
            f[2] = Math.max(f[2], g);
            f[3] = Math.max(f[3], h)
        }
        return a
    }

    function cb(a, b, c) {
        var d;
        return (d = b.call(c, db(a))) || (d = b.call(c, eb(a))) || (d = b.call(c, fb(a))) ? d : (d = b.call(c, gb(a))) ? d : !1
    }

    function hb(a) {
        var b = 0;
        ib(a) || (b = jb(a) * kb(a));
        return b
    }

    function db(a) {
        return [a[0], a[1]]
    }

    function eb(a) {
        return [a[2], a[1]]
    }

    function lb(a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    }

    function mb(a, b, c, d, e) {
        var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        var g = Math.sin(c);
        c = f * b;
        f *= g;
        b *= d;
        var h = d * g, l = a[0], m = a[1];
        a = l - c + h;
        d = l - c - h;
        g = l + c - h;
        c = l + c + h;
        h = m - f - b;
        l = m - f + b;
        var n = m + f + b;
        f = m + f - b;
        return Va(Math.min(a, d, g, c), Math.min(h, l, n, f), Math.max(a, d, g, c), Math.max(h, l, n, f), e)
    }

    function kb(a) {
        return a[3] - a[1]
    }

    function nb(a, b, c) {
        c = c ? c : Ma();
        ob(a, b) && (c[0] = a[0] > b[0] ? a[0] : b[0], c[1] = a[1] > b[1] ? a[1] : b[1], c[2] = a[2] < b[2] ? a[2] : b[2], c[3] = a[3] < b[3] ? a[3] : b[3]);
        return c
    }

    function gb(a) {
        return [a[0], a[3]]
    }

    function fb(a) {
        return [a[2], a[3]]
    }

    function jb(a) {
        return a[2] - a[0]
    }

    function ob(a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
    }

    function ib(a) {
        return a[2] < a[0] || a[3] < a[1]
    }

    function pb(a, b) {
        var c = (a[2] - a[0]) / 2 * (b - 1);
        b = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= b;
        a[3] += b
    }

    function qb(a, b, c) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(a, a, 2);
        var d = [a[0], a[2], a[4], a[6]], e = [a[1], a[3], a[5], a[7]];
        b = Math.min.apply(null, d);
        a = Math.min.apply(null, e);
        d = Math.max.apply(null, d);
        e = Math.max.apply(null, e);
        return Va(b, a, d, e, c)
    };
    var rb = "function" === typeof Object.assign ? Object.assign : function (a, b) {
        if (!a || null === a)throw new TypeError("Cannot convert undefined or null to object");
        for (var c = Object(a), d = 1, e = arguments.length; d < e; ++d) {
            var f = arguments[d];
            if (void 0 !== f && null !== f)for (var g in f)f.hasOwnProperty(g) && (c[g] = f[g])
        }
        return c
    };

    function sb(a) {
        for (var b in a)delete a[b]
    }

    function tb(a) {
        var b = [], c;
        for (c in a)b.push(a[c]);
        return b
    }

    function ub(a) {
        for (var b in a)return !1;
        return !b
    };
    /*

     Latitude/longitude spherical geodesy formulae taken from
     http://www.movable-type.co.uk/scripts/latlong.html
     Licensed under CC-BY-3.0.
     */
    function vb(a) {
        this.radius = a
    }

    vb.prototype.a = function (a) {
        return wb(a, this.radius)
    };
    vb.prototype.b = function (a, b) {
        return xb(a, b, this.radius)
    };
    vb.prototype.offset = function (a, b, c) {
        var d = Fa(a[1]);
        b /= this.radius;
        var e = Math.asin(Math.sin(d) * Math.cos(b) + Math.cos(d) * Math.sin(b) * Math.cos(c));
        return [180 * (Fa(a[0]) + Math.atan2(Math.sin(c) * Math.sin(b) * Math.cos(d), Math.cos(b) - Math.sin(d) * Math.sin(e))) / Math.PI, 180 * e / Math.PI]
    };
    function yb(a, b) {
        var c = b || {}, d = c.radius || 6371008.8;
        c = c.projection || "EPSG:3857";
        a = a.clone().mb(c, "EPSG:4326");
        var e = a.T();
        c = 0;
        var f;
        switch (e) {
            case "Point":
            case "MultiPoint":
                break;
            case "LineString":
            case "LinearRing":
                b = a.V();
                c = zb(b, d);
                break;
            case "MultiLineString":
            case "Polygon":
                b = a.V();
                a = 0;
                for (e = b.length; a < e; ++a)c += zb(b[a], d);
                break;
            case "MultiPolygon":
                b = a.V();
                a = 0;
                for (e = b.length; a < e; ++a) {
                    var g = b[a];
                    var h = 0;
                    for (f = g.length; h < f; ++h)c += zb(g[h], d)
                }
                break;
            case "GeometryCollection":
                d = a.kd();
                a = 0;
                for (e = d.length; a <
                e; ++a)c += yb(d[a], b);
                break;
            default:
                throw Error("Unsupported geometry type: " + e);
        }
        return c
    }

    function zb(a, b) {
        for (var c = 0, d = 0, e = a.length; d < e - 1; ++d)c += xb(a[d], a[d + 1], b);
        return c
    }

    function xb(a, b, c) {
        var d = Fa(a[1]), e = Fa(b[1]), f = (e - d) / 2;
        a = Fa(b[0] - a[0]) / 2;
        d = Math.sin(f) * Math.sin(f) + Math.sin(a) * Math.sin(a) * Math.cos(d) * Math.cos(e);
        return 2 * c * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
    }

    function Ab(a, b) {
        var c = b || {}, d = c.radius || 6371008.8;
        c = c.projection || "EPSG:3857";
        a = a.clone().mb(c, "EPSG:4326");
        var e = a.T();
        c = 0;
        var f;
        switch (e) {
            case "Point":
            case "MultiPoint":
            case "LineString":
            case "MultiLineString":
            case "LinearRing":
                break;
            case "Polygon":
                b = a.V();
                c = Math.abs(wb(b[0], d));
                a = 1;
                for (e = b.length; a < e; ++a)c -= Math.abs(wb(b[a], d));
                break;
            case "MultiPolygon":
                b = a.V();
                a = 0;
                for (e = b.length; a < e; ++a) {
                    var g = b[a];
                    c += Math.abs(wb(g[0], d));
                    var h = 1;
                    for (f = g.length; h < f; ++h)c -= Math.abs(wb(g[h], d))
                }
                break;
            case "GeometryCollection":
                d =
                    a.kd();
                a = 0;
                for (e = d.length; a < e; ++a)c += Ab(d[a], b);
                break;
            default:
                throw Error("Unsupported geometry type: " + e);
        }
        return c
    }

    function wb(a, b) {
        for (var c = 0, d = a.length, e = a[d - 1][0], f = a[d - 1][1], g = 0; g < d; g++) {
            var h = a[g][0], l = a[g][1];
            c += Fa(h - e) * (2 + Math.sin(Fa(f)) + Math.sin(Fa(l)));
            e = h;
            f = l
        }
        return c * b * b / 2
    };
    var Bb = {};
    Bb.degrees = 12741994 * Math.PI / 360;
    Bb.ft = .3048;
    Bb.m = 1;
    Bb["us-ft"] = 1200 / 3937;
    var Cb = null;

    function Db(a) {
        this.qb = a.code;
        this.b = a.units;
        this.i = void 0 !== a.extent ? a.extent : null;
        this.g = void 0 !== a.worldExtent ? a.worldExtent : null;
        this.a = void 0 !== a.axisOrientation ? a.axisOrientation : "enu";
        this.c = void 0 !== a.global ? a.global : !1;
        this.f = !(!this.c || !this.i);
        this.l = a.getPointResolution;
        this.j = null;
        this.o = a.metersPerUnit;
        var b = a.code, c = Cb || window.proj4;
        "function" == typeof c && (b = c.defs(b), void 0 !== b && (void 0 !== b.axis && void 0 === a.axisOrientation && (this.a = b.axis), void 0 === a.metersPerUnit && (this.o = b.to_meter),
        void 0 === a.units && (this.b = b.units)))
    }

    k = Db.prototype;
    k.Uk = function () {
        return this.qb
    };
    k.G = function () {
        return this.i
    };
    k.jo = function () {
        return this.b
    };
    k.Nc = function () {
        return this.o || Bb[this.b]
    };
    k.Fl = function () {
        return this.g
    };
    k.rm = function () {
        return this.c
    };
    k.nq = function (a) {
        this.c = a;
        this.f = !(!a || !this.i)
    };
    k.ko = function (a) {
        this.i = a;
        this.f = !(!this.c || !a)
    };
    k.yq = function (a) {
        this.g = a
    };
    k.mq = function (a) {
        this.l = a
    };
    function Eb(a) {
        Db.call(this, {
            code: a,
            units: "m",
            extent: Fb,
            global: !0,
            worldExtent: Gb,
            getPointResolution: function (a, c) {
                return a / Ba(c[1] / 6378137)
            }
        })
    }

    v(Eb, Db);
    var Hb = 6378137 * Math.PI, Fb = [-Hb, -Hb, Hb, Hb], Gb = [-180, -85, 180, 85],
        Ib = [new Eb("EPSG:3857"), new Eb("EPSG:102100"), new Eb("EPSG:102113"), new Eb("EPSG:900913"), new Eb("urn:ogc:def:crs:EPSG:6.18:3:3857"), new Eb("urn:ogc:def:crs:EPSG::3857"), new Eb("http://www.opengis.net/gml/srs/epsg.xml#3857")];

    function Jb(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c) {
            b[e] = Hb * a[e] / 180;
            var f = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
            f > Hb ? f = Hb : f < -Hb && (f = -Hb);
            b[e + 1] = f
        }
        return b
    }

    function Kb(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c)b[e] = 180 * a[e] / Hb, b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
        return b
    };
    function Lb(a, b) {
        Db.call(this, {
            code: a,
            units: "degrees",
            extent: Mb,
            axisOrientation: b,
            global: !0,
            metersPerUnit: Nb,
            worldExtent: Mb
        })
    }

    v(Lb, Db);
    var Mb = [-180, -90, 180, 90], Nb = 6378137 * Math.PI / 180,
        Ob = [new Lb("CRS:84"), new Lb("EPSG:4326", "neu"), new Lb("urn:ogc:def:crs:EPSG::4326", "neu"), new Lb("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new Lb("urn:ogc:def:crs:OGC:1.3:CRS84"), new Lb("urn:ogc:def:crs:OGC:2:84"), new Lb("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new Lb("urn:x-ogc:def:crs:EPSG:4326", "neu")];
    var Pb = {};
    var Qb = {};

    function Rb(a, b, c) {
        a = a.qb;
        b = b.qb;
        a in Qb || (Qb[a] = {});
        Qb[a][b] = c
    }

    function Sb(a, b) {
        var c;
        a in Qb && b in Qb[a] && (c = Qb[a][b]);
        return c
    };
    var Tb = new vb(6371008.8);

    function Ub(a, b, c, d) {
        a = Wb(a);
        var e = a.l;
        e ? b = e(b, c) : "degrees" == a.b && !d || "degrees" == d || (e = Xb(a, Wb("EPSG:4326")), b = [c[0] - b / 2, c[1], c[0] + b / 2, c[1], c[0], c[1] - b / 2, c[0], c[1] + b / 2], b = e(b, b, 2), b = (Tb.b(b.slice(0, 2), b.slice(2, 4)) + Tb.b(b.slice(4, 6), b.slice(6, 8))) / 2, a = d ? Bb[d] : a.Nc(), void 0 !== a && (b /= a));
        return b
    }

    function Yb(a) {
        a.forEach(Zb);
        a.forEach(function (b) {
            a.forEach(function (a) {
                b !== a && Rb(b, a, $b)
            })
        })
    }

    function ac() {
        Ob.forEach(function (a) {
            Ib.forEach(function (b) {
                Rb(a, b, Jb);
                Rb(b, a, Kb)
            })
        })
    }

    function Zb(a) {
        Pb[a.qb] = a;
        Rb(a, a, $b)
    }

    function bc(a) {
        return a ? "string" === typeof a ? Wb(a) : a : Wb("EPSG:3857")
    }

    function cc(a, b, c, d) {
        a = Wb(a);
        b = Wb(b);
        Rb(a, b, dc(c));
        Rb(b, a, dc(d))
    }

    function dc(a) {
        return function (b, c, d) {
            var e = b.length;
            d = void 0 !== d ? d : 2;
            c = void 0 !== c ? c : Array(e);
            var f;
            for (f = 0; f < e; f += d) {
                var g = a([b[f], b[f + 1]]);
                c[f] = g[0];
                c[f + 1] = g[1];
                for (g = d - 1; 2 <= g; --g)c[f + g] = b[f + g]
            }
            return c
        }
    }

    function Wb(a) {
        var b = null;
        if (a instanceof Db) b = a; else if ("string" === typeof a && (b = Pb[a] || null, !b)) {
            var c = Cb || window.proj4;
            "function" == typeof c && void 0 !== c.defs(a) && (b = new Db({code: a}), Zb(b))
        }
        return b
    }

    function ec(a, b) {
        if (a === b)return !0;
        var c = a.b === b.b;
        return a.qb === b.qb ? c : Xb(a, b) === $b && c
    }

    function fc(a, b) {
        a = Wb(a);
        b = Wb(b);
        return Xb(a, b)
    }

    function Xb(a, b) {
        var c = a.qb, d = b.qb, e = Sb(c, d);
        if (!e) {
            var f = Cb || window.proj4;
            if ("function" == typeof f) {
                var g = f.defs(c), h = f.defs(d);
                void 0 !== g && void 0 !== h && (g === h ? Yb([b, a]) : (e = f(d, c), cc(b, a, e.forward, e.inverse)), e = Sb(c, d))
            }
        }
        e || (e = gc);
        return e
    }

    function gc(a, b) {
        if (void 0 !== b && a !== b) {
            for (var c = 0, d = a.length; c < d; ++c)b[c] = a[c];
            a = b
        }
        return a
    }

    function $b(a, b) {
        if (void 0 !== b) {
            for (var c = 0, d = a.length; c < d; ++c)b[c] = a[c];
            a = b
        } else a = a.slice();
        return a
    }

    function hc(a, b, c) {
        return fc(b, c)(a, void 0, a.length)
    }

    function ic(a, b, c) {
        b = fc(b, c);
        return qb(a, b)
    }

    function jc() {
        Yb(Ib);
        Yb(Ob);
        ac()
    }

    jc();
    function kc(a, b, c, d) {
        return void 0 !== d ? (d[0] = a, d[1] = b, d[2] = c, d) : [a, b, c]
    }

    function lc(a) {
        var b = a[0], c = Array(b), d = 1 << b - 1, e;
        for (e = 0; e < b; ++e) {
            var f = 48;
            a[1] & d && (f += 1);
            a[2] & d && (f += 2);
            c[e] = String.fromCharCode(f);
            d >>= 1
        }
        return c.join("")
    };
    function mc(a) {
        this.minZoom = void 0 !== a.minZoom ? a.minZoom : 0;
        this.b = a.resolutions;
        va(qa(this.b, function (a, b) {
            return b - a
        }), 17);
        this.maxZoom = this.b.length - 1;
        this.f = void 0 !== a.origin ? a.origin : null;
        this.c = null;
        void 0 !== a.origins && (this.c = a.origins, va(this.c.length == this.b.length, 20));
        var b = a.extent;
        void 0 === b || this.f || this.c || (this.f = gb(b));
        va(!this.f && this.c || this.f && !this.c, 18);
        this.i = null;
        void 0 !== a.tileSizes && (this.i = a.tileSizes, va(this.i.length == this.b.length, 19));
        this.g = void 0 !== a.tileSize ? a.tileSize :
            this.i ? null : 256;
        va(!this.g && this.i || this.g && !this.i, 22);
        this.v = void 0 !== b ? b : null;
        this.a = null;
        this.j = [0, 0];
        void 0 !== a.sizes ? this.a = a.sizes.map(function (a) {
            return new wa(Math.min(0, a[0]), Math.max(a[0] - 1, -1), Math.min(0, a[1]), Math.max(a[1] - 1, -1))
        }, this) : b && nc(this, b)
    }

    var oc = [0, 0, 0];
    k = mc.prototype;
    k.Yf = function (a, b, c) {
        a = pc(this, a, b);
        for (var d = a.ca, e = a.da; d <= e; ++d)for (var f = a.ea, g = a.ha; f <= g; ++f)c([b, d, f])
    };
    function qc(a, b, c, d, e) {
        e = a.Fa(b, e);
        for (b = b[0] - 1; b >= a.minZoom;) {
            if (c.call(null, b, pc(a, e, b, d)))return !0;
            --b
        }
        return !1
    }

    k.G = function () {
        return this.v
    };
    k.cj = function () {
        return this.maxZoom
    };
    k.dj = function () {
        return this.minZoom
    };
    k.Sc = function (a) {
        return this.f ? this.f : this.c[a]
    };
    k.Ca = function (a) {
        return this.b[a]
    };
    k.ej = function () {
        return this.b
    };
    function rc(a, b, c, d) {
        return b[0] < a.maxZoom ? (d = a.Fa(b, d), pc(a, d, b[0] + 1, c)) : null
    }

    function sc(a, b, c, d) {
        tc(a, b[0], b[1], c, !1, oc);
        var e = oc[1], f = oc[2];
        tc(a, b[2], b[3], c, !0, oc);
        a = oc[1];
        b = oc[2];
        void 0 !== d ? (d.ca = e, d.da = a, d.ea = f, d.ha = b) : d = new wa(e, a, f, b);
        return d
    }

    function pc(a, b, c, d) {
        return sc(a, b, a.Ca(c), d)
    }

    function uc(a, b) {
        var c = a.Sc(b[0]), d = a.Ca(b[0]);
        a = Ka(a.eb(b[0]), a.j);
        return [c[0] + (b[1] + .5) * a[0] * d, c[1] + (b[2] + .5) * a[1] * d]
    }

    k.Fa = function (a, b) {
        var c = this.Sc(a[0]), d = this.Ca(a[0]), e = Ka(this.eb(a[0]), this.j), f = c[0] + a[1] * e[0] * d;
        a = c[1] + a[2] * e[1] * d;
        return Va(f, a, f + e[0] * d, a + e[1] * d, b)
    };
    k.Me = function (a, b, c) {
        return tc(this, a[0], a[1], b, !1, c)
    };
    function tc(a, b, c, d, e, f) {
        var g = a.uc(d), h = d / a.Ca(g), l = a.Sc(g);
        a = Ka(a.eb(g), a.j);
        b = h * Math.floor((b - l[0]) / d + (e ? .5 : 0)) / a[0];
        c = h * Math.floor((c - l[1]) / d + (e ? 0 : .5)) / a[1];
        e ? (b = Math.ceil(b) - 1, c = Math.ceil(c) - 1) : (b = Math.floor(b), c = Math.floor(c));
        return kc(g, b, c, f)
    }

    k.kg = function (a, b, c) {
        return tc(this, a[0], a[1], this.Ca(b), !1, c)
    };
    k.eb = function (a) {
        return this.g ? this.g : this.i[a]
    };
    k.uc = function (a, b) {
        return Aa(ja(this.b, a, b || 0), this.minZoom, this.maxZoom)
    };
    function nc(a, b) {
        for (var c = a.b.length, d = Array(c), e = a.minZoom; e < c; ++e)d[e] = pc(a, b, e);
        a.a = d
    };
    function vc(a) {
        var b = a.j;
        b || (b = wc(a), a.j = b);
        return b
    }

    function xc(a) {
        var b = {};
        rb(b, a ? a : {});
        void 0 === b.extent && (b.extent = Wb("EPSG:3857").G());
        b.resolutions = yc(b.extent, b.maxZoom, b.tileSize);
        delete b.maxZoom;
        return new mc(b)
    }

    function yc(a, b, c) {
        b = void 0 !== b ? b : 42;
        var d = kb(a);
        a = jb(a);
        c = Ka(void 0 !== c ? c : 256);
        c = Math.max(a / c[0], d / c[1]);
        b += 1;
        d = Array(b);
        for (a = 0; a < b; ++a)d[a] = c / Math.pow(2, a);
        return d
    }

    function wc(a, b, c) {
        a = zc(a);
        b = yc(a, b, c);
        return new mc({extent: a, origin: gb(a), resolutions: b, tileSize: c})
    }

    function zc(a) {
        a = Wb(a);
        var b = a.G();
        b || (a = 180 * Bb.degrees / a.Nc(), b = Va(-a, -a, a, a));
        return b
    };
    function Cc(a) {
        this.b = a.html;
        this.a = a.tileRanges ? a.tileRanges : null
    }

    Cc.prototype.f = function () {
        return this.b
    };
    function Dc(a) {
        return function (b) {
            if (b)return [Aa(b[0], a[0], a[2]), Aa(b[1], a[1], a[3])]
        }
    }

    function Ec(a) {
        return a
    };
    function Fc(a) {
        function b(b) {
            var c = a.listener, e = a.rh || a.target;
            a.th && Gc(a);
            return c.call(e, b)
        }

        return a.sh = b
    }

    function Hc(a, b, c, d) {
        for (var e, f = 0,
                 g = a.length; f < g; ++f)if (e = a[f], e.listener === b && e.rh === c)return d && (e.deleteIndex = f), e
    }

    function Ic(a, b) {
        return (a = a.jb) ? a[b] : void 0
    }

    function Jc(a) {
        var b = a.jb;
        b || (b = a.jb = {});
        return b
    }

    function Kc(a, b) {
        var c = Ic(a, b);
        if (c) {
            for (var d = 0, e = c.length; d < e; ++d)a.removeEventListener(b, c[d].sh), sb(c[d]);
            c.length = 0;
            if (c = a.jb) delete c[b], Object.keys(c).length || delete a.jb
        }
    }

    function y(a, b, c, d, e) {
        var f = Jc(a), g = f[b];
        g || (g = f[b] = []);
        (f = Hc(g, c, d, !1)) ? e || (f.th = !1) : (f = {
            rh: d,
            th: !!e,
            listener: c,
            target: a,
            type: b
        }, a.addEventListener(b, Fc(f)), g.push(f));
        return f
    }

    function Lc(a, b, c, d) {
        return y(a, b, c, d, !0)
    }

    function Mc(a, b, c, d) {
        (a = Ic(a, b)) && (c = Hc(a, c, d, !0)) && Gc(c)
    }

    function Gc(a) {
        if (a && a.target) {
            a.target.removeEventListener(a.type, a.sh);
            var b = Ic(a.target, a.type);
            if (b) {
                var c = "deleteIndex" in a ? a.deleteIndex : b.indexOf(a);
                -1 !== c && b.splice(c, 1);
                b.length || Kc(a.target, a.type)
            }
            sb(a)
        }
    }

    function Nc(a) {
        var b = Jc(a), c;
        for (c in b)Kc(a, c)
    };
    function Oc() {
    }

    Oc.prototype.mc = !1;
    function Pc(a) {
        a.mc || (a.mc = !0, a.ka())
    }

    Oc.prototype.ka = ra;
    function Qc(a) {
        this.type = a;
        this.target = null
    }

    Qc.prototype.preventDefault = Qc.prototype.stopPropagation = function () {
        this.Dp = !0
    };
    function Rc(a) {
        a.stopPropagation()
    };
    function Sc() {
        this.Va = {};
        this.qa = {};
        this.pa = {}
    }

    v(Sc, Oc);
    Sc.prototype.addEventListener = function (a, b) {
        var c = this.pa[a];
        c || (c = this.pa[a] = []);
        -1 === c.indexOf(b) && c.push(b)
    };
    Sc.prototype.b = function (a) {
        var b = "string" === typeof a ? new Qc(a) : a;
        a = b.type;
        b.target = this;
        var c = this.pa[a];
        if (c) {
            a in this.qa || (this.qa[a] = 0, this.Va[a] = 0);
            ++this.qa[a];
            for (var d = 0, e = c.length; d < e; ++d)if (!1 === c[d].call(this, b) || b.Dp) {
                var f = !1;
                break
            }
            --this.qa[a];
            if (!this.qa[a]) {
                b = this.Va[a];
                for (delete this.Va[a]; b--;)this.removeEventListener(a, ra);
                delete this.qa[a]
            }
            return f
        }
    };
    Sc.prototype.ka = function () {
        Nc(this)
    };
    function Tc(a, b) {
        return b ? b in a.pa : 0 < Object.keys(a.pa).length
    }

    Sc.prototype.removeEventListener = function (a, b) {
        var c = this.pa[a];
        c && (b = c.indexOf(b), a in this.Va ? (c[b] = ra, ++this.Va[a]) : (c.splice(b, 1), c.length || delete this.pa[a]))
    };
    function Uc() {
        Sc.call(this);
        this.f = 0
    }

    v(Uc, Sc);
    k = Uc.prototype;
    k.s = function () {
        ++this.f;
        this.b("change")
    };
    k.L = function () {
        return this.f
    };
    k.J = function (a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f)e[f] = y(this, a[f], b, c);
            return e
        }
        return y(this, a, b, c)
    };
    k.once = function (a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f)e[f] = Lc(this, a[f], b, c);
            return e
        }
        return Lc(this, a, b, c)
    };
    k.K = function (a, b, c) {
        if (Array.isArray(a))for (var d = 0, e = a.length; d < e; ++d)Mc(this, a[d], b, c); else Mc(this, a, b, c)
    };
    function Vc(a) {
        Uc.call(this);
        w(this);
        this.R = {};
        void 0 !== a && this.H(a)
    }

    v(Vc, Uc);
    var Wc = {};

    function Xc(a) {
        return Wc.hasOwnProperty(a) ? Wc[a] : Wc[a] = "change:" + a
    }

    k = Vc.prototype;
    k.get = function (a) {
        var b;
        this.R.hasOwnProperty(a) && (b = this.R[a]);
        return b
    };
    k.O = function () {
        return Object.keys(this.R)
    };
    k.N = function () {
        return rb({}, this.R)
    };
    function Yc(a, b, c) {
        var d = Xc(b);
        a.b(new Zc(d, b, c));
        a.b(new Zc("propertychange", b, c))
    }

    k.set = function (a, b, c) {
        c ? this.R[a] = b : (c = this.R[a], this.R[a] = b, c !== b && Yc(this, a, c))
    };
    k.H = function (a, b) {
        for (var c in a)this.set(c, a[c], b)
    };
    k.P = function (a, b) {
        if (a in this.R) {
            var c = this.R[a];
            delete this.R[a];
            b || Yc(this, a, c)
        }
    };
    function Zc(a, b, c) {
        Qc.call(this, a);
        this.key = b;
        this.oldValue = c
    }

    v(Zc, Qc);
    function $c(a, b) {
        Vc.call(this);
        this.c = !!(b || {}).unique;
        this.a = a ? a : [];
        if (this.c)for (a = 0, b = this.a.length; a < b; ++a)ad(this, this.a[a], a);
        bd(this)
    }

    v($c, Vc);
    k = $c.prototype;
    k.clear = function () {
        for (; 0 < this.ec();)this.pop()
    };
    k.ng = function (a) {
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c)this.push(a[c]);
        return this
    };
    k.forEach = function (a, b) {
        a = b ? a.bind(b) : a;
        b = this.a;
        for (var c = 0, d = b.length; c < d; ++c)a(b[c], c, b)
    };
    k.Hm = function () {
        return this.a
    };
    k.item = function (a) {
        return this.a[a]
    };
    k.ec = function () {
        return this.get(cd)
    };
    k.Se = function (a, b) {
        this.c && ad(this, b);
        this.a.splice(a, 0, b);
        bd(this);
        this.b(new dd("add", b))
    };
    k.pop = function () {
        return this.Pg(this.ec() - 1)
    };
    k.push = function (a) {
        this.c && ad(this, a);
        var b = this.ec();
        this.Se(b, a);
        return this.ec()
    };
    k.remove = function (a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d)if (b[d] === a)return this.Pg(d)
    };
    k.Pg = function (a) {
        var b = this.a[a];
        this.a.splice(a, 1);
        bd(this);
        this.b(new dd("remove", b));
        return b
    };
    k.jq = function (a, b) {
        var c = this.ec();
        if (a < c) this.c && ad(this, b, a), c = this.a[a], this.a[a] = b, this.b(new dd("remove", c)), this.b(new dd("add", b)); else {
            for (; c < a; ++c)this.Se(c, void 0);
            this.Se(a, b)
        }
    };
    function bd(a) {
        a.set(cd, a.a.length)
    }

    function ad(a, b, c) {
        for (var d = 0, e = a.a.length; d < e; ++d)if (a.a[d] === b && d !== c)throw new ua(58);
    }

    var cd = "length";

    function dd(a, b) {
        Qc.call(this, a);
        this.element = b
    }

    v(dd, Qc);
    var ed = /^#(?:[0-9a-f]{3}){1,2}$/i, fd = /^([a-z]*)$/i;

    function gd(a) {
        return Array.isArray(a) ? a : hd(a)
    }

    function id(a) {
        if ("string" !== typeof a) {
            var b = a[0];
            b != (b | 0) && (b = b + .5 | 0);
            var c = a[1];
            c != (c | 0) && (c = c + .5 | 0);
            var d = a[2];
            d != (d | 0) && (d = d + .5 | 0);
            a = "rgba(" + b + "," + c + "," + d + "," + (void 0 === a[3] ? 1 : a[3]) + ")"
        }
        return a
    }

    var hd = function () {
        var a = {}, b = 0;
        return function (c) {
            if (a.hasOwnProperty(c))var d = a[c]; else {
                if (1024 <= b) {
                    d = 0;
                    for (var e in a)d++ & 3 || (delete a[e], --b)
                }
                d = c;
                fd.exec(d) && (e = document.createElement("div"), e.style.color = d, document.body.appendChild(e), d = getComputedStyle(e).color, document.body.removeChild(e));
                if (ed.exec(d)) {
                    var f = d.length - 1;
                    va(3 == f || 6 == f, 54);
                    var g = 3 == f ? 1 : 2;
                    f = parseInt(d.substr(1 + 0 * g, g), 16);
                    e = parseInt(d.substr(1 + 1 * g, g), 16);
                    d = parseInt(d.substr(1 + 2 * g, g), 16);
                    1 == g && (f = (f << 4) + f, e = (e << 4) + e, d = (d << 4) + d);
                    f = [f, e, d, 1]
                } else d.indexOf("rgba(") ? d.indexOf("rgb(") ? va(!1, 14) : (d = d.slice(4, -1).split(",").map(Number), d.push(1), f = jd(d)) : (d = d.slice(5, -1).split(",").map(Number), f = jd(d));
                d = f;
                a[c] = d;
                ++b
            }
            return d
        }
    }();

    function jd(a) {
        var b = [];
        b[0] = Aa(a[0] + .5 | 0, 0, 255);
        b[1] = Aa(a[1] + .5 | 0, 0, 255);
        b[2] = Aa(a[2] + .5 | 0, 0, 255);
        b[3] = Aa(a[3], 0, 1);
        return b
    };
    function kd(a) {
        return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a : id(a)
    };
    function ld(a, b) {
        var c = document.createElement("CANVAS");
        a && (c.width = a);
        b && (c.height = b);
        return c.getContext("2d")
    }

    function md(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }

    function nd(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    function od(a) {
        Vc.call(this);
        this.element = a.element ? a.element : null;
        this.a = this.S = null;
        this.v = [];
        this.render = a.render ? a.render : ra;
        a.target && this.i(a.target)
    }

    v(od, Vc);
    od.prototype.ka = function () {
        nd(this.element);
        Vc.prototype.ka.call(this)
    };
    od.prototype.g = function () {
        return this.a
    };
    od.prototype.setMap = function (a) {
        this.a && nd(this.element);
        for (var b = 0, c = this.v.length; b < c; ++b)Gc(this.v[b]);
        this.v.length = 0;
        if (this.a = a) (this.S ? this.S : a.D).appendChild(this.element), this.render !== ra && this.v.push(y(a, "postrender", this.render, this)), a.render()
    };
    od.prototype.i = function (a) {
        this.S = "string" === typeof a ? document.getElementById(a) : a
    };
    function pd(a) {
        a = a ? a : {};
        this.I = document.createElement("UL");
        this.u = document.createElement("LI");
        this.I.appendChild(this.u);
        this.u.style.display = "none";
        this.c = void 0 !== a.collapsed ? a.collapsed : !0;
        this.l = void 0 !== a.collapsible ? a.collapsible : !0;
        this.l || (this.c = !1);
        var b = void 0 !== a.className ? a.className : "ol-attribution",
            c = void 0 !== a.tipLabel ? a.tipLabel : "Attributions",
            d = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00bb";
        "string" === typeof d ? (this.D = document.createElement("span"), this.D.textContent = d) : this.D =
            d;
        d = void 0 !== a.label ? a.label : "i";
        "string" === typeof d ? (this.B = document.createElement("span"), this.B.textContent = d) : this.B = d;
        var e = this.l && !this.c ? this.D : this.B;
        d = document.createElement("button");
        d.setAttribute("type", "button");
        d.title = c;
        d.appendChild(e);
        y(d, "click", this.jn, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control" + (this.c && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
        c.appendChild(this.I);
        c.appendChild(d);
        od.call(this, {
            element: c, render: a.render ?
                a.render : qd, target: a.target
        });
        this.C = !0;
        this.o = {};
        this.j = {};
        this.U = {}
    }

    v(pd, od);
    function qd(a) {
        if (a = a.frameState) {
            var b, c, d, e, f, g = a.layerStatesArray, h = rb({}, a.attributions), l = {}, m = {},
                n = a.viewState.projection;
            var p = 0;
            for (b = g.length; p < b; p++)if (e = g[p].layer.ia()) {
                var q = w(e).toString();
                if (f = e.j) {
                    var t = 0;
                    for (c = f.length; t < c; t++) {
                        var u = f[t];
                        var x = w(u).toString();
                        if (!(x in h)) {
                            if (d = a.usedTiles[q]) {
                                var B = e.Ta(n);
                                a:{
                                    var z = void 0;
                                    var G, E = u, ia = B, T = n;
                                    if (E.a) {
                                        for (z in d)if (z in E.a) {
                                            B = d[z];
                                            var R = 0;
                                            for (G = E.a[z].length; R < G; ++R) {
                                                var U = E.a[z][R];
                                                if (za(U, B)) {
                                                    z = !0;
                                                    break a
                                                }
                                                var ta = pc(ia, zc(T), parseInt(z,
                                                    10)), A = ta.da - ta.ca + 1;
                                                if (B.ca < ta.ca || B.da > ta.da)if (za(U, new wa(Ga(B.ca, A), Ga(B.da, A), B.ea, B.ha)) || B.da - B.ca + 1 > A && za(U, ta)) {
                                                    z = !0;
                                                    break a
                                                }
                                            }
                                        }
                                        z = !1
                                    } else z = !0
                                }
                            } else z = !1;
                            z ? (x in l && delete l[x], z = u.b, z in m || (m[z] = !0, h[x] = u)) : l[x] = u
                        }
                    }
                }
            }
            b = [h, l];
            p = b[0];
            b = b[1];
            for (var ea in this.o)ea in p ? (this.j[ea] || (this.o[ea].style.display = "", this.j[ea] = !0), delete p[ea]) : ea in b ? (this.j[ea] && (this.o[ea].style.display = "none", delete this.j[ea]), delete b[ea]) : (nd(this.o[ea]), delete this.o[ea], delete this.j[ea]);
            for (ea in p)t =
                document.createElement("LI"), t.innerHTML = p[ea].b, this.I.appendChild(t), this.o[ea] = t, this.j[ea] = !0;
            for (ea in b)t = document.createElement("LI"), t.innerHTML = b[ea].b, t.style.display = "none", this.I.appendChild(t), this.o[ea] = t;
            ea = !ub(this.j) || !ub(a.logos);
            this.C != ea && (this.element.style.display = ea ? "" : "none", this.C = ea);
            ea && ub(this.j) ? this.element.classList.add("ol-logo-only") : this.element.classList.remove("ol-logo-only");
            a = a.logos;
            ea = this.U;
            for (da in ea)da in a || (nd(ea[da]), delete ea[da]);
            for (var Ya in a)if (b =
                    a[Ya], b instanceof HTMLElement && (this.u.appendChild(b), ea[Ya] = b), !(Ya in ea)) {
                var da = new Image;
                da.src = Ya;
                "" === b ? p = da : (p = document.createElement("a"), p.href = b, p.appendChild(da));
                this.u.appendChild(p);
                ea[Ya] = p
            }
            this.u.style.display = ub(a) ? "none" : ""
        } else this.C && (this.element.style.display = "none", this.C = !1)
    }

    k = pd.prototype;
    k.jn = function (a) {
        a.preventDefault();
        rd(this)
    };
    function rd(a) {
        a.element.classList.toggle("ol-collapsed");
        a.c ? md(a.D, a.B) : md(a.B, a.D);
        a.c = !a.c
    }

    k.hn = function () {
        return this.l
    };
    k.ln = function (a) {
        this.l !== a && (this.l = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.c && rd(this))
    };
    k.kn = function (a) {
        this.l && this.c !== a && rd(this)
    };
    k.gn = function () {
        return this.c
    };
    function sd(a) {
        return Math.pow(a, 3)
    }

    function td(a) {
        return 1 - sd(1 - a)
    }

    function ud(a) {
        return 3 * a * a - 2 * a * a * a
    }

    function vd(a) {
        return a
    };
    function wd(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-rotate", c = void 0 !== a.label ? a.label : "\u21e7";
        this.c = null;
        "string" === typeof c ? (this.c = document.createElement("span"), this.c.className = "ol-compass", this.c.textContent = c) : (this.c = c, this.c.classList.add("ol-compass"));
        var d = a.tipLabel ? a.tipLabel : "Reset rotation";
        c = document.createElement("button");
        c.className = b + "-reset";
        c.setAttribute("type", "button");
        c.title = d;
        c.appendChild(this.c);
        y(c, "click", wd.prototype.D, this);
        d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        b = a.render ? a.render : xd;
        this.l = a.resetNorth ? a.resetNorth : void 0;
        od.call(this, {element: d, render: b, target: a.target});
        this.o = void 0 !== a.duration ? a.duration : 250;
        this.j = void 0 !== a.autoHide ? a.autoHide : !0;
        this.u = void 0;
        this.j && this.element.classList.add("ol-hidden")
    }

    v(wd, od);
    wd.prototype.D = function (a) {
        a.preventDefault();
        this.l ? this.l() : (a = this.a.$()) && void 0 !== a.Qa() && (0 < this.o ? a.animate({
                rotation: 0,
                duration: this.o,
                easing: td
            }) : a.Ze(0))
    };
    function xd(a) {
        if (a = a.frameState) {
            a = a.viewState.rotation;
            if (a != this.u) {
                var b = "rotate(" + a + "rad)";
                if (this.j) {
                    var c = this.element.classList.contains("ol-hidden");
                    c || a ? c && a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden")
                }
                this.c.style.msTransform = b;
                this.c.style.webkitTransform = b;
                this.c.style.transform = b
            }
            this.u = a
        }
    };
    function yd(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-zoom", c = void 0 !== a.delta ? a.delta : 1,
            d = void 0 !== a.zoomInLabel ? a.zoomInLabel : "+",
            e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel : "\u2212",
            f = void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel : "Zoom in",
            g = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel : "Zoom out", h = document.createElement("button");
        h.className = b + "-in";
        h.setAttribute("type", "button");
        h.title = f;
        h.appendChild("string" === typeof d ? document.createTextNode(d) : d);
        y(h, "click", yd.prototype.j.bind(this,
            c));
        d = document.createElement("button");
        d.className = b + "-out";
        d.setAttribute("type", "button");
        d.title = g;
        d.appendChild("string" === typeof e ? document.createTextNode(e) : e);
        y(d, "click", yd.prototype.j.bind(this, -c));
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(h);
        c.appendChild(d);
        od.call(this, {element: c, target: a.target});
        this.c = void 0 !== a.duration ? a.duration : 250
    }

    v(yd, od);
    yd.prototype.j = function (a, b) {
        b.preventDefault();
        if (b = this.a.$()) {
            var c = b.Pa();
            c && (a = b.constrainResolution(c, a), 0 < this.c ? (b.Kc() && b.hd(), b.animate({
                resolution: a,
                duration: this.c,
                easing: td
            })) : b.Yc(a))
        }
    };
    function zd(a) {
        a = a ? a : {};
        var b = new $c;
        (void 0 !== a.zoom ? a.zoom : 1) && b.push(new yd(a.zoomOptions));
        (void 0 !== a.rotate ? a.rotate : 1) && b.push(new wd(a.rotateOptions));
        (void 0 !== a.attribution ? a.attribution : 1) && b.push(new pd(a.attributionOptions));
        return b
    };
    function Ad(a) {
        a = a ? a : {};
        this.c = void 0 !== a.className ? a.className : "ol-full-screen";
        var b = void 0 !== a.label ? a.label : "\u2922";
        this.l = "string" === typeof b ? document.createTextNode(b) : b;
        b = void 0 !== a.labelActive ? a.labelActive : "\u00d7";
        this.o = "string" === typeof b ? document.createTextNode(b) : b;
        var c = a.tipLabel ? a.tipLabel : "Toggle full-screen";
        b = document.createElement("button");
        b.className = this.c + "-" + Bd();
        b.setAttribute("type", "button");
        b.title = c;
        b.appendChild(this.l);
        y(b, "click", this.B, this);
        c = document.createElement("div");
        c.className = this.c + " ol-unselectable ol-control " + (Cd() ? "" : "ol-unsupported");
        c.appendChild(b);
        od.call(this, {element: c, target: a.target});
        this.D = void 0 !== a.keys ? a.keys : !1;
        this.j = a.source
    }

    v(Ad, od);
    Ad.prototype.B = function (a) {
        a.preventDefault();
        Cd() && (a = this.a) && (Bd() ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : (a = this.j ? "string" === typeof this.j ? document.getElementById(this.j) : this.j : a.pd(), this.D ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) :
            Dd(a) : Dd(a)))
    };
    Ad.prototype.u = function () {
        var a = this.element.firstElementChild, b = this.a;
        Bd() ? (a.className = this.c + "-true", md(this.o, this.l)) : (a.className = this.c + "-false", md(this.l, this.o));
        b && b.Fd()
    };
    Ad.prototype.setMap = function (a) {
        od.prototype.setMap.call(this, a);
        a && this.v.push(y(document, Ed(), this.u, this))
    };
    function Cd() {
        var a = document.body;
        return !!(a.webkitRequestFullscreen || a.mozRequestFullScreen && document.mozFullScreenEnabled || a.msRequestFullscreen && document.msFullscreenEnabled || a.requestFullscreen && document.fullscreenEnabled)
    }

    function Bd() {
        return !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
    }

    function Dd(a) {
        a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
    }

    var Ed = function () {
        var a;
        return function () {
            if (!a) {
                var b = document.body;
                b.webkitRequestFullscreen ? a = "webkitfullscreenchange" : b.mozRequestFullScreen ? a = "mozfullscreenchange" : b.msRequestFullscreen ? a = "MSFullscreenChange" : b.requestFullscreen && (a = "fullscreenchange")
            }
            return a
        }
    }();

    function Fd(a) {
        a = a ? a : {};
        var b = document.createElement("DIV");
        b.className = void 0 !== a.className ? a.className : "ol-mouse-position";
        od.call(this, {element: b, render: a.render ? a.render : Gd, target: a.target});
        y(this, Xc(Hd), this.mn, this);
        a.coordinateFormat && this.uj(a.coordinateFormat);
        a.projection && this.ji(a.projection);
        this.u = void 0 !== a.undefinedHTML ? a.undefinedHTML : "";
        this.o = b.innerHTML;
        this.l = this.j = this.c = null
    }

    v(Fd, od);
    function Gd(a) {
        a = a.frameState;
        a ? this.c != a.viewState.projection && (this.c = a.viewState.projection, this.j = null) : this.c = null;
        Id(this, this.l)
    }

    k = Fd.prototype;
    k.mn = function () {
        this.j = null
    };
    k.Fh = function () {
        return this.get(Jd)
    };
    k.ii = function () {
        return this.get(Hd)
    };
    k.Xl = function (a) {
        this.l = this.a.He(a);
        Id(this, this.l)
    };
    k.Yl = function () {
        Id(this, null);
        this.l = null
    };
    k.setMap = function (a) {
        od.prototype.setMap.call(this, a);
        a && (a = a.a, this.v.push(y(a, "mousemove", this.Xl, this), y(a, "mouseout", this.Yl, this)))
    };
    k.uj = function (a) {
        this.set(Jd, a)
    };
    k.ji = function (a) {
        this.set(Hd, Wb(a))
    };
    function Id(a, b) {
        var c = a.u;
        if (b && a.c) {
            if (!a.j) {
                var d = a.ii();
                a.j = d ? Xb(a.c, d) : gc
            }
            if (b = a.a.Xa(b)) a.j(b, b), c = (c = a.Fh()) ? c(b) : b.toString()
        }
        a.o && c == a.o || (a.element.innerHTML = c, a.o = c)
    }

    var Hd = "projection", Jd = "coordinateFormat";

    function Kd(a, b, c) {
        Qc.call(this, a);
        this.map = b;
        this.frameState = void 0 !== c ? c : null
    }

    v(Kd, Qc);
    function Ld(a, b, c, d, e) {
        Kd.call(this, a, b, e);
        this.originalEvent = c;
        this.pixel = b.He(c);
        this.coordinate = b.Xa(this.pixel);
        this.dragging = void 0 !== d ? d : !1
    }

    v(Ld, Kd);
    Ld.prototype.preventDefault = function () {
        Kd.prototype.preventDefault.call(this);
        this.originalEvent.preventDefault()
    };
    Ld.prototype.stopPropagation = function () {
        Kd.prototype.stopPropagation.call(this);
        this.originalEvent.stopPropagation()
    };
    var Md = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

    function Nd(a, b) {
        var c, d, e = Md.length;
        for (d = 0; d < e; ++d)try {
            if (c = a.getContext(Md[d], b))return c
        } catch (f) {
        }
        return null
    };
    var Od, Pd = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "",
        Qd = -1 !== Pd.indexOf("firefox"), Rd = -1 !== Pd.indexOf("safari") && -1 == Pd.indexOf("chrom"),
        Sd = -1 !== Pd.indexOf("webkit") && -1 == Pd.indexOf("edge"), Td = -1 !== Pd.indexOf("macintosh"),
        Ud = window.devicePixelRatio || 1, Vd = !1, Wd = function () {
            if (!("HTMLCanvasElement" in window))return !1;
            try {
                var a = document.createElement("CANVAS").getContext("2d");
                return a ? (void 0 !== a.setLineDash && (Vd = !0), !0) : !1
            } catch (b) {
                return !1
            }
        }(), Xd = "DeviceOrientationEvent" in
            window, Yd = "geolocation" in navigator, Zd = "ontouchstart" in window, $d = "PointerEvent" in window,
        ae = !!navigator.msPointerEnabled, be = !1, ce, de = [];
    if ("WebGLRenderingContext" in window)try {
        var ee = Nd(document.createElement("CANVAS"), {failIfMajorPerformanceCaveat: !0});
        ee && (be = !0, ce = ee.getParameter(ee.MAX_TEXTURE_SIZE), de = ee.getSupportedExtensions())
    } catch (a) {
    }
    Od = be;
    ca = de;
    ba = ce;
    var fe = {
        Wq: "singleclick",
        Lq: "click",
        Mq: "dblclick",
        Pq: "pointerdrag",
        Sq: "pointermove",
        Oq: "pointerdown",
        Vq: "pointerup",
        Uq: "pointerover",
        Tq: "pointerout",
        Qq: "pointerenter",
        Rq: "pointerleave",
        Nq: "pointercancel"
    };

    function ie(a, b, c, d, e) {
        Ld.call(this, a, b, c.b, d, e);
        this.b = c
    }

    v(ie, Ld);
    function je(a, b) {
        this.b = a;
        this.i = b
    };
    function ke(a) {
        je.call(this, a, {
            mousedown: this.tm,
            mousemove: this.um,
            mouseup: this.xm,
            mouseover: this.wm,
            mouseout: this.vm
        });
        this.a = a.f;
        this.f = []
    }

    v(ke, je);
    function le(a, b) {
        a = a.f;
        var c = b.clientX;
        b = b.clientY;
        for (var d = 0, e = a.length, f; d < e && (f = a[d]); d++) {
            var g = Math.abs(b - f[1]);
            if (25 >= Math.abs(c - f[0]) && 25 >= g)return !0
        }
        return !1
    }

    function me(a) {
        var b = ne(a, a), c = b.preventDefault;
        b.preventDefault = function () {
            a.preventDefault();
            c()
        };
        b.pointerId = 1;
        b.isPrimary = !0;
        b.pointerType = "mouse";
        return b
    }

    k = ke.prototype;
    k.tm = function (a) {
        if (!le(this, a)) {
            (1).toString() in this.a && this.cancel(a);
            var b = me(a);
            this.a[(1).toString()] = a;
            oe(this.b, "pointerdown", b, a)
        }
    };
    k.um = function (a) {
        if (!le(this, a)) {
            var b = me(a);
            oe(this.b, "pointermove", b, a)
        }
    };
    k.xm = function (a) {
        if (!le(this, a)) {
            var b = this.a[(1).toString()];
            b && b.button === a.button && (b = me(a), oe(this.b, "pointerup", b, a), delete this.a[(1).toString()])
        }
    };
    k.wm = function (a) {
        if (!le(this, a)) {
            var b = me(a);
            pe(this.b, b, a)
        }
    };
    k.vm = function (a) {
        if (!le(this, a)) {
            var b = me(a);
            qe(this.b, b, a)
        }
    };
    k.cancel = function (a) {
        var b = me(a);
        this.b.cancel(b, a);
        delete this.a[(1).toString()]
    };
    function re(a) {
        je.call(this, a, {
            MSPointerDown: this.Cm,
            MSPointerMove: this.Dm,
            MSPointerUp: this.Gm,
            MSPointerOut: this.Em,
            MSPointerOver: this.Fm,
            MSPointerCancel: this.Bm,
            MSGotPointerCapture: this.zm,
            MSLostPointerCapture: this.Am
        });
        this.a = a.f;
        this.f = ["", "unavailable", "touch", "pen", "mouse"]
    }

    v(re, je);
    function se(a, b) {
        var c = b;
        "number" === typeof b.pointerType && (c = ne(b, b), c.pointerType = a.f[b.pointerType]);
        return c
    }

    k = re.prototype;
    k.Cm = function (a) {
        this.a[a.pointerId.toString()] = a;
        var b = se(this, a);
        oe(this.b, "pointerdown", b, a)
    };
    k.Dm = function (a) {
        var b = se(this, a);
        oe(this.b, "pointermove", b, a)
    };
    k.Gm = function (a) {
        var b = se(this, a);
        oe(this.b, "pointerup", b, a);
        delete this.a[a.pointerId.toString()]
    };
    k.Em = function (a) {
        var b = se(this, a);
        qe(this.b, b, a)
    };
    k.Fm = function (a) {
        var b = se(this, a);
        pe(this.b, b, a)
    };
    k.Bm = function (a) {
        var b = se(this, a);
        this.b.cancel(b, a);
        delete this.a[a.pointerId.toString()]
    };
    k.Am = function (a) {
        this.b.b(new te("lostpointercapture", a, a))
    };
    k.zm = function (a) {
        this.b.b(new te("gotpointercapture", a, a))
    };
    function ue(a) {
        je.call(this, a, {
            pointerdown: this.vp,
            pointermove: this.wp,
            pointerup: this.zp,
            pointerout: this.xp,
            pointerover: this.yp,
            pointercancel: this.up,
            gotpointercapture: this.Gl,
            lostpointercapture: this.sm
        })
    }

    v(ue, je);
    k = ue.prototype;
    k.vp = function (a) {
        ve(this.b, a)
    };
    k.wp = function (a) {
        ve(this.b, a)
    };
    k.zp = function (a) {
        ve(this.b, a)
    };
    k.xp = function (a) {
        ve(this.b, a)
    };
    k.yp = function (a) {
        ve(this.b, a)
    };
    k.up = function (a) {
        ve(this.b, a)
    };
    k.sm = function (a) {
        ve(this.b, a)
    };
    k.Gl = function (a) {
        ve(this.b, a)
    };
    function te(a, b, c) {
        Qc.call(this, a);
        this.b = b;
        a = c ? c : {};
        this.buttons = we(a);
        this.pressure = xe(a, this.buttons);
        this.bubbles = "bubbles" in a ? a.bubbles : !1;
        this.cancelable = "cancelable" in a ? a.cancelable : !1;
        this.view = "view" in a ? a.view : null;
        this.detail = "detail" in a ? a.detail : null;
        this.screenX = "screenX" in a ? a.screenX : 0;
        this.screenY = "screenY" in a ? a.screenY : 0;
        this.clientX = "clientX" in a ? a.clientX : 0;
        this.clientY = "clientY" in a ? a.clientY : 0;
        this.ctrlKey = "ctrlKey" in a ? a.ctrlKey : !1;
        this.altKey = "altKey" in a ? a.altKey : !1;
        this.shiftKey =
            "shiftKey" in a ? a.shiftKey : !1;
        this.metaKey = "metaKey" in a ? a.metaKey : !1;
        this.button = "button" in a ? a.button : 0;
        this.relatedTarget = "relatedTarget" in a ? a.relatedTarget : null;
        this.pointerId = "pointerId" in a ? a.pointerId : 0;
        this.width = "width" in a ? a.width : 0;
        this.height = "height" in a ? a.height : 0;
        this.tiltX = "tiltX" in a ? a.tiltX : 0;
        this.tiltY = "tiltY" in a ? a.tiltY : 0;
        this.pointerType = "pointerType" in a ? a.pointerType : "";
        this.isPrimary = "isPrimary" in a ? a.isPrimary : !1;
        b.preventDefault && (this.preventDefault = function () {
            b.preventDefault()
        })
    }

    v(te, Qc);
    function we(a) {
        if (a.buttons || ye) a = a.buttons; else switch (a.which) {
            case 1:
                a = 1;
                break;
            case 2:
                a = 4;
                break;
            case 3:
                a = 2;
                break;
            default:
                a = 0
        }
        return a
    }

    function xe(a, b) {
        var c = 0;
        a.pressure ? c = a.pressure : c = b ? .5 : 0;
        return c
    }

    var ye = !1;
    try {
        ye = 1 === (new MouseEvent("click", {buttons: 1})).buttons
    } catch (a) {
    }
    ;
    function ze(a, b) {
        je.call(this, a, {touchstart: this.Fq, touchmove: this.Eq, touchend: this.Dq, touchcancel: this.Cq});
        this.a = a.f;
        this.j = b;
        this.f = void 0;
        this.g = 0;
        this.c = void 0
    }

    v(ze, je);
    k = ze.prototype;
    k.sj = function () {
        this.g = 0;
        this.c = void 0
    };
    function Ae(a, b, c) {
        b = ne(b, c);
        b.pointerId = c.identifier + 2;
        b.bubbles = !0;
        b.cancelable = !0;
        b.detail = a.g;
        b.button = 0;
        b.buttons = 1;
        b.width = c.webkitRadiusX || c.radiusX || 0;
        b.height = c.webkitRadiusY || c.radiusY || 0;
        b.pressure = c.webkitForce || c.force || .5;
        b.isPrimary = a.f === c.identifier;
        b.pointerType = "touch";
        b.clientX = c.clientX;
        b.clientY = c.clientY;
        b.screenX = c.screenX;
        b.screenY = c.screenY;
        return b
    }

    function Be(a, b, c) {
        function d() {
            b.preventDefault()
        }

        var e = Array.prototype.slice.call(b.changedTouches), f = e.length, g;
        for (g = 0; g < f; ++g) {
            var h = Ae(a, b, e[g]);
            h.preventDefault = d;
            c.call(a, b, h)
        }
    }

    k.Fq = function (a) {
        var b = a.touches, c = Object.keys(this.a), d = c.length;
        if (d >= b.length) {
            var e = [], f;
            for (f = 0; f < d; ++f) {
                var g = c[f];
                var h = this.a[g];
                var l;
                if (!(l = 1 == g))a:{
                    for (var m = b.length, n = 0; n < m; n++)if (l = b[n], l.identifier === g - 2) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                l || e.push(h.out)
            }
            for (f = 0; f < e.length; ++f)this.Rf(a, e[f])
        }
        b = a.changedTouches[0];
        c = Object.keys(this.a).length;
        if (!c || 1 === c && (1).toString() in this.a) this.f = b.identifier, void 0 !== this.c && clearTimeout(this.c);
        Ce(this, a);
        this.g++;
        Be(this, a, this.qp)
    };
    k.qp = function (a, b) {
        this.a[b.pointerId] = {target: b.target, out: b, fj: b.target};
        var c = this.b;
        b.bubbles = !0;
        oe(c, "pointerover", b, a);
        c = this.b;
        b.bubbles = !1;
        oe(c, "pointerenter", b, a);
        oe(this.b, "pointerdown", b, a)
    };
    k.Eq = function (a) {
        a.preventDefault();
        Be(this, a, this.ym)
    };
    k.ym = function (a, b) {
        var c = this.a[b.pointerId];
        if (c) {
            var d = c.out, e = c.fj;
            oe(this.b, "pointermove", b, a);
            d && e !== b.target && (d.relatedTarget = b.target, b.relatedTarget = e, d.target = e, b.target ? (qe(this.b, d, a), pe(this.b, b, a)) : (b.target = e, b.relatedTarget = null, this.Rf(a, b)));
            c.out = b;
            c.fj = b.target
        }
    };
    k.Dq = function (a) {
        Ce(this, a);
        Be(this, a, this.Gq)
    };
    k.Gq = function (a, b) {
        oe(this.b, "pointerup", b, a);
        this.b.out(b, a);
        De(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.f = void 0, this.c = setTimeout(this.sj.bind(this), 200))
    };
    k.Cq = function (a) {
        Be(this, a, this.Rf)
    };
    k.Rf = function (a, b) {
        this.b.cancel(b, a);
        this.b.out(b, a);
        De(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.f = void 0, this.c = setTimeout(this.sj.bind(this), 200))
    };
    function Ce(a, b) {
        var c = a.j.f;
        b = b.changedTouches[0];
        if (a.f === b.identifier) {
            var d = [b.clientX, b.clientY];
            c.push(d);
            setTimeout(function () {
                var a = c.indexOf(d);
                -1 < a && c.splice(a, 1)
            }, 2500)
        }
    };
    function Ee(a) {
        Sc.call(this);
        this.g = a;
        this.f = {};
        this.i = {};
        this.a = [];
        $d ? Fe(this, new ue(this)) : ae ? Fe(this, new re(this)) : (a = new ke(this), Fe(this, a), Zd && Fe(this, new ze(this, a)));
        a = this.a.length;
        for (var b, c = 0; c < a; c++)b = this.a[c], Ge(this, Object.keys(b.i))
    }

    v(Ee, Sc);
    function Fe(a, b) {
        var c = Object.keys(b.i);
        c && (c.forEach(function (a) {
            var c = b.i[a];
            c && (this.i[a] = c.bind(b))
        }, a), a.a.push(b))
    }

    Ee.prototype.c = function (a) {
        var b = this.i[a.type];
        b && b(a)
    };
    function Ge(a, b) {
        b.forEach(function (a) {
            y(this.g, a, this.c, this)
        }, a)
    }

    function He(a, b) {
        b.forEach(function (a) {
            Mc(this.g, a, this.c, this)
        }, a)
    }

    function ne(a, b) {
        for (var c = {}, d, e = 0, f = Ie.length; e < f; e++)d = Ie[e][0], c[d] = a[d] || b[d] || Ie[e][1];
        return c
    }

    function De(a, b, c) {
        b.bubbles = !1;
        oe(a, "pointerleave", b, c)
    }

    Ee.prototype.out = function (a, b) {
        a.bubbles = !0;
        oe(this, "pointerout", a, b)
    };
    Ee.prototype.cancel = function (a, b) {
        oe(this, "pointercancel", a, b)
    };
    function qe(a, b, c) {
        a.out(b, c);
        var d = b.target, e = b.relatedTarget;
        d && e && d.contains(e) || De(a, b, c)
    }

    function pe(a, b, c) {
        b.bubbles = !0;
        oe(a, "pointerover", b, c);
        var d = b.target, e = b.relatedTarget;
        d && e && d.contains(e) || (b.bubbles = !1, oe(a, "pointerenter", b, c))
    }

    function oe(a, b, c, d) {
        a.b(new te(b, d, c))
    }

    function ve(a, b) {
        a.b(new te(b.type, b, b))
    }

    Ee.prototype.ka = function () {
        for (var a = this.a.length, b, c = 0; c < a; c++)b = this.a[c], He(this, Object.keys(b.i));
        Sc.prototype.ka.call(this)
    };
    var Ie = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary", !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];

    function Je(a, b) {
        Sc.call(this);
        this.f = a;
        this.j = 0;
        this.l = !1;
        this.i = [];
        this.D = b ? b * Ud : Ud;
        this.c = null;
        a = this.f.a;
        this.R = 0;
        this.u = {};
        this.g = new Ee(a);
        this.a = null;
        this.o = y(this.g, "pointerdown", this.$l, this);
        this.v = y(this.g, "pointermove", this.Yp, this)
    }

    v(Je, Sc);
    function Ke(a, b) {
        var c = new ie("click", a.f, b);
        a.b(c);
        a.j ? (clearTimeout(a.j), a.j = 0, c = new ie("dblclick", a.f, b), a.b(c)) : a.j = setTimeout(function () {
            this.j = 0;
            var a = new ie("singleclick", this.f, b);
            this.b(a)
        }.bind(a), 250)
    }

    function Le(a, b) {
        "pointerup" == b.type || "pointercancel" == b.type ? delete a.u[b.pointerId] : "pointerdown" == b.type && (a.u[b.pointerId] = !0);
        a.R = Object.keys(a.u).length
    }

    k = Je.prototype;
    k.Sh = function (a) {
        Le(this, a);
        var b = new ie("pointerup", this.f, a);
        this.b(b);
        this.l || a.button || Ke(this, this.c);
        this.R || (this.i.forEach(Gc), this.i.length = 0, this.l = !1, this.c = null, Pc(this.a), this.a = null)
    };
    k.$l = function (a) {
        Le(this, a);
        var b = new ie("pointerdown", this.f, a);
        this.b(b);
        this.c = a;
        this.i.length || (this.a = new Ee(document), this.i.push(y(this.a, "pointermove", this.Vm, this), y(this.a, "pointerup", this.Sh, this), y(this.g, "pointercancel", this.Sh, this)))
    };
    k.Vm = function (a) {
        if (Me(this, a)) {
            this.l = !0;
            var b = new ie("pointerdrag", this.f, a, this.l);
            this.b(b)
        }
        a.preventDefault()
    };
    k.Yp = function (a) {
        this.b(new ie(a.type, this.f, a, !(!this.c || !Me(this, a))))
    };
    function Me(a, b) {
        return Math.abs(b.clientX - a.c.clientX) > a.D || Math.abs(b.clientY - a.c.clientY) > a.D
    }

    k.ka = function () {
        this.v && (Gc(this.v), this.v = null);
        this.o && (Gc(this.o), this.o = null);
        this.i.forEach(Gc);
        this.i.length = 0;
        this.a && (Pc(this.a), this.a = null);
        this.g && (Pc(this.g), this.g = null);
        Sc.prototype.ka.call(this)
    };
    function Ne(a, b) {
        this.o = a;
        this.c = b;
        this.b = [];
        this.f = [];
        this.a = {}
    }

    Ne.prototype.clear = function () {
        this.b.length = 0;
        this.f.length = 0;
        sb(this.a)
    };
    function Oe(a) {
        var b = a.b, c = a.f, d = b[0];
        1 == b.length ? (b.length = 0, c.length = 0) : (b[0] = b.pop(), c[0] = c.pop(), Pe(a, 0));
        b = a.c(d);
        delete a.a[b];
        return d
    }

    Ne.prototype.i = function (a) {
        va(!(this.c(a) in this.a), 31);
        var b = this.o(a);
        return Infinity != b ? (this.b.push(a), this.f.push(b), this.a[this.c(a)] = !0, Qe(this, 0, this.b.length - 1), !0) : !1
    };
    function Pe(a, b) {
        for (var c = a.b, d = a.f, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1;) {
            var l = 2 * b + 1, m = 2 * b + 2;
            l = m < e && d[m] < d[l] ? m : l;
            c[b] = c[l];
            d[b] = d[l];
            b = l
        }
        c[b] = f;
        d[b] = g;
        Qe(a, h, b)
    }

    function Qe(a, b, c) {
        var d = a.b;
        a = a.f;
        for (var e = d[c], f = a[c]; c > b;) {
            var g = c - 1 >> 1;
            if (a[g] > f) d[c] = d[g], a[c] = a[g], c = g; else break
        }
        d[c] = e;
        a[c] = f
    }

    function Re(a) {
        var b = a.o, c = a.b, d = a.f, e = 0, f = c.length, g;
        for (g = 0; g < f; ++g) {
            var h = c[g];
            var l = b(h);
            Infinity == l ? delete a.a[a.c(h)] : (d[e] = l, c[e++] = h)
        }
        c.length = e;
        d.length = e;
        for (b = (a.b.length >> 1) - 1; 0 <= b; b--)Pe(a, b)
    };
    function Se(a, b) {
        Ne.call(this, function (b) {
            return a.apply(null, b)
        }, function (a) {
            return a[0].fb()
        });
        this.v = b;
        this.j = 0;
        this.g = {}
    }

    v(Se, Ne);
    Se.prototype.i = function (a) {
        var b = Ne.prototype.i.call(this, a);
        b && y(a[0], "change", this.l, this);
        return b
    };
    Se.prototype.l = function (a) {
        a = a.target;
        var b = a.getState();
        if (2 === b || 3 === b || 4 === b || 5 === b) Mc(a, "change", this.l, this), a = a.fb(), a in this.g && (delete this.g[a], --this.j), this.v()
    };
    function Te(a, b, c) {
        for (var d = 0, e = !1, f, g,
                 h; a.j < b && d < c && 0 < a.b.length;)g = Oe(a)[0], h = g.fb(), f = g.getState(), 5 === f ? e = !0 : 0 !== f || h in a.g || (a.g[h] = !0, ++a.j, ++d, g.load());
        !d && e && a.v()
    };
    function Ue(a) {
        return function (b, c, d) {
            if (void 0 !== b)return b = ja(a, b, d), b = Aa(b + c, 0, a.length - 1), c = Math.floor(b), b != c && c < a.length - 1 ? a[c] / Math.pow(a[c] / a[c + 1], b - c) : a[c]
        }
    }

    function Ve(a, b, c) {
        return function (d, e, f) {
            if (void 0 !== d)return d = Math.max(Math.floor(Math.log(b / d) / Math.log(a) + (-f / 2 + .5)) + e, 0), void 0 !== c && (d = Math.min(d, c)), b / Math.pow(a, d)
        }
    };
    function We(a) {
        if (void 0 !== a)return 0
    }

    function Xe(a, b) {
        if (void 0 !== a)return a + b
    }

    function Ye(a) {
        var b = 2 * Math.PI / a;
        return function (a, d) {
            if (void 0 !== a)return a = Math.floor((a + d) / b + .5) * b
        }
    }

    function Ze() {
        var a = Fa(5);
        return function (b, c) {
            if (void 0 !== b)return Math.abs(b + c) <= a ? 0 : b + c
        }
    };
    function $e(a, b) {
        a = void 0 !== b ? a.toFixed(b) : "" + a;
        b = a.indexOf(".");
        b = -1 === b ? a.length : b;
        return 2 < b ? a : Array(3 - b).join("0") + a
    }

    function af(a) {
        a = ("" + a).split(".");
        for (var b = ["1", "3"], c = 0; c < Math.max(a.length, b.length); c++) {
            var d = parseInt(a[c] || "0", 10), e = parseInt(b[c] || "0", 10);
            if (d > e)return 1;
            if (e > d)return -1
        }
        return 0
    };
    function bf(a, b) {
        a[0] += b[0];
        a[1] += b[1];
        return a
    }

    function cf(a, b) {
        var c = b.vd(), d = b.xa();
        b = d[0];
        d = d[1];
        var e = a[0] - b;
        a = a[1] - d;
        e || a || (e = 1);
        var f = Math.sqrt(e * e + a * a);
        return [b + c * e / f, d + c * a / f]
    }

    function df(a, b) {
        var c = a[0];
        a = a[1];
        var d = b[0], e = b[1];
        b = d[0];
        d = d[1];
        var f = e[0];
        e = e[1];
        var g = f - b, h = e - d;
        c = g || h ? (g * (c - b) + h * (a - d)) / (g * g + h * h || 0) : 0;
        0 >= c ? (a = b, c = d) : 1 <= c ? (a = f, c = e) : (a = b + c * g, c = d + c * h);
        return [a, c]
    }

    function ef(a, b, c) {
        b = Ga(b + 180, 360) - 180;
        var d = Math.abs(3600 * b);
        c = c || 0;
        var e = Math.pow(10, c), f = Math.floor(d / 3600), g = Math.floor((d - 3600 * f) / 60);
        d = Math.ceil((d - 3600 * f - 60 * g) * e) / e;
        60 <= d && (d = 0, g += 1);
        60 <= g && (g = 0, f += 1);
        return f + "\u00b0 " + $e(g) + "\u2032 " + $e(d, c) + "\u2033" + (b ? " " + a.charAt(0 > b ? 1 : 0) : "")
    }

    function ff(a, b, c) {
        return a ? b.replace("{x}", a[0].toFixed(c)).replace("{y}", a[1].toFixed(c)) : ""
    }

    function gf(a, b) {
        for (var c = !0, d = a.length - 1; 0 <= d; --d)if (a[d] != b[d]) {
            c = !1;
            break
        }
        return c
    }

    function hf(a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        var d = a[1] * c + a[0] * b;
        a[0] = a[0] * c - a[1] * b;
        a[1] = d;
        return a
    }

    function jf(a, b) {
        a[0] *= b;
        a[1] *= b
    }

    function kf(a, b) {
        var c = a[0] - b[0];
        a = a[1] - b[1];
        return c * c + a * a
    }

    function lf(a, b) {
        return Math.sqrt(kf(a, b))
    }

    function mf(a, b) {
        return kf(a, df(a, b))
    }

    function nf(a, b) {
        return ff(a, "{x}, {y}", b)
    };
    function pf() {
        return !0
    }

    function qf() {
        return !1
    };
    function rf() {
        Vc.call(this);
        this.o = Ma();
        this.v = -1;
        this.i = {};
        this.l = this.g = 0
    }

    v(rf, Vc);
    k = rf.prototype;
    k.Db = function (a, b) {
        b = b ? b : [NaN, NaN];
        this.Jb(a[0], a[1], b, Infinity);
        return b
    };
    k.wb = function (a) {
        return this.Pc(a[0], a[1])
    };
    k.Pc = qf;
    k.G = function (a) {
        this.v != this.f && (this.o = this.De(this.o), this.v = this.f);
        var b = this.o;
        a ? (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3]) : a = b;
        return a
    };
    k.Pb = function (a) {
        return this.ae(a * a)
    };
    k.mb = function (a, b) {
        this.Fc(fc(a, b));
        return this
    };
    function sf(a, b, c, d, e, f) {
        for (var g = f ? f : [], h = 0; b < c; b += d) {
            var l = a[b], m = a[b + 1];
            g[h++] = e[0] * l + e[2] * m + e[4];
            g[h++] = e[1] * l + e[3] * m + e[5]
        }
        f && g.length != h && (g.length = h);
        return g
    }

    function tf(a, b, c, d, e, f, g) {
        for (var h = g ? g : [], l = 0,
                 m; b < c; b += d)for (h[l++] = a[b] + e, h[l++] = a[b + 1] + f, m = b + 2; m < b + d; ++m)h[l++] = a[m];
        g && h.length != l && (h.length = l);
        return h
    };
    function uf() {
        rf.call(this);
        this.ja = "XY";
        this.a = 2;
        this.A = null
    }

    v(uf, rf);
    function vf(a) {
        var b;
        "XY" == a ? b = 2 : "XYZ" == a || "XYM" == a ? b = 3 : "XYZM" == a && (b = 4);
        return b
    }

    k = uf.prototype;
    k.Pc = qf;
    k.De = function (a) {
        return Za(this.A, 0, this.A.length, this.a, a)
    };
    k.bc = function () {
        return this.A.slice(0, this.a)
    };
    k.ba = function () {
        return this.A
    };
    k.cc = function () {
        return this.A.slice(this.A.length - this.a)
    };
    k.dc = function () {
        return this.ja
    };
    k.ae = function (a) {
        this.l != this.f && (sb(this.i), this.g = 0, this.l = this.f);
        if (0 > a || this.g && a <= this.g)return this;
        var b = a.toString();
        if (this.i.hasOwnProperty(b))return this.i[b];
        var c = this.od(a);
        if (c.ba().length < this.A.length)return this.i[b] = c;
        this.g = a;
        return this
    };
    k.od = function () {
        return this
    };
    k.ma = function () {
        return this.a
    };
    function wf(a, b, c) {
        a.a = vf(b);
        a.ja = b;
        a.A = c
    }

    function xf(a, b, c, d) {
        if (b) c = vf(b); else {
            for (b = 0; b < d; ++b)if (c.length) c = c[0]; else {
                a.ja = "XY";
                a.a = 2;
                return
            }
            c = c.length;
            var e;
            2 == c ? e = "XY" : 3 == c ? e = "XYZ" : 4 == c && (e = "XYZM");
            b = e
        }
        a.ja = b;
        a.a = c
    }

    k.Fc = function (a) {
        this.A && (a(this.A, this.A, this.a), this.s())
    };
    k.rotate = function (a, b) {
        var c = this.ba();
        if (c) {
            var d = c.length, e = this.ma(), f = c ? c : [], g = Math.cos(a);
            a = Math.sin(a);
            var h = b[0];
            b = b[1];
            for (var l = 0, m = 0; m < d; m += e) {
                var n = c[m] - h, p = c[m + 1] - b;
                f[l++] = h + n * g - p * a;
                f[l++] = b + n * a + p * g;
                for (n = m + 2; n < m + e; ++n)f[l++] = c[n]
            }
            c && f.length != l && (f.length = l);
            this.s()
        }
    };
    k.scale = function (a, b, c) {
        var d = b;
        void 0 === d && (d = a);
        var e = c;
        e || (e = lb(this.G()));
        if (c = this.ba()) {
            b = c.length;
            var f = this.ma(), g = c ? c : [], h = e[0];
            e = e[1];
            for (var l = 0, m = 0; m < b; m += f) {
                var n = c[m] - h, p = c[m + 1] - e;
                g[l++] = h + a * n;
                g[l++] = e + d * p;
                for (n = m + 2; n < m + f; ++n)g[l++] = c[n]
            }
            c && g.length != l && (g.length = l);
            this.s()
        }
    };
    k.translate = function (a, b) {
        var c = this.ba();
        c && (tf(c, 0, c.length, this.ma(), a, b, c), this.s())
    };
    function yf(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) {
            var h = a[b], l = a[b + 1];
            e += g * h - f * l;
            f = h;
            g = l
        }
        return e / 2
    }

    function zf(a, b, c, d) {
        var e = 0, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            e += yf(a, b, h, d);
            b = h
        }
        return e
    };
    function Af(a, b, c, d, e, f, g) {
        var h = a[b], l = a[b + 1], m = a[c] - h, n = a[c + 1] - l;
        if (m || n)if (f = ((e - h) * m + (f - l) * n) / (m * m + n * n), 1 < f) b = c; else if (0 < f) {
            for (e = 0; e < d; ++e)g[e] = Ha(a[b + e], a[c + e], f);
            g.length = d;
            return
        }
        for (e = 0; e < d; ++e)g[e] = a[b + e];
        g.length = d
    }

    function Bf(a, b, c, d, e) {
        var f = a[b], g = a[b + 1];
        for (b += d; b < c; b += d) {
            var h = a[b], l = a[b + 1];
            f = Ea(f, g, h, l);
            f > e && (e = f);
            f = h;
            g = l
        }
        return e
    }

    function Cf(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            e = Bf(a, b, h, d, e);
            b = h
        }
        return e
    }

    function Df(a, b, c, d, e, f, g, h, l, m, n) {
        if (b == c)return m;
        if (!e) {
            var p = Ea(g, h, a[b], a[b + 1]);
            if (p < m) {
                for (n = 0; n < d; ++n)l[n] = a[b + n];
                l.length = d;
                return p
            }
            return m
        }
        for (var q = n ? n : [NaN, NaN],
                 t = b + d; t < c;)if (Af(a, t - d, t, d, g, h, q), p = Ea(g, h, q[0], q[1]), p < m) {
            m = p;
            for (n = 0; n < d; ++n)l[n] = q[n];
            l.length = d;
            t += d
        } else t += d * Math.max((Math.sqrt(p) - Math.sqrt(m)) / e | 0, 1);
        if (f && (Af(a, c - d, b, d, g, h, q), p = Ea(g, h, q[0], q[1]), p < m)) {
            m = p;
            for (n = 0; n < d; ++n)l[n] = q[n];
            l.length = d
        }
        return m
    }

    function Ef(a, b, c, d, e, f, g, h, l, m, n) {
        n = n ? n : [NaN, NaN];
        var p;
        var q = 0;
        for (p = c.length; q < p; ++q) {
            var t = c[q];
            m = Df(a, b, t, d, e, f, g, h, l, m, n);
            b = t
        }
        return m
    };
    function Ff(a, b) {
        var c = 0, d;
        var e = 0;
        for (d = b.length; e < d; ++e)a[c++] = b[e];
        return c
    }

    function Gf(a, b, c, d) {
        var e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f], h;
            for (h = 0; h < d; ++h)a[b++] = g[h]
        }
        return b
    }

    function Hf(a, b, c, d, e) {
        e = e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h)b = Gf(a, b, c[h], d), e[f++] = b;
        e.length = f;
        return e
    };
    function If(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        for (var f = 0; b < c; b += d)e[f++] = a.slice(b, b + d);
        e.length = f;
        return e
    }

    function Jf(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h) {
            var l = c[h];
            e[f++] = If(a, b, l, d, e[f]);
            b = l
        }
        e.length = f;
        return e
    }

    function Kf(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h) {
            var l = c[h];
            e[f++] = Jf(a, b, l, d, e[f]);
            b = l[l.length - 1]
        }
        e.length = f;
        return e
    };
    function Lf(a, b, c, d, e, f, g) {
        var h = (c - b) / d;
        if (3 > h) {
            for (; b < c; b += d)f[g++] = a[b], f[g++] = a[b + 1];
            return g
        }
        var l = Array(h);
        l[0] = 1;
        l[h - 1] = 1;
        c = [b, c - d];
        for (var m = 0, n; 0 < c.length;) {
            var p = c.pop(), q = c.pop(), t = 0, u = a[q], x = a[q + 1], B = a[p], z = a[p + 1];
            for (n = q + d; n < p; n += d) {
                var G = Da(a[n], a[n + 1], u, x, B, z);
                G > t && (m = n, t = G)
            }
            t > e && (l[(m - b) / d] = 1, q + d < m && c.push(q, m), m + d < p && c.push(m, p))
        }
        for (n = 0; n < h; ++n)l[n] && (f[g++] = a[b + n * d], f[g++] = a[b + n * d + 1]);
        return g
    }

    function Mf(a, b, c, d, e, f, g, h) {
        var l;
        var m = 0;
        for (l = c.length; m < l; ++m) {
            var n = c[m];
            a:{
                var p = a, q = n, t = d, u = e, x = f, B = g;
                if (b != q) {
                    var z = u * Math.round(p[b] / u), G = u * Math.round(p[b + 1] / u);
                    b += t;
                    x[B++] = z;
                    x[B++] = G;
                    do {
                        var E = u * Math.round(p[b] / u);
                        g = u * Math.round(p[b + 1] / u);
                        b += t;
                        if (b == q) {
                            x[B++] = E;
                            x[B++] = g;
                            g = B;
                            break a
                        }
                    } while (E == z && g == G);
                    for (; b < q;) {
                        var ia = u * Math.round(p[b] / u);
                        var T = u * Math.round(p[b + 1] / u);
                        b += t;
                        if (ia != E || T != g) {
                            var R = E - z, U = g - G, ta = ia - z, A = T - G;
                            R * A == U * ta && (0 > R && ta < R || R == ta || 0 < R && ta > R) && (0 > U && A < U || U == A || 0 < U && A > U) || (x[B++] =
                                E, x[B++] = g, z = E, G = g);
                            E = ia;
                            g = T
                        }
                    }
                    x[B++] = E;
                    x[B++] = g
                }
                g = B
            }
            h.push(g);
            b = n
        }
        return g
    };
    function Of(a, b) {
        uf.call(this);
        this.c = this.j = -1;
        this.na(a, b)
    }

    v(Of, uf);
    k = Of.prototype;
    k.clone = function () {
        var a = new Of(null);
        Pf(a, this.ja, this.A.slice());
        return a
    };
    k.Jb = function (a, b, c, d) {
        if (d < Qa(this.G(), a, b))return d;
        this.c != this.f && (this.j = Math.sqrt(Bf(this.A, 0, this.A.length, this.a, 0)), this.c = this.f);
        return Df(this.A, 0, this.A.length, this.a, this.j, !0, a, b, c, d)
    };
    k.Fn = function () {
        return yf(this.A, 0, this.A.length, this.a)
    };
    k.V = function () {
        return If(this.A, 0, this.A.length, this.a)
    };
    k.od = function (a) {
        var b = [];
        b.length = Lf(this.A, 0, this.A.length, this.a, a, b, 0);
        a = new Of(null);
        Pf(a, "XY", b);
        return a
    };
    k.T = function () {
        return "LinearRing"
    };
    k.Ya = function () {
    };
    k.na = function (a, b) {
        a ? (xf(this, b, a, 1), this.A || (this.A = []), this.A.length = Gf(this.A, 0, a, this.a), this.s()) : Pf(this, "XY", null)
    };
    function Pf(a, b, c) {
        wf(a, b, c);
        a.s()
    };
    function C(a, b) {
        uf.call(this);
        this.na(a, b)
    }

    v(C, uf);
    k = C.prototype;
    k.clone = function () {
        var a = new C(null);
        a.aa(this.ja, this.A.slice());
        return a
    };
    k.Jb = function (a, b, c, d) {
        var e = this.A;
        a = Ea(a, b, e[0], e[1]);
        if (a < d) {
            d = this.a;
            for (b = 0; b < d; ++b)c[b] = e[b];
            c.length = d;
            return a
        }
        return d
    };
    k.V = function () {
        return this.A ? this.A.slice() : []
    };
    k.De = function (a) {
        return Xa(this.A, a)
    };
    k.T = function () {
        return "Point"
    };
    k.Ya = function (a) {
        return Sa(a, this.A[0], this.A[1])
    };
    k.na = function (a, b) {
        a ? (xf(this, b, a, 0), this.A || (this.A = []), this.A.length = Ff(this.A, a), this.s()) : this.aa("XY", null)
    };
    k.aa = function (a, b) {
        wf(this, a, b);
        this.s()
    };
    function Qf(a, b, c, d, e) {
        return !cb(e, function (e) {
            return !Rf(a, b, c, d, e[0], e[1])
        })
    }

    function Rf(a, b, c, d, e, f) {
        for (var g = 0, h = a[c - d], l = a[c - d + 1]; b < c; b += d) {
            var m = a[b], n = a[b + 1];
            l <= f ? n > f && 0 < (m - h) * (f - l) - (e - h) * (n - l) && g++ : n <= f && 0 > (m - h) * (f - l) - (e - h) * (n - l) && g--;
            h = m;
            l = n
        }
        return !!g
    }

    function Sf(a, b, c, d, e, f) {
        if (!c.length || !Rf(a, b, c[0], d, e, f))return !1;
        var g;
        b = 1;
        for (g = c.length; b < g; ++b)if (Rf(a, c[b - 1], c[b], d, e, f))return !1;
        return !0
    };
    function Tf(a, b, c, d, e, f, g) {
        var h, l = e[f + 1], m = [], n = c[0];
        var p = a[n - d];
        var q = a[n - d + 1];
        for (h = b; h < n; h += d) {
            var t = a[h];
            var u = a[h + 1];
            if (l <= q && u <= l || q <= l && l <= u) p = (l - q) / (u - q) * (t - p) + p, m.push(p);
            p = t;
            q = u
        }
        n = NaN;
        q = -Infinity;
        m.sort(fa);
        p = m[0];
        h = 1;
        for (u = m.length; h < u; ++h) {
            t = m[h];
            var x = Math.abs(t - p);
            x > q && (p = (p + t) / 2, Sf(a, b, c, d, p, l) && (n = p, q = x));
            p = t
        }
        isNaN(n) && (n = e[f]);
        return g ? (g.push(n, l), g) : [n, l]
    };
    function Uf(a, b, c, d, e, f) {
        for (var g = [a[b], a[b + 1]], h = [], l; b + d < c; b += d) {
            h[0] = a[b + d];
            h[1] = a[b + d + 1];
            if (l = e.call(f, g, h))return l;
            g[0] = h[0];
            g[1] = h[1]
        }
        return !1
    };
    function Vf(a, b, c, d, e) {
        var f = $a(Ma(), a, b, c, d);
        return ob(e, f) ? Ta(e, f) || f[0] >= e[0] && f[2] <= e[2] || f[1] >= e[1] && f[3] <= e[3] ? !0 : Uf(a, b, c, d, function (a, b) {
            var c = !1, d = Ua(e, a), f = Ua(e, b);
            if (1 === d || 1 === f) c = !0; else {
                var g = e[0], h = e[1], t = e[2], u = e[3], x = b[0];
                b = b[1];
                a = (b - a[1]) / (x - a[0]);
                f & 2 && !(d & 2) && (c = x - (b - u) / a, c = c >= g && c <= t);
                c || !(f & 4) || d & 4 || (c = b - (x - t) * a, c = c >= h && c <= u);
                c || !(f & 8) || d & 8 || (c = x - (b - h) / a, c = c >= g && c <= t);
                c || !(f & 16) || d & 16 || (c = b - (x - g) * a, c = c >= h && c <= u)
            }
            return c
        }) : !1
    }

    function Wf(a, b, c, d, e) {
        var f = c[0];
        if (!(Vf(a, b, f, d, e) || Rf(a, b, f, d, e[0], e[1]) || Rf(a, b, f, d, e[0], e[3]) || Rf(a, b, f, d, e[2], e[1]) || Rf(a, b, f, d, e[2], e[3])))return !1;
        if (1 === c.length)return !0;
        b = 1;
        for (f = c.length; b < f; ++b)if (Qf(a, c[b - 1], c[b], d, e))return !1;
        return !0
    };
    function Xf(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) {
            var h = a[b], l = a[b + 1];
            e += (h - f) * (l + g);
            f = h;
            g = l
        }
        return 0 < e
    }

    function Yf(a, b, c, d) {
        var e = 0;
        d = void 0 !== d ? d : !1;
        var f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            e = Xf(a, e, h, c);
            if (!g) {
                if (d && e || !d && !e)return !1
            } else if (d && !e || !d && e)return !1;
            e = h
        }
        return !0
    }

    function Zf(a, b, c, d, e) {
        e = void 0 !== e ? e : !1;
        var f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g], l = Xf(a, b, h, d);
            if (g ? e && !l || !e && l : e && l || !e && !l) {
                l = a;
                for (var m = h, n = d; b < m - n;) {
                    var p;
                    for (p = 0; p < n; ++p) {
                        var q = l[b + p];
                        l[b + p] = l[m - n + p];
                        l[m - n + p] = q
                    }
                    b += n;
                    m -= n
                }
            }
            b = h
        }
        return b
    }

    function $f(a, b, c, d) {
        var e = 0, f;
        var g = 0;
        for (f = b.length; g < f; ++g)e = Zf(a, e, b[g], c, d);
        return e
    };
    function D(a, b) {
        uf.call(this);
        this.c = [];
        this.u = -1;
        this.D = null;
        this.I = this.B = this.C = -1;
        this.j = null;
        this.na(a, b)
    }

    v(D, uf);
    k = D.prototype;
    k.zk = function (a) {
        this.A ? ka(this.A, a.ba()) : this.A = a.ba().slice();
        this.c.push(this.A.length);
        this.s()
    };
    k.clone = function () {
        var a = new D(null);
        a.aa(this.ja, this.A.slice(), this.c.slice());
        return a
    };
    k.Jb = function (a, b, c, d) {
        if (d < Qa(this.G(), a, b))return d;
        this.B != this.f && (this.C = Math.sqrt(Cf(this.A, 0, this.c, this.a, 0)), this.B = this.f);
        return Ef(this.A, 0, this.c, this.a, this.C, !0, a, b, c, d)
    };
    k.Pc = function (a, b) {
        return Sf(this.Tb(), 0, this.c, this.a, a, b)
    };
    k.In = function () {
        return zf(this.Tb(), 0, this.c, this.a)
    };
    k.V = function (a) {
        if (void 0 !== a) {
            var b = this.Tb().slice();
            Zf(b, 0, this.c, this.a, a)
        } else b = this.A;
        return Jf(b, 0, this.c, this.a)
    };
    k.sb = function () {
        return this.c
    };
    function ag(a) {
        if (a.u != a.f) {
            var b = lb(a.G());
            a.D = Tf(a.Tb(), 0, a.c, a.a, b, 0);
            a.u = a.f
        }
        return a.D
    }

    k.el = function () {
        return new C(ag(this))
    };
    k.kl = function () {
        return this.c.length
    };
    k.Kh = function (a) {
        if (0 > a || this.c.length <= a)return null;
        var b = new Of(null);
        Pf(b, this.ja, this.A.slice(a ? this.c[a - 1] : 0, this.c[a]));
        return b
    };
    k.Zd = function () {
        var a = this.ja, b = this.A, c = this.c, d = [], e = 0, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g], l = new Of(null);
            Pf(l, a, b.slice(e, h));
            d.push(l);
            e = h
        }
        return d
    };
    k.Tb = function () {
        if (this.I != this.f) {
            var a = this.A;
            Yf(a, this.c, this.a) ? this.j = a : (this.j = a.slice(), this.j.length = Zf(this.j, 0, this.c, this.a));
            this.I = this.f
        }
        return this.j
    };
    k.od = function (a) {
        var b = [], c = [];
        b.length = Mf(this.A, 0, this.c, this.a, Math.sqrt(a), b, 0, c);
        a = new D(null);
        a.aa("XY", b, c);
        return a
    };
    k.T = function () {
        return "Polygon"
    };
    k.Ya = function (a) {
        return Wf(this.Tb(), 0, this.c, this.a, a)
    };
    k.na = function (a, b) {
        a ? (xf(this, b, a, 2), this.A || (this.A = []), a = Hf(this.A, 0, a, this.a, this.c), this.A.length = a.length ? a[a.length - 1] : 0, this.s()) : this.aa("XY", null, this.c)
    };
    k.aa = function (a, b, c) {
        wf(this, a, b);
        this.c = c;
        this.s()
    };
    function bg(a, b, c, d) {
        var e = d ? d : 32;
        d = [];
        var f;
        for (f = 0; f < e; ++f)ka(d, a.offset(b, c, 2 * Math.PI * f / e));
        d.push(d[0], d[1]);
        a = new D(null);
        a.aa("XY", d, [d.length]);
        return a
    }

    function cg(a) {
        var b = a[0], c = a[1], d = a[2];
        a = a[3];
        b = [b, c, b, a, d, a, d, c, b, c];
        c = new D(null);
        c.aa("XY", b, [b.length]);
        return c
    }

    function dg(a, b, c) {
        var d = b ? b : 32, e = a.ma();
        b = a.ja;
        var f = new D(null, b);
        d = e * (d + 1);
        e = Array(d);
        for (var g = 0; g < d; g++)e[g] = 0;
        f.aa(b, e, [e.length]);
        eg(f, a.xa(), a.vd(), c);
        return f
    }

    function eg(a, b, c, d) {
        var e = a.ba(), f = a.ja, g = a.ma(), h = a.sb(), l = e.length / g - 1;
        d = d ? d : 0;
        for (var m, n,
                 p = 0; p <= l; ++p)n = p * g, m = d + 2 * Ga(p, l) * Math.PI / l, e[n] = b[0] + c * Math.cos(m), e[n + 1] = b[1] + c * Math.sin(m);
        a.aa(f, e, h)
    };
    function F(a) {
        Vc.call(this);
        a = rb({}, a);
        this.l = [0, 0];
        this.c = [];
        this.Ff = this.Ff.bind(this);
        this.v = bc(a.projection);
        fg(this, a)
    }

    v(F, Vc);
    function fg(a, b) {
        var c = {};
        c.center = void 0 !== b.center ? b.center : null;
        var d = void 0 !== b.minZoom ? b.minZoom : 0;
        var e = void 0 !== b.maxZoom ? b.maxZoom : 28;
        var f = void 0 !== b.zoomFactor ? b.zoomFactor : 2;
        if (void 0 !== b.resolutions) {
            e = b.resolutions;
            var g = e[0];
            var h = e[e.length - 1];
            e = Ue(e)
        } else {
            g = bc(b.projection);
            h = g.G();
            var l = (h ? Math.max(jb(h), kb(h)) : 360 * Bb.degrees / g.Nc()) / 256 / Math.pow(2, 0),
                m = l / Math.pow(2, 28);
            g = b.maxResolution;
            void 0 !== g ? d = 0 : g = l / Math.pow(f, d);
            h = b.minResolution;
            void 0 === h && (h = void 0 !== b.maxZoom ? void 0 !==
            b.maxResolution ? g / Math.pow(f, e) : l / Math.pow(f, e) : m);
            e = d + Math.floor(Math.log(g / h) / Math.log(f));
            h = g / Math.pow(f, e - d);
            e = Ve(f, g, e - d)
        }
        a.a = g;
        a.i = h;
        a.B = f;
        a.j = b.resolutions;
        a.o = d;
        (void 0 !== b.enableRotation ? b.enableRotation : 1) ? (d = b.constrainRotation, d = void 0 === d || !0 === d ? Ze() : !1 === d ? Xe : "number" === typeof d ? Ye(d) : Xe) : d = We;
        a.g = {center: void 0 !== b.extent ? Dc(b.extent) : Ec, resolution: e, rotation: d};
        void 0 !== b.resolution ? c.resolution = b.resolution : void 0 !== b.zoom && (c.resolution = a.constrainResolution(a.a, b.zoom - a.o));
        c.rotation =
            void 0 !== b.rotation ? b.rotation : 0;
        a.H(c);
        a.D = b
    }

    function gg(a, b) {
        var c = rb({}, a.D);
        void 0 !== c.resolution ? c.resolution = a.Pa() : c.zoom = a.Qh();
        c.center = a.xa();
        c.rotation = a.Qa();
        return rb({}, c, b)
    }

    k = F.prototype;
    k.animate = function (a) {
        var b = Date.now(), c = this.xa().slice(), d = this.Pa(), e = this.Qa(), f = arguments.length;
        if (1 < f && "function" === typeof arguments[f - 1]) {
            var g = arguments[f - 1];
            --f
        }
        for (var h = [], l = 0; l < f; ++l) {
            var m = arguments[l], n = {
                start: b,
                complete: !1,
                anchor: m.anchor,
                duration: void 0 !== m.duration ? m.duration : 1E3,
                easing: m.easing || ud
            };
            m.center && (n.le = c, n.pe = m.center, c = n.pe);
            void 0 !== m.zoom ? (n.ne = d, n.ad = this.constrainResolution(this.a, m.zoom - this.o, 0), d = n.ad) : m.resolution && (n.ne = d, n.ad = m.resolution, d = n.ad);
            void 0 !==
            m.rotation && (n.Df = e, n.qe = e + (Ga(m.rotation - e + Math.PI, 2 * Math.PI) - Math.PI), e = n.qe);
            n.callback = g;
            n.le && n.pe && !gf(n.le, n.pe) || n.ne !== n.ad || n.Df !== n.qe ? b += n.duration : n.complete = !0;
            h.push(n)
        }
        this.c.push(h);
        hg(this, 0, 1);
        this.Ff()
    };
    k.Kc = function () {
        return 0 < ig(this)[0]
    };
    k.cl = function () {
        return 0 < ig(this)[1]
    };
    k.hd = function () {
        hg(this, 0, -ig(this)[0]);
        for (var a = 0, b = this.c.length; a < b; ++a) {
            var c = this.c[a];
            c[0].callback && c[0].callback(!1)
        }
        this.c.length = 0
    };
    k.Ff = function () {
        void 0 !== this.u && (cancelAnimationFrame(this.u), this.u = void 0);
        if (this.Kc()) {
            for (var a = Date.now(), b = !1, c = this.c.length - 1; 0 <= c; --c) {
                for (var d = this.c[c], e = !0, f = 0, g = d.length; f < g; ++f) {
                    var h = d[f];
                    if (!h.complete) {
                        b = a - h.start;
                        b = 0 < h.duration ? b / h.duration : 1;
                        1 <= b ? (h.complete = !0, b = 1) : e = !1;
                        b = h.easing(b);
                        if (h.le) {
                            var l = h.le[0], m = h.le[1];
                            this.set("center", [l + b * (h.pe[0] - l), m + b * (h.pe[1] - m)])
                        }
                        h.ne && h.ad && (l = 1 === b ? h.ad : h.ne + b * (h.ad - h.ne), h.anchor && this.set("center", jg(this, l, h.anchor)), this.set("resolution",
                            l));
                        void 0 !== h.Df && void 0 !== h.qe && (b = 1 === b ? Ga(h.qe + Math.PI, 2 * Math.PI) - Math.PI : h.Df + b * (h.qe - h.Df), h.anchor && this.set("center", kg(this, b, h.anchor)), this.set("rotation", b));
                        b = !0;
                        if (!h.complete)break
                    }
                }
                e && (this.c[c] = null, hg(this, 0, -1), (d = d[0].callback) && d(!0))
            }
            this.c = this.c.filter(Boolean);
            b && void 0 === this.u && (this.u = requestAnimationFrame(this.Ff))
        }
    };
    function kg(a, b, c) {
        var d = a.xa();
        if (void 0 !== d) {
            var e = [d[0] - c[0], d[1] - c[1]];
            hf(e, b - a.Qa());
            bf(e, c)
        }
        return e
    }

    function jg(a, b, c) {
        var d, e = a.xa();
        a = a.Pa();
        void 0 !== e && void 0 !== a && (d = [c[0] - b * (c[0] - e[0]) / a, c[1] - b * (c[1] - e[1]) / a]);
        return d
    }

    function lg(a) {
        var b = [100, 100];
        a = '.ol-viewport[data-view="' + w(a) + '"]';
        if (a = document.querySelector(a)) a = getComputedStyle(a), b[0] = parseInt(a.width, 10), b[1] = parseInt(a.height, 10);
        return b
    }

    k.Gc = function (a) {
        return this.g.center(a)
    };
    k.constrainResolution = function (a, b, c) {
        return this.g.resolution(a, b || 0, c || 0)
    };
    k.constrainRotation = function (a, b) {
        return this.g.rotation(a, b || 0)
    };
    k.xa = function () {
        return this.get("center")
    };
    function ig(a, b) {
        return void 0 !== b ? (b[0] = a.l[0], b[1] = a.l[1], b) : a.l.slice()
    }

    k.gd = function (a) {
        a = a || lg(this);
        var b = this.xa();
        va(b, 1);
        var c = this.Pa();
        va(void 0 !== c, 2);
        var d = this.Qa();
        va(void 0 !== d, 3);
        return mb(b, c, d, a)
    };
    k.an = function () {
        return this.a
    };
    k.cn = function () {
        return this.i
    };
    k.bn = function () {
        return this.Ne(this.i)
    };
    k.rq = function (a) {
        fg(this, gg(this, {maxZoom: a}))
    };
    k.dn = function () {
        return this.Ne(this.a)
    };
    k.sq = function (a) {
        fg(this, gg(this, {minZoom: a}))
    };
    k.en = function () {
        return this.v
    };
    k.Pa = function () {
        return this.get("resolution")
    };
    k.fn = function () {
        return this.j
    };
    k.Ke = function (a, b) {
        b = b || lg(this);
        return Math.max(jb(a) / b[0], kb(a) / b[1])
    };
    function mg(a) {
        var b = a.a, c = Math.log(b / a.i) / Math.log(2);
        return function (a) {
            return b / Math.pow(2, a * c)
        }
    }

    k.Qa = function () {
        return this.get("rotation")
    };
    function ng(a) {
        var b = a.a, c = Math.log(b / a.i) / Math.log(2);
        return function (a) {
            return Math.log(b / a) / Math.log(2) / c
        }
    }

    k.getState = function () {
        var a = this.xa(), b = this.v, c = this.Pa(), d = this.Qa();
        return {center: a.slice(), projection: void 0 !== b ? b : null, resolution: c, rotation: d}
    };
    k.Qh = function () {
        var a, b = this.Pa();
        void 0 !== b && (a = this.Ne(b));
        return a
    };
    k.Ne = function (a) {
        if (a >= this.i && a <= this.a) {
            var b = this.o || 0;
            if (this.j) {
                var c = ja(this.j, a, 1);
                b += c;
                if (c == this.j.length - 1)return b;
                var d = this.j[c];
                c = d / this.j[c + 1]
            } else d = this.a, c = this.B;
            b += Math.log(d / a) / Math.log(c)
        }
        return b
    };
    k.Oh = function (a) {
        return this.constrainResolution(this.a, a - this.o, 0)
    };
    k.Xf = function (a, b) {
        b = b || {};
        var c = b.size;
        c || (c = lg(this));
        if (a instanceof uf)if ("Circle" === a.T()) {
            a = a.G();
            var d = cg(a);
            d.rotate(this.Qa(), lb(a))
        } else d = a; else va(Array.isArray(a), 24), va(!ib(a), 25), d = cg(a);
        var e = b.padding ? b.padding : [0, 0, 0, 0], f = void 0 !== b.constrainResolution ? b.constrainResolution : !0,
            g = void 0 !== b.nearest ? b.nearest : !1, h;
        void 0 !== b.minResolution ? h = b.minResolution : void 0 !== b.maxZoom ? h = this.constrainResolution(this.a, b.maxZoom - this.o, 0) : h = 0;
        var l = d.ba(), m = this.Qa();
        a = Math.cos(-m);
        m = Math.sin(-m);
        var n = Infinity, p = Infinity, q = -Infinity, t = -Infinity;
        d = d.ma();
        for (var u = 0, x = l.length; u < x; u += d) {
            var B = l[u] * a - l[u + 1] * m, z = l[u] * m + l[u + 1] * a;
            n = Math.min(n, B);
            p = Math.min(p, z);
            q = Math.max(q, B);
            t = Math.max(t, z)
        }
        c = this.Ke([n, p, q, t], [c[0] - e[1] - e[3], c[1] - e[0] - e[2]]);
        c = isNaN(c) ? h : Math.max(c, h);
        f && (h = this.constrainResolution(c, 0, 0), !g && h < c && (h = this.constrainResolution(h, -1, 0)), c = h);
        m = -m;
        h = (n + q) / 2 + (e[1] - e[3]) / 2 * c;
        e = (p + t) / 2 + (e[0] - e[2]) / 2 * c;
        a = [h * a - e * m, e * a + h * m];
        e = b.callback ? b.callback : ra;
        void 0 !== b.duration ? this.animate({
            resolution: c,
            center: a, duration: b.duration, easing: b.easing
        }, e) : (this.Yc(c), this.rb(a), setTimeout(e.bind(void 0, !0), 0))
    };
    k.Fk = function (a, b, c) {
        var d = this.Qa(), e = Math.cos(-d);
        d = Math.sin(-d);
        var f = a[0] * e - a[1] * d;
        a = a[1] * e + a[0] * d;
        var g = this.Pa();
        f += (b[0] / 2 - c[0]) * g;
        a += (c[1] - b[1] / 2) * g;
        d = -d;
        this.rb([f * e - a * d, a * e + f * d])
    };
    function og(a) {
        return !!a.xa() && void 0 !== a.Pa()
    }

    k.rotate = function (a, b) {
        void 0 !== b && (b = kg(this, a, b), this.rb(b));
        this.Ze(a)
    };
    k.rb = function (a) {
        this.set("center", a);
        this.Kc() && this.hd()
    };
    function hg(a, b, c) {
        a.l[b] += c;
        a.s()
    }

    k.Yc = function (a) {
        this.set("resolution", a);
        this.Kc() && this.hd()
    };
    k.Ze = function (a) {
        this.set("rotation", a);
        this.Kc() && this.hd()
    };
    k.zq = function (a) {
        this.Yc(this.Oh(a))
    };
    function pg(a, b, c) {
        this.i = a;
        this.c = b;
        this.g = c;
        this.b = [];
        this.a = this.f = 0
    }

    function qg(a) {
        a.b.length = 0;
        a.f = 0;
        a.a = 0
    }

    function rg(a) {
        if (6 > a.b.length)return !1;
        var b = Date.now() - a.g, c = a.b.length - 3;
        if (a.b[c + 2] < b)return !1;
        for (var d = c - 3; 0 < d && a.b[d + 2] > b;)d -= 3;
        b = a.b[c + 2] - a.b[d + 2];
        if (b < 1E3 / 60)return !1;
        var e = a.b[c] - a.b[d];
        c = a.b[c + 1] - a.b[d + 1];
        a.f = Math.atan2(c, e);
        a.a = Math.sqrt(e * e + c * c) / b;
        return a.a > a.c
    };
    function sg(a) {
        Vc.call(this);
        this.v = null;
        this.Ia(!0);
        this.handleEvent = a.handleEvent
    }

    v(sg, Vc);
    sg.prototype.c = function () {
        return this.get("active")
    };
    sg.prototype.i = function () {
        return this.v
    };
    sg.prototype.Ia = function (a) {
        this.set("active", a)
    };
    sg.prototype.setMap = function (a) {
        this.v = a
    };
    function tg(a, b, c, d) {
        if (void 0 !== b) {
            var e = a.Qa(), f = a.xa();
            void 0 !== e && f && 0 < d ? a.animate({rotation: b, anchor: c, duration: d, easing: td}) : a.rotate(b, c)
        }
    }

    function ug(a, b, c, d) {
        var e = a.Pa();
        b = a.constrainResolution(e, b, 0);
        if (c && void 0 !== b && b !== e) {
            var f = a.xa();
            c = jg(a, b, c);
            c = a.Gc(c);
            c = [(b * f[0] - e * c[0]) / (b - e), (b * f[1] - e * c[1]) / (b - e)]
        }
        vg(a, b, c, d)
    }

    function vg(a, b, c, d) {
        if (b) {
            var e = a.Pa(), f = a.xa();
            void 0 !== e && f && b !== e && d ? a.animate({
                resolution: b,
                anchor: c,
                duration: d,
                easing: td
            }) : (c && (c = jg(a, b, c), a.rb(c)), a.Yc(b))
        }
    };
    function wg(a) {
        a = a ? a : {};
        this.a = a.delta ? a.delta : 1;
        sg.call(this, {handleEvent: xg});
        this.g = void 0 !== a.duration ? a.duration : 250
    }

    v(wg, sg);
    function xg(a) {
        var b = !1, c = a.originalEvent;
        if ("dblclick" == a.type) {
            b = a.coordinate;
            c = c.shiftKey ? -this.a : this.a;
            var d = a.map.$();
            ug(d, c, b, this.g);
            a.preventDefault();
            b = !0
        }
        return !b
    };
    function yg(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }

    function zg(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function Ag(a) {
        a = a.originalEvent;
        return !a.button && !(Sd && Td && a.ctrlKey)
    }

    function Bg(a) {
        return "pointermove" == a.type
    }

    function Cg(a) {
        return "singleclick" == a.type
    }

    function Dg(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }

    function Eg(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function Fg(a) {
        a = a.originalEvent.target.tagName;
        return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
    }

    function Gg(a) {
        va(a.b, 56);
        return "mouse" == a.b.pointerType
    }

    function Hg(a) {
        a = a.b;
        return a.isPrimary && 0 === a.button
    };
    function Jg(a) {
        a = a ? a : {};
        sg.call(this, {handleEvent: a.handleEvent ? a.handleEvent : Kg});
        this.Hf = a.handleDownEvent ? a.handleDownEvent : qf;
        this.Qf = a.handleDragEvent ? a.handleDragEvent : ra;
        this.Ck = a.handleMoveEvent ? a.handleMoveEvent : ra;
        this.Dk = a.handleUpEvent ? a.handleUpEvent : qf;
        this.D = !1;
        this.ta = {};
        this.l = []
    }

    v(Jg, sg);
    function Lg(a) {
        for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++)c += a[e].clientX, d += a[e].clientY;
        return [c / b, d / b]
    }

    function Kg(a) {
        if (!(a instanceof ie))return !0;
        var b = !1, c = a.type;
        if ("pointerdown" === c || "pointerdrag" === c || "pointerup" === c) c = a.b, "pointerup" == a.type ? delete this.ta[c.pointerId] : "pointerdown" == a.type ? this.ta[c.pointerId] = c : c.pointerId in this.ta && (this.ta[c.pointerId] = c), this.l = tb(this.ta);
        this.D ? "pointerdrag" == a.type ? this.Qf(a) : "pointerup" == a.type && (this.D = this.Dk(a) && 0 < this.l.length) : "pointerdown" == a.type ? (this.D = a = this.Hf(a), b = this.$c(a)) : "pointermove" == a.type && this.Ck(a);
        return !b
    }

    Jg.prototype.$c = function (a) {
        return a
    };
    function Mg(a) {
        Jg.call(this, {handleDownEvent: Ng, handleDragEvent: Og, handleUpEvent: Pg});
        a = a ? a : {};
        this.a = a.kinetic;
        this.g = null;
        this.u = a.condition ? a.condition : Dg;
        this.j = !1
    }

    v(Mg, Jg);
    function Og(a) {
        var b = this.l, c = Lg(b);
        if (b.length == this.o) {
            if (this.a && this.a.b.push(c[0], c[1], Date.now()), this.g) {
                var d = this.g[0] - c[0], e = c[1] - this.g[1];
                a = a.map.$();
                var f = a.getState();
                d = [d, e];
                jf(d, f.resolution);
                hf(d, f.rotation);
                bf(d, f.center);
                d = a.Gc(d);
                a.rb(d)
            }
        } else this.a && qg(this.a);
        this.g = c;
        this.o = b.length
    }

    function Pg(a) {
        var b = a.map;
        a = b.$();
        if (this.l.length)return this.a && qg(this.a), this.g = null, !0;
        if (!this.j && this.a && rg(this.a)) {
            var c = this.a;
            c = (c.c - c.a) / c.i;
            var d = this.a.f, e = a.xa();
            e = b.Ka(e);
            b = b.Xa([e[0] - c * Math.cos(d), e[1] - c * Math.sin(d)]);
            a.animate({center: a.Gc(b), duration: 500, easing: td})
        }
        hg(a, 1, -1);
        return !1
    }

    function Ng(a) {
        if (0 < this.l.length && this.u(a)) {
            var b = a.map.$();
            this.g = null;
            this.D || hg(b, 1, 1);
            ig(b)[0] && b.rb(a.frameState.viewState.center);
            this.a && qg(this.a);
            this.j = 1 < this.l.length;
            return !0
        }
        return !1
    }

    Mg.prototype.$c = qf;
    function Qg(a) {
        a = a ? a : {};
        Jg.call(this, {handleDownEvent: Rg, handleDragEvent: Sg, handleUpEvent: Tg});
        this.g = a.condition ? a.condition : zg;
        this.a = void 0;
        this.j = void 0 !== a.duration ? a.duration : 250
    }

    v(Qg, Jg);
    function Sg(a) {
        if (Gg(a)) {
            var b = a.map, c = b.$();
            if (c.g.rotation !== We) {
                b = b.Mb();
                a = a.pixel;
                a = Math.atan2(b[1] / 2 - a[1], a[0] - b[0] / 2);
                if (void 0 !== this.a) {
                    b = a - this.a;
                    var d = c.Qa();
                    tg(c, d - b)
                }
                this.a = a
            }
        }
    }

    function Tg(a) {
        if (!Gg(a))return !0;
        a = a.map.$();
        hg(a, 1, -1);
        var b = a.Qa(), c = this.j;
        b = a.constrainRotation(b, 0);
        tg(a, b, void 0, c);
        return !1
    }

    function Rg(a) {
        return Gg(a) && Ag(a) && this.g(a) ? (hg(a.map.$(), 1, 1), this.a = void 0, !0) : !1
    }

    Qg.prototype.$c = qf;
    function Ug(a) {
        this.Ic = null;
        this.a = document.createElement("div");
        this.a.style.position = "absolute";
        this.a.className = "ol-box " + a;
        this.f = this.c = this.b = null
    }

    v(Ug, Oc);
    Ug.prototype.ka = function () {
        this.setMap(null)
    };
    function Vg(a) {
        var b = a.c, c = a.f;
        a = a.a.style;
        a.left = Math.min(b[0], c[0]) + "px";
        a.top = Math.min(b[1], c[1]) + "px";
        a.width = Math.abs(c[0] - b[0]) + "px";
        a.height = Math.abs(c[1] - b[1]) + "px"
    }

    Ug.prototype.setMap = function (a) {
        if (this.b) {
            this.b.B.removeChild(this.a);
            var b = this.a.style;
            b.left = b.top = b.width = b.height = "inherit"
        }
        (this.b = a) && this.b.B.appendChild(this.a)
    };
    function Wg(a) {
        var b = a.c, c = a.f;
        b = [b, [b[0], c[1]], c, [c[0], b[1]]].map(a.b.Xa, a.b);
        b[4] = b[0].slice();
        a.Ic ? a.Ic.na([b]) : a.Ic = new D([b])
    }

    Ug.prototype.W = function () {
        return this.Ic
    };
    function Xg(a) {
        Jg.call(this, {handleDownEvent: Yg, handleDragEvent: Zg, handleUpEvent: $g});
        a = a ? a : {};
        this.a = new Ug(a.className || "ol-dragbox");
        this.u = void 0 !== a.minArea ? a.minArea : 64;
        this.g = null;
        this.B = a.condition ? a.condition : pf;
        this.o = a.boxEndCondition ? a.boxEndCondition : ah
    }

    v(Xg, Jg);
    function ah(a, b, c) {
        a = c[0] - b[0];
        b = c[1] - b[1];
        return a * a + b * b >= this.u
    }

    function Zg(a) {
        if (Gg(a)) {
            var b = this.a, c = a.pixel;
            b.c = this.g;
            b.f = c;
            Wg(b);
            Vg(b);
            this.b(new bh(ch, a.coordinate, a))
        }
    }

    Xg.prototype.W = function () {
        return this.a.W()
    };
    Xg.prototype.j = ra;
    function $g(a) {
        if (!Gg(a))return !0;
        this.a.setMap(null);
        this.o(a, this.g, a.pixel) && (this.j(a), this.b(new bh(dh, a.coordinate, a)));
        return !1
    }

    function Yg(a) {
        if (Gg(a) && Ag(a) && this.B(a)) {
            this.g = a.pixel;
            this.a.setMap(a.map);
            var b = this.a, c = this.g;
            b.c = this.g;
            b.f = c;
            Wg(b);
            Vg(b);
            this.b(new bh(eh, a.coordinate, a));
            return !0
        }
        return !1
    }

    var eh = "boxstart", ch = "boxdrag", dh = "boxend";

    function bh(a, b, c) {
        Qc.call(this, a);
        this.coordinate = b;
        this.mapBrowserEvent = c
    }

    v(bh, Qc);
    function fh(a) {
        a = a ? a : {};
        var b = a.condition ? a.condition : Eg;
        this.C = void 0 !== a.duration ? a.duration : 200;
        this.I = void 0 !== a.out ? a.out : !1;
        Xg.call(this, {condition: b, className: a.className || "ol-dragzoom"})
    }

    v(fh, Xg);
    fh.prototype.j = function () {
        var a = this.v, b = a.$(), c = a.Mb(), d = this.W().G();
        if (this.I) {
            var e = b.gd(c);
            d = [a.Ka(db(d)), a.Ka(fb(d))];
            a = Wa(void 0);
            var f;
            var g = 0;
            for (f = d.length; g < f; ++g)Na(a, d[g]);
            d = b.Ke(a, c);
            pb(e, 1 / d);
            d = e
        }
        c = b.constrainResolution(b.Ke(d, c));
        e = lb(d);
        e = b.Gc(e);
        b.animate({resolution: c, center: e, duration: this.C, easing: td})
    };
    function gh(a) {
        sg.call(this, {handleEvent: hh});
        a = a || {};
        this.a = function (a) {
            return Dg(a) && Fg(a)
        };
        this.g = a.condition ? a.condition : this.a;
        this.j = void 0 !== a.duration ? a.duration : 100;
        this.l = void 0 !== a.pixelDelta ? a.pixelDelta : 128
    }

    v(gh, sg);
    function hh(a) {
        var b = !1;
        if ("keydown" == a.type) {
            var c = a.originalEvent.keyCode;
            if (this.g(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
                b = a.map.$();
                var d = b.Pa() * this.l, e = 0, f = 0;
                40 == c ? f = -d : 37 == c ? e = -d : 39 == c ? e = d : f = d;
                d = [e, f];
                hf(d, b.Qa());
                c = this.j;
                if (e = b.xa()) d = b.Gc([e[0] + d[0], e[1] + d[1]]), c ? b.animate({
                    duration: c,
                    easing: vd,
                    center: d
                }) : b.rb(d);
                a.preventDefault();
                b = !0
            }
        }
        return !b
    };
    function ih(a) {
        sg.call(this, {handleEvent: jh});
        a = a ? a : {};
        this.g = a.condition ? a.condition : Fg;
        this.a = a.delta ? a.delta : 1;
        this.j = void 0 !== a.duration ? a.duration : 100
    }

    v(ih, sg);
    function jh(a) {
        var b = !1;
        if ("keydown" == a.type || "keypress" == a.type) {
            var c = a.originalEvent.charCode;
            !this.g(a) || 43 != c && 45 != c || (b = 43 == c ? this.a : -this.a, c = a.map.$(), ug(c, b, void 0, this.j), a.preventDefault(), b = !0)
        }
        return !b
    };
    function kh(a) {
        sg.call(this, {handleEvent: lh});
        a = a || {};
        this.j = 0;
        this.D = void 0 !== a.duration ? a.duration : 250;
        this.ta = void 0 !== a.timeout ? a.timeout : 80;
        this.B = void 0 !== a.useAnchor ? a.useAnchor : !0;
        this.S = a.constrainResolution || !1;
        this.a = null;
        this.o = this.l = this.u = this.g = void 0
    }

    v(kh, sg);
    function lh(a) {
        var b = a.type;
        if ("wheel" !== b && "mousewheel" !== b)return !0;
        a.preventDefault();
        b = a.map;
        var c = a.originalEvent;
        this.B && (this.a = a.coordinate);
        if ("wheel" == a.type) {
            var d = c.deltaY;
            Qd && c.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (d /= Ud);
            c.deltaMode === WheelEvent.DOM_DELTA_LINE && (d *= 40)
        } else"mousewheel" == a.type && (d = -c.wheelDeltaY, Rd && (d /= 3));
        if (0 === d)return !1;
        a = Date.now();
        void 0 === this.g && (this.g = a);
        if (!this.l || 400 < a - this.g) this.l = 4 > Math.abs(d) ? mh : nh;
        if (this.l === mh) {
            b = b.$();
            this.o ? clearTimeout(this.o) :
                hg(b, 1, 1);
            this.o = setTimeout(this.C.bind(this), 400);
            c = b.Pa() * Math.pow(2, d / 300);
            var e = b.i, f = b.a, g = 0;
            c < e ? (c = Math.max(c, e / 1.5), g = 1) : c > f && (c = Math.min(c, 1.5 * f), g = -1);
            if (this.a) {
                var h = jg(b, c, this.a);
                b.rb(b.Gc(h))
            }
            b.Yc(c);
            !g && this.S && b.animate({
                resolution: b.constrainResolution(c, 0 < d ? -1 : 1),
                easing: td,
                anchor: this.a,
                duration: this.D
            });
            0 < g ? b.animate({
                resolution: e,
                easing: td,
                anchor: this.a,
                duration: 500
            }) : 0 > g && b.animate({resolution: f, easing: td, anchor: this.a, duration: 500});
            this.g = a;
            return !1
        }
        this.j += d;
        d = Math.max(this.ta -
            (a - this.g), 0);
        clearTimeout(this.u);
        this.u = setTimeout(this.I.bind(this, b), d);
        return !1
    }

    kh.prototype.C = function () {
        this.o = void 0;
        hg(this.v.$(), 1, -1)
    };
    kh.prototype.I = function (a) {
        a = a.$();
        a.Kc() && a.hd();
        ug(a, -Aa(this.j, -1, 1), this.a, this.D);
        this.l = void 0;
        this.j = 0;
        this.a = null;
        this.u = this.g = void 0
    };
    kh.prototype.U = function (a) {
        this.B = a;
        a || (this.a = null)
    };
    var mh = "trackpad", nh = "wheel";

    function oh(a) {
        Jg.call(this, {handleDownEvent: ph, handleDragEvent: qh, handleUpEvent: rh});
        a = a || {};
        this.g = null;
        this.j = void 0;
        this.a = !1;
        this.o = 0;
        this.B = void 0 !== a.threshold ? a.threshold : .3;
        this.u = void 0 !== a.duration ? a.duration : 250
    }

    v(oh, Jg);
    function qh(a) {
        var b = 0, c = this.l[0], d = this.l[1];
        c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
        void 0 !== this.j && (b = c - this.j, this.o += b, !this.a && Math.abs(this.o) > this.B && (this.a = !0));
        this.j = c;
        a = a.map;
        c = a.$();
        if (c.g.rotation !== We) {
            d = a.a.getBoundingClientRect();
            var e = Lg(this.l);
            e[0] -= d.left;
            e[1] -= d.top;
            this.g = a.Xa(e);
            this.a && (d = c.Qa(), a.render(), tg(c, d + b, this.g))
        }
    }

    function rh(a) {
        if (2 > this.l.length) {
            a = a.map.$();
            hg(a, 1, -1);
            if (this.a) {
                var b = a.Qa(), c = this.g, d = this.u;
                b = a.constrainRotation(b, 0);
                tg(a, b, c, d)
            }
            return !1
        }
        return !0
    }

    function ph(a) {
        return 2 <= this.l.length ? (a = a.map, this.g = null, this.j = void 0, this.a = !1, this.o = 0, this.D || hg(a.$(), 1, 1), !0) : !1
    }

    oh.prototype.$c = qf;
    function sh(a) {
        Jg.call(this, {handleDownEvent: th, handleDragEvent: uh, handleUpEvent: vh});
        a = a ? a : {};
        this.o = a.constrainResolution || !1;
        this.g = null;
        this.u = void 0 !== a.duration ? a.duration : 400;
        this.a = void 0;
        this.j = 1
    }

    v(sh, Jg);
    function uh(a) {
        var b = 1, c = this.l[0], d = this.l[1], e = c.clientX - d.clientX;
        c = c.clientY - d.clientY;
        e = Math.sqrt(e * e + c * c);
        void 0 !== this.a && (b = this.a / e);
        this.a = e;
        a = a.map;
        e = a.$();
        d = e.Pa();
        var f = e.a, g = e.i;
        c = d * b;
        c > f ? (b = f / d, c = f) : c < g && (b = g / d, c = g);
        1 != b && (this.j = b);
        b = a.a.getBoundingClientRect();
        d = Lg(this.l);
        d[0] -= b.left;
        d[1] -= b.top;
        this.g = a.Xa(d);
        a.render();
        vg(e, c, this.g)
    }

    function vh(a) {
        if (2 > this.l.length) {
            a = a.map.$();
            hg(a, 1, -1);
            var b = a.Pa();
            if (this.o || b < a.i || b > a.a) {
                var c = this.g, d = this.u;
                b = a.constrainResolution(b, 0, this.j - 1);
                vg(a, b, c, d)
            }
            return !1
        }
        return !0
    }

    function th(a) {
        return 2 <= this.l.length ? (a = a.map, this.g = null, this.a = void 0, this.j = 1, this.D || hg(a.$(), 1, 1), !0) : !1
    }

    sh.prototype.$c = qf;
    function wh(a) {
        a = a ? a : {};
        var b = new $c, c = new pg(-.005, .05, 100);
        (void 0 !== a.altShiftDragRotate ? a.altShiftDragRotate : 1) && b.push(new Qg);
        (void 0 !== a.doubleClickZoom ? a.doubleClickZoom : 1) && b.push(new wg({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        }));
        (void 0 !== a.dragPan ? a.dragPan : 1) && b.push(new Mg({kinetic: c}));
        (void 0 !== a.pinchRotate ? a.pinchRotate : 1) && b.push(new oh);
        (void 0 !== a.pinchZoom ? a.pinchZoom : 1) && b.push(new sh({
            constrainResolution: a.constrainResolution,
            duration: a.zoomDuration
        }));
        if (void 0 !== a.keyboard ?
                a.keyboard : 1) b.push(new gh), b.push(new ih({delta: a.zoomDelta, duration: a.zoomDuration}));
        (void 0 !== a.mouseWheelZoom ? a.mouseWheelZoom : 1) && b.push(new kh({
            constrainResolution: a.constrainResolution,
            duration: a.zoomDuration
        }));
        (void 0 !== a.shiftDragZoom ? a.shiftDragZoom : 1) && b.push(new fh({duration: a.zoomDuration}));
        return b
    };
    function xh(a) {
        Vc.call(this);
        var b = rb({}, a);
        b.opacity = void 0 !== a.opacity ? a.opacity : 1;
        b.visible = void 0 !== a.visible ? a.visible : !0;
        b.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
        b.maxResolution = void 0 !== a.maxResolution ? a.maxResolution : Infinity;
        b.minResolution = void 0 !== a.minResolution ? a.minResolution : 0;
        this.H(b);
        this.a = {layer: this, Ue: !0}
    }

    v(xh, Vc);
    function yh(a) {
        a.a.opacity = Aa(a.hc(), 0, 1);
        a.a.Ij = a.hg();
        a.a.visible = a.Sb();
        a.a.extent = a.G();
        a.a.zIndex = a.za();
        a.a.maxResolution = a.fc();
        a.a.minResolution = Math.max(a.gc(), 0);
        return a.a
    }

    k = xh.prototype;
    k.G = function () {
        return this.get("extent")
    };
    k.fc = function () {
        return this.get("maxResolution")
    };
    k.gc = function () {
        return this.get("minResolution")
    };
    k.hc = function () {
        return this.get("opacity")
    };
    k.Sb = function () {
        return this.get("visible")
    };
    k.za = function () {
        return this.get("zIndex")
    };
    k.xc = function (a) {
        this.set("extent", a)
    };
    k.Bc = function (a) {
        this.set("maxResolution", a)
    };
    k.Cc = function (a) {
        this.set("minResolution", a)
    };
    k.yc = function (a) {
        this.set("opacity", a)
    };
    k.zc = function (a) {
        this.set("visible", a)
    };
    k.Wb = function (a) {
        this.set("zIndex", a)
    };
    function zh(a) {
        var b = a || {};
        a = rb({}, b);
        delete a.layers;
        b = b.layers;
        xh.call(this, a);
        this.i = [];
        this.c = {};
        y(this, Xc(Ch), this.Tl, this);
        b ? Array.isArray(b) ? b = new $c(b.slice(), {unique: !0}) : va(b instanceof $c, 43) : b = new $c(void 0, {unique: !0});
        this.Hi(b)
    }

    v(zh, xh);
    k = zh.prototype;
    k.Ld = function () {
    };
    k.Qe = function () {
        this.s()
    };
    k.Tl = function () {
        this.i.forEach(Gc);
        this.i.length = 0;
        var a = this.wd();
        this.i.push(y(a, "add", this.Sl, this), y(a, "remove", this.Ul, this));
        for (var b in this.c)this.c[b].forEach(Gc);
        sb(this.c);
        a = a.a;
        var c;
        b = 0;
        for (c = a.length; b < c; b++) {
            var d = a[b];
            this.c[w(d).toString()] = [y(d, "propertychange", this.Qe, this), y(d, "change", this.Qe, this)]
        }
        this.s()
    };
    k.Sl = function (a) {
        a = a.element;
        var b = w(a).toString();
        this.c[b] = [y(a, "propertychange", this.Qe, this), y(a, "change", this.Qe, this)];
        this.s()
    };
    k.Ul = function (a) {
        a = w(a.element).toString();
        this.c[a].forEach(Gc);
        delete this.c[a];
        this.s()
    };
    k.wd = function () {
        return this.get(Ch)
    };
    k.Hi = function (a) {
        this.set(Ch, a)
    };
    k.fg = function (a) {
        var b = void 0 !== a ? a : [], c = b.length;
        this.wd().forEach(function (a) {
            a.fg(b)
        });
        a = yh(this);
        var d;
        for (d = b.length; c < d; c++) {
            var e = b[c];
            e.opacity *= a.opacity;
            e.visible = e.visible && a.visible;
            e.maxResolution = Math.min(e.maxResolution, a.maxResolution);
            e.minResolution = Math.max(e.minResolution, a.minResolution);
            void 0 !== a.extent && (e.extent = void 0 !== e.extent ? nb(e.extent, a.extent) : a.extent)
        }
        return b
    };
    k.hg = function () {
        return "ready"
    };
    var Ch = "layers";

    function Dh(a) {
        var b = rb({}, a);
        delete b.source;
        xh.call(this, b);
        this.o = this.l = this.j = null;
        a.map && this.setMap(a.map);
        y(this, Xc("source"), this.gm, this);
        this.Zc(a.source ? a.source : null)
    }

    v(Dh, xh);
    function Eh(a, b) {
        return a.visible && b >= a.minResolution && b < a.maxResolution
    }

    k = Dh.prototype;
    k.fg = function (a) {
        a = a ? a : [];
        a.push(yh(this));
        return a
    };
    k.ia = function () {
        return this.get("source") || null
    };
    k.hg = function () {
        var a = this.ia();
        return a ? a.getState() : "undefined"
    };
    k.io = function () {
        this.s()
    };
    k.gm = function () {
        this.o && (Gc(this.o), this.o = null);
        var a = this.ia();
        a && (this.o = y(a, "change", this.io, this));
        this.s()
    };
    k.setMap = function (a) {
        this.j && (Gc(this.j), this.j = null);
        a || this.s();
        this.l && (Gc(this.l), this.l = null);
        a && (this.j = y(a, "precompose", function (a) {
            var b = yh(this);
            b.Ue = !1;
            b.zIndex = Infinity;
            a.frameState.layerStatesArray.push(b);
            a.frameState.layerStates[w(this)] = b
        }, this), this.l = y(this, "change", a.render, a), this.s())
    };
    k.Zc = function (a) {
        this.set("source", a)
    };
    function Fh() {
        this.b = {};
        this.a = 0
    }

    Fh.prototype.clear = function () {
        this.b = {};
        this.a = 0
    };
    Fh.prototype.get = function (a, b, c) {
        a = b + ":" + a + ":" + (c ? id(c) : "null");
        return a in this.b ? this.b[a] : null
    };
    Fh.prototype.set = function (a, b, c, d) {
        this.b[b + ":" + a + ":" + (c ? id(c) : "null")] = d;
        ++this.a
    };
    var Gh = new Fh;
    var Hh = Array(6);

    function Ih() {
        return [1, 0, 0, 1, 0, 0]
    }

    function Jh(a) {
        return Kh(a, 1, 0, 0, 1, 0, 0)
    }

    function Lh(a, b) {
        var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], l = b[0], m = b[1], n = b[2], p = b[3],
            q = b[4];
        b = b[5];
        a[0] = c * l + e * m;
        a[1] = d * l + f * m;
        a[2] = c * n + e * p;
        a[3] = d * n + f * p;
        a[4] = c * q + e * b + g;
        a[5] = d * q + f * b + h;
        return a
    }

    function Kh(a, b, c, d, e, f, g) {
        a[0] = b;
        a[1] = c;
        a[2] = d;
        a[3] = e;
        a[4] = f;
        a[5] = g;
        return a
    }

    function Mh(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        return a
    }

    function Nh(a, b) {
        var c = b[0], d = b[1];
        b[0] = a[0] * c + a[2] * d + a[4];
        b[1] = a[1] * c + a[3] * d + a[5];
        return b
    }

    function Oh(a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        Lh(a, Kh(Hh, c, b, -b, c, 0, 0))
    }

    function Ph(a, b, c) {
        return Lh(a, Kh(Hh, b, 0, 0, c, 0, 0))
    }

    function Qh(a, b, c) {
        Lh(a, Kh(Hh, 1, 0, 0, 1, b, c))
    }

    function Rh(a, b, c, d, e, f, g, h) {
        var l = Math.sin(f);
        f = Math.cos(f);
        a[0] = d * f;
        a[1] = e * l;
        a[2] = -d * l;
        a[3] = e * f;
        a[4] = g * d * f - h * d * l + b;
        a[5] = g * e * l + h * e * f + c;
        return a
    }

    function Sh(a) {
        var b = a[0] * a[3] - a[1] * a[2];
        va(!!b, 32);
        var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5];
        a[0] = f / b;
        a[1] = -d / b;
        a[2] = -e / b;
        a[3] = c / b;
        a[4] = (e * h - f * g) / b;
        a[5] = -(c * h - d * g) / b;
        return a
    };
    function Th(a, b) {
        this.l = b;
        this.c = {};
        this.v = {}
    }

    v(Th, Oc);
    function Uh(a) {
        var b = a.viewState, c = a.coordinateToPixelTransform, d = a.pixelToCoordinateTransform;
        Rh(c, a.size[0] / 2, a.size[1] / 2, 1 / b.resolution, -1 / b.resolution, -b.rotation, -b.center[0], -b.center[1]);
        Sh(Mh(d, c))
    }

    k = Th.prototype;
    k.ka = function () {
        for (var a in this.c)Pc(this.c[a])
    };
    function Vh() {
        if (32 < Gh.a) {
            var a = 0, b;
            for (b in Gh.b) {
                var c = Gh.b[b];
                a++ & 3 || Tc(c) || (delete Gh.b[b], --Gh.a)
            }
        }
    }

    k.Ha = function (a, b, c, d, e, f, g) {
        function h(a, c) {
            var f = w(a).toString(), g = b.layerStates[w(c)].Ue;
            if (!(f in b.skippedFeatureUids) || g)return d.call(e, a, g ? c : null)
        }

        var l, m = b.viewState, n = m.resolution, p = m.projection;
        m = a;
        if (p.f) {
            p = p.G();
            var q = jb(p), t = a[0];
            if (t < p[0] || t > p[2]) m = [t + q * Math.ceil((p[0] - t) / q), a[1]]
        }
        p = b.layerStatesArray;
        for (q = p.length - 1; 0 <= q; --q) {
            var u = p[q];
            t = u.layer;
            if (Eh(u, n) && f.call(g, t) && (u = Wh(this, t), t.ia() && (l = u.Ha(t.ia().u ? m : a, b, c, h, e)), l))return l
        }
    };
    k.Oi = function (a, b, c, d, e) {
        return void 0 !== this.Ha(a, b, c, pf, this, d, e)
    };
    function Wh(a, b) {
        var c = w(b).toString();
        if (c in a.c)return a.c[c];
        b = b.Ld(a);
        a.c[c] = b;
        a.v[c] = y(b, "change", a.Rl, a);
        return b
    }

    k.Rl = function () {
        this.l.render()
    };
    k.Rg = ra;
    k.eq = function (a, b) {
        for (var c in this.c)if (!(b && c in b.layerStates)) {
            a = c;
            var d = this.c[a];
            delete this.c[a];
            Gc(this.v[a]);
            delete this.v[a];
            Pc(d)
        }
    };
    function Xh(a, b) {
        for (var c in a.c)if (!(c in b.layerStates)) {
            b.postRenderFunctions.push(a.eq.bind(a));
            break
        }
    }

    function oa(a, b) {
        return a.zIndex - b.zIndex
    };
    function Yh(a, b, c, d, e) {
        Qc.call(this, a);
        this.vectorContext = b;
        this.frameState = c;
        this.context = d;
        this.glContext = e
    }

    v(Yh, Qc);
    var Zh = [0, 0, 0, 1], $h = [], ai = [0, 0, 0, 1];

    function bi(a, b, c, d) {
        b && (a.translate(c, d), a.rotate(b), a.translate(-c, -d))
    };
    function ci() {
    }

    k = ci.prototype;
    k.wh = function () {
    };
    k.Cb = function () {
    };
    k.xd = function () {
    };
    k.$b = function () {
    };
    k.Ee = function () {
    };
    k.Fe = function () {
    };
    k.oc = function () {
    };
    k.pc = function () {
    };
    k.qc = function () {
    };
    k.rc = function () {
    };
    k.sc = function () {
    };
    k.tc = function () {
    };
    k.Qb = function () {
    };
    k.Na = function () {
    };
    k.Vb = function () {
    };
    k.gb = function () {
    };
    function di(a, b, c, d, e) {
        this.f = a;
        this.g = b;
        this.c = c;
        this.R = d;
        this.Zb = e;
        this.M = this.b = this.a = this.Va = this.S = this.I = null;
        this.ta = this.U = this.v = this.C = this.B = this.D = 0;
        this.ga = !1;
        this.i = this.jb = 0;
        this.oa = !1;
        this.pa = 0;
        this.ua = "";
        this.mc = this.va = 0;
        this.Sa = !1;
        this.l = this.Za = 0;
        this.qa = this.o = this.j = null;
        this.u = [];
        this.Ib = Ih()
    }

    v(di, ci);
    function ei(a, b, c) {
        if (a.M) {
            b = sf(b, 0, c, 2, a.R, a.u);
            c = a.f;
            var d = a.Ib, e = c.globalAlpha;
            1 != a.v && (c.globalAlpha = e * a.v);
            var f = a.jb;
            a.ga && (f += a.Zb);
            var g;
            var h = 0;
            for (g = b.length; h < g; h += 2) {
                var l = b[h] - a.D, m = b[h + 1] - a.B;
                a.oa && (l = Math.round(l), m = Math.round(m));
                if (f || 1 != a.i) {
                    var n = l + a.D, p = m + a.B;
                    Rh(d, n, p, a.i, a.i, f, -n, -p);
                    c.setTransform.apply(c, d)
                }
                c.drawImage(a.M, a.U, a.ta, a.pa, a.C, l, m, a.pa, a.C)
            }
            (f || 1 != a.i) && c.setTransform(1, 0, 0, 1, 0, 0);
            1 != a.v && (c.globalAlpha = e)
        }
    }

    function fi(a, b, c, d) {
        var e = 0;
        if (a.qa && "" !== a.ua) {
            a.j && gi(a, a.j);
            a.o && hi(a, a.o);
            var f = a.qa, g = a.f, h = a.Va;
            h ? (h.font != f.font && (h.font = g.font = f.font), h.textAlign != f.textAlign && (h.textAlign = g.textAlign = f.textAlign), h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline)) : (g.font = f.font, g.textAlign = f.textAlign, g.textBaseline = f.textBaseline, a.Va = {
                font: f.font,
                textAlign: f.textAlign,
                textBaseline: f.textBaseline
            });
            b = sf(b, e, c, d, a.R, a.u);
            f = a.f;
            g = a.Za;
            for (a.Sa && (g += a.Zb); e < c; e += d) {
                h = b[e] + a.va;
                var l = b[e + 1] + a.mc;
                if (g || 1 != a.l) {
                    var m = Rh(a.Ib, h, l, a.l, a.l, g, -h, -l);
                    f.setTransform.apply(f, m)
                }
                a.o && f.strokeText(a.ua, h, l);
                a.j && f.fillText(a.ua, h, l)
            }
            (g || 1 != a.l) && f.setTransform(1, 0, 0, 1, 0, 0)
        }
    }

    function ii(a, b, c, d, e, f) {
        var g = a.f;
        a = sf(b, c, d, e, a.R, a.u);
        g.moveTo(a[0], a[1]);
        b = a.length;
        f && (b -= 2);
        for (c = 2; c < b; c += 2)g.lineTo(a[c], a[c + 1]);
        f && g.closePath();
        return d
    }

    function ji(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = d.length; g < f; ++g)c = ii(a, b, c, d[g], e, !0);
        return c
    }

    k = di.prototype;
    k.$b = function (a) {
        if (ob(this.c, a.G())) {
            if (this.a || this.b) {
                this.a && gi(this, this.a);
                this.b && hi(this, this.b);
                var b = this.R;
                var c = this.u, d = a.ba();
                b = d ? sf(d, 0, d.length, a.ma(), b, c) : null;
                c = b[2] - b[0];
                d = b[3] - b[1];
                c = Math.sqrt(c * c + d * d);
                d = this.f;
                d.beginPath();
                d.arc(b[0], b[1], c, 0, 2 * Math.PI);
                this.a && d.fill();
                this.b && d.stroke()
            }
            "" !== this.ua && fi(this, a.xa(), 2, 2)
        }
    };
    k.xd = function (a) {
        this.Na(a.Da(), a.Ea());
        this.Vb(a.Y());
        this.gb(a.Ja())
    };
    k.Cb = function (a) {
        switch (a.T()) {
            case "Point":
                this.sc(a);
                break;
            case "LineString":
                this.oc(a);
                break;
            case "Polygon":
                this.tc(a);
                break;
            case "MultiPoint":
                this.qc(a);
                break;
            case "MultiLineString":
                this.pc(a);
                break;
            case "MultiPolygon":
                this.rc(a);
                break;
            case "GeometryCollection":
                this.Fe(a);
                break;
            case "Circle":
                this.$b(a)
        }
    };
    k.Ee = function (a, b) {
        (a = (0, b.$a)(a)) && ob(this.c, a.G()) && (this.xd(b), this.Cb(a))
    };
    k.Fe = function (a) {
        a = a.a;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c)this.Cb(a[c])
    };
    k.sc = function (a) {
        var b = a.ba();
        a = a.ma();
        this.M && ei(this, b, b.length);
        "" !== this.ua && fi(this, b, b.length, a)
    };
    k.qc = function (a) {
        var b = a.ba();
        a = a.ma();
        this.M && ei(this, b, b.length);
        "" !== this.ua && fi(this, b, b.length, a)
    };
    k.oc = function (a) {
        if (ob(this.c, a.G())) {
            if (this.b) {
                hi(this, this.b);
                var b = this.f, c = a.ba();
                b.beginPath();
                ii(this, c, 0, c.length, a.ma(), !1);
                b.stroke()
            }
            "" !== this.ua && (a = ki(a), fi(this, a, 2, 2))
        }
    };
    k.pc = function (a) {
        var b = a.G();
        if (ob(this.c, b)) {
            if (this.b) {
                hi(this, this.b);
                b = this.f;
                var c = a.ba(), d = 0, e = a.sb(), f = a.ma();
                b.beginPath();
                var g;
                var h = 0;
                for (g = e.length; h < g; ++h)d = ii(this, c, d, e[h], f, !1);
                b.stroke()
            }
            "" !== this.ua && (a = li(a), fi(this, a, a.length, 2))
        }
    };
    k.tc = function (a) {
        if (ob(this.c, a.G())) {
            if (this.b || this.a) {
                this.a && gi(this, this.a);
                this.b && hi(this, this.b);
                var b = this.f;
                b.beginPath();
                ji(this, a.Tb(), 0, a.sb(), a.ma());
                this.a && b.fill();
                this.b && b.stroke()
            }
            "" !== this.ua && (a = ag(a), fi(this, a, 2, 2))
        }
    };
    k.rc = function (a) {
        if (ob(this.c, a.G())) {
            if (this.b || this.a) {
                this.a && gi(this, this.a);
                this.b && hi(this, this.b);
                var b = this.f, c = mi(a), d = 0, e = a.c, f = a.ma(), g;
                b.beginPath();
                var h = 0;
                for (g = e.length; h < g; ++h)d = ji(this, c, d, e[h], f);
                this.a && b.fill();
                this.b && b.stroke()
            }
            "" !== this.ua && (a = ni(a), fi(this, a, a.length, 2))
        }
    };
    function gi(a, b) {
        var c = a.f, d = a.I;
        d ? d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle) : (c.fillStyle = b.fillStyle, a.I = {fillStyle: b.fillStyle})
    }

    function hi(a, b) {
        var c = a.f, d = a.S;
        d ? (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap), Vd && (ma(d.lineDash, b.lineDash) || c.setLineDash(d.lineDash = b.lineDash), d.lineDashOffset != b.lineDashOffset && (d.lineDashOffset = c.lineDashOffset = b.lineDashOffset)), d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin = b.lineJoin), d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth), d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit), d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle)) :
            (c.lineCap = b.lineCap, Vd && (c.setLineDash(b.lineDash), c.lineDashOffset = b.lineDashOffset), c.lineJoin = b.lineJoin, c.lineWidth = b.lineWidth, c.miterLimit = b.miterLimit, c.strokeStyle = b.strokeStyle, a.S = {
                lineCap: b.lineCap,
                lineDash: b.lineDash,
                lineDashOffset: b.lineDashOffset,
                lineJoin: b.lineJoin,
                lineWidth: b.lineWidth,
                miterLimit: b.miterLimit,
                strokeStyle: b.strokeStyle
            })
    }

    k.Na = function (a, b) {
        a ? (a = a.b, this.a = {fillStyle: kd(a ? a : Zh)}) : this.a = null;
        if (b) {
            a = b.b;
            var c = b.g, d = b.f, e = b.i, f = b.j, g = b.c;
            b = b.l;
            this.b = {
                lineCap: void 0 !== c ? c : "round",
                lineDash: d ? d : $h,
                lineDashOffset: e ? e : 0,
                lineJoin: void 0 !== f ? f : "round",
                lineWidth: this.g * (void 0 !== g ? g : 1),
                miterLimit: void 0 !== b ? b : 10,
                strokeStyle: kd(a ? a : ai)
            }
        } else this.b = null
    };
    k.Vb = function (a) {
        if (a) {
            var b = a.Jc(), c = a.Y(1), d = a.Rc(), e = a.ic();
            this.D = b[0];
            this.B = b[1];
            this.C = e[1];
            this.M = c;
            this.v = a.i;
            this.U = d[0];
            this.ta = d[1];
            this.ga = a.o;
            this.jb = a.g;
            this.i = a.a * this.g;
            this.oa = a.v;
            this.pa = e[0]
        } else this.M = null
    };
    k.gb = function (a) {
        if (a) {
            var b = a.Da();
            b ? (b = b.b, this.j = {fillStyle: kd(b ? b : Zh)}) : this.j = null;
            var c = a.Ea();
            if (c) {
                b = c.b;
                var d = c.g, e = c.f, f = c.i, g = c.j, h = c.c;
                c = c.l;
                this.o = {
                    lineCap: void 0 !== d ? d : "round",
                    lineDash: e ? e : $h,
                    lineDashOffset: f ? f : 0,
                    lineJoin: void 0 !== g ? g : "round",
                    lineWidth: void 0 !== h ? h : 1,
                    miterLimit: void 0 !== c ? c : 10,
                    strokeStyle: kd(b ? b : ai)
                }
            } else this.o = null;
            b = a.a;
            d = a.f;
            e = a.c;
            f = a.l;
            g = a.i;
            h = a.b;
            c = a.Ja();
            var l = a.g;
            a = a.j;
            this.qa = {
                font: void 0 !== b ? b : "10px sans-serif",
                textAlign: void 0 !== l ? l : "center",
                textBaseline: void 0 !==
                a ? a : "middle"
            };
            this.ua = void 0 !== c ? c : "";
            this.va = void 0 !== d ? this.g * d : 0;
            this.mc = void 0 !== e ? this.g * e : 0;
            this.Sa = void 0 !== f ? f : !1;
            this.Za = void 0 !== g ? g : 0;
            this.l = this.g * (void 0 !== h ? h : 1)
        } else this.ua = ""
    };
    function oi(a, b) {
        Th.call(this, 0, b);
        this.f = ld();
        this.b = this.f.canvas;
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.style.display = "block";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.a = !0;
        this.i = Ih()
    }

    v(oi, Th);
    function pi(a, b, c) {
        var d = a.l, e = a.f;
        if (Tc(d, b)) {
            var f = c.extent, g = c.pixelRatio, h = c.viewState.rotation, l = c.viewState,
                m = c.pixelRatio / l.resolution;
            a = Rh(a.i, a.b.width / 2, a.b.height / 2, m, -m, -l.rotation, -l.center[0], -l.center[1]);
            d.b(new Yh(b, new di(e, g, f, a, h), c, e, null))
        }
    }

    oi.prototype.T = function () {
        return "canvas"
    };
    oi.prototype.Rg = function (a) {
        if (a) {
            var b = this.f, c = a.pixelRatio, d = Math.round(a.size[0] * c), e = Math.round(a.size[1] * c);
            this.b.width != d || this.b.height != e ? (this.b.width = d, this.b.height = e) : b.clearRect(0, 0, d, e);
            c = a.viewState.rotation;
            Uh(a);
            pi(this, "precompose", a);
            var f = a.layerStatesArray;
            na(f);
            c && (b.save(), bi(b, c, d / 2, e / 2));
            d = a.viewState.resolution;
            var g;
            e = 0;
            for (g = f.length; e < g; ++e) {
                var h = f[e];
                var l = h.layer;
                l = Wh(this, l);
                Eh(h, d) && "ready" == h.Ij && l.yd(a, h) && l.u(a, h, b)
            }
            c && b.restore();
            pi(this, "postcompose", a);
            this.a ||
            (this.b.style.display = "", this.a = !0);
            Xh(this, a);
            a.postRenderFunctions.push(Vh)
        } else this.a && (this.b.style.display = "none", this.a = !1)
    };
    oi.prototype.Ni = function (a, b, c, d, e, f) {
        var g = b.viewState.resolution, h = b.layerStatesArray, l = h.length;
        a = Nh(b.pixelToCoordinateTransform, a.slice());
        for (--l; 0 <= l; --l) {
            var m = h[l];
            var n = m.layer;
            if (Eh(m, g) && e.call(f, n) && (m = Wh(this, n).v(a, b, c, d)))return m
        }
    };
    var qi = "Polygon Circle LineString Image Text Default".split(" ");

    function ri() {
    };
    function si(a) {
        this.b = a
    };
    function ti(a) {
        this.b = a
    }

    v(ti, si);
    ti.prototype.T = function () {
        return 35632
    };
    function ui(a) {
        this.b = a
    }

    v(ui, si);
    ui.prototype.T = function () {
        return 35633
    };
    function vi() {
        this.b = "precision mediump float;varying vec2 a;varying vec2 b;varying float c;varying float d;uniform float m;uniform vec4 n;uniform vec4 o;uniform vec2 p;void main(void){vec2 windowCenter=vec2((a.x+1.0)/2.0*p.x*d,(a.y+1.0)/2.0*p.y*d);vec2 windowOffset=vec2((b.x+1.0)/2.0*p.x*d,(b.y+1.0)/2.0*p.y*d);float radius=length(windowCenter-windowOffset);float dist=length(windowCenter-gl_FragCoord.xy);if(dist>radius+c){if(o.a==0.0){gl_FragColor=n;}else{gl_FragColor=o;}gl_FragColor.a=gl_FragColor.a-(dist-(radius+c));}else if(n.a==0.0){gl_FragColor=o;if(dist<radius-c){gl_FragColor.a=gl_FragColor.a-(radius-c-dist);}} else{gl_FragColor=n;float strokeDist=radius-c;float antialias=2.0*d;if(dist>strokeDist){gl_FragColor=o;}else if(dist>=strokeDist-antialias){float step=smoothstep(strokeDist-antialias,strokeDist,dist);gl_FragColor=mix(n,o,step);}} gl_FragColor.a=gl_FragColor.a*m;if(gl_FragColor.a<=0.0){discard;}}"
    }

    v(vi, ti);
    var wi = new vi;

    function xi() {
        this.b = "varying vec2 a;varying vec2 b;varying float c;varying float d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;void main(void){mat4 offsetMatrix=i*j;a=vec4(h*vec4(e,0.0,1.0)).xy;d=l;float lineWidth=k*l;c=lineWidth/2.0;if(lineWidth==0.0){lineWidth=2.0*l;}vec2 offset;float radius=g+3.0*l;if(f==0.0){offset=vec2(-1.0,1.0);}else if(f==1.0){offset=vec2(-1.0,-1.0);}else if(f==2.0){offset=vec2(1.0,-1.0);}else{offset=vec2(1.0,1.0);}gl_Position=h*vec4(e+offset*radius,0.0,1.0)+offsetMatrix*vec4(offset*lineWidth,0.0,0.0);b=vec4(h*vec4(e.x+g,e.y,0.0,1.0)).xy;if(distance(a,b)>20000.0){gl_Position=vec4(a,0.0,1.0);}}"
    }

    v(xi, ui);
    var yi = new xi;

    function zi(a, b) {
        this.B = a.getUniformLocation(b, "n");
        this.pa = a.getUniformLocation(b, "k");
        this.c = a.getUniformLocation(b, "j");
        this.i = a.getUniformLocation(b, "i");
        this.a = a.getUniformLocation(b, "m");
        this.qa = a.getUniformLocation(b, "l");
        this.f = a.getUniformLocation(b, "h");
        this.I = a.getUniformLocation(b, "p");
        this.S = a.getUniformLocation(b, "o");
        this.j = a.getAttribLocation(b, "f");
        this.b = a.getAttribLocation(b, "e");
        this.R = a.getAttribLocation(b, "g")
    };
    function Ai() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }

    function Bi(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[4] = b[2];
        a[5] = b[3];
        a[12] = b[4];
        a[13] = b[5];
        return a
    };
    function Ci(a, b) {
        this.origin = lb(b);
        this.Ib = Ih();
        this.Sa = Ih();
        this.Za = Ih();
        this.U = Ai();
        this.b = [];
        this.j = null;
        this.f = [];
        this.i = [];
        this.a = [];
        this.o = null;
        this.g = void 0
    }

    v(Ci, ci);
    Ci.prototype.Ma = function (a, b, c, d, e, f, g, h, l, m, n) {
        var p = a.b;
        if (this.g) {
            var q = p.isEnabled(p.STENCIL_TEST);
            var t = p.getParameter(p.STENCIL_FUNC);
            var u = p.getParameter(p.STENCIL_VALUE_MASK);
            var x = p.getParameter(p.STENCIL_REF);
            var B = p.getParameter(p.STENCIL_WRITEMASK);
            var z = p.getParameter(p.STENCIL_FAIL);
            var G = p.getParameter(p.STENCIL_PASS_DEPTH_PASS);
            var E = p.getParameter(p.STENCIL_PASS_DEPTH_FAIL);
            p.enable(p.STENCIL_TEST);
            p.clear(p.STENCIL_BUFFER_BIT);
            p.stencilMask(255);
            p.stencilFunc(p.ALWAYS, 1, 255);
            p.stencilOp(p.KEEP,
                p.KEEP, p.REPLACE);
            this.g.Ma(a, b, c, d, e, f, g, h, l, m, n);
            p.stencilMask(0);
            p.stencilFunc(p.NOTEQUAL, 1, 255)
        }
        Di(a, 34962, this.o);
        Di(a, 34963, this.j);
        f = this.Bf(p, a, e, f);
        var ia = Jh(this.Ib);
        Ph(ia, 2 / (c * e[0]), 2 / (c * e[1]));
        Oh(ia, -d);
        Qh(ia, -(b[0] - this.origin[0]), -(b[1] - this.origin[1]));
        b = Jh(this.Za);
        Ph(b, 2 / e[0], 2 / e[1]);
        e = Jh(this.Sa);
        d && Oh(e, -d);
        p.uniformMatrix4fv(f.f, !1, Bi(this.U, ia));
        p.uniformMatrix4fv(f.i, !1, Bi(this.U, b));
        p.uniformMatrix4fv(f.c, !1, Bi(this.U, e));
        p.uniform1f(f.a, g);
        if (l) {
            m ? a = this.Ge(p, a, h, l, n) : (p.clear(p.COLOR_BUFFER_BIT |
                p.DEPTH_BUFFER_BIT), this.Ud(p, a, h, !0), a = (a = l(null)) ? a : void 0);
            var T = a
        } else this.Ud(p, a, h, !1);
        this.Cf(p, f);
        this.g && (q || p.disable(p.STENCIL_TEST), p.clear(p.STENCIL_BUFFER_BIT), p.stencilFunc(t, x, u), p.stencilMask(B), p.stencilOp(z, E, G));
        return T
    };
    function Ei(a, b, c, d) {
        a.drawElements(4, d - c, b.g ? 5125 : 5123, c * (b.g ? 4 : 2))
    };
    var Fi = [0, 0, 0, 1], Gi = [], Hi = [0, 0, 0, 1];

    function Ii(a, b, c, d, e, f) {
        a = (c - a) * (f - b) - (e - a) * (d - b);
        return a <= Ji && a >= -Ji ? void 0 : 0 < a
    }

    var Ji = Number.EPSILON || 2.220446049250313E-16;

    function Ki(a) {
        this.b = void 0 !== a ? a : [];
        this.a = Li
    }

    var Li = 35044;

    function Mi(a, b) {
        Ci.call(this, 0, b);
        this.v = null;
        this.l = [];
        this.u = [];
        this.R = 0;
        this.c = {fillColor: null, strokeColor: null, lineDash: null, lineDashOffset: void 0, lineWidth: void 0, s: !1}
    }

    v(Mi, Ci);
    k = Mi.prototype;
    k.$b = function (a, b) {
        var c = a.vd(), d = a.ma();
        if (c) {
            this.f.push(this.b.length);
            this.i.push(b);
            this.c.s && (this.u.push(this.b.length), this.c.s = !1);
            this.R = c;
            a = a.ba();
            a = tf(a, 0, 2, d, -this.origin[0], -this.origin[1]);
            b = this.a.length;
            c = this.b.length;
            var e = b / 4, f;
            for (f = 0; 2 > f; f += d)this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 0, this.a[b++] = this.R, this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 1, this.a[b++] = this.R, this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 2, this.a[b++] = this.R, this.a[b++] = a[f], this.a[b++] =
                a[f + 1], this.a[b++] = 3, this.a[b++] = this.R, this.b[c++] = e, this.b[c++] = e + 1, this.b[c++] = e + 2, this.b[c++] = e + 2, this.b[c++] = e + 3, this.b[c++] = e, e += 4
        } else this.c.s && (this.l.pop(), this.l.length && (d = this.l[this.l.length - 1], this.c.fillColor = d[0], this.c.strokeColor = d[1], this.c.lineWidth = d[2], this.c.s = !1))
    };
    k.ab = function () {
        this.o = new Ki(this.a);
        this.j = new Ki(this.b);
        this.f.push(this.b.length);
        !this.u.length && 0 < this.l.length && (this.l = []);
        this.b = this.a = null
    };
    k.xb = function (a) {
        var b = this.o, c = this.j;
        return function () {
            Ni(a, b);
            Ni(a, c)
        }
    };
    k.Bf = function (a, b, c, d) {
        var e = Oi(b, wi, yi);
        if (this.v)var f = this.v; else this.v = f = new zi(a, e);
        b.Tc(e);
        a.enableVertexAttribArray(f.b);
        a.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0);
        a.enableVertexAttribArray(f.j);
        a.vertexAttribPointer(f.j, 1, 5126, !1, 16, 8);
        a.enableVertexAttribArray(f.R);
        a.vertexAttribPointer(f.R, 1, 5126, !1, 16, 12);
        a.uniform2fv(f.I, c);
        a.uniform1f(f.qa, d);
        return f
    };
    k.Cf = function (a, b) {
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.j);
        a.disableVertexAttribArray(b.R)
    };
    k.Ud = function (a, b, c) {
        if (ub(c)) {
            var d = this.f[this.f.length - 1];
            for (c = this.u.length - 1; 0 <= c; --c) {
                var e = this.u[c];
                var f = this.l[c];
                a.uniform4fv(this.v.B, f[0]);
                Pi(this, a, f[1], f[2]);
                Ei(a, b, e, d);
                d = e
            }
        } else {
            var g = this.f.length - 2;
            f = d = this.f[g + 1];
            for (e = this.u.length - 1; 0 <= e; --e) {
                var h = this.l[e];
                a.uniform4fv(this.v.B, h[0]);
                Pi(this, a, h[1], h[2]);
                for (h = this.u[e]; 0 <= g && this.f[g] >= h;) {
                    var l = this.f[g];
                    var m = this.i[g];
                    m = w(m).toString();
                    c[m] && (d !== f && Ei(a, b, d, f), f = l);
                    g--;
                    d = l
                }
                d !== f && Ei(a, b, d, f);
                d = f = h
            }
        }
    };
    k.Ge = function (a, b, c, d, e) {
        var f, g;
        var h = this.f.length - 2;
        var l = this.f[h + 1];
        for (f = this.u.length - 1; 0 <= f; --f) {
            var m = this.l[f];
            a.uniform4fv(this.v.B, m[0]);
            Pi(this, a, m[1], m[2]);
            for (g = this.u[f]; 0 <= h && this.f[h] >= g;) {
                m = this.f[h];
                var n = this.i[h];
                var p = w(n).toString();
                if (void 0 === c[p] && n.W() && (void 0 === e || ob(e, n.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), Ei(a, b, m, l), l = d(n)))return l;
                h--;
                l = m
            }
        }
    };
    function Pi(a, b, c, d) {
        b.uniform4fv(a.v.S, c);
        b.uniform1f(a.v.pa, d)
    }

    k.Na = function (a, b) {
        if (b) {
            var c = b.f;
            this.c.lineDash = c ? c : Gi;
            c = b.i;
            this.c.lineDashOffset = c ? c : 0;
            c = b.b;
            c instanceof CanvasGradient || c instanceof CanvasPattern ? c = Hi : c = gd(c).map(function (a, b) {
                    return 3 != b ? a / 255 : a
                }) || Hi;
            b = b.c;
            b = void 0 !== b ? b : 1
        } else c = [0, 0, 0, 0], b = 0;
        a = a ? a.b : [0, 0, 0, 0];
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Fi : a = gd(a).map(function (a, b) {
                return 3 != b ? a / 255 : a
            }) || Fi;
        this.c.strokeColor && ma(this.c.strokeColor, c) && this.c.fillColor && ma(this.c.fillColor, a) && this.c.lineWidth === b || (this.c.s =
            !0, this.c.fillColor = a, this.c.strokeColor = c, this.c.lineWidth = b, this.l.push([a, c, b]))
    };
    function Qi() {
        this.b = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }

    v(Qi, ti);
    var Ri = new Qi;

    function Si() {
        this.b = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.0,0.0);gl_Position=h*vec4(c,0.0,1.0)+offsets;a=d;b=f;}"
    }

    v(Si, ui);
    var Ti = new Si;

    function Ui(a, b) {
        this.c = a.getUniformLocation(b, "j");
        this.i = a.getUniformLocation(b, "i");
        this.a = a.getUniformLocation(b, "k");
        this.f = a.getUniformLocation(b, "h");
        this.v = a.getAttribLocation(b, "e");
        this.u = a.getAttribLocation(b, "f");
        this.b = a.getAttribLocation(b, "c");
        this.D = a.getAttribLocation(b, "g");
        this.C = a.getAttribLocation(b, "d")
    };
    function Vi(a, b) {
        this.j = a;
        this.b = b;
        this.a = {};
        this.c = {};
        this.f = {};
        this.o = this.v = this.i = this.l = null;
        (this.g = ha(ca, "OES_element_index_uint")) && b.getExtension("OES_element_index_uint");
        y(this.j, "webglcontextlost", this.kp, this);
        y(this.j, "webglcontextrestored", this.lp, this)
    }

    v(Vi, Oc);
    function Di(a, b, c) {
        var d = a.b, e = c.b, f = String(w(c));
        if (f in a.a) d.bindBuffer(b, a.a[f].buffer); else {
            var g = d.createBuffer();
            d.bindBuffer(b, g);
            var h;
            34962 == b ? h = new Float32Array(e) : 34963 == b && (h = a.g ? new Uint32Array(e) : new Uint16Array(e));
            d.bufferData(b, h, c.a);
            a.a[f] = {nc: c, buffer: g}
        }
    }

    function Ni(a, b) {
        var c = a.b;
        b = String(w(b));
        var d = a.a[b];
        c.isContextLost() || c.deleteBuffer(d.buffer);
        delete a.a[b]
    }

    k = Vi.prototype;
    k.ka = function () {
        Nc(this.j);
        var a = this.b;
        if (!a.isContextLost()) {
            for (var b in this.a)a.deleteBuffer(this.a[b].buffer);
            for (b in this.f)a.deleteProgram(this.f[b]);
            for (b in this.c)a.deleteShader(this.c[b]);
            a.deleteFramebuffer(this.i);
            a.deleteRenderbuffer(this.o);
            a.deleteTexture(this.v)
        }
    };
    k.jp = function () {
        return this.b
    };
    function Wi(a) {
        if (!a.i) {
            var b = a.b, c = b.createFramebuffer();
            b.bindFramebuffer(b.FRAMEBUFFER, c);
            var d = Xi(b, 1, 1), e = b.createRenderbuffer();
            b.bindRenderbuffer(b.RENDERBUFFER, e);
            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, 1, 1);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, d, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, e);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER, null);
            a.i = c;
            a.v = d;
            a.o = e
        }
        return a.i
    }

    function Yi(a, b) {
        var c = String(w(b));
        if (c in a.c)return a.c[c];
        var d = a.b, e = d.createShader(b.T());
        d.shaderSource(e, b.b);
        d.compileShader(e);
        return a.c[c] = e
    }

    function Oi(a, b, c) {
        var d = w(b) + "/" + w(c);
        if (d in a.f)return a.f[d];
        var e = a.b, f = e.createProgram();
        e.attachShader(f, Yi(a, b));
        e.attachShader(f, Yi(a, c));
        e.linkProgram(f);
        return a.f[d] = f
    }

    k.kp = function () {
        sb(this.a);
        sb(this.c);
        sb(this.f);
        this.o = this.v = this.i = this.l = null
    };
    k.lp = function () {
    };
    k.Tc = function (a) {
        if (a == this.l)return !1;
        this.b.useProgram(a);
        this.l = a;
        return !0
    };
    function Zi(a, b, c) {
        var d = a.createTexture();
        a.bindTexture(a.TEXTURE_2D, d);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
        void 0 !== b && a.texParameteri(3553, 10242, b);
        void 0 !== c && a.texParameteri(3553, 10243, c);
        return d
    }

    function Xi(a, b, c) {
        var d = Zi(a, void 0, void 0);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, b, c, 0, a.RGBA, a.UNSIGNED_BYTE, null);
        return d
    }

    function $i(a, b) {
        var c = Zi(a, 33071, 33071);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
        return c
    };
    function aj(a, b) {
        Ci.call(this, 0, b);
        this.B = this.D = void 0;
        this.v = [];
        this.u = [];
        this.qa = this.pa = this.height = void 0;
        this.Va = null;
        this.width = this.scale = this.rotation = this.rotateWithView = this.S = this.I = this.opacity = void 0
    }

    v(aj, Ci);
    k = aj.prototype;
    k.xb = function (a) {
        var b = this.o, c = this.j, d = this.jg(!0), e = a.b;
        return function () {
            if (!e.isContextLost()) {
                var f;
                var g = 0;
                for (f = d.length; g < f; ++g)e.deleteTexture(d[g])
            }
            Ni(a, b);
            Ni(a, c)
        }
    };
    function bj(a, b, c, d, e) {
        var f = a.D, g = a.B, h = a.height, l = a.pa, m = a.qa, n = a.opacity, p = a.I, q = a.S,
            t = a.rotateWithView ? 1 : 0, u = -a.rotation, x = a.scale, B = a.width, z = Math.cos(u);
        u = Math.sin(u);
        for (var G = a.b.length, E = a.a.length, ia, T, R, U,
                 ta; c < d; c += e)U = b[c] - a.origin[0], ta = b[c + 1] - a.origin[1], ia = E / 8, T = -x * f, R = -x * (h - g), a.a[E++] = U, a.a[E++] = ta, a.a[E++] = T * z - R * u, a.a[E++] = T * u + R * z, a.a[E++] = p / m, a.a[E++] = (q + h) / l, a.a[E++] = n, a.a[E++] = t, T = x * (B - f), R = -x * (h - g), a.a[E++] = U, a.a[E++] = ta, a.a[E++] = T * z - R * u, a.a[E++] = T * u + R * z, a.a[E++] = (p + B) / m, a.a[E++] =
            (q + h) / l, a.a[E++] = n, a.a[E++] = t, T = x * (B - f), R = x * g, a.a[E++] = U, a.a[E++] = ta, a.a[E++] = T * z - R * u, a.a[E++] = T * u + R * z, a.a[E++] = (p + B) / m, a.a[E++] = q / l, a.a[E++] = n, a.a[E++] = t, T = -x * f, R = x * g, a.a[E++] = U, a.a[E++] = ta, a.a[E++] = T * z - R * u, a.a[E++] = T * u + R * z, a.a[E++] = p / m, a.a[E++] = q / l, a.a[E++] = n, a.a[E++] = t, a.b[G++] = ia, a.b[G++] = ia + 1, a.b[G++] = ia + 2, a.b[G++] = ia, a.b[G++] = ia + 2, a.b[G++] = ia + 3
    }

    function cj(a, b, c, d) {
        var e, f = b.length;
        for (e = 0; e < f; ++e) {
            var g = b[e];
            var h = w(g).toString();
            h in c ? g = c[h] : (g = $i(d, g), c[h] = g);
            a[e] = g
        }
    }

    k.Bf = function (a, b) {
        var c = Oi(b, Ri, Ti);
        if (this.Va)var d = this.Va; else this.Va = d = new Ui(a, c);
        b.Tc(c);
        a.enableVertexAttribArray(d.b);
        a.vertexAttribPointer(d.b, 2, 5126, !1, 32, 0);
        a.enableVertexAttribArray(d.v);
        a.vertexAttribPointer(d.v, 2, 5126, !1, 32, 8);
        a.enableVertexAttribArray(d.C);
        a.vertexAttribPointer(d.C, 2, 5126, !1, 32, 16);
        a.enableVertexAttribArray(d.u);
        a.vertexAttribPointer(d.u, 1, 5126, !1, 32, 24);
        a.enableVertexAttribArray(d.D);
        a.vertexAttribPointer(d.D, 1, 5126, !1, 32, 28);
        return d
    };
    k.Cf = function (a, b) {
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.v);
        a.disableVertexAttribArray(b.C);
        a.disableVertexAttribArray(b.u);
        a.disableVertexAttribArray(b.D)
    };
    k.Ud = function (a, b, c, d) {
        var e = d ? this.dg() : this.jg();
        d = d ? this.u : this.v;
        if (ub(c)) {
            var f;
            c = 0;
            var g = e.length;
            for (f = 0; c < g; ++c) {
                a.bindTexture(3553, e[c]);
                var h = d[c];
                Ei(a, b, f, h);
                f = h
            }
        } else for (f = g = 0, h = e.length; f < h; ++f) {
            a.bindTexture(3553, e[f]);
            for (var l = 0 < f ? d[f - 1] : 0, m = d[f], n = l; g < this.f.length && this.f[g] <= m;) {
                var p = w(this.i[g]).toString();
                void 0 !== c[p] ? (n !== l && Ei(a, b, n, l), l = n = g === this.f.length - 1 ? m : this.f[g + 1]) : l = g === this.f.length - 1 ? m : this.f[g + 1];
                g++
            }
            n !== l && Ei(a, b, n, l)
        }
    };
    k.Ge = function (a, b, c, d, e) {
        var f, g, h = this.f.length - 1, l = this.dg();
        for (f = l.length - 1; 0 <= f; --f) {
            a.bindTexture(3553, l[f]);
            var m = 0 < f ? this.u[f - 1] : 0;
            for (g = this.u[f]; 0 <= h && this.f[h] >= m;) {
                var n = this.f[h];
                var p = this.i[h];
                var q = w(p).toString();
                if (void 0 === c[q] && p.W() && (void 0 === e || ob(e, p.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), Ei(a, b, n, g), g = d(p)))return g;
                g = n;
                h--
            }
        }
    };
    k.ab = function () {
        this.qa = this.pa = this.height = this.B = this.D = void 0;
        this.b = null;
        this.scale = this.rotation = this.rotateWithView = this.S = this.I = this.opacity = void 0;
        this.a = null;
        this.width = void 0
    };
    function dj(a, b) {
        aj.call(this, 0, b);
        this.l = [];
        this.c = [];
        this.C = [];
        this.R = []
    }

    v(dj, aj);
    k = dj.prototype;
    k.qc = function (a, b) {
        this.f.push(this.b.length);
        this.i.push(b);
        b = a.ba();
        bj(this, b, 0, b.length, a.ma())
    };
    k.sc = function (a, b) {
        this.f.push(this.b.length);
        this.i.push(b);
        b = a.ba();
        bj(this, b, 0, b.length, a.ma())
    };
    k.ab = function (a) {
        var b = a.b;
        this.v.push(this.b.length);
        this.u.push(this.b.length);
        this.o = new Ki(this.a);
        this.j = new Ki(this.b);
        var c = {};
        cj(this.C, this.l, c, b);
        cj(this.R, this.c, c, b);
        this.c = this.l = null;
        aj.prototype.ab.call(this, a)
    };
    k.Vb = function (a) {
        var b = a.Jc(), c = a.Y(1), d = a.Ie(), e = a.yg(1), f = a.i, g = a.Rc(), h = a.o, l = a.g, m = a.ic();
        a = a.a;
        if (this.l.length) {
            var n = this.l[this.l.length - 1];
            w(n) != w(c) && (this.v.push(this.b.length), this.l.push(c))
        } else this.l.push(c);
        this.c.length ? (n = this.c[this.c.length - 1], w(n) != w(e) && (this.u.push(this.b.length), this.c.push(e))) : this.c.push(e);
        this.D = b[0];
        this.B = b[1];
        this.height = m[1];
        this.pa = d[1];
        this.qa = d[0];
        this.opacity = f;
        this.I = g[0];
        this.S = g[1];
        this.rotation = l;
        this.rotateWithView = h;
        this.scale = a;
        this.width =
            m[0]
    };
    k.jg = function (a) {
        return a ? this.C.concat(this.R) : this.C
    };
    k.dg = function () {
        return this.R
    };
    function ej(a, b, c) {
        var d = b - c;
        return a[0] === a[d] && a[1] === a[d + 1] && 3 < (b - 0) / c ? !!yf(a, 0, b, c) : !1
    };
    function fj() {
        this.b = "precision mediump float;varying float a;varying vec2 b;varying float c;uniform float m;uniform vec4 n;uniform vec2 o;uniform float p;void main(void){if(a>0.0){vec2 windowCoords=vec2((b.x+1.0)/2.0*o.x*p,(b.y+1.0)/2.0*o.y*p);if(length(windowCoords-gl_FragCoord.xy)>c*p){discard;}} gl_FragColor=n;float alpha=n.a*m;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }

    v(fj, ti);
    var gj = new fj;

    function hj() {
        this.b = "varying float a;varying vec2 b;varying float c;attribute vec2 d;attribute vec2 e;attribute vec2 f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;bool nearlyEquals(in float value,in float ref){float epsilon=0.000000000001;return value>=ref-epsilon&&value<=ref+epsilon;}void alongNormal(out vec2 offset,in vec2 nextP,in float turnDir,in float direction){vec2 dirVect=nextP-e;vec2 normal=normalize(vec2(-turnDir*dirVect.y,turnDir*dirVect.x));offset=k/2.0*normal*direction;}void miterUp(out vec2 offset,out float round,in bool isRound,in float direction){float halfWidth=k/2.0;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=f-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;round=0.0;if(isRound){round=1.0;}else if(miterLength>l+k){offset=halfWidth*tmpNormal*direction;}} bool miterDown(out vec2 offset,in vec4 projPos,in mat4 offsetMatrix,in float direction){bool degenerate=false;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=d-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));vec2 longOffset,shortOffset,longVertex;vec4 shortProjVertex;float halfWidth=k/2.0;if(length(f-e)>length(d-e)){longOffset=tmpNormal*direction*halfWidth;shortOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=f;shortProjVertex=h*vec4(d,0.0,1.0);}else{shortOffset=tmpNormal*direction*halfWidth;longOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=d;shortProjVertex=h*vec4(f,0.0,1.0);}vec4 p1=h*vec4(longVertex,0.0,1.0)+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p2=projPos+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p3=shortProjVertex+offsetMatrix*vec4(-shortOffset,0.0,0.0);vec4 p4=shortProjVertex+offsetMatrix*vec4(shortOffset,0.0,0.0);float denom=(p4.y-p3.y)*(p2.x-p1.x)-(p4.x-p3.x)*(p2.y-p1.y);float firstU=((p4.x-p3.x)*(p1.y-p3.y)-(p4.y-p3.y)*(p1.x-p3.x))/denom;float secondU=((p2.x-p1.x)*(p1.y-p3.y)-(p2.y-p1.y)*(p1.x-p3.x))/denom;float epsilon=0.000000000001;if(firstU>epsilon&&firstU<1.0-epsilon&&secondU>epsilon&&secondU<1.0-epsilon){shortProjVertex.x=p1.x+firstU*(p2.x-p1.x);shortProjVertex.y=p1.y+firstU*(p2.y-p1.y);offset=shortProjVertex.xy;degenerate=true;}else{float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;}return degenerate;}void squareCap(out vec2 offset,out float round,in bool isRound,in vec2 nextP,in float turnDir,in float direction){round=0.0;vec2 dirVect=e-nextP;vec2 firstNormal=normalize(dirVect);vec2 secondNormal=vec2(turnDir*firstNormal.y*direction,-turnDir*firstNormal.x*direction);vec2 hypotenuse=normalize(firstNormal-secondNormal);vec2 normal=vec2(turnDir*hypotenuse.y*direction,-turnDir*hypotenuse.x*direction);float length=sqrt(c*c*2.0);offset=normal*length;if(isRound){round=1.0;}} void main(void){bool degenerate=false;float direction=float(sign(g));mat4 offsetMatrix=i*j;vec2 offset;vec4 projPos=h*vec4(e,0.0,1.0);bool round=nearlyEquals(mod(g,2.0),0.0);a=0.0;c=k/2.0;b=projPos.xy;if(nearlyEquals(mod(g,3.0),0.0)||nearlyEquals(mod(g,17.0),0.0)){alongNormal(offset,f,1.0,direction);}else if(nearlyEquals(mod(g,5.0),0.0)||nearlyEquals(mod(g,13.0),0.0)){alongNormal(offset,d,-1.0,direction);}else if(nearlyEquals(mod(g,23.0),0.0)){miterUp(offset,a,round,direction);}else if(nearlyEquals(mod(g,19.0),0.0)){degenerate=miterDown(offset,projPos,offsetMatrix,direction);}else if(nearlyEquals(mod(g,7.0),0.0)){squareCap(offset,a,round,f,1.0,direction);}else if(nearlyEquals(mod(g,11.0),0.0)){squareCap(offset,a,round,d,-1.0,direction);}if(!degenerate){vec4 offsets=offsetMatrix*vec4(offset,0.0,0.0);gl_Position=projPos+offsets;}else{gl_Position=vec4(offset,0.0,1.0);}}"
    }

    v(hj, ui);
    var ij = new hj;

    function jj(a, b) {
        this.B = a.getUniformLocation(b, "n");
        this.pa = a.getUniformLocation(b, "k");
        this.S = a.getUniformLocation(b, "l");
        this.c = a.getUniformLocation(b, "j");
        this.i = a.getUniformLocation(b, "i");
        this.a = a.getUniformLocation(b, "m");
        this.qa = a.getUniformLocation(b, "p");
        this.f = a.getUniformLocation(b, "h");
        this.I = a.getUniformLocation(b, "o");
        this.g = a.getAttribLocation(b, "g");
        this.l = a.getAttribLocation(b, "d");
        this.o = a.getAttribLocation(b, "f");
        this.b = a.getAttribLocation(b, "e")
    };
    function kj(a, b) {
        Ci.call(this, 0, b);
        this.v = null;
        this.u = [];
        this.l = [];
        this.c = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0,
            s: !1
        }
    }

    v(kj, Ci);
    function lj(a, b, c, d) {
        var e, f = a.a.length, g = a.b.length, h = "bevel" === a.c.lineJoin ? 0 : "miter" === a.c.lineJoin ? 1 : 2,
            l = "butt" === a.c.lineCap ? 0 : "square" === a.c.lineCap ? 1 : 2, m = ej(b, c, d), n = g, p = 1;
        for (e = 0; e < c; e += d) {
            var q = f / 7;
            var t = u;
            var u = x || [b[e], b[e + 1]];
            if (e)if (e === c - d) {
                if (m)var x = B; else t = t || [0, 0], f = mj(a, t, u, [0, 0], p * nj * (l || 1), f), f = mj(a, t, u, [0, 0], -p * nj * (l || 1), f), a.b[g++] = q, a.b[g++] = n - 1, a.b[g++] = n, a.b[g++] = n, a.b[g++] = q + 1, a.b[g++] = q, l && (f = mj(a, t, u, [0, 0], p * oj * l, f), f = mj(a, t, u, [0, 0], -p * oj * l, f), a.b[g++] = q + 2, a.b[g++] = q,
                    a.b[g++] = q + 1, a.b[g++] = q + 1, a.b[g++] = q + 3, a.b[g++] = q + 2);
                break
            } else x = [b[e + d], b[e + d + 1]]; else {
                x = [b[e + d], b[e + d + 1]];
                if (c - 0 === 2 * d && ma(u, x))break;
                if (m) {
                    t = [b[c - 2 * d], b[c - 2 * d + 1]];
                    var B = x
                } else {
                    l && (f = mj(a, [0, 0], u, x, p * pj * l, f), f = mj(a, [0, 0], u, x, -p * pj * l, f), a.b[g++] = q + 2, a.b[g++] = q, a.b[g++] = q + 1, a.b[g++] = q + 1, a.b[g++] = q + 3, a.b[g++] = q + 2);
                    f = mj(a, [0, 0], u, x, p * qj * (l || 1), f);
                    f = mj(a, [0, 0], u, x, -p * qj * (l || 1), f);
                    n = f / 7 - 1;
                    continue
                }
            }
            var z = Ii(t[0], t[1], u[0], u[1], x[0], x[1]) ? -1 : 1;
            f = mj(a, t, u, x, z * rj * (h || 1), f);
            f = mj(a, t, u, x, z * sj * (h || 1), f);
            f =
                mj(a, t, u, x, -z * tj * (h || 1), f);
            0 < e && (a.b[g++] = q, a.b[g++] = n - 1, a.b[g++] = n, a.b[g++] = q + 2, a.b[g++] = q, a.b[g++] = 0 < p * z ? n : n - 1);
            a.b[g++] = q;
            a.b[g++] = q + 2;
            a.b[g++] = q + 1;
            n = q + 2;
            p = z;
            h && (f = mj(a, t, u, x, z * uj * h, f), a.b[g++] = q + 1, a.b[g++] = q + 3, a.b[g++] = q)
        }
        m && (q = q || f / 7, z = Xf([t[0], t[1], u[0], u[1], x[0], x[1]], 0, 6, 2) ? 1 : -1, f = mj(a, t, u, x, z * rj * (h || 1), f), mj(a, t, u, x, -z * tj * (h || 1), f), a.b[g++] = q, a.b[g++] = n - 1, a.b[g++] = n, a.b[g++] = q + 1, a.b[g++] = q, a.b[g++] = 0 < p * z ? n : n - 1)
    }

    function mj(a, b, c, d, e, f) {
        a.a[f++] = b[0];
        a.a[f++] = b[1];
        a.a[f++] = c[0];
        a.a[f++] = c[1];
        a.a[f++] = d[0];
        a.a[f++] = d[1];
        a.a[f++] = e;
        return f
    }

    function vj(a, b, c, d) {
        c -= b;
        return c < 2 * d ? !1 : c === 2 * d ? !ma([a[b], a[b + 1]], [a[b + d], a[b + d + 1]]) : !0
    }

    k = kj.prototype;
    k.oc = function (a, b) {
        var c = a.ba();
        a = a.ma();
        vj(c, 0, c.length, a) && (c = tf(c, 0, c.length, a, -this.origin[0], -this.origin[1]), this.c.s && (this.l.push(this.b.length), this.c.s = !1), this.f.push(this.b.length), this.i.push(b), lj(this, c, c.length, a))
    };
    k.pc = function (a, b) {
        var c = this.b.length, d = a.sb();
        d.unshift(0);
        var e = a.ba();
        a = a.ma();
        var f;
        if (1 < d.length) {
            var g = 1;
            for (f = d.length; g < f; ++g)if (vj(e, d[g - 1], d[g], a)) {
                var h = tf(e, d[g - 1], d[g], a, -this.origin[0], -this.origin[1]);
                lj(this, h, h.length, a)
            }
        }
        this.b.length > c && (this.f.push(c), this.i.push(b), this.c.s && (this.l.push(c), this.c.s = !1))
    };
    function wj(a, b, c, d) {
        ej(b, b.length, d) || (b.push(b[0]), b.push(b[1]));
        lj(a, b, b.length, d);
        if (c.length) {
            var e;
            b = 0;
            for (e = c.length; b < e; ++b)ej(c[b], c[b].length, d) || (c[b].push(c[b][0]), c[b].push(c[b][1])), lj(a, c[b], c[b].length, d)
        }
    }

    function xj(a, b, c) {
        c = void 0 === c ? a.b.length : c;
        a.f.push(c);
        a.i.push(b);
        a.c.s && (a.l.push(c), a.c.s = !1)
    }

    k.ab = function () {
        this.o = new Ki(this.a);
        this.j = new Ki(this.b);
        this.f.push(this.b.length);
        !this.l.length && 0 < this.u.length && (this.u = []);
        this.b = this.a = null
    };
    k.xb = function (a) {
        var b = this.o, c = this.j;
        return function () {
            Ni(a, b);
            Ni(a, c)
        }
    };
    k.Bf = function (a, b, c, d) {
        var e = Oi(b, gj, ij);
        if (this.v)var f = this.v; else this.v = f = new jj(a, e);
        b.Tc(e);
        a.enableVertexAttribArray(f.l);
        a.vertexAttribPointer(f.l, 2, 5126, !1, 28, 0);
        a.enableVertexAttribArray(f.b);
        a.vertexAttribPointer(f.b, 2, 5126, !1, 28, 8);
        a.enableVertexAttribArray(f.o);
        a.vertexAttribPointer(f.o, 2, 5126, !1, 28, 16);
        a.enableVertexAttribArray(f.g);
        a.vertexAttribPointer(f.g, 1, 5126, !1, 28, 24);
        a.uniform2fv(f.I, c);
        a.uniform1f(f.qa, d);
        return f
    };
    k.Cf = function (a, b) {
        a.disableVertexAttribArray(b.l);
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.o);
        a.disableVertexAttribArray(b.g)
    };
    k.Ud = function (a, b, c, d) {
        var e = a.getParameter(a.DEPTH_FUNC), f = a.getParameter(a.DEPTH_WRITEMASK);
        d || (a.enable(a.DEPTH_TEST), a.depthMask(!0), a.depthFunc(a.NOTEQUAL));
        if (ub(c)) {
            var g = this.f[this.f.length - 1];
            for (c = this.l.length - 1; 0 <= c; --c) {
                var h = this.l[c];
                var l = this.u[c];
                yj(this, a, l[0], l[1], l[2]);
                Ei(a, b, h, g);
                a.clear(a.DEPTH_BUFFER_BIT);
                g = h
            }
        } else {
            var m = this.f.length - 2;
            l = g = this.f[m + 1];
            for (h = this.l.length - 1; 0 <= h; --h) {
                var n = this.u[h];
                yj(this, a, n[0], n[1], n[2]);
                for (n = this.l[h]; 0 <= m && this.f[m] >= n;) {
                    var p = this.f[m];
                    var q = this.i[m];
                    q = w(q).toString();
                    c[q] && (g !== l && (Ei(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT)), l = p);
                    m--;
                    g = p
                }
                g !== l && (Ei(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT));
                g = l = n
            }
        }
        d || (a.disable(a.DEPTH_TEST), a.clear(a.DEPTH_BUFFER_BIT), a.depthMask(f), a.depthFunc(e))
    };
    k.Ge = function (a, b, c, d, e) {
        var f, g;
        var h = this.f.length - 2;
        var l = this.f[h + 1];
        for (f = this.l.length - 1; 0 <= f; --f) {
            var m = this.u[f];
            yj(this, a, m[0], m[1], m[2]);
            for (g = this.l[f]; 0 <= h && this.f[h] >= g;) {
                m = this.f[h];
                var n = this.i[h];
                var p = w(n).toString();
                if (void 0 === c[p] && n.W() && (void 0 === e || ob(e, n.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), Ei(a, b, m, l), l = d(n)))return l;
                h--;
                l = m
            }
        }
    };
    function yj(a, b, c, d, e) {
        b.uniform4fv(a.v.B, c);
        b.uniform1f(a.v.pa, d);
        b.uniform1f(a.v.S, e)
    }

    k.Na = function (a, b) {
        a = b.g;
        this.c.lineCap = void 0 !== a ? a : "round";
        a = b.f;
        this.c.lineDash = a ? a : Gi;
        a = b.i;
        this.c.lineDashOffset = a ? a : 0;
        a = b.j;
        this.c.lineJoin = void 0 !== a ? a : "round";
        a = b.b;
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Hi : a = gd(a).map(function (a, b) {
                return 3 != b ? a / 255 : a
            }) || Hi;
        var c = b.c;
        c = void 0 !== c ? c : 1;
        b = b.l;
        b = void 0 !== b ? b : 10;
        this.c.strokeColor && ma(this.c.strokeColor, a) && this.c.lineWidth === c && this.c.miterLimit === b || (this.c.s = !0, this.c.strokeColor = a, this.c.lineWidth = c, this.c.miterLimit = b,
            this.u.push([a, c, b]))
    };
    var qj = 3, nj = 5, pj = 7, oj = 11, rj = 13, sj = 17, tj = 19, uj = 23;

    function zj() {
        this.b = "precision mediump float;uniform vec4 e;uniform float f;void main(void){gl_FragColor=e;float alpha=e.a*f;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }

    v(zj, ti);
    var Aj = new zj;

    function Bj() {
        this.b = "attribute vec2 a;uniform mat4 b;uniform mat4 c;uniform mat4 d;void main(void){gl_Position=b*vec4(a,0.0,1.0);}"
    }

    v(Bj, ui);
    var Cj = new Bj;

    function Dj(a, b) {
        this.B = a.getUniformLocation(b, "e");
        this.c = a.getUniformLocation(b, "d");
        this.i = a.getUniformLocation(b, "c");
        this.a = a.getUniformLocation(b, "f");
        this.f = a.getUniformLocation(b, "b");
        this.b = a.getAttribLocation(b, "a")
    };
    function Ej(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.g = a.lineCap;
        this.f = void 0 !== a.lineDash ? a.lineDash : null;
        this.i = a.lineDashOffset;
        this.j = a.lineJoin;
        this.l = a.miterLimit;
        this.c = a.width;
        this.a = void 0
    }

    k = Ej.prototype;
    k.clone = function () {
        var a = this.b;
        return new Ej({
            color: a && a.slice ? a.slice() : a || void 0,
            lineCap: this.g,
            lineDash: this.f ? this.f.slice() : void 0,
            lineDashOffset: this.i,
            lineJoin: this.j,
            miterLimit: this.l,
            width: this.c
        })
    };
    k.$o = function () {
        return this.b
    };
    k.gl = function () {
        return this.g
    };
    k.ap = function () {
        return this.f
    };
    k.hl = function () {
        return this.i
    };
    k.il = function () {
        return this.j
    };
    k.nl = function () {
        return this.l
    };
    k.bp = function () {
        return this.c
    };
    k.cp = function (a) {
        this.b = a;
        this.a = void 0
    };
    k.oq = function (a) {
        this.g = a;
        this.a = void 0
    };
    k.setLineDash = function (a) {
        this.f = a;
        this.a = void 0
    };
    k.pq = function (a) {
        this.i = a;
        this.a = void 0
    };
    k.qq = function (a) {
        this.j = a;
        this.a = void 0
    };
    k.tq = function (a) {
        this.l = a;
        this.a = void 0
    };
    k.xq = function (a) {
        this.c = a;
        this.a = void 0
    };
    function Fj(a) {
        this.b = this.a = this.f = void 0;
        this.i = void 0 === a ? !0 : a;
        this.c = 0
    }

    function Gj(a) {
        var b = a.b;
        if (b) {
            var c = b.next, d = b.yb;
            c && (c.yb = d);
            d && (d.next = c);
            a.b = c || d;
            a.f === a.a ? (a.b = void 0, a.f = void 0, a.a = void 0) : a.f === b ? a.f = a.b : a.a === b && (a.a = d ? a.b.yb : a.b);
            a.c--
        }
    }

    function Hj(a) {
        a.b = a.f;
        if (a.b)return a.b.data
    }

    function Ij(a) {
        if (a.b && a.b.next)return a.b = a.b.next, a.b.data
    }

    function Jj(a) {
        if (a.b && a.b.next)return a.b.next.data
    }

    function Kj(a) {
        if (a.b && a.b.yb)return a.b = a.b.yb, a.b.data
    }

    function Lj(a) {
        if (a.b && a.b.yb)return a.b.yb.data
    }

    function Mj(a) {
        if (a.b)return a.b.data
    }

    Fj.prototype.concat = function (a) {
        if (a.b) {
            if (this.b) {
                var b = this.b.next;
                this.b.next = a.f;
                a.f.yb = this.b;
                b.yb = a.a;
                a.a.next = b;
                this.c += a.c
            } else this.b = a.b, this.f = a.f, this.a = a.a, this.c = a.c;
            a.b = void 0;
            a.f = void 0;
            a.a = void 0;
            a.c = 0
        }
    };
    var Nj = {
        ge: function () {
        }
    };
    (function (a) {
        function b(a, e, f, g, h) {
            f = f || 0;
            g = g || a.length - 1;
            for (h = h || d; g > f;) {
                if (600 < g - f) {
                    var l = g - f + 1, m = e - f + 1, n = Math.log(l), p = .5 * Math.exp(2 * n / 3);
                    n = .5 * Math.sqrt(n * p * (l - p) / l) * (0 > m - l / 2 ? -1 : 1);
                    b(a, e, Math.max(f, Math.floor(e - m * p / l + n)), Math.min(g, Math.floor(e + (l - m) * p / l + n)), h)
                }
                l = a[e];
                m = f;
                p = g;
                c(a, f, e);
                for (0 < h(a[g], l) && c(a, f, g); m < p;) {
                    c(a, m, p);
                    m++;
                    for (p--; 0 > h(a[m], l);)m++;
                    for (; 0 < h(a[p], l);)p--
                }
                0 === h(a[f], l) ? c(a, f, p) : (p++, c(a, p, g));
                p <= e && (f = p + 1);
                e <= p && (g = p - 1)
            }
        }

        function c(a, b, c) {
            var d = a[b];
            a[b] = a[c];
            a[c] = d
        }

        function d(a,
                   b) {
            return a < b ? -1 : a > b ? 1 : 0
        }

        function e(a, b) {
            if (!(this instanceof e))return new e(a, b);
            this.Pf = Math.max(4, a || 9);
            this.kh = Math.max(2, Math.ceil(.4 * this.Pf));
            b && this.pk(b);
            this.clear()
        }

        function f(a, b) {
            g(a, 0, a.children.length, b, a)
        }

        function g(a, b, c, d, e) {
            e || (e = u(null));
            e.ca = Infinity;
            e.ea = Infinity;
            e.da = -Infinity;
            e.ha = -Infinity;
            for (var f; b < c; b++)f = a.children[b], h(e, a.lb ? d(f) : f);
            return e
        }

        function h(a, b) {
            a.ca = Math.min(a.ca, b.ca);
            a.ea = Math.min(a.ea, b.ea);
            a.da = Math.max(a.da, b.da);
            a.ha = Math.max(a.ha, b.ha)
        }

        function l(a,
                   b) {
            return a.ca - b.ca
        }

        function m(a, b) {
            return a.ea - b.ea
        }

        function n(a) {
            return (a.da - a.ca) * (a.ha - a.ea)
        }

        function p(a) {
            return a.da - a.ca + (a.ha - a.ea)
        }

        function q(a, b) {
            return a.ca <= b.ca && a.ea <= b.ea && b.da <= a.da && b.ha <= a.ha
        }

        function t(a, b) {
            return b.ca <= a.da && b.ea <= a.ha && b.da >= a.ca && b.ha >= a.ea
        }

        function u(a) {
            return {children: a, height: 1, lb: !0, ca: Infinity, ea: Infinity, da: -Infinity, ha: -Infinity}
        }

        function x(a, b, c, d, e) {
            for (var f = [b, c],
                     g; f.length;)c = f.pop(), b = f.pop(), c - b <= d || (g = b + Math.ceil((c - b) / d / 2) * d, B(a, g, b, c, e), f.push(b,
                g, g, c))
        }

        var B = b;
        e.prototype = {
            all: function () {
                return this.fh(this.data, [])
            }, search: function (a) {
                var b = this.data, c = [], d = this.Ab;
                if (!t(a, b))return c;
                for (var e = [], f, g, h, l; b;) {
                    f = 0;
                    for (g = b.children.length; f < g; f++)h = b.children[f], l = b.lb ? d(h) : h, t(a, l) && (b.lb ? c.push(h) : q(a, l) ? this.fh(h, c) : e.push(h));
                    b = e.pop()
                }
                return c
            }, load: function (a) {
                if (!a || !a.length)return this;
                if (a.length < this.kh) {
                    for (var b = 0, c = a.length; b < c; b++)this.Ga(a[b]);
                    return this
                }
                a = this.hh(a.slice(), 0, a.length - 1, 0);
                this.data.children.length ? this.data.height ===
                a.height ? this.mh(this.data, a) : (this.data.height < a.height && (b = this.data, this.data = a, a = b), this.jh(a, this.data.height - a.height - 1, !0)) : this.data = a;
                return this
            }, Ga: function (a) {
                a && this.jh(a, this.data.height - 1);
                return this
            }, clear: function () {
                this.data = u([]);
                return this
            }, remove: function (a, b) {
                if (!a)return this;
                for (var c = this.data, d = this.Ab(a), e = [], f = [], g, h, l, m; c || e.length;) {
                    c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), m = !0);
                    if (c.lb) {
                        a:{
                            l = a;
                            var n = c.children, p = b;
                            if (p) {
                                for (var t = 0; t < n.length; t++)if (p(l, n[t])) {
                                    l = t;
                                    break a
                                }
                                l = -1
                            } else l = n.indexOf(l)
                        }
                        if (-1 !== l) {
                            c.children.splice(l, 1);
                            e.push(c);
                            this.mk(e);
                            break
                        }
                    }
                    m || c.lb || !q(c, d) ? h ? (g++, c = h.children[g], m = !1) : c = null : (e.push(c), f.push(g), g = 0, h = c, c = c.children[0])
                }
                return this
            }, Ab: function (a) {
                return a
            }, Sf: l, Tf: m, toJSON: function () {
                return this.data
            }, fh: function (a, b) {
                for (var c = []; a;)a.lb ? b.push.apply(b, a.children) : c.push.apply(c, a.children), a = c.pop();
                return b
            }, hh: function (a, b, c, d) {
                var e = c - b + 1, g = this.Pf;
                if (e <= g) {
                    var h = u(a.slice(b, c + 1));
                    f(h, this.Ab);
                    return h
                }
                d || (d = Math.ceil(Math.log(e) /
                    Math.log(g)), g = Math.ceil(e / Math.pow(g, d - 1)));
                h = u([]);
                h.lb = !1;
                h.height = d;
                e = Math.ceil(e / g);
                g = e * Math.ceil(Math.sqrt(g));
                var l;
                for (x(a, b, c, g, this.Sf); b <= c; b += g) {
                    var m = Math.min(b + g - 1, c);
                    x(a, b, m, e, this.Tf);
                    for (l = b; l <= m; l += e) {
                        var n = Math.min(l + e - 1, m);
                        h.children.push(this.hh(a, l, n, d - 1))
                    }
                }
                f(h, this.Ab);
                return h
            }, lk: function (a, b, c, d) {
                for (var e, f, g, h, l, m, p, q; ;) {
                    d.push(b);
                    if (b.lb || d.length - 1 === c)break;
                    p = q = Infinity;
                    e = 0;
                    for (f = b.children.length; e < f; e++)g = b.children[e], l = n(g), m = (Math.max(g.da, a.da) - Math.min(g.ca, a.ca)) *
                        (Math.max(g.ha, a.ha) - Math.min(g.ea, a.ea)) - l, m < q ? (q = m, p = l < p ? l : p, h = g) : m === q && l < p && (p = l, h = g);
                    b = h || b.children[0]
                }
                return b
            }, jh: function (a, b, c) {
                var d = this.Ab;
                c = c ? a : d(a);
                d = [];
                var e = this.lk(c, this.data, b, d);
                e.children.push(a);
                for (h(e, c); 0 <= b;)if (d[b].children.length > this.Pf) this.uk(d, b), b--; else break;
                this.ik(c, d, b)
            }, uk: function (a, b) {
                var c = a[b], d = c.children.length, e = this.kh;
                this.jk(c, e, d);
                d = this.kk(c, e, d);
                d = u(c.children.splice(d, c.children.length - d));
                d.height = c.height;
                d.lb = c.lb;
                f(c, this.Ab);
                f(d, this.Ab);
                b ? a[b - 1].children.push(d) : this.mh(c, d)
            }, mh: function (a, b) {
                this.data = u([a, b]);
                this.data.height = a.height + 1;
                this.data.lb = !1;
                f(this.data, this.Ab)
            }, kk: function (a, b, c) {
                var d, e;
                var f = e = Infinity;
                for (d = b; d <= c - b; d++) {
                    var h = g(a, 0, d, this.Ab);
                    var l = g(a, d, c, this.Ab);
                    var m = Math.max(0, Math.min(h.da, l.da) - Math.max(h.ca, l.ca)) * Math.max(0, Math.min(h.ha, l.ha) - Math.max(h.ea, l.ea));
                    h = n(h) + n(l);
                    if (m < f) {
                        f = m;
                        var p = d;
                        e = h < e ? h : e
                    } else m === f && h < e && (e = h, p = d)
                }
                return p
            }, jk: function (a, b, c) {
                var d = a.lb ? this.Sf : l, e = a.lb ? this.Tf : m, f = this.gh(a,
                    b, c, d);
                b = this.gh(a, b, c, e);
                f < b && a.children.sort(d)
            }, gh: function (a, b, c, d) {
                a.children.sort(d);
                d = this.Ab;
                var e = g(a, 0, b, d), f = g(a, c - b, c, d), l = p(e) + p(f), m;
                for (m = b; m < c - b; m++) {
                    var n = a.children[m];
                    h(e, a.lb ? d(n) : n);
                    l += p(e)
                }
                for (m = c - b - 1; m >= b; m--)n = a.children[m], h(f, a.lb ? d(n) : n), l += p(f);
                return l
            }, ik: function (a, b, c) {
                for (; 0 <= c; c--)h(b[c], a)
            }, mk: function (a) {
                for (var b = a.length - 1,
                         c; 0 <= b; b--)0 === a[b].children.length ? 0 < b ? (c = a[b - 1].children, c.splice(c.indexOf(a[b]), 1)) : this.clear() : f(a[b], this.Ab)
            }, pk: function (a) {
                var b =
                    ["return a", " - b", ";"];
                this.Sf = new Function("a", "b", b.join(a[0]));
                this.Tf = new Function("a", "b", b.join(a[1]));
                this.Ab = new Function("a", "return {minX: a" + a[0] + ", minY: a" + a[1] + ", maxX: a" + a[2] + ", maxY: a" + a[3] + "};")
            }
        };
        a["default"] = e
    })(Nj.ge = Nj.ge || {});
    Nj.ge = Nj.ge.default;
    function Oj(a) {
        this.a = Nj.ge(a);
        this.b = {}
    }

    k = Oj.prototype;
    k.Ga = function (a, b) {
        a = {ca: a[0], ea: a[1], da: a[2], ha: a[3], value: b};
        this.a.Ga(a);
        this.b[w(b)] = a
    };
    k.load = function (a, b) {
        for (var c = Array(b.length), d = 0, e = b.length; d < e; d++) {
            var f = a[d], g = b[d];
            f = {ca: f[0], ea: f[1], da: f[2], ha: f[3], value: g};
            c[d] = f;
            this.b[w(g)] = f
        }
        this.a.load(c)
    };
    k.remove = function (a) {
        a = w(a);
        var b = this.b[a];
        delete this.b[a];
        return null !== this.a.remove(b)
    };
    function Pj(a, b, c) {
        var d = a.b[w(c)];
        ab([d.ca, d.ea, d.da, d.ha], b) || (a.remove(c), a.Ga(b, c))
    }

    function Qj(a) {
        return a.a.all().map(function (a) {
            return a.value
        })
    }

    function Rj(a, b) {
        return a.a.search({ca: b[0], ea: b[1], da: b[2], ha: b[3]}).map(function (a) {
            return a.value
        })
    }

    k.forEach = function (a, b) {
        return Sj(Qj(this), a, b)
    };
    function Tj(a, b, c, d) {
        return Sj(Rj(a, b), c, d)
    }

    function Sj(a, b, c) {
        for (var d, e = 0, f = a.length; e < f && !(d = b.call(c, a[e])); e++);
        return d
    }

    k.clear = function () {
        this.a.clear();
        this.b = {}
    };
    k.G = function (a) {
        var b = this.a.data;
        return Va(b.ca, b.ea, b.da, b.ha, a)
    };
    k.concat = function (a) {
        this.a.load(a.a.all());
        for (var b in a.b)this.b[b | 0] = a.b[b | 0]
    };
    function Uj(a, b) {
        Ci.call(this, 0, b);
        this.g = new kj(0, b);
        this.v = null;
        this.u = [];
        this.c = [];
        this.l = {fillColor: null, s: !1}
    }

    v(Uj, Ci);
    function Vj(a, b, c, d) {
        var e = new Fj, f = new Oj;
        Wj(a, b, d, e, f, !0);
        b = Xj(e);
        if (c.length) {
            var g, h = [];
            var l = 0;
            for (g = c.length; l < g; ++l) {
                var m = {list: new Fj, wc: void 0, Ug: new Oj};
                h.push(m);
                Wj(a, c[l], d, m.list, m.Ug, !1);
                Yj(m.list, m.Ug, !0);
                m.wc = Xj(m.list)
            }
            h.sort(function (a, b) {
                return b.wc[0] === a.wc[0] ? a.wc[1] - b.wc[1] : b.wc[0] - a.wc[0]
            });
            for (l = 0; l < h.length; ++l) {
                c = h[l].list;
                g = d = Hj(c);
                do {
                    if (Zj(g, f).length) {
                        var n = !0;
                        break
                    }
                    g = Ij(c)
                } while (d !== g);
                !n && ak(c, h[l].wc[0], e, b[0], f) && (f.concat(h[l].Ug), Yj(e, f, !1))
            }
        } else Yj(e, f, !1);
        bk(a,
            e, f)
    }

    function Wj(a, b, c, d, e, f) {
        var g, h = a.a.length / 2, l = [], m = [];
        if (f === Xf(b, 0, b.length, c)) {
            var n = f = ck(a, b[0], b[1], h++);
            var p = c;
            for (g = b.length; p < g; p += c) {
                var q = ck(a, b[p], b[p + 1], h++);
                m.push(dk(n, q, d));
                l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]);
                n = q
            }
        } else for (p = b.length - c, n = f = ck(a, b[p], b[p + 1], h++), p -= c, g = 0; p >= g; p -= c)q = ck(a, b[p], b[p + 1], h++), m.push(dk(n, q, d)), l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]), n = q;
        m.push(dk(q, f, d));
        l.push([Math.min(n.x, q.x),
            Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]);
        e.load(l, m)
    }

    function Xj(a) {
        var b = Hj(a), c = b, d = [c.Z.x, c.Z.y];
        do c = Ij(a), c.Z.x > d[0] && (d = [c.Z.x, c.Z.y]); while (c !== b);
        return d
    }

    function Yj(a, b, c) {
        var d = Hj(a), e = d, f = Ij(a), g = !1;
        do {
            var h = c ? Ii(f.X.x, f.X.y, e.X.x, e.X.y, e.Z.x, e.Z.y) : Ii(e.Z.x, e.Z.y, e.X.x, e.X.y, f.X.x, f.X.y);
            void 0 === h ? (ek(e, f, a, b), g = !0, f === d && (d = Jj(a)), f = e, Kj(a)) : e.X.Eb !== h && (e.X.Eb = h, g = !0);
            e = f;
            f = Ij(a)
        } while (e !== d);
        return g
    }

    function ak(a, b, c, d, e) {
        for (var f = Hj(a); f.X.x !== b;)f = Ij(a);
        b = f.X;
        d = {x: d, y: b.y, kb: -1};
        var g = Infinity, h;
        var l = Zj({Z: b, X: d}, e, !0);
        var m = 0;
        for (h = l.length; m < h; ++m) {
            var n = l[m], p = fk(b, d, n.Z, n.X, !0), q = Math.abs(b.x - p[0]);
            if (q < g && void 0 !== Ii(b.x, b.y, n.Z.x, n.Z.y, n.X.x, n.X.y)) {
                g = q;
                var t = {x: p[0], y: p[1], kb: -1};
                f = n
            }
        }
        if (Infinity === g)return !1;
        l = f.X;
        if (0 < g && (f = gk(b, t, f.X, e), f.length))for (t = Infinity, m = 0, h = f.length; m < h; ++m)if (g = f[m], n = Math.atan2(b.y - g.y, d.x - g.x), n < t || n === t && g.x < l.x) t = n, l = g;
        for (f = Hj(c); f.X.x !== l.x || f.X.y !==
        l.y;)f = Ij(c);
        d = {x: b.x, y: b.y, kb: b.kb, Eb: void 0};
        m = {x: f.X.x, y: f.X.y, kb: f.X.kb, Eb: void 0};
        Jj(a).Z = d;
        dk(b, f.X, a, e);
        dk(m, d, a, e);
        f.X = m;
        a.i && a.b && (a.f = a.b, a.a = a.b.yb);
        c.concat(a);
        return !0
    }

    function bk(a, b, c) {
        for (var d = !1, e = hk(b, c); 3 < b.c;)if (e) {
            if (!ik(a, b, c, e, d) && !Yj(b, c, d) && !jk(a, b, c, !0))break
        } else if (!ik(a, b, c, e, d) && !Yj(b, c, d) && !jk(a, b, c))if (e = hk(b, c)) {
            d = b;
            var f = 2 * d.c, g = Array(f), h = Hj(d), l = h, m = 0;
            do g[m++] = l.Z.x, g[m++] = l.Z.y, l = Ij(d); while (l !== h);
            d = !Xf(g, 0, f, 2);
            Yj(b, c, d)
        } else {
            e = a;
            d = b;
            f = g = Hj(d);
            do {
                h = Zj(f, c);
                if (h.length) {
                    g = h[0];
                    h = fk(f.Z, f.X, g.Z, g.X);
                    h = ck(e, h[0], h[1], e.a.length / 2);
                    l = new Fj;
                    m = new Oj;
                    dk(h, f.X, l, m);
                    f.X = h;
                    Pj(c, [Math.min(f.Z.x, h.x), Math.min(f.Z.y, h.y), Math.max(f.Z.x, h.x), Math.max(f.Z.y,
                        h.y)], f);
                    for (f = Ij(d); f !== g;)dk(f.Z, f.X, l, m), c.remove(f), Gj(d), f = Mj(d);
                    dk(g.Z, h, l, m);
                    g.Z = h;
                    Pj(c, [Math.min(g.X.x, h.x), Math.min(g.X.y, h.y), Math.max(g.X.x, h.x), Math.max(g.X.y, h.y)], g);
                    Yj(d, c, !1);
                    bk(e, d, c);
                    Yj(l, m, !1);
                    bk(e, l, m);
                    break
                }
                f = Ij(d)
            } while (f !== g);
            break
        }
        3 === b.c && (e = a.b.length, a.b[e++] = Lj(b).Z.kb, a.b[e++] = Mj(b).Z.kb, a.b[e++] = Jj(b).Z.kb)
    }

    function ik(a, b, c, d, e) {
        var f = a.b.length, g = Hj(b), h = Lj(b), l = g, m = Ij(b), n = Jj(b), p = !1;
        do {
            var q = l.Z;
            var t = l.X;
            var u = m.X;
            if (!1 === t.Eb) {
                var x = d ? !gk(q, t, u, c, !0).length : e ? kk(n.X, u, t, q, h.Z) : kk(h.Z, q, t, u, n.X);
                !d && Zj({
                    Z: q,
                    X: u
                }, c).length || !x || !d && !1 !== q.Eb && !1 !== u.Eb && Xf([h.Z.x, h.Z.y, q.x, q.y, t.x, t.y, u.x, u.y, n.X.x, n.X.y], 0, 10, 2) !== !e || (a.b[f++] = q.kb, a.b[f++] = t.kb, a.b[f++] = u.kb, ek(l, m, b, c), m === g && (g = n), p = !0)
            }
            h = Lj(b);
            l = Mj(b);
            m = Ij(b);
            n = Jj(b)
        } while (l !== g && 3 < b.c);
        return p
    }

    function jk(a, b, c, d) {
        var e = Hj(b);
        Ij(b);
        var f = e, g = Ij(b), h = !1;
        do {
            var l = fk(f.Z, f.X, g.Z, g.X, d);
            if (l) {
                h = a.b.length;
                var m = a.a.length / 2, n = Kj(b);
                Gj(b);
                c.remove(n);
                var p = n === e;
                d ? (l[0] === f.Z.x && l[1] === f.Z.y ? (Kj(b), l = f.Z, g.Z = l, c.remove(f), p = p || f === e) : (l = g.X, f.X = l, c.remove(g), p = p || g === e), Gj(b)) : (l = ck(a, l[0], l[1], m), f.X = l, g.Z = l, Pj(c, [Math.min(f.Z.x, f.X.x), Math.min(f.Z.y, f.X.y), Math.max(f.Z.x, f.X.x), Math.max(f.Z.y, f.X.y)], f), Pj(c, [Math.min(g.Z.x, g.X.x), Math.min(g.Z.y, g.X.y), Math.max(g.Z.x, g.X.x), Math.max(g.Z.y,
                    g.X.y)], g));
                a.b[h++] = n.Z.kb;
                a.b[h++] = n.X.kb;
                a.b[h++] = l.kb;
                h = !0;
                if (p)break
            }
            f = Lj(b);
            g = Ij(b)
        } while (f !== e);
        return h
    }

    function hk(a, b) {
        var c = Hj(a), d = c;
        do {
            if (Zj(d, b).length)return !1;
            d = Ij(a)
        } while (d !== c);
        return !0
    }

    function ck(a, b, c, d) {
        var e = a.a.length;
        a.a[e++] = b;
        a.a[e++] = c;
        return {x: b, y: c, kb: d, Eb: void 0}
    }

    function dk(a, b, c, d) {
        var e = {Z: a, X: b}, f = {yb: void 0, next: void 0, data: e}, g = c.b;
        if (g) {
            var h = g.next;
            f.yb = g;
            f.next = h;
            g.next = f;
            h && (h.yb = f);
            g === c.a && (c.a = f)
        } else c.f = f, c.a = f, c.i && (f.next = f, f.yb = f);
        c.b = f;
        c.c++;
        d && d.Ga([Math.min(a.x, b.x), Math.min(a.y, b.y), Math.max(a.x, b.x), Math.max(a.y, b.y)], e);
        return e
    }

    function ek(a, b, c, d) {
        Mj(c) === b && (Gj(c), a.X = b.X, d.remove(b), Pj(d, [Math.min(a.Z.x, a.X.x), Math.min(a.Z.y, a.X.y), Math.max(a.Z.x, a.X.x), Math.max(a.Z.y, a.X.y)], a))
    }

    function gk(a, b, c, d, e) {
        var f, g, h = [],
            l = Rj(d, [Math.min(a.x, b.x, c.x), Math.min(a.y, b.y, c.y), Math.max(a.x, b.x, c.x), Math.max(a.y, b.y, c.y)]);
        d = 0;
        for (f = l.length; d < f; ++d)for (g in l[d]) {
            var m = l[d][g];
            "object" !== typeof m || e && !m.Eb || m.x === a.x && m.y === a.y || m.x === b.x && m.y === b.y || m.x === c.x && m.y === c.y || -1 !== h.indexOf(m) || !Rf([a.x, a.y, b.x, b.y, c.x, c.y], 0, 6, 2, m.x, m.y) || h.push(m)
        }
        return h
    }

    function Zj(a, b, c) {
        var d = a.Z, e = a.X;
        b = Rj(b, [Math.min(d.x, e.x), Math.min(d.y, e.y), Math.max(d.x, e.x), Math.max(d.y, e.y)]);
        var f = [], g;
        var h = 0;
        for (g = b.length; h < g; ++h) {
            var l = b[h];
            a !== l && (c || l.Z !== e || l.X !== d) && fk(d, e, l.Z, l.X, c) && f.push(l)
        }
        return f
    }

    function fk(a, b, c, d, e) {
        var f = (d.y - c.y) * (b.x - a.x) - (d.x - c.x) * (b.y - a.y);
        if (f && (d = ((d.x - c.x) * (a.y - c.y) - (d.y - c.y) * (a.x - c.x)) / f, c = ((b.x - a.x) * (a.y - c.y) - (b.y - a.y) * (a.x - c.x)) / f, !e && d > Ji && d < 1 - Ji && c > Ji && c < 1 - Ji || e && 0 <= d && 1 >= d && 0 <= c && 1 >= c))return [a.x + d * (b.x - a.x), a.y + d * (b.y - a.y)]
    }

    function kk(a, b, c, d, e) {
        if (void 0 === b.Eb || void 0 === d.Eb)return !1;
        var f = (c.x - d.x) * (b.y - d.y) > (c.y - d.y) * (b.x - d.x);
        e = (e.x - d.x) * (b.y - d.y) < (e.y - d.y) * (b.x - d.x);
        a = (a.x - b.x) * (d.y - b.y) > (a.y - b.y) * (d.x - b.x);
        c = (c.x - b.x) * (d.y - b.y) < (c.y - b.y) * (d.x - b.x);
        b = b.Eb ? c || a : c && a;
        return (d.Eb ? e || f : e && f) && b
    }

    k = Uj.prototype;
    k.rc = function (a, b) {
        var c = a.c, d = a.ma(), e = this.b.length, f = this.g.b.length;
        a = a.ba();
        var g, h, l;
        var m = h = 0;
        for (g = c.length; m < g; ++m) {
            var n = c[m];
            if (0 < n.length) {
                var p = tf(a, h, n[0], d, -this.origin[0], -this.origin[1]);
                if (p.length) {
                    var q = [];
                    h = 1;
                    for (l = n.length; h < l; ++h)if (n[h] !== n[h - 1]) {
                        var t = tf(a, n[h - 1], n[h], d, -this.origin[0], -this.origin[1]);
                        q.push(t)
                    }
                    wj(this.g, p, q, d);
                    Vj(this, p, q, d)
                }
            }
            h = n[n.length - 1]
        }
        this.b.length > e && (this.f.push(e), this.i.push(b), this.l.s && (this.c.push(e), this.l.s = !1));
        this.g.b.length > f && xj(this.g,
            b, f)
    };
    k.tc = function (a, b) {
        var c = a.sb(), d = a.ma();
        if (0 < c.length) {
            a = a.ba().map(Number);
            var e = tf(a, 0, c[0], d, -this.origin[0], -this.origin[1]);
            if (e.length) {
                var f = [], g;
                var h = 1;
                for (g = c.length; h < g; ++h)if (c[h] !== c[h - 1]) {
                    var l = tf(a, c[h - 1], c[h], d, -this.origin[0], -this.origin[1]);
                    f.push(l)
                }
                this.f.push(this.b.length);
                this.i.push(b);
                this.l.s && (this.c.push(this.b.length), this.l.s = !1);
                xj(this.g, b);
                wj(this.g, e, f, d);
                Vj(this, e, f, d)
            }
        }
    };
    k.ab = function (a) {
        this.o = new Ki(this.a);
        this.j = new Ki(this.b);
        this.f.push(this.b.length);
        this.g.ab(a);
        !this.c.length && 0 < this.u.length && (this.u = []);
        this.b = this.a = null
    };
    k.xb = function (a) {
        var b = this.o, c = this.j, d = this.g.xb(a);
        return function () {
            Ni(a, b);
            Ni(a, c);
            d()
        }
    };
    k.Bf = function (a, b) {
        var c = Oi(b, Aj, Cj);
        if (this.v)var d = this.v; else this.v = d = new Dj(a, c);
        b.Tc(c);
        a.enableVertexAttribArray(d.b);
        a.vertexAttribPointer(d.b, 2, 5126, !1, 8, 0);
        return d
    };
    k.Cf = function (a, b) {
        a.disableVertexAttribArray(b.b)
    };
    k.Ud = function (a, b, c, d) {
        var e = a.getParameter(a.DEPTH_FUNC), f = a.getParameter(a.DEPTH_WRITEMASK);
        d || (a.enable(a.DEPTH_TEST), a.depthMask(!0), a.depthFunc(a.NOTEQUAL));
        if (ub(c)) {
            var g = this.f[this.f.length - 1];
            for (c = this.c.length - 1; 0 <= c; --c) {
                var h = this.c[c];
                var l = this.u[c];
                a.uniform4fv(this.v.B, l);
                Ei(a, b, h, g);
                g = h
            }
        } else {
            var m = this.f.length - 2;
            l = g = this.f[m + 1];
            for (h = this.c.length - 1; 0 <= h; --h) {
                var n = this.u[h];
                a.uniform4fv(this.v.B, n);
                for (n = this.c[h]; 0 <= m && this.f[m] >= n;) {
                    var p = this.f[m];
                    var q = this.i[m];
                    q = w(q).toString();
                    c[q] && (g !== l && (Ei(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT)), l = p);
                    m--;
                    g = p
                }
                g !== l && (Ei(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT));
                g = l = n
            }
        }
        d || (a.disable(a.DEPTH_TEST), a.clear(a.DEPTH_BUFFER_BIT), a.depthMask(f), a.depthFunc(e))
    };
    k.Ge = function (a, b, c, d, e) {
        var f, g;
        var h = this.f.length - 2;
        var l = this.f[h + 1];
        for (f = this.c.length - 1; 0 <= f; --f) {
            var m = this.u[f];
            a.uniform4fv(this.v.B, m);
            for (g = this.c[f]; 0 <= h && this.f[h] >= g;) {
                m = this.f[h];
                var n = this.i[h];
                var p = w(n).toString();
                if (void 0 === c[p] && n.W() && (void 0 === e || ob(e, n.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), Ei(a, b, m, l), l = d(n)))return l;
                h--;
                l = m
            }
        }
    };
    k.Na = function (a, b) {
        a = a ? a.b : [0, 0, 0, 0];
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Fi : a = gd(a).map(function (a, b) {
                return 3 != b ? a / 255 : a
            }) || Fi;
        this.l.fillColor && ma(a, this.l.fillColor) || (this.l.fillColor = a, this.l.s = !0, this.u.push(a));
        b ? this.g.Na(null, b) : this.g.Na(null, new Ej({color: [0, 0, 0, 0], lineWidth: 0}))
    };
    function lk(a, b) {
        this.b = b;
        this.a = [{x: 0, y: 0, width: a, height: a}];
        this.c = {};
        this.f = ld(a, a);
        this.i = this.f.canvas
    }

    lk.prototype.get = function (a) {
        return this.c[a] || null
    };
    lk.prototype.add = function (a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = this.a.length; g < f; ++g) {
            var h = this.a[g];
            if (h.width >= b + this.b && h.height >= c + this.b)return f = {
                offsetX: h.x + this.b,
                offsetY: h.y + this.b,
                image: this.i
            }, this.c[a] = f, d.call(e, this.f, h.x + this.b, h.y + this.b), a = g, b += this.b, d = c + this.b, h.width - b > h.height - d ? (c = {
                x: h.x + b,
                y: h.y,
                width: h.width - b,
                height: h.height
            }, b = {x: h.x, y: h.y + d, width: b, height: h.height - d}, mk(this, a, c, b)) : (c = {
                x: h.x + b,
                y: h.y,
                width: h.width - b,
                height: d
            }, b = {x: h.x, y: h.y + d, width: h.width, height: h.height - d},
                mk(this, a, c, b)), f
        }
        return null
    };
    function mk(a, b, c, d) {
        b = [b, 1];
        0 < c.width && 0 < c.height && b.push(c);
        0 < d.width && 0 < d.height && b.push(d);
        a.a.splice.apply(a.a, b)
    };
    function nk(a) {
        a = a || {};
        this.a = void 0 !== a.initialSize ? a.initialSize : 256;
        this.f = void 0 !== a.maxSize ? a.maxSize : void 0 !== ba ? ba : 2048;
        this.b = void 0 !== a.space ? a.space : 1;
        this.g = [new lk(this.a, this.b)];
        this.c = this.a;
        this.i = [new lk(this.c, this.b)]
    }

    function ok(a, b) {
        var c;
        var d = 0;
        for (c = a.length; d < c; ++d) {
            var e = a[d];
            if (e = e.get(b))return e
        }
        return null
    }

    function pk(a, b) {
        return {offsetX: a.offsetX, offsetY: a.offsetY, image: a.image, mm: b.image}
    }

    nk.prototype.add = function (a, b, c, d, e, f) {
        if (b + this.b > this.f || c + this.b > this.f)return null;
        d = qk(this, !1, a, b, c, d, f);
        if (!d)return null;
        a = qk(this, !0, a, b, c, e ? e : ra, f);
        return pk(d, a)
    };
    function qk(a, b, c, d, e, f, g) {
        var h = b ? a.i : a.g, l;
        var m = 0;
        for (l = h.length; m < l; ++m) {
            var n = h[m];
            if (n = n.add(c, d, e, f, g))return n;
            n || m !== l - 1 || (b ? (n = Math.min(2 * a.c, a.f), a.c = n) : (n = Math.min(2 * a.a, a.f), a.a = n), n = new lk(n, a.b), h.push(n), ++l)
        }
        return null
    };
    function rk(a, b) {
        aj.call(this, 0, b);
        this.c = [];
        this.va = [];
        this.mc = ld(0, 0).canvas;
        this.R = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: 0,
            miterLimit: void 0,
            fillColor: null,
            font: void 0,
            scale: void 0
        };
        this.ua = "";
        this.ga = this.ta = this.oa = this.jb = void 0;
        this.C = {};
        this.l = void 0;
        this.opacity = this.scale = 1
    }

    v(rk, aj);
    k = rk.prototype;
    k.Qb = function (a, b, c, d, e, f) {
        if (this.ua) {
            this.f.push(this.b.length);
            this.i.push(f);
            e = this.l;
            f = this.ua.split("\n");
            var g = sk(this, f), h, l, m = Math.round(g[0] * this.jb - this.ta),
                n = Math.round(g[1] * this.oa - this.ga), p = this.R.lineWidth / 2 * this.R.scale;
            g = 0;
            for (h = f.length; g < h; ++g) {
                var q = 0;
                var t = e.height * g;
                var u = f[g].split("");
                var x = 0;
                for (l = u.length; x < l; ++x) {
                    var B = e.qh;
                    var z = u[x], G = ok(B.g, z);
                    G ? (B = ok(B.i, z), B = pk(G, B)) : B = null;
                    if (B) {
                        G = B.image;
                        this.D = m - q;
                        this.B = n - t;
                        this.I = x ? B.offsetX : B.offsetX - p;
                        this.S = B.offsetY;
                        this.height =
                            e.height;
                        this.width = x && x !== u.length - 1 ? e.width[u[x]] : e.width[u[x]] + p;
                        this.pa = G.height;
                        this.qa = G.width;
                        this.c.length ? (B = this.c[this.c.length - 1], w(B) != w(G) && (this.v.push(this.b.length), this.c.push(G))) : this.c.push(G);
                        B = a;
                        z = b;
                        var E = c, ia = d;
                        for (G = z; G < E; G += ia)bj(this, B, z, E, ia)
                    }
                    q += this.width
                }
            }
        }
    };
    function sk(a, b) {
        var c = a.l, d = b.length * c.height;
        return [b.map(function (b) {
            var d = 0, e;
            var h = 0;
            for (e = b.length; h < e; ++h) {
                var l = b[h];
                c.width[l] || tk(a, l);
                d += c.width[l] ? c.width[l] : 0
            }
            return d
        }).reduce(function (a, b) {
            return Math.max(a, b)
        }), d]
    }

    function tk(a, b) {
        if (1 === b.length) {
            var c = a.l, d = a.R;
            a = a.mc.getContext("2d");
            a.font = d.font;
            a = Math.ceil(a.measureText(b).width * d.scale);
            c.qh.add(b, a, c.height, function (a, c, g) {
                a.font = d.font;
                a.fillStyle = d.fillColor;
                a.strokeStyle = d.strokeColor;
                a.lineWidth = d.lineWidth;
                a.lineCap = d.lineCap;
                a.lineJoin = d.lineJoin;
                a.miterLimit = d.miterLimit;
                a.textAlign = "left";
                a.textBaseline = "top";
                Vd && d.lineDash && (a.setLineDash(d.lineDash), a.lineDashOffset = d.lineDashOffset);
                1 !== d.scale && a.setTransform(d.scale, 0, 0, d.scale, 0, 0);
                d.strokeColor &&
                a.strokeText(b, c, g);
                d.fillColor && a.fillText(b, c, g)
            }) && (c.width[b] = a)
        }
    }

    k.ab = function (a) {
        var b = a.b;
        this.v.push(this.b.length);
        this.u = this.v;
        this.o = new Ki(this.a);
        this.j = new Ki(this.b);
        cj(this.va, this.c, {}, b);
        this.R = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: 0,
            miterLimit: void 0,
            fillColor: null,
            font: void 0,
            scale: void 0
        };
        this.ua = "";
        this.ga = this.ta = this.oa = this.jb = void 0;
        this.c = null;
        this.C = {};
        this.l = void 0;
        aj.prototype.ab.call(this, a)
    };
    k.gb = function (a) {
        var b = this.R, c = a.Da(), d = a.Ea();
        if (a && a.Ja() && (c || d)) {
            c ? (c = c.b, b.fillColor = kd(c ? c : Fi)) : b.fillColor = null;
            d ? (c = d.b, b.strokeColor = kd(c ? c : Hi), b.lineWidth = d.c || 1, b.lineCap = d.g || "round", b.lineDashOffset = d.i || 0, b.lineJoin = d.j || "round", b.miterLimit = d.l || 10, d = d.f, b.lineDash = d ? d.slice() : Gi) : (b.strokeColor = null, b.lineWidth = 0);
            b.font = a.a || "10px sans-serif";
            b.scale = a.b || 1;
            this.ua = a.Ja();
            d = uk[a.g];
            c = uk[a.j];
            this.jb = void 0 === d ? .5 : d;
            this.oa = void 0 === c ? .5 : c;
            this.ta = a.f || 0;
            this.ga = a.c || 0;
            this.rotateWithView =
                !!a.l;
            this.rotation = a.i || 0;
            a = [];
            for (var e in b)if (b[e] || 0 === b[e]) Array.isArray(b[e]) ? a = a.concat(b[e]) : a.push(b[e]);
            c = "";
            e = 0;
            for (d = a.length; e < d; ++e)c += a[e];
            e = c;
            this.C[e] || (a = this.mc.getContext("2d"), a.font = b.font, a = Math.ceil((1.5 * a.measureText("M").width + b.lineWidth / 2) * b.scale), this.C[e] = {
                qh: new nk({space: b.lineWidth + 1}),
                width: {},
                height: a
            });
            this.l = this.C[e]
        } else this.ua = ""
    };
    k.jg = function () {
        return this.va
    };
    k.dg = function () {
        return this.va
    };
    var uk = {left: 0, end: 0, center: .5, right: 1, start: 1, top: 0, br: .5, $q: .2, Yq: .8, ar: .8, bottom: 1};

    function vk(a, b, c) {
        this.g = b;
        this.j = a;
        this.i = c;
        this.f = {}
    }

    v(vk, ri);
    function wk(a, b) {
        var c = [], d;
        for (d in a.f) {
            var e = a.f[d], f;
            for (f in e)c.push(e[f].xb(b))
        }
        return function () {
            for (var a = c.length, b, d = 0; d < a; d++)b = c[d].apply(this, arguments);
            return b
        }
    }

    function xk(a, b) {
        for (var c in a.f) {
            var d = a.f[c], e;
            for (e in d)d[e].ab(b)
        }
    }

    vk.prototype.b = function (a, b) {
        var c = void 0 !== a ? a.toString() : "0";
        a = this.f[c];
        void 0 === a && (a = {}, this.f[c] = a);
        c = a[b];
        void 0 === c && (c = new yk[b](this.j, this.g), a[b] = c);
        return c
    };
    vk.prototype.c = function () {
        return ub(this.f)
    };
    vk.prototype.Ma = function (a, b, c, d, e, f, g, h) {
        var l = Object.keys(this.f).map(Number);
        l.sort(fa);
        var m, n;
        var p = 0;
        for (m = l.length; p < m; ++p) {
            var q = this.f[l[p].toString()];
            var t = 0;
            for (n = qi.length; t < n; ++t) {
                var u = q[qi[t]];
                void 0 !== u && u.Ma(a, b, c, d, e, f, g, h, void 0, !1)
            }
        }
    };
    function zk(a, b, c, d, e, f, g, h, l, m, n) {
        var p = Ak, q = Object.keys(a.f).map(Number);
        q.sort(function (a, b) {
            return b - a
        });
        var t, u;
        var x = 0;
        for (t = q.length; x < t; ++x) {
            var B = a.f[q[x].toString()];
            for (u = qi.length - 1; 0 <= u; --u) {
                var z = B[qi[u]];
                if (void 0 !== z && (z = z.Ma(b, c, d, e, p, f, g, h, l, m, n)))return z
            }
        }
    }

    vk.prototype.Ha = function (a, b, c, d, e, f, g, h, l, m) {
        var n = b.b;
        n.bindFramebuffer(n.FRAMEBUFFER, Wi(b));
        var p;
        void 0 !== this.i && (p = Oa(Xa(a), d * this.i));
        return zk(this, b, a, d, e, g, h, l, function (a) {
            var b = new Uint8Array(4);
            n.readPixels(0, 0, 1, 1, n.RGBA, n.UNSIGNED_BYTE, b);
            if (0 < b[3] && (a = m(a)))return a
        }, !0, p)
    };
    function Bk(a, b, c, d, e, f, g, h) {
        var l = c.b;
        l.bindFramebuffer(l.FRAMEBUFFER, Wi(c));
        return void 0 !== zk(a, c, b, d, e, f, g, h, function () {
                var a = new Uint8Array(4);
                l.readPixels(0, 0, 1, 1, l.RGBA, l.UNSIGNED_BYTE, a);
                return 0 < a[3]
            }, !1)
    }

    var Ak = [1, 1], yk = {Circle: Mi, Image: dj, LineString: kj, Polygon: Uj, Text: rk};

    function Ck(a, b, c, d, e, f, g) {
        this.b = a;
        this.f = b;
        this.c = f;
        this.i = g;
        this.l = e;
        this.j = d;
        this.g = c;
        this.a = this.o = this.v = this.u = null
    }

    v(Ck, ci);
    function Dk(a, b, c, d, e) {
        var f = a.b;
        b = b.b(0, "Text");
        b.gb(a.a);
        b.Qb(c, 0, d, e, null, null);
        b.ab(f);
        b.Ma(a.b, a.f, a.g, a.j, a.l, a.i, 1, {}, void 0, !1);
        b.xb(f)()
    }

    k = Ck.prototype;
    k.xd = function (a) {
        this.Na(a.Da(), a.Ea());
        this.Vb(a.Y());
        this.gb(a.Ja())
    };
    k.Cb = function (a) {
        switch (a.T()) {
            case "Point":
                this.sc(a, null);
                break;
            case "LineString":
                this.oc(a, null);
                break;
            case "Polygon":
                this.tc(a, null);
                break;
            case "MultiPoint":
                this.qc(a, null);
                break;
            case "MultiLineString":
                this.pc(a, null);
                break;
            case "MultiPolygon":
                this.rc(a, null);
                break;
            case "GeometryCollection":
                this.Fe(a, null);
                break;
            case "Circle":
                this.$b(a, null)
        }
    };
    k.Ee = function (a, b) {
        (a = (0, b.$a)(a)) && ob(this.c, a.G()) && (this.xd(b), this.Cb(a))
    };
    k.Fe = function (a) {
        a = a.a;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c)this.Cb(a[c])
    };
    k.sc = function (a, b) {
        var c = this.b, d = new vk(1, this.c), e = d.b(0, "Image");
        e.Vb(this.u);
        e.sc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (b = a.ba(), Dk(this, d, b, b.length, a.ma()))
    };
    k.qc = function (a, b) {
        var c = this.b, d = new vk(1, this.c), e = d.b(0, "Image");
        e.Vb(this.u);
        e.qc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (b = a.ba(), Dk(this, d, b, b.length, a.ma()))
    };
    k.oc = function (a, b) {
        var c = this.b, d = new vk(1, this.c), e = d.b(0, "LineString");
        e.Na(null, this.o);
        e.oc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (a = ki(a), Dk(this, d, a, 2, 2))
    };
    k.pc = function (a, b) {
        var c = this.b, d = new vk(1, this.c), e = d.b(0, "LineString");
        e.Na(null, this.o);
        e.pc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (a = li(a), Dk(this, d, a, a.length, 2))
    };
    k.tc = function (a, b) {
        var c = this.b, d = new vk(1, this.c), e = d.b(0, "Polygon");
        e.Na(this.v, this.o);
        e.tc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (a = ag(a), Dk(this, d, a, 2, 2))
    };
    k.rc = function (a, b) {
        var c = this.b, d = new vk(1, this.c), e = d.b(0, "Polygon");
        e.Na(this.v, this.o);
        e.rc(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && (a = ni(a), Dk(this, d, a, a.length, 2))
    };
    k.$b = function (a, b) {
        var c = this.b, d = new vk(1, this.c), e = d.b(0, "Circle");
        e.Na(this.v, this.o);
        e.$b(a, b);
        e.ab(c);
        e.Ma(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.xb(c)();
        this.a && Dk(this, d, a.xa(), 2, 2)
    };
    k.Vb = function (a) {
        this.u = a
    };
    k.Na = function (a, b) {
        this.v = a;
        this.o = b
    };
    k.gb = function (a) {
        this.a = a
    };
    function Ek() {
        this.c = 0;
        this.b = {};
        this.f = this.a = null
    }

    k = Ek.prototype;
    k.clear = function () {
        this.c = 0;
        this.b = {};
        this.f = this.a = null
    };
    k.forEach = function (a, b) {
        for (var c = this.a; c;)a.call(b, c.bd, c.vc, this), c = c.Lb
    };
    k.get = function (a) {
        a = this.b[a];
        va(!!a, 15);
        if (a === this.f)return a.bd;
        a === this.a ? (this.a = this.a.Lb, this.a.Bd = null) : (a.Lb.Bd = a.Bd, a.Bd.Lb = a.Lb);
        a.Lb = null;
        a.Bd = this.f;
        this.f = this.f.Lb = a;
        return a.bd
    };
    k.pop = function () {
        var a = this.a;
        delete this.b[a.vc];
        a.Lb && (a.Lb.Bd = null);
        this.a = a.Lb;
        this.a || (this.f = null);
        --this.c;
        return a.bd
    };
    k.replace = function (a, b) {
        this.get(a);
        this.b[a].bd = b
    };
    k.set = function (a, b) {
        va(!(a in this.b), 16);
        b = {vc: a, Lb: null, Bd: this.f, bd: b};
        this.f ? this.f.Lb = b : this.a = b;
        this.f = b;
        this.b[a] = b;
        ++this.c
    };
    function Fk(a, b) {
        Th.call(this, 0, b);
        this.b = document.createElement("CANVAS");
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.style.display = "block";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.R = this.D = 0;
        this.B = ld();
        this.o = !0;
        this.f = Nd(this.b, {
            antialias: !0,
            depth: !0,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.i = new Vi(this.b, this.f);
        y(this.b, "webglcontextlost", this.no, this);
        y(this.b, "webglcontextrestored", this.oo, this);
        this.a = new Ek;
        this.u = null;
        this.j = new Ne(function (a) {
            var b = a[1];
            a = a[2];
            var c = b[0] - this.u[0];
            b = b[1] - this.u[1];
            return 65536 * Math.log(a) + Math.sqrt(c * c + b * b) / a
        }.bind(this), function (a) {
            return a[0].fb()
        });
        this.C = function () {
            if (this.j.b.length) {
                Re(this.j);
                var a = Oe(this.j);
                Gk(this, a[0], a[3], a[4])
            }
            return !1
        }.bind(this);
        this.g = 0;
        Hk(this)
    }

    v(Fk, Th);
    function Gk(a, b, c, d) {
        var e = a.f, f = b.fb();
        if (a.a.b.hasOwnProperty(f)) a = a.a.get(f), e.bindTexture(3553, a.Hb), 9729 != a.Yh && (e.texParameteri(3553, 10240, 9729), a.Yh = 9729), 9729 != a.$h && (e.texParameteri(3553, 10241, 9729), a.$h = 9729); else {
            var g = e.createTexture();
            e.bindTexture(3553, g);
            if (0 < d) {
                var h = a.B.canvas, l = a.B;
                a.D !== c[0] || a.R !== c[1] ? (h.width = c[0], h.height = c[1], a.D = c[0], a.R = c[1]) : l.clearRect(0, 0, c[0], c[1]);
                l.drawImage(b.Y(), d, d, c[0], c[1], 0, 0, c[0], c[1]);
                e.texImage2D(3553, 0, 6408, 6408, 5121, h)
            } else e.texImage2D(3553,
                0, 6408, 6408, 5121, b.Y());
            e.texParameteri(3553, 10240, 9729);
            e.texParameteri(3553, 10241, 9729);
            e.texParameteri(3553, 10242, 33071);
            e.texParameteri(3553, 10243, 33071);
            a.a.set(f, {Hb: g, Yh: 9729, $h: 9729})
        }
    }

    function Ik(a, b, c) {
        var d = a.l;
        if (Tc(d, b)) {
            a = a.i;
            var e = c.viewState;
            d.b(new Yh(b, new Ck(a, e.center, e.resolution, e.rotation, c.size, c.extent, c.pixelRatio), c, null, a))
        }
    }

    k = Fk.prototype;
    k.ka = function () {
        var a = this.f;
        a.isContextLost() || this.a.forEach(function (b) {
            b && a.deleteTexture(b.Hb)
        });
        Pc(this.i);
        Th.prototype.ka.call(this)
    };
    k.Ik = function (a, b) {
        a = this.f;
        for (var c; 1024 < this.a.c - this.g;) {
            if (c = this.a.a.bd) a.deleteTexture(c.Hb); else if (+this.a.a.vc == b.index)break; else--this.g;
            this.a.pop()
        }
    };
    k.T = function () {
        return "webgl"
    };
    k.no = function (a) {
        a.preventDefault();
        this.a.clear();
        this.g = 0;
        a = this.c;
        for (var b in a)a[b].ug()
    };
    k.oo = function () {
        Hk(this);
        this.l.render()
    };
    function Hk(a) {
        a = a.f;
        a.activeTexture(33984);
        a.blendFuncSeparate(770, 771, 1, 771);
        a.disable(2884);
        a.disable(2929);
        a.disable(3089);
        a.disable(2960)
    }

    k.Rg = function (a) {
        var b = this.i, c = this.f;
        if (c.isContextLost())return !1;
        if (!a)return this.o && (this.b.style.display = "none", this.o = !1), !1;
        this.u = a.focus;
        this.a.set((-a.index).toString(), null);
        ++this.g;
        Ik(this, "precompose", a);
        var d = [], e = a.layerStatesArray;
        na(e);
        var f = a.viewState.resolution, g;
        var h = 0;
        for (g = e.length; h < g; ++h) {
            var l = e[h];
            if (Eh(l, f) && "ready" == l.Ij) {
                var m = Wh(this, l.layer);
                m.vg(a, l, b) && d.push(l)
            }
        }
        e = a.size[0] * a.pixelRatio;
        f = a.size[1] * a.pixelRatio;
        if (this.b.width != e || this.b.height != f) this.b.width =
            e, this.b.height = f;
        c.bindFramebuffer(36160, null);
        c.clearColor(0, 0, 0, 0);
        c.clear(16384);
        c.enable(3042);
        c.viewport(0, 0, this.b.width, this.b.height);
        h = 0;
        for (g = d.length; h < g; ++h)l = d[h], m = Wh(this, l.layer), m.Qi(a, l, b);
        this.o || (this.b.style.display = "", this.o = !0);
        Uh(a);
        1024 < this.a.c - this.g && a.postRenderFunctions.push(this.Ik.bind(this));
        this.j.b.length && (a.postRenderFunctions.push(this.C), a.animate = !0);
        Ik(this, "postcompose", a);
        Xh(this, a);
        a.postRenderFunctions.push(Vh)
    };
    k.Ha = function (a, b, c, d, e, f, g) {
        if (this.f.isContextLost())return !1;
        var h = b.viewState, l = b.layerStatesArray, m;
        for (m = l.length - 1; 0 <= m; --m) {
            var n = l[m];
            var p = n.layer;
            if (Eh(n, h.resolution) && f.call(g, p) && (n = Wh(this, p).Ha(a, b, c, d, e)))return n
        }
    };
    k.Oi = function (a, b, c, d, e) {
        c = !1;
        if (this.f.isContextLost())return !1;
        var f = b.viewState, g = b.layerStatesArray, h;
        for (h = g.length - 1; 0 <= h; --h) {
            var l = g[h], m = l.layer;
            if (Eh(l, f.resolution) && d.call(e, m) && (c = Wh(this, m).ef(a, b)))return !0
        }
        return c
    };
    k.Ni = function (a, b, c, d, e) {
        if (this.f.isContextLost())return !1;
        var f = b.viewState, g = b.layerStatesArray, h;
        for (h = g.length - 1; 0 <= h; --h) {
            var l = g[h];
            var m = l.layer;
            if (Eh(l, f.resolution) && e.call(d, m) && (l = Wh(this, m).tg(a, b, c, d)))return l
        }
    };
    var Jk = ["canvas", "webgl"];

    function H(a) {
        Vc.call(this);
        var b = Kk(a);
        this.ed = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating : !1;
        this.Jd = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting : !1;
        this.Hf = void 0 !== a.pixelRatio ? a.pixelRatio : Ud;
        this.Lf = b.logos;
        this.ga = function () {
            this.j = void 0;
            this.fq.call(this, Date.now())
        }.bind(this);
        this.Ib = Ih();
        this.Qf = Ih();
        this.Zb = 0;
        this.C = this.I = this.S = this.g = this.c = null;
        this.a = document.createElement("DIV");
        this.a.className = "ol-viewport" + (Zd ? " ol-touch" : "");
        this.a.style.position =
            "relative";
        this.a.style.overflow = "hidden";
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.style.msTouchAction = "none";
        this.a.style.touchAction = "none";
        this.B = document.createElement("DIV");
        this.B.className = "ol-overlaycontainer";
        this.a.appendChild(this.B);
        this.D = document.createElement("DIV");
        this.D.className = "ol-overlaycontainer-stopevent";
        for (var c = "click dblclick mousedown touchstart MSPointerDown pointerdown mousewheel wheel".split(" "), d = 0,
                 e = c.length; d < e; ++d)y(this.D, c[d], Rc);
        this.a.appendChild(this.D);
        this.va = new Je(this, a.moveTolerance);
        for (var f in fe)y(this.va, fe[f], this.Rh, this);
        this.oa = b.keyboardEventTarget;
        this.u = null;
        y(this.a, "wheel", this.rd, this);
        y(this.a, "mousewheel", this.rd, this);
        this.o = b.controls;
        this.l = b.interactions;
        this.v = b.overlays;
        this.zg = {};
        this.jc = new b.hq(this.a, this);
        this.U = null;
        this.Za = [];
        this.Sa = new Se(this.Cl.bind(this), this.jm.bind(this));
        this.ta = {};
        y(this, Xc("layergroup"), this.Ql, this);
        y(this, Xc("view"), this.km, this);
        y(this, Xc("size"), this.em, this);
        y(this, Xc("target"),
            this.im, this);
        this.H(b.values);
        this.o.forEach(function (a) {
            a.setMap(this)
        }, this);
        y(this.o, "add", function (a) {
            a.element.setMap(this)
        }, this);
        y(this.o, "remove", function (a) {
            a.element.setMap(null)
        }, this);
        this.l.forEach(function (a) {
            a.setMap(this)
        }, this);
        y(this.l, "add", function (a) {
            a.element.setMap(this)
        }, this);
        y(this.l, "remove", function (a) {
            a.element.setMap(null)
        }, this);
        this.v.forEach(this.ph, this);
        y(this.v, "add", function (a) {
            this.ph(a.element)
        }, this);
        y(this.v, "remove", function (a) {
            var b = a.element.g;
            void 0 !==
            b && delete this.zg[b.toString()];
            a.element.setMap(null)
        }, this)
    }

    v(H, Vc);
    k = H.prototype;
    k.vk = function (a) {
        this.o.push(a)
    };
    k.wk = function (a) {
        this.l.push(a)
    };
    k.nh = function (a) {
        this.Mc().wd().push(a)
    };
    k.oh = function (a) {
        this.v.push(a)
    };
    k.ph = function (a) {
        var b = a.g;
        void 0 !== b && (this.zg[b.toString()] = a);
        a.setMap(this)
    };
    k.ka = function () {
        Pc(this.va);
        Pc(this.jc);
        Mc(this.a, "wheel", this.rd, this);
        Mc(this.a, "mousewheel", this.rd, this);
        this.i && (window.removeEventListener("resize", this.i, !1), this.i = void 0);
        this.j && (cancelAnimationFrame(this.j), this.j = void 0);
        this.We(null);
        Vc.prototype.ka.call(this)
    };
    k.Wd = function (a, b, c) {
        if (this.c)return a = this.Xa(a), c = c ? c : {}, this.jc.Ha(a, this.c, void 0 !== c.hitTolerance ? c.hitTolerance * this.c.pixelRatio : 0, b, null, c.layerFilter ? c.layerFilter : pf, null)
    };
    k.Yk = function (a, b) {
        var c = null;
        this.Wd(a, function (a) {
            c || (c = []);
            c.push(a)
        }, b);
        return c
    };
    k.Wm = function (a, b, c, d, e) {
        if (this.c)return this.jc.Ni(a, this.c, b, void 0 !== c ? c : null, d ? d : pf, void 0 !== e ? e : null)
    };
    k.lm = function (a, b) {
        if (!this.c)return !1;
        a = this.Xa(a);
        b = b ? b : {};
        return this.jc.Oi(a, this.c, void 0 !== b.hitTolerance ? b.hitTolerance * this.c.pixelRatio : 0, b.layerFilter ? b.layerFilter : pf, null)
    };
    k.$f = function (a) {
        return this.Xa(this.He(a))
    };
    k.He = function (a) {
        var b = this.a.getBoundingClientRect();
        a = a.changedTouches ? a.changedTouches[0] : a;
        return [a.clientX - b.left, a.clientY - b.top]
    };
    k.ig = function () {
        return this.get("target")
    };
    k.pd = function () {
        var a = this.ig();
        return void 0 !== a ? "string" === typeof a ? document.getElementById(a) : a : null
    };
    k.Xa = function (a) {
        var b = this.c;
        return b ? Nh(b.pixelToCoordinateTransform, a.slice()) : null
    };
    k.Wk = function () {
        return this.o
    };
    k.rl = function () {
        return this.v
    };
    k.ql = function (a) {
        a = this.zg[a.toString()];
        return void 0 !== a ? a : null
    };
    k.dl = function () {
        return this.l
    };
    k.Mc = function () {
        return this.get("layergroup")
    };
    k.fi = function () {
        return this.Mc().wd()
    };
    k.Ka = function (a) {
        var b = this.c;
        return b ? Nh(b.coordinateToPixelTransform, a.slice(0, 2)) : null
    };
    k.Je = function () {
        return this.jc
    };
    k.Mb = function () {
        return this.get("size")
    };
    k.$ = function () {
        return this.get("view")
    };
    k.El = function () {
        return this.a
    };
    k.Cl = function (a, b, c, d) {
        var e = this.c;
        if (!(e && b in e.wantedTiles && e.wantedTiles[b][a.fb()]))return Infinity;
        a = c[0] - e.focus[0];
        c = c[1] - e.focus[1];
        return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
    };
    k.rd = function (a, b) {
        a = new Ld(b || a.type, this, a);
        this.Rh(a)
    };
    k.Rh = function (a) {
        if (this.c) {
            this.U = a.coordinate;
            a.frameState = this.c;
            var b = this.l.a, c;
            if (!1 !== this.b(a))for (c = b.length - 1; 0 <= c; c--) {
                var d = b[c];
                if (d.c() && !d.handleEvent(a))break
            }
        }
    };
    k.cm = function () {
        var a = this.c, b = this.Sa;
        if (b.b.length) {
            var c = 16, d = c;
            if (a) {
                var e = a.viewHints;
                e[0] && (c = this.ed ? 8 : 0, d = 2);
                e[1] && (c = this.Jd ? 8 : 0, d = 2)
            }
            b.j < c && (Re(b), Te(b, c, d))
        }
        b = this.Za;
        c = 0;
        for (d = b.length; c < d; ++c)b[c](this, a);
        b.length = 0
    };
    k.em = function () {
        this.render()
    };
    k.im = function () {
        var a;
        this.ig() && (a = this.pd());
        if (this.u) {
            for (var b = 0, c = this.u.length; b < c; ++b)Gc(this.u[b]);
            this.u = null
        }
        a ? (a.appendChild(this.a), a = this.oa ? this.oa : a, this.u = [y(a, "keydown", this.rd, this), y(a, "keypress", this.rd, this)], this.i || (this.i = this.Fd.bind(this), window.addEventListener("resize", this.i, !1))) : (nd(this.a), this.i && (window.removeEventListener("resize", this.i, !1), this.i = void 0));
        this.Fd()
    };
    k.jm = function () {
        this.render()
    };
    k.Uh = function () {
        this.render()
    };
    k.km = function () {
        this.S && (Gc(this.S), this.S = null);
        this.I && (Gc(this.I), this.I = null);
        var a = this.$();
        a && (this.a.setAttribute("data-view", w(a)), this.S = y(a, "propertychange", this.Uh, this), this.I = y(a, "change", this.Uh, this));
        this.render()
    };
    k.Ql = function () {
        this.C && (this.C.forEach(Gc), this.C = null);
        var a = this.Mc();
        a && (this.C = [y(a, "propertychange", this.render, this), y(a, "change", this.render, this)]);
        this.render()
    };
    k.gq = function () {
        this.j && cancelAnimationFrame(this.j);
        this.ga()
    };
    k.render = function () {
        void 0 === this.j && (this.j = requestAnimationFrame(this.ga))
    };
    k.Zp = function (a) {
        return this.o.remove(a)
    };
    k.$p = function (a) {
        return this.l.remove(a)
    };
    k.bq = function (a) {
        return this.Mc().wd().remove(a)
    };
    k.cq = function (a) {
        return this.v.remove(a)
    };
    k.fq = function (a) {
        var b, c = this.Mb(), d = this.$(), e = Ma(), f = this.c, g = null;
        if (void 0 !== c && 0 < c[0] && 0 < c[1] && d && og(d)) {
            g = ig(d, this.c ? this.c.viewHints : void 0);
            var h = this.Mc().fg(), l = {};
            var m = 0;
            for (b = h.length; m < b; ++m)l[w(h[m].layer)] = h[m];
            m = d.getState();
            g = {
                animate: !1,
                attributions: {},
                coordinateToPixelTransform: this.Ib,
                extent: e,
                focus: this.U ? this.U : m.center,
                index: this.Zb++,
                layerStates: l,
                layerStatesArray: h,
                logos: rb({}, this.Lf),
                pixelRatio: this.Hf,
                pixelToCoordinateTransform: this.Qf,
                postRenderFunctions: [],
                size: c,
                skippedFeatureUids: this.ta,
                tileQueue: this.Sa,
                time: a,
                usedTiles: {},
                viewState: m,
                viewHints: g,
                wantedTiles: {}
            }
        }
        g && (g.extent = mb(m.center, m.resolution, m.rotation, g.size, e));
        this.c = g;
        this.jc.Rg(g);
        g && (g.animate && this.render(), Array.prototype.push.apply(this.Za, g.postRenderFunctions), !f || this.g && (ib(this.g) || ab(g.extent, this.g)) || (this.b(new Kd("movestart", this, f)), this.g = Wa(this.g)), !this.g || g.viewHints[0] || g.viewHints[1] || ab(g.extent, this.g) || (this.b(new Kd("moveend", this, g)), Pa(g.extent, this.g)));
        this.b(new Kd("postrender", this, g));
        setTimeout(this.cm.bind(this), 0)
    };
    k.Aj = function (a) {
        this.set("layergroup", a)
    };
    k.Yg = function (a) {
        this.set("size", a)
    };
    k.We = function (a) {
        this.set("target", a)
    };
    k.wq = function (a) {
        this.set("view", a)
    };
    k.Hj = function (a) {
        a = w(a).toString();
        this.ta[a] = !0;
        this.render()
    };
    k.Fd = function () {
        var a = this.pd();
        if (a) {
            var b = getComputedStyle(a);
            this.Yg([a.offsetWidth - parseFloat(b.borderLeftWidth) - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) - parseFloat(b.borderRightWidth), a.offsetHeight - parseFloat(b.borderTopWidth) - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) - parseFloat(b.borderBottomWidth)])
        } else this.Yg(void 0)
    };
    k.Mj = function (a) {
        a = w(a).toString();
        delete this.ta[a];
        this.render()
    };
    function Kk(a) {
        var b = null;
        void 0 !== a.keyboardEventTarget && (b = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
        var c = {}, d = {};
        if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo) d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] =
            "https://openlayers.org/"; else {
            var e = a.logo;
            "string" === typeof e ? d[e] = "" : e instanceof HTMLElement ? d[w(e).toString()] = e : e && (va("string" == typeof e.href, 44), va("string" == typeof e.src, 45), d[e.src] = e.href)
        }
        e = a.layers instanceof zh ? a.layers : new zh({layers: a.layers});
        c.layergroup = e;
        c.target = a.target;
        c.view = void 0 !== a.view ? a.view : new F;
        e = Th;
        var f;
        void 0 !== a.renderer ? (Array.isArray(a.renderer) ? f = a.renderer : "string" === typeof a.renderer ? f = [a.renderer] : va(!1, 46), 0 <= f.indexOf("dom") && (f = f.concat(Jk))) : f = Jk;
        var g;
        var h = 0;
        for (g = f.length; h < g; ++h) {
            var l = f[h];
            if ("canvas" == l) {
                if (Wd) {
                    e = oi;
                    break
                }
            } else if ("webgl" == l && Od) {
                e = Fk;
                break
            }
        }
        void 0 !== a.controls ? Array.isArray(a.controls) ? f = new $c(a.controls.slice()) : (va(a.controls instanceof $c, 47), f = a.controls) : f = zd();
        void 0 !== a.interactions ? Array.isArray(a.interactions) ? h = new $c(a.interactions.slice()) : (va(a.interactions instanceof $c, 48), h = a.interactions) : h = wh();
        void 0 !== a.overlays ? Array.isArray(a.overlays) ? a = new $c(a.overlays.slice()) : (va(a.overlays instanceof $c, 49), a =
            a.overlays) : a = new $c;
        return {controls: f, interactions: h, keyboardEventTarget: b, logos: d, overlays: a, hq: e, values: c}
    };
    function Lk(a) {
        Vc.call(this);
        this.g = a.id;
        this.o = void 0 !== a.insertFirst ? a.insertFirst : !0;
        this.v = void 0 !== a.stopEvent ? a.stopEvent : !0;
        this.c = document.createElement("DIV");
        this.c.className = "ol-overlay-container ol-selectable";
        this.c.style.position = "absolute";
        this.autoPan = void 0 !== a.autoPan ? a.autoPan : !1;
        this.j = a.autoPanAnimation || {};
        this.l = void 0 !== a.autoPanMargin ? a.autoPanMargin : 20;
        this.a = {Ce: "", Te: "", yf: "", Ef: "", visible: !0};
        this.i = null;
        y(this, Xc(Mk), this.Ll, this);
        y(this, Xc(Nk), this.Vl, this);
        y(this, Xc(Ok),
            this.Zl, this);
        y(this, Xc(Pk), this.am, this);
        y(this, Xc(Qk), this.bm, this);
        void 0 !== a.element && this.vj(a.element);
        this.Bj(void 0 !== a.offset ? a.offset : [0, 0]);
        this.Ej(void 0 !== a.positioning ? a.positioning : "top-left");
        void 0 !== a.position && this.Ye(a.position)
    }

    v(Lk, Vc);
    k = Lk.prototype;
    k.Yd = function () {
        return this.get(Mk)
    };
    k.Xm = function () {
        return this.g
    };
    k.Xe = function () {
        return this.get(Nk)
    };
    k.Lh = function () {
        return this.get(Ok)
    };
    k.gi = function () {
        return this.get(Pk)
    };
    k.Mh = function () {
        return this.get(Qk)
    };
    k.Ll = function () {
        for (var a = this.c; a.lastChild;)a.removeChild(a.lastChild);
        (a = this.Yd()) && this.c.appendChild(a)
    };
    k.Vl = function () {
        this.i && (nd(this.c), Gc(this.i), this.i = null);
        var a = this.Xe();
        a && (this.i = y(a, "postrender", this.render, this), Rk(this), a = this.v ? a.D : a.B, this.o ? a.insertBefore(this.c, a.childNodes[0] || null) : a.appendChild(this.c))
    };
    k.render = function () {
        Rk(this)
    };
    k.Zl = function () {
        Rk(this)
    };
    k.am = function () {
        Rk(this);
        if (this.get(Pk) && this.autoPan) {
            var a = this.Xe();
            if (a && a.pd()) {
                var b = Sk(a.pd(), a.Mb()), c = this.Yd(), d = c.offsetWidth, e = getComputedStyle(c);
                d += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10);
                e = c.offsetHeight;
                var f = getComputedStyle(c);
                e += parseInt(f.marginTop, 10) + parseInt(f.marginBottom, 10);
                var g = Sk(c, [d, e]);
                c = this.l;
                Ta(b, g) || (d = g[0] - b[0], e = b[2] - g[2], f = g[1] - b[1], g = b[3] - g[3], b = [0, 0], 0 > d ? b[0] = d - c : 0 > e && (b[0] = Math.abs(e) + c), 0 > f ? b[1] = f - c : 0 > g && (b[1] = Math.abs(g) + c), 0 === b[0] && 0 === b[1]) ||
                (c = a.$().xa(), c = a.Ka(c), b = [c[0] + b[0], c[1] + b[1]], a.$().animate({
                    center: a.Xa(b),
                    duration: this.j.duration,
                    easing: this.j.easing
                }))
            }
        }
    };
    k.bm = function () {
        Rk(this)
    };
    k.vj = function (a) {
        this.set(Mk, a)
    };
    k.setMap = function (a) {
        this.set(Nk, a)
    };
    k.Bj = function (a) {
        this.set(Ok, a)
    };
    k.Ye = function (a) {
        this.set(Pk, a)
    };
    function Sk(a, b) {
        var c = a.getBoundingClientRect();
        a = c.left + window.pageXOffset;
        c = c.top + window.pageYOffset;
        return [a, c, a + b[0], c + b[1]]
    }

    k.Ej = function (a) {
        this.set(Qk, a)
    };
    function Tk(a, b) {
        a.a.visible !== b && (a.c.style.display = b ? "" : "none", a.a.visible = b)
    }

    function Rk(a) {
        var b = a.Xe(), c = a.gi();
        if (b && b.c && c) {
            c = b.Ka(c);
            var d = b.Mb();
            b = a.c.style;
            var e = a.Lh(), f = a.Mh();
            Tk(a, !0);
            var g = e[0];
            e = e[1];
            if ("bottom-right" == f || "center-right" == f || "top-right" == f) "" !== a.a.Te && (a.a.Te = b.left = ""), g = d[0] - c[0] - g + "px", a.a.yf != g && (a.a.yf = b.right = g); else {
                "" !== a.a.yf && (a.a.yf = b.right = "");
                if ("bottom-center" == f || "center-center" == f || "top-center" == f) g -= a.c.offsetWidth / 2;
                g = c[0] + g + "px";
                a.a.Te != g && (a.a.Te = b.left = g)
            }
            if ("bottom-left" == f || "bottom-center" == f || "bottom-right" == f) "" !== a.a.Ef &&
            (a.a.Ef = b.top = ""), c = d[1] - c[1] - e + "px", a.a.Ce != c && (a.a.Ce = b.bottom = c); else {
                "" !== a.a.Ce && (a.a.Ce = b.bottom = "");
                if ("center-left" == f || "center-center" == f || "center-right" == f) e -= a.c.offsetHeight / 2;
                c = c[1] + e + "px";
                a.a.Ef != c && (a.a.Ef = b.top = c)
            }
        } else Tk(a, !1)
    }

    var Mk = "element", Nk = "map", Ok = "offset", Pk = "position", Qk = "positioning";

    function Uk(a) {
        function b(a) {
            a = h.$f(a);
            l.a.$().rb(a);
            window.removeEventListener("mousemove", c);
            window.removeEventListener("mouseup", b)
        }

        function c(a) {
            a = h.$f({clientX: a.clientX - n.offsetWidth / 2, clientY: a.clientY + n.offsetHeight / 2});
            m.Ye(a)
        }

        a = a ? a : {};
        this.j = void 0 !== a.collapsed ? a.collapsed : !0;
        this.l = void 0 !== a.collapsible ? a.collapsible : !0;
        this.l || (this.j = !1);
        var d = void 0 !== a.className ? a.className : "ol-overviewmap",
            e = void 0 !== a.tipLabel ? a.tipLabel : "Overview map", f = void 0 !== a.collapseLabel ? a.collapseLabel :
                "\u00ab";
        "string" === typeof f ? (this.u = document.createElement("span"), this.u.textContent = f) : this.u = f;
        f = void 0 !== a.label ? a.label : "\u00bb";
        "string" === typeof f ? (this.D = document.createElement("span"), this.D.textContent = f) : this.D = f;
        var g = this.l && !this.j ? this.u : this.D;
        f = document.createElement("button");
        f.setAttribute("type", "button");
        f.title = e;
        f.appendChild(g);
        y(f, "click", this.qn, this);
        this.B = document.createElement("DIV");
        this.B.className = "ol-overviewmap-map";
        var h = this.c = new H({
            controls: new $c, interactions: new $c,
            view: a.view
        });
        a.layers && a.layers.forEach(function (a) {
            h.nh(a)
        }, this);
        e = document.createElement("DIV");
        e.className = "ol-overviewmap-box";
        e.style.boxSizing = "border-box";
        this.o = new Lk({position: [0, 0], positioning: "bottom-left", element: e});
        this.c.oh(this.o);
        e = document.createElement("div");
        e.className = d + " ol-unselectable ol-control" + (this.j && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
        e.appendChild(this.B);
        e.appendChild(f);
        od.call(this, {element: e, render: a.render ? a.render : Vk, target: a.target});
        var l = this, m = this.o, n = this.o.Yd();
        n.addEventListener("mousedown", function () {
            window.addEventListener("mousemove", c);
            window.addEventListener("mouseup", b)
        })
    }

    v(Uk, od);
    k = Uk.prototype;
    k.setMap = function (a) {
        var b = this.a;
        a !== b && (b && ((b = b.$()) && Mc(b, Xc("rotation"), this.Re, this), this.c.We(null)), od.prototype.setMap.call(this, a), a && (this.c.We(this.B), this.v.push(y(a, "propertychange", this.Wl, this)), this.c.fi().ec() || this.c.Aj(a.Mc()), a = a.$())) && (y(a, Xc("rotation"), this.Re, this), og(a) && (this.c.Fd(), Wk(this)))
    };
    k.Wl = function (a) {
        "view" === a.key && ((a = a.oldValue) && Mc(a, Xc("rotation"), this.Re, this), a = this.a.$(), y(a, Xc("rotation"), this.Re, this))
    };
    k.Re = function () {
        this.c.$().Ze(this.a.$().Qa())
    };
    function Vk() {
        var a = this.a, b = this.c;
        if (a.c && b.c) {
            var c = a.Mb();
            a = a.$().gd(c);
            var d = b.Mb();
            c = b.$().gd(d);
            var e = b.Ka(gb(a)), f = b.Ka(eb(a));
            b = Math.abs(e[0] - f[0]);
            e = Math.abs(e[1] - f[1]);
            f = d[0];
            d = d[1];
            b < .1 * f || e < .1 * d || b > .75 * f || e > .75 * d ? Wk(this) : Ta(c, a) || (a = this.c, c = this.a.$(), a.$().rb(c.xa()))
        }
        Xk(this)
    }

    function Wk(a) {
        var b = a.a;
        a = a.c;
        var c = b.Mb();
        b = b.$().gd(c);
        a = a.$();
        pb(b, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));
        a.Xf(b)
    }

    function Xk(a) {
        var b = a.a, c = a.c;
        if (b.c && c.c) {
            var d = b.Mb(), e = b.$(), f = c.$();
            c = e.Qa();
            b = a.o;
            var g = a.o.Yd(), h = e.gd(d);
            d = f.Pa();
            e = db(h);
            f = fb(h);
            if (a = a.a.$().xa()) {
                var l = [e[0] - a[0], e[1] - a[1]];
                hf(l, c);
                bf(l, a)
            }
            b.Ye(l);
            g && (g.style.width = Math.abs((e[0] - f[0]) / d) + "px", g.style.height = Math.abs((f[1] - e[1]) / d) + "px")
        }
    }

    k.qn = function (a) {
        a.preventDefault();
        Yk(this)
    };
    function Yk(a) {
        a.element.classList.toggle("ol-collapsed");
        a.j ? md(a.u, a.D) : md(a.D, a.u);
        a.j = !a.j;
        var b = a.c;
        a.j || b.c || (b.Fd(), Wk(a), Lc(b, "postrender", function () {
            Xk(this)
        }, a))
    }

    k.pn = function () {
        return this.l
    };
    k.sn = function (a) {
        this.l !== a && (this.l = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.j && Yk(this))
    };
    k.rn = function (a) {
        this.l && this.j !== a && Yk(this)
    };
    k.nn = function () {
        return this.j
    };
    k.sl = function () {
        return this.c
    };
    function Zk(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-scale-line";
        this.l = document.createElement("DIV");
        this.l.className = b + "-inner";
        this.c = document.createElement("DIV");
        this.c.className = b + " ol-unselectable";
        this.c.appendChild(this.l);
        this.u = null;
        this.o = void 0 !== a.minWidth ? a.minWidth : 64;
        this.j = !1;
        this.C = void 0;
        this.D = "";
        od.call(this, {element: this.c, render: a.render ? a.render : $k, target: a.target});
        y(this, Xc(al), this.U, this);
        this.I(a.units || "metric")
    }

    v(Zk, od);
    var bl = [1, 2, 5];
    Zk.prototype.B = function () {
        return this.get(al)
    };
    function $k(a) {
        (a = a.frameState) ? this.u = a.viewState : this.u = null;
        cl(this)
    }

    Zk.prototype.U = function () {
        cl(this)
    };
    Zk.prototype.I = function (a) {
        this.set(al, a)
    };
    function cl(a) {
        var b = a.u;
        if (b) {
            var c = b.center, d = b.projection, e = a.B();
            b = Ub(d, b.resolution, c, "degrees" == e ? "degrees" : "m");
            var f = a.o * b;
            c = "";
            "degrees" == e ? (c = Bb.degrees, "degrees" == d.b ? f *= c : b /= c, f < c / 60 ? (c = "\u2033", b *= 3600) : f < c ? (c = "\u2032", b *= 60) : c = "\u00b0") : "imperial" == e ? .9144 > f ? (c = "in", b /= .0254) : 1609.344 > f ? (c = "ft", b /= .3048) : (c = "mi", b /= 1609.344) : "nautical" == e ? (b /= 1852, c = "nm") : "metric" == e ? .001 > f ? (c = "\u03bcm", b *= 1E6) : 1 > f ? (c = "mm", b *= 1E3) : 1E3 > f ? c = "m" : (c = "km", b /= 1E3) : "us" == e ? .9144 > f ? (c = "in", b *= 39.37) : 1609.344 >
            f ? (c = "ft", b /= .30480061) : (c = "mi", b /= 1609.3472) : va(!1, 33);
            for (e = 3 * Math.floor(Math.log(a.o * b) / Math.log(10)); ;) {
                f = bl[(e % 3 + 3) % 3] * Math.pow(10, Math.floor(e / 3));
                d = Math.round(f / b);
                if (isNaN(d)) {
                    a.c.style.display = "none";
                    a.j = !1;
                    return
                }
                if (d >= a.o)break;
                ++e
            }
            b = f + " " + c;
            a.D != b && (a.l.innerHTML = b, a.D = b);
            a.C != d && (a.l.style.width = d + "px", a.C = d);
            a.j || (a.c.style.display = "", a.j = !0)
        } else a.j && (a.c.style.display = "none", a.j = !1)
    }

    var al = "units";

    function dl(a) {
        a = a ? a : {};
        this.c = void 0;
        this.j = el;
        this.D = this.o = 0;
        this.I = null;
        this.ta = !1;
        this.U = void 0 !== a.duration ? a.duration : 200;
        var b = void 0 !== a.className ? a.className : "ol-zoomslider", c = document.createElement("button");
        c.setAttribute("type", "button");
        c.className = b + "-thumb ol-unselectable";
        var d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        this.l = new Ee(d);
        y(this.l, "pointerdown", this.Kl, this);
        y(this.l, "pointermove", this.Il, this);
        y(this.l, "pointerup", this.Jl,
            this);
        y(d, "click", this.Hl, this);
        y(c, "click", Rc);
        od.call(this, {element: d, render: a.render ? a.render : fl})
    }

    v(dl, od);
    dl.prototype.ka = function () {
        Pc(this.l);
        od.prototype.ka.call(this)
    };
    var el = 0;
    k = dl.prototype;
    k.setMap = function (a) {
        od.prototype.setMap.call(this, a);
        a && a.render()
    };
    function fl(a) {
        if (a.frameState) {
            if (!this.ta) {
                var b = this.element, c = b.offsetWidth, d = b.offsetHeight, e = b.firstElementChild,
                    f = getComputedStyle(e);
                b = e.offsetWidth + parseFloat(f.marginRight) + parseFloat(f.marginLeft);
                e = e.offsetHeight + parseFloat(f.marginTop) + parseFloat(f.marginBottom);
                this.I = [b, e];
                c > d ? (this.j = 1, this.D = c - b) : (this.j = el, this.o = d - e);
                this.ta = !0
            }
            a = a.frameState.viewState.resolution;
            a !== this.c && (this.c = a, gl(this, a))
        }
    }

    k.Hl = function (a) {
        var b = this.a.$();
        a = hl(this, Aa(1 === this.j ? (a.offsetX - this.I[0] / 2) / this.D : (a.offsetY - this.I[1] / 2) / this.o, 0, 1));
        b.animate({resolution: b.constrainResolution(a), duration: this.U, easing: td})
    };
    k.Kl = function (a) {
        this.u || a.b.target !== this.element.firstElementChild || (hg(this.a.$(), 1, 1), this.B = a.clientX, this.C = a.clientY, this.u = !0)
    };
    k.Il = function (a) {
        if (this.u) {
            var b = this.element.firstElementChild;
            this.c = hl(this, Aa(1 === this.j ? (a.clientX - this.B + parseInt(b.style.left, 10)) / this.D : (a.clientY - this.C + parseInt(b.style.top, 10)) / this.o, 0, 1));
            this.a.$().Yc(this.c);
            gl(this, this.c);
            this.B = a.clientX;
            this.C = a.clientY
        }
    };
    k.Jl = function () {
        if (this.u) {
            var a = this.a.$();
            hg(a, 1, -1);
            a.animate({resolution: a.constrainResolution(this.c), duration: this.U, easing: td});
            this.u = !1;
            this.C = this.B = void 0
        }
    };
    function gl(a, b) {
        b = 1 - ng(a.a.$())(b);
        var c = a.element.firstElementChild;
        1 == a.j ? c.style.left = a.D * b + "px" : c.style.top = a.o * b + "px"
    }

    function hl(a, b) {
        return mg(a.a.$())(1 - b)
    };
    function il(a) {
        a = a ? a : {};
        this.c = a.extent ? a.extent : null;
        var b = void 0 !== a.className ? a.className : "ol-zoom-extent", c = void 0 !== a.label ? a.label : "E",
            d = void 0 !== a.tipLabel ? a.tipLabel : "Fit to extent", e = document.createElement("button");
        e.setAttribute("type", "button");
        e.title = d;
        e.appendChild("string" === typeof c ? document.createTextNode(c) : c);
        y(e, "click", this.j, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(e);
        od.call(this, {element: c, target: a.target})
    }

    v(il, od);
    il.prototype.j = function (a) {
        a.preventDefault();
        a = this.a.$();
        var b = this.c ? this.c : a.v.G();
        a.Xf(b)
    };
    function jl(a) {
        Vc.call(this);
        a = a ? a : {};
        this.a = null;
        y(this, Xc(kl), this.Jm, this);
        this.og(void 0 !== a.tracking ? a.tracking : !1)
    }

    v(jl, Vc);
    k = jl.prototype;
    k.ka = function () {
        this.og(!1);
        Vc.prototype.ka.call(this)
    };
    k.op = function (a) {
        if (null !== a.alpha) {
            var b = Fa(a.alpha);
            this.set(ll, b);
            "boolean" === typeof a.absolute && a.absolute ? this.set(ml, b) : "number" === typeof a.webkitCompassHeading && -1 != a.webkitCompassAccuracy && this.set(ml, Fa(a.webkitCompassHeading))
        }
        null !== a.beta && this.set(nl, Fa(a.beta));
        null !== a.gamma && this.set(pl, Fa(a.gamma));
        this.s()
    };
    k.Qk = function () {
        return this.get(ll)
    };
    k.Tk = function () {
        return this.get(nl)
    };
    k.$k = function () {
        return this.get(pl)
    };
    k.Im = function () {
        return this.get(ml)
    };
    k.bi = function () {
        return this.get(kl)
    };
    k.Jm = function () {
        if (Xd) {
            var a = this.bi();
            a && !this.a ? this.a = y(window, "deviceorientation", this.op, this) : a || null === this.a || (Gc(this.a), this.a = null)
        }
    };
    k.og = function (a) {
        this.set(kl, a)
    };
    var ll = "alpha", nl = "beta", pl = "gamma", ml = "heading", kl = "tracking";

    function ql(a) {
        this.i = a.opacity;
        this.o = a.rotateWithView;
        this.g = a.rotation;
        this.a = a.scale;
        this.v = a.snapToPixel
    }

    k = ql.prototype;
    k.jf = function () {
        return this.i
    };
    k.kf = function () {
        return this.o
    };
    k.lf = function () {
        return this.g
    };
    k.mf = function () {
        return this.a
    };
    k.Le = function () {
        return this.v
    };
    k.zd = function (a) {
        this.i = a
    };
    k.nf = function (a) {
        this.g = a
    };
    k.Ad = function (a) {
        this.a = a
    };
    function rl(a) {
        this.D = this.u = this.c = null;
        this.Wa = void 0 !== a.fill ? a.fill : null;
        this.pa = [0, 0];
        this.l = a.points;
        this.b = void 0 !== a.radius ? a.radius : a.radius1;
        this.f = a.radius2;
        this.j = void 0 !== a.angle ? a.angle : 0;
        this.Ua = void 0 !== a.stroke ? a.stroke : null;
        this.C = this.qa = this.B = null;
        this.R = a.atlasManager;
        sl(this, this.R);
        ql.call(this, {
            opacity: 1,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0
        })
    }

    v(rl, ql);
    k = rl.prototype;
    k.clone = function () {
        var a = new rl({
            fill: this.Da() ? this.Da().clone() : void 0,
            points: this.l,
            radius: this.b,
            radius2: this.f,
            angle: this.j,
            snapToPixel: this.v,
            stroke: this.Ea() ? this.Ea().clone() : void 0,
            rotation: this.g,
            rotateWithView: this.o,
            atlasManager: this.R
        });
        a.zd(this.i);
        a.Ad(this.a);
        return a
    };
    k.Jc = function () {
        return this.B
    };
    k.Zi = function () {
        return this.j
    };
    k.Da = function () {
        return this.Wa
    };
    k.yg = function () {
        return this.D
    };
    k.Y = function () {
        return this.u
    };
    k.Ie = function () {
        return this.C
    };
    k.hf = function () {
        return 2
    };
    k.Rc = function () {
        return this.pa
    };
    k.$i = function () {
        return this.l
    };
    k.aj = function () {
        return this.b
    };
    k.Nh = function () {
        return this.f
    };
    k.ic = function () {
        return this.qa
    };
    k.Ea = function () {
        return this.Ua
    };
    k.Wh = function () {
    };
    k.load = function () {
    };
    k.Lj = function () {
    };
    function sl(a, b) {
        var c = "", d = "", e = 0, f = null, g = 0, h = 0;
        if (a.Ua) {
            var l = a.Ua.b;
            null === l && (l = ai);
            l = kd(l);
            h = a.Ua.c;
            void 0 === h && (h = 1);
            f = a.Ua.f;
            g = a.Ua.i;
            Vd || (f = null, g = 0);
            d = a.Ua.j;
            void 0 === d && (d = "round");
            c = a.Ua.g;
            void 0 === c && (c = "round");
            e = a.Ua.l;
            void 0 === e && (e = 10)
        }
        var m = 2 * (a.b + h) + 1;
        c = {strokeStyle: l, Jj: h, size: m, lineCap: c, lineDash: f, lineDashOffset: g, lineJoin: d, miterLimit: e};
        if (void 0 === b) {
            var n = ld(m, m);
            a.u = n.canvas;
            b = m = a.u.width;
            a.yh(c, n, 0, 0);
            a.Wa ? a.D = a.u : (n = ld(c.size, c.size), a.D = n.canvas, a.xh(c, n, 0, 0))
        } else m =
            Math.round(m), (d = !a.Wa) && (n = a.xh.bind(a, c)), a.Ua ? (e = a.Ua, void 0 === e.a && (e.a = "s", e.a = e.b ? "string" === typeof e.b ? e.a + e.b : e.a + w(e.b).toString() : e.a + "-", e.a += "," + (void 0 !== e.g ? e.g.toString() : "-") + "," + (e.f ? e.f.toString() : "-") + "," + (void 0 !== e.i ? e.i : "-") + "," + (void 0 !== e.j ? e.j : "-") + "," + (void 0 !== e.l ? e.l.toString() : "-") + "," + (void 0 !== e.c ? e.c.toString() : "-")), e = e.a) : e = "-", a.Wa ? (f = a.Wa, void 0 === f.a && (f.a = f.b instanceof CanvasPattern || f.b instanceof CanvasGradient ? w(f.b).toString() : "f" + (f.b ? id(f.b) : "-")), f = f.a) :
            f = "-", a.c && e == a.c[1] && f == a.c[2] && a.b == a.c[3] && a.f == a.c[4] && a.j == a.c[5] && a.l == a.c[6] || (a.c = ["r" + e + f + (void 0 !== a.b ? a.b.toString() : "-") + (void 0 !== a.f ? a.f.toString() : "-") + (void 0 !== a.j ? a.j.toString() : "-") + (void 0 !== a.l ? a.l.toString() : "-"), e, f, a.b, a.f, a.j, a.l]), n = b.add(a.c[0], m, m, a.yh.bind(a, c), n), a.u = n.image, a.pa = [n.offsetX, n.offsetY], b = n.image.width, a.D = d ? n.mm : a.u;
        a.B = [m / 2, m / 2];
        a.qa = [m, m];
        a.C = [b, b]
    }

    k.yh = function (a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        var e = this.l;
        if (Infinity === e) b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0); else {
            var f = void 0 !== this.f ? this.f : this.b;
            f !== this.b && (e *= 2);
            for (c = 0; c <= e; c++) {
                d = 2 * c * Math.PI / e - Math.PI / 2 + this.j;
                var g = c % 2 ? f : this.b;
                b.lineTo(a.size / 2 + g * Math.cos(d), a.size / 2 + g * Math.sin(d))
            }
        }
        this.Wa && (c = this.Wa.b, null === c && (c = Zh), b.fillStyle = kd(c), b.fill());
        this.Ua && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Jj, a.lineDash && (b.setLineDash(a.lineDash),
            b.lineDashOffset = a.lineDashOffset), b.lineCap = a.lineCap, b.lineJoin = a.lineJoin, b.miterLimit = a.miterLimit, b.stroke());
        b.closePath()
    };
    k.xh = function (a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        c = this.l;
        if (Infinity === c) b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0); else {
            d = void 0 !== this.f ? this.f : this.b;
            d !== this.b && (c *= 2);
            var e;
            for (e = 0; e <= c; e++) {
                var f = 2 * e * Math.PI / c - Math.PI / 2 + this.j;
                var g = e % 2 ? d : this.b;
                b.lineTo(a.size / 2 + g * Math.cos(f), a.size / 2 + g * Math.sin(f))
            }
        }
        b.fillStyle = Zh;
        b.fill();
        this.Ua && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Jj, a.lineDash && (b.setLineDash(a.lineDash), b.lineDashOffset = a.lineDashOffset), b.stroke());
        b.closePath()
    };
    function tl(a) {
        a = a || {};
        rl.call(this, {
            points: Infinity,
            fill: a.fill,
            radius: a.radius,
            snapToPixel: a.snapToPixel,
            stroke: a.stroke,
            atlasManager: a.atlasManager
        })
    }

    v(tl, rl);
    tl.prototype.clone = function () {
        var a = new tl({
            fill: this.Da() ? this.Da().clone() : void 0,
            stroke: this.Ea() ? this.Ea().clone() : void 0,
            radius: this.b,
            snapToPixel: this.v,
            atlasManager: this.R
        });
        a.zd(this.i);
        a.Ad(this.a);
        return a
    };
    tl.prototype.Xc = function (a) {
        this.b = a;
        sl(this, this.R)
    };
    function ul(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.a = void 0
    }

    ul.prototype.clone = function () {
        var a = this.b;
        return new ul({color: a && a.slice ? a.slice() : a || void 0})
    };
    ul.prototype.f = function () {
        return this.b
    };
    ul.prototype.c = function (a) {
        this.b = a;
        this.a = void 0
    };
    function vl(a) {
        a = a || {};
        this.Ic = null;
        this.$a = wl;
        void 0 !== a.geometry && this.Ra(a.geometry);
        this.Wa = void 0 !== a.fill ? a.fill : null;
        this.M = void 0 !== a.image ? a.image : null;
        this.jc = a.renderer ? a.renderer : null;
        this.Ua = void 0 !== a.stroke ? a.stroke : null;
        this.ua = void 0 !== a.text ? a.text : null;
        this.Pj = a.zIndex
    }

    k = vl.prototype;
    k.clone = function () {
        var a = this.W();
        a && a.clone && (a = a.clone());
        return new vl({
            geometry: a,
            fill: this.Da() ? this.Da().clone() : void 0,
            image: this.Y() ? this.Y().clone() : void 0,
            stroke: this.Ea() ? this.Ea().clone() : void 0,
            text: this.Ja() ? this.Ja().clone() : void 0,
            zIndex: this.za()
        })
    };
    k.Je = function () {
        return this.jc
    };
    k.uq = function (a) {
        this.jc = a
    };
    k.W = function () {
        return this.Ic
    };
    k.al = function () {
        return this.$a
    };
    k.Da = function () {
        return this.Wa
    };
    k.zf = function (a) {
        this.Wa = a
    };
    k.Y = function () {
        return this.M
    };
    k.Wg = function (a) {
        this.M = a
    };
    k.Ea = function () {
        return this.Ua
    };
    k.Af = function (a) {
        this.Ua = a
    };
    k.Ja = function () {
        return this.ua
    };
    k.Dd = function (a) {
        this.ua = a
    };
    k.za = function () {
        return this.Pj
    };
    k.Ra = function (a) {
        "function" === typeof a ? this.$a = a : "string" === typeof a ? this.$a = function (b) {
            return b.get(a)
        } : a ? a && (this.$a = function () {
                return a
            }) : this.$a = wl;
        this.Ic = a
    };
    k.Wb = function (a) {
        this.Pj = a
    };
    function xl(a) {
        if ("function" !== typeof a) {
            if (Array.isArray(a))var b = a; else va(a instanceof vl, 41), b = [a];
            a = function () {
                return b
            }
        }
        return a
    }

    var yl = null;

    function zl() {
        if (!yl) {
            var a = new ul({color: "rgba(255,255,255,0.4)"}), b = new Ej({color: "#3399CC", width: 1.25});
            yl = [new vl({image: new tl({fill: a, stroke: b, radius: 5}), fill: a, stroke: b})]
        }
        return yl
    }

    function Al() {
        var a = {}, b = [255, 255, 255, 1], c = [0, 153, 255, 1];
        a.Polygon = [new vl({fill: new ul({color: [255, 255, 255, .5]})})];
        a.MultiPolygon = a.Polygon;
        a.LineString = [new vl({stroke: new Ej({color: b, width: 5})}), new vl({stroke: new Ej({color: c, width: 3})})];
        a.MultiLineString = a.LineString;
        a.Circle = a.Polygon.concat(a.LineString);
        a.Point = [new vl({
            image: new tl({radius: 6, fill: new ul({color: c}), stroke: new Ej({color: b, width: 1.5})}),
            zIndex: Infinity
        })];
        a.MultiPoint = a.Point;
        a.GeometryCollection = a.Polygon.concat(a.LineString,
            a.Point);
        return a
    }

    function wl(a) {
        return a.W()
    };
    function Bl(a) {
        Vc.call(this);
        this.a = void 0;
        this.c = "geometry";
        this.g = null;
        this.j = void 0;
        this.i = null;
        y(this, Xc(this.c), this.Pe, this);
        void 0 !== a && (a instanceof rf || !a ? this.Ra(a) : this.H(a))
    }

    v(Bl, Vc);
    k = Bl.prototype;
    k.clone = function () {
        var a = new Bl(this.N());
        a.Wc(this.c);
        var b = this.W();
        b && a.Ra(b.clone());
        (b = this.g) && a.pg(b);
        return a
    };
    k.W = function () {
        return this.get(this.c)
    };
    k.Km = function () {
        return this.a
    };
    k.bl = function () {
        return this.c
    };
    k.Lm = function () {
        return this.g
    };
    k.bb = function () {
        return this.j
    };
    k.Ml = function () {
        this.s()
    };
    k.Pe = function () {
        this.i && (Gc(this.i), this.i = null);
        var a = this.W();
        a && (this.i = y(a, "change", this.Ml, this));
        this.s()
    };
    k.Ra = function (a) {
        this.set(this.c, a)
    };
    k.pg = function (a) {
        this.j = (this.g = a) ? Cl(a) : void 0;
        this.s()
    };
    k.kc = function (a) {
        this.a = a;
        this.s()
    };
    k.Wc = function (a) {
        Mc(this, Xc(this.c), this.Pe, this);
        this.c = a;
        y(this, Xc(this.c), this.Pe, this);
        this.Pe()
    };
    function Cl(a) {
        var b;
        if ("function" === typeof a) 2 == a.length ? b = function (b) {
            return a(this, b)
        } : b = a; else {
            if (Array.isArray(a))var c = a; else va(a instanceof vl, 41), c = [a];
            b = function () {
                return c
            }
        }
        return b
    };
    var Dl = document.implementation.createDocument("", "", null);

    function El(a, b) {
        return Dl.createElementNS(a, b)
    }

    function Fl(a, b) {
        return Gl(a, b, []).join("")
    }

    function Gl(a, b, c) {
        if (a.nodeType == Node.CDATA_SECTION_NODE || a.nodeType == Node.TEXT_NODE) b ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue); else for (a = a.firstChild; a; a = a.nextSibling)Gl(a, b, c);
        return c
    }

    function Hl(a) {
        return a instanceof Document
    }

    function Il(a) {
        return a instanceof Node
    }

    function Jl(a) {
        return (new DOMParser).parseFromString(a, "application/xml")
    }

    function Kl(a, b) {
        return function (c, d) {
            c = a.call(b, c, d);
            void 0 !== c && ka(d[d.length - 1], c)
        }
    }

    function Ll(a, b) {
        return function (c, d) {
            c = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== c && d[d.length - 1].push(c)
        }
    }

    function Nl(a, b) {
        return function (c, d) {
            c = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== c && (d[d.length - 1] = c)
        }
    }

    function Ol(a) {
        return function (b, c) {
            var d = a.call(this, b, c);
            if (void 0 !== d) {
                c = c[c.length - 1];
                b = b.localName;
                var e;
                b in c ? e = c[b] : e = c[b] = [];
                e.push(d)
            }
        }
    }

    function I(a, b) {
        return function (c, d) {
            var e = a.call(this, c, d);
            void 0 !== e && (d[d.length - 1][void 0 !== b ? b : c.localName] = e)
        }
    }

    function J(a, b) {
        return function (c, d, e) {
            a.call(void 0 !== b ? b : this, c, d, e);
            e[e.length - 1].node.appendChild(c)
        }
    }

    function Pl(a) {
        var b, c;
        return function (d, e, f) {
            if (!b) {
                b = {};
                var g = {};
                g[d.localName] = a;
                b[d.namespaceURI] = g;
                c = Ql(d.localName)
            }
            Rl(b, c, e, f)
        }
    }

    function Ql(a, b) {
        return function (c, d, e) {
            c = d[d.length - 1].node;
            d = a;
            void 0 === d && (d = e);
            e = b;
            void 0 === b && (e = c.namespaceURI);
            return El(e, d)
        }
    }

    var Sl = Ql();

    function Tl(a, b) {
        for (var c = b.length, d = Array(c), e = 0; e < c; ++e)d[e] = a[b[e]];
        return d
    }

    function K(a, b, c) {
        c = void 0 !== c ? c : {};
        var d;
        var e = 0;
        for (d = a.length; e < d; ++e)c[a[e]] = b;
        return c
    }

    function Ul(a, b, c, d) {
        for (b = b.firstElementChild; b; b = b.nextElementSibling) {
            var e = a[b.namespaceURI];
            void 0 !== e && (e = e[b.localName]) && e.call(d, b, c)
        }
    }

    function L(a, b, c, d, e) {
        d.push(a);
        Ul(b, c, d, e);
        return d.pop()
    }

    function Rl(a, b, c, d, e, f) {
        for (var g = (void 0 !== e ? e : c).length, h, l,
                 m = 0; m < g; ++m)h = c[m], void 0 !== h && (l = b.call(f, h, d, void 0 !== e ? e[m] : void 0), void 0 !== l && a[l.namespaceURI][l.localName].call(f, l, h, d))
    }

    function Vl(a, b, c, d, e, f, g) {
        e.push(a);
        Rl(b, c, d, e, f, g);
        e.pop()
    };
    function Wl(a, b, c, d) {
        return function (e, f, g) {
            var h = new XMLHttpRequest;
            h.open("GET", "function" === typeof a ? a(e, f, g) : a, !0);
            "arraybuffer" == b.T() && (h.responseType = "arraybuffer");
            h.onload = function () {
                if (!h.status || 200 <= h.status && 300 > h.status) {
                    var a = b.T();
                    if ("json" == a || "text" == a)var e = h.responseText; else"xml" == a ? (e = h.responseXML) || (e = Jl(h.responseText)) : "arraybuffer" == a && (e = h.response);
                    e ? c.call(this, b.Oa(e, {featureProjection: g}), b.ob(e), b.eg()) : d.call(this)
                } else d.call(this)
            }.bind(this);
            h.onerror = function () {
                d.call(this)
            }.bind(this);
            h.send()
        }
    }

    function Xl(a, b) {
        return Wl(a, b, function (a) {
            this.Ec(a)
        }, ra)
    };
    function Yl() {
        this.i = this.defaultDataProjection = null
    }

    function Zl(a, b, c) {
        var d;
        c && (d = {
            dataProjection: c.dataProjection ? c.dataProjection : a.ob(b),
            featureProjection: c.featureProjection
        });
        return $l(a, d)
    }

    function $l(a, b) {
        return rb({dataProjection: a.defaultDataProjection, featureProjection: a.i}, b)
    }

    Yl.prototype.eg = function () {
        return null
    };
    function am(a, b, c) {
        var d = c ? Wb(c.featureProjection) : null, e = c ? Wb(c.dataProjection) : null, f;
        d && e && !ec(d, e) ? a instanceof rf ? f = (b ? a.clone() : a).mb(b ? d : e, b ? e : d) : f = ic(a, e, d) : f = a;
        if (b && c && void 0 !== c.decimals) {
            var g = Math.pow(10, c.decimals);
            f === a && (f = f.clone());
            f.Fc(function (a) {
                for (var b = 0, c = a.length; b < c; ++b)a[b] = Math.round(a[b] * g) / g;
                return a
            })
        }
        return f
    };
    function bm() {
        Yl.call(this)
    }

    v(bm, Yl);
    function cm(a) {
        return "string" === typeof a ? (a = JSON.parse(a)) ? a : null : null !== a ? a : null
    }

    k = bm.prototype;
    k.T = function () {
        return "json"
    };
    k.Ub = function (a, b) {
        return this.Uc(cm(a), Zl(this, a, b))
    };
    k.Oa = function (a, b) {
        return this.Gg(cm(a), Zl(this, a, b))
    };
    k.Vc = function (a, b) {
        return this.Kg(cm(a), Zl(this, a, b))
    };
    k.ob = function (a) {
        return this.Ng(cm(a))
    };
    k.Gd = function (a, b) {
        return JSON.stringify(this.cd(a, b))
    };
    k.Xb = function (a, b) {
        return JSON.stringify(this.se(a, b))
    };
    k.dd = function (a, b) {
        return JSON.stringify(this.ue(a, b))
    };
    function dm(a, b, c, d, e, f) {
        var g = NaN, h = NaN, l = (c - b) / d;
        if (1 === l) g = a[b], h = a[b + 1]; else if (2 == l) g = (1 - e) * a[b] + e * a[b + d], h = (1 - e) * a[b + 1] + e * a[b + d + 1]; else if (l) {
            h = a[b];
            l = a[b + 1];
            var m = 0;
            g = [0];
            var n;
            for (n = b + d; n < c; n += d) {
                var p = a[n], q = a[n + 1];
                m += Math.sqrt((p - h) * (p - h) + (q - l) * (q - l));
                g.push(m);
                h = p;
                l = q
            }
            c = e * m;
            l = 0;
            m = g.length;
            for (n = !1; l < m;)e = l + (m - l >> 1), h = +fa(g[e], c), 0 > h ? l = e + 1 : (m = e, n = !h);
            e = n ? l : ~l;
            0 > e ? (c = (c - g[-e - 2]) / (g[-e - 1] - g[-e - 2]), b += (-e - 2) * d, g = Ha(a[b], a[b + d], c), h = Ha(a[b + 1], a[b + d + 1], c)) : (g = a[b + e * d], h = a[b + e * d + 1])
        }
        return f ?
            (f[0] = g, f[1] = h, f) : [g, h]
    }

    function em(a, b, c, d, e, f) {
        if (c == b)return null;
        if (e < a[b + d - 1])return f ? (c = a.slice(b, b + d), c[d - 1] = e, c) : null;
        if (a[c - 1] < e)return f ? (c = a.slice(c - d, c), c[d - 1] = e, c) : null;
        if (e == a[b + d - 1])return a.slice(b, b + d);
        b /= d;
        for (c /= d; b < c;)f = b + c >> 1, e < a[(f + 1) * d - 1] ? c = f : b = f + 1;
        c = a[b * d - 1];
        if (e == c)return a.slice((b - 1) * d, (b - 1) * d + d);
        f = (e - c) / (a[(b + 1) * d - 1] - c);
        c = [];
        var g;
        for (g = 0; g < d - 1; ++g)c.push(Ha(a[(b - 1) * d + g], a[b * d + g], f));
        c.push(e);
        return c
    }

    function fm(a, b, c, d, e, f) {
        var g = 0;
        if (f)return em(a, g, b[b.length - 1], c, d, e);
        if (d < a[c - 1])return e ? (a = a.slice(0, c), a[c - 1] = d, a) : null;
        if (a[a.length - 1] < d)return e ? (a = a.slice(a.length - c), a[c - 1] = d, a) : null;
        e = 0;
        for (f = b.length; e < f; ++e) {
            var h = b[e];
            if (g != h) {
                if (d < a[g + c - 1])break; else if (d <= a[h - 1])return em(a, g, h, c, d, !1);
                g = h
            }
        }
        return null
    };
    function M(a, b) {
        uf.call(this);
        this.c = null;
        this.u = this.D = this.j = -1;
        this.na(a, b)
    }

    v(M, uf);
    k = M.prototype;
    k.xk = function (a) {
        this.A ? ka(this.A, a) : this.A = a.slice();
        this.s()
    };
    k.clone = function () {
        var a = new M(null);
        a.aa(this.ja, this.A.slice());
        return a
    };
    k.Jb = function (a, b, c, d) {
        if (d < Qa(this.G(), a, b))return d;
        this.u != this.f && (this.D = Math.sqrt(Bf(this.A, 0, this.A.length, this.a, 0)), this.u = this.f);
        return Df(this.A, 0, this.A.length, this.a, this.D, !1, a, b, c, d)
    };
    k.Nk = function (a, b) {
        return Uf(this.A, 0, this.A.length, this.a, a, b)
    };
    k.Dn = function (a, b) {
        return "XYM" != this.ja && "XYZM" != this.ja ? null : em(this.A, 0, this.A.length, this.a, a, void 0 !== b ? b : !1)
    };
    k.V = function () {
        return If(this.A, 0, this.A.length, this.a)
    };
    k.Eh = function (a, b) {
        return dm(this.A, 0, this.A.length, this.a, a, b)
    };
    k.En = function () {
        var a = this.A, b = this.a, c = a[0], d = a[1], e = 0, f;
        for (f = 0 + b; f < this.A.length; f += b) {
            var g = a[f], h = a[f + 1];
            e += Math.sqrt((g - c) * (g - c) + (h - d) * (h - d));
            c = g;
            d = h
        }
        return e
    };
    function ki(a) {
        a.j != a.f && (a.c = a.Eh(.5, a.c), a.j = a.f);
        return a.c
    }

    k.od = function (a) {
        var b = [];
        b.length = Lf(this.A, 0, this.A.length, this.a, a, b, 0);
        a = new M(null);
        a.aa("XY", b);
        return a
    };
    k.T = function () {
        return "LineString"
    };
    k.Ya = function (a) {
        return Vf(this.A, 0, this.A.length, this.a, a)
    };
    k.na = function (a, b) {
        a ? (xf(this, b, a, 1), this.A || (this.A = []), this.A.length = Gf(this.A, 0, a, this.a), this.s()) : this.aa("XY", null)
    };
    k.aa = function (a, b) {
        wf(this, a, b);
        this.s()
    };
    function N(a, b) {
        uf.call(this);
        this.c = [];
        this.j = this.u = -1;
        this.na(a, b)
    }

    v(N, uf);
    k = N.prototype;
    k.yk = function (a) {
        this.A ? ka(this.A, a.ba().slice()) : this.A = a.ba().slice();
        this.c.push(this.A.length);
        this.s()
    };
    k.clone = function () {
        var a = new N(null);
        a.aa(this.ja, this.A.slice(), this.c.slice());
        return a
    };
    k.Jb = function (a, b, c, d) {
        if (d < Qa(this.G(), a, b))return d;
        this.j != this.f && (this.u = Math.sqrt(Cf(this.A, 0, this.c, this.a, 0)), this.j = this.f);
        return Ef(this.A, 0, this.c, this.a, this.u, !1, a, b, c, d)
    };
    k.Gn = function (a, b, c) {
        return "XYM" != this.ja && "XYZM" != this.ja || !this.A.length ? null : fm(this.A, this.c, this.a, a, void 0 !== b ? b : !1, void 0 !== c ? c : !1)
    };
    k.V = function () {
        return Jf(this.A, 0, this.c, this.a)
    };
    k.sb = function () {
        return this.c
    };
    k.jl = function (a) {
        if (0 > a || this.c.length <= a)return null;
        var b = new M(null);
        b.aa(this.ja, this.A.slice(a ? this.c[a - 1] : 0, this.c[a]));
        return b
    };
    k.ld = function () {
        var a = this.A, b = this.c, c = this.ja, d = [], e = 0, f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g], l = new M(null);
            l.aa(c, a.slice(e, h));
            d.push(l);
            e = h
        }
        return d
    };
    function li(a) {
        var b = [], c = a.A, d = 0, e = a.c;
        a = a.a;
        var f;
        var g = 0;
        for (f = e.length; g < f; ++g) {
            var h = e[g];
            d = dm(c, d, h, a, .5);
            ka(b, d);
            d = h
        }
        return b
    }

    k.od = function (a) {
        var b = [], c = [], d = this.A, e = this.c, f = this.a, g = 0, h = 0, l;
        var m = 0;
        for (l = e.length; m < l; ++m) {
            var n = e[m];
            h = Lf(d, g, n, f, a, b, h);
            c.push(h);
            g = n
        }
        b.length = h;
        a = new N(null);
        a.aa("XY", b, c);
        return a
    };
    k.T = function () {
        return "MultiLineString"
    };
    k.Ya = function (a) {
        a:{
            var b = this.A, c = this.c, d = this.a, e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g) {
                if (Vf(b, e, c[g], d, a)) {
                    a = !0;
                    break a
                }
                e = c[g]
            }
            a = !1
        }
        return a
    };
    k.na = function (a, b) {
        a ? (xf(this, b, a, 2), this.A || (this.A = []), a = Hf(this.A, 0, a, this.a, this.c), this.A.length = a.length ? a[a.length - 1] : 0, this.s()) : this.aa("XY", null, this.c)
    };
    k.aa = function (a, b, c) {
        wf(this, a, b);
        this.c = c;
        this.s()
    };
    function gm(a, b) {
        var c = a.ja, d = [], e = [], f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            g || (c = h.ja);
            ka(d, h.ba());
            e.push(d.length)
        }
        a.aa(c, d, e)
    };
    function O(a, b) {
        uf.call(this);
        this.na(a, b)
    }

    v(O, uf);
    k = O.prototype;
    k.Ak = function (a) {
        this.A ? ka(this.A, a.ba()) : this.A = a.ba().slice();
        this.s()
    };
    k.clone = function () {
        var a = new O(null);
        a.aa(this.ja, this.A.slice());
        return a
    };
    k.Jb = function (a, b, c, d) {
        if (d < Qa(this.G(), a, b))return d;
        var e = this.A, f = this.a, g;
        var h = 0;
        for (g = e.length; h < g; h += f) {
            var l = Ea(a, b, e[h], e[h + 1]);
            if (l < d) {
                d = l;
                for (l = 0; l < f; ++l)c[l] = e[h + l];
                c.length = f
            }
        }
        return d
    };
    k.V = function () {
        return If(this.A, 0, this.A.length, this.a)
    };
    k.ul = function (a) {
        var b = this.A ? this.A.length / this.a : 0;
        if (0 > a || b <= a)return null;
        b = new C(null);
        b.aa(this.ja, this.A.slice(a * this.a, (a + 1) * this.a));
        return b
    };
    k.ee = function () {
        var a = this.A, b = this.ja, c = this.a, d = [], e;
        var f = 0;
        for (e = a.length; f < e; f += c) {
            var g = new C(null);
            g.aa(b, a.slice(f, f + c));
            d.push(g)
        }
        return d
    };
    k.T = function () {
        return "MultiPoint"
    };
    k.Ya = function (a) {
        var b = this.A, c = this.a, d;
        var e = 0;
        for (d = b.length; e < d; e += c) {
            var f = b[e];
            var g = b[e + 1];
            if (Sa(a, f, g))return !0
        }
        return !1
    };
    k.na = function (a, b) {
        a ? (xf(this, b, a, 1), this.A || (this.A = []), this.A.length = Gf(this.A, 0, a, this.a), this.s()) : this.aa("XY", null)
    };
    k.aa = function (a, b) {
        wf(this, a, b);
        this.s()
    };
    function P(a, b) {
        uf.call(this);
        this.c = [];
        this.u = -1;
        this.D = null;
        this.I = this.B = this.C = -1;
        this.j = null;
        this.na(a, b)
    }

    v(P, uf);
    k = P.prototype;
    k.Bk = function (a) {
        if (this.A) {
            var b = this.A.length;
            ka(this.A, a.ba());
            a = a.sb().slice();
            var c;
            var d = 0;
            for (c = a.length; d < c; ++d)a[d] += b
        } else this.A = a.ba().slice(), a = a.sb().slice(), this.c.push();
        this.c.push(a);
        this.s()
    };
    k.clone = function () {
        for (var a = new P(null), b = this.c.length, c = Array(b), d = 0; d < b; ++d)c[d] = this.c[d].slice();
        hm(a, this.ja, this.A.slice(), c);
        return a
    };
    k.Jb = function (a, b, c, d) {
        if (d < Qa(this.G(), a, b))return d;
        if (this.B != this.f) {
            var e = this.c, f = 0, g = 0, h;
            var l = 0;
            for (h = e.length; l < h; ++l) {
                var m = e[l];
                g = Cf(this.A, f, m, this.a, g);
                f = m[m.length - 1]
            }
            this.C = Math.sqrt(g);
            this.B = this.f
        }
        e = mi(this);
        f = this.c;
        g = this.a;
        l = this.C;
        h = 0;
        m = [NaN, NaN];
        var n;
        var p = 0;
        for (n = f.length; p < n; ++p) {
            var q = f[p];
            d = Ef(e, h, q, g, l, !0, a, b, c, d, m);
            h = q[q.length - 1]
        }
        return d
    };
    k.Pc = function (a, b) {
        a:{
            var c = mi(this), d = this.c, e = 0;
            if (d.length) {
                var f;
                var g = 0;
                for (f = d.length; g < f; ++g) {
                    var h = d[g];
                    if (Sf(c, e, h, this.a, a, b)) {
                        a = !0;
                        break a
                    }
                    e = h[h.length - 1]
                }
            }
            a = !1
        }
        return a
    };
    k.Hn = function () {
        var a = mi(this), b = this.c, c = 0, d = 0, e;
        var f = 0;
        for (e = b.length; f < e; ++f) {
            var g = b[f];
            d += zf(a, c, g, this.a);
            c = g[g.length - 1]
        }
        return d
    };
    k.V = function (a) {
        if (void 0 !== a) {
            var b = mi(this).slice();
            $f(b, this.c, this.a, a)
        } else b = this.A;
        return Kf(b, 0, this.c, this.a)
    };
    function ni(a) {
        if (a.u != a.f) {
            var b = a.A, c = a.c, d = a.a, e = 0, f = [], g;
            var h = 0;
            for (g = c.length; h < g; ++h) {
                var l = c[h];
                e = Za(b, e, l[0], d);
                f.push((e[0] + e[2]) / 2, (e[1] + e[3]) / 2);
                e = l[l.length - 1]
            }
            b = mi(a);
            c = a.c;
            d = a.a;
            h = 0;
            g = [];
            l = 0;
            for (e = c.length; l < e; ++l) {
                var m = c[l];
                g = Tf(b, h, m, d, f, 2 * l, g);
                h = m[m.length - 1]
            }
            a.D = g;
            a.u = a.f
        }
        return a.D
    }

    k.fl = function () {
        var a = new O(null);
        a.aa("XY", ni(this).slice());
        return a
    };
    function mi(a) {
        if (a.I != a.f) {
            var b = a.A;
            a:{
                var c = a.c;
                var d;
                var e = 0;
                for (d = c.length; e < d; ++e)if (!Yf(b, c[e], a.a, void 0)) {
                    c = !1;
                    break a
                }
                c = !0
            }
            c ? a.j = b : (a.j = b.slice(), a.j.length = $f(a.j, a.c, a.a));
            a.I = a.f
        }
        return a.j
    }

    k.od = function (a) {
        var b = [], c = [], d = this.A, e = this.c, f = this.a;
        a = Math.sqrt(a);
        var g = 0, h = 0, l;
        var m = 0;
        for (l = e.length; m < l; ++m) {
            var n = e[m], p = [];
            h = Mf(d, g, n, f, a, b, h, p);
            c.push(p);
            g = n[n.length - 1]
        }
        b.length = h;
        d = new P(null);
        hm(d, "XY", b, c);
        return d
    };
    k.vl = function (a) {
        if (0 > a || this.c.length <= a)return null;
        if (a) {
            var b = this.c[a - 1];
            b = b[b.length - 1]
        } else b = 0;
        a = this.c[a].slice();
        var c = a[a.length - 1];
        if (b) {
            var d;
            var e = 0;
            for (d = a.length; e < d; ++e)a[e] -= b
        }
        e = new D(null);
        e.aa(this.ja, this.A.slice(b, c), a);
        return e
    };
    k.$d = function () {
        var a = this.ja, b = this.A, c = this.c, d = [], e = 0, f, g;
        var h = 0;
        for (f = c.length; h < f; ++h) {
            var l = c[h].slice(), m = l[l.length - 1];
            if (e) {
                var n = 0;
                for (g = l.length; n < g; ++n)l[n] -= e
            }
            n = new D(null);
            n.aa(a, b.slice(e, m), l);
            d.push(n);
            e = m
        }
        return d
    };
    k.T = function () {
        return "MultiPolygon"
    };
    k.Ya = function (a) {
        a:{
            var b = mi(this), c = this.c, d = this.a, e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g) {
                var h = c[g];
                if (Wf(b, e, h, d, a)) {
                    a = !0;
                    break a
                }
                e = h[h.length - 1]
            }
            a = !1
        }
        return a
    };
    k.na = function (a, b) {
        if (a) {
            xf(this, b, a, 3);
            this.A || (this.A = []);
            b = this.A;
            var c = this.a, d = this.c, e = 0;
            d = d ? d : [];
            var f = 0, g;
            var h = 0;
            for (g = a.length; h < g; ++h)e = Hf(b, e, a[h], c, d[f]), d[f++] = e, e = e[e.length - 1];
            d.length = f;
            d.length ? (a = d[d.length - 1], this.A.length = a.length ? a[a.length - 1] : 0) : this.A.length = 0;
            this.s()
        } else hm(this, "XY", null, this.c)
    };
    function hm(a, b, c, d) {
        wf(a, b, c);
        a.c = d;
        a.s()
    }

    function im(a, b) {
        var c = a.ja, d = [], e = [], f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            g || (c = h.ja);
            var l = d.length;
            var m = h.sb();
            var n;
            var p = 0;
            for (n = m.length; p < n; ++p)m[p] += l;
            ka(d, h.ba());
            e.push(m)
        }
        hm(a, c, d, e)
    };
    function jm(a) {
        a = a ? a : {};
        Yl.call(this);
        this.b = a.geometryName
    }

    v(jm, bm);
    function km(a, b) {
        if (!a)return null;
        if ("number" === typeof a.x && "number" === typeof a.y)var c = "Point"; else if (a.points) c = "MultiPoint"; else if (a.paths) c = 1 === a.paths.length ? "LineString" : "MultiLineString"; else if (a.rings) {
            var d = a.rings, e = lm(a), f = [], g = [];
            c = [];
            var h;
            var l = 0;
            for (h = d.length; l < h; ++l)f.length = 0, Gf(f, 0, d[l], e.length), Xf(f, 0, f.length, e.length) ? g.push([d[l]]) : c.push(d[l]);
            for (; c.length;) {
                d = c.shift();
                e = !1;
                for (l = g.length - 1; 0 <= l; l--)if (Ta((new Of(g[l][0])).G(), (new Of(d)).G())) {
                    g[l].push(d);
                    e = !0;
                    break
                }
                e ||
                g.push([d.reverse()])
            }
            a = rb({}, a);
            1 === g.length ? (c = "Polygon", a.rings = g[0]) : (c = "MultiPolygon", a.rings = g)
        }
        return am((0, mm[c])(a), !1, b)
    }

    function lm(a) {
        var b = "XY";
        !0 === a.hasZ && !0 === a.hasM ? b = "XYZM" : !0 === a.hasZ ? b = "XYZ" : !0 === a.hasM && (b = "XYM");
        return b
    }

    function nm(a) {
        a = a.ja;
        return {hasZ: "XYZ" === a || "XYZM" === a, hasM: "XYM" === a || "XYZM" === a}
    }

    var mm = {
        Point: function (a) {
            return void 0 !== a.m && void 0 !== a.z ? new C([a.x, a.y, a.z, a.m], "XYZM") : void 0 !== a.z ? new C([a.x, a.y, a.z], "XYZ") : void 0 !== a.m ? new C([a.x, a.y, a.m], "XYM") : new C([a.x, a.y])
        }, LineString: function (a) {
            return new M(a.paths[0], lm(a))
        }, Polygon: function (a) {
            return new D(a.rings, lm(a))
        }, MultiPoint: function (a) {
            return new O(a.points, lm(a))
        }, MultiLineString: function (a) {
            return new N(a.paths, lm(a))
        }, MultiPolygon: function (a) {
            return new P(a.rings, lm(a))
        }
    }, om = {
        Point: function (a) {
            var b = a.V(), c;
            a = a.ja;
            "XYZ" === a ? c = {x: b[0], y: b[1], z: b[2]} : "XYM" === a ? c = {
                x: b[0],
                y: b[1],
                m: b[2]
            } : "XYZM" === a ? c = {x: b[0], y: b[1], z: b[2], m: b[3]} : "XY" === a ? c = {
                x: b[0],
                y: b[1]
            } : va(!1, 34);
            return c
        }, LineString: function (a) {
            var b = nm(a);
            return {hasZ: b.hasZ, hasM: b.hasM, paths: [a.V()]}
        }, Polygon: function (a) {
            var b = nm(a);
            return {hasZ: b.hasZ, hasM: b.hasM, rings: a.V(!1)}
        }, MultiPoint: function (a) {
            var b = nm(a);
            return {hasZ: b.hasZ, hasM: b.hasM, points: a.V()}
        }, MultiLineString: function (a) {
            var b = nm(a);
            return {hasZ: b.hasZ, hasM: b.hasM, paths: a.V()}
        }, MultiPolygon: function (a) {
            var b =
                nm(a);
            a = a.V(!1);
            for (var c = [], d = 0; d < a.length; d++)for (var e = a[d].length - 1; 0 <= e; e--)c.push(a[d][e]);
            return {hasZ: b.hasZ, hasM: b.hasM, rings: c}
        }
    };
    k = jm.prototype;
    k.Uc = function (a, b) {
        var c = km(a.geometry, b), d = new Bl;
        this.b && d.Wc(this.b);
        d.Ra(c);
        b && b.mg && a.attributes[b.mg] && d.kc(a.attributes[b.mg]);
        a.attributes && d.H(a.attributes);
        return d
    };
    k.Gg = function (a, b) {
        b = b ? b : {};
        if (a.features) {
            var c = [], d = a.features, e;
            b.mg = a.objectIdFieldName;
            a = 0;
            for (e = d.length; a < e; ++a)c.push(this.Uc(d[a], b));
            return c
        }
        return [this.Uc(a, b)]
    };
    k.Kg = function (a, b) {
        return km(a, b)
    };
    k.Ng = function (a) {
        return a.spatialReference && a.spatialReference.wkid ? Wb("EPSG:" + a.spatialReference.wkid) : null
    };
    function pm(a, b) {
        return (0, om[a.T()])(am(a, !0, b), b)
    }

    k.ue = function (a, b) {
        return pm(a, $l(this, b))
    };
    k.cd = function (a, b) {
        b = $l(this, b);
        var c = {}, d = a.W();
        d && (c.geometry = pm(d, b), b && b.featureProjection && (c.geometry.spatialReference = {wkid: Wb(b.featureProjection).qb.split(":").pop()}));
        b = a.N();
        delete b[a.c];
        c.attributes = ub(b) ? {} : b;
        return c
    };
    k.se = function (a, b) {
        b = $l(this, b);
        var c = [], d;
        var e = 0;
        for (d = a.length; e < d; ++e)c.push(this.cd(a[e], b));
        return {features: c}
    };
    function qm(a) {
        this.lc = a
    };
    function rm(a, b) {
        this.lc = a;
        this.b = Array.prototype.slice.call(arguments, 1);
        va(2 <= this.b.length, 57)
    }

    v(rm, qm);
    function sm(a) {
        var b = ["And"].concat(Array.prototype.slice.call(arguments));
        rm.apply(this, b)
    }

    v(sm, rm);
    function tm(a, b, c) {
        this.lc = "BBOX";
        this.geometryName = a;
        this.extent = b;
        this.srsName = c
    }

    v(tm, qm);
    function um(a, b) {
        this.lc = a;
        this.b = b
    }

    v(um, qm);
    function vm(a, b, c) {
        um.call(this, "During", a);
        this.a = b;
        this.f = c
    }

    v(vm, um);
    function wm(a, b, c, d) {
        um.call(this, a, b);
        this.f = c;
        this.a = d
    }

    v(wm, um);
    function xm(a, b, c) {
        wm.call(this, "PropertyIsEqualTo", a, b, c)
    }

    v(xm, wm);
    function ym(a, b) {
        wm.call(this, "PropertyIsGreaterThan", a, b)
    }

    v(ym, wm);
    function zm(a, b) {
        wm.call(this, "PropertyIsGreaterThanOrEqualTo", a, b)
    }

    v(zm, wm);
    function Am(a, b, c, d) {
        this.lc = a;
        this.geometryName = b || "the_geom";
        this.geometry = c;
        this.srsName = d
    }

    v(Am, qm);
    function Bm(a, b, c) {
        Am.call(this, "Intersects", a, b, c)
    }

    v(Bm, Am);
    function Cm(a, b, c) {
        um.call(this, "PropertyIsBetween", a);
        this.a = b;
        this.f = c
    }

    v(Cm, um);
    function Dm(a, b, c, d, e, f) {
        um.call(this, "PropertyIsLike", a);
        this.c = b;
        this.g = void 0 !== c ? c : "*";
        this.i = void 0 !== d ? d : ".";
        this.f = void 0 !== e ? e : "!";
        this.a = f
    }

    v(Dm, um);
    function Em(a) {
        um.call(this, "PropertyIsNull", a)
    }

    v(Em, um);
    function Fm(a, b) {
        wm.call(this, "PropertyIsLessThan", a, b)
    }

    v(Fm, wm);
    function Gm(a, b) {
        wm.call(this, "PropertyIsLessThanOrEqualTo", a, b)
    }

    v(Gm, wm);
    function Hm(a) {
        this.lc = "Not";
        this.condition = a
    }

    v(Hm, qm);
    function Im(a, b, c) {
        wm.call(this, "PropertyIsNotEqualTo", a, b, c)
    }

    v(Im, wm);
    function Jm(a) {
        var b = ["Or"].concat(Array.prototype.slice.call(arguments));
        rm.apply(this, b)
    }

    v(Jm, rm);
    function Km(a, b, c) {
        Am.call(this, "Within", a, b, c)
    }

    v(Km, Am);
    function Lm(a) {
        var b = [null].concat(Array.prototype.slice.call(arguments));
        return new (Function.prototype.bind.apply(sm, b))
    }

    function Mm(a, b, c) {
        return new tm(a, b, c)
    };
    function Nm(a) {
        rf.call(this);
        this.a = a ? a : null;
        Om(this)
    }

    v(Nm, rf);
    function Pm(a) {
        var b = [], c;
        var d = 0;
        for (c = a.length; d < c; ++d)b.push(a[d].clone());
        return b
    }

    function Qm(a) {
        var b;
        if (a.a) {
            var c = 0;
            for (b = a.a.length; c < b; ++c)Mc(a.a[c], "change", a.s, a)
        }
    }

    function Om(a) {
        var b;
        if (a.a) {
            var c = 0;
            for (b = a.a.length; c < b; ++c)y(a.a[c], "change", a.s, a)
        }
    }

    k = Nm.prototype;
    k.clone = function () {
        var a = new Nm(null);
        a.yj(this.a);
        return a
    };
    k.Jb = function (a, b, c, d) {
        if (d < Qa(this.G(), a, b))return d;
        var e = this.a, f;
        var g = 0;
        for (f = e.length; g < f; ++g)d = e[g].Jb(a, b, c, d);
        return d
    };
    k.Pc = function (a, b) {
        var c = this.a, d;
        var e = 0;
        for (d = c.length; e < d; ++e)if (c[e].Pc(a, b))return !0;
        return !1
    };
    k.De = function (a) {
        Wa(a);
        for (var b = this.a, c = 0, d = b.length; c < d; ++c)bb(a, b[c].G());
        return a
    };
    k.kd = function () {
        return Pm(this.a)
    };
    k.ae = function (a) {
        this.l != this.f && (sb(this.i), this.g = 0, this.l = this.f);
        if (0 > a || this.g && a < this.g)return this;
        var b = a.toString();
        if (this.i.hasOwnProperty(b))return this.i[b];
        var c = [], d = this.a, e = !1, f;
        var g = 0;
        for (f = d.length; g < f; ++g) {
            var h = d[g], l = h.ae(a);
            c.push(l);
            l !== h && (e = !0)
        }
        if (e)return a = new Nm(null), Qm(a), a.a = c, Om(a), a.s(), this.i[b] = a;
        this.g = a;
        return this
    };
    k.T = function () {
        return "GeometryCollection"
    };
    k.Ya = function (a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d)if (b[d].Ya(a))return !0;
        return !1
    };
    k.rotate = function (a, b) {
        for (var c = this.a, d = 0, e = c.length; d < e; ++d)c[d].rotate(a, b);
        this.s()
    };
    k.scale = function (a, b, c) {
        c || (c = lb(this.G()));
        for (var d = this.a, e = 0, f = d.length; e < f; ++e)d[e].scale(a, b, c);
        this.s()
    };
    k.yj = function (a) {
        a = Pm(a);
        Qm(this);
        this.a = a;
        Om(this);
        this.s()
    };
    k.Fc = function (a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d)b[d].Fc(a);
        this.s()
    };
    k.translate = function (a, b) {
        var c = this.a, d;
        var e = 0;
        for (d = c.length; e < d; ++e)c[e].translate(a, b);
        this.s()
    };
    k.ka = function () {
        Qm(this);
        rf.prototype.ka.call(this)
    };
    function Rm(a) {
        a = a ? a : {};
        Yl.call(this);
        this.defaultDataProjection = Wb(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
        a.featureProjection && (this.i = Wb(a.featureProjection));
        this.b = a.geometryName
    }

    v(Rm, bm);
    function Sm(a, b) {
        return a ? am((0, Tm[a.type])(a), !1, b) : null
    }

    function Um(a, b) {
        return (0, Vm[a.T()])(am(a, !0, b), b)
    }

    var Tm = {
        Point: function (a) {
            return new C(a.coordinates)
        }, LineString: function (a) {
            return new M(a.coordinates)
        }, Polygon: function (a) {
            return new D(a.coordinates)
        }, MultiPoint: function (a) {
            return new O(a.coordinates)
        }, MultiLineString: function (a) {
            return new N(a.coordinates)
        }, MultiPolygon: function (a) {
            return new P(a.coordinates)
        }, GeometryCollection: function (a, b) {
            a = a.geometries.map(function (a) {
                return Sm(a, b)
            });
            return new Nm(a)
        }
    }, Vm = {
        Point: function (a) {
            return {type: "Point", coordinates: a.V()}
        }, LineString: function (a) {
            return {
                type: "LineString",
                coordinates: a.V()
            }
        }, Polygon: function (a, b) {
            if (b)var c = b.rightHanded;
            return {type: "Polygon", coordinates: a.V(c)}
        }, MultiPoint: function (a) {
            return {type: "MultiPoint", coordinates: a.V()}
        }, MultiLineString: function (a) {
            return {type: "MultiLineString", coordinates: a.V()}
        }, MultiPolygon: function (a, b) {
            if (b)var c = b.rightHanded;
            return {type: "MultiPolygon", coordinates: a.V(c)}
        }, GeometryCollection: function (a, b) {
            return {
                type: "GeometryCollection", geometries: a.a.map(function (a) {
                    var c = rb({}, b);
                    delete c.featureProjection;
                    return Um(a,
                        c)
                })
            }
        }, Circle: function () {
            return {type: "GeometryCollection", geometries: []}
        }
    };
    k = Rm.prototype;
    k.Uc = function (a, b) {
        a = "Feature" === a.type ? a : {type: "Feature", geometry: a};
        b = Sm(a.geometry, b);
        var c = new Bl;
        this.b && c.Wc(this.b);
        c.Ra(b);
        void 0 !== a.id && c.kc(a.id);
        a.properties && c.H(a.properties);
        return c
    };
    k.Gg = function (a, b) {
        if ("FeatureCollection" === a.type) {
            var c = [];
            a = a.features;
            var d;
            var e = 0;
            for (d = a.length; e < d; ++e)c.push(this.Uc(a[e], b))
        } else c = [this.Uc(a, b)];
        return c
    };
    k.Kg = function (a, b) {
        return Sm(a, b)
    };
    k.Ng = function (a) {
        a = a.crs;
        var b;
        a ? "name" == a.type ? b = Wb(a.properties.name) : "EPSG" == a.type ? b = Wb("EPSG:" + a.properties.code) : va(!1, 36) : b = this.defaultDataProjection;
        return b
    };
    k.cd = function (a, b) {
        b = $l(this, b);
        var c = {type: "Feature"}, d = a.a;
        void 0 !== d && (c.id = d);
        (d = a.W()) ? c.geometry = Um(d, b) : c.geometry = null;
        b = a.N();
        delete b[a.c];
        ub(b) ? c.properties = null : c.properties = b;
        return c
    };
    k.se = function (a, b) {
        b = $l(this, b);
        var c = [], d;
        var e = 0;
        for (d = a.length; e < d; ++e)c.push(this.cd(a[e], b));
        return {type: "FeatureCollection", features: c}
    };
    k.ue = function (a, b) {
        return Um(a, $l(this, b))
    };
    function Wm() {
        this.f = new XMLSerializer;
        Yl.call(this)
    }

    v(Wm, Yl);
    k = Wm.prototype;
    k.T = function () {
        return "xml"
    };
    k.Ub = function (a, b) {
        return Hl(a) ? Xm(this, a, b) : Il(a) ? this.Fg(a, b) : "string" === typeof a ? (a = Jl(a), Xm(this, a, b)) : null
    };
    function Xm(a, b, c) {
        a = Ym(a, b, c);
        return 0 < a.length ? a[0] : null
    }

    k.Fg = function () {
        return null
    };
    k.Oa = function (a, b) {
        return Hl(a) ? Ym(this, a, b) : Il(a) ? this.Ac(a, b) : "string" === typeof a ? (a = Jl(a), Ym(this, a, b)) : []
    };
    function Ym(a, b, c) {
        var d = [];
        for (b = b.firstChild; b; b = b.nextSibling)b.nodeType == Node.ELEMENT_NODE && ka(d, a.Ac(b, c));
        return d
    }

    k.Vc = function (a, b) {
        if (Hl(a))return null;
        if (Il(a))return this.kj(a, b);
        "string" === typeof a && Jl(a);
        return null
    };
    k.kj = function () {
        return null
    };
    k.ob = function (a) {
        return Hl(a) ? this.Mg(a) : Il(a) ? this.vf(a) : "string" === typeof a ? (a = Jl(a), this.Mg(a)) : null
    };
    k.Mg = function () {
        return this.defaultDataProjection
    };
    k.vf = function () {
        return this.defaultDataProjection
    };
    k.Gd = function (a, b) {
        return this.f.serializeToString(this.$g(a, b))
    };
    k.$g = function () {
        return null
    };
    k.Xb = function (a, b) {
        a = this.Yb(a, b);
        return this.f.serializeToString(a)
    };
    k.Yb = function () {
        return null
    };
    k.dd = function (a, b) {
        a = this.te(a, b);
        return this.f.serializeToString(a)
    };
    k.te = function () {
        return null
    };
    function Zm(a) {
        a = a ? a : {};
        this.featureType = a.featureType;
        this.featureNS = a.featureNS;
        this.srsName = a.srsName;
        this.schemaLocation = "";
        this.b = {};
        this.b["http://www.opengis.net/gml"] = {
            featureMember: Nl(Zm.prototype.ie),
            featureMembers: Nl(Zm.prototype.ie)
        };
        Wm.call(this)
    }

    v(Zm, Wm);
    var $m = /^[\s\xa0]*$/;
    k = Zm.prototype;
    k.ie = function (a, b) {
        var c = a.localName, d = null;
        if ("FeatureCollection" == c) "http://www.opengis.net/wfs" === a.namespaceURI ? d = L([], this.b, a, b, this) : d = L(null, this.b, a, b, this); else if ("featureMembers" == c || "featureMember" == c) {
            var e = b[0], f = e.featureType, g = e.featureNS, h;
            if (!f && a.childNodes) {
                f = [];
                g = {};
                var l = 0;
                for (h = a.childNodes.length; l < h; ++l) {
                    var m = a.childNodes[l];
                    if (1 === m.nodeType) {
                        var n = m.nodeName.split(":").pop();
                        if (-1 === f.indexOf(n)) {
                            var p = "", q = 0;
                            m = m.namespaceURI;
                            for (var t in g) {
                                if (g[t] === m) {
                                    p = t;
                                    break
                                }
                                ++q
                            }
                            p ||
                            (p = "p" + q, g[p] = m);
                            f.push(p + ":" + n)
                        }
                    }
                }
                "featureMember" != c && (e.featureType = f, e.featureNS = g)
            }
            "string" === typeof g && (l = g, g = {}, g.p0 = l);
            e = {};
            f = Array.isArray(f) ? f : [f];
            for (var u in g) {
                n = {};
                l = 0;
                for (h = f.length; l < h; ++l)(-1 === f[l].indexOf(":") ? "p0" : f[l].split(":")[0]) === u && (n[f[l].split(":").pop()] = "featureMembers" == c ? Ll(this.Eg, this) : Nl(this.Eg, this));
                e[g[u]] = n
            }
            "featureMember" == c ? d = L(void 0, e, a, b) : d = L([], e, a, b)
        }
        null === d && (d = []);
        return d
    };
    k.sf = function (a, b) {
        var c = b[0];
        c.srsName = a.firstElementChild.getAttribute("srsName");
        if (a = L(null, this.eh, a, b, this))return am(a, !1, c)
    };
    k.Eg = function (a, b) {
        var c;
        (c = a.getAttribute("fid")) || (c = a.getAttributeNS("http://www.opengis.net/gml", "id") || "");
        var d = {}, e;
        for (a = a.firstElementChild; a; a = a.nextElementSibling) {
            var f = a.localName;
            if (0 === a.childNodes.length || 1 === a.childNodes.length && (3 === a.firstChild.nodeType || 4 === a.firstChild.nodeType)) {
                var g = Fl(a, !1);
                $m.test(g) && (g = void 0);
                d[f] = g
            } else"boundedBy" !== f && (e = f), d[f] = this.sf(a, b)
        }
        b = new Bl(d);
        e && b.Wc(e);
        c && b.kc(c);
        return b
    };
    k.pj = function (a, b) {
        if (a = this.rf(a, b))return b = new C(null), b.aa("XYZ", a), b
    };
    k.nj = function (a, b) {
        if (a = L([], this.Xj, a, b, this))return new O(a)
    };
    k.mj = function (a, b) {
        if (a = L([], this.Wj, a, b, this))return b = new N(null), gm(b, a), b
    };
    k.oj = function (a, b) {
        if (a = L([], this.Yj, a, b, this))return b = new P(null), im(b, a), b
    };
    k.gj = function (a, b) {
        Ul(this.ak, a, b, this)
    };
    k.Vh = function (a, b) {
        Ul(this.Uj, a, b, this)
    };
    k.hj = function (a, b) {
        Ul(this.bk, a, b, this)
    };
    k.tf = function (a, b) {
        if (a = this.rf(a, b))return b = new M(null), b.aa("XYZ", a), b
    };
    k.Jp = function (a, b) {
        if (a = L(null, this.ve, a, b, this))return a
    };
    k.lj = function (a, b) {
        if (a = this.rf(a, b))return b = new Of(null), Pf(b, "XYZ", a), b
    };
    k.uf = function (a, b) {
        if ((a = L([null], this.If, a, b, this)) && a[0]) {
            b = new D(null);
            var c = a[0], d = [c.length], e;
            var f = 1;
            for (e = a.length; f < e; ++f)ka(c, a[f]), d.push(c.length);
            b.aa("XYZ", c, d);
            return b
        }
    };
    k.rf = function (a, b) {
        return L(null, this.ve, a, b, this)
    };
    k.Xj = {"http://www.opengis.net/gml": {pointMember: Ll(Zm.prototype.gj), pointMembers: Ll(Zm.prototype.gj)}};
    k.Wj = {
        "http://www.opengis.net/gml": {
            lineStringMember: Ll(Zm.prototype.Vh),
            lineStringMembers: Ll(Zm.prototype.Vh)
        }
    };
    k.Yj = {"http://www.opengis.net/gml": {polygonMember: Ll(Zm.prototype.hj), polygonMembers: Ll(Zm.prototype.hj)}};
    k.ak = {"http://www.opengis.net/gml": {Point: Ll(Zm.prototype.rf)}};
    k.Uj = {"http://www.opengis.net/gml": {LineString: Ll(Zm.prototype.tf)}};
    k.bk = {"http://www.opengis.net/gml": {Polygon: Ll(Zm.prototype.uf)}};
    k.we = {"http://www.opengis.net/gml": {LinearRing: Nl(Zm.prototype.Jp)}};
    k.kj = function (a, b) {
        return (a = this.sf(a, [Zl(this, a, b ? b : {})])) ? a : null
    };
    k.Ac = function (a, b) {
        var c = {featureType: this.featureType, featureNS: this.featureNS};
        b && rb(c, Zl(this, a, b));
        return this.ie(a, [c]) || []
    };
    k.vf = function (a) {
        return Wb(this.srsName ? this.srsName : a.firstElementChild.getAttribute("srsName"))
    };
    function an(a) {
        a = Fl(a, !1);
        return bn(a)
    }

    function bn(a) {
        if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a))return void 0 !== a[1] || !1
    }

    function cn(a) {
        a = Fl(a, !1);
        a = Date.parse(a);
        return isNaN(a) ? void 0 : a / 1E3
    }

    function dn(a) {
        a = Fl(a, !1);
        return en(a)
    }

    function en(a) {
        if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))return parseFloat(a[1])
    }

    function fn(a) {
        a = Fl(a, !1);
        return gn(a)
    }

    function gn(a) {
        if (a = /^\s*(\d+)\s*$/.exec(a))return parseInt(a[1], 10)
    }

    function Q(a) {
        return Fl(a, !1).trim()
    }

    function hn(a, b) {
        jn(a, b ? "1" : "0")
    }

    function kn(a, b) {
        a.appendChild(Dl.createTextNode(b.toPrecision()))
    }

    function ln(a, b) {
        a.appendChild(Dl.createTextNode(b.toString()))
    }

    function jn(a, b) {
        a.appendChild(Dl.createTextNode(b))
    };
    function mn(a) {
        a = a ? a : {};
        Zm.call(this, a);
        this.o = void 0 !== a.surface ? a.surface : !1;
        this.c = void 0 !== a.curve ? a.curve : !1;
        this.g = void 0 !== a.multiCurve ? a.multiCurve : !0;
        this.j = void 0 !== a.multiSurface ? a.multiSurface : !0;
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd";
        this.hasZ = void 0 !== a.hasZ ? a.hasZ : !1
    }

    v(mn, Zm);
    k = mn.prototype;
    k.Np = function (a, b) {
        if (a = L([], this.Vj, a, b, this))return b = new N(null), gm(b, a), b
    };
    k.Op = function (a, b) {
        if (a = L([], this.Zj, a, b, this))return b = new P(null), im(b, a), b
    };
    k.vh = function (a, b) {
        Ul(this.Rj, a, b, this)
    };
    k.Kj = function (a, b) {
        Ul(this.dk, a, b, this)
    };
    k.Rp = function (a, b) {
        return L([null], this.$j, a, b, this)
    };
    k.Up = function (a, b) {
        return L([null], this.ck, a, b, this)
    };
    k.Sp = function (a, b) {
        return L([null], this.If, a, b, this)
    };
    k.Mp = function (a, b) {
        return L([null], this.ve, a, b, this)
    };
    k.qm = function (a, b) {
        (a = L(void 0, this.we, a, b, this)) && b[b.length - 1].push(a)
    };
    k.Jk = function (a, b) {
        (a = L(void 0, this.we, a, b, this)) && (b[b.length - 1][0] = a)
    };
    k.qj = function (a, b) {
        if ((a = L([null], this.ek, a, b, this)) && a[0]) {
            b = new D(null);
            var c = a[0], d = [c.length], e;
            var f = 1;
            for (e = a.length; f < e; ++f)ka(c, a[f]), d.push(c.length);
            b.aa("XYZ", c, d);
            return b
        }
    };
    k.ij = function (a, b) {
        if (a = L([null], this.Sj, a, b, this))return b = new M(null), b.aa("XYZ", a), b
    };
    k.Ip = function (a, b) {
        a = L([null], this.Tj, a, b, this);
        return Va(a[1][0], a[1][1], a[2][0], a[2][1])
    };
    k.Kp = function (a, b) {
        var c = Fl(a, !1), d = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/;
        a = [];
        for (var e; e = d.exec(c);)a.push(parseFloat(e[1])), c = c.substr(e[0].length);
        if ("" === c) {
            b = b[0].srsName;
            c = "enu";
            b && (c = Wb(b).a);
            if ("neu" === c)for (b = 0, c = a.length; b < c; b += 3)d = a[b], a[b] = a[b + 1], a[b + 1] = d;
            b = a.length;
            2 == b && a.push(0);
            if (b)return a
        }
    };
    k.Jg = function (a, b) {
        var c = Fl(a, !1).replace(/^\s*|\s*$/g, ""), d = b[0].srsName, e = a.parentNode.getAttribute("srsDimension");
        b = "enu";
        d && (b = Wb(d).a);
        c = c.split(/\s+/);
        d = 2;
        a.getAttribute("srsDimension") ? d = gn(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = gn(a.getAttribute("dimension")) : e && (d = gn(e));
        for (var f, g = [], h = 0,
                 l = c.length; h < l; h += d)a = parseFloat(c[h]), e = parseFloat(c[h + 1]), f = 3 === d ? parseFloat(c[h + 2]) : 0, "en" === b.substr(0, 2) ? g.push(a, e, f) : g.push(e, a, f);
        return g
    };
    k.ve = {"http://www.opengis.net/gml": {pos: Nl(mn.prototype.Kp), posList: Nl(mn.prototype.Jg)}};
    k.If = {"http://www.opengis.net/gml": {interior: mn.prototype.qm, exterior: mn.prototype.Jk}};
    k.eh = {
        "http://www.opengis.net/gml": {
            Point: Nl(Zm.prototype.pj),
            MultiPoint: Nl(Zm.prototype.nj),
            LineString: Nl(Zm.prototype.tf),
            MultiLineString: Nl(Zm.prototype.mj),
            LinearRing: Nl(Zm.prototype.lj),
            Polygon: Nl(Zm.prototype.uf),
            MultiPolygon: Nl(Zm.prototype.oj),
            Surface: Nl(mn.prototype.qj),
            MultiSurface: Nl(mn.prototype.Op),
            Curve: Nl(mn.prototype.ij),
            MultiCurve: Nl(mn.prototype.Np),
            Envelope: Nl(mn.prototype.Ip)
        }
    };
    k.Vj = {"http://www.opengis.net/gml": {curveMember: Ll(mn.prototype.vh), curveMembers: Ll(mn.prototype.vh)}};
    k.Zj = {"http://www.opengis.net/gml": {surfaceMember: Ll(mn.prototype.Kj), surfaceMembers: Ll(mn.prototype.Kj)}};
    k.Rj = {"http://www.opengis.net/gml": {LineString: Ll(Zm.prototype.tf), Curve: Ll(mn.prototype.ij)}};
    k.dk = {"http://www.opengis.net/gml": {Polygon: Ll(Zm.prototype.uf), Surface: Ll(mn.prototype.qj)}};
    k.ek = {"http://www.opengis.net/gml": {patches: Nl(mn.prototype.Rp)}};
    k.Sj = {"http://www.opengis.net/gml": {segments: Nl(mn.prototype.Up)}};
    k.Tj = {"http://www.opengis.net/gml": {lowerCorner: Ll(mn.prototype.Jg), upperCorner: Ll(mn.prototype.Jg)}};
    k.$j = {"http://www.opengis.net/gml": {PolygonPatch: Nl(mn.prototype.Sp)}};
    k.ck = {"http://www.opengis.net/gml": {LineStringSegment: Nl(mn.prototype.Mp)}};
    function nn(a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        d = d.srsName;
        b = b.V();
        for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h) {
            g = b[h];
            var l = h, m = c, n = "enu";
            d && (n = Wb(d).a);
            n = "en" === n.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0];
            m && (n += " " + (g[2] || 0));
            f[l] = n
        }
        jn(a, f.join(" "))
    }

    k.yi = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = El(a.namespaceURI, "pos");
        a.appendChild(d);
        c = c[c.length - 1];
        a = c.hasZ;
        var e = c.srsName;
        c = "enu";
        e && (c = Wb(e).a);
        b = b.V();
        c = "en" === c.substr(0, 2) ? b[0] + " " + b[1] : b[1] + " " + b[0];
        a && (c += " " + (b[2] || 0));
        jn(d, c)
    };
    var on = {"http://www.opengis.net/gml": {lowerCorner: J(jn), upperCorner: J(jn)}};
    k = mn.prototype;
    k.zn = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        Vl({node: a}, on, Sl, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this)
    };
    k.vi = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = El(a.namespaceURI, "posList");
        a.appendChild(d);
        nn(d, b, c)
    };
    k.yn = function (a, b) {
        a = b[b.length - 1];
        b = a.node;
        var c = a.exteriorWritten;
        void 0 === c && (a.exteriorWritten = !0);
        return El(b.namespaceURI, void 0 !== c ? "interior" : "exterior")
    };
    k.cf = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ;
        d = d.srsName;
        "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Zd(), Vl({
            node: a,
            hasZ: e,
            srsName: d
        }, pn, this.yn, b, c, void 0, this)) : "Surface" === a.nodeName && (e = El(a.namespaceURI, "patches"), a.appendChild(e), a = El(e.namespaceURI, "PolygonPatch"), e.appendChild(a), this.cf(a, b, c))
    };
    k.bf = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = El(a.namespaceURI, "posList"), a.appendChild(d), nn(d, b, c)) : "Curve" === a.nodeName && (d = El(a.namespaceURI, "segments"), a.appendChild(d), a = El(d.namespaceURI, "LineStringSegment"), d.appendChild(a), this.bf(a, b, c))
    };
    k.xi = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.surface;
        f && a.setAttribute("srsName", f);
        b = b.$d();
        Vl({node: a, hasZ: e, srsName: f, surface: d}, qn, this.l, b, c, void 0, this)
    };
    k.An = function (a, b, c) {
        var d = c[c.length - 1], e = d.srsName;
        d = d.hasZ;
        e && a.setAttribute("srsName", e);
        b = b.ee();
        Vl({node: a, hasZ: d, srsName: e}, rn, Ql("pointMember"), b, c, void 0, this)
    };
    k.wi = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.curve;
        f && a.setAttribute("srsName", f);
        b = b.ld();
        Vl({node: a, hasZ: e, srsName: f, curve: d}, sn, this.l, b, c, void 0, this)
    };
    k.zi = function (a, b, c) {
        var d = El(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.vi(d, b, c)
    };
    k.Ai = function (a, b, c) {
        var d = this.a(b, c);
        d && (a.appendChild(d), this.cf(d, b, c))
    };
    k.Bn = function (a, b, c) {
        var d = El(a.namespaceURI, "Point");
        a.appendChild(d);
        this.yi(d, b, c)
    };
    k.ui = function (a, b, c) {
        var d = this.a(b, c);
        d && (a.appendChild(d), this.bf(d, b, c))
    };
    k.ud = function (a, b, c) {
        var d = c[c.length - 1], e = rb({}, d);
        e.node = a;
        var f;
        Array.isArray(b) ? d.dataProjection ? f = ic(b, d.featureProjection, d.dataProjection) : f = b : f = am(b, !0, d);
        Vl(e, tn, this.a, [f], c, void 0, this)
    };
    k.ti = function (a, b, c) {
        var d = b.a;
        d && a.setAttribute("fid", d);
        d = c[c.length - 1];
        var e = d.featureNS, f = b.c;
        d.pb || (d.pb = {}, d.pb[e] = {});
        var g = b.N();
        b = [];
        var h = [];
        for (m in g) {
            var l = g[m];
            null !== l && (b.push(m), h.push(l), m == f || l instanceof rf ? m in d.pb[e] || (d.pb[e][m] = J(this.ud, this)) : m in d.pb[e] || (d.pb[e][m] = J(jn)))
        }
        var m = rb({}, d);
        m.node = a;
        Vl(m, d.pb, Ql(void 0, e), h, c, b)
    };
    var qn = {"http://www.opengis.net/gml": {surfaceMember: J(mn.prototype.Ai), polygonMember: J(mn.prototype.Ai)}},
        rn = {"http://www.opengis.net/gml": {pointMember: J(mn.prototype.Bn)}},
        sn = {"http://www.opengis.net/gml": {lineStringMember: J(mn.prototype.ui), curveMember: J(mn.prototype.ui)}},
        pn = {"http://www.opengis.net/gml": {exterior: J(mn.prototype.zi), interior: J(mn.prototype.zi)}}, tn = {
            "http://www.opengis.net/gml": {
                Curve: J(mn.prototype.bf),
                MultiCurve: J(mn.prototype.wi),
                Point: J(mn.prototype.yi),
                MultiPoint: J(mn.prototype.An),
                LineString: J(mn.prototype.bf),
                MultiLineString: J(mn.prototype.wi),
                LinearRing: J(mn.prototype.vi),
                Polygon: J(mn.prototype.cf),
                MultiPolygon: J(mn.prototype.xi),
                Surface: J(mn.prototype.cf),
                MultiSurface: J(mn.prototype.xi),
                Envelope: J(mn.prototype.zn)
            }
        }, un = {
            MultiLineString: "lineStringMember",
            MultiCurve: "curveMember",
            MultiPolygon: "polygonMember",
            MultiSurface: "surfaceMember"
        };
    mn.prototype.l = function (a, b) {
        return El("http://www.opengis.net/gml", un[b[b.length - 1].node.nodeName])
    };
    mn.prototype.a = function (a, b) {
        var c = b[b.length - 1];
        b = c.multiSurface;
        var d = c.surface, e = c.curve;
        c = c.multiCurve;
        Array.isArray(a) ? a = "Envelope" : (a = a.T(), "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "LineString" === a && !0 === e ? a = "Curve" : "MultiLineString" === a && !0 === c && (a = "MultiCurve"));
        return El("http://www.opengis.net/gml", a)
    };
    mn.prototype.te = function (a, b) {
        b = $l(this, b);
        var c = El("http://www.opengis.net/gml", "geom"), d = {
            node: c,
            hasZ: this.hasZ,
            srsName: this.srsName,
            curve: this.c,
            surface: this.o,
            multiSurface: this.j,
            multiCurve: this.g
        };
        b && rb(d, b);
        this.ud(c, a, [d]);
        return c
    };
    mn.prototype.Yb = function (a, b) {
        b = $l(this, b);
        var c = El("http://www.opengis.net/gml", "featureMembers");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var d = {
            srsName: this.srsName,
            hasZ: this.hasZ,
            curve: this.c,
            surface: this.o,
            multiSurface: this.j,
            multiCurve: this.g,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        b && rb(d, b);
        b = [d];
        var e = b[b.length - 1];
        d = e.featureType;
        var f = e.featureNS, g = {};
        g[f] = {};
        g[f][d] = J(this.ti, this);
        e = rb({}, e);
        e.node = c;
        Vl(e, g,
            Ql(d, f), a, b);
        return c
    };
    function vn(a) {
        a = a ? a : {};
        Zm.call(this, a);
        this.b["http://www.opengis.net/gml"].featureMember = Ll(Zm.prototype.ie);
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }

    v(vn, Zm);
    k = vn.prototype;
    k.jj = function (a, b) {
        a = Fl(a, !1).replace(/^\s*|\s*$/g, "");
        var c = b[0].srsName;
        b = "enu";
        c && (c = Wb(c)) && (b = c.a);
        a = a.trim().split(/\s+/);
        for (var d, e, f = [], g = 0,
                 h = a.length; g < h; g++)e = a[g].split(/,+/), c = parseFloat(e[0]), d = parseFloat(e[1]), e = 3 === e.length ? parseFloat(e[2]) : 0, "en" === b.substr(0, 2) ? f.push(c, d, e) : f.push(d, c, e);
        return f
    };
    k.Gp = function (a, b) {
        a = L([null], this.Qj, a, b, this);
        return Va(a[1][0], a[1][1], a[1][3], a[1][4])
    };
    k.om = function (a, b) {
        (a = L(void 0, this.we, a, b, this)) && b[b.length - 1].push(a)
    };
    k.pp = function (a, b) {
        (a = L(void 0, this.we, a, b, this)) && (b[b.length - 1][0] = a)
    };
    k.ve = {"http://www.opengis.net/gml": {coordinates: Nl(vn.prototype.jj)}};
    k.If = {"http://www.opengis.net/gml": {innerBoundaryIs: vn.prototype.om, outerBoundaryIs: vn.prototype.pp}};
    k.Qj = {"http://www.opengis.net/gml": {coordinates: Ll(vn.prototype.jj)}};
    k.eh = {
        "http://www.opengis.net/gml": {
            Point: Nl(Zm.prototype.pj),
            MultiPoint: Nl(Zm.prototype.nj),
            LineString: Nl(Zm.prototype.tf),
            MultiLineString: Nl(Zm.prototype.mj),
            LinearRing: Nl(Zm.prototype.lj),
            Polygon: Nl(Zm.prototype.uf),
            MultiPolygon: Nl(Zm.prototype.oj),
            Box: Nl(vn.prototype.Gp)
        }
    };
    k.rg = function (a, b) {
        var c = b[b.length - 1];
        b = c.multiSurface;
        var d = c.surface;
        c = c.multiCurve;
        Array.isArray(a) ? a = "Envelope" : (a = a.T(), "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "MultiLineString" === a && !0 === c && (a = "MultiCurve"));
        return El("http://www.opengis.net/gml", a)
    };
    k.ki = function (a, b, c) {
        var d = c[c.length - 1], e = rb({}, d);
        e.node = a;
        var f;
        Array.isArray(b) ? d.dataProjection ? f = ic(b, d.featureProjection, d.dataProjection) : f = b : f = am(b, !0, d);
        Vl(e, wn, this.rg, [f], c, void 0, this)
    };
    k.$e = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = xn(a.namespaceURI), a.appendChild(d), yn(d, b, c)) : "Curve" === a.nodeName && (d = El(a.namespaceURI, "segments"), a.appendChild(d), a = El(d.namespaceURI, "LineStringSegment"), d.appendChild(a), this.$e(a, b, c))
    };
    function xn(a) {
        a = El(a, "coordinates");
        a.setAttribute("decimal", ".");
        a.setAttribute("cs", ",");
        a.setAttribute("ts", " ");
        return a
    }

    function yn(a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        d = d.srsName;
        b = b.V();
        for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h)g = b[h], f[h] = zn(g, d, c);
        jn(a, f.join(" "))
    }

    k.af = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ;
        d = d.srsName;
        "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Zd(), Vl({
            node: a,
            hasZ: e,
            srsName: d
        }, An, this.tn, b, c, void 0, this)) : "Surface" === a.nodeName && (e = El(a.namespaceURI, "patches"), a.appendChild(e), a = El(e.namespaceURI, "PolygonPatch"), e.appendChild(a), this.af(a, b, c))
    };
    k.tn = function (a, b) {
        a = b[b.length - 1];
        b = a.node;
        var c = a.exteriorWritten;
        void 0 === c && (a.exteriorWritten = !0);
        return El(b.namespaceURI, void 0 !== c ? "innerBoundaryIs" : "outerBoundaryIs")
    };
    k.ri = function (a, b, c) {
        var d = El(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.mi(d, b, c)
    };
    function zn(a, b, c) {
        var d = "enu";
        b && (d = Wb(b).a);
        b = "en" === d.substr(0, 2) ? a[0] + "," + a[1] : a[1] + "," + a[0];
        c && (b += "," + (a[2] || 0));
        return b
    }

    k.ni = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.curve;
        f && a.setAttribute("srsName", f);
        b = b.ld();
        Vl({node: a, hasZ: e, srsName: f, curve: d}, Bn, this.a, b, c, void 0, this)
    };
    k.pi = function (a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        var e = d.srsName;
        e && a.setAttribute("srsName", e);
        d = xn(a.namespaceURI);
        a.appendChild(d);
        a = b.V();
        a = zn(a, e, c);
        jn(d, a)
    };
    k.wn = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ;
        (d = d.srsName) && a.setAttribute("srsName", d);
        b = b.ee();
        Vl({node: a, hasZ: e, srsName: d}, Cn, Ql("pointMember"), b, c, void 0, this)
    };
    k.xn = function (a, b, c) {
        var d = El(a.namespaceURI, "Point");
        a.appendChild(d);
        this.pi(d, b, c)
    };
    k.li = function (a, b, c) {
        var d = this.rg(b, c);
        d && (a.appendChild(d), this.$e(d, b, c))
    };
    k.mi = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = xn(a.namespaceURI);
        a.appendChild(d);
        yn(d, b, c)
    };
    k.oi = function (a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.surface;
        f && a.setAttribute("srsName", f);
        b = b.$d();
        Vl({node: a, hasZ: e, srsName: f, surface: d}, Dn, this.a, b, c, void 0, this)
    };
    k.si = function (a, b, c) {
        var d = this.rg(b, c);
        d && (a.appendChild(d), this.af(d, b, c))
    };
    k.vn = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        Vl({node: a}, En, Sl, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this)
    };
    var wn = {
            "http://www.opengis.net/gml": {
                Curve: J(vn.prototype.$e),
                MultiCurve: J(vn.prototype.ni),
                Point: J(vn.prototype.pi),
                MultiPoint: J(vn.prototype.wn),
                LineString: J(vn.prototype.$e),
                MultiLineString: J(vn.prototype.ni),
                LinearRing: J(vn.prototype.mi),
                Polygon: J(vn.prototype.af),
                MultiPolygon: J(vn.prototype.oi),
                Surface: J(vn.prototype.af),
                MultiSurface: J(vn.prototype.oi),
                Envelope: J(vn.prototype.vn)
            }
        }, An = {"http://www.opengis.net/gml": {outerBoundaryIs: J(vn.prototype.ri), innerBoundaryIs: J(vn.prototype.ri)}},
        Cn = {"http://www.opengis.net/gml": {pointMember: J(vn.prototype.xn)}},
        Bn = {"http://www.opengis.net/gml": {lineStringMember: J(vn.prototype.li), curveMember: J(vn.prototype.li)}};
    vn.prototype.a = function (a, b) {
        return El("http://www.opengis.net/gml", Fn[b[b.length - 1].node.nodeName])
    };
    var Fn = {
            MultiLineString: "lineStringMember",
            MultiCurve: "curveMember",
            MultiPolygon: "polygonMember",
            MultiSurface: "surfaceMember"
        }, Dn = {"http://www.opengis.net/gml": {surfaceMember: J(vn.prototype.si), polygonMember: J(vn.prototype.si)}},
        En = {"http://www.opengis.net/gml": {lowerCorner: J(jn), upperCorner: J(jn)}};

    function Gn(a) {
        a = a ? a : {};
        Wm.call(this);
        this.defaultDataProjection = Wb("EPSG:4326");
        this.b = a.readExtensions
    }

    v(Gn, Wm);
    var Hn = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

    function In(a, b, c, d) {
        a.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
        "ele" in d ? (a.push(d.ele), delete d.ele, b.hasZ = !0) : a.push(0);
        "time" in d ? (a.push(d.time), delete d.time, b.hasM = !0) : a.push(0);
        return a
    }

    function Jn(a, b, c) {
        var d = "XY", e = 2;
        a.hasZ && a.hasM ? (d = "XYZM", e = 4) : a.hasZ ? (d = "XYZ", e = 3) : a.hasM && (d = "XYM", e = 3);
        if (4 !== e) {
            var f;
            var g = 0;
            for (f = b.length / 4; g < f; g++)b[g * e] = b[4 * g], b[g * e + 1] = b[4 * g + 1], a.hasZ && (b[g * e + 2] = b[4 * g + 2]), a.hasM && (b[g * e + 2] = b[4 * g + 3]);
            b.length = b.length / 4 * e;
            if (c)for (g = 0, f = c.length; g < f; g++)c[g] = c[g] / 4 * e
        }
        return d
    }

    function Kn(a, b) {
        var c = b[b.length - 1], d = a.getAttribute("href");
        null !== d && (c.link = d);
        Ul(Ln, a, b)
    }

    function Mn(a, b) {
        b[b.length - 1].extensionsNode_ = a
    }

    function Nn(a, b) {
        var c = b[0];
        if (a = L({flatCoordinates: [], layoutOptions: {}}, On, a, b)) {
            b = a.flatCoordinates;
            delete a.flatCoordinates;
            var d = a.layoutOptions;
            delete a.layoutOptions;
            d = Jn(d, b);
            var e = new M(null);
            e.aa(d, b);
            am(e, !1, c);
            c = new Bl(e);
            c.H(a);
            return c
        }
    }

    function Pn(a, b) {
        var c = b[0];
        if (a = L({flatCoordinates: [], ends: [], layoutOptions: {}}, Qn, a, b)) {
            b = a.flatCoordinates;
            delete a.flatCoordinates;
            var d = a.ends;
            delete a.ends;
            var e = a.layoutOptions;
            delete a.layoutOptions;
            e = Jn(e, b, d);
            var f = new N(null);
            f.aa(e, b, d);
            am(f, !1, c);
            c = new Bl(f);
            c.H(a);
            return c
        }
    }

    function Rn(a, b) {
        var c = b[0];
        if (b = L({}, Sn, a, b)) {
            var d = {};
            a = In([], d, a, b);
            d = Jn(d, a);
            a = new C(a, d);
            am(a, !1, c);
            c = new Bl(a);
            c.H(b);
            return c
        }
    }

    var Tn = {rte: Nn, trk: Pn, wpt: Rn}, Un = K(Hn, {rte: Ll(Nn), trk: Ll(Pn), wpt: Ll(Rn)}),
        Ln = K(Hn, {text: I(Q, "linkText"), type: I(Q, "linkType")}), On = K(Hn, {
            name: I(Q),
            cmt: I(Q),
            desc: I(Q),
            src: I(Q),
            link: Kn,
            number: I(fn),
            extensions: Mn,
            type: I(Q),
            rtept: function (a, b) {
                var c = L({}, Vn, a, b);
                c && (b = b[b.length - 1], In(b.flatCoordinates, b.layoutOptions, a, c))
            }
        }), Vn = K(Hn, {ele: I(dn), time: I(cn)}), Qn = K(Hn, {
            name: I(Q),
            cmt: I(Q),
            desc: I(Q),
            src: I(Q),
            link: Kn,
            number: I(fn),
            type: I(Q),
            extensions: Mn,
            trkseg: function (a, b) {
                var c = b[b.length - 1];
                Ul(Wn, a, b);
                c.ends.push(c.flatCoordinates.length)
            }
        }),
        Wn = K(Hn, {
            trkpt: function (a, b) {
                var c = L({}, Xn, a, b);
                c && (b = b[b.length - 1], In(b.flatCoordinates, b.layoutOptions, a, c))
            }
        }), Xn = K(Hn, {ele: I(dn), time: I(cn)}), Sn = K(Hn, {
            ele: I(dn),
            time: I(cn),
            magvar: I(dn),
            geoidheight: I(dn),
            name: I(Q),
            cmt: I(Q),
            desc: I(Q),
            src: I(Q),
            link: Kn,
            sym: I(Q),
            type: I(Q),
            fix: I(Q),
            sat: I(fn),
            hdop: I(dn),
            vdop: I(dn),
            pdop: I(dn),
            ageofdgpsdata: I(dn),
            dgpsid: I(fn),
            extensions: Mn
        });

    function Yn(a, b) {
        b || (b = []);
        for (var c = 0, d = b.length; c < d; ++c) {
            var e = b[c];
            if (a.b) {
                var f = e.get("extensionsNode_") || null;
                a.b(e, f)
            }
            e.set("extensionsNode_", void 0)
        }
    }

    Gn.prototype.Fg = function (a, b) {
        if (!ha(Hn, a.namespaceURI))return null;
        var c = Tn[a.localName];
        if (!c)return null;
        a = c(a, [Zl(this, a, b)]);
        if (!a)return null;
        Yn(this, [a]);
        return a
    };
    Gn.prototype.Ac = function (a, b) {
        return ha(Hn, a.namespaceURI) ? "gpx" == a.localName && (a = L([], Un, a, [Zl(this, a, b)])) ? (Yn(this, a), a) : [] : []
    };
    function Zn(a, b, c) {
        a.setAttribute("href", b);
        b = c[c.length - 1].properties;
        Vl({node: a}, $n, Sl, [b.linkText, b.linkType], c, ao)
    }

    function bo(a, b, c) {
        var d = c[c.length - 1], e = d.node.namespaceURI, f = d.properties;
        a.setAttributeNS(null, "lat", b[1]);
        a.setAttributeNS(null, "lon", b[0]);
        switch (d.geometryLayout) {
            case "XYZM":
                b[3] && (f.time = b[3]);
            case "XYZ":
                b[2] && (f.ele = b[2]);
                break;
            case "XYM":
                b[2] && (f.time = b[2])
        }
        b = "rtept" == a.nodeName ? co[e] : eo[e];
        d = Tl(f, b);
        Vl({node: a, properties: f}, fo, Sl, d, c, b)
    }

    var ao = ["text", "type"], $n = K(Hn, {text: J(jn), type: J(jn)}),
        go = K(Hn, "name cmt desc src link number type rtept".split(" ")), ho = K(Hn, {
            name: J(jn),
            cmt: J(jn),
            desc: J(jn),
            src: J(jn),
            link: J(Zn),
            number: J(ln),
            type: J(jn),
            rtept: Pl(J(bo))
        }), co = K(Hn, ["ele", "time"]), io = K(Hn, "name cmt desc src link number type trkseg".split(" ")), lo = K(Hn, {
            name: J(jn),
            cmt: J(jn),
            desc: J(jn),
            src: J(jn),
            link: J(Zn),
            number: J(ln),
            type: J(jn),
            trkseg: Pl(J(function (a, b, c) {
                Vl({node: a, geometryLayout: b.ja, properties: {}}, jo, ko, b.V(), c)
            }))
        }), ko = Ql("trkpt"),
        jo = K(Hn, {trkpt: J(bo)}),
        eo = K(Hn, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),
        fo = K(Hn, {
            ele: J(kn),
            time: J(function (a, b) {
                b = new Date(1E3 * b);
                a.appendChild(Dl.createTextNode(b.getUTCFullYear() + "-" + $e(b.getUTCMonth() + 1) + "-" + $e(b.getUTCDate()) + "T" + $e(b.getUTCHours()) + ":" + $e(b.getUTCMinutes()) + ":" + $e(b.getUTCSeconds()) + "Z"))
            }),
            magvar: J(kn),
            geoidheight: J(kn),
            name: J(jn),
            cmt: J(jn),
            desc: J(jn),
            src: J(jn),
            link: J(Zn),
            sym: J(jn),
            type: J(jn),
            fix: J(jn),
            sat: J(ln),
            hdop: J(kn),
            vdop: J(kn),
            pdop: J(kn),
            ageofdgpsdata: J(kn),
            dgpsid: J(ln)
        }), mo = {Point: "wpt", LineString: "rte", MultiLineString: "trk"};

    function no(a, b) {
        if (a = a.W())if (a = mo[a.T()])return El(b[b.length - 1].node.namespaceURI, a)
    }

    var oo = K(Hn, {
        rte: J(function (a, b, c) {
            var d = c[0], e = b.N();
            a = {node: a, properties: e};
            if (b = b.W()) b = am(b, !0, d), a.geometryLayout = b.ja, e.rtept = b.V();
            d = go[c[c.length - 1].node.namespaceURI];
            e = Tl(e, d);
            Vl(a, ho, Sl, e, c, d)
        }), trk: J(function (a, b, c) {
            var d = c[0], e = b.N();
            a = {node: a, properties: e};
            if (b = b.W()) b = am(b, !0, d), e.trkseg = b.ld();
            d = io[c[c.length - 1].node.namespaceURI];
            e = Tl(e, d);
            Vl(a, lo, Sl, e, c, d)
        }), wpt: J(function (a, b, c) {
            var d = c[0], e = c[c.length - 1];
            e.properties = b.N();
            if (b = b.W()) b = am(b, !0, d), e.geometryLayout = b.ja, bo(a, b.V(),
                c)
        })
    });
    Gn.prototype.Yb = function (a, b) {
        b = $l(this, b);
        var c = El("http://www.topografix.com/GPX/1/1", "gpx");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");
        c.setAttribute("version", "1.1");
        c.setAttribute("creator", "OpenLayers");
        Vl({node: c}, oo, no, a, [b]);
        return c
    };
    function po() {
        Yl.call(this)
    }

    v(po, Yl);
    function qo(a) {
        return "string" === typeof a ? a : ""
    }

    k = po.prototype;
    k.T = function () {
        return "text"
    };
    k.Ub = function (a, b) {
        return this.he(qo(a), $l(this, b))
    };
    k.Oa = function (a, b) {
        return this.Hg(qo(a), $l(this, b))
    };
    k.Vc = function (a, b) {
        return this.Cd(qo(a), $l(this, b))
    };
    k.ob = function () {
        return this.defaultDataProjection
    };
    k.Gd = function (a, b) {
        return this.re(a, $l(this, b))
    };
    k.Xb = function (a, b) {
        return this.ah(a, $l(this, b))
    };
    k.dd = function (a, b) {
        return this.Hd(a, $l(this, b))
    };
    function ro(a) {
        a = a ? a : {};
        Yl.call(this);
        this.defaultDataProjection = Wb("EPSG:4326");
        this.b = a.altitudeMode ? a.altitudeMode : "none"
    }

    v(ro, po);
    var so = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,
        to = /^H.([A-Z]{3}).*?:(.*)/, uo = /^HFDTE(\d{2})(\d{2})(\d{2})/, vo = /\r\n|\r|\n/;
    k = ro.prototype;
    k.he = function (a, b) {
        var c = this.b, d = a.split(vo);
        a = {};
        var e = [], f = 2E3, g = 0, h = 1, l = -1, m;
        var n = 0;
        for (m = d.length; n < m; ++n) {
            var p = d[n], q;
            if ("B" == p.charAt(0)) {
                if (q = so.exec(p)) {
                    p = parseInt(q[1], 10);
                    var t = parseInt(q[2], 10), u = parseInt(q[3], 10),
                        x = parseInt(q[4], 10) + parseInt(q[5], 10) / 6E4;
                    "S" == q[6] && (x = -x);
                    var B = parseInt(q[7], 10) + parseInt(q[8], 10) / 6E4;
                    "W" == q[9] && (B = -B);
                    e.push(B, x);
                    "none" != c && e.push("gps" == c ? parseInt(q[11], 10) : "barometric" == c ? parseInt(q[12], 10) : 0);
                    q = Date.UTC(f, g, h, p, t, u);
                    q < l && (q = Date.UTC(f, g, h + 1, p, t,
                        u));
                    e.push(q / 1E3);
                    l = q
                }
            } else"H" == p.charAt(0) && ((q = uo.exec(p)) ? (h = parseInt(q[1], 10), g = parseInt(q[2], 10) - 1, f = 2E3 + parseInt(q[3], 10)) : (q = to.exec(p)) && (a[q[1]] = q[2].trim()))
        }
        if (!e.length)return null;
        d = new M(null);
        d.aa("none" == c ? "XYM" : "XYZM", e);
        b = new Bl(am(d, !1, b));
        b.H(a);
        return b
    };
    k.Hg = function (a, b) {
        return (a = this.he(a, b)) ? [a] : []
    };
    k.re = function () {
    };
    k.ah = function () {
    };
    k.Hd = function () {
    };
    k.Cd = function () {
    };
    function wo(a, b, c, d, e, f) {
        Sc.call(this);
        this.j = null;
        this.M = a ? a : new Image;
        null !== d && (this.M.crossOrigin = d);
        this.c = f ? document.createElement("CANVAS") : null;
        this.g = f;
        this.i = null;
        this.f = e;
        this.a = c;
        this.l = b;
        this.o = !1;
        2 == this.f && xo(this)
    }

    v(wo, Sc);
    function xo(a) {
        var b = ld(1, 1);
        try {
            b.drawImage(a.M, 0, 0), b.getImageData(0, 0, 1, 1)
        } catch (c) {
            a.o = !0
        }
    }

    wo.prototype.v = function () {
        this.f = 3;
        this.i.forEach(Gc);
        this.i = null;
        this.b("change")
    };
    wo.prototype.u = function () {
        this.f = 2;
        this.a && (this.M.width = this.a[0], this.M.height = this.a[1]);
        this.a = [this.M.width, this.M.height];
        this.i.forEach(Gc);
        this.i = null;
        xo(this);
        if (!this.o && null !== this.g) {
            this.c.width = this.M.width;
            this.c.height = this.M.height;
            var a = this.c.getContext("2d");
            a.drawImage(this.M, 0, 0);
            for (var b = a.getImageData(0, 0, this.M.width, this.M.height), c = b.data, d = this.g[0] / 255,
                     e = this.g[1] / 255, f = this.g[2] / 255, g = 0,
                     h = c.length; g < h; g += 4)c[g] *= d, c[g + 1] *= e, c[g + 2] *= f;
            a.putImageData(b, 0, 0)
        }
        this.b("change")
    };
    wo.prototype.Y = function () {
        return this.c ? this.c : this.M
    };
    wo.prototype.load = function () {
        if (0 == this.f) {
            this.f = 1;
            this.i = [Lc(this.M, "error", this.v, this), Lc(this.M, "load", this.u, this)];
            try {
                this.M.src = this.l
            } catch (a) {
                this.v()
            }
        }
    };
    function yo(a) {
        a = a || {};
        this.l = void 0 !== a.anchor ? a.anchor : [.5, .5];
        this.u = null;
        this.f = void 0 !== a.anchorOrigin ? a.anchorOrigin : "top-left";
        this.B = void 0 !== a.anchorXUnits ? a.anchorXUnits : "fraction";
        this.C = void 0 !== a.anchorYUnits ? a.anchorYUnits : "fraction";
        this.qa = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        var b = void 0 !== a.img ? a.img : null, c = void 0 !== a.imgSize ? a.imgSize : null, d = a.src;
        va(!(void 0 !== d && b), 4);
        va(!b || b && c, 5);
        void 0 !== d && d.length || !b || (d = b.src || w(b).toString());
        va(void 0 !== d && 0 < d.length, 6);
        var e = void 0 !==
        a.src ? 0 : 2;
        this.j = void 0 !== a.color ? gd(a.color) : null;
        var f = this.qa, g = this.j, h = Gh.get(d, f, g);
        h || (h = new wo(b, d, c, f, e, g), Gh.set(d, f, g, h));
        this.b = h;
        this.pa = void 0 !== a.offset ? a.offset : [0, 0];
        this.c = void 0 !== a.offsetOrigin ? a.offsetOrigin : "top-left";
        this.R = null;
        this.D = void 0 !== a.size ? a.size : null;
        ql.call(this, {
            opacity: void 0 !== a.opacity ? a.opacity : 1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: void 0 !== a.scale ? a.scale : 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0,
            rotateWithView: void 0 !== a.rotateWithView ?
                a.rotateWithView : !1
        })
    }

    v(yo, ql);
    k = yo.prototype;
    k.clone = function () {
        var a = this.Y(1);
        if (2 === this.b.f)if ("IMG" === a.tagName.toUpperCase())var b = a.cloneNode(!0); else {
            b = document.createElement("canvas");
            var c = b.getContext("2d");
            b.width = a.width;
            b.height = a.height;
            c.drawImage(a, 0, 0)
        }
        return new yo({
            anchor: this.l.slice(),
            anchorOrigin: this.f,
            anchorXUnits: this.B,
            anchorYUnits: this.C,
            crossOrigin: this.qa,
            color: this.j && this.j.slice ? this.j.slice() : this.j || void 0,
            img: b ? b : void 0,
            imgSize: b ? this.b.a.slice() : void 0,
            src: b ? void 0 : this.b.l,
            offset: this.pa.slice(),
            offsetOrigin: this.c,
            size: null !== this.D ? this.D.slice() : void 0,
            opacity: this.i,
            scale: this.a,
            snapToPixel: this.v,
            rotation: this.g,
            rotateWithView: this.o
        })
    };
    k.Jc = function () {
        if (this.u)return this.u;
        var a = this.l, b = this.ic();
        if ("fraction" == this.B || "fraction" == this.C) {
            if (!b)return null;
            a = this.l.slice();
            "fraction" == this.B && (a[0] *= b[0]);
            "fraction" == this.C && (a[1] *= b[1])
        }
        if ("top-left" != this.f) {
            if (!b)return null;
            a === this.l && (a = this.l.slice());
            if ("top-right" == this.f || "bottom-right" == this.f) a[0] = -a[0] + b[0];
            if ("bottom-left" == this.f || "bottom-right" == this.f) a[1] = -a[1] + b[1]
        }
        return this.u = a
    };
    k.Yo = function () {
        return this.j
    };
    k.Y = function (a) {
        return this.b.Y(a)
    };
    k.Ie = function () {
        return this.b.a
    };
    k.hf = function () {
        return this.b.f
    };
    k.yg = function () {
        var a = this.b;
        if (!a.j)if (a.o) {
            var b = a.a[0], c = a.a[1], d = ld(b, c);
            d.fillRect(0, 0, b, c);
            a.j = d.canvas
        } else a.j = a.M;
        return a.j
    };
    k.Rc = function () {
        if (this.R)return this.R;
        var a = this.pa;
        if ("top-left" != this.c) {
            var b = this.ic(), c = this.b.a;
            if (!b || !c)return null;
            a = a.slice();
            if ("top-right" == this.c || "bottom-right" == this.c) a[0] = c[0] - b[0] - a[0];
            if ("bottom-left" == this.c || "bottom-right" == this.c) a[1] = c[1] - b[1] - a[1]
        }
        return this.R = a
    };
    k.Zo = function () {
        return this.b.l
    };
    k.ic = function () {
        return this.D ? this.D : this.b.a
    };
    k.Wh = function (a, b) {
        return y(this.b, "change", a, b)
    };
    k.load = function () {
        this.b.load()
    };
    k.Lj = function (a, b) {
        Mc(this.b, "change", a, b)
    };
    function zo(a) {
        a = a || {};
        this.a = a.font;
        this.i = a.rotation;
        this.l = a.rotateWithView;
        this.b = a.scale;
        this.ua = a.text;
        this.g = a.textAlign;
        this.j = a.textBaseline;
        this.Wa = void 0 !== a.fill ? a.fill : new ul({color: "#333"});
        this.Ua = void 0 !== a.stroke ? a.stroke : null;
        this.f = void 0 !== a.offsetX ? a.offsetX : 0;
        this.c = void 0 !== a.offsetY ? a.offsetY : 0
    }

    k = zo.prototype;
    k.clone = function () {
        return new zo({
            font: this.a,
            rotation: this.i,
            rotateWithView: this.l,
            scale: this.b,
            text: this.Ja(),
            textAlign: this.g,
            textBaseline: this.j,
            fill: this.Da() ? this.Da().clone() : void 0,
            stroke: this.Ea() ? this.Ea().clone() : void 0,
            offsetX: this.f,
            offsetY: this.c
        })
    };
    k.Zk = function () {
        return this.a
    };
    k.ol = function () {
        return this.f
    };
    k.pl = function () {
        return this.c
    };
    k.Da = function () {
        return this.Wa
    };
    k.ep = function () {
        return this.l
    };
    k.fp = function () {
        return this.i
    };
    k.gp = function () {
        return this.b
    };
    k.Ea = function () {
        return this.Ua
    };
    k.Ja = function () {
        return this.ua
    };
    k.zl = function () {
        return this.g
    };
    k.Al = function () {
        return this.j
    };
    k.xj = function (a) {
        this.a = a
    };
    k.Cj = function (a) {
        this.f = a
    };
    k.Dj = function (a) {
        this.c = a
    };
    k.zf = function (a) {
        this.Wa = a
    };
    k.hp = function (a) {
        this.i = a
    };
    k.bj = function (a) {
        this.b = a
    };
    k.Af = function (a) {
        this.Ua = a
    };
    k.Dd = function (a) {
        this.ua = a
    };
    k.Fj = function (a) {
        this.g = a
    };
    k.vq = function (a) {
        this.j = a
    };
    function Ao(a) {
        a = a ? a : {};
        Wm.call(this);
        Bo || (Co = [255, 255, 255, 1], Do = new ul({color: Co}), Eo = [20, 2], Fo = Go = "pixels", Ho = [64, 64], Io = "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", Jo = .5, Ko = new yo({
            anchor: Eo,
            anchorOrigin: "bottom-left",
            anchorXUnits: Go,
            anchorYUnits: Fo,
            crossOrigin: "anonymous",
            rotation: 0,
            scale: Jo,
            size: Ho,
            src: Io
        }), Lo = "NO_IMAGE", Mo = new Ej({color: Co, width: 1}), No = new Ej({
            color: [51, 51, 51, 1],
            width: 2
        }), Oo = new zo({font: "bold 16px Helvetica", fill: Do, stroke: No, scale: .8}), Po = new vl({
            fill: Do,
            image: Ko, text: Oo, stroke: Mo, zIndex: 0
        }), Bo = [Po]);
        this.defaultDataProjection = Wb("EPSG:4326");
        this.a = a.defaultStyle ? a.defaultStyle : Bo;
        this.c = void 0 !== a.extractStyles ? a.extractStyles : !0;
        this.j = void 0 !== a.writeStyles ? a.writeStyles : !0;
        this.b = {};
        this.g = void 0 !== a.showPointNames ? a.showPointNames : !0
    }

    var Bo, Co, Do, Eo, Go, Fo, Ho, Io, Jo, Ko, Lo, Mo, No, Oo, Po;
    v(Ao, Wm);
    var Qo = ["http://www.google.com/kml/ext/2.2"],
        Ro = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"],
        So = {fraction: "fraction", pixels: "pixels", insetPixels: "pixels"};

    function To(a, b) {
        var c = [0, 0], d = "start";
        if (a.Y()) {
            var e = a.Y().Ie();
            null === e && (e = Ho);
            2 == e.length && (d = a.Y().a, c[0] = d * e[0] / 2, c[1] = -d * e[1] / 2, d = "left")
        }
        null !== a.Ja() ? (e = a.Ja(), a = e.clone(), a.xj(e.a || Oo.a), a.bj(e.b || Oo.b), a.zf(e.Da() || Oo.Da()), a.Af(e.Ea() || No)) : a = Oo.clone();
        a.Dd(b);
        a.Cj(c[0]);
        a.Dj(c[1]);
        a.Fj(d);
        return new vl({text: a})
    }

    function Uo(a, b, c, d, e) {
        return function () {
            var f = e, g = "";
            f && this.W() && (f = "Point" === this.W().T());
            f && (g = this.get("name"), f = f && g);
            if (a)return f ? (f = To(a[0], g), a.concat(f)) : a;
            if (b) {
                var h = Vo(b, c, d);
                return f ? (f = To(h[0], g), h.concat(f)) : h
            }
            return f ? (f = To(c[0], g), c.concat(f)) : c
        }
    }

    function Vo(a, b, c) {
        return Array.isArray(a) ? a : "string" === typeof a ? (!(a in c) && "#" + a in c && (a = "#" + a), Vo(c[a], b, c)) : b
    }

    function Wo(a) {
        a = Fl(a, !1);
        if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))return a = a[1], [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255]
    }

    function Xo(a) {
        a = Fl(a, !1);
        for (var b = [],
                 c = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,
                 d; d = c.exec(a);)b.push(parseFloat(d[1]), parseFloat(d[2]), d[3] ? parseFloat(d[3]) : 0), a = a.substr(d[0].length);
        if ("" === a)return b
    }

    function Yo(a) {
        var b = Fl(a, !1).trim();
        return a.baseURI && "about:blank" !== a.baseURI ? (new URL(b, a.baseURI)).href : b
    }

    function Zo(a) {
        return dn(a)
    }

    function $o(a, b) {
        return L(null, ap, a, b)
    }

    function bp(a, b) {
        if (b = L({A: [], Oj: []}, cp, a, b)) {
            a = b.A;
            b = b.Oj;
            var c;
            var d = 0;
            for (c = Math.min(a.length, b.length); d < c; ++d)a[4 * d + 3] = b[d];
            b = new M(null);
            b.aa("XYZM", a);
            return b
        }
    }

    function dp(a, b) {
        var c = L({}, ep, a, b);
        if (a = L(null, fp, a, b))return b = new M(null), b.aa("XYZ", a), b.H(c), b
    }

    function gp(a, b) {
        var c = L({}, ep, a, b);
        if (a = L(null, fp, a, b))return b = new D(null), b.aa("XYZ", a, [a.length]), b.H(c), b
    }

    function hp(a, b) {
        a = L([], ip, a, b);
        if (!a)return null;
        if (!a.length)return new Nm(a);
        var c = !0, d = a[0].T(), e;
        var f = 1;
        for (e = a.length; f < e; ++f)if (b = a[f], b.T() != d) {
            c = !1;
            break
        }
        if (c)if ("Point" == d) {
            var g = a[0];
            c = g.ja;
            d = g.ba();
            f = 1;
            for (e = a.length; f < e; ++f)b = a[f], ka(d, b.ba());
            g = new O(null);
            g.aa(c, d);
            jp(g, a)
        } else"LineString" == d ? (g = new N(null), gm(g, a), jp(g, a)) : "Polygon" == d ? (g = new P(null), im(g, a), jp(g, a)) : "GeometryCollection" == d ? g = new Nm(a) : va(!1, 37); else g = new Nm(a);
        return g
    }

    function kp(a, b) {
        var c = L({}, ep, a, b);
        if (a = L(null, fp, a, b))return b = new C(null), b.aa("XYZ", a), b.H(c), b
    }

    function lp(a, b) {
        var c = L({}, ep, a, b);
        if ((a = L([null], mp, a, b)) && a[0]) {
            b = new D(null);
            var d = a[0], e = [d.length], f;
            var g = 1;
            for (f = a.length; g < f; ++g)ka(d, a[g]), e.push(d.length);
            b.aa("XYZ", d, e);
            b.H(c);
            return b
        }
    }

    function np(a, b) {
        b = L({}, op, a, b);
        if (!b)return null;
        a = "fillStyle" in b ? b.fillStyle : Do;
        var c = b.fill;
        void 0 === c || c || (a = null);
        c = "imageStyle" in b ? b.imageStyle : Ko;
        c == Lo && (c = void 0);
        var d = "textStyle" in b ? b.textStyle : Oo, e = "strokeStyle" in b ? b.strokeStyle : Mo;
        b = b.outline;
        void 0 === b || b || (e = null);
        return [new vl({fill: a, image: c, stroke: e, text: d, zIndex: void 0})]
    }

    function jp(a, b) {
        var c = b.length, d = Array(b.length), e = Array(b.length), f = Array(b.length), g, h, l;
        var m = h = l = !1;
        for (g = 0; g < c; ++g) {
            var n = b[g];
            d[g] = n.get("extrude");
            e[g] = n.get("tessellate");
            f[g] = n.get("altitudeMode");
            m = m || void 0 !== d[g];
            h = h || void 0 !== e[g];
            l = l || f[g]
        }
        m && a.set("extrude", d);
        h && a.set("tessellate", e);
        l && a.set("altitudeMode", f)
    }

    function pp(a, b) {
        Ul(qp, a, b)
    }

    function rp(a, b) {
        Ul(sp, a, b)
    }

    var tp = K(Ro, {displayName: I(Q), value: I(Q)}), qp = K(Ro, {
            Data: function (a, b) {
                var c = a.getAttribute("name");
                Ul(tp, a, b);
                a = b[b.length - 1];
                null !== c ? a[c] = a.value : null !== a.displayName && (a[a.displayName] = a.value);
                delete a.value
            }, SchemaData: function (a, b) {
                Ul(up, a, b)
            }
        }), sp = K(Ro, {
            LatLonAltBox: function (a, b) {
                if (a = L({}, vp, a, b)) b = b[b.length - 1], b.extent = [parseFloat(a.west), parseFloat(a.south), parseFloat(a.east), parseFloat(a.north)], b.altitudeMode = a.altitudeMode, b.minAltitude = parseFloat(a.minAltitude), b.maxAltitude = parseFloat(a.maxAltitude)
            },
            Lod: function (a, b) {
                if (a = L({}, wp, a, b)) b = b[b.length - 1], b.minLodPixels = parseFloat(a.minLodPixels), b.maxLodPixels = parseFloat(a.maxLodPixels), b.minFadeExtent = parseFloat(a.minFadeExtent), b.maxFadeExtent = parseFloat(a.maxFadeExtent)
            }
        }), vp = K(Ro, {
            altitudeMode: I(Q),
            minAltitude: I(dn),
            maxAltitude: I(dn),
            north: I(dn),
            south: I(dn),
            east: I(dn),
            west: I(dn)
        }), wp = K(Ro, {minLodPixels: I(dn), maxLodPixels: I(dn), minFadeExtent: I(dn), maxFadeExtent: I(dn)}),
        ep = K(Ro, {extrude: I(an), tessellate: I(an), altitudeMode: I(Q)}), ap = K(Ro, {coordinates: Nl(Xo)}),
        mp = K(Ro, {
            innerBoundaryIs: function (a, b) {
                (a = L(void 0, xp, a, b)) && b[b.length - 1].push(a)
            }, outerBoundaryIs: function (a, b) {
                (a = L(void 0, yp, a, b)) && (b[b.length - 1][0] = a)
            }
        }), cp = K(Ro, {
            when: function (a, b) {
                b = b[b.length - 1].Oj;
                a = Fl(a, !1);
                a = Date.parse(a);
                b.push(isNaN(a) ? 0 : a)
            }
        }, K(Qo, {
            coord: function (a, b) {
                b = b[b.length - 1].A;
                a = Fl(a, !1);
                (a = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(a)) ? b.push(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]),
                    0) : b.push(0, 0, 0, 0)
            }
        })), fp = K(Ro, {coordinates: Nl(Xo)}), zp = K(Ro, {href: I(Yo)}, K(Qo, {x: I(dn), y: I(dn), w: I(dn), h: I(dn)})),
        Ap = K(Ro, {
            Icon: I(function (a, b) {
                return (a = L({}, zp, a, b)) ? a : null
            }), heading: I(dn), hotSpot: I(function (a) {
                var b = a.getAttribute("xunits"), c = a.getAttribute("yunits");
                var d = "insetPixels" !== b ? "insetPixels" !== c ? "bottom-left" : "top-left" : "insetPixels" !== c ? "bottom-right" : "top-right";
                return {
                    x: parseFloat(a.getAttribute("x")),
                    bh: So[b],
                    y: parseFloat(a.getAttribute("y")),
                    dh: So[c],
                    origin: d
                }
            }), scale: I(Zo)
        }),
        xp = K(Ro, {LinearRing: Nl($o)}), Bp = K(Ro, {color: I(Wo), scale: I(Zo)}),
        Cp = K(Ro, {color: I(Wo), width: I(dn)}),
        ip = K(Ro, {LineString: Ll(dp), LinearRing: Ll(gp), MultiGeometry: Ll(hp), Point: Ll(kp), Polygon: Ll(lp)}),
        Dp = K(Qo, {Track: Ll(bp)}), Fp = K(Ro, {
            ExtendedData: pp, Region: rp, Link: function (a, b) {
                Ul(Ep, a, b)
            }, address: I(Q), description: I(Q), name: I(Q), open: I(an), phoneNumber: I(Q), visibility: I(an)
        }), Ep = K(Ro, {href: I(Yo)}), yp = K(Ro, {LinearRing: Nl($o)}),
        Gp = K(Ro, {Style: I(np), key: I(Q), styleUrl: I(Yo)}), Ip = K(Ro, {
            ExtendedData: pp,
            Region: rp,
            MultiGeometry: I(hp, "geometry"),
            LineString: I(dp, "geometry"),
            LinearRing: I(gp, "geometry"),
            Point: I(kp, "geometry"),
            Polygon: I(lp, "geometry"),
            Style: I(np),
            StyleMap: function (a, b) {
                if (a = L(void 0, Hp, a, b)) b = b[b.length - 1], Array.isArray(a) ? b.Style = a : "string" === typeof a ? b.styleUrl = a : va(!1, 38)
            },
            address: I(Q),
            description: I(Q),
            name: I(Q),
            open: I(an),
            phoneNumber: I(Q),
            styleUrl: I(Yo),
            visibility: I(an)
        }, K(Qo, {
            MultiTrack: I(function (a, b) {
                if (a = L([], Dp, a, b))return b = new N(null), gm(b, a), b
            }, "geometry"), Track: I(bp, "geometry")
        })),
        Jp = K(Ro, {color: I(Wo), fill: I(an), outline: I(an)}), up = K(Ro, {
            SimpleData: function (a, b) {
                var c = a.getAttribute("name");
                null !== c && (a = Q(a), b[b.length - 1][c] = a)
            }
        }), op = K(Ro, {
            IconStyle: function (a, b) {
                if (a = L({}, Ap, a, b)) {
                    b = b[b.length - 1];
                    var c = "Icon" in a ? a.Icon : {}, d = !("Icon" in a) || 0 < Object.keys(c).length, e, f = c.href;
                    f ? e = f : d && (e = Io);
                    f = "bottom-left";
                    var g = a.hotSpot;
                    if (g) {
                        var h = [g.x, g.y];
                        var l = g.bh;
                        var m = g.dh;
                        f = g.origin
                    } else e === Io ? (h = Eo, l = Go, m = Fo) : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(e) && (h = [.5, 0], m = l = "fraction");
                    var n;
                    g = c.x;
                    var p = c.y;
                    void 0 !== g && void 0 !== p && (n = [g, p]);
                    var q;
                    g = c.w;
                    c = c.h;
                    void 0 !== g && void 0 !== c && (q = [g, c]);
                    var t;
                    c = a.heading;
                    void 0 !== c && (t = Fa(c));
                    a = a.scale;
                    d ? (e == Io && (q = Ho, void 0 === a && (a = Jo)), e = new yo({
                        anchor: h,
                        anchorOrigin: f,
                        anchorXUnits: l,
                        anchorYUnits: m,
                        crossOrigin: "anonymous",
                        offset: n,
                        offsetOrigin: "bottom-left",
                        rotation: t,
                        scale: a,
                        size: q,
                        src: e
                    }), b.imageStyle = e) : b.imageStyle = Lo
                }
            }, LabelStyle: function (a, b) {
                (a = L({}, Bp, a, b)) && (b[b.length - 1].textStyle = new zo({
                    fill: new ul({
                        color: "color" in a ? a.color :
                            Co
                    }), scale: a.scale
                }))
            }, LineStyle: function (a, b) {
                (a = L({}, Cp, a, b)) && (b[b.length - 1].strokeStyle = new Ej({
                    color: "color" in a ? a.color : Co,
                    width: "width" in a ? a.width : 1
                }))
            }, PolyStyle: function (a, b) {
                if (a = L({}, Jp, a, b)) {
                    b = b[b.length - 1];
                    b.fillStyle = new ul({color: "color" in a ? a.color : Co});
                    var c = a.fill;
                    void 0 !== c && (b.fill = c);
                    a = a.outline;
                    void 0 !== a && (b.outline = a)
                }
            }
        }), Hp = K(Ro, {
            Pair: function (a, b) {
                if (a = L({}, Gp, a, b)) {
                    var c = a.key;
                    c && "normal" == c && ((c = a.styleUrl) && (b[b.length - 1] = c), (a = a.Style) && (b[b.length - 1] = a))
                }
            }
        });
    k = Ao.prototype;
    k.Dg = function (a, b) {
        var c = K(Ro, {
            Document: Kl(this.Dg, this),
            Folder: Kl(this.Dg, this),
            Placemark: Ll(this.Lg, this),
            Style: this.Wp.bind(this),
            StyleMap: this.Vp.bind(this)
        });
        if (a = L([], c, a, b, this))return a
    };
    k.Lg = function (a, b) {
        var c = L({geometry: null}, Ip, a, b);
        if (c) {
            var d = new Bl;
            a = a.getAttribute("id");
            null !== a && d.kc(a);
            b = b[0];
            (a = c.geometry) && am(a, !1, b);
            d.Ra(a);
            delete c.geometry;
            this.c && d.pg(Uo(c.Style, c.styleUrl, this.a, this.b, this.g));
            delete c.Style;
            d.H(c);
            return d
        }
    };
    k.Wp = function (a, b) {
        var c = a.getAttribute("id");
        null !== c && (b = np(a, b)) && (a = a.baseURI && "about:blank" !== a.baseURI ? (new URL("#" + c, a.baseURI)).href : "#" + c, this.b[a] = b)
    };
    k.Vp = function (a, b) {
        var c = a.getAttribute("id");
        null !== c && (b = L(void 0, Hp, a, b)) && (a = a.baseURI && "about:blank" !== a.baseURI ? (new URL("#" + c, a.baseURI)).href : "#" + c, this.b[a] = b)
    };
    k.Fg = function (a, b) {
        return ha(Ro, a.namespaceURI) ? (a = this.Lg(a, [Zl(this, a, b)])) ? a : null : null
    };
    k.Ac = function (a, b) {
        if (!ha(Ro, a.namespaceURI))return [];
        var c = a.localName;
        if ("Document" == c || "Folder" == c)return (c = this.Dg(a, [Zl(this, a, b)])) ? c : [];
        if ("Placemark" == c)return (b = this.Lg(a, [Zl(this, a, b)])) ? [b] : [];
        if ("kml" == c) {
            c = [];
            for (a = a.firstElementChild; a; a = a.nextElementSibling) {
                var d = this.Ac(a, b);
                d && ka(c, d)
            }
            return c
        }
        return []
    };
    k.Pp = function (a) {
        if (Hl(a))return Kp(this, a);
        if (Il(a))return Lp(this, a);
        if ("string" === typeof a)return a = Jl(a), Kp(this, a)
    };
    function Kp(a, b) {
        for (b = b.firstChild; b; b = b.nextSibling)if (b.nodeType == Node.ELEMENT_NODE) {
            var c = Lp(a, b);
            if (c)return c
        }
    }

    function Lp(a, b) {
        var c;
        for (c = b.firstElementChild; c; c = c.nextElementSibling)if (ha(Ro, c.namespaceURI) && "name" == c.localName)return Q(c);
        for (c = b.firstElementChild; c; c = c.nextElementSibling)if (b = c.localName, ha(Ro, c.namespaceURI) && ("Document" == b || "Folder" == b || "Placemark" == b || "kml" == b) && (b = Lp(a, c)))return b
    }

    k.Qp = function (a) {
        var b = [];
        Hl(a) ? ka(b, Mp(this, a)) : Il(a) ? ka(b, Np(this, a)) : "string" === typeof a && (a = Jl(a), ka(b, Mp(this, a)));
        return b
    };
    function Mp(a, b) {
        var c = [];
        for (b = b.firstChild; b; b = b.nextSibling)b.nodeType == Node.ELEMENT_NODE && ka(c, Np(a, b));
        return c
    }

    function Np(a, b) {
        var c, d = [];
        for (c = b.firstElementChild; c; c = c.nextElementSibling)if (ha(Ro, c.namespaceURI) && "NetworkLink" == c.localName) {
            var e = L({}, Fp, c, []);
            d.push(e)
        }
        for (c = b.firstElementChild; c; c = c.nextElementSibling)b = c.localName, !ha(Ro, c.namespaceURI) || "Document" != b && "Folder" != b && "kml" != b || ka(d, Np(a, c));
        return d
    }

    k.Tp = function (a) {
        var b = [];
        Hl(a) ? ka(b, Op(this, a)) : Il(a) ? ka(b, this.wf(a)) : "string" === typeof a && (a = Jl(a), ka(b, Op(this, a)));
        return b
    };
    function Op(a, b) {
        var c = [];
        for (b = b.firstChild; b; b = b.nextSibling)b.nodeType == Node.ELEMENT_NODE && ka(c, a.wf(b));
        return c
    }

    k.wf = function (a) {
        var b, c = [];
        for (b = a.firstElementChild; b; b = b.nextElementSibling)if (ha(Ro, b.namespaceURI) && "Region" == b.localName) {
            var d = L({}, sp, b, []);
            c.push(d)
        }
        for (b = a.firstElementChild; b; b = b.nextElementSibling)a = b.localName, !ha(Ro, b.namespaceURI) || "Document" != a && "Folder" != a && "kml" != a || ka(c, this.wf(b));
        return c
    };
    function Pp(a, b) {
        b = gd(b);
        b = [255 * (4 == b.length ? b[3] : 1), b[2], b[1], b[0]];
        var c;
        for (c = 0; 4 > c; ++c) {
            var d = parseInt(b[c], 10).toString(16);
            b[c] = 1 == d.length ? "0" + d : d
        }
        jn(a, b.join(""))
    }

    function Qp(a, b, c) {
        a = {node: a};
        var d = b.T();
        if ("GeometryCollection" == d) {
            var e = b.kd();
            var f = Rp
        } else"MultiPoint" == d ? (e = b.ee(), f = Sp) : "MultiLineString" == d ? (e = b.ld(), f = Tp) : "MultiPolygon" == d ? (e = b.$d(), f = Up) : va(!1, 39);
        Vl(a, Vp, f, e, c)
    }

    function Wp(a, b, c) {
        Vl({node: a}, Xp, Yp, [b], c)
    }

    function Zp(a, b, c) {
        var d = {node: a};
        b.a && a.setAttribute("id", b.a);
        a = b.N();
        var e = {address: 1, description: 1, name: 1, open: 1, phoneNumber: 1, styleUrl: 1, visibility: 1};
        e[b.c] = 1;
        var f = Object.keys(a || {}).sort().filter(function (a) {
            return !e[a]
        });
        if (0 < f.length) {
            var g = Tl(a, f);
            Vl(d, $p, aq, [{names: f, values: g}], c)
        }
        if (f = b.bb())if (f = f.call(b, 0)) f = Array.isArray(f) ? f[0] : f, this.j && (a.Style = f), (f = f.Ja()) && (a.name = f.Ja());
        f = bq[c[c.length - 1].node.namespaceURI];
        a = Tl(a, f);
        Vl(d, $p, Sl, a, c, f);
        a = c[0];
        (b = b.W()) && (b = am(b, !0, a));
        Vl(d,
            $p, Rp, [b], c)
    }

    function cq(a, b, c) {
        var d = b.ba();
        a = {node: a};
        a.layout = b.ja;
        a.stride = b.ma();
        b = b.N();
        b.coordinates = d;
        d = dq[c[c.length - 1].node.namespaceURI];
        b = Tl(b, d);
        Vl(a, eq, Sl, b, c, d)
    }

    function fq(a, b, c) {
        b = b.Zd();
        var d = b.shift();
        a = {node: a};
        Vl(a, gq, hq, b, c);
        Vl(a, gq, iq, [d], c)
    }

    function jq(a, b) {
        kn(a, Math.round(1E6 * b) / 1E6)
    }

    var kq = K(Ro, ["Document", "Placemark"]), nq = K(Ro, {
            Document: J(function (a, b, c) {
                Vl({node: a}, lq, mq, b, c, void 0, this)
            }), Placemark: J(Zp)
        }), lq = K(Ro, {Placemark: J(Zp)}), oq = K(Ro, {
            Data: J(function (a, b, c) {
                a.setAttribute("name", b.name);
                a = {node: a};
                b = b.value;
                "object" == typeof b ? (null !== b && b.displayName && Vl(a, oq, Sl, [b.displayName], c, ["displayName"]), null !== b && b.value && Vl(a, oq, Sl, [b.value], c, ["value"])) : Vl(a, oq, Sl, [b], c, ["value"])
            }), value: J(function (a, b) {
                jn(a, b)
            }), displayName: J(function (a, b) {
                a.appendChild(Dl.createCDATASection(b))
            })
        }),
        pq = {
            Point: "Point",
            LineString: "LineString",
            LinearRing: "LinearRing",
            Polygon: "Polygon",
            MultiPoint: "MultiGeometry",
            MultiLineString: "MultiGeometry",
            MultiPolygon: "MultiGeometry",
            GeometryCollection: "MultiGeometry"
        }, qq = K(Ro, ["href"], K(Qo, ["x", "y", "w", "h"])),
        rq = K(Ro, {href: J(jn)}, K(Qo, {x: J(kn), y: J(kn), w: J(kn), h: J(kn)})),
        sq = K(Ro, ["scale", "heading", "Icon", "hotSpot"]), uq = K(Ro, {
            Icon: J(function (a, b, c) {
                a = {node: a};
                var d = qq[c[c.length - 1].node.namespaceURI], e = Tl(b, d);
                Vl(a, rq, Sl, e, c, d);
                d = qq[Qo[0]];
                e = Tl(b, d);
                Vl(a, rq,
                    tq, e, c, d)
            }), heading: J(kn), hotSpot: J(function (a, b) {
                a.setAttribute("x", b.x);
                a.setAttribute("y", b.y);
                a.setAttribute("xunits", b.bh);
                a.setAttribute("yunits", b.dh)
            }), scale: J(jq)
        }), vq = K(Ro, ["color", "scale"]), wq = K(Ro, {color: J(Pp), scale: J(jq)}), xq = K(Ro, ["color", "width"]),
        yq = K(Ro, {color: J(Pp), width: J(kn)}), Xp = K(Ro, {LinearRing: J(cq)}),
        Vp = K(Ro, {LineString: J(cq), Point: J(cq), Polygon: J(fq), GeometryCollection: J(Qp)}),
        bq = K(Ro, "name open visibility address phoneNumber description styleUrl Style".split(" ")), $p = K(Ro,
        {
            ExtendedData: J(function (a, b, c) {
                a = {node: a};
                var d = b.names;
                b = b.values;
                for (var e = d.length, f = 0; f < e; f++)Vl(a, oq, zq, [{name: d[f], value: b[f]}], c)
            }),
            MultiGeometry: J(Qp),
            LineString: J(cq),
            LinearRing: J(cq),
            Point: J(cq),
            Polygon: J(fq),
            Style: J(function (a, b, c) {
                a = {node: a};
                var d = {}, e = b.Da(), f = b.Ea(), g = b.Y();
                b = b.Ja();
                g instanceof yo && (d.IconStyle = g);
                b && (d.LabelStyle = b);
                f && (d.LineStyle = f);
                e && (d.PolyStyle = e);
                b = Aq[c[c.length - 1].node.namespaceURI];
                d = Tl(d, b);
                Vl(a, Bq, Sl, d, c, b)
            }),
            address: J(jn),
            description: J(jn),
            name: J(jn),
            open: J(hn),
            phoneNumber: J(jn),
            styleUrl: J(jn),
            visibility: J(hn)
        }), dq = K(Ro, ["extrude", "tessellate", "altitudeMode", "coordinates"]), eq = K(Ro, {
            extrude: J(hn), tessellate: J(hn), altitudeMode: J(jn), coordinates: J(function (a, b, c) {
                c = c[c.length - 1];
                var d = c.layout;
                c = c.stride;
                var e;
                "XY" == d || "XYM" == d ? e = 2 : "XYZ" == d || "XYZM" == d ? e = 3 : va(!1, 34);
                var f, g = b.length, h = "";
                if (0 < g) {
                    h += b[0];
                    for (d = 1; d < e; ++d)h += "," + b[d];
                    for (f = c; f < g; f += c)for (h += " " + b[f], d = 1; d < e; ++d)h += "," + b[f + d]
                }
                jn(a, h)
            })
        }), gq = K(Ro, {outerBoundaryIs: J(Wp), innerBoundaryIs: J(Wp)}),
        Cq = K(Ro, {color: J(Pp)}), Aq = K(Ro, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]), Bq = K(Ro, {
            IconStyle: J(function (a, b, c) {
                a = {node: a};
                var d = {}, e = b.ic(), f = b.Ie(), g = {href: b.b.l};
                if (e) {
                    g.w = e[0];
                    g.h = e[1];
                    var h = b.Jc(), l = b.Rc();
                    l && f && l[0] && l[1] !== e[1] && (g.x = l[0], g.y = f[1] - (l[1] + e[1]));
                    !h || h[0] === e[0] / 2 && h[1] === e[1] / 2 || (d.hotSpot = {
                        x: h[0],
                        bh: "pixels",
                        y: e[1] - h[1],
                        dh: "pixels"
                    })
                }
                d.Icon = g;
                e = b.a;
                1 !== e && (d.scale = e);
                (b = b.g) && (d.heading = b);
                b = sq[c[c.length - 1].node.namespaceURI];
                d = Tl(d, b);
                Vl(a, uq, Sl, d, c, b)
            }), LabelStyle: J(function (a,
                                        b, c) {
                a = {node: a};
                var d = {}, e = b.Da();
                e && (d.color = e.b);
                (b = b.b) && 1 !== b && (d.scale = b);
                b = vq[c[c.length - 1].node.namespaceURI];
                d = Tl(d, b);
                Vl(a, wq, Sl, d, c, b)
            }), LineStyle: J(function (a, b, c) {
                a = {node: a};
                var d = xq[c[c.length - 1].node.namespaceURI];
                b = Tl({color: b.b, width: b.c}, d);
                Vl(a, yq, Sl, b, c, d)
            }), PolyStyle: J(function (a, b, c) {
                Vl({node: a}, Cq, Dq, [b.b], c)
            })
        });

    function tq(a, b, c) {
        return El(Qo[0], "gx:" + c)
    }

    function mq(a, b) {
        return El(b[b.length - 1].node.namespaceURI, "Placemark")
    }

    function Rp(a, b) {
        if (a)return El(b[b.length - 1].node.namespaceURI, pq[a.T()])
    }

    var Dq = Ql("color"), zq = Ql("Data"), aq = Ql("ExtendedData"), hq = Ql("innerBoundaryIs"), Sp = Ql("Point"),
        Tp = Ql("LineString"), Yp = Ql("LinearRing"), Up = Ql("Polygon"), iq = Ql("outerBoundaryIs");
    Ao.prototype.Yb = function (a, b) {
        b = $l(this, b);
        var c = El(Ro[4], "kml");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:gx", Qo[0]);
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var d = {node: c}, e = {};
        1 < a.length ? e.Document = a : 1 == a.length && (e.Placemark = a[0]);
        a = kq[c.namespaceURI];
        e = Tl(e, a);
        Vl(d, nq, Sl, e, [b], a, this);
        return c
    };
    Nj.Id = function () {
    };
    (function (a) {
        function b(a) {
            this.nc = ArrayBuffer.isView && ArrayBuffer.isView(a) ? a : new Uint8Array(a || 0);
            this.type = this.fa = 0;
            this.length = this.nc.length
        }

        function c(a, b, c) {
            var e = c.nc;
            var f = e[c.fa++];
            var g = (f & 112) >> 4;
            if (128 > f)return d(a, g, b);
            f = e[c.fa++];
            g |= (f & 127) << 3;
            if (128 > f)return d(a, g, b);
            f = e[c.fa++];
            g |= (f & 127) << 10;
            if (128 > f)return d(a, g, b);
            f = e[c.fa++];
            g |= (f & 127) << 17;
            if (128 > f)return d(a, g, b);
            f = e[c.fa++];
            g |= (f & 127) << 24;
            if (128 > f)return d(a, g, b);
            f = e[c.fa++];
            if (128 > f)return d(a, g | (f & 1) << 31, b);
            throw Error("Expected varint not more than 10 bytes");
        }

        function d(a, b, c) {
            return c ? 4294967296 * b + (a >>> 0) : 4294967296 * (b >>> 0) + (a >>> 0)
        }

        var e = {
            read: function (a, b, c, d, e) {
                var f = 8 * e - d - 1;
                var g = (1 << f) - 1, h = g >> 1, l = -7;
                e = c ? e - 1 : 0;
                var m = c ? -1 : 1, x = a[b + e];
                e += m;
                c = x & (1 << -l) - 1;
                x >>= -l;
                for (l += f; 0 < l; c = 256 * c + a[b + e], e += m, l -= 8);
                f = c & (1 << -l) - 1;
                c >>= -l;
                for (l += d; 0 < l; f = 256 * f + a[b + e], e += m, l -= 8);
                if (0 === c) c = 1 - h; else {
                    if (c === g)return f ? NaN : Infinity * (x ? -1 : 1);
                    f += Math.pow(2, d);
                    c -= h
                }
                return (x ? -1 : 1) * f * Math.pow(2, c - d)
            }, write: function (a, b, c, d, e, n) {
                var f, g = 8 * n - e - 1, h = (1 << g) - 1, l = h >> 1, m = 23 === e ? Math.pow(2,
                        -24) - Math.pow(2, -77) : 0;
                n = d ? 0 : n - 1;
                var B = d ? 1 : -1, z = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
                b = Math.abs(b);
                isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, d = h) : (d = Math.floor(Math.log(b) / Math.LN2), 1 > b * (f = Math.pow(2, -d)) && (d--, f *= 2), b = 1 <= d + l ? b + m / f : b + m * Math.pow(2, 1 - l), 2 <= b * f && (d++, f /= 2), d + l >= h ? (b = 0, d = h) : 1 <= d + l ? (b = (b * f - 1) * Math.pow(2, e), d += l) : (b = b * Math.pow(2, l - 1) * Math.pow(2, e), d = 0));
                for (; 8 <= e; a[c + n] = b & 255, n += B, b /= 256, e -= 8);
                d = d << e | b;
                for (g += e; 0 < g; a[c + n] = d & 255, n += B, d /= 256, g -= 8);
                a[c + n - B] |= 128 * z
            }
        };
        b.c = 0;
        b.f = 1;
        b.b = 2;
        b.a = 5;
        b.prototype = {
            Ig: function (a,
                          b, c) {
                for (c = c || this.length; this.fa < c;) {
                    var d = this.La(), e = d >> 3, f = this.fa;
                    this.type = d & 7;
                    a(e, b, this);
                    this.fa === f && this.Aq(d)
                }
                return b
            }, Lp: function () {
                var a = e.read(this.nc, this.fa, !0, 23, 4);
                this.fa += 4;
                return a
            }, Hp: function () {
                var a = e.read(this.nc, this.fa, !0, 52, 8);
                this.fa += 8;
                return a
            }, La: function (a) {
                var b = this.nc;
                var d = b[this.fa++];
                var e = d & 127;
                if (128 > d)return e;
                d = b[this.fa++];
                e |= (d & 127) << 7;
                if (128 > d)return e;
                d = b[this.fa++];
                e |= (d & 127) << 14;
                if (128 > d)return e;
                d = b[this.fa++];
                e |= (d & 127) << 21;
                if (128 > d)return e;
                d = b[this.fa];
                return c(e | (d & 15) << 28, a, this)
            }, Xp: function () {
                return this.La(!0)
            }, je: function () {
                var a = this.La();
                return 1 === a % 2 ? (a + 1) / -2 : a / 2
            }, Fp: function () {
                return !!this.La()
            }, Og: function () {
                for (var a = this.La() + this.fa, b = this.nc, c = "", d = this.fa; d < a;) {
                    var e = b[d], n = null, p = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
                    if (d + p > a)break;
                    if (1 === p) 128 > e && (n = e); else if (2 === p) {
                        var q = b[d + 1];
                        128 === (q & 192) && (n = (e & 31) << 6 | q & 63, 127 >= n && (n = null))
                    } else if (3 === p) {
                        q = b[d + 1];
                        var t = b[d + 2];
                        128 === (q & 192) && 128 === (t & 192) && (n = (e & 15) << 12 | (q & 63) << 6 | t & 63, 2047 >= n || 55296 <=
                        n && 57343 >= n) && (n = null)
                    } else if (4 === p) {
                        q = b[d + 1];
                        t = b[d + 2];
                        var u = b[d + 3];
                        128 === (q & 192) && 128 === (t & 192) && 128 === (u & 192) && (n = (e & 15) << 18 | (q & 63) << 12 | (t & 63) << 6 | u & 63, 65535 >= n || 1114112 <= n) && (n = null)
                    }
                    null === n ? (n = 65533, p = 1) : 65535 < n && (n -= 65536, c += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023);
                    c += String.fromCharCode(n);
                    d += p
                }
                this.fa = a;
                return c
            }, Aq: function (a) {
                a &= 7;
                if (a === b.c)for (; 127 < this.nc[this.fa++];); else if (a === b.b) this.fa = this.La() + this.fa; else if (a === b.a) this.fa += 4; else if (a === b.f) this.fa += 8; else throw Error("Unimplemented type: " +
                    a);
            }
        };
        a["default"] = b
    })(Nj.Id = Nj.Id || {});
    Nj.Id = Nj.Id.default;
    Nj.Gf = {};
    Nj.Gf.Kf = function () {
    };
    (function (a) {
        function b(a, b) {
            this.layers = a.Ig(l, {}, b)
        }

        function c(a, b) {
            this.x = a;
            this.y = b
        }

        function d(a, b, c, d, f) {
            this.properties = {};
            this.extent = c;
            this.type = 0;
            this.Dc = a;
            this.Mf = -1;
            this.ye = d;
            this.Ae = f;
            a.Ig(e, this, b)
        }

        function e(a, b, c) {
            if (1 == a) b.id = c.La(); else if (2 == a)for (a = c.La() + c.fa; c.fa < a;) {
                var d = b.ye[c.La()], e = b.Ae[c.La()];
                b.properties[d] = e
            } else 3 == a ? b.type = c.La() : 4 == a && (b.Mf = c.fa)
        }

        function f(a, b) {
            this.version = 1;
            this.name = null;
            this.extent = 4096;
            this.length = 0;
            this.Dc = a;
            this.ye = [];
            this.Ae = [];
            this.xe = [];
            a.Ig(g, this, b);
            this.length = this.xe.length
        }

        function g(a, b, c) {
            15 === a ? b.version = c.La() : 1 === a ? b.name = c.Og() : 5 === a ? b.extent = c.La() : 2 === a ? b.xe.push(c.fa) : 3 === a ? b.ye.push(c.Og()) : 4 === a && b.Ae.push(h(c))
        }

        function h(a) {
            for (var b = null,
                     c = a.La() + a.fa; a.fa < c;)b = a.La() >> 3, b = 1 === b ? a.Og() : 2 === b ? a.Lp() : 3 === b ? a.Hp() : 4 === b ? a.Xp() : 5 === b ? a.La() : 6 === b ? a.je() : 7 === b ? a.Fp() : null;
            return b
        }

        function l(a, b, c) {
            3 === a && (a = new m(c, c.La() + c.fa), a.length && (b[a.name] = a))
        }

        c.prototype = {
            clone: function () {
                return new c(this.x, this.y)
            }, add: function (a) {
                return this.clone().hk(a)
            },
            rotate: function (a) {
                return this.clone().sk(a)
            }, round: function () {
                return this.clone().tk()
            }, angle: function () {
                return Math.atan2(this.y, this.x)
            }, hk: function (a) {
                this.x += a.x;
                this.y += a.y;
                return this
            }, sk: function (a) {
                var b = Math.cos(a);
                a = Math.sin(a);
                var c = a * this.x + b * this.y;
                this.x = b * this.x - a * this.y;
                this.y = c;
                return this
            }, tk: function () {
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                return this
            }
        };
        c.Zq = function (a) {
            return a instanceof c ? a : Array.isArray(a) ? new c(a[0], a[1]) : a
        };
        d.b = ["Unknown", "Point", "LineString",
            "Polygon"];
        d.prototype.Xh = function () {
            var a = this.Dc;
            a.fa = this.Mf;
            for (var b = a.La() + a.fa, d = 1, e = 0, f = 0, g = 0, h = [],
                     l; a.fa < b;)if (e || (e = a.La(), d = e & 7, e >>= 3), e--, 1 === d || 2 === d) f += a.je(), g += a.je(), 1 === d && (l && h.push(l), l = []), l.push(new c(f, g)); else if (7 === d) l && l.push(l[0].clone()); else throw Error("unknown command " + d);
            l && h.push(l);
            return h
        };
        d.prototype.bbox = function () {
            var a = this.Dc;
            a.fa = this.Mf;
            for (var b = a.La() + a.fa, c = 1, d = 0, e = 0, f = 0, g = Infinity, h = -Infinity, l = Infinity,
                     m = -Infinity; a.fa < b;)if (d || (d = a.La(), c = d & 7, d >>=
                    3), d--, 1 === c || 2 === c) e += a.je(), f += a.je(), e < g && (g = e), e > h && (h = e), f < l && (l = f), f > m && (m = f); else if (7 !== c)throw Error("unknown command " + c);
            return [g, l, h, m]
        };
        var m = f;
        f.prototype.feature = function (a) {
            if (0 > a || a >= this.xe.length)throw Error("feature index out of bounds");
            this.Dc.fa = this.xe[a];
            a = this.Dc.La() + this.Dc.fa;
            return new d(this.Dc, a, this.extent, this.ye, this.Ae)
        };
        var n = m;
        a["default"] = {Kf: b, fk: d, gk: n};
        a.Kf = b;
        a.fk = d;
        a.gk = n
    })(Nj.Gf = Nj.Gf || {});
    function Eq(a, b, c, d, e) {
        this.g = e;
        this.f = a;
        this.b = b;
        this.i = c;
        this.c = d
    }

    k = Eq.prototype;
    k.get = function (a) {
        return this.c[a]
    };
    k.sb = function () {
        return this.i
    };
    k.G = function () {
        this.a || (this.a = "Point" === this.f ? Xa(this.b) : Za(this.b, 0, this.b.length, 2));
        return this.a
    };
    k.lo = function () {
        return this.g
    };
    k.Tb = function () {
        return this.b
    };
    k.ba = Eq.prototype.Tb;
    k.W = function () {
        return this
    };
    k.mo = function () {
        return this.c
    };
    k.ae = Eq.prototype.W;
    k.ma = function () {
        return 2
    };
    k.bb = ra;
    k.T = function () {
        return this.f
    };
    function Fq(a) {
        Yl.call(this);
        a = a ? a : {};
        this.defaultDataProjection = new Db({code: "", units: "tile-pixels"});
        this.b = a.featureClass ? a.featureClass : Eq;
        this.f = a.geometryName;
        this.c = a.layerName ? a.layerName : "layer";
        this.g = a.layers ? a.layers : null;
        this.a = null
    }

    v(Fq, Yl);
    k = Fq.prototype;
    k.eg = function () {
        return this.a
    };
    k.T = function () {
        return "arraybuffer"
    };
    k.Oa = function (a, b) {
        var c = this.g;
        a = new Nj.Id(a);
        a = new Nj.Gf.Kf(a);
        var d = [], e = this.b, f;
        for (f in a.layers)if (!c || -1 != c.indexOf(f)) {
            var g = a.layers[f];
            for (var h, l = 0, m = g.length; l < m; ++l) {
                h = g.feature(l);
                if (e === Eq) {
                    var n = void 0;
                    var p = f, q = h.Xh(), t = [], u = [];
                    Gq(q, u, t);
                    var x = h.type;
                    1 === x ? n = 1 === q.length ? "Point" : "MultiPoint" : 2 === x ? n = 1 === q.length ? "LineString" : "MultiLineString" : 3 === x && (n = "Polygon");
                    q = h.properties;
                    q[this.c] = p;
                    n = new this.b(n, u, t, q, h.id)
                } else {
                    x = h;
                    u = f;
                    t = b;
                    n = new this.b;
                    h = x.id;
                    p = x.properties;
                    p[this.c] = u;
                    this.f && n.Wc(this.f);
                    u = void 0;
                    q = x.type;
                    if (0 === q) u = null; else {
                        x = x.Xh();
                        var B = [], z = [];
                        Gq(x, z, B);
                        1 === q ? u = 1 === x.length ? new C(null) : new O(null) : 2 === q ? 1 === x.length ? u = new M(null) : u = new N(null) : 3 === q && (u = new D(null));
                        u.aa("XY", z, B)
                    }
                    t = am(u, !1, $l(this, t));
                    n.Ra(t);
                    n.kc(h);
                    n.H(p)
                }
                d.push(n)
            }
            this.a = g ? [0, 0, g.extent, g.extent] : null
        }
        return d
    };
    k.ob = function () {
        return this.defaultDataProjection
    };
    k.Cn = function (a) {
        this.g = a
    };
    function Gq(a, b, c) {
        for (var d = 0, e = 0, f = a.length; e < f; ++e) {
            var g = a[e], h;
            var l = 0;
            for (h = g.length; l < h; ++l) {
                var m = g[l];
                b.push(m.x, m.y)
            }
            d += 2 * l;
            c.push(d)
        }
    }

    k.Ub = function () {
    };
    k.Vc = function () {
    };
    k.Gd = function () {
    };
    k.dd = function () {
    };
    k.Xb = function () {
    };
    function Hq() {
        Wm.call(this);
        this.defaultDataProjection = Wb("EPSG:4326")
    }

    v(Hq, Wm);
    function Iq(a, b) {
        b[b.length - 1].oe[a.getAttribute("k")] = a.getAttribute("v")
    }

    var Jq = [null], Kq = K(Jq, {
        nd: function (a, b) {
            b[b.length - 1].td.push(a.getAttribute("ref"))
        }, tag: Iq
    }), Mq = K(Jq, {
        node: function (a, b) {
            var c = b[0], d = b[b.length - 1], e = a.getAttribute("id"),
                f = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
            d.ai[e] = f;
            a = L({oe: {}}, Lq, a, b);
            ub(a.oe) || (f = new C(f), am(f, !1, c), c = new Bl(f), c.kc(e), c.H(a.oe), d.features.push(c))
        }, way: function (a, b) {
            var c = b[0], d = a.getAttribute("id");
            a = L({td: [], oe: {}}, Kq, a, b);
            b = b[b.length - 1];
            for (var e = [], f = 0, g = a.td.length; f < g; f++)ka(e, b.ai[a.td[f]]);
            a.td[0] == a.td[a.td.length - 1] ? (f = new D(null), f.aa("XY", e, [e.length])) : (f = new M(null), f.aa("XY", e));
            am(f, !1, c);
            c = new Bl(f);
            c.kc(d);
            c.H(a.oe);
            b.features.push(c)
        }
    }), Lq = K(Jq, {tag: Iq});
    Hq.prototype.Ac = function (a, b) {
        b = Zl(this, a, b);
        return "osm" == a.localName && (a = L({ai: {}, features: []}, Mq, a, [b]), a.features) ? a.features : []
    };
    Hq.prototype.$g = function () {
    };
    Hq.prototype.Yb = function () {
    };
    Hq.prototype.te = function () {
    };
    function Nq(a) {
        return a.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    };
    function Oq() {
    }

    Oq.prototype.read = function (a) {
        return Hl(a) ? this.a(a) : Il(a) ? this.b(a) : "string" === typeof a ? (a = Jl(a), this.a(a)) : null
    };
    function Pq() {
    }

    v(Pq, Oq);
    Pq.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    Pq.prototype.b = function (a) {
        return (a = L({}, Qq, a, [])) ? a : null
    };
    var Rq = [null, "http://www.opengis.net/ows/1.1"], Qq = K(Rq, {
        ServiceIdentification: I(function (a, b) {
            return L({}, Sq, a, b)
        }), ServiceProvider: I(function (a, b) {
            return L({}, Tq, a, b)
        }), OperationsMetadata: I(function (a, b) {
            return L({}, Uq, a, b)
        })
    }), Vq = K(Rq, {
        DeliveryPoint: I(Q),
        City: I(Q),
        AdministrativeArea: I(Q),
        PostalCode: I(Q),
        Country: I(Q),
        ElectronicMailAddress: I(Q)
    }), Wq = K(Rq, {
        Value: Ol(function (a) {
            return Q(a)
        })
    }), Xq = K(Rq, {
        AllowedValues: I(function (a, b) {
            return L({}, Wq, a, b)
        })
    }), $q = K(Rq, {
        Phone: I(function (a, b) {
            return L({},
                Yq, a, b)
        }), Address: I(function (a, b) {
            return L({}, Vq, a, b)
        })
    }), br = K(Rq, {
        HTTP: I(function (a, b) {
            return L({}, ar, a, b)
        })
    }), ar = K(Rq, {
        Get: Ol(function (a, b) {
            var c = Nq(a);
            if (c)return L({href: c}, cr, a, b)
        }), Post: void 0
    }), dr = K(Rq, {
        DCP: I(function (a, b) {
            return L({}, br, a, b)
        })
    }), Uq = K(Rq, {
        Operation: function (a, b) {
            var c = a.getAttribute("name");
            (a = L({}, dr, a, b)) && (b[b.length - 1][c] = a)
        }
    }), Yq = K(Rq, {Voice: I(Q), Facsimile: I(Q)}), cr = K(Rq, {
        Constraint: Ol(function (a, b) {
            var c = a.getAttribute("name");
            if (c)return L({name: c}, Xq, a, b)
        })
    }), er = K(Rq,
        {
            IndividualName: I(Q), PositionName: I(Q), ContactInfo: I(function (a, b) {
            return L({}, $q, a, b)
        })
        }), Sq = K(Rq, {Title: I(Q), ServiceTypeVersion: I(Q), ServiceType: I(Q)}), Tq = K(Rq, {
        ProviderName: I(Q), ProviderSite: I(Nq), ServiceContact: I(function (a, b) {
            return L({}, er, a, b)
        })
    });

    function fr(a, b, c, d) {
        var e;
        void 0 !== d ? e = d : e = [];
        for (var f = d = 0; f < b;) {
            var g = a[f++];
            e[d++] = a[f++];
            e[d++] = g;
            for (g = 2; g < c; ++g)e[d++] = a[f++]
        }
        e.length = d
    };
    function gr(a) {
        a = a ? a : {};
        Yl.call(this);
        this.defaultDataProjection = Wb("EPSG:4326");
        this.b = a.factor ? a.factor : 1E5;
        this.a = a.geometryLayout ? a.geometryLayout : "XY"
    }

    v(gr, po);
    function hr(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d)e[d] = 0;
        var f;
        var g = 0;
        for (f = a.length; g < f;)for (d = 0; d < b; ++d, ++g) {
            var h = a[g], l = h - e[d];
            e[d] = h;
            a[g] = l
        }
        return ir(a, c ? c : 1E5)
    }

    function jr(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d)e[d] = 0;
        a = kr(a, c ? c : 1E5);
        var f;
        c = 0;
        for (f = a.length; c < f;)for (d = 0; d < b; ++d, ++c)e[d] += a[c], a[c] = e[d];
        return a
    }

    function ir(a, b) {
        b = b ? b : 1E5;
        var c;
        var d = 0;
        for (c = a.length; d < c; ++d)a[d] = Math.round(a[d] * b);
        b = 0;
        for (d = a.length; b < d; ++b)c = a[b], a[b] = 0 > c ? ~(c << 1) : c << 1;
        b = "";
        d = 0;
        for (c = a.length; d < c; ++d) {
            for (var e, f = a[d], g = ""; 32 <= f;)e = (32 | f & 31) + 63, g += String.fromCharCode(e), f >>= 5;
            g += String.fromCharCode(f + 63);
            b += g
        }
        return b
    }

    function kr(a, b) {
        b = b ? b : 1E5;
        var c = [], d = 0, e = 0, f;
        var g = 0;
        for (f = a.length; g < f; ++g) {
            var h = a.charCodeAt(g) - 63;
            d |= (h & 31) << e;
            32 > h ? (c.push(d), e = d = 0) : e += 5
        }
        a = 0;
        for (d = c.length; a < d; ++a)e = c[a], c[a] = e & 1 ? ~(e >> 1) : e >> 1;
        a = 0;
        for (d = c.length; a < d; ++a)c[a] /= b;
        return c
    }

    k = gr.prototype;
    k.he = function (a, b) {
        a = this.Cd(a, b);
        return new Bl(a)
    };
    k.Hg = function (a, b) {
        return [this.he(a, b)]
    };
    k.Cd = function (a, b) {
        var c = vf(this.a);
        a = jr(a, c, this.b);
        fr(a, a.length, c, a);
        c = If(a, 0, a.length, c);
        return am(new M(c, this.a), !1, $l(this, b))
    };
    k.re = function (a, b) {
        if (a = a.W())return this.Hd(a, b);
        va(!1, 40);
        return ""
    };
    k.ah = function (a, b) {
        return this.re(a[0], b)
    };
    k.Hd = function (a, b) {
        a = am(a, !0, $l(this, b));
        b = a.ba();
        a = a.ma();
        fr(b, b.length, a, b);
        return hr(b, a, this.b)
    };
    function lr(a) {
        a = a ? a : {};
        Yl.call(this);
        this.a = a.layerName;
        this.b = a.layers ? a.layers : null;
        this.defaultDataProjection = Wb(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326")
    }

    v(lr, bm);
    function mr(a, b) {
        var c = [], d, e;
        var f = 0;
        for (e = a.length; f < e; ++f) {
            var g = a[f];
            0 < f && c.pop();
            0 <= g ? d = b[g] : d = b[~g].slice().reverse();
            c.push.apply(c, d)
        }
        a = 0;
        for (b = c.length; a < b; ++a)c[a] = c[a].slice();
        return c
    }

    function nr(a, b, c, d, e, f, g) {
        a = a.geometries;
        var h = [], l;
        var m = 0;
        for (l = a.length; m < l; ++m)h[m] = or(a[m], b, c, d, e, f, g);
        return h
    }

    function or(a, b, c, d, e, f, g) {
        var h = a.type, l = pr[h];
        c = "Point" === h || "MultiPoint" === h ? l(a, c, d) : l(a, b);
        b = new Bl;
        b.Ra(am(c, !1, g));
        void 0 !== a.id && b.kc(a.id);
        a = a.properties;
        e && (a || (a = {}), a[e] = f);
        a && b.H(a);
        return b
    }

    lr.prototype.Gg = function (a, b) {
        if ("Topology" == a.type) {
            var c = null, d = null;
            if (a.transform) {
                var e = a.transform;
                c = e.scale;
                d = e.translate
            }
            var f = a.arcs;
            if (e) {
                e = c;
                var g = d, h;
                var l = 0;
                for (h = f.length; l < h; ++l) {
                    var m, n = f[l], p = e, q = g, t = 0, u = 0;
                    var x = 0;
                    for (m = n.length; x < m; ++x) {
                        var B = n[x];
                        t += B[0];
                        u += B[1];
                        B[0] = t;
                        B[1] = u;
                        qr(B, p, q)
                    }
                }
            }
            e = [];
            a = a.objects;
            g = this.a;
            for (var z in a)this.b && -1 == this.b.indexOf(z) || ("GeometryCollection" === a[z].type ? (l = a[z], e.push.apply(e, nr(l, f, c, d, g, z, b))) : (l = a[z], e.push(or(l, f, c, d, g, z, b))));
            return e
        }
        return []
    };
    function qr(a, b, c) {
        a[0] = a[0] * b[0] + c[0];
        a[1] = a[1] * b[1] + c[1]
    }

    lr.prototype.Ng = function () {
        return this.defaultDataProjection
    };
    var pr = {
        Point: function (a, b, c) {
            a = a.coordinates;
            b && c && qr(a, b, c);
            return new C(a)
        }, LineString: function (a, b) {
            a = mr(a.arcs, b);
            return new M(a)
        }, Polygon: function (a, b) {
            var c = [], d;
            var e = 0;
            for (d = a.arcs.length; e < d; ++e)c[e] = mr(a.arcs[e], b);
            return new D(c)
        }, MultiPoint: function (a, b, c) {
            a = a.coordinates;
            var d;
            if (b && c) {
                var e = 0;
                for (d = a.length; e < d; ++e)qr(a[e], b, c)
            }
            return new O(a)
        }, MultiLineString: function (a, b) {
            var c = [], d;
            var e = 0;
            for (d = a.arcs.length; e < d; ++e)c[e] = mr(a.arcs[e], b);
            return new N(c)
        }, MultiPolygon: function (a,
                                   b) {
            var c = [], d, e;
            var f = 0;
            for (e = a.arcs.length; f < e; ++f) {
                var g = a.arcs[f];
                var h = [];
                var l = 0;
                for (d = g.length; l < d; ++l)h[l] = mr(g[l], b);
                c[f] = h
            }
            return new P(c)
        }
    };
    k = lr.prototype;
    k.cd = function () {
    };
    k.se = function () {
    };
    k.ue = function () {
    };
    k.Kg = function () {
    };
    k.Uc = function () {
    };
    function rr(a) {
        a = a ? a : {};
        this.c = a.featureType;
        this.a = a.featureNS;
        this.b = a.gmlFormat ? a.gmlFormat : new mn;
        this.l = a.schemaLocation ? a.schemaLocation : sr["1.1.0"];
        Wm.call(this)
    }

    v(rr, Wm);
    var sr = {
        "1.1.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd",
        "1.0.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd"
    };
    rr.prototype.Ac = function (a, b) {
        var c = {featureType: this.c, featureNS: this.a};
        rb(c, Zl(this, a, b ? b : {}));
        b = [c];
        this.b.b["http://www.opengis.net/gml"].featureMember = Ll(Zm.prototype.ie);
        (a = L([], this.b.b, a, b, this.b)) || (a = []);
        return a
    };
    rr.prototype.j = function (a) {
        if (Hl(a))return tr(a);
        if (Il(a))return L({}, ur, a, []);
        if ("string" === typeof a)return a = Jl(a), tr(a)
    };
    rr.prototype.g = function (a) {
        if (Hl(a))return vr(this, a);
        if (Il(a))return wr(this, a);
        if ("string" === typeof a)return a = Jl(a), vr(this, a)
    };
    function vr(a, b) {
        for (b = b.firstChild; b; b = b.nextSibling)if (b.nodeType == Node.ELEMENT_NODE)return wr(a, b)
    }

    var xr = {"http://www.opengis.net/gml": {boundedBy: I(Zm.prototype.sf, "bounds")}};

    function wr(a, b) {
        var c = {}, d = gn(b.getAttribute("numberOfFeatures"));
        c.numberOfFeatures = d;
        return L(c, xr, b, [], a.b)
    }

    var yr = {"http://www.opengis.net/wfs": {totalInserted: I(fn), totalUpdated: I(fn), totalDeleted: I(fn)}}, zr = {
        "http://www.opengis.net/ogc": {
            FeatureId: Ll(function (a) {
                return a.getAttribute("fid")
            })
        }
    }, Ar = {
        "http://www.opengis.net/wfs": {
            Feature: function (a, b) {
                Ul(zr, a, b)
            }
        }
    }, ur = {
        "http://www.opengis.net/wfs": {
            TransactionSummary: I(function (a, b) {
                return L({}, yr, a, b)
            }, "transactionSummary"), InsertResults: I(function (a, b) {
                return L([], Ar, a, b)
            }, "insertIds")
        }
    };

    function tr(a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return L({}, ur, a, [])
    }

    var Br = {"http://www.opengis.net/wfs": {PropertyName: J(jn)}};

    function Cr(a, b) {
        var c = El("http://www.opengis.net/ogc", "Filter"), d = El("http://www.opengis.net/ogc", "FeatureId");
        c.appendChild(d);
        d.setAttribute("fid", b);
        a.appendChild(c)
    }

    function Dr(a, b) {
        a = (a ? a : "feature") + ":";
        return b.indexOf(a) ? a + b : b
    }

    var Er = {
        "http://www.opengis.net/wfs": {
            Insert: J(function (a, b, c) {
                var d = c[c.length - 1], e = d.gmlVersion;
                d = El(d.featureNS, d.featureType);
                a.appendChild(d);
                if (2 === e) {
                    a = vn.prototype;
                    (e = b.a) && d.setAttribute("fid", e);
                    e = c[c.length - 1];
                    var f = e.featureNS, g = b.c;
                    e.pb || (e.pb = {}, e.pb[f] = {});
                    var h = b.N();
                    b = [];
                    var l = [];
                    for (n in h) {
                        var m = h[n];
                        null !== m && (b.push(n), l.push(m), n == g || m instanceof rf ? n in e.pb[f] || (e.pb[f][n] = J(a.ki, a)) : n in e.pb[f] || (e.pb[f][n] = J(jn)))
                    }
                    var n = rb({}, e);
                    n.node = d;
                    Vl(n, e.pb, Ql(void 0, f), l, c, b)
                } else mn.prototype.ti(d,
                    b, c)
            }), Update: J(function (a, b, c) {
                var d = c[c.length - 1];
                va(void 0 !== b.a, 27);
                var e = d.featurePrefix, f = d.featureNS;
                a.setAttribute("typeName", Dr(e, d.featureType));
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                e = b.a;
                if (void 0 !== e) {
                    f = b.O();
                    for (var g = [], h = 0, l = f.length; h < l; h++) {
                        var m = b.get(f[h]);
                        void 0 !== m && g.push({name: f[h], value: m})
                    }
                    Vl({gmlVersion: d.gmlVersion, node: a, hasZ: d.hasZ, srsName: d.srsName}, Er, Ql("Property"), g, c);
                    Cr(a, e)
                }
            }), Delete: J(function (a, b, c) {
                c = c[c.length - 1];
                va(void 0 !== b.a, 26);
                var d = c.featurePrefix, e = c.featureNS;
                a.setAttribute("typeName", Dr(d, c.featureType));
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + d, e);
                b = b.a;
                void 0 !== b && Cr(a, b)
            }), Property: J(function (a, b, c) {
                var d = El("http://www.opengis.net/wfs", "Name"), e = c[c.length - 1].gmlVersion;
                a.appendChild(d);
                jn(d, b.name);
                void 0 !== b.value && null !== b.value && (d = El("http://www.opengis.net/wfs", "Value"), a.appendChild(d), b.value instanceof rf ? 2 === e ? vn.prototype.ki(d, b.value, c) : mn.prototype.ud(d, b.value, c) : jn(d, b.value))
            }),
            Native: J(function (a, b) {
                b.Jq && a.setAttribute("vendorId", b.Jq);
                void 0 !== b.iq && a.setAttribute("safeToIgnore", b.iq);
                void 0 !== b.value && jn(a, b.value)
            })
        }
    };

    function Fr(a, b, c) {
        a = {node: a};
        b = b.b;
        for (var d = 0, e = b.length; d < e; ++d) {
            var f = b[d];
            Vl(a, Gr, Ql(f.lc), [f], c)
        }
    }

    function Hr(a, b) {
        void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
        Ir(a, b.b);
        Jr(a, "" + b.f)
    }

    function Kr(a, b, c) {
        a = El("http://www.opengis.net/ogc", a);
        jn(a, c);
        b.appendChild(a)
    }

    function Ir(a, b) {
        Kr("PropertyName", a, b)
    }

    function Jr(a, b) {
        Kr("Literal", a, b)
    }

    function Lr(a, b) {
        var c = El("http://www.opengis.net/gml", "TimeInstant");
        a.appendChild(c);
        a = El("http://www.opengis.net/gml", "timePosition");
        c.appendChild(a);
        jn(a, b)
    }

    var Gr = {
        "http://www.opengis.net/wfs": {
            Query: J(function (a, b, c) {
                var d = c[c.length - 1], e = d.featurePrefix, f = d.featureNS, g = d.propertyNames, h = d.srsName;
                a.setAttribute("typeName", e ? Dr(e, b) : b);
                h && a.setAttribute("srsName", h);
                f && a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                b = rb({}, d);
                b.node = a;
                Vl(b, Br, Ql("PropertyName"), g, c);
                if (d = d.filter) g = El("http://www.opengis.net/ogc", "Filter"), a.appendChild(g), Vl({node: g}, Gr, Ql(d.lc), [d], c)
            })
        }, "http://www.opengis.net/ogc": {
            During: J(function (a, b) {
                var c = El("http://www.opengis.net/fes",
                    "ValueReference");
                jn(c, b.b);
                a.appendChild(c);
                c = El("http://www.opengis.net/gml", "TimePeriod");
                a.appendChild(c);
                a = El("http://www.opengis.net/gml", "begin");
                c.appendChild(a);
                Lr(a, b.a);
                a = El("http://www.opengis.net/gml", "end");
                c.appendChild(a);
                Lr(a, b.f)
            }),
            And: J(Fr),
            Or: J(Fr),
            Not: J(function (a, b, c) {
                b = b.condition;
                Vl({node: a}, Gr, Ql(b.lc), [b], c)
            }),
            BBOX: J(function (a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Ir(a, b.geometryName);
                mn.prototype.ud(a, b.extent, c)
            }),
            Intersects: J(function (a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Ir(a, b.geometryName);
                mn.prototype.ud(a, b.geometry, c)
            }),
            Within: J(function (a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Ir(a, b.geometryName);
                mn.prototype.ud(a, b.geometry, c)
            }),
            PropertyIsEqualTo: J(Hr),
            PropertyIsNotEqualTo: J(Hr),
            PropertyIsLessThan: J(Hr),
            PropertyIsLessThanOrEqualTo: J(Hr),
            PropertyIsGreaterThan: J(Hr),
            PropertyIsGreaterThanOrEqualTo: J(Hr),
            PropertyIsNull: J(function (a, b) {
                Ir(a, b.b)
            }),
            PropertyIsBetween: J(function (a, b) {
                Ir(a, b.b);
                var c = El("http://www.opengis.net/ogc", "LowerBoundary");
                a.appendChild(c);
                Jr(c, "" + b.a);
                c = El("http://www.opengis.net/ogc", "UpperBoundary");
                a.appendChild(c);
                Jr(c, "" + b.f)
            }),
            PropertyIsLike: J(function (a, b) {
                a.setAttribute("wildCard", b.g);
                a.setAttribute("singleChar", b.i);
                a.setAttribute("escapeChar", b.f);
                void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
                Ir(a, b.b);
                Jr(a, "" + b.c)
            })
        }
    };
    rr.prototype.o = function (a) {
        var b = El("http://www.opengis.net/wfs", "GetFeature");
        b.setAttribute("service", "WFS");
        b.setAttribute("version", "1.1.0");
        if (a) {
            a.handle && b.setAttribute("handle", a.handle);
            a.outputFormat && b.setAttribute("outputFormat", a.outputFormat);
            void 0 !== a.maxFeatures && b.setAttribute("maxFeatures", a.maxFeatures);
            a.resultType && b.setAttribute("resultType", a.resultType);
            void 0 !== a.startIndex && b.setAttribute("startIndex", a.startIndex);
            void 0 !== a.count && b.setAttribute("count", a.count);
            var c =
                a.filter;
            if (a.bbox) {
                va(a.geometryName, 12);
                var d = Mm(a.geometryName, a.bbox, a.srsName);
                c ? c = Lm(c, d) : c = d
            }
        }
        b.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.l);
        c = {
            node: b,
            srsName: a.srsName,
            featureNS: a.featureNS ? a.featureNS : this.a,
            featurePrefix: a.featurePrefix,
            geometryName: a.geometryName,
            filter: c,
            propertyNames: a.propertyNames ? a.propertyNames : []
        };
        va(Array.isArray(a.featureTypes), 11);
        a = a.featureTypes;
        c = [c];
        d = rb({}, c[c.length - 1]);
        d.node = b;
        Vl(d, Gr, Ql("Query"), a, c);
        return b
    };
    rr.prototype.v = function (a, b, c, d) {
        var e = [], f = El("http://www.opengis.net/wfs", "Transaction"), g = d.version ? d.version : "1.1.0",
            h = "1.0.0" === g ? 2 : 3;
        f.setAttribute("service", "WFS");
        f.setAttribute("version", g);
        if (d) {
            var l = d.gmlOptions ? d.gmlOptions : {};
            d.handle && f.setAttribute("handle", d.handle)
        }
        f.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", sr[g]);
        var m = d.featurePrefix ? d.featurePrefix : "feature";
        a && (g = {
            node: f, featureNS: d.featureNS, featureType: d.featureType, featurePrefix: m, gmlVersion: h,
            hasZ: d.hasZ, srsName: d.srsName
        }, rb(g, l), Vl(g, Er, Ql("Insert"), a, e));
        b && (g = {
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            hasZ: d.hasZ,
            srsName: d.srsName
        }, rb(g, l), Vl(g, Er, Ql("Update"), b, e));
        c && Vl({
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            srsName: d.srsName
        }, Er, Ql("Delete"), c, e);
        d.nativeElements && Vl({
                node: f,
                featureNS: d.featureNS,
                featureType: d.featureType,
                featurePrefix: m,
                gmlVersion: h,
                srsName: d.srsName
            }, Er, Ql("Native"), d.nativeElements,
            e);
        return f
    };
    rr.prototype.Mg = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.vf(a);
        return null
    };
    rr.prototype.vf = function (a) {
        if (a.firstElementChild && a.firstElementChild.firstElementChild)for (a = a.firstElementChild.firstElementChild, a = a.firstElementChild; a; a = a.nextElementSibling)if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) {
            var b = [{}];
            this.b.sf(a, b);
            return Wb(b.pop().srsName)
        }
        return null
    };
    function Mr(a) {
        a = a ? a : {};
        Yl.call(this);
        this.b = void 0 !== a.splitCollection ? a.splitCollection : !1
    }

    v(Mr, po);
    function Nr(a) {
        a = a.V();
        return a.length ? a.join(" ") : ""
    }

    function Or(a) {
        a = a.V();
        for (var b = [], c = 0, d = a.length; c < d; ++c)b.push(a[c].join(" "));
        return b.join(",")
    }

    function Pr(a) {
        var b = [];
        a = a.Zd();
        for (var c = 0, d = a.length; c < d; ++c)b.push("(" + Or(a[c]) + ")");
        return b.join(",")
    }

    function Qr(a) {
        var b = a.T(), c = (0, Rr[b])(a);
        b = b.toUpperCase();
        if (a instanceof uf) {
            a = a.ja;
            var d = "";
            if ("XYZ" === a || "XYZM" === a) d += "Z";
            if ("XYM" === a || "XYZM" === a) d += "M";
            a = d;
            0 < a.length && (b += " " + a)
        }
        return c.length ? b + "(" + c + ")" : b + " EMPTY"
    }

    var Rr = {
        Point: Nr, LineString: Or, Polygon: Pr, MultiPoint: function (a) {
            var b = [];
            a = a.ee();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + Nr(a[c]) + ")");
            return b.join(",")
        }, MultiLineString: function (a) {
            var b = [];
            a = a.ld();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + Or(a[c]) + ")");
            return b.join(",")
        }, MultiPolygon: function (a) {
            var b = [];
            a = a.$d();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + Pr(a[c]) + ")");
            return b.join(",")
        }, GeometryCollection: function (a) {
            var b = [];
            a = a.kd();
            for (var c = 0, d = a.length; c < d; ++c)b.push(Qr(a[c]));
            return b.join(",")
        }
    };
    k = Mr.prototype;
    k.he = function (a, b) {
        return (a = this.Cd(a, b)) ? (b = new Bl, b.Ra(a), b) : null
    };
    k.Hg = function (a, b) {
        var c = [];
        a = this.Cd(a, b);
        this.b && "GeometryCollection" == a.T() ? c = a.a : c = [a];
        b = [];
        for (var d = 0, e = c.length; d < e; ++d)a = new Bl, a.Ra(c[d]), b.push(a);
        return b
    };
    k.Cd = function (a, b) {
        a = new Sr(new Tr(a));
        Ur(a);
        return (a = Vr(a)) ? am(a, !1, b) : null
    };
    k.re = function (a, b) {
        return (a = a.W()) ? this.Hd(a, b) : ""
    };
    k.ah = function (a, b) {
        if (1 == a.length)return this.re(a[0], b);
        for (var c = [], d = 0, e = a.length; d < e; ++d)c.push(a[d].W());
        a = new Nm(c);
        return this.Hd(a, b)
    };
    k.Hd = function (a, b) {
        return Qr(am(a, !0, b))
    };
    function Tr(a) {
        this.a = a;
        this.b = -1
    }

    function Wr(a) {
        var b = a.a.charAt(++a.b), c = {position: a.b, value: b};
        if ("(" == b) c.type = 2; else if ("," == b) c.type = 5; else if (")" == b) c.type = 3; else if ("0" <= b && "9" >= b || "." == b || "-" == b) {
            c.type = 4;
            b = a.b;
            var d = !1, e = !1;
            do {
                if ("." == f) d = !0; else if ("e" == f || "E" == f) e = !0;
                var f = a.a.charAt(++a.b)
            } while ("0" <= f && "9" >= f || "." == f && (void 0 === d || !d) || !e && ("e" == f || "E" == f) || e && ("-" == f || "+" == f));
            a = parseFloat(a.a.substring(b, a.b--));
            c.value = a
        } else if ("a" <= b && "z" >= b || "A" <= b && "Z" >= b) {
            c.type = 1;
            b = a.b;
            do f = a.a.charAt(++a.b); while ("a" <= f && "z" >=
            f || "A" <= f && "Z" >= f);
            a = a.a.substring(b, a.b--).toUpperCase();
            c.value = a
        } else {
            if (" " == b || "\t" == b || "\r" == b || "\n" == b)return Wr(a);
            if ("" === b) c.type = 6; else throw Error("Unexpected character: " + b);
        }
        return c
    }

    function Sr(a) {
        this.f = a;
        this.a = "XY"
    }

    function Ur(a) {
        a.b = Wr(a.f)
    }

    function Xr(a, b) {
        (b = a.b.type == b) && Ur(a);
        return b
    }

    function Vr(a) {
        var b = a.b;
        if (Xr(a, 1)) {
            b = b.value;
            var c = "XY", d = a.b;
            1 == a.b.type && (d = d.value, "Z" === d ? c = "XYZ" : "M" === d ? c = "XYM" : "ZM" === d && (c = "XYZM"), "XY" !== c && Ur(a));
            a.a = c;
            if ("GEOMETRYCOLLECTION" == b) {
                a:{
                    if (Xr(a, 2)) {
                        b = [];
                        do b.push(Vr(a)); while (Xr(a, 5));
                        if (Xr(a, 3)) {
                            a = b;
                            break a
                        }
                    } else if (Yr(a)) {
                        a = [];
                        break a
                    }
                    throw Error(Zr(a));
                }
                return new Nm(a)
            }
            d = $r[b];
            c = as[b];
            if (!d || !c)throw Error("Invalid geometry type: " + b);
            b = d.call(a);
            return new c(b, a.a)
        }
        throw Error(Zr(a));
    }

    k = Sr.prototype;
    k.Bg = function () {
        if (Xr(this, 2)) {
            var a = bs(this);
            if (Xr(this, 3))return a
        } else if (Yr(this))return null;
        throw Error(Zr(this));
    };
    k.Ag = function () {
        if (Xr(this, 2)) {
            var a = cs(this);
            if (Xr(this, 3))return a
        } else if (Yr(this))return [];
        throw Error(Zr(this));
    };
    k.Cg = function () {
        if (Xr(this, 2)) {
            var a = ds(this);
            if (Xr(this, 3))return a
        } else if (Yr(this))return [];
        throw Error(Zr(this));
    };
    k.sp = function () {
        if (Xr(this, 2)) {
            var a;
            if (2 == this.b.type)for (a = [this.Bg()]; Xr(this, 5);)a.push(this.Bg()); else a = cs(this);
            if (Xr(this, 3))return a
        } else if (Yr(this))return [];
        throw Error(Zr(this));
    };
    k.rp = function () {
        if (Xr(this, 2)) {
            var a = ds(this);
            if (Xr(this, 3))return a
        } else if (Yr(this))return [];
        throw Error(Zr(this));
    };
    k.tp = function () {
        if (Xr(this, 2)) {
            for (var a = [this.Cg()]; Xr(this, 5);)a.push(this.Cg());
            if (Xr(this, 3))return a
        } else if (Yr(this))return [];
        throw Error(Zr(this));
    };
    function bs(a) {
        for (var b = [], c = a.a.length, d = 0; d < c; ++d) {
            var e = a.b;
            if (Xr(a, 4)) b.push(e.value); else break
        }
        if (b.length == c)return b;
        throw Error(Zr(a));
    }

    function cs(a) {
        for (var b = [bs(a)]; Xr(a, 5);)b.push(bs(a));
        return b
    }

    function ds(a) {
        for (var b = [a.Ag()]; Xr(a, 5);)b.push(a.Ag());
        return b
    }

    function Yr(a) {
        var b = 1 == a.b.type && "EMPTY" == a.b.value;
        b && Ur(a);
        return b
    }

    function Zr(a) {
        return "Unexpected `" + a.b.value + "` at position " + a.b.position + " in `" + a.f.a + "`"
    }

    var as = {POINT: C, LINESTRING: M, POLYGON: D, MULTIPOINT: O, MULTILINESTRING: N, MULTIPOLYGON: P}, $r = {
        POINT: Sr.prototype.Bg,
        LINESTRING: Sr.prototype.Ag,
        POLYGON: Sr.prototype.Cg,
        MULTIPOINT: Sr.prototype.sp,
        MULTILINESTRING: Sr.prototype.rp,
        MULTIPOLYGON: Sr.prototype.tp
    };

    function es() {
        this.version = void 0
    }

    v(es, Oq);
    es.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    es.prototype.b = function (a) {
        this.version = a.getAttribute("version").trim();
        return (a = L({version: this.version}, fs, a, [])) ? a : null
    };
    function gs(a, b) {
        return L({}, hs, a, b)
    }

    function is(a, b) {
        return L({}, js, a, b)
    }

    function ks(a, b) {
        if (b = gs(a, b))return a = [gn(a.getAttribute("width")), gn(a.getAttribute("height"))], b.size = a, b
    }

    function ls(a, b) {
        return L([], ms, a, b)
    }

    var ns = [null, "http://www.opengis.net/wms"], fs = K(ns, {
            Service: I(function (a, b) {
                return L({}, os, a, b)
            }), Capability: I(function (a, b) {
                return L({}, ps, a, b)
            })
        }), ps = K(ns, {
            Request: I(function (a, b) {
                return L({}, qs, a, b)
            }), Exception: I(function (a, b) {
                return L([], rs, a, b)
            }), Layer: I(function (a, b) {
                return L({}, ss, a, b)
            })
        }), os = K(ns, {
            Name: I(Q),
            Title: I(Q),
            Abstract: I(Q),
            KeywordList: I(ls),
            OnlineResource: I(Nq),
            ContactInformation: I(function (a, b) {
                return L({}, ts, a, b)
            }),
            Fees: I(Q),
            AccessConstraints: I(Q),
            LayerLimit: I(fn),
            MaxWidth: I(fn),
            MaxHeight: I(fn)
        }), ts = K(ns, {
            ContactPersonPrimary: I(function (a, b) {
                return L({}, us, a, b)
            }), ContactPosition: I(Q), ContactAddress: I(function (a, b) {
                return L({}, vs, a, b)
            }), ContactVoiceTelephone: I(Q), ContactFacsimileTelephone: I(Q), ContactElectronicMailAddress: I(Q)
        }), us = K(ns, {ContactPerson: I(Q), ContactOrganization: I(Q)}), vs = K(ns, {
            AddressType: I(Q),
            Address: I(Q),
            City: I(Q),
            StateOrProvince: I(Q),
            PostCode: I(Q),
            Country: I(Q)
        }), rs = K(ns, {Format: Ll(Q)}), ss = K(ns, {
            Name: I(Q), Title: I(Q), Abstract: I(Q), KeywordList: I(ls), CRS: Ol(Q),
            EX_GeographicBoundingBox: I(function (a, b) {
                var c = L({}, ws, a, b);
                if (c) {
                    a = c.westBoundLongitude;
                    b = c.southBoundLatitude;
                    var d = c.eastBoundLongitude;
                    c = c.northBoundLatitude;
                    if (void 0 !== a && void 0 !== b && void 0 !== d && void 0 !== c)return [a, b, d, c]
                }
            }), BoundingBox: Ol(function (a) {
                var b = [en(a.getAttribute("minx")), en(a.getAttribute("miny")), en(a.getAttribute("maxx")), en(a.getAttribute("maxy"))],
                    c = [en(a.getAttribute("resx")), en(a.getAttribute("resy"))];
                return {crs: a.getAttribute("CRS"), extent: b, res: c}
            }), Dimension: Ol(function (a) {
                return {
                    name: a.getAttribute("name"),
                    units: a.getAttribute("units"),
                    unitSymbol: a.getAttribute("unitSymbol"),
                    "default": a.getAttribute("default"),
                    multipleValues: bn(a.getAttribute("multipleValues")),
                    nearestValue: bn(a.getAttribute("nearestValue")),
                    current: bn(a.getAttribute("current")),
                    values: Q(a)
                }
            }), Attribution: I(function (a, b) {
                return L({}, xs, a, b)
            }), AuthorityURL: Ol(function (a, b) {
                if (b = gs(a, b))return b.name = a.getAttribute("name"), b
            }), Identifier: Ol(Q), MetadataURL: Ol(function (a, b) {
                if (b = gs(a, b))return b.type = a.getAttribute("type"), b
            }), DataURL: Ol(gs),
            FeatureListURL: Ol(gs), Style: Ol(function (a, b) {
                return L({}, ys, a, b)
            }), MinScaleDenominator: I(dn), MaxScaleDenominator: I(dn), Layer: Ol(function (a, b) {
                var c = b[b.length - 1], d = L({}, ss, a, b);
                if (d)return b = bn(a.getAttribute("queryable")), void 0 === b && (b = c.queryable), d.queryable = void 0 !== b ? b : !1, b = gn(a.getAttribute("cascaded")), void 0 === b && (b = c.cascaded), d.cascaded = b, b = bn(a.getAttribute("opaque")), void 0 === b && (b = c.opaque), d.opaque = void 0 !== b ? b : !1, b = bn(a.getAttribute("noSubsets")), void 0 === b && (b = c.noSubsets), d.noSubsets =
                    void 0 !== b ? b : !1, (b = en(a.getAttribute("fixedWidth"))) || (b = c.fixedWidth), d.fixedWidth = b, (a = en(a.getAttribute("fixedHeight"))) || (a = c.fixedHeight), d.fixedHeight = a, ["Style", "CRS", "AuthorityURL"].forEach(function (a) {
                    a in c && (d[a] = (d[a] || []).concat(c[a]))
                }), "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function (a) {
                    a in d || (d[a] = c[a])
                }), d
            })
        }), xs = K(ns, {Title: I(Q), OnlineResource: I(Nq), LogoURL: I(ks)}), ws = K(ns, {
            westBoundLongitude: I(dn),
            eastBoundLongitude: I(dn), southBoundLatitude: I(dn), northBoundLatitude: I(dn)
        }), qs = K(ns, {GetCapabilities: I(is), GetMap: I(is), GetFeatureInfo: I(is)}), js = K(ns, {
            Format: Ol(Q), DCPType: Ol(function (a, b) {
                return L({}, zs, a, b)
            })
        }), zs = K(ns, {
            HTTP: I(function (a, b) {
                return L({}, As, a, b)
            })
        }), As = K(ns, {Get: I(gs), Post: I(gs)}),
        ys = K(ns, {Name: I(Q), Title: I(Q), Abstract: I(Q), LegendURL: Ol(ks), StyleSheetURL: I(gs), StyleURL: I(gs)}),
        hs = K(ns, {Format: I(Q), OnlineResource: I(Nq)}), ms = K(ns, {Keyword: Ll(Q)});

    function Bs(a) {
        a = a ? a : {};
        this.a = "http://mapserver.gis.umn.edu/mapserver";
        this.b = new vn;
        this.c = a.layers ? a.layers : null;
        Wm.call(this)
    }

    v(Bs, Wm);
    Bs.prototype.Ac = function (a, b) {
        var c = {};
        b && rb(c, Zl(this, a, b));
        c = [c];
        a.setAttribute("namespaceURI", this.a);
        var d = a.localName;
        b = [];
        if (a.childNodes.length) {
            if ("msGMLOutput" == d)for (var e = 0, f = a.childNodes.length; e < f; e++) {
                var g = a.childNodes[e];
                if (g.nodeType === Node.ELEMENT_NODE) {
                    var h = c[0], l = g.localName.replace("_layer", "");
                    if (!this.c || ha(this.c, l)) {
                        l += "_feature";
                        h.featureType = l;
                        h.featureNS = this.a;
                        var m = {};
                        m[l] = Ll(this.b.Eg, this.b);
                        h = K([h.featureNS, null], m);
                        g.setAttribute("namespaceURI", this.a);
                        (g = L([], h,
                            g, c, this.b)) && ka(b, g)
                    }
                }
            }
            "FeatureCollection" == d && (a = L([], this.b.b, a, [{}], this.b)) && (b = a)
        }
        return b
    };
    Bs.prototype.$g = function () {
    };
    Bs.prototype.Yb = function () {
    };
    Bs.prototype.te = function () {
    };
    function Cs() {
        this.f = new Pq
    }

    v(Cs, Oq);
    Cs.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    Cs.prototype.b = function (a) {
        var b = a.getAttribute("version").trim(), c = this.f.b(a);
        if (!c)return null;
        c.version = b;
        return (c = L(c, Ds, a, [])) ? c : null
    };
    function Es(a) {
        var b = Q(a).split(" ");
        if (b && 2 == b.length && (a = +b[0], b = +b[1], !isNaN(a) && !isNaN(b)))return [a, b]
    }

    var Fs = [null, "http://www.opengis.net/wmts/1.0"], Gs = [null, "http://www.opengis.net/ows/1.1"], Ds = K(Fs, {
            Contents: I(function (a, b) {
                return L({}, Hs, a, b)
            })
        }), Hs = K(Fs, {
            Layer: Ol(function (a, b) {
                return L({}, Is, a, b)
            }), TileMatrixSet: Ol(function (a, b) {
                return L({}, Js, a, b)
            })
        }), Is = K(Fs, {
            Style: Ol(function (a, b) {
                if (b = L({}, Ks, a, b))return a = "true" === a.getAttribute("isDefault"), b.isDefault = a, b
            }), Format: Ol(Q), TileMatrixSetLink: Ol(function (a, b) {
                return L({}, Ls, a, b)
            }), Dimension: Ol(function (a, b) {
                return L({}, Ms, a, b)
            }), ResourceURL: Ol(function (a) {
                var b =
                    a.getAttribute("format"), c = a.getAttribute("template");
                a = a.getAttribute("resourceType");
                var d = {};
                b && (d.format = b);
                c && (d.template = c);
                a && (d.resourceType = a);
                return d
            })
        }, K(Gs, {
            Title: I(Q), Abstract: I(Q), WGS84BoundingBox: I(function (a, b) {
                a = L([], Ns, a, b);
                if (2 == a.length)return La(a)
            }), Identifier: I(Q)
        })), Ks = K(Fs, {
            LegendURL: Ol(function (a) {
                var b = {};
                b.format = a.getAttribute("format");
                b.href = Nq(a);
                return b
            })
        }, K(Gs, {Title: I(Q), Identifier: I(Q)})), Ls = K(Fs, {
            TileMatrixSet: I(Q), TileMatrixSetLimits: I(function (a, b) {
                return L([],
                    Os, a, b)
            })
        }), Os = K(Fs, {
            TileMatrixLimits: Ll(function (a, b) {
                return L({}, Ps, a, b)
            })
        }), Ps = K(Fs, {TileMatrix: I(Q), MinTileRow: I(fn), MaxTileRow: I(fn), MinTileCol: I(fn), MaxTileCol: I(fn)}),
        Ms = K(Fs, {Default: I(Q), Value: Ol(Q)}, K(Gs, {Identifier: I(Q)})),
        Ns = K(Gs, {LowerCorner: Ll(Es), UpperCorner: Ll(Es)}), Js = K(Fs, {
            WellKnownScaleSet: I(Q), TileMatrix: Ol(function (a, b) {
                return L({}, Qs, a, b)
            })
        }, K(Gs, {SupportedCRS: I(Q), Identifier: I(Q)})), Qs = K(Fs, {
            TopLeftCorner: I(Es), ScaleDenominator: I(dn), TileWidth: I(fn), TileHeight: I(fn), MatrixWidth: I(fn),
            MatrixHeight: I(fn)
        }, K(Gs, {Identifier: I(Q)}));

    function Rs(a) {
        Vc.call(this);
        a = a || {};
        this.a = null;
        this.i = gc;
        this.g = new vb(6378137);
        this.c = void 0;
        y(this, Xc("projection"), this.Om, this);
        y(this, Xc("tracking"), this.Pm, this);
        void 0 !== a.projection && this.ei(a.projection);
        void 0 !== a.trackingOptions && this.Gj(a.trackingOptions);
        this.Ve(void 0 !== a.tracking ? a.tracking : !1)
    }

    v(Rs, Vc);
    k = Rs.prototype;
    k.ka = function () {
        this.Ve(!1);
        Vc.prototype.ka.call(this)
    };
    k.Om = function () {
        var a = this.ci();
        a && (this.i = Xb(Wb("EPSG:4326"), a), this.a && this.set("position", this.i(this.a)))
    };
    k.Pm = function () {
        if (Yd) {
            var a = this.di();
            a && void 0 === this.c ? this.c = navigator.geolocation.watchPosition(this.Ap.bind(this), this.Bp.bind(this), this.Ph()) : a || void 0 === this.c || (navigator.geolocation.clearWatch(this.c), this.c = void 0)
        }
    };
    k.Ap = function (a) {
        a = a.coords;
        this.set("accuracy", a.accuracy);
        this.set("altitude", null === a.altitude ? void 0 : a.altitude);
        this.set("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
        this.set("heading", null === a.heading ? void 0 : Fa(a.heading));
        this.a ? (this.a[0] = a.longitude, this.a[1] = a.latitude) : this.a = [a.longitude, a.latitude];
        var b = this.i(this.a);
        this.set("position", b);
        this.set("speed", null === a.speed ? void 0 : a.speed);
        a = bg(this.g, this.a, a.accuracy);
        a.Fc(this.i);
        this.set("accuracyGeometry",
            a);
        this.s()
    };
    k.Bp = function (a) {
        a.type = "error";
        this.Ve(!1);
        this.b(a)
    };
    k.Ok = function () {
        return this.get("accuracy")
    };
    k.Pk = function () {
        return this.get("accuracyGeometry") || null
    };
    k.Rk = function () {
        return this.get("altitude")
    };
    k.Sk = function () {
        return this.get("altitudeAccuracy")
    };
    k.Mm = function () {
        return this.get("heading")
    };
    k.Nm = function () {
        return this.get("position")
    };
    k.ci = function () {
        return this.get("projection")
    };
    k.xl = function () {
        return this.get("speed")
    };
    k.di = function () {
        return this.get("tracking")
    };
    k.Ph = function () {
        return this.get("trackingOptions")
    };
    k.ei = function (a) {
        this.set("projection", Wb(a))
    };
    k.Ve = function (a) {
        this.set("tracking", a)
    };
    k.Gj = function (a) {
        this.set("trackingOptions", a)
    };
    function Ss(a, b, c) {
        uf.call(this);
        this.Vg(a, b ? b : 0, c)
    }

    v(Ss, uf);
    k = Ss.prototype;
    k.clone = function () {
        var a = new Ss(null);
        wf(a, this.ja, this.A.slice());
        a.s();
        return a
    };
    k.Jb = function (a, b, c, d) {
        var e = this.A;
        a -= e[0];
        var f = b - e[1];
        b = a * a + f * f;
        if (b < d) {
            if (b)for (d = this.vd() / Math.sqrt(b), c[0] = e[0] + d * a, c[1] = e[1] + d * f, d = 2; d < this.a; ++d)c[d] = e[d]; else for (d = 0; d < this.a; ++d)c[d] = e[d];
            c.length = this.a;
            return b
        }
        return d
    };
    k.Pc = function (a, b) {
        var c = this.A;
        a -= c[0];
        b -= c[1];
        return a * a + b * b <= Ts(this)
    };
    k.xa = function () {
        return this.A.slice(0, this.a)
    };
    k.De = function (a) {
        var b = this.A, c = b[this.a] - b[0];
        return Va(b[0] - c, b[1] - c, b[0] + c, b[1] + c, a)
    };
    k.vd = function () {
        return Math.sqrt(Ts(this))
    };
    function Ts(a) {
        var b = a.A[a.a] - a.A[0];
        a = a.A[a.a + 1] - a.A[1];
        return b * b + a * a
    }

    k.T = function () {
        return "Circle"
    };
    k.Ya = function (a) {
        var b = this.G();
        return ob(a, b) ? (b = this.xa(), a[0] <= b[0] && a[2] >= b[0] || a[1] <= b[1] && a[3] >= b[1] ? !0 : cb(a, this.wb, this)) : !1
    };
    k.rb = function (a) {
        var b = this.a, c = a.slice();
        c[b] = c[0] + (this.A[b] - this.A[0]);
        var d;
        for (d = 1; d < b; ++d)c[b + d] = a[d];
        wf(this, this.ja, c);
        this.s()
    };
    k.Vg = function (a, b, c) {
        if (a) {
            xf(this, c, a, 0);
            this.A || (this.A = []);
            c = this.A;
            a = Ff(c, a);
            c[a++] = c[0] + b;
            var d;
            b = 1;
            for (d = this.a; b < d; ++b)c[a++] = c[b];
            c.length = a
        } else wf(this, "XY", null);
        this.s()
    };
    k.V = function () {
    };
    k.na = function () {
    };
    k.Xc = function (a) {
        this.A[this.a] = this.A[0] + a;
        this.s()
    };
    function Us(a, b, c) {
        for (var d = [], e = a(0), f = a(1), g = b(e), h = b(f), l = [f, e], m = [h, g], n = [1, 0], p = {}, q = 1E5, t,
                 u, x, B,
                 z; 0 < --q && 0 < n.length;)x = n.pop(), e = l.pop(), g = m.pop(), f = x.toString(), f in p || (d.push(g[0], g[1]), p[f] = !0), B = n.pop(), f = l.pop(), h = m.pop(), z = (x + B) / 2, t = a(z), u = b(t), Da(u[0], u[1], g[0], g[1], h[0], h[1]) < c ? (d.push(h[0], h[1]), f = B.toString(), p[f] = !0) : (n.push(B, z, z, x), m.push(h, u, u, g), l.push(f, t, t, e));
        return d
    }

    function Vs(a, b, c, d, e) {
        var f = Wb("EPSG:4326");
        return Us(function (d) {
            return [a, b + (c - b) * d]
        }, fc(f, d), e)
    }

    function Ws(a, b, c, d, e) {
        var f = Wb("EPSG:4326");
        return Us(function (d) {
            return [b + (c - b) * d, a]
        }, fc(f, d), e)
    };
    function Xs(a) {
        a = a || {};
        this.i = this.v = null;
        this.j = this.g = Infinity;
        this.o = this.l = -Infinity;
        this.qa = this.pa = Infinity;
        this.S = this.I = -Infinity;
        this.va = void 0 !== a.targetSize ? a.targetSize : 100;
        this.jb = void 0 !== a.maxLines ? a.maxLines : 100;
        this.f = [];
        this.c = [];
        this.oa = void 0 !== a.strokeStyle ? a.strokeStyle : Ys;
        this.D = this.u = void 0;
        this.a = this.b = this.R = null;
        1 == a.showLabels && (this.ta = a.lonLabelFormatter ? a.lonLabelFormatter : ef.bind(this, "EW"), this.Va = a.latLabelFormatter ? a.latLabelFormatter : ef.bind(this, "NS"), this.ga =
            void 0 == a.lonLabelPosition ? 0 : a.lonLabelPosition, this.U = void 0 == a.latLabelPosition ? 1 : a.latLabelPosition, this.C = void 0 !== a.lonLabelStyle ? a.lonLabelStyle : new zo({
            font: "12px Calibri,sans-serif",
            textBaseline: "bottom",
            fill: new ul({color: "rgba(0,0,0,1)"}),
            stroke: new Ej({color: "rgba(255,255,255,1)", width: 3})
        }), this.B = void 0 !== a.latLabelStyle ? a.latLabelStyle : new zo({
            font: "12px Calibri,sans-serif",
            textAlign: "end",
            fill: new ul({color: "rgba(0,0,0,1)"}),
            stroke: new Ej({color: "rgba(255,255,255,1)", width: 3})
        }), this.b =
            [], this.a = []);
        this.setMap(void 0 !== a.map ? a.map : null)
    }

    var Ys = new Ej({color: "rgba(0,0,0,0.2)"}),
        Zs = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];

    function $s(a, b, c, d, e, f, g) {
        var h = g;
        c = Vs(b, c, d, a.i, e);
        h = void 0 !== a.f[h] ? a.f[h] : new M(null);
        h.aa("XY", c);
        ob(h.G(), f) && (a.b && (c = g, d = h.ba(), f = [d[0], Aa(f[1] + Math.abs(f[1] - f[3]) * a.ga, Math.max(f[1], d[1]), Math.min(f[3], d[d.length - 1]))], c = a.b[c] ? a.b[c].Xd : new C(null), c.na(f), a.b[g] = {
            Xd: c,
            text: a.ta(b)
        }), a.f[g++] = h);
        return g
    }

    function at(a, b, c, d, e, f, g) {
        var h = g;
        c = Ws(b, c, d, a.i, e);
        h = void 0 !== a.c[h] ? a.c[h] : new M(null);
        h.aa("XY", c);
        ob(h.G(), f) && (a.a && (c = g, d = h.ba(), f = [Aa(f[0] + Math.abs(f[0] - f[2]) * a.U, Math.max(f[0], d[0]), Math.min(f[2], d[d.length - 2])), d[1]], c = a.a[c] ? a.a[c].Xd : new C(null), c.na(f), a.a[g] = {
            Xd: c,
            text: a.Va(b)
        }), a.c[g++] = h);
        return g
    }

    k = Xs.prototype;
    k.Qm = function () {
        return this.v
    };
    k.ml = function () {
        return this.f
    };
    k.tl = function () {
        return this.c
    };
    k.Th = function (a) {
        var b = a.vectorContext, c = a.frameState;
        a = c.extent;
        var d = c.viewState, e = d.center, f = d.projection;
        d = d.resolution;
        c = c.pixelRatio;
        c = d * d / (4 * c * c);
        if (!this.i || !ec(this.i, f)) {
            var g = Wb("EPSG:4326"), h = f.G(), l = f.g, m = ic(l, g, f), n = l[2], p = l[1], q = l[0], t = m[3],
                u = m[2], x = m[1];
            m = m[0];
            this.g = l[3];
            this.j = n;
            this.l = p;
            this.o = q;
            this.pa = t;
            this.qa = u;
            this.I = x;
            this.S = m;
            this.u = fc(g, f);
            this.D = fc(f, g);
            this.R = this.D(lb(h));
            this.i = f
        }
        f = this.R[0];
        g = this.R[1];
        h = -1;
        n = Math.pow(this.va * d, 2);
        p = [];
        q = [];
        d = 0;
        for (l = Zs.length; d < l; ++d) {
            t =
                Zs[d] / 2;
            p[0] = f - t;
            p[1] = g - t;
            q[0] = f + t;
            q[1] = g + t;
            this.u(p, p);
            this.u(q, q);
            t = Math.pow(q[0] - p[0], 2) + Math.pow(q[1] - p[1], 2);
            if (t <= n)break;
            h = Zs[d]
        }
        d = h;
        if (-1 == d) this.f.length = this.c.length = 0, this.b && (this.b.length = 0), this.a && (this.a.length = 0); else {
            f = this.D(e);
            e = f[0];
            f = f[1];
            g = this.jb;
            l = [Math.max(a[0], this.S), Math.max(a[1], this.I), Math.min(a[2], this.qa), Math.min(a[3], this.pa)];
            l = ic(l, this.i, "EPSG:4326");
            p = l[3];
            h = l[2];
            q = l[1];
            t = l[0];
            e = Math.floor(e / d) * d;
            u = Aa(e, this.o, this.j);
            n = $s(this, u, q, p, c, a, 0);
            for (l = 0; u != this.o &&
            l++ < g;)u = Math.max(u - d, this.o), n = $s(this, u, q, p, c, a, n);
            u = Aa(e, this.o, this.j);
            for (l = 0; u != this.j && l++ < g;)u = Math.min(u + d, this.j), n = $s(this, u, q, p, c, a, n);
            this.f.length = n;
            this.b && (this.b.length = n);
            f = Math.floor(f / d) * d;
            e = Aa(f, this.l, this.g);
            n = at(this, e, t, h, c, a, 0);
            for (l = 0; e != this.l && l++ < g;)e = Math.max(e - d, this.l), n = at(this, e, t, h, c, a, n);
            e = Aa(f, this.l, this.g);
            for (l = 0; e != this.g && l++ < g;)e = Math.min(e + d, this.g), n = at(this, e, t, h, c, a, n);
            this.c.length = n;
            this.a && (this.a.length = n)
        }
        b.Na(null, this.oa);
        a = 0;
        for (c = this.f.length; a <
        c; ++a)e = this.f[a], b.Cb(e);
        a = 0;
        for (c = this.c.length; a < c; ++a)e = this.c[a], b.Cb(e);
        if (this.b)for (a = 0, c = this.b.length; a < c; ++a)e = this.b[a], this.C.Dd(e.text), b.gb(this.C), b.Cb(e.Xd);
        if (this.a)for (a = 0, c = this.a.length; a < c; ++a)e = this.a[a], this.B.Dd(e.text), b.gb(this.B), b.Cb(e.Xd)
    };
    k.setMap = function (a) {
        this.v && (this.v.K("postcompose", this.Th, this), this.v.render());
        a && (a.J("postcompose", this.Th, this), a.render());
        this.v = a
    };
    function bt(a, b, c, d, e) {
        Sc.call(this);
        this.i = e;
        this.extent = a;
        this.a = c;
        this.resolution = b;
        this.state = d
    }

    v(bt, Sc);
    bt.prototype.s = function () {
        this.b("change")
    };
    bt.prototype.G = function () {
        return this.extent
    };
    bt.prototype.getState = function () {
        return this.state
    };
    function ct(a, b, c, d, e, f, g) {
        bt.call(this, a, b, c, 0, d);
        this.j = e;
        this.M = new Image;
        null !== f && (this.M.crossOrigin = f);
        this.c = {};
        this.f = null;
        this.state = 0;
        this.g = g
    }

    v(ct, bt);
    k = ct.prototype;
    k.Y = function (a) {
        if (void 0 !== a) {
            var b;
            a = w(a);
            if (a in this.c)return this.c[a];
            ub(this.c) ? b = this.M : b = this.M.cloneNode(!1);
            return this.c[a] = b
        }
        return this.M
    };
    k.Tm = function () {
        this.state = 3;
        this.f.forEach(Gc);
        this.f = null;
        this.s()
    };
    k.Um = function () {
        void 0 === this.resolution && (this.resolution = kb(this.extent) / this.M.height);
        this.state = 2;
        this.f.forEach(Gc);
        this.f = null;
        this.s()
    };
    k.load = function () {
        if (0 == this.state || 3 == this.state) this.state = 1, this.s(), this.f = [Lc(this.M, "error", this.Tm, this), Lc(this.M, "load", this.Um, this)], this.g(this, this.j)
    };
    k.Wg = function (a) {
        this.M = a
    };
    function dt(a, b, c, d, e, f) {
        this.c = f ? f : null;
        bt.call(this, a, b, c, f ? 0 : 2, d);
        this.f = e
    }

    v(dt, bt);
    dt.prototype.g = function (a) {
        this.state = a ? 3 : 2;
        this.s()
    };
    dt.prototype.load = function () {
        0 == this.state && (this.state = 1, this.s(), this.c(this.g.bind(this)))
    };
    dt.prototype.Y = function () {
        return this.f
    };
    function et(a, b) {
        Sc.call(this);
        this.sa = a;
        this.state = b;
        this.a = null;
        this.key = ""
    }

    v(et, Sc);
    et.prototype.s = function () {
        this.b("change")
    };
    et.prototype.fb = function () {
        return this.key + "/" + this.sa
    };
    function ft(a) {
        if (!a.a)return a;
        var b = a.a;
        do {
            if (2 == b.getState())return b;
            b = b.a
        } while (b);
        return a
    }

    function gt(a) {
        if (a.a) {
            var b = a.a;
            do {
                if (2 == b.getState()) {
                    b.a = null;
                    break
                } else 1 == b.getState() ? a = b : 0 == b.getState() ? a.a = b.a : a = b;
                b = a.a
            } while (b)
        }
    }

    et.prototype.i = function () {
        return this.sa
    };
    et.prototype.getState = function () {
        return this.state
    };
    function ht(a, b) {
        a.state = b;
        a.s()
    };
    function it(a, b, c, d, e) {
        et.call(this, a, b);
        this.g = c;
        this.M = new Image;
        null !== d && (this.M.crossOrigin = d);
        this.c = null;
        this.j = e
    }

    v(it, et);
    k = it.prototype;
    k.ka = function () {
        1 == this.state && (jt(this), this.M.src = kt.toDataURL("image/png"));
        this.a && Pc(this.a);
        this.state = 5;
        this.s();
        et.prototype.ka.call(this)
    };
    k.Y = function () {
        return this.M
    };
    k.fb = function () {
        return this.g
    };
    k.Rm = function () {
        this.state = 3;
        jt(this);
        this.M = kt;
        this.s()
    };
    k.Sm = function () {
        this.state = this.M.naturalWidth && this.M.naturalHeight ? 2 : 4;
        jt(this);
        this.s()
    };
    k.load = function () {
        if (0 == this.state || 3 == this.state) this.state = 1, this.s(), this.c = [Lc(this.M, "error", this.Rm, this), Lc(this.M, "load", this.Sm, this)], this.j(this, this.g)
    };
    function jt(a) {
        a.c.forEach(Gc);
        a.c = null
    }

    var kt, lt = ld(1, 1);
    lt.fillStyle = "rgba(0,0,0,0)";
    lt.fillRect(0, 0, 1, 1);
    kt = lt.canvas;
    function mt(a) {
        a = a ? a : {};
        sg.call(this, {handleEvent: pf});
        this.j = a.formatConstructors ? a.formatConstructors : [];
        this.o = a.projection ? Wb(a.projection) : null;
        this.a = null;
        this.g = a.source || null;
        this.target = a.target ? a.target : null
    }

    v(mt, sg);
    function nt(a) {
        a = a.dataTransfer.files;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c) {
            var d = a.item(c);
            var e = new FileReader;
            e.addEventListener("load", this.l.bind(this, d));
            e.readAsText(d)
        }
    }

    function ot(a) {
        a.stopPropagation();
        a.preventDefault();
        a.dataTransfer.dropEffect = "copy"
    }

    mt.prototype.l = function (a, b) {
        b = b.target.result;
        var c = this.v, d = this.o;
        d || (d = c.$().v);
        c = this.j;
        var e = [], f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = new c[g];
            var l = {featureProjection: d};
            try {
                e = h.Oa(b, l)
            } catch (m) {
                e = null
            }
            if (e && 0 < e.length)break
        }
        this.g && (this.g.clear(), this.g.Ec(e));
        this.b(new pt(qt, a, e, d))
    };
    function rt(a) {
        var b = a.v;
        b && (b = a.target ? a.target : b.a, a.a = [y(b, "drop", nt, a), y(b, "dragenter", ot, a), y(b, "dragover", ot, a), y(b, "drop", ot, a)])
    }

    mt.prototype.Ia = function (a) {
        sg.prototype.Ia.call(this, a);
        a ? rt(this) : st(this)
    };
    mt.prototype.setMap = function (a) {
        st(this);
        sg.prototype.setMap.call(this, a);
        this.c() && rt(this)
    };
    function st(a) {
        a.a && (a.a.forEach(Gc), a.a = null)
    }

    var qt = "addfeatures";

    function pt(a, b, c, d) {
        Qc.call(this, a);
        this.features = c;
        this.file = b;
        this.projection = d
    }

    v(pt, Qc);
    function tt(a) {
        a = a ? a : {};
        Jg.call(this, {handleDownEvent: ut, handleDragEvent: vt, handleUpEvent: wt});
        this.o = a.condition ? a.condition : Eg;
        this.a = this.g = void 0;
        this.j = 0;
        this.u = void 0 !== a.duration ? a.duration : 400
    }

    v(tt, Jg);
    function vt(a) {
        if (Gg(a)) {
            var b = a.map, c = b.Mb(), d = a.pixel;
            a = d[0] - c[0] / 2;
            d = c[1] / 2 - d[1];
            c = Math.atan2(d, a);
            a = Math.sqrt(a * a + d * d);
            b = b.$();
            b.g.rotation !== We && void 0 !== this.g && (d = c - this.g, tg(b, b.Qa() - d));
            this.g = c;
            void 0 !== this.a && (c = this.a * (b.Pa() / a), vg(b, c));
            void 0 !== this.a && (this.j = this.a / a);
            this.a = a
        }
    }

    function wt(a) {
        if (!Gg(a))return !0;
        a = a.map.$();
        hg(a, 1, -1);
        var b = this.j - 1, c = a.Qa();
        c = a.constrainRotation(c, 0);
        tg(a, c, void 0, void 0);
        c = a.Pa();
        var d = this.u;
        c = a.constrainResolution(c, 0, b);
        vg(a, c, void 0, d);
        this.j = 0;
        return !1
    }

    function ut(a) {
        return Gg(a) && this.o(a) ? (hg(a.map.$(), 1, 1), this.a = this.g = void 0, !0) : !1
    };
    function xt(a, b, c, d) {
        this.oa = a;
        this.Va = b;
        this.overlaps = d;
        this.c = 0;
        this.resolution = c;
        this.qa = this.pa = null;
        this.a = [];
        this.coordinates = [];
        this.ga = {};
        this.U = Ih();
        this.b = [];
        this.C = null;
        this.jb = Ih();
        this.ta = Ih()
    }

    v(xt, ci);
    function yt(a, b, c, d, e, f, g) {
        var h = a.coordinates.length, l = a.Zf();
        g && (c += e);
        g = [b[c], b[c + 1]];
        var m = [NaN, NaN], n = !0, p;
        for (p = c + e; p < d; p += e) {
            m[0] = b[p];
            m[1] = b[p + 1];
            var q = Ua(l, m);
            q !== t ? (n && (a.coordinates[h++] = g[0], a.coordinates[h++] = g[1]), a.coordinates[h++] = m[0], a.coordinates[h++] = m[1], n = !1) : 1 === q ? (a.coordinates[h++] = m[0], a.coordinates[h++] = m[1], n = !1) : n = !0;
            g[0] = m[0];
            g[1] = m[1];
            var t = q
        }
        if (f && n || p === c + e) a.coordinates[h++] = g[0], a.coordinates[h++] = g[1];
        return h
    }

    function zt(a, b, c, d, e, f) {
        for (var g = 0, h = d.length; g < h; ++g) {
            var l = d[g];
            c = yt(a, b, c, l, e, !1, !1);
            f.push(c);
            c = l
        }
        return c
    }

    k = xt.prototype;
    k.wh = function (a, b, c) {
        At(this, b);
        var d = a.T(), e = a.ma(), f = this.coordinates.length, g;
        if ("MultiPolygon" == d) {
            d = mi(a);
            var h = [];
            for (var l = a.c, m = g = 0, n = l.length; m < n; ++m) {
                var p = [];
                g = zt(this, d, g, l[m], e, p);
                h.push(p)
            }
            this.a.push([4, f, h, a, c, Kf])
        } else"Polygon" == d || "MultiLineString" == d ? (h = [], d = "Polygon" == d ? a.Tb() : a.ba(), zt(this, d, 0, a.sb(), e, h), this.a.push([4, f, h, a, c, Jf])) : "LineString" == d || "MultiPoint" == d ? (d = a.ba(), e = yt(this, d, 0, d.length, e, !1, !1), this.a.push([4, f, e, a, c, If])) : "Point" == d && (d = a.ba(), this.coordinates.push(d[0],
                d[1]), e = this.coordinates.length, this.a.push([4, f, e, a, c]));
        Bt(this, b)
    };
    function At(a, b) {
        a.pa = [0, b, 0];
        a.a.push(a.pa);
        a.qa = [0, b, 0];
        a.b.push(a.qa)
    }

    k.Wa = function (a, b) {
        if (this.S) {
            var c = Nh(this.U, this.S.slice());
            a.translate(c[0], c[1]);
            a.rotate(b)
        }
        a.fill();
        this.S && a.setTransform.apply(a, this.ta)
    };
    function Ct(a, b, c, d, e, f, g, h, l) {
        if (a.C && ma(d, a.U))var m = a.C; else a.C || (a.C = []), m = sf(a.coordinates, 0, a.coordinates.length, 2, d, a.C), Mh(a.U, d);
        d = !ub(f);
        for (var n = 0, p = g.length, q = 0, t, u = a.jb, x = a.ta, B, z, G, E, ia = 0, T = 0, R = a.ga,
                 U = {context: b, pixelRatio: c, resolution: a.resolution, rotation: e},
                 ta = a.a != g || a.overlaps ? 0 : 200; n < p;) {
            var A = g[n];
            switch (A[0]) {
                case 0:
                    var ea = A[1];
                    d && f[w(ea).toString()] || !ea.W() ? n = A[2] : void 0 === l || ob(l, ea.W().G()) ? ++n : n = A[2] + 1;
                    break;
                case 1:
                    ia > ta && (a.Wa(b, e), ia = 0);
                    T > ta && (b.stroke(), T = 0);
                    ia || T ||
                    (b.beginPath(), B = z = NaN);
                    ++n;
                    break;
                case 2:
                    q = A[1];
                    t = m[q];
                    A = m[q + 1];
                    G = m[q + 2] - t;
                    q = m[q + 3] - A;
                    q = Math.sqrt(G * G + q * q);
                    b.moveTo(t + q, A);
                    b.arc(t, A, q, 0, 2 * Math.PI, !0);
                    ++n;
                    break;
                case 3:
                    b.closePath();
                    ++n;
                    break;
                case 4:
                    q = A[1];
                    t = A[2];
                    G = A[4];
                    E = 6 == A.length ? A[5] : void 0;
                    U.geometry = A[3];
                    U.feature = ea;
                    n in R || (R[n] = []);
                    A = R[n];
                    E ? E(m, q, t, 2, A) : (A[0] = m[q], A[1] = m[q + 1], A.length = 2);
                    G(A, U);
                    ++n;
                    break;
                case 5:
                    q = A[1];
                    t = A[2];
                    var Ya = A[3];
                    var da = A[4] * c;
                    var Vb = A[5] * c;
                    var Ac = A[6], ge = A[7], he = A[8], Nf = A[9];
                    var Bc = A[10];
                    G = A[11];
                    E = A[12];
                    var Ah = A[13],
                        Ig = A[14];
                    for (Bc && (G += e); q < t; q += 2) {
                        A = m[q] - da;
                        Bc = m[q + 1] - Vb;
                        Ah && (A = Math.round(A), Bc = Math.round(Bc));
                        if (1 != E || G) {
                            var of = A + da, Bh = Bc + Vb;
                            Rh(u, of, Bh, E, E, G, -of, -Bh);
                            b.setTransform.apply(b, u)
                        }
                        of = b.globalAlpha;
                        1 != ge && (b.globalAlpha = of * ge);
                        Bh = Ig + he > Ya.width ? Ya.width - he : Ig;
                        var Zq = Ac + Nf > Ya.height ? Ya.height - Nf : Ac;
                        b.drawImage(Ya, he, Nf, Bh, Zq, A, Bc, Bh * c, Zq * c);
                        1 != ge && (b.globalAlpha = of);
                        (1 != E || G) && b.setTransform.apply(b, x)
                    }
                    ++n;
                    break;
                case 6:
                    q = A[1];
                    t = A[2];
                    Vb = A[3];
                    Ac = A[4] * c;
                    ge = A[5] * c;
                    G = A[6];
                    E = A[7] * c;
                    Ya = A[8];
                    da = A[9];
                    for ((Bc =
                        A[10]) && (G += e); q < t; q += 2) {
                        A = m[q] + Ac;
                        Bc = m[q + 1] + ge;
                        if (1 != E || G) Rh(u, A, Bc, E, E, G, -A, -Bc), b.setTransform.apply(b, u);
                        he = Vb.split("\n");
                        Nf = he.length;
                        1 < Nf ? (Ah = Math.round(1.5 * b.measureText("M").width), Bc -= (Nf - 1) / 2 * Ah) : Ah = 0;
                        for (Ig = 0; Ig < Nf; Ig++)of = he[Ig], da && b.strokeText(of, A, Bc), Ya && b.fillText(of, A, Bc), Bc += Ah;
                        (1 != E || G) && b.setTransform.apply(b, x)
                    }
                    ++n;
                    break;
                case 7:
                    if (h && (ea = A[1], q = h(ea)))return q;
                    ++n;
                    break;
                case 8:
                    ta ? ia++ : a.Wa(b, e);
                    ++n;
                    break;
                case 9:
                    q = A[1];
                    t = A[2];
                    A = m[q];
                    Bc = m[q + 1];
                    G = A + .5 | 0;
                    E = Bc + .5 | 0;
                    if (G !== B || E !==
                        z) b.moveTo(A, Bc), B = G, z = E;
                    for (q += 2; q < t; q += 2)if (A = m[q], Bc = m[q + 1], G = A + .5 | 0, E = Bc + .5 | 0, q == t - 2 || G !== B || E !== z) b.lineTo(A, Bc), B = G, z = E;
                    ++n;
                    break;
                case 10:
                    a.S = A[2];
                    ia && (a.Wa(b, e), ia = 0, T && (b.stroke(), T = 0));
                    b.fillStyle = A[1];
                    ++n;
                    break;
                case 11:
                    q = void 0 !== A[8] ? A[8] : !0;
                    var Ml = A[9];
                    t = A[2];
                    T && (b.stroke(), T = 0);
                    b.strokeStyle = A[1];
                    b.lineWidth = q ? t * c : t;
                    b.lineCap = A[3];
                    b.lineJoin = A[4];
                    b.miterLimit = A[5];
                    Vd && (t = A[6], G = A[7], q && c !== Ml && (t = t.map(function (a) {
                        return a * c / Ml
                    }), G *= c / Ml, A[6] = t, A[7] = G, A[9] = c), b.lineDashOffset = G, b.setLineDash(t));
                    ++n;
                    break;
                case 12:
                    b.font = A[1];
                    b.textAlign = A[2];
                    b.textBaseline = A[3];
                    ++n;
                    break;
                case 13:
                    ta ? T++ : b.stroke();
                    ++n;
                    break;
                default:
                    ++n
            }
        }
        ia && a.Wa(b, e);
        T && b.stroke()
    }

    k.Ma = function (a, b, c, d, e) {
        Ct(this, a, b, c, d, e, this.a, void 0, void 0)
    };
    function Dt(a) {
        var b = a.b;
        b.reverse();
        var c, d = b.length, e = -1;
        for (c = 0; c < d; ++c) {
            var f = b[c];
            var g = f[0];
            if (7 == g) e = c; else if (0 == g) {
                f[2] = c;
                f = a.b;
                for (g = c; e < g;) {
                    var h = f[e];
                    f[e] = f[g];
                    f[g] = h;
                    ++e;
                    --g
                }
                e = -1
            }
        }
    }

    function Bt(a, b) {
        a.pa[2] = a.a.length;
        a.pa = null;
        a.qa[2] = a.b.length;
        a.qa = null;
        b = [7, b];
        a.a.push(b);
        a.b.push(b)
    }

    k.df = ra;
    k.Zf = function () {
        return this.Va
    };
    function Et(a, b, c, d) {
        xt.call(this, a, b, c, d);
        this.M = this.I = null;
        this.R = this.u = this.v = this.o = this.l = this.B = this.D = this.j = this.g = this.i = this.f = void 0
    }

    v(Et, xt);
    Et.prototype.sc = function (a, b) {
        if (this.M) {
            At(this, b);
            var c = a.ba(), d = this.coordinates.length;
            a = yt(this, c, 0, c.length, a.ma(), !1, !1);
            this.a.push([5, d, a, this.M, this.f, this.i, this.g, this.j, this.D, this.B, this.l, this.o, this.v, this.u, this.R]);
            this.b.push([5, d, a, this.I, this.f, this.i, this.g, this.j, this.D, this.B, this.l, this.o, this.v, this.u, this.R]);
            Bt(this, b)
        }
    };
    Et.prototype.qc = function (a, b) {
        if (this.M) {
            At(this, b);
            var c = a.ba(), d = this.coordinates.length;
            a = yt(this, c, 0, c.length, a.ma(), !1, !1);
            this.a.push([5, d, a, this.M, this.f, this.i, this.g, this.j, this.D, this.B, this.l, this.o, this.v, this.u, this.R]);
            this.b.push([5, d, a, this.I, this.f, this.i, this.g, this.j, this.D, this.B, this.l, this.o, this.v, this.u, this.R]);
            Bt(this, b)
        }
    };
    Et.prototype.df = function () {
        Dt(this);
        this.i = this.f = void 0;
        this.M = this.I = null;
        this.R = this.u = this.o = this.l = this.B = this.D = this.j = this.v = this.g = void 0
    };
    Et.prototype.Vb = function (a) {
        var b = a.Jc(), c = a.ic(), d = a.yg(1), e = a.Y(1), f = a.Rc();
        this.f = b[0];
        this.i = b[1];
        this.I = d;
        this.M = e;
        this.g = c[1];
        this.j = a.i;
        this.D = f[0];
        this.B = f[1];
        this.l = a.o;
        this.o = a.g;
        this.v = a.a;
        this.u = a.v;
        this.R = c[0]
    };
    function Ft(a, b, c, d) {
        xt.call(this, a, b, c, d);
        this.i = null;
        this.f = {
            Sd: void 0,
            Md: void 0,
            Nd: null,
            Od: void 0,
            Pd: void 0,
            Qd: void 0,
            Rd: void 0,
            sd: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    v(Ft, xt);
    function Gt(a, b, c, d, e) {
        var f = a.coordinates.length;
        b = yt(a, b, c, d, e, !1, !1);
        f = [9, f, b];
        a.a.push(f);
        a.b.push(f);
        return d
    }

    k = Ft.prototype;
    k.Zf = function () {
        this.i || (this.i = Pa(this.Va), 0 < this.c && Oa(this.i, this.resolution * (this.c + 1) / 2, this.i));
        return this.i
    };
    function Ht(a) {
        var b = a.f, c = b.strokeStyle, d = b.lineCap, e = b.lineDash, f = b.lineDashOffset, g = b.lineJoin,
            h = b.lineWidth, l = b.miterLimit;
        b.Sd == c && b.Md == d && ma(b.Nd, e) && b.Od == f && b.Pd == g && b.Qd == h && b.Rd == l || (void 0 != b.sd && b.sd != a.coordinates.length && (a.a.push([13]), b.sd = a.coordinates.length), b.sd = 0, a.a.push([11, c, h, d, g, l, e, f, !0, 1], [1]), b.Sd = c, b.Md = d, b.Nd = e, b.Od = f, b.Pd = g, b.Qd = h, b.Rd = l)
    }

    k.oc = function (a, b) {
        var c = this.f, d = c.lineWidth;
        void 0 !== c.strokeStyle && void 0 !== d && (Ht(this), At(this, b), this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset, !0, 1], [1]), c = a.ba(), Gt(this, c, 0, c.length, a.ma()), this.b.push([13]), Bt(this, b))
    };
    k.pc = function (a, b) {
        var c = this.f, d = c.lineWidth;
        if (void 0 !== c.strokeStyle && void 0 !== d) {
            Ht(this);
            At(this, b);
            this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset, !0, 1], [1]);
            c = a.sb();
            d = a.ba();
            a = a.ma();
            var e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g)e = Gt(this, d, e, c[g], a);
            this.b.push([13]);
            Bt(this, b)
        }
    };
    k.df = function () {
        var a = this.f;
        void 0 != a.sd && a.sd != this.coordinates.length && this.a.push([13]);
        Dt(this);
        this.f = null
    };
    k.Na = function (a, b) {
        a = b.b;
        this.f.strokeStyle = kd(a ? a : ai);
        a = b.g;
        this.f.lineCap = void 0 !== a ? a : "round";
        a = b.f;
        this.f.lineDash = a ? a : $h;
        a = b.i;
        this.f.lineDashOffset = a ? a : 0;
        a = b.j;
        this.f.lineJoin = void 0 !== a ? a : "round";
        a = b.c;
        this.f.lineWidth = void 0 !== a ? a : 1;
        b = b.l;
        this.f.miterLimit = void 0 !== b ? b : 10;
        this.f.lineWidth > this.c && (this.c = this.f.lineWidth, this.i = null)
    };
    function It(a, b, c, d) {
        xt.call(this, a, b, c, d);
        this.i = null;
        this.f = {
            uh: void 0,
            Sd: void 0,
            Md: void 0,
            Nd: null,
            Od: void 0,
            Pd: void 0,
            Qd: void 0,
            Rd: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    v(It, xt);
    function Jt(a, b, c, d, e) {
        var f = a.f, g = void 0 !== f.fillStyle;
        f = void 0 != f.strokeStyle;
        var h = d.length, l = [1];
        a.a.push(l);
        a.b.push(l);
        for (l = 0; l < h; ++l) {
            var m = d[l], n = a.coordinates.length;
            c = yt(a, b, c, m, e, !0, !f);
            c = [9, n, c];
            a.a.push(c);
            a.b.push(c);
            f && (c = [3], a.a.push(c), a.b.push(c));
            c = m
        }
        b = [8];
        a.b.push(b);
        g && a.a.push(b);
        f && (g = [13], a.a.push(g), a.b.push(g));
        return c
    }

    k = It.prototype;
    k.$b = function (a, b) {
        var c = this.f, d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            Kt(this, a);
            At(this, b);
            this.b.push([10, id(Zh)]);
            void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset, !0, 1]);
            var e = a.ba();
            d = this.coordinates.length;
            yt(this, e, 0, e.length, a.ma(), !1, !1);
            a = [1];
            d = [2, d];
            this.a.push(a, d);
            this.b.push(a, d);
            a = [8];
            this.b.push(a);
            void 0 !== c.fillStyle && this.a.push(a);
            void 0 !== c.strokeStyle && (c = [13], this.a.push(c), this.b.push(c));
            Bt(this, b)
        }
    };
    k.tc = function (a, b) {
        var c = this.f;
        Kt(this, a);
        At(this, b);
        this.b.push([10, id(Zh)]);
        void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset, !0, 1]);
        c = a.sb();
        var d = a.Tb();
        Jt(this, d, 0, c, a.ma());
        Bt(this, b)
    };
    k.rc = function (a, b) {
        var c = this.f, d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            Kt(this, a);
            At(this, b);
            this.b.push([10, id(Zh)]);
            void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset, !0, 1]);
            c = a.c;
            d = mi(a);
            a = a.ma();
            var e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g)e = Jt(this, d, e, c[g], a);
            Bt(this, b)
        }
    };
    k.df = function () {
        Dt(this);
        this.f = null;
        var a = this.oa;
        if (a) {
            var b = this.coordinates, c;
            var d = 0;
            for (c = b.length; d < c; ++d)b[d] = a * Math.round(b[d] / a)
        }
    };
    k.Zf = function () {
        this.i || (this.i = Pa(this.Va), 0 < this.c && Oa(this.i, this.resolution * (this.c + 1) / 2, this.i));
        return this.i
    };
    k.Na = function (a, b) {
        var c = this.f;
        a ? (a = a.b, c.fillStyle = kd(a ? a : Zh)) : c.fillStyle = void 0;
        b ? (a = b.b, c.strokeStyle = kd(a ? a : ai), a = b.g, c.lineCap = void 0 !== a ? a : "round", a = b.f, c.lineDash = a ? a.slice() : $h, a = b.i, c.lineDashOffset = a ? a : 0, a = b.j, c.lineJoin = void 0 !== a ? a : "round", a = b.c, c.lineWidth = void 0 !== a ? a : 1, b = b.l, c.miterLimit = void 0 !== b ? b : 10, c.lineWidth > this.c && (this.c = c.lineWidth, this.i = null)) : (c.strokeStyle = void 0, c.lineCap = void 0, c.lineDash = null, c.lineDashOffset = void 0, c.lineJoin = void 0, c.lineWidth = void 0, c.miterLimit =
            void 0)
    };
    function Kt(a, b) {
        var c = a.f, d = c.fillStyle, e = c.strokeStyle, f = c.lineCap, g = c.lineDash, h = c.lineDashOffset,
            l = c.lineJoin, m = c.lineWidth, n = c.miterLimit;
        if (void 0 !== d && ("string" !== typeof d || c.uh != d)) {
            var p = [10, d];
            "string" !== typeof d && (b = b.G(), p.push([b[0], b[3]]));
            a.a.push(p);
            c.uh = c.fillStyle
        }
        void 0 === e || c.Sd == e && c.Md == f && ma(c.Nd, g) && c.Od == h && c.Pd == l && c.Qd == m && c.Rd == n || (a.a.push([11, e, m, f, l, n, g, h, !0, 1]), c.Sd = e, c.Md = f, c.Nd = g, c.Od = h, c.Pd = l, c.Qd = m, c.Rd = n)
    };
    function Lt(a, b, c, d) {
        xt.call(this, a, b, c, d);
        this.B = this.D = this.R = null;
        this.ua = "";
        this.l = this.j = 0;
        this.o = void 0;
        this.u = this.v = 0;
        this.g = this.i = this.f = null
    }

    v(Lt, xt);
    Lt.prototype.Qb = function (a, b, c, d, e, f) {
        if ("" !== this.ua && this.g && (this.f || this.i)) {
            if (this.f) {
                e = this.f;
                var g = this.R;
                if (!g || g.fillStyle != e.fillStyle) {
                    var h = [10, e.fillStyle];
                    this.a.push(h);
                    this.b.push(h);
                    g ? g.fillStyle = e.fillStyle : this.R = {fillStyle: e.fillStyle}
                }
            }
            this.i && (e = this.i, g = this.D, g && g.lineCap == e.lineCap && g.lineDash == e.lineDash && g.lineDashOffset == e.lineDashOffset && g.lineJoin == e.lineJoin && g.lineWidth == e.lineWidth && g.miterLimit == e.miterLimit && g.strokeStyle == e.strokeStyle || (h = [11, e.strokeStyle, e.lineWidth,
                e.lineCap, e.lineJoin, e.miterLimit, e.lineDash, e.lineDashOffset, !1, 1], this.a.push(h), this.b.push(h), g ? (g.lineCap = e.lineCap, g.lineDash = e.lineDash, g.lineDashOffset = e.lineDashOffset, g.lineJoin = e.lineJoin, g.lineWidth = e.lineWidth, g.miterLimit = e.miterLimit, g.strokeStyle = e.strokeStyle) : this.D = {
                lineCap: e.lineCap,
                lineDash: e.lineDash,
                lineDashOffset: e.lineDashOffset,
                lineJoin: e.lineJoin,
                lineWidth: e.lineWidth,
                miterLimit: e.miterLimit,
                strokeStyle: e.strokeStyle
            }));
            e = this.g;
            g = this.B;
            g && g.font == e.font && g.textAlign ==
            e.textAlign && g.textBaseline == e.textBaseline || (h = [12, e.font, e.textAlign, e.textBaseline], this.a.push(h), this.b.push(h), g ? (g.font = e.font, g.textAlign = e.textAlign, g.textBaseline = e.textBaseline) : this.B = {
                font: e.font,
                textAlign: e.textAlign,
                textBaseline: e.textBaseline
            });
            At(this, f);
            e = this.coordinates.length;
            a = yt(this, a, b, c, d, !1, !1);
            a = [6, e, a, this.ua, this.j, this.l, this.v, this.u, !!this.f, !!this.i, this.o];
            this.a.push(a);
            this.b.push(a);
            Bt(this, f)
        }
    };
    Lt.prototype.gb = function (a) {
        if (a) {
            var b = a.Da();
            b ? (b = b.b, b = kd(b ? b : Zh), this.f ? this.f.fillStyle = b : this.f = {fillStyle: b}) : this.f = null;
            var c = a.Ea();
            if (c) {
                b = c.b;
                var d = c.g, e = c.f, f = c.i, g = c.j, h = c.c;
                c = c.l;
                d = void 0 !== d ? d : "round";
                e = e ? e.slice() : $h;
                f = void 0 !== f ? f : 0;
                g = void 0 !== g ? g : "round";
                h = void 0 !== h ? h : 1;
                c = void 0 !== c ? c : 10;
                b = kd(b ? b : ai);
                if (this.i) {
                    var l = this.i;
                    l.lineCap = d;
                    l.lineDash = e;
                    l.lineDashOffset = f;
                    l.lineJoin = g;
                    l.lineWidth = h;
                    l.miterLimit = c;
                    l.strokeStyle = b
                } else this.i = {
                    lineCap: d, lineDash: e, lineDashOffset: f, lineJoin: g,
                    lineWidth: h, miterLimit: c, strokeStyle: b
                }
            } else this.i = null;
            var m = a.a;
            b = a.f;
            d = a.c;
            e = a.l;
            h = a.i;
            c = a.b;
            f = a.Ja();
            g = a.g;
            l = a.j;
            a = void 0 !== m ? m : "10px sans-serif";
            g = void 0 !== g ? g : "center";
            l = void 0 !== l ? l : "middle";
            this.g ? (m = this.g, m.font = a, m.textAlign = g, m.textBaseline = l) : this.g = {
                font: a,
                textAlign: g,
                textBaseline: l
            };
            this.ua = void 0 !== f ? f : "";
            this.j = void 0 !== b ? b : 0;
            this.l = void 0 !== d ? d : 0;
            this.o = void 0 !== e ? e : !1;
            this.v = void 0 !== h ? h : 0;
            this.u = void 0 !== c ? c : 1
        } else this.ua = ""
    };
    function Mt(a, b, c, d, e) {
        this.v = a;
        this.f = b;
        this.l = d;
        this.o = c;
        this.i = e;
        this.a = {};
        this.g = ld(1, 1);
        this.j = Ih()
    }

    v(Mt, ri);
    var Nt = {0: [[!0]]};

    function Ot(a, b, c) {
        var d, e = Math.floor(a.length / 2);
        if (b >= e)for (d = e; d < b; d++)a[d][c] = !0; else if (b < e)for (d = b + 1; d < e; d++)a[d][c] = !0
    }

    function Pt(a) {
        if (void 0 !== Nt[a])return Nt[a];
        for (var b = 2 * a + 1, c = Array(b), d = 0; d < b; d++)c[d] = Array(b);
        b = a;
        for (var e = d = 0; b >= d;)Ot(c, a + b, a + d), Ot(c, a + d, a + b), Ot(c, a - d, a + b), Ot(c, a - b, a + d), Ot(c, a - b, a - d), Ot(c, a - d, a - b), Ot(c, a + d, a - b), Ot(c, a + b, a - d), d++, e += 1 + 2 * d, 0 < 2 * (e - b) + 1 && (--b, e += 1 - 2 * b);
        return Nt[a] = c
    }

    function Qt(a) {
        for (var b in a.a) {
            var c = a.a[b], d;
            for (d in c)c[d].df()
        }
    }

    Mt.prototype.Ha = function (a, b, c, d, e, f) {
        d = Math.round(d);
        var g = 2 * d + 1, h = Rh(this.j, d + .5, d + .5, 1 / b, -1 / b, -c, -a[0], -a[1]), l = this.g;
        l.canvas.width !== g || l.canvas.height !== g ? (l.canvas.width = g, l.canvas.height = g) : l.clearRect(0, 0, g, g);
        if (void 0 !== this.i) {
            var m = Ma();
            Na(m, a);
            Oa(m, b * (this.i + d), m)
        }
        var n = Pt(d);
        return Rt(this, l, h, c, e, function (a) {
            for (var b = l.getImageData(0, 0, g, g).data,
                     c = 0; c < g; c++)for (var d = 0; d < g; d++)if (n[c][d] && 0 < b[4 * (d * g + c) + 3]) {
                if (a = f(a))return a;
                l.clearRect(0, 0, g, g);
                return
            }
        }, m)
    };
    function St(a, b) {
        var c = a.f;
        a = c[0];
        var d = c[1], e = c[2];
        c = c[3];
        a = [a, d, a, c, e, c, e, d];
        sf(a, 0, 8, 2, b, a);
        return a
    }

    Mt.prototype.b = function (a, b) {
        var c = void 0 !== a ? a.toString() : "0";
        a = this.a[c];
        void 0 === a && (a = {}, this.a[c] = a);
        c = a[b];
        void 0 === c && (c = new Tt[b](this.v, this.f, this.o, this.l), a[b] = c);
        return c
    };
    Mt.prototype.c = function () {
        return ub(this.a)
    };
    Mt.prototype.Ma = function (a, b, c, d, e, f) {
        var g = Object.keys(this.a).map(Number);
        g.sort(fa);
        var h = St(this, c);
        a.save();
        a.beginPath();
        a.moveTo(h[0], h[1]);
        a.lineTo(h[2], h[3]);
        a.lineTo(h[4], h[5]);
        a.lineTo(h[6], h[7]);
        a.clip();
        f = f ? f : qi;
        var l, m;
        h = 0;
        for (l = g.length; h < l; ++h) {
            var n = this.a[g[h].toString()];
            var p = 0;
            for (m = f.length; p < m; ++p) {
                var q = n[f[p]];
                void 0 !== q && q.Ma(a, b, c, d, e)
            }
        }
        a.restore()
    };
    function Rt(a, b, c, d, e, f, g) {
        var h = Object.keys(a.a).map(Number);
        h.sort(function (a, b) {
            return b - a
        });
        var l, m;
        var n = 0;
        for (l = h.length; n < l; ++n) {
            var p = a.a[h[n].toString()];
            for (m = qi.length - 1; 0 <= m; --m) {
                var q = p[qi[m]];
                if (void 0 !== q && (q = Ct(q, b, 1, c, d, e, q.b, f, g)))return q
            }
        }
    }

    var Tt = {Circle: It, Default: xt, Image: Et, LineString: Ft, Polygon: It, Text: Lt};

    function Ut(a) {
        Uc.call(this);
        this.a = a
    }

    v(Ut, Uc);
    Ut.prototype.Ha = ra;
    Ut.prototype.ef = qf;
    Ut.prototype.Uf = function (a, b, c) {
        return function (d, e) {
            return Vt(a, b, d, e, function (a) {
                c[d] || (c[d] = {});
                c[d][a.sa.toString()] = a
            })
        }
    };
    Ut.prototype.ta = function (a) {
        2 === a.target.getState() && Wt(this)
    };
    function Xt(a, b) {
        var c = b.getState();
        2 != c && 3 != c && y(b, "change", a.ta, a);
        0 == c && (b.load(), c = b.getState());
        return 2 == c
    }

    function Wt(a) {
        var b = a.a;
        b.Sb() && "ready" == b.hg() && a.s()
    }

    function Yt(a, b) {
        b.Ui() && a.postRenderFunctions.push(function (a, b, e) {
            b = w(a).toString();
            b in e.usedTiles && a.jd(e.viewState.projection, e.usedTiles[b])
        }.bind(null, b))
    }

    function Zt(a, b) {
        if (b) {
            var c;
            var d = 0;
            for (c = b.length; d < c; ++d) {
                var e = b[d];
                a[w(e).toString()] = e
            }
        }
    }

    function $t(a, b) {
        b = b.D;
        void 0 !== b && ("string" === typeof b ? a.logos[b] = "" : b && (va("string" == typeof b.href, 44), va("string" == typeof b.src, 45), a.logos[b.src] = b.href))
    }

    function au(a, b, c, d) {
        b = w(b).toString();
        c = c.toString();
        b in a ? c in a[b] ? (a = a[b][c], d.ca < a.ca && (a.ca = d.ca), d.da > a.da && (a.da = d.da), d.ea < a.ea && (a.ea = d.ea), d.ha > a.ha && (a.ha = d.ha)) : a[b][c] = d : (a[b] = {}, a[b][c] = d)
    }

    function bu(a, b, c, d, e, f, g, h, l, m) {
        var n = w(b).toString();
        n in a.wantedTiles || (a.wantedTiles[n] = {});
        var p = a.wantedTiles[n];
        a = a.tileQueue;
        var q = c.minZoom, t, u, x;
        for (x = g; x >= q; --x) {
            var B = pc(c, f, x, B);
            var z = c.Ca(x);
            for (t = B.ca; t <= B.da; ++t)for (u = B.ea; u <= B.ha; ++u)if (g - x <= h) {
                var G = b.Qc(x, t, u, d, e);
                0 == G.getState() && (p[G.fb()] = !0, G.fb() in a.a || a.i([G, n, uc(c, G.sa), z]));
                l && l.call(m, G)
            } else b.Zg(x, t, u, e)
        }
    };
    function cu(a) {
        Ut.call(this, a);
        this.U = Ih()
    }

    v(cu, Ut);
    function du(a, b, c) {
        var d = b.pixelRatio, e = b.size[0] * d, f = b.size[1] * d, g = b.viewState.rotation, h = gb(c), l = fb(c),
            m = eb(c);
        c = db(c);
        Nh(b.coordinateToPixelTransform, h);
        Nh(b.coordinateToPixelTransform, l);
        Nh(b.coordinateToPixelTransform, m);
        Nh(b.coordinateToPixelTransform, c);
        a.save();
        bi(a, -g, e / 2, f / 2);
        a.beginPath();
        a.moveTo(h[0] * d, h[1] * d);
        a.lineTo(l[0] * d, l[1] * d);
        a.lineTo(m[0] * d, m[1] * d);
        a.lineTo(c[0] * d, c[1] * d);
        a.clip();
        bi(a, g, e / 2, f / 2)
    }

    function eu(a, b, c, d, e) {
        var f = a.a;
        if (Tc(f, b)) {
            var g = d.size[0] * d.pixelRatio, h = d.size[1] * d.pixelRatio, l = d.viewState.rotation;
            bi(c, -l, g / 2, h / 2);
            a = e ? e : fu(a, d, 0);
            f.b(new Yh(b, new di(c, d.pixelRatio, d.extent, a, d.viewState.rotation), d, c, null));
            bi(c, l, g / 2, h / 2)
        }
    }

    cu.prototype.v = function (a, b, c, d) {
        if (this.Ha(a, b, 0, pf, this))return c.call(d, this.a, null)
    };
    cu.prototype.qf = function (a, b, c, d) {
        eu(this, "postcompose", a, b, d)
    };
    function fu(a, b, c) {
        var d = b.viewState, e = b.pixelRatio, f = e / d.resolution;
        return Rh(a.U, e * b.size[0] / 2, e * b.size[1] / 2, f, -f, -d.rotation, -d.center[0] + c, -d.center[1])
    };
    function gu(a, b) {
        return w(a) - w(b)
    }

    function hu(a, b) {
        a = .5 * a / b;
        return a * a
    }

    function iu(a, b, c, d, e, f) {
        var g = !1, h;
        if (h = c.Y()) {
            var l = h.hf();
            2 == l || 3 == l ? h.Lj(e, f) : (0 == l && h.load(), h.Wh(e, f), g = !0)
        }
        if (e = (0, c.$a)(b))if (d = e.ae(d), c.Je()) ju(a, d, c, b); else(0, ku[d.T()])(a, d, c, b);
        return g
    }

    function ju(a, b, c, d) {
        if ("GeometryCollection" == b.T()) {
            b = b.kd();
            for (var e = 0, f = b.length; e < f; ++e)ju(a, b[e], c, d)
        } else a.b(c.za(), "Default").wh(b, d, c.Je())
    }

    var ku = {
        Point: function (a, b, c, d) {
            var e = c.Y();
            if (e) {
                if (2 != e.hf())return;
                var f = a.b(c.za(), "Image");
                f.Vb(e);
                f.sc(b, d)
            }
            if (e = c.Ja()) a = a.b(c.za(), "Text"), a.gb(e), a.Qb(b.ba(), 0, 2, 2, b, d)
        }, LineString: function (a, b, c, d) {
            var e = c.Ea();
            if (e) {
                var f = a.b(c.za(), "LineString");
                f.Na(null, e);
                f.oc(b, d)
            }
            if (e = c.Ja()) a = a.b(c.za(), "Text"), a.gb(e), a.Qb(ki(b), 0, 2, 2, b, d)
        }, Polygon: function (a, b, c, d) {
            var e = c.Da(), f = c.Ea();
            if (e || f) {
                var g = a.b(c.za(), "Polygon");
                g.Na(e, f);
                g.tc(b, d)
            }
            if (e = c.Ja()) a = a.b(c.za(), "Text"), a.gb(e), a.Qb(ag(b),
                0, 2, 2, b, d)
        }, MultiPoint: function (a, b, c, d) {
            var e = c.Y();
            if (e) {
                if (2 != e.hf())return;
                var f = a.b(c.za(), "Image");
                f.Vb(e);
                f.qc(b, d)
            }
            if (e = c.Ja()) a = a.b(c.za(), "Text"), a.gb(e), c = b.ba(), a.Qb(c, 0, c.length, b.ma(), b, d)
        }, MultiLineString: function (a, b, c, d) {
            var e = c.Ea();
            if (e) {
                var f = a.b(c.za(), "LineString");
                f.Na(null, e);
                f.pc(b, d)
            }
            if (e = c.Ja()) a = a.b(c.za(), "Text"), a.gb(e), c = li(b), a.Qb(c, 0, c.length, 2, b, d)
        }, MultiPolygon: function (a, b, c, d) {
            var e = c.Da(), f = c.Ea();
            if (f || e) {
                var g = a.b(c.za(), "Polygon");
                g.Na(e, f);
                g.rc(b, d)
            }
            if (e =
                    c.Ja()) a = a.b(c.za(), "Text"), a.gb(e), c = ni(b), a.Qb(c, 0, c.length, 2, b, d)
        }, GeometryCollection: function (a, b, c, d) {
            b = b.a;
            var e;
            var f = 0;
            for (e = b.length; f < e; ++f)(0, ku[b[f].T()])(a, b[f], c, d)
        }, Circle: function (a, b, c, d) {
            var e = c.Da(), f = c.Ea();
            if (e || f) {
                var g = a.b(c.za(), "Circle");
                g.Na(e, f);
                g.$b(b, d)
            }
            if (e = c.Ja()) a = a.b(c.za(), "Text"), a.gb(e), a.Qb(b.xa(), 0, 2, 2, b, d)
        }
    };

    function lu(a) {
        cu.call(this, a);
        this.c = !1;
        this.R = -1;
        this.o = NaN;
        this.j = Ma();
        this.i = this.l = null;
        this.g = ld()
    }

    v(lu, cu);
    lu.prototype.u = function (a, b, c) {
        var d = a.extent, e = a.pixelRatio, f = b.Ue ? a.skippedFeatureUids : {}, g = a.viewState, h = g.projection,
            l = g.rotation, m = h.G(), n = this.a.ia(), p = fu(this, a, 0);
        eu(this, "precompose", c, a, p);
        var q = b.extent;
        (g = void 0 !== q) && du(c, a, q);
        var t = this.i;
        if (t && !t.c()) {
            var u = q = 0, x = 1 !== b.opacity, B = Tc(this.a, "render");
            if (x || B) {
                var z = c.canvas.width;
                var G = c.canvas.height;
                if (l) {
                    var E = Math.round(Math.sqrt(z * z + G * G));
                    q = (E - z) / 2;
                    u = (E - G) / 2;
                    z = G = E
                }
                this.g.canvas.width = z;
                this.g.canvas.height = G;
                z = this.g
            } else z = c;
            G =
                z.globalAlpha;
            x || (z.globalAlpha = b.opacity);
            z != c && z.translate(q, u);
            E = a.size[0] * e;
            var ia = a.size[1] * e;
            bi(z, -l, E / 2, ia / 2);
            t.Ma(z, e, p, l, f);
            if (n.u && h.f && !Ta(m, d)) {
                h = d[0];
                n = jb(m);
                for (var T = 0; h < m[0];)--T, p = n * T, p = fu(this, a, p), t.Ma(z, e, p, l, f), h += n;
                T = 0;
                for (h = d[2]; h > m[2];)++T, p = n * T, p = fu(this, a, p), t.Ma(z, e, p, l, f), h -= n;
                p = fu(this, a, 0)
            }
            bi(z, l, E / 2, ia / 2);
            z != c && (B && eu(this, "render", z, a, p), x ? (d = c.globalAlpha, c.globalAlpha = b.opacity, c.drawImage(z.canvas, -q, -u), c.globalAlpha = d) : c.drawImage(z.canvas, -q, -u), z.translate(-q,
                -u));
            x || (z.globalAlpha = G)
        }
        g && c.restore();
        this.qf(c, a, b, p)
    };
    lu.prototype.Ha = function (a, b, c, d, e) {
        if (this.i) {
            var f = this.a, g = {};
            return this.i.Ha(a, b.viewState.resolution, b.viewState.rotation, c, {}, function (a) {
                var b = w(a).toString();
                if (!(b in g))return g[b] = !0, d.call(e, a, f)
            })
        }
    };
    lu.prototype.D = function () {
        Wt(this)
    };
    lu.prototype.yd = function (a) {
        var b = this.a, c = b.ia();
        Zt(a.attributions, c.j);
        $t(a, c);
        var d = a.viewHints[0], e = a.viewHints[1], f = b.S, g = b.U;
        if (!this.c && !f && d || !g && e)return !0;
        f = a.extent;
        var h = a.viewState;
        g = h.projection;
        var l = h.resolution, m = a.pixelRatio;
        d = b.f;
        var n = b.c;
        e = b.get(mu);
        void 0 === e && (e = gu);
        f = Oa(f, n * l);
        n = h.projection.G();
        c.u && h.projection.f && !Ta(n, a.extent) && (a = Math.max(jb(f) / 2, jb(n)), f[0] = n[0] - a, f[2] = n[2] + a);
        if (!this.c && this.o == l && this.R == d && this.l == e && Ta(this.j, f))return !0;
        this.i = null;
        this.c = !1;
        var p =
            new Mt(.5 * l / m, f, l, c.U, b.c);
        c.de(f, l, g);
        a = function (a) {
            var c = a.bb();
            if (c)var d = c.call(a, l); else(c = b.bb()) && (d = c(a, l));
            if (d) {
                if (d) {
                    c = !1;
                    if (Array.isArray(d))for (var e = 0,
                                                  f = d.length; e < f; ++e)c = iu(p, a, d[e], hu(l, m), this.D, this) || c; else c = iu(p, a, d, hu(l, m), this.D, this) || c;
                    a = c
                } else a = !1;
                this.c = this.c || a
            }
        }.bind(this);
        if (e) {
            var q = [];
            c.ac(f, function (a) {
                q.push(a)
            }, this);
            q.sort(e);
            c = 0;
            for (g = q.length; c < g; ++c)a(q[c])
        } else c.ac(f, a, this);
        Qt(p);
        this.o = l;
        this.R = d;
        this.l = e;
        this.j = f;
        this.i = p;
        return !0
    };
    function nu() {
        this.b = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"
    }

    v(nu, ti);
    var ou = new nu;

    function pu() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }

    v(pu, ui);
    var qu = new pu;

    function ru(a, b) {
        this.f = a.getUniformLocation(b, "f");
        this.c = a.getUniformLocation(b, "e");
        this.g = a.getUniformLocation(b, "d");
        this.i = a.getUniformLocation(b, "g");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c")
    };
    function su(a, b) {
        Ut.call(this, b);
        this.c = a;
        this.U = new Ki([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.g = this.Hb = null;
        this.j = void 0;
        this.v = Ih();
        this.R = Ih();
        this.B = Ai();
        this.u = null
    }

    v(su, Ut);
    function tu(a, b, c) {
        var d = a.c.f;
        if (void 0 === a.j || a.j != c) {
            b.postRenderFunctions.push(function (a, b, c) {
                a.isContextLost() || (a.deleteFramebuffer(b), a.deleteTexture(c))
            }.bind(null, d, a.g, a.Hb));
            b = Xi(d, c, c);
            var e = d.createFramebuffer();
            d.bindFramebuffer(36160, e);
            d.framebufferTexture2D(36160, 36064, 3553, b, 0);
            a.Hb = b;
            a.g = e;
            a.j = c
        } else d.bindFramebuffer(36160, a.g)
    }

    su.prototype.Qi = function (a, b, c) {
        uu(this, "precompose", c, a);
        Di(c, 34962, this.U);
        var d = c.b, e = Oi(c, ou, qu);
        if (this.u)var f = this.u; else this.u = f = new ru(d, e);
        c.Tc(e) && (d.enableVertexAttribArray(f.b), d.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0), d.enableVertexAttribArray(f.a), d.vertexAttribPointer(f.a, 2, 5126, !1, 16, 8), d.uniform1i(f.i, 0));
        d.uniformMatrix4fv(f.g, !1, Bi(this.B, this.v));
        d.uniformMatrix4fv(f.c, !1, Bi(this.B, this.R));
        d.uniform1f(f.f, b.opacity);
        d.bindTexture(3553, this.Hb);
        d.drawArrays(5, 0, 4);
        uu(this, "postcompose",
            c, a)
    };
    function uu(a, b, c, d) {
        a = a.a;
        if (Tc(a, b)) {
            var e = d.viewState;
            a.b(new Yh(b, new Ck(c, e.center, e.resolution, e.rotation, d.size, d.extent, d.pixelRatio), d, null, c))
        }
    }

    su.prototype.ug = function () {
        this.g = this.Hb = null;
        this.j = void 0
    };
    function vu(a, b) {
        su.call(this, a, b);
        this.o = !1;
        this.S = -1;
        this.I = NaN;
        this.D = Ma();
        this.l = this.i = this.C = null
    }

    v(vu, su);
    k = vu.prototype;
    k.Qi = function (a, b, c) {
        this.l = b;
        var d = a.viewState, e = this.i, f = a.size, g = a.pixelRatio, h = this.c.f;
        e && !e.c() && (h.enable(h.SCISSOR_TEST), h.scissor(0, 0, f[0] * g, f[1] * g), e.Ma(c, d.center, d.resolution, d.rotation, f, g, b.opacity, b.Ue ? a.skippedFeatureUids : {}), h.disable(h.SCISSOR_TEST))
    };
    k.ka = function () {
        var a = this.i;
        a && (wk(a, this.c.i)(), this.i = null);
        su.prototype.ka.call(this)
    };
    k.Ha = function (a, b, c, d, e) {
        if (this.i && this.l) {
            c = b.viewState;
            var f = this.a, g = {};
            return this.i.Ha(a, this.c.i, c.center, c.resolution, c.rotation, b.size, b.pixelRatio, this.l.opacity, {}, function (a) {
                var b = w(a).toString();
                if (!(b in g))return g[b] = !0, d.call(e, a, f)
            })
        }
    };
    k.ef = function (a, b) {
        if (this.i && this.l) {
            var c = b.viewState;
            return Bk(this.i, a, this.c.i, c.resolution, c.rotation, b.pixelRatio, this.l.opacity, b.skippedFeatureUids)
        }
        return !1
    };
    k.tg = function (a, b, c, d) {
        a = Nh(b.pixelToCoordinateTransform, a.slice());
        if (this.ef(a, b))return c.call(d, this.a, null)
    };
    k.Ri = function () {
        Wt(this)
    };
    k.vg = function (a, b, c) {
        function d(a) {
            var b = a.bb();
            if (b)var c = b.call(a, m); else(b = e.bb()) && (c = b(a, m));
            if (c) {
                if (c) {
                    b = !1;
                    if (Array.isArray(c))for (var d = c.length - 1; 0 <= d; --d)b = iu(q, a, c[d], hu(m, n), this.Ri, this) || b; else b = iu(q, a, c, hu(m, n), this.Ri, this) || b;
                    a = b
                } else a = !1;
                this.o = this.o || a
            }
        }

        var e = this.a;
        b = e.ia();
        Zt(a.attributions, b.j);
        $t(a, b);
        var f = a.viewHints[0], g = a.viewHints[1], h = e.S, l = e.U;
        if (!this.o && !h && f || !l && g)return !0;
        g = a.extent;
        h = a.viewState;
        f = h.projection;
        var m = h.resolution, n = a.pixelRatio;
        h = e.f;
        var p = e.c;
        l = e.get(mu);
        void 0 === l && (l = gu);
        g = Oa(g, p * m);
        if (!this.o && this.I == m && this.S == h && this.C == l && Ta(this.D, g))return !0;
        this.i && a.postRenderFunctions.push(wk(this.i, c));
        this.o = !1;
        var q = new vk(.5 * m / n, g, e.c);
        b.de(g, m, f);
        if (l) {
            var t = [];
            b.ac(g, function (a) {
                t.push(a)
            }, this);
            t.sort(l);
            t.forEach(d, this)
        } else b.ac(g, d, this);
        xk(q, c);
        this.I = m;
        this.S = h;
        this.C = l;
        this.D = g;
        this.i = q;
        return !0
    };
    function S(a) {
        a = a ? a : {};
        var b = rb({}, a);
        delete b.style;
        delete b.renderBuffer;
        delete b.updateWhileAnimating;
        delete b.updateWhileInteracting;
        Dh.call(this, b);
        this.c = void 0 !== a.renderBuffer ? a.renderBuffer : 100;
        this.v = null;
        this.C = void 0;
        this.i(a.style);
        this.S = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating : !1;
        this.U = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting : !1
    }

    v(S, Dh);
    S.prototype.Ld = function (a) {
        var b = null, c = a.T();
        "canvas" === c ? b = new lu(this) : "webgl" === c && (b = new vu(a, this));
        return b
    };
    S.prototype.u = function () {
        return this.v
    };
    S.prototype.bb = function () {
        return this.C
    };
    S.prototype.i = function (a) {
        this.v = void 0 !== a ? a : zl;
        this.C = null === a ? void 0 : xl(this.v);
        this.s()
    };
    var mu = "renderOrder";

    function wu() {
        return [[-Infinity, -Infinity, Infinity, Infinity]]
    };
    function xu(a) {
        Vc.call(this);
        this.c = Wb(a.projection);
        this.j = yu(a.attributions);
        this.D = a.logo;
        this.ta = void 0 !== a.state ? a.state : "ready";
        this.u = void 0 !== a.wrapX ? a.wrapX : !1
    }

    v(xu, Vc);
    function yu(a) {
        if ("string" === typeof a)return [new Cc({html: a})];
        if (a instanceof Cc)return [a];
        if (Array.isArray(a)) {
            for (var b = a.length, c = Array(b), d = 0; d < b; d++) {
                var e = a[d];
                c[d] = "string" === typeof e ? new Cc({html: e}) : e
            }
            return c
        }
        return null
    }

    k = xu.prototype;
    k.Ha = ra;
    k.Aa = function () {
        return this.j
    };
    k.ya = function () {
        return this.D
    };
    k.Ba = function () {
        return this.c
    };
    k.getState = function () {
        return this.ta
    };
    k.ra = function () {
        this.s()
    };
    k.wa = function (a) {
        this.j = yu(a);
        this.s()
    };
    function zu(a, b) {
        a.ta = b;
        a.s()
    };
    function V(a) {
        a = a || {};
        xu.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: void 0,
            state: "ready",
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.C = ra;
        this.B = a.format;
        this.U = void 0 == a.overlaps ? !0 : a.overlaps;
        this.I = a.url;
        a.loader ? this.C = a.loader : void 0 !== this.I && (va(this.B, 7), this.C = Xl(this.I, this.B));
        this.ga = a.strategy ? a.strategy : wu;
        var b = void 0 !== a.useSpatialIndex ? a.useSpatialIndex : !0;
        this.a = b ? new Oj : null;
        this.S = new Oj;
        this.g = {};
        this.l = {};
        this.o = {};
        this.v = {};
        this.i = null;
        if (a.features instanceof
            $c) {
            var c = a.features;
            var d = c.a
        } else Array.isArray(a.features) && (d = a.features);
        b || c || (c = new $c(d));
        d && Au(this, d);
        c && Bu(this, c)
    }

    v(V, xu);
    k = V.prototype;
    k.Bb = function (a) {
        var b = w(a).toString();
        if (Cu(this, b, a)) {
            Du(this, b, a);
            var c = a.W();
            c ? (b = c.G(), this.a && this.a.Ga(b, a)) : this.g[b] = a;
            this.b(new Eu("addfeature", a))
        }
        this.s()
    };
    function Du(a, b, c) {
        a.v[b] = [y(c, "change", a.Yi, a), y(c, "propertychange", a.Yi, a)]
    }

    function Cu(a, b, c) {
        var d = !0, e = c.a;
        void 0 !== e ? e.toString() in a.l ? d = !1 : a.l[e.toString()] = c : (va(!(b in a.o), 30), a.o[b] = c);
        return d
    }

    k.Ec = function (a) {
        Au(this, a);
        this.s()
    };
    function Au(a, b) {
        var c, d = [], e = [], f = [];
        var g = 0;
        for (c = b.length; g < c; g++) {
            var h = b[g];
            var l = w(h).toString();
            Cu(a, l, h) && e.push(h)
        }
        g = 0;
        for (c = e.length; g < c; g++)h = e[g], l = w(h).toString(), Du(a, l, h), (b = h.W()) ? (l = b.G(), d.push(l), f.push(h)) : a.g[l] = h;
        a.a && a.a.load(d, f);
        g = 0;
        for (c = e.length; g < c; g++)a.b(new Eu("addfeature", e[g]))
    }

    function Bu(a, b) {
        var c = !1;
        y(a, "addfeature", function (a) {
            c || (c = !0, b.push(a.feature), c = !1)
        });
        y(a, "removefeature", function (a) {
            c || (c = !0, b.remove(a.feature), c = !1)
        });
        y(b, "add", function (a) {
            c || (c = !0, this.Bb(a.element), c = !1)
        }, a);
        y(b, "remove", function (a) {
            c || (c = !0, this.Fb(a.element), c = !1)
        }, a);
        a.i = b
    }

    k.clear = function (a) {
        if (a) {
            for (var b in this.v)this.v[b].forEach(Gc);
            this.i || (this.v = {}, this.l = {}, this.o = {})
        } else if (this.a) {
            this.a.forEach(this.Qg, this);
            for (var c in this.g)this.Qg(this.g[c])
        }
        this.i && this.i.clear();
        this.a && this.a.clear();
        this.S.clear();
        this.g = {};
        this.b(new Eu("clear"));
        this.s()
    };
    k.Ah = function (a, b) {
        if (this.a)return this.a.forEach(a, b);
        if (this.i)return this.i.forEach(a, b)
    };
    function Fu(a, b, c) {
        a.ac([b[0], b[1], b[0], b[1]], function (a) {
            if (a.W().wb(b))return c.call(void 0, a)
        })
    }

    k.ac = function (a, b, c) {
        if (this.a)return Tj(this.a, a, b, c);
        if (this.i)return this.i.forEach(b, c)
    };
    k.Bh = function (a, b, c) {
        return this.ac(a, function (d) {
            if (d.W().Ya(a) && (d = b.call(c, d)))return d
        })
    };
    k.Ih = function () {
        return this.i
    };
    k.fe = function () {
        if (this.i)var a = this.i.a; else this.a && (a = Qj(this.a), ub(this.g) || ka(a, tb(this.g)));
        return a
    };
    k.Hh = function (a) {
        var b = [];
        Fu(this, a, function (a) {
            b.push(a)
        });
        return b
    };
    k.ag = function (a) {
        return Rj(this.a, a)
    };
    k.Dh = function (a, b) {
        var c = a[0], d = a[1], e = null, f = [NaN, NaN], g = Infinity, h = [-Infinity, -Infinity, Infinity, Infinity],
            l = b ? b : pf;
        Tj(this.a, h, function (a) {
            if (l(a)) {
                var b = a.W(), m = g;
                g = b.Jb(c, d, f, g);
                g < m && (e = a, a = Math.sqrt(g), h[0] = c - a, h[1] = d - a, h[2] = c + a, h[3] = d + a)
            }
        });
        return e
    };
    k.G = function (a) {
        return this.a.G(a)
    };
    k.Gh = function (a) {
        a = this.l[a.toString()];
        return void 0 !== a ? a : null
    };
    k.Wi = function () {
        return this.B
    };
    k.Xi = function () {
        return this.I
    };
    k.Yi = function (a) {
        a = a.target;
        var b = w(a).toString(), c = a.W();
        c ? (c = c.G(), b in this.g ? (delete this.g[b], this.a && this.a.Ga(c, a)) : this.a && Pj(this.a, c, a)) : b in this.g || (this.a && this.a.remove(a), this.g[b] = a);
        c = a.a;
        void 0 !== c ? (c = c.toString(), b in this.o ? (delete this.o[b], this.l[c] = a) : this.l[c] !== a && (Gu(this, a), this.l[c] = a)) : b in this.o || (Gu(this, a), this.o[b] = a);
        this.s();
        this.b(new Eu("changefeature", a))
    };
    k.de = function (a, b, c) {
        var d = this.S;
        a = this.ga(a, b);
        var e;
        var f = 0;
        for (e = a.length; f < e; ++f) {
            var g = a[f];
            Tj(d, g, function (a) {
                return Ta(a.extent, g)
            }) || (this.C.call(this, g, b, c), d.Ga(g, {extent: g.slice()}))
        }
    };
    k.Fb = function (a) {
        var b = w(a).toString();
        b in this.g ? delete this.g[b] : this.a && this.a.remove(a);
        this.Qg(a);
        this.s()
    };
    k.Qg = function (a) {
        var b = w(a).toString();
        this.v[b].forEach(Gc);
        delete this.v[b];
        var c = a.a;
        void 0 !== c ? delete this.l[c.toString()] : delete this.o[b];
        this.b(new Eu("removefeature", a))
    };
    function Gu(a, b) {
        for (var c in a.l)if (a.l[c] === b) {
            delete a.l[c];
            break
        }
    }

    function Eu(a, b) {
        Qc.call(this, a);
        this.feature = b
    }

    v(Eu, Qc);
    function Hu(a) {
        Jg.call(this, {handleDownEvent: Iu, handleEvent: Ju, handleUpEvent: Ku});
        this.U = !1;
        this.ga = null;
        this.u = !1;
        this.Zb = a.source ? a.source : null;
        this.Za = a.features ? a.features : null;
        this.Hk = a.snapTolerance ? a.snapTolerance : 12;
        this.S = a.type;
        this.g = Lu(this.S);
        this.Sa = a.minPoints ? a.minPoints : this.g === Mu ? 3 : 2;
        this.va = a.maxPoints ? a.maxPoints : Infinity;
        this.Jd = a.finishCondition ? a.finishCondition : pf;
        var b = a.geometryFunction;
        if (!b)if ("Circle" === this.S) b = function (a, b) {
            b = b ? b : new Ss([NaN, NaN]);
            b.Vg(a[0], Math.sqrt(kf(a[0],
                a[1])));
            return b
        }; else {
            var c, d = this.g;
            d === Nu ? c = C : d === Ou ? c = M : d === Mu && (c = D);
            b = function (a, b) {
                b ? d === Mu ? b.na([a[0].concat([a[0][0]])]) : b.na(a) : b = new c(a);
                return b
            }
        }
        this.$a = b;
        this.I = this.B = this.a = this.C = this.j = this.o = null;
        this.ed = a.clickTolerance ? a.clickTolerance * a.clickTolerance : 36;
        this.oa = new S({
            source: new V({useSpatialIndex: !1, wrapX: a.wrapX ? a.wrapX : !1}),
            style: a.style ? a.style : Pu()
        });
        this.Ib = a.geometryName;
        this.Gk = a.condition ? a.condition : Dg;
        this.Lf = a.freehand ? pf : a.freehandCondition ? a.freehandCondition :
            Eg;
        y(this, Xc("active"), this.Bi, this)
    }

    v(Hu, Jg);
    function Pu() {
        var a = Al();
        return function (b) {
            return a[b.W().T()]
        }
    }

    k = Hu.prototype;
    k.setMap = function (a) {
        Jg.prototype.setMap.call(this, a);
        this.Bi()
    };
    function Ju(a) {
        this.u = this.g !== Nu && this.Lf(a);
        var b = !this.u;
        this.u && "pointerdrag" === a.type && null !== this.j ? (Qu(this, a), b = !1) : "pointermove" === a.type ? b = Ru(this, a) : "dblclick" === a.type && (b = !1);
        return Kg.call(this, a) && b
    }

    function Iu(a) {
        this.U = !this.u;
        return this.u ? (this.ga = a.pixel, this.o || Su(this, a), !0) : this.Gk(a) ? (this.ga = a.pixel, !0) : !1
    }

    function Ku(a) {
        var b = !0;
        Ru(this, a);
        var c = this.g === Tu;
        this.U ? (this.o ? this.u || c ? this.Vd() : Uu(this, a) ? this.Jd(a) && this.Vd() : Qu(this, a) : (Su(this, a), this.g === Nu && this.Vd()), b = !1) : this.u && (this.o = null, Vu(this));
        return b
    }

    function Ru(a, b) {
        if (a.ga && (!a.u && a.U || a.u && !a.U)) {
            var c = a.ga, d = b.pixel, e = c[0] - d[0];
            c = c[1] - d[1];
            e = e * e + c * c;
            a.U = a.u ? e > a.ed : e <= a.ed
        }
        a.o ? (e = b.coordinate, c = a.j.W(), a.g === Nu ? d = a.a : a.g === Mu ? (d = a.a[0], d = d[d.length - 1], Uu(a, b) && (e = a.o.slice())) : (d = a.a, d = d[d.length - 1]), d[0] = e[0], d[1] = e[1], a.$a(a.a, c), a.C && a.C.W().na(e), c instanceof D && a.g !== Mu ? (a.B || (a.B = new Bl(new M(null))), e = c.Kh(0), b = a.B.W(), b.aa(e.ja, e.ba())) : a.I && (b = a.B.W(), b.na(a.I)), Wu(a)) : (b = b.coordinate.slice(), a.C ? a.C.W().na(b) : (a.C = new Bl(new C(b)),
            Wu(a)));
        return !0
    }

    function Uu(a, b) {
        var c = !1;
        if (a.j) {
            var d = !1, e = [a.o];
            a.g === Ou ? d = a.a.length > a.Sa : a.g === Mu && (d = a.a[0].length > a.Sa, e = [a.a[0][0], a.a[0][a.a[0].length - 2]]);
            if (d) {
                d = b.map;
                for (var f = 0, g = e.length; f < g; f++) {
                    var h = e[f], l = d.Ka(h), m = b.pixel;
                    c = m[0] - l[0];
                    l = m[1] - l[1];
                    if (c = Math.sqrt(c * c + l * l) <= (a.u ? 1 : a.Hk)) {
                        a.o = h;
                        break
                    }
                }
            }
        }
        return c
    }

    function Su(a, b) {
        b = b.coordinate;
        a.o = b;
        a.g === Nu ? a.a = b.slice() : a.g === Mu ? (a.a = [[b.slice(), b.slice()]], a.I = a.a[0]) : (a.a = [b.slice(), b.slice()], a.g === Tu && (a.I = a.a));
        a.I && (a.B = new Bl(new M(a.I)));
        b = a.$a(a.a);
        a.j = new Bl;
        a.Ib && a.j.Wc(a.Ib);
        a.j.Ra(b);
        Wu(a);
        a.b(new Xu("drawstart", a.j))
    }

    function Qu(a, b) {
        b = b.coordinate;
        var c = a.j.W(), d;
        if (a.g === Ou) {
            a.o = b.slice();
            var e = a.a;
            e.length >= a.va && (a.u ? e.pop() : d = !0);
            e.push(b.slice());
            a.$a(e, c)
        } else a.g === Mu && (e = a.a[0], e.length >= a.va && (a.u ? e.pop() : d = !0), e.push(b.slice()), d && (a.o = e[0]), a.$a(a.a, c));
        Wu(a);
        d && a.Vd()
    }

    k.aq = function () {
        if (this.j) {
            var a = this.j.W();
            if (this.g === Ou) {
                var b = this.a;
                b.splice(-2, 1);
                this.$a(b, a);
                2 <= b.length && (this.o = b[b.length - 2].slice())
            } else if (this.g === Mu) {
                b = this.a[0];
                b.splice(-2, 1);
                var c = this.B.W();
                c.na(b);
                this.$a(this.a, a)
            }
            0 === b.length && (this.o = null);
            Wu(this)
        }
    };
    k.Vd = function () {
        var a = Vu(this), b = this.a, c = a.W();
        this.g === Ou ? (b.pop(), this.$a(b, c)) : this.g === Mu && (b[0].pop(), this.$a(b, c), b = c.V());
        "MultiPoint" === this.S ? a.Ra(new O([b])) : "MultiLineString" === this.S ? a.Ra(new N([b])) : "MultiPolygon" === this.S && a.Ra(new P([b]));
        this.b(new Xu("drawend", a));
        this.Za && this.Za.push(a);
        this.Zb && this.Zb.Bb(a)
    };
    function Vu(a) {
        a.o = null;
        var b = a.j;
        b && (a.j = null, a.C = null, a.B = null, a.oa.ia().clear(!0));
        return b
    }

    k.Jn = function (a) {
        var b = a.W();
        this.j = a;
        this.a = b.V();
        a = this.a[this.a.length - 1];
        this.o = a.slice();
        this.a.push(a.slice());
        Wu(this);
        this.b(new Xu("drawstart", this.j))
    };
    k.$c = qf;
    function Wu(a) {
        var b = [];
        a.j && b.push(a.j);
        a.B && b.push(a.B);
        a.C && b.push(a.C);
        a = a.oa.ia();
        a.clear(!0);
        a.Ec(b)
    }

    k.Bi = function () {
        var a = this.v, b = this.c();
        a && b || Vu(this);
        this.oa.setMap(b ? a : null)
    };
    function Lu(a) {
        var b;
        "Point" === a || "MultiPoint" === a ? b = Nu : "LineString" === a || "MultiLineString" === a ? b = Ou : "Polygon" === a || "MultiPolygon" === a ? b = Mu : "Circle" === a && (b = Tu);
        return b
    }

    var Nu = "Point", Ou = "LineString", Mu = "Polygon", Tu = "Circle";

    function Xu(a, b) {
        Qc.call(this, a);
        this.feature = b
    }

    v(Xu, Qc);
    function Yu(a) {
        this.a = this.j = null;
        this.B = !1;
        this.C = this.o = null;
        a || (a = {});
        Jg.call(this, {handleDownEvent: Zu, handleDragEvent: $u, handleEvent: av, handleUpEvent: bv});
        this.u = new S({
            source: new V({useSpatialIndex: !1, wrapX: !!a.wrapX}),
            style: a.boxStyle ? a.boxStyle : cv(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.I = new S({
            source: new V({useSpatialIndex: !1, wrapX: !!a.wrapX}),
            style: a.pointerStyle ? a.pointerStyle : dv(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        a.extent && this.g(a.extent)
    }

    v(Yu, Jg);
    function av(a) {
        if (!(a instanceof ie))return !0;
        if ("pointermove" == a.type && !this.D) {
            var b = a.pixel, c = a.map, d = ev(this, b, c);
            d || (d = c.Xa(b));
            fv(this, d)
        }
        Kg.call(this, a);
        return !1
    }

    function Zu(a) {
        function b(a) {
            var b = null, c = null;
            a[0] == e[0] ? b = e[2] : a[0] == e[2] && (b = e[0]);
            a[1] == e[1] ? c = e[3] : a[1] == e[3] && (c = e[1]);
            return null !== b && null !== c ? [b, c] : null
        }

        var c = a.pixel, d = a.map, e = this.G();
        (a = ev(this, c, d)) && e ? (c = a[0] == e[0] || a[0] == e[2] ? a[0] : null, d = a[1] == e[1] || a[1] == e[3] ? a[1] : null, null !== c && null !== d ? this.a = gv(b(a)) : null !== c ? this.a = hv(b([c, e[1]]), b([c, e[3]])) : null !== d && (this.a = hv(b([e[0], d]), b([e[2], d])))) : (a = d.Xa(c), this.g([a[0], a[1], a[0], a[1]]), this.a = gv(a));
        return !0
    }

    function $u(a) {
        this.a && (a = a.coordinate, this.g(this.a(a)), fv(this, a));
        return !0
    }

    function bv() {
        this.a = null;
        var a = this.G();
        a && hb(a) || this.g(null);
        return !1
    }

    function cv() {
        var a = Al();
        return function () {
            return a.Polygon
        }
    }

    function dv() {
        var a = Al();
        return function () {
            return a.Point
        }
    }

    function gv(a) {
        return function (b) {
            return La([a, b])
        }
    }

    function hv(a, b) {
        return a[0] == b[0] ? function (c) {
            return La([a, [c[0], b[1]]])
        } : a[1] == b[1] ? function (c) {
            return La([a, [b[0], c[1]]])
        } : null
    }

    function ev(a, b, c) {
        function d(a, b) {
            return mf(e, a) - mf(e, b)
        }

        var e = c.Xa(b), f = a.G();
        if (f) {
            f = [[[f[0], f[1]], [f[0], f[3]]], [[f[0], f[3]], [f[2], f[3]]], [[f[2], f[3]], [f[2], f[1]]], [[f[2], f[1]], [f[0], f[1]]]];
            f.sort(d);
            f = f[0];
            var g = df(e, f), h = c.Ka(g);
            if (10 >= lf(b, h))return b = c.Ka(f[0]), c = c.Ka(f[1]), b = kf(h, b), c = kf(h, c), a.B = 10 >= Math.sqrt(Math.min(b, c)), a.B && (g = b > c ? f[1] : f[0]), g
        }
        return null
    }

    function fv(a, b) {
        var c = a.C;
        c ? c.W().na(b) : (c = new Bl(new C(b)), a.C = c, a.I.ia().Bb(c))
    }

    Yu.prototype.setMap = function (a) {
        this.u.setMap(a);
        this.I.setMap(a);
        Jg.prototype.setMap.call(this, a)
    };
    Yu.prototype.G = function () {
        return this.j
    };
    Yu.prototype.g = function (a) {
        this.j = a ? a : null;
        var b = this.o;
        b ? a ? b.Ra(cg(a)) : b.Ra(void 0) : (this.o = b = a ? new Bl(cg(a)) : new Bl({}), this.u.ia().Bb(b));
        this.b(new iv(this.j))
    };
    function iv(a) {
        Qc.call(this, "extentchanged");
        this.extent = a
    }

    v(iv, Qc);
    function jv(a) {
        Jg.call(this, {handleDownEvent: kv, handleDragEvent: lv, handleEvent: mv, handleUpEvent: nv});
        this.Jd = a.condition ? a.condition : Hg;
        this.Ib = function (a) {
            return yg(a) && Cg(a)
        };
        this.Zb = a.deleteCondition ? a.deleteCondition : this.Ib;
        this.ed = a.insertVertexCondition ? a.insertVertexCondition : pf;
        this.Za = this.g = null;
        this.Sa = [0, 0];
        this.B = this.I = !1;
        this.a = new Oj;
        this.oa = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.o = this.va = !1;
        this.j = [];
        this.C = new S({
            source: new V({useSpatialIndex: !1, wrapX: !!a.wrapX}), style: a.style ?
                a.style : ov(), updateWhileAnimating: !0, updateWhileInteracting: !0
        });
        this.ga = {
            Point: this.Rn,
            LineString: this.Di,
            LinearRing: this.Di,
            Polygon: this.Sn,
            MultiPoint: this.Pn,
            MultiLineString: this.On,
            MultiPolygon: this.Qn,
            Circle: this.Mn,
            GeometryCollection: this.Nn
        };
        this.U = null;
        a.source ? (this.U = a.source, a = new $c(this.U.fe()), y(this.U, "addfeature", this.fm, this), y(this.U, "removefeature", this.hm, this)) : a = a.features;
        if (!a)throw Error("The modify interaction requires features or a source");
        this.u = a;
        this.u.forEach(this.sg,
            this);
        y(this.u, "add", this.Kn, this);
        y(this.u, "remove", this.Ln, this);
        this.S = null
    }

    v(jv, Jg);
    k = jv.prototype;
    k.sg = function (a) {
        var b = a.W();
        b && b.T() in this.ga && this.ga[b.T()].call(this, a, b);
        (b = this.v) && b.c && this.c() && pv(this, this.Sa, b);
        y(a, "change", this.Ci, this)
    };
    function qv(a, b) {
        a.B || (a.B = !0, a.b(new rv("modifystart", a.u, b)))
    }

    function sv(a, b) {
        tv(a, b);
        a.g && !a.u.ec() && (a.C.ia().Fb(a.g), a.g = null);
        Mc(b, "change", a.Ci, a)
    }

    function tv(a, b) {
        a = a.a;
        var c = [];
        a.forEach(function (a) {
            b === a.feature && c.push(a)
        });
        for (var d = c.length - 1; 0 <= d; --d)a.remove(c[d])
    }

    k.Ia = function (a) {
        this.g && !a && (this.C.ia().Fb(this.g), this.g = null);
        Jg.prototype.Ia.call(this, a)
    };
    k.setMap = function (a) {
        this.C.setMap(a);
        Jg.prototype.setMap.call(this, a)
    };
    k.fm = function (a) {
        a.feature && this.u.push(a.feature)
    };
    k.hm = function (a) {
        a.feature && this.u.remove(a.feature)
    };
    k.Kn = function (a) {
        this.sg(a.element)
    };
    k.Ci = function (a) {
        this.o || (a = a.target, sv(this, a), this.sg(a))
    };
    k.Ln = function (a) {
        sv(this, a.element)
    };
    k.Rn = function (a, b) {
        var c = b.V();
        a = {feature: a, geometry: b, la: [c, c]};
        this.a.Ga(b.G(), a)
    };
    k.Pn = function (a, b) {
        var c = b.V(), d;
        var e = 0;
        for (d = c.length; e < d; ++e) {
            var f = c[e];
            f = {feature: a, geometry: b, depth: [e], index: e, la: [f, f]};
            this.a.Ga(b.G(), f)
        }
    };
    k.Di = function (a, b) {
        var c = b.V(), d;
        var e = 0;
        for (d = c.length - 1; e < d; ++e) {
            var f = c.slice(e, e + 2);
            var g = {feature: a, geometry: b, index: e, la: f};
            this.a.Ga(La(f), g)
        }
    };
    k.On = function (a, b) {
        var c = b.V(), d, e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f];
            var h = 0;
            for (d = g.length - 1; h < d; ++h) {
                var l = g.slice(h, h + 2);
                var m = {feature: a, geometry: b, depth: [f], index: h, la: l};
                this.a.Ga(La(l), m)
            }
        }
    };
    k.Sn = function (a, b) {
        var c = b.V(), d, e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f];
            var h = 0;
            for (d = g.length - 1; h < d; ++h) {
                var l = g.slice(h, h + 2);
                var m = {feature: a, geometry: b, depth: [f], index: h, la: l};
                this.a.Ga(La(l), m)
            }
        }
    };
    k.Qn = function (a, b) {
        var c = b.V(), d, e, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            var l = 0;
            for (e = h.length; l < e; ++l) {
                var m = h[l];
                var n = 0;
                for (d = m.length - 1; n < d; ++n) {
                    var p = m.slice(n, n + 2);
                    var q = {feature: a, geometry: b, depth: [l, g], index: n, la: p};
                    this.a.Ga(La(p), q)
                }
            }
        }
    };
    k.Mn = function (a, b) {
        var c = b.xa(), d = {feature: a, geometry: b, index: 0, la: [c, c]};
        a = {feature: a, geometry: b, index: 1, la: [c, c]};
        d.Wf = a.Wf = [d, a];
        this.a.Ga(Xa(c), d);
        this.a.Ga(b.G(), a)
    };
    k.Nn = function (a, b) {
        var c = b.a;
        for (b = 0; b < c.length; ++b)this.ga[c[b].T()].call(this, a, c[b])
    };
    function uv(a, b) {
        var c = a.g;
        c ? c.W().na(b) : (c = new Bl(new C(b)), a.g = c, a.C.ia().Bb(c))
    }

    function vv(a, b) {
        return a.index - b.index
    }

    function kv(a) {
        if (!this.Jd(a))return !1;
        pv(this, a.pixel, a.map);
        var b = a.map.Xa(a.pixel);
        this.j.length = 0;
        this.B = !1;
        var c = this.g;
        if (c) {
            var d = [];
            c = c.W().V();
            var e = La([c]);
            e = Rj(this.a, e);
            var f = {};
            e.sort(vv);
            for (var g = 0, h = e.length; g < h; ++g) {
                var l = e[g], m = l.la, n = w(l.feature), p = l.depth;
                p && (n += "-" + p.join("-"));
                f[n] || (f[n] = Array(2));
                if ("Circle" === l.geometry.T() && 1 === l.index) m = wv(b, l), gf(m, c) && !f[n][0] && (this.j.push([l, 0]), f[n][0] = l); else if (gf(m[0], c) && !f[n][0]) this.j.push([l, 0]), f[n][0] = l; else if (gf(m[1], c) &&
                    !f[n][1]) {
                    if ("LineString" !== l.geometry.T() && "MultiLineString" !== l.geometry.T() || !f[n][0] || 0 !== f[n][0].index) this.j.push([l, 1]), f[n][1] = l
                } else this.ed(a) && w(m) in this.Za && !f[n][0] && !f[n][1] && d.push([l, c])
            }
            d.length && qv(this, a);
            for (a = d.length - 1; 0 <= a; --a)this.pm.apply(this, d[a])
        }
        return !!this.g
    }

    function lv(a) {
        this.I = !1;
        qv(this, a);
        a = a.coordinate;
        for (var b = 0, c = this.j.length; b < c; ++b) {
            var d = this.j[b], e = d[0], f = e.depth, g = e.geometry, h = e.la;
            for (d = d[1]; a.length < g.ma();)a.push(h[d][a.length]);
            switch (g.T()) {
                case "Point":
                    var l = a;
                    h[0] = h[1] = a;
                    break;
                case "MultiPoint":
                    l = g.V();
                    l[e.index] = a;
                    h[0] = h[1] = a;
                    break;
                case "LineString":
                    l = g.V();
                    l[e.index + d] = a;
                    h[d] = a;
                    break;
                case "MultiLineString":
                    l = g.V();
                    l[f[0]][e.index + d] = a;
                    h[d] = a;
                    break;
                case "Polygon":
                    l = g.V();
                    l[f[0]][e.index + d] = a;
                    h[d] = a;
                    break;
                case "MultiPolygon":
                    l = g.V();
                    l[f[1]][f[0]][e.index + d] = a;
                    h[d] = a;
                    break;
                case "Circle":
                    h[0] = h[1] = a, 0 === e.index ? (this.o = !0, g.rb(a)) : (this.o = !0, g.Xc(lf(g.xa(), a))), this.o = !1
            }
            l && (e = g, f = l, this.o = !0, e.na(f), this.o = !1)
        }
        uv(this, a)
    }

    function nv(a) {
        for (var b, c, d = this.j.length - 1; 0 <= d; --d)if (b = this.j[d][0], c = b.geometry, "Circle" === c.T()) {
            var e = c.xa(), f = b.Wf[0];
            b = b.Wf[1];
            f.la[0] = f.la[1] = e;
            b.la[0] = b.la[1] = e;
            Pj(this.a, Xa(e), f);
            Pj(this.a, c.G(), b)
        } else Pj(this.a, La(b.la), b);
        this.B && (this.b(new rv("modifyend", this.u, a)), this.B = !1);
        return !1
    }

    function mv(a) {
        if (!(a instanceof ie))return !0;
        this.S = a;
        var b;
        ig(a.map.$())[1] || "pointermove" != a.type || this.D || (this.Sa = a.pixel, pv(this, a.pixel, a.map));
        this.g && this.Zb(a) && (b = "singleclick" == a.type && this.I ? !0 : this.rj());
        "singleclick" == a.type && (this.I = !1);
        return Kg.call(this, a) && !b
    }

    function pv(a, b, c) {
        function d(a, b) {
            return xv(e, a) - xv(e, b)
        }

        var e = c.Xa(b), f = Oa(Xa(e), c.$().Pa() * a.oa);
        f = Rj(a.a, f);
        if (0 < f.length) {
            f.sort(d);
            var g = f[0], h = g.la, l = wv(e, g), m = c.Ka(l), n = lf(b, m);
            if (n <= a.oa) {
                b = {};
                if ("Circle" === g.geometry.T() && 1 === g.index) a.va = !0, uv(a, l); else for (n = c.Ka(h[0]), g = c.Ka(h[1]), c = kf(m, n), m = kf(m, g), n = Math.sqrt(Math.min(c, m)), a.va = n <= a.oa, a.va && (l = c > m ? h[1] : h[0]), uv(a, l), m = 1, c = f.length; m < c; ++m)if (l = f[m].la, gf(h[0], l[0]) && gf(h[1], l[1]) || gf(h[0], l[1]) && gf(h[1], l[0])) b[w(l)] = !0; else break;
                b[w(h)] = !0;
                a.Za = b;
                return
            }
        }
        a.g && (a.C.ia().Fb(a.g), a.g = null)
    }

    function xv(a, b) {
        var c = b.geometry;
        return "Circle" === c.T() && 1 === b.index ? (a = kf(c.xa(), a), c = Math.sqrt(a) - c.vd(), c * c) : mf(a, b.la)
    }

    function wv(a, b) {
        var c = b.geometry;
        return "Circle" === c.T() && 1 === b.index ? c.Db(a) : df(a, b.la)
    }

    k.pm = function (a, b) {
        for (var c = a.la, d = a.feature, e = a.geometry, f = a.depth, g = a.index, h; b.length < e.ma();)b.push(0);
        switch (e.T()) {
            case "MultiLineString":
                h = e.V();
                h[f[0]].splice(g + 1, 0, b);
                break;
            case "Polygon":
                h = e.V();
                h[f[0]].splice(g + 1, 0, b);
                break;
            case "MultiPolygon":
                h = e.V();
                h[f[1]][f[0]].splice(g + 1, 0, b);
                break;
            case "LineString":
                h = e.V();
                h.splice(g + 1, 0, b);
                break;
            default:
                return
        }
        this.o = !0;
        e.na(h);
        this.o = !1;
        h = this.a;
        h.remove(a);
        yv(this, e, g, f, 1);
        a = {la: [c[0], b], feature: d, geometry: e, depth: f, index: g};
        h.Ga(La(a.la), a);
        this.j.push([a, 1]);
        b = {la: [b, c[1]], feature: d, geometry: e, depth: f, index: g + 1};
        h.Ga(La(b.la), b);
        this.j.push([b, 0]);
        this.I = !0
    };
    k.rj = function () {
        if (this.S && "pointerdrag" != this.S.type) {
            var a = this.S;
            qv(this, a);
            var b = this.j, c = {}, d, e;
            for (e = b.length - 1; 0 <= e; --e) {
                var f = b[e];
                var g = f[0];
                var h = w(g.feature);
                g.depth && (h += "-" + g.depth.join("-"));
                h in c || (c[h] = {});
                0 === f[1] ? (c[h].right = g, c[h].index = g.index) : 1 == f[1] && (c[h].left = g, c[h].index = g.index + 1)
            }
            for (h in c) {
                var l = c[h].right;
                var m = c[h].left;
                e = c[h].index;
                var n = e - 1;
                g = void 0 !== m ? m : l;
                0 > n && (n = 0);
                f = g.geometry;
                var p = d = f.V();
                var q = !1;
                switch (f.T()) {
                    case "MultiLineString":
                        2 < d[g.depth[0]].length &&
                        (d[g.depth[0]].splice(e, 1), q = !0);
                        break;
                    case "LineString":
                        2 < d.length && (d.splice(e, 1), q = !0);
                        break;
                    case "MultiPolygon":
                        p = p[g.depth[1]];
                    case "Polygon":
                        p = p[g.depth[0]], 4 < p.length && (e == p.length - 1 && (e = 0), p.splice(e, 1), q = !0, 0 === e && (p.pop(), p.push(p[0]), n = p.length - 1))
                }
                q && (q = f, this.o = !0, q.na(d), this.o = !1, d = [], void 0 !== m && (this.a.remove(m), d.push(m.la[0])), void 0 !== l && (this.a.remove(l), d.push(l.la[1])), void 0 !== m && void 0 !== l && (m = {
                    depth: g.depth,
                    feature: g.feature,
                    geometry: g.geometry,
                    index: n,
                    la: d
                }, this.a.Ga(La(m.la),
                    m)), yv(this, f, e, g.depth, -1), this.g && (this.C.ia().Fb(this.g), this.g = null), b.length = 0)
            }
            this.b(new rv("modifyend", this.u, a));
            this.B = !1;
            return !0
        }
        return !1
    };
    function yv(a, b, c, d, e) {
        Tj(a.a, b.G(), function (a) {
            a.geometry === b && (void 0 === d || void 0 === a.depth || ma(a.depth, d)) && a.index > c && (a.index += e)
        })
    }

    function ov() {
        var a = Al();
        return function () {
            return a.Point
        }
    }

    function rv(a, b, c) {
        Qc.call(this, a);
        this.features = b;
        this.mapBrowserEvent = c
    }

    v(rv, Qc);
    function zv(a) {
        sg.call(this, {handleEvent: Av});
        a = a ? a : {};
        this.B = a.condition ? a.condition : Cg;
        this.D = a.addCondition ? a.addCondition : qf;
        this.C = a.removeCondition ? a.removeCondition : qf;
        this.I = a.toggleCondition ? a.toggleCondition : Eg;
        this.o = a.multi ? a.multi : !1;
        this.l = a.filter ? a.filter : pf;
        this.j = a.hitTolerance ? a.hitTolerance : 0;
        this.g = new S({
            source: new V({useSpatialIndex: !1, features: a.features, wrapX: a.wrapX}),
            style: a.style ? a.style : Bv(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        if (a.layers)if ("function" ===
            typeof a.layers) a = a.layers; else {
            var b = a.layers;
            a = function (a) {
                return ha(b, a)
            }
        } else a = pf;
        this.u = a;
        this.a = {};
        a = this.g.ia().i;
        y(a, "add", this.Tn, this);
        y(a, "remove", this.Xn, this)
    }

    v(zv, sg);
    k = zv.prototype;
    k.Un = function () {
        return this.g.ia().i
    };
    k.Vn = function () {
        return this.j
    };
    k.Wn = function (a) {
        a = w(a);
        return this.a[a]
    };
    function Av(a) {
        if (!this.B(a))return !0;
        var b = this.D(a), c = this.C(a), d = this.I(a), e = !b && !c && !d, f = a.map, g = this.g.ia().i, h = [],
            l = [];
        if (e) {
            sb(this.a);
            f.Wd(a.pixel, function (a, b) {
                if (this.l(a, b))return l.push(a), a = w(a), this.a[a] = b, !this.o
            }.bind(this), {layerFilter: this.u, hitTolerance: this.j});
            for (e = g.ec() - 1; 0 <= e; --e) {
                f = g.item(e);
                var m = l.indexOf(f);
                -1 < m ? l.splice(m, 1) : (g.remove(f), h.push(f))
            }
            l.length && g.ng(l)
        } else {
            f.Wd(a.pixel, function (a, e) {
                if (this.l(a, e))return !b && !d || ha(g.a, a) ? (c || d) && ha(g.a, a) && (h.push(a), e =
                        w(a), delete this.a[e]) : (l.push(a), a = w(a), this.a[a] = e), !this.o
            }.bind(this), {layerFilter: this.u, hitTolerance: this.j});
            for (e = h.length - 1; 0 <= e; --e)g.remove(h[e]);
            g.ng(l)
        }
        (0 < l.length || 0 < h.length) && this.b(new Cv(Dv, l, h, a));
        return Bg(a)
    }

    k.Yn = function (a) {
        this.j = a
    };
    k.setMap = function (a) {
        var b = this.v, c = this.g.ia().i;
        b && c.forEach(b.Mj, b);
        sg.prototype.setMap.call(this, a);
        this.g.setMap(a);
        a && c.forEach(a.Hj, a)
    };
    function Bv() {
        var a = Al();
        ka(a.Polygon, a.LineString);
        ka(a.GeometryCollection, a.LineString);
        return function (b) {
            return b.W() ? a[b.W().T()] : null
        }
    }

    k.Tn = function (a) {
        var b = this.v;
        b && b.Hj(a.element)
    };
    k.Xn = function (a) {
        var b = this.v;
        b && b.Mj(a.element)
    };
    function Cv(a, b, c, d) {
        Qc.call(this, a);
        this.selected = b;
        this.deselected = c;
        this.mapBrowserEvent = d
    }

    v(Cv, Qc);
    var Dv = "select";

    function Ev(a) {
        Jg.call(this, {handleEvent: Fv, handleDownEvent: pf, handleUpEvent: Gv});
        a = a ? a : {};
        this.o = a.source ? a.source : null;
        this.S = void 0 !== a.vertex ? a.vertex : !0;
        this.B = void 0 !== a.edge ? a.edge : !0;
        this.j = a.features ? a.features : null;
        this.oa = [];
        this.C = {};
        this.U = {};
        this.u = {};
        this.I = null;
        this.g = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.va = Hv.bind(this);
        this.a = new Oj;
        this.ga = {
            Point: this.fo,
            LineString: this.Gi,
            LinearRing: this.Gi,
            Polygon: this.ho,
            MultiPoint: this.co,
            MultiLineString: this.bo,
            MultiPolygon: this.eo,
            GeometryCollection: this.ao,
            Circle: this.$n
        }
    }

    v(Ev, Jg);
    k = Ev.prototype;
    k.Bb = function (a, b) {
        b = void 0 !== b ? b : !0;
        var c = w(a), d = a.W();
        if (d) {
            var e = this.ga[d.T()];
            e && (this.U[c] = d.G(Ma()), e.call(this, a, d))
        }
        b && (this.C[c] = y(a, "change", this.Zn, this))
    };
    k.Lk = function (a) {
        this.Bb(a)
    };
    k.Mk = function (a) {
        this.Fb(a)
    };
    k.Ei = function (a) {
        if (a instanceof Eu)var b = a.feature; else a instanceof dd && (b = a.element);
        this.Bb(b)
    };
    k.Fi = function (a) {
        if (a instanceof Eu)var b = a.feature; else a instanceof dd && (b = a.element);
        this.Fb(b)
    };
    k.Zn = function (a) {
        a = a.target;
        if (this.D) {
            var b = w(a);
            b in this.u || (this.u[b] = a)
        } else this.Nj(a)
    };
    k.Fb = function (a, b) {
        b = void 0 !== b ? b : !0;
        var c = w(a), d = this.U[c];
        if (d) {
            var e = this.a, f = [];
            Tj(e, d, function (b) {
                a === b.feature && f.push(b)
            });
            for (d = f.length - 1; 0 <= d; --d)e.remove(f[d])
        }
        b && (Gc(this.C[c]), delete this.C[c])
    };
    k.setMap = function (a) {
        var b = this.v, c = this.oa, d;
        this.j ? d = this.j : this.o && (d = this.o.fe());
        b && (c.forEach(Gc), c.length = 0, d.forEach(this.Mk, this));
        Jg.prototype.setMap.call(this, a);
        a && (this.j ? c.push(y(this.j, "add", this.Ei, this), y(this.j, "remove", this.Fi, this)) : this.o && c.push(y(this.o, "addfeature", this.Ei, this), y(this.o, "removefeature", this.Fi, this)), d.forEach(this.Lk, this))
    };
    k.$c = qf;
    function Iv(a, b, c, d) {
        var e = d.Xa([b[0] - a.g, b[1] + a.g]), f = d.Xa([b[0] + a.g, b[1] - a.g]);
        e = La([e, f]);
        var g = Rj(a.a, e);
        a.S && !a.B && (g = g.filter(function (a) {
            return "Circle" !== a.feature.W().T()
        }));
        var h = !1;
        e = !1;
        var l = f = null;
        if (0 < g.length) {
            a.I = c;
            g.sort(a.va);
            var m = g[0].la;
            h = "Circle" === g[0].feature.W().T();
            if (a.S && !a.B) {
                if (c = d.Ka(m[0]), h = d.Ka(m[1]), c = kf(b, c), b = kf(b, h), h = Math.sqrt(Math.min(c, b)), h = h <= a.g) e = !0, f = c > b ? m[1] : m[0], l = d.Ka(f)
            } else a.B && (f = h ? cf(c, g[0].feature.W()) : df(c, m), l = d.Ka(f), lf(b, l) <= a.g && (e = !0, a.S &&
            !h && (c = d.Ka(m[0]), h = d.Ka(m[1]), c = kf(l, c), b = kf(l, h), h = Math.sqrt(Math.min(c, b)), h = h <= a.g))) && (f = c > b ? m[1] : m[0], l = d.Ka(f));
            e && (l = [Math.round(l[0]), Math.round(l[1])])
        }
        return {Bq: e, vertex: f, Kq: l}
    }

    k.Nj = function (a) {
        this.Fb(a, !1);
        this.Bb(a, !1)
    };
    k.$n = function (a, b) {
        b = dg(b).V()[0];
        var c;
        var d = 0;
        for (c = b.length - 1; d < c; ++d) {
            var e = b.slice(d, d + 2);
            var f = {feature: a, la: e};
            this.a.Ga(La(e), f)
        }
    };
    k.ao = function (a, b) {
        var c = b.a;
        for (b = 0; b < c.length; ++b) {
            var d = this.ga[c[b].T()];
            d && d.call(this, a, c[b])
        }
    };
    k.Gi = function (a, b) {
        b = b.V();
        var c;
        var d = 0;
        for (c = b.length - 1; d < c; ++d) {
            var e = b.slice(d, d + 2);
            var f = {feature: a, la: e};
            this.a.Ga(La(e), f)
        }
    };
    k.bo = function (a, b) {
        b = b.V();
        var c, d;
        var e = 0;
        for (d = b.length; e < d; ++e) {
            var f = b[e];
            var g = 0;
            for (c = f.length - 1; g < c; ++g) {
                var h = f.slice(g, g + 2);
                var l = {feature: a, la: h};
                this.a.Ga(La(h), l)
            }
        }
    };
    k.co = function (a, b) {
        var c = b.V(), d;
        var e = 0;
        for (d = c.length; e < d; ++e) {
            var f = c[e];
            f = {feature: a, la: [f, f]};
            this.a.Ga(b.G(), f)
        }
    };
    k.eo = function (a, b) {
        b = b.V();
        var c, d, e;
        var f = 0;
        for (e = b.length; f < e; ++f) {
            var g = b[f];
            var h = 0;
            for (d = g.length; h < d; ++h) {
                var l = g[h];
                var m = 0;
                for (c = l.length - 1; m < c; ++m) {
                    var n = l.slice(m, m + 2);
                    var p = {feature: a, la: n};
                    this.a.Ga(La(n), p)
                }
            }
        }
    };
    k.fo = function (a, b) {
        var c = b.V();
        a = {feature: a, la: [c, c]};
        this.a.Ga(b.G(), a)
    };
    k.ho = function (a, b) {
        b = b.V();
        var c, d;
        var e = 0;
        for (d = b.length; e < d; ++e) {
            var f = b[e];
            var g = 0;
            for (c = f.length - 1; g < c; ++g) {
                var h = f.slice(g, g + 2);
                var l = {feature: a, la: h};
                this.a.Ga(La(h), l)
            }
        }
    };
    function Fv(a) {
        var b = Iv(this, a.pixel, a.coordinate, a.map);
        b.Bq && (a.coordinate = b.vertex.slice(0, 2), a.pixel = b.Kq);
        return Kg.call(this, a)
    }

    function Gv() {
        var a = tb(this.u);
        a.length && (a.forEach(this.Nj, this), this.u = {});
        return !1
    }

    function Hv(a, b) {
        return mf(this.I, a.la) - mf(this.I, b.la)
    };
    function Jv(a) {
        Jg.call(this, {handleDownEvent: Kv, handleDragEvent: Lv, handleMoveEvent: Mv, handleUpEvent: Nv});
        a = a ? a : {};
        this.a = null;
        this.j = void 0 !== a.features ? a.features : null;
        if (a.layers)if ("function" === typeof a.layers)var b = a.layers; else {
            var c = a.layers;
            b = function (a) {
                return ha(c, a)
            }
        } else b = pf;
        this.B = b;
        this.o = a.hitTolerance ? a.hitTolerance : 0;
        this.g = null;
        y(this, Xc("active"), this.u, this)
    }

    v(Jv, Jg);
    function Kv(a) {
        this.g = Ov(this, a.pixel, a.map);
        if (!this.a && this.g) {
            this.a = a.coordinate;
            Mv.call(this, a);
            var b = this.j || new $c([this.g]);
            this.b(new Pv("translatestart", b, a.coordinate));
            return !0
        }
        return !1
    }

    function Nv(a) {
        if (this.a) {
            this.a = null;
            Mv.call(this, a);
            var b = this.j || new $c([this.g]);
            this.b(new Pv("translateend", b, a.coordinate));
            return !0
        }
        return !1
    }

    function Lv(a) {
        if (this.a) {
            a = a.coordinate;
            var b = a[0] - this.a[0], c = a[1] - this.a[1], d = this.j || new $c([this.g]);
            d.forEach(function (a) {
                var d = a.W();
                d.translate(b, c);
                a.Ra(d)
            });
            this.a = a;
            this.b(new Pv("translating", d, a))
        }
    }

    function Mv(a) {
        var b = a.map.a;
        Ov(this, a.pixel, a.map) ? (b.classList.remove(this.a ? "ol-grab" : "ol-grabbing"), b.classList.add(this.a ? "ol-grabbing" : "ol-grab")) : b.classList.remove("ol-grab", "ol-grabbing")
    }

    function Ov(a, b, c) {
        return c.Wd(b, function (a) {
            if (!this.j || ha(this.j.a, a))return a
        }.bind(a), {layerFilter: a.B, hitTolerance: a.o})
    }

    Jv.prototype.C = function () {
        return this.o
    };
    Jv.prototype.I = function (a) {
        this.o = a
    };
    Jv.prototype.setMap = function (a) {
        var b = this.v;
        Jg.prototype.setMap.call(this, a);
        Qv(this, b)
    };
    Jv.prototype.u = function () {
        Qv(this, null)
    };
    function Qv(a, b) {
        var c = a.v;
        a = a.c();
        c && a || (c = c || b) && c.a.classList.remove("ol-grab", "ol-grabbing")
    }

    function Pv(a, b, c) {
        Qc.call(this, a);
        this.features = b;
        this.coordinate = c
    }

    v(Pv, Qc);
    function W(a) {
        a = a ? a : {};
        var b = rb({}, a);
        delete b.gradient;
        delete b.radius;
        delete b.blur;
        delete b.shadow;
        delete b.weight;
        S.call(this, b);
        this.g = null;
        this.I = void 0 !== a.shadow ? a.shadow : 250;
        this.B = void 0;
        this.D = null;
        y(this, Xc(Rv), this.Nl, this);
        this.zj(a.gradient ? a.gradient : Sv);
        this.tj(void 0 !== a.blur ? a.blur : 15);
        this.Xc(void 0 !== a.radius ? a.radius : 8);
        y(this, Xc(Tv), this.lg, this);
        y(this, Xc(Uv), this.lg, this);
        this.lg();
        var c = a.weight ? a.weight : "weight", d;
        "string" === typeof c ? d = function (a) {
            return a.get(c)
        } : d = c;
        this.i(function (a) {
            a =
                d(a);
            a = void 0 !== a ? Aa(a, 0, 1) : 1;
            var b = 255 * a | 0, c = this.D[b];
            c || (c = [new vl({image: new yo({opacity: a, src: this.B})})], this.D[b] = c);
            return c
        }.bind(this));
        this.set(mu, null);
        y(this, "render", this.dm, this)
    }

    v(W, S);
    var Sv = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
    k = W.prototype;
    k.Ch = function () {
        return this.get(Tv)
    };
    k.Jh = function () {
        return this.get(Rv)
    };
    k.Ii = function () {
        return this.get(Uv)
    };
    k.Nl = function () {
        for (var a = this.Jh(), b = ld(1, 256), c = b.createLinearGradient(0, 0, 1, 256), d = 1 / (a.length - 1), e = 0,
                 f = a.length; e < f; ++e)c.addColorStop(e * d, a[e]);
        b.fillStyle = c;
        b.fillRect(0, 0, 1, 256);
        this.g = b.getImageData(0, 0, 1, 256).data
    };
    k.lg = function () {
        var a = this.Ii(), b = this.Ch(), c = a + b + 1, d = 2 * c;
        d = ld(d, d);
        d.shadowOffsetX = d.shadowOffsetY = this.I;
        d.shadowBlur = b;
        d.shadowColor = "#000";
        d.beginPath();
        b = c - this.I;
        d.arc(b, b, a, 0, 2 * Math.PI, !0);
        d.fill();
        this.B = d.canvas.toDataURL();
        this.D = Array(256);
        this.s()
    };
    k.dm = function (a) {
        a = a.context;
        var b = a.canvas;
        b = a.getImageData(0, 0, b.width, b.height);
        var c = b.data, d, e;
        var f = 0;
        for (d = c.length; f < d; f += 4)if (e = 4 * c[f + 3]) c[f] = this.g[e], c[f + 1] = this.g[e + 1], c[f + 2] = this.g[e + 2];
        a.putImageData(b, 0, 0)
    };
    k.tj = function (a) {
        this.set(Tv, a)
    };
    k.zj = function (a) {
        this.set(Rv, a)
    };
    k.Xc = function (a) {
        this.set(Uv, a)
    };
    var Tv = "blur", Rv = "gradient", Uv = "radius";

    function Vv(a) {
        cu.call(this, a);
        this.o = Ih();
        this.g = null
    }

    v(Vv, cu);
    Vv.prototype.u = function (a, b, c) {
        eu(this, "precompose", c, a, void 0);
        var d = this.Y();
        if (d) {
            var e = b.extent, f = void 0 !== e && !Ta(e, a.extent) && ob(e, a.extent);
            f && du(c, a, e);
            e = this.D();
            var g = c.globalAlpha;
            c.globalAlpha = b.opacity;
            c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(e[4]), Math.round(e[5]), Math.round(d.width * e[0]), Math.round(d.height * e[3]));
            c.globalAlpha = g;
            f && c.restore()
        }
        this.qf(c, a, b)
    };
    Vv.prototype.Ha = function (a, b, c, d, e) {
        var f = this.a;
        return f.ia().Ha(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function (a) {
            return d.call(e, a, f)
        })
    };
    Vv.prototype.v = function (a, b, c, d) {
        if (this.Y()) {
            if (this.a.ia().Ha !== ra)return cu.prototype.v.apply(this, arguments);
            var e = Nh(this.o, a.slice());
            jf(e, b.viewState.resolution / this.c);
            this.g || (this.g = ld(1, 1));
            this.g.clearRect(0, 0, 1, 1);
            this.g.drawImage(this.Y(), e[0], e[1], 1, 1, 0, 0, 1, 1);
            e = this.g.getImageData(0, 0, 1, 1).data;
            if (0 < e[3])return c.call(d, this.a, e)
        }
    };
    function Wv(a) {
        Vv.call(this, a);
        this.M = null;
        this.i = Ih()
    }

    v(Wv, Vv);
    Wv.prototype.Y = function () {
        return this.M ? this.M.Y() : null
    };
    Wv.prototype.D = function () {
        return this.i
    };
    Wv.prototype.yd = function (a, b) {
        var c = a.pixelRatio, d = a.size, e = a.viewState, f = e.center, g = e.resolution, h = this.a.ia(),
            l = a.viewHints, m = a.extent;
        void 0 !== b.extent && (m = nb(m, b.extent));
        l[0] || l[1] || ib(m) || (b = h.Y(m, g, c, e.projection)) && Xt(this, b) && (this.M = b);
        if (this.M) {
            b = this.M;
            l = b.G();
            m = b.resolution;
            e = b.a;
            var n = c * m / (g * e);
            l = Rh(this.i, c * d[0] / 2, c * d[1] / 2, n, n, 0, e * (l[0] - f[0]) / m, e * (f[1] - l[3]) / m);
            Rh(this.o, c * d[0] / 2 - l[4], c * d[1] / 2 - l[5], c / g, -c / g, 0, -f[0], -f[1]);
            Zt(a.attributions, b.i);
            $t(a, h);
            this.c = g * c / e
        }
        return !!this.M
    };
    function Xv(a, b, c, d) {
        var e = hc(c, b, a);
        c = Ub(b, d, c);
        b = b.Nc();
        void 0 !== b && (c *= b);
        b = a.Nc();
        void 0 !== b && (c /= b);
        b = a.G();
        if (!b || Ra(b, e)) a = Ub(a, c, e) / c, isFinite(a) && 0 < a && (c /= a);
        return c
    }

    function Yv(a, b, c, d) {
        a = c - a;
        b = d - b;
        var e = Math.sqrt(a * a + b * b);
        return [Math.round(c + a / e), Math.round(d + b / e)]
    }

    function Zv(a, b, c, d, e, f, g, h, l, m, n) {
        var p = ld(Math.round(c * a), Math.round(c * b));
        if (!l.length)return p.canvas;
        p.scale(c, c);
        var q = Ma();
        l.forEach(function (a) {
            bb(q, a.extent)
        });
        var t = ld(Math.round(c * jb(q) / d), Math.round(c * kb(q) / d)), u = c / d;
        l.forEach(function (a) {
            t.drawImage(a.image, m, m, a.image.width - 2 * m, a.image.height - 2 * m, (a.extent[0] - q[0]) * u, -(a.extent[3] - q[3]) * u, jb(a.extent) * u, kb(a.extent) * u)
        });
        var x = gb(g);
        h.c.forEach(function (a) {
            var b = a.source, e = a.target, g = b[1][0], h = b[1][1], l = b[2][0], m = b[2][1];
            a = (e[0][0] -
                x[0]) / f;
            var n = -(e[0][1] - x[1]) / f, u = (e[1][0] - x[0]) / f, B = -(e[1][1] - x[1]) / f,
                ea = (e[2][0] - x[0]) / f, Ya = -(e[2][1] - x[1]) / f;
            e = b[0][0];
            b = b[0][1];
            g -= e;
            h -= b;
            l -= e;
            m -= b;
            a:{
                g = [[g, h, 0, 0, u - a], [l, m, 0, 0, ea - a], [0, 0, g, h, B - n], [0, 0, l, m, Ya - n]];
                h = g.length;
                for (l = 0; l < h; l++) {
                    m = l;
                    for (var da = Math.abs(g[l][l]), Vb = l + 1; Vb < h; Vb++) {
                        var Ac = Math.abs(g[Vb][l]);
                        Ac > da && (da = Ac, m = Vb)
                    }
                    if (!da) {
                        g = null;
                        break a
                    }
                    da = g[m];
                    g[m] = g[l];
                    g[l] = da;
                    for (m = l + 1; m < h; m++)for (da = -g[m][l] / g[l][l], Vb = l; Vb < h + 1; Vb++)g[m][Vb] = l == Vb ? 0 : g[m][Vb] + da * g[l][Vb]
                }
                l = Array(h);
                for (m =
                         h - 1; 0 <= m; m--)for (l[m] = g[m][h] / g[m][m], da = m - 1; 0 <= da; da--)g[da][h] -= g[da][m] * l[m];
                g = l
            }
            g && (p.save(), p.beginPath(), l = (a + u + ea) / 3, m = (n + B + Ya) / 3, h = Yv(l, m, a, n), u = Yv(l, m, u, B), ea = Yv(l, m, ea, Ya), p.moveTo(u[0], u[1]), p.lineTo(h[0], h[1]), p.lineTo(ea[0], ea[1]), p.clip(), p.transform(g[0], g[2], g[1], g[3], a, n), p.translate(q[0] - e, q[3] - b), p.scale(d / c, -d / c), p.drawImage(t.canvas, 0, 0), p.restore())
        });
        n && (p.save(), p.strokeStyle = "black", p.lineWidth = 1, h.c.forEach(function (a) {
            var b = a.target;
            a = (b[0][0] - x[0]) / f;
            var c = -(b[0][1] - x[1]) /
                f, d = (b[1][0] - x[0]) / f, e = -(b[1][1] - x[1]) / f, g = (b[2][0] - x[0]) / f;
            b = -(b[2][1] - x[1]) / f;
            p.beginPath();
            p.moveTo(d, e);
            p.lineTo(a, c);
            p.lineTo(g, b);
            p.closePath();
            p.stroke()
        }), p.restore());
        return p.canvas
    };
    function $v(a, b, c, d, e) {
        this.f = a;
        this.i = b;
        var f = {}, g = fc(this.i, this.f);
        this.a = function (a) {
            var b = a[0] + "/" + a[1];
            f[b] || (f[b] = g(a));
            return f[b]
        };
        this.g = d;
        this.v = e * e;
        this.c = [];
        this.l = !1;
        this.o = this.f.f && !!d && !!this.f.G() && jb(d) == jb(this.f.G());
        this.b = this.f.G() ? jb(this.f.G()) : null;
        this.j = this.i.G() ? jb(this.i.G()) : null;
        a = gb(c);
        b = fb(c);
        d = eb(c);
        c = db(c);
        e = this.a(a);
        var h = this.a(b), l = this.a(d), m = this.a(c);
        aw(this, a, b, d, c, e, h, l, m, 10);
        if (this.l) {
            var n = Infinity;
            this.c.forEach(function (a) {
                n = Math.min(n, a.source[0][0],
                    a.source[1][0], a.source[2][0])
            });
            this.c.forEach(function (a) {
                if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - n > this.b / 2) {
                    var b = [[a.source[0][0], a.source[0][1]], [a.source[1][0], a.source[1][1]], [a.source[2][0], a.source[2][1]]];
                    b[0][0] - n > this.b / 2 && (b[0][0] -= this.b);
                    b[1][0] - n > this.b / 2 && (b[1][0] -= this.b);
                    b[2][0] - n > this.b / 2 && (b[2][0] -= this.b);
                    Math.max(b[0][0], b[1][0], b[2][0]) - Math.min(b[0][0], b[1][0], b[2][0]) < this.b / 2 && (a.source = b)
                }
            }, this)
        }
        f = {}
    }

    function aw(a, b, c, d, e, f, g, h, l, m) {
        var n = La([f, g, h, l]), p = a.b ? jb(n) / a.b : null, q = a.b, t = a.f.f && .5 < p && 1 > p, u = !1;
        if (0 < m) {
            if (a.i.c && a.j) {
                var x = La([b, c, d, e]);
                u |= .25 < jb(x) / a.j
            }
            !t && a.f.c && p && (u |= .25 < p)
        }
        if (u || !a.g || ob(n, a.g)) {
            if (!(u || isFinite(f[0]) && isFinite(f[1]) && isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(l[0]) && isFinite(l[1])))if (0 < m) u = !0; else return;
            if (0 < m && (u || (n = a.a([(b[0] + d[0]) / 2, (b[1] + d[1]) / 2]), q = t ? (Ga(f[0], q) + Ga(h[0], q)) / 2 - Ga(n[0], q) : (f[0] + h[0]) / 2 - n[0], n = (f[1] + h[1]) / 2 - n[1],
                    u = q * q + n * n > a.v), u)) {
                Math.abs(b[0] - d[0]) <= Math.abs(b[1] - d[1]) ? (t = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2], q = a.a(t), n = [(e[0] + b[0]) / 2, (e[1] + b[1]) / 2], p = a.a(n), aw(a, b, c, t, n, f, g, q, p, m - 1), aw(a, n, t, d, e, p, q, h, l, m - 1)) : (t = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2], q = a.a(t), n = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2], p = a.a(n), aw(a, b, t, n, e, f, q, p, l, m - 1), aw(a, t, c, d, n, q, g, h, p, m - 1));
                return
            }
            if (t) {
                if (!a.o)return;
                a.l = !0
            }
            a.c.push({source: [f, h, l], target: [b, d, e]});
            a.c.push({source: [f, g, h], target: [b, c, d]})
        }
    }

    function bw(a) {
        var b = Ma();
        a.c.forEach(function (a) {
            a = a.source;
            Na(b, a[0]);
            Na(b, a[1]);
            Na(b, a[2])
        });
        return b
    };
    function cw(a, b, c, d, e, f) {
        this.v = b;
        this.o = a.G();
        var g = b.G(), h = g ? nb(c, g) : c;
        g = Xv(a, b, lb(h), d);
        this.j = new $v(a, b, h, this.o, .5 * g);
        this.c = d;
        this.f = c;
        a = bw(this.j);
        this.l = (this.Gb = f(a, g, e)) ? this.Gb.a : 1;
        this.me = this.g = null;
        e = 2;
        f = [];
        this.Gb && (e = 0, f = this.Gb.i);
        bt.call(this, c, d, this.l, e, f)
    }

    v(cw, bt);
    cw.prototype.ka = function () {
        1 == this.state && (Gc(this.me), this.me = null);
        bt.prototype.ka.call(this)
    };
    cw.prototype.Y = function () {
        return this.g
    };
    cw.prototype.ke = function () {
        var a = this.Gb.getState();
        2 == a && (this.g = Zv(jb(this.f) / this.c, kb(this.f) / this.c, this.l, this.Gb.resolution, 0, this.c, this.f, this.j, [{
            extent: this.Gb.G(),
            image: this.Gb.Y()
        }], 0));
        this.state = a;
        this.s()
    };
    cw.prototype.load = function () {
        if (0 == this.state) {
            this.state = 1;
            this.s();
            var a = this.Gb.getState();
            2 == a || 3 == a ? this.ke() : (this.me = y(this.Gb, "change", function () {
                var a = this.Gb.getState();
                if (2 == a || 3 == a) Gc(this.me), this.me = null, this.ke()
            }, this), this.Gb.load())
        }
    };
    function dw(a) {
        xu.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state
        });
        this.B = void 0 !== a.resolutions ? a.resolutions : null;
        this.i = null;
        this.ga = 0
    }

    v(dw, xu);
    function ew(a, b) {
        a.B && (b = a.B[ja(a.B, b, 0)]);
        return b
    }

    dw.prototype.Y = function (a, b, c, d) {
        var e = this.c;
        if (e && d && !ec(e, d)) {
            if (this.i) {
                if (this.ga == this.f && ec(this.i.v, d) && this.i.resolution == b && ab(this.i.G(), a))return this.i;
                Pc(this.i);
                this.i = null
            }
            this.i = new cw(e, d, a, b, c, function (a, b, c) {
                return this.Lc(a, b, c, e)
            }.bind(this));
            this.ga = this.f;
            return this.i
        }
        e && (d = e);
        return this.Lc(a, b, c, d)
    };
    dw.prototype.l = function (a) {
        a = a.target;
        switch (a.getState()) {
            case 1:
                this.b(new fw(gw, a));
                break;
            case 2:
                this.b(new fw(hw, a));
                break;
            case 3:
                this.b(new fw(iw, a))
        }
    };
    function jw(a, b) {
        a.Y().src = b
    }

    function fw(a, b) {
        Qc.call(this, a);
        this.image = b
    }

    v(fw, Qc);
    var gw = "imageloadstart", hw = "imageloadend", iw = "imageloaderror";

    function kw(a) {
        dw.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions,
            state: a.state
        });
        this.oa = a.canvasFunction;
        this.S = null;
        this.U = 0;
        this.va = void 0 !== a.ratio ? a.ratio : 1.5
    }

    v(kw, dw);
    kw.prototype.Lc = function (a, b, c, d) {
        b = ew(this, b);
        var e = this.S;
        if (e && this.U == this.f && e.resolution == b && e.a == c && Ta(e.G(), a))return e;
        a = a.slice();
        pb(a, this.va);
        (d = this.oa(a, b, c, [jb(a) / b * c, kb(a) / b * c], d)) && (e = new dt(a, b, c, this.j, d));
        this.S = e;
        this.U = this.f;
        return e
    };
    function lw(a) {
        this.a = a.source;
        this.Za = Ih();
        this.g = ld();
        this.o = [0, 0];
        this.Sa = void 0 == a.renderBuffer ? 100 : a.renderBuffer;
        this.C = null;
        kw.call(this, {
            attributions: a.attributions,
            canvasFunction: this.Ek.bind(this),
            logo: a.logo,
            projection: a.projection,
            ratio: a.ratio,
            resolutions: a.resolutions,
            state: this.a.getState()
        });
        this.I = null;
        this.v = void 0;
        this.Si(a.style);
        y(this.a, "change", this.Eo, this)
    }

    v(lw, kw);
    k = lw.prototype;
    k.Ek = function (a, b, c, d, e) {
        var f = new Mt(.5 * b / c, a, b, this.a.U, this.Sa);
        this.a.de(a, b, e);
        var g = !1;
        this.a.ac(a, function (a) {
            var d;
            if (!(d = g)) {
                var e;
                (d = a.bb()) ? e = d.call(a, b) : this.v && (e = this.v(a, b));
                if (e) {
                    var h, p = !1;
                    Array.isArray(e) || (e = [e]);
                    d = 0;
                    for (h = e.length; d < h; ++d)p = iu(f, a, e[d], hu(b, c), this.Do, this) || p;
                    d = p
                } else d = !1
            }
            g = d
        }, this);
        Qt(f);
        if (g)return null;
        this.o[0] != d[0] || this.o[1] != d[1] ? (this.g.canvas.width = d[0], this.g.canvas.height = d[1], this.o[0] = d[0], this.o[1] = d[1]) : this.g.clearRect(0, 0, d[0], d[1]);
        a = mw(this,
            lb(a), b, c, d);
        f.Ma(this.g, c, a, 0, {});
        this.C = f;
        return this.g.canvas
    };
    k.Ha = function (a, b, c, d, e, f) {
        if (this.C) {
            var g = {};
            return this.C.Ha(a, b, 0, d, e, function (a) {
                var b = w(a).toString();
                if (!(b in g))return g[b] = !0, f(a)
            })
        }
    };
    k.Bo = function () {
        return this.a
    };
    k.Co = function () {
        return this.I
    };
    k.bb = function () {
        return this.v
    };
    function mw(a, b, c, d, e) {
        c = d / c;
        return Rh(a.Za, e[0] / 2, e[1] / 2, c, -c, 0, -b[0], -b[1])
    }

    k.Do = function () {
        this.s()
    };
    k.Eo = function () {
        zu(this, this.a.getState())
    };
    k.Si = function (a) {
        this.I = void 0 !== a ? a : zl;
        this.v = a ? xl(this.I) : void 0;
        this.s()
    };
    function nw(a, b) {
        su.call(this, a, b);
        this.l = this.i = this.M = null
    }

    v(nw, su);
    function ow(a, b) {
        b = b.Y();
        return $i(a.c.f, b)
    }

    nw.prototype.Ha = function (a, b, c, d, e) {
        var f = this.a;
        return f.ia().Ha(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function (a) {
            return d.call(e, a, f)
        })
    };
    nw.prototype.vg = function (a, b) {
        var c = this.c.f, d = a.pixelRatio, e = a.viewState, f = e.center, g = e.resolution, h = e.rotation, l = this.M,
            m = this.Hb, n = this.a.ia(), p = a.viewHints, q = a.extent;
        void 0 !== b.extent && (q = nb(q, b.extent));
        p[0] || p[1] || ib(q) || (b = n.Y(q, g, d, e.projection)) && Xt(this, b) && (l = b, m = ow(this, b), this.Hb && a.postRenderFunctions.push(function (a, b) {
            a.isContextLost() || a.deleteTexture(b)
        }.bind(null, c, this.Hb)));
        l && (c = this.c.i.j, pw(this, c.width, c.height, d, f, g, h, l.G()), this.l = null, d = this.v, Jh(d), Ph(d, 1, -1), Qh(d, 0,
            -1), this.M = l, this.Hb = m, Zt(a.attributions, l.i), $t(a, n));
        return !!l
    };
    function pw(a, b, c, d, e, f, g, h) {
        b *= f;
        c *= f;
        a = a.R;
        Jh(a);
        Ph(a, 2 * d / b, 2 * d / c);
        Oh(a, -g);
        Qh(a, h[0] - e[0], h[1] - e[1]);
        Ph(a, (h[2] - h[0]) / 2, (h[3] - h[1]) / 2);
        Qh(a, 1, 1)
    }

    nw.prototype.ef = function (a, b) {
        return void 0 !== this.Ha(a, b, 0, pf, this)
    };
    nw.prototype.tg = function (a, b, c, d) {
        if (this.M && this.M.Y())if (this.a.ia() instanceof lw) {
            var e = Nh(b.pixelToCoordinateTransform, a.slice());
            if (this.Ha(e, b, 0, pf, this))return c.call(d, this.a, null)
        } else {
            e = [this.M.Y().width, this.M.Y().height];
            if (!this.l) {
                var f = b.size;
                b = Ih();
                Qh(b, -1, -1);
                Ph(b, 2 / f[0], 2 / f[1]);
                Qh(b, 0, f[1]);
                Ph(b, 1, -1);
                f = Sh(this.R.slice());
                var g = Ih();
                Qh(g, 0, e[1]);
                Ph(g, 1, -1);
                Ph(g, e[0] / 2, e[1] / 2);
                Qh(g, 1, 1);
                Lh(g, f);
                Lh(g, b);
                this.l = g
            }
            a = Nh(this.l, a.slice());
            if (!(0 > a[0] || a[0] > e[0] || 0 > a[1] || a[1] > e[1]) && (this.i ||
                (this.i = ld(1, 1)), this.i.clearRect(0, 0, 1, 1), this.i.drawImage(this.M.Y(), a[0], a[1], 1, 1, 0, 0, 1, 1), e = this.i.getImageData(0, 0, 1, 1).data, 0 < e[3]))return c.call(d, this.a, e)
        }
    };
    function qw(a) {
        Dh.call(this, a ? a : {})
    }

    v(qw, Dh);
    qw.prototype.Ld = function (a) {
        var b = null, c = a.T();
        "canvas" === c ? b = new Wv(this) : "webgl" === c && (b = new nw(a, this));
        return b
    };
    function rw(a) {
        Vv.call(this, a);
        this.context = null === this.context ? null : ld();
        this.j = null;
        this.i = [];
        this.l = Ma();
        this.oa = new wa(0, 0, 0, 0);
        this.B = Ih();
        this.S = 0
    }

    v(rw, Vv);
    function sw(a, b) {
        b = b.getState();
        a = a.a.qd();
        return 2 == b || 4 == b || 3 == b && !a
    }

    rw.prototype.yd = function (a, b) {
        var c = a.pixelRatio, d = a.size, e = a.viewState, f = e.projection, g = e.resolution;
        e = e.center;
        var h = this.a, l = h.ia(), m = l.f, n = l.Ta(f), p = n.uc(g, this.S), q = n.Ca(p), t = Math.round(g / q) || 1,
            u = a.extent;
        void 0 !== b.extent && (u = nb(u, b.extent));
        if (ib(u))return !1;
        var x = sc(n, u, q);
        var B = n.Sc(p);
        var z = n.Ca(p), G = Ka(n.eb(p), n.j);
        B = Va(B[0] + x.ca * G[0] * z, B[1] + x.ea * G[1] * z, B[0] + (x.da + 1) * G[0] * z, B[1] + (x.ha + 1) * G[1] * z, void 0);
        z = l.Oc(c);
        G = {};
        G[p] = {};
        var E = this.Uf(l, f, G), ia = this.l, T = this.oa, R = !1, U, ta;
        for (U = x.ca; U <=
        x.da; ++U)for (ta = x.ea; ta <= x.ha; ++ta) {
            var A = l.Qc(p, U, ta, c, f);
            3 == A.getState() && (h.qd() ? 0 < h.md() && (R = !0) : ht(A, 2));
            sw(this, A) || (A = ft(A));
            sw(this, A) ? 2 == A.getState() && (G[p][A.sa.toString()] = A, R || -1 != this.i.indexOf(A) || (R = !0)) : qc(n, A.sa, E, T, ia) || (A = rc(n, A.sa, T, ia)) && E(p + 1, A)
        }
        U = a.viewHints;
        U = U[0] || U[1];
        if (!(this.c && 16 < Date.now() - a.time && U || !R && this.j && Ta(this.j, u) && this.xf == m && t == this.I && (U || q * c / z * t == this.c))) {
            if (U = this.context) ta = l.ce(p, c, f), A = Math.round((x.da - x.ca + 1) * ta[0] / t), ta = Math.round((x.ha - x.ea + 1) *
                ta[1] / t), R = U.canvas, R.width != A || R.height != ta ? (this.I = t, R.width = A, R.height = ta) : (U.clearRect(0, 0, A, ta), t = this.I);
            this.i.length = 0;
            R = Object.keys(G).map(Number);
            R.sort(fa);
            var ea;
            T = 0;
            for (ea = R.length; T < ea; ++T) {
                U = R[T];
                E = l.ce(U, c, f);
                A = n.Ca(U);
                var Ya = A / q;
                var da = z * l.bg(f);
                var Vb = G[U];
                for (var Ac in Vb) {
                    A = Vb[Ac];
                    ta = n.Fa(A.sa, ia);
                    U = (ta[0] - B[0]) / q * z / t;
                    ta = (B[3] - ta[3]) / q * z / t;
                    var ge = E[0] * Ya / t;
                    var he = E[1] * Ya / t;
                    this.Vf(A, a, b, U, ta, ge, he, da);
                    this.i.push(A)
                }
            }
            this.xf = m;
            this.c = q * c / z * t;
            this.j = B
        }
        b = this.c / g;
        b = Rh(this.B, c * d[0] /
            2, c * d[1] / 2, b, b, 0, (this.j[0] - e[0]) / this.c * c, (e[1] - this.j[3]) / this.c * c);
        Rh(this.o, c * d[0] / 2 - b[4], c * d[1] / 2 - b[5], c / g, -c / g, 0, -e[0], -e[1]);
        au(a.usedTiles, l, p, x);
        bu(a, l, n, c, f, u, p, h.md());
        Yt(a, l);
        $t(a, l);
        return 0 < this.i.length
    };
    rw.prototype.Vf = function (a, b, c, d, e, f, g, h) {
        this.a.ia().gg(b.viewState.projection) || this.context.clearRect(d, e, f, g);
        (a = a.Y(this.a)) && this.context.drawImage(a, h, h, a.width - 2 * h, a.height - 2 * h, d, e, f, g)
    };
    rw.prototype.Y = function () {
        var a = this.context;
        return a ? a.canvas : null
    };
    rw.prototype.D = function () {
        return this.B
    };
    function tw() {
        this.b = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"
    }

    v(tw, ti);
    var uw = new tw;

    function vw() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"
    }

    v(vw, ui);
    var ww = new vw;

    function xw(a, b) {
        this.f = a.getUniformLocation(b, "e");
        this.c = a.getUniformLocation(b, "d");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c")
    };
    function yw(a, b) {
        su.call(this, a, b);
        this.I = uw;
        this.ga = ww;
        this.i = null;
        this.C = new Ki([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.D = this.l = null;
        this.o = -1;
        this.S = [0, 0]
    }

    v(yw, su);
    k = yw.prototype;
    k.ka = function () {
        Ni(this.c.i, this.C);
        su.prototype.ka.call(this)
    };
    k.Uf = function (a, b, c) {
        var d = this.c;
        return function (e, f) {
            return Vt(a, b, e, f, function (a) {
                var b = d.a.b.hasOwnProperty(a.fb());
                b && (c[e] || (c[e] = {}), c[e][a.sa.toString()] = a);
                return b
            })
        }
    };
    k.ug = function () {
        su.prototype.ug.call(this);
        this.i = null
    };
    k.vg = function (a, b, c) {
        var d = this.c, e = c.b, f = a.viewState, g = f.projection, h = this.a, l = h.ia(), m = l.Ta(g),
            n = m.uc(f.resolution), p = m.Ca(n), q = l.ce(n, a.pixelRatio, g), t = q[0] / Ka(m.eb(n), this.S)[0],
            u = p / t, x = l.Oc(t) * l.bg(g), B = f.center, z = a.extent, G = sc(m, z, p);
        if (this.l && ya(this.l, G) && this.o == l.f) u = this.D; else {
            var E = [G.da - G.ca + 1, G.ha - G.ea + 1], ia = Ca(Math.max(E[0] * q[0], E[1] * q[1]));
            E = u * ia;
            var T = m.Sc(n), R = T[0] + G.ca * q[0] * u;
            u = T[1] + G.ea * q[1] * u;
            u = [R, u, R + E, u + E];
            tu(this, a, ia);
            e.viewport(0, 0, ia, ia);
            e.clearColor(0, 0, 0, 0);
            e.clear(16384);
            e.disable(3042);
            ia = Oi(c, this.I, this.ga);
            c.Tc(ia);
            this.i || (this.i = new xw(e, ia));
            Di(c, 34962, this.C);
            e.enableVertexAttribArray(this.i.b);
            e.vertexAttribPointer(this.i.b, 2, 5126, !1, 16, 0);
            e.enableVertexAttribArray(this.i.a);
            e.vertexAttribPointer(this.i.a, 2, 5126, !1, 16, 8);
            e.uniform1i(this.i.f, 0);
            c = {};
            c[n] = {};
            var U = this.Uf(l, g, c), ta = h.qd();
            ia = !0;
            R = Ma();
            var A = new wa(0, 0, 0, 0), ea, Ya;
            for (ea = G.ca; ea <= G.da; ++ea)for (Ya = G.ea; Ya <= G.ha; ++Ya) {
                T = l.Qc(n, ea, Ya, t, g);
                if (void 0 !== b.extent) {
                    var da = m.Fa(T.sa, R);
                    if (!ob(da, b.extent))continue
                }
                da =
                    T.getState();
                (da = 2 == da || 4 == da || 3 == da && !ta) || (T = ft(T));
                da = T.getState();
                if (2 == da) {
                    if (d.a.b.hasOwnProperty(T.fb())) {
                        c[n][T.sa.toString()] = T;
                        continue
                    }
                } else if (4 == da || 3 == da && !ta)continue;
                ia = !1;
                da = qc(m, T.sa, U, A, R);
                da || (T = rc(m, T.sa, A, R)) && U(n + 1, T)
            }
            b = Object.keys(c).map(Number);
            b.sort(fa);
            U = new Float32Array(4);
            var Vb;
            ta = 0;
            for (A = b.length; ta < A; ++ta)for (Vb in ea = c[b[ta]], ea)T = ea[Vb], da = m.Fa(T.sa, R), U[0] = 2 * (da[2] - da[0]) / E, U[1] = 2 * (da[3] - da[1]) / E, U[2] = 2 * (da[0] - u[0]) / E - 1, U[3] = 2 * (da[1] - u[1]) / E - 1, e.uniform4fv(this.i.c,
                U), Gk(d, T, q, x * t), e.drawArrays(5, 0, 4);
            ia ? (this.l = G, this.D = u, this.o = l.f) : (this.D = this.l = null, this.o = -1, a.animate = !0)
        }
        au(a.usedTiles, l, n, G);
        var Ac = d.j;
        bu(a, l, m, t, g, z, n, h.md(), function (a) {
            2 != a.getState() || d.a.b.hasOwnProperty(a.fb()) || a.fb() in Ac.a || Ac.i([a, uc(m, a.sa), m.Ca(a.sa[0]), q, x * t])
        }, this);
        Yt(a, l);
        $t(a, l);
        e = this.v;
        Jh(e);
        Qh(e, (Math.round(B[0] / p) * p - u[0]) / (u[2] - u[0]), (Math.round(B[1] / p) * p - u[1]) / (u[3] - u[1]));
        f.rotation && Oh(e, f.rotation);
        Ph(e, a.size[0] * f.resolution / (u[2] - u[0]), a.size[1] * f.resolution /
            (u[3] - u[1]));
        Qh(e, -.5, -.5);
        return !0
    };
    k.tg = function (a, b, c, d) {
        if (this.g) {
            a = Nh(this.v, [a[0] / b.size[0], (b.size[1] - a[1]) / b.size[1]].slice());
            a = [a[0] * this.j, a[1] * this.j];
            b = this.c.i.b;
            b.bindFramebuffer(b.FRAMEBUFFER, this.g);
            var e = new Uint8Array(4);
            b.readPixels(a[0], a[1], 1, 1, b.RGBA, b.UNSIGNED_BYTE, e);
            if (0 < e[3])return c.call(d, this.a, e)
        }
    };
    function zw(a) {
        a = a ? a : {};
        var b = rb({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        Dh.call(this, b);
        this.Ji(void 0 !== a.preload ? a.preload : 0);
        this.Ki(void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError : !0)
    }

    v(zw, Dh);
    k = zw.prototype;
    k.Ld = function (a) {
        var b = null, c = a.T();
        "canvas" === c ? b = new rw(this) : "webgl" === c && (b = new yw(a, this));
        return b
    };
    k.md = function () {
        return this.get("preload")
    };
    k.Ji = function (a) {
        this.set("preload", a)
    };
    k.qd = function () {
        return this.get("useInterimTilesOnError")
    };
    k.Ki = function (a) {
        this.set("useInterimTilesOnError", a)
    };
    function Aw(a) {
        this.context = null;
        rw.call(this, a);
        this.C = !1;
        this.R = Ih();
        this.S = "vector" == a.g ? 1 : 0
    }

    v(Aw, rw);
    var Bw = {image: ["Polygon", "Circle", "LineString", "Image", "Text"], hybrid: ["Polygon", "LineString"]},
        Cw = {image: ["Default"], hybrid: ["Image", "Text", "Default"], vector: qi};
    k = Aw.prototype;
    k.yd = function (a, b) {
        var c = this.a, d = c.f;
        this.ga != d && (this.i.length = 0, c = c.g, this.context || "vector" == c || (this.context = ld()), this.context && "vector" == c && (this.context = null));
        this.ga = d;
        return rw.prototype.yd.apply(this, arguments)
    };
    k.Vf = function (a, b) {
        var c = a, d = this.a, e = b.pixelRatio, f = b.viewState.projection, g = d.f, h = d.get(mu) || null,
            l = Dw(c, d);
        if (l.Td || l.xf != g || l.Sg != h) {
            var m = d.ia(), n = m.tileGrid, p = m.Ta(f), q = p.Ca(c.sa[0]);
            p = p.Fa(c.v);
            for (var t = 0, u = c.f.length; t < u; ++t) {
                var x = c.c[c.f[t]];
                l.Td = !1;
                var B = x.f, z = n.Ca(x.sa[0]), G = n.Fa(x.sa), E = nb(p, G), ia;
                if ("tile-pixels" == B.b) {
                    var T = ia = Ew(m, x);
                    z = Rh(this.R, 0, 0, 1 / z * T, -1 / z * T, 0, -G[0], -G[3]);
                    E = Nh(z, [E[0], E[3]]).concat(Nh(z, [E[2], E[1]]))
                } else if (ia = q, !ec(f, B)) {
                    var R = !0;
                    x.qg(f)
                }
                l.Td = !1;
                E = new Mt(0,
                    E, ia, m.o, d.c);
                ia = hu(ia, e);
                z = x.c;
                h && h !== l.Sg && z.sort(h);
                G = 0;
                for (T = z.length; G < T; ++G) {
                    var U = z[G];
                    R && U.W().mb(B, f);
                    var ta = void 0, A = U.bb();
                    A ? ta = A.call(U, q) : (A = d.bb()) && (ta = A(U, q));
                    if (ta) {
                        Array.isArray(ta) || (ta = [ta]);
                        A = ia;
                        var ea = E;
                        if (ta) {
                            var Ya = !1;
                            if (Array.isArray(ta))for (var da = 0,
                                                           Vb = ta.length; da < Vb; ++da)Ya = iu(ea, U, ta[da], A, this.Pi, this) || Ya; else Ya = iu(ea, U, ta, A, this.Pi, this) || Ya;
                            U = Ya
                        } else U = !1;
                        this.C = this.C || U;
                        l.Td = l.Td || U
                    }
                }
                Qt(E);
                B = c.sa.toString();
                x.j[w(d) + "," + B] = E
            }
            l.xf = g;
            l.Sg = h
        }
        if (this.context) {
            n = b;
            d =
                this.a;
            f = Dw(c, d);
            g = d.f;
            if ((e = Bw[d.g]) && f.Tg !== g)for (f.Tg = g, q = c.v, p = q[0], f = n.pixelRatio, g = d.ia(), h = g.tileGrid, R = g.Ta(n.viewState.projection), l = R.Ca(p), m = Fw(c, d), n = g.ce(p, f, n.viewState.projection), m.canvas.width = n[0], m.canvas.height = n[1], n = R.Fa(q), q = 0, R = c.f.length; q < R; ++q)p = c.c[c.f[q]], t = Ew(g, p), B = p.sa, x = f / l, u = Jh(this.R), "tile-pixels" == p.f.b ? (x = h.Fa(B, this.l), B = h.Ca(B[0]), E = f / t * B / l, Ph(u, E, E), Qh(u, Math.round((x[0] - n[0]) / B * t), Math.round((n[3] - x[3]) / B * t))) : (Ph(u, x, -x), Qh(u, -n[0], -n[3])), Gw(p, d, c.sa.toString()).Ma(m,
                f, u, 0, {}, e, !0);
            rw.prototype.Vf.apply(this, arguments)
        }
    };
    k.Ha = function (a, b, c, d, e) {
        var f = b.viewState.resolution, g = b.viewState.rotation;
        c = void 0 == c ? 0 : c;
        var h = this.a, l = {}, m = this.i, n = h.ia();
        b = n.Ta(b.viewState.projection);
        var p = n.tileGrid, q;
        var t = 0;
        for (q = m.length; t < q; ++t) {
            var u = m[t];
            var x = u.sa;
            var B = b.Fa(x, this.l);
            var z = Oa(B, c * f, z);
            if (Ra(z, a)) {
                B = 0;
                for (var G = u.f.length; B < G; ++B) {
                    var E = u.c[u.f[B]];
                    if ("tile-pixels" === E.f.b) {
                        var ia = E.sa;
                        f = p.Fa(ia, this.l);
                        var T = gb(f);
                        f = Ew(n, E);
                        ia = p.Ca(ia[0]);
                        var R = ia / f;
                        T = [(a[0] - T[0]) / R, (T[1] - a[1]) / R];
                        f *= b.Ca(x[0]) / ia
                    } else T = a;
                    E = Gw(E,
                        h, u.sa.toString());
                    var U = U || E.Ha(T, f, g, c, {}, function (a) {
                            var b = w(a).toString();
                            if (!(b in l))return l[b] = !0, d.call(e, a, h)
                        })
                }
            }
        }
        return U
    };
    function Ew(a, b) {
        return jb(b.G()) / Ka(a.tileGrid.eb(b.sa[0]))[0]
    }

    k.Pi = function () {
        Wt(this)
    };
    k.qf = function (a, b, c) {
        var d = this.a, e = d.ia(), f = d.g, g = Cw[f], h = b.pixelRatio, l = b.viewState.rotation, m = b.size,
            n = Math.round(h * m[0] / 2);
        m = Math.round(h * m[1] / 2);
        for (var p = this.i, q = e.tileGrid, t = e.Ta(b.viewState.projection), u = [], x = [],
                 B = p.length - 1; 0 <= B; --B) {
            var z = p[B];
            if (5 != z.getState())for (var G = z.sa, E = t.Fa(G)[0] - t.Fa(z.v)[0], ia = 0,
                                           T = z.f.length; ia < T; ++ia) {
                var R = z.c[z.f[ia]], U = Ew(e, R), ta = Gw(R, d, G.toString()), A;
                if (!(A = "vector" == f))a:{
                    A = void 0;
                    for (A in ta.a)for (var ea = ta.a[A], Ya = 0, da = g.length; Ya < da; ++Ya)if (g[Ya] in
                        ea) {
                        A = !0;
                        break a
                    }
                    A = !1
                }
                if (A) {
                    A = R.sa[0];
                    ea = q.Ca(A);
                    Ya = R;
                    R = b;
                    if ("tile-pixels" == Ya.f.b) {
                        da = this.a.ia();
                        var Vb = da.tileGrid, Ac = Ya.sa;
                        Ya = Vb.Ca(Ac[0]) / Ew(da, Ya);
                        da = R.viewState;
                        var ge = R.pixelRatio, he = da.resolution / ge;
                        Ac = Vb.Fa(Ac, this.l);
                        Vb = da.center;
                        Ac = gb(Ac);
                        R = R.size;
                        R = Rh(this.R, Math.round(ge * R[0] / 2), Math.round(ge * R[1] / 2), Ya / he, Ya / he, da.rotation, (Ac[0] - Vb[0]) / Ya, (Vb[1] - Ac[1]) / Ya)
                    } else R = fu(this, R, 0);
                    Qh(R, E * U / ea, 0);
                    U = St(ta, R);
                    a.save();
                    a.globalAlpha = c.opacity;
                    bi(a, -l, n, m);
                    ea = 0;
                    for (Ya = u.length; ea < Ya; ++ea)da =
                        u[ea], A < x[ea] && (a.beginPath(), a.moveTo(U[0], U[1]), a.lineTo(U[2], U[3]), a.lineTo(U[4], U[5]), a.lineTo(U[6], U[7]), a.moveTo(da[6], da[7]), a.lineTo(da[4], da[5]), a.lineTo(da[2], da[3]), a.lineTo(da[0], da[1]), a.clip());
                    ta.Ma(a, h, R, l, {}, g);
                    a.restore();
                    u.push(U);
                    x.push(A)
                }
            }
        }
        rw.prototype.qf.apply(this, arguments)
    };
    function Hw(a) {
        a = a ? a : {};
        var b = rb({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        S.call(this, b);
        this.Li(a.preload ? a.preload : 0);
        this.Mi(a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
        va(void 0 == a.renderMode || "image" == a.renderMode || "hybrid" == a.renderMode || "vector" == a.renderMode, 28);
        this.g = a.renderMode || "hybrid"
    }

    v(Hw, S);
    k = Hw.prototype;
    k.Ld = function (a) {
        var b = null;
        "canvas" === a.T() && (b = new Aw(this));
        return b
    };
    k.md = function () {
        return this.get("preload")
    };
    k.qd = function () {
        return this.get("useInterimTilesOnError")
    };
    k.Li = function (a) {
        this.set("preload", a)
    };
    k.Mi = function (a) {
        this.set("useInterimTilesOnError", a)
    };
    function Iw(a, b, c, d) {
        function e() {
            delete window[g];
            f.parentNode.removeChild(f)
        }

        var f = document.createElement("script"), g = "olc_" + w(b);
        f.async = !0;
        f.src = a + (-1 == a.indexOf("?") ? "?" : "&") + (d || "callback") + "=" + g;
        var h = setTimeout(function () {
            e();
            c && c()
        }, 1E4);
        window[g] = function (a) {
            clearTimeout(h);
            e();
            b(a)
        };
        document.getElementsByTagName("head")[0].appendChild(f)
    };
    function Jw(a, b, c, d, e, f, g, h, l, m, n) {
        et.call(this, e, 0);
        this.D = void 0 !== n ? n : !1;
        this.R = g;
        this.u = h;
        this.v = null;
        this.c = b;
        this.j = d;
        this.l = f ? f : e;
        this.f = [];
        this.Ed = null;
        this.g = 0;
        f = d.Fa(this.l);
        h = this.j.G();
        e = this.c.G();
        f = h ? nb(f, h) : f;
        if (hb(f))if ((h = a.G()) && (e ? e = nb(e, h) : e = h), d = Xv(a, c, lb(f), d.Ca(this.l[0])), !isFinite(d) || 0 >= d) this.state = 4; else if (this.o = new $v(a, c, f, e, d * (void 0 !== m ? m : .5)), this.o.c.length)if (this.g = b.uc(d), c = bw(this.o), e && (a.f ? (c[1] = Aa(c[1], e[1], e[3]), c[3] = Aa(c[3], e[1], e[3])) : c = nb(c, e)), hb(c)) {
            a =
                pc(b, c, this.g);
            for (b = a.ca; b <= a.da; b++)for (c = a.ea; c <= a.ha; c++)(m = l(this.g, b, c, g)) && this.f.push(m);
            this.f.length || (this.state = 4)
        } else this.state = 4; else this.state = 4; else this.state = 4
    }

    v(Jw, et);
    Jw.prototype.ka = function () {
        1 == this.state && (this.Ed.forEach(Gc), this.Ed = null);
        et.prototype.ka.call(this)
    };
    Jw.prototype.Y = function () {
        return this.v
    };
    Jw.prototype.ke = function () {
        var a = [];
        this.f.forEach(function (b) {
            b && 2 == b.getState() && a.push({extent: this.c.Fa(b.sa), image: b.Y()})
        }, this);
        this.f.length = 0;
        if (a.length) {
            var b = this.l[0], c = this.j.eb(b), d = "number" === typeof c ? c : c[0];
            c = "number" === typeof c ? c : c[1];
            b = this.j.Ca(b);
            var e = this.c.Ca(this.g), f = this.j.Fa(this.l);
            this.v = Zv(d, c, this.R, e, this.c.G(), b, f, this.o, a, this.u, this.D);
            this.state = 2
        } else this.state = 3;
        this.s()
    };
    Jw.prototype.load = function () {
        if (0 == this.state) {
            this.state = 1;
            this.s();
            var a = 0;
            this.Ed = [];
            this.f.forEach(function (b) {
                var c = b.getState();
                if (0 == c || 1 == c) {
                    a++;
                    var d = y(b, "change", function () {
                        var c = b.getState();
                        if (2 == c || 3 == c || 4 == c) Gc(d), a--, a || (this.Ed.forEach(Gc), this.Ed = null, this.ke())
                    }, this);
                    this.Ed.push(d)
                }
            }, this);
            this.f.forEach(function (a) {
                0 == a.getState() && a.load()
            });
            a || setTimeout(this.ke.bind(this), 0)
        }
    };
    function Kw(a, b) {
        var c = /\{z\}/g, d = /\{x\}/g, e = /\{y\}/g, f = /\{-y\}/g;
        return function (g) {
            if (g)return a.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function () {
                return (-g[2] - 1).toString()
            }).replace(f, function () {
                var a = b.a ? b.a[g[0]] : null;
                va(a, 55);
                return (a.ha - a.ea + 1 + g[2]).toString()
            })
        }
    }

    function Lw(a, b) {
        for (var c = a.length, d = Array(c), e = 0; e < c; ++e)d[e] = Kw(a[e], b);
        return Mw(d)
    }

    function Mw(a) {
        return 1 === a.length ? a[0] : function (b, c, d) {
            if (b)return a[Ga((b[1] << b[0]) + b[2], a.length)](b, c, d)
        }
    }

    function Nw() {
    }

    function Ow(a) {
        var b = [], c = /\{([a-z])-([a-z])\}/.exec(a);
        if (c) {
            var d = c[2].charCodeAt(0), e;
            for (e = c[1].charCodeAt(0); e <= d; ++e)b.push(a.replace(c[0], String.fromCharCode(e)));
            return b
        }
        if (c = c = /\{(\d+)-(\d+)\}/.exec(a)) {
            d = parseInt(c[2], 10);
            for (e = parseInt(c[1], 10); e <= d; e++)b.push(a.replace(c[0], e.toString()));
            return b
        }
        b.push(a);
        return b
    };
    function Pw(a) {
        Ek.call(this);
        this.highWaterMark = void 0 !== a ? a : 2048
    }

    v(Pw, Ek);
    function Qw(a) {
        return a.c > a.highWaterMark
    }

    Pw.prototype.jd = function (a) {
        for (var b, c; Qw(this);) {
            b = this.a.bd;
            c = b.sa[0].toString();
            var d;
            if (d = c in a) b = b.sa, d = xa(a[c], b[1], b[2]);
            if (d)break; else Pc(this.pop())
        }
    };
    function Rw(a) {
        xu.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state,
            wrapX: a.wrapX
        });
        this.va = void 0 !== a.opaque ? a.opaque : !1;
        this.Za = void 0 !== a.tilePixelRatio ? a.tilePixelRatio : 1;
        this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid : null;
        this.a = new Pw(a.cacheSize);
        this.l = [0, 0];
        this.vc = ""
    }

    v(Rw, xu);
    k = Rw.prototype;
    k.Ui = function () {
        return Qw(this.a)
    };
    k.jd = function (a, b) {
        (a = this.be(a)) && a.jd(b)
    };
    function Vt(a, b, c, d, e) {
        b = a.be(b);
        if (!b)return !1;
        for (var f = !0, g, h,
                 l = d.ca; l <= d.da; ++l)for (var m = d.ea; m <= d.ha; ++m)g = a.Rb(c, l, m), h = !1, b.b.hasOwnProperty(g) && (g = b.get(g), (h = 2 === g.getState()) && (h = !1 !== e(g))), h || (f = !1);
        return f
    }

    k.bg = function () {
        return 0
    };
    function Sw(a, b) {
        a.vc !== b && (a.vc = b, a.s())
    }

    k.Rb = function (a, b, c) {
        return a + "/" + b + "/" + c
    };
    k.gg = function () {
        return this.va
    };
    k.cb = function () {
        return this.tileGrid
    };
    k.Ta = function (a) {
        return this.tileGrid ? this.tileGrid : vc(a)
    };
    k.be = function (a) {
        var b = this.c;
        return b && !ec(b, a) ? null : this.a
    };
    k.Oc = function () {
        return this.Za
    };
    k.ce = function (a, b, c) {
        c = this.Ta(c);
        b = this.Oc(b);
        a = Ka(c.eb(a), this.l);
        return 1 == b ? a : Ja(a, b, this.l)
    };
    function Tw(a, b, c) {
        var d = void 0 !== c ? c : a.c;
        c = a.Ta(d);
        if (a.u && d.c) {
            var e = b;
            b = e[0];
            a = uc(c, e);
            d = zc(d);
            Ra(d, a) ? b = e : (e = jb(d), a[0] += e * Math.ceil((d[0] - a[0]) / e), b = c.kg(a, b))
        }
        e = b[0];
        d = b[1];
        a = b[2];
        if (c.minZoom > e || e > c.maxZoom) c = !1; else {
            var f = c.G();
            c = (c = f ? pc(c, f, e) : c.a ? c.a[e] : null) ? xa(c, d, a) : !0
        }
        return c ? b : null
    }

    k.ra = function () {
        this.a.clear();
        this.s()
    };
    k.Zg = ra;
    function Uw(a, b) {
        Qc.call(this, a);
        this.tile = b
    }

    v(Uw, Qc);
    function Vw(a) {
        Rw.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tilePixelRatio: a.tilePixelRatio,
            wrapX: a.wrapX
        });
        this.tileLoadFunction = a.tileLoadFunction;
        this.tileUrlFunction = this.Hc ? this.Hc.bind(this) : Nw;
        this.urls = null;
        a.urls ? this.ib(a.urls) : a.url && this.nb(a.url);
        a.tileUrlFunction && this.hb(a.tileUrlFunction)
    }

    v(Vw, Rw);
    k = Vw.prototype;
    k.tb = function () {
        return this.tileLoadFunction
    };
    k.ub = function () {
        return this.tileUrlFunction
    };
    k.vb = function () {
        return this.urls
    };
    k.Vi = function (a) {
        a = a.target;
        switch (a.getState()) {
            case 1:
                this.b(new Uw("tileloadstart", a));
                break;
            case 2:
                this.b(new Uw("tileloadend", a));
                break;
            case 3:
                this.b(new Uw("tileloaderror", a))
        }
    };
    k.zb = function (a) {
        this.a.clear();
        this.tileLoadFunction = a;
        this.s()
    };
    k.hb = function (a, b) {
        this.tileUrlFunction = a;
        "undefined" !== typeof b ? Sw(this, b) : this.s()
    };
    k.nb = function (a) {
        var b = this.urls = Ow(a);
        this.hb(this.Hc ? this.Hc.bind(this) : Lw(b, this.tileGrid), a)
    };
    k.ib = function (a) {
        this.urls = a;
        var b = a.join("\n");
        this.hb(this.Hc ? this.Hc.bind(this) : Lw(a, this.tileGrid), b)
    };
    k.Zg = function (a, b, c) {
        a = this.Rb(a, b, c);
        this.a.b.hasOwnProperty(a) && this.a.get(a)
    };
    function X(a) {
        Vw.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : Ww,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: a.wrapX
        });
        this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.tileClass = a.tileClass ? a.tileClass : it;
        this.g = {};
        this.v = {};
        this.Sa = a.reprojectionErrorThreshold;
        this.I =
            !1
    }

    v(X, Vw);
    k = X.prototype;
    k.Ui = function () {
        if (Qw(this.a))return !0;
        for (var a in this.g)if (Qw(this.g[a]))return !0;
        return !1
    };
    k.jd = function (a, b) {
        a = this.be(a);
        this.a.jd(this.a == a ? b : {});
        for (var c in this.g) {
            var d = this.g[c];
            d.jd(d == a ? b : {})
        }
    };
    k.bg = function (a) {
        return this.c && a && !ec(this.c, a) ? 0 : this.cg()
    };
    k.cg = function () {
        return 0
    };
    k.gg = function (a) {
        return this.c && a && !ec(this.c, a) ? !1 : Vw.prototype.gg.call(this, a)
    };
    k.Ta = function (a) {
        var b = this.c;
        return !this.tileGrid || b && !ec(b, a) ? (b = w(a).toString(), b in this.v || (this.v[b] = vc(a)), this.v[b]) : this.tileGrid
    };
    k.be = function (a) {
        var b = this.c;
        if (!b || ec(b, a))return this.a;
        a = w(a).toString();
        a in this.g || (this.g[a] = new Pw(this.a.highWaterMark));
        return this.g[a]
    };
    function Xw(a, b, c, d, e, f, g) {
        b = [b, c, d];
        e = (c = Tw(a, b, f)) ? a.tileUrlFunction(c, e, f) : void 0;
        e = new a.tileClass(b, void 0 !== e ? 0 : 4, void 0 !== e ? e : "", a.crossOrigin, a.tileLoadFunction);
        e.key = g;
        y(e, "change", a.Vi, a);
        return e
    }

    k.Qc = function (a, b, c, d, e) {
        if (this.c && e && !ec(this.c, e)) {
            var f = this.be(e);
            c = [a, b, c];
            var g;
            a = this.Rb.apply(this, c);
            f.b.hasOwnProperty(a) && (g = f.get(a));
            b = this.vc;
            if (g && g.key == b)return g;
            var h = this.c, l = this.Ta(h), m = this.Ta(e), n = Tw(this, c, e);
            d = new Jw(h, l, e, m, c, n, this.Oc(d), this.cg(), function (a, b, c, d) {
                return Yw(this, a, b, c, d, h)
            }.bind(this), this.Sa, this.I);
            d.key = b;
            g ? (d.a = g, gt(d), f.replace(a, d)) : f.set(a, d);
            return d
        }
        return Yw(this, a, b, c, d, e)
    };
    function Yw(a, b, c, d, e, f) {
        var g = a.Rb(b, c, d), h = a.vc;
        if (a.a.b.hasOwnProperty(g)) {
            var l = a.a.get(g);
            if (l.key != h) {
                var m = l;
                l = Xw(a, b, c, d, e, f, h);
                0 == m.getState() ? l.a = m.a : l.a = m;
                gt(l);
                a.a.replace(g, l)
            }
        } else l = Xw(a, b, c, d, e, f, h), a.a.set(g, l);
        return l
    }

    k.Nb = function (a) {
        if (this.I != a) {
            this.I = a;
            for (var b in this.g)this.g[b].clear();
            this.s()
        }
    };
    k.Ob = function (a, b) {
        if (a = Wb(a)) a = w(a).toString(), a in this.v || (this.v[a] = b)
    };
    function Ww(a, b) {
        a.Y().src = b
    };
    function Zw(a) {
        this.i = void 0 !== a.hidpi ? a.hidpi : !1;
        X.call(this, {
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            opaque: !0,
            projection: Wb("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: this.i ? 2 : 1,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.S = void 0 !== a.culture ? a.culture : "en-us";
        this.C = void 0 !== a.maxZoom ? a.maxZoom : -1;
        this.o = a.key;
        this.B = a.imagerySet;
        Iw("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + this.B + "?uriScheme=https&include=ImageryProviders&key=" +
            this.o, this.oa.bind(this), void 0, "jsonp")
    }

    v(Zw, X);
    var $w = new Cc({html: '<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
    Zw.prototype.U = function () {
        return this.o
    };
    Zw.prototype.ga = function () {
        return this.B
    };
    Zw.prototype.oa = function (a) {
        if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length) zu(this, "error"); else {
            var b = a.brandLogoUri;
            -1 == b.indexOf("https") && (b = b.replace("http", "https"));
            var c = a.resourceSets[0].resources[0], d = -1 == this.C ? c.zoomMax : this.C;
            a = zc(this.c);
            var e = xc({
                extent: a,
                minZoom: c.zoomMin,
                maxZoom: d,
                tileSize: (c.imageWidth == c.imageHeight ? c.imageWidth : [c.imageWidth, c.imageHeight]) / (this.i ?
                    2 : 1)
            });
            this.tileGrid = e;
            var f = this.S, g = this.i;
            this.tileUrlFunction = Mw(c.imageUrlSubdomains.map(function (a) {
                var b = [0, 0, 0], d = c.imageUrl.replace("{subdomain}", a).replace("{culture}", f);
                return function (a) {
                    if (a)return kc(a[0], a[1], -a[2] - 1, b), a = d, g && (a += "&dpi=d1&device=mobile"), a.replace("{quadkey}", lc(b))
                }
            }));
            if (c.imageryProviders) {
                var h = Xb(Wb("EPSG:4326"), this.c);
                a = c.imageryProviders.map(function (a) {
                    var b = a.attribution, c = {};
                    a.coverageAreas.forEach(function (a) {
                        var b = a.zoomMin, f = Math.min(a.zoomMax, d);
                        a =
                            a.bbox;
                        a = qb([a[1], a[0], a[3], a[2]], h);
                        var g;
                        for (g = b; g <= f; ++g) {
                            var l = g.toString();
                            b = pc(e, a, g);
                            l in c ? c[l].push(b) : c[l] = [b]
                        }
                    });
                    return new Cc({html: b, tileRanges: c})
                });
                a.push($w);
                this.wa(a)
            }
            this.D = b;
            zu(this, "ready")
        }
    };
    function ax(a) {
        a = a || {};
        var b = void 0 !== a.projection ? a.projection : "EPSG:3857", c = void 0 !== a.tileGrid ? a.tileGrid : xc({
            extent: zc(b),
            maxZoom: a.maxZoom,
            minZoom: a.minZoom,
            tileSize: a.tileSize
        });
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: a.opaque,
            projection: b,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: c,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }

    v(ax, X);
    function bx(a) {
        this.B = a.account;
        this.C = a.map || "";
        this.i = a.config || {};
        this.o = {};
        ax.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 18,
            minZoom: a.minZoom,
            projection: a.projection,
            state: "loading",
            wrapX: a.wrapX
        });
        cx(this)
    }

    v(bx, ax);
    k = bx.prototype;
    k.Vk = function () {
        return this.i
    };
    k.Hq = function (a) {
        rb(this.i, a);
        cx(this)
    };
    k.kq = function (a) {
        this.i = a || {};
        cx(this)
    };
    function cx(a) {
        var b = JSON.stringify(a.i);
        if (a.o[b]) dx(a, a.o[b]); else {
            var c = "https://" + a.B + ".cartodb.com/api/v1/map";
            a.C && (c += "/named/" + a.C);
            var d = new XMLHttpRequest;
            d.addEventListener("load", a.Pl.bind(a, b));
            d.addEventListener("error", a.Ol.bind(a));
            d.open("POST", c);
            d.setRequestHeader("Content-type", "application/json");
            d.send(JSON.stringify(a.i))
        }
    }

    k.Pl = function (a, b) {
        b = b.target;
        if (!b.status || 200 <= b.status && 300 > b.status) {
            try {
                var c = JSON.parse(b.responseText)
            } catch (d) {
                zu(this, "error");
                return
            }
            dx(this, c);
            this.o[a] = c;
            zu(this, "ready")
        } else zu(this, "error")
    };
    k.Ol = function () {
        zu(this, "error")
    };
    function dx(a, b) {
        a.nb("https://" + b.cdn_url.https + "/" + a.B + "/api/v1/map/" + b.layergroupid + "/{z}/{x}/{y}.png")
    };
    function Y(a) {
        V.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            wrapX: a.wrapX
        });
        this.resolution = void 0;
        this.distance = void 0 !== a.distance ? a.distance : 20;
        this.features = [];
        this.geometryFunction = a.geometryFunction || function (a) {
                a = a.W();
                va(a instanceof C, 10);
                return a
            };
        this.source = a.source;
        this.source.J("change", Y.prototype.ra, this)
    }

    v(Y, V);
    k = Y.prototype;
    k.po = function () {
        return this.distance
    };
    k.qo = function () {
        return this.source
    };
    k.de = function (a, b, c) {
        this.source.de(a, b, c);
        b !== this.resolution && (this.clear(), this.resolution = b, ex(this), this.Ec(this.features))
    };
    k.lq = function (a) {
        this.distance = a;
        this.ra()
    };
    k.ra = function () {
        this.clear();
        ex(this);
        this.Ec(this.features);
        V.prototype.ra.call(this)
    };
    function ex(a) {
        if (void 0 !== a.resolution) {
            a.features.length = 0;
            for (var b = Ma(), c = a.distance * a.resolution, d = a.source.fe(), e = {}, f = 0,
                     g = d.length; f < g; f++) {
                var h = d[f];
                w(h).toString() in e || !(h = a.geometryFunction(h)) || (h = h.V(), Xa(h, b), Oa(b, c, b), h = a.source.ag(b), h = h.filter(function (a) {
                    a = w(a).toString();
                    return a in e ? !1 : e[a] = !0
                }), a.features.push(fx(a, h)))
            }
        }
    }

    function fx(a, b) {
        for (var c = [0, 0], d = b.length - 1; 0 <= d; --d) {
            var e = a.geometryFunction(b[d]);
            e ? bf(c, e.V()) : b.splice(d, 1)
        }
        jf(c, 1 / b.length);
        a = new Bl(new C(c));
        a.set("features", b);
        return a
    };
    function gx(a, b) {
        var c = [];
        Object.keys(b).forEach(function (a) {
            null !== b[a] && void 0 !== b[a] && c.push(a + "=" + encodeURIComponent(b[a]))
        });
        var d = c.join("&");
        a = a.replace(/[?&]$/, "");
        a = -1 === a.indexOf("?") ? a + "?" : a + "&";
        return a + d
    };
    function hx(a) {
        a = a || {};
        dw.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.S = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.U = void 0 !== a.hidpi ? a.hidpi : !0;
        this.a = a.url;
        this.g = a.imageLoadFunction ? a.imageLoadFunction : jw;
        this.v = a.params || {};
        this.M = null;
        this.o = [0, 0];
        this.I = 0;
        this.C = void 0 !== a.ratio ? a.ratio : 1.5
    }

    v(hx, dw);
    k = hx.prototype;
    k.so = function () {
        return this.v
    };
    k.Lc = function (a, b, c, d) {
        if (void 0 === this.a)return null;
        b = ew(this, b);
        c = this.U ? c : 1;
        var e = this.M;
        if (e && this.I == this.f && e.resolution == b && e.a == c && Ta(e.G(), a))return e;
        e = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
        rb(e, this.v);
        a = a.slice();
        var f = (a[0] + a[2]) / 2, g = (a[1] + a[3]) / 2;
        if (1 != this.C) {
            var h = this.C * jb(a) / 2, l = this.C * kb(a) / 2;
            a[0] = f - h;
            a[1] = g - l;
            a[2] = f + h;
            a[3] = g + l
        }
        h = b / c;
        l = Math.ceil(jb(a) / h);
        var m = Math.ceil(kb(a) / h);
        a[0] = f - h * l / 2;
        a[2] = f + h * l / 2;
        a[1] = g - h * m / 2;
        a[3] = g + h * m / 2;
        this.o[0] = l;
        this.o[1] = m;
        f = a;
        g = this.o;
        h = c;
        d =
            d.qb.split(":").pop();
        e.SIZE = g[0] + "," + g[1];
        e.BBOX = f.join(",");
        e.BBOXSR = d;
        e.IMAGESR = d;
        e.DPI = Math.round(90 * h);
        d = this.a;
        f = d.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage");
        f == d && va(!1, 50);
        e = gx(f, e);
        this.M = new ct(a, b, c, this.j, e, this.S, this.g);
        this.I = this.f;
        y(this.M, "change", this.l, this);
        return this.M
    };
    k.ro = function () {
        return this.g
    };
    k.to = function () {
        return this.a
    };
    k.uo = function (a) {
        this.M = null;
        this.g = a;
        this.s()
    };
    k.vo = function (a) {
        a != this.a && (this.a = a, this.M = null, this.s())
    };
    k.wo = function (a) {
        rb(this.v, a);
        this.M = null;
        this.s()
    };
    function ix(a) {
        dw.call(this, {projection: a.projection, resolutions: a.resolutions});
        this.S = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.o = void 0 !== a.displayDpi ? a.displayDpi : 96;
        this.g = a.params || {};
        this.I = a.url;
        this.a = a.imageLoadFunction ? a.imageLoadFunction : jw;
        this.U = void 0 !== a.hidpi ? a.hidpi : !0;
        this.oa = void 0 !== a.metersPerUnit ? a.metersPerUnit : 1;
        this.v = void 0 !== a.ratio ? a.ratio : 1;
        this.va = void 0 !== a.useOverlay ? a.useOverlay : !1;
        this.M = null;
        this.C = 0
    }

    v(ix, dw);
    k = ix.prototype;
    k.yo = function () {
        return this.g
    };
    k.Lc = function (a, b, c) {
        b = ew(this, b);
        c = this.U ? c : 1;
        var d = this.M;
        if (d && this.C == this.f && d.resolution == b && d.a == c && Ta(d.G(), a))return d;
        1 != this.v && (a = a.slice(), pb(a, this.v));
        var e = [jb(a) / b * c, kb(a) / b * c];
        if (void 0 !== this.I) {
            d = this.I;
            var f = lb(a), g = this.oa, h = jb(a), l = kb(a), m = e[0], n = e[1], p = .0254 / this.o;
            e = {
                OPERATION: this.va ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
                VERSION: "2.0.0",
                LOCALE: "en",
                CLIENTAGENT: "ol.source.ImageMapGuide source",
                CLIP: "1",
                SETDISPLAYDPI: this.o,
                SETDISPLAYWIDTH: Math.round(e[0]),
                SETDISPLAYHEIGHT: Math.round(e[1]),
                SETVIEWSCALE: n * h > m * l ? h * g / (m * p) : l * g / (n * p),
                SETVIEWCENTERX: f[0],
                SETVIEWCENTERY: f[1]
            };
            rb(e, this.g);
            d = gx(d, e);
            d = new ct(a, b, c, this.j, d, this.S, this.a);
            y(d, "change", this.l, this)
        } else d = null;
        this.M = d;
        this.C = this.f;
        return d
    };
    k.xo = function () {
        return this.a
    };
    k.Ao = function (a) {
        rb(this.g, a);
        this.s()
    };
    k.zo = function (a) {
        this.M = null;
        this.a = a;
        this.s()
    };
    function jx(a) {
        var b = a.imageExtent, c = void 0 !== a.crossOrigin ? a.crossOrigin : null,
            d = a.imageLoadFunction ? a.imageLoadFunction : jw;
        dw.call(this, {attributions: a.attributions, logo: a.logo, projection: Wb(a.projection)});
        this.M = new ct(b, void 0, 1, this.j, a.url, c, d);
        this.a = a.imageSize ? a.imageSize : null;
        y(this.M, "change", this.l, this)
    }

    v(jx, dw);
    jx.prototype.Lc = function (a) {
        return ob(a, this.M.G()) ? this.M : null
    };
    jx.prototype.l = function (a) {
        if (2 == this.M.getState()) {
            var b = this.M.G(), c = this.M.Y();
            if (this.a) {
                var d = this.a[0];
                var e = this.a[1]
            } else d = c.width, e = c.height;
            b = Math.ceil(jb(b) / (kb(b) / e));
            if (b != d) {
                b = ld(b, e);
                var f = b.canvas;
                b.drawImage(c, 0, 0, d, e, 0, 0, f.width, f.height);
                this.M.Wg(f)
            }
        }
        dw.prototype.l.call(this, a)
    };
    function kx(a) {
        a = a || {};
        dw.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.oa = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.g = a.url;
        this.v = a.imageLoadFunction ? a.imageLoadFunction : jw;
        this.a = a.params || {};
        this.o = !0;
        lx(this);
        this.U = a.serverType;
        this.va = void 0 !== a.hidpi ? a.hidpi : !0;
        this.M = null;
        this.C = [0, 0];
        this.S = 0;
        this.I = void 0 !== a.ratio ? a.ratio : 1.5
    }

    v(kx, dw);
    var mx = [101, 101];
    k = kx.prototype;
    k.Fo = function (a, b, c, d) {
        if (void 0 !== this.g) {
            var e = mb(a, b, 0, mx), f = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.a.LAYERS
            };
            rb(f, this.a, d);
            d = Math.floor((e[3] - a[1]) / b);
            f[this.o ? "I" : "X"] = Math.floor((a[0] - e[0]) / b);
            f[this.o ? "J" : "Y"] = d;
            return nx(this, e, mx, 1, Wb(c), f)
        }
    };
    k.Ho = function () {
        return this.a
    };
    k.Lc = function (a, b, c, d) {
        if (void 0 === this.g)return null;
        b = ew(this, b);
        1 == c || this.va && void 0 !== this.U || (c = 1);
        var e = b / c, f = lb(a), g = mb(f, e, 0, [Math.ceil(jb(a) / e), Math.ceil(kb(a) / e)]);
        a = mb(f, e, 0, [Math.ceil(this.I * jb(a) / e), Math.ceil(this.I * kb(a) / e)]);
        if ((f = this.M) && this.S == this.f && f.resolution == b && f.a == c && Ta(f.G(), g))return f;
        g = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
        rb(g, this.a);
        this.C[0] = Math.round(jb(a) / e);
        this.C[1] = Math.round(kb(a) / e);
        d = nx(this, a, this.C, c, d, g);
        this.M = new ct(a, b, c, this.j, d, this.oa, this.v);
        this.S = this.f;
        y(this.M, "change", this.l, this);
        return this.M
    };
    k.Go = function () {
        return this.v
    };
    function nx(a, b, c, d, e, f) {
        va(void 0 !== a.g, 9);
        f[a.o ? "CRS" : "SRS"] = e.qb;
        "STYLES" in a.a || (f.STYLES = "");
        if (1 != d)switch (a.U) {
            case "geoserver":
                d = 90 * d + .5 | 0;
                f.FORMAT_OPTIONS = "FORMAT_OPTIONS" in f ? f.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
                break;
            case "mapserver":
                f.MAP_RESOLUTION = 90 * d;
                break;
            case "carmentaserver":
            case "qgis":
                f.DPI = 90 * d;
                break;
            default:
                va(!1, 8)
        }
        f.WIDTH = c[0];
        f.HEIGHT = c[1];
        c = e.a;
        var g;
        a.o && "ne" == c.substr(0, 2) ? g = [b[1], b[0], b[3], b[2]] : g = b;
        f.BBOX = g.join(",");
        return gx(a.g, f)
    }

    k.Io = function () {
        return this.g
    };
    k.Jo = function (a) {
        this.M = null;
        this.v = a;
        this.s()
    };
    k.Ko = function (a) {
        a != this.g && (this.g = a, this.M = null, this.s())
    };
    k.Lo = function (a) {
        rb(this.a, a);
        lx(this);
        this.M = null;
        this.s()
    };
    function lx(a) {
        a.o = 0 <= af(a.a.VERSION || "1.3.0")
    };
    function ox(a) {
        a = a || {};
        var b;
        void 0 !== a.attributions ? b = a.attributions : b = [px];
        ax.call(this, {
            attributions: b,
            cacheSize: a.cacheSize,
            crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin : "anonymous",
            opaque: void 0 !== a.opaque ? a.opaque : !0,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 19,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: a.wrapX
        })
    }

    v(ox, ax);
    var px = new Cc({html: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});
    Nj.pf = {};
    Nj.pf.Jf = function () {
    };
    (function (a) {
        function b(a, b, c) {
            if (g)return new ImageData(a, b, c);
            b = h.createImageData(b, c);
            b.data.set(a);
            return b
        }

        function c(a) {
            var b = !0;
            try {
                new ImageData(10, 10)
            } catch (n) {
                b = !1
            }
            return function (c) {
                var d = c.buffers, e = c.meta, f = c.width, g = c.height, h = d.length, l = d[0].byteLength;
                if (c.imageOps) {
                    l = Array(h);
                    for (c = 0; c < h; ++c) {
                        var m = c;
                        var n = new Uint8ClampedArray(d[c]);
                        var E = f, ia = g;
                        n = b ? new ImageData(n, E, ia) : {data: n, width: E, height: ia};
                        l[m] = n
                    }
                    f = a(l, e).data
                } else {
                    f = new Uint8ClampedArray(l);
                    g = Array(h);
                    m = Array(h);
                    for (c = 0; c <
                    h; ++c)g[c] = new Uint8ClampedArray(d[c]), m[c] = [0, 0, 0, 0];
                    for (d = 0; d < l; d += 4) {
                        for (c = 0; c < h; ++c)n = g[c], m[c][0] = n[d], m[c][1] = n[d + 1], m[c][2] = n[d + 2], m[c][3] = n[d + 3];
                        c = a(m, e);
                        f[d] = c[0];
                        f[d + 1] = c[1];
                        f[d + 2] = c[2];
                        f[d + 3] = c[3]
                    }
                }
                return f.buffer
            }
        }

        function d(a, b) {
            var d = Object.keys(a.lib || {}).map(function (b) {
                return "var " + b + " = " + a.lib[b].toString() + ";"
            }).concat(["var __minion__ = (" + c.toString() + ")(", a.operation.toString(), ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);",
                "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"]);
            d = URL.createObjectURL(new Blob(d, {type: "text/javascript"}));
            d = new Worker(d);
            d.addEventListener("message", b);
            return d
        }

        function e(a, b) {
            var d = c(a.operation);
            return {
                postMessage: function (a) {
                    setTimeout(function () {
                        b({data: {buffer: d(a), meta: a.meta}})
                    }, 0)
                }
            }
        }

        function f(a) {
            this.Nf = !!a.nm;
            var b;
            0 === a.threads ? b = 0 : this.Nf ? b = 1 : b = a.threads || 1;
            var c = [];
            if (b)for (var f = 0; f < b; ++f)c[f] = d(a, this.lh.bind(this, f)); else c[0] = e(a, this.lh.bind(this,
                0));
            this.Be = c;
            this.Kd = [];
            this.qk = a.Ep || Infinity;
            this.ze = 0;
            this.fd = {};
            this.Of = null
        }

        var g = !0;
        try {
            new ImageData(10, 10)
        } catch (l) {
            g = !1
        }
        var h = document.createElement("canvas").getContext("2d");
        f.prototype.Cp = function (a, b, c) {
            this.nk({inputs: a, Zh: b, callback: c});
            this.ih()
        };
        f.prototype.nk = function (a) {
            for (this.Kd.push(a); this.Kd.length > this.qk;)this.Kd.shift().callback(null, null)
        };
        f.prototype.ih = function () {
            if (0 === this.ze && 0 < this.Kd.length) {
                var a = this.Of = this.Kd.shift(), b = a.inputs[0].width, c = a.inputs[0].height,
                    d = a.inputs.map(function (a) {
                        return a.data.buffer
                    }), e = this.Be.length;
                this.ze = e;
                if (1 === e) this.Be[0].postMessage({
                    buffers: d,
                    meta: a.Zh,
                    imageOps: this.Nf,
                    width: b,
                    height: c
                }, d); else for (var f = 4 * Math.ceil(a.inputs[0].data.length / 4 / e), g = 0; g < e; ++g) {
                    for (var h = g * f, B = [], z = 0, G = d.length; z < G; ++z)B.push(d[g].slice(h, h + f));
                    this.Be[g].postMessage({buffers: B, meta: a.Zh, imageOps: this.Nf, width: b, height: c}, B)
                }
            }
        };
        f.prototype.lh = function (a, b) {
            this.Xq || (this.fd[a] = b.data, --this.ze, 0 === this.ze && this.rk())
        };
        f.prototype.rk = function () {
            var a =
                this.Of, c = this.Be.length;
            if (1 === c) {
                var d = new Uint8ClampedArray(this.fd[0].buffer);
                var e = this.fd[0].meta
            } else {
                var f = a.inputs[0].data.length;
                d = new Uint8ClampedArray(f);
                e = Array(f);
                f = 4 * Math.ceil(f / 4 / c);
                for (var g = 0; g < c; ++g) {
                    var h = g * f;
                    d.set(new Uint8ClampedArray(this.fd[g].buffer), h);
                    e[g] = this.fd[g].meta
                }
            }
            this.Of = null;
            this.fd = {};
            a.callback(null, b(d, a.inputs[0].width, a.inputs[0].height), e);
            this.ih()
        };
        a["default"] = {Jf: f};
        a.Jf = f
    })(Nj.pf = Nj.pf || {});
    function qx(a) {
        this.C = null;
        this.va = void 0 !== a.operationType ? a.operationType : "pixel";
        this.Sa = void 0 !== a.threads ? a.threads : 1;
        this.g = rx(a.sources);
        for (var b = 0, c = this.g.length; b < c; ++b)y(this.g[b], "change", this.s, this);
        this.U = new Se(function () {
            return 1
        }, this.s.bind(this));
        b = sx(this.g);
        c = {};
        for (var d = 0, e = b.length; d < e; ++d)c[w(b[d].layer)] = b[d];
        this.a = null;
        this.I = {
            animate: !1,
            attributions: {},
            coordinateToPixelTransform: Ih(),
            extent: null,
            focus: null,
            index: 0,
            layerStates: c,
            layerStatesArray: b,
            logos: {},
            pixelRatio: 1,
            pixelToCoordinateTransform: Ih(),
            postRenderFunctions: [],
            size: [0, 0],
            skippedFeatureUids: {},
            tileQueue: this.U,
            time: Date.now(),
            usedTiles: {},
            viewState: {rotation: 0},
            viewHints: [],
            wantedTiles: {}
        };
        dw.call(this, {});
        a.operation && this.v(a.operation, a.lib)
    }

    v(qx, dw);
    qx.prototype.v = function (a, b) {
        this.C = new Nj.pf.Jf({operation: a, nm: "image" === this.va, Ep: 1, lib: b, threads: this.Sa});
        this.s()
    };
    qx.prototype.Y = function (a, b, c, d) {
        c = !0;
        for (var e, f = 0, g = this.g.length; f < g; ++f)if (e = this.g[f].a.ia(), "ready" !== e.getState()) {
            c = !1;
            break
        }
        if (!c)return null;
        c = rb({}, this.I);
        c.viewState = rb({}, c.viewState);
        e = lb(a);
        c.extent = a.slice();
        c.focus = e;
        c.size[0] = Math.round(jb(a) / b);
        c.size[1] = Math.round(kb(a) / b);
        f = c.viewState;
        f.center = e;
        f.projection = d;
        f.resolution = b;
        this.o = c;
        this.a && (d = this.a.resolution, e = this.a.G(), b === d && ab(a, e) || (this.a = null));
        if (!this.a || this.f !== this.S)a:{
            a = this.o;
            d = this.g.length;
            b = Array(d);
            for (e =
                     0; e < d; ++e) {
                f = this.g[e];
                g = a;
                var h = a.layerStatesArray[e];
                if (f.yd(g, h)) {
                    var l = g.size[0], m = g.size[1];
                    if (tx) {
                        var n = tx.canvas;
                        n.width !== l || n.height !== m ? tx = ld(l, m) : tx.clearRect(0, 0, l, m)
                    } else tx = ld(l, m);
                    f.u(g, h, tx);
                    f = tx.getImageData(0, 0, l, m)
                } else f = null;
                if (f) b[e] = f; else break a
            }
            d = {};
            this.b(new ux(vx, a, d));
            this.C.Cp(b, d, this.oa.bind(this, a))
        }
        Te(c.tileQueue, 16, 16);
        return this.a
    };
    qx.prototype.oa = function (a, b, c, d) {
        if (!b && c) {
            b = a.extent;
            var e = a.viewState.resolution;
            if (e === this.o.viewState.resolution && ab(b, this.o.extent)) {
                if (this.a)var f = this.a.Y().getContext("2d"); else f = ld(Math.round(jb(b) / e), Math.round(kb(b) / e)), this.a = new dt(b, e, 1, this.j, f.canvas);
                f.putImageData(c, 0, 0);
                this.s();
                this.S = this.f;
                this.b(new ux(wx, a, d))
            }
        }
    };
    var tx = null;

    function sx(a) {
        return a.map(function (a) {
            return yh(a.a)
        })
    }

    function rx(a) {
        for (var b = a.length, c = Array(b), d = 0; d < b; ++d) {
            var e = d, f = a[d], g = null;
            f instanceof Rw ? (f = new zw({source: f}), g = new rw(f)) : f instanceof dw && (f = new qw({source: f}), g = new Wv(f));
            c[e] = g
        }
        return c
    }

    function ux(a, b, c) {
        Qc.call(this, a);
        this.extent = b.extent;
        this.resolution = b.viewState.resolution / b.pixelRatio;
        this.data = c
    }

    v(ux, Qc);
    qx.prototype.Lc = function () {
        return null
    };
    var vx = "beforeoperations", wx = "afteroperations";

    function xx(a) {
        var b = a.layer.indexOf("-");
        b = yx[-1 == b ? a.layer : a.layer.slice(0, b)];
        var c = zx[a.layer];
        ax.call(this, {
            attributions: Ax,
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            maxZoom: void 0 != a.maxZoom ? a.maxZoom : b.maxZoom,
            minZoom: void 0 != a.minZoom ? a.minZoom : b.minZoom,
            opaque: c.opaque,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + a.layer + "/{z}/{x}/{y}." + c.Kb,
            wrapX: a.wrapX
        })
    }

    v(xx, ax);
    var Ax = [new Cc({html: 'Map tiles by <a href="https://stamen.com/">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}), px],
        zx = {
            terrain: {Kb: "jpg", opaque: !0},
            "terrain-background": {Kb: "jpg", opaque: !0},
            "terrain-labels": {Kb: "png", opaque: !1},
            "terrain-lines": {Kb: "png", opaque: !1},
            "toner-background": {Kb: "png", opaque: !0},
            toner: {Kb: "png", opaque: !0},
            "toner-hybrid": {Kb: "png", opaque: !1},
            "toner-labels": {Kb: "png", opaque: !1},
            "toner-lines": {Kb: "png", opaque: !1},
            "toner-lite": {
                Kb: "png",
                opaque: !0
            },
            watercolor: {Kb: "jpg", opaque: !0}
        }, yx = {
            terrain: {minZoom: 4, maxZoom: 18},
            toner: {minZoom: 0, maxZoom: 20},
            watercolor: {minZoom: 1, maxZoom: 16}
        };

    function Bx(a) {
        a = a || {};
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.i = a.params || {};
        this.o = Ma();
        Sw(this, Cx(this))
    }

    v(Bx, X);
    function Cx(a) {
        var b = 0, c = [], d;
        for (d in a.i)c[b++] = d + "-" + a.i[d];
        return c.join("/")
    }

    Bx.prototype.B = function () {
        return this.i
    };
    Bx.prototype.Oc = function (a) {
        return a
    };
    Bx.prototype.Hc = function (a, b, c) {
        var d = this.tileGrid;
        d || (d = this.Ta(c));
        if (!(d.b.length <= a[0])) {
            var e = d.Fa(a, this.o), f = Ka(d.eb(a[0]), this.l);
            1 != b && (f = Ja(f, b, this.l));
            d = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
            rb(d, this.i);
            var g = this.urls;
            g ? (c = c.qb.split(":").pop(), d.SIZE = f[0] + "," + f[1], d.BBOX = e.join(","), d.BBOXSR = c, d.IMAGESR = c, d.DPI = Math.round(d.DPI ? d.DPI * b : 90 * b), a = (1 == g.length ? g[0] : g[Ga((a[1] << a[0]) + a[2], g.length)]).replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"),
                a = gx(a, d)) : a = void 0;
            return a
        }
    };
    Bx.prototype.C = function (a) {
        rb(this.i, a);
        Sw(this, Cx(this))
    };
    function Dx(a) {
        Rw.call(this, {
            opaque: !1,
            projection: a.projection,
            tileGrid: a.tileGrid,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }

    v(Dx, Rw);
    Dx.prototype.Qc = function (a, b, c) {
        var d = this.Rb(a, b, c);
        if (this.a.b.hasOwnProperty(d))return this.a.get(d);
        var e = Ka(this.tileGrid.eb(a));
        a = [a, b, c];
        b = (b = Tw(this, a)) ? Tw(this, b).toString() : "";
        e = new Ex(a, e, b);
        this.a.set(d, e);
        return e
    };
    function Ex(a, b, c) {
        et.call(this, a, 2);
        this.c = b;
        this.ua = c;
        this.f = null
    }

    v(Ex, et);
    Ex.prototype.Y = function () {
        if (this.f)return this.f;
        var a = this.c, b = ld(a[0], a[1]);
        b.strokeStyle = "black";
        b.strokeRect(.5, .5, a[0] + .5, a[1] + .5);
        b.fillStyle = "black";
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.font = "24px sans-serif";
        b.fillText(this.ua, a[0] / 2, a[1] / 2);
        return this.f = b.canvas
    };
    Ex.prototype.load = function () {
    };
    function Fx(a) {
        this.i = null;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            projection: Wb("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        if (a.url)if (a.jsonp) Iw(a.url, this.wg.bind(this), this.ff.bind(this)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", this.No.bind(this));
            b.addEventListener("error", this.Mo.bind(this));
            b.open("GET", a.url);
            b.send()
        } else a.tileJSON ?
            this.wg(a.tileJSON) : va(!1, 51)
    }

    v(Fx, X);
    k = Fx.prototype;
    k.No = function (a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText)
            } catch (c) {
                this.ff();
                return
            }
            this.wg(b)
        } else this.ff()
    };
    k.Mo = function () {
        this.ff()
    };
    k.Bl = function () {
        return this.i
    };
    k.wg = function (a) {
        var b = Wb("EPSG:4326"), c = this.c;
        if (a.bounds) {
            var d = Xb(b, c);
            var e = qb(a.bounds, d)
        }
        var f = a.minzoom || 0;
        d = a.maxzoom || 22;
        this.tileGrid = c = xc({extent: zc(c), maxZoom: d, minZoom: f});
        this.tileUrlFunction = Lw(a.tiles, c);
        if (void 0 !== a.attribution && !this.j) {
            b = void 0 !== e ? e : b.G();
            e = {};
            for (var g; f <= d; ++f)g = f.toString(), e[g] = [pc(c, b, f)];
            this.wa([new Cc({html: a.attribution, tileRanges: e})])
        }
        this.i = a;
        zu(this, "ready")
    };
    k.ff = function () {
        zu(this, "error")
    };
    function Gx(a) {
        Rw.call(this, {projection: Wb("EPSG:3857"), state: "loading"});
        this.v = void 0 !== a.preemptive ? a.preemptive : !0;
        this.o = Nw;
        this.g = void 0;
        this.i = a.jsonp || !1;
        if (a.url)if (this.i) Iw(a.url, this.xg.bind(this), this.gf.bind(this)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", this.Ro.bind(this));
            b.addEventListener("error", this.Qo.bind(this));
            b.open("GET", a.url);
            b.send()
        } else a.tileJSON ? this.xg(a.tileJSON) : va(!1, 51)
    }

    v(Gx, Rw);
    k = Gx.prototype;
    k.Ro = function (a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText)
            } catch (c) {
                this.gf();
                return
            }
            this.xg(b)
        } else this.gf()
    };
    k.Qo = function () {
        this.gf()
    };
    k.yl = function () {
        return this.g
    };
    k.Kk = function (a, b, c, d, e) {
        this.tileGrid ? (b = this.tileGrid.Me(a, b), Hx(this.Qc(b[0], b[1], b[2], 1, this.c), a, c, d, e)) : !0 === e ? setTimeout(function () {
            c.call(d, null)
        }, 0) : c.call(d, null)
    };
    k.gf = function () {
        zu(this, "error")
    };
    k.xg = function (a) {
        var b = Wb("EPSG:4326"), c = this.c;
        if (a.bounds) {
            var d = Xb(b, c);
            var e = qb(a.bounds, d)
        }
        var f = a.minzoom || 0;
        d = a.maxzoom || 22;
        this.tileGrid = c = xc({extent: zc(c), maxZoom: d, minZoom: f});
        this.g = a.template;
        var g = a.grids;
        if (g) {
            this.o = Lw(g, c);
            if (void 0 !== a.attribution) {
                b = void 0 !== e ? e : b.G();
                for (e = {}; f <= d; ++f)g = f.toString(), e[g] = [pc(c, b, f)];
                this.wa([new Cc({html: a.attribution, tileRanges: e})])
            }
            zu(this, "ready")
        } else zu(this, "error")
    };
    k.Qc = function (a, b, c, d, e) {
        var f = this.Rb(a, b, c);
        if (this.a.b.hasOwnProperty(f))return this.a.get(f);
        a = [a, b, c];
        b = Tw(this, a, e);
        d = this.o(b, d, e);
        d = new Ix(a, void 0 !== d ? 0 : 4, void 0 !== d ? d : "", this.tileGrid.Fa(a), this.v, this.i);
        this.a.set(f, d);
        return d
    };
    k.Zg = function (a, b, c) {
        a = this.Rb(a, b, c);
        this.a.b.hasOwnProperty(a) && this.a.get(a)
    };
    function Ix(a, b, c, d, e, f) {
        et.call(this, a, b);
        this.l = c;
        this.f = d;
        this.v = e;
        this.c = this.j = this.g = null;
        this.o = f
    }

    v(Ix, et);
    k = Ix.prototype;
    k.Y = function () {
        return null
    };
    k.getData = function (a) {
        if (!this.g || !this.j)return null;
        var b = this.g[Math.floor((1 - (a[1] - this.f[1]) / (this.f[3] - this.f[1])) * this.g.length)];
        if ("string" !== typeof b)return null;
        b = b.charCodeAt(Math.floor((a[0] - this.f[0]) / (this.f[2] - this.f[0]) * b.length));
        93 <= b && b--;
        35 <= b && b--;
        b -= 32;
        a = null;
        b in this.j && (b = this.j[b], this.c && b in this.c ? a = this.c[b] : a = b);
        return a
    };
    function Hx(a, b, c, d, e) {
        0 == a.state && !0 === e ? (Lc(a, "change", function () {
            c.call(d, this.getData(b))
        }, a), Jx(a)) : !0 === e ? setTimeout(function () {
            c.call(d, this.getData(b))
        }.bind(a), 0) : c.call(d, a.getData(b))
    }

    k.fb = function () {
        return this.l
    };
    k.Oe = function () {
        this.state = 3;
        this.s()
    };
    k.Ti = function (a) {
        this.g = a.grid;
        this.j = a.keys;
        this.c = a.data;
        this.state = 4;
        this.s()
    };
    function Jx(a) {
        if (0 == a.state)if (a.state = 1, a.o) Iw(a.l, a.Ti.bind(a), a.Oe.bind(a)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", a.Po.bind(a));
            b.addEventListener("error", a.Oo.bind(a));
            b.open("GET", a.l);
            b.send()
        }
    }

    k.Po = function (a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText)
            } catch (c) {
                this.Oe();
                return
            }
            this.Ti(b)
        } else this.Oe()
    };
    k.Oo = function () {
        this.Oe()
    };
    k.load = function () {
        this.v && Jx(this)
    };
    function Kx(a) {
        a = a || {};
        var b = a.params || {};
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: !("TRANSPARENT" in b ? b.TRANSPARENT : 1),
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.B = void 0 !== a.gutter ? a.gutter : 0;
        this.i = b;
        this.o = !0;
        this.C = a.serverType;
        this.U = void 0 !== a.hidpi ?
            a.hidpi : !0;
        this.S = "";
        Lx(this);
        this.ga = Ma();
        Mx(this);
        Sw(this, Nx(this))
    }

    v(Kx, X);
    k = Kx.prototype;
    k.So = function (a, b, c, d) {
        c = Wb(c);
        var e = this.tileGrid;
        e || (e = this.Ta(c));
        b = e.Me(a, b);
        if (!(e.b.length <= b[0])) {
            var f = e.Ca(b[0]), g = e.Fa(b, this.ga);
            e = Ka(e.eb(b[0]), this.l);
            var h = this.B;
            h && (e = Ia(e, h, this.l), g = Oa(g, f * h, g));
            h = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.i.LAYERS
            };
            rb(h, this.i, d);
            d = Math.floor((g[3] - a[1]) / f);
            h[this.o ? "I" : "X"] = Math.floor((a[0] - g[0]) / f);
            h[this.o ? "J" : "Y"] = d;
            return Ox(this, b, e, g, 1, c, h)
        }
    };
    k.cg = function () {
        return this.B
    };
    k.Rb = function (a, b, c) {
        return this.S + X.prototype.Rb.call(this, a, b, c)
    };
    k.To = function () {
        return this.i
    };
    function Ox(a, b, c, d, e, f, g) {
        var h = a.urls;
        if (h) {
            g.WIDTH = c[0];
            g.HEIGHT = c[1];
            g[a.o ? "CRS" : "SRS"] = f.qb;
            "STYLES" in a.i || (g.STYLES = "");
            if (1 != e)switch (a.C) {
                case "geoserver":
                    c = 90 * e + .5 | 0;
                    g.FORMAT_OPTIONS = "FORMAT_OPTIONS" in g ? g.FORMAT_OPTIONS + (";dpi:" + c) : "dpi:" + c;
                    break;
                case "mapserver":
                    g.MAP_RESOLUTION = 90 * e;
                    break;
                case "carmentaserver":
                case "qgis":
                    g.DPI = 90 * e;
                    break;
                default:
                    va(!1, 52)
            }
            f = f.a;
            a.o && "ne" == f.substr(0, 2) && (a = d[0], d[0] = d[1], d[1] = a, a = d[2], d[2] = d[3], d[3] = a);
            g.BBOX = d.join(",");
            return gx(1 == h.length ? h[0] : h[Ga((b[1] <<
                b[0]) + b[2], h.length)], g)
        }
    }

    k.Oc = function (a) {
        return this.U && void 0 !== this.C ? a : 1
    };
    function Lx(a) {
        var b = 0, c = [];
        if (a.urls) {
            var d;
            var e = 0;
            for (d = a.urls.length; e < d; ++e)c[b++] = a.urls[e]
        }
        a.S = c.join("#")
    }

    function Nx(a) {
        var b = 0, c = [], d;
        for (d in a.i)c[b++] = d + "-" + a.i[d];
        return c.join("/")
    }

    k.Hc = function (a, b, c) {
        var d = this.tileGrid;
        d || (d = this.Ta(c));
        if (!(d.b.length <= a[0])) {
            1 == b || this.U && void 0 !== this.C || (b = 1);
            var e = d.Ca(a[0]), f = d.Fa(a, this.ga);
            d = Ka(d.eb(a[0]), this.l);
            var g = this.B;
            g && (d = Ia(d, g, this.l), f = Oa(f, e * g, f));
            1 != b && (d = Ja(d, b, this.l));
            e = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
            rb(e, this.i);
            return Ox(this, a, d, f, b, c, e)
        }
    };
    k.ib = function (a) {
        X.prototype.ib.call(this, a);
        Lx(this)
    };
    k.Uo = function (a) {
        rb(this.i, a);
        Lx(this);
        Mx(this);
        Sw(this, Nx(this))
    };
    function Mx(a) {
        a.o = 0 <= af(a.i.VERSION || "1.3.0")
    };
    function Px(a, b, c, d, e, f, g, h, l, m, n, p, q, t) {
        et.call(this, a, b);
        this.j = {};
        this.l = {};
        this.c = m;
        this.f = [];
        this.u = c;
        this.v = f;
        this.g = [];
        this.o = [];
        if (f) {
            var u = l.Fa(f), x = l.Ca(a[0]);
            h.Yf(u, h.uc(x), function (a) {
                var b = nb(u, h.Fa(a));
                if (.5 <= jb(b) / x && .5 <= kb(b) / x) {
                    b = a.toString();
                    var c = m[b];
                    c || (c = g(a, n, p), c = m[b] = new q(a, void 0 == c ? 4 : 0, void 0 == c ? "" : c, d, e), this.o.push(y(c, "change", t)));
                    c.g++;
                    this.f.push(b)
                }
            }.bind(this))
        }
    }

    v(Px, et);
    k = Px.prototype;
    k.ka = function () {
        for (var a = 0, b = this.f.length; a < b; ++a) {
            var c = this.f[a], d = this.c[c];
            d.g--;
            d.g || (delete this.c[c], Pc(d))
        }
        this.f.length = 0;
        this.c = null;
        1 == this.state && (this.g.forEach(Gc), this.g.length = 0);
        this.a && Pc(this.a);
        this.state = 5;
        this.s();
        this.o.forEach(Gc);
        this.o.length = 0;
        et.prototype.ka.call(this)
    };
    function Fw(a, b) {
        b = w(b).toString();
        b in a.j || (a.j[b] = ld());
        return a.j[b]
    }

    k.Y = function (a) {
        return -1 == Dw(this, a).Tg ? null : Fw(this, a).canvas
    };
    function Dw(a, b) {
        b = w(b).toString();
        b in a.l || (a.l[b] = {Td: !1, Sg: null, xf: -1, Tg: -1});
        return a.l[b]
    }

    k.fb = function () {
        return this.f.join("/") + "/" + this.u
    };
    k.load = function () {
        var a = 0;
        0 == this.state && ht(this, 1);
        1 == this.state && this.f.forEach(function (b) {
            var c = this.c[b];
            0 == c.state && (c.Xg(this.R), c.load());
            if (1 == c.state) {
                var d = y(c, "change", function () {
                    var b = c.getState();
                    if (2 == b || 3 == b) {
                        --a;
                        Gc(d);
                        b = this.g;
                        var f = b.indexOf(d);
                        -1 < f && b.splice(f, 1);
                        a || this.zh()
                    }
                }.bind(this));
                this.g.push(d);
                ++a
            }
        }.bind(this));
        a || setTimeout(this.zh.bind(this), 0)
    };
    k.zh = function () {
        for (var a = !1, b = this.f.length, c,
                 d = b - 1; 0 <= d; --d)c = this.c[this.f[d]].getState(), 2 != c && (3 == c && (a = !0), --b);
        ht(this, 0 < b ? 2 : a ? 3 : 4)
    };
    function Qx(a, b) {
        a.Xg(Wl(b, a.o, a.np.bind(a), a.mp.bind(a)))
    };
    function Rx(a, b, c, d, e) {
        et.call(this, a, b);
        this.g = 0;
        this.l = null;
        this.o = d;
        this.c = null;
        this.j = {};
        this.R = e;
        this.v = c
    }

    v(Rx, et);
    k = Rx.prototype;
    k.ka = function () {
        this.c = null;
        this.j = {};
        this.state = 5;
        this.s();
        et.prototype.ka.call(this)
    };
    k.G = function () {
        return this.l || Sx
    };
    k.Zm = function () {
        return this.o
    };
    k.Ym = function () {
        return this.c
    };
    k.fb = function () {
        return this.v
    };
    k.$m = function () {
        return this.f
    };
    function Gw(a, b, c) {
        return a.j[w(b) + "," + c]
    }

    k.load = function () {
        0 == this.state && (ht(this, 1), this.R(this, this.v), this.u(null, NaN, null))
    };
    k.np = function (a, b, c) {
        this.qg(b);
        this.wj(a);
        this.hi(c)
    };
    k.mp = function () {
        ht(this, 3)
    };
    k.hi = function (a) {
        this.l = a
    };
    k.wj = function (a) {
        this.c = a;
        ht(this, 2)
    };
    k.qg = function (a) {
        this.f = a
    };
    k.Xg = function (a) {
        this.u = a
    };
    var Sx = [0, 0, 4096, 4096];

    function Tx(a) {
        var b = a.projection || "EPSG:3857", c = a.extent || zc(b), d = a.tileGrid || xc({
                extent: c,
                maxZoom: a.maxZoom || 22,
                minZoom: a.minZoom,
                tileSize: a.tileSize || 512
            });
        Vw.call(this, {
            attributions: a.attributions,
            cacheSize: void 0 !== a.cacheSize ? a.cacheSize : 128,
            extent: c,
            logo: a.logo,
            opaque: !1,
            projection: b,
            state: a.state,
            tileGrid: d,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : Qx,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 === a.wrapX ? !0 : a.wrapX
        });
        this.g = a.format ? a.format : null;
        this.v =
            {};
        this.o = void 0 == a.overlaps ? !0 : a.overlaps;
        this.tileClass = a.tileClass ? a.tileClass : Rx;
        this.i = {};
        this.tileGrid || (this.tileGrid = this.Ta(Wb(a.projection || "EPSG:3857")))
    }

    v(Tx, Vw);
    Tx.prototype.Qc = function (a, b, c, d, e) {
        var f = this.Rb(a, b, c);
        if (this.a.b.hasOwnProperty(f))return this.a.get(f);
        a = [a, b, c];
        c = (b = Tw(this, a, e)) ? this.tileUrlFunction(b, d, e) : void 0;
        d = new Px(a, void 0 !== c ? 0 : 4, void 0 !== c ? c : "", this.g, this.tileLoadFunction, b, this.tileUrlFunction, this.tileGrid, this.Ta(e), this.v, d, e, this.tileClass, this.Vi.bind(this));
        this.a.set(f, d);
        return d
    };
    Tx.prototype.Ta = function (a) {
        var b = a.qb, c = this.i[b];
        c || (c = this.tileGrid, c = this.i[b] = wc(a, void 0, c ? c.eb(c.minZoom) : void 0));
        return c
    };
    Tx.prototype.Oc = function (a) {
        return a
    };
    Tx.prototype.ce = function (a, b, c) {
        a = Ka(this.Ta(c).eb(a));
        return [Math.round(a[0] * b), Math.round(a[1] * b)]
    };
    function Ux(a) {
        this.l = a.matrixIds;
        mc.call(this, {
            extent: a.extent,
            origin: a.origin,
            origins: a.origins,
            resolutions: a.resolutions,
            tileSize: a.tileSize,
            tileSizes: a.tileSizes,
            sizes: a.sizes
        })
    }

    v(Ux, mc);
    Ux.prototype.o = function () {
        return this.l
    };
    function Vx(a, b, c) {
        var d = [], e = [], f = [], g = [], h = [], l = void 0 !== c ? c : [];
        c = Wb(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var m = c.Nc(), n = "ne" == c.a.substr(0, 2);
        a.TileMatrix.sort(function (a, b) {
            return b.ScaleDenominator - a.ScaleDenominator
        });
        a.TileMatrix.forEach(function (a) {
            var b;
            0 < l.length ? b = la(l, function (b) {
                return a.Identifier == b.TileMatrix
            }) : b = !0;
            if (b) {
                e.push(a.Identifier);
                b = 2.8E-4 * a.ScaleDenominator / m;
                var c = a.TileWidth, p = a.TileHeight;
                n ? f.push([a.TopLeftCorner[1], a.TopLeftCorner[0]]) :
                    f.push(a.TopLeftCorner);
                d.push(b);
                g.push(c == p ? c : [c, p]);
                h.push([a.MatrixWidth, -a.MatrixHeight])
            }
        });
        return new Ux({extent: b, origins: f, resolutions: d, matrixIds: e, tileSizes: g, sizes: h})
    };
    function Z(a) {
        function b(a) {
            a = "KVP" == d ? gx(a, f) : a.replace(/\{(\w+?)\}/g, function (a, b) {
                return b.toLowerCase() in f ? f[b.toLowerCase()] : a
            });
            return function (b) {
                if (b) {
                    var c = {TileMatrix: e.l[b[0]], TileCol: b[1], TileRow: -b[2] - 1};
                    rb(c, g);
                    b = a;
                    return b = "KVP" == d ? gx(b, c) : b.replace(/\{(\w+?)\}/g, function (a, b) {
                        return c[b]
                    })
                }
            }
        }

        this.ga = void 0 !== a.version ? a.version : "1.0.0";
        this.B = void 0 !== a.format ? a.format : "image/jpeg";
        this.i = a.dimensions ? a.dimensions : {};
        this.C = a.layer;
        this.o = a.matrixSet;
        this.S = a.style;
        var c = a.urls;
        void 0 ===
        c && void 0 !== a.url && (c = Ow(a.url));
        var d = this.U = void 0 !== a.requestEncoding ? a.requestEncoding : "KVP", e = a.tileGrid,
            f = {layer: this.C, style: this.S, tilematrixset: this.o};
        "KVP" == d && rb(f, {Service: "WMTS", Request: "GetTile", Version: this.ga, Format: this.B});
        var g = this.i, h = c && 0 < c.length ? Mw(c.map(b)) : Nw;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: e,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: h,
            urls: c,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !1
        });
        Sw(this, Wx(this))
    }

    v(Z, X);
    k = Z.prototype;
    k.Xk = function () {
        return this.i
    };
    k.Vo = function () {
        return this.B
    };
    k.Wo = function () {
        return this.C
    };
    k.ll = function () {
        return this.o
    };
    k.wl = function () {
        return this.U
    };
    k.Xo = function () {
        return this.S
    };
    k.Dl = function () {
        return this.ga
    };
    function Wx(a) {
        var b = 0, c = [], d;
        for (d in a.i)c[b++] = d + "-" + a.i[d];
        return c.join("/")
    }

    k.Iq = function (a) {
        rb(this.i, a);
        Sw(this, Wx(this))
    };
    function Xx(a) {
        a = a || {};
        var b = a.size, c = b[0], d = b[1], e = [], f = 256;
        switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation : Yx) {
            case Yx:
                for (; c > f || d > f;)e.push([Math.ceil(c / f), Math.ceil(d / f)]), f += f;
                break;
            case Zx:
                for (; c > f || d > f;)e.push([Math.ceil(c / f), Math.ceil(d / f)]), c >>= 1, d >>= 1;
                break;
            default:
                va(!1, 53)
        }
        e.push([1, 1]);
        e.reverse();
        f = [1];
        var g = [0];
        d = 1;
        for (c = e.length; d < c; d++)f.push(1 << d), g.push(e[d - 1][0] * e[d - 1][1] + g[d - 1]);
        f.reverse();
        b = [0, -b[1], b[0], 0];
        b = new mc({extent: b, origin: gb(b), resolutions: f});
        (f = a.url) &&
        -1 == f.indexOf("{TileGroup}") && (f += "{TileGroup}/{z}-{x}-{y}.jpg");
        f = Ow(f);
        f = Mw(f.map(function (a) {
            return function (b) {
                if (b) {
                    var c = b[0], d = b[1];
                    b = -b[2] - 1;
                    var f = {z: c, x: d, y: b, TileGroup: "TileGroup" + ((d + b * e[c][0] + g[c]) / 256 | 0)};
                    return a.replace(/\{(\w+?)\}/g, function (a, b) {
                        return f[b]
                    })
                }
            }
        }));
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: $x,
            tileGrid: b,
            tileUrlFunction: f
        })
    }

    v(Xx, X);
    function $x(a, b, c, d, e) {
        it.call(this, a, b, c, d, e);
        this.f = null
    }

    v($x, it);
    $x.prototype.Y = function () {
        if (this.f)return this.f;
        var a = it.prototype.Y.call(this);
        if (2 == this.state) {
            if (256 == a.width && 256 == a.height)return this.f = a;
            var b = ld(256, 256);
            b.drawImage(a, 0, 0);
            return this.f = b.canvas
        }
        return a
    };
    var Yx = "default", Zx = "truncated";
    ua.prototype.code = ua.prototype.code;
    r("ol.Attribution", Cc);
    Cc.prototype.getHTML = Cc.prototype.f;
    r("ol.Collection", $c);
    $c.prototype.clear = $c.prototype.clear;
    $c.prototype.extend = $c.prototype.ng;
    $c.prototype.forEach = $c.prototype.forEach;
    $c.prototype.getArray = $c.prototype.Hm;
    $c.prototype.item = $c.prototype.item;
    $c.prototype.getLength = $c.prototype.ec;
    $c.prototype.insertAt = $c.prototype.Se;
    $c.prototype.pop = $c.prototype.pop;
    $c.prototype.push = $c.prototype.push;
    $c.prototype.remove = $c.prototype.remove;
    $c.prototype.removeAt = $c.prototype.Pg;
    $c.prototype.setAt = $c.prototype.jq;
    dd.prototype.element = dd.prototype.element;
    r("ol.color.asArray", gd);
    r("ol.color.asString", id);
    r("ol.colorlike.asColorLike", kd);
    r("ol.control.defaults", zd);
    r("ol.coordinate.add", bf);
    r("ol.coordinate.createStringXY", function (a) {
        return function (b) {
            return nf(b, a)
        }
    });
    r("ol.coordinate.format", ff);
    r("ol.coordinate.rotate", hf);
    r("ol.coordinate.toStringHDMS", function (a, b) {
        return a ? ef("NS", a[1], b) + " " + ef("EW", a[0], b) : ""
    });
    r("ol.coordinate.toStringXY", nf);
    r("ol.DeviceOrientation", jl);
    jl.prototype.getAlpha = jl.prototype.Qk;
    jl.prototype.getBeta = jl.prototype.Tk;
    jl.prototype.getGamma = jl.prototype.$k;
    jl.prototype.getHeading = jl.prototype.Im;
    jl.prototype.getTracking = jl.prototype.bi;
    jl.prototype.setTracking = jl.prototype.og;
    r("ol.easing.easeIn", sd);
    r("ol.easing.easeOut", td);
    r("ol.easing.inAndOut", ud);
    r("ol.easing.linear", vd);
    r("ol.easing.upAndDown", function (a) {
        return .5 > a ? ud(2 * a) : 1 - ud(2 * (a - .5))
    });
    r("ol.extent.boundingExtent", La);
    r("ol.extent.buffer", Oa);
    r("ol.extent.containsCoordinate", Ra);
    r("ol.extent.containsExtent", Ta);
    r("ol.extent.containsXY", Sa);
    r("ol.extent.createEmpty", Ma);
    r("ol.extent.equals", ab);
    r("ol.extent.extend", bb);
    r("ol.extent.getArea", hb);
    r("ol.extent.getBottomLeft", db);
    r("ol.extent.getBottomRight", eb);
    r("ol.extent.getCenter", lb);
    r("ol.extent.getHeight", kb);
    r("ol.extent.getIntersection", nb);
    r("ol.extent.getSize", function (a) {
        return [a[2] - a[0], a[3] - a[1]]
    });
    r("ol.extent.getTopLeft", gb);
    r("ol.extent.getTopRight", fb);
    r("ol.extent.getWidth", jb);
    r("ol.extent.intersects", ob);
    r("ol.extent.isEmpty", ib);
    r("ol.extent.applyTransform", qb);
    r("ol.Feature", Bl);
    Bl.prototype.clone = Bl.prototype.clone;
    Bl.prototype.getGeometry = Bl.prototype.W;
    Bl.prototype.getId = Bl.prototype.Km;
    Bl.prototype.getGeometryName = Bl.prototype.bl;
    Bl.prototype.getStyle = Bl.prototype.Lm;
    Bl.prototype.getStyleFunction = Bl.prototype.bb;
    Bl.prototype.setGeometry = Bl.prototype.Ra;
    Bl.prototype.setStyle = Bl.prototype.pg;
    Bl.prototype.setId = Bl.prototype.kc;
    Bl.prototype.setGeometryName = Bl.prototype.Wc;
    r("ol.featureloader.xhr", Xl);
    r("ol.Geolocation", Rs);
    Rs.prototype.getAccuracy = Rs.prototype.Ok;
    Rs.prototype.getAccuracyGeometry = Rs.prototype.Pk;
    Rs.prototype.getAltitude = Rs.prototype.Rk;
    Rs.prototype.getAltitudeAccuracy = Rs.prototype.Sk;
    Rs.prototype.getHeading = Rs.prototype.Mm;
    Rs.prototype.getPosition = Rs.prototype.Nm;
    Rs.prototype.getProjection = Rs.prototype.ci;
    Rs.prototype.getSpeed = Rs.prototype.xl;
    Rs.prototype.getTracking = Rs.prototype.di;
    Rs.prototype.getTrackingOptions = Rs.prototype.Ph;
    Rs.prototype.setProjection = Rs.prototype.ei;
    Rs.prototype.setTracking = Rs.prototype.Ve;
    Rs.prototype.setTrackingOptions = Rs.prototype.Gj;
    r("ol.Graticule", Xs);
    Xs.prototype.getMap = Xs.prototype.Qm;
    Xs.prototype.getMeridians = Xs.prototype.ml;
    Xs.prototype.getParallels = Xs.prototype.tl;
    Xs.prototype.setMap = Xs.prototype.setMap;
    r("ol.has.DEVICE_PIXEL_RATIO", Ud);
    r("ol.has.CANVAS", Wd);
    r("ol.has.DEVICE_ORIENTATION", Xd);
    r("ol.has.GEOLOCATION", Yd);
    r("ol.has.TOUCH", Zd);
    r("ol.has.WEBGL", Od);
    ct.prototype.getImage = ct.prototype.Y;
    ct.prototype.load = ct.prototype.load;
    it.prototype.getImage = it.prototype.Y;
    r("ol.inherits", v);
    r("ol.interaction.defaults", wh);
    r("ol.Kinetic", pg);
    r("ol.loadingstrategy.all", wu);
    r("ol.loadingstrategy.bbox", function (a) {
        return [a]
    });
    r("ol.loadingstrategy.tile", function (a) {
        return function (b, c) {
            c = a.uc(c);
            b = pc(a, b, c);
            var d = [];
            c = [c, 0, 0];
            for (c[1] = b.ca; c[1] <= b.da; ++c[1])for (c[2] = b.ea; c[2] <= b.ha; ++c[2])d.push(a.Fa(c));
            return d
        }
    });
    r("ol.Map", H);
    H.prototype.addControl = H.prototype.vk;
    H.prototype.addInteraction = H.prototype.wk;
    H.prototype.addLayer = H.prototype.nh;
    H.prototype.addOverlay = H.prototype.oh;
    H.prototype.forEachFeatureAtPixel = H.prototype.Wd;
    H.prototype.getFeaturesAtPixel = H.prototype.Yk;
    H.prototype.forEachLayerAtPixel = H.prototype.Wm;
    H.prototype.hasFeatureAtPixel = H.prototype.lm;
    H.prototype.getEventCoordinate = H.prototype.$f;
    H.prototype.getEventPixel = H.prototype.He;
    H.prototype.getTarget = H.prototype.ig;
    H.prototype.getTargetElement = H.prototype.pd;
    H.prototype.getCoordinateFromPixel = H.prototype.Xa;
    H.prototype.getControls = H.prototype.Wk;
    H.prototype.getOverlays = H.prototype.rl;
    H.prototype.getOverlayById = H.prototype.ql;
    H.prototype.getInteractions = H.prototype.dl;
    H.prototype.getLayerGroup = H.prototype.Mc;
    H.prototype.getLayers = H.prototype.fi;
    H.prototype.getPixelFromCoordinate = H.prototype.Ka;
    H.prototype.getSize = H.prototype.Mb;
    H.prototype.getView = H.prototype.$;
    H.prototype.getViewport = H.prototype.El;
    H.prototype.renderSync = H.prototype.gq;
    H.prototype.render = H.prototype.render;
    H.prototype.removeControl = H.prototype.Zp;
    H.prototype.removeInteraction = H.prototype.$p;
    H.prototype.removeLayer = H.prototype.bq;
    H.prototype.removeOverlay = H.prototype.cq;
    H.prototype.setLayerGroup = H.prototype.Aj;
    H.prototype.setSize = H.prototype.Yg;
    H.prototype.setTarget = H.prototype.We;
    H.prototype.setView = H.prototype.wq;
    H.prototype.updateSize = H.prototype.Fd;
    Ld.prototype.originalEvent = Ld.prototype.originalEvent;
    Ld.prototype.pixel = Ld.prototype.pixel;
    Ld.prototype.coordinate = Ld.prototype.coordinate;
    Ld.prototype.dragging = Ld.prototype.dragging;
    Kd.prototype.map = Kd.prototype.map;
    Kd.prototype.frameState = Kd.prototype.frameState;
    r("ol.Object", Vc);
    Vc.prototype.get = Vc.prototype.get;
    Vc.prototype.getKeys = Vc.prototype.O;
    Vc.prototype.getProperties = Vc.prototype.N;
    Vc.prototype.set = Vc.prototype.set;
    Vc.prototype.setProperties = Vc.prototype.H;
    Vc.prototype.unset = Vc.prototype.P;
    Zc.prototype.key = Zc.prototype.key;
    Zc.prototype.oldValue = Zc.prototype.oldValue;
    r("ol.Observable", Uc);
    r("ol.Observable.unByKey", function (a) {
        if (Array.isArray(a))for (var b = 0, c = a.length; b < c; ++b)Gc(a[b]); else Gc(a)
    });
    Uc.prototype.changed = Uc.prototype.s;
    Uc.prototype.dispatchEvent = Uc.prototype.b;
    Uc.prototype.getRevision = Uc.prototype.L;
    Uc.prototype.on = Uc.prototype.J;
    Uc.prototype.once = Uc.prototype.once;
    Uc.prototype.un = Uc.prototype.K;
    r("ol.Overlay", Lk);
    Lk.prototype.getElement = Lk.prototype.Yd;
    Lk.prototype.getId = Lk.prototype.Xm;
    Lk.prototype.getMap = Lk.prototype.Xe;
    Lk.prototype.getOffset = Lk.prototype.Lh;
    Lk.prototype.getPosition = Lk.prototype.gi;
    Lk.prototype.getPositioning = Lk.prototype.Mh;
    Lk.prototype.setElement = Lk.prototype.vj;
    Lk.prototype.setMap = Lk.prototype.setMap;
    Lk.prototype.setOffset = Lk.prototype.Bj;
    Lk.prototype.setPosition = Lk.prototype.Ye;
    Lk.prototype.setPositioning = Lk.prototype.Ej;
    r("ol.proj.METERS_PER_UNIT", Bb);
    r("ol.proj.setProj4", function (a) {
        Cb = a
    });
    r("ol.proj.getPointResolution", Ub);
    r("ol.proj.addEquivalentProjections", Yb);
    r("ol.proj.addProjection", Zb);
    r("ol.proj.addCoordinateTransforms", cc);
    r("ol.proj.fromLonLat", function (a, b) {
        return hc(a, "EPSG:4326", void 0 !== b ? b : "EPSG:3857")
    });
    r("ol.proj.toLonLat", function (a, b) {
        return hc(a, void 0 !== b ? b : "EPSG:3857", "EPSG:4326")
    });
    r("ol.proj.get", Wb);
    r("ol.proj.equivalent", ec);
    r("ol.proj.getTransform", fc);
    r("ol.proj.transform", hc);
    r("ol.proj.transformExtent", ic);
    r("ol.render.toContext", function (a, b) {
        var c = a.canvas, d = b ? b : {};
        b = d.pixelRatio || Ud;
        if (d = d.size) c.width = d[0] * b, c.height = d[1] * b, c.style.width = d[0] + "px", c.style.height = d[1] + "px";
        c = [0, 0, c.width, c.height];
        d = Ph(Ih(), b, b);
        return new di(a, b, c, d, 0)
    });
    r("ol.size.toSize", Ka);
    r("ol.Sphere", vb);
    vb.prototype.geodesicArea = vb.prototype.a;
    vb.prototype.haversineDistance = vb.prototype.b;
    r("ol.Sphere.getLength", yb);
    r("ol.Sphere.getArea", Ab);
    et.prototype.getTileCoord = et.prototype.i;
    et.prototype.load = et.prototype.load;
    r("ol.tilegrid.createXYZ", xc);
    Rx.prototype.getFormat = Rx.prototype.Zm;
    Rx.prototype.getFeatures = Rx.prototype.Ym;
    Rx.prototype.getProjection = Rx.prototype.$m;
    Rx.prototype.setExtent = Rx.prototype.hi;
    Rx.prototype.setFeatures = Rx.prototype.wj;
    Rx.prototype.setProjection = Rx.prototype.qg;
    Rx.prototype.setLoader = Rx.prototype.Xg;
    r("ol.View", F);
    F.prototype.animate = F.prototype.animate;
    F.prototype.getAnimating = F.prototype.Kc;
    F.prototype.getInteracting = F.prototype.cl;
    F.prototype.cancelAnimations = F.prototype.hd;
    F.prototype.constrainCenter = F.prototype.Gc;
    F.prototype.constrainResolution = F.prototype.constrainResolution;
    F.prototype.constrainRotation = F.prototype.constrainRotation;
    F.prototype.getCenter = F.prototype.xa;
    F.prototype.calculateExtent = F.prototype.gd;
    F.prototype.getMaxResolution = F.prototype.an;
    F.prototype.getMinResolution = F.prototype.cn;
    F.prototype.getMaxZoom = F.prototype.bn;
    F.prototype.setMaxZoom = F.prototype.rq;
    F.prototype.getMinZoom = F.prototype.dn;
    F.prototype.setMinZoom = F.prototype.sq;
    F.prototype.getProjection = F.prototype.en;
    F.prototype.getResolution = F.prototype.Pa;
    F.prototype.getResolutions = F.prototype.fn;
    F.prototype.getResolutionForExtent = F.prototype.Ke;
    F.prototype.getRotation = F.prototype.Qa;
    F.prototype.getZoom = F.prototype.Qh;
    F.prototype.getZoomForResolution = F.prototype.Ne;
    F.prototype.getResolutionForZoom = F.prototype.Oh;
    F.prototype.fit = F.prototype.Xf;
    F.prototype.centerOn = F.prototype.Fk;
    F.prototype.rotate = F.prototype.rotate;
    F.prototype.setCenter = F.prototype.rb;
    F.prototype.setResolution = F.prototype.Yc;
    F.prototype.setRotation = F.prototype.Ze;
    F.prototype.setZoom = F.prototype.zq;
    r("ol.xml.getAllTextContent", Fl);
    r("ol.xml.parse", Jl);
    Vi.prototype.getGL = Vi.prototype.jp;
    Vi.prototype.useProgram = Vi.prototype.Tc;
    r("ol.tilegrid.TileGrid", mc);
    mc.prototype.forEachTileCoord = mc.prototype.Yf;
    mc.prototype.getMaxZoom = mc.prototype.cj;
    mc.prototype.getMinZoom = mc.prototype.dj;
    mc.prototype.getOrigin = mc.prototype.Sc;
    mc.prototype.getResolution = mc.prototype.Ca;
    mc.prototype.getResolutions = mc.prototype.ej;
    mc.prototype.getTileCoordExtent = mc.prototype.Fa;
    mc.prototype.getTileCoordForCoordAndResolution = mc.prototype.Me;
    mc.prototype.getTileCoordForCoordAndZ = mc.prototype.kg;
    mc.prototype.getTileSize = mc.prototype.eb;
    mc.prototype.getZForResolution = mc.prototype.uc;
    r("ol.tilegrid.WMTS", Ux);
    Ux.prototype.getMatrixIds = Ux.prototype.o;
    r("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", Vx);
    r("ol.style.AtlasManager", nk);
    r("ol.style.Circle", tl);
    tl.prototype.setRadius = tl.prototype.Xc;
    r("ol.style.Fill", ul);
    ul.prototype.clone = ul.prototype.clone;
    ul.prototype.getColor = ul.prototype.f;
    ul.prototype.setColor = ul.prototype.c;
    r("ol.style.Icon", yo);
    yo.prototype.clone = yo.prototype.clone;
    yo.prototype.getAnchor = yo.prototype.Jc;
    yo.prototype.getColor = yo.prototype.Yo;
    yo.prototype.getImage = yo.prototype.Y;
    yo.prototype.getOrigin = yo.prototype.Rc;
    yo.prototype.getSrc = yo.prototype.Zo;
    yo.prototype.getSize = yo.prototype.ic;
    yo.prototype.load = yo.prototype.load;
    r("ol.style.Image", ql);
    ql.prototype.getOpacity = ql.prototype.jf;
    ql.prototype.getRotateWithView = ql.prototype.kf;
    ql.prototype.getRotation = ql.prototype.lf;
    ql.prototype.getScale = ql.prototype.mf;
    ql.prototype.getSnapToPixel = ql.prototype.Le;
    ql.prototype.setOpacity = ql.prototype.zd;
    ql.prototype.setRotation = ql.prototype.nf;
    ql.prototype.setScale = ql.prototype.Ad;
    r("ol.style.RegularShape", rl);
    rl.prototype.clone = rl.prototype.clone;
    rl.prototype.getAnchor = rl.prototype.Jc;
    rl.prototype.getAngle = rl.prototype.Zi;
    rl.prototype.getFill = rl.prototype.Da;
    rl.prototype.getImage = rl.prototype.Y;
    rl.prototype.getOrigin = rl.prototype.Rc;
    rl.prototype.getPoints = rl.prototype.$i;
    rl.prototype.getRadius = rl.prototype.aj;
    rl.prototype.getRadius2 = rl.prototype.Nh;
    rl.prototype.getSize = rl.prototype.ic;
    rl.prototype.getStroke = rl.prototype.Ea;
    r("ol.style.Stroke", Ej);
    Ej.prototype.clone = Ej.prototype.clone;
    Ej.prototype.getColor = Ej.prototype.$o;
    Ej.prototype.getLineCap = Ej.prototype.gl;
    Ej.prototype.getLineDash = Ej.prototype.ap;
    Ej.prototype.getLineDashOffset = Ej.prototype.hl;
    Ej.prototype.getLineJoin = Ej.prototype.il;
    Ej.prototype.getMiterLimit = Ej.prototype.nl;
    Ej.prototype.getWidth = Ej.prototype.bp;
    Ej.prototype.setColor = Ej.prototype.cp;
    Ej.prototype.setLineCap = Ej.prototype.oq;
    Ej.prototype.setLineDash = Ej.prototype.setLineDash;
    Ej.prototype.setLineDashOffset = Ej.prototype.pq;
    Ej.prototype.setLineJoin = Ej.prototype.qq;
    Ej.prototype.setMiterLimit = Ej.prototype.tq;
    Ej.prototype.setWidth = Ej.prototype.xq;
    r("ol.style.Style", vl);
    vl.prototype.clone = vl.prototype.clone;
    vl.prototype.getRenderer = vl.prototype.Je;
    vl.prototype.setRenderer = vl.prototype.uq;
    vl.prototype.getGeometry = vl.prototype.W;
    vl.prototype.getGeometryFunction = vl.prototype.al;
    vl.prototype.getFill = vl.prototype.Da;
    vl.prototype.setFill = vl.prototype.zf;
    vl.prototype.getImage = vl.prototype.Y;
    vl.prototype.setImage = vl.prototype.Wg;
    vl.prototype.getStroke = vl.prototype.Ea;
    vl.prototype.setStroke = vl.prototype.Af;
    vl.prototype.getText = vl.prototype.Ja;
    vl.prototype.setText = vl.prototype.Dd;
    vl.prototype.getZIndex = vl.prototype.za;
    vl.prototype.setGeometry = vl.prototype.Ra;
    vl.prototype.setZIndex = vl.prototype.Wb;
    r("ol.style.Text", zo);
    zo.prototype.clone = zo.prototype.clone;
    zo.prototype.getFont = zo.prototype.Zk;
    zo.prototype.getOffsetX = zo.prototype.ol;
    zo.prototype.getOffsetY = zo.prototype.pl;
    zo.prototype.getFill = zo.prototype.Da;
    zo.prototype.getRotateWithView = zo.prototype.ep;
    zo.prototype.getRotation = zo.prototype.fp;
    zo.prototype.getScale = zo.prototype.gp;
    zo.prototype.getStroke = zo.prototype.Ea;
    zo.prototype.getText = zo.prototype.Ja;
    zo.prototype.getTextAlign = zo.prototype.zl;
    zo.prototype.getTextBaseline = zo.prototype.Al;
    zo.prototype.setFont = zo.prototype.xj;
    zo.prototype.setOffsetX = zo.prototype.Cj;
    zo.prototype.setOffsetY = zo.prototype.Dj;
    zo.prototype.setFill = zo.prototype.zf;
    zo.prototype.setRotation = zo.prototype.hp;
    zo.prototype.setScale = zo.prototype.bj;
    zo.prototype.setStroke = zo.prototype.Af;
    zo.prototype.setText = zo.prototype.Dd;
    zo.prototype.setTextAlign = zo.prototype.Fj;
    zo.prototype.setTextBaseline = zo.prototype.vq;
    r("ol.source.BingMaps", Zw);
    r("ol.source.BingMaps.TOS_ATTRIBUTION", $w);
    Zw.prototype.getApiKey = Zw.prototype.U;
    Zw.prototype.getImagerySet = Zw.prototype.ga;
    r("ol.source.CartoDB", bx);
    bx.prototype.getConfig = bx.prototype.Vk;
    bx.prototype.updateConfig = bx.prototype.Hq;
    bx.prototype.setConfig = bx.prototype.kq;
    r("ol.source.Cluster", Y);
    Y.prototype.getDistance = Y.prototype.po;
    Y.prototype.getSource = Y.prototype.qo;
    Y.prototype.setDistance = Y.prototype.lq;
    r("ol.source.Image", dw);
    fw.prototype.image = fw.prototype.image;
    r("ol.source.ImageArcGISRest", hx);
    hx.prototype.getParams = hx.prototype.so;
    hx.prototype.getImageLoadFunction = hx.prototype.ro;
    hx.prototype.getUrl = hx.prototype.to;
    hx.prototype.setImageLoadFunction = hx.prototype.uo;
    hx.prototype.setUrl = hx.prototype.vo;
    hx.prototype.updateParams = hx.prototype.wo;
    r("ol.source.ImageCanvas", kw);
    r("ol.source.ImageMapGuide", ix);
    ix.prototype.getParams = ix.prototype.yo;
    ix.prototype.getImageLoadFunction = ix.prototype.xo;
    ix.prototype.updateParams = ix.prototype.Ao;
    ix.prototype.setImageLoadFunction = ix.prototype.zo;
    r("ol.source.ImageStatic", jx);
    r("ol.source.ImageVector", lw);
    lw.prototype.getSource = lw.prototype.Bo;
    lw.prototype.getStyle = lw.prototype.Co;
    lw.prototype.getStyleFunction = lw.prototype.bb;
    lw.prototype.setStyle = lw.prototype.Si;
    r("ol.source.ImageWMS", kx);
    kx.prototype.getGetFeatureInfoUrl = kx.prototype.Fo;
    kx.prototype.getParams = kx.prototype.Ho;
    kx.prototype.getImageLoadFunction = kx.prototype.Go;
    kx.prototype.getUrl = kx.prototype.Io;
    kx.prototype.setImageLoadFunction = kx.prototype.Jo;
    kx.prototype.setUrl = kx.prototype.Ko;
    kx.prototype.updateParams = kx.prototype.Lo;
    r("ol.source.OSM", ox);
    r("ol.source.OSM.ATTRIBUTION", px);
    r("ol.source.Raster", qx);
    qx.prototype.setOperation = qx.prototype.v;
    ux.prototype.extent = ux.prototype.extent;
    ux.prototype.resolution = ux.prototype.resolution;
    ux.prototype.data = ux.prototype.data;
    r("ol.source.Source", xu);
    xu.prototype.getAttributions = xu.prototype.Aa;
    xu.prototype.getLogo = xu.prototype.ya;
    xu.prototype.getProjection = xu.prototype.Ba;
    xu.prototype.getState = xu.prototype.getState;
    xu.prototype.refresh = xu.prototype.ra;
    xu.prototype.setAttributions = xu.prototype.wa;
    r("ol.source.Stamen", xx);
    r("ol.source.Tile", Rw);
    Rw.prototype.getTileGrid = Rw.prototype.cb;
    Uw.prototype.tile = Uw.prototype.tile;
    r("ol.source.TileArcGISRest", Bx);
    Bx.prototype.getParams = Bx.prototype.B;
    Bx.prototype.updateParams = Bx.prototype.C;
    r("ol.source.TileDebug", Dx);
    r("ol.source.TileImage", X);
    X.prototype.setRenderReprojectionEdges = X.prototype.Nb;
    X.prototype.setTileGridForProjection = X.prototype.Ob;
    r("ol.source.TileJSON", Fx);
    Fx.prototype.getTileJSON = Fx.prototype.Bl;
    r("ol.source.TileUTFGrid", Gx);
    Gx.prototype.getTemplate = Gx.prototype.yl;
    Gx.prototype.forDataAtCoordinateAndResolution = Gx.prototype.Kk;
    r("ol.source.TileWMS", Kx);
    Kx.prototype.getGetFeatureInfoUrl = Kx.prototype.So;
    Kx.prototype.getParams = Kx.prototype.To;
    Kx.prototype.updateParams = Kx.prototype.Uo;
    Vw.prototype.getTileLoadFunction = Vw.prototype.tb;
    Vw.prototype.getTileUrlFunction = Vw.prototype.ub;
    Vw.prototype.getUrls = Vw.prototype.vb;
    Vw.prototype.setTileLoadFunction = Vw.prototype.zb;
    Vw.prototype.setTileUrlFunction = Vw.prototype.hb;
    Vw.prototype.setUrl = Vw.prototype.nb;
    Vw.prototype.setUrls = Vw.prototype.ib;
    r("ol.source.Vector", V);
    V.prototype.addFeature = V.prototype.Bb;
    V.prototype.addFeatures = V.prototype.Ec;
    V.prototype.clear = V.prototype.clear;
    V.prototype.forEachFeature = V.prototype.Ah;
    V.prototype.forEachFeatureInExtent = V.prototype.ac;
    V.prototype.forEachFeatureIntersectingExtent = V.prototype.Bh;
    V.prototype.getFeaturesCollection = V.prototype.Ih;
    V.prototype.getFeatures = V.prototype.fe;
    V.prototype.getFeaturesAtCoordinate = V.prototype.Hh;
    V.prototype.getFeaturesInExtent = V.prototype.ag;
    V.prototype.getClosestFeatureToCoordinate = V.prototype.Dh;
    V.prototype.getExtent = V.prototype.G;
    V.prototype.getFeatureById = V.prototype.Gh;
    V.prototype.getFormat = V.prototype.Wi;
    V.prototype.getUrl = V.prototype.Xi;
    V.prototype.removeFeature = V.prototype.Fb;
    Eu.prototype.feature = Eu.prototype.feature;
    r("ol.source.VectorTile", Tx);
    r("ol.source.WMTS", Z);
    Z.prototype.getDimensions = Z.prototype.Xk;
    Z.prototype.getFormat = Z.prototype.Vo;
    Z.prototype.getLayer = Z.prototype.Wo;
    Z.prototype.getMatrixSet = Z.prototype.ll;
    Z.prototype.getRequestEncoding = Z.prototype.wl;
    Z.prototype.getStyle = Z.prototype.Xo;
    Z.prototype.getVersion = Z.prototype.Dl;
    Z.prototype.updateDimensions = Z.prototype.Iq;
    r("ol.source.WMTS.optionsFromCapabilities", function (a, b) {
        var c = la(a.Contents.Layer, function (a) {
            return a.Identifier == b.layer
        });
        if (null === c)return null;
        var d = a.Contents.TileMatrixSet;
        var e = 1 < c.TileMatrixSetLink.length ? "projection" in b ? pa(c.TileMatrixSetLink, function (a) {
            var c = la(d, function (b) {
                return b.Identifier == a.TileMatrixSet
            }).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"), e = Wb(c), f = Wb(b.projection);
            return e && f ? ec(e, f) : c == b.projection
        }) : pa(c.TileMatrixSetLink, function (a) {
            return a.TileMatrixSet ==
                b.matrixSet
        }) : 0;
        0 > e && (e = 0);
        var f = c.TileMatrixSetLink[e].TileMatrixSet;
        var g = c.TileMatrixSetLink[e].TileMatrixSetLimits;
        var h = c.Format[0];
        "format" in b && (h = b.format);
        e = pa(c.Style, function (a) {
            return "style" in b ? a.Title == b.style : a.isDefault
        });
        0 > e && (e = 0);
        e = c.Style[e].Identifier;
        var l = {};
        "Dimension" in c && c.Dimension.forEach(function (a) {
            var b = a.Identifier, c = a.Default;
            void 0 === c && (c = a.Value[0]);
            l[b] = c
        });
        var m = la(a.Contents.TileMatrixSet, function (a) {
            return a.Identifier == f
        });
        var n = "projection" in b ? Wb(b.projection) :
            Wb(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var p = c.WGS84BoundingBox;
        if (void 0 !== p) {
            var q = Wb("EPSG:4326").G();
            q = p[0] == q[0] && p[2] == q[2];
            var t = ic(p, "EPSG:4326", n);
            (p = n.G()) && (Ta(p, t) || (t = void 0))
        }
        g = Vx(m, t, g);
        var u = [];
        m = b.requestEncoding;
        m = void 0 !== m ? m : "";
        if ("OperationsMetadata" in a && "GetTile" in a.OperationsMetadata)for (a = a.OperationsMetadata.GetTile.DCP.HTTP.Get, t = 0, p = a.length; t < p; ++t) {
            var x = la(a[t].Constraint, function (a) {
                return "GetEncoding" == a.name
            }).AllowedValues.Value;
            "" === m && (m = x[0]);
            if ("KVP" === m) ha(x, "KVP") && u.push(a[t].href); else break
        }
        u.length || (m = "REST", c.ResourceURL.forEach(function (a) {
            "tile" === a.resourceType && (h = a.format, u.push(a.template))
        }));
        return {
            urls: u,
            layer: b.layer,
            matrixSet: f,
            format: h,
            projection: n,
            requestEncoding: m,
            tileGrid: g,
            style: e,
            dimensions: l,
            wrapX: q,
            crossOrigin: b.crossOrigin
        }
    });
    r("ol.source.XYZ", ax);
    r("ol.source.Zoomify", Xx);
    Yh.prototype.vectorContext = Yh.prototype.vectorContext;
    Yh.prototype.frameState = Yh.prototype.frameState;
    Yh.prototype.context = Yh.prototype.context;
    Yh.prototype.glContext = Yh.prototype.glContext;
    Eq.prototype.get = Eq.prototype.get;
    Eq.prototype.getExtent = Eq.prototype.G;
    Eq.prototype.getId = Eq.prototype.lo;
    Eq.prototype.getGeometry = Eq.prototype.W;
    Eq.prototype.getProperties = Eq.prototype.mo;
    Eq.prototype.getType = Eq.prototype.T;
    r("ol.render.VectorContext", ci);
    Ck.prototype.setStyle = Ck.prototype.xd;
    Ck.prototype.drawGeometry = Ck.prototype.Cb;
    Ck.prototype.drawFeature = Ck.prototype.Ee;
    di.prototype.drawCircle = di.prototype.$b;
    di.prototype.setStyle = di.prototype.xd;
    di.prototype.drawGeometry = di.prototype.Cb;
    di.prototype.drawFeature = di.prototype.Ee;
    r("ol.proj.common.add", jc);
    r("ol.proj.Projection", Db);
    Db.prototype.getCode = Db.prototype.Uk;
    Db.prototype.getExtent = Db.prototype.G;
    Db.prototype.getUnits = Db.prototype.jo;
    Db.prototype.getMetersPerUnit = Db.prototype.Nc;
    Db.prototype.getWorldExtent = Db.prototype.Fl;
    Db.prototype.isGlobal = Db.prototype.rm;
    Db.prototype.setGlobal = Db.prototype.nq;
    Db.prototype.setExtent = Db.prototype.ko;
    Db.prototype.setWorldExtent = Db.prototype.yq;
    Db.prototype.setGetPointResolution = Db.prototype.mq;
    r("ol.proj.Units.METERS_PER_UNIT", Bb);
    r("ol.layer.Base", xh);
    xh.prototype.getExtent = xh.prototype.G;
    xh.prototype.getMaxResolution = xh.prototype.fc;
    xh.prototype.getMinResolution = xh.prototype.gc;
    xh.prototype.getOpacity = xh.prototype.hc;
    xh.prototype.getVisible = xh.prototype.Sb;
    xh.prototype.getZIndex = xh.prototype.za;
    xh.prototype.setExtent = xh.prototype.xc;
    xh.prototype.setMaxResolution = xh.prototype.Bc;
    xh.prototype.setMinResolution = xh.prototype.Cc;
    xh.prototype.setOpacity = xh.prototype.yc;
    xh.prototype.setVisible = xh.prototype.zc;
    xh.prototype.setZIndex = xh.prototype.Wb;
    r("ol.layer.Group", zh);
    zh.prototype.getLayers = zh.prototype.wd;
    zh.prototype.setLayers = zh.prototype.Hi;
    r("ol.layer.Heatmap", W);
    W.prototype.getBlur = W.prototype.Ch;
    W.prototype.getGradient = W.prototype.Jh;
    W.prototype.getRadius = W.prototype.Ii;
    W.prototype.setBlur = W.prototype.tj;
    W.prototype.setGradient = W.prototype.zj;
    W.prototype.setRadius = W.prototype.Xc;
    r("ol.layer.Image", qw);
    qw.prototype.getSource = qw.prototype.ia;
    r("ol.layer.Layer", Dh);
    Dh.prototype.getSource = Dh.prototype.ia;
    Dh.prototype.setMap = Dh.prototype.setMap;
    Dh.prototype.setSource = Dh.prototype.Zc;
    r("ol.layer.Tile", zw);
    zw.prototype.getPreload = zw.prototype.md;
    zw.prototype.getSource = zw.prototype.ia;
    zw.prototype.setPreload = zw.prototype.Ji;
    zw.prototype.getUseInterimTilesOnError = zw.prototype.qd;
    zw.prototype.setUseInterimTilesOnError = zw.prototype.Ki;
    r("ol.layer.Vector", S);
    S.prototype.getSource = S.prototype.ia;
    S.prototype.getStyle = S.prototype.u;
    S.prototype.getStyleFunction = S.prototype.bb;
    S.prototype.setStyle = S.prototype.i;
    r("ol.layer.VectorTile", Hw);
    Hw.prototype.getPreload = Hw.prototype.md;
    Hw.prototype.getUseInterimTilesOnError = Hw.prototype.qd;
    Hw.prototype.setPreload = Hw.prototype.Li;
    Hw.prototype.setUseInterimTilesOnError = Hw.prototype.Mi;
    Hw.prototype.getSource = Hw.prototype.ia;
    r("ol.interaction.DoubleClickZoom", wg);
    r("ol.interaction.DoubleClickZoom.handleEvent", xg);
    r("ol.interaction.DragAndDrop", mt);
    r("ol.interaction.DragAndDrop.handleEvent", pf);
    pt.prototype.features = pt.prototype.features;
    pt.prototype.file = pt.prototype.file;
    pt.prototype.projection = pt.prototype.projection;
    r("ol.interaction.DragBox", Xg);
    Xg.prototype.getGeometry = Xg.prototype.W;
    bh.prototype.coordinate = bh.prototype.coordinate;
    bh.prototype.mapBrowserEvent = bh.prototype.mapBrowserEvent;
    r("ol.interaction.DragPan", Mg);
    r("ol.interaction.DragRotate", Qg);
    r("ol.interaction.DragRotateAndZoom", tt);
    r("ol.interaction.DragZoom", fh);
    r("ol.interaction.Draw", Hu);
    r("ol.interaction.Draw.handleEvent", Ju);
    Hu.prototype.removeLastPoint = Hu.prototype.aq;
    Hu.prototype.finishDrawing = Hu.prototype.Vd;
    Hu.prototype.extend = Hu.prototype.Jn;
    r("ol.interaction.Draw.createRegularPolygon", function (a, b) {
        return function (c, d) {
            var e = c[0];
            c = c[1];
            var f = Math.sqrt(kf(e, c));
            d = d ? d : dg(new Ss(e), a);
            eg(d, e, f, b ? b : Math.atan((c[1] - e[1]) / (c[0] - e[0])));
            return d
        }
    });
    r("ol.interaction.Draw.createBox", function () {
        return function (a, b) {
            a = La(a);
            b = b || new D(null);
            b.na([[db(a), eb(a), fb(a), gb(a), db(a)]]);
            return b
        }
    });
    Xu.prototype.feature = Xu.prototype.feature;
    r("ol.interaction.Extent", Yu);
    Yu.prototype.getExtent = Yu.prototype.G;
    Yu.prototype.setExtent = Yu.prototype.g;
    iv.prototype.extent = iv.prototype.extent;
    r("ol.interaction.Interaction", sg);
    sg.prototype.getActive = sg.prototype.c;
    sg.prototype.getMap = sg.prototype.i;
    sg.prototype.setActive = sg.prototype.Ia;
    r("ol.interaction.KeyboardPan", gh);
    r("ol.interaction.KeyboardPan.handleEvent", hh);
    r("ol.interaction.KeyboardZoom", ih);
    r("ol.interaction.KeyboardZoom.handleEvent", jh);
    r("ol.interaction.Modify", jv);
    r("ol.interaction.Modify.handleEvent", mv);
    jv.prototype.removePoint = jv.prototype.rj;
    rv.prototype.features = rv.prototype.features;
    rv.prototype.mapBrowserEvent = rv.prototype.mapBrowserEvent;
    r("ol.interaction.MouseWheelZoom", kh);
    r("ol.interaction.MouseWheelZoom.handleEvent", lh);
    kh.prototype.setMouseAnchor = kh.prototype.U;
    r("ol.interaction.PinchRotate", oh);
    r("ol.interaction.PinchZoom", sh);
    r("ol.interaction.Pointer", Jg);
    r("ol.interaction.Pointer.handleEvent", Kg);
    r("ol.interaction.Select", zv);
    zv.prototype.getFeatures = zv.prototype.Un;
    zv.prototype.getHitTolerance = zv.prototype.Vn;
    zv.prototype.getLayer = zv.prototype.Wn;
    r("ol.interaction.Select.handleEvent", Av);
    zv.prototype.setHitTolerance = zv.prototype.Yn;
    zv.prototype.setMap = zv.prototype.setMap;
    Cv.prototype.selected = Cv.prototype.selected;
    Cv.prototype.deselected = Cv.prototype.deselected;
    Cv.prototype.mapBrowserEvent = Cv.prototype.mapBrowserEvent;
    r("ol.interaction.Snap", Ev);
    Ev.prototype.addFeature = Ev.prototype.Bb;
    Ev.prototype.removeFeature = Ev.prototype.Fb;
    r("ol.interaction.Translate", Jv);
    Jv.prototype.getHitTolerance = Jv.prototype.C;
    Jv.prototype.setHitTolerance = Jv.prototype.I;
    Pv.prototype.features = Pv.prototype.features;
    Pv.prototype.coordinate = Pv.prototype.coordinate;
    r("ol.geom.Circle", Ss);
    Ss.prototype.clone = Ss.prototype.clone;
    Ss.prototype.getCenter = Ss.prototype.xa;
    Ss.prototype.getRadius = Ss.prototype.vd;
    Ss.prototype.getType = Ss.prototype.T;
    Ss.prototype.intersectsExtent = Ss.prototype.Ya;
    Ss.prototype.setCenter = Ss.prototype.rb;
    Ss.prototype.setCenterAndRadius = Ss.prototype.Vg;
    Ss.prototype.setRadius = Ss.prototype.Xc;
    Ss.prototype.transform = Ss.prototype.mb;
    r("ol.geom.Geometry", rf);
    rf.prototype.getClosestPoint = rf.prototype.Db;
    rf.prototype.intersectsCoordinate = rf.prototype.wb;
    rf.prototype.getExtent = rf.prototype.G;
    rf.prototype.rotate = rf.prototype.rotate;
    rf.prototype.scale = rf.prototype.scale;
    rf.prototype.simplify = rf.prototype.Pb;
    rf.prototype.transform = rf.prototype.mb;
    r("ol.geom.GeometryCollection", Nm);
    Nm.prototype.clone = Nm.prototype.clone;
    Nm.prototype.getGeometries = Nm.prototype.kd;
    Nm.prototype.getType = Nm.prototype.T;
    Nm.prototype.intersectsExtent = Nm.prototype.Ya;
    Nm.prototype.setGeometries = Nm.prototype.yj;
    Nm.prototype.applyTransform = Nm.prototype.Fc;
    Nm.prototype.translate = Nm.prototype.translate;
    r("ol.geom.LinearRing", Of);
    Of.prototype.clone = Of.prototype.clone;
    Of.prototype.getArea = Of.prototype.Fn;
    Of.prototype.getCoordinates = Of.prototype.V;
    Of.prototype.getType = Of.prototype.T;
    Of.prototype.setCoordinates = Of.prototype.na;
    r("ol.geom.LineString", M);
    M.prototype.appendCoordinate = M.prototype.xk;
    M.prototype.clone = M.prototype.clone;
    M.prototype.forEachSegment = M.prototype.Nk;
    M.prototype.getCoordinateAtM = M.prototype.Dn;
    M.prototype.getCoordinates = M.prototype.V;
    M.prototype.getCoordinateAt = M.prototype.Eh;
    M.prototype.getLength = M.prototype.En;
    M.prototype.getType = M.prototype.T;
    M.prototype.intersectsExtent = M.prototype.Ya;
    M.prototype.setCoordinates = M.prototype.na;
    r("ol.geom.MultiLineString", N);
    N.prototype.appendLineString = N.prototype.yk;
    N.prototype.clone = N.prototype.clone;
    N.prototype.getCoordinateAtM = N.prototype.Gn;
    N.prototype.getCoordinates = N.prototype.V;
    N.prototype.getLineString = N.prototype.jl;
    N.prototype.getLineStrings = N.prototype.ld;
    N.prototype.getType = N.prototype.T;
    N.prototype.intersectsExtent = N.prototype.Ya;
    N.prototype.setCoordinates = N.prototype.na;
    r("ol.geom.MultiPoint", O);
    O.prototype.appendPoint = O.prototype.Ak;
    O.prototype.clone = O.prototype.clone;
    O.prototype.getCoordinates = O.prototype.V;
    O.prototype.getPoint = O.prototype.ul;
    O.prototype.getPoints = O.prototype.ee;
    O.prototype.getType = O.prototype.T;
    O.prototype.intersectsExtent = O.prototype.Ya;
    O.prototype.setCoordinates = O.prototype.na;
    r("ol.geom.MultiPolygon", P);
    P.prototype.appendPolygon = P.prototype.Bk;
    P.prototype.clone = P.prototype.clone;
    P.prototype.getArea = P.prototype.Hn;
    P.prototype.getCoordinates = P.prototype.V;
    P.prototype.getInteriorPoints = P.prototype.fl;
    P.prototype.getPolygon = P.prototype.vl;
    P.prototype.getPolygons = P.prototype.$d;
    P.prototype.getType = P.prototype.T;
    P.prototype.intersectsExtent = P.prototype.Ya;
    P.prototype.setCoordinates = P.prototype.na;
    r("ol.geom.Point", C);
    C.prototype.clone = C.prototype.clone;
    C.prototype.getCoordinates = C.prototype.V;
    C.prototype.getType = C.prototype.T;
    C.prototype.intersectsExtent = C.prototype.Ya;
    C.prototype.setCoordinates = C.prototype.na;
    r("ol.geom.Polygon", D);
    D.prototype.appendLinearRing = D.prototype.zk;
    D.prototype.clone = D.prototype.clone;
    D.prototype.getArea = D.prototype.In;
    D.prototype.getCoordinates = D.prototype.V;
    D.prototype.getInteriorPoint = D.prototype.el;
    D.prototype.getLinearRingCount = D.prototype.kl;
    D.prototype.getLinearRing = D.prototype.Kh;
    D.prototype.getLinearRings = D.prototype.Zd;
    D.prototype.getType = D.prototype.T;
    D.prototype.intersectsExtent = D.prototype.Ya;
    D.prototype.setCoordinates = D.prototype.na;
    r("ol.geom.Polygon.circular", bg);
    r("ol.geom.Polygon.fromExtent", cg);
    r("ol.geom.Polygon.fromCircle", dg);
    r("ol.geom.SimpleGeometry", uf);
    uf.prototype.getFirstCoordinate = uf.prototype.bc;
    uf.prototype.getLastCoordinate = uf.prototype.cc;
    uf.prototype.getLayout = uf.prototype.dc;
    uf.prototype.applyTransform = uf.prototype.Fc;
    uf.prototype.translate = uf.prototype.translate;
    r("ol.format.EsriJSON", jm);
    jm.prototype.readFeature = jm.prototype.Ub;
    jm.prototype.readFeatures = jm.prototype.Oa;
    jm.prototype.readGeometry = jm.prototype.Vc;
    jm.prototype.readProjection = jm.prototype.ob;
    jm.prototype.writeGeometry = jm.prototype.dd;
    jm.prototype.writeGeometryObject = jm.prototype.ue;
    jm.prototype.writeFeature = jm.prototype.Gd;
    jm.prototype.writeFeatureObject = jm.prototype.cd;
    jm.prototype.writeFeatures = jm.prototype.Xb;
    jm.prototype.writeFeaturesObject = jm.prototype.se;
    r("ol.format.Feature", Yl);
    r("ol.format.filter.and", Lm);
    r("ol.format.filter.or", function (a) {
        var b = [null].concat(Array.prototype.slice.call(arguments));
        return new (Function.prototype.bind.apply(Jm, b))
    });
    r("ol.format.filter.not", function (a) {
        return new Hm(a)
    });
    r("ol.format.filter.bbox", Mm);
    r("ol.format.filter.intersects", function (a, b, c) {
        return new Bm(a, b, c)
    });
    r("ol.format.filter.within", function (a, b, c) {
        return new Km(a, b, c)
    });
    r("ol.format.filter.equalTo", function (a, b, c) {
        return new xm(a, b, c)
    });
    r("ol.format.filter.notEqualTo", function (a, b, c) {
        return new Im(a, b, c)
    });
    r("ol.format.filter.lessThan", function (a, b) {
        return new Fm(a, b)
    });
    r("ol.format.filter.lessThanOrEqualTo", function (a, b) {
        return new Gm(a, b)
    });
    r("ol.format.filter.greaterThan", function (a, b) {
        return new ym(a, b)
    });
    r("ol.format.filter.greaterThanOrEqualTo", function (a, b) {
        return new zm(a, b)
    });
    r("ol.format.filter.isNull", function (a) {
        return new Em(a)
    });
    r("ol.format.filter.between", function (a, b, c) {
        return new Cm(a, b, c)
    });
    r("ol.format.filter.like", function (a, b, c, d, e, f) {
        return new Dm(a, b, c, d, e, f)
    });
    r("ol.format.filter.during", function (a, b, c) {
        return new vm(a, b, c)
    });
    r("ol.format.GeoJSON", Rm);
    Rm.prototype.readFeature = Rm.prototype.Ub;
    Rm.prototype.readFeatures = Rm.prototype.Oa;
    Rm.prototype.readGeometry = Rm.prototype.Vc;
    Rm.prototype.readProjection = Rm.prototype.ob;
    Rm.prototype.writeFeature = Rm.prototype.Gd;
    Rm.prototype.writeFeatureObject = Rm.prototype.cd;
    Rm.prototype.writeFeatures = Rm.prototype.Xb;
    Rm.prototype.writeFeaturesObject = Rm.prototype.se;
    Rm.prototype.writeGeometry = Rm.prototype.dd;
    Rm.prototype.writeGeometryObject = Rm.prototype.ue;
    r("ol.format.GML", mn);
    mn.prototype.writeFeatures = mn.prototype.Xb;
    mn.prototype.writeFeaturesNode = mn.prototype.Yb;
    r("ol.format.GML2", vn);
    r("ol.format.GML3", mn);
    mn.prototype.writeGeometryNode = mn.prototype.te;
    mn.prototype.writeFeatures = mn.prototype.Xb;
    mn.prototype.writeFeaturesNode = mn.prototype.Yb;
    Zm.prototype.readFeatures = Zm.prototype.Oa;
    r("ol.format.GPX", Gn);
    Gn.prototype.readFeature = Gn.prototype.Ub;
    Gn.prototype.readFeatures = Gn.prototype.Oa;
    Gn.prototype.readProjection = Gn.prototype.ob;
    Gn.prototype.writeFeatures = Gn.prototype.Xb;
    Gn.prototype.writeFeaturesNode = Gn.prototype.Yb;
    r("ol.format.IGC", ro);
    ro.prototype.readFeature = ro.prototype.Ub;
    ro.prototype.readFeatures = ro.prototype.Oa;
    ro.prototype.readProjection = ro.prototype.ob;
    r("ol.format.KML", Ao);
    Ao.prototype.readFeature = Ao.prototype.Ub;
    Ao.prototype.readFeatures = Ao.prototype.Oa;
    Ao.prototype.readName = Ao.prototype.Pp;
    Ao.prototype.readNetworkLinks = Ao.prototype.Qp;
    Ao.prototype.readRegion = Ao.prototype.Tp;
    Ao.prototype.readRegionFromNode = Ao.prototype.wf;
    Ao.prototype.readProjection = Ao.prototype.ob;
    Ao.prototype.writeFeatures = Ao.prototype.Xb;
    Ao.prototype.writeFeaturesNode = Ao.prototype.Yb;
    r("ol.format.MVT", Fq);
    Fq.prototype.getLastExtent = Fq.prototype.eg;
    Fq.prototype.readFeatures = Fq.prototype.Oa;
    Fq.prototype.readProjection = Fq.prototype.ob;
    Fq.prototype.setLayers = Fq.prototype.Cn;
    r("ol.format.OSMXML", Hq);
    Hq.prototype.readFeatures = Hq.prototype.Oa;
    Hq.prototype.readProjection = Hq.prototype.ob;
    r("ol.format.Polyline", gr);
    r("ol.format.Polyline.encodeDeltas", hr);
    r("ol.format.Polyline.decodeDeltas", jr);
    r("ol.format.Polyline.encodeFloats", ir);
    r("ol.format.Polyline.decodeFloats", kr);
    gr.prototype.readFeature = gr.prototype.Ub;
    gr.prototype.readFeatures = gr.prototype.Oa;
    gr.prototype.readGeometry = gr.prototype.Vc;
    gr.prototype.readProjection = gr.prototype.ob;
    gr.prototype.writeGeometry = gr.prototype.dd;
    r("ol.format.TopoJSON", lr);
    lr.prototype.readFeatures = lr.prototype.Oa;
    lr.prototype.readProjection = lr.prototype.ob;
    r("ol.format.WFS", rr);
    rr.prototype.readFeatures = rr.prototype.Oa;
    rr.prototype.readTransactionResponse = rr.prototype.j;
    rr.prototype.readFeatureCollectionMetadata = rr.prototype.g;
    r("ol.format.WFS.writeFilter", function (a) {
        var b = El("http://www.opengis.net/ogc", "Filter");
        Vl({node: b}, Gr, Ql(a.lc), [a], []);
        return b
    });
    rr.prototype.writeGetFeature = rr.prototype.o;
    rr.prototype.writeTransaction = rr.prototype.v;
    rr.prototype.readProjection = rr.prototype.ob;
    r("ol.format.WKT", Mr);
    Mr.prototype.readFeature = Mr.prototype.Ub;
    Mr.prototype.readFeatures = Mr.prototype.Oa;
    Mr.prototype.readGeometry = Mr.prototype.Vc;
    Mr.prototype.writeFeature = Mr.prototype.Gd;
    Mr.prototype.writeFeatures = Mr.prototype.Xb;
    Mr.prototype.writeGeometry = Mr.prototype.dd;
    r("ol.format.WMSCapabilities", es);
    es.prototype.read = es.prototype.read;
    r("ol.format.WMSGetFeatureInfo", Bs);
    Bs.prototype.readFeatures = Bs.prototype.Oa;
    r("ol.format.WMTSCapabilities", Cs);
    Cs.prototype.read = Cs.prototype.read;
    r("ol.format.filter.And", sm);
    r("ol.format.filter.Bbox", tm);
    r("ol.format.filter.Comparison", um);
    r("ol.format.filter.ComparisonBinary", wm);
    r("ol.format.filter.During", vm);
    r("ol.format.filter.EqualTo", xm);
    r("ol.format.filter.Filter", qm);
    r("ol.format.filter.GreaterThan", ym);
    r("ol.format.filter.GreaterThanOrEqualTo", zm);
    r("ol.format.filter.Intersects", Bm);
    r("ol.format.filter.IsBetween", Cm);
    r("ol.format.filter.IsLike", Dm);
    r("ol.format.filter.IsNull", Em);
    r("ol.format.filter.LessThan", Fm);
    r("ol.format.filter.LessThanOrEqualTo", Gm);
    r("ol.format.filter.Not", Hm);
    r("ol.format.filter.NotEqualTo", Im);
    r("ol.format.filter.Or", Jm);
    r("ol.format.filter.Spatial", Am);
    r("ol.format.filter.Within", Km);
    r("ol.events.condition.altKeyOnly", yg);
    r("ol.events.condition.altShiftKeysOnly", zg);
    r("ol.events.condition.always", pf);
    r("ol.events.condition.click", function (a) {
        return "click" == a.type
    });
    r("ol.events.condition.never", qf);
    r("ol.events.condition.pointerMove", Bg);
    r("ol.events.condition.singleClick", Cg);
    r("ol.events.condition.doubleClick", function (a) {
        return "dblclick" == a.type
    });
    r("ol.events.condition.noModifierKeys", Dg);
    r("ol.events.condition.platformModifierKeyOnly", function (a) {
        a = a.originalEvent;
        return !a.altKey && (Td ? a.metaKey : a.ctrlKey) && !a.shiftKey
    });
    r("ol.events.condition.shiftKeyOnly", Eg);
    r("ol.events.condition.targetNotEditable", Fg);
    r("ol.events.condition.mouseOnly", Gg);
    r("ol.events.condition.primaryAction", Hg);
    Qc.prototype.type = Qc.prototype.type;
    Qc.prototype.target = Qc.prototype.target;
    Qc.prototype.preventDefault = Qc.prototype.preventDefault;
    Qc.prototype.stopPropagation = Qc.prototype.stopPropagation;
    r("ol.control.Attribution", pd);
    r("ol.control.Attribution.render", qd);
    pd.prototype.getCollapsible = pd.prototype.hn;
    pd.prototype.setCollapsible = pd.prototype.ln;
    pd.prototype.setCollapsed = pd.prototype.kn;
    pd.prototype.getCollapsed = pd.prototype.gn;
    r("ol.control.Control", od);
    od.prototype.getMap = od.prototype.g;
    od.prototype.setMap = od.prototype.setMap;
    od.prototype.setTarget = od.prototype.i;
    r("ol.control.FullScreen", Ad);
    r("ol.control.MousePosition", Fd);
    r("ol.control.MousePosition.render", Gd);
    Fd.prototype.getCoordinateFormat = Fd.prototype.Fh;
    Fd.prototype.getProjection = Fd.prototype.ii;
    Fd.prototype.setCoordinateFormat = Fd.prototype.uj;
    Fd.prototype.setProjection = Fd.prototype.ji;
    r("ol.control.OverviewMap", Uk);
    r("ol.control.OverviewMap.render", Vk);
    Uk.prototype.getCollapsible = Uk.prototype.pn;
    Uk.prototype.setCollapsible = Uk.prototype.sn;
    Uk.prototype.setCollapsed = Uk.prototype.rn;
    Uk.prototype.getCollapsed = Uk.prototype.nn;
    Uk.prototype.getOverviewMap = Uk.prototype.sl;
    r("ol.control.Rotate", wd);
    r("ol.control.Rotate.render", xd);
    r("ol.control.ScaleLine", Zk);
    Zk.prototype.getUnits = Zk.prototype.B;
    r("ol.control.ScaleLine.render", $k);
    Zk.prototype.setUnits = Zk.prototype.I;
    r("ol.control.Zoom", yd);
    r("ol.control.ZoomSlider", dl);
    r("ol.control.ZoomSlider.render", fl);
    r("ol.control.ZoomToExtent", il);
    Vc.prototype.changed = Vc.prototype.s;
    Vc.prototype.dispatchEvent = Vc.prototype.b;
    Vc.prototype.getRevision = Vc.prototype.L;
    Vc.prototype.on = Vc.prototype.J;
    Vc.prototype.once = Vc.prototype.once;
    Vc.prototype.un = Vc.prototype.K;
    $c.prototype.get = $c.prototype.get;
    $c.prototype.getKeys = $c.prototype.O;
    $c.prototype.getProperties = $c.prototype.N;
    $c.prototype.set = $c.prototype.set;
    $c.prototype.setProperties = $c.prototype.H;
    $c.prototype.unset = $c.prototype.P;
    $c.prototype.changed = $c.prototype.s;
    $c.prototype.dispatchEvent = $c.prototype.b;
    $c.prototype.getRevision = $c.prototype.L;
    $c.prototype.on = $c.prototype.J;
    $c.prototype.once = $c.prototype.once;
    $c.prototype.un = $c.prototype.K;
    dd.prototype.type = dd.prototype.type;
    dd.prototype.target = dd.prototype.target;
    dd.prototype.preventDefault = dd.prototype.preventDefault;
    dd.prototype.stopPropagation = dd.prototype.stopPropagation;
    jl.prototype.get = jl.prototype.get;
    jl.prototype.getKeys = jl.prototype.O;
    jl.prototype.getProperties = jl.prototype.N;
    jl.prototype.set = jl.prototype.set;
    jl.prototype.setProperties = jl.prototype.H;
    jl.prototype.unset = jl.prototype.P;
    jl.prototype.changed = jl.prototype.s;
    jl.prototype.dispatchEvent = jl.prototype.b;
    jl.prototype.getRevision = jl.prototype.L;
    jl.prototype.on = jl.prototype.J;
    jl.prototype.once = jl.prototype.once;
    jl.prototype.un = jl.prototype.K;
    Bl.prototype.get = Bl.prototype.get;
    Bl.prototype.getKeys = Bl.prototype.O;
    Bl.prototype.getProperties = Bl.prototype.N;
    Bl.prototype.set = Bl.prototype.set;
    Bl.prototype.setProperties = Bl.prototype.H;
    Bl.prototype.unset = Bl.prototype.P;
    Bl.prototype.changed = Bl.prototype.s;
    Bl.prototype.dispatchEvent = Bl.prototype.b;
    Bl.prototype.getRevision = Bl.prototype.L;
    Bl.prototype.on = Bl.prototype.J;
    Bl.prototype.once = Bl.prototype.once;
    Bl.prototype.un = Bl.prototype.K;
    Rs.prototype.get = Rs.prototype.get;
    Rs.prototype.getKeys = Rs.prototype.O;
    Rs.prototype.getProperties = Rs.prototype.N;
    Rs.prototype.set = Rs.prototype.set;
    Rs.prototype.setProperties = Rs.prototype.H;
    Rs.prototype.unset = Rs.prototype.P;
    Rs.prototype.changed = Rs.prototype.s;
    Rs.prototype.dispatchEvent = Rs.prototype.b;
    Rs.prototype.getRevision = Rs.prototype.L;
    Rs.prototype.on = Rs.prototype.J;
    Rs.prototype.once = Rs.prototype.once;
    Rs.prototype.un = Rs.prototype.K;
    it.prototype.getTileCoord = it.prototype.i;
    it.prototype.load = it.prototype.load;
    H.prototype.get = H.prototype.get;
    H.prototype.getKeys = H.prototype.O;
    H.prototype.getProperties = H.prototype.N;
    H.prototype.set = H.prototype.set;
    H.prototype.setProperties = H.prototype.H;
    H.prototype.unset = H.prototype.P;
    H.prototype.changed = H.prototype.s;
    H.prototype.dispatchEvent = H.prototype.b;
    H.prototype.getRevision = H.prototype.L;
    H.prototype.on = H.prototype.J;
    H.prototype.once = H.prototype.once;
    H.prototype.un = H.prototype.K;
    Kd.prototype.type = Kd.prototype.type;
    Kd.prototype.target = Kd.prototype.target;
    Kd.prototype.preventDefault = Kd.prototype.preventDefault;
    Kd.prototype.stopPropagation = Kd.prototype.stopPropagation;
    Ld.prototype.map = Ld.prototype.map;
    Ld.prototype.frameState = Ld.prototype.frameState;
    Ld.prototype.type = Ld.prototype.type;
    Ld.prototype.target = Ld.prototype.target;
    Ld.prototype.preventDefault = Ld.prototype.preventDefault;
    Ld.prototype.stopPropagation = Ld.prototype.stopPropagation;
    ie.prototype.originalEvent = ie.prototype.originalEvent;
    ie.prototype.pixel = ie.prototype.pixel;
    ie.prototype.coordinate = ie.prototype.coordinate;
    ie.prototype.dragging = ie.prototype.dragging;
    ie.prototype.preventDefault = ie.prototype.preventDefault;
    ie.prototype.stopPropagation = ie.prototype.stopPropagation;
    ie.prototype.map = ie.prototype.map;
    ie.prototype.frameState = ie.prototype.frameState;
    ie.prototype.type = ie.prototype.type;
    ie.prototype.target = ie.prototype.target;
    Zc.prototype.type = Zc.prototype.type;
    Zc.prototype.target = Zc.prototype.target;
    Zc.prototype.preventDefault = Zc.prototype.preventDefault;
    Zc.prototype.stopPropagation = Zc.prototype.stopPropagation;
    Lk.prototype.get = Lk.prototype.get;
    Lk.prototype.getKeys = Lk.prototype.O;
    Lk.prototype.getProperties = Lk.prototype.N;
    Lk.prototype.set = Lk.prototype.set;
    Lk.prototype.setProperties = Lk.prototype.H;
    Lk.prototype.unset = Lk.prototype.P;
    Lk.prototype.changed = Lk.prototype.s;
    Lk.prototype.dispatchEvent = Lk.prototype.b;
    Lk.prototype.getRevision = Lk.prototype.L;
    Lk.prototype.on = Lk.prototype.J;
    Lk.prototype.once = Lk.prototype.once;
    Lk.prototype.un = Lk.prototype.K;
    Px.prototype.getTileCoord = Px.prototype.i;
    Px.prototype.load = Px.prototype.load;
    Rx.prototype.getTileCoord = Rx.prototype.i;
    Rx.prototype.load = Rx.prototype.load;
    F.prototype.get = F.prototype.get;
    F.prototype.getKeys = F.prototype.O;
    F.prototype.getProperties = F.prototype.N;
    F.prototype.set = F.prototype.set;
    F.prototype.setProperties = F.prototype.H;
    F.prototype.unset = F.prototype.P;
    F.prototype.changed = F.prototype.s;
    F.prototype.dispatchEvent = F.prototype.b;
    F.prototype.getRevision = F.prototype.L;
    F.prototype.on = F.prototype.J;
    F.prototype.once = F.prototype.once;
    F.prototype.un = F.prototype.K;
    Ux.prototype.forEachTileCoord = Ux.prototype.Yf;
    Ux.prototype.getMaxZoom = Ux.prototype.cj;
    Ux.prototype.getMinZoom = Ux.prototype.dj;
    Ux.prototype.getOrigin = Ux.prototype.Sc;
    Ux.prototype.getResolution = Ux.prototype.Ca;
    Ux.prototype.getResolutions = Ux.prototype.ej;
    Ux.prototype.getTileCoordExtent = Ux.prototype.Fa;
    Ux.prototype.getTileCoordForCoordAndResolution = Ux.prototype.Me;
    Ux.prototype.getTileCoordForCoordAndZ = Ux.prototype.kg;
    Ux.prototype.getTileSize = Ux.prototype.eb;
    Ux.prototype.getZForResolution = Ux.prototype.uc;
    rl.prototype.getOpacity = rl.prototype.jf;
    rl.prototype.getRotateWithView = rl.prototype.kf;
    rl.prototype.getRotation = rl.prototype.lf;
    rl.prototype.getScale = rl.prototype.mf;
    rl.prototype.getSnapToPixel = rl.prototype.Le;
    rl.prototype.setOpacity = rl.prototype.zd;
    rl.prototype.setRotation = rl.prototype.nf;
    rl.prototype.setScale = rl.prototype.Ad;
    tl.prototype.clone = tl.prototype.clone;
    tl.prototype.getAngle = tl.prototype.Zi;
    tl.prototype.getFill = tl.prototype.Da;
    tl.prototype.getPoints = tl.prototype.$i;
    tl.prototype.getRadius = tl.prototype.aj;
    tl.prototype.getRadius2 = tl.prototype.Nh;
    tl.prototype.getStroke = tl.prototype.Ea;
    tl.prototype.getOpacity = tl.prototype.jf;
    tl.prototype.getRotateWithView = tl.prototype.kf;
    tl.prototype.getRotation = tl.prototype.lf;
    tl.prototype.getScale = tl.prototype.mf;
    tl.prototype.getSnapToPixel = tl.prototype.Le;
    tl.prototype.setOpacity = tl.prototype.zd;
    tl.prototype.setRotation = tl.prototype.nf;
    tl.prototype.setScale = tl.prototype.Ad;
    yo.prototype.getOpacity = yo.prototype.jf;
    yo.prototype.getRotateWithView = yo.prototype.kf;
    yo.prototype.getRotation = yo.prototype.lf;
    yo.prototype.getScale = yo.prototype.mf;
    yo.prototype.getSnapToPixel = yo.prototype.Le;
    yo.prototype.setOpacity = yo.prototype.zd;
    yo.prototype.setRotation = yo.prototype.nf;
    yo.prototype.setScale = yo.prototype.Ad;
    xu.prototype.get = xu.prototype.get;
    xu.prototype.getKeys = xu.prototype.O;
    xu.prototype.getProperties = xu.prototype.N;
    xu.prototype.set = xu.prototype.set;
    xu.prototype.setProperties = xu.prototype.H;
    xu.prototype.unset = xu.prototype.P;
    xu.prototype.changed = xu.prototype.s;
    xu.prototype.dispatchEvent = xu.prototype.b;
    xu.prototype.getRevision = xu.prototype.L;
    xu.prototype.on = xu.prototype.J;
    xu.prototype.once = xu.prototype.once;
    xu.prototype.un = xu.prototype.K;
    Rw.prototype.getAttributions = Rw.prototype.Aa;
    Rw.prototype.getLogo = Rw.prototype.ya;
    Rw.prototype.getProjection = Rw.prototype.Ba;
    Rw.prototype.getState = Rw.prototype.getState;
    Rw.prototype.refresh = Rw.prototype.ra;
    Rw.prototype.setAttributions = Rw.prototype.wa;
    Rw.prototype.get = Rw.prototype.get;
    Rw.prototype.getKeys = Rw.prototype.O;
    Rw.prototype.getProperties = Rw.prototype.N;
    Rw.prototype.set = Rw.prototype.set;
    Rw.prototype.setProperties = Rw.prototype.H;
    Rw.prototype.unset = Rw.prototype.P;
    Rw.prototype.changed = Rw.prototype.s;
    Rw.prototype.dispatchEvent = Rw.prototype.b;
    Rw.prototype.getRevision = Rw.prototype.L;
    Rw.prototype.on = Rw.prototype.J;
    Rw.prototype.once = Rw.prototype.once;
    Rw.prototype.un = Rw.prototype.K;
    Vw.prototype.getTileGrid = Vw.prototype.cb;
    Vw.prototype.refresh = Vw.prototype.ra;
    Vw.prototype.getAttributions = Vw.prototype.Aa;
    Vw.prototype.getLogo = Vw.prototype.ya;
    Vw.prototype.getProjection = Vw.prototype.Ba;
    Vw.prototype.getState = Vw.prototype.getState;
    Vw.prototype.setAttributions = Vw.prototype.wa;
    Vw.prototype.get = Vw.prototype.get;
    Vw.prototype.getKeys = Vw.prototype.O;
    Vw.prototype.getProperties = Vw.prototype.N;
    Vw.prototype.set = Vw.prototype.set;
    Vw.prototype.setProperties = Vw.prototype.H;
    Vw.prototype.unset = Vw.prototype.P;
    Vw.prototype.changed = Vw.prototype.s;
    Vw.prototype.dispatchEvent = Vw.prototype.b;
    Vw.prototype.getRevision = Vw.prototype.L;
    Vw.prototype.on = Vw.prototype.J;
    Vw.prototype.once = Vw.prototype.once;
    Vw.prototype.un = Vw.prototype.K;
    X.prototype.getTileLoadFunction = X.prototype.tb;
    X.prototype.getTileUrlFunction = X.prototype.ub;
    X.prototype.getUrls = X.prototype.vb;
    X.prototype.setTileLoadFunction = X.prototype.zb;
    X.prototype.setTileUrlFunction = X.prototype.hb;
    X.prototype.setUrl = X.prototype.nb;
    X.prototype.setUrls = X.prototype.ib;
    X.prototype.getTileGrid = X.prototype.cb;
    X.prototype.refresh = X.prototype.ra;
    X.prototype.getAttributions = X.prototype.Aa;
    X.prototype.getLogo = X.prototype.ya;
    X.prototype.getProjection = X.prototype.Ba;
    X.prototype.getState = X.prototype.getState;
    X.prototype.setAttributions = X.prototype.wa;
    X.prototype.get = X.prototype.get;
    X.prototype.getKeys = X.prototype.O;
    X.prototype.getProperties = X.prototype.N;
    X.prototype.set = X.prototype.set;
    X.prototype.setProperties = X.prototype.H;
    X.prototype.unset = X.prototype.P;
    X.prototype.changed = X.prototype.s;
    X.prototype.dispatchEvent = X.prototype.b;
    X.prototype.getRevision = X.prototype.L;
    X.prototype.on = X.prototype.J;
    X.prototype.once = X.prototype.once;
    X.prototype.un = X.prototype.K;
    Zw.prototype.setRenderReprojectionEdges = Zw.prototype.Nb;
    Zw.prototype.setTileGridForProjection = Zw.prototype.Ob;
    Zw.prototype.getTileLoadFunction = Zw.prototype.tb;
    Zw.prototype.getTileUrlFunction = Zw.prototype.ub;
    Zw.prototype.getUrls = Zw.prototype.vb;
    Zw.prototype.setTileLoadFunction = Zw.prototype.zb;
    Zw.prototype.setTileUrlFunction = Zw.prototype.hb;
    Zw.prototype.setUrl = Zw.prototype.nb;
    Zw.prototype.setUrls = Zw.prototype.ib;
    Zw.prototype.getTileGrid = Zw.prototype.cb;
    Zw.prototype.refresh = Zw.prototype.ra;
    Zw.prototype.getAttributions = Zw.prototype.Aa;
    Zw.prototype.getLogo = Zw.prototype.ya;
    Zw.prototype.getProjection = Zw.prototype.Ba;
    Zw.prototype.getState = Zw.prototype.getState;
    Zw.prototype.setAttributions = Zw.prototype.wa;
    Zw.prototype.get = Zw.prototype.get;
    Zw.prototype.getKeys = Zw.prototype.O;
    Zw.prototype.getProperties = Zw.prototype.N;
    Zw.prototype.set = Zw.prototype.set;
    Zw.prototype.setProperties = Zw.prototype.H;
    Zw.prototype.unset = Zw.prototype.P;
    Zw.prototype.changed = Zw.prototype.s;
    Zw.prototype.dispatchEvent = Zw.prototype.b;
    Zw.prototype.getRevision = Zw.prototype.L;
    Zw.prototype.on = Zw.prototype.J;
    Zw.prototype.once = Zw.prototype.once;
    Zw.prototype.un = Zw.prototype.K;
    ax.prototype.setRenderReprojectionEdges = ax.prototype.Nb;
    ax.prototype.setTileGridForProjection = ax.prototype.Ob;
    ax.prototype.getTileLoadFunction = ax.prototype.tb;
    ax.prototype.getTileUrlFunction = ax.prototype.ub;
    ax.prototype.getUrls = ax.prototype.vb;
    ax.prototype.setTileLoadFunction = ax.prototype.zb;
    ax.prototype.setTileUrlFunction = ax.prototype.hb;
    ax.prototype.setUrl = ax.prototype.nb;
    ax.prototype.setUrls = ax.prototype.ib;
    ax.prototype.getTileGrid = ax.prototype.cb;
    ax.prototype.refresh = ax.prototype.ra;
    ax.prototype.getAttributions = ax.prototype.Aa;
    ax.prototype.getLogo = ax.prototype.ya;
    ax.prototype.getProjection = ax.prototype.Ba;
    ax.prototype.getState = ax.prototype.getState;
    ax.prototype.setAttributions = ax.prototype.wa;
    ax.prototype.get = ax.prototype.get;
    ax.prototype.getKeys = ax.prototype.O;
    ax.prototype.getProperties = ax.prototype.N;
    ax.prototype.set = ax.prototype.set;
    ax.prototype.setProperties = ax.prototype.H;
    ax.prototype.unset = ax.prototype.P;
    ax.prototype.changed = ax.prototype.s;
    ax.prototype.dispatchEvent = ax.prototype.b;
    ax.prototype.getRevision = ax.prototype.L;
    ax.prototype.on = ax.prototype.J;
    ax.prototype.once = ax.prototype.once;
    ax.prototype.un = ax.prototype.K;
    bx.prototype.setRenderReprojectionEdges = bx.prototype.Nb;
    bx.prototype.setTileGridForProjection = bx.prototype.Ob;
    bx.prototype.getTileLoadFunction = bx.prototype.tb;
    bx.prototype.getTileUrlFunction = bx.prototype.ub;
    bx.prototype.getUrls = bx.prototype.vb;
    bx.prototype.setTileLoadFunction = bx.prototype.zb;
    bx.prototype.setTileUrlFunction = bx.prototype.hb;
    bx.prototype.setUrl = bx.prototype.nb;
    bx.prototype.setUrls = bx.prototype.ib;
    bx.prototype.getTileGrid = bx.prototype.cb;
    bx.prototype.refresh = bx.prototype.ra;
    bx.prototype.getAttributions = bx.prototype.Aa;
    bx.prototype.getLogo = bx.prototype.ya;
    bx.prototype.getProjection = bx.prototype.Ba;
    bx.prototype.getState = bx.prototype.getState;
    bx.prototype.setAttributions = bx.prototype.wa;
    bx.prototype.get = bx.prototype.get;
    bx.prototype.getKeys = bx.prototype.O;
    bx.prototype.getProperties = bx.prototype.N;
    bx.prototype.set = bx.prototype.set;
    bx.prototype.setProperties = bx.prototype.H;
    bx.prototype.unset = bx.prototype.P;
    bx.prototype.changed = bx.prototype.s;
    bx.prototype.dispatchEvent = bx.prototype.b;
    bx.prototype.getRevision = bx.prototype.L;
    bx.prototype.on = bx.prototype.J;
    bx.prototype.once = bx.prototype.once;
    bx.prototype.un = bx.prototype.K;
    V.prototype.getAttributions = V.prototype.Aa;
    V.prototype.getLogo = V.prototype.ya;
    V.prototype.getProjection = V.prototype.Ba;
    V.prototype.getState = V.prototype.getState;
    V.prototype.refresh = V.prototype.ra;
    V.prototype.setAttributions = V.prototype.wa;
    V.prototype.get = V.prototype.get;
    V.prototype.getKeys = V.prototype.O;
    V.prototype.getProperties = V.prototype.N;
    V.prototype.set = V.prototype.set;
    V.prototype.setProperties = V.prototype.H;
    V.prototype.unset = V.prototype.P;
    V.prototype.changed = V.prototype.s;
    V.prototype.dispatchEvent = V.prototype.b;
    V.prototype.getRevision = V.prototype.L;
    V.prototype.on = V.prototype.J;
    V.prototype.once = V.prototype.once;
    V.prototype.un = V.prototype.K;
    Y.prototype.addFeature = Y.prototype.Bb;
    Y.prototype.addFeatures = Y.prototype.Ec;
    Y.prototype.clear = Y.prototype.clear;
    Y.prototype.forEachFeature = Y.prototype.Ah;
    Y.prototype.forEachFeatureInExtent = Y.prototype.ac;
    Y.prototype.forEachFeatureIntersectingExtent = Y.prototype.Bh;
    Y.prototype.getFeaturesCollection = Y.prototype.Ih;
    Y.prototype.getFeatures = Y.prototype.fe;
    Y.prototype.getFeaturesAtCoordinate = Y.prototype.Hh;
    Y.prototype.getFeaturesInExtent = Y.prototype.ag;
    Y.prototype.getClosestFeatureToCoordinate = Y.prototype.Dh;
    Y.prototype.getExtent = Y.prototype.G;
    Y.prototype.getFeatureById = Y.prototype.Gh;
    Y.prototype.getFormat = Y.prototype.Wi;
    Y.prototype.getUrl = Y.prototype.Xi;
    Y.prototype.removeFeature = Y.prototype.Fb;
    Y.prototype.getAttributions = Y.prototype.Aa;
    Y.prototype.getLogo = Y.prototype.ya;
    Y.prototype.getProjection = Y.prototype.Ba;
    Y.prototype.getState = Y.prototype.getState;
    Y.prototype.refresh = Y.prototype.ra;
    Y.prototype.setAttributions = Y.prototype.wa;
    Y.prototype.get = Y.prototype.get;
    Y.prototype.getKeys = Y.prototype.O;
    Y.prototype.getProperties = Y.prototype.N;
    Y.prototype.set = Y.prototype.set;
    Y.prototype.setProperties = Y.prototype.H;
    Y.prototype.unset = Y.prototype.P;
    Y.prototype.changed = Y.prototype.s;
    Y.prototype.dispatchEvent = Y.prototype.b;
    Y.prototype.getRevision = Y.prototype.L;
    Y.prototype.on = Y.prototype.J;
    Y.prototype.once = Y.prototype.once;
    Y.prototype.un = Y.prototype.K;
    dw.prototype.getAttributions = dw.prototype.Aa;
    dw.prototype.getLogo = dw.prototype.ya;
    dw.prototype.getProjection = dw.prototype.Ba;
    dw.prototype.getState = dw.prototype.getState;
    dw.prototype.refresh = dw.prototype.ra;
    dw.prototype.setAttributions = dw.prototype.wa;
    dw.prototype.get = dw.prototype.get;
    dw.prototype.getKeys = dw.prototype.O;
    dw.prototype.getProperties = dw.prototype.N;
    dw.prototype.set = dw.prototype.set;
    dw.prototype.setProperties = dw.prototype.H;
    dw.prototype.unset = dw.prototype.P;
    dw.prototype.changed = dw.prototype.s;
    dw.prototype.dispatchEvent = dw.prototype.b;
    dw.prototype.getRevision = dw.prototype.L;
    dw.prototype.on = dw.prototype.J;
    dw.prototype.once = dw.prototype.once;
    dw.prototype.un = dw.prototype.K;
    fw.prototype.type = fw.prototype.type;
    fw.prototype.target = fw.prototype.target;
    fw.prototype.preventDefault = fw.prototype.preventDefault;
    fw.prototype.stopPropagation = fw.prototype.stopPropagation;
    hx.prototype.getAttributions = hx.prototype.Aa;
    hx.prototype.getLogo = hx.prototype.ya;
    hx.prototype.getProjection = hx.prototype.Ba;
    hx.prototype.getState = hx.prototype.getState;
    hx.prototype.refresh = hx.prototype.ra;
    hx.prototype.setAttributions = hx.prototype.wa;
    hx.prototype.get = hx.prototype.get;
    hx.prototype.getKeys = hx.prototype.O;
    hx.prototype.getProperties = hx.prototype.N;
    hx.prototype.set = hx.prototype.set;
    hx.prototype.setProperties = hx.prototype.H;
    hx.prototype.unset = hx.prototype.P;
    hx.prototype.changed = hx.prototype.s;
    hx.prototype.dispatchEvent = hx.prototype.b;
    hx.prototype.getRevision = hx.prototype.L;
    hx.prototype.on = hx.prototype.J;
    hx.prototype.once = hx.prototype.once;
    hx.prototype.un = hx.prototype.K;
    kw.prototype.getAttributions = kw.prototype.Aa;
    kw.prototype.getLogo = kw.prototype.ya;
    kw.prototype.getProjection = kw.prototype.Ba;
    kw.prototype.getState = kw.prototype.getState;
    kw.prototype.refresh = kw.prototype.ra;
    kw.prototype.setAttributions = kw.prototype.wa;
    kw.prototype.get = kw.prototype.get;
    kw.prototype.getKeys = kw.prototype.O;
    kw.prototype.getProperties = kw.prototype.N;
    kw.prototype.set = kw.prototype.set;
    kw.prototype.setProperties = kw.prototype.H;
    kw.prototype.unset = kw.prototype.P;
    kw.prototype.changed = kw.prototype.s;
    kw.prototype.dispatchEvent = kw.prototype.b;
    kw.prototype.getRevision = kw.prototype.L;
    kw.prototype.on = kw.prototype.J;
    kw.prototype.once = kw.prototype.once;
    kw.prototype.un = kw.prototype.K;
    ix.prototype.getAttributions = ix.prototype.Aa;
    ix.prototype.getLogo = ix.prototype.ya;
    ix.prototype.getProjection = ix.prototype.Ba;
    ix.prototype.getState = ix.prototype.getState;
    ix.prototype.refresh = ix.prototype.ra;
    ix.prototype.setAttributions = ix.prototype.wa;
    ix.prototype.get = ix.prototype.get;
    ix.prototype.getKeys = ix.prototype.O;
    ix.prototype.getProperties = ix.prototype.N;
    ix.prototype.set = ix.prototype.set;
    ix.prototype.setProperties = ix.prototype.H;
    ix.prototype.unset = ix.prototype.P;
    ix.prototype.changed = ix.prototype.s;
    ix.prototype.dispatchEvent = ix.prototype.b;
    ix.prototype.getRevision = ix.prototype.L;
    ix.prototype.on = ix.prototype.J;
    ix.prototype.once = ix.prototype.once;
    ix.prototype.un = ix.prototype.K;
    jx.prototype.getAttributions = jx.prototype.Aa;
    jx.prototype.getLogo = jx.prototype.ya;
    jx.prototype.getProjection = jx.prototype.Ba;
    jx.prototype.getState = jx.prototype.getState;
    jx.prototype.refresh = jx.prototype.ra;
    jx.prototype.setAttributions = jx.prototype.wa;
    jx.prototype.get = jx.prototype.get;
    jx.prototype.getKeys = jx.prototype.O;
    jx.prototype.getProperties = jx.prototype.N;
    jx.prototype.set = jx.prototype.set;
    jx.prototype.setProperties = jx.prototype.H;
    jx.prototype.unset = jx.prototype.P;
    jx.prototype.changed = jx.prototype.s;
    jx.prototype.dispatchEvent = jx.prototype.b;
    jx.prototype.getRevision = jx.prototype.L;
    jx.prototype.on = jx.prototype.J;
    jx.prototype.once = jx.prototype.once;
    jx.prototype.un = jx.prototype.K;
    lw.prototype.getAttributions = lw.prototype.Aa;
    lw.prototype.getLogo = lw.prototype.ya;
    lw.prototype.getProjection = lw.prototype.Ba;
    lw.prototype.getState = lw.prototype.getState;
    lw.prototype.refresh = lw.prototype.ra;
    lw.prototype.setAttributions = lw.prototype.wa;
    lw.prototype.get = lw.prototype.get;
    lw.prototype.getKeys = lw.prototype.O;
    lw.prototype.getProperties = lw.prototype.N;
    lw.prototype.set = lw.prototype.set;
    lw.prototype.setProperties = lw.prototype.H;
    lw.prototype.unset = lw.prototype.P;
    lw.prototype.changed = lw.prototype.s;
    lw.prototype.dispatchEvent = lw.prototype.b;
    lw.prototype.getRevision = lw.prototype.L;
    lw.prototype.on = lw.prototype.J;
    lw.prototype.once = lw.prototype.once;
    lw.prototype.un = lw.prototype.K;
    kx.prototype.getAttributions = kx.prototype.Aa;
    kx.prototype.getLogo = kx.prototype.ya;
    kx.prototype.getProjection = kx.prototype.Ba;
    kx.prototype.getState = kx.prototype.getState;
    kx.prototype.refresh = kx.prototype.ra;
    kx.prototype.setAttributions = kx.prototype.wa;
    kx.prototype.get = kx.prototype.get;
    kx.prototype.getKeys = kx.prototype.O;
    kx.prototype.getProperties = kx.prototype.N;
    kx.prototype.set = kx.prototype.set;
    kx.prototype.setProperties = kx.prototype.H;
    kx.prototype.unset = kx.prototype.P;
    kx.prototype.changed = kx.prototype.s;
    kx.prototype.dispatchEvent = kx.prototype.b;
    kx.prototype.getRevision = kx.prototype.L;
    kx.prototype.on = kx.prototype.J;
    kx.prototype.once = kx.prototype.once;
    kx.prototype.un = kx.prototype.K;
    ox.prototype.setRenderReprojectionEdges = ox.prototype.Nb;
    ox.prototype.setTileGridForProjection = ox.prototype.Ob;
    ox.prototype.getTileLoadFunction = ox.prototype.tb;
    ox.prototype.getTileUrlFunction = ox.prototype.ub;
    ox.prototype.getUrls = ox.prototype.vb;
    ox.prototype.setTileLoadFunction = ox.prototype.zb;
    ox.prototype.setTileUrlFunction = ox.prototype.hb;
    ox.prototype.setUrl = ox.prototype.nb;
    ox.prototype.setUrls = ox.prototype.ib;
    ox.prototype.getTileGrid = ox.prototype.cb;
    ox.prototype.refresh = ox.prototype.ra;
    ox.prototype.getAttributions = ox.prototype.Aa;
    ox.prototype.getLogo = ox.prototype.ya;
    ox.prototype.getProjection = ox.prototype.Ba;
    ox.prototype.getState = ox.prototype.getState;
    ox.prototype.setAttributions = ox.prototype.wa;
    ox.prototype.get = ox.prototype.get;
    ox.prototype.getKeys = ox.prototype.O;
    ox.prototype.getProperties = ox.prototype.N;
    ox.prototype.set = ox.prototype.set;
    ox.prototype.setProperties = ox.prototype.H;
    ox.prototype.unset = ox.prototype.P;
    ox.prototype.changed = ox.prototype.s;
    ox.prototype.dispatchEvent = ox.prototype.b;
    ox.prototype.getRevision = ox.prototype.L;
    ox.prototype.on = ox.prototype.J;
    ox.prototype.once = ox.prototype.once;
    ox.prototype.un = ox.prototype.K;
    qx.prototype.getAttributions = qx.prototype.Aa;
    qx.prototype.getLogo = qx.prototype.ya;
    qx.prototype.getProjection = qx.prototype.Ba;
    qx.prototype.getState = qx.prototype.getState;
    qx.prototype.refresh = qx.prototype.ra;
    qx.prototype.setAttributions = qx.prototype.wa;
    qx.prototype.get = qx.prototype.get;
    qx.prototype.getKeys = qx.prototype.O;
    qx.prototype.getProperties = qx.prototype.N;
    qx.prototype.set = qx.prototype.set;
    qx.prototype.setProperties = qx.prototype.H;
    qx.prototype.unset = qx.prototype.P;
    qx.prototype.changed = qx.prototype.s;
    qx.prototype.dispatchEvent = qx.prototype.b;
    qx.prototype.getRevision = qx.prototype.L;
    qx.prototype.on = qx.prototype.J;
    qx.prototype.once = qx.prototype.once;
    qx.prototype.un = qx.prototype.K;
    ux.prototype.type = ux.prototype.type;
    ux.prototype.target = ux.prototype.target;
    ux.prototype.preventDefault = ux.prototype.preventDefault;
    ux.prototype.stopPropagation = ux.prototype.stopPropagation;
    xx.prototype.setRenderReprojectionEdges = xx.prototype.Nb;
    xx.prototype.setTileGridForProjection = xx.prototype.Ob;
    xx.prototype.getTileLoadFunction = xx.prototype.tb;
    xx.prototype.getTileUrlFunction = xx.prototype.ub;
    xx.prototype.getUrls = xx.prototype.vb;
    xx.prototype.setTileLoadFunction = xx.prototype.zb;
    xx.prototype.setTileUrlFunction = xx.prototype.hb;
    xx.prototype.setUrl = xx.prototype.nb;
    xx.prototype.setUrls = xx.prototype.ib;
    xx.prototype.getTileGrid = xx.prototype.cb;
    xx.prototype.refresh = xx.prototype.ra;
    xx.prototype.getAttributions = xx.prototype.Aa;
    xx.prototype.getLogo = xx.prototype.ya;
    xx.prototype.getProjection = xx.prototype.Ba;
    xx.prototype.getState = xx.prototype.getState;
    xx.prototype.setAttributions = xx.prototype.wa;
    xx.prototype.get = xx.prototype.get;
    xx.prototype.getKeys = xx.prototype.O;
    xx.prototype.getProperties = xx.prototype.N;
    xx.prototype.set = xx.prototype.set;
    xx.prototype.setProperties = xx.prototype.H;
    xx.prototype.unset = xx.prototype.P;
    xx.prototype.changed = xx.prototype.s;
    xx.prototype.dispatchEvent = xx.prototype.b;
    xx.prototype.getRevision = xx.prototype.L;
    xx.prototype.on = xx.prototype.J;
    xx.prototype.once = xx.prototype.once;
    xx.prototype.un = xx.prototype.K;
    Uw.prototype.type = Uw.prototype.type;
    Uw.prototype.target = Uw.prototype.target;
    Uw.prototype.preventDefault = Uw.prototype.preventDefault;
    Uw.prototype.stopPropagation = Uw.prototype.stopPropagation;
    Bx.prototype.setRenderReprojectionEdges = Bx.prototype.Nb;
    Bx.prototype.setTileGridForProjection = Bx.prototype.Ob;
    Bx.prototype.getTileLoadFunction = Bx.prototype.tb;
    Bx.prototype.getTileUrlFunction = Bx.prototype.ub;
    Bx.prototype.getUrls = Bx.prototype.vb;
    Bx.prototype.setTileLoadFunction = Bx.prototype.zb;
    Bx.prototype.setTileUrlFunction = Bx.prototype.hb;
    Bx.prototype.setUrl = Bx.prototype.nb;
    Bx.prototype.setUrls = Bx.prototype.ib;
    Bx.prototype.getTileGrid = Bx.prototype.cb;
    Bx.prototype.refresh = Bx.prototype.ra;
    Bx.prototype.getAttributions = Bx.prototype.Aa;
    Bx.prototype.getLogo = Bx.prototype.ya;
    Bx.prototype.getProjection = Bx.prototype.Ba;
    Bx.prototype.getState = Bx.prototype.getState;
    Bx.prototype.setAttributions = Bx.prototype.wa;
    Bx.prototype.get = Bx.prototype.get;
    Bx.prototype.getKeys = Bx.prototype.O;
    Bx.prototype.getProperties = Bx.prototype.N;
    Bx.prototype.set = Bx.prototype.set;
    Bx.prototype.setProperties = Bx.prototype.H;
    Bx.prototype.unset = Bx.prototype.P;
    Bx.prototype.changed = Bx.prototype.s;
    Bx.prototype.dispatchEvent = Bx.prototype.b;
    Bx.prototype.getRevision = Bx.prototype.L;
    Bx.prototype.on = Bx.prototype.J;
    Bx.prototype.once = Bx.prototype.once;
    Bx.prototype.un = Bx.prototype.K;
    Dx.prototype.getTileGrid = Dx.prototype.cb;
    Dx.prototype.refresh = Dx.prototype.ra;
    Dx.prototype.getAttributions = Dx.prototype.Aa;
    Dx.prototype.getLogo = Dx.prototype.ya;
    Dx.prototype.getProjection = Dx.prototype.Ba;
    Dx.prototype.getState = Dx.prototype.getState;
    Dx.prototype.setAttributions = Dx.prototype.wa;
    Dx.prototype.get = Dx.prototype.get;
    Dx.prototype.getKeys = Dx.prototype.O;
    Dx.prototype.getProperties = Dx.prototype.N;
    Dx.prototype.set = Dx.prototype.set;
    Dx.prototype.setProperties = Dx.prototype.H;
    Dx.prototype.unset = Dx.prototype.P;
    Dx.prototype.changed = Dx.prototype.s;
    Dx.prototype.dispatchEvent = Dx.prototype.b;
    Dx.prototype.getRevision = Dx.prototype.L;
    Dx.prototype.on = Dx.prototype.J;
    Dx.prototype.once = Dx.prototype.once;
    Dx.prototype.un = Dx.prototype.K;
    Fx.prototype.setRenderReprojectionEdges = Fx.prototype.Nb;
    Fx.prototype.setTileGridForProjection = Fx.prototype.Ob;
    Fx.prototype.getTileLoadFunction = Fx.prototype.tb;
    Fx.prototype.getTileUrlFunction = Fx.prototype.ub;
    Fx.prototype.getUrls = Fx.prototype.vb;
    Fx.prototype.setTileLoadFunction = Fx.prototype.zb;
    Fx.prototype.setTileUrlFunction = Fx.prototype.hb;
    Fx.prototype.setUrl = Fx.prototype.nb;
    Fx.prototype.setUrls = Fx.prototype.ib;
    Fx.prototype.getTileGrid = Fx.prototype.cb;
    Fx.prototype.refresh = Fx.prototype.ra;
    Fx.prototype.getAttributions = Fx.prototype.Aa;
    Fx.prototype.getLogo = Fx.prototype.ya;
    Fx.prototype.getProjection = Fx.prototype.Ba;
    Fx.prototype.getState = Fx.prototype.getState;
    Fx.prototype.setAttributions = Fx.prototype.wa;
    Fx.prototype.get = Fx.prototype.get;
    Fx.prototype.getKeys = Fx.prototype.O;
    Fx.prototype.getProperties = Fx.prototype.N;
    Fx.prototype.set = Fx.prototype.set;
    Fx.prototype.setProperties = Fx.prototype.H;
    Fx.prototype.unset = Fx.prototype.P;
    Fx.prototype.changed = Fx.prototype.s;
    Fx.prototype.dispatchEvent = Fx.prototype.b;
    Fx.prototype.getRevision = Fx.prototype.L;
    Fx.prototype.on = Fx.prototype.J;
    Fx.prototype.once = Fx.prototype.once;
    Fx.prototype.un = Fx.prototype.K;
    Gx.prototype.getTileGrid = Gx.prototype.cb;
    Gx.prototype.refresh = Gx.prototype.ra;
    Gx.prototype.getAttributions = Gx.prototype.Aa;
    Gx.prototype.getLogo = Gx.prototype.ya;
    Gx.prototype.getProjection = Gx.prototype.Ba;
    Gx.prototype.getState = Gx.prototype.getState;
    Gx.prototype.setAttributions = Gx.prototype.wa;
    Gx.prototype.get = Gx.prototype.get;
    Gx.prototype.getKeys = Gx.prototype.O;
    Gx.prototype.getProperties = Gx.prototype.N;
    Gx.prototype.set = Gx.prototype.set;
    Gx.prototype.setProperties = Gx.prototype.H;
    Gx.prototype.unset = Gx.prototype.P;
    Gx.prototype.changed = Gx.prototype.s;
    Gx.prototype.dispatchEvent = Gx.prototype.b;
    Gx.prototype.getRevision = Gx.prototype.L;
    Gx.prototype.on = Gx.prototype.J;
    Gx.prototype.once = Gx.prototype.once;
    Gx.prototype.un = Gx.prototype.K;
    Kx.prototype.setRenderReprojectionEdges = Kx.prototype.Nb;
    Kx.prototype.setTileGridForProjection = Kx.prototype.Ob;
    Kx.prototype.getTileLoadFunction = Kx.prototype.tb;
    Kx.prototype.getTileUrlFunction = Kx.prototype.ub;
    Kx.prototype.getUrls = Kx.prototype.vb;
    Kx.prototype.setTileLoadFunction = Kx.prototype.zb;
    Kx.prototype.setTileUrlFunction = Kx.prototype.hb;
    Kx.prototype.setUrl = Kx.prototype.nb;
    Kx.prototype.setUrls = Kx.prototype.ib;
    Kx.prototype.getTileGrid = Kx.prototype.cb;
    Kx.prototype.refresh = Kx.prototype.ra;
    Kx.prototype.getAttributions = Kx.prototype.Aa;
    Kx.prototype.getLogo = Kx.prototype.ya;
    Kx.prototype.getProjection = Kx.prototype.Ba;
    Kx.prototype.getState = Kx.prototype.getState;
    Kx.prototype.setAttributions = Kx.prototype.wa;
    Kx.prototype.get = Kx.prototype.get;
    Kx.prototype.getKeys = Kx.prototype.O;
    Kx.prototype.getProperties = Kx.prototype.N;
    Kx.prototype.set = Kx.prototype.set;
    Kx.prototype.setProperties = Kx.prototype.H;
    Kx.prototype.unset = Kx.prototype.P;
    Kx.prototype.changed = Kx.prototype.s;
    Kx.prototype.dispatchEvent = Kx.prototype.b;
    Kx.prototype.getRevision = Kx.prototype.L;
    Kx.prototype.on = Kx.prototype.J;
    Kx.prototype.once = Kx.prototype.once;
    Kx.prototype.un = Kx.prototype.K;
    Eu.prototype.type = Eu.prototype.type;
    Eu.prototype.target = Eu.prototype.target;
    Eu.prototype.preventDefault = Eu.prototype.preventDefault;
    Eu.prototype.stopPropagation = Eu.prototype.stopPropagation;
    Tx.prototype.getTileLoadFunction = Tx.prototype.tb;
    Tx.prototype.getTileUrlFunction = Tx.prototype.ub;
    Tx.prototype.getUrls = Tx.prototype.vb;
    Tx.prototype.setTileLoadFunction = Tx.prototype.zb;
    Tx.prototype.setTileUrlFunction = Tx.prototype.hb;
    Tx.prototype.setUrl = Tx.prototype.nb;
    Tx.prototype.setUrls = Tx.prototype.ib;
    Tx.prototype.getTileGrid = Tx.prototype.cb;
    Tx.prototype.refresh = Tx.prototype.ra;
    Tx.prototype.getAttributions = Tx.prototype.Aa;
    Tx.prototype.getLogo = Tx.prototype.ya;
    Tx.prototype.getProjection = Tx.prototype.Ba;
    Tx.prototype.getState = Tx.prototype.getState;
    Tx.prototype.setAttributions = Tx.prototype.wa;
    Tx.prototype.get = Tx.prototype.get;
    Tx.prototype.getKeys = Tx.prototype.O;
    Tx.prototype.getProperties = Tx.prototype.N;
    Tx.prototype.set = Tx.prototype.set;
    Tx.prototype.setProperties = Tx.prototype.H;
    Tx.prototype.unset = Tx.prototype.P;
    Tx.prototype.changed = Tx.prototype.s;
    Tx.prototype.dispatchEvent = Tx.prototype.b;
    Tx.prototype.getRevision = Tx.prototype.L;
    Tx.prototype.on = Tx.prototype.J;
    Tx.prototype.once = Tx.prototype.once;
    Tx.prototype.un = Tx.prototype.K;
    Z.prototype.setRenderReprojectionEdges = Z.prototype.Nb;
    Z.prototype.setTileGridForProjection = Z.prototype.Ob;
    Z.prototype.getTileLoadFunction = Z.prototype.tb;
    Z.prototype.getTileUrlFunction = Z.prototype.ub;
    Z.prototype.getUrls = Z.prototype.vb;
    Z.prototype.setTileLoadFunction = Z.prototype.zb;
    Z.prototype.setTileUrlFunction = Z.prototype.hb;
    Z.prototype.setUrl = Z.prototype.nb;
    Z.prototype.setUrls = Z.prototype.ib;
    Z.prototype.getTileGrid = Z.prototype.cb;
    Z.prototype.refresh = Z.prototype.ra;
    Z.prototype.getAttributions = Z.prototype.Aa;
    Z.prototype.getLogo = Z.prototype.ya;
    Z.prototype.getProjection = Z.prototype.Ba;
    Z.prototype.getState = Z.prototype.getState;
    Z.prototype.setAttributions = Z.prototype.wa;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.O;
    Z.prototype.getProperties = Z.prototype.N;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.H;
    Z.prototype.unset = Z.prototype.P;
    Z.prototype.changed = Z.prototype.s;
    Z.prototype.dispatchEvent = Z.prototype.b;
    Z.prototype.getRevision = Z.prototype.L;
    Z.prototype.on = Z.prototype.J;
    Z.prototype.once = Z.prototype.once;
    Z.prototype.un = Z.prototype.K;
    Xx.prototype.setRenderReprojectionEdges = Xx.prototype.Nb;
    Xx.prototype.setTileGridForProjection = Xx.prototype.Ob;
    Xx.prototype.getTileLoadFunction = Xx.prototype.tb;
    Xx.prototype.getTileUrlFunction = Xx.prototype.ub;
    Xx.prototype.getUrls = Xx.prototype.vb;
    Xx.prototype.setTileLoadFunction = Xx.prototype.zb;
    Xx.prototype.setTileUrlFunction = Xx.prototype.hb;
    Xx.prototype.setUrl = Xx.prototype.nb;
    Xx.prototype.setUrls = Xx.prototype.ib;
    Xx.prototype.getTileGrid = Xx.prototype.cb;
    Xx.prototype.refresh = Xx.prototype.ra;
    Xx.prototype.getAttributions = Xx.prototype.Aa;
    Xx.prototype.getLogo = Xx.prototype.ya;
    Xx.prototype.getProjection = Xx.prototype.Ba;
    Xx.prototype.getState = Xx.prototype.getState;
    Xx.prototype.setAttributions = Xx.prototype.wa;
    Xx.prototype.get = Xx.prototype.get;
    Xx.prototype.getKeys = Xx.prototype.O;
    Xx.prototype.getProperties = Xx.prototype.N;
    Xx.prototype.set = Xx.prototype.set;
    Xx.prototype.setProperties = Xx.prototype.H;
    Xx.prototype.unset = Xx.prototype.P;
    Xx.prototype.changed = Xx.prototype.s;
    Xx.prototype.dispatchEvent = Xx.prototype.b;
    Xx.prototype.getRevision = Xx.prototype.L;
    Xx.prototype.on = Xx.prototype.J;
    Xx.prototype.once = Xx.prototype.once;
    Xx.prototype.un = Xx.prototype.K;
    Jw.prototype.getTileCoord = Jw.prototype.i;
    Jw.prototype.load = Jw.prototype.load;
    Ut.prototype.changed = Ut.prototype.s;
    Ut.prototype.dispatchEvent = Ut.prototype.b;
    Ut.prototype.getRevision = Ut.prototype.L;
    Ut.prototype.on = Ut.prototype.J;
    Ut.prototype.once = Ut.prototype.once;
    Ut.prototype.un = Ut.prototype.K;
    su.prototype.changed = su.prototype.s;
    su.prototype.dispatchEvent = su.prototype.b;
    su.prototype.getRevision = su.prototype.L;
    su.prototype.on = su.prototype.J;
    su.prototype.once = su.prototype.once;
    su.prototype.un = su.prototype.K;
    nw.prototype.changed = nw.prototype.s;
    nw.prototype.dispatchEvent = nw.prototype.b;
    nw.prototype.getRevision = nw.prototype.L;
    nw.prototype.on = nw.prototype.J;
    nw.prototype.once = nw.prototype.once;
    nw.prototype.un = nw.prototype.K;
    yw.prototype.changed = yw.prototype.s;
    yw.prototype.dispatchEvent = yw.prototype.b;
    yw.prototype.getRevision = yw.prototype.L;
    yw.prototype.on = yw.prototype.J;
    yw.prototype.once = yw.prototype.once;
    yw.prototype.un = yw.prototype.K;
    vu.prototype.changed = vu.prototype.s;
    vu.prototype.dispatchEvent = vu.prototype.b;
    vu.prototype.getRevision = vu.prototype.L;
    vu.prototype.on = vu.prototype.J;
    vu.prototype.once = vu.prototype.once;
    vu.prototype.un = vu.prototype.K;
    cu.prototype.changed = cu.prototype.s;
    cu.prototype.dispatchEvent = cu.prototype.b;
    cu.prototype.getRevision = cu.prototype.L;
    cu.prototype.on = cu.prototype.J;
    cu.prototype.once = cu.prototype.once;
    cu.prototype.un = cu.prototype.K;
    Vv.prototype.changed = Vv.prototype.s;
    Vv.prototype.dispatchEvent = Vv.prototype.b;
    Vv.prototype.getRevision = Vv.prototype.L;
    Vv.prototype.on = Vv.prototype.J;
    Vv.prototype.once = Vv.prototype.once;
    Vv.prototype.un = Vv.prototype.K;
    Wv.prototype.changed = Wv.prototype.s;
    Wv.prototype.dispatchEvent = Wv.prototype.b;
    Wv.prototype.getRevision = Wv.prototype.L;
    Wv.prototype.on = Wv.prototype.J;
    Wv.prototype.once = Wv.prototype.once;
    Wv.prototype.un = Wv.prototype.K;
    rw.prototype.changed = rw.prototype.s;
    rw.prototype.dispatchEvent = rw.prototype.b;
    rw.prototype.getRevision = rw.prototype.L;
    rw.prototype.on = rw.prototype.J;
    rw.prototype.once = rw.prototype.once;
    rw.prototype.un = rw.prototype.K;
    lu.prototype.changed = lu.prototype.s;
    lu.prototype.dispatchEvent = lu.prototype.b;
    lu.prototype.getRevision = lu.prototype.L;
    lu.prototype.on = lu.prototype.J;
    lu.prototype.once = lu.prototype.once;
    lu.prototype.un = lu.prototype.K;
    Aw.prototype.changed = Aw.prototype.s;
    Aw.prototype.dispatchEvent = Aw.prototype.b;
    Aw.prototype.getRevision = Aw.prototype.L;
    Aw.prototype.on = Aw.prototype.J;
    Aw.prototype.once = Aw.prototype.once;
    Aw.prototype.un = Aw.prototype.K;
    Yh.prototype.type = Yh.prototype.type;
    Yh.prototype.target = Yh.prototype.target;
    Yh.prototype.preventDefault = Yh.prototype.preventDefault;
    Yh.prototype.stopPropagation = Yh.prototype.stopPropagation;
    te.prototype.type = te.prototype.type;
    te.prototype.target = te.prototype.target;
    te.prototype.preventDefault = te.prototype.preventDefault;
    te.prototype.stopPropagation = te.prototype.stopPropagation;
    xh.prototype.get = xh.prototype.get;
    xh.prototype.getKeys = xh.prototype.O;
    xh.prototype.getProperties = xh.prototype.N;
    xh.prototype.set = xh.prototype.set;
    xh.prototype.setProperties = xh.prototype.H;
    xh.prototype.unset = xh.prototype.P;
    xh.prototype.changed = xh.prototype.s;
    xh.prototype.dispatchEvent = xh.prototype.b;
    xh.prototype.getRevision = xh.prototype.L;
    xh.prototype.on = xh.prototype.J;
    xh.prototype.once = xh.prototype.once;
    xh.prototype.un = xh.prototype.K;
    zh.prototype.getExtent = zh.prototype.G;
    zh.prototype.getMaxResolution = zh.prototype.fc;
    zh.prototype.getMinResolution = zh.prototype.gc;
    zh.prototype.getOpacity = zh.prototype.hc;
    zh.prototype.getVisible = zh.prototype.Sb;
    zh.prototype.getZIndex = zh.prototype.za;
    zh.prototype.setExtent = zh.prototype.xc;
    zh.prototype.setMaxResolution = zh.prototype.Bc;
    zh.prototype.setMinResolution = zh.prototype.Cc;
    zh.prototype.setOpacity = zh.prototype.yc;
    zh.prototype.setVisible = zh.prototype.zc;
    zh.prototype.setZIndex = zh.prototype.Wb;
    zh.prototype.get = zh.prototype.get;
    zh.prototype.getKeys = zh.prototype.O;
    zh.prototype.getProperties = zh.prototype.N;
    zh.prototype.set = zh.prototype.set;
    zh.prototype.setProperties = zh.prototype.H;
    zh.prototype.unset = zh.prototype.P;
    zh.prototype.changed = zh.prototype.s;
    zh.prototype.dispatchEvent = zh.prototype.b;
    zh.prototype.getRevision = zh.prototype.L;
    zh.prototype.on = zh.prototype.J;
    zh.prototype.once = zh.prototype.once;
    zh.prototype.un = zh.prototype.K;
    Dh.prototype.getExtent = Dh.prototype.G;
    Dh.prototype.getMaxResolution = Dh.prototype.fc;
    Dh.prototype.getMinResolution = Dh.prototype.gc;
    Dh.prototype.getOpacity = Dh.prototype.hc;
    Dh.prototype.getVisible = Dh.prototype.Sb;
    Dh.prototype.getZIndex = Dh.prototype.za;
    Dh.prototype.setExtent = Dh.prototype.xc;
    Dh.prototype.setMaxResolution = Dh.prototype.Bc;
    Dh.prototype.setMinResolution = Dh.prototype.Cc;
    Dh.prototype.setOpacity = Dh.prototype.yc;
    Dh.prototype.setVisible = Dh.prototype.zc;
    Dh.prototype.setZIndex = Dh.prototype.Wb;
    Dh.prototype.get = Dh.prototype.get;
    Dh.prototype.getKeys = Dh.prototype.O;
    Dh.prototype.getProperties = Dh.prototype.N;
    Dh.prototype.set = Dh.prototype.set;
    Dh.prototype.setProperties = Dh.prototype.H;
    Dh.prototype.unset = Dh.prototype.P;
    Dh.prototype.changed = Dh.prototype.s;
    Dh.prototype.dispatchEvent = Dh.prototype.b;
    Dh.prototype.getRevision = Dh.prototype.L;
    Dh.prototype.on = Dh.prototype.J;
    Dh.prototype.once = Dh.prototype.once;
    Dh.prototype.un = Dh.prototype.K;
    S.prototype.setMap = S.prototype.setMap;
    S.prototype.setSource = S.prototype.Zc;
    S.prototype.getExtent = S.prototype.G;
    S.prototype.getMaxResolution = S.prototype.fc;
    S.prototype.getMinResolution = S.prototype.gc;
    S.prototype.getOpacity = S.prototype.hc;
    S.prototype.getVisible = S.prototype.Sb;
    S.prototype.getZIndex = S.prototype.za;
    S.prototype.setExtent = S.prototype.xc;
    S.prototype.setMaxResolution = S.prototype.Bc;
    S.prototype.setMinResolution = S.prototype.Cc;
    S.prototype.setOpacity = S.prototype.yc;
    S.prototype.setVisible = S.prototype.zc;
    S.prototype.setZIndex = S.prototype.Wb;
    S.prototype.get = S.prototype.get;
    S.prototype.getKeys = S.prototype.O;
    S.prototype.getProperties = S.prototype.N;
    S.prototype.set = S.prototype.set;
    S.prototype.setProperties = S.prototype.H;
    S.prototype.unset = S.prototype.P;
    S.prototype.changed = S.prototype.s;
    S.prototype.dispatchEvent = S.prototype.b;
    S.prototype.getRevision = S.prototype.L;
    S.prototype.on = S.prototype.J;
    S.prototype.once = S.prototype.once;
    S.prototype.un = S.prototype.K;
    W.prototype.getSource = W.prototype.ia;
    W.prototype.getStyle = W.prototype.u;
    W.prototype.getStyleFunction = W.prototype.bb;
    W.prototype.setStyle = W.prototype.i;
    W.prototype.setMap = W.prototype.setMap;
    W.prototype.setSource = W.prototype.Zc;
    W.prototype.getExtent = W.prototype.G;
    W.prototype.getMaxResolution = W.prototype.fc;
    W.prototype.getMinResolution = W.prototype.gc;
    W.prototype.getOpacity = W.prototype.hc;
    W.prototype.getVisible = W.prototype.Sb;
    W.prototype.getZIndex = W.prototype.za;
    W.prototype.setExtent = W.prototype.xc;
    W.prototype.setMaxResolution = W.prototype.Bc;
    W.prototype.setMinResolution = W.prototype.Cc;
    W.prototype.setOpacity = W.prototype.yc;
    W.prototype.setVisible = W.prototype.zc;
    W.prototype.setZIndex = W.prototype.Wb;
    W.prototype.get = W.prototype.get;
    W.prototype.getKeys = W.prototype.O;
    W.prototype.getProperties = W.prototype.N;
    W.prototype.set = W.prototype.set;
    W.prototype.setProperties = W.prototype.H;
    W.prototype.unset = W.prototype.P;
    W.prototype.changed = W.prototype.s;
    W.prototype.dispatchEvent = W.prototype.b;
    W.prototype.getRevision = W.prototype.L;
    W.prototype.on = W.prototype.J;
    W.prototype.once = W.prototype.once;
    W.prototype.un = W.prototype.K;
    qw.prototype.setMap = qw.prototype.setMap;
    qw.prototype.setSource = qw.prototype.Zc;
    qw.prototype.getExtent = qw.prototype.G;
    qw.prototype.getMaxResolution = qw.prototype.fc;
    qw.prototype.getMinResolution = qw.prototype.gc;
    qw.prototype.getOpacity = qw.prototype.hc;
    qw.prototype.getVisible = qw.prototype.Sb;
    qw.prototype.getZIndex = qw.prototype.za;
    qw.prototype.setExtent = qw.prototype.xc;
    qw.prototype.setMaxResolution = qw.prototype.Bc;
    qw.prototype.setMinResolution = qw.prototype.Cc;
    qw.prototype.setOpacity = qw.prototype.yc;
    qw.prototype.setVisible = qw.prototype.zc;
    qw.prototype.setZIndex = qw.prototype.Wb;
    qw.prototype.get = qw.prototype.get;
    qw.prototype.getKeys = qw.prototype.O;
    qw.prototype.getProperties = qw.prototype.N;
    qw.prototype.set = qw.prototype.set;
    qw.prototype.setProperties = qw.prototype.H;
    qw.prototype.unset = qw.prototype.P;
    qw.prototype.changed = qw.prototype.s;
    qw.prototype.dispatchEvent = qw.prototype.b;
    qw.prototype.getRevision = qw.prototype.L;
    qw.prototype.on = qw.prototype.J;
    qw.prototype.once = qw.prototype.once;
    qw.prototype.un = qw.prototype.K;
    zw.prototype.setMap = zw.prototype.setMap;
    zw.prototype.setSource = zw.prototype.Zc;
    zw.prototype.getExtent = zw.prototype.G;
    zw.prototype.getMaxResolution = zw.prototype.fc;
    zw.prototype.getMinResolution = zw.prototype.gc;
    zw.prototype.getOpacity = zw.prototype.hc;
    zw.prototype.getVisible = zw.prototype.Sb;
    zw.prototype.getZIndex = zw.prototype.za;
    zw.prototype.setExtent = zw.prototype.xc;
    zw.prototype.setMaxResolution = zw.prototype.Bc;
    zw.prototype.setMinResolution = zw.prototype.Cc;
    zw.prototype.setOpacity = zw.prototype.yc;
    zw.prototype.setVisible = zw.prototype.zc;
    zw.prototype.setZIndex = zw.prototype.Wb;
    zw.prototype.get = zw.prototype.get;
    zw.prototype.getKeys = zw.prototype.O;
    zw.prototype.getProperties = zw.prototype.N;
    zw.prototype.set = zw.prototype.set;
    zw.prototype.setProperties = zw.prototype.H;
    zw.prototype.unset = zw.prototype.P;
    zw.prototype.changed = zw.prototype.s;
    zw.prototype.dispatchEvent = zw.prototype.b;
    zw.prototype.getRevision = zw.prototype.L;
    zw.prototype.on = zw.prototype.J;
    zw.prototype.once = zw.prototype.once;
    zw.prototype.un = zw.prototype.K;
    Hw.prototype.getStyle = Hw.prototype.u;
    Hw.prototype.getStyleFunction = Hw.prototype.bb;
    Hw.prototype.setStyle = Hw.prototype.i;
    Hw.prototype.setMap = Hw.prototype.setMap;
    Hw.prototype.setSource = Hw.prototype.Zc;
    Hw.prototype.getExtent = Hw.prototype.G;
    Hw.prototype.getMaxResolution = Hw.prototype.fc;
    Hw.prototype.getMinResolution = Hw.prototype.gc;
    Hw.prototype.getOpacity = Hw.prototype.hc;
    Hw.prototype.getVisible = Hw.prototype.Sb;
    Hw.prototype.getZIndex = Hw.prototype.za;
    Hw.prototype.setExtent = Hw.prototype.xc;
    Hw.prototype.setMaxResolution = Hw.prototype.Bc;
    Hw.prototype.setMinResolution = Hw.prototype.Cc;
    Hw.prototype.setOpacity = Hw.prototype.yc;
    Hw.prototype.setVisible = Hw.prototype.zc;
    Hw.prototype.setZIndex = Hw.prototype.Wb;
    Hw.prototype.get = Hw.prototype.get;
    Hw.prototype.getKeys = Hw.prototype.O;
    Hw.prototype.getProperties = Hw.prototype.N;
    Hw.prototype.set = Hw.prototype.set;
    Hw.prototype.setProperties = Hw.prototype.H;
    Hw.prototype.unset = Hw.prototype.P;
    Hw.prototype.changed = Hw.prototype.s;
    Hw.prototype.dispatchEvent = Hw.prototype.b;
    Hw.prototype.getRevision = Hw.prototype.L;
    Hw.prototype.on = Hw.prototype.J;
    Hw.prototype.once = Hw.prototype.once;
    Hw.prototype.un = Hw.prototype.K;
    sg.prototype.get = sg.prototype.get;
    sg.prototype.getKeys = sg.prototype.O;
    sg.prototype.getProperties = sg.prototype.N;
    sg.prototype.set = sg.prototype.set;
    sg.prototype.setProperties = sg.prototype.H;
    sg.prototype.unset = sg.prototype.P;
    sg.prototype.changed = sg.prototype.s;
    sg.prototype.dispatchEvent = sg.prototype.b;
    sg.prototype.getRevision = sg.prototype.L;
    sg.prototype.on = sg.prototype.J;
    sg.prototype.once = sg.prototype.once;
    sg.prototype.un = sg.prototype.K;
    wg.prototype.getActive = wg.prototype.c;
    wg.prototype.getMap = wg.prototype.i;
    wg.prototype.setActive = wg.prototype.Ia;
    wg.prototype.get = wg.prototype.get;
    wg.prototype.getKeys = wg.prototype.O;
    wg.prototype.getProperties = wg.prototype.N;
    wg.prototype.set = wg.prototype.set;
    wg.prototype.setProperties = wg.prototype.H;
    wg.prototype.unset = wg.prototype.P;
    wg.prototype.changed = wg.prototype.s;
    wg.prototype.dispatchEvent = wg.prototype.b;
    wg.prototype.getRevision = wg.prototype.L;
    wg.prototype.on = wg.prototype.J;
    wg.prototype.once = wg.prototype.once;
    wg.prototype.un = wg.prototype.K;
    mt.prototype.getActive = mt.prototype.c;
    mt.prototype.getMap = mt.prototype.i;
    mt.prototype.setActive = mt.prototype.Ia;
    mt.prototype.get = mt.prototype.get;
    mt.prototype.getKeys = mt.prototype.O;
    mt.prototype.getProperties = mt.prototype.N;
    mt.prototype.set = mt.prototype.set;
    mt.prototype.setProperties = mt.prototype.H;
    mt.prototype.unset = mt.prototype.P;
    mt.prototype.changed = mt.prototype.s;
    mt.prototype.dispatchEvent = mt.prototype.b;
    mt.prototype.getRevision = mt.prototype.L;
    mt.prototype.on = mt.prototype.J;
    mt.prototype.once = mt.prototype.once;
    mt.prototype.un = mt.prototype.K;
    pt.prototype.type = pt.prototype.type;
    pt.prototype.target = pt.prototype.target;
    pt.prototype.preventDefault = pt.prototype.preventDefault;
    pt.prototype.stopPropagation = pt.prototype.stopPropagation;
    Jg.prototype.getActive = Jg.prototype.c;
    Jg.prototype.getMap = Jg.prototype.i;
    Jg.prototype.setActive = Jg.prototype.Ia;
    Jg.prototype.get = Jg.prototype.get;
    Jg.prototype.getKeys = Jg.prototype.O;
    Jg.prototype.getProperties = Jg.prototype.N;
    Jg.prototype.set = Jg.prototype.set;
    Jg.prototype.setProperties = Jg.prototype.H;
    Jg.prototype.unset = Jg.prototype.P;
    Jg.prototype.changed = Jg.prototype.s;
    Jg.prototype.dispatchEvent = Jg.prototype.b;
    Jg.prototype.getRevision = Jg.prototype.L;
    Jg.prototype.on = Jg.prototype.J;
    Jg.prototype.once = Jg.prototype.once;
    Jg.prototype.un = Jg.prototype.K;
    Xg.prototype.getActive = Xg.prototype.c;
    Xg.prototype.getMap = Xg.prototype.i;
    Xg.prototype.setActive = Xg.prototype.Ia;
    Xg.prototype.get = Xg.prototype.get;
    Xg.prototype.getKeys = Xg.prototype.O;
    Xg.prototype.getProperties = Xg.prototype.N;
    Xg.prototype.set = Xg.prototype.set;
    Xg.prototype.setProperties = Xg.prototype.H;
    Xg.prototype.unset = Xg.prototype.P;
    Xg.prototype.changed = Xg.prototype.s;
    Xg.prototype.dispatchEvent = Xg.prototype.b;
    Xg.prototype.getRevision = Xg.prototype.L;
    Xg.prototype.on = Xg.prototype.J;
    Xg.prototype.once = Xg.prototype.once;
    Xg.prototype.un = Xg.prototype.K;
    bh.prototype.type = bh.prototype.type;
    bh.prototype.target = bh.prototype.target;
    bh.prototype.preventDefault = bh.prototype.preventDefault;
    bh.prototype.stopPropagation = bh.prototype.stopPropagation;
    Mg.prototype.getActive = Mg.prototype.c;
    Mg.prototype.getMap = Mg.prototype.i;
    Mg.prototype.setActive = Mg.prototype.Ia;
    Mg.prototype.get = Mg.prototype.get;
    Mg.prototype.getKeys = Mg.prototype.O;
    Mg.prototype.getProperties = Mg.prototype.N;
    Mg.prototype.set = Mg.prototype.set;
    Mg.prototype.setProperties = Mg.prototype.H;
    Mg.prototype.unset = Mg.prototype.P;
    Mg.prototype.changed = Mg.prototype.s;
    Mg.prototype.dispatchEvent = Mg.prototype.b;
    Mg.prototype.getRevision = Mg.prototype.L;
    Mg.prototype.on = Mg.prototype.J;
    Mg.prototype.once = Mg.prototype.once;
    Mg.prototype.un = Mg.prototype.K;
    Qg.prototype.getActive = Qg.prototype.c;
    Qg.prototype.getMap = Qg.prototype.i;
    Qg.prototype.setActive = Qg.prototype.Ia;
    Qg.prototype.get = Qg.prototype.get;
    Qg.prototype.getKeys = Qg.prototype.O;
    Qg.prototype.getProperties = Qg.prototype.N;
    Qg.prototype.set = Qg.prototype.set;
    Qg.prototype.setProperties = Qg.prototype.H;
    Qg.prototype.unset = Qg.prototype.P;
    Qg.prototype.changed = Qg.prototype.s;
    Qg.prototype.dispatchEvent = Qg.prototype.b;
    Qg.prototype.getRevision = Qg.prototype.L;
    Qg.prototype.on = Qg.prototype.J;
    Qg.prototype.once = Qg.prototype.once;
    Qg.prototype.un = Qg.prototype.K;
    tt.prototype.getActive = tt.prototype.c;
    tt.prototype.getMap = tt.prototype.i;
    tt.prototype.setActive = tt.prototype.Ia;
    tt.prototype.get = tt.prototype.get;
    tt.prototype.getKeys = tt.prototype.O;
    tt.prototype.getProperties = tt.prototype.N;
    tt.prototype.set = tt.prototype.set;
    tt.prototype.setProperties = tt.prototype.H;
    tt.prototype.unset = tt.prototype.P;
    tt.prototype.changed = tt.prototype.s;
    tt.prototype.dispatchEvent = tt.prototype.b;
    tt.prototype.getRevision = tt.prototype.L;
    tt.prototype.on = tt.prototype.J;
    tt.prototype.once = tt.prototype.once;
    tt.prototype.un = tt.prototype.K;
    fh.prototype.getGeometry = fh.prototype.W;
    fh.prototype.getActive = fh.prototype.c;
    fh.prototype.getMap = fh.prototype.i;
    fh.prototype.setActive = fh.prototype.Ia;
    fh.prototype.get = fh.prototype.get;
    fh.prototype.getKeys = fh.prototype.O;
    fh.prototype.getProperties = fh.prototype.N;
    fh.prototype.set = fh.prototype.set;
    fh.prototype.setProperties = fh.prototype.H;
    fh.prototype.unset = fh.prototype.P;
    fh.prototype.changed = fh.prototype.s;
    fh.prototype.dispatchEvent = fh.prototype.b;
    fh.prototype.getRevision = fh.prototype.L;
    fh.prototype.on = fh.prototype.J;
    fh.prototype.once = fh.prototype.once;
    fh.prototype.un = fh.prototype.K;
    Hu.prototype.getActive = Hu.prototype.c;
    Hu.prototype.getMap = Hu.prototype.i;
    Hu.prototype.setActive = Hu.prototype.Ia;
    Hu.prototype.get = Hu.prototype.get;
    Hu.prototype.getKeys = Hu.prototype.O;
    Hu.prototype.getProperties = Hu.prototype.N;
    Hu.prototype.set = Hu.prototype.set;
    Hu.prototype.setProperties = Hu.prototype.H;
    Hu.prototype.unset = Hu.prototype.P;
    Hu.prototype.changed = Hu.prototype.s;
    Hu.prototype.dispatchEvent = Hu.prototype.b;
    Hu.prototype.getRevision = Hu.prototype.L;
    Hu.prototype.on = Hu.prototype.J;
    Hu.prototype.once = Hu.prototype.once;
    Hu.prototype.un = Hu.prototype.K;
    Xu.prototype.type = Xu.prototype.type;
    Xu.prototype.target = Xu.prototype.target;
    Xu.prototype.preventDefault = Xu.prototype.preventDefault;
    Xu.prototype.stopPropagation = Xu.prototype.stopPropagation;
    Yu.prototype.getActive = Yu.prototype.c;
    Yu.prototype.getMap = Yu.prototype.i;
    Yu.prototype.setActive = Yu.prototype.Ia;
    Yu.prototype.get = Yu.prototype.get;
    Yu.prototype.getKeys = Yu.prototype.O;
    Yu.prototype.getProperties = Yu.prototype.N;
    Yu.prototype.set = Yu.prototype.set;
    Yu.prototype.setProperties = Yu.prototype.H;
    Yu.prototype.unset = Yu.prototype.P;
    Yu.prototype.changed = Yu.prototype.s;
    Yu.prototype.dispatchEvent = Yu.prototype.b;
    Yu.prototype.getRevision = Yu.prototype.L;
    Yu.prototype.on = Yu.prototype.J;
    Yu.prototype.once = Yu.prototype.once;
    Yu.prototype.un = Yu.prototype.K;
    iv.prototype.type = iv.prototype.type;
    iv.prototype.target = iv.prototype.target;
    iv.prototype.preventDefault = iv.prototype.preventDefault;
    iv.prototype.stopPropagation = iv.prototype.stopPropagation;
    gh.prototype.getActive = gh.prototype.c;
    gh.prototype.getMap = gh.prototype.i;
    gh.prototype.setActive = gh.prototype.Ia;
    gh.prototype.get = gh.prototype.get;
    gh.prototype.getKeys = gh.prototype.O;
    gh.prototype.getProperties = gh.prototype.N;
    gh.prototype.set = gh.prototype.set;
    gh.prototype.setProperties = gh.prototype.H;
    gh.prototype.unset = gh.prototype.P;
    gh.prototype.changed = gh.prototype.s;
    gh.prototype.dispatchEvent = gh.prototype.b;
    gh.prototype.getRevision = gh.prototype.L;
    gh.prototype.on = gh.prototype.J;
    gh.prototype.once = gh.prototype.once;
    gh.prototype.un = gh.prototype.K;
    ih.prototype.getActive = ih.prototype.c;
    ih.prototype.getMap = ih.prototype.i;
    ih.prototype.setActive = ih.prototype.Ia;
    ih.prototype.get = ih.prototype.get;
    ih.prototype.getKeys = ih.prototype.O;
    ih.prototype.getProperties = ih.prototype.N;
    ih.prototype.set = ih.prototype.set;
    ih.prototype.setProperties = ih.prototype.H;
    ih.prototype.unset = ih.prototype.P;
    ih.prototype.changed = ih.prototype.s;
    ih.prototype.dispatchEvent = ih.prototype.b;
    ih.prototype.getRevision = ih.prototype.L;
    ih.prototype.on = ih.prototype.J;
    ih.prototype.once = ih.prototype.once;
    ih.prototype.un = ih.prototype.K;
    jv.prototype.getActive = jv.prototype.c;
    jv.prototype.getMap = jv.prototype.i;
    jv.prototype.setActive = jv.prototype.Ia;
    jv.prototype.get = jv.prototype.get;
    jv.prototype.getKeys = jv.prototype.O;
    jv.prototype.getProperties = jv.prototype.N;
    jv.prototype.set = jv.prototype.set;
    jv.prototype.setProperties = jv.prototype.H;
    jv.prototype.unset = jv.prototype.P;
    jv.prototype.changed = jv.prototype.s;
    jv.prototype.dispatchEvent = jv.prototype.b;
    jv.prototype.getRevision = jv.prototype.L;
    jv.prototype.on = jv.prototype.J;
    jv.prototype.once = jv.prototype.once;
    jv.prototype.un = jv.prototype.K;
    rv.prototype.type = rv.prototype.type;
    rv.prototype.target = rv.prototype.target;
    rv.prototype.preventDefault = rv.prototype.preventDefault;
    rv.prototype.stopPropagation = rv.prototype.stopPropagation;
    kh.prototype.getActive = kh.prototype.c;
    kh.prototype.getMap = kh.prototype.i;
    kh.prototype.setActive = kh.prototype.Ia;
    kh.prototype.get = kh.prototype.get;
    kh.prototype.getKeys = kh.prototype.O;
    kh.prototype.getProperties = kh.prototype.N;
    kh.prototype.set = kh.prototype.set;
    kh.prototype.setProperties = kh.prototype.H;
    kh.prototype.unset = kh.prototype.P;
    kh.prototype.changed = kh.prototype.s;
    kh.prototype.dispatchEvent = kh.prototype.b;
    kh.prototype.getRevision = kh.prototype.L;
    kh.prototype.on = kh.prototype.J;
    kh.prototype.once = kh.prototype.once;
    kh.prototype.un = kh.prototype.K;
    oh.prototype.getActive = oh.prototype.c;
    oh.prototype.getMap = oh.prototype.i;
    oh.prototype.setActive = oh.prototype.Ia;
    oh.prototype.get = oh.prototype.get;
    oh.prototype.getKeys = oh.prototype.O;
    oh.prototype.getProperties = oh.prototype.N;
    oh.prototype.set = oh.prototype.set;
    oh.prototype.setProperties = oh.prototype.H;
    oh.prototype.unset = oh.prototype.P;
    oh.prototype.changed = oh.prototype.s;
    oh.prototype.dispatchEvent = oh.prototype.b;
    oh.prototype.getRevision = oh.prototype.L;
    oh.prototype.on = oh.prototype.J;
    oh.prototype.once = oh.prototype.once;
    oh.prototype.un = oh.prototype.K;
    sh.prototype.getActive = sh.prototype.c;
    sh.prototype.getMap = sh.prototype.i;
    sh.prototype.setActive = sh.prototype.Ia;
    sh.prototype.get = sh.prototype.get;
    sh.prototype.getKeys = sh.prototype.O;
    sh.prototype.getProperties = sh.prototype.N;
    sh.prototype.set = sh.prototype.set;
    sh.prototype.setProperties = sh.prototype.H;
    sh.prototype.unset = sh.prototype.P;
    sh.prototype.changed = sh.prototype.s;
    sh.prototype.dispatchEvent = sh.prototype.b;
    sh.prototype.getRevision = sh.prototype.L;
    sh.prototype.on = sh.prototype.J;
    sh.prototype.once = sh.prototype.once;
    sh.prototype.un = sh.prototype.K;
    zv.prototype.getActive = zv.prototype.c;
    zv.prototype.getMap = zv.prototype.i;
    zv.prototype.setActive = zv.prototype.Ia;
    zv.prototype.get = zv.prototype.get;
    zv.prototype.getKeys = zv.prototype.O;
    zv.prototype.getProperties = zv.prototype.N;
    zv.prototype.set = zv.prototype.set;
    zv.prototype.setProperties = zv.prototype.H;
    zv.prototype.unset = zv.prototype.P;
    zv.prototype.changed = zv.prototype.s;
    zv.prototype.dispatchEvent = zv.prototype.b;
    zv.prototype.getRevision = zv.prototype.L;
    zv.prototype.on = zv.prototype.J;
    zv.prototype.once = zv.prototype.once;
    zv.prototype.un = zv.prototype.K;
    Cv.prototype.type = Cv.prototype.type;
    Cv.prototype.target = Cv.prototype.target;
    Cv.prototype.preventDefault = Cv.prototype.preventDefault;
    Cv.prototype.stopPropagation = Cv.prototype.stopPropagation;
    Ev.prototype.getActive = Ev.prototype.c;
    Ev.prototype.getMap = Ev.prototype.i;
    Ev.prototype.setActive = Ev.prototype.Ia;
    Ev.prototype.get = Ev.prototype.get;
    Ev.prototype.getKeys = Ev.prototype.O;
    Ev.prototype.getProperties = Ev.prototype.N;
    Ev.prototype.set = Ev.prototype.set;
    Ev.prototype.setProperties = Ev.prototype.H;
    Ev.prototype.unset = Ev.prototype.P;
    Ev.prototype.changed = Ev.prototype.s;
    Ev.prototype.dispatchEvent = Ev.prototype.b;
    Ev.prototype.getRevision = Ev.prototype.L;
    Ev.prototype.on = Ev.prototype.J;
    Ev.prototype.once = Ev.prototype.once;
    Ev.prototype.un = Ev.prototype.K;
    Jv.prototype.getActive = Jv.prototype.c;
    Jv.prototype.getMap = Jv.prototype.i;
    Jv.prototype.setActive = Jv.prototype.Ia;
    Jv.prototype.get = Jv.prototype.get;
    Jv.prototype.getKeys = Jv.prototype.O;
    Jv.prototype.getProperties = Jv.prototype.N;
    Jv.prototype.set = Jv.prototype.set;
    Jv.prototype.setProperties = Jv.prototype.H;
    Jv.prototype.unset = Jv.prototype.P;
    Jv.prototype.changed = Jv.prototype.s;
    Jv.prototype.dispatchEvent = Jv.prototype.b;
    Jv.prototype.getRevision = Jv.prototype.L;
    Jv.prototype.on = Jv.prototype.J;
    Jv.prototype.once = Jv.prototype.once;
    Jv.prototype.un = Jv.prototype.K;
    Pv.prototype.type = Pv.prototype.type;
    Pv.prototype.target = Pv.prototype.target;
    Pv.prototype.preventDefault = Pv.prototype.preventDefault;
    Pv.prototype.stopPropagation = Pv.prototype.stopPropagation;
    rf.prototype.get = rf.prototype.get;
    rf.prototype.getKeys = rf.prototype.O;
    rf.prototype.getProperties = rf.prototype.N;
    rf.prototype.set = rf.prototype.set;
    rf.prototype.setProperties = rf.prototype.H;
    rf.prototype.unset = rf.prototype.P;
    rf.prototype.changed = rf.prototype.s;
    rf.prototype.dispatchEvent = rf.prototype.b;
    rf.prototype.getRevision = rf.prototype.L;
    rf.prototype.on = rf.prototype.J;
    rf.prototype.once = rf.prototype.once;
    rf.prototype.un = rf.prototype.K;
    uf.prototype.getClosestPoint = uf.prototype.Db;
    uf.prototype.intersectsCoordinate = uf.prototype.wb;
    uf.prototype.getExtent = uf.prototype.G;
    uf.prototype.rotate = uf.prototype.rotate;
    uf.prototype.scale = uf.prototype.scale;
    uf.prototype.simplify = uf.prototype.Pb;
    uf.prototype.transform = uf.prototype.mb;
    uf.prototype.get = uf.prototype.get;
    uf.prototype.getKeys = uf.prototype.O;
    uf.prototype.getProperties = uf.prototype.N;
    uf.prototype.set = uf.prototype.set;
    uf.prototype.setProperties = uf.prototype.H;
    uf.prototype.unset = uf.prototype.P;
    uf.prototype.changed = uf.prototype.s;
    uf.prototype.dispatchEvent = uf.prototype.b;
    uf.prototype.getRevision = uf.prototype.L;
    uf.prototype.on = uf.prototype.J;
    uf.prototype.once = uf.prototype.once;
    uf.prototype.un = uf.prototype.K;
    Ss.prototype.getFirstCoordinate = Ss.prototype.bc;
    Ss.prototype.getLastCoordinate = Ss.prototype.cc;
    Ss.prototype.getLayout = Ss.prototype.dc;
    Ss.prototype.rotate = Ss.prototype.rotate;
    Ss.prototype.scale = Ss.prototype.scale;
    Ss.prototype.getClosestPoint = Ss.prototype.Db;
    Ss.prototype.intersectsCoordinate = Ss.prototype.wb;
    Ss.prototype.getExtent = Ss.prototype.G;
    Ss.prototype.simplify = Ss.prototype.Pb;
    Ss.prototype.get = Ss.prototype.get;
    Ss.prototype.getKeys = Ss.prototype.O;
    Ss.prototype.getProperties = Ss.prototype.N;
    Ss.prototype.set = Ss.prototype.set;
    Ss.prototype.setProperties = Ss.prototype.H;
    Ss.prototype.unset = Ss.prototype.P;
    Ss.prototype.changed = Ss.prototype.s;
    Ss.prototype.dispatchEvent = Ss.prototype.b;
    Ss.prototype.getRevision = Ss.prototype.L;
    Ss.prototype.on = Ss.prototype.J;
    Ss.prototype.once = Ss.prototype.once;
    Ss.prototype.un = Ss.prototype.K;
    Nm.prototype.getClosestPoint = Nm.prototype.Db;
    Nm.prototype.intersectsCoordinate = Nm.prototype.wb;
    Nm.prototype.getExtent = Nm.prototype.G;
    Nm.prototype.rotate = Nm.prototype.rotate;
    Nm.prototype.scale = Nm.prototype.scale;
    Nm.prototype.simplify = Nm.prototype.Pb;
    Nm.prototype.transform = Nm.prototype.mb;
    Nm.prototype.get = Nm.prototype.get;
    Nm.prototype.getKeys = Nm.prototype.O;
    Nm.prototype.getProperties = Nm.prototype.N;
    Nm.prototype.set = Nm.prototype.set;
    Nm.prototype.setProperties = Nm.prototype.H;
    Nm.prototype.unset = Nm.prototype.P;
    Nm.prototype.changed = Nm.prototype.s;
    Nm.prototype.dispatchEvent = Nm.prototype.b;
    Nm.prototype.getRevision = Nm.prototype.L;
    Nm.prototype.on = Nm.prototype.J;
    Nm.prototype.once = Nm.prototype.once;
    Nm.prototype.un = Nm.prototype.K;
    Of.prototype.getFirstCoordinate = Of.prototype.bc;
    Of.prototype.getLastCoordinate = Of.prototype.cc;
    Of.prototype.getLayout = Of.prototype.dc;
    Of.prototype.rotate = Of.prototype.rotate;
    Of.prototype.scale = Of.prototype.scale;
    Of.prototype.getClosestPoint = Of.prototype.Db;
    Of.prototype.intersectsCoordinate = Of.prototype.wb;
    Of.prototype.getExtent = Of.prototype.G;
    Of.prototype.simplify = Of.prototype.Pb;
    Of.prototype.transform = Of.prototype.mb;
    Of.prototype.get = Of.prototype.get;
    Of.prototype.getKeys = Of.prototype.O;
    Of.prototype.getProperties = Of.prototype.N;
    Of.prototype.set = Of.prototype.set;
    Of.prototype.setProperties = Of.prototype.H;
    Of.prototype.unset = Of.prototype.P;
    Of.prototype.changed = Of.prototype.s;
    Of.prototype.dispatchEvent = Of.prototype.b;
    Of.prototype.getRevision = Of.prototype.L;
    Of.prototype.on = Of.prototype.J;
    Of.prototype.once = Of.prototype.once;
    Of.prototype.un = Of.prototype.K;
    M.prototype.getFirstCoordinate = M.prototype.bc;
    M.prototype.getLastCoordinate = M.prototype.cc;
    M.prototype.getLayout = M.prototype.dc;
    M.prototype.rotate = M.prototype.rotate;
    M.prototype.scale = M.prototype.scale;
    M.prototype.getClosestPoint = M.prototype.Db;
    M.prototype.intersectsCoordinate = M.prototype.wb;
    M.prototype.getExtent = M.prototype.G;
    M.prototype.simplify = M.prototype.Pb;
    M.prototype.transform = M.prototype.mb;
    M.prototype.get = M.prototype.get;
    M.prototype.getKeys = M.prototype.O;
    M.prototype.getProperties = M.prototype.N;
    M.prototype.set = M.prototype.set;
    M.prototype.setProperties = M.prototype.H;
    M.prototype.unset = M.prototype.P;
    M.prototype.changed = M.prototype.s;
    M.prototype.dispatchEvent = M.prototype.b;
    M.prototype.getRevision = M.prototype.L;
    M.prototype.on = M.prototype.J;
    M.prototype.once = M.prototype.once;
    M.prototype.un = M.prototype.K;
    N.prototype.getFirstCoordinate = N.prototype.bc;
    N.prototype.getLastCoordinate = N.prototype.cc;
    N.prototype.getLayout = N.prototype.dc;
    N.prototype.rotate = N.prototype.rotate;
    N.prototype.scale = N.prototype.scale;
    N.prototype.getClosestPoint = N.prototype.Db;
    N.prototype.intersectsCoordinate = N.prototype.wb;
    N.prototype.getExtent = N.prototype.G;
    N.prototype.simplify = N.prototype.Pb;
    N.prototype.transform = N.prototype.mb;
    N.prototype.get = N.prototype.get;
    N.prototype.getKeys = N.prototype.O;
    N.prototype.getProperties = N.prototype.N;
    N.prototype.set = N.prototype.set;
    N.prototype.setProperties = N.prototype.H;
    N.prototype.unset = N.prototype.P;
    N.prototype.changed = N.prototype.s;
    N.prototype.dispatchEvent = N.prototype.b;
    N.prototype.getRevision = N.prototype.L;
    N.prototype.on = N.prototype.J;
    N.prototype.once = N.prototype.once;
    N.prototype.un = N.prototype.K;
    O.prototype.getFirstCoordinate = O.prototype.bc;
    O.prototype.getLastCoordinate = O.prototype.cc;
    O.prototype.getLayout = O.prototype.dc;
    O.prototype.rotate = O.prototype.rotate;
    O.prototype.scale = O.prototype.scale;
    O.prototype.getClosestPoint = O.prototype.Db;
    O.prototype.intersectsCoordinate = O.prototype.wb;
    O.prototype.getExtent = O.prototype.G;
    O.prototype.simplify = O.prototype.Pb;
    O.prototype.transform = O.prototype.mb;
    O.prototype.get = O.prototype.get;
    O.prototype.getKeys = O.prototype.O;
    O.prototype.getProperties = O.prototype.N;
    O.prototype.set = O.prototype.set;
    O.prototype.setProperties = O.prototype.H;
    O.prototype.unset = O.prototype.P;
    O.prototype.changed = O.prototype.s;
    O.prototype.dispatchEvent = O.prototype.b;
    O.prototype.getRevision = O.prototype.L;
    O.prototype.on = O.prototype.J;
    O.prototype.once = O.prototype.once;
    O.prototype.un = O.prototype.K;
    P.prototype.getFirstCoordinate = P.prototype.bc;
    P.prototype.getLastCoordinate = P.prototype.cc;
    P.prototype.getLayout = P.prototype.dc;
    P.prototype.rotate = P.prototype.rotate;
    P.prototype.scale = P.prototype.scale;
    P.prototype.getClosestPoint = P.prototype.Db;
    P.prototype.intersectsCoordinate = P.prototype.wb;
    P.prototype.getExtent = P.prototype.G;
    P.prototype.simplify = P.prototype.Pb;
    P.prototype.transform = P.prototype.mb;
    P.prototype.get = P.prototype.get;
    P.prototype.getKeys = P.prototype.O;
    P.prototype.getProperties = P.prototype.N;
    P.prototype.set = P.prototype.set;
    P.prototype.setProperties = P.prototype.H;
    P.prototype.unset = P.prototype.P;
    P.prototype.changed = P.prototype.s;
    P.prototype.dispatchEvent = P.prototype.b;
    P.prototype.getRevision = P.prototype.L;
    P.prototype.on = P.prototype.J;
    P.prototype.once = P.prototype.once;
    P.prototype.un = P.prototype.K;
    C.prototype.getFirstCoordinate = C.prototype.bc;
    C.prototype.getLastCoordinate = C.prototype.cc;
    C.prototype.getLayout = C.prototype.dc;
    C.prototype.rotate = C.prototype.rotate;
    C.prototype.scale = C.prototype.scale;
    C.prototype.getClosestPoint = C.prototype.Db;
    C.prototype.intersectsCoordinate = C.prototype.wb;
    C.prototype.getExtent = C.prototype.G;
    C.prototype.simplify = C.prototype.Pb;
    C.prototype.transform = C.prototype.mb;
    C.prototype.get = C.prototype.get;
    C.prototype.getKeys = C.prototype.O;
    C.prototype.getProperties = C.prototype.N;
    C.prototype.set = C.prototype.set;
    C.prototype.setProperties = C.prototype.H;
    C.prototype.unset = C.prototype.P;
    C.prototype.changed = C.prototype.s;
    C.prototype.dispatchEvent = C.prototype.b;
    C.prototype.getRevision = C.prototype.L;
    C.prototype.on = C.prototype.J;
    C.prototype.once = C.prototype.once;
    C.prototype.un = C.prototype.K;
    D.prototype.getFirstCoordinate = D.prototype.bc;
    D.prototype.getLastCoordinate = D.prototype.cc;
    D.prototype.getLayout = D.prototype.dc;
    D.prototype.rotate = D.prototype.rotate;
    D.prototype.scale = D.prototype.scale;
    D.prototype.getClosestPoint = D.prototype.Db;
    D.prototype.intersectsCoordinate = D.prototype.wb;
    D.prototype.getExtent = D.prototype.G;
    D.prototype.simplify = D.prototype.Pb;
    D.prototype.transform = D.prototype.mb;
    D.prototype.get = D.prototype.get;
    D.prototype.getKeys = D.prototype.O;
    D.prototype.getProperties = D.prototype.N;
    D.prototype.set = D.prototype.set;
    D.prototype.setProperties = D.prototype.H;
    D.prototype.unset = D.prototype.P;
    D.prototype.changed = D.prototype.s;
    D.prototype.dispatchEvent = D.prototype.b;
    D.prototype.getRevision = D.prototype.L;
    D.prototype.on = D.prototype.J;
    D.prototype.once = D.prototype.once;
    D.prototype.un = D.prototype.K;
    mn.prototype.readFeatures = mn.prototype.Oa;
    vn.prototype.readFeatures = vn.prototype.Oa;
    mn.prototype.readFeatures = mn.prototype.Oa;
    od.prototype.get = od.prototype.get;
    od.prototype.getKeys = od.prototype.O;
    od.prototype.getProperties = od.prototype.N;
    od.prototype.set = od.prototype.set;
    od.prototype.setProperties = od.prototype.H;
    od.prototype.unset = od.prototype.P;
    od.prototype.changed = od.prototype.s;
    od.prototype.dispatchEvent = od.prototype.b;
    od.prototype.getRevision = od.prototype.L;
    od.prototype.on = od.prototype.J;
    od.prototype.once = od.prototype.once;
    od.prototype.un = od.prototype.K;
    pd.prototype.getMap = pd.prototype.g;
    pd.prototype.setMap = pd.prototype.setMap;
    pd.prototype.setTarget = pd.prototype.i;
    pd.prototype.get = pd.prototype.get;
    pd.prototype.getKeys = pd.prototype.O;
    pd.prototype.getProperties = pd.prototype.N;
    pd.prototype.set = pd.prototype.set;
    pd.prototype.setProperties = pd.prototype.H;
    pd.prototype.unset = pd.prototype.P;
    pd.prototype.changed = pd.prototype.s;
    pd.prototype.dispatchEvent = pd.prototype.b;
    pd.prototype.getRevision = pd.prototype.L;
    pd.prototype.on = pd.prototype.J;
    pd.prototype.once = pd.prototype.once;
    pd.prototype.un = pd.prototype.K;
    Ad.prototype.getMap = Ad.prototype.g;
    Ad.prototype.setMap = Ad.prototype.setMap;
    Ad.prototype.setTarget = Ad.prototype.i;
    Ad.prototype.get = Ad.prototype.get;
    Ad.prototype.getKeys = Ad.prototype.O;
    Ad.prototype.getProperties = Ad.prototype.N;
    Ad.prototype.set = Ad.prototype.set;
    Ad.prototype.setProperties = Ad.prototype.H;
    Ad.prototype.unset = Ad.prototype.P;
    Ad.prototype.changed = Ad.prototype.s;
    Ad.prototype.dispatchEvent = Ad.prototype.b;
    Ad.prototype.getRevision = Ad.prototype.L;
    Ad.prototype.on = Ad.prototype.J;
    Ad.prototype.once = Ad.prototype.once;
    Ad.prototype.un = Ad.prototype.K;
    Fd.prototype.getMap = Fd.prototype.g;
    Fd.prototype.setMap = Fd.prototype.setMap;
    Fd.prototype.setTarget = Fd.prototype.i;
    Fd.prototype.get = Fd.prototype.get;
    Fd.prototype.getKeys = Fd.prototype.O;
    Fd.prototype.getProperties = Fd.prototype.N;
    Fd.prototype.set = Fd.prototype.set;
    Fd.prototype.setProperties = Fd.prototype.H;
    Fd.prototype.unset = Fd.prototype.P;
    Fd.prototype.changed = Fd.prototype.s;
    Fd.prototype.dispatchEvent = Fd.prototype.b;
    Fd.prototype.getRevision = Fd.prototype.L;
    Fd.prototype.on = Fd.prototype.J;
    Fd.prototype.once = Fd.prototype.once;
    Fd.prototype.un = Fd.prototype.K;
    Uk.prototype.getMap = Uk.prototype.g;
    Uk.prototype.setMap = Uk.prototype.setMap;
    Uk.prototype.setTarget = Uk.prototype.i;
    Uk.prototype.get = Uk.prototype.get;
    Uk.prototype.getKeys = Uk.prototype.O;
    Uk.prototype.getProperties = Uk.prototype.N;
    Uk.prototype.set = Uk.prototype.set;
    Uk.prototype.setProperties = Uk.prototype.H;
    Uk.prototype.unset = Uk.prototype.P;
    Uk.prototype.changed = Uk.prototype.s;
    Uk.prototype.dispatchEvent = Uk.prototype.b;
    Uk.prototype.getRevision = Uk.prototype.L;
    Uk.prototype.on = Uk.prototype.J;
    Uk.prototype.once = Uk.prototype.once;
    Uk.prototype.un = Uk.prototype.K;
    wd.prototype.getMap = wd.prototype.g;
    wd.prototype.setMap = wd.prototype.setMap;
    wd.prototype.setTarget = wd.prototype.i;
    wd.prototype.get = wd.prototype.get;
    wd.prototype.getKeys = wd.prototype.O;
    wd.prototype.getProperties = wd.prototype.N;
    wd.prototype.set = wd.prototype.set;
    wd.prototype.setProperties = wd.prototype.H;
    wd.prototype.unset = wd.prototype.P;
    wd.prototype.changed = wd.prototype.s;
    wd.prototype.dispatchEvent = wd.prototype.b;
    wd.prototype.getRevision = wd.prototype.L;
    wd.prototype.on = wd.prototype.J;
    wd.prototype.once = wd.prototype.once;
    wd.prototype.un = wd.prototype.K;
    Zk.prototype.getMap = Zk.prototype.g;
    Zk.prototype.setMap = Zk.prototype.setMap;
    Zk.prototype.setTarget = Zk.prototype.i;
    Zk.prototype.get = Zk.prototype.get;
    Zk.prototype.getKeys = Zk.prototype.O;
    Zk.prototype.getProperties = Zk.prototype.N;
    Zk.prototype.set = Zk.prototype.set;
    Zk.prototype.setProperties = Zk.prototype.H;
    Zk.prototype.unset = Zk.prototype.P;
    Zk.prototype.changed = Zk.prototype.s;
    Zk.prototype.dispatchEvent = Zk.prototype.b;
    Zk.prototype.getRevision = Zk.prototype.L;
    Zk.prototype.on = Zk.prototype.J;
    Zk.prototype.once = Zk.prototype.once;
    Zk.prototype.un = Zk.prototype.K;
    yd.prototype.getMap = yd.prototype.g;
    yd.prototype.setMap = yd.prototype.setMap;
    yd.prototype.setTarget = yd.prototype.i;
    yd.prototype.get = yd.prototype.get;
    yd.prototype.getKeys = yd.prototype.O;
    yd.prototype.getProperties = yd.prototype.N;
    yd.prototype.set = yd.prototype.set;
    yd.prototype.setProperties = yd.prototype.H;
    yd.prototype.unset = yd.prototype.P;
    yd.prototype.changed = yd.prototype.s;
    yd.prototype.dispatchEvent = yd.prototype.b;
    yd.prototype.getRevision = yd.prototype.L;
    yd.prototype.on = yd.prototype.J;
    yd.prototype.once = yd.prototype.once;
    yd.prototype.un = yd.prototype.K;
    dl.prototype.getMap = dl.prototype.g;
    dl.prototype.setMap = dl.prototype.setMap;
    dl.prototype.setTarget = dl.prototype.i;
    dl.prototype.get = dl.prototype.get;
    dl.prototype.getKeys = dl.prototype.O;
    dl.prototype.getProperties = dl.prototype.N;
    dl.prototype.set = dl.prototype.set;
    dl.prototype.setProperties = dl.prototype.H;
    dl.prototype.unset = dl.prototype.P;
    dl.prototype.changed = dl.prototype.s;
    dl.prototype.dispatchEvent = dl.prototype.b;
    dl.prototype.getRevision = dl.prototype.L;
    dl.prototype.on = dl.prototype.J;
    dl.prototype.once = dl.prototype.once;
    dl.prototype.un = dl.prototype.K;
    il.prototype.getMap = il.prototype.g;
    il.prototype.setMap = il.prototype.setMap;
    il.prototype.setTarget = il.prototype.i;
    il.prototype.get = il.prototype.get;
    il.prototype.getKeys = il.prototype.O;
    il.prototype.getProperties = il.prototype.N;
    il.prototype.set = il.prototype.set;
    il.prototype.setProperties = il.prototype.H;
    il.prototype.unset = il.prototype.P;
    il.prototype.changed = il.prototype.s;
    il.prototype.dispatchEvent = il.prototype.b;
    il.prototype.getRevision = il.prototype.L;
    il.prototype.on = il.prototype.J;
    il.prototype.once = il.prototype.once;
    il.prototype.un = il.prototype.K;
    return OPENLAYERS.ol;
}));

