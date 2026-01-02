"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
const API_api = require("../../API/api.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "usesr",
  setup(__props) {
    const userinfo = common_vendor.ref(null);
    const getuserinfo = async () => {
      const { data: { data } } = await API_api.getUserinfo();
      userinfo.value = data;
    };
    getuserinfo();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: userinfo.value
      }, userinfo.value ? {
        b: common_vendor.unref(utils_system.getNavBarHeight)() + "px",
        c: common_assets._imports_0,
        d: common_vendor.t(userinfo.value.IP),
        e: common_vendor.t(userinfo.value.address.city || userinfo.value.address.province || userinfo.value.address.country),
        f: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        g: common_vendor.t(userinfo.value.downloadSize),
        h: common_vendor.p({
          type: "right",
          size: "30"
        }),
        i: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        j: common_vendor.t(userinfo.value.scoreSize),
        k: common_vendor.p({
          type: "right",
          size: "30"
        }),
        l: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        m: common_vendor.p({
          type: "right",
          size: "30"
        }),
        n: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        o: common_vendor.p({
          type: "right",
          size: "30",
          color: "#aaa"
        }),
        p: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        q: common_vendor.p({
          type: "right",
          size: "30",
          color: "#aaa"
        })
      } : {
        r: common_vendor.unref(utils_system.getNavBarHeight)() + "px",
        s: common_vendor.p({
          status: "loading"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6376ad20"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/usesr/usesr.js.map
