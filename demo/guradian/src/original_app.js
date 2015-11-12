function(t, r) {
        ! function() {
            for (var t = 0, r = ["ms", "moz", "webkit", "o"], e = 0; e < r.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[r[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r[e] + "CancelAnimationFrame"] || window[r[e] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(r, e) {
                var n = (new Date).getTime(),
                    o = Math.max(0, 16 - (n - t)),
                    a = window.setTimeout(function() {
                        r(n + o)
                    }, o);
                return t = n + o, a
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        }()
    }, function(t, r) {
        ! function() {
            "undefined" == typeof Math.sgn && (Math.sgn = function(t) {
                return 0 == t ? 0 : t > 0 ? 1 : -1
            });
            var t = {
                    subtract: function(t, r) {
                        return {
                            x: t.x - r.x,
                            y: t.y - r.y
                        }
                    },
                    dotProduct: function(t, r) {
                        return t.x * r.x + t.y * r.y
                    },
                    square: function(t) {
                        return Math.sqrt(t.x * t.x + t.y * t.y)
                    },
                    scale: function(t, r) {
                        return {
                            x: t.x * r,
                            y: t.y * r
                        }
                    }
                },
                r = 64,
                e = Math.pow(2, -r - 1),
                n = function(r, e) {
                    for (var n = [], o = a(r, e), s = e.length - 1, c = 2 * s - 1, l = i(o, c, n, 0), d = t.subtract(r, e[0]), m = t.square(d), h = 0, p = 0; l > p; p++) {
                        d = t.subtract(r, u(e, s, n[p], null, null));
                        var f = t.square(d);
                        m > f && (m = f, h = n[p])
                    }
                    return d = t.subtract(r, e[s]), f = t.square(d), m > f && (m = f, h = 1), {
                        location: h,
                        distance: m
                    }
                },
                o = function(t, r) {
                    var e = n(t, r);
                    return {
                        point: u(r, r.length - 1, e.location, null, null),
                        location: e.location
                    }
                },
                a = function(r, e) {
                    for (var n = e.length - 1, o = 2 * n - 1, a = [], i = [], s = [], c = [], l = [
                            [1, .6, .3, .1],
                            [.4, .6, .6, .4],
                            [.1, .3, .6, 1]
                        ], u = 0; n >= u; u++) a[u] = t.subtract(e[u], r);
                    for (var u = 0; n - 1 >= u; u++) i[u] = t.subtract(e[u + 1], e[u]), i[u] = t.scale(i[u], 3);
                    for (var d = 0; n - 1 >= d; d++)
                        for (var m = 0; n >= m; m++) s[d] || (s[d] = []), s[d][m] = t.dotProduct(i[d], a[m]);
                    for (u = 0; o >= u; u++) c[u] || (c[u] = []), c[u].y = 0, c[u].x = parseFloat(u) / o;
                    for (var h = n, p = n - 1, f = 0; h + p >= f; f++) {
                        var g = Math.max(0, f - p),
                            y = Math.min(f, h);
                        for (u = g; y >= u; u++) j = f - u, c[u + j].y += s[j][u] * l[j][u]
                    }
                    return c
                },
                i = function(t, e, n, o) {
                    var a, d, m = [],
                        h = [],
                        p = [],
                        f = [];
                    switch (s(t, e)) {
                        case 0:
                            return 0;
                        case 1:
                            if (o >= r) return n[0] = (t[0].x + t[e].x) / 2, 1;
                            if (c(t, e)) return n[0] = l(t, e), 1
                    }
                    u(t, e, .5, m, h), a = i(m, e, p, o + 1), d = i(h, e, f, o + 1);
                    for (var g = 0; a > g; g++) n[g] = p[g];
                    for (var g = 0; d > g; g++) n[g + a] = f[g];
                    return a + d
                },
                s = function(t, r) {
                    var e, n, o = 0;
                    e = n = Math.sgn(t[0].y);
                    for (var a = 1; r >= a; a++) e = Math.sgn(t[a].y), e != n && o++, n = e;
                    return o
                },
                c = function(t, r) {
                    var n, o, a, i, s, c, l, u, d, m, h, p, f, g, y, v;
                    c = t[0].y - t[r].y, l = t[r].x - t[0].x, u = t[0].x * t[r].y - t[r].x * t[0].y;
                    for (var x = max_distance_below = 0, w = 1; r > w; w++) {
                        var b = c * t[w].x + l * t[w].y + u;
                        b > x ? x = b : b < max_distance_below && (max_distance_below = b)
                    }
                    return h = 0, p = 1, f = 0, g = c, y = l, v = u - x, d = h * y - g * p, m = 1 / d, o = (p * v - y * f) * m, g = c, y = l, v = u - max_distance_below, d = h * y - g * p, m = 1 / d, a = (p * v - y * f) * m, i = Math.min(o, a), s = Math.max(o, a), n = s - i, e > n ? 1 : 0
                },
                l = function(t, r) {
                    var e = 1,
                        n = 0,
                        o = t[r].x - t[0].x,
                        a = t[r].y - t[0].y,
                        i = t[0].x - 0,
                        s = t[0].y - 0,
                        c = o * n - a * e,
                        l = 1 / c,
                        u = (o * s - a * i) * l;
                    return 0 + e * u
                },
                u = function(t, r, e, n, o) {
                    for (var a = [
                            []
                        ], i = 0; r >= i; i++) a[0][i] = t[i];
                    for (var s = 1; r >= s; s++)
                        for (var i = 0; r - s >= i; i++) a[s] || (a[s] = []), a[s][i] || (a[s][i] = {}), a[s][i].x = (1 - e) * a[s - 1][i].x + e * a[s - 1][i + 1].x, a[s][i].y = (1 - e) * a[s - 1][i].y + e * a[s - 1][i + 1].y;
                    if (null != n)
                        for (i = 0; r >= i; i++) n[i] = a[i][0];
                    if (null != o)
                        for (i = 0; r >= i; i++) o[i] = a[r - i][i];
                    return a[r][0]
                },
                d = {},
                m = function(t) {
                    var r = d[t];
                    if (!r) {
                        r = [];
                        var e = function() {
                                return function(r) {
                                    return Math.pow(r, t)
                                }
                            },
                            n = function() {
                                return function(r) {
                                    return Math.pow(1 - r, t)
                                }
                            },
                            o = function(t) {
                                return function(r) {
                                    return t
                                }
                            },
                            a = function() {
                                return function(t) {
                                    return t
                                }
                            },
                            i = function() {
                                return function(t) {
                                    return 1 - t
                                }
                            },
                            s = function(t) {
                                return function(r) {
                                    for (var e = 1, n = 0; n < t.length; n++) e *= t[n](r);
                                    return e
                                }
                            };
                        r.push(new e);
                        for (var c = 1; t > c; c++) {
                            for (var l = [new o(t)], u = 0; t - c > u; u++) l.push(new a);
                            for (var u = 0; c > u; u++) l.push(new i);
                            r.push(new s(l))
                        }
                        r.push(new n), d[t] = r
                    }
                    return r
                },
                h = function(t, r) {
                    for (var e = m(t.length - 1), n = 0, o = 0, a = 0; a < t.length; a++) n += t[a].x * e[a](r), o += t[a].y * e[a](r);
                    return {
                        x: n,
                        y: o
                    }
                },
                p = function(t, r) {
                    return Math.sqrt(Math.pow(t.x - r.x, 2) + Math.pow(t.y - r.y, 2))
                },
                f = function(t) {
                    return t[0].x == t[1].x && t[0].y == t[1].y
                },
                g = function(t, r, e) {
                    if (f(t)) return {
                        point: t[0],
                        location: r
                    };
                    for (var n = h(t, r), o = 0, a = r, i = e > 0 ? 1 : -1, s = null; o < Math.abs(e);) a += .005 * i, s = h(t, a), o += p(s, n), n = s;
                    return {
                        point: s,
                        location: a
                    }
                },
                y = function(t) {
                    if (f(t)) return 0;
                    for (var r = h(t, 0), e = 0, n = 0, o = 1, a = null; 1 > n;) n += .005 * o, a = h(t, n), e += p(a, r), r = a;
                    return e
                },
                v = function(t, r, e) {
                    return g(t, r, e).point
                },
                x = function(t, r, e) {
                    return g(t, r, e).location
                },
                w = function(t, r) {
                    var e = h(t, r),
                        n = h(t.slice(0, t.length - 1), r),
                        o = n.y - e.y,
                        a = n.x - e.x;
                    return 0 == o ? 1 / 0 : Math.atan(o / a)
                },
                b = function(t, r, e) {
                    var n = g(t, r, e);
                    return n.location > 1 && (n.location = 1), n.location < 0 && (n.location = 0), w(t, n.location)
                },
                M = function(t, r, e, n) {
                    n = null == n ? 0 : n;
                    var o = g(t, r, n),
                        a = w(t, o.location),
                        i = Math.atan(-1 / a),
                        s = e / 2 * Math.sin(i),
                        c = e / 2 * Math.cos(i);
                    return [{
                        x: o.point.x + c,
                        y: o.point.y + s
                    }, {
                        x: o.point.x - c,
                        y: o.point.y - s
                    }]
                };
            window.jsBezier = {
                distanceFromCurve: n,
                gradientAtPoint: w,
                gradientAtPointAlongCurveFrom: b,
                nearestPointOnCurve: o,
                pointOnCurve: h,
                pointAlongCurveFrom: v,
                perpendicularToCurveAt: M,
                locationAlongCurveFrom: x,
                getLength: y
            }
        }()
    }, function(t, r, e) {
        function n(t, r) {
            function e(r) {
                t.forEach(function(t, r) {
                    t.index = r, t.new_value = t.chinaexports * (1 - _), t.loss = t.chinaexports - t.new_value, t.loss_normalized = t.loss * t.averagevariation, t.new_chinaexports = t.chinaexports - t.loss_normalized, t.new_gdp = t.gdp - t.loss_normalized, t.percGDP = t.loss_normalized / t.gdp
                })
            }

            function n(t) {
                L = d3.nest().key(function(t) {
                    return new Date(t.date.getFullYear(), 0, 1)
                }).rollup(function(t) {
                    var e = {};
                    return r.lines.forEach(function(n) {
                        e[n] = {
                            sum: d3.sum(t.filter(r.filters.max), function(t) {
                                return t[n]
                            }),
                            avg: d3.mean(t.filter(r.filters.max), function(t) {
                                return t[n]
                            })
                        }, e[n + "atMonth"] = {
                            sum: d3.sum(t.filter(r.filters.atMonth), function(t) {
                                return t[n]
                            }),
                            avg: d3.mean(t.filter(r.filters.atMonth), function(t) {
                                return t[n]
                            })
                        }
                    }), e
                }).entries(r.china.filter(r.filters.min)), T = L.map(function(t, e) {
                    var n = {
                        date: new Date(t.key)
                    };
                    return r.lines.forEach(function(r) {
                        n[r] = t.values[r].sum, n[r + "atMonth"] = t.values[r + "atMonth"].sum, n[r] && (n.ratio = n[r + "atMonth"] / n[r])
                    }), n
                }), T.forEach(function(t, e) {
                    t.prev = {}, T[e - 1] && (r.lines.forEach(function(r) {
                        t.prev.date = T[e - 1].date, t.prev[r] = T[e - 1][r], t.prev[r + "atMonth"] = T[e - 1][r + "atMonth"]
                    }), t.growthRate = {}, r.lines.forEach(function(r) {
                        t.growthRate[r] = (t[r] - t.prev[r]) / t.prev[r], t.growthRate[r + "atMonth"] = (t[r + "atMonth"] - t.prev[r + "atMonth"]) / t.prev[r + "atMonth"]
                    }))
                })
            }

            function a() {
                var r = t.filter(function(t) {
                    return t.majorpartner
                });
                extents = {
                    index: d3.extent(r, function(t) {
                        return t.index
                    }),
                    loss: d3.extent(r, function(t) {
                        return t.loss
                    }),
                    loss_normalized: d3.extent(r, function(t) {
                        return t.loss_normalized
                    }),
                    gdp2: d3.extent(r, function(t) {
                        return t.gdp
                    }),
                    gdp: [0, x],
                    percGDP: d3.extent(r, function(t) {
                        return t.percGDP
                    }),
                    chinaexportsovergdp: d3.extent(r, function(t) {
                        return t.chinaexportsovergdp
                    }),
                    exports: d3.extent(r, function(t) {
                        return t.exports
                    }),
                    chinaexports: d3.extent(r, function(t) {
                        return t.chinaexports
                    }),
                    china_exports30: [T[T.length - 2].CN - .3 * T[T.length - 2].CN, T[T.length - 2].CN]
                }
            }

            function i() {
                var t = f($.x, $.y);
                J.show([{
                    id: "ratio",
                    value: b(_)
                }, {
                    id: "export-country",
                    value: t.i.text
                }, {
                    id: "export-total",
                    value: t.i.loss
                }, {
                    id: "export-perc",
                    value: t.i.perc + " of GDP"
                }], t.p.x - F.left, t.p.y - F.top, null, A), ht.classed("highlight", function(r) {
                    return r.iso == t.i.iso && K
                }).filter(function(r) {
                    return r.iso == t.i.iso && K
                }).moveToFront(), pt.classed("highlight", function(r) {
                    return r.iso == t.i.iso && K
                }).filter(function(r) {
                    return r.iso == t.i.iso && K
                }).moveToFront()
            }

            function s(t) {
                var r = t[0],
                    e = "M" + r.x + "," + r.y,
                    n = t[1];
                return e += "C" + r.x + "," + n.y / 2 + " " + n.x + "," + n.y / 2 + " " + n.x + "," + n.y
            }

            function c(t, r) {
                var e = r.x,
                    n = r.y,
                    o = t[0],
                    a = t[1];
                v.beziers.push({
                    b: [{
                        x: o.x + e + F.left,
                        y: o.y + n + F.top
                    }, {
                        x: o.x + e + F.left,
                        y: a.y / 2 + n + F.top
                    }, {
                        x: a.x + e + F.left,
                        y: a.y / 2 + n + F.top
                    }, {
                        x: a.x + e + F.left,
                        y: a.y + n + F.top
                    }],
                    info: {
                        text: r.info.text,
                        iso: r.info.iso,
                        loss: w(r.info.loss_normalized),
                        perc: b(r.info.percGDP)
                    }
                })
            }

            function l(t) {
                vt = !0, _ = t, e(), h(!0)
            }

            function u(t) {
                return r.regions.filter(function(r) {
                    return r.c == t
                })[0]
            }

            function d() {
                740 > A ? m("Asia", !0) : m(null, !0)
            }

            function m(r, n) {
                if (k = r || null) {
                    u(k);
                    d3.select("#regionNav h1").text(u(k).n)
                }
                e(), W.domain(t.filter(function(t) {
                    return k ? t.region == k : t.majorpartner
                }).map(function(t) {
                    return t.index
                })), n || y.resize(!0)
            }

            function h(t, r) {
                if (.3 >= _) {
                    v.beziers = [];
                    var e = ct.y1 * _;
                    if (r && (et.attr("transform", "translate(" + F.left + "," + F.top + ")"), nt.attr("transform", "translate(" + F.left + "," + (F.top + B.range()[1]) + ")")), t) {
                        var n = d3.select(ft).transition().duration(_ > .2 ? 1e3 : 2e3).ease(_ > .2 ? "bounce" : "cubic-in-out").attr("transform", "translate(" + (A - (F.right + F.left)) / 2 + "," + G(_) + ")");
                        n.select("circle.inner").attr("cy", -I(z) + I(j - j * _)).attr("r", I(j - j * _)), n.select("circle.outer").attr("r", I(z))
                    } else {
                        var n = d3.select(ft).attr("transform", "translate(" + (A - (F.right + F.left)) / 2 + "," + G(_) + ")");
                        n.select("circle.inner").attr("cy", -I(z) + I(j - j * _)).attr("r", I(j - j * _)), n.select("circle.outer").attr("r", I(z))
                    }
                    lt.select("span.perc").text(b(-_)), ut.classed("hidden", function(t) {
                        return 0 >= _
                    }).text(w(1e3 * -e)), lt.style({
                        left: A / 2 - I(z) > 530 ? "240px" : A / 2 + I(z) + 20 + "px"
                    });
                    var o = A / 2 - I(z) > 530 ? I(z) + 10 : -I(z) - 10;
                    st.classed("left", A / 2 - I(z) < 530).attr({
                        transform: "translate(" + o + ",0)"
                    }), dt.attr("transform", "translate(0," + (-I(z) + I(j) - 2) + ")"), mt.attr("transform", "translate(0," + (I(z) + 16) + ")");
                    var a = pt.classed("hidden", function(t) {
                            return k ? t.region !== k : !t.majorpartner
                        }).classed("visible", function(t) {
                            return k ? t.region == k : t.majorpartner
                        }).filter(function(t) {
                            return k ? t.region == k : t.majorpartner
                        }),
                        i = t ? a.transition().duration(_ > .2 ? 1e3 : 2e3).ease(_ > .2 ? "bounce" : "cubic-in-out") : a;
                    i.attr("transform", function(t, r) {
                        var e = W.domain(),
                            n = e.indexOf(t.index) > -1 ? W(t.index) : 0,
                            o = B(t.percGDP),
                            a = (A - (F.right + F.left)) / 2,
                            i = B(t.percGDP) / B.range()[1],
                            s = (n - a) / a;
                        return n += i * (a * Math.abs(s)) * -s * .2, t.new_x = n, "translate(" + n + "," + o + ")"
                    }).select("circle.outer").attr("rel", function(t) {
                        return t.percGDP
                    }).style("fill", function(t) {
                        return Z(t.percGDP)
                    }).attr("cy", function(t) {
                        return -I(t.new_gdp)
                    }).attr("r", function(t) {
                        return I(t.new_gdp)
                    }), i.select("text.country-name").text(function(t) {
                        return t.text.length > 8 && .05 > _ || 980 >= A ? t.iso : t.text
                    }), a.select("circle.inner").attr("cy", function(t) {
                        return -I(t.new_chinaexports)
                    }).attr("r", function(t) {
                        return I(t.new_chinaexports)
                    }), a.select("text.value").classed("hidden", function(t) {
                        return t.loss_normalized <= 0
                    }).text(function(t) {
                        return w(-t.loss_normalized)
                    });
                    var l = ht.classed("hidden", function(t) {
                            return k ? t.region !== k : !t.majorpartner
                        }).classed("visible", function(t) {
                            return k ? t.region == k : t.majorpartner
                        }).filter(function(t) {
                            return k ? t.region == k : t.majorpartner
                        }),
                        u = t ? l.transition().duration(_ > .2 ? 1e3 : 2e3).ease(_ > .2 ? "bounce" : "cubic-in-out") : l;
                    u.attr("transform", function(t, r) {
                        var e = t.new_x,
                            n = B(t.percGDP);
                        return "translate(" + e + "," + n + ")"
                    }).select("path.connection.link").attr("d", function(t, r) {
                        var e = W.domain(),
                            n = e.indexOf(t.index) > -1 ? W(t.index) : 0,
                            o = B.range()[1] + G(_) - B(t.percGDP);
                        n = (A - (F.right + F.left)) / 2 - t.new_x;
                        var a = [{
                            x: 0,
                            y: 30
                        }, {
                            x: n,
                            y: o - U / 2
                        }];
                        return c(a, {
                            x: t.new_x,
                            y: B(t.percGDP),
                            info: t
                        }, r), s(a)
                    }).style("stroke", function(t) {
                        return Z(t.percGDP)
                    }), rt.attr("transform", "translate(" + (A - 40) + "," + F.top + ")"), bt.selectAll(".tick").select("line.grid").attr("x1", -A)
                }
            }

            function p() {
                if (window.requestAnimationFrame(p), $ && !q && i(), K || J.hide(), gt != yt) {
                    yt = gt;
                    var t = G.invert(gt);
                    0 > t && (t = 0), t > .3 && (t = .3), _ = t, e(), h()
                }
            }

            function f(t, r) {
                var e = null,
                    n = null,
                    o = null;
                if (v.beziers.length > 0) {
                    for (var a = A, i = v.beziers.length; i--;) {
                        var s = jsBezier.distanceFromCurve({
                            x: t,
                            y: r
                        }, v.beziers[i].b);
                        if (s.distance < a && (n = v.beziers[i], a = s.distance, o = s.location, 2 > a)) break
                    }
                    n && (e = jsBezier.pointOnCurve(n.b, 1 - o))
                }
                return {
                    p: e,
                    l: o,
                    i: n ? n.info : null,
                    b: n ? n.b : null
                }
            }

            function g() {
                var t = 25,
                    r = 10,
                    e = t + 16,
                    n = 768 > A ? C - 28 : B.range()[1] + F.top + 2 * t + 30,
                    o = tt.append("linearGradient").attr("id", "circleGradientLegend").attr({
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    });
                o.append("stop").attr("offset", "0%").attr("stop-color", "#fefefe"), o.append("stop").attr("offset", "100%").attr("stop-color", "#bbb");
                var a = Q.append("g").attr("class", "legend").attr("transform", "translate(" + e + "," + n + ")");
                a.append("circle").attr("class", "outer").attr("cx", 0).attr("cy", function(r) {
                    return -t
                }).attr("r", function(r) {
                    return t
                }), a.append("circle").attr("class", "inner").attr("cx", 0).attr("cy", function(t) {
                    return -r
                }).attr("r", function(t) {
                    return r
                }), a.append("text").attr("x", t).attr("y", function() {
                    return -r
                }).attr("dx", "10px").attr("dy", "2px").text("exports to "), a.append("text").attr("x", t).attr("y", function() {
                    return -r + 12
                }).attr("dx", "10px").attr("dy", "2px").text("China"), a.append("text").attr("x", t).attr("y", function() {
                    return -t
                }).attr("dx", "10px").attr("dy", "4px").text("country gdp"), a.append("line").attr("x1", 0).attr("x2", t + 5).attr("y1", function() {
                    return -t
                }).attr("y2", function() {
                    return -t
                }), a.append("line").attr("x1", 0).attr("x2", t + 5).attr("y1", function() {
                    return -r
                }).attr("y2", function() {
                    return -r
                }), a.append("text").attr("class", "center").attr("x", 0).attr("y", function() {
                    return 12
                }).text("country name"), a.append("text").attr("class", "center").attr("x", 0).attr("y", function() {
                    return 24
                }).text("$bn projected loss")
            }
            var y = this,
                v = {
                    beziers: [],
                    points: []
                },
                x = d3.max(t.map(function(t) {
                    return t.gdp
                }));
            x = 17419e9;
            var w = r.numberFormat || function(t) {
                    return d3.format("$.2f")(d3.round(t, 0) / 1e9) + "bn"
                },
                b = r.percFormat || function(t) {
                    return d3.format(",.1%")(t)
                },
                M = 0,
                k = "number" != typeof r.area ? null : r.regions[M].c;
            t = t.sort(function(t, r) {
                return +t.lng < -50 && (t.lng = 174 + (180 - Math.abs(+t.lng))), +r.lng < -50 && (r.lng = 174 + (180 - Math.abs(+r.lng))), +t.lng - +r.lng
            });
            var _ = 0,
                N = d3.select(r.container),
                P = N.append("div").attr("class", "bubblechart"),
                E = P.node().getBoundingClientRect(),
                A = E.width,
                C = E.height,
                S = .5,
                O = [0, A > 768 ? .125 * A : 50],
                F = {
                    left: A > 768 ? 100 : 40,
                    right: A > 768 ? 100 : 40,
                    top: A > 768 ? 320 : 2 * O[1],
                    bottom: O[1] + 10
                },
                z = 924e10,
                j = 1960290297e3,
                q = !1;
            e();
            var L = [],
                T = [];
            n();
            var R = T;
            a();
            var D = .035,
                I = d3.scale.sqrt().domain([0, extents.gdp[1]]).range(O);
            F.left = I(2941885537461);
            var W = d3.scale.ordinal().domain(t.map(function(t) {
                    return t.index
                })).rangePoints([0, A - (F.right + F.left)]),
                U = I(z),
                G = d3.scale.linear().domain([0, .3]).range([U, (C - (F.top + F.bottom)) * (1 - S)]),
                B = d3.scale.linear().domain([0, 2 * extents.percGDP[1]]).range([0, (C - (F.top + F.bottom)) * S]).nice(),
                H = d3.scale.linear().domain([0, 3 * extents.percGDP[1]]).range([.05, .8]),
                V = d3.scale.sqrt().domain([extents.chinaexports[0], extents.exports[1]]).range(O);
            chinaexports_scale = d3.scale.sqrt().domain(extents.chinaexports).range(O), chinacircle_scale = d3.scale.sqrt().domain(extents.china_exports30).range([U, 1.2 * U]), W.domain(t.filter(function(t) {
                return k ? t.region == k : t.majorpartner
            }).map(function(t) {
                return t.index
            }));
            var Y = (H.copy().range([.3, 1]), (A - (F.right + F.left)) / t.length, ["#FFEEF1", "#FFBBC7", "#FF889D", "#FF6681", "#FF4465", "#FF002D", "#DD0027", "#AA001E"]),
                Z = d3.scale.linear().domain(d3.range(0, D + D / 7, D / 7)).range(Y);
            B.domain([0, D]), H.domain([0, D]);
            var $, J = new o({
                    container: N.node(),
                    margins: F,
                    width: 190,
                    html: "<p>At <span></span> decline, <span></span> export sales lost: <span></span> (<span></span>)</p>",
                    indicators: [{
                        id: "ratio"
                    }, {
                        id: "export-country"
                    }, {
                        id: "export-total"
                    }, {
                        id: "export-perc"
                    }]
                }),
                X = !1,
                K = !1,
                Q = P.append("svg").attr("width", "100%").attr("height", "100%").on("mousemove", function(t) {
                    if (!q) {
                        var r = d3.mouse(this),
                            e = F.top + B.range()[1];
                        if (r[1] > e + G(_) - I(z)) return void(K = !1);
                        if (K = !0, !X) {
                            var n = {
                                x: r[0],
                                y: r[1]
                            };
                            $ = n
                        }
                    }
                }),
                tt = Q.append("defs");
            tt.append("marker").attr({
                id: "markerArrow",
                viewBox: "0 0 10 10",
                markerWidth: 5,
                markerHeight: 5,
                refX: 1,
                refY: 5,
                orient: "auto"
            }).append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").style({
                fill: "#767676",
                stroke: "none"
            });
            var rt = Q.append("g").attr("class", "axes").attr("transform", "translate(" + (A - 40) + "," + F.top + ")");
            new g;
            var et = Q.append("g").attr("id", "countries_half").attr("transform", "translate(" + F.left + "," + F.top + ")"),
                nt = Q.append("g").attr("id", "china_half").attr("transform", "translate(" + F.left + "," + (F.top + B.range()[1]) + ")"),
                ot = nt.append("g").attr("id", "china"),
                at = ot.append("g").attr("transform", "translate(" + (A - (F.right + F.left)) / 2 + "," + G(_) + ")"),
                it = A / 2 - I(z) > 530 ? I(z) + 10 : -I(z) - 10,
                st = at.append("g").attr("class", "hint").attr("transform", "translate(" + it + ",0)");
            st.append("line").attr("class", "arrow").attr("x1", 0).attr("y1", -19 + (320 > A ? 19 : 0)).attr("x2", 0).attr("y2", -29 + (320 > A ? 19 : 0)).style("marker-end", "url(#markerArrow)"), st.append("line").attr("class", "arrow").attr("x1", 0).attr("y1", 12 + (320 > A ? -12 : 0)).attr("x2", 0).attr("y2", 22 + (320 > A ? -12 : 0)).style("marker-end", "url(#markerArrow)"), st.append("text").attr("x", -2).attr("y", -7).text("Drag China"), st.append("text").attr("x", -2).attr("y", 7).text("up or down"), st.append("text").attr("class", "center").attr("x", 0).attr("y", -40 + (320 > A ? 19 : 0)).text("0%"), st.append("text").attr("class", "center").attr("x", 0).attr("y", 40 + (320 > A ? -12 : 0)).text("-30%"), at.append("circle").attr("class", "outer").attr("cx", 0).attr("cy", 0).attr("r", I(z)), at.append("circle").attr("class", "inner").attr("cx", 0).attr("cy", -I(z) + I(j - j * _)).attr("r", I(j - j * _));
            var ct = {
                    y1: R[R.length - 2].CN,
                    y2: R[R.length - 1].CNatMonth,
                    o_y1: R[R.length - 2].CN,
                    o_y2: R[R.length - 1].CNatMonth
                },
                lt = (P.append("div").attr("class", "blurb top").html("<h2>A drop in China's demand<br/>could drag these countries down ...</h2>"), P.append("div").attr("class", "blurb bubble").style({
                    left: A / 2 - I(z) > 530 ? "240px" : A / 2 + I(z) + 20 + "px"
                }).html('<h2>... if China\'s imports<br/>fall by <span class="perc">' + b(_) + "</span></h2><p class=\"header-text\">China's demand <button class='btn-standfirst selected' data-loss='0.146'>was down 14.6%</button> over the first seven months of 2015 compared to the same period last year. In January and February the decline was <button class='btn-standfirst' data-loss='0.2'>20% on average</button>. July's change was <button class='btn-standfirst' data-loss='0.08'>less severe at 8%</button></p>"));
            lt.selectAll("button").on("mousedown", function(t) {
                var r = d3.select(this),
                    e = r.attr("data-loss");
                l(+e), lt.selectAll("button").classed("selected", !1), r.classed("selected", !0)
            });
            var ut = (at.append("text").attr("class", "perc hidden").attr("x", 0).attr("y", 29).text(b(-_)), at.append("text").attr("class", "value hidden").attr("x", 0).attr("y", 53).classed("hidden", function(t) {
                    return 0 >= _
                }).text(function(t) {
                    return w(-ct.y1 * _ * 1e3)
                })),
                dt = at.append("g").attr("class", "legend inner").attr("transform", "translate(0," + (-I(z) + I(j) - 2) + ")");
            dt.append("text").attr("class", "legend inner").attr("x", 0).attr("y", 0).text("Chinese"), dt.append("text").attr("class", "legend inner").attr("x", 0).attr("y", 12).text("Imports");
            var mt = at.append("g").attr("class", "legend inner").attr("transform", "translate(0," + (I(z) + 16) + ")");
            mt.append("text").attr("class", "legend").attr("x", 0).attr("y", 0).text("Chinese GDP"), mt.append("line").attr("x1", 0).attr("x2", 0).attr("y1", function() {
                return -24
            }).attr("y2", function() {
                return -10
            });
            var ht = et.append("g").attr("class", "links").selectAll("g.link").data(t).enter().append("g").attr("class", "link").classed("hidden", function(t) {
                    return k ? t.region !== k : !t.majorpartner
                }).attr("transform", function(t, r) {
                    var e = W.domain(),
                        n = e.indexOf(t.index) > -1 ? W(t.index) : 0,
                        o = B(t.percGDP);
                    return "translate(" + n + "," + o + ")"
                }),
                pt = et.append("g").attr("class", "bubbles").selectAll("g.country").data(t).enter().append("g").attr("class", "country").classed("hidden", function(t) {
                    return k ? t.region !== k : !t.majorpartner
                }).classed("visible", function(t) {
                    return k ? t.region == k : t.majorpartner
                }).attr("rel", function(t) {
                    return t.chinaexports + "/" + t.gdp + "=" + t.chinaexports / t.gdp
                }).attr("rel-data", function(t) {
                    return Math.pow(I(t.chinaexports), 2) + "/" + Math.pow(I(t.gdp), 2) + "=" + Math.pow(I(t.chinaexports), 2) / Math.pow(I(t.gdp), 2)
                }).attr("transform", function(t, r) {
                    var e = W.domain(),
                        n = e.indexOf(t.index) > -1 ? W(t.index) : 0,
                        o = B(t.percGDP);
                    return "translate(" + n + "," + o + ")"
                }).on("mouseenter", function(t) {
                    d3.event.stopPropagation(), X = !0, $ = !1;
                    var r = W.domain(),
                        e = r.indexOf(t.index) > -1 ? W(t.index) : 0,
                        n = B(t.percGDP) + 30;
                    J.show([{
                        id: "ratio",
                        value: b(_)
                    }, {
                        id: "export-country",
                        value: t.text
                    }, {
                        id: "export-total",
                        value: w(t.loss_normalized)
                    }, {
                        id: "export-perc",
                        value: b(t.percGDP) + " of GDP"
                    }], e, n, null, A), ht.classed("highlight", function(r) {
                        return r.iso == t.iso && K
                    }).filter(function(r) {
                        return r.iso == t.iso && K
                    }).moveToFront(), pt.classed("highlight", function(r) {
                        return r.iso == t.iso && K
                    }).filter(function(r) {
                        return r.iso == t.iso && K
                    }).moveToFront()
                }).on("mouseleave", function(t) {
                    X = !1
                });
            pt.append("circle").attr("class", "outer").attr("cx", 0).attr("cy", function(t) {
                return -I(t.gdp)
            }).attr("r", function(t) {
                return I(t.gdp)
            }).style("fill", function(t) {
                return Z(t.percGDP)
            }), pt.append("circle").attr("class", "inner").attr("cx", 0).attr("cy", function(t) {
                return -I(t.chinaexports)
            }).attr("r", function(t) {
                return I(t.chinaexports)
            });
            d3.svg.line().x(function(t) {
                return t.x
            }).y(function(t) {
                return t.y
            }).interpolate("basis"), O[1];
            ht.append("path").attr("class", "connection link").attr("d", function(t, r) {
                var e = W.domain(),
                    n = e.indexOf(t.index) > -1 ? W(t.index) : 0,
                    o = B.range()[1] + G(_) - B(t.percGDP);
                n = (A - (F.right + F.left)) / 2 - n;
                var a = [{
                        x: 0,
                        y: 30
                    }, {
                        x: n,
                        y: o - U / 2
                    }],
                    e = W.domain(),
                    i = e.indexOf(t.index) > -1 ? W(t.index) : 0,
                    l = B(t.percGDP);
                return c(a, {
                    x: i,
                    y: l,
                    info: t
                }, r), s(a, B(t.percGDP))
            }).style("stroke", function(t) {
                return Z(t.percGDP)
            }), pt.append("text").attr("class", "country-name").attr("x", 0).attr("y", function(t) {
                return 12
            }).text(function(t) {
                return t.text.length > 8 && .05 > _ || 980 >= A ? t.iso : t.text
            }), pt.append("text").attr("class", "value").classed("hidden", function(t) {
                return t.loss_normalized <= 0
            }).attr("x", 0).attr("y", function(t) {
                return 26
            }).text(function(t) {
                return w(t.loss_normalized)
            });
            var ft, gt = 0,
                yt = 0,
                vt = !1;
            this.setRatio = function(t) {
                l(t)
            }, this.getLocked = function() {
                return vt
            }, this.resize = function(t) {
                E = P.node().getBoundingClientRect(), A = E.width, C = E.height, O = [0, A > 740 ? .125 * A : 50], t || d(), I.range(O), F = {
                    left: I(2941885537461),
                    right: A > 768 ? 100 : 40,
                    top: A > 768 ? 320 : 2 * O[1],
                    bottom: O[1]
                }, W.rangePoints([0, A - (F.right + F.left)]), U = I(z), G.range([U, (C - (F.top + F.bottom)) * (1 - S)]), V.range(O), chinacircle_scale.range(O), chinacircle_scale.range([U, 1.2 * U]), h(!1, !0)
            }, this.getNextArea = function() {
                return M = (M + 1) % r.regions.length, r.regions[M].c
            }, this.getPrevArea = function() {
                return 0 === M && (M = r.regions.length - 1), M = (M - 1) % r.regions.length, r.regions[M].c
            }, this.filterCountriesByArea = function(t) {
                m(t)
            };
            var xt = d3.behavior.drag().on("dragstart", function() {
                d3.event.sourceEvent.stopPropagation(), q = !0
            }).on("dragend", function() {
                d3.event.sourceEvent.stopPropagation(), q = !1
            }).on("drag", function() {
                gt ? gt += d3.event.dy : gt = G(_)
            });
            window.requestAnimationFrame(p);
            var wt = d3.svg.axis().scale(B).orient("right").tickFormat(b),
                bt = rt.append("g").attr("class", "y axis").call(wt),
                Mt = rt.append("g").attr("class", "title").attr("transform", "translate(35," + (B.range()[1] + 20) + ")"),
                kt = tt.append("linearGradient").attr("id", "gridGradient").attr({
                    x1: 1,
                    x2: 0,
                    y1: 0,
                    y2: 0
                });
            kt.append("stop").attr("offset", "0%").attr("stop-color", "#ccc").attr("stop-opacity", .7), kt.append("stop").attr("offset", "20%").attr("stop-color", "#ccc").attr("stop-opacity", 0), kt.append("stop").attr("offset", "80%").attr("stop-color", "#ccc").attr("stop-opacity", 0), kt.append("stop").attr("offset", "100%").attr("stop-color", "#ccc").attr("stop-opacity", .7), bt.selectAll(".tick").classed("hidden", function(t, r) {
                return 740 > A && r % 2 === 0
            }).append("line").attr("class", "grid").attr("x1", -A).attr("y1", 0).attr("x2", 0).attr("y2", 1e-5).style("stroke", "url(#gridGradient)"), bt.selectAll(".tick").select("text").style("fill", function(t) {
                return Z(t)
            }), Mt.append("text").attr("x", 0).attr("y", 0).text("lost export income"), Mt.append("text").attr("x", 0).attr("y", 14).text("as % of GDP"), ft = at.node(), at.call(xt), this.findBezier = f, this.getBeziers = function() {
                return v.beziers
            }
        }
        var o = e(9);
        t.exports = n
    }, function(t, r) {
        function e(t) {
            var r = t.width || 200,
                e = (t.height || 110, d3.select(t.container).append("div").attr("class", "tooltip")),
                n = e.append("div").attr("class", "arrow_box clearfix").style("width", r + "px");
            t.padding && n.style("padding", t.padding);
            var o;
            t.title && (o = n.append("h1").attr("class", "tooltip-title").text("title"));
            var a;
            if (t.html) n.html(t.html), a = n.selectAll("span").data(t.indicators).attr("id", function(t) {
                return t.id
            }).attr("class", "value");
            else {
                a = n.selectAll("div.indicator").data(t.indicators, function(t) {
                    return t.id
                }).enter().append("div").attr("class", "indicator clearfix");
                a.append("span").attr("class", "value").attr("id", function(t) {
                    return t.id
                });
                a.append("span").attr("class", "title").text(function(t) {
                    return t.title
                })
            }
            this.hide = function() {
                e.classed("visible", !1)
            }, this.show = function(n, i, s, c, l) {
                c && o.text(c), a.data(n), a.text(function(t) {
                    return t.value
                }), e.classed("right", function() {
                    return l && i + 16 + t.margins.left + r > l ? 1 : 0
                }).style("top", s + t.margins.top - 25 + "px").style("left", function() {
                    return i + t.margins.left + "px"
                }).classed("visible", !0)
            }
        }
        t.exports = e
    }, function(t, r, e) {
        function n(t, r) {
            function e() {
                t.forEach(function(t, r) {
                    t.b_index = r, t.new_value = t.chinaexports * (1 - c), t.loss = t.chinaexports - t.new_value, t.loss_normalized = t.loss * t.averagevariation, t.new_chinaexports = t.chinaexports - t.loss_normalized, t.new_gdp = t.gdp - t.loss_normalized, t.percGDP = t.loss_normalized / t.gdp, d3.entries(t.trades).forEach(function(r) {
                        r.value.commOnExports = r.value.dollarvalue / t.chinaexports
                    })
                })
            }

            function n() {
                g = {
                    index: d3.extent(t, function(t) {
                        return t.b_index
                    }),
                    loss: d3.extent(t, function(t) {
                        return t.loss
                    }),
                    loss_normalized: d3.extent(t, function(t) {
                        return t.loss_normalized
                    }),
                    gdp2: d3.extent(t, function(t) {
                        return t.gdp
                    }),
                    gdp: [0, y],
                    percGDP: d3.extent(t, function(t) {
                        return t.percGDP
                    }),
                    chinaexportsovergdp: d3.extent(t, function(t) {
                        return t.chinaexportsovergdp
                    }),
                    chinaexports: d3.extent(t, function(t) {
                        return t.chinaexports
                    }),
                    commodity: [d3.min(t.map(function(t) {
                        var r = d3.entries(t.trades);
                        return d3.min(r, function(t) {
                            return t.value.dollarvalue
                        })
                    })), d3.max(t.map(function(t) {
                        var r = d3.entries(t.trades);
                        return d3.max(r, function(t) {
                            return t.value.dollarvalue
                        })
                    }))],
                    commOnExports: [d3.min(t.map(function(t) {
                        var r = d3.entries(t.trades);
                        return d3.min(r, function(t) {
                            return t.value.commOnExports
                        })
                    })), d3.max(t.map(function(t) {
                        var r = d3.entries(t.trades);
                        return d3.max(r, function(t) {
                            return t.value.commOnExports
                        })
                    }))]
                }
            }

            function a() {
                w.rangePoints([0, m - (f.right + f.left)]), C.attr("transform", "translate(" + (m - 50) + "," + f.top + ")"), O.attr("transform", function(t) {
                    var r = w(t.b_index),
                        e = b(t.percGDP);
                    return "translate(" + r + "," + e + ")"
                });
                var t = Math.min(w(1), 100),
                    r = w(1) > 100 ? t / 2 : 0;
                m > 1024 && r && (r = t), D.style({
                    "margin-left": f.left - Math.floor(t / 2) - r + "px"
                }), I.style("width", t + "px").style("margin-left", w(1) - t + "px")
            }
            var i = r.numberFormat || function(t) {
                    return d3.format("$.2f")(d3.round(t, 0) / 1e9) + "bn"
                },
                s = r.percFormat || function(t, r) {
                    return d3.format(",." + (r || 1) + "%")(t)
                };
            t = t.sort(function(t, r) {
                return +t.lng - +r.lng
            });
            var c = r.ratio || 0,
                l = d3.select(r.container).select(".subsection[data-region=" + r.region + "] .sub-contents").append("div").attr("class", "balloon-chart"),
                u = l.append("div").attr("class", "countries"),
                d = u.node().getBoundingClientRect(),
                m = d.width,
                h = d.height,
                p = [0, .125 * m],
                f = {
                    left: m > 739 ? 50 : 25,
                    right: m > 739 ? .125 * m : 67,
                    top: p[1],
                    bottom: 50
                };
            e();
            var g, y = 17419e9;
            n();
            var v, x = g.percGDP[1],
                w = d3.scale.ordinal().domain(t.map(function(t) {
                    return t.b_index
                })).rangePoints([0, m - (f.right + f.left)]),
                b = d3.scale.linear().domain([0, g.percGDP[1]]).range([0, h - (f.top + f.bottom)]),
                M = d3.scale.sqrt().domain([0, g.gdp[1]]).range(p),
                k = 16,
                _ = (d3.scale.ordinal().domain(d3.range(5)).rangePoints([0, 5 * k]), d3.scale.linear().domain([0, g.commOnExports[1]]).range([0, 100]), (m - (f.right + f.left)) / t.length, ["#FFEEF1", "#FFBBC7", "#FF889D", "#FF6681", "#FF4465", "#FF002D", "#DD0027", "#AA001E"]),
                N = d3.scale.linear().domain(d3.range(0, x + x / 7, x / 7)).range(_),
                P = d3.scale.linear().domain(d3.range(0, .04, .005)).range(_),
                E = u.append("svg").attr("width", "100%").attr("height", "100%"),
                A = E.append("defs"),
                C = E.append("g").attr("class", "axes").attr("transform", "translate(" + (m - 50) + "," + f.top + ")"),
                S = E.append("g").attr("id", "countries").attr("transform", "translate(" + f.left + "," + f.top + ")"),
                O = S.selectAll("g.country").data(t).enter().append("g").attr("class", "country").attr("transform", function(t) {
                    var r = w(t.b_index),
                        e = b(t.percGDP);
                    return "translate(" + r + "," + e + ")"
                });
            O.append("circle").attr("class", "outer").attr("cx", 0).attr("cy", function(t) {
                return -M(t.gdp)
            }).attr("r", function(t) {
                return M(t.gdp)
            }).style("fill", function(t) {
                return P(t.percGDP)
            }), O.append("circle").attr("class", "inner").attr("cx", 0).attr("cy", function(t) {
                return -M(t.chinaexports)
            }).attr("r", function(t) {
                return M(t.chinaexports)
            }), O.append("line").attr("x1", 0).attr("y1", function(t) {
                return 30
            }).attr("x2", 0).attr("y2", function(t) {
                return h - b(t.percGDP)
            }).style("stroke", function(t) {
                return N(t.percGDP)
            }), O.append("text").attr("class", "country-name").attr("x", 0).attr("y", function(t) {
                return 12
            }).text(function(t) {
                return t.text
            }), O.append("text").attr("class", "value").attr("x", 0).attr("y", function(t) {
                return 26
            }).text(function(t) {
                var r = "-" + i(t.loss_normalized);
                return r
            });
            var F = A.append("linearGradient").attr("id", "gridGradient").attr({
                x1: 1,
                x2: 0,
                y1: 0,
                y2: 0
            });
            F.append("stop").attr("offset", "0%").attr("stop-color", "#ccc").attr("stop-opacity", .7), F.append("stop").attr("offset", "20%").attr("stop-color", "#ccc").attr("stop-opacity", 0), F.append("stop").attr("offset", "80%").attr("stop-color", "#ccc").attr("stop-opacity", 0), F.append("stop").attr("offset", "100%").attr("stop-color", "#ccc").attr("stop-opacity", .7);
            var z, j = d3.svg.axis().scale(b).orient("right").tickFormat(function(t) {
                    return s(t, 2)
                }),
                q = C.append("g").attr("class", "y axis").call(j);
            q.selectAll(".tick").classed("hidden", function(t, r) {
                return r % 3 === 0 && (z = t), r % 3 !== 0
            }).append("line").attr("class", "grid").attr("x2", 5).attr("y1", 0).attr("x1", -(m - (f.right + f.left)) - f.right).attr("y2", 1e-5).style("stroke", "url(#gridGradient)"), q.selectAll(".tick").select("text").style("fill", function(t) {
                return P(t)
            });
            var L = C.append("g").attr("class", "title").attr("transform", "translate(45," + (b(z) + 20) + ")");
            L.append("text").attr("x", 0).attr("y", 0).text("lost export"), L.append("text").attr("x", 0).attr("y", 15).text("income as"), L.append("text").attr("x", 0).attr("y", 30).text("% of GDP");
            var T = Math.min(w(1), 100),
                R = w(1) > 100 ? T / 2 : 0;
            m > 1024 && R && (R = T);
            var D = l.append("div").attr("class", "tags clearfix").style({
                "margin-left": f.left - Math.floor(T / 2) - R + "px"
            });
            v = new o({
                container: D.node(),
                margins: {
                    top: 0,
                    left: f.left,
                    right: 0,
                    bottom: 0
                },
                padding: "10px 2px",
                width: 60,
                html: "<p><span></span><br/><span></span></p>",
                indicators: [{
                    id: "comm-name"
                }, {
                    id: "comm-value"
                }]
            });
            var I = D.selectAll("ul").data(t).enter().append("ul").style("width", T + "px").style("margin-left", w(1) - T + "px");
            I.selectAll("li.tag").data(function(t, r) {
                return d3.entries(t.trades).filter(function(t) {
                    return t.value.commOnExports > .05
                }).map(function(t) {
                    return t.value.column = r, t
                })
            }).enter().append("li").attr("class", function(t) {
                return "tag " + t.value.rollup.replace(/\s/g, "")
            }).on("mousedown", function(t, r) {
                var e = [this.offsetLeft, this.offsetTop],
                    n = this.getBoundingClientRect();
                v.show([{
                    id: "comm-name",
                    value: t.value.shortdesc
                }, {
                    id: "comm-value",
                    value: i(t.value.dollarvalue)
                }], e[0] - 12, e[1] + n.height / 2, null)
            }).html(function(t) {
                return "<span>" + t.value.shortdesc + '</span><span class="value">' + i(t.value.dollarvalue) + "</span>"
            });
            this.resize = function() {
                var t = u.node().getBoundingClientRect();
                m = t.width, h = t.height, a()
            }
        }
        var o = e(9);
        t.exports = n
    }, function(t, r) {
        function e(t) {
            function r(t) {
                var r = "https://twitter.com/intent/tweet?text=",
                    e = "https://www.facebook.com/dialog/feed?display=popup&app_id=741666719251986&link=",
                    n = "http://gu.com/p/4b9h8",
                    o = "pic.twitter.com/TdatLErLKG",
                    a = "http://visuals.guim.co.uk/2015/images/chinatrade-image.png",
                    i = "A drop in China's imports could drag many countries down " + n + " #China  " + o,
                    s = "",
                    c = t.currentTarget.getAttribute("data-source");
                t.currentTarget.getAttribute("data-type");
                if ("twitter" === c) {
                    var l = i;
                    s = r + encodeURIComponent(l)
                } else if ("facebook" === c) {
                    var u = n;
                    s = e + encodeURIComponent(u) + "&picture=" + encodeURIComponent(a) + "&redirect_uri=http://www.theguardian.com"
                }
                window.open(s, c + "share", "width=640,height=320")
            }
            for (var e = document.querySelectorAll(t || ".btns-share button"), n = 0; n < e.length; n++) e[n].addEventListener("click", r)
        }
        t.exports = e
    }])
});