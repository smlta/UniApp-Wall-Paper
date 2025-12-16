"use strict";
const common_vendor = require("../../common/vendor.js");
const API_api = require("../../API/api.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "classfiyList",
  setup(__props) {
    const noData = common_vendor.ref(false);
    const query = {
      classid: "",
      name: "",
      pageSize: 12,
      pageNum: 1
    };
    const categoryList = common_vendor.ref([]);
    common_vendor.onLoad((e) => {
      const { _id = null, name = null } = e;
      query.classid = _id;
      query.name = name;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getSomeWallList();
    });
    common_vendor.onReachBottom(() => {
      if (noData.value)
        return;
      query.pageNum++;
      getSomeWallList();
    });
    const getSomeWallList = async () => {
      const { data: { data } } = await API_api.getCategoryList(query);
      categoryList.value = [...categoryList.value, ...data];
      if (query.pageSize > data.length) {
        noData.value = true;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !categoryList.value.length && !noData.value
      }, !categoryList.value.length && !noData.value ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(categoryList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id
          };
        }),
        d: categoryList.value.length || noData.value
      }, categoryList.value.length || noData.value ? {
        e: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-172fbeba"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classfiyList/classfiyList.js.map
