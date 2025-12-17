<script setup>
import {getStatusBarHeight} from '@/utils/system.js'
import { ref } from 'vue';
import {onLoad} from '@dcloudio/uni-app'
const currentId = ref(null) //传递过来的壁纸Id
const currentIndex = ref(null) //当前item的索引
const StorageList = ref([]) //缓存壁纸列表
const bigWallList = ref([]) //大图壁纸列表
const readImag =ref([]) //图片缓存数组.用于图片懒加载
const wallInfo = ref(null) //壁纸信息对象
StorageList.value = uni.getStorageSync('cate_wall') || [] //获取本地储存壁纸数组如果没有获取到返回空数组
 bigWallList.value = StorageList.value.map(item => {
	 return {...item,
	 smallPicurl:item.smallPicurl.replace('_small.webp','.jpg')}
 })
 
 const pagealter = (cpage) => {
	 currentIndex.value = cpage.detail.current 
	 saveImageIndex() //图片改变保存前后索引
	 wallInfo.value = bigWallList.value[currentIndex.value] //壁纸改变时,改变壁纸信息对象
	 //轮播项改变时,拿到轮播项的索引将其赋值给currentIndex
 } 

onLoad((e) => {
	currentId.value = e.id
	currentIndex.value =  bigWallList.value.findIndex(item => item._id === currentId.value)
	//根据传过来的Id获取该壁纸在数组中的索引
	wallInfo.value = bigWallList.value[currentIndex.value] //进入页面时通过壁纸索引在列表中获取相应的壁纸信息对象
	saveImageIndex()
})

const saveImageIndex = () => {
	readImag.value.push(
	currentIndex.value<=0?bigWallList.value.length -1 : currentIndex.value - 1,
	currentIndex.value,
	currentIndex.value>=bigWallList.value.length - 1 ? 0 : currentIndex.value + 1
	) //当访问图片时将当前图片和图片的前后一张的索引放进缓存数组
	
	readImag.value = [...new Set(readImag.value)] 
	//利用set对象的特性去除重复的索引
	
	
}  //该方法用来保存当前图片的索引和上一张和下一张的索引


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
	<!--swiper的 current属性为当前item轮播项的索引-->
	<swiper circular :current="currentIndex" @change="pagealter"> <!-- 轮播图改变时触发,传递事件参数为当前item的索引-->
		<swiper-item v-for="(item,index) in bigWallList" :key="item._id">
			<image :src="item.smallPicurl" mode="aspectFill" @click="maskchange" v-if="readImag.includes(index)"></image>
		</swiper-item>
	</swiper>
</view>
<view class="mask" v-if="showmask">
	<view class="goBack" :style="{top:getStatusBarHeight() + 'px'}" @click="goback()">
		<uni-icons type="back" color="#fff" size="20"></uni-icons>
	</view>
	<view class="count">{{currentIndex + 1}}/{{bigWallList.length}}</view>
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
				   <text class="value" selectable>{{wallInfo.classid}}</text>
			   </view>
			   <view class="row" >
			   	 <view class="publish">发布者:</view>
			   	 <text class="value" selectable>{{wallInfo.nickname}}</text>
			   </view>
			   <view class="row" >
			   	 <view class="label">评分:</view>
			   	 <view class="value ratebox">
					 <uni-rate readonly touchable :value="wallInfo.score"></uni-rate>
				     <text class="score">{{wallInfo.score}}分</text>
				 </view>
			   </view>
			   <view class="row" >
			   	   <view class="label">摘要:</view>
			   	   <view class="value">
			   	    {{wallInfo.description}}
			       </view>
			   </view>
			   <view class="row" >
			   	   <view class="label">标签:</view>
			   	   <view class="value tabs">
			   	    <view class="tab" v-for="tab in wallInfo.tabs" :key="tab">{{tab}}</view>
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
