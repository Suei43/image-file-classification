/*! For license information please see main.fd423bbd.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      459: function (e, t, n) {
        var r = n(233),
          a = n(674);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function x(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          j = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          R = Symbol.for("react.memo"),
          A = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var T = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          D = Object.assign;
        function U(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var B = !1;
        function I(e, t) {
          if (!e || B) return "";
          B = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var u = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (B = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function M(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U("Lazy");
            case 13:
              return U("Suspense");
            case 19:
              return U("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = I(e.type, !1));
            case 11:
              return (e = I(e.type.render, !1));
            case 1:
              return (e = I(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case E:
              return "Profiler";
            case j:
              return "StrictMode";
            case _:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case N:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case R:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case A:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
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
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
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
              return V(t);
            case 8:
              return t === j ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && x(e, "checked", t, !1);
        }
        function X(e, t) {
          J(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
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
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = D(
          { menuitem: !0 },
          {
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
            wbr: !0,
          },
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function xe(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
              return !0;
          }
        }
        var be = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          je = null;
        function Ee(e) {
          if ((e = xa(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = wa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          Se ? (je ? je.push(e) : (je = [e])) : (Se = e);
        }
        function Ce() {
          if (Se) {
            var e = Se,
              t = je;
            if (((je = Se = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function _e() {}
        var Oe = !1;
        function Re(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Oe = !1), (null !== Se || null !== je) && (_e(), Ce());
          }
        }
        function Ae(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Te = !1;
        if (c)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                Te = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (ce) {
            Te = !1;
          }
        function ze(e, t, n, r, a, o, l, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Fe = !1,
          De = null,
          Ue = !1,
          Be = null,
          Ie = {
            onError: function (e) {
              (Fe = !0), (De = e);
            },
          };
        function Me(e, t, n, r, a, o, l, i, u) {
          (Fe = !1), (De = null), ze.apply(Ie, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Ve(e) !== e) throw Error(o(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return He(a), e;
                    if (l === r) return He(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Je = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = ft(i)) : 0 !== (o &= l) && (r = ft(o));
          } else 0 !== (l = n & ~a) ? (r = ft(l)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
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
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var xt = 0;
        function bt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          St,
          jt,
          Et,
          Nt = !1,
          Ct = [],
          Pt = null,
          _t = null,
          Ot = null,
          Rt = new Map(),
          At = new Map(),
          Tt = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              _t = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Rt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              At.delete(t.pointerId);
          }
        }
        function Ft(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = xa(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Dt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = xa(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (be = r), n.target.dispatchEvent(r), (be = null), t.shift();
          }
          return !0;
        }
        function Bt(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function It() {
          (Nt = !1),
            null !== Pt && Ut(Pt) && (Pt = null),
            null !== _t && Ut(_t) && (_t = null),
            null !== Ot && Ut(Ot) && (Ot = null),
            Rt.forEach(Bt),
            At.forEach(Bt);
        }
        function Mt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, It)));
        }
        function Vt(e) {
          function t(t) {
            return Mt(t, e);
          }
          if (0 < Ct.length) {
            Mt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Mt(Pt, e),
              null !== _t && Mt(_t, e),
              null !== Ot && Mt(Ot, e),
              Rt.forEach(t),
              At.forEach(t),
              n = 0;
            n < Tt.length;
            n++
          )
            (r = Tt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn; )
            Dt(n), null === n.blockedOn && Tt.shift();
        }
        var Wt = b.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var a = xt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (xt = 1), qt(e, t, n, r);
          } finally {
            (xt = a), (Wt.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          var a = xt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (xt = 4), qt(e, t, n, r);
          } finally {
            (xt = a), (Wt.transition = o);
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var a = Gt(e, t, n, r);
            if (null === a) Hr(e, t, r, Kt, n), zt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = Ft(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (_t = Ft(_t, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = Ft(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Rt.set(o, Ft(Rt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      At.set(o, Ft(At.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== a; ) {
                var o = xa(a);
                if (
                  (null !== o && wt(o),
                  null === (o = Gt(e, t, n, r)) && Hr(e, t, r, Kt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Gt(e, t, n, r) {
          if (((Kt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Yt(e) {
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
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Jt ? Jt.value : Jt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = D({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = D({}, fn, {
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
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(D({}, pn, { dataTransfer: 0 })),
          vn = an(D({}, fn, { relatedTarget: 0 })),
          gn = an(
            D({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = D({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          xn = an(yn),
          bn = an(D({}, sn, { data: 0 })),
          wn = {
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
            MozPrintableKey: "Unidentified",
          },
          kn = {
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
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function jn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function En() {
          return jn;
        }
        var Nn = D({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(Nn),
          Pn = an(
            D({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          _n = an(
            D({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            }),
          ),
          On = an(
            D({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Rn = D({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          An = an(Rn),
          Tn = [9, 13, 27, 32],
          Ln = c && "CompositionEvent" in window,
          zn = null;
        c && "documentMode" in document && (zn = document.documentMode);
        var Fn = c && "TextEvent" in window && !zn,
          Dn = c && (!Ln || (zn && 8 < zn && 11 >= zn)),
          Un = String.fromCharCode(32),
          Bn = !1;
        function In(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Tn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Mn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var Wn = {
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
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ne(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          qn = null;
        function Kn(e) {
          Ur(e, 0);
        }
        function Gn(e) {
          if (q(ba(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Jn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (qn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(qn)) {
            var t = [];
            $n(t, qn, e, we(e)), Re(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(qn);
        }
        function or(e, t) {
          if ("click" === e) return Gn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var l = cr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          xr = !1;
        function br(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          xr ||
            null == vr ||
            vr !== K(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Sr = {},
          jr = {};
        function Er(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in jr) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((jr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Nr = Er("animationend"),
          Cr = Er("animationiteration"),
          Pr = Er("animationstart"),
          _r = Er("transitionend"),
          Or = new Map(),
          Rr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Ar(e, t) {
          Or.set(e, t), u(t, [e]);
        }
        for (var Tr = 0; Tr < Rr.length; Tr++) {
          var Lr = Rr[Tr];
          Ar(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        Ar(Nr, "onAnimationEnd"),
          Ar(Cr, "onAnimationIteration"),
          Ar(Pr, "onAnimationStart"),
          Ar("dblclick", "onDoubleClick"),
          Ar("focusin", "onFocus"),
          Ar("focusout", "onBlur"),
          Ar(_r, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr),
          );
        function Dr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, i, u, s) {
              if ((Me.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(o(198));
                var c = De;
                (Fe = !1), (De = null), Ue || ((Ue = !0), (Be = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ur(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Dr(a, i, s), (o = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Dr(a, i, s), (o = u);
                }
            }
          }
          if (Ue) throw ((e = Be), (Ue = !1), (Be = null), e);
        }
        function Br(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Ir(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Mr = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Mr]) {
            (e[Mr] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Fr.has(t) || Ir(t, !1, e), Ir(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Mr] || ((t[Mr] = !0), Ir("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Te ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = ya(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Re(function () {
            var r = o,
              a = we(n),
              l = [];
            e: {
              var i = Or.get(e);
              if (void 0 !== i) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Cn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = vn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = _n;
                    break;
                  case Nr:
                  case Cr:
                  case Pr:
                    u = gn;
                    break;
                  case _r:
                    u = On;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = An;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = xn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Ae(h, d)) &&
                        c.push($r(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  l.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === be ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (f = Ve(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? i : ba(u)),
                  (p = null == s ? i : ba(s)),
                  ((i = new c(m, h + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, m = d; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Kr(l, i, u, c, !1),
                  null !== s && null !== f && Kr(l, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? ba(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var v = Yn;
              else if (Hn(i))
                if (Jn) v = lr;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (v = or);
              switch (
                (v && (v = v(e, r))
                  ? $n(l, v, n, a)
                  : (g && g(e, i, r),
                    "focusout" === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (g = r ? ba(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  xr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (xr = !1), br(l, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  br(l, n, a);
              }
              var y;
              if (Ln)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var x = "onCompositionStart";
                      break e;
                    case "compositionend":
                      x = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      x = "onCompositionUpdate";
                      break e;
                  }
                  x = void 0;
                }
              else
                Vn
                  ? In(e, n) && (x = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (x = "onCompositionStart");
              x &&
                (Dn &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== x
                    ? "onCompositionEnd" === x && Vn && (y = en())
                    : ((Xt = "value" in (Jt = a) ? Jt.value : Jt.textContent),
                      (Vn = !0))),
                0 < (g = Qr(r, x)).length &&
                  ((x = new bn(x, e, null, n, a)),
                  l.push({ event: x, listeners: g }),
                  y ? (x.data = y) : null !== (y = Mn(n)) && (x.data = y))),
                (y = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Mn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!Ln && In(e, t))
                          ? ((e = en()), (Zt = Xt = Jt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new bn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Ur(l, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Ae(e, n)) && r.unshift($r(e, o, a)),
              null != (o = Ae(e, t)) && r.push($r(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Ae(n, o)) && l.unshift($r(n, u, i))
                : a || (null != (u = Ae(n, o)) && l.push($r(n, u, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Gr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Yr, "");
        }
        function Xr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          va = "__reactListeners$" + fa,
          ga = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function xa(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ba(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function ja(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Na(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Ca = {},
          Pa = ja(Ca),
          _a = ja(!1),
          Oa = Ca;
        function Ra(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ca;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Aa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ta() {
          Ea(_a), Ea(Pa);
        }
        function La(e, t, n) {
          if (Pa.current !== Ca) throw Error(o(168));
          Na(Pa, t), Na(_a, n);
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
          return D({}, n, r);
        }
        function Fa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (Oa = Pa.current),
            Na(Pa, e),
            Na(_a, _a.current),
            !0
          );
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = za(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(_a),
              Ea(Pa),
              Na(Pa, e))
            : Ea(_a),
            Na(_a, n);
        }
        var Ua = null,
          Ba = !1,
          Ia = !1;
        function Ma(e) {
          null === Ua ? (Ua = [e]) : Ua.push(e);
        }
        function Va() {
          if (!Ia && null !== Ua) {
            Ia = !0;
            var e = 0,
              t = xt;
            try {
              var n = Ua;
              for (xt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ua = null), (Ba = !1);
            } catch (a) {
              throw (null !== Ua && (Ua = Ua.slice(e + 1)), qe(Ze, Va), a);
            } finally {
              (xt = t), (Ia = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          $a = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Ga = null,
          Ya = 1,
          Ja = "";
        function Xa(e, t) {
          (Wa[Ha++] = Qa), (Wa[Ha++] = $a), ($a = e), (Qa = t);
        }
        function Za(e, t, n) {
          (qa[Ka++] = Ya), (qa[Ka++] = Ja), (qa[Ka++] = Ga), (Ga = e);
          var r = Ya;
          e = Ja;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ya = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Ja = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Ja = e);
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === $a; )
            ($a = Wa[--Ha]), (Wa[Ha] = null), (Qa = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Ga; )
            (Ga = qa[--Ka]),
              (qa[Ka] = null),
              (Ja = qa[--Ka]),
              (qa[Ka] = null),
              (Ya = qa[--Ka]),
              (qa[Ka] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function lo(e, t) {
          var n = As(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ya, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = As(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function so(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!io(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = sa(n.nextSibling);
                var r = no;
                t && io(e, t)
                  ? lo(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) lo(e, t), (t = sa(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var vo = b.ReactCurrentBatchConfig;
        function go(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yo = ja(null),
          xo = null,
          bo = null,
          wo = null;
        function ko() {
          wo = bo = xo = null;
        }
        function So(e) {
          var t = yo.current;
          Ea(yo), (e._currentValue = t);
        }
        function jo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Eo(e, t) {
          (xo = e),
            (wo = bo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bi = !0), (e.firstContext = null));
        }
        function No(e) {
          var t = e._currentValue;
          if (wo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bo)
            ) {
              if (null === xo) throw Error(o(308));
              (bo = e), (xo.dependencies = { lanes: 0, firstContext: e });
            } else bo = bo.next = e;
          return t;
        }
        var Co = null;
        function Po(e) {
          null === Co ? (Co = [e]) : Co.push(e);
        }
        function _o(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Po(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Oo(e, r)
          );
        }
        function Oo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ro = !1;
        function Ao(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function To(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Lo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function zo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _u))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Oo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Po(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Oo(e, n)
          );
        }
        function Fo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Do(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Uo(e, t, n, r) {
          var a = e.updateQueue;
          Ro = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === l ? (o = s) : (l.next = s), (l = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (l = 0, c = s = u = null, i = o; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = D({}, f, d);
                      break e;
                    case 2:
                      Ro = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (l |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Du |= l), (e.lanes = l), (e.memoizedState = f);
          }
        }
        function Bo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Io = new r.Component().refs;
        function Mo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Vo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Lo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (rs(t, e, a, r), Fo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Lo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (rs(t, e, a, r), Fo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = Lo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = zo(e, a, r)) && (rs(t, e, r, n), Fo(t, e, r));
          },
        };
        function Wo(e, t, n, r, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function Ho(e, t, n) {
          var r = !1,
            a = Ca,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = No(o))
              : ((a = Aa(t) ? Oa : Pa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ra(e, a)
                  : Ca)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Vo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function $o(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Vo.enqueueReplaceState(t, t.state, null);
        }
        function Qo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Io), Ao(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = No(o))
            : ((o = Aa(t) ? Oa : Pa.current), (a.context = Ra(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Mo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Vo.enqueueReplaceState(a, a.state, null),
              Uo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Io && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Ko(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ls(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Us(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === A &&
                    Go(o) === t.type))
              ? (((r = a(t, n.props)).ref = qo(e, t, n)), (r.return = e), r)
              : (((r = zs(n.type, n.key, n.props, null, e.mode, r)).ref = qo(
                  e,
                  t,
                  n,
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Fs(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Us("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = zs(t.type, t.key, t.props, null, e.mode, n)).ref = qo(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Bs(t, e.mode, n)).return = e), t;
                case A:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = Fs(t, e.mode, n, null)).return = e), t;
              Ko(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? s(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case A:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== a ? null : f(e, t, n, r, null);
              Ko(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case A:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || z(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Ko(t, r);
            }
            return null;
          }
          function m(a, o, i, u) {
            for (
              var s = null, c = null, f = o, m = (o = 0), v = null;
              null !== f && m < i.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(a, f, i[m], u);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (o = l(g, o, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = v);
            }
            if (m === i.length) return n(a, f), ao && Xa(a, m), s;
            if (null === f) {
              for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) &&
                  ((o = l(f, o, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ao && Xa(a, m), s;
            }
            for (f = r(a, f); m < i.length; m++)
              null !== (v = h(f, a, m, i[m], u)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (o = l(v, o, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, m),
              s
            );
          }
          function v(a, i, u, s) {
            var c = z(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), m = i, v = (i = 0), g = null, y = u.next();
              null !== m && !y.done;
              v++, y = u.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var x = p(a, m, y.value, s);
              if (null === x) {
                null === m && (m = g);
                break;
              }
              e && m && null === x.alternate && t(a, m),
                (i = l(x, i, v)),
                null === f ? (c = x) : (f.sibling = x),
                (f = x),
                (m = g);
            }
            if (y.done) return n(a, m), ao && Xa(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) &&
                  ((i = l(y, i, v)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ao && Xa(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = u.next())
              null !== (y = h(m, a, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (i = l(y, i, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, v),
              c
            );
          }
          return function e(r, o, l, u) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === S &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case w:
                  e: {
                    for (var s = l.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = l.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, l.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === A &&
                            Go(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, l.props)).ref = qo(r, c, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    l.type === S
                      ? (((o = Fs(l.props.children, r.mode, u, l.key)).return =
                          r),
                        (r = o))
                      : (((u = zs(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          u,
                        )).ref = qo(r, o, l)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case k:
                  e: {
                    for (c = l.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Bs(l, r.mode, u)).return = r), (r = o);
                  }
                  return i(r);
                case A:
                  return e(r, o, (c = l._init)(l._payload), u);
              }
              if (te(l)) return m(r, o, l, u);
              if (z(l)) return v(r, o, l, u);
              Ko(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Us(l, r.mode, u)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var Jo = Yo(!0),
          Xo = Yo(!1),
          Zo = {},
          el = ja(Zo),
          tl = ja(Zo),
          nl = ja(Zo);
        function rl(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function al(e, t) {
          switch ((Na(nl, t), Na(tl, e), Na(el, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          Ea(el), Na(el, t);
        }
        function ol() {
          Ea(el), Ea(tl), Ea(nl);
        }
        function ll(e) {
          rl(nl.current);
          var t = rl(el.current),
            n = ue(t, e.type);
          t !== n && (Na(tl, e), Na(el, n));
        }
        function il(e) {
          tl.current === e && (Ea(el), Ea(tl));
        }
        var ul = ja(0);
        function sl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var cl = [];
        function fl() {
          for (var e = 0; e < cl.length; e++)
            cl[e]._workInProgressVersionPrimary = null;
          cl.length = 0;
        }
        var dl = b.ReactCurrentDispatcher,
          pl = b.ReactCurrentBatchConfig,
          hl = 0,
          ml = null,
          vl = null,
          gl = null,
          yl = !1,
          xl = !1,
          bl = 0,
          wl = 0;
        function kl() {
          throw Error(o(321));
        }
        function Sl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function jl(e, t, n, r, a, l) {
          if (
            ((hl = l),
            (ml = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (dl.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            xl)
          ) {
            l = 0;
            do {
              if (((xl = !1), (bl = 0), 25 <= l)) throw Error(o(301));
              (l += 1),
                (gl = vl = null),
                (t.updateQueue = null),
                (dl.current = si),
                (e = n(r, a));
            } while (xl);
          }
          if (
            ((dl.current = li),
            (t = null !== vl && null !== vl.next),
            (hl = 0),
            (gl = vl = ml = null),
            (yl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function El() {
          var e = 0 !== bl;
          return (bl = 0), e;
        }
        function Nl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gl ? (ml.memoizedState = gl = e) : (gl = gl.next = e), gl
          );
        }
        function Cl() {
          if (null === vl) {
            var e = ml.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vl.next;
          var t = null === gl ? ml.memoizedState : gl.next;
          if (null !== t) (gl = t), (vl = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (vl = e).memoizedState,
              baseState: vl.baseState,
              baseQueue: vl.baseQueue,
              queue: vl.queue,
              next: null,
            }),
              null === gl ? (ml.memoizedState = gl = e) : (gl = gl.next = e);
          }
          return gl;
        }
        function Pl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function _l(e) {
          var t = Cl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = vl,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = l;
            do {
              var f = c.lane;
              if ((hl & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (i = r)) : (s = s.next = d),
                  (ml.lanes |= f),
                  (Du |= f);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === s ? (i = r) : (s.next = u),
              ir(r, t.memoizedState) || (bi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (ml.lanes |= l), (Du |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ol(e) {
          var t = Cl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, t.memoizedState) || (bi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Rl() {}
        function Al(e, t) {
          var n = ml,
            r = Cl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (bi = !0)),
            (r = r.queue),
            Hl(zl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== gl && 1 & gl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Bl(9, Ll.bind(null, n, r, a, t), void 0, null),
              null === Ou)
            )
              throw Error(o(349));
            0 !== (30 & hl) || Tl(n, t, a);
          }
          return a;
        }
        function Tl(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ml.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ml.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ll(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Fl(t) && Dl(e);
        }
        function zl(e, t, n) {
          return n(function () {
            Fl(t) && Dl(e);
          });
        }
        function Fl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Dl(e) {
          var t = Oo(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function Ul(e) {
          var t = Nl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, ml, e)),
            [t.memoizedState, e]
          );
        }
        function Bl(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ml.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ml.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Il() {
          return Cl().memoizedState;
        }
        function Ml(e, t, n, r) {
          var a = Nl();
          (ml.flags |= e),
            (a.memoizedState = Bl(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Vl(e, t, n, r) {
          var a = Cl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== vl) {
            var l = vl.memoizedState;
            if (((o = l.destroy), null !== r && Sl(r, l.deps)))
              return void (a.memoizedState = Bl(t, n, o, r));
          }
          (ml.flags |= e), (a.memoizedState = Bl(1 | t, n, o, r));
        }
        function Wl(e, t) {
          return Ml(8390656, 8, e, t);
        }
        function Hl(e, t) {
          return Vl(2048, 8, e, t);
        }
        function $l(e, t) {
          return Vl(4, 2, e, t);
        }
        function Ql(e, t) {
          return Vl(4, 4, e, t);
        }
        function ql(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Kl(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Vl(4, 4, ql.bind(null, t, e), n)
          );
        }
        function Gl() {}
        function Yl(e, t) {
          var n = Cl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Jl(e, t) {
          var n = Cl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Sl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xl(e, t, n) {
          return 0 === (21 & hl)
            ? (e.baseState && ((e.baseState = !1), (bi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (ml.lanes |= n), (Du |= n), (e.baseState = !0)),
              t);
        }
        function Zl(e, t) {
          var n = xt;
          (xt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pl.transition;
          pl.transition = {};
          try {
            e(!1), t();
          } finally {
            (xt = n), (pl.transition = r);
          }
        }
        function ei() {
          return Cl().memoizedState;
        }
        function ti(e, t, n) {
          var r = ns(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n);
          else if (null !== (n = _o(e, t, n, r))) {
            rs(n, e, r, ts()), oi(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Po(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = _o(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), oi(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === ml || (null !== t && t === ml);
        }
        function ai(e, t) {
          xl = yl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function oi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var li = {
            readContext: No,
            useCallback: kl,
            useContext: kl,
            useEffect: kl,
            useImperativeHandle: kl,
            useInsertionEffect: kl,
            useLayoutEffect: kl,
            useMemo: kl,
            useReducer: kl,
            useRef: kl,
            useState: kl,
            useDebugValue: kl,
            useDeferredValue: kl,
            useTransition: kl,
            useMutableSource: kl,
            useSyncExternalStore: kl,
            useId: kl,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: No,
            useCallback: function (e, t) {
              return (Nl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: No,
            useEffect: Wl,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ml(4194308, 4, ql.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ml(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ml(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Nl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Nl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, ml, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Nl().memoizedState = e);
            },
            useState: Ul,
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return (Nl().memoizedState = e);
            },
            useTransition: function () {
              var e = Ul(!1),
                t = e[0];
              return (
                (e = Zl.bind(null, e[1])), (Nl().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ml,
                a = Nl();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ou)) throw Error(o(349));
                0 !== (30 & hl) || Tl(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Wl(zl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Bl(9, Ll.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Nl(),
                t = Ou.identifierPrefix;
              if (ao) {
                var n = Ja;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - lt(Ya) - 1))).toString(32) + n)),
                  0 < (n = bl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: No,
            useCallback: Yl,
            useContext: No,
            useEffect: Hl,
            useImperativeHandle: Kl,
            useInsertionEffect: $l,
            useLayoutEffect: Ql,
            useMemo: Jl,
            useReducer: _l,
            useRef: Il,
            useState: function () {
              return _l(Pl);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return Xl(Cl(), vl.memoizedState, e);
            },
            useTransition: function () {
              return [_l(Pl)[0], Cl().memoizedState];
            },
            useMutableSource: Rl,
            useSyncExternalStore: Al,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: No,
            useCallback: Yl,
            useContext: No,
            useEffect: Hl,
            useImperativeHandle: Kl,
            useInsertionEffect: $l,
            useLayoutEffect: Ql,
            useMemo: Jl,
            useReducer: Ol,
            useRef: Il,
            useState: function () {
              return Ol(Pl);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              var t = Cl();
              return null === vl
                ? (t.memoizedState = e)
                : Xl(t, vl.memoizedState, e);
            },
            useTransition: function () {
              return [Ol(Pl)[0], Cl().memoizedState];
            },
            useMutableSource: Rl,
            useSyncExternalStore: Al,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += M(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fi(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function di(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map;
        function hi(e, t, n) {
          ((n = Lo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $u || (($u = !0), (Qu = r)), di(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = Lo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                di(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  "function" !== typeof r &&
                    (null === qu ? (qu = new Set([this])) : qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Ns.bind(null, e, t, n)), t.then(e, e));
        }
        function gi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Lo(-1, 1)).tag = 2), zo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var xi = b.ReactCurrentOwner,
          bi = !1;
        function wi(e, t, n, r) {
          t.child = null === e ? Xo(t, null, n, r) : Jo(t, e.child, n, r);
        }
        function ki(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Eo(t, a),
            (r = jl(e, t, n, r, o, a)),
            (n = El()),
            null === e || bi
              ? (ao && n && eo(t), (t.flags |= 1), wi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $i(e, t, a))
          );
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Ts(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zs(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), ji(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(l, r) &&
              e.ref === t.ref
            )
              return $i(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ls(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function ji(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((bi = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $i(e, t, a);
              0 !== (131072 & e.flags) && (bi = !0);
            }
          }
          return Ci(e, t, n, r, a);
        }
        function Ei(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Na(Lu, Tu),
                (Tu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Na(Lu, Tu),
                  (Tu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Na(Lu, Tu),
                (Tu |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Na(Lu, Tu),
              (Tu |= r);
          return wi(e, t, a, n), t.child;
        }
        function Ni(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ci(e, t, n, r, a) {
          var o = Aa(n) ? Oa : Pa.current;
          return (
            (o = Ra(t, o)),
            Eo(t, a),
            (n = jl(e, t, n, r, o, a)),
            (r = El()),
            null === e || bi
              ? (ao && r && eo(t), (t.flags |= 1), wi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $i(e, t, a))
          );
        }
        function Pi(e, t, n, r, a) {
          if (Aa(n)) {
            var o = !0;
            Fa(t);
          } else o = !1;
          if ((Eo(t, a), null === t.stateNode))
            Hi(e, t), Ho(t, n, r), Qo(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var u = l.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = No(s))
              : (s = Ra(t, (s = Aa(n) ? Oa : Pa.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== s) && $o(t, l, r, s)),
              (Ro = !1);
            var d = t.memoizedState;
            (l.state = d),
              Uo(t, r, l, a),
              (u = t.memoizedState),
              i !== r || d !== u || _a.current || Ro
                ? ("function" === typeof c &&
                    (Mo(t, n, c, r), (u = t.memoizedState)),
                  (i = Ro || Wo(t, n, i, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = s),
                  (r = i))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              To(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : go(t.type, i)),
              (l.props = s),
              (f = t.pendingProps),
              (d = l.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = No(u))
                : (u = Ra(t, (u = Aa(n) ? Oa : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== f || d !== u) && $o(t, l, r, u)),
              (Ro = !1),
              (d = t.memoizedState),
              (l.state = d),
              Uo(t, r, l, a);
            var h = t.memoizedState;
            i !== f || d !== h || _a.current || Ro
              ? ("function" === typeof p &&
                  (Mo(t, n, p, r), (h = t.memoizedState)),
                (s = Ro || Wo(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, u),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = u),
                (r = s))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return _i(e, t, n, r, o, a);
        }
        function _i(e, t, n, r, a, o) {
          Ni(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Da(t, n, !1), $i(e, t, o);
          (r = t.stateNode), (xi.current = t);
          var i =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Jo(t, e.child, null, o)),
                (t.child = Jo(t, null, i, o)))
              : wi(e, t, i, o),
            (t.memoizedState = r.state),
            a && Da(t, n, !0),
            t.child
          );
        }
        function Oi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? La(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && La(0, t.context, !1),
            al(e, t.containerInfo);
        }
        function Ri(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), wi(e, t, n, r), t.child;
        }
        var Ai,
          Ti,
          Li,
          zi,
          Fi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Di(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ui(e, t, n) {
          var r,
            a = t.pendingProps,
            l = ul.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Na(ul, 1 & l),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Ds(u, a, 0, null)),
                      (e = Fs(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Di(n)),
                      (t.memoizedState = Fi),
                      e)
                    : Bi(t, u))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ii(e, t, i, (r = fi(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = Ds(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null,
                    )),
                    ((l = Fs(l, a, i, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 !== (1 & t.mode) && Jo(t, e.child, null, i),
                    (t.child.memoizedState = Di(i)),
                    (t.memoizedState = Fi),
                    l);
              if (0 === (1 & t.mode)) return Ii(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ii(e, t, i, (r = fi((l = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), bi || u)) {
                if (null !== (r = Ou)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Oo(e, a), rs(r, e, a, -1));
                }
                return vs(), Ii(e, t, i, (r = fi(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ps.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((qa[Ka++] = Ya),
                    (qa[Ka++] = Ja),
                    (qa[Ka++] = Ga),
                    (Ya = e.id),
                    (Ja = e.overflow),
                    (Ga = t)),
                  (t = Bi(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, l, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (l = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = Ls(l, s)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (i = Ls(r, i))
                : ((i = Fs(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Di(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Fi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Ls(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Bi(e, t) {
          return (
            ((t = Ds(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Ii(e, t, n, r) {
          return (
            null !== r && mo(r),
            Jo(t, e.child, null, n),
            ((e = Bi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Mi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), jo(e.return, t, n);
        }
        function Vi(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Wi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((wi(e, t, r.children, n), 0 !== (2 & (r = ul.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Mi(e, n, t);
                else if (19 === e.tag) Mi(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Na(ul, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === sl(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Vi(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === sl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Vi(t, !0, n, null, o);
                break;
              case "together":
                Vi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $i(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Du |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ls((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ls(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Qi(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ki(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
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
              return qi(t), null;
            case 1:
            case 17:
              return Aa(t.type) && Ta(), qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ol(),
                Ea(_a),
                Ea(Pa),
                fl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (is(oo), (oo = null)))),
                Ti(e, t),
                qi(t),
                null
              );
            case 5:
              il(t);
              var a = rl(nl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Li(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return qi(t), null;
                }
                if (((e = rl(el.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Br("cancel", r), Br("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Br("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < zr.length; a++) Br(zr[a], r);
                      break;
                    case "source":
                      Br("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Br("error", r), Br("load", r);
                      break;
                    case "details":
                      Br("toggle", r);
                      break;
                    case "input":
                      Y(r, l), Br("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Br("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), Br("invalid", r);
                  }
                  for (var u in (ye(n, l), (a = null), l))
                    if (l.hasOwnProperty(u)) {
                      var s = l[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== l.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== l.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Br("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, l, !0);
                      break;
                    case "textarea":
                      Q(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Ai(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = xe(n, r)), n)) {
                      case "dialog":
                        Br("cancel", e), Br("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Br("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < zr.length; a++) Br(zr[a], e);
                        a = r;
                        break;
                      case "source":
                        Br("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Br("error", e), Br("load", e), (a = r);
                        break;
                      case "details":
                        Br("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = G(e, r)), Br("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = D({}, r, { value: void 0 })),
                          Br("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Br("invalid", e);
                    }
                    for (l in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(l)) {
                        var c = s[l];
                        "style" === l
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === l
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != c && "onScroll" === l && Br("scroll", e)
                              : null != c && x(e, l, c, u));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
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
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return qi(t), null;
            case 6:
              if (e && null != t.stateNode) zi(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = rl(nl.current)), rl(el.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return qi(t), null;
            case 13:
              if (
                (Ea(ul),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (l = !1);
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317));
                    l[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  qi(t), (l = !1);
                } else null !== oo && (is(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ul.current)
                        ? 0 === zu && (zu = 3)
                        : vs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qi(t),
                  null);
            case 4:
              return (
                ol(),
                Ti(e, t),
                null === e && Vr(t.stateNode.containerInfo),
                qi(t),
                null
              );
            case 10:
              return So(t.type._context), qi(t), null;
            case 19:
              if ((Ea(ul), null === (l = t.memoizedState))) return qi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = l.rendering)))
                if (r) Qi(l, !1);
                else {
                  if (0 !== zu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = sl(e))) {
                        for (
                          t.flags |= 128,
                            Qi(l, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Na(ul, (1 & ul.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Je() > Wu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Qi(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = sl(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Qi(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return qi(t), null;
                  } else
                    2 * Je() - l.renderingStartTime > Wu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qi(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = l.last) ? (n.sibling = u) : (t.child = u),
                    (l.last = u));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = ul.current),
                  Na(ul, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qi(t), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Tu) &&
                    (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gi(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Aa(t.type) && Ta(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ol(),
                Ea(_a),
                Ea(Pa),
                fl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return il(t), null;
            case 13:
              if (
                (Ea(ul),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(ul), null;
            case 4:
              return ol(), null;
            case 10:
              return So(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (Ai = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ti = function () {}),
          (Li = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), rl(el.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (l = []);
                  break;
                case "select":
                  (a = D({}, a, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? l || (l = [])
                        : (l = l || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          u[o] !== s[o] &&
                          (n || (n = {}), (n[o] = s[o]));
                    } else n || (l || (l = []), l.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (l = l || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (l = l || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Br("scroll", e),
                            l || u === s || (l = []))
                          : (l = l || []).push(c, s));
              }
              n && (l = l || []).push("style", n);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (zi = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yi = !1,
          Ji = !1,
          Xi = "function" === typeof WeakSet ? WeakSet : Set,
          Zi = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Es(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            Es(e, t, r);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
        }
        function hu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Ji || eu(n, t);
            case 6:
              var r = fu,
                a = du;
              (fu = null),
                pu(e, t, n),
                (du = a),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fu.removeChild(n.stateNode));
              break;
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Vt(e))
                  : ua(fu, n.stateNode));
              break;
            case 4:
              (r = fu),
                (a = du),
                (fu = n.stateNode.containerInfo),
                (du = !0),
                pu(e, t, n),
                (fu = r),
                (du = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ji &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tu(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Ji &&
                (eu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  Es(n, t, i);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ji = (r = Ji) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Ji = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function mu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xi()),
              t.forEach(function (t) {
                var r = _s.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(o(160));
                hu(l, i, a), (fu = null), (du = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                Es(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gu(t, e), (t = t.sibling);
        }
        function gu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(t, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (v) {
                  Es(e, e.return, v);
                }
                try {
                  ru(5, e, e.return);
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              break;
            case 1:
              vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (vu(t, e),
                yu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === l.type &&
                      null != l.name &&
                      J(a, l),
                      xe(u, i);
                    var c = xe(u, l);
                    for (i = 0; i < s.length; i += 2) {
                      var f = s[i],
                        d = s[i + 1];
                      "style" === f
                        ? ve(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : x(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        X(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? ne(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (v) {
                    Es(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((vu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (vu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (v) {
                  Es(e, e.return, v);
                }
              break;
            case 4:
            default:
              vu(t, e), yu(e);
              break;
            case 13:
              vu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Vu = Je())),
                4 & r && mu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ji = (c = Ji) || f), vu(t, e), (Ji = c))
                  : vu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zi = e, f = e.child; null !== f; ) {
                    for (d = Zi = f; null !== Zi; ) {
                      switch (((h = (p = Zi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              Es(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ku(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zi = h)) : ku(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", i)));
                      } catch (v) {
                        Es(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (v) {
                        Es(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vu(t, e), yu(e), 4 & r && mu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (iu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cu(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  su(e, uu(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              Es(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function xu(e, t, n) {
          (Zi = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zi; ) {
            var a = Zi,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Yi;
              if (!l) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Ji;
                i = Yi;
                var s = Ji;
                if (((Yi = l), (Ji = u) && !s))
                  for (Zi = a; null !== Zi; )
                    (u = (l = Zi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? Su(a)
                        : null !== u
                        ? ((u.return = l), (Zi = u))
                        : Su(a);
                for (; null !== o; ) (Zi = o), bu(o, t, n), (o = o.sibling);
                (Zi = a), (Yi = i), (Ji = s);
              }
              wu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zi = o))
                : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ji || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ji)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : go(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Bo(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Bo(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Vt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Ji || (512 & t.flags && ou(t));
              } catch (p) {
                Es(t, t.return, p);
              }
            }
            if (t === e) {
              Zi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function ku(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (t === e) {
              Zi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function Su(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    au(4, t);
                  } catch (u) {
                    Es(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Es(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Es(t, o, u);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Es(t, l, u);
                  }
              }
            } catch (u) {
              Es(t, t.return, u);
            }
            if (t === e) {
              Zi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Zi = i);
              break;
            }
            Zi = t.return;
          }
        }
        var ju,
          Eu = Math.ceil,
          Nu = b.ReactCurrentDispatcher,
          Cu = b.ReactCurrentOwner,
          Pu = b.ReactCurrentBatchConfig,
          _u = 0,
          Ou = null,
          Ru = null,
          Au = 0,
          Tu = 0,
          Lu = ja(0),
          zu = 0,
          Fu = null,
          Du = 0,
          Uu = 0,
          Bu = 0,
          Iu = null,
          Mu = null,
          Vu = 0,
          Wu = 1 / 0,
          Hu = null,
          $u = !1,
          Qu = null,
          qu = null,
          Ku = !1,
          Gu = null,
          Yu = 0,
          Ju = 0,
          Xu = null,
          Zu = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & _u) ? Je() : -1 !== Zu ? Zu : (Zu = Je());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _u) && 0 !== Au
            ? Au & -Au
            : null !== vo.transition
            ? (0 === es && (es = mt()), es)
            : 0 !== (e = xt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Ju) throw ((Ju = 0), (Xu = null), Error(o(185)));
          gt(e, n, r),
            (0 !== (2 & _u) && e === Ou) ||
              (e === Ou && (0 === (2 & _u) && (Uu |= n), 4 === zu && us(e, Au)),
              as(e, r),
              1 === n &&
                0 === _u &&
                0 === (1 & t.mode) &&
                ((Wu = Je() + 500), Ba && Va()));
        }
        function as(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                u = a[l];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var r = dt(e, e === Ou ? Au : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ba = !0), Ma(e);
                  })(ss.bind(null, e))
                : Ma(ss.bind(null, e)),
                la(function () {
                  0 === (6 & _u) && Va();
                }),
                (n = null);
            else {
              switch (bt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Os(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Zu = -1), (es = 0), 0 !== (6 & _u))) throw Error(o(327));
          var n = e.callbackNode;
          if (Ss() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ou ? Au : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gs(e, r);
          else {
            t = r;
            var a = _u;
            _u |= 2;
            var l = ms();
            for (
              (Ou === e && Au === t) ||
              ((Hu = null), (Wu = Je() + 500), ps(e, t));
              ;

            )
              try {
                xs();
                break;
              } catch (u) {
                hs(e, u);
              }
            ko(),
              (Nu.current = l),
              (_u = a),
              null !== Ru ? (t = 0) : ((Ou = null), (Au = 0), (t = zu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ls(e, a))),
              1 === t)
            )
              throw ((n = Fu), ps(e, 0), us(e, r), as(e, Je()), n);
            if (6 === t) us(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gs(e, r)) &&
                    0 !== (l = ht(e)) &&
                    ((r = l), (t = ls(e, l))),
                  1 === t))
              )
                throw ((n = Fu), ps(e, 0), us(e, r), as(e, Je()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  ks(e, Mu, Hu);
                  break;
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = Vu + 500 - Je()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ks.bind(null, e, Mu, Hu), t);
                    break;
                  }
                  ks(e, Mu, Hu);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Eu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ks.bind(null, e, Mu, Hu), r);
                    break;
                  }
                  ks(e, Mu, Hu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return as(e, Je()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function ls(e, t) {
          var n = Iu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = gs(e, t)) && ((t = Mu), (Mu = n), null !== t && is(t)),
            e
          );
        }
        function is(e) {
          null === Mu ? (Mu = e) : Mu.push.apply(Mu, e);
        }
        function us(e, t) {
          for (
            t &= ~Bu,
              t &= ~Uu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & _u)) throw Error(o(327));
          Ss();
          var t = dt(e, 0);
          if (0 === (1 & t)) return as(e, Je()), null;
          var n = gs(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ls(e, r)));
          }
          if (1 === n) throw ((n = Fu), ps(e, 0), us(e, t), as(e, Je()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ks(e, Mu, Hu),
            as(e, Je()),
            null
          );
        }
        function cs(e, t) {
          var n = _u;
          _u |= 1;
          try {
            return e(t);
          } finally {
            0 === (_u = n) && ((Wu = Je() + 500), Ba && Va());
          }
        }
        function fs(e) {
          null !== Gu && 0 === Gu.tag && 0 === (6 & _u) && Ss();
          var t = _u;
          _u |= 1;
          var n = Pu.transition,
            r = xt;
          try {
            if (((Pu.transition = null), (xt = 1), e)) return e();
          } finally {
            (xt = r), (Pu.transition = n), 0 === (6 & (_u = t)) && Va();
          }
        }
        function ds() {
          (Tu = Lu.current), Ea(Lu);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ru))
            for (n = Ru.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ta();
                  break;
                case 3:
                  ol(), Ea(_a), Ea(Pa), fl();
                  break;
                case 5:
                  il(r);
                  break;
                case 4:
                  ol();
                  break;
                case 13:
                case 19:
                  Ea(ul);
                  break;
                case 10:
                  So(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              n = n.return;
            }
          if (
            ((Ou = e),
            (Ru = e = Ls(e.current, null)),
            (Au = Tu = t),
            (zu = 0),
            (Fu = null),
            (Bu = Uu = Du = 0),
            (Mu = Iu = null),
            null !== Co)
          ) {
            for (t = 0; t < Co.length; t++)
              if (null !== (r = (n = Co[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                n.pending = r;
              }
            Co = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = Ru;
            try {
              if ((ko(), (dl.current = li), yl)) {
                for (var r = ml.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yl = !1;
              }
              if (
                ((hl = 0),
                (gl = vl = ml = null),
                (xl = !1),
                (bl = 0),
                (Cu.current = null),
                null === n || null === n.return)
              ) {
                (zu = 1), (Fu = t), (Ru = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Au),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      yi(h, i, u, 0, t),
                      1 & h.mode && vi(l, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vi(l, c, t), vs();
                    break e;
                  }
                  s = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var g = gi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yi(g, i, u, 0, t),
                      mo(ci(s, u));
                    break e;
                  }
                }
                (l = s = ci(s, u)),
                  4 !== zu && (zu = 2),
                  null === Iu ? (Iu = [l]) : Iu.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Do(l, hi(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = l.type,
                        x = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== x &&
                            "function" === typeof x.componentDidCatch &&
                            (null === qu || !qu.has(x))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Do(l, mi(l, u, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              ws(n);
            } catch (b) {
              (t = b), Ru === n && null !== n && (Ru = n = n.return);
              continue;
            }
            break;
          }
        }
        function ms() {
          var e = Nu.current;
          return (Nu.current = li), null === e ? li : e;
        }
        function vs() {
          (0 !== zu && 3 !== zu && 2 !== zu) || (zu = 4),
            null === Ou ||
              (0 === (268435455 & Du) && 0 === (268435455 & Uu)) ||
              us(Ou, Au);
        }
        function gs(e, t) {
          var n = _u;
          _u |= 2;
          var r = ms();
          for ((Ou === e && Au === t) || ((Hu = null), ps(e, t)); ; )
            try {
              ys();
              break;
            } catch (a) {
              hs(e, a);
            }
          if ((ko(), (_u = n), (Nu.current = r), null !== Ru))
            throw Error(o(261));
          return (Ou = null), (Au = 0), zu;
        }
        function ys() {
          for (; null !== Ru; ) bs(Ru);
        }
        function xs() {
          for (; null !== Ru && !Ge(); ) bs(Ru);
        }
        function bs(e) {
          var t = ju(e.alternate, e, Tu);
          (e.memoizedProps = e.pendingProps),
            null === t ? ws(e) : (Ru = t),
            (Cu.current = null);
        }
        function ws(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ki(n, t, Tu))) return void (Ru = n);
            } else {
              if (null !== (n = Gi(n, t)))
                return (n.flags &= 32767), void (Ru = n);
              if (null === e) return (zu = 6), void (Ru = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ru = t);
            Ru = t = e;
          } while (null !== t);
          0 === zu && (zu = 5);
        }
        function ks(e, t, n) {
          var r = xt,
            a = Pu.transition;
          try {
            (Pu.transition = null),
              (xt = 1),
              (function (e, t, n, r) {
                do {
                  Ss();
                } while (null !== Gu);
                if (0 !== (6 & _u)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, l),
                  e === Ou && ((Ru = Ou = null), (Au = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ku ||
                    ((Ku = !0),
                    Os(tt, function () {
                      return Ss(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Pu.transition), (Pu.transition = null);
                  var i = xt;
                  xt = 1;
                  var u = _u;
                  (_u |= 4),
                    (Cu.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== l ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = i),
                                    p === l && ++f === r && (s = i),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Zi = t;
                        null !== Zi;

                      )
                        if (
                          ((e = (t = Zi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zi = e);
                        else
                          for (; null !== Zi; ) {
                            t = Zi;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        x = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : go(t.type, v),
                                          g,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = x;
                                    }
                                    break;
                                  case 3:
                                    var b = t.stateNode.containerInfo;
                                    1 === b.nodeType
                                      ? (b.textContent = "")
                                      : 9 === b.nodeType &&
                                        b.documentElement &&
                                        b.removeChild(b.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              Es(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zi = e);
                              break;
                            }
                            Zi = t.return;
                          }
                      (m = nu), (nu = !1);
                    })(e, n),
                    gu(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    xu(n, e, a),
                    Ye(),
                    (_u = u),
                    (xt = i),
                    (Pu.transition = l);
                } else e.current = n;
                if (
                  (Ku && ((Ku = !1), (Gu = e), (Yu = a)),
                  (l = e.pendingLanes),
                  0 === l && (qu = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  as(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($u) throw (($u = !1), (e = Qu), (Qu = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && Ss(),
                  (l = e.pendingLanes),
                  0 !== (1 & l)
                    ? e === Xu
                      ? Ju++
                      : ((Ju = 0), (Xu = e))
                    : (Ju = 0),
                  Va();
              })(e, t, n, r);
          } finally {
            (Pu.transition = a), (xt = r);
          }
          return null;
        }
        function Ss() {
          if (null !== Gu) {
            var e = bt(Yu),
              t = Pu.transition,
              n = xt;
            try {
              if (((Pu.transition = null), (xt = 16 > e ? 16 : e), null === Gu))
                var r = !1;
              else {
                if (((e = Gu), (Gu = null), (Yu = 0), 0 !== (6 & _u)))
                  throw Error(o(331));
                var a = _u;
                for (_u |= 4, Zi = e.current; null !== Zi; ) {
                  var l = Zi,
                    i = l.child;
                  if (0 !== (16 & Zi.flags)) {
                    var u = l.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Zi = c; null !== Zi; ) {
                          var f = Zi;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, l);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zi = d);
                          else
                            for (; null !== Zi; ) {
                              var p = (f = Zi).sibling,
                                h = f.return;
                              if ((lu(f), f === c)) {
                                Zi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zi = p);
                                break;
                              }
                              Zi = h;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Zi = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Zi = i);
                  else
                    e: for (; null !== Zi; ) {
                      if (0 !== (2048 & (l = Zi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, l, l.return);
                        }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (Zi = y);
                        break e;
                      }
                      Zi = l.return;
                    }
                }
                var x = e.current;
                for (Zi = x; null !== Zi; ) {
                  var b = (i = Zi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== b)
                    (b.return = i), (Zi = b);
                  else
                    e: for (i = x; null !== Zi; ) {
                      if (0 !== (2048 & (u = Zi).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (k) {
                          Es(u, u.return, k);
                        }
                      if (u === i) {
                        Zi = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Zi = w);
                        break e;
                      }
                      Zi = u.return;
                    }
                }
                if (
                  ((_u = a),
                  Va(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (xt = n), (Pu.transition = t);
            }
          }
          return !1;
        }
        function js(e, t, n) {
          (e = zo(e, (t = hi(0, (t = ci(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (gt(e, 1, t), as(e, t));
        }
        function Es(e, t, n) {
          if (3 === e.tag) js(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                js(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qu || !qu.has(r)))
                ) {
                  (t = zo(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (gt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ns(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ou === e &&
              (Au & n) === n &&
              (4 === zu ||
              (3 === zu && (130023424 & Au) === Au && 500 > Je() - Vu)
                ? ps(e, 0)
                : (Bu |= n)),
            as(e, t);
        }
        function Cs(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Oo(e, t)) && (gt(e, t, n), as(e, n));
        }
        function Ps(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cs(e, n);
        }
        function _s(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Cs(e, n);
        }
        function Os(e, t) {
          return qe(e, t);
        }
        function Rs(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function As(e, t, n, r) {
          return new Rs(e, t, n, r);
        }
        function Ts(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ls(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = As(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zs(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Ts(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case S:
                return Fs(n.children, a, l, t);
              case j:
                (i = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = As(12, n, t, 2 | a)).elementType = E), (e.lanes = l), e
                );
              case _:
                return (
                  ((e = As(13, n, t, a)).elementType = _), (e.lanes = l), e
                );
              case O:
                return (
                  ((e = As(19, n, t, a)).elementType = O), (e.lanes = l), e
                );
              case T:
                return Ds(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      i = 10;
                      break e;
                    case C:
                      i = 9;
                      break e;
                    case P:
                      i = 11;
                      break e;
                    case R:
                      i = 14;
                      break e;
                    case A:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = As(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Fs(e, t, n, r) {
          return ((e = As(7, e, r, t)).lanes = n), e;
        }
        function Ds(e, t, n, r) {
          return (
            ((e = As(22, e, r, t)).elementType = T),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Us(e, t, n) {
          return ((e = As(6, e, null, t)).lanes = n), e;
        }
        function Bs(e, t, n) {
          return (
            ((t = As(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Is(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ms(e, t, n, r, a, o, l, i, u) {
          return (
            (e = new Is(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = As(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ao(o),
            e
          );
        }
        function Vs(e) {
          if (!e) return Ca;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Aa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Aa(n)) return za(e, n, t);
          }
          return t;
        }
        function Ws(e, t, n, r, a, o, l, i, u) {
          return (
            ((e = Ms(n, r, !0, e, 0, o, 0, i, u)).context = Vs(null)),
            (n = e.current),
            ((o = Lo((r = ts()), (a = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            zo(n, o, a),
            (e.current.lanes = a),
            gt(e, a, r),
            as(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var a = t.current,
            o = ts(),
            l = ns(a);
          return (
            (n = Vs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Lo(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = zo(a, t, l)) && (rs(e, a, l, o), Fo(e, a, l)),
            l
          );
        }
        function $s(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qs(e, t) {
          Qs(e, t), (e = e.alternate) && Qs(e, t);
        }
        ju = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || _a.current) bi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Oi(t), ho();
                        break;
                      case 5:
                        ll(t);
                        break;
                      case 1:
                        Aa(t.type) && Fa(t);
                        break;
                      case 4:
                        al(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Na(yo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na(ul, 1 & ul.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ui(e, t, n)
                            : (Na(ul, 1 & ul.current),
                              null !== (e = $i(e, t, n)) ? e.sibling : null);
                        Na(ul, 1 & ul.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Na(ul, ul.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ei(e, t, n);
                    }
                    return $i(e, t, n);
                  })(e, t, n)
                );
              bi = 0 !== (131072 & e.flags);
            }
          else (bi = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hi(e, t), (e = t.pendingProps);
              var a = Ra(t, Pa.current);
              Eo(t, n), (a = jl(null, t, r, e, a, n));
              var l = El();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Aa(r) ? ((l = !0), Fa(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ao(t),
                    (a.updater = Vo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Qo(t, r, e, n),
                    (t = _i(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    ao && l && eo(t),
                    wi(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ts(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === R) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = go(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ci(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Pi(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ki(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Si(null, t, r, go(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ci(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pi(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 3:
              e: {
                if ((Oi(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  To(e, t),
                  Uo(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Ri(e, t, r, n, (a = ci(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ri(e, t, r, n, (a = ci(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Xo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = $i(e, t, n);
                    break e;
                  }
                  wi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ll(t),
                null === e && so(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                Ni(e, t),
                wi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return Ui(e, t, n);
            case 4:
              return (
                al(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Jo(t, null, r, n)) : wi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ki(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 7:
              return wi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  Na(yo, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !_a.current) {
                      t = $i(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var u = l.dependencies;
                      if (null !== u) {
                        i = l.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === l.tag) {
                              (s = Lo(-1, n & -n)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (l.lanes |= n),
                              null !== (s = l.alternate) && (s.lanes |= n),
                              jo(l.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          jo(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                wi(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Eo(t, n),
                (r = r((a = No(a)))),
                (t.flags |= 1),
                wi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = go((r = t.type), t.pendingProps)),
                Si(e, t, r, (a = go(r.type, a)), n)
              );
            case 15:
              return ji(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : go(r, a)),
                Hi(e, t),
                (t.tag = 1),
                Aa(r) ? ((e = !0), Fa(t)) : (e = !1),
                Eo(t, n),
                Ho(t, r, a),
                Qo(t, r, a, n),
                _i(null, t, r, !0, e, n)
              );
            case 19:
              return Wi(e, t, n);
            case 22:
              return Ei(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Ks =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gs(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Js(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zs() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = $s(l);
                i.call(e);
              };
            }
            Hs(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = $s(l);
                    o.call(e);
                  };
                }
                var l = Ws(t, r, e, 0, null, !1, 0, "", Zs);
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = $s(u);
                  i.call(e);
                };
              }
              var u = Ms(e, 0, !1, null, 0, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  Hs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return $s(l);
        }
        (Ys.prototype.render = Gs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hs(e, t, null, null);
          }),
          (Ys.prototype.unmount = Gs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fs(function () {
                  Hs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = jt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Tt.length && 0 !== t && t < Tt[n].priority;
                n++
              );
              Tt.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    as(t, Je()),
                    0 === (6 & _u) && ((Wu = Je() + 500), Va()));
                }
                break;
              case 13:
                fs(function () {
                  var t = Oo(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Oo(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              qs(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Oo(e, t);
              if (null !== n) rs(n, e, t, ts());
              qs(e, t);
            }
          }),
          (jt = function () {
            return xt;
          }),
          (Et = function (e, t) {
            var n = xt;
            try {
              return (xt = e), t();
            } finally {
              xt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(o(90));
                      q(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = cs),
          (_e = fs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [xa, ba, wa, Ne, Ce, cs],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: b.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Js(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Js(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Ks;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Ms(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Gs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Js(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              i = Ks;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Ws(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[ha] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xs(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (fs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xs(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      575: function (e, t, n) {
        var r = n(456);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      456: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(459));
      },
      858: function (e, t, n) {
        var r = n(233),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: i.current,
          };
        }
        (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
      },
      458: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function x(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var b = (x.prototype = new y());
        (b.constructor = x), m(b, g.prototype), (b.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          j = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              k.call(t, a) && !j.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: S.current,
          };
        }
        function N(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function _(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = "" === o ? "." + P(u, 0) : o),
              w(l)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  _(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (N(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (u && u.key === l.key)
                          ? ""
                          : ("" + l.key).replace(C, "$&/") + "/") +
                        e,
                    )),
                  t.push(l)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + P((i = e[s]), s);
              u += _(i, t, a, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += _((i = i.value), t, a, (c = o + P(i, s++)), l);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return u;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            _(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var A = { current: null },
          T = { transition: null },
          L = {
            ReactCurrentDispatcher: A,
            ReactCurrentBatchConfig: T,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = x),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var a = m({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !j.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: R,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = T.transition;
            T.transition = {};
            try {
              e();
            } finally {
              T.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React.",
            );
          }),
          (t.useCallback = function (e, t) {
            return A.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return A.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return A.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return A.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return A.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return A.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return A.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return A.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return A.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return A.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return A.current.useRef(e);
          }),
          (t.useState = function (e) {
            return A.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return A.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return A.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      233: function (e, t, n) {
        e.exports = n(458);
      },
      881: function (e, t, n) {
        e.exports = n(858);
      },
      427: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > o(u, n))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          x = "undefined" !== typeof setImmediate ? setImmediate : null;
        function b(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((v = !1), b(e), !m))
            if (null !== r(s)) (m = !0), T(k);
            else {
              var t = r(c);
              null !== t && L(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), v && ((v = !1), y(N), (N = -1)), (h = !0);
          var o = p;
          try {
            for (
              b(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !_()));

            ) {
              var l = d.callback;
              if ("function" === typeof l) {
                (d.callback = null), (p = d.priorityLevel);
                var i = l(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(s) && a(s),
                  b(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && L(w, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          j = !1,
          E = null,
          N = -1,
          C = 5,
          P = -1;
        function _() {
          return !(t.unstable_now() - P < C);
        }
        function O() {
          if (null !== E) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? S() : ((j = !1), (E = null));
            }
          } else j = !1;
        }
        if ("function" === typeof x)
          S = function () {
            x(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var R = new MessageChannel(),
            A = R.port2;
          (R.port1.onmessage = O),
            (S = function () {
              A.postMessage(null);
            });
        } else
          S = function () {
            g(O, 0);
          };
        function T(e) {
          (E = e), j || ((j = !0), S());
        }
        function L(e, n) {
          N = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), T(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (y(N), (N = -1)) : (v = !0), L(w, o - l)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), T(k))),
              e
            );
          }),
          (t.unstable_shouldYield = _),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      674: function (e, t, n) {
        e.exports = n(427);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  !(function () {
    var e,
      t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e);
          }
        : function (e) {
            return e.__proto__;
          };
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var o = Object.create(null);
      n.r(o);
      var l = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var i = 2 & a && r; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach(function (e) {
          l[e] = function () {
            return r[e];
          };
        });
      return (
        (l.default = function () {
          return r;
        }),
        n.d(o, l),
        o
      );
    };
  })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e,
        t = n(233),
        r = n.t(t, 2),
        a = n(575);
      function o(e) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          o(e)
        );
      }
      function l(e) {
        var t = (function (e, t) {
          if ("object" !== o(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== o(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      function i(e, t, n) {
        return (
          (t = l(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function c(e) {
        if (Array.isArray(e)) return e;
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function d(e, t) {
        if (e) {
          if ("string" === typeof e) return f(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? f(e, t)
              : void 0
          );
        }
      }
      function p() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function h(e, t) {
        return (
          c(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                l,
                i = [],
                u = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (i.push(r.value), i.length !== t);
                    u = !0
                  );
              } catch (c) {
                (s = !0), (a = c);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((l = n.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          d(e, t) ||
          p()
        );
      }
      function m(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function v(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return f(e);
          })(e) ||
          m(e) ||
          d(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function g(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, l(r.key), r);
        }
      }
      function x(e, t, n) {
        return (
          t && y(e.prototype, t),
          n && y(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function b(e, t) {
        return (
          (b = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          b(e, t)
        );
      }
      function w(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && b(e, t);
      }
      function k(e) {
        return (
          (k = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          k(e)
        );
      }
      function S() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function j(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function E(e) {
        var t = S();
        return function () {
          var n,
            r = k(e);
          if (t) {
            var a = k(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === o(t) || "function" === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return j(e);
          })(this, n);
        };
      }
      function N(e, t, n) {
        return (
          (N = S()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && b(a, n.prototype), a;
              }),
          N.apply(null, arguments)
        );
      }
      function C(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (C = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return N(e, arguments, k(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              b(r, e)
            );
          }),
          C(e)
        );
      }
      function P(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = d(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var o,
          l = !0,
          i = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (i = !0), (o = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (i) throw o;
            }
          },
        };
      }
      function _() {
        return (
          (_ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          _.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var O,
        R = "popstate";
      function A(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function T(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function L(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function z(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          _(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? D(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        );
      }
      function F(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          l = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          l && "#" !== l && (n += "#" === l.charAt(0) ? l : "#" + l),
          n
        );
      }
      function D(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function U(t, n, r, a) {
        void 0 === a && (a = {});
        var o = a,
          l = o.window,
          i = void 0 === l ? document.defaultView : l,
          u = o.v5Compat,
          s = void 0 !== u && u,
          c = i.history,
          f = e.Pop,
          d = null,
          p = h();
        function h() {
          return (c.state || { idx: null }).idx;
        }
        function m() {
          f = e.Pop;
          var t = h(),
            n = null == t ? null : t - p;
          (p = t), d && d({ action: f, location: g.location, delta: n });
        }
        function v(e) {
          var t =
              "null" !== i.location.origin
                ? i.location.origin
                : i.location.href,
            n = "string" === typeof e ? e : F(e);
          return (
            A(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n,
            ),
            new URL(n, t)
          );
        }
        null == p && ((p = 0), c.replaceState(_({}, c.state, { idx: p }), ""));
        var g = {
          get action() {
            return f;
          },
          get location() {
            return t(i, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              i.addEventListener(R, m),
              (d = e),
              function () {
                i.removeEventListener(R, m), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(i, e);
          },
          createURL: v,
          encodeLocation: function (e) {
            var t = v(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var a = z(g.location, t, n);
            r && r(a, t);
            var o = L(a, (p = h() + 1)),
              l = g.createHref(a);
            try {
              c.pushState(o, "", l);
            } catch (u) {
              if (u instanceof DOMException && "DataCloneError" === u.name)
                throw u;
              i.location.assign(l);
            }
            s && d && d({ action: f, location: g.location, delta: 1 });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = z(g.location, t, n);
            r && r(a, t);
            var o = L(a, (p = h())),
              l = g.createHref(a);
            c.replaceState(o, "", l),
              s && d && d({ action: f, location: g.location, delta: 0 });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return g;
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(O || (O = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function B(e, t, n) {
        void 0 === n && (n = "/");
        var r = Z(("string" === typeof t ? D(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = I(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                );
          });
        })(a);
        for (var o = null, l = 0; null == o && l < a.length; ++l)
          o = Y(a[l], X(r));
        return o;
      }
      function I(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, o) {
          var l = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          l.relativePath.startsWith("/") &&
            (A(
              l.relativePath.startsWith(r),
              'Absolute route path "' +
                l.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
          var i = re([r, l.relativePath]),
            u = n.concat(l);
          e.children &&
            e.children.length > 0 &&
            (A(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                i +
                '".',
            ),
            I(e.children, t, u, i)),
            (null != e.path || e.index) &&
              t.push({ path: i, score: G(i, e.index), routesMeta: u });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                o = P(M(e.path));
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var l = r.value;
                  a(e, t, l);
                }
              } catch (i) {
                o.e(i);
              } finally {
                o.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function M(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = c((n = t)) || m(n) || d(n) || p(),
          a = r[0],
          o = r.slice(1),
          l = a.endsWith("?"),
          i = a.replace(/\?$/, "");
        if (0 === o.length) return l ? [i, ""] : [i];
        var u = M(o.join("/")),
          s = [];
        return (
          s.push.apply(
            s,
            v(
              u.map(function (e) {
                return "" === e ? i : [i, e].join("/");
              }),
            ),
          ),
          l && s.push.apply(s, v(u)),
          s.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      var V = /^:\w+$/,
        W = 3,
        H = 2,
        $ = 1,
        Q = 10,
        q = -2,
        K = function (e) {
          return "*" === e;
        };
      function G(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(K) && (r += q),
          t && (r += H),
          n
            .filter(function (e) {
              return !K(e);
            })
            .reduce(function (e, t) {
              return e + (V.test(t) ? W : "" === t ? $ : Q);
            }, r)
        );
      }
      function Y(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], l = 0;
          l < n.length;
          ++l
        ) {
          var i = n[l],
            u = l === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = J(
              { path: i.relativePath, caseSensitive: i.caseSensitive, end: u },
              s,
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = i.route;
          o.push({
            params: r,
            pathname: re([a, c.pathname]),
            pathnameBase: ae(re([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = re([a, c.pathnameBase]));
        }
        return o;
      }
      function J(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            T(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".',
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          r = h(n, 2),
          a = r[0],
          o = r[1],
          l = t.match(a);
        if (!l) return null;
        var i = l[0],
          u = i.replace(/(.)\/+$/, "$1"),
          s = l.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = s[n] || "";
              u = i.slice(0, i.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    T(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ").",
                    ),
                    e
                  );
                }
              })(s[n] || "", t)),
              e
            );
          }, {}),
          pathname: i,
          pathnameBase: u,
          pattern: e,
        };
      }
      function X(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            T(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ").",
            ),
            e
          );
        }
      }
      function Z(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function ee(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function te(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function ne(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = D(e))
            : (A(
                !(a = _({}, e)).pathname || !a.pathname.includes("?"),
                ee("?", "pathname", "search", a),
              ),
              A(
                !a.pathname || !a.pathname.includes("#"),
                ee("#", "pathname", "hash", a),
              ),
              A(
                !a.search || !a.search.includes("#"),
                ee("#", "search", "hash", a),
              ));
        var o,
          l = "" === e || "" === a.pathname,
          i = l ? "/" : a.pathname;
        if (r || null == i) o = n;
        else {
          var u = t.length - 1;
          if (i.startsWith("..")) {
            for (var s = i.split("/"); ".." === s[0]; ) s.shift(), (u -= 1);
            a.pathname = s.join("/");
          }
          o = u >= 0 ? t[u] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? D(e) : e,
              r = n.pathname,
              a = n.search,
              o = void 0 === a ? "" : a,
              l = n.hash,
              i = void 0 === l ? "" : l,
              u = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: u, search: oe(o), hash: le(i) };
          })(a, o),
          f = i && "/" !== i && i.endsWith("/"),
          d = (l || "." === i) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var re = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        ae = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        oe = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        le = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        ie = (function (e) {
          w(n, e);
          var t = E(n);
          function n() {
            return g(this, n), t.apply(this, arguments);
          }
          return x(n);
        })(C(Error));
      function ue(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var se = ["post", "put", "patch", "delete"],
        ce = (new Set(se), ["get"].concat(se));
      new Set(ce), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function fe() {
        return (
          (fe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          fe.apply(this, arguments)
        );
      }
      var de = t.createContext(null);
      var pe = t.createContext(null);
      var he = t.createContext(null);
      var me = t.createContext(null);
      var ve = t.createContext(null);
      var ge = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      var ye = t.createContext(null);
      function xe() {
        return null != t.useContext(ve);
      }
      function be() {
        return xe() || A(!1), t.useContext(ve).location;
      }
      function we(e) {
        t.useContext(me).static || t.useLayoutEffect(e);
      }
      function ke() {
        return t.useContext(ge).isDataRoute
          ? (function () {
              var e = Re(Ee.UseNavigateStable).router,
                n = Te(Ne.UseNavigateStable),
                r = t.useRef(!1);
              return (
                we(function () {
                  r.current = !0;
                }),
                t.useCallback(
                  function (t, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" === typeof t
                          ? e.navigate(t)
                          : e.navigate(t, fe({ fromRouteId: n }, a)));
                  },
                  [e, n],
                )
              );
            })()
          : (function () {
              xe() || A(!1);
              var e = t.useContext(de),
                n = t.useContext(me),
                r = n.basename,
                a = n.navigator,
                o = t.useContext(ge).matches,
                l = be().pathname,
                i = JSON.stringify(
                  te(o).map(function (e) {
                    return e.pathnameBase;
                  }),
                ),
                u = t.useRef(!1);
              return (
                we(function () {
                  u.current = !0;
                }),
                t.useCallback(
                  function (t, n) {
                    if ((void 0 === n && (n = {}), u.current))
                      if ("number" !== typeof t) {
                        var o = ne(t, JSON.parse(i), l, "path" === n.relative);
                        null == e &&
                          "/" !== r &&
                          (o.pathname =
                            "/" === o.pathname ? r : re([r, o.pathname])),
                          (n.replace ? a.replace : a.push)(o, n.state, n);
                      } else a.go(t);
                  },
                  [r, a, i, l, e],
                )
              );
            })();
      }
      function Se(n, r, a) {
        xe() || A(!1);
        var o,
          l = t.useContext(me).navigator,
          i = t.useContext(ge).matches,
          u = i[i.length - 1],
          s = u ? u.params : {},
          c = (u && u.pathname, u ? u.pathnameBase : "/"),
          f = (u && u.route, be());
        if (r) {
          var d,
            p = "string" === typeof r ? D(r) : r;
          "/" === c ||
            (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
            A(!1),
            (o = p);
        } else o = f;
        var h = o.pathname || "/",
          m = B(n, { pathname: "/" === c ? h : h.slice(c.length) || "/" });
        var v = Oe(
          m &&
            m.map(function (e) {
              return Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: re([
                  c,
                  l.encodeLocation
                    ? l.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? c
                    : re([
                        c,
                        l.encodeLocation
                          ? l.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              });
            }),
          i,
          a,
        );
        return r && v
          ? t.createElement(
              ve.Provider,
              {
                value: {
                  location: fe(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    o,
                  ),
                  navigationType: e.Pop,
                },
              },
              v,
            )
          : v;
      }
      function je() {
        var e = (function () {
            var e,
              n = t.useContext(ye),
              r = Ae(Ne.UseRouteError),
              a = Te(Ne.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = ue(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          null,
        );
      }
      var Ee,
        Ne,
        Ce = t.createElement(je, null),
        Pe = (function (e) {
          w(r, e);
          var n = E(r);
          function r(e) {
            var t;
            return (
              g(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error,
              }),
              t
            );
          }
          return (
            x(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t,
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          ge.Provider,
                          { value: this.props.routeContext },
                          t.createElement(ye.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          }),
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location ||
                      ("idle" !== t.revalidation && "idle" === e.revalidation)
                      ? {
                          error: e.error,
                          location: e.location,
                          revalidation: e.revalidation,
                        }
                      : {
                          error: e.error || t.error,
                          location: t.location,
                          revalidation: e.revalidation || t.revalidation,
                        };
                  },
                },
              ],
            ),
            r
          );
        })(t.Component);
      function _e(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          o = t.useContext(de);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(ge.Provider, { value: n }, a)
        );
      }
      function Oe(e, n, r) {
        var a;
        if ((void 0 === n && (n = []), void 0 === r && (r = null), null == e)) {
          var o;
          if (null == (o = r) || !o.errors) return null;
          e = r.matches;
        }
        var l = e,
          i = null == (a = r) ? void 0 : a.errors;
        if (null != i) {
          var u = l.findIndex(function (e) {
            return e.route.id && (null == i ? void 0 : i[e.route.id]);
          });
          u >= 0 || A(!1), (l = l.slice(0, Math.min(l.length, u + 1)));
        }
        return l.reduceRight(function (e, a, o) {
          var u = a.route.id ? (null == i ? void 0 : i[a.route.id]) : null,
            s = null;
          r && (s = a.route.errorElement || Ce);
          var c = n.concat(l.slice(0, o + 1)),
            f = function () {
              var n;
              return (
                (n = u
                  ? s
                  : a.route.Component
                  ? t.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : e),
                t.createElement(_e, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: c,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? t.createElement(Pe, {
                location: r.location,
                revalidation: r.revalidation,
                component: s,
                error: u,
                children: f(),
                routeContext: { outlet: null, matches: c, isDataRoute: !0 },
              })
            : f();
        }, null);
      }
      function Re(e) {
        var n = t.useContext(de);
        return n || A(!1), n;
      }
      function Ae(e) {
        var n = t.useContext(pe);
        return n || A(!1), n;
      }
      function Te(e) {
        var n = (function (e) {
            var n = t.useContext(ge);
            return n || A(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || A(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"),
          (e.UseRevalidator = "useRevalidator"),
          (e.UseNavigateStable = "useNavigate");
      })(Ee || (Ee = {})),
        (function (e) {
          (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId");
        })(Ne || (Ne = {}));
      var Le;
      r.startTransition;
      function ze(e) {
        var n = e.to,
          r = e.replace,
          a = e.state,
          o = e.relative;
        xe() || A(!1);
        var l = t.useContext(ge).matches,
          i = be().pathname,
          u = ke(),
          s = ne(
            n,
            te(l).map(function (e) {
              return e.pathnameBase;
            }),
            i,
            "path" === o,
          ),
          c = JSON.stringify(s);
        return (
          t.useEffect(
            function () {
              return u(JSON.parse(c), { replace: r, state: a, relative: o });
            },
            [u, c, o, r, a],
          ),
          null
        );
      }
      function Fe(e) {
        A(!1);
      }
      function De(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          o = n.children,
          l = void 0 === o ? null : o,
          i = n.location,
          u = n.navigationType,
          s = void 0 === u ? e.Pop : u,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        xe() && A(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d],
          );
        "string" === typeof i && (i = D(i));
        var m = i,
          v = m.pathname,
          g = void 0 === v ? "/" : v,
          y = m.search,
          x = void 0 === y ? "" : y,
          b = m.hash,
          w = void 0 === b ? "" : b,
          k = m.state,
          S = void 0 === k ? null : k,
          j = m.key,
          E = void 0 === j ? "default" : j,
          N = t.useMemo(
            function () {
              var e = Z(g, p);
              return null == e
                ? null
                : {
                    location: {
                      pathname: e,
                      search: x,
                      hash: w,
                      state: S,
                      key: E,
                    },
                    navigationType: s,
                  };
            },
            [p, g, x, w, S, E, s],
          );
        return null == N
          ? null
          : t.createElement(
              me.Provider,
              { value: h },
              t.createElement(ve.Provider, { children: l, value: N }),
            );
      }
      function Ue(e) {
        var t = e.children,
          n = e.location;
        return Se(Ie(t), n);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Le || (Le = {}));
      var Be = new Promise(function () {});
      t.Component;
      function Ie(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e)) {
              var o = [].concat(v(n), [a]);
              if (e.type !== t.Fragment) {
                e.type !== Fe && A(!1),
                  e.props.index && e.props.children && A(!1);
                var l = {
                  id: e.props.id || o.join("-"),
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  Component: e.props.Component,
                  index: e.props.index,
                  path: e.props.path,
                  loader: e.props.loader,
                  action: e.props.action,
                  errorElement: e.props.errorElement,
                  ErrorBoundary: e.props.ErrorBoundary,
                  hasErrorBoundary:
                    null != e.props.ErrorBoundary ||
                    null != e.props.errorElement,
                  shouldRevalidate: e.props.shouldRevalidate,
                  handle: e.props.handle,
                  lazy: e.props.lazy,
                };
                e.props.children && (l.children = Ie(e.props.children, o)),
                  r.push(l);
              } else r.push.apply(r, Ie(e.props.children, o));
            }
          }),
          r
        );
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      var Me = r.startTransition;
      function Ve(e) {
        var n,
          r = e.basename,
          a = e.children,
          o = e.future,
          l = e.window,
          i = t.useRef();
        null == i.current &&
          (i.current =
            (void 0 === (n = { window: l, v5Compat: !0 }) && (n = {}),
            U(
              function (e, t) {
                var n = e.location;
                return z(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default",
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : F(t);
              },
              null,
              n,
            )));
        var u = i.current,
          s = h(t.useState({ action: u.action, location: u.location }), 2),
          c = s[0],
          f = s[1],
          d = (o || {}).v7_startTransition,
          p = t.useCallback(
            function (e) {
              d && Me
                ? Me(function () {
                    return f(e);
                  })
                : f(e);
            },
            [f, d],
          );
        return (
          t.useLayoutEffect(
            function () {
              return u.listen(p);
            },
            [u, p],
          ),
          t.createElement(De, {
            basename: r,
            children: a,
            location: c.location,
            navigationType: c.action,
            navigator: u,
          })
        );
      }
      "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        window.document.createElement;
      var We, He;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher");
      })(We || (We = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(He || (He = {}));
      var $e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA9SURBVHgB7dHBDQAgCEPRwiTuwP6zyCY1TmATvBh5V0gv3yJiAhioSSeJqhsbP7Cu9iBTnoSy6RCcquz7AtB8GWB8huBZAAAAAElFTkSuQmCC",
        Qe =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADGSURBVHgB7ZTRDcMgDEQNLEI3QGKCTJ4JkNigLAIUV1SKkA1uPpP4B+Lk7kn4AsBTly9FNb33b1xzzluMMc0MnHPWGLPjPoTwGt9rSlRrxeUrRANYm9uuARGglLI1QZpBBvOEGsqLPKKfgdZ6V0rZ9piOx0WZc0fJAjgI9qXmSwAF6W2RuQhAQEBqjqVBWM2c3C91qw/GgXaAhWHwpwBcFLl0/QWYRXEWYRFAknMphByyJOfYG/94you9iyRRPEK4u+ipG9QHri3fDlYivy0AAAAASUVORK5CYII=";
      function qe() {
        qe = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          l = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function s(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (_) {
          s = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            l = Object.create(o.prototype),
            i = new N(a || []);
          return r(l, "_invoke", { value: k(e, n, i) }), l;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (_) {
            return { type: "throw", arg: _ };
          }
        }
        e.wrap = c;
        var d = {};
        function p() {}
        function h() {}
        function m() {}
        var v = {};
        s(v, l, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          y = g && g(g(C([])));
        y && y !== t && n.call(y, l) && (v = y);
        var x = (m.prototype = p.prototype = Object.create(v));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          function a(r, l, i, u) {
            var s = f(e[r], e, l);
            if ("throw" !== s.type) {
              var c = s.arg,
                d = c.value;
              return d && "object" == o(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      a("next", e, i, u);
                    },
                    function (e) {
                      a("throw", e, i, u);
                    },
                  )
                : t.resolve(d).then(
                    function (e) {
                      (c.value = e), i(c);
                    },
                    function (e) {
                      return a("throw", e, i, u);
                    },
                  );
            }
            u(s.arg);
          }
          var l;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (l = l ? l.then(r, r) : r());
            },
          });
        }
        function k(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return P();
            }
            for (n.method = a, n.arg = o; ; ) {
              var l = n.delegate;
              if (l) {
                var i = S(l, n);
                if (i) {
                  if (i === d) continue;
                  return i;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = f(e, t, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === d)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function S(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                S(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              d
            );
          var a = f(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function j(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(j, this),
            this.reset(!0);
        }
        function C(e) {
          if (e) {
            var t = e[l];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: P };
        }
        function P() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(x, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = s(m, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(x)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(w.prototype),
          s(w.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var l = new w(c(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? l
              : l.next().then(function (e) {
                  return e.done ? e.value : l.next();
                });
          }),
          b(x),
          s(x, u, "Generator"),
          s(x, l, function () {
            return this;
          }),
          s(x, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = C),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (l.type = "throw"),
                  (l.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  l = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var i = n.call(o, "catchLoc"),
                    u = n.call(o, "finallyLoc");
                  if (i && u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var l = o ? o.completion : {};
              return (
                (l.type = e),
                (l.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                  : this.complete(l)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), E(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    E(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: C(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function Ke(e, t, n, r, a, o, l) {
        try {
          var i = e[o](l),
            u = i.value;
        } catch (s) {
          return void n(s);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function Ge(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function l(e) {
              Ke(o, r, a, l, i, "next", e);
            }
            function i(e) {
              Ke(o, r, a, l, i, "throw", e);
            }
            l(void 0);
          });
        };
      }
      function Ye(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var Je,
        Xe = Object.prototype.toString,
        Ze = Object.getPrototypeOf,
        et =
          ((Je = Object.create(null)),
          function (e) {
            var t = Xe.call(e);
            return Je[t] || (Je[t] = t.slice(8, -1).toLowerCase());
          }),
        tt = function (e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return et(t) === e;
            }
          );
        },
        nt = function (e) {
          return function (t) {
            return typeof t === e;
          };
        },
        rt = Array.isArray,
        at = nt("undefined");
      var ot = tt("ArrayBuffer");
      var lt = nt("string"),
        it = nt("function"),
        ut = nt("number"),
        st = function (e) {
          return null !== e && "object" === typeof e;
        },
        ct = function (e) {
          if ("object" !== et(e)) return !1;
          var t = Ze(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        ft = tt("Date"),
        dt = tt("File"),
        pt = tt("Blob"),
        ht = tt("FileList"),
        mt = tt("URLSearchParams");
      function vt(e, t) {
        var n,
          r,
          a = (
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          ).allOwnKeys,
          o = void 0 !== a && a;
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), rt(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            var l,
              i = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
              u = i.length;
            for (n = 0; n < u; n++) (l = i[n]), t.call(null, e[l], l, e);
          }
      }
      function gt(e, t) {
        t = t.toLowerCase();
        for (var n, r = Object.keys(e), a = r.length; a-- > 0; )
          if (t === (n = r[a]).toLowerCase()) return n;
        return null;
      }
      var yt =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        xt = function (e) {
          return !at(e) && e !== yt;
        };
      var bt,
        wt =
          ((bt = "undefined" !== typeof Uint8Array && Ze(Uint8Array)),
          function (e) {
            return bt && e instanceof bt;
          }),
        kt = tt("HTMLFormElement"),
        St = (function (e) {
          var t = Object.prototype.hasOwnProperty;
          return function (e, n) {
            return t.call(e, n);
          };
        })(),
        jt = tt("RegExp"),
        Et = function (e, t) {
          var n = Object.getOwnPropertyDescriptors(e),
            r = {};
          vt(n, function (n, a) {
            !1 !== t(n, a, e) && (r[a] = n);
          }),
            Object.defineProperties(e, r);
        },
        Nt = "abcdefghijklmnopqrstuvwxyz",
        Ct = "0123456789",
        Pt = { DIGIT: Ct, ALPHA: Nt, ALPHA_DIGIT: Nt + Nt.toUpperCase() + Ct };
      var _t = tt("AsyncFunction"),
        Ot = {
          isArray: rt,
          isArrayBuffer: ot,
          isBuffer: function (e) {
            return (
              null !== e &&
              !at(e) &&
              null !== e.constructor &&
              !at(e.constructor) &&
              it(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (it(e.append) &&
                  ("formdata" === (t = et(e)) ||
                    ("object" === t &&
                      it(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && ot(e.buffer);
          },
          isString: lt,
          isNumber: ut,
          isBoolean: function (e) {
            return !0 === e || !1 === e;
          },
          isObject: st,
          isPlainObject: ct,
          isUndefined: at,
          isDate: ft,
          isFile: dt,
          isBlob: pt,
          isRegExp: jt,
          isFunction: it,
          isStream: function (e) {
            return st(e) && it(e.pipe);
          },
          isURLSearchParams: mt,
          isTypedArray: wt,
          isFileList: ht,
          forEach: vt,
          merge: function e() {
            for (
              var t = ((xt(this) && this) || {}).caseless,
                n = {},
                r = function (r, a) {
                  var o = (t && gt(n, a)) || a;
                  ct(n[o]) && ct(r)
                    ? (n[o] = e(n[o], r))
                    : ct(r)
                    ? (n[o] = e({}, r))
                    : rt(r)
                    ? (n[o] = r.slice())
                    : (n[o] = r);
                },
                a = 0,
                o = arguments.length;
              a < o;
              a++
            )
              arguments[a] && vt(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            return (
              vt(
                t,
                function (t, r) {
                  n && it(t) ? (e[r] = Ye(t, n)) : (e[r] = t);
                },
                {
                  allOwnKeys: (arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {}
                  ).allOwnKeys,
                },
              ),
              e
            );
          },
          trim: function (e) {
            return e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, n, r) {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: function (e, t, n, r) {
            var a,
              o,
              l,
              i = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (o = (a = Object.getOwnPropertyNames(e)).length; o-- > 0; )
                (l = a[o]),
                  (r && !r(l, e, t)) || i[l] || ((t[l] = e[l]), (i[l] = !0));
              e = !1 !== n && Ze(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: et,
          kindOfTest: tt,
          endsWith: function (e, t, n) {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            var r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: function (e) {
            if (!e) return null;
            if (rt(e)) return e;
            var t = e.length;
            if (!ut(t)) return null;
            for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: function (e, t) {
            for (
              var n, r = (e && e[Symbol.iterator]).call(e);
              (n = r.next()) && !n.done;

            ) {
              var a = n.value;
              t.call(e, a[0], a[1]);
            }
          },
          matchAll: function (e, t) {
            for (var n, r = []; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: kt,
          hasOwnProperty: St,
          hasOwnProp: St,
          reduceDescriptors: Et,
          freezeMethods: function (e) {
            Et(e, function (t, n) {
              if (it(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              var r = e[n];
              it(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = function () {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'",
                      );
                    }));
            });
          },
          toObjectSet: function (e, t) {
            var n = {},
              r = function (e) {
                e.forEach(function (e) {
                  n[e] = !0;
                });
              };
            return rt(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: function (e) {
            return e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              });
          },
          noop: function () {},
          toFiniteNumber: function (e, t) {
            return (e = +e), Number.isFinite(e) ? e : t;
          },
          findKey: gt,
          global: yt,
          isContextDefined: xt,
          ALPHABET: Pt,
          generateString: function () {
            for (
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 16,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Pt.ALPHA_DIGIT,
                n = "",
                r = t.length;
              e--;

            )
              n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              it(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: function (e) {
            var t = new Array(10);
            return (function e(n, r) {
              if (st(n)) {
                if (t.indexOf(n) >= 0) return;
                if (!("toJSON" in n)) {
                  t[r] = n;
                  var a = rt(n) ? [] : {};
                  return (
                    vt(n, function (t, n) {
                      var o = e(t, r + 1);
                      !at(o) && (a[n] = o);
                    }),
                    (t[r] = void 0),
                    a
                  );
                }
              }
              return n;
            })(e, 0);
          },
          isAsyncFn: _t,
          isThenable: function (e) {
            return e && (st(e) || it(e)) && it(e.then) && it(e.catch);
          },
        };
      function Rt(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      Ot.inherits(Rt, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: Ot.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var At = Rt.prototype,
        Tt = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach(function (e) {
        Tt[e] = { value: e };
      }),
        Object.defineProperties(Rt, Tt),
        Object.defineProperty(At, "isAxiosError", { value: !0 }),
        (Rt.from = function (e, t, n, r, a, o) {
          var l = Object.create(At);
          return (
            Ot.toFlatObject(
              e,
              l,
              function (e) {
                return e !== Error.prototype;
              },
              function (e) {
                return "isAxiosError" !== e;
              },
            ),
            Rt.call(l, e.message, t, n, r, a),
            (l.cause = e),
            (l.name = e.name),
            o && Object.assign(l, o),
            l
          );
        });
      var Lt = Rt;
      function zt(e) {
        return Ot.isPlainObject(e) || Ot.isArray(e);
      }
      function Ft(e) {
        return Ot.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function Dt(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = Ft(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      var Ut = Ot.toFlatObject(Ot, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var Bt = function (e, t, n) {
        if (!Ot.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData();
        var r = (n = Ot.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !Ot.isUndefined(t[e]);
            },
          )).metaTokens,
          a = n.visitor || s,
          o = n.dots,
          l = n.indexes,
          i =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            Ot.isSpecCompliantForm(t);
        if (!Ot.isFunction(a))
          throw new TypeError("visitor must be a function");
        function u(e) {
          if (null === e) return "";
          if (Ot.isDate(e)) return e.toISOString();
          if (!i && Ot.isBlob(e))
            throw new Lt("Blob is not supported. Use a Buffer instead.");
          return Ot.isArrayBuffer(e) || Ot.isTypedArray(e)
            ? i && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function s(e, n, a) {
          var i = e;
          if (e && !a && "object" === typeof e)
            if (Ot.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (Ot.isArray(e) &&
                (function (e) {
                  return Ot.isArray(e) && !e.some(zt);
                })(e)) ||
              ((Ot.isFileList(e) || Ot.endsWith(n, "[]")) &&
                (i = Ot.toArray(e)))
            )
              return (
                (n = Ft(n)),
                i.forEach(function (e, r) {
                  !Ot.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === l ? Dt([n], r, o) : null === l ? n : n + "[]",
                      u(e),
                    );
                }),
                !1
              );
          return !!zt(e) || (t.append(Dt(a, n, o), u(e)), !1);
        }
        var c = [],
          f = Object.assign(Ut, {
            defaultVisitor: s,
            convertValue: u,
            isVisitable: zt,
          });
        if (!Ot.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!Ot.isUndefined(n)) {
              if (-1 !== c.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              c.push(n),
                Ot.forEach(n, function (n, o) {
                  !0 ===
                    (!(Ot.isUndefined(n) || null === n) &&
                      a.call(t, n, Ot.isString(o) ? o.trim() : o, r, f)) &&
                    e(n, r ? r.concat(o) : [o]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      };
      function It(e) {
        var t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function Mt(e, t) {
        (this._pairs = []), e && Bt(e, this, t);
      }
      var Vt = Mt.prototype;
      (Vt.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (Vt.toString = function (e) {
          var t = e
            ? function (t) {
                return e.call(this, t, It);
              }
            : It;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      var Wt = Mt;
      function Ht(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function $t(e, t, n) {
        if (!t) return e;
        var r,
          a = (n && n.encode) || Ht,
          o = n && n.serialize;
        if (
          (r = o
            ? o(t, n)
            : Ot.isURLSearchParams(t)
            ? t.toString()
            : new Wt(t, n).toString(a))
        ) {
          var l = e.indexOf("#");
          -1 !== l && (e = e.slice(0, l)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
        }
        return e;
      }
      var Qt = (function () {
          function e() {
            g(this, e), (this.handlers = []);
          }
          return (
            x(e, [
              {
                key: "use",
                value: function (e, t, n) {
                  return (
                    this.handlers.push({
                      fulfilled: e,
                      rejected: t,
                      synchronous: !!n && n.synchronous,
                      runWhen: n ? n.runWhen : null,
                    }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: "eject",
                value: function (e) {
                  this.handlers[e] && (this.handlers[e] = null);
                },
              },
              {
                key: "clear",
                value: function () {
                  this.handlers && (this.handlers = []);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  Ot.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                  });
                },
              },
            ]),
            e
          );
        })(),
        qt = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        Kt = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : Wt,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          isStandardBrowserEnv: (function () {
            var e;
            return (
              ("undefined" === typeof navigator ||
                ("ReactNative" !== (e = navigator.product) &&
                  "NativeScript" !== e &&
                  "NS" !== e)) &&
              "undefined" !== typeof window &&
              "undefined" !== typeof document
            );
          })(),
          isStandardBrowserWebWorkerEnv:
            "undefined" !== typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            "function" === typeof self.importScripts,
          protocols: ["http", "https", "file", "blob", "url", "data"],
        };
      var Gt = function (e) {
          function t(e, n, r, a) {
            var o = e[a++],
              l = Number.isFinite(+o),
              i = a >= e.length;
            return (
              (o = !o && Ot.isArray(r) ? r.length : o),
              i
                ? (Ot.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !l)
                : ((r[o] && Ot.isObject(r[o])) || (r[o] = []),
                  t(e, n, r[o], a) &&
                    Ot.isArray(r[o]) &&
                    (r[o] = (function (e) {
                      var t,
                        n,
                        r = {},
                        a = Object.keys(e),
                        o = a.length;
                      for (t = 0; t < o; t++) r[(n = a[t])] = e[n];
                      return r;
                    })(r[o])),
                  !l)
            );
          }
          if (Ot.isFormData(e) && Ot.isFunction(e.entries)) {
            var n = {};
            return (
              Ot.forEachEntry(e, function (e, r) {
                t(
                  (function (e) {
                    return Ot.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                      return "[]" === e[0] ? "" : e[1] || e[0];
                    });
                  })(e),
                  r,
                  n,
                  0,
                );
              }),
              n
            );
          }
          return null;
        },
        Yt = { "Content-Type": void 0 };
      var Jt = {
        transitional: qt,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, t) {
            var n,
              r = t.getContentType() || "",
              a = r.indexOf("application/json") > -1,
              o = Ot.isObject(e);
            if (
              (o && Ot.isHTMLForm(e) && (e = new FormData(e)), Ot.isFormData(e))
            )
              return a && a ? JSON.stringify(Gt(e)) : e;
            if (
              Ot.isArrayBuffer(e) ||
              Ot.isBuffer(e) ||
              Ot.isStream(e) ||
              Ot.isFile(e) ||
              Ot.isBlob(e)
            )
              return e;
            if (Ot.isArrayBufferView(e)) return e.buffer;
            if (Ot.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1,
                ),
                e.toString()
              );
            if (o) {
              if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return Bt(
                    e,
                    new Kt.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return Kt.isNode && Ot.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t,
                    ),
                  );
                })(e, this.formSerializer).toString();
              if (
                (n = Ot.isFileList(e)) ||
                r.indexOf("multipart/form-data") > -1
              ) {
                var l = this.env && this.env.FormData;
                return Bt(
                  n ? { "files[]": e } : e,
                  l && new l(),
                  this.formSerializer,
                );
              }
            }
            return o || a
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (Ot.isString(e))
                    try {
                      return (t || JSON.parse)(e), Ot.trim(e);
                    } catch (r) {
                      if ("SyntaxError" !== r.name) throw r;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || Jt.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && Ot.isString(e) && ((n && !this.responseType) || r)) {
              var a = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (o) {
                if (a) {
                  if ("SyntaxError" === o.name)
                    throw Lt.from(
                      o,
                      Lt.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response,
                    );
                  throw o;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: Kt.classes.FormData, Blob: Kt.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      Ot.forEach(["delete", "get", "head"], function (e) {
        Jt.headers[e] = {};
      }),
        Ot.forEach(["post", "put", "patch"], function (e) {
          Jt.headers[e] = Ot.merge(Yt);
        });
      var Xt = Jt,
        Zt = Ot.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        en = Symbol("internals");
      function tn(e) {
        return e && String(e).trim().toLowerCase();
      }
      function nn(e) {
        return !1 === e || null == e
          ? e
          : Ot.isArray(e)
          ? e.map(nn)
          : String(e);
      }
      function rn(e, t, n, r, a) {
        return Ot.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            Ot.isString(t)
              ? Ot.isString(r)
                ? -1 !== t.indexOf(r)
                : Ot.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      var an = (function (e, t) {
        function n(e) {
          g(this, n), e && this.set(e);
        }
        return (
          x(
            n,
            [
              {
                key: "set",
                value: function (e, t, n) {
                  var r = this;
                  function a(e, t, n) {
                    var a = tn(t);
                    if (!a)
                      throw new Error("header name must be a non-empty string");
                    var o = Ot.findKey(r, a);
                    (!o ||
                      void 0 === r[o] ||
                      !0 === n ||
                      (void 0 === n && !1 !== r[o])) &&
                      (r[o || t] = nn(e));
                  }
                  var o = function (e, t) {
                    return Ot.forEach(e, function (e, n) {
                      return a(e, n, t);
                    });
                  };
                  return (
                    Ot.isPlainObject(e) || e instanceof this.constructor
                      ? o(e, t)
                      : Ot.isString(e) &&
                        (e = e.trim()) &&
                        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
                      ? o(
                          (function (e) {
                            var t,
                              n,
                              r,
                              a = {};
                            return (
                              e &&
                                e.split("\n").forEach(function (e) {
                                  (r = e.indexOf(":")),
                                    (t = e
                                      .substring(0, r)
                                      .trim()
                                      .toLowerCase()),
                                    (n = e.substring(r + 1).trim()),
                                    !t ||
                                      (a[t] && Zt[t]) ||
                                      ("set-cookie" === t
                                        ? a[t]
                                          ? a[t].push(n)
                                          : (a[t] = [n])
                                        : (a[t] = a[t] ? a[t] + ", " + n : n));
                                }),
                              a
                            );
                          })(e),
                          t,
                        )
                      : null != e && a(t, e, n),
                    this
                  );
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  if ((e = tn(e))) {
                    var n = Ot.findKey(this, e);
                    if (n) {
                      var r = this[n];
                      if (!t) return r;
                      if (!0 === t)
                        return (function (e) {
                          for (
                            var t,
                              n = Object.create(null),
                              r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            (t = r.exec(e));

                          )
                            n[t[1]] = t[2];
                          return n;
                        })(r);
                      if (Ot.isFunction(t)) return t.call(this, r, n);
                      if (Ot.isRegExp(t)) return t.exec(r);
                      throw new TypeError(
                        "parser must be boolean|regexp|function",
                      );
                    }
                  }
                },
              },
              {
                key: "has",
                value: function (e, t) {
                  if ((e = tn(e))) {
                    var n = Ot.findKey(this, e);
                    return !(
                      !n ||
                      void 0 === this[n] ||
                      (t && !rn(0, this[n], n, t))
                    );
                  }
                  return !1;
                },
              },
              {
                key: "delete",
                value: function (e, t) {
                  var n = this,
                    r = !1;
                  function a(e) {
                    if ((e = tn(e))) {
                      var a = Ot.findKey(n, e);
                      !a ||
                        (t && !rn(0, n[a], a, t)) ||
                        (delete n[a], (r = !0));
                    }
                  }
                  return Ot.isArray(e) ? e.forEach(a) : a(e), r;
                },
              },
              {
                key: "clear",
                value: function (e) {
                  for (var t = Object.keys(this), n = t.length, r = !1; n--; ) {
                    var a = t[n];
                    (e && !rn(0, this[a], a, e, !0)) ||
                      (delete this[a], (r = !0));
                  }
                  return r;
                },
              },
              {
                key: "normalize",
                value: function (e) {
                  var t = this,
                    n = {};
                  return (
                    Ot.forEach(this, function (r, a) {
                      var o = Ot.findKey(n, a);
                      if (o) return (t[o] = nn(r)), void delete t[a];
                      var l = e
                        ? (function (e) {
                            return e
                              .trim()
                              .toLowerCase()
                              .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                                return t.toUpperCase() + n;
                              });
                          })(a)
                        : String(a).trim();
                      l !== a && delete t[a], (t[l] = nn(r)), (n[l] = !0);
                    }),
                    this
                  );
                },
              },
              {
                key: "concat",
                value: function () {
                  for (
                    var e, t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  return (e = this.constructor).concat.apply(
                    e,
                    [this].concat(n),
                  );
                },
              },
              {
                key: "toJSON",
                value: function (e) {
                  var t = Object.create(null);
                  return (
                    Ot.forEach(this, function (n, r) {
                      null != n &&
                        !1 !== n &&
                        (t[r] = e && Ot.isArray(n) ? n.join(", ") : n);
                    }),
                    t
                  );
                },
              },
              {
                key: Symbol.iterator,
                value: function () {
                  return Object.entries(this.toJSON())[Symbol.iterator]();
                },
              },
              {
                key: "toString",
                value: function () {
                  return Object.entries(this.toJSON())
                    .map(function (e) {
                      var t = h(e, 2);
                      return t[0] + ": " + t[1];
                    })
                    .join("\n");
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "AxiosHeaders";
                },
              },
            ],
            [
              {
                key: "from",
                value: function (e) {
                  return e instanceof this ? e : new this(e);
                },
              },
              {
                key: "concat",
                value: function (e) {
                  for (
                    var t = new this(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  return (
                    r.forEach(function (e) {
                      return t.set(e);
                    }),
                    t
                  );
                },
              },
              {
                key: "accessor",
                value: function (e) {
                  var t = (this[en] = this[en] = { accessors: {} }).accessors,
                    n = this.prototype;
                  function r(e) {
                    var r = tn(e);
                    t[r] ||
                      (!(function (e, t) {
                        var n = Ot.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach(function (r) {
                          Object.defineProperty(e, r + n, {
                            value: function (e, n, a) {
                              return this[r].call(this, t, e, n, a);
                            },
                            configurable: !0,
                          });
                        });
                      })(n, e),
                      (t[r] = !0));
                  }
                  return Ot.isArray(e) ? e.forEach(r) : r(e), this;
                },
              },
            ],
          ),
          n
        );
      })();
      an.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        Ot.freezeMethods(an.prototype),
        Ot.freezeMethods(an);
      var on = an;
      function ln(e, t) {
        var n = this || Xt,
          r = t || n,
          a = on.from(r.headers),
          o = r.data;
        return (
          Ot.forEach(e, function (e) {
            o = e.call(n, o, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          o
        );
      }
      function un(e) {
        return !(!e || !e.__CANCEL__);
      }
      function sn(e, t, n) {
        Lt.call(this, null == e ? "canceled" : e, Lt.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      Ot.inherits(sn, Lt, { __CANCEL__: !0 });
      var cn = sn;
      var fn = Kt.isStandardBrowserEnv
        ? {
            write: function (e, t, n, r, a, o) {
              var l = [];
              l.push(e + "=" + encodeURIComponent(t)),
                Ot.isNumber(n) &&
                  l.push("expires=" + new Date(n).toGMTString()),
                Ot.isString(r) && l.push("path=" + r),
                Ot.isString(a) && l.push("domain=" + a),
                !0 === o && l.push("secure"),
                (document.cookie = l.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
      function dn(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      var pn = Kt.isStandardBrowserEnv
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function r(e) {
              var r = e;
              return (
                t && (n.setAttribute("href", r), (r = n.href)),
                n.setAttribute("href", r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (e = r(window.location.href)),
              function (t) {
                var n = Ot.isString(t) ? r(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      var hn = function (e, t) {
        e = e || 10;
        var n,
          r = new Array(e),
          a = new Array(e),
          o = 0,
          l = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (i) {
            var u = Date.now(),
              s = a[l];
            n || (n = u), (r[o] = i), (a[o] = u);
            for (var c = l, f = 0; c !== o; ) (f += r[c++]), (c %= e);
            if (((o = (o + 1) % e) === l && (l = (l + 1) % e), !(u - n < t))) {
              var d = s && u - s;
              return d ? Math.round((1e3 * f) / d) : void 0;
            }
          }
        );
      };
      function mn(e, t) {
        var n = 0,
          r = hn(50, 250);
        return function (a) {
          var o = a.loaded,
            l = a.lengthComputable ? a.total : void 0,
            i = o - n,
            u = r(i);
          n = o;
          var s = {
            loaded: o,
            total: l,
            progress: l ? o / l : void 0,
            bytes: i,
            rate: u || void 0,
            estimated: u && l && o <= l ? (l - o) / u : void 0,
            event: a,
          };
          (s[t ? "download" : "upload"] = !0), e(s);
        };
      }
      var vn = {
        http: null,
        xhr:
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              var r,
                a = e.data,
                o = on.from(e.headers).normalize(),
                l = e.responseType;
              function i() {
                e.cancelToken && e.cancelToken.unsubscribe(r),
                  e.signal && e.signal.removeEventListener("abort", r);
              }
              Ot.isFormData(a) &&
                (Kt.isStandardBrowserEnv || Kt.isStandardBrowserWebWorkerEnv
                  ? o.setContentType(!1)
                  : o.setContentType("multipart/form-data;", !1));
              var u = new XMLHttpRequest();
              if (e.auth) {
                var s = e.auth.username || "",
                  c = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                o.set("Authorization", "Basic " + btoa(s + ":" + c));
              }
              var f = dn(e.baseURL, e.url);
              function d() {
                if (u) {
                  var r = on.from(
                    "getAllResponseHeaders" in u && u.getAllResponseHeaders(),
                  );
                  !(function (e, t, n) {
                    var r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? t(
                          new Lt(
                            "Request failed with status code " + n.status,
                            [Lt.ERR_BAD_REQUEST, Lt.ERR_BAD_RESPONSE][
                              Math.floor(n.status / 100) - 4
                            ],
                            n.config,
                            n.request,
                            n,
                          ),
                        )
                      : e(n);
                  })(
                    function (e) {
                      t(e), i();
                    },
                    function (e) {
                      n(e), i();
                    },
                    {
                      data:
                        l && "text" !== l && "json" !== l
                          ? u.response
                          : u.responseText,
                      status: u.status,
                      statusText: u.statusText,
                      headers: r,
                      config: e,
                      request: u,
                    },
                  ),
                    (u = null);
                }
              }
              if (
                (u.open(
                  e.method.toUpperCase(),
                  $t(f, e.params, e.paramsSerializer),
                  !0,
                ),
                (u.timeout = e.timeout),
                "onloadend" in u
                  ? (u.onloadend = d)
                  : (u.onreadystatechange = function () {
                      u &&
                        4 === u.readyState &&
                        (0 !== u.status ||
                          (u.responseURL &&
                            0 === u.responseURL.indexOf("file:"))) &&
                        setTimeout(d);
                    }),
                (u.onabort = function () {
                  u &&
                    (n(new Lt("Request aborted", Lt.ECONNABORTED, e, u)),
                    (u = null));
                }),
                (u.onerror = function () {
                  n(new Lt("Network Error", Lt.ERR_NETWORK, e, u)), (u = null);
                }),
                (u.ontimeout = function () {
                  var t = e.timeout
                      ? "timeout of " + e.timeout + "ms exceeded"
                      : "timeout exceeded",
                    r = e.transitional || qt;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(
                      new Lt(
                        t,
                        r.clarifyTimeoutError ? Lt.ETIMEDOUT : Lt.ECONNABORTED,
                        e,
                        u,
                      ),
                    ),
                    (u = null);
                }),
                Kt.isStandardBrowserEnv)
              ) {
                var p =
                  (e.withCredentials || pn(f)) &&
                  e.xsrfCookieName &&
                  fn.read(e.xsrfCookieName);
                p && o.set(e.xsrfHeaderName, p);
              }
              void 0 === a && o.setContentType(null),
                "setRequestHeader" in u &&
                  Ot.forEach(o.toJSON(), function (e, t) {
                    u.setRequestHeader(t, e);
                  }),
                Ot.isUndefined(e.withCredentials) ||
                  (u.withCredentials = !!e.withCredentials),
                l && "json" !== l && (u.responseType = e.responseType),
                "function" === typeof e.onDownloadProgress &&
                  u.addEventListener("progress", mn(e.onDownloadProgress, !0)),
                "function" === typeof e.onUploadProgress &&
                  u.upload &&
                  u.upload.addEventListener("progress", mn(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((r = function (t) {
                    u &&
                      (n(!t || t.type ? new cn(null, e, u) : t),
                      u.abort(),
                      (u = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(r),
                  e.signal &&
                    (e.signal.aborted
                      ? r()
                      : e.signal.addEventListener("abort", r)));
              var h = (function (e) {
                var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(f);
              h && -1 === Kt.protocols.indexOf(h)
                ? n(
                    new Lt(
                      "Unsupported protocol " + h + ":",
                      Lt.ERR_BAD_REQUEST,
                      e,
                    ),
                  )
                : u.send(a || null);
            });
          },
      };
      Ot.forEach(vn, function (e, t) {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (n) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      var gn = function (e) {
        for (
          var t, n, r = (e = Ot.isArray(e) ? e : [e]).length, a = 0;
          a < r &&
          ((t = e[a]), !(n = Ot.isString(t) ? vn[t.toLowerCase()] : t));
          a++
        );
        if (!n) {
          if (!1 === n)
            throw new Lt(
              "Adapter ".concat(t, " is not supported by the environment"),
              "ERR_NOT_SUPPORT",
            );
          throw new Error(
            Ot.hasOwnProp(vn, t)
              ? "Adapter '".concat(t, "' is not available in the build")
              : "Unknown adapter '".concat(t, "'"),
          );
        }
        if (!Ot.isFunction(n)) throw new TypeError("adapter is not a function");
        return n;
      };
      function yn(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new cn(null, e);
      }
      function xn(e) {
        return (
          yn(e),
          (e.headers = on.from(e.headers)),
          (e.data = ln.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
          gn(e.adapter || Xt.adapter)(e).then(
            function (t) {
              return (
                yn(e),
                (t.data = ln.call(e, e.transformResponse, t)),
                (t.headers = on.from(t.headers)),
                t
              );
            },
            function (t) {
              return (
                un(t) ||
                  (yn(e),
                  t &&
                    t.response &&
                    ((t.response.data = ln.call(
                      e,
                      e.transformResponse,
                      t.response,
                    )),
                    (t.response.headers = on.from(t.response.headers)))),
                Promise.reject(t)
              );
            },
          )
        );
      }
      var bn = function (e) {
        return e instanceof on ? e.toJSON() : e;
      };
      function wn(e, t) {
        t = t || {};
        var n = {};
        function r(e, t, n) {
          return Ot.isPlainObject(e) && Ot.isPlainObject(t)
            ? Ot.merge.call({ caseless: n }, e, t)
            : Ot.isPlainObject(t)
            ? Ot.merge({}, t)
            : Ot.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n) {
          return Ot.isUndefined(t)
            ? Ot.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function o(e, t) {
          if (!Ot.isUndefined(t)) return r(void 0, t);
        }
        function l(e, t) {
          return Ot.isUndefined(t)
            ? Ot.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function i(n, a, o) {
          return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
        }
        var u = {
          url: o,
          method: o,
          data: o,
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
          validateStatus: i,
          headers: function (e, t) {
            return a(bn(e), bn(t), !0);
          },
        };
        return (
          Ot.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            var o = u[r] || a,
              l = o(e[r], t[r], r);
            (Ot.isUndefined(l) && o !== i) || (n[r] = l);
          }),
          n
        );
      }
      var kn = "1.4.0",
        Sn = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          Sn[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        },
      );
      var jn = {};
      Sn.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.4.0] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return function (n, a, o) {
          if (!1 === e)
            throw new Lt(
              r(a, " has been removed" + (t ? " in " + t : "")),
              Lt.ERR_DEPRECATED,
            );
          return (
            t &&
              !jn[a] &&
              ((jn[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future",
                ),
              )),
            !e || e(n, a, o)
          );
        };
      };
      var En = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new Lt(
                "options must be an object",
                Lt.ERR_BAD_OPTION_VALUE,
              );
            for (var r = Object.keys(e), a = r.length; a-- > 0; ) {
              var o = r[a],
                l = t[o];
              if (l) {
                var i = e[o],
                  u = void 0 === i || l(i, o, e);
                if (!0 !== u)
                  throw new Lt(
                    "option " + o + " must be " + u,
                    Lt.ERR_BAD_OPTION_VALUE,
                  );
              } else if (!0 !== n)
                throw new Lt("Unknown option " + o, Lt.ERR_BAD_OPTION);
            }
          },
          validators: Sn,
        },
        Nn = En.validators,
        Cn = (function () {
          function e(t) {
            g(this, e),
              (this.defaults = t),
              (this.interceptors = { request: new Qt(), response: new Qt() });
          }
          return (
            x(e, [
              {
                key: "request",
                value: function (e, t) {
                  "string" === typeof e
                    ? ((t = t || {}).url = e)
                    : (t = e || {});
                  var n,
                    r = (t = wn(this.defaults, t)),
                    a = r.transitional,
                    o = r.paramsSerializer,
                    l = r.headers;
                  void 0 !== a &&
                    En.assertOptions(
                      a,
                      {
                        silentJSONParsing: Nn.transitional(Nn.boolean),
                        forcedJSONParsing: Nn.transitional(Nn.boolean),
                        clarifyTimeoutError: Nn.transitional(Nn.boolean),
                      },
                      !1,
                    ),
                    null != o &&
                      (Ot.isFunction(o)
                        ? (t.paramsSerializer = { serialize: o })
                        : En.assertOptions(
                            o,
                            { encode: Nn.function, serialize: Nn.function },
                            !0,
                          )),
                    (t.method = (
                      t.method ||
                      this.defaults.method ||
                      "get"
                    ).toLowerCase()),
                    (n = l && Ot.merge(l.common, l[t.method])) &&
                      Ot.forEach(
                        [
                          "delete",
                          "get",
                          "head",
                          "post",
                          "put",
                          "patch",
                          "common",
                        ],
                        function (e) {
                          delete l[e];
                        },
                      ),
                    (t.headers = on.concat(n, l));
                  var i = [],
                    u = !0;
                  this.interceptors.request.forEach(function (e) {
                    ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
                      ((u = u && e.synchronous),
                      i.unshift(e.fulfilled, e.rejected));
                  });
                  var s,
                    c = [];
                  this.interceptors.response.forEach(function (e) {
                    c.push(e.fulfilled, e.rejected);
                  });
                  var f,
                    d = 0;
                  if (!u) {
                    var p = [xn.bind(this), void 0];
                    for (
                      p.unshift.apply(p, i),
                        p.push.apply(p, c),
                        f = p.length,
                        s = Promise.resolve(t);
                      d < f;

                    )
                      s = s.then(p[d++], p[d++]);
                    return s;
                  }
                  f = i.length;
                  var h = t;
                  for (d = 0; d < f; ) {
                    var m = i[d++],
                      v = i[d++];
                    try {
                      h = m(h);
                    } catch (g) {
                      v.call(this, g);
                      break;
                    }
                  }
                  try {
                    s = xn.call(this, h);
                  } catch (g) {
                    return Promise.reject(g);
                  }
                  for (d = 0, f = c.length; d < f; ) s = s.then(c[d++], c[d++]);
                  return s;
                },
              },
              {
                key: "getUri",
                value: function (e) {
                  return $t(
                    dn((e = wn(this.defaults, e)).baseURL, e.url),
                    e.params,
                    e.paramsSerializer,
                  );
                },
              },
            ]),
            e
          );
        })();
      Ot.forEach(["delete", "get", "head", "options"], function (e) {
        Cn.prototype[e] = function (t, n) {
          return this.request(
            wn(n || {}, { method: e, url: t, data: (n || {}).data }),
          );
        };
      }),
        Ot.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                wn(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                }),
              );
            };
          }
          (Cn.prototype[e] = t()), (Cn.prototype[e + "Form"] = t(!0));
        });
      var Pn = Cn,
        _n = (function () {
          function e(t) {
            if ((g(this, e), "function" !== typeof t))
              throw new TypeError("executor must be a function.");
            var n;
            this.promise = new Promise(function (e) {
              n = e;
            });
            var r = this;
            this.promise.then(function (e) {
              if (r._listeners) {
                for (var t = r._listeners.length; t-- > 0; ) r._listeners[t](e);
                r._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  n = new Promise(function (e) {
                    r.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (n.cancel = function () {
                    r.unsubscribe(t);
                  }),
                  n
                );
              }),
              t(function (e, t, a) {
                r.reason || ((r.reason = new cn(e, t, a)), n(r.reason));
              });
          }
          return (
            x(
              e,
              [
                {
                  key: "throwIfRequested",
                  value: function () {
                    if (this.reason) throw this.reason;
                  },
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this.reason
                      ? e(this.reason)
                      : this._listeners
                      ? this._listeners.push(e)
                      : (this._listeners = [e]);
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    if (this._listeners) {
                      var t = this._listeners.indexOf(e);
                      -1 !== t && this._listeners.splice(t, 1);
                    }
                  },
                },
              ],
              [
                {
                  key: "source",
                  value: function () {
                    var t;
                    return {
                      token: new e(function (e) {
                        t = e;
                      }),
                      cancel: t,
                    };
                  },
                },
              ],
            ),
            e
          );
        })();
      var On = {
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
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(On).forEach(function (e) {
        var t = h(e, 2),
          n = t[0],
          r = t[1];
        On[r] = n;
      });
      var Rn = On;
      var An = (function e(t) {
        var n = new Pn(t),
          r = Ye(Pn.prototype.request, n);
        return (
          Ot.extend(r, Pn.prototype, n, { allOwnKeys: !0 }),
          Ot.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(wn(t, n));
          }),
          r
        );
      })(Xt);
      (An.Axios = Pn),
        (An.CanceledError = cn),
        (An.CancelToken = _n),
        (An.isCancel = un),
        (An.VERSION = kn),
        (An.toFormData = Bt),
        (An.AxiosError = Lt),
        (An.Cancel = An.CanceledError),
        (An.all = function (e) {
          return Promise.all(e);
        }),
        (An.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (An.isAxiosError = function (e) {
          return Ot.isObject(e) && !0 === e.isAxiosError;
        }),
        (An.mergeConfig = wn),
        (An.AxiosHeaders = on),
        (An.formToJSON = function (e) {
          return Gt(Ot.isHTMLForm(e) ? new FormData(e) : e);
        }),
        (An.HttpStatusCode = Rn),
        (An.default = An);
      var Tn = An;
      function Ln(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) e[r] = n[r];
        }
        return e;
      }
      var zn = (function e(t, n) {
          function r(e, r, a) {
            if ("undefined" !== typeof document) {
              "number" === typeof (a = Ln({}, n, a)).expires &&
                (a.expires = new Date(Date.now() + 864e5 * a.expires)),
                a.expires && (a.expires = a.expires.toUTCString()),
                (e = encodeURIComponent(e)
                  .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[()]/g, escape));
              var o = "";
              for (var l in a)
                a[l] &&
                  ((o += "; " + l),
                  !0 !== a[l] && (o += "=" + a[l].split(";")[0]));
              return (document.cookie = e + "=" + t.write(r, e) + o);
            }
          }
          return Object.create(
            {
              set: r,
              get: function (e) {
                if (
                  "undefined" !== typeof document &&
                  (!arguments.length || e)
                ) {
                  for (
                    var n = document.cookie ? document.cookie.split("; ") : [],
                      r = {},
                      a = 0;
                    a < n.length;
                    a++
                  ) {
                    var o = n[a].split("="),
                      l = o.slice(1).join("=");
                    try {
                      var i = decodeURIComponent(o[0]);
                      if (((r[i] = t.read(l, i)), e === i)) break;
                    } catch (u) {}
                  }
                  return e ? r[e] : r;
                }
              },
              remove: function (e, t) {
                r(e, "", Ln({}, t, { expires: -1 }));
              },
              withAttributes: function (t) {
                return e(this.converter, Ln({}, this.attributes, t));
              },
              withConverter: function (t) {
                return e(Ln({}, this.converter, t), this.attributes);
              },
            },
            {
              attributes: { value: Object.freeze(n) },
              converter: { value: Object.freeze(t) },
            },
          );
        })(
          {
            read: function (e) {
              return (
                '"' === e[0] && (e = e.slice(1, -1)),
                e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
              );
            },
            write: function (e) {
              return encodeURIComponent(e).replace(
                /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                decodeURIComponent,
              );
            },
          },
          { path: "/" },
        ),
        Fn = (0, t.createContext)(null),
        Dn = n(881);
      function Un(e) {
        var t = e.absolute,
          n = e.darkness,
          r = e.roundedAbs;
        return (0, Dn.jsx)("div", {
          className: "flex items-center justify-center "
            .concat(
              t
                ? " absolute w-full h-full rounded-lg "
                : "fixed w-screen h-screen",
              " ",
            )
            .concat(
              r && " rounded-full absolute w-full h-full ",
              " top-0 left-0 bg-black opacity-50 ",
            )
            .concat(n || " z-30 "),
          children: (0, Dn.jsx)("div", {
            className: "relative",
            children: (0, Dn.jsx)("svg", {
              className: "spinner",
              viewBox: "0 0 50 50",
              children: (0, Dn.jsx)("circle", {
                className: "path",
                cx: "25",
                cy: "25",
                r: "20",
                fill: "none",
                strokeWidth: "5",
              }),
            }),
          }),
        });
      }
      function Bn() {
        var e = h((0, t.useState)(!1), 2),
          n = e[0],
          r = e[1],
          a = h((0, t.useState)(zn.get("authToken")), 2),
          o = a[0],
          l = (a[1], h((0, t.useState)(!1), 2)),
          i = l[0],
          u = l[1],
          s = (function () {
            var e = Ge(
              qe().mark(function e(t) {
                var n, r, a, l, i, s;
                return qe().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            u(!0),
                            (n =
                              void 0 !== t.dataTransfer
                                ? t.dataTransfer.files
                                : t.target.files),
                            (r = new FormData()),
                            (a = P(n));
                          try {
                            for (a.s(); !(l = a.n()).done; )
                              (i = l.value), r.append("files", i);
                          } catch (c) {
                            a.e(c);
                          } finally {
                            a.f();
                          }
                          return (
                            (e.prev = 6),
                            (e.next = 9),
                            Tn.post(
                              "".concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/upload",
                              ),
                              r,
                              {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                  Authorization: "Bearer ".concat(o),
                                },
                              },
                            )
                          );
                        case 9:
                          (s = e.sent),
                            u(!1),
                            400 === s.status &&
                              alert("Upload failed. Storage limit exceeded!"),
                            201 === s.status &&
                              setTimeout(function () {
                                window.location.reload();
                              }, 500),
                            (e.next = 18);
                          break;
                        case 15:
                          (e.prev = 15),
                            (e.t0 = e.catch(6)),
                            console.error("Upload error:", e.t0);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[6, 15]],
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, Dn.jsxs)(Dn.Fragment, {
          children: [
            i && (0, Dn.jsx)(Un, {}),
            (0, Dn.jsxs)("div", {
              className:
                "flex flex-col w-10/12 md:w-9/12 py-9 md:py-11 items-center bg-white border-dashed border border-gray-500 cursor-pointer hover:transform hover:scale-105 hover:border-none hover:rounded-lg transition-transform duration-300 ".concat(
                  n ? " border-2 border-blue-500 " : "",
                ),
              onDragEnter: function (e) {
                e.preventDefault(), r(!0);
              },
              onDragOver: function (e) {
                e.preventDefault();
              },
              onDragLeave: function () {
                r(!1);
              },
              onDrop: function (e) {
                e.preventDefault(), r(!1), s(e);
              },
              children: [
                (0, Dn.jsx)("div", {
                  children: (0, Dn.jsx)("div", {
                    className: "loading-bar-container",
                    children: (0, Dn.jsx)("div", { className: "loading-bar" }),
                  }),
                }),
                (0, Dn.jsxs)("div", {
                  className:
                    "flex flex-col justify-center items-center gap-y-4",
                  children: [
                    (0, Dn.jsx)("i", {
                      className: "fas fa-upload text-indigo-500 text-3xl",
                    }),
                    (0, Dn.jsxs)("p", {
                      className: "text-gray-400 text-sm font-semibold",
                      children: [
                        (0, Dn.jsx)("span", {
                          className: "hidden md:inline",
                          children: "Drag and drop files here",
                        }),
                        (0, Dn.jsx)("a", {
                          href: "/upload",
                          className:
                            "inline md:hidden underline font-black text-md noSelect",
                          children: "Choose a file to Upload",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function In(e) {
        var n = e.size,
          r = e.hidePen,
          a = e.imgSize,
          o = h((0, t.useState)(!1), 2),
          l = o[0],
          i = o[1],
          u = h((0, t.useState)(null), 2),
          s = u[0],
          c = u[1],
          f = h((0, t.useState)(zn.get("authToken")), 2),
          d = f[0];
        f[1];
        (0, t.useEffect)(
          function () {
            return d && p(), function () {};
          },
          [d],
        );
        var p = (function () {
          var e = Ge(
            qe().mark(function e() {
              var t;
              return qe().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Tn.get(
                            "".concat(
                              "https://cloud-wave-app.onrender.com",
                              "/api/user",
                            ),
                            { headers: { Authorization: "Bearer ".concat(d) } },
                          )
                        );
                      case 3:
                        (t = e.sent), c(t.data.dataBase64), (e.next = 10);
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          console.error("Error getting user info:", e.t0);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]],
              );
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        function m() {
          return (m = Ge(
            qe().mark(function e(t) {
              var n, r, a, o, l;
              return qe().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.preventDefault(),
                          t.stopPropagation(),
                          i(!0),
                          (n =
                            void 0 !== t.dataTransfer
                              ? t.dataTransfer.files
                              : t.target.files),
                          (r = new FormData()),
                          (a = P(n));
                        try {
                          for (a.s(); !(o = a.n()).done; )
                            (l = o.value), r.append("files", l);
                        } catch (u) {
                          a.e(u);
                        } finally {
                          a.f();
                        }
                        return (
                          (e.prev = 7),
                          (e.next = 10),
                          Tn.post(
                            "".concat(
                              "https://cloud-wave-app.onrender.com",
                              "/api/uploadavatar",
                            ),
                            r,
                            {
                              headers: {
                                "Content-Type": "multipart/form-data",
                                Authorization: "Bearer ".concat(d),
                              },
                            },
                          )
                        );
                      case 10:
                        p(), (e.next = 17);
                        break;
                      case 13:
                        (e.prev = 13),
                          (e.t0 = e.catch(7)),
                          console.error("Upload error:", e.t0),
                          alert("Failed to update avatar!");
                      case 17:
                        i(!1);
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[7, 13]],
              );
            }),
          )).apply(this, arguments);
        }
        return (0, Dn.jsx)("div", {
          className: "flex justify-center items-center relative h-32 md:h-24",
          children: (0, Dn.jsxs)("div", {
            className: "relative rounded-full ".concat(
              a || " h-24 w-24 ",
              " md:h-16 md:w-16 flex items-center justify-center",
            ),
            children: [
              l && (0, Dn.jsx)(Un, { roundedAbs: !0 }),
              s
                ? (0, Dn.jsx)("img", {
                    src: "data:image/png;base64," + s,
                    alt: "Preview",
                    className: "rounded-full object-cover",
                    style: { width: "100%", height: "100%" },
                  })
                : (0, Dn.jsx)("i", {
                    className: "fas fa-user-circle ".concat(
                      n,
                      " text-white rounded-full bg-slate-400 cursor-pointer",
                    ),
                  }),
              (0, Dn.jsx)("input", {
                type: "file",
                className:
                  "bg-black absolute top-0 left-0 w-full h-full z-20 opacity-0 cursor-pointer",
                name: "file",
                onChange: function (e) {
                  return m.apply(this, arguments);
                },
                multiple: !0,
              }),
              !r &&
                (0, Dn.jsx)("div", {
                  className:
                    "rounded-full bg-black p-1 absolute right-1 bottom-1 flex items-center justify-center opacity-70",
                  children: (0, Dn.jsx)("i", {
                    className:
                      "fas fa-pen text-gray-100 text-xs cursor-pointer z-50",
                  }),
                }),
            ],
          }),
        });
      }
      function Mn(e) {
        var n,
          r = h(
            (0, t.useState)({ pictures: 0, videos: 0, audio: 0, documents: 0 }),
            2,
          ),
          a = r[0],
          o = r[1],
          l = h((0, t.useState)(zn.get("authToken")), 2),
          i = l[0],
          u = (l[1], h((0, t.useState)([]), 2)),
          c = u[0],
          f = u[1],
          d = h((0, t.useState)(!1), 2),
          p = d[0],
          m = d[1],
          g = h(
            (0, t.useState)([
              {
                icon: "fas fa-image",
                color: "bg-indigo-500",
                title: "Pictures",
                count: a.pictures,
                iconColor: "text-indigo-500",
                href: "/files/pictures",
              },
              {
                icon: "fas fa-video",
                color: "bg-red-500",
                title: "Videos",
                count: a.videos,
                iconColor: "text-red-500",
                href: "/files/videos",
              },
              {
                icon: "fas fa-headphones",
                color: "bg-sky-600",
                title: "Audio",
                count: a.audio,
                iconColor: "text-sky-600",
                href: "/files/audio",
              },
              {
                icon: "fas fa-file-alt",
                color: "bg-emerald-500",
                title: "Documents",
                count: a.documents,
                iconColor: "text-emerald-500",
                href: "/files/documents",
              },
              { color: "bg-gray-100", noIcons: !0 },
            ]),
            2,
          ),
          y = g[0],
          x = g[1];
        (n = e.favs
          ? "".concat(
              "https://cloud-wave-app.onrender.com",
              "/api/file/count?favorites=true",
            )
          : "".concat(
              "https://cloud-wave-app.onrender.com",
              "/api/file/count",
            )),
          (0, t.useEffect)(
            function () {
              var e = (function () {
                var e = Ge(
                  qe().mark(function e() {
                    var t;
                    return qe().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), b(i);
                            case 3:
                              (t = e.sent) &&
                                (o(t),
                                x(function (e) {
                                  return (
                                    (e[0].count = t.pictures),
                                    (e[1].count = t.videos),
                                    (e[2].count = t.audio),
                                    (e[3].count = t.documents),
                                    e
                                  );
                                })),
                                (e.next = 10);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                console.error("Error fetching counts:", e.t0);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]],
                    );
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              return i && e(), function () {};
            },
            [i],
          );
        var b = (function () {
          var e = Ge(
            qe().mark(function e(t) {
              var r;
              return qe().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Tn.get(n, {
                            headers: { Authorization: "Bearer ".concat(t) },
                          })
                        );
                      case 3:
                        return (
                          (r = e.sent), e.abrupt("return", r.data.categories)
                        );
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          console.error("Files error:", e.t0);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]],
              );
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        (0, t.useEffect)(function () {
          function t() {
            m(!1);
          }
          return (
            document.body.addEventListener("click", t),
            e.favs &&
              x(
                y.filter(function (e) {
                  return !0 !== e.noIcons;
                }),
              ),
            function () {
              document.removeEventListener("click", t);
            }
          );
        }, []);
        return (0, Dn.jsxs)("div", {
          className:
            "flex flex-col p-3 bg-gray-200 rounded-xl w-full md:w-full gap-y-2.5",
          children: [
            e.title,
            (0, Dn.jsx)("div", {
              className: "".concat(e.style),
              children: y.map(function (t, n) {
                return (
                  (!e.checkFav || (e.checkFav && c.includes(n))) &&
                  (0, Dn.jsx)(
                    "a",
                    {
                      href: t.href || "/files",
                      className:
                        "rounded-xl w-11/12 lg:w-10/12 cursor-pointer ".concat(
                          t.color,
                          " hover:transform hover:scale-105 transition-transform duration-300 noSelect",
                        ),
                      children: t.noIcons
                        ? !e.favs &&
                          (0, Dn.jsx)("div", {
                            className:
                              "flex justify-center items-center w-40 md:w-full h-28 rounded--xl",
                            onClick: function (e) {
                              return (function (e) {
                                e.preventDefault(), e.stopPropagation(), m(!p);
                              })(e);
                            },
                            children: p
                              ? (0, Dn.jsx)("div", {
                                  className: "w-full p-3 h-full",
                                  children: (0, Dn.jsx)("input", {
                                    type: "text",
                                    className: "w-full p-2 text-xs",
                                    placeholder: "Enter title",
                                    onClick: function (e) {
                                      e.stopPropagation(), e.preventDefault();
                                    },
                                    onKeyDown: function (e) {
                                      "Enter" === e.key &&
                                        (function (e) {
                                          var t = v(y);
                                          t.splice(y.length - 1, 0, {
                                            icon: "fas fa-folder-open",
                                            color: "bg-emerald-500",
                                            title: e,
                                            count: 0,
                                            iconColor: "text-emerald-500",
                                            isFavorite: !1,
                                          }),
                                            x(t),
                                            m(!1);
                                        })(e.target.value);
                                    },
                                  }),
                                })
                              : (0, Dn.jsx)("i", {
                                  className:
                                    "fas fa-plus text-gray-400 text-lg cursor-pointer",
                                }),
                          })
                        : (0, Dn.jsxs)("div", {
                            className:
                              "w-40 md:w-full flex flex-row items-center p-3.5 lg:px-5",
                            children: [
                              (0, Dn.jsxs)("div", {
                                className:
                                  "flex gap-y-1.5 flex-col w-8/12 h-20",
                                children: [
                                  (0, Dn.jsx)("i", {
                                    className: ""
                                      .concat(t.icon, " ")
                                      .concat(
                                        t.iconColor,
                                        " bg-white p-2 rounded-full w-fit text-md",
                                      ),
                                  }),
                                  (0, Dn.jsx)("div", {
                                    className:
                                      "text-white font-bold text-xs md:text-sm",
                                    children: t.title,
                                  }),
                                  (0, Dn.jsxs)("div", {
                                    className:
                                      "text-xs text-gray-200 w-full italic",
                                    children: [
                                      t.count > 1 && t.count + " files",
                                      1 == t.count && t.count + " file",
                                      0 === t.count && "Empty",
                                    ],
                                  }),
                                ],
                              }),
                              (0, Dn.jsx)("i", {
                                className:
                                  "fas fa-star white text-lg ml-4 cursor-pointer "
                                    .concat(
                                      c.includes(n) ? "favorite" : "",
                                      " ",
                                    )
                                    .concat(e.favs ? "favorite" : ""),
                                onClick: function (e) {
                                  return (function (e, t, n) {
                                    n.preventDefault(), n.stopPropagation();
                                    var r = y.map(function (t) {
                                      return t === e
                                        ? s(s({}, t), {}, { isFavorite: !0 })
                                        : t;
                                    });
                                    x(r),
                                      c.includes(t)
                                        ? f(
                                            c.filter(function (e) {
                                              return e !== t;
                                            }),
                                          )
                                        : f([].concat(v(c), [t]));
                                  })(t, n, e);
                                },
                              }),
                            ],
                          }),
                    },
                    n,
                  )
                );
              }),
            }),
          ],
        });
      }
      var Vn = (0, t.createContext)(!1),
        Wn = function () {
          var e = ke(),
            n = t.useContext(Vn),
            r = (n.isAuthenticated, n.setIsAuthenticated);
          return (0, Dn.jsxs)("button", {
            className:
              "px-10 md:px-14 py-4 flex items-center justify-center gap-x-2 rounded-r-2xl hover:bg-blue-800 w-full noSelect",
            onClick: function (t) {
              return (function (t) {
                t.preventDefault(), zn.remove("authToken"), r(!1), e("/");
              })(t);
            },
            children: [
              (0, Dn.jsx)("div", {
                className: "p-1 w-5",
                children: (0, Dn.jsx)("i", {
                  className: "fas fa-sign-out-alt",
                }),
              }),
              "Log Out",
            ],
          });
        },
        Hn = (0, t.createContext)(null);
      function $n() {
        var e = h((0, t.useState)(!1), 2),
          n = e[0],
          r = e[1],
          a = (0, t.useContext)(Hn),
          o = window.innerHeight;
        function l(e) {
          e.stopPropagation(), r(!n);
        }
        return (
          (0, t.useEffect)(function () {
            var e = function () {
              r(!1);
            };
            return (
              document.addEventListener("click", e),
              function () {
                document.removeEventListener("click", e);
              }
            );
          }, []),
          (0, Dn.jsxs)(Dn.Fragment, {
            children: [
              n
                ? (0, Dn.jsx)("img", {
                    src: Qe,
                    alt: "Menu",
                    width: 25,
                    className: "block fixed top-5 left-5 md:hidden z-50",
                    onClick: function (e) {
                      return l(e);
                    },
                  })
                : (0, Dn.jsx)("img", {
                    src: $e,
                    alt: "Menu",
                    width: 20,
                    className: "block fixed top-6 left-6 md:hidden z-50",
                    onClick: function (e) {
                      return l(e);
                    },
                  }),
              (0, Dn.jsx)("nav", {
                className: "".concat(
                  n ? "flex w-7/12 left-0 top-0" : "hidden",
                  " md:flex md:w-3/12 lg:w-2/12 bg-blue-600 text-white text-xs md:text-sm font-semibold fixed md:relative z-40",
                ),
                style: { height: o },
                onClick: function (e) {
                  e.stopPropagation();
                },
                children: (0, Dn.jsxs)("ul", {
                  className:
                    "flex flex-col gap-y-1.5 md:gap-y-0 w-full relative",
                  children: [
                    (0, Dn.jsx)(In, { size: "text-8xl md:text-6xl" }),
                    (0, Dn.jsxs)("div", {
                      className: "flex flex-col gap-y-1 md:gap-y-0",
                      children: [
                        (0, Dn.jsx)("a", {
                          href: "/home",
                          children: (0, Dn.jsxs)("li", {
                            className: "".concat(
                              "home" === a.location || "settings" === a.location
                                ? "bg-blue-900"
                                : "",
                              " justify-center py-4 flex items-center gap-x-1 md:gap-x-2 rounded-r-2xl hover:bg-blue-800 noSelect",
                            ),
                            children: [
                              (0, Dn.jsx)("div", {
                                className: "p-1 w-5",
                                children: (0, Dn.jsx)("i", {
                                  className: "fas fa-home",
                                }),
                              }),
                              (0, Dn.jsx)("span", {
                                className: "md:hidden inline",
                                children: "HOME",
                              }),
                              (0, Dn.jsx)("span", {
                                className: "md:inline hidden",
                                children: "Home",
                              }),
                            ],
                          }),
                        }),
                        (0, Dn.jsx)("a", {
                          href: "/myfiles",
                          children: (0, Dn.jsxs)("li", {
                            className: "".concat(
                              "shared" === a.location ? "bg-blue-900" : "",
                              " justify-center py-4 flex items-center gap-x-1 md:gap-x-2 rounded-r-2xl hover:bg-blue-800 noSelect",
                            ),
                            children: [
                              (0, Dn.jsx)("div", {
                                className: "p-1 w-5",
                                children: (0, Dn.jsx)("i", {
                                  className: "fas fa-share-alt",
                                }),
                              }),
                              (0, Dn.jsx)("span", {
                                className: "md:hidden inline",
                                children: "FILES",
                              }),
                              (0, Dn.jsx)("span", {
                                className: "md:inline hidden",
                                children: "My Files",
                              }),
                            ],
                          }),
                        }),
                        (0, Dn.jsx)("a", {
                          href: "/favorites",
                          children: (0, Dn.jsxs)("li", {
                            className: "".concat(
                              "favorites" === a.location ? "bg-blue-900" : "",
                              " justify-center py-4 flex items-center gap-x-1 md:gap-x-2 rounded-r-2xl hover:bg-blue-800 noSelect",
                            ),
                            children: [
                              (0, Dn.jsx)("div", {
                                className: "p-1 w-5",
                                children: (0, Dn.jsx)("i", {
                                  className: "fas fa-star",
                                }),
                              }),
                              (0, Dn.jsx)("span", {
                                className: "md:hidden inline",
                                children: "FAVORITES",
                              }),
                              (0, Dn.jsx)("span", {
                                className: "md:inline hidden",
                                children: "Favorites",
                              }),
                            ],
                          }),
                        }),
                        (0, Dn.jsx)("a", {
                          href: "/upload",
                          children: (0, Dn.jsxs)("li", {
                            className: "".concat(
                              "upload" === a.location ? "bg-blue-900" : "",
                              " justify-center py-4 flex items-center gap-x-1 md:gap-x-2 rounded-r-2xl hover:bg-blue-800 noSelect",
                            ),
                            children: [
                              (0, Dn.jsx)("div", {
                                className: "p-1 w-5",
                                children: (0, Dn.jsx)("i", {
                                  className: "fas fa-upload",
                                }),
                              }),
                              (0, Dn.jsx)("span", {
                                className: "md:hidden inline",
                                children: "UPLOAD",
                              }),
                              (0, Dn.jsx)("span", {
                                className: "hidden md:inline",
                                children: "Upload Files",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, Dn.jsxs)("div", {
                      className: "absolute bottom-3.5 w-full",
                      children: [
                        (0, Dn.jsx)("a", {
                          href: "/settings",
                          children: (0, Dn.jsxs)("li", {
                            className:
                              "px-10 md:px-14 py-4 flex items-center justify-center gap-x-2 rounded-r-2xl hover:bg-blue-800 noSelect",
                            children: [
                              (0, Dn.jsx)("div", {
                                className: "p-1 w-5",
                                children: (0, Dn.jsx)("i", {
                                  className: "fas fa-cog",
                                }),
                              }),
                              "Settings",
                            ],
                          }),
                        }),
                        (0, Dn.jsx)(Wn, {}),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function Qn(e) {
        var n = e.width,
          r = h((0, t.useState)(0), 2),
          a = r[0],
          o = r[1],
          l = h((0, t.useState)("MB"), 2),
          i = l[0],
          u = l[1],
          s = h((0, t.useState)(zn.get("authToken")), 2),
          c = s[0],
          f = (s[1], h((0, t.useState)(100), 2)),
          d = f[0],
          p = f[1];
        (0, t.useEffect)(
          function () {
            return v(a), function () {};
          },
          [a],
        ),
          (0, t.useEffect)(
            function () {
              var e = (function () {
                var e = Ge(
                  qe().mark(function e() {
                    var t;
                    return qe().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), m(c);
                            case 3:
                              (t = e.sent),
                                o(t[0]),
                                u(t[1]),
                                p(100 - t[2]),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(0)),
                                console.error("Error fetching storage:", e.t0);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 9]],
                    );
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              return c && e(), function () {};
            },
            [c],
          );
        var m = (function () {
            var e = Ge(
              qe().mark(function e(t) {
                var n;
                return qe().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            Tn.get(
                              "".concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/storage",
                              ),
                              {
                                headers: { Authorization: "Bearer ".concat(t) },
                              },
                            )
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            e.abrupt("return", [
                              n.data.storageUsed,
                              n.data.unit,
                              n.data.percentage,
                            ])
                          );
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            console.error("Files error:", e.t0);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          v = function (e) {
            var t = document.querySelector(".loading-bar");
            if (null !== t) {
              var n = (e / 100) * 100;
              t.style.width = "".concat(n, "%");
            }
          };
        return (0, Dn.jsxs)("div", {
          className: "flex flex-col bg-gray-200 rounded-xl noSelect ".concat(
            n || "w-full",
            " p-3 gap-y-3",
          ),
          children: [
            (0, Dn.jsxs)("div", {
              className: "text-sm flex flex-row justify-between",
              children: [
                (0, Dn.jsx)("h1", {
                  className: "text-blue-500 font-extrabold text-xs",
                  children: "Your Storage",
                }),
                (0, Dn.jsxs)("p", {
                  className: "text-emerald-500 text-xs",
                  children: [d, "% left"],
                }),
              ],
            }),
            (0, Dn.jsxs)("div", {
              className: "text-xs text-blue-500",
              children: [a, " ", i, " OF 3 GB USED"],
            }),
            (0, Dn.jsx)("div", {
              className: "loading-bar-container",
              children: (0, Dn.jsx)("div", { className: "loading-bar" }),
            }),
          ],
        });
      }
      function qn() {
        return (0, Dn.jsxs)("div", {
          className:
            " hidden md:flex flex-col bg-white rounded-3xl w-3/12 my-5 items-center p-5 mr-3 gap-y-4 h-fit",
          children: [
            (0, Dn.jsx)(Qn, {}),
            (0, Dn.jsx)(Mn, {
              style: "flex flex-col items-center justify-center gap-y-2.5",
              title: (0, Dn.jsx)("h2", {
                className: "font-semibold p-2 text-blue-500",
                children: "Categories",
              }),
              checkFav: !1,
            }),
          ],
        });
      }
      function Kn(e) {
        var n = "";
        e.defaultVal && (n = e.defaultVal);
        var r = h((0, t.useState)(n), 2),
          a = r[0],
          o = r[1];
        return (
          (0, t.useEffect)(
            function () {
              var e = function (e) {
                "Enter" === e.key &&
                  "" !== a.trim() &&
                  (e.preventDefault(),
                  (window.location.href = "/search?query=".concat(
                    encodeURIComponent(a),
                  )));
              };
              return (
                window.addEventListener("keydown", e),
                function () {
                  window.removeEventListener("keydown", e);
                }
              );
            },
            [a],
          ),
          (0, Dn.jsx)("div", {
            className: "flex justify-end md:justify-center w-11/12 pr-3",
            children: (0, Dn.jsxs)("div", {
              className:
                "bg-white w-7/12 md:w-10/12 flex flex-row gap-x-0.5 items-center justify-center rounded-3xl border-gray-300 hover:shadow-md noSelect",
              children: [
                (0, Dn.jsx)("i", {
                  className:
                    "fa fas fa-search text-gray-400 text-lg cursor-pointer",
                  "aria-hidden": "true",
                }),
                (0, Dn.jsx)("input", {
                  type: "text",
                  className: "w-9/12 md:w-11/12 h-10 px-2 focus:outline-none",
                  placeholder: "Search",
                  value: a,
                  onChange: function (e) {
                    return o(e.target.value);
                  },
                }),
              ],
            }),
          })
        );
      }
      var Gn = function (e) {
        var n = e.mylink,
          r = h((0, t.useState)(""), 2),
          a = r[0],
          o = r[1],
          l = h((0, t.useState)(!1), 2),
          i = l[0],
          u = l[1];
        return (0, Dn.jsxs)("div", {
          className:
            "flex flex-row items-center border justify-between rounded-md",
          children: [
            (0, Dn.jsx)("input", {
              type: "text",
              value: n,
              onChange: function (e) {
                return o(e.target.value);
              },
              placeholder: "Please wait...",
              className:
                "px-3 py-2 w-full text-sm font-medium text-slate-500 outline-none",
              readonly: !0,
            }),
            (0, Dn.jsx)("button", {
              onClick: function () {
                var e = document.createElement("textarea");
                (e.innerText = a),
                  document.body.appendChild(e),
                  e.select(),
                  navigator.clipboard.writeText(n).then(function () {
                    e.remove(), u(!0);
                  });
              },
              className:
                "bg-slate-300 text-white px-4 py-2 hover:bg-white hover:text-slate-200 hover:border cursor-pointer",
              children: i
                ? (0, Dn.jsx)("span", {
                    className: "text-xs font-black",
                    children: "Copied",
                  })
                : (0, Dn.jsx)("i", { className: "fas fa-copy" }),
            }),
          ],
        });
      };
      function Yn(e) {
        var n = e.link,
          r = e.isOpen,
          a = e.width,
          o = h((0, t.useState)(r), 2),
          l = o[0],
          i = o[1];
        return (
          (0, t.useEffect)(function () {
            function e() {
              i(!1);
            }
            return (
              document.body.addEventListener("click", e),
              function () {
                document.removeEventListener("click", e);
              }
            );
          }, []),
          l &&
            (0, Dn.jsx)("div", {
              className:
                "h-screen w-full fixed flex items-center justify-center top-0 left-0 z-50",
              children: (0, Dn.jsxs)("div", {
                className: "".concat(
                  a,
                  " bg-white rounded-2xl relative z-50 p-5 flex flex-col gap-y-5 shadow-md border z-50",
                ),
                onClick: function (e) {
                  e.stopPropagation();
                },
                children: [
                  (0, Dn.jsxs)("div", {
                    className: "flex flex-row gap-x-3 items-center h-fit",
                    children: [
                      (0, Dn.jsx)("i", {
                        className: "fas fa-share-alt text-blue-500",
                      }),
                      (0, Dn.jsx)("h1", {
                        className: "text-md text-blue-500 font-black",
                        children: "Share",
                      }),
                    ],
                  }),
                  (0, Dn.jsx)("h3", {
                    className: "text-xs text-gray-500 ml-2.5",
                    children: "Copy this link to share",
                  }),
                  (0, Dn.jsx)(Gn, { mylink: n }),
                  (0, Dn.jsx)("h3", {
                    className: "text-xs text-gray-500 ml-2.5 mb-3",
                    children: "Anyone with this link can view this file!",
                  }),
                  (0, Dn.jsx)("button", {
                    className: "absolute top-3 right-3 noSelect",
                    onClick: function (e) {
                      return (function (e) {
                        e.preventDefault(),
                          e.stopPropagation(),
                          i(!1),
                          (r = !r);
                      })(e);
                    },
                    children: (0, Dn.jsx)("i", {
                      className:
                        "fas fa-times-circle text-red-700 text-xl rounded-full",
                    }),
                  }),
                ],
              }),
            })
        );
      }
      function Jn(e) {
        var n = e.item,
          r = (e.favorite, h((0, t.useState)(""), 2)),
          a = r[0],
          o = r[1],
          l = h((0, t.useState)(!1), 2),
          i = l[0],
          u = l[1],
          s = h((0, t.useState)(!1), 2),
          c = s[0],
          f = s[1],
          d = h((0, t.useState)(!1), 2),
          p = (d[0], d[1]),
          m = h((0, t.useState)(!1), 2),
          v = (m[0], m[1]),
          g = h((0, t.useState)(!0), 2),
          y = g[0],
          x = g[1],
          b = h((0, t.useState)(!1), 2),
          w = b[0],
          k = b[1],
          S = h((0, t.useState)(""), 2),
          j = S[0],
          E = S[1],
          N = h((0, t.useState)(""), 2),
          C = N[0],
          P = N[1],
          _ = h((0, t.useState)(""), 2),
          O = _[0],
          R = _[1],
          A = h((0, t.useState)(""), 2),
          T = A[0],
          L = A[1],
          z = h((0, t.useState)(""), 2),
          F = z[0],
          D = z[1],
          U = h((0, t.useState)(!1), 2),
          B = U[0],
          I = U[1],
          M = h((0, t.useState)(""), 2),
          V = M[0],
          W = M[1],
          H = h((0, t.useState)(!1), 2),
          $ = H[0],
          Q = H[1],
          q = h((0, t.useState)(!1), 2),
          K = q[0],
          G = q[1],
          Y = h((0, t.useState)(zn.get("authToken")), 2),
          J = Y[0],
          X = (Y[1], h((0, t.useState)(null), 2)),
          Z = (X[0], X[1]),
          ee = h((0, t.useState)(window.innerWidth), 2),
          te = ee[0],
          ne = ee[1],
          re = h((0, t.useState)(""), 2),
          ae = (re[0], re[1], n.isFavorite);
        (0, t.useEffect)(function () {
          if ("pictures" === n.category) {
            var e = (function () {
              var e = Ge(
                qe().mark(function e() {
                  var t;
                  return qe().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Tn.get(
                              ""
                                .concat(
                                  "https://cloud-wave-app.onrender.com",
                                  "/api/image/",
                                )
                                .concat(n.name),
                              {
                                headers: { Authorization: "Bearer ".concat(J) },
                              },
                            )
                          );
                        case 2:
                          (t = e.sent),
                            D(t.data.extension),
                            u(!0),
                            E(t.data.dataBase64),
                            x(!1);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e();
          } else if ("videos" === n.category) {
            var t = (function () {
              var e = Ge(
                qe().mark(function e() {
                  var t;
                  return qe().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Tn.get(
                              ""
                                .concat(
                                  "https://cloud-wave-app.onrender.com",
                                  "/api/image/",
                                )
                                .concat(n.name),
                              {
                                headers: { Authorization: "Bearer ".concat(J) },
                              },
                            )
                          );
                        case 2:
                          (t = e.sent),
                            D(t.data.extension),
                            f(!0),
                            P(t.data.dataBase64),
                            x(!1);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            t();
          } else if ("audio" === n.category) {
            var r = (function () {
              var e = Ge(
                qe().mark(function e() {
                  var t;
                  return qe().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Tn.get(
                              ""
                                .concat(
                                  "https://cloud-wave-app.onrender.com",
                                  "/api/image/",
                                )
                                .concat(n.name),
                              {
                                headers: { Authorization: "Bearer ".concat(J) },
                              },
                            )
                          );
                        case 2:
                          (t = e.sent),
                            D(t.data.extension),
                            v(!0),
                            R(t.data.dataBase64),
                            x(!1);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            r();
          } else if ("documents" === n.category) {
            var a = (function () {
              var e = Ge(
                qe().mark(function e() {
                  var t;
                  return qe().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Tn.get(
                              ""
                                .concat(
                                  "https://cloud-wave-app.onrender.com",
                                  "/api/image/",
                                )
                                .concat(n.name),
                              {
                                headers: { Authorization: "Bearer ".concat(J) },
                              },
                            )
                          );
                        case 2:
                          (t = e.sent),
                            D(t.data.extension),
                            p(!0),
                            L(t.data.dataBase64),
                            x(!1);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            a();
          } else x(!1);
        }, []),
          (0, t.useEffect)(function () {
            var e = function () {
              ne(window.innerWidth);
            };
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, t.useEffect)(function () {
            function e() {
              Q(!1);
            }
            return (
              document.body.addEventListener("click", e),
              function () {
                document.removeEventListener("click", e);
              }
            );
          }, []),
          (0, t.useEffect)(
            function () {
              var e = (function () {
                var e = Ge(
                  qe().mark(function e() {
                    return qe().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                Tn.patch(
                                  ""
                                    .concat(
                                      "https://cloud-wave-app.onrender.com",
                                      "/api/updatefav/",
                                    )
                                    .concat(a),
                                  { isFavorite: !ae },
                                  {
                                    headers: {
                                      Authorization: "Bearer ".concat(J),
                                    },
                                  },
                                )
                              );
                            case 3:
                              window.location.reload(), (e.next = 9);
                              break;
                            case 6:
                              (e.prev = 6),
                                (e.t0 = e.catch(0)),
                                console.error(
                                  "Error updating favorites:",
                                  e.t0,
                                );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]],
                    );
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              return a && e(), function () {};
            },
            [a],
          );
        var oe = (function () {
          var e = Ge(
            qe().mark(function e(t, n) {
              return qe().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t.preventDefault(),
                          t.stopPropagation(),
                          (e.prev = 2),
                          (e.next = 5),
                          Tn.patch(
                            ""
                              .concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/rename/",
                              )
                              .concat(n),
                            { newName: V },
                            { headers: { Authorization: "Bearer ".concat(J) } },
                          )
                        );
                      case 5:
                        200 === e.sent.status &&
                          (I(!1), window.location.reload()),
                          (e.next = 12);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(2)),
                          console.error("Error renaming file:", e.t0);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 9]],
              );
            }),
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
        function le() {
          return (le = Ge(
            qe().mark(function e(t, n) {
              return qe().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      t.preventDefault(), t.stopPropagation(), o(n);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        function ie() {
          return (ie = Ge(
            qe().mark(function e(t) {
              var r;
              return qe().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          k(!0),
                          t.preventDefault(),
                          t.stopPropagation(),
                          (e.prev = 3),
                          (e.next = 6),
                          Tn.delete(
                            ""
                              .concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/delete/",
                              )
                              .concat(n.name),
                            { headers: { Authorization: "Bearer ".concat(J) } },
                          )
                        );
                      case 6:
                        (r = e.sent),
                          k(!1),
                          200 === r.status && window.location.reload(),
                          (e.next = 15);
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(3)),
                          console.error("Error deleting file:", e.t0),
                          window.location.reload();
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 11]],
              );
            }),
          )).apply(this, arguments);
        }
        return (0, Dn.jsxs)("div", {
          className:
            "relative z-50 flex flex-col w-full bg-slate-400 noSelect h-full ".concat(
              i | c ? "md:h-4/5" : "md:h-full",
            ),
          onClick: function (e) {
            e.stopPropagation(), Q(!1), G(!1);
          },
          children: [
            w && (0, Dn.jsx)(Un, { darkness: " z-40 " }),
            K &&
              (0, Dn.jsx)(Yn, {
                isOpen: K,
                link: n.link,
                width: "w-full md:w-4/12 lg:w-6/12",
              }),
            (0, Dn.jsxs)("div", {
              className:
                "relative h-full flex items-center justify-center w-full ".concat(
                  j ? "bg-gray-600" : "bg-gray-300",
                  " rounded-lg",
                ),
              children: [
                y && (0, Dn.jsx)(Un, { absolute: !0 }),
                j &&
                  (0, Dn.jsx)("img", {
                    src: "data:image/".concat(F, ";base64,") + j,
                    alt: "Preview",
                    style: {
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                      borderRadius: "0.5rem",
                    },
                  }),
                C &&
                  (0, Dn.jsx)("video", {
                    controls: !0,
                    style: {
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                      borderRadius: "0.5rem",
                    },
                    title: n.name,
                    autoPlay: !0,
                    playsInline: !0,
                    children: (0, Dn.jsx)("source", {
                      src: "data:video/".concat(F, ";base64,") + C,
                      type: "video/mp4",
                    }),
                  }),
                O &&
                  (0, Dn.jsx)("audio", {
                    controls: !0,
                    style: {
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                      borderRadius: "0.5rem",
                    },
                    autoPlay: !0,
                    volume: "0.5",
                    children: (0, Dn.jsx)("source", {
                      src: "data:audio/".concat(F, ";base64,") + O,
                      type: "audio/mp3",
                    }),
                  }),
                T &&
                  (0, Dn.jsx)("iframe", {
                    src:
                      F && "pdf" === F
                        ? "data:application/pdf;base64," + T
                        : "data:text/html;base64," + T,
                    style: {
                      width: "100%",
                      height: "100%",
                      borderRadius: "0.5rem",
                    },
                    title: n.name,
                    scrolling: "yes",
                  }),
                !j &&
                  !C &&
                  !O &&
                  !T &&
                  (0, Dn.jsx)("i", {
                    className: "fas ".concat(
                      n.icon ? n.icon : "fa-file-alt",
                      " text-gray-400 text-6xl",
                    ),
                  }),
              ],
            }),
            (0, Dn.jsxs)("div", {
              className: "flex flex-row justify-between",
              children: [
                (0, Dn.jsxs)("div", {
                  className: "flex flex-col gap-y-3 py-3",
                  children: [
                    (0, Dn.jsxs)("span", {
                      className: "flex flex-row gap-x-1 items-center",
                      children: [
                        (0, Dn.jsx)("i", {
                          className: "fas fa-star text-amber-500 text-lg",
                        }),
                        !0 === B
                          ? (0, Dn.jsx)("input", {
                              type: "text",
                              className:
                                "w-8/12 md:w-10/12 text-sm md:text-base text-slate-700 font-bold p-2",
                              value: V,
                              onChange: function (e) {
                                return W(e.target.value);
                              },
                              autoFocus: !0,
                              onBlur: function () {
                                return I(!1);
                              },
                              onKeyDown: function (e) {
                                "Enter" === e.key &&
                                  (e.preventDefault(), oe(e, n.name));
                              },
                            })
                          : (0, Dn.jsx)("h1", {
                              className: "text-blue-600 font-black text-lg",
                              children: (function (e) {
                                return te < 500
                                  ? e.name.length < 11
                                    ? e.name
                                    : e.name.slice(0, 14) + "..."
                                  : e.name.length > 23
                                  ? e.name.slice(0, 20) + "..."
                                  : e.name;
                              })(n),
                            }),
                      ],
                    }),
                    (0, Dn.jsx)("p", {
                      className: "text-xs text-gray-400",
                      children: n.time.toUpperCase(),
                    }),
                    (0, Dn.jsx)("span", {
                      className:
                        "text-sm bg-emerald-200 text-emerald-600 flex items-center rounded-xl px-4 w-fit",
                      children: "Personal",
                    }),
                  ],
                }),
                (0, Dn.jsxs)("div", {
                  className: "relative flex flex-row gap-x-2 md:gap-x-3 py-3",
                  children: [
                    (0, Dn.jsx)("i", {
                      className:
                        "fas fa-share-alt text-blue-700 cursor-pointer h-fit p-1.5 rounded-full hover:bg-slate-300",
                      onClick: function (e) {
                        return (function (e, t) {
                          e.preventDefault(),
                            e.stopPropagation(),
                            Z(t.name),
                            G(!K);
                        })(e, n);
                      },
                    }),
                    (0, Dn.jsx)("i", {
                      className:
                        "fas fa-trash text-blue-700 cursor-pointer h-fit p-1.5 rounded-full hover:bg-slate-300 text-red-700",
                      onClick: function (e) {
                        return (function (e) {
                          return ie.apply(this, arguments);
                        })(e);
                      },
                    }),
                    (0, Dn.jsx)("i", {
                      className:
                        "fas fa-ellipsis-v text-blue-700 cursor-pointer h-fit p-1 px-2.5 rounded-full hover:bg-slate-300",
                      onClick: function (e) {
                        return (function (e) {
                          e.stopPropagation(), Q(!$);
                        })(e);
                      },
                    }),
                    $ &&
                      (0, Dn.jsx)("div", {
                        className:
                          "origin-top-right absolute bottom-0 right-6 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50",
                        children: (0, Dn.jsxs)("div", {
                          className: "py-1 flex flex-col",
                          role: "menu",
                          "aria-orientation": "vertical",
                          "aria-labelledby": "options-menu",
                          children: [
                            (0, Dn.jsxs)("button", {
                              className:
                                "px-4 relative py-2 text-xs md:text-sm text-gray-700 hover:bg-slate-200 w-full flex flex-row justify-between items-center",
                              role: "menuitem",
                              onClick: function (e) {
                                e.preventDefault(),
                                  e.stopPropagation(),
                                  Q(!1),
                                  I(!0);
                              },
                              children: [
                                (0, Dn.jsx)("span", { children: "Rename" }),
                                (0, Dn.jsx)("i", {
                                  className:
                                    "fas fa-pen text-xs text-slate-700 absolute right-3",
                                }),
                              ],
                            }),
                            (0, Dn.jsxs)("button", {
                              className:
                                "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-slate-100 w-full flex flex-row justify-between items-center border-b",
                              role: "menuitem",
                              onClick: function (e) {
                                return (function (e, t) {
                                  e.preventDefault(),
                                    e.stopPropagation(),
                                    Q(!1),
                                    Z(t.name);
                                  var n = "data:image/jpeg;base64,".concat(j),
                                    r = document.createElement("a");
                                  (r.href = n),
                                    (r.download = t.name),
                                    r.click();
                                })(e, n);
                              },
                              children: [
                                (0, Dn.jsx)("span", { children: "Download" }),
                                (0, Dn.jsx)("i", {
                                  className:
                                    "fas fa-download text-xs text-blue-500",
                                }),
                              ],
                            }),
                            (0, Dn.jsxs)("button", {
                              className:
                                "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-slate-100 w-full flex flex-row justify-between items-center text-left",
                              role: "menuitem",
                              onClick: function (e) {
                                return (function (e, t) {
                                  return le.apply(this, arguments);
                                })(e, n.name);
                              },
                              children: [
                                (0, Dn.jsx)("span", {
                                  children:
                                    (!1 === n.isFavorite) | void 0
                                      ? "Add to favorites"
                                      : "Remove from favorites",
                                }),
                                (0, Dn.jsx)("i", {
                                  className: "fas fa-star text-xs ".concat(
                                    !0 === n.isFavorite ? "favorite" : "",
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var Xn = n.p + "static/media/Cloudwavehome.ebf934a0e4780ae91eb6.jpeg";
      function Zn() {
        return (0, Dn.jsx)("div", {
          className: "flex items-center justify-center h-full relative",
          children: (0, Dn.jsx)("svg", {
            className: "spinner-abs",
            viewBox: "0 0 50 50",
            children: (0, Dn.jsx)("circle", {
              className: "path",
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none",
              strokeWidth: "5",
            }),
          }),
        });
      }
      function er(e) {
        var n,
          r = e.title,
          a = e.showAll,
          o = e.category,
          l = e.SearchResults,
          i = e.padding,
          u = e.headerPadding,
          s = e.titleStyle,
          c = h((0, t.useState)([]), 2),
          f = c[0],
          d = c[1],
          p = h((0, t.useState)(!1), 2),
          m = p[0],
          g = p[1],
          y = h((0, t.useState)(!1), 2),
          x = y[0],
          b = y[1],
          w = h((0, t.useState)([]), 2),
          k = w[0],
          S = w[1],
          j = h((0, t.useState)(zn.get("authToken")), 2),
          E = j[0],
          N = (j[1], h((0, t.useState)([]), 2)),
          C = N[0],
          P = N[1],
          _ = h((0, t.useState)(null), 2),
          O = (_[0], _[1]),
          R = h((0, t.useState)(""), 2),
          A = R[0],
          T = R[1],
          L = h((0, t.useState)(""), 2),
          z = L[0],
          F = L[1],
          D = h((0, t.useState)(!0), 2),
          U = D[0],
          B = D[1],
          I = h((0, t.useState)(!1), 2),
          M = I[0],
          V = I[1],
          W = h((0, t.useState)(""), 2),
          H = W[0],
          $ = W[1],
          Q = h((0, t.useState)(!1), 2),
          q = Q[0],
          K = (Q[1], h((0, t.useState)(window.innerWidth), 2)),
          G = K[0],
          Y = K[1];
        function J(e) {
          return G < 500
            ? e.name.length < 11
              ? e.name
              : e.name.slice(0, 14) + "..."
            : e.name.length > 23
            ? e.name.slice(0, 20) + "..."
            : e.name;
        }
        (n = o
          ? ""
              .concat("https://cloud-wave-app.onrender.com", "/api/files/")
              .concat(o)
          : "".concat("https://cloud-wave-app.onrender.com", "/api/files")),
          (0, t.useEffect)(function () {
            var e = function () {
              Y(window.innerWidth);
            };
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []);
        var X = (function () {
          var e = Ge(
            qe().mark(function e(t) {
              var r;
              return qe().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Tn.get(n, {
                            headers: { Authorization: "Bearer ".concat(t) },
                          })
                        );
                      case 3:
                        return (r = e.sent), e.abrupt("return", r.data.files);
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          console.error("Files error:", e.t0);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]],
              );
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        (0, t.useEffect)(
          function () {
            var e = (function () {
              var e = Ge(
                qe().mark(function e() {
                  var t;
                  return qe().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), X(E);
                          case 3:
                            (t = e.sent),
                              B(!1),
                              t &&
                                P(
                                  !0 === a
                                    ? t
                                    : t.slice(-Math.min(5, t.length)).reverse(),
                                ),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.error("Error fetching files:", e.t0);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]],
                  );
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            return l ? (P(l), B(!1)) : E && !l && e(), function () {};
          },
          [E, q],
        );
        var Z = (function () {
          var e = Ge(
            qe().mark(function e(t, n) {
              return qe().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      n.preventDefault(),
                        n.stopPropagation(),
                        d(
                          f.filter(function (e) {
                            return e !== t;
                          }),
                        ),
                        k.includes(t)
                          ? S(
                              k.filter(function (e) {
                                return e !== t;
                              }),
                            )
                          : S([].concat(v(k), [t]));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
        (0, t.useEffect)(function () {
          function e() {
            d([]), S([]);
          }
          return (
            document.body.addEventListener("click", e),
            function () {
              document.removeEventListener("click", e);
            }
          );
        }, []);
        var ee = (function () {
          var e = Ge(
            qe().mark(function e(t, n) {
              return qe().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t.preventDefault(),
                          t.stopPropagation(),
                          (e.prev = 2),
                          (e.next = 5),
                          Tn.patch(
                            ""
                              .concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/rename/",
                              )
                              .concat(n),
                            { newName: H },
                            { headers: { Authorization: "Bearer ".concat(E) } },
                          )
                        );
                      case 5:
                        200 === e.sent.status &&
                          (V(!1), window.location.reload()),
                          (e.next = 12);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(2)),
                          console.error("Error renaming file:", e.t0);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 9]],
              );
            }),
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
        function te() {
          return (te = Ge(
            qe().mark(function e(t, n) {
              return qe().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          d([]),
                          g(!0),
                          t.preventDefault(),
                          t.stopPropagation(),
                          (e.prev = 4),
                          (e.next = 7),
                          Tn.delete(
                            ""
                              .concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/delete/",
                              )
                              .concat(n),
                            { headers: { Authorization: "Bearer ".concat(E) } },
                          )
                        );
                      case 7:
                        200 === e.sent.status &&
                          (P(
                            C.filter(function (e) {
                              return e.name !== n;
                            }),
                          ),
                          g(!1),
                          window.location.reload()),
                          (e.next = 14);
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(4)),
                          console.error("Error deleting file:", e.t0);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 11]],
              );
            }),
          )).apply(this, arguments);
        }
        function ne() {
          return (ne = Ge(
            qe().mark(function e(t, n) {
              return qe().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      g(!0),
                        t.preventDefault(),
                        t.stopPropagation(),
                        F(n.name),
                        d(
                          f.filter(function (e) {
                            return e !== n;
                          }),
                        ),
                        g(!1),
                        window.location.reload();
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        return (
          (0, t.useEffect)(
            function () {
              var e = (function () {
                var e = Ge(
                  qe().mark(function e() {
                    return qe().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                Tn.patch(
                                  ""
                                    .concat(
                                      "https://cloud-wave-app.onrender.com",
                                      "/api/updatefav/",
                                    )
                                    .concat(z),
                                  { isFavorite: !0 },
                                  {
                                    headers: {
                                      Authorization: "Bearer ".concat(E),
                                    },
                                  },
                                )
                              );
                            case 3:
                              e.sent, (e.next = 9);
                              break;
                            case 6:
                              (e.prev = 6),
                                (e.t0 = e.catch(0)),
                                console.error(
                                  "Error updating favorites:",
                                  e.t0,
                                );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]],
                    );
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              return z && e(), function () {};
            },
            [z],
          ),
          (0, Dn.jsxs)("div", {
            className: "h-full flex gap-y-4 flex-col p-12 ".concat(
              i || "px-0 md:px-4",
              " md:px-12 py-4 w-full",
            ),
            id: "recents",
            children: [
              m && (0, Dn.jsx)(Un, {}),
              x &&
                (0, Dn.jsx)(Yn, {
                  isOpen: x,
                  link: A,
                  width: "w-11/12 md:w-4/12",
                }),
              (0, Dn.jsx)("h1", {
                className: "text-blue-700 text-xl font-extrabold "
                  .concat(s && s, " ")
                  .concat(u && u),
                children: r,
              }),
              (0, Dn.jsxs)("div", {
                className: "flex flex-col gap-y-2.5",
                children: [
                  U && (0, Dn.jsx)(Zn, {}),
                  C.length > 0
                    ? C.map(function (e) {
                        return (0, Dn.jsxs)(
                          "div",
                          {
                            className:
                              "flex flex-row justify-between bg-white p-2.5 rounded-xl items-center gap-x-1.5 pr-4 cursor-pointer hover:border hover:shadow-md noSelect",
                            onClick: function (t) {
                              return Z(e, t);
                            },
                            children: [
                              k.includes(e) &&
                                (0, Dn.jsx)("div", {
                                  className:
                                    "fixed top-0 left-0 flex justify-center items-center w-full h-screen z-50",
                                  children: (0, Dn.jsxs)("div", {
                                    className:
                                      "flex p-5 md:p-8 bg-slate-400 w-11/12 md:w-9/12 relative h-4/6 md:h-5/6 rounded-xl border",
                                    onClick: function (e) {
                                      e.stopPropagation();
                                    },
                                    children: [
                                      (0, Dn.jsx)("button", {
                                        className:
                                          "absolute top-1 right-1 md:top-2 md:right-2 text-white",
                                        onClick: function (t) {
                                          Z(e, t);
                                        },
                                        children: (0, Dn.jsx)("i", {
                                          className:
                                            "fas fa-times-circle text-red-700 text-lg rounded-full",
                                        }),
                                      }),
                                      (0, Dn.jsx)(Jn, { item: e }),
                                    ],
                                  }),
                                }),
                              (0, Dn.jsx)("div", {
                                className:
                                  "bg-indigo-500 p-2 rounded-lg w-9 h-9 flex items-center justify-center",
                                children: (0, Dn.jsx)("i", {
                                  className: "fas ".concat(
                                    e.icon ? e.icon : "fa-file-alt",
                                    " text-white text-sm",
                                  ),
                                }),
                              }),
                              !0 === M
                                ? (0, Dn.jsx)("input", {
                                    type: "text",
                                    className:
                                      "w-8/12 md:w-10/12 text-sm md:text-base text-slate-700 font-bold p-2",
                                    value: H,
                                    onChange: function (e) {
                                      return $(e.target.value);
                                    },
                                    autoFocus: !0,
                                    onBlur: function () {
                                      return V(!1);
                                    },
                                    onKeyDown: function (t) {
                                      "Enter" === t.key &&
                                        (t.preventDefault(),
                                        d([]),
                                        ee(t, e.name));
                                    },
                                  })
                                : (0, Dn.jsxs)("div", {
                                    className:
                                      "flex flex-row w-9/12 justify-between items-center",
                                    children: [
                                      (0, Dn.jsx)("h2", {
                                        className:
                                          "break-all md:break-normal w-9/12 p-2 text-sm md:text-md",
                                        children: J(e),
                                      }),
                                      (0, Dn.jsx)("div", {
                                        className:
                                          "px-1 rounded-full hover:bg-gray-200 hover:bg-slate-100",
                                        onClick: function (t) {
                                          return (function (e, t) {
                                            e.preventDefault(),
                                              e.stopPropagation(),
                                              O(t.name),
                                              b(!x),
                                              T(t.link);
                                          })(t, e);
                                        },
                                        children: (0, Dn.jsx)("i", {
                                          className:
                                            "fas fa-share-alt text-indigo-500 cursor-pointer",
                                        }),
                                      }),
                                    ],
                                  }),
                              (0, Dn.jsxs)("div", {
                                className: "".concat(
                                  k.includes(e) ? " " : "relative",
                                  " w-2/12 text-right",
                                ),
                                children: [
                                  (0, Dn.jsx)("button", {
                                    type: "button",
                                    className:
                                      "inline-flex items-center p-1 focus:outline-none hover:bg-gray-100 hover:bg-slate-100 rounded-2xl",
                                    onClick: function (t) {
                                      return (function (e, t) {
                                        t.stopPropagation(),
                                          f.includes(e)
                                            ? d(
                                                f.filter(function (t) {
                                                  return t !== e;
                                                }),
                                              )
                                            : d([].concat(v(f), [e]));
                                      })(e, t);
                                    },
                                    children: (0, Dn.jsx)("i", {
                                      className:
                                        "fas fa-ellipsis-h text-indigo-500 text-lg z-10",
                                    }),
                                  }),
                                  f.includes(e) &&
                                    (0, Dn.jsx)("div", {
                                      className:
                                        "origin-top-right absolute right-0 mt-2 w-36 md:w-40 rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5 z-50",
                                      children: (0, Dn.jsxs)("div", {
                                        className: "py-1 flex flex-col",
                                        role: "menu",
                                        "aria-orientation": "vertical",
                                        "aria-labelledby": "options-menu",
                                        children: [
                                          (0, Dn.jsxs)("button", {
                                            className:
                                              "px-4 relative py-2 text-xs md:text-sm text-gray-700 hover:bg-slate-200 w-full flex flex-row justify-between items-center",
                                            role: "menuitem",
                                            onClick: function (t) {
                                              t.preventDefault(),
                                                t.stopPropagation(),
                                                d(
                                                  f.filter(function (t) {
                                                    return t !== e;
                                                  }),
                                                ),
                                                V(!0);
                                            },
                                            children: [
                                              (0, Dn.jsx)("span", {
                                                children: "Rename",
                                              }),
                                              (0, Dn.jsx)("i", {
                                                className:
                                                  "fas fa-pen text-xs text-slate-700 absolute right-3",
                                              }),
                                            ],
                                          }),
                                          (0, Dn.jsxs)("button", {
                                            className:
                                              "px-4 py-2 relative text-xs md:text-sm text-gray-700 hover:bg-slate-200 w-full flex flex-row justify-between items-center border-b",
                                            role: "menuitem",
                                            onClick: function (t) {
                                              return (function (e, t) {
                                                e.preventDefault(),
                                                  e.stopPropagation(),
                                                  d([]),
                                                  O(t.name);
                                                var n =
                                                    "data:image/jpeg;base64,".concat(
                                                      t.base64,
                                                    ),
                                                  r =
                                                    document.createElement("a");
                                                (r.href = n),
                                                  (r.download = t.name),
                                                  r.click();
                                              })(t, e);
                                            },
                                            children: [
                                              (0, Dn.jsx)("span", {
                                                children: "Download",
                                              }),
                                              (0, Dn.jsx)("i", {
                                                className:
                                                  "fas fa-download text-xs text-blue-500 absolute right-3",
                                              }),
                                            ],
                                          }),
                                          (0, Dn.jsxs)("button", {
                                            className:
                                              "px-4 relative py-2 text-xs md:text-sm text-gray-700 hover:bg-slate-200 w-full flex flex-row justify-between items-center border-b text-left",
                                            role: "menuitem",
                                            onClick: function (t) {
                                              return (function (e, t) {
                                                return ne.apply(
                                                  this,
                                                  arguments,
                                                );
                                              })(t, e);
                                            },
                                            children: [
                                              (0, Dn.jsx)("span", {
                                                children:
                                                  (!1 === e.isFavorite) | void 0
                                                    ? "Add to favorites"
                                                    : "Remove from favorites",
                                              }),
                                              (0, Dn.jsx)("i", {
                                                className:
                                                  "fas fa-star text-sm  absolute right-2.5 ".concat(
                                                    !0 === e.isFavorite
                                                      ? "text-amber-500"
                                                      : "text-white",
                                                  ),
                                              }),
                                            ],
                                          }),
                                          (0, Dn.jsxs)("button", {
                                            className:
                                              "px-4 relative py-2 text-xs md:text-sm text-gray-700 hover:bg-slate-200 w-full flex flex-row justify-between items-center",
                                            role: "menuitem",
                                            onClick: function (t) {
                                              return (function (e, t) {
                                                return te.apply(
                                                  this,
                                                  arguments,
                                                );
                                              })(t, e.name);
                                            },
                                            children: [
                                              (0, Dn.jsx)("span", {
                                                children: "Delete",
                                              }),
                                              (0, Dn.jsx)("i", {
                                                className:
                                                  "fas fa-trash text-xs text-red-700 absolute right-3",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          },
                          e.id,
                        );
                      })
                    : !U &&
                      (0, Dn.jsxs)("div", {
                        className:
                          "text-xl md:text-2xl pt-6 text-center text-slate-400",
                        children: [
                          "No ",
                          o || "files",
                          " ",
                          "audio" === o && "files",
                          " found..",
                        ],
                      }),
                ],
              }),
            ],
          })
        );
      }
      function tr() {
        return (0, Dn.jsxs)("div", {
          className:
            "flex flex-col w-full md:w-7/12 py-4 items-center justify-center gap-y-5",
          children: [
            (0, Dn.jsx)(Kn, {}),
            (0, Dn.jsx)(Bn, {}),
            (0, Dn.jsx)("div", {
              className: "block md:hidden w-full",
              children: (0, Dn.jsx)(Mn, {
                style:
                  "flex flex-row space-x-2.5 overflow-x-scroll overflow-y-hidden md:overflow-hidden",
                elementWidth: "w-36",
                checkFav: !1,
              }),
            }),
            (0, Dn.jsx)(er, {
              title: "Recently Uploaded",
              padding: "px-3",
              headerPadding: "pl-3 md:pl-0",
            }),
            (0, Dn.jsx)("div", {
              className:
                "md:hidden w-11/12 h-fit p-2.5 bg-white rounded-2xl flex justify-center",
              children: (0, Dn.jsx)(Qn, {}),
            }),
          ],
        });
      }
      function nr() {
        var e = h((0, t.useState)(zn.get("authToken")), 2),
          n = e[0];
        e[1];
        (0, t.useEffect)(
          function () {
            n || (window.location.href = "/login");
          },
          [n],
        );
        var r = window.innerHeight;
        return (0, Dn.jsxs)("div", {
          className: "flex flex-row gap-x-8 bg-slate-200",
          style: { minHeight: r },
          children: [
            (0, Dn.jsx)($n, {}),
            (0, Dn.jsx)(tr, {}),
            (0, Dn.jsx)(qn, {}),
          ],
        });
      }
      var rr = n.p + "static/media/oval.3b24a6b94b2631f4d565d76f4f7f18d6.svg";
      function ar() {
        var e = h((0, t.useState)(zn.get("authToken")), 2),
          n = e[0],
          r = (e[1], h((0, t.useState)(!1), 2)),
          a = r[0],
          o = r[1],
          l = h((0, t.useState)({ firstname: "", lastname: "", phone: "" }), 2),
          u = l[0],
          c = l[1],
          f = h((0, t.useState)({ firstname: "", lastname: "", phone: "" }), 2),
          d = f[0],
          p = f[1];
        (0, t.useEffect)(
          function () {
            return n && v(), function () {};
          },
          [n],
        );
        var m = function (e) {
            var t = e.target,
              n = t.name,
              r = t.value;
            p(function (e) {
              return s(s({}, e), {}, i({}, n, r));
            });
          },
          v = (function () {
            var e = Ge(
              qe().mark(function e() {
                var t;
                return qe().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            Tn.get(
                              "".concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/user",
                              ),
                              {
                                headers: { Authorization: "Bearer ".concat(n) },
                              },
                            )
                          );
                        case 3:
                          (t = e.sent), c(t.data.user), (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            console.error("Error getting user info:", e.t0);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          g = (function () {
            var e = Ge(
              qe().mark(function e(t) {
                var r, a, l;
                return qe().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          for (a in (t.preventDefault(),
                          o(!0),
                          setTimeout(function () {
                            o(!1);
                          }, 5e3),
                          (e.prev = 3),
                          (r = {}),
                          d))
                            d[a] !== u[a] && (r[a] = d[a]);
                          if (0 !== Object.keys(r).length) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt("return");
                        case 8:
                          return (
                            (e.next = 10),
                            Tn.patch(
                              "".concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/update",
                              ),
                              r,
                              {
                                headers: { Authorization: "Bearer ".concat(n) },
                              },
                            )
                          );
                        case 10:
                          (l = e.sent),
                            o(!1),
                            200 === l.status
                              ? alert(
                                  "Personal information updated successfully.",
                                )
                              : alert("Error updating personal information."),
                            (e.next = 18);
                          break;
                        case 15:
                          (e.prev = 15),
                            (e.t0 = e.catch(3)),
                            console.error("Error updating user info:", e.t0);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 15]],
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, Dn.jsxs)("div", {
          className: "w-full p-8 pb-4 flex flex-col",
          children: [
            (0, Dn.jsx)("h1", {
              className: "text-blue-700 text-xl font-extrabold ml-4 md:ml-0",
              children: "Personal Information",
            }),
            (0, Dn.jsx)("h3", {
              className: "text-sm text-gray-500 my-3",
              children: "Edit your information: ",
            }),
            (0, Dn.jsxs)("div", {
              className:
                "flex flex-col md:flex-row w-full justify-between gap-y-7",
              children: [
                (0, Dn.jsxs)("span", {
                  className: "flex flex-row justify-evenly md:w-9/12",
                  children: [
                    (0, Dn.jsxs)("div", {
                      className:
                        "w-3/12 h-full flex flex-col gap-y-3 items-center justify-center",
                      children: [
                        (0, Dn.jsx)("label", {
                          htmlFor: "avatar",
                          className: "text-sm font-medium text-gray-500",
                          children: "Avatar",
                        }),
                        (0, Dn.jsx)(In, {
                          size: "text-9xl",
                          hidePen: !0,
                          imgSize: "h-32 w-32",
                          id: "avatar",
                        }),
                      ],
                    }),
                    (0, Dn.jsxs)("div", {
                      className: "flex flex-col p-3 gap-y-4 w-7/12 md:w-6/12",
                      children: [
                        (0, Dn.jsxs)("div", {
                          className:
                            "flex flex-col w-full gap-y-2 items-center md:items-start",
                          children: [
                            (0, Dn.jsx)("label", {
                              htmlFor: "firstname",
                              className: "text-sm font-medium text-gray-500",
                              children: "First Name",
                            }),
                            (0, Dn.jsx)("input", {
                              name: "firstname",
                              className:
                                "w-10/12 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                              type: "text",
                              placeholder: u.firstname
                                ? u.firstname
                                : d.firstname,
                              onChange: function (e) {
                                return m(e);
                              },
                            }),
                          ],
                        }),
                        (0, Dn.jsxs)("div", {
                          className:
                            "flex flex-col w-full gap-y-2 items-center md:items-start",
                          children: [
                            (0, Dn.jsx)("label", {
                              htmlFor: "lastname",
                              className: "text-sm font-medium text-gray-500",
                              children: "Last Name",
                            }),
                            (0, Dn.jsx)("input", {
                              name: "lastname",
                              className:
                                "w-10/12 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                              type: "text",
                              placeholder: u.lastname ? u.lastname : d.lastname,
                              onChange: function (e) {
                                return m(e);
                              },
                            }),
                          ],
                        }),
                        (0, Dn.jsxs)("div", {
                          className:
                            "flex flex-col w-full gap-y-2 items-center md:items-start",
                          children: [
                            (0, Dn.jsx)("label", {
                              htmlFor: "phone",
                              className: "text-sm font-medium text-gray-500",
                              children: "Phone",
                            }),
                            (0, Dn.jsx)("input", {
                              name: "phone",
                              className:
                                "w-10/12 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",
                              type: "tel",
                              value: u.phone ? u.phone : d.phone,
                              onChange: function (e) {
                                return m(e);
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Dn.jsx)("div", {
                  className:
                    "relative w-6/12 h-fit md:h-full md:w-3/12 flex items-center justify-center md:block",
                  children: (0, Dn.jsx)("button", {
                    className:
                      "relative md:absolute border-current border text-blue-500 px-4 py-2.5 rounded-lg bottom-3 left-0 hover:bg-blue-600 hover:text-white text-sm w-full flex justify-center items-center".concat(
                        a ? "opacity-50 cursor-not-allowed" : "",
                      ),
                    onClick: function (e) {
                      return g(e);
                    },
                    children: a
                      ? (0, Dn.jsx)("img", {
                          height: "18px",
                          width: "18px",
                          src: rr,
                          alt: "Loading..",
                          className: "spin",
                        })
                      : "Save",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function or() {
        return (0, Dn.jsx)("div", {
          className: "w-full h-7 md:h-9 bg-blue-600 absolute bottom-0",
          children: (0, Dn.jsx)("h3", {
            className:
              "absolute bottom-0 left-0 w-full text-center text-xs md:text-sm py-2 text-white",
            children: "CLOUD WAVE 2023 | ALL RIGHTS RESERVED.",
          }),
        });
      }
      function lr() {
        var e = h((0, t.useState)(""), 2),
          n = e[0];
        e[1];
        return (
          (0, t.useContext)(Hn).setLocation("settings"),
          (0, Dn.jsxs)("div", {
            className:
              "flex flex-row w-full bg-slate-200 min-h-screen relative",
            children: [
              (0, Dn.jsx)($n, {}),
              (0, Dn.jsxs)("div", {
                className: "flex flex-col w-full md:w-10/12 relative",
                children: [
                  (0, Dn.jsx)(ar, {}),
                  (0, Dn.jsx)(or, {}),
                  (0, Dn.jsx)("a", {
                    href: "mailto:folarinraphael@outlook.com",
                    className: "absolute right-10 bottom-14 ",
                    children: (0, Dn.jsxs)("svg", {
                      className: "w-12 h-12 hover:".concat(n),
                      fill: "#3B82F6",
                      viewBox: "0 0 1920 1920",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, Dn.jsx)("g", {
                          id: "SVGRepo_bgCarrier",
                          "stroke-width": "0",
                        }),
                        (0, Dn.jsx)("g", {
                          id: "SVGRepo_tracerCarrier",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                        }),
                        (0, Dn.jsx)("g", {
                          id: "SVGRepo_iconCarrier",
                          children: (0, Dn.jsx)("path", {
                            d: "M84 0v1423.143h437.875V1920l621.235-496.857h692.39V0H84Zm109.469 109.464H1726.03V1313.57h-621.235l-473.452 378.746V1313.57H193.469V109.464Z",
                            "fill-rule": "evenodd",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function ir() {
        return (0, Dn.jsxs)("div", {
          className: "flex flex-col w-11/12 md:w-11/12 gap-y-5",
          children: [
            (0, Dn.jsx)("h1", {
              className: "text-blue-700 text-xl font-extrabold",
              children: "My Folders",
            }),
            (0, Dn.jsx)("div", {
              className: "w-full",
              children: (0, Dn.jsxs)("a", {
                href: "/files",
                className:
                  "flex p-5 px-6 flex-col gap-y-2 w-fit hover:bg-gray-300 rounded-lg hover:border cursor-pointer",
                children: [
                  (0, Dn.jsx)("span", {
                    className: "md:inline hidden",
                    children: (0, Dn.jsx)("i", {
                      className: "fas fa-folder-open fa-4x text-indigo-500",
                    }),
                  }),
                  (0, Dn.jsx)("span", {
                    className: "md:hidden inline",
                    children: (0, Dn.jsx)("i", {
                      className: "fas fa-folder-open text-6xl text-indigo-500",
                    }),
                  }),
                  (0, Dn.jsx)("h2", {
                    className: "text-gray-500 text-xs md:text-sm text-center",
                    children: "All files",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function ur() {
        return (0, Dn.jsxs)("div", {
          className:
            "flex flex-col w-full md:w-10/12 items-center py-4 px-2 md:px-8 gap-y-4 relative min-h-screen",
          children: [
            (0, Dn.jsx)(Kn, {}),
            (0, Dn.jsx)(ir, {}),
            (0, Dn.jsx)("div", {
              className: "w-full",
              children: (0, Dn.jsx)(er, {
                title: "Recent Files",
                padding: "px-2",
                headerPadding: "pl-2 md:pl-0",
              }),
            }),
          ],
        });
      }
      function sr() {
        return (
          (0, t.useContext)(Hn).setLocation("shared"),
          (0, Dn.jsxs)("div", {
            className: "flex flex-row bg-slate-200 w-full min-h-screen",
            children: [(0, Dn.jsx)($n, {}), (0, Dn.jsx)(ur, {})],
          })
        );
      }
      var cr = (0, t.createContext)(null);
      function fr() {
        var e = h((0, t.useState)(!1), 2),
          n = e[0],
          r = e[1],
          a = h((0, t.useState)(zn.get("authToken")), 2),
          o = a[0],
          l = (a[1], h((0, t.useState)(!1), 2)),
          i = l[0],
          u = l[1],
          s = (0, t.useContext)(cr),
          c = h((0, t.useState)(v(s.uploads)), 2),
          f = c[0],
          d = c[1],
          p = function (e) {
            var t = e.type.split("/")[1],
              n = {
                image: ["jpg", "jpeg", "png", "gif"],
                music: ["mp3", "wav", "ogg"],
                video: ["mp4", "avi", "mov", "mkv"],
                "file-alt": ["pdf", "doc", "docx", "txt"],
              };
            for (var r in n) if (n[r].includes(t)) return r;
            return "document";
          },
          m = (function () {
            var e = Ge(
              qe().mark(function e(t) {
                var n, r, a, l, i, c;
                return qe().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          u(!0),
                            t.preventDefault(),
                            (n =
                              void 0 !== t.dataTransfer
                                ? t.dataTransfer.files
                                : t.target.files),
                            (r = new FormData()),
                            (a = P(n)),
                            (e.prev = 5),
                            (i = qe().mark(function e() {
                              var t;
                              return qe().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (t = l.value),
                                        r.append("files", t),
                                        (t.category = p(t)),
                                        d(function (e) {
                                          return [].concat(v(e), [t]);
                                        });
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })),
                            a.s();
                        case 8:
                          if ((l = a.n()).done) {
                            e.next = 12;
                            break;
                          }
                          return e.delegateYield(i(), "t0", 10);
                        case 10:
                          e.next = 8;
                          break;
                        case 12:
                          e.next = 17;
                          break;
                        case 14:
                          (e.prev = 14), (e.t1 = e.catch(5)), a.e(e.t1);
                        case 17:
                          return (e.prev = 17), a.f(), e.finish(17);
                        case 20:
                          return (
                            (e.prev = 20),
                            (e.next = 23),
                            Tn.post(
                              "".concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/upload",
                              ),
                              r,
                              {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                  Authorization: "Bearer ".concat(o),
                                },
                              },
                            )
                          );
                        case 23:
                          201 === (c = e.sent).status || 200 === c.status
                            ? s.setUploads(function (e) {
                                return [].concat(v(e), v(f));
                              })
                            : alert("Failed to upload files!"),
                            (e.next = 30);
                          break;
                        case 27:
                          (e.prev = 27),
                            (e.t2 = e.catch(20)),
                            console.error("Upload error:", e.t2);
                        case 30:
                          u(!1);
                        case 31:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [5, 14, 17, 20],
                    [20, 27],
                  ],
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, Dn.jsxs)("div", {
          className:
            "flex flex-col p-4 items-center bg-white w-full md:w-8/12 lg:w-7/12 rounded-lg gap-y-5",
          children: [
            i && (0, Dn.jsx)(Un, {}),
            (0, Dn.jsx)("h1", {
              className:
                "text-xl md:text-2xl text-blue-600 font-black py-1 md:py-2",
              children: "Upload Files",
            }),
            (0, Dn.jsx)("div", {
              className:
                "flex flex-col w-full md:w-11/12 py-11 items-center bg-slate-200 rounded-lg cursor-pointer md:hover:transform md:hover:scale-105 transition-transform duration-300 noSelect\n            ".concat(
                  n ? " border-2 border-blue-500 " : "",
                ),
              onDragEnter: function (e) {
                e.preventDefault(), r(!0);
              },
              onDragOver: function (e) {
                e.preventDefault();
              },
              onDragLeave: function () {
                r(!1);
              },
              onDrop: function (e) {
                e.preventDefault(), r(!1), m(e);
              },
              children: (0, Dn.jsxs)("div", {
                className:
                  "flex flex-col justify-center items-center gap-y-7 text-blue-500 ",
                children: [
                  (0, Dn.jsx)("i", {
                    className: "fas fa-cloud-upload-alt text-4xl",
                  }),
                  (0, Dn.jsxs)("div", {
                    className: "flex flex-col gap-y-2.5 items-center",
                    children: [
                      (0, Dn.jsx)("p", {
                        className: "text-sm font-extrabold",
                        children: "Drag and drop your files here",
                      }),
                      (0, Dn.jsx)("p", {
                        className: "text-xs text-gray-500",
                        children: "or",
                      }),
                      (0, Dn.jsxs)("button", {
                        className:
                          "w-10/12 md:w-fit text-xs md:text-sm border-current border py-2.5 px-7 rounded-md hover:bg-blue-500 hover:text-white hover:w-11/12 md:hover:w-full relative overflow-hidden",
                        children: [
                          (0, Dn.jsx)("span", {
                            className: "relative z-10 hidden md:block",
                            children: "Choose a file from your computer",
                          }),
                          (0, Dn.jsx)("span", {
                            className: "relative z-10 block md:hidden",
                            children: "Choose a file",
                          }),
                          (0, Dn.jsx)("input", {
                            type: "file",
                            className:
                              "bg-black absolute top-0 left-0 w-full h-full z-20 opacity-0 cursor-pointer",
                            name: "file",
                            onChange: m,
                            multiple: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function dr() {
        var e = h((0, t.useState)(100), 2),
          n = e[0],
          r = (e[1], h((0, t.useState)([]), 2)),
          a = r[0],
          o = r[1],
          l = h((0, t.useState)(window.innerWidth), 2),
          i = l[0],
          u = l[1],
          s = (0, t.useContext)(cr);
        return (
          (0, t.useEffect)(
            function () {
              return o(s.uploads), function () {};
            },
            [s.uploads],
          ),
          (0, t.useEffect)(function () {
            var e = function () {
              u(window.innerWidth);
            };
            return (
              document.addEventListener("resize", e),
              function () {
                document.removeEventListener("resize", e);
              }
            );
          }),
          a.length >= 1 &&
            (0, Dn.jsxs)("div", {
              className:
                "bg-white w-full md:8/12 lg:w-7/12 flex items-center flex-col rounded-xl p-4 md:p-7 gap-y-5",
              children: [
                (0, Dn.jsx)("div", {
                  className: "text-blue-600 flex flex-row items-center gap-x-3",
                  children: (0, Dn.jsx)("h1", {
                    className: "font-black text-lg",
                    children: "Uploaded",
                  }),
                }),
                a.map(function (e, t) {
                  return (0, Dn.jsxs)(
                    "div",
                    {
                      className:
                        "bg-slate-200 flex flex-row gap-x-3 w-full md:w-11/12 justify-between p-3 rounded-lg items-center cursor-pointer",
                      children: [
                        (0, Dn.jsx)("div", {
                          className:
                            "bg-emerald-500 rounded-lg p-2.5 flex items-center",
                          children: (0, Dn.jsx)("i", {
                            className: "fas ".concat(
                              "document" === e.category
                                ? "fa-file-alt"
                                : "fa-" + e.category,
                              " text-white md:text-md text-sm",
                            ),
                          }),
                        }),
                        (0, Dn.jsxs)("div", {
                          className:
                            "flex flex-col w-10/12 justify-center gap-y-3 h-full",
                          children: [
                            (0, Dn.jsxs)("div", {
                              className:
                                "flex flew-row items-center justify-between",
                              children: [
                                (0, Dn.jsx)("div", {
                                  className:
                                    "flex flex-row gap-x-2 items-center",
                                  children: (0, Dn.jsx)("h3", {
                                    className: "text-blue-700 text-sm inline",
                                    children:
                                      ((r = e),
                                      i < 500
                                        ? r.name.length < 11
                                          ? r.name
                                          : r.name.slice(0, 11) + "..."
                                        : r.name.slice(0, 20) + "..."),
                                  }),
                                }),
                                (0, Dn.jsx)("p", {
                                  className: "text-xs text-slate-400",
                                  children:
                                    Math.round(e.size / 1024) < 1048576
                                      ? "".concat(
                                          Math.round(e.size / 1024),
                                          " KB",
                                        )
                                      : "".concat(
                                          Math.round(e.size / 1048576),
                                          " MB",
                                        ),
                                }),
                              ],
                            }),
                            (0, Dn.jsx)("div", {
                              className: "loading-bar-container",
                              children: (0, Dn.jsx)("div", {
                                className: "loading-bar",
                                style: { width: "".concat(n, "%") },
                              }),
                            }),
                          ],
                        }),
                        (0, Dn.jsx)("div", {
                          className:
                            "p-1.5 flex items-center border border-slate-400 rounded-lg",
                          children: (0, Dn.jsx)("i", {
                            className: "fas fa-check text-emerald-600 text-xl",
                          }),
                        }),
                      ],
                    },
                    t,
                  );
                  var r;
                }),
              ],
            })
        );
      }
      function pr() {
        var e = h((0, t.useState)([]), 2),
          n = e[0],
          r = e[1];
        return (0, Dn.jsx)(cr.Provider, {
          value: { uploads: n, setUploads: r },
          children: (0, Dn.jsxs)("div", {
            className:
              "w-full mt-6 md:w-10/12 flex flex-col gap-y-5 bg-slate-200 items-center p-5 md:p-10",
            children: [(0, Dn.jsx)(fr, {}), (0, Dn.jsx)(dr, {})],
          }),
        });
      }
      function hr() {
        (0, t.useContext)(Hn).setLocation("upload");
        var e = h((0, t.useState)(zn.get("authToken")), 2),
          n = e[0];
        e[1];
        return (
          (0, t.useEffect)(
            function () {
              n || (window.location.href = "/login");
            },
            [n],
          ),
          (0, Dn.jsxs)("div", {
            className: "flex flex-row bg-slate-200 min-h-screen",
            children: [(0, Dn.jsx)($n, {}), (0, Dn.jsx)(pr, {})],
          })
        );
      }
      function mr() {
        var e = h((0, t.useState)([]), 2),
          n = e[0],
          r = e[1],
          a = h((0, t.useState)(null), 2),
          o = a[0],
          l = a[1],
          i = h((0, t.useState)(!0), 2),
          u = i[0],
          s = i[1],
          c = h((0, t.useState)(zn.get("authToken")), 2),
          f = c[0],
          d =
            (c[1],
            (function () {
              var e = Ge(
                qe().mark(function e(t) {
                  var n;
                  return qe().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              Tn.get(
                                "".concat(
                                  "https://cloud-wave-app.onrender.com",
                                  "/api/favorites",
                                ),
                                {
                                  headers: {
                                    Authorization: "Bearer ".concat(t),
                                  },
                                },
                              )
                            );
                          case 3:
                            return (
                              (n = e.sent),
                              s(!1),
                              e.abrupt("return", n.data.favs)
                            );
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.error("Files error:", e.t0);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]],
                  );
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })());
        return (
          (0, t.useEffect)(function () {
            return (
              document.addEventListener("click", function (e) {
                l(null);
              }),
              function () {
                document.removeEventListener("click", function (e) {
                  l(null);
                });
              }
            );
          }),
          (0, t.useEffect)(
            function () {
              var e = (function () {
                var e = Ge(
                  qe().mark(function e() {
                    var t;
                    return qe().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), d(f);
                            case 3:
                              (t = e.sent) && r(t), s(!1), (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                console.error("Error fetching files:", e.t0);
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]],
                    );
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              return f && e(), function () {};
            },
            [f],
          ),
          (0, Dn.jsxs)("div", {
            className: "w-full p-2.5",
            children: [
              o &&
                (0, Dn.jsx)("div", {
                  className:
                    "fixed top-0 left-0 flex justify-center items-center w-full h-screen z-50",
                  children: (0, Dn.jsxs)("div", {
                    className:
                      "flex p-5 md:p-8 bg-slate-400 w-11/12 md:w-9/12 relative h-4/6 md:h-5/6 rounded-xl border",
                    onClick: function (e) {
                      e.stopPropagation();
                    },
                    children: [
                      (0, Dn.jsx)("button", {
                        className:
                          "absolute top-1 right-1 md:top-2 md:right-2 text-white",
                        onClick: function (e) {
                          l(null);
                        },
                        children: (0, Dn.jsx)("i", {
                          className:
                            "fas fa-times-circle text-red-700 text-lg rounded-full",
                        }),
                      }),
                      (0, Dn.jsx)(Jn, { item: o, favorite: !0 }),
                    ],
                  }),
                }),
              (0, Dn.jsx)("h1", {
                className: "text-blue-500 font-black text-xl md:text-2xl py-3",
                children: "Favorite Files",
              }),
              (0, Dn.jsx)("div", {
                className:
                  "flex flex-row w-full gap-x-8 flex-wrap gap-y-7 justify-center md:justify-start",
                children:
                  0 === n.length
                    ? u
                      ? (0, Dn.jsx)("div", {
                          className:
                            "w-full flex items-center justify-center h-12",
                          children: (0, Dn.jsx)(Zn, {}),
                        })
                      : (0, Dn.jsx)("div", {
                          className:
                            "text-xl md:text-2xl pt-6 text-center text-slate-400 w-full",
                          children: "No favorite files..",
                        })
                    : n.map(function (e, t) {
                        return (0, Dn.jsxs)(
                          "div",
                          {
                            className:
                              "flex flex-col bg-white p-3 rounded-lg w-9/12 md:w-1/5 gap-y-1.5 hover:transform hover:scale-110 transition-transform duration-300 cursor-pointer",
                            onClick: function (t) {
                              return (function (e, t) {
                                e.stopPropagation(), l(t);
                              })(t, e);
                            },
                            children: [
                              (0, Dn.jsx)("div", {
                                className:
                                  "h-24 w-full flex items-center justify-center bg-slate-200",
                                children: (0, Dn.jsx)("i", {
                                  className:
                                    "fas fa-file-alt text-gray-500 text-3xl",
                                }),
                              }),
                              (0, Dn.jsxs)("div", {
                                className:
                                  "flex flex-row justify-between items-center",
                                children: [
                                  (0, Dn.jsxs)("div", {
                                    className: "flex flex-col gap-y-1.5",
                                    children: [
                                      (0, Dn.jsx)("h3", {
                                        className: "text-indigo-500 text-sm",
                                        children: e.name,
                                      }),
                                      (0, Dn.jsx)("p", {
                                        className: "text-xs text-gray-400",
                                        children: e.time,
                                      }),
                                    ],
                                  }),
                                  (0, Dn.jsx)("i", {
                                    className:
                                      "fas fa-star text-amber-500 mr-3",
                                  }),
                                ],
                              }),
                            ],
                          },
                          t,
                        );
                      }),
              }),
            ],
          })
        );
      }
      function vr() {
        return (0, Dn.jsxs)("div", {
          className:
            "w-full md:w-10/12 flex flex-col py-4 px-4 md:px-8 items-center relative",
          children: [
            (0, Dn.jsx)(Kn, {}),
            (0, Dn.jsx)(Mn, {
              style: "flex flex-row gap-x-2.5 w-full md:w-10/12 scrollable",
              elementWidth: "w-36",
              title: (0, Dn.jsx)("h2", {
                className:
                  "font-extrabold py-4 text-blue-500 text-xl md:text-2xl",
                children: "Favorites",
              }),
              checkFav: !1,
              favs: !0,
            }),
            (0, Dn.jsx)(mr, {}),
          ],
        });
      }
      function gr() {
        return (
          (0, t.useContext)(Hn).setLocation("favorites"),
          (0, Dn.jsxs)("div", {
            className:
              "flex flex-row bg-slate-200 min-h-screen overflow-hidden",
            children: [
              (0, Dn.jsx)($n, { activePage: "favorites" }),
              (0, Dn.jsx)(vr, {}),
            ],
          })
        );
      }
      function yr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var xr = Object,
        br = Map,
        wr = Set,
        kr = wr.prototype.has,
        Sr = wr.prototype.add,
        jr = br.prototype.has,
        Er = br.prototype.get,
        Nr = br.prototype.set,
        Cr = "__t",
        Pr = "__e",
        _r =
          /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        Or = new wr(["href", "list", "form", "tabIndex", "download"]),
        Rr = new wr([
          "area",
          "base",
          "basefont",
          "bgsound",
          "br",
          "col",
          "command",
          "embed",
          "frame",
          "hr",
          "image",
          "img",
          "input",
          "isindex",
          "keygen",
          "link",
          "menuitem",
          "meta",
          "nextid",
          "param",
          "source",
          "track",
          "wbr",
        ]);
      if ("undefined" === typeof window)
        throw new Error(
          "See http://million.dev/docs/install to install the compiler.",
        );
      var Ar = document,
        Tr = queueMicrotask;
      Ar.createElement("template");
      var Lr = Ar.createElement("template"),
        zr = Lr.content,
        Fr = Ar.createElement("template"),
        Dr = Ar.createElementNS("http://www.w3.org/2000/svg", "svg"),
        Ur = Fr.content.firstChild,
        Br = Node.prototype,
        Ir = Element.prototype,
        Mr = CharacterData.prototype,
        Vr = xr.getOwnPropertyDescriptor,
        Wr = Br.insertBefore,
        Hr = Br.cloneNode,
        $r = Br.replaceChild,
        Qr = Ir.remove,
        qr = Br.addEventListener,
        Kr = Ir.removeAttribute,
        Gr = Ir.setAttribute,
        Yr = Ir.setAttributeNS,
        Jr = Vr(Br, "textContent").set,
        Xr = Vr(Br, "firstChild").get,
        Zr = Vr(Br, "nextSibling").get,
        ea = Vr(Mr, "data").set;
      Ar[Pr] = new wr();
      var ta = function (e, t, n) {
          var r = t.toLowerCase(),
            a = "$$".concat(r);
          kr.call(Ar[Pr], r) ||
            (qr.call(Ar, r, function (e) {
              (e.stopPropagation = function () {
                (e.cancelBubble = !0), e.stopImmediatePropagation();
              }),
                requestAnimationFrame(function () {
                  for (var t = e.target; t; ) {
                    var n = t[a];
                    n &&
                      (Object.defineProperty(e, "currentTarget", {
                        configurable: !0,
                        get: function () {
                          return t;
                        },
                      }),
                      n(e)),
                      (t = t.parentNode);
                  }
                });
            }),
            Sr.call(Ar[Pr], r));
          var o = function (t) {
            var n;
            t
              ? ("key" in t &&
                  t.key ===
                    (null === (n = e[a]) || void 0 === n ? void 0 : n.key)) ||
                (e[a] = t)
              : (e[a] = null);
          };
          return o(n), o;
        },
        na = function (e, t) {
          var n = Xr.call(e);
          if (t) for (var r = 0; r < t && n; ++r) n = Zr.call(n);
          return n;
        },
        ra = function (e, t, n) {
          var r = Ar.createTextNode(t),
            a = na(e, n);
          return Wr.call(e, r, a), r;
        },
        aa = function (e, t) {
          ea.call(e, t);
        },
        oa = function (e, t, n) {
          "number" !== typeof n || _r.test(t)
            ? (e.style[t] = n)
            : "string" === typeof n
            ? (e.style.cssText = n)
            : t.startsWith("-")
            ? e.style.setProperty(t, String(n))
            : (e.style[t] =
                void 0 === n || null === n ? "" : "".concat(String(n), "px"));
        },
        la = function (e, t, n) {
          (t = t
            .replace(/xlink(?:H|:h)/, "h")
            .replace(/sName$/, "s")).startsWith("xmlns")
            ? Yr.call(e, "http://www.w3.org/2000/xmlns/", t, String(n))
            : t.startsWith("xlink") &&
              Yr.call(e, "http://www.w3.org/1999/xlink", "href", String(n));
        },
        ia = function (e, t, n) {
          var r = void 0 === n || null === n;
          if (
            ((n = r ? "" : n),
            !(t in e) ||
              void 0 === e[t] ||
              null === e[t] ||
              e instanceof SVGElement ||
              !kr.call(Or, t))
          )
            r || "" === n || (!1 === n && !t.includes("-"))
              ? Kr.call(e, t)
              : Gr.call(e, t, String(n));
          else
            try {
              e[t] = n;
            } catch (a) {}
        },
        ua = Object.defineProperty,
        sa = function (e, t, n) {
          return (
            (function (e, t, n) {
              t in e
                ? ua(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n,
                  })
                : (e[t] = n);
            })(e, "symbol" !== typeof t ? t + "" : t, n),
            n
          );
        },
        ca = x(function e() {
          g(this, e),
            sa(this, "r"),
            sa(this, "e"),
            sa(this, "l"),
            sa(this, "g"),
            sa(this, "_t"),
            sa(this, "d"),
            sa(this, "k"),
            sa(this, "c");
        }),
        fa = function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [];
          if ("string" === typeof t) return t;
          if ("number" === typeof t || "bigint" === typeof t || !0 === t)
            return String(t);
          if (null === t || void 0 === t || !1 === t) return "";
          if ("object" === typeof t && "$" in t)
            return (
              n.push({
                p: r,
                e: [
                  {
                    t: 1,
                    n: null,
                    v: null,
                    h: t.$,
                    i: 0,
                    l: null,
                    p: null,
                    b: null,
                  },
                ],
                i: [],
              }),
              "<slot/>"
            );
          var a = "",
            o = "",
            l = { p: r, e: [], i: [] };
          for (var i in t.props) {
            var u = t.props[i];
            if ("key" !== i && "ref" !== i && "children" !== i)
              if (
                ("className" === i && (i = "class"),
                "htmlFor" === i && (i = "for"),
                i.startsWith("on"))
              )
                "$" in u
                  ? l.e.push({
                      t: 4,
                      n: i.slice(2),
                      v: null,
                      h: u.$,
                      i: null,
                      l: null,
                      p: null,
                      b: null,
                    })
                  : l.i.push({
                      t: 4,
                      n: i.slice(2),
                      v: null,
                      h: null,
                      i: null,
                      l: u,
                      p: null,
                      b: null,
                    });
              else if (u) {
                if ("object" === typeof u && "$" in u) {
                  "style" === i
                    ? l.e.push({
                        t: 8,
                        n: i,
                        v: null,
                        h: u.$,
                        i: null,
                        l: null,
                        p: null,
                        b: null,
                      })
                    : 120 === i.charCodeAt(0)
                    ? l.e.push({
                        t: 16,
                        n: i,
                        v: null,
                        h: u.$,
                        i: null,
                        l: null,
                        p: null,
                        b: null,
                      })
                    : l.e.push({
                        t: 2,
                        n: i,
                        v: null,
                        h: u.$,
                        i: null,
                        l: null,
                        p: null,
                        b: null,
                      });
                  continue;
                }
                if ("style" === i && "object" === typeof u) {
                  var s = "";
                  for (var c in u)
                    if ("object" !== typeof u[c]) {
                      for (var f = "", d = 0, p = c.length; d < p; ++d) {
                        var h = c.charCodeAt(d);
                        f +=
                          h < 97
                            ? "-".concat(String.fromCharCode(h + 32))
                            : c[d];
                      }
                      s += "".concat(f, ":").concat(String(u[c]), ";");
                    } else
                      l.e.push({
                        t: 8,
                        n: c,
                        v: null,
                        h: u[c].$,
                        i: null,
                        l: null,
                        p: null,
                        b: null,
                      });
                  a += ' style="'.concat(s, '"');
                  continue;
                }
                a += " ".concat(i, '="').concat(String(u), '"');
              }
          }
          if (kr.call(Rr, t.type))
            return l.e.length && n.push(l), "<".concat(t.type).concat(a, " />");
          for (
            var m = !1,
              v = 0,
              g =
                (null === (x = t.props.children) || void 0 === x
                  ? void 0
                  : x.length) || 0,
              y = 0;
            v < g;
            ++v
          ) {
            var x,
              b,
              w =
                null === (b = t.props.children) || void 0 === b ? void 0 : b[v];
            if (null !== w && void 0 !== w && !1 !== w)
              if ("object" === typeof w && "$" in w)
                l.e.push({
                  t: 1,
                  n: null,
                  v: null,
                  h: w.$,
                  i: v,
                  l: null,
                  p: null,
                  b: null,
                });
              else if (w instanceof ca)
                l.i.push({
                  t: 32,
                  n: null,
                  v: null,
                  h: null,
                  i: v,
                  l: null,
                  p: null,
                  b: w,
                });
              else if (
                "string" !== typeof w &&
                "number" !== typeof w &&
                "bigint" !== typeof w
              ) {
                m = !1;
                var k = r.slice();
                k.push(y++), (o += e(w, n, k));
              } else {
                var S =
                  "number" === typeof w || "bigint" === typeof w
                    ? String(w)
                    : w;
                if (m) {
                  l.i.push({
                    t: 1,
                    n: null,
                    v: S,
                    h: null,
                    i: v,
                    l: null,
                    p: null,
                    b: null,
                  });
                  continue;
                }
                (m = !0), (o += S), y++;
              }
          }
          return (
            (l.i.length || l.e.length) && n.push(l),
            "<"
              .concat(t.type)
              .concat(a, ">")
              .concat(o, "</")
              .concat(t.type, ">")
          );
        },
        da = Object.defineProperty,
        pa = function (e, t, n) {
          return (
            (function (e, t, n) {
              t in e
                ? da(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n,
                  })
                : (e[t] = n);
            })(e, "symbol" !== typeof t ? t + "" : t, n),
            n
          );
        },
        ha = function (e) {
          return new ma(e);
        },
        ma = (function (e) {
          w(n, e);
          var t = E(n);
          function n(e) {
            var r;
            return g(this, n), (r = t.call(this)), pa(j(r), "b"), (r.b = e), r;
          }
          return (
            x(n, [
              { key: "v", value: function () {} },
              {
                key: "p",
                value: function (e) {
                  var t = this.b,
                    n = e.b,
                    r = t.length,
                    a = n.length,
                    o = this.t();
                  if (this === e) return o;
                  if (0 === a && 0 === r) return o;
                  if (((this.b = n), 0 === a)) return xa.call(this), o;
                  if (0 === r) return ga.call(e, o), o;
                  for (
                    var l,
                      i = 0,
                      u = 0,
                      s = r - 1,
                      c = a - 1,
                      f = t[0],
                      d = n[0],
                      p = t[s],
                      h = n[c];
                    i <= s && u <= c;

                  )
                    if (f)
                      if (p) {
                        var m = f.k,
                          v = d.k;
                        if (m !== v) {
                          var g = p.k,
                            y = h.k;
                          if (g !== y)
                            if (m !== y)
                              if (g !== v) {
                                if (!l) {
                                  l = new br();
                                  for (var x = i; x <= s; x++)
                                    Nr.call(l, t[x].k, x);
                                }
                                var b = l.get(v);
                                if (void 0 === b) Ea.call(d, o, f.l || null);
                                else {
                                  var w = t[b];
                                  Ca.call(w, f, null),
                                    Na.call(w, d),
                                    (n[u] = w),
                                    (t[b] = null);
                                }
                                d = n[++u];
                              } else {
                                Na.call(p, d), (n[u] = p);
                                var k = t[i];
                                Ca.call(
                                  p,
                                  k,
                                  (null === k || void 0 === k ? void 0 : k.l) ||
                                    null,
                                ),
                                  (p = t[--s]),
                                  (d = n[++u]);
                              }
                            else {
                              Na.call(f, h), (n[c] = f);
                              var S = n[c + 1];
                              Ca.call(
                                f,
                                S,
                                (null === S || void 0 === S ? void 0 : S.l) ||
                                  null,
                              ),
                                (f = t[++i]),
                                (h = n[--c]);
                            }
                          else
                            Na.call(p, h),
                              (n[c] = p),
                              (p = t[--s]),
                              (h = n[--c]);
                        } else
                          Na.call(f, d), (n[u] = f), (f = t[++i]), (d = n[++u]);
                      } else p = t[--s];
                    else f = t[++i];
                  if (i <= s || u <= c)
                    if (i > s)
                      for (var j = n[c + 1], E = u; E <= c; ++E)
                        Ea.call(n[E], o, j ? j.l : null);
                    else for (var N = i; N <= s; ++N) Pa.call(t[N]);
                  return o;
                },
              },
              {
                key: "m",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  if (this._t) return this._t;
                  for (var n = 0, r = this.b.length; n < r; ++n) {
                    var a = this.b[n];
                    Ea.call(a, e, t);
                  }
                  return (this._t = e), e;
                },
              },
              {
                key: "x",
                value: function () {
                  var e = this.t();
                  if (e) Jr.call(e, "");
                  else
                    for (var t = 0, n = this.b.length; t < n; ++t)
                      Pa.call(this.b[t]);
                  this.b = [];
                },
              },
              {
                key: "u",
                value: function () {
                  return !0;
                },
              },
              {
                key: "s",
                value: function () {
                  return this.b
                    .map(function (e) {
                      return e.s();
                    })
                    .join("");
                },
              },
              {
                key: "t",
                value: function () {
                  return this._t || (this._t = this.b[0].t()), this._t;
                },
              },
            ]),
            n
          );
        })(ca),
        va = ma.prototype,
        ga = va.m,
        ya = va.p,
        xa = va.x,
        ba = new Proxy(
          {},
          {
            get: function (e, t) {
              return { $: t };
            },
          },
        ),
        wa = function (e, t, n, r) {
          var a = e(ba),
            o = [],
            l = (function (e, t) {
              return ((t ? Dr : Lr).innerHTML = e), (t ? Ur : zr).firstChild;
            })(fa(t ? t(a) : a, o), r);
          return function (e, t, r) {
            var a, i;
            return new ka(
              l,
              o,
              e,
              null !==
                (a =
                  null !== t && void 0 !== t
                    ? t
                    : null === e || void 0 === e
                    ? void 0
                    : e.key) && void 0 !== a
                ? a
                : null,
              null !== (i = null !== r && void 0 !== r ? r : n) && void 0 !== i
                ? i
                : null,
              null,
            );
          };
        },
        ka = (function (e) {
          w(n, e);
          var t = E(n);
          function n(e, r, a, o, l, i) {
            var u;
            return (
              g(this, n),
              ((u = t.call(this)).r = e),
              (u.d = a),
              (u.e = r),
              (u.k = o),
              (u.c = Array(r.length)),
              l && (u.u = l),
              i && (u.g = i),
              u
            );
          }
          return (
            x(n, [
              {
                key: "m",
                value: function (e) {
                  var t,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  if (this.l) return this.l;
                  var r = Hr.call(this.r, !0),
                    a =
                      null === (t = this.g) || void 0 === t
                        ? void 0
                        : t.call(this, r);
                  a && (this.c = a);
                  for (var o = 0, l = this.e.length; o < l; ++o) {
                    for (
                      var i,
                        u,
                        s = this.e[o],
                        c =
                          null !==
                            (i = null === a || void 0 === a ? void 0 : a[o]) &&
                          void 0 !== i
                            ? i
                            : Sa(s.p, r, this.c, o),
                        f = 0,
                        d = s.e.length;
                      f < d;
                      ++f
                    ) {
                      var p = s.e[f],
                        h = this.d[p.h];
                      if (1 & p.t) {
                        if (h instanceof ca) {
                          h.m(c, na(c, p.i));
                          continue;
                        }
                        if (
                          (c[Cr] || (c[Cr] = new Array(d)),
                          h && "object" === typeof h && "foreign" in h)
                        ) {
                          var m = h.current;
                          (c[Cr][f] = m), Wr.call(c, m, na(c, p.i));
                          continue;
                        }
                        c[Cr][f] = ra(
                          c,
                          null == h || !1 === h ? "" : String(h),
                          p.i,
                        );
                      } else if (4 & p.t) {
                        var v = ta(c, p.n, h);
                        c["__p" + p.n] = v;
                      } else if (2 & p.t) ia(c, p.n, h);
                      else if (8 & p.t)
                        if ("string" === typeof h || "number" === typeof h)
                          oa(c, p.n, h);
                        else for (var g in h) oa(c, g, h[g]);
                      else la(c, p.n, h);
                    }
                    var y =
                      null === (u = s.i) || void 0 === u ? void 0 : u.length;
                    if (y)
                      for (var x = 0; x < y; ++x) {
                        var b = s.i[x];
                        1 & b.t
                          ? b.v && ra(c, b.v, b.i)
                          : 4 & b.t
                          ? ta(c, b.n, b.l)
                          : b.b.m(c, na(c, b.i));
                      }
                  }
                  return e && Wr.call(e, r, n), (this.l = r), r;
                },
              },
              {
                key: "p",
                value: function (e) {
                  var t = this.l;
                  if (!e.d) return t;
                  var n = this.d;
                  if (!_a.call(this, n, e.d)) return t;
                  this.d = e.d;
                  for (var r = 0, a = this.e.length; r < a; ++r)
                    for (
                      var o,
                        l = this.e[r],
                        i =
                          null !== (o = this.c[r]) && void 0 !== o
                            ? o
                            : Sa(l.p, t, this.c, r),
                        u = 0,
                        s = l.e.length;
                      u < s;
                      ++u
                    ) {
                      var c = l.e[u],
                        f = n[c.h],
                        d = e.d[c.h];
                      if (d !== f)
                        if (4 & c.t) i["__p" + c.n](d);
                        else if (1 & c.t) {
                          if (f instanceof ca) {
                            var p,
                              h =
                                null === (p = e.e) ||
                                void 0 === p ||
                                null === (p = p[r]) ||
                                void 0 === p
                                  ? void 0
                                  : p.e[u],
                              m = e.d[h.h];
                            f.p(m);
                            continue;
                          }
                          if (d && "object" === typeof d && "foreign" in d) {
                            var v = i[Cr][u];
                            if ("unstable" in d && f !== d) {
                              var g = d.current;
                              (i[Cr][u] = g), $r.call(i, g, v);
                            } else d.current = v;
                            continue;
                          }
                          aa(i[Cr][u], null == d || !1 === d ? "" : String(d));
                        } else if (2 & c.t) ia(i, c.n, d);
                        else if (8 & c.t)
                          if ("string" === typeof d || "number" === typeof d)
                            oa(i, c.n, d);
                          else for (var y in d) d[y] !== f[y] && oa(i, y, d[y]);
                        else la(i, c.n, d);
                    }
                  return t;
                },
              },
              {
                key: "v",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  Wr.call(this.t(), this.l, e ? e.l : t);
                },
              },
              {
                key: "x",
                value: function () {
                  Qr.call(this.l), (this.l = null);
                },
              },
              {
                key: "u",
                value: function (e, t) {
                  return !0;
                },
              },
              {
                key: "s",
                value: function () {
                  var e;
                  return String(
                    null === (e = this.l) || void 0 === e
                      ? void 0
                      : e.outerHTML,
                  );
                },
              },
              {
                key: "t",
                value: function () {
                  var e;
                  return (
                    this._t ||
                      (this._t =
                        null === (e = this.l) || void 0 === e
                          ? void 0
                          : e.parentElement),
                    this._t
                  );
                },
              },
            ]),
            n
          );
        })(ca),
        Sa = function (e, t, n, r) {
          var a = e.length;
          if (!a) return t;
          if (n && void 0 !== r && n[r]) return n[r];
          for (var o = 0; o < a; ++o) {
            var l = e[o];
            t = na(t, l);
          }
          return n && void 0 !== r && (n[r] = t), t;
        },
        ja = ka.prototype,
        Ea = ja.m,
        Na = ja.p,
        Ca = ja.v,
        Pa = ja.x,
        _a = ja.u,
        Oa = n(456),
        Ra = "slot",
        Aa = function (e) {
          var n = e.effect;
          return (0, t.useEffect)(n, []), null;
        },
        Ta = new Map(),
        La = function (e, n, r, a, o) {
          var l,
            i = null === (l = r[a]) || void 0 === l ? void 0 : l.current;
          if ("undefined" === typeof window || (o && !i))
            return (0, t.createElement)(
              Ra,
              { suppressHydrationWarning: !0 },
              e,
            );
          if (
            (0, t.isValidElement)(e) &&
            "function" === typeof e.type &&
            "callable" in e.type
          ) {
            var u = e.type(e.props);
            if (Ta.has(u.type)) {
              var s = Ta.get(u.type);
              if ("function" === typeof s) return s(u.props);
            }
          }
          var c = null !== i && void 0 !== i ? i : document.createElement(Ra),
            f = {
              foreign: !0,
              current: c,
              portal: (0, Oa.createPortal)(e, c),
              unstable: n,
            };
          return (r[a] = f), f;
        },
        za = function e(t) {
          var n;
          if ("object" !== typeof t || null === t || !("type" in t))
            return "number" === typeof t ? String(t) : t;
          var r,
            a = t.type;
          if ("function" === typeof a)
            return e(a(null !== (r = t.props) && void 0 !== r ? r : {}));
          if ("object" === typeof a && "$" in a) return a;
          var o = s({}, t.props);
          "css" in o &&
            "__EMOTION_TYPE_PLEASE_DO_NOT_USE__" in o &&
            ((o.style = o.css.styles),
            (a = o.__EMOTION_TYPE_PLEASE_DO_NOT_USE__),
            delete o.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,
            delete o.css);
          var l = null === (n = t.props) || void 0 === n ? void 0 : n.children;
          return (
            void 0 !== l &&
              null !== l &&
              (o.children = Fa(t.props.children).map(function (t) {
                return e(t);
              })),
            { type: a, props: o }
          );
        },
        Fa = function e(n) {
          if (void 0 === n || null === n) return [];
          if ("object" === typeof n && "type" in n && n.type === t.Fragment)
            return e(n.props.children);
          if (!Array.isArray(n) || ("object" === typeof n && "$" in n))
            return [n];
          for (var r = n.flat(1 / 0), a = [], o = 0, l = r.length; o < l; ++o)
            a.push.apply(a, v(e(r[o])));
          return a;
        },
        Da = ["each", "children", "memo", "svg", "as"],
        Ua =
          ((0, t.memo)(function (e) {
            var n = e.each,
              r = e.children,
              a = e.memo,
              o = e.svg,
              l = e.as,
              i = yr(e, Da),
              u = (0, t.useRef)(null),
              c = (0, t.useRef)(Array(n.length)),
              f = (0, t.useRef)(null),
              d = (0, t.useRef)({ each: null, children: null, mounted: null });
            !f.current ||
              (n === d.current.each && a) ||
              Tr(function () {
                var e = Ua(n, r, d, c, a);
                ya.call(f.current, ha(e));
              });
            var p = o ? "g" : Ra,
              h = (0, t.createElement)(
                null !== l && void 0 !== l ? l : p,
                s(s({}, i), {}, { ref: u }),
              );
            return (
              (0, t.useEffect)(
                function () {
                  u.current &&
                    !f.current &&
                    Tr(function () {
                      d.current.mounted && (u.current.textContent = "");
                      var e = Ua(n, r, d, c, a);
                      (f.current = ha(e)),
                        jr.call(Ta, h) || Nr.call(Ta, h, f.current),
                        ga.call(f.current, u.current),
                        (d.current.mounted = !0);
                    });
                },
                [u.current],
              ),
              h
            );
          }),
          function (e, n, r, a, o) {
            for (
              var l = Array(e.length),
                i = r.current,
                u = function (r) {
                  var u;
                  if (o && i.each && i.each[r] === e[r])
                    return (
                      (l[r] =
                        null === (u = i.children) || void 0 === u
                          ? void 0
                          : u[r]),
                      "continue"
                    );
                  var s = n(e[r], r);
                  if (jr.call(Ta, s.type))
                    return (
                      i.block || (i.block = Er.call(Ta, s.type)),
                      (l[r] = i.block(s.props)),
                      "continue"
                    );
                  if ("function" === typeof s.type && ("callable" in s.type)) {
                    var c = s.type(s.props);
                    if (jr.call(Ta, c.type)) {
                      var f = Er.call(Ta, c.type);
                      if ("function" === typeof f)
                        return (l[r] = f(c.props)), "continue";
                    }
                  }
                  var d = wa(function (e) {
                      return null === e || void 0 === e ? void 0 : e.scope;
                    }),
                    p = function (e) {
                      return d(
                        {
                          scope: La(
                            (0, t.createElement)(s.type, e),
                            !1,
                            a.current,
                            r,
                            !1,
                          ),
                        },
                        s.key ? String(s.key) : void 0,
                      );
                    };
                  Nr.call(Ta, s.type, p), (i.block = p), (l[r] = p(s.props));
                },
                s = 0,
                c = e.length;
              s < c;
              ++s
            )
              u(s);
            return (i.each = e), (i.children = l), l;
          }),
        Ba = (function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.block,
            a = n.shouldUpdate,
            o = n.svg,
            l = n.as,
            i = e ? wa(e, za, a, o) : r,
            u = o ? "g" : Ra,
            s = function (e, n) {
              var r,
                o = (0, t.useRef)(null),
                s = (0, t.useRef)(null),
                c = (0, t.useRef)([]);
              (e = (function (e, n, r) {
                var a = { ref: n },
                  o = 0;
                for (var l in e) {
                  var i = e[l];
                  (0, t.isValidElement)(i)
                    ? (a[l] = La(i, !1, r, o++, !1))
                    : (a[l] = e[l]);
                }
                return a;
              })(e, n, c.current)),
                null === (r = s.current) || void 0 === r || r.call(s, e);
              var f = (0, t.useCallback)(function () {
                  var t = i(e, e.key);
                  o.current &&
                    null === s.current &&
                    (Tr(function () {
                      Ea.call(t, o.current, null);
                    }),
                    (s.current = function (e) {
                      Tr(function () {
                        !(function (e, t) {
                          if (
                            (("b" in e || "b" in t) && ya.call(e, t),
                            e.l || Ea.call(e),
                            (e.k && e.k === t.k) || e.r === t.r)
                          )
                            return Na.call(e, t);
                          var n = Ea.call(t, e.t(), e.l);
                          Pa.call(e), (e.k = t.k);
                        })(t, i(e, e.key, a));
                      });
                    }));
                }, []),
                d = (0, t.useMemo)(function () {
                  return (0, t.createElement)(
                    null !== l && void 0 !== l ? l : u,
                    { ref: o },
                  );
                }, []);
              return t.createElement.apply(
                void 0,
                [
                  t.Fragment,
                  null,
                  d,
                  (0, t.createElement)(Aa, { effect: f }),
                ].concat(
                  v(
                    c.current.map(function (e) {
                      return e.portal;
                    }),
                  ),
                ),
              );
            };
          return jr.call(Ta, s) || Nr.call(Ta, s, i), s;
        })(function () {
          return (0, Dn.jsxs)("div", {
            className:
              "bg-white flex flex-col-reverse md:flex-row w-full h-screen items-center justify-center gap-y-1 md:gap-y-5",
            children: [
              (0, Dn.jsxs)("div", {
                className:
                  "w-full md:w-6/12 flex flex-col justify-center items-center gap-y-1 md:gap-y-5 h-8/12 md:h-screen",
                children: [
                  (0, Dn.jsxs)("div", {
                    className: "p-5 w-10/12 flex flex-col gap-y-6 md:gap-y-7",
                    children: [
                      (0, Dn.jsx)("h1", {
                        className:
                          "text-blue-700 text-2xl md:text-5xl font-black",
                        children: "All your files in one safe place",
                      }),
                      (0, Dn.jsxs)("p", {
                        className: "text-xs md:text-sm text-blue-400",
                        children: [
                          (0, Dn.jsx)("span", {
                            className: "hidden md:inline",
                            children: "Free file storage for everyone.",
                          }),
                          " ",
                          "Store your files securely in the cloud and access them from any device.",
                        ],
                      }),
                    ],
                  }),
                  (0, Dn.jsx)("div", {
                    className: "w-10/12 px-4",
                    children: (0, Dn.jsx)("a", {
                      href: "/login",
                      children: (0, Dn.jsx)("button", {
                        className:
                          "bg-blue-500 rounded-lg py-3 px-6 text-white hover:bg-blue-600 text-xs md:text-md",
                        onClick: function () {
                          return (window.location.href = "/login");
                        },
                        type: "button",
                        children: "Start Uploading \u2728",
                      }),
                    }),
                  }),
                ],
              }),
              (0, Dn.jsx)("div", {
                className:
                  "w-7/12 md:w-6/12 bg-white flex items-center justify-center h-4/12 md:h-screen",
                children: (0, Dn.jsx)("img", {
                  src: Xn,
                  alt: "Home Background",
                  className: "w-full",
                }),
              }),
            ],
          });
        }),
        Ia = Ba;
      function Ma(e) {
        var n = e.category;
        return (
          (0, t.useContext)(Hn).setLocation("files"),
          (0, Dn.jsxs)("div", {
            className:
              "flex flex-row w-full bg-slate-200 justify-center min-h-screen",
            children: [
              (0, Dn.jsx)($n, {}),
              (0, Dn.jsxs)("div", {
                className:
                  "flex flex-col w-full md:w-10/12 py-4 items-center relative px-1 md:px-0",
                children: [
                  (0, Dn.jsx)(Kn, {}),
                  (0, Dn.jsx)("div", {
                    className: "w-full min-h-full",
                    children: (0, Dn.jsx)(er, {
                      title: n ? n[0].toUpperCase() + n.slice(1) : "All Files",
                      titleStyle: "ml-3 md:ml-0",
                      showAll: !0,
                      category: n,
                      padding: "px-4",
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function Va() {
        var e = h((0, t.useState)([]), 2),
          n = e[0],
          r = e[1],
          a = h((0, t.useState)(zn.get("authToken")), 2),
          o = a[0],
          l = (a[1], h((0, t.useState)(!0), 2)),
          i = l[0],
          u = l[1];
        (0, t.useContext)(Hn).setLocation("search");
        var s = window.location.href.split("?")[1];
        (0, t.useEffect)(
          function () {
            var e = (function () {
              var e = Ge(
                qe().mark(function e() {
                  var t;
                  return qe().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), c(o);
                          case 3:
                            (t = e.sent), r(t), u(!1), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.error("Error fetching data:", e.t0);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]],
                  );
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            return o && e(), function () {};
          },
          [o],
        );
        var c = (function () {
          var e = Ge(
            qe().mark(function e(t) {
              var n;
              return qe().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Tn.get(
                            ""
                              .concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/search?",
                              )
                              .concat(s),
                            { headers: { Authorization: "Bearer ".concat(t) } },
                          )
                        );
                      case 3:
                        return (n = e.sent), e.abrupt("return", n.data.files);
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          console.error("An error occured:", e.t0);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]],
              );
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return (0, Dn.jsxs)("div", {
          className:
            "flex flex-row w-full bg-slate-200 justify-center min-h-screen",
          children: [
            (0, Dn.jsx)($n, {}),
            (0, Dn.jsxs)("div", {
              className: "flex flex-col w-10/12 py-4 items-center relative",
              children: [
                (0, Dn.jsx)(Kn, { defaultVal: s.split("=")[1] }),
                (0, Dn.jsx)("div", {
                  className: "w-full min-h-full",
                  children:
                    n.length > 0
                      ? (0, Dn.jsx)(er, {
                          title: "Search Results",
                          showAll: !0,
                          SearchResults: n,
                        })
                      : (0, Dn.jsx)("div", {
                          className: "text-2xl pt-6 text-center text-slate-400",
                          children: i
                            ? (0, Dn.jsx)(Zn, {})
                            : "No results found",
                        }),
                }),
              ],
            }),
          ],
        });
      }
      function Wa() {
        var e = h((0, t.useState)(null), 2),
          n = e[0],
          r = e[1],
          a = h((0, t.useState)(!1), 2),
          o = a[0],
          l = a[1],
          u = t.useContext(Vn),
          c = (u.isAuthenticated, u.setIsAuthenticated),
          f = h((0, t.useState)({ firstname: "", email: "", password: "" }), 2),
          d = f[0],
          p = f[1],
          m = function (e) {
            var t = e.target,
              n = t.name,
              r = t.value;
            p(function (e) {
              return s(s({}, e), {}, i({}, n, r));
            });
          },
          v = (function () {
            var e = Ge(
              qe().mark(function e(t) {
                var n, a;
                return qe().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.prev = 1),
                            (e.next = 4),
                            Tn.post(
                              "".concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/newuser",
                              ),
                              d,
                            )
                          );
                        case 4:
                          201 === (n = e.sent).status &&
                            ((a = n.data.token),
                            zn.set("authToken", a, { expires: 1 / 24 }),
                            c(!0),
                            (window.location.href = "/home")),
                            (e.next = 12);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(1)),
                            console.error("Error sending form data:", e.t0),
                            r(e.t0.response.data.message);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]],
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, t.useEffect)(function () {
            var e = document.createElement("script");
            return (
              (e.src =
                "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"),
              (e.integrity =
                "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"),
              (e.crossOrigin = "anonymous"),
              document.body.appendChild(e),
              function () {
                document.body.removeChild(e);
              }
            );
          }, []),
          (0, Dn.jsxs)("div", {
            className:
              "w-full h-screen bg-slate-200 flex items-center justify-center",
            children: [
              (0, Dn.jsx)("head", {
                children: (0, Dn.jsx)("link", {
                  href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css",
                  rel: "stylesheet",
                  integrity:
                    "sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9",
                  crossorigin: "anonymous",
                }),
              }),
              (0, Dn.jsxs)("form", {
                className:
                  "bg-white rounded-2xl p-6 flex flex-col items-center gap-y-5 w-11/12 md:w-7/12 shadow-md",
                method: "POST",
                onSubmit: function (e) {
                  return v(e);
                },
                children: [
                  (0, Dn.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, Dn.jsx)("h1", {
                        className: "text-2xl font-black text-indigo-500",
                        children: "Sign Up",
                      }),
                      (0, Dn.jsx)("p", {
                        className: "text-gray-500 mt-3 text-xs",
                        children:
                          "Let's get started by creating a free account for you!",
                      }),
                      n &&
                        (0, Dn.jsxs)("div", {
                          className:
                            "alert alert-danger alert-dismissible fade show",
                          role: "alert",
                          children: [
                            n,
                            (0, Dn.jsx)("button", {
                              type: "button",
                              className: "btn-close",
                              "data-bs-dismiss": "alert",
                              "aria-label": "Close",
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, Dn.jsxs)("div", {
                    className: "w-full flex flex-col gap-y-5",
                    children: [
                      (0, Dn.jsxs)("div", {
                        className: "flex flex-col gap-y-2",
                        children: [
                          (0, Dn.jsx)("label", {
                            htmlFor: "firstname",
                            className: "text-sm font-medium text-gray-500",
                            children: "Name",
                          }),
                          (0, Dn.jsx)("input", {
                            type: "text",
                            name: "firstname",
                            className:
                              "p-3 w-full border rounded-md focus:ring focus:ring-indigo-300 transition text-sm",
                            placeholder: "John Doe",
                            value: d.name,
                            onChange: function (e) {
                              return m(e);
                            },
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Dn.jsxs)("div", {
                        className: "flex flex-col gap-y-2",
                        children: [
                          (0, Dn.jsx)("label", {
                            htmlFor: "email",
                            className: "text-sm font-medium text-gray-500",
                            children: "E-mail",
                          }),
                          (0, Dn.jsx)("input", {
                            type: "email",
                            name: "email",
                            className:
                              "p-3 w-full border rounded-md focus:ring focus:ring-indigo-300 transition text-sm",
                            placeholder: "Johndoe@email",
                            value: d.email,
                            onChange: function (e) {
                              return m(e);
                            },
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Dn.jsxs)("div", {
                        className: "flex flex-col gap-y-2",
                        children: [
                          (0, Dn.jsx)("label", {
                            htmlFor: "password",
                            className: "text-sm font-medium text-gray-500",
                            children: "Password",
                          }),
                          (0, Dn.jsx)("input", {
                            type: "password",
                            name: "password",
                            className:
                              "p-3 w-full border rounded-md focus:ring focus:ring-indigo-300 transition text-sm",
                            placeholder: "********",
                            value: d.password,
                            onChange: function (e) {
                              return m(e);
                            },
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Dn.jsxs)("div", {
                        className: "flex flex-col items-center gap-y-3 mt-3",
                        children: [
                          (0, Dn.jsx)("button", {
                            type: "submit",
                            className:
                              "w-6/12 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 px-6 rounded-md focus:ring-2 focus:ring-indigo-300 transition text-sm flex items-center justify-center ".concat(
                                o ? "opacity-50 cursor-not-allowed" : "",
                              ),
                            onClick: function () {
                              l(!o),
                                setTimeout(function () {
                                  l(!1);
                                }, 9e3);
                            },
                            children: o
                              ? (0, Dn.jsx)("img", {
                                  height: "18px",
                                  width: "18px",
                                  src: rr,
                                  alt: "Loading..",
                                  className: "spin",
                                })
                              : "Create Account \u2728",
                          }),
                          (0, Dn.jsxs)("p", {
                            className: "text-xs text-gray-600",
                            children: [
                              "Already have an account?",
                              " ",
                              (0, Dn.jsx)("a", {
                                href: "/login",
                                className:
                                  "text-indigo-500 hover:underline transition",
                                children: "Log in",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function Ha() {
        var e = t.useContext(Vn),
          n = (e.isAuthenticated, e.setIsAuthenticated),
          r = h((0, t.useState)(null), 2),
          a = r[0],
          o = r[1],
          l = h((0, t.useState)(!1), 2),
          u = l[0],
          c = l[1],
          f = h((0, t.useState)({ email: "", password: "" }), 2),
          d = f[0],
          p = f[1],
          m = function (e) {
            var t = e.target,
              n = t.name,
              r = t.value;
            p(function (e) {
              return s(s({}, e), {}, i({}, n, r));
            });
          },
          v = (function () {
            var e = Ge(
              qe().mark(function e(t) {
                var r, a;
                return qe().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.prev = 1),
                            (e.next = 4),
                            Tn.post(
                              "".concat(
                                "https://cloud-wave-app.onrender.com",
                                "/api/login",
                              ),
                              d,
                            )
                          );
                        case 4:
                          200 === (r = e.sent).status &&
                            ((a = r.data.token),
                            zn.set("authToken", a, { expires: 1 / 24 }),
                            n(!0),
                            (window.location.href = "/home")),
                            (e.next = 12);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(1)),
                            console.error("Error sending form data:", e.t0),
                            o(e.t0.response.data.message);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]],
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, t.useEffect)(function () {
            var e = document.createElement("script");
            return (
              (e.src =
                "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"),
              (e.integrity =
                "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"),
              (e.crossOrigin = "anonymous"),
              document.body.appendChild(e),
              function () {
                document.body.removeChild(e);
              }
            );
          }, []),
          (0, Dn.jsxs)("div", {
            className:
              "w-full h-screen bg-slate-200 flex items-center justify-center",
            children: [
              (0, Dn.jsx)("head", {
                children: (0, Dn.jsx)("link", {
                  href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css",
                  rel: "stylesheet",
                  integrity:
                    "sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9",
                  crossorigin: "anonymous",
                }),
              }),
              (0, Dn.jsxs)("form", {
                className:
                  "bg-white rounded-2xl p-6 flex flex-col items-center gap-y-5 w-10/12 md:w-7/12 shadow-md",
                method: "POST",
                onSubmit: function (e) {
                  return v(e);
                },
                children: [
                  (0, Dn.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, Dn.jsx)("h1", {
                        className: "text-2xl font-black text-indigo-500",
                        children: "Log In",
                      }),
                      (0, Dn.jsx)("p", {
                        className: "text-gray-500 mt-3 text-xs",
                        children: "Welcome Back!",
                      }),
                      a &&
                        (0, Dn.jsxs)("div", {
                          className:
                            "alert alert-danger alert-dismissible fade show text-sm",
                          role: "alert",
                          children: [
                            a,
                            (0, Dn.jsx)("button", {
                              type: "button",
                              className: "btn-close",
                              "data-bs-dismiss": "alert",
                              "aria-label": "Close",
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, Dn.jsxs)("div", {
                    className: "w-full flex flex-col gap-y-5",
                    children: [
                      (0, Dn.jsxs)("div", {
                        className: "flex flex-col gap-y-2",
                        children: [
                          (0, Dn.jsx)("label", {
                            htmlFor: "email",
                            className: "text-sm font-medium text-gray-500",
                            children: "E-mail",
                          }),
                          (0, Dn.jsx)("input", {
                            type: "email",
                            name: "email",
                            className:
                              " p-2 md:p-3 w-full border rounded-md focus:ring focus:ring-indigo-600 transition text-sm",
                            placeholder: "Johndoe@email",
                            value: d.email,
                            onChange: function (e) {
                              return m(e);
                            },
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Dn.jsxs)("div", {
                        className: "flex flex-col gap-y-2",
                        children: [
                          (0, Dn.jsx)("label", {
                            htmlFor: "password",
                            className: "text-sm font-medium text-gray-500",
                            children: "Password",
                          }),
                          (0, Dn.jsx)("input", {
                            type: "password",
                            name: "password",
                            className:
                              "p-2 md:p-3 w-full border rounded-md focus:ring focus:ring-indigo-600 transition text-sm",
                            placeholder: "********",
                            value: d.password,
                            onChange: function (e) {
                              return m(e);
                            },
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Dn.jsxs)("div", {
                        className: "flex flex-col items-center gap-y-3 mt-3",
                        children: [
                          (0, Dn.jsx)("button", {
                            type: "submit",
                            className:
                              "w-6/12 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-7 rounded-md focus:ring focus:ring-indigo-300 transition text-sm flex items-center justify-center ".concat(
                                u ? "opacity-50 cursor-not-allowed" : "",
                              ),
                            onClick: function () {
                              c(!u),
                                setTimeout(function () {
                                  c(!1);
                                }, 9e3);
                            },
                            children: u
                              ? (0, Dn.jsx)("img", {
                                  height: "18px",
                                  width: "18px",
                                  src: rr,
                                  alt: "Loading..",
                                  className: "spin",
                                })
                              : "Log In \u2728",
                          }),
                          (0, Dn.jsxs)("p", {
                            className: "text-xs text-gray-600",
                            children: [
                              "Don't have an account?",
                              " ",
                              (0, Dn.jsx)("a", {
                                href: "/signup",
                                className:
                                  "text-indigo-500 hover:underline transition",
                                children: "Sign Up",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function $a() {
        var e = h((0, t.useState)(!0), 2),
          n = e[0],
          r = e[1],
          a = h((0, t.useState)(null), 2),
          o = a[0],
          l = a[1];
        return (
          (0, t.useEffect)(function () {
            var e = window.location.pathname.split("/")[2],
              t =
                "https://cloud-wave-app.onrender.com" +
                "/api/decryptfile/".concat(e);
            Tn.get(t)
              .then(function (e) {
                console.log(e.data.file), l(e.data.file), r(!1);
              })
              .catch(function (e) {
                console.error(e);
              });
          }, []),
          console.log("DATA", o),
          (0, Dn.jsxs)("div", {
            className: "bg-slate-200 w-full h-screen",
            children: [
              n && (0, Dn.jsx)(Un, {}),
              (0, Dn.jsx)("div", {
                className: "",
                children:
                  !n &&
                  (0, Dn.jsx)("div", {
                    className:
                      "fixed top-0 left-0 flex justify-center items-center w-full h-screen z-50",
                    children: (0, Dn.jsx)("div", {
                      className:
                        "flex p-5 md:p-8 bg-slate-400 w-11/12 md:w-9/12 relative h-4/6 md:h-5/6 rounded-xl border",
                      onClick: function (e) {
                        e.stopPropagation();
                      },
                      children: (0, Dn.jsx)(Jn, { showImg: !1, item: o }),
                    }),
                  }),
              }),
            ],
          })
        );
      }
      var Qa = function () {
        var e = h((0, t.useState)("home"), 2),
          n = e[0],
          r = e[1],
          a = h((0, t.useState)([]), 2),
          o = a[0],
          l = a[1],
          i = h((0, t.useState)(!!zn.get("authToken")), 2),
          u = i[0],
          c = i[1];
        return (
          (0, t.useEffect)(
            function () {
              return (
                void 0 === zn.get("authToken") &&
                  "login" !== n &&
                  "signup" !== n &&
                  "home" !== n &&
                  (window.location.href = "/"),
                function () {}
              );
            },
            [u, n],
          ),
          (0, Dn.jsx)(Vn.Provider, {
            value: { isAuthenticated: u, setIsAuthenticated: c },
            children: (0, Dn.jsx)(Hn.Provider, {
              value: { location: n, setLocation: r },
              children: (0, Dn.jsx)(Fn.Provider, {
                value: { favoriteCategory: o, setFavoriteCategory: l },
                children: (0, Dn.jsx)(Ve, {
                  children: (0, Dn.jsxs)(Ue, {
                    children: [
                      (0, Dn.jsx)(Fe, { exact: !0, path: "/", Component: Ia }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/home",
                        Component: function () {
                          return u ? (0, Dn.jsx)(nr, {}) : (0, Dn.jsx)(Ha, {});
                        },
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/upload",
                        Component: function () {
                          return u ? (0, Dn.jsx)(hr, {}) : (0, Dn.jsx)(Ha, {});
                        },
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/myfiles",
                        Component: function () {
                          return u ? (0, Dn.jsx)(sr, {}) : (0, Dn.jsx)(Ha, {});
                        },
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/favorites",
                        Component: function () {
                          return u ? (0, Dn.jsx)(gr, {}) : (0, Dn.jsx)(Ha, {});
                        },
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/settings",
                        Component: function () {
                          return u ? (0, Dn.jsx)(lr, {}) : (0, Dn.jsx)(Ha, {});
                        },
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/files",
                        Component: function () {
                          return u ? (0, Dn.jsx)(Ma, {}) : (0, Dn.jsx)(Ha, {});
                        },
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/files/pictures",
                        Component: function (e) {
                          return u
                            ? (0, Dn.jsx)(
                                Ma,
                                s(s({}, e), {}, { category: "pictures" }),
                              )
                            : (0, Dn.jsx)(Ha, {});
                        },
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/files/videos",
                        Component: function (e) {
                          return u
                            ? (0, Dn.jsx)(
                                Ma,
                                s(s({}, e), {}, { category: "videos" }),
                              )
                            : (0, Dn.jsx)(Ha, {});
                        },
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/files/audio",
                        Component: function (e) {
                          return u
                            ? (0, Dn.jsx)(
                                Ma,
                                s(s({}, e), {}, { category: "audio" }),
                              )
                            : (0, Dn.jsx)(Ha, {});
                        },
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/files/documents",
                        Component: function (e) {
                          return u
                            ? (0, Dn.jsx)(
                                Ma,
                                s(s({}, e), {}, { category: "documents" }),
                              )
                            : (0, Dn.jsx)(Ha, {});
                        },
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/search",
                        Component: function () {
                          return u ? (0, Dn.jsx)(Va, {}) : (0, Dn.jsx)(Ha, {});
                        },
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/signup",
                        Component: Wa,
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/login",
                        Component: Ha,
                      }),
                      (0, Dn.jsx)(Fe, {
                        exact: !0,
                        path: "/preview/*",
                        Component: $a,
                      }),
                      (0, Dn.jsx)(Fe, {
                        path: "*",
                        element: (0, Dn.jsx)(ze, { to: "/" }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          })
        );
      };
      a.createRoot(document.getElementById("root")).render(
        (0, Dn.jsx)(t.StrictMode, { children: (0, Dn.jsx)(Qa, {}) }),
      );
    })();
})();
//# sourceMappingURL=main.fd423bbd.js.map
