"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "usesr",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_1$1,
        b: common_vendor.p({
          type: "download-filled",
          size: "20",
          color: "#28b389"
        }),
        c: common_vendor.p({
          type: "right",
          size: "30"
        }),
        d: common_vendor.p({
          type: "download-filled",
          size: "20",
          color: "#28b389"
        }),
        e: common_vendor.p({
          type: "right",
          size: "30"
        }),
        f: common_vendor.p({
          type: "download-filled",
          size: "20",
          color: "#28b389"
        }),
        g: common_vendor.p({
          type: "right",
          size: "30"
        }),
        h: common_vendor.p({
          type: "download-filled",
          size: "20",
          color: "#28b389"
        }),
        i: common_vendor.p({
          type: "right",
          size: "30",
          color: "#aaa"
        }),
        j: common_vendor.p({
          type: "download-filled",
          size: "20",
          color: "#28b389"
        }),
        k: common_vendor.p({
          type: "right",
          size: "30",
          color: "#aaa"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6376ad20"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/usesr/usesr.js.map
