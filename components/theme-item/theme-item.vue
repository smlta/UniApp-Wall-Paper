<template>
	<view class="theme-item">
		<navigator url="/pages/classfiyList/classfiyList" class="box" v-if="!isMore">
			<image src="/common/images/preview2.jpg" class="picture"></image>
			<view class="mask">mask</view>
			<view class="tab">Tab标签</view>
		</navigator>
		<navigator class="box more" v-if="isMore" url="/pages/classify/classify" open-type="reLaunch">
			<image src="/common/images/kirarashss-1.png" class="picture"></image>
			<view class="mask">
				<uni-icons type="more filled" size="34"></uni-icons>
				<view class="text">更多</view>
			</view>
		</navigator>
	</view> <!--如果要跳转的页面是导航栏页面要通过open-type修改跳转方式为relaunch-->
</template>

<script setup>
const props = defineProps({
	isMore: {
		type: Boolean,
		default: false
	}
});
</script>

<style scoped lang="scss">
.theme-item {
	border: 1px solid skyblue;
	.box {
		height: 340rpx;
		border-radius: 10rpx;
		overflow: hidden;
		position: relative;
		.picture {
			width: 100%;
			height: 100%;
		}
		.mask {
			height: 70rpx;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			background: rgba(0, 0, 0, 0.2);
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 30rpx;
			font-weight: 600;
			backdrop-filter: blur(20rpx);
		}
		.tab {
			position: absolute;
			left: 0;
			top: 0;
			background: rgba(250, 129, 90, 0.7);
			color: #fff;
			font-size: 22rpx;
			padding: 6rpx 14rpx;
			border-radius: 0 0 20rpx 0;
			transform: scale(0.8);
			transform-origin: top left; /* 该属性用来指定元素的变形原点*/
		}
	}
	.box.more {
		.mask {
			width: 100%;
			height: 100%;
			flex-direction: column;
		}
		.text {
			font-size: 28rpx;
		}
	}
}
</style>
