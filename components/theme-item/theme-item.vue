<template>
	<view class="theme-item">
		<navigator url="#" class="box">
			<image src="/common/images/preview2.jpg" class="picture"></image>
			<view class="mask">mask</view>
			<view class="tab">Tab标签</view>
		</navigator>
	</view>
</template>

<script>
export default {
	name: 'theme-item',
	data() {
		return {};
	}
};
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
}
</style>
