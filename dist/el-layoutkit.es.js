import { reactive as u0, ref as Y, computed as e0, inject as v0, resolveComponent as N, resolveDirective as Rr, createElementBlock as J, openBlock as O, createVNode as c0, mergeProps as Z, withCtx as G, withDirectives as Se, createBlock as W, resolveDynamicComponent as Re, createElementVNode as U0, Fragment as x0, renderList as f0, createTextVNode as C0, toDisplayString as y0, toRaw as we, createCommentVNode as d0, normalizeProps as Qr, watch as Hr, onMounted as W0, unref as q, createSlots as Zr, vShow as Jr, useSlots as He, markRaw as g0, onBeforeUnmount as Te, provide as Pe, readonly as m0, getCurrentInstance as et } from "vue";
import { ElMessage as z0, ElNotification as rt, ElMessageBox as tt } from "element-plus";
function at() {
  return u0({
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
  setup(D, { emit: g }) {
    const n = Y({}), e = Y(null), s = at(), c = Y(`${Date.now()}-${Math.random()}`), B = D, u = e0(() => B.dialog.instance), f = e0(() => {
      var h;
      return (h = u.value) == null ? void 0 : h.get();
    }), r = e0({
      get: () => {
        var h;
        return ((h = f.value) == null ? void 0 : h.visible) ?? !1;
      },
      set: (h) => C("update:visible", h)
    }), t = e0(() => {
      var a;
      const h = { ...s }, o = ((a = f.value) == null ? void 0 : a.attrs) || {};
      return Object.keys(h).forEach((l) => {
        l in o && (h[l] = o[l]);
      }), h;
    }), C = g, i = v0("dialogSlotMap", Y(/* @__PURE__ */ new Map())), p = e0(() => {
      var o;
      const h = (o = f.value) == null ? void 0 : o.component;
      return h ? typeof h == "string" ? i.value.get(h) || null : typeof h == "object" || typeof h == "function" ? h : null : null;
    }), d = () => {
      var h;
      n.value = {}, (h = u.value) == null || h.destroy();
    }, v = async (h) => {
      if (!(!h || typeof h.command != "function")) {
        h.loading = !0;
        try {
          const o = h.command(u.value, e.value);
          o instanceof Promise && await o;
        } catch (o) {
          console.error("事件执行失败:", o);
        } finally {
          h.loading = !1;
        }
      }
    }, x = async () => {
      var h, o;
      try {
        const a = typeof f.value.propsData == "function" ? await f.value.propsData() : f.value.propsData;
        n.value = a && typeof a == "object" ? { ...we(a) } : {}, ((h = f.value) == null ? void 0 : h.component) === "form" && ((o = f.value) != null && o.formData) && (n.value = {
          ...f.value.propsData,
          data: we(f.value.formData)
        });
      } catch (a) {
        console.error("propsData 加载失败:", a), n.value = {};
      } finally {
        f.value.loading = !1, c.value = `${Date.now()}-${Math.random()}`;
      }
    };
    return (h, o) => {
      const a = N("el-button"), l = N("el-dialog"), A = Rr("loading");
      return O(), J("div", null, [
        c0(l, Z({
          modelValue: r.value,
          "onUpdate:modelValue": o[0] || (o[0] = (_) => r.value = _),
          onClosed: o[1] || (o[1] = (_) => d()),
          onOpened: x
        }, t.value), {
          footer: G(() => {
            var _;
            return [
              U0("div", ot, [
                (O(!0), J(x0, null, f0(((_ = f.value) == null ? void 0 : _.actions) ?? [], (b, y) => (O(), W(a, {
                  key: y,
                  type: b.type,
                  icon: b.icon,
                  loading: b.loading,
                  onClick: (P) => v(b)
                }, {
                  default: G(() => [
                    C0(y0(b.label), 1)
                  ]),
                  _: 2
                }, 1032, ["type", "icon", "loading", "onClick"]))), 128))
              ])
            ];
          }),
          default: G(() => [
            Se((O(), J("div", nt, [
              p.value ? (O(), W(Re(p.value), Z({
                key: c.value,
                ref_key: "componentRef",
                ref: e
              }, n.value), null, 16)) : (O(), J("div", xt, " ⚠️ 无内容可展示，请检查 component 是否传入正确。 "))
            ])), [
              [A, f.value.loading]
            ])
          ]),
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
  var g = D.default;
  if (typeof g == "function") {
    var n = function e() {
      return this instanceof e ? Reflect.construct(g, arguments, this.constructor) : g.apply(this, arguments);
    };
    n.prototype = g.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(D).forEach(function(e) {
    var s = Object.getOwnPropertyDescriptor(D, e);
    Object.defineProperty(n, e, s.get ? s : {
      enumerable: !0,
      get: function() {
        return D[e];
      }
    });
  }), n;
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
  return Ye || (Ye = 1, function(D, g) {
    (function(n, e) {
      D.exports = e();
    })(U, function() {
      var n = n || function(e, s) {
        var c;
        if (typeof window < "u" && window.crypto && (c = window.crypto), typeof self < "u" && self.crypto && (c = self.crypto), typeof globalThis < "u" && globalThis.crypto && (c = globalThis.crypto), !c && typeof window < "u" && window.msCrypto && (c = window.msCrypto), !c && typeof U < "u" && U.crypto && (c = U.crypto), !c && typeof ct == "function")
          try {
            c = dt;
          } catch {
          }
        var B = function() {
          if (c) {
            if (typeof c.getRandomValues == "function")
              try {
                return c.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof c.randomBytes == "function")
              try {
                return c.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, u = Object.create || /* @__PURE__ */ function() {
          function o() {
          }
          return function(a) {
            var l;
            return o.prototype = a, l = new o(), o.prototype = null, l;
          };
        }(), f = {}, r = f.lib = {}, t = r.Base = /* @__PURE__ */ function() {
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
            extend: function(o) {
              var a = u(this);
              return o && a.mixIn(o), (!a.hasOwnProperty("init") || this.init === a.init) && (a.init = function() {
                a.$super.init.apply(this, arguments);
              }), a.init.prototype = a, a.$super = this, a;
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
              var o = this.extend();
              return o.init.apply(o, arguments), o;
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
            mixIn: function(o) {
              for (var a in o)
                o.hasOwnProperty(a) && (this[a] = o[a]);
              o.hasOwnProperty("toString") && (this.toString = o.toString);
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
        }(), C = r.WordArray = t.extend({
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
          init: function(o, a) {
            o = this.words = o || [], a != s ? this.sigBytes = a : this.sigBytes = o.length * 4;
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
          toString: function(o) {
            return (o || p).stringify(this);
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
          concat: function(o) {
            var a = this.words, l = o.words, A = this.sigBytes, _ = o.sigBytes;
            if (this.clamp(), A % 4)
              for (var b = 0; b < _; b++) {
                var y = l[b >>> 2] >>> 24 - b % 4 * 8 & 255;
                a[A + b >>> 2] |= y << 24 - (A + b) % 4 * 8;
              }
            else
              for (var P = 0; P < _; P += 4)
                a[A + P >>> 2] = l[P >>> 2];
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
            var o = this.words, a = this.sigBytes;
            o[a >>> 2] &= 4294967295 << 32 - a % 4 * 8, o.length = e.ceil(a / 4);
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
            var o = t.clone.call(this);
            return o.words = this.words.slice(0), o;
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
          random: function(o) {
            for (var a = [], l = 0; l < o; l += 4)
              a.push(B());
            return new C.init(a, o);
          }
        }), i = f.enc = {}, p = i.Hex = {
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
          stringify: function(o) {
            for (var a = o.words, l = o.sigBytes, A = [], _ = 0; _ < l; _++) {
              var b = a[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
              A.push((b >>> 4).toString(16)), A.push((b & 15).toString(16));
            }
            return A.join("");
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
          parse: function(o) {
            for (var a = o.length, l = [], A = 0; A < a; A += 2)
              l[A >>> 3] |= parseInt(o.substr(A, 2), 16) << 24 - A % 8 * 4;
            return new C.init(l, a / 2);
          }
        }, d = i.Latin1 = {
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
          stringify: function(o) {
            for (var a = o.words, l = o.sigBytes, A = [], _ = 0; _ < l; _++) {
              var b = a[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
              A.push(String.fromCharCode(b));
            }
            return A.join("");
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
          parse: function(o) {
            for (var a = o.length, l = [], A = 0; A < a; A++)
              l[A >>> 2] |= (o.charCodeAt(A) & 255) << 24 - A % 4 * 8;
            return new C.init(l, a);
          }
        }, v = i.Utf8 = {
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
          stringify: function(o) {
            try {
              return decodeURIComponent(escape(d.stringify(o)));
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
          parse: function(o) {
            return d.parse(unescape(encodeURIComponent(o)));
          }
        }, x = r.BufferedBlockAlgorithm = t.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new C.init(), this._nDataBytes = 0;
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
          _append: function(o) {
            typeof o == "string" && (o = v.parse(o)), this._data.concat(o), this._nDataBytes += o.sigBytes;
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
          _process: function(o) {
            var a, l = this._data, A = l.words, _ = l.sigBytes, b = this.blockSize, y = b * 4, P = _ / y;
            o ? P = e.ceil(P) : P = e.max((P | 0) - this._minBufferSize, 0);
            var E = P * b, F = e.min(E * 4, _);
            if (E) {
              for (var R = 0; R < E; R += b)
                this._doProcessBlock(A, R);
              a = A.splice(0, E), l.sigBytes -= F;
            }
            return new C.init(a, F);
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
            var o = t.clone.call(this);
            return o._data = this._data.clone(), o;
          },
          _minBufferSize: 0
        });
        r.Hasher = x.extend({
          /**
           * Configuration options.
           */
          cfg: t.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(o) {
            this.cfg = this.cfg.extend(o), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            x.reset.call(this), this._doReset();
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
          update: function(o) {
            return this._append(o), this._process(), this;
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
          finalize: function(o) {
            o && this._append(o);
            var a = this._doFinalize();
            return a;
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
          _createHelper: function(o) {
            return function(a, l) {
              return new o.init(l).finalize(a);
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
          _createHmacHelper: function(o) {
            return function(a, l) {
              return new h.HMAC.init(o, l).finalize(a);
            };
          }
        });
        var h = f.algo = {};
        return f;
      }(Math);
      return n;
    });
  }(M0)), M0.exports;
}
var j0 = { exports: {} }, Qe;
function V0() {
  return Qe || (Qe = 1, function(D, g) {
    (function(n, e) {
      D.exports = e(V());
    })(U, function(n) {
      return function(e) {
        var s = n, c = s.lib, B = c.Base, u = c.WordArray, f = s.x64 = {};
        f.Word = B.extend({
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
          init: function(r, t) {
            this.high = r, this.low = t;
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
        }), f.WordArray = B.extend({
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
          init: function(r, t) {
            r = this.words = r || [], t != e ? this.sigBytes = t : this.sigBytes = r.length * 8;
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
            for (var r = this.words, t = r.length, C = [], i = 0; i < t; i++) {
              var p = r[i];
              C.push(p.high), C.push(p.low);
            }
            return u.create(C, this.sigBytes);
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
            for (var r = B.clone.call(this), t = r.words = this.words.slice(0), C = t.length, i = 0; i < C; i++)
              t[i] = t[i].clone();
            return r;
          }
        });
      }(), n;
    });
  }(j0)), j0.exports;
}
var X0 = { exports: {} }, Ze;
function vt() {
  return Ze || (Ze = 1, function(D, g) {
    (function(n, e) {
      D.exports = e(V());
    })(U, function(n) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var e = n, s = e.lib, c = s.WordArray, B = c.init, u = c.init = function(f) {
            if (f instanceof ArrayBuffer && (f = new Uint8Array(f)), (f instanceof Int8Array || typeof Uint8ClampedArray < "u" && f instanceof Uint8ClampedArray || f instanceof Int16Array || f instanceof Uint16Array || f instanceof Int32Array || f instanceof Uint32Array || f instanceof Float32Array || f instanceof Float64Array) && (f = new Uint8Array(f.buffer, f.byteOffset, f.byteLength)), f instanceof Uint8Array) {
              for (var r = f.byteLength, t = [], C = 0; C < r; C++)
                t[C >>> 2] |= f[C] << 24 - C % 4 * 8;
              B.call(this, t, r);
            } else
              B.apply(this, arguments);
          };
          u.prototype = c;
        }
      }(), n.lib.WordArray;
    });
  }(X0)), X0.exports;
}
var G0 = { exports: {} }, Je;
function pt() {
  return Je || (Je = 1, function(D, g) {
    (function(n, e) {
      D.exports = e(V());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.WordArray, B = e.enc;
        B.Utf16 = B.Utf16BE = {
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
          stringify: function(f) {
            for (var r = f.words, t = f.sigBytes, C = [], i = 0; i < t; i += 2) {
              var p = r[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              C.push(String.fromCharCode(p));
            }
            return C.join("");
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
          parse: function(f) {
            for (var r = f.length, t = [], C = 0; C < r; C++)
              t[C >>> 1] |= f.charCodeAt(C) << 16 - C % 2 * 16;
            return c.create(t, r * 2);
          }
        }, B.Utf16LE = {
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
          stringify: function(f) {
            for (var r = f.words, t = f.sigBytes, C = [], i = 0; i < t; i += 2) {
              var p = u(r[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              C.push(String.fromCharCode(p));
            }
            return C.join("");
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
          parse: function(f) {
            for (var r = f.length, t = [], C = 0; C < r; C++)
              t[C >>> 1] |= u(f.charCodeAt(C) << 16 - C % 2 * 16);
            return c.create(t, r * 2);
          }
        };
        function u(f) {
          return f << 8 & 4278255360 | f >>> 8 & 16711935;
        }
      }(), n.enc.Utf16;
    });
  }(G0)), G0.exports;
}
var Y0 = { exports: {} }, er;
function A0() {
  return er || (er = 1, function(D, g) {
    (function(n, e) {
      D.exports = e(V());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.WordArray, B = e.enc;
        B.Base64 = {
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
          stringify: function(f) {
            var r = f.words, t = f.sigBytes, C = this._map;
            f.clamp();
            for (var i = [], p = 0; p < t; p += 3)
              for (var d = r[p >>> 2] >>> 24 - p % 4 * 8 & 255, v = r[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, x = r[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, h = d << 16 | v << 8 | x, o = 0; o < 4 && p + o * 0.75 < t; o++)
                i.push(C.charAt(h >>> 6 * (3 - o) & 63));
            var a = C.charAt(64);
            if (a)
              for (; i.length % 4; )
                i.push(a);
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
          parse: function(f) {
            var r = f.length, t = this._map, C = this._reverseMap;
            if (!C) {
              C = this._reverseMap = [];
              for (var i = 0; i < t.length; i++)
                C[t.charCodeAt(i)] = i;
            }
            var p = t.charAt(64);
            if (p) {
              var d = f.indexOf(p);
              d !== -1 && (r = d);
            }
            return u(f, r, C);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function u(f, r, t) {
          for (var C = [], i = 0, p = 0; p < r; p++)
            if (p % 4) {
              var d = t[f.charCodeAt(p - 1)] << p % 4 * 2, v = t[f.charCodeAt(p)] >>> 6 - p % 4 * 2, x = d | v;
              C[i >>> 2] |= x << 24 - i % 4 * 8, i++;
            }
          return c.create(C, i);
        }
      }(), n.enc.Base64;
    });
  }(Y0)), Y0.exports;
}
var Q0 = { exports: {} }, rr;
function ht() {
  return rr || (rr = 1, function(D, g) {
    (function(n, e) {
      D.exports = e(V());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.WordArray, B = e.enc;
        B.Base64url = {
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
          stringify: function(f, r) {
            r === void 0 && (r = !0);
            var t = f.words, C = f.sigBytes, i = r ? this._safe_map : this._map;
            f.clamp();
            for (var p = [], d = 0; d < C; d += 3)
              for (var v = t[d >>> 2] >>> 24 - d % 4 * 8 & 255, x = t[d + 1 >>> 2] >>> 24 - (d + 1) % 4 * 8 & 255, h = t[d + 2 >>> 2] >>> 24 - (d + 2) % 4 * 8 & 255, o = v << 16 | x << 8 | h, a = 0; a < 4 && d + a * 0.75 < C; a++)
                p.push(i.charAt(o >>> 6 * (3 - a) & 63));
            var l = i.charAt(64);
            if (l)
              for (; p.length % 4; )
                p.push(l);
            return p.join("");
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
          parse: function(f, r) {
            r === void 0 && (r = !0);
            var t = f.length, C = r ? this._safe_map : this._map, i = this._reverseMap;
            if (!i) {
              i = this._reverseMap = [];
              for (var p = 0; p < C.length; p++)
                i[C.charCodeAt(p)] = p;
            }
            var d = C.charAt(64);
            if (d) {
              var v = f.indexOf(d);
              v !== -1 && (t = v);
            }
            return u(f, t, i);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function u(f, r, t) {
          for (var C = [], i = 0, p = 0; p < r; p++)
            if (p % 4) {
              var d = t[f.charCodeAt(p - 1)] << p % 4 * 2, v = t[f.charCodeAt(p)] >>> 6 - p % 4 * 2, x = d | v;
              C[i >>> 2] |= x << 24 - i % 4 * 8, i++;
            }
          return c.create(C, i);
        }
      }(), n.enc.Base64url;
    });
  }(Q0)), Q0.exports;
}
var Z0 = { exports: {} }, tr;
function _0() {
  return tr || (tr = 1, function(D, g) {
    (function(n, e) {
      D.exports = e(V());
    })(U, function(n) {
      return function(e) {
        var s = n, c = s.lib, B = c.WordArray, u = c.Hasher, f = s.algo, r = [];
        (function() {
          for (var v = 0; v < 64; v++)
            r[v] = e.abs(e.sin(v + 1)) * 4294967296 | 0;
        })();
        var t = f.MD5 = u.extend({
          _doReset: function() {
            this._hash = new B.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(v, x) {
            for (var h = 0; h < 16; h++) {
              var o = x + h, a = v[o];
              v[o] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            }
            var l = this._hash.words, A = v[x + 0], _ = v[x + 1], b = v[x + 2], y = v[x + 3], P = v[x + 4], E = v[x + 5], F = v[x + 6], R = v[x + 7], w = v[x + 8], S = v[x + 9], $ = v[x + 10], L = v[x + 11], j = v[x + 12], K = v[x + 13], M = v[x + 14], z = v[x + 15], m = l[0], k = l[1], T = l[2], H = l[3];
            m = C(m, k, T, H, A, 7, r[0]), H = C(H, m, k, T, _, 12, r[1]), T = C(T, H, m, k, b, 17, r[2]), k = C(k, T, H, m, y, 22, r[3]), m = C(m, k, T, H, P, 7, r[4]), H = C(H, m, k, T, E, 12, r[5]), T = C(T, H, m, k, F, 17, r[6]), k = C(k, T, H, m, R, 22, r[7]), m = C(m, k, T, H, w, 7, r[8]), H = C(H, m, k, T, S, 12, r[9]), T = C(T, H, m, k, $, 17, r[10]), k = C(k, T, H, m, L, 22, r[11]), m = C(m, k, T, H, j, 7, r[12]), H = C(H, m, k, T, K, 12, r[13]), T = C(T, H, m, k, M, 17, r[14]), k = C(k, T, H, m, z, 22, r[15]), m = i(m, k, T, H, _, 5, r[16]), H = i(H, m, k, T, F, 9, r[17]), T = i(T, H, m, k, L, 14, r[18]), k = i(k, T, H, m, A, 20, r[19]), m = i(m, k, T, H, E, 5, r[20]), H = i(H, m, k, T, $, 9, r[21]), T = i(T, H, m, k, z, 14, r[22]), k = i(k, T, H, m, P, 20, r[23]), m = i(m, k, T, H, S, 5, r[24]), H = i(H, m, k, T, M, 9, r[25]), T = i(T, H, m, k, y, 14, r[26]), k = i(k, T, H, m, w, 20, r[27]), m = i(m, k, T, H, K, 5, r[28]), H = i(H, m, k, T, b, 9, r[29]), T = i(T, H, m, k, R, 14, r[30]), k = i(k, T, H, m, j, 20, r[31]), m = p(m, k, T, H, E, 4, r[32]), H = p(H, m, k, T, w, 11, r[33]), T = p(T, H, m, k, L, 16, r[34]), k = p(k, T, H, m, M, 23, r[35]), m = p(m, k, T, H, _, 4, r[36]), H = p(H, m, k, T, P, 11, r[37]), T = p(T, H, m, k, R, 16, r[38]), k = p(k, T, H, m, $, 23, r[39]), m = p(m, k, T, H, K, 4, r[40]), H = p(H, m, k, T, A, 11, r[41]), T = p(T, H, m, k, y, 16, r[42]), k = p(k, T, H, m, F, 23, r[43]), m = p(m, k, T, H, S, 4, r[44]), H = p(H, m, k, T, j, 11, r[45]), T = p(T, H, m, k, z, 16, r[46]), k = p(k, T, H, m, b, 23, r[47]), m = d(m, k, T, H, A, 6, r[48]), H = d(H, m, k, T, R, 10, r[49]), T = d(T, H, m, k, M, 15, r[50]), k = d(k, T, H, m, E, 21, r[51]), m = d(m, k, T, H, j, 6, r[52]), H = d(H, m, k, T, y, 10, r[53]), T = d(T, H, m, k, $, 15, r[54]), k = d(k, T, H, m, _, 21, r[55]), m = d(m, k, T, H, w, 6, r[56]), H = d(H, m, k, T, z, 10, r[57]), T = d(T, H, m, k, F, 15, r[58]), k = d(k, T, H, m, K, 21, r[59]), m = d(m, k, T, H, P, 6, r[60]), H = d(H, m, k, T, L, 10, r[61]), T = d(T, H, m, k, b, 15, r[62]), k = d(k, T, H, m, S, 21, r[63]), l[0] = l[0] + m | 0, l[1] = l[1] + k | 0, l[2] = l[2] + T | 0, l[3] = l[3] + H | 0;
          },
          _doFinalize: function() {
            var v = this._data, x = v.words, h = this._nDataBytes * 8, o = v.sigBytes * 8;
            x[o >>> 5] |= 128 << 24 - o % 32;
            var a = e.floor(h / 4294967296), l = h;
            x[(o + 64 >>> 9 << 4) + 15] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360, x[(o + 64 >>> 9 << 4) + 14] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, v.sigBytes = (x.length + 1) * 4, this._process();
            for (var A = this._hash, _ = A.words, b = 0; b < 4; b++) {
              var y = _[b];
              _[b] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360;
            }
            return A;
          },
          clone: function() {
            var v = u.clone.call(this);
            return v._hash = this._hash.clone(), v;
          }
        });
        function C(v, x, h, o, a, l, A) {
          var _ = v + (x & h | ~x & o) + a + A;
          return (_ << l | _ >>> 32 - l) + x;
        }
        function i(v, x, h, o, a, l, A) {
          var _ = v + (x & o | h & ~o) + a + A;
          return (_ << l | _ >>> 32 - l) + x;
        }
        function p(v, x, h, o, a, l, A) {
          var _ = v + (x ^ h ^ o) + a + A;
          return (_ << l | _ >>> 32 - l) + x;
        }
        function d(v, x, h, o, a, l, A) {
          var _ = v + (h ^ (x | ~o)) + a + A;
          return (_ << l | _ >>> 32 - l) + x;
        }
        s.MD5 = u._createHelper(t), s.HmacMD5 = u._createHmacHelper(t);
      }(Math), n.MD5;
    });
  }(Z0)), Z0.exports;
}
var J0 = { exports: {} }, ar;
function Pr() {
  return ar || (ar = 1, function(D, g) {
    (function(n, e) {
      D.exports = e(V());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.WordArray, B = s.Hasher, u = e.algo, f = [], r = u.SHA1 = B.extend({
          _doReset: function() {
            this._hash = new c.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(t, C) {
            for (var i = this._hash.words, p = i[0], d = i[1], v = i[2], x = i[3], h = i[4], o = 0; o < 80; o++) {
              if (o < 16)
                f[o] = t[C + o] | 0;
              else {
                var a = f[o - 3] ^ f[o - 8] ^ f[o - 14] ^ f[o - 16];
                f[o] = a << 1 | a >>> 31;
              }
              var l = (p << 5 | p >>> 27) + h + f[o];
              o < 20 ? l += (d & v | ~d & x) + 1518500249 : o < 40 ? l += (d ^ v ^ x) + 1859775393 : o < 60 ? l += (d & v | d & x | v & x) - 1894007588 : l += (d ^ v ^ x) - 899497514, h = x, x = v, v = d << 30 | d >>> 2, d = p, p = l;
            }
            i[0] = i[0] + p | 0, i[1] = i[1] + d | 0, i[2] = i[2] + v | 0, i[3] = i[3] + x | 0, i[4] = i[4] + h | 0;
          },
          _doFinalize: function() {
            var t = this._data, C = t.words, i = this._nDataBytes * 8, p = t.sigBytes * 8;
            return C[p >>> 5] |= 128 << 24 - p % 32, C[(p + 64 >>> 9 << 4) + 14] = Math.floor(i / 4294967296), C[(p + 64 >>> 9 << 4) + 15] = i, t.sigBytes = C.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var t = B.clone.call(this);
            return t._hash = this._hash.clone(), t;
          }
        });
        e.SHA1 = B._createHelper(r), e.HmacSHA1 = B._createHmacHelper(r);
      }(), n.SHA1;
    });
  }(J0)), J0.exports;
}
var ee = { exports: {} }, nr;
function ze() {
  return nr || (nr = 1, function(D, g) {
    (function(n, e) {
      D.exports = e(V());
    })(U, function(n) {
      return function(e) {
        var s = n, c = s.lib, B = c.WordArray, u = c.Hasher, f = s.algo, r = [], t = [];
        (function() {
          function p(h) {
            for (var o = e.sqrt(h), a = 2; a <= o; a++)
              if (!(h % a))
                return !1;
            return !0;
          }
          function d(h) {
            return (h - (h | 0)) * 4294967296 | 0;
          }
          for (var v = 2, x = 0; x < 64; )
            p(v) && (x < 8 && (r[x] = d(e.pow(v, 1 / 2))), t[x] = d(e.pow(v, 1 / 3)), x++), v++;
        })();
        var C = [], i = f.SHA256 = u.extend({
          _doReset: function() {
            this._hash = new B.init(r.slice(0));
          },
          _doProcessBlock: function(p, d) {
            for (var v = this._hash.words, x = v[0], h = v[1], o = v[2], a = v[3], l = v[4], A = v[5], _ = v[6], b = v[7], y = 0; y < 64; y++) {
              if (y < 16)
                C[y] = p[d + y] | 0;
              else {
                var P = C[y - 15], E = (P << 25 | P >>> 7) ^ (P << 14 | P >>> 18) ^ P >>> 3, F = C[y - 2], R = (F << 15 | F >>> 17) ^ (F << 13 | F >>> 19) ^ F >>> 10;
                C[y] = E + C[y - 7] + R + C[y - 16];
              }
              var w = l & A ^ ~l & _, S = x & h ^ x & o ^ h & o, $ = (x << 30 | x >>> 2) ^ (x << 19 | x >>> 13) ^ (x << 10 | x >>> 22), L = (l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25), j = b + L + w + t[y] + C[y], K = $ + S;
              b = _, _ = A, A = l, l = a + j | 0, a = o, o = h, h = x, x = j + K | 0;
            }
            v[0] = v[0] + x | 0, v[1] = v[1] + h | 0, v[2] = v[2] + o | 0, v[3] = v[3] + a | 0, v[4] = v[4] + l | 0, v[5] = v[5] + A | 0, v[6] = v[6] + _ | 0, v[7] = v[7] + b | 0;
          },
          _doFinalize: function() {
            var p = this._data, d = p.words, v = this._nDataBytes * 8, x = p.sigBytes * 8;
            return d[x >>> 5] |= 128 << 24 - x % 32, d[(x + 64 >>> 9 << 4) + 14] = e.floor(v / 4294967296), d[(x + 64 >>> 9 << 4) + 15] = v, p.sigBytes = d.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var p = u.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        s.SHA256 = u._createHelper(i), s.HmacSHA256 = u._createHmacHelper(i);
      }(Math), n.SHA256;
    });
  }(ee)), ee.exports;
}
var re = { exports: {} }, xr;
function Bt() {
  return xr || (xr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), ze());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.WordArray, B = e.algo, u = B.SHA256, f = B.SHA224 = u.extend({
          _doReset: function() {
            this._hash = new c.init([
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
            var r = u._doFinalize.call(this);
            return r.sigBytes -= 4, r;
          }
        });
        e.SHA224 = u._createHelper(f), e.HmacSHA224 = u._createHmacHelper(f);
      }(), n.SHA224;
    });
  }(re)), re.exports;
}
var te = { exports: {} }, or;
function zr() {
  return or || (or = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), V0());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.Hasher, B = e.x64, u = B.Word, f = B.WordArray, r = e.algo;
        function t() {
          return u.create.apply(u, arguments);
        }
        var C = [
          t(1116352408, 3609767458),
          t(1899447441, 602891725),
          t(3049323471, 3964484399),
          t(3921009573, 2173295548),
          t(961987163, 4081628472),
          t(1508970993, 3053834265),
          t(2453635748, 2937671579),
          t(2870763221, 3664609560),
          t(3624381080, 2734883394),
          t(310598401, 1164996542),
          t(607225278, 1323610764),
          t(1426881987, 3590304994),
          t(1925078388, 4068182383),
          t(2162078206, 991336113),
          t(2614888103, 633803317),
          t(3248222580, 3479774868),
          t(3835390401, 2666613458),
          t(4022224774, 944711139),
          t(264347078, 2341262773),
          t(604807628, 2007800933),
          t(770255983, 1495990901),
          t(1249150122, 1856431235),
          t(1555081692, 3175218132),
          t(1996064986, 2198950837),
          t(2554220882, 3999719339),
          t(2821834349, 766784016),
          t(2952996808, 2566594879),
          t(3210313671, 3203337956),
          t(3336571891, 1034457026),
          t(3584528711, 2466948901),
          t(113926993, 3758326383),
          t(338241895, 168717936),
          t(666307205, 1188179964),
          t(773529912, 1546045734),
          t(1294757372, 1522805485),
          t(1396182291, 2643833823),
          t(1695183700, 2343527390),
          t(1986661051, 1014477480),
          t(2177026350, 1206759142),
          t(2456956037, 344077627),
          t(2730485921, 1290863460),
          t(2820302411, 3158454273),
          t(3259730800, 3505952657),
          t(3345764771, 106217008),
          t(3516065817, 3606008344),
          t(3600352804, 1432725776),
          t(4094571909, 1467031594),
          t(275423344, 851169720),
          t(430227734, 3100823752),
          t(506948616, 1363258195),
          t(659060556, 3750685593),
          t(883997877, 3785050280),
          t(958139571, 3318307427),
          t(1322822218, 3812723403),
          t(1537002063, 2003034995),
          t(1747873779, 3602036899),
          t(1955562222, 1575990012),
          t(2024104815, 1125592928),
          t(2227730452, 2716904306),
          t(2361852424, 442776044),
          t(2428436474, 593698344),
          t(2756734187, 3733110249),
          t(3204031479, 2999351573),
          t(3329325298, 3815920427),
          t(3391569614, 3928383900),
          t(3515267271, 566280711),
          t(3940187606, 3454069534),
          t(4118630271, 4000239992),
          t(116418474, 1914138554),
          t(174292421, 2731055270),
          t(289380356, 3203993006),
          t(460393269, 320620315),
          t(685471733, 587496836),
          t(852142971, 1086792851),
          t(1017036298, 365543100),
          t(1126000580, 2618297676),
          t(1288033470, 3409855158),
          t(1501505948, 4234509866),
          t(1607167915, 987167468),
          t(1816402316, 1246189591)
        ], i = [];
        (function() {
          for (var d = 0; d < 80; d++)
            i[d] = t();
        })();
        var p = r.SHA512 = c.extend({
          _doReset: function() {
            this._hash = new f.init([
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
          _doProcessBlock: function(d, v) {
            for (var x = this._hash.words, h = x[0], o = x[1], a = x[2], l = x[3], A = x[4], _ = x[5], b = x[6], y = x[7], P = h.high, E = h.low, F = o.high, R = o.low, w = a.high, S = a.low, $ = l.high, L = l.low, j = A.high, K = A.low, M = _.high, z = _.low, m = b.high, k = b.low, T = y.high, H = y.low, Q = P, X = E, t0 = F, I = R, k0 = w, D0 = S, N0 = $, w0 = L, s0 = j, a0 = K, O0 = M, S0 = z, $0 = m, R0 = k, K0 = T, H0 = H, l0 = 0; l0 < 80; l0++) {
              var o0, p0, L0 = i[l0];
              if (l0 < 16)
                p0 = L0.high = d[v + l0 * 2] | 0, o0 = L0.low = d[v + l0 * 2 + 1] | 0;
              else {
                var $e = i[l0 - 15], F0 = $e.high, T0 = $e.low, $r = (F0 >>> 1 | T0 << 31) ^ (F0 >>> 8 | T0 << 24) ^ F0 >>> 7, Le = (T0 >>> 1 | F0 << 31) ^ (T0 >>> 8 | F0 << 24) ^ (T0 >>> 7 | F0 << 25), Ue = i[l0 - 2], b0 = Ue.high, P0 = Ue.low, Lr = (b0 >>> 19 | P0 << 13) ^ (b0 << 3 | P0 >>> 29) ^ b0 >>> 6, Ie = (P0 >>> 19 | b0 << 13) ^ (P0 << 3 | b0 >>> 29) ^ (P0 >>> 6 | b0 << 26), We = i[l0 - 7], Ur = We.high, Ir = We.low, Ve = i[l0 - 16], Wr = Ve.high, Ne = Ve.low;
                o0 = Le + Ir, p0 = $r + Ur + (o0 >>> 0 < Le >>> 0 ? 1 : 0), o0 = o0 + Ie, p0 = p0 + Lr + (o0 >>> 0 < Ie >>> 0 ? 1 : 0), o0 = o0 + Ne, p0 = p0 + Wr + (o0 >>> 0 < Ne >>> 0 ? 1 : 0), L0.high = p0, L0.low = o0;
              }
              var Vr = s0 & O0 ^ ~s0 & $0, Ke = a0 & S0 ^ ~a0 & R0, Nr = Q & t0 ^ Q & k0 ^ t0 & k0, Kr = X & I ^ X & D0 ^ I & D0, Mr = (Q >>> 28 | X << 4) ^ (Q << 30 | X >>> 2) ^ (Q << 25 | X >>> 7), Me = (X >>> 28 | Q << 4) ^ (X << 30 | Q >>> 2) ^ (X << 25 | Q >>> 7), jr = (s0 >>> 14 | a0 << 18) ^ (s0 >>> 18 | a0 << 14) ^ (s0 << 23 | a0 >>> 9), Xr = (a0 >>> 14 | s0 << 18) ^ (a0 >>> 18 | s0 << 14) ^ (a0 << 23 | s0 >>> 9), je = C[l0], Gr = je.high, Xe = je.low, n0 = H0 + Xr, h0 = K0 + jr + (n0 >>> 0 < H0 >>> 0 ? 1 : 0), n0 = n0 + Ke, h0 = h0 + Vr + (n0 >>> 0 < Ke >>> 0 ? 1 : 0), n0 = n0 + Xe, h0 = h0 + Gr + (n0 >>> 0 < Xe >>> 0 ? 1 : 0), n0 = n0 + o0, h0 = h0 + p0 + (n0 >>> 0 < o0 >>> 0 ? 1 : 0), Ge = Me + Kr, Yr = Mr + Nr + (Ge >>> 0 < Me >>> 0 ? 1 : 0);
              K0 = $0, H0 = R0, $0 = O0, R0 = S0, O0 = s0, S0 = a0, a0 = w0 + n0 | 0, s0 = N0 + h0 + (a0 >>> 0 < w0 >>> 0 ? 1 : 0) | 0, N0 = k0, w0 = D0, k0 = t0, D0 = I, t0 = Q, I = X, X = n0 + Ge | 0, Q = h0 + Yr + (X >>> 0 < n0 >>> 0 ? 1 : 0) | 0;
            }
            E = h.low = E + X, h.high = P + Q + (E >>> 0 < X >>> 0 ? 1 : 0), R = o.low = R + I, o.high = F + t0 + (R >>> 0 < I >>> 0 ? 1 : 0), S = a.low = S + D0, a.high = w + k0 + (S >>> 0 < D0 >>> 0 ? 1 : 0), L = l.low = L + w0, l.high = $ + N0 + (L >>> 0 < w0 >>> 0 ? 1 : 0), K = A.low = K + a0, A.high = j + s0 + (K >>> 0 < a0 >>> 0 ? 1 : 0), z = _.low = z + S0, _.high = M + O0 + (z >>> 0 < S0 >>> 0 ? 1 : 0), k = b.low = k + R0, b.high = m + $0 + (k >>> 0 < R0 >>> 0 ? 1 : 0), H = y.low = H + H0, y.high = T + K0 + (H >>> 0 < H0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var d = this._data, v = d.words, x = this._nDataBytes * 8, h = d.sigBytes * 8;
            v[h >>> 5] |= 128 << 24 - h % 32, v[(h + 128 >>> 10 << 5) + 30] = Math.floor(x / 4294967296), v[(h + 128 >>> 10 << 5) + 31] = x, d.sigBytes = v.length * 4, this._process();
            var o = this._hash.toX32();
            return o;
          },
          clone: function() {
            var d = c.clone.call(this);
            return d._hash = this._hash.clone(), d;
          },
          blockSize: 1024 / 32
        });
        e.SHA512 = c._createHelper(p), e.HmacSHA512 = c._createHmacHelper(p);
      }(), n.SHA512;
    });
  }(te)), te.exports;
}
var ae = { exports: {} }, ir;
function Ct() {
  return ir || (ir = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), V0(), zr());
    })(U, function(n) {
      return function() {
        var e = n, s = e.x64, c = s.Word, B = s.WordArray, u = e.algo, f = u.SHA512, r = u.SHA384 = f.extend({
          _doReset: function() {
            this._hash = new B.init([
              new c.init(3418070365, 3238371032),
              new c.init(1654270250, 914150663),
              new c.init(2438529370, 812702999),
              new c.init(355462360, 4144912697),
              new c.init(1731405415, 4290775857),
              new c.init(2394180231, 1750603025),
              new c.init(3675008525, 1694076839),
              new c.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var t = f._doFinalize.call(this);
            return t.sigBytes -= 16, t;
          }
        });
        e.SHA384 = f._createHelper(r), e.HmacSHA384 = f._createHmacHelper(r);
      }(), n.SHA384;
    });
  }(ae)), ae.exports;
}
var ne = { exports: {} }, sr;
function Et() {
  return sr || (sr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), V0());
    })(U, function(n) {
      return function(e) {
        var s = n, c = s.lib, B = c.WordArray, u = c.Hasher, f = s.x64, r = f.Word, t = s.algo, C = [], i = [], p = [];
        (function() {
          for (var x = 1, h = 0, o = 0; o < 24; o++) {
            C[x + 5 * h] = (o + 1) * (o + 2) / 2 % 64;
            var a = h % 5, l = (2 * x + 3 * h) % 5;
            x = a, h = l;
          }
          for (var x = 0; x < 5; x++)
            for (var h = 0; h < 5; h++)
              i[x + 5 * h] = h + (2 * x + 3 * h) % 5 * 5;
          for (var A = 1, _ = 0; _ < 24; _++) {
            for (var b = 0, y = 0, P = 0; P < 7; P++) {
              if (A & 1) {
                var E = (1 << P) - 1;
                E < 32 ? y ^= 1 << E : b ^= 1 << E - 32;
              }
              A & 128 ? A = A << 1 ^ 113 : A <<= 1;
            }
            p[_] = r.create(b, y);
          }
        })();
        var d = [];
        (function() {
          for (var x = 0; x < 25; x++)
            d[x] = r.create();
        })();
        var v = t.SHA3 = u.extend({
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
            for (var x = this._state = [], h = 0; h < 25; h++)
              x[h] = new r.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(x, h) {
            for (var o = this._state, a = this.blockSize / 2, l = 0; l < a; l++) {
              var A = x[h + 2 * l], _ = x[h + 2 * l + 1];
              A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, _ = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
              var b = o[l];
              b.high ^= _, b.low ^= A;
            }
            for (var y = 0; y < 24; y++) {
              for (var P = 0; P < 5; P++) {
                for (var E = 0, F = 0, R = 0; R < 5; R++) {
                  var b = o[P + 5 * R];
                  E ^= b.high, F ^= b.low;
                }
                var w = d[P];
                w.high = E, w.low = F;
              }
              for (var P = 0; P < 5; P++)
                for (var S = d[(P + 4) % 5], $ = d[(P + 1) % 5], L = $.high, j = $.low, E = S.high ^ (L << 1 | j >>> 31), F = S.low ^ (j << 1 | L >>> 31), R = 0; R < 5; R++) {
                  var b = o[P + 5 * R];
                  b.high ^= E, b.low ^= F;
                }
              for (var K = 1; K < 25; K++) {
                var E, F, b = o[K], M = b.high, z = b.low, m = C[K];
                m < 32 ? (E = M << m | z >>> 32 - m, F = z << m | M >>> 32 - m) : (E = z << m - 32 | M >>> 64 - m, F = M << m - 32 | z >>> 64 - m);
                var k = d[i[K]];
                k.high = E, k.low = F;
              }
              var T = d[0], H = o[0];
              T.high = H.high, T.low = H.low;
              for (var P = 0; P < 5; P++)
                for (var R = 0; R < 5; R++) {
                  var K = P + 5 * R, b = o[K], Q = d[K], X = d[(P + 1) % 5 + 5 * R], t0 = d[(P + 2) % 5 + 5 * R];
                  b.high = Q.high ^ ~X.high & t0.high, b.low = Q.low ^ ~X.low & t0.low;
                }
              var b = o[0], I = p[y];
              b.high ^= I.high, b.low ^= I.low;
            }
          },
          _doFinalize: function() {
            var x = this._data, h = x.words;
            this._nDataBytes * 8;
            var o = x.sigBytes * 8, a = this.blockSize * 32;
            h[o >>> 5] |= 1 << 24 - o % 32, h[(e.ceil((o + 1) / a) * a >>> 5) - 1] |= 128, x.sigBytes = h.length * 4, this._process();
            for (var l = this._state, A = this.cfg.outputLength / 8, _ = A / 8, b = [], y = 0; y < _; y++) {
              var P = l[y], E = P.high, F = P.low;
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, F = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360, b.push(F), b.push(E);
            }
            return new B.init(b, A);
          },
          clone: function() {
            for (var x = u.clone.call(this), h = x._state = this._state.slice(0), o = 0; o < 25; o++)
              h[o] = h[o].clone();
            return x;
          }
        });
        s.SHA3 = u._createHelper(v), s.HmacSHA3 = u._createHmacHelper(v);
      }(Math), n.SHA3;
    });
  }(ne)), ne.exports;
}
var xe = { exports: {} }, lr;
function At() {
  return lr || (lr = 1, function(D, g) {
    (function(n, e) {
      D.exports = e(V());
    })(U, function(n) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(e) {
        var s = n, c = s.lib, B = c.WordArray, u = c.Hasher, f = s.algo, r = B.create([
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
        ]), t = B.create([
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
        ]), C = B.create([
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
        ]), i = B.create([
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
        ]), p = B.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), d = B.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), v = f.RIPEMD160 = u.extend({
          _doReset: function() {
            this._hash = B.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(_, b) {
            for (var y = 0; y < 16; y++) {
              var P = b + y, E = _[P];
              _[P] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            var F = this._hash.words, R = p.words, w = d.words, S = r.words, $ = t.words, L = C.words, j = i.words, K, M, z, m, k, T, H, Q, X, t0;
            T = K = F[0], H = M = F[1], Q = z = F[2], X = m = F[3], t0 = k = F[4];
            for (var I, y = 0; y < 80; y += 1)
              I = K + _[b + S[y]] | 0, y < 16 ? I += x(M, z, m) + R[0] : y < 32 ? I += h(M, z, m) + R[1] : y < 48 ? I += o(M, z, m) + R[2] : y < 64 ? I += a(M, z, m) + R[3] : I += l(M, z, m) + R[4], I = I | 0, I = A(I, L[y]), I = I + k | 0, K = k, k = m, m = A(z, 10), z = M, M = I, I = T + _[b + $[y]] | 0, y < 16 ? I += l(H, Q, X) + w[0] : y < 32 ? I += a(H, Q, X) + w[1] : y < 48 ? I += o(H, Q, X) + w[2] : y < 64 ? I += h(H, Q, X) + w[3] : I += x(H, Q, X) + w[4], I = I | 0, I = A(I, j[y]), I = I + t0 | 0, T = t0, t0 = X, X = A(Q, 10), Q = H, H = I;
            I = F[1] + z + X | 0, F[1] = F[2] + m + t0 | 0, F[2] = F[3] + k + T | 0, F[3] = F[4] + K + H | 0, F[4] = F[0] + M + Q | 0, F[0] = I;
          },
          _doFinalize: function() {
            var _ = this._data, b = _.words, y = this._nDataBytes * 8, P = _.sigBytes * 8;
            b[P >>> 5] |= 128 << 24 - P % 32, b[(P + 64 >>> 9 << 4) + 14] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, _.sigBytes = (b.length + 1) * 4, this._process();
            for (var E = this._hash, F = E.words, R = 0; R < 5; R++) {
              var w = F[R];
              F[R] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var _ = u.clone.call(this);
            return _._hash = this._hash.clone(), _;
          }
        });
        function x(_, b, y) {
          return _ ^ b ^ y;
        }
        function h(_, b, y) {
          return _ & b | ~_ & y;
        }
        function o(_, b, y) {
          return (_ | ~b) ^ y;
        }
        function a(_, b, y) {
          return _ & y | b & ~y;
        }
        function l(_, b, y) {
          return _ ^ (b | ~y);
        }
        function A(_, b) {
          return _ << b | _ >>> 32 - b;
        }
        s.RIPEMD160 = u._createHelper(v), s.HmacRIPEMD160 = u._createHmacHelper(v);
      }(), n.RIPEMD160;
    });
  }(xe)), xe.exports;
}
var oe = { exports: {} }, cr;
function qe() {
  return cr || (cr = 1, function(D, g) {
    (function(n, e) {
      D.exports = e(V());
    })(U, function(n) {
      (function() {
        var e = n, s = e.lib, c = s.Base, B = e.enc, u = B.Utf8, f = e.algo;
        f.HMAC = c.extend({
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
          init: function(r, t) {
            r = this._hasher = new r.init(), typeof t == "string" && (t = u.parse(t));
            var C = r.blockSize, i = C * 4;
            t.sigBytes > i && (t = r.finalize(t)), t.clamp();
            for (var p = this._oKey = t.clone(), d = this._iKey = t.clone(), v = p.words, x = d.words, h = 0; h < C; h++)
              v[h] ^= 1549556828, x[h] ^= 909522486;
            p.sigBytes = d.sigBytes = i, this.reset();
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
            var t = this._hasher, C = t.finalize(r);
            t.reset();
            var i = t.finalize(this._oKey.clone().concat(C));
            return i;
          }
        });
      })();
    });
  }(oe)), oe.exports;
}
var ie = { exports: {} }, fr;
function _t() {
  return fr || (fr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), ze(), qe());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.Base, B = s.WordArray, u = e.algo, f = u.SHA256, r = u.HMAC, t = u.PBKDF2 = c.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: c.extend({
            keySize: 128 / 32,
            hasher: f,
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
          init: function(C) {
            this.cfg = this.cfg.extend(C);
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
          compute: function(C, i) {
            for (var p = this.cfg, d = r.create(p.hasher, C), v = B.create(), x = B.create([1]), h = v.words, o = x.words, a = p.keySize, l = p.iterations; h.length < a; ) {
              var A = d.update(i).finalize(x);
              d.reset();
              for (var _ = A.words, b = _.length, y = A, P = 1; P < l; P++) {
                y = d.finalize(y), d.reset();
                for (var E = y.words, F = 0; F < b; F++)
                  _[F] ^= E[F];
              }
              v.concat(A), o[0]++;
            }
            return v.sigBytes = a * 4, v;
          }
        });
        e.PBKDF2 = function(C, i, p) {
          return t.create(p).compute(C, i);
        };
      }(), n.PBKDF2;
    });
  }(ie)), ie.exports;
}
var se = { exports: {} }, ur;
function E0() {
  return ur || (ur = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), Pr(), qe());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.Base, B = s.WordArray, u = e.algo, f = u.MD5, r = u.EvpKDF = c.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: c.extend({
            keySize: 128 / 32,
            hasher: f,
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
          init: function(t) {
            this.cfg = this.cfg.extend(t);
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
          compute: function(t, C) {
            for (var i, p = this.cfg, d = p.hasher.create(), v = B.create(), x = v.words, h = p.keySize, o = p.iterations; x.length < h; ) {
              i && d.update(i), i = d.update(t).finalize(C), d.reset();
              for (var a = 1; a < o; a++)
                i = d.finalize(i), d.reset();
              v.concat(i);
            }
            return v.sigBytes = h * 4, v;
          }
        });
        e.EvpKDF = function(t, C, i) {
          return r.create(i).compute(t, C);
        };
      }(), n.EvpKDF;
    });
  }(se)), se.exports;
}
var le = { exports: {} }, dr;
function r0() {
  return dr || (dr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), E0());
    })(U, function(n) {
      n.lib.Cipher || function(e) {
        var s = n, c = s.lib, B = c.Base, u = c.WordArray, f = c.BufferedBlockAlgorithm, r = s.enc;
        r.Utf8;
        var t = r.Base64, C = s.algo, i = C.EvpKDF, p = c.Cipher = f.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: B.extend(),
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
          createEncryptor: function(E, F) {
            return this.create(this._ENC_XFORM_MODE, E, F);
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
          createDecryptor: function(E, F) {
            return this.create(this._DEC_XFORM_MODE, E, F);
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
          init: function(E, F, R) {
            this.cfg = this.cfg.extend(R), this._xformMode = E, this._key = F, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            f.reset.call(this), this._doReset();
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
            var F = this._doFinalize();
            return F;
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
            function E(F) {
              return typeof F == "string" ? P : _;
            }
            return function(F) {
              return {
                encrypt: function(R, w, S) {
                  return E(w).encrypt(F, R, w, S);
                },
                decrypt: function(R, w, S) {
                  return E(w).decrypt(F, R, w, S);
                }
              };
            };
          }()
        });
        c.StreamCipher = p.extend({
          _doFinalize: function() {
            var E = this._process(!0);
            return E;
          },
          blockSize: 1
        });
        var d = s.mode = {}, v = c.BlockCipherMode = B.extend({
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
          createEncryptor: function(E, F) {
            return this.Encryptor.create(E, F);
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
          createDecryptor: function(E, F) {
            return this.Decryptor.create(E, F);
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
          init: function(E, F) {
            this._cipher = E, this._iv = F;
          }
        }), x = d.CBC = function() {
          var E = v.extend();
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
            processBlock: function(R, w) {
              var S = this._cipher, $ = S.blockSize;
              F.call(this, R, w, $), S.encryptBlock(R, w), this._prevBlock = R.slice(w, w + $);
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
            processBlock: function(R, w) {
              var S = this._cipher, $ = S.blockSize, L = R.slice(w, w + $);
              S.decryptBlock(R, w), F.call(this, R, w, $), this._prevBlock = L;
            }
          });
          function F(R, w, S) {
            var $, L = this._iv;
            L ? ($ = L, this._iv = e) : $ = this._prevBlock;
            for (var j = 0; j < S; j++)
              R[w + j] ^= $[j];
          }
          return E;
        }(), h = s.pad = {}, o = h.Pkcs7 = {
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
          pad: function(E, F) {
            for (var R = F * 4, w = R - E.sigBytes % R, S = w << 24 | w << 16 | w << 8 | w, $ = [], L = 0; L < w; L += 4)
              $.push(S);
            var j = u.create($, w);
            E.concat(j);
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
            var F = E.words[E.sigBytes - 1 >>> 2] & 255;
            E.sigBytes -= F;
          }
        };
        c.BlockCipher = p.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: p.cfg.extend({
            mode: x,
            padding: o
          }),
          reset: function() {
            var E;
            p.reset.call(this);
            var F = this.cfg, R = F.iv, w = F.mode;
            this._xformMode == this._ENC_XFORM_MODE ? E = w.createEncryptor : (E = w.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == E ? this._mode.init(this, R && R.words) : (this._mode = E.call(w, this, R && R.words), this._mode.__creator = E);
          },
          _doProcessBlock: function(E, F) {
            this._mode.processBlock(E, F);
          },
          _doFinalize: function() {
            var E, F = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (F.pad(this._data, this.blockSize), E = this._process(!0)) : (E = this._process(!0), F.unpad(E)), E;
          },
          blockSize: 128 / 32
        });
        var a = c.CipherParams = B.extend({
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
        }), l = s.format = {}, A = l.OpenSSL = {
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
            var F, R = E.ciphertext, w = E.salt;
            return w ? F = u.create([1398893684, 1701076831]).concat(w).concat(R) : F = R, F.toString(t);
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
            var F, R = t.parse(E), w = R.words;
            return w[0] == 1398893684 && w[1] == 1701076831 && (F = u.create(w.slice(2, 4)), w.splice(0, 4), R.sigBytes -= 16), a.create({ ciphertext: R, salt: F });
          }
        }, _ = c.SerializableCipher = B.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: B.extend({
            format: A
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
          encrypt: function(E, F, R, w) {
            w = this.cfg.extend(w);
            var S = E.createEncryptor(R, w), $ = S.finalize(F), L = S.cfg;
            return a.create({
              ciphertext: $,
              key: R,
              iv: L.iv,
              algorithm: E,
              mode: L.mode,
              padding: L.padding,
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
          decrypt: function(E, F, R, w) {
            w = this.cfg.extend(w), F = this._parse(F, w.format);
            var S = E.createDecryptor(R, w).finalize(F.ciphertext);
            return S;
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
          _parse: function(E, F) {
            return typeof E == "string" ? F.parse(E, this) : E;
          }
        }), b = s.kdf = {}, y = b.OpenSSL = {
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
          execute: function(E, F, R, w, S) {
            if (w || (w = u.random(64 / 8)), S)
              var $ = i.create({ keySize: F + R, hasher: S }).compute(E, w);
            else
              var $ = i.create({ keySize: F + R }).compute(E, w);
            var L = u.create($.words.slice(F), R * 4);
            return $.sigBytes = F * 4, a.create({ key: $, iv: L, salt: w });
          }
        }, P = c.PasswordBasedCipher = _.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: _.cfg.extend({
            kdf: y
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
          encrypt: function(E, F, R, w) {
            w = this.cfg.extend(w);
            var S = w.kdf.execute(R, E.keySize, E.ivSize, w.salt, w.hasher);
            w.iv = S.iv;
            var $ = _.encrypt.call(this, E, F, S.key, w);
            return $.mixIn(S), $;
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
          decrypt: function(E, F, R, w) {
            w = this.cfg.extend(w), F = this._parse(F, w.format);
            var S = w.kdf.execute(R, E.keySize, E.ivSize, F.salt, w.hasher);
            w.iv = S.iv;
            var $ = _.decrypt.call(this, E, F, S.key, w);
            return $;
          }
        });
      }();
    });
  }(le)), le.exports;
}
var ce = { exports: {} }, vr;
function Dt() {
  return vr || (vr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), r0());
    })(U, function(n) {
      return n.mode.CFB = function() {
        var e = n.lib.BlockCipherMode.extend();
        e.Encryptor = e.extend({
          processBlock: function(c, B) {
            var u = this._cipher, f = u.blockSize;
            s.call(this, c, B, f, u), this._prevBlock = c.slice(B, B + f);
          }
        }), e.Decryptor = e.extend({
          processBlock: function(c, B) {
            var u = this._cipher, f = u.blockSize, r = c.slice(B, B + f);
            s.call(this, c, B, f, u), this._prevBlock = r;
          }
        });
        function s(c, B, u, f) {
          var r, t = this._iv;
          t ? (r = t.slice(0), this._iv = void 0) : r = this._prevBlock, f.encryptBlock(r, 0);
          for (var C = 0; C < u; C++)
            c[B + C] ^= r[C];
        }
        return e;
      }(), n.mode.CFB;
    });
  }(ce)), ce.exports;
}
var fe = { exports: {} }, pr;
function Ft() {
  return pr || (pr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), r0());
    })(U, function(n) {
      return n.mode.CTR = function() {
        var e = n.lib.BlockCipherMode.extend(), s = e.Encryptor = e.extend({
          processBlock: function(c, B) {
            var u = this._cipher, f = u.blockSize, r = this._iv, t = this._counter;
            r && (t = this._counter = r.slice(0), this._iv = void 0);
            var C = t.slice(0);
            u.encryptBlock(C, 0), t[f - 1] = t[f - 1] + 1 | 0;
            for (var i = 0; i < f; i++)
              c[B + i] ^= C[i];
          }
        });
        return e.Decryptor = s, e;
      }(), n.mode.CTR;
    });
  }(fe)), fe.exports;
}
var ue = { exports: {} }, hr;
function bt() {
  return hr || (hr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), r0());
    })(U, function(n) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return n.mode.CTRGladman = function() {
        var e = n.lib.BlockCipherMode.extend();
        function s(u) {
          if ((u >> 24 & 255) === 255) {
            var f = u >> 16 & 255, r = u >> 8 & 255, t = u & 255;
            f === 255 ? (f = 0, r === 255 ? (r = 0, t === 255 ? t = 0 : ++t) : ++r) : ++f, u = 0, u += f << 16, u += r << 8, u += t;
          } else
            u += 1 << 24;
          return u;
        }
        function c(u) {
          return (u[0] = s(u[0])) === 0 && (u[1] = s(u[1])), u;
        }
        var B = e.Encryptor = e.extend({
          processBlock: function(u, f) {
            var r = this._cipher, t = r.blockSize, C = this._iv, i = this._counter;
            C && (i = this._counter = C.slice(0), this._iv = void 0), c(i);
            var p = i.slice(0);
            r.encryptBlock(p, 0);
            for (var d = 0; d < t; d++)
              u[f + d] ^= p[d];
          }
        });
        return e.Decryptor = B, e;
      }(), n.mode.CTRGladman;
    });
  }(ue)), ue.exports;
}
var de = { exports: {} }, Br;
function yt() {
  return Br || (Br = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), r0());
    })(U, function(n) {
      return n.mode.OFB = function() {
        var e = n.lib.BlockCipherMode.extend(), s = e.Encryptor = e.extend({
          processBlock: function(c, B) {
            var u = this._cipher, f = u.blockSize, r = this._iv, t = this._keystream;
            r && (t = this._keystream = r.slice(0), this._iv = void 0), u.encryptBlock(t, 0);
            for (var C = 0; C < f; C++)
              c[B + C] ^= t[C];
          }
        });
        return e.Decryptor = s, e;
      }(), n.mode.OFB;
    });
  }(de)), de.exports;
}
var ve = { exports: {} }, Cr;
function gt() {
  return Cr || (Cr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), r0());
    })(U, function(n) {
      return n.mode.ECB = function() {
        var e = n.lib.BlockCipherMode.extend();
        return e.Encryptor = e.extend({
          processBlock: function(s, c) {
            this._cipher.encryptBlock(s, c);
          }
        }), e.Decryptor = e.extend({
          processBlock: function(s, c) {
            this._cipher.decryptBlock(s, c);
          }
        }), e;
      }(), n.mode.ECB;
    });
  }(ve)), ve.exports;
}
var pe = { exports: {} }, Er;
function mt() {
  return Er || (Er = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), r0());
    })(U, function(n) {
      return n.pad.AnsiX923 = {
        pad: function(e, s) {
          var c = e.sigBytes, B = s * 4, u = B - c % B, f = c + u - 1;
          e.clamp(), e.words[f >>> 2] |= u << 24 - f % 4 * 8, e.sigBytes += u;
        },
        unpad: function(e) {
          var s = e.words[e.sigBytes - 1 >>> 2] & 255;
          e.sigBytes -= s;
        }
      }, n.pad.Ansix923;
    });
  }(pe)), pe.exports;
}
var he = { exports: {} }, Ar;
function kt() {
  return Ar || (Ar = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), r0());
    })(U, function(n) {
      return n.pad.Iso10126 = {
        pad: function(e, s) {
          var c = s * 4, B = c - e.sigBytes % c;
          e.concat(n.lib.WordArray.random(B - 1)).concat(n.lib.WordArray.create([B << 24], 1));
        },
        unpad: function(e) {
          var s = e.words[e.sigBytes - 1 >>> 2] & 255;
          e.sigBytes -= s;
        }
      }, n.pad.Iso10126;
    });
  }(he)), he.exports;
}
var Be = { exports: {} }, _r;
function wt() {
  return _r || (_r = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), r0());
    })(U, function(n) {
      return n.pad.Iso97971 = {
        pad: function(e, s) {
          e.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(e, s);
        },
        unpad: function(e) {
          n.pad.ZeroPadding.unpad(e), e.sigBytes--;
        }
      }, n.pad.Iso97971;
    });
  }(Be)), Be.exports;
}
var Ce = { exports: {} }, Dr;
function St() {
  return Dr || (Dr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), r0());
    })(U, function(n) {
      return n.pad.ZeroPadding = {
        pad: function(e, s) {
          var c = s * 4;
          e.clamp(), e.sigBytes += c - (e.sigBytes % c || c);
        },
        unpad: function(e) {
          for (var s = e.words, c = e.sigBytes - 1, c = e.sigBytes - 1; c >= 0; c--)
            if (s[c >>> 2] >>> 24 - c % 4 * 8 & 255) {
              e.sigBytes = c + 1;
              break;
            }
        }
      }, n.pad.ZeroPadding;
    });
  }(Ce)), Ce.exports;
}
var Ee = { exports: {} }, Fr;
function Rt() {
  return Fr || (Fr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), r0());
    })(U, function(n) {
      return n.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, n.pad.NoPadding;
    });
  }(Ee)), Ee.exports;
}
var Ae = { exports: {} }, br;
function Ht() {
  return br || (br = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), r0());
    })(U, function(n) {
      return function(e) {
        var s = n, c = s.lib, B = c.CipherParams, u = s.enc, f = u.Hex, r = s.format;
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
          stringify: function(t) {
            return t.ciphertext.toString(f);
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
          parse: function(t) {
            var C = f.parse(t);
            return B.create({ ciphertext: C });
          }
        };
      }(), n.format.Hex;
    });
  }(Ae)), Ae.exports;
}
var _e = { exports: {} }, yr;
function Tt() {
  return yr || (yr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.BlockCipher, B = e.algo, u = [], f = [], r = [], t = [], C = [], i = [], p = [], d = [], v = [], x = [];
        (function() {
          for (var a = [], l = 0; l < 256; l++)
            l < 128 ? a[l] = l << 1 : a[l] = l << 1 ^ 283;
          for (var A = 0, _ = 0, l = 0; l < 256; l++) {
            var b = _ ^ _ << 1 ^ _ << 2 ^ _ << 3 ^ _ << 4;
            b = b >>> 8 ^ b & 255 ^ 99, u[A] = b, f[b] = A;
            var y = a[A], P = a[y], E = a[P], F = a[b] * 257 ^ b * 16843008;
            r[A] = F << 24 | F >>> 8, t[A] = F << 16 | F >>> 16, C[A] = F << 8 | F >>> 24, i[A] = F;
            var F = E * 16843009 ^ P * 65537 ^ y * 257 ^ A * 16843008;
            p[b] = F << 24 | F >>> 8, d[b] = F << 16 | F >>> 16, v[b] = F << 8 | F >>> 24, x[b] = F, A ? (A = y ^ a[a[a[E ^ y]]], _ ^= a[a[_]]) : A = _ = 1;
          }
        })();
        var h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], o = B.AES = c.extend({
          _doReset: function() {
            var a;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var l = this._keyPriorReset = this._key, A = l.words, _ = l.sigBytes / 4, b = this._nRounds = _ + 6, y = (b + 1) * 4, P = this._keySchedule = [], E = 0; E < y; E++)
                E < _ ? P[E] = A[E] : (a = P[E - 1], E % _ ? _ > 6 && E % _ == 4 && (a = u[a >>> 24] << 24 | u[a >>> 16 & 255] << 16 | u[a >>> 8 & 255] << 8 | u[a & 255]) : (a = a << 8 | a >>> 24, a = u[a >>> 24] << 24 | u[a >>> 16 & 255] << 16 | u[a >>> 8 & 255] << 8 | u[a & 255], a ^= h[E / _ | 0] << 24), P[E] = P[E - _] ^ a);
              for (var F = this._invKeySchedule = [], R = 0; R < y; R++) {
                var E = y - R;
                if (R % 4)
                  var a = P[E];
                else
                  var a = P[E - 4];
                R < 4 || E <= 4 ? F[R] = a : F[R] = p[u[a >>> 24]] ^ d[u[a >>> 16 & 255]] ^ v[u[a >>> 8 & 255]] ^ x[u[a & 255]];
              }
            }
          },
          encryptBlock: function(a, l) {
            this._doCryptBlock(a, l, this._keySchedule, r, t, C, i, u);
          },
          decryptBlock: function(a, l) {
            var A = a[l + 1];
            a[l + 1] = a[l + 3], a[l + 3] = A, this._doCryptBlock(a, l, this._invKeySchedule, p, d, v, x, f);
            var A = a[l + 1];
            a[l + 1] = a[l + 3], a[l + 3] = A;
          },
          _doCryptBlock: function(a, l, A, _, b, y, P, E) {
            for (var F = this._nRounds, R = a[l] ^ A[0], w = a[l + 1] ^ A[1], S = a[l + 2] ^ A[2], $ = a[l + 3] ^ A[3], L = 4, j = 1; j < F; j++) {
              var K = _[R >>> 24] ^ b[w >>> 16 & 255] ^ y[S >>> 8 & 255] ^ P[$ & 255] ^ A[L++], M = _[w >>> 24] ^ b[S >>> 16 & 255] ^ y[$ >>> 8 & 255] ^ P[R & 255] ^ A[L++], z = _[S >>> 24] ^ b[$ >>> 16 & 255] ^ y[R >>> 8 & 255] ^ P[w & 255] ^ A[L++], m = _[$ >>> 24] ^ b[R >>> 16 & 255] ^ y[w >>> 8 & 255] ^ P[S & 255] ^ A[L++];
              R = K, w = M, S = z, $ = m;
            }
            var K = (E[R >>> 24] << 24 | E[w >>> 16 & 255] << 16 | E[S >>> 8 & 255] << 8 | E[$ & 255]) ^ A[L++], M = (E[w >>> 24] << 24 | E[S >>> 16 & 255] << 16 | E[$ >>> 8 & 255] << 8 | E[R & 255]) ^ A[L++], z = (E[S >>> 24] << 24 | E[$ >>> 16 & 255] << 16 | E[R >>> 8 & 255] << 8 | E[w & 255]) ^ A[L++], m = (E[$ >>> 24] << 24 | E[R >>> 16 & 255] << 16 | E[w >>> 8 & 255] << 8 | E[S & 255]) ^ A[L++];
            a[l] = K, a[l + 1] = M, a[l + 2] = z, a[l + 3] = m;
          },
          keySize: 256 / 32
        });
        e.AES = c._createHelper(o);
      }(), n.AES;
    });
  }(_e)), _e.exports;
}
var De = { exports: {} }, gr;
function Pt() {
  return gr || (gr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.WordArray, B = s.BlockCipher, u = e.algo, f = [
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
        ], t = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], C = [
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
        ], p = u.DES = B.extend({
          _doReset: function() {
            for (var h = this._key, o = h.words, a = [], l = 0; l < 56; l++) {
              var A = f[l] - 1;
              a[l] = o[A >>> 5] >>> 31 - A % 32 & 1;
            }
            for (var _ = this._subKeys = [], b = 0; b < 16; b++) {
              for (var y = _[b] = [], P = t[b], l = 0; l < 24; l++)
                y[l / 6 | 0] |= a[(r[l] - 1 + P) % 28] << 31 - l % 6, y[4 + (l / 6 | 0)] |= a[28 + (r[l + 24] - 1 + P) % 28] << 31 - l % 6;
              y[0] = y[0] << 1 | y[0] >>> 31;
              for (var l = 1; l < 7; l++)
                y[l] = y[l] >>> (l - 1) * 4 + 3;
              y[7] = y[7] << 5 | y[7] >>> 27;
            }
            for (var E = this._invSubKeys = [], l = 0; l < 16; l++)
              E[l] = _[15 - l];
          },
          encryptBlock: function(h, o) {
            this._doCryptBlock(h, o, this._subKeys);
          },
          decryptBlock: function(h, o) {
            this._doCryptBlock(h, o, this._invSubKeys);
          },
          _doCryptBlock: function(h, o, a) {
            this._lBlock = h[o], this._rBlock = h[o + 1], d.call(this, 4, 252645135), d.call(this, 16, 65535), v.call(this, 2, 858993459), v.call(this, 8, 16711935), d.call(this, 1, 1431655765);
            for (var l = 0; l < 16; l++) {
              for (var A = a[l], _ = this._lBlock, b = this._rBlock, y = 0, P = 0; P < 8; P++)
                y |= C[P][((b ^ A[P]) & i[P]) >>> 0];
              this._lBlock = b, this._rBlock = _ ^ y;
            }
            var E = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = E, d.call(this, 1, 1431655765), v.call(this, 8, 16711935), v.call(this, 2, 858993459), d.call(this, 16, 65535), d.call(this, 4, 252645135), h[o] = this._lBlock, h[o + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function d(h, o) {
          var a = (this._lBlock >>> h ^ this._rBlock) & o;
          this._rBlock ^= a, this._lBlock ^= a << h;
        }
        function v(h, o) {
          var a = (this._rBlock >>> h ^ this._lBlock) & o;
          this._lBlock ^= a, this._rBlock ^= a << h;
        }
        e.DES = B._createHelper(p);
        var x = u.TripleDES = B.extend({
          _doReset: function() {
            var h = this._key, o = h.words;
            if (o.length !== 2 && o.length !== 4 && o.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var a = o.slice(0, 2), l = o.length < 4 ? o.slice(0, 2) : o.slice(2, 4), A = o.length < 6 ? o.slice(0, 2) : o.slice(4, 6);
            this._des1 = p.createEncryptor(c.create(a)), this._des2 = p.createEncryptor(c.create(l)), this._des3 = p.createEncryptor(c.create(A));
          },
          encryptBlock: function(h, o) {
            this._des1.encryptBlock(h, o), this._des2.decryptBlock(h, o), this._des3.encryptBlock(h, o);
          },
          decryptBlock: function(h, o) {
            this._des3.decryptBlock(h, o), this._des2.encryptBlock(h, o), this._des1.decryptBlock(h, o);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        e.TripleDES = B._createHelper(x);
      }(), n.TripleDES;
    });
  }(De)), De.exports;
}
var Fe = { exports: {} }, mr;
function zt() {
  return mr || (mr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.StreamCipher, B = e.algo, u = B.RC4 = c.extend({
          _doReset: function() {
            for (var t = this._key, C = t.words, i = t.sigBytes, p = this._S = [], d = 0; d < 256; d++)
              p[d] = d;
            for (var d = 0, v = 0; d < 256; d++) {
              var x = d % i, h = C[x >>> 2] >>> 24 - x % 4 * 8 & 255;
              v = (v + p[d] + h) % 256;
              var o = p[d];
              p[d] = p[v], p[v] = o;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(t, C) {
            t[C] ^= f.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function f() {
          for (var t = this._S, C = this._i, i = this._j, p = 0, d = 0; d < 4; d++) {
            C = (C + 1) % 256, i = (i + t[C]) % 256;
            var v = t[C];
            t[C] = t[i], t[i] = v, p |= t[(t[C] + t[i]) % 256] << 24 - d * 8;
          }
          return this._i = C, this._j = i, p;
        }
        e.RC4 = c._createHelper(u);
        var r = B.RC4Drop = u.extend({
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
            for (var t = this.cfg.drop; t > 0; t--)
              f.call(this);
          }
        });
        e.RC4Drop = c._createHelper(r);
      }(), n.RC4;
    });
  }(Fe)), Fe.exports;
}
var be = { exports: {} }, kr;
function qt() {
  return kr || (kr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.StreamCipher, B = e.algo, u = [], f = [], r = [], t = B.Rabbit = c.extend({
          _doReset: function() {
            for (var i = this._key.words, p = this.cfg.iv, d = 0; d < 4; d++)
              i[d] = (i[d] << 8 | i[d] >>> 24) & 16711935 | (i[d] << 24 | i[d] >>> 8) & 4278255360;
            var v = this._X = [
              i[0],
              i[3] << 16 | i[2] >>> 16,
              i[1],
              i[0] << 16 | i[3] >>> 16,
              i[2],
              i[1] << 16 | i[0] >>> 16,
              i[3],
              i[2] << 16 | i[1] >>> 16
            ], x = this._C = [
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
            for (var d = 0; d < 4; d++)
              C.call(this);
            for (var d = 0; d < 8; d++)
              x[d] ^= v[d + 4 & 7];
            if (p) {
              var h = p.words, o = h[0], a = h[1], l = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, A = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360, _ = l >>> 16 | A & 4294901760, b = A << 16 | l & 65535;
              x[0] ^= l, x[1] ^= _, x[2] ^= A, x[3] ^= b, x[4] ^= l, x[5] ^= _, x[6] ^= A, x[7] ^= b;
              for (var d = 0; d < 4; d++)
                C.call(this);
            }
          },
          _doProcessBlock: function(i, p) {
            var d = this._X;
            C.call(this), u[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, u[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, u[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, u[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
            for (var v = 0; v < 4; v++)
              u[v] = (u[v] << 8 | u[v] >>> 24) & 16711935 | (u[v] << 24 | u[v] >>> 8) & 4278255360, i[p + v] ^= u[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function C() {
          for (var i = this._X, p = this._C, d = 0; d < 8; d++)
            f[d] = p[d];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < f[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < f[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < f[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < f[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < f[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < f[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < f[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < f[7] >>> 0 ? 1 : 0;
          for (var d = 0; d < 8; d++) {
            var v = i[d] + p[d], x = v & 65535, h = v >>> 16, o = ((x * x >>> 17) + x * h >>> 15) + h * h, a = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            r[d] = o ^ a;
          }
          i[0] = r[0] + (r[7] << 16 | r[7] >>> 16) + (r[6] << 16 | r[6] >>> 16) | 0, i[1] = r[1] + (r[0] << 8 | r[0] >>> 24) + r[7] | 0, i[2] = r[2] + (r[1] << 16 | r[1] >>> 16) + (r[0] << 16 | r[0] >>> 16) | 0, i[3] = r[3] + (r[2] << 8 | r[2] >>> 24) + r[1] | 0, i[4] = r[4] + (r[3] << 16 | r[3] >>> 16) + (r[2] << 16 | r[2] >>> 16) | 0, i[5] = r[5] + (r[4] << 8 | r[4] >>> 24) + r[3] | 0, i[6] = r[6] + (r[5] << 16 | r[5] >>> 16) + (r[4] << 16 | r[4] >>> 16) | 0, i[7] = r[7] + (r[6] << 8 | r[6] >>> 24) + r[5] | 0;
        }
        e.Rabbit = c._createHelper(t);
      }(), n.Rabbit;
    });
  }(be)), be.exports;
}
var ye = { exports: {} }, wr;
function Ot() {
  return wr || (wr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.StreamCipher, B = e.algo, u = [], f = [], r = [], t = B.RabbitLegacy = c.extend({
          _doReset: function() {
            var i = this._key.words, p = this.cfg.iv, d = this._X = [
              i[0],
              i[3] << 16 | i[2] >>> 16,
              i[1],
              i[0] << 16 | i[3] >>> 16,
              i[2],
              i[1] << 16 | i[0] >>> 16,
              i[3],
              i[2] << 16 | i[1] >>> 16
            ], v = this._C = [
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
              C.call(this);
            for (var x = 0; x < 8; x++)
              v[x] ^= d[x + 4 & 7];
            if (p) {
              var h = p.words, o = h[0], a = h[1], l = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, A = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360, _ = l >>> 16 | A & 4294901760, b = A << 16 | l & 65535;
              v[0] ^= l, v[1] ^= _, v[2] ^= A, v[3] ^= b, v[4] ^= l, v[5] ^= _, v[6] ^= A, v[7] ^= b;
              for (var x = 0; x < 4; x++)
                C.call(this);
            }
          },
          _doProcessBlock: function(i, p) {
            var d = this._X;
            C.call(this), u[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, u[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, u[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, u[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
            for (var v = 0; v < 4; v++)
              u[v] = (u[v] << 8 | u[v] >>> 24) & 16711935 | (u[v] << 24 | u[v] >>> 8) & 4278255360, i[p + v] ^= u[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function C() {
          for (var i = this._X, p = this._C, d = 0; d < 8; d++)
            f[d] = p[d];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < f[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < f[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < f[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < f[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < f[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < f[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < f[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < f[7] >>> 0 ? 1 : 0;
          for (var d = 0; d < 8; d++) {
            var v = i[d] + p[d], x = v & 65535, h = v >>> 16, o = ((x * x >>> 17) + x * h >>> 15) + h * h, a = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            r[d] = o ^ a;
          }
          i[0] = r[0] + (r[7] << 16 | r[7] >>> 16) + (r[6] << 16 | r[6] >>> 16) | 0, i[1] = r[1] + (r[0] << 8 | r[0] >>> 24) + r[7] | 0, i[2] = r[2] + (r[1] << 16 | r[1] >>> 16) + (r[0] << 16 | r[0] >>> 16) | 0, i[3] = r[3] + (r[2] << 8 | r[2] >>> 24) + r[1] | 0, i[4] = r[4] + (r[3] << 16 | r[3] >>> 16) + (r[2] << 16 | r[2] >>> 16) | 0, i[5] = r[5] + (r[4] << 8 | r[4] >>> 24) + r[3] | 0, i[6] = r[6] + (r[5] << 16 | r[5] >>> 16) + (r[4] << 16 | r[4] >>> 16) | 0, i[7] = r[7] + (r[6] << 8 | r[6] >>> 24) + r[5] | 0;
        }
        e.RabbitLegacy = c._createHelper(t);
      }(), n.RabbitLegacy;
    });
  }(ye)), ye.exports;
}
var ge = { exports: {} }, Sr;
function $t() {
  return Sr || (Sr = 1, function(D, g) {
    (function(n, e, s) {
      D.exports = e(V(), A0(), _0(), E0(), r0());
    })(U, function(n) {
      return function() {
        var e = n, s = e.lib, c = s.BlockCipher, B = e.algo;
        const u = 16, f = [
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
        var t = {
          pbox: [],
          sbox: []
        };
        function C(x, h) {
          let o = h >> 24 & 255, a = h >> 16 & 255, l = h >> 8 & 255, A = h & 255, _ = x.sbox[0][o] + x.sbox[1][a];
          return _ = _ ^ x.sbox[2][l], _ = _ + x.sbox[3][A], _;
        }
        function i(x, h, o) {
          let a = h, l = o, A;
          for (let _ = 0; _ < u; ++_)
            a = a ^ x.pbox[_], l = C(x, a) ^ l, A = a, a = l, l = A;
          return A = a, a = l, l = A, l = l ^ x.pbox[u], a = a ^ x.pbox[u + 1], { left: a, right: l };
        }
        function p(x, h, o) {
          let a = h, l = o, A;
          for (let _ = u + 1; _ > 1; --_)
            a = a ^ x.pbox[_], l = C(x, a) ^ l, A = a, a = l, l = A;
          return A = a, a = l, l = A, l = l ^ x.pbox[1], a = a ^ x.pbox[0], { left: a, right: l };
        }
        function d(x, h, o) {
          for (let b = 0; b < 4; b++) {
            x.sbox[b] = [];
            for (let y = 0; y < 256; y++)
              x.sbox[b][y] = r[b][y];
          }
          let a = 0;
          for (let b = 0; b < u + 2; b++)
            x.pbox[b] = f[b] ^ h[a], a++, a >= o && (a = 0);
          let l = 0, A = 0, _ = 0;
          for (let b = 0; b < u + 2; b += 2)
            _ = i(x, l, A), l = _.left, A = _.right, x.pbox[b] = l, x.pbox[b + 1] = A;
          for (let b = 0; b < 4; b++)
            for (let y = 0; y < 256; y += 2)
              _ = i(x, l, A), l = _.left, A = _.right, x.sbox[b][y] = l, x.sbox[b][y + 1] = A;
          return !0;
        }
        var v = B.Blowfish = c.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var x = this._keyPriorReset = this._key, h = x.words, o = x.sigBytes / 4;
              d(t, h, o);
            }
          },
          encryptBlock: function(x, h) {
            var o = i(t, x[h], x[h + 1]);
            x[h] = o.left, x[h + 1] = o.right;
          },
          decryptBlock: function(x, h) {
            var o = p(t, x[h], x[h + 1]);
            x[h] = o.left, x[h + 1] = o.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        e.Blowfish = c._createHelper(v);
      }(), n.Blowfish;
    });
  }(ge)), ge.exports;
}
(function(D, g) {
  (function(n, e, s) {
    D.exports = e(V(), V0(), vt(), pt(), A0(), ht(), _0(), Pr(), ze(), Bt(), zr(), Ct(), Et(), At(), qe(), _t(), E0(), r0(), Dt(), Ft(), bt(), yt(), gt(), mt(), kt(), wt(), St(), Rt(), Ht(), Tt(), Pt(), zt(), qt(), Ot(), $t());
  })(U, function(n) {
    return n;
  });
})(Tr);
var Lt = Tr.exports;
const I0 = /* @__PURE__ */ st(Lt);
let q0 = null;
const qr = "__store__", Or = "__store_secret__";
function me(D) {
  const g = I0.lib.WordArray.random(32).toString();
  localStorage.setItem(Or, g);
  const n = I0.AES.encrypt(JSON.stringify(D), g).toString();
  localStorage.setItem(qr, n), q0 = D;
}
function Ut() {
  const D = localStorage.getItem(qr), g = localStorage.getItem(Or);
  if (!D || !g) return null;
  try {
    const e = I0.AES.decrypt(D, g).toString(I0.enc.Utf8);
    return JSON.parse(e);
  } catch (n) {
    return console.error("解密失败", n), null;
  }
}
const ke = {
  /**
   * ⚡ set 只设置权限数组 !!!
   */
  set(D) {
    const n = {
      ...this.get() || {
        permissions: [],
        perEnabled: !0
      },
      permissions: D
      // ✔ 只修改 permissions
    };
    me(n);
  },
  /**
   * ⚡ get 返回完整结构
   */
  get() {
    if (q0 !== null) return q0;
    const D = Ut();
    return D ? (q0 = D, q0) : null;
  },
  /**
   * 判断权限
   */
  hasPer(D) {
    const g = this.get();
    if (!g) return !1;
    const { permissions: n, perEnabled: e } = g;
    return e ? Array.isArray(n) && n.includes(D) : !0;
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
    const g = D, n = Y(!1), e = v0("columnSlotMap", Y(/* @__PURE__ */ new Map()));
    function s(B, u) {
      if (typeof B === "function") {
        const r = B(u);
        let t = r == null ? void 0 : r.component;
        return t ? (typeof t == "string" && e.value.has(t) && (n.value = !0, t = e.value.get(t)), { type: "component", component: t, props: r.props || {}, content: r.content ?? null }) : { type: "html", content: String(r ?? "") };
      } else
        return { type: "html", content: String(B ?? "") };
    }
    const c = e0(() => s(g.template, g.data));
    return (B, u) => (O(), J("div", null, [
      c.value.type === "html" ? (O(), J("span", {
        key: 0,
        innerHTML: c.value.content
      }, null, 8, It)) : d0("", !0),
      c.value.type === "component" ? (O(), W(Re(c.value.component), Qr(Z({ key: 1 }, n.value ? { content: c.value.content, props: c.value.props } : c.value.props)), {
        default: G(() => [
          C0(y0(c.value.content), 1)
        ]),
        _: 1
      }, 16)) : d0("", !0)
    ]));
  }
};
function Oe() {
  return {
    // ---------- 消息 ----------
    success: (g, n = "top", e = 2e3) => z0({ message: g, type: "success", duration: e, placement: n }),
    error: (g, n = "top", e = 2e3) => z0({ message: g, type: "error", duration: e, placement: n }),
    info: (g, n = "top", e = 2e3) => z0({ message: g, type: "info", duration: e, placement: n }),
    warning: (g, n = "top", e = 2e3) => z0({ message: g, type: "warning", duration: e, placement: n }),
    primary: (g, n = "top", e = 2e3) => z0({ message: g, type: "primary", duration: e, placement: n }),
    // ---------- 确认框 ----------
    confirm: (g, n = "提示", e = "warning") => tt.confirm(g, n, {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: e
    }),
    // ---------- 通知 ----------
    notify: (g, n = "消息", e = "", s = 0) => {
      rt({
        title: n,
        message: g,
        duration: s,
        type: e
      });
    }
  };
}
const Vt = (D, g) => {
  const n = D.__vccOpts || D;
  for (const [e, s] of g)
    n[e] = s;
  return n;
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
    const g = Oe(), n = Y(), e = D, s = Y([]), c = e0(() => e.filter ?? { data: [] }), B = e0(() => {
      var a;
      return ((a = e.table) == null ? void 0 : a.columns) ?? [];
    }), u = e0(() => {
      var a, l;
      return ((a = e.table) == null ? void 0 : a.tableType) === "treetable" ? x(e.table.data) : ((l = e.table) == null ? void 0 : l.data) ?? [];
    }), f = e0(() => {
      var a;
      return ((a = e.table) == null ? void 0 : a.pagination) ?? {
        index: 1,
        size: 10,
        options: [10, 20, 30],
        total: 0
      };
    }), r = e0(() => {
      var a;
      return ((a = e.table) == null ? void 0 : a.attr) ?? {
        loading: !1,
        dataKey: "id",
        dataParentKey: "pid",
        defaultColumnType: "selection",
        enabledDefaultColumn: !0,
        expandAll: !1
      };
    }), t = e0(() => e.tablebar ?? {
      title: "工具栏",
      width: "",
      align: "center",
      position: "right",
      actions: []
    }), C = e0(() => t.value.actions.filter((a) => ke.hasPer(a.perKey))), i = e0(() => e.toolbar ?? { actions: [] }), p = (a) => {
      e.table && (e.table.pagination.size = a);
    }, d = (a) => {
      e.table && (e.table.pagination.index = a, e.table._load());
    }, v = (a) => {
      let l = {};
      a || s.value.forEach((A, _) => {
        A.value = A.defaultValue ?? "";
      }), e.table && (l = o(), e.table._setQueryParams(l), e.table._load());
    }, x = (a) => {
      const l = r.value.dataKey, A = r.value.dataParentKey, _ = (F) => (F == null ? void 0 : F.toString().trim().toLowerCase()) ?? "", b = a.map((F) => ({
        ...F,
        _id: _(F[l]),
        _pid: _(F[A])
      })), y = new Set(b.map((F) => F._id)), P = b.filter((F) => !y.has(F._pid)), E = (F) => {
        const R = b.filter((w) => w._pid === F._id).map((w) => E(w));
        return {
          key: F._id,
          data: F,
          children: R
        };
      };
      return P.map((F) => E(F));
    }, h = (a, l) => {
      var A;
      if (((A = e.table) == null ? void 0 : A.tableType) === "treetable") {
        let _;
        if (n.value !== void 0) {
          const b = Object.keys(n.value || {})[0] || null;
          b !== null && (_ = u.value.find((y) => y[r.value.dataKey].toLowerCase() === b.toLowerCase()));
        }
        a._command(_, l);
      } else
        a._command(n.value, l);
    };
    Hr(
      () => {
        var a;
        return ((a = e.filter) == null ? void 0 : a.data) ?? [];
      },
      (a) => {
        Array.isArray(a) ? s.value = a.map((l) => ({ ...l })) : s.value = [];
      },
      { immediate: !0 }
    );
    const o = () => {
      let a = {};
      if (e.filter) {
        for (const l of s.value) {
          if (!l.required) continue;
          const A = l.value;
          if (A == null || A === "" || Array.isArray(A) && A.length === 0) {
            g.warning(`请填写【${l.label}】字段`);
            return;
          }
        }
        a = e.filter._buildFunc(s.value);
      }
      return a;
    };
    return W0(() => {
      if (e.table) {
        let a = o();
        e.table._setQueryParams(a), e.table._load();
      }
    }), (a, l) => {
      const A = N("el-input"), _ = N("el-input-number"), b = N("el-option"), y = N("el-select"), P = N("el-date-picker"), E = N("el-switch"), F = N("el-form-item"), R = N("el-col"), w = N("el-button"), S = N("el-row"), $ = N("el-form"), L = N("el-table-column"), j = N("el-table"), K = N("el-pagination"), M = Rr("loading");
      return O(), J("div", Nt, [
        U0("section", null, [
          c0($, null, {
            default: G(() => [
              c.value.data.length > 0 ? (O(), W(S, {
                key: 0,
                gutter: 20
              }, {
                default: G(() => [
                  (O(!0), J(x0, null, f0(s.value, (z, m) => (O(), W(R, {
                    xs: 24,
                    sm: 12,
                    md: 8,
                    lg: 6,
                    xl: 4
                  }, {
                    default: G(() => [
                      c0(F, {
                        label: z.label
                      }, {
                        default: G(() => [
                          z.fieldType === q(B0).TEXT ? (O(), W(A, Z({
                            key: 0,
                            modelValue: z.value,
                            "onUpdate:modelValue": (k) => z.value = k,
                            placeholder: z.placeholder
                          }, { ref_for: !0 }, z.fieldAttr), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder"])) : z.fieldType === q(B0).NUMBER ? (O(), W(_, Z({
                            key: 1,
                            modelValue: z.value,
                            "onUpdate:modelValue": (k) => z.value = k,
                            placeholder: z.placeholder
                          }, { ref_for: !0 }, z.fieldAttr), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder"])) : z.fieldType === q(B0).SELECT ? (O(), W(y, Z({
                            key: 2,
                            modelValue: z.value,
                            "onUpdate:modelValue": (k) => z.value = k,
                            placeholder: z.placeholder
                          }, { ref_for: !0 }, z.fieldAttr), {
                            default: G(() => [
                              (O(!0), J(x0, null, f0(z.options, (k) => (O(), W(b, {
                                key: k.value,
                                label: k.label,
                                value: k.value
                              }, null, 8, ["label", "value"]))), 128))
                            ]),
                            _: 2
                          }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder"])) : z.fieldType === q(B0).DATE ? (O(), W(P, Z({
                            key: 3,
                            modelValue: z.value,
                            "onUpdate:modelValue": (k) => z.value = k,
                            type: "date",
                            placeholder: "请选择日期",
                            format: "YYYY-MM-DD",
                            "value-format": "YYYY-MM-DD"
                          }, { ref_for: !0 }, z.fieldAttr), null, 16, ["modelValue", "onUpdate:modelValue"])) : z.fieldType === q(B0).DATE_RANGE ? (O(), W(P, Z({
                            key: 4,
                            modelValue: z.value,
                            "onUpdate:modelValue": (k) => z.value = k,
                            type: "datetimerange",
                            "range-separator": "至",
                            "start-placeholder": "开始日期",
                            "end-placeholder": "结束日期",
                            format: "YYYY-MM-DD HH:mm:ss",
                            "value-format": "YYYY-MM-DD HH:mm:ss"
                          }, { ref_for: !0 }, z.fieldAttr), null, 16, ["modelValue", "onUpdate:modelValue"])) : z.fieldType === q(B0).SWITCH ? (O(), W(E, Z({
                            key: 5,
                            modelValue: z.value,
                            "onUpdate:modelValue": (k) => z.value = k
                          }, { ref_for: !0 }, z.fieldAttr), null, 16, ["modelValue", "onUpdate:modelValue"])) : d0("", !0)
                        ]),
                        _: 2
                      }, 1032, ["label"])
                    ]),
                    _: 2
                  }, 1024))), 256)),
                  c0(R, {
                    xs: 24,
                    sm: 12,
                    md: 8,
                    lg: 6,
                    xl: 4
                  }, {
                    default: G(() => [
                      c0(w, {
                        type: "primary",
                        onClick: l[0] || (l[0] = (z) => v(!0))
                      }, {
                        default: G(() => [...l[3] || (l[3] = [
                          C0("搜索", -1)
                        ])]),
                        _: 1
                      }),
                      c0(w, {
                        onClick: l[1] || (l[1] = (z) => v(!1))
                      }, {
                        default: G(() => [...l[4] || (l[4] = [
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
          (O(!0), J(x0, null, f0(i.value.actions, (z, m) => (O(), J(x0, { key: m }, [
            q(ke).hasPer(z.perKey) ? (O(), W(w, {
              key: 0,
              icon: z.icon,
              type: z.type ?? "",
              onClick: (k) => h(z, k),
              plain: ""
            }, {
              default: G(() => [
                C0(y0(z.label), 1)
              ]),
              _: 2
            }, 1032, ["icon", "type", "onClick"])) : d0("", !0)
          ], 64))), 128))
        ])) : d0("", !0),
        U0("section", null, [
          Se((O(), W(j, {
            data: u.value,
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
              (O(!0), J(x0, null, f0(B.value, (z, m) => (O(), W(L, Z({
                prop: z.field,
                "show-overflow-tooltip": !0
              }, { ref_for: !0 }, z.attrs), Zr({ _: 2 }, [
                z.template && z.template !== void 0 ? {
                  name: "default",
                  fn: G((k) => [
                    c0(Wt, {
                      template: z.template,
                      data: k.row
                    }, null, 8, ["template", "data"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1040, ["prop"]))), 256)),
              C.value.length > 0 ? (O(), W(L, {
                key: 1,
                label: t.value.title,
                fixed: t.value.position,
                width: t.value.width || "auto",
                align: t.value.align
              }, {
                default: G((z) => [
                  (O(!0), J(x0, null, f0(t.value.actions, (m, k) => (O(), J(x0, { key: k }, [
                    q(ke).hasPer(m.perKey) && m._hideFunc(z.row) ? (O(), W(w, {
                      key: 0,
                      icon: m.icon,
                      type: m.type ?? "primary",
                      size: "small",
                      link: "",
                      onClick: (T) => m._command(z.row, T)
                    }, {
                      default: G(() => [
                        C0(y0(m.label), 1)
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
          U0("div", Mt, [
            c0(K, {
              background: "",
              layout: "total, sizes, prev, pager, next",
              "current-page": f.value.index,
              "onUpdate:currentPage": l[2] || (l[2] = (z) => f.value.index = z),
              total: f.value.total,
              "page-size": f.value.size,
              "page-sizes": f.value.options,
              onChange: d,
              onSizeChange: p
            }, null, 8, ["current-page", "total", "page-size", "page-sizes"])
          ])
        ]),
        c0(it, {
          ref: "dialogRef",
          dialog: D.dialog
        }, null, 8, ["dialog"])
      ]);
    };
  }
}, sa = /* @__PURE__ */ Vt(jt, [["__scopeId", "data-v-2cd224fe"]]), i0 = {
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
    var i, p, d;
    const g = D, n = g.data, e = ((i = g.item) == null ? void 0 : i.disabledLabel) || !1, s = (p = g.item) == null ? void 0 : p.field, c = (d = g.item) == null ? void 0 : d.fieldType, B = e0(() => {
      const v = g.item, x = v == null ? void 0 : v.fieldAttr;
      if (v.attrFunc) {
        let h = v.attrFunc(n, v.fieldAttr);
        Object.assign(x, h);
      }
      return x;
    }), u = Y(!1), f = v0("formSlotMap", Y(/* @__PURE__ */ new Map())), r = e0(() => {
      const v = g.item.component;
      return v ? typeof v == "object" || typeof v == "function" ? v : typeof v == "string" && f.value.has(v) ? (u.value = !0, f.value.get(v)) : null : null;
    }), t = (v) => {
      g.item.command(v, g.item, n);
    }, C = (v) => {
      n[g.item.field] = v, t(v);
    };
    return (v, x) => {
      const h = N("el-input"), o = N("el-input-number"), a = N("el-date-picker"), l = N("el-time-picker"), A = N("el-radio"), _ = N("el-radio-group"), b = N("el-checkbox"), y = N("el-checkbox-group"), P = N("el-option"), E = N("el-select"), F = N("el-tree-select"), R = N("el-switch"), w = N("el-form-item");
      return O(), W(w, {
        label: q(e) ? "" : B.value.label,
        prop: q(s),
        "label-width": q(e) ? 0 : "auto"
      }, {
        default: G(() => [
          r.value ? (O(), W(Re(r.value), Z({
            key: 0,
            onUpdate: x[0] || (x[0] = (S) => C(S))
          }, u.value ? { data: q(n), fieldAttr: B.value } : q(n)), null, 16)) : q(c) === q(i0).INPUT_TEXT ? (O(), W(h, Z({
            key: 1,
            modelValue: q(n)[q(s)],
            "onUpdate:modelValue": x[1] || (x[1] = (S) => q(n)[q(s)] = S),
            onInput: x[2] || (x[2] = (S) => t(S))
          }, B.value), null, 16, ["modelValue"])) : q(c) === q(i0).INPUT_TEXTAREA ? (O(), W(h, Z({
            key: 2,
            type: "textarea",
            modelValue: q(n)[q(s)],
            "onUpdate:modelValue": x[3] || (x[3] = (S) => q(n)[q(s)] = S),
            onInput: x[4] || (x[4] = (S) => t(S))
          }, B.value), null, 16, ["modelValue"])) : q(c) === q(i0).INPUT_NUMBER ? (O(), W(o, Z({
            key: 3,
            modelValue: q(n)[q(s)],
            "onUpdate:modelValue": x[5] || (x[5] = (S) => q(n)[q(s)] = S),
            onChange: x[6] || (x[6] = (S) => t(S)),
            style: { width: "100%" }
          }, B.value), null, 16, ["modelValue"])) : q(c) === q(i0).DATE_PICKER ? (O(), W(a, Z({
            key: 4,
            modelValue: q(n)[q(s)],
            "onUpdate:modelValue": x[7] || (x[7] = (S) => q(n)[q(s)] = S),
            type: "date",
            onChange: x[8] || (x[8] = (S) => t(S)),
            style: { width: "100%" }
          }, B.value), null, 16, ["modelValue"])) : q(c) === q(i0).TIME_PICKER ? (O(), W(l, Z({
            key: 5,
            modelValue: q(n)[q(s)],
            "onUpdate:modelValue": x[9] || (x[9] = (S) => q(n)[q(s)] = S),
            onChange: x[10] || (x[10] = (S) => t(S)),
            style: { width: "100%" }
          }, B.value), null, 16, ["modelValue"])) : q(c) === q(i0).RADIO_BUTTON ? (O(), W(_, Z({
            key: 6,
            modelValue: q(n)[q(s)],
            "onUpdate:modelValue": x[11] || (x[11] = (S) => q(n)[q(s)] = S),
            onChange: x[12] || (x[12] = (S) => t(S))
          }, B.value), {
            default: G(() => [
              (O(!0), J(x0, null, f0(B.value.options, (S) => (O(), W(A, {
                key: S.value,
                label: S.value
              }, {
                default: G(() => [
                  C0(y0(S.label), 1)
                ]),
                _: 2
              }, 1032, ["label"]))), 128))
            ]),
            _: 1
          }, 16, ["modelValue"])) : q(c) === q(i0).CHECKBOX ? (O(), W(y, Z({
            key: 7,
            modelValue: q(n)[q(s)],
            "onUpdate:modelValue": x[13] || (x[13] = (S) => q(n)[q(s)] = S),
            onChange: x[14] || (x[14] = (S) => t(S))
          }, B.value), {
            default: G(() => [
              (O(!0), J(x0, null, f0(B.value.options, (S) => (O(), W(b, {
                key: S.value,
                label: S.value
              }, {
                default: G(() => [
                  C0(y0(S.label), 1)
                ]),
                _: 2
              }, 1032, ["label"]))), 128))
            ]),
            _: 1
          }, 16, ["modelValue"])) : q(c) === q(i0).SELECT ? (O(), W(E, Z({
            key: 8,
            modelValue: q(n)[q(s)],
            "onUpdate:modelValue": x[15] || (x[15] = (S) => q(n)[q(s)] = S),
            onChange: x[16] || (x[16] = (S) => t(S)),
            style: { width: "100%" }
          }, B.value), {
            default: G(() => [
              (O(!0), J(x0, null, f0(B.value.options, (S) => (O(), W(P, {
                key: S.value,
                label: S.label,
                value: S.value
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 16, ["modelValue"])) : q(c) === q(i0).TREE_SELECT ? (O(), W(F, Z({
            key: 9,
            modelValue: q(n)[q(s)],
            "onUpdate:modelValue": x[17] || (x[17] = (S) => q(n)[q(s)] = S),
            data: B.value.options,
            "value-key": B.value.valueKey || "id",
            "show-checkbox": B.value.showCheck ?? !0,
            "render-after-expand": !1,
            props: B.value.props,
            style: { width: "100%" },
            "check-strictly": "",
            onChange: x[18] || (x[18] = (S) => t(S))
          }, B.value), null, 16, ["modelValue", "data", "value-key", "show-checkbox", "props"])) : q(c) === q(i0).TOGGLE_BUTTON ? (O(), W(R, Z({
            key: 10,
            modelValue: q(n)[q(s)],
            "onUpdate:modelValue": x[19] || (x[19] = (S) => q(n)[q(s)] = S),
            onChange: x[20] || (x[20] = (S) => t(S))
          }, B.value), null, 16, ["modelValue"])) : d0("", !0)
        ]),
        _: 1
      }, 8, ["label", "prop", "label-width"]);
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
  setup(D, { expose: g }) {
    const n = D, e = Y(null), s = u0(n.config ?? []), c = u0(n.data ?? {});
    console.log("formData", c);
    const B = e0(() => {
      const f = {};
      return n.config.flat().forEach((r) => {
        const t = r.hideFunc ? r.hideFunc(c) : !0, C = [];
        r.fieldAttr.require && t && (C.push({
          required: !0,
          message: `${r.fieldAttr.label}为必填项`,
          trigger: "blur"
        }), Array.isArray(r.rules) && C.push(...r.rules), f[r.field] = C);
      }), f;
    }), u = (f, r) => {
      const t = f.filter((d) => d.hideFunc(c)).length, C = 24, i = Math.floor(C / t), p = C % t;
      return i + (r < p ? 1 : 0);
    };
    return g({
      formRef: e,
      formData: c,
      valid: () => new Promise((f, r) => {
        var t;
        (t = e.value) == null || t.validate((C, i) => {
          C ? f(!0) : r(i);
        });
      }),
      reset: () => {
        var f;
        return (f = e.value) == null ? void 0 : f.resetFields();
      }
    }), (f, r) => {
      const t = N("el-col"), C = N("el-row"), i = N("el-form");
      return O(), J("div", null, [
        c0(i, {
          model: c,
          rules: B.value,
          ref_key: "formRef",
          ref: e,
          "label-width": "auto"
        }, {
          default: G(() => [
            (O(!0), J(x0, null, f0(s, (p, d) => (O(), W(C, {
              key: d,
              gutter: 20
            }, {
              default: G(() => [
                (O(!0), J(x0, null, f0(p, (v, x) => Se((O(), W(t, {
                  key: v.field,
                  span: u(p, x)
                }, {
                  default: G(() => [
                    c0(Xt, {
                      item: v,
                      data: c
                    }, null, 8, ["item", "data"])
                  ]),
                  _: 2
                }, 1032, ["span"])), [
                  [Jr, v.hideFunc(c)]
                ])), 128))
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 1
        }, 8, ["model", "rules"])
      ]);
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
    const g = D, n = v0("dialogSlotMap"), e = He();
    return W0(() => {
      n.value.set(g.name, g0({ render: () => {
        var s;
        return (s = e.default) == null ? void 0 : s.call(e);
      } }));
    }), Te(() => {
      n.value.delete(g.name);
    }), (s, c) => null;
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
  setup(D, { emit: g }) {
    const n = D, e = v0("formSlotMap"), s = He();
    return W0(() => {
      const c = s.default;
      e.value.set(
        n.name,
        g0({
          // 这里返回的是函数式组件对象
          setup(B, { emit: u, attrs: f }) {
            return () => c == null ? void 0 : c({
              props: B,
              // 外部传入的数据都在 attrs
              data: f.data,
              fieldArr: f.fieldArr,
              emit: u
            });
          },
          emits: ["update"]
        })
      );
    }), Te(() => {
      e.value.delete(n.name);
    }), (c, B) => null;
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
    const g = D, n = v0("columnSlotMap"), e = He();
    return W0(() => {
      const s = e.default;
      n.value.set(
        g.name,
        g0({
          // 这里返回的是函数式组件对象
          setup(c, { attrs: B }) {
            return () => s == null ? void 0 : s({
              props: c,
              // 外部传入的数据都在 attrs
              attrs: B.props,
              content: B.content
            });
          }
        })
      );
    }), Te(() => {
      n.value.delete(g.name);
    }), (s, c) => null;
  }
};
function Yt() {
  const D = Y([]), g = u0({
    instance: null,
    //dialogs: readonly(_dialogs.value),
    registerProvide(n, e) {
      if (typeof n != "string")
        return console.warn("[dialog] registerProvide: key 必须为 string，收到:", n), this;
      let s = v0("dialogSlotMap", null);
      return s || (s = Y(/* @__PURE__ */ new Map()), Pe("dialogSlotMap", s)), s.value.set(n, g0(e)), this;
    },
    register(n) {
      const e = `${Date.now()}-${Math.random()}`, s = u0({
        id: e,
        visible: !1,
        loading: !1,
        attrs: {
          title: n || "",
          alignCenter: !1,
          fullscreen: !1,
          draggable: !1,
          width: "50%",
          center: !1
        },
        component: null,
        propsData: {},
        formData: null,
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
      }), c = () => s, B = () => (s.withCancel = !1, x), u = (h) => (s.attrs.title = h, x), f = (h = {}) => typeof h != "object" ? this : (Object.assign(s.attrs, h), x), r = (h = "", o = () => {
      }, a = "info", l = "") => {
        const A = s._actions.findIndex((_) => _.label === h);
        return A > -1 ? s._actions[A] = { label: h, icon: l, type: a, loading: !1, command: o } : s._actions.push({ label: h, icon: l, type: a, loading: !1, command: o }), x;
      }, t = (h, o) => (h && (s.component = g0(h)), o && (s.propsData = o), x), C = (h) => t("form", h), i = (h) => (s.formData = structuredClone(we(h)), x), p = () => {
        s.visible = !0, s.loading = !0, g.instance = {
          get: c,
          destroy: v,
          hide: d
        };
      }, d = () => s.visible = !1, v = () => {
        g.instance && (s.propsData && (s.component === "form" ? (s.formData = null, s.propsData.data = null) : Object.keys(s.propsData).forEach((h) => s.propsData[h] = void 0)), s.visible = !1, s.loading = !1);
      }, x = {
        show: p,
        hide: d,
        destroy: v,
        setTitle: u,
        setAttr: f,
        setBtn: r,
        setComponent: t,
        setForm: C,
        setFormData: i,
        disabledCancel: B
      };
      return D.value.push(s), x;
    }
  });
  return g;
}
const Qt = () => {
  let D = v0("formSlotMap", null);
  D || (D = Y(/* @__PURE__ */ new Map()), Pe("formSlotMap", D));
}, Zt = (D) => {
  const g = {
    setColumn(n, e, s = "") {
      const c = {
        field: n,
        fieldType: i0.INPUT_TEXT,
        fieldAttr: {
          label: s || n,
          placeholder: `请输入${s}`,
          require: !1,
          options: []
        },
        rules: [],
        disabledLabel: !1,
        hideFunc: () => !0,
        attrFunc: null,
        command: () => {
        }
      };
      D.push(c);
      const B = {
        disabledLabel() {
          return c.disabledLabel = !0, B;
        },
        setRule(u) {
          return c.rules = u, B;
        },
        setLabel(u) {
          return c.fieldAttr.label = u, c.fieldAttr.placeholder = `请输入${u}`, B;
        },
        setOptions(u) {
          return c.fieldType = i0.SELECT, c.fieldAttr.options = u, B;
        },
        setType(u) {
          return c.fieldType = u, B;
        },
        setPlaceholder(u) {
          return c.fieldAttr.placeholder = u, B;
        },
        onRequire() {
          return c.fieldAttr.require = !0, B;
        },
        setAttr(u = {}) {
          return typeof u != "object" || Object.assign(c.fieldAttr, u), B;
        },
        setComponent(u) {
          return u && (c.component = g0(u)), B;
        },
        hide(u) {
          return c.hideFunc = u, B;
        },
        on(u) {
          return c.command = u, B;
        },
        change(u) {
          return c.attrFunc = u, B;
        },
        setColumn: g.setColumn
      };
      return typeof e == "function" ? (e(B), g) : B;
    }
  };
  return g;
};
function Jt() {
  Qt();
  const D = Y([]), g = {
    list: m0(D.value),
    get: (n) => D.value.find((e) => e.id === n),
    register(n = "") {
      n = n || `form_${Date.now()}_${D.value.length}`, g.get(n) && console.warn(`Form with id "${n}" already exists. Returning the existing form.`);
      const s = {
        id: n,
        data: {},
        config: [],
        setRow() {
          const c = [];
          return this.config.push(c), Zt(c);
        },
        setData(c) {
          return s.data = c, this;
        }
      };
      return D.value.push(s), s;
    }
  };
  return g;
}
const ea = () => {
  let D = v0("columnSlotMap", null);
  D || (D = Y(/* @__PURE__ */ new Map()), Pe("columnSlotMap", D));
};
function ra() {
  ea();
  const D = Oe(), g = Y([]), n = Y([]), e = Y({}), s = Y(null), c = u0({
    tableType: "default",
    data: e0(() => n.value),
    columns: e0(() => g.value),
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
    _setQueryParams: (B) => {
      e.value = B;
    },
    setPageSize: (B) => {
      c.pagination.size = B;
    },
    setPageOptions: (B) => {
      c.pagination.options = B;
    },
    setRowKey: (B) => {
      c.attr.dataKey = B;
    },
    setParentKey: (B) => {
      c.attr.dataParentKey = B;
    },
    setDefaultColumnType: (B) => {
      c.attr.defaultColumnType = B;
    },
    disabledDefaultCloumn: () => {
      c.attr.enabledDefaultColumn = !1;
    },
    enableTree: () => {
      c.tableType = "treetable";
    },
    setColumn: (B, u = "") => {
      const f = {
        field: B,
        attrs: {
          width: "",
          label: u || B,
          showOverflowTooltip: !0
        },
        template: void 0,
        setAttr(r = {}) {
          return typeof r != "object" ? this : (Object.assign(f.attrs, r), this);
        },
        setTemplate(r) {
          return this.template = r, this;
        }
      };
      return g.value.push(f), f;
    },
    registerLoader: (B) => {
      s.value = B;
    },
    _load: async () => {
      if (typeof s.value != "function") {
        console.warn("未设置 load 函数，请使用 table.registerLoader(fn) 进行设置");
        return;
      }
      c.attr.loading = !0;
      const { index: B = 1, size: u = 10 } = c.pagination ?? {};
      try {
        const f = await s.value({ index: B, size: u }, e.value);
        switch (c.tableType) {
          case "treetable":
            n.value = f;
            break;
          case "default":
          default:
            n.value = f.records ?? [];
            break;
        }
        c.pagination !== null && (c.pagination.total = f.total ?? 0);
      } catch (f) {
        D.error("表格加载数据失败，请稍后重试"), console.error("表格加载数据失败:", f);
      } finally {
        c.attr.loading = !1;
      }
    },
    reload: async () => {
      c.pagination !== null && (c.pagination.index = 1), await c._load();
    }
  });
  return c;
}
function ta() {
  const D = Y([]), g = et(), n = g == null ? void 0 : g.appContext.config.globalProperties.$layoutkitBuildDataFunc, e = u0({
    _overrideBuildFunc: null,
    data: m0(D.value),
    _buildFunc: (s) => e._overrideBuildFunc && typeof e._overrideBuildFunc == "function" ? e._overrideBuildFunc(s) : n && typeof n == "function" ? n(s) : Object.fromEntries(
      s.map((c) => [c.field, c.value])
    ),
    register: (s, c = "") => {
      const B = u0({
        field: s,
        fieldType: B0.TEXT,
        fieldAttr: {
          label: c || s,
          placeholder: `请输入${c || s}`,
          options: [],
          style: void 0
        },
        fieldOperator: "=",
        value: "",
        defaultValue: "",
        required: !1
      }), u = {
        setAttr(f = {}) {
          return typeof f != "object" || Object.assign(B.fieldAttr, f), u;
        },
        setOptions(f) {
          return B.fieldType = B0.SELECT, B.fieldAttr.options = f, u;
        },
        setType(f) {
          return B.fieldType = f, u;
        },
        setValue(f) {
          return B.value = f, u;
        },
        setDefaultValue(f) {
          return B.value = f, B.defaultValue = f, u;
        },
        setOperator(f) {
          return B.fieldOperator = f, u;
        },
        setPlaceholder(f) {
          return B.fieldAttr.placeholder = f, u;
        },
        onRequire() {
          return B.required = !0, u;
        }
      };
      return D.value.push(B), u;
    },
    registerBuildDataFunc: (s) => {
      s && typeof s == "function" && (e._overrideBuildFunc = s);
    }
  });
  return e;
}
function aa(D) {
  const g = Y([]);
  return u0({
    actions: m0(g.value),
    register: (e, s) => {
      let c = `action_${Date.now()}_${g.value.length}`, B = D.get(c);
      const u = { id: c, perKey: B, label: e, icon: "", type: "primary", _command: () => {
      } };
      g.value.push(u);
      const f = {
        enabledPer(r) {
          return u.id = r, u.perKey = D.get(r), f;
        },
        setAttr(r = {}) {
          return "icon" in r && (u.icon = r.icon), "type" in r && (u.type = r.type), f;
        },
        on(r) {
          return u._command = r, f;
        }
      };
      return typeof s == "function" ? (s(f), f) : {
        ...u,
        ...f
      };
    },
    get(e) {
      const s = g.value.find((c) => c.id === e);
      return s ? {
        ...s,
        on(c) {
          return s._command = c, this;
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
  const g = Y([]), n = u0({
    title: "工具栏",
    width: "auto",
    align: "center",
    position: "right",
    // 另外一个 left
    actions: m0(g.value),
    register: (e, s) => {
      let c = `action_${Date.now()}_${g.value.length}`, B = D.get(c);
      const u = { id: c, perKey: B, label: e, icon: "", type: "primary", _command: () => {
      }, _hideFunc: () => !0 };
      g.value.push(u);
      const f = {
        enabledPer(r) {
          return u.id = r, u.perKey = D.get(r), f;
        },
        setAttr(r = {}) {
          return "icon" in r && (u.icon = r.icon), "type" in r && (u.type = r.type), f;
        },
        hide(r) {
          return u._hideFunc = r, f;
        },
        on(r) {
          return u._command = r, f;
        }
      };
      return typeof s == "function" ? (s(f), f) : {
        ...u,
        ...f
      };
    },
    setAttr(e = {}) {
      return "title" in e && (obj.title = e.title), "width" in e && (obj.width = e.width), "align" in e && (obj.align = e.align), "position" in e && (obj.position = e.position), api;
    },
    setTitle: (e) => {
      n.title = e;
    },
    setWidth: (e) => {
      n.width = e;
    },
    setAlign: (e) => {
      n.align = e;
    },
    setPosition: (e) => {
      n.position = e;
    },
    get(e) {
      e = D.get(e);
      const s = g.value.find((c) => c.id === e);
      return s ? {
        ...s,
        hide(c) {
          return s._hideFunc = c, this;
        },
        on(c) {
          return s._command = c, this;
        }
      } : (console.warn(`未找到 tablebar 动作 id = '${e}'`), {
        on: () => {
        }
        // 空方法防止报错
      });
    }
  });
  return n;
}
function xa() {
  const D = Y({});
  return {
    permission: m0(D.value),
    register: (n, e) => {
      D.value[n] = e;
    },
    get: (n) => D.value[n]
  };
}
function ua() {
  const D = xa(), g = aa(D), n = na(D), e = ta(), s = ra(), c = Jt(), B = Oe(), u = Yt();
  u.registerProvide("form", Gt);
  const f = Y({}), r = u0({
    setData(t) {
      return typeof t == "object" && t !== null && Object.keys(t).forEach((C) => {
        f.value[C] = t[C];
      }), this;
    },
    getData() {
      return m0(f.value);
    },
    watch(t, C = {}) {
      return Hr(() => toRaw(f.value), t, { deep: !0, ...C });
    }
  });
  return { table: s, toolbar: g, tablebar: n, filter: e, dialog: u, form: c, key: D, message: B, propsData: r };
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
  i0 as FormEnum,
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
