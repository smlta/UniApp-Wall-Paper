"use strict";
const common_vendor = require("../common/vendor.js");
function compareTimestamp(time) {
  const currentTime = (/* @__PURE__ */ new Date()).getTime();
  const timeDiff = currentTime - time;
  if (timeDiff < 6e4) {
    return "一分钟内";
  } else if (timeDiff < 36e5) {
    return Math.floor(timeDiff / 6e4) + "分钟";
  } else if (timeDiff < 864e5) {
    return Math.floor(timeDiff / 36e5) + "小时";
  } else if (timeDiff < 2592e6) {
    return Math.floor(timeDiff / 864e5) + "天";
  } else if (timeDiff < 7776e6) {
    return Math.floor(timeDiff / 2592e6) + "月";
  } else {
    return null;
  }
}
const gotoHome = () => {
  common_vendor.index.showModal({
    title: "提示",
    content: "id未传递,请通过正确方式进入该页面",
    showCancel: false,
    success: (res) => {
      if (res.confirm) {
        common_vendor.index.reLaunch({
          url: "/pages/index/index"
        });
      }
    }
  });
};
exports.compareTimestamp = compareTimestamp;
exports.gotoHome = gotoHome;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/common.js.map
