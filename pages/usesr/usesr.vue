<script setup></script>

<template>
	<view class="userLayout">
		<view class="userinfo">
			<view class="avatar">
				<image src="/common/images/kirarashss-1.png"></image>
			</view>
			<view class="ip">192.168.163.1</view>
			<view class="address">来自于: XX</view>
		</view>
		<view class="section">
			<view class="list">
				<view class="row" v-for="item in 3">
					<view class="left">
						<uni-icons type="download-filled" size="20" color="#28b389"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">0</view>
						<uni-icons type="right" size="30"></uni-icons>
					</view>
				</view>
			</view>
		</view>

		<view class="section">
			<view class="list">
				<view class="row" v-for="item in 2">
					<view class="left">
						<uni-icons type="download-filled" size="20"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">0</view>
						<uni-icons type="right" size="30" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.userLayout {
	.userinfo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.avatar {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		overflow: hidden;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.ip {
		font-size: 44rpx;
		color: #333;
		padding: 20rpx 0 5rpx;
	}
	.address {
		font-size: 28rpx;
		color: #aaa;
	}

	.section {
		width: 690rpx;
		margin: 50rpx auto;
		border: 1px solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
		.list {
			.row {
				display: flex;
				justify-content: space-between;
				background: #fff;
				align-items: center;
				padding: 0 30rpx;
				height: 100rpx;
				border: 1px solid #eee;
				&:last-child {
					border-bottom: 0;
				}
				.left {
					display: flex;
					.text {
						padding-left: 20rpx;
						color: #666;
					}
				}
				.right {
					display: flex;
					align-items: center;
					.text {
						font-size: 28rpx;
						color: #aaa;
					}
				}
			}
		}
	}
}
</style>
