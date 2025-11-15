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
					<swiper-item>Ciallo～ (∠・ω< )⌒★</swiper-item>
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
						<uni-icons type="calendar-filled" size="30" color="green"></uni-icons>
						<view class="text">
							<uni-dateformat :date="new Date()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in 8">
						<image src="/common/images/banner1.jpg"></image>
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
