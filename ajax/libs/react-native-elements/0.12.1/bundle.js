!(function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  (t.m = e), (t.c = n), (t.i = function(e) {
    return e;
  }), (t.d = function(e, n, r) {
    t.o(e, n) ||
      Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
  }), (t.n = function(e) {
    var n = e && e.__esModule
      ? function() {
          return e.default;
        }
      : function() {
          return e;
        };
    return t.d(n, 'a', n), n;
  }), (t.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }), (t.p = ''), t((t.s = 43));
})([
  function(e, t) {
    e.exports = react - native;
  },
  function(e, t) {
    e.exports = react;
  },
  function(e, t, n) {
    (function(t) {
      if ('production' !== t.env.NODE_ENV) {
        var r =
          ('function' == typeof Symbol &&
            Symbol.for &&
            Symbol.for('react.element')) ||
          60103,
          o = function(e) {
            return 'object' == typeof e && null !== e && e.$$typeof === r;
          };
        e.exports = n(51)(o, !0);
      } else e.exports = n(50)();
    }.call(t, n(8)));
  },
  function(e, t) {
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = {
      primary: '#9E9E9E',
      primary1: '#4d86f7',
      primary2: '#6296f9',
      secondary: '#8F0CE8',
      secondary2: '#00B233',
      secondary3: '#00FF48',
      grey0: '#393e42',
      grey1: '#43484d',
      grey2: '#5e6977',
      grey3: '#86939e',
      grey4: '#bdc6cf',
      grey5: '#e1e8ee',
      dkGreyBg: '#232323',
      greyOutline: '#cbd2d9',
      searchBg: '#303337',
      disabled: '#dadee0',
      white: '#ffffff',
      error: '#ff190c',
    });
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(6),
      d = r(f),
      p = n(5),
      y = r(p),
      h = s.StyleSheet.create({
        text: a(
          {},
          s.Platform.select({ android: a({}, d.default.android.regular) })
        ),
        bold: a(
          {},
          s.Platform.select({ android: a({}, d.default.android.bold) })
        ),
      }),
      g = function(e) {
        var t = e.style,
          n = e.children,
          r = e.h1,
          i = e.h2,
          l = e.h3,
          u = e.h4,
          f = e.fontFamily,
          d = o(e, ['style', 'children', 'h1', 'h2', 'h3', 'h4', 'fontFamily']);
        return c.default.createElement(
          s.Text,
          a(
            {
              style: [
                h.text,
                r && { fontSize: (0, y.default)(40) },
                i && { fontSize: (0, y.default)(34) },
                l && { fontSize: (0, y.default)(28) },
                u && { fontSize: (0, y.default)(22) },
                r && h.bold,
                i && h.bold,
                l && h.bold,
                u && h.bold,
                f && { fontFamily: f },
                t && t,
              ],
            },
            d
          ),
          n
        );
      };
    (g.propTypes = {
      style: l.default.any,
      h1: l.default.bool,
      h2: l.default.bool,
      h3: l.default.bool,
      h4: l.default.bool,
      fontFamily: l.default.string,
      children: l.default.any,
    }), (t.default = g);
  },
  function(e, t, n) {
    var r = n(0),
      o = r.PixelRatio,
      a = r.Dimensions,
      i = o.get(),
      l = a.get('window').height,
      u = a.get('window').width,
      c = function(e) {
        return 2 === i
          ? u < 360
              ? 0.95 * e
              : l < 667 ? e : l >= 667 && l <= 735 ? 1.15 * e : 1.25 * e
          : 3 === i
              ? u <= 360
                  ? e
                  : l < 667
                      ? 1.15 * e
                      : l >= 667 && l <= 735 ? 1.2 * e : 1.27 * e
              : 3.5 === i
                  ? u <= 360
                      ? e
                      : l < 667
                          ? 1.2 * e
                          : l >= 667 && l <= 735 ? 1.25 * e : 1.4 * e
                  : e;
      };
    e.exports = c;
  },
  function(e, t) {
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = {
      ios: {},
      android: {
        regular: { fontFamily: 'sans-serif' },
        light: { fontFamily: 'sans-serif-light' },
        condensed: { fontFamily: 'sans-serif-condensed' },
        condensed_light: {
          fontFamily: 'sans-serif-condensed',
          fontWeight: 'light',
        },
        black: { fontFamily: 'sans-serif', fontWeight: 'bold' },
        thin: { fontFamily: 'sans-serif-thin' },
        medium: { fontFamily: 'sans-serif-medium' },
        bold: { fontFamily: 'sans-serif', fontWeight: 'bold' },
      },
    });
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(9),
      d = r(f),
      p = function(e) {
        var t = e.type,
          n = e.name,
          r = e.size,
          i = e.color,
          l = e.iconStyle,
          u = e.component,
          f = e.underlayColor,
          p = e.reverse,
          h = e.raised,
          g = e.containerStyle,
          m = e.reverseColor,
          b = e.onPress,
          v = o(e, [
            'type',
            'name',
            'size',
            'color',
            'iconStyle',
            'component',
            'underlayColor',
            'reverse',
            'raised',
            'containerStyle',
            'reverseColor',
            'onPress',
          ]),
          S = s.View;
        b && (S = s.TouchableHighlight), u && (S = u);
        var w = void 0;
        return (w = t
          ? (0, d.default)(t)
          : (0, d.default)('material')), c.default.createElement(
          S,
          a(
            {
              underlayColor: p ? i : f || i,
              style: [
                (p || h) && y.button,
                (p || h) && {
                  borderRadius: r + 4,
                  height: 2 * r + 4,
                  width: 2 * r + 4,
                },
                h && y.raised,
                {
                  backgroundColor: p ? i : h ? 'white' : 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                g && g,
              ],
              onPress: b,
            },
            v
          ),
          c.default.createElement(w, {
            style: [{ backgroundColor: 'transparent' }, l && l],
            size: r,
            name: n,
            color: p ? m : i,
          })
        );
      };
    (p.propTypes = {
      type: l.default.string,
      name: l.default.string,
      size: l.default.number,
      color: l.default.string,
      component: l.default.element,
      underlayColor: l.default.string,
      reverse: l.default.bool,
      raised: l.default.bool,
      containerStyle: s.View.propTypes.style,
      iconStyle: s.Text.propTypes.style,
      onPress: l.default.func,
      reverseColor: l.default.string,
    }), (p.defaultProps = {
      underlayColor: 'white',
      reverse: !1,
      raised: !1,
      size: 24,
      color: 'black',
      reverseColor: 'white',
    });
    var y = s.StyleSheet.create({
      button: { margin: 7 },
      raised: a(
        {},
        s.Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
          },
          android: { elevation: 2 },
        })
      ),
    });
    t.default = p;
  },
  function(e, t) {
    function n() {
      throw new Error('setTimeout has not been defined');
    }
    function r() {
      throw new Error('clearTimeout has not been defined');
    }
    function o(e) {
      if (s === setTimeout) return setTimeout(e, 0);
      if ((s === n || !s) && setTimeout)
        return (s = setTimeout), setTimeout(e, 0);
      try {
        return s(e, 0);
      } catch (t) {
        try {
          return s.call(null, e, 0);
        } catch (t) {
          return s.call(this, e, 0);
        }
      }
    }
    function a(e) {
      if (f === clearTimeout) return clearTimeout(e);
      if ((f === r || !f) && clearTimeout)
        return (f = clearTimeout), clearTimeout(e);
      try {
        return f(e);
      } catch (t) {
        try {
          return f.call(null, e);
        } catch (t) {
          return f.call(this, e);
        }
      }
    }
    function i() {
      h &&
        p &&
        ((h = !1), p.length ? (y = p.concat(y)) : (g = -1), y.length && l());
    }
    function l() {
      if (!h) {
        var e = o(i);
        h = !0;
        for (var t = y.length; t; ) {
          for ((p = y), (y = []); ++g < t; )
            p && p[g].run();
          (g = -1), (t = y.length);
        }
        (p = null), (h = !1), a(e);
      }
    }
    function u(e, t) {
      (this.fun = e), (this.array = t);
    }
    function c() {}
    var s, f, d = (e.exports = {});
    !(function() {
      try {
        s = 'function' == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        s = n;
      }
      try {
        f = 'function' == typeof clearTimeout ? clearTimeout : r;
      } catch (e) {
        f = r;
      }
    })();
    var p, y = [], h = !1, g = -1;
    (d.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
      y.push(new u(e, t)), 1 !== y.length || h || o(l);
    }), (u.prototype.run = function() {
      this.fun.apply(null, this.array);
    }), (d.title = 'browser'), (d.browser = !0), (d.env = {}), (d.argv = [
    ]), (d.version = ''), (d.versions = {
    }), (d.on = c), (d.addListener = c), (d.once = c), (d.off = c), (d.removeListener = c), (d.removeAllListeners = c), (d.emit = c), (d.binding = function(
      e
    ) {
      throw new Error('process.binding is not supported');
    }), (d.cwd = function() {
      return '/';
    }), (d.chdir = function(e) {
      throw new Error('process.chdir is not supported');
    }), (d.umask = function() {
      return 0;
    });
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = n(60),
      a = r(o),
      i = n(58),
      l = r(i),
      u = n(13),
      c = r(u),
      s = n(57),
      f = r(s),
      d = n(56),
      p = r(d),
      y = n(55),
      h = r(y),
      g = n(54),
      m = r(g),
      b = n(53),
      v = r(b),
      S = n(12),
      w = r(S),
      T = n(59),
      C = r(T);
    t.default = function(e) {
      switch (e) {
        case 'zocial':
          return a.default;
        case 'octicon':
          return l.default;
        case 'material':
          return c.default;
        case 'material-community':
          return f.default;
        case 'ionicon':
          return p.default;
        case 'foundation':
          return h.default;
        case 'evilicon':
          return m.default;
        case 'entypo':
          return v.default;
        case 'font-awesome':
          return w.default;
        case 'simple-line-icon':
          return C.default;
        default:
          return c.default;
      }
    };
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      return function() {
        return e;
      };
    }
    var o = function() {};
    (o.thatReturns = r), (o.thatReturnsFalse = r(!1)), (o.thatReturnsTrue = r(
      !0
    )), (o.thatReturnsNull = r(null)), (o.thatReturnsThis = function() {
      return this;
    }), (o.thatReturnsArgument = function(e) {
      return e;
    }), (e.exports = o);
  },
  function(e, t, n) {
    'use strict';
    (function(t) {
      function n(e, t, n, o, a, i, l, u) {
        if ((r(t), !e)) {
          var c;
          if (void 0 === t)
            c = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var s = [n, o, a, i, l, u], f = 0;
            (c = new Error(
              t.replace(/%s/g, function() {
                return s[f++];
              })
            )), (c.name = 'Invariant Violation');
          }
          throw ((c.framesToPop = 1), c);
        }
      }
      var r = function(e) {};
      'production' !== t.env.NODE_ENV &&
        (r = function(e) {
          if (void 0 === e)
            throw new Error('invariant requires an error message argument');
        }), (e.exports = n);
    }.call(t, n(8)));
  },
  function(e, t) {
    e.exports = react - native - vector - icons / FontAwesome;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / MaterialIcons;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(3),
      d = r(f),
      p = function(e) {
        var t = e.containerStyle,
          n = e.textStyle,
          r = e.wrapperStyle,
          i = e.onPress,
          l = e.component,
          u = e.value,
          f = e.children,
          d = e.element,
          p = o(e, [
            'containerStyle',
            'textStyle',
            'wrapperStyle',
            'onPress',
            'component',
            'value',
            'children',
            'element',
          ]);
        if (d) return d;
        var h = s.View,
          g = c.default.createElement(s.Text, { style: [y.text, n && n] }, u);
        return f && (g = f), f &&
          u &&
          console.error(
            'Badge can only contain either child element or value'
          ), !l && i && (h = s.TouchableOpacity), c.default.isValidElement(l) &&
          (h = l), c.default.createElement(
          s.View,
          { style: [y.container && r && r] },
          c.default.createElement(
            h,
            a({ style: [y.badge, t && t], onPress: i }, p),
            g
          )
        );
      };
    p.propTypes = {
      containerStyle: s.View.propTypes.style,
      wrapperStyle: s.View.propTypes.style,
      textStyle: s.Text.propTypes.style,
      children: l.default.element,
      value: l.default.oneOfType([l.default.string, l.default.number]),
      onPress: l.default.func,
      component: l.default.func,
      element: l.default.element,
    };
    var y = s.StyleSheet.create({
      container: { flexDirection: 'row' },
      badge: {
        padding: 12,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: d.default.grey1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: { fontSize: 14, color: 'white' },
    });
    t.default = p;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(3),
      d = r(f),
      p = n(4),
      y = r(p),
      h = n(13),
      g = r(h),
      m = n(9),
      b = r(m),
      v = n(5),
      S = r(v),
      w = function() {
        console.log('please attach method to this component');
      },
      T = function(e) {
        var t = e.disabled,
          n = e.loading,
          r = e.loadingRight,
          i = e.activityIndicatorStyle,
          l = e.buttonStyle,
          u = e.borderRadius,
          f = e.title,
          p = e.onPress,
          h = e.icon,
          m = e.iconComponent,
          v = e.secondary,
          S = e.secondary2,
          T = e.secondary3,
          O = e.primary1,
          x = e.primary2,
          P = e.backgroundColor,
          E = e.color,
          _ = e.fontSize,
          k = e.underlayColor,
          R = e.raised,
          I = e.textStyle,
          j = e.large,
          V = e.iconRight,
          M = e.fontWeight,
          z = e.disabledStyle,
          F = e.fontFamily,
          A = e.containerViewStyle,
          L = o(e, [
            'disabled',
            'loading',
            'loadingRight',
            'activityIndicatorStyle',
            'buttonStyle',
            'borderRadius',
            'title',
            'onPress',
            'icon',
            'iconComponent',
            'secondary',
            'secondary2',
            'secondary3',
            'primary1',
            'primary2',
            'backgroundColor',
            'color',
            'fontSize',
            'underlayColor',
            'raised',
            'textStyle',
            'large',
            'iconRight',
            'fontWeight',
            'disabledStyle',
            'fontFamily',
            'containerViewStyle',
          ]),
          B = e.Component,
          W = void 0;
        if (h) {
          var D = void 0;
          (D =
            m ||
            (h.type
              ? (0, b.default)(h.type)
              : g.default)), (W = c.default.createElement(
            D,
            a({}, h, {
              color: h.color || 'white',
              size: h.size || (j ? 26 : 18),
              style: [V ? C.iconRight : C.icon, h.style && h.style],
            })
          ));
        }
        var N = void 0;
        return n &&
          (N = c.default.createElement(s.ActivityIndicator, {
            animating: !0,
            style: [C.activityIndicatorStyle, i],
            color: E || 'white',
            size: (j && 'large') || 'small',
          })), B || 'ios' !== s.Platform.OS || (B = s.TouchableHighlight), B ||
          'android' !== s.Platform.OS ||
          (B = s.TouchableNativeFeedback), B || (B = s.TouchableHighlight), u &&
          !L.background &&
          (L.background = s.TouchableNativeFeedback.Ripple(
            'ThemeAttrAndroid',
            !0
          )), c.default.createElement(
          s.View,
          { style: [C.container, R && C.raised, A] },
          c.default.createElement(
            B,
            a(
              {
                underlayColor: k || 'transparent',
                onPress: p || w,
                disabled: t || !1,
              },
              L
            ),
            c.default.createElement(
              s.View,
              {
                style: [
                  C.button,
                  v && { backgroundColor: d.default.secondary },
                  S && { backgroundColor: d.default.secondary2 },
                  T && { backgroundColor: d.default.secondary3 },
                  O && { backgroundColor: d.default.primary1 },
                  x && { backgroundColor: d.default.primary2 },
                  P && { backgroundColor: P },
                  u && { borderRadius: u },
                  !j && C.small,
                  l && l,
                  t && { backgroundColor: d.default.disabled },
                  t && z && z,
                ],
              },
              h && !V && W,
              n && !r && N,
              c.default.createElement(
                y.default,
                {
                  style: [
                    C.text,
                    E && { color: E },
                    !j && C.smallFont,
                    _ && { fontSize: _ },
                    I && I,
                    M && { fontWeight: M },
                    F && { fontFamily: F },
                  ],
                },
                f
              ),
              n && r && N,
              h && V && W
            )
          )
        );
      };
    T.propTypes = {
      buttonStyle: s.View.propTypes.style,
      title: l.default.string,
      onPress: l.default.any,
      icon: l.default.object,
      iconComponent: l.default.any,
      secondary: l.default.bool,
      secondary2: l.default.bool,
      secondary3: l.default.bool,
      primary1: l.default.bool,
      primary2: l.default.bool,
      backgroundColor: l.default.string,
      color: l.default.string,
      fontSize: l.default.any,
      underlayColor: l.default.string,
      raised: l.default.bool,
      textStyle: s.Text.propTypes.style,
      disabled: l.default.bool,
      loading: l.default.bool,
      activityIndicatorStyle: s.View.propTypes.style,
      loadingRight: l.default.bool,
      Component: l.default.any,
      borderRadius: l.default.number,
      large: l.default.bool,
      iconRight: l.default.bool,
      fontWeight: l.default.string,
      disabledStyle: s.View.propTypes.style,
      fontFamily: l.default.string,
    };
    var C = s.StyleSheet.create({
      container: { marginLeft: 15, marginRight: 15 },
      button: {
        padding: 19,
        backgroundColor: d.default.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      text: { color: 'white', fontSize: (0, S.default)(16) },
      icon: { marginRight: 10 },
      iconRight: { marginLeft: 10 },
      small: { padding: 12 },
      smallFont: { fontSize: (0, S.default)(14) },
      activityIndicatorStyle: { marginHorizontal: 10, height: 0 },
      raised: a(
        {},
        s.Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
          },
          android: { elevation: 2 },
        })
      ),
    });
    t.default = T;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = n(1),
      a = r(o),
      i = n(0),
      l = n(3),
      u = r(l),
      c = {},
      s = function(e) {
        var t = e.style;
        return a.default.createElement(i.View, {
          style: [c.container, t && t],
        });
      };
    (s.propTypes = {
      style: i.View.propTypes.style,
    }), (c = i.StyleSheet.create({
      container: { height: 1, backgroundColor: u.default.grey5 },
    })), (t.default = s);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      a = n(2),
      i = r(a),
      l = n(1),
      u = r(l),
      c = n(0),
      s = function(e) {
        var t = e.containerStyle,
          n = e.size,
          r = e.onPress,
          a = e.activeOpacity,
          i = c.StyleSheet.create({
            container: {
              flex: n || (t && t.height ? 0 : 1),
              flexDirection: 'row',
            },
          });
        return r
          ? u.default.createElement(
              c.TouchableOpacity,
              { style: [i.container, t && t], activeOpacity: a, onPress: r },
              u.default.createElement(c.View, e, e.children)
            )
          : u.default.createElement(
              c.View,
              o({ style: [i.container, t && t] }, e),
              e.children
            );
      };
    (s.propTypes = {
      size: i.default.number,
      containerStyle: i.default.any,
      onPress: i.default.func,
      activeOpacity: i.default.number,
      children: i.default.any,
    }), (s.defaultProps = { activeOpacity: 1 }), (t.default = s);
  },
  function(e, t, n) {
    'use strict';
    (function(t) {
      var r = n(10), o = r;
      'production' !== t.env.NODE_ENV &&
        (function() {
          var e = function(e) {
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o = 0,
              a =
                'Warning: ' +
                e.replace(/%s/g, function() {
                  return n[o++];
                });
            'undefined' != typeof console && console.error(a);
            try {
              throw new Error(a);
            } catch (e) {}
          };
          o = function(t, n) {
            if (void 0 === n)
              throw new Error(
                '`warning(condition, format, ...args)` requires a warning message argument'
              );
            if (0 !== n.indexOf('Failed Composite propType: ') && !t) {
              for (
                var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), a = 2;
                a < r;
                a++
              )
                o[a - 2] = arguments[a];
              e.apply(void 0, [n].concat(o));
            }
          };
        })(), (e.exports = o);
    }.call(t, n(8)));
  },
  function(e, t, n) {
    e.exports = n.p + 'c7e8afe81209d879d50730c83e87056e.png';
  },
  function(e, t, n) {
    'use strict';
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  function(e, t) {
    e.exports = react - native - tab - navigator;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(7),
      d = r(f),
      p = n(4),
      y = r(p),
      h = function(e) {
        var t = e.component,
          n = e.onPress,
          r = e.onLongPress,
          i = e.containerStyle,
          l = e.icon,
          u = e.iconStyle,
          f = e.source,
          p = e.small,
          h = e.medium,
          g = e.large,
          m = e.xlarge,
          b = e.avatarStyle,
          v = e.rounded,
          S = e.title,
          w = e.titleStyle,
          T = e.overlayContainerStyle,
          C = e.activeOpacity,
          O = o(e, [
            'component',
            'onPress',
            'onLongPress',
            'containerStyle',
            'icon',
            'iconStyle',
            'source',
            'small',
            'medium',
            'large',
            'xlarge',
            'avatarStyle',
            'rounded',
            'title',
            'titleStyle',
            'overlayContainerStyle',
            'activeOpacity',
          ]),
          x = e.width,
          P = e.height;
        p
          ? ((x = 34), (P = 34))
          : h
              ? ((x = 50), (P = 50))
              : g
                  ? ((x = 75), (P = 75))
                  : m
                      ? ((x = 150), (P = 150))
                      : x || P
                          ? x ? P || (P = x) : (x = P)
                          : ((x = 34), (P = 34));
        var E = x / 2, _ = x / 2, k = n || r ? s.TouchableOpacity : s.View;
        t && (k = t);
        var R = s.StyleSheet.create({
          container: {
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            backgroundColor: 'transparent',
          },
          avatar: { width: x, height: P },
          overlayContainer: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
            alignSelf: 'stretch',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: x,
            height: P,
          },
          title: {
            color: '#ffffff',
            fontSize: E,
            backgroundColor: 'rgba(0,0,0,0)',
            textAlign: 'center',
          },
        });
        return c.default.createElement(
          k,
          a(
            {
              onPress: n,
              onLongPress: r,
              activeOpacity: C,
              style: [R.container, i && i],
            },
            O
          ),
          c.default.createElement(
            s.View,
            {
              style: [R.overlayContainer, v && { borderRadius: x / 2 }, T && T],
            },
            (function() {
              return f
                ? c.default.createElement(s.Image, {
                    style: [R.avatar, v && { borderRadius: x / 2 }, b && b],
                    source: f,
                  })
                : S
                    ? c.default.createElement(
                        y.default,
                        { style: [R.title, w && w] },
                        S
                      )
                    : l
                        ? c.default.createElement(d.default, {
                            style: u && u,
                            color: l.color || 'white',
                            name: l.name || 'user',
                            size: l.size || _,
                            type: l.type && l.type,
                          })
                        : void 0;
            })()
          )
        );
      };
    (h.propTypes = {
      component: l.default.func,
      width: l.default.number,
      height: l.default.number,
      onPress: l.default.func,
      onLongPress: l.default.func,
      containerStyle: l.default.any,
      source: s.Image.propTypes.source,
      avatarStyle: l.default.any,
      rounded: l.default.bool,
      title: l.default.string,
      titleStyle: s.Text.propTypes.style,
      overlayContainerStyle: l.default.any,
      activeOpacity: l.default.number,
      icon: l.default.object,
      iconStyle: s.Text.propTypes.style,
      small: l.default.bool,
      medium: l.default.bool,
      large: l.default.bool,
      xlarge: l.default.bool,
    }), (t.default = h);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(3),
      d = r(f),
      p = n(4),
      y = r(p),
      h = n(5),
      g = r(h),
      m = function(e) {
        var t = e.component,
          n = e.buttons,
          r = e.onPress,
          i = e.selectedIndex,
          l = e.containerStyle,
          u = e.innerBorderStyle,
          f = e.lastBorderStyle,
          p = e.buttonStyle,
          h = e.textStyle,
          g = e.selectedTextStyle,
          m = e.selectedBackgroundColor,
          v = e.underlayColor,
          S = e.activeOpacity,
          w = e.onHideUnderlay,
          T = e.onShowUnderlay,
          C = e.setOpacityTo,
          O = e.containerBorderRadius,
          x = o(e, [
            'component',
            'buttons',
            'onPress',
            'selectedIndex',
            'containerStyle',
            'innerBorderStyle',
            'lastBorderStyle',
            'buttonStyle',
            'textStyle',
            'selectedTextStyle',
            'selectedBackgroundColor',
            'underlayColor',
            'activeOpacity',
            'onHideUnderlay',
            'onShowUnderlay',
            'setOpacityTo',
            'containerBorderRadius',
          ]),
          P = t || s.TouchableHighlight;
        return c.default.createElement(
          s.View,
          a({ style: [b.container, l && l] }, x),
          n.map(function(e, t) {
            return c.default.createElement(
              P,
              {
                activeOpacity: S,
                setOpacityTo: C,
                onHideUnderlay: w,
                onShowUnderlay: T,
                underlayColor: v || '#ffffff',
                onPress: r
                  ? function() {
                      return r(t);
                    }
                  : function() {},
                key: t,
                style: [
                  b.button,
                  t < n.length - 1 && {
                    borderRightWidth: (u && u.width) || 1,
                    borderRightColor: (u && u.color) || d.default.grey4,
                  },
                  t === n.length - 1 &&
                    a({}, f, {
                      borderTopRightRadius: O || 0,
                      borderBottomRightRadius: O || 0,
                    }),
                  0 === t && {
                    borderTopLeftRadius: O || 0,
                    borderBottomLeftRadius: O || 0,
                  },
                  i === t && { backgroundColor: m || 'white' },
                ],
              },
              c.default.createElement(
                s.View,
                { style: [b.textContainer, p && p] },
                e.element
                  ? c.default.createElement(e.element, null)
                  : c.default.createElement(
                      y.default,
                      {
                        style: [
                          b.buttonText,
                          h && h,
                          i === t && { color: d.default.grey1 },
                          i === t && g,
                        ],
                      },
                      e
                    )
              )
            );
          })
        );
      },
      b = s.StyleSheet.create({
        button: { flex: 1 },
        textContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        container: {
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
          marginTop: 5,
          borderColor: '#e3e3e3',
          borderWidth: 1,
          flexDirection: 'row',
          borderRadius: 3,
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          height: 40,
        },
        buttonText: a(
          { fontSize: (0, g.default)(13), color: d.default.grey2 },
          s.Platform.select({ ios: { fontWeight: '500' } })
        ),
      });
    (m.propTypes = {
      button: l.default.object,
      component: l.default.any,
      onPress: l.default.func,
      buttons: l.default.array,
      containerStyle: s.View.propTypes.style,
      textStyle: s.Text.propTypes.style,
      selectedTextStyle: s.Text.propTypes.style,
      underlayColor: l.default.string,
      selectedIndex: l.default.number,
      activeOpacity: l.default.number,
      onHideUnderlay: l.default.func,
      onShowUnderlay: l.default.func,
      setOpacityTo: l.default.any,
      innerBorderStyle: l.default.shape({
        color: l.default.string,
        width: l.default.number,
      }),
      lastBorderStyle: l.default.oneOfType([
        s.View.propTypes.style,
        s.Text.propTypes.style,
      ]),
      buttonStyle: s.View.propTypes.style,
      selectedBackgroundColor: l.default.string,
      containerBorderRadius: l.default.number,
    }), (t.default = m);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(4),
      d = r(f),
      p = n(6),
      y = r(p),
      h = n(3),
      g = r(h),
      m = n(12),
      b = r(m),
      v = n(9),
      S = r(v),
      w = function(e) {
        var t = e.component,
          n = e.checked,
          r = e.iconRight,
          i = e.title,
          l = e.center,
          u = e.right,
          f = e.containerStyle,
          p = e.textStyle,
          y = e.onIconPress,
          h = e.onLongIconPress,
          g = e.checkedIcon,
          m = e.uncheckedIcon,
          v = e.iconType,
          w = e.checkedColor,
          C = e.uncheckedColor,
          O = e.checkedTitle,
          x = e.fontFamily,
          P = o(e, [
            'component',
            'checked',
            'iconRight',
            'title',
            'center',
            'right',
            'containerStyle',
            'textStyle',
            'onIconPress',
            'onLongIconPress',
            'checkedIcon',
            'uncheckedIcon',
            'iconType',
            'checkedColor',
            'uncheckedColor',
            'checkedTitle',
            'fontFamily',
          ]),
          E = b.default;
        v && (E = (0, S.default)(v));
        var _ = t || s.TouchableOpacity, k = m;
        return n && (k = g), c.default.createElement(
          _,
          a({ style: [T.container, f && f] }, P),
          c.default.createElement(
            s.View,
            {
              style: [
                T.wrapper,
                u && { justifyContent: 'flex-end' },
                l && { justifyContent: 'center' },
              ],
            },
            !r &&
              c.default.createElement(E, {
                color: n ? w : C,
                name: k,
                size: 24,
                onLongPress: h,
                onPress: y,
              }),
            c.default.createElement(
              d.default,
              { style: [T.text, p && p, x && { fontFamily: x }] },
              n ? O || i : i
            ),
            r &&
              c.default.createElement(E, {
                color: n ? w : C,
                name: k,
                size: 24,
              })
          )
        );
      };
    (w.defaultProps = {
      checked: !1,
      iconRight: !1,
      right: !1,
      center: !1,
      checkedColor: 'green',
      uncheckedColor: '#bfbfbf',
      checkedIcon: 'check-square-o',
      uncheckedIcon: 'square-o',
    }), (w.propTypes = {
      component: l.default.any,
      checked: l.default.bool,
      iconRight: l.default.bool,
      title: l.default.string,
      center: l.default.bool,
      right: l.default.bool,
      containerStyle: s.View.propTypes.style,
      textStyle: s.Text.propTypes.style,
      checkedIcon: l.default.string,
      uncheckedIcon: l.default.string,
      iconType: l.default.string,
      checkedColor: l.default.string,
      uncheckedColor: l.default.string,
      checkedTitle: l.default.string,
      onIconPress: l.default.func,
      onLongIconPress: l.default.func,
      fontFamily: l.default.string,
    });
    var T = s.StyleSheet.create({
      wrapper: { flexDirection: 'row', alignItems: 'center' },
      container: {
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fafafa',
        borderColor: '#ededed',
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
      },
      text: a(
        { marginLeft: 10, marginRight: 10, color: g.default.grey1 },
        s.Platform.select({
          ios: { fontWeight: 'bold' },
          android: a({}, y.default.android.bold),
        })
      ),
    });
    t.default = w;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(6),
      d = r(f),
      p = n(3),
      y = r(p),
      h = n(4),
      g = r(h),
      m = n(16),
      b = r(m),
      v = n(5),
      S = r(v),
      w = function(e) {
        var t = e.children,
          n = e.flexDirection,
          r = e.containerStyle,
          i = e.wrapperStyle,
          l = e.imageWrapperStyle,
          u = e.title,
          f = e.titleStyle,
          d = e.featuredTitle,
          p = e.featuredTitleStyle,
          y = e.featuredSubtitle,
          h = e.featuredSubtitleStyle,
          m = e.dividerStyle,
          v = e.image,
          S = e.imageStyle,
          w = e.fontFamily,
          C = o(e, [
            'children',
            'flexDirection',
            'containerStyle',
            'wrapperStyle',
            'imageWrapperStyle',
            'title',
            'titleStyle',
            'featuredTitle',
            'featuredTitleStyle',
            'featuredSubtitle',
            'featuredSubtitleStyle',
            'dividerStyle',
            'image',
            'imageStyle',
            'fontFamily',
          ]);
        return c.default.createElement(
          s.View,
          a({ style: [T.container, v && { padding: 0 }, r && r] }, C),
          c.default.createElement(
            s.View,
            { style: [T.wrapper, i && i, n && { flexDirection: n }] },
            u &&
              c.default.createElement(
                s.View,
                null,
                c.default.createElement(
                  g.default,
                  {
                    style: [
                      T.cardTitle,
                      v && T.imageCardTitle,
                      f && f,
                      w && { fontFamily: w },
                    ],
                  },
                  u
                ),
                !v &&
                  c.default.createElement(b.default, {
                    style: [T.divider, m && m],
                  })
              ),
            v &&
              c.default.createElement(
                s.View,
                { style: l && l },
                c.default.createElement(
                  s.Image,
                  {
                    resizeMode: 'cover',
                    style: [{ width: null, height: 150 }, S && S],
                    source: v,
                  },
                  c.default.createElement(
                    s.View,
                    { style: T.overlayContainer },
                    d &&
                      c.default.createElement(
                        g.default,
                        { style: [T.featuredTitle, p && p] },
                        d
                      ),
                    y &&
                      c.default.createElement(
                        g.default,
                        { style: [T.featuredSubtitle, h && h] },
                        y
                      )
                  )
                ),
                c.default.createElement(
                  s.View,
                  { style: [{ padding: 10 }, i && i] },
                  t
                )
              ),
            !v && t
          )
        );
      };
    w.propTypes = {
      children: l.default.any,
      flexDirection: l.default.string,
      containerStyle: s.View.propTypes.style,
      wrapperStyle: s.View.propTypes.style,
      title: l.default.string,
      titleStyle: s.Text.propTypes.style,
      featuredTitle: l.default.string,
      featuredTitleStyle: g.default.propTypes.style,
      featuredSubtitle: l.default.string,
      featuredSubtitleStyle: g.default.propTypes.style,
      dividerStyle: s.View.propTypes.style,
      image: s.Image.propTypes.source,
      imageStyle: s.View.propTypes.style,
      imageWrapperStyle: s.View.propTypes.style,
      fontFamily: l.default.string,
    };
    var T = s.StyleSheet.create({
      container: a(
        {
          backgroundColor: 'white',
          borderColor: y.default.grey5,
          borderWidth: 1,
          padding: 15,
          margin: 15,
          marginBottom: 0,
        },
        s.Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .2)',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 1,
            shadowRadius: 1,
          },
          android: { elevation: 1 },
        })
      ),
      featuredTitle: a(
        { fontSize: (0, S.default)(18), marginBottom: 8, color: 'white' },
        s.Platform.select({
          ios: { fontWeight: '800' },
          android: a({}, d.default.android.black),
        })
      ),
      featuredSubtitle: a(
        { fontSize: (0, S.default)(13), marginBottom: 8, color: 'white' },
        s.Platform.select({
          ios: { fontWeight: '400' },
          android: a({}, d.default.android.black),
        })
      ),
      wrapper: { backgroundColor: 'transparent' },
      divider: { marginBottom: 15 },
      cardTitle: a(
        { fontSize: (0, S.default)(14) },
        s.Platform.select({
          ios: { fontWeight: 'bold' },
          android: a({}, d.default.android.black),
        }),
        { textAlign: 'center', marginBottom: 15, color: y.default.grey1 }
      ),
      imageCardTitle: { marginTop: 15 },
      overlayContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignSelf: 'stretch',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    });
    t.default = w;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function l(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      c = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable =
              r.enumerable || !1), (r.configurable = !0), 'value' in r &&
              (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      s = n(2),
      f = r(s),
      d = n(1),
      p = r(d),
      y = n(0),
      h = n(3),
      g = r(h),
      m = n(5),
      b = r(m),
      v = y.Dimensions.get('window'),
      S = v.width,
      w = (function(e) {
        function t() {
          return a(this, t), i(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          );
        }
        return l(t, e), c(t, [
          {
            key: 'focus',
            value: function() {
              var e = this.props.textInputRef;
              this.refs[e].focus();
            },
          },
          {
            key: 'blur',
            value: function() {
              var e = this.props.textInputRef;
              this.refs[e].blur();
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.containerStyle,
                n = e.inputStyle,
                r = e.textInputRef,
                a = e.containerRef,
                i = e.selectionColor,
                l = o(e, [
                  'containerStyle',
                  'inputStyle',
                  'textInputRef',
                  'containerRef',
                  'selectionColor',
                ]);
              return p.default.createElement(
                y.View,
                { ref: a, style: [T.container, t && t] },
                p.default.createElement(
                  y.TextInput,
                  u(
                    {
                      ref: r,
                      selectionColor: i || g.default.grey3,
                      style: [T.input, n && n],
                    },
                    l
                  )
                )
              );
            },
          },
        ]), t;
      })(d.Component);
    w.propTypes = {
      containerStyle: y.View.propTypes.style,
      inputStyle: y.Text.propTypes.style,
      selectionColor: f.default.string,
      textInputRef: f.default.string,
      containerRef: f.default.string,
    };
    var T = y.StyleSheet.create({
      container: u(
        { marginLeft: 15, marginRight: 15 },
        y.Platform.select({
          ios: {
            borderBottomColor: g.default.grey4,
            borderBottomWidth: 1,
            marginLeft: 20,
            marginRight: 20,
          },
        })
      ),
      input: u(
        {},
        y.Platform.select({ android: { height: 46 }, ios: { height: 36 } }),
        { width: S, color: g.default.grey3, fontSize: (0, b.default)(14) }
      ),
    });
    t.default = w;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(3),
      d = r(f),
      p = n(6),
      y = r(p),
      h = n(4),
      g = r(h),
      m = n(5),
      b = r(m),
      v = function(e) {
        var t = e.containerStyle,
          n = e.labelStyle,
          r = e.children,
          i = e.fontFamily,
          l = o(e, ['containerStyle', 'labelStyle', 'children', 'fontFamily']);
        return c.default.createElement(
          s.View,
          a({ style: [S.container, t && t] }, l),
          c.default.createElement(
            g.default,
            { style: [S.label, n && n, i && { fontFamily: i }] },
            r
          )
        );
      };
    v.propTypes = {
      containerStyle: s.View.propTypes.style,
      labelStyle: s.Text.propTypes.style,
      children: l.default.any,
      fontFamily: l.default.string,
    };
    var S = s.StyleSheet.create({
      container: {},
      label: a(
        {
          marginLeft: 20,
          marginRight: 20,
          marginTop: 15,
          marginBottom: 1,
          color: d.default.grey3,
          fontSize: (0, b.default)(12),
        },
        s.Platform.select({
          ios: { fontWeight: 'bold' },
          android: a({}, y.default.android.bold),
        })
      ),
    });
    t.default = v;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(3),
      d = r(f),
      p = n(4),
      y = r(p),
      h = n(5),
      g = r(h),
      m = function(e) {
        var t = e.containerStyle,
          n = e.labelStyle,
          r = e.children,
          i = e.fontFamily,
          l = o(e, ['containerStyle', 'labelStyle', 'children', 'fontFamily']);
        return c.default.createElement(
          s.View,
          a({ style: [b.container, t && t] }, l),
          c.default.createElement(
            y.default,
            { style: [b.label, n && n, i && { fontFamily: i }] },
            r
          )
        );
      };
    m.propTypes = {
      containerStyle: s.View.propTypes.style,
      labelStyle: s.Text.propTypes.style,
      children: l.default.any,
      fontFamily: l.default.string,
    };
    var b = s.StyleSheet.create({
      container: {},
      label: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 1,
        color: d.default.error,
        fontSize: (0, g.default)(12),
      },
    });
    t.default = m;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      a = n(2),
      i = r(a),
      l = n(1),
      u = r(l),
      c = n(0),
      s = function(e) {
        var t = e.containerStyle,
          n = e.size,
          r = e.onPress,
          a = e.activeOpacity,
          i = c.StyleSheet.create({
            container: {
              flex: n || (t && t.width ? 0 : 1),
              flexDirection: 'column',
            },
          });
        return r
          ? u.default.createElement(
              c.TouchableOpacity,
              { style: [i.container, t && t], activeOpacity: a, onPress: r },
              u.default.createElement(c.View, e, e.children)
            )
          : u.default.createElement(
              c.View,
              o({ style: [i.container, t && t] }, e),
              e.children
            );
      };
    (s.propTypes = {
      size: i.default.number,
      containerStyle: i.default.any,
      onPress: i.default.func,
      activeOpacity: i.default.number,
      children: i.default.any,
    }), (s.defaultProps = { activeOpacity: 1 }), (t.default = s);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      u = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable =
              r.enumerable || !1), (r.configurable = !0), 'value' in r &&
              (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      c = n(2),
      s = r(c),
      f = n(1),
      d = r(f),
      p = n(0),
      y = n(17),
      h = r(y),
      g = (function(e) {
        function t() {
          var e, n, r, i;
          o(this, t);
          for (var l = arguments.length, u = Array(l), c = 0; c < l; c++)
            u[c] = arguments[c];
          return (n = r = a(
            this,
            (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              e,
              [this].concat(u)
            )
          )), (r.styles = p.StyleSheet.create({
            container: { flex: 1, flexDirection: r.isRow() ? 'column' : 'row' },
          })), (i = n), a(r, i);
        }
        return i(t, e), u(t, [
          {
            key: 'isRow',
            value: function() {
              var e = !1;
              return d.default.Children.forEach(this.props.children, function(
                t
              ) {
                t && t.type === h.default && (e = !0);
              }), e;
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.onPress,
                n = e.activeOpacity,
                r = e.containerStyle;
              return t
                ? d.default.createElement(
                    p.TouchableOpacity,
                    { activeOpacity: n, onPress: t },
                    d.default.createElement(
                      p.View,
                      l({ style: [this.styles.container, r && r] }, this.props),
                      this.props.children
                    )
                  )
                : d.default.createElement(
                    p.View,
                    l({ style: [this.styles.container, r && r] }, this.props),
                    this.props.children
                  );
            },
          },
        ]), t;
      })(f.Component);
    (g.propTypes = {
      containerStyle: s.default.any,
      onPress: s.default.func,
      activeOpacity: s.default.number,
      children: s.default.any,
    }), (g.defaultProps = { activeOpacity: 1 }), (t.default = g);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function l(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      c = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable =
              r.enumerable || !1), (r.configurable = !0), 'value' in r &&
              (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      s = n(2),
      f = r(s),
      d = n(1),
      p = r(d),
      y = n(0),
      h = n(13),
      g = r(h),
      m = n(3),
      b = r(m),
      v = n(5),
      S = r(v),
      w = (function(e) {
        function t() {
          return a(this, t), i(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          );
        }
        return l(t, e), c(t, [
          {
            key: 'focus',
            value: function() {
              var e = this.props.textInputRef;
              this.refs[e].focus();
            },
          },
          {
            key: 'clearText',
            value: function() {
              this.props.onChangeText && this.props.onChangeText('');
              try {
                var e = this.props.textInputRef;
                this.refs[e].clear();
              } catch (e) {
                __DEV__ &&
                  console.warn(
                    'Could not access textInput reference, make sure you supplied the textInputRef'
                  );
              }
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.containerStyle,
                n = e.inputStyle,
                r = e.icon,
                a = e.noIcon,
                i = e.lightTheme,
                l = e.round,
                c = e.showLoadingIcon,
                s = e.loadingIcon,
                f = e.clearIcon,
                d = e.containerRef,
                h = e.textInputRef,
                m = e.selectionColor,
                v = e.underlineColorAndroid,
                S = o(e, [
                  'containerStyle',
                  'inputStyle',
                  'icon',
                  'noIcon',
                  'lightTheme',
                  'round',
                  'showLoadingIcon',
                  'loadingIcon',
                  'clearIcon',
                  'containerRef',
                  'textInputRef',
                  'selectionColor',
                  'underlineColorAndroid',
                ]);
              return p.default.createElement(
                y.View,
                { ref: d, style: [T.container, i && T.containerLight, t && t] },
                p.default.createElement(
                  y.TextInput,
                  u(
                    {
                      ref: h,
                      selectionColor: m || b.default.grey3,
                      underlineColorAndroid: v || 'transparent',
                      style: [
                        T.input,
                        i && T.inputLight,
                        a && { paddingLeft: 9 },
                        l && {
                          borderRadius: 'ios' === y.Platform.OS ? 15 : 20,
                        },
                        n && n,
                      ],
                    },
                    S
                  )
                ),
                !a &&
                  p.default.createElement(g.default, {
                    size: 16,
                    style: [T.icon, r.style && r.style],
                    name: r.name || 'search',
                    color: r.color || b.default.grey3,
                  }),
                f &&
                  p.default.createElement(g.default, {
                    size: 16,
                    style: [T.clearIcon, f.style && f.style],
                    name: f.name || 'close',
                    onPress: this.clearText.bind(this),
                    color: f.color || b.default.grey3,
                  }),
                c &&
                  p.default.createElement(y.ActivityIndicator, {
                    style: [T.loadingIcon, s.style && s.style],
                    color: r.color || b.default.grey3,
                  })
              );
            },
          },
        ]), t;
      })(d.Component);
    (w.propTypes = {
      icon: f.default.object,
      noIcon: f.default.bool,
      lightTheme: f.default.bool,
      containerStyle: y.View.propTypes.style,
      inputStyle: y.Text.propTypes.style,
      round: f.default.bool,
      showLoadingIcon: f.default.bool,
      loadingIcon: f.default.object,
      clearIcon: f.default.oneOfType([f.default.object, f.default.bool]),
      textInputRef: f.default.string,
      containerRef: f.default.string,
      selectionColor: f.default.string,
      underlineColorAndroid: f.default.string,
      onChangeText: f.default.func,
    }), (w.defaultProps = {
      placeholderTextColor: b.default.grey3,
      lightTheme: !1,
      noIcon: !1,
      round: !1,
      icon: {},
      showLoadingIcon: !1,
      loadingIcon: {},
    });
    var T = y.StyleSheet.create({
      container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderTopColor: '#000',
        backgroundColor: b.default.grey0,
      },
      containerLight: {
        backgroundColor: b.default.grey5,
        borderTopColor: '#e1e1e1',
        borderBottomColor: '#e1e1e1',
      },
      icon: u(
        {
          backgroundColor: 'transparent',
          position: 'absolute',
          left: 16,
          top: 15.5,
        },
        y.Platform.select({ android: { top: 20 } })
      ),
      loadingIcon: u(
        {
          backgroundColor: 'transparent',
          position: 'absolute',
          right: 16,
          top: 13,
        },
        y.Platform.select({ android: { top: 17 } })
      ),
      input: u(
        {
          paddingLeft: 26,
          paddingRight: 19,
          margin: 8,
          borderRadius: 3,
          overflow: 'hidden',
          backgroundColor: b.default.searchBg,
          fontSize: (0, S.default)(14),
          color: b.default.grey3,
          height: 40,
        },
        y.Platform.select({ ios: { height: 30 }, android: { borderWidth: 0 } })
      ),
      inputLight: { backgroundColor: b.default.grey4 },
      clearIcon: u(
        {
          backgroundColor: 'transparent',
          position: 'absolute',
          right: 16,
          top: 15.5,
        },
        y.Platform.select({ android: { top: 17 } })
      ),
    });
    t.default = w;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(3),
      d = r(f),
      p = function(e) {
        var t = e.children,
          n = e.containerStyle,
          r = o(e, ['children', 'containerStyle']);
        return c.default.createElement(
          s.View,
          a({ style: [y.listContainer, n && n] }, r),
          t
        );
      };
    p.propTypes = {
      children: l.default.any,
      containerStyle: s.View.propTypes.style,
    };
    var y = s.StyleSheet.create({
      listContainer: {
        marginTop: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: d.default.greyOutline,
        backgroundColor: d.default.white,
      },
    });
    t.default = p;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(14),
      d = r(f),
      p = n(7),
      y = r(p),
      h = n(4),
      g = r(h),
      m = n(3),
      b = r(m),
      v = n(6),
      S = r(v),
      w = n(5),
      T = r(w),
      C = function(e) {
        var t = e.onPress,
          n = e.title,
          r = e.leftIcon,
          i = e.rightIcon,
          l = e.leftIconContainerStyle,
          u = e.avatarStyle,
          f = e.underlayColor,
          p = e.subtitle,
          h = e.subtitleStyle,
          m = e.containerStyle,
          v = e.wrapperStyle,
          S = e.titleStyle,
          w = e.titleContainerStyle,
          T = e.hideChevron,
          C = e.chevronColor,
          x = e.roundAvatar,
          P = e.component,
          E = e.fontFamily,
          _ = e.rightTitle,
          k = e.rightTitleContainerStyle,
          R = e.rightTitleStyle,
          I = e.subtitleContainerStyle,
          j = e.badge,
          V = e.label,
          M = e.onLongPress,
          z = e.switchButton,
          F = e.onSwitch,
          A = e.switchDisabled,
          L = e.switchOnTintColor,
          B = e.switchThumbTintColor,
          W = e.switchTintColor,
          D = e.switched,
          N = e.textInput,
          H = e.textInputAutoCapitalize,
          q = e.textInputAutoCorrect,
          U = e.textInputAutoFocus,
          Y = e.textInputEditable,
          K = e.textInputKeyboardType,
          G = e.textInputMaxLength,
          $ = e.textInputMultiline,
          X = e.textInputOnChangeText,
          J = e.textInputOnFocus,
          Z = e.textInputOnBlur,
          Q = e.textInputSelectTextOnFocus,
          ee = e.textInputReturnKeyType,
          te = e.textInputValue,
          ne = e.textInputSecure,
          re = e.textInputStyle,
          oe = e.textInputContainerStyle,
          ae = o(e, [
            'onPress',
            'title',
            'leftIcon',
            'rightIcon',
            'leftIconContainerStyle',
            'avatarStyle',
            'underlayColor',
            'subtitle',
            'subtitleStyle',
            'containerStyle',
            'wrapperStyle',
            'titleStyle',
            'titleContainerStyle',
            'hideChevron',
            'chevronColor',
            'roundAvatar',
            'component',
            'fontFamily',
            'rightTitle',
            'rightTitleContainerStyle',
            'rightTitleStyle',
            'subtitleContainerStyle',
            'badge',
            'label',
            'onLongPress',
            'switchButton',
            'onSwitch',
            'switchDisabled',
            'switchOnTintColor',
            'switchThumbTintColor',
            'switchTintColor',
            'switched',
            'textInput',
            'textInputAutoCapitalize',
            'textInputAutoCorrect',
            'textInputAutoFocus',
            'textInputEditable',
            'textInputKeyboardType',
            'textInputMaxLength',
            'textInputMultiline',
            'textInputOnChangeText',
            'textInputOnFocus',
            'textInputOnBlur',
            'textInputSelectTextOnFocus',
            'textInputReturnKeyType',
            'textInputValue',
            'textInputSecure',
            'textInputStyle',
            'textInputContainerStyle',
          ]),
          ie = e.avatar,
          le = t || M ? s.TouchableHighlight : s.View;
        return P && (le = P), 'string' == typeof ie &&
          (ie = { uri: ie }), c.default.createElement(
          le,
          a(
            {
              onLongPress: M,
              onPress: t,
              underlayColor: f,
              style: [O.container, m && m],
            },
            ae
          ),
          c.default.createElement(
            s.View,
            { style: [O.wrapper, v && v] },
            c.default.isValidElement(r)
              ? r
              : r &&
                  r.name &&
                  c.default.createElement(
                    s.View,
                    { style: [O.iconStyle, l && l] },
                    c.default.createElement(y.default, {
                      type: r.type,
                      iconStyle: [O.icon, r.style && r.style],
                      name: r.name,
                      color: r.color || b.default.grey4,
                      size: r.size || 24,
                    })
                  ),
            ie &&
              c.default.createElement(s.Image, {
                style: [O.avatar, x && { borderRadius: 17 }, u && u],
                source: ie,
              }),
            c.default.createElement(
              s.View,
              { style: O.titleSubtitleContainer },
              c.default.createElement(
                s.View,
                { style: w },
                !n || ('string' != typeof n && 'number' != typeof n)
                  ? c.default.createElement(s.View, null, n)
                  : c.default.createElement(
                      g.default,
                      {
                        style: [
                          O.title,
                          !r && { marginLeft: 10 },
                          S && S,
                          E && { fontFamily: E },
                        ],
                      },
                      n
                    )
              ),
              c.default.createElement(
                s.View,
                { style: I },
                !p || ('string' != typeof p && 'number' != typeof p)
                  ? c.default.createElement(s.View, null, p)
                  : c.default.createElement(
                      g.default,
                      {
                        style: [
                          O.subtitle,
                          !r && { marginLeft: 10 },
                          h && h,
                          E && { fontFamily: E },
                        ],
                      },
                      p
                    )
              )
            ),
            _ &&
              '' !== _ &&
              !N &&
              c.default.createElement(
                s.View,
                { style: [O.rightTitleContainer, k] },
                c.default.createElement(
                  g.default,
                  { style: [O.rightTitleStyle, R] },
                  _
                )
              ),
            N &&
              c.default.createElement(
                s.View,
                { style: [O.rightTitleContainer, oe] },
                c.default.createElement(s.TextInput, {
                  style: [O.textInputStyle, re],
                  defaultValue: _,
                  value: te,
                  autoCapitalize: H,
                  autoCorrect: q,
                  autoFocus: U,
                  editable: Y,
                  keyboardType: K,
                  maxLength: G,
                  multiline: $,
                  onChangeText: X,
                  onFocus: J,
                  onBlur: Z,
                  secureTextEntry: ne,
                  selectTextOnFocus: Q,
                  returnKeyType: ee,
                })
              ),
            !T &&
              (c.default.isValidElement(i)
                ? i
                : c.default.createElement(
                    s.View,
                    { style: O.chevronContainer },
                    c.default.createElement(y.default, {
                      type: i.type,
                      iconStyle: i.style,
                      size: 28,
                      name: i.name || 'chevron-right',
                      color: i.color || C,
                    })
                  )),
            z &&
              T &&
              c.default.createElement(
                s.View,
                { style: O.switchContainer },
                c.default.createElement(s.Switch, {
                  onValueChange: F,
                  disabled: A,
                  onTintColor: L,
                  thumbTintColor: B,
                  tintColor: W,
                  value: D,
                })
              ),
            j && !_ && c.default.createElement(d.default, j),
            V && V
          )
        );
      };
    (C.defaultProps = {
      underlayColor: 'white',
      chevronColor: b.default.grey4,
      rightIcon: { name: 'chevron-right' },
      hideChevron: !1,
      roundAvatar: !1,
      switchButton: !1,
      textInputEditable: !0,
    }), (C.propTypes = {
      title: l.default.oneOfType([
        l.default.string,
        l.default.number,
        l.default.object,
      ]),
      avatar: l.default.any,
      icon: l.default.any,
      onPress: l.default.func,
      rightIcon: l.default.oneOfType([l.default.element, l.default.object]),
      underlayColor: l.default.string,
      subtitle: l.default.oneOfType([
        l.default.string,
        l.default.number,
        l.default.object,
      ]),
      subtitleStyle: l.default.any,
      containerStyle: l.default.any,
      wrapperStyle: l.default.any,
      titleStyle: l.default.any,
      titleContainerStyle: l.default.any,
      hideChevron: l.default.bool,
      chevronColor: l.default.string,
      roundAvatar: l.default.bool,
      badge: l.default.any,
      switchButton: l.default.bool,
      onSwitch: l.default.func,
      switchDisabled: l.default.bool,
      switchOnTintColor: l.default.string,
      switchThumbTintColor: l.default.string,
      switchTintColor: l.default.string,
      switched: l.default.bool,
      textInput: l.default.bool,
      textInputAutoCapitalize: l.default.bool,
      textInputAutoCorrect: l.default.bool,
      textInputAutoFocus: l.default.bool,
      textInputEditable: l.default.bool,
      textInputKeyboardType: l.default.oneOf([
        'default',
        'email-address',
        'numeric',
        'phone-pad',
        'ascii-capable',
        'numbers-and-punctuation',
        'url',
        'number-pad',
        'name-phone-pad',
        'decimal-pad',
        'twitter',
        'web-search',
      ]),
      textInputMaxLength: l.default.number,
      textInputMultiline: l.default.bool,
      textInputOnChangeText: l.default.func,
      textInputOnFocus: l.default.func,
      textInputOnBlur: l.default.func,
      textInputSelectTextOnFocus: l.default.bool,
      textInputReturnKeyType: l.default.string,
      textInputValue: l.default.string,
      textInputSecure: l.default.bool,
      textInputStyle: l.default.any,
      textInputContainerStyle: l.default.any,
      component: l.default.any,
      fontFamily: l.default.string,
      rightTitle: l.default.string,
      rightTitleContainerStyle: s.View.propTypes.style,
      rightTitleStyle: g.default.propTypes.style,
      subtitleContainerStyle: s.View.propTypes.style,
      label: l.default.any,
      onLongPress: l.default.func,
      leftIcon: l.default.oneOfType([l.default.element, l.default.object]),
      leftIconContainerStyle: s.View.propTypes.style,
      avatarStyle: s.View.propTypes.style,
    });
    var O = s.StyleSheet.create({
      avatar: { width: 34, height: 34 },
      container: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomColor: '#ededed',
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
      },
      wrapper: { flexDirection: 'row', marginLeft: 10 },
      iconStyle: { flex: 0.15, justifyContent: 'center', alignItems: 'center' },
      icon: { marginRight: 8 },
      title: { fontSize: (0, T.default)(14), color: b.default.grey1 },
      subtitle: a(
        { color: b.default.grey3, fontSize: (0, T.default)(12), marginTop: 1 },
        s.Platform.select({
          ios: { fontWeight: '600' },
          android: a({}, S.default.android.bold),
        })
      ),
      titleSubtitleContainer: { justifyContent: 'center', flex: 1 },
      chevronContainer: {
        flex: 0.15,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
      switchContainer: {
        flex: 0.15,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 5,
      },
      rightTitleContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
      rightTitleStyle: { marginRight: 5, color: b.default.grey4 },
      textInputStyle: { height: 20, textAlign: 'right' },
    });
    t.default = C;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(4),
      d = r(f),
      p = n(6),
      y = r(p),
      h = n(3),
      g = r(h),
      m = n(15),
      b = r(m),
      v = n(5),
      S = r(v),
      w = function(e) {
        var t = e.containerStyle,
          n = e.wrapperStyle,
          r = e.title,
          i = e.price,
          l = e.info,
          u = e.button,
          f = e.color,
          p = e.titleFont,
          y = e.pricingFont,
          h = e.infoFont,
          g = e.buttonFont,
          m = e.onButtonPress,
          v = o(e, [
            'containerStyle',
            'wrapperStyle',
            'title',
            'price',
            'info',
            'button',
            'color',
            'titleFont',
            'pricingFont',
            'infoFont',
            'buttonFont',
            'onButtonPress',
          ]);
        return c.default.createElement(
          s.View,
          a({ style: [T.container, t && t] }, v),
          c.default.createElement(
            s.View,
            { style: [T.wrapper, n && n] },
            c.default.createElement(
              d.default,
              { style: [T.pricingTitle, { color: f }, p && { fontFamily: p }] },
              r
            ),
            c.default.createElement(
              d.default,
              { style: [T.pricingPrice, y && { fontFamily: y }] },
              i
            ),
            l.map(function(e, t) {
              return c.default.createElement(
                d.default,
                { key: t, style: [T.pricingInfo, h && { fontFamily: h }] },
                e
              );
            }),
            c.default.createElement(b.default, {
              icon: { name: u.icon },
              buttonStyle: [T.button, u.buttonStyle, { backgroundColor: f }],
              fontFamily: g && g,
              title: u.title,
              onPress: m,
            })
          )
        );
      };
    (w.propTypes = {
      containerStyle: s.View.propTypes.style,
      wrapperStyle: s.View.propTypes.style,
      title: l.default.string,
      price: l.default.oneOfType([l.default.string, l.default.number]),
      info: l.default.array,
      button: l.default.object,
      color: l.default.string,
      onButtonPress: l.default.any,
      titleFont: l.default.string,
      pricingFont: l.default.string,
      infoFont: l.default.string,
      buttonFont: l.default.string,
    }), (w.defaultProps = { color: g.default.primary });
    var T = s.StyleSheet.create({
      container: a(
        {
          margin: 15,
          marginBottom: 15,
          backgroundColor: 'white',
          borderColor: g.default.grey5,
          borderWidth: 1,
          padding: 15,
        },
        s.Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .2)',
            shadowOffset: { height: 1, width: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 0.5,
          },
          android: { elevation: 1 },
        })
      ),
      wrapper: { backgroundColor: 'transparent' },
      pricingTitle: a(
        {
          textAlign: 'center',
          color: g.default.primary,
          fontSize: (0, S.default)(30),
        },
        s.Platform.select({
          ios: { fontWeight: '800' },
          android: a({}, y.default.android.black),
        })
      ),
      pricingPrice: a(
        {
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 10,
          fontSize: (0, S.default)(40),
        },
        s.Platform.select({
          ios: { fontWeight: '700' },
          android: a({}, y.default.android.bold),
        })
      ),
      pricingInfo: a(
        {
          textAlign: 'center',
          marginTop: 5,
          marginBottom: 5,
          color: g.default.grey3,
        },
        s.Platform.select({
          ios: { fontWeight: '600' },
          android: a({}, y.default.android.bold),
        })
      ),
      button: { marginTop: 15, marginBottom: 10 },
    });
    t.default = w;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      u = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable =
              r.enumerable || !1), (r.configurable = !0), 'value' in r &&
              (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      c = n(48),
      s = r(c),
      f = n(2),
      d = r(f),
      p = n(1),
      y = r(p),
      h = n(0),
      g = n(4),
      m = r(g),
      b = n(19),
      v = n(46),
      S = n(47),
      w = n(45),
      T = {
        star: { source: b, color: '#f1c40f', backgroundColor: 'white' },
        heart: { source: v, color: '#e74c3c', backgroundColor: 'white' },
        rocket: { source: S, color: '#2ecc71', backgroundColor: 'white' },
        bell: { source: w, color: '#f39c12', backgroundColor: 'white' },
      },
      C = (function(e) {
        function t(e) {
          o(this, t);
          var n = a(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          ),
            r = n.props.onFinishRating,
            i = new h.Animated.ValueXY();
          new h.Animated.ValueXY().setValue({ x: 0, y: 500 });
          var l = h.PanResponder.create({
            onStartShouldSetPanResponder: function() {
              return !0;
            },
            onPanResponderMove: function(e, t) {
              i.setValue({ x: t.dx, y: t.dy }), n.setState({ value: t.dx });
            },
            onPanResponderRelease: function(e) {
              r(n.getCurrentRating());
            },
          });
          return (n.state = { panResponder: l, position: i }), n;
        }
        return i(t, e), u(t, [
          {
            key: 'getPrimaryViewStyle',
            value: function() {
              var e = this.state.position,
                t = this.props,
                n = t.imageSize,
                r = t.ratingCount,
                o = t.type,
                a = T[o].color,
                i = e.x.interpolate({
                  inputRange: [n / 2 * -r, 0, r * (n / 2)],
                  outputRange: [0, r * n / 2, r * n],
                  extrapolate: 'clamp',
                });
              return { backgroundColor: a, width: i, height: i ? n : 0 };
            },
          },
          {
            key: 'getSecondaryViewStyle',
            value: function() {
              var e = this.state.position,
                t = this.props,
                n = t.imageSize,
                r = t.ratingCount,
                o = t.type,
                a = T[o].backgroundColor,
                i = e.x.interpolate({
                  inputRange: [n / 2 * -r, 0, r * (n / 2)],
                  outputRange: [r * n, r * n / 2, 0],
                  extrapolate: 'clamp',
                });
              return { backgroundColor: a, width: i, height: i ? n : 0 };
            },
          },
          {
            key: 'renderRatings',
            value: function() {
              var e = this.props,
                t = e.imageSize,
                n = e.ratingCount,
                r = e.type,
                o = T[r].source;
              return (0, s.default)(n, function(e) {
                return y.default.createElement(
                  h.View,
                  { key: e, style: O.starContainer },
                  y.default.createElement(h.Image, {
                    source: o,
                    style: { width: t, height: t },
                  })
                );
              });
            },
          },
          {
            key: 'getCurrentRating',
            value: function() {
              var e = this.state.value,
                t = this.props,
                n = t.imageSize,
                r = t.ratingCount,
                o = r / 2;
              return e > r * n / 2
                ? r
                : e > n
                    ? Math.ceil(o + e / n)
                    : e < -r * n / 2
                        ? 0
                        : e < n ? Math.ceil(o + e / n) : Math.ceil(o);
            },
          },
          {
            key: 'displayCurrentRating',
            value: function() {
              var e = this.props, t = e.ratingCount, n = e.type, r = T[n].color;
              return y.default.createElement(
                h.View,
                { style: O.ratingView },
                y.default.createElement(
                  m.default,
                  { style: O.ratingText },
                  'Rating: '
                ),
                y.default.createElement(
                  m.default,
                  { style: [O.currentRatingText, { color: r }] },
                  this.getCurrentRating()
                ),
                y.default.createElement(
                  m.default,
                  { style: O.maxRatingText },
                  '/',
                  t
                )
              );
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.type,
                n = e.ratingImage,
                r = e.ratingColor,
                o = e.ratingBackgroundColor,
                a = e.style,
                i = e.showRating;
              if ('custom' === t) {
                var u = { source: n, color: r, backgroundColor: o };
                T.custom = u;
              }
              return y.default.createElement(
                h.View,
                { style: a },
                i && this.displayCurrentRating(),
                y.default.createElement(
                  h.View,
                  l(
                    { style: O.starsWrapper },
                    this.state.panResponder.panHandlers
                  ),
                  y.default.createElement(
                    h.View,
                    { style: O.starsInsideWrapper },
                    y.default.createElement(h.Animated.View, {
                      style: this.getPrimaryViewStyle(),
                    }),
                    y.default.createElement(h.Animated.View, {
                      style: this.getSecondaryViewStyle(),
                    })
                  ),
                  this.renderRatings()
                )
              );
            },
          },
        ]), t;
      })(p.Component);
    (C.defaultProps = {
      type: 'star',
      ratingImage: n(19),
      ratingColor: '#f1c40f',
      ratingBackgroundColor: 'white',
      ratingCount: 5,
      imageSize: 60,
      onFinishRating: function() {
        return console.log('Attach a function here.');
      },
    }), (t.default = C);
    var O = h.StyleSheet.create({
      starsWrapper: { flexDirection: 'row' },
      starsInsideWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        flexDirection: 'row',
      },
      ratingView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
      },
      ratingText: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Trebuchet MS',
        color: '#34495e',
      },
      currentRatingText: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Trebuchet MS',
      },
      maxRatingText: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Trebuchet MS',
        color: '#34495e',
      },
    });
    C.propTypes = {
      type: d.default.string,
      ratingImage: h.Image.propTypes.source,
      ratingColor: d.default.string,
      ratingBackgroundColor: d.default.string,
      ratingCount: d.default.number,
      imageSize: d.default.number,
      onFinishRating: d.default.func,
      showRating: d.default.bool,
      style: h.View.propTypes.style,
    };
  },
  function(e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(52),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = o.default;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function l(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    function u(e, t, n, r) {
      (this.x = e), (this.y = t), (this.width = n), (this.height = r);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var c =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      s = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable =
              r.enumerable || !1), (r.configurable = !0), 'value' in r &&
              (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      f = n(2),
      d = r(f),
      p = n(1),
      y = r(p),
      h = n(0),
      g = {
        spring: { friction: 7, tension: 100 },
        timing: {
          duration: 150,
          easing: h.Easing.inOut(h.Easing.ease),
          delay: 0,
        },
      };
    u.prototype.containsPoint = function(e, t) {
      return (
        e >= this.x &&
        t >= this.y &&
        e <= this.x + this.width &&
        t <= this.y + this.height
      );
    };
    var m = (function(e) {
      function t(e) {
        a(this, t);
        var n = i(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
        );
        return (n.state = {
          containerSize: { width: 0, height: 0 },
          trackSize: { width: 0, height: 0 },
          thumbSize: { width: 0, height: 0 },
          allMeasured: !1,
          value: new h.Animated.Value(e.value),
        }), n;
      }
      return l(t, e), s(t, [
        {
          key: 'componentWillMount',
          value: function() {
            this.panResponder = h.PanResponder.create({
              onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder.bind(
                this
              ),
              onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder.bind(
                this
              ),
              onPanResponderGrant: this.handlePanResponderGrant.bind(this),
              onPanResponderMove: this.handlePanResponderMove.bind(this),
              onPanResponderRelease: this.handlePanResponderEnd.bind(this),
              onPanResponderTerminationRequest: this.handlePanResponderRequestEnd.bind(
                this
              ),
              onPanResponderTerminate: this.handlePanResponderEnd.bind(this),
            });
          },
        },
        {
          key: 'componentWillReceiveProps',
          value: function(e) {
            var t = e.value;
            this.props.value !== t &&
              (this.props.animateTransitions
                ? this.setCurrentValueAnimated(t)
                : this.setCurrentValue(t));
          },
        },
        {
          key: 'setCurrentValue',
          value: function(e) {
            this.state.value.setValue(e);
          },
        },
        {
          key: 'setCurrentValueAnimated',
          value: function(e) {
            var t = this.props.animationType,
              n = c({}, g[t], this.props.animationConfig, { toValue: e });
            h.Animated[t](this.state.value, n).start();
          },
        },
        {
          key: 'handleMoveShouldSetPanResponder',
          value: function() {
            return !1;
          },
        },
        {
          key: 'handlePanResponderGrant',
          value: function() {
            (this._previousLeft = this.getThumbLeft(
              this.getCurrentValue()
            )), this.fireChangeEvent('onSlidingStart');
          },
        },
        {
          key: 'handlePanResponderMove',
          value: function(e, t) {
            this.props.disabled ||
              (this.setCurrentValue(this.getValue(t)), this.fireChangeEvent(
                'onValueChange'
              ));
          },
        },
        {
          key: 'handlePanResponderRequestEnd',
          value: function() {
            return !1;
          },
        },
        {
          key: 'handlePanResponderEnd',
          value: function(e, t) {
            this.props.disabled ||
              (this.setCurrentValue(this.getValue(t)), this.fireChangeEvent(
                'onSlidingComplete'
              ));
          },
        },
        {
          key: 'thumbHitTest',
          value: function(e) {
            var t = e.nativeEvent;
            return this.getThumbTouchRect().containsPoint(
              t.locationX,
              t.locationY
            );
          },
        },
        {
          key: 'handleStartShouldSetPanResponder',
          value: function(e) {
            return this.thumbHitTest(e);
          },
        },
        {
          key: 'fireChangeEvent',
          value: function(e) {
            this.props[e] && this.props[e](this.getCurrentValue());
          },
        },
        {
          key: 'getTouchOverflowSize',
          value: function() {
            var e = this.state, t = this.props, n = {};
            return !0 === e.allMeasured &&
              ((n.width = Math.max(
                0,
                t.thumbTouchSize.width - e.thumbSize.width
              )), (n.height = Math.max(
                0,
                t.thumbTouchSize.height - e.containerSize.height
              ))), n;
          },
        },
        {
          key: 'getTouchOverflowStyle',
          value: function() {
            var e = this.getTouchOverflowSize(),
              t = e.width,
              n = e.height,
              r = {};
            if (void 0 !== t && void 0 !== n) {
              var o = -n / 2;
              (r.marginTop = o), (r.marginBottom = o);
              var a = -t / 2;
              (r.marginLeft = a), (r.marginRight = a);
            }
            return !0 === this.props.debugTouchArea &&
              ((r.backgroundColor = 'orange'), (r.opacity = 0.5)), r;
          },
        },
        {
          key: 'handleMeasure',
          value: function(e, t) {
            var n = t.nativeEvent.layout,
              r = n.width,
              o = n.height,
              a = { width: r, height: o },
              i = '_' + e,
              l = this[i];
            (l && r === l.width && o === l.height) ||
              ((this[i] = a), this._containerSize &&
                this._trackSize &&
                this._thumbSize &&
                this.setState({
                  containerSize: this._containerSize,
                  trackSize: this._trackSize,
                  thumbSize: this._thumbSize,
                  allMeasured: !0,
                }));
          },
        },
        {
          key: 'measureContainer',
          value: function(e) {
            this.handleMeasure('containerSize', e);
          },
        },
        {
          key: 'measureTrack',
          value: function(e) {
            this.handleMeasure('trackSize', e);
          },
        },
        {
          key: 'measureThumb',
          value: function(e) {
            this.handleMeasure('thumbSize', e);
          },
        },
        {
          key: 'getValue',
          value: function(e) {
            var t = this.state.containerSize.width - this.state.thumbSize.width,
              n = this._previousLeft + e.dx,
              r = n / t;
            return this.props.step
              ? Math.max(
                  this.props.minimumValue,
                  Math.min(
                    this.props.maximumValue,
                    this.props.minimumValue +
                      Math.round(
                        r *
                          (this.props.maximumValue - this.props.minimumValue) /
                          this.props.step
                      ) *
                        this.props.step
                  )
                )
              : Math.max(
                  this.props.minimumValue,
                  Math.min(
                    this.props.maximumValue,
                    r * (this.props.maximumValue - this.props.minimumValue) +
                      this.props.minimumValue
                  )
                );
          },
        },
        {
          key: 'getCurrentValue',
          value: function() {
            return this.state.value.__getValue();
          },
        },
        {
          key: 'getRatio',
          value: function(e) {
            return (
              (e - this.props.minimumValue) /
              (this.props.maximumValue - this.props.minimumValue)
            );
          },
        },
        {
          key: 'getThumbLeft',
          value: function(e) {
            return (
              this.getRatio(e) *
              (this.state.containerSize.width - this.state.thumbSize.width)
            );
          },
        },
        {
          key: 'getThumbTouchRect',
          value: function() {
            var e = this.state, t = this.props, n = this.getTouchOverflowSize();
            return new u(
              n.width / 2 +
                this.getThumbLeft(this.getCurrentValue()) +
                (e.thumbSize.width - t.thumbTouchSize.width) / 2,
              n.height / 2 +
                (e.containerSize.height - t.thumbTouchSize.height) / 2,
              t.thumbTouchSize.width,
              t.thumbTouchSize.height
            );
          },
        },
        {
          key: 'renderDebugThumbTouchRect',
          value: function(e) {
            var t = this.getThumbTouchRect(),
              n = { left: e, top: t.y, width: t.width, height: t.height };
            return y.default.createElement(h.Animated.View, {
              style: n,
              pointerEvents: 'none',
            });
          },
        },
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.minimumValue,
              n = e.maximumValue,
              r = e.minimumTrackTintColor,
              a = e.maximumTrackTintColor,
              i = e.thumbTintColor,
              l = e.containerStyle,
              u = e.style,
              s = e.trackStyle,
              f = e.thumbStyle,
              d = e.debugTouchArea,
              p = o(e, [
                'minimumValue',
                'maximumValue',
                'minimumTrackTintColor',
                'maximumTrackTintColor',
                'thumbTintColor',
                'containerStyle',
                'style',
                'trackStyle',
                'thumbStyle',
                'debugTouchArea',
              ]),
              g = this.state,
              m = g.value,
              v = g.containerSize,
              S = g.trackSize,
              w = g.thumbSize,
              T = g.allMeasured,
              C = l || b,
              O = m.interpolate({
                inputRange: [t, n],
                outputRange: [0, v.width - w.width],
              }),
              x = {};
            T || (x.opacity = 0);
            var P = c(
              {
                position: 'absolute',
                width: h.Animated.add(O, w.width / 2),
                marginTop: -S.height,
                backgroundColor: r,
              },
              x
            ),
              E = this.getTouchOverflowStyle();
            return y.default.createElement(
              h.View,
              c({}, p, {
                style: [C.container, u],
                onLayout: this.measureContainer.bind(this),
              }),
              y.default.createElement(h.View, {
                style: [{ backgroundColor: a }, C.track, s],
                onLayout: this.measureTrack.bind(this),
              }),
              y.default.createElement(h.Animated.View, {
                style: [C.track, s, P],
              }),
              y.default.createElement(h.Animated.View, {
                onLayout: this.measureThumb.bind(this),
                style: [
                  { backgroundColor: i },
                  C.thumb,
                  f,
                  c(
                    {
                      transform: [
                        { translateX: O },
                        { translateY: -(S.height + w.height) / 2 },
                      ],
                    },
                    x
                  ),
                ],
              }),
              y.default.createElement(
                h.View,
                c({ style: [b.touchArea, E] }, this.panResponder.panHandlers),
                !0 === d && this.renderDebugThumbTouchRect(O)
              )
            );
          },
        },
      ]), t;
    })(p.Component);
    (t.default = m), (m.propTypes = {
      value: d.default.number,
      disabled: d.default.bool,
      minimumValue: d.default.number,
      maximumValue: d.default.number,
      step: d.default.number,
      minimumTrackTintColor: d.default.string,
      maximumTrackTintColor: d.default.string,
      thumbTintColor: d.default.string,
      thumbTouchSize: d.default.shape({
        width: d.default.number,
        height: d.default.number,
      }),
      onValueChange: d.default.func,
      onSlidingStart: d.default.func,
      onSlidingComplete: d.default.func,
      style: h.View.propTypes.style,
      trackStyle: h.View.propTypes.style,
      thumbStyle: h.View.propTypes.style,
      debugTouchArea: d.default.bool,
      animateTransitions: d.default.bool,
      animationType: d.default.oneOf(['spring', 'timing']),
      animationConfig: d.default.object,
      containerStyle: h.View.propTypes.style,
    }), (m.defaultProps = {
      value: 0,
      minimumValue: 0,
      maximumValue: 1,
      step: 0,
      minimumTrackTintColor: '#3f3f3f',
      maximumTrackTintColor: '#b3b3b3',
      thumbTintColor: 'red',
      thumbTouchSize: { width: 40, height: 40 },
      debugTouchArea: !1,
      animationType: 'timing',
    });
    var b = h.StyleSheet.create({
      container: { height: 40, justifyContent: 'center' },
      track: { height: 4, borderRadius: 2 },
      thumb: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 10,
        top: 22,
      },
      touchArea: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      debugThumbTouchArea: {
        position: 'absolute',
        backgroundColor: 'green',
        opacity: 0.5,
      },
    });
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function a(e, t, n) {
      return t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n), e;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i,
      l =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      u = n(2),
      c = r(u),
      s = n(1),
      f = r(s),
      d = n(0),
      p = n(12),
      y = r(p),
      h = n(4),
      g = r(h),
      m = n(6),
      b = r(m),
      v = function() {
        console.log('please attach method to this component');
      },
      S = ((i = { facebook: '#3b5998', twitter: '#00aced' }), a(
        i,
        'google-plus-official',
        '#dd4b39'
      ), a(i, 'pinterest', '#cb2027'), a(i, 'linkedin', '#007bb6'), a(
        i,
        'youtube',
        '#bb0000'
      ), a(i, 'vimeo', '#aad450'), a(i, 'tumblr', '#32506d'), a(
        i,
        'instagram',
        '#517fa4'
      ), a(i, 'quora', '#a82400'), a(i, 'foursquare', '#0072b1'), a(
        i,
        'wordpress',
        '#21759b'
      ), a(i, 'stumbleupon', '#EB4823'), a(i, 'github', '#000000'), a(
        i,
        'github-alt',
        '#000000'
      ), a(i, 'twitch', '#6441A5'), a(i, 'medium', '#02b875'), a(
        i,
        'soundcloud',
        '#f50'
      ), a(i, 'gitlab', '#e14329'), a(i, 'angellist', '#1c4082'), a(
        i,
        'codepen',
        '#000000'
      ), i),
      w = function(e) {
        var t = e.component,
          n = e.type,
          r = e.button,
          a = e.disabled,
          i = e.loading,
          u = e.activityIndicatorStyle,
          c = e.small,
          s = e.onPress,
          p = e.iconStyle,
          h = e.style,
          m = e.iconColor,
          b = e.title,
          w = e.raised,
          C = e.light,
          O = e.fontFamily,
          x = e.fontStyle,
          P = e.iconSize,
          E = e.onLongPress,
          _ = e.fontWeight,
          k = o(e, [
            'component',
            'type',
            'button',
            'disabled',
            'loading',
            'activityIndicatorStyle',
            'small',
            'onPress',
            'iconStyle',
            'style',
            'iconColor',
            'title',
            'raised',
            'light',
            'fontFamily',
            'fontStyle',
            'iconSize',
            'onLongPress',
            'fontWeight',
          ]),
          R = s || E ? t || d.TouchableHighlight : d.View,
          I = void 0;
        return i &&
          (I = f.default.createElement(d.ActivityIndicator, {
            animating: !0,
            style: [T.activityIndicatorStyle, u],
            color: m || 'white',
            size: (c && 'small') || 'large',
          })), f.default.createElement(
          R,
          l(
            {
              underlayColor: C ? 'white' : S[n],
              onLongPress: !a && (E || v),
              onPress: (!a || v) && (s || v),
              disabled: a || !1,
              style: [
                w && T.raised,
                T.container,
                r && T.button,
                !r && w && T.icon,
                !r &&
                !C &&
                !w && {
                  width: 2 * P + 4,
                  height: 2 * P + 4,
                  borderRadius: 2 * P,
                },
                { backgroundColor: S[n] },
                C && { backgroundColor: 'white' },
                h && h,
              ],
            },
            k
          ),
          f.default.createElement(
            d.View,
            { style: T.wrapper },
            f.default.createElement(y.default, {
              style: [p && p],
              color: C ? S[n] : m,
              name: n,
              size: P,
            }),
            r &&
              b &&
              f.default.createElement(
                g.default,
                {
                  style: [
                    T.title,
                    C && { color: S[n] },
                    O && { fontFamily: O },
                    _ && { fontWeight: _ },
                    x && x,
                  ],
                },
                b
              ),
            i && I
          )
        );
      };
    (w.propTypes = {
      component: c.default.element,
      type: c.default.string,
      button: c.default.bool,
      onPress: c.default.func,
      onLongPress: c.default.func,
      iconStyle: d.View.propTypes.style,
      style: d.View.propTypes.style,
      iconColor: c.default.string,
      title: c.default.string,
      raised: c.default.bool,
      disabled: c.default.bool,
      loading: c.default.bool,
      activityIndicatorStyle: d.View.propTypes.style,
      small: c.default.string,
      iconSize: c.default.oneOfType([c.default.string, c.default.number]),
      light: c.default.bool,
      fontWeight: c.default.string,
      fontStyle: d.View.propTypes.style,
      fontFamily: c.default.string,
    }), (w.defaultProps = {
      raised: !0,
      iconColor: 'white',
      iconSize: 24,
      button: !1,
    });
    var T = d.StyleSheet.create({
      container: {
        margin: 7,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: { paddingTop: 14, paddingBottom: 14 },
      raised: l(
        {},
        d.Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
          },
          android: { elevation: 2 },
        })
      ),
      wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: l(
        { color: 'white', marginLeft: 15 },
        d.Platform.select({
          ios: { fontWeight: 'bold' },
          android: l({}, b.default.android.black),
        })
      ),
      icon: { height: 52, width: 52 },
      activityIndicatorStyle: { marginHorizontal: 10, height: 0 },
    });
    t.default = w;
  },
  function(e, t, n) {
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function a(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      l = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable =
              r.enumerable || !1), (r.configurable = !0), 'value' in r &&
              (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      u = n(1),
      c = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(u),
      s = n(0),
      f = s.Dimensions.get('window').width,
      d = 0.4 * f,
      p = (function(e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          ),
            a = new s.Animated.ValueXY(),
            i = s.PanResponder.create({
              onStartShouldSetPanResponder: function() {
                return !0;
              },
              onPanResponderMove: function(e, t) {
                a.setValue({ x: t.dx, y: t.dy });
              },
              onPanResponderRelease: function(e, t) {
                t.dx > d
                  ? n.forceSwipe('right')
                  : t.dx < -d ? n.forceSwipe('left') : n.resetPosition();
              },
            });
          return (n.state = { panResponder: i, position: a, index: 0 }), n;
        }
        return a(t, e), l(t, [
          {
            key: 'componentWillReceiveProps',
            value: function(e) {
              e.data !== this.props.data && this.setState({ index: 0 });
            },
          },
          {
            key: 'componentWillUpdate',
            value: function() {
              s.UIManager.setLayoutAnimationEnabledExperimental &&
                s.UIManager.setLayoutAnimationEnabledExperimental(
                  !0
                ), s.LayoutAnimation.spring();
            },
          },
          {
            key: 'forceSwipe',
            value: function(e) {
              var t = this, n = 'right' === e ? f : -f;
              s.Animated
                .timing(this.state.position, {
                  toValue: { x: 2 * n, y: 'right' === e ? -n : n },
                  duration: 750,
                })
                .start(function() {
                  return t.onSwipeComplete(e);
                });
            },
          },
          {
            key: 'onSwipeComplete',
            value: function(e) {
              var t = this.props,
                n = t.onSwipeRight,
                r = t.onSwipeLeft,
                o = t.data,
                a = o[this.state.index];
              'right' === e ? n(a) : r(a), this.state.position.setValue({
                x: 0,
                y: 0,
              }), this.setState({ index: this.state.index + 1 });
            },
          },
          {
            key: 'resetPosition',
            value: function() {
              s.Animated
                .spring(this.state.position, { toValue: { x: 0, y: 0 } })
                .start();
            },
          },
          {
            key: 'getCardStyle',
            value: function() {
              var e = this.state.position,
                t = e.x.interpolate({
                  inputRange: [2 * -f, 0, 2 * f],
                  outputRange: ['-60deg', '0deg', '60deg'],
                });
              return i({}, this.state.position.getLayout(), {
                transform: [{ rotate: t }],
              });
            },
          },
          {
            key: 'renderCards',
            value: function() {
              var e = this;
              return this.state.index >= this.props.data.length
                ? this.props.renderNoMoreCards()
                : this.props.data
                    .map(function(t, n) {
                      return n < e.state.index
                        ? null
                        : n === e.state.index
                            ? c.default.createElement(
                                s.Animated.View,
                                i(
                                  {
                                    key: t.id,
                                    style: [e.getCardStyle(), y.cardStyle],
                                  },
                                  e.state.panResponder.panHandlers
                                ),
                                e.props.renderCard(t)
                              )
                            : c.default.createElement(
                                s.Animated.View,
                                { key: t.id, style: y.cardStyle },
                                e.props.renderCard(t)
                              );
                    })
                    .reverse();
            },
          },
          {
            key: 'render',
            value: function() {
              return c.default.createElement(s.View, null, this.renderCards());
            },
          },
        ]), t;
      })(u.Component);
    (p.defaultProps = {
      onSwipeRight: function() {},
      onSwipeLeft: function() {},
    }), (t.default = p);
    var y = s.StyleSheet.create({
      cardStyle: { position: 'absolute', width: f },
    });
    p.propTypes = {
      data: u.PropTypes.any,
      renderCard: u.PropTypes.any,
      renderNoMoreCards: u.PropTypes.any,
      onSwipeRight: u.PropTypes.any,
      onSwipeLeft: u.PropTypes.any,
    };
  },
  function(e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(21),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = o.default.Item;
  },
  function(e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(21),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = o.default;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(4),
      d = r(f),
      p = n(7),
      y = r(p),
      h = n(44),
      g = r(h),
      m = function(e) {
        var t = e.featured,
          n = e.imageSrc,
          r = e.icon,
          i = e.title,
          l = e.children,
          u = e.caption,
          f = e.titleStyle,
          p = e.onPress,
          h = e.activeOpacity,
          m = e.overlayContainerStyle,
          b = e.captionStyle,
          v = e.iconContainerStyle,
          S = e.imageContainerStyle,
          w = e.containerStyle,
          T = e.contentContainerStyle,
          C = o(e, [
            'featured',
            'imageSrc',
            'icon',
            'title',
            'children',
            'caption',
            'titleStyle',
            'onPress',
            'activeOpacity',
            'overlayContainerStyle',
            'captionStyle',
            'iconContainerStyle',
            'imageContainerStyle',
            'containerStyle',
            'contentContainerStyle',
          ]),
          O = e.width,
          x = e.height;
        O || (O = s.Dimensions.get('window').width), x || (x = 0.8 * O);
        var P = s.StyleSheet.create({
          container: { width: O, height: x },
          imageContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            resizeMode: 'cover',
            backgroundColor: '#ffffff',
            flex: 2,
          },
          text: { backgroundColor: 'rgba(0,0,0,0)', marginBottom: 5 },
          contentContainer: {
            paddingTop: 15,
            paddingBottom: 5,
            paddingLeft: 15,
            paddingRight: 15,
          },
          iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          },
        });
        if (t) {
          var E = {
            title: i,
            icon: r,
            caption: u,
            imageSrc: n,
            onPress: p,
            activeOpacity: h,
            containerStyle: w,
            imageContainerStyle: S,
            overlayContainerStyle: m,
            titleStyle: f,
            captionStyle: b,
            width: O,
            height: x,
          };
          return c.default.createElement(g.default, E);
        }
        return c.default.createElement(
          s.TouchableOpacity,
          a({ style: [P.container, w && w] }, C),
          c.default.createElement(
            s.Image,
            { source: n, style: [P.imageContainer, S && S] },
            c.default.createElement(
              s.View,
              { style: [P.iconContainer, v && v] },
              r && c.default.createElement(y.default, r)
            )
          ),
          c.default.createElement(
            s.View,
            { style: [P.contentContainer, T && T] },
            c.default.createElement(
              d.default,
              { h4: !0, style: [P.text, f && f] },
              i
            ),
            l
          )
        );
      };
    (m.propTypes = {
      title: l.default.string,
      icon: l.default.object,
      caption: l.default.string,
      imageSrc: s.Image.propTypes.source.isRequired,
      onPress: l.default.func,
      activeOpacity: l.default.number,
      containerStyle: s.View.propTypes.style,
      imageContainerStyle: s.View.propTypes.style,
      iconContainerStyle: s.View.propTypes.style,
      overlayContainerStyle: s.View.propTypes.style,
      titleStyle: s.Text.propTypes.style,
      captionStyle: s.Text.propTypes.style,
      width: l.default.number,
      height: l.default.number,
      featured: l.default.bool,
      children: l.default.any,
      contentContainerStyle: s.View.propTypes.style,
    }), (t.default = m);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = n(14),
      a = r(o),
      i = n(15),
      l = r(i),
      u = n(23),
      c = r(u),
      s = n(25),
      f = r(s),
      d = n(26),
      p = r(d),
      y = n(27),
      h = r(y),
      g = n(28),
      m = r(g),
      b = n(32),
      v = r(b),
      S = n(33),
      w = r(S),
      T = n(34),
      C = r(T),
      O = n(38),
      x = r(O),
      P = n(4),
      E = r(P),
      _ = n(16),
      k = r(_),
      R = n(36),
      I = r(R),
      j = n(24),
      V = r(j),
      M = n(31),
      z = r(M),
      F = n(7),
      A = r(F),
      L = n(41),
      B = r(L),
      W = n(40),
      D = r(W),
      N = n(3),
      H = r(N),
      q = n(9),
      U = r(q),
      Y = n(5),
      K = r(Y),
      G = n(30),
      $ = r(G),
      X = n(17),
      J = r(X),
      Z = n(29),
      Q = r(Z),
      ee = n(42),
      te = r(ee),
      ne = n(37),
      re = r(ne),
      oe = n(22),
      ae = r(oe),
      ie = n(35),
      le = r(ie),
      ue = n(39),
      ce = r(ue),
      se = {
        Badge: a.default,
        Button: l.default,
        ButtonGroup: c.default,
        Card: f.default,
        FormInput: p.default,
        FormLabel: h.default,
        FormValidationMessage: m.default,
        List: v.default,
        ListItem: w.default,
        PricingCard: C.default,
        SocialIcon: x.default,
        Text: E.default,
        Divider: k.default,
        SideMenu: I.default,
        CheckBox: V.default,
        SearchBar: z.default,
        Icon: A.default,
        Tabs: B.default,
        Tab: D.default,
        colors: H.default,
        getIconType: U.default,
        normalize: K.default,
        Grid: $.default,
        Row: J.default,
        Col: Q.default,
        Tile: te.default,
        Slider: re.default,
        Avatar: ae.default,
        Rating: le.default,
        SwipeDeck: ce.default,
      };
    e.exports = se;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      f = n(4),
      d = r(f),
      p = n(7),
      y = r(p),
      h = function(e) {
        var t = e.title,
          n = e.icon,
          r = e.caption,
          i = e.imageSrc,
          l = e.containerStyle,
          u = e.imageContainerStyle,
          f = e.overlayContainerStyle,
          p = e.iconContainerStyle,
          h = e.titleStyle,
          g = e.captionStyle,
          m = o(e, [
            'title',
            'icon',
            'caption',
            'imageSrc',
            'containerStyle',
            'imageContainerStyle',
            'overlayContainerStyle',
            'iconContainerStyle',
            'titleStyle',
            'captionStyle',
          ]),
          b = e.width,
          v = e.height;
        b || (b = s.Dimensions.get('window').width), v || (v = 0.8 * b);
        var S = s.StyleSheet.create({
          container: { width: b, height: v },
          imageContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            resizeMode: 'cover',
            backgroundColor: '#ffffff',
            width: b,
            height: v,
          },
          overlayContainer: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
            alignSelf: 'stretch',
            justifyContent: 'center',
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 45,
            paddingBottom: 40,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          text: {
            color: '#ffffff',
            backgroundColor: 'rgba(0,0,0,0)',
            marginBottom: 15,
            textAlign: 'center',
          },
          iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          },
        });
        return c.default.createElement(
          s.TouchableOpacity,
          a({ style: [S.container, l && l] }, m),
          c.default.createElement(
            s.Image,
            { source: i, style: [S.imageContainer, u && u] },
            c.default.createElement(
              s.View,
              { style: [S.overlayContainer, f && f] },
              c.default.createElement(
                s.View,
                { style: [S.iconContainer, p && p] },
                n && c.default.createElement(y.default, n)
              ),
              c.default.createElement(
                d.default,
                { h4: !0, style: [S.text, h && h] },
                t
              ),
              c.default.createElement(d.default, { style: [S.text, g && g] }, r)
            )
          )
        );
      };
    (h.propTypes = {
      title: l.default.string,
      icon: l.default.object,
      caption: l.default.string,
      imageSrc: s.Image.propTypes.source.isRequired,
      onPress: l.default.func,
      containerStyle: s.View.propTypes.style,
      iconContainerStyle: s.View.propTypes.style,
      imageContainerStyle: s.View.propTypes.style,
      overlayContainerStyle: s.View.propTypes.style,
      titleStyle: s.Text.propTypes.style,
      captionStyle: s.Text.propTypes.style,
      width: l.default.number,
      height: l.default.number,
    }), (t.default = h);
  },
  function(e, t, n) {
    e.exports = n.p + '74fe6bf7ea92b9b8e2b0c7ba1245bea1.png';
  },
  function(e, t, n) {
    e.exports = n.p + 'a7a644823e78b6a4ee315a74811b7c81.png';
  },
  function(e, t, n) {
    e.exports = n.p + '9f283ab5a8bce7b0627fcdeb4c446c91.png';
  },
  function(e, t) {
    function n(e, t) {
      for (var n = -1, r = Array(e); ++n < e; )
        r[n] = t(n);
      return r;
    }
    function r(e) {
      var t = typeof e;
      return !!e && ('object' == t || 'function' == t);
    }
    function o(e) {
      return !!e && 'object' == typeof e;
    }
    function a(e) {
      return 'symbol' == typeof e || (o(e) && C.call(e) == g);
    }
    function i(e) {
      if (!e) return 0 === e ? e : 0;
      if ((e = u(e)) === f || e === -f) {
        return (e < 0 ? -1 : 1) * p;
      }
      return e === e ? e : 0;
    }
    function l(e) {
      var t = i(e), n = t % 1;
      return t === t ? n ? t - n : t : 0;
    }
    function u(e) {
      if ('number' == typeof e) return e;
      if (a(e)) return y;
      if (r(e)) {
        var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
        e = r(t) ? t + '' : t;
      }
      if ('string' != typeof e) return 0 === e ? e : +e;
      e = e.replace(m, '');
      var n = v.test(e);
      return n || S.test(e) ? w(e.slice(2), n ? 2 : 8) : b.test(e) ? y : +e;
    }
    function c(e) {
      return e;
    }
    function s(e, t) {
      if ((e = l(e)) < 1 || e > d) return [];
      var r = h, o = O(e, h);
      (t = 'function' == typeof t ? t : c), (e -= h);
      for (var a = n(o, t); ++r < e; )
        t(r);
      return a;
    }
    var f = 1 / 0,
      d = 9007199254740991,
      p = 1.7976931348623157e308,
      y = NaN,
      h = 4294967295,
      g = '[object Symbol]',
      m = /^\s+|\s+$/g,
      b = /^[-+]0x[0-9a-f]+$/i,
      v = /^0b[01]+$/i,
      S = /^0o[0-7]+$/i,
      w = parseInt,
      T = Object.prototype,
      C = T.toString,
      O = Math.min;
    e.exports = s;
  },
  function(e, t, n) {
    'use strict';
    (function(t) {
      function r(e, n, r, u, c) {
        if ('production' !== t.env.NODE_ENV)
          for (var s in e)
            if (e.hasOwnProperty(s)) {
              var f;
              try {
                o(
                  'function' == typeof e[s],
                  '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.',
                  u || 'React class',
                  r,
                  s
                ), (f = e[s](n, s, u, r, null, i));
              } catch (e) {
                f = e;
              }
              if (
                (a(
                  !f || f instanceof Error,
                  '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                  u || 'React class',
                  r,
                  s,
                  typeof f
                ), f instanceof Error && !(f.message in l))
              ) {
                l[f.message] = !0;
                var d = c ? c() : '';
                a(!1, 'Failed %s type: %s%s', r, f.message, null != d ? d : '');
              }
            }
      }
      if ('production' !== t.env.NODE_ENV)
        var o = n(11), a = n(18), i = n(20), l = {};
      e.exports = r;
    }.call(t, n(8)));
  },
  function(e, t, n) {
    'use strict';
    var r = n(10), o = n(11);
    e.exports = function() {
      function e() {
        o(
          !1,
          'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
        );
      }
      function t() {
        return e;
      }
      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
      };
      return (n.checkPropTypes = r), (n.PropTypes = n), n;
    };
  },
  function(e, t, n) {
    'use strict';
    (function(t) {
      var r = n(10), o = n(11), a = n(18), i = n(20), l = n(49);
      e.exports = function(e, n) {
        function u(e) {
          var t = e && ((O && e[O]) || e[x]);
          if ('function' == typeof t) return t;
        }
        function c(e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t;
        }
        function s(e) {
          (this.message = e), (this.stack = '');
        }
        function f(e) {
          function r(r, c, f, d, p, y, h) {
            if (((d = d || P), (y = y || f), h !== i))
              if (n)
                o(
                  !1,
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                );
              else if (
                'production' !== t.env.NODE_ENV && 'undefined' != typeof console
              ) {
                var g = d + ':' + f;
                !l[g] &&
                  u < 3 &&
                  (a(
                    !1,
                    'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                    y,
                    d
                  ), (l[g] = !0), u++);
              }
            return null == c[f]
              ? r
                  ? new s(
                      null === c[f]
                        ? 'The ' +
                            p +
                            ' `' +
                            y +
                            '` is marked as required in `' +
                            d +
                            '`, but its value is `null`.'
                        : 'The ' +
                            p +
                            ' `' +
                            y +
                            '` is marked as required in `' +
                            d +
                            '`, but its value is `undefined`.'
                    )
                  : null
              : e(c, f, d, p, y);
          }
          if ('production' !== t.env.NODE_ENV) var l = {}, u = 0;
          var c = r.bind(null, !1);
          return (c.isRequired = r.bind(null, !0)), c;
        }
        function d(e) {
          function t(t, n, r, o, a, i) {
            var l = t[n];
            if (w(l) !== e)
              return new s(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  T(l) +
                  '` supplied to `' +
                  r +
                  '`, expected `' +
                  e +
                  '`.'
              );
            return null;
          }
          return f(t);
        }
        function p(e) {
          function t(t, n, r, o, a) {
            if ('function' != typeof e)
              return new s(
                'Property `' +
                  a +
                  '` of component `' +
                  r +
                  '` has invalid PropType notation inside arrayOf.'
              );
            var l = t[n];
            if (!Array.isArray(l)) {
              return new s(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  w(l) +
                  '` supplied to `' +
                  r +
                  '`, expected an array.'
              );
            }
            for (var u = 0; u < l.length; u++) {
              var c = e(l, u, r, o, a + '[' + u + ']', i);
              if (c instanceof Error) return c;
            }
            return null;
          }
          return f(t);
        }
        function y(e) {
          function t(t, n, r, o, a) {
            if (!(t[n] instanceof e)) {
              var i = e.name || P;
              return new s(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  C(t[n]) +
                  '` supplied to `' +
                  r +
                  '`, expected instance of `' +
                  i +
                  '`.'
              );
            }
            return null;
          }
          return f(t);
        }
        function h(e) {
          function n(t, n, r, o, a) {
            for (var i = t[n], l = 0; l < e.length; l++)
              if (c(i, e[l])) return null;
            return new s(
              'Invalid ' +
                o +
                ' `' +
                a +
                '` of value `' +
                i +
                '` supplied to `' +
                r +
                '`, expected one of ' +
                JSON.stringify(e) +
                '.'
            );
          }
          return Array.isArray(e)
            ? f(n)
            : ('production' !== t.env.NODE_ENV &&
                a(
                  !1,
                  'Invalid argument supplied to oneOf, expected an instance of array.'
                ), r.thatReturnsNull);
        }
        function g(e) {
          function t(t, n, r, o, a) {
            if ('function' != typeof e)
              return new s(
                'Property `' +
                  a +
                  '` of component `' +
                  r +
                  '` has invalid PropType notation inside objectOf.'
              );
            var l = t[n], u = w(l);
            if ('object' !== u)
              return new s(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  u +
                  '` supplied to `' +
                  r +
                  '`, expected an object.'
              );
            for (var c in l)
              if (l.hasOwnProperty(c)) {
                var f = e(l, c, r, o, a + '.' + c, i);
                if (f instanceof Error) return f;
              }
            return null;
          }
          return f(t);
        }
        function m(e) {
          function n(t, n, r, o, a) {
            for (var l = 0; l < e.length; l++) {
              if (null == (0, e[l])(t, n, r, o, a, i)) return null;
            }
            return new s(
              'Invalid ' + o + ' `' + a + '` supplied to `' + r + '`.'
            );
          }
          return Array.isArray(e)
            ? f(n)
            : ('production' !== t.env.NODE_ENV &&
                a(
                  !1,
                  'Invalid argument supplied to oneOfType, expected an instance of array.'
                ), r.thatReturnsNull);
        }
        function b(e) {
          function t(t, n, r, o, a) {
            var l = t[n], u = w(l);
            if ('object' !== u)
              return new s(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  u +
                  '` supplied to `' +
                  r +
                  '`, expected `object`.'
              );
            for (var c in e) {
              var f = e[c];
              if (f) {
                var d = f(l, c, r, o, a + '.' + c, i);
                if (d) return d;
              }
            }
            return null;
          }
          return f(t);
        }
        function v(t) {
          switch (typeof t) {
            case 'number':
            case 'string':
            case 'undefined':
              return !0;
            case 'boolean':
              return !t;
            case 'object':
              if (Array.isArray(t)) return t.every(v);
              if (null === t || e(t)) return !0;
              var n = u(t);
              if (!n) return !1;
              var r, o = n.call(t);
              if (n !== t.entries) {
                for (; !(r = o.next()).done; )
                  if (!v(r.value)) return !1;
              } else
                for (; !(r = o.next()).done; ) {
                  var a = r.value;
                  if (a && !v(a[1])) return !1;
                }
              return !0;
            default:
              return !1;
          }
        }
        function S(e, t) {
          return (
            'symbol' === e ||
            ('Symbol' === t['@@toStringTag'] ||
              ('function' == typeof Symbol && t instanceof Symbol))
          );
        }
        function w(e) {
          var t = typeof e;
          return Array.isArray(e)
            ? 'array'
            : e instanceof RegExp ? 'object' : S(t, e) ? 'symbol' : t;
        }
        function T(e) {
          var t = w(e);
          if ('object' === t) {
            if (e instanceof Date) return 'date';
            if (e instanceof RegExp) return 'regexp';
          }
          return t;
        }
        function C(e) {
          return e.constructor && e.constructor.name ? e.constructor.name : P;
        }
        var O = 'function' == typeof Symbol && Symbol.iterator,
          x = '@@iterator',
          P = '<<anonymous>>',
          E = {
            array: d('array'),
            bool: d('boolean'),
            func: d('function'),
            number: d('number'),
            object: d('object'),
            string: d('string'),
            symbol: d('symbol'),
            any: (function() {
              return f(r.thatReturnsNull);
            })(),
            arrayOf: p,
            element: (function() {
              function t(t, n, r, o, a) {
                var i = t[n];
                if (!e(i)) {
                  return new s(
                    'Invalid ' +
                      o +
                      ' `' +
                      a +
                      '` of type `' +
                      w(i) +
                      '` supplied to `' +
                      r +
                      '`, expected a single ReactElement.'
                  );
                }
                return null;
              }
              return f(t);
            })(),
            instanceOf: y,
            node: (function() {
              function e(e, t, n, r, o) {
                return v(e[t])
                  ? null
                  : new s(
                      'Invalid ' +
                        r +
                        ' `' +
                        o +
                        '` supplied to `' +
                        n +
                        '`, expected a ReactNode.'
                    );
              }
              return f(e);
            })(),
            objectOf: g,
            oneOf: h,
            oneOfType: m,
            shape: b,
          };
        return (s.prototype =
          Error.prototype), (E.checkPropTypes = l), (E.PropTypes = E), E;
      };
    }.call(t, n(8)));
  },
  function(e, t) {
    e.exports = react - native - side - menu;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / Entypo;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / EvilIcons;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / Foundation;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / Ionicons;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / MaterialCommunityIcons;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / Octicons;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / SimpleLineIcons;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / Zocial;
  },
]);
