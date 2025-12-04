import { ref as Y, computed as e0, inject as d0, toRaw as Tt, watch as we, resolveComponent as V, resolveDirective as Pt, createElementBlock as Q, openBlock as q, createVNode as c0, withCtx as j, withDirectives as Se, createBlock as W, resolveDynamicComponent as $0, mergeProps as He, createElementVNode as O0, Fragment as r0, renderList as f0, createTextVNode as C0, toDisplayString as _0, getCurrentInstance as zt, createCommentVNode as u0, normalizeProps as Zt, onMounted as I0, unref as Z, normalizeStyle as z0, createSlots as Jt, reactive as o0, vShow as er, useSlots as Re, markRaw as m0, onBeforeUnmount as Te, readonly as A0, provide as Pe } from "vue";
import { ElMessage as q0, ElNotification as tr, ElMessageBox as rr } from "element-plus";
const ar = {
  "element-loading-text": "加载中...",
  "element-loading-background": "rgba(255, 255, 255, 0.7)",
  style: { "min-height": "150px" }
}, xr = {
  key: 1,
  class: "text-gray-400 text-sm text-center p-4"
}, nr = { class: "dialog-footer" }, or = {
  __name: "layout-page-dialog",
  props: {
    // component: {
    //     type: [Object, String, Function],
    //     default: null
    // }, // 传入组件对象或 defineAsyncComponent
    propsData: Object,
    dialog: {
      type: Object,
      default: () => []
    }
  },
  emits: ["update:visible"],
  setup(p, { emit: m }) {
    const x = p, t = Y(null), f = Y(`${Date.now()}-${Math.random()}`), l = e0(() => x.dialog.instance), A = e0({
      get: () => {
        var o;
        return ((o = l.value) == null ? void 0 : o.visible) ?? !1;
      },
      set: (o) => u("update:visible", o)
    }), u = m, c = d0("dialogSlotMap", Y(/* @__PURE__ */ new Map())), e = e0(() => {
      var s;
      const o = (s = l.value) == null ? void 0 : s.component;
      if (!o) return null;
      if (typeof o == "object" || typeof o == "function")
        return o;
      if (typeof o == "string" && c.value.has(o))
        return c.value.get(o);
    }), r = e0(() => {
      var v;
      if (!((v = l.value) != null && v.propsData)) return {};
      const o = Tt(l.value.propsData), { key: s, ...h } = o;
      return h;
    }), B = () => {
      var o;
      (o = l.value) == null || o.destroy();
    }, n = async (o) => {
      if (!(!o || typeof o.command != "function")) {
        o.loading = !0;
        try {
          const s = o.command(l.value, t.value);
          s instanceof Promise && await s;
        } catch (s) {
          console.error("事件执行失败:", s);
        } finally {
          o.loading = !1;
        }
      }
    };
    return we(() => A, (o) => {
      o || (actions.value = []);
    }), (o, s) => {
      var a, i, d, F, D;
      const h = V("el-button"), v = V("el-dialog"), y = Pt("loading");
      return q(), Q("div", null, [
        c0(v, {
          modelValue: A.value,
          "onUpdate:modelValue": s[0] || (s[0] = (g) => A.value = g),
          title: ((a = l.value) == null ? void 0 : a.title) ?? "",
          "align-center": ((i = l.value) == null ? void 0 : i.center) ?? !1,
          width: ((d = l.value) == null ? void 0 : d.width) ?? "50%",
          fullscreen: ((F = l.value) == null ? void 0 : F.fullscreen) ?? !1,
          "destroy-on-close": "",
          draggable: ((D = l.value) == null ? void 0 : D.draggable) ?? !1,
          onClose: s[1] || (s[1] = (g) => B()),
          "custom-class": "full-height-dialog"
        }, {
          footer: j(() => {
            var g;
            return [
              O0("div", nr, [
                (q(!0), Q(r0, null, f0(((g = l.value) == null ? void 0 : g.actions) ?? [], (C, T) => (q(), W(h, {
                  key: T,
                  type: C.type,
                  icon: C.icon,
                  loading: C.loading,
                  onClick: (E) => n(C)
                }, {
                  default: j(() => [
                    C0(_0(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["type", "icon", "loading", "onClick"]))), 128))
              ])
            ];
          }),
          default: j(() => {
            var g;
            return [
              Se((q(), Q("div", ar, [
                e.value ? (q(), W($0(e.value), He({
                  key: f.value,
                  ref_key: "componentRef",
                  ref: t
                }, r.value), null, 16)) : (q(), Q("div", xr, " ⚠️ 无内容可展示，请检查 component 是否传入正确。 "))
              ])), [
                [y, (g = l.value) == null ? void 0 : g.loading]
              ])
            ];
          }),
          _: 1
        }, 8, ["modelValue", "title", "align-center", "width", "fullscreen", "draggable"])
      ]);
    };
  }
};
var N = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ir(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
function lr(p) {
  if (p.__esModule) return p;
  var m = p.default;
  if (typeof m == "function") {
    var x = function t() {
      return this instanceof t ? Reflect.construct(m, arguments, this.constructor) : m.apply(this, arguments);
    };
    x.prototype = m.prototype;
  } else x = {};
  return Object.defineProperty(x, "__esModule", { value: !0 }), Object.keys(p).forEach(function(t) {
    var f = Object.getOwnPropertyDescriptor(p, t);
    Object.defineProperty(x, t, f.get ? f : {
      enumerable: !0,
      get: function() {
        return p[t];
      }
    });
  }), x;
}
var qt = { exports: {} };
function sr(p) {
  throw new Error('Could not dynamically require "' + p + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var X0 = { exports: {} };
const fr = {}, cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fr
}, Symbol.toStringTag, { value: "Module" })), ur = /* @__PURE__ */ lr(cr);
var Ye;
function I() {
  return Ye || (Ye = 1, function(p, m) {
    (function(x, t) {
      p.exports = t();
    })(N, function() {
      var x = x || function(t, f) {
        var l;
        if (typeof window < "u" && window.crypto && (l = window.crypto), typeof self < "u" && self.crypto && (l = self.crypto), typeof globalThis < "u" && globalThis.crypto && (l = globalThis.crypto), !l && typeof window < "u" && window.msCrypto && (l = window.msCrypto), !l && typeof N < "u" && N.crypto && (l = N.crypto), !l && typeof sr == "function")
          try {
            l = ur;
          } catch {
          }
        var A = function() {
          if (l) {
            if (typeof l.getRandomValues == "function")
              try {
                return l.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof l.randomBytes == "function")
              try {
                return l.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, u = Object.create || /* @__PURE__ */ function() {
          function a() {
          }
          return function(i) {
            var d;
            return a.prototype = i, d = new a(), a.prototype = null, d;
          };
        }(), c = {}, e = c.lib = {}, r = e.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(a) {
              var i = u(this);
              return a && i.mixIn(a), (!i.hasOwnProperty("init") || this.init === i.init) && (i.init = function() {
                i.$super.init.apply(this, arguments);
              }), i.init.prototype = i, i.$super = this, i;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var a = this.extend();
              return a.init.apply(a, arguments), a;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(a) {
              for (var i in a)
                a.hasOwnProperty(i) && (this[i] = a[i]);
              a.hasOwnProperty("toString") && (this.toString = a.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), B = e.WordArray = r.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(a, i) {
            a = this.words = a || [], i != f ? this.sigBytes = i : this.sigBytes = a.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(a) {
            return (a || o).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(a) {
            var i = this.words, d = a.words, F = this.sigBytes, D = a.sigBytes;
            if (this.clamp(), F % 4)
              for (var g = 0; g < D; g++) {
                var C = d[g >>> 2] >>> 24 - g % 4 * 8 & 255;
                i[F + g >>> 2] |= C << 24 - (F + g) % 4 * 8;
              }
            else
              for (var T = 0; T < D; T += 4)
                i[F + T >>> 2] = d[T >>> 2];
            return this.sigBytes += D, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var a = this.words, i = this.sigBytes;
            a[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, a.length = t.ceil(i / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var a = r.clone.call(this);
            return a.words = this.words.slice(0), a;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(a) {
            for (var i = [], d = 0; d < a; d += 4)
              i.push(A());
            return new B.init(i, a);
          }
        }), n = c.enc = {}, o = n.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(a) {
            for (var i = a.words, d = a.sigBytes, F = [], D = 0; D < d; D++) {
              var g = i[D >>> 2] >>> 24 - D % 4 * 8 & 255;
              F.push((g >>> 4).toString(16)), F.push((g & 15).toString(16));
            }
            return F.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(a) {
            for (var i = a.length, d = [], F = 0; F < i; F += 2)
              d[F >>> 3] |= parseInt(a.substr(F, 2), 16) << 24 - F % 8 * 4;
            return new B.init(d, i / 2);
          }
        }, s = n.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(a) {
            for (var i = a.words, d = a.sigBytes, F = [], D = 0; D < d; D++) {
              var g = i[D >>> 2] >>> 24 - D % 4 * 8 & 255;
              F.push(String.fromCharCode(g));
            }
            return F.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(a) {
            for (var i = a.length, d = [], F = 0; F < i; F++)
              d[F >>> 2] |= (a.charCodeAt(F) & 255) << 24 - F % 4 * 8;
            return new B.init(d, i);
          }
        }, h = n.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(a) {
            try {
              return decodeURIComponent(escape(s.stringify(a)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(a) {
            return s.parse(unescape(encodeURIComponent(a)));
          }
        }, v = e.BufferedBlockAlgorithm = r.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new B.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(a) {
            typeof a == "string" && (a = h.parse(a)), this._data.concat(a), this._nDataBytes += a.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(a) {
            var i, d = this._data, F = d.words, D = d.sigBytes, g = this.blockSize, C = g * 4, T = D / C;
            a ? T = t.ceil(T) : T = t.max((T | 0) - this._minBufferSize, 0);
            var E = T * g, b = t.min(E * 4, D);
            if (E) {
              for (var k = 0; k < E; k += g)
                this._doProcessBlock(F, k);
              i = F.splice(0, E), d.sigBytes -= b;
            }
            return new B.init(i, b);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var a = r.clone.call(this);
            return a._data = this._data.clone(), a;
          },
          _minBufferSize: 0
        });
        e.Hasher = v.extend({
          /**
           * Configuration options.
           */
          cfg: r.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(a) {
            this.cfg = this.cfg.extend(a), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            v.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(a) {
            return this._append(a), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(a) {
            a && this._append(a);
            var i = this._doFinalize();
            return i;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(a) {
            return function(i, d) {
              return new a.init(d).finalize(i);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(a) {
            return function(i, d) {
              return new y.HMAC.init(a, d).finalize(i);
            };
          }
        });
        var y = c.algo = {};
        return c;
      }(Math);
      return x;
    });
  }(X0)), X0.exports;
}
var j0 = { exports: {} }, Qe;
function V0() {
  return Qe || (Qe = 1, function(p, m) {
    (function(x, t) {
      p.exports = t(I());
    })(N, function(x) {
      return function(t) {
        var f = x, l = f.lib, A = l.Base, u = l.WordArray, c = f.x64 = {};
        c.Word = A.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(e, r) {
            this.high = e, this.low = r;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), c.WordArray = A.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(e, r) {
            e = this.words = e || [], r != t ? this.sigBytes = r : this.sigBytes = e.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var e = this.words, r = e.length, B = [], n = 0; n < r; n++) {
              var o = e[n];
              B.push(o.high), B.push(o.low);
            }
            return u.create(B, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var e = A.clone.call(this), r = e.words = this.words.slice(0), B = r.length, n = 0; n < B; n++)
              r[n] = r[n].clone();
            return e;
          }
        });
      }(), x;
    });
  }(j0)), j0.exports;
}
var G0 = { exports: {} }, Ze;
function dr() {
  return Ze || (Ze = 1, function(p, m) {
    (function(x, t) {
      p.exports = t(I());
    })(N, function(x) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var t = x, f = t.lib, l = f.WordArray, A = l.init, u = l.init = function(c) {
            if (c instanceof ArrayBuffer && (c = new Uint8Array(c)), (c instanceof Int8Array || typeof Uint8ClampedArray < "u" && c instanceof Uint8ClampedArray || c instanceof Int16Array || c instanceof Uint16Array || c instanceof Int32Array || c instanceof Uint32Array || c instanceof Float32Array || c instanceof Float64Array) && (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength)), c instanceof Uint8Array) {
              for (var e = c.byteLength, r = [], B = 0; B < e; B++)
                r[B >>> 2] |= c[B] << 24 - B % 4 * 8;
              A.call(this, r, e);
            } else
              A.apply(this, arguments);
          };
          u.prototype = l;
        }
      }(), x.lib.WordArray;
    });
  }(G0)), G0.exports;
}
var Y0 = { exports: {} }, Je;
function vr() {
  return Je || (Je = 1, function(p, m) {
    (function(x, t) {
      p.exports = t(I());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.WordArray, A = t.enc;
        A.Utf16 = A.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(c) {
            for (var e = c.words, r = c.sigBytes, B = [], n = 0; n < r; n += 2) {
              var o = e[n >>> 2] >>> 16 - n % 4 * 8 & 65535;
              B.push(String.fromCharCode(o));
            }
            return B.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(c) {
            for (var e = c.length, r = [], B = 0; B < e; B++)
              r[B >>> 1] |= c.charCodeAt(B) << 16 - B % 2 * 16;
            return l.create(r, e * 2);
          }
        }, A.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(c) {
            for (var e = c.words, r = c.sigBytes, B = [], n = 0; n < r; n += 2) {
              var o = u(e[n >>> 2] >>> 16 - n % 4 * 8 & 65535);
              B.push(String.fromCharCode(o));
            }
            return B.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(c) {
            for (var e = c.length, r = [], B = 0; B < e; B++)
              r[B >>> 1] |= u(c.charCodeAt(B) << 16 - B % 2 * 16);
            return l.create(r, e * 2);
          }
        };
        function u(c) {
          return c << 8 & 4278255360 | c >>> 8 & 16711935;
        }
      }(), x.enc.Utf16;
    });
  }(Y0)), Y0.exports;
}
var Q0 = { exports: {} }, et;
function F0() {
  return et || (et = 1, function(p, m) {
    (function(x, t) {
      p.exports = t(I());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.WordArray, A = t.enc;
        A.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(c) {
            var e = c.words, r = c.sigBytes, B = this._map;
            c.clamp();
            for (var n = [], o = 0; o < r; o += 3)
              for (var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255, h = e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, v = e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, y = s << 16 | h << 8 | v, a = 0; a < 4 && o + a * 0.75 < r; a++)
                n.push(B.charAt(y >>> 6 * (3 - a) & 63));
            var i = B.charAt(64);
            if (i)
              for (; n.length % 4; )
                n.push(i);
            return n.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(c) {
            var e = c.length, r = this._map, B = this._reverseMap;
            if (!B) {
              B = this._reverseMap = [];
              for (var n = 0; n < r.length; n++)
                B[r.charCodeAt(n)] = n;
            }
            var o = r.charAt(64);
            if (o) {
              var s = c.indexOf(o);
              s !== -1 && (e = s);
            }
            return u(c, e, B);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function u(c, e, r) {
          for (var B = [], n = 0, o = 0; o < e; o++)
            if (o % 4) {
              var s = r[c.charCodeAt(o - 1)] << o % 4 * 2, h = r[c.charCodeAt(o)] >>> 6 - o % 4 * 2, v = s | h;
              B[n >>> 2] |= v << 24 - n % 4 * 8, n++;
            }
          return l.create(B, n);
        }
      }(), x.enc.Base64;
    });
  }(Q0)), Q0.exports;
}
var Z0 = { exports: {} }, tt;
function pr() {
  return tt || (tt = 1, function(p, m) {
    (function(x, t) {
      p.exports = t(I());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.WordArray, A = t.enc;
        A.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(c, e) {
            e === void 0 && (e = !0);
            var r = c.words, B = c.sigBytes, n = e ? this._safe_map : this._map;
            c.clamp();
            for (var o = [], s = 0; s < B; s += 3)
              for (var h = r[s >>> 2] >>> 24 - s % 4 * 8 & 255, v = r[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255, y = r[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, a = h << 16 | v << 8 | y, i = 0; i < 4 && s + i * 0.75 < B; i++)
                o.push(n.charAt(a >>> 6 * (3 - i) & 63));
            var d = n.charAt(64);
            if (d)
              for (; o.length % 4; )
                o.push(d);
            return o.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(c, e) {
            e === void 0 && (e = !0);
            var r = c.length, B = e ? this._safe_map : this._map, n = this._reverseMap;
            if (!n) {
              n = this._reverseMap = [];
              for (var o = 0; o < B.length; o++)
                n[B.charCodeAt(o)] = o;
            }
            var s = B.charAt(64);
            if (s) {
              var h = c.indexOf(s);
              h !== -1 && (r = h);
            }
            return u(c, r, n);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function u(c, e, r) {
          for (var B = [], n = 0, o = 0; o < e; o++)
            if (o % 4) {
              var s = r[c.charCodeAt(o - 1)] << o % 4 * 2, h = r[c.charCodeAt(o)] >>> 6 - o % 4 * 2, v = s | h;
              B[n >>> 2] |= v << 24 - n % 4 * 8, n++;
            }
          return l.create(B, n);
        }
      }(), x.enc.Base64url;
    });
  }(Z0)), Z0.exports;
}
var J0 = { exports: {} }, rt;
function D0() {
  return rt || (rt = 1, function(p, m) {
    (function(x, t) {
      p.exports = t(I());
    })(N, function(x) {
      return function(t) {
        var f = x, l = f.lib, A = l.WordArray, u = l.Hasher, c = f.algo, e = [];
        (function() {
          for (var h = 0; h < 64; h++)
            e[h] = t.abs(t.sin(h + 1)) * 4294967296 | 0;
        })();
        var r = c.MD5 = u.extend({
          _doReset: function() {
            this._hash = new A.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(h, v) {
            for (var y = 0; y < 16; y++) {
              var a = v + y, i = h[a];
              h[a] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360;
            }
            var d = this._hash.words, F = h[v + 0], D = h[v + 1], g = h[v + 2], C = h[v + 3], T = h[v + 4], E = h[v + 5], b = h[v + 6], k = h[v + 7], w = h[v + 8], z = h[v + 9], O = h[v + 10], $ = h[v + 11], M = h[v + 12], K = h[v + 13], P = h[v + 14], L = h[v + 15], _ = d[0], H = d[1], R = d[2], S = d[3];
            _ = B(_, H, R, S, F, 7, e[0]), S = B(S, _, H, R, D, 12, e[1]), R = B(R, S, _, H, g, 17, e[2]), H = B(H, R, S, _, C, 22, e[3]), _ = B(_, H, R, S, T, 7, e[4]), S = B(S, _, H, R, E, 12, e[5]), R = B(R, S, _, H, b, 17, e[6]), H = B(H, R, S, _, k, 22, e[7]), _ = B(_, H, R, S, w, 7, e[8]), S = B(S, _, H, R, z, 12, e[9]), R = B(R, S, _, H, O, 17, e[10]), H = B(H, R, S, _, $, 22, e[11]), _ = B(_, H, R, S, M, 7, e[12]), S = B(S, _, H, R, K, 12, e[13]), R = B(R, S, _, H, P, 17, e[14]), H = B(H, R, S, _, L, 22, e[15]), _ = n(_, H, R, S, D, 5, e[16]), S = n(S, _, H, R, b, 9, e[17]), R = n(R, S, _, H, $, 14, e[18]), H = n(H, R, S, _, F, 20, e[19]), _ = n(_, H, R, S, E, 5, e[20]), S = n(S, _, H, R, O, 9, e[21]), R = n(R, S, _, H, L, 14, e[22]), H = n(H, R, S, _, T, 20, e[23]), _ = n(_, H, R, S, z, 5, e[24]), S = n(S, _, H, R, P, 9, e[25]), R = n(R, S, _, H, C, 14, e[26]), H = n(H, R, S, _, w, 20, e[27]), _ = n(_, H, R, S, K, 5, e[28]), S = n(S, _, H, R, g, 9, e[29]), R = n(R, S, _, H, k, 14, e[30]), H = n(H, R, S, _, M, 20, e[31]), _ = o(_, H, R, S, E, 4, e[32]), S = o(S, _, H, R, w, 11, e[33]), R = o(R, S, _, H, $, 16, e[34]), H = o(H, R, S, _, P, 23, e[35]), _ = o(_, H, R, S, D, 4, e[36]), S = o(S, _, H, R, T, 11, e[37]), R = o(R, S, _, H, k, 16, e[38]), H = o(H, R, S, _, O, 23, e[39]), _ = o(_, H, R, S, K, 4, e[40]), S = o(S, _, H, R, F, 11, e[41]), R = o(R, S, _, H, C, 16, e[42]), H = o(H, R, S, _, b, 23, e[43]), _ = o(_, H, R, S, z, 4, e[44]), S = o(S, _, H, R, M, 11, e[45]), R = o(R, S, _, H, L, 16, e[46]), H = o(H, R, S, _, g, 23, e[47]), _ = s(_, H, R, S, F, 6, e[48]), S = s(S, _, H, R, k, 10, e[49]), R = s(R, S, _, H, P, 15, e[50]), H = s(H, R, S, _, E, 21, e[51]), _ = s(_, H, R, S, M, 6, e[52]), S = s(S, _, H, R, C, 10, e[53]), R = s(R, S, _, H, O, 15, e[54]), H = s(H, R, S, _, D, 21, e[55]), _ = s(_, H, R, S, w, 6, e[56]), S = s(S, _, H, R, L, 10, e[57]), R = s(R, S, _, H, b, 15, e[58]), H = s(H, R, S, _, K, 21, e[59]), _ = s(_, H, R, S, T, 6, e[60]), S = s(S, _, H, R, $, 10, e[61]), R = s(R, S, _, H, g, 15, e[62]), H = s(H, R, S, _, z, 21, e[63]), d[0] = d[0] + _ | 0, d[1] = d[1] + H | 0, d[2] = d[2] + R | 0, d[3] = d[3] + S | 0;
          },
          _doFinalize: function() {
            var h = this._data, v = h.words, y = this._nDataBytes * 8, a = h.sigBytes * 8;
            v[a >>> 5] |= 128 << 24 - a % 32;
            var i = t.floor(y / 4294967296), d = y;
            v[(a + 64 >>> 9 << 4) + 15] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360, v[(a + 64 >>> 9 << 4) + 14] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, h.sigBytes = (v.length + 1) * 4, this._process();
            for (var F = this._hash, D = F.words, g = 0; g < 4; g++) {
              var C = D[g];
              D[g] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            return F;
          },
          clone: function() {
            var h = u.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        function B(h, v, y, a, i, d, F) {
          var D = h + (v & y | ~v & a) + i + F;
          return (D << d | D >>> 32 - d) + v;
        }
        function n(h, v, y, a, i, d, F) {
          var D = h + (v & a | y & ~a) + i + F;
          return (D << d | D >>> 32 - d) + v;
        }
        function o(h, v, y, a, i, d, F) {
          var D = h + (v ^ y ^ a) + i + F;
          return (D << d | D >>> 32 - d) + v;
        }
        function s(h, v, y, a, i, d, F) {
          var D = h + (y ^ (v | ~a)) + i + F;
          return (D << d | D >>> 32 - d) + v;
        }
        f.MD5 = u._createHelper(r), f.HmacMD5 = u._createHmacHelper(r);
      }(Math), x.MD5;
    });
  }(J0)), J0.exports;
}
var ee = { exports: {} }, at;
function Ot() {
  return at || (at = 1, function(p, m) {
    (function(x, t) {
      p.exports = t(I());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.WordArray, A = f.Hasher, u = t.algo, c = [], e = u.SHA1 = A.extend({
          _doReset: function() {
            this._hash = new l.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(r, B) {
            for (var n = this._hash.words, o = n[0], s = n[1], h = n[2], v = n[3], y = n[4], a = 0; a < 80; a++) {
              if (a < 16)
                c[a] = r[B + a] | 0;
              else {
                var i = c[a - 3] ^ c[a - 8] ^ c[a - 14] ^ c[a - 16];
                c[a] = i << 1 | i >>> 31;
              }
              var d = (o << 5 | o >>> 27) + y + c[a];
              a < 20 ? d += (s & h | ~s & v) + 1518500249 : a < 40 ? d += (s ^ h ^ v) + 1859775393 : a < 60 ? d += (s & h | s & v | h & v) - 1894007588 : d += (s ^ h ^ v) - 899497514, y = v, v = h, h = s << 30 | s >>> 2, s = o, o = d;
            }
            n[0] = n[0] + o | 0, n[1] = n[1] + s | 0, n[2] = n[2] + h | 0, n[3] = n[3] + v | 0, n[4] = n[4] + y | 0;
          },
          _doFinalize: function() {
            var r = this._data, B = r.words, n = this._nDataBytes * 8, o = r.sigBytes * 8;
            return B[o >>> 5] |= 128 << 24 - o % 32, B[(o + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), B[(o + 64 >>> 9 << 4) + 15] = n, r.sigBytes = B.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var r = A.clone.call(this);
            return r._hash = this._hash.clone(), r;
          }
        });
        t.SHA1 = A._createHelper(e), t.HmacSHA1 = A._createHmacHelper(e);
      }(), x.SHA1;
    });
  }(ee)), ee.exports;
}
var te = { exports: {} }, xt;
function ze() {
  return xt || (xt = 1, function(p, m) {
    (function(x, t) {
      p.exports = t(I());
    })(N, function(x) {
      return function(t) {
        var f = x, l = f.lib, A = l.WordArray, u = l.Hasher, c = f.algo, e = [], r = [];
        (function() {
          function o(y) {
            for (var a = t.sqrt(y), i = 2; i <= a; i++)
              if (!(y % i))
                return !1;
            return !0;
          }
          function s(y) {
            return (y - (y | 0)) * 4294967296 | 0;
          }
          for (var h = 2, v = 0; v < 64; )
            o(h) && (v < 8 && (e[v] = s(t.pow(h, 1 / 2))), r[v] = s(t.pow(h, 1 / 3)), v++), h++;
        })();
        var B = [], n = c.SHA256 = u.extend({
          _doReset: function() {
            this._hash = new A.init(e.slice(0));
          },
          _doProcessBlock: function(o, s) {
            for (var h = this._hash.words, v = h[0], y = h[1], a = h[2], i = h[3], d = h[4], F = h[5], D = h[6], g = h[7], C = 0; C < 64; C++) {
              if (C < 16)
                B[C] = o[s + C] | 0;
              else {
                var T = B[C - 15], E = (T << 25 | T >>> 7) ^ (T << 14 | T >>> 18) ^ T >>> 3, b = B[C - 2], k = (b << 15 | b >>> 17) ^ (b << 13 | b >>> 19) ^ b >>> 10;
                B[C] = E + B[C - 7] + k + B[C - 16];
              }
              var w = d & F ^ ~d & D, z = v & y ^ v & a ^ y & a, O = (v << 30 | v >>> 2) ^ (v << 19 | v >>> 13) ^ (v << 10 | v >>> 22), $ = (d << 26 | d >>> 6) ^ (d << 21 | d >>> 11) ^ (d << 7 | d >>> 25), M = g + $ + w + r[C] + B[C], K = O + z;
              g = D, D = F, F = d, d = i + M | 0, i = a, a = y, y = v, v = M + K | 0;
            }
            h[0] = h[0] + v | 0, h[1] = h[1] + y | 0, h[2] = h[2] + a | 0, h[3] = h[3] + i | 0, h[4] = h[4] + d | 0, h[5] = h[5] + F | 0, h[6] = h[6] + D | 0, h[7] = h[7] + g | 0;
          },
          _doFinalize: function() {
            var o = this._data, s = o.words, h = this._nDataBytes * 8, v = o.sigBytes * 8;
            return s[v >>> 5] |= 128 << 24 - v % 32, s[(v + 64 >>> 9 << 4) + 14] = t.floor(h / 4294967296), s[(v + 64 >>> 9 << 4) + 15] = h, o.sigBytes = s.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var o = u.clone.call(this);
            return o._hash = this._hash.clone(), o;
          }
        });
        f.SHA256 = u._createHelper(n), f.HmacSHA256 = u._createHmacHelper(n);
      }(Math), x.SHA256;
    });
  }(te)), te.exports;
}
var re = { exports: {} }, nt;
function hr() {
  return nt || (nt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), ze());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.WordArray, A = t.algo, u = A.SHA256, c = A.SHA224 = u.extend({
          _doReset: function() {
            this._hash = new l.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var e = u._doFinalize.call(this);
            return e.sigBytes -= 4, e;
          }
        });
        t.SHA224 = u._createHelper(c), t.HmacSHA224 = u._createHmacHelper(c);
      }(), x.SHA224;
    });
  }(re)), re.exports;
}
var ae = { exports: {} }, ot;
function $t() {
  return ot || (ot = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), V0());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.Hasher, A = t.x64, u = A.Word, c = A.WordArray, e = t.algo;
        function r() {
          return u.create.apply(u, arguments);
        }
        var B = [
          r(1116352408, 3609767458),
          r(1899447441, 602891725),
          r(3049323471, 3964484399),
          r(3921009573, 2173295548),
          r(961987163, 4081628472),
          r(1508970993, 3053834265),
          r(2453635748, 2937671579),
          r(2870763221, 3664609560),
          r(3624381080, 2734883394),
          r(310598401, 1164996542),
          r(607225278, 1323610764),
          r(1426881987, 3590304994),
          r(1925078388, 4068182383),
          r(2162078206, 991336113),
          r(2614888103, 633803317),
          r(3248222580, 3479774868),
          r(3835390401, 2666613458),
          r(4022224774, 944711139),
          r(264347078, 2341262773),
          r(604807628, 2007800933),
          r(770255983, 1495990901),
          r(1249150122, 1856431235),
          r(1555081692, 3175218132),
          r(1996064986, 2198950837),
          r(2554220882, 3999719339),
          r(2821834349, 766784016),
          r(2952996808, 2566594879),
          r(3210313671, 3203337956),
          r(3336571891, 1034457026),
          r(3584528711, 2466948901),
          r(113926993, 3758326383),
          r(338241895, 168717936),
          r(666307205, 1188179964),
          r(773529912, 1546045734),
          r(1294757372, 1522805485),
          r(1396182291, 2643833823),
          r(1695183700, 2343527390),
          r(1986661051, 1014477480),
          r(2177026350, 1206759142),
          r(2456956037, 344077627),
          r(2730485921, 1290863460),
          r(2820302411, 3158454273),
          r(3259730800, 3505952657),
          r(3345764771, 106217008),
          r(3516065817, 3606008344),
          r(3600352804, 1432725776),
          r(4094571909, 1467031594),
          r(275423344, 851169720),
          r(430227734, 3100823752),
          r(506948616, 1363258195),
          r(659060556, 3750685593),
          r(883997877, 3785050280),
          r(958139571, 3318307427),
          r(1322822218, 3812723403),
          r(1537002063, 2003034995),
          r(1747873779, 3602036899),
          r(1955562222, 1575990012),
          r(2024104815, 1125592928),
          r(2227730452, 2716904306),
          r(2361852424, 442776044),
          r(2428436474, 593698344),
          r(2756734187, 3733110249),
          r(3204031479, 2999351573),
          r(3329325298, 3815920427),
          r(3391569614, 3928383900),
          r(3515267271, 566280711),
          r(3940187606, 3454069534),
          r(4118630271, 4000239992),
          r(116418474, 1914138554),
          r(174292421, 2731055270),
          r(289380356, 3203993006),
          r(460393269, 320620315),
          r(685471733, 587496836),
          r(852142971, 1086792851),
          r(1017036298, 365543100),
          r(1126000580, 2618297676),
          r(1288033470, 3409855158),
          r(1501505948, 4234509866),
          r(1607167915, 987167468),
          r(1816402316, 1246189591)
        ], n = [];
        (function() {
          for (var s = 0; s < 80; s++)
            n[s] = r();
        })();
        var o = e.SHA512 = l.extend({
          _doReset: function() {
            this._hash = new c.init([
              new u.init(1779033703, 4089235720),
              new u.init(3144134277, 2227873595),
              new u.init(1013904242, 4271175723),
              new u.init(2773480762, 1595750129),
              new u.init(1359893119, 2917565137),
              new u.init(2600822924, 725511199),
              new u.init(528734635, 4215389547),
              new u.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(s, h) {
            for (var v = this._hash.words, y = v[0], a = v[1], i = v[2], d = v[3], F = v[4], D = v[5], g = v[6], C = v[7], T = y.high, E = y.low, b = a.high, k = a.low, w = i.high, z = i.low, O = d.high, $ = d.low, M = F.high, K = F.low, P = D.high, L = D.low, _ = g.high, H = g.low, R = C.high, S = C.low, G = T, X = E, t0 = b, U = k, k0 = w, y0 = z, K0 = O, w0 = $, i0 = M, a0 = K, L0 = P, S0 = L, N0 = _, H0 = H, M0 = R, R0 = S, l0 = 0; l0 < 80; l0++) {
              var n0, v0, U0 = n[l0];
              if (l0 < 16)
                v0 = U0.high = s[h + l0 * 2] | 0, n0 = U0.low = s[h + l0 * 2 + 1] | 0;
              else {
                var $e = n[l0 - 15], g0 = $e.high, T0 = $e.low, Lt = (g0 >>> 1 | T0 << 31) ^ (g0 >>> 8 | T0 << 24) ^ g0 >>> 7, Le = (T0 >>> 1 | g0 << 31) ^ (T0 >>> 8 | g0 << 24) ^ (T0 >>> 7 | g0 << 25), Ne = n[l0 - 2], b0 = Ne.high, P0 = Ne.low, Nt = (b0 >>> 19 | P0 << 13) ^ (b0 << 3 | P0 >>> 29) ^ b0 >>> 6, Ue = (P0 >>> 19 | b0 << 13) ^ (P0 << 3 | b0 >>> 29) ^ (P0 >>> 6 | b0 << 26), We = n[l0 - 7], Ut = We.high, Wt = We.low, Ie = n[l0 - 16], It = Ie.high, Ve = Ie.low;
                n0 = Le + Wt, v0 = Lt + Ut + (n0 >>> 0 < Le >>> 0 ? 1 : 0), n0 = n0 + Ue, v0 = v0 + Nt + (n0 >>> 0 < Ue >>> 0 ? 1 : 0), n0 = n0 + Ve, v0 = v0 + It + (n0 >>> 0 < Ve >>> 0 ? 1 : 0), U0.high = v0, U0.low = n0;
              }
              var Vt = i0 & L0 ^ ~i0 & N0, Ke = a0 & S0 ^ ~a0 & H0, Kt = G & t0 ^ G & k0 ^ t0 & k0, Mt = X & U ^ X & y0 ^ U & y0, Xt = (G >>> 28 | X << 4) ^ (G << 30 | X >>> 2) ^ (G << 25 | X >>> 7), Me = (X >>> 28 | G << 4) ^ (X << 30 | G >>> 2) ^ (X << 25 | G >>> 7), jt = (i0 >>> 14 | a0 << 18) ^ (i0 >>> 18 | a0 << 14) ^ (i0 << 23 | a0 >>> 9), Gt = (a0 >>> 14 | i0 << 18) ^ (a0 >>> 18 | i0 << 14) ^ (a0 << 23 | i0 >>> 9), Xe = B[l0], Yt = Xe.high, je = Xe.low, x0 = R0 + Gt, p0 = M0 + jt + (x0 >>> 0 < R0 >>> 0 ? 1 : 0), x0 = x0 + Ke, p0 = p0 + Vt + (x0 >>> 0 < Ke >>> 0 ? 1 : 0), x0 = x0 + je, p0 = p0 + Yt + (x0 >>> 0 < je >>> 0 ? 1 : 0), x0 = x0 + n0, p0 = p0 + v0 + (x0 >>> 0 < n0 >>> 0 ? 1 : 0), Ge = Me + Mt, Qt = Xt + Kt + (Ge >>> 0 < Me >>> 0 ? 1 : 0);
              M0 = N0, R0 = H0, N0 = L0, H0 = S0, L0 = i0, S0 = a0, a0 = w0 + x0 | 0, i0 = K0 + p0 + (a0 >>> 0 < w0 >>> 0 ? 1 : 0) | 0, K0 = k0, w0 = y0, k0 = t0, y0 = U, t0 = G, U = X, X = x0 + Ge | 0, G = p0 + Qt + (X >>> 0 < x0 >>> 0 ? 1 : 0) | 0;
            }
            E = y.low = E + X, y.high = T + G + (E >>> 0 < X >>> 0 ? 1 : 0), k = a.low = k + U, a.high = b + t0 + (k >>> 0 < U >>> 0 ? 1 : 0), z = i.low = z + y0, i.high = w + k0 + (z >>> 0 < y0 >>> 0 ? 1 : 0), $ = d.low = $ + w0, d.high = O + K0 + ($ >>> 0 < w0 >>> 0 ? 1 : 0), K = F.low = K + a0, F.high = M + i0 + (K >>> 0 < a0 >>> 0 ? 1 : 0), L = D.low = L + S0, D.high = P + L0 + (L >>> 0 < S0 >>> 0 ? 1 : 0), H = g.low = H + H0, g.high = _ + N0 + (H >>> 0 < H0 >>> 0 ? 1 : 0), S = C.low = S + R0, C.high = R + M0 + (S >>> 0 < R0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var s = this._data, h = s.words, v = this._nDataBytes * 8, y = s.sigBytes * 8;
            h[y >>> 5] |= 128 << 24 - y % 32, h[(y + 128 >>> 10 << 5) + 30] = Math.floor(v / 4294967296), h[(y + 128 >>> 10 << 5) + 31] = v, s.sigBytes = h.length * 4, this._process();
            var a = this._hash.toX32();
            return a;
          },
          clone: function() {
            var s = l.clone.call(this);
            return s._hash = this._hash.clone(), s;
          },
          blockSize: 1024 / 32
        });
        t.SHA512 = l._createHelper(o), t.HmacSHA512 = l._createHmacHelper(o);
      }(), x.SHA512;
    });
  }(ae)), ae.exports;
}
var xe = { exports: {} }, it;
function Br() {
  return it || (it = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), V0(), $t());
    })(N, function(x) {
      return function() {
        var t = x, f = t.x64, l = f.Word, A = f.WordArray, u = t.algo, c = u.SHA512, e = u.SHA384 = c.extend({
          _doReset: function() {
            this._hash = new A.init([
              new l.init(3418070365, 3238371032),
              new l.init(1654270250, 914150663),
              new l.init(2438529370, 812702999),
              new l.init(355462360, 4144912697),
              new l.init(1731405415, 4290775857),
              new l.init(2394180231, 1750603025),
              new l.init(3675008525, 1694076839),
              new l.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var r = c._doFinalize.call(this);
            return r.sigBytes -= 16, r;
          }
        });
        t.SHA384 = c._createHelper(e), t.HmacSHA384 = c._createHmacHelper(e);
      }(), x.SHA384;
    });
  }(xe)), xe.exports;
}
var ne = { exports: {} }, lt;
function Cr() {
  return lt || (lt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), V0());
    })(N, function(x) {
      return function(t) {
        var f = x, l = f.lib, A = l.WordArray, u = l.Hasher, c = f.x64, e = c.Word, r = f.algo, B = [], n = [], o = [];
        (function() {
          for (var v = 1, y = 0, a = 0; a < 24; a++) {
            B[v + 5 * y] = (a + 1) * (a + 2) / 2 % 64;
            var i = y % 5, d = (2 * v + 3 * y) % 5;
            v = i, y = d;
          }
          for (var v = 0; v < 5; v++)
            for (var y = 0; y < 5; y++)
              n[v + 5 * y] = y + (2 * v + 3 * y) % 5 * 5;
          for (var F = 1, D = 0; D < 24; D++) {
            for (var g = 0, C = 0, T = 0; T < 7; T++) {
              if (F & 1) {
                var E = (1 << T) - 1;
                E < 32 ? C ^= 1 << E : g ^= 1 << E - 32;
              }
              F & 128 ? F = F << 1 ^ 113 : F <<= 1;
            }
            o[D] = e.create(g, C);
          }
        })();
        var s = [];
        (function() {
          for (var v = 0; v < 25; v++)
            s[v] = e.create();
        })();
        var h = r.SHA3 = u.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: u.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var v = this._state = [], y = 0; y < 25; y++)
              v[y] = new e.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(v, y) {
            for (var a = this._state, i = this.blockSize / 2, d = 0; d < i; d++) {
              var F = v[y + 2 * d], D = v[y + 2 * d + 1];
              F = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360, D = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360;
              var g = a[d];
              g.high ^= D, g.low ^= F;
            }
            for (var C = 0; C < 24; C++) {
              for (var T = 0; T < 5; T++) {
                for (var E = 0, b = 0, k = 0; k < 5; k++) {
                  var g = a[T + 5 * k];
                  E ^= g.high, b ^= g.low;
                }
                var w = s[T];
                w.high = E, w.low = b;
              }
              for (var T = 0; T < 5; T++)
                for (var z = s[(T + 4) % 5], O = s[(T + 1) % 5], $ = O.high, M = O.low, E = z.high ^ ($ << 1 | M >>> 31), b = z.low ^ (M << 1 | $ >>> 31), k = 0; k < 5; k++) {
                  var g = a[T + 5 * k];
                  g.high ^= E, g.low ^= b;
                }
              for (var K = 1; K < 25; K++) {
                var E, b, g = a[K], P = g.high, L = g.low, _ = B[K];
                _ < 32 ? (E = P << _ | L >>> 32 - _, b = L << _ | P >>> 32 - _) : (E = L << _ - 32 | P >>> 64 - _, b = P << _ - 32 | L >>> 64 - _);
                var H = s[n[K]];
                H.high = E, H.low = b;
              }
              var R = s[0], S = a[0];
              R.high = S.high, R.low = S.low;
              for (var T = 0; T < 5; T++)
                for (var k = 0; k < 5; k++) {
                  var K = T + 5 * k, g = a[K], G = s[K], X = s[(T + 1) % 5 + 5 * k], t0 = s[(T + 2) % 5 + 5 * k];
                  g.high = G.high ^ ~X.high & t0.high, g.low = G.low ^ ~X.low & t0.low;
                }
              var g = a[0], U = o[C];
              g.high ^= U.high, g.low ^= U.low;
            }
          },
          _doFinalize: function() {
            var v = this._data, y = v.words;
            this._nDataBytes * 8;
            var a = v.sigBytes * 8, i = this.blockSize * 32;
            y[a >>> 5] |= 1 << 24 - a % 32, y[(t.ceil((a + 1) / i) * i >>> 5) - 1] |= 128, v.sigBytes = y.length * 4, this._process();
            for (var d = this._state, F = this.cfg.outputLength / 8, D = F / 8, g = [], C = 0; C < D; C++) {
              var T = d[C], E = T.high, b = T.low;
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, b = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, g.push(b), g.push(E);
            }
            return new A.init(g, F);
          },
          clone: function() {
            for (var v = u.clone.call(this), y = v._state = this._state.slice(0), a = 0; a < 25; a++)
              y[a] = y[a].clone();
            return v;
          }
        });
        f.SHA3 = u._createHelper(h), f.HmacSHA3 = u._createHmacHelper(h);
      }(Math), x.SHA3;
    });
  }(ne)), ne.exports;
}
var oe = { exports: {} }, st;
function Er() {
  return st || (st = 1, function(p, m) {
    (function(x, t) {
      p.exports = t(I());
    })(N, function(x) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(t) {
        var f = x, l = f.lib, A = l.WordArray, u = l.Hasher, c = f.algo, e = A.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), r = A.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), B = A.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), n = A.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), o = A.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), s = A.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), h = c.RIPEMD160 = u.extend({
          _doReset: function() {
            this._hash = A.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(D, g) {
            for (var C = 0; C < 16; C++) {
              var T = g + C, E = D[T];
              D[T] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            var b = this._hash.words, k = o.words, w = s.words, z = e.words, O = r.words, $ = B.words, M = n.words, K, P, L, _, H, R, S, G, X, t0;
            R = K = b[0], S = P = b[1], G = L = b[2], X = _ = b[3], t0 = H = b[4];
            for (var U, C = 0; C < 80; C += 1)
              U = K + D[g + z[C]] | 0, C < 16 ? U += v(P, L, _) + k[0] : C < 32 ? U += y(P, L, _) + k[1] : C < 48 ? U += a(P, L, _) + k[2] : C < 64 ? U += i(P, L, _) + k[3] : U += d(P, L, _) + k[4], U = U | 0, U = F(U, $[C]), U = U + H | 0, K = H, H = _, _ = F(L, 10), L = P, P = U, U = R + D[g + O[C]] | 0, C < 16 ? U += d(S, G, X) + w[0] : C < 32 ? U += i(S, G, X) + w[1] : C < 48 ? U += a(S, G, X) + w[2] : C < 64 ? U += y(S, G, X) + w[3] : U += v(S, G, X) + w[4], U = U | 0, U = F(U, M[C]), U = U + t0 | 0, R = t0, t0 = X, X = F(G, 10), G = S, S = U;
            U = b[1] + L + X | 0, b[1] = b[2] + _ + t0 | 0, b[2] = b[3] + H + R | 0, b[3] = b[4] + K + S | 0, b[4] = b[0] + P + G | 0, b[0] = U;
          },
          _doFinalize: function() {
            var D = this._data, g = D.words, C = this._nDataBytes * 8, T = D.sigBytes * 8;
            g[T >>> 5] |= 128 << 24 - T % 32, g[(T + 64 >>> 9 << 4) + 14] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, D.sigBytes = (g.length + 1) * 4, this._process();
            for (var E = this._hash, b = E.words, k = 0; k < 5; k++) {
              var w = b[k];
              b[k] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var D = u.clone.call(this);
            return D._hash = this._hash.clone(), D;
          }
        });
        function v(D, g, C) {
          return D ^ g ^ C;
        }
        function y(D, g, C) {
          return D & g | ~D & C;
        }
        function a(D, g, C) {
          return (D | ~g) ^ C;
        }
        function i(D, g, C) {
          return D & C | g & ~C;
        }
        function d(D, g, C) {
          return D ^ (g | ~C);
        }
        function F(D, g) {
          return D << g | D >>> 32 - g;
        }
        f.RIPEMD160 = u._createHelper(h), f.HmacRIPEMD160 = u._createHmacHelper(h);
      }(), x.RIPEMD160;
    });
  }(oe)), oe.exports;
}
var ie = { exports: {} }, ft;
function qe() {
  return ft || (ft = 1, function(p, m) {
    (function(x, t) {
      p.exports = t(I());
    })(N, function(x) {
      (function() {
        var t = x, f = t.lib, l = f.Base, A = t.enc, u = A.Utf8, c = t.algo;
        c.HMAC = l.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(e, r) {
            e = this._hasher = new e.init(), typeof r == "string" && (r = u.parse(r));
            var B = e.blockSize, n = B * 4;
            r.sigBytes > n && (r = e.finalize(r)), r.clamp();
            for (var o = this._oKey = r.clone(), s = this._iKey = r.clone(), h = o.words, v = s.words, y = 0; y < B; y++)
              h[y] ^= 1549556828, v[y] ^= 909522486;
            o.sigBytes = s.sigBytes = n, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var e = this._hasher;
            e.reset(), e.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(e) {
            return this._hasher.update(e), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(e) {
            var r = this._hasher, B = r.finalize(e);
            r.reset();
            var n = r.finalize(this._oKey.clone().concat(B));
            return n;
          }
        });
      })();
    });
  }(ie)), ie.exports;
}
var le = { exports: {} }, ct;
function Ar() {
  return ct || (ct = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), ze(), qe());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.Base, A = f.WordArray, u = t.algo, c = u.SHA256, e = u.HMAC, r = u.PBKDF2 = l.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: l.extend({
            keySize: 128 / 32,
            hasher: c,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(B) {
            this.cfg = this.cfg.extend(B);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(B, n) {
            for (var o = this.cfg, s = e.create(o.hasher, B), h = A.create(), v = A.create([1]), y = h.words, a = v.words, i = o.keySize, d = o.iterations; y.length < i; ) {
              var F = s.update(n).finalize(v);
              s.reset();
              for (var D = F.words, g = D.length, C = F, T = 1; T < d; T++) {
                C = s.finalize(C), s.reset();
                for (var E = C.words, b = 0; b < g; b++)
                  D[b] ^= E[b];
              }
              h.concat(F), a[0]++;
            }
            return h.sigBytes = i * 4, h;
          }
        });
        t.PBKDF2 = function(B, n, o) {
          return r.create(o).compute(B, n);
        };
      }(), x.PBKDF2;
    });
  }(le)), le.exports;
}
var se = { exports: {} }, ut;
function E0() {
  return ut || (ut = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), Ot(), qe());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.Base, A = f.WordArray, u = t.algo, c = u.MD5, e = u.EvpKDF = l.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: l.extend({
            keySize: 128 / 32,
            hasher: c,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(r) {
            this.cfg = this.cfg.extend(r);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(r, B) {
            for (var n, o = this.cfg, s = o.hasher.create(), h = A.create(), v = h.words, y = o.keySize, a = o.iterations; v.length < y; ) {
              n && s.update(n), n = s.update(r).finalize(B), s.reset();
              for (var i = 1; i < a; i++)
                n = s.finalize(n), s.reset();
              h.concat(n);
            }
            return h.sigBytes = y * 4, h;
          }
        });
        t.EvpKDF = function(r, B, n) {
          return e.create(n).compute(r, B);
        };
      }(), x.EvpKDF;
    });
  }(se)), se.exports;
}
var fe = { exports: {} }, dt;
function J() {
  return dt || (dt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), E0());
    })(N, function(x) {
      x.lib.Cipher || function(t) {
        var f = x, l = f.lib, A = l.Base, u = l.WordArray, c = l.BufferedBlockAlgorithm, e = f.enc;
        e.Utf8;
        var r = e.Base64, B = f.algo, n = B.EvpKDF, o = l.Cipher = c.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: A.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(E, b) {
            return this.create(this._ENC_XFORM_MODE, E, b);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(E, b) {
            return this.create(this._DEC_XFORM_MODE, E, b);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(E, b, k) {
            this.cfg = this.cfg.extend(k), this._xformMode = E, this._key = b, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            c.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(E) {
            return this._append(E), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(E) {
            E && this._append(E);
            var b = this._doFinalize();
            return b;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function E(b) {
              return typeof b == "string" ? T : D;
            }
            return function(b) {
              return {
                encrypt: function(k, w, z) {
                  return E(w).encrypt(b, k, w, z);
                },
                decrypt: function(k, w, z) {
                  return E(w).decrypt(b, k, w, z);
                }
              };
            };
          }()
        });
        l.StreamCipher = o.extend({
          _doFinalize: function() {
            var E = this._process(!0);
            return E;
          },
          blockSize: 1
        });
        var s = f.mode = {}, h = l.BlockCipherMode = A.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(E, b) {
            return this.Encryptor.create(E, b);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(E, b) {
            return this.Decryptor.create(E, b);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(E, b) {
            this._cipher = E, this._iv = b;
          }
        }), v = s.CBC = function() {
          var E = h.extend();
          E.Encryptor = E.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(k, w) {
              var z = this._cipher, O = z.blockSize;
              b.call(this, k, w, O), z.encryptBlock(k, w), this._prevBlock = k.slice(w, w + O);
            }
          }), E.Decryptor = E.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(k, w) {
              var z = this._cipher, O = z.blockSize, $ = k.slice(w, w + O);
              z.decryptBlock(k, w), b.call(this, k, w, O), this._prevBlock = $;
            }
          });
          function b(k, w, z) {
            var O, $ = this._iv;
            $ ? (O = $, this._iv = t) : O = this._prevBlock;
            for (var M = 0; M < z; M++)
              k[w + M] ^= O[M];
          }
          return E;
        }(), y = f.pad = {}, a = y.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(E, b) {
            for (var k = b * 4, w = k - E.sigBytes % k, z = w << 24 | w << 16 | w << 8 | w, O = [], $ = 0; $ < w; $ += 4)
              O.push(z);
            var M = u.create(O, w);
            E.concat(M);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(E) {
            var b = E.words[E.sigBytes - 1 >>> 2] & 255;
            E.sigBytes -= b;
          }
        };
        l.BlockCipher = o.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: o.cfg.extend({
            mode: v,
            padding: a
          }),
          reset: function() {
            var E;
            o.reset.call(this);
            var b = this.cfg, k = b.iv, w = b.mode;
            this._xformMode == this._ENC_XFORM_MODE ? E = w.createEncryptor : (E = w.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == E ? this._mode.init(this, k && k.words) : (this._mode = E.call(w, this, k && k.words), this._mode.__creator = E);
          },
          _doProcessBlock: function(E, b) {
            this._mode.processBlock(E, b);
          },
          _doFinalize: function() {
            var E, b = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (b.pad(this._data, this.blockSize), E = this._process(!0)) : (E = this._process(!0), b.unpad(E)), E;
          },
          blockSize: 128 / 32
        });
        var i = l.CipherParams = A.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(E) {
            this.mixIn(E);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(E) {
            return (E || this.formatter).stringify(this);
          }
        }), d = f.format = {}, F = d.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(E) {
            var b, k = E.ciphertext, w = E.salt;
            return w ? b = u.create([1398893684, 1701076831]).concat(w).concat(k) : b = k, b.toString(r);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(E) {
            var b, k = r.parse(E), w = k.words;
            return w[0] == 1398893684 && w[1] == 1701076831 && (b = u.create(w.slice(2, 4)), w.splice(0, 4), k.sigBytes -= 16), i.create({ ciphertext: k, salt: b });
          }
        }, D = l.SerializableCipher = A.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: A.extend({
            format: F
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(E, b, k, w) {
            w = this.cfg.extend(w);
            var z = E.createEncryptor(k, w), O = z.finalize(b), $ = z.cfg;
            return i.create({
              ciphertext: O,
              key: k,
              iv: $.iv,
              algorithm: E,
              mode: $.mode,
              padding: $.padding,
              blockSize: E.blockSize,
              formatter: w.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(E, b, k, w) {
            w = this.cfg.extend(w), b = this._parse(b, w.format);
            var z = E.createDecryptor(k, w).finalize(b.ciphertext);
            return z;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(E, b) {
            return typeof E == "string" ? b.parse(E, this) : E;
          }
        }), g = f.kdf = {}, C = g.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(E, b, k, w, z) {
            if (w || (w = u.random(64 / 8)), z)
              var O = n.create({ keySize: b + k, hasher: z }).compute(E, w);
            else
              var O = n.create({ keySize: b + k }).compute(E, w);
            var $ = u.create(O.words.slice(b), k * 4);
            return O.sigBytes = b * 4, i.create({ key: O, iv: $, salt: w });
          }
        }, T = l.PasswordBasedCipher = D.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: D.cfg.extend({
            kdf: C
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(E, b, k, w) {
            w = this.cfg.extend(w);
            var z = w.kdf.execute(k, E.keySize, E.ivSize, w.salt, w.hasher);
            w.iv = z.iv;
            var O = D.encrypt.call(this, E, b, z.key, w);
            return O.mixIn(z), O;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(E, b, k, w) {
            w = this.cfg.extend(w), b = this._parse(b, w.format);
            var z = w.kdf.execute(k, E.keySize, E.ivSize, b.salt, w.hasher);
            w.iv = z.iv;
            var O = D.decrypt.call(this, E, b, z.key, w);
            return O;
          }
        });
      }();
    });
  }(fe)), fe.exports;
}
var ce = { exports: {} }, vt;
function Fr() {
  return vt || (vt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), J());
    })(N, function(x) {
      return x.mode.CFB = function() {
        var t = x.lib.BlockCipherMode.extend();
        t.Encryptor = t.extend({
          processBlock: function(l, A) {
            var u = this._cipher, c = u.blockSize;
            f.call(this, l, A, c, u), this._prevBlock = l.slice(A, A + c);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(l, A) {
            var u = this._cipher, c = u.blockSize, e = l.slice(A, A + c);
            f.call(this, l, A, c, u), this._prevBlock = e;
          }
        });
        function f(l, A, u, c) {
          var e, r = this._iv;
          r ? (e = r.slice(0), this._iv = void 0) : e = this._prevBlock, c.encryptBlock(e, 0);
          for (var B = 0; B < u; B++)
            l[A + B] ^= e[B];
        }
        return t;
      }(), x.mode.CFB;
    });
  }(ce)), ce.exports;
}
var ue = { exports: {} }, pt;
function Dr() {
  return pt || (pt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), J());
    })(N, function(x) {
      return x.mode.CTR = function() {
        var t = x.lib.BlockCipherMode.extend(), f = t.Encryptor = t.extend({
          processBlock: function(l, A) {
            var u = this._cipher, c = u.blockSize, e = this._iv, r = this._counter;
            e && (r = this._counter = e.slice(0), this._iv = void 0);
            var B = r.slice(0);
            u.encryptBlock(B, 0), r[c - 1] = r[c - 1] + 1 | 0;
            for (var n = 0; n < c; n++)
              l[A + n] ^= B[n];
          }
        });
        return t.Decryptor = f, t;
      }(), x.mode.CTR;
    });
  }(ue)), ue.exports;
}
var de = { exports: {} }, ht;
function yr() {
  return ht || (ht = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), J());
    })(N, function(x) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return x.mode.CTRGladman = function() {
        var t = x.lib.BlockCipherMode.extend();
        function f(u) {
          if ((u >> 24 & 255) === 255) {
            var c = u >> 16 & 255, e = u >> 8 & 255, r = u & 255;
            c === 255 ? (c = 0, e === 255 ? (e = 0, r === 255 ? r = 0 : ++r) : ++e) : ++c, u = 0, u += c << 16, u += e << 8, u += r;
          } else
            u += 1 << 24;
          return u;
        }
        function l(u) {
          return (u[0] = f(u[0])) === 0 && (u[1] = f(u[1])), u;
        }
        var A = t.Encryptor = t.extend({
          processBlock: function(u, c) {
            var e = this._cipher, r = e.blockSize, B = this._iv, n = this._counter;
            B && (n = this._counter = B.slice(0), this._iv = void 0), l(n);
            var o = n.slice(0);
            e.encryptBlock(o, 0);
            for (var s = 0; s < r; s++)
              u[c + s] ^= o[s];
          }
        });
        return t.Decryptor = A, t;
      }(), x.mode.CTRGladman;
    });
  }(de)), de.exports;
}
var ve = { exports: {} }, Bt;
function gr() {
  return Bt || (Bt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), J());
    })(N, function(x) {
      return x.mode.OFB = function() {
        var t = x.lib.BlockCipherMode.extend(), f = t.Encryptor = t.extend({
          processBlock: function(l, A) {
            var u = this._cipher, c = u.blockSize, e = this._iv, r = this._keystream;
            e && (r = this._keystream = e.slice(0), this._iv = void 0), u.encryptBlock(r, 0);
            for (var B = 0; B < c; B++)
              l[A + B] ^= r[B];
          }
        });
        return t.Decryptor = f, t;
      }(), x.mode.OFB;
    });
  }(ve)), ve.exports;
}
var pe = { exports: {} }, Ct;
function br() {
  return Ct || (Ct = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), J());
    })(N, function(x) {
      return x.mode.ECB = function() {
        var t = x.lib.BlockCipherMode.extend();
        return t.Encryptor = t.extend({
          processBlock: function(f, l) {
            this._cipher.encryptBlock(f, l);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(f, l) {
            this._cipher.decryptBlock(f, l);
          }
        }), t;
      }(), x.mode.ECB;
    });
  }(pe)), pe.exports;
}
var he = { exports: {} }, Et;
function _r() {
  return Et || (Et = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), J());
    })(N, function(x) {
      return x.pad.AnsiX923 = {
        pad: function(t, f) {
          var l = t.sigBytes, A = f * 4, u = A - l % A, c = l + u - 1;
          t.clamp(), t.words[c >>> 2] |= u << 24 - c % 4 * 8, t.sigBytes += u;
        },
        unpad: function(t) {
          var f = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= f;
        }
      }, x.pad.Ansix923;
    });
  }(he)), he.exports;
}
var Be = { exports: {} }, At;
function mr() {
  return At || (At = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), J());
    })(N, function(x) {
      return x.pad.Iso10126 = {
        pad: function(t, f) {
          var l = f * 4, A = l - t.sigBytes % l;
          t.concat(x.lib.WordArray.random(A - 1)).concat(x.lib.WordArray.create([A << 24], 1));
        },
        unpad: function(t) {
          var f = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= f;
        }
      }, x.pad.Iso10126;
    });
  }(Be)), Be.exports;
}
var Ce = { exports: {} }, Ft;
function kr() {
  return Ft || (Ft = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), J());
    })(N, function(x) {
      return x.pad.Iso97971 = {
        pad: function(t, f) {
          t.concat(x.lib.WordArray.create([2147483648], 1)), x.pad.ZeroPadding.pad(t, f);
        },
        unpad: function(t) {
          x.pad.ZeroPadding.unpad(t), t.sigBytes--;
        }
      }, x.pad.Iso97971;
    });
  }(Ce)), Ce.exports;
}
var Ee = { exports: {} }, Dt;
function wr() {
  return Dt || (Dt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), J());
    })(N, function(x) {
      return x.pad.ZeroPadding = {
        pad: function(t, f) {
          var l = f * 4;
          t.clamp(), t.sigBytes += l - (t.sigBytes % l || l);
        },
        unpad: function(t) {
          for (var f = t.words, l = t.sigBytes - 1, l = t.sigBytes - 1; l >= 0; l--)
            if (f[l >>> 2] >>> 24 - l % 4 * 8 & 255) {
              t.sigBytes = l + 1;
              break;
            }
        }
      }, x.pad.ZeroPadding;
    });
  }(Ee)), Ee.exports;
}
var Ae = { exports: {} }, yt;
function Sr() {
  return yt || (yt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), J());
    })(N, function(x) {
      return x.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, x.pad.NoPadding;
    });
  }(Ae)), Ae.exports;
}
var Fe = { exports: {} }, gt;
function Hr() {
  return gt || (gt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), J());
    })(N, function(x) {
      return function(t) {
        var f = x, l = f.lib, A = l.CipherParams, u = f.enc, c = u.Hex, e = f.format;
        e.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(r) {
            return r.ciphertext.toString(c);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(r) {
            var B = c.parse(r);
            return A.create({ ciphertext: B });
          }
        };
      }(), x.format.Hex;
    });
  }(Fe)), Fe.exports;
}
var De = { exports: {} }, bt;
function Rr() {
  return bt || (bt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), F0(), D0(), E0(), J());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.BlockCipher, A = t.algo, u = [], c = [], e = [], r = [], B = [], n = [], o = [], s = [], h = [], v = [];
        (function() {
          for (var i = [], d = 0; d < 256; d++)
            d < 128 ? i[d] = d << 1 : i[d] = d << 1 ^ 283;
          for (var F = 0, D = 0, d = 0; d < 256; d++) {
            var g = D ^ D << 1 ^ D << 2 ^ D << 3 ^ D << 4;
            g = g >>> 8 ^ g & 255 ^ 99, u[F] = g, c[g] = F;
            var C = i[F], T = i[C], E = i[T], b = i[g] * 257 ^ g * 16843008;
            e[F] = b << 24 | b >>> 8, r[F] = b << 16 | b >>> 16, B[F] = b << 8 | b >>> 24, n[F] = b;
            var b = E * 16843009 ^ T * 65537 ^ C * 257 ^ F * 16843008;
            o[g] = b << 24 | b >>> 8, s[g] = b << 16 | b >>> 16, h[g] = b << 8 | b >>> 24, v[g] = b, F ? (F = C ^ i[i[i[E ^ C]]], D ^= i[i[D]]) : F = D = 1;
          }
        })();
        var y = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], a = A.AES = l.extend({
          _doReset: function() {
            var i;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var d = this._keyPriorReset = this._key, F = d.words, D = d.sigBytes / 4, g = this._nRounds = D + 6, C = (g + 1) * 4, T = this._keySchedule = [], E = 0; E < C; E++)
                E < D ? T[E] = F[E] : (i = T[E - 1], E % D ? D > 6 && E % D == 4 && (i = u[i >>> 24] << 24 | u[i >>> 16 & 255] << 16 | u[i >>> 8 & 255] << 8 | u[i & 255]) : (i = i << 8 | i >>> 24, i = u[i >>> 24] << 24 | u[i >>> 16 & 255] << 16 | u[i >>> 8 & 255] << 8 | u[i & 255], i ^= y[E / D | 0] << 24), T[E] = T[E - D] ^ i);
              for (var b = this._invKeySchedule = [], k = 0; k < C; k++) {
                var E = C - k;
                if (k % 4)
                  var i = T[E];
                else
                  var i = T[E - 4];
                k < 4 || E <= 4 ? b[k] = i : b[k] = o[u[i >>> 24]] ^ s[u[i >>> 16 & 255]] ^ h[u[i >>> 8 & 255]] ^ v[u[i & 255]];
              }
            }
          },
          encryptBlock: function(i, d) {
            this._doCryptBlock(i, d, this._keySchedule, e, r, B, n, u);
          },
          decryptBlock: function(i, d) {
            var F = i[d + 1];
            i[d + 1] = i[d + 3], i[d + 3] = F, this._doCryptBlock(i, d, this._invKeySchedule, o, s, h, v, c);
            var F = i[d + 1];
            i[d + 1] = i[d + 3], i[d + 3] = F;
          },
          _doCryptBlock: function(i, d, F, D, g, C, T, E) {
            for (var b = this._nRounds, k = i[d] ^ F[0], w = i[d + 1] ^ F[1], z = i[d + 2] ^ F[2], O = i[d + 3] ^ F[3], $ = 4, M = 1; M < b; M++) {
              var K = D[k >>> 24] ^ g[w >>> 16 & 255] ^ C[z >>> 8 & 255] ^ T[O & 255] ^ F[$++], P = D[w >>> 24] ^ g[z >>> 16 & 255] ^ C[O >>> 8 & 255] ^ T[k & 255] ^ F[$++], L = D[z >>> 24] ^ g[O >>> 16 & 255] ^ C[k >>> 8 & 255] ^ T[w & 255] ^ F[$++], _ = D[O >>> 24] ^ g[k >>> 16 & 255] ^ C[w >>> 8 & 255] ^ T[z & 255] ^ F[$++];
              k = K, w = P, z = L, O = _;
            }
            var K = (E[k >>> 24] << 24 | E[w >>> 16 & 255] << 16 | E[z >>> 8 & 255] << 8 | E[O & 255]) ^ F[$++], P = (E[w >>> 24] << 24 | E[z >>> 16 & 255] << 16 | E[O >>> 8 & 255] << 8 | E[k & 255]) ^ F[$++], L = (E[z >>> 24] << 24 | E[O >>> 16 & 255] << 16 | E[k >>> 8 & 255] << 8 | E[w & 255]) ^ F[$++], _ = (E[O >>> 24] << 24 | E[k >>> 16 & 255] << 16 | E[w >>> 8 & 255] << 8 | E[z & 255]) ^ F[$++];
            i[d] = K, i[d + 1] = P, i[d + 2] = L, i[d + 3] = _;
          },
          keySize: 256 / 32
        });
        t.AES = l._createHelper(a);
      }(), x.AES;
    });
  }(De)), De.exports;
}
var ye = { exports: {} }, _t;
function Tr() {
  return _t || (_t = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), F0(), D0(), E0(), J());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.WordArray, A = f.BlockCipher, u = t.algo, c = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], e = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], r = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], B = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], n = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], o = u.DES = A.extend({
          _doReset: function() {
            for (var y = this._key, a = y.words, i = [], d = 0; d < 56; d++) {
              var F = c[d] - 1;
              i[d] = a[F >>> 5] >>> 31 - F % 32 & 1;
            }
            for (var D = this._subKeys = [], g = 0; g < 16; g++) {
              for (var C = D[g] = [], T = r[g], d = 0; d < 24; d++)
                C[d / 6 | 0] |= i[(e[d] - 1 + T) % 28] << 31 - d % 6, C[4 + (d / 6 | 0)] |= i[28 + (e[d + 24] - 1 + T) % 28] << 31 - d % 6;
              C[0] = C[0] << 1 | C[0] >>> 31;
              for (var d = 1; d < 7; d++)
                C[d] = C[d] >>> (d - 1) * 4 + 3;
              C[7] = C[7] << 5 | C[7] >>> 27;
            }
            for (var E = this._invSubKeys = [], d = 0; d < 16; d++)
              E[d] = D[15 - d];
          },
          encryptBlock: function(y, a) {
            this._doCryptBlock(y, a, this._subKeys);
          },
          decryptBlock: function(y, a) {
            this._doCryptBlock(y, a, this._invSubKeys);
          },
          _doCryptBlock: function(y, a, i) {
            this._lBlock = y[a], this._rBlock = y[a + 1], s.call(this, 4, 252645135), s.call(this, 16, 65535), h.call(this, 2, 858993459), h.call(this, 8, 16711935), s.call(this, 1, 1431655765);
            for (var d = 0; d < 16; d++) {
              for (var F = i[d], D = this._lBlock, g = this._rBlock, C = 0, T = 0; T < 8; T++)
                C |= B[T][((g ^ F[T]) & n[T]) >>> 0];
              this._lBlock = g, this._rBlock = D ^ C;
            }
            var E = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = E, s.call(this, 1, 1431655765), h.call(this, 8, 16711935), h.call(this, 2, 858993459), s.call(this, 16, 65535), s.call(this, 4, 252645135), y[a] = this._lBlock, y[a + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function s(y, a) {
          var i = (this._lBlock >>> y ^ this._rBlock) & a;
          this._rBlock ^= i, this._lBlock ^= i << y;
        }
        function h(y, a) {
          var i = (this._rBlock >>> y ^ this._lBlock) & a;
          this._lBlock ^= i, this._rBlock ^= i << y;
        }
        t.DES = A._createHelper(o);
        var v = u.TripleDES = A.extend({
          _doReset: function() {
            var y = this._key, a = y.words;
            if (a.length !== 2 && a.length !== 4 && a.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var i = a.slice(0, 2), d = a.length < 4 ? a.slice(0, 2) : a.slice(2, 4), F = a.length < 6 ? a.slice(0, 2) : a.slice(4, 6);
            this._des1 = o.createEncryptor(l.create(i)), this._des2 = o.createEncryptor(l.create(d)), this._des3 = o.createEncryptor(l.create(F));
          },
          encryptBlock: function(y, a) {
            this._des1.encryptBlock(y, a), this._des2.decryptBlock(y, a), this._des3.encryptBlock(y, a);
          },
          decryptBlock: function(y, a) {
            this._des3.decryptBlock(y, a), this._des2.encryptBlock(y, a), this._des1.decryptBlock(y, a);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        t.TripleDES = A._createHelper(v);
      }(), x.TripleDES;
    });
  }(ye)), ye.exports;
}
var ge = { exports: {} }, mt;
function Pr() {
  return mt || (mt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), F0(), D0(), E0(), J());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.StreamCipher, A = t.algo, u = A.RC4 = l.extend({
          _doReset: function() {
            for (var r = this._key, B = r.words, n = r.sigBytes, o = this._S = [], s = 0; s < 256; s++)
              o[s] = s;
            for (var s = 0, h = 0; s < 256; s++) {
              var v = s % n, y = B[v >>> 2] >>> 24 - v % 4 * 8 & 255;
              h = (h + o[s] + y) % 256;
              var a = o[s];
              o[s] = o[h], o[h] = a;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(r, B) {
            r[B] ^= c.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function c() {
          for (var r = this._S, B = this._i, n = this._j, o = 0, s = 0; s < 4; s++) {
            B = (B + 1) % 256, n = (n + r[B]) % 256;
            var h = r[B];
            r[B] = r[n], r[n] = h, o |= r[(r[B] + r[n]) % 256] << 24 - s * 8;
          }
          return this._i = B, this._j = n, o;
        }
        t.RC4 = l._createHelper(u);
        var e = A.RC4Drop = u.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: u.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            u._doReset.call(this);
            for (var r = this.cfg.drop; r > 0; r--)
              c.call(this);
          }
        });
        t.RC4Drop = l._createHelper(e);
      }(), x.RC4;
    });
  }(ge)), ge.exports;
}
var be = { exports: {} }, kt;
function zr() {
  return kt || (kt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), F0(), D0(), E0(), J());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.StreamCipher, A = t.algo, u = [], c = [], e = [], r = A.Rabbit = l.extend({
          _doReset: function() {
            for (var n = this._key.words, o = this.cfg.iv, s = 0; s < 4; s++)
              n[s] = (n[s] << 8 | n[s] >>> 24) & 16711935 | (n[s] << 24 | n[s] >>> 8) & 4278255360;
            var h = this._X = [
              n[0],
              n[3] << 16 | n[2] >>> 16,
              n[1],
              n[0] << 16 | n[3] >>> 16,
              n[2],
              n[1] << 16 | n[0] >>> 16,
              n[3],
              n[2] << 16 | n[1] >>> 16
            ], v = this._C = [
              n[2] << 16 | n[2] >>> 16,
              n[0] & 4294901760 | n[1] & 65535,
              n[3] << 16 | n[3] >>> 16,
              n[1] & 4294901760 | n[2] & 65535,
              n[0] << 16 | n[0] >>> 16,
              n[2] & 4294901760 | n[3] & 65535,
              n[1] << 16 | n[1] >>> 16,
              n[3] & 4294901760 | n[0] & 65535
            ];
            this._b = 0;
            for (var s = 0; s < 4; s++)
              B.call(this);
            for (var s = 0; s < 8; s++)
              v[s] ^= h[s + 4 & 7];
            if (o) {
              var y = o.words, a = y[0], i = y[1], d = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360, F = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360, D = d >>> 16 | F & 4294901760, g = F << 16 | d & 65535;
              v[0] ^= d, v[1] ^= D, v[2] ^= F, v[3] ^= g, v[4] ^= d, v[5] ^= D, v[6] ^= F, v[7] ^= g;
              for (var s = 0; s < 4; s++)
                B.call(this);
            }
          },
          _doProcessBlock: function(n, o) {
            var s = this._X;
            B.call(this), u[0] = s[0] ^ s[5] >>> 16 ^ s[3] << 16, u[1] = s[2] ^ s[7] >>> 16 ^ s[5] << 16, u[2] = s[4] ^ s[1] >>> 16 ^ s[7] << 16, u[3] = s[6] ^ s[3] >>> 16 ^ s[1] << 16;
            for (var h = 0; h < 4; h++)
              u[h] = (u[h] << 8 | u[h] >>> 24) & 16711935 | (u[h] << 24 | u[h] >>> 8) & 4278255360, n[o + h] ^= u[h];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function B() {
          for (var n = this._X, o = this._C, s = 0; s < 8; s++)
            c[s] = o[s];
          o[0] = o[0] + 1295307597 + this._b | 0, o[1] = o[1] + 3545052371 + (o[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, o[2] = o[2] + 886263092 + (o[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, o[3] = o[3] + 1295307597 + (o[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, o[4] = o[4] + 3545052371 + (o[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, o[5] = o[5] + 886263092 + (o[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, o[6] = o[6] + 1295307597 + (o[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, o[7] = o[7] + 3545052371 + (o[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = o[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var s = 0; s < 8; s++) {
            var h = n[s] + o[s], v = h & 65535, y = h >>> 16, a = ((v * v >>> 17) + v * y >>> 15) + y * y, i = ((h & 4294901760) * h | 0) + ((h & 65535) * h | 0);
            e[s] = a ^ i;
          }
          n[0] = e[0] + (e[7] << 16 | e[7] >>> 16) + (e[6] << 16 | e[6] >>> 16) | 0, n[1] = e[1] + (e[0] << 8 | e[0] >>> 24) + e[7] | 0, n[2] = e[2] + (e[1] << 16 | e[1] >>> 16) + (e[0] << 16 | e[0] >>> 16) | 0, n[3] = e[3] + (e[2] << 8 | e[2] >>> 24) + e[1] | 0, n[4] = e[4] + (e[3] << 16 | e[3] >>> 16) + (e[2] << 16 | e[2] >>> 16) | 0, n[5] = e[5] + (e[4] << 8 | e[4] >>> 24) + e[3] | 0, n[6] = e[6] + (e[5] << 16 | e[5] >>> 16) + (e[4] << 16 | e[4] >>> 16) | 0, n[7] = e[7] + (e[6] << 8 | e[6] >>> 24) + e[5] | 0;
        }
        t.Rabbit = l._createHelper(r);
      }(), x.Rabbit;
    });
  }(be)), be.exports;
}
var _e = { exports: {} }, wt;
function qr() {
  return wt || (wt = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), F0(), D0(), E0(), J());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.StreamCipher, A = t.algo, u = [], c = [], e = [], r = A.RabbitLegacy = l.extend({
          _doReset: function() {
            var n = this._key.words, o = this.cfg.iv, s = this._X = [
              n[0],
              n[3] << 16 | n[2] >>> 16,
              n[1],
              n[0] << 16 | n[3] >>> 16,
              n[2],
              n[1] << 16 | n[0] >>> 16,
              n[3],
              n[2] << 16 | n[1] >>> 16
            ], h = this._C = [
              n[2] << 16 | n[2] >>> 16,
              n[0] & 4294901760 | n[1] & 65535,
              n[3] << 16 | n[3] >>> 16,
              n[1] & 4294901760 | n[2] & 65535,
              n[0] << 16 | n[0] >>> 16,
              n[2] & 4294901760 | n[3] & 65535,
              n[1] << 16 | n[1] >>> 16,
              n[3] & 4294901760 | n[0] & 65535
            ];
            this._b = 0;
            for (var v = 0; v < 4; v++)
              B.call(this);
            for (var v = 0; v < 8; v++)
              h[v] ^= s[v + 4 & 7];
            if (o) {
              var y = o.words, a = y[0], i = y[1], d = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360, F = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360, D = d >>> 16 | F & 4294901760, g = F << 16 | d & 65535;
              h[0] ^= d, h[1] ^= D, h[2] ^= F, h[3] ^= g, h[4] ^= d, h[5] ^= D, h[6] ^= F, h[7] ^= g;
              for (var v = 0; v < 4; v++)
                B.call(this);
            }
          },
          _doProcessBlock: function(n, o) {
            var s = this._X;
            B.call(this), u[0] = s[0] ^ s[5] >>> 16 ^ s[3] << 16, u[1] = s[2] ^ s[7] >>> 16 ^ s[5] << 16, u[2] = s[4] ^ s[1] >>> 16 ^ s[7] << 16, u[3] = s[6] ^ s[3] >>> 16 ^ s[1] << 16;
            for (var h = 0; h < 4; h++)
              u[h] = (u[h] << 8 | u[h] >>> 24) & 16711935 | (u[h] << 24 | u[h] >>> 8) & 4278255360, n[o + h] ^= u[h];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function B() {
          for (var n = this._X, o = this._C, s = 0; s < 8; s++)
            c[s] = o[s];
          o[0] = o[0] + 1295307597 + this._b | 0, o[1] = o[1] + 3545052371 + (o[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, o[2] = o[2] + 886263092 + (o[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, o[3] = o[3] + 1295307597 + (o[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, o[4] = o[4] + 3545052371 + (o[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, o[5] = o[5] + 886263092 + (o[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, o[6] = o[6] + 1295307597 + (o[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, o[7] = o[7] + 3545052371 + (o[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = o[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var s = 0; s < 8; s++) {
            var h = n[s] + o[s], v = h & 65535, y = h >>> 16, a = ((v * v >>> 17) + v * y >>> 15) + y * y, i = ((h & 4294901760) * h | 0) + ((h & 65535) * h | 0);
            e[s] = a ^ i;
          }
          n[0] = e[0] + (e[7] << 16 | e[7] >>> 16) + (e[6] << 16 | e[6] >>> 16) | 0, n[1] = e[1] + (e[0] << 8 | e[0] >>> 24) + e[7] | 0, n[2] = e[2] + (e[1] << 16 | e[1] >>> 16) + (e[0] << 16 | e[0] >>> 16) | 0, n[3] = e[3] + (e[2] << 8 | e[2] >>> 24) + e[1] | 0, n[4] = e[4] + (e[3] << 16 | e[3] >>> 16) + (e[2] << 16 | e[2] >>> 16) | 0, n[5] = e[5] + (e[4] << 8 | e[4] >>> 24) + e[3] | 0, n[6] = e[6] + (e[5] << 16 | e[5] >>> 16) + (e[4] << 16 | e[4] >>> 16) | 0, n[7] = e[7] + (e[6] << 8 | e[6] >>> 24) + e[5] | 0;
        }
        t.RabbitLegacy = l._createHelper(r);
      }(), x.RabbitLegacy;
    });
  }(_e)), _e.exports;
}
var me = { exports: {} }, St;
function Or() {
  return St || (St = 1, function(p, m) {
    (function(x, t, f) {
      p.exports = t(I(), F0(), D0(), E0(), J());
    })(N, function(x) {
      return function() {
        var t = x, f = t.lib, l = f.BlockCipher, A = t.algo;
        const u = 16, c = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], e = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var r = {
          pbox: [],
          sbox: []
        };
        function B(v, y) {
          let a = y >> 24 & 255, i = y >> 16 & 255, d = y >> 8 & 255, F = y & 255, D = v.sbox[0][a] + v.sbox[1][i];
          return D = D ^ v.sbox[2][d], D = D + v.sbox[3][F], D;
        }
        function n(v, y, a) {
          let i = y, d = a, F;
          for (let D = 0; D < u; ++D)
            i = i ^ v.pbox[D], d = B(v, i) ^ d, F = i, i = d, d = F;
          return F = i, i = d, d = F, d = d ^ v.pbox[u], i = i ^ v.pbox[u + 1], { left: i, right: d };
        }
        function o(v, y, a) {
          let i = y, d = a, F;
          for (let D = u + 1; D > 1; --D)
            i = i ^ v.pbox[D], d = B(v, i) ^ d, F = i, i = d, d = F;
          return F = i, i = d, d = F, d = d ^ v.pbox[1], i = i ^ v.pbox[0], { left: i, right: d };
        }
        function s(v, y, a) {
          for (let g = 0; g < 4; g++) {
            v.sbox[g] = [];
            for (let C = 0; C < 256; C++)
              v.sbox[g][C] = e[g][C];
          }
          let i = 0;
          for (let g = 0; g < u + 2; g++)
            v.pbox[g] = c[g] ^ y[i], i++, i >= a && (i = 0);
          let d = 0, F = 0, D = 0;
          for (let g = 0; g < u + 2; g += 2)
            D = n(v, d, F), d = D.left, F = D.right, v.pbox[g] = d, v.pbox[g + 1] = F;
          for (let g = 0; g < 4; g++)
            for (let C = 0; C < 256; C += 2)
              D = n(v, d, F), d = D.left, F = D.right, v.sbox[g][C] = d, v.sbox[g][C + 1] = F;
          return !0;
        }
        var h = A.Blowfish = l.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var v = this._keyPriorReset = this._key, y = v.words, a = v.sigBytes / 4;
              s(r, y, a);
            }
          },
          encryptBlock: function(v, y) {
            var a = n(r, v[y], v[y + 1]);
            v[y] = a.left, v[y + 1] = a.right;
          },
          decryptBlock: function(v, y) {
            var a = o(r, v[y], v[y + 1]);
            v[y] = a.left, v[y + 1] = a.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        t.Blowfish = l._createHelper(h);
      }(), x.Blowfish;
    });
  }(me)), me.exports;
}
(function(p, m) {
  (function(x, t, f) {
    p.exports = t(I(), V0(), dr(), vr(), F0(), pr(), D0(), Ot(), ze(), hr(), $t(), Br(), Cr(), Er(), qe(), Ar(), E0(), J(), Fr(), Dr(), yr(), gr(), br(), _r(), mr(), kr(), wr(), Sr(), Hr(), Rr(), Tr(), Pr(), zr(), qr(), Or());
  })(N, function(x) {
    return x;
  });
})(qt);
var $r = qt.exports;
const W0 = /* @__PURE__ */ ir($r);
let h0 = null;
const Ht = "__store__", Rt = "__store_secret__", ke = {
  /**
   * 设置数据，同时生成新的 SECRET
   */
  set(p) {
    try {
      const m = W0.lib.WordArray.random(32).toString();
      localStorage.setItem(Rt, m);
      const x = JSON.stringify(p), t = W0.AES.encrypt(x, m).toString();
      localStorage.setItem(Ht, t), h0 = p;
    } catch (m) {
      console.error("存储失败", m);
    }
  },
  /**
   * 读取最新数据
   */
  get() {
    if (h0 !== null) return h0;
    const p = localStorage.getItem(Ht), m = localStorage.getItem(Rt);
    if (!p || !m) return null;
    try {
      const t = W0.AES.decrypt(p, m).toString(W0.enc.Utf8);
      return h0 = JSON.parse(t), h0;
    } catch (x) {
      return console.error("解密失败", x), null;
    }
  },
  /**
   * 判断权限
   */
  hasPer(p) {
    const m = zt();
    if (m == null ? void 0 : m.appContext.config.globalProperties.$layoutkitPerEnabled)
      try {
        return h0 === null && this.get(), Array.isArray(h0) ? h0.includes(p) : !1;
      } catch (t) {
        return console.error("读取失败", t), !1;
      }
    return !0;
  }
}, B0 = {
  TEXT: "text",
  NUMBER: "number",
  SELECT: "select",
  DATE: "date",
  DATE_RANGE: "daterange",
  SWITCH: "switch"
}, Lr = ["innerHTML"], Nr = {
  __name: "layout-page-column",
  props: {
    template: [String, Object, Function],
    data: Object
  },
  setup(p) {
    const m = p, x = Y(!1), t = d0("columnSlotMap", Y(/* @__PURE__ */ new Map()));
    function f(A, u) {
      if (typeof A === "function") {
        const e = A(u);
        let r = e == null ? void 0 : e.component;
        return r ? (typeof r == "string" && t.value.has(r) && (x.value = !0, r = t.value.get(r)), { type: "component", component: r, props: e.props || {}, content: e.content ?? null }) : { type: "html", content: String(e ?? "") };
      } else
        return { type: "html", content: String(A ?? "") };
    }
    const l = e0(() => f(m.template, m.data));
    return (A, u) => l.value.type === "html" ? (q(), Q("span", {
      key: 0,
      innerHTML: l.value.content
    }, null, 8, Lr)) : l.value.type === "component" && !x.value ? (q(), W($0(l.value.component), Zt(He({ key: 1 }, l.value.props)), {
      default: j(() => [
        C0(_0(l.value.content), 1)
      ]),
      _: 1
    }, 16)) : l.value.type === "component" && x.value ? (q(), W($0(l.value.component), {
      key: 2,
      props: l.value.props,
      content: l.value.content
    }, null, 8, ["props", "content"])) : u0("", !0);
  }
};
function Oe() {
  return {
    // ---------- 消息 ----------
    success: (m, x = "top", t = 2e3) => q0({ message: m, type: "success", duration: t, placement: x }),
    error: (m, x = "top", t = 2e3) => q0({ message: m, type: "error", duration: t, placement: x }),
    info: (m, x = "top", t = 2e3) => q0({ message: m, type: "info", duration: t, placement: x }),
    warning: (m, x = "top", t = 2e3) => q0({ message: m, type: "warning", duration: t, placement: x }),
    primary: (m, x = "top", t = 2e3) => q0({ message: m, type: "primary", duration: t, placement: x }),
    // ---------- 确认框 ----------
    confirm: (m, x = "提示", t = "warning") => rr.confirm(m, x, {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: t
    }),
    // ---------- 通知 ----------
    notify: (m, x = "消息", t = "", f = 0) => {
      tr({
        title: x,
        message: m,
        duration: f,
        type: t
      });
    }
  };
}
const Ur = (p, m) => {
  const x = p.__vccOpts || p;
  for (const [t, f] of m)
    x[t] = f;
  return x;
}, Wr = { style: { margin: "25px" } }, Ir = {
  key: 0,
  style: { "margin-bottom": "10px" }
}, Vr = { style: { display: "flex", "justify-content": "flex-end", "margin-top": "16px" } }, Kr = {
  __name: "layout-page",
  props: {
    /**
     * 表格头部配置
     * 每项应包含：field: '字段名'、title: '标题'、style: '样式'
     */
    table: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 表格工具栏
     */
    tablebar: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 功能按钮配置
     * 每项包含：label: '名称'、icon: '图标'、secondary: '图标颜色'、command: '事件'
     */
    toolbar: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 筛选框配置
     * 每项包含：label: '名称'、field: '字段名'、value: '字段值'
     */
    filter: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 弹出框配置
     */
    dialog: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(p) {
    const m = Oe(), x = Y(), t = p, f = Y([]), l = e0(() => t.filter ?? { data: [] }), A = e0(() => {
      var a;
      return ((a = t.table) == null ? void 0 : a.columns) ?? [];
    }), u = e0(() => {
      var a, i;
      return ((a = t.table) == null ? void 0 : a.tableType) === "treetable" ? v(t.table.data) : ((i = t.table) == null ? void 0 : i.data) ?? [];
    }), c = e0(() => {
      var a;
      return ((a = t.table) == null ? void 0 : a.pagination) ?? {
        index: 1,
        size: 10,
        options: [10, 20, 30],
        total: 0
      };
    }), e = e0(() => {
      var a;
      return ((a = t.table) == null ? void 0 : a.attr) ?? {
        loading: !1,
        dataKey: "id",
        dataParentKey: "pid",
        showNumber: !1,
        expandAll: !1
      };
    }), r = e0(() => t.tablebar ?? {
      title: "工具栏",
      width: "",
      align: "center",
      position: "right",
      actions: []
    }), B = e0(() => r.value.actions.filter((a) => ke.hasPer(a.perKey))), n = e0(() => t.toolbar ?? { actions: [] }), o = (a) => {
      t.table && (t.table.pagination.size = a);
    }, s = (a) => {
      t.table && (t.table.pagination.index = a, t.table.load());
    }, h = (a) => {
      let i = {};
      if (a || f.value.forEach((d) => {
        d.value = "";
      }), t.filter) {
        for (const d of f.value) {
          if (!d.required) continue;
          const F = d.value;
          if (F == null || F === "" || Array.isArray(F) && F.length === 0) {
            m.warning(`请填写【${d.label}】字段`);
            return;
          }
        }
        i = t.filter._buildFunc(f.value);
      }
      t.table && (t.table._setQueryParams(i), t.table.load());
    }, v = (a) => {
      const i = e.value.dataKey, d = e.value.dataParentKey, F = (E) => (E == null ? void 0 : E.toString().trim().toLowerCase()) ?? "", D = a.map((E) => ({
        ...E,
        _id: F(E[i]),
        _pid: F(E[d])
      })), g = new Set(D.map((E) => E._id)), C = D.filter((E) => !g.has(E._pid)), T = (E) => {
        const b = D.filter((k) => k._pid === E._id).map((k) => T(k));
        return {
          key: E._id,
          data: E,
          children: b
        };
      };
      return C.map((E) => T(E));
    }, y = (a, i) => {
      var d;
      if (((d = t.table) == null ? void 0 : d.tableType) === "treetable") {
        let F;
        if (x.value !== void 0) {
          const D = Object.keys(x.value || {})[0] || null;
          D !== null && (F = u.value.find((g) => g[e.value.dataKey].toLowerCase() === D.toLowerCase()));
        }
        a.command(F, i);
      } else
        a.command(x.value, i);
    };
    return we(
      () => {
        var a;
        return ((a = t.filter) == null ? void 0 : a.data) ?? [];
      },
      (a) => {
        Array.isArray(a) ? f.value = a.map((i) => ({ ...i })) : f.value = [];
      },
      { immediate: !0 }
    ), I0(() => {
      if (t.table) {
        let a = {};
        t.filter && (a = t.filter._buildFunc(f.value)), t.table._setQueryParams(a), t.table.load();
      }
    }), (a, i) => {
      const d = V("el-input"), F = V("el-input-number"), D = V("el-option"), g = V("el-select"), C = V("el-date-picker"), T = V("el-switch"), E = V("el-form-item"), b = V("el-col"), k = V("el-button"), w = V("el-row"), z = V("el-form"), O = V("el-table-column"), $ = V("el-table"), M = V("el-pagination"), K = Pt("loading");
      return q(), Q(r0, null, [
        O0("div", Wr, [
          O0("section", null, [
            c0(z, null, {
              default: j(() => [
                l.value.data.length > 0 ? (q(), W(w, {
                  key: 0,
                  gutter: 20
                }, {
                  default: j(() => [
                    (q(!0), Q(r0, null, f0(f.value, (P, L) => (q(), W(b, {
                      xs: 24,
                      sm: 12,
                      md: 8,
                      lg: 6,
                      xl: 4
                    }, {
                      default: j(() => [
                        c0(E, {
                          label: P.label
                        }, {
                          default: j(() => [
                            P.fieldType === Z(B0).TEXT ? (q(), W(d, {
                              key: 0,
                              modelValue: P.value,
                              "onUpdate:modelValue": (_) => P.value = _,
                              placeholder: P.placeholder,
                              style: z0(P.style)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "style"])) : P.fieldType === Z(B0).NUMBER ? (q(), W(F, {
                              key: 1,
                              modelValue: P.value,
                              "onUpdate:modelValue": (_) => P.value = _,
                              placeholder: P.placeholder,
                              style: z0(P.style)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "style"])) : P.fieldType === Z(B0).SELECT ? (q(), W(g, {
                              key: 2,
                              modelValue: P.value,
                              "onUpdate:modelValue": (_) => P.value = _,
                              placeholder: P.placeholder,
                              style: z0(P.style)
                            }, {
                              default: j(() => [
                                (q(!0), Q(r0, null, f0(P.options, (_) => (q(), W(D, {
                                  key: _.value,
                                  label: _.label,
                                  value: _.value
                                }, null, 8, ["label", "value"]))), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "style"])) : P.fieldType === Z(B0).DATE ? (q(), W(C, {
                              key: 3,
                              modelValue: P.value,
                              "onUpdate:modelValue": (_) => P.value = _,
                              type: "date",
                              placeholder: "请选择日期",
                              style: z0(P.style),
                              format: "YYYY-MM-DD",
                              "value-format": "YYYY-MM-DD"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "style"])) : P.fieldType === Z(B0).DATE_RANGE ? (q(), W(C, {
                              key: 4,
                              modelValue: P.value,
                              "onUpdate:modelValue": (_) => P.value = _,
                              type: "datetimerange",
                              "range-separator": "至",
                              "start-placeholder": "开始日期",
                              "end-placeholder": "结束日期",
                              style: z0(P.style),
                              format: "YYYY-MM-DD HH:mm:ss",
                              "value-format": "YYYY-MM-DD HH:mm:ss"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "style"])) : P.fieldType === Z(B0).SWITCH ? (q(), W(T, {
                              key: 5,
                              modelValue: P.value,
                              "onUpdate:modelValue": (_) => P.value = _
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : u0("", !0)
                          ]),
                          _: 2
                        }, 1032, ["label"])
                      ]),
                      _: 2
                    }, 1024))), 256)),
                    c0(b, {
                      xs: 24,
                      sm: 12,
                      md: 8,
                      lg: 6,
                      xl: 4
                    }, {
                      default: j(() => [
                        c0(k, {
                          type: "primary",
                          onClick: i[0] || (i[0] = (P) => h(!0))
                        }, {
                          default: j(() => [...i[3] || (i[3] = [
                            C0("搜索", -1)
                          ])]),
                          _: 1
                        }),
                        c0(k, {
                          onClick: i[1] || (i[1] = (P) => h(!1))
                        }, {
                          default: j(() => [...i[4] || (i[4] = [
                            C0("重置", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : u0("", !0)
              ]),
              _: 1
            })
          ]),
          n.value.actions.length > 0 ? (q(), Q("section", Ir, [
            (q(!0), Q(r0, null, f0(n.value.actions, (P, L) => (q(), Q(r0, { key: L }, [
              Z(ke).hasPer(P.perKey) ? (q(), W(k, {
                key: 0,
                icon: P.icon,
                type: P.type ?? "",
                onClick: (_) => y(P, _),
                plain: ""
              }, {
                default: j(() => [
                  C0(_0(P.label), 1)
                ]),
                _: 2
              }, 1032, ["icon", "type", "onClick"])) : u0("", !0)
            ], 64))), 128))
          ])) : u0("", !0),
          O0("section", null, [
            Se((q(), W($, {
              data: u.value,
              "row-key": e.value.dataKey,
              "default-expand-all": e.value.expandAll,
              stripe: "",
              border: "",
              "element-loading-text": "加载中...",
              "element-loading-spinner": "el-icon-loading",
              "element-loading-background": "rgba(255, 255, 255, 0.7)",
              style: { width: "100%" }
            }, {
              default: j(() => [
                e.value.showNumber ? u0("", !0) : (q(), W(O, {
                  key: 0,
                  type: "selection"
                })),
                (q(!0), Q(r0, null, f0(A.value, (P, L) => (q(), W(O, {
                  prop: P.field,
                  label: P.title,
                  "show-overflow-tooltip": !0,
                  width: P.width || "auto"
                }, Jt({ _: 2 }, [
                  P.template && P.template !== void 0 ? {
                    name: "default",
                    fn: j((_) => [
                      c0(Nr, {
                        template: P.template,
                        data: _.row
                      }, null, 8, ["template", "data"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["prop", "label", "width"]))), 256)),
                B.value.length > 0 ? (q(), W(O, {
                  key: 1,
                  label: r.value.title,
                  fixed: r.value.position,
                  width: r.value.width || "auto",
                  align: r.value.align
                }, {
                  default: j((P) => [
                    (q(!0), Q(r0, null, f0(r.value.actions, (L, _) => (q(), Q(r0, { key: _ }, [
                      Z(ke).hasPer(L.perKey) && L.hideFunc(P.row) ? (q(), W(k, {
                        key: 0,
                        icon: L.icon,
                        type: L.type ?? "primary",
                        size: "small",
                        link: "",
                        onClick: (H) => L.command(P.row, H)
                      }, {
                        default: j(() => [
                          C0(_0(L.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["icon", "type", "onClick"])) : u0("", !0)
                    ], 64))), 128))
                  ]),
                  _: 1
                }, 8, ["label", "fixed", "width", "align"])) : u0("", !0)
              ]),
              _: 1
            }, 8, ["data", "row-key", "default-expand-all"])), [
              [K, e.value.loading]
            ]),
            O0("div", Vr, [
              c0(M, {
                background: "",
                layout: "sizes, prev, pager, next",
                "current-page": c.value.index,
                "onUpdate:currentPage": i[2] || (i[2] = (P) => c.value.index = P),
                total: c.value.total,
                "page-size": c.value.size,
                "page-sizes": c.value.options,
                onChange: s,
                onSizeChange: o
              }, null, 8, ["current-page", "total", "page-size", "page-sizes"])
            ])
          ])
        ]),
        c0(or, {
          ref: "dialogRef",
          dialog: p.dialog
        }, null, 8, ["dialog"])
      ], 64);
    };
  }
}, aa = /* @__PURE__ */ Ur(Kr, [["__scopeId", "data-v-b408d6eb"]]), s0 = {
  INPUT_TEXT: "input_text",
  INPUT_NUMBER: "input_number",
  INPUT_TEXTAREA: "input_textarea",
  DATE_PICKER: "date_picker",
  RADIO_BUTTON: "radio_button",
  CHECKBOX: "checkbox",
  TOGGLE_BUTTON: "toggle_button",
  SELECT: "select",
  TREE_SELECT: "tree_select"
}, Mr = {
  __name: "layout-form-item",
  props: {
    item: Object,
    data: Object
  },
  setup(p) {
    const m = p, x = o0(m.data ?? {}), t = Y(!1), f = d0("formSlotMap", Y(/* @__PURE__ */ new Map())), l = e0(() => {
      const c = m.item.component;
      return c ? typeof c == "object" || typeof c == "function" ? c : typeof c == "string" && f.value.has(c) ? (t.value = !0, f.value.get(c)) : null : null;
    }), A = (c, e) => {
      m.item.command(c, e, x);
    }, u = (c, e) => {
      x[e.field] = c, A(c, e);
    };
    return (c, e) => {
      const r = V("el-input"), B = V("el-input-number"), n = V("el-date-picker"), o = V("el-time-picker"), s = V("el-radio"), h = V("el-radio-group"), v = V("el-checkbox"), y = V("el-checkbox-group"), a = V("el-option"), i = V("el-select"), d = V("el-tree-select"), F = V("el-switch"), D = V("el-form-item");
      return q(), W(D, {
        label: p.item.fieldAttr.label,
        prop: p.item.field
      }, {
        default: j(() => {
          var g;
          return [
            l.value && !t.value ? (q(), W($0(l.value), He({ key: 0 }, x, {
              onUpdate: e[0] || (e[0] = (C) => u(C, p.item))
            }), null, 16)) : u0("", !0),
            l.value && t.value ? (q(), W($0(l.value), {
              key: 1,
              data: x,
              fieldAttr: p.item.fieldAttr,
              onUpdate: e[1] || (e[1] = (C) => u(C, p.item))
            }, null, 40, ["data", "fieldAttr"])) : p.item.fieldType === Z(s0).INPUT_TEXT ? (q(), W(r, {
              key: 2,
              modelValue: x[p.item.field],
              "onUpdate:modelValue": e[2] || (e[2] = (C) => x[p.item.field] = C),
              placeholder: p.item.fieldAttr.placeholder,
              onInput: e[3] || (e[3] = (C) => A(C, p.item))
            }, null, 8, ["modelValue", "placeholder"])) : p.item.fieldType === Z(s0).INPUT_TEXTAREA ? (q(), W(r, {
              key: 3,
              type: "textarea",
              modelValue: x[p.item.field],
              "onUpdate:modelValue": e[4] || (e[4] = (C) => x[p.item.field] = C),
              placeholder: p.item.fieldAttr.placeholder,
              rows: p.item.fieldAttr.rows ?? 5,
              onInput: e[5] || (e[5] = (C) => A(C, p.item))
            }, null, 8, ["modelValue", "placeholder", "rows"])) : p.item.fieldType === Z(s0).INPUT_NUMBER ? (q(), W(B, {
              key: 4,
              modelValue: x[p.item.field],
              "onUpdate:modelValue": e[6] || (e[6] = (C) => x[p.item.field] = C),
              step: p.item.fieldAttr.step ?? 0,
              min: p.item.fieldAttr.min ?? 0,
              max: p.item.fieldAttr.max ?? 1e4,
              precision: p.item.fieldAttr.precision ?? 0,
              onChange: e[7] || (e[7] = (C) => A(C, p.item)),
              style: { width: "100%" }
            }, null, 8, ["modelValue", "step", "min", "max", "precision"])) : p.item.fieldType === Z(s0).DATE_PICKER ? (q(), W(n, {
              key: 5,
              modelValue: x[p.item.field],
              "onUpdate:modelValue": e[8] || (e[8] = (C) => x[p.item.field] = C),
              type: "date",
              placeholder: p.item.fieldAttr.placeholder,
              onChange: e[9] || (e[9] = (C) => A(C, p.item)),
              style: { width: "100%" }
            }, null, 8, ["modelValue", "placeholder"])) : p.item.fieldType === Z(s0).TIME_PICKER ? (q(), W(o, {
              key: 6,
              modelValue: x[p.item.field],
              "onUpdate:modelValue": e[10] || (e[10] = (C) => x[p.item.field] = C),
              onChange: e[11] || (e[11] = (C) => A(C, p.item)),
              style: { width: "100%" }
            }, null, 8, ["modelValue"])) : p.item.fieldType === Z(s0).RADIO_BUTTON ? (q(), W(h, {
              key: 7,
              modelValue: x[p.item.field],
              "onUpdate:modelValue": e[12] || (e[12] = (C) => x[p.item.field] = C),
              onChange: e[13] || (e[13] = (C) => A(C, p.item))
            }, {
              default: j(() => [
                (q(!0), Q(r0, null, f0(p.item.fieldAttr.options, (C) => (q(), W(s, {
                  key: C.value,
                  label: C.value
                }, {
                  default: j(() => [
                    C0(_0(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])) : p.item.fieldType === Z(s0).CHECKBOX ? (q(), W(y, {
              key: 8,
              modelValue: x[p.item.field],
              "onUpdate:modelValue": e[14] || (e[14] = (C) => x[p.item.field] = C),
              onChange: e[15] || (e[15] = (C) => A(C, p.item))
            }, {
              default: j(() => [
                (q(!0), Q(r0, null, f0(p.item.fieldAttr.options, (C) => (q(), W(v, {
                  key: C.value,
                  label: C.value
                }, {
                  default: j(() => [
                    C0(_0(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])) : p.item.fieldType === Z(s0).SELECT ? (q(), W(i, {
              key: 9,
              modelValue: x[p.item.field],
              "onUpdate:modelValue": e[16] || (e[16] = (C) => x[p.item.field] = C),
              multiple: p.item.attrFunc ? ((g = p.item.attrFunc(x, p.item.fieldAttr)) == null ? void 0 : g.multiple) ?? p.item.fieldAttr.multiple : p.item.fieldAttr.multiple,
              onChange: e[17] || (e[17] = (C) => A(C, p.item)),
              style: { width: "100%" }
            }, {
              default: j(() => [
                (q(!0), Q(r0, null, f0(p.item.fieldAttr.options, (C) => (q(), W(a, {
                  key: C.value,
                  label: C.label,
                  value: C.value
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "multiple"])) : p.item.fieldType === Z(s0).TREE_SELECT ? (q(), W(d, {
              key: 10,
              modelValue: x[p.item.field],
              "onUpdate:modelValue": e[18] || (e[18] = (C) => x[p.item.field] = C),
              data: p.item.fieldAttr.options,
              multiple: p.item.fieldAttr.multiple ?? !0,
              "value-key": p.item.fieldAttr.props.value || "id",
              "show-checkbox": p.item.fieldAttr.showCheck ?? !0,
              "render-after-expand": !1,
              props: p.item.fieldAttr.props,
              style: { width: "100%" },
              "check-strictly": "",
              onChange: e[19] || (e[19] = (C) => A(C, p.item))
            }, null, 8, ["modelValue", "data", "multiple", "value-key", "show-checkbox", "props"])) : p.item.fieldType === Z(s0).TOGGLE_BUTTON ? (q(), W(F, {
              key: 11,
              modelValue: x[p.item.field],
              "onUpdate:modelValue": e[20] || (e[20] = (C) => x[p.item.field] = C),
              onChange: e[21] || (e[21] = (C) => A(C, p.item))
            }, null, 8, ["modelValue"])) : u0("", !0)
          ];
        }),
        _: 1
      }, 8, ["label", "prop"]);
    };
  }
}, Xr = {
  __name: "layout-form",
  props: {
    id: {
      type: String,
      default: ""
    },
    data: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Array,
      default: () => []
    }
  },
  setup(p, { expose: m }) {
    const x = p, t = Y(null), f = o0(x.config ?? []), l = o0(x.data ?? {}), A = e0(() => {
      const c = {};
      return x.config.flat().forEach((e) => {
        const r = e.hideFunc ? e.hideFunc(l) : !0;
        e.fieldAttr.require && r && (c[e.field] = [{
          required: !0,
          message: `${e.fieldAttr.label}为必填项`,
          trigger: "blur"
        }]);
      }), c;
    }), u = (c, e) => {
      const r = c.filter((s) => s.hideFunc(l)).length, B = 24, n = Math.floor(B / r), o = B % r;
      return n + (e < o ? 1 : 0);
    };
    return m({
      formRef: t,
      formData: l,
      valid: () => new Promise((c, e) => {
        var r;
        (r = t.value) == null || r.validate((B, n) => {
          B ? c(!0) : e(n);
        });
      }),
      reset: () => {
        var c;
        return (c = t.value) == null ? void 0 : c.resetFields();
      }
    }), (c, e) => {
      const r = V("el-col"), B = V("el-row"), n = V("el-form");
      return q(), W(n, {
        model: l,
        rules: A.value,
        ref_key: "formRef",
        ref: t,
        "label-width": "auto"
      }, {
        default: j(() => [
          (q(!0), Q(r0, null, f0(f, (o, s) => (q(), W(B, { key: s }, {
            default: j(() => [
              (q(!0), Q(r0, null, f0(o, (h, v) => Se((q(), W(r, {
                key: h.field,
                span: u(o, v)
              }, {
                default: j(() => [
                  c0(Mr, {
                    item: h,
                    data: l
                  }, null, 8, ["item", "data"])
                ]),
                _: 2
              }, 1032, ["span"])), [
                [er, h.hideFunc(l)]
              ])), 128))
            ]),
            _: 2
          }, 1024))), 128))
        ]),
        _: 1
      }, 8, ["model", "rules"]);
    };
  }
}, xa = {
  __name: "dialog-content-slot",
  props: {
    contentKey: {
      type: String,
      required: !0
    }
  },
  setup(p) {
    const m = p, x = d0("dialogSlotMap"), t = Re();
    return I0(() => {
      x.value.set(m.contentKey, m0({ render: () => {
        var f;
        return (f = t.default) == null ? void 0 : f.call(t);
      } }));
    }), Te(() => {
      x.value.delete(m.contentKey);
    }), (f, l) => null;
  }
}, na = {
  __name: "form-item-slot",
  props: {
    itemKey: {
      type: String,
      required: !0
    }
  },
  emits: ["update"],
  setup(p, { emit: m }) {
    const x = p, t = d0("formSlotMap"), f = Re();
    return I0(() => {
      const l = f.default;
      t.value.set(
        x.itemKey,
        m0({
          // 这里返回的是函数式组件对象
          setup(A, { emit: u, attrs: c }) {
            return () => l == null ? void 0 : l({
              props: A,
              // 外部传入的数据都在 attrs
              data: c.data,
              fieldArr: c.fieldArr,
              emit: u
            });
          },
          emits: ["update"]
        })
      );
    }), Te(() => {
      t.value.delete(x.itemKey);
    }), (l, A) => null;
  }
}, oa = {
  __name: "column-item-slot",
  props: {
    itemKey: {
      type: String,
      required: !0
    }
  },
  setup(p) {
    const m = p, x = d0("columnSlotMap"), t = Re();
    return I0(() => {
      const f = t.default;
      x.value.set(
        m.itemKey,
        m0({
          // 这里返回的是函数式组件对象
          setup(l, { attrs: A }) {
            return console.log(A), () => f == null ? void 0 : f({
              props: l,
              // 外部传入的数据都在 attrs
              attrs: A.props
            });
          }
        })
      );
    }), Te(() => {
      x.value.delete(m.itemKey);
    }), (f, l) => null;
  }
};
function jr() {
  const p = Y([]), m = o0({
    instance: null,
    dialogs: A0(p.value),
    /**
     * 注册 dialogSlotMap
     * registerProvide('key', comp)
     */
    registerProvide(x, t) {
      if (typeof x != "string")
        return console.warn("[dialog] registerProvide: key 必须为 string，收到:", x), this;
      let f = d0("dialogSlotMap", null);
      return f || (f = Y(/* @__PURE__ */ new Map()), Pe("dialogSlotMap", f)), f.value.set(x, m0(t)), this;
    },
    register(x) {
      const t = `${Date.now()}-${Math.random()}`, f = o0({
        id: t,
        title: x,
        width: "50%",
        loading: !1,
        fullscreen: !1,
        draggable: !1,
        visible: !1,
        component: null,
        withCancel: !0,
        propsData: {},
        _actions: [],
        // 内部存储真实动作对象
        // --- 动作 getter 自动添加取消按钮 ---
        get actions() {
          return this.withCancel ? [
            ...this._actions,
            {
              label: "取消",
              icon: "",
              type: "default",
              loading: !1,
              command: () => {
                this.visible = !1;
              }
            }
          ] : this._actions;
        },
        // --- 链式 API ---
        setTitle(l) {
          return f.title = l, f;
        },
        setAttr(l = {}) {
          return typeof l != "object" ? this : ("title" in l && (this.title = l.title), "width" in l && (this.width = l.width), "fullscreen" in l && (this.fullscreen = l.fullscreen), "draggable" in l && (this.draggable = l.draggable), "withCancel" in l && (this.withCancel = l.withCancel), "center" in l && (this.center = l.center), this);
        },
        setBtn(l = "", A = () => {
        }, u = "info", c = "") {
          const e = this._actions.findIndex((r) => r.label === l);
          return e !== -1 ? this._actions[e] = { label: l, icon: c, type: u, loading: !1, command: A } : this._actions.push({ label: l, icon: c, type: u, loading: !1, command: A }), this;
        },
        setComponent(l, A) {
          return l && (f.component = m0(l)), A && (async () => {
            f.loading = !0;
            try {
              let c;
              typeof A == "function" ? (c = A(), c instanceof Promise && (c = await c)) : typeof A == "object" && (c = A), f.propsData = c && typeof c == "object" ? { ...Tt(c) } : {};
            } catch (c) {
              console.error("propsData 加载失败:", c), f.propsData = {};
            } finally {
              f.loading = !1;
            }
          })(), f;
        },
        setForm(l) {
          return f.setComponent("form", l);
        },
        show() {
          f.visible = !0, m.instance = f;
        },
        hide() {
          f.visible = !1;
        },
        destroy() {
          if (!m.instance) return;
          const l = m.instance;
          l.data && typeof l.data == "object" && Object.keys(l.data).forEach((A) => l.data[A] = void 0), l.visible = !1, l.loading = !1;
        }
      });
      return p.value.push(f), f;
    }
  });
  return m;
}
function Gr() {
  const p = Y([]);
  return o0({
    list: A0(p.value),
    get(x) {
      const t = p.value.find((f) => f.id === x);
      return t ? {
        id: t.id,
        data: JSON.parse(JSON.stringify(t.data)),
        config: JSON.parse(JSON.stringify(t.config)),
        setData(f) {
          return this.data = f, this;
        },
        setAttr(f, l) {
          var u, c;
          const A = (c = (u = this.config) == null ? void 0 : u.flat) == null ? void 0 : c.call(u).find((e) => e.field === f);
          return A && l(A.fieldAttr), this;
        }
      } : null;
    },
    register(x = "") {
      x = x || `form_${Date.now()}_${p.value.length}`;
      let t = d0("formSlotMap", null);
      t || (t = Y(/* @__PURE__ */ new Map()), Pe("formSlotMap", t));
      const f = p.value.find((A) => A.id === x);
      if (f) return f;
      const l = o0({
        id: x,
        data: {},
        config: [],
        setRow() {
          const A = [];
          this.config.push(A);
          const u = {
            setColumn(c, e, r) {
              const B = {
                field: e,
                fieldType: s0.INPUT_TEXT,
                fieldAttr: {
                  label: c,
                  placeholder: `请输入${c}`,
                  require: !1,
                  options: []
                },
                hideFunc: () => !0,
                attrFunc: null,
                command: () => {
                }
              };
              A.push(B);
              const n = {
                setOptions(o) {
                  return B.fieldAttr.options = o, n;
                },
                setType(o) {
                  return B.fieldType = o, n;
                },
                setPlaceholder(o) {
                  return B.fieldAttr.placeholder = o, n;
                },
                onRequire() {
                  return B.fieldAttr.require = !0, n;
                },
                setAttr(o = {}) {
                  return Object.assign(B.fieldAttr, o), n;
                },
                setComponent(o) {
                  return o && (B.component = m0(o)), n;
                },
                hide(o) {
                  return B.hideFunc = o, n;
                },
                on(o) {
                  return B.command = o, n;
                },
                change(o) {
                  return B.attrFunc = o, n;
                },
                setColumn: u.setColumn
              };
              return typeof r == "function" ? (r(n), u) : n;
            }
          };
          return u;
        },
        setData(A) {
          return this.data = A, this;
        }
      });
      return p.value.push(l), l;
    }
  });
}
function Yr() {
  let p = d0("columnSlotMap", null);
  p || (p = Y(/* @__PURE__ */ new Map()), Pe("columnSlotMap", p));
  const m = Oe(), x = Y([]), t = Y([]), f = Y({}), l = Y(null), A = o0({
    tableType: "default",
    data: e0(() => t.value),
    columns: e0(() => x.value),
    pagination: {
      index: 1,
      size: 10,
      options: [10, 20, 30],
      total: 0
    },
    attr: {
      loading: !1,
      dataKey: "id",
      dataParentKey: "pid",
      showNumber: !1,
      expandAll: !1
      //treeProps: "{ hasChildren: 'hasChildren', children: 'children', checkStrictly: false }",
    },
    _setQueryParams: (u) => {
      f.value = u;
    },
    setPageSize: (u) => {
      A.pagination.size = u;
    },
    setPageOptions: (u) => {
      A.pagination.options = u;
    },
    setRowKey: (u) => {
      A.attr.dataKey = u;
    },
    setParentKey: (u) => {
      A.attr.dataParentKey = u;
    },
    showNumber: () => {
      A.attr.showNumber = !0;
    },
    enableTree: () => {
      A.tableType = "treetable";
    },
    setColumn: (u, c) => {
      const e = {
        field: u,
        title: c,
        width: "",
        template: void 0,
        setAttr(r = {}) {
          return typeof r != "object" ? this : ("width" in r && (this.width = r.width), this);
        },
        setTemplate(r) {
          return this.template = r, this;
        }
      };
      return x.value.push(e), e;
    },
    registerLoader: (u) => {
      l.value = u;
    },
    load: async () => {
      if (typeof l.value != "function") {
        console.warn("未设置 load 函数，请使用 table.setLoader(fn) 进行设置");
        return;
      }
      A.loading = !0;
      const { index: u = 1, size: c = 10 } = A.pagination ?? {};
      try {
        const e = await l.value({ index: u, size: c }, f.value);
        switch (A.tableType) {
          case "treetable":
            t.value = e;
            break;
          case "default":
          default:
            t.value = e.records ?? [];
            break;
        }
        A.pagination !== null && (A.pagination.total = e.total ?? 0);
      } catch (e) {
        m.error("表格加载数据失败，请稍后重试"), console.error("表格加载数据失败:", e);
      } finally {
        A.loading = !1;
      }
    },
    reload: async () => {
      A.pagination !== null && (A.pagination.index = 1), await A.load();
    }
  });
  return A;
}
function Qr() {
  const p = Y([]), m = zt(), x = m == null ? void 0 : m.appContext.config.globalProperties.$layoutkitBuildDataFunc, t = o0({
    _overrideBuildFunc: null,
    data: A0(p.value),
    _buildFunc: (f) => t._overrideBuildFunc && typeof t._overrideBuildFunc == "function" ? t._overrideBuildFunc(f) : x && typeof x == "function" ? x(f) : Object.fromEntries(
      f.map((l) => [l.field, l.value])
    ),
    register: (f, l) => {
      const A = {
        field: f,
        label: l,
        fieldType: B0.TEXT,
        fieldOperator: "=",
        value: "",
        placeholder: `请输入${l}`,
        options: [],
        style: void 0,
        required: !1,
        setOptions(u) {
          return this.fieldType = B0.SELECT, this.options = u, this;
        },
        setStyle(u) {
          return this.style = u, this;
        },
        setFieldType(u) {
          return this.fieldType = u, this;
        },
        setValue(u) {
          return this.value = u, this;
        },
        setOperator(u) {
          return this.fieldOperator = u, this;
        },
        setPlaceholder(u) {
          return this.placeholder = u, this;
        },
        onRequire() {
          return this.required = !0, this;
        }
      };
      return p.value.push(A), A;
    },
    registerBuildDataFunc: (f) => {
      f && typeof f == "function" && (t._overrideBuildFunc = f);
    }
  });
  return t;
}
function Zr(p) {
  const m = Y([]);
  return o0({
    actions: A0(m.value),
    register: (t, f, l = "primary", A = "", u = () => {
    }) => {
      const c = p.getPer(t);
      m.value.push({ id: t, perKey: c, label: f, icon: A, type: l, command: u });
      const e = m.value.find((r) => r.id === t);
      return {
        ...e,
        on(r) {
          return e.command = r, this;
        }
      };
    },
    event(t, f) {
      t = p.getPer(t);
      const l = m.value.find((A) => A.id === t);
      l ? l.command = f : console.warn(`未找到 toolbar 动作 id = '${t}'`);
    },
    get(t) {
      t = p.getPer(t);
      const f = m.value.find((l) => l.id === t);
      return f ? {
        ...f,
        on(l) {
          return f.command = l, this;
        }
      } : (console.warn(`未找到 toolbar 动作 id = '${t}'`), {
        on: () => {
        }
        // 空方法防止报错
      });
    }
  });
}
function Jr(p) {
  const m = Y([]), x = o0({
    title: "工具栏",
    width: "",
    align: "center",
    position: "right",
    // 另外一个 left
    actions: A0(m.value),
    register: (t, f, l = "primary", A, u = () => {
    }) => {
      const c = p.getPer(t), e = () => !0;
      m.value.push({ id: t, perKey: c, label: f, icon: A, type: l, command: u, hideFunc: e });
      const r = m.value.find((B) => B.id === t);
      return {
        ...r,
        // 重写 hideFunc
        hide(B) {
          return r.hideFunc = B, this;
        },
        on(B) {
          return r.command = B, this;
        }
      };
    },
    setTitle: (t) => {
      x.title = t;
    },
    setWidth: (t) => {
      x.width = t;
    },
    setAlign: (t) => {
      x.align = t;
    },
    setPosition: (t) => {
      x.position = t;
    },
    event(t, f) {
      t = p.getPer(t);
      const l = m.value.find((A) => A.id === t);
      l ? l.command = f : console.warn(`未找到 tablebar 动作 id = '${t}'`);
    },
    get(t) {
      t = p.getPer(t);
      const f = m.value.find((l) => l.id === t);
      return f ? {
        ...f,
        on(l) {
          return f.command = l, this;
        }
      } : (console.warn(`未找到 tablebar 动作 id = '${t}'`), {
        on: () => {
        }
        // 空方法防止报错
      });
    }
  });
  return x;
}
function ea() {
  const p = Y({});
  return {
    permission: A0(p.value),
    registerPer: (x, t) => {
      p.value[x] = t;
    },
    getPer: (x) => p.value[x]
  };
}
function ia() {
  const p = ea(), m = Zr(p), x = Jr(p), t = Qr(), f = Yr(), l = Gr(), A = Oe(), u = jr();
  u.registerProvide("form", Xr);
  const c = Y({}), e = o0({
    setData(r) {
      return typeof r == "object" && r !== null && Object.keys(r).forEach((B) => {
        c.value[B] = r[B];
      }), this;
    },
    getData() {
      return A0(c.value);
    },
    watch(r, B = {}) {
      return we(() => toRaw(c.value), r, { deep: !0, ...B });
    }
  });
  return { table: f, toolbar: m, tablebar: x, filter: t, dialog: u, formMap: l, keyMap: p, message: A, propsData: e };
}
const la = {
  EQUAL: "=",
  // 等于
  NOT_EQUAL: "!=",
  // 不等于
  GREATER: ">",
  // 大于
  LESS: "<",
  // 小于
  GREATER_EQUAL: ">=",
  // 大于等于
  LESS_EQUAL: "<=",
  // 小于等于
  IS_NULL: "isNull",
  // IS NULL
  IS_NOT_NULL: "isNotNull",
  // IS NOT NULL
  LIKE: "like",
  // LIKE
  NOT_LIKE: "notLike",
  // NOT LIKE
  IN: "in",
  // IN
  NOT_IN: "notIn",
  // NOT IN
  OR: "or"
  // OR
};
export {
  oa as ColumnItemSlot,
  xa as DialogContentSlot,
  B0 as FilterEnum,
  la as FilterOperatorEnum,
  s0 as FormEnum,
  na as FormItemSlot,
  or as LayoutDialog,
  Xr as LayoutForm,
  aa as LayoutPage,
  ke as store,
  ia as useConfig,
  jr as useDialog,
  Gr as useForm,
  Oe as userMessage
};
