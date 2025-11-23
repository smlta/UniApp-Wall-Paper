<script setup>
import { ref } from 'vue';
const showmask = ref(true) // 预览遮罩层状态
const maskchange = () => {
	showmask.value = !showmask.value
} // 点击图片切换遮罩层状态
</script>

<template>
<view class="preview">
	<swiper circular>
		<swiper-item v-for="item in 3">
			<image src="/common/images/kirarashss-1.png" mode="aspectFill" @click="maskchange"></image>
		</swiper-item>
	</swiper>
</view>
<view class="mask" v-if="showmask">
	<view class="goBack">
	</view>
	<view class="count">4/8</view>
	<view class="time">
		<uni-dateformat :date="new Date()" format="hh:mm">
		</uni-dateformat>
	</view>
	<view class="date">
		<uni-dateformat :date="new Date()" format="MM月dd日">
		</uni-dateformat>
	</view>
	<view class="footer">
		<view class="box">
			<uni-icons type="info" size="28"></uni-icons>
	        <view class="text">信息</view>	
		</view>
		<view class="box">
			<uni-icons type="info" size="28"></uni-icons>
		    <view class="text">5分</view>	
		</view>
		<view class="box">
			<uni-icons type="info" size="28"></uni-icons>
		    <view class="text">下载</view>	
		</view>
	</view>
</view>

</template>

<style lang="scss" scoped>
.preview {
	width: 100%;
	height: 100vh;
	swiper {
		width: 100%;
		height: 100%;
		image {
			width: 100%;
			height: 100%;
		}
	}
}
.mask {
	&>view {
		width: fit-content;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		color: #fff;
	}
	.goBack {
		
	}
	.count {
		top: 10vh;
		background:rgba(0, 0, 0, 0.3);
		border-radius: 40rpx;
		padding: 8rpx 28rpx;
		backdrop-filter: blur(10rpx);
		font-size: 28rpx;
		/*布局技巧:当元素绝对定位,同时设置left right 0 再margin设置为
		auto元素就会在页面或元素中居中*/
	}
	.time {
		font-size: 140rpx;
		top: calc(10vh + 80rpx);
		font-weight: 100;
		line-height: 1em;
		text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
	}
	.date {
		top: calc(10vh + 230rpx);
		font-size: 34rpx;
		text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
	}
	.footer {
		bottom:10vh;
		background: rgba(255, 255, 255, 0.8);
		width: 65vw;
		height: 120rpx;
		display: flex;
		border-radius: 120rpx;
		justify-content: space-around;
		align-items: center;
		color: #000;
		box-shadow: 0 2rpx rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(20rpx);
		.box {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.text {
				font-size: 26rpx;
				color: $text-font-color-2;
			}
		}
	}
}
</style>
