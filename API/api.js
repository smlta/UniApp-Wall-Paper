import {request} from '@/utils/request.js' //导入自定义请求模块

//获取banner图
export const getBannerList =  () => {
	return request({
		url: '/homeBanner'
	})
} //该方法返回的是promise对象不过promise里保存着响应的结果

// 获取每日推荐壁纸
export const getDayList = () => {
	return request({
		url: '/randomWall'
	})
}

//获取每日通知
export const getDayNotice = (data) => {
	return request({
		url: '/wallNewsList',
		data
	})
}
//获取壁纸分类列表
export const getWallCategory = (data) => {
	return request({
		url: '/classify',
		data
	})
}

//获取某分类的所有壁纸
export const getCategoryList = (data) => {
	return request({
		url: '/wallList',
		data
	})
}

//设置壁纸评分
export const setWallScore = (data) => {
	return request({
		url: '/setupScore',
		data
	})
}