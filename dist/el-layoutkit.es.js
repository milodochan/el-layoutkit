import { reactive as o0, ref as Q, computed as e0, inject as v0, toRaw as Rr, watch as we, resolveComponent as N, resolveDirective as Hr, createElementBlock as J, openBlock as O, createVNode as u0, mergeProps as Z, withCtx as G, withDirectives as Se, createBlock as W, resolveDynamicComponent as Re, createElementVNode as q0, Fragment as t0, renderList as f0, createTextVNode as C0, toDisplayString as b0, createCommentVNode as d0, normalizeProps as Qr, onMounted as W0, unref as z, createSlots as Zr, vShow as Jr, useSlots as He, markRaw as g0, onBeforeUnmount as Te, provide as Pe, readonly as m0, getCurrentInstance as et } from "vue";
import { ElMessage as z0, ElNotification as rt, ElMessageBox as tt } from "element-plus";
function at() {
  return o0({
    // ---- 基础属性 ----
    title: "",
    // 标题
    width: "50%",
    // 宽度
    fullscreen: !1,
    // 全屏
    top: "15vh",
    // 距顶部距离
    modal: !0,
    // 是否显示遮罩
    modalPenetrable: !1,
    // 是否允许穿透遮罩层。 modal 属性必须为 false
    modalClass: "",
    // 遮罩的自定义类名
    headerClass: "",
    // header 部分的自定义 class 名
    bodyClass: "",
    // body 部分的自定义 class 名
    footerClass: "",
    // footer 部分的自定义 class 名
    appendToBody: !0,
    // 是否插入到 body
    lockScroll: !0,
    // 锁定滚动
    openDelay: 0,
    // 延迟打开
    closeDelay: 0,
    // 延迟关闭
    closeOnClickModal: !0,
    // 点击遮罩关闭
    closeOnPressEscape: !0,
    // ESC 关闭
    showClose: !0,
    // 是否显示关闭按钮
    draggable: !1,
    // 可拖拽
    overflow: !1,
    // 是否展示滚动条
    center: !1,
    // 标题居中
    alignCenter: !1,
    // 弹窗垂直居中
    destroyOnClose: !0,
    // 关闭销毁内容
    headerAriaLevel: "",
    // header 的 aria-level 属性
    customClass: "",
    // 对话框 class
    zIndex: null
    // z-index
  });
}
const nt = {
  "element-loading-text": "加载中...",
  "element-loading-background": "rgba(255, 255, 255, 0.7)",
  style: { "min-height": "150px" }
}, xt = {
  key: 1,
  class: "text-gray-400 text-sm text-center p-4"
}, ot = { class: "dialog-footer" }, it = {
  __name: "layout-page-dialog",
  props: {
    propsData: Object,
    dialog: {
      type: Object,
      default: () => []
    }
  },
  emits: ["update:visible"],
  setup(D, { emit: m }) {
    const a = Q(null), e = Q(`${Date.now()}-${Math.random()}`), u = at(), s = D, E = e0(() => s.dialog.instance), c = e0(() => {
      var o;
      return (o = E.value) == null ? void 0 : o.get();
    }), v = e0({
      get: () => {
        var o;
        return ((o = c.value) == null ? void 0 : o.visible) ?? !1;
      },
      set: (o) => n("update:visible", o)
    }), r = e0(() => {
      var l;
      const o = { ...u }, B = ((l = c.value) == null ? void 0 : l.attrs) || {};
      for (const t in B)
        t in o && (o[t] = B[t]);
      return o;
    }), n = m, h = v0("dialogSlotMap", Q(/* @__PURE__ */ new Map())), i = e0(() => {
      var B;
      const o = (B = c.value) == null ? void 0 : B.component;
      if (!o) return null;
      if (typeof o == "object" || typeof o == "function")
        return o;
      if (typeof o == "string" && h.value.has(o))
        return h.value.get(o);
    }), d = e0(() => {
      var t;
      if (e.value = `${Date.now()}-${Math.random()}`, !((t = c.value) != null && t.propsData)) return {};
      const o = Rr(c.value.propsData), { key: B, ...l } = o;
      return l;
    }), x = () => {
      var o;
      (o = E.value) == null || o.destroy();
    }, p = async (o) => {
      if (!(!o || typeof o.command != "function")) {
        o.loading = !0;
        try {
          const B = o.command(E.value, a.value);
          B instanceof Promise && await B;
        } catch (B) {
          console.error("事件执行失败:", B);
        } finally {
          o.loading = !1;
        }
      }
    };
    return we(() => v, (o) => {
      o || (actions.value = []);
    }), (o, B) => {
      const l = N("el-button"), t = N("el-dialog"), f = Hr("loading");
      return O(), J("div", null, [
        u0(t, Z({
          modelValue: v.value,
          "onUpdate:modelValue": B[0] || (B[0] = (C) => v.value = C),
          onClose: B[1] || (B[1] = (C) => x())
        }, r.value), {
          footer: G(() => {
            var C;
            return [
              q0("div", ot, [
                (O(!0), J(t0, null, f0(((C = c.value) == null ? void 0 : C.actions) ?? [], (_, b) => (O(), W(l, {
                  key: b,
                  type: _.type,
                  icon: _.icon,
                  loading: _.loading,
                  onClick: (g) => p(_)
                }, {
                  default: G(() => [
                    C0(b0(_.label), 1)
                  ]),
                  _: 2
                }, 1032, ["type", "icon", "loading", "onClick"]))), 128))
              ])
            ];
          }),
          default: G(() => {
            var C;
            return [
              Se((O(), J("div", nt, [
                i.value ? (O(), W(Re(i.value), Z({
                  key: e.value,
                  ref_key: "componentRef",
                  ref: a
                }, d.value), null, 16)) : (O(), J("div", xt, " ⚠️ 无内容可展示，请检查 component 是否传入正确。 "))
              ])), [
                [f, (C = c.value) == null ? void 0 : C.loading]
              ])
            ];
          }),
          _: 1
        }, 16, ["modelValue"])
      ]);
    };
  }
};
var U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function st(D) {
  return D && D.__esModule && Object.prototype.hasOwnProperty.call(D, "default") ? D.default : D;
}
function lt(D) {
  if (D.__esModule) return D;
  var m = D.default;
  if (typeof m == "function") {
    var a = function e() {
      return this instanceof e ? Reflect.construct(m, arguments, this.constructor) : m.apply(this, arguments);
    };
    a.prototype = m.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(D).forEach(function(e) {
    var u = Object.getOwnPropertyDescriptor(D, e);
    Object.defineProperty(a, e, u.get ? u : {
      enumerable: !0,
      get: function() {
        return D[e];
      }
    });
  }), a;
}
var Tr = { exports: {} };
function ct(D) {
  throw new Error('Could not dynamically require "' + D + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var M0 = { exports: {} };
const ft = {}, ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ft
}, Symbol.toStringTag, { value: "Module" })), dt = /* @__PURE__ */ lt(ut);
var Ye;
function V() {
  return Ye || (Ye = 1, function(D, m) {
    (function(a, e) {
      D.exports = e();
    })(U, function() {
      var a = a || function(e, u) {
        var s;
        if (typeof window < "u" && window.crypto && (s = window.crypto), typeof self < "u" && self.crypto && (s = self.crypto), typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto), !s && typeof U < "u" && U.crypto && (s = U.crypto), !s && typeof ct == "function")
          try {
            s = dt;
          } catch {
          }
        var E = function() {
          if (s) {
            if (typeof s.getRandomValues == "function")
              try {
                return s.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof s.randomBytes == "function")
              try {
                return s.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, c = Object.create || /* @__PURE__ */ function() {
          function l() {
          }
          return function(t) {
            var f;
            return l.prototype = t, f = new l(), l.prototype = null, f;
          };
        }(), v = {}, r = v.lib = {}, n = r.Base = /* @__PURE__ */ function() {
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
            extend: function(l) {
              var t = c(this);
              return l && t.mixIn(l), (!t.hasOwnProperty("init") || this.init === t.init) && (t.init = function() {
                t.$super.init.apply(this, arguments);
              }), t.init.prototype = t, t.$super = this, t;
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
              var l = this.extend();
              return l.init.apply(l, arguments), l;
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
            mixIn: function(l) {
              for (var t in l)
                l.hasOwnProperty(t) && (this[t] = l[t]);
              l.hasOwnProperty("toString") && (this.toString = l.toString);
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
        }(), h = r.WordArray = n.extend({
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
          init: function(l, t) {
            l = this.words = l || [], t != u ? this.sigBytes = t : this.sigBytes = l.length * 4;
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
          toString: function(l) {
            return (l || d).stringify(this);
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
          concat: function(l) {
            var t = this.words, f = l.words, C = this.sigBytes, _ = l.sigBytes;
            if (this.clamp(), C % 4)
              for (var b = 0; b < _; b++) {
                var g = f[b >>> 2] >>> 24 - b % 4 * 8 & 255;
                t[C + b >>> 2] |= g << 24 - (C + b) % 4 * 8;
              }
            else
              for (var T = 0; T < _; T += 4)
                t[C + T >>> 2] = f[T >>> 2];
            return this.sigBytes += _, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var l = this.words, t = this.sigBytes;
            l[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, l.length = e.ceil(t / 4);
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
            var l = n.clone.call(this);
            return l.words = this.words.slice(0), l;
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
          random: function(l) {
            for (var t = [], f = 0; f < l; f += 4)
              t.push(E());
            return new h.init(t, l);
          }
        }), i = v.enc = {}, d = i.Hex = {
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
          stringify: function(l) {
            for (var t = l.words, f = l.sigBytes, C = [], _ = 0; _ < f; _++) {
              var b = t[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
              C.push((b >>> 4).toString(16)), C.push((b & 15).toString(16));
            }
            return C.join("");
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
          parse: function(l) {
            for (var t = l.length, f = [], C = 0; C < t; C += 2)
              f[C >>> 3] |= parseInt(l.substr(C, 2), 16) << 24 - C % 8 * 4;
            return new h.init(f, t / 2);
          }
        }, x = i.Latin1 = {
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
          stringify: function(l) {
            for (var t = l.words, f = l.sigBytes, C = [], _ = 0; _ < f; _++) {
              var b = t[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
              C.push(String.fromCharCode(b));
            }
            return C.join("");
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
          parse: function(l) {
            for (var t = l.length, f = [], C = 0; C < t; C++)
              f[C >>> 2] |= (l.charCodeAt(C) & 255) << 24 - C % 4 * 8;
            return new h.init(f, t);
          }
        }, p = i.Utf8 = {
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
          stringify: function(l) {
            try {
              return decodeURIComponent(escape(x.stringify(l)));
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
          parse: function(l) {
            return x.parse(unescape(encodeURIComponent(l)));
          }
        }, o = r.BufferedBlockAlgorithm = n.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new h.init(), this._nDataBytes = 0;
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
          _append: function(l) {
            typeof l == "string" && (l = p.parse(l)), this._data.concat(l), this._nDataBytes += l.sigBytes;
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
          _process: function(l) {
            var t, f = this._data, C = f.words, _ = f.sigBytes, b = this.blockSize, g = b * 4, T = _ / g;
            l ? T = e.ceil(T) : T = e.max((T | 0) - this._minBufferSize, 0);
            var A = T * b, y = e.min(A * 4, _);
            if (A) {
              for (var F = 0; F < A; F += b)
                this._doProcessBlock(C, F);
              t = C.splice(0, A), f.sigBytes -= y;
            }
            return new h.init(t, y);
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
            var l = n.clone.call(this);
            return l._data = this._data.clone(), l;
          },
          _minBufferSize: 0
        });
        r.Hasher = o.extend({
          /**
           * Configuration options.
           */
          cfg: n.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(l) {
            this.cfg = this.cfg.extend(l), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            o.reset.call(this), this._doReset();
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
          update: function(l) {
            return this._append(l), this._process(), this;
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
          finalize: function(l) {
            l && this._append(l);
            var t = this._doFinalize();
            return t;
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
          _createHelper: function(l) {
            return function(t, f) {
              return new l.init(f).finalize(t);
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
          _createHmacHelper: function(l) {
            return function(t, f) {
              return new B.HMAC.init(l, f).finalize(t);
            };
          }
        });
        var B = v.algo = {};
        return v;
      }(Math);
      return a;
    });
  }(M0)), M0.exports;
}
var j0 = { exports: {} }, Qe;
function V0() {
  return Qe || (Qe = 1, function(D, m) {
    (function(a, e) {
      D.exports = e(V());
    })(U, function(a) {
      return function(e) {
        var u = a, s = u.lib, E = s.Base, c = s.WordArray, v = u.x64 = {};
        v.Word = E.extend({
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
          init: function(r, n) {
            this.high = r, this.low = n;
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
        }), v.WordArray = E.extend({
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
          init: function(r, n) {
            r = this.words = r || [], n != e ? this.sigBytes = n : this.sigBytes = r.length * 8;
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
            for (var r = this.words, n = r.length, h = [], i = 0; i < n; i++) {
              var d = r[i];
              h.push(d.high), h.push(d.low);
            }
            return c.create(h, this.sigBytes);
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
            for (var r = E.clone.call(this), n = r.words = this.words.slice(0), h = n.length, i = 0; i < h; i++)
              n[i] = n[i].clone();
            return r;
          }
        });
      }(), a;
    });
  }(j0)), j0.exports;
}
var X0 = { exports: {} }, Ze;
function vt() {
  return Ze || (Ze = 1, function(D, m) {
    (function(a, e) {
      D.exports = e(V());
    })(U, function(a) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var e = a, u = e.lib, s = u.WordArray, E = s.init, c = s.init = function(v) {
            if (v instanceof ArrayBuffer && (v = new Uint8Array(v)), (v instanceof Int8Array || typeof Uint8ClampedArray < "u" && v instanceof Uint8ClampedArray || v instanceof Int16Array || v instanceof Uint16Array || v instanceof Int32Array || v instanceof Uint32Array || v instanceof Float32Array || v instanceof Float64Array) && (v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength)), v instanceof Uint8Array) {
              for (var r = v.byteLength, n = [], h = 0; h < r; h++)
                n[h >>> 2] |= v[h] << 24 - h % 4 * 8;
              E.call(this, n, r);
            } else
              E.apply(this, arguments);
          };
          c.prototype = s;
        }
      }(), a.lib.WordArray;
    });
  }(X0)), X0.exports;
}
var G0 = { exports: {} }, Je;
function pt() {
  return Je || (Je = 1, function(D, m) {
    (function(a, e) {
      D.exports = e(V());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.WordArray, E = e.enc;
        E.Utf16 = E.Utf16BE = {
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
          stringify: function(v) {
            for (var r = v.words, n = v.sigBytes, h = [], i = 0; i < n; i += 2) {
              var d = r[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              h.push(String.fromCharCode(d));
            }
            return h.join("");
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
          parse: function(v) {
            for (var r = v.length, n = [], h = 0; h < r; h++)
              n[h >>> 1] |= v.charCodeAt(h) << 16 - h % 2 * 16;
            return s.create(n, r * 2);
          }
        }, E.Utf16LE = {
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
          stringify: function(v) {
            for (var r = v.words, n = v.sigBytes, h = [], i = 0; i < n; i += 2) {
              var d = c(r[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              h.push(String.fromCharCode(d));
            }
            return h.join("");
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
          parse: function(v) {
            for (var r = v.length, n = [], h = 0; h < r; h++)
              n[h >>> 1] |= c(v.charCodeAt(h) << 16 - h % 2 * 16);
            return s.create(n, r * 2);
          }
        };
        function c(v) {
          return v << 8 & 4278255360 | v >>> 8 & 16711935;
        }
      }(), a.enc.Utf16;
    });
  }(G0)), G0.exports;
}
var Y0 = { exports: {} }, er;
function A0() {
  return er || (er = 1, function(D, m) {
    (function(a, e) {
      D.exports = e(V());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.WordArray, E = e.enc;
        E.Base64 = {
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
          stringify: function(v) {
            var r = v.words, n = v.sigBytes, h = this._map;
            v.clamp();
            for (var i = [], d = 0; d < n; d += 3)
              for (var x = r[d >>> 2] >>> 24 - d % 4 * 8 & 255, p = r[d + 1 >>> 2] >>> 24 - (d + 1) % 4 * 8 & 255, o = r[d + 2 >>> 2] >>> 24 - (d + 2) % 4 * 8 & 255, B = x << 16 | p << 8 | o, l = 0; l < 4 && d + l * 0.75 < n; l++)
                i.push(h.charAt(B >>> 6 * (3 - l) & 63));
            var t = h.charAt(64);
            if (t)
              for (; i.length % 4; )
                i.push(t);
            return i.join("");
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
          parse: function(v) {
            var r = v.length, n = this._map, h = this._reverseMap;
            if (!h) {
              h = this._reverseMap = [];
              for (var i = 0; i < n.length; i++)
                h[n.charCodeAt(i)] = i;
            }
            var d = n.charAt(64);
            if (d) {
              var x = v.indexOf(d);
              x !== -1 && (r = x);
            }
            return c(v, r, h);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function c(v, r, n) {
          for (var h = [], i = 0, d = 0; d < r; d++)
            if (d % 4) {
              var x = n[v.charCodeAt(d - 1)] << d % 4 * 2, p = n[v.charCodeAt(d)] >>> 6 - d % 4 * 2, o = x | p;
              h[i >>> 2] |= o << 24 - i % 4 * 8, i++;
            }
          return s.create(h, i);
        }
      }(), a.enc.Base64;
    });
  }(Y0)), Y0.exports;
}
var Q0 = { exports: {} }, rr;
function ht() {
  return rr || (rr = 1, function(D, m) {
    (function(a, e) {
      D.exports = e(V());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.WordArray, E = e.enc;
        E.Base64url = {
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
          stringify: function(v, r) {
            r === void 0 && (r = !0);
            var n = v.words, h = v.sigBytes, i = r ? this._safe_map : this._map;
            v.clamp();
            for (var d = [], x = 0; x < h; x += 3)
              for (var p = n[x >>> 2] >>> 24 - x % 4 * 8 & 255, o = n[x + 1 >>> 2] >>> 24 - (x + 1) % 4 * 8 & 255, B = n[x + 2 >>> 2] >>> 24 - (x + 2) % 4 * 8 & 255, l = p << 16 | o << 8 | B, t = 0; t < 4 && x + t * 0.75 < h; t++)
                d.push(i.charAt(l >>> 6 * (3 - t) & 63));
            var f = i.charAt(64);
            if (f)
              for (; d.length % 4; )
                d.push(f);
            return d.join("");
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
          parse: function(v, r) {
            r === void 0 && (r = !0);
            var n = v.length, h = r ? this._safe_map : this._map, i = this._reverseMap;
            if (!i) {
              i = this._reverseMap = [];
              for (var d = 0; d < h.length; d++)
                i[h.charCodeAt(d)] = d;
            }
            var x = h.charAt(64);
            if (x) {
              var p = v.indexOf(x);
              p !== -1 && (n = p);
            }
            return c(v, n, i);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function c(v, r, n) {
          for (var h = [], i = 0, d = 0; d < r; d++)
            if (d % 4) {
              var x = n[v.charCodeAt(d - 1)] << d % 4 * 2, p = n[v.charCodeAt(d)] >>> 6 - d % 4 * 2, o = x | p;
              h[i >>> 2] |= o << 24 - i % 4 * 8, i++;
            }
          return s.create(h, i);
        }
      }(), a.enc.Base64url;
    });
  }(Q0)), Q0.exports;
}
var Z0 = { exports: {} }, tr;
function _0() {
  return tr || (tr = 1, function(D, m) {
    (function(a, e) {
      D.exports = e(V());
    })(U, function(a) {
      return function(e) {
        var u = a, s = u.lib, E = s.WordArray, c = s.Hasher, v = u.algo, r = [];
        (function() {
          for (var p = 0; p < 64; p++)
            r[p] = e.abs(e.sin(p + 1)) * 4294967296 | 0;
        })();
        var n = v.MD5 = c.extend({
          _doReset: function() {
            this._hash = new E.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(p, o) {
            for (var B = 0; B < 16; B++) {
              var l = o + B, t = p[l];
              p[l] = (t << 8 | t >>> 24) & 16711935 | (t << 24 | t >>> 8) & 4278255360;
            }
            var f = this._hash.words, C = p[o + 0], _ = p[o + 1], b = p[o + 2], g = p[o + 3], T = p[o + 4], A = p[o + 5], y = p[o + 6], F = p[o + 7], S = p[o + 8], q = p[o + 9], $ = p[o + 10], L = p[o + 11], j = p[o + 12], K = p[o + 13], M = p[o + 14], P = p[o + 15], k = f[0], w = f[1], H = f[2], R = f[3];
            k = h(k, w, H, R, C, 7, r[0]), R = h(R, k, w, H, _, 12, r[1]), H = h(H, R, k, w, b, 17, r[2]), w = h(w, H, R, k, g, 22, r[3]), k = h(k, w, H, R, T, 7, r[4]), R = h(R, k, w, H, A, 12, r[5]), H = h(H, R, k, w, y, 17, r[6]), w = h(w, H, R, k, F, 22, r[7]), k = h(k, w, H, R, S, 7, r[8]), R = h(R, k, w, H, q, 12, r[9]), H = h(H, R, k, w, $, 17, r[10]), w = h(w, H, R, k, L, 22, r[11]), k = h(k, w, H, R, j, 7, r[12]), R = h(R, k, w, H, K, 12, r[13]), H = h(H, R, k, w, M, 17, r[14]), w = h(w, H, R, k, P, 22, r[15]), k = i(k, w, H, R, _, 5, r[16]), R = i(R, k, w, H, y, 9, r[17]), H = i(H, R, k, w, L, 14, r[18]), w = i(w, H, R, k, C, 20, r[19]), k = i(k, w, H, R, A, 5, r[20]), R = i(R, k, w, H, $, 9, r[21]), H = i(H, R, k, w, P, 14, r[22]), w = i(w, H, R, k, T, 20, r[23]), k = i(k, w, H, R, q, 5, r[24]), R = i(R, k, w, H, M, 9, r[25]), H = i(H, R, k, w, g, 14, r[26]), w = i(w, H, R, k, S, 20, r[27]), k = i(k, w, H, R, K, 5, r[28]), R = i(R, k, w, H, b, 9, r[29]), H = i(H, R, k, w, F, 14, r[30]), w = i(w, H, R, k, j, 20, r[31]), k = d(k, w, H, R, A, 4, r[32]), R = d(R, k, w, H, S, 11, r[33]), H = d(H, R, k, w, L, 16, r[34]), w = d(w, H, R, k, M, 23, r[35]), k = d(k, w, H, R, _, 4, r[36]), R = d(R, k, w, H, T, 11, r[37]), H = d(H, R, k, w, F, 16, r[38]), w = d(w, H, R, k, $, 23, r[39]), k = d(k, w, H, R, K, 4, r[40]), R = d(R, k, w, H, C, 11, r[41]), H = d(H, R, k, w, g, 16, r[42]), w = d(w, H, R, k, y, 23, r[43]), k = d(k, w, H, R, q, 4, r[44]), R = d(R, k, w, H, j, 11, r[45]), H = d(H, R, k, w, P, 16, r[46]), w = d(w, H, R, k, b, 23, r[47]), k = x(k, w, H, R, C, 6, r[48]), R = x(R, k, w, H, F, 10, r[49]), H = x(H, R, k, w, M, 15, r[50]), w = x(w, H, R, k, A, 21, r[51]), k = x(k, w, H, R, j, 6, r[52]), R = x(R, k, w, H, g, 10, r[53]), H = x(H, R, k, w, $, 15, r[54]), w = x(w, H, R, k, _, 21, r[55]), k = x(k, w, H, R, S, 6, r[56]), R = x(R, k, w, H, P, 10, r[57]), H = x(H, R, k, w, y, 15, r[58]), w = x(w, H, R, k, K, 21, r[59]), k = x(k, w, H, R, T, 6, r[60]), R = x(R, k, w, H, L, 10, r[61]), H = x(H, R, k, w, b, 15, r[62]), w = x(w, H, R, k, q, 21, r[63]), f[0] = f[0] + k | 0, f[1] = f[1] + w | 0, f[2] = f[2] + H | 0, f[3] = f[3] + R | 0;
          },
          _doFinalize: function() {
            var p = this._data, o = p.words, B = this._nDataBytes * 8, l = p.sigBytes * 8;
            o[l >>> 5] |= 128 << 24 - l % 32;
            var t = e.floor(B / 4294967296), f = B;
            o[(l + 64 >>> 9 << 4) + 15] = (t << 8 | t >>> 24) & 16711935 | (t << 24 | t >>> 8) & 4278255360, o[(l + 64 >>> 9 << 4) + 14] = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360, p.sigBytes = (o.length + 1) * 4, this._process();
            for (var C = this._hash, _ = C.words, b = 0; b < 4; b++) {
              var g = _[b];
              _[b] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            }
            return C;
          },
          clone: function() {
            var p = c.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        function h(p, o, B, l, t, f, C) {
          var _ = p + (o & B | ~o & l) + t + C;
          return (_ << f | _ >>> 32 - f) + o;
        }
        function i(p, o, B, l, t, f, C) {
          var _ = p + (o & l | B & ~l) + t + C;
          return (_ << f | _ >>> 32 - f) + o;
        }
        function d(p, o, B, l, t, f, C) {
          var _ = p + (o ^ B ^ l) + t + C;
          return (_ << f | _ >>> 32 - f) + o;
        }
        function x(p, o, B, l, t, f, C) {
          var _ = p + (B ^ (o | ~l)) + t + C;
          return (_ << f | _ >>> 32 - f) + o;
        }
        u.MD5 = c._createHelper(n), u.HmacMD5 = c._createHmacHelper(n);
      }(Math), a.MD5;
    });
  }(Z0)), Z0.exports;
}
var J0 = { exports: {} }, ar;
function Pr() {
  return ar || (ar = 1, function(D, m) {
    (function(a, e) {
      D.exports = e(V());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.WordArray, E = u.Hasher, c = e.algo, v = [], r = c.SHA1 = E.extend({
          _doReset: function() {
            this._hash = new s.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(n, h) {
            for (var i = this._hash.words, d = i[0], x = i[1], p = i[2], o = i[3], B = i[4], l = 0; l < 80; l++) {
              if (l < 16)
                v[l] = n[h + l] | 0;
              else {
                var t = v[l - 3] ^ v[l - 8] ^ v[l - 14] ^ v[l - 16];
                v[l] = t << 1 | t >>> 31;
              }
              var f = (d << 5 | d >>> 27) + B + v[l];
              l < 20 ? f += (x & p | ~x & o) + 1518500249 : l < 40 ? f += (x ^ p ^ o) + 1859775393 : l < 60 ? f += (x & p | x & o | p & o) - 1894007588 : f += (x ^ p ^ o) - 899497514, B = o, o = p, p = x << 30 | x >>> 2, x = d, d = f;
            }
            i[0] = i[0] + d | 0, i[1] = i[1] + x | 0, i[2] = i[2] + p | 0, i[3] = i[3] + o | 0, i[4] = i[4] + B | 0;
          },
          _doFinalize: function() {
            var n = this._data, h = n.words, i = this._nDataBytes * 8, d = n.sigBytes * 8;
            return h[d >>> 5] |= 128 << 24 - d % 32, h[(d + 64 >>> 9 << 4) + 14] = Math.floor(i / 4294967296), h[(d + 64 >>> 9 << 4) + 15] = i, n.sigBytes = h.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var n = E.clone.call(this);
            return n._hash = this._hash.clone(), n;
          }
        });
        e.SHA1 = E._createHelper(r), e.HmacSHA1 = E._createHmacHelper(r);
      }(), a.SHA1;
    });
  }(J0)), J0.exports;
}
var ee = { exports: {} }, nr;
function ze() {
  return nr || (nr = 1, function(D, m) {
    (function(a, e) {
      D.exports = e(V());
    })(U, function(a) {
      return function(e) {
        var u = a, s = u.lib, E = s.WordArray, c = s.Hasher, v = u.algo, r = [], n = [];
        (function() {
          function d(B) {
            for (var l = e.sqrt(B), t = 2; t <= l; t++)
              if (!(B % t))
                return !1;
            return !0;
          }
          function x(B) {
            return (B - (B | 0)) * 4294967296 | 0;
          }
          for (var p = 2, o = 0; o < 64; )
            d(p) && (o < 8 && (r[o] = x(e.pow(p, 1 / 2))), n[o] = x(e.pow(p, 1 / 3)), o++), p++;
        })();
        var h = [], i = v.SHA256 = c.extend({
          _doReset: function() {
            this._hash = new E.init(r.slice(0));
          },
          _doProcessBlock: function(d, x) {
            for (var p = this._hash.words, o = p[0], B = p[1], l = p[2], t = p[3], f = p[4], C = p[5], _ = p[6], b = p[7], g = 0; g < 64; g++) {
              if (g < 16)
                h[g] = d[x + g] | 0;
              else {
                var T = h[g - 15], A = (T << 25 | T >>> 7) ^ (T << 14 | T >>> 18) ^ T >>> 3, y = h[g - 2], F = (y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10;
                h[g] = A + h[g - 7] + F + h[g - 16];
              }
              var S = f & C ^ ~f & _, q = o & B ^ o & l ^ B & l, $ = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22), L = (f << 26 | f >>> 6) ^ (f << 21 | f >>> 11) ^ (f << 7 | f >>> 25), j = b + L + S + n[g] + h[g], K = $ + q;
              b = _, _ = C, C = f, f = t + j | 0, t = l, l = B, B = o, o = j + K | 0;
            }
            p[0] = p[0] + o | 0, p[1] = p[1] + B | 0, p[2] = p[2] + l | 0, p[3] = p[3] + t | 0, p[4] = p[4] + f | 0, p[5] = p[5] + C | 0, p[6] = p[6] + _ | 0, p[7] = p[7] + b | 0;
          },
          _doFinalize: function() {
            var d = this._data, x = d.words, p = this._nDataBytes * 8, o = d.sigBytes * 8;
            return x[o >>> 5] |= 128 << 24 - o % 32, x[(o + 64 >>> 9 << 4) + 14] = e.floor(p / 4294967296), x[(o + 64 >>> 9 << 4) + 15] = p, d.sigBytes = x.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var d = c.clone.call(this);
            return d._hash = this._hash.clone(), d;
          }
        });
        u.SHA256 = c._createHelper(i), u.HmacSHA256 = c._createHmacHelper(i);
      }(Math), a.SHA256;
    });
  }(ee)), ee.exports;
}
var re = { exports: {} }, xr;
function Bt() {
  return xr || (xr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), ze());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.WordArray, E = e.algo, c = E.SHA256, v = E.SHA224 = c.extend({
          _doReset: function() {
            this._hash = new s.init([
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
            var r = c._doFinalize.call(this);
            return r.sigBytes -= 4, r;
          }
        });
        e.SHA224 = c._createHelper(v), e.HmacSHA224 = c._createHmacHelper(v);
      }(), a.SHA224;
    });
  }(re)), re.exports;
}
var te = { exports: {} }, or;
function zr() {
  return or || (or = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), V0());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.Hasher, E = e.x64, c = E.Word, v = E.WordArray, r = e.algo;
        function n() {
          return c.create.apply(c, arguments);
        }
        var h = [
          n(1116352408, 3609767458),
          n(1899447441, 602891725),
          n(3049323471, 3964484399),
          n(3921009573, 2173295548),
          n(961987163, 4081628472),
          n(1508970993, 3053834265),
          n(2453635748, 2937671579),
          n(2870763221, 3664609560),
          n(3624381080, 2734883394),
          n(310598401, 1164996542),
          n(607225278, 1323610764),
          n(1426881987, 3590304994),
          n(1925078388, 4068182383),
          n(2162078206, 991336113),
          n(2614888103, 633803317),
          n(3248222580, 3479774868),
          n(3835390401, 2666613458),
          n(4022224774, 944711139),
          n(264347078, 2341262773),
          n(604807628, 2007800933),
          n(770255983, 1495990901),
          n(1249150122, 1856431235),
          n(1555081692, 3175218132),
          n(1996064986, 2198950837),
          n(2554220882, 3999719339),
          n(2821834349, 766784016),
          n(2952996808, 2566594879),
          n(3210313671, 3203337956),
          n(3336571891, 1034457026),
          n(3584528711, 2466948901),
          n(113926993, 3758326383),
          n(338241895, 168717936),
          n(666307205, 1188179964),
          n(773529912, 1546045734),
          n(1294757372, 1522805485),
          n(1396182291, 2643833823),
          n(1695183700, 2343527390),
          n(1986661051, 1014477480),
          n(2177026350, 1206759142),
          n(2456956037, 344077627),
          n(2730485921, 1290863460),
          n(2820302411, 3158454273),
          n(3259730800, 3505952657),
          n(3345764771, 106217008),
          n(3516065817, 3606008344),
          n(3600352804, 1432725776),
          n(4094571909, 1467031594),
          n(275423344, 851169720),
          n(430227734, 3100823752),
          n(506948616, 1363258195),
          n(659060556, 3750685593),
          n(883997877, 3785050280),
          n(958139571, 3318307427),
          n(1322822218, 3812723403),
          n(1537002063, 2003034995),
          n(1747873779, 3602036899),
          n(1955562222, 1575990012),
          n(2024104815, 1125592928),
          n(2227730452, 2716904306),
          n(2361852424, 442776044),
          n(2428436474, 593698344),
          n(2756734187, 3733110249),
          n(3204031479, 2999351573),
          n(3329325298, 3815920427),
          n(3391569614, 3928383900),
          n(3515267271, 566280711),
          n(3940187606, 3454069534),
          n(4118630271, 4000239992),
          n(116418474, 1914138554),
          n(174292421, 2731055270),
          n(289380356, 3203993006),
          n(460393269, 320620315),
          n(685471733, 587496836),
          n(852142971, 1086792851),
          n(1017036298, 365543100),
          n(1126000580, 2618297676),
          n(1288033470, 3409855158),
          n(1501505948, 4234509866),
          n(1607167915, 987167468),
          n(1816402316, 1246189591)
        ], i = [];
        (function() {
          for (var x = 0; x < 80; x++)
            i[x] = n();
        })();
        var d = r.SHA512 = s.extend({
          _doReset: function() {
            this._hash = new v.init([
              new c.init(1779033703, 4089235720),
              new c.init(3144134277, 2227873595),
              new c.init(1013904242, 4271175723),
              new c.init(2773480762, 1595750129),
              new c.init(1359893119, 2917565137),
              new c.init(2600822924, 725511199),
              new c.init(528734635, 4215389547),
              new c.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(x, p) {
            for (var o = this._hash.words, B = o[0], l = o[1], t = o[2], f = o[3], C = o[4], _ = o[5], b = o[6], g = o[7], T = B.high, A = B.low, y = l.high, F = l.low, S = t.high, q = t.low, $ = f.high, L = f.low, j = C.high, K = C.low, M = _.high, P = _.low, k = b.high, w = b.low, H = g.high, R = g.low, Y = T, X = A, a0 = y, I = F, k0 = S, D0 = q, N0 = $, w0 = L, l0 = j, n0 = K, $0 = M, S0 = P, L0 = k, R0 = w, K0 = H, H0 = R, c0 = 0; c0 < 80; c0++) {
              var i0, p0, U0 = i[c0];
              if (c0 < 16)
                p0 = U0.high = x[p + c0 * 2] | 0, i0 = U0.low = x[p + c0 * 2 + 1] | 0;
              else {
                var $e = i[c0 - 15], F0 = $e.high, T0 = $e.low, $r = (F0 >>> 1 | T0 << 31) ^ (F0 >>> 8 | T0 << 24) ^ F0 >>> 7, Le = (T0 >>> 1 | F0 << 31) ^ (T0 >>> 8 | F0 << 24) ^ (T0 >>> 7 | F0 << 25), Ue = i[c0 - 2], y0 = Ue.high, P0 = Ue.low, Lr = (y0 >>> 19 | P0 << 13) ^ (y0 << 3 | P0 >>> 29) ^ y0 >>> 6, Ie = (P0 >>> 19 | y0 << 13) ^ (P0 << 3 | y0 >>> 29) ^ (P0 >>> 6 | y0 << 26), We = i[c0 - 7], Ur = We.high, Ir = We.low, Ve = i[c0 - 16], Wr = Ve.high, Ne = Ve.low;
                i0 = Le + Ir, p0 = $r + Ur + (i0 >>> 0 < Le >>> 0 ? 1 : 0), i0 = i0 + Ie, p0 = p0 + Lr + (i0 >>> 0 < Ie >>> 0 ? 1 : 0), i0 = i0 + Ne, p0 = p0 + Wr + (i0 >>> 0 < Ne >>> 0 ? 1 : 0), U0.high = p0, U0.low = i0;
              }
              var Vr = l0 & $0 ^ ~l0 & L0, Ke = n0 & S0 ^ ~n0 & R0, Nr = Y & a0 ^ Y & k0 ^ a0 & k0, Kr = X & I ^ X & D0 ^ I & D0, Mr = (Y >>> 28 | X << 4) ^ (Y << 30 | X >>> 2) ^ (Y << 25 | X >>> 7), Me = (X >>> 28 | Y << 4) ^ (X << 30 | Y >>> 2) ^ (X << 25 | Y >>> 7), jr = (l0 >>> 14 | n0 << 18) ^ (l0 >>> 18 | n0 << 14) ^ (l0 << 23 | n0 >>> 9), Xr = (n0 >>> 14 | l0 << 18) ^ (n0 >>> 18 | l0 << 14) ^ (n0 << 23 | l0 >>> 9), je = h[c0], Gr = je.high, Xe = je.low, x0 = H0 + Xr, h0 = K0 + jr + (x0 >>> 0 < H0 >>> 0 ? 1 : 0), x0 = x0 + Ke, h0 = h0 + Vr + (x0 >>> 0 < Ke >>> 0 ? 1 : 0), x0 = x0 + Xe, h0 = h0 + Gr + (x0 >>> 0 < Xe >>> 0 ? 1 : 0), x0 = x0 + i0, h0 = h0 + p0 + (x0 >>> 0 < i0 >>> 0 ? 1 : 0), Ge = Me + Kr, Yr = Mr + Nr + (Ge >>> 0 < Me >>> 0 ? 1 : 0);
              K0 = L0, H0 = R0, L0 = $0, R0 = S0, $0 = l0, S0 = n0, n0 = w0 + x0 | 0, l0 = N0 + h0 + (n0 >>> 0 < w0 >>> 0 ? 1 : 0) | 0, N0 = k0, w0 = D0, k0 = a0, D0 = I, a0 = Y, I = X, X = x0 + Ge | 0, Y = h0 + Yr + (X >>> 0 < x0 >>> 0 ? 1 : 0) | 0;
            }
            A = B.low = A + X, B.high = T + Y + (A >>> 0 < X >>> 0 ? 1 : 0), F = l.low = F + I, l.high = y + a0 + (F >>> 0 < I >>> 0 ? 1 : 0), q = t.low = q + D0, t.high = S + k0 + (q >>> 0 < D0 >>> 0 ? 1 : 0), L = f.low = L + w0, f.high = $ + N0 + (L >>> 0 < w0 >>> 0 ? 1 : 0), K = C.low = K + n0, C.high = j + l0 + (K >>> 0 < n0 >>> 0 ? 1 : 0), P = _.low = P + S0, _.high = M + $0 + (P >>> 0 < S0 >>> 0 ? 1 : 0), w = b.low = w + R0, b.high = k + L0 + (w >>> 0 < R0 >>> 0 ? 1 : 0), R = g.low = R + H0, g.high = H + K0 + (R >>> 0 < H0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var x = this._data, p = x.words, o = this._nDataBytes * 8, B = x.sigBytes * 8;
            p[B >>> 5] |= 128 << 24 - B % 32, p[(B + 128 >>> 10 << 5) + 30] = Math.floor(o / 4294967296), p[(B + 128 >>> 10 << 5) + 31] = o, x.sigBytes = p.length * 4, this._process();
            var l = this._hash.toX32();
            return l;
          },
          clone: function() {
            var x = s.clone.call(this);
            return x._hash = this._hash.clone(), x;
          },
          blockSize: 1024 / 32
        });
        e.SHA512 = s._createHelper(d), e.HmacSHA512 = s._createHmacHelper(d);
      }(), a.SHA512;
    });
  }(te)), te.exports;
}
var ae = { exports: {} }, ir;
function Ct() {
  return ir || (ir = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), V0(), zr());
    })(U, function(a) {
      return function() {
        var e = a, u = e.x64, s = u.Word, E = u.WordArray, c = e.algo, v = c.SHA512, r = c.SHA384 = v.extend({
          _doReset: function() {
            this._hash = new E.init([
              new s.init(3418070365, 3238371032),
              new s.init(1654270250, 914150663),
              new s.init(2438529370, 812702999),
              new s.init(355462360, 4144912697),
              new s.init(1731405415, 4290775857),
              new s.init(2394180231, 1750603025),
              new s.init(3675008525, 1694076839),
              new s.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var n = v._doFinalize.call(this);
            return n.sigBytes -= 16, n;
          }
        });
        e.SHA384 = v._createHelper(r), e.HmacSHA384 = v._createHmacHelper(r);
      }(), a.SHA384;
    });
  }(ae)), ae.exports;
}
var ne = { exports: {} }, sr;
function Et() {
  return sr || (sr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), V0());
    })(U, function(a) {
      return function(e) {
        var u = a, s = u.lib, E = s.WordArray, c = s.Hasher, v = u.x64, r = v.Word, n = u.algo, h = [], i = [], d = [];
        (function() {
          for (var o = 1, B = 0, l = 0; l < 24; l++) {
            h[o + 5 * B] = (l + 1) * (l + 2) / 2 % 64;
            var t = B % 5, f = (2 * o + 3 * B) % 5;
            o = t, B = f;
          }
          for (var o = 0; o < 5; o++)
            for (var B = 0; B < 5; B++)
              i[o + 5 * B] = B + (2 * o + 3 * B) % 5 * 5;
          for (var C = 1, _ = 0; _ < 24; _++) {
            for (var b = 0, g = 0, T = 0; T < 7; T++) {
              if (C & 1) {
                var A = (1 << T) - 1;
                A < 32 ? g ^= 1 << A : b ^= 1 << A - 32;
              }
              C & 128 ? C = C << 1 ^ 113 : C <<= 1;
            }
            d[_] = r.create(b, g);
          }
        })();
        var x = [];
        (function() {
          for (var o = 0; o < 25; o++)
            x[o] = r.create();
        })();
        var p = n.SHA3 = c.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: c.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var o = this._state = [], B = 0; B < 25; B++)
              o[B] = new r.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(o, B) {
            for (var l = this._state, t = this.blockSize / 2, f = 0; f < t; f++) {
              var C = o[B + 2 * f], _ = o[B + 2 * f + 1];
              C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, _ = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
              var b = l[f];
              b.high ^= _, b.low ^= C;
            }
            for (var g = 0; g < 24; g++) {
              for (var T = 0; T < 5; T++) {
                for (var A = 0, y = 0, F = 0; F < 5; F++) {
                  var b = l[T + 5 * F];
                  A ^= b.high, y ^= b.low;
                }
                var S = x[T];
                S.high = A, S.low = y;
              }
              for (var T = 0; T < 5; T++)
                for (var q = x[(T + 4) % 5], $ = x[(T + 1) % 5], L = $.high, j = $.low, A = q.high ^ (L << 1 | j >>> 31), y = q.low ^ (j << 1 | L >>> 31), F = 0; F < 5; F++) {
                  var b = l[T + 5 * F];
                  b.high ^= A, b.low ^= y;
                }
              for (var K = 1; K < 25; K++) {
                var A, y, b = l[K], M = b.high, P = b.low, k = h[K];
                k < 32 ? (A = M << k | P >>> 32 - k, y = P << k | M >>> 32 - k) : (A = P << k - 32 | M >>> 64 - k, y = M << k - 32 | P >>> 64 - k);
                var w = x[i[K]];
                w.high = A, w.low = y;
              }
              var H = x[0], R = l[0];
              H.high = R.high, H.low = R.low;
              for (var T = 0; T < 5; T++)
                for (var F = 0; F < 5; F++) {
                  var K = T + 5 * F, b = l[K], Y = x[K], X = x[(T + 1) % 5 + 5 * F], a0 = x[(T + 2) % 5 + 5 * F];
                  b.high = Y.high ^ ~X.high & a0.high, b.low = Y.low ^ ~X.low & a0.low;
                }
              var b = l[0], I = d[g];
              b.high ^= I.high, b.low ^= I.low;
            }
          },
          _doFinalize: function() {
            var o = this._data, B = o.words;
            this._nDataBytes * 8;
            var l = o.sigBytes * 8, t = this.blockSize * 32;
            B[l >>> 5] |= 1 << 24 - l % 32, B[(e.ceil((l + 1) / t) * t >>> 5) - 1] |= 128, o.sigBytes = B.length * 4, this._process();
            for (var f = this._state, C = this.cfg.outputLength / 8, _ = C / 8, b = [], g = 0; g < _; g++) {
              var T = f[g], A = T.high, y = T.low;
              A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, y = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, b.push(y), b.push(A);
            }
            return new E.init(b, C);
          },
          clone: function() {
            for (var o = c.clone.call(this), B = o._state = this._state.slice(0), l = 0; l < 25; l++)
              B[l] = B[l].clone();
            return o;
          }
        });
        u.SHA3 = c._createHelper(p), u.HmacSHA3 = c._createHmacHelper(p);
      }(Math), a.SHA3;
    });
  }(ne)), ne.exports;
}
var xe = { exports: {} }, lr;
function At() {
  return lr || (lr = 1, function(D, m) {
    (function(a, e) {
      D.exports = e(V());
    })(U, function(a) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(e) {
        var u = a, s = u.lib, E = s.WordArray, c = s.Hasher, v = u.algo, r = E.create([
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
        ]), n = E.create([
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
        ]), h = E.create([
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
        ]), i = E.create([
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
        ]), d = E.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), x = E.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), p = v.RIPEMD160 = c.extend({
          _doReset: function() {
            this._hash = E.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(_, b) {
            for (var g = 0; g < 16; g++) {
              var T = b + g, A = _[T];
              _[T] = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360;
            }
            var y = this._hash.words, F = d.words, S = x.words, q = r.words, $ = n.words, L = h.words, j = i.words, K, M, P, k, w, H, R, Y, X, a0;
            H = K = y[0], R = M = y[1], Y = P = y[2], X = k = y[3], a0 = w = y[4];
            for (var I, g = 0; g < 80; g += 1)
              I = K + _[b + q[g]] | 0, g < 16 ? I += o(M, P, k) + F[0] : g < 32 ? I += B(M, P, k) + F[1] : g < 48 ? I += l(M, P, k) + F[2] : g < 64 ? I += t(M, P, k) + F[3] : I += f(M, P, k) + F[4], I = I | 0, I = C(I, L[g]), I = I + w | 0, K = w, w = k, k = C(P, 10), P = M, M = I, I = H + _[b + $[g]] | 0, g < 16 ? I += f(R, Y, X) + S[0] : g < 32 ? I += t(R, Y, X) + S[1] : g < 48 ? I += l(R, Y, X) + S[2] : g < 64 ? I += B(R, Y, X) + S[3] : I += o(R, Y, X) + S[4], I = I | 0, I = C(I, j[g]), I = I + a0 | 0, H = a0, a0 = X, X = C(Y, 10), Y = R, R = I;
            I = y[1] + P + X | 0, y[1] = y[2] + k + a0 | 0, y[2] = y[3] + w + H | 0, y[3] = y[4] + K + R | 0, y[4] = y[0] + M + Y | 0, y[0] = I;
          },
          _doFinalize: function() {
            var _ = this._data, b = _.words, g = this._nDataBytes * 8, T = _.sigBytes * 8;
            b[T >>> 5] |= 128 << 24 - T % 32, b[(T + 64 >>> 9 << 4) + 14] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, _.sigBytes = (b.length + 1) * 4, this._process();
            for (var A = this._hash, y = A.words, F = 0; F < 5; F++) {
              var S = y[F];
              y[F] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            return A;
          },
          clone: function() {
            var _ = c.clone.call(this);
            return _._hash = this._hash.clone(), _;
          }
        });
        function o(_, b, g) {
          return _ ^ b ^ g;
        }
        function B(_, b, g) {
          return _ & b | ~_ & g;
        }
        function l(_, b, g) {
          return (_ | ~b) ^ g;
        }
        function t(_, b, g) {
          return _ & g | b & ~g;
        }
        function f(_, b, g) {
          return _ ^ (b | ~g);
        }
        function C(_, b) {
          return _ << b | _ >>> 32 - b;
        }
        u.RIPEMD160 = c._createHelper(p), u.HmacRIPEMD160 = c._createHmacHelper(p);
      }(), a.RIPEMD160;
    });
  }(xe)), xe.exports;
}
var oe = { exports: {} }, cr;
function qe() {
  return cr || (cr = 1, function(D, m) {
    (function(a, e) {
      D.exports = e(V());
    })(U, function(a) {
      (function() {
        var e = a, u = e.lib, s = u.Base, E = e.enc, c = E.Utf8, v = e.algo;
        v.HMAC = s.extend({
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
          init: function(r, n) {
            r = this._hasher = new r.init(), typeof n == "string" && (n = c.parse(n));
            var h = r.blockSize, i = h * 4;
            n.sigBytes > i && (n = r.finalize(n)), n.clamp();
            for (var d = this._oKey = n.clone(), x = this._iKey = n.clone(), p = d.words, o = x.words, B = 0; B < h; B++)
              p[B] ^= 1549556828, o[B] ^= 909522486;
            d.sigBytes = x.sigBytes = i, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var r = this._hasher;
            r.reset(), r.update(this._iKey);
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
          update: function(r) {
            return this._hasher.update(r), this;
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
          finalize: function(r) {
            var n = this._hasher, h = n.finalize(r);
            n.reset();
            var i = n.finalize(this._oKey.clone().concat(h));
            return i;
          }
        });
      })();
    });
  }(oe)), oe.exports;
}
var ie = { exports: {} }, fr;
function _t() {
  return fr || (fr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), ze(), qe());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.Base, E = u.WordArray, c = e.algo, v = c.SHA256, r = c.HMAC, n = c.PBKDF2 = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: v,
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
          init: function(h) {
            this.cfg = this.cfg.extend(h);
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
          compute: function(h, i) {
            for (var d = this.cfg, x = r.create(d.hasher, h), p = E.create(), o = E.create([1]), B = p.words, l = o.words, t = d.keySize, f = d.iterations; B.length < t; ) {
              var C = x.update(i).finalize(o);
              x.reset();
              for (var _ = C.words, b = _.length, g = C, T = 1; T < f; T++) {
                g = x.finalize(g), x.reset();
                for (var A = g.words, y = 0; y < b; y++)
                  _[y] ^= A[y];
              }
              p.concat(C), l[0]++;
            }
            return p.sigBytes = t * 4, p;
          }
        });
        e.PBKDF2 = function(h, i, d) {
          return n.create(d).compute(h, i);
        };
      }(), a.PBKDF2;
    });
  }(ie)), ie.exports;
}
var se = { exports: {} }, ur;
function E0() {
  return ur || (ur = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), Pr(), qe());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.Base, E = u.WordArray, c = e.algo, v = c.MD5, r = c.EvpKDF = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: v,
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
          init: function(n) {
            this.cfg = this.cfg.extend(n);
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
          compute: function(n, h) {
            for (var i, d = this.cfg, x = d.hasher.create(), p = E.create(), o = p.words, B = d.keySize, l = d.iterations; o.length < B; ) {
              i && x.update(i), i = x.update(n).finalize(h), x.reset();
              for (var t = 1; t < l; t++)
                i = x.finalize(i), x.reset();
              p.concat(i);
            }
            return p.sigBytes = B * 4, p;
          }
        });
        e.EvpKDF = function(n, h, i) {
          return r.create(i).compute(n, h);
        };
      }(), a.EvpKDF;
    });
  }(se)), se.exports;
}
var le = { exports: {} }, dr;
function r0() {
  return dr || (dr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), E0());
    })(U, function(a) {
      a.lib.Cipher || function(e) {
        var u = a, s = u.lib, E = s.Base, c = s.WordArray, v = s.BufferedBlockAlgorithm, r = u.enc;
        r.Utf8;
        var n = r.Base64, h = u.algo, i = h.EvpKDF, d = s.Cipher = v.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: E.extend(),
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
          createEncryptor: function(A, y) {
            return this.create(this._ENC_XFORM_MODE, A, y);
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
          createDecryptor: function(A, y) {
            return this.create(this._DEC_XFORM_MODE, A, y);
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
          init: function(A, y, F) {
            this.cfg = this.cfg.extend(F), this._xformMode = A, this._key = y, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            v.reset.call(this), this._doReset();
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
          process: function(A) {
            return this._append(A), this._process();
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
          finalize: function(A) {
            A && this._append(A);
            var y = this._doFinalize();
            return y;
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
            function A(y) {
              return typeof y == "string" ? T : _;
            }
            return function(y) {
              return {
                encrypt: function(F, S, q) {
                  return A(S).encrypt(y, F, S, q);
                },
                decrypt: function(F, S, q) {
                  return A(S).decrypt(y, F, S, q);
                }
              };
            };
          }()
        });
        s.StreamCipher = d.extend({
          _doFinalize: function() {
            var A = this._process(!0);
            return A;
          },
          blockSize: 1
        });
        var x = u.mode = {}, p = s.BlockCipherMode = E.extend({
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
          createEncryptor: function(A, y) {
            return this.Encryptor.create(A, y);
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
          createDecryptor: function(A, y) {
            return this.Decryptor.create(A, y);
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
          init: function(A, y) {
            this._cipher = A, this._iv = y;
          }
        }), o = x.CBC = function() {
          var A = p.extend();
          A.Encryptor = A.extend({
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
            processBlock: function(F, S) {
              var q = this._cipher, $ = q.blockSize;
              y.call(this, F, S, $), q.encryptBlock(F, S), this._prevBlock = F.slice(S, S + $);
            }
          }), A.Decryptor = A.extend({
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
            processBlock: function(F, S) {
              var q = this._cipher, $ = q.blockSize, L = F.slice(S, S + $);
              q.decryptBlock(F, S), y.call(this, F, S, $), this._prevBlock = L;
            }
          });
          function y(F, S, q) {
            var $, L = this._iv;
            L ? ($ = L, this._iv = e) : $ = this._prevBlock;
            for (var j = 0; j < q; j++)
              F[S + j] ^= $[j];
          }
          return A;
        }(), B = u.pad = {}, l = B.Pkcs7 = {
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
          pad: function(A, y) {
            for (var F = y * 4, S = F - A.sigBytes % F, q = S << 24 | S << 16 | S << 8 | S, $ = [], L = 0; L < S; L += 4)
              $.push(q);
            var j = c.create($, S);
            A.concat(j);
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
          unpad: function(A) {
            var y = A.words[A.sigBytes - 1 >>> 2] & 255;
            A.sigBytes -= y;
          }
        };
        s.BlockCipher = d.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: d.cfg.extend({
            mode: o,
            padding: l
          }),
          reset: function() {
            var A;
            d.reset.call(this);
            var y = this.cfg, F = y.iv, S = y.mode;
            this._xformMode == this._ENC_XFORM_MODE ? A = S.createEncryptor : (A = S.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == A ? this._mode.init(this, F && F.words) : (this._mode = A.call(S, this, F && F.words), this._mode.__creator = A);
          },
          _doProcessBlock: function(A, y) {
            this._mode.processBlock(A, y);
          },
          _doFinalize: function() {
            var A, y = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (y.pad(this._data, this.blockSize), A = this._process(!0)) : (A = this._process(!0), y.unpad(A)), A;
          },
          blockSize: 128 / 32
        });
        var t = s.CipherParams = E.extend({
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
          init: function(A) {
            this.mixIn(A);
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
          toString: function(A) {
            return (A || this.formatter).stringify(this);
          }
        }), f = u.format = {}, C = f.OpenSSL = {
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
          stringify: function(A) {
            var y, F = A.ciphertext, S = A.salt;
            return S ? y = c.create([1398893684, 1701076831]).concat(S).concat(F) : y = F, y.toString(n);
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
          parse: function(A) {
            var y, F = n.parse(A), S = F.words;
            return S[0] == 1398893684 && S[1] == 1701076831 && (y = c.create(S.slice(2, 4)), S.splice(0, 4), F.sigBytes -= 16), t.create({ ciphertext: F, salt: y });
          }
        }, _ = s.SerializableCipher = E.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: E.extend({
            format: C
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
          encrypt: function(A, y, F, S) {
            S = this.cfg.extend(S);
            var q = A.createEncryptor(F, S), $ = q.finalize(y), L = q.cfg;
            return t.create({
              ciphertext: $,
              key: F,
              iv: L.iv,
              algorithm: A,
              mode: L.mode,
              padding: L.padding,
              blockSize: A.blockSize,
              formatter: S.format
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
          decrypt: function(A, y, F, S) {
            S = this.cfg.extend(S), y = this._parse(y, S.format);
            var q = A.createDecryptor(F, S).finalize(y.ciphertext);
            return q;
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
          _parse: function(A, y) {
            return typeof A == "string" ? y.parse(A, this) : A;
          }
        }), b = u.kdf = {}, g = b.OpenSSL = {
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
          execute: function(A, y, F, S, q) {
            if (S || (S = c.random(64 / 8)), q)
              var $ = i.create({ keySize: y + F, hasher: q }).compute(A, S);
            else
              var $ = i.create({ keySize: y + F }).compute(A, S);
            var L = c.create($.words.slice(y), F * 4);
            return $.sigBytes = y * 4, t.create({ key: $, iv: L, salt: S });
          }
        }, T = s.PasswordBasedCipher = _.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: _.cfg.extend({
            kdf: g
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
          encrypt: function(A, y, F, S) {
            S = this.cfg.extend(S);
            var q = S.kdf.execute(F, A.keySize, A.ivSize, S.salt, S.hasher);
            S.iv = q.iv;
            var $ = _.encrypt.call(this, A, y, q.key, S);
            return $.mixIn(q), $;
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
          decrypt: function(A, y, F, S) {
            S = this.cfg.extend(S), y = this._parse(y, S.format);
            var q = S.kdf.execute(F, A.keySize, A.ivSize, y.salt, S.hasher);
            S.iv = q.iv;
            var $ = _.decrypt.call(this, A, y, q.key, S);
            return $;
          }
        });
      }();
    });
  }(le)), le.exports;
}
var ce = { exports: {} }, vr;
function Dt() {
  return vr || (vr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), r0());
    })(U, function(a) {
      return a.mode.CFB = function() {
        var e = a.lib.BlockCipherMode.extend();
        e.Encryptor = e.extend({
          processBlock: function(s, E) {
            var c = this._cipher, v = c.blockSize;
            u.call(this, s, E, v, c), this._prevBlock = s.slice(E, E + v);
          }
        }), e.Decryptor = e.extend({
          processBlock: function(s, E) {
            var c = this._cipher, v = c.blockSize, r = s.slice(E, E + v);
            u.call(this, s, E, v, c), this._prevBlock = r;
          }
        });
        function u(s, E, c, v) {
          var r, n = this._iv;
          n ? (r = n.slice(0), this._iv = void 0) : r = this._prevBlock, v.encryptBlock(r, 0);
          for (var h = 0; h < c; h++)
            s[E + h] ^= r[h];
        }
        return e;
      }(), a.mode.CFB;
    });
  }(ce)), ce.exports;
}
var fe = { exports: {} }, pr;
function Ft() {
  return pr || (pr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), r0());
    })(U, function(a) {
      return a.mode.CTR = function() {
        var e = a.lib.BlockCipherMode.extend(), u = e.Encryptor = e.extend({
          processBlock: function(s, E) {
            var c = this._cipher, v = c.blockSize, r = this._iv, n = this._counter;
            r && (n = this._counter = r.slice(0), this._iv = void 0);
            var h = n.slice(0);
            c.encryptBlock(h, 0), n[v - 1] = n[v - 1] + 1 | 0;
            for (var i = 0; i < v; i++)
              s[E + i] ^= h[i];
          }
        });
        return e.Decryptor = u, e;
      }(), a.mode.CTR;
    });
  }(fe)), fe.exports;
}
var ue = { exports: {} }, hr;
function yt() {
  return hr || (hr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), r0());
    })(U, function(a) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return a.mode.CTRGladman = function() {
        var e = a.lib.BlockCipherMode.extend();
        function u(c) {
          if ((c >> 24 & 255) === 255) {
            var v = c >> 16 & 255, r = c >> 8 & 255, n = c & 255;
            v === 255 ? (v = 0, r === 255 ? (r = 0, n === 255 ? n = 0 : ++n) : ++r) : ++v, c = 0, c += v << 16, c += r << 8, c += n;
          } else
            c += 1 << 24;
          return c;
        }
        function s(c) {
          return (c[0] = u(c[0])) === 0 && (c[1] = u(c[1])), c;
        }
        var E = e.Encryptor = e.extend({
          processBlock: function(c, v) {
            var r = this._cipher, n = r.blockSize, h = this._iv, i = this._counter;
            h && (i = this._counter = h.slice(0), this._iv = void 0), s(i);
            var d = i.slice(0);
            r.encryptBlock(d, 0);
            for (var x = 0; x < n; x++)
              c[v + x] ^= d[x];
          }
        });
        return e.Decryptor = E, e;
      }(), a.mode.CTRGladman;
    });
  }(ue)), ue.exports;
}
var de = { exports: {} }, Br;
function bt() {
  return Br || (Br = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), r0());
    })(U, function(a) {
      return a.mode.OFB = function() {
        var e = a.lib.BlockCipherMode.extend(), u = e.Encryptor = e.extend({
          processBlock: function(s, E) {
            var c = this._cipher, v = c.blockSize, r = this._iv, n = this._keystream;
            r && (n = this._keystream = r.slice(0), this._iv = void 0), c.encryptBlock(n, 0);
            for (var h = 0; h < v; h++)
              s[E + h] ^= n[h];
          }
        });
        return e.Decryptor = u, e;
      }(), a.mode.OFB;
    });
  }(de)), de.exports;
}
var ve = { exports: {} }, Cr;
function gt() {
  return Cr || (Cr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), r0());
    })(U, function(a) {
      return a.mode.ECB = function() {
        var e = a.lib.BlockCipherMode.extend();
        return e.Encryptor = e.extend({
          processBlock: function(u, s) {
            this._cipher.encryptBlock(u, s);
          }
        }), e.Decryptor = e.extend({
          processBlock: function(u, s) {
            this._cipher.decryptBlock(u, s);
          }
        }), e;
      }(), a.mode.ECB;
    });
  }(ve)), ve.exports;
}
var pe = { exports: {} }, Er;
function mt() {
  return Er || (Er = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), r0());
    })(U, function(a) {
      return a.pad.AnsiX923 = {
        pad: function(e, u) {
          var s = e.sigBytes, E = u * 4, c = E - s % E, v = s + c - 1;
          e.clamp(), e.words[v >>> 2] |= c << 24 - v % 4 * 8, e.sigBytes += c;
        },
        unpad: function(e) {
          var u = e.words[e.sigBytes - 1 >>> 2] & 255;
          e.sigBytes -= u;
        }
      }, a.pad.Ansix923;
    });
  }(pe)), pe.exports;
}
var he = { exports: {} }, Ar;
function kt() {
  return Ar || (Ar = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), r0());
    })(U, function(a) {
      return a.pad.Iso10126 = {
        pad: function(e, u) {
          var s = u * 4, E = s - e.sigBytes % s;
          e.concat(a.lib.WordArray.random(E - 1)).concat(a.lib.WordArray.create([E << 24], 1));
        },
        unpad: function(e) {
          var u = e.words[e.sigBytes - 1 >>> 2] & 255;
          e.sigBytes -= u;
        }
      }, a.pad.Iso10126;
    });
  }(he)), he.exports;
}
var Be = { exports: {} }, _r;
function wt() {
  return _r || (_r = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), r0());
    })(U, function(a) {
      return a.pad.Iso97971 = {
        pad: function(e, u) {
          e.concat(a.lib.WordArray.create([2147483648], 1)), a.pad.ZeroPadding.pad(e, u);
        },
        unpad: function(e) {
          a.pad.ZeroPadding.unpad(e), e.sigBytes--;
        }
      }, a.pad.Iso97971;
    });
  }(Be)), Be.exports;
}
var Ce = { exports: {} }, Dr;
function St() {
  return Dr || (Dr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), r0());
    })(U, function(a) {
      return a.pad.ZeroPadding = {
        pad: function(e, u) {
          var s = u * 4;
          e.clamp(), e.sigBytes += s - (e.sigBytes % s || s);
        },
        unpad: function(e) {
          for (var u = e.words, s = e.sigBytes - 1, s = e.sigBytes - 1; s >= 0; s--)
            if (u[s >>> 2] >>> 24 - s % 4 * 8 & 255) {
              e.sigBytes = s + 1;
              break;
            }
        }
      }, a.pad.ZeroPadding;
    });
  }(Ce)), Ce.exports;
}
var Ee = { exports: {} }, Fr;
function Rt() {
  return Fr || (Fr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), r0());
    })(U, function(a) {
      return a.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, a.pad.NoPadding;
    });
  }(Ee)), Ee.exports;
}
var Ae = { exports: {} }, yr;
function Ht() {
  return yr || (yr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), r0());
    })(U, function(a) {
      return function(e) {
        var u = a, s = u.lib, E = s.CipherParams, c = u.enc, v = c.Hex, r = u.format;
        r.Hex = {
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
          stringify: function(n) {
            return n.ciphertext.toString(v);
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
          parse: function(n) {
            var h = v.parse(n);
            return E.create({ ciphertext: h });
          }
        };
      }(), a.format.Hex;
    });
  }(Ae)), Ae.exports;
}
var _e = { exports: {} }, br;
function Tt() {
  return br || (br = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.BlockCipher, E = e.algo, c = [], v = [], r = [], n = [], h = [], i = [], d = [], x = [], p = [], o = [];
        (function() {
          for (var t = [], f = 0; f < 256; f++)
            f < 128 ? t[f] = f << 1 : t[f] = f << 1 ^ 283;
          for (var C = 0, _ = 0, f = 0; f < 256; f++) {
            var b = _ ^ _ << 1 ^ _ << 2 ^ _ << 3 ^ _ << 4;
            b = b >>> 8 ^ b & 255 ^ 99, c[C] = b, v[b] = C;
            var g = t[C], T = t[g], A = t[T], y = t[b] * 257 ^ b * 16843008;
            r[C] = y << 24 | y >>> 8, n[C] = y << 16 | y >>> 16, h[C] = y << 8 | y >>> 24, i[C] = y;
            var y = A * 16843009 ^ T * 65537 ^ g * 257 ^ C * 16843008;
            d[b] = y << 24 | y >>> 8, x[b] = y << 16 | y >>> 16, p[b] = y << 8 | y >>> 24, o[b] = y, C ? (C = g ^ t[t[t[A ^ g]]], _ ^= t[t[_]]) : C = _ = 1;
          }
        })();
        var B = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], l = E.AES = s.extend({
          _doReset: function() {
            var t;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var f = this._keyPriorReset = this._key, C = f.words, _ = f.sigBytes / 4, b = this._nRounds = _ + 6, g = (b + 1) * 4, T = this._keySchedule = [], A = 0; A < g; A++)
                A < _ ? T[A] = C[A] : (t = T[A - 1], A % _ ? _ > 6 && A % _ == 4 && (t = c[t >>> 24] << 24 | c[t >>> 16 & 255] << 16 | c[t >>> 8 & 255] << 8 | c[t & 255]) : (t = t << 8 | t >>> 24, t = c[t >>> 24] << 24 | c[t >>> 16 & 255] << 16 | c[t >>> 8 & 255] << 8 | c[t & 255], t ^= B[A / _ | 0] << 24), T[A] = T[A - _] ^ t);
              for (var y = this._invKeySchedule = [], F = 0; F < g; F++) {
                var A = g - F;
                if (F % 4)
                  var t = T[A];
                else
                  var t = T[A - 4];
                F < 4 || A <= 4 ? y[F] = t : y[F] = d[c[t >>> 24]] ^ x[c[t >>> 16 & 255]] ^ p[c[t >>> 8 & 255]] ^ o[c[t & 255]];
              }
            }
          },
          encryptBlock: function(t, f) {
            this._doCryptBlock(t, f, this._keySchedule, r, n, h, i, c);
          },
          decryptBlock: function(t, f) {
            var C = t[f + 1];
            t[f + 1] = t[f + 3], t[f + 3] = C, this._doCryptBlock(t, f, this._invKeySchedule, d, x, p, o, v);
            var C = t[f + 1];
            t[f + 1] = t[f + 3], t[f + 3] = C;
          },
          _doCryptBlock: function(t, f, C, _, b, g, T, A) {
            for (var y = this._nRounds, F = t[f] ^ C[0], S = t[f + 1] ^ C[1], q = t[f + 2] ^ C[2], $ = t[f + 3] ^ C[3], L = 4, j = 1; j < y; j++) {
              var K = _[F >>> 24] ^ b[S >>> 16 & 255] ^ g[q >>> 8 & 255] ^ T[$ & 255] ^ C[L++], M = _[S >>> 24] ^ b[q >>> 16 & 255] ^ g[$ >>> 8 & 255] ^ T[F & 255] ^ C[L++], P = _[q >>> 24] ^ b[$ >>> 16 & 255] ^ g[F >>> 8 & 255] ^ T[S & 255] ^ C[L++], k = _[$ >>> 24] ^ b[F >>> 16 & 255] ^ g[S >>> 8 & 255] ^ T[q & 255] ^ C[L++];
              F = K, S = M, q = P, $ = k;
            }
            var K = (A[F >>> 24] << 24 | A[S >>> 16 & 255] << 16 | A[q >>> 8 & 255] << 8 | A[$ & 255]) ^ C[L++], M = (A[S >>> 24] << 24 | A[q >>> 16 & 255] << 16 | A[$ >>> 8 & 255] << 8 | A[F & 255]) ^ C[L++], P = (A[q >>> 24] << 24 | A[$ >>> 16 & 255] << 16 | A[F >>> 8 & 255] << 8 | A[S & 255]) ^ C[L++], k = (A[$ >>> 24] << 24 | A[F >>> 16 & 255] << 16 | A[S >>> 8 & 255] << 8 | A[q & 255]) ^ C[L++];
            t[f] = K, t[f + 1] = M, t[f + 2] = P, t[f + 3] = k;
          },
          keySize: 256 / 32
        });
        e.AES = s._createHelper(l);
      }(), a.AES;
    });
  }(_e)), _e.exports;
}
var De = { exports: {} }, gr;
function Pt() {
  return gr || (gr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.WordArray, E = u.BlockCipher, c = e.algo, v = [
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
        ], r = [
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
        ], n = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], h = [
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
        ], i = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], d = c.DES = E.extend({
          _doReset: function() {
            for (var B = this._key, l = B.words, t = [], f = 0; f < 56; f++) {
              var C = v[f] - 1;
              t[f] = l[C >>> 5] >>> 31 - C % 32 & 1;
            }
            for (var _ = this._subKeys = [], b = 0; b < 16; b++) {
              for (var g = _[b] = [], T = n[b], f = 0; f < 24; f++)
                g[f / 6 | 0] |= t[(r[f] - 1 + T) % 28] << 31 - f % 6, g[4 + (f / 6 | 0)] |= t[28 + (r[f + 24] - 1 + T) % 28] << 31 - f % 6;
              g[0] = g[0] << 1 | g[0] >>> 31;
              for (var f = 1; f < 7; f++)
                g[f] = g[f] >>> (f - 1) * 4 + 3;
              g[7] = g[7] << 5 | g[7] >>> 27;
            }
            for (var A = this._invSubKeys = [], f = 0; f < 16; f++)
              A[f] = _[15 - f];
          },
          encryptBlock: function(B, l) {
            this._doCryptBlock(B, l, this._subKeys);
          },
          decryptBlock: function(B, l) {
            this._doCryptBlock(B, l, this._invSubKeys);
          },
          _doCryptBlock: function(B, l, t) {
            this._lBlock = B[l], this._rBlock = B[l + 1], x.call(this, 4, 252645135), x.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), x.call(this, 1, 1431655765);
            for (var f = 0; f < 16; f++) {
              for (var C = t[f], _ = this._lBlock, b = this._rBlock, g = 0, T = 0; T < 8; T++)
                g |= h[T][((b ^ C[T]) & i[T]) >>> 0];
              this._lBlock = b, this._rBlock = _ ^ g;
            }
            var A = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = A, x.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), x.call(this, 16, 65535), x.call(this, 4, 252645135), B[l] = this._lBlock, B[l + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function x(B, l) {
          var t = (this._lBlock >>> B ^ this._rBlock) & l;
          this._rBlock ^= t, this._lBlock ^= t << B;
        }
        function p(B, l) {
          var t = (this._rBlock >>> B ^ this._lBlock) & l;
          this._lBlock ^= t, this._rBlock ^= t << B;
        }
        e.DES = E._createHelper(d);
        var o = c.TripleDES = E.extend({
          _doReset: function() {
            var B = this._key, l = B.words;
            if (l.length !== 2 && l.length !== 4 && l.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var t = l.slice(0, 2), f = l.length < 4 ? l.slice(0, 2) : l.slice(2, 4), C = l.length < 6 ? l.slice(0, 2) : l.slice(4, 6);
            this._des1 = d.createEncryptor(s.create(t)), this._des2 = d.createEncryptor(s.create(f)), this._des3 = d.createEncryptor(s.create(C));
          },
          encryptBlock: function(B, l) {
            this._des1.encryptBlock(B, l), this._des2.decryptBlock(B, l), this._des3.encryptBlock(B, l);
          },
          decryptBlock: function(B, l) {
            this._des3.decryptBlock(B, l), this._des2.encryptBlock(B, l), this._des1.decryptBlock(B, l);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        e.TripleDES = E._createHelper(o);
      }(), a.TripleDES;
    });
  }(De)), De.exports;
}
var Fe = { exports: {} }, mr;
function zt() {
  return mr || (mr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.StreamCipher, E = e.algo, c = E.RC4 = s.extend({
          _doReset: function() {
            for (var n = this._key, h = n.words, i = n.sigBytes, d = this._S = [], x = 0; x < 256; x++)
              d[x] = x;
            for (var x = 0, p = 0; x < 256; x++) {
              var o = x % i, B = h[o >>> 2] >>> 24 - o % 4 * 8 & 255;
              p = (p + d[x] + B) % 256;
              var l = d[x];
              d[x] = d[p], d[p] = l;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(n, h) {
            n[h] ^= v.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function v() {
          for (var n = this._S, h = this._i, i = this._j, d = 0, x = 0; x < 4; x++) {
            h = (h + 1) % 256, i = (i + n[h]) % 256;
            var p = n[h];
            n[h] = n[i], n[i] = p, d |= n[(n[h] + n[i]) % 256] << 24 - x * 8;
          }
          return this._i = h, this._j = i, d;
        }
        e.RC4 = s._createHelper(c);
        var r = E.RC4Drop = c.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: c.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            c._doReset.call(this);
            for (var n = this.cfg.drop; n > 0; n--)
              v.call(this);
          }
        });
        e.RC4Drop = s._createHelper(r);
      }(), a.RC4;
    });
  }(Fe)), Fe.exports;
}
var ye = { exports: {} }, kr;
function qt() {
  return kr || (kr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.StreamCipher, E = e.algo, c = [], v = [], r = [], n = E.Rabbit = s.extend({
          _doReset: function() {
            for (var i = this._key.words, d = this.cfg.iv, x = 0; x < 4; x++)
              i[x] = (i[x] << 8 | i[x] >>> 24) & 16711935 | (i[x] << 24 | i[x] >>> 8) & 4278255360;
            var p = this._X = [
              i[0],
              i[3] << 16 | i[2] >>> 16,
              i[1],
              i[0] << 16 | i[3] >>> 16,
              i[2],
              i[1] << 16 | i[0] >>> 16,
              i[3],
              i[2] << 16 | i[1] >>> 16
            ], o = this._C = [
              i[2] << 16 | i[2] >>> 16,
              i[0] & 4294901760 | i[1] & 65535,
              i[3] << 16 | i[3] >>> 16,
              i[1] & 4294901760 | i[2] & 65535,
              i[0] << 16 | i[0] >>> 16,
              i[2] & 4294901760 | i[3] & 65535,
              i[1] << 16 | i[1] >>> 16,
              i[3] & 4294901760 | i[0] & 65535
            ];
            this._b = 0;
            for (var x = 0; x < 4; x++)
              h.call(this);
            for (var x = 0; x < 8; x++)
              o[x] ^= p[x + 4 & 7];
            if (d) {
              var B = d.words, l = B[0], t = B[1], f = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, C = (t << 8 | t >>> 24) & 16711935 | (t << 24 | t >>> 8) & 4278255360, _ = f >>> 16 | C & 4294901760, b = C << 16 | f & 65535;
              o[0] ^= f, o[1] ^= _, o[2] ^= C, o[3] ^= b, o[4] ^= f, o[5] ^= _, o[6] ^= C, o[7] ^= b;
              for (var x = 0; x < 4; x++)
                h.call(this);
            }
          },
          _doProcessBlock: function(i, d) {
            var x = this._X;
            h.call(this), c[0] = x[0] ^ x[5] >>> 16 ^ x[3] << 16, c[1] = x[2] ^ x[7] >>> 16 ^ x[5] << 16, c[2] = x[4] ^ x[1] >>> 16 ^ x[7] << 16, c[3] = x[6] ^ x[3] >>> 16 ^ x[1] << 16;
            for (var p = 0; p < 4; p++)
              c[p] = (c[p] << 8 | c[p] >>> 24) & 16711935 | (c[p] << 24 | c[p] >>> 8) & 4278255360, i[d + p] ^= c[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function h() {
          for (var i = this._X, d = this._C, x = 0; x < 8; x++)
            v[x] = d[x];
          d[0] = d[0] + 1295307597 + this._b | 0, d[1] = d[1] + 3545052371 + (d[0] >>> 0 < v[0] >>> 0 ? 1 : 0) | 0, d[2] = d[2] + 886263092 + (d[1] >>> 0 < v[1] >>> 0 ? 1 : 0) | 0, d[3] = d[3] + 1295307597 + (d[2] >>> 0 < v[2] >>> 0 ? 1 : 0) | 0, d[4] = d[4] + 3545052371 + (d[3] >>> 0 < v[3] >>> 0 ? 1 : 0) | 0, d[5] = d[5] + 886263092 + (d[4] >>> 0 < v[4] >>> 0 ? 1 : 0) | 0, d[6] = d[6] + 1295307597 + (d[5] >>> 0 < v[5] >>> 0 ? 1 : 0) | 0, d[7] = d[7] + 3545052371 + (d[6] >>> 0 < v[6] >>> 0 ? 1 : 0) | 0, this._b = d[7] >>> 0 < v[7] >>> 0 ? 1 : 0;
          for (var x = 0; x < 8; x++) {
            var p = i[x] + d[x], o = p & 65535, B = p >>> 16, l = ((o * o >>> 17) + o * B >>> 15) + B * B, t = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            r[x] = l ^ t;
          }
          i[0] = r[0] + (r[7] << 16 | r[7] >>> 16) + (r[6] << 16 | r[6] >>> 16) | 0, i[1] = r[1] + (r[0] << 8 | r[0] >>> 24) + r[7] | 0, i[2] = r[2] + (r[1] << 16 | r[1] >>> 16) + (r[0] << 16 | r[0] >>> 16) | 0, i[3] = r[3] + (r[2] << 8 | r[2] >>> 24) + r[1] | 0, i[4] = r[4] + (r[3] << 16 | r[3] >>> 16) + (r[2] << 16 | r[2] >>> 16) | 0, i[5] = r[5] + (r[4] << 8 | r[4] >>> 24) + r[3] | 0, i[6] = r[6] + (r[5] << 16 | r[5] >>> 16) + (r[4] << 16 | r[4] >>> 16) | 0, i[7] = r[7] + (r[6] << 8 | r[6] >>> 24) + r[5] | 0;
        }
        e.Rabbit = s._createHelper(n);
      }(), a.Rabbit;
    });
  }(ye)), ye.exports;
}
var be = { exports: {} }, wr;
function Ot() {
  return wr || (wr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.StreamCipher, E = e.algo, c = [], v = [], r = [], n = E.RabbitLegacy = s.extend({
          _doReset: function() {
            var i = this._key.words, d = this.cfg.iv, x = this._X = [
              i[0],
              i[3] << 16 | i[2] >>> 16,
              i[1],
              i[0] << 16 | i[3] >>> 16,
              i[2],
              i[1] << 16 | i[0] >>> 16,
              i[3],
              i[2] << 16 | i[1] >>> 16
            ], p = this._C = [
              i[2] << 16 | i[2] >>> 16,
              i[0] & 4294901760 | i[1] & 65535,
              i[3] << 16 | i[3] >>> 16,
              i[1] & 4294901760 | i[2] & 65535,
              i[0] << 16 | i[0] >>> 16,
              i[2] & 4294901760 | i[3] & 65535,
              i[1] << 16 | i[1] >>> 16,
              i[3] & 4294901760 | i[0] & 65535
            ];
            this._b = 0;
            for (var o = 0; o < 4; o++)
              h.call(this);
            for (var o = 0; o < 8; o++)
              p[o] ^= x[o + 4 & 7];
            if (d) {
              var B = d.words, l = B[0], t = B[1], f = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, C = (t << 8 | t >>> 24) & 16711935 | (t << 24 | t >>> 8) & 4278255360, _ = f >>> 16 | C & 4294901760, b = C << 16 | f & 65535;
              p[0] ^= f, p[1] ^= _, p[2] ^= C, p[3] ^= b, p[4] ^= f, p[5] ^= _, p[6] ^= C, p[7] ^= b;
              for (var o = 0; o < 4; o++)
                h.call(this);
            }
          },
          _doProcessBlock: function(i, d) {
            var x = this._X;
            h.call(this), c[0] = x[0] ^ x[5] >>> 16 ^ x[3] << 16, c[1] = x[2] ^ x[7] >>> 16 ^ x[5] << 16, c[2] = x[4] ^ x[1] >>> 16 ^ x[7] << 16, c[3] = x[6] ^ x[3] >>> 16 ^ x[1] << 16;
            for (var p = 0; p < 4; p++)
              c[p] = (c[p] << 8 | c[p] >>> 24) & 16711935 | (c[p] << 24 | c[p] >>> 8) & 4278255360, i[d + p] ^= c[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function h() {
          for (var i = this._X, d = this._C, x = 0; x < 8; x++)
            v[x] = d[x];
          d[0] = d[0] + 1295307597 + this._b | 0, d[1] = d[1] + 3545052371 + (d[0] >>> 0 < v[0] >>> 0 ? 1 : 0) | 0, d[2] = d[2] + 886263092 + (d[1] >>> 0 < v[1] >>> 0 ? 1 : 0) | 0, d[3] = d[3] + 1295307597 + (d[2] >>> 0 < v[2] >>> 0 ? 1 : 0) | 0, d[4] = d[4] + 3545052371 + (d[3] >>> 0 < v[3] >>> 0 ? 1 : 0) | 0, d[5] = d[5] + 886263092 + (d[4] >>> 0 < v[4] >>> 0 ? 1 : 0) | 0, d[6] = d[6] + 1295307597 + (d[5] >>> 0 < v[5] >>> 0 ? 1 : 0) | 0, d[7] = d[7] + 3545052371 + (d[6] >>> 0 < v[6] >>> 0 ? 1 : 0) | 0, this._b = d[7] >>> 0 < v[7] >>> 0 ? 1 : 0;
          for (var x = 0; x < 8; x++) {
            var p = i[x] + d[x], o = p & 65535, B = p >>> 16, l = ((o * o >>> 17) + o * B >>> 15) + B * B, t = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            r[x] = l ^ t;
          }
          i[0] = r[0] + (r[7] << 16 | r[7] >>> 16) + (r[6] << 16 | r[6] >>> 16) | 0, i[1] = r[1] + (r[0] << 8 | r[0] >>> 24) + r[7] | 0, i[2] = r[2] + (r[1] << 16 | r[1] >>> 16) + (r[0] << 16 | r[0] >>> 16) | 0, i[3] = r[3] + (r[2] << 8 | r[2] >>> 24) + r[1] | 0, i[4] = r[4] + (r[3] << 16 | r[3] >>> 16) + (r[2] << 16 | r[2] >>> 16) | 0, i[5] = r[5] + (r[4] << 8 | r[4] >>> 24) + r[3] | 0, i[6] = r[6] + (r[5] << 16 | r[5] >>> 16) + (r[4] << 16 | r[4] >>> 16) | 0, i[7] = r[7] + (r[6] << 8 | r[6] >>> 24) + r[5] | 0;
        }
        e.RabbitLegacy = s._createHelper(n);
      }(), a.RabbitLegacy;
    });
  }(be)), be.exports;
}
var ge = { exports: {} }, Sr;
function $t() {
  return Sr || (Sr = 1, function(D, m) {
    (function(a, e, u) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(a) {
      return function() {
        var e = a, u = e.lib, s = u.BlockCipher, E = e.algo;
        const c = 16, v = [
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
        ], r = [
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
        var n = {
          pbox: [],
          sbox: []
        };
        function h(o, B) {
          let l = B >> 24 & 255, t = B >> 16 & 255, f = B >> 8 & 255, C = B & 255, _ = o.sbox[0][l] + o.sbox[1][t];
          return _ = _ ^ o.sbox[2][f], _ = _ + o.sbox[3][C], _;
        }
        function i(o, B, l) {
          let t = B, f = l, C;
          for (let _ = 0; _ < c; ++_)
            t = t ^ o.pbox[_], f = h(o, t) ^ f, C = t, t = f, f = C;
          return C = t, t = f, f = C, f = f ^ o.pbox[c], t = t ^ o.pbox[c + 1], { left: t, right: f };
        }
        function d(o, B, l) {
          let t = B, f = l, C;
          for (let _ = c + 1; _ > 1; --_)
            t = t ^ o.pbox[_], f = h(o, t) ^ f, C = t, t = f, f = C;
          return C = t, t = f, f = C, f = f ^ o.pbox[1], t = t ^ o.pbox[0], { left: t, right: f };
        }
        function x(o, B, l) {
          for (let b = 0; b < 4; b++) {
            o.sbox[b] = [];
            for (let g = 0; g < 256; g++)
              o.sbox[b][g] = r[b][g];
          }
          let t = 0;
          for (let b = 0; b < c + 2; b++)
            o.pbox[b] = v[b] ^ B[t], t++, t >= l && (t = 0);
          let f = 0, C = 0, _ = 0;
          for (let b = 0; b < c + 2; b += 2)
            _ = i(o, f, C), f = _.left, C = _.right, o.pbox[b] = f, o.pbox[b + 1] = C;
          for (let b = 0; b < 4; b++)
            for (let g = 0; g < 256; g += 2)
              _ = i(o, f, C), f = _.left, C = _.right, o.sbox[b][g] = f, o.sbox[b][g + 1] = C;
          return !0;
        }
        var p = E.Blowfish = s.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var o = this._keyPriorReset = this._key, B = o.words, l = o.sigBytes / 4;
              x(n, B, l);
            }
          },
          encryptBlock: function(o, B) {
            var l = i(n, o[B], o[B + 1]);
            o[B] = l.left, o[B + 1] = l.right;
          },
          decryptBlock: function(o, B) {
            var l = d(n, o[B], o[B + 1]);
            o[B] = l.left, o[B + 1] = l.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        e.Blowfish = s._createHelper(p);
      }(), a.Blowfish;
    });
  }(ge)), ge.exports;
}
(function(D, m) {
  (function(a, e, u) {
    D.exports = e(V(), V0(), vt(), pt(), A0(), ht(), _0(), Pr(), ze(), Bt(), zr(), Ct(), Et(), At(), qe(), _t(), E0(), r0(), Dt(), Ft(), yt(), bt(), gt(), mt(), kt(), wt(), St(), Rt(), Ht(), Tt(), Pt(), zt(), qt(), Ot(), $t());
  })(U, function(a) {
    return a;
  });
})(Tr);
var Lt = Tr.exports;
const I0 = /* @__PURE__ */ st(Lt);
let O0 = null;
const qr = "__store__", Or = "__store_secret__";
function me(D) {
  const m = I0.lib.WordArray.random(32).toString();
  localStorage.setItem(Or, m);
  const a = I0.AES.encrypt(JSON.stringify(D), m).toString();
  localStorage.setItem(qr, a), O0 = D;
}
function Ut() {
  const D = localStorage.getItem(qr), m = localStorage.getItem(Or);
  if (!D || !m) return null;
  try {
    const e = I0.AES.decrypt(D, m).toString(I0.enc.Utf8);
    return JSON.parse(e);
  } catch (a) {
    return console.error("解密失败", a), null;
  }
}
const ke = {
  /**
   * ⚡ set 只设置权限数组 !!!
   */
  set(D) {
    const a = {
      ...this.get() || {
        permissions: [],
        perEnabled: !0
      },
      permissions: D
      // ✔ 只修改 permissions
    };
    me(a);
  },
  /**
   * ⚡ get 返回完整结构
   */
  get() {
    if (O0 !== null) return O0;
    const D = Ut();
    return D ? (O0 = D, O0) : null;
  },
  /**
   * 判断权限
   */
  hasPer(D) {
    const m = this.get();
    if (!m) return !1;
    const { permissions: a, perEnabled: e } = m;
    return e ? Array.isArray(a) && a.includes(D) : !0;
  },
  /**
   * 🔥 只修改权限开关 → 启用权限
   */
  enabledPer() {
    const D = this.get() || {
      permissions: [],
      perEnabled: !0
    };
    D.perEnabled = !0, me(D);
  },
  /**
   * 🔥 只修改权限开关 → 禁用权限（超级管理员模式）
   */
  disabledPer() {
    const D = this.get() || {
      permissions: [],
      perEnabled: !1
    };
    D.perEnabled = !1, me(D);
  }
}, B0 = {
  TEXT: "text",
  NUMBER: "number",
  SELECT: "select",
  DATE: "date",
  DATE_RANGE: "daterange",
  SWITCH: "switch"
}, It = ["innerHTML"], Wt = {
  __name: "layout-page-column",
  props: {
    template: [String, Object, Function],
    data: Object
  },
  setup(D) {
    const m = D, a = Q(!1), e = v0("columnSlotMap", Q(/* @__PURE__ */ new Map()));
    function u(E, c) {
      if (typeof E === "function") {
        const r = E(c);
        let n = r == null ? void 0 : r.component;
        return n ? (typeof n == "string" && e.value.has(n) && (a.value = !0, n = e.value.get(n)), { type: "component", component: n, props: r.props || {}, content: r.content ?? null }) : { type: "html", content: String(r ?? "") };
      } else
        return { type: "html", content: String(E ?? "") };
    }
    const s = e0(() => u(m.template, m.data));
    return (E, c) => (O(), J(t0, null, [
      s.value.type === "html" ? (O(), J("span", {
        key: 0,
        innerHTML: s.value.content
      }, null, 8, It)) : d0("", !0),
      s.value.type === "component" ? (O(), W(Re(s.value.component), Qr(Z({ key: 1 }, a.value ? { content: s.value.content, props: s.value.props } : s.value.props)), {
        default: G(() => [
          C0(b0(s.value.content), 1)
        ]),
        _: 1
      }, 16)) : d0("", !0)
    ], 64));
  }
};
function Oe() {
  return {
    // ---------- 消息 ----------
    success: (m, a = "top", e = 2e3) => z0({ message: m, type: "success", duration: e, placement: a }),
    error: (m, a = "top", e = 2e3) => z0({ message: m, type: "error", duration: e, placement: a }),
    info: (m, a = "top", e = 2e3) => z0({ message: m, type: "info", duration: e, placement: a }),
    warning: (m, a = "top", e = 2e3) => z0({ message: m, type: "warning", duration: e, placement: a }),
    primary: (m, a = "top", e = 2e3) => z0({ message: m, type: "primary", duration: e, placement: a }),
    // ---------- 确认框 ----------
    confirm: (m, a = "提示", e = "warning") => tt.confirm(m, a, {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: e
    }),
    // ---------- 通知 ----------
    notify: (m, a = "消息", e = "", u = 0) => {
      rt({
        title: a,
        message: m,
        duration: u,
        type: e
      });
    }
  };
}
const Vt = (D, m) => {
  const a = D.__vccOpts || D;
  for (const [e, u] of m)
    a[e] = u;
  return a;
}, Nt = { style: { margin: "25px" } }, Kt = {
  key: 0,
  style: { margin: "10px 0" }
}, Mt = { style: { display: "flex", "justify-content": "flex-end", "margin-top": "16px" } }, jt = {
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
  setup(D) {
    const m = Oe(), a = Q(), e = D, u = Q([]), s = e0(() => e.filter ?? { data: [] }), E = e0(() => {
      var t;
      return ((t = e.table) == null ? void 0 : t.columns) ?? [];
    }), c = e0(() => {
      var t, f;
      return ((t = e.table) == null ? void 0 : t.tableType) === "treetable" ? o(e.table.data) : ((f = e.table) == null ? void 0 : f.data) ?? [];
    }), v = e0(() => {
      var t;
      return ((t = e.table) == null ? void 0 : t.pagination) ?? {
        index: 1,
        size: 10,
        options: [10, 20, 30],
        total: 0
      };
    }), r = e0(() => {
      var t;
      return ((t = e.table) == null ? void 0 : t.attr) ?? {
        loading: !1,
        dataKey: "id",
        dataParentKey: "pid",
        defaultColumnType: "selection",
        enabledDefaultColumn: !0,
        expandAll: !1
      };
    }), n = e0(() => e.tablebar ?? {
      title: "工具栏",
      width: "",
      align: "center",
      position: "right",
      actions: []
    }), h = e0(() => n.value.actions.filter((t) => ke.hasPer(t.perKey))), i = e0(() => e.toolbar ?? { actions: [] }), d = (t) => {
      e.table && (e.table.pagination.size = t);
    }, x = (t) => {
      e.table && (e.table.pagination.index = t, e.table._load());
    }, p = (t) => {
      let f = {};
      t || u.value.forEach((C, _) => {
        C.value = C.defaultValue ?? "";
      }), e.table && (f = l(), e.table._setQueryParams(f), e.table._load());
    }, o = (t) => {
      const f = r.value.dataKey, C = r.value.dataParentKey, _ = (y) => (y == null ? void 0 : y.toString().trim().toLowerCase()) ?? "", b = t.map((y) => ({
        ...y,
        _id: _(y[f]),
        _pid: _(y[C])
      })), g = new Set(b.map((y) => y._id)), T = b.filter((y) => !g.has(y._pid)), A = (y) => {
        const F = b.filter((S) => S._pid === y._id).map((S) => A(S));
        return {
          key: y._id,
          data: y,
          children: F
        };
      };
      return T.map((y) => A(y));
    }, B = (t, f) => {
      var C;
      if (((C = e.table) == null ? void 0 : C.tableType) === "treetable") {
        let _;
        if (a.value !== void 0) {
          const b = Object.keys(a.value || {})[0] || null;
          b !== null && (_ = c.value.find((g) => g[r.value.dataKey].toLowerCase() === b.toLowerCase()));
        }
        t._command(_, f);
      } else
        t._command(a.value, f);
    };
    we(
      () => {
        var t;
        return ((t = e.filter) == null ? void 0 : t.data) ?? [];
      },
      (t) => {
        Array.isArray(t) ? u.value = t.map((f) => ({ ...f })) : u.value = [];
      },
      { immediate: !0 }
    );
    const l = () => {
      let t = {};
      if (e.filter) {
        for (const f of u.value) {
          if (!f.required) continue;
          const C = f.value;
          if (C == null || C === "" || Array.isArray(C) && C.length === 0) {
            m.warning(`请填写【${f.label}】字段`);
            return;
          }
        }
        t = e.filter._buildFunc(u.value);
      }
      return t;
    };
    return W0(() => {
      if (e.table) {
        let t = l();
        e.table._setQueryParams(t), e.table._load();
      }
    }), (t, f) => {
      const C = N("el-input"), _ = N("el-input-number"), b = N("el-option"), g = N("el-select"), T = N("el-date-picker"), A = N("el-switch"), y = N("el-form-item"), F = N("el-col"), S = N("el-button"), q = N("el-row"), $ = N("el-form"), L = N("el-table-column"), j = N("el-table"), K = N("el-pagination"), M = Hr("loading");
      return O(), J(t0, null, [
        q0("div", Nt, [
          q0("section", null, [
            u0($, null, {
              default: G(() => [
                s.value.data.length > 0 ? (O(), W(q, {
                  key: 0,
                  gutter: 20
                }, {
                  default: G(() => [
                    (O(!0), J(t0, null, f0(u.value, (P, k) => (O(), W(F, {
                      xs: 24,
                      sm: 12,
                      md: 8,
                      lg: 6,
                      xl: 4
                    }, {
                      default: G(() => [
                        u0(y, {
                          label: P.label
                        }, {
                          default: G(() => [
                            P.fieldType === z(B0).TEXT ? (O(), W(C, Z({
                              key: 0,
                              modelValue: P.value,
                              "onUpdate:modelValue": (w) => P.value = w,
                              placeholder: P.placeholder
                            }, { ref_for: !0 }, P.fieldAttr), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder"])) : P.fieldType === z(B0).NUMBER ? (O(), W(_, Z({
                              key: 1,
                              modelValue: P.value,
                              "onUpdate:modelValue": (w) => P.value = w,
                              placeholder: P.placeholder
                            }, { ref_for: !0 }, P.fieldAttr), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder"])) : P.fieldType === z(B0).SELECT ? (O(), W(g, Z({
                              key: 2,
                              modelValue: P.value,
                              "onUpdate:modelValue": (w) => P.value = w,
                              placeholder: P.placeholder
                            }, { ref_for: !0 }, P.fieldAttr), {
                              default: G(() => [
                                (O(!0), J(t0, null, f0(P.options, (w) => (O(), W(b, {
                                  key: w.value,
                                  label: w.label,
                                  value: w.value
                                }, null, 8, ["label", "value"]))), 128))
                              ]),
                              _: 2
                            }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder"])) : P.fieldType === z(B0).DATE ? (O(), W(T, Z({
                              key: 3,
                              modelValue: P.value,
                              "onUpdate:modelValue": (w) => P.value = w,
                              type: "date",
                              placeholder: "请选择日期",
                              format: "YYYY-MM-DD",
                              "value-format": "YYYY-MM-DD"
                            }, { ref_for: !0 }, P.fieldAttr), null, 16, ["modelValue", "onUpdate:modelValue"])) : P.fieldType === z(B0).DATE_RANGE ? (O(), W(T, Z({
                              key: 4,
                              modelValue: P.value,
                              "onUpdate:modelValue": (w) => P.value = w,
                              type: "datetimerange",
                              "range-separator": "至",
                              "start-placeholder": "开始日期",
                              "end-placeholder": "结束日期",
                              format: "YYYY-MM-DD HH:mm:ss",
                              "value-format": "YYYY-MM-DD HH:mm:ss"
                            }, { ref_for: !0 }, P.fieldAttr), null, 16, ["modelValue", "onUpdate:modelValue"])) : P.fieldType === z(B0).SWITCH ? (O(), W(A, Z({
                              key: 5,
                              modelValue: P.value,
                              "onUpdate:modelValue": (w) => P.value = w
                            }, { ref_for: !0 }, P.fieldAttr), null, 16, ["modelValue", "onUpdate:modelValue"])) : d0("", !0)
                          ]),
                          _: 2
                        }, 1032, ["label"])
                      ]),
                      _: 2
                    }, 1024))), 256)),
                    u0(F, {
                      xs: 24,
                      sm: 12,
                      md: 8,
                      lg: 6,
                      xl: 4
                    }, {
                      default: G(() => [
                        u0(S, {
                          type: "primary",
                          onClick: f[0] || (f[0] = (P) => p(!0))
                        }, {
                          default: G(() => [...f[3] || (f[3] = [
                            C0("搜索", -1)
                          ])]),
                          _: 1
                        }),
                        u0(S, {
                          onClick: f[1] || (f[1] = (P) => p(!1))
                        }, {
                          default: G(() => [...f[4] || (f[4] = [
                            C0("重置", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : d0("", !0)
              ]),
              _: 1
            })
          ]),
          i.value.actions.length > 0 ? (O(), J("section", Kt, [
            (O(!0), J(t0, null, f0(i.value.actions, (P, k) => (O(), J(t0, { key: k }, [
              z(ke).hasPer(P.perKey) ? (O(), W(S, {
                key: 0,
                icon: P.icon,
                type: P.type ?? "",
                onClick: (w) => B(P, w),
                plain: ""
              }, {
                default: G(() => [
                  C0(b0(P.label), 1)
                ]),
                _: 2
              }, 1032, ["icon", "type", "onClick"])) : d0("", !0)
            ], 64))), 128))
          ])) : d0("", !0),
          q0("section", null, [
            Se((O(), W(j, {
              data: c.value,
              "row-key": r.value.dataKey,
              "default-expand-all": r.value.expandAll,
              stripe: "",
              border: "",
              "element-loading-text": "加载中...",
              "element-loading-spinner": "el-icon-loading",
              "element-loading-background": "rgba(255, 255, 255, 0.7)",
              style: { width: "100%" }
            }, {
              default: G(() => [
                r.value.enabledDefaultColumn ? (O(), W(L, {
                  key: 0,
                  type: r.value.defaultColumnType
                }, null, 8, ["type"])) : d0("", !0),
                (O(!0), J(t0, null, f0(E.value, (P, k) => (O(), W(L, Z({
                  prop: P.field,
                  "show-overflow-tooltip": !0
                }, { ref_for: !0 }, P.attrs), Zr({ _: 2 }, [
                  P.template && P.template !== void 0 ? {
                    name: "default",
                    fn: G((w) => [
                      u0(Wt, {
                        template: P.template,
                        data: w.row
                      }, null, 8, ["template", "data"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040, ["prop"]))), 256)),
                h.value.length > 0 ? (O(), W(L, {
                  key: 1,
                  label: n.value.title,
                  fixed: n.value.position,
                  width: n.value.width || "auto",
                  align: n.value.align
                }, {
                  default: G((P) => [
                    (O(!0), J(t0, null, f0(n.value.actions, (k, w) => (O(), J(t0, { key: w }, [
                      z(ke).hasPer(k.perKey) && k._hideFunc(P.row) ? (O(), W(S, {
                        key: 0,
                        icon: k.icon,
                        type: k.type ?? "primary",
                        size: "small",
                        link: "",
                        onClick: (H) => k._command(P.row, H)
                      }, {
                        default: G(() => [
                          C0(b0(k.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["icon", "type", "onClick"])) : d0("", !0)
                    ], 64))), 128))
                  ]),
                  _: 1
                }, 8, ["label", "fixed", "width", "align"])) : d0("", !0)
              ]),
              _: 1
            }, 8, ["data", "row-key", "default-expand-all"])), [
              [M, r.value.loading]
            ]),
            q0("div", Mt, [
              u0(K, {
                background: "",
                layout: "total, sizes, prev, pager, next",
                "current-page": v.value.index,
                "onUpdate:currentPage": f[2] || (f[2] = (P) => v.value.index = P),
                total: v.value.total,
                "page-size": v.value.size,
                "page-sizes": v.value.options,
                onChange: x,
                onSizeChange: d
              }, null, 8, ["current-page", "total", "page-size", "page-sizes"])
            ])
          ])
        ]),
        u0(it, {
          ref: "dialogRef",
          dialog: D.dialog
        }, null, 8, ["dialog"])
      ], 64);
    };
  }
}, sa = /* @__PURE__ */ Vt(jt, [["__scopeId", "data-v-54c2bd7f"]]), s0 = {
  INPUT_TEXT: "input_text",
  INPUT_NUMBER: "input_number",
  INPUT_TEXTAREA: "input_textarea",
  DATE_PICKER: "date_picker",
  TIME_PICKER: "time_picker",
  RADIO_BUTTON: "radio_button",
  CHECKBOX: "checkbox",
  TOGGLE_BUTTON: "toggle_button",
  SELECT: "select",
  TREE_SELECT: "tree_select"
}, Xt = {
  __name: "layout-form-item",
  props: {
    item: Object,
    data: Object
  },
  setup(D) {
    var h, i;
    const m = D, a = m.data, e = (h = m.item) == null ? void 0 : h.field, u = (i = m.item) == null ? void 0 : i.fieldType, s = e0(() => {
      const d = m.item, x = d == null ? void 0 : d.fieldAttr;
      if (d.attrFunc) {
        let p = d.attrFunc(a, d.fieldAttr);
        Object.assign(x, p);
      }
      return x;
    }), E = Q(!1), c = v0("formSlotMap", Q(/* @__PURE__ */ new Map())), v = e0(() => {
      const d = m.item.component;
      return d ? typeof d == "object" || typeof d == "function" ? d : typeof d == "string" && c.value.has(d) ? (E.value = !0, c.value.get(d)) : null : null;
    }), r = (d) => {
      m.item.command(d, m.item, a);
    }, n = (d) => {
      a[m.item.field] = d, r(d);
    };
    return (d, x) => {
      const p = N("el-input"), o = N("el-input-number"), B = N("el-date-picker"), l = N("el-time-picker"), t = N("el-radio"), f = N("el-radio-group"), C = N("el-checkbox"), _ = N("el-checkbox-group"), b = N("el-option"), g = N("el-select"), T = N("el-tree-select"), A = N("el-switch"), y = N("el-form-item");
      return O(), W(y, {
        label: s.value.label,
        prop: z(e)
      }, {
        default: G(() => [
          v.value ? (O(), W(Re(v.value), Z({
            key: 0,
            onUpdate: x[0] || (x[0] = (F) => n(F))
          }, E.value ? { data: z(a), fieldAttr: s.value } : z(a)), null, 16)) : z(u) === z(s0).INPUT_TEXT ? (O(), W(p, Z({
            key: 1,
            modelValue: z(a)[z(e)],
            "onUpdate:modelValue": x[1] || (x[1] = (F) => z(a)[z(e)] = F),
            onInput: x[2] || (x[2] = (F) => r(F))
          }, s.value), null, 16, ["modelValue"])) : z(u) === z(s0).INPUT_TEXTAREA ? (O(), W(p, Z({
            key: 2,
            type: "textarea",
            modelValue: z(a)[z(e)],
            "onUpdate:modelValue": x[3] || (x[3] = (F) => z(a)[z(e)] = F),
            onInput: x[4] || (x[4] = (F) => r(F))
          }, s.value), null, 16, ["modelValue"])) : z(u) === z(s0).INPUT_NUMBER ? (O(), W(o, Z({
            key: 3,
            modelValue: z(a)[z(e)],
            "onUpdate:modelValue": x[5] || (x[5] = (F) => z(a)[z(e)] = F),
            onChange: x[6] || (x[6] = (F) => r(F)),
            style: { width: "100%" }
          }, s.value), null, 16, ["modelValue"])) : z(u) === z(s0).DATE_PICKER ? (O(), W(B, Z({
            key: 4,
            modelValue: z(a)[z(e)],
            "onUpdate:modelValue": x[7] || (x[7] = (F) => z(a)[z(e)] = F),
            type: "date",
            onChange: x[8] || (x[8] = (F) => r(F)),
            style: { width: "100%" }
          }, s.value), null, 16, ["modelValue"])) : z(u) === z(s0).TIME_PICKER ? (O(), W(l, Z({
            key: 5,
            modelValue: z(a)[z(e)],
            "onUpdate:modelValue": x[9] || (x[9] = (F) => z(a)[z(e)] = F),
            onChange: x[10] || (x[10] = (F) => r(F)),
            style: { width: "100%" }
          }, s.value), null, 16, ["modelValue"])) : z(u) === z(s0).RADIO_BUTTON ? (O(), W(f, Z({
            key: 6,
            modelValue: z(a)[z(e)],
            "onUpdate:modelValue": x[11] || (x[11] = (F) => z(a)[z(e)] = F),
            onChange: x[12] || (x[12] = (F) => r(F))
          }, s.value), {
            default: G(() => [
              (O(!0), J(t0, null, f0(s.value.options, (F) => (O(), W(t, {
                key: F.value,
                label: F.value
              }, {
                default: G(() => [
                  C0(b0(F.label), 1)
                ]),
                _: 2
              }, 1032, ["label"]))), 128))
            ]),
            _: 1
          }, 16, ["modelValue"])) : z(u) === z(s0).CHECKBOX ? (O(), W(_, Z({
            key: 7,
            modelValue: z(a)[z(e)],
            "onUpdate:modelValue": x[13] || (x[13] = (F) => z(a)[z(e)] = F),
            onChange: x[14] || (x[14] = (F) => r(F))
          }, s.value), {
            default: G(() => [
              (O(!0), J(t0, null, f0(s.value.options, (F) => (O(), W(C, {
                key: F.value,
                label: F.value
              }, {
                default: G(() => [
                  C0(b0(F.label), 1)
                ]),
                _: 2
              }, 1032, ["label"]))), 128))
            ]),
            _: 1
          }, 16, ["modelValue"])) : z(u) === z(s0).SELECT ? (O(), W(g, Z({
            key: 8,
            modelValue: z(a)[z(e)],
            "onUpdate:modelValue": x[15] || (x[15] = (F) => z(a)[z(e)] = F),
            onChange: x[16] || (x[16] = (F) => r(F)),
            style: { width: "100%" }
          }, s.value), {
            default: G(() => [
              (O(!0), J(t0, null, f0(s.value.options, (F) => (O(), W(b, {
                key: F.value,
                label: F.label,
                value: F.value
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 16, ["modelValue"])) : z(u) === z(s0).TREE_SELECT ? (O(), W(T, Z({
            key: 9,
            modelValue: z(a)[z(e)],
            "onUpdate:modelValue": x[17] || (x[17] = (F) => z(a)[z(e)] = F),
            data: s.value.options,
            "value-key": s.value.valueKey || "id",
            "show-checkbox": s.value.showCheck ?? !0,
            "render-after-expand": !1,
            props: s.value.props,
            style: { width: "100%" },
            "check-strictly": "",
            onChange: x[18] || (x[18] = (F) => r(F))
          }, s.value), null, 16, ["modelValue", "data", "value-key", "show-checkbox", "props"])) : z(u) === z(s0).TOGGLE_BUTTON ? (O(), W(A, Z({
            key: 10,
            modelValue: z(a)[z(e)],
            "onUpdate:modelValue": x[19] || (x[19] = (F) => z(a)[z(e)] = F),
            onChange: x[20] || (x[20] = (F) => r(F))
          }, s.value), null, 16, ["modelValue"])) : d0("", !0)
        ]),
        _: 1
      }, 8, ["label", "prop"]);
    };
  }
}, Gt = {
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
  setup(D, { expose: m }) {
    const a = D, e = Q(null), u = o0(a.config ?? []), s = o0(a.data ?? {}), E = e0(() => {
      const v = {};
      return a.config.flat().forEach((r) => {
        const n = r.hideFunc ? r.hideFunc(s) : !0, h = [];
        r.fieldAttr.require && n && (h.push({
          required: !0,
          message: `${r.fieldAttr.label}为必填项`,
          trigger: "blur"
        }), Array.isArray(r.rules) && h.push(...r.rules), v[r.field] = h);
      }), v;
    }), c = (v, r) => {
      const n = v.filter((x) => x.hideFunc(s)).length, h = 24, i = Math.floor(h / n), d = h % n;
      return i + (r < d ? 1 : 0);
    };
    return m({
      formRef: e,
      formData: s,
      valid: () => new Promise((v, r) => {
        var n;
        (n = e.value) == null || n.validate((h, i) => {
          h ? v(!0) : r(i);
        });
      }),
      reset: () => {
        var v;
        return (v = e.value) == null ? void 0 : v.resetFields();
      }
    }), (v, r) => {
      const n = N("el-col"), h = N("el-row"), i = N("el-form");
      return O(), W(i, {
        model: s,
        rules: E.value,
        ref_key: "formRef",
        ref: e,
        "label-width": "auto"
      }, {
        default: G(() => [
          (O(!0), J(t0, null, f0(u, (d, x) => (O(), W(h, { key: x }, {
            default: G(() => [
              (O(!0), J(t0, null, f0(d, (p, o) => Se((O(), W(n, {
                key: p.field,
                span: c(d, o)
              }, {
                default: G(() => [
                  u0(Xt, {
                    item: p,
                    data: s
                  }, null, 8, ["item", "data"])
                ]),
                _: 2
              }, 1032, ["span"])), [
                [Jr, p.hideFunc(s)]
              ])), 128))
            ]),
            _: 2
          }, 1024))), 128))
        ]),
        _: 1
      }, 8, ["model", "rules"]);
    };
  }
}, la = {
  __name: "dialog-content-slot",
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup(D) {
    const m = D, a = v0("dialogSlotMap"), e = He();
    return W0(() => {
      a.value.set(m.name, g0({ render: () => {
        var u;
        return (u = e.default) == null ? void 0 : u.call(e);
      } }));
    }), Te(() => {
      a.value.delete(m.name);
    }), (u, s) => null;
  }
}, ca = {
  __name: "form-item-slot",
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  emits: ["update"],
  setup(D, { emit: m }) {
    const a = D, e = v0("formSlotMap"), u = He();
    return W0(() => {
      const s = u.default;
      e.value.set(
        a.name,
        g0({
          // 这里返回的是函数式组件对象
          setup(E, { emit: c, attrs: v }) {
            return () => s == null ? void 0 : s({
              props: E,
              // 外部传入的数据都在 attrs
              data: v.data,
              fieldArr: v.fieldArr,
              emit: c
            });
          },
          emits: ["update"]
        })
      );
    }), Te(() => {
      e.value.delete(a.name);
    }), (s, E) => null;
  }
}, fa = {
  __name: "column-item-slot",
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup(D) {
    const m = D, a = v0("columnSlotMap"), e = He();
    return W0(() => {
      const u = e.default;
      a.value.set(
        m.name,
        g0({
          // 这里返回的是函数式组件对象
          setup(s, { attrs: E }) {
            return () => u == null ? void 0 : u({
              props: s,
              // 外部传入的数据都在 attrs
              attrs: E.props,
              content: E.content
            });
          }
        })
      );
    }), Te(() => {
      a.value.delete(m.name);
    }), (u, s) => null;
  }
};
function Yt() {
  const D = Q([]), m = o0({
    instance: null,
    //dialogs: readonly(_dialogs.value),
    registerProvide(a, e) {
      if (typeof a != "string")
        return console.warn("[dialog] registerProvide: key 必须为 string，收到:", a), this;
      let u = v0("dialogSlotMap", null);
      return u || (u = Q(/* @__PURE__ */ new Map()), Pe("dialogSlotMap", u)), u.value.set(a, g0(e)), this;
    },
    register(a) {
      const e = `${Date.now()}-${Math.random()}`, u = o0({
        id: e,
        visible: !1,
        loading: !1,
        attrs: {
          title: a || "",
          alignCenter: !1,
          fullscreen: !1,
          draggable: !1,
          width: "50%",
          center: !1
        },
        component: null,
        propsData: {},
        withCancel: !0,
        _actions: [],
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
        }
      }), s = () => u, E = () => (u.withCancel = !1, p), c = (o) => (u.attrs.title = o, p), v = (o = {}) => typeof o != "object" ? this : (Object.assign(u.attrs, o), p), r = (o = "", B = () => {
      }, l = "info", t = "") => {
        const f = u._actions.findIndex((C) => C.label === o);
        return f > -1 ? u._actions[f] = { label: o, icon: t, type: l, loading: !1, command: B } : u._actions.push({ label: o, icon: t, type: l, loading: !1, command: B }), p;
      }, n = (o, B) => (o && (u.component = g0(o)), B && (async () => {
        u.loading = !0;
        try {
          const t = typeof B == "function" ? await B() : B;
          u.propsData = t && typeof t == "object" ? { ...Rr(t) } : {};
        } catch (t) {
          console.error("propsData 加载失败:", t), u.propsData = {};
        } finally {
          u.loading = !1;
        }
      })(), p), h = (o) => n("form", o), i = () => {
        u.visible = !0, m.instance = {
          get: s,
          destroy: x,
          hide: d
        };
      }, d = () => u.visible = !1, x = () => {
        m.instance && (u.propsData && Object.keys(u.propsData).forEach((o) => u.propsData[o] = void 0), u.visible = !1, u.loading = !1);
      }, p = {
        show: i,
        hide: d,
        destroy: x,
        setTitle: c,
        setAttr: v,
        setBtn: r,
        setComponent: n,
        setForm: h,
        disabledCancel: E
      };
      return D.value.push(u), p;
    }
  });
  return m;
}
const Qt = () => {
  let D = v0("formSlotMap", null);
  D || (D = Q(/* @__PURE__ */ new Map()), Pe("formSlotMap", D));
}, Zt = (D) => {
  const m = {
    setColumn(a, e, u = "") {
      const s = {
        field: a,
        fieldType: s0.INPUT_TEXT,
        fieldAttr: {
          label: u || a,
          placeholder: `请输入${u}`,
          require: !1,
          options: []
        },
        rules: [],
        hideFunc: () => !0,
        attrFunc: null,
        command: () => {
        }
      };
      D.push(s);
      const E = {
        setRule(c) {
          return s.rules = c, E;
        },
        setLabel(c) {
          return s.fieldAttr.label = c, s.fieldAttr.placeholder = `请输入${c}`, E;
        },
        setOptions(c) {
          return s.fieldType = s0.SELECT, s.fieldAttr.options = c, E;
        },
        setType(c) {
          return s.fieldType = c, E;
        },
        setPlaceholder(c) {
          return s.fieldAttr.placeholder = c, E;
        },
        onRequire() {
          return s.fieldAttr.require = !0, E;
        },
        setAttr(c = {}) {
          return typeof c != "object" || Object.assign(s.fieldAttr, c), E;
        },
        setComponent(c) {
          return c && (s.component = g0(c)), E;
        },
        hide(c) {
          return s.hideFunc = c, E;
        },
        on(c) {
          return s.command = c, E;
        },
        change(c) {
          return s.attrFunc = c, E;
        },
        setColumn: m.setColumn
      };
      return typeof e == "function" ? (e(E), m) : E;
    }
  };
  return m;
};
function Jt() {
  Qt();
  const D = Q([]), m = o0({
    list: m0(D.value),
    get: (a) => D.value.find((e) => e.id === a),
    register(a = "") {
      a = a || `form_${Date.now()}_${D.value.length}`, m.get(a) && console.warn(`Form with id "${a}" already exists. Returning the existing form.`);
      const u = o0({
        id: a,
        data: {},
        config: [],
        setRow() {
          const s = [];
          return this.config.push(s), Zt(s);
        },
        setData(s) {
          return this.data = s, this;
        }
      });
      return D.value.push(u), u;
    }
  });
  return m;
}
const ea = () => {
  let D = v0("columnSlotMap", null);
  D || (D = Q(/* @__PURE__ */ new Map()), Pe("columnSlotMap", D));
};
function ra() {
  ea();
  const D = Oe(), m = Q([]), a = Q([]), e = Q({}), u = Q(null), s = o0({
    tableType: "default",
    data: e0(() => a.value),
    columns: e0(() => m.value),
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
      defaultColumnType: "selection",
      enabledDefaultColumn: !0,
      expandAll: !1
      //treeProps: "{ hasChildren: 'hasChildren', children: 'children', checkStrictly: false }",
    },
    _setQueryParams: (E) => {
      e.value = E;
    },
    setPageSize: (E) => {
      s.pagination.size = E;
    },
    setPageOptions: (E) => {
      s.pagination.options = E;
    },
    setRowKey: (E) => {
      s.attr.dataKey = E;
    },
    setParentKey: (E) => {
      s.attr.dataParentKey = E;
    },
    setDefaultColumnType: (E) => {
      s.attr.defaultColumnType = E;
    },
    disabledDefaultCloumn: () => {
      s.attr.enabledDefaultColumn = !1;
    },
    enableTree: () => {
      s.tableType = "treetable";
    },
    setColumn: (E, c = "") => {
      const v = {
        field: E,
        attrs: {
          width: "",
          label: c || E,
          showOverflowTooltip: !0
        },
        template: void 0,
        setAttr(r = {}) {
          return typeof r != "object" ? this : (Object.assign(v.attrs, r), this);
        },
        setTemplate(r) {
          return this.template = r, this;
        }
      };
      return m.value.push(v), v;
    },
    registerLoader: (E) => {
      u.value = E;
    },
    _load: async () => {
      if (typeof u.value != "function") {
        console.warn("未设置 load 函数，请使用 table.registerLoader(fn) 进行设置");
        return;
      }
      s.loading = !0;
      const { index: E = 1, size: c = 10 } = s.pagination ?? {};
      try {
        const v = await u.value({ index: E, size: c }, e.value);
        switch (s.tableType) {
          case "treetable":
            a.value = v;
            break;
          case "default":
          default:
            a.value = v.records ?? [];
            break;
        }
        s.pagination !== null && (s.pagination.total = v.total ?? 0);
      } catch (v) {
        D.error("表格加载数据失败，请稍后重试"), console.error("表格加载数据失败:", v);
      } finally {
        s.loading = !1;
      }
    },
    reload: async () => {
      s.pagination !== null && (s.pagination.index = 1), await s._load();
    }
  });
  return s;
}
function ta() {
  const D = Q([]), m = et(), a = m == null ? void 0 : m.appContext.config.globalProperties.$layoutkitBuildDataFunc, e = o0({
    _overrideBuildFunc: null,
    data: m0(D.value),
    _buildFunc: (u) => e._overrideBuildFunc && typeof e._overrideBuildFunc == "function" ? e._overrideBuildFunc(u) : a && typeof a == "function" ? a(u) : Object.fromEntries(
      u.map((s) => [s.field, s.value])
    ),
    register: (u, s = "") => {
      const E = o0({
        field: u,
        fieldType: B0.TEXT,
        fieldAttr: {
          label: s || u,
          placeholder: `请输入${s || u}`,
          options: [],
          style: void 0
        },
        fieldOperator: "=",
        value: "",
        defaultValue: "",
        required: !1
      }), c = {
        setAttr(v = {}) {
          return typeof v != "object" || Object.assign(E.fieldAttr, v), c;
        },
        setOptions(v) {
          return E.fieldType = B0.SELECT, E.fieldAttr.options = v, c;
        },
        setType(v) {
          return E.fieldType = v, c;
        },
        setValue(v) {
          return E.value = v, c;
        },
        setDefaultValue(v) {
          return E.value = v, E.defaultValue = v, c;
        },
        setOperator(v) {
          return E.fieldOperator = v, c;
        },
        setPlaceholder(v) {
          return E.fieldAttr.placeholder = v, c;
        },
        onRequire() {
          return E.required = !0, c;
        }
      };
      return D.value.push(E), c;
    },
    registerBuildDataFunc: (u) => {
      u && typeof u == "function" && (e._overrideBuildFunc = u);
    }
  });
  return e;
}
function aa(D) {
  const m = Q([]);
  return o0({
    actions: m0(m.value),
    register: (e, u) => {
      let s = `action_${Date.now()}_${m.value.length}`, E = D.get(s);
      const c = { id: s, perKey: E, label: e, icon: "", type: "primary", _command: () => {
      } };
      m.value.push(c);
      const v = {
        enabledPer(r) {
          return c.id = r, c.perKey = D.get(r), v;
        },
        setAttr(r = {}) {
          return "icon" in r && (c.icon = r.icon), "type" in r && (c.type = r.type), v;
        },
        on(r) {
          return c._command = r, v;
        }
      };
      return typeof u == "function" ? (u(v), v) : {
        ...c,
        ...v
      };
    },
    get(e) {
      const u = m.value.find((s) => s.id === e);
      return u ? {
        ...u,
        on(s) {
          return u._command = s, this;
        }
      } : (console.warn(`未找到 toolbar 动作 id = '${e}'`), {
        on: () => {
        }
        // 空方法防止报错
      });
    }
  });
}
function na(D) {
  const m = Q([]), a = o0({
    title: "工具栏",
    width: "auto",
    align: "center",
    position: "right",
    // 另外一个 left
    actions: m0(m.value),
    register: (e, u) => {
      let s = `action_${Date.now()}_${m.value.length}`, E = D.get(s);
      const c = { id: s, perKey: E, label: e, icon: "", type: "primary", _command: () => {
      }, _hideFunc: () => !0 };
      m.value.push(c);
      const v = {
        enabledPer(r) {
          return c.id = r, c.perKey = D.get(r), v;
        },
        setAttr(r = {}) {
          return "icon" in r && (c.icon = r.icon), "type" in r && (c.type = r.type), v;
        },
        hide(r) {
          return c._hideFunc = r, v;
        },
        on(r) {
          return c._command = r, v;
        }
      };
      return typeof u == "function" ? (u(v), v) : {
        ...c,
        ...v
      };
    },
    setAttr(e = {}) {
      return "title" in e && (obj.title = e.title), "width" in e && (obj.width = e.width), "align" in e && (obj.align = e.align), "position" in e && (obj.position = e.position), api;
    },
    setTitle: (e) => {
      a.title = e;
    },
    setWidth: (e) => {
      a.width = e;
    },
    setAlign: (e) => {
      a.align = e;
    },
    setPosition: (e) => {
      a.position = e;
    },
    get(e) {
      e = D.get(e);
      const u = m.value.find((s) => s.id === e);
      return u ? {
        ...u,
        hide(s) {
          return u._hideFunc = s, this;
        },
        on(s) {
          return u._command = s, this;
        }
      } : (console.warn(`未找到 tablebar 动作 id = '${e}'`), {
        on: () => {
        }
        // 空方法防止报错
      });
    }
  });
  return a;
}
function xa() {
  const D = Q({});
  return {
    permission: m0(D.value),
    register: (a, e) => {
      D.value[a] = e;
    },
    get: (a) => D.value[a]
  };
}
function ua() {
  const D = xa(), m = aa(D), a = na(D), e = ta(), u = ra(), s = Jt(), E = Oe(), c = Yt();
  c.registerProvide("form", Gt);
  const v = Q({}), r = o0({
    setData(n) {
      return typeof n == "object" && n !== null && Object.keys(n).forEach((h) => {
        v.value[h] = n[h];
      }), this;
    },
    getData() {
      return m0(v.value);
    },
    watch(n, h = {}) {
      return we(() => toRaw(v.value), n, { deep: !0, ...h });
    }
  });
  return { table: u, toolbar: m, tablebar: a, filter: e, dialog: c, form: s, key: D, message: E, propsData: r };
}
const da = {
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
  fa as ColumnItemSlot,
  la as DialogContentSlot,
  B0 as FilterEnum,
  da as FilterOperatorEnum,
  s0 as FormEnum,
  ca as FormItemSlot,
  it as LayoutDialog,
  Gt as LayoutForm,
  sa as LayoutPage,
  ke as store,
  ua as useConfig,
  Yt as useDialog,
  Jt as useForm,
  Oe as useMessage
};
