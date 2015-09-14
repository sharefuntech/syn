! function(t, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : "object" == typeof exports ? exports.gv = r() : t.gv = r()
}(this, function() {
    return function(t) {
        function r(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
        }
        var e = {};
        return r.m = t, r.c = e, r.p = "", r(0)
    }([function(t, r, e) {
        function n() {
            var t = i.getViewport(),
                r = s.time.format("%d/%m/%Y"),
                e = [{
                    c: "Asia",
                    n: "Asia",
                    d: 10
                }, {
                    c: "Europe",
                    n: "Europe",
                    d: 10
                }, {
                    c: "Others",
                    n: "Rest of the world",
                    d: 10
                }],
                n = [{
                    c: "Asia",
                    n: "Asia",
                    d: 10
                }, {
                    c: "Europe",
                    n: "Europe",
                    d: 10
                }, {
                    c: "NAmerica",
                    n: "North America",
                    d: 10
                }, {
                    c: "SAmerica",
                    n: "South America",
                    d: 10
                }, {
                    c: "Pacific",
                    n: "Pacific",
                    d: 10
                }, {
                    c: "Africa",
                    n: "Africa",
                    d: 10
                }, {
                    c: "Mideast",
                    n: "Middle East",
                    d: 10
                }],
                o = ["NAmerica", "SAmerica", "Pacific"],
                a = new u(c.filter(function(t) {
                    return "undefined" != typeof t.chinaexports && t.majorpartner
                }).map(function(t) {
                    return o.indexOf(t.continent) > -1 ? t.region = "Others" : t.region = t.continent, t
                }), {
                    container: "#bubbles",
                    china: l.map(function(t) {
                        return {
                            date: r.parse(t.month),
                            CN: t.imports
                        }
                    }).sort(function(t, r) {
                        return +t.date - +r.date
                    }),
                    regions: e,
                    lines: ["CN"],
                    ratio: .146,
                    area: t.width > 740 ? null : 0,
                    viewport: t,
                    filters: {
                        atMonth: function(t) {
                            return t.date.getMonth() <= 6
                        },
                        min: function(t) {
                            return t.date >= new Date(2001, 0, 1)
                        },
                        max: function(t) {
                            return t.date < new Date(2015, 0, 1)
                        }
                    }
                });
            s.select(".arrow-right").on("mousedown", function(t) {
                a.filterCountriesByArea(a.getNextArea())
            }), s.select(".arrow-left").on("mousedown", function(t) {
                a.filterCountriesByArea(a.getPrevArea())
            });
            var m = [];
            n.forEach(function(r) {
                    m.push(new d(c.filter(function(t) {
                        return t.continent == r.c
                    }).sort(function(t, r) {
                        return t.majorpartner ? -1 : r.majorpartner ? 1 : r.chinaexportsovergdp - t.chinaexportsovergdp
                    }).slice(0, t.width > 375 ? 12 : 8), {
                        container: "#regions",
                        region: r.c,
                        ratio: .146
                    }))
                }),
                function() {
                    var t = function(t, r, e) {
                        var e = e || window,
                            n = !1,
                            o = function() {
                                n || (n = !0, requestAnimationFrame(function() {
                                    e.dispatchEvent(new CustomEvent(r)), n = !1
                                }))
                            };
                        e.addEventListener(t, o)
                    };
                    t("scroll", "optimizedScroll"), t("resize", "optimizedResize")
                }(), window.addEventListener("scroll", function() {
                    a.getLocked() || a.setRatio(.146)
                }), window.addEventListener("optimizedResize", function() {
                    a.resize(), m.forEach(function(t) {
                        t.resize()
                    })
                }), t.height > 800 && (a.getLocked() || a.setRatio(.146))
        }

        function o(t) {
            t.innerHTML = a,
                function r() {
                    var t = document.querySelector("#bubbles");
                    return t && t.getBoundingClientRect().height ? (n(), void new m(".header .share")) : void window.requestAnimationFrame(r)
                }()
        }
        var a = e(1),
            i = e(2),
            s = e(3),
            c = e(4),
            l = e(5);
        e(6), e(7);
        var u = e(8),
            d = e(10),
            m = e(11);
        s.selection.prototype.moveToFront = function() {
            return this.each(function() {
                this.parentNode.appendChild(this)
            })
        }, t.exports = {
            boot: o
        }
    }, function(t, r) {
        t.exports = '<div class="l-side-margins2">\n    <div class="gv-wrapper">\n        <div>\n            <div class="header section">\n                <div class="title">&nbsp;</div>\n                <div class="contents">\n                    <h1>How China\'s economic slowdown could weigh on the rest of the world</h1>\n                    <p class="header-text">\n    In the year to July, China\'s customs agency reports that imports from Australia are down by $15bn dollars on the same period last year - a loss which is already equal to 1% of Australia\'s GDP, and many other countries stand to lose out to similar degrees.  China\'s imports overall are down by 14.6% over 2015. Find out what happens if this decline continues for the rest of the year - or worsens - and how that loss compares to each country\'s GDP<br/><a href="http://www.theguardian.com/business/ng-interactive/2015/aug/25/china-financial-crisis-from-peak-to-black-monday">Timeline: How China\'s stock market got from dizzy heights to Black Monday</a>\n                    </p>\n                <!--    <p class="header-text">\n                        <a href="http://www.theguardian.com/profile/carlo-zapponi" class="u-underline">Me</a>,\n                        <a href="http://www.theguardian.com/profile/carlo-zapponi" class="u-underline">You</a> and the\n                        <a href="http://www.theguardian.com/profile/carlo-zapponi" class="u-underline">GDP</a>\n                    </p-->\n                    <p class="header-date">Wednesday 26 August 2015</p>\n                    <p class="header-text">\n                        <button class="share share--twitter" data-source="twitter" data-type="page"></button>\n                        <button class="share share--facebook" data-source="facebook" data-type="page"></button>\n                    </p>\n                    \n                </div>\n\n            </div>\n            <div class="nav section clearfix">\n                    <div id="regionNav" class="clearfix">\n                        <h1>Asia</h1>\n                        <div class="arrows">\n                            <button class="arrow arrow-left"></button>\n                            <button class="arrow arrow-right"></button>\n                        </div>\n                    </div>\n            </div>\n            <div id="bubbles" class="clearfix section">\n                \n            </div>\n            <div class="notes">\n                The losses are calculated as the total reduction in exports to China over the year at the rate indicated, and include a factor for each country to account for variations in the drop in exports so far this year. For instance, while China\'s imports have been falling by 14.6% on average, imports from Australia are down 25.8%\n            </div>\n            \n        \n            <div id="regions" class="clearfix section">\n                <h1>Around the world</h1>\n                <p>The effects of a slowdown in China are felt all over the world; China\'s near neighbours are tied in to its manufacturing processes. Other countries supply it with oil and gas, while some far-away places in Africa and South America provide it with metals and other primary materials. Agricultural produce is important to Brazil and New Zealand. Lastly, several European countries are surprisingly tied in, often for luxury goods. These charts show the projected value of lost exports for 2015 alongside the value of exports for 2014 by major commodities.</p>\n                <div>\n                    <div class="subsection" data-region="Asia">\n                        <div class="sub-intro">\n                            <h2>Asia</h2>\n                            <p>The manufacturing sectors of China, Japan, South Korea and Taiwan are intimately connected. But Vietnam has been bucking the trend - its China-bound exports have been resistant to decline, in some months actually increasing year-on-year.</p>\n                            <ul id="chart-key">\n                                <li><span class="key" id="key-Foodandagriculture"></span>Food and agriculture</li>\n                                <li><span class="key" id="key-Manufactures"></span>Manufactures</li>\n                                <li><span class="key" id="key-Primarymaterials"></span>Primary materials</li>\n                                <li><span class="key" id="key-Energy"></span>Energy</li>\n                                <li><span class="key" id="key-Other"></span>Other</li>\n                            </ul>\n                        </div>\n                        <div class="sub-contents">\n                            \n                        </div>\n                    </div>\n                    <div class="subsection" data-region="Pacific">\n                        <div class="sub-intro">\n                            <h2>Pacific</h2>\n                            <p>Australia and New Zealand are both heavily exposed, to the value of several percentage points of GDP, but the exports in each case are very different. Australia\'s huge mining industry generates its trade, while New Zealand\'s is principally from farming, especially dairy.</p>\n                            <ul id="chart-key">\n                                <li><span class="key" id="key-Foodandagriculture"></span>Food and agriculture</li>\n                                <li><span class="key" id="key-Manufactures"></span>Manufactures</li>\n                                <li><span class="key" id="key-Primarymaterials"></span>Primary materials</li>\n                                <li><span class="key" id="key-Energy"></span>Energy</li>\n                                <li><span class="key" id="key-Other"></span>Other</li>\n                            </ul>\n                        </div>\n                        <div class="sub-contents">\n                            \n                        </div>\n                    </div>\n                    <div class="subsection" data-region="Africa">\n                        <div class="sub-intro">\n                            <h2>Africa</h2>\n                            <p>Most African nations were largely shielded from the 2008 financial crisis by China\'s insatiable demand for natural resources. But now there is a double whammy from declining exports to China and the broader fall in commodity prices that has followed. UN figures illustrate how investment in extraction industries has had the effect of making several countries dependent on Beijing for large parts of their export sector.</p>\n                            <ul id="chart-key">\n                                <li><span class="key" id="key-Foodandagriculture"></span>Food and agriculture</li>\n                                <li><span class="key" id="key-Manufactures"></span>Manufactures</li>\n                                <li><span class="key" id="key-Primarymaterials"></span>Primary materials</li>\n                                <li><span class="key" id="key-Energy"></span>Energy</li>\n                                <li><span class="key" id="key-Other"></span>Other</li>\n                            </ul>\n                        </div>\n                        <div class="sub-contents">\n                            \n                        </div>\n                    </div>\n                    <div class="subsection" data-region="Europe">\n                        <div class="sub-intro">\n                            <h2>Europe</h2>\n                            <p>The UK, France and Italy are relatively unaffected, although luxury exporters in all three have been feeling the pinch. Germany, though, is surprisingly exposed, both for luxury cars and precision machinery. Belgium\'s principal exports to China are diamonds.</p>\n                            <ul id="chart-key">\n                                <li><span class="key" id="key-Foodandagriculture"></span>Food and agriculture</li>\n                                <li><span class="key" id="key-Manufactures"></span>Manufactures</li>\n                                <li><span class="key" id="key-Primarymaterials"></span>Primary materials</li>\n                                <li><span class="key" id="key-Energy"></span>Energy</li>\n                                <li><span class="key" id="key-Other"></span>Other</li>\n                            </ul>\n                        </div>\n                        <div class="sub-contents">\n                            \n                        </div>\n                    </div>\n                    <div class="subsection" data-region="SAmerica">\n                        <div class="sub-intro">\n                            <h2>South America</h2>\n                            <p>The most exposed South American country is Chile, which exports copper. Elsewhere the main division is between extractive industries in the Andes and agricultural exports - especially soya - from the southern cone.</p>\n                            <ul id="chart-key">\n                                <li><span class="key" id="key-Foodandagriculture"></span>Food and agriculture</li>\n                                <li><span class="key" id="key-Manufactures"></span>Manufactures</li>\n                                <li><span class="key" id="key-Primarymaterials"></span>Primary materials</li>\n                                <li><span class="key" id="key-Energy"></span>Energy</li>\n                                <li><span class="key" id="key-Other"></span>Other</li>\n                            </ul>\n                        </div>\n                        <div class="sub-contents">\n                            \n                        </div>\n                    </div>\n                    <div class="subsection" data-region="NAmerica">\n                        <div class="sub-intro">\n                            <h2>North America</h2>\n                            <p>In dollar terms, the United States stands to lose heavily, but as a percentage of the vast US economy the loss is less severe. Canada, surprisingly, is so far not seeing big falls in its China-bound exports</p>\n                            <ul id="chart-key">\n                                <li><span class="key" id="key-Foodandagriculture"></span>Food and agriculture</li>\n                                <li><span class="key" id="key-Manufactures"></span>Manufactures</li>\n                                <li><span class="key" id="key-Primarymaterials"></span>Primary materials</li>\n                                <li><span class="key" id="key-Energy"></span>Energy</li>\n                                <li><span class="key" id="key-Other"></span>Other</li>\n                            </ul>\n                        </div>\n                        <div class="sub-contents">\n                            \n                        </div>\n                    </div>\n                    <div class="subsection" data-region="Mideast">\n                        <div class="sub-intro">\n                            <h2>Middle East</h2>\n                            <p>Most of the region\'s exports to China are energy-based, including uranium from Jordan. It is possible Saudi Arabia and Qatar will find other buyers for their oil and gas, but the China effect is driving down all commodity prices, so even if there is a buyer it will be at a huge discount compared to last year. Taxes on commodity exports are expected to plunge, hitting already stretched government budgets.</p>\n                            <ul id="chart-key">\n                                <li><span class="key" id="key-Foodandagriculture"></span>Food and agriculture</li>\n                                <li><span class="key" id="key-Manufactures"></span>Manufactures</li>\n                                <li><span class="key" id="key-Primarymaterials"></span>Primary materials</li>\n                                <li><span class="key" id="key-Energy"></span>Energy</li>\n                                <li><span class="key" id="key-Other"></span>Other</li>\n                            </ul>\n                        </div>\n                        <div class="sub-contents">\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div>\n            <div class="sourcesandcredits">\n                <span>Sources:</span> <a href="http://comtrade.un.org/">UN Comtrade Database</a>, <a href="http://www.customs.gov.cn/publish/portal0/">Chinese Customs Administration</a>, <a href="http://data.worldbank.org/">World Bank</a>.\n            </div>\n            <div class="sourcesandcredits">\n                <span>Credits:</span> <a href="http://www.theguardian.com/profile/carlo-zapponi">Carlo Zapponi</a>, <a href="http://www.theguardian.com/profile/seanclarke">Seán Clarke</a>, <a href="http://www.theguardian.com/profile/helena-bengtsson">Helena Bengtsson</a>, <a href="http://www.theguardian.com/profile/troy-griggs">Troy Griggs</a> and <a href="http://www.theguardian.com/profile/phillipinman">Phillip Inman</a>\n            </div>\n        </div>\n        <div class="end"></div>\n    </div>\n</div>'
    }, function(t, r) {
        function e(t) {
            var r, e, n, o = t || window.performance || window.msPerformance || window.webkitPerformance || window.mozPerformance;
            return o && o.timing && (r = o.timing.requestStart || o.timing.fetchStart || o.timing.navigationStart, e = o.timing.responseEnd, r && e && (n = e - r)), n
        }

        function n() {
            var t = window.performance || window.msPerformance || window.webkitPerformance || window.mozPerformance;
            return t && t.navigation ? t.navigation.type === t.navigation.TYPE_RELOAD : !1
        }

        function o() {
            return /(iPad|iPhone|iPod touch)/i.test(navigator.userAgent)
        }

        function a() {
            return /Android/i.test(navigator.userAgent)
        }

        function i() {
            return navigator.mozApps && !window.locationbar.visible
        }

        function s() {
            return navigator.userAgent.indexOf("FBAN/") > -1
        }

        function c() {
            return navigator.userAgent.indexOf("Twitter for iPhone") > -1
        }

        function l() {
            return /\.t\.co/.test(document.referrer)
        }

        function u() {
            return /\.facebook\.com/.test(document.referrer)
        }

        function d() {
            var t = /socialContext=(facebook|twitter)/.exec(window.location.hash);
            return null !== t ? t[1] : s() || u() ? "facebook" : c() || l() ? "twitter" : null
        }

        function m(t, r, n) {
            r = r || navigator.connection || navigator.mozConnection || navigator.webkitConnection || {
                type: "unknown"
            };
            var o, a, i = 3 === r.type || 4 === r.type || /^[23]g$/.test(r.type);
            return i ? "low" : (o = e(t), a = "high", n && (a = "unknown"), o && o > 1e3 && (a = "medium", o > 3e3 && (a = "low")), a)
        }

        function h(t) {
            t = t.toLowerCase();
            var r, e = !1,
                n = /Chrome\/([0-9]+)/i;
            return n.test(t) && (r = parseInt(n.exec(t)[1], 10), r >= 36 && (e = !0)), e ? "woff2" : t.indexOf("android") > -1 ? "ttf" : "woff"
        }

        function p() {
            return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch
        }

        function f() {
            return void 0 !== k ? k : (window.history && history.pushState && (k = !0, window.navigator.userAgent.match(/Android/i) && (k = !!window.navigator.userAgent.match(/(Chrome|Firefox)/i))), k)
        }

        function g() {
            var t = document.createElement("video"),
                r = {};
            try {
                t.canPlayType && (r.mp4 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), r.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), r.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (e) {}
            return r
        }

        function y() {
            return window.innerHeight > window.innerWidth ? "portrait" : "landscape"
        }

        function v() {
            var t = window,
                r = document,
                e = r.documentElement,
                n = r.getElementsByTagName("body")[0];
            return {
                width: t.innerWidth || e.clientWidth || n.clientWidth,
                height: t.innerHeight || e.clientHeight || n.clientHeight
            }
        }

        function x() {
            function t(t) {
                var e = "visible",
                    n = "hidden",
                    o = {
                        focus: e,
                        focusin: e,
                        pageshow: e,
                        blur: n,
                        focusout: n,
                        pagehide: n
                    };
                t = t || window.event, N = t.type in o ? o[t.type] : this[r] ? "hidden" : "visible"
            }
            var r = "hidden";
            r in document ? document.addEventListener("visibilitychange", t) : (r = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", t) : (r = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", t) : (r = "msHidden") in document ? document.addEventListener("msvisibilitychange", t) : "onfocusin" in document ? document.onfocusin = document.onfocusout = t : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = t
        }

        function w() {
            return "visible" === N
        }

        function b() {
            return "WebSocket" in window
        }

        function M() {
            var t, r = navigator.userAgent,
                e = /Windows NT (\d\.\d+)/.exec(r),
                n = "Off";
            return e && (t = parseFloat(e[1], 10), t >= 5.1 && 6.1 >= t && (n = /Chrome/.exec(r) && 6 > t ? "Auto" : "Cleartype")), n
        }
        var k, _, N = document.visibilityState || document.webkitVisibilityState || document.mozVisibilityState || document.msVisibilityState || "visible";
        _ = function() {
            var t, r = navigator.userAgent,
                e = r.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(e[1]) ? (t = /\brv[ :]+(\d+)/g.exec(r) || [], "IE " + (t[1] || "")) : "Chrome" === e[1] && (t = r.match(/\bOPR\/(\d+)/), null !== t) ? "Opera " + t[1] : (e = e[2] ? [e[1], e[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (t = r.match(/version\/(\d+)/i)) && e.splice(1, 1, t[1]), {
                browser: e[0],
                version: e[1]
            })
        }(), t.exports = {
            getConnectionSpeed: m,
            getFontFormatSupport: h,
            getVideoFormatSupport: g,
            hasTouchScreen: p,
            hasPushStateSupport: f,
            getOrientation: y,
            getViewport: v,
            getUserAgent: _,
            isIOS: o,
            isAndroid: a,
            isFireFoxOSApp: i,
            isFacebookApp: s,
            isTwitterApp: c,
            isFacebookReferral: u,
            isTwitterReferral: l,
            socialContext: d,
            isReload: n,
            initPageVisibility: x,
            pageVisible: w,
            hasWebSocket: b,
            getPageSpeed: e,
            fontHinting: M()
        }
    }, function(t, r, e) {
        var n, o;
        ! function() {
            function a(t) {
                return t && (t.ownerDocument || t.document || t).documentElement
            }

            function i(t) {
                return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView)
            }

            function s(t, r) {
                return r > t ? -1 : t > r ? 1 : t >= r ? 0 : NaN
            }

            function c(t) {
                return null === t ? NaN : +t
            }

            function l(t) {
                return !isNaN(t)
            }

            function u(t) {
                return {
                    left: function(r, e, n, o) {
                        for (arguments.length < 3 && (n = 0), arguments.length < 4 && (o = r.length); o > n;) {
                            var a = n + o >>> 1;
                            t(r[a], e) < 0 ? n = a + 1 : o = a
                        }
                        return n
                    },
                    right: function(r, e, n, o) {
                        for (arguments.length < 3 && (n = 0), arguments.length < 4 && (o = r.length); o > n;) {
                            var a = n + o >>> 1;
                            t(r[a], e) > 0 ? o = a : n = a + 1
                        }
                        return n
                    }
                }
            }

            function d(t) {
                return t.length
            }

            function m(t) {
                for (var r = 1; t * r % 1;) r *= 10;
                return r
            }

            function h(t, r) {
                for (var e in r) Object.defineProperty(t.prototype, e, {
                    value: r[e],
                    enumerable: !1
                })
            }

            function p() {
                this._ = Object.create(null)
            }

            function f(t) {
                return (t += "") === wi || t[0] === bi ? bi + t : t
            }

            function g(t) {
                return (t += "")[0] === bi ? t.slice(1) : t
            }

            function y(t) {
                return f(t) in this._
            }

            function v(t) {
                return (t = f(t)) in this._ && delete this._[t]
            }

            function x() {
                var t = [];
                for (var r in this._) t.push(g(r));
                return t
            }

            function w() {
                var t = 0;
                for (var r in this._) ++t;
                return t
            }

            function b() {
                for (var t in this._) return !1;
                return !0
            }

            function M() {
                this._ = Object.create(null)
            }

            function k(t) {
                return t
            }

            function _(t, r, e) {
                return function() {
                    var n = e.apply(r, arguments);
                    return n === r ? t : n
                }
            }

            function N(t, r) {
                if (r in t) return r;
                r = r.charAt(0).toUpperCase() + r.slice(1);
                for (var e = 0, n = Mi.length; n > e; ++e) {
                    var o = Mi[e] + r;
                    if (o in t) return o
                }
            }

            function P() {}

            function E() {}

            function A(t) {
                function r() {
                    for (var r, n = e, o = -1, a = n.length; ++o < a;)(r = n[o].on) && r.apply(this, arguments);
                    return t
                }
                var e = [],
                    n = new p;
                return r.on = function(r, o) {
                    var a, i = n.get(r);
                    return arguments.length < 2 ? i && i.on : (i && (i.on = null, e = e.slice(0, a = e.indexOf(i)).concat(e.slice(a + 1)), n.remove(r)), o && e.push(n.set(r, {
                        on: o
                    })), t)
                }, r
            }

            function C() {
                si.event.preventDefault()
            }

            function S() {
                for (var t, r = si.event; t = r.sourceEvent;) r = t;
                return r
            }

            function O(t) {
                for (var r = new E, e = 0, n = arguments.length; ++e < n;) r[arguments[e]] = A(r);
                return r.of = function(e, n) {
                    return function(o) {
                        try {
                            var a = o.sourceEvent = si.event;
                            o.target = t, si.event = o, r[o.type].apply(e, n)
                        } finally {
                            si.event = a
                        }
                    }
                }, r
            }

            function F(t) {
                return _i(t, Ai), t
            }

            function z(t) {
                return "function" == typeof t ? t : function() {
                    return Ni(t, this)
                }
            }

            function j(t) {
                return "function" == typeof t ? t : function() {
                    return Pi(t, this)
                }
            }

            function q(t, r) {
                function e() {
                    this.removeAttribute(t)
                }

                function n() {
                    this.removeAttributeNS(t.space, t.local)
                }

                function o() {
                    this.setAttribute(t, r)
                }

                function a() {
                    this.setAttributeNS(t.space, t.local, r)
                }

                function i() {
                    var e = r.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                }

                function s() {
                    var e = r.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                }
                return t = si.ns.qualify(t), null == r ? t.local ? n : e : "function" == typeof r ? t.local ? s : i : t.local ? a : o
            }

            function L(t) {
                return t.trim().replace(/\s+/g, " ")
            }

            function T(t) {
                return new RegExp("(?:^|\\s+)" + si.requote(t) + "(?:\\s+|$)", "g")
            }

            function R(t) {
                return (t + "").trim().split(/^|\s+/)
            }

            function D(t, r) {
                function e() {
                    for (var e = -1; ++e < o;) t[e](this, r)
                }

                function n() {
                    for (var e = -1, n = r.apply(this, arguments); ++e < o;) t[e](this, n)
                }
                t = R(t).map(I);
                var o = t.length;
                return "function" == typeof r ? n : e
            }

            function I(t) {
                var r = T(t);
                return function(e, n) {
                    if (o = e.classList) return n ? o.add(t) : o.remove(t);
                    var o = e.getAttribute("class") || "";
                    n ? (r.lastIndex = 0, r.test(o) || e.setAttribute("class", L(o + " " + t))) : e.setAttribute("class", L(o.replace(r, " ")))
                }
            }

            function W(t, r, e) {
                function n() {
                    this.style.removeProperty(t)
                }

                function o() {
                    this.style.setProperty(t, r, e)
                }

                function a() {
                    var n = r.apply(this, arguments);
                    null == n ? this.style.removeProperty(t) : this.style.setProperty(t, n, e)
                }
                return null == r ? n : "function" == typeof r ? a : o
            }

            function U(t, r) {
                function e() {
                    delete this[t]
                }

                function n() {
                    this[t] = r
                }

                function o() {
                    var e = r.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e
                }
                return null == r ? e : "function" == typeof r ? o : n
            }

            function G(t) {
                function r() {
                    var r = this.ownerDocument,
                        e = this.namespaceURI;
                    return e ? r.createElementNS(e, t) : r.createElement(t)
                }

                function e() {
                    return this.ownerDocument.createElementNS(t.space, t.local)
                }
                return "function" == typeof t ? t : (t = si.ns.qualify(t)).local ? e : r
            }

            function B() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function H(t) {
                return {
                    __data__: t
                }
            }

            function V(t) {
                return function() {
                    return Ei(this, t)
                }
            }

            function Y(t) {
                return arguments.length || (t = s),
                    function(r, e) {
                        return r && e ? t(r.__data__, e.__data__) : !r - !e
                    }
            }

            function Z(t, r) {
                for (var e = 0, n = t.length; n > e; e++)
                    for (var o, a = t[e], i = 0, s = a.length; s > i; i++)(o = a[i]) && r(o, i, e);
                return t
            }

            function $(t) {
                return _i(t, Si), t
            }

            function J(t) {
                var r, e;
                return function(n, o, a) {
                    var i, s = t[a].update,
                        c = s.length;
                    for (a != e && (e = a, r = 0), o >= r && (r = o + 1); !(i = s[r]) && ++r < c;);
                    return i
                }
            }

            function X(t, r, e) {
                function n() {
                    var r = this[i];
                    r && (this.removeEventListener(t, r, r.$), delete this[i])
                }

                function o() {
                    var o = c(r, li(arguments));
                    n.call(this), this.addEventListener(t, this[i] = o, o.$ = e), o._ = r
                }

                function a() {
                    var r, e = new RegExp("^__on([^.]+)" + si.requote(t) + "$");
                    for (var n in this)
                        if (r = n.match(e)) {
                            var o = this[n];
                            this.removeEventListener(r[1], o, o.$), delete this[n]
                        }
                }
                var i = "__on" + t,
                    s = t.indexOf("."),
                    c = K;
                s > 0 && (t = t.slice(0, s));
                var l = Oi.get(t);
                return l && (t = l, c = Q), s ? r ? o : n : r ? P : a
            }

            function K(t, r) {
                return function(e) {
                    var n = si.event;
                    si.event = e, r[0] = this.__data__;
                    try {
                        t.apply(this, r)
                    } finally {
                        si.event = n
                    }
                }
            }

            function Q(t, r) {
                var e = K(t, r);
                return function(t) {
                    var r = this,
                        n = t.relatedTarget;
                    n && (n === r || 8 & n.compareDocumentPosition(r)) || e.call(r, t)
                }
            }

            function tt(t) {
                var r = ".dragsuppress-" + ++zi,
                    e = "click" + r,
                    n = si.select(i(t)).on("touchmove" + r, C).on("dragstart" + r, C).on("selectstart" + r, C);
                if (null == Fi && (Fi = "onselectstart" in t ? !1 : N(t.style, "userSelect")), Fi) {
                    var o = a(t).style,
                        s = o[Fi];
                    o[Fi] = "none"
                }
                return function(t) {
                    if (n.on(r, null), Fi && (o[Fi] = s), t) {
                        var a = function() {
                            n.on(e, null)
                        };
                        n.on(e, function() {
                            C(), a()
                        }, !0), setTimeout(a, 0)
                    }
                }
            }

            function rt(t, r) {
                r.changedTouches && (r = r.changedTouches[0]);
                var e = t.ownerSVGElement || t;
                if (e.createSVGPoint) {
                    var n = e.createSVGPoint();
                    if (0 > ji) {
                        var o = i(t);
                        if (o.scrollX || o.scrollY) {
                            e = si.select("body").append("svg").style({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                margin: 0,
                                padding: 0,
                                border: "none"
                            }, "important");
                            var a = e[0][0].getScreenCTM();
                            ji = !(a.f || a.e), e.remove()
                        }
                    }
                    return ji ? (n.x = r.pageX, n.y = r.pageY) : (n.x = r.clientX, n.y = r.clientY), n = n.matrixTransform(t.getScreenCTM().inverse()), [n.x, n.y]
                }
                var s = t.getBoundingClientRect();
                return [r.clientX - s.left - t.clientLeft, r.clientY - s.top - t.clientTop]
            }

            function et() {
                return si.event.changedTouches[0].identifier
            }

            function nt(t) {
                return t > 0 ? 1 : 0 > t ? -1 : 0
            }

            function ot(t, r, e) {
                return (r[0] - t[0]) * (e[1] - t[1]) - (r[1] - t[1]) * (e[0] - t[0])
            }

            function at(t) {
                return t > 1 ? 0 : -1 > t ? Ti : Math.acos(t)
            }

            function it(t) {
                return t > 1 ? Ii : -1 > t ? -Ii : Math.asin(t)
            }

            function st(t) {
                return ((t = Math.exp(t)) - 1 / t) / 2
            }

            function ct(t) {
                return ((t = Math.exp(t)) + 1 / t) / 2
            }

            function lt(t) {
                return ((t = Math.exp(2 * t)) - 1) / (t + 1)
            }

            function ut(t) {
                return (t = Math.sin(t / 2)) * t
            }

            function dt() {}

            function mt(t, r, e) {
                return this instanceof mt ? (this.h = +t, this.s = +r, void(this.l = +e)) : arguments.length < 2 ? t instanceof mt ? new mt(t.h, t.s, t.l) : Pt("" + t, Et, mt) : new mt(t, r, e)
            }

            function ht(t, r, e) {
                function n(t) {
                    return t > 360 ? t -= 360 : 0 > t && (t += 360), 60 > t ? a + (i - a) * t / 60 : 180 > t ? i : 240 > t ? a + (i - a) * (240 - t) / 60 : a
                }

                function o(t) {
                    return Math.round(255 * n(t))
                }
                var a, i;
                return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, r = isNaN(r) ? 0 : 0 > r ? 0 : r > 1 ? 1 : r, e = 0 > e ? 0 : e > 1 ? 1 : e, i = .5 >= e ? e * (1 + r) : e + r - e * r, a = 2 * e - i, new Mt(o(t + 120), o(t), o(t - 120))
            }

            function pt(t, r, e) {
                return this instanceof pt ? (this.h = +t, this.c = +r, void(this.l = +e)) : arguments.length < 2 ? t instanceof pt ? new pt(t.h, t.c, t.l) : t instanceof gt ? vt(t.l, t.a, t.b) : vt((t = At((t = si.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new pt(t, r, e)
            }

            function ft(t, r, e) {
                return isNaN(t) && (t = 0), isNaN(r) && (r = 0), new gt(e, Math.cos(t *= Wi) * r, Math.sin(t) * r)
            }

            function gt(t, r, e) {
                return this instanceof gt ? (this.l = +t, this.a = +r, void(this.b = +e)) : arguments.length < 2 ? t instanceof gt ? new gt(t.l, t.a, t.b) : t instanceof pt ? ft(t.h, t.c, t.l) : At((t = Mt(t)).r, t.g, t.b) : new gt(t, r, e)
            }

            function yt(t, r, e) {
                var n = (t + 16) / 116,
                    o = n + r / 500,
                    a = n - e / 200;
                return o = xt(o) * Ki, n = xt(n) * Qi, a = xt(a) * ts, new Mt(bt(3.2404542 * o - 1.5371385 * n - .4985314 * a), bt(-.969266 * o + 1.8760108 * n + .041556 * a), bt(.0556434 * o - .2040259 * n + 1.0572252 * a))
            }

            function vt(t, r, e) {
                return t > 0 ? new pt(Math.atan2(e, r) * Ui, Math.sqrt(r * r + e * e), t) : new pt(NaN, NaN, t)
            }

            function xt(t) {
                return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
            }

            function wt(t) {
                return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
            }

            function bt(t) {
                return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
            }

            function Mt(t, r, e) {
                return this instanceof Mt ? (this.r = ~~t, this.g = ~~r, void(this.b = ~~e)) : arguments.length < 2 ? t instanceof Mt ? new Mt(t.r, t.g, t.b) : Pt("" + t, Mt, ht) : new Mt(t, r, e)
            }

            function kt(t) {
                return new Mt(t >> 16, t >> 8 & 255, 255 & t)
            }

            function _t(t) {
                return kt(t) + ""
            }

            function Nt(t) {
                return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
            }

            function Pt(t, r, e) {
                t = t.toLowerCase();
                var n, o, a, i = 0,
                    s = 0,
                    c = 0;
                if (n = /([a-z]+)\((.*)\)/.exec(t)) switch (o = n[2].split(","), n[1]) {
                    case "hsl":
                        return e(parseFloat(o[0]), parseFloat(o[1]) / 100, parseFloat(o[2]) / 100);
                    case "rgb":
                        return r(St(o[0]), St(o[1]), St(o[2]))
                }
                return (a = ns.get(t)) ? r(a.r, a.g, a.b) : (null == t || "#" !== t.charAt(0) || isNaN(a = parseInt(t.slice(1), 16)) || (4 === t.length ? (i = (3840 & a) >> 4, i = i >> 4 | i, s = 240 & a, s = s >> 4 | s, c = 15 & a, c = c << 4 | c) : 7 === t.length && (i = (16711680 & a) >> 16, s = (65280 & a) >> 8, c = 255 & a)), r(i, s, c))
            }

            function Et(t, r, e) {
                var n, o, a = Math.min(t /= 255, r /= 255, e /= 255),
                    i = Math.max(t, r, e),
                    s = i - a,
                    c = (i + a) / 2;
                return s ? (o = .5 > c ? s / (i + a) : s / (2 - i - a), n = t == i ? (r - e) / s + (e > r ? 6 : 0) : r == i ? (e - t) / s + 2 : (t - r) / s + 4, n *= 60) : (n = NaN, o = c > 0 && 1 > c ? 0 : n), new mt(n, o, c)
            }

            function At(t, r, e) {
                t = Ct(t), r = Ct(r), e = Ct(e);
                var n = wt((.4124564 * t + .3575761 * r + .1804375 * e) / Ki),
                    o = wt((.2126729 * t + .7151522 * r + .072175 * e) / Qi),
                    a = wt((.0193339 * t + .119192 * r + .9503041 * e) / ts);
                return gt(116 * o - 16, 500 * (n - o), 200 * (o - a))
            }

            function Ct(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function St(t) {
                var r = parseFloat(t);
                return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * r) : r
            }

            function Ot(t) {
                return "function" == typeof t ? t : function() {
                    return t
                }
            }

            function Ft(t) {
                return function(r, e, n) {
                    return 2 === arguments.length && "function" == typeof e && (n = e, e = null), zt(r, e, t, n)
                }
            }

            function zt(t, r, e, n) {
                function o() {
                    var t, r = c.status;
                    if (!r && qt(c) || r >= 200 && 300 > r || 304 === r) {
                        try {
                            t = e.call(a, c)
                        } catch (n) {
                            return void i.error.call(a, n)
                        }
                        i.load.call(a, t)
                    } else i.error.call(a, c)
                }
                var a = {},
                    i = si.dispatch("beforesend", "progress", "load", "error"),
                    s = {},
                    c = new XMLHttpRequest,
                    l = null;
                return !this.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(t) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = o : c.onreadystatechange = function() {
                    c.readyState > 3 && o()
                }, c.onprogress = function(t) {
                    var r = si.event;
                    si.event = t;
                    try {
                        i.progress.call(a, c)
                    } finally {
                        si.event = r
                    }
                }, a.header = function(t, r) {
                    return t = (t + "").toLowerCase(), arguments.length < 2 ? s[t] : (null == r ? delete s[t] : s[t] = r + "", a)
                }, a.mimeType = function(t) {
                    return arguments.length ? (r = null == t ? null : t + "", a) : r
                }, a.responseType = function(t) {
                    return arguments.length ? (l = t, a) : l
                }, a.response = function(t) {
                    return e = t, a
                }, ["get", "post"].forEach(function(t) {
                    a[t] = function() {
                        return a.send.apply(a, [t].concat(li(arguments)))
                    }
                }), a.send = function(e, n, o) {
                    if (2 === arguments.length && "function" == typeof n && (o = n, n = null), c.open(e, t, !0), null == r || "accept" in s || (s.accept = r + ",*/*"), c.setRequestHeader)
                        for (var u in s) c.setRequestHeader(u, s[u]);
                    return null != r && c.overrideMimeType && c.overrideMimeType(r), null != l && (c.responseType = l), null != o && a.on("error", o).on("load", function(t) {
                        o(null, t)
                    }), i.beforesend.call(a, c), c.send(null == n ? null : n), a
                }, a.abort = function() {
                    return c.abort(), a
                }, si.rebind(a, i, "on"), null == n ? a : a.get(jt(n))
            }

            function jt(t) {
                return 1 === t.length ? function(r, e) {
                    t(null == r ? e : null)
                } : t
            }

            function qt(t) {
                var r = t.responseType;
                return r && "text" !== r ? t.response : t.responseText
            }

            function Lt() {
                var t = Tt(),
                    r = Rt() - t;
                r > 24 ? (isFinite(r) && (clearTimeout(ss), ss = setTimeout(Lt, r)), is = 0) : (is = 1, ls(Lt))
            }

            function Tt() {
                var t = Date.now();
                for (cs = os; cs;) t >= cs.t && (cs.f = cs.c(t - cs.t)), cs = cs.n;
                return t
            }

            function Rt() {
                for (var t, r = os, e = 1 / 0; r;) r.f ? r = t ? t.n = r.n : os = r.n : (r.t < e && (e = r.t),
                    r = (t = r).n);
                return as = t, e
            }

            function Dt(t, r) {
                return r - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
            }

            function It(t, r) {
                var e = Math.pow(10, 3 * xi(8 - r));
                return {
                    scale: r > 8 ? function(t) {
                        return t / e
                    } : function(t) {
                        return t * e
                    },
                    symbol: t
                }
            }

            function Wt(t) {
                var r = t.decimal,
                    e = t.thousands,
                    n = t.grouping,
                    o = t.currency,
                    a = n && e ? function(t, r) {
                        for (var o = t.length, a = [], i = 0, s = n[0], c = 0; o > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(t.substring(o -= s, o + s)), !((c += s + 1) > r));) s = n[i = (i + 1) % n.length];
                        return a.reverse().join(e)
                    } : k;
                return function(t) {
                    var e = ds.exec(t),
                        n = e[1] || " ",
                        i = e[2] || ">",
                        s = e[3] || "-",
                        c = e[4] || "",
                        l = e[5],
                        u = +e[6],
                        d = e[7],
                        m = e[8],
                        h = e[9],
                        p = 1,
                        f = "",
                        g = "",
                        y = !1,
                        v = !0;
                    switch (m && (m = +m.substring(1)), (l || "0" === n && "=" === i) && (l = n = "0", i = "="), h) {
                        case "n":
                            d = !0, h = "g";
                            break;
                        case "%":
                            p = 100, g = "%", h = "f";
                            break;
                        case "p":
                            p = 100, g = "%", h = "r";
                            break;
                        case "b":
                        case "o":
                        case "x":
                        case "X":
                            "#" === c && (f = "0" + h.toLowerCase());
                        case "c":
                            v = !1;
                        case "d":
                            y = !0, m = 0;
                            break;
                        case "s":
                            p = -1, h = "r"
                    }
                    "$" === c && (f = o[0], g = o[1]), "r" != h || m || (h = "g"), null != m && ("g" == h ? m = Math.max(1, Math.min(21, m)) : ("e" == h || "f" == h) && (m = Math.max(0, Math.min(20, m)))), h = ms.get(h) || Ut;
                    var x = l && d;
                    return function(t) {
                        var e = g;
                        if (y && t % 1) return "";
                        var o = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : "-" === s ? "" : s;
                        if (0 > p) {
                            var c = si.formatPrefix(t, m);
                            t = c.scale(t), e = c.symbol + g
                        } else t *= p;
                        t = h(t, m);
                        var w, b, M = t.lastIndexOf(".");
                        if (0 > M) {
                            var k = v ? t.lastIndexOf("e") : -1;
                            0 > k ? (w = t, b = "") : (w = t.substring(0, k), b = t.substring(k))
                        } else w = t.substring(0, M), b = r + t.substring(M + 1);
                        !l && d && (w = a(w, 1 / 0));
                        var _ = f.length + w.length + b.length + (x ? 0 : o.length),
                            N = u > _ ? new Array(_ = u - _ + 1).join(n) : "";
                        return x && (w = a(N + w, N.length ? u - b.length : 1 / 0)), o += f, t = w + b, ("<" === i ? o + t + N : ">" === i ? N + o + t : "^" === i ? N.substring(0, _ >>= 1) + o + t + N.substring(_) : o + (x ? t : N + t)) + e
                    }
                }
            }

            function Ut(t) {
                return t + ""
            }

            function Gt() {
                this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
            }

            function Bt(t, r, e) {
                function n(r) {
                    var e = t(r),
                        n = a(e, 1);
                    return n - r > r - e ? e : n
                }

                function o(e) {
                    return r(e = t(new ps(e - 1)), 1), e
                }

                function a(t, e) {
                    return r(t = new ps(+t), e), t
                }

                function i(t, n, a) {
                    var i = o(t),
                        s = [];
                    if (a > 1)
                        for (; n > i;) e(i) % a || s.push(new Date(+i)), r(i, 1);
                    else
                        for (; n > i;) s.push(new Date(+i)), r(i, 1);
                    return s
                }

                function s(t, r, e) {
                    try {
                        ps = Gt;
                        var n = new Gt;
                        return n._ = t, i(n, r, e)
                    } finally {
                        ps = Date
                    }
                }
                t.floor = t, t.round = n, t.ceil = o, t.offset = a, t.range = i;
                var c = t.utc = Ht(t);
                return c.floor = c, c.round = Ht(n), c.ceil = Ht(o), c.offset = Ht(a), c.range = s, t
            }

            function Ht(t) {
                return function(r, e) {
                    try {
                        ps = Gt;
                        var n = new Gt;
                        return n._ = r, t(n, e)._
                    } finally {
                        ps = Date
                    }
                }
            }

            function Vt(t) {
                function r(t) {
                    function r(r) {
                        for (var e, o, a, i = [], s = -1, c = 0; ++s < n;) 37 === t.charCodeAt(s) && (i.push(t.slice(c, s)), null != (o = gs[e = t.charAt(++s)]) && (e = t.charAt(++s)), (a = A[e]) && (e = a(r, null == o ? "e" === e ? " " : "0" : o)), i.push(e), c = s + 1);
                        return i.push(t.slice(c, s)), i.join("")
                    }
                    var n = t.length;
                    return r.parse = function(r) {
                        var n = {
                                y: 1900,
                                m: 0,
                                d: 1,
                                H: 0,
                                M: 0,
                                S: 0,
                                L: 0,
                                Z: null
                            },
                            o = e(n, t, r, 0);
                        if (o != r.length) return null;
                        "p" in n && (n.H = n.H % 12 + 12 * n.p);
                        var a = null != n.Z && ps !== Gt,
                            i = new(a ? Gt : ps);
                        return "j" in n ? i.setFullYear(n.y, 0, n.j) : "w" in n && ("W" in n || "U" in n) ? (i.setFullYear(n.y, 0, 1), i.setFullYear(n.y, 0, "W" in n ? (n.w + 6) % 7 + 7 * n.W - (i.getDay() + 5) % 7 : n.w + 7 * n.U - (i.getDay() + 6) % 7)) : i.setFullYear(n.y, n.m, n.d), i.setHours(n.H + (n.Z / 100 | 0), n.M + n.Z % 100, n.S, n.L), a ? i._ : i
                    }, r.toString = function() {
                        return t
                    }, r
                }

                function e(t, r, e, n) {
                    for (var o, a, i, s = 0, c = r.length, l = e.length; c > s;) {
                        if (n >= l) return -1;
                        if (o = r.charCodeAt(s++), 37 === o) {
                            if (i = r.charAt(s++), a = C[i in gs ? r.charAt(s++) : i], !a || (n = a(t, e, n)) < 0) return -1
                        } else if (o != e.charCodeAt(n++)) return -1
                    }
                    return n
                }

                function n(t, r, e) {
                    M.lastIndex = 0;
                    var n = M.exec(r.slice(e));
                    return n ? (t.w = k.get(n[0].toLowerCase()), e + n[0].length) : -1
                }

                function o(t, r, e) {
                    w.lastIndex = 0;
                    var n = w.exec(r.slice(e));
                    return n ? (t.w = b.get(n[0].toLowerCase()), e + n[0].length) : -1
                }

                function a(t, r, e) {
                    P.lastIndex = 0;
                    var n = P.exec(r.slice(e));
                    return n ? (t.m = E.get(n[0].toLowerCase()), e + n[0].length) : -1
                }

                function i(t, r, e) {
                    _.lastIndex = 0;
                    var n = _.exec(r.slice(e));
                    return n ? (t.m = N.get(n[0].toLowerCase()), e + n[0].length) : -1
                }

                function s(t, r, n) {
                    return e(t, A.c.toString(), r, n)
                }

                function c(t, r, n) {
                    return e(t, A.x.toString(), r, n)
                }

                function l(t, r, n) {
                    return e(t, A.X.toString(), r, n)
                }

                function u(t, r, e) {
                    var n = x.get(r.slice(e, e += 2).toLowerCase());
                    return null == n ? -1 : (t.p = n, e)
                }
                var d = t.dateTime,
                    m = t.date,
                    h = t.time,
                    p = t.periods,
                    f = t.days,
                    g = t.shortDays,
                    y = t.months,
                    v = t.shortMonths;
                r.utc = function(t) {
                    function e(t) {
                        try {
                            ps = Gt;
                            var r = new ps;
                            return r._ = t, n(r)
                        } finally {
                            ps = Date
                        }
                    }
                    var n = r(t);
                    return e.parse = function(t) {
                        try {
                            ps = Gt;
                            var r = n.parse(t);
                            return r && r._
                        } finally {
                            ps = Date
                        }
                    }, e.toString = n.toString, e
                }, r.multi = r.utc.multi = mr;
                var x = si.map(),
                    w = Zt(f),
                    b = $t(f),
                    M = Zt(g),
                    k = $t(g),
                    _ = Zt(y),
                    N = $t(y),
                    P = Zt(v),
                    E = $t(v);
                p.forEach(function(t, r) {
                    x.set(t.toLowerCase(), r)
                });
                var A = {
                        a: function(t) {
                            return g[t.getDay()]
                        },
                        A: function(t) {
                            return f[t.getDay()]
                        },
                        b: function(t) {
                            return v[t.getMonth()]
                        },
                        B: function(t) {
                            return y[t.getMonth()]
                        },
                        c: r(d),
                        d: function(t, r) {
                            return Yt(t.getDate(), r, 2)
                        },
                        e: function(t, r) {
                            return Yt(t.getDate(), r, 2)
                        },
                        H: function(t, r) {
                            return Yt(t.getHours(), r, 2)
                        },
                        I: function(t, r) {
                            return Yt(t.getHours() % 12 || 12, r, 2)
                        },
                        j: function(t, r) {
                            return Yt(1 + hs.dayOfYear(t), r, 3)
                        },
                        L: function(t, r) {
                            return Yt(t.getMilliseconds(), r, 3)
                        },
                        m: function(t, r) {
                            return Yt(t.getMonth() + 1, r, 2)
                        },
                        M: function(t, r) {
                            return Yt(t.getMinutes(), r, 2)
                        },
                        p: function(t) {
                            return p[+(t.getHours() >= 12)]
                        },
                        S: function(t, r) {
                            return Yt(t.getSeconds(), r, 2)
                        },
                        U: function(t, r) {
                            return Yt(hs.sundayOfYear(t), r, 2)
                        },
                        w: function(t) {
                            return t.getDay()
                        },
                        W: function(t, r) {
                            return Yt(hs.mondayOfYear(t), r, 2)
                        },
                        x: r(m),
                        X: r(h),
                        y: function(t, r) {
                            return Yt(t.getFullYear() % 100, r, 2)
                        },
                        Y: function(t, r) {
                            return Yt(t.getFullYear() % 1e4, r, 4)
                        },
                        Z: ur,
                        "%": function() {
                            return "%"
                        }
                    },
                    C = {
                        a: n,
                        A: o,
                        b: a,
                        B: i,
                        c: s,
                        d: or,
                        e: or,
                        H: ir,
                        I: ir,
                        j: ar,
                        L: lr,
                        m: nr,
                        M: sr,
                        p: u,
                        S: cr,
                        U: Xt,
                        w: Jt,
                        W: Kt,
                        x: c,
                        X: l,
                        y: tr,
                        Y: Qt,
                        Z: rr,
                        "%": dr
                    };
                return r
            }

            function Yt(t, r, e) {
                var n = 0 > t ? "-" : "",
                    o = (n ? -t : t) + "",
                    a = o.length;
                return n + (e > a ? new Array(e - a + 1).join(r) + o : o)
            }

            function Zt(t) {
                return new RegExp("^(?:" + t.map(si.requote).join("|") + ")", "i")
            }

            function $t(t) {
                for (var r = new p, e = -1, n = t.length; ++e < n;) r.set(t[e].toLowerCase(), e);
                return r
            }

            function Jt(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e, e + 1));
                return n ? (t.w = +n[0], e + n[0].length) : -1
            }

            function Xt(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e));
                return n ? (t.U = +n[0], e + n[0].length) : -1
            }

            function Kt(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e));
                return n ? (t.W = +n[0], e + n[0].length) : -1
            }

            function Qt(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e, e + 4));
                return n ? (t.y = +n[0], e + n[0].length) : -1
            }

            function tr(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e, e + 2));
                return n ? (t.y = er(+n[0]), e + n[0].length) : -1
            }

            function rr(t, r, e) {
                return /^[+-]\d{4}$/.test(r = r.slice(e, e + 5)) ? (t.Z = -r, e + 5) : -1
            }

            function er(t) {
                return t + (t > 68 ? 1900 : 2e3)
            }

            function nr(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e, e + 2));
                return n ? (t.m = n[0] - 1, e + n[0].length) : -1
            }

            function or(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e, e + 2));
                return n ? (t.d = +n[0], e + n[0].length) : -1
            }

            function ar(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e, e + 3));
                return n ? (t.j = +n[0], e + n[0].length) : -1
            }

            function ir(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e, e + 2));
                return n ? (t.H = +n[0], e + n[0].length) : -1
            }

            function sr(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e, e + 2));
                return n ? (t.M = +n[0], e + n[0].length) : -1
            }

            function cr(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e, e + 2));
                return n ? (t.S = +n[0], e + n[0].length) : -1
            }

            function lr(t, r, e) {
                ys.lastIndex = 0;
                var n = ys.exec(r.slice(e, e + 3));
                return n ? (t.L = +n[0], e + n[0].length) : -1
            }

            function ur(t) {
                var r = t.getTimezoneOffset(),
                    e = r > 0 ? "-" : "+",
                    n = xi(r) / 60 | 0,
                    o = xi(r) % 60;
                return e + Yt(n, "0", 2) + Yt(o, "0", 2)
            }

            function dr(t, r, e) {
                vs.lastIndex = 0;
                var n = vs.exec(r.slice(e, e + 1));
                return n ? e + n[0].length : -1
            }

            function mr(t) {
                for (var r = t.length, e = -1; ++e < r;) t[e][0] = this(t[e][0]);
                return function(r) {
                    for (var e = 0, n = t[e]; !n[1](r);) n = t[++e];
                    return n[0](r)
                }
            }

            function hr() {}

            function pr(t, r, e) {
                var n = e.s = t + r,
                    o = n - t,
                    a = n - o;
                e.t = t - a + (r - o)
            }

            function fr(t, r) {
                t && Ms.hasOwnProperty(t.type) && Ms[t.type](t, r)
            }

            function gr(t, r, e) {
                var n, o = -1,
                    a = t.length - e;
                for (r.lineStart(); ++o < a;) n = t[o], r.point(n[0], n[1], n[2]);
                r.lineEnd()
            }

            function yr(t, r) {
                var e = -1,
                    n = t.length;
                for (r.polygonStart(); ++e < n;) gr(t[e], r, 1);
                r.polygonEnd()
            }

            function vr() {
                function t(t, r) {
                    t *= Wi, r = r * Wi / 2 + Ti / 4;
                    var e = t - n,
                        i = e >= 0 ? 1 : -1,
                        s = i * e,
                        c = Math.cos(r),
                        l = Math.sin(r),
                        u = a * l,
                        d = o * c + u * Math.cos(s),
                        m = u * i * Math.sin(s);
                    _s.add(Math.atan2(m, d)), n = t, o = c, a = l
                }
                var r, e, n, o, a;
                Ns.point = function(i, s) {
                    Ns.point = t, n = (r = i) * Wi, o = Math.cos(s = (e = s) * Wi / 2 + Ti / 4), a = Math.sin(s)
                }, Ns.lineEnd = function() {
                    t(r, e)
                }
            }

            function xr(t) {
                var r = t[0],
                    e = t[1],
                    n = Math.cos(e);
                return [n * Math.cos(r), n * Math.sin(r), Math.sin(e)]
            }

            function wr(t, r) {
                return t[0] * r[0] + t[1] * r[1] + t[2] * r[2]
            }

            function br(t, r) {
                return [t[1] * r[2] - t[2] * r[1], t[2] * r[0] - t[0] * r[2], t[0] * r[1] - t[1] * r[0]]
            }

            function Mr(t, r) {
                t[0] += r[0], t[1] += r[1], t[2] += r[2]
            }

            function kr(t, r) {
                return [t[0] * r, t[1] * r, t[2] * r]
            }

            function _r(t) {
                var r = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= r, t[1] /= r, t[2] /= r
            }

            function Nr(t) {
                return [Math.atan2(t[1], t[0]), it(t[2])]
            }

            function Pr(t, r) {
                return xi(t[0] - r[0]) < qi && xi(t[1] - r[1]) < qi
            }

            function Er(t, r) {
                t *= Wi;
                var e = Math.cos(r *= Wi);
                Ar(e * Math.cos(t), e * Math.sin(t), Math.sin(r))
            }

            function Ar(t, r, e) {
                ++Ps, As += (t - As) / Ps, Cs += (r - Cs) / Ps, Ss += (e - Ss) / Ps
            }

            function Cr() {
                function t(t, o) {
                    t *= Wi;
                    var a = Math.cos(o *= Wi),
                        i = a * Math.cos(t),
                        s = a * Math.sin(t),
                        c = Math.sin(o),
                        l = Math.atan2(Math.sqrt((l = e * c - n * s) * l + (l = n * i - r * c) * l + (l = r * s - e * i) * l), r * i + e * s + n * c);
                    Es += l, Os += l * (r + (r = i)), Fs += l * (e + (e = s)), zs += l * (n + (n = c)), Ar(r, e, n)
                }
                var r, e, n;
                Ts.point = function(o, a) {
                    o *= Wi;
                    var i = Math.cos(a *= Wi);
                    r = i * Math.cos(o), e = i * Math.sin(o), n = Math.sin(a), Ts.point = t, Ar(r, e, n)
                }
            }

            function Sr() {
                Ts.point = Er
            }

            function Or() {
                function t(t, r) {
                    t *= Wi;
                    var e = Math.cos(r *= Wi),
                        i = e * Math.cos(t),
                        s = e * Math.sin(t),
                        c = Math.sin(r),
                        l = o * c - a * s,
                        u = a * i - n * c,
                        d = n * s - o * i,
                        m = Math.sqrt(l * l + u * u + d * d),
                        h = n * i + o * s + a * c,
                        p = m && -at(h) / m,
                        f = Math.atan2(m, h);
                    js += p * l, qs += p * u, Ls += p * d, Es += f, Os += f * (n + (n = i)), Fs += f * (o + (o = s)), zs += f * (a + (a = c)), Ar(n, o, a)
                }
                var r, e, n, o, a;
                Ts.point = function(i, s) {
                    r = i, e = s, Ts.point = t, i *= Wi;
                    var c = Math.cos(s *= Wi);
                    n = c * Math.cos(i), o = c * Math.sin(i), a = Math.sin(s), Ar(n, o, a)
                }, Ts.lineEnd = function() {
                    t(r, e), Ts.lineEnd = Sr, Ts.point = Er
                }
            }

            function Fr(t, r) {
                function e(e, n) {
                    return e = t(e, n), r(e[0], e[1])
                }
                return t.invert && r.invert && (e.invert = function(e, n) {
                    return e = r.invert(e, n), e && t.invert(e[0], e[1])
                }), e
            }

            function zr() {
                return !0
            }

            function jr(t, r, e, n, o) {
                var a = [],
                    i = [];
                if (t.forEach(function(t) {
                        if (!((r = t.length - 1) <= 0)) {
                            var r, e = t[0],
                                n = t[r];
                            if (Pr(e, n)) {
                                o.lineStart();
                                for (var s = 0; r > s; ++s) o.point((e = t[s])[0], e[1]);
                                return void o.lineEnd()
                            }
                            var c = new Lr(e, t, null, !0),
                                l = new Lr(e, null, c, !1);
                            c.o = l, a.push(c), i.push(l), c = new Lr(n, t, null, !1), l = new Lr(n, null, c, !0), c.o = l, a.push(c), i.push(l)
                        }
                    }), i.sort(r), qr(a), qr(i), a.length) {
                    for (var s = 0, c = e, l = i.length; l > s; ++s) i[s].e = c = !c;
                    for (var u, d, m = a[0];;) {
                        for (var h = m, p = !0; h.v;)
                            if ((h = h.n) === m) return;
                        u = h.z, o.lineStart();
                        do {
                            if (h.v = h.o.v = !0, h.e) {
                                if (p)
                                    for (var s = 0, l = u.length; l > s; ++s) o.point((d = u[s])[0], d[1]);
                                else n(h.x, h.n.x, 1, o);
                                h = h.n
                            } else {
                                if (p) {
                                    u = h.p.z;
                                    for (var s = u.length - 1; s >= 0; --s) o.point((d = u[s])[0], d[1])
                                } else n(h.x, h.p.x, -1, o);
                                h = h.p
                            }
                            h = h.o, u = h.z, p = !p
                        } while (!h.v);
                        o.lineEnd()
                    }
                }
            }

            function qr(t) {
                if (r = t.length) {
                    for (var r, e, n = 0, o = t[0]; ++n < r;) o.n = e = t[n], e.p = o, o = e;
                    o.n = e = t[0], e.p = o
                }
            }

            function Lr(t, r, e, n) {
                this.x = t, this.z = r, this.o = e, this.e = n, this.v = !1, this.n = this.p = null
            }

            function Tr(t, r, e, n) {
                return function(o, a) {
                    function i(r, e) {
                        var n = o(r, e);
                        t(r = n[0], e = n[1]) && a.point(r, e)
                    }

                    function s(t, r) {
                        var e = o(t, r);
                        g.point(e[0], e[1])
                    }

                    function c() {
                        v.point = s, g.lineStart()
                    }

                    function l() {
                        v.point = i, g.lineEnd()
                    }

                    function u(t, r) {
                        f.push([t, r]);
                        var e = o(t, r);
                        w.point(e[0], e[1])
                    }

                    function d() {
                        w.lineStart(), f = []
                    }

                    function m() {
                        u(f[0][0], f[0][1]), w.lineEnd();
                        var t, r = w.clean(),
                            e = x.buffer(),
                            n = e.length;
                        if (f.pop(), p.push(f), f = null, n)
                            if (1 & r) {
                                t = e[0];
                                var o, n = t.length - 1,
                                    i = -1;
                                if (n > 0) {
                                    for (b || (a.polygonStart(), b = !0), a.lineStart(); ++i < n;) a.point((o = t[i])[0], o[1]);
                                    a.lineEnd()
                                }
                            } else n > 1 && 2 & r && e.push(e.pop().concat(e.shift())), h.push(e.filter(Rr))
                    }
                    var h, p, f, g = r(a),
                        y = o.invert(n[0], n[1]),
                        v = {
                            point: i,
                            lineStart: c,
                            lineEnd: l,
                            polygonStart: function() {
                                v.point = u, v.lineStart = d, v.lineEnd = m, h = [], p = []
                            },
                            polygonEnd: function() {
                                v.point = i, v.lineStart = c, v.lineEnd = l, h = si.merge(h);
                                var t = Br(y, p);
                                h.length ? (b || (a.polygonStart(), b = !0), jr(h, Ir, t, e, a)) : t && (b || (a.polygonStart(), b = !0), a.lineStart(), e(null, null, 1, a), a.lineEnd()), b && (a.polygonEnd(), b = !1), h = p = null
                            },
                            sphere: function() {
                                a.polygonStart(), a.lineStart(), e(null, null, 1, a), a.lineEnd(), a.polygonEnd()
                            }
                        },
                        x = Dr(),
                        w = r(x),
                        b = !1;
                    return v
                }
            }

            function Rr(t) {
                return t.length > 1
            }

            function Dr() {
                var t, r = [];
                return {
                    lineStart: function() {
                        r.push(t = [])
                    },
                    point: function(r, e) {
                        t.push([r, e])
                    },
                    lineEnd: P,
                    buffer: function() {
                        var e = r;
                        return r = [], t = null, e
                    },
                    rejoin: function() {
                        r.length > 1 && r.push(r.pop().concat(r.shift()))
                    }
                }
            }

            function Ir(t, r) {
                return ((t = t.x)[0] < 0 ? t[1] - Ii - qi : Ii - t[1]) - ((r = r.x)[0] < 0 ? r[1] - Ii - qi : Ii - r[1])
            }

            function Wr(t) {
                var r, e = NaN,
                    n = NaN,
                    o = NaN;
                return {
                    lineStart: function() {
                        t.lineStart(), r = 1
                    },
                    point: function(a, i) {
                        var s = a > 0 ? Ti : -Ti,
                            c = xi(a - e);
                        xi(c - Ti) < qi ? (t.point(e, n = (n + i) / 2 > 0 ? Ii : -Ii), t.point(o, n), t.lineEnd(), t.lineStart(), t.point(s, n), t.point(a, n), r = 0) : o !== s && c >= Ti && (xi(e - o) < qi && (e -= o * qi), xi(a - s) < qi && (a -= s * qi), n = Ur(e, n, a, i), t.point(o, n), t.lineEnd(), t.lineStart(), t.point(s, n), r = 0), t.point(e = a, n = i), o = s
                    },
                    lineEnd: function() {
                        t.lineEnd(), e = n = NaN
                    },
                    clean: function() {
                        return 2 - r
                    }
                }
            }

            function Ur(t, r, e, n) {
                var o, a, i = Math.sin(t - e);
                return xi(i) > qi ? Math.atan((Math.sin(r) * (a = Math.cos(n)) * Math.sin(e) - Math.sin(n) * (o = Math.cos(r)) * Math.sin(t)) / (o * a * i)) : (r + n) / 2
            }

            function Gr(t, r, e, n) {
                var o;
                if (null == t) o = e * Ii, n.point(-Ti, o), n.point(0, o), n.point(Ti, o), n.point(Ti, 0), n.point(Ti, -o), n.point(0, -o), n.point(-Ti, -o), n.point(-Ti, 0), n.point(-Ti, o);
                else if (xi(t[0] - r[0]) > qi) {
                    var a = t[0] < r[0] ? Ti : -Ti;
                    o = e * a / 2, n.point(-a, o), n.point(0, o), n.point(a, o)
                } else n.point(r[0], r[1])
            }

            function Br(t, r) {
                var e = t[0],
                    n = t[1],
                    o = [Math.sin(e), -Math.cos(e), 0],
                    a = 0,
                    i = 0;
                _s.reset();
                for (var s = 0, c = r.length; c > s; ++s) {
                    var l = r[s],
                        u = l.length;
                    if (u)
                        for (var d = l[0], m = d[0], h = d[1] / 2 + Ti / 4, p = Math.sin(h), f = Math.cos(h), g = 1;;) {
                            g === u && (g = 0), t = l[g];
                            var y = t[0],
                                v = t[1] / 2 + Ti / 4,
                                x = Math.sin(v),
                                w = Math.cos(v),
                                b = y - m,
                                M = b >= 0 ? 1 : -1,
                                k = M * b,
                                _ = k > Ti,
                                N = p * x;
                            if (_s.add(Math.atan2(N * M * Math.sin(k), f * w + N * Math.cos(k))), a += _ ? b + M * Ri : b, _ ^ m >= e ^ y >= e) {
                                var P = br(xr(d), xr(t));
                                _r(P);
                                var E = br(o, P);
                                _r(E);
                                var A = (_ ^ b >= 0 ? -1 : 1) * it(E[2]);
                                (n > A || n === A && (P[0] || P[1])) && (i += _ ^ b >= 0 ? 1 : -1)
                            }
                            if (!g++) break;
                            m = y, p = x, f = w, d = t
                        }
                }
                return (-qi > a || qi > a && 0 > _s) ^ 1 & i
            }

            function Hr(t) {
                function r(t, r) {
                    return Math.cos(t) * Math.cos(r) > a
                }

                function e(t) {
                    var e, a, c, l, u;
                    return {
                        lineStart: function() {
                            l = c = !1, u = 1
                        },
                        point: function(d, m) {
                            var h, p = [d, m],
                                f = r(d, m),
                                g = i ? f ? 0 : o(d, m) : f ? o(d + (0 > d ? Ti : -Ti), m) : 0;
                            if (!e && (l = c = f) && t.lineStart(), f !== c && (h = n(e, p), (Pr(e, h) || Pr(p, h)) && (p[0] += qi, p[1] += qi, f = r(p[0], p[1]))), f !== c) u = 0, f ? (t.lineStart(), h = n(p, e), t.point(h[0], h[1])) : (h = n(e, p), t.point(h[0], h[1]), t.lineEnd()), e = h;
                            else if (s && e && i ^ f) {
                                var y;
                                g & a || !(y = n(p, e, !0)) || (u = 0, i ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                            }!f || e && Pr(e, p) || t.point(p[0], p[1]), e = p, c = f, a = g
                        },
                        lineEnd: function() {
                            c && t.lineEnd(), e = null
                        },
                        clean: function() {
                            return u | (l && c) << 1
                        }
                    }
                }

                function n(t, r, e) {
                    var n = xr(t),
                        o = xr(r),
                        i = [1, 0, 0],
                        s = br(n, o),
                        c = wr(s, s),
                        l = s[0],
                        u = c - l * l;
                    if (!u) return !e && t;
                    var d = a * c / u,
                        m = -a * l / u,
                        h = br(i, s),
                        p = kr(i, d),
                        f = kr(s, m);
                    Mr(p, f);
                    var g = h,
                        y = wr(p, g),
                        v = wr(g, g),
                        x = y * y - v * (wr(p, p) - 1);
                    if (!(0 > x)) {
                        var w = Math.sqrt(x),
                            b = kr(g, (-y - w) / v);
                        if (Mr(b, p), b = Nr(b), !e) return b;
                        var M, k = t[0],
                            _ = r[0],
                            N = t[1],
                            P = r[1];
                        k > _ && (M = k, k = _, _ = M);
                        var E = _ - k,
                            A = xi(E - Ti) < qi,
                            C = A || qi > E;
                        if (!A && N > P && (M = N, N = P, P = M), C ? A ? N + P > 0 ^ b[1] < (xi(b[0] - k) < qi ? N : P) : N <= b[1] && b[1] <= P : E > Ti ^ (k <= b[0] && b[0] <= _)) {
                            var S = kr(g, (-y + w) / v);
                            return Mr(S, p), [b, Nr(S)]
                        }
                    }
                }

                function o(r, e) {
                    var n = i ? t : Ti - t,
                        o = 0;
                    return -n > r ? o |= 1 : r > n && (o |= 2), -n > e ? o |= 4 : e > n && (o |= 8), o
                }
                var a = Math.cos(t),
                    i = a > 0,
                    s = xi(a) > qi,
                    c = ve(t, 6 * Wi);
                return Tr(r, e, c, i ? [0, -t] : [-Ti, t - Ti])
            }

            function Vr(t, r, e, n) {
                return function(o) {
                    var a, i = o.a,
                        s = o.b,
                        c = i.x,
                        l = i.y,
                        u = s.x,
                        d = s.y,
                        m = 0,
                        h = 1,
                        p = u - c,
                        f = d - l;
                    if (a = t - c, p || !(a > 0)) {
                        if (a /= p, 0 > p) {
                            if (m > a) return;
                            h > a && (h = a)
                        } else if (p > 0) {
                            if (a > h) return;
                            a > m && (m = a)
                        }
                        if (a = e - c, p || !(0 > a)) {
                            if (a /= p, 0 > p) {
                                if (a > h) return;
                                a > m && (m = a)
                            } else if (p > 0) {
                                if (m > a) return;
                                h > a && (h = a)
                            }
                            if (a = r - l, f || !(a > 0)) {
                                if (a /= f, 0 > f) {
                                    if (m > a) return;
                                    h > a && (h = a)
                                } else if (f > 0) {
                                    if (a > h) return;
                                    a > m && (m = a)
                                }
                                if (a = n - l, f || !(0 > a)) {
                                    if (a /= f, 0 > f) {
                                        if (a > h) return;
                                        a > m && (m = a)
                                    } else if (f > 0) {
                                        if (m > a) return;
                                        h > a && (h = a)
                                    }
                                    return m > 0 && (o.a = {
                                        x: c + m * p,
                                        y: l + m * f
                                    }), 1 > h && (o.b = {
                                        x: c + h * p,
                                        y: l + h * f
                                    }), o
                                }
                            }
                        }
                    }
                }
            }

            function Yr(t, r, e, n) {
                function o(n, o) {
                    return xi(n[0] - t) < qi ? o > 0 ? 0 : 3 : xi(n[0] - e) < qi ? o > 0 ? 2 : 1 : xi(n[1] - r) < qi ? o > 0 ? 1 : 0 : o > 0 ? 3 : 2
                }

                function a(t, r) {
                    return i(t.x, r.x)
                }

                function i(t, r) {
                    var e = o(t, 1),
                        n = o(r, 1);
                    return e !== n ? e - n : 0 === e ? r[1] - t[1] : 1 === e ? t[0] - r[0] : 2 === e ? t[1] - r[1] : r[0] - t[0]
                }
                return function(s) {
                    function c(t) {
                        for (var r = 0, e = g.length, n = t[1], o = 0; e > o; ++o)
                            for (var a, i = 1, s = g[o], c = s.length, l = s[0]; c > i; ++i) a = s[i], l[1] <= n ? a[1] > n && ot(l, a, t) > 0 && ++r : a[1] <= n && ot(l, a, t) < 0 && --r, l = a;
                        return 0 !== r
                    }

                    function l(a, s, c, l) {
                        var u = 0,
                            d = 0;
                        if (null == a || (u = o(a, c)) !== (d = o(s, c)) || i(a, s) < 0 ^ c > 0) {
                            do l.point(0 === u || 3 === u ? t : e, u > 1 ? n : r); while ((u = (u + c + 4) % 4) !== d)
                        } else l.point(s[0], s[1])
                    }

                    function u(o, a) {
                        return o >= t && e >= o && a >= r && n >= a
                    }

                    function d(t, r) {
                        u(t, r) && s.point(t, r)
                    }

                    function m() {
                        C.point = p, g && g.push(y = []), _ = !0, k = !1, b = M = NaN
                    }

                    function h() {
                        f && (p(v, x), w && k && E.rejoin(), f.push(E.buffer())), C.point = d, k && s.lineEnd()
                    }

                    function p(t, r) {
                        t = Math.max(-Ds, Math.min(Ds, t)), r = Math.max(-Ds, Math.min(Ds, r));
                        var e = u(t, r);
                        if (g && y.push([t, r]), _) v = t, x = r, w = e, _ = !1, e && (s.lineStart(), s.point(t, r));
                        else if (e && k) s.point(t, r);
                        else {
                            var n = {
                                a: {
                                    x: b,
                                    y: M
                                },
                                b: {
                                    x: t,
                                    y: r
                                }
                            };
                            A(n) ? (k || (s.lineStart(), s.point(n.a.x, n.a.y)), s.point(n.b.x, n.b.y), e || s.lineEnd(), N = !1) : e && (s.lineStart(), s.point(t, r), N = !1)
                        }
                        b = t, M = r, k = e
                    }
                    var f, g, y, v, x, w, b, M, k, _, N, P = s,
                        E = Dr(),
                        A = Vr(t, r, e, n),
                        C = {
                            point: d,
                            lineStart: m,
                            lineEnd: h,
                            polygonStart: function() {
                                s = E, f = [], g = [], N = !0
                            },
                            polygonEnd: function() {
                                s = P, f = si.merge(f);
                                var r = c([t, n]),
                                    e = N && r,
                                    o = f.length;
                                (e || o) && (s.polygonStart(), e && (s.lineStart(), l(null, null, 1, s), s.lineEnd()), o && jr(f, a, r, l, s), s.polygonEnd()), f = g = y = null
                            }
                        };
                    return C
                }
            }

            function Zr(t) {
                var r = 0,
                    e = Ti / 3,
                    n = ue(t),
                    o = n(r, e);
                return o.parallels = function(t) {
                    return arguments.length ? n(r = t[0] * Ti / 180, e = t[1] * Ti / 180) : [r / Ti * 180, e / Ti * 180]
                }, o
            }

            function $r(t, r) {
                function e(t, r) {
                    var e = Math.sqrt(a - 2 * o * Math.sin(r)) / o;
                    return [e * Math.sin(t *= o), i - e * Math.cos(t)]
                }
                var n = Math.sin(t),
                    o = (n + Math.sin(r)) / 2,
                    a = 1 + n * (2 * o - n),
                    i = Math.sqrt(a) / o;
                return e.invert = function(t, r) {
                    var e = i - r;
                    return [Math.atan2(t, e) / o, it((a - (t * t + e * e) * o * o) / (2 * o))]
                }, e
            }

            function Jr() {
                function t(t, r) {
                    Ws += o * t - n * r, n = t, o = r
                }
                var r, e, n, o;
                Vs.point = function(a, i) {
                    Vs.point = t, r = n = a, e = o = i
                }, Vs.lineEnd = function() {
                    t(r, e)
                }
            }

            function Xr(t, r) {
                Us > t && (Us = t), t > Bs && (Bs = t), Gs > r && (Gs = r), r > Hs && (Hs = r)
            }

            function Kr() {
                function t(t, r) {
                    i.push("M", t, ",", r, a)
                }

                function r(t, r) {
                    i.push("M", t, ",", r), s.point = e
                }

                function e(t, r) {
                    i.push("L", t, ",", r)
                }

                function n() {
                    s.point = t
                }

                function o() {
                    i.push("Z")
                }
                var a = Qr(4.5),
                    i = [],
                    s = {
                        point: t,
                        lineStart: function() {
                            s.point = r
                        },
                        lineEnd: n,
                        polygonStart: function() {
                            s.lineEnd = o
                        },
                        polygonEnd: function() {
                            s.lineEnd = n, s.point = t
                        },
                        pointRadius: function(t) {
                            return a = Qr(t), s
                        },
                        result: function() {
                            if (i.length) {
                                var t = i.join("");
                                return i = [], t
                            }
                        }
                    };
                return s
            }

            function Qr(t) {
                return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
            }

            function te(t, r) {
                As += t, Cs += r, ++Ss
            }

            function re() {
                function t(t, n) {
                    var o = t - r,
                        a = n - e,
                        i = Math.sqrt(o * o + a * a);
                    Os += i * (r + t) / 2, Fs += i * (e + n) / 2, zs += i, te(r = t, e = n)
                }
                var r, e;
                Zs.point = function(n, o) {
                    Zs.point = t, te(r = n, e = o)
                }
            }

            function ee() {
                Zs.point = te
            }

            function ne() {
                function t(t, r) {
                    var e = t - n,
                        a = r - o,
                        i = Math.sqrt(e * e + a * a);
                    Os += i * (n + t) / 2, Fs += i * (o + r) / 2, zs += i, i = o * t - n * r, js += i * (n + t), qs += i * (o + r), Ls += 3 * i, te(n = t, o = r)
                }
                var r, e, n, o;
                Zs.point = function(a, i) {
                    Zs.point = t, te(r = n = a, e = o = i)
                }, Zs.lineEnd = function() {
                    t(r, e)
                }
            }

            function oe(t) {
                function r(r, e) {
                    t.moveTo(r + i, e), t.arc(r, e, i, 0, Ri)
                }

                function e(r, e) {
                    t.moveTo(r, e), s.point = n
                }

                function n(r, e) {
                    t.lineTo(r, e)
                }

                function o() {
                    s.point = r
                }

                function a() {
                    t.closePath()
                }
                var i = 4.5,
                    s = {
                        point: r,
                        lineStart: function() {
                            s.point = e
                        },
                        lineEnd: o,
                        polygonStart: function() {
                            s.lineEnd = a
                        },
                        polygonEnd: function() {
                            s.lineEnd = o, s.point = r
                        },
                        pointRadius: function(t) {
                            return i = t, s
                        },
                        result: P
                    };
                return s
            }

            function ae(t) {
                function r(t) {
                    return (s ? n : e)(t)
                }

                function e(r) {
                    return ce(r, function(e, n) {
                        e = t(e, n), r.point(e[0], e[1])
                    })
                }

                function n(r) {
                    function e(e, n) {
                        e = t(e, n), r.point(e[0], e[1])
                    }

                    function n() {
                        x = NaN, _.point = a, r.lineStart()
                    }

                    function a(e, n) {
                        var a = xr([e, n]),
                            i = t(e, n);
                        o(x, w, v, b, M, k, x = i[0], w = i[1], v = e, b = a[0], M = a[1], k = a[2], s, r), r.point(x, w)
                    }

                    function i() {
                        _.point = e, r.lineEnd()
                    }

                    function c() {
                        n(), _.point = l, _.lineEnd = u
                    }

                    function l(t, r) {
                        a(d = t, m = r), h = x, p = w, f = b, g = M, y = k, _.point = a
                    }

                    function u() {
                        o(x, w, v, b, M, k, h, p, d, f, g, y, s, r), _.lineEnd = i, i()
                    }
                    var d, m, h, p, f, g, y, v, x, w, b, M, k, _ = {
                        point: e,
                        lineStart: n,
                        lineEnd: i,
                        polygonStart: function() {
                            r.polygonStart(), _.lineStart = c
                        },
                        polygonEnd: function() {
                            r.polygonEnd(), _.lineStart = n
                        }
                    };
                    return _
                }

                function o(r, e, n, s, c, l, u, d, m, h, p, f, g, y) {
                    var v = u - r,
                        x = d - e,
                        w = v * v + x * x;
                    if (w > 4 * a && g--) {
                        var b = s + h,
                            M = c + p,
                            k = l + f,
                            _ = Math.sqrt(b * b + M * M + k * k),
                            N = Math.asin(k /= _),
                            P = xi(xi(k) - 1) < qi || xi(n - m) < qi ? (n + m) / 2 : Math.atan2(M, b),
                            E = t(P, N),
                            A = E[0],
                            C = E[1],
                            S = A - r,
                            O = C - e,
                            F = x * S - v * O;
                        (F * F / w > a || xi((v * S + x * O) / w - .5) > .3 || i > s * h + c * p + l * f) && (o(r, e, n, s, c, l, A, C, P, b /= _, M /= _, k, g, y), y.point(A, C), o(A, C, P, b, M, k, u, d, m, h, p, f, g, y))
                    }
                }
                var a = .5,
                    i = Math.cos(30 * Wi),
                    s = 16;
                return r.precision = function(t) {
                    return arguments.length ? (s = (a = t * t) > 0 && 16, r) : Math.sqrt(a)
                }, r
            }

            function ie(t) {
                var r = ae(function(r, e) {
                    return t([r * Ui, e * Ui])
                });
                return function(t) {
                    return de(r(t))
                }
            }

            function se(t) {
                this.stream = t
            }

            function ce(t, r) {
                return {
                    point: r,
                    sphere: function() {
                        t.sphere()
                    },
                    lineStart: function() {
                        t.lineStart()
                    },
                    lineEnd: function() {
                        t.lineEnd()
                    },
                    polygonStart: function() {
                        t.polygonStart()
                    },
                    polygonEnd: function() {
                        t.polygonEnd()
                    }
                }
            }

            function le(t) {
                return ue(function() {
                    return t
                })()
            }

            function ue(t) {
                function r(t) {
                    return t = s(t[0] * Wi, t[1] * Wi), [t[0] * m + c, l - t[1] * m]
                }

                function e(t) {
                    return t = s.invert((t[0] - c) / m, (l - t[1]) / m), t && [t[0] * Ui, t[1] * Ui]
                }

                function n() {
                    s = Fr(i = pe(y, v, x), a);
                    var t = a(f, g);
                    return c = h - t[0] * m, l = p + t[1] * m, o()
                }

                function o() {
                    return u && (u.valid = !1, u = null), r
                }
                var a, i, s, c, l, u, d = ae(function(t, r) {
                        return t = a(t, r), [t[0] * m + c, l - t[1] * m]
                    }),
                    m = 150,
                    h = 480,
                    p = 250,
                    f = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    x = 0,
                    w = Rs,
                    b = k,
                    M = null,
                    _ = null;
                return r.stream = function(t) {
                        return u && (u.valid = !1), u = de(w(i, d(b(t)))), u.valid = !0, u
                    }, r.clipAngle = function(t) {
                        return arguments.length ? (w = null == t ? (M = t, Rs) : Hr((M = +t) * Wi), o()) : M
                    }, r.clipExtent = function(t) {
                        return arguments.length ? (_ = t, b = t ? Yr(t[0][0], t[0][1], t[1][0], t[1][1]) : k, o()) : _
                    }, r.scale = function(t) {
                        return arguments.length ? (m = +t, n()) : m
                    }, r.translate = function(t) {
                        return arguments.length ? (h = +t[0], p = +t[1], n()) : [h, p]
                    }, r.center = function(t) {
                        return arguments.length ? (f = t[0] % 360 * Wi, g = t[1] % 360 * Wi, n()) : [f * Ui, g * Ui]
                    }, r.rotate = function(t) {
                        return arguments.length ? (y = t[0] % 360 * Wi, v = t[1] % 360 * Wi, x = t.length > 2 ? t[2] % 360 * Wi : 0, n()) : [y * Ui, v * Ui, x * Ui]
                    }, si.rebind(r, d, "precision"),
                    function() {
                        return a = t.apply(this, arguments), r.invert = a.invert && e, n()
                    }
            }

            function de(t) {
                return ce(t, function(r, e) {
                    t.point(r * Wi, e * Wi)
                })
            }

            function me(t, r) {
                return [t, r]
            }

            function he(t, r) {
                return [t > Ti ? t - Ri : -Ti > t ? t + Ri : t, r]
            }

            function pe(t, r, e) {
                return t ? r || e ? Fr(ge(t), ye(r, e)) : ge(t) : r || e ? ye(r, e) : he
            }

            function fe(t) {
                return function(r, e) {
                    return r += t, [r > Ti ? r - Ri : -Ti > r ? r + Ri : r, e]
                }
            }

            function ge(t) {
                var r = fe(t);
                return r.invert = fe(-t), r
            }

            function ye(t, r) {
                function e(t, r) {
                    var e = Math.cos(r),
                        s = Math.cos(t) * e,
                        c = Math.sin(t) * e,
                        l = Math.sin(r),
                        u = l * n + s * o;
                    return [Math.atan2(c * a - u * i, s * n - l * o), it(u * a + c * i)]
                }
                var n = Math.cos(t),
                    o = Math.sin(t),
                    a = Math.cos(r),
                    i = Math.sin(r);
                return e.invert = function(t, r) {
                    var e = Math.cos(r),
                        s = Math.cos(t) * e,
                        c = Math.sin(t) * e,
                        l = Math.sin(r),
                        u = l * a - c * i;
                    return [Math.atan2(c * a + l * i, s * n + u * o), it(u * n - s * o)]
                }, e
            }

            function ve(t, r) {
                var e = Math.cos(t),
                    n = Math.sin(t);
                return function(o, a, i, s) {
                    var c = i * r;
                    null != o ? (o = xe(e, o), a = xe(e, a), (i > 0 ? a > o : o > a) && (o += i * Ri)) : (o = t + i * Ri, a = t - .5 * c);
                    for (var l, u = o; i > 0 ? u > a : a > u; u -= c) s.point((l = Nr([e, -n * Math.cos(u), -n * Math.sin(u)]))[0], l[1])
                }
            }

            function xe(t, r) {
                var e = xr(r);
                e[0] -= t, _r(e);
                var n = at(-e[1]);
                return ((-e[2] < 0 ? -n : n) + 2 * Math.PI - qi) % (2 * Math.PI)
            }

            function we(t, r, e) {
                var n = si.range(t, r - qi, e).concat(r);
                return function(t) {
                    return n.map(function(r) {
                        return [t, r]
                    })
                }
            }

            function be(t, r, e) {
                var n = si.range(t, r - qi, e).concat(r);
                return function(t) {
                    return n.map(function(r) {
                        return [r, t]
                    })
                }
            }

            function Me(t) {
                return t.source
            }

            function ke(t) {
                return t.target
            }

            function _e(t, r, e, n) {
                var o = Math.cos(r),
                    a = Math.sin(r),
                    i = Math.cos(n),
                    s = Math.sin(n),
                    c = o * Math.cos(t),
                    l = o * Math.sin(t),
                    u = i * Math.cos(e),
                    d = i * Math.sin(e),
                    m = 2 * Math.asin(Math.sqrt(ut(n - r) + o * i * ut(e - t))),
                    h = 1 / Math.sin(m),
                    p = m ? function(t) {
                        var r = Math.sin(t *= m) * h,
                            e = Math.sin(m - t) * h,
                            n = e * c + r * u,
                            o = e * l + r * d,
                            i = e * a + r * s;
                        return [Math.atan2(o, n) * Ui, Math.atan2(i, Math.sqrt(n * n + o * o)) * Ui]
                    } : function() {
                        return [t * Ui, r * Ui]
                    };
                return p.distance = m, p
            }

            function Ne() {
                function t(t, o) {
                    var a = Math.sin(o *= Wi),
                        i = Math.cos(o),
                        s = xi((t *= Wi) - r),
                        c = Math.cos(s);
                    $s += Math.atan2(Math.sqrt((s = i * Math.sin(s)) * s + (s = n * a - e * i * c) * s), e * a + n * i * c), r = t, e = a, n = i
                }
                var r, e, n;
                Js.point = function(o, a) {
                    r = o * Wi, e = Math.sin(a *= Wi), n = Math.cos(a), Js.point = t
                }, Js.lineEnd = function() {
                    Js.point = Js.lineEnd = P
                }
            }

            function Pe(t, r) {
                function e(r, e) {
                    var n = Math.cos(r),
                        o = Math.cos(e),
                        a = t(n * o);
                    return [a * o * Math.sin(r), a * Math.sin(e)]
                }
                return e.invert = function(t, e) {
                    var n = Math.sqrt(t * t + e * e),
                        o = r(n),
                        a = Math.sin(o),
                        i = Math.cos(o);
                    return [Math.atan2(t * a, n * i), Math.asin(n && e * a / n)]
                }, e
            }

            function Ee(t, r) {
                function e(t, r) {
                    i > 0 ? -Ii + qi > r && (r = -Ii + qi) : r > Ii - qi && (r = Ii - qi);
                    var e = i / Math.pow(o(r), a);
                    return [e * Math.sin(a * t), i - e * Math.cos(a * t)]
                }
                var n = Math.cos(t),
                    o = function(t) {
                        return Math.tan(Ti / 4 + t / 2)
                    },
                    a = t === r ? Math.sin(t) : Math.log(n / Math.cos(r)) / Math.log(o(r) / o(t)),
                    i = n * Math.pow(o(t), a) / a;
                return a ? (e.invert = function(t, r) {
                    var e = i - r,
                        n = nt(a) * Math.sqrt(t * t + e * e);
                    return [Math.atan2(t, e) / a, 2 * Math.atan(Math.pow(i / n, 1 / a)) - Ii]
                }, e) : Ce
            }

            function Ae(t, r) {
                function e(t, r) {
                    var e = a - r;
                    return [e * Math.sin(o * t), a - e * Math.cos(o * t)]
                }
                var n = Math.cos(t),
                    o = t === r ? Math.sin(t) : (n - Math.cos(r)) / (r - t),
                    a = n / o + t;
                return xi(o) < qi ? me : (e.invert = function(t, r) {
                    var e = a - r;
                    return [Math.atan2(t, e) / o, a - nt(o) * Math.sqrt(t * t + e * e)]
                }, e)
            }

            function Ce(t, r) {
                return [t, Math.log(Math.tan(Ti / 4 + r / 2))]
            }

            function Se(t) {
                var r, e = le(t),
                    n = e.scale,
                    o = e.translate,
                    a = e.clipExtent;
                return e.scale = function() {
                    var t = n.apply(e, arguments);
                    return t === e ? r ? e.clipExtent(null) : e : t
                }, e.translate = function() {
                    var t = o.apply(e, arguments);
                    return t === e ? r ? e.clipExtent(null) : e : t
                }, e.clipExtent = function(t) {
                    var i = a.apply(e, arguments);
                    if (i === e) {
                        if (r = null == t) {
                            var s = Ti * n(),
                                c = o();
                            a([
                                [c[0] - s, c[1] - s],
                                [c[0] + s, c[1] + s]
                            ])
                        }
                    } else r && (i = null);
                    return i
                }, e.clipExtent(null)
            }

            function Oe(t, r) {
                return [Math.log(Math.tan(Ti / 4 + r / 2)), -t]
            }

            function Fe(t) {
                return t[0]
            }

            function ze(t) {
                return t[1]
            }

            function je(t) {
                for (var r = t.length, e = [0, 1], n = 2, o = 2; r > o; o++) {
                    for (; n > 1 && ot(t[e[n - 2]], t[e[n - 1]], t[o]) <= 0;) --n;
                    e[n++] = o
                }
                return e.slice(0, n)
            }

            function qe(t, r) {
                return t[0] - r[0] || t[1] - r[1]
            }

            function Le(t, r, e) {
                return (e[0] - r[0]) * (t[1] - r[1]) < (e[1] - r[1]) * (t[0] - r[0])
            }

            function Te(t, r, e, n) {
                var o = t[0],
                    a = e[0],
                    i = r[0] - o,
                    s = n[0] - a,
                    c = t[1],
                    l = e[1],
                    u = r[1] - c,
                    d = n[1] - l,
                    m = (s * (c - l) - d * (o - a)) / (d * i - s * u);
                return [o + m * i, c + m * u]
            }

            function Re(t) {
                var r = t[0],
                    e = t[t.length - 1];
                return !(r[0] - e[0] || r[1] - e[1])
            }

            function De() {
                sn(this), this.edge = this.site = this.circle = null
            }

            function Ie(t) {
                var r = cc.pop() || new De;
                return r.site = t, r
            }

            function We(t) {
                Xe(t), ac.remove(t), cc.push(t), sn(t)
            }

            function Ue(t) {
                var r = t.circle,
                    e = r.x,
                    n = r.cy,
                    o = {
                        x: e,
                        y: n
                    },
                    a = t.P,
                    i = t.N,
                    s = [t];
                We(t);
                for (var c = a; c.circle && xi(e - c.circle.x) < qi && xi(n - c.circle.cy) < qi;) a = c.P, s.unshift(c), We(c), c = a;
                s.unshift(c), Xe(c);
                for (var l = i; l.circle && xi(e - l.circle.x) < qi && xi(n - l.circle.cy) < qi;) i = l.N, s.push(l), We(l), l = i;
                s.push(l), Xe(l);
                var u, d = s.length;
                for (u = 1; d > u; ++u) l = s[u], c = s[u - 1], nn(l.edge, c.site, l.site, o);
                c = s[0], l = s[d - 1], l.edge = rn(c.site, l.site, null, o), Je(c), Je(l)
            }

            function Ge(t) {
                for (var r, e, n, o, a = t.x, i = t.y, s = ac._; s;)
                    if (n = Be(s, i) - a, n > qi) s = s.L;
                    else {
                        if (o = a - He(s, i), !(o > qi)) {
                            n > -qi ? (r = s.P, e = s) : o > -qi ? (r = s, e = s.N) : r = e = s;
                            break
                        }
                        if (!s.R) {
                            r = s;
                            break
                        }
                        s = s.R
                    }
                var c = Ie(t);
                if (ac.insert(r, c), r || e) {
                    if (r === e) return Xe(r), e = Ie(r.site), ac.insert(c, e), c.edge = e.edge = rn(r.site, c.site), Je(r), void Je(e);
                    if (!e) return void(c.edge = rn(r.site, c.site));
                    Xe(r), Xe(e);
                    var l = r.site,
                        u = l.x,
                        d = l.y,
                        m = t.x - u,
                        h = t.y - d,
                        p = e.site,
                        f = p.x - u,
                        g = p.y - d,
                        y = 2 * (m * g - h * f),
                        v = m * m + h * h,
                        x = f * f + g * g,
                        w = {
                            x: (g * v - h * x) / y + u,
                            y: (m * x - f * v) / y + d
                        };
                    nn(e.edge, l, p, w), c.edge = rn(l, t, null, w), e.edge = rn(t, p, null, w), Je(r), Je(e)
                }
            }

            function Be(t, r) {
                var e = t.site,
                    n = e.x,
                    o = e.y,
                    a = o - r;
                if (!a) return n;
                var i = t.P;
                if (!i) return -(1 / 0);
                e = i.site;
                var s = e.x,
                    c = e.y,
                    l = c - r;
                if (!l) return s;
                var u = s - n,
                    d = 1 / a - 1 / l,
                    m = u / l;
                return d ? (-m + Math.sqrt(m * m - 2 * d * (u * u / (-2 * l) - c + l / 2 + o - a / 2))) / d + n : (n + s) / 2
            }

            function He(t, r) {
                var e = t.N;
                if (e) return Be(e, r);
                var n = t.site;
                return n.y === r ? n.x : 1 / 0
            }

            function Ve(t) {
                this.site = t, this.edges = []
            }

            function Ye(t) {
                for (var r, e, n, o, a, i, s, c, l, u, d = t[0][0], m = t[1][0], h = t[0][1], p = t[1][1], f = oc, g = f.length; g--;)
                    if (a = f[g], a && a.prepare())
                        for (s = a.edges, c = s.length, i = 0; c > i;) u = s[i].end(), n = u.x, o = u.y, l = s[++i % c].start(), r = l.x, e = l.y, (xi(n - r) > qi || xi(o - e) > qi) && (s.splice(i, 0, new on(en(a.site, u, xi(n - d) < qi && p - o > qi ? {
                            x: d,
                            y: xi(r - d) < qi ? e : p
                        } : xi(o - p) < qi && m - n > qi ? {
                            x: xi(e - p) < qi ? r : m,
                            y: p
                        } : xi(n - m) < qi && o - h > qi ? {
                            x: m,
                            y: xi(r - m) < qi ? e : h
                        } : xi(o - h) < qi && n - d > qi ? {
                            x: xi(e - h) < qi ? r : d,
                            y: h
                        } : null), a.site, null)), ++c)
            }

            function Ze(t, r) {
                return r.angle - t.angle
            }

            function $e() {
                sn(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function Je(t) {
                var r = t.P,
                    e = t.N;
                if (r && e) {
                    var n = r.site,
                        o = t.site,
                        a = e.site;
                    if (n !== a) {
                        var i = o.x,
                            s = o.y,
                            c = n.x - i,
                            l = n.y - s,
                            u = a.x - i,
                            d = a.y - s,
                            m = 2 * (c * d - l * u);
                        if (!(m >= -Li)) {
                            var h = c * c + l * l,
                                p = u * u + d * d,
                                f = (d * h - l * p) / m,
                                g = (c * p - u * h) / m,
                                d = g + s,
                                y = lc.pop() || new $e;
                            y.arc = t, y.site = o, y.x = f + i, y.y = d + Math.sqrt(f * f + g * g), y.cy = d, t.circle = y;
                            for (var v = null, x = sc._; x;)
                                if (y.y < x.y || y.y === x.y && y.x <= x.x) {
                                    if (!x.L) {
                                        v = x.P;
                                        break
                                    }
                                    x = x.L
                                } else {
                                    if (!x.R) {
                                        v = x;
                                        break
                                    }
                                    x = x.R
                                }
                            sc.insert(v, y), v || (ic = y)
                        }
                    }
                }
            }

            function Xe(t) {
                var r = t.circle;
                r && (r.P || (ic = r.N), sc.remove(r), lc.push(r), sn(r), t.circle = null)
            }

            function Ke(t) {
                for (var r, e = nc, n = Vr(t[0][0], t[0][1], t[1][0], t[1][1]), o = e.length; o--;) r = e[o], (!Qe(r, t) || !n(r) || xi(r.a.x - r.b.x) < qi && xi(r.a.y - r.b.y) < qi) && (r.a = r.b = null, e.splice(o, 1))
            }

            function Qe(t, r) {
                var e = t.b;
                if (e) return !0;
                var n, o, a = t.a,
                    i = r[0][0],
                    s = r[1][0],
                    c = r[0][1],
                    l = r[1][1],
                    u = t.l,
                    d = t.r,
                    m = u.x,
                    h = u.y,
                    p = d.x,
                    f = d.y,
                    g = (m + p) / 2,
                    y = (h + f) / 2;
                if (f === h) {
                    if (i > g || g >= s) return;
                    if (m > p) {
                        if (a) {
                            if (a.y >= l) return
                        } else a = {
                            x: g,
                            y: c
                        };
                        e = {
                            x: g,
                            y: l
                        }
                    } else {
                        if (a) {
                            if (a.y < c) return
                        } else a = {
                            x: g,
                            y: l
                        };
                        e = {
                            x: g,
                            y: c
                        }
                    }
                } else if (n = (m - p) / (f - h), o = y - n * g, -1 > n || n > 1)
                    if (m > p) {
                        if (a) {
                            if (a.y >= l) return
                        } else a = {
                            x: (c - o) / n,
                            y: c
                        };
                        e = {
                            x: (l - o) / n,
                            y: l
                        }
                    } else {
                        if (a) {
                            if (a.y < c) return
                        } else a = {
                            x: (l - o) / n,
                            y: l
                        };
                        e = {
                            x: (c - o) / n,
                            y: c
                        }
                    } else if (f > h) {
                    if (a) {
                        if (a.x >= s) return
                    } else a = {
                        x: i,
                        y: n * i + o
                    };
                    e = {
                        x: s,
                        y: n * s + o
                    }
                } else {
                    if (a) {
                        if (a.x < i) return
                    } else a = {
                        x: s,
                        y: n * s + o
                    };
                    e = {
                        x: i,
                        y: n * i + o
                    }
                }
                return t.a = a, t.b = e, !0
            }

            function tn(t, r) {
                this.l = t, this.r = r, this.a = this.b = null
            }

            function rn(t, r, e, n) {
                var o = new tn(t, r);
                return nc.push(o), e && nn(o, t, r, e), n && nn(o, r, t, n), oc[t.i].edges.push(new on(o, t, r)), oc[r.i].edges.push(new on(o, r, t)), o
            }

            function en(t, r, e) {
                var n = new tn(t, null);
                return n.a = r, n.b = e, nc.push(n), n
            }

            function nn(t, r, e, n) {
                t.a || t.b ? t.l === e ? t.b = n : t.a = n : (t.a = n, t.l = r, t.r = e)
            }

            function on(t, r, e) {
                var n = t.a,
                    o = t.b;
                this.edge = t, this.site = r, this.angle = e ? Math.atan2(e.y - r.y, e.x - r.x) : t.l === r ? Math.atan2(o.x - n.x, n.y - o.y) : Math.atan2(n.x - o.x, o.y - n.y)
            }

            function an() {
                this._ = null
            }

            function sn(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }

            function cn(t, r) {
                var e = r,
                    n = r.R,
                    o = e.U;
                o ? o.L === e ? o.L = n : o.R = n : t._ = n, n.U = o, e.U = n, e.R = n.L, e.R && (e.R.U = e), n.L = e
            }

            function ln(t, r) {
                var e = r,
                    n = r.L,
                    o = e.U;
                o ? o.L === e ? o.L = n : o.R = n : t._ = n, n.U = o, e.U = n, e.L = n.R, e.L && (e.L.U = e), n.R = e
            }

            function un(t) {
                for (; t.L;) t = t.L;
                return t
            }

            function dn(t, r) {
                var e, n, o, a = t.sort(mn).pop();
                for (nc = [], oc = new Array(t.length), ac = new an, sc = new an;;)
                    if (o = ic, a && (!o || a.y < o.y || a.y === o.y && a.x < o.x))(a.x !== e || a.y !== n) && (oc[a.i] = new Ve(a), Ge(a), e = a.x, n = a.y), a = t.pop();
                    else {
                        if (!o) break;
                        Ue(o.arc)
                    }
                r && (Ke(r), Ye(r));
                var i = {
                    cells: oc,
                    edges: nc
                };
                return ac = sc = nc = oc = null, i
            }

            function mn(t, r) {
                return r.y - t.y || r.x - t.x
            }

            function hn(t, r, e) {
                return (t.x - e.x) * (r.y - t.y) - (t.x - r.x) * (e.y - t.y)
            }

            function pn(t) {
                return t.x
            }

            function fn(t) {
                return t.y
            }

            function gn() {
                return {
                    leaf: !0,
                    nodes: [],
                    point: null,
                    x: null,
                    y: null
                }
            }

            function yn(t, r, e, n, o, a) {
                if (!t(r, e, n, o, a)) {
                    var i = .5 * (e + o),
                        s = .5 * (n + a),
                        c = r.nodes;
                    c[0] && yn(t, c[0], e, n, i, s), c[1] && yn(t, c[1], i, n, o, s), c[2] && yn(t, c[2], e, s, i, a), c[3] && yn(t, c[3], i, s, o, a)
                }
            }

            function vn(t, r, e, n, o, a, i) {
                var s, c = 1 / 0;
                return function l(t, u, d, m, h) {
                    if (!(u > a || d > i || n > m || o > h)) {
                        if (p = t.point) {
                            var p, f = r - t.x,
                                g = e - t.y,
                                y = f * f + g * g;
                            if (c > y) {
                                var v = Math.sqrt(c = y);
                                n = r - v, o = e - v, a = r + v, i = e + v, s = p
                            }
                        }
                        for (var x = t.nodes, w = .5 * (u + m), b = .5 * (d + h), M = r >= w, k = e >= b, _ = k << 1 | M, N = _ + 4; N > _; ++_)
                            if (t = x[3 & _]) switch (3 & _) {
                                case 0:
                                    l(t, u, d, w, b);
                                    break;
                                case 1:
                                    l(t, w, d, m, b);
                                    break;
                                case 2:
                                    l(t, u, b, w, h);
                                    break;
                                case 3:
                                    l(t, w, b, m, h)
                            }
                    }
                }(t, n, o, a, i), s
            }

            function xn(t, r) {
                t = si.rgb(t), r = si.rgb(r);
                var e = t.r,
                    n = t.g,
                    o = t.b,
                    a = r.r - e,
                    i = r.g - n,
                    s = r.b - o;
                return function(t) {
                    return "#" + Nt(Math.round(e + a * t)) + Nt(Math.round(n + i * t)) + Nt(Math.round(o + s * t));
                }
            }

            function wn(t, r) {
                var e, n = {},
                    o = {};
                for (e in t) e in r ? n[e] = kn(t[e], r[e]) : o[e] = t[e];
                for (e in r) e in t || (o[e] = r[e]);
                return function(t) {
                    for (e in n) o[e] = n[e](t);
                    return o
                }
            }

            function bn(t, r) {
                return t = +t, r = +r,
                    function(e) {
                        return t * (1 - e) + r * e
                    }
            }

            function Mn(t, r) {
                var e, n, o, a = dc.lastIndex = mc.lastIndex = 0,
                    i = -1,
                    s = [],
                    c = [];
                for (t += "", r += "";
                    (e = dc.exec(t)) && (n = mc.exec(r));)(o = n.index) > a && (o = r.slice(a, o), s[i] ? s[i] += o : s[++i] = o), (e = e[0]) === (n = n[0]) ? s[i] ? s[i] += n : s[++i] = n : (s[++i] = null, c.push({
                    i: i,
                    x: bn(e, n)
                })), a = mc.lastIndex;
                return a < r.length && (o = r.slice(a), s[i] ? s[i] += o : s[++i] = o), s.length < 2 ? c[0] ? (r = c[0].x, function(t) {
                    return r(t) + ""
                }) : function() {
                    return r
                } : (r = c.length, function(t) {
                    for (var e, n = 0; r > n; ++n) s[(e = c[n]).i] = e.x(t);
                    return s.join("")
                })
            }

            function kn(t, r) {
                for (var e, n = si.interpolators.length; --n >= 0 && !(e = si.interpolators[n](t, r)););
                return e
            }

            function _n(t, r) {
                var e, n = [],
                    o = [],
                    a = t.length,
                    i = r.length,
                    s = Math.min(t.length, r.length);
                for (e = 0; s > e; ++e) n.push(kn(t[e], r[e]));
                for (; a > e; ++e) o[e] = t[e];
                for (; i > e; ++e) o[e] = r[e];
                return function(t) {
                    for (e = 0; s > e; ++e) o[e] = n[e](t);
                    return o
                }
            }

            function Nn(t) {
                return function(r) {
                    return 0 >= r ? 0 : r >= 1 ? 1 : t(r)
                }
            }

            function Pn(t) {
                return function(r) {
                    return 1 - t(1 - r)
                }
            }

            function En(t) {
                return function(r) {
                    return .5 * (.5 > r ? t(2 * r) : 2 - t(2 - 2 * r))
                }
            }

            function An(t) {
                return t * t
            }

            function Cn(t) {
                return t * t * t
            }

            function Sn(t) {
                if (0 >= t) return 0;
                if (t >= 1) return 1;
                var r = t * t,
                    e = r * t;
                return 4 * (.5 > t ? e : 3 * (t - r) + e - .75)
            }

            function On(t) {
                return function(r) {
                    return Math.pow(r, t)
                }
            }

            function Fn(t) {
                return 1 - Math.cos(t * Ii)
            }

            function zn(t) {
                return Math.pow(2, 10 * (t - 1))
            }

            function jn(t) {
                return 1 - Math.sqrt(1 - t * t)
            }

            function qn(t, r) {
                var e;
                return arguments.length < 2 && (r = .45), arguments.length ? e = r / Ri * Math.asin(1 / t) : (t = 1, e = r / 4),
                    function(n) {
                        return 1 + t * Math.pow(2, -10 * n) * Math.sin((n - e) * Ri / r)
                    }
            }

            function Ln(t) {
                return t || (t = 1.70158),
                    function(r) {
                        return r * r * ((t + 1) * r - t)
                    }
            }

            function Tn(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }

            function Rn(t, r) {
                t = si.hcl(t), r = si.hcl(r);
                var e = t.h,
                    n = t.c,
                    o = t.l,
                    a = r.h - e,
                    i = r.c - n,
                    s = r.l - o;
                return isNaN(i) && (i = 0, n = isNaN(n) ? r.c : n), isNaN(a) ? (a = 0, e = isNaN(e) ? r.h : e) : a > 180 ? a -= 360 : -180 > a && (a += 360),
                    function(t) {
                        return ft(e + a * t, n + i * t, o + s * t) + ""
                    }
            }

            function Dn(t, r) {
                t = si.hsl(t), r = si.hsl(r);
                var e = t.h,
                    n = t.s,
                    o = t.l,
                    a = r.h - e,
                    i = r.s - n,
                    s = r.l - o;
                return isNaN(i) && (i = 0, n = isNaN(n) ? r.s : n), isNaN(a) ? (a = 0, e = isNaN(e) ? r.h : e) : a > 180 ? a -= 360 : -180 > a && (a += 360),
                    function(t) {
                        return ht(e + a * t, n + i * t, o + s * t) + ""
                    }
            }

            function In(t, r) {
                t = si.lab(t), r = si.lab(r);
                var e = t.l,
                    n = t.a,
                    o = t.b,
                    a = r.l - e,
                    i = r.a - n,
                    s = r.b - o;
                return function(t) {
                    return yt(e + a * t, n + i * t, o + s * t) + ""
                }
            }

            function Wn(t, r) {
                return r -= t,
                    function(e) {
                        return Math.round(t + r * e)
                    }
            }

            function Un(t) {
                var r = [t.a, t.b],
                    e = [t.c, t.d],
                    n = Bn(r),
                    o = Gn(r, e),
                    a = Bn(Hn(e, r, -o)) || 0;
                r[0] * e[1] < e[0] * r[1] && (r[0] *= -1, r[1] *= -1, n *= -1, o *= -1), this.rotate = (n ? Math.atan2(r[1], r[0]) : Math.atan2(-e[0], e[1])) * Ui, this.translate = [t.e, t.f], this.scale = [n, a], this.skew = a ? Math.atan2(o, a) * Ui : 0
            }

            function Gn(t, r) {
                return t[0] * r[0] + t[1] * r[1]
            }

            function Bn(t) {
                var r = Math.sqrt(Gn(t, t));
                return r && (t[0] /= r, t[1] /= r), r
            }

            function Hn(t, r, e) {
                return t[0] += e * r[0], t[1] += e * r[1], t
            }

            function Vn(t, r) {
                var e, n = [],
                    o = [],
                    a = si.transform(t),
                    i = si.transform(r),
                    s = a.translate,
                    c = i.translate,
                    l = a.rotate,
                    u = i.rotate,
                    d = a.skew,
                    m = i.skew,
                    h = a.scale,
                    p = i.scale;
                return s[0] != c[0] || s[1] != c[1] ? (n.push("translate(", null, ",", null, ")"), o.push({
                        i: 1,
                        x: bn(s[0], c[0])
                    }, {
                        i: 3,
                        x: bn(s[1], c[1])
                    })) : c[0] || c[1] ? n.push("translate(" + c + ")") : n.push(""), l != u ? (l - u > 180 ? u += 360 : u - l > 180 && (l += 360), o.push({
                        i: n.push(n.pop() + "rotate(", null, ")") - 2,
                        x: bn(l, u)
                    })) : u && n.push(n.pop() + "rotate(" + u + ")"), d != m ? o.push({
                        i: n.push(n.pop() + "skewX(", null, ")") - 2,
                        x: bn(d, m)
                    }) : m && n.push(n.pop() + "skewX(" + m + ")"), h[0] != p[0] || h[1] != p[1] ? (e = n.push(n.pop() + "scale(", null, ",", null, ")"), o.push({
                        i: e - 4,
                        x: bn(h[0], p[0])
                    }, {
                        i: e - 2,
                        x: bn(h[1], p[1])
                    })) : (1 != p[0] || 1 != p[1]) && n.push(n.pop() + "scale(" + p + ")"), e = o.length,
                    function(t) {
                        for (var r, a = -1; ++a < e;) n[(r = o[a]).i] = r.x(t);
                        return n.join("")
                    }
            }

            function Yn(t, r) {
                return r = (r -= t = +t) || 1 / r,
                    function(e) {
                        return (e - t) / r
                    }
            }

            function Zn(t, r) {
                return r = (r -= t = +t) || 1 / r,
                    function(e) {
                        return Math.max(0, Math.min(1, (e - t) / r))
                    }
            }

            function $n(t) {
                for (var r = t.source, e = t.target, n = Xn(r, e), o = [r]; r !== n;) r = r.parent, o.push(r);
                for (var a = o.length; e !== n;) o.splice(a, 0, e), e = e.parent;
                return o
            }

            function Jn(t) {
                for (var r = [], e = t.parent; null != e;) r.push(t), t = e, e = e.parent;
                return r.push(t), r
            }

            function Xn(t, r) {
                if (t === r) return t;
                for (var e = Jn(t), n = Jn(r), o = e.pop(), a = n.pop(), i = null; o === a;) i = o, o = e.pop(), a = n.pop();
                return i
            }

            function Kn(t) {
                t.fixed |= 2
            }

            function Qn(t) {
                t.fixed &= -7
            }

            function to(t) {
                t.fixed |= 4, t.px = t.x, t.py = t.y
            }

            function ro(t) {
                t.fixed &= -5
            }

            function eo(t, r, e) {
                var n = 0,
                    o = 0;
                if (t.charge = 0, !t.leaf)
                    for (var a, i = t.nodes, s = i.length, c = -1; ++c < s;) a = i[c], null != a && (eo(a, r, e), t.charge += a.charge, n += a.charge * a.cx, o += a.charge * a.cy);
                if (t.point) {
                    t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
                    var l = r * e[t.point.index];
                    t.charge += t.pointCharge = l, n += l * t.point.x, o += l * t.point.y
                }
                t.cx = n / t.charge, t.cy = o / t.charge
            }

            function no(t, r) {
                return si.rebind(t, r, "sort", "children", "value"), t.nodes = t, t.links = lo, t
            }

            function oo(t, r) {
                for (var e = [t]; null != (t = e.pop());)
                    if (r(t), (o = t.children) && (n = o.length))
                        for (var n, o; --n >= 0;) e.push(o[n])
            }

            function ao(t, r) {
                for (var e = [t], n = []; null != (t = e.pop());)
                    if (n.push(t), (a = t.children) && (o = a.length))
                        for (var o, a, i = -1; ++i < o;) e.push(a[i]);
                for (; null != (t = n.pop());) r(t)
            }

            function io(t) {
                return t.children
            }

            function so(t) {
                return t.value
            }

            function co(t, r) {
                return r.value - t.value
            }

            function lo(t) {
                return si.merge(t.map(function(t) {
                    return (t.children || []).map(function(r) {
                        return {
                            source: t,
                            target: r
                        }
                    })
                }))
            }

            function uo(t) {
                return t.x
            }

            function mo(t) {
                return t.y
            }

            function ho(t, r, e) {
                t.y0 = r, t.y = e
            }

            function po(t) {
                return si.range(t.length)
            }

            function fo(t) {
                for (var r = -1, e = t[0].length, n = []; ++r < e;) n[r] = 0;
                return n
            }

            function go(t) {
                for (var r, e = 1, n = 0, o = t[0][1], a = t.length; a > e; ++e)(r = t[e][1]) > o && (n = e, o = r);
                return n
            }

            function yo(t) {
                return t.reduce(vo, 0)
            }

            function vo(t, r) {
                return t + r[1]
            }

            function xo(t, r) {
                return wo(t, Math.ceil(Math.log(r.length) / Math.LN2 + 1))
            }

            function wo(t, r) {
                for (var e = -1, n = +t[0], o = (t[1] - n) / r, a = []; ++e <= r;) a[e] = o * e + n;
                return a
            }

            function bo(t) {
                return [si.min(t), si.max(t)]
            }

            function Mo(t, r) {
                return t.value - r.value
            }

            function ko(t, r) {
                var e = t._pack_next;
                t._pack_next = r, r._pack_prev = t, r._pack_next = e, e._pack_prev = r
            }

            function _o(t, r) {
                t._pack_next = r, r._pack_prev = t
            }

            function No(t, r) {
                var e = r.x - t.x,
                    n = r.y - t.y,
                    o = t.r + r.r;
                return .999 * o * o > e * e + n * n
            }

            function Po(t) {
                function r(t) {
                    u = Math.min(t.x - t.r, u), d = Math.max(t.x + t.r, d), m = Math.min(t.y - t.r, m), h = Math.max(t.y + t.r, h)
                }
                if ((e = t.children) && (l = e.length)) {
                    var e, n, o, a, i, s, c, l, u = 1 / 0,
                        d = -(1 / 0),
                        m = 1 / 0,
                        h = -(1 / 0);
                    if (e.forEach(Eo), n = e[0], n.x = -n.r, n.y = 0, r(n), l > 1 && (o = e[1], o.x = o.r, o.y = 0, r(o), l > 2))
                        for (a = e[2], So(n, o, a), r(a), ko(n, a), n._pack_prev = a, ko(a, o), o = n._pack_next, i = 3; l > i; i++) {
                            So(n, o, a = e[i]);
                            var p = 0,
                                f = 1,
                                g = 1;
                            for (s = o._pack_next; s !== o; s = s._pack_next, f++)
                                if (No(s, a)) {
                                    p = 1;
                                    break
                                }
                            if (1 == p)
                                for (c = n._pack_prev; c !== s._pack_prev && !No(c, a); c = c._pack_prev, g++);
                            p ? (g > f || f == g && o.r < n.r ? _o(n, o = s) : _o(n = c, o), i--) : (ko(n, a), o = a, r(a))
                        }
                    var y = (u + d) / 2,
                        v = (m + h) / 2,
                        x = 0;
                    for (i = 0; l > i; i++) a = e[i], a.x -= y, a.y -= v, x = Math.max(x, a.r + Math.sqrt(a.x * a.x + a.y * a.y));
                    t.r = x, e.forEach(Ao)
                }
            }

            function Eo(t) {
                t._pack_next = t._pack_prev = t
            }

            function Ao(t) {
                delete t._pack_next, delete t._pack_prev
            }

            function Co(t, r, e, n) {
                var o = t.children;
                if (t.x = r += n * t.x, t.y = e += n * t.y, t.r *= n, o)
                    for (var a = -1, i = o.length; ++a < i;) Co(o[a], r, e, n)
            }

            function So(t, r, e) {
                var n = t.r + e.r,
                    o = r.x - t.x,
                    a = r.y - t.y;
                if (n && (o || a)) {
                    var i = r.r + e.r,
                        s = o * o + a * a;
                    i *= i, n *= n;
                    var c = .5 + (n - i) / (2 * s),
                        l = Math.sqrt(Math.max(0, 2 * i * (n + s) - (n -= s) * n - i * i)) / (2 * s);
                    e.x = t.x + c * o + l * a, e.y = t.y + c * a - l * o
                } else e.x = t.x + n, e.y = t.y
            }

            function Oo(t, r) {
                return t.parent == r.parent ? 1 : 2
            }

            function Fo(t) {
                var r = t.children;
                return r.length ? r[0] : t.t
            }

            function zo(t) {
                var r, e = t.children;
                return (r = e.length) ? e[r - 1] : t.t
            }

            function jo(t, r, e) {
                var n = e / (r.i - t.i);
                r.c -= n, r.s += e, t.c += n, r.z += e, r.m += e
            }

            function qo(t) {
                for (var r, e = 0, n = 0, o = t.children, a = o.length; --a >= 0;) r = o[a], r.z += e, r.m += e, e += r.s + (n += r.c)
            }

            function Lo(t, r, e) {
                return t.a.parent === r.parent ? t.a : e
            }

            function To(t) {
                return 1 + si.max(t, function(t) {
                    return t.y
                })
            }

            function Ro(t) {
                return t.reduce(function(t, r) {
                    return t + r.x
                }, 0) / t.length
            }

            function Do(t) {
                var r = t.children;
                return r && r.length ? Do(r[0]) : t
            }

            function Io(t) {
                var r, e = t.children;
                return e && (r = e.length) ? Io(e[r - 1]) : t
            }

            function Wo(t) {
                return {
                    x: t.x,
                    y: t.y,
                    dx: t.dx,
                    dy: t.dy
                }
            }

            function Uo(t, r) {
                var e = t.x + r[3],
                    n = t.y + r[0],
                    o = t.dx - r[1] - r[3],
                    a = t.dy - r[0] - r[2];
                return 0 > o && (e += o / 2, o = 0), 0 > a && (n += a / 2, a = 0), {
                    x: e,
                    y: n,
                    dx: o,
                    dy: a
                }
            }

            function Go(t) {
                var r = t[0],
                    e = t[t.length - 1];
                return e > r ? [r, e] : [e, r]
            }

            function Bo(t) {
                return t.rangeExtent ? t.rangeExtent() : Go(t.range())
            }

            function Ho(t, r, e, n) {
                var o = e(t[0], t[1]),
                    a = n(r[0], r[1]);
                return function(t) {
                    return a(o(t))
                }
            }

            function Vo(t, r) {
                var e, n = 0,
                    o = t.length - 1,
                    a = t[n],
                    i = t[o];
                return a > i && (e = n, n = o, o = e, e = a, a = i, i = e), t[n] = r.floor(a), t[o] = r.ceil(i), t
            }

            function Yo(t) {
                return t ? {
                    floor: function(r) {
                        return Math.floor(r / t) * t
                    },
                    ceil: function(r) {
                        return Math.ceil(r / t) * t
                    }
                } : kc
            }

            function Zo(t, r, e, n) {
                var o = [],
                    a = [],
                    i = 0,
                    s = Math.min(t.length, r.length) - 1;
                for (t[s] < t[0] && (t = t.slice().reverse(), r = r.slice().reverse()); ++i <= s;) o.push(e(t[i - 1], t[i])), a.push(n(r[i - 1], r[i]));
                return function(r) {
                    var e = si.bisect(t, r, 1, s) - 1;
                    return a[e](o[e](r))
                }
            }

            function $o(t, r, e, n) {
                function o() {
                    var o = Math.min(t.length, r.length) > 2 ? Zo : Ho,
                        c = n ? Zn : Yn;
                    return i = o(t, r, c, e), s = o(r, t, c, kn), a
                }

                function a(t) {
                    return i(t)
                }
                var i, s;
                return a.invert = function(t) {
                    return s(t)
                }, a.domain = function(r) {
                    return arguments.length ? (t = r.map(Number), o()) : t
                }, a.range = function(t) {
                    return arguments.length ? (r = t, o()) : r
                }, a.rangeRound = function(t) {
                    return a.range(t).interpolate(Wn)
                }, a.clamp = function(t) {
                    return arguments.length ? (n = t, o()) : n
                }, a.interpolate = function(t) {
                    return arguments.length ? (e = t, o()) : e
                }, a.ticks = function(r) {
                    return Qo(t, r)
                }, a.tickFormat = function(r, e) {
                    return ta(t, r, e)
                }, a.nice = function(r) {
                    return Xo(t, r), o()
                }, a.copy = function() {
                    return $o(t, r, e, n)
                }, o()
            }

            function Jo(t, r) {
                return si.rebind(t, r, "range", "rangeRound", "interpolate", "clamp")
            }

            function Xo(t, r) {
                return Vo(t, Yo(Ko(t, r)[2]))
            }

            function Ko(t, r) {
                null == r && (r = 10);
                var e = Go(t),
                    n = e[1] - e[0],
                    o = Math.pow(10, Math.floor(Math.log(n / r) / Math.LN10)),
                    a = r / n * o;
                return .15 >= a ? o *= 10 : .35 >= a ? o *= 5 : .75 >= a && (o *= 2), e[0] = Math.ceil(e[0] / o) * o, e[1] = Math.floor(e[1] / o) * o + .5 * o, e[2] = o, e
            }

            function Qo(t, r) {
                return si.range.apply(si, Ko(t, r))
            }

            function ta(t, r, e) {
                var n = Ko(t, r);
                if (e) {
                    var o = ds.exec(e);
                    if (o.shift(), "s" === o[8]) {
                        var a = si.formatPrefix(Math.max(xi(n[0]), xi(n[1])));
                        return o[7] || (o[7] = "." + ra(a.scale(n[2]))), o[8] = "f", e = si.format(o.join("")),
                            function(t) {
                                return e(a.scale(t)) + a.symbol
                            }
                    }
                    o[7] || (o[7] = "." + ea(o[8], n)), e = o.join("")
                } else e = ",." + ra(n[2]) + "f";
                return si.format(e)
            }

            function ra(t) {
                return -Math.floor(Math.log(t) / Math.LN10 + .01)
            }

            function ea(t, r) {
                var e = ra(r[2]);
                return t in _c ? Math.abs(e - ra(Math.max(xi(r[0]), xi(r[1])))) + +("e" !== t) : e - 2 * ("%" === t)
            }

            function na(t, r, e, n) {
                function o(t) {
                    return (e ? Math.log(0 > t ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(r)
                }

                function a(t) {
                    return e ? Math.pow(r, t) : -Math.pow(r, -t)
                }

                function i(r) {
                    return t(o(r))
                }
                return i.invert = function(r) {
                    return a(t.invert(r))
                }, i.domain = function(r) {
                    return arguments.length ? (e = r[0] >= 0, t.domain((n = r.map(Number)).map(o)), i) : n
                }, i.base = function(e) {
                    return arguments.length ? (r = +e, t.domain(n.map(o)), i) : r
                }, i.nice = function() {
                    var r = Vo(n.map(o), e ? Math : Pc);
                    return t.domain(r), n = r.map(a), i
                }, i.ticks = function() {
                    var t = Go(n),
                        i = [],
                        s = t[0],
                        c = t[1],
                        l = Math.floor(o(s)),
                        u = Math.ceil(o(c)),
                        d = r % 1 ? 2 : r;
                    if (isFinite(u - l)) {
                        if (e) {
                            for (; u > l; l++)
                                for (var m = 1; d > m; m++) i.push(a(l) * m);
                            i.push(a(l))
                        } else
                            for (i.push(a(l)); l++ < u;)
                                for (var m = d - 1; m > 0; m--) i.push(a(l) * m);
                        for (l = 0; i[l] < s; l++);
                        for (u = i.length; i[u - 1] > c; u--);
                        i = i.slice(l, u)
                    }
                    return i
                }, i.tickFormat = function(t, r) {
                    if (!arguments.length) return Nc;
                    arguments.length < 2 ? r = Nc : "function" != typeof r && (r = si.format(r));
                    var n, s = Math.max(.1, t / i.ticks().length),
                        c = e ? (n = 1e-12, Math.ceil) : (n = -1e-12, Math.floor);
                    return function(t) {
                        return t / a(c(o(t) + n)) <= s ? r(t) : ""
                    }
                }, i.copy = function() {
                    return na(t.copy(), r, e, n)
                }, Jo(i, t)
            }

            function oa(t, r, e) {
                function n(r) {
                    return t(o(r))
                }
                var o = aa(r),
                    a = aa(1 / r);
                return n.invert = function(r) {
                    return a(t.invert(r))
                }, n.domain = function(r) {
                    return arguments.length ? (t.domain((e = r.map(Number)).map(o)), n) : e
                }, n.ticks = function(t) {
                    return Qo(e, t)
                }, n.tickFormat = function(t, r) {
                    return ta(e, t, r)
                }, n.nice = function(t) {
                    return n.domain(Xo(e, t))
                }, n.exponent = function(i) {
                    return arguments.length ? (o = aa(r = i), a = aa(1 / r), t.domain(e.map(o)), n) : r
                }, n.copy = function() {
                    return oa(t.copy(), r, e)
                }, Jo(n, t)
            }

            function aa(t) {
                return function(r) {
                    return 0 > r ? -Math.pow(-r, t) : Math.pow(r, t)
                }
            }

            function ia(t, r) {
                function e(e) {
                    return a[((o.get(e) || ("range" === r.t ? o.set(e, t.push(e)) : NaN)) - 1) % a.length]
                }

                function n(r, e) {
                    return si.range(t.length).map(function(t) {
                        return r + e * t
                    })
                }
                var o, a, i;
                return e.domain = function(n) {
                    if (!arguments.length) return t;
                    t = [], o = new p;
                    for (var a, i = -1, s = n.length; ++i < s;) o.has(a = n[i]) || o.set(a, t.push(a));
                    return e[r.t].apply(e, r.a)
                }, e.range = function(t) {
                    return arguments.length ? (a = t, i = 0, r = {
                        t: "range",
                        a: arguments
                    }, e) : a
                }, e.rangePoints = function(o, s) {
                    arguments.length < 2 && (s = 0);
                    var c = o[0],
                        l = o[1],
                        u = t.length < 2 ? (c = (c + l) / 2, 0) : (l - c) / (t.length - 1 + s);
                    return a = n(c + u * s / 2, u), i = 0, r = {
                        t: "rangePoints",
                        a: arguments
                    }, e
                }, e.rangeRoundPoints = function(o, s) {
                    arguments.length < 2 && (s = 0);
                    var c = o[0],
                        l = o[1],
                        u = t.length < 2 ? (c = l = Math.round((c + l) / 2), 0) : (l - c) / (t.length - 1 + s) | 0;
                    return a = n(c + Math.round(u * s / 2 + (l - c - (t.length - 1 + s) * u) / 2), u), i = 0, r = {
                        t: "rangeRoundPoints",
                        a: arguments
                    }, e
                }, e.rangeBands = function(o, s, c) {
                    arguments.length < 2 && (s = 0), arguments.length < 3 && (c = s);
                    var l = o[1] < o[0],
                        u = o[l - 0],
                        d = o[1 - l],
                        m = (d - u) / (t.length - s + 2 * c);
                    return a = n(u + m * c, m), l && a.reverse(), i = m * (1 - s), r = {
                        t: "rangeBands",
                        a: arguments
                    }, e
                }, e.rangeRoundBands = function(o, s, c) {
                    arguments.length < 2 && (s = 0), arguments.length < 3 && (c = s);
                    var l = o[1] < o[0],
                        u = o[l - 0],
                        d = o[1 - l],
                        m = Math.floor((d - u) / (t.length - s + 2 * c));
                    return a = n(u + Math.round((d - u - (t.length - s) * m) / 2), m), l && a.reverse(), i = Math.round(m * (1 - s)), r = {
                        t: "rangeRoundBands",
                        a: arguments
                    }, e
                }, e.rangeBand = function() {
                    return i
                }, e.rangeExtent = function() {
                    return Go(r.a[0])
                }, e.copy = function() {
                    return ia(t, r)
                }, e.domain(t)
            }

            function sa(t, r) {
                function e() {
                    var e = 0,
                        a = r.length;
                    for (o = []; ++e < a;) o[e - 1] = si.quantile(t, e / a);
                    return n
                }

                function n(t) {
                    return isNaN(t = +t) ? void 0 : r[si.bisect(o, t)]
                }
                var o;
                return n.domain = function(r) {
                    return arguments.length ? (t = r.map(c).filter(l).sort(s), e()) : t
                }, n.range = function(t) {
                    return arguments.length ? (r = t, e()) : r
                }, n.quantiles = function() {
                    return o
                }, n.invertExtent = function(e) {
                    return e = r.indexOf(e), 0 > e ? [NaN, NaN] : [e > 0 ? o[e - 1] : t[0], e < o.length ? o[e] : t[t.length - 1]]
                }, n.copy = function() {
                    return sa(t, r)
                }, e()
            }

            function ca(t, r, e) {
                function n(r) {
                    return e[Math.max(0, Math.min(i, Math.floor(a * (r - t))))]
                }

                function o() {
                    return a = e.length / (r - t), i = e.length - 1, n
                }
                var a, i;
                return n.domain = function(e) {
                    return arguments.length ? (t = +e[0], r = +e[e.length - 1], o()) : [t, r]
                }, n.range = function(t) {
                    return arguments.length ? (e = t, o()) : e
                }, n.invertExtent = function(r) {
                    return r = e.indexOf(r), r = 0 > r ? NaN : r / a + t, [r, r + 1 / a]
                }, n.copy = function() {
                    return ca(t, r, e)
                }, o()
            }

            function la(t, r) {
                function e(e) {
                    return e >= e ? r[si.bisect(t, e)] : void 0
                }
                return e.domain = function(r) {
                    return arguments.length ? (t = r, e) : t
                }, e.range = function(t) {
                    return arguments.length ? (r = t, e) : r
                }, e.invertExtent = function(e) {
                    return e = r.indexOf(e), [t[e - 1], t[e]]
                }, e.copy = function() {
                    return la(t, r)
                }, e
            }

            function ua(t) {
                function r(t) {
                    return +t
                }
                return r.invert = r, r.domain = r.range = function(e) {
                    return arguments.length ? (t = e.map(r), r) : t
                }, r.ticks = function(r) {
                    return Qo(t, r)
                }, r.tickFormat = function(r, e) {
                    return ta(t, r, e)
                }, r.copy = function() {
                    return ua(t)
                }, r
            }

            function da() {
                return 0
            }

            function ma(t) {
                return t.innerRadius
            }

            function ha(t) {
                return t.outerRadius
            }

            function pa(t) {
                return t.startAngle
            }

            function fa(t) {
                return t.endAngle
            }

            function ga(t) {
                return t && t.padAngle
            }

            function ya(t, r, e, n) {
                return (t - e) * r - (r - n) * t > 0 ? 0 : 1
            }

            function va(t, r, e, n, o) {
                var a = t[0] - r[0],
                    i = t[1] - r[1],
                    s = (o ? n : -n) / Math.sqrt(a * a + i * i),
                    c = s * i,
                    l = -s * a,
                    u = t[0] + c,
                    d = t[1] + l,
                    m = r[0] + c,
                    h = r[1] + l,
                    p = (u + m) / 2,
                    f = (d + h) / 2,
                    g = m - u,
                    y = h - d,
                    v = g * g + y * y,
                    x = e - n,
                    w = u * h - m * d,
                    b = (0 > y ? -1 : 1) * Math.sqrt(x * x * v - w * w),
                    M = (w * y - g * b) / v,
                    k = (-w * g - y * b) / v,
                    _ = (w * y + g * b) / v,
                    N = (-w * g + y * b) / v,
                    P = M - p,
                    E = k - f,
                    A = _ - p,
                    C = N - f;
                return P * P + E * E > A * A + C * C && (M = _, k = N), [
                    [M - c, k - l],
                    [M * e / x, k * e / x]
                ]
            }

            function xa(t) {
                function r(r) {
                    function i() {
                        l.push("M", a(t(u), s))
                    }
                    for (var c, l = [], u = [], d = -1, m = r.length, h = Ot(e), p = Ot(n); ++d < m;) o.call(this, c = r[d], d) ? u.push([+h.call(this, c, d), +p.call(this, c, d)]) : u.length && (i(), u = []);
                    return u.length && i(), l.length ? l.join("") : null
                }
                var e = Fe,
                    n = ze,
                    o = zr,
                    a = wa,
                    i = a.key,
                    s = .7;
                return r.x = function(t) {
                    return arguments.length ? (e = t, r) : e
                }, r.y = function(t) {
                    return arguments.length ? (n = t, r) : n
                }, r.defined = function(t) {
                    return arguments.length ? (o = t, r) : o
                }, r.interpolate = function(t) {
                    return arguments.length ? (i = "function" == typeof t ? a = t : (a = Fc.get(t) || wa).key, r) : i
                }, r.tension = function(t) {
                    return arguments.length ? (s = t, r) : s
                }, r
            }

            function wa(t) {
                return t.join("L")
            }

            function ba(t) {
                return wa(t) + "Z"
            }

            function Ma(t) {
                for (var r = 0, e = t.length, n = t[0], o = [n[0], ",", n[1]]; ++r < e;) o.push("H", (n[0] + (n = t[r])[0]) / 2, "V", n[1]);
                return e > 1 && o.push("H", n[0]), o.join("")
            }

            function ka(t) {
                for (var r = 0, e = t.length, n = t[0], o = [n[0], ",", n[1]]; ++r < e;) o.push("V", (n = t[r])[1], "H", n[0]);
                return o.join("")
            }

            function _a(t) {
                for (var r = 0, e = t.length, n = t[0], o = [n[0], ",", n[1]]; ++r < e;) o.push("H", (n = t[r])[0], "V", n[1]);
                return o.join("")
            }

            function Na(t, r) {
                return t.length < 4 ? wa(t) : t[1] + Aa(t.slice(1, -1), Ca(t, r))
            }

            function Pa(t, r) {
                return t.length < 3 ? wa(t) : t[0] + Aa((t.push(t[0]), t), Ca([t[t.length - 2]].concat(t, [t[1]]), r))
            }

            function Ea(t, r) {
                return t.length < 3 ? wa(t) : t[0] + Aa(t, Ca(t, r))
            }

            function Aa(t, r) {
                if (r.length < 1 || t.length != r.length && t.length != r.length + 2) return wa(t);
                var e = t.length != r.length,
                    n = "",
                    o = t[0],
                    a = t[1],
                    i = r[0],
                    s = i,
                    c = 1;
                if (e && (n += "Q" + (a[0] - 2 * i[0] / 3) + "," + (a[1] - 2 * i[1] / 3) + "," + a[0] + "," + a[1], o = t[1], c = 2), r.length > 1) {
                    s = r[1], a = t[c], c++, n += "C" + (o[0] + i[0]) + "," + (o[1] + i[1]) + "," + (a[0] - s[0]) + "," + (a[1] - s[1]) + "," + a[0] + "," + a[1];
                    for (var l = 2; l < r.length; l++, c++) a = t[c], s = r[l], n += "S" + (a[0] - s[0]) + "," + (a[1] - s[1]) + "," + a[0] + "," + a[1]
                }
                if (e) {
                    var u = t[c];
                    n += "Q" + (a[0] + 2 * s[0] / 3) + "," + (a[1] + 2 * s[1] / 3) + "," + u[0] + "," + u[1]
                }
                return n
            }

            function Ca(t, r) {
                for (var e, n = [], o = (1 - r) / 2, a = t[0], i = t[1], s = 1, c = t.length; ++s < c;) e = a, a = i, i = t[s], n.push([o * (i[0] - e[0]), o * (i[1] - e[1])]);
                return n
            }

            function Sa(t) {
                if (t.length < 3) return wa(t);
                var r = 1,
                    e = t.length,
                    n = t[0],
                    o = n[0],
                    a = n[1],
                    i = [o, o, o, (n = t[1])[0]],
                    s = [a, a, a, n[1]],
                    c = [o, ",", a, "L", ja(qc, i), ",", ja(qc, s)];
                for (t.push(t[e - 1]); ++r <= e;) n = t[r], i.shift(), i.push(n[0]), s.shift(), s.push(n[1]), qa(c, i, s);
                return t.pop(), c.push("L", n), c.join("")
            }

            function Oa(t) {
                if (t.length < 4) return wa(t);
                for (var r, e = [], n = -1, o = t.length, a = [0], i = [0]; ++n < 3;) r = t[n], a.push(r[0]), i.push(r[1]);
                for (e.push(ja(qc, a) + "," + ja(qc, i)), --n; ++n < o;) r = t[n], a.shift(), a.push(r[0]), i.shift(), i.push(r[1]), qa(e, a, i);
                return e.join("")
            }

            function Fa(t) {
                for (var r, e, n = -1, o = t.length, a = o + 4, i = [], s = []; ++n < 4;) e = t[n % o], i.push(e[0]), s.push(e[1]);
                for (r = [ja(qc, i), ",", ja(qc, s)], --n; ++n < a;) e = t[n % o], i.shift(), i.push(e[0]), s.shift(), s.push(e[1]), qa(r, i, s);
                return r.join("")
            }

            function za(t, r) {
                var e = t.length - 1;
                if (e)
                    for (var n, o, a = t[0][0], i = t[0][1], s = t[e][0] - a, c = t[e][1] - i, l = -1; ++l <= e;) n = t[l], o = l / e, n[0] = r * n[0] + (1 - r) * (a + o * s), n[1] = r * n[1] + (1 - r) * (i + o * c);
                return Sa(t)
            }

            function ja(t, r) {
                return t[0] * r[0] + t[1] * r[1] + t[2] * r[2] + t[3] * r[3]
            }

            function qa(t, r, e) {
                t.push("C", ja(zc, r), ",", ja(zc, e), ",", ja(jc, r), ",", ja(jc, e), ",", ja(qc, r), ",", ja(qc, e))
            }

            function La(t, r) {
                return (r[1] - t[1]) / (r[0] - t[0])
            }

            function Ta(t) {
                for (var r = 0, e = t.length - 1, n = [], o = t[0], a = t[1], i = n[0] = La(o, a); ++r < e;) n[r] = (i + (i = La(o = a, a = t[r + 1]))) / 2;
                return n[r] = i, n
            }

            function Ra(t) {
                for (var r, e, n, o, a = [], i = Ta(t), s = -1, c = t.length - 1; ++s < c;) r = La(t[s], t[s + 1]), xi(r) < qi ? i[s] = i[s + 1] = 0 : (e = i[s] / r, n = i[s + 1] / r, o = e * e + n * n, o > 9 && (o = 3 * r / Math.sqrt(o), i[s] = o * e, i[s + 1] = o * n));
                for (s = -1; ++s <= c;) o = (t[Math.min(c, s + 1)][0] - t[Math.max(0, s - 1)][0]) / (6 * (1 + i[s] * i[s])), a.push([o || 0, i[s] * o || 0]);
                return a
            }

            function Da(t) {
                return t.length < 3 ? wa(t) : t[0] + Aa(t, Ra(t))
            }

            function Ia(t) {
                for (var r, e, n, o = -1, a = t.length; ++o < a;) r = t[o], e = r[0], n = r[1] - Ii, r[0] = e * Math.cos(n), r[1] = e * Math.sin(n);
                return t
            }

            function Wa(t) {
                function r(r) {
                    function c() {
                        f.push("M", s(t(y), d), u, l(t(g.reverse()), d), "Z")
                    }
                    for (var m, h, p, f = [], g = [], y = [], v = -1, x = r.length, w = Ot(e), b = Ot(o), M = e === n ? function() {
                            return h
                        } : Ot(n), k = o === a ? function() {
                            return p
                        } : Ot(a); ++v < x;) i.call(this, m = r[v], v) ? (g.push([h = +w.call(this, m, v), p = +b.call(this, m, v)]), y.push([+M.call(this, m, v), +k.call(this, m, v)])) : g.length && (c(), g = [], y = []);
                    return g.length && c(), f.length ? f.join("") : null
                }
                var e = Fe,
                    n = Fe,
                    o = 0,
                    a = ze,
                    i = zr,
                    s = wa,
                    c = s.key,
                    l = s,
                    u = "L",
                    d = .7;
                return r.x = function(t) {
                    return arguments.length ? (e = n = t, r) : n
                }, r.x0 = function(t) {
                    return arguments.length ? (e = t, r) : e
                }, r.x1 = function(t) {
                    return arguments.length ? (n = t, r) : n
                }, r.y = function(t) {
                    return arguments.length ? (o = a = t, r) : a
                }, r.y0 = function(t) {
                    return arguments.length ? (o = t, r) : o
                }, r.y1 = function(t) {
                    return arguments.length ? (a = t, r) : a
                }, r.defined = function(t) {
                    return arguments.length ? (i = t, r) : i
                }, r.interpolate = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? s = t : (s = Fc.get(t) || wa).key, l = s.reverse || s, u = s.closed ? "M" : "L", r) : c
                }, r.tension = function(t) {
                    return arguments.length ? (d = t, r) : d
                }, r
            }

            function Ua(t) {
                return t.radius
            }

            function Ga(t) {
                return [t.x, t.y]
            }

            function Ba(t) {
                return function() {
                    var r = t.apply(this, arguments),
                        e = r[0],
                        n = r[1] - Ii;
                    return [e * Math.cos(n), e * Math.sin(n)]
                }
            }

            function Ha() {
                return 64
            }

            function Va() {
                return "circle"
            }

            function Ya(t) {
                var r = Math.sqrt(t / Ti);
                return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z"
            }

            function Za(t) {
                return function() {
                    var r, e;
                    (r = this[t]) && (e = r[r.active]) && (--r.count ? delete r[r.active] : delete this[t], r.active += .5, e.event && e.event.interrupt.call(this, this.__data__, e.index))
                }
            }

            function $a(t, r, e) {
                return _i(t, Uc), t.namespace = r, t.id = e, t
            }

            function Ja(t, r, e, n) {
                var o = t.id,
                    a = t.namespace;
                return Z(t, "function" == typeof e ? function(t, i, s) {
                    t[a][o].tween.set(r, n(e.call(t, t.__data__, i, s)))
                } : (e = n(e), function(t) {
                    t[a][o].tween.set(r, e)
                }))
            }

            function Xa(t) {
                return null == t && (t = ""),
                    function() {
                        this.textContent = t
                    }
            }

            function Ka(t) {
                return null == t ? "__transition__" : "__transition_" + t + "__"
            }

            function Qa(t, r, e, n, o) {
                var a = t[e] || (t[e] = {
                        active: 0,
                        count: 0
                    }),
                    i = a[n];
                if (!i) {
                    var s = o.time;
                    i = a[n] = {
                        tween: new p,
                        time: s,
                        delay: o.delay,
                        duration: o.duration,
                        ease: o.ease,
                        index: r
                    }, o = null, ++a.count, si.timer(function(o) {
                        function c(e) {
                            if (a.active > n) return u();
                            var o = a[a.active];
                            o && (--a.count, delete a[a.active], o.event && o.event.interrupt.call(t, t.__data__, o.index)), a.active = n, i.event && i.event.start.call(t, t.__data__, r), i.tween.forEach(function(e, n) {
                                (n = n.call(t, t.__data__, r)) && f.push(n)
                            }), m = i.ease, d = i.duration, si.timer(function() {
                                return p.c = l(e || 1) ? zr : l, 1
                            }, 0, s)
                        }

                        function l(e) {
                            if (a.active !== n) return 1;
                            for (var o = e / d, s = m(o), c = f.length; c > 0;) f[--c].call(t, s);
                            return o >= 1 ? (i.event && i.event.end.call(t, t.__data__, r), u()) : void 0
                        }

                        function u() {
                            return --a.count ? delete a[n] : delete t[e], 1
                        }
                        var d, m, h = i.delay,
                            p = cs,
                            f = [];
                        return p.t = h + s, o >= h ? c(o - h) : void(p.c = c)
                    }, 0, s)
                }
            }

            function ti(t, r, e) {
                t.attr("transform", function(t) {
                    var n = r(t);
                    return "translate(" + (isFinite(n) ? n : e(t)) + ",0)"
                })
            }

            function ri(t, r, e) {
                t.attr("transform", function(t) {
                    var n = r(t);
                    return "translate(0," + (isFinite(n) ? n : e(t)) + ")"
                })
            }

            function ei(t) {
                return t.toISOString()
            }

            function ni(t, r, e) {
                function n(r) {
                    return t(r)
                }

                function o(t, e) {
                    var n = t[1] - t[0],
                        o = n / e,
                        a = si.bisect(Xc, o);
                    return a == Xc.length ? [r.year, Ko(t.map(function(t) {
                        return t / 31536e6
                    }), e)[2]] : a ? r[o / Xc[a - 1] < Xc[a] / o ? a - 1 : a] : [tl, Ko(t, e)[2]]
                }
                return n.invert = function(r) {
                    return oi(t.invert(r))
                }, n.domain = function(r) {
                    return arguments.length ? (t.domain(r), n) : t.domain().map(oi)
                }, n.nice = function(t, r) {
                    function e(e) {
                        return !isNaN(e) && !t.range(e, oi(+e + 1), r).length
                    }
                    var a = n.domain(),
                        i = Go(a),
                        s = null == t ? o(i, 10) : "number" == typeof t && o(i, t);
                    return s && (t = s[0], r = s[1]), n.domain(Vo(a, r > 1 ? {
                        floor: function(r) {
                            for (; e(r = t.floor(r));) r = oi(r - 1);
                            return r
                        },
                        ceil: function(r) {
                            for (; e(r = t.ceil(r));) r = oi(+r + 1);
                            return r
                        }
                    } : t))
                }, n.ticks = function(t, r) {
                    var e = Go(n.domain()),
                        a = null == t ? o(e, 10) : "number" == typeof t ? o(e, t) : !t.range && [{
                            range: t
                        }, r];
                    return a && (t = a[0], r = a[1]), t.range(e[0], oi(+e[1] + 1), 1 > r ? 1 : r)
                }, n.tickFormat = function() {
                    return e
                }, n.copy = function() {
                    return ni(t.copy(), r, e)
                }, Jo(n, t)
            }

            function oi(t) {
                return new Date(t)
            }

            function ai(t) {
                return JSON.parse(t.responseText)
            }

            function ii(t) {
                var r = ui.createRange();
                return r.selectNode(ui.body), r.createContextualFragment(t.responseText)
            }
            var si = {
                    version: "3.5.6"
                },
                ci = [].slice,
                li = function(t) {
                    return ci.call(t)
                },
                ui = this.document;
            if (ui) try {
                li(ui.documentElement.childNodes)[0].nodeType
            } catch (di) {
                li = function(t) {
                    for (var r = t.length, e = new Array(r); r--;) e[r] = t[r];
                    return e
                }
            }
            if (Date.now || (Date.now = function() {
                    return +new Date
                }), ui) try {
                ui.createElement("DIV").style.setProperty("opacity", 0, "")
            } catch (mi) {
                var hi = this.Element.prototype,
                    pi = hi.setAttribute,
                    fi = hi.setAttributeNS,
                    gi = this.CSSStyleDeclaration.prototype,
                    yi = gi.setProperty;
                hi.setAttribute = function(t, r) {
                    pi.call(this, t, r + "")
                }, hi.setAttributeNS = function(t, r, e) {
                    fi.call(this, t, r, e + "")
                }, gi.setProperty = function(t, r, e) {
                    yi.call(this, t, r + "", e)
                }
            }
            si.ascending = s, si.descending = function(t, r) {
                return t > r ? -1 : r > t ? 1 : r >= t ? 0 : NaN
            }, si.min = function(t, r) {
                var e, n, o = -1,
                    a = t.length;
                if (1 === arguments.length) {
                    for (; ++o < a;)
                        if (null != (n = t[o]) && n >= n) {
                            e = n;
                            break
                        }
                    for (; ++o < a;) null != (n = t[o]) && e > n && (e = n)
                } else {
                    for (; ++o < a;)
                        if (null != (n = r.call(t, t[o], o)) && n >= n) {
                            e = n;
                            break
                        }
                    for (; ++o < a;) null != (n = r.call(t, t[o], o)) && e > n && (e = n)
                }
                return e
            }, si.max = function(t, r) {
                var e, n, o = -1,
                    a = t.length;
                if (1 === arguments.length) {
                    for (; ++o < a;)
                        if (null != (n = t[o]) && n >= n) {
                            e = n;
                            break
                        }
                    for (; ++o < a;) null != (n = t[o]) && n > e && (e = n)
                } else {
                    for (; ++o < a;)
                        if (null != (n = r.call(t, t[o], o)) && n >= n) {
                            e = n;
                            break
                        }
                    for (; ++o < a;) null != (n = r.call(t, t[o], o)) && n > e && (e = n)
                }
                return e
            }, si.extent = function(t, r) {
                var e, n, o, a = -1,
                    i = t.length;
                if (1 === arguments.length) {
                    for (; ++a < i;)
                        if (null != (n = t[a]) && n >= n) {
                            e = o = n;
                            break
                        }
                    for (; ++a < i;) null != (n = t[a]) && (e > n && (e = n), n > o && (o = n))
                } else {
                    for (; ++a < i;)
                        if (null != (n = r.call(t, t[a], a)) && n >= n) {
                            e = o = n;
                            break
                        }
                    for (; ++a < i;) null != (n = r.call(t, t[a], a)) && (e > n && (e = n), n > o && (o = n))
                }
                return [e, o]
            }, si.sum = function(t, r) {
                var e, n = 0,
                    o = t.length,
                    a = -1;
                if (1 === arguments.length)
                    for (; ++a < o;) l(e = +t[a]) && (n += e);
                else
                    for (; ++a < o;) l(e = +r.call(t, t[a], a)) && (n += e);
                return n
            }, si.mean = function(t, r) {
                var e, n = 0,
                    o = t.length,
                    a = -1,
                    i = o;
                if (1 === arguments.length)
                    for (; ++a < o;) l(e = c(t[a])) ? n += e : --i;
                else
                    for (; ++a < o;) l(e = c(r.call(t, t[a], a))) ? n += e : --i;
                return i ? n / i : void 0
            }, si.quantile = function(t, r) {
                var e = (t.length - 1) * r + 1,
                    n = Math.floor(e),
                    o = +t[n - 1],
                    a = e - n;
                return a ? o + a * (t[n] - o) : o
            }, si.median = function(t, r) {
                var e, n = [],
                    o = t.length,
                    a = -1;
                if (1 === arguments.length)
                    for (; ++a < o;) l(e = c(t[a])) && n.push(e);
                else
                    for (; ++a < o;) l(e = c(r.call(t, t[a], a))) && n.push(e);
                return n.length ? si.quantile(n.sort(s), .5) : void 0
            }, si.variance = function(t, r) {
                var e, n, o = t.length,
                    a = 0,
                    i = 0,
                    s = -1,
                    u = 0;
                if (1 === arguments.length)
                    for (; ++s < o;) l(e = c(t[s])) && (n = e - a, a += n / ++u, i += n * (e - a));
                else
                    for (; ++s < o;) l(e = c(r.call(t, t[s], s))) && (n = e - a, a += n / ++u, i += n * (e - a));
                return u > 1 ? i / (u - 1) : void 0
            }, si.deviation = function() {
                var t = si.variance.apply(this, arguments);
                return t ? Math.sqrt(t) : t
            };
            var vi = u(s);
            si.bisectLeft = vi.left, si.bisect = si.bisectRight = vi.right, si.bisector = function(t) {
                return u(1 === t.length ? function(r, e) {
                    return s(t(r), e)
                } : t)
            }, si.shuffle = function(t, r, e) {
                (a = arguments.length) < 3 && (e = t.length, 2 > a && (r = 0));
                for (var n, o, a = e - r; a;) o = Math.random() * a-- | 0, n = t[a + r], t[a + r] = t[o + r], t[o + r] = n;
                return t
            }, si.permute = function(t, r) {
                for (var e = r.length, n = new Array(e); e--;) n[e] = t[r[e]];
                return n
            }, si.pairs = function(t) {
                for (var r, e = 0, n = t.length - 1, o = t[0], a = new Array(0 > n ? 0 : n); n > e;) a[e] = [r = o, o = t[++e]];
                return a
            }, si.zip = function() {
                if (!(n = arguments.length)) return [];
                for (var t = -1, r = si.min(arguments, d), e = new Array(r); ++t < r;)
                    for (var n, o = -1, a = e[t] = new Array(n); ++o < n;) a[o] = arguments[o][t];
                return e
            }, si.transpose = function(t) {
                return si.zip.apply(si, t)
            }, si.keys = function(t) {
                var r = [];
                for (var e in t) r.push(e);
                return r
            }, si.values = function(t) {
                var r = [];
                for (var e in t) r.push(t[e]);
                return r
            }, si.entries = function(t) {
                var r = [];
                for (var e in t) r.push({
                    key: e,
                    value: t[e]
                });
                return r
            }, si.merge = function(t) {
                for (var r, e, n, o = t.length, a = -1, i = 0; ++a < o;) i += t[a].length;
                for (e = new Array(i); --o >= 0;)
                    for (n = t[o], r = n.length; --r >= 0;) e[--i] = n[r];
                return e
            };
            var xi = Math.abs;
            si.range = function(t, r, e) {
                if (arguments.length < 3 && (e = 1, arguments.length < 2 && (r = t, t = 0)), (r - t) / e === 1 / 0) throw new Error("infinite range");
                var n, o = [],
                    a = m(xi(e)),
                    i = -1;
                if (t *= a, r *= a, e *= a, 0 > e)
                    for (;
                        (n = t + e * ++i) > r;) o.push(n / a);
                else
                    for (;
                        (n = t + e * ++i) < r;) o.push(n / a);
                return o
            }, si.map = function(t, r) {
                var e = new p;
                if (t instanceof p) t.forEach(function(t, r) {
                    e.set(t, r)
                });
                else if (Array.isArray(t)) {
                    var n, o = -1,
                        a = t.length;
                    if (1 === arguments.length)
                        for (; ++o < a;) e.set(o, t[o]);
                    else
                        for (; ++o < a;) e.set(r.call(t, n = t[o], o), n)
                } else
                    for (var i in t) e.set(i, t[i]);
                return e
            };
            var wi = "__proto__",
                bi = "\x00";
            h(p, {
                has: y,
                get: function(t) {
                    return this._[f(t)]
                },
                set: function(t, r) {
                    return this._[f(t)] = r
                },
                remove: v,
                keys: x,
                values: function() {
                    var t = [];
                    for (var r in this._) t.push(this._[r]);
                    return t
                },
                entries: function() {
                    var t = [];
                    for (var r in this._) t.push({
                        key: g(r),
                        value: this._[r]
                    });
                    return t
                },
                size: w,
                empty: b,
                forEach: function(t) {
                    for (var r in this._) t.call(this, g(r), this._[r])
                }
            }), si.nest = function() {
                function t(r, i, s) {
                    if (s >= a.length) return n ? n.call(o, i) : e ? i.sort(e) : i;
                    for (var c, l, u, d, m = -1, h = i.length, f = a[s++], g = new p; ++m < h;)(d = g.get(c = f(l = i[m]))) ? d.push(l) : g.set(c, [l]);
                    return r ? (l = r(), u = function(e, n) {
                        l.set(e, t(r, n, s))
                    }) : (l = {}, u = function(e, n) {
                        l[e] = t(r, n, s)
                    }), g.forEach(u), l
                }

                function r(t, e) {
                    if (e >= a.length) return t;
                    var n = [],
                        o = i[e++];
                    return t.forEach(function(t, o) {
                        n.push({
                            key: t,
                            values: r(o, e)
                        })
                    }), o ? n.sort(function(t, r) {
                        return o(t.key, r.key)
                    }) : n
                }
                var e, n, o = {},
                    a = [],
                    i = [];
                return o.map = function(r, e) {
                    return t(e, r, 0)
                }, o.entries = function(e) {
                    return r(t(si.map, e, 0), 0)
                }, o.key = function(t) {
                    return a.push(t), o
                }, o.sortKeys = function(t) {
                    return i[a.length - 1] = t, o
                }, o.sortValues = function(t) {
                    return e = t, o
                }, o.rollup = function(t) {
                    return n = t, o
                }, o
            }, si.set = function(t) {
                var r = new M;
                if (t)
                    for (var e = 0, n = t.length; n > e; ++e) r.add(t[e]);
                return r
            }, h(M, {
                has: y,
                add: function(t) {
                    return this._[f(t += "")] = !0, t
                },
                remove: v,
                values: x,
                size: w,
                empty: b,
                forEach: function(t) {
                    for (var r in this._) t.call(this, g(r))
                }
            }), si.behavior = {}, si.rebind = function(t, r) {
                for (var e, n = 1, o = arguments.length; ++n < o;) t[e = arguments[n]] = _(t, r, r[e]);
                return t
            };
            var Mi = ["webkit", "ms", "moz", "Moz", "o", "O"];
            si.dispatch = function() {
                for (var t = new E, r = -1, e = arguments.length; ++r < e;) t[arguments[r]] = A(t);
                return t
            }, E.prototype.on = function(t, r) {
                var e = t.indexOf("."),
                    n = "";
                if (e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), t) return arguments.length < 2 ? this[t].on(n) : this[t].on(n, r);
                if (2 === arguments.length) {
                    if (null == r)
                        for (t in this) this.hasOwnProperty(t) && this[t].on(n, null);
                    return this
                }
            }, si.event = null, si.requote = function(t) {
                return t.replace(ki, "\\$&")
            };
            var ki = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
                _i = {}.__proto__ ? function(t, r) {
                    t.__proto__ = r
                } : function(t, r) {
                    for (var e in r) t[e] = r[e]
                },
                Ni = function(t, r) {
                    return r.querySelector(t)
                },
                Pi = function(t, r) {
                    return r.querySelectorAll(t)
                },
                Ei = function(t, r) {
                    var e = t.matches || t[N(t, "matchesSelector")];
                    return (Ei = function(t, r) {
                        return e.call(t, r)
                    })(t, r)
                };
            "function" == typeof Sizzle && (Ni = function(t, r) {
                return Sizzle(t, r)[0] || null
            }, Pi = Sizzle, Ei = Sizzle.matchesSelector), si.selection = function() {
                return si.select(ui.documentElement)
            };
            var Ai = si.selection.prototype = [];
            Ai.select = function(t) {
                var r, e, n, o, a = [];
                t = z(t);
                for (var i = -1, s = this.length; ++i < s;) {
                    a.push(r = []), r.parentNode = (n = this[i]).parentNode;
                    for (var c = -1, l = n.length; ++c < l;)(o = n[c]) ? (r.push(e = t.call(o, o.__data__, c, i)), e && "__data__" in o && (e.__data__ = o.__data__)) : r.push(null)
                }
                return F(a)
            }, Ai.selectAll = function(t) {
                var r, e, n = [];
                t = j(t);
                for (var o = -1, a = this.length; ++o < a;)
                    for (var i = this[o], s = -1, c = i.length; ++s < c;)(e = i[s]) && (n.push(r = li(t.call(e, e.__data__, s, o))), r.parentNode = e);
                return F(n)
            };
            var Ci = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: "http://www.w3.org/1999/xhtml",
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };
            si.ns = {
                prefix: Ci,
                qualify: function(t) {
                    var r = t.indexOf(":"),
                        e = t;
                    return r >= 0 && (e = t.slice(0, r), t = t.slice(r + 1)), Ci.hasOwnProperty(e) ? {
                        space: Ci[e],
                        local: t
                    } : t
                }
            }, Ai.attr = function(t, r) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) {
                        var e = this.node();
                        return t = si.ns.qualify(t), t.local ? e.getAttributeNS(t.space, t.local) : e.getAttribute(t)
                    }
                    for (r in t) this.each(q(r, t[r]));
                    return this
                }
                return this.each(q(t, r))
            }, Ai.classed = function(t, r) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) {
                        var e = this.node(),
                            n = (t = R(t)).length,
                            o = -1;
                        if (r = e.classList) {
                            for (; ++o < n;)
                                if (!r.contains(t[o])) return !1
                        } else
                            for (r = e.getAttribute("class"); ++o < n;)
                                if (!T(t[o]).test(r)) return !1; return !0
                    }
                    for (r in t) this.each(D(r, t[r]));
                    return this
                }
                return this.each(D(t, r))
            }, Ai.style = function(t, r, e) {
                var n = arguments.length;
                if (3 > n) {
                    if ("string" != typeof t) {
                        2 > n && (r = "");
                        for (e in t) this.each(W(e, t[e], r));
                        return this
                    }
                    if (2 > n) {
                        var o = this.node();
                        return i(o).getComputedStyle(o, null).getPropertyValue(t)
                    }
                    e = ""
                }
                return this.each(W(t, r, e))
            }, Ai.property = function(t, r) {
                if (arguments.length < 2) {
                    if ("string" == typeof t) return this.node()[t];
                    for (r in t) this.each(U(r, t[r]));
                    return this
                }
                return this.each(U(t, r))
            }, Ai.text = function(t) {
                return arguments.length ? this.each("function" == typeof t ? function() {
                    var r = t.apply(this, arguments);
                    this.textContent = null == r ? "" : r
                } : null == t ? function() {
                    this.textContent = ""
                } : function() {
                    this.textContent = t
                }) : this.node().textContent
            }, Ai.html = function(t) {
                return arguments.length ? this.each("function" == typeof t ? function() {
                    var r = t.apply(this, arguments);
                    this.innerHTML = null == r ? "" : r
                } : null == t ? function() {
                    this.innerHTML = ""
                } : function() {
                    this.innerHTML = t
                }) : this.node().innerHTML
            }, Ai.append = function(t) {
                return t = G(t), this.select(function() {
                    return this.appendChild(t.apply(this, arguments))
                })
            }, Ai.insert = function(t, r) {
                return t = G(t), r = z(r), this.select(function() {
                    return this.insertBefore(t.apply(this, arguments), r.apply(this, arguments) || null)
                })
            }, Ai.remove = function() {
                return this.each(B)
            }, Ai.data = function(t, r) {
                function e(t, e) {
                    var n, o, a, i = t.length,
                        u = e.length,
                        d = Math.min(i, u),
                        m = new Array(u),
                        h = new Array(u),
                        f = new Array(i);
                    if (r) {
                        var g, y = new p,
                            v = new Array(i);
                        for (n = -1; ++n < i;) y.has(g = r.call(o = t[n], o.__data__, n)) ? f[n] = o : y.set(g, o), v[n] = g;
                        for (n = -1; ++n < u;)(o = y.get(g = r.call(e, a = e[n], n))) ? o !== !0 && (m[n] = o, o.__data__ = a) : h[n] = H(a), y.set(g, !0);
                        for (n = -1; ++n < i;) y.get(v[n]) !== !0 && (f[n] = t[n])
                    } else {
                        for (n = -1; ++n < d;) o = t[n], a = e[n], o ? (o.__data__ = a, m[n] = o) : h[n] = H(a);
                        for (; u > n; ++n) h[n] = H(e[n]);
                        for (; i > n; ++n) f[n] = t[n]
                    }
                    h.update = m, h.parentNode = m.parentNode = f.parentNode = t.parentNode, s.push(h), c.push(m), l.push(f)
                }
                var n, o, a = -1,
                    i = this.length;
                if (!arguments.length) {
                    for (t = new Array(i = (n = this[0]).length); ++a < i;)(o = n[a]) && (t[a] = o.__data__);
                    return t
                }
                var s = $([]),
                    c = F([]),
                    l = F([]);
                if ("function" == typeof t)
                    for (; ++a < i;) e(n = this[a], t.call(n, n.parentNode.__data__, a));
                else
                    for (; ++a < i;) e(n = this[a], t);
                return c.enter = function() {
                    return s
                }, c.exit = function() {
                    return l
                }, c
            }, Ai.datum = function(t) {
                return arguments.length ? this.property("__data__", t) : this.property("__data__")
            }, Ai.filter = function(t) {
                var r, e, n, o = [];
                "function" != typeof t && (t = V(t));
                for (var a = 0, i = this.length; i > a; a++) {
                    o.push(r = []), r.parentNode = (e = this[a]).parentNode;
                    for (var s = 0, c = e.length; c > s; s++)(n = e[s]) && t.call(n, n.__data__, s, a) && r.push(n)
                }
                return F(o)
            }, Ai.order = function() {
                for (var t = -1, r = this.length; ++t < r;)
                    for (var e, n = this[t], o = n.length - 1, a = n[o]; --o >= 0;)(e = n[o]) && (a && a !== e.nextSibling && a.parentNode.insertBefore(e, a), a = e);
                return this
            }, Ai.sort = function(t) {
                t = Y.apply(this, arguments);
                for (var r = -1, e = this.length; ++r < e;) this[r].sort(t);
                return this.order()
            }, Ai.each = function(t) {
                return Z(this, function(r, e, n) {
                    t.call(r, r.__data__, e, n)
                })
            }, Ai.call = function(t) {
                var r = li(arguments);
                return t.apply(r[0] = this, r), this
            }, Ai.empty = function() {
                return !this.node()
            }, Ai.node = function() {
                for (var t = 0, r = this.length; r > t; t++)
                    for (var e = this[t], n = 0, o = e.length; o > n; n++) {
                        var a = e[n];
                        if (a) return a
                    }
                return null
            }, Ai.size = function() {
                var t = 0;
                return Z(this, function() {
                    ++t
                }), t
            };
            var Si = [];
            si.selection.enter = $, si.selection.enter.prototype = Si, Si.append = Ai.append, Si.empty = Ai.empty, Si.node = Ai.node, Si.call = Ai.call, Si.size = Ai.size, Si.select = function(t) {
                for (var r, e, n, o, a, i = [], s = -1, c = this.length; ++s < c;) {
                    n = (o = this[s]).update, i.push(r = []), r.parentNode = o.parentNode;
                    for (var l = -1, u = o.length; ++l < u;)(a = o[l]) ? (r.push(n[l] = e = t.call(o.parentNode, a.__data__, l, s)), e.__data__ = a.__data__) : r.push(null)
                }
                return F(i)
            }, Si.insert = function(t, r) {
                return arguments.length < 2 && (r = J(this)), Ai.insert.call(this, t, r)
            }, si.select = function(t) {
                var r;
                return "string" == typeof t ? (r = [Ni(t, ui)], r.parentNode = ui.documentElement) : (r = [t], r.parentNode = a(t)), F([r])
            }, si.selectAll = function(t) {
                var r;
                return "string" == typeof t ? (r = li(Pi(t, ui)), r.parentNode = ui.documentElement) : (r = t, r.parentNode = null), F([r])
            }, Ai.on = function(t, r, e) {
                var n = arguments.length;
                if (3 > n) {
                    if ("string" != typeof t) {
                        2 > n && (r = !1);
                        for (e in t) this.each(X(e, t[e], r));
                        return this
                    }
                    if (2 > n) return (n = this.node()["__on" + t]) && n._;
                    e = !1
                }
                return this.each(X(t, r, e))
            };
            var Oi = si.map({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            });
            ui && Oi.forEach(function(t) {
                "on" + t in ui && Oi.remove(t)
            });
            var Fi, zi = 0;
            si.mouse = function(t) {
                return rt(t, S())
            };
            var ji = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
            si.touch = function(t, r, e) {
                if (arguments.length < 3 && (e = r, r = S().changedTouches), r)
                    for (var n, o = 0, a = r.length; a > o; ++o)
                        if ((n = r[o]).identifier === e) return rt(t, n)
            }, si.behavior.drag = function() {
                function t() {
                    this.on("mousedown.drag", o).on("touchstart.drag", a)
                }

                function r(t, r, o, a, i) {
                    return function() {
                        function s() {
                            var t, e, n = r(m, f);
                            n && (t = n[0] - x[0], e = n[1] - x[1], p |= t | e, x = n, h({
                                type: "drag",
                                x: n[0] + l[0],
                                y: n[1] + l[1],
                                dx: t,
                                dy: e
                            }))
                        }

                        function c() {
                            r(m, f) && (y.on(a + g, null).on(i + g, null), v(p && si.event.target === d), h({
                                type: "dragend"
                            }))
                        }
                        var l, u = this,
                            d = si.event.target,
                            m = u.parentNode,
                            h = e.of(u, arguments),
                            p = 0,
                            f = t(),
                            g = ".drag" + (null == f ? "" : "-" + f),
                            y = si.select(o(d)).on(a + g, s).on(i + g, c),
                            v = tt(d),
                            x = r(m, f);
                        n ? (l = n.apply(u, arguments), l = [l.x - x[0], l.y - x[1]]) : l = [0, 0], h({
                            type: "dragstart"
                        })
                    }
                }
                var e = O(t, "drag", "dragstart", "dragend"),
                    n = null,
                    o = r(P, si.mouse, i, "mousemove", "mouseup"),
                    a = r(et, si.touch, k, "touchmove", "touchend");
                return t.origin = function(r) {
                    return arguments.length ? (n = r, t) : n
                }, si.rebind(t, e, "on")
            }, si.touches = function(t, r) {
                return arguments.length < 2 && (r = S().touches), r ? li(r).map(function(r) {
                    var e = rt(t, r);
                    return e.identifier = r.identifier, e
                }) : []
            };
            var qi = 1e-6,
                Li = qi * qi,
                Ti = Math.PI,
                Ri = 2 * Ti,
                Di = Ri - qi,
                Ii = Ti / 2,
                Wi = Ti / 180,
                Ui = 180 / Ti,
                Gi = Math.SQRT2,
                Bi = 2,
                Hi = 4;
            si.interpolateZoom = function(t, r) {
                function e(t) {
                    var r = t * v;
                    if (y) {
                        var e = ct(f),
                            i = a / (Bi * m) * (e * lt(Gi * r + f) - st(f));
                        return [n + i * l, o + i * u, a * e / ct(Gi * r + f)]
                    }
                    return [n + t * l, o + t * u, a * Math.exp(Gi * r)]
                }
                var n = t[0],
                    o = t[1],
                    a = t[2],
                    i = r[0],
                    s = r[1],
                    c = r[2],
                    l = i - n,
                    u = s - o,
                    d = l * l + u * u,
                    m = Math.sqrt(d),
                    h = (c * c - a * a + Hi * d) / (2 * a * Bi * m),
                    p = (c * c - a * a - Hi * d) / (2 * c * Bi * m),
                    f = Math.log(Math.sqrt(h * h + 1) - h),
                    g = Math.log(Math.sqrt(p * p + 1) - p),
                    y = g - f,
                    v = (y || Math.log(c / a)) / Gi;
                return e.duration = 1e3 * v, e
            }, si.behavior.zoom = function() {
                function t(t) {
                    t.on(S, d).on(Yi + ".zoom", h).on("dblclick.zoom", p).on(j, m)
                }

                function r(t) {
                    return [(t[0] - _.x) / _.k, (t[1] - _.y) / _.k]
                }

                function e(t) {
                    return [t[0] * _.k + _.x, t[1] * _.k + _.y]
                }

                function n(t) {
                    _.k = Math.max(P[0], Math.min(P[1], t))
                }

                function o(t, r) {
                    r = e(r), _.x += t[0] - r[0], _.y += t[1] - r[1]
                }

                function a(r, e, a, i) {
                    r.__chart__ = {
                        x: _.x,
                        y: _.y,
                        k: _.k
                    }, n(Math.pow(2, i)), o(g = e, a), r = si.select(r), E > 0 && (r = r.transition().duration(E)), r.call(t.event)
                }

                function s() {
                    b && b.domain(w.range().map(function(t) {
                        return (t - _.x) / _.k
                    }).map(w.invert)), k && k.domain(M.range().map(function(t) {
                        return (t - _.y) / _.k
                    }).map(M.invert))
                }

                function c(t) {
                    A++ || t({
                        type: "zoomstart"
                    })
                }

                function l(t) {
                    s(), t({
                        type: "zoom",
                        scale: _.k,
                        translate: [_.x, _.y]
                    })
                }

                function u(t) {
                    --A || (t({
                        type: "zoomend"
                    }), g = null)
                }

                function d() {
                    function t() {
                        d = 1, o(si.mouse(n), h), l(s)
                    }

                    function e() {
                        m.on(F, null).on(z, null), p(d && si.event.target === a), u(s)
                    }
                    var n = this,
                        a = si.event.target,
                        s = q.of(n, arguments),
                        d = 0,
                        m = si.select(i(n)).on(F, t).on(z, e),
                        h = r(si.mouse(n)),
                        p = tt(n);
                    Wc.call(n), c(s)
                }

                function m() {
                    function t() {
                        var t = si.touches(p);
                        return h = _.k, t.forEach(function(t) {
                            t.identifier in g && (g[t.identifier] = r(t))
                        }), t
                    }

                    function e() {
                        var r = si.event.target;
                        si.select(r).on(w, i).on(b, s), M.push(r);
                        for (var e = si.event.changedTouches, n = 0, o = e.length; o > n; ++n) g[e[n].identifier] = null;
                        var c = t(),
                            l = Date.now();
                        if (1 === c.length) {
                            if (500 > l - x) {
                                var u = c[0];
                                a(p, u, g[u.identifier], Math.floor(Math.log(_.k) / Math.LN2) + 1), C()
                            }
                            x = l
                        } else if (c.length > 1) {
                            var u = c[0],
                                d = c[1],
                                m = u[0] - d[0],
                                h = u[1] - d[1];
                            y = m * m + h * h
                        }
                    }

                    function i() {
                        var t, r, e, a, i = si.touches(p);
                        Wc.call(p);
                        for (var s = 0, c = i.length; c > s; ++s, a = null)
                            if (e = i[s], a = g[e.identifier]) {
                                if (r) break;
                                t = e, r = a
                            }
                        if (a) {
                            var u = (u = e[0] - t[0]) * u + (u = e[1] - t[1]) * u,
                                d = y && Math.sqrt(u / y);
                            t = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2], r = [(r[0] + a[0]) / 2, (r[1] + a[1]) / 2], n(d * h)
                        }
                        x = null, o(t, r), l(f)
                    }

                    function s() {
                        if (si.event.touches.length) {
                            for (var r = si.event.changedTouches, e = 0, n = r.length; n > e; ++e) delete g[r[e].identifier];
                            for (var o in g) return void t()
                        }
                        si.selectAll(M).on(v, null), k.on(S, d).on(j, m), N(), u(f)
                    }
                    var h, p = this,
                        f = q.of(p, arguments),
                        g = {},
                        y = 0,
                        v = ".zoom-" + si.event.changedTouches[0].identifier,
                        w = "touchmove" + v,
                        b = "touchend" + v,
                        M = [],
                        k = si.select(p),
                        N = tt(p);
                    e(), c(f), k.on(S, null).on(j, e)
                }

                function h() {
                    var t = q.of(this, arguments);
                    v ? clearTimeout(v) : (Wc.call(this), f = r(g = y || si.mouse(this)), c(t)), v = setTimeout(function() {
                        v = null, u(t)
                    }, 50), C(), n(Math.pow(2, .002 * Vi()) * _.k), o(g, f), l(t)
                }

                function p() {
                    var t = si.mouse(this),
                        e = Math.log(_.k) / Math.LN2;
                    a(this, t, r(t), si.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1)
                }
                var f, g, y, v, x, w, b, M, k, _ = {
                        x: 0,
                        y: 0,
                        k: 1
                    },
                    N = [960, 500],
                    P = Zi,
                    E = 250,
                    A = 0,
                    S = "mousedown.zoom",
                    F = "mousemove.zoom",
                    z = "mouseup.zoom",
                    j = "touchstart.zoom",
                    q = O(t, "zoomstart", "zoom", "zoomend");
                return Yi || (Yi = "onwheel" in ui ? (Vi = function() {
                    return -si.event.deltaY * (si.event.deltaMode ? 120 : 1)
                }, "wheel") : "onmousewheel" in ui ? (Vi = function() {
                    return si.event.wheelDelta
                }, "mousewheel") : (Vi = function() {
                    return -si.event.detail
                }, "MozMousePixelScroll")), t.event = function(t) {
                    t.each(function() {
                        var t = q.of(this, arguments),
                            r = _;
                        Dc ? si.select(this).transition().each("start.zoom", function() {
                            _ = this.__chart__ || {
                                x: 0,
                                y: 0,
                                k: 1
                            }, c(t)
                        }).tween("zoom:zoom", function() {
                            var e = N[0],
                                n = N[1],
                                o = g ? g[0] : e / 2,
                                a = g ? g[1] : n / 2,
                                i = si.interpolateZoom([(o - _.x) / _.k, (a - _.y) / _.k, e / _.k], [(o - r.x) / r.k, (a - r.y) / r.k, e / r.k]);
                            return function(r) {
                                var n = i(r),
                                    s = e / n[2];
                                this.__chart__ = _ = {
                                    x: o - n[0] * s,
                                    y: a - n[1] * s,
                                    k: s
                                }, l(t)
                            }
                        }).each("interrupt.zoom", function() {
                            u(t)
                        }).each("end.zoom", function() {
                            u(t)
                        }) : (this.__chart__ = _, c(t), l(t), u(t))
                    })
                }, t.translate = function(r) {
                    return arguments.length ? (_ = {
                        x: +r[0],
                        y: +r[1],
                        k: _.k
                    }, s(), t) : [_.x, _.y]
                }, t.scale = function(r) {
                    return arguments.length ? (_ = {
                        x: _.x,
                        y: _.y,
                        k: +r
                    }, s(), t) : _.k
                }, t.scaleExtent = function(r) {
                    return arguments.length ? (P = null == r ? Zi : [+r[0], +r[1]], t) : P
                }, t.center = function(r) {
                    return arguments.length ? (y = r && [+r[0], +r[1]], t) : y
                }, t.size = function(r) {
                    return arguments.length ? (N = r && [+r[0], +r[1]], t) : N
                }, t.duration = function(r) {
                    return arguments.length ? (E = +r, t) : E
                }, t.x = function(r) {
                    return arguments.length ? (b = r, w = r.copy(), _ = {
                        x: 0,
                        y: 0,
                        k: 1
                    }, t) : b
                }, t.y = function(r) {
                    return arguments.length ? (k = r, M = r.copy(), _ = {
                        x: 0,
                        y: 0,
                        k: 1
                    }, t) : k
                }, si.rebind(t, q, "on")
            };
            var Vi, Yi, Zi = [0, 1 / 0];
            si.color = dt, dt.prototype.toString = function() {
                return this.rgb() + ""
            }, si.hsl = mt;
            var $i = mt.prototype = new dt;
            $i.brighter = function(t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new mt(this.h, this.s, this.l / t)
            }, $i.darker = function(t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new mt(this.h, this.s, t * this.l)
            }, $i.rgb = function() {
                return ht(this.h, this.s, this.l)
            }, si.hcl = pt;
            var Ji = pt.prototype = new dt;
            Ji.brighter = function(t) {
                return new pt(this.h, this.c, Math.min(100, this.l + Xi * (arguments.length ? t : 1)))
            }, Ji.darker = function(t) {
                return new pt(this.h, this.c, Math.max(0, this.l - Xi * (arguments.length ? t : 1)))
            }, Ji.rgb = function() {
                return ft(this.h, this.c, this.l).rgb()
            }, si.lab = gt;
            var Xi = 18,
                Ki = .95047,
                Qi = 1,
                ts = 1.08883,
                rs = gt.prototype = new dt;
            rs.brighter = function(t) {
                return new gt(Math.min(100, this.l + Xi * (arguments.length ? t : 1)), this.a, this.b)
            }, rs.darker = function(t) {
                return new gt(Math.max(0, this.l - Xi * (arguments.length ? t : 1)), this.a, this.b)
            }, rs.rgb = function() {
                return yt(this.l, this.a, this.b)
            }, si.rgb = Mt;
            var es = Mt.prototype = new dt;
            es.brighter = function(t) {
                t = Math.pow(.7, arguments.length ? t : 1);
                var r = this.r,
                    e = this.g,
                    n = this.b,
                    o = 30;
                return r || e || n ? (r && o > r && (r = o), e && o > e && (e = o), n && o > n && (n = o), new Mt(Math.min(255, r / t), Math.min(255, e / t), Math.min(255, n / t))) : new Mt(o, o, o)
            }, es.darker = function(t) {
                return t = Math.pow(.7, arguments.length ? t : 1), new Mt(t * this.r, t * this.g, t * this.b)
            }, es.hsl = function() {
                return Et(this.r, this.g, this.b)
            }, es.toString = function() {
                return "#" + Nt(this.r) + Nt(this.g) + Nt(this.b)
            };
            var ns = si.map({
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            });
            ns.forEach(function(t, r) {
                ns.set(t, kt(r))
            }), si.functor = Ot, si.xhr = Ft(k), si.dsv = function(t, r) {
                function e(t, e, a) {
                    arguments.length < 3 && (a = e, e = null);
                    var i = zt(t, r, null == e ? n : o(e), a);
                    return i.row = function(t) {
                        return arguments.length ? i.response(null == (e = t) ? n : o(t)) : e
                    }, i
                }

                function n(t) {
                    return e.parse(t.responseText)
                }

                function o(t) {
                    return function(r) {
                        return e.parse(r.responseText, t)
                    }
                }

                function a(r) {
                    return r.map(i).join(t)
                }

                function i(t) {
                    return s.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
                }
                var s = new RegExp('["' + t + "\n]"),
                    c = t.charCodeAt(0);
                return e.parse = function(t, r) {
                    var n;
                    return e.parseRows(t, function(t, e) {
                        if (n) return n(t, e - 1);
                        var o = new Function("d", "return {" + t.map(function(t, r) {
                            return JSON.stringify(t) + ": d[" + r + "]"
                        }).join(",") + "}");
                        n = r ? function(t, e) {
                            return r(o(t), e)
                        } : o
                    })
                }, e.parseRows = function(t, r) {
                    function e() {
                        if (u >= l) return i;
                        if (o) return o = !1, a;
                        var r = u;
                        if (34 === t.charCodeAt(r)) {
                            for (var e = r; e++ < l;)
                                if (34 === t.charCodeAt(e)) {
                                    if (34 !== t.charCodeAt(e + 1)) break;
                                    ++e
                                }
                            u = e + 2;
                            var n = t.charCodeAt(e + 1);
                            return 13 === n ? (o = !0, 10 === t.charCodeAt(e + 2) && ++u) : 10 === n && (o = !0), t.slice(r + 1, e).replace(/""/g, '"')
                        }
                        for (; l > u;) {
                            var n = t.charCodeAt(u++),
                                s = 1;
                            if (10 === n) o = !0;
                            else if (13 === n) o = !0, 10 === t.charCodeAt(u) && (++u, ++s);
                            else if (n !== c) continue;
                            return t.slice(r, u - s)
                        }
                        return t.slice(r)
                    }
                    for (var n, o, a = {}, i = {}, s = [], l = t.length, u = 0, d = 0;
                        (n = e()) !== i;) {
                        for (var m = []; n !== a && n !== i;) m.push(n), n = e();
                        r && null == (m = r(m, d++)) || s.push(m)
                    }
                    return s
                }, e.format = function(r) {
                    if (Array.isArray(r[0])) return e.formatRows(r);
                    var n = new M,
                        o = [];
                    return r.forEach(function(t) {
                        for (var r in t) n.has(r) || o.push(n.add(r))
                    }), [o.map(i).join(t)].concat(r.map(function(r) {
                        return o.map(function(t) {
                            return i(r[t])
                        }).join(t)
                    })).join("\n")
                }, e.formatRows = function(t) {
                    return t.map(a).join("\n")
                }, e
            }, si.csv = si.dsv(",", "text/csv"), si.tsv = si.dsv("	", "text/tab-separated-values");
            var os, as, is, ss, cs, ls = this[N(this, "requestAnimationFrame")] || function(t) {
                setTimeout(t, 17)
            };
            si.timer = function(t, r, e) {
                var n = arguments.length;
                2 > n && (r = 0), 3 > n && (e = Date.now());
                var o = e + r,
                    a = {
                        c: t,
                        t: o,
                        f: !1,
                        n: null
                    };
                as ? as.n = a : os = a, as = a, is || (ss = clearTimeout(ss), is = 1, ls(Lt))
            }, si.timer.flush = function() {
                Tt(), Rt()
            }, si.round = function(t, r) {
                return r ? Math.round(t * (r = Math.pow(10, r))) / r : Math.round(t)
            };
            var us = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(It);
            si.formatPrefix = function(t, r) {
                var e = 0;
                return t && (0 > t && (t *= -1), r && (t = si.round(t, Dt(t, r))), e = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), us[8 + e / 3]
            };
            var ds = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
                ms = si.map({
                    b: function(t) {
                        return t.toString(2)
                    },
                    c: function(t) {
                        return String.fromCharCode(t)
                    },
                    o: function(t) {
                        return t.toString(8)
                    },
                    x: function(t) {
                        return t.toString(16)
                    },
                    X: function(t) {
                        return t.toString(16).toUpperCase()
                    },
                    g: function(t, r) {
                        return t.toPrecision(r)
                    },
                    e: function(t, r) {
                        return t.toExponential(r)
                    },
                    f: function(t, r) {
                        return t.toFixed(r)
                    },
                    r: function(t, r) {
                        return (t = si.round(t, Dt(t, r))).toFixed(Math.max(0, Math.min(20, Dt(t * (1 + 1e-15), r))))
                    }
                }),
                hs = si.time = {},
                ps = Date;
            Gt.prototype = {
                getDate: function() {
                    return this._.getUTCDate()
                },
                getDay: function() {
                    return this._.getUTCDay()
                },
                getFullYear: function() {
                    return this._.getUTCFullYear()
                },
                getHours: function() {
                    return this._.getUTCHours()
                },
                getMilliseconds: function() {
                    return this._.getUTCMilliseconds()
                },
                getMinutes: function() {
                    return this._.getUTCMinutes()
                },
                getMonth: function() {
                    return this._.getUTCMonth()
                },
                getSeconds: function() {
                    return this._.getUTCSeconds()
                },
                getTime: function() {
                    return this._.getTime()
                },
                getTimezoneOffset: function() {
                    return 0
                },
                valueOf: function() {
                    return this._.valueOf()
                },
                setDate: function() {
                    fs.setUTCDate.apply(this._, arguments)
                },
                setDay: function() {
                    fs.setUTCDay.apply(this._, arguments)
                },
                setFullYear: function() {
                    fs.setUTCFullYear.apply(this._, arguments)
                },
                setHours: function() {
                    fs.setUTCHours.apply(this._, arguments)
                },
                setMilliseconds: function() {
                    fs.setUTCMilliseconds.apply(this._, arguments)
                },
                setMinutes: function() {
                    fs.setUTCMinutes.apply(this._, arguments)
                },
                setMonth: function() {
                    fs.setUTCMonth.apply(this._, arguments)
                },
                setSeconds: function() {
                    fs.setUTCSeconds.apply(this._, arguments)
                },
                setTime: function() {
                    fs.setTime.apply(this._, arguments)
                }
            };
            var fs = Date.prototype;
            hs.year = Bt(function(t) {
                return t = hs.day(t), t.setMonth(0, 1), t
            }, function(t, r) {
                t.setFullYear(t.getFullYear() + r)
            }, function(t) {
                return t.getFullYear()
            }), hs.years = hs.year.range, hs.years.utc = hs.year.utc.range, hs.day = Bt(function(t) {
                var r = new ps(2e3, 0);
                return r.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), r
            }, function(t, r) {
                t.setDate(t.getDate() + r)
            }, function(t) {
                return t.getDate() - 1
            }), hs.days = hs.day.range, hs.days.utc = hs.day.utc.range, hs.dayOfYear = function(t) {
                var r = hs.year(t);
                return Math.floor((t - r - 6e4 * (t.getTimezoneOffset() - r.getTimezoneOffset())) / 864e5)
            }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(t, r) {
                r = 7 - r;
                var e = hs[t] = Bt(function(t) {
                    return (t = hs.day(t)).setDate(t.getDate() - (t.getDay() + r) % 7), t
                }, function(t, r) {
                    t.setDate(t.getDate() + 7 * Math.floor(r))
                }, function(t) {
                    var e = hs.year(t).getDay();
                    return Math.floor((hs.dayOfYear(t) + (e + r) % 7) / 7) - (e !== r)
                });
                hs[t + "s"] = e.range, hs[t + "s"].utc = e.utc.range, hs[t + "OfYear"] = function(t) {
                    var e = hs.year(t).getDay();
                    return Math.floor((hs.dayOfYear(t) + (e + r) % 7) / 7)
                }
            }), hs.week = hs.sunday, hs.weeks = hs.sunday.range, hs.weeks.utc = hs.sunday.utc.range, hs.weekOfYear = hs.sundayOfYear;
            var gs = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                ys = /^\s*\d+/,
                vs = /^%/;
            si.locale = function(t) {
                return {
                    numberFormat: Wt(t),
                    timeFormat: Vt(t)
                }
            };
            var xs = si.locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""],
                dateTime: "%a %b %e %X %Y",
                date: "%m/%d/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });
            si.format = xs.numberFormat, si.geo = {}, hr.prototype = {
                s: 0,
                t: 0,
                add: function(t) {
                    pr(t, this.t, ws), pr(ws.s, this.s, this), this.s ? this.t += ws.t : this.s = ws.t
                },
                reset: function() {
                    this.s = this.t = 0
                },
                valueOf: function() {
                    return this.s
                }
            };
            var ws = new hr;
            si.geo.stream = function(t, r) {
                t && bs.hasOwnProperty(t.type) ? bs[t.type](t, r) : fr(t, r)
            };
            var bs = {
                    Feature: function(t, r) {
                        fr(t.geometry, r)
                    },
                    FeatureCollection: function(t, r) {
                        for (var e = t.features, n = -1, o = e.length; ++n < o;) fr(e[n].geometry, r)
                    }
                },
                Ms = {
                    Sphere: function(t, r) {
                        r.sphere()
                    },
                    Point: function(t, r) {
                        t = t.coordinates, r.point(t[0], t[1], t[2])
                    },
                    MultiPoint: function(t, r) {
                        for (var e = t.coordinates, n = -1, o = e.length; ++n < o;) t = e[n], r.point(t[0], t[1], t[2])
                    },
                    LineString: function(t, r) {
                        gr(t.coordinates, r, 0)
                    },
                    MultiLineString: function(t, r) {
                        for (var e = t.coordinates, n = -1, o = e.length; ++n < o;) gr(e[n], r, 0)
                    },
                    Polygon: function(t, r) {
                        yr(t.coordinates, r)
                    },
                    MultiPolygon: function(t, r) {
                        for (var e = t.coordinates, n = -1, o = e.length; ++n < o;) yr(e[n], r)
                    },
                    GeometryCollection: function(t, r) {
                        for (var e = t.geometries, n = -1, o = e.length; ++n < o;) fr(e[n], r)
                    }
                };
            si.geo.area = function(t) {
                return ks = 0, si.geo.stream(t, Ns), ks
            };
            var ks, _s = new hr,
                Ns = {
                    sphere: function() {
                        ks += 4 * Ti
                    },
                    point: P,
                    lineStart: P,
                    lineEnd: P,
                    polygonStart: function() {
                        _s.reset(), Ns.lineStart = vr
                    },
                    polygonEnd: function() {
                        var t = 2 * _s;
                        ks += 0 > t ? 4 * Ti + t : t, Ns.lineStart = Ns.lineEnd = Ns.point = P
                    }
                };
            si.geo.bounds = function() {
                function t(t, r) {
                    x.push(w = [u = t, m = t]), d > r && (d = r), r > h && (h = r)
                }

                function r(r, e) {
                    var n = xr([r * Wi, e * Wi]);
                    if (y) {
                        var o = br(y, n),
                            a = [o[1], -o[0], 0],
                            i = br(a, o);
                        _r(i), i = Nr(i);
                        var c = r - p,
                            l = c > 0 ? 1 : -1,
                            f = i[0] * Ui * l,
                            g = xi(c) > 180;
                        if (g ^ (f > l * p && l * r > f)) {
                            var v = i[1] * Ui;
                            v > h && (h = v)
                        } else if (f = (f + 360) % 360 - 180, g ^ (f > l * p && l * r > f)) {
                            var v = -i[1] * Ui;
                            d > v && (d = v)
                        } else d > e && (d = e), e > h && (h = e);
                        g ? p > r ? s(u, r) > s(u, m) && (m = r) : s(r, m) > s(u, m) && (u = r) : m >= u ? (u > r && (u = r), r > m && (m = r)) : r > p ? s(u, r) > s(u, m) && (m = r) : s(r, m) > s(u, m) && (u = r)
                    } else t(r, e);
                    y = n, p = r
                }

                function e() {
                    b.point = r
                }

                function n() {
                    w[0] = u, w[1] = m, b.point = t, y = null
                }

                function o(t, e) {
                    if (y) {
                        var n = t - p;
                        v += xi(n) > 180 ? n + (n > 0 ? 360 : -360) : n
                    } else f = t, g = e;
                    Ns.point(t, e), r(t, e)
                }

                function a() {
                    Ns.lineStart()
                }

                function i() {
                    o(f, g), Ns.lineEnd(), xi(v) > qi && (u = -(m = 180)), w[0] = u, w[1] = m, y = null
                }

                function s(t, r) {
                    return (r -= t) < 0 ? r + 360 : r
                }

                function c(t, r) {
                    return t[0] - r[0]
                }

                function l(t, r) {
                    return r[0] <= r[1] ? r[0] <= t && t <= r[1] : t < r[0] || r[1] < t
                }
                var u, d, m, h, p, f, g, y, v, x, w, b = {
                    point: t,
                    lineStart: e,
                    lineEnd: n,
                    polygonStart: function() {
                        b.point = o, b.lineStart = a, b.lineEnd = i, v = 0, Ns.polygonStart()
                    },
                    polygonEnd: function() {
                        Ns.polygonEnd(), b.point = t, b.lineStart = e, b.lineEnd = n, 0 > _s ? (u = -(m = 180), d = -(h = 90)) : v > qi ? h = 90 : -qi > v && (d = -90), w[0] = u, w[1] = m
                    }
                };
                return function(t) {
                    h = m = -(u = d = 1 / 0), x = [], si.geo.stream(t, b);
                    var r = x.length;
                    if (r) {
                        x.sort(c);
                        for (var e, n = 1, o = x[0], a = [o]; r > n; ++n) e = x[n], l(e[0], o) || l(e[1], o) ? (s(o[0], e[1]) > s(o[0], o[1]) && (o[1] = e[1]), s(e[0], o[1]) > s(o[0], o[1]) && (o[0] = e[0])) : a.push(o = e);
                        for (var i, e, p = -(1 / 0), r = a.length - 1, n = 0, o = a[r]; r >= n; o = e, ++n) e = a[n], (i = s(o[1], e[0])) > p && (p = i, u = e[0], m = o[1])
                    }
                    return x = w = null, u === 1 / 0 || d === 1 / 0 ? [
                        [NaN, NaN],
                        [NaN, NaN]
                    ] : [
                        [u, d],
                        [m, h]
                    ]
                }
            }(), si.geo.centroid = function(t) {
                Ps = Es = As = Cs = Ss = Os = Fs = zs = js = qs = Ls = 0, si.geo.stream(t, Ts);
                var r = js,
                    e = qs,
                    n = Ls,
                    o = r * r + e * e + n * n;
                return Li > o && (r = Os, e = Fs, n = zs, qi > Es && (r = As, e = Cs, n = Ss), o = r * r + e * e + n * n, Li > o) ? [NaN, NaN] : [Math.atan2(e, r) * Ui, it(n / Math.sqrt(o)) * Ui]
            };
            var Ps, Es, As, Cs, Ss, Os, Fs, zs, js, qs, Ls, Ts = {
                    sphere: P,
                    point: Er,
                    lineStart: Cr,
                    lineEnd: Sr,
                    polygonStart: function() {
                        Ts.lineStart = Or
                    },
                    polygonEnd: function() {
                        Ts.lineStart = Cr
                    }
                },
                Rs = Tr(zr, Wr, Gr, [-Ti, -Ti / 2]),
                Ds = 1e9;
            si.geo.clipExtent = function() {
                var t, r, e, n, o, a, i = {
                    stream: function(t) {
                        return o && (o.valid = !1), o = a(t), o.valid = !0, o
                    },
                    extent: function(s) {
                        return arguments.length ? (a = Yr(t = +s[0][0], r = +s[0][1], e = +s[1][0], n = +s[1][1]), o && (o.valid = !1, o = null), i) : [
                            [t, r],
                            [e, n]
                        ]
                    }
                };
                return i.extent([
                    [0, 0],
                    [960, 500]
                ])
            }, (si.geo.conicEqualArea = function() {
                return Zr($r)
            }).raw = $r, si.geo.albers = function() {
                return si.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
            }, si.geo.albersUsa = function() {
                function t(t) {
                    var a = t[0],
                        i = t[1];
                    return r = null, e(a, i), r || (n(a, i), r) || o(a, i), r
                }
                var r, e, n, o, a = si.geo.albers(),
                    i = si.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    s = si.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                    c = {
                        point: function(t, e) {
                            r = [t, e]
                        }
                    };
                return t.invert = function(t) {
                    var r = a.scale(),
                        e = a.translate(),
                        n = (t[0] - e[0]) / r,
                        o = (t[1] - e[1]) / r;
                    return (o >= .12 && .234 > o && n >= -.425 && -.214 > n ? i : o >= .166 && .234 > o && n >= -.214 && -.115 > n ? s : a).invert(t)
                }, t.stream = function(t) {
                    var r = a.stream(t),
                        e = i.stream(t),
                        n = s.stream(t);
                    return {
                        point: function(t, o) {
                            r.point(t, o), e.point(t, o), n.point(t, o)
                        },
                        sphere: function() {
                            r.sphere(), e.sphere(), n.sphere()
                        },
                        lineStart: function() {
                            r.lineStart(), e.lineStart(), n.lineStart()
                        },
                        lineEnd: function() {
                            r.lineEnd(), e.lineEnd(), n.lineEnd()
                        },
                        polygonStart: function() {
                            r.polygonStart(), e.polygonStart(), n.polygonStart()
                        },
                        polygonEnd: function() {
                            r.polygonEnd(), e.polygonEnd(), n.polygonEnd()
                        }
                    }
                }, t.precision = function(r) {
                    return arguments.length ? (a.precision(r), i.precision(r), s.precision(r), t) : a.precision()
                }, t.scale = function(r) {
                    return arguments.length ? (a.scale(r), i.scale(.35 * r), s.scale(r), t.translate(a.translate())) : a.scale()
                }, t.translate = function(r) {
                    if (!arguments.length) return a.translate();
                    var l = a.scale(),
                        u = +r[0],
                        d = +r[1];
                    return e = a.translate(r).clipExtent([
                        [u - .455 * l, d - .238 * l],
                        [u + .455 * l, d + .238 * l]
                    ]).stream(c).point, n = i.translate([u - .307 * l, d + .201 * l]).clipExtent([
                        [u - .425 * l + qi, d + .12 * l + qi],
                        [u - .214 * l - qi, d + .234 * l - qi]
                    ]).stream(c).point, o = s.translate([u - .205 * l, d + .212 * l]).clipExtent([
                        [u - .214 * l + qi, d + .166 * l + qi],
                        [u - .115 * l - qi, d + .234 * l - qi]
                    ]).stream(c).point, t
                }, t.scale(1070)
            };
            var Is, Ws, Us, Gs, Bs, Hs, Vs = {
                    point: P,
                    lineStart: P,
                    lineEnd: P,
                    polygonStart: function() {
                        Ws = 0, Vs.lineStart = Jr
                    },
                    polygonEnd: function() {
                        Vs.lineStart = Vs.lineEnd = Vs.point = P, Is += xi(Ws / 2)
                    }
                },
                Ys = {
                    point: Xr,
                    lineStart: P,
                    lineEnd: P,
                    polygonStart: P,
                    polygonEnd: P
                },
                Zs = {
                    point: te,
                    lineStart: re,
                    lineEnd: ee,
                    polygonStart: function() {
                        Zs.lineStart = ne
                    },
                    polygonEnd: function() {
                        Zs.point = te, Zs.lineStart = re, Zs.lineEnd = ee
                    }
                };
            si.geo.path = function() {
                function t(t) {
                    return t && ("function" == typeof s && a.pointRadius(+s.apply(this, arguments)), i && i.valid || (i = o(a)), si.geo.stream(t, i)), a.result()
                }

                function r() {
                    return i = null, t
                }
                var e, n, o, a, i, s = 4.5;
                return t.area = function(t) {
                    return Is = 0, si.geo.stream(t, o(Vs)), Is
                }, t.centroid = function(t) {
                    return As = Cs = Ss = Os = Fs = zs = js = qs = Ls = 0, si.geo.stream(t, o(Zs)), Ls ? [js / Ls, qs / Ls] : zs ? [Os / zs, Fs / zs] : Ss ? [As / Ss, Cs / Ss] : [NaN, NaN]
                }, t.bounds = function(t) {
                    return Bs = Hs = -(Us = Gs = 1 / 0), si.geo.stream(t, o(Ys)), [
                        [Us, Gs],
                        [Bs, Hs]
                    ]
                }, t.projection = function(t) {
                    return arguments.length ? (o = (e = t) ? t.stream || ie(t) : k, r()) : e
                }, t.context = function(t) {
                    return arguments.length ? (a = null == (n = t) ? new Kr : new oe(t), "function" != typeof s && a.pointRadius(s), r()) : n
                }, t.pointRadius = function(r) {
                    return arguments.length ? (s = "function" == typeof r ? r : (a.pointRadius(+r), +r), t) : s
                }, t.projection(si.geo.albersUsa()).context(null)
            }, si.geo.transform = function(t) {
                return {
                    stream: function(r) {
                        var e = new se(r);
                        for (var n in t) e[n] = t[n];
                        return e
                    }
                }
            }, se.prototype = {
                point: function(t, r) {
                    this.stream.point(t, r)
                },
                sphere: function() {
                    this.stream.sphere()
                },
                lineStart: function() {
                    this.stream.lineStart()
                },
                lineEnd: function() {
                    this.stream.lineEnd()
                },
                polygonStart: function() {
                    this.stream.polygonStart()
                },
                polygonEnd: function() {
                    this.stream.polygonEnd()
                }
            }, si.geo.projection = le, si.geo.projectionMutator = ue, (si.geo.equirectangular = function() {
                return le(me)
            }).raw = me.invert = me, si.geo.rotation = function(t) {
                function r(r) {
                    return r = t(r[0] * Wi, r[1] * Wi), r[0] *= Ui, r[1] *= Ui, r
                }
                return t = pe(t[0] % 360 * Wi, t[1] * Wi, t.length > 2 ? t[2] * Wi : 0), r.invert = function(r) {
                    return r = t.invert(r[0] * Wi, r[1] * Wi), r[0] *= Ui, r[1] *= Ui, r
                }, r
            }, he.invert = me, si.geo.circle = function() {
                function t() {
                    var t = "function" == typeof n ? n.apply(this, arguments) : n,
                        r = pe(-t[0] * Wi, -t[1] * Wi, 0).invert,
                        o = [];
                    return e(null, null, 1, {
                        point: function(t, e) {
                            o.push(t = r(t, e)), t[0] *= Ui, t[1] *= Ui
                        }
                    }), {
                        type: "Polygon",
                        coordinates: [o]
                    }
                }
                var r, e, n = [0, 0],
                    o = 6;
                return t.origin = function(r) {
                    return arguments.length ? (n = r, t) : n
                }, t.angle = function(n) {
                    return arguments.length ? (e = ve((r = +n) * Wi, o * Wi), t) : r
                }, t.precision = function(n) {
                    return arguments.length ? (e = ve(r * Wi, (o = +n) * Wi), t) : o
                }, t.angle(90)
            }, si.geo.distance = function(t, r) {
                var e, n = (r[0] - t[0]) * Wi,
                    o = t[1] * Wi,
                    a = r[1] * Wi,
                    i = Math.sin(n),
                    s = Math.cos(n),
                    c = Math.sin(o),
                    l = Math.cos(o),
                    u = Math.sin(a),
                    d = Math.cos(a);
                return Math.atan2(Math.sqrt((e = d * i) * e + (e = l * u - c * d * s) * e), c * u + l * d * s)
            }, si.geo.graticule = function() {
                function t() {
                    return {
                        type: "MultiLineString",
                        coordinates: r()
                    }
                }

                function r() {
                    return si.range(Math.ceil(a / g) * g, o, g).map(m).concat(si.range(Math.ceil(l / y) * y, c, y).map(h)).concat(si.range(Math.ceil(n / p) * p, e, p).filter(function(t) {
                        return xi(t % g) > qi
                    }).map(u)).concat(si.range(Math.ceil(s / f) * f, i, f).filter(function(t) {
                        return xi(t % y) > qi
                    }).map(d))
                }
                var e, n, o, a, i, s, c, l, u, d, m, h, p = 10,
                    f = p,
                    g = 90,
                    y = 360,
                    v = 2.5;
                return t.lines = function() {
                    return r().map(function(t) {
                        return {
                            type: "LineString",
                            coordinates: t
                        }
                    })
                }, t.outline = function() {
                    return {
                        type: "Polygon",
                        coordinates: [m(a).concat(h(c).slice(1), m(o).reverse().slice(1), h(l).reverse().slice(1))]
                    }
                }, t.extent = function(r) {
                    return arguments.length ? t.majorExtent(r).minorExtent(r) : t.minorExtent()
                }, t.majorExtent = function(r) {
                    return arguments.length ? (a = +r[0][0], o = +r[1][0], l = +r[0][1], c = +r[1][1], a > o && (r = a, a = o, o = r), l > c && (r = l, l = c, c = r), t.precision(v)) : [
                        [a, l],
                        [o, c]
                    ]
                }, t.minorExtent = function(r) {
                    return arguments.length ? (n = +r[0][0], e = +r[1][0], s = +r[0][1], i = +r[1][1], n > e && (r = n, n = e, e = r), s > i && (r = s, s = i, i = r), t.precision(v)) : [
                        [n, s],
                        [e, i]
                    ]
                }, t.step = function(r) {
                    return arguments.length ? t.majorStep(r).minorStep(r) : t.minorStep()
                }, t.majorStep = function(r) {
                    return arguments.length ? (g = +r[0], y = +r[1], t) : [g, y]
                }, t.minorStep = function(r) {
                    return arguments.length ? (p = +r[0], f = +r[1], t) : [p, f]
                }, t.precision = function(r) {
                    return arguments.length ? (v = +r, u = we(s, i, 90), d = be(n, e, v), m = we(l, c, 90), h = be(a, o, v), t) : v
                }, t.majorExtent([
                    [-180, -90 + qi],
                    [180, 90 - qi]
                ]).minorExtent([
                    [-180, -80 - qi],
                    [180, 80 + qi]
                ])
            }, si.geo.greatArc = function() {
                function t() {
                    return {
                        type: "LineString",
                        coordinates: [r || n.apply(this, arguments), e || o.apply(this, arguments)]
                    }
                }
                var r, e, n = Me,
                    o = ke;
                return t.distance = function() {
                    return si.geo.distance(r || n.apply(this, arguments), e || o.apply(this, arguments))
                }, t.source = function(e) {
                    return arguments.length ? (n = e, r = "function" == typeof e ? null : e, t) : n
                }, t.target = function(r) {
                    return arguments.length ? (o = r, e = "function" == typeof r ? null : r, t) : o
                }, t.precision = function() {
                    return arguments.length ? t : 0
                }, t
            }, si.geo.interpolate = function(t, r) {
                return _e(t[0] * Wi, t[1] * Wi, r[0] * Wi, r[1] * Wi)
            }, si.geo.length = function(t) {
                return $s = 0, si.geo.stream(t, Js), $s
            };
            var $s, Js = {
                    sphere: P,
                    point: P,
                    lineStart: Ne,
                    lineEnd: P,
                    polygonStart: P,
                    polygonEnd: P
                },
                Xs = Pe(function(t) {
                    return Math.sqrt(2 / (1 + t))
                }, function(t) {
                    return 2 * Math.asin(t / 2)
                });
            (si.geo.azimuthalEqualArea = function() {
                return le(Xs)
            }).raw = Xs;
            var Ks = Pe(function(t) {
                var r = Math.acos(t);
                return r && r / Math.sin(r)
            }, k);
            (si.geo.azimuthalEquidistant = function() {
                return le(Ks)
            }).raw = Ks, (si.geo.conicConformal = function() {
                return Zr(Ee)
            }).raw = Ee, (si.geo.conicEquidistant = function() {
                return Zr(Ae)
            }).raw = Ae;
            var Qs = Pe(function(t) {
                return 1 / t
            }, Math.atan);
            (si.geo.gnomonic = function() {
                return le(Qs)
            }).raw = Qs, Ce.invert = function(t, r) {
                return [t, 2 * Math.atan(Math.exp(r)) - Ii]
            }, (si.geo.mercator = function() {
                return Se(Ce)
            }).raw = Ce;
            var tc = Pe(function() {
                return 1
            }, Math.asin);
            (si.geo.orthographic = function() {
                return le(tc)
            }).raw = tc;
            var rc = Pe(function(t) {
                return 1 / (1 + t)
            }, function(t) {
                return 2 * Math.atan(t)
            });
            (si.geo.stereographic = function() {
                return le(rc)
            }).raw = rc, Oe.invert = function(t, r) {
                return [-r, 2 * Math.atan(Math.exp(t)) - Ii]
            }, (si.geo.transverseMercator = function() {
                var t = Se(Oe),
                    r = t.center,
                    e = t.rotate;
                return t.center = function(t) {
                    return t ? r([-t[1], t[0]]) : (t = r(), [t[1], -t[0]])
                }, t.rotate = function(t) {
                    return t ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
                }, e([0, 0, 90])
            }).raw = Oe, si.geom = {}, si.geom.hull = function(t) {
                function r(t) {
                    if (t.length < 3) return [];
                    var r, o = Ot(e),
                        a = Ot(n),
                        i = t.length,
                        s = [],
                        c = [];
                    for (r = 0; i > r; r++) s.push([+o.call(this, t[r], r), +a.call(this, t[r], r), r]);
                    for (s.sort(qe), r = 0; i > r; r++) c.push([s[r][0], -s[r][1]]);
                    var l = je(s),
                        u = je(c),
                        d = u[0] === l[0],
                        m = u[u.length - 1] === l[l.length - 1],
                        h = [];
                    for (r = l.length - 1; r >= 0; --r) h.push(t[s[l[r]][2]]);
                    for (r = +d; r < u.length - m; ++r) h.push(t[s[u[r]][2]]);
                    return h
                }
                var e = Fe,
                    n = ze;
                return arguments.length ? r(t) : (r.x = function(t) {
                    return arguments.length ? (e = t, r) : e
                }, r.y = function(t) {
                    return arguments.length ? (n = t, r) : n
                }, r)
            }, si.geom.polygon = function(t) {
                return _i(t, ec), t
            };
            var ec = si.geom.polygon.prototype = [];
            ec.area = function() {
                for (var t, r = -1, e = this.length, n = this[e - 1], o = 0; ++r < e;) t = n, n = this[r], o += t[1] * n[0] - t[0] * n[1];
                return .5 * o
            }, ec.centroid = function(t) {
                var r, e, n = -1,
                    o = this.length,
                    a = 0,
                    i = 0,
                    s = this[o - 1];
                for (arguments.length || (t = -1 / (6 * this.area())); ++n < o;) r = s, s = this[n], e = r[0] * s[1] - s[0] * r[1], a += (r[0] + s[0]) * e, i += (r[1] + s[1]) * e;
                return [a * t, i * t]
            }, ec.clip = function(t) {
                for (var r, e, n, o, a, i, s = Re(t), c = -1, l = this.length - Re(this), u = this[l - 1]; ++c < l;) {
                    for (r = t.slice(), t.length = 0, o = this[c], a = r[(n = r.length - s) - 1], e = -1; ++e < n;) i = r[e], Le(i, u, o) ? (Le(a, u, o) || t.push(Te(a, i, u, o)), t.push(i)) : Le(a, u, o) && t.push(Te(a, i, u, o)), a = i;
                    s && t.push(t[0]), u = o
                }
                return t
            };
            var nc, oc, ac, ic, sc, cc = [],
                lc = [];
            Ve.prototype.prepare = function() {
                for (var t, r = this.edges, e = r.length; e--;) t = r[e].edge, t.b && t.a || r.splice(e, 1);
                return r.sort(Ze), r.length
            }, on.prototype = {
                start: function() {
                    return this.edge.l === this.site ? this.edge.a : this.edge.b
                },
                end: function() {
                    return this.edge.l === this.site ? this.edge.b : this.edge.a
                }
            }, an.prototype = {
                insert: function(t, r) {
                    var e, n, o;
                    if (t) {
                        if (r.P = t, r.N = t.N, t.N && (t.N.P = r), t.N = r, t.R) {
                            for (t = t.R; t.L;) t = t.L;
                            t.L = r
                        } else t.R = r;
                        e = t
                    } else this._ ? (t = un(this._), r.P = null, r.N = t, t.P = t.L = r, e = t) : (r.P = r.N = null, this._ = r, e = null);
                    for (r.L = r.R = null, r.U = e, r.C = !0, t = r; e && e.C;) n = e.U, e === n.L ? (o = n.R, o && o.C ? (e.C = o.C = !1, n.C = !0, t = n) : (t === e.R && (cn(this, e), t = e, e = t.U), e.C = !1, n.C = !0, ln(this, n))) : (o = n.L, o && o.C ? (e.C = o.C = !1, n.C = !0, t = n) : (t === e.L && (ln(this, e), t = e, e = t.U), e.C = !1, n.C = !0, cn(this, n))), e = t.U;
                    this._.C = !1
                },
                remove: function(t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var r, e, n, o = t.U,
                        a = t.L,
                        i = t.R;
                    if (e = a ? i ? un(i) : a : i, o ? o.L === t ? o.L = e : o.R = e : this._ = e, a && i ? (n = e.C, e.C = t.C, e.L = a, a.U = e, e !== i ? (o = e.U, e.U = t.U, t = e.R, o.L = t, e.R = i, i.U = e) : (e.U = o, o = e, t = e.R)) : (n = t.C, t = e), t && (t.U = o), !n) {
                        if (t && t.C) return void(t.C = !1);
                        do {
                            if (t === this._) break;
                            if (t === o.L) {
                                if (r = o.R, r.C && (r.C = !1, o.C = !0, cn(this, o), r = o.R), r.L && r.L.C || r.R && r.R.C) {
                                    r.R && r.R.C || (r.L.C = !1, r.C = !0, ln(this, r), r = o.R), r.C = o.C, o.C = r.R.C = !1, cn(this, o), t = this._;
                                    break
                                }
                            } else if (r = o.L, r.C && (r.C = !1, o.C = !0, ln(this, o), r = o.L), r.L && r.L.C || r.R && r.R.C) {
                                r.L && r.L.C || (r.R.C = !1, r.C = !0, cn(this, r), r = o.L), r.C = o.C, o.C = r.L.C = !1, ln(this, o), t = this._;
                                break
                            }
                            r.C = !0, t = o, o = o.U
                        } while (!t.C);
                        t && (t.C = !1)
                    }
                }
            }, si.geom.voronoi = function(t) {
                function r(t) {
                    var r = new Array(t.length),
                        n = s[0][0],
                        o = s[0][1],
                        a = s[1][0],
                        i = s[1][1];
                    return dn(e(t), s).cells.forEach(function(e, s) {
                        var c = e.edges,
                            l = e.site,
                            u = r[s] = c.length ? c.map(function(t) {
                                var r = t.start();
                                return [r.x, r.y]
                            }) : l.x >= n && l.x <= a && l.y >= o && l.y <= i ? [
                                [n, i],
                                [a, i],
                                [a, o],
                                [n, o]
                            ] : [];
                        u.point = t[s]
                    }), r
                }

                function e(t) {
                    return t.map(function(t, r) {
                        return {
                            x: Math.round(a(t, r) / qi) * qi,
                            y: Math.round(i(t, r) / qi) * qi,
                            i: r
                        }
                    })
                }
                var n = Fe,
                    o = ze,
                    a = n,
                    i = o,
                    s = uc;
                return t ? r(t) : (r.links = function(t) {
                    return dn(e(t)).edges.filter(function(t) {
                        return t.l && t.r
                    }).map(function(r) {
                        return {
                            source: t[r.l.i],
                            target: t[r.r.i]
                        }
                    })
                }, r.triangles = function(t) {
                    var r = [];
                    return dn(e(t)).cells.forEach(function(e, n) {
                        for (var o, a, i = e.site, s = e.edges.sort(Ze), c = -1, l = s.length, u = s[l - 1].edge, d = u.l === i ? u.r : u.l; ++c < l;) o = u, a = d, u = s[c].edge, d = u.l === i ? u.r : u.l, n < a.i && n < d.i && hn(i, a, d) < 0 && r.push([t[n], t[a.i], t[d.i]])
                    }), r
                }, r.x = function(t) {
                    return arguments.length ? (a = Ot(n = t), r) : n
                }, r.y = function(t) {
                    return arguments.length ? (i = Ot(o = t), r) : o
                }, r.clipExtent = function(t) {
                    return arguments.length ? (s = null == t ? uc : t, r) : s === uc ? null : s
                }, r.size = function(t) {
                    return arguments.length ? r.clipExtent(t && [
                        [0, 0], t
                    ]) : s === uc ? null : s && s[1]
                }, r)
            };
            var uc = [
                [-1e6, -1e6],
                [1e6, 1e6]
            ];
            si.geom.delaunay = function(t) {
                return si.geom.voronoi().triangles(t)
            }, si.geom.quadtree = function(t, r, e, n, o) {
                function a(t) {
                    function a(t, r, e, n, o, a, i, s) {
                        if (!isNaN(e) && !isNaN(n))
                            if (t.leaf) {
                                var c = t.x,
                                    u = t.y;
                                if (null != c)
                                    if (xi(c - e) + xi(u - n) < .01) l(t, r, e, n, o, a, i, s);
                                    else {
                                        var d = t.point;
                                        t.x = t.y = t.point = null, l(t, d, c, u, o, a, i, s), l(t, r, e, n, o, a, i, s)
                                    } else t.x = e, t.y = n, t.point = r
                            } else l(t, r, e, n, o, a, i, s)
                    }

                    function l(t, r, e, n, o, i, s, c) {
                        var l = .5 * (o + s),
                            u = .5 * (i + c),
                            d = e >= l,
                            m = n >= u,
                            h = m << 1 | d;
                        t.leaf = !1, t = t.nodes[h] || (t.nodes[h] = gn()), d ? o = l : s = l, m ? i = u : c = u, a(t, r, e, n, o, i, s, c)
                    }
                    var u, d, m, h, p, f, g, y, v, x = Ot(s),
                        w = Ot(c);
                    if (null != r) f = r, g = e, y = n, v = o;
                    else if (y = v = -(f = g = 1 / 0), d = [], m = [], p = t.length, i)
                        for (h = 0; p > h; ++h) u = t[h], u.x < f && (f = u.x), u.y < g && (g = u.y), u.x > y && (y = u.x), u.y > v && (v = u.y), d.push(u.x), m.push(u.y);
                    else
                        for (h = 0; p > h; ++h) {
                            var b = +x(u = t[h], h),
                                M = +w(u, h);
                            f > b && (f = b), g > M && (g = M), b > y && (y = b), M > v && (v = M), d.push(b), m.push(M)
                        }
                    var k = y - f,
                        _ = v - g;
                    k > _ ? v = g + k : y = f + _;
                    var N = gn();
                    if (N.add = function(t) {
                            a(N, t, +x(t, ++h), +w(t, h), f, g, y, v)
                        }, N.visit = function(t) {
                            yn(t, N, f, g, y, v)
                        }, N.find = function(t) {
                            return vn(N, t[0], t[1], f, g, y, v)
                        }, h = -1, null == r) {
                        for (; ++h < p;) a(N, t[h], d[h], m[h], f, g, y, v);
                        --h
                    } else t.forEach(N.add);
                    return d = m = t = u = null, N
                }
                var i, s = Fe,
                    c = ze;
                return (i = arguments.length) ? (s = pn, c = fn, 3 === i && (o = e, n = r, e = r = 0), a(t)) : (a.x = function(t) {
                    return arguments.length ? (s = t, a) : s
                }, a.y = function(t) {
                    return arguments.length ? (c = t, a) : c
                }, a.extent = function(t) {
                    return arguments.length ? (null == t ? r = e = n = o = null : (r = +t[0][0], e = +t[0][1], n = +t[1][0], o = +t[1][1]), a) : null == r ? null : [
                        [r, e],
                        [n, o]
                    ]
                }, a.size = function(t) {
                    return arguments.length ? (null == t ? r = e = n = o = null : (r = e = 0, n = +t[0], o = +t[1]), a) : null == r ? null : [n - r, o - e]
                }, a)
            }, si.interpolateRgb = xn, si.interpolateObject = wn, si.interpolateNumber = bn, si.interpolateString = Mn;
            var dc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                mc = new RegExp(dc.source, "g");
            si.interpolate = kn, si.interpolators = [function(t, r) {
                var e = typeof r;
                return ("string" === e ? ns.has(r.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(r) ? xn : Mn : r instanceof dt ? xn : Array.isArray(r) ? _n : "object" === e && isNaN(r) ? wn : bn)(t, r)
            }], si.interpolateArray = _n;
            var hc = function() {
                    return k
                },
                pc = si.map({
                    linear: hc,
                    poly: On,
                    quad: function() {
                        return An
                    },
                    cubic: function() {
                        return Cn
                    },
                    sin: function() {
                        return Fn
                    },
                    exp: function() {
                        return zn
                    },
                    circle: function() {
                        return jn
                    },
                    elastic: qn,
                    back: Ln,
                    bounce: function() {
                        return Tn
                    }
                }),
                fc = si.map({
                    "in": k,
                    out: Pn,
                    "in-out": En,
                    "out-in": function(t) {
                        return En(Pn(t))
                    }
                });
            si.ease = function(t) {
                var r = t.indexOf("-"),
                    e = r >= 0 ? t.slice(0, r) : t,
                    n = r >= 0 ? t.slice(r + 1) : "in";
                return e = pc.get(e) || hc, n = fc.get(n) || k, Nn(n(e.apply(null, ci.call(arguments, 1))))
            }, si.interpolateHcl = Rn, si.interpolateHsl = Dn, si.interpolateLab = In, si.interpolateRound = Wn, si.transform = function(t) {
                var r = ui.createElementNS(si.ns.prefix.svg, "g");
                return (si.transform = function(t) {
                    if (null != t) {
                        r.setAttribute("transform", t);
                        var e = r.transform.baseVal.consolidate()
                    }
                    return new Un(e ? e.matrix : gc)
                })(t)
            }, Un.prototype.toString = function() {
                return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
            };
            var gc = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            si.interpolateTransform = Vn, si.layout = {}, si.layout.bundle = function() {
                return function(t) {
                    for (var r = [], e = -1, n = t.length; ++e < n;) r.push($n(t[e]));
                    return r
                }
            }, si.layout.chord = function() {
                function t() {
                    var t, l, d, m, h, p = {},
                        f = [],
                        g = si.range(a),
                        y = [];
                    for (e = [], n = [], t = 0, m = -1; ++m < a;) {
                        for (l = 0, h = -1; ++h < a;) l += o[m][h];
                        f.push(l), y.push(si.range(a)), t += l
                    }
                    for (i && g.sort(function(t, r) {
                            return i(f[t], f[r])
                        }), s && y.forEach(function(t, r) {
                            t.sort(function(t, e) {
                                return s(o[r][t], o[r][e])
                            })
                        }), t = (Ri - u * a) / t, l = 0, m = -1; ++m < a;) {
                        for (d = l, h = -1; ++h < a;) {
                            var v = g[m],
                                x = y[v][h],
                                w = o[v][x],
                                b = l,
                                M = l += w * t;
                            p[v + "-" + x] = {
                                index: v,
                                subindex: x,
                                startAngle: b,
                                endAngle: M,
                                value: w
                            }
                        }
                        n[v] = {
                            index: v,
                            startAngle: d,
                            endAngle: l,
                            value: (l - d) / t
                        }, l += u
                    }
                    for (m = -1; ++m < a;)
                        for (h = m - 1; ++h < a;) {
                            var k = p[m + "-" + h],
                                _ = p[h + "-" + m];
                            (k.value || _.value) && e.push(k.value < _.value ? {
                                source: _,
                                target: k
                            } : {
                                source: k,
                                target: _
                            })
                        }
                    c && r()
                }

                function r() {
                    e.sort(function(t, r) {
                        return c((t.source.value + t.target.value) / 2, (r.source.value + r.target.value) / 2)
                    })
                }
                var e, n, o, a, i, s, c, l = {},
                    u = 0;
                return l.matrix = function(t) {
                    return arguments.length ? (a = (o = t) && o.length, e = n = null, l) : o
                }, l.padding = function(t) {
                    return arguments.length ? (u = t, e = n = null, l) : u
                }, l.sortGroups = function(t) {
                    return arguments.length ? (i = t, e = n = null, l) : i
                }, l.sortSubgroups = function(t) {
                    return arguments.length ? (s = t, e = null, l) : s
                }, l.sortChords = function(t) {
                    return arguments.length ? (c = t, e && r(), l) : c
                }, l.chords = function() {
                    return e || t(), e
                }, l.groups = function() {
                    return n || t(), n
                }, l
            }, si.layout.force = function() {
                function t(t) {
                    return function(r, e, n, o) {
                        if (r.point !== t) {
                            var a = r.cx - t.x,
                                i = r.cy - t.y,
                                s = o - e,
                                c = a * a + i * i;
                            if (c > s * s / g) {
                                if (p > c) {
                                    var l = r.charge / c;
                                    t.px -= a * l, t.py -= i * l
                                }
                                return !0
                            }
                            if (r.point && c && p > c) {
                                var l = r.pointCharge / c;
                                t.px -= a * l, t.py -= i * l
                            }
                        }
                        return !r.charge
                    }
                }

                function r(t) {
                    t.px = si.event.x, t.py = si.event.y, s.resume()
                }
                var e, n, o, a, i, s = {},
                    c = si.dispatch("start", "tick", "end"),
                    l = [1, 1],
                    u = .9,
                    d = yc,
                    m = vc,
                    h = -30,
                    p = xc,
                    f = .1,
                    g = .64,
                    y = [],
                    v = [];
                return s.tick = function() {
                    if ((n *= .99) < .005) return c.end({
                        type: "end",
                        alpha: n = 0
                    }), !0;
                    var r, e, s, d, m, p, g, x, w, b = y.length,
                        M = v.length;
                    for (e = 0; M > e; ++e) s = v[e], d = s.source, m = s.target, x = m.x - d.x, w = m.y - d.y, (p = x * x + w * w) && (p = n * a[e] * ((p = Math.sqrt(p)) - o[e]) / p, x *= p, w *= p, m.x -= x * (g = d.weight / (m.weight + d.weight)), m.y -= w * g, d.x += x * (g = 1 - g), d.y += w * g);
                    if ((g = n * f) && (x = l[0] / 2, w = l[1] / 2, e = -1, g))
                        for (; ++e < b;) s = y[e], s.x += (x - s.x) * g, s.y += (w - s.y) * g;
                    if (h)
                        for (eo(r = si.geom.quadtree(y), n, i), e = -1; ++e < b;)(s = y[e]).fixed || r.visit(t(s));
                    for (e = -1; ++e < b;) s = y[e], s.fixed ? (s.x = s.px, s.y = s.py) : (s.x -= (s.px - (s.px = s.x)) * u, s.y -= (s.py - (s.py = s.y)) * u);
                    c.tick({
                        type: "tick",
                        alpha: n
                    })
                }, s.nodes = function(t) {
                    return arguments.length ? (y = t, s) : y
                }, s.links = function(t) {
                    return arguments.length ? (v = t, s) : v
                }, s.size = function(t) {
                    return arguments.length ? (l = t, s) : l
                }, s.linkDistance = function(t) {
                    return arguments.length ? (d = "function" == typeof t ? t : +t, s) : d
                }, s.distance = s.linkDistance, s.linkStrength = function(t) {
                    return arguments.length ? (m = "function" == typeof t ? t : +t, s) : m
                }, s.friction = function(t) {
                    return arguments.length ? (u = +t, s) : u
                }, s.charge = function(t) {
                    return arguments.length ? (h = "function" == typeof t ? t : +t, s) : h
                }, s.chargeDistance = function(t) {
                    return arguments.length ? (p = t * t, s) : Math.sqrt(p)
                }, s.gravity = function(t) {
                    return arguments.length ? (f = +t, s) : f
                }, s.theta = function(t) {
                    return arguments.length ? (g = t * t, s) : Math.sqrt(g)
                }, s.alpha = function(t) {
                    return arguments.length ? (t = +t, n ? n = t > 0 ? t : 0 : t > 0 && (c.start({
                        type: "start",
                        alpha: n = t
                    }), si.timer(s.tick)), s) : n
                }, s.start = function() {
                    function t(t, n) {
                        if (!e) {
                            for (e = new Array(c), s = 0; c > s; ++s) e[s] = [];
                            for (s = 0; u > s; ++s) {
                                var o = v[s];
                                e[o.source.index].push(o.target), e[o.target.index].push(o.source)
                            }
                        }
                        for (var a, i = e[r], s = -1, l = i.length; ++s < l;)
                            if (!isNaN(a = i[s][t])) return a;
                        return Math.random() * n
                    }
                    var r, e, n, c = y.length,
                        u = v.length,
                        p = l[0],
                        f = l[1];
                    for (r = 0; c > r; ++r)(n = y[r]).index = r, n.weight = 0;
                    for (r = 0; u > r; ++r) n = v[r], "number" == typeof n.source && (n.source = y[n.source]), "number" == typeof n.target && (n.target = y[n.target]), ++n.source.weight, ++n.target.weight;
                    for (r = 0; c > r; ++r) n = y[r], isNaN(n.x) && (n.x = t("x", p)), isNaN(n.y) && (n.y = t("y", f)), isNaN(n.px) && (n.px = n.x), isNaN(n.py) && (n.py = n.y);
                    if (o = [], "function" == typeof d)
                        for (r = 0; u > r; ++r) o[r] = +d.call(this, v[r], r);
                    else
                        for (r = 0; u > r; ++r) o[r] = d;
                    if (a = [], "function" == typeof m)
                        for (r = 0; u > r; ++r) a[r] = +m.call(this, v[r], r);
                    else
                        for (r = 0; u > r; ++r) a[r] = m;
                    if (i = [], "function" == typeof h)
                        for (r = 0; c > r; ++r) i[r] = +h.call(this, y[r], r);
                    else
                        for (r = 0; c > r; ++r) i[r] = h;
                    return s.resume()
                }, s.resume = function() {
                    return s.alpha(.1)
                }, s.stop = function() {
                    return s.alpha(0)
                }, s.drag = function() {
                    return e || (e = si.behavior.drag().origin(k).on("dragstart.force", Kn).on("drag.force", r).on("dragend.force", Qn)), arguments.length ? void this.on("mouseover.force", to).on("mouseout.force", ro).call(e) : e
                }, si.rebind(s, c, "on")
            };
            var yc = 20,
                vc = 1,
                xc = 1 / 0;
            si.layout.hierarchy = function() {
                function t(o) {
                    var a, i = [o],
                        s = [];
                    for (o.depth = 0; null != (a = i.pop());)
                        if (s.push(a), (l = e.call(t, a, a.depth)) && (c = l.length)) {
                            for (var c, l, u; --c >= 0;) i.push(u = l[c]), u.parent = a, u.depth = a.depth + 1;
                            n && (a.value = 0), a.children = l
                        } else n && (a.value = +n.call(t, a, a.depth) || 0), delete a.children;
                    return ao(o, function(t) {
                        var e, o;
                        r && (e = t.children) && e.sort(r), n && (o = t.parent) && (o.value += t.value)
                    }), s
                }
                var r = co,
                    e = io,
                    n = so;
                return t.sort = function(e) {
                    return arguments.length ? (r = e, t) : r
                }, t.children = function(r) {
                    return arguments.length ? (e = r, t) : e
                }, t.value = function(r) {
                    return arguments.length ? (n = r, t) : n
                }, t.revalue = function(r) {
                    return n && (oo(r, function(t) {
                        t.children && (t.value = 0)
                    }), ao(r, function(r) {
                        var e;
                        r.children || (r.value = +n.call(t, r, r.depth) || 0), (e = r.parent) && (e.value += r.value)
                    })), r
                }, t
            }, si.layout.partition = function() {
                function t(r, e, n, o) {
                    var a = r.children;
                    if (r.x = e, r.y = r.depth * o, r.dx = n, r.dy = o, a && (i = a.length)) {
                        var i, s, c, l = -1;
                        for (n = r.value ? n / r.value : 0; ++l < i;) t(s = a[l], e, c = s.value * n, o), e += c
                    }
                }

                function r(t) {
                    var e = t.children,
                        n = 0;
                    if (e && (o = e.length))
                        for (var o, a = -1; ++a < o;) n = Math.max(n, r(e[a]));
                    return 1 + n
                }

                function e(e, a) {
                    var i = n.call(this, e, a);
                    return t(i[0], 0, o[0], o[1] / r(i[0])), i
                }
                var n = si.layout.hierarchy(),
                    o = [1, 1];
                return e.size = function(t) {
                    return arguments.length ? (o = t, e) : o
                }, no(e, n)
            }, si.layout.pie = function() {
                function t(i) {
                    var s, c = i.length,
                        l = i.map(function(e, n) {
                            return +r.call(t, e, n)
                        }),
                        u = +("function" == typeof n ? n.apply(this, arguments) : n),
                        d = ("function" == typeof o ? o.apply(this, arguments) : o) - u,
                        m = Math.min(Math.abs(d) / c, +("function" == typeof a ? a.apply(this, arguments) : a)),
                        h = m * (0 > d ? -1 : 1),
                        p = (d - c * h) / si.sum(l),
                        f = si.range(c),
                        g = [];
                    return null != e && f.sort(e === wc ? function(t, r) {
                        return l[r] - l[t]
                    } : function(t, r) {
                        return e(i[t], i[r])
                    }), f.forEach(function(t) {
                        g[t] = {
                            data: i[t],
                            value: s = l[t],
                            startAngle: u,
                            endAngle: u += s * p + h,
                            padAngle: m
                        }
                    }), g
                }
                var r = Number,
                    e = wc,
                    n = 0,
                    o = Ri,
                    a = 0;
                return t.value = function(e) {
                    return arguments.length ? (r = e, t) : r
                }, t.sort = function(r) {
                    return arguments.length ? (e = r, t) : e
                }, t.startAngle = function(r) {
                    return arguments.length ? (n = r, t) : n
                }, t.endAngle = function(r) {
                    return arguments.length ? (o = r, t) : o
                }, t.padAngle = function(r) {
                    return arguments.length ? (a = r, t) : a
                }, t
            };
            var wc = {};
            si.layout.stack = function() {
                function t(s, c) {
                    if (!(m = s.length)) return s;
                    var l = s.map(function(e, n) {
                            return r.call(t, e, n)
                        }),
                        u = l.map(function(r) {
                            return r.map(function(r, e) {
                                return [a.call(t, r, e), i.call(t, r, e)]
                            })
                        }),
                        d = e.call(t, u, c);
                    l = si.permute(l, d), u = si.permute(u, d);
                    var m, h, p, f, g = n.call(t, u, c),
                        y = l[0].length;
                    for (p = 0; y > p; ++p)
                        for (o.call(t, l[0][p], f = g[p], u[0][p][1]), h = 1; m > h; ++h) o.call(t, l[h][p], f += u[h - 1][p][1], u[h][p][1]);
                    return s
                }
                var r = k,
                    e = po,
                    n = fo,
                    o = ho,
                    a = uo,
                    i = mo;
                return t.values = function(e) {
                    return arguments.length ? (r = e, t) : r
                }, t.order = function(r) {
                    return arguments.length ? (e = "function" == typeof r ? r : bc.get(r) || po, t) : e
                }, t.offset = function(r) {
                    return arguments.length ? (n = "function" == typeof r ? r : Mc.get(r) || fo, t) : n
                }, t.x = function(r) {
                    return arguments.length ? (a = r, t) : a
                }, t.y = function(r) {
                    return arguments.length ? (i = r, t) : i
                }, t.out = function(r) {
                    return arguments.length ? (o = r, t) : o
                }, t
            };
            var bc = si.map({
                    "inside-out": function(t) {
                        var r, e, n = t.length,
                            o = t.map(go),
                            a = t.map(yo),
                            i = si.range(n).sort(function(t, r) {
                                return o[t] - o[r]
                            }),
                            s = 0,
                            c = 0,
                            l = [],
                            u = [];
                        for (r = 0; n > r; ++r) e = i[r], c > s ? (s += a[e], l.push(e)) : (c += a[e], u.push(e));
                        return u.reverse().concat(l)
                    },
                    reverse: function(t) {
                        return si.range(t.length).reverse()
                    },
                    "default": po
                }),
                Mc = si.map({
                    silhouette: function(t) {
                        var r, e, n, o = t.length,
                            a = t[0].length,
                            i = [],
                            s = 0,
                            c = [];
                        for (e = 0; a > e; ++e) {
                            for (r = 0, n = 0; o > r; r++) n += t[r][e][1];
                            n > s && (s = n), i.push(n)
                        }
                        for (e = 0; a > e; ++e) c[e] = (s - i[e]) / 2;
                        return c
                    },
                    wiggle: function(t) {
                        var r, e, n, o, a, i, s, c, l, u = t.length,
                            d = t[0],
                            m = d.length,
                            h = [];
                        for (h[0] = c = l = 0, e = 1; m > e; ++e) {
                            for (r = 0, o = 0; u > r; ++r) o += t[r][e][1];
                            for (r = 0, a = 0, s = d[e][0] - d[e - 1][0]; u > r; ++r) {
                                for (n = 0, i = (t[r][e][1] - t[r][e - 1][1]) / (2 * s); r > n; ++n) i += (t[n][e][1] - t[n][e - 1][1]) / s;
                                a += i * t[r][e][1]
                            }
                            h[e] = c -= o ? a / o * s : 0, l > c && (l = c)
                        }
                        for (e = 0; m > e; ++e) h[e] -= l;
                        return h
                    },
                    expand: function(t) {
                        var r, e, n, o = t.length,
                            a = t[0].length,
                            i = 1 / o,
                            s = [];
                        for (e = 0; a > e; ++e) {
                            for (r = 0, n = 0; o > r; r++) n += t[r][e][1];
                            if (n)
                                for (r = 0; o > r; r++) t[r][e][1] /= n;
                            else
                                for (r = 0; o > r; r++) t[r][e][1] = i
                        }
                        for (e = 0; a > e; ++e) s[e] = 0;
                        return s
                    },
                    zero: fo
                });
            si.layout.histogram = function() {
                function t(t, a) {
                    for (var i, s, c = [], l = t.map(e, this), u = n.call(this, l, a), d = o.call(this, u, l, a), a = -1, m = l.length, h = d.length - 1, p = r ? 1 : 1 / m; ++a < h;) i = c[a] = [], i.dx = d[a + 1] - (i.x = d[a]), i.y = 0;
                    if (h > 0)
                        for (a = -1; ++a < m;) s = l[a], s >= u[0] && s <= u[1] && (i = c[si.bisect(d, s, 1, h) - 1], i.y += p, i.push(t[a]));
                    return c
                }
                var r = !0,
                    e = Number,
                    n = bo,
                    o = xo;
                return t.value = function(r) {
                    return arguments.length ? (e = r, t) : e
                }, t.range = function(r) {
                    return arguments.length ? (n = Ot(r), t) : n
                }, t.bins = function(r) {
                    return arguments.length ? (o = "number" == typeof r ? function(t) {
                        return wo(t, r)
                    } : Ot(r), t) : o
                }, t.frequency = function(e) {
                    return arguments.length ? (r = !!e, t) : r
                }, t
            }, si.layout.pack = function() {
                function t(t, a) {
                    var i = e.call(this, t, a),
                        s = i[0],
                        c = o[0],
                        l = o[1],
                        u = null == r ? Math.sqrt : "function" == typeof r ? r : function() {
                            return r
                        };
                    if (s.x = s.y = 0, ao(s, function(t) {
                            t.r = +u(t.value)
                        }), ao(s, Po), n) {
                        var d = n * (r ? 1 : Math.max(2 * s.r / c, 2 * s.r / l)) / 2;
                        ao(s, function(t) {
                            t.r += d
                        }), ao(s, Po), ao(s, function(t) {
                            t.r -= d
                        })
                    }
                    return Co(s, c / 2, l / 2, r ? 1 : 1 / Math.max(2 * s.r / c, 2 * s.r / l)), i
                }
                var r, e = si.layout.hierarchy().sort(Mo),
                    n = 0,
                    o = [1, 1];
                return t.size = function(r) {
                    return arguments.length ? (o = r, t) : o
                }, t.radius = function(e) {
                    return arguments.length ? (r = null == e || "function" == typeof e ? e : +e, t) : r
                }, t.padding = function(r) {
                    return arguments.length ? (n = +r, t) : n
                }, no(t, e)
            }, si.layout.tree = function() {
                function t(t, o) {
                    var u = i.call(this, t, o),
                        d = u[0],
                        m = r(d);
                    if (ao(m, e), m.parent.m = -m.z, oo(m, n), l) oo(d, a);
                    else {
                        var h = d,
                            p = d,
                            f = d;
                        oo(d, function(t) {
                            t.x < h.x && (h = t), t.x > p.x && (p = t), t.depth > f.depth && (f = t)
                        });
                        var g = s(h, p) / 2 - h.x,
                            y = c[0] / (p.x + s(p, h) / 2 + g),
                            v = c[1] / (f.depth || 1);
                        oo(d, function(t) {
                            t.x = (t.x + g) * y, t.y = t.depth * v
                        })
                    }
                    return u
                }

                function r(t) {
                    for (var r, e = {
                            A: null,
                            children: [t]
                        }, n = [e]; null != (r = n.pop());)
                        for (var o, a = r.children, i = 0, s = a.length; s > i; ++i) n.push((a[i] = o = {
                            _: a[i],
                            parent: r,
                            children: (o = a[i].children) && o.slice() || [],
                            A: null,
                            a: null,
                            z: 0,
                            m: 0,
                            c: 0,
                            s: 0,
                            t: null,
                            i: i
                        }).a = o);
                    return e.children[0]
                }

                function e(t) {
                    var r = t.children,
                        e = t.parent.children,
                        n = t.i ? e[t.i - 1] : null;
                    if (r.length) {
                        qo(t);
                        var a = (r[0].z + r[r.length - 1].z) / 2;
                        n ? (t.z = n.z + s(t._, n._), t.m = t.z - a) : t.z = a
                    } else n && (t.z = n.z + s(t._, n._));
                    t.parent.A = o(t, n, t.parent.A || e[0])
                }

                function n(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m
                }

                function o(t, r, e) {
                    if (r) {
                        for (var n, o = t, a = t, i = r, c = o.parent.children[0], l = o.m, u = a.m, d = i.m, m = c.m; i = zo(i), o = Fo(o), i && o;) c = Fo(c), a = zo(a), a.a = t, n = i.z + d - o.z - l + s(i._, o._), n > 0 && (jo(Lo(i, t, e), t, n), l += n, u += n), d += i.m, l += o.m, m += c.m, u += a.m;
                        i && !zo(a) && (a.t = i, a.m += d - u), o && !Fo(c) && (c.t = o, c.m += l - m, e = t)
                    }
                    return e
                }

                function a(t) {
                    t.x *= c[0], t.y = t.depth * c[1]
                }
                var i = si.layout.hierarchy().sort(null).value(null),
                    s = Oo,
                    c = [1, 1],
                    l = null;
                return t.separation = function(r) {
                    return arguments.length ? (s = r, t) : s
                }, t.size = function(r) {
                    return arguments.length ? (l = null == (c = r) ? a : null, t) : l ? null : c
                }, t.nodeSize = function(r) {
                    return arguments.length ? (l = null == (c = r) ? null : a, t) : l ? c : null
                }, no(t, i)
            }, si.layout.cluster = function() {
                function t(t, a) {
                    var i, s = r.call(this, t, a),
                        c = s[0],
                        l = 0;
                    ao(c, function(t) {
                        var r = t.children;
                        r && r.length ? (t.x = Ro(r), t.y = To(r)) : (t.x = i ? l += e(t, i) : 0, t.y = 0, i = t)
                    });
                    var u = Do(c),
                        d = Io(c),
                        m = u.x - e(u, d) / 2,
                        h = d.x + e(d, u) / 2;
                    return ao(c, o ? function(t) {
                        t.x = (t.x - c.x) * n[0], t.y = (c.y - t.y) * n[1]
                    } : function(t) {
                        t.x = (t.x - m) / (h - m) * n[0], t.y = (1 - (c.y ? t.y / c.y : 1)) * n[1]
                    }), s
                }
                var r = si.layout.hierarchy().sort(null).value(null),
                    e = Oo,
                    n = [1, 1],
                    o = !1;
                return t.separation = function(r) {
                    return arguments.length ? (e = r, t) : e
                }, t.size = function(r) {
                    return arguments.length ? (o = null == (n = r), t) : o ? null : n
                }, t.nodeSize = function(r) {
                    return arguments.length ? (o = null != (n = r), t) : o ? n : null
                }, no(t, r)
            }, si.layout.treemap = function() {
                function t(t, r) {
                    for (var e, n, o = -1, a = t.length; ++o < a;) n = (e = t[o]).value * (0 > r ? 0 : r), e.area = isNaN(n) || 0 >= n ? 0 : n
                }

                function r(e) {
                    var a = e.children;
                    if (a && a.length) {
                        var i, s, c, l = d(e),
                            u = [],
                            m = a.slice(),
                            p = 1 / 0,
                            f = "slice" === h ? l.dx : "dice" === h ? l.dy : "slice-dice" === h ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                        for (t(m, l.dx * l.dy / e.value), u.area = 0;
                            (c = m.length) > 0;) u.push(i = m[c - 1]), u.area += i.area, "squarify" !== h || (s = n(u, f)) <= p ? (m.pop(), p = s) : (u.area -= u.pop().area, o(u, f, l, !1), f = Math.min(l.dx, l.dy), u.length = u.area = 0, p = 1 / 0);
                        u.length && (o(u, f, l, !0), u.length = u.area = 0), a.forEach(r)
                    }
                }

                function e(r) {
                    var n = r.children;
                    if (n && n.length) {
                        var a, i = d(r),
                            s = n.slice(),
                            c = [];
                        for (t(s, i.dx * i.dy / r.value), c.area = 0; a = s.pop();) c.push(a), c.area += a.area, null != a.z && (o(c, a.z ? i.dx : i.dy, i, !s.length), c.length = c.area = 0);
                        n.forEach(e)
                    }
                }

                function n(t, r) {
                    for (var e, n = t.area, o = 0, a = 1 / 0, i = -1, s = t.length; ++i < s;)(e = t[i].area) && (a > e && (a = e), e > o && (o = e));
                    return n *= n, r *= r, n ? Math.max(r * o * p / n, n / (r * a * p)) : 1 / 0
                }

                function o(t, r, e, n) {
                    var o, a = -1,
                        i = t.length,
                        s = e.x,
                        l = e.y,
                        u = r ? c(t.area / r) : 0;
                    if (r == e.dx) {
                        for ((n || u > e.dy) && (u = e.dy); ++a < i;) o = t[a], o.x = s, o.y = l, o.dy = u, s += o.dx = Math.min(e.x + e.dx - s, u ? c(o.area / u) : 0);
                        o.z = !0, o.dx += e.x + e.dx - s, e.y += u, e.dy -= u
                    } else {
                        for ((n || u > e.dx) && (u = e.dx); ++a < i;) o = t[a], o.x = s, o.y = l, o.dx = u, l += o.dy = Math.min(e.y + e.dy - l, u ? c(o.area / u) : 0);
                        o.z = !1, o.dy += e.y + e.dy - l, e.x += u, e.dx -= u
                    }
                }

                function a(n) {
                    var o = i || s(n),
                        a = o[0];
                    return a.x = 0, a.y = 0, a.dx = l[0], a.dy = l[1], i && s.revalue(a), t([a], a.dx * a.dy / a.value), (i ? e : r)(a), m && (i = o), o
                }
                var i, s = si.layout.hierarchy(),
                    c = Math.round,
                    l = [1, 1],
                    u = null,
                    d = Wo,
                    m = !1,
                    h = "squarify",
                    p = .5 * (1 + Math.sqrt(5));
                return a.size = function(t) {
                    return arguments.length ? (l = t, a) : l
                }, a.padding = function(t) {
                    function r(r) {
                        var e = t.call(a, r, r.depth);
                        return null == e ? Wo(r) : Uo(r, "number" == typeof e ? [e, e, e, e] : e)
                    }

                    function e(r) {
                        return Uo(r, t)
                    }
                    if (!arguments.length) return u;
                    var n;
                    return d = null == (u = t) ? Wo : "function" == (n = typeof t) ? r : "number" === n ? (t = [t, t, t, t], e) : e, a
                }, a.round = function(t) {
                    return arguments.length ? (c = t ? Math.round : Number, a) : c != Number
                }, a.sticky = function(t) {
                    return arguments.length ? (m = t, i = null, a) : m
                }, a.ratio = function(t) {
                    return arguments.length ? (p = t, a) : p
                }, a.mode = function(t) {
                    return arguments.length ? (h = t + "", a) : h
                }, no(a, s)
            }, si.random = {
                normal: function(t, r) {
                    var e = arguments.length;
                    return 2 > e && (r = 1), 1 > e && (t = 0),
                        function() {
                            var e, n, o;
                            do e = 2 * Math.random() - 1, n = 2 * Math.random() - 1, o = e * e + n * n; while (!o || o > 1);
                            return t + r * e * Math.sqrt(-2 * Math.log(o) / o)
                        }
                },
                logNormal: function() {
                    var t = si.random.normal.apply(si, arguments);
                    return function() {
                        return Math.exp(t())
                    }
                },
                bates: function(t) {
                    var r = si.random.irwinHall(t);
                    return function() {
                        return r() / t
                    }
                },
                irwinHall: function(t) {
                    return function() {
                        for (var r = 0, e = 0; t > e; e++) r += Math.random();
                        return r
                    }
                }
            }, si.scale = {};
            var kc = {
                floor: k,
                ceil: k
            };
            si.scale.linear = function() {
                return $o([0, 1], [0, 1], kn, !1)
            };
            var _c = {
                s: 1,
                g: 1,
                p: 1,
                r: 1,
                e: 1
            };
            si.scale.log = function() {
                return na(si.scale.linear().domain([0, 1]), 10, !0, [1, 10])
            };
            var Nc = si.format(".0e"),
                Pc = {
                    floor: function(t) {
                        return -Math.ceil(-t)
                    },
                    ceil: function(t) {
                        return -Math.floor(-t)
                    }
                };
            si.scale.pow = function() {
                return oa(si.scale.linear(), 1, [0, 1])
            }, si.scale.sqrt = function() {
                return si.scale.pow().exponent(.5)
            }, si.scale.ordinal = function() {
                return ia([], {
                    t: "range",
                    a: [
                        []
                    ]
                })
            }, si.scale.category10 = function() {
                return si.scale.ordinal().range(Ec)
            }, si.scale.category20 = function() {
                return si.scale.ordinal().range(Ac)
            }, si.scale.category20b = function() {
                return si.scale.ordinal().range(Cc)
            }, si.scale.category20c = function() {
                return si.scale.ordinal().range(Sc)
            };
            var Ec = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(_t),
                Ac = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(_t),
                Cc = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(_t),
                Sc = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(_t);
            si.scale.quantile = function() {
                return sa([], [])
            }, si.scale.quantize = function() {
                return ca(0, 1, [0, 1])
            }, si.scale.threshold = function() {
                return la([.5], [0, 1])
            }, si.scale.identity = function() {
                return ua([0, 1])
            }, si.svg = {}, si.svg.arc = function() {
                function t() {
                    var t = Math.max(0, +e.apply(this, arguments)),
                        l = Math.max(0, +n.apply(this, arguments)),
                        u = i.apply(this, arguments) - Ii,
                        d = s.apply(this, arguments) - Ii,
                        m = Math.abs(d - u),
                        h = u > d ? 0 : 1;
                    if (t > l && (p = l, l = t, t = p), m >= Di) return r(l, h) + (t ? r(t, 1 - h) : "") + "Z";
                    var p, f, g, y, v, x, w, b, M, k, _, N, P = 0,
                        E = 0,
                        A = [];
                    if ((y = (+c.apply(this, arguments) || 0) / 2) && (g = a === Oc ? Math.sqrt(t * t + l * l) : +a.apply(this, arguments), h || (E *= -1), l && (E = it(g / l * Math.sin(y))), t && (P = it(g / t * Math.sin(y)))), l) {
                        v = l * Math.cos(u + E), x = l * Math.sin(u + E), w = l * Math.cos(d - E), b = l * Math.sin(d - E);
                        var C = Math.abs(d - u - 2 * E) <= Ti ? 0 : 1;
                        if (E && ya(v, x, w, b) === h ^ C) {
                            var S = (u + d) / 2;
                            v = l * Math.cos(S), x = l * Math.sin(S), w = b = null
                        }
                    } else v = x = 0;
                    if (t) {
                        M = t * Math.cos(d - P), k = t * Math.sin(d - P), _ = t * Math.cos(u + P), N = t * Math.sin(u + P);
                        var O = Math.abs(u - d + 2 * P) <= Ti ? 0 : 1;
                        if (P && ya(M, k, _, N) === 1 - h ^ O) {
                            var F = (u + d) / 2;
                            M = t * Math.cos(F), k = t * Math.sin(F), _ = N = null
                        }
                    } else M = k = 0;
                    if ((p = Math.min(Math.abs(l - t) / 2, +o.apply(this, arguments))) > .001) {
                        f = l > t ^ h ? 0 : 1;
                        var z = null == _ ? [M, k] : null == w ? [v, x] : Te([v, x], [_, N], [w, b], [M, k]),
                            j = v - z[0],
                            q = x - z[1],
                            L = w - z[0],
                            T = b - z[1],
                            R = 1 / Math.sin(Math.acos((j * L + q * T) / (Math.sqrt(j * j + q * q) * Math.sqrt(L * L + T * T))) / 2),
                            D = Math.sqrt(z[0] * z[0] + z[1] * z[1]);
                        if (null != w) {
                            var I = Math.min(p, (l - D) / (R + 1)),
                                W = va(null == _ ? [M, k] : [_, N], [v, x], l, I, h),
                                U = va([w, b], [M, k], l, I, h);
                            p === I ? A.push("M", W[0], "A", I, ",", I, " 0 0,", f, " ", W[1], "A", l, ",", l, " 0 ", 1 - h ^ ya(W[1][0], W[1][1], U[1][0], U[1][1]), ",", h, " ", U[1], "A", I, ",", I, " 0 0,", f, " ", U[0]) : A.push("M", W[0], "A", I, ",", I, " 0 1,", f, " ", U[0])
                        } else A.push("M", v, ",", x);
                        if (null != _) {
                            var G = Math.min(p, (t - D) / (R - 1)),
                                B = va([v, x], [_, N], t, -G, h),
                                H = va([M, k], null == w ? [v, x] : [w, b], t, -G, h);
                            p === G ? A.push("L", H[0], "A", G, ",", G, " 0 0,", f, " ", H[1], "A", t, ",", t, " 0 ", h ^ ya(H[1][0], H[1][1], B[1][0], B[1][1]), ",", 1 - h, " ", B[1], "A", G, ",", G, " 0 0,", f, " ", B[0]) : A.push("L", H[0], "A", G, ",", G, " 0 0,", f, " ", B[0])
                        } else A.push("L", M, ",", k)
                    } else A.push("M", v, ",", x), null != w && A.push("A", l, ",", l, " 0 ", C, ",", h, " ", w, ",", b), A.push("L", M, ",", k), null != _ && A.push("A", t, ",", t, " 0 ", O, ",", 1 - h, " ", _, ",", N);
                    return A.push("Z"), A.join("")
                }

                function r(t, r) {
                    return "M0," + t + "A" + t + "," + t + " 0 1," + r + " 0," + -t + "A" + t + "," + t + " 0 1," + r + " 0," + t
                }
                var e = ma,
                    n = ha,
                    o = da,
                    a = Oc,
                    i = pa,
                    s = fa,
                    c = ga;
                return t.innerRadius = function(r) {
                    return arguments.length ? (e = Ot(r), t) : e
                }, t.outerRadius = function(r) {
                    return arguments.length ? (n = Ot(r), t) : n
                }, t.cornerRadius = function(r) {
                    return arguments.length ? (o = Ot(r), t) : o
                }, t.padRadius = function(r) {
                    return arguments.length ? (a = r == Oc ? Oc : Ot(r), t) : a
                }, t.startAngle = function(r) {
                    return arguments.length ? (i = Ot(r), t) : i
                }, t.endAngle = function(r) {
                    return arguments.length ? (s = Ot(r), t) : s
                }, t.padAngle = function(r) {
                    return arguments.length ? (c = Ot(r), t) : c
                }, t.centroid = function() {
                    var t = (+e.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                        r = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Ii;
                    return [Math.cos(r) * t, Math.sin(r) * t]
                }, t
            };
            var Oc = "auto";
            si.svg.line = function() {
                return xa(k)
            };
            var Fc = si.map({
                linear: wa,
                "linear-closed": ba,
                step: Ma,
                "step-before": ka,
                "step-after": _a,
                basis: Sa,
                "basis-open": Oa,
                "basis-closed": Fa,
                bundle: za,
                cardinal: Ea,
                "cardinal-open": Na,
                "cardinal-closed": Pa,
                monotone: Da
            });
            Fc.forEach(function(t, r) {
                r.key = t, r.closed = /-closed$/.test(t)
            });
            var zc = [0, 2 / 3, 1 / 3, 0],
                jc = [0, 1 / 3, 2 / 3, 0],
                qc = [0, 1 / 6, 2 / 3, 1 / 6];
            si.svg.line.radial = function() {
                var t = xa(Ia);
                return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
            }, ka.reverse = _a, _a.reverse = ka, si.svg.area = function() {
                return Wa(k)
            }, si.svg.area.radial = function() {
                var t = Wa(Ia);
                return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
            }, si.svg.chord = function() {
                function t(t, s) {
                    var c = r(this, a, t, s),
                        l = r(this, i, t, s);
                    return "M" + c.p0 + n(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? o(c.r, c.p1, c.r, c.p0) : o(c.r, c.p1, l.r, l.p0) + n(l.r, l.p1, l.a1 - l.a0) + o(l.r, l.p1, c.r, c.p0)) + "Z"
                }

                function r(t, r, e, n) {
                    var o = r.call(t, e, n),
                        a = s.call(t, o, n),
                        i = c.call(t, o, n) - Ii,
                        u = l.call(t, o, n) - Ii;
                    return {
                        r: a,
                        a0: i,
                        a1: u,
                        p0: [a * Math.cos(i), a * Math.sin(i)],
                        p1: [a * Math.cos(u), a * Math.sin(u)]
                    }
                }

                function e(t, r) {
                    return t.a0 == r.a0 && t.a1 == r.a1
                }

                function n(t, r, e) {
                    return "A" + t + "," + t + " 0 " + +(e > Ti) + ",1 " + r
                }

                function o(t, r, e, n) {
                    return "Q 0,0 " + n
                }
                var a = Me,
                    i = ke,
                    s = Ua,
                    c = pa,
                    l = fa;
                return t.radius = function(r) {
                    return arguments.length ? (s = Ot(r), t) : s
                }, t.source = function(r) {
                    return arguments.length ? (a = Ot(r), t) : a
                }, t.target = function(r) {
                    return arguments.length ? (i = Ot(r), t) : i
                }, t.startAngle = function(r) {
                    return arguments.length ? (c = Ot(r), t) : c
                }, t.endAngle = function(r) {
                    return arguments.length ? (l = Ot(r), t) : l
                }, t
            }, si.svg.diagonal = function() {
                function t(t, o) {
                    var a = r.call(this, t, o),
                        i = e.call(this, t, o),
                        s = (a.y + i.y) / 2,
                        c = [a, {
                            x: a.x,
                            y: s
                        }, {
                            x: i.x,
                            y: s
                        }, i];
                    return c = c.map(n), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
                }
                var r = Me,
                    e = ke,
                    n = Ga;
                return t.source = function(e) {
                    return arguments.length ? (r = Ot(e), t) : r
                }, t.target = function(r) {
                    return arguments.length ? (e = Ot(r), t) : e
                }, t.projection = function(r) {
                    return arguments.length ? (n = r, t) : n
                }, t
            }, si.svg.diagonal.radial = function() {
                var t = si.svg.diagonal(),
                    r = Ga,
                    e = t.projection;
                return t.projection = function(t) {
                    return arguments.length ? e(Ba(r = t)) : r
                }, t
            }, si.svg.symbol = function() {
                function t(t, n) {
                    return (Lc.get(r.call(this, t, n)) || Ya)(e.call(this, t, n))
                }
                var r = Va,
                    e = Ha;
                return t.type = function(e) {
                    return arguments.length ? (r = Ot(e), t) : r
                }, t.size = function(r) {
                    return arguments.length ? (e = Ot(r), t) : e
                }, t
            };
            var Lc = si.map({
                circle: Ya,
                cross: function(t) {
                    var r = Math.sqrt(t / 5) / 2;
                    return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z"
                },
                diamond: function(t) {
                    var r = Math.sqrt(t / (2 * Rc)),
                        e = r * Rc;
                    return "M0," + -r + "L" + e + ",0 0," + r + " " + -e + ",0Z"
                },
                square: function(t) {
                    var r = Math.sqrt(t) / 2;
                    return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z"
                },
                "triangle-down": function(t) {
                    var r = Math.sqrt(t / Tc),
                        e = r * Tc / 2;
                    return "M0," + e + "L" + r + "," + -e + " " + -r + "," + -e + "Z"
                },
                "triangle-up": function(t) {
                    var r = Math.sqrt(t / Tc),
                        e = r * Tc / 2;
                    return "M0," + -e + "L" + r + "," + e + " " + -r + "," + e + "Z"
                }
            });
            si.svg.symbolTypes = Lc.keys();
            var Tc = Math.sqrt(3),
                Rc = Math.tan(30 * Wi);
            Ai.transition = function(t) {
                for (var r, e, n = Dc || ++Gc, o = Ka(t), a = [], i = Ic || {
                        time: Date.now(),
                        ease: Sn,
                        delay: 0,
                        duration: 250
                    }, s = -1, c = this.length; ++s < c;) {
                    a.push(r = []);
                    for (var l = this[s], u = -1, d = l.length; ++u < d;)(e = l[u]) && Qa(e, u, o, n, i), r.push(e)
                }
                return $a(a, o, n)
            }, Ai.interrupt = function(t) {
                return this.each(null == t ? Wc : Za(Ka(t)))
            };
            var Dc, Ic, Wc = Za(Ka()),
                Uc = [],
                Gc = 0;
            Uc.call = Ai.call, Uc.empty = Ai.empty, Uc.node = Ai.node, Uc.size = Ai.size, si.transition = function(t, r) {
                return t && t.transition ? Dc ? t.transition(r) : t : si.selection().transition(t)
            }, si.transition.prototype = Uc, Uc.select = function(t) {
                var r, e, n, o = this.id,
                    a = this.namespace,
                    i = [];
                t = z(t);
                for (var s = -1, c = this.length; ++s < c;) {
                    i.push(r = []);
                    for (var l = this[s], u = -1, d = l.length; ++u < d;)(n = l[u]) && (e = t.call(n, n.__data__, u, s)) ? ("__data__" in n && (e.__data__ = n.__data__), Qa(e, u, a, o, n[a][o]), r.push(e)) : r.push(null)
                }
                return $a(i, a, o)
            }, Uc.selectAll = function(t) {
                var r, e, n, o, a, i = this.id,
                    s = this.namespace,
                    c = [];
                t = j(t);
                for (var l = -1, u = this.length; ++l < u;)
                    for (var d = this[l], m = -1, h = d.length; ++m < h;)
                        if (n = d[m]) {
                            a = n[s][i], e = t.call(n, n.__data__, m, l), c.push(r = []);
                            for (var p = -1, f = e.length; ++p < f;)(o = e[p]) && Qa(o, p, s, i, a), r.push(o)
                        }
                return $a(c, s, i)
            }, Uc.filter = function(t) {
                var r, e, n, o = [];
                "function" != typeof t && (t = V(t));
                for (var a = 0, i = this.length; i > a; a++) {
                    o.push(r = []);
                    for (var e = this[a], s = 0, c = e.length; c > s; s++)(n = e[s]) && t.call(n, n.__data__, s, a) && r.push(n)
                }
                return $a(o, this.namespace, this.id)
            }, Uc.tween = function(t, r) {
                var e = this.id,
                    n = this.namespace;
                return arguments.length < 2 ? this.node()[n][e].tween.get(t) : Z(this, null == r ? function(r) {
                    r[n][e].tween.remove(t)
                } : function(o) {
                    o[n][e].tween.set(t, r)
                })
            }, Uc.attr = function(t, r) {
                function e() {
                    this.removeAttribute(s)
                }

                function n() {
                    this.removeAttributeNS(s.space, s.local)
                }

                function o(t) {
                    return null == t ? e : (t += "", function() {
                        var r, e = this.getAttribute(s);
                        return e !== t && (r = i(e, t), function(t) {
                            this.setAttribute(s, r(t))
                        })
                    })
                }

                function a(t) {
                    return null == t ? n : (t += "", function() {
                        var r, e = this.getAttributeNS(s.space, s.local);
                        return e !== t && (r = i(e, t), function(t) {
                            this.setAttributeNS(s.space, s.local, r(t))
                        })
                    })
                }
                if (arguments.length < 2) {
                    for (r in t) this.attr(r, t[r]);
                    return this
                }
                var i = "transform" == t ? Vn : kn,
                    s = si.ns.qualify(t);
                return Ja(this, "attr." + t, r, s.local ? a : o)
            }, Uc.attrTween = function(t, r) {
                function e(t, e) {
                    var n = r.call(this, t, e, this.getAttribute(o));
                    return n && function(t) {
                        this.setAttribute(o, n(t))
                    }
                }

                function n(t, e) {
                    var n = r.call(this, t, e, this.getAttributeNS(o.space, o.local));
                    return n && function(t) {
                        this.setAttributeNS(o.space, o.local, n(t))
                    }
                }
                var o = si.ns.qualify(t);
                return this.tween("attr." + t, o.local ? n : e)
            }, Uc.style = function(t, r, e) {
                function n() {
                    this.style.removeProperty(t)
                }

                function o(r) {
                    return null == r ? n : (r += "", function() {
                        var n, o = i(this).getComputedStyle(this, null).getPropertyValue(t);
                        return o !== r && (n = kn(o, r), function(r) {
                            this.style.setProperty(t, n(r), e)
                        })
                    })
                }
                var a = arguments.length;
                if (3 > a) {
                    if ("string" != typeof t) {
                        2 > a && (r = "");
                        for (e in t) this.style(e, t[e], r);
                        return this
                    }
                    e = ""
                }
                return Ja(this, "style." + t, r, o)
            }, Uc.styleTween = function(t, r, e) {
                function n(n, o) {
                    var a = r.call(this, n, o, i(this).getComputedStyle(this, null).getPropertyValue(t));
                    return a && function(r) {
                        this.style.setProperty(t, a(r), e);
                    }
                }
                return arguments.length < 3 && (e = ""), this.tween("style." + t, n)
            }, Uc.text = function(t) {
                return Ja(this, "text", t, Xa)
            }, Uc.remove = function() {
                var t = this.namespace;
                return this.each("end.transition", function() {
                    var r;
                    this[t].count < 2 && (r = this.parentNode) && r.removeChild(this)
                })
            }, Uc.ease = function(t) {
                var r = this.id,
                    e = this.namespace;
                return arguments.length < 1 ? this.node()[e][r].ease : ("function" != typeof t && (t = si.ease.apply(si, arguments)), Z(this, function(n) {
                    n[e][r].ease = t
                }))
            }, Uc.delay = function(t) {
                var r = this.id,
                    e = this.namespace;
                return arguments.length < 1 ? this.node()[e][r].delay : Z(this, "function" == typeof t ? function(n, o, a) {
                    n[e][r].delay = +t.call(n, n.__data__, o, a)
                } : (t = +t, function(n) {
                    n[e][r].delay = t
                }))
            }, Uc.duration = function(t) {
                var r = this.id,
                    e = this.namespace;
                return arguments.length < 1 ? this.node()[e][r].duration : Z(this, "function" == typeof t ? function(n, o, a) {
                    n[e][r].duration = Math.max(1, t.call(n, n.__data__, o, a))
                } : (t = Math.max(1, t), function(n) {
                    n[e][r].duration = t
                }))
            }, Uc.each = function(t, r) {
                var e = this.id,
                    n = this.namespace;
                if (arguments.length < 2) {
                    var o = Ic,
                        a = Dc;
                    try {
                        Dc = e, Z(this, function(r, o, a) {
                            Ic = r[n][e], t.call(r, r.__data__, o, a)
                        })
                    } finally {
                        Ic = o, Dc = a
                    }
                } else Z(this, function(o) {
                    var a = o[n][e];
                    (a.event || (a.event = si.dispatch("start", "end", "interrupt"))).on(t, r)
                });
                return this
            }, Uc.transition = function() {
                for (var t, r, e, n, o = this.id, a = ++Gc, i = this.namespace, s = [], c = 0, l = this.length; l > c; c++) {
                    s.push(t = []);
                    for (var r = this[c], u = 0, d = r.length; d > u; u++)(e = r[u]) && (n = e[i][o], Qa(e, u, i, a, {
                        time: n.time,
                        ease: n.ease,
                        delay: n.delay + n.duration,
                        duration: n.duration
                    })), t.push(e)
                }
                return $a(s, i, a)
            }, si.svg.axis = function() {
                function t(t) {
                    t.each(function() {
                        var t, l = si.select(this),
                            u = this.__chart__ || e,
                            d = this.__chart__ = e.copy(),
                            m = null == c ? d.ticks ? d.ticks.apply(d, s) : d.domain() : c,
                            h = null == r ? d.tickFormat ? d.tickFormat.apply(d, s) : k : r,
                            p = l.selectAll(".tick").data(m, d),
                            f = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", qi),
                            g = si.transition(p.exit()).style("opacity", qi).remove(),
                            y = si.transition(p.order()).style("opacity", 1),
                            v = Math.max(o, 0) + i,
                            x = Bo(d),
                            w = l.selectAll(".domain").data([0]),
                            b = (w.enter().append("path").attr("class", "domain"), si.transition(w));
                        f.append("line"), f.append("text");
                        var M, _, N, P, E = f.select("line"),
                            A = y.select("line"),
                            C = p.select("text").text(h),
                            S = f.select("text"),
                            O = y.select("text"),
                            F = "top" === n || "left" === n ? -1 : 1;
                        if ("bottom" === n || "top" === n ? (t = ti, M = "x", N = "y", _ = "x2", P = "y2", C.attr("dy", 0 > F ? "0em" : ".71em").style("text-anchor", "middle"), b.attr("d", "M" + x[0] + "," + F * a + "V0H" + x[1] + "V" + F * a)) : (t = ri, M = "y", N = "x", _ = "y2", P = "x2", C.attr("dy", ".32em").style("text-anchor", 0 > F ? "end" : "start"), b.attr("d", "M" + F * a + "," + x[0] + "H0V" + x[1] + "H" + F * a)), E.attr(P, F * o), S.attr(N, F * v), A.attr(_, 0).attr(P, F * o), O.attr(M, 0).attr(N, F * v), d.rangeBand) {
                            var z = d,
                                j = z.rangeBand() / 2;
                            u = d = function(t) {
                                return z(t) + j
                            }
                        } else u.rangeBand ? u = d : g.call(t, d, u);
                        f.call(t, u, d), y.call(t, d, d)
                    })
                }
                var r, e = si.scale.linear(),
                    n = Bc,
                    o = 6,
                    a = 6,
                    i = 3,
                    s = [10],
                    c = null;
                return t.scale = function(r) {
                    return arguments.length ? (e = r, t) : e
                }, t.orient = function(r) {
                    return arguments.length ? (n = r in Hc ? r + "" : Bc, t) : n
                }, t.ticks = function() {
                    return arguments.length ? (s = arguments, t) : s
                }, t.tickValues = function(r) {
                    return arguments.length ? (c = r, t) : c
                }, t.tickFormat = function(e) {
                    return arguments.length ? (r = e, t) : r
                }, t.tickSize = function(r) {
                    var e = arguments.length;
                    return e ? (o = +r, a = +arguments[e - 1], t) : o
                }, t.innerTickSize = function(r) {
                    return arguments.length ? (o = +r, t) : o
                }, t.outerTickSize = function(r) {
                    return arguments.length ? (a = +r, t) : a
                }, t.tickPadding = function(r) {
                    return arguments.length ? (i = +r, t) : i
                }, t.tickSubdivide = function() {
                    return arguments.length && t
                }, t
            };
            var Bc = "bottom",
                Hc = {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1
                };
            si.svg.brush = function() {
                function t(a) {
                    a.each(function() {
                        var a = si.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", o).on("touchstart.brush", o),
                            i = a.selectAll(".background").data([0]);
                        i.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), a.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                        var s = a.selectAll(".resize").data(f, k);
                        s.exit().remove(), s.enter().append("g").attr("class", function(t) {
                            return "resize " + t
                        }).style("cursor", function(t) {
                            return Vc[t]
                        }).append("rect").attr("x", function(t) {
                            return /[ew]$/.test(t) ? -3 : null
                        }).attr("y", function(t) {
                            return /^[ns]/.test(t) ? -3 : null
                        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), s.style("display", t.empty() ? "none" : null);
                        var c, d = si.transition(a),
                            m = si.transition(i);
                        l && (c = Bo(l), m.attr("x", c[0]).attr("width", c[1] - c[0]), e(d)), u && (c = Bo(u), m.attr("y", c[0]).attr("height", c[1] - c[0]), n(d)), r(d)
                    })
                }

                function r(t) {
                    t.selectAll(".resize").attr("transform", function(t) {
                        return "translate(" + d[+/e$/.test(t)] + "," + m[+/^s/.test(t)] + ")"
                    })
                }

                function e(t) {
                    t.select(".extent").attr("x", d[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", d[1] - d[0])
                }

                function n(t) {
                    t.select(".extent").attr("y", m[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", m[1] - m[0])
                }

                function o() {
                    function o() {
                        32 == si.event.keyCode && (A || (x = null, O[0] -= d[1], O[1] -= m[1], A = 2), C())
                    }

                    function f() {
                        32 == si.event.keyCode && 2 == A && (O[0] += d[1], O[1] += m[1], A = 0, C())
                    }

                    function g() {
                        var t = si.mouse(b),
                            o = !1;
                        w && (t[0] += w[0], t[1] += w[1]), A || (si.event.altKey ? (x || (x = [(d[0] + d[1]) / 2, (m[0] + m[1]) / 2]), O[0] = d[+(t[0] < x[0])], O[1] = m[+(t[1] < x[1])]) : x = null), P && y(t, l, 0) && (e(_), o = !0), E && y(t, u, 1) && (n(_), o = !0), o && (r(_), k({
                            type: "brush",
                            mode: A ? "move" : "resize"
                        }))
                    }

                    function y(t, r, e) {
                        var n, o, i = Bo(r),
                            c = i[0],
                            l = i[1],
                            u = O[e],
                            f = e ? m : d,
                            g = f[1] - f[0];
                        return A && (c -= u, l -= g + u), n = (e ? p : h) ? Math.max(c, Math.min(l, t[e])) : t[e], A ? o = (n += u) + g : (x && (u = Math.max(c, Math.min(l, 2 * x[e] - n))), n > u ? (o = n, n = u) : o = u), f[0] != n || f[1] != o ? (e ? s = null : a = null, f[0] = n, f[1] = o, !0) : void 0
                    }

                    function v() {
                        g(), _.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), si.select("body").style("cursor", null), F.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), S(), k({
                            type: "brushend"
                        })
                    }
                    var x, w, b = this,
                        M = si.select(si.event.target),
                        k = c.of(b, arguments),
                        _ = si.select(b),
                        N = M.datum(),
                        P = !/^(n|s)$/.test(N) && l,
                        E = !/^(e|w)$/.test(N) && u,
                        A = M.classed("extent"),
                        S = tt(b),
                        O = si.mouse(b),
                        F = si.select(i(b)).on("keydown.brush", o).on("keyup.brush", f);
                    if (si.event.changedTouches ? F.on("touchmove.brush", g).on("touchend.brush", v) : F.on("mousemove.brush", g).on("mouseup.brush", v), _.interrupt().selectAll("*").interrupt(), A) O[0] = d[0] - O[0], O[1] = m[0] - O[1];
                    else if (N) {
                        var z = +/w$/.test(N),
                            j = +/^n/.test(N);
                        w = [d[1 - z] - O[0], m[1 - j] - O[1]], O[0] = d[z], O[1] = m[j]
                    } else si.event.altKey && (x = O.slice());
                    _.style("pointer-events", "none").selectAll(".resize").style("display", null), si.select("body").style("cursor", M.style("cursor")), k({
                        type: "brushstart"
                    }), g()
                }
                var a, s, c = O(t, "brushstart", "brush", "brushend"),
                    l = null,
                    u = null,
                    d = [0, 0],
                    m = [0, 0],
                    h = !0,
                    p = !0,
                    f = Yc[0];
                return t.event = function(t) {
                    t.each(function() {
                        var t = c.of(this, arguments),
                            r = {
                                x: d,
                                y: m,
                                i: a,
                                j: s
                            },
                            e = this.__chart__ || r;
                        this.__chart__ = r, Dc ? si.select(this).transition().each("start.brush", function() {
                            a = e.i, s = e.j, d = e.x, m = e.y, t({
                                type: "brushstart"
                            })
                        }).tween("brush:brush", function() {
                            var e = _n(d, r.x),
                                n = _n(m, r.y);
                            return a = s = null,
                                function(o) {
                                    d = r.x = e(o), m = r.y = n(o), t({
                                        type: "brush",
                                        mode: "resize"
                                    })
                                }
                        }).each("end.brush", function() {
                            a = r.i, s = r.j, t({
                                type: "brush",
                                mode: "resize"
                            }), t({
                                type: "brushend"
                            })
                        }) : (t({
                            type: "brushstart"
                        }), t({
                            type: "brush",
                            mode: "resize"
                        }), t({
                            type: "brushend"
                        }))
                    })
                }, t.x = function(r) {
                    return arguments.length ? (l = r, f = Yc[!l << 1 | !u], t) : l
                }, t.y = function(r) {
                    return arguments.length ? (u = r, f = Yc[!l << 1 | !u], t) : u
                }, t.clamp = function(r) {
                    return arguments.length ? (l && u ? (h = !!r[0], p = !!r[1]) : l ? h = !!r : u && (p = !!r), t) : l && u ? [h, p] : l ? h : u ? p : null
                }, t.extent = function(r) {
                    var e, n, o, i, c;
                    return arguments.length ? (l && (e = r[0], n = r[1], u && (e = e[0], n = n[0]), a = [e, n], l.invert && (e = l(e), n = l(n)), e > n && (c = e, e = n, n = c), (e != d[0] || n != d[1]) && (d = [e, n])), u && (o = r[0], i = r[1], l && (o = o[1], i = i[1]), s = [o, i], u.invert && (o = u(o), i = u(i)), o > i && (c = o, o = i, i = c), (o != m[0] || i != m[1]) && (m = [o, i])), t) : (l && (a ? (e = a[0], n = a[1]) : (e = d[0], n = d[1], l.invert && (e = l.invert(e), n = l.invert(n)), e > n && (c = e, e = n, n = c))), u && (s ? (o = s[0], i = s[1]) : (o = m[0], i = m[1], u.invert && (o = u.invert(o), i = u.invert(i)), o > i && (c = o, o = i, i = c))), l && u ? [
                        [e, o],
                        [n, i]
                    ] : l ? [e, n] : u && [o, i])
                }, t.clear = function() {
                    return t.empty() || (d = [0, 0], m = [0, 0], a = s = null), t
                }, t.empty = function() {
                    return !!l && d[0] == d[1] || !!u && m[0] == m[1]
                }, si.rebind(t, c, "on")
            };
            var Vc = {
                    n: "ns-resize",
                    e: "ew-resize",
                    s: "ns-resize",
                    w: "ew-resize",
                    nw: "nwse-resize",
                    ne: "nesw-resize",
                    se: "nwse-resize",
                    sw: "nesw-resize"
                },
                Yc = [
                    ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
                    ["e", "w"],
                    ["n", "s"],
                    []
                ],
                Zc = hs.format = xs.timeFormat,
                $c = Zc.utc,
                Jc = $c("%Y-%m-%dT%H:%M:%S.%LZ");
            Zc.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? ei : Jc, ei.parse = function(t) {
                var r = new Date(t);
                return isNaN(r) ? null : r
            }, ei.toString = Jc.toString, hs.second = Bt(function(t) {
                return new ps(1e3 * Math.floor(t / 1e3))
            }, function(t, r) {
                t.setTime(t.getTime() + 1e3 * Math.floor(r))
            }, function(t) {
                return t.getSeconds()
            }), hs.seconds = hs.second.range, hs.seconds.utc = hs.second.utc.range, hs.minute = Bt(function(t) {
                return new ps(6e4 * Math.floor(t / 6e4))
            }, function(t, r) {
                t.setTime(t.getTime() + 6e4 * Math.floor(r))
            }, function(t) {
                return t.getMinutes()
            }), hs.minutes = hs.minute.range, hs.minutes.utc = hs.minute.utc.range, hs.hour = Bt(function(t) {
                var r = t.getTimezoneOffset() / 60;
                return new ps(36e5 * (Math.floor(t / 36e5 - r) + r))
            }, function(t, r) {
                t.setTime(t.getTime() + 36e5 * Math.floor(r))
            }, function(t) {
                return t.getHours()
            }), hs.hours = hs.hour.range, hs.hours.utc = hs.hour.utc.range, hs.month = Bt(function(t) {
                return t = hs.day(t), t.setDate(1), t
            }, function(t, r) {
                t.setMonth(t.getMonth() + r)
            }, function(t) {
                return t.getMonth()
            }), hs.months = hs.month.range, hs.months.utc = hs.month.utc.range;
            var Xc = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
                Kc = [
                    [hs.second, 1],
                    [hs.second, 5],
                    [hs.second, 15],
                    [hs.second, 30],
                    [hs.minute, 1],
                    [hs.minute, 5],
                    [hs.minute, 15],
                    [hs.minute, 30],
                    [hs.hour, 1],
                    [hs.hour, 3],
                    [hs.hour, 6],
                    [hs.hour, 12],
                    [hs.day, 1],
                    [hs.day, 2],
                    [hs.week, 1],
                    [hs.month, 1],
                    [hs.month, 3],
                    [hs.year, 1]
                ],
                Qc = Zc.multi([
                    [".%L", function(t) {
                        return t.getMilliseconds()
                    }],
                    [":%S", function(t) {
                        return t.getSeconds()
                    }],
                    ["%I:%M", function(t) {
                        return t.getMinutes()
                    }],
                    ["%I %p", function(t) {
                        return t.getHours()
                    }],
                    ["%a %d", function(t) {
                        return t.getDay() && 1 != t.getDate()
                    }],
                    ["%b %d", function(t) {
                        return 1 != t.getDate()
                    }],
                    ["%B", function(t) {
                        return t.getMonth()
                    }],
                    ["%Y", zr]
                ]),
                tl = {
                    range: function(t, r, e) {
                        return si.range(Math.ceil(t / e) * e, +r, e).map(oi)
                    },
                    floor: k,
                    ceil: k
                };
            Kc.year = hs.year, hs.scale = function() {
                return ni(si.scale.linear(), Kc, Qc)
            };
            var rl = Kc.map(function(t) {
                    return [t[0].utc, t[1]]
                }),
                el = $c.multi([
                    [".%L", function(t) {
                        return t.getUTCMilliseconds()
                    }],
                    [":%S", function(t) {
                        return t.getUTCSeconds()
                    }],
                    ["%I:%M", function(t) {
                        return t.getUTCMinutes()
                    }],
                    ["%I %p", function(t) {
                        return t.getUTCHours()
                    }],
                    ["%a %d", function(t) {
                        return t.getUTCDay() && 1 != t.getUTCDate()
                    }],
                    ["%b %d", function(t) {
                        return 1 != t.getUTCDate()
                    }],
                    ["%B", function(t) {
                        return t.getUTCMonth()
                    }],
                    ["%Y", zr]
                ]);
            rl.year = hs.year.utc, hs.scale.utc = function() {
                return ni(si.scale.linear(), rl, el)
            }, si.text = Ft(function(t) {
                return t.responseText
            }), si.json = function(t, r) {
                return zt(t, "application/json", ai, r)
            }, si.html = function(t, r) {
                return zt(t, "text/html", ii, r)
            }, si.xml = Ft(function(t) {
                return t.responseXML
            }), n = si, o = "function" == typeof n ? n.call(r, e, r, t) : n, !(void 0 !== o && (t.exports = o)), this.d3 = si
        }()
    }, function(t, r) {
        t.exports = [{
                id: "496",
                text: "Mongolia",
                trades: {
                    0: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 1,
                        dollarvalue: 3233218682,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 2,
                        dollarvalue: 1663784838,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    2: {
                        commodity: "Wool, fine or coarse animal hair; horsehair yarn and woven fabric",
                        commoditycode: "51",
                        rank: 3,
                        dollarvalue: 109082808,
                        shortdesc: "Wool",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 4,
                        dollarvalue: 27561169,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
                        commoditycode: "25",
                        rank: 5,
                        dollarvalue: 15331455,
                        shortdesc: "Stone",
                        rollup: "Primary materials"
                    }
                },
                iso: "MNG",
                gdp: 12015944337,
                chinaexports: 5101277079,
                chinaexportsovergdp: .4219,
                averagevariation: 1,
                continent: "Asia",
                majorpartner: 0,
                lng: "105"
            }, {
                id: "104",
                text: "Burma",
                trades: {
                    0: {
                        commodity: "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal, and articles thereof; imitation jewellery; coin",
                        commoditycode: "71",
                        rank: 1,
                        dollarvalue: 12282089811,
                        shortdesc: "Precious metals; gems",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 2,
                        dollarvalue: 1370725827,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    2: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 3,
                        dollarvalue: 677879778,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 4,
                        dollarvalue: 561646558,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Iron and steel",
                        commoditycode: "72",
                        rank: 5,
                        dollarvalue: 294807318,
                        shortdesc: "Iron and steel",
                        rollup: "Primary materials"
                    }
                },
                iso: "MMR",
                gdp: 64330038665,
                chinaexports: 15601273504,
                chinaexportsovergdp: .266,
                averagevariation: 1,
                continent: "Asia",
                majorpartner: 0,
                lng: "98"
            }, {
                id: "795",
                text: "Turkmenistan",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 9441300116,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
                        commoditycode: "25",
                        rank: 2,
                        dollarvalue: 26221381,
                        shortdesc: "Stone",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Cotton",
                        commoditycode: "52",
                        rank: 3,
                        dollarvalue: 20277375,
                        shortdesc: "Cotton",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Vegetable plaiting materials; vegetable products not elsewhere specified or included",
                        commoditycode: "14",
                        rank: 4,
                        dollarvalue: 11060980,
                        shortdesc: "Vegetable products",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Inorganic chemicals; organic or inorganic compounds of precious metals, of rare-earth metals, of radioactive elements or of isotopes",
                        commoditycode: "28",
                        rank: 5,
                        dollarvalue: 8998523,
                        shortdesc: "Inorganic chemicals",
                        rollup: "Primary materials"
                    }
                },
                iso: "TKM",
                gdp: 47931929825,
                chinaexports: 9516158297,
                chinaexportsovergdp: .232,
                averagevariation: 1,
                continent: "Asia",
                majorpartner: 0,
                lng: "60"
            }, {
                id: "408",
                text: "North Korea",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 1153856770,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Articles of apparel and clothing accessories,not knitted or crocheted",
                        commoditycode: "62",
                        rank: 2,
                        dollarvalue: 622023807,
                        shortdesc: "Clothing",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 3,
                        dollarvalue: 338631129,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Fish and crustaceans, molluscs and other aquatic invertebrates",
                        commoditycode: "03",
                        rank: 4,
                        dollarvalue: 142580652,
                        shortdesc: "Fish",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Articles of apparel and clothing accessories, knitted or crocheted",
                        commoditycode: "61",
                        rank: 5,
                        dollarvalue: 118985194,
                        shortdesc: "Clothing",
                        rollup: "Manufactures"
                    }
                },
                iso: "PRK",
                gdp: 15454345940,
                chinaexports: 2867699391,
                chinaexportsovergdp: .1856,
                averagevariation: 1,
                continent: "Asia",
                majorpartner: 0,
                lng: "127"
            }, {
                id: "702",
                text: "Singapore",
                trades: {
                    0: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 1,
                        dollarvalue: 8993925029,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 2,
                        dollarvalue: 4772777224,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    2: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 3,
                        dollarvalue: 4212038082,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 4,
                        dollarvalue: 4180219806,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 5,
                        dollarvalue: 3198669662,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    }
                },
                iso: "SGP",
                gdp: 307871907186,
                chinaexports: 30809931905,
                chinaexportsovergdp: .1673,
                averagevariation: .4794520548,
                continent: "Asia",
                majorpartner: 1,
                lng: "103.8"
            }, {
                id: "418",
                text: "Lao",
                trades: {
                    0: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 1,
                        dollarvalue: 1044945459,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 2,
                        dollarvalue: 449648580,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 3,
                        dollarvalue: 85078083,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Rubber and articles thereof",
                        commoditycode: "40",
                        rank: 4,
                        dollarvalue: 78438641,
                        shortdesc: "Rubber",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Cereals",
                        commoditycode: "10",
                        rank: 5,
                        dollarvalue: 44078031,
                        shortdesc: "Cereals",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "LAO",
                gdp: 11771725798,
                chinaexports: 1774564315,
                chinaexportsovergdp: .1586,
                averagevariation: 1,
                continent: "Asia",
                majorpartner: 0,
                lng: "105"
            }, {
                id: "410",
                text: "S Korea",
                trades: {
                    0: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 1,
                        dollarvalue: 76673606969,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 2,
                        dollarvalue: 22322644697,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 3,
                        dollarvalue: 17496352140,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 4,
                        dollarvalue: 13940661188,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 5,
                        dollarvalue: 12450838467,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    }
                },
                iso: "KOR",
                gdp: 1410382943973,
                chinaexports: 190105e6,
                chinaexportsovergdp: .1117,
                averagevariation: .5,
                continent: "Asia",
                majorpartner: 1,
                lng: "127.5"
            }, {
                id: "458",
                text: "Malaysia",
                trades: {
                    0: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 1,
                        dollarvalue: 32172870913,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 2,
                        dollarvalue: 5969221914,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    2: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 3,
                        dollarvalue: 3823586026,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Animal or vegetable fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes",
                        commoditycode: "15",
                        rank: 4,
                        dollarvalue: 2672928535,
                        shortdesc: "Farm produce",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Rubber and articles thereof",
                        commoditycode: "40",
                        rank: 5,
                        dollarvalue: 2011753737,
                        shortdesc: "Rubber",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "MYS",
                gdp: 326933043801,
                chinaexports: 55654135835,
                chinaexportsovergdp: .0863,
                averagevariation: .2602739726,
                continent: "Asia",
                majorpartner: 1,
                lng: "112.5"
            }, {
                id: "704",
                text: "Vietnam",
                trades: {
                    0: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 1,
                        dollarvalue: 8258324429,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 2,
                        dollarvalue: 1679316304,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    2: {
                        commodity: "Cotton",
                        commoditycode: "52",
                        rank: 3,
                        dollarvalue: 1281743769,
                        shortdesc: "Cotton",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 4,
                        dollarvalue: 1114547521,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 5,
                        dollarvalue: 1058074890,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    }
                },
                iso: "VNM",
                gdp: 186204652922,
                chinaexports: 19900251688,
                chinaexportsovergdp: .077,
                averagevariation: 1,
                continent: "Asia",
                majorpartner: 0,
                lng: "106"
            }, {
                id: "764",
                text: "Thailand",
                trades: {
                    0: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 1,
                        dollarvalue: 7327096011,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 2,
                        dollarvalue: 7066410772,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Rubber and articles thereof",
                        commoditycode: "40",
                        rank: 3,
                        dollarvalue: 5108214713,
                        shortdesc: "Rubber",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 4,
                        dollarvalue: 3854096058,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 5,
                        dollarvalue: 2423236483,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    }
                },
                iso: "THA",
                gdp: 373804134912,
                chinaexports: 38326376767,
                chinaexportsovergdp: .0671,
                averagevariation: .2465753425,
                continent: "Asia",
                majorpartner: 1,
                lng: "100"
            }, {
                id: "276",
                text: "Germany",
                trades: {
                    0: {
                        commodity: "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof",
                        commoditycode: "87",
                        rank: 1,
                        dollarvalue: 27400660538,
                        shortdesc: "Cars",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 2,
                        dollarvalue: 26407368915,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 3,
                        dollarvalue: 13222221003,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 4,
                        dollarvalue: 8639594399,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Aircraft, spacecraft, and parts thereof",
                        commoditycode: "88",
                        rank: 5,
                        dollarvalue: 3798355016,
                        shortdesc: "Aircraft",
                        rollup: "Manufactures"
                    }
                },
                iso: "DEU",
                gdp: 3852556169656,
                chinaexports: 104992e6,
                chinaexportsovergdp: .0258,
                averagevariation: .9246575342,
                continent: "Europe",
                majorpartner: 1,
                lng: "9"
            }, {
                id: "804",
                text: "Ukraine",
                trades: {
                    0: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 1,
                        dollarvalue: 2289172124,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Animal or vegetable fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes",
                        commoditycode: "15",
                        rank: 2,
                        dollarvalue: 450862584,
                        shortdesc: "Farm produce",
                        rollup: "Food and agriculture"
                    },
                    2: {
                        commodity: "Cereals",
                        commoditycode: "10",
                        rank: 3,
                        dollarvalue: 290694380,
                        shortdesc: "Cereals",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 4,
                        dollarvalue: 242655943,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 5,
                        dollarvalue: 40635764,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    }
                },
                iso: "UKR",
                gdp: 131805126738,
                chinaexports: 3484339633,
                chinaexportsovergdp: .0203,
                averagevariation: 1,
                continent: "Europe",
                majorpartner: 0,
                lng: "32"
            }, {
                id: "56",
                text: "Belgium",
                trades: {
                    0: {
                        commodity: "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal, and articles thereof; imitation jewellery; coin",
                        commoditycode: "71",
                        rank: 1,
                        dollarvalue: 1578700805,
                        shortdesc: "Precious metals; gems",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof",
                        commoditycode: "87",
                        rank: 2,
                        dollarvalue: 1559169433,
                        shortdesc: "Cars",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 3,
                        dollarvalue: 1177604229,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 4,
                        dollarvalue: 951527528,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 5,
                        dollarvalue: 727353965,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    }
                },
                iso: "BEL",
                gdp: 533382785676,
                chinaexports: 10042555533,
                chinaexportsovergdp: .0187,
                averagevariation: 1,
                continent: "Europe",
                majorpartner: 0,
                lng: "4"
            }, {
                id: "703",
                text: "Slovakia",
                trades: {
                    0: {
                        commodity: "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof",
                        commoditycode: "87",
                        rank: 1,
                        dollarvalue: 2754509643,
                        shortdesc: "Cars",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 2,
                        dollarvalue: 222325252,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 3,
                        dollarvalue: 193216779,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 4,
                        dollarvalue: 43124695,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Furniture; bedding, mattresses, mattress supports, cushions and similar stuffed furnishings; lamps and lighting fittings, not elsewhere specified or included; illuminated signs, illuminated name-plates and the like; prefabricated buildings",
                        commoditycode: "94",
                        rank: 5,
                        dollarvalue: 34846315,
                        shortdesc: "Furniture",
                        rollup: "Manufactures"
                    }
                },
                iso: "SVK",
                gdp: 99790145653,
                chinaexports: 3376043430,
                chinaexportsovergdp: .0183,
                averagevariation: 1,
                continent: "Europe",
                majorpartner: 0,
                lng: "19.5"
            }, {
                id: "643",
                text: "Russia",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 29745959566,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 2,
                        dollarvalue: 3162336646,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Nickel and articles thereof",
                        commoditycode: "75",
                        rank: 3,
                        dollarvalue: 1282628623,
                        shortdesc: "Nickel",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Fish and crustaceans, molluscs and other aquatic invertebrates",
                        commoditycode: "03",
                        rank: 4,
                        dollarvalue: 1266338561,
                        shortdesc: "Fish",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 5,
                        dollarvalue: 1204593502,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    }
                },
                iso: "RUS",
                gdp: 1860597922763,
                chinaexports: 41619136486,
                chinaexportsovergdp: .0171,
                averagevariation: 1.424657534,
                continent: "Europe",
                majorpartner: 1,
                lng: "100"
            }, {
                id: "348",
                text: "Hungary",
                trades: {
                    0: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 1,
                        dollarvalue: 1041795304,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 2,
                        dollarvalue: 707413863,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof",
                        commoditycode: "87",
                        rank: 3,
                        dollarvalue: 597074845,
                        shortdesc: "Cars",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 4,
                        dollarvalue: 410682976,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Railway or tramway locomotives, rolling-stock and parts thereof; railway or tramway track fixtures and fittings and parts thereof; mechanical (including electro-mechanical) traffic signalling equipment of all kinds",
                        commoditycode: "86",
                        rank: 5,
                        dollarvalue: 93812754,
                        shortdesc: "Trains",
                        rollup: "Manufactures"
                    }
                },
                iso: "HUN",
                gdp: 137103927313,
                chinaexports: 3259720886,
                chinaexportsovergdp: .0157,
                averagevariation: 1,
                continent: "Europe",
                majorpartner: 0,
                lng: "20"
            }, {
                id: "757",
                text: "Switzerland",
                trades: {
                    0: {
                        commodity: "Commodities not specified according to kind",
                        commoditycode: "99",
                        rank: 1,
                        dollarvalue: 30101531770,
                        shortdesc: "Other",
                        rollup: "Other"
                    },
                    1: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 2,
                        dollarvalue: 2419788495,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Clocks and watches and parts thereof",
                        commoditycode: "91",
                        rank: 3,
                        dollarvalue: 1812456985,
                        shortdesc: "Clocks",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Pharmaceutical products",
                        commoditycode: "30",
                        rank: 4,
                        dollarvalue: 1433036950,
                        shortdesc: "Pharmaceuticals",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 5,
                        dollarvalue: 1267324679,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    }
                },
                iso: "CHE",
                gdp: 685434208917,
                chinaexports: 40380572836,
                chinaexportsovergdp: .0138,
                averagevariation: 1,
                continent: "Europe",
                majorpartner: 0,
                lng: "8"
            }, {
                id: "100",
                text: "Bulgaria",
                trades: {
                    0: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 1,
                        dollarvalue: 545811640,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 2,
                        dollarvalue: 177209246,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 3,
                        dollarvalue: 69817051,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Cereals",
                        commoditycode: "10",
                        rank: 4,
                        dollarvalue: 32569925,
                        shortdesc: "Cereals",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Articles of apparel and clothing accessories,not knitted or crocheted",
                        commoditycode: "62",
                        rank: 5,
                        dollarvalue: 30050412,
                        shortdesc: "Clothing",
                        rollup: "Manufactures"
                    }
                },
                iso: "BGR",
                gdp: 55734676435,
                chinaexports: 984079358,
                chinaexportsovergdp: .0127,
                averagevariation: 1,
                continent: "Europe",
                majorpartner: 0,
                lng: "25"
            }, {
                id: "246",
                text: "Finland",
                trades: {
                    0: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 1,
                        dollarvalue: 715149648,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard",
                        commoditycode: "47",
                        rank: 2,
                        dollarvalue: 695465856,
                        shortdesc: "Woodpulp",
                        rollup: "Food and agriculture"
                    },
                    2: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 3,
                        dollarvalue: 624907943,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 4,
                        dollarvalue: 225387187,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 5,
                        dollarvalue: 224467214,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    }
                },
                iso: "FIN",
                gdp: 270673584162,
                chinaexports: 4050838813,
                chinaexportsovergdp: .0123,
                averagevariation: 1,
                continent: "Europe",
                majorpartner: 0,
                lng: "26"
            }, {
                id: "528",
                text: "Netherlands",
                trades: {
                    0: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 1,
                        dollarvalue: 1858248637,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 2,
                        dollarvalue: 1238709973,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    2: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 3,
                        dollarvalue: 906155476,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 4,
                        dollarvalue: 592594501,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 5,
                        dollarvalue: 547342356,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    }
                },
                iso: "NLD",
                gdp: 869508125480,
                chinaexports: 9336625651,
                chinaexportsovergdp: .0121,
                averagevariation: .4246575342,
                continent: "Europe",
                majorpartner: 1,
                lng: "5.75"
            }, {
                id: "728",
                text: "South Sudan",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 4329174256,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 2,
                        dollarvalue: 67846,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    }
                },
                iso: "SSD",
                gdp: 13069991258,
                chinaexports: 4329242102,
                chinaexportsovergdp: .3667,
                averagevariation: 1,
                continent: "Africa",
                majorpartner: 0,
                lng: "30"
            }, {
                id: "694",
                text: "Sierra Leone",
                trades: {
                    0: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 1,
                        dollarvalue: 1667755688,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 2,
                        dollarvalue: 14876287,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 3,
                        dollarvalue: 306104,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 4,
                        dollarvalue: 120251,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 5,
                        dollarvalue: 63169,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    }
                },
                iso: "SLE",
                gdp: 4892363979,
                chinaexports: 1683180238,
                chinaexportsovergdp: .3415,
                averagevariation: 1,
                continent: "Africa",
                majorpartner: 0,
                lng: "-11.5"
            }, {
                id: "178",
                text: "Congo Brazzaville",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 5179949135,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 2,
                        dollarvalue: 264754700,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 3,
                        dollarvalue: 33133557,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 4,
                        dollarvalue: 1006455,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Products of animal origin, not elsewhere specified or included",
                        commoditycode: "05",
                        rank: 5,
                        dollarvalue: 72417,
                        shortdesc: "Animal products",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "COG",
                gdp: 14135462556,
                chinaexports: 5479017995,
                chinaexportsovergdp: .3002,
                averagevariation: 1,
                continent: "Africa",
                majorpartner: 0,
                lng: "15"
            }, {
                id: "24",
                text: "Angola",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 31060219206,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal, and articles thereof; imitation jewellery; coin",
                        commoditycode: "71",
                        rank: 2,
                        dollarvalue: 30495543,
                        shortdesc: "Precious metals; gems",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
                        commoditycode: "25",
                        rank: 3,
                        dollarvalue: 8240009,
                        shortdesc: "Stone",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 4,
                        dollarvalue: 6952940,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 5,
                        dollarvalue: 53047,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    }
                },
                iso: "AGO",
                gdp: 131400635026,
                chinaexports: 31106015046,
                chinaexportsovergdp: .2505,
                averagevariation: 1,
                continent: "Africa",
                majorpartner: 0,
                lng: "18.5"
            }, {
                id: "226",
                text: "Equatorial Guinea",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 3040223478,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 2,
                        dollarvalue: 176958981,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 3,
                        dollarvalue: 4654,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
                        commoditycode: "25",
                        rank: 4,
                        dollarvalue: 2275,
                        shortdesc: "Stone",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 5,
                        dollarvalue: 514,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    }
                },
                iso: "GNQ",
                gdp: 14308094225,
                chinaexports: 3217190248,
                chinaexportsovergdp: .2065,
                averagevariation: 1,
                continent: "Africa",
                majorpartner: 0,
                lng: "10"
            }, {
                id: "430",
                text: "Liberia",
                trades: {
                    0: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 1,
                        dollarvalue: 251667472,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 2,
                        dollarvalue: 32743292,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Rubber and articles thereof",
                        commoditycode: "40",
                        rank: 3,
                        dollarvalue: 3799021,
                        shortdesc: "Rubber",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Aluminium and articles thereof",
                        commoditycode: "76",
                        rank: 4,
                        dollarvalue: 142645,
                        shortdesc: "Aluminium",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 5,
                        dollarvalue: 51487,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    }
                },
                iso: "LBR",
                gdp: 2026939595,
                chinaexports: 288438573,
                chinaexportsovergdp: .1483,
                averagevariation: 1,
                continent: "Africa",
                majorpartner: 0,
                lng: "-9.5"
            }, {
                id: "478",
                text: "Mauritania",
                trades: {
                    0: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 1,
                        dollarvalue: 1144469985,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Fish and crustaceans, molluscs and other aquatic invertebrates",
                        commoditycode: "03",
                        rank: 2,
                        dollarvalue: 25641108,
                        shortdesc: "Fish",
                        rollup: "Food and agriculture"
                    },
                    2: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 3,
                        dollarvalue: 250889,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Preparations of meat, of fish or of crustaceans, molluscs or other aquatic invertebrates",
                        commoditycode: "16",
                        rank: 4,
                        dollarvalue: 167813,
                        shortdesc: "Meat and fish",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 5,
                        dollarvalue: 49527,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    }
                },
                iso: "MRT",
                gdp: 5061180371,
                chinaexports: 1170579521,
                chinaexportsovergdp: .1384,
                averagevariation: 1,
                continent: "Africa",
                majorpartner: 0,
                lng: "-12"
            }, {
                id: "180",
                text: "Congo Kinshasa",
                trades: {
                    0: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 1,
                        dollarvalue: 970370043,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 2,
                        dollarvalue: 778061119,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    2: {
                        commodity: "Other base metals; cermets; articles thereof",
                        commoditycode: "81",
                        rank: 3,
                        dollarvalue: 506739370,
                        shortdesc: "Cermets",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 4,
                        dollarvalue: 473763657,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 5,
                        dollarvalue: 77322473,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    }
                },
                iso: "COD",
                gdp: 32962261156,
                chinaexports: 2815742108,
                chinaexportsovergdp: .0938,
                averagevariation: 1,
                continent: "Africa",
                majorpartner: 0,
                lng: "25"
            }, {
                id: "232",
                text: "Eritrea",
                trades: {
                    0: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 1,
                        dollarvalue: 322190515,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Raw hides and skins (other than furskins) and leather",
                        commoditycode: "41",
                        rank: 2,
                        dollarvalue: 488948,
                        shortdesc: "Leather",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Articles of apparel and clothing accessories,not knitted or crocheted",
                        commoditycode: "62",
                        rank: 3,
                        dollarvalue: 46140,
                        shortdesc: "Clothing",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
                        commoditycode: "25",
                        rank: 4,
                        dollarvalue: 6839,
                        shortdesc: "Stone",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Glass and glassware",
                        commoditycode: "70",
                        rank: 5,
                        dollarvalue: 435,
                        shortdesc: "Glass",
                        rollup: "Manufactures"
                    }
                },
                iso: "ERI",
                gdp: 3857821138,
                chinaexports: 322733290,
                chinaexportsovergdp: .0937,
                averagevariation: 1,
                continent: "Africa",
                majorpartner: 0,
                lng: "39"
            }, {
                id: "266",
                text: "Gabon",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 1143614927,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 2,
                        dollarvalue: 280168223,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 3,
                        dollarvalue: 181599152,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 4,
                        dollarvalue: 1123171,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Rubber and articles thereof",
                        commoditycode: "40",
                        rank: 5,
                        dollarvalue: 907200,
                        shortdesc: "Rubber",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "GAB",
                gdp: 17228443336,
                chinaexports: 1607576573,
                chinaexportsovergdp: .0934,
                averagevariation: 1,
                continent: "Africa",
                majorpartner: 0,
                lng: "11.75"
            }, {
                id: "152",
                text: "Chile",
                trades: {
                    0: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 1,
                        dollarvalue: 10603083658,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 2,
                        dollarvalue: 7062591853,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard",
                        commoditycode: "47",
                        rank: 3,
                        dollarvalue: 1152267922,
                        shortdesc: "Woodpulp",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Edible fruit and nuts; peel of citrus fruit or melons",
                        commoditycode: "08",
                        rank: 4,
                        dollarvalue: 787502729,
                        shortdesc: "Fruit",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 5,
                        dollarvalue: 268183383,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    }
                },
                iso: "CHL",
                gdp: 258061522887,
                chinaexports: 21010320708,
                chinaexportsovergdp: .073,
                averagevariation: 1,
                continent: "SAmerica",
                majorpartner: 0,
                lng: "-71"
            }, {
                id: "604",
                text: "Peru",
                trades: {
                    0: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 1,
                        dollarvalue: 5533988226,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 2,
                        dollarvalue: 1124025095,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Residues and waste from the food industries; prepared animal fodder",
                        commoditycode: "23",
                        rank: 3,
                        dollarvalue: 771411516,
                        shortdesc: "Animal feed",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Edible fruit and nuts; peel of citrus fruit or melons",
                        commoditycode: "08",
                        rank: 4,
                        dollarvalue: 205996713,
                        shortdesc: "Fruit",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Preparations of meat, of fish or of crustaceans, molluscs or other aquatic invertebrates",
                        commoditycode: "16",
                        rank: 5,
                        dollarvalue: 164393300,
                        shortdesc: "Meat and fish",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "PER",
                gdp: 202902760293,
                chinaexports: 8167334313,
                chinaexportsovergdp: .0346,
                averagevariation: 1,
                continent: "SAmerica",
                majorpartner: 0,
                lng: "-76"
            }, {
                id: "858",
                text: "Uruguay",
                trades: {
                    0: {
                        commodity: "Oil seeds and oleaginous fruits; miscellaneous grains,seeds and fruit; industrial or medicinal plants; straw and fodder",
                        commoditycode: "12",
                        rank: 1,
                        dollarvalue: 1367330406,
                        shortdesc: "Food and animal feed",
                        rollup: "Food and agriculture"
                    },
                    1: {
                        commodity: "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard",
                        commoditycode: "47",
                        rank: 2,
                        dollarvalue: 381847143,
                        shortdesc: "Woodpulp",
                        rollup: "Food and agriculture"
                    },
                    2: {
                        commodity: "Meat and edible meat offal",
                        commoditycode: "02",
                        rank: 3,
                        dollarvalue: 378131627,
                        shortdesc: "Meat",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Wool, fine or coarse animal hair; horsehair yarn and woven fabric",
                        commoditycode: "51",
                        rank: 4,
                        dollarvalue: 135069898,
                        shortdesc: "Wool",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Raw hides and skins (other than furskins) and leather",
                        commoditycode: "41",
                        rank: 5,
                        dollarvalue: 99893297,
                        shortdesc: "Leather",
                        rollup: "Manufactures"
                    }
                },
                iso: "URY",
                gdp: 57471277325,
                chinaexports: 2629180337,
                chinaexportsovergdp: .0224,
                averagevariation: 1,
                continent: "SAmerica",
                majorpartner: 0,
                lng: "-56"
            }, {
                id: "76",
                text: "Brazil",
                trades: {
                    0: {
                        commodity: "Oil seeds and oleaginous fruits; miscellaneous grains,seeds and fruit; industrial or medicinal plants; straw and fodder",
                        commoditycode: "12",
                        rank: 1,
                        dollarvalue: 18724217500,
                        shortdesc: "Agricultural produce",
                        rollup: "Food and agriculture"
                    },
                    1: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 2,
                        dollarvalue: 18621147192,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 3,
                        dollarvalue: 4903800173,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    3: {
                        commodity: "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard",
                        commoditycode: "47",
                        rank: 4,
                        dollarvalue: 2157339289,
                        shortdesc: "Woodpulp",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Raw hides and skins (other than furskins) and leather",
                        commoditycode: "41",
                        rank: 5,
                        dollarvalue: 937954413,
                        shortdesc: "Leather",
                        rollup: "Manufactures"
                    }
                },
                iso: "BRA",
                gdp: 2346118175194,
                chinaexports: 51675122593,
                chinaexportsovergdp: .0192,
                averagevariation: 1.616438356,
                continent: "SAmerica",
                majorpartner: 1,
                lng: "-55"
            }, {
                id: "170",
                text: "Colombia",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 7074765848,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Iron and steel",
                        commoditycode: "72",
                        rank: 2,
                        dollarvalue: 248194051,
                        shortdesc: "Iron and steel",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 3,
                        dollarvalue: 154050226,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Raw hides and skins (other than furskins) and leather",
                        commoditycode: "41",
                        rank: 4,
                        dollarvalue: 44131931,
                        shortdesc: "Leather",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 5,
                        dollarvalue: 13130115,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    }
                },
                iso: "COL",
                gdp: 377739622866,
                chinaexports: 7599328869,
                chinaexportsovergdp: .0134,
                averagevariation: 1,
                continent: "SAmerica",
                majorpartner: 0,
                lng: "-72"
            }, {
                id: "68",
                text: "Bolivia",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 200641890,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 2,
                        dollarvalue: 170219320,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Tin and articles thereof",
                        commoditycode: "80",
                        rank: 3,
                        dollarvalue: 78240025,
                        shortdesc: "Tin",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 4,
                        dollarvalue: 17591473,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
                        commoditycode: "25",
                        rank: 5,
                        dollarvalue: 10900723,
                        shortdesc: "Stone",
                        rollup: "Primary materials"
                    }
                },
                iso: "BOL",
                gdp: 34175832127,
                chinaexports: 493717574,
                chinaexportsovergdp: .0127,
                averagevariation: 1,
                continent: "SAmerica",
                majorpartner: 0,
                lng: "-65"
            }, {
                id: "740",
                text: "Suriname",
                trades: {
                    0: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 1,
                        dollarvalue: 41415556,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Inorganic chemicals; organic or inorganic compounds of precious metals, of rare-earth metals, of radioactive elements or of isotopes",
                        commoditycode: "28",
                        rank: 2,
                        dollarvalue: 10866495,
                        shortdesc: "Inorganic chemicals",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 3,
                        dollarvalue: 218195,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Live animals",
                        commoditycode: "01",
                        rank: 4,
                        dollarvalue: 112200,
                        shortdesc: "Animals",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Fish and crustaceans, molluscs and other aquatic invertebrates",
                        commoditycode: "03",
                        rank: 5,
                        dollarvalue: 46527,
                        shortdesc: "Fish",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "SUR",
                gdp: 5298787879,
                chinaexports: 52667278,
                chinaexportsovergdp: .0099,
                averagevariation: 1,
                continent: "SAmerica",
                majorpartner: 0,
                lng: "-56"
            }, {
                id: "84",
                text: "Belize",
                trades: {
                    0: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 1,
                        dollarvalue: 7146950,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 2,
                        dollarvalue: 53756,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof",
                        commoditycode: "87",
                        rank: 3,
                        dollarvalue: 31774,
                        shortdesc: "Cars",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 4,
                        dollarvalue: 18e3,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Paper and paperboard; articles of paper pulp, of paper or of paperboard",
                        commoditycode: "48",
                        rank: 5,
                        dollarvalue: 13447,
                        shortdesc: "Paper",
                        rollup: "Manufactures"
                    }
                },
                iso: "BLZ",
                gdp: 1624294250,
                chinaexports: 7272471,
                chinaexportsovergdp: .009,
                averagevariation: 1,
                continent: "SAmerica",
                majorpartner: 0,
                lng: "-88.75"
            }, {
                id: "32",
                text: "Argentina",
                trades: {
                    0: {
                        commodity: "Oil seeds and oleaginous fruits; miscellaneous grains,seeds and fruit; industrial or medicinal plants; straw and fodder",
                        commoditycode: "12",
                        rank: 1,
                        dollarvalue: 3371008792,
                        shortdesc: "Agricultural produce",
                        rollup: "Food and agriculture"
                    },
                    1: {
                        commodity: "Animal or vegetable fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes",
                        commoditycode: "15",
                        rank: 2,
                        dollarvalue: 552798877,
                        shortdesc: "Farm produce",
                        rollup: "Food and agriculture"
                    },
                    2: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 3,
                        dollarvalue: 246746235,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    3: {
                        commodity: "Raw hides and skins (other than furskins) and leather",
                        commoditycode: "41",
                        rank: 4,
                        dollarvalue: 198741153,
                        shortdesc: "Leather",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Meat and edible meat offal",
                        commoditycode: "02",
                        rank: 5,
                        dollarvalue: 143415193,
                        shortdesc: "Meat",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "ARG",
                gdp: 540197457444,
                chinaexports: 5247192547,
                chinaexportsovergdp: .0083,
                averagevariation: 1,
                continent: "SAmerica",
                majorpartner: 0,
                lng: "-64"
            }, {
                id: "328",
                text: "Guyana",
                trades: {
                    0: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 1,
                        dollarvalue: 36413929,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 2,
                        dollarvalue: 2750601,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Fish and crustaceans, molluscs and other aquatic invertebrates",
                        commoditycode: "03",
                        rank: 3,
                        dollarvalue: 510627,
                        shortdesc: "Fish",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Live animals",
                        commoditycode: "01",
                        rank: 4,
                        dollarvalue: 314109,
                        shortdesc: "Animals",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
                        commoditycode: "25",
                        rank: 5,
                        dollarvalue: 145945,
                        shortdesc: "Stone",
                        rollup: "Primary materials"
                    }
                },
                iso: "GUY",
                gdp: 3228372888,
                chinaexports: 40221304,
                chinaexportsovergdp: .0066,
                averagevariation: 1,
                continent: "SAmerica",
                majorpartner: 0,
                lng: "-59"
            }, {
                id: "90",
                text: "Solomon Is",
                trades: {
                    0: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 1,
                        dollarvalue: 473244269,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Oil seeds and oleaginous fruits; miscellaneous grains,seeds and fruit; industrial or medicinal plants; straw and fodder",
                        commoditycode: "12",
                        rank: 2,
                        dollarvalue: 244311,
                        shortdesc: "Agricultural produce",
                        rollup: "Food and agriculture"
                    },
                    2: {
                        commodity: "Miscellaneous manufactured articles",
                        commoditycode: "96",
                        rank: 3,
                        dollarvalue: 192171,
                        shortdesc: "Manufactures",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Products of animal origin, not elsewhere specified or included",
                        commoditycode: "05",
                        rank: 4,
                        dollarvalue: 141102,
                        shortdesc: "Animal products",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Cocoa and cocoa preparations",
                        commoditycode: "18",
                        rank: 5,
                        dollarvalue: 10904,
                        shortdesc: "Cocoa",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "SLB",
                gdp: 1158183054,
                chinaexports: 473833880,
                chinaexportsovergdp: .2278,
                averagevariation: 1,
                continent: "Pacific",
                majorpartner: 0,
                lng: "159"
            }, {
                id: "598",
                text: "Papua New Guinea",
                trades: {
                    0: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 1,
                        dollarvalue: 815179597,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 2,
                        dollarvalue: 294886084,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    2: {
                        commodity: "Nickel and articles thereof",
                        commoditycode: "75",
                        rank: 3,
                        dollarvalue: 284080861,
                        shortdesc: "Nickel",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Rubber and articles thereof",
                        commoditycode: "40",
                        rank: 4,
                        dollarvalue: 3566784,
                        shortdesc: "Rubber",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Iron and steel",
                        commoditycode: "72",
                        rank: 5,
                        dollarvalue: 2944922,
                        shortdesc: "Iron and steel",
                        rollup: "Primary materials"
                    }
                },
                iso: "PNG",
                gdp: 15413163675,
                chinaexports: 1402299720,
                chinaexportsovergdp: .091,
                averagevariation: 1,
                continent: "Pacific",
                majorpartner: 0,
                lng: "147"
            }, {
                id: "36",
                text: "Australia",
                trades: {
                    0: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 1,
                        dollarvalue: 60349724539,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 2,
                        dollarvalue: 11905322604,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    2: {
                        commodity: "Commodities not specified according to kind",
                        commoditycode: "99",
                        rank: 3,
                        dollarvalue: 7949576372,
                        shortdesc: "Other",
                        rollup: "Other"
                    },
                    3: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 4,
                        dollarvalue: 3225507156,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Cereals",
                        commoditycode: "10",
                        rank: 5,
                        dollarvalue: 1726544305,
                        shortdesc: "Cereals",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "AUS",
                gdp: 1453770210672,
                chinaexports: 97674906577,
                chinaexportsovergdp: .056,
                averagevariation: 1.767123288,
                continent: "Pacific",
                majorpartner: 1,
                lng: "133"
            }, {
                id: "554",
                text: "New Zealand",
                trades: {
                    0: {
                        commodity: "Dairy produce; birds' eggs; natural honey; edible products of animal origin, not elsewhere specified or included",
                        commoditycode: "04",
                        rank: 1,
                        dollarvalue: 4168704310,
                        shortdesc: "Dairy produce",
                        rollup: "Food and agriculture"
                    },
                    1: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 2,
                        dollarvalue: 1819712740,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Meat and edible meat offal",
                        commoditycode: "02",
                        rank: 3,
                        dollarvalue: 907869220,
                        shortdesc: "Meat",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Fish and crustaceans, molluscs and other aquatic invertebrates",
                        commoditycode: "03",
                        rank: 4,
                        dollarvalue: 360589355,
                        shortdesc: "Fish",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Wool, fine or coarse animal hair; horsehair yarn and woven fabric",
                        commoditycode: "51",
                        rank: 5,
                        dollarvalue: 335593828,
                        shortdesc: "Wool",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "NZL",
                gdp: 188384859627,
                chinaexports: 9504641227,
                chinaexportsovergdp: .0441,
                averagevariation: 2.547945205,
                continent: "Pacific",
                majorpartner: 1,
                lng: "174"
            }, {
                id: "242",
                text: "Fiji",
                trades: {
                    0: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 1,
                        dollarvalue: 29685082,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 2,
                        dollarvalue: 19522226,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Beverages, spirits and vinegar",
                        commoditycode: "22",
                        rank: 3,
                        dollarvalue: 2721421,
                        shortdesc: "Beverages",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Preparations of vegetables, fruit, nuts or other parts of plants",
                        commoditycode: "20",
                        rank: 4,
                        dollarvalue: 296548,
                        shortdesc: "Vegetable products",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Lac; gums, resins and other vegetable saps and extracts",
                        commoditycode: "13",
                        rank: 5,
                        dollarvalue: 248280,
                        shortdesc: "Gums and resins",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "FJI",
                gdp: 4029989729,
                chinaexports: 52862026,
                chinaexportsovergdp: .02,
                averagevariation: 1,
                continent: "Pacific",
                majorpartner: 0,
                lng: "175"
            }, {
                id: "124",
                text: "Canada",
                trades: {
                    0: {
                        commodity: "Commodities not specified according to kind",
                        commoditycode: "99",
                        rank: 1,
                        dollarvalue: 4115719263,
                        shortdesc: "Other",
                        rollup: "Other"
                    },
                    1: {
                        commodity: "Oil seeds and oleaginous fruits; miscellaneous grains,seeds and fruit; industrial or medicinal plants; straw and fodder",
                        commoditycode: "12",
                        rank: 2,
                        dollarvalue: 3151783067,
                        shortdesc: "Farm produce",
                        rollup: "Food and agriculture"
                    },
                    2: {
                        commodity: "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard",
                        commoditycode: "47",
                        rank: 3,
                        dollarvalue: 2897227537,
                        shortdesc: "Woodpulp",
                        rollup: "Food and agriculture"
                    },
                    3: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 4,
                        dollarvalue: 2517303867,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 5,
                        dollarvalue: 2120455659,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    }
                },
                iso: "CAN",
                gdp: 1786655064510,
                chinaexports: 25188680502,
                chinaexportsovergdp: .0108,
                averagevariation: 1,
                continent: "NAmerica",
                majorpartner: 0,
                lng: "-95"
            }, {
                id: "340",
                text: "Honduras",
                trades: {
                    0: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 1,
                        dollarvalue: 123866915,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 2,
                        dollarvalue: 14028153,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 3,
                        dollarvalue: 7172184,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 4,
                        dollarvalue: 4314970,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 5,
                        dollarvalue: 3686047,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    }
                },
                iso: "HND",
                gdp: 19385309986,
                chinaexports: 161722300,
                chinaexportsovergdp: .0087,
                averagevariation: 1,
                continent: "NAmerica",
                majorpartner: 0,
                lng: "-86.5"
            }, {
                id: "188",
                text: "Costa Rica",
                trades: {
                    0: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 1,
                        dollarvalue: 4028221797,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 2,
                        dollarvalue: 57226646,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Raw hides and skins (other than furskins) and leather",
                        commoditycode: "41",
                        rank: 3,
                        dollarvalue: 27025205,
                        shortdesc: "Leather",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 4,
                        dollarvalue: 11684183,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Wood and articles of wood; wood charcoal",
                        commoditycode: "44",
                        rank: 5,
                        dollarvalue: 11068014,
                        shortdesc: "Wood",
                        rollup: "Manufactures"
                    }
                },
                iso: "CRI",
                gdp: 49552580683,
                chinaexports: 4186322297,
                chinaexportsovergdp: .0077,
                averagevariation: 1,
                continent: "NAmerica",
                majorpartner: 0,
                lng: "-84"
            }, {
                id: "842",
                text: "USA",
                trades: {
                    0: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 1,
                        dollarvalue: 21551999479,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Oil seeds and oleaginous fruits; miscellaneous grains,seeds and fruit; industrial or medicinal plants; straw and fodder",
                        commoditycode: "12",
                        rank: 2,
                        dollarvalue: 16815296945,
                        shortdesc: "Agricultural produce",
                        rollup: "Food and agriculture"
                    },
                    2: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 3,
                        dollarvalue: 16796313756,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Aircraft, spacecraft, and parts thereof",
                        commoditycode: "88",
                        rank: 4,
                        dollarvalue: 15488935930,
                        shortdesc: "Aircraft",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof",
                        commoditycode: "87",
                        rank: 5,
                        dollarvalue: 14174892530,
                        shortdesc: "Cars",
                        rollup: "Manufactures"
                    }
                },
                iso: "USA",
                gdp: 17419e9,
                chinaexports: 159841e6,
                chinaexportsovergdp: .0071,
                averagevariation: .5136986301,
                continent: "NAmerica",
                majorpartner: 1,
                lng: "-97"
            }, {
                id: "484",
                text: "Mexico",
                trades: {
                    0: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 1,
                        dollarvalue: 3216613121,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof",
                        commoditycode: "87",
                        rank: 2,
                        dollarvalue: 2494532558,
                        shortdesc: "Cars",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 3,
                        dollarvalue: 2163927747,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 4,
                        dollarvalue: 808948207,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 5,
                        dollarvalue: 570948872,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    }
                },
                iso: "MEX",
                gdp: 1282719954862,
                chinaexports: 11179363547,
                chinaexportsovergdp: .0047,
                averagevariation: 1,
                continent: "NAmerica",
                majorpartner: 0,
                lng: "-102"
            }, {
                id: "192",
                text: "Cuba",
                trades: {
                    0: {
                        commodity: "Sugars and sugar confectionery",
                        commoditycode: "17",
                        rank: 1,
                        dollarvalue: 209944579,
                        shortdesc: "Sugar",
                        rollup: "Food and agriculture"
                    },
                    1: {
                        commodity: "Nickel and articles thereof",
                        commoditycode: "75",
                        rank: 2,
                        dollarvalue: 101134021,
                        shortdesc: "Nickel",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 3,
                        dollarvalue: 6425454,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 4,
                        dollarvalue: 4787414,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Other base metals; cermets; articles thereof",
                        commoditycode: "81",
                        rank: 5,
                        dollarvalue: 2799558,
                        shortdesc: "Cermets",
                        rollup: "Manufactures"
                    }
                },
                iso: "CUB",
                gdp: 771497e5,
                chinaexports: 330139091,
                chinaexportsovergdp: .0043,
                averagevariation: 1,
                continent: "NAmerica",
                majorpartner: 0,
                lng: "-80"
            }, {
                id: "780",
                text: "Trinidad and Tobago",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 92906087,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Iron and steel",
                        commoditycode: "72",
                        rank: 2,
                        dollarvalue: 4225004,
                        shortdesc: "Iron and steel",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 3,
                        dollarvalue: 2911102,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 4,
                        dollarvalue: 435998,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 5,
                        dollarvalue: 167890,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    }
                },
                iso: "TTO",
                gdp: 24433812700,
                chinaexports: 100733415,
                chinaexportsovergdp: .0041,
                averagevariation: 1,
                continent: "NAmerica",
                majorpartner: 0,
                lng: "-61"
            }, {
                id: "320",
                text: "Guatemala",
                trades: {
                    0: {
                        commodity: "Sugars and sugar confectionery",
                        commoditycode: "17",
                        rank: 1,
                        dollarvalue: 18814593,
                        shortdesc: "Sugar",
                        rollup: "Food and agriculture"
                    },
                    1: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 2,
                        dollarvalue: 7867210,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 3,
                        dollarvalue: 5587109,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard",
                        commoditycode: "47",
                        rank: 4,
                        dollarvalue: 4554343,
                        shortdesc: "Woodpulp",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Articles of apparel and clothing accessories, knitted or crocheted",
                        commoditycode: "61",
                        rank: 5,
                        dollarvalue: 3743901,
                        shortdesc: "Clothing",
                        rollup: "Manufactures"
                    }
                },
                iso: "GTM",
                gdp: 58728232327,
                chinaexports: 51452413,
                chinaexportsovergdp: .0031,
                averagevariation: 1,
                continent: "NAmerica",
                majorpartner: 0,
                lng: "-90.25"
            }, {
                id: "388",
                text: "Jamaica",
                trades: {
                    0: {
                        commodity: "Inorganic chemicals; organic or inorganic compounds of precious metals, of rare-earth metals, of radioactive elements or of isotopes",
                        commoditycode: "28",
                        rank: 1,
                        dollarvalue: 33208608,
                        shortdesc: "Inorganic chemicals",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 2,
                        dollarvalue: 2050248,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 3,
                        dollarvalue: 1173359,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Coffee, tea, maté and spices",
                        commoditycode: "09",
                        rank: 4,
                        dollarvalue: 630657,
                        shortdesc: "Coffee, tea and spices",
                        rollup: "Food and agriculture"
                    },
                    4: {
                        commodity: "Beverages, spirits and vinegar",
                        commoditycode: "22",
                        rank: 5,
                        dollarvalue: 142958,
                        shortdesc: "Beverages",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "JAM",
                gdp: 14362262585,
                chinaexports: 37514336,
                chinaexportsovergdp: .0027,
                averagevariation: 1,
                continent: "NAmerica",
                majorpartner: 0,
                lng: "-77.5"
            }, {
                id: "214",
                text: "Dominican Rep",
                trades: {
                    0: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 1,
                        dollarvalue: 160672865,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    1: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 2,
                        dollarvalue: 40611463,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 3,
                        dollarvalue: 26624932,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Pharmaceutical products",
                        commoditycode: "30",
                        rank: 4,
                        dollarvalue: 12526671,
                        shortdesc: "Pharmaceuticals",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard",
                        commoditycode: "47",
                        rank: 5,
                        dollarvalue: 8086830,
                        shortdesc: "Woodpulp",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "DOM",
                gdp: 63968961563,
                chinaexports: 273069547,
                chinaexportsovergdp: .0027,
                averagevariation: 1,
                continent: "NAmerica",
                majorpartner: 0,
                lng: "-70.6667"
            }, {
                id: "512",
                text: "Oman",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 22781280031,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 2,
                        dollarvalue: 717403597,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 3,
                        dollarvalue: 121787482,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Aluminium and articles thereof",
                        commoditycode: "76",
                        rank: 4,
                        dollarvalue: 62394183,
                        shortdesc: "Aluminium",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 5,
                        dollarvalue: 48555612,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    }
                },
                iso: "OMN",
                gdp: 81796618986,
                chinaexports: 23792679063,
                chinaexportsovergdp: .2732,
                averagevariation: 1,
                continent: "Mideast",
                majorpartner: 0,
                lng: "57"
            }, {
                id: "368",
                text: "Iraq",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 20759583043,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Edible fruit and nuts; peel of citrus fruit or melons",
                        commoditycode: "08",
                        rank: 2,
                        dollarvalue: 1335982,
                        shortdesc: "Fruit",
                        rollup: "Food and agriculture"
                    },
                    2: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 3,
                        dollarvalue: 152613,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 4,
                        dollarvalue: 74143,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 5,
                        dollarvalue: 71376,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    }
                },
                iso: "IRQ",
                gdp: 220505682865,
                chinaexports: 20761239088,
                chinaexportsovergdp: .0893,
                averagevariation: 1,
                continent: "Mideast",
                majorpartner: 0,
                lng: "44"
            }, {
                id: "364",
                text: "Iran",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 21190062252,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 2,
                        dollarvalue: 2428386326,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 3,
                        dollarvalue: 2111387166,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 4,
                        dollarvalue: 1369700920,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
                        commoditycode: "25",
                        rank: 5,
                        dollarvalue: 296993632,
                        shortdesc: "Stone",
                        rollup: "Primary materials"
                    }
                },
                iso: "IRN",
                gdp: 415338504536,
                chinaexports: 27506898024,
                chinaexportsovergdp: .0557,
                averagevariation: 1,
                continent: "Mideast",
                majorpartner: 0,
                lng: "53"
            }, {
                id: "887",
                text: "Yemen",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 2895617957,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 2,
                        dollarvalue: 34544147,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 3,
                        dollarvalue: 1821947,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Raw hides and skins (other than furskins) and leather",
                        commoditycode: "41",
                        rank: 4,
                        dollarvalue: 443793,
                        shortdesc: "Leather",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal, and articles thereof; imitation jewellery; coin",
                        commoditycode: "71",
                        rank: 5,
                        dollarvalue: 111259,
                        shortdesc: "Precious metals; gems",
                        rollup: "Primary materials"
                    }
                },
                iso: "YEM",
                gdp: 35954502304,
                chinaexports: 2932853594,
                chinaexportsovergdp: .0478,
                averagevariation: 1,
                continent: "Mideast",
                majorpartner: 0,
                lng: "48"
            }, {
                id: "634",
                text: "Qatar",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 7179832322,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 2,
                        dollarvalue: 764015406,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 3,
                        dollarvalue: 147652824,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
                        commoditycode: "25",
                        rank: 4,
                        dollarvalue: 102709292,
                        shortdesc: "Stone",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Inorganic chemicals; organic or inorganic compounds of precious metals, of rare-earth metals, of radioactive elements or of isotopes",
                        commoditycode: "28",
                        rank: 5,
                        dollarvalue: 97424951,
                        shortdesc: "Inorganic chemicals",
                        rollup: "Primary materials"
                    }
                },
                iso: "QAT",
                gdp: 211816758242,
                chinaexports: 8336727789,
                chinaexportsovergdp: .0436,
                averagevariation: 1,
                continent: "Mideast",
                majorpartner: 0,
                lng: "51.25"
            }, {
                id: "682",
                text: "Saudi Arabia",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 37888902266,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 2,
                        dollarvalue: 5881387378,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 3,
                        dollarvalue: 4091948328,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
                        commoditycode: "25",
                        rank: 4,
                        dollarvalue: 331941066,
                        shortdesc: "Stone",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 5,
                        dollarvalue: 76075560,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    }
                },
                iso: "SAU",
                gdp: 746248533333,
                chinaexports: 48508025980,
                chinaexportsovergdp: .01,
                averagevariation: 1,
                continent: "Mideast",
                majorpartner: 0,
                lng: "45"
            }, {
                id: "376",
                text: "Israel",
                trades: {
                    0: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 1,
                        dollarvalue: 924618624,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal, and articles thereof; imitation jewellery; coin",
                        commoditycode: "71",
                        rank: 2,
                        dollarvalue: 510261331,
                        shortdesc: "Precious metals; gems",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Fertilisers",
                        commoditycode: "31",
                        rank: 3,
                        dollarvalue: 445656385,
                        shortdesc: "Fertilisers",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 4,
                        dollarvalue: 422980118,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 5,
                        dollarvalue: 225161952,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    }
                },
                iso: "ISR",
                gdp: 304226336270,
                chinaexports: 3140675325,
                chinaexportsovergdp: .0092,
                averagevariation: 1,
                continent: "Mideast",
                majorpartner: 0,
                lng: "34.75"
            }, {
                id: "414",
                text: "Kuwait",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 8342796417,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 2,
                        dollarvalue: 1190225401,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 3,
                        dollarvalue: 423172530,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
                        commoditycode: "25",
                        rank: 4,
                        dollarvalue: 32396985,
                        shortdesc: "Stone",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 5,
                        dollarvalue: 9553128,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    }
                },
                iso: "KWT",
                gdp: 175826716256,
                chinaexports: 10004827071,
                chinaexportsovergdp: .0059,
                averagevariation: 1,
                continent: "Mideast",
                majorpartner: 0,
                lng: "47.6581"
            }, {
                id: "400",
                text: "Jordan",
                trades: {
                    0: {
                        commodity: "Fertilisers",
                        commoditycode: "31",
                        rank: 1,
                        dollarvalue: 176773277,
                        shortdesc: "Fertilisers",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 2,
                        dollarvalue: 51335086,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Inorganic chemicals; organic or inorganic compounds of precious metals, of rare-earth metals, of radioactive elements or of isotopes",
                        commoditycode: "28",
                        rank: 3,
                        dollarvalue: 25440680,
                        shortdesc: "Inorganic chemicals",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 4,
                        dollarvalue: 5835751,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Articles of apparel and clothing accessories, knitted or crocheted",
                        commoditycode: "61",
                        rank: 5,
                        dollarvalue: 2245497,
                        shortdesc: "Clothing",
                        rollup: "Manufactures"
                    }
                },
                iso: "JOR",
                gdp: 35826925775,
                chinaexports: 263204026,
                chinaexportsovergdp: .0052,
                averagevariation: 1,
                continent: "Mideast",
                majorpartner: 0,
                lng: "36"
            }, {
                id: "48",
                text: "Bahrain",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 83233145,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 2,
                        dollarvalue: 41631122,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 3,
                        dollarvalue: 38455954,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Aluminium and articles thereof",
                        commoditycode: "76",
                        rank: 4,
                        dollarvalue: 10641708,
                        shortdesc: "Aluminium",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 5,
                        dollarvalue: 2729123,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    }
                },
                iso: "BHR",
                gdp: 33868989362,
                chinaexports: 183965414,
                chinaexportsovergdp: .0043,
                averagevariation: 1,
                continent: "Mideast",
                majorpartner: 0,
                lng: "50.55"
            }, {
                id: "251",
                text: "France",
                trades: {
                    0: {
                        commodity: "Aircraft, spacecraft, and parts thereof",
                        commoditycode: "88",
                        rank: 1,
                        dollarvalue: 7433629199,
                        shortdesc: "Aircraft",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 2,
                        dollarvalue: 3962073489,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 3,
                        dollarvalue: 2218936974,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Pharmaceutical products",
                        commoditycode: "30",
                        rank: 4,
                        dollarvalue: 1419827834,
                        shortdesc: "Pharmaceuticals",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Beverages, spirits and vinegar",
                        commoditycode: "22",
                        rank: 5,
                        dollarvalue: 1252409751,
                        shortdesc: "Beverages",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "FRA",
                gdp: 2829192039172,
                chinaexports: 26650733234,
                chinaexportsovergdp: .0076,
                averagevariation: .6301369863,
                continent: "Europe",
                majorpartner: 1,
                lng: "2"
            }, {
                id: "699",
                text: "India",
                trades: {
                    0: {
                        commodity: "Cotton",
                        commoditycode: "52",
                        rank: 1,
                        dollarvalue: 3218074260,
                        shortdesc: "Cotton",
                        rollup: "Food and agriculture"
                    },
                    1: {
                        commodity: "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal, and articles thereof; imitation jewellery; coin",
                        commoditycode: "71",
                        rank: 2,
                        dollarvalue: 2522683954,
                        shortdesc: "Precious metals; gems",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 3,
                        dollarvalue: 2338632529,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 4,
                        dollarvalue: 1318772320,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Organic chemicals",
                        commoditycode: "29",
                        rank: 5,
                        dollarvalue: 1052785119,
                        shortdesc: "Organic chemicals",
                        rollup: "Manufactures"
                    }
                },
                iso: "IND",
                gdp: 2066902397333,
                chinaexports: 16358784649,
                chinaexportsovergdp: .0065,
                averagevariation: 1.575342466,
                continent: "Asia",
                majorpartner: 1,
                lng: "77"
            }, {
                id: "360",
                text: "Indonesia",
                trades: {
                    0: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 1,
                        dollarvalue: 8371292251,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    1: {
                        commodity: "Animal or vegetable fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes",
                        commoditycode: "15",
                        rank: 2,
                        dollarvalue: 2978843738,
                        shortdesc: "Soya and other farm goods",
                        rollup: "Food and agriculture"
                    },
                    2: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 3,
                        dollarvalue: 2012896231,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Miscellaneous chemical products",
                        commoditycode: "38",
                        rank: 4,
                        dollarvalue: 1529589572,
                        shortdesc: "Chemicals",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard",
                        commoditycode: "47",
                        rank: 5,
                        dollarvalue: 1242561836,
                        shortdesc: "Woodpulp",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "IDN",
                gdp: 888538201025,
                chinaexports: 24494895760,
                chinaexportsovergdp: .0248,
                averagevariation: 1.856164384,
                continent: "Asia",
                majorpartner: 1,
                lng: "120"
            }, {
                id: "381",
                text: "Italy",
                trades: {
                    0: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 1,
                        dollarvalue: 5576369833,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Pharmaceutical products",
                        commoditycode: "30",
                        rank: 2,
                        dollarvalue: 1688953951,
                        shortdesc: "Pharmaceuticals",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 3,
                        dollarvalue: 1338579500,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof",
                        commoditycode: "87",
                        rank: 4,
                        dollarvalue: 1252335832,
                        shortdesc: "Cars",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 5,
                        dollarvalue: 924817333,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    }
                },
                iso: "ITA",
                gdp: 2144338185065,
                chinaexports: 19183248459,
                chinaexportsovergdp: .0065,
                averagevariation: .7054794521,
                continent: "Europe",
                majorpartner: 1,
                lng: "12.8333"
            }, {
                id: "392",
                text: "Japan",
                trades: {
                    0: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 1,
                        dollarvalue: 40571733191,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 2,
                        dollarvalue: 30378428389,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 3,
                        dollarvalue: 16544004048,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof",
                        commoditycode: "87",
                        rank: 4,
                        dollarvalue: 15967375947,
                        shortdesc: "Cars",
                        rollup: "Manufactures"
                    },
                    4: {
                        commodity: "Plastics and articles thereof",
                        commoditycode: "39",
                        rank: 5,
                        dollarvalue: 9985110894,
                        shortdesc: "Plastics",
                        rollup: "Manufactures"
                    }
                },
                iso: "JPN",
                gdp: 4601461206885,
                chinaexports: 162842e6,
                chinaexportsovergdp: .0272,
                averagevariation: .7602739726,
                continent: "Asia",
                majorpartner: 1,
                lng: "138"
            }, {
                id: "608",
                text: "Philippines",
                trades: {
                    0: {
                        commodity: "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                        commoditycode: "85",
                        rank: 1,
                        dollarvalue: 9364509837,
                        shortdesc: "Electricals",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 2,
                        dollarvalue: 5023300264,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 3,
                        dollarvalue: 3275164885,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Copper and articles thereof",
                        commoditycode: "74",
                        rank: 4,
                        dollarvalue: 755079453,
                        shortdesc: "Copper",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Edible fruit and nuts; peel of citrus fruit or melons",
                        commoditycode: "08",
                        rank: 5,
                        dollarvalue: 623758661,
                        shortdesc: "Fruit",
                        rollup: "Food and agriculture"
                    }
                },
                iso: "PHL",
                gdp: 284582023121,
                chinaexports: 20981238549,
                chinaexportsovergdp: .0282,
                averagevariation: .2534246575,
                continent: "Asia",
                majorpartner: 1,
                lng: "122"
            }, {
                id: "826",
                text: "UK",
                trades: {
                    0: {
                        commodity: "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof",
                        commoditycode: "87",
                        rank: 1,
                        dollarvalue: 10481905558,
                        shortdesc: "Cars",
                        rollup: "Manufactures"
                    },
                    1: {
                        commodity: "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
                        commoditycode: "84",
                        rank: 2,
                        dollarvalue: 2583342079,
                        shortdesc: "Machinery",
                        rollup: "Manufactures"
                    },
                    2: {
                        commodity: "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
                        commoditycode: "90",
                        rank: 3,
                        dollarvalue: 1364482151,
                        shortdesc: "Precision machinery",
                        rollup: "Manufactures"
                    },
                    3: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 4,
                        dollarvalue: 1127161795,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    },
                    4: {
                        commodity: "Pharmaceutical products",
                        commoditycode: "30",
                        rank: 5,
                        dollarvalue: 1061615733,
                        shortdesc: "Pharmaceuticals",
                        rollup: "Manufactures"
                    }
                },
                iso: "GBR",
                gdp: 2941885537461,
                chinaexports: 23604068762,
                chinaexportsovergdp: .0089,
                averagevariation: 1.047945205,
                continent: "Europe",
                majorpartner: 1,
                lng: "-2"
            },
            [{
                id: "710",
                text: "S Africa",
                trades: {
                    0: {
                        commodity: "Commodities not specified according to kind",
                        commoditycode: "99",
                        rank: 1,
                        dollarvalue: 26671257236,
                        shortdesc: "Other",
                        rollup: "Other"
                    },
                    1: {
                        commodity: "Ores, slag and ash",
                        commoditycode: "26",
                        rank: 2,
                        dollarvalue: 7011839779,
                        shortdesc: "Ores",
                        rollup: "Primary materials"
                    },
                    2: {
                        commodity: "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal, and articles thereof; imitation jewellery; coin",
                        commoditycode: "71",
                        rank: 3,
                        dollarvalue: 6911792336,
                        shortdesc: "Precious metals; gems",
                        rollup: "Primary materials"
                    },
                    3: {
                        commodity: "Iron and steel",
                        commoditycode: "72",
                        rank: 4,
                        dollarvalue: 1313194799,
                        shortdesc: "Iron and steel",
                        rollup: "Primary materials"
                    },
                    4: {
                        commodity: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
                        commoditycode: "27",
                        rank: 5,
                        dollarvalue: 463823372,
                        shortdesc: "Oil and gas",
                        rollup: "Energy"
                    }
                },
                iso: "ZAF",
                gdp: 349817096206,
                chinaexports: 44571243678,
                chinaexportsovergdp: .0329,
                averagevariation: 2.760273973,
                continent: "Africa",
                majorpartner: 1,
                lng: "24"
            }]
        ]
    }, function(t, r) {
        t.exports = [{
            imports: 152072e3,
            month: "01/07/2015",
            yoy: -.08163820401,
            _cre1l: 961219065,
            rowNumber: 1
        }, {
            imports: 145475543,
            month: "01/06/2015",
            yoy: -.06280155121,
            _cre1l: "",
            rowNumber: 2
        }, {
            imports: 131190146,
            month: "01/05/2015",
            yoy: -.1777551341,
            _cre1l: "",
            rowNumber: 3
        }, {
            imports: 142196335,
            month: "01/04/2015",
            yoy: -.1639836189,
            _cre1l: "",
            rowNumber: 4
        }, {
            imports: 141487341,
            month: "01/03/2015",
            yoy: -.1287977066,
            _cre1l: "",
            rowNumber: 5
        }, {
            imports: 108571550,
            month: "01/02/2015",
            yoy: -.207983809,
            _cre1l: "",
            rowNumber: 6
        }, {
            imports: 140226150,
            month: "01/01/2015",
            yoy: -.1999093133,
            _cre1l: "",
            rowNumber: 7
        }, {
            imports: 177900669,
            month: "01/12/2014",
            yoy: -.02306901544,
            _cre1l: "",
            rowNumber: 8
        }, {
            imports: 157186291,
            month: "01/11/2014",
            yoy: -.06661125425,
            _cre1l: "",
            rowNumber: 9
        }, {
            imports: 161461228,
            month: "01/10/2014",
            yoy: .04641877337,
            _cre1l: "",
            rowNumber: 10
        }, {
            imports: 182724108,
            month: "01/09/2014",
            yoy: .07215870747,
            _cre1l: "",
            rowNumber: 11
        }, {
            imports: 158629387,
            month: "01/08/2014",
            yoy: -.02134721248,
            _cre1l: "",
            rowNumber: 12
        }, {
            imports: 165590512,
            month: "01/07/2014",
            yoy: -.01535828212,
            _cre1l: 1125203520,
            rowNumber: 13
        }, {
            imports: 155223841,
            month: "01/06/2014",
            yoy: .05457145891,
            _cre1l: "",
            rowNumber: 14
        }, {
            imports: 159551189,
            month: "01/05/2014",
            yoy: -.01718583897,
            _cre1l: "",
            rowNumber: 15
        }, {
            imports: 170087977,
            month: "01/04/2014",
            yoy: .007033647378,
            _cre1l: "",
            rowNumber: 16
        }, {
            imports: 162404693,
            month: "01/03/2014",
            yoy: -.1126061705,
            _cre1l: "",
            rowNumber: 17
        }, {
            imports: 137082488,
            month: "01/02/2014",
            yoy: .1042414046,
            _cre1l: "",
            rowNumber: 18
        }, {
            imports: 175262820,
            month: "01/01/2014",
            yoy: .1077207749,
            _cre1l: "",
            rowNumber: 19
        }, {
            imports: 182101573,
            month: "01/12/2013",
            yoy: .08645200386,
            _cre1l: "",
            rowNumber: 20
        }, {
            imports: 168403885,
            month: "01/11/2013",
            yoy: .05418797436,
            _cre1l: "",
            rowNumber: 21
        }, {
            imports: 154298864,
            month: "01/10/2013",
            yoy: .07507048836,
            _cre1l: "",
            rowNumber: 22
        }, {
            imports: 170426362,
            month: "01/09/2013",
            yoy: .07402222378,
            _cre1l: "",
            rowNumber: 23
        }, {
            imports: 162089547,
            month: "01/08/2013",
            yoy: .07122203043,
            _cre1l: "",
            rowNumber: 24
        }, {
            imports: 168173366,
            month: "01/07/2013",
            yoy: .1079104965,
            _cre1l: "",
            rowNumber: 25
        }, {
            imports: 147191392,
            month: "01/06/2013",
            yoy: -.008694453378,
            _cre1l: "",
            rowNumber: 26
        }, {
            imports: 162341158,
            month: "01/05/2013",
            yoy: -.0006173424712,
            _cre1l: "",
            rowNumber: 27
        }, {
            imports: 168899994,
            month: "01/04/2013",
            yoy: .166238903,
            _cre1l: "",
            rowNumber: 28
        }, {
            imports: 183013097,
            month: "01/03/2013",
            yoy: .1416142777,
            _cre1l: "",
            rowNumber: 29
        }, {
            imports: 124141775,
            month: "01/02/2013",
            yoy: -.1494459686,
            _cre1l: "",
            rowNumber: 30
        }, {
            imports: 158219313,
            month: "01/01/2013",
            yoy: .2898885562,
            _cre1l: "",
            rowNumber: 31
        }, {
            imports: 167611245,
            month: "01/12/2012",
            yoy: .05951037381,
            _cre1l: "",
            rowNumber: 32
        }, {
            imports: 159747492,
            month: "01/11/2012",
            yoy: -.001178615233,
            _cre1l: "",
            rowNumber: 33
        }, {
            imports: 143524416,
            month: "01/10/2012",
            yoy: .02183374812,
            _cre1l: "",
            rowNumber: 34
        }, {
            imports: 158680480,
            month: "01/09/2012",
            yoy: .02269541686,
            _cre1l: "",
            rowNumber: 35
        }, {
            imports: 151312746,
            month: "01/08/2012",
            yoy: -.02728260458,
            _cre1l: "",
            rowNumber: 36
        }, {
            imports: 151793278,
            month: "01/07/2012",
            yoy: .05672932233,
            _cre1l: "",
            rowNumber: 37
        }, {
            imports: 148482365,
            month: "01/06/2012",
            yoy: .06280352281,
            _cre1l: "",
            rowNumber: 38
        }, {
            imports: 162441440,
            month: "01/05/2012",
            yoy: .1272027523,
            _cre1l: "",
            rowNumber: 39
        }, {
            imports: 144824524,
            month: "01/04/2012",
            yoy: .003891799594,
            _cre1l: "",
            rowNumber: 40
        }, {
            imports: 160310799,
            month: "01/03/2012",
            yoy: .05425801847,
            _cre1l: "",
            rowNumber: 41
        }, {
            imports: 145954014,
            month: "01/02/2012",
            yoy: .4025413639,
            _cre1l: "",
            rowNumber: 42
        }, {
            imports: 122661227,
            month: "01/01/2012",
            yoy: -.1497990029,
            _cre1l: "",
            rowNumber: 43
        }, {
            imports: 158196889,
            month: "01/12/2011",
            yoy: .1214163018,
            _cre1l: "",
            rowNumber: 44
        }, {
            imports: 159935995,
            month: "01/11/2011",
            yoy: .2261650345,
            _cre1l: "",
            rowNumber: 45
        }, {
            imports: 140457698,
            month: "01/10/2011",
            yoy: .2905835903,
            _cre1l: "",
            rowNumber: 46
        }, {
            imports: 155159080,
            month: "01/09/2011",
            yoy: .2111366155,
            _cre1l: "",
            rowNumber: 47
        }, {
            imports: 155556739,
            month: "01/08/2011",
            yoy: .3042823667,
            _cre1l: "",
            rowNumber: 48
        }, {
            imports: 143644427,
            month: "01/07/2011",
            yoy: .2299489522,
            _cre1l: "",
            rowNumber: 49
        }, {
            imports: 139708198,
            month: "01/06/2011",
            yoy: .1902851069,
            _cre1l: "",
            rowNumber: 50
        }, {
            imports: 144110223,
            month: "01/05/2011",
            yoy: .2840872626,
            _cre1l: "",
            rowNumber: 51
        }, {
            imports: 144263081,
            month: "01/04/2011",
            yoy: .2200925018,
            _cre1l: "",
            rowNumber: 52
        }, {
            imports: 152060308,
            month: "01/03/2011",
            yoy: .2740908166,
            _cre1l: "",
            rowNumber: 53
        }, {
            imports: 104063964,
            month: "01/02/2011",
            yoy: .1973715945,
            _cre1l: "",
            rowNumber: 54
        }, {
            imports: 144273210,
            month: "01/01/2011",
            yoy: .5137727434,
            _cre1l: "",
            rowNumber: 55
        }, {
            imports: 141068833,
            month: "01/12/2010",
            yoy: .256248718,
            _cre1l: "",
            rowNumber: 56
        }, {
            imports: 130435945,
            month: "01/11/2010",
            yoy: .3793924543,
            _cre1l: "",
            rowNumber: 57
        }, {
            imports: 108832701,
            month: "01/10/2010",
            yoy: .2541978197,
            _cre1l: "",
            rowNumber: 58
        }, {
            imports: 128110304,
            month: "01/09/2010",
            yoy: .2437184673,
            _cre1l: "",
            rowNumber: 59
        }, {
            imports: 119266152,
            month: "01/08/2010",
            yoy: .3553705875,
            _cre1l: "",
            rowNumber: 60
        }, {
            imports: 116788934,
            month: "01/07/2010",
            yoy: .2320731691,
            _cre1l: "",
            rowNumber: 61
        }, {
            imports: 117373726,
            month: "01/06/2010",
            yoy: .3466537256,
            _cre1l: "",
            rowNumber: 62
        }, {
            imports: 112227749,
            month: "01/05/2010",
            yoy: .4890368574,
            _cre1l: "",
            rowNumber: 63
        }, {
            imports: 118239462,
            month: "01/04/2010",
            yoy: .5005067469,
            _cre1l: "",
            rowNumber: 64
        }, {
            imports: 119348092,
            month: "01/03/2010",
            yoy: .6638724316,
            _cre1l: "",
            rowNumber: 65
        }, {
            imports: 86910333,
            month: "01/02/2010",
            yoy: .4472113089,
            _cre1l: "",
            rowNumber: 66
        }, {
            imports: 95307047,
            month: "01/01/2010",
            yoy: .8562355281,
            _cre1l: "",
            rowNumber: 67
        }, {
            imports: 112293713,
            month: "01/12/2009",
            yoy: .5558061934,
            _cre1l: "",
            rowNumber: 68
        }, {
            imports: 94560431,
            month: "01/11/2009",
            yoy: .2625317117,
            _cre1l: "",
            rowNumber: 69
        }, {
            imports: 86774749,
            month: "01/10/2009",
            yoy: -.06781710096,
            _cre1l: "",
            rowNumber: 70
        }, {
            imports: 103005871,
            month: "01/09/2009",
            yoy: -.0379152161,
            _cre1l: "",
            rowNumber: 71
        }, {
            imports: 87995234,
            month: "01/08/2009",
            yoy: -.171251809,
            _cre1l: "",
            rowNumber: 72
        }, {
            imports: 94790583,
            month: "01/07/2009",
            yoy: -.149075308,
            _cre1l: "",
            rowNumber: 73
        }, {
            imports: 87159545,
            month: "01/06/2009",
            yoy: -.1299700471,
            _cre1l: "",
            rowNumber: 74
        }, {
            imports: 75369356,
            month: "01/05/2009",
            yoy: -.2484563209,
            _cre1l: "",
            rowNumber: 75
        }, {
            imports: 78799687,
            month: "01/04/2009",
            yoy: -.2282309859,
            _cre1l: "",
            rowNumber: 76
        }, {
            imports: 71729112,
            month: "01/03/2009",
            yoy: -.2493511092,
            _cre1l: "",
            rowNumber: 77
        }, {
            imports: 60053658,
            month: "01/02/2009",
            yoy: -.2380247338,
            _cre1l: "",
            rowNumber: 78
        }, {
            imports: 51344264,
            month: "01/01/2009",
            yoy: -.4306118229,
            _cre1l: "",
            rowNumber: 79
        }, {
            imports: 72177186,
            month: "01/12/2008",
            yoy: -.213147413,
            _cre1l: "",
            rowNumber: 80
        }, {
            imports: 74897470,
            month: "01/11/2008",
            yoy: -.180010584,
            _cre1l: "",
            rowNumber: 81
        }, {
            imports: 93087686,
            month: "01/10/2008",
            yoy: .1538842209,
            _cre1l: "",
            rowNumber: 82
        }, {
            imports: 107065274,
            month: "01/09/2008",
            yoy: .208859112,
            _cre1l: "",
            rowNumber: 83
        }, {
            imports: 106178493,
            month: "01/08/2008",
            yoy: .2291922627,
            _cre1l: "",
            rowNumber: 84
        }, {
            imports: 111397147,
            month: "01/07/2008",
            yoy: .335902413,
            _cre1l: "",
            rowNumber: 85
        }, {
            imports: 100179936,
            month: "01/06/2008",
            yoy: .3119732222,
            _cre1l: "",
            rowNumber: 86
        }, {
            imports: 100286062,
            month: "01/05/2008",
            yoy: .4008229072,
            _cre1l: "",
            rowNumber: 87
        }, {
            imports: 102102683,
            month: "01/04/2008",
            yoy: .2667165342,
            _cre1l: "",
            rowNumber: 88
        }, {
            imports: 95556142,
            month: "01/03/2008",
            yoy: .2482397522,
            _cre1l: "",
            rowNumber: 89
        }, {
            imports: 78813133,
            month: "01/02/2008",
            yoy: .3509426852,
            _cre1l: "",
            rowNumber: 90
        }, {
            imports: 90174447,
            month: "01/01/2008",
            yoy: .2747450957,
            _cre1l: "",
            rowNumber: 91
        }, {
            imports: 91728981,
            month: "01/12/2007",
            yoy: .2548982137,
            _cre1l: "",
            rowNumber: 92
        }, {
            imports: 91339557,
            month: "01/11/2007",
            yoy: .2524880809,
            _cre1l: "",
            rowNumber: 93
        }, {
            imports: 80673333,
            month: "01/10/2007",
            yoy: .2546881554,
            _cre1l: "",
            rowNumber: 94
        }, {
            imports: 88567206,
            month: "01/09/2007",
            yoy: .1601301524,
            _cre1l: "",
            rowNumber: 95
        }, {
            imports: 86380704,
            month: "01/08/2007",
            yoy: .2002338144,
            _cre1l: "",
            rowNumber: 96
        }, {
            imports: 83387189,
            month: "01/07/2007",
            yoy: .2689503867,
            _cre1l: "",
            rowNumber: 97
        }, {
            imports: 76358217,
            month: "01/06/2007",
            yoy: .1429450682,
            _cre1l: "",
            rowNumber: 98
        }, {
            imports: 71590821,
            month: "01/05/2007",
            yoy: .1910022055,
            _cre1l: "",
            rowNumber: 99
        }, {
            imports: 80604208,
            month: "01/04/2007",
            yoy: .212250946,
            _cre1l: "",
            rowNumber: 100
        }, {
            imports: 76552715,
            month: "01/03/2007",
            yoy: .1450194274,
            _cre1l: "",
            rowNumber: 101
        }, {
            imports: 58339361,
            month: "01/02/2007",
            yoy: .1287763972,
            _cre1l: "",
            rowNumber: 102
        }, {
            imports: 70739199,
            month: "01/01/2007",
            yoy: .2746530126,
            _cre1l: "",
            rowNumber: 103
        }, {
            imports: 73096750,
            month: "01/12/2006",
            yoy: .1351128004,
            _cre1l: "",
            rowNumber: 104
        }, {
            imports: 72926488,
            month: "01/11/2006",
            yoy: .1821977507,
            _cre1l: "",
            rowNumber: 105
        }, {
            imports: 64297517,
            month: "01/10/2006",
            yoy: .1466134392,
            _cre1l: "",
            rowNumber: 106
        }, {
            imports: 76342474,
            month: "01/09/2006",
            yoy: .2190780198,
            _cre1l: "",
            rowNumber: 107
        }, {
            imports: 71969897,
            month: "01/08/2006",
            yoy: .2450098681,
            _cre1l: "",
            rowNumber: 108
        }, {
            imports: 65713514,
            month: "01/07/2006",
            yoy: .193954961,
            _cre1l: "",
            rowNumber: 109
        }, {
            imports: 66808300,
            month: "01/06/2006",
            yoy: .1870282882,
            _cre1l: "",
            rowNumber: 110
        }, {
            imports: 60109730,
            month: "01/05/2006",
            yoy: .2158477188,
            _cre1l: "",
            rowNumber: 111
        }, {
            imports: 66491355,
            month: "01/04/2006",
            yoy: .1551625087,
            _cre1l: "",
            rowNumber: 112
        }, {
            imports: 66857132,
            month: "01/03/2006",
            yoy: .212583361,
            _cre1l: "",
            rowNumber: 113
        }, {
            imports: 51683718,
            month: "01/02/2006",
            yoy: .294804854,
            _cre1l: "",
            rowNumber: 114
        }, {
            imports: 55496828,
            month: "01/01/2006",
            yoy: .2538494928,
            _cre1l: "",
            rowNumber: 115
        }, {
            imports: 64396023,
            month: "01/12/2005",
            yoy: .22174976,
            _cre1l: "",
            rowNumber: 116
        }, {
            imports: 61687216,
            month: "01/11/2005",
            yoy: .2088492543,
            _cre1l: "",
            rowNumber: 117
        }, {
            imports: 56076019,
            month: "01/10/2005",
            yoy: .2342418626,
            _cre1l: "",
            rowNumber: 118
        }, {
            imports: 62623124,
            month: "01/09/2005",
            yoy: .2324738251,
            _cre1l: "",
            rowNumber: 119
        }, {
            imports: 57806688,
            month: "01/08/2005",
            yoy: .2322735784,
            _cre1l: "",
            rowNumber: 120
        }, {
            imports: 55038520,
            month: "01/07/2005",
            yoy: .1238705476,
            _cre1l: "",
            rowNumber: 121
        }, {
            imports: 56281978,
            month: "01/06/2005",
            yoy: .1568118687,
            _cre1l: "",
            rowNumber: 122
        }, {
            imports: 49438535,
            month: "01/05/2005",
            yoy: .1560506242,
            _cre1l: "",
            rowNumber: 123
        }, {
            imports: 57560174,
            month: "01/04/2005",
            yoy: .1657949189,
            _cre1l: "",
            rowNumber: 124
        }, {
            imports: 55136112,
            month: "01/03/2005",
            yoy: .1885896915,
            _cre1l: "",
            rowNumber: 125
        }, {
            imports: 39916222,
            month: "01/02/2005",
            yoy: -.05028634007,
            _cre1l: "",
            rowNumber: 126
        }, {
            imports: 44261156,
            month: "01/01/2005",
            yoy: .2385384598,
            _cre1l: "",
            rowNumber: 127
        }, {
            imports: 52708030,
            month: "01/12/2004",
            yoy: .2449879744,
            _cre1l: "",
            rowNumber: 128
        }, {
            imports: 51029701,
            month: "01/11/2004",
            yoy: .3831703958,
            _cre1l: "",
            rowNumber: 129
        }, {
            imports: 45433574,
            month: "01/10/2004",
            yoy: .2910015321,
            _cre1l: "",
            rowNumber: 130
        }, {
            imports: 50810916,
            month: "01/09/2004",
            yoy: .2198815452,
            _cre1l: "",
            rowNumber: 131
        }, {
            imports: 46910596,
            month: "01/08/2004",
            yoy: .3549608252,
            _cre1l: "",
            rowNumber: 132
        }, {
            imports: 48972295,
            month: "01/07/2004",
            yoy: .3412045506,
            _cre1l: "",
            rowNumber: 133
        }, {
            imports: 48652663,
            month: "01/06/2004",
            yoy: .5045892563,
            _cre1l: "",
            rowNumber: 134
        }, {
            imports: 42765026,
            month: "01/05/2004",
            yoy: .3531459858,
            _cre1l: "",
            rowNumber: 135
        }, {
            imports: 49374185,
            month: "01/04/2004",
            yoy: .426949747,
            _cre1l: "",
            rowNumber: 136
        }, {
            imports: 46387843,
            month: "01/03/2004",
            yoy: .4251640997,
            _cre1l: "",
            rowNumber: 137
        }, {
            imports: 42029744,
            month: "01/02/2004",
            yoy: .7674663684,
            _cre1l: "",
            rowNumber: 138
        }, {
            imports: 35736602,
            month: "01/01/2004",
            yoy: .1522000812,
            _cre1l: "",
            rowNumber: 139
        }, {
            imports: 42336176,
            month: "01/12/2003",
            yoy: .4734553268,
            _cre1l: "",
            rowNumber: 140
        }, {
            imports: 36893286,
            month: "01/11/2003",
            yoy: .283932561,
            _cre1l: "",
            rowNumber: 141
        }, {
            imports: 35192502,
            month: "01/10/2003",
            yoy: .3966920793,
            _cre1l: "",
            rowNumber: 142
        }, {
            imports: 41652336,
            month: "01/09/2003",
            yoy: .3980043525,
            _cre1l: "",
            rowNumber: 143
        }, {
            imports: 34621367,
            month: "01/08/2003",
            yoy: .2726144622,
            _cre1l: "",
            rowNumber: 144
        }, {
            imports: 36513666,
            month: "01/07/2003",
            yoy: .352976611,
            _cre1l: "",
            rowNumber: 145
        }, {
            imports: 32336176,
            month: "01/06/2003",
            yoy: .4001895372,
            _cre1l: "",
            rowNumber: 146
        }, {
            imports: 31604148,
            month: "01/05/2003",
            yoy: .408816931,
            _cre1l: "",
            rowNumber: 147
        }, {
            imports: 34601208,
            month: "01/04/2003",
            yoy: .3436469522,
            _cre1l: "",
            rowNumber: 148
        }, {
            imports: 32549124,
            month: "01/03/2003",
            yoy: .4476478425,
            _cre1l: "",
            rowNumber: 149
        }, {
            imports: 23779657,
            month: "01/02/2003",
            yoy: .4938423033,
            _cre1l: "",
            rowNumber: 150
        }, {
            imports: 31015969,
            month: "01/01/2003",
            yoy: .6349650617,
            _cre1l: "",
            rowNumber: 151
        }, {
            imports: 28732582,
            month: "01/12/2002",
            yoy: .2832714273,
            _cre1l: "",
            rowNumber: 152
        }, {
            imports: 28734598,
            month: "01/11/2002",
            yoy: .3785038943,
            _cre1l: "",
            rowNumber: 153
        }, {
            imports: 25197037,
            month: "01/10/2002",
            yoy: .333048969,
            _cre1l: "",
            rowNumber: 154
        }, {
            imports: 29794139,
            month: "01/09/2002",
            yoy: .3635388377,
            _cre1l: "",
            rowNumber: 155
        }, {
            imports: 27204914,
            month: "01/08/2002",
            yoy: .2275735413,
            _cre1l: "",
            rowNumber: 156
        }, {
            imports: 26987655,
            month: "01/07/2002",
            yoy: .2878554556,
            _cre1l: "",
            rowNumber: 157
        }, {
            imports: 23094142,
            month: "01/06/2002",
            yoy: .08670455224,
            _cre1l: "",
            rowNumber: 158
        }, {
            imports: 22433112,
            month: "01/05/2002",
            yoy: .1926945128,
            _cre1l: "",
            rowNumber: 159
        }, {
            imports: 25751711,
            month: "01/04/2002",
            yoy: .1780676674,
            _cre1l: "",
            rowNumber: 160
        }, {
            imports: 22484145,
            month: "01/03/2002",
            yoy: .08239821195,
            _cre1l: "",
            rowNumber: 161
        }, {
            imports: 15918452,
            month: "01/02/2002",
            yoy: -.12658913,
            _cre1l: "",
            rowNumber: 162
        }, {
            imports: 18970417,
            month: "01/01/2002",
            yoy: .2203543556,
            _cre1l: "",
            rowNumber: 163
        }, {
            imports: 22390105,
            month: "01/12/2001",
            yoy: .04557035619,
            _cre1l: "",
            rowNumber: 164
        }, {
            imports: 20844771,
            month: "01/11/2001",
            yoy: -.03678731933,
            _cre1l: "",
            rowNumber: 165
        }, {
            imports: 18901809,
            month: "01/10/2001",
            yoy: -.0007713940934,
            _cre1l: "",
            rowNumber: 166
        }, {
            imports: 21850598,
            month: "01/09/2001",
            yoy: .05481835077,
            _cre1l: "",
            rowNumber: 167
        }, {
            imports: 22161535,
            month: "01/08/2001",
            yoy: .06608678962,
            _cre1l: "",
            rowNumber: 168
        }, {
            imports: 20955500,
            month: "01/07/2001",
            yoy: .07510260303,
            _cre1l: "",
            rowNumber: 169
        }, {
            imports: 21251537,
            month: "01/06/2001",
            yoy: .04680144751,
            _cre1l: "",
            rowNumber: 170
        }, {
            imports: 18808766,
            month: "01/05/2001",
            yoy: .1085871989,
            _cre1l: "",
            rowNumber: 171
        }, {
            imports: 21859280,
            month: "01/04/2001",
            yoy: .1905410414,
            _cre1l: "",
            rowNumber: 172
        }, {
            imports: 20772526,
            month: "01/03/2001",
            yoy: .1424452183,
            _cre1l: "",
            rowNumber: 173
        }, {
            imports: 18225617,
            month: "01/02/2001",
            yoy: .2632014049,
            _cre1l: "",
            rowNumber: 174
        }, {
            imports: 15545007,
            month: "01/01/2001",
            yoy: .01843768871,
            _cre1l: "",
            rowNumber: 175
        }, {
            imports: 21414250,
            month: "01/12/2000",
            yoy: .1864112915,
            _cre1l: "",
            rowNumber: 176
        }, {
            imports: 21640881,
            month: "01/11/2000",
            yoy: .2186719201,
            _cre1l: "",
            rowNumber: 177
        }, {
            imports: 18916401,
            month: "01/10/2000",
            yoy: 1,
            _cre1l: "",
            rowNumber: 178
        }, {
            imports: 20715034,
            month: "01/09/2000",
            yoy: "#VALUE!",
            _cre1l: "",
            rowNumber: 179
        }, {
            imports: 20787740,
            month: "01/08/2000",
            yoy: 1,
            _cre1l: "",
            rowNumber: 180
        }, {
            imports: 19491628,
            month: "01/07/2000",
            yoy: 1,
            _cre1l: "",
            rowNumber: 181
        }, {
            imports: 20301402,
            month: "01/06/2000",
            yoy: 1,
            _cre1l: "",
            rowNumber: 182
        }, {
            imports: 16966429,
            month: "01/05/2000",
            yoy: 1,
            _cre1l: "",
            rowNumber: 183
        }, {
            imports: 18360795,
            month: "01/04/2000",
            yoy: 1,
            _cre1l: "",
            rowNumber: 184
        }, {
            imports: 17813579,
            month: "01/03/2000",
            yoy: 1,
            _cre1l: "",
            rowNumber: 185
        }, {
            imports: 13428609,
            month: "01/02/2000",
            yoy: 1,
            _cre1l: "",
            rowNumber: 186
        }, {
            imports: 15258393,
            month: "01/01/2000",
            yoy: 1,
            _cre1l: "",
            rowNumber: 187
        }, {
            imports: 17422392,
            month: "01/12/1999",
            yoy: 1,
            _cre1l: "",
            rowNumber: 188
        }, {
            imports: 16908628,
            month: "01/11/1999",
            yoy: 1,
            _cre1l: "",
            rowNumber: 189
        }]
    }, function(t, r) {
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