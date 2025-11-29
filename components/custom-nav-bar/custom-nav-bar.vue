<script setup>
	
</script>

<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusbar">
				
			</view>
			<view class="titlebar">
				<view class="title">标题</view>
				<view class="search">
					<uni-icons type="search" color="#888" size="18" class="icon"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
			<view class="fill">
				
			</view>
		</view>
	</view>
</template>

<style scoped lang="scss">
	.layout {
		.navbar {
			width: 100%;
			background: linear-gradient(to bottom,transparent,#fff 400rpx),
			linear-gradient(to right,#beecd8,20%,#F4E2D8);
			position: fixed;
			top: 0;
			left: 0;
			z-index:5;
			.statusbar {
				
			}
			.titlebar {
				display: flex;
				justify-content: center;
				align-items: center;
				.title {
				 font-size: 22px;
				font-weight: 700;
				color: $text-font-color-1;
				position: absolute;
				left: 0;
				}
				.search {
					width: 220rpx;
					height: 50rpx;
					background-color: rgba(255, 255, 255, 0.4);
					border: 1px solid #fff;
					margin-left: 30rpx;
					color: #999;
					border-radius: 60rpx;
					font-size: 28rpx;
					display: flex;
					align-items: center;
					 .icon {
						 margin-left: 5rpx;
					 }
					 .text {
						 padding-left: 10rpx;
					 }
					
				}
			}
		}
	}
	
</style>