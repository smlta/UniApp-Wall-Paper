<script setup>
import {getStatusBarHeight} from '@/utils/system.js'
import { ref } from 'vue';
const showmask = ref(true) // 预览遮罩层状态
const pop = ref(null) //信息弹层实例
const ratepop = ref(null) //评分弹层实例
const wallscore = ref(0) //壁纸评分
const maskchange = () => {
	showmask.value = !showmask.value
} // 点击图片切换遮罩层状态
const showpop = () => {
	pop.value.open()
} //显示图片信息弹层方法
const closepop = () => {
	pop.value.close()
}
const showratepop = () => {
	ratepop.value.open()
} //显示评分弹层
const closeratepop = () => {
	ratepop.value.close()
} //关闭评分弹层
const confirmrate = () => {
	console.log('确定评分')
}
const goback = () => {
	uni.navigateBack()
} // 返回上一页
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
	<view class="goBack" :style="{top:getStatusBarHeight() + 'px'}" @click="goback()">
		<uni-icons type="back" color="#fff" size="20"></uni-icons>
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
		<view class="box" @click="showpop">
			<uni-icons type="info" size="28"></uni-icons>
	        <view class="text">信息</view>	
		</view>
		<view class="box" @click="showratepop">
			<uni-icons type="info" size="28"></uni-icons>
		    <view class="text">5分</view>	
		</view>
		<view class="box">
			<uni-icons type="info" size="28"></uni-icons>
		    <view class="text">下载</view>	
		</view>
	</view>
   <uni-popup type="bottom" ref="pop">
	<view class="infopop">
	   <view class="header">
		   <view></view>
		   <view class="text">壁纸信息</view>
		   <view class="close" @click="closepop">
			   <uni-icons type="closeempty" size="18" color="#999"></uni-icons>
		   </view>
	   </view>
	   <scroll-view scroll-y>
		   <view class="content">
			   <view class="row" >
				   <view class="label">壁纸ID:</view>
				   <text class="value" selectable>sad484494</text>
			   </view>
			   <view class="row" >
			   	 <view class="publish">发布者:</view>
			   	 <text class="value" selectable>水墨兰庭</text>
			   </view>
			   <view class="row" >
			   	 <view class="label">评分:</view>
			   	 <view class="value ratebox">
					 <uni-rate readonly touchable value="2"></uni-rate>
				     <text class="score">2分</text>
				 </view>
			   </view>
			   <view class="row" >
			   	   <view class="label">摘要:</view>
			   	   <view class="value">
			   	    父亲先前为乐队成员，杏珠很小的时候就在父亲影响下接触了吉他[1]，同时喜欢上了地雷系着装，形成了不同于同龄人的特殊兴趣与喜好。由于这些特殊的喜好，杏珠与同龄人格格不入，朋友很少，逐渐被孤立，因此杏珠学会了隐藏真实的自己，隐藏自己的兴趣爱好，隐瞒自己的私生活。
			   	    
			   	    阅读更多：隐杏珠（https://mzh.moegirl.org.cn/%E9%9A%90%E6%9D%8F%E7%8F%A0 ）
			   	    本文引自萌娘百科(https://mzh.moegirl.org.cn )，文字内容默认使用《知识共享 署名-非商业性使用-相同方式共享 3.0 中国大陆》协议。
			       </view>
			   </view>
			   <view class="row" >
			   	   <view class="label">标签:</view>
			   	   <view class="value tabs">
			   	    <view class="tab" v-for="item in 3">LimeLight</view>
			       </view>
			   </view>
			   <view class="copyright">
			   声明：本图片来用户投稿，非商业使用，用于免费学习交流，如侵犯了您的权益，您可以拷贝壁纸ID举报至平台，邮箱513894357@qq.com，管理将删除侵权壁纸，维护您的权益。
			  </view>
			   
		   </view>
	   </scroll-view>
	</view>   
   </uni-popup>
   <uni-popup ref="ratepop">
	   <view class="scorepopup">
		   <view class="header">
		   		   <view></view>
		   		   <view class="text">壁纸信息</view>
		   		   <view class="close" @click="closeratepop">
		   			   <uni-icons type="closeempty" size="18" color="#999"></uni-icons>
		   		   </view>
		   </view>
		   <view class="content">
			   <uni-rate  v-model="wallscore" allow-half></uni-rate>
			   <text class="text">{{wallscore}}分</text>
		   </view>
		   <view class="footers">
			   <button plain size="mini" :disabled="!wallscore" @click="confirmrate">确认评分</button>
		   </view>
	   </view>
   </uni-popup> <!--评分弹层-->
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
		width: 30px;
		height: 30px;
		background: rgba(0, 0, 0, 0.5);
		left: 30rpx;
		margin-left: 0;
		border-radius: 100px;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(10rpx);
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
	.infopop {
		background: #fff;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
		scroll-view {
			max-height: 60vh;
			.content {
				.row {
					display: flex;
					padding: 16rpx 0;
					font-size: 32rpx;
					line-height: 1.7em;
					.label {
						color:$text-font-color-3;
						width: 140rpx;
						text-align: right;
						font-size: 30rpx;
					}
					.value {
						color: rgb(32, 32, 32);
						width: 0;
						flex: 1;
						padding-left:20rpx;;
						
					}
					.publish {
						color:$text-font-color-3;
						width: 140rpx;
						text-align: right;
						font-size: 30rpx;
					}
					
					.ratebox {
						display: flex;
						align-items: center;
						padding-left: 10rpx;
						.score {
							font-size: 26rpx;
							color: $text-font-color-2;
							padding-left: 20rpx;
						}
					}
					.tabs {
						display: flex;
						flex-wrap: wrap;
						.tab {
							border: 1px solid $brand-theme-color;
							margin: 0 10rpx 10rpx 0;
							border-radius: 40rpx;
							padding: 10rpx 30rpx;
							line-height: 1em;
							
						}
					}
				}
				.copyright {
					font-size: 28rpx;
					color: #666;
					background: #F6F6F6;
					border-radius: 10rpx;
					margin: 20rpx 0;
					padding: 20rpx;
					line-height: 1.6em;
				}
			}
			
		}
		
	}
	.scorepopup {
		background: #fff;
		width: 70vw;
		padding: 30rpx;
		border-radius: 30rpx;
		.content {
			padding: 30rpx 0;
			display: flex;
			align-items: center;
			justify-content: center;
			.text {
				color: #FFCA3E;
				padding-left: 10rpx;
				width: 80rpx;
				line-height: 1em;
				text-align: right;
			}
		}
		.footers {
			padding: 10rpx 0;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.text {
			color:$text-font-color-2;
			font-size: 26rpx;
		}
	}
}
</style>
