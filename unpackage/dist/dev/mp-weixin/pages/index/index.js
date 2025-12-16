"use strict";
const common_vendor = require("../../common/vendor.js");
const API_api = require("../../API/api.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const dayList = common_vendor.ref([]);
    const noticeList = common_vendor.ref([]);
    const themeList = common_vendor.ref([]);
    const gopreview = () => {
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview"
      });
    };
    const getBanner = async () => {
      const res = await API_api.getBannerList();
      bannerList.value = res.data.data;
    };
    const getDayRecommend = async () => {
      const result = await API_api.getDayList();
      dayList.value = result.data.data;
    };
    const getnoticeList = async () => {
      const res = await API_api.getDayNotice({
        data: {
          select: true
        }
      });
      noticeList.value = res.data.data;
    };
    const getCategory = async () => {
      const { data: { data } } = await API_api.getWallCategory({ select: true });
      themeList.value = data;
    };
    getBanner();
    getDayRecommend();
    getnoticeList();
    getCategory();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return {
            a: item.picurl,
            b: item._id
          };
        }),
        c: common_vendor.p({
          size: "20",
          type: "sound-filled"
        }),
        d: common_vendor.f(noticeList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item._id
          };
        }),
        e: common_vendor.p({
          type: "right",
          size: "16",
          color: "#333"
        }),
        f: common_vendor.p({
          type: "calendar-filled",
          size: "30"
        }),
        g: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "dd日"
        }),
        h: common_vendor.f(dayList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item.classid,
            c: common_vendor.o(($event) => gopreview(), item.classid)
          };
        }),
        i: common_vendor.f(themeList.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "1cf27b2a-7-" + i0,
            c: common_vendor.p({
              item
            })
          };
        }),
        j: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
