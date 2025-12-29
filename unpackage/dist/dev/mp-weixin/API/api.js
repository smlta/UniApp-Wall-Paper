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
const setWallScore = (data) => {
  return utils_request.request({
    url: "/setupScore",
    data
  });
};
const writeDownLoadInfo = (data) => {
  return utils_request.request({
    url: "/downloadWall",
    data
  });
};
const apiDetailWall = (data = {}) => {
  return utils_request.request({
    url: "/detailWall",
    data
  });
};
exports.apiDetailWall = apiDetailWall;
exports.getBannerList = getBannerList;
exports.getCategoryList = getCategoryList;
exports.getDayList = getDayList;
exports.getDayNotice = getDayNotice;
exports.getWallCategory = getWallCategory;
exports.setWallScore = setWallScore;
exports.writeDownLoadInfo = writeDownLoadInfo;
//# sourceMappingURL=../../.sourcemap/mp-weixin/API/api.js.map
