"use strict";
const common_vendor = require("../../common/vendor.js");
const API_api = require("../../API/api.js");
if (!Array) {
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  _easycom_theme_item2();
}
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  _easycom_theme_item();
}
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    const categoryList = common_vendor.ref([]);
    const getCategory = async () => {
      const { data: { data } } = await API_api.getWallCategory({ pageSize: 15 });
      categoryList.value = data;
    };
    getCategory();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(categoryList.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "6bcfa975-0-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bcfa975"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classify/classify.js.map
