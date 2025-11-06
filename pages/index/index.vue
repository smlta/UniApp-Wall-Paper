<script setup></script>

<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" autoplay>
				<swiper-item v-for="item in 3">
					<image src="/common/images/banner2.jpg"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons size="20" color="#286389" type="sound-filled"></uni-icons>
				<text>123</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item>1231231321313123123213123123</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
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
</style>
