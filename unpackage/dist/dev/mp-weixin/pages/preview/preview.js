"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const API_api = require("../../API/api.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const currentId = common_vendor.ref(null);
    const currentIndex = common_vendor.ref(null);
    const StorageList = common_vendor.ref([]);
    const bigWallList = common_vendor.ref([]);
    const readImag = common_vendor.ref([]);
    const wallInfo = common_vendor.ref(null);
    const isScore = common_vendor.ref(false);
    StorageList.value = common_vendor.index.getStorageSync("cate_wall") || [];
    bigWallList.value = StorageList.value.map((item) => {
      return {
        ...item,
        smallPicurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    const pagealter = (cpage) => {
      currentIndex.value = cpage.detail.current;
      saveImageIndex();
      wallInfo.value = bigWallList.value[currentIndex.value];
    };
    common_vendor.onLoad((e) => {
      currentId.value = e.id;
      currentIndex.value = bigWallList.value.findIndex((item) => item._id === currentId.value);
      wallInfo.value = bigWallList.value[currentIndex.value];
      saveImageIndex();
    });
    const saveImageIndex = () => {
      readImag.value.push(
        currentIndex.value <= 0 ? bigWallList.value.length - 1 : currentIndex.value - 1,
        currentIndex.value,
        currentIndex.value >= bigWallList.value.length - 1 ? 0 : currentIndex.value + 1
      );
      readImag.value = [...new Set(readImag.value)];
    };
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
      if (wallInfo.value.useScore) {
        isScore.value = true;
        wallscore.value = wallInfo.value.useScore;
      }
      ratepop.value.open();
    };
    const closeratepop = () => {
      ratepop.value.close();
      wallscore.value = 0;
      isScore.value = false;
    };
    const confirmrate = async () => {
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      let { classid, _id } = wallInfo.value;
      const res = await API_api.setWallScore({ classid, wallId: _id, userScore: wallscore.value });
      common_vendor.index.hideLoading();
      if (res.data.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
        bigWallList.value[currentIndex.value].useScore = wallscore.value;
        common_vendor.index.setStorageSync("cate_wall", bigWallList.value);
        closeratepop();
      }
    };
    const goback = () => {
      common_vendor.index.navigateBack();
    };
    const clickDownload = () => {
      common_vendor.index.getImageInfo({
        src: wallInfo.value.smallPicurl,
        success: (res) => {
          common_vendor.index.saveImageToPhotosAlbum({
            filePath: res.path,
            success: (res2) => {
              common_vendor.index.__f__("log", "at pages/preview/preview.vue:111", res2);
            }
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(bigWallList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImag.value.includes(index)
          }, readImag.value.includes(index) ? {
            b: item.smallPicurl,
            c: common_vendor.o(maskchange, item._id)
          } : {}, {
            d: item._id
          });
        }),
        b: currentIndex.value,
        c: common_vendor.o(pagealter),
        d: showmask.value
      }, showmask.value ? {
        e: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        f: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        g: common_vendor.o(($event) => goback()),
        h: common_vendor.t(currentIndex.value + 1),
        i: common_vendor.t(bigWallList.value.length),
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        l: common_vendor.p({
          type: "info",
          size: "28"
        }),
        m: common_vendor.o(showpop),
        n: common_vendor.p({
          type: "info",
          size: "28"
        }),
        o: common_vendor.o(showratepop),
        p: common_vendor.p({
          type: "info",
          size: "28"
        }),
        q: common_vendor.o(clickDownload),
        r: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        s: common_vendor.o(closepop),
        t: common_vendor.t(wallInfo.value.classid),
        v: common_vendor.t(wallInfo.value.nickname),
        w: common_vendor.p({
          readonly: true,
          touchable: true,
          value: wallInfo.value.score
        }),
        x: common_vendor.t(wallInfo.value.score),
        y: common_vendor.t(wallInfo.value.description),
        z: common_vendor.f(wallInfo.value.tabs, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab),
            b: tab
          };
        }),
        A: common_vendor.sr(pop, "2dad6c07-6", {
          "k": "pop"
        }),
        B: common_vendor.p({
          type: "bottom"
        }),
        C: common_vendor.t(isScore.value ? "您已经评过分了" : "壁纸评分"),
        D: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        E: common_vendor.o(closeratepop),
        F: common_vendor.o(($event) => wallscore.value = $event),
        G: common_vendor.p({
          ["allow-half"]: true,
          disabled: isScore.value,
          ["disabled-color"]: "#FFCA3E",
          modelValue: wallscore.value
        }),
        H: common_vendor.t(wallscore.value),
        I: !wallscore.value || isScore.value,
        J: common_vendor.o(confirmrate),
        K: common_vendor.sr(ratepop, "2dad6c07-9", {
          "k": "ratepop"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
