<script setup>

</script>

<template>
<view class="preview">
	<swiper circular>
		<swiper-item v-for="item in 3">
			<image src="/common/images/kirarashss-1.png" mode="aspectFill"></image>
		</swiper-item>
	</swiper>
</view>
<view class="mask">
	<view class="goBack"></view>
	<view class="count">4/8</view>
	<view class="time">09:54</view>
	<view class="date">01月21日</view>
	<view class="footer">
		<view class="box">
			<uni-icons type="info" size="28"></uni-icons>
	        <view class="text">信息</view>	
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
	.goBack {
		
	}
	.count {
		width: fit-content;
		position: absolute;
		left: 0;
		right: 0;
		top: 10vh;
		margin: auto;
		background:rgba(0, 0, 0, 0.3);
		border-radius: 40rpx;
		padding: 8rpx 28rpx;
		backdrop-filter: blur(10rpx);
		color: #fff;
		font-size: 28rpx;
		/*布局技巧:当元素绝对定位,同时设置left right 0 再margin设置为
		auto元素就会在页面或元素中居中*/
	}
	.time {
		
	}
	.date {
		
	}
	.footer {
		
	}
}
</style>
