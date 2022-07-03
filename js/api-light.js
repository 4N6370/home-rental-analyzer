!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
  'use strict';
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {};
  function g(e, t) {
    var n = (t = t || r).createElement('script');
    (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
  }
  var v = '3.0.0',
    m = function (e, t) {
      return new m.fn.init(e, t);
    },
    y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    x = /^-ms-/,
    b = /-([a-z])/g,
    w = function (e, t) {
      return t.toUpperCase();
    };
  function T(e) {
    var t = !!e && 'length' in e && e.length,
      n = m.type(e);
    return (
      'function' !== n &&
      !m.isWindow(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && t > 0 && t - 1 in e))
    );
  }
  (m.fn = m.prototype =
    {
      jquery: v,
      constructor: m,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null != e
          ? 0 > e
            ? this[e + this.length]
            : this[e]
          : o.call(this);
      },
      pushStack: function (e) {
        var t = m.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return m.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          m.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (m.extend = m.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' == typeof a || m.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          u > s;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                a !== (r = e[t]) &&
                  (l && r && (m.isPlainObject(r) || (i = m.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && m.isArray(n) ? n : []))
                        : (o = n && m.isPlainObject(n) ? n : {}),
                      (a[t] = m.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    m.extend({
      expando: 'jQuery' + (v + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return 'function' === m.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = m.type(e);
        return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
      },
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || '[object Object]' !== c.call(e)) &&
          (!(t = i(e)) ||
            ('function' ==
              typeof (n = f.call(t, 'constructor') && t.constructor) &&
              p.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ''
          : 'object' == typeof e || 'function' == typeof e
          ? l[c.call(e)] || 'object'
          : typeof e;
      },
      globalEval: function (e) {
        g(e);
      },
      camelCase: function (e) {
        return e.replace(x, 'ms-').replace(b, w);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (T(e))
          for (n = e.length; n > r && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? '' : (e + '').replace(y, '');
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (T(Object(e))
              ? m.merge(n, 'string' == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; o > i; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (T(e))
          for (r = e.length; r > o; o++)
            null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return a.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        return (
          'string' == typeof t && ((n = e[t]), (t = e), (e = n)),
          m.isFunction(e)
            ? ((r = o.call(arguments, 2)),
              ((i = function () {
                return e.apply(t || this, r.concat(o.call(arguments)));
              }).guid = e.guid =
                e.guid || m.guid++),
              i)
            : void 0
        );
      },
      now: Date.now,
      support: h,
    }),
    'function' == typeof Symbol && (m.fn[Symbol.iterator] = n[Symbol.iterator]),
    m.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        l['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var C = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      v,
      m,
      y,
      x,
      b = 'sizzle' + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      k = ae(),
      E = ae(),
      S = ae(),
      N = function (e, t) {
        return e === t && (f = !0), 0;
      },
      D = {}.hasOwnProperty,
      j = [],
      A = j.pop,
      q = j.push,
      L = j.push,
      H = j.slice,
      F = function (e, t) {
        for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
        return -1;
      },
      O =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      P = '[\\x20\\t\\r\\n\\f]',
      R = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      M =
        '\\[' +
        P +
        '*(' +
        R +
        ')(?:' +
        P +
        '*([*^$|!~]?=)' +
        P +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        R +
        '))|)' +
        P +
        '*\\]',
      I =
        ':(' +
        R +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        M +
        ')*)|.*)\\)|)',
      W = new RegExp(P + '+', 'g'),
      $ = new RegExp('^' + P + '+|((?:^|[^\\\\])(?:\\\\.)*)' + P + '+$', 'g'),
      B = new RegExp('^' + P + '*,' + P + '*'),
      _ = new RegExp('^' + P + '*([>+~]|' + P + ')' + P + '*'),
      z = new RegExp('=' + P + '*([^\\]\'"]*?)' + P + '*\\]', 'g'),
      X = new RegExp(I),
      U = new RegExp('^' + R + '$'),
      V = {
        ID: new RegExp('^#(' + R + ')'),
        CLASS: new RegExp('^\\.(' + R + ')'),
        TAG: new RegExp('^(' + R + '|[*])'),
        ATTR: new RegExp('^' + M),
        PSEUDO: new RegExp('^' + I),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            P +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            P +
            '*(?:([+-]|)' +
            P +
            '*(\\d+)|))' +
            P +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + O + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            P +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            P +
            '*((?:-\\d)?\\d*)' +
            P +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp('\\\\([\\da-f]{1,6}' + P + '?|(' + P + ')|.)', 'ig'),
      ee = function (e, t, n) {
        var r = '0x' + t - 65536;
        return r != r || n
          ? t
          : 0 > r
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? '\0' === e
            ? '�'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e;
      },
      re = function () {
        p();
      },
      ie = ye(
        function (e) {
          return !0 === e.disabled;
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      L.apply((j = H.call(w.childNodes)), w.childNodes),
        j[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: j.length
          ? function (e, t) {
              q.apply(e, H.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        m,
        y = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        'string' != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
      ) {
        if (11 !== T && (f = J.exec(e)))
          if ((o = f[1])) {
            if (9 === T) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o)
              return r.push(l), r;
          } else {
            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !S[e + ' '] && (!v || !v.test(e))) {
          if (1 !== T) (y = t), (m = e);
          else if ('object' !== t.nodeName.toLowerCase()) {
            for (
              (c = t.getAttribute('id'))
                ? (c = c.replace(te, ne))
                : t.setAttribute('id', (c = b)),
                s = (h = a(e)).length;
              s--;

            )
              h[s] = '#' + c + ' ' + me(h[s]);
            (m = h.join(',')), (y = (K.test(e) && ge(t.parentNode)) || t);
          }
          if (m)
            try {
              return L.apply(r, y.querySelectorAll(m)), r;
            } catch (e) {
            } finally {
              c === b && t.removeAttribute('id');
            }
        }
      }
      return u(e.replace($, '$1'), t, r, i);
    }
    function ae() {
      var e = [];
      return function t(n, i) {
        return (
          e.push(n + ' ') > r.cacheLength && delete t[e.shift()],
          (t[n + ' '] = i)
        );
      };
    }
    function se(e) {
      return (e[b] = !0), e;
    }
    function ue(e) {
      var t = d.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function le(e, t) {
      for (var n = e.split('|'), i = n.length; i--; ) r.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function de(e) {
      return function (t) {
        return (
          ('label' in t && t.disabled === e) ||
          ('form' in t && t.disabled === e) ||
          ('form' in t &&
            !1 === t.disabled &&
            (t.isDisabled === e ||
              (t.isDisabled !== !e && ('label' in t || !ie(t)) !== e)))
        );
      };
    }
    function he(e) {
      return se(function (t) {
        return (
          (t = +t),
          se(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = oe.support = {}),
    (o = oe.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && 'HTML' !== t.nodeName;
      }),
    (p = oe.setDocument =
      function (e) {
        var t,
          i,
          a = e ? e.ownerDocument || e : w;
        return a !== d && 9 === a.nodeType && a.documentElement
          ? ((h = (d = a).documentElement),
            (g = !o(d)),
            w !== d &&
              (i = d.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener('unload', re, !1)
                : i.attachEvent && i.attachEvent('onunload', re)),
            (n.attributes = ue(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (n.getElementsByTagName = ue(function (e) {
              return (
                e.appendChild(d.createComment('')),
                !e.getElementsByTagName('*').length
              );
            })),
            (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
            (n.getById = ue(function (e) {
              return (
                (h.appendChild(e).id = b),
                !d.getElementsByName || !d.getElementsByName(b).length
              );
            })),
            n.getById
              ? ((r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }),
                (r.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }))
              : (delete r.find.ID,
                (r.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                    return n && n.value === t;
                  };
                })),
            (r.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ('*' === e) {
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (r.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                return void 0 !== t.getElementsByClassName && g
                  ? t.getElementsByClassName(e)
                  : void 0;
              }),
            (m = []),
            (v = []),
            (n.qsa = Q.test(d.querySelectorAll)) &&
              (ue(function (e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push('[*^$]=' + P + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    v.push('\\[' + P + '*(?:value|' + O + ')'),
                  e.querySelectorAll('[id~=' + b + '-]').length || v.push('~='),
                  e.querySelectorAll(':checked').length || v.push(':checked'),
                  e.querySelectorAll('a#' + b + '+*').length ||
                    v.push('.#.+[+~]');
              }),
              ue(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length &&
                    v.push('name' + P + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length &&
                    v.push(':enabled', ':disabled'),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length &&
                    v.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  v.push(',.*:');
              })),
            (n.matchesSelector = Q.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ue(function (e) {
                (n.disconnectedMatch = y.call(e, '*')),
                  y.call(e, "[s!='']:x"),
                  m.push('!=', I);
              }),
            (v = v.length && new RegExp(v.join('|'))),
            (m = m.length && new RegExp(m.join('|'))),
            (t = Q.test(h.compareDocumentPosition)),
            (x =
              t || Q.test(h.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (N = t
              ? function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var r =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e === d || (e.ownerDocument === w && x(w, e))
                        ? -1
                        : t === d || (t.ownerDocument === w && x(w, t))
                        ? 1
                        : c
                        ? F(c, e) - F(c, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === d
                      ? -1
                      : t === d
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : c
                      ? F(c, e) - F(c, t)
                      : 0;
                  if (i === o) return ce(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r
                    ? ce(a[r], s[r])
                    : a[r] === w
                    ? -1
                    : s[r] === w
                    ? 1
                    : 0;
                }),
            d)
          : d;
      }),
    (oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }),
    (oe.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== d && p(e),
        (t = t.replace(z, "='$1']")),
        n.matchesSelector &&
          g &&
          !S[t + ' '] &&
          (!m || !m.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var r = y.call(e, t);
          if (
            r ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (e) {}
      return oe(t, d, null, [e]).length > 0;
    }),
    (oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }),
    (oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
        o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (oe.escape = function (e) {
      return (e + '').replace(te, ne);
    }),
    (oe.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (oe.uniqueSort = function (e) {
      var t,
        r = [],
        i = 0,
        o = 0;
      if (
        ((f = !n.detectDuplicates),
        (c = !n.sortStable && e.slice(0)),
        e.sort(N),
        f)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
        for (; i--; ) e.splice(r[i], 1);
      }
      return (c = null), e;
    }),
    (i = oe.getText =
      function (e) {
        var t,
          n = '',
          r = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += i(t);
        return n;
      }),
    ((r = oe.selectors =
      {
        cacheLength: 50,
        createPseudo: se,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(Z, ee)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(Z, ee)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return V.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    X.test(n) &&
                    (t = a(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Z, ee).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = k[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + P + ')' + e + '(' + P + '|$)')) &&
                k(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (r) {
              var i = oe.attr(r, e);
              return null == i
                ? '!=' === t
                : !t ||
                    ((i += ''),
                    '=' === t
                      ? i === n
                      : '!=' === t
                      ? i !== n
                      : '^=' === t
                      ? n && 0 === i.indexOf(n)
                      : '*=' === t
                      ? n && i.indexOf(n) > -1
                      : '$=' === t
                      ? n && i.slice(-n.length) === n
                      : '~=' === t
                      ? (' ' + i.replace(W, ' ') + ' ').indexOf(n) > -1
                      : '|=' === t &&
                        (i === n || i.slice(0, n.length + 1) === n + '-'));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var o = 'nth' !== e.slice(0, 3),
              a = 'last' !== e.slice(-4),
              s = 'of-type' === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    p,
                    d,
                    h,
                    g = o !== a ? 'nextSibling' : 'previousSibling',
                    v = t.parentNode,
                    m = s && t.nodeName.toLowerCase(),
                    y = !u && !s,
                    x = !1;
                  if (v) {
                    if (o) {
                      for (; g; ) {
                        for (p = t; (p = p[g]); )
                          if (
                            s
                              ? p.nodeName.toLowerCase() === m
                              : 1 === p.nodeType
                          )
                            return !1;
                        h = g = 'only' === e && !h && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                      for (
                        x =
                          (d =
                            (l =
                              (c =
                                (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]) && l[2],
                          p = d && v.childNodes[d];
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++x && p === t) {
                          c[e] = [T, d, x];
                          break;
                        }
                    } else if (
                      (y &&
                        (x = d =
                          (l =
                            (c =
                              (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                              (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                      !1 === x)
                    )
                      for (
                        ;
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                        ((s
                          ? p.nodeName.toLowerCase() !== m
                          : 1 !== p.nodeType) ||
                          !++x ||
                          (y &&
                            ((c =
                              (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                              (f[p.uniqueID] = {}))[e] = [T, x]),
                          p !== t));

                      );
                    return (x -= i) === r || (x % r == 0 && x / r >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              i =
                r.pseudos[e] ||
                r.setFilters[e.toLowerCase()] ||
                oe.error('unsupported pseudo: ' + e);
            return i[b]
              ? i(t)
              : i.length > 1
              ? ((n = [e, e, '', t]),
                r.setFilters.hasOwnProperty(e.toLowerCase())
                  ? se(function (e, n) {
                      for (var r, o = i(e, t), a = o.length; a--; )
                        e[(r = F(e, o[a]))] = !(n[r] = o[a]);
                    })
                  : function (e) {
                      return i(e, 0, n);
                    })
              : i;
          },
        },
        pseudos: {
          not: se(function (e) {
            var t = [],
              n = [],
              r = s(e.replace($, '$1'));
            return r[b]
              ? se(function (e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--; )
                    (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: se(function (e) {
            return function (t) {
              return oe(e, t).length > 0;
            };
          }),
          contains: se(function (e) {
            return (
              (e = e.replace(Z, ee)),
              function (t) {
                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: se(function (e) {
            return (
              U.test(e || '') || oe.error('unsupported lang: ' + e),
              (e = e.replace(Z, ee).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = g
                      ? t.lang
                      : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-')
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === d.activeElement &&
              (!d.hasFocus || d.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: de(!1),
          disabled: de(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !r.pseudos.empty(e);
          },
          header: function (e) {
            return Y.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            var t;
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            );
          },
          first: he(function () {
            return [0];
          }),
          last: he(function (e, t) {
            return [t - 1];
          }),
          eq: he(function (e, t, n) {
            return [0 > n ? n + t : n];
          }),
          even: he(function (e, t) {
            for (var n = 0; t > n; n += 2) e.push(n);
            return e;
          }),
          odd: he(function (e, t) {
            for (var n = 1; t > n; n += 2) e.push(n);
            return e;
          }),
          lt: he(function (e, t, n) {
            for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
            return e;
          }),
          gt: he(function (e, t, n) {
            for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = r.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      r.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
    function ve() {}
    function me(e) {
      for (var t = 0, n = e.length, r = ''; n > t; t++) r += e[t].value;
      return r;
    }
    function ye(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && 'parentNode' === o,
        s = C++;
      return t.first
        ? function (t, n, i) {
            for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              p = [T, s];
            if (u) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || a)
                  if (
                    ((c =
                      (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                      (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === T && l[1] === s)
                      return (p[2] = l[2]);
                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                  }
          };
    }
    function xe(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function be(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function we(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = we(r)),
        i && !i[b] && (i = we(i, o)),
        se(function (o, a, s, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g =
              o ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; i > r; r++) oe(e, t[r], n);
                return n;
              })(t || '*', s.nodeType ? [s] : s, []),
            v = !e || (!o && t) ? g : be(g, p, e, s, u),
            m = n ? (i || (o ? e : h || r) ? [] : a) : v;
          if ((n && n(v, m, s, u), r))
            for (l = be(m, d), r(l, [], s, u), c = l.length; c--; )
              (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
          if (o) {
            if (i || e) {
              if (i) {
                for (l = [], c = m.length; c--; )
                  (f = m[c]) && l.push((v[c] = f));
                i(null, (m = []), l, u);
              }
              for (c = m.length; c--; )
                (f = m[c]) &&
                  (l = i ? F(o, f) : p[c]) > -1 &&
                  (o[l] = !(a[l] = f));
            }
          } else (m = be(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, u) : L.apply(a, m);
        })
      );
    }
    function Te(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[' '],
          u = a ? 1 : 0,
          c = ye(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          f = ye(
            function (e) {
              return F(t, e) > -1;
            },
            s,
            !0
          ),
          p = [
            function (e, n, r) {
              var i =
                (!a && (r || n !== l)) ||
                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        o > u;
        u++
      )
        if ((n = r.relative[e[u].type])) p = [ye(xe(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; o > i && !r.relative[e[i].type]; i++);
            return we(
              u > 1 && xe(p),
              u > 1 &&
                me(
                  e
                    .slice(0, u - 1)
                    .concat({ value: ' ' === e[u - 2].type ? '*' : '' })
                ).replace($, '$1'),
              n,
              i > u && Te(e.slice(u, i)),
              o > i && Te((e = e.slice(i))),
              o > i && me(e)
            );
          }
          p.push(n);
        }
      return xe(p);
    }
    function Ce(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        o = function (o, a, s, u, c) {
          var f,
            h,
            v,
            m = 0,
            y = '0',
            x = o && [],
            b = [],
            w = l,
            C = o || (i && r.find.TAG('*', c)),
            k = (T += null == w ? 1 : Math.random() || 0.1),
            E = C.length;
          for (
            c && (l = a === d || a || c);
            y !== E && null != (f = C[y]);
            y++
          ) {
            if (i && f) {
              for (
                h = 0, a || f.ownerDocument === d || (p(f), (s = !g));
                (v = e[h++]);

              )
                if (v(f, a || d, s)) {
                  u.push(f);
                  break;
                }
              c && (T = k);
            }
            n && ((f = !v && f) && m--, o && x.push(f));
          }
          if (((m += y), n && y !== m)) {
            for (h = 0; (v = t[h++]); ) v(x, b, a, s);
            if (o) {
              if (m > 0) for (; y--; ) x[y] || b[y] || (b[y] = A.call(u));
              b = be(b);
            }
            L.apply(u, b),
              c && !o && b.length > 0 && m + t.length > 1 && oe.uniqueSort(u);
          }
          return c && ((T = k), (l = w)), x;
        };
      return n ? se(o) : o;
    }
    return (
      (ve.prototype = r.filters = r.pseudos),
      (r.setFilters = new ve()),
      (a = oe.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = E[e + ' '];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, u = [], l = r.preFilter; s; ) {
            for (a in ((n && !(i = B.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
            (n = !1),
            (i = _.exec(s)) &&
              ((n = i.shift()),
              o.push({ value: n, type: i[0].replace($, ' ') }),
              (s = s.slice(n.length))),
            r.filter))
              !(i = V[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: a, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : E(e, u).slice(0);
        }),
      (s = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = S[e + ' '];
          if (!o) {
            for (t || (t = a(e)), n = t.length; n--; )
              (o = Te(t[n]))[b] ? r.push(o) : i.push(o);
            (o = S(e, Ce(i, r))).selector = e;
          }
          return o;
        }),
      (u = oe.select =
        function (e, t, i, o) {
          var u,
            l,
            c,
            f,
            p,
            d = 'function' == typeof e && e,
            h = !o && a((e = d.selector || e));
          if (((i = i || []), 1 === h.length)) {
            if (
              (l = h[0] = h[0].slice(0)).length > 2 &&
              'ID' === (c = l[0]).type &&
              n.getById &&
              9 === t.nodeType &&
              g &&
              r.relative[l[1].type]
            ) {
              if (!(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0]))
                return i;
              d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              u = V.needsContext.test(e) ? 0 : l.length;
              u-- && ((c = l[u]), !r.relative[(f = c.type)]);

            )
              if (
                (p = r.find[f]) &&
                (o = p(
                  c.matches[0].replace(Z, ee),
                  (K.test(l[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(u, 1), !(e = o.length && me(l))))
                  return L.apply(i, o), i;
                break;
              }
          }
          return (
            (d || s(e, h))(
              o,
              t,
              !g,
              i,
              !t || (K.test(e) && ge(t.parentNode)) || t
            ),
            i
          );
        }),
      (n.sortStable = b.split('').sort(N).join('') === b),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement('fieldset'));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        le('type|href|height|width', function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        le('value', function (e, t, n) {
          return n || 'input' !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        le(O, function (e, t, n) {
          var r;
          return n
            ? void 0
            : !0 === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
      oe
    );
  })(e);
  (m.find = C),
    (m.expr = C.selectors),
    (m.expr[':'] = m.expr.pseudos),
    (m.uniqueSort = m.unique = C.uniqueSort),
    (m.text = C.getText),
    (m.isXMLDoc = C.isXML),
    (m.contains = C.contains),
    (m.escapeSelector = C.escape);
  var k = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && m(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    E = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    S = m.expr.match.needsContext,
    N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;
  function j(e, t, n) {
    if (m.isFunction(t))
      return m.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return m.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ('string' == typeof t) {
      if (D.test(t)) return m.filter(t, e, n);
      t = m.filter(t, e);
    }
    return m.grep(e, function (e) {
      return u.call(t, e) > -1 !== n && 1 === e.nodeType;
    });
  }
  (m.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? m.find.matchesSelector(r, e)
          ? [r]
          : []
        : m.find.matches(
            e,
            m.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    m.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            m(e).filter(function () {
              for (t = 0; r > t; t++) if (m.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; r > t; t++) m.find(e, i[t], n);
        return r > 1 ? m.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, 'string' == typeof e && S.test(e) ? m(e) : e || [], !1)
          .length;
      },
    });
  var A,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((m.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || A), 'string' == typeof e)) {
      if (
        !(i =
          '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : q.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof m ? t[0] : t),
          m.merge(
            this,
            m.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
          ),
          N.test(i[1]) && m.isPlainObject(t))
        )
          for (i in t)
            m.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m.isFunction(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(m)
      : m.makeArray(e, this);
  }).prototype = m.fn),
    (A = m(r));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function F(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  m.fn.extend({
    has: function (e) {
      var t = m(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; n > e; e++) if (m.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && m(e);
      if (!S.test(e))
        for (; i > r; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && m.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? m.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? u.call(m(e), this[0])
          : u.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    m.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return k(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return k(e, 'parentNode', n);
        },
        next: function (e) {
          return F(e, 'nextSibling');
        },
        prev: function (e) {
          return F(e, 'previousSibling');
        },
        nextAll: function (e) {
          return k(e, 'nextSibling');
        },
        prevAll: function (e) {
          return k(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return k(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return k(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return E((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return E(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || m.merge([], e.childNodes);
        },
      },
      function (e, t) {
        m.fn[e] = function (n, r) {
          var i = m.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (r = n),
            r && 'string' == typeof r && (i = m.filter(r, i)),
            this.length > 1 &&
              (H[e] || m.uniqueSort(i), L.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var O = /\S+/g;
  function P(e) {
    return e;
  }
  function R(e) {
    throw e;
  }
  function M(e, t, n) {
    var r;
    try {
      e && m.isFunction((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && m.isFunction((r = e.then))
        ? r.call(e, t, n)
        : t.call(void 0, e);
    } catch (e) {
      n.call(void 0, e);
    }
  }
  (m.Callbacks = function (e) {
    e =
      'string' == typeof e
        ? (function (e) {
            var t = {};
            return (
              m.each(e.match(O) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : m.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      a = [],
      s = -1,
      u = function () {
        for (i = e.once, r = t = !0; a.length; s = -1)
          for (n = a.shift(); ++s < o.length; )
            !1 === o[s].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((s = o.length), (n = !1));
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
      },
      l = {
        add: function () {
          return (
            o &&
              (n && !t && ((s = o.length - 1), a.push(n)),
              (function t(n) {
                m.each(n, function (n, r) {
                  m.isFunction(r)
                    ? (e.unique && l.has(r)) || o.push(r)
                    : r && r.length && 'string' !== m.type(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            m.each(arguments, function (e, t) {
              for (var n; (n = m.inArray(t, o, n)) > -1; )
                o.splice(n, 1), s >= n && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? m.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (i = a = []), (o = n = ''), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (i = a = []), n || t || (o = n = ''), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return l;
  }),
    m.extend({
      Deferred: function (t) {
        var n = [
            [
              'notify',
              'progress',
              m.Callbacks('memory'),
              m.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              m.Callbacks('once memory'),
              m.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              m.Callbacks('once memory'),
              m.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          r = 'pending',
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return m
                .Deferred(function (t) {
                  m.each(n, function (n, r) {
                    var i = m.isFunction(e[r[4]]) && e[r[4]];
                    o[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && m.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[r[0] + 'With'](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, r, i) {
              var o = 0;
              function a(t, n, r, i) {
                return function () {
                  var s = this,
                    u = arguments,
                    l = function () {
                      var e, l;
                      if (!(o > t)) {
                        if ((e = r.apply(s, u)) === n.promise())
                          throw new TypeError('Thenable self-resolution');
                        (l =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          m.isFunction(l)
                            ? i
                              ? l.call(e, a(o, n, P, i), a(o, n, R, i))
                              : (o++,
                                l.call(
                                  e,
                                  a(o, n, P, i),
                                  a(o, n, R, i),
                                  a(o, n, P, n.notifyWith)
                                ))
                            : (r !== P && ((s = void 0), (u = [e])),
                              (i || n.resolveWith)(s, u));
                      }
                    },
                    c = i
                      ? l
                      : function () {
                          try {
                            l();
                          } catch (e) {
                            m.Deferred.exceptionHook &&
                              m.Deferred.exceptionHook(e, c.stackTrace),
                              t + 1 >= o &&
                                (r !== R && ((s = void 0), (u = [e])),
                                n.rejectWith(s, u));
                          }
                        };
                  t
                    ? c()
                    : (m.Deferred.getStackHook &&
                        (c.stackTrace = m.Deferred.getStackHook()),
                      e.setTimeout(c));
                };
              }
              return m
                .Deferred(function (e) {
                  n[0][3].add(a(0, e, m.isFunction(i) ? i : P, e.notifyWith)),
                    n[1][3].add(a(0, e, m.isFunction(t) ? t : P)),
                    n[2][3].add(a(0, e, m.isFunction(r) ? r : R));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? m.extend(e, i) : i;
            },
          },
          o = {};
        return (
          m.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (i[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    r = s;
                  },
                  n[3 - e][2].disable,
                  n[0][2].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + 'With'](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + 'With'] = a.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = m.Deferred(),
          s = function (e) {
            return function (n) {
              (r[e] = this),
                (i[e] = arguments.length > 1 ? o.call(arguments) : n),
                --t || a.resolveWith(r, i);
            };
          };
        if (
          1 >= t &&
          (M(e, a.done(s(n)).resolve, a.reject),
          'pending' === a.state() || m.isFunction(i[n] && i[n].then))
        )
          return a.then();
        for (; n--; ) M(i[n], s(n), a.reject);
        return a.promise();
      },
    });
  var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  m.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      I.test(t.name) &&
      e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  };
  var W = m.Deferred();
  function $() {
    r.removeEventListener('DOMContentLoaded', $),
      e.removeEventListener('load', $),
      m.ready();
  }
  (m.fn.ready = function (e) {
    return W.then(e), this;
  }),
    m.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? m.readyWait++ : m.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --m.readyWait : m.isReady) ||
          ((m.isReady = !0),
          (!0 !== e && --m.readyWait > 0) || W.resolveWith(r, [m]));
      },
    }),
    (m.ready.then = W.then),
    'complete' === r.readyState ||
    ('loading' !== r.readyState && !r.documentElement.doScroll)
      ? e.setTimeout(m.ready)
      : (r.addEventListener('DOMContentLoaded', $),
        e.addEventListener('load', $));
  var B = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === m.type(n))
        for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m.isFunction(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(m(e), n);
              }))),
        t)
      )
        for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  function z() {
    this.expando = m.expando + z.uid++;
  }
  (z.uid = 1),
    (z.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            _(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[m.camelCase(t)] = n;
        else for (r in t) i[m.camelCase(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][m.camelCase(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            m.isArray(t)
              ? (t = t.map(m.camelCase))
              : (t = (t = m.camelCase(t)) in r ? [t] : t.match(O) || []),
              (n = t.length);
            for (; n--; ) delete r[t[n]];
          }
          (void 0 === t || m.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !m.isEmptyObject(t);
      },
    });
  var X = new z(),
    U = new z(),
    V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    G = /[A-Z]/g;
  function Y(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(G, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            'true' === n ||
            ('false' !== n &&
              ('null' === n
                ? null
                : +n + '' === n
                ? +n
                : V.test(n)
                ? JSON.parse(n)
                : n));
        } catch (e) {}
        U.set(e, t, n);
      } else n = void 0;
    return n;
  }
  m.extend({
    hasData: function (e) {
      return U.hasData(e) || X.hasData(e);
    },
    data: function (e, t, n) {
      return U.access(e, t, n);
    },
    removeData: function (e, t) {
      U.remove(e, t);
    },
    _data: function (e, t, n) {
      return X.access(e, t, n);
    },
    _removeData: function (e, t) {
      X.remove(e, t);
    },
  }),
    m.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = U.get(o)), 1 === o.nodeType && !X.get(o, 'hasDataAttrs'))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (r = a[n].name).indexOf('data-') &&
                ((r = m.camelCase(r.slice(5))), Y(o, r, i[r]));
            X.set(o, 'hasDataAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof e
          ? this.each(function () {
              U.set(this, e);
            })
          : B(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) {
                  if (void 0 !== (n = U.get(o, e))) return n;
                  if (void 0 !== (n = Y(o, e))) return n;
                } else
                  this.each(function () {
                    U.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          U.remove(this, e);
        });
      },
    }),
    m.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || 'fx') + 'queue'),
            (r = X.get(e, t)),
            n &&
              (!r || m.isArray(n)
                ? (r = X.access(e, t, m.makeArray(n)))
                : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = m.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = m._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                m.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          X.get(e, n) ||
          X.access(e, n, {
            empty: m.Callbacks('once memory').add(function () {
              X.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    m.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? m.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = m.queue(this, e, t);
                m._queueHooks(this, e),
                  'fx' === e && 'inprogress' !== n[0] && m.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          m.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = m.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          a--;

        )
          (n = X.get(o[a], e + 'queueHooks')) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    J = new RegExp('^(?:([+-])=|)(' + Q + ')([a-z%]*)$', 'i'),
    K = ['Top', 'Right', 'Bottom', 'Left'],
    Z = function (e, t) {
      return (
        'none' === (e = t || e).style.display ||
        ('' === e.style.display &&
          m.contains(e.ownerDocument, e) &&
          'none' === m.css(e, 'display'))
      );
    },
    ee = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    };
  function te(e, t, n, r) {
    var i,
      o = 1,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return m.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (m.cssNumber[t] ? '' : 'px'),
      c = (m.cssNumber[t] || ('px' !== l && +u)) && J.exec(m.css(e, t));
    if (c && c[3] !== l) {
      (l = l || c[3]), (n = n || []), (c = +u || 1);
      do {
        (c /= o = o || '.5'), m.style(e, t, c + l);
      } while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ne = {};
  function re(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = ne[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = m.css(t, 'display')),
      t.parentNode.removeChild(t),
      'none' === i && (i = 'block'),
      (ne[r] = i),
      i)
    );
  }
  function ie(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; a > o; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n &&
              ((i[o] = X.get(r, 'display') || null),
              i[o] || (r.style.display = '')),
            '' === r.style.display && Z(r) && (i[o] = re(r)))
          : 'none' !== n && ((i[o] = 'none'), X.set(r, 'display', n)));
    for (o = 0; a > o; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  m.fn.extend({
    show: function () {
      return ie(this, !0);
    },
    hide: function () {
      return ie(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Z(this) ? m(this).show() : m(this).hide();
          });
    },
  });
  var oe = /^(?:checkbox|radio)$/i,
    ae = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    se = /^$|\/(?:java|ecma)script/i,
    ue = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
  function le(e, t) {
    var n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || '*')
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll(t || '*')
        : [];
    return void 0 === t || (t && m.nodeName(e, t)) ? m.merge([e], n) : n;
  }
  function ce(e, t) {
    for (var n = 0, r = e.length; r > n; n++)
      X.set(e[n], 'globalEval', !t || X.get(t[n], 'globalEval'));
  }
  (ue.optgroup = ue.option),
    (ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead),
    (ue.th = ue.td);
  var fe = /<|&#?\w+;/;
  function pe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      h > d;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ('object' === m.type(o)) m.merge(p, o.nodeType ? [o] : o);
        else if (fe.test(o)) {
          for (
            a = a || f.appendChild(t.createElement('div')),
              s = (ae.exec(o) || ['', ''])[1].toLowerCase(),
              u = ue[s] || ue._default,
              a.innerHTML = u[1] + m.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            a = a.lastChild;
          m.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(o));
    for (f.textContent = '', d = 0; (o = p[d++]); )
      if (r && m.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((l = m.contains(o.ownerDocument, o)),
        (a = le(f.appendChild(o), 'script')),
        l && ce(a),
        n)
      )
        for (c = 0; (o = a[c++]); ) se.test(o.type || '') && n.push(o);
    return f;
  }
  !(function () {
    var e = r.createDocumentFragment().appendChild(r.createElement('div')),
      t = r.createElement('input');
    t.setAttribute('type', 'radio'),
      t.setAttribute('checked', 'checked'),
      t.setAttribute('name', 't'),
      e.appendChild(t),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = '<textarea>x</textarea>'),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var de = r.documentElement,
    he = /^key/,
    ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ve = /^([^.]*)(?:\.(.+)|)/;
  function me() {
    return !0;
  }
  function ye() {
    return !1;
  }
  function xe() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function be(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        be(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ye;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return m().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = m.guid++))),
      e.each(function () {
        m.event.add(this, t, i, r, n);
      })
    );
  }
  (m.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = X.get(e);
      if (v)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && m.find.matchesSelector(de, i),
            n.guid || (n.guid = m.guid++),
            (u = v.events) || (u = v.events = {}),
            (a = v.handle) ||
              (a = v.handle =
                function (t) {
                  return void 0 !== m && m.event.triggered !== t.type
                    ? m.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            l = (t = (t || '').match(O) || ['']).length;
          l--;

        )
          (d = g = (s = ve.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = m.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = m.event.special[d] || {}),
              (c = m.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && m.expr.match.needsContext.test(i),
                  namespace: h.join('.'),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (m.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = X.hasData(e) && X.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || '').match(O) || ['']).length; l--; )
          if (
            ((d = g = (s = ve.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d)
          ) {
            for (
              f = m.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                s =
                  s[2] &&
                  new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                a = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                m.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) m.event.remove(e, d + t[l], n, r, !0);
        m.isEmptyObject(u) && X.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = m.event.fix(e),
        u = new Array(arguments.length),
        l = (X.get(this, 'events') || {})[s.type] || [],
        c = m.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        for (
          a = m.event.handlers.call(this, s, l), t = 0;
          (i = a[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (r = (
                  (m.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a = [],
        s = t.delegateCount,
        u = e.target;
      if (
        s &&
        u.nodeType &&
        ('click' !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && (!0 !== u.disabled || 'click' !== e.type)) {
            for (r = [], n = 0; s > n; n++)
              void 0 === r[(i = (o = t[n]).selector + ' ')] &&
                (r[i] = o.needsContext
                  ? m(i, this).index(u) > -1
                  : m.find(i, this, null, [u]).length),
                r[i] && r.push(o);
            r.length && a.push({ elem: u, handlers: r });
          }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    addProp: function (e, t) {
      Object.defineProperty(m.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: m.isFunction(t)
          ? function () {
              return this.originalEvent ? t(this.originalEvent) : void 0;
            }
          : function () {
              return this.originalEvent ? this.originalEvent[e] : void 0;
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[m.expando] ? e : new m.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== xe() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: 'focusin',
      },
      blur: {
        trigger: function () {
          return this === xe() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: 'focusout',
      },
      click: {
        trigger: function () {
          return 'checkbox' === this.type &&
            this.click &&
            m.nodeName(this, 'input')
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return m.nodeName(e.target, 'a');
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (m.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (m.Event = function (e, t) {
      return this instanceof m.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? me
                  : ye),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
          t && m.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || m.now()),
          void (this[m.expando] = !0))
        : new m.Event(e, t);
    }),
    (m.Event.prototype = {
      constructor: m.Event,
      isDefaultPrevented: ye,
      isPropagationStopped: ye,
      isImmediatePropagationStopped: ye,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = me),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = me),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = me),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    m.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && he.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && ge.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      m.event.addProp
    ),
    m.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, t) {
        m.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = e.relatedTarget,
              i = e.handleObj;
            return (
              (r && (r === this || m.contains(this, r))) ||
                ((e.type = i.origType),
                (n = i.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    m.fn.extend({
      on: function (e, t, n, r) {
        return be(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return be(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            m(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ye),
          this.each(function () {
            m.event.remove(this, e, n, t);
          })
        );
      },
    });
  var we =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Te = /<script|<style|<link/i,
    Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ke = /^true\/(.*)/,
    Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Se(e, t) {
    return (
      (m.nodeName(e, 'table') &&
        m.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        e.getElementsByTagName('tbody')[0]) ||
      e
    );
  }
  function Ne(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function De(e) {
    var t = ke.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
  }
  function je(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        X.hasData(e) &&
        ((o = X.access(e)), (a = X.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; r > n; n++) m.event.add(t, i, l[i][n]);
      U.hasData(e) && ((s = U.access(e)), (u = m.extend({}, s)), U.set(t, u));
    }
  }
  function Ae(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && oe.test(e.type)
      ? (t.checked = e.checked)
      : ('input' !== n && 'textarea' !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function qe(e, t, n, r) {
    t = a.apply([], t);
    var i,
      o,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      v = t[0],
      y = m.isFunction(v);
    if (y || (p > 1 && 'string' == typeof v && !h.checkClone && Ce.test(v)))
      return e.each(function (i) {
        var o = e.eq(i);
        y && (t[0] = v.call(this, i, o.html())), qe(o, t, n, r);
      });
    if (
      p &&
      ((o = (i = pe(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (u = (s = m.map(le(i, 'script'), Ne)).length; p > f; f++)
        (l = i),
          f !== d &&
            ((l = m.clone(l, !0, !0)), u && m.merge(s, le(l, 'script'))),
          n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, m.map(s, De), f = 0; u > f; f++)
          (l = s[f]),
            se.test(l.type || '') &&
              !X.access(l, 'globalEval') &&
              m.contains(c, l) &&
              (l.src
                ? m._evalUrl && m._evalUrl(l.src)
                : g(l.textContent.replace(Ee, ''), c));
    }
    return e;
  }
  function Le(e, t, n) {
    for (var r, i = t ? m.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || m.cleanData(le(r)),
        r.parentNode &&
          (n && m.contains(r.ownerDocument, r) && ce(le(r, 'script')),
          r.parentNode.removeChild(r));
    return e;
  }
  m.extend({
    htmlPrefilter: function (e) {
      return e.replace(we, '<$1></$2>');
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = m.contains(e.ownerDocument, e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          m.isXMLDoc(e)
        )
      )
        for (a = le(s), r = 0, i = (o = le(e)).length; i > r; r++)
          Ae(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || le(e), a = a || le(s), r = 0, i = o.length; i > r; r++)
            je(o[r], a[r]);
        else je(e, s);
      return (
        (a = le(s, 'script')).length > 0 && ce(a, !u && le(e, 'script')), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = m.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (_(n)) {
          if ((t = n[X.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? m.event.remove(n, r) : m.removeEvent(n, r, t.handle);
            n[X.expando] = void 0;
          }
          n[U.expando] && (n[U.expando] = void 0);
        }
    },
  }),
    m.fn.extend({
      detach: function (e) {
        return Le(this, e, !0);
      },
      remove: function (e) {
        return Le(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? m.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return qe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Se(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return qe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Se(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (m.cleanData(le(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return m.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !Te.test(e) &&
              !ue[(ae.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = m.htmlPrefilter(e);
              try {
                for (; r > n; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (m.cleanData(le(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return qe(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            m.inArray(this, e) < 0 &&
              (m.cleanData(le(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    m.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        m.fn[e] = function (e) {
          for (var n, r = [], i = m(e), o = i.length - 1, a = 0; o >= a; a++)
            (n = a === o ? this : this.clone(!0)),
              m(i[a])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var He = /^margin/,
    Fe = new RegExp('^(' + Q + ')(?!px)[a-z%]+$', 'i'),
    Oe = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    };
  function Pe(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Oe(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) ||
          m.contains(e.ownerDocument, e) ||
          (a = m.style(e, t)),
        !h.pixelMarginRight() &&
          Fe.test(a) &&
          He.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function Re(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  !(function () {
    function t() {
      if (u) {
        (u.style.cssText =
          'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
          (u.innerHTML = ''),
          de.appendChild(s);
        var t = e.getComputedStyle(u);
        (n = '1%' !== t.top),
          (a = '2px' === t.marginLeft),
          (i = '4px' === t.width),
          (u.style.marginRight = '50%'),
          (o = '4px' === t.marginRight),
          de.removeChild(s),
          (u = null);
      }
    }
    var n,
      i,
      o,
      a,
      s = r.createElement('div'),
      u = r.createElement('div');
    u.style &&
      ((u.style.backgroundClip = 'content-box'),
      (u.cloneNode(!0).style.backgroundClip = ''),
      (h.clearCloneStyle = 'content-box' === u.style.backgroundClip),
      (s.style.cssText =
        'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
      s.appendChild(u),
      m.extend(h, {
        pixelPosition: function () {
          return t(), n;
        },
        boxSizingReliable: function () {
          return t(), i;
        },
        pixelMarginRight: function () {
          return t(), o;
        },
        reliableMarginLeft: function () {
          return t(), a;
        },
      }));
  })();
  var Me = /^(none|table(?!-c[ea]).+)/,
    Ie = { position: 'absolute', visibility: 'hidden', display: 'block' },
    We = { letterSpacing: '0', fontWeight: '400' },
    $e = ['Webkit', 'Moz', 'ms'],
    Be = r.createElement('div').style;
  function _e(e) {
    if (e in Be) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--; )
      if ((e = $e[n] + t) in Be) return e;
  }
  function ze(e, t, n) {
    var r = J.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function Xe(e, t, n, r, i) {
    for (
      var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0,
        a = 0;
      4 > o;
      o += 2
    )
      'margin' === n && (a += m.css(e, n + K[o], !0, i)),
        r
          ? ('content' === n && (a -= m.css(e, 'padding' + K[o], !0, i)),
            'margin' !== n && (a -= m.css(e, 'border' + K[o] + 'Width', !0, i)))
          : ((a += m.css(e, 'padding' + K[o], !0, i)),
            'padding' !== n &&
              (a += m.css(e, 'border' + K[o] + 'Width', !0, i)));
    return a;
  }
  function Ue(e, t, n) {
    var r,
      i = !0,
      o = Oe(e),
      a = 'border-box' === m.css(e, 'boxSizing', !1, o);
    if (
      (e.getClientRects().length && (r = e.getBoundingClientRect()[t]),
      0 >= r || null == r)
    ) {
      if (
        ((0 > (r = Pe(e, t, o)) || null == r) && (r = e.style[t]), Fe.test(r))
      )
        return r;
      (i = a && (h.boxSizingReliable() || r === e.style[t])),
        (r = parseFloat(r) || 0);
    }
    return r + Xe(e, t, n || (a ? 'border' : 'content'), i, o) + 'px';
  }
  function Ve(e, t, n, r, i) {
    return new Ve.prototype.init(e, t, n, r, i);
  }
  m.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Pe(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
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
      zoom: !0,
    },
    cssProps: { float: 'cssFloat' },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = m.camelCase(t),
          u = e.style;
        return (
          (t = m.cssProps[s] || (m.cssProps[s] = _e(s) || s)),
          (a = m.cssHooks[t] || m.cssHooks[s]),
          void 0 === n
            ? a && 'get' in a && void 0 !== (i = a.get(e, !1, r))
              ? i
              : u[t]
            : ('string' === (o = typeof n) &&
                (i = J.exec(n)) &&
                i[1] &&
                ((n = te(e, t, i)), (o = 'number')),
              void (
                null != n &&
                n == n &&
                ('number' === o &&
                  (n += (i && i[3]) || (m.cssNumber[s] ? '' : 'px')),
                h.clearCloneStyle ||
                  '' !== n ||
                  0 !== t.indexOf('background') ||
                  (u[t] = 'inherit'),
                (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                  (u[t] = n))
              ))
        );
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = m.camelCase(t);
      return (
        (t = m.cssProps[s] || (m.cssProps[s] = _e(s) || s)),
        (a = m.cssHooks[t] || m.cssHooks[s]) &&
          'get' in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Pe(e, t, r)),
        'normal' === i && t in We && (i = We[t]),
        '' === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    m.each(['height', 'width'], function (e, t) {
      m.cssHooks[t] = {
        get: function (e, n, r) {
          return n
            ? !Me.test(m.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ue(e, t, r)
              : ee(e, Ie, function () {
                  return Ue(e, t, r);
                })
            : void 0;
        },
        set: function (e, n, r) {
          var i,
            o = r && Oe(e),
            a =
              r &&
              Xe(e, t, r, 'border-box' === m.css(e, 'boxSizing', !1, o), o);
          return (
            a &&
              (i = J.exec(n)) &&
              'px' !== (i[3] || 'px') &&
              ((e.style[t] = n), (n = m.css(e, t))),
            ze(0, n, a)
          );
        },
      };
    }),
    (m.cssHooks.marginLeft = Re(h.reliableMarginLeft, function (e, t) {
      return t
        ? (parseFloat(Pe(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              ee(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        : void 0;
    })),
    m.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      (m.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
            4 > r;
            r++
          )
            i[e + K[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        He.test(e) || (m.cssHooks[e + t].set = ze);
    }),
    m.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (m.isArray(t)) {
              for (r = Oe(e), i = t.length; i > a; a++)
                o[t[a]] = m.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? m.style(e, t, n) : m.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (m.Tween = Ve),
    (Ve.prototype = {
      constructor: Ve,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || m.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (m.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = Ve.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ve.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ve.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                m.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ve.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ve.prototype.init.prototype = Ve.prototype),
    (Ve.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = m.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function (e) {
          m.fx.step[e.prop]
            ? m.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : m.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (Ve.propHooks.scrollTop = Ve.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (m.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (m.fx = Ve.prototype.init),
    (m.fx.step = {});
  var Ge,
    Ye,
    Qe = /^(?:toggle|show|hide)$/,
    Je = /queueHooks$/;
  function Ke() {
    Ye && (e.requestAnimationFrame(Ke), m.fx.tick());
  }
  function Ze() {
    return (
      e.setTimeout(function () {
        Ge = void 0;
      }),
      (Ge = m.now())
    );
  }
  function et(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; 4 > r; r += 2 - t)
      i['margin' + (n = K[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function tt(e, t, n) {
    for (
      var r,
        i = (nt.tweeners[t] || []).concat(nt.tweeners['*']),
        o = 0,
        a = i.length;
      a > o;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function nt(e, t, n) {
    var r,
      i,
      o = 0,
      a = nt.prefilters.length,
      s = m.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = Ge || Ze(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          a > o;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]),
          1 > r && a ? n : (s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: m.extend({}, t),
        opts: m.extend(!0, { specialEasing: {}, easing: m.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Ge || Ze(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = m.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (
      (function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = m.camelCase(n))]),
            (o = e[n]),
            m.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = m.cssHooks[r]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      a > o;
      o++
    )
      if ((r = nt.prefilters[o].call(l, e, c, l.opts)))
        return (
          m.isFunction(r.stop) &&
            (m._queueHooks(l.elem, l.opts.queue).stop = m.proxy(r.stop, r)),
          r
        );
    return (
      m.map(c, tt, l),
      m.isFunction(l.opts.start) && l.opts.start.call(e, l),
      m.fx.timer(m.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  (m.Animation = m.extend(nt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, J.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.match(O));
      for (var n, r = 0, i = e.length; i > r; r++)
        (n = e[r]),
          (nt.tweeners[n] = nt.tweeners[n] || []),
          nt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && Z(e),
          v = X.get(e, 'fxshow');
        for (r in (n.queue ||
          (null == (a = m._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, m.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), Qe.test(i))) {
            if (
              (delete t[r],
              (o = o || 'toggle' === i),
              i === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || m.style(e, r);
          }
        if ((u = !m.isEmptyObject(t)) || !m.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = X.get(e, 'display')),
            'none' === (c = m.css(e, 'display')) &&
              (l
                ? (c = l)
                : (ie([e], !0),
                  (l = e.style.display || l),
                  (c = m.css(e, 'display')),
                  ie([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === m.css(e, 'float') &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? 'hidden' in v && (g = v.hidden)
                : (v = X.access(e, 'fxshow', { display: l })),
              o && (v.hidden = !g),
              g && ie([e], !0),
              p.done(function () {
                for (r in (g || ie([e]), X.remove(e, 'fxshow'), d))
                  m.style(e, r, d[r]);
              })),
              (u = tt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? nt.prefilters.unshift(e) : nt.prefilters.push(e);
    },
  })),
    (m.speed = function (e, t, n) {
      var i =
        e && 'object' == typeof e
          ? m.extend({}, e)
          : {
              complete: n || (!n && t) || (m.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !m.isFunction(t) && t),
            };
      return (
        m.fx.off || r.hidden
          ? (i.duration = 0)
          : (i.duration =
              'number' == typeof i.duration
                ? i.duration
                : i.duration in m.fx.speeds
                ? m.fx.speeds[i.duration]
                : m.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function () {
          m.isFunction(i.old) && i.old.call(this),
            i.queue && m.dequeue(this, i.queue);
        }),
        i
      );
    }),
    m.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(Z)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = m.isEmptyObject(e),
          o = m.speed(t, n, r),
          a = function () {
            var t = nt(this, m.extend({}, e), o);
            (i || X.get(this, 'finish')) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              i = null != e && e + 'queueHooks',
              o = m.timers,
              a = X.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && Je.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || m.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function () {
            var t,
              n = X.get(this),
              r = n[e + 'queue'],
              i = n[e + 'queueHooks'],
              o = m.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                m.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; a > t; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    m.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = m.fn[t];
      m.fn[t] = function (e, r, i) {
        return null == e || 'boolean' == typeof e
          ? n.apply(this, arguments)
          : this.animate(et(t, !0), e, r, i);
      };
    }),
    m.each(
      {
        slideDown: et('show'),
        slideUp: et('hide'),
        slideToggle: et('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, t) {
        m.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (m.timers = []),
    (m.fx.tick = function () {
      var e,
        t = 0,
        n = m.timers;
      for (Ge = m.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || m.fx.stop(), (Ge = void 0);
    }),
    (m.fx.timer = function (e) {
      m.timers.push(e), e() ? m.fx.start() : m.timers.pop();
    }),
    (m.fx.interval = 13),
    (m.fx.start = function () {
      Ye ||
        (Ye = e.requestAnimationFrame
          ? e.requestAnimationFrame(Ke)
          : e.setInterval(m.fx.tick, m.fx.interval));
    }),
    (m.fx.stop = function () {
      e.cancelAnimationFrame ? e.cancelAnimationFrame(Ye) : e.clearInterval(Ye),
        (Ye = null);
    }),
    (m.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (m.fn.delay = function (t, n) {
      return (
        (t = (m.fx && m.fx.speeds[t]) || t),
        (n = n || 'fx'),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = r.createElement('input'),
        t = r.createElement('select').appendChild(r.createElement('option'));
      (e.type = 'checkbox'),
        (h.checkOn = '' !== e.value),
        (h.optSelected = t.selected),
        ((e = r.createElement('input')).value = 't'),
        (e.type = 'radio'),
        (h.radioValue = 't' === e.value);
    })();
  var rt,
    it = m.expr.attrHandle;
  m.fn.extend({
    attr: function (e, t) {
      return B(this, m.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        m.removeAttr(this, e);
      });
    },
  }),
    m.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? m.prop(e, t, n)
            : ((1 === o && m.isXMLDoc(e)) ||
                (i =
                  m.attrHooks[t.toLowerCase()] ||
                  (m.expr.match.bool.test(t) ? rt : void 0)),
              void 0 !== n
                ? null === n
                  ? void m.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = m.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && 'radio' === t && m.nodeName(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(O);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (rt = {
      set: function (e, t, n) {
        return !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    m.each(m.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = it[t] || m.find.attr;
      it[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
            ((o = it[a]),
            (it[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (it[a] = o)),
          i
        );
      };
    });
  var ot = /^(?:input|select|textarea|button)$/i,
    at = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function (e, t) {
      return B(this, m.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[m.propFix[e] || e];
      });
    },
  }),
    m.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && m.isXMLDoc(e)) ||
              ((t = m.propFix[t] || t), (i = m.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = m.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : ot.test(e.nodeName) || (at.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    h.optSelected ||
      (m.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    m.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        m.propFix[this.toLowerCase()] = this;
      }
    );
  var st = /[\t\r\n\f]/g;
  function ut(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  m.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (m.isFunction(e))
        return this.each(function (t) {
          m(this).addClass(e.call(this, t, ut(this)));
        });
      if ('string' == typeof e && e)
        for (t = e.match(O) || []; (n = this[u++]); )
          if (
            ((i = ut(n)),
            (r = 1 === n.nodeType && (' ' + i + ' ').replace(st, ' ')))
          ) {
            for (a = 0; (o = t[a++]); )
              r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
            i !== (s = m.trim(r)) && n.setAttribute('class', s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (m.isFunction(e))
        return this.each(function (t) {
          m(this).removeClass(e.call(this, t, ut(this)));
        });
      if (!arguments.length) return this.attr('class', '');
      if ('string' == typeof e && e)
        for (t = e.match(O) || []; (n = this[u++]); )
          if (
            ((i = ut(n)),
            (r = 1 === n.nodeType && (' ' + i + ' ').replace(st, ' ')))
          ) {
            for (a = 0; (o = t[a++]); )
              for (; r.indexOf(' ' + o + ' ') > -1; )
                r = r.replace(' ' + o + ' ', ' ');
            i !== (s = m.trim(r)) && n.setAttribute('class', s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return 'boolean' == typeof t && 'string' === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : m.isFunction(e)
        ? this.each(function (n) {
            m(this).toggleClass(e.call(this, n, ut(this), t), t);
          })
        : this.each(function () {
            var t, r, i, o;
            if ('string' === n)
              for (r = 0, i = m(this), o = e.match(O) || []; (t = o[r++]); )
                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            else
              (void 0 !== e && 'boolean' !== n) ||
                ((t = ut(this)) && X.set(this, '__className__', t),
                this.setAttribute &&
                  this.setAttribute(
                    'class',
                    t || !1 === e ? '' : X.get(this, '__className__') || ''
                  ));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      for (t = ' ' + e + ' '; (n = this[r++]); )
        if (
          1 === n.nodeType &&
          (' ' + ut(n) + ' ').replace(st, ' ').indexOf(t) > -1
        )
          return !0;
      return !1;
    },
  });
  var lt = /\r/g,
    ct = /[\x20\t\r\n\f]+/g;
  m.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = m.isFunction(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, m(this).val()) : e)
                ? (i = '')
                : 'number' == typeof i
                ? (i += '')
                : m.isArray(i) &&
                  (i = m.map(i, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((t =
                m.valHooks[this.type] ||
                m.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in t &&
                void 0 !== t.set(this, i, 'value')) ||
                (this.value = i));
          }))
        : i
        ? (t = m.valHooks[i.type] || m.valHooks[i.nodeName.toLowerCase()]) &&
          'get' in t &&
          void 0 !== (n = t.get(i, 'value'))
          ? n
          : 'string' == typeof (n = i.value)
          ? n.replace(lt, '')
          : null == n
          ? ''
          : n
        : void 0;
    },
  }),
    m.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = m.find.attr(e, 'value');
            return null != t ? t : m.trim(m.text(e)).replace(ct, ' ');
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = 'select-one' === e.type,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                u = 0 > i ? s : o ? i : 0;
              s > u;
              u++
            )
              if (
                ((n = r[u]).selected || u === i) &&
                !n.disabled &&
                (!n.parentNode.disabled ||
                  !m.nodeName(n.parentNode, 'optgroup'))
              ) {
                if (((t = m(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = m.makeArray(t), a = i.length;
              a--;

            )
              ((r = i[a]).selected =
                m.inArray(m.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    m.each(['radio', 'checkbox'], function () {
      (m.valHooks[this] = {
        set: function (e, t) {
          return m.isArray(t)
            ? (e.checked = m.inArray(m(e).val(), t) > -1)
            : void 0;
        },
      }),
        h.checkOn ||
          (m.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    });
  var ft = /^(?:focusinfocus|focusoutblur)$/;
  m.extend(m.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h = [i || r],
        g = f.call(t, 'type') ? t.type : t,
        v = f.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((s = u = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !ft.test(g + m.event.triggered) &&
          (g.indexOf('.') > -1 &&
            ((v = g.split('.')), (g = v.shift()), v.sort()),
          (c = g.indexOf(':') < 0 && 'on' + g),
          ((t = t[m.expando]
            ? t
            : new m.Event(g, 'object' == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = v.join('.')),
          (t.rnamespace = t.namespace
            ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : m.makeArray(n, [t])),
          (d = m.event.special[g] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !m.isWindow(i)) {
          for (
            l = d.delegateType || g, ft.test(l + g) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            h.push(s), (u = s);
          u === (i.ownerDocument || r) &&
            h.push(u.defaultView || u.parentWindow || e);
        }
        for (a = 0; (s = h[a++]) && !t.isPropagationStopped(); )
          (t.type = a > 1 ? l : d.bindType || g),
            (p = (X.get(s, 'events') || {})[t.type] && X.get(s, 'handle')) &&
              p.apply(s, n),
            (p = c && s[c]) &&
              p.apply &&
              _(s) &&
              ((t.result = p.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = g),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(h.pop(), n)) ||
            !_(i) ||
            (c &&
              m.isFunction(i[g]) &&
              !m.isWindow(i) &&
              ((u = i[c]) && (i[c] = null),
              (m.event.triggered = g),
              i[g](),
              (m.event.triggered = void 0),
              u && (i[c] = u))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = m.extend(new m.Event(), n, { type: e, isSimulated: !0 });
      m.event.trigger(r, null, t);
    },
  }),
    m.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          m.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? m.event.trigger(e, t, n, !0) : void 0;
      },
    }),
    m.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, t) {
        m.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    m.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    (h.focusin = 'onfocusin' in e),
    h.focusin ||
      m.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        var n = function (e) {
          m.event.simulate(t, e.target, m.event.fix(e));
        };
        m.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = X.access(r, t);
            i || r.addEventListener(e, n, !0), X.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = X.access(r, t) - 1;
            i
              ? X.access(r, t, i)
              : (r.removeEventListener(e, n, !0), X.remove(r, t));
          },
        };
      });
  var pt = e.location,
    dt = m.now(),
    ht = /\?/;
  m.parseXML = function (t) {
    var n;
    if (!t || 'string' != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName('parsererror').length) ||
        m.error('Invalid XML: ' + t),
      n
    );
  };
  var gt = /\[\]$/,
    vt = /\r?\n/g,
    mt = /^(?:submit|button|image|reset|file)$/i,
    yt = /^(?:input|select|textarea|keygen)/i;
  function xt(e, t, n, r) {
    var i;
    if (m.isArray(t))
      m.each(t, function (t, i) {
        n || gt.test(e)
          ? r(e, i)
          : xt(
              e + '[' + ('object' == typeof i && null != i ? t : '') + ']',
              i,
              n,
              r
            );
      });
    else if (n || 'object' !== m.type(t)) r(e, t);
    else for (i in t) xt(e + '[' + i + ']', t[i], n, r);
  }
  (m.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m.isFunction(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (m.isArray(e) || (e.jquery && !m.isPlainObject(e)))
      m.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) xt(n, e[n], t, i);
    return r.join('&');
  }),
    m.fn.extend({
      serialize: function () {
        return m.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = m.prop(this, 'elements');
          return e ? m.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !m(this).is(':disabled') &&
              yt.test(this.nodeName) &&
              !mt.test(e) &&
              (this.checked || !oe.test(e))
            );
          })
          .map(function (e, t) {
            var n = m(this).val();
            return null == n
              ? null
              : m.isArray(n)
              ? m.map(n, function (e) {
                  return { name: t.name, value: e.replace(vt, '\r\n') };
                })
              : { name: t.name, value: n.replace(vt, '\r\n') };
          })
          .get();
      },
    });
  var bt = /%20/g,
    wt = /#.*$/,
    Tt = /([?&])_=[^&]*/,
    Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    kt = /^(?:GET|HEAD)$/,
    Et = /^\/\//,
    St = {},
    Nt = {},
    Dt = '*/'.concat('*'),
    jt = r.createElement('a');
  function At(e) {
    return function (t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var r,
        i = 0,
        o = t.toLowerCase().match(O) || [];
      if (m.isFunction(n))
        for (; (r = o[i++]); )
          '+' === r[0]
            ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function qt(e, t, n, r) {
    var i = {},
      o = e === Nt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        m.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return 'string' != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i['*'] && a('*'));
  }
  function Lt(e, t) {
    var n,
      r,
      i = m.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && m.extend(!0, e, r), e;
  }
  (jt.href = pt.href),
    m.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: pt.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            pt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Dt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': m.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Lt(Lt(e, m.ajaxSettings), t) : Lt(m.ajaxSettings, e);
      },
      ajaxPrefilter: At(St),
      ajaxTransport: At(Nt),
      ajax: function (t, n) {
        'object' == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = m.ajaxSetup({}, n),
          g = h.context || h,
          v = h.context && (g.nodeType || g.jquery) ? m(g) : m.event,
          y = m.Deferred(),
          x = m.Callbacks('once memory'),
          b = h.statusCode || {},
          w = {},
          T = {},
          C = 'canceled',
          k = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = Ct.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return c ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                  (w[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) k.always(e[k.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || C;
              return i && i.abort(t), E(0, t), this;
            },
          };
        if (
          (y.promise(k),
          (h.url = ((t || h.url || pt.href) + '').replace(
            Et,
            pt.protocol + '//'
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || '*').toLowerCase().match(O) || ['']),
          null == h.crossDomain)
        ) {
          l = r.createElement('a');
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                jt.protocol + '//' + jt.host != l.protocol + '//' + l.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            'string' != typeof h.data &&
            (h.data = m.param(h.data, h.traditional)),
          qt(St, h, n, k),
          c)
        )
          return k;
        for (p in ((f = m.event && h.global) &&
          0 == m.active++ &&
          m.event.trigger('ajaxStart'),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !kt.test(h.type)),
        (o = h.url.replace(wt, '')),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (h.data = h.data.replace(bt, '+'))
          : ((d = h.url.slice(o.length)),
            h.data && ((o += (ht.test(o) ? '&' : '?') + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Tt, '')),
              (d = (ht.test(o) ? '&' : '?') + '_=' + dt++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (m.lastModified[o] &&
            k.setRequestHeader('If-Modified-Since', m.lastModified[o]),
          m.etag[o] && k.setRequestHeader('If-None-Match', m.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          k.setRequestHeader('Content-Type', h.contentType),
        k.setRequestHeader(
          'Accept',
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ('*' !== h.dataTypes[0] ? ', ' + Dt + '; q=0.01' : '')
            : h.accepts['*']
        ),
        h.headers))
          k.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, k, h) || c))
          return k.abort();
        if (
          ((C = 'abort'),
          x.add(h.complete),
          k.done(h.success),
          k.fail(h.error),
          (i = qt(Nt, h, n, k)))
        ) {
          if (((k.readyState = 1), f && v.trigger('ajaxSend', [k, h]), c))
            return k;
          h.async &&
            h.timeout > 0 &&
            (u = e.setTimeout(function () {
              k.abort('timeout');
            }, h.timeout));
          try {
            (c = !1), i.send(w, E);
          } catch (e) {
            if (c) throw e;
            E(-1, e);
          }
        } else E(-1, 'No Transport');
        function E(t, n, r, s) {
          var l,
            p,
            d,
            w,
            T,
            C = n;
          c ||
            ((c = !0),
            u && e.clearTimeout(u),
            (i = void 0),
            (a = s || ''),
            (k.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && 300 > t) || 304 === t),
            r &&
              (w = (function (e, t, n) {
                for (
                  var r, i, o, a, s = e.contents, u = e.dataTypes;
                  '*' === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
              })(h, k, r)),
            (w = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (s = i.split(' '))[1] === o &&
                          (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + u + ' to ' + o,
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(h, w, k, l)),
            l
              ? (h.ifModified &&
                  ((T = k.getResponseHeader('Last-Modified')) &&
                    (m.lastModified[o] = T),
                  (T = k.getResponseHeader('etag')) && (m.etag[o] = T)),
                204 === t || 'HEAD' === h.type
                  ? (C = 'nocontent')
                  : 304 === t
                  ? (C = 'notmodified')
                  : ((C = w.state), (p = w.data), (l = !(d = w.error))))
              : ((d = C), (!t && C) || ((C = 'error'), 0 > t && (t = 0))),
            (k.status = t),
            (k.statusText = (n || C) + ''),
            l ? y.resolveWith(g, [p, C, k]) : y.rejectWith(g, [k, C, d]),
            k.statusCode(b),
            (b = void 0),
            f && v.trigger(l ? 'ajaxSuccess' : 'ajaxError', [k, h, l ? p : d]),
            x.fireWith(g, [k, C]),
            f &&
              (v.trigger('ajaxComplete', [k, h]),
              --m.active || m.event.trigger('ajaxStop')));
        }
        return k;
      },
      getJSON: function (e, t, n) {
        return m.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return m.get(e, void 0, t, 'script');
      },
    }),
    m.each(['get', 'post'], function (e, t) {
      m[t] = function (e, n, r, i) {
        return (
          m.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          m.ajax(
            m.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              m.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (m._evalUrl = function (e) {
      return m.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    m.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m.isFunction(e) && (e = e.call(this[0])),
            (t = m(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return m.isFunction(e)
          ? this.each(function (t) {
              m(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = m(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = m.isFunction(e);
        return this.each(function (n) {
          m(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              m(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (m.expr.pseudos.hidden = function (e) {
      return !m.expr.pseudos.visible(e);
    }),
    (m.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (m.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Ht = { 0: 200, 1223: 204 },
    Ft = m.ajaxSettings.xhr();
  (h.cors = !!Ft && 'withCredentials' in Ft),
    (h.ajax = Ft = !!Ft),
    m.ajaxTransport(function (t) {
      var n, r;
      return h.cors || (Ft && !t.crossDomain)
        ? {
            send: function (i, o) {
              var a,
                s = t.xhr();
              if (
                (s.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (a in t.xhrFields) s[a] = t.xhrFields[a];
              for (a in (t.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i['X-Requested-With'] ||
                (i['X-Requested-With'] = 'XMLHttpRequest'),
              i))
                s.setRequestHeader(a, i[a]);
              (n = function (e) {
                return function () {
                  n &&
                    ((n =
                      r =
                      s.onload =
                      s.onerror =
                      s.onabort =
                      s.onreadystatechange =
                        null),
                    'abort' === e
                      ? s.abort()
                      : 'error' === e
                      ? 'number' != typeof s.status
                        ? o(0, 'error')
                        : o(s.status, s.statusText)
                      : o(
                          Ht[s.status] || s.status,
                          s.statusText,
                          'text' !== (s.responseType || 'text') ||
                            'string' != typeof s.responseText
                            ? { binary: s.response }
                            : { text: s.responseText },
                          s.getAllResponseHeaders()
                        ));
                };
              }),
                (s.onload = n()),
                (r = s.onerror = n('error')),
                void 0 !== s.onabort
                  ? (s.onabort = r)
                  : (s.onreadystatechange = function () {
                      4 === s.readyState &&
                        e.setTimeout(function () {
                          n && r();
                        });
                    }),
                (n = n('abort'));
              try {
                s.send((t.hasContent && t.data) || null);
              } catch (e) {
                if (n) throw e;
              }
            },
            abort: function () {
              n && n();
            },
          }
        : void 0;
    }),
    m.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    m.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return m.globalEval(e), e;
        },
      },
    }),
    m.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    m.ajaxTransport('script', function (e) {
      var t, n;
      if (e.crossDomain)
        return {
          send: function (i, o) {
            (t = m('<script>')
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o('error' === e.type ? 404 : 200, e.type);
                })
              )),
              r.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Ot = [],
    Pt = /(=)\?(?=&|$)|\?\?/;
  function Rt(e) {
    return m.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  m.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Ot.pop() || m.expando + '_' + dt++;
      return (this[e] = !0), e;
    },
  }),
    m.ajaxPrefilter('json jsonp', function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Pt.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 ===
                (t.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Pt.test(t.data) &&
              'data');
      return s || 'jsonp' === t.dataTypes[0]
        ? ((i = t.jsonpCallback =
            m.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Pt, '$1' + i))
            : !1 !== t.jsonp &&
              (t.url += (ht.test(t.url) ? '&' : '?') + t.jsonp + '=' + i),
          (t.converters['script json'] = function () {
            return a || m.error(i + ' was not called'), a[0];
          }),
          (t.dataTypes[0] = 'json'),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? m(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Ot.push(i)),
              a && m.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          'script')
        : void 0;
    }),
    (h.createHTMLDocument = (function () {
      var e = r.implementation.createHTMLDocument('').body;
      return (
        (e.innerHTML = '<form></form><form></form>'), 2 === e.childNodes.length
      );
    })()),
    (m.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((i = (t =
                  r.implementation.createHTMLDocument('')).createElement(
                  'base'
                )).href = r.location.href),
                t.head.appendChild(i))
              : (t = r)),
          (a = !n && []),
          (o = N.exec(e))
            ? [t.createElement(o[1])]
            : ((o = pe([e], t, a)),
              a && a.length && m(a).remove(),
              m.merge([], o.childNodes)));
      var i, o, a;
    }),
    (m.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        s > -1 && ((r = m.trim(e.slice(s))), (e = e.slice(0, s))),
        m.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (i = 'POST'),
        a.length > 0 &&
          m
            .ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? m('<div>').append(m.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    m.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        m.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (m.expr.pseudos.animated = function (e) {
      return m.grep(m.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (m.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = m.css(e, 'position'),
          c = m(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = m.css(e, 'top')),
          (u = m.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && (o + u).indexOf('auto') > -1
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m.isFunction(t) && (t = t.call(e, n, m.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    m.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                m.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r,
          i,
          o = this[0];
        return o
          ? o.getClientRects().length
            ? (r = o.getBoundingClientRect()).width || r.height
              ? ((n = Rt((i = o.ownerDocument))),
                (t = i.documentElement),
                {
                  top: r.top + n.pageYOffset - t.clientTop,
                  left: r.left + n.pageXOffset - t.clientLeft,
                })
              : r
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            'fixed' === m.css(n, 'position')
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                m.nodeName(e[0], 'html') || (r = e.offset()),
                (r = {
                  top: r.top + m.css(e[0], 'borderTopWidth', !0),
                  left: r.left + m.css(e[0], 'borderLeftWidth', !0),
                })),
            {
              top: t.top - r.top - m.css(n, 'marginTop', !0),
              left: t.left - r.left - m.css(n, 'marginLeft', !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && 'static' === m.css(e, 'position');

          )
            e = e.offsetParent;
          return e || de;
        });
      },
    }),
    m.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (e, t) {
        var n = 'pageYOffset' === t;
        m.fn[e] = function (r) {
          return B(
            this,
            function (e, r, i) {
              var o = Rt(e);
              return void 0 === i
                ? o
                  ? o[t]
                  : e[r]
                : void (o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i));
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    m.each(['top', 'left'], function (e, t) {
      m.cssHooks[t] = Re(h.pixelPosition, function (e, n) {
        return n
          ? ((n = Pe(e, t)), Fe.test(n) ? m(e).position()[t] + 'px' : n)
          : void 0;
      });
    }),
    m.each({ Height: 'height', Width: 'width' }, function (e, t) {
      m.each(
        { padding: 'inner' + e, content: t, '': 'outer' + e },
        function (n, r) {
          m.fn[r] = function (i, o) {
            var a = arguments.length && (n || 'boolean' != typeof i),
              s = n || (!0 === i || !0 === o ? 'margin' : 'border');
            return B(
              this,
              function (t, n, i) {
                var o;
                return m.isWindow(t)
                  ? 0 === r.indexOf('outer')
                    ? t['inner' + e]
                    : t.document.documentElement['client' + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body['scroll' + e],
                      o['scroll' + e],
                      t.body['offset' + e],
                      o['offset' + e],
                      o['client' + e]
                    ))
                  : void 0 === i
                  ? m.css(t, n, s)
                  : m.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    m.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
    }),
    (m.parseJSON = JSON.parse),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return m;
      });
  var Mt = e.jQuery,
    It = e.$;
  return (
    (m.noConflict = function (t) {
      return e.$ === m && (e.$ = It), t && e.jQuery === m && (e.jQuery = Mt), m;
    }),
    t || (e.jQuery = e.$ = m),
    m
  );
});
function escapeSymbol(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function unescapeSymbol(e) {
  return e
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
}
function escapeJson(e) {
  return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function selectElem(e) {
  var t = document,
    i = 'string' == typeof e ? document.getElementById(e) : e;
  if (t.body.createTextRange)
    (n = document.body.createTextRange()).moveToElementText(i), n.select();
  else if (window.getSelection) {
    var n,
      a = window.getSelection();
    (n = document.createRange()).selectNodeContents(i),
      a.removeAllRanges(),
      a.addRange(n);
  }
}
function getSelectedText() {
  var e = '';
  return (
    window.getSelection
      ? (e = window.getSelection())
      : document.getSelection
      ? (e = document.getSelection())
      : document.selection && (e = document.selection.createRange().text),
    e
  );
}
function CallbacksWait(e) {
  var t = [],
    i = 0;
  function n() {
    setTimeout(function () {
      var e = t.length;
      e ? (t[e - 1](), (t = []), n()) : (i = 0);
    }, e);
  }
  return (
    (this.add = function (e) {
      i ? t.push(e) : ((i = 1), e(), n());
    }),
    (this.changeInterval = function (t) {
      return (e = t), this;
    }),
    (this.wait = function () {
      return i || ((i = 1), n()), this;
    }),
    (this.clear = function () {
      t = [];
    }),
    this
  );
}
function $data(e, t) {
  return $('[data-' + e + (void 0 !== t ? '="' + t + '"' : '') + ']');
}
function appNormalise() {
  'undefined' != typeof updHeight && updHeight(),
    'undefined' != typeof XD
      ? XD.postHeight()
      : void 0 !== parent.PREV
      ? parent.PREV.updHeigth()
      : void 0 !== parent.PREW && parent.PREW.updHeigth();
}
function windowOpen(e, t, i) {
  t || (t = window.innerWidth / 2),
    i || (i = window.innerHeight / 2),
    window.open(
      e,
      '',
      'width=' +
        t +
        ',height=' +
        i +
        ',left=' +
        (window.innerWidth - t) / 2 +
        ',top=' +
        (window.innerHeight - i) / 2
    );
}
function toPrice(e) {
  e = Math.round(100 * e) / 100;
  var t = String(e);
  return (
    -1 == t.indexOf('.') && (t += '.'),
    t.replace(/(\.)$/g, '$100').replace(/(\.[0-9])$/g, '$10')
  );
}
function indexOfLoop(e, t) {
  var i = t.length - 1;
  return (
    ((e =
      'last' == e
        ? i
        : 'first' == e
        ? 0
        : e < 0
        ? i + e + 1
        : e > i
        ? (e -= t.length)
        : e) < 0 ||
      e > i) &&
      (e = indexOfLoop(e, t)),
    e
  );
}
function decimalAdjust(e, t, i) {
  return void 0 === i || 0 == +i
    ? Math[e](t)
    : ((i = +i),
      null === (t = +t) || isNaN(t) || 'number' != typeof i || i % 1 != 0
        ? NaN
        : t < 0
        ? -decimalAdjust(e, -t, i)
        : ((t = t.toString().split('e')),
          +(
            (t = (t = Math[e](+(t[0] + 'e' + (t[1] ? +t[1] - i : -i))))
              .toString()
              .split('e'))[0] +
            'e' +
            (t[1] ? +t[1] + i : i)
          )));
}
(String.prototype.Signe = function (e) {
  var t,
    i,
    n,
    a = Object.keys(e),
    r = a.length,
    o = this;
  for (t = 0; t < r; t++)
    (i = new RegExp('\\[' + a[t] + '\\]', 'g')),
      o.search(i) >= 0 &&
        ((n = String(e[a[t]])
          .replace(/\\("|')/g, '\\$1')
          .replace(/\$/g, '&#36;')),
        (o = o.replace(i, n)));
  return o.valueOf();
}),
  (String.prototype.SigneHard = function (e) {
    var t,
      i,
      n,
      a = Object.keys(e),
      r = a.length,
      o = this,
      s = function (e) {
        var t,
          i = [
            'SPAN',
            'FONT',
            'P',
            'EM',
            'I',
            'B',
            'STRONG',
            'BR',
            'DIV',
            'A',
            'UL',
            'OL',
            'LI',
            'IMG',
            'INPUT',
            'BUTTON',
            'SELECT',
            'OPTION',
            'TABLE',
            'TBODY',
            'TR',
            'TD',
            'TH',
            'H1',
            'H2',
            'H3',
            'H4',
            'H5',
            'H6',
          ],
          n = [
            'id',
            'class',
            'style',
            'src',
            'href',
            'target',
            'rel',
            'type',
            'value',
            'width',
            'height',
            'name',
            'required',
            'placeholder',
            'title',
            'alt',
          ],
          a = $('<div>' + e + '</div>');
        return (
          a.find('*').each(function () {
            var a = this.nodeName,
              r = this.attributes,
              o = 0,
              s = r.length,
              l = 0;
            if (-1 == i.indexOf(a))
              console.log('>>>>>>>>>>>>>>>>>>>>>', '' + e),
                console.error('DEL', a),
                $(this).remove();
            else {
              for (o = 0; o < s; o++)
                -1 == (t = r[o].name).search(/data|xml|="/) &&
                  -1 == n.indexOf(t) &&
                  (this.removeAttribute(t),
                  o--,
                  s--,
                  console.log('>>>>>>>>>>>>>>>>>>>>', '' + e),
                  console.error('DEL', t)),
                  'href' == t && (l = 1);
              if (
                (l &&
                  (this.setAttribute('target', '_blank'),
                  this.setAttribute('rel', 'nofollow')),
                'A' == a)
              ) {
                if (
                  ('undefined' == typeof BILLING || Number(BILLING.openLink)
                    ? null != this.getAttribute('data-medium-href') &&
                      (this.setAttribute(
                        'href',
                        this.getAttribute('data-medium-href')
                      ),
                      this.removeAttribute('data-medium-href'))
                    : (this.setAttribute('data-medium-href', this.href),
                      this.setAttribute('href', 'javascript://')),
                  null == (l = this.getAttribute('href')))
                )
                  this.setAttribute('href', 'javascript://');
                else {
                  var c = l.match(/^\s*javascript/);
                  'javascript://' != l &&
                    null != c &&
                    0 === c.index &&
                    this.setAttribute('href', 'https://ucalc.pro');
                }
                'javascript://' == (l = this.getAttribute('href')) &&
                  this.removeAttribute('target');
              }
            }
          }),
          a.html()
        );
      };
    if (o.search(/(value|placeholder|title|alt|href)="\[/) >= 0)
      for (t = 0; t < r; t++)
        (i = new RegExp(
          '(value|placeholder|title|alt|href)="\\[' + a[t] + '\\]"',
          'g'
        )),
          o.search(i) >= 0 &&
            ((n = s(String(e[a[t]])).replace(/\\("|')/g, '\\$1')),
            (o = o.replace(
              i,
              '$1="' +
                n
                  .replace(/\&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;') +
                '"'
            )));
    for (t = 0; t < r; t++)
      (i = new RegExp('\\[' + a[t] + '\\]', 'g')),
        o.search(i) >= 0 &&
          ((n = s(String(e[a[t]]))
            .replace(/\\("|')/g, '\\$1')
            .replace(/\$/g, '&#36;')),
          (o = o.replace(i, n)));
    return o.valueOf();
  }),
  (String.prototype.SigneFormula = function (e) {
    var t,
      i,
      n,
      a = Object.keys(e),
      r = a.length,
      o = this;
    for (t = 0; t < r; t++)
      (i = new RegExp('\\[' + a[t] + '\\]', 'g')),
        (n = String(e[a[t]])
          .replace(/\\("|')/g, '\\$1')
          .replace(/\$/g, '&#36;')),
        (o = o.replace(i, n));
    return (o = o.replace(/\[(r[0-9]|[A-Z]+)\]/g, '0')).valueOf();
  }),
  $(document).ready(function () {
    $('a[href^="#"], *[data-href^="#"]').on('click', function (e) {
      e.preventDefault();
      var t = $(this).attr('data-href')
        ? $(this).attr('data-href')
        : $(this).attr('href');
      $('html,body')
        .stop()
        .animate({ scrollTop: $(t).offset().top }, 1e3),
        (document.location.hash = $(this).attr('href'));
    });
  }),
  'undefined' == typeof XD &&
    (XD = (function () {
      var e,
        t,
        i,
        n = 1,
        a = this;
      return {
        receiveMessage: function (n, r) {
          a.postMessage
            ? (n &&
                (i = function (e) {
                  if (
                    ('string' == typeof r && e.origin !== r) ||
                    ('[object Function]' ===
                      Object.prototype.toString.call(r) &&
                      !1 === r(e.origin))
                  )
                    return !1;
                  n(e);
                }),
              a.addEventListener
                ? a[n ? 'addEventListener' : 'removeEventListener'](
                    'message',
                    i,
                    !1
                  )
                : a[n ? 'attachEvent' : 'detachEvent']('onmessage', i))
            : (e && clearInterval(e),
              (e = null),
              n &&
                (e = setInterval(function () {
                  var e = document.location.hash,
                    i = /^#?\d+&/;
                  e !== t &&
                    i.test(e) &&
                    ((t = e), n({ data: e.replace(i, '') }));
                }, 100)));
        },
        postMessage: function (e, t, i) {
          t &&
            ((i = i || parent),
            a.postMessage
              ? i.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
              : t &&
                (i.location =
                  t.replace(/#.*$/, '') + '#' + +new Date() + n++ + '&' + e));
        },
        postHeight: function () {},
        postMessageEase: function () {},
      };
    })()),
  (SWAP = {
    width: {
      grid: function () {
        $('.ub-grid-width').remove(),
          $('.grid-column + .grid-column').before(
            '<div class="ub-grid-width"></div>'
          ),
          $('.grid-subcolumn + .grid-subcolumn').before(
            '<div class="ub-grid-width"></div>'
          );
      },
    },
    fieldRefresh: function (e) {
      var t = $data('id', e.id),
        i = t.find('.field-body'),
        n = t.find('.close-item'),
        a = FIELDS[e.type],
        r = a.tmpl[SAVER.json.calc.theme].Signe(e);
      i.html(r), n.remove(), a.initial(e), MEDIUM.init();
    },
    layers: {
      element: $('.wrap-calc > .layer-actions'),
      style: $('.layer-actions-style'),
      arrowLeft: $('.layer-actions-arrow.left'),
      arrowRight: $('.layer-actions-arrow.right'),
      title: $('.layer-actions-title'),
      btnCopy: $('.layer-actions-copy'),
      btnDel: $('.layer-actions-del'),
      panel: $('#viewing_panel'),
      pause: 0,
      pauseNew: 0,
      logicNext: -1,
      logicHidden: new Set(),
      logicRoute: [0],
      upd: function () {
        var e = this,
          t = e.getEq(),
          i = e.panel.find('.grid-table'),
          n = e.panel.find('.grid-table').eq(t);
        i.removeClass('active'),
          n.addClass('active'),
          e.style.html(
            '#viewing_panel .grid-table {transform: translateX(calc((-100% - 64px) * ([eq] + var(--compens)*-1)))}'.Signe(
              { eq: t }
            )
          ),
          e.arrowLeft.off('click').on('click', function () {
            e.slide(-1);
          }),
          e.arrowRight.off('click').on('click', function () {
            e.slide(1);
          }),
          FIELDS.progress && FIELDS.progress.updBars(),
          i.each(function (e) {
            var t = $(this),
              i = t.find('.layer-actions');
            DAT.itsCreate &&
              0 === i.length &&
              t.prepend(
                '<div class="layer-actions"><div class="layer-actions-add-left" data-ub-title="' +
                  loc['Добавить страницу'] +
                  '" data-ub-pos="top"></div><div class="layer-actions-add-right" data-ub-title="' +
                  loc['Добавить страницу'] +
                  '" data-ub-pos="top"></div><div class="layer-actions-swap-left" data-ub-title="' +
                  loc['Поменять местами'] +
                  '" data-ub-pos="bottom"></div><div class="layer-actions-swap-right" data-ub-title="' +
                  loc['Поменять местами'] +
                  '" data-ub-pos="bottom"></div></div>'
              ),
              t
                .find('.layer-footer .informer')
                .text(
                  loc['[x] из [y]'].Signe({
                    x: e + 1,
                    y: SAVER.json.layers.length,
                  })
                );
          }),
          e.element.removeClass('first last'),
          0 === t && e.element.addClass('first'),
          t + 1 === SAVER.json.layers.length && e.element.addClass('last'),
          SAVER.json.layers.length <= 1
            ? e.element.addClass('hide')
            : e.element.removeClass('hide'),
          0 === t && e.isEmpty() ? n.addClass('empty') : n.removeClass('empty'),
          e.panel
            .find('.layer-actions-add-left')
            .off('click')
            .on('click', function () {
              e.add('before');
            }),
          e.panel
            .find('.layer-actions-add-right')
            .off('click')
            .on('click', function () {
              e.add('after');
            }),
          e.panel
            .find('.layer-actions-swap-left')
            .off('click')
            .on('click', function () {
              var t = $(this).closest('.grid-table').attr('data-layer');
              e.swap(t, 'left');
            }),
          e.panel
            .find('.layer-actions-swap-right')
            .off('click')
            .on('click', function () {
              var t = $(this).closest('.grid-table').attr('data-layer');
              e.swap(t, 'right');
            }),
          $('.layer-actions-copy')
            .off('click')
            .on('click', function () {
              e.copy();
            }),
          $('.layer-actions-del')
            .off('click')
            .on('click', function () {
              e.del();
            }),
          e.title.text(loc['Страница [n]'].Signe({ n: t + 1 })),
          appNormalise();
      },
      slide: function (e) {
        var t = this,
          i = t.getEq(),
          n = i + e;
        !DAT.itsCreate &&
          (1 === e
            ? (t.logicNext >= 0 &&
                (n = SAVER.json.layers.indexOf(t.logicNext / 1)),
              n !== i && t.logicRoute.push(n))
            : -1 === e &&
              (t.logicRoute.length > 1 &&
                (n = t.logicRoute[t.logicRoute.length - 2]),
              t.logicRoute.pop())),
          t.toEq(n),
          (t.pause = 1),
          setTimeout(function () {
            (t.logicNext = -1), runLogic(SAVER.json.layers[n]), (t.pause = 0);
          }, 300);
      },
      toStep: function (e) {
        var t = SAVER.json.layers.findIndex(function (t) {
          return t / 1 == e / 1;
        });
        t < 0 && (t = 0), this.toEq(t);
      },
      toEq: function (e) {
        var t = SAVER.json.layers.length - 1;
        e < 0 && (e = 0),
          e > t && (e = t),
          this.element.attr('data-active-eq', e),
          this.upd(),
          this.scrollToStart(),
          showLogicLines(),
          showLogicGraph(),
          $('#add-line').addClass('hide');
      },
      toThanks: function () {
        if (!DAT.itsCreate && !runLogicSend())
          if (SAVER.json.connection.thanks)
            switch (
              ($('.grid-table.active').addClass('successSend'),
              SAVER.json.connection.thanksAction)
            ) {
              case 'text':
              case 'text_link':
                var e = SAVER.json.layers,
                  t = $('#viewing_panel'),
                  i =
                    '<div class="thanks-title">' +
                    SAVER.json.connection.thanksTitle +
                    '</div>',
                  n =
                    '<div class="thanks-desc">' +
                    SAVER.json.connection.thanksDesc.replace(/\n/g, '<br>') +
                    '</div>';
                if (e.indexOf(333888) >= 0) return;
                e.push(333888),
                  t.append(
                    '<ul class="grid-table" style="--compens: 0" data-layer="333888"><li>' +
                      i +
                      n +
                      '</li></ul>'
                  ),
                  setTimeout(function () {
                    SWAP.layers.toStep(333888);
                  }, 10);
            }
          else
            setTimeout(function () {
              XD.postMessageEase({ closePopup: !0 });
            }, 600);
      },
      getEq: function () {
        return this.element.attr('data-active-eq') / 1;
      },
      getActive: function () {
        var e = this.getEq();
        return SAVER.json.layers[e] / 1;
      },
      fieldsCount: function (e) {
        var t = e || this.getEq(),
          i = SAVER.json.layers[t] / 1,
          n = 0;
        return (
          SAVER.json.lines.forEach(function (e) {
            var t,
              a,
              r = [];
            e.layer / 1 === i &&
              ((t = e.id),
              (r = (a = SAVER.getFieldsBy('L', t)).filter(function (e) {
                return 'layer_actions' === e.type || 'progress' === e.type;
              })),
              (n += a.length - r.length));
          }),
          n
        );
      },
      inputsCount: function (e) {
        var t = e || this.getEq(),
          i = SAVER.json.layers[t] / 1,
          n = 0;
        return (
          SAVER.json.lines.forEach(function (e) {
            var t,
              a,
              r = [];
            e.layer / 1 === i &&
              ((t = e.id),
              (r = (a = SAVER.getFieldsBy('L', t)).filter(function (e) {
                return (
                  'layer_actions' === e.type ||
                  'progress' === e.type ||
                  'image' === e.type ||
                  'text' === e.type ||
                  'code' === e.type ||
                  'result' === e.type
                );
              })),
              (n += a.length - r.length));
          }),
          n
        );
      },
      isEmpty: function () {
        return !this.fieldsCount();
      },
      isSingle: function () {
        return 1 === this.fieldsCount();
      },
      isSingleInput: function () {
        return 1 === this.inputsCount();
      },
      getNewId: function () {
        var e = 0;
        return (
          SAVER.json.layers.forEach(function (t) {
            var i = t / 1;
            e < i && (e = i);
          }),
          e + 1
        );
      },
      add: function (e) {
        var t = this,
          i = t.getNewId(),
          n = t.panel.find('.grid-table').filter('.active');
        checkLimits('addLayer') &&
          ('before' === e && t.panel.addClass('del-in-process'),
          n.removeClass('active'),
          n[e](
            '<ul class="grid-table active" style="--compens: 0" data-layer="' +
              i +
              '"></ul>'
          ),
          t.clear(),
          setTimeout(function () {
            t.panel.removeClass('del-in-process'),
              'after' === e ? t.slide(1) : t.slide(-1);
          }, 30),
          SWAP.calc.resizerEnd(),
          SAVER.history.newStep());
      },
      clear: function (e) {
        var t,
          i,
          n,
          a = this.panel.find('.grid-table'),
          r = 0,
          o = SAVER.json.lines.filter(function (t) {
            return t.layer / 1 == e / 1;
          })[0],
          s = !!o && o.columns[0],
          l = o ? o.id : DAT.newL(),
          c = s ? s.id : DAT.newC();
        e
          ? ((t = a.filter('[data-layer="' + e + '"]')), (e /= 1))
          : ((t = a.filter('.active')), (e = t.attr('data-layer') / 1));
        var d = { id: l, layer: e, columns: [{ id: c, fields: [] }] };
        (i = t.prev()),
          (n = i.length ? i.attr('data-layer') / 1 : 0),
          SAVER.json.lines.forEach(function (e, t) {
            e.layer / 1 === n && (r = t);
          }),
          (SAVER.json.layers = []),
          a.each(function () {
            var e = $(this).attr('data-layer') / 1;
            SAVER.json.layers.push(e);
          }),
          t.html(
            (
              '<li class="ub-grid grid-line" id="grid-[l]"><div class="ub-grid grid-column" id="grid-[l]-[c]">' +
              RANDER.nofieldsTpl +
              '</div></li>'
            ).Signe({ l: l, c: c })
          ),
          t.find('.add-field_button').click(function () {
            var e = $(this);
            addField(e);
          }),
          0 === SAVER.json.fields.length &&
            $('.js-content-switcher').addClass('js-nofields'),
          (SAVER.paused = 0),
          (SAVER.json.lines = SAVER.json.lines.filter(function (t) {
            return t.layer / 1 != e;
          })),
          i
            ? SAVER.json.lines.splice(r + 1, 0, d)
            : SAVER.json.lines.unshift(d);
      },
      copy: function () {
        var e,
          t = this,
          i = t.getEq(),
          n = t.getActive();
        if (checkLimits('copyLayer')) {
          if (t.pauseNew) return;
          (t.pauseNew = 1),
            t.add('after'),
            (e = SAVER.json.layers[i + 1]),
            (SAVER.json.lines = SAVER.json.lines.filter(function (t) {
              return t.layer / 1 !== e;
            })),
            SAVER.json.lines.map(function (i) {
              i.layer / 1 === n && t.copyLine(i, e);
            }),
            RANDER.preload(!1, e),
            SWAP.calc.resizerEnd(),
            SAVER.history.newStep(),
            setTimeout(function () {
              t.pauseNew = 0;
            }, 600);
        }
      },
      copyLine: function (e, t) {
        var i = JSON.parse(JSON.stringify(e)),
          n = DAT.newL();
        (i.layer = t),
          (i.id = n),
          i.columns.forEach(function (e) {
            e.id = DAT.newC();
          }),
          SAVER.json.lines.push(i),
          this.copyFields(i);
      },
      copyFields: function (e) {
        e.columns.forEach(function (t) {
          t.fields.forEach(function (i) {
            var n = [];
            i[0].fields.forEach(function (i) {
              var a,
                r,
                o = SAVER.getFieldBy('id', i),
                s = JSON.parse(JSON.stringify(o));
              (s.L = e.id),
                (s.C = t.id),
                (s.id = DAT.newId()),
                (s.id_var = DAT.newId_var(s)),
                (s.litera = DAT.varName(s.id_var)),
                SAVER.json.fields.push(s),
                n.push(s.id),
                'result' === s.type &&
                  ((a = JSON.parse(
                    JSON.stringify(SAVER.getResultBy('id', s.idRes))
                  )),
                  (s.idRes = DAT.newR()),
                  (a.id = s.idRes),
                  (r = loc['Формула [n]'].Signe({ n: s.idRes })),
                  (a.name_text = r),
                  (s.name_text = r),
                  (s.name = '<p>' + r + '</p>'),
                  SAVER.json.results.push(a),
                  addNew.result(a, 'fast'));
            }),
              (i[0].fields = n);
          });
        });
      },
      del: function () {
        var e = this,
          t = e.getEq(),
          i = e.getActive(),
          n = function () {
            t
              ? (e.slide(-1), e.remove(i))
              : (e.slide(1),
                $data('layer', i).css('visibility', 'hidden'),
                setTimeout(function () {
                  e.element.attr('data-active-eq', e.getEq() - 1),
                    e.panel.addClass('del-in-process'),
                    setTimeout(function () {
                      e.remove(i),
                        setTimeout(function () {
                          e.panel.removeClass('del-in-process');
                        });
                    });
                }, 500)),
              SWAP.calc.resizerEnd(),
              SAVER.history.newStep();
          };
        1 !== SAVER.json.layers.length &&
          (SWAP.layers.isEmpty()
            ? n()
            : (wnd.open(
                loc['Удаление страницы'],
                'modal_oldssid modal_del-result',
                '<p style="text-align: center; width: 270px; margin-bottom: 20px">' +
                  loc['Вы уверены, что хотите удалить страницу?'] +
                  '</p><button class="btn_prior js-del-layer">' +
                  loc['Да, удалить'] +
                  '</button><button class="js-modal-close">' +
                  loc['Отмена'] +
                  '</button>'
              ),
              $('.js-del-layer').click(function () {
                $('.js-modal-close').click(), n();
              })));
      },
      remove: function (e) {
        $data('layer', e).remove(),
          (SAVER.json.layers = SAVER.json.layers.filter(function (t) {
            return t / 1 !== e;
          })),
          (SAVER.json.lines = SAVER.json.lines.filter(function (t) {
            var i = t.layer / 1,
              n = t.id / 1,
              a = i === e;
            return (
              a &&
                (SAVER.json.fields = SAVER.json.fields.filter(function (e) {
                  var t,
                    i = e.L / 1 === n;
                  return (
                    i &&
                      e.hasOwnProperty('litera') &&
                      delete RECALC.db.letters[e.litera],
                    i &&
                      'result' === e.type &&
                      ((t = SAVER.json.results.findIndex(function (t) {
                        return t.id / 1 == e.idRes / 1;
                      })),
                      SAVER.json.results.splice(t, 1),
                      $('.result[data-result-id="' + e.idRes + '"]').remove()),
                    !i
                  );
                })),
              !a
            );
          })),
          this.upd();
      },
      swap: function (e, t) {
        var i = this;
        if (!i.pauseNew) {
          i.pauseNew = 1;
          var n = SAVER.json.layers.findIndex(function (t) {
              return t / 1 == e / 1;
            }),
            a = 'left' === t ? n - 1 : n + 1,
            r = SAVER.json.layers[a],
            o = $data('layer', e),
            s = $data('layer', r),
            l = 'left' === t ? -1 : 1,
            c = 'left' === t ? 1 : -1;
          o.attr('style', '--compens: ' + l),
            s.attr('style', '--compens: ' + c),
            setTimeout(function () {
              i.panel.addClass('layers-pause'),
                o.attr('style', '--compens: 0'),
                s.attr('style', '--compens: 0'),
                'left' === t ? o.insertBefore(s) : o.insertAfter(s),
                (SAVER.json.layers[n] = r / 1),
                (SAVER.json.layers[a] = e / 1),
                setTimeout(function () {
                  i.panel.removeClass('layers-pause'),
                    (i.pause = 0),
                    i.toStep(r),
                    SWAP.calc.resizerEnd(),
                    SAVER.history.newStep();
                }, 150);
            }, 500),
            setTimeout(function () {
              i.pauseNew = 0;
            }, 300);
        }
      },
      copyrightUpd: function () {
        var e = $('.copyright-ucalc');
        if (e.length) {
          var t = this.panel.outerHeight(),
            i = this.panel.find('.grid-table.active').outerHeight() - t;
          e.css('margin-top', i),
            setTimeout(function () {
              e.addClass('init');
            });
        }
      },
      scrollToStart: function () {
        DAT.itsCreate ||
          ($('html, body').animate({ scrollTop: 0 }, 500),
          DAT.itsFrame && !DAT.itsApi
            ? window.parent.postMessage({ uCalc: !0, scrollToStart: !0 }, '*')
            : 'undefined' != typeof XD &&
              XD.hasOwnProperty('postMessageEase') &&
              XD.postMessageEase({ scrollToStart: !0 }));
      },
    },
    calc: { struct: 4 },
    resize2: {
      widthStage: [3e3, 760, 560, 375],
      classes: 'resize-3000 resize-760 resize-560 resize-375',
      getActualWidth: function () {
        var e,
          t = SWAP.resize2.widthStage,
          i = SAVER.json.calc.width;
        for (let n in t) t[n] >= i && (e = t[n]);
        return e;
      },
      updStruct: function () {
        if (SAVER.paused) setTimeout(SWAP.resize2.updStruct, 100);
        else {
          var e = SAVER.json.calc.width,
            t = 5,
            i = $('.js-tooltip-calc-width').parent();
          SWAP.resize2.widthStage.forEach(function (i) {
            i > e && (t -= 1);
          }),
            i.find('input').blur(),
            i.attr('disabled', 'disabled'),
            setTimeout(function () {
              i.removeAttr('disabled'), i.find('input').focus();
            }, 300),
            SETTINGS.calc.memo || SETTINGS.calc.structGenerate(),
            SETTINGS.calc.setStruct(t);
        }
      },
      updStructEase: function () {
        window.hasOwnProperty('resize2Timer') &&
          clearTimeout(window.resize2Timer);
        var e = setTimeout(function () {
          SWAP.resize2.updStruct();
        }, 800);
        window.resize2Timer = e;
      },
      updWidth: function () {
        var e = SWAP.resize2.getActualWidth(),
          t = SAVER.json.calc.width;
        $('#viewing_panel')
          .addClass('reload')
          .css('max-width', t + 'px'),
          $('.design')
            .removeClass(SWAP.resize2.classes)
            .addClass('resize-' + e),
          $('.resize-prev').css('width', t + 'px');
      },
    },
  });
var GRID = {
  preload: function (e) {
    var t,
      i,
      n,
      a,
      r,
      o,
      s,
      l,
      c,
      d,
      u,
      p = $('#viewing_panel'),
      f = SAVER.json.lines,
      m = [];
    for (
      e &&
        (f = f.filter(function (t) {
          return t.layer / 1 == e / 1;
        })),
        c = f.length,
        o = 0;
      o < c;
      o++
    )
      for (
        t = f[o],
          p
            .find('[data-layer="' + t.layer + '"]')
            .append(
              '<li class="ub-grid grid-line" id="grid-[L]"></li>'.Signe({
                L: t.id,
              })
            ),
          t.id > DAT._lid && (DAT._lid = t.id),
          d = (i = t.columns).length,
          s = 0;
        s < d;
        s++
      )
        for (
          n = i[s],
            $('#grid-' + t.id).append(
              '<div class="ub-grid grid-column" id="grid-[L]-[C]"></div>'.Signe(
                { L: t.id, C: n.id }
              )
            ),
            n.id > DAT._Cid && (DAT._cid = n.id),
            (a = n.fields) || m.push(t.layer),
            u = void 0 !== a ? a.length : 0,
            l = 0;
          l < u;
          l++
        )
          $('#grid-' + t.id + '-' + n.id).append(
            '<div class="grid-subline"></div>'
          ),
            (r = a[l]),
            $(r).each(function () {
              $('#grid-' + t.id + '-' + n.id + ' .grid-subline:last').append(
                '<div class="grid-subcolumn" style="width: [width]%;"></div>'.Signe(
                  { width: this.width }
                )
              ),
                $(this.fields).each(function () {
                  $(
                    '#grid-' +
                      t.id +
                      '-' +
                      n.id +
                      ' .grid-subline:last .grid-subcolumn:last'
                  ).append(
                    '<div class="ub-fromfield" id="fromfield-[L]-[C]-[F]"></div>'.Signe(
                      { L: t.id, C: n.id, F: this }
                    )
                  );
                });
            });
    m.forEach(function (e) {
      SWAP.layers.clear(e);
    }),
      $('li > div.ub-grid').each(function () {
        '' === $(this).html() && $(this).remove();
      }),
      SWAP.width.grid();
  },
  lines: function () {
    return SAVER.json.lines;
  },
  line: function (e) {
    var t,
      i = this.lines();
    return (
      (e = indexOfLoop(e, i)),
      {
        id: (t = i[e]).id,
        columns: t.columns,
        column: function (e) {
          var i,
            n = t.columns;
          return (
            (e = indexOfLoop(e, n)),
            {
              id: (i = n[e]).id,
              fields: i.fields[0][0].fields,
              field: function (e) {
                var t = i.fields;
                return t[(e = indexOfLoop(e, t))];
              },
            }
          );
        },
        fields: function () {
          var e = [];
          return (
            t.columns.forEach(function (t) {
              e =
                t.fields && t.fields.length
                  ? e.concat(t.fields[0][0].fields)
                  : [];
            }),
            e
          );
        },
      }
    );
  },
};
(window.bottomPanel = $('.bottom-panel__result')),
  (window.groupItems = window.bottomPanel.find('.group-items'));
var addNew = {
  result: function (e) {},
  resultInitVisivig: function (e) {
    var t = e.id,
      i = $(window).height() + 240;
    (bottomPanel.find('.scrollbar-inner.scrollbar-inner-results').height() >
      i &&
      !bottomPanel.find('.scrollbar-inner').hasClass('scroll-content') &&
      (bottomPanel.css('height', i),
      bottomPanel.find('.scrollbar-inner.scrollbar-inner-results').scrollbar(),
      groupItems.css({ position: 'relative', 'padding-right': '10px' })),
    bottomPanel.find('.scrollbar-inner').hasClass('scroll-content')) &&
      $('.bottom-panel__result')
        .find('.scroll-content.scrollbar-inner-results')
        .stop()
        .animate({ scrollTop: 0 }, 1200);
    bottomPanel.find('.result[data-result-id="' + t + '"]').calculator(),
      $('.js-cursor').removeClass('js-cursor js-cursor-right'),
      $('.result-block > .result-content:not(.scroll-wrapper)').scrollbar(),
      CALCULATOR.colorResultLitera(t),
      $('.preview').length > 0 &&
        $('.design-footer').find('input').attr('disabled', 'disabled');
  },
  resultInitTextarea: function (e) {
    var t = e.id,
      i = document.querySelector('.result-textarea-' + t);
    (i.style.height = i.setAttribute(
      'style',
      'height: ' + i.scrollHeight + 'px'
    )),
      i.classList.add('auto'),
      i.addEventListener('input', e => {
        (i.style.height = 'auto'), (i.style.height = i.scrollHeight + 'px');
      }),
      i.addEventListener(
        'input',
        function () {
          (e.formula = i.value), RECALC.go();
        },
        !1
      ),
      i.addEventListener('blur', SAVER.history.newStep);
  },
};
window.Calc2 = new (function () {
  (this.stringMath = function (e) {
    if ('string' != typeof e)
      return g(new TypeError('The [String] argument is expected.'), null);
    for (
      var t,
        i =
          /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*(\^)\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/,
        n =
          /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([*/^])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/,
        a =
          /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([+-])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/,
        r =
          /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*(<|<=|>|>=|!=|=)\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/,
        o =
          /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*(&&)\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/,
        s =
          /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*(\|\|)\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/,
        l = /(\d)?\s*\(([^()]*)\)\s*/;
      -1 === e.search(/^\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*$/);

    ) {
      if ((e = c(e)) === t)
        return g(new SyntaxError('The equation is invalid: ' + e), null);
      t = e;
    }
    return g(null, +e);
    function c(e) {
      for (; -1 !== e.search(l); )
        e = e.replace(l, function (e, t, i) {
          return (
            (i = h((i = m((i = f((i = p((i = u((i = d(i)))))))))))),
            'string' == typeof t ? t + '*' + i : i
          );
        });
      return (e = h((e = m((e = f((e = p((e = u((e = d(e))))))))))));
    }
    function d(e) {
      for (; -1 !== e.search(i); )
        e = e.replace(i, function (e) {
          var t = i.exec(e),
            n = Math.pow(t[1], t[3]);
          return n === 1 / 0 || n === -1 / 0 || isNaN(n)
            ? 0
            : n >= 0
            ? '+' + n
            : n;
        });
      return e;
    }
    function u(e) {
      for (; -1 !== e.search(n); )
        e = e.replace(n, function (e) {
          var t = n.exec(e),
            i = '*' === t[2] ? t[1] * t[3] : t[1] / t[3];
          return i === 1 / 0 || i === -1 / 0 || isNaN(i)
            ? 0
            : i >= 0
            ? '+' + i
            : i;
        });
      return e;
    }
    function p(e) {
      for (
        e = e.replace(/([+-])([+-])(\d|\.)/g, function (e, t, i, n) {
          return (t === i ? '+' : '-') + n;
        });
        -1 !== e.search(a);

      )
        e = e.replace(a, function (e) {
          var t = a.exec(e);
          return '+' === t[2] ? +t[1] + +t[3] : t[1] - t[3];
        });
      return e;
    }
    function f(e) {
      for (; -1 !== e.search(r); )
        e = e.replace(r, function (e) {
          var t = r.exec(e),
            i =
              '<' === t[2]
                ? +t[1] < +t[3]
                  ? 1
                  : 0
                : '<=' === t[2]
                ? +t[1] <= +t[3]
                  ? 1
                  : 0
                : '>' === t[2]
                ? +t[1] > +t[3]
                  ? 1
                  : 0
                : '>=' === t[2]
                ? +t[1] >= +t[3]
                  ? 1
                  : 0
                : '!=' === t[2]
                ? +t[1] != +t[3]
                  ? 1
                  : 0
                : +t[1] == +t[3]
                ? 1
                : 0;
          return i >= 0 ? '+' + i : i;
        });
      return e;
    }
    function m(e) {
      for (; -1 !== e.search(o); )
        e = e.replace(o, function (e) {
          var t = o.exec(e),
            i = +t[1] * +t[3];
          return i >= 0 ? '+' + i : i;
        });
      return e;
    }
    function h(e) {
      for (; -1 !== e.search(s); )
        e = e.replace(s, function (e) {
          var t = s.exec(e),
            i = +t[1] + +t[3];
          return i >= 0 ? '+' + i : i;
        });
      return e;
    }
    function g(e, t) {
      if (null !== e) throw e;
      return t;
    }
  }),
    (this.includeVariables = function (e) {
      for (var t in ((e = e
        .replace(/R([0-9]+)/g, '([r$1])')
        .replace(/([A-Z]+)/g, '[$1]')),
      RECALC.db.letters)) {
        var i = new RegExp('\\[' + t + '\\]', 'g');
        e = e.replace(i, RECALC.db.letters[t]);
      }
      return (e = e
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/≠/g, '!=')
        .replace(/\[([A-Z]+|r[0-9]+)\]/g, '(0)'));
    }),
    (this.closeBrackets = function (e) {
      var t = e.match(
          /(if\(|\){|}else{|}(?!e)|(?!f)\(|\)(?!{)|((?!if\(|\){|}else{|}(?!e)|(?!f)\(|\)(?!{)).)*)/g
        ),
        i = [],
        n = [],
        a = 0,
        r = !1,
        o = function () {
          var e = n.length - 1;
          return n[e] || !1;
        },
        s = function () {
          var e = i.length;
          return i[e - 1].items;
        };
      return (
        t.map(function (e) {
          if (a < 0) r = !0;
          else {
            var t = (function (e) {
                switch (e) {
                  case 'if(':
                    return 0;
                  case '){':
                    return 1;
                  case '}else{':
                    return 2;
                  case '}':
                    return 3;
                  case '(':
                    return 4;
                  case ')':
                    return 5;
                  default:
                    return 6;
                }
              })(e),
              l = a - 1;
            switch (t) {
              case 1:
              case 2:
              case 3:
                !(function () {
                  for (var e, t = n.length - 1, i = !1; t >= 0 && !i; t--)
                    2 === (e = n[t]).type
                      ? (!1 === e.promise[1] && s().push(')'),
                        (n = n.slice(0, t)),
                        a--)
                      : (i = !0);
                })();
            }
            switch (t) {
              case 3:
              case 5:
                if (!n.hasOwnProperty(l)) return;
            }
            switch (t) {
              case 3:
                if (1 !== n[l].type) return;
            }
            switch (t) {
              case 5:
                if (2 !== n[l].type) return;
            }
            switch (t) {
              case 1:
              case 2:
              case 3:
              case 5:
                a--;
            }
            switch ((i.push({ level: a, items: [e] }), t)) {
              case 1:
              case 2:
                a++;
            }
            switch (t) {
              case 1:
                o().promise[1] = !0;
                break;
              case 2:
                o().promise[2] = !0;
                break;
              case 3:
                o().promise[3] = !0;
                break;
              case 5:
                o().promise[1] = !0;
            }
            switch (t) {
              case 0:
                a++, n.push({ type: 1, promise: [!0, !1, !1, !1] });
                break;
              case 4:
                a++, n.push({ type: 2, promise: [!0, !1] });
                break;
              case 1:
              case 2:
              case 3:
              case 5:
                n = n.slice(0, a);
            }
          }
        }),
        r
          ? ''
          : ((function () {
              for (var e, t = n.length - 1; t >= 0; t--)
                2 === (e = n[t]).type
                  ? !1 === e.promise[1] && s().push(')')
                  : (!1 === e.promise[1] && s().push('){'),
                    !1 === e.promise[2] && s().push('}else{'),
                    !1 === e.promise[3] && s().push('}')),
                  (n = n.slice(0, t)),
                  a--;
            })(),
            i
              .map(function (e) {
                return e.items.join('');
              })
              .join(''))
      );
    }),
    (this.valid = function (e) {
      return e
        .replace(/if\(\s*\){\s*}else{\s*}/g, '')
        .replace(/if\(\s*([^A-Z0-9]+[^{><!=]*?)\){/g, 'if($1>0){')
        .replace(/if\(\s*\){/g, 'if(' + this.actualIf() + '){')
        .replace(/{\s*}else/g, '{1}else')
        .replace(/else{\s*}/g, 'else{0}')
        .replace(/\.+/g, '.')
        .replace(/\.([^0-9])/g, '.0$1')
        .replace(/([^0-9])\./g, '$10.')
        .replace(/([-+*/^])+/g, '$1')
        .replace(/\([()\s-+*/^.]*\)/g, '')
        .replace(/(>=|<=|!=|=|&&|\|\|)(>|>=|<|<=|!=|=|&&|\|\|)/g, '$1')
        .replace(/(<|>)(>|>=|<|<=|!=|&&|\|\|)/g, '$1')
        .replace(/(\()(>|>=|<|<=|!=|=|&&|\|\|)/g, '$1')
        .replace(/(>|>=|<|<=|!=|=|&&|\|\|)(\))/g, '$2')
        .replace(/([^+\-*/^{])if/g, '$1+if')
        .replace(/([0-9]+\.[0-9]+)\.([0-9]+)/g, '$1$2');
    }),
    (this.validInner = function (e) {
      return e
        .replace(/((\+|-)([0-9.]+))%/g, '*(100$1)%')
        .replace(/%/g, '/100');
    }),
    (this.actualIf = function () {
      return 'A>0';
    }),
    (this.ifElse = function (e) {
      if (null == e.match(/.*if\(.*\){.*}else{.*}.*/)) return e;
      var t,
        i,
        n,
        a,
        r = e.match(/(if\(|\){|}else{|}(?!e)|((?!if\(|\){|}else{|}(?!e)).)*)/g),
        o = 0;
      r.map(function (e, r) {
        switch (
          (function (e) {
            switch (e) {
              case 'if(':
                return 'if';
              case '){':
                return 'then';
              case '}else{':
                return 'else';
              case '}':
                return 'endif';
              default:
                return 'any';
            }
          })(e)
        ) {
          case 'if':
            1 == ++o && (t = r);
            break;
          case 'then':
            0 == --o && (i = r), o++;
            break;
          case 'else':
            0 == --o && (n = r), o++;
            break;
          case 'endif':
            0 == --o && (a = r);
        }
      });
      var s,
        l,
        c = r.slice(t + 1, i).join(''),
        d = r.slice(i + 1, n).join(''),
        u = r.slice(n + 1, a).join('');
      return (
        (s = this.condition(c) ? '(' + d + ')' : '(' + u + ')'),
        r.splice(t, a - t + 1, s),
        (l = r.join('')),
        this.ifElse(l)
      );
    }),
    (this.condition = function (e) {
      var t = new RegExp('(>=|>|<=|<|!=|=)([^&|]+?)(>=|>|<=|<|!=|=)', 'g');
      return (
        (e = e.replace(t, '$1$2&&$2$3')),
        t.test(e) ? this.condition(e) : this.stringMath(e) > 0
      );
    }),
    (this.checkValid = function (e) {
      var t = this.closeBrackets(e),
        i = !0;
      return '' !== e && '' === t && (i = !1), i;
    }),
    (this.getValid = function (e) {
      return (
        (e = this.closeBrackets(e)),
        (e = this.includeVariables(e)),
        this.valid(e)
      );
    }),
    (this.getSum = function (e) {
      return !1 === this.checkValid(e)
        ? 0
        : ((e = this.getValid(e)),
          (e = this.validInner(e)),
          (e = this.ifElse(e)),
          this.stringMath(e || '0'));
    });
})();
var USE_FANCY_MULT_DIV_SYMBOLS = !0,
  FANCY = { MULT_SYMBOL: '×', DIV_SYMBOL: '÷', NO_EQUAL: '≠', SPACE: '♦' },
  REAL = { MULT_SYMBOL: '*', DIV_SYMBOL: '/', NO_EQUAL: '!=', SPACE: ' ' },
  TO_CLIPBOARD = '©',
  CALC_svg =
    '<svg version="1.1" id="[id]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 12 12" style="enable-background:new 0 0 12 12;" xml:space="preserve"><style type="text/css">.st0{fill:none;}.st1{fill:#ffffff;}</style>[vector]</svg>';
(CALCULATOR = {
  ifKey: '♞',
  boolenKey: '♛',
  _initializedResultsData: { initializedCalcsCount: 0, allInitialized: !1 },
  _safelyStringToNumber: function (e) {
    var t = 0;
    e = e.toString();
    try {
      t = parseFloat(e);
    } catch (e) {
      t = 0;
    }
    return (
      (t === 1 / 0 || t === -1 / 0 || -0 === t || isNaN(t)) && (t = 0),
      new Number(t)
    );
  },
  revalidateFieldValue: function (e) {
    var t = $(e),
      i = t.val(),
      n = t.attr('data-validator'),
      a = {
        anyNumber: function (e) {
          var t = 0 === e.indexOf('-');
          e = e.replace(/\.+/g, '.').replace(/[^0-9.]/g, '');
          var i = CALCULATOR._safelyStringToNumber(e || '');
          return t && (i = -i), i.toString();
        },
      };
    if (!n) return i;
    if (n in a) {
      var r = a[n];
      r && (i = r(i) || i);
    }
    return i;
  },
}),
  $(document).ready(function () {}),
  $(document).ready(function () {
    CALCULATOR.ResultCalculator = (function (e) {
      'use strict';
      var t = {
        А: 'A',
        Б: 'B',
        В: 'V',
        Г: 'G',
        Д: 'D',
        Е: 'E',
        З: 'Z',
        И: 'I',
        К: 'K',
        Л: 'L',
        М: 'M',
        Н: 'N',
        О: 'O',
        П: 'P',
        Р: 'R',
        С: 'S',
        Т: 'T',
        У: 'U',
        Ф: 'F',
        Х: 'H',
      };
      function i(t, a, o) {
        var s = [],
          l = '';
        if ('ifElse' == o) {
          for (
            var c = (function (e) {
                var t, n;
                e = e.replace(/≠/g, '!=');
                var a = {
                    '>=': function (e, t) {
                      return e >= t;
                    },
                    '<=': function (e, t) {
                      return e <= t;
                    },
                    '==': function (e, t) {
                      return e == t;
                    },
                    '!=': function (e, t) {
                      return e != t;
                    },
                    '=': function (e, t) {
                      return e == t;
                    },
                    '>': function (e, t) {
                      return e > t;
                    },
                    '<': function (e, t) {
                      return e < t;
                    },
                  },
                  r = '(>=|<=|==|!=|≠|=|<|>)',
                  o = r + '\\s([^&|]+?)\\s' + r,
                  s = function (e) {
                    return e
                      .replace(
                        new RegExp('\\s' + r + '\\s', 'g'),
                        CALCULATOR.boolenKey + '$1' + CALCULATOR.boolenKey
                      )
                      .split(CALCULATOR.boolenKey);
                  },
                  l = function (e) {
                    return (
                      (e = e.replace(new RegExp(o, 'g'), '$1 $2&&$2 $3')),
                      new RegExp(o, 'g').test(e) ? l(e) : e
                    );
                  },
                  c = (e = l(e))
                    .replace(
                      /(&&|\|\||\(|\))/g,
                      CALCULATOR.boolenKey + '$1' + CALCULATOR.boolenKey
                    )
                    .replace(
                      new RegExp(
                        CALCULATOR.boolenKey + CALCULATOR.boolenKey,
                        'g'
                      ),
                      CALCULATOR.boolenKey
                    )
                    .split(CALCULATOR.boolenKey),
                  d = -1;
                return (
                  (t = 0),
                  (n = 0),
                  c.forEach(function (e, i, n) {
                    var a = function (e) {
                      return /^\s(\*|\/|\^)/g.test(e);
                    };
                    if (t || '' != s(e)[2])
                      if (t || '' != s(e)[0])
                        d >= 0 &&
                          ('(' == n[i] && t++,
                          (t || a(n[i])) && (n[d] += n[i]),
                          ')' == n[i] && t--,
                          t || a(n[i + 1]) || (d = -1),
                          (n[i] = ''));
                      else {
                        d = i;
                        var r = (function (e, t) {
                          for (
                            var i = '', n = t - 1;
                            n >= 0 && '&&' != e[n] && '||' != e[n];
                            n--
                          )
                            (i = e[n] + i), (e[n] = '');
                          return i;
                        })(n, i);
                        (n[i] = r + n[i]), (d = -1);
                      }
                    else d = i;
                  }),
                  (t = 0),
                  (n = 0),
                  c.forEach(function (e, r, o) {
                    var l = e.match(/\(|\)/g);
                    if (
                      ('(' == e[0] &&
                        ')' == e[e.length - 1] &&
                        null != l &&
                        2 == l.length &&
                        (e = e.substr(1, e.length - 2)),
                      '&&' == e)
                    )
                      o[r] = ' * ';
                    else if ('||' == e) o[r] = ' + ';
                    else if ('(' == e) (o[r] = '('), t++, n || (n = r + 1);
                    else if (')' == e) {
                      if (((o[r] = ')'), 0 == --t)) {
                        for (var c = o.slice(n, r).join(''), d = n; d < r; d++)
                          o[d] = '';
                        (o[r - 1] = new i(c, 0).getGroupResult() / 1), (n = 0);
                      }
                    } else {
                      if ('' == e) return;
                      var u = s(e);
                      1 == u.length && (u.push('>'), u.push(0));
                      var p = u[1],
                        f = new i(u[0], 0).getGroupResult() / 1,
                        m = new i(u[2], 0).getGroupResult() / 1;
                      o[r] = a[p](f, m) ? 1 : 0;
                    }
                  }),
                  new i((e = c.join('')), 0).getGroupResult() / 1
                );
              })(t.replace(/^if\s\(/, '').replace(/\)\{.*/, '')),
              d = ((t = t.replace(/.*?\)\{/, '').replace(/}$/, '')), []),
              u = 0,
              p = 0;
            p < t.length;
            p++
          ) {
            var f = t[p],
              m = t[p + 1];
            if (('{' == f && u++, '}' == f && u--, -1 == u && 'e' == m)) {
              (d[0] = t.substring(0, p)), (d[1] = t.substring(p + 6, t.length));
              break;
            }
          }
          t = c ? d[0] : d[1];
        }
        !(function (e) {
          null == e && console.error('aa');
          for (
            var t = 0, n = 0, r = 0, o = !0, c = !0, d = '', u = 0;
            u < e.length;
            u++
          ) {
            var p = e[u],
              f = e[u + 1],
              m = function (p) {
                if (0 === t && !p) {
                  if (((l += e.substring(r, n)), (r = u + 1), o)) {
                    if (!c) f = 0;
                  } else var f = 1;
                  var m = new i(e.substring(n + f, r - f), a + 1, d),
                    h = s.push(m) - 1;
                  (l += '{gID}'.replace('ID', h)), (d = ''), (o = !0), (c = !0);
                }
              };
            '(' === p && (t++, o && c && ((o = !1), (n = u))),
              ')' === p && (t--, m(o)),
              p + f === 'if' &&
                (t++, o && c && ((c = !1), (n = u), (d = 'ifElse'))),
              '}' === p && 'e' != f && 0 === --t && m(c),
              e.length - u == 1 && (o || (e += ')'), c || (e += '}'));
          }
          l += String(e).substring(r);
        })(t);
        var h = function (t, i) {
            for (var n = 0; n < i.length; n++) {
              var a = i[n];
              if (e.inArray(a, t) >= 0) return !0;
            }
            return !1;
          },
          g = function (t, i) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              if (e.inArray(a, i) >= 0) return { item: a, index: n };
            }
            return null;
          };
        (this.getIndentation = function () {
          for (var e = '', t = 0; t <= a; t++) e += '..';
          return e;
        }),
          (this.getGroupResult = function () {
            for (var e = l.valueOf(), t = 0; t < s.length; t++) {
              var i = s[t],
                a = '{gID}'.replace('ID', t),
                o = i.getGroupResult();
              e = e.replace(a, o);
            }
            var c = new r(),
              d = new n(e);
            return (
              c.getOperationsQueue().forEach(function (e) {
                for (var t = d.getItems(); h(t, e); ) {
                  var i = g(t, e);
                  if (!i) break;
                  var n = i.index,
                    a = d.prevItem(n),
                    r = i.item,
                    o = d.nextItem(n),
                    s = c.getOperationBySign(r);
                  if (s.getResult) {
                    var l = s.getResult(a, r, o),
                      u = s.getUsedOperatorsData();
                    d.setItemByIndex(n + u.resultOperatorIndex, l),
                      d.shiftItems(n, u.usedOperatorsCount);
                  }
                }
              }),
              d.getTotalValue()
            );
          }),
          (this.printHierarchy = function () {
            var e = s
              .map(function (e) {
                return (
                  '<br>' +
                  e.getIndentation() +
                  ' ' +
                  e.printHierarchy() +
                  ' = ' +
                  e.getGroupResult()
                );
              })
              .join('');
            return l + e;
          });
      }
      function n(e) {
        var t = this,
          i = [];
        !(function (e) {
          i = e.split(' ');
        })(e),
          (t.getItems = function () {
            return i;
          }),
          (t.getItemsLength = function () {
            return i.length;
          }),
          (t.getItemByIndex = function (e) {
            return i[e];
          }),
          (t.prevItem = function (e) {
            return t.getItemByIndex(e - 1) || null;
          }),
          (t.nextItem = function (e) {
            return t.getItemByIndex(e + 1) || null;
          }),
          (t.setItemByIndex = function (e, t) {
            i[e] = '' + t;
          }),
          (t.shiftItems = function (e, t) {
            i.splice(e, t);
          }),
          (t.getTotalValue = function () {
            return i[0];
          });
      }
      function a(e, t) {
        (this.getResult = function (t, i, n) {
          return e(t, i, n);
        }),
          (this.getUsedOperatorsData = function () {
            return t;
          });
      }
      function r() {
        var e = function (e) {
            var t = 0,
              i = '' + e;
            try {
              t = parseFloat(i);
            } catch (e) {
              t = 0;
            }
            return (
              (t === 1 / 0 || -0 === t || isNaN(t)) && (t = 0), new Number(t)
            );
          },
          t = {
            '^': new a(
              function (t, i, n) {
                var a = e(t),
                  r = e(n);
                return Math.pow(a, r);
              },
              { resultOperatorIndex: -1, usedOperatorsCount: 2 }
            ),
            '*': new a(
              function (t, i, n) {
                return e(t) * e(n);
              },
              { resultOperatorIndex: -1, usedOperatorsCount: 2 }
            ),
            '/': new a(
              function (t, i, n) {
                var a = e(t) / e(n);
                return a === 1 / 0 && (a = 0), a;
              },
              { resultOperatorIndex: -1, usedOperatorsCount: 2 }
            ),
            '+': new a(
              function (t, i, n) {
                return e(t) + e(n);
              },
              { resultOperatorIndex: -1, usedOperatorsCount: 2 }
            ),
            '-': new a(
              function (t, i, n) {
                return e(t) - e(n);
              },
              { resultOperatorIndex: -1, usedOperatorsCount: 2 }
            ),
          },
          i = [['^'], ['*', '/'], ['+', '-']];
        (this.getOperationsQueue = function () {
          return i;
        }),
          (this.getOperationBySign = function (e) {
            return t[e] || {};
          });
      }
      var o = function (e) {
          return new RegExp('^[0-9]$').test(e);
        },
        s = function (e) {
          return new RegExp('^[A-ZА-Я]+$').test(e);
        },
        l = function (e) {
          return new RegExp('\\(|if\\(').test(e);
        },
        c = function (e) {
          return new RegExp('\\)|\\){|}else{|}').test(e);
        },
        d = function (e) {
          return new RegExp('\\*|\\/|\\+|\\-|\\^|×|÷').test(e);
        },
        u = function (e) {
          return '%' === e;
        },
        p = function (e) {
          return '.' === e;
        },
        f = function (e, t, i) {
          t = t || '';
          var n = o((i = i || '')) || l(i) || s(i) || '' === i;
          return (l(t) || '' === t) && '-' === e && n;
        },
        m = function (e, t) {
          return e.split(t).length - 1;
        },
        h = function (t, i) {
          return t.filter(function (t, n) {
            return e.inArray(n, i) < 0;
          });
        },
        g = function (e) {
          return ~getAllActiveLetters().indexOf(e);
        },
        v = function (e) {
          return 'IF' == e.toUpperCase() || 'if(' == e;
        },
        y = function (e) {
          return '){' == e;
        },
        E = function (e) {
          return '}else{' == e;
        },
        b = function (e) {
          return '}' == e;
        },
        S = function (e) {
          return new RegExp('>=|<=|!=|=|≠|<|>').test(e);
        },
        R = function (e) {
          return new RegExp('^(&&|\\|\\||&|\\||' + loc['И'] + ')$').test(e);
        },
        A = function (e) {
          return new RegExp('^R[0-9]+$').test(e);
        },
        w = {};
      return (
        (w.normalizeAndSplitFormula = function (e, i) {
          return (function (e, i) {
            var n = (e = (e = e
                .replace(new RegExp(FANCY.MULT_SYMBOL, 'g'), '*')
                .replace(new RegExp(FANCY.DIV_SYMBOL, 'g'), '/')
                .replace(new RegExp(loc['ИЛИ'], 'g'), '||')
                .replace(new RegExp(loc['И'], 'g'), '&&')
                .replace(/\s/g, '')
                .replace(/if\(\)/g, 'if(' + FANCY.SPACE + ')')
                .replace(/\{\}/g, '{' + FANCY.SPACE + '}')).replace(
                /[А-Я]/g,
                function (e) {
                  return e in t ? t[e] : e;
                }
              ))
                .replace(/(\+|\-|\*|\/|\^)(-\d+)/g, '$1($2)')
                .replace(/(\+|\-|\*|\/|\^)(-[A-Z])/g, '$1($2)')
                .replace(/\)\(/g, ')*(')
                .replace(/\.(\+|\-|\*|\/|\^)/g, '.0$1')
                .replace(/(\+|\-|\*|\/|\^)\./g, '$10.'),
              a = e.split('');
            e.indexOf('(') > 0 &&
              (a = a.filter(function (e, t) {
                return !(')' === e && t <= r);
              }));
            var r = e.lastIndexOf(')');
            r >= 0 &&
              (a = a.filter(function (e, t) {
                return !('(' === e && t >= r);
              }));
            var w = a.join(''),
              C = m(w, '(') - m(w, ')');
            if (C > 0) {
              for (var x = 0, T = a.length - 1, _ = []; T >= 0; ) {
                var $ = a[T],
                  I = a[T + 1],
                  L = a[T - 1];
                ')' === $ && '{' != I && x++,
                  '(' === $ && 'f' != L && x--,
                  x < 0 && (_.push(T), (x = 0)),
                  T--;
              }
              _.length > 0 && (a = h(a, _));
            }
            if (C < 0) {
              for (x = 0, T = 0, _ = []; T < a.length; )
                ($ = a[T]),
                  (I = a[T + 1]),
                  (L = a[T - 1]),
                  ')' === $ && '{' != I && x--,
                  '(' === $ && 'f' != L && x++,
                  x < 0 && (_.push(T), (x = 0)),
                  T++;
              _.length > 0 && (a = h(a, _));
            }
            var k = (k = a
                .join('')
                .replace(/(\+|\-|\*|\/|\^)(-\d+)/g, '$1($2)')
                .replace(/(\+|\-|\*|\/|\^)(-[A-Z])/g, '$1($2)')
                .replace(/R([0-9]+)/g, 'R#$1')
                .replace(/([A-Z])([0-9])/g, '$1*$2')
                .replace(/([0-9])([A-Z])/g, '$1*$2')
                .replace(/R\#([0-9]+)/g, 'R$1')
                .replace(/(\+|\-|\*|\/|\^)+/g, '$1')
                .replace(/\([\(\)\s-+*/^.]*\)/g, '')
                .replace(/\)\(/g, ')*(')
                .replace(/\.(\+|\-|\*|\/|\^|>=|<=|!=|≠|=|<|>)/g, '.0$1')
                .replace(/(\+|\-|\*|\/|\^|>=|<=|!=|≠|=|<|>)\./g, '$10.')
                .replace(/([^0-9\.])0([0-9])/g, '$1$2')
                .replace(/\.+/g, '.')
                .replace(/\((>=|<=|!=|≠|=|<|>)/g, '(')
                .replace(/\}([A-Z\()])/g, '}+$1')
                .replace(/(>=|<=|!=|≠|=|<|>)(\+|\-|\*|\\|\^)/g, '$1')
                .replace(
                  /if\(([^!≠=<>]+)[!=≠<>]+([^!=≠=<>\{]+(\{*))/g,
                  function (e, t, i, n) {
                    var a = t.replace(/^\(/, '').replace(/\)$/, '');
                    return a ==
                      i
                        .replace(/^\(/, '')
                        .replace(/\)\{$/, '')
                        .replace(/\)$/, '')
                      ? 'if(' + a + ('' == n ? n : ')' + n)
                      : e;
                  }
                )
                .replace(/\){/g, '╣){')
                .replace(/if\(([^!=≠=<>╣]+?)╣\)\{/g, 'if($1>0){')
                .replace(/╣/g, '')
                .replace(/([^\+\-\*\/\^\{])if/g, '$1+if')
                .replace(/([^&])&([^&])/g, '$1&&$2')
                .replace(/([^\|])\|([^\|])/g, '$1||$2')
                .replace(/\(([0-9A-Z\.]+)\)/g, '$1')
                .replace(/([0-9]+\.[0-9]+)\.([0-9]+)/g, '$1$2')).replace(
                /if.+?\{/g,
                function (e) {
                  var t = e
                      .replace(/^if\(/, '')
                      .replace(/\){$/, '')
                      .match(
                        /([A-Z]+|if\(|\)\{|\}else\{|\}|>=|<=|!=|≠|=|<|>|&&|\|\||♦|.)/g
                      ),
                    i = [],
                    n = 0,
                    a = 0,
                    r = 0;
                  return (
                    null != t &&
                      t.forEach(function (e, o) {
                        var s = '',
                          l = t.slice(o).join(''),
                          c = l.match(/\(/g),
                          d = l.match(/\)/g);
                        if (
                          ((c = null == c ? (c = 0) : c.length),
                          (d = null == d ? (d = 0) : d.length),
                          null != e.match(/>=|<=|!=|≠|=|<|>/g))
                        ) {
                          if (++n != a && d - c != 1 && r > 0) {
                            for (var u = r; u > 0; u--) i.push(')'), (s += '(');
                            r = 0;
                          }
                        } else null != e.match(/&&|\|\|/g) ? a++ : '(' == e ? r++ : ')' == e && r--;
                        i.push(e + s);
                      }),
                    'if(' + i.join('') + '){'
                  );
                }
              ),
              V = [];
            a = k.match(/(R[0-9]+|[A-Z]+|if\(|\){|}else{|}|&&|\|\||.)/g);
            var j = null;
            null == a && (a = ['']),
              a.forEach(function (e, t) {
                var i = !1,
                  n = a[t + 1] || '';
                new RegExp('<|>|!').test(e) &&
                  '=' == n &&
                  ((e += n), (n = a[t + 2] || '')),
                  o(e) &&
                    ((null === j ||
                      l(j) ||
                      d(j) ||
                      o(j) ||
                      p(j) ||
                      f(e, j, n) ||
                      S(j) ||
                      R(j) ||
                      A(j)) &&
                      (V.push(e), (i = !0)),
                    (s(j) || c(j)) && (V.push(e), (i = !0))),
                  (s(e) && g(e)) || A(e)
                    ? ((null === j || l(j) || d(j) || S(j) || R(j)) &&
                        (V.push(e), (i = !0)),
                      (s(j) || o(j) || c(j)) && (V.push(e), (i = !0)))
                    : s(e) &&
                      !g(e) &&
                      (((S(j) || R(j)) && c(n)) || d(j)) &&
                      ((i = !0), V.splice(V.length - 1, 1)),
                  f(e, j, n)
                    ? ((i = !0), V.push(e))
                    : (d(e) || S(e) || R(e)) &&
                      (o(j) || s(j) || A(j) || c(j) || u(j)) &&
                      (o(n) || l(n) || s(n) || A(n)) &&
                      ((i = !0), V.push(e)),
                  p(e) && o(j) && o(n) && ((i = !0), V.push(e)),
                  l(e) &&
                    (null === j || l(j) || S(j) || R(j) || d(j) || y(j) || E(j)
                      ? ((i = !0), V.push(e))
                      : v(e) && (y(j) || E(j))
                      ? ((i = !0), V.push(e))
                      : (s(j) || o(j)) && ((i = !0), V.push('*'), V.push(e))),
                  c(e) &&
                    (o(j) || s(j) || A(j) || c(j) || u(j)) &&
                    ((i = !0), V.push(e)),
                  u(e) &&
                    (o(j) || s(j) || A(j) || c(j) || b(j)) &&
                    ((i = !0), V.push(e)),
                  i && (j = V[V.length - 1]);
              });
            var O = V.join('');
            return (
              USE_FANCY_MULT_DIV_SYMBOLS &&
                ((O = O.replace(/\*/g, FANCY.MULT_SYMBOL).replace(
                  /\//g,
                  FANCY.DIV_SYMBOL
                )),
                (n = n
                  .replace(/\*/g, FANCY.MULT_SYMBOL)
                  .replace(/\//g, FANCY.DIV_SYMBOL))),
              { formula: O, validatedSoftly: 'strict' === i ? O : n }
            );
          })(e, i || 'strict');
        }),
        (w.calculateFormula = function (e, t) {
          t < 0 && (t = 2);
          var n = new i(
            (e = e
              .replace(/×/g, '*')
              .replace(/÷/g, '/')
              .replace(/(\+|\-|\*|\/|\^|>|<|\!|=|≠)/g, ' $1 ')
              .replace(/(>|<|\!|=)\s\s(>|<|\!|=|≠)/g, '$1$2')
              .replace(/(if)/g, '$1 ')),
            0
          ).getGroupResult();
          n.indexOf('.');
          return n;
        }),
        (w.Checker = {
          isDigit: o,
          isMathOperationSymbol: d,
          isPercent: u,
          isPointSymbol: p,
          isOpenBracket: l,
          isCloseBracket: c,
          isUpperCaseLetter: s,
          isLowerCaseLetter: function (e) {
            return new RegExp('^[a-zа-я]+$').test(e);
          },
          isIllegalSymbol: function (e) {
            return new RegExp('[^A-ZА-Яа-я0-9a-z+*/^%.(){}&|!=≠<>♦-]').test(e);
          },
          isBeginnerSymbol: function (t) {
            var i = !1;
            return (
              e(Object.keys(RECALC.db.letters)).each(function () {
                if (0 == this.indexOf(t)) return (i = !0), !1;
              }),
              i
            );
          },
          isIfOpen: v,
          isIfClose: y,
          isElse: E,
          isEndIf: b,
          isCompare: S,
          isNoEqual: function (e) {
            return new RegExp('!=|≠').test(e);
          },
          isLogic: R,
          isAnd: function (e) {
            return new RegExp('&&').test(e);
          },
          isOr: function (e) {
            return new RegExp('\\|\\|').test(e);
          },
          isSpace: function (e) {
            return new RegExp('(' + FANCY.SPACE + '|\\s)').test(e);
          },
          isElementLetter: function (e) {
            return new RegExp('^[A-Z]+$').test(e);
          },
          isResultSymbol: A,
          isNeedResult: function (e) {
            return new RegExp('R[0-9]+').test(e);
          },
        }),
        (w.Translater = {
          translateLetter: function (e) {
            return e in t ? t[e] : e;
          },
        }),
        w
      );
    })(jQuery);
  }),
  $(document).ready(function () {
    CALCULATOR.getTextarea = function (e) {
      var t = e.formula;
      for (var i in FANCY) t = t.replace(new RegExp(FANCY[i], 'g'), REAL[i]);
      return '<textarea class="result-textarea result-textarea-[id]" data-id="[id]">[formula_textarea]</textarea>'
        .Signe(e)
        .Signe({ formula_textarea: t });
    };
  });
var DAT = {
    newR: function () {
      return (
        $('.result-block').length || (this._rid = 0), this._rid++, this._rid
      );
    },
    _rid: 0,
    newL: function () {
      return this._lid++, this._lid;
    },
    _lid: 0,
    newC: function () {
      return this._cid++, this._cid;
    },
    optionId: function (e) {
      return 1e5 * e.id + DAT.getRandomInt(0, 9e4);
    },
    saveInterval: 4e3,
    lastSAveTimestump: 0,
    minWidth: 320,
    maxWidth: 960,
    manyResults: () => 'text' === SAVER.json.calc.formulaEditor,
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    options: { expires: 3e3, path: '/' },
    mediumToolbarSleep: 0,
    mediumRengySelect: 0,
    mediumRangySave: 1,
    higlightStart: 0,
    freeOut: 0,
    fast: 0,
    os: (/(win|mac|linux|sunos|solaris|iphone|ipad)/.exec(
      navigator.platform.toLowerCase()
    ) ||
      (u && [u]) || ['undefined'])[0].replace('sunos', 'solaris'),
    browser: function () {
      var e = navigator.userAgent;
      return e.search(/Chrome/) > 0
        ? 'Google Chrome'
        : e.search(/Firefox/) > 0
        ? 'Firefox'
        : e.search(/Opera/) > 0
        ? 'Opera'
        : e.search(/Safari/) > 0
        ? 'Safari'
        : e.search(/MSIE/) > 0
        ? 'Internet Explorer'
        : loc['Не определен'];
    },
    webkit:
      /webkit/i.test(navigator.userAgent) &&
      !/edge\/\d+/i.test(navigator.userAgent),
    getRandomInt: function (e, t) {
      return Math.floor(Math.random() * (t - e + 1)) + e;
    },
    objByString: function (e) {
      var t,
        i = e.split('.'),
        n = i.length,
        a = window,
        r = '',
        o = /(.*)\[(.*)\]/g;
      for (
        t = 0;
        t < n &&
        (-1 != i[t].indexOf('[') &&
          ((r = i[t].replace(o, '$2')), (i[t] = i[t].replace(o, '$1'))),
        void 0 !== (a = a[i[t]])) &&
        ('' !== r && ((a = a[r]), (r = '')), void 0 !== a);
        t += 1
      );
      return a;
    },
    nextItem: function (e, t, i) {
      for (var n = e + t / 1; !(n >= 0); ) n = i + n;
      for (; !(n < i); ) n -= i;
      return n;
    },
    timestump: function () {
      return Math.round(new Date().getTime() / 1e3);
    },
    varName: function (e) {
      var t = e,
        i = e,
        n = 0,
        a = this.alphabet.match(/./g),
        r = a.length,
        o = [],
        s = function () {
          (i = Math.floor(t / r) * r),
            0 === (n = t - i) && ((n = r), (i -= r)),
            o.unshift(a[n - 1]),
            (t = i / r),
            i > 0 && s();
        };
      return s(), o.join('');
    },
    getLetterDb: {
      input_checkbox: '',
      input_radio: '',
      input_text: '',
      selector: '',
      slider: '',
      result: 'R',
    },
    itsApi: $('.its-api').length,
    itsFrame: $('.its-frame').length,
    itsCreate: $('.body-create').length,
    valid: {
      email: function (e) {
        return (e = (e = e.match(/[a-zA-Z0-9\.\-_@]*/g).join(''))
          .replace(/^(\.|-)/g, '')
          .replace(/(\.|-)@/g, '@')
          .replace(/\.\./g, '.')
          .replace(/--/g, '-')
          .replace(/(^.*@.*)@(.*)/g, '$1$2')
          .replace(/^(@)(.*)/g, function (e, t, i) {
            return t + DAT.valid.domain(i);
          }));
      },
      url: function (e) {
        return (
          (e = e.replace(/^\s+|\s+$/g, '')),
          (e = (e = new RegExp('^(https?:\\/\\/|mailto:|skype:)').test(e)
            ? e
            : e.replace(/^[a-z-]*?:\/?\/?/g, '').replace(/^(.*)/g, 'http://$1'))
            .replace(/(mailto:|skype:)\/?\/?/, '$1')
            .replace(/^.*?:\/?\/?$/, '')
            .replace(
              /^(https?:\/\/)([a-zA-Zа-яА-Я0-9\.\-]*)/g,
              function (e, t, i) {
                return t + DAT.valid.domain(i);
              }
            )
            .replace(/^(mailto:)(.*)/g, function (e, t, i) {
              return t + DAT.valid.email(i);
            }))
        );
      },
      domain: function (e) {
        return (e = (e = e.match(/[a-zA-Zа-яА-Я0-9\.\-]*/g).join(''))
          .replace(/(^\.|^-)/g, '')
          .replace(/\.\./g, '.')
          .replace(/\.-/g, '.')
          .replace(/-\./g, '-')
          .replace(/\.c$/g, '.com')
          .replace(/\.cm$/g, '.com')
          .replace(/\.om$/g, '.com')
          .replace(/\.r$/g, '.ru')
          .replace(/\.or$/g, '.org')
          .replace(/\.og$/g, '.org')
          .replace(/\.ne$/g, '.net')
          .replace(/\.nt$/g, '.net')
          .replace(
            /([^.]+\..*([^a-zA-Zа-яА-Я]{2}|[^a-zA-Zа-яА-Я].))$/g,
            '$1.com'
          ));
      },
    },
  },
  SAVER = {
    paused: 0,
    jsonOptimize: function () {
      var e = SAVER.json.calc.v || 0;
      var t = 1,
        i = 1,
        n = 1;
      SAVER.json.fields.forEach(function (e) {
        var a =
            /(<|\&lt\;)script.*?(>|\&gt\;)(.|\n)*?(<|\&lt\;)\/script.*?(>|\&gt\;)/g,
          r = Object.keys(e),
          o = '',
          s = FIELDS[e.type].signe;
        r.forEach(function (t) {
          (o = e[t]),
            s.hasOwnProperty(t)
              ? 'string' == typeof o &&
                (0 == isNaN(o / 1) &&
                '' != o &&
                ' ' != o &&
                -1 == o.search(/.*\..*0$/) &&
                0 !== o.indexOf('+')
                  ? (e[t] = o / 1)
                  : 'true' == o
                  ? (e[t] = !0)
                  : 'false' == o
                  ? (e[t] = !1)
                  : -1 != o.search(a) &&
                    'content' != t &&
                    (e[t] = o.replace(a, '')))
              : delete e[t],
            ('adminEmailTemplate' != t &&
              'adminSmsTemplate' != t &&
              'userEmailTemplate' != t &&
              'userSmsTemplate' != t) ||
              (e[t] = o
                .replace(/<Поле\sguy/g, '<Field guy')
                .replace(/<Результат\sguy/g, '<Result guy')
                .replace(/<Название\sпроекта/g, '<Project name')
                .replace(/<Название\sкалькулятора/g, '<Project name')
                .replace(/<Адрес\sсайта/g, '<Website address'));
        }),
          ('selector' != e.type &&
            'input_checkbox' != e.type &&
            'input_radio' != e.type) ||
            e.options.forEach(function (e) {
              Object.keys(e).forEach(function (t) {
                'string' == typeof e[t] &&
                  -1 != e[t].search(a) &&
                  (e[t] = e[t].replace(a, ''));
              });
            }),
          'button' == e.type &&
            (e.amo.deal.active.forEach(function (e, t, i) {
              i[t] /= 1;
            }),
            e.amo.list.active.forEach(function (e, t, i) {
              i[t] /= 1;
            }),
            e.amo.task.active.forEach(function (e, t, i) {
              i[t] /= 1;
            }),
            'true' == e.amo.check ? (e.amo.check = !0) : (e.amo.check = !1),
            'true' == e.bitrix.check
              ? (e.bitrix.check = !0)
              : (e.bitrix.check = !1),
            'true' == e.bitrix.lead.check
              ? (e.bitrix.lead.check = !0)
              : (e.bitrix.lead.check = !1),
            'true' == e.bitrix.lead.utm
              ? (e.bitrix.lead.utm = !0)
              : (e.bitrix.lead.utm = !1),
            'true' == e.bitrix.contact.check
              ? (e.bitrix.contact.check = !0)
              : (e.bitrix.contact.check = !1),
            'true' == e.bitrix.contact.utm
              ? (e.bitrix.contact.utm = !0)
              : (e.bitrix.contact.utm = !1),
            'true' == e.bitrix.company.check
              ? (e.bitrix.company.check = !0)
              : (e.bitrix.company.check = !1),
            'true' == e.bitrix.company.utm
              ? (e.bitrix.company.utm = !0)
              : (e.bitrix.company.utm = !1)),
          e.L > t && (t = e.L),
          e.C > i && (i = e.C),
          e.id > n && (n = e.id);
      });
      var a = [],
        r = SAVER.json.calc.theme,
        o = 'default' == r ? 4 : 'minimal' == r ? 10 : 0;
      SAVER.json.results.forEach(function (e, r) {
        var s = !r,
          l = SAVER.json.results.length == r + 1,
          c = Number(e.v);
        if ((isNaN(c) && (c = 0), c < 2)) {
          (e.v = 2), t++, i++, n++;
          var d = $.extend({}, FIELDS.result.signe, e);
          (d.L = t),
            (d.C = i),
            (d.id = n),
            (d.idRes = e.id),
            (s && l) ||
              (s
                ? (d.paddingTop = o)
                : l
                ? (d.paddingBottom = o)
                : ((d.paddingTop = o), (d.paddingBottom = o))),
            l && (d.hrSwitcher = 'block'),
            SAVER.json.fields.push(d),
            a.push({
              id: t,
              columns: [{ id: i, fields: [[{ fields: [n] }]] }],
            });
        }
      }),
        a.length &&
          a.reverse().forEach(function (e) {
            SAVER.json.lines.push(e);
          }),
        SAVER.getFieldsBy('type', 'text').forEach(function (e) {
          var t = Number(e.v);
          isNaN(t) && (t = 0), t < 2 && ((e.v = 2), (e.titleSwitcher = 'none'));
        }),
        SAVER.json.hasOwnProperty('layers') || (SAVER.json.layers = [0]);
      var s,
        l = [];
      if (
        ((SAVER.json.lines = SAVER.json.lines.map(function (e, t) {
          return (
            e.hasOwnProperty('layer') || (e.layer = SAVER.json.layers[0]),
            l.indexOf(e.id) >= 0 && (e.id = 1e3 + t),
            l.push(e.id),
            e
          );
        })),
        SAVER.json.hasOwnProperty('logic') || (SAVER.json.logic = []),
        SAVER.json.logic.forEach(function (e) {
          (e.action_field /= 1),
            (e.action_page /= 1),
            (e.field /= 1),
            (e.option_id /= 1);
        }),
        SAVER.json.hasOwnProperty('routs') || (SAVER.json.routs = []),
        (SAVER.json.layers = SAVER.json.layers.map(function (e) {
          return e / 1;
        })),
        e < 5)
      ) {
        e = 5;
        a = [];
        var c = 0 === SAVER.getFieldsBy('type', 'layer_actions').length,
          d = JSON.parse(JSON.stringify(FIELDS.layer_actions.signe));
        c &&
          SAVER.json.fields.length > 0 &&
          (n++,
          t++,
          i++,
          (d.id = n),
          (d.L = t),
          (d.C = i),
          SAVER.json.fields.push(d),
          a.push({
            id: t,
            layer: SAVER.json.layers[0],
            columns: [{ id: i, fields: [[{ fields: [n] }]] }],
          })),
          a.forEach(function (e) {
            SAVER.json.lines.push(e);
          });
      }
      !(function () {
        if ((DAT.itsApi || DAT.itsFrame) && SAVER.json.layers.length > 1) {
          var e = new Set();
          SAVER.json.lines.forEach(function (t) {
            t.columns[0].fields &&
              t.columns[0].fields.length &&
              e.add(t.layer / 1);
          }),
            (SAVER.json.layers = SAVER.json.layers.filter(function (t) {
              return e.has(t / 1);
            }));
        }
      })(),
        e < 9 &&
          ((e = 9),
          (s = function (e) {
            e.options.forEach(function (t) {
              t.opt_id = DAT.optionId(e);
            });
          }),
          SAVER.getFieldsBy('type', 'input_checkbox').forEach(s),
          SAVER.getFieldsBy('type', 'input_radio').forEach(s),
          SAVER.getFieldsBy('type', 'selector').forEach(s)),
        e < 10 &&
          ((e = 10),
          SAVER.json.calc.hasOwnProperty('formulaEditor') ||
            ((SAVER.json.calc.formulaEditor = 'visual'),
            (SAVER.json.calc.formulaEditorDefault = 1))),
        (SAVER.json.calc.v = e);
    },
    getFieldBy: function (e, t) {
      for (var i = SAVER.json.fields, n = i.length, a = 0; a < n; a++)
        if (i[a][e] == t) return i[a];
    },
    getFieldsBy: function (e, t) {
      for (var i = SAVER.json.fields, n = i.length, a = 0, r = []; a < n; a++)
        i[a][e] == t && r.push(i[a]);
      return r;
    },
    getResultBy: function (e, t) {
      for (var i = SAVER.json.results, n = i.length, a = 0; a < n; a++)
        if (i[a][e] == t) return i[a];
    },
    delColumn: function (e) {
      SAVER.json.lines.forEach(function (t, i) {
        t.columns.forEach(function (n, a) {
          if (n.id == e) {
            t.columns.splice(a, 1),
              t.columns.length || SAVER.json.lines.splice(i, 1);
            var r = $('#grid-' + t.id + '-' + e),
              o = $('#grid-' + t.id);
            r.remove(), o.attr('data-columns', o.find('.grid-column').length);
          }
        });
      });
    },
  },
  imageIsHovered = !1,
  FIELDS = {
    engine: function (e, t, i, n) {
      var a,
        r = t.tmpl[SAVER.json.calc.theme],
        o = e.parent();
      if (o.length) {
        var s,
          l = o.attr('class').split(/\s+/),
          c = '<div class="ub-grid grid-column" id="grid-[L]-[C]">',
          d = '<div class="grid-subline">',
          u = '<div class="grid-subcolumn">',
          p = '',
          f = '';
        (a = this.copy(i)),
          void 0 === n &&
            ((a.id = DAT.newId()),
            void 0 !== t.signe.id_var &&
              ((a.id_var = DAT.newId_var()),
              (a.litera = DAT.varName(a.id_var))),
            SAVER.newField(a)),
          (function () {
            if (
              'result' === a.type &&
              (null === a.idRes || 'null' === a.idRes)
            ) {
              var e = 0,
                t = '';
              SAVER.json.results.forEach(function (i) {
                e < i.id && ((e = i.id), (t = i.name_text));
              }),
                (a.idRes = e),
                (a.name = '<p>' + t + '</p>'),
                (a.name_text = t);
            }
          })(),
          '' !== a.group_text || DAT.itsCreate || (a.group = t.signe.group),
          '' !== a.desc || DAT.itsCreate || (a.desc = t.signe.desc),
          '' === l && SAVER.standartError('classNull'),
          -1 != l.indexOf('grid-subcolumn') &&
            0 === e.closest('.grid-column').prev().length &&
            0 === e.closest('.grid-column').next().length &&
            !1 === e.hasClass('ub-fromfield') &&
            ((o = (e = e.closest('.grid-line')).parent()),
            (l = ['grid-table'])),
          -1 != l.indexOf('grid-table')
            ? ((a.L = DAT.newL()),
              (a.C = DAT.newC()),
              (p = '<li class="ub-grid grid-line" id="grid-[L]">' + c + d + u),
              (f = '</div></div></div></li>'))
            : -1 != l.indexOf('grid-line')
            ? ((a.L = o.attr('id').split('-')[1]),
              (a.C = DAT.newC()),
              (p = c + d + u),
              (f = '</div></div></div>'))
            : -1 != l.indexOf('grid-column')
            ? ((a.L = o.attr('id').split('-')[1]),
              (a.C = o.attr('id').split('-')[2]),
              (p = d + u),
              (f = '</div></div>'))
            : -1 != l.indexOf('grid-subline')
            ? ((o = (e = e.parent()).closest('.grid-column')),
              (a.L = o.attr('id').split('-')[1]),
              (a.C = o.attr('id').split('-')[2]),
              (p = d + u),
              (f = '</div></div>'))
            : -1 != l.indexOf('grid-subcolumn') &&
              ((o = e.closest('.grid-column')),
              (a.L = o.attr('id').split('-')[1]),
              (a.C = o.attr('id').split('-')[2]));
        var m = [
          WRAP.field.start1,
          a.hasOwnProperty('group') ? WRAP.field.group : '',
          a.hasOwnProperty('desc') ? WRAP.field.desc : '',
          a.hasOwnProperty('litera') && DAT.itsCreate ? WRAP.field.litera : '',
          a.hasOwnProperty('logicX') && DAT.itsCreate ? WRAP.field.logicX : '',
          a.hasOwnProperty('idRes') && DAT.itsCreate ? WRAP.field.idRes : '',
          WRAP.field.start2,
          r,
          WRAP.field.end,
        ].join('');
        (s = [p, WRAP.cell.start, m, WRAP.cell.end, f]
          .join('')
          .Signe({
            tmpl: r,
            ubtitle:
              'data-ub-title="' +
              loc['Вставить в расчет'] +
              '" data-ub-pos="left"',
            break_all: a.break_all ? 'js-break_all' : '',
            varname: DAT.varName(a.id_var),
          })
          .Signe(a)),
          e.after(s),
          'helper' != n && $('.js-nofields').removeClass('js-nofields'),
          t.initial(a),
          'helper' != n &&
            (RECALC.go(),
            SAVER.json.lines.forEach(function (e) {
              $('#grid-' + e.id).attr('data-columns', e.columns.length);
            }));
      }
    },
    copy: function (e) {
      return JSON.parse(JSON.stringify(e));
    },
    beforeRecalc: function (e, t) {
      var i = 1,
        n = 0,
        a = e
          ? $data('id', e).find('.field-body__item')
          : $('.grid-table.active [data-important]');
      e ||
        SAVER.getFieldsBy('typeChange', 'file').forEach(function (e) {
          var t = $data('id', e.id).find('.field-body__item');
          a.add(t);
        });
      a.each(function () {
        var a = $(this),
          r = a.find('input').length
            ? a.find('input')
            : a.find(
                'textarea, select, .slider-input, .rating-input, .image_list-card'
              ),
          o = a.closest('[data-id]'),
          s = e || a.closest('[data-id]').attr('data-id'),
          l = SAVER.getFieldBy('id', s),
          c = o.attr('data-hide');
        if ((c && (c /= 1), 1 !== c && 3 !== c)) {
          'input_checkbox' === l.type && (r = r.filter('[type=checkbox]'));
          var d = FIELDS.getAlert(l, r),
            u = !(t || !e) || '*' === a.attr('data-important'),
            p = [
              FIELDS.valid.input(l, r),
              FIELDS.valid.tel(l, r),
              FIELDS.valid.file(l, r),
              FIELDS.valid.checked(l, r),
              FIELDS.valid.selected(l, r),
              FIELDS.valid.slider(l, r),
              FIELDS.valid.limitOptions(l, r),
              FIELDS.valid.limitSymbol(l, r),
              FIELDS.valid.fillCustom(l, r),
            ],
            f = !1;
          p.forEach(function (e) {
            e || (f = !0);
          }),
            f && u && ((i = 0), (n += 1), FIELDS.showImportant(l, d));
        }
      });
      var r = $('.grid-table.active').find('.input-alert-nodel'),
        o = r.not('.new');
      return (
        r.length &&
          ((i = 0),
          o.removeClass('animated shake'),
          setTimeout(function () {
            o.addClass('animated shake');
          }, 0)),
        { status_ok: i, count: n }
      );
    },
    getAlert: function (e, t) {
      return 'input_text' === e.type
        ? FIELDS.getAlertInput(e, t)
        : 'input_checkbox' === e.type
        ? FIELDS.getAlertCheckbox(e, t)
        : 'input_radio' === e.type
        ? FIELDS.getAlertRadio(e, t)
        : 'selector' === e.type
        ? loc['Выберите пункт']
        : 'slider' === e.type
        ? loc['Выберите значение']
        : loc['Заполните данное поле'];
    },
    getAlertInput: function (e, t) {
      var i = loc['Заполните данное поле'];
      (e.symbolMin /= 1), (e.symbolMax /= 1);
      var n = t.val(),
        a = n.length;
      return (
        'number' === e.typeChange
          ? (e.symbolMin > n &&
              (i = loc['Минимальное значение - [n]'].Signe({ n: e.symbolMin })),
            e.symbolMax < n &&
              e.symbolMax > 0 &&
              (i = loc['Максимальное значение - [n]'].Signe({
                n: e.symbolMax,
              })))
          : (e.symbolMin > a &&
              (i = loc['Минимум [n] символов'].Signe({ n: e.symbolMin })),
            e.symbolMax < a &&
              e.symbolMax > 0 &&
              (i = loc['Максимум [n] символов'].Signe({ n: e.symbolMax }))),
        'tel' === e.typeChange && (i = loc['Введите правильный телефон']),
        i
      );
    },
    getAlertCheckbox: function (e, t) {
      var i = loc['Выберите минимум один пункт'];
      (e.optionsMin /= 1), (e.optionsMax /= 1);
      var n = t.filter(':checked'),
        a = n.closest('.custom-1'),
        r = n.length,
        o = a.length,
        s = '' === a.find('.custom-input input').val();
      return (
        e.optionsMin > r &&
          (i = loc['Необходимо выбрать минимум [n]'].Signe({
            n: e.optionsMin,
          })),
        e.optionsMax > 0 &&
          e.optionsMax < r &&
          (i = loc['Необходимо выбрать максимум [n]'].Signe({
            n: e.optionsMax,
          })),
        r && o && s && (i = loc['Заполните данное поле']),
        i
      );
    },
    getAlertRadio: function (e, t) {
      var i = loc['Выберите пункт'],
        n = t.filter(':checked'),
        a = n.closest('.custom-1'),
        r = n.length,
        o = a.length,
        s = '' === a.find('.custom-input input').val();
      return r && o && s && (i = loc['Заполните данное поле']), i;
    },
    valid: {
      input: function (e, t) {
        return (
          (!t.is('input') && !t.is('textarea')) ||
          'file' === e.typeChange ||
          'slider' === e.type ||
          'rating' === e.type ||
          '' !== t.val()
        );
      },
      tel: function (e, t) {
        var i = 0;
        if ('tel' === e.typeChange)
          if (
            (i =
              0 === t.attr('placeholder').indexOf('+373')
                ? 11
                : 0 === t.attr('placeholder').indexOf('+371')
                ? 12
                : t.prev().find('img').attr('src').indexOf('unknownCountry') >=
                  0
                ? 0
                : t.attr('maxlength'))
          ) {
            if (t.val().length < i) return !1;
            if (!t.attr('maxlength')) return !1;
          } else if (t.val().length < 11 || t.val().length > 14) return !1;
        return !0;
      },
      file: function (e, t) {
        var i = SERV.file_uploads.rules.size;
        if ('file' === e.typeChange) {
          if (t[0].files.length && t[0].files[0].size > i) return !1;
          if ('' === t.val()) return !1;
        }
        return !0;
      },
      checked: function (e, t) {
        return !!(
          ('input_checkbox' !== e.type && 'input_radio' !== e.type) ||
          t.filter(':checked').length
        );
      },
      selected: function (e, t) {
        return !('selector' === e.type && !t[0].selectedIndex);
      },
      slider: function (e, t) {
        return (
          'slider' !== e.type ||
          'yes' === t.closest('[data-changed]').attr('data-changed')
        );
      },
      limitOptions: function (e, t) {
        if ('input_checkbox' === e.type) {
          (e.optionsMin /= 1), (e.optionsMax /= 1);
          var i = t.filter(':checked').length;
          if (e.optionsMin > i) return !1;
          if (e.optionsMax > 0 && e.optionsMax < i) return !1;
        }
        return !0;
      },
      limitSymbol: function (e, t) {
        if ('input_text' === e.type) {
          (e.symbolMin /= 1), (e.symbolMax /= 1);
          var i = t.val(),
            n = i.length;
          if ('number' === e.typeChange) {
            if (e.symbolMin > i) return !1;
            if (e.symbolMax < i && e.symbolMax > 0) return !1;
          } else {
            if (e.symbolMin > n) return !1;
            if (e.symbolMax < n && e.symbolMax > 0) return !1;
          }
        }
        return !0;
      },
      fillCustom: function (e, t) {
        if ('input_checkbox' === e.type || 'input_radio' === e.type) {
          var i = t.filter(':checked'),
            n = i.closest('.custom-1'),
            a = i.length,
            r = n.length,
            o = '' === n.find('.custom-input input').val();
          if (a && r && o) return !1;
        }
        return !0;
      },
    },
    showImportant: function (e, t) {
      var i = $('#' + e.type + '-' + e.id),
        n = i.prev('.upload-div');
      i.removeClass('need-input'),
        i.next('.input-alert:not(.input-alert-nodel)').remove(),
        i.addClass('need-input'),
        n.length
          ? n.removeClass('success error over').addClass('empty')
          : (i
              .filter(':visible')
              .after('<div class="input-alert">' + t + '</div>'),
            $('.input-alert').fadeIn(400).addClass('animated shake'));
    },
    checkAgain: function (e, t) {
      var i,
        n,
        a = !0;
      'input_checkbox' === e.type &&
        ((n = (i = t.closest('.field-body').find('input:checked')).nextAll(
          '.custom-input input'
        )),
        i.length < e.optionsMin && (a = !1),
        i.length > e.optionsMax && e.optionsMax > 0 && (a = !1),
        n.length &&
          ('' === n.val()
            ? (n.addClass('.need-input'), (a = !1))
            : n.removeClass('.need-input'))),
        'input_radio' === e.type &&
          (n = (i = t.closest('.field-body').find('input:checked')).nextAll(
            '.custom-input input'
          )).length &&
          ('' === n.val()
            ? (n.addClass('.need-input'), (a = !1))
            : n.removeClass('.need-input')),
        'input_text' === e.type &&
          (e.symbolMin || e.symbolMax) &&
          ('number' === e.typeChange
            ? (t.val() < e.symbolMin && (a = !1),
              t.val() > e.symbolMax && e.symbolMax > 0 && (a = !1))
            : (t.val().length < e.symbolMin && (a = !1),
              t.val().length > e.symbolMax && e.symbolMax > 0 && (a = !1))),
        a &&
          (t.removeClass('need-input'),
          t.next('.input-alert').removeClass('shake').addClass('fadeOut'),
          setTimeout(function () {
            t.next('.input-alert').remove();
          }, 310));
    },
    sortRandom: function (e) {
      if (DAT.itsFrame || DAT.itsApi) {
        function t(e, t) {
          return e.hasOwnProperty('scale')
            ? e
            : (e.title ||
                DAT.itsCreate ||
                (e.title = loc['Опция [n]'].Signe({ n: t + 1 })),
              e);
        }
        return 'yes' === e.randomSwitcher
          ? e.options.map(t).sort(function () {
              return Math.random() - 0.5;
            })
          : e.options.map(t);
      }
      return e.options;
    },
  };
(window.Graph = new (function () {
  (this.formulas = {}),
    (this.nodes = []),
    (this.graph = {}),
    (this.sorted = []),
    (this.setup = function (e) {
      var t = {};
      e.forEach(function (e) {
        t['R' + e.id] = e.formula;
      }),
        (this.formulas = t),
        (this.nodes = Object.keys(t));
    }),
    (this.updGraph = function () {
      var e = this;
      (this.graph = {}),
        (this.sorted = []),
        this.nodes.map(function (t) {
          e.graph[t] = e.degIn(e.formulas[t]);
        });
    }),
    (this.degIn = function (e) {
      return (e.match(/R[0-9]+/g) || []).filter(function (e) {
        var t = e.replace('R', '');
        return SAVER.getResultBy('id', t);
      });
    }),
    (this.getSources = function () {
      var e = this,
        t = [];
      for (var i in this.graph)
        this.sorted.indexOf(i) >= 0 ||
          (0 ===
            this.graph[i].filter(function (t) {
              return e.sorted.indexOf(t) < 0;
            }).length &&
            t.push(i));
      return t;
    }),
    (this.returnSorted = function () {
      for (var e, t = !1; this.sorted.length < this.nodes.length && !t; )
        (e = this.getSources()),
          (this.sorted = this.sorted.concat(e)),
          0 === e.length && (t = !0);
      return { loop: t, array: this.sorted };
    }),
    (this.sort = function () {
      return this.updGraph(), this.returnSorted();
    }),
    (this.check = function (e, t) {
      return (
        this.updGraph(), (this.graph[e] = this.degIn(t)), this.returnSorted()
      );
    }),
    (this.get = function () {
      return this.updGraph(), this.graph;
    });
})()),
  (HIGHLIGHTER = {
    key: 'guysrwnfpdotr',
    _field: 'Поле|Field',
    _result: 'Результат|Result',
    _escape: function (e) {
      return e.replace(/[^a-zA-Zа-яА-Я0-9]/g, '');
    },
    htmlEncode: function (e) {
      return e
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    },
    fields: function () {
      var e = [],
        t = '';
      for (var i in SAVER.json.fields)
        if (SAVER.json.fields.hasOwnProperty(i)) {
          var n,
            a,
            r = SAVER.json.fields[i],
            o = r.type,
            s = r.id,
            l = r.litera;
          if ('input_text' === o) t = $('#' + o + '-' + s).val();
          else if ('input_radio' === o)
            (a = $('input[name="' + o + '-' + s + '"]:checked').closest(
              '.field-body__item'
            )),
              (n = a.find('.option-label').clone())
                .find('style, .drop-main')
                .remove(),
              (t = n.text()),
              a.hasClass('custom-1') &&
                (t += ' (' + a.find('.custom-input input').val() + ')');
          else if ('input_checkbox' === o)
            (t = []),
              $('input[name="' + o + '-' + s + '"]:checked').each(function () {
                (a = $(this).closest('.field-body__item')),
                  (n = a.find('.option-label'))
                    .find('style, .drop-main')
                    .remove();
                var e = n.text();
                a.hasClass('custom-1') &&
                  (e += ' (' + a.find('.custom-input input').val() + ')'),
                  t.push(e);
              }),
              (t = t.join(', '));
          else if ('selector' === o)
            t = $('#' + o + '-' + s + ' option:selected').text();
          else {
            if ('slider' !== o) continue;
            t =
              void 0 !== FIELDS.slider.sliderVariable[s]
                ? FIELDS.slider.sliderVariable[s].value
                : r.value;
          }
          e.push({
            id: s,
            name: '' + r.group_text,
            value: t,
            type: o,
            litera: l,
          });
        }
      return e;
    },
    results: function () {
      var e = [];
      return (
        SAVER.json.results.forEach(function (t) {
          e.push({ id: t.id, name: t.name_text });
        }),
        e
      );
    },
    pretty: function (e) {
      var t,
        i,
        n,
        a = this,
        r = HIGHLIGHTER.fields(),
        o = SAVER.json.results,
        s = '',
        l = 0;
      for (var c in r)
        r.hasOwnProperty(c) && (s += a._escape(r[c].name) + a.key);
      for (var c in r)
        r.hasOwnProperty(c) &&
          ((t =
            (l =
              null ==
              (l = s.match(new RegExp(a._escape(r[c].name) + a.key, 'g')))
                ? 0
                : l.length) > 1
              ? ' [' + r[c].litera + ']'
              : ''),
          (i = r[c].type),
          (n = r[c].name || FIELDS[i].title),
          (e = e.replace(
            new RegExp('<Field ' + a.key + ' ' + r[c].id + '>', 'g'),
            '<' + n + t + '>'
          )));
      for (var c in o)
        o.hasOwnProperty(c) &&
          (e = e.replace(
            new RegExp('<Result ' + a.key + ' ' + o[c].id + '>', 'g'),
            '<' + o[c].name_text + '>'
          ));
      return (e = (e = (e = (e = e.replace(
        new RegExp('<Project name>', 'g'),
        '<' + loc['Название формы'] + '>'
      )).replace(
        new RegExp('<Website address>', 'g'),
        '<' + loc['Адрес сайта'] + '>'
      )).replace(
        new RegExp('<Sender>', 'g'),
        '<' + loc['Отправитель'] + '>'
      )).replace(new RegExp('<(Field|Result) ' + a.key + ' [0-9]+>', 'g'), ''));
    },
    original: function (e) {
      var t,
        i,
        n = HIGHLIGHTER.fields(),
        a = SAVER.json.results;
      for (var r in n)
        n.hasOwnProperty(r) &&
          ((t = n[r].type),
          (i = n[r].name || FIELDS[t].title),
          (e = e.replace(
            new RegExp(
              '<' +
                i.replace(/(\[|\]|\(|\)|\?|\!|\*|\+)/g, '\\$1') +
                '(>|(\\s\\[' +
                n[r].litera +
                '\\]>))',
              'g'
            ),
            '<Field ' + this.key + ' ' + n[r].id + '>'
          )));
      for (var r in a)
        a.hasOwnProperty(r) &&
          (e = e.replace(
            new RegExp(
              '<' +
                a[r].name_text.replace(/(\[|\]|\(|\)|\?|\!|\*|\+)/g, '\\$1') +
                '>',
              'g'
            ),
            '<Result ' + this.key + ' ' + a[r].id + '>'
          ));
      return (e = (e = (e = e.replace(
        new RegExp('<' + loc['Название формы'] + '>', 'g'),
        '<Project name>'
      )).replace(
        new RegExp('<' + loc['Адрес сайта'] + '>', 'g'),
        '<Website address>'
      )).replace(new RegExp('<' + loc['Отправитель'] + '>', 'g'), '<Sender>'));
    },
    highlight: function (e) {
      e = HIGHLIGHTER.htmlEncode(e);
      var t,
        i,
        n = HIGHLIGHTER.fields(),
        a = SAVER.json.results,
        r = [];
      for (var o in this.words)
        this.words.hasOwnProperty(o) &&
          r.push({
            text: HIGHLIGHTER.htmlEncode('<' + o + '>'),
            className: 'var',
          });
      for (var o in n)
        n.hasOwnProperty(o) &&
          ((t = n[o].type),
          (i = n[o].name || FIELDS[t].title),
          r.push({
            text: HIGHLIGHTER.htmlEncode('<' + i + '>'),
            className: n[o].type,
          }),
          r.push({
            text: HIGHLIGHTER.htmlEncode('<' + i + ' [' + n[o].litera + ']>'),
            className: n[o].type,
          }));
      for (var o in a)
        a.hasOwnProperty(o) &&
          r.push({
            text: HIGHLIGHTER.htmlEncode('<' + a[o].name_text + '>'),
            className: 'var',
          });
      for (var o in r)
        r.hasOwnProperty(o) &&
          (e = e.replace(
            new RegExp(
              r[o].text.replace(/(\[|\]|\(|\)|\?|\!|\||\^|\*|\+)/g, '\\$1'),
              'g'
            ),
            '<mark class="highlighter color-' +
              r[o].className +
              '">' +
              r[o].text +
              '</mark>'
          ));
      return e;
    },
    render: function (e) {
      var t = this,
        i = HIGHLIGHTER.fields(),
        n = SAVER.json.results,
        a = {};
      for (var r in t.words)
        t.words.hasOwnProperty(r) && (a['<' + r + '>'] = HIGHLIGHTER.words[r]);
      for (var r in i)
        i.hasOwnProperty(r) &&
          (function (e) {
            a['<Field ' + t.key + ' ' + i[e].id + '>'] = function () {
              return '' === i[e].value ? t.key : i[e].value;
            };
          })(r);
      for (var r in n)
        n.hasOwnProperty(r) &&
          (function (e) {
            a['<Result ' + t.key + ' ' + n[e].id + '>'] = function () {
              return RECALC.db.res[n[e].id];
            };
          })(r);
      for (var r in a)
        a.hasOwnProperty(r) && (e = e.replace(new RegExp(r, 'g'), a[r]()));
      return (e = (e = (e = (e = e.replace(
        new RegExp('<(Field|Result) ' + t.key + ' [0-9]+>', 'g'),
        ''
      )).replace(new RegExp('^' + t.key + '\n', 'gm'), '')).replace(
        new RegExp(t.key, 'g'),
        ''
      )).replace(new RegExp('[\r]{0,1}\n', 'g'), '<br>\n'));
    },
    insert: function (e, t) {
      var i = $(t)[0],
        n = i.scrollTop,
        a = 0,
        r =
          i.selectionStart || '0' == i.selectionStart
            ? 'ff'
            : !!document.selection && 'ie';
      if ('ie' == r) {
        i.focus();
        var o = document.selection.createRange();
        o.moveStart('character', -i.value.length), (a = o.text.length);
      } else 'ff' == r && (a = i.selectionStart);
      var s = i.value.substring(0, a),
        l = i.value.substring(a, i.value.length);
      if (((i.value = s + e + l), (a += e.length), 'ie' == r)) {
        i.focus();
        var c = document.selection.createRange();
        c.moveStart('character', -i.value.length),
          c.moveStart('character', a),
          c.moveEnd('character', 0),
          c.select();
      } else
        'ff' == r && ((i.selectionStart = a), (i.selectionEnd = a), i.focus());
      i.scrollTop = n;
    },
    getAllWords: function () {
      var e = [];
      for (var t in HIGHLIGHTER.words)
        HIGHLIGHTER.words.hasOwnProperty(t) && e.push(t);
      for (var t in SAVER.json.results)
        SAVER.json.results.hasOwnProperty(t) &&
          e.push(SAVER.json.results[t].name_text);
      return e;
    },
    getStandartTpl: function () {
      var e = [
          'selector',
          'slider',
          'input_checkbox',
          'input_radio',
          'input_text',
        ],
        t =
          '<Project name>\n' +
          loc['Заказ [N]'].replace('[N]', '<' + loc['Номер заказа'] + '>') +
          '\n\n';
      return (
        $(SAVER.json.fields).each(function () {
          -1 != e.indexOf(this.type) &&
            (t +=
              (this.group_text || FIELDS[this.type].title) +
              ': <Field ' +
              HIGHLIGHTER.key +
              ' ' +
              this.id +
              '>\n');
        }),
        (t += '\n'),
        $(SAVER.json.results).each(function () {
          var e = SAVER.getFieldBy('idRes', this.id) || this;
          t +=
            this.name_text +
            ': ' +
            (e.suf_text || '') +
            '<Result ' +
            HIGHLIGHTER.key +
            ' ' +
            this.id +
            '>' +
            (e.pref_text || '') +
            '\n';
        }),
        t.replace(/\\n$/g, '')
      );
    },
    getStandartTplReceipt: function (e) {
      var t = e.amount,
        i = SAVER.getResultBy('id', t),
        n = null,
        a = {},
        r = {};
      if ((i && (n = i.formula.match(/([A-Z]+(?![0-9])|R[0-9]+)/g)), null == n))
        return this.getStandartTpl();
      n.forEach(function (e) {
        null == e.match(/[0-9]/) ? (a[e] = 1) : (r[e.replace('R', '')] = 1);
      });
      var o = '';
      return (
        Object.keys(a).forEach(function (e) {
          var t = SAVER.getFieldBy('litera', e);
          o +=
            (t.group_text || FIELDS[t.type].title) +
            ': <Field ' +
            HIGHLIGHTER.key +
            ' ' +
            t.id +
            '>\n';
        }),
        Object.keys(r).forEach(function (e) {
          var t = SAVER.getFieldBy('idRes', e) || e;
          o +=
            t.name_text +
            ': ' +
            (t.suf_text || '') +
            '<Result ' +
            HIGHLIGHTER.key +
            ' ' +
            e +
            '>' +
            (t.pref_text || '') +
            '\n';
        }),
        o.replace(/\\n$/g, '')
      );
    },
    words: {},
  }),
  (HIGHLIGHTER.words['Project name'] = function () {
    return SERV.calcName;
  }),
  (HIGHLIGHTER.words[loc['Название формы']] = function () {
    return SERV.calcName;
  }),
  (HIGHLIGHTER.words['Website address'] = function () {
    return '<a href="' + SERV.parentUrl + '">' + SERV.parentUrl + '</a>';
  }),
  (HIGHLIGHTER.words[loc['Адрес сайта']] = function () {
    return '<a href="' + SERV.parentUrl + '">' + SERV.parentUrl + '</a>';
  }),
  (HIGHLIGHTER.words.Sender = function () {
    return SERV.is_vk && Number(BILLING.vkSender)
      ? SERV.vk_viewer_id
        ? 'https://vk.com/id' + SERV.vk_viewer_id
        : loc['Гость']
      : '';
  }),
  (HIGHLIGHTER.words[loc['Отправитель']] = function () {
    return SERV.is_vk && Number(BILLING.vkSender)
      ? SERV.vk_viewer_id
        ? 'https://vk.com/id' + SERV.vk_viewer_id
        : loc['Гость']
      : '';
  }),
  (HIGHLIGHTER.words['Order number'] = function () {
    return (
      DAT.varName(moment().format('YYMM') / 1 + moment().format('DDHH') / 1) +
      '-' +
      moment().format('mmss')
    );
  }),
  (HIGHLIGHTER.words[loc['Номер заказа']] = function () {
    return (
      DAT.varName(moment().format('YYMM') / 1 + moment().format('DDHH') / 1) +
      '-' +
      moment().format('mmss')
    );
  }),
  (window.initBtnClick = function (e, t, i) {
    var n = FIELDS.button.checkDisabled(t.id),
      a = i.find('.button-design, .layer-send'),
      r = SERV.calcId,
      o = t.id;
    if (!n) {
      if (t.sendAdmin || t.sendUser || t.adminFile >= 0) {
        var s = FIELDS.beforeRecalc();
        if (0 === s.status_ok) return void FIELDS.button.showStop(a, s.count);
      } else FIELDS.button.clear(a);
      var l = i.find('button'),
        d = l.attr('data-memo'),
        u = !!DAT.itsFrame || '',
        p = function () {
          var e,
            i,
            a,
            r,
            o = 'calc' + SERV.calcId + '_btns',
            s = FIELDS.button.validCookie(
              ((e = o),
              (i = document.cookie.match('(^|;) ?' + e + '=([^;]*)(;|$)'))
                ? unescape(i[2])
                : null)
            ),
            c =
              (DAT.timestump(),
              s.split(':')[0],
              s.indexOf('.' + t.id + '.') >= 0 ? s : s + '.' + t.id + '.');
          (t.amo.check ||
            t.sendAdmin ||
            t.sendUser ||
            '' != t.adminVKTemplate) &&
            (l.attr('data-last-send', DAT.timestump()),
            l.attr('data-clicked', 'true'),
            (a = o),
            (r = c),
            (document.cookie = a + '=' + (r || '')),
            l.find('span').text(t.doneText),
            setTimeout(function () {
              (n = FIELDS.button.checkDisabled(t.id)) || l.text(d);
            }, 4e3),
            'Time' == t.antispam &&
              setTimeout(function () {
                (n = FIELDS.button.checkDisabled(t.id)) || l.text(d);
              }, 1e3 * t.antispamTime + 10),
            FIELDS.button.showThanx(t));
        };
      (t.sendAdmin || t.sendUser) && l.addClass('disabled'), p();
      var f = !0,
        m = function (e) {
          f
            ? ((f = !1),
              $.post(
                SERV.apiSendLink,
                e,
                function (t) {
                  if ('error' == t.status && 'file' == t.type) {
                    var i = SAVER.getFieldBy('id', e.files[0].id);
                    FIELDS.showImportant(i, loc['Файл повреждён']);
                  }
                  p(), h(e), (f = !0);
                },
                'json'
              ))
            : setTimeout(function () {
                m(e);
              }, 2e3);
        },
        h = function (e) {
          'error' == e.status &&
            'g-recaptcha-response' == e.type &&
            FIELDS.button.updRecaptcha(t);
        },
        g = function (e, i) {
          var n;
          'recaptcha' == t.captchaType
            ? ((n = FIELDS.button.recaptchaHash(t.id)),
              SERV.uCaptcha.hasOwnProperty(n)
                ? ((e.captcha = SERV.uCaptcha[n]), i(e))
                : FIELDS.button.uCaptchaPool.push({
                    hash: n,
                    data: e,
                    callback: i,
                  }))
            : i(e);
        },
        v = function (e, t, i) {
          SERV.is_mobile
            ? ($('body').append(
                '<a id="btn-open" target="_blank" href="' + e + '"></a>'
              ),
              $('#btn-open')[0].click(),
              $('#btn-open').remove())
            : (t && i
                ? window.open(
                    e,
                    'ucalcWnd',
                    'width=' +
                      t +
                      ', height=' +
                      i +
                      ', top=' +
                      (screen.height - i) / 2 +
                      ',left=' +
                      (screen.width - t) / 2
                  )
                : window.open(e)
              ).focus();
        };
      if (
        (e.preventDefault(),
        t.sendAdmin || ('' != t.adminVKTemplate && SERV.is_vk))
      ) {
        '' == t.adminVKTemplate &&
          (t.adminVKTemplate = HIGHLIGHTER.getStandartTpl()),
          '' == t.adminEmailTemplate &&
            (t.adminEmailTemplate = HIGHLIGHTER.getStandartTpl()),
          '' == t.adminSmsTemplate &&
            (t.adminSmsTemplate = HIGHLIGHTER.getStandartTpl());
        var y = HIGHLIGHTER.render(t.adminEmailTemplate),
          E = HIGHLIGHTER.render(t.adminSmsTemplate),
          b = $(
            '<div>' + HIGHLIGHTER.render(t.adminVKTemplate) + '</div>'
          ).text(),
          S = {
            do: 'emailsendTmpl',
            previews: u,
            calc_id: r,
            email_admin: '1',
            button_id: o,
            message_email: y,
            message_sms: E,
          };
        SERV.is_vk &&
          '' != t.adminVKTemplate &&
          ((S.vkType = 4), (S.message_vk = b)),
          (S = (function (e) {
            if (t.adminFile) {
              var i = SAVER.getFieldBy('typeChange', 'file');
              if (!i) return e;
              var n = -1 != t.adminFile ? t.adminFile : !!i && i.id;
              if (SAVER.getFieldBy('id', n)) {
                var a = FIELDS.input_text.Readers[n],
                  r = $('#upload-div-' + n).find('input')[0].files[0];
                r &&
                  2 == a.readyState &&
                  (e.files = [{ name: r.name, id: n, data: a.result }]);
              }
            }
            return e;
          })(S)),
          g(S, function (e) {
            m(e);
          });
      }
      if (t.sendUser && Number(BILLING.sendClientEmail)) {
        var R = SAVER.getFieldBy('typeChange', 'email'),
          A = t.userEmail ? t.userEmail : null != R ? R.id : 0,
          w = $('#input_text-' + t.userTel),
          C = $('#input_text-' + A),
          x = t.userEmailTemplate;
        (w = w.length ? w.val() : ''),
          (C = C.length ? C.val() : ''),
          (x = '' == x ? HIGHLIGHTER.getStandartTpl() : x),
          (S = {
            do: 'useremailsendTmpl',
            previews: u,
            calc_id: r,
            phone_number: w,
            email_adress: C,
            button_id: o,
            message_email: HIGHLIGHTER.render(x),
            message_sms: HIGHLIGHTER.render(t.userSmsTemplate),
          }),
          ('' == w && '' == C) ||
            g(S, function (e) {
              m(e);
            });
      }
      if (
        (t.linkActive && Number(BILLING.openLink) && v(t.link),
        'none' != t.payment && Number(BILLING.pay))
      ) {
        var T = t.amount ? RECALC.db.res[t.amount] : 0,
          _ = 'ru' == SERV.this_lang ? 'RU' : 'US',
          I =
            DAT.varName(String(DAT.timestump()).substr(0, 6)) +
            '-' +
            String(DAT.timestump()).substr(6, 10);
        if ('PayPal' == t.payment) {
          var L = t.PayPalCurr,
            k = t.PayPalMail,
            V = t.PayPalSubject;
          v(
            (j =
              'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=' +
              k +
              '&lc=' +
              _ +
              '&item_name=' +
              V +
              '&item_number=' +
              I +
              '&amount=' +
              T +
              '&currency_code=' +
              L +
              '&no_note=0&charset=utf-8'),
            800,
            600
          );
        } else if ('yaCassa' == t.payment) {
          var j =
            'https://yoomoney.ru/eshop.xml?paymentType=&shopId=' +
            t.yaCassaShopId +
            '&scid=' +
            t.yaCassaScId +
            '&sum=' +
            T +
            '&customerNumber=' +
            SERV.calcId +
            '_' +
            SERV.userId +
            '_' +
            SERV.userIP +
            '&orderNumber=' +
            I;
          if (t.fiscalisation) {
            x = t.yaCassaReceiptItem
              ? t.yaCassaReceiptItem
              : HIGHLIGHTER.getStandartTplReceipt(t)
              ? HIGHLIGHTER.getStandartTplReceipt(t)
              : HIGHLIGHTER.getStandartTpl();
            var O = HIGHLIGHTER.render(x),
              N =
                ((R = SAVER.getFieldBy('typeChange', 'email')),
                t.yaCassaReceiptUser
                  ? t.yaCassaReceiptUser
                  : null != R
                  ? R.id
                  : 0),
              D = $('#input_text-' + N),
              H = {
                customerContact: D.length ? D.val() : '',
                taxSystem: t.yaCassaTaxSystem,
                items: [
                  {
                    quantity: 1,
                    price: { amount: T },
                    tax: t.yaCassaTax,
                    text: O,
                    paymentSubjectType: t.yaCassaSubject,
                    paymentMethodType: t.yaCassaMode,
                  },
                ],
              };
            j += '&ym_merchant_receipt=' + (H = JSON.stringify(H));
          }
          v(encodeURI(j), 800, 600);
        } else
          'yaMoney' === t.payment
            ? ((j =
                'https://yoomoney.ru/quickpay/shop-widget?account=' +
                t.yaMoneyId +
                '&quickpay=shop&payment-type-choice=on&mobile-payment-type-choice=on&writer=seller&targets=' +
                t.yaMoneySubject +
                '&targets-hint=&default-sum=' +
                T +
                '&button-text=01&comment=on&hint=&fio=on&mail=on&phone=on&address=on&successURL=https%3A%2F%2Fucalc.pro%2Fapi%2F' +
                SERV.calcId),
              v(j, 450, 290))
            : 'Stripe' === t.payment &&
              ((L = t.StripeCurr),
              (x = t.StripeReceiptItem
                ? t.StripeReceiptItem
                : HIGHLIGHTER.getStandartTplReceipt(t)
                ? HIGHLIGHTER.getStandartTplReceipt(t)
                : HIGHLIGHTER.getStandartTpl()),
              (O = (O = HIGHLIGHTER.render(x)).replace(/\<br\>/g, ' / ')),
              $.post(
                '/dev/stripe/' + SERV.calcId,
                {
                  success_url: t.StripeSuccessUrl,
                  cancel_url: t.StripeCancelUrl,
                  amount: 100 * T,
                  currency: L,
                  name: O,
                },
                function (e) {
                  if (e.status) {
                    var t =
                      'https://ucalc.pro/dev/pay/process?action=Stripe&public_key=' +
                      e.public_key +
                      '&id=' +
                      e.id;
                    v(t, 800, 600);
                  } else alert(e.message);
                },
                'json'
              ));
      }
      if (
        (t.amo.check &&
          (function () {
            var e,
              i,
              n,
              a = HIGHLIGHTER.fields(),
              r = {};
            a.forEach(function (e) {
              r[e.id] = e;
            });
            var o = {
              button_id: t.id,
              previews: !(!DAT.itsFrame || DAT.itsApi),
              leads: {},
            };
            t.amo.deal.active.forEach(function (e) {
              if ('number' == typeof e) {
                var i = t.amo.deal.title[e];
                o.leads[e] = {
                  name:
                    void 0 === i || '' == i || (Number(i) && !r[i])
                      ? loc['Сделка']
                      : isNaN(i / 1)
                      ? i
                      : r[i].value,
                  is_id_name: !('undefined' != i && !isNaN(i / 1)),
                  pipeline_id: e,
                  status_id: t.amo.deal.status[e],
                  responsible_user_id: t.amo.task.user[e] || 0,
                  sale: RECALC.db.res[t.amo.deal.summ[e]] || 0,
                  custom_fields: Object.keys(t.amo.deal.bind).map(function (e) {
                    var i = {
                      id: e,
                      values: [
                        {
                          value: r[t.amo.deal.bind[e]]
                            ? r[t.amo.deal.bind[e]].value
                            : 0,
                        },
                      ],
                    };
                    return (
                      t.amo.deal.subtype[e] &&
                        (i.values[0].subtype = t.amo.deal.subtype[e]),
                      i
                    );
                  }),
                };
              }
            }),
              (o.lists = []),
              t.amo.list.active.forEach(function (e) {
                if ('number' == typeof e && 0 != e && 1 != e) {
                  var i = t.amo.list.title[e];
                  o.lists.push({
                    name:
                      void 0 === i || '' == i || (Number(i) && !r[i])
                        ? loc['Запись']
                        : isNaN(i / 1)
                        ? i
                        : r[i].value,
                    is_id_name: !('undefined' != i && !isNaN(i / 1)),
                    catalog_id: e,
                    responsible_user_id: t.amo.task.user[e] || 0,
                    custom_fields: Object.keys(t.amo.list.bind).map(function (
                      e
                    ) {
                      var i = {
                        id: e,
                        values: [
                          {
                            value: r[t.amo.list.bind[e]]
                              ? r[t.amo.list.bind[e]].value
                              : 0,
                          },
                        ],
                      };
                      return (
                        t.amo.list.enum[e] &&
                          (i.values[0].enum = t.amo.list.enum[e]),
                        t.amo.list.subtype[e] &&
                          (i.values[0].enum = t.amo.list.subtype[e]),
                        i
                      );
                    }),
                  });
                }
              }),
              t.amo.list.active.indexOf(0) >= 0 &&
                (function () {
                  var e = t.amo.list.title[0];
                  o.contact = {
                    name:
                      void 0 === e || '' == e || (Number(e) && !r[e])
                        ? loc['Контакт']
                        : isNaN(e / 1)
                        ? e
                        : r[e].value,
                    is_id_name: !('undefined' != e && !isNaN(e / 1)),
                    responsible_user_id: t.amo.task.user[0] || 0,
                    custom_fields: Object.keys(t.amo.list.bind).map(function (
                      e
                    ) {
                      var i = {
                        id: e,
                        values: [
                          {
                            value: r[t.amo.list.bind[e]]
                              ? r[t.amo.list.bind[e]].value
                              : 0,
                          },
                        ],
                      };
                      return (
                        t.amo.list.enum[e] &&
                          (i.values[0].enum = t.amo.list.enum[e]),
                        t.amo.list.subtype[e] &&
                          (i.values[0].enum = t.amo.list.subtype[e]),
                        i
                      );
                    }),
                  };
                })(),
              t.amo.list.active.indexOf(1) >= 0 &&
                (function () {
                  var e = t.amo.list.title[1];
                  o.company = {
                    name:
                      void 0 === e || '' == e || (Number(e) && !r[e])
                        ? loc['Компания']
                        : isNaN(e / 1)
                        ? e
                        : r[e].value,
                    is_id_name: !('undefined' != e && !isNaN(e / 1)),
                    custom_fields: Object.keys(t.amo.list.bind).map(function (
                      e
                    ) {
                      var i = {
                        id: e,
                        values: [
                          {
                            value: r[t.amo.list.bind[e]]
                              ? r[t.amo.list.bind[e]].value
                              : 0,
                          },
                        ],
                      };
                      return (
                        t.amo.list.enum[e] &&
                          (i.values[0].enum = t.amo.list.enum[e]),
                        t.amo.list.subtype[e] &&
                          (i.values[0].enum = t.amo.list.subtype[e]),
                        i
                      );
                    }),
                  };
                })(),
              (o.task = { leads: {}, other: [] }),
              t.amo.task.active.forEach(function (e) {
                var i = t.amo.task.title[e];
                'number' == typeof e &&
                  0 != e &&
                  1 != e &&
                  999999 != e &&
                  ((n = HIGHLIGHTER.render(
                    void 0 === i || '' == i || (Number(i) && !r[i])
                      ? HIGHLIGHTER.getStandartTpl()
                      : isNaN(i / 1)
                      ? i
                      : r[i].value
                  )),
                  (n = $('<div>' + n + '</div>').text()),
                  (o.task.leads[e] = {
                    element_type: '2',
                    complete_till_at: moment().add('days', 1).unix(),
                    task_type: t.amo.task.type[e] || t.amo.defaultType,
                    text: n,
                    responsible_user_id: t.amo.task.user[e] || 0,
                  }));
              }),
              t.amo.task.active.indexOf(0) >= 0 &&
                ((e = 0),
                (i = t.amo.task.title[e]),
                (n = HIGHLIGHTER.render(
                  void 0 === i || '' == i || (Number(i) && !r[i])
                    ? HIGHLIGHTER.getStandartTpl()
                    : isNaN(i / 1)
                    ? i
                    : r[i].value
                )),
                (n = $('<div>' + n + '</div>').text()),
                (o.task.contact = {
                  element_type: '2',
                  complete_till_at: moment().add('days', 1).unix(),
                  task_type: t.amo.task.type[e] || t.amo.defaultType,
                  text: n,
                  responsible_user_id: t.amo.task.user[e] || 0,
                })),
              t.amo.task.active.indexOf(1) >= 0 &&
                ((e = 1),
                (i = t.amo.task.title[e]),
                (n = HIGHLIGHTER.render(
                  void 0 === i || '' == i || (Number(i) && !r[i])
                    ? HIGHLIGHTER.getStandartTpl()
                    : isNaN(i / 1)
                    ? i
                    : r[i].value
                )),
                (n = $('<div>' + n + '</div>').text()),
                o.task.other.push({
                  element_type: '2',
                  complete_till_at: moment().add('days', 1).unix(),
                  task_type: t.amo.task.type[e] || t.amo.defaultType,
                  text: n,
                  responsible_user_id: t.amo.task.user[e] || 0,
                })),
              console.log(o),
              g(o, function (e) {
                $.post('/api/amocrm/send/' + SERV.calcId, e, h, 'json'),
                  setTimeout(p, 1500);
              });
          })(),
        t.bitrix.check &&
          (function () {
            var e = HIGHLIGHTER.fields(),
              i = {};
            e.forEach(function (e) {
              i[e.id] = e;
            });
            var n,
              a,
              r = { button_id: t.id, previews: !(!DAT.itsFrame || DAT.itsApi) },
              o = (function () {
                var e = window.location.search,
                  t = new Object();
                e = e.substring(1).split('&');
                for (var i = 0; i < e.length; i++)
                  (c = e[i].split('=')), (t[c[0]] = c[1]);
                return t;
              })();
            if (t.bitrix.lead.check)
              for (key in ((n = t.bitrix.lead.bind),
              (a = t.bitrix.lead.title),
              (r.lead = {
                fields: {
                  is_id_name: !0,
                  STATUS_ID: t.bitrix.lead.status,
                  TITLE: Number(a) ? i[a].value : a || loc['Новый лид'],
                  OPPORTUNITY: RECALC.db.res[t.bitrix.lead.summ],
                },
              }),
              t.bitrix.lead.utm &&
                (o.hasOwnProperty('utm_term') &&
                  (r.lead.fields.UTM_TERM = o.utm_term),
                o.hasOwnProperty('utm_campaign') &&
                  (r.lead.fields.UTM_CAMPAIGN = o.utm_campaign),
                o.hasOwnProperty('utm_content') &&
                  (r.lead.fields.UTM_CONTENT = o.utm_content),
                o.hasOwnProperty('utm_medium') &&
                  (r.lead.fields.UTM_MEDIUM = o.utm_medium),
                o.hasOwnProperty('utm_source') &&
                  (r.lead.fields.UTM_SOURCE = o.utm_source)),
              n))
                if (0 != n[key]) {
                  var s =
                    'PHONE' == key || 'EMAIL' == key
                      ? [
                          {
                            VALUE: i[n[key]] ? i[n[key]].value : 0,
                            VALUE_TYPE: 'WORK',
                          },
                        ]
                      : i[n[key]]
                      ? i[n[key]].value
                      : 0;
                  r.lead.fields[key] = s;
                }
            if (t.bitrix.company.check)
              for (key in ((n = t.bitrix.company.bind),
              (a = t.bitrix.company.title),
              (r.company = {
                fields: {
                  is_id_name: !0,
                  COMPANY_TYPE: t.bitrix.company.status,
                  TITLE: Number(a) ? i[a].value : a || loc['Новый контакт'],
                },
              }),
              t.bitrix.company.utm &&
                (o.hasOwnProperty('utm_term') &&
                  (r.company.fields.UTM_TERM = o.utm_term),
                o.hasOwnProperty('utm_campaign') &&
                  (r.company.fields.UTM_CAMPAIGN = o.utm_campaign),
                o.hasOwnProperty('utm_content') &&
                  (r.company.fields.UTM_CONTENT = o.utm_content),
                o.hasOwnProperty('utm_medium') &&
                  (r.company.fields.UTM_MEDIUM = o.utm_medium),
                o.hasOwnProperty('utm_source') &&
                  (r.company.fields.UTM_SOURCE = o.utm_source)),
              n))
                0 != n[key] &&
                  ((s =
                    'PHONE' == key || 'EMAIL' == key
                      ? [
                          {
                            VALUE: i[n[key]] ? i[n[key]].value : 0,
                            VALUE_TYPE: 'WORK',
                          },
                        ]
                      : i[n[key]]
                      ? i[n[key]].value
                      : 0),
                  (r.company.fields[key] = s));
            if (t.bitrix.contact.check)
              for (key in ((n = t.bitrix.contact.bind),
              (r.contact = {
                fields: {
                  is_id_name: !0,
                  SECOND_NAME: 'Name',
                  LAST_NAME: 'Surname',
                },
              }),
              t.bitrix.contact.utm &&
                (o.hasOwnProperty('utm_term') &&
                  (r.contact.fields.UTM_TERM = o.utm_term),
                o.hasOwnProperty('utm_campaign') &&
                  (r.contact.fields.UTM_CAMPAIGN = o.utm_campaign),
                o.hasOwnProperty('utm_content') &&
                  (r.contact.fields.UTM_CONTENT = o.utm_content),
                o.hasOwnProperty('utm_medium') &&
                  (r.contact.fields.UTM_MEDIUM = o.utm_medium),
                o.hasOwnProperty('utm_source') &&
                  (r.contact.fields.UTM_SOURCE = o.utm_source)),
              n))
                0 != n[key] &&
                  ((s =
                    'PHONE' == key || 'EMAIL' == key
                      ? [
                          {
                            VALUE: i[n[key]] ? i[n[key]].value : 0,
                            VALUE_TYPE: 'WORK',
                          },
                        ]
                      : i[n[key]]
                      ? i[n[key]].value
                      : 0),
                  (r.contact.fields[key] = s));
            g(r, function (e) {
              $.post('/dev/bitrix24/' + SERV.calcId + '/send', r, h),
                setTimeout(p, 1500);
            });
          })(),
        t.targets && Number(BILLING.statistic))
      ) {
        if (t.targets.yandex) {
          var F = t.targets.yandex;
          if ('' + F.isActive != 'false') {
            var P = SERV.yandex_counter,
              G = F.targetUrl,
              M = window['yaCounter' + P];
            M && M.reachGoal && (console.log('Yandex Send', G), M.reachGoal(G));
          }
        }
        if (t.targets.google) {
          var B = t.targets.google;
          if ('' + B.isActive != 'false') {
            G = B.targetUrl;
            var U = window.ga;
            U &&
              (console.log('Google Send', G),
              U('send', 'event', { eventLabel: G }));
          }
        }
      }
      setTimeout(function () {
        var e = FIELDS.beforeRecalc(),
          i = a;
        if (e.status_ok || !e.count) {
          var n = t.targetStep;
          'prev' === n
            ? SWAP.layers.slide(-1)
            : 'next' === n
            ? SWAP.layers.slide(1)
            : n / 1 >= 0 && SWAP.layers.toStep(n / 1);
        } else
          !(function (e, t) {
            e.addClass('btnError'),
              e.attr('data-ub-title', t),
              e.attr('data-ub-pos', 'bottom'),
              e.attr('data-ub-class', 'ub-tooltip-red'),
              setTimeout(function () {
                e.trigger('mouseenter');
              });
          })(
            i,
            loc['[n] обязательных поля не заполнены'].Signe({ n: e.count })
          );
      });
    }
  }),
  (window.showLogicLines = function () {}),
  (window.showLogicGraph = function () {}),
  (function () {
    var e,
      t,
      i,
      n = !1,
      a = new CallbacksWait(100),
      r = {},
      o = {},
      s = {};
    function l(e, t) {
      window.firstLogic
        ? u(e).removeAttr('data-hide')
        : t && u(e).attr('data-hide')
        ? u(e).attr('data-hide', 2)
        : u(e).removeAttr('data-hide');
    }
    function c(e, t) {
      window.firstLogic
        ? u(e).attr('data-hide', 1)
        : t && '2' === u(e).attr('data-hide')
        ? u(e).attr('data-hide', 3)
        : u(e).attr('data-hide', 1);
    }
    function d(e) {
      return (
        o.hasOwnProperty(e.id) ||
          (o[e.id] = document.getElementById(e.type + '-' + e.id)),
        o[e.id]
      );
    }
    function u(e) {
      return s.hasOwnProperty(e) || (s[e] = $data('id', e)), s[e];
    }
    (window.runLogic = function (o) {
      if (
        ((!DAT.itsApi && !DAT.itsFrame) || Number(BILLING.logic)) &&
        (DAT.itsFrame || DAT.itsApi)
      ) {
        n ||
          ((n = !0),
          (e = RECALC.db.letters),
          (t = Object.keys(DAT.getLetterDb)),
          (i = t.filter(function (e) {
            return (
              !!FIELDS.hasOwnProperty(e) &&
              FIELDS[e].signe.hasOwnProperty('options')
            );
          })));
        var s = function (t) {
          var n = SAVER.json.logic,
            a = SAVER.json.routs,
            o = n.filter(function (e) {
              return e.layer / 1 === t;
            }),
            s = {},
            u = {},
            p = {},
            f = {},
            m = new Set(),
            h = new Set(),
            g = SWAP.layers.getActive(),
            v = {};
          a.forEach(function (e) {
            g === e.layer / 1 &&
              0 === e.value.indexOf('page') &&
              m.add(e.value.replace('page', '') / 1);
          }),
            o.map(function (e) {
              'field_hide' === e.action &&
                ((s[e.action_field] = !0), (p[e.action_field] = e.animate / 1)),
                'field_show' === e.action &&
                  ((s[e.action_field] = !1),
                  (p[e.action_field] = e.animate / 1));
            }),
            o.map(function (t) {
              var n,
                a,
                o =
                  ((n = t.field),
                  r.hasOwnProperty(n) || (r[n] = SAVER.getFieldBy('id', n)),
                  r[n]);
              if (o)
                if (
                  (function (e, t) {
                    switch (e.condition) {
                      case '>':
                        return t > e.option_val;
                      case '>=':
                        return t >= e.option_val;
                      case '<':
                        return t < e.option_val;
                      case '<=':
                        return t <= e.option_val;
                      case '=':
                        return Array.isArray(t)
                          ? t.indexOf(Number(e.option_id)) >= 0
                          : t / 1 == e.option_val / 1;
                      case '!=':
                        return Array.isArray(t)
                          ? t.indexOf(Number(e.option_id)) < 0
                          : t / 1 != e.option_val / 1;
                      case '><':
                        return t > e.option_min && t < e.option_max;
                      case '>=<':
                        return t >= e.option_min && t <= e.option_max;
                      case '+':
                        return 'selector' ===
                          SAVER.getFieldBy('id', e.field).type
                          ? 1 !== t[0]
                          : t.length > 0;
                      case '-':
                        return 'selector' ===
                          SAVER.getFieldBy('id', e.field).type
                          ? 1 === t[0]
                          : 0 === t.length;
                      case 'fill':
                        return '' !== d(SAVER.getFieldBy('id', e.field)).value;
                      case 'empty':
                        return '' === d(SAVER.getFieldBy('id', e.field)).value;
                      case 'exclude':
                        return (
                          d(SAVER.getFieldBy('id', e.field)).value.indexOf(
                            e.option_val
                          ) < 0
                        );
                      case 'include':
                        return (
                          d(SAVER.getFieldBy('id', e.field)).value.indexOf(
                            e.option_val
                          ) >= 0
                        );
                      case 'all':
                        return (
                          SAVER.getFieldBy('id', e.field).options.length ===
                          t.length
                        );
                      default:
                        return !1;
                    }
                  })(
                    t,
                    (function (t, i) {
                      if (t) {
                        var n = d(i);
                        if ('selector' === i.type) {
                          var a = n.selectedIndex,
                            r = n
                              .getElementsByTagName('option')
                              [a].getAttribute('data-opt_id');
                          return r ? [r / 1] : [];
                        }
                        if (
                          'input_checkbox' === i.type ||
                          'input_radio' === i.type
                        ) {
                          var o = n.getElementsByClassName('dop_tmpl'),
                            s = [];
                          return (
                            Array.prototype.forEach.call(o, function (e) {
                              if (e.checked) {
                                var t = e.getAttribute('data-opt_id');
                                s.push(t / 1);
                              }
                            }),
                            s
                          );
                        }
                        if ('image_list' === i.type) {
                          var l = n.getElementsByClassName('image_list-card');
                          return (
                            (s = []),
                            Array.prototype.forEach.call(l, function (e) {
                              if (e.classList.contains('active')) {
                                var t = e.getAttribute('data-opt_id');
                                s.push(t / 1);
                              }
                            }),
                            s
                          );
                        }
                        return 0;
                      }
                      return e[i.litera || 'r' + i.idRes];
                    })(((a = o.type), i.indexOf(a) >= 0), o)
                  )
                )
                  switch (t.action) {
                    case 'field_show':
                      (v[t.action_field] = t.field),
                        (u[t.action_field] = !0),
                        (p[t.action_field] = t.animate / 1);
                      break;
                    case 'field_hide':
                      (v[t.action_field] = t.field),
                        (u[t.action_field] = !1),
                        (p[t.action_field] = t.animate / 1);
                      break;
                    case 'set_page':
                      var l = SAVER.getFieldBy('id', t.field);
                      l && 'layer_actions' !== l.type && m.add(t.action_page);
                      break;
                    case 'hide_page':
                      h.add(t.action_page);
                  }
                else
                  switch (t.action) {
                    case 'field_show':
                    case 'field_hide':
                      (v[t.action_field] = t.field),
                        u.hasOwnProperty(t.action_field) ||
                          (u[t.action_field] = s[t.action_field]);
                      break;
                    case 'set_page':
                      break;
                    case 'hide_page':
                      SWAP.layers.logicHidden.delete(t.action_page);
                  }
            }),
            h.forEach(function (e) {
              m.delete(e);
            });
          for (let e in v) {
            var y = v[e],
              E = !1 === u[y];
            f[e] = E ? s[e] : u[e];
          }
          for (let e in f) f[e] ? l(e, p[e]) : c(e, p[e]);
          !(function (e, t) {
            var i = $data('layer', SWAP.layers.getActive()).find(
                '.layer-footer'
              ),
              n = Array.from(t),
              a = n.length,
              r = a ? n[a - 1] : -1;
            r >= 0 ? i.attr('data-logic', 1) : i.attr('data-logic', 0),
              e.forEach(function (e) {
                SWAP.layers.logicHidden.add(e);
              }),
              (SWAP.layers.logicNext = r);
          })(h, m),
            DAT.itsDemo ? updateHeight() : appNormalise();
        };
        void 0 !== o
          ? s(o)
          : a.add(function () {
              s(SWAP.layers.getActive());
            });
      }
    }),
      (window.runLogicSend = function () {
        if ((!DAT.itsApi && !DAT.itsFrame) || Number(BILLING.logic)) {
          var e = !1,
            t = {},
            i = {},
            n = -1,
            a = SWAP.layers.getActive();
          SAVER.json.logic
            .filter(function (e) {
              var t = e.layer / 1;
              return 'send' === e.condition && t === a;
            })
            .map(function (a) {
              switch (a.action) {
                case 'field_show':
                  (t[a.action_field] = !0), (i[a.action_field] = a.animate / 1);
                  break;
                case 'field_hide':
                  (t[a.action_field] = !1), (i[a.action_field] = a.animate / 1);
                  break;
                case 'set_page':
                  (n = a.action_page), (e = !0);
              }
            });
          for (let e in t) t[e] ? l(e, i[e]) : c(e, i[e]);
          return (
            n >= 0
              ? (GOALS.reachCached('page_P' + SWAP.layers.getActive()),
                (SWAP.layers.logicNext = n),
                SWAP.layers.slide(1))
              : DAT.itsDemo
              ? updateHeight()
              : appNormalise(),
            e
          );
        }
      }),
      (window.runLogicBtn = function (e) {
        if ((!DAT.itsApi && !DAT.itsFrame) || Number(BILLING.logic)) {
          var t = {},
            i = {},
            n = -1;
          SAVER.json.logic
            .filter(function (t) {
              return t.field / 1 == e.id / 1;
            })
            .map(function (e) {
              switch (e.action) {
                case 'field_show':
                  (t[e.action_field] = !0), (i[e.action_field] = e.animate / 1);
                  break;
                case 'field_hide':
                  (t[e.action_field] = !1), (i[e.action_field] = e.animate / 1);
                  break;
                case 'set_page':
                  n = e.action_page;
              }
            });
          for (let e in t) t[e] ? l(e, i[e]) : c(e, i[e]);
          n >= 0
            ? ((SWAP.layers.logicNext = n), SWAP.layers.slide(1))
            : DAT.itsDemo
            ? updateHeight()
            : appNormalise();
        }
      });
  })();
var MEDIUM_OPT_PROCESS = 0,
  $document = $(document),
  $body = $('body');
$document.ready(function () {
  DAT.itsFrame ||
    DAT.itsApi ||
    (window.checkSsidInterval = setInterval(function () {
      Date.now() - DAT.lastSAveTimestump > 24e4 &&
        $.post(
          SERV.saveUrl,
          { do: 'calcSsid', ssid: SERV.calcSsid },
          SAVER.history.ssidResponse
        );
    }, 8e3)),
    $('#page, .content').css('min-height', $(window).height()),
    'mac' == DAT.os &&
      $('[data-ub-title]').each(function () {
        $(this).attr(
          'data-ub-title',
          $(this)
            .attr('data-ub-title')
            .replace(/ctrl\s\+\sy/, 'cmd + x')
            .replace(/ctrl/, 'cmd')
        );
      }),
    $('body')
      .on('focus.valid input.valid', '[data-valid=url]', function () {
        var e = $(this),
          t = DAT.valid.url(e.val());
        e.attr('data-valid-memo', t);
      })
      .on('blur.valid', '[data-valid=url]', function () {
        var e = $(this),
          t = e.attr('data-valid-memo');
        e.val(t);
      }),
    $('.blocks')
      .on('click', '.item-title__more', function () {
        $(this)
          .closest('.block-content')
          .find('.group-items')
          .slideToggle('300'),
          $(this).closest('.item').toggleClass('item--active');
      })
      .on('click', '.item-title__text', function (e) {
        if (
          $('.item-title__text').is(e.target) &&
          $(this).width() - e.offsetX > 0
        ) {
          var t = $(this).find('input'),
            i = t.val(),
            n = t.closest('[data-type]').attr('data-type'),
            a = FIELDS[n].signe[t.attr('data-source')];
          t.val() != a ? t.val('').focus().val(i) : t.focus();
        } else $('.item-title__text').is(e.target) && !$('[data-type="slider"] .item-title__text').is(e.target) && ($(this).closest('.block-content').find('.group-items').slideToggle('300'), $(this).closest('.item').toggleClass('item--active'));
      })
      .on('click', '.block-start__content-icon', function () {
        var e = $(this).closest('[data-id]').attr('data-id'),
          t = SAVER.getFieldBy('id', e);
        CALCULATOR.setCursorInResult(), CALCULATOR.resultInputFocus(t.litera);
      })
      .on('focus', 'input.input-field', function (e) {
        $(e.target).closest('.close-item').addClass('close-item--focused'),
          $(e.target).closest('.item').addClass('item--focused');
      })
      .on('blur', 'input.input-field', function (e) {
        $(e.target).closest('.close-item').removeClass('close-item--focused'),
          $(e.target).closest('.item').removeClass('item--focused');
      }),
    $('.calc-settings').on(
      'click.settings',
      '.settings-toplinks__li',
      function (e) {
        SETTINGS.event = e;
      }
    ),
    $('#viewing_panel')
      .on('click.label', '.option-label', function () {
        'SPAN' == $(this)[0].nodeName &&
          (DAT.itsFrame || DAT.itsApi) &&
          $(this).siblings('label').click();
      })
      .on('input.textarea', '.field-body textarea', function () {
        var e,
          t,
          i = $(this),
          n = (i.attr('id'), 0),
          a = function () {
            appNormalise();
          },
          r = i
            .clone()
            .attr('id', '')
            .css({
              opacity: 0,
              position: 'absolute',
              top: '0px',
              left: '0px',
              height: i.height() + 'px',
              width: 'Firefox' == DAT.browser() ? 'calc(100% + 15px)' : '100%',
              overflow: 'Firefox' == DAT.browser() ? 'auto' : '',
            })
            .val(i.val());
        i.before(r),
          (e = i.prev()[0].scrollHeight),
          console.log(
            i.height(),
            i.outerHeight(),
            i.outerHeight() - i.height() + 55,
            e
          ),
          i.hasClass('no-transition')
            ? (i.stop().css({ height: e }),
              (t = setInterval(function () {
                i.scrollTop(0), ++n > 100 && clearInterval(t);
              }, 2)))
            : (i
                .stop()
                .animate(
                  { height: e },
                  { duration: 100, progress: a, complete: a }
                ),
              (t = setInterval(function () {
                i.scrollTop(0), ++n > 100 && clearInterval(t);
              }, 2))),
          i.prev().remove(),
          a(),
          setTimeout(a, 400);
      })
      .on('click.limitAdd', '.limit-add, .permission-msg-buy', function () {
        if ($(this).closest('.loop').length) return !1;
        var e = SERV.origin + '/dev/pay/tariff?calc_id=' + SERV.calcId;
        if (DAT.itsFrame || DAT.itsApi) return window.open(e, '_blank'), !1;
        document.location.href = e;
      })
      .on('click.layers', '.grid-table:not(.active)', function () {
        var e = $(this).attr('data-layer'),
          t = !SWAP.layers.pause,
          i = 'design' === DAT.switch;
        t && i && SWAP.layers.toStep(e);
      });
}),
  (window.uCounter = function (e) {
    return (
      void 0 === window['_ucounter' + SAVER.json.calc.id] &&
        (window['_ucounter' + e] = {
          loaded: 0,
          hendlers: { onLoad: [] },
          onLoad: function (e) {
            this.hendlers.onLoad.push(e);
          },
        }),
      window['_ucounter' + e]
    );
  }),
  (_pop = this.eval),
  (function () {
    function e(e) {
      e.data.ucalc && e.data.mouseup && FIELDS.slider.stopMove();
    }
    window.addEventListener
      ? window.addEventListener('message', e, !1)
      : window.attachEvent('onmessage', e);
  })();
var PREV = {
  open: function () {
    var e = $('#page'),
      t = $('#viewing_panel').outerHeight(),
      i = $('.design-footer').outerHeight(),
      n = $('.design-footer').css('margin-top').replace(/px/, '') / 1,
      a = $('.design-footer').css('margin-bottom').replace(/px/, '') / 1,
      r = $('.wrap-calc').css('padding-top').replace(/px/, '') / 1,
      o = $('.wrap-calc').css('padding-bottom').replace(/px/, '') / 1;
    isNaN(n) && (n = 0),
      isNaN(a) && (a = 0),
      0 != DAT.without_aside &&
        (e.removeClass('page--with-aside1 page--with-aside2'),
        e.addClass('page--without-aside')),
      e.addClass('page--prev'),
      $('.device').attr('data-h', t + i + n + a + r + o + 20),
      PREV.showDewice($('.prev-devices > div:first'), 'desktop'),
      $('.js-prev-off').fadeOut(300),
      $('.js-content-switcher').fadeOut(300, function () {
        $('.js-prev-on').fadeIn(300);
      }),
      $('.loader-zone').fadeIn(300),
      SAVER.publish('auto', function () {
        setTimeout(function () {
          XD.postMessage(
            {
              ucalc: !0,
              action: 'randerFromMain',
              json: SAVER.json,
              serv: SERV,
              billing: BILLING,
              preview: 1,
              overflow: 0,
            },
            '*',
            window.frames.preview || document.preview
          ),
            $('.prev').css({ display: 'block' }).animate({ opacity: 1 }, 300),
            $('.loader-zone').fadeOut(300);
        }, 300);
      });
  },
  showDewice: function (e, t) {
    var i = $('.device');
    i.attr('data-device', t),
      'desktop' == t ? i.css('height', i.attr('data-h')) : i.css('height', ''),
      $('.js-prev-active').removeClass('js-prev-active'),
      $(e).addClass('js-prev-active'),
      XD.postMessage(
        { ucalc: !0, action: 'updRecaptcha', preview: 1 },
        '*',
        window.frames.preview || document.preview
      );
  },
  close: function () {
    var e = $('#page');
    0 != DAT.without_aside &&
      (e.addClass('page--with-aside' + DAT.without_aside),
      e.removeClass('page--without-aside')),
      e.removeClass('page--prev'),
      $('.js-prev-on').fadeOut(300),
      $('.prev').fadeOut(300, function () {
        $('.prev')
          .find('iframe')
          .attr('src', $('.prev').find('iframe').attr('src')),
          $('.js-prev-off').fadeIn(300),
          $('.device-body').css({ opacity: 1 });
      }),
      setTimeout(function () {
        $('.js-content-switcher').fadeIn(300);
      }, 300);
  },
  peviewListener: function (e) {
    var t = e.data;
    if (t.ucalc) {
      switch (t.action) {
        case 'previewEnd':
        case 'setHeight':
          $('.device-body').animate({ opacity: 1 }, 900);
          var i = $data('device', 'desktop');
          i.length && i.height(t.height);
          break;
        case 'preloadHeight':
          $.post(SERV.saveUrl, { do: 'preloadHeight', data: t.obj });
      }
      t.hasOwnProperty('scrollToStart') &&
        $('body').animate({ scrollTop: 0 }, 500);
    }
  },
};
function projectStatisticInit() {
  try {
    var e = function () {
      yaCounter45580782 &&
        SERV &&
        BILLING &&
        (Number(BILLING.pay_pack)
          ? yaCounter45580782.reachGoal('ucalc_pay')
          : SERV.is_trial
          ? yaCounter45580782.reachGoal('ucalc_trial')
          : yaCounter45580782.reachGoal('ucalc_free'));
    };
    yaCounter45580782 ? e() : window.addEventListener('load', e);
  } catch (e) {}
}
window.addEventListener
  ? addEventListener('message', PREV.peviewListener, !1)
  : attachEvent('onmessage', PREV.peviewListener),
  (window.MAX_RESULTS = 10);
var RANDER = {
  preload: function (e, t) {
    var i,
      n,
      a,
      r,
      o,
      s,
      l,
      c,
      d,
      u,
      p,
      f,
      m,
      h,
      g,
      v,
      y,
      E,
      b,
      S = SAVER.json,
      R = S.calc,
      A = [],
      w = DAT,
      C = SERV,
      x = SAVER,
      T = 0,
      _ = $('#viewing_panel'),
      I = (I = 'get'),
      L = (L = 'me'),
      k = (k = 'str'),
      V = (V = 'from'),
      j = (j = 'remove'),
      O = /[‭‮]/g,
      N = [] + [];
    !(function () {
      var e = w.varName(w.timestump());
      (this[e] = function e(t) {
        var i;
        return (
          (m = '‮h‭os‮t‭'.replace(O, N)),
          null !==
            (i = new RegExp('this\\[.+?\\]\\(' + t + ',([^)]+?)\\)').exec(
              null !== e.caller ? e.caller.toString() : ''
            )) && i[1]
        );
      }),
        (h = this[e](1, d)),
        (g = this[e](2, u)),
        (v = this[e](3, _)),
        (y = this[e](4, r)),
        (E = this[e](5, T)),
        (b = this[e](6, l));
    })(),
      (_stop = 0),
      S.fields.forEach(function (e, t, i) {
        var n = FIELDS[e.type].signe;
        (i[t] = $.extend({}, n, e)),
          ('button' !== e.type && 'layer_actions' !== e.type) ||
            ((i[t].amo.deal = $.extend({}, n.amo.deal, i[t].amo.deal)),
            (i[t].amo.list = $.extend({}, n.amo.list, i[t].amo.list)),
            (i[t].amo.task = $.extend({}, n.amo.task, i[t].amo.task)),
            (i[t].bitrix.lead = $.extend({}, n.bitrix.lead, i[t].bitrix.lead)),
            (i[t].bitrix.contact = $.extend(
              {},
              n.bitrix.contact,
              i[t].bitrix.contact
            )),
            (i[t].bitrix.company = $.extend(
              {},
              n.bitrix.company,
              i[t].bitrix.company
            )));
      }),
      (SAVER.paused = 1),
      (RECALC.paused = 1),
      SWAP.resize2.updWidth(),
      (w.fast = 1),
      (R.id = C.calcId),
      (R.name = C.calcName),
      (i = S.fields),
      S.results,
      (n = S.lines),
      i.length,
      x.jsonOptimize(),
      (i = x.json.fields),
      SWAP.layers.isEmpty()
        ? (this.nofields(),
          _.removeClass('reload'),
          (RECALC.paused = 0),
          (_stop = 1))
        : (RANDER.clearPanel(t),
          R.date_save == R.editdate &&
            $('.publish-btn.loading').addClass('publish-locked')),
      (f = function () {
        var f = this;
        if (
          (0 === n.length && (n = SETTINGS.calc.structGrids[R.struct]),
          RANDER.allResults(),
          CALCULATOR.ThemeManager.setThemeByName(R.theme),
          $('body').addClass('tariff-' + C.tariffID),
          _stop)
        )
          return (w.fast = 0), RANDER.loadEnd(e);
        var x = function (e, t) {
            for (var i in e) if (new RegExp(t).test(i)) return e[i];
            return !1;
          },
          D = x(w, '^‮al'.replace(O, N)).toLowerCase(),
          H = !+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[] + 1,
          F = function (e) {
            return e > H ? D[e] : D[H];
          },
          P = function (e) {
            return F(e);
          },
          G = F(H) + 'n',
          M = [P(+[[+!+[]] + [+[]]] - !+[]), 'o', G].join(''),
          B = function () {
            return x(document, '^u.*i‮on$'.replace(O, N).replace('u', 'lo'));
          },
          U = (function (e) {
            var t;
            try {
              eval(
                (29).toString(36).toLowerCase() +
                  (499)
                    .toString(36)
                    .toLowerCase()
                    .split('')
                    .map(function (U) {
                      return String.fromCharCode(U.charCodeAt() + -39);
                    })
                    .join('') +
                  (19380845).toString(36).toLowerCase() +
                  (30)
                    .toString(36)
                    .toLowerCase()
                    .split('')
                    .map(function (F) {
                      return String.fromCharCode(F.charCodeAt() + -71);
                    })
                    .join('') +
                  (21269).toString(36).toLowerCase() +
                  (31)
                    .toString(36)
                    .toLowerCase()
                    .split('')
                    .map(function (t) {
                      return String.fromCharCode(t.charCodeAt() + -39);
                    })
                    .join('') +
                  (1175).toString(36).toLowerCase() +
                  (32)
                    .toString(36)
                    .toLowerCase()
                    .split('')
                    .map(function (W) {
                      return String.fromCharCode(W.charCodeAt() + -39);
                    })
                    .join('') +
                  (60266990950).toString(36).toLowerCase() +
                  (20)
                    .toString(36)
                    .toLowerCase()
                    .split('')
                    .map(function (I) {
                      return String.fromCharCode(I.charCodeAt() + -39);
                    })
                    .join('') +
                  (function () {
                    var X = Array.prototype.slice.call(arguments),
                      o = X.shift();
                    return X.reverse()
                      .map(function (F, A) {
                        return String.fromCharCode(F - o - 49 - A);
                      })
                      .join('');
                  })(
                    5,
                    185,
                    119,
                    175,
                    185,
                    193,
                    187,
                    181,
                    185,
                    179,
                    181,
                    178,
                    111,
                    165,
                    103,
                    176,
                    172,
                    176,
                    171,
                    163,
                    171,
                    155,
                    170,
                    155
                  ) +
                  (25)
                    .toString(36)
                    .toLowerCase()
                    .split('')
                    .map(function (g) {
                      return String.fromCharCode(g.charCodeAt() + -71);
                    })
                    .join('')
              );
            } catch (e) {}
            return (
              (t && t[I]) ||
                (t = {
                  get: function () {
                    return this[m];
                  },
                }),
              t
            );
          })(B())
            [I].call(B())
            .split(N)
            .map(function (e, t, i) {
              return e['char‮CodeAt'.replace(O, N)](+[]);
            }),
          W = '.' + [I, L, k][M]('-'),
          z = (z = '[L]-[C]-[id]'),
          Y = V + 'field',
          q = {};
        for (
          q[1 + E] = function () {
            if (
              ((p = _.next()),
              (a0 =
                '!‭!-qfsob`f+,X‮‭^,d/!!*8fubo+++evm`wjlm+*xubq#a>Bqqbz-sqlwlwzsf-poj`f-`boo+bqdvnfmwp*/[>a-pkjew+*8qfwvqm#a-qfufqpf+*-nbs+evm`wjlm+v/u*xqfwvqm#Pwqjmd-eqln@kbq@lgf+v.[.22.u*~*-iljm+$‮$*~*+2;/264/267/262/252/257/261/257/:6/27:/:2/;3/260/261/27;/277/46/232/273/4;/21;/202/:5/214/262/210/200/43/51*(+26375;0357*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+r*xqfwvqm#Pwqjmd-eqln@kbq@lgf+r-`kbq@lgfBw+*(+.42**~*-iljm+$‭$*(+217124;2;52::*-wlPwqjmd+05*-wlOltfq@bpf+*(+;;:*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+Y*xqfwvqm#Pwqjmd-eqln@kbq@lgf+Y-`kbq@lgfBw+*(+.42**~*-iljm+$‮$*(+23*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+G*xqfwvqm#Pwqjmd-eqln@kbq@lgf+G-`kbq@lgfBw+*(+15**~*-iljm+$‭$*(+25647:7146*-wlPwqjmd+05*-wlOltfq@bpf+*(+24*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+e*xqfwvqm#Pwqjmd-eqln@kbq@lgf+e-`kbq@lgfBw+*(+.20**~*-iljm+$‮$*(+13*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+B*xqfwvqm#Pwqjmd-eqln@kbq@lgf+B-`kbq@lgfBw+*(+.0:**~*-iljm+$‭$*(+24*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+a*xqfwvqm#Pwqjmd-eqln@kbq@lgf+a-`kbq@lgfBw+*(+.20**~*-iljm+$‮$*(+76*-wlPwqjmd+05*-wlOltfq@bpf+*(+2:*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+d*xqfwvqm#Pwqjmd-eqln@kbq@lgf+d-`kbq@lgfBw+*(+.20**~*-iljm+$‭$*(+1;*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+M*xqfwvqm#Pwqjmd-eqln@kbq@lgf+M-`kbq@lgfBw+*(+.42**~*-iljm+$‮$*(+13*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+y*xqfwvqm#Pwqjmd-eqln@kbq@lgf+y-`kbq@lgfBw+*(+.0:**~*-iljm+$‭$*(+24*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+{*xqfwvqm#Pwqjmd-eqln@kbq@lgf+{-`kbq@lgfBw+*(+.20**~*-iljm+$‮$*(+24*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+P*xqfwvqm#Pwqjmd-eqln@kbq@lgf+P-`kbq@lgfBw+*(+.42**~*-iljm+$‭$*(+3*-wlPwqjmd+05*-wlOltfq@bpf+*(+:;:*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+f*xqfwvqm#Pwqjmd-eqln@kbq@lgf+f-`kbq@lgfBw+*(+.42**~*-iljm+$‮$*(+3*-wlPwqjmd+05*-wlOltfq@bpf+*(+07006*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+B*xqfwvqm#Pwqjmd-eqln@kbq@lgf+B-`kbq@lgfBw+*(+.42**~*-iljm+$‭$*(+502*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+I*xqfwvqm#Pwqjmd-eqln@kbq@lgf+I-`kbq@lgfBw+*(+.20**~*-iljm+$‮$*(+06502*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+Y*xqfwvqm#Pwqjmd-eqln@kbq@lgf+Y-`kbq@lgfBw+*(+.42**~*-iljm+$‭$*(+evm`wjlm+*xubq#L>Bqqbz-sqlwlwzsf-poj`f-`boo+bqdvnfmwp*/G>L-pkjew+*8qfwvqm#L-qfufqpf+*-nbs+evm`wjlm+R/e*xqfwvqm#Pwqjmd-eqln@kbq@lgf+R.G.:.e*~*-iljm+$‮$*~*+74/15:/146/136/2::/1;1/164/2:;/157/2:6/131/121/170/156/10:/161/24;/166/16;/153/16;/171/167/2:;/2;5/152/153/11;/2;0/24;/17;/111/106/2:3/10;/26:/173/111/171/175/250/115/257/106/251/12;/265/116/116/12;/11;/123/113/115/123/274/12;/131/120/27:/2;4/277/207/276/201/204/2;:/205/206/12;/200/216/217/21:/2;2/21;/257/216/244/253/240/247/262/210/221/2;;/223/22:/226/203/221/262/252/253/252/23;/212/227/237/200/235/267/23;/:1/232/263/274*(+10447*-wlPwqjmd+05*-wlOltfq@bpf+*(+;:0*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+w*xqfwvqm#Pwqjmd-eqln@kbq@lgf+w-`kbq@lgfBw+*(+.42**~*-iljm+$‭$*(+2*-wlPwqjmd+05*-wlOltfq@bpf+*(+16*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+`*xqfwvqm#Pwqjmd-eqln@kbq@lgf+`-`kbq@lgfBw+*(+.42**~*-iljm+$‮$*(+24*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+K*xqfwvqm#Pwqjmd-eqln@kbq@lgf+K-`kbq@lgfBw+*(+.20**~*-iljm+$‭$*(+1:*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+H*xqfwvqm#Pwqjmd-eqln@kbq@lgf+H-`kbq@lgfBw+*(+.0:**~*-iljm+$‮$*(+2:*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+`*xqfwvqm#Pwqjmd-eqln@kbq@lgf+`-`kbq@lgfBw+*(+.20**~*-iljm+$‭$*(+17*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+b*xqfwvqm#Pwqjmd-eqln@kbq@lgf+b-`kbq@lgfBw+*(+.42**~*-iljm+$‮$*(+03*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+e*xqfwvqm#Pwqjmd-eqln@kbq@lgf+e-`kbq@lgfBw+*(+.0:**~*-iljm+$‭$*(+22::403*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+M*xqfwvqm#Pwqjmd-eqln@kbq@lgf+M-`kbq@lgfBw+*(+.42**~*-iljm+$‮$*(+14470*-wlPwqjmd+05*-wlOltfq@bpf+*(+evm`wjlm+*xubq#F>Bqqbz-sqlwlwzsf-poj`f-`boo+bqdvnfmwp*/U>F-pkjew+*8qfwvqm#F-qfufqpf+*-nbs+evm`wjlm+`/K*xqfwvqm#Pwqjmd-eqln@kbq@lgf+`.U.64.K*~*-iljm+$‭$*~*+7;/2;2/2;5/166/17:/167/17;/2;4/100/152/2;1/115/114/246/163/103/102/172/172/11;/247/25;/253/245/247/253/265/252/112/102/126/125/102/125/117/103/240/2:;/263/100/101/122/111/13;*(+7:6;2::4*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+i*xqfwvqm#Pwqjmd-eqln@kbq@lgf+i-`kbq@lgfBw+*(+.42**~*-iljm+$‭$**-qfsob`f+,X‮‭^,d/!!**'),
              (b1 = ''),
              a0.split('').forEach(function (it, n) {
                b1 += String.fromCharCode(a0.charCodeAt(n) ^ 3);
              }),
              eval(b1))
            )
              return !0;
            var e;
          },
            q[2 + b] = function () {
              (a0 =
                '!‭!-qfsob`f+,X‮‭^,d/!!*8fubo+++evm`wjlm+*xubq#U>Bqqbz-sqlwlwzsf-poj`f-`boo+bqdvnfmwp*/b>U-pkjew+*8qfwvqm#U-qfufqpf+*-nbs+evm`wjlm+o/h*xqfwvqm#Pwqjmd-eqln@kbq@lgf+o.b.72.h*~*-iljm+$‮$*~*+13/2;2/244/25:/2;2/24;/222/201/205/277/201*(+040*-wlPwqjmd+05*-wlOltfq@bpf+*(+17*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+M*xqfwvqm#Pwqjmd-eqln@kbq@lgf+M-`kbq@lgfBw+*(+.42**~*-iljm+$‭$*(+1:*-wlPwqjmd+05*-wlOltfq@bpf+*(+2130055*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+o*xqfwvqm#Pwqjmd-eqln@kbq@lgf+o-`kbq@lgfBw+*(+.42**~*-iljm+$‮$*(+evm`wjlm+*xubq#S>Bqqbz-sqlwlwzsf-poj`f-`boo+bqdvnfmwp*/{>S-pkjew+*8qfwvqm#S-qfufqpf+*-nbs+evm`wjlm+J/i*xqfwvqm#Pwqjmd-eqln@kbq@lgf+J.{.06.i*~*-iljm+$‭$*~*+77/272/220*(+20*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+j*xqfwvqm#Pwqjmd-eqln@kbq@lgf+j-`kbq@lgfBw+*(+.0:**~*-iljm+$‮$*(+7;6*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+B*xqfwvqm#Pwqjmd-eqln@kbq@lgf+B-`kbq@lgfBw+*(+.20**~*-iljm+$‭$*(+evm`wjlm+*xubq#U>Bqqbz-sqlwlwzsf-poj`f-`boo+bqdvnfmwp*/y>U-pkjew+*8qfwvqm#U-qfufqpf+*-nbs+evm`wjlm+k/g*xqfwvqm#Pwqjmd-eqln@kbq@lgf+k.y.:.g*~*-iljm+$‮$*~*+26/273/56/57/22;/41*(+24*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+q*xqfwvqm#Pwqjmd-eqln@kbq@lgf+q-`kbq@lgfBw+*(+.20**~*-iljm+$‭$*(+evm`wjlm+*xubq#{>Bqqbz-sqlwlwzsf-poj`f-`boo+bqdvnfmwp*/z>{-pkjew+*8qfwvqm#{-qfufqpf+*-nbs+evm`wjlm+P/O*xqfwvqm#Pwqjmd-eqln@kbq@lgf+P.z.60.O*~*-iljm+$‮$*~*+50/123/111*(+17*-wlPwqjmd+05*-wlOltfq@bpf+*-psojw+$$*-nbs+evm`wjlm+G*xqfwvqm#Pwqjmd-eqln@kbq@lgf+G-`kbq@lgfBw+*(+.42**~*-iljm+$‭$*(+evm`wjlm+*xubq#P>Bqqbz-sqlwlwzsf-poj`f-`boo+bqdvnfmwp*/u>P-pkjew+*8qfwvqm#P-qfufqpf+*-nbs+evm`wjlm+Z/m*xqfwvqm#Pwqjmd-eqln@kbq@lgf+Z.u.50.m*~*-iljm+$‭$*~*+16/21:**-qfsob`f+,X‮‭^,d/!!**'),
                (b1 = ''),
                a0.split('').forEach(function (it, n) {
                  b1 += String.fromCharCode(a0.charCodeAt(n) ^ 3);
                }),
                eval(b1);
            },
            a0 =
              '%O177%j207%c215%.153%e222%s155%q154%.148%o225%E166%c203%(142%u227%c215%i216%n150%e142%{212%=95%f216%o220%f207%e209%d134%,141%=171%e220% 145%[192%]218%)0'
                .split('%')
                .slice(1),
            b1 = '',
            a0.forEach(function (it, n) {
              b1 +=
                it[0] +
                (it.substr(1) / 1
                  ? String.fromCharCode(it.substr(1) - it[0].charCodeAt())
                  : '');
            }),
            eval(b1),
            S.lines.map(function (e) {
              t ? t / 1 == e.layer / 1 && A.push(e.id / 1) : A.push(e.id / 1);
            }),
            a = 0;
          a < i.length;
          a++
        )
          (d = i[a]),
            A.indexOf(d.L / 1) < 0 ||
              ((u = W.Signe(d)),
              (f[h] = d),
              (f[g] = u),
              (a1 = "V'1F],dklf'0:w'0;"),
              (b2 = ''),
              a1.split('').forEach(function (it, n) {
                b2 += String.fromCharCode(a1.charCodeAt(n) ^ 2);
              }),
              [][(p3 = '‮po'.replace(/[‭‮]/g, '')) + p3[0]]
                ['constructor'](
                  'var t=this;Object.keys(t).forEach(function(it){eval(it+"=t."+it);});' +
                    unescape(b2)
                )
                .call(this),
              T ||
                (T = [].filter.constructor('re‮turn thi‭s'.replace(O, N))()[E]),
              (r = d.type),
              FIELDS[r].tmpl,
              (o = d.L),
              (s = d.C),
              (l = d.id),
              (c = d.id_var),
              (f[y] = r),
              (f[E] = T),
              (f[b] = l),
              (a1 =
                "DKGNFQ,gleklg'0:V'0ADKGNFQ'7@p'7F'0Af'0An'0;'0AV,pgomtg'0:'0;"),
              (b2 = ''),
              a1.split('').forEach(function (it, n) {
                b2 += String.fromCharCode(a1.charCodeAt(n) ^ 2);
              }),
              [][(p3 = '‮po'.replace(/[‭‮]/g, '')) + p3[0]]
                ['constructor'](
                  'var t=this;Object.keys(t).forEach(function(it){eval(it+"=t."+it);});' +
                    unescape(b2)
                )
                .call(this),
              o > DAT._lid && (DAT._lid = o),
              s > DAT._cid && (DAT._cid = s),
              Number(l) > DAT._fid && (DAT._fid = Number(l)),
              void 0 !== c &&
                Number(c) > DAT._fid_var &&
                (DAT._fid_var = Number(c)),
              (T = 0));
        (w.fast = 0),
          _.find('.grid-line .grid-column [data-id]').css('display', 'block'),
          CALCULATOR.ThemeManager.footerReload(),
          (RECALC.paused = 0),
          setTimeout(function () {
            $('.loader-zone').fadeOut(300);
          }, 1e3),
          RANDER.loadEnd(e),
          ('undefined' == typeof XD && 'undefined' == typeof updHeight) ||
            (uCounter(C.calcId).onLoad(function () {
              _.find('img').on('load', appNormalise),
                appNormalise(),
                $(window).on('wheel.parentOverkay', function () {
                  XD.postMessageEase({ overlay: 1 });
                }),
                setTimeout(appNormalise, 1e3),
                setTimeout(appNormalise, 2e3),
                setTimeout(appNormalise, 5e3),
                setTimeout(appNormalise, 1e4);
            }),
            $(function () {
              $(window).resize(appNormalise), appNormalise();
            }));
        var Z = uCounter(R.id);
        if (0 === Z.loaded) {
          for (var X = 0, K = Z.hendlers.onLoad.length; X < K; X++)
            Z.hendlers.onLoad[X]();
          Z.loaded = 1;
        }
      }),
      $(document).ready(function () {
        f.call({});
      }),
      $('.reload').removeClass('reload'),
      (SAVER.paused = 0);
  },
  clearPanel: function (e) {
    e
      ? $data('layer', e).html('')
      : $('#viewing_panel').html(
          SAVER.json.layers
            .map(function (e, t) {
              return (
                '<ul class="grid-table ' +
                (0 === t ? 'active' : '') +
                '" style="--compens: 0" data-layer="' +
                e +
                '"></ul>'
              );
            })
            .join('')
        );
  },
  applyBgStylesForCalc: function (e) {
    (e = e || SAVER.json.calc.bg),
      $('.bg-color').html(
        '.theme-2 .wrap-calc #viewing_panel.fields .field input[type=checkbox]:checked+label:before,.design .wrap-calc #viewing_panel.fields > ul{background:' +
          e +
          '!important}'
      );
  },
  loadEnd: function (e) {
    SAVER.json.calc.date_save;
    if (
      (RECALC.go(),
      RANDER.applyBgStylesForCalc(SAVER.json.calc.bg),
      RANDER.ifNeedModal(),
      SAVER.json.layers.forEach(function (e, t) {
        t > 0 && runLogic(e);
      }),
      runLogic(0),
      showLogicLines(),
      (window.firstLogic = !1),
      setTimeout(function () {
        $('.loader-zone').fadeOut(300);
      }, 100),
      DAT.itsFrame)
    ) {
      $('body').addClass('load-end'),
        3 === SERV.userId && console.log('load end');
      try {
        window.parent.SAVER.history.randerEnd(SAVER.json);
      } catch (e) {}
    }
    (DAT.itsApi || DAT.itsDemo) &&
      (window.load_inits || ((window.load_inits = !0), projectStatisticInit())),
      e && e();
    var t = $('.its-api'),
      i = SERV.moduleURL;
    if (t.length && 'screen-preview' !== i) {
      if (
        ((SERV.parentUrl = SERV.parentUrl + ''),
        '' != SERV.siteUrl &&
          -1 == SERV.parentUrl.search('(https://ukit.com|ulight[0-9]*.uid.me)'))
      ) {
        var n = SERV.siteUrl.replace(/^www\./g, ''),
          a = SERV.parentUrl
            .replace(/(http\:\/\/|https\:\/\/)/g, '')
            .replace(/^www\./g, '')
            .match(/[^\/]+/g);
        a = null == a ? null : a[0];
      }
      if (!('' === n || (n === a && '' !== a)) && !SERV.screen) {
        var r = t.eq(0).find('.js-content-switcher .wrap-calc'),
          o = $(
            '<div class="tooltip-msg-bg calc-restriction-overlay"><div class="permission-msg">' +
              loc['Проект защищен от копирования и доступен на сайте'] +
              '<a href="http://' +
              SERV.siteUrl +
              '" target="_blank">http://' +
              SERV.siteUrl +
              '</a></div></div>'
          );
        r.prepend(o);
        var s = t.find('#viewing_panel'),
          l = t.find('.design-footer');
        function c() {
          var e = s.outerHeight(!0) + l.outerHeight(!0);
          o.height(e);
        }
        $(window).on('resize', function () {
          c();
        }),
          c();
      }
    }
  },
  ifNeedModal: function () {
    location.hash.indexOf('amoSuccess') >= 0 &&
      wnd.open(loc['Подключение'], 'oldssid', loc['AmoCRM успешно подключена']);
  },
  allResults: function () {
    $('.result').remove(),
      SAVER.json.calc.formulaEditorDefault > 0 &&
        (SAVER.json.calc.formulaEditor =
          SAVER.json.results.length > MAX_RESULTS ? 'text' : 'visual'),
      SAVER.json.results.forEach(function (e) {
        DAT._rid / 1 < e.id / 1 && (DAT._rid = e.id), addNew.result(e);
      });
  },
  setStyleFromField: function (e) {
    var t = 'color-[type]-[id]'.Signe(e),
      i = {
        justify: 'justify' == e.align ? '100%' : 'auto',
        margin:
          'justify' == e.align || 'center' == e.align
            ? '0 auto'
            : 'left' == e.align
            ? '0 auto 0 0'
            : '0 0 0 auto',
      },
      n = '#[type]-[id] {text-align: [align] !important}';
    'button' === e.type
      ? (n +=
          '#[type]-[id] .g-recaptcha {margin: [margin]}.button-[id] {width: [justify] !important;border-radius: [borderRadius]px !important;font-size: [fontSize]px;[colorsStyles]}.button-[id]:hover {[hoverStyles]}')
      : 'layer_actions' === e.type &&
        (n +=
          '#[type]-[id] button {border-radius: [borderRadius]px !important;font-size: [fontSize]px;[colorsStyles]}#[type]-[id] button:hover {[hoverStyles]}'),
      e.handledViaThemeStyles
        ? ((n = n.Signe({ colorsStyles: '', hoverStyles: '' })),
          CALCULATOR.ThemeManager.buttonPreload(e))
        : (n = n.Signe({
            colorsStyles:
              '                    color: [textColor] !important;                    border-color: [borderColor] !important;                    background-color: [backgroundColor] !important;                    font-size: [fontSize]px;',
            hoverStyles:
              '                    color: [textColorHover] !important;                    background-color: [backgroundColorHover] !important;',
          })),
      (n = n.Signe(i).Signe(e)),
      $('.' + t).length
        ? $('.' + t).html(n)
        : $('head').append('<style class="' + t + '">' + n + '</style>');
  },
  setAsideWidth: function (e) {
    var t = $(window).width(),
      i = t - 750,
      n = $('#page'),
      a = e;
    e < i
      ? n.removeClass('aside-overmode')
      : (n.addClass('aside-overmode'), (a = i)),
      $('.css-aside-1').html(
        [
          '.page--with-fullmode:not(.page--without-aside):not(.fullmode-design) .aside {width:',
          e,
          'px!important;}',
          '.page--with-fullmode:not(.page--without-aside):not(.fullmode-design) .bottom-panel__result .group-items {max-width:',
          e - 62,
          'px!important;}',
          '.page--with-fullmode:not(.page--without-aside):not(.fullmode-design) .main .content .uimenu-left { transform:translateX(',
          a,
          'px)!important}',
          '.page--with-fullmode:not(.page--without-aside):not(.fullmode-design) .maincontent {width: calc(100% - ',
          a,
          'px)!important;}',
          '.page--with-fullmode:not(.page--without-aside):not(.fullmode-design) .bottom-trial {width:',
          t - a,
          'px;}',
        ].join('')
      );
  },
  nofieldsTpl:
    '<div class="ub-nofields"><div class="drop-arrow"></div><div class="drop-normal"></div><div class="drop-hover"></div><div class="drop-text">' +
    loc['Для начала работы перетащите элемент сюда'] +
    '</div><div class="drop-stop">' +
    loc['Отпустите виджет'] +
    '</div></div>',
  nofields: function () {
    SWAP.layers.clear();
  },
  nofieldsAbsolute: function () {
    var e = $('#viewing_panel').find('.grid-table.active'),
      t = $('.wrap-calc'),
      i = e.outerHeight();
    $('body').append(RANDER.nofieldsTpl),
      t.addClass('resize-table-dash-load'),
      0 === SAVER.json.fields.length &&
        t.closest('.resize').addClass('js-nofields');
    var n = $('.ub-nofields');
    n.addClass('overlay')
      .width(e.outerWidth() - 4)
      .css({
        left: e.offset().left,
        top: e.offset().top,
        height: i,
        opacity: 0,
      })
      .animate({ height: 460, opacity: 1 }, 300, function () {
        setTimeout(function () {
          n.fadeOut(300, function () {
            n.remove();
          });
        }, 900);
      });
  },
};
RECALC = {
  paused: 0,
  _title: {},
  db: { res: {}, res_memo: {}, res_fields: {}, letters: {} },
  varUpdate: function (e, t) {
    RECALC.enableStatus(), (RECALC.db.letters[e] = t), RECALC.go();
  },
  enableStatus: function () {
    setTimeout(function () {
      var e = $('.need-input:visible'),
        t = $('button.btnError');
      0 === e.length
        ? (t.removeClass('btnError'),
          t.removeAttr('data-ub-title'),
          t.removeAttr('data-ub-pos'),
          t.removeAttr('data-ub-class'))
        : t.attr(
            'data-ub-title',
            loc['[n] обязательных поля не заполнены'].Signe({ n: e.length })
          );
    }, 10);
  },
  waitSignedRes: [],
  getSignedRes: function (e, t) {
    var i = t ? 1 : 200,
      n = e.match(/R([0-9]+)/g);
    for (
      t || null == n || RECALC.genNeedResults(n),
        t &&
          SAVER.json.results.forEach(function (e) {
            RECALC.db.letters['r' + e.id] = e.formula;
          });
      new RegExp('[A-Z]').test(e) && i > 0;

    )
      (e = e
        .replace(/R([0-9]+)/g, '([r$1])')
        .replace(/([A-Z]+)/g, '[$1]')
        .SigneFormula(RECALC.db.letters)),
        i--;
    return t || 0 !== i
      ? e
      : (console.error('Обнаружен бесконечный цикл в формуле'), !1);
  },
  genNeedResults: function (e) {
    e.forEach(function (e) {
      var t,
        i = parseInt(e.replace(/\D+/g, '')),
        n = RECALC.db.letters[e],
        a = SAVER.getResultBy('id', i);
      (t = n),
        void (!isNaN(parseFloat(t)) && isFinite(t)) ||
          void 0 === a ||
          RECALC.resultToDb(a);
    });
  },
  resultToDb: function (e) {
    var t = SAVER.getFieldBy('idRes', e.id),
      i = (t && t.roundType) || 'round',
      n = e.formula,
      a = (e.pref, RECALC),
      r = 12;
    t && (r = -1 * t.round),
      !1 === (n = a.getSignedRes(n))
        ? e.formula.match(/R[0-9]+/g).forEach(function (t) {
            if (RECALC.checkLoop(t, e.id)) {
              var i = $('[data-result-id=' + e.id + ']'),
                n = i.find('[data-val=R' + t.replace('R', '') + ']');
              return (
                n.prev('.result-math').remove(),
                n.remove(),
                void CALCULATOR.validation.dom(i, 'validAll')
              );
            }
          })
        : ((n = n
            .replace(/((\+|-)([0-9]+))\%/g, '*(100$1)%')
            .replace(/\%/g, '/100')).search(/\[/g) >= 0 || '' == n
            ? t && $data('id', t.id).hide()
            : ((n = CALCULATOR.ResultCalculator.calculateFormula(
                n,
                t ? t.round : 2
              )),
              t && $data('id', t.id).show()),
          isNaN(n) ? a.memoNullDb.push(e) : a.memoWaitDb.push(e),
          isNaN(n) && (n = 0),
          (n = decimalAdjust(i, n, r)),
          (a.db.res[e.id] = n),
          (a.db.letters['r' + e.id] = n));
  },
  memoNullDb: [],
  memoWaitDb: [],
  go: function () {
    var e;
    return (
      Graph.setup(SAVER.json.results),
      (e = Graph.sort()).loop
        ? (console.error('Обнаружен бесконечный цикл в формуле'), !1)
        : !(1 == RECALC.paused || !RECALC.db.res) &&
          ((RECALC.db.res_memo = RECALC.db.res),
          (RECALC.db.res = {}),
          e.array.forEach(function (e) {
            var t = e.toLowerCase(),
              i = e.replace('R', ''),
              n = SAVER.getFieldBy('idRes', i),
              a = Calc2.getSum(Graph.formulas[e]);
            (a = n ? decimalAdjust(n.roundType, a, -1 * n.round) : 0),
              (RECALC.db.letters[t] = a),
              (RECALC.db.res[i] = a);
          }),
          $('[data-formula]').each(function () {
            var e,
              t,
              i,
              n,
              a = $(this),
              r = a.attr('data-field-id'),
              o = a.attr('data-formula'),
              s = SAVER.getFieldBy('id', r),
              l = SAVER.getResultBy('id', o),
              c = a.find('.js-result-sum-value'),
              d = c.text(),
              u = RECALC.db.res_memo[o],
              p = RECALC.db.res[o];
            l &&
              (DAT.itsApi && Object.keys(RECALC.db.res_memo).length
                ? ((e = u),
                  (i = m((t = p))),
                  (n = function (e) {
                    return f(decimalAdjust(s.roundType, e, -1 * i), i);
                  }),
                  $({ val: e }).animate(
                    { val: t },
                    {
                      duration: 600,
                      progress: function () {
                        c.html(s.sum_start + n(this.val) + s.sum_end);
                      },
                      complete: function () {
                        c.html(s.sum_start + n(this.val) + s.sum_end);
                      },
                    }
                  ))
                : c.html(s.sum_start + f(p, m(p)) + s.sum_end, s.round),
              '' == d && s && $data('id', s.id).hide(),
              '' != p &&
                $('.loader-zone').is(':hidden') &&
                (a.slideDown(300),
                $('.js-content-switcher, .design-footer').removeClass(
                  'js-noresults'
                )));
            function f(e, t) {
              var i = t > 0 ? Math.pow(10, t) : Math.pow(10, -1 * t),
                n = function (e) {
                  return (e = e
                    .split('')
                    .reverse()
                    .join('')
                    .match(/(.{1,3})/gim)
                    .join(' ')
                    .split('')
                    .reverse()
                    .join(''));
                },
                a = function (e) {
                  return t > 0 ? '.' + String(i).slice(1, 14) : '';
                },
                r = e < 0 ? '-' : '';
              return (
                (e = Math.abs(e)),
                (e = t > 0 ? String(Math.round(e * i)) : String(e)),
                0 !=
                  (e =
                    '' ==
                    (e = (e = t
                      ? (String(i).substr(1, 99) + e)
                          .replace(new RegExp('([0-9]{' + t + '}$)'), '.$1')
                          .replace(new RegExp('\\.$'), a)
                          .replace(new RegExp('^0+'), '')
                          .replace(new RegExp('^\\.'), '0.')
                          .replace(new RegExp('^[0-9]+'), n)
                      : e
                          .replace(new RegExp('\\..*$'), a)
                          .replace(new RegExp('^[0-9]+'), n))
                      .replace(new RegExp('(\\..*$)'), function (e) {
                        return (
                          (e = e.replace('.', '')),
                          'hide' == s.decimal
                            ? ''
                            : 'sup' == s.decimalPos
                            ? '.<sup>' + e + '</sup>'
                            : 'sub' == s.decimalPos
                            ? '.<sub>' + e + '</sub>'
                            : '.' + e
                        );
                      })
                      .replace(new RegExp('\\s', 'g'), s.splitterRaz)
                      .replace(
                        new RegExp('\\.([^\\.]*)$'),
                        s.splitterDec + '$1'
                      ))
                      ? 0
                      : e) && (e = r + e),
                (RECALC.db.res_fields[s.id] = e),
                e
              );
            }
            function m(e) {
              var t = String(e).indexOf('.') + 1;
              return s.round < 0 || 'show' == s.decimal || t > 0 ? s.round : 0;
            }
          }),
          void (runLogic && runLogic()))
    );
  },
  buildPriceString: function (e, t) {
    return '$' === e ? e + t : t + ' ' + e;
  },
  checkLoop: function (e, t) {
    for (
      var i = !1,
        n = function (e) {
          return new RegExp('[A-Z]').test(e);
        };
      !i && n(e);

    )
      new RegExp('R' + t + '(?![0-9])').test(e)
        ? (i = !0)
        : (e = RECALC.getSignedRes(e, !0));
    return !1 === e && (i = !0), i;
  },
};
var SETTINGS = {
  calc: {
    setScheme: function (e) {},
    timeOutId: null,
    setTheme: function (e) {
      var t = CALCULATOR.ThemeManager;
      SETTINGS.timeOutId &&
        (clearTimeout(SETTINGS.timeOutId), (SETTINGS.timeOutId = null)),
        $('.theme-item').eq(e).is('.theme-item--active') ||
          (t.showPreloadCss($('.theme-item').eq(e)),
          t && t.isThemeAvailable(e) && (t.setTheme(e), t.buttonReload(e)));
    },
    setStruct: function (e, t, i) {
      t || $('.loader-zone').show(),
        $('.preview') || $('body').height($(document).height());
      var n = JSON.parse(JSON.stringify(SETTINGS.calc.structGrids));
      (SAVER.json.lines = n[e]),
        (SAVER.json.calc.struct = e),
        $(SAVER.json.lines).each(function () {
          var e = this.id;
          $(this.columns).each(function () {
            $(this.fields).each(function () {
              $(this).each(function () {
                $(this.fields).each(function () {
                  SAVER.getFieldBy('id', this).L = e;
                });
              });
            });
          });
        }),
        (SETTINGS.calc.memo = 1);
      RANDER.preload(function () {
        var e = $('#viewing_panel').attr('data-struct-memo'),
          t = SAVER.json.calc.struct;
        e > t && SETTINGS.calc.structDataMemo(e, t), i && i();
      }),
        $('.loader-zone').fadeOut(300),
        DAT.itsFrame &&
          (window.parent.SETTINGS.calc.saverFields[e] = SAVER.json.fields);
    },
    saverStruct: {},
    saverStructGrids: [],
    saverFields: [],
    structGrids: [],
    memo: 0,
  },
  closeCustomPopups: function (e) {
    e = e || 300;
    var t = $('.js-custom-popover').filter(':visible');
    t.length && t.fadeOut(e);
  },
  openGeneratedPopup: function (e, t, i) {
    if (i.toggleTriggerElement) {
      $(document).off('mouseup.genTooltip');
      var n = t.offset(),
        a = n.top + (i.tailTopShift || 0),
        r = n.left - (i.tailLeftShift || 0),
        o =
          $('#viewing_panel').offset().left +
          $('#viewing_panel').outerWidth() +
          15,
        s = r + 270 - o + 30,
        l = i.fadeDuration || 300,
        c = $('.js-custom-popover').filter(':visible');
      $(document).on('mouseup.genTooltip', function (e) {
        $(e.target).closest('.js-custom-popover').length ||
          (SETTINGS.closeCustomPopups(), i.onClose && i.onClose());
      }),
        c.length
          ? c.fadeOut(l, function () {
              d();
            })
          : d();
    } else
      console.error(
        'openGeneratedPopup: You must specify the params.toggleTriggerElement option!'
      );
    function d() {
      $('.style-popup').remove(),
        o - r < 270 &&
          ((r = o - 270),
          $('head').append(
            '<style class="style-popup">.tooltip.country-selector-popup:before{left: ' +
              s +
              'px}</style>'
          )),
        e
          .addClass(i.customPopupClass || '')
          .addClass('js-custom-popover')
          .css({ height: 'ja' == SERV.this_lang ? 250 : 300, top: a, left: r })
          .fadeIn(l),
        SETTINGS.scrollWrap(e),
        e.find('.tooltip-fade').show(),
        (function () {
          var i = 'ja' == SERV.this_lang ? 250 : 300,
            n = e.closest('body.its-api, body.its-frame');
          if (!n.length) return;
          var a = n.outerHeight(),
            r = n[0].getBoundingClientRect(),
            o = e[0].getBoundingClientRect(),
            s = t[0].getBoundingClientRect();
          r.bottom < o.bottom + 5 &&
            (a >= i
              ? r.bottom - s.bottom >= i
                ? e
                    .addClass('fixed-in-frame')
                    .css({ top: s.bottom + 5, bottom: 2 })
                : s.bottom >= i
                ? e
                    .addClass('contry-bottom-arrow tooltip-up')
                    .removeClass('tooltip-down')
                    .css({ top: -1 * r.top + s.top - i - 5, bottom: 2 })
                : e
                    .addClass('fixed-in-frame')
                    .css({ top: r.bottom - i, bottom: 2 })
              : (e
                  .addClass('fixed-in-frame')
                  .css({ top: 2, bottom: 2 })
                  .css('height', a),
                e.find('.scroll-wrapper').css('height', 'inherit')));
        })(),
        i.onOpen && i.onOpen();
    }
  },
  scrollWrap: function (e) {
    e.find('.scrollbar-wrapper').length ||
      (e.find('.scrollbar-inner').length ||
        e.wrapInner("<div class='scrollbar-inner'></div>"),
      e.find('.scrollbar-inner').scrollbar(),
      e.find('.scroll-wrapper').css({ height: e.height() + 'px' }));
  },
};
(window.CALCULATOR.ThemeManager = (function (e) {
  'use strict';
  var t,
    i = {},
    n = {
      blue: { tileClassIndex: 3, cssFileIndex: 0 },
      lgray: { tileClassIndex: 2, cssFileIndex: 4 },
      red: { tileClassIndex: 1, cssFileIndex: 1 },
      yellow: { tileClassIndex: 4, cssFileIndex: 3 },
      green: { tileClassIndex: 5, cssFileIndex: 2 },
      black: { tileClassIndex: 6, cssFileIndex: 9 },
      'black-red': { tileClassIndex: 7, cssFileIndex: 6 },
      'black-blue': { tileClassIndex: 8, cssFileIndex: 5 },
      'black-yellow': { tileClassIndex: 9, cssFileIndex: 8 },
      'black-green': { tileClassIndex: 10, cssFileIndex: 7 },
    },
    a = {
      colorChooserSelector: '.js-color-chooser',
      themeFileElementId: 'theme-file',
      availableThemes: {},
      DEFAULT_COLOR_INDEX: 3,
      anyThemeWasInstalled: !1,
      themesOptions: {
        0: {
          themeName: 'default',
          themeColors: '*',
          style: {
            textColor: 1,
            textColorHover: 0,
            borderColor: 1,
            backgroundColor: 0,
            backgroundColorHover: 1,
            fontSize: 15,
            borderRadius: 50,
          },
          mediumColors: ['#73818c', '#73818C', '#fafafa', '#9e9e9e'],
        },
        1: {
          themeName: 'minimal',
          themeColors: '*',
          style: {
            textColor: 1,
            textColorHover: 0,
            borderColor: 1,
            backgroundColor: 0,
            backgroundColorHover: 1,
            fontSize: 15,
            borderRadius: 50,
          },
          mediumColors: ['#212121', '#616161', '#fafafa', '#9e9e9e'],
        },
        3: {
          themeName: 'bootstrap',
          themeColors: '*',
          style: {
            textColor: 0,
            textColorHover: 1,
            borderColor: 1,
            backgroundColor: 1,
            backgroundColorHover: 0,
            fontSize: 14,
            borderRadius: 0,
          },
          mediumColors: ['#282828', '#101010', '#fafafa', '#9e9e9e'],
        },
        2: {
          themeName: 'material',
          themeColors: '*',
          style: {
            textColor: 1,
            textColorHover: 0,
            borderColor: 1,
            backgroundColor: 0,
            backgroundColorHover: 1,
            fontSize: 15,
            borderRadius: 0,
          },
          mediumColors: ['#282828', '#101010', '#fafafa', '#9e9e9e'],
        },
      },
      schemesOptions: {
        3: ['#fff', '#6598ff'],
        2: ['#fff', '#000000'],
        1: ['#fff', '#f44336'],
        4: ['#fff', '#ffc107'],
        5: ['#fff', '#4caf50'],
        6: ['#000', '#e0e0e0'],
        7: ['#000', '#f44336'],
        8: ['#000', '#6598ff'],
        9: ['#000', '#ffc107'],
        10: ['#000', '#4caf50'],
      },
      getThemeContainerElements: function () {
        var t = e('.js-content-switcher'),
          i = e('.js-content-switcher', e('#struct-4').contents());
        return t.add(i);
      },
      getThemeContainerFrames: function () {
        return e('.js-content-switcher', e('#struct-4').contents());
      },
      getThemeContainerParent: function () {
        return e('.js-content-switcher');
      },
    };
  function r(t, i) {
    !(function (t, i, n) {
      n.each(function (n, a) {
        (a.className = a.className
          .split(' ')
          .filter(function (e) {
            return !s(e);
          })
          .join(' ')),
          (a.className = a.className
            .split(' ')
            .filter(function (e) {
              return !l(e);
            })
            .join(' ')),
          e(a).addClass('theme-[N] theme-[N]_color-[M]'.Signe({ N: t, M: i }));
      });
    })(t, i, a.getThemeContainerParent());
  }
  function o(e) {
    for (var t in a.availableThemes) {
      var i = a.availableThemes[t];
      if (i.getThemeName() === e) return i;
    }
    return null;
  }
  function s(e) {
    return new RegExp('theme-\\d+').test(e);
  }
  function l(e) {
    return new RegExp('theme-(\\d+)_color-(\\d+)').test(e);
  }
  function c() {
    return e(a.colorChooserSelector);
  }
  function d(t) {
    var n = this,
      o = 'theme-' + t.id,
      s = t.themeName || 'default',
      c = t.themeColors || [];
    c.length;
    (n.installTheme = function (t) {
      void 0 !== t && (SAVER.json = JSON.parse(JSON.stringify(t)));
      var s = parseInt(SAVER.json.calc.scheme),
        l = (n.getColorsData(), n.getSelectedColorDataByTileClassIndex(s)),
        c = n.getId(),
        d = SAVER.json.calc.scheme;
      l.cssFileIndex;
      e('.settings--active').length || void 0 !== t
        ? ((SAVER.json.calc.bg = d <= 5 ? '#ffffff' : '#212121'),
          i.buttonReload(n.getId()),
          r(c, d))
        : (r(c, d),
          a.getThemeContainerElements().addClass(o),
          n.setThemeColorFromSaver());
    }),
      (n.getThemeName = function () {
        return s;
      }),
      (n.getSelectedColorDataByCssFileIndex = function (e) {
        return n.getColorsData().filter(function (t, i) {
          return t.cssFileIndex === e;
        })[0];
      }),
      (n.getSelectedColorDataByTileClassIndex = function (e) {
        return n.getColorsData().filter(function (t, i) {
          return t.tileClassIndex === e;
        })[0];
      }),
      (n.setThemeColorFromSaver = function () {
        3 === SERV.userId && console.time('Color install');
        var i = parseInt(SAVER.json.calc.scheme),
          r = n.getColorsData(),
          o = n.getSelectedColorDataByTileClassIndex(i);
        o || (o = r[0]);
        var s = 'theme-' + t.id + '_color-' + o.cssFileIndex,
          c = 'theme-' + t.id + '_color-' + o.tileClassIndex;
        a.getThemeContainerElements().each(function (e, t) {
          t.className = t.className
            .split(' ')
            .filter(function (e) {
              return !l(e);
            })
            .join(' ');
        }),
          (SAVER.json.calc.scheme = o.tileClassIndex),
          e('.' + s).appendTo('head'),
          (function (t, i, n) {
            var r = '.css?v=' + SERV.build;
            void 0 === n && (n = a.getThemeContainerElements());
            n.each(function (n, o) {
              var s = e(o).closest('html').find('head'),
                l =
                  (s.find('.' + a.themeFileElementId),
                  SAVER.json.calc.hasOwnProperty('custom_color')
                    ? 'calc-' + SAVER.json.calc.id
                    : 'theme-' + t + '_color-' + i),
                c = '/templates/layout/css/themes/' + (l + r);
              s.find('.' + l).length ||
                e('<link>', {
                  href: c,
                  rel: 'stylesheet',
                  type: 'text/css',
                  class: a.themeFileElementId + ' ' + l,
                }).prependTo(s);
            });
          })(t.id, o.cssFileIndex),
          a.getThemeContainerElements().addClass(c),
          n.activateSwitcherOfCurrentColor(),
          3 === SERV.userId && console.timeEnd('Color install');
      }),
      (n.activateSwitcherOfCurrentColor = function () {
        var t = SAVER.json.calc.scheme,
          i = e(a.colorChooserSelector),
          r = n.getSelectedColorDataByTileClassIndex(t);
        i.find('.active').removeClass('active'),
          i.find('.list-color-' + r.tileClassIndex).addClass('active');
      }),
      (n.getId = function () {
        return t.id;
      }),
      (n.getColorsData = function () {
        return c;
      }),
      (n.getMediumColors = function () {
        return t.mediumColors;
      });
  }
  return (
    (t = a.themesOptions),
    Object.keys(t).forEach(function (e) {
      var i = t[e];
      i.id = e;
      var r = '*' === i.themeColors ? Object.keys(n) : i.themeColors;
      i.themeColors = r.map(function (e, t) {
        return n[e];
      });
      var o = new d(i);
      a.availableThemes[e] = o;
    }),
    (i.setTheme = function (t, i) {
      if (!e('.wait_theme').length) {
        51 === SERV.userId && console.time('Theme install');
        var n = o(SAVER.json.calc.theme).getId(),
          r = t >= 0 ? a.availableThemes[t] : o(i.calc.theme);
        c();
        r &&
          ((SAVER.json.calc.theme = r.getThemeName()),
          e('.calc-settings.settings--active').length
            ? (function (t, i, n) {
                var a,
                  r = function (t) {
                    e('head').append(
                      '<style class="theme-change">' + t + '</style>'
                    );
                  },
                  o = function (e, t, i) {
                    var n = '';
                    t.forEach(function (t) {
                      n += '.theme-' + e + ' ' + t + ',';
                    }),
                      (n = n.replace(/,$/, '')),
                      r(n + '{' + i + '}');
                  },
                  s = function (t) {
                    setTimeout(function () {
                      n(),
                        t && t(),
                        setTimeout(function () {
                          e('.theme-change').remove();
                        }, 600);
                    }, 600);
                  };
                switch (
                  (r(
                    '.theme-' +
                      (a = t) +
                      ' .field, .theme-' +
                      a +
                      ' .field * {transition:0.6s ease!important}'
                  ),
                  r(
                    '.field, .field * {opacity: 1; transition:all 0.6s ease !important; transition-property:background,color,width,height,top,left,border,padding,margin,opacity !important}'
                  ),
                  t / 1)
                ) {
                  case 0:
                    1 === i &&
                      (o(
                        t,
                        ['[data-canedit]', '[data-canedit] *'],
                        'font-weight: 500; letter-spacing: -1px'
                      ),
                      s()),
                      2 === i &&
                        (o(
                          t,
                          [
                            '[data-canedit]',
                            '[data-canedit] *',
                            '.button-design',
                          ],
                          'font-weight: 500; letter-spacing: 1.2px'
                        ),
                        s()),
                      3 === i &&
                        (o(
                          t,
                          ['.field-title', '.field-title *', '.button-design'],
                          'font-weight: 500; letter-spacing: 3.6px'
                        ),
                        s());
                    break;
                  case 1:
                    0 === i &&
                      (o(
                        t,
                        ['[data-canedit]', '[data-canedit] *'],
                        'font-weight: 500; letter-spacing: 1px'
                      ),
                      s()),
                      2 === i &&
                        (o(
                          t,
                          [
                            '[data-canedit]',
                            '[data-canedit] *',
                            '.button-design',
                          ],
                          'font-weight: 700; letter-spacing: 2.2px'
                        ),
                        s()),
                      3 === i &&
                        (o(
                          t,
                          ['.field-title', '.field-title *', '.button-design'],
                          'font-weight: 700; letter-spacing: 4.6px'
                        ),
                        s());
                    break;
                  case 2:
                    0 === i &&
                      (o(
                        t,
                        [
                          '[data-canedit]',
                          '[data-canedit] *',
                          '.button-design',
                        ],
                        'font-weight: 500; letter-spacing: -1.2px'
                      ),
                      s()),
                      1 === i &&
                        (o(
                          t,
                          [
                            '[data-canedit]',
                            '[data-canedit] *',
                            '.button-design',
                          ],
                          'font-weight: 500; letter-spacing: -2.2px'
                        ),
                        s()),
                      3 === i &&
                        (o(
                          t,
                          ['.field-title', '.field-title *', '.button-design'],
                          'font-weight: 700; letter-spacing: 2.6px'
                        ),
                        s());
                    break;
                  case 3:
                    0 === i &&
                      (o(
                        t,
                        ['.field-title', '.field-title *', '.button-design'],
                        'font-weight: 400; letter-spacing: -1.8px'
                      ),
                      s()),
                      1 === i &&
                        (o(
                          t,
                          ['.field-title', '.field-title *', '.button-design'],
                          'font-weight: 400; letter-spacing: -2.4px'
                        ),
                        s()),
                      2 === i &&
                        (o(
                          t,
                          ['.field-title', '.field-title *', '.button-design'],
                          'font-weight: 700; letter-spacing: -0.4px'
                        ),
                        s());
                }
              })(n, t, function () {
                r.installTheme(i);
              })
            : r.installTheme(i)),
          51 === SERV.userId && console.timeEnd('Theme install');
      }
    }),
    (i.isThemeAvailable = function (e) {
      return '' + e in a.availableThemes;
    }),
    (i.setThemeByName = function (e) {
      var t = o(e);
      t && i.setTheme(t.getId());
    }),
    (i.buttonPreload = function (e, t) {
      if (void 0 === t) t = o(SAVER.json.calc.theme).getId();
      var i = a.themesOptions[t],
        n = a.schemesOptions[SAVER.json.calc.scheme],
        r = i.style;
      (e.textColor = n[r.textColor]),
        (e.textColorHover = n[r.textColorHover]),
        (e.borderColor = n[r.borderColor]),
        (e.backgroundColor = n[r.backgroundColor]),
        (e.backgroundColorHover = n[r.backgroundColorHover]);
    }),
    (i.footerReload = function () {
      e('.grid-footer').removeClass('grid-footer');
      var t = {};
      SAVER.json.fields.forEach(function (e) {
        var i = SAVER.getResultBy('id', e.idRes);
        t[e.id] = 'result' == e.type && i ? i.formula : '';
      });
      SAVER.json.fields;
      for (
        var i, n = !0, a = 0, r = 0, o = -1 * SAVER.json.lines.length;
        n && r > o;

      )
        (i = !0),
          (r -= 1),
          GRID.line(r)
            .fields()
            .forEach(function (e) {
              '' == t[e] && (i = !1);
            }),
          i && (a = r),
          a == o && ((n = !1), (a = 0));
      a && e('.grid-line').eq(a).addClass('grid-footer');
    }),
    i
  );
})(jQuery)),
  $(document).ready(function () {
    var e = 0;
    function t() {
      try {
        return document.createEvent('TouchEvent'), !0;
      } catch (e) {
        return !1;
      }
    }
    $('body')
      .on(
        'touchstart.tooltip mouseenter.tooltip',
        '[data-ub-title]',
        function (i) {
          if (i.changedTouches)
            setTimeout(function () {
              0 === $('.ub-tooltip').length &&
                $(i.target).trigger('mouseenter.tooltip');
            }, 100);
          else {
            var n,
              a,
              r = $(this),
              o = r.offset().left,
              s = r.offset().top,
              l = r.outerWidth(),
              c = r.outerHeight(),
              d = 'tool-' + 1e17 * Math.random(),
              u = r.attr('data-ub-pos'),
              p = document.documentElement.clientHeight,
              f = document.documentElement.clientWidth;
            if (((e = 1), 1 == r.attr('data-tool-freez'))) return !1;
            if (r.hasClass('wait-mouse'))
              return (
                r.removeClass('wait-mouse'),
                console.log('remove wait'),
                void (e = 0)
              );
            if (
              (r.attr('data-tool-id', d),
              $('.ub-tooltip.ub-tooltip-show').fadeOut(400, function () {
                $(this).remove();
              }),
              'disable' == r.attr('data-ub-disable'))
            )
              return !1;
            void 0 !== r.attr('data-litera-from') &&
              $('.result-field--undefined') &&
              r.attr(
                'data-ub-title',
                SAVER.getFieldBy('litera', r.attr('data-val')).group_text
              ),
              r.closest('.aside').length
                ? ((a = $('.aside')), (s -= $('.aside').offset().top))
                : (a = $('body'));
            var m = 'true' == r.attr('data-ub-dark') ? 'ub-tooltip-dark' : '',
              h = r.attr('data-ub-class') || '',
              g = $(
                '<div class="ub-tooltip [ubTooltipDark] [userClass] ub-tooltip-[pos]" id="[id]">[text]</div>'.Signe(
                  {
                    ubTooltipDark: m,
                    userClass: h,
                    pos: u,
                    id: d,
                    text: r.attr('data-ub-title'),
                  }
                )
              );
            if (
              (a.append(g),
              'top' === u &&
                s - g.outerHeight() - 10 < 0 &&
                (g.removeClass('ub-tooltip-' + u),
                (u = 'bottom'),
                g.addClass('ub-tooltip-' + u)),
              ('bottom' === u || 'bottom-left' === u || 'bottom-right' === u) &&
                p < s + c + g.outerHeight() + 10)
            ) {
              switch ((g.removeClass('ub-tooltip-' + u), u)) {
                case 'bottom':
                  u = 'top';
                  break;
                case 'bottom-left':
                  u = 'top-left';
                  break;
                case 'bottom-right':
                  u = 'top-right';
              }
              g.addClass('ub-tooltip-' + u);
            }
            'top' === u
              ? (n = {
                  left: o + l / 2 - 0.5 * g.outerWidth(),
                  top: s - g.outerHeight(),
                })
              : 'top-right' === u
              ? (n = {
                  left: o + l / 2 - 0.3 * g.outerWidth(),
                  top: s - g.outerHeight(),
                })
              : 'top-left' === u
              ? (n = {
                  left: o + l / 2 - 0.7 * g.outerWidth(),
                  top: s - g.outerHeight(),
                })
              : 'right' === u
              ? (n = { left: o + l, top: s + c / 2 - g.outerHeight() / 2 })
              : 'bottom' === u
              ? (n = { left: o + l / 2 - g.outerWidth() / 2, top: s + c })
              : 'bottom-right' === u
              ? (n = { left: o + l / 2 - 0.3 * g.outerWidth(), top: s + c })
              : 'bottom-left' === u
              ? (n = { left: o + l / 2 - 0.7 * g.outerWidth(), top: s + c })
              : 'left' === u &&
                (n = {
                  left: o - g.outerWidth(),
                  top: s + c / 2 - g.outerHeight() / 2,
                }),
              n.left + g.outerWidth() > f && (n.left = o + l - g.outerWidth()),
              n.left < 0 && (n.left = o),
              (g = $('#' + d)).css(n).addClass('ub-tooltip-show'),
              $('body').addClass('ub-tooltip-overflow'),
              t()
                ? $('body')
                    .off('click.tooltip touchend.tooltip')
                    .on('click.tooltip touchend.tooltip', function () {
                      $('body').off('click.tooltip touchend.tooltip'),
                        setTimeout(v, 100);
                    })
                : setTimeout(v, 100);
          }
          function v() {
            $('body').on(
              'click.ubTooltip touchstart.ubTooltip touchend.ubTooltip',
              function () {
                1 != r.attr('data-tool-freez') &&
                  (g.removeClass('ub-tooltip-show'),
                  $('body').removeClass('ub-tooltip-overflow'),
                  $('body').off(
                    'click.ubTooltip touchstart.ubTooltip touchend.ubTooltip'
                  ),
                  setTimeout(function () {
                    g.remove();
                  }, 250));
              }
            ),
              (e = 0);
          }
        }
      )
      .on('mouseenter.tooltip', '[data-ub-title]', function () {
        if (!t()) {
          var e = $(this);
          e.on('click.tooltip', function () {
            e.trigger('mouseleave'), e.off('click.tooltip');
          });
        }
      })
      .on('mouseleave.tooltip', '[data-ub-title]', function (i) {
        if (!t()) {
          var n = $(this);
          if (1 != n.attr('data-tool-freez')) {
            var a = $(this).attr('data-tool-id'),
              r = $('#' + a);
            if (
              ('pointer' == n.css('cursor') && r.addClass('cursorPointer'),
              r.is(i.relatedTarget) && e)
            )
              return (
                n.addClass('wait-mouse'),
                void r.on('mouseleave', function (e) {
                  n.is(e.relatedTarget) ||
                    n.removeClass('wait-mouse').trigger('mouseleave');
                })
              );
            r.removeClass('ub-tooltip-show cursorPointer'),
              setTimeout(function () {
                r.remove();
              }, 200);
          }
        }
      })
      .on('mouseenter.tooltip', '[data-result-title]', function () {
        var e,
          t = $(this),
          i = t.closest('.result-block'),
          n =
            (i.offset().left,
            i.outerWidth(),
            'tool-' + DAT.getRandomInt(0, 9999)),
          a = SAVER.getFieldBy('litera', t.attr('data-val'));
        if (
          DAT.higlightStart > 0 ||
          t.hasClass('result-higlight-m') ||
          1 == t.attr('data-tool-freez')
        )
          return !1;
        t.attr('data-tool-id', n),
          $('.result-tooltip.result-tooltip-show').fadeOut(400, function () {
            $(this).remove();
          }),
          void 0 !== t.attr('data-litera-from') &&
          $('.result-field--undefined') &&
          a
            ? t.attr('data-result-title', a.group_text)
            : t.hasClass('result-field') ||
              t.attr('data-result-title', loc['Несуществующая переменная']),
          (e = { left: '100%' }),
          $('aside').append(
            '<div class="result-out-tooltip [class]" style="z-index: 9999" data-out-id="[id]">[text]</div>'.Signe(
              {
                class: t.attr('class'),
                id: n,
                text: t.attr('data-result-title'),
              }
            )
          ),
          $('[data-out-id=' + n + ']').css({
            left: t.offset().left + t.outerWidth(),
            top: t.offset().top - $('aside').offset().top,
            color: t.is('.result-field--undefined') ? '#3f4145' : '',
          }),
          $('#' + n).css(e),
          setTimeout(function () {
            $('[data-out-id=' + n + '], #' + n).addClass('result-tooltip-show');
          }, 1),
          setTimeout(function () {
            $('#' + n).on('mousemove.tooltip', function () {
              $('#' + n).off('mousemove.tooltip'),
                t.trigger('mouseleave'),
                t.off('click.tooltip');
            });
          }, 500),
          t.on('click.tooltip', function () {
            t.trigger('mouseleave'), t.off('click.tooltip');
          });
      })
      .on('mouseleave.tooltip', '[data-result-title]', function () {
        var e = $(this),
          t = e.attr('data-tool-id');
        if (1 == e.attr('data-tool-freez')) return !1;
        $('.result-out-tooltip, #' + t).removeClass('result-tooltip-show'),
          setTimeout(function () {
            $('#' + t).remove(), $('[data-out-id="' + t + '"]').remove();
          }, 200),
          e.removeClass('result-tooltip-left');
      });
  });
var easeTooltip = function (e, t, i, n) {
  setTimeout(function () {
    var a = $('body');
    function r() {
      a.off('click.hide'),
        e.off('input.hide'),
        e
          .removeAttr('data-tool-freez')
          .trigger('mouseleave')
          .attr('data-tool-freez', '1'),
        e.find('input').removeClass('error-field');
    }
    e
      .attr('data-ub-title', t)
      .attr('data-ub-pos', i)
      .attr('data-ub-class', n || '')
      .removeAttr('data-tool-freez')
      .trigger('mouseenter')
      .attr('data-tool-freez', '1')
      .find('input')
      .addClass('error-field'),
      e.on('input.hide', r),
      a.on('click.hide', r);
  }, 5);
};
(wnd = {
  MDOWN: !1,
  open: function (e, t, i, n, a) {
    var r = t.split(' ')[0],
      o = (Math.random(), 0 === i.indexOf('/') || 0 === i.indexOf('http')),
      s = o && a && wnd.tpl[r] ? wnd.tpl[r] : o ? 'loading' : i,
      l = function (i) {
        return (
          '<div class="modal_win ' +
          t +
          '">                <div class="modal_title"><h2>' +
          e +
          '</h2></div>                <div class="modal_body">' +
          i +
          '</div>                <span class="modal_close" title="' +
          loc['Закрыть'] +
          '">close</span>            </div>'
        );
      },
      c = $('#page').length ? $('#page') : $('body > div').eq(0),
      d = $(
        '<div class="modal_overlay modal_create modal_create-' +
          t +
          '" onclick="wnd.close(event)"></div>'
      );
    c.append(d),
      d.on('mousedown.wnd', function (e) {
        var t = $(e.target);
        t.closest('.modal_win').length &&
          !t.closest('button, .modal_close, .js-modal-close').length &&
          (wnd.MDOWN = !0),
          $(document).on('mouseup.wnd', function () {
            $(document).off('mouseup.wnd'),
              setTimeout(function () {
                wnd.MDOWN = !1;
              }, 50);
          });
      }),
      o && !a
        ? $.get(i, function (e) {
            (wnd.tpl[r] = e),
              $('.modal_create-' + r)
                .html(l(e))
                .fadeIn(300),
              n && n();
          })
        : ($('.modal_create-' + r)
            .html(l(s))
            .fadeIn(300),
          n && n());
  },
  openTpl: function (e, t, i, n) {
    wnd.open(e, t, i, n, !0);
  },
  tpl: {},
  close: function (e) {
    if (!wnd.MDOWN) {
      var t = $(e.target);
      t.hasClass('modal_noclose') ||
        t.find('.modal_win').hasClass('modal_noclose') ||
        ((t.hasClass('modal_close') ||
          t.hasClass('js-modal-close') ||
          (t.hasClass('modal_overlay') && t.find('.modal_close').length)) &&
          (history.pushState({ param: 'Value' }, '', location.pathname),
          t.closest('.modal_create').fadeOut(300, function () {
            $(this).remove();
          })));
    }
  },
}),
  (WRAP_liBtn = function (e, t, i) {
    return (
      '<li class="settings-toplinks__li toplink-' +
      e +
      '" data-name="' +
      e +
      '" data-settings-type="[type]" data-settings-id="[id]"><a href="javascript://" class="settings-toplinks__li-link" data-ub-title="' +
      t +
      '" data-ub-pos="top">' +
      i +
      '</a></li>'
    );
  }),
  (WRAP = {
    cell: {
      start:
        '<div data-id="[id]" data-type="[type]" data-hide="[hide]" id="grid-[L]-[C]-[id]" class="ub-grid padding-lr-[paddingLR] [break_all]" style="padding-top:[paddingTop]px;padding-bottom:[paddingBottom]px;padding-left:[paddingLR];padding-right:[paddingLR]">',
      end: '</div>',
    },
    field: {
      start1: '<div class="field field-[blur]">',
      group:
        '<div class="field-title size-18" data-change="titleSwitcher-[type]-[id]" data-canedit="true" style="display:[titleSwitcher]" data-source="group">[group]</div>',
      desc: '<div class="field-desc" data-change="descSwitcher-[type]-[id]" data-canedit="true" style="display:[descSwitcher]" data-source="desc">[desc]</div>',
      litera:
        '<div class="field-litera field-litera-[type]" data-typechange="[typeChange]">[litera]</div>',
      logicX:
        '<div class="field-litera field-litera-[type] field-litera-logic">X[id]</div>',
      idRes: '<div class="field-litera field-litera-[type]">R[idRes]</div>',
      start2: '<div class="field-body">',
      end: '</div>                </div>',
    },
  });
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : (e.moment = t());
})(this, function () {
  'use strict';
  var e;
  function t() {
    return e.apply(null, arguments);
  }
  function n(e) {
    return (
      e instanceof Array ||
      '[object Array]' === Object.prototype.toString.call(e)
    );
  }
  function s(e) {
    return null != e && '[object Object]' === Object.prototype.toString.call(e);
  }
  function i(e) {
    return (
      'number' == typeof e ||
      '[object Number]' === Object.prototype.toString.call(e)
    );
  }
  function r(e) {
    return (
      e instanceof Date || '[object Date]' === Object.prototype.toString.call(e)
    );
  }
  function a(e, t) {
    var n,
      s = [];
    for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
    return s;
  }
  function o(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function u(e, t) {
    for (var n in t) o(t, n) && (e[n] = t[n]);
    return (
      o(t, 'toString') && (e.toString = t.toString),
      o(t, 'valueOf') && (e.valueOf = t.valueOf),
      e
    );
  }
  function l(e, t, n, s) {
    return kt(e, t, n, s, !0).utc();
  }
  function d(e) {
    return (
      null == e._pf &&
        (e._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          meridiem: null,
        }),
      e._pf
    );
  }
  var h = Array.prototype.some
    ? Array.prototype.some
    : function (e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
          if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1;
      };
  function c(e) {
    if (null == e._isValid) {
      var t = d(e),
        n = h.call(t.parsedDateParts, function (e) {
          return null != e;
        }),
        s =
          !isNaN(e._d.getTime()) &&
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && n));
      if (
        (e._strict &&
          (s =
            s &&
            0 === t.charsLeftOver &&
            0 === t.unusedTokens.length &&
            void 0 === t.bigHour),
        null != Object.isFrozen && Object.isFrozen(e))
      )
        return s;
      e._isValid = s;
    }
    return e._isValid;
  }
  function f(e) {
    var t = l(NaN);
    return null != e ? u(d(t), e) : (d(t).userInvalidated = !0), t;
  }
  function m(e) {
    return void 0 === e;
  }
  var _ = (t.momentProperties = []);
  function y(e, t) {
    var n, s, i;
    if (
      (m(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      m(t._i) || (e._i = t._i),
      m(t._f) || (e._f = t._f),
      m(t._l) || (e._l = t._l),
      m(t._strict) || (e._strict = t._strict),
      m(t._tzm) || (e._tzm = t._tzm),
      m(t._isUTC) || (e._isUTC = t._isUTC),
      m(t._offset) || (e._offset = t._offset),
      m(t._pf) || (e._pf = d(t)),
      m(t._locale) || (e._locale = t._locale),
      _.length > 0)
    )
      for (n in _) m((i = t[(s = _[n])])) || (e[s] = i);
    return e;
  }
  var g = !1;
  function v(e) {
    y(this, e),
      (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      !1 === g && ((g = !0), t.updateOffset(this), (g = !1));
  }
  function p(e) {
    return e instanceof v || (null != e && null != e._isAMomentObject);
  }
  function w(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function S(e) {
    var t = +e,
      n = 0;
    return 0 !== t && isFinite(t) && (n = w(t)), n;
  }
  function M(e, t, n) {
    var s,
      i = Math.min(e.length, t.length),
      r = Math.abs(e.length - t.length),
      a = 0;
    for (s = 0; s < i; s++)
      ((n && e[s] !== t[s]) || (!n && S(e[s]) !== S(t[s]))) && a++;
    return a + r;
  }
  function k(e) {
    !1 === t.suppressDeprecationWarnings &&
      'undefined' != typeof console &&
      console.warn &&
      console.warn('Deprecation warning: ' + e);
  }
  function D(e, n) {
    var s = !0;
    return u(function () {
      if ((null != t.deprecationHandler && t.deprecationHandler(null, e), s)) {
        for (var i, r = [], a = 0; a < arguments.length; a++) {
          if (((i = ''), 'object' == typeof arguments[a])) {
            for (var o in ((i += '\n[' + a + '] '), arguments[0]))
              i += o + ': ' + arguments[0][o] + ', ';
            i = i.slice(0, -2);
          } else i = arguments[a];
          r.push(i);
        }
        k(
          e +
            '\nArguments: ' +
            Array.prototype.slice.call(r).join('') +
            '\n' +
            new Error().stack
        ),
          (s = !1);
      }
      return n.apply(this, arguments);
    }, n);
  }
  var Y = {};
  function O(e, n) {
    null != t.deprecationHandler && t.deprecationHandler(e, n),
      Y[e] || (k(n), (Y[e] = !0));
  }
  function x(e) {
    return (
      e instanceof Function ||
      '[object Function]' === Object.prototype.toString.call(e)
    );
  }
  function T(e, t) {
    var n,
      i = u({}, e);
    for (n in t)
      o(t, n) &&
        (s(e[n]) && s(t[n])
          ? ((i[n] = {}), u(i[n], e[n]), u(i[n], t[n]))
          : null != t[n]
          ? (i[n] = t[n])
          : delete i[n]);
    for (n in e) o(e, n) && !o(t, n) && s(e[n]) && (i[n] = u({}, i[n]));
    return i;
  }
  function b(e) {
    null != e && this.set(e);
  }
  (t.suppressDeprecationWarnings = !1), (t.deprecationHandler = null);
  var P = Object.keys
    ? Object.keys
    : function (e) {
        var t,
          n = [];
        for (t in e) o(e, t) && n.push(t);
        return n;
      };
  var W = {};
  function R(e, t) {
    var n = e.toLowerCase();
    W[n] = W[n + 's'] = W[t] = e;
  }
  function U(e) {
    return 'string' == typeof e ? W[e] || W[e.toLowerCase()] : void 0;
  }
  function C(e) {
    var t,
      n,
      s = {};
    for (n in e) o(e, n) && (t = U(n)) && (s[t] = e[n]);
    return s;
  }
  var F = {};
  function H(e, t) {
    F[e] = t;
  }
  function L(e, n) {
    return function (s) {
      return null != s
        ? (V(this, e, s), t.updateOffset(this, n), this)
        : G(this, e);
    };
  }
  function G(e, t) {
    return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]() : NaN;
  }
  function V(e, t, n) {
    e.isValid() && e._d['set' + (e._isUTC ? 'UTC' : '') + t](n);
  }
  function j(e, t, n) {
    var s = '' + Math.abs(e),
      i = t - s.length;
    return (
      (e >= 0 ? (n ? '+' : '') : '-') +
      Math.pow(10, Math.max(0, i)).toString().substr(1) +
      s
    );
  }
  var N =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    A = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    E = {},
    I = {};
  function z(e, t, n, s) {
    var i = s;
    'string' == typeof s &&
      (i = function () {
        return this[s]();
      }),
      e && (I[e] = i),
      t &&
        (I[t[0]] = function () {
          return j(i.apply(this, arguments), t[1], t[2]);
        }),
      n &&
        (I[n] = function () {
          return this.localeData().ordinal(i.apply(this, arguments), e);
        });
  }
  function Z(e, t) {
    return e.isValid()
      ? ((t = $(t, e.localeData())),
        (E[t] =
          E[t] ||
          (function (e) {
            var t,
              n,
              s,
              i = e.match(N);
            for (t = 0, n = i.length; t < n; t++)
              I[i[t]]
                ? (i[t] = I[i[t]])
                : (i[t] = (s = i[t]).match(/\[[\s\S]/)
                    ? s.replace(/^\[|\]$/g, '')
                    : s.replace(/\\/g, ''));
            return function (t) {
              var s,
                r = '';
              for (s = 0; s < n; s++)
                r += i[s] instanceof Function ? i[s].call(t, e) : i[s];
              return r;
            };
          })(t)),
        E[t](e))
      : e.localeData().invalidDate();
  }
  function $(e, t) {
    var n = 5;
    function s(e) {
      return t.longDateFormat(e) || e;
    }
    for (A.lastIndex = 0; n >= 0 && A.test(e); )
      (e = e.replace(A, s)), (A.lastIndex = 0), (n -= 1);
    return e;
  }
  var q = /\d/,
    B = /\d\d/,
    J = /\d{3}/,
    Q = /\d{4}/,
    X = /[+-]?\d{6}/,
    K = /\d\d?/,
    ee = /\d\d\d\d?/,
    te = /\d\d\d\d\d\d?/,
    ne = /\d{1,3}/,
    se = /\d{1,4}/,
    ie = /[+-]?\d{1,6}/,
    re = /\d+/,
    ae = /[+-]?\d+/,
    oe = /Z|[+-]\d\d:?\d\d/gi,
    ue = /Z|[+-]\d\d(?::?\d\d)?/gi,
    le =
      /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    de = {};
  function he(e, t, n) {
    de[e] = x(t)
      ? t
      : function (e, s) {
          return e && n ? n : t;
        };
  }
  function ce(e, t) {
    return o(de, e)
      ? de[e](t._strict, t._locale)
      : new RegExp(
          fe(
            e
              .replace('\\', '')
              .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                function (e, t, n, s, i) {
                  return t || n || s || i;
                }
              )
          )
        );
  }
  function fe(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  var me = {};
  function _e(e, t) {
    var n,
      s = t;
    for (
      'string' == typeof e && (e = [e]),
        i(t) &&
          (s = function (e, n) {
            n[t] = S(e);
          }),
        n = 0;
      n < e.length;
      n++
    )
      me[e[n]] = s;
  }
  function ye(e, t) {
    _e(e, function (e, n, s, i) {
      (s._w = s._w || {}), t(e, s._w, s, i);
    });
  }
  function ge(e, t, n) {
    null != t && o(me, e) && me[e](t, n._a, n, e);
  }
  var ve = 0,
    pe = 1,
    we = 2,
    Se = 3,
    Me = 4,
    ke = 5,
    De = 6,
    Ye = 7,
    Oe = 8,
    xe = Array.prototype.indexOf
      ? Array.prototype.indexOf
      : function (e) {
          var t;
          for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
          return -1;
        };
  function Te(e, t) {
    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate();
  }
  z('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
  }),
    z('MMM', 0, 0, function (e) {
      return this.localeData().monthsShort(this, e);
    }),
    z('MMMM', 0, 0, function (e) {
      return this.localeData().months(this, e);
    }),
    R('month', 'M'),
    H('month', 8),
    he('M', K),
    he('MM', K, B),
    he('MMM', function (e, t) {
      return t.monthsShortRegex(e);
    }),
    he('MMMM', function (e, t) {
      return t.monthsRegex(e);
    }),
    _e(['M', 'MM'], function (e, t) {
      t[pe] = S(e) - 1;
    }),
    _e(['MMM', 'MMMM'], function (e, t, n, s) {
      var i = n._locale.monthsParse(e, s, n._strict);
      null != i ? (t[pe] = i) : (d(n).invalidMonth = e);
    });
  var be = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    Pe =
      'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
      );
  var We = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  function Re(e, t) {
    var n;
    if (!e.isValid()) return e;
    if ('string' == typeof t)
      if (/^\d+$/.test(t)) t = S(t);
      else if (!i((t = e.localeData().monthsParse(t)))) return e;
    return (
      (n = Math.min(e.date(), Te(e.year(), t))),
      e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, n),
      e
    );
  }
  function Ue(e) {
    return null != e
      ? (Re(this, e), t.updateOffset(this, !0), this)
      : G(this, 'Month');
  }
  var Ce = le;
  var Fe = le;
  function He() {
    function e(e, t) {
      return t.length - e.length;
    }
    var t,
      n,
      s = [],
      i = [],
      r = [];
    for (t = 0; t < 12; t++)
      (n = l([2e3, t])),
        s.push(this.monthsShort(n, '')),
        i.push(this.months(n, '')),
        r.push(this.months(n, '')),
        r.push(this.monthsShort(n, ''));
    for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++)
      (s[t] = fe(s[t])), (i[t] = fe(i[t]));
    for (t = 0; t < 24; t++) r[t] = fe(r[t]);
    (this._monthsRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp('^(' + i.join('|') + ')', 'i')),
      (this._monthsShortStrictRegex = new RegExp(
        '^(' + s.join('|') + ')',
        'i'
      ));
  }
  function Le(e) {
    return Ge(e) ? 366 : 365;
  }
  function Ge(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
  }
  z('Y', 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? '' + e : '+' + e;
  }),
    z(0, ['YY', 2], 0, function () {
      return this.year() % 100;
    }),
    z(0, ['YYYY', 4], 0, 'year'),
    z(0, ['YYYYY', 5], 0, 'year'),
    z(0, ['YYYYYY', 6, !0], 0, 'year'),
    R('year', 'y'),
    H('year', 1),
    he('Y', ae),
    he('YY', K, B),
    he('YYYY', se, Q),
    he('YYYYY', ie, X),
    he('YYYYYY', ie, X),
    _e(['YYYYY', 'YYYYYY'], ve),
    _e('YYYY', function (e, n) {
      n[ve] = 2 === e.length ? t.parseTwoDigitYear(e) : S(e);
    }),
    _e('YY', function (e, n) {
      n[ve] = t.parseTwoDigitYear(e);
    }),
    _e('Y', function (e, t) {
      t[ve] = parseInt(e, 10);
    }),
    (t.parseTwoDigitYear = function (e) {
      return S(e) + (S(e) > 68 ? 1900 : 2e3);
    });
  var Ve = L('FullYear', !0);
  function je(e) {
    var t = new Date(Date.UTC.apply(null, arguments));
    return (
      e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
      t
    );
  }
  function Ne(e, t, n) {
    var s = 7 + t - n;
    return -((7 + je(e, 0, s).getUTCDay() - t) % 7) + s - 1;
  }
  function Ae(e, t, n, s, i) {
    var r,
      a,
      o = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + Ne(e, s, i);
    return (
      o <= 0
        ? (a = Le((r = e - 1)) + o)
        : o > Le(e)
        ? ((r = e + 1), (a = o - Le(e)))
        : ((r = e), (a = o)),
      { year: r, dayOfYear: a }
    );
  }
  function Ee(e, t, n) {
    var s,
      i,
      r = Ne(e.year(), t, n),
      a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return (
      a < 1
        ? (s = a + Ie((i = e.year() - 1), t, n))
        : a > Ie(e.year(), t, n)
        ? ((s = a - Ie(e.year(), t, n)), (i = e.year() + 1))
        : ((i = e.year()), (s = a)),
      { week: s, year: i }
    );
  }
  function Ie(e, t, n) {
    var s = Ne(e, t, n),
      i = Ne(e + 1, t, n);
    return (Le(e) - s + i) / 7;
  }
  z('w', ['ww', 2], 'wo', 'week'),
    z('W', ['WW', 2], 'Wo', 'isoWeek'),
    R('week', 'w'),
    R('isoWeek', 'W'),
    H('week', 5),
    H('isoWeek', 5),
    he('w', K),
    he('ww', K, B),
    he('W', K),
    he('WW', K, B),
    ye(['w', 'ww', 'W', 'WW'], function (e, t, n, s) {
      t[s.substr(0, 1)] = S(e);
    });
  z('d', 0, 'do', 'day'),
    z('dd', 0, 0, function (e) {
      return this.localeData().weekdaysMin(this, e);
    }),
    z('ddd', 0, 0, function (e) {
      return this.localeData().weekdaysShort(this, e);
    }),
    z('dddd', 0, 0, function (e) {
      return this.localeData().weekdays(this, e);
    }),
    z('e', 0, 0, 'weekday'),
    z('E', 0, 0, 'isoWeekday'),
    R('day', 'd'),
    R('weekday', 'e'),
    R('isoWeekday', 'E'),
    H('day', 11),
    H('weekday', 11),
    H('isoWeekday', 11),
    he('d', K),
    he('e', K),
    he('E', K),
    he('dd', function (e, t) {
      return t.weekdaysMinRegex(e);
    }),
    he('ddd', function (e, t) {
      return t.weekdaysShortRegex(e);
    }),
    he('dddd', function (e, t) {
      return t.weekdaysRegex(e);
    }),
    ye(['dd', 'ddd', 'dddd'], function (e, t, n, s) {
      var i = n._locale.weekdaysParse(e, s, n._strict);
      null != i ? (t.d = i) : (d(n).invalidWeekday = e);
    }),
    ye(['d', 'e', 'E'], function (e, t, n, s) {
      t[s] = S(e);
    });
  var ze = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
    '_'
  );
  var Ze = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
  var $e = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
  var qe = le;
  var Be = le;
  var Je = le;
  function Qe() {
    function e(e, t) {
      return t.length - e.length;
    }
    var t,
      n,
      s,
      i,
      r,
      a = [],
      o = [],
      u = [],
      d = [];
    for (t = 0; t < 7; t++)
      (n = l([2e3, 1]).day(t)),
        (s = this.weekdaysMin(n, '')),
        (i = this.weekdaysShort(n, '')),
        (r = this.weekdays(n, '')),
        a.push(s),
        o.push(i),
        u.push(r),
        d.push(s),
        d.push(i),
        d.push(r);
    for (a.sort(e), o.sort(e), u.sort(e), d.sort(e), t = 0; t < 7; t++)
      (o[t] = fe(o[t])), (u[t] = fe(u[t])), (d[t] = fe(d[t]));
    (this._weekdaysRegex = new RegExp('^(' + d.join('|') + ')', 'i')),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp('^(' + u.join('|') + ')', 'i')),
      (this._weekdaysShortStrictRegex = new RegExp(
        '^(' + o.join('|') + ')',
        'i'
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        '^(' + a.join('|') + ')',
        'i'
      ));
  }
  function Xe() {
    return this.hours() % 12 || 12;
  }
  function Ke(e, t) {
    z(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  function et(e, t) {
    return t._meridiemParse;
  }
  z('H', ['HH', 2], 0, 'hour'),
    z('h', ['hh', 2], 0, Xe),
    z('k', ['kk', 2], 0, function () {
      return this.hours() || 24;
    }),
    z('hmm', 0, 0, function () {
      return '' + Xe.apply(this) + j(this.minutes(), 2);
    }),
    z('hmmss', 0, 0, function () {
      return '' + Xe.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2);
    }),
    z('Hmm', 0, 0, function () {
      return '' + this.hours() + j(this.minutes(), 2);
    }),
    z('Hmmss', 0, 0, function () {
      return '' + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2);
    }),
    Ke('a', !0),
    Ke('A', !1),
    R('hour', 'h'),
    H('hour', 13),
    he('a', et),
    he('A', et),
    he('H', K),
    he('h', K),
    he('HH', K, B),
    he('hh', K, B),
    he('hmm', ee),
    he('hmmss', te),
    he('Hmm', ee),
    he('Hmmss', te),
    _e(['H', 'HH'], Se),
    _e(['a', 'A'], function (e, t, n) {
      (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
    }),
    _e(['h', 'hh'], function (e, t, n) {
      (t[Se] = S(e)), (d(n).bigHour = !0);
    }),
    _e('hmm', function (e, t, n) {
      var s = e.length - 2;
      (t[Se] = S(e.substr(0, s))),
        (t[Me] = S(e.substr(s))),
        (d(n).bigHour = !0);
    }),
    _e('hmmss', function (e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[Se] = S(e.substr(0, s))),
        (t[Me] = S(e.substr(s, 2))),
        (t[ke] = S(e.substr(i))),
        (d(n).bigHour = !0);
    }),
    _e('Hmm', function (e, t, n) {
      var s = e.length - 2;
      (t[Se] = S(e.substr(0, s))), (t[Me] = S(e.substr(s)));
    }),
    _e('Hmmss', function (e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[Se] = S(e.substr(0, s))),
        (t[Me] = S(e.substr(s, 2))),
        (t[ke] = S(e.substr(i)));
    });
  var tt,
    nt = L('Hours', !0),
    st = {
      calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
      },
      longDateFormat: {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
      },
      invalidDate: 'Invalid date',
      ordinal: '%d',
      ordinalParse: /\d{1,2}/,
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
      },
      months: Pe,
      monthsShort: We,
      week: { dow: 0, doy: 6 },
      weekdays: ze,
      weekdaysMin: $e,
      weekdaysShort: Ze,
      meridiemParse: /[ap]\.?m?\.?/i,
    },
    it = {},
    rt = {};
  function at(e) {
    return e ? e.toLowerCase().replace('_', '-') : e;
  }
  function ot(e) {
    var t = null;
    if (!it[e] && 'undefined' != typeof module && module && module.exports)
      try {
        (t = tt._abbr), require('./locale/' + e), ut(t);
      } catch (e) {}
    return it[e];
  }
  function ut(e, t) {
    var n;
    return e && (n = m(t) ? dt(e) : lt(e, t)) && (tt = n), tt._abbr;
  }
  function lt(e, t) {
    if (null !== t) {
      var n = st;
      if (((t.abbr = e), null != it[e]))
        O(
          'defineLocaleOverride',
          'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
        ),
          (n = it[e]._config);
      else if (null != t.parentLocale) {
        if (null == it[t.parentLocale])
          return (
            rt[t.parentLocale] || (rt[t.parentLocale] = []),
            rt[t.parentLocale].push({ name: e, config: t }),
            null
          );
        n = it[t.parentLocale]._config;
      }
      return (
        (it[e] = new b(T(n, t))),
        rt[e] &&
          rt[e].forEach(function (e) {
            lt(e.name, e.config);
          }),
        ut(e),
        it[e]
      );
    }
    return delete it[e], null;
  }
  function dt(e) {
    var t;
    if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
      return tt;
    if (!n(e)) {
      if ((t = ot(e))) return t;
      e = [e];
    }
    return (function (e) {
      for (var t, n, s, i, r = 0; r < e.length; ) {
        for (
          t = (i = at(e[r]).split('-')).length,
            n = (n = at(e[r + 1])) ? n.split('-') : null;
          t > 0;

        ) {
          if ((s = ot(i.slice(0, t).join('-')))) return s;
          if (n && n.length >= t && M(i, n, !0) >= t - 1) break;
          t--;
        }
        r++;
      }
      return null;
    })(e);
  }
  function ht(e) {
    var t,
      n = e._a;
    return (
      n &&
        -2 === d(e).overflow &&
        ((t =
          n[pe] < 0 || n[pe] > 11
            ? pe
            : n[we] < 1 || n[we] > Te(n[ve], n[pe])
            ? we
            : n[Se] < 0 ||
              n[Se] > 24 ||
              (24 === n[Se] && (0 !== n[Me] || 0 !== n[ke] || 0 !== n[De]))
            ? Se
            : n[Me] < 0 || n[Me] > 59
            ? Me
            : n[ke] < 0 || n[ke] > 59
            ? ke
            : n[De] < 0 || n[De] > 999
            ? De
            : -1),
        d(e)._overflowDayOfYear && (t < ve || t > we) && (t = we),
        d(e)._overflowWeeks && -1 === t && (t = Ye),
        d(e)._overflowWeekday && -1 === t && (t = Oe),
        (d(e).overflow = t)),
      e
    );
  }
  var ct =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    ft =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    mt = /Z|[+-]\d\d(?::?\d\d)?/,
    _t = [
      ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
      ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
      ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
      ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
      ['YYYY-DDD', /\d{4}-\d{3}/],
      ['YYYY-MM', /\d{4}-\d\d/, !1],
      ['YYYYYYMMDD', /[+-]\d{10}/],
      ['YYYYMMDD', /\d{8}/],
      ['GGGG[W]WWE', /\d{4}W\d{3}/],
      ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
      ['YYYYDDD', /\d{7}/],
    ],
    yt = [
      ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
      ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
      ['HH:mm:ss', /\d\d:\d\d:\d\d/],
      ['HH:mm', /\d\d:\d\d/],
      ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
      ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
      ['HHmmss', /\d\d\d\d\d\d/],
      ['HHmm', /\d\d\d\d/],
      ['HH', /\d\d/],
    ],
    gt = /^\/?Date\((\-?\d+)/i;
  function vt(e) {
    var t,
      n,
      s,
      i,
      r,
      a,
      o = e._i,
      u = ct.exec(o) || ft.exec(o);
    if (u) {
      for (d(e).iso = !0, t = 0, n = _t.length; t < n; t++)
        if (_t[t][1].exec(u[1])) {
          (i = _t[t][0]), (s = !1 !== _t[t][2]);
          break;
        }
      if (null == i) return void (e._isValid = !1);
      if (u[3]) {
        for (t = 0, n = yt.length; t < n; t++)
          if (yt[t][1].exec(u[3])) {
            r = (u[2] || ' ') + yt[t][0];
            break;
          }
        if (null == r) return void (e._isValid = !1);
      }
      if (!s && null != r) return void (e._isValid = !1);
      if (u[4]) {
        if (!mt.exec(u[4])) return void (e._isValid = !1);
        a = 'Z';
      }
      (e._f = i + (r || '') + (a || '')), St(e);
    } else e._isValid = !1;
  }
  function pt(e, t, n) {
    return null != e ? e : null != t ? t : n;
  }
  function wt(e) {
    var n,
      s,
      i,
      r,
      a = [];
    if (!e._d) {
      for (
        i = (function (e) {
          var n = new Date(t.now());
          return e._useUTC
            ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()]
            : [n.getFullYear(), n.getMonth(), n.getDate()];
        })(e),
          e._w &&
            null == e._a[we] &&
            null == e._a[pe] &&
            (function (e) {
              var t, n, s, i, r, a, o, u;
              if (null != (t = e._w).GG || null != t.W || null != t.E)
                (r = 1),
                  (a = 4),
                  (n = pt(t.GG, e._a[ve], Ee(Dt(), 1, 4).year)),
                  (s = pt(t.W, 1)),
                  ((i = pt(t.E, 1)) < 1 || i > 7) && (u = !0);
              else {
                (r = e._locale._week.dow), (a = e._locale._week.doy);
                var l = Ee(Dt(), r, a);
                (n = pt(t.gg, e._a[ve], l.year)),
                  (s = pt(t.w, l.week)),
                  null != t.d
                    ? ((i = t.d) < 0 || i > 6) && (u = !0)
                    : null != t.e
                    ? ((i = t.e + r), (t.e < 0 || t.e > 6) && (u = !0))
                    : (i = r);
              }
              s < 1 || s > Ie(n, r, a)
                ? (d(e)._overflowWeeks = !0)
                : null != u
                ? (d(e)._overflowWeekday = !0)
                : ((o = Ae(n, s, i, r, a)),
                  (e._a[ve] = o.year),
                  (e._dayOfYear = o.dayOfYear));
            })(e),
          e._dayOfYear &&
            ((r = pt(e._a[ve], i[ve])),
            e._dayOfYear > Le(r) && (d(e)._overflowDayOfYear = !0),
            (s = je(r, 0, e._dayOfYear)),
            (e._a[pe] = s.getUTCMonth()),
            (e._a[we] = s.getUTCDate())),
          n = 0;
        n < 3 && null == e._a[n];
        ++n
      )
        e._a[n] = a[n] = i[n];
      for (; n < 7; n++)
        e._a[n] = a[n] = null == e._a[n] ? (2 === n ? 1 : 0) : e._a[n];
      24 === e._a[Se] &&
        0 === e._a[Me] &&
        0 === e._a[ke] &&
        0 === e._a[De] &&
        ((e._nextDay = !0), (e._a[Se] = 0)),
        (e._d = (
          e._useUTC
            ? je
            : function (e, t, n, s, i, r, a) {
                var o = new Date(e, t, n, s, i, r, a);
                return (
                  e < 100 &&
                    e >= 0 &&
                    isFinite(o.getFullYear()) &&
                    o.setFullYear(e),
                  o
                );
              }
        ).apply(null, a)),
        null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[Se] = 24);
    }
  }
  function St(e) {
    if (e._f !== t.ISO_8601) {
      (e._a = []), (d(e).empty = !0);
      var n,
        s,
        i,
        r,
        a,
        o = '' + e._i,
        u = o.length,
        l = 0;
      for (i = $(e._f, e._locale).match(N) || [], n = 0; n < i.length; n++)
        (r = i[n]),
          (s = (o.match(ce(r, e)) || [])[0]) &&
            ((a = o.substr(0, o.indexOf(s))).length > 0 &&
              d(e).unusedInput.push(a),
            (o = o.slice(o.indexOf(s) + s.length)),
            (l += s.length)),
          I[r]
            ? (s ? (d(e).empty = !1) : d(e).unusedTokens.push(r), ge(r, s, e))
            : e._strict && !s && d(e).unusedTokens.push(r);
      (d(e).charsLeftOver = u - l),
        o.length > 0 && d(e).unusedInput.push(o),
        e._a[Se] <= 12 &&
          !0 === d(e).bigHour &&
          e._a[Se] > 0 &&
          (d(e).bigHour = void 0),
        (d(e).parsedDateParts = e._a.slice(0)),
        (d(e).meridiem = e._meridiem),
        (e._a[Se] = (function (e, t, n) {
          var s;
          if (null == n) return t;
          return null != e.meridiemHour
            ? e.meridiemHour(t, n)
            : null != e.isPM
            ? ((s = e.isPM(n)) && t < 12 && (t += 12),
              s || 12 !== t || (t = 0),
              t)
            : t;
        })(e._locale, e._a[Se], e._meridiem)),
        wt(e),
        ht(e);
    } else vt(e);
  }
  function Mt(e) {
    var s = e._i,
      o = e._f;
    return (
      (e._locale = e._locale || dt(e._l)),
      null === s || (void 0 === o && '' === s)
        ? f({ nullInput: !0 })
        : ('string' == typeof s && (e._i = s = e._locale.preparse(s)),
          p(s)
            ? new v(ht(s))
            : (r(s)
                ? (e._d = s)
                : n(o)
                ? (function (e) {
                    var t, n, s, i, r;
                    if (0 === e._f.length)
                      return (
                        (d(e).invalidFormat = !0), void (e._d = new Date(NaN))
                      );
                    for (i = 0; i < e._f.length; i++)
                      (r = 0),
                        (t = y({}, e)),
                        null != e._useUTC && (t._useUTC = e._useUTC),
                        (t._f = e._f[i]),
                        St(t),
                        c(t) &&
                          ((r += d(t).charsLeftOver),
                          (r += 10 * d(t).unusedTokens.length),
                          (d(t).score = r),
                          (null == s || r < s) && ((s = r), (n = t)));
                    u(e, n || t);
                  })(e)
                : o
                ? St(e)
                : (function (e) {
                    var s = e._i;
                    void 0 === s
                      ? (e._d = new Date(t.now()))
                      : r(s)
                      ? (e._d = new Date(s.valueOf()))
                      : 'string' == typeof s
                      ? (function (e) {
                          var n = gt.exec(e._i);
                          null === n
                            ? (vt(e),
                              !1 === e._isValid &&
                                (delete e._isValid,
                                t.createFromInputFallback(e)))
                            : (e._d = new Date(+n[1]));
                        })(e)
                      : n(s)
                      ? ((e._a = a(s.slice(0), function (e) {
                          return parseInt(e, 10);
                        })),
                        wt(e))
                      : 'object' == typeof s
                      ? (function (e) {
                          if (!e._d) {
                            var t = C(e._i);
                            (e._a = a(
                              [
                                t.year,
                                t.month,
                                t.day || t.date,
                                t.hour,
                                t.minute,
                                t.second,
                                t.millisecond,
                              ],
                              function (e) {
                                return e && parseInt(e, 10);
                              }
                            )),
                              wt(e);
                          }
                        })(e)
                      : i(s)
                      ? (e._d = new Date(s))
                      : t.createFromInputFallback(e);
                  })(e),
              c(e) || (e._d = null),
              e))
    );
  }
  function kt(e, t, i, r, a) {
    var o,
      u = {};
    return (
      (!0 !== i && !1 !== i) || ((r = i), (i = void 0)),
      ((s(e) &&
        (function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        })(e)) ||
        (n(e) && 0 === e.length)) &&
        (e = void 0),
      (u._isAMomentObject = !0),
      (u._useUTC = u._isUTC = a),
      (u._l = i),
      (u._i = e),
      (u._f = t),
      (u._strict = r),
      (o = new v(ht(Mt(u))))._nextDay && (o.add(1, 'd'), (o._nextDay = void 0)),
      o
    );
  }
  function Dt(e, t, n, s) {
    return kt(e, t, n, s, !1);
  }
  (t.createFromInputFallback = D(
    'value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (e) {
      e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''));
    }
  )),
    (t.ISO_8601 = function () {});
  var Yt = D(
      'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
        var e = Dt.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e < this ? this : e) : f();
      }
    ),
    Ot = D(
      'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
        var e = Dt.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e > this ? this : e) : f();
      }
    );
  function xt(e, t) {
    var s, i;
    if ((1 === t.length && n(t[0]) && (t = t[0]), !t.length)) return Dt();
    for (s = t[0], i = 1; i < t.length; ++i)
      (t[i].isValid() && !t[i][e](s)) || (s = t[i]);
    return s;
  }
  function Tt(e) {
    var t = C(e),
      n = t.year || 0,
      s = t.quarter || 0,
      i = t.month || 0,
      r = t.week || 0,
      a = t.day || 0,
      o = t.hour || 0,
      u = t.minute || 0,
      l = t.second || 0,
      d = t.millisecond || 0;
    (this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60),
      (this._days = +a + 7 * r),
      (this._months = +i + 3 * s + 12 * n),
      (this._data = {}),
      (this._locale = dt()),
      this._bubble();
  }
  function bt(e) {
    return e instanceof Tt;
  }
  function Pt(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }
  function Wt(e, t) {
    z(e, 0, 0, function () {
      var e = this.utcOffset(),
        n = '+';
      return (
        e < 0 && ((e = -e), (n = '-')),
        n + j(~~(e / 60), 2) + t + j(~~e % 60, 2)
      );
    });
  }
  Wt('Z', ':'),
    Wt('ZZ', ''),
    he('Z', ue),
    he('ZZ', ue),
    _e(['Z', 'ZZ'], function (e, t, n) {
      (n._useUTC = !0), (n._tzm = Ut(ue, e));
    });
  var Rt = /([\+\-]|\d\d)/gi;
  function Ut(e, t) {
    var n = (t || '').match(e);
    if (null === n) return null;
    var s = ((n[n.length - 1] || []) + '').match(Rt) || ['-', 0, 0],
      i = 60 * s[1] + S(s[2]);
    return 0 === i ? 0 : '+' === s[0] ? i : -i;
  }
  function Ct(e, n) {
    var s, i;
    return n._isUTC
      ? ((s = n.clone()),
        (i = (p(e) || r(e) ? e.valueOf() : Dt(e).valueOf()) - s.valueOf()),
        s._d.setTime(s._d.valueOf() + i),
        t.updateOffset(s, !1),
        s)
      : Dt(e).local();
  }
  function Ft(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
  }
  function Ht() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }
  t.updateOffset = function () {};
  var Lt = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    Gt =
      /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
  function Vt(e, t) {
    var n,
      s,
      r,
      a = e,
      u = null;
    return (
      bt(e)
        ? (a = { ms: e._milliseconds, d: e._days, M: e._months })
        : i(e)
        ? ((a = {}), t ? (a[t] = e) : (a.milliseconds = e))
        : (u = Lt.exec(e))
        ? ((n = '-' === u[1] ? -1 : 1),
          (a = {
            y: 0,
            d: S(u[we]) * n,
            h: S(u[Se]) * n,
            m: S(u[Me]) * n,
            s: S(u[ke]) * n,
            ms: S(Pt(1e3 * u[De])) * n,
          }))
        : (u = Gt.exec(e))
        ? ((n = '-' === u[1] ? -1 : 1),
          (a = {
            y: jt(u[2], n),
            M: jt(u[3], n),
            w: jt(u[4], n),
            d: jt(u[5], n),
            h: jt(u[6], n),
            m: jt(u[7], n),
            s: jt(u[8], n),
          }))
        : null == a
        ? (a = {})
        : 'object' == typeof a &&
          ('from' in a || 'to' in a) &&
          ((r = (function (e, t) {
            var n;
            if (!e.isValid() || !t.isValid())
              return { milliseconds: 0, months: 0 };
            (t = Ct(t, e)),
              e.isBefore(t)
                ? (n = Nt(e, t))
                : (((n = Nt(t, e)).milliseconds = -n.milliseconds),
                  (n.months = -n.months));
            return n;
          })(Dt(a.from), Dt(a.to))),
          ((a = {}).ms = r.milliseconds),
          (a.M = r.months)),
      (s = new Tt(a)),
      bt(e) && o(e, '_locale') && (s._locale = e._locale),
      s
    );
  }
  function jt(e, t) {
    var n = e && parseFloat(e.replace(',', '.'));
    return (isNaN(n) ? 0 : n) * t;
  }
  function Nt(e, t) {
    var n = { milliseconds: 0, months: 0 };
    return (
      (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
      e.clone().add(n.months, 'M').isAfter(t) && --n.months,
      (n.milliseconds = +t - +e.clone().add(n.months, 'M')),
      n
    );
  }
  function At(e, t) {
    return function (n, s) {
      var i;
      return (
        null === s ||
          isNaN(+s) ||
          (O(
            t,
            'moment().' +
              t +
              '(period, number) is deprecated. Please use moment().' +
              t +
              '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
          ),
          (i = n),
          (n = s),
          (s = i)),
        Et(this, Vt((n = 'string' == typeof n ? +n : n), s), e),
        this
      );
    };
  }
  function Et(e, n, s, i) {
    var r = n._milliseconds,
      a = Pt(n._days),
      o = Pt(n._months);
    e.isValid() &&
      ((i = null == i || i),
      r && e._d.setTime(e._d.valueOf() + r * s),
      a && V(e, 'Date', G(e, 'Date') + a * s),
      o && Re(e, G(e, 'Month') + o * s),
      i && t.updateOffset(e, a || o));
  }
  Vt.fn = Tt.prototype;
  var It = At(1, 'add'),
    zt = At(-1, 'subtract');
  function Zt(e) {
    var t;
    return void 0 === e
      ? this._locale._abbr
      : (null != (t = dt(e)) && (this._locale = t), this);
  }
  (t.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'),
    (t.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]');
  var $t = D(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (e) {
      return void 0 === e ? this.localeData() : this.locale(e);
    }
  );
  function qt() {
    return this._locale;
  }
  function Bt(e, t) {
    z(0, [e, e.length], 0, t);
  }
  function Jt(e, t, n, s, i) {
    var r;
    return null == e
      ? Ee(this, s, i).year
      : (t > (r = Ie(e, s, i)) && (t = r),
        function (e, t, n, s, i) {
          var r = Ae(e, t, n, s, i),
            a = je(r.year, 0, r.dayOfYear);
          return (
            this.year(a.getUTCFullYear()),
            this.month(a.getUTCMonth()),
            this.date(a.getUTCDate()),
            this
          );
        }.call(this, e, t, n, s, i));
  }
  z(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
  }),
    z(0, ['GG', 2], 0, function () {
      return this.isoWeekYear() % 100;
    }),
    Bt('gggg', 'weekYear'),
    Bt('ggggg', 'weekYear'),
    Bt('GGGG', 'isoWeekYear'),
    Bt('GGGGG', 'isoWeekYear'),
    R('weekYear', 'gg'),
    R('isoWeekYear', 'GG'),
    H('weekYear', 1),
    H('isoWeekYear', 1),
    he('G', ae),
    he('g', ae),
    he('GG', K, B),
    he('gg', K, B),
    he('GGGG', se, Q),
    he('gggg', se, Q),
    he('GGGGG', ie, X),
    he('ggggg', ie, X),
    ye(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, n, s) {
      t[s.substr(0, 2)] = S(e);
    }),
    ye(['gg', 'GG'], function (e, n, s, i) {
      n[i] = t.parseTwoDigitYear(e);
    }),
    z('Q', 0, 'Qo', 'quarter'),
    R('quarter', 'Q'),
    H('quarter', 7),
    he('Q', q),
    _e('Q', function (e, t) {
      t[pe] = 3 * (S(e) - 1);
    }),
    z('D', ['DD', 2], 'Do', 'date'),
    R('date', 'D'),
    H('date', 9),
    he('D', K),
    he('DD', K, B),
    he('Do', function (e, t) {
      return e ? t._ordinalParse : t._ordinalParseLenient;
    }),
    _e(['D', 'DD'], we),
    _e('Do', function (e, t) {
      t[we] = S(e.match(K)[0]);
    });
  var Qt = L('Date', !0);
  z('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
    R('dayOfYear', 'DDD'),
    H('dayOfYear', 4),
    he('DDD', ne),
    he('DDDD', J),
    _e(['DDD', 'DDDD'], function (e, t, n) {
      n._dayOfYear = S(e);
    }),
    z('m', ['mm', 2], 0, 'minute'),
    R('minute', 'm'),
    H('minute', 14),
    he('m', K),
    he('mm', K, B),
    _e(['m', 'mm'], Me);
  var Xt = L('Minutes', !1);
  z('s', ['ss', 2], 0, 'second'),
    R('second', 's'),
    H('second', 15),
    he('s', K),
    he('ss', K, B),
    _e(['s', 'ss'], ke);
  var Kt,
    en = L('Seconds', !1);
  for (
    z('S', 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }),
      z(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }),
      z(0, ['SSS', 3], 0, 'millisecond'),
      z(0, ['SSSS', 4], 0, function () {
        return 10 * this.millisecond();
      }),
      z(0, ['SSSSS', 5], 0, function () {
        return 100 * this.millisecond();
      }),
      z(0, ['SSSSSS', 6], 0, function () {
        return 1e3 * this.millisecond();
      }),
      z(0, ['SSSSSSS', 7], 0, function () {
        return 1e4 * this.millisecond();
      }),
      z(0, ['SSSSSSSS', 8], 0, function () {
        return 1e5 * this.millisecond();
      }),
      z(0, ['SSSSSSSSS', 9], 0, function () {
        return 1e6 * this.millisecond();
      }),
      R('millisecond', 'ms'),
      H('millisecond', 16),
      he('S', ne, q),
      he('SS', ne, B),
      he('SSS', ne, J),
      Kt = 'SSSS';
    Kt.length <= 9;
    Kt += 'S'
  )
    he(Kt, re);
  function tn(e, t) {
    t[De] = S(1e3 * ('0.' + e));
  }
  for (Kt = 'S'; Kt.length <= 9; Kt += 'S') _e(Kt, tn);
  var nn = L('Milliseconds', !1);
  z('z', 0, 0, 'zoneAbbr'), z('zz', 0, 0, 'zoneName');
  var sn = v.prototype;
  function rn(e) {
    return e;
  }
  (sn.add = It),
    (sn.calendar = function (e, n) {
      var s = e || Dt(),
        i = Ct(s, this).startOf('day'),
        r = t.calendarFormat(this, i) || 'sameElse',
        a = n && (x(n[r]) ? n[r].call(this, s) : n[r]);
      return this.format(a || this.localeData().calendar(r, this, Dt(s)));
    }),
    (sn.clone = function () {
      return new v(this);
    }),
    (sn.diff = function (e, t, n) {
      var s, i, r, a;
      return this.isValid() && (s = Ct(e, this)).isValid()
        ? ((i = 6e4 * (s.utcOffset() - this.utcOffset())),
          'year' === (t = U(t)) || 'month' === t || 'quarter' === t
            ? ((o = this),
              (u = s),
              (h = 12 * (u.year() - o.year()) + (u.month() - o.month())),
              (c = o.clone().add(h, 'months')),
              u - c < 0
                ? ((l = o.clone().add(h - 1, 'months')),
                  (d = (u - c) / (c - l)))
                : ((l = o.clone().add(h + 1, 'months')),
                  (d = (u - c) / (l - c))),
              (a = -(h + d) || 0),
              'quarter' === t ? (a /= 3) : 'year' === t && (a /= 12))
            : ((r = this - s),
              (a =
                'second' === t
                  ? r / 1e3
                  : 'minute' === t
                  ? r / 6e4
                  : 'hour' === t
                  ? r / 36e5
                  : 'day' === t
                  ? (r - i) / 864e5
                  : 'week' === t
                  ? (r - i) / 6048e5
                  : r)),
          n ? a : w(a))
        : NaN;
      var o, u, l, d, h, c;
    }),
    (sn.endOf = function (e) {
      return void 0 === (e = U(e)) || 'millisecond' === e
        ? this
        : ('date' === e && (e = 'day'),
          this.startOf(e)
            .add(1, 'isoWeek' === e ? 'week' : e)
            .subtract(1, 'ms'));
    }),
    (sn.format = function (e) {
      e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
      var n = Z(this, e);
      return this.localeData().postformat(n);
    }),
    (sn.from = function (e, t) {
      return this.isValid() && ((p(e) && e.isValid()) || Dt(e).isValid())
        ? Vt({ to: this, from: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (sn.fromNow = function (e) {
      return this.from(Dt(), e);
    }),
    (sn.to = function (e, t) {
      return this.isValid() && ((p(e) && e.isValid()) || Dt(e).isValid())
        ? Vt({ from: this, to: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (sn.toNow = function (e) {
      return this.to(Dt(), e);
    }),
    (sn.get = function (e) {
      return x(this[(e = U(e))]) ? this[e]() : this;
    }),
    (sn.invalidAt = function () {
      return d(this).overflow;
    }),
    (sn.isAfter = function (e, t) {
      var n = p(e) ? e : Dt(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ('millisecond' === (t = U(m(t) ? 'millisecond' : t))
          ? this.valueOf() > n.valueOf()
          : n.valueOf() < this.clone().startOf(t).valueOf())
      );
    }),
    (sn.isBefore = function (e, t) {
      var n = p(e) ? e : Dt(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ('millisecond' === (t = U(m(t) ? 'millisecond' : t))
          ? this.valueOf() < n.valueOf()
          : this.clone().endOf(t).valueOf() < n.valueOf())
      );
    }),
    (sn.isBetween = function (e, t, n, s) {
      return (
        ('(' === (s = s || '()')[0]
          ? this.isAfter(e, n)
          : !this.isBefore(e, n)) &&
        (')' === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
      );
    }),
    (sn.isSame = function (e, t) {
      var n,
        s = p(e) ? e : Dt(e);
      return (
        !(!this.isValid() || !s.isValid()) &&
        ('millisecond' === (t = U(t || 'millisecond'))
          ? this.valueOf() === s.valueOf()
          : ((n = s.valueOf()),
            this.clone().startOf(t).valueOf() <= n &&
              n <= this.clone().endOf(t).valueOf()))
      );
    }),
    (sn.isSameOrAfter = function (e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    }),
    (sn.isSameOrBefore = function (e, t) {
      return this.isSame(e, t) || this.isBefore(e, t);
    }),
    (sn.isValid = function () {
      return c(this);
    }),
    (sn.lang = $t),
    (sn.locale = Zt),
    (sn.localeData = qt),
    (sn.max = Ot),
    (sn.min = Yt),
    (sn.parsingFlags = function () {
      return u({}, d(this));
    }),
    (sn.set = function (e, t) {
      if ('object' == typeof e)
        for (
          var n = (function (e) {
              var t = [];
              for (var n in e) t.push({ unit: n, priority: F[n] });
              return (
                t.sort(function (e, t) {
                  return e.priority - t.priority;
                }),
                t
              );
            })((e = C(e))),
            s = 0;
          s < n.length;
          s++
        )
          this[n[s].unit](e[n[s].unit]);
      else if (x(this[(e = U(e))])) return this[e](t);
      return this;
    }),
    (sn.startOf = function (e) {
      switch ((e = U(e))) {
        case 'year':
          this.month(0);
        case 'quarter':
        case 'month':
          this.date(1);
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
          this.hours(0);
        case 'hour':
          this.minutes(0);
        case 'minute':
          this.seconds(0);
        case 'second':
          this.milliseconds(0);
      }
      return (
        'week' === e && this.weekday(0),
        'isoWeek' === e && this.isoWeekday(1),
        'quarter' === e && this.month(3 * Math.floor(this.month() / 3)),
        this
      );
    }),
    (sn.subtract = zt),
    (sn.toArray = function () {
      var e = this;
      return [
        e.year(),
        e.month(),
        e.date(),
        e.hour(),
        e.minute(),
        e.second(),
        e.millisecond(),
      ];
    }),
    (sn.toObject = function () {
      var e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds(),
      };
    }),
    (sn.toDate = function () {
      return new Date(this.valueOf());
    }),
    (sn.toISOString = function () {
      var e = this.clone().utc();
      return 0 < e.year() && e.year() <= 9999
        ? x(Date.prototype.toISOString)
          ? this.toDate().toISOString()
          : Z(e, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
        : Z(e, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }),
    (sn.inspect = function () {
      if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
      var e = 'moment',
        t = '';
      this.isLocal() ||
        ((e = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'),
        (t = 'Z'));
      var n = '[' + e + '("]',
        s = 0 < this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY',
        i = t + '[")]';
      return this.format(n + s + '-MM-DD[T]HH:mm:ss.SSS' + i);
    }),
    (sn.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }),
    (sn.toString = function () {
      return this.clone()
        .locale('en')
        .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }),
    (sn.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }),
    (sn.valueOf = function () {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }),
    (sn.creationData = function () {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }),
    (sn.year = Ve),
    (sn.isLeapYear = function () {
      return Ge(this.year());
    }),
    (sn.weekYear = function (e) {
      return Jt.call(
        this,
        e,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }),
    (sn.isoWeekYear = function (e) {
      return Jt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }),
    (sn.quarter = sn.quarters =
      function (e) {
        return null == e
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (e - 1) + (this.month() % 3));
      }),
    (sn.month = Ue),
    (sn.daysInMonth = function () {
      return Te(this.year(), this.month());
    }),
    (sn.week = sn.weeks =
      function (e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), 'd');
      }),
    (sn.isoWeek = sn.isoWeeks =
      function (e) {
        var t = Ee(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), 'd');
      }),
    (sn.weeksInYear = function () {
      var e = this.localeData()._week;
      return Ie(this.year(), e.dow, e.doy);
    }),
    (sn.isoWeeksInYear = function () {
      return Ie(this.year(), 1, 4);
    }),
    (sn.date = Qt),
    (sn.day = sn.days =
      function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e
          ? ((e = (function (e, t) {
              return 'string' != typeof e
                ? e
                : isNaN(e)
                ? 'number' == typeof (e = t.weekdaysParse(e))
                  ? e
                  : null
                : parseInt(e, 10);
            })(e, this.localeData())),
            this.add(e - t, 'd'))
          : t;
      }),
    (sn.weekday = function (e) {
      if (!this.isValid()) return null != e ? this : NaN;
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == e ? t : this.add(e - t, 'd');
    }),
    (sn.isoWeekday = function (e) {
      if (!this.isValid()) return null != e ? this : NaN;
      if (null != e) {
        var t = (function (e, t) {
          return 'string' == typeof e
            ? t.weekdaysParse(e) % 7 || 7
            : isNaN(e)
            ? null
            : e;
        })(e, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7);
      }
      return this.day() || 7;
    }),
    (sn.dayOfYear = function (e) {
      var t =
        Math.round(
          (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
        ) + 1;
      return null == e ? t : this.add(e - t, 'd');
    }),
    (sn.hour = sn.hours = nt),
    (sn.minute = sn.minutes = Xt),
    (sn.second = sn.seconds = en),
    (sn.millisecond = sn.milliseconds = nn),
    (sn.utcOffset = function (e, n) {
      var s,
        i = this._offset || 0;
      if (!this.isValid()) return null != e ? this : NaN;
      if (null != e) {
        if ('string' == typeof e) {
          if (null === (e = Ut(ue, e))) return this;
        } else Math.abs(e) < 16 && (e *= 60);
        return (
          !this._isUTC && n && (s = Ft(this)),
          (this._offset = e),
          (this._isUTC = !0),
          null != s && this.add(s, 'm'),
          i !== e &&
            (!n || this._changeInProgress
              ? Et(this, Vt(e - i, 'm'), 1, !1)
              : this._changeInProgress ||
                ((this._changeInProgress = !0),
                t.updateOffset(this, !0),
                (this._changeInProgress = null))),
          this
        );
      }
      return this._isUTC ? i : Ft(this);
    }),
    (sn.utc = function (e) {
      return this.utcOffset(0, e);
    }),
    (sn.local = function (e) {
      return (
        this._isUTC &&
          (this.utcOffset(0, e),
          (this._isUTC = !1),
          e && this.subtract(Ft(this), 'm')),
        this
      );
    }),
    (sn.parseZone = function () {
      if (null != this._tzm) this.utcOffset(this._tzm);
      else if ('string' == typeof this._i) {
        var e = Ut(oe, this._i);
        null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
      }
      return this;
    }),
    (sn.hasAlignedHourOffset = function (e) {
      return (
        !!this.isValid() &&
        ((e = e ? Dt(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
      );
    }),
    (sn.isDST = function () {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }),
    (sn.isLocal = function () {
      return !!this.isValid() && !this._isUTC;
    }),
    (sn.isUtcOffset = function () {
      return !!this.isValid() && this._isUTC;
    }),
    (sn.isUtc = Ht),
    (sn.isUTC = Ht),
    (sn.zoneAbbr = function () {
      return this._isUTC ? 'UTC' : '';
    }),
    (sn.zoneName = function () {
      return this._isUTC ? 'Coordinated Universal Time' : '';
    }),
    (sn.dates = D('dates accessor is deprecated. Use date instead.', Qt)),
    (sn.months = D('months accessor is deprecated. Use month instead', Ue)),
    (sn.years = D('years accessor is deprecated. Use year instead', Ve)),
    (sn.zone = D(
      'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
      function (e, t) {
        return null != e
          ? ('string' != typeof e && (e = -e), this.utcOffset(e, t), this)
          : -this.utcOffset();
      }
    )),
    (sn.isDSTShifted = D(
      'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
      function () {
        if (!m(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if ((y(e, this), (e = Mt(e))._a)) {
          var t = e._isUTC ? l(e._a) : Dt(e._a);
          this._isDSTShifted = this.isValid() && M(e._a, t.toArray()) > 0;
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
      }
    ));
  var an = b.prototype;
  function on(e, t, n, s) {
    var i = dt(),
      r = l().set(s, t);
    return i[n](r, e);
  }
  function un(e, t, n) {
    if ((i(e) && ((t = e), (e = void 0)), (e = e || ''), null != t))
      return on(e, t, n, 'month');
    var s,
      r = [];
    for (s = 0; s < 12; s++) r[s] = on(e, s, n, 'month');
    return r;
  }
  function ln(e, t, n, s) {
    'boolean' == typeof e
      ? (i(t) && ((n = t), (t = void 0)), (t = t || ''))
      : ((n = t = e), (e = !1), i(t) && ((n = t), (t = void 0)), (t = t || ''));
    var r,
      a = dt(),
      o = e ? a._week.dow : 0;
    if (null != n) return on(t, (n + o) % 7, s, 'day');
    var u = [];
    for (r = 0; r < 7; r++) u[r] = on(t, (r + o) % 7, s, 'day');
    return u;
  }
  (an.calendar = function (e, t, n) {
    var s = this._calendar[e] || this._calendar.sameElse;
    return x(s) ? s.call(t, n) : s;
  }),
    (an.longDateFormat = function (e) {
      var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
      return t || !n
        ? t
        : ((this._longDateFormat[e] = n.replace(
            /MMMM|MM|DD|dddd/g,
            function (e) {
              return e.slice(1);
            }
          )),
          this._longDateFormat[e]);
    }),
    (an.invalidDate = function () {
      return this._invalidDate;
    }),
    (an.ordinal = function (e) {
      return this._ordinal.replace('%d', e);
    }),
    (an.preparse = rn),
    (an.postformat = rn),
    (an.relativeTime = function (e, t, n, s) {
      var i = this._relativeTime[n];
      return x(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
    }),
    (an.pastFuture = function (e, t) {
      var n = this._relativeTime[e > 0 ? 'future' : 'past'];
      return x(n) ? n(t) : n.replace(/%s/i, t);
    }),
    (an.set = function (e) {
      var t, n;
      for (n in e) x((t = e[n])) ? (this[n] = t) : (this['_' + n] = t);
      (this._config = e),
        (this._ordinalParseLenient = new RegExp(
          this._ordinalParse.source + '|' + /\d{1,2}/.source
        ));
    }),
    (an.months = function (e, t) {
      return e
        ? n(this._months)
          ? this._months[e.month()]
          : this._months[
              (this._months.isFormat || be).test(t) ? 'format' : 'standalone'
            ][e.month()]
        : this._months;
    }),
    (an.monthsShort = function (e, t) {
      return e
        ? n(this._monthsShort)
          ? this._monthsShort[e.month()]
          : this._monthsShort[be.test(t) ? 'format' : 'standalone'][e.month()]
        : this._monthsShort;
    }),
    (an.monthsParse = function (e, t, n) {
      var s, i, r;
      if (this._monthsParseExact)
        return function (e, t, n) {
          var s,
            i,
            r,
            a = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                s = 0;
              s < 12;
              ++s
            )
              (r = l([2e3, s])),
                (this._shortMonthsParse[s] = this.monthsShort(
                  r,
                  ''
                ).toLocaleLowerCase()),
                (this._longMonthsParse[s] = this.months(
                  r,
                  ''
                ).toLocaleLowerCase());
          return n
            ? 'MMM' === t
              ? -1 !== (i = xe.call(this._shortMonthsParse, a))
                ? i
                : null
              : -1 !== (i = xe.call(this._longMonthsParse, a))
              ? i
              : null
            : 'MMM' === t
            ? -1 !== (i = xe.call(this._shortMonthsParse, a))
              ? i
              : -1 !== (i = xe.call(this._longMonthsParse, a))
              ? i
              : null
            : -1 !== (i = xe.call(this._longMonthsParse, a))
            ? i
            : -1 !== (i = xe.call(this._shortMonthsParse, a))
            ? i
            : null;
        }.call(this, e, t, n);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          s = 0;
        s < 12;
        s++
      ) {
        if (
          ((i = l([2e3, s])),
          n &&
            !this._longMonthsParse[s] &&
            ((this._longMonthsParse[s] = new RegExp(
              '^' + this.months(i, '').replace('.', '') + '$',
              'i'
            )),
            (this._shortMonthsParse[s] = new RegExp(
              '^' + this.monthsShort(i, '').replace('.', '') + '$',
              'i'
            ))),
          n ||
            this._monthsParse[s] ||
            ((r = '^' + this.months(i, '') + '|^' + this.monthsShort(i, '')),
            (this._monthsParse[s] = new RegExp(r.replace('.', ''), 'i'))),
          n && 'MMMM' === t && this._longMonthsParse[s].test(e))
        )
          return s;
        if (n && 'MMM' === t && this._shortMonthsParse[s].test(e)) return s;
        if (!n && this._monthsParse[s].test(e)) return s;
      }
    }),
    (an.monthsRegex = function (e) {
      return this._monthsParseExact
        ? (o(this, '_monthsRegex') || He.call(this),
          e ? this._monthsStrictRegex : this._monthsRegex)
        : (o(this, '_monthsRegex') || (this._monthsRegex = Fe),
          this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }),
    (an.monthsShortRegex = function (e) {
      return this._monthsParseExact
        ? (o(this, '_monthsRegex') || He.call(this),
          e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (o(this, '_monthsShortRegex') || (this._monthsShortRegex = Ce),
          this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }),
    (an.week = function (e) {
      return Ee(e, this._week.dow, this._week.doy).week;
    }),
    (an.firstDayOfYear = function () {
      return this._week.doy;
    }),
    (an.firstDayOfWeek = function () {
      return this._week.dow;
    }),
    (an.weekdays = function (e, t) {
      return e
        ? n(this._weekdays)
          ? this._weekdays[e.day()]
          : this._weekdays[
              this._weekdays.isFormat.test(t) ? 'format' : 'standalone'
            ][e.day()]
        : this._weekdays;
    }),
    (an.weekdaysMin = function (e) {
      return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
    }),
    (an.weekdaysShort = function (e) {
      return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
    }),
    (an.weekdaysParse = function (e, t, n) {
      var s, i, r;
      if (this._weekdaysParseExact)
        return function (e, t, n) {
          var s,
            i,
            r,
            a = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                s = 0;
              s < 7;
              ++s
            )
              (r = l([2e3, 1]).day(s)),
                (this._minWeekdaysParse[s] = this.weekdaysMin(
                  r,
                  ''
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[s] = this.weekdaysShort(
                  r,
                  ''
                ).toLocaleLowerCase()),
                (this._weekdaysParse[s] = this.weekdays(
                  r,
                  ''
                ).toLocaleLowerCase());
          return n
            ? 'dddd' === t
              ? -1 !== (i = xe.call(this._weekdaysParse, a))
                ? i
                : null
              : 'ddd' === t
              ? -1 !== (i = xe.call(this._shortWeekdaysParse, a))
                ? i
                : null
              : -1 !== (i = xe.call(this._minWeekdaysParse, a))
              ? i
              : null
            : 'dddd' === t
            ? -1 !== (i = xe.call(this._weekdaysParse, a))
              ? i
              : -1 !== (i = xe.call(this._shortWeekdaysParse, a))
              ? i
              : -1 !== (i = xe.call(this._minWeekdaysParse, a))
              ? i
              : null
            : 'ddd' === t
            ? -1 !== (i = xe.call(this._shortWeekdaysParse, a))
              ? i
              : -1 !== (i = xe.call(this._weekdaysParse, a))
              ? i
              : -1 !== (i = xe.call(this._minWeekdaysParse, a))
              ? i
              : null
            : -1 !== (i = xe.call(this._minWeekdaysParse, a))
            ? i
            : -1 !== (i = xe.call(this._weekdaysParse, a))
            ? i
            : -1 !== (i = xe.call(this._shortWeekdaysParse, a))
            ? i
            : null;
        }.call(this, e, t, n);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          s = 0;
        s < 7;
        s++
      ) {
        if (
          ((i = l([2e3, 1]).day(s)),
          n &&
            !this._fullWeekdaysParse[s] &&
            ((this._fullWeekdaysParse[s] = new RegExp(
              '^' + this.weekdays(i, '').replace('.', '.?') + '$',
              'i'
            )),
            (this._shortWeekdaysParse[s] = new RegExp(
              '^' + this.weekdaysShort(i, '').replace('.', '.?') + '$',
              'i'
            )),
            (this._minWeekdaysParse[s] = new RegExp(
              '^' + this.weekdaysMin(i, '').replace('.', '.?') + '$',
              'i'
            ))),
          this._weekdaysParse[s] ||
            ((r =
              '^' +
              this.weekdays(i, '') +
              '|^' +
              this.weekdaysShort(i, '') +
              '|^' +
              this.weekdaysMin(i, '')),
            (this._weekdaysParse[s] = new RegExp(r.replace('.', ''), 'i'))),
          n && 'dddd' === t && this._fullWeekdaysParse[s].test(e))
        )
          return s;
        if (n && 'ddd' === t && this._shortWeekdaysParse[s].test(e)) return s;
        if (n && 'dd' === t && this._minWeekdaysParse[s].test(e)) return s;
        if (!n && this._weekdaysParse[s].test(e)) return s;
      }
    }),
    (an.weekdaysRegex = function (e) {
      return this._weekdaysParseExact
        ? (o(this, '_weekdaysRegex') || Qe.call(this),
          e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (o(this, '_weekdaysRegex') || (this._weekdaysRegex = qe),
          this._weekdaysStrictRegex && e
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }),
    (an.weekdaysShortRegex = function (e) {
      return this._weekdaysParseExact
        ? (o(this, '_weekdaysRegex') || Qe.call(this),
          e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (o(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = Be),
          this._weekdaysShortStrictRegex && e
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }),
    (an.weekdaysMinRegex = function (e) {
      return this._weekdaysParseExact
        ? (o(this, '_weekdaysRegex') || Qe.call(this),
          e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (o(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = Je),
          this._weekdaysMinStrictRegex && e
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }),
    (an.isPM = function (e) {
      return 'p' === (e + '').toLowerCase().charAt(0);
    }),
    (an.meridiem = function (e, t, n) {
      return e > 11 ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM';
    }),
    ut('en', {
      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (e) {
        var t = e % 10;
        return (
          e +
          (1 === S((e % 100) / 10)
            ? 'th'
            : 1 === t
            ? 'st'
            : 2 === t
            ? 'nd'
            : 3 === t
            ? 'rd'
            : 'th')
        );
      },
    }),
    (t.lang = D('moment.lang is deprecated. Use moment.locale instead.', ut)),
    (t.langData = D(
      'moment.langData is deprecated. Use moment.localeData instead.',
      dt
    ));
  var dn = Math.abs;
  function hn(e, t, n, s) {
    var i = Vt(t, n);
    return (
      (e._milliseconds += s * i._milliseconds),
      (e._days += s * i._days),
      (e._months += s * i._months),
      e._bubble()
    );
  }
  function cn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function fn(e) {
    return (4800 * e) / 146097;
  }
  function mn(e) {
    return (146097 * e) / 4800;
  }
  function _n(e) {
    return function () {
      return this.as(e);
    };
  }
  var yn = _n('ms'),
    gn = _n('s'),
    vn = _n('m'),
    pn = _n('h'),
    wn = _n('d'),
    Sn = _n('w'),
    Mn = _n('M'),
    kn = _n('y');
  function Dn(e) {
    return function () {
      return this._data[e];
    };
  }
  var Yn = Dn('milliseconds'),
    On = Dn('seconds'),
    xn = Dn('minutes'),
    Tn = Dn('hours'),
    bn = Dn('days'),
    Pn = Dn('months'),
    Wn = Dn('years');
  var Rn = Math.round,
    Un = { s: 45, m: 45, h: 22, d: 26, M: 11 };
  var Cn = Math.abs;
  function Fn() {
    var e,
      t,
      n = Cn(this._milliseconds) / 1e3,
      s = Cn(this._days),
      i = Cn(this._months);
    (e = w(n / 60)), (t = w(e / 60)), (n %= 60), (e %= 60);
    var r = w(i / 12),
      a = (i %= 12),
      o = s,
      u = t,
      l = e,
      d = n,
      h = this.asSeconds();
    return h
      ? (h < 0 ? '-' : '') +
          'P' +
          (r ? r + 'Y' : '') +
          (a ? a + 'M' : '') +
          (o ? o + 'D' : '') +
          (u || l || d ? 'T' : '') +
          (u ? u + 'H' : '') +
          (l ? l + 'M' : '') +
          (d ? d + 'S' : '')
      : 'P0D';
  }
  var Hn = Tt.prototype;
  return (
    (Hn.abs = function () {
      var e = this._data;
      return (
        (this._milliseconds = dn(this._milliseconds)),
        (this._days = dn(this._days)),
        (this._months = dn(this._months)),
        (e.milliseconds = dn(e.milliseconds)),
        (e.seconds = dn(e.seconds)),
        (e.minutes = dn(e.minutes)),
        (e.hours = dn(e.hours)),
        (e.months = dn(e.months)),
        (e.years = dn(e.years)),
        this
      );
    }),
    (Hn.add = function (e, t) {
      return hn(this, e, t, 1);
    }),
    (Hn.subtract = function (e, t) {
      return hn(this, e, t, -1);
    }),
    (Hn.as = function (e) {
      var t,
        n,
        s = this._milliseconds;
      if ('month' === (e = U(e)) || 'year' === e)
        return (
          (t = this._days + s / 864e5),
          (n = this._months + fn(t)),
          'month' === e ? n : n / 12
        );
      switch (((t = this._days + Math.round(mn(this._months))), e)) {
        case 'week':
          return t / 7 + s / 6048e5;
        case 'day':
          return t + s / 864e5;
        case 'hour':
          return 24 * t + s / 36e5;
        case 'minute':
          return 1440 * t + s / 6e4;
        case 'second':
          return 86400 * t + s / 1e3;
        case 'millisecond':
          return Math.floor(864e5 * t) + s;
        default:
          throw new Error('Unknown unit ' + e);
      }
    }),
    (Hn.asMilliseconds = yn),
    (Hn.asSeconds = gn),
    (Hn.asMinutes = vn),
    (Hn.asHours = pn),
    (Hn.asDays = wn),
    (Hn.asWeeks = Sn),
    (Hn.asMonths = Mn),
    (Hn.asYears = kn),
    (Hn.valueOf = function () {
      return (
        this._milliseconds +
        864e5 * this._days +
        (this._months % 12) * 2592e6 +
        31536e6 * S(this._months / 12)
      );
    }),
    (Hn._bubble = function () {
      var e,
        t,
        n,
        s,
        i,
        r = this._milliseconds,
        a = this._days,
        o = this._months,
        u = this._data;
      return (
        (r >= 0 && a >= 0 && o >= 0) ||
          (r <= 0 && a <= 0 && o <= 0) ||
          ((r += 864e5 * cn(mn(o) + a)), (a = 0), (o = 0)),
        (u.milliseconds = r % 1e3),
        (e = w(r / 1e3)),
        (u.seconds = e % 60),
        (t = w(e / 60)),
        (u.minutes = t % 60),
        (n = w(t / 60)),
        (u.hours = n % 24),
        (a += w(n / 24)),
        (o += i = w(fn(a))),
        (a -= cn(mn(i))),
        (s = w(o / 12)),
        (o %= 12),
        (u.days = a),
        (u.months = o),
        (u.years = s),
        this
      );
    }),
    (Hn.get = function (e) {
      return this[(e = U(e)) + 's']();
    }),
    (Hn.milliseconds = Yn),
    (Hn.seconds = On),
    (Hn.minutes = xn),
    (Hn.hours = Tn),
    (Hn.days = bn),
    (Hn.weeks = function () {
      return w(this.days() / 7);
    }),
    (Hn.months = Pn),
    (Hn.years = Wn),
    (Hn.humanize = function (e) {
      var t = this.localeData(),
        n = (function (e, t, n) {
          var s = Vt(e).abs(),
            i = Rn(s.as('s')),
            r = Rn(s.as('m')),
            a = Rn(s.as('h')),
            o = Rn(s.as('d')),
            u = Rn(s.as('M')),
            l = Rn(s.as('y')),
            d = (i < Un.s && ['s', i]) ||
              (r <= 1 && ['m']) ||
              (r < Un.m && ['mm', r]) ||
              (a <= 1 && ['h']) ||
              (a < Un.h && ['hh', a]) ||
              (o <= 1 && ['d']) ||
              (o < Un.d && ['dd', o]) ||
              (u <= 1 && ['M']) ||
              (u < Un.M && ['MM', u]) ||
              (l <= 1 && ['y']) || ['yy', l];
          return (
            (d[2] = t),
            (d[3] = +e > 0),
            (d[4] = n),
            function (e, t, n, s, i) {
              return i.relativeTime(t || 1, !!n, e, s);
            }.apply(null, d)
          );
        })(this, !e, t);
      return e && (n = t.pastFuture(+this, n)), t.postformat(n);
    }),
    (Hn.toISOString = Fn),
    (Hn.toString = Fn),
    (Hn.toJSON = Fn),
    (Hn.locale = Zt),
    (Hn.localeData = qt),
    (Hn.toIsoString = D(
      'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
      Fn
    )),
    (Hn.lang = $t),
    z('X', 0, 0, 'unix'),
    z('x', 0, 0, 'valueOf'),
    he('x', ae),
    he('X', /[+-]?\d+(\.\d{1,3})?/),
    _e('X', function (e, t, n) {
      n._d = new Date(1e3 * parseFloat(e, 10));
    }),
    _e('x', function (e, t, n) {
      n._d = new Date(S(e));
    }),
    (t.version = '2.17.1'),
    (e = Dt),
    (t.fn = sn),
    (t.min = function () {
      return xt('isBefore', [].slice.call(arguments, 0));
    }),
    (t.max = function () {
      return xt('isAfter', [].slice.call(arguments, 0));
    }),
    (t.now = function () {
      return Date.now ? Date.now() : +new Date();
    }),
    (t.utc = l),
    (t.unix = function (e) {
      return Dt(1e3 * e);
    }),
    (t.months = function (e, t) {
      return un(e, t, 'months');
    }),
    (t.isDate = r),
    (t.locale = ut),
    (t.invalid = f),
    (t.duration = Vt),
    (t.isMoment = p),
    (t.weekdays = function (e, t, n) {
      return ln(e, t, n, 'weekdays');
    }),
    (t.parseZone = function () {
      return Dt.apply(null, arguments).parseZone();
    }),
    (t.localeData = dt),
    (t.isDuration = bt),
    (t.monthsShort = function (e, t) {
      return un(e, t, 'monthsShort');
    }),
    (t.weekdaysMin = function (e, t, n) {
      return ln(e, t, n, 'weekdaysMin');
    }),
    (t.defineLocale = lt),
    (t.updateLocale = function (e, t) {
      if (null != t) {
        var n,
          s = st;
        null != it[e] && (s = it[e]._config),
          ((n = new b((t = T(s, t)))).parentLocale = it[e]),
          (it[e] = n),
          ut(e);
      } else
        null != it[e] &&
          (null != it[e].parentLocale
            ? (it[e] = it[e].parentLocale)
            : null != it[e] && delete it[e]);
      return it[e];
    }),
    (t.locales = function () {
      return P(it);
    }),
    (t.weekdaysShort = function (e, t, n) {
      return ln(e, t, n, 'weekdaysShort');
    }),
    (t.normalizeUnits = U),
    (t.relativeTimeRounding = function (e) {
      return void 0 === e ? Rn : 'function' == typeof e && ((Rn = e), !0);
    }),
    (t.relativeTimeThreshold = function (e, t) {
      return void 0 !== Un[e] && (void 0 === t ? Un[e] : ((Un[e] = t), !0));
    }),
    (t.calendarFormat = function (e, t) {
      var n = e.diff(t, 'days', !0);
      return n < -6
        ? 'sameElse'
        : n < -1
        ? 'lastWeek'
        : n < 0
        ? 'lastDay'
        : n < 1
        ? 'sameDay'
        : n < 2
        ? 'nextDay'
        : n < 7
        ? 'nextWeek'
        : 'sameElse';
    }),
    (t.prototype = sn),
    t
  );
});
!(function (t) {
  'function' == typeof define && define.amd ? define(['jquery'], t) : t(jQuery);
})(function (t) {
  (t.ui = t.ui || {}), (t.ui.version = '1.12.1');
  var e = 0,
    i = Array.prototype.slice;
  (t.cleanData = (function (e) {
    return function (i) {
      var s, n, o;
      for (o = 0; null != (n = i[o]); o++)
        try {
          (s = t._data(n, 'events')) &&
            s.remove &&
            t(n).triggerHandler('remove');
        } catch (t) {}
      e(i);
    };
  })(t.cleanData)),
    (t.widget = function (e, i, s) {
      var n,
        o,
        a,
        r = {},
        l = e.split('.')[0],
        u = l + '-' + (e = e.split('.')[1]);
      return (
        s || ((s = i), (i = t.Widget)),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        (t.expr[':'][u.toLowerCase()] = function (e) {
          return !!t.data(e, u);
        }),
        (t[l] = t[l] || {}),
        (n = t[l][e]),
        (o = t[l][e] =
          function (t, e) {
            return this._createWidget
              ? void (arguments.length && this._createWidget(t, e))
              : new o(t, e);
          }),
        t.extend(o, n, {
          version: s.version,
          _proto: t.extend({}, s),
          _childConstructors: [],
        }),
        ((a = new i()).options = t.widget.extend({}, a.options)),
        t.each(s, function (e, s) {
          return t.isFunction(s)
            ? void (r[e] = (function () {
                function t() {
                  return i.prototype[e].apply(this, arguments);
                }
                function n(t) {
                  return i.prototype[e].apply(this, t);
                }
                return function () {
                  var e,
                    i = this._super,
                    o = this._superApply;
                  return (
                    (this._super = t),
                    (this._superApply = n),
                    (e = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = o),
                    e
                  );
                };
              })())
            : void (r[e] = s);
        }),
        (o.prototype = t.widget.extend(
          a,
          { widgetEventPrefix: (n && a.widgetEventPrefix) || e },
          r,
          { constructor: o, namespace: l, widgetName: e, widgetFullName: u }
        )),
        n
          ? (t.each(n._childConstructors, function (e, i) {
              var s = i.prototype;
              t.widget(s.namespace + '.' + s.widgetName, o, i._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
      );
    }),
    (t.widget.extend = function (e) {
      for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
        for (s in o[a])
          (n = o[a][s]),
            o[a].hasOwnProperty(s) &&
              void 0 !== n &&
              (e[s] = t.isPlainObject(n)
                ? t.isPlainObject(e[s])
                  ? t.widget.extend({}, e[s], n)
                  : t.widget.extend({}, n)
                : n);
      return e;
    }),
    (t.widget.bridge = function (e, s) {
      var n = s.prototype.widgetFullName || e;
      t.fn[e] = function (o) {
        var a = 'string' == typeof o,
          r = i.call(arguments, 1),
          l = this;
        return (
          a
            ? this.length || 'instance' !== o
              ? this.each(function () {
                  var i,
                    s = t.data(this, n);
                  return 'instance' === o
                    ? ((l = s), !1)
                    : s
                    ? t.isFunction(s[o]) && '_' !== o.charAt(0)
                      ? (i = s[o].apply(s, r)) !== s && void 0 !== i
                        ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                        : void 0
                      : t.error(
                          "no such method '" +
                            o +
                            "' for " +
                            e +
                            ' widget instance'
                        )
                    : t.error(
                        'cannot call methods on ' +
                          e +
                          " prior to initialization; attempted to call method '" +
                          o +
                          "'"
                      );
                })
              : (l = void 0)
            : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))),
              this.each(function () {
                var e = t.data(this, n);
                e
                  ? (e.option(o || {}), e._init && e._init())
                  : t.data(this, n, new s(o, this));
              })),
          l
        );
      };
    }),
    (t.Widget = function () {}),
    (t.Widget._childConstructors = []),
    (t.Widget.prototype = {
      widgetName: 'widget',
      widgetEventPrefix: '',
      defaultElement: '<div>',
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (i, s) {
        (s = t(s || this.defaultElement || this)[0]),
          (this.element = t(s)),
          (this.uuid = e++),
          (this.eventNamespace = '.' + this.widgetName + this.uuid),
          (this.bindings = t()),
          (this.hoverable = t()),
          (this.focusable = t()),
          (this.classesElementLookup = {}),
          s !== this &&
            (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === s && this.destroy();
              },
            }),
            (this.document = t(s.style ? s.ownerDocument : s.document || s)),
            (this.window = t(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = t.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            i
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger('create', null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        var e = this;
        this._destroy(),
          t.each(this.classesElementLookup, function (t, i) {
            e._removeClass(i, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr('aria-disabled'),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: t.noop,
      widget: function () {
        return this.element;
      },
      option: function (e, i) {
        var s,
          n,
          o,
          a = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ('string' == typeof e)
          if (((a = {}), (s = e.split('.')), (e = s.shift()), s.length)) {
            for (
              n = a[e] = t.widget.extend({}, this.options[e]), o = 0;
              s.length - 1 > o;
              o++
            )
              (n[s[o]] = n[s[o]] || {}), (n = n[s[o]]);
            if (((e = s.pop()), 1 === arguments.length))
              return void 0 === n[e] ? null : n[e];
            n[e] = i;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[e] ? null : this.options[e];
            a[e] = i;
          }
        return this._setOptions(a), this;
      },
      _setOptions: function (t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          'classes' === t && this._setOptionClasses(e),
          (this.options[t] = e),
          'disabled' === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (e) {
        var i, s, n;
        for (i in e)
          (n = this.classesElementLookup[i]),
            e[i] !== this.options.classes[i] &&
              n &&
              n.length &&
              ((s = t(n.get())),
              this._removeClass(n, i),
              s.addClass(
                this._classes({ element: s, keys: i, classes: e, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + '-disabled',
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, 'ui-state-hover'),
            this._removeClass(this.focusable, null, 'ui-state-focus'));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (e) {
        function i(i, o) {
          var a, r;
          for (r = 0; i.length > r; r++)
            (a = n.classesElementLookup[i[r]] || t()),
              (a = e.add
                ? t(t.unique(a.get().concat(e.element.get())))
                : t(a.not(e.element).get())),
              (n.classesElementLookup[i[r]] = a),
              s.push(i[r]),
              o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
        var s = [],
          n = this;
        return (
          (e = t.extend(
            { element: this.element, classes: this.options.classes || {} },
            e
          )),
          this._on(e.element, { remove: '_untrackClassesElement' }),
          e.keys && i(e.keys.match(/\S+/g) || [], !0),
          e.extra && i(e.extra.match(/\S+/g) || []),
          s.join(' ')
        );
      },
      _untrackClassesElement: function (e) {
        var i = this;
        t.each(i.classesElementLookup, function (s, n) {
          -1 !== t.inArray(e.target, n) &&
            (i.classesElementLookup[s] = t(n.not(e.target).get()));
        });
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, s) {
        s = 'boolean' == typeof s ? s : i;
        var n = 'string' == typeof t || null === t,
          o = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: s,
          };
        return o.element.toggleClass(this._classes(o), s), this;
      },
      _on: function (e, i, s) {
        var n,
          o = this;
        'boolean' != typeof e && ((s = i), (i = e), (e = !1)),
          s
            ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          t.each(s, function (s, a) {
            function r() {
              return e ||
                (!0 !== o.options.disabled &&
                  !t(this).hasClass('ui-state-disabled'))
                ? ('string' == typeof a ? o[a] : a).apply(o, arguments)
                : void 0;
            }
            'string' != typeof a &&
              (r.guid = a.guid = a.guid || r.guid || t.guid++);
            var l = s.match(/^([\w:-]*)\s*(.*)$/),
              u = l[1] + o.eventNamespace,
              h = l[2];
            h ? n.on(u, h, r) : i.on(u, r);
          });
      },
      _off: function (e, i) {
        (i =
          (i || '').split(' ').join(this.eventNamespace + ' ') +
          this.eventNamespace),
          e.off(i).off(i),
          (this.bindings = t(this.bindings.not(e).get())),
          (this.focusable = t(this.focusable.not(e).get())),
          (this.hoverable = t(this.hoverable.not(e).get()));
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ('string' == typeof t ? i[t] : t).apply(i, arguments);
        }, e || 0);
      },
      _hoverable: function (e) {
        (this.hoverable = this.hoverable.add(e)),
          this._on(e, {
            mouseenter: function (e) {
              this._addClass(t(e.currentTarget), null, 'ui-state-hover');
            },
            mouseleave: function (e) {
              this._removeClass(t(e.currentTarget), null, 'ui-state-hover');
            },
          });
      },
      _focusable: function (e) {
        (this.focusable = this.focusable.add(e)),
          this._on(e, {
            focusin: function (e) {
              this._addClass(t(e.currentTarget), null, 'ui-state-focus');
            },
            focusout: function (e) {
              this._removeClass(t(e.currentTarget), null, 'ui-state-focus');
            },
          });
      },
      _trigger: function (e, i, s) {
        var n,
          o,
          a = this.options[e];
        if (
          ((s = s || {}),
          ((i = t.Event(i)).type = (
            e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
          ).toLowerCase()),
          (i.target = this.element[0]),
          (o = i.originalEvent))
        )
          for (n in o) n in i || (i[n] = o[n]);
        return (
          this.element.trigger(i, s),
          !(
            (t.isFunction(a) &&
              !1 === a.apply(this.element[0], [i].concat(s))) ||
            i.isDefaultPrevented()
          )
        );
      },
    }),
    t.each({ show: 'fadeIn', hide: 'fadeOut' }, function (e, i) {
      t.Widget.prototype['_' + e] = function (s, n, o) {
        'string' == typeof n && (n = { effect: n });
        var a,
          r = n ? (!0 === n || 'number' == typeof n ? i : n.effect || i) : e;
        'number' == typeof (n = n || {}) && (n = { duration: n }),
          (a = !t.isEmptyObject(n)),
          (n.complete = o),
          n.delay && s.delay(n.delay),
          a && t.effects && t.effects.effect[r]
            ? s[e](n)
            : r !== e && s[r]
            ? s[r](n.duration, n.easing, o)
            : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i();
              });
      };
    }),
    t.widget;
});
!(function (E) {
  'function' == typeof define && define.amd ? define(['jquery'], E) : E(jQuery);
})(function (E) {
  (E.ui = E.ui || {}),
    (E.ui.version = '1.12.1'),
    (E.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    });
});
!(function (e) {
  'function' == typeof define && define.amd ? define(['jquery'], e) : e(jQuery);
})(function (e) {
  (e.ui = e.ui || {}),
    (e.ui.version = '1.12.1'),
    (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  var t = !1;
  e(document).on('mouseup', function () {
    t = !1;
  }),
    e.widget('ui.mouse', {
      version: '1.12.1',
      options: {
        cancel: 'input, textarea, button, select, option',
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var t = this;
        this.element
          .on('mousedown.' + this.widgetName, function (e) {
            return t._mouseDown(e);
          })
          .on('click.' + this.widgetName, function (i) {
            return !0 === e.data(i.target, t.widgetName + '.preventClickEvent')
              ? (e.removeData(i.target, t.widgetName + '.preventClickEvent'),
                i.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.off('.' + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .off('mouseup.' + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (i) {
        if (!t) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(i),
            (this._mouseDownEvent = i);
          var s = this,
            o = 1 === i.which,
            n =
              !('string' != typeof this.options.cancel || !i.target.nodeName) &&
              e(i.target).closest(this.options.cancel).length;
          return (
            !(o && !n && this._mouseCapture(i)) ||
            ((this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                s.mouseDelayMet = !0;
              }, this.options.delay)),
            this._mouseDistanceMet(i) &&
            this._mouseDelayMet(i) &&
            ((this._mouseStarted = !1 !== this._mouseStart(i)),
            !this._mouseStarted)
              ? (i.preventDefault(), !0)
              : (!0 ===
                  e.data(i.target, this.widgetName + '.preventClickEvent') &&
                  e.removeData(
                    i.target,
                    this.widgetName + '.preventClickEvent'
                  ),
                (this._mouseMoveDelegate = function (e) {
                  return s._mouseMove(e);
                }),
                (this._mouseUpDelegate = function (e) {
                  return s._mouseUp(e);
                }),
                this.document
                  .on('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                  .on('mouseup.' + this.widgetName, this._mouseUpDelegate),
                i.preventDefault(),
                (t = !0),
                !0))
          );
        }
      },
      _mouseMove: function (t) {
        if (this._mouseMoved) {
          if (
            e.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !t.button
          )
            return this._mouseUp(t);
          if (!t.which)
            if (
              t.originalEvent.altKey ||
              t.originalEvent.ctrlKey ||
              t.originalEvent.metaKey ||
              t.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(t);
        }
        return (
          (t.which || t.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(t), t.preventDefault())
            : (this._mouseDistanceMet(t) &&
                this._mouseDelayMet(t) &&
                ((this._mouseStarted =
                  !1 !== this._mouseStart(this._mouseDownEvent, t)),
                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (i) {
        this.document
          .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
          .off('mouseup.' + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            i.target === this._mouseDownEvent.target &&
              e.data(i.target, this.widgetName + '.preventClickEvent', !0),
            this._mouseStop(i)),
          this._mouseDelayTimer &&
            (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (t = !1),
          i.preventDefault();
      },
      _mouseDistanceMet: function (e) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - e.pageX),
            Math.abs(this._mouseDownEvent.pageY - e.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    });
});
!(function () {
  function t(t, e) {
    for (prop in ((this.$el = t),
    (this.id = this.$el.attr('id')),
    (this.size = 1),
    (this.ratio = 0.3),
    (this.multiple = 1.2),
    (this.lastCoordinates = { x: 0, y: 0 }),
    (this.value = 0),
    (this.step = 1),
    (this.min = 0),
    (this.max = 1e3),
    (this.disabled = !1),
    (this.pollLimit = !1),
    (this.lastPoll = 0),
    e))
      e.hasOwnProperty(prop) && (this[prop] = e[prop]);
    (this.step = this.step <= 0 ? 1 : this.step),
      (this.max =
        this.max - this.min < this.step ? this.min + this.step : this.max),
      (this.diapason = this.max - this.min),
      (this.value =
        this.value < this.min
          ? this.min
          : this.value > this.max
          ? this.max
          : this.value),
      this.main();
  }
  (String.prototype.toFloat = function () {
    var t = this.split(' ')[0],
      e = Number(t.replace('px', '')),
      i = Number(t.replace('em', ''));
    return isNaN(e) ? !isNaN(i) && i : e;
  }),
    (t.prototype = {
      main: function () {
        this.construct(),
          this.events(),
          this.setBar((this.value - this.min) / this.diapason);
      },
      construct: function () {
        this.$el.addClass('rangeslider'),
          this.disabled && this.$el.addClass('disabled'),
          this.$el
            .append($('<div>', { class: 'rangeouter' }))
            .append($('<div>', { class: 'rangeinner' }))
            .append($('<div>', { class: 'rangeselector' })),
          (this.$rangeinner = this.$el.find('div.rangeinner')),
          (this.$rangeouter = this.$el.find('div.rangeouter')),
          (this.$rangeselector = this.$el.find('div.rangeselector')),
          this.setState('inactive');
      },
      events: function () {
        var t = window.navigator.pointerEnabled
            ? {
                start: 'pointerdown.ra',
                move: 'pointermove.ra',
                end: 'pointerup.ra',
              }
            : window.navigator.msPointerEnabled
            ? {
                start: 'MSPointerDown.ra',
                move: 'MSPointerMove.ra',
                end: 'MSPointerUp.ra',
              }
            : {
                start: 'mousedown.ra touchstart.ra',
                move: 'mousemove.ra touchmove.ra',
                end: 'mouseup.ra touchend.ra',
              },
          e = this;
        this.$el.on(t.start, function (t) {
          if ((t.preventDefault(), !e.disabled)) {
            e.setState('active');
            var i = e.getCoordinates(t);
            e.fixBar(i);
            e.lastCoordinates = i;
            var s = e.getvalue(e.lastCoordinates).round;
            (e.value = s), 'function' == typeof e.onDown && e.onDown(t, s);
          }
        });
        this.$el.add(document).on(t.move, function (t) {
          if (!0 === e.active) {
            t.preventDefault();
            var i = e.getCoordinates(t);
            if (
              (e.fixBar(i),
              (e.lastCoordinates = i),
              'function' == typeof e.onMove)
            ) {
              var s = window.performance.now();
              if (s - e.lastPoll > (e.pollLimit ? 1e3 / e.pollLimit : -1)) {
                var a = e.getvalue(e.lastCoordinates).round;
                (e.value = a), e.onMove(t, a), (e.lastPoll = s);
              }
            }
          }
        }),
          this.$el.add(document).on(t.end, function (t) {
            if (!0 === e.active) {
              e.setState('inactive'), (e.startingX = !1);
              var i = e.getvalue(e.lastCoordinates).round;
              (e.value = i),
                'function' == typeof e.onUp &&
                  ('function' == typeof e.onMove && e.onMove(t, i),
                  e.onUp(t, i));
            }
          });
      },
      getCoordinates: function (t) {
        if (
          ((ret = { x: !1, y: !1 }),
          (touches = t.originalEvent.touches || !1),
          touches)
        ) {
          var e = touches[0];
          (ret.x = e.pageX), (ret.y = e.pageY);
        } else t.clientX && ((ret.x = t.clientX), (ret.y = t.clientY));
        return ret;
      },
      fixBar: function (t) {
        var e = this.getvalue(t).width;
        this.setBar(e);
      },
      getvalue: function (t) {
        var e = t.x - this.$el.offset().left,
          i = this.$el.width();
        e < 0 && (e = 0), e > i && (e = i);
        var s,
          a = e / i,
          n =
            ((s = (a * this.diapason) / this.step) > 0
              ? Math.floor(s)
              : Math.ceil(s)) *
              this.step +
            this.min,
          o = i / this.diapason,
          r = (n + this.step - this.min) * o;
        return (
          o > 7 && r - e < 7 && (n += this.step),
          n > this.max && (n = this.max),
          { width: a, round: n }
        );
      },
      setBar: function (t) {
        if (t < 0 || t > 1)
          throw new Error(
            'RangeSlider: setBar expects a percentage between 0-1, ',
            t,
            'given'
          );
        this.$el.width();
        this.$rangeinner.css('width', 100 * t + '%'),
          this.$rangeselector.css('left', 100 * t + '%');
      },
      setState: function (t) {
        this.$rangeselector.is('visible') &&
          this.$rangeselector.css('left').toFloat(),
          (this.active = 'active' === t);
      },
      disable: function () {
        this.$el.addClass('disabled'), (this.disabled = !0);
      },
      enable: function () {
        this.$el.removeClass('disabled'), (this.disabled = !1);
      },
      setValue: function (t) {
        if (t < 0 || t > this.diapason)
          throw new Error(
            'RangeSlider: setPercentage expects a percentage between 0-100, ',
            percentage,
            'given'
          );
        this.setBar(t / this.diapason), this.onMove(!1, t);
      },
    }),
    (window.RangeSlider = t);
})();
FIELDS.input_text = {
  DEFAULT_PHONE_PLACEHOLDER: loc['+7'],
  title: loc['Поле'],
  tmpl: {
    default:
      '<div class="field-body__item [type]-body" data-important="[importantSwitcher]">                    <input id="input_text-[id]">                </div>',
    minimal:
      '<div class="field-body__item [type]-body" data-important="[importantSwitcher]">                    <input id="input_text-[id]">                </div>',
    material:
      '<div class="field-body__item [type]-body" data-important="[importantSwitcher]">                    <input id="input_text-[id]">                </div>',
    bootstrap:
      '<div class="field-body__item [type]-body" data-important="[importantSwitcher]">                   <input id="input_text-[id]">                </div>',
  },
  signe: {
    id: null,
    id_var: null,
    litera: null,
    L: null,
    C: null,
    type: 'input_text',
    blur: 'input',
    break_all: 0,
    group: DAT.itsCreate
      ? ''
      : '<p><span class="size-18">' + loc['Поле для ввода'] + '</span></p>',
    group_text: DAT.itsCreate ? '' : loc['Поле для ввода'],
    tooltip: loc['Введите число'],
    desc: DAT.itsCreate ? '' : loc['Небольшое описание'],
    desc_text: DAT.itsCreate ? '' : loc['Небольшое описание'],
    value: '',
    font_size: 20,
    color_text: 'inherit',
    color_bg: '#ffffff',
    required: !0,
    typeChange: 'number',
    titleSwitcher: 'block',
    descSwitcher: 'none',
    importantSwitcher: '',
    symbolMin: '',
    symbolMax: '',
    paddingLR: 24,
    paddingTop: 12,
    paddingBottom: 18,
    selectedCountry: loc.ru,
  },
  standart_opt: [
    loc['Введите число'],
    loc['Введите текст'],
    loc['Введите текст'],
    loc['+7'],
    loc['дд.мм.гггг'],
    '--:--',
    'mail@ucalc.pro',
    loc['Файл не выбран'],
  ],
  initial: function (e) {
    var t = e.id,
      n =
        ($('#' + e.type + '-' + t), $('#' + e.type + '-blocks-' + t), e.value);
    FIELDS.input_text.availableGenerate(),
      FIELDS.input_text.changeType(e),
      ('' !== n && 'number' === e.typeChange) || (n = 0),
      null !== e.id &&
        ($('#viewing_panel').delegate(
          '#input_text-' + t,
          'input.fields change.fields',
          function () {
            var t = $(this),
              n = t.val(),
              a = n / 1;
            isNaN(a) && (a = 0),
              RECALC.varUpdate(e.litera, a),
              n && '*' === e.importantSwitcher && FIELDS.checkAgain(e, t);
          }
        ),
        RECALC.varUpdate(DAT.varName(e.id_var), n));
  },
  changeType: function (e) {
    var t = e.id,
      n = $('#' + e.type + '-' + t);
    e.value;
    'tel' !== e.typeChange && this.cleanUpPhoneWidgetDOM(e),
      'file' !== e.typeChange && this.cleanUpFileWidgetDOM(e),
      'textarea' === e.typeChange
        ? (n.replaceWith(
            '<textarea class="input-field input-field-text js-field-input" placeholder="[tooltip] [importantSwitcher]" id="input_text-[id]" required="[required]" style="resize: none;">[value]</textarea>'.Signe(
              e
            )
          ),
          $('#input_text-' + t).outerHeight(
            $('#input_text-' + t)[0].scrollHeight
          ))
        : 'file' === e.typeChange
        ? n.replaceWith(
            '<input type="text" class="input-file input-field input-field-text js-field-input" placeholder="[tooltip] [importantSwitcher]" id="input_text-[id]" required="[required]" value="[value]">'.Signe(
              e
            )
          )
        : 'number' === e.typeChange
        ? ('' !== e.value &&
            'number' != typeof e.value &&
            (e.value = e.value.replace(/\D+/g, '')),
          n.replaceWith(
            '<input type="[typeChange]" class="input-field input-field-text js-field-input" placeholder="[tooltip] [importantSwitcher]" id="input_text-[id]" required="[required]" value="[value]">'.Signe(
              e
            )
          ))
        : n.replaceWith(
            '<input type="[typeChange]" class="input-field input-field-text js-field-input" placeholder="[tooltip] [importantSwitcher]" id="input_text-[id]" required="[required]" value="[value]">'.Signe(
              e
            )
          ),
      'tel' == e.typeChange
        ? this.renderPhoneWidget(e)
        : 'file' == e.typeChange && this.renderFileWidget(e);
    var a = $('[data-id="' + t + '"] .js-field-input');
    a.off('input.fieldInitial blur.fieldInitial'),
      'tel' == e.typeChange ||
        ('email' == e.typeChange
          ? (a.on('input.fieldInitial', function () {
              var e = $(this),
                t = $(this).val(),
                n = DAT.valid.email(t);
              t != n && e.val(n),
                e.removeClass('need-input'),
                e.next('.input-alert').remove();
            }),
            a.on('blur.fieldInitial', function () {
              var e = $(this),
                t = e.val();
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim.test(
                t
              ) ||
                '' == t ||
                (!DAT.itsFrame && !DAT.itsApi) ||
                (e.addClass('need-input'),
                e.next('.input-alert').fadeOut(300, function () {
                  $(this).remove();
                }),
                e.after(
                  '<div class="input-alert input-alert-nodel">' +
                    loc['Укажите корректный e-mail'] +
                    '</div>'
                ),
                $('.input-alert').fadeIn(400).addClass('animated shake'));
            }))
          : $('[data-id="' + t + '"] .js-field-input').off(
              'input.fieldInitial'
            ));
  },
  countryItemTemplate:
    '<li class="js-country-item" data-country-id="[countryId]"><div class="country-selector-item [activeClass]"><img src="[counryFlagUrl]" /><span class="country-name-span">[countryName]</span><i class="material-icons country-check-span">done</i></div></li>',
  countriesPopoverHTML:
    '<div class="tooltip tooltip-down tooltip-notranslate"><div class="tooltip-fade"><ol class="tooltip-units js-countries-list"></ol></div></div>',
  tel_ru: [
    {
      countryId: 'ru',
      flagImgName: 'ru.png',
      countryCode: '+7',
      codeMask: '9',
      fieldMask: '+9 (999) 999-9999',
      countryName: loc['Россия'],
    },
    {
      countryId: 'ua',
      flagImgName: 'ua.png',
      countryCode: '+38',
      codeMask: '99',
      fieldMask: '+99 (999) 999-9999',
      countryName: loc['Украина'],
    },
    {
      countryId: 'kz',
      flagImgName: 'kz.png',
      countryCode: '+77',
      codeMask: '9',
      fieldMask: '+9 (999) 999-9999',
      countryName: loc['Казахстан'],
    },
    {
      countryId: 'by',
      flagImgName: 'by.png',
      countryCode: '+375',
      codeMask: '999',
      fieldMask: '+999 (99) 999-9999',
      countryName: loc['Беларусь'],
    },
    {
      countryId: 'az',
      flagImgName: 'az.png',
      countryCode: '+994',
      codeMask: '999',
      fieldMask: '+999 (99) 999-9999',
      countryName: loc['Азербайджан'],
    },
    {
      countryId: 'am',
      flagImgName: 'am.png',
      countryCode: '+374',
      codeMask: '999',
      fieldMask: '+999 (99) 999-9999',
      countryName: loc['Армения'],
    },
    {
      countryId: 'kg',
      flagImgName: 'kg.png',
      countryCode: '+996',
      codeMask: '999',
      fieldMask: '+999 (99) 999-9999',
      countryName: loc['Киргизия'],
    },
    {
      countryId: 'md',
      flagImgName: 'md.png',
      countryCode: '+373',
      codeMask: '999',
      fieldMask: '+999 (999) 999-9999',
      countryName: loc['Молдавия'],
    },
    {
      countryId: 'tj',
      flagImgName: 'tj.png',
      countryCode: '+992',
      codeMask: '999',
      fieldMask: '+999 (99) 999-9999',
      countryName: loc['Таджикистан'],
    },
    {
      countryId: 'tm',
      flagImgName: 'tm.png',
      countryCode: '+993',
      codeMask: '999',
      fieldMask: '+999 (999) 999-9999',
      countryName: loc['Туркмения'],
    },
    {
      countryId: 'uz',
      flagImgName: 'uz.png',
      countryCode: '+998',
      codeMask: '999',
      fieldMask: '+999 (99) 999-9999',
      countryName: loc['Узбекистан'],
    },
  ],
  tel_us: [
    {
      countryId: 'us',
      flagImgName: 'us.png',
      countryCode: '+1',
      codeMask: '9',
      fieldMask: '+9 (999) 999-9999',
      countryName: loc['США'],
    },
    {
      countryId: 'gb',
      flagImgName: 'gb.png',
      countryCode: '+44',
      codeMask: '99',
      fieldMask: '+99 (999) 999-9999',
      countryName: loc['Великобритания'],
    },
    {
      countryId: 'ca',
      flagImgName: 'ca.png',
      countryCode: '+1',
      codeMask: '9',
      fieldMask: '+9 (999) 999-9999',
      countryName: loc['Канада'],
    },
    {
      countryId: 'au',
      flagImgName: 'au.png',
      countryCode: '+61',
      codeMask: '99',
      fieldMask: '+99 (99) 999-9999',
      countryName: loc['Австралия'],
    },
    {
      countryId: 'ie',
      flagImgName: 'ie.png',
      countryCode: '+353',
      codeMask: '999',
      fieldMask: '+999 (99) 999-9999',
      countryName: loc['Ирландия'],
    },
    {
      countryId: 'nz',
      flagImgName: 'nz.png',
      countryCode: '+64',
      codeMask: '99',
      fieldMask: '+99 (999) 999-9999',
      countryName: loc['Новая Зеландия'],
    },
    {
      countryId: 'in',
      flagImgName: 'in.png',
      countryCode: '+91',
      codeMask: '99',
      fieldMask: '+99 (999) 999-9999',
      countryName: loc['Индия'],
    },
    {
      countryId: 'pk',
      flagImgName: 'pk.png',
      countryCode: '+92',
      codeMask: '99',
      fieldMask: '+99 (999) 999-9999',
      countryName: loc['Пакистан'],
    },
    {
      countryId: 'ph',
      flagImgName: 'ph.png',
      countryCode: '+63',
      codeMask: '99',
      fieldMask: '+99 (99) 999-9999',
      countryName: loc['Филиппины'],
    },
    {
      countryId: 'ng',
      flagImgName: 'ng.png',
      countryCode: '+234',
      codeMask: '999',
      fieldMask: '+999 (9999) 999-9999',
      countryName: loc['Нигерия'],
    },
    {
      countryId: 'za',
      flagImgName: 'za.png',
      countryCode: '+27',
      codeMask: '99',
      fieldMask: '+99 (999) 999-9999',
      countryName: loc['ЮАР'],
    },
  ],
  tel_ja: [
    {
      countryId: 'ja',
      flagImgName: 'ja.png',
      countryCode: '+81',
      codeMask: '99',
      fieldMask: '+99 (99) 999-9999',
      countryName: loc['Япония'],
    },
    {
      countryId: 'ch',
      flagImgName: 'ch.png',
      countryCode: '+86',
      codeMask: '99',
      fieldMask: '+99 (999) 999-9999',
      countryName: loc['Китай'],
    },
    {
      countryId: 'ph',
      flagImgName: 'ph.png',
      countryCode: '+63',
      codeMask: '99',
      fieldMask: '+99 (99) 999-9999',
      countryName: loc['Филиппины'],
    },
    {
      countryId: 'kr',
      flagImgName: 'kr.png',
      countryCode: '+82',
      codeMask: '99',
      fieldMask: '+99 (99) 999-9999',
      countryName: loc['Южная Корея'],
    },
    {
      countryId: 'mn',
      flagImgName: 'mn.png',
      countryCode: '+976',
      codeMask: '999',
      fieldMask: '+999 (99) 99-9999',
      countryName: loc['Монголия'],
    },
    {
      countryId: 'kp',
      flagImgName: 'kp.png',
      countryCode: '+850',
      codeMask: '999',
      fieldMask: '+999 (9) 999-9999',
      countryName: loc['Северная Корея'],
    },
  ],
  tel_other: [
    {
      countryId: 'br',
      flagImgName: 'br.png',
      countryCode: '+55',
      codeMask: '99',
      fieldMask: '+99 (9999) 999-9999',
      countryName: 'brazil',
    },
  ],
  availableCountries: [],
  availableGenerate: function (e) {
    var t = FIELDS.input_text,
      n = 'availableCountries';
    'all' == e
      ? (t[n] = [].concat(t.tel_ru, t.tel_us, t.tel_ja, t.tel_other))
      : 'ru' == SERV.this_lang
      ? (t[n] = [].concat(t.tel_ru, t.tel_us))
      : 'ja' == SERV.this_lang
      ? (t[n] = [].concat(t.tel_ja))
      : (t[n] = [].concat(t.tel_us));
  },
  unknownCountryData: {
    countryId: 'UNKNOWN_COUNTRY',
    countryCode: '+',
    flagImgName: 'unknownCountry.png',
  },
  phoneWidgetHTML:
    '<div class="phone-widget-wrapper js-inner-wrapper"><img class="js-country-flag" src="" /><span class="phone-widget-arrow"><i class="material-icons">keyboard_arrow_down</i></span></div>',
  imgBasePath: '/templates/layout/img/flags/',
  defaultCountryCode:
    'ru' == SERV.this_lang ? 'ru' : 'ja' == SERV.this_lang ? 'ja' : 'us',
  activeCountryItemClass: 'active-item-cs',
  borderedItemIndex: 3,
  renderPhoneWidget: function (e) {
    var t = this,
      n = (t.defaultCountryCode, t.availableCountries),
      a = t.activeCountryItemClass,
      i = e.id;
    e.value = M(e.value);
    var o,
      l,
      r = $('#input_text-' + i).attr('maxlength', 16),
      d = r.closest('div'),
      u = SAVER.getFieldBy('id', i),
      c = void 0 === e.selectedCountry,
      s =
        ((o = $(t.countriesPopoverHTML).hide().appendTo('body')),
        (l = o.find('.js-countries-list')),
        n.forEach(function (n, i) {
          var o = $(
            t.countryItemTemplate.Signe({
              counryFlagUrl: v(n.flagImgName),
              countryName:
                n.countryName + ' (<strong>' + n.countryCode + '</strong>)',
              activeClass: e.selectedCountry === n.countryCode ? a : '',
              countryId: n.countryId,
            })
          );
          o.data('country-info', n), l.append(o);
        }),
        o.on('click', '.js-country-item', function (e) {
          var t = $(e.target).closest('.js-country-item');
          if (!t.hasClass(a)) {
            var n = t.data('country-info') || N();
            y(),
              m(n.countryId),
              h(n.countryCode),
              C(n.flagImgName),
              g({ selectedCountry: n.countryId, value: _() }),
              r.attr(
                'maxlength',
                'UNKNOWN_COUNTRY' == n.countryId
                  ? '16'
                  : n.fieldMask.match(/9/g).length + 1
              ),
              k() && I(n.countryCode),
              SETTINGS.closeCustomPopups(),
              d
                .find('.js-inner-wrapper')
                .find('.phone-widget-arrow')
                .removeClass('open')
                .addClass('close'),
              $(document).off('mouseup.genTooltip');
          }
        }),
        o.find('.js-country-item').eq(t.borderedItemIndex).addClass('bordered'),
        o);
    function p(e) {
      '+' === e.val() && e.val('').addClass('js-was-blured-with-plus');
    }
    function f(e) {
      var t = n.filter(function (t, n) {
        return t.countryId === e;
      });
      return t.length > 0 ? t[0] : null;
    }
    function m(e) {
      s.find("[data-country-id='" + e + "']")
        .find('div')
        .addClass(a);
    }
    function y() {
      s.find('.' + a).removeClass(a);
    }
    function g(t) {
      Object.keys(t).forEach(function (n, a) {
        var i = t[n];
        (e[n] = i), (u[n] = i);
      });
    }
    function v(e) {
      return t.imgBasePath + e;
    }
    function C(e) {
      d.find('.js-country-flag').attr('src', v(e));
    }
    function h(e) {
      r.val(e).removeClass('js-was-blured-with-plus');
    }
    function I(e) {
      g({ tooltip: e });
    }
    function k() {
      var e = u.tooltip,
        n = t.standart_opt.indexOf(e) >= 0,
        a = null !== t.findCountryByPhoneCodeStrict(e);
      return n || a;
    }
    function N() {
      return t.unknownCountryData;
    }
    function _() {
      return r.val();
    }
    function M(e) {
      var t = '' + e;
      return t.length ? (0 === t.indexOf('+') ? t : '+' + t) : '+';
    }
    !(function (n) {
      r.addClass('shifted-field'),
        d
          .addClass('phone-widget-wrapper-global')
          .prepend(t.phoneWidgetHTML)
          .on('click.countriesPopover', '.js-inner-wrapper', function (e) {
            var t = d.find('.js-inner-wrapper'),
              n = t.find('.phone-widget-arrow');
            e.stopImmediatePropagation(),
              s.is(':visible')
                ? SETTINGS.closeCustomPopups()
                : SETTINGS.openGeneratedPopup(
                    s,
                    d.find('.phone-widget-arrow'),
                    {
                      customPopupClass:
                        'country-selector-popup no-list-counter',
                      tailTopShift: 16,
                      tailLeftShift: 14,
                      toggleTriggerElement: t,
                      onClose: function () {
                        n.removeClass('open').addClass('close');
                      },
                      onOpen: function () {
                        n.removeClass('close').addClass('open');
                      },
                    }
                  );
          });
      var a = null,
        i = null;
      n
        ? ((a = t.defaultCountryCode),
          null === (i = f(a)) && (i = N()),
          h(i.countryCode),
          C(i.flagImgName),
          m(i.countryId),
          g({ selectedCountry: a, value: _() }),
          I(i.countryCode))
        : (null === (i = f(e.selectedCountry)) && (i = N()),
          h(e.value),
          C(i.flagImgName),
          m(i.countryId));
    })(c),
      r.on('input.phoneWidget', function (e) {
        var a = this.value;
        h((a = M('+' + a.replace(/\D/g, ''))));
        var i = t.findCountryByPhoneCodeStrict(a);
        null === i &&
          (i =
            (function (e) {
              var t = (e = e.trim()).length;
              if (!t || '+' === e) return null;
              var a = n.filter(function (n, a) {
                var i = n.countryCode,
                  o = i.length > t ? i : e,
                  l = o === e ? i : e,
                  r = !1,
                  d = o.replace(l, '').substr(0, 3);
                return (
                  [
                    '403',
                    '587',
                    '780',
                    '250',
                    '604',
                    '778',
                    '418',
                    '438',
                    '450',
                    '514',
                    '579',
                    '581',
                    '819',
                    '204',
                    '902',
                    '867',
                    '506',
                    '709',
                    '226',
                    '249',
                    '289',
                    '343',
                    '416',
                    '519',
                    '613',
                    '647',
                    '705',
                    '807',
                    '905',
                    '902',
                    '306',
                    '867',
                    '867',
                  ].forEach(function (e) {
                    0 === e.indexOf(d) && (r = !0);
                  }),
                  ('us' != n.countryId || !r) &&
                    !('ca' == n.countryId && !r) &&
                    0 === o.indexOf(l)
                );
              });
              return a.length > 0 ? a[a.length - 1] : null;
            })(a) || N()),
          i !== t.unknownCountryData && k() && I(i.countryCode),
          C(i.flagImgName),
          y(),
          m(i.countryId),
          r.attr(
            'maxlength',
            'UNKNOWN_COUNTRY' == i.countryId
              ? '16'
              : i.fieldMask.match(/9/g).length + 1
          ),
          g({ selectedCountry: i.countryId, value: a });
      }),
      r.on('focus', function (e) {
        r.hasClass('js-was-blured-with-plus') &&
          !r.val().length &&
          r.val('+').removeClass('js-was-blured-with-plus');
      }),
      r.on('blur', function (e) {
        p(r);
      }),
      p(r);
  },
  findCountryByPhoneCodeStrict: function (e) {
    FIELDS.input_text.availableGenerate('all'), (e = ('' + e).trim());
    var t = FIELDS.input_text.availableCountries;
    if (!e.length || '+' === e) return null;
    '+' != e[0] && (e = '+' + e);
    var n = t.filter(function (t, n) {
      return t.countryCode === e;
    });
    return FIELDS.input_text.availableGenerate(), n.length > 0 ? n[0] : null;
  },
  cleanUpPhoneWidgetDOM: function (e) {
    var t = e.id,
      n = $('#input_text-' + t);
    if (n.hasClass('shifted-field')) {
      var a = n.closest('div');
      n
        .removeClass('shifted-field')
        .removeAttr('maxlength')
        .off('input.phoneWidget'),
        a
          .removeClass('phone-widget-wrapper-global')
          .off('click.countriesPopover', '.js-inner-wrapper')
          .find('.js-inner-wrapper')
          .remove(),
        (e.selectedCountry = void 0);
    }
  },
  renderFileWidget: function (e) {
    var t,
      n = e.id,
      a = $('[data-id="' + n + '"]'),
      i = $('#input_text-' + n),
      o = [];
    if (
      ((FIELDS.input_text.Readers[n] = new FileReader()),
      !DAT.itsCreate && SERV.file_uploads.access / 1)
    )
      for (key in SERV.file_uploads.rules.file_type) o.push('.' + key);
    (o = o.join(',')),
      (t =
        '<div class="upload-div" id="upload-div-' +
        e.id +
        '"><input type="file" id="file-' +
        e.id +
        '" accept="' +
        o +
        '"><i class="material-icons">insert_drive_file</i></div>'),
      i.before(t);
    var l = $('#upload-div-' + n),
      r = $('#file-' + n);
    DAT.itsCreate
      ? l.find('i').addClass('cursor-default')
      : (l.find('i').click(function () {
          l.find('input').click();
        }),
        l.find('input').change(function (e) {
          var t = this.files[0];
          (function (e) {
            var t,
              n,
              a = [],
              i = SERV.file_uploads.rules.size;
            if (!DAT.itsCreate && SERV.file_uploads.access / 1)
              for (key in SERV.file_uploads.rules.file_type) a.push(key);
            if (!e) return !1;
            if ('object' == typeof e && e.name) {
              var o =
                ((t = e.name), (n = t.split('.'))[n.length - 1].toLowerCase());
              if (!($.inArray(o, a) >= 0)) return !1;
              if (e.size > i) return !1;
            }
            return !0;
          })(t)
            ? (FIELDS.input_text.Readers[n].readAsDataURL(t),
              i.val(t.name),
              FIELDS.beforeRecalc(n))
            : (FIELDS.beforeRecalc(n), i.val(''), r.val('')),
            runLogic && runLogic();
        })),
      Number(BILLING.ClientAttachment) ||
        a
          .addClass('fild-permission-false')
          .append(
            '<div class="permission-overlay"><div class="permission-msg">' +
              loc['Поле «Файл» доступно в платном тарифе'] +
              SERV.tariffBtn +
              '</div></div>'
          );
  },
  cleanUpFileWidgetDOM: function (e) {
    var t = e.id,
      n = $('[data-id="' + t + '"]');
    $('#upload-div-' + t).remove(),
      n
        .removeClass('fild-permission-false')
        .find('.permission-overlay')
        .remove();
  },
  Readers: {},
};
FIELDS.layer_actions = {
  title: loc['Подвал страницы'],
  tmpl: {
    default:
      '<div id="[type]-[id]" class="layer-footer" data-exit="0" data-logic="0"><div class="navigate"><button class="layer-prev" style="visibility: [hideBack]"><i class="material-icons">keyboard_arrow_left</i><span class="layer-footer-action" data-action="prev">[btn_prev]</span></button><div class="informer"></div><button class="layer-next"><span class="layer-footer-action" data-action="next">[btn_next]</span><i class="material-icons">keyboard_arrow_right</i></button><button class="layer-send"><span class="layer-footer-action" data-action="send">[btn_send]</span><svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14 8L1 1L3.21053 6.15789L6.50381 6.39313C7.34684 6.45335 8 7.15483 8 8C8 8.84517 7.34684 9.54665 6.50381 9.60687L3.21053 9.8421L1 15L14 8Z"/>\n<path d="M1 1L1.4741 0.119529C1.09972 -0.0820576 0.638812 -0.0248597 0.325067 0.262121C0.0113223 0.549101 -0.0866389 1.0031 0.080855 1.39392L1 1ZM14 8L14.4741 8.88047C14.798 8.70606 15 8.36788 15 8C15 7.63212 14.798 7.29394 14.4741 7.11953L14 8ZM3.21053 6.15789L2.29138 6.55181C2.43881 6.89581 2.76598 7.12869 3.13928 7.15535L3.21053 6.15789ZM6.50381 6.39313L6.57506 5.39567L6.57506 5.39567L6.50381 6.39313ZM6.50381 9.60687L6.43257 8.60941H6.43256L6.50381 9.60687ZM3.21053 9.8421L3.13928 8.84465C2.76598 8.87131 2.43881 9.10419 2.29138 9.44819L3.21053 9.8421ZM1 15L0.080855 14.6061C-0.0866389 14.9969 0.0113223 15.4509 0.325067 15.7379C0.638812 16.0249 1.09972 16.0821 1.4741 15.8805L1 15ZM0.5259 1.88047L13.5259 8.88047L14.4741 7.11953L1.4741 0.119529L0.5259 1.88047ZM4.12967 5.76398L1.91914 0.606081L0.080855 1.39392L2.29138 6.55181L4.12967 5.76398ZM3.13928 7.15535L6.43257 7.39059L6.57506 5.39567L3.28177 5.16044L3.13928 7.15535ZM6.43257 7.39059C6.75229 7.41343 7 7.67946 7 8H9C9 6.63019 7.94139 5.49327 6.57506 5.39567L6.43257 7.39059ZM7 8C7 8.32054 6.75229 8.58658 6.43257 8.60941L6.57506 10.6043C7.94139 10.5067 9 9.36981 9 8H7ZM6.43256 8.60941L3.13928 8.84465L3.28177 10.8396L6.57506 10.6043L6.43256 8.60941ZM1.91915 15.3939L4.12967 10.236L2.29138 9.44819L0.080855 14.6061L1.91915 15.3939ZM13.5259 7.11953L0.5259 14.1195L1.4741 15.8805L14.4741 8.88047L13.5259 7.11953Z"/>\n</svg></button></div></div>',
    minimal:
      '<div id="[type]-[id]" class="layer-footer" data-exit="0" data-logic="0"><div class="navigate"><button class="layer-prev" style="visibility: [hideBack]"><i class="material-icons">keyboard_arrow_left</i><span class="layer-footer-action" data-action="prev">[btn_prev]</span></button><div class="informer"></div><button class="layer-next"><span class="layer-footer-action" data-action="next">[btn_next]</span><i class="material-icons">keyboard_arrow_right</i></button><button class="layer-send"><span class="layer-footer-action" data-action="send">[btn_send]</span><svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14 8L1 1L3.21053 6.15789L6.50381 6.39313C7.34684 6.45335 8 7.15483 8 8C8 8.84517 7.34684 9.54665 6.50381 9.60687L3.21053 9.8421L1 15L14 8Z"/>\n<path d="M1 1L1.4741 0.119529C1.09972 -0.0820576 0.638812 -0.0248597 0.325067 0.262121C0.0113223 0.549101 -0.0866389 1.0031 0.080855 1.39392L1 1ZM14 8L14.4741 8.88047C14.798 8.70606 15 8.36788 15 8C15 7.63212 14.798 7.29394 14.4741 7.11953L14 8ZM3.21053 6.15789L2.29138 6.55181C2.43881 6.89581 2.76598 7.12869 3.13928 7.15535L3.21053 6.15789ZM6.50381 6.39313L6.57506 5.39567L6.57506 5.39567L6.50381 6.39313ZM6.50381 9.60687L6.43257 8.60941H6.43256L6.50381 9.60687ZM3.21053 9.8421L3.13928 8.84465C2.76598 8.87131 2.43881 9.10419 2.29138 9.44819L3.21053 9.8421ZM1 15L0.080855 14.6061C-0.0866389 14.9969 0.0113223 15.4509 0.325067 15.7379C0.638812 16.0249 1.09972 16.0821 1.4741 15.8805L1 15ZM0.5259 1.88047L13.5259 8.88047L14.4741 7.11953L1.4741 0.119529L0.5259 1.88047ZM4.12967 5.76398L1.91914 0.606081L0.080855 1.39392L2.29138 6.55181L4.12967 5.76398ZM3.13928 7.15535L6.43257 7.39059L6.57506 5.39567L3.28177 5.16044L3.13928 7.15535ZM6.43257 7.39059C6.75229 7.41343 7 7.67946 7 8H9C9 6.63019 7.94139 5.49327 6.57506 5.39567L6.43257 7.39059ZM7 8C7 8.32054 6.75229 8.58658 6.43257 8.60941L6.57506 10.6043C7.94139 10.5067 9 9.36981 9 8H7ZM6.43256 8.60941L3.13928 8.84465L3.28177 10.8396L6.57506 10.6043L6.43256 8.60941ZM1.91915 15.3939L4.12967 10.236L2.29138 9.44819L0.080855 14.6061L1.91915 15.3939ZM13.5259 7.11953L0.5259 14.1195L1.4741 15.8805L14.4741 8.88047L13.5259 7.11953Z"/>\n</svg></button></div></div>',
    material:
      '<div id="[type]-[id]" class="layer-footer" data-exit="0" data-logic="0"><div class="navigate"><button class="layer-prev" style="visibility: [hideBack]"><i class="material-icons">keyboard_arrow_left</i><span class="layer-footer-action" data-action="prev">[btn_prev]</span></button><div class="informer"></div><button class="layer-next"><span class="layer-footer-action" data-action="next">[btn_next]</span><i class="material-icons">keyboard_arrow_right</i></button><button class="layer-send"><span class="layer-footer-action" data-action="send">[btn_send]</span><svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14 8L1 1L3.21053 6.15789L6.50381 6.39313C7.34684 6.45335 8 7.15483 8 8C8 8.84517 7.34684 9.54665 6.50381 9.60687L3.21053 9.8421L1 15L14 8Z"/>\n<path d="M1 1L1.4741 0.119529C1.09972 -0.0820576 0.638812 -0.0248597 0.325067 0.262121C0.0113223 0.549101 -0.0866389 1.0031 0.080855 1.39392L1 1ZM14 8L14.4741 8.88047C14.798 8.70606 15 8.36788 15 8C15 7.63212 14.798 7.29394 14.4741 7.11953L14 8ZM3.21053 6.15789L2.29138 6.55181C2.43881 6.89581 2.76598 7.12869 3.13928 7.15535L3.21053 6.15789ZM6.50381 6.39313L6.57506 5.39567L6.57506 5.39567L6.50381 6.39313ZM6.50381 9.60687L6.43257 8.60941H6.43256L6.50381 9.60687ZM3.21053 9.8421L3.13928 8.84465C2.76598 8.87131 2.43881 9.10419 2.29138 9.44819L3.21053 9.8421ZM1 15L0.080855 14.6061C-0.0866389 14.9969 0.0113223 15.4509 0.325067 15.7379C0.638812 16.0249 1.09972 16.0821 1.4741 15.8805L1 15ZM0.5259 1.88047L13.5259 8.88047L14.4741 7.11953L1.4741 0.119529L0.5259 1.88047ZM4.12967 5.76398L1.91914 0.606081L0.080855 1.39392L2.29138 6.55181L4.12967 5.76398ZM3.13928 7.15535L6.43257 7.39059L6.57506 5.39567L3.28177 5.16044L3.13928 7.15535ZM6.43257 7.39059C6.75229 7.41343 7 7.67946 7 8H9C9 6.63019 7.94139 5.49327 6.57506 5.39567L6.43257 7.39059ZM7 8C7 8.32054 6.75229 8.58658 6.43257 8.60941L6.57506 10.6043C7.94139 10.5067 9 9.36981 9 8H7ZM6.43256 8.60941L3.13928 8.84465L3.28177 10.8396L6.57506 10.6043L6.43256 8.60941ZM1.91915 15.3939L4.12967 10.236L2.29138 9.44819L0.080855 14.6061L1.91915 15.3939ZM13.5259 7.11953L0.5259 14.1195L1.4741 15.8805L14.4741 8.88047L13.5259 7.11953Z"/>\n</svg></button></div></div>',
    bootstrap:
      '<div id="[type]-[id]" class="layer-footer" data-exit="0" data-logic="0"><div class="navigate"><button class="layer-prev" style="visibility: [hideBack]"><i class="material-icons">keyboard_arrow_left</i><span class="layer-footer-action" data-action="prev">[btn_prev]</span></button><div class="informer"></div><button class="layer-next"><span class="layer-footer-action" data-action="next">[btn_next]</span><i class="material-icons">keyboard_arrow_right</i></button><button class="layer-send"><span class="layer-footer-action" data-action="send">[btn_send]</span><svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14 8L1 1L3.21053 6.15789L6.50381 6.39313C7.34684 6.45335 8 7.15483 8 8C8 8.84517 7.34684 9.54665 6.50381 9.60687L3.21053 9.8421L1 15L14 8Z"/>\n<path d="M1 1L1.4741 0.119529C1.09972 -0.0820576 0.638812 -0.0248597 0.325067 0.262121C0.0113223 0.549101 -0.0866389 1.0031 0.080855 1.39392L1 1ZM14 8L14.4741 8.88047C14.798 8.70606 15 8.36788 15 8C15 7.63212 14.798 7.29394 14.4741 7.11953L14 8ZM3.21053 6.15789L2.29138 6.55181C2.43881 6.89581 2.76598 7.12869 3.13928 7.15535L3.21053 6.15789ZM6.50381 6.39313L6.57506 5.39567L6.57506 5.39567L6.50381 6.39313ZM6.50381 9.60687L6.43257 8.60941H6.43256L6.50381 9.60687ZM3.21053 9.8421L3.13928 8.84465C2.76598 8.87131 2.43881 9.10419 2.29138 9.44819L3.21053 9.8421ZM1 15L0.080855 14.6061C-0.0866389 14.9969 0.0113223 15.4509 0.325067 15.7379C0.638812 16.0249 1.09972 16.0821 1.4741 15.8805L1 15ZM0.5259 1.88047L13.5259 8.88047L14.4741 7.11953L1.4741 0.119529L0.5259 1.88047ZM4.12967 5.76398L1.91914 0.606081L0.080855 1.39392L2.29138 6.55181L4.12967 5.76398ZM3.13928 7.15535L6.43257 7.39059L6.57506 5.39567L3.28177 5.16044L3.13928 7.15535ZM6.43257 7.39059C6.75229 7.41343 7 7.67946 7 8H9C9 6.63019 7.94139 5.49327 6.57506 5.39567L6.43257 7.39059ZM7 8C7 8.32054 6.75229 8.58658 6.43257 8.60941L6.57506 10.6043C7.94139 10.5067 9 9.36981 9 8H7ZM6.43256 8.60941L3.13928 8.84465L3.28177 10.8396L6.57506 10.6043L6.43256 8.60941ZM1.91915 15.3939L4.12967 10.236L2.29138 9.44819L0.080855 14.6061L1.91915 15.3939ZM13.5259 7.11953L0.5259 14.1195L1.4741 15.8805L14.4741 8.88047L13.5259 7.11953Z"/>\n</svg></button></div></div>',
  },
  signe: {
    id: null,
    L: null,
    C: null,
    hide: 0,
    hideBack: 'visible',
    type: 'layer_actions',
    blur: 'layer_actions',
    paddingLR: 24,
    paddingTop: 5,
    paddingBottom: 5,
    logicX: 1,
    fontSize: 14,
    borderRadius: 50,
    btn_send: loc['Отправить'],
    btn_next: loc['Далее'],
    btn_prev: loc['Назад'],
    textColor: '#5d7bff',
    textColorHover: '#ffffff',
    borderColor: '#5d7bff',
    backgroundColor: '#ffffff',
    backgroundColorHover: '#5d7bff',
    sendAdmin: !1,
    adminEmail: null,
    adminEmailAll: [],
    adminEmailSubj: '',
    adminEmailTemplate: '',
    adminVKTemplate: '',
    adminSmsTemplate: (
      '<Project name>\n[result]: <Result ' +
      HIGHLIGHTER.key +
      ' 1>'
    ).Signe({ name: loc['Название калькулятора'], result: loc['Результат'] }),
    adminTel: '',
    adminFile: -1,
    sendUser: !1,
    userEmail: 0,
    userEmailSubj: '',
    userEmailTemplate: '',
    userSmsTemplate: (
      '<Project name>\n[result]: <Result ' +
      HIGHLIGHTER.key +
      ' 1>'
    ).Signe({ name: loc['Название калькулятора'], result: loc['Результат'] }),
    userTel: 0,
    replyto: '',
    accept: !1,
    acceptStandart: !0,
    acceptHtml: '',
    captchaType: 'default',
    recaptchaTheme: 'light',
    antispam: 'Time',
    antispamTime: 3,
    antispamLoad: loc['Вы уже отправили форму'],
    antispamSession: loc['Отправить форму можно один раз'],
    linkActive: !1,
    link: '',
    payment: 'none',
    PayPalCurr: 'ru' == SERV.this_lang ? 'RUB' : 'USD',
    PayPalMail: 'undefined' == typeof SERV ? '' : /.*/.exec(SERV.userEmail)[0],
    PayPalSubject: loc['Оплата после расчета'],
    StripeCurr: 'usd',
    StripePublic: '',
    StripeSecret: '',
    StripeSuccessUrl: 'https://ucalc.pro/dev/pay/success',
    StripeCancelUrl: 'https://ucalc.pro/dev/pay/cancel',
    StripeReceiptItem: '',
    yaCassaShopId: '',
    yaCassaScId: '',
    yaCassaReceiptItem: '',
    yaCassaReceiptUser: 0,
    yaCassaTaxSystem: 1,
    yaCassaTax: 1,
    yaCassaSubject: 'service',
    yaCassaMode: 'full_prepayment',
    yaMoneyId: '',
    yaMoneySubject: loc['Оплата после расчета'],
    fiscalisation: !1,
    amount: 0,
    handledViaThemeStyles: !0,
    amo: {
      check: !1,
      deal: {
        active: [],
        title: {},
        summ: {},
        bind: {},
        subtype: {},
        status: {},
      },
      list: {
        active: [],
        title: {},
        compId: {},
        summ: {},
        bind: {},
        subtype: {},
        enum: {},
      },
      task: { active: [], title: {}, type: {}, user: {} },
      defaultType: 0,
    },
    bitrix: {
      check: !1,
      lead: {
        check: !1,
        status: 'NEW',
        title: '',
        titleType: 'Mask',
        summ: 0,
        bind: {},
        utm: !1,
      },
      contact: { check: !1, titleType: 'Mask', bind: {}, utm: !1 },
      company: {
        check: !1,
        status: 'CUSTOMER',
        title: '',
        titleType: 'Mask',
        bind: {},
        utm: !1,
      },
    },
    targets: {
      google: { targetId: '', targetName: '', targetUrl: '', isActive: !1 },
      yandex: { targetId: '', targetName: '', targetUrl: '', isActive: !1 },
    },
    doneText: '',
    targetStep: -1,
    thanks: !0,
    thanksTitle: loc['Спасибо!'],
    thanksDesc: loc['Ваша информация успешно отправлена!'],
  },
  signeIsGlobal: !0,
  signeGlobalExclude: [
    'id',
    'L',
    'C',
    'hide',
    'hideBack',
    'type',
    'blur',
    'paddingLR',
    'paddingTop',
    'paddingBottom',
    'fontSize',
    'borderRadius',
    'btn_send',
    'btn_next',
    'btn_prev',
    'textColor',
    'textColorHover',
    'borderColor',
    'backgroundColor',
    'backgroundColorHover',
  ],
  initial: function (t) {
    if (null != t.id) t = SAVER.getFieldBy('id', t.id);
    FIELDS.button.updateParams(t);
    var e = $('#' + t.type + '-' + t.id),
      a = SWAP.layers.element.attr('data-active-eq') / 1,
      n = t.id,
      i = function (t, e) {
        t.addClass('btnError'),
          t.attr('data-ub-title', e),
          t.attr('data-ub-pos', 'bottom'),
          t.attr('data-ub-class', 'ub-tooltip-red'),
          setTimeout(function () {
            t.trigger('mouseenter');
          });
      },
      l =
        '<div class="accept-text input-field-text" style="display:' +
        (t.accept ? 'block' : 'none') +
        '"><p>' +
        loc[
          "Cоглашаюсь на <a href='javascript://' class='btn-accept'>обработку персональных данных</a>"
        ] +
        '</p></div>';
    if (
      (e.append(l),
      e.find('.layer-prev').on('click', function () {
        DAT.itsCreate || SWAP.layers.slide(-1);
      }),
      e.find('.layer-next').on('click', function () {
        if (!DAT.itsCreate) {
          var t = FIELDS.beforeRecalc(),
            e = $(this);
          !t.status_ok &&
            t.count &&
            i(
              e,
              loc['[n] обязательных поля не заполнены'].Signe({ n: t.count })
            ),
            t.status_ok && SWAP.layers.slide(1);
        }
      }),
      e.find('.layer-send').on('click', function (a) {
        if (!DAT.itsCreate) {
          var n = FIELDS.beforeRecalc(),
            l = $(this);
          n.status_ok
            ? (l.removeClass('btnError'),
              l.removeAttr('data-ub-title'),
              l.removeAttr('data-ub-pos'),
              l.removeAttr('data-ub-class'),
              initBtnClick(a, t, e))
            : i(
                l,
                loc['[n] обязательных поля не заполнены'].Signe({ n: n.count })
              );
        }
      }),
      e
        .find('.informer')
        .text(
          loc['[x] из [y]'].Signe({ x: a + 1, y: SAVER.json.layers.length })
        ),
      FIELDS.button.updRecaptcha(t),
      FIELDS.button.checkDisabled(t.id),
      FIELDS.button.initAcceptBtn(t, e.find('.btn-accept')),
      RANDER.setStyleFromField(t),
      (function () {
        let a = t.L / 1,
          n = SAVER.json.lines.findIndex(function (t) {
            return t.id / 1 === a;
          }),
          i = SAVER.json.lines[n].layer / 1;
        SAVER.json.routs.forEach(function (t) {
          t.layer / 1 === i && 'send' === t.value && e.attr('data-exit', 1);
        });
      })(),
      DAT.itsCreate)
    ) {
      var o = e.find('button'),
        s = e.find('.layer-footer-action');
      s.attr('contenteditable', !0),
        s.attr('spellcheck', !1),
        s
          .on('paste.contenteditable', function (t) {
            var e = $(this).attr('data-action'),
              a = SAVER.getFieldBy('id', n);
            t.preventDefault();
            var i = t.originalEvent.clipboardData.getData('text/plain');
            document.execCommand('insertHTML', !1, i),
              (a['btn_' + e] = changed);
          })
          .on('input.contenteditable', function (t) {
            var e = $(this),
              a = e.attr('data-action'),
              i = SAVER.getFieldBy('id', n),
              l = e.html(),
              o = l;
            o.indexOf('<br>') && (o = o.replace(/<br>/, '')),
              o.length > 60 && (o = o.substr(0, 60)),
              o !== l &&
                (e.html(o),
                (function (t) {
                  if (
                    (t.focus(),
                    void 0 !== window.getSelection &&
                      void 0 !== document.createRange)
                  ) {
                    var e = document.createRange();
                    e.selectNodeContents(t), e.collapse(!1);
                    var a = window.getSelection();
                    a.removeAllRanges(), a.addRange(e);
                  } else if (void 0 !== document.body.createTextRange) {
                    var n = document.body.createTextRange();
                    n.moveToElementText(t), n.collapse(!1), n.select();
                  }
                })(this)),
              (i['btn_' + a] = o);
          })
          .on('blur.contenteditable', function () {
            SAVER.history.newStep();
          }),
        o.on('click.contenteditable', function (t) {
          var e = $(t.target);
          e.is('button') && e.find('span').focus();
        });
    }
  },
};
FIELDS.text = {
  title: loc['Текст'],
  tmpl: {
    default:
      '<div class="field-body__item">                    <div class="input-field input-field-text" id="[type]-[id]" data-canedit="true" data-source="other" data-change="tooltip-[type]-[id]">[tooltip]</div>                </div>',
    minimal:
      '<div class="field-body__item">                    <div class="input-field input-field-text" id="[type]-[id]" data-canedit="true" data-source="other" data-change="tooltip-[type]-[id]">[tooltip]</div>                </div>',
    material:
      '<div class="field-body__item">                    <div class="input-field input-field-text" id="[type]-[id]" data-canedit="true" data-source="other" data-change="tooltip-[type]-[id]">[tooltip]</div>                </div>',
    bootstrap:
      '<div class="field-body__item">                    <div class="input-field input-field-text" id="[type]-[id]" data-canedit="true" data-source="other" data-change="tooltip-[type]-[id]">[tooltip]</div>                </div>',
  },
  signe: {
    id: null,
    L: null,
    C: null,
    type: 'text',
    blur: 'text',
    group: DAT.itsCreate
      ? ''
      : '<p><span class="size-18">' + loc['Заголовок'] + '</span></p>',
    group_text: DAT.itsCreate ? '' : loc['Заголовок'],
    tooltip:
      loc[
        '<p>Вы можете выбрать <em>стиль текста</em>, его <strong>начертание</strong> и <span style="color: rgb(2, 144, 255);" data-mce-style="color: #0290ff;">цвет</span>, просто выделив его</p>'
      ],
    desc: DAT.itsCreate ? '' : loc['Небольшое описание'],
    desc_text: DAT.itsCreate ? '' : loc['Небольшое описание'],
    required: !0,
    titleSwitcher: 'none',
    descSwitcher: 'none',
    paddingLR: 24,
    paddingTop: 12,
    paddingBottom: 18,
    logicX: 1,
    break_all: 0,
    v: 1,
  },
  initial: function (t) {
    var i = t.id,
      e = $('#' + t.type + '-' + i);
    'Safari' !== DAT.browser() &&
      e.closest('[data-id]').addClass('userselectnone');
  },
};
FIELDS.result = {
  title: loc['Формула'],
  tmpl: {
    default:
      '<div id="total-[idRes]" class="total total-[idRes] total-[idRes]-[id]" data-field-id="[id]" data-formula="[idRes]"><div class="half-width" style="display: [rnameSwitcher]" data-change="rnameSwitcher-[type]-[id]"><div class="full-width-el opt-on-fly total-title pull-left" data-canedit="true" data-change="result_name-[idRes]">[name]</div></div><div class="pull-right js-summ-wrapper half-width summ-wrapper"><div class="js-suffix-field" data-canedit="true" data-change="suf-[idRes]">[suf]</div><div class="js-result-sum-value" data-canedit="true" data-its-sum="true" data-change="sum-[idRes]">[sum_start]res([idRes])[sum_end]</div><div class="js-prefix-field" data-canedit="true" data-change="pref-[idRes]">[pref]</div></div></div>',
    minimal:
      '<div id="total-[idRes]" class="total total-[idRes] total-[idRes]-[id]" data-field-id="[id]" data-formula="[idRes]"><div class="half-width" style="display: [rnameSwitcher]" data-change="rnameSwitcher-[type]-[id]"><div class="full-width-el opt-on-fly total-title pull-left" data-canedit="true" data-change="result_name-[idRes]">[name]</div></div><div class="pull-right js-summ-wrapper half-width summ-wrapper"><div class="js-suffix-field" data-canedit="true" data-change="suf-[idRes]">[suf]</div><div class="js-result-sum-value" data-canedit="true" data-its-sum="true" data-change="sum-[idRes]">[sum_start]res([idRes])[sum_end]</div><div class="js-prefix-field" data-canedit="true" data-change="pref-[idRes]">[pref]</div></div></div>',
    material:
      '<div id="total-[idRes]" class="total total-[idRes] total-[idRes]-[id]" data-field-id="[id]" data-formula="[idRes]"><div class="half-width" style="display: [rnameSwitcher]" data-change="rnameSwitcher-[type]-[id]"><div class="full-width-el opt-on-fly total-title pull-left" data-canedit="true" data-change="result_name-[idRes]">[name]</div></div><div class="pull-right js-summ-wrapper half-width summ-wrapper"><div class="js-suffix-field" data-canedit="true" data-change="suf-[idRes]">[suf]</div><div class="js-result-sum-value" data-canedit="true" data-its-sum="true" data-change="sum-[idRes]">[sum_start]res([idRes])[sum_end]</div><div class="js-prefix-field" data-canedit="true" data-change="pref-[idRes]">[pref]</div></div></div>',
    bootstrap:
      '<div id="total-[idRes]" class="total total-[idRes] total-[idRes]-[id]" data-field-id="[id]" data-formula="[idRes]"><div class="half-width" style="display: [rnameSwitcher]" data-change="rnameSwitcher-[type]-[id]"><div class="full-width-el opt-on-fly total-title pull-left" data-canedit="true" data-change="result_name-[idRes]">[name]</div></div><div class="pull-right js-summ-wrapper half-width summ-wrapper"><div class="js-suffix-field" data-canedit="true" data-change="suf-[idRes]">[suf]</div><div class="js-result-sum-value" data-canedit="true" data-its-sum="true" data-change="sum-[idRes]">[sum_start]res([idRes])[sum_end]</div><div class="js-prefix-field" data-canedit="true" data-change="pref-[idRes]">[pref]</div></div></div>',
  },
  signe: {
    id: null,
    L: null,
    C: null,
    idRes: null,
    formula: '',
    round: 2,
    roundType: 'round',
    decimal: 'hideNull',
    decimalPos: 'middle',
    hide: 0,
    type: 'result',
    blur: 'result',
    splitterRaz: ' ',
    splitterDec: '.',
    paddingLR: 24,
    paddingTop: 5,
    paddingBottom: 5,
    rnameSwitcher: 'block',
    name: '<p>' + loc['Формула'] + '</p>',
    name_text: loc['Формула'],
    pref: '<p>' + loc['&nbsp;руб.'] + '</p>',
    pref_text: ' ' + loc['руб.'],
    suf: '',
    suf_text: '',
    sum_start: '<p>',
    sum_end: '</p>',
  },
  initial: function (a) {
    var d = 0;
    SAVER.json.results.forEach(function (a) {
      d < a.id && ((d = a.id), a.formula);
    }),
      (null !== a.idRes && 'null' !== a.idRes) || (a.idRes = d);
  },
};
FIELDS.slider = {
  MAX_SLIDER_VALUE: 1e9,
  title: loc['Ползунок'],
  tmpl: {
    default:
      '<div class="field-body__item" data-important="[importantSwitcher]" data-changed="no">                        <div id="[type]-[id]" class="slider-input"></div>                    </div>',
    minimal:
      '<div class="field-body__item" data-important="[importantSwitcher]" data-changed="no">                        <div id="[type]-[id]" class="slider-input"></div>                    </div>',
    material:
      '<div class="field-body__item" data-important="[importantSwitcher]" data-changed="no">                        <div id="[type]-[id]" class="slider-input"></div>                    </div>',
    bootstrap:
      '<div class="field-body__item" data-important="[importantSwitcher]" data-changed="no">                        <div id="[type]-[id]" class="slider-input"></div>                    </div>',
  },
  signe: {
    id: null,
    id_var: null,
    litera: null,
    L: null,
    C: null,
    type: 'slider',
    blur: 'slider',
    break_all: 0,
    group: DAT.itsCreate
      ? ''
      : '<p><span class="size-18">' + loc['Ползунок'] + '</span></p>',
    group_text: DAT.itsCreate ? '' : loc['Ползунок'],
    desc: DAT.itsCreate ? '' : loc['Небольшое описание'],
    desc_text: DAT.itsCreate ? '' : loc['Небольшое описание'],
    step: 1,
    grid_show: 1,
    scale: 'default',
    rangeSwitcher: 'round',
    titleSwitcher: 'block',
    descSwitcher: 'none',
    importantSwitcher: '',
    paddingLR: 24,
    paddingTop: 12,
    paddingBottom: 18,
    min: 0,
    max: 1e3,
    value: 0,
  },
  initial: function (t) {
    var e = t.id,
      i = $('#' + t.type + '-' + e),
      a = $('body');
    (points = Number(t.points)),
      (min = Number(t.min)),
      (max = Number(t.max)),
      (step = Number(t.step)),
      (value = Number(t.value)),
      (t = null == e ? t : SAVER.getFieldBy('id', e)),
      (tooltip_need_hide = 0),
      RECALC.varUpdate(DAT.varName(t.id_var), t.value);
    var n,
      l,
      r,
      d,
      o = new CallbacksWait(100),
      s = function () {
        return String(t.step).indexOf('.') > 0
          ? String(t.step).length - String(t.step).indexOf('.') - 1
          : 0;
      },
      u = function (t) {
        var e = s(),
          i = Math.pow(10, e);
        if (!e) return t;
        t = Math.round(t * i) / i;
        var a = String(t);
        -1 == a.indexOf('.') && (a += '.');
        var n = e - (a.indexOf('.') > 0 ? a.length - a.indexOf('.') - 1 : 0);
        return n < 0 ? a : a.replace(/(\.[0-9]*)$/g, '$' + Math.pow(10, n));
      },
      p = function (e, a) {
        var n = Math.pow(10, s());
        a = Math.round(a * n) / n;
        var l = i.find('.rangeselector'),
          r = l.closest('[data-id]'),
          d = $('#' + l.attr('data-tool-id')),
          p = m(d, l, a);
        d.text(u(a)).css('left', p),
          i.find('.slider-line__num').each(function () {
            a >= +$(this).text()
              ? $(this).addClass('slider-line__num--active')
              : $(this).removeClass('slider-line__num--active');
          }),
          a != t.value &&
            (RECALC.varUpdate(t.litera, a),
            o.add(function () {}),
            o.add(RECALC.go),
            l.attr('data-ub-title', u(a)),
            (t.value = a)),
          r.off('mouseleave.tooltip mouseenter.tooltip'),
          l.trigger('touchstart.tooltip');
      },
      m = function (t, e, i) {
        var n = (max - min) / (i - min),
          l =
            a.width() > 500
              ? 'top'
              : n < 1.5
              ? 'top-left'
              : n < 3
              ? 'top'
              : 'top-right',
          r =
            'top-right' == l
              ? e.offset().left + e.outerWidth() / 2 - (t.outerWidth() / 10) * 3
              : 'top' == l
              ? e.offset().left + e.outerWidth() / 2 - t.outerWidth() / 2
              : e.offset().left +
                e.outerWidth() / 2 -
                (t.outerWidth() / 10) * 7;
        return (
          t
            .removeClass(
              'ub-tooltip-top-left ub-tooltip-top ub-tooltip-top-right'
            )
            .addClass('ub-tooltip-' + l),
          e.attr('data-ub-pos', l),
          r
        );
      };
    this.sliderVariable[t.id] = new RangeSlider($('#[type]-[id]'.Signe(t)), {
      value: value,
      min: min,
      max: max,
      step: step,
      onDown: function (t, e) {
        'undefined' != typeof XD && XD.postMessageEase({ sliderIsMoved: 1 }),
          p(t, e);
      },
      onMove: p,
      onUp: function (e, a) {
        setTimeout(function () {
          f.removeAttr('data-tool-freez'),
            $(e.target).is('.rangeselector') || f.trigger('mouseleave');
        }, 50),
          i.closest('[data-changed]').attr('data-changed', 'yes'),
          FIELDS.checkAgain(t, i),
          RECALC.enableStatus(),
          setTimeout(function () {
            window.USE_SELECTOR = !1;
          }, 10),
          'undefined' != typeof XD && XD.postMessageEase({ sliderIsStop: 1 });
      },
    });
    var c = String(max).length <= 2 ? 20 : 10,
      f = i.find('.rangeselector');
    if (
      (i.append('<div class="slider-line"></div>'), 'round' == t.rangeSwitcher)
    ) {
      var g = String(Math.round((max - min) / 2)).length,
        h = Math.pow(10, g - 1);
      (c = (max - min) / h) < 5 && h > 1 && ((c *= 2), (h /= 2)),
        (c > 15 || g > 4) && ((c /= 2), (h *= 2)),
        (c = Math.floor(c));
      var v = min + h - (min % h) - (min < 0 ? h : 0),
        _ = max - (max % h),
        S = v - min;
      min % h == 0 && ((v = min), (S = 0)), _ == v && (_ = max);
    } else {
      (v = min), (_ = max), (S = 0);
      max >= 1e5 && (c /= 2);
    }
    c > 10 && c > max && (c = max);
    for (
      var x = c;
      x >= 0 &&
      -1 !=
        (r = String(((100 * _ - 100 * v) / x + 100 * v) / 100)).indexOf('.') &&
      !('inline' == t.rangeSwitcher && r.search(/(\.25|\.5|\.75)$/) > 0);
      x--
    );
    0 === x && (x = c);
    h = (_ - v) / x;
    for (
      'none' == t.rangeSwitcher && (x = 1),
        v == min && String(v).length > 6 && ((x -= 1), (S = (v += h) - min)),
        _ == max && String(_).length > 6 && ((x -= 1), (_ -= h)),
        h < step &&
          1 != x &&
          ((x = Math.floor((_ - v) / step)), (_ = v + step * x)),
        'del' == t.rangeSwitcher && (x = -1),
        l = 0,
        n = x || 1;
      l <= x;
      l++
    )
      (d = (((100 * _ - 100 * v) / n) * l + 100 * v) / 100),
        i
          .find('.slider-line')
          .append(
            '<span class="slider-line__num" style="left:[left]%;">[text]</span>'.Signe(
              {
                id: e,
                type: t.type,
                left:
                  (((100 / (max - min)) * (_ - v)) / n) * l +
                  (100 / (max - min)) * S,
                display: t.rangeSwitcher,
                text:
                  d.toString().indexOf('.') >= 0
                    ? d.toString().match(/.+\.[0-9]{0,3}/g)[0]
                    : d,
              }
            )
          );
    x > 7 ? i.addClass('full-range') : i.removeClass('full-range'),
      i.find('.slider-line__num:first').addClass('slider-line__num-min'),
      i.find('.slider-line__num:last').addClass('slider-line__num-max'),
      i.find('.slider-line__num').each(function () {
        value >= +$(this).text()
          ? $(this).addClass('slider-line__num--active')
          : $(this).removeClass('slider-line__num--active');
      }),
      f.attr('data-ub-title', u(value)),
      f.attr('data-ub-pos', 'top'),
      i.off('touchstart.tooltip mousedown.tooltip'),
      i.on('touchstart.tooltip mousedown.tooltip', function () {
        $('#' + f.attr('data-tool-id')).length ||
          f.trigger('mouseenter.tooltip'),
          f.attr('data-tool-freez', '1');
      }),
      m($('null'), f, value);
  },
  sliderVariable: {},
  stopMove: function () {
    var t = FIELDS.slider.sliderVariable;
    for (id in t) t[id].$el.trigger('mouseup');
  },
};
FIELDS.selector = {
  title: loc['Список'],
  tmpl: {
    default:
      '<div class="field-body__item" data-important="[importantSwitcher]">                        <select id="[type]-[id]" data-options="0" data-option="[selectedDefault]" data-name="[group_text]"></select>                    </div>',
    minimal:
      '<div class="field-body__item" data-important="[importantSwitcher]">                        <select id="[type]-[id]" data-options="0" data-option="[selectedDefault]" data-name="[group_text]"></select>                    </div>',
    material:
      '<div class="field-body__item" data-important="[importantSwitcher]">                        <select id="[type]-[id]" data-options="0" data-option="[selectedDefault]" data-name="[group_text]"></select>                    </div>',
    bootstrap:
      '<div class="field-body__item" data-important="[importantSwitcher]">                        <select id="[type]-[id]" data-options="0" data-option="[selectedDefault]" data-name="[group_text]"></select>                    </div>',
  },
  signe: {
    id: null,
    id_var: null,
    litera: null,
    L: null,
    C: null,
    type: 'selector',
    blur: 'select',
    break_all: 0,
    group: DAT.itsCreate
      ? ''
      : '<p><span class="size-18">' + loc['Выпадающий список'] + '</span></p>',
    group_text: DAT.itsCreate ? '' : loc['Выпадающий список'],
    desc: DAT.itsCreate ? '' : loc['Небольшое описание'],
    desc_text: DAT.itsCreate ? '' : loc['Небольшое описание'],
    tooltipSelector: loc['Выберите пункт...'],
    font_size: 20,
    selectedDefault: 0,
    titleSwitcher: 'block',
    descSwitcher: 'none',
    importantSwitcher: '',
    randomSwitcher: 'no',
    paddingLR: 24,
    paddingTop: 12,
    paddingBottom: 18,
    options: [
      { title: '', value: 100, opt_id: DAT.getRandomInt(0, 9999) },
      { title: '', value: 200, opt_id: DAT.getRandomInt(0, 9999) },
      { title: '', value: 300, opt_id: DAT.getRandomInt(0, 9999) },
    ],
  },
  initial: function (t) {
    t.id, t.options;
    var e,
      i,
      l,
      o = $('#' + t.type + '-' + t.id),
      a = [],
      s = o.closest('.field').siblings('.block');
    (dop_tmpl = {
      option: {
        design:
          '<div class="option-item [isChecked]" data-option="[i]"><input type="text" value="[title]" placeholder="' +
          loc['Введите текст...'] +
          '"><i class="option-drag"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="10" r="1" fill="#73818c"/><circle cx="13" cy="16" r="1" fill="#73818c"/><circle cx="13" cy="22" r="1" fill="#73818c"/><circle cx="19" cy="10" r="1" fill="#73818c"/><circle cx="19" cy="16" r="1" fill="#73818c"/><circle cx="19" cy="22" r="1" fill="#73818c"/></svg></i><i class="option-del icons-settings"></i></div>',
        preview:
          '<option value="[value]" data-opt_id="[opt_id]" data-option="[i]" data-desc="[description]">[title]</option>',
      },
    }),
      (t.options = FIELDS.sortRandom(t)),
      DAT.itsCreate ||
        t.options.unshift({
          title: t.tooltipSelector || loc['Выберите пункт...'],
          value: 0,
          opt_id: 1,
        }),
      (t.selectedDefault > t.options.length || t.selectedDefault < 0) &&
        (t.selectedDefault = 0),
      s
        .find('.item-title__text .input-field-text')
        .after(
          '<span class="select-count" data-count="[type]-[id]"></span>'.Signe(t)
        ),
      setTimeout(function () {
        $('.select-count[data-count="[type]-[id]"]'.Signe(t)).css({
          visibility: 'visible',
          opacity: 1,
        });
      }, 300),
      t.selectedDefault || (t.selectedDefault = 0),
      0 === $('.preview').length
        ? (o.replaceWith(
            (
              '<div class="field-selector-group" id="[type]-[id]" data-name="[group_text]">                                <div class="table">                                    <div>                                        <input type="text" data-source="other" value="[title_default]" class="selector-input" data-option="[i]" onchange="FIELDS.[type].inputChange(this,[i])" readonly>                                        <span class="options-arrow"></span>                                    </div>                                    <div class="options-all" data-options="0"><div class="list"></div><a href="javascript://" class="add-option">' +
              loc['+ Добавить'] +
              '</a></div>                                </div>                            </div>'
            )
              .Signe(t)
              .SigneHard({
                title_default:
                  (t.options[t.selectedDefault - 1] &&
                    t.options[t.selectedDefault - 1].title) ||
                  t.tooltipSelector,
                i: t.selectedDefault,
              })
          ),
          (o = $('#' + t.type + '-' + t.id).find('.options-all .list')),
          (i = $('#' + t.type + '-' + t.id).find('input')))
        : (i = o),
      $('.options-arrow').on('click.options', function () {
        var t = $(this).closest('[data-id]'),
          e = t.find('.options-all');
        e.is(':visible') ||
          (t.addClass('selector-open').off('mouseenter.fields'),
          e.slideDown(300),
          setTimeout(function () {
            $('body').on('click.options', function (i) {
              0 == $(i.target).closest('.options-all').length &&
                (e.slideUp(300, function () {
                  t.removeClass('selector-open');
                }),
                $('body').off('click.options'));
            });
          }, 10));
      }),
      t.options.forEach(function (i, l) {
        (e = l + 1),
          a.push(
            dop_tmpl.option[0 === $('.preview').length ? 'design' : 'preview']
              .Signe({
                i: l,
                isChecked: e === t.selectedDefault / 1 ? 'ischecked-true' : '',
              })
              .Signe(i)
          ),
          o.attr('data-options', 100 * e),
          s.find('.select-count').text(e);
      }),
      (l = a.join('')),
      o.append(l),
      o.find('option').eq(t.selectedDefault).prop('selected', !0),
      t.selectedDefault && o.addClass('selected'),
      null !== t.id &&
        (i.on('change.initial', function () {
          if (i.is('select'))
            var e = $(this).find('option:selected').attr('data-option');
          else e = $(this).attr('data-option');
          var l = e > 0;
          FIELDS.checkAgain(t, o),
            RECALC.varUpdate(t.litera, t.options[e].value),
            l ? i.addClass('selected') : i.removeClass('selected');
        }),
        DAT.itsCreate
          ? RECALC.varUpdate(t.litera, 0)
          : RECALC.varUpdate(t.litera, t.options[t.selectedDefault].value));
  },
};
FIELDS.button = {
  title: loc['Кнопка'],
  tmpl: {
    default: '<div id="[type]-[id]"></div>',
    minimal: '<div id="[type]-[id]"></div>',
    material: '<div id="[type]-[id]"></div>',
    bootstrap: '<div id="[type]-[id]"></div>',
  },
  signe: {
    id: null,
    L: null,
    C: null,
    type: 'button',
    blur: 'button',
    title: loc['Кнопка'],
    align: 'center',
    width: 'auto',
    fontSize: 15,
    borderRadius: 50,
    paddingTop: 12,
    paddingBottom: 18,
    logicX: 1,
    textColor: '#5d7bff',
    textColorHover: '#ffffff',
    borderColor: '#5d7bff',
    backgroundColor: '#ffffff',
    backgroundColorHover: '#5d7bff',
    sendAdmin: !1,
    adminEmail: null,
    adminEmailAll: [],
    adminEmailSubj: '',
    adminEmailTemplate: '',
    adminVKTemplate: '',
    adminSmsTemplate: (
      '<Project name>\n[result]: <Result ' +
      HIGHLIGHTER.key +
      ' 1>'
    ).Signe({ name: loc['Название калькулятора'], result: loc['Формула'] }),
    adminTel: '',
    adminFile: -1,
    sendUser: !1,
    userEmail: 0,
    userEmailSubj: '',
    userEmailTemplate: '',
    userSmsTemplate: (
      '<Project name>\n[result]: <Result ' +
      HIGHLIGHTER.key +
      ' 1>'
    ).Signe({ name: loc['Название калькулятора'], result: loc['Формула'] }),
    userTel: 0,
    replyto: '',
    accept: !1,
    acceptStandart: !0,
    acceptHtml: '',
    captchaType: 'default',
    recaptchaTheme: 'light',
    antispam: 'Time',
    antispamTime: 3,
    antispamLoad: loc['Вы уже отправили форму'],
    antispamSession: loc['Отправить форму можно один раз'],
    linkActive: !1,
    link: '',
    payment: 'none',
    PayPalCurr: 'ru' == SERV.this_lang ? 'RUB' : 'USD',
    PayPalMail: 'undefined' == typeof SERV ? '' : /.*/.exec(SERV.userEmail)[0],
    PayPalSubject: loc['Оплата после расчета'],
    StripeCurr: 'usd',
    StripePublic: '',
    StripeSecret: '',
    StripeSuccessUrl: 'https://ucalc.pro/dev/pay/success',
    StripeCancelUrl: 'https://ucalc.pro/dev/pay/cancel',
    StripeReceiptItem: '',
    yaCassaShopId: '',
    yaCassaScId: '',
    yaCassaReceiptItem: '',
    yaCassaReceiptUser: 0,
    yaCassaTaxSystem: 1,
    yaCassaTax: 1,
    yaCassaSubject: 'service',
    yaCassaMode: 'full_prepayment',
    yaMoneyId: '',
    yaMoneySubject: loc['Оплата после расчета'],
    fiscalisation: !1,
    amount: 0,
    handledViaThemeStyles: !0,
    amo: {
      check: !1,
      deal: {
        active: [],
        title: {},
        summ: {},
        bind: {},
        subtype: {},
        status: {},
      },
      list: {
        active: [],
        title: {},
        compId: {},
        summ: {},
        bind: {},
        subtype: {},
        enum: {},
      },
      task: { active: [], title: {}, type: {}, user: {} },
      defaultType: 0,
    },
    bitrix: {
      check: !1,
      lead: {
        check: !1,
        status: 'NEW',
        title: '',
        titleType: 'Mask',
        summ: 0,
        bind: {},
        utm: !1,
      },
      contact: { check: !1, titleType: 'Mask', bind: {}, utm: !1 },
      company: {
        check: !1,
        status: 'CUSTOMER',
        title: '',
        titleType: 'Mask',
        bind: {},
        utm: !1,
      },
    },
    targets: {
      google: { targetId: '', targetName: '', targetUrl: '', isActive: !1 },
      yandex: { targetId: '', targetName: '', targetUrl: '', isActive: !1 },
    },
    doneText: '',
    targetStep: -1,
    thanks: !0,
    thanksTitle: loc['Спасибо!'],
    thanksDesc: loc['Ваша информация успешно отправлена!'],
  },
  acceptTpl:
    loc[
      '<p>Я, субъект персональных данных, в соответствии с Федеральным законом от 27 июля 2006 года № 152 «О персональных данных» предоставляю владельцу формы (далее - Оператор), согласие на обработку персональных данных, указанных мной в форме калькулятора и/или форме заказа товара и/или услуг на сайте в сети «Интернет», владельцем которого является Оператор.</p><p><br></p><ol><li>Состав предоставляемых мной персональных данных является следующим: ФИО, адрес электронной почты и номер телефона.</li><li>Целями обработки моих персональных данных являются: обеспечение обмена короткими текстовыми сообщениями в режиме онлайн-диалога и обеспечение функционирования обратного звонка.</li><li>Согласие предоставляется на совершение следующих действий (операций) с указанными в настоящем согласии персональными данными: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, передачу (предоставление, доступ), блокирование, удаление, уничтожение, осуществляемых как с использованием средств автоматизации (автоматизированная обработка), так и без использования таких средств (неавтоматизированная обработка).</li><li>Я понимаю и соглашаюсь с тем, что предоставление Оператору какой-либо информации о себе, не являющейся контактной и не относящейся к целям настоящего согласия, а равно предоставление информации, относящейся к государственной, банковской и/или коммерческой тайне, информации о расовой и/или национальной принадлежности, политических взглядах, религиозных или философских убеждениях, состоянии здоровья, интимной жизни запрещено.</li><li>В случае принятия мной решения о предоставлении Оператору какой-либо информации (каких-либо данных), я обязуюсь предоставлять исключительно достоверную и актуальную информацию и не вправе вводить Оператора в заблуждение в отношении своей личности, сообщать ложную или недостоверную информацию о себе.</li><li>Я понимаю и соглашаюсь с тем, что Оператор не проверяет достоверность персональных данных, предоставляемых мной, и не имеет возможности оценивать мою дееспособность и исходит из того, что я предоставляю достоверные персональные данные и поддерживаю такие данные в актуальном состоянии.</li><li>Согласие действует по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.</li><li>Согласие может быть отозвано мною в любое время на основании моего письменного заявления.</li></ol>'
    ],
  initial: function (t) {
    if (null != t.id) t = SAVER.getFieldBy('id', t.id);
    FIELDS.button.updateParams(t);
    var a = t.id,
      e = $('#' + t.type + '-' + a),
      i = {
        preview:
          '<div class="field-body__item" style="width:100%;"><button class="[type]-design [type]-[id]" data-memo="[title]">[title]</button>' +
          ('<div class="accept-text input-field-text" style="display:' +
            (t.accept ? 'block' : 'none') +
            '"><p>' +
            loc[
              "Cоглашаюсь на <a href='javascript://' class='btn-accept'>обработку персональных данных</a>"
            ] +
            '</p></div>') +
          '</div>',
      };
    RANDER.setStyleFromField(t),
      e.html(i.preview.Signe(t)),
      e.find('button').on('click', function (a) {
        initBtnClick(a, t, e), runLogicBtn(t);
      }),
      FIELDS.button.updRecaptcha(t),
      FIELDS.button.checkDisabled(t.id),
      FIELDS.button.initAcceptBtn(t, e.find('.btn-accept'));
  },
  updRecaptcha: function (t) {
    var a,
      e = t.id,
      i = $('#' + t.type + '-' + e),
      c = i.find('.g-recaptcha'),
      l = i.closest('[data-columns]').attr('data-columns') / 1;
    if (
      ((window['gRecaptcha' + e] = function () {
        if (!SERV.screen) {
          var a = $('#viewing_panel').width();
          grecaptcha.render('g-recaptcha-' + e, {
            sitekey: SERV.google_key,
            callback: FIELDS.button.recaptchaCallback,
            size:
              SERV.is_mobile || a < 350 || l > 2 || (2 == l && a < 660)
                ? 'compact'
                : 'normal',
            theme: t.recaptchaTheme,
          }),
            FIELDS.button.recaptchaCallback();
        }
      }),
      'recaptcha' == t.captchaType)
    ) {
      if (c.length) {
        if (
          ((a = (function (t) {
            for (var a = t.split('?')[1].split('&'), e = 0; e < a.length; e++) {
              var i = a[e].split('=');
              if ('theme' == i[0]) return i[1];
            }
            return 'light';
          })(c.find('iframe').attr('src'))),
          t.recaptchaTheme == a)
        )
          return;
        c.remove();
      }
      i.prepend('<div id="g-recaptcha-' + e + '" class="g-recaptcha"></div>'),
        setTimeout(function () {
          $('.ucalc-recaptcha').remove(),
            $('head').append(
              "<script src='https://www.google.com/recaptcha/api.js?onload=gRecaptcha" +
                e +
                "&render=explicit' class='ucalc-recaptcha'></script>"
            );
        }, 100);
    } else c.remove();
  },
  recaptchaCallback: function () {
    $('.g-recaptcha-response').each(function () {
      var t = $(this).closest('[data-id]').attr('data-id');
      FIELDS.button.checkDisabled(t);
    });
  },
  recaptchaHash: function (t) {
    return (
      $data('id', (t /= 1))
        .find('.g-recaptcha-response')
        .val() || ''
    );
  },
  checkDisabled: function (t) {
    if (((t /= 1), DAT.itsCreate)) return !1;
    var a,
      e,
      i,
      c = SAVER.getFieldBy('id', t),
      l = $data('id', t).find('.button-design, .layer-send'),
      n = FIELDS.button.recaptchaHash(t),
      o = (DAT.timestump(), l.attr('data-last-send') || 0),
      s = l.attr('data-clicked') || !1,
      r = 'calc' + SERV.calcId + '_btns',
      d = FIELDS.button.validCookie(
        ((a = r),
        (e = document.cookie.match('(^|;) ?' + a + '=([^;]*)(;|$)'))
          ? unescape(e[2])
          : null)
      );
    DAT.timestump() - d.split(':')[0] > 28800
      ? ((i = FIELDS.button.validCookie() + '.' + c.id + '.'),
        (document.cookie =
          'calc' + SERV.calcId + '_btns=' + DAT.timestump() + ':'))
      : (i = d);
    var p = i.split('.').map(function (t) {
        return isNaN(Number(t)) ? 0 : t / 1;
      }),
      u = !1,
      m = '';
    return (
      'recaptcha' === c.captchaType && '' === n
        ? ((u = !0), (m = loc['Подтвердите, что вы не робот']))
        : 'Time' === c.antispam && DAT.timestump() - o / 1 < c.antispamTime
        ? ((u = !0),
          (m = loc['Отправка работает раз в [n] секунд'].replace(
            '[n]',
            c.antispamTime
          )))
        : 'Load' === c.antispam && s
        ? ((u = !0), (m = c.antispamLoad))
        : 'Session' === c.antispam &&
          p.indexOf(t) >= 0 &&
          ((u = !0), (m = c.antispamSession)),
      u
        ? (l.addClass('disabled'),
          l.attr('data-ub-title', m),
          l.attr('data-ub-pos', 'bottom'),
          l.attr('data-ub-class', 'ub-tooltip-red'))
        : (l.removeClass('disabled'), FIELDS.button.clear(l)),
      FIELDS.button.uCaptcha(t, n),
      u
    );
  },
  uCaptcha: function (t, a) {
    var e = {
        previews: !(!DAT.itsFrame || DAT.itsApi),
        calc_id: SERV.calcId,
        button_id: t,
      },
      i = SAVER.getFieldBy('id', t);
    SERV.uCaptcha || (SERV.uCaptcha = {}),
      SERV.uCaptcha.hasOwnProperty(a) ||
        ('recaptcha' == i.captchaType &&
          a &&
          ((e['g-recaptcha-response'] = a),
          $.post(
            '/dev/google/reCaptcha',
            e,
            function (t) {
              console.log(t, t.status),
                'ok' == t.status
                  ? ((SERV.uCaptcha[a] = t.hash),
                    FIELDS.button.uCaptchaClear(a))
                  : ('g-recaptcha-response' == t.type &&
                      FIELDS.button.updRecaptcha(i),
                    'recaptcha-disable' == t.type &&
                      ((i.captchaType = 'default'),
                      FIELDS.button.updRecaptcha(i),
                      (SERV.uCaptcha[a] = ''),
                      FIELDS.button.uCaptchaClear(a)));
            },
            'json'
          )));
  },
  uCaptchaClear: function (t) {
    FIELDS.button.uCaptchaPool
      .filter(function (a) {
        return a.hash == t;
      })
      .map(function (a) {
        (a.data.captcha = SERV.uCaptcha[t]), a.callback(a.data);
      }),
      (FIELDS.button.uCaptchaPool = FIELDS.button.uCaptchaPool.filter(function (
        a
      ) {
        return a.hash != t;
      }));
  },
  uCaptchaPool: [],
  validCookie: function (t) {
    return /^[0-9]+\:(\.[0-9]+\.)*$/.test(t) ? t : DAT.timestump() + ':';
  },
  showThanxFlag: !1,
  showThanx: function (t) {
    if (!FIELDS.button.showThanxFlag && t.thanks) {
      let a = $('#viewing_panel');
      a.addClass('to-thanx'),
        setTimeout(function () {
          a.hide(),
            a.removeClass('to-thanx'),
            a.after(
              '<div class="thanx-page"><h2>[thanksTitle]</h2>[thanksDesc]</div>'.Signe(
                t
              )
            ),
            appNormalise();
        }, 310),
        (FIELDS.button.showThanxFlag = !0),
        SWAP.layers.scrollToStart();
    }
  },
  showStop: function (t, a) {
    t.addClass('btnError'),
      t.attr(
        'data-ub-title',
        loc['[n] обязательных поля не заполнены'].Signe({ n: a })
      ),
      t.attr('data-ub-pos', 'bottom'),
      t.attr('data-ub-class', 'ub-tooltip-red'),
      t.trigger('mouseenter'),
      t.attr('data-tool-freez', 1),
      setTimeout(function () {
        t.removeAttr('data-tool-freez');
      }, 500);
  },
  clear: function (t) {
    t.removeClass('btnError'),
      t.removeAttr('data-ub-title'),
      t.removeAttr('data-ub-pos'),
      t.removeAttr('data-ub-class');
  },
  updateParams: function (t) {
    null === t.adminEmail &&
      SERV.userEmail &&
      ((t.adminEmail = []),
      (t.adminEmail[0] = SERV.userEmail),
      (t.adminEmailAll = [{ mail: SERV.userEmail, active: !0 }])),
      'noreply@ucozmail.com' == t.replyto &&
        (t.replyto =
          '' != SERV.userEmail ? SERV.userEmail : 'noreply@ucozmail.com'),
      (t.doneText = t.doneText || loc['Отправлено']),
      $(document).ready(function () {
        (t.amount && void 0 !== RECALC.db.res[t.amount]) ||
          (t.amount = SAVER.json.results.length
            ? SAVER.json.results[SAVER.json.results.length - 1].id
            : 0);
      });
  },
  initAcceptBtn: function (t, a) {
    a.on('click', function (a) {
      if (DAT.itsApi || DAT.itsFrame) {
        var e,
          i =
            '' == t.acceptHtml || t.acceptStandart
              ? FIELDS.button.acceptTpl
              : t.acceptHtml,
          c = $('html').width() - 60 < 1110 ? '100%' : '1110px',
          l = $('html').height() - 49 < 610 ? '100%' : '610px',
          n =
            '<div class="scrollbar-inner" data-canedit="false">[text]</div>'.Signe(
              { text: i }
            );
        wnd.open(loc['Пользовательское соглашение'], 'modal_code_editor', n),
          (e = $('.modal_code_editor')).width(50).height(50),
          e.find('.modal_body').css('height', 'calc(100% - 60px)'),
          e.find('.scrollbar-inner').scrollbar(),
          e.css({ 'border-radius': 0, width: c, height: l });
      }
    });
  },
};
!(function (l, e) {
  'function' == typeof define && define.amd
    ? define(['jquery'], e)
    : e(l.jQuery);
})(this, function (l) {
  'use strict';
  function e(e) {
    if (s.webkit && !e) return { height: 0, width: 0 };
    if (!s.data.outer) {
      var o = {
        border: 'none',
        'box-sizing': 'content-box',
        height: '200px',
        margin: '0',
        padding: '0',
        width: '200px',
      };
      (s.data.inner = l('<div>').css(l.extend({}, o))),
        (s.data.outer = l('<div>')
          .css(
            l.extend(
              {
                left: '-1000px',
                overflow: 'scroll',
                position: 'absolute',
                top: '-1000px',
              },
              o
            )
          )
          .append(s.data.inner)
          .appendTo('body'));
    }
    return (
      s.data.outer.scrollLeft(1e3).scrollTop(1e3),
      {
        height: Math.ceil(
          s.data.outer.offset().top - s.data.inner.offset().top || 0
        ),
        width: Math.ceil(
          s.data.outer.offset().left - s.data.inner.offset().left || 0
        ),
      }
    );
  }
  function o(l) {
    var e = l.originalEvent;
    return (!e.axis || e.axis !== e.HORIZONTAL_AXIS) && !e.wheelDeltaX;
  }
  var s = {
    data: { index: 0, name: 'scrollbar' },
    macosx: /mac/i.test(navigator.platform),
    mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(
      navigator.userAgent
    ),
    overlay: null,
    scroll: null,
    scrolls: [],
    webkit:
      /webkit/i.test(navigator.userAgent) &&
      !/edge\/\d+/i.test(navigator.userAgent),
  };
  (s.scrolls.add = function (l) {
    this.remove(l).push(l);
  }),
    (s.scrolls.remove = function (e) {
      for (; l.inArray(e, this) >= 0; ) this.splice(l.inArray(e, this), 1);
      return this;
    });
  var r = {
      autoScrollSize: !0,
      autoUpdate: !0,
      debug: !1,
      disableBodyScroll: !1,
      duration: 200,
      ignoreMobile: !1,
      ignoreOverlay: !1,
      scrollStep: 30,
      showArrows: !1,
      stepScrolling: !0,
      scrollx: null,
      scrolly: null,
      onDestroy: null,
      onInit: null,
      onScroll: null,
      onUpdate: null,
    },
    t = function (o) {
      s.scroll ||
        ((s.overlay = (function () {
          var l = e(!0);
          return !(l.height || l.width);
        })()),
        (s.scroll = e()),
        n(),
        l(window).resize(function () {
          var l = !1;
          if (s.scroll && (s.scroll.height || s.scroll.width)) {
            var o = e();
            (o.height !== s.scroll.height || o.width !== s.scroll.width) &&
              ((s.scroll = o), (l = !0));
          }
          n(l);
        })),
        (this.container = o),
        (this.namespace = '.scrollbar_' + s.data.index++),
        (this.options = l.extend({}, r, window.jQueryScrollbarOptions || {})),
        (this.scrollTo = null),
        (this.scrollx = {}),
        (this.scrolly = {}),
        o.data(s.data.name, this),
        s.scrolls.add(this);
    };
  t.prototype = {
    destroy: function () {
      if (this.wrapper) {
        this.container.removeData(s.data.name), s.scrolls.remove(this);
        var e = this.container.scrollLeft(),
          o = this.container.scrollTop();
        this.container
          .insertBefore(this.wrapper)
          .css({ height: '', margin: '', 'max-height': '' })
          .removeClass(
            'scroll-content scroll-scrollx_visible scroll-scrolly_visible'
          )
          .off(this.namespace)
          .scrollLeft(e)
          .scrollTop(o),
          this.scrollx.scroll
            .removeClass('scroll-scrollx_visible')
            .find('div')
            .addBack()
            .off(this.namespace),
          this.scrolly.scroll
            .removeClass('scroll-scrolly_visible')
            .find('div')
            .addBack()
            .off(this.namespace),
          this.wrapper.remove(),
          l(document).add('body').off(this.namespace),
          l.isFunction(this.options.onDestroy) &&
            this.options.onDestroy.apply(this, [this.container]);
      }
    },
    init: function (e) {
      var r = this,
        t = this.container,
        i = this.containerWrapper || t,
        n = this.namespace,
        c = l.extend(this.options, e || {}),
        a = { x: this.scrollx, y: this.scrolly },
        d = this.wrapper,
        h = { scrollLeft: t.scrollLeft(), scrollTop: t.scrollTop() };
      if (
        (s.mobile && c.ignoreMobile) ||
        (s.overlay && c.ignoreOverlay) ||
        (s.macosx && !s.webkit)
      )
        return t.parent().css('overflow', 'scroll'), !1;
      if (d)
        i.css({
          height: 'auto',
          'margin-bottom': -1 * s.scroll.height + 'px',
          'margin-right': -1 * s.scroll.width + 'px',
          'max-height': '',
        });
      else {
        if (
          ((this.wrapper = d =
            l('<div>')
              .addClass('scroll-wrapper')
              .addClass(t.attr('class'))
              .css(
                'position',
                'absolute' == t.css('position') ? 'absolute' : 'relative'
              )
              .insertBefore(t)
              .append(t)),
          t.is('textarea') &&
            ((this.containerWrapper = i = l('<div>').insertBefore(t).append(t)),
            d.addClass('scroll-textarea')),
          i
            .addClass('scroll-content')
            .css({
              height: 'auto',
              'margin-bottom': -1 * s.scroll.height + 'px',
              'margin-right': -1 * s.scroll.width + 'px',
              'max-height': '',
            }),
          t.on('scroll' + n, function (e) {
            l.isFunction(c.onScroll) &&
              c.onScroll.call(
                r,
                {
                  maxScroll: a.y.maxScrollOffset,
                  scroll: t.scrollTop(),
                  size: a.y.size,
                  visible: a.y.visible,
                },
                {
                  maxScroll: a.x.maxScrollOffset,
                  scroll: t.scrollLeft(),
                  size: a.x.size,
                  visible: a.x.visible,
                }
              ),
              a.x.isVisible &&
                a.x.scroll.bar.css('left', t.scrollLeft() * a.x.kx + 'px'),
              a.y.isVisible &&
                a.y.scroll.bar.css('top', t.scrollTop() * a.y.kx + 'px');
          }),
          d.on('scroll' + n, function () {
            d.scrollTop(0).scrollLeft(0);
          }),
          c.disableBodyScroll)
        ) {
          var u = function (l) {
            o(l)
              ? a.y.isVisible && a.y.mousewheel(l)
              : a.x.isVisible && a.x.mousewheel(l);
          };
          d.on('MozMousePixelScroll' + n, u),
            d.on('mousewheel' + n, u),
            s.mobile &&
              d.on('touchstart' + n, function (e) {
                var o =
                    (e.originalEvent.touches && e.originalEvent.touches[0]) ||
                    e,
                  s = o.pageX,
                  r = o.pageY,
                  i = t.scrollLeft(),
                  c = t.scrollTop();
                l(document).on('touchmove' + n, function (l) {
                  var e =
                    (l.originalEvent.targetTouches &&
                      l.originalEvent.targetTouches[0]) ||
                    l;
                  t.scrollLeft(i + s - e.pageX),
                    t.scrollTop(c + r - e.pageY),
                    l.preventDefault();
                }),
                  l(document).on('touchend' + n, function () {
                    l(document).off(n);
                  });
              });
        }
        l.isFunction(c.onInit) && c.onInit.apply(this, [t]);
      }
      l.each(a, function (e, s) {
        var i = null,
          d = 1,
          h = 'x' === e ? 'scrollLeft' : 'scrollTop',
          u = c.scrollStep,
          p = function () {
            var l = t[h]();
            t[h](l + u),
              1 == d && l + u >= f && (l = t[h]()),
              -1 == d && f >= l + u && (l = t[h]()),
              t[h]() == l && i && i();
          },
          f = 0;
        s.scroll ||
          ((s.scroll = r._getScroll(c['scroll' + e]).addClass('scroll-' + e)),
          c.showArrows && s.scroll.addClass('scroll-element_arrows_visible'),
          (s.mousewheel = function (l) {
            if (!s.isVisible || ('x' === e && o(l))) return !0;
            if ('y' === e && !o(l)) return a.x.mousewheel(l), !0;
            var i = -1 * l.originalEvent.wheelDelta || l.originalEvent.detail,
              n = s.size - s.visible - s.offset;
            return (
              ((i > 0 && n > f) || (0 > i && f > 0)) &&
                (0 > (f += i) && (f = 0),
                f > n && (f = n),
                (r.scrollTo = r.scrollTo || {}),
                (r.scrollTo[h] = f),
                setTimeout(function () {
                  r.scrollTo &&
                    (t.stop().animate(r.scrollTo, 240, 'linear', function () {
                      f = t[h]();
                    }),
                    (r.scrollTo = null));
                }, 1)),
              l.preventDefault(),
              !1
            );
          }),
          s.scroll
            .on('MozMousePixelScroll' + n, s.mousewheel)
            .on('mousewheel' + n, s.mousewheel)
            .on('mouseenter' + n, function () {
              f = t[h]();
            }),
          s.scroll
            .find('.scroll-arrow, .scroll-element_track')
            .on('mousedown' + n, function (o) {
              if (1 != o.which) return !0;
              d = 1;
              var n = {
                  eventOffset: o['x' === e ? 'pageX' : 'pageY'],
                  maxScrollValue: s.size - s.visible - s.offset,
                  scrollbarOffset:
                    s.scroll.bar.offset()['x' === e ? 'left' : 'top'],
                  scrollbarSize:
                    s.scroll.bar['x' === e ? 'outerWidth' : 'outerHeight'](),
                },
                a = 0,
                v = 0;
              return (
                l(this).hasClass('scroll-arrow')
                  ? ((d = l(this).hasClass('scroll-arrow_more') ? 1 : -1),
                    (u = c.scrollStep * d),
                    (f = d > 0 ? n.maxScrollValue : 0))
                  : ((d =
                      n.eventOffset > n.scrollbarOffset + n.scrollbarSize
                        ? 1
                        : n.eventOffset < n.scrollbarOffset
                        ? -1
                        : 0),
                    (u = Math.round(0.75 * s.visible) * d),
                    (f =
                      n.eventOffset -
                      n.scrollbarOffset -
                      (c.stepScrolling
                        ? 1 == d
                          ? n.scrollbarSize
                          : 0
                        : Math.round(n.scrollbarSize / 2))),
                    (f = t[h]() + f / s.kx)),
                (r.scrollTo = r.scrollTo || {}),
                (r.scrollTo[h] = c.stepScrolling ? t[h]() + u : f),
                c.stepScrolling &&
                  ((i = function () {
                    (f = t[h]()),
                      clearInterval(v),
                      clearTimeout(a),
                      (a = 0),
                      (v = 0);
                  }),
                  (a = setTimeout(function () {
                    v = setInterval(p, 40);
                  }, c.duration + 100))),
                setTimeout(function () {
                  r.scrollTo &&
                    (t.animate(r.scrollTo, c.duration), (r.scrollTo = null));
                }, 1),
                r._handleMouseDown(i, o)
              );
            }),
          s.scroll.bar.on('mousedown' + n, function (o) {
            if (1 != o.which) return !0;
            var i = o['x' === e ? 'pageX' : 'pageY'],
              c = t[h]();
            return (
              s.scroll.addClass('scroll-draggable'),
              l(document).on('mousemove' + n, function (l) {
                var o = parseInt(
                  (l['x' === e ? 'pageX' : 'pageY'] - i) / s.kx,
                  10
                );
                t[h](c + o);
              }),
              r._handleMouseDown(function () {
                s.scroll.removeClass('scroll-draggable'), (f = t[h]());
              }, o)
            );
          }));
      }),
        l.each(a, function (l, e) {
          var o = 'scroll-scroll' + l + '_visible',
            s = 'x' == l ? a.y : a.x;
          e.scroll.removeClass(o), s.scroll.removeClass(o), i.removeClass(o);
        }),
        l.each(a, function (e, o) {
          l.extend(
            o,
            'x' == e
              ? {
                  offset: parseInt(t.css('left'), 10) || 0,
                  size: t.prop('scrollWidth'),
                  visible: d.width(),
                }
              : {
                  offset: parseInt(t.css('top'), 10) || 0,
                  size: t.prop('scrollHeight'),
                  visible: d.height(),
                }
          );
        }),
        this._updateScroll('x', this.scrollx),
        this._updateScroll('y', this.scrolly),
        l.isFunction(c.onUpdate) && c.onUpdate.apply(this, [t]),
        l.each(a, function (l, e) {
          var o = 'x' === l ? 'left' : 'top',
            s = 'x' === l ? 'outerWidth' : 'outerHeight',
            r = 'x' === l ? 'width' : 'height',
            i = parseInt(t.css(o), 10) || 0,
            n = e.size,
            a = e.visible + i,
            d = e.scroll.size[s]() + (parseInt(e.scroll.size.css(o), 10) || 0);
          c.autoScrollSize &&
            ((e.scrollbarSize = parseInt((d * a) / n, 10)),
            e.scroll.bar.css(r, e.scrollbarSize + 'px')),
            (e.scrollbarSize = e.scroll.bar[s]()),
            (e.kx = (d - e.scrollbarSize) / (n - a) || 1),
            (e.maxScrollOffset = n - a);
        }),
        t.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger('scroll');
    },
    _getScroll: function (e) {
      var o = {
        advanced: [
          '<div class="scroll-element">',
          '<div class="scroll-element_corner"></div>',
          '<div class="scroll-arrow scroll-arrow_less"></div>',
          '<div class="scroll-arrow scroll-arrow_more"></div>',
          '<div class="scroll-element_outer">',
          '<div class="scroll-element_size"></div>',
          '<div class="scroll-element_inner-wrapper">',
          '<div class="scroll-element_inner scroll-element_track">',
          '<div class="scroll-element_inner-bottom"></div>',
          '</div>',
          '</div>',
          '<div class="scroll-bar">',
          '<div class="scroll-bar_body">',
          '<div class="scroll-bar_body-inner"></div>',
          '</div>',
          '<div class="scroll-bar_bottom"></div>',
          '<div class="scroll-bar_center"></div>',
          '</div>',
          '</div>',
          '</div>',
        ].join(''),
        simple: [
          '<div class="scroll-element">',
          '<div class="scroll-element_outer">',
          '<div class="scroll-element_size"></div>',
          '<div class="scroll-element_track"></div>',
          '<div class="scroll-bar"></div>',
          '</div>',
          '</div>',
        ].join(''),
      };
      return (
        o[e] && (e = o[e]),
        e || (e = o.simple),
        (e = 'string' == typeof e ? l(e).appendTo(this.wrapper) : l(e)),
        l.extend(e, {
          bar: e.find('.scroll-bar'),
          size: e.find('.scroll-element_size'),
          track: e.find('.scroll-element_track'),
        }),
        e
      );
    },
    _handleMouseDown: function (e, o) {
      var s = this.namespace;
      return (
        l(document).on('blur' + s, function () {
          l(document).add('body').off(s), e && e();
        }),
        l(document).on('dragstart' + s, function (l) {
          return l.preventDefault(), !1;
        }),
        l(document).on('mouseup' + s, function () {
          l(document).add('body').off(s), e && e();
        }),
        l('body').on('selectstart' + s, function (l) {
          return l.preventDefault(), !1;
        }),
        o && o.preventDefault(),
        !1
      );
    },
    _updateScroll: function (e, o) {
      var r = this.container,
        t = this.containerWrapper || r,
        i = 'scroll-scroll' + e + '_visible',
        n = 'x' === e ? this.scrolly : this.scrollx,
        c = parseInt(this.container.css('x' === e ? 'left' : 'top'), 10) || 0,
        a = this.wrapper,
        d = o.size,
        h = o.visible + c;
      (o.isVisible = d - h > 1),
        o.isVisible
          ? (o.scroll.addClass(i), n.scroll.addClass(i), t.addClass(i))
          : (o.scroll.removeClass(i),
            n.scroll.removeClass(i),
            t.removeClass(i)),
        'y' === e &&
          (r.is('textarea') || h > d
            ? t.css({
                height: h + s.scroll.height + 'px',
                'max-height': 'none',
              })
            : t.css({ 'max-height': h + s.scroll.height + 'px' })),
        (o.size != r.prop('scrollWidth') ||
          n.size != r.prop('scrollHeight') ||
          o.visible != a.width() ||
          n.visible != a.height() ||
          o.offset != (parseInt(r.css('left'), 10) || 0) ||
          n.offset != (parseInt(r.css('top'), 10) || 0)) &&
          (l.extend(this.scrollx, {
            offset: parseInt(r.css('left'), 10) || 0,
            size: r.prop('scrollWidth'),
            visible: a.width(),
          }),
          l.extend(this.scrolly, {
            offset: parseInt(r.css('top'), 10) || 0,
            size: this.container.prop('scrollHeight'),
            visible: a.height(),
          }),
          this._updateScroll('x' === e ? 'y' : 'x', n));
    },
  };
  var i = t;
  (l.fn.scrollbar = function (e, o) {
    return (
      'string' != typeof e && ((o = e), (e = 'init')),
      void 0 === o && (o = []),
      l.isArray(o) || (o = [o]),
      this.not('body, .scroll-wrapper').each(function () {
        var r = l(this),
          t = r.data(s.data.name);
        (t || 'init' === e) && (t || (t = new i(r)), t[e] && t[e].apply(t, o));
      }),
      this
    );
  }),
    (l.fn.scrollbar.options = r);
  var n = (function () {
    var l = 0;
    return function (e) {
      var o, r, t, i, c, a, d;
      for (o = 0; o < s.scrolls.length; o++)
        (r = (i = s.scrolls[o]).container),
          (t = i.options),
          (c = i.wrapper),
          (a = i.scrollx),
          (d = i.scrolly),
          (e ||
            (t.autoUpdate &&
              c &&
              c.is(':visible') &&
              (r.prop('scrollWidth') != a.size ||
                r.prop('scrollHeight') != d.size ||
                c.width() != a.visible ||
                c.height() != d.visible))) &&
            (i.init(),
            t.debug &&
              (window.console &&
                console.log(
                  {
                    scrollHeight: r.prop('scrollHeight') + ':' + i.scrolly.size,
                    scrollWidth: r.prop('scrollWidth') + ':' + i.scrollx.size,
                    visibleHeight: c.height() + ':' + i.scrolly.visible,
                    visibleWidth: c.width() + ':' + i.scrollx.visible,
                  },
                  !0
                ),
              0));
      clearTimeout(l), (l = setTimeout(n, 300));
    };
  })();
  window.angular &&
    (function (l) {
      l.module('jQueryScrollbar', [])
        .provider('jQueryScrollbar', function () {
          var e = r;
          return {
            setOptions: function (o) {
              l.extend(e, o);
            },
            $get: function () {
              return { options: l.copy(e) };
            },
          };
        })
        .directive('jqueryScrollbar', [
          'jQueryScrollbar',
          '$parse',
          function (l, e) {
            return {
              restrict: 'AC',
              link: function (o, s, r) {
                var t = e(r.jqueryScrollbar)(o);
                s.scrollbar(t || l.options).on('$destroy', function () {
                  s.scrollbar('destroy');
                });
              },
            };
          },
        ]);
    })(window.angular);
});
