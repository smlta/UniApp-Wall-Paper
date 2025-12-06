"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const showmask = common_vendor.ref(true);
    const pop = common_vendor.ref(null);
    const ratepop = common_vendor.ref(null);
    const wallscore = common_vendor.ref(0);
    const maskchange = () => {
      showmask.value = !showmask.value;
    };
    const showpop = () => {
      pop.value.open();
    };
    const closepop = () => {
      pop.value.close();
    };
    const showratepop = () => {
      ratepop.value.open();
    };
    const closeratepop = () => {
      ratepop.value.close();
    };
    const confirmrate = () => {
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:23", "确定评分");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_1$1,
        c: common_vendor.o(maskchange),
        d: showmask.value
      }, showmask.value ? {
        e: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        f: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        g: common_vendor.p({
          type: "info",
          size: "28"
        }),
        h: common_vendor.o(showpop),
        i: common_vendor.p({
          type: "info",
          size: "28"
        }),
        j: common_vendor.o(showratepop),
        k: common_vendor.p({
          type: "info",
          size: "28"
        }),
        l: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        m: common_vendor.o(closepop),
        n: common_vendor.p({
          readonly: true,
          touchable: true,
          value: "2"
        }),
        o: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        p: common_vendor.sr(pop, "2dad6c07-5", {
          "k": "pop"
        }),
        q: common_vendor.p({
          type: "bottom"
        }),
        r: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        s: common_vendor.o(closeratepop),
        t: common_vendor.o(($event) => wallscore.value = $event),
        v: common_vendor.p({
          ["allow-half"]: true,
          modelValue: wallscore.value
        }),
        w: common_vendor.t(wallscore.value),
        x: !wallscore.value,
        y: common_vendor.o(confirmrate),
        z: common_vendor.sr(ratepop, "2dad6c07-8", {
          "k": "ratepop"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
