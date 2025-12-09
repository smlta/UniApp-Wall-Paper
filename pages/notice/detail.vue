<script setup>

</script>

<template>
<view class="noticeLayout">
	<view class="title">
		<view class="tag">
			<uni-tag inverted text="首页" type="error"></uni-tag>
		</view>
		<view class="font">
			测试文字165165165646,
			测试
		</view>
	</view>
	<view class="info">
		<view class="item">
			水墨兰庭
		</view>
		<view class="item">
			<uni-dateformat :date="Date.now()" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
		</view>
	</view>
	<view class="content">
		内容区域
	</view>
	<view class="count">
		阅读1321
	</view>
</view>

</template>

<style lang="scss" scoped>
 .noticeLayout {
	 padding: 30rpx;
	 .title {
		 font-size: 40rpx;
		 display: flex;
		 color: #111;
		 line-height: 1.6em;
		 padding-bottom: 30rpx;
		 .tag {
			 transform: scale(0.8);
			 transform-origin: left center;
			 flex-shrink: 0;
		 }
		 .font {
			 padding-left: 20rpx;
		 }
	 }
	 .info {
		 display: flex;
		 color: #999;
		 align-items: center;
		 font-size: 28rpx;
		 .item {
			 padding-right: 20rpx;
		 }
	 }
	 .content {
		 padding: 50rpx 0;
		 
	 }
	 .count {
		 color: #999;
		 font-size: 20rpx;
	 }
 }
</style>
