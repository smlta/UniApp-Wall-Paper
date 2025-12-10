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
export const getDayNotice = () => {
	return request({
		url: '/wallNewsList'
	})
}
