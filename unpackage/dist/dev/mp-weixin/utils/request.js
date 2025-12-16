"use strict";
const common_vendor = require("../common/vendor.js");
const request = (config = {}) => {
  const BASE_URL = "https://tea.qingnian8.com/api/bizhi";
  let { url, header = {}, method = "GET", data = {} } = config;
  header["access-Key"] = "Scpsmlt";
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + url,
      method,
      header,
      data,
      success: (res) => {
        if (res.data.errCode === 0) {
          resolve(res);
        } else if (res.data.errCode === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.errMsg,
            showCancel: false
          });
        } else {
          common_vendor.index.showToast({
            title: res.data.errMsg,
            icon: "none"
          });
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
exports.request = request;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/request.js.map
