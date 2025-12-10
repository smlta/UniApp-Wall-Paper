<script setup>
	import { ref } from 'vue'
	import {getBannerList,getDayList,getDayNotice} from '@/API/api.js'
	const bannerList = ref([]) //横播图
	const dayList = ref([]) //每日推荐图片
	const noticeList = ref([]) //通知列表
	const gopreview = () => {
		uni.navigateTo({
			url:'/pages/preview/preview'
		})
	} // 跳转预览页
	const getBanner = async () => {
		const res = await getBannerList()
		bannerList.value = res.data.data
	} // 获取轮播图
	const getDayRecommend = async () => {
	 const result = await getDayList()
	 dayList.value = result.data.data
	} //获取每日推荐壁纸
	const getnoticeList = async () => {
	const res = await getDayNotice()
	noticeList.value = res.data.data
	} // 获取通知列表
	getBanner()
	getDayRecommend()
	getnoticeList()
</script>

<template>
	<view class="homeLayout pagebag">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" autoplay>
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons size="20"  type="sound-filled"></uni-icons>
				<text>123</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item v-for="item in noticeList" :key="item._id">
						<navigator url="/pages/notice/detail">
						 {{item.title}}
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
		</view>
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar-filled" size="30" ></uni-icons>
						<view class="text">
							<uni-dateformat :date="new Date()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in dayList" :key="item.classid" @click="gopreview()">
						<image :src="item.smallPicurl"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom><navigator url="" class="more">More+</navigator></template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in 8"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<style scoped lang="scss">
.banner {
	width: 750rpx;
	padding: 30rpx 0;
	swiper {
		width: 750rpx;
		height: 340rpx;
		&-item {
			width: 100%;
			height: 100%;
			padding: 0 30rpx;
			image {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
		}
	}
}
.notice {
	width: 690rpx;
	height: 80rpx;
	background: #f9f9f9;
	margin: 0 auto;
	border-radius: 80rpx;
	display: flex;
	line-height: 80rpx;
	.left {
		width: 140rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		:deep(.uni-icons) {
			color: $brand-theme-color !important;
		} //给.left下所有有uni-icons这个类名的元素设置颜色
		  //这个选择器相当于[data-v-xxx].left .uni-icons
		text {
			color: #28b389;
			font-weight: 600;
			font-size: 28rpx;
		}
	}
	.right {
		width: 70rpx;
	}
	.center {
		flex: 1;
		swiper {
			height: 100%;
			&-item {
				height: 100%;
				font-size: 30rpx;
				color: #666;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
}
.select {
	padding-top: 50rpx;
	.content {
		width: 720rpx;
		margin-top: 30rpx;
		margin-left: 30rpx;
		scroll-view {
			white-space: nowrap;
			.box {
				width: 200rpx;
				height: 430rpx;
				display: inline-block;
				margin-left: 15rpx;
				image {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
			.box:last-child {
				margin-right: 30rpx;
			}
		}
	}
	.date {
		display: flex;
		align-items: center;
		:deep(.uni-icons) {
			color: $brand-theme-color !important;
		}
	}
}
.theme {
	padding: 50rpx 0;
	margin-top: 50rpx;
	.more {
		font-size: 32rpx;
		color: #888;
	}
	.content {
		margin-top: 30rpx;
		padding: 0 30rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15rpx;
	}
}
</style>
