<script setup>
import {getNavBarHeight} from '@/utils/system.js' //获取刘海屏高度
import {getUserinfo} from '@/API/api.js'
import { ref } from 'vue';
const userinfo = ref(null) //保存接口获取的用户信息
const getuserinfo = async () => {
  const {data:{data}} = await	getUserinfo() //获取用户信息
  userinfo.value = data
} //获取用户信息
const callphone = () => {
	uni.makePhoneCall({
		phoneNumber: '18977924692'
	}); //报打电话
};
getuserinfo()
</script>

<template>
	<view class="userLayout pagebag" v-if="userinfo">
		<view :style="{height:getNavBarHeight() + 'px'}">
			
		</view> <!--设置一个和刘海屏一样大的透明盒子,将页面顶下来防止被遮住-->
		<view class="userinfo">
			<view class="avatar">
				<image src="/static/logo.png"></image>
			</view>
			<view class="ip">{{userinfo.IP}}</view>
			<view class="address">来自于: {{userinfo.address.city||userinfo.address.province||userinfo.address.country}}</view>
		</view>
		<view class="section">
			<view class="list">
			<navigator url="/pages/classfiyList/classfiyList">
				<view class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20" ></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">{{userinfo.downloadSize}}</view>
						<uni-icons type="right" size="30"></uni-icons>
					</view>
				</view>
			</navigator>
            <navigator url="/pages/classfiyList/classfiyList">    
				<view class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20" ></uni-icons>
						<view class="text">我的评分</view>
					</view>
					<view class="right">
						<view class="text">{{userinfo.scoreSize}}</view>
						<uni-icons type="right" size="30"></uni-icons>
					</view>
				</view>
            </navigator>
				<view class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20" ></uni-icons>
						<view class="text">联系客服</view>
					</view>
					<view class="right">
						<view class="text">0</view>
						<uni-icons type="right" size="30"></uni-icons>
					</view>
					<!-- #ifdef MP -->
					<button open-type="contact" class="contact">联系客服</button>
					<!-- #endif -->
					<!-- #ifndef MP -->
					<button class="phone" @click="callphone">拨打电话</button>
					<!-- #endif -->
					<!--如果是小程序就显示联系客服,如果不是小程序就显示拨打电话 -->
				</view>
			</view>
		</view>

		<view class="section">
			<view class="list">
				<view class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20" ></uni-icons>
						<view class="text">订阅更新</view>
					</view>
					<view class="right">
						<view class="text">0</view>
						<uni-icons type="right" size="30" color="#aaa"></uni-icons>
					</view>
				</view>

				<view class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20" ></uni-icons>
						<view class="text">常见问题</view>
					</view>
					<view class="right">
						<view class="text">0</view>
						<uni-icons type="right" size="30" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
	
	<view v-else>
		<view :style="{height:getNavBarHeight() + 'px'}"></view>
		<uni-load-more status="loading"></uni-load-more>
	</view>
</template>

<style lang="scss" scoped>
.loadingLayout {
	padding: 40rpx;
}	
	
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
				position: relative;
				&:last-child {
					border-bottom: 0;
				}
				.left {
					display: flex;
					:deep() {
						.uni-icons{
							color:$brand-theme-color !important;
						}
					}
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
	.contact {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
	.phone {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}
</style>
