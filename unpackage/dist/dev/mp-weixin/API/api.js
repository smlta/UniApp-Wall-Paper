"use strict";
const utils_request = require("../utils/request.js");
const getBannerList = () => {
  return utils_request.request({
    url: "/homeBanner"
  });
};
const getDayList = () => {
  return utils_request.request({
    url: "/randomWall"
  });
};
const getDayNotice = (data) => {
  return utils_request.request({
    url: "/wallNewsList",
    data
  });
};
const getWallCategory = (data) => {
  return utils_request.request({
    url: "/classify",
    data
  });
};
const getCategoryList = (data) => {
  return utils_request.request({
    url: "/wallList",
    data
  });
};
exports.getBannerList = getBannerList;
exports.getCategoryList = getCategoryList;
exports.getDayList = getDayList;
exports.getDayNotice = getDayNotice;
exports.getWallCategory = getWallCategory;
//# sourceMappingURL=../../.sourcemap/mp-weixin/API/api.js.map
