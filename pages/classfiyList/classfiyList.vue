<script setup>
 import {ref} from 'vue'
 import {getCategoryList} from '@/API/api.js'
 import {onLoad,onReachBottom} from '@dcloudio/uni-app'
 const noData = ref(false)
 const query = {
	 classid: '',
	 name: '',
	 pageSize:12,
	 pageNum:1
 } //查询参数对象
  const categoryList = ref([]) //壁纸列表
 onLoad((e) => {
	 const {_id=null,name=null} = e //解构传递的分类id和分类名字
	  query.classid = _id
	  query.name = name
	 uni.setNavigationBarTitle({
	 	title:name
	 })
	 getSomeWallList() //因为setup钩子比onload钩子先执行,所以需要在onload里发起请求获取数据,
	                        //如果在setup里发起请求,会导致发起请求时,参数对象未被赋值导致classid为空	 
 }) //页面加载时获取name设置导航栏标题,初始化参数对象发起请求(onload),获取数据渲染
 onReachBottom(() => {
	 if(noData.value) return
	 query.pageNum++
	 getSomeWallList()
 })
 
 const getSomeWallList = async () => {
	 const {data:{data}} = await getCategoryList(query)
	 categoryList.value = [...categoryList.value,...data]
	 if(query.pageSize > data.length)
	 {
		 noData.value = true
	 } //如果当前获取的数据不足一页,说明是最后一页再次触底时不再发起请求
	 uni.setStorageSync("cate_wall",categoryList.value) //将获取的壁纸数组本地储存
 } //获取某分类的所有壁纸
 
</script>

<template>
	
	
<view class="classifylist">
	<view class="loadingLayout" v-if="!categoryList.length&&!noData"> <!--刚进入页面显示加载框-->
		<uni-load-more status="loading"></uni-load-more>
	</view>
 <view class="content">
  <navigator class="item" v-for="item in categoryList" :key="item._id" :url="'/pages/preview/preview?id=' +item._id">
   <image :src="item.smallPicurl"></image>
  </navigator> <!--点击壁纸时传递壁纸id-->
 </view>
</view>
<view class="loadingLayout" v-if="categoryList.length || noData"> 
		<!--这里categoryList的作用是当进入页面时先不显示加载组件,当数组不为空时才显示加载组件-->
		<!--如果等待一会后API返回空数组,即没有更多数据也会显示加载组件-->
		<uni-load-more :status="noData?'noMore':'loading'"></uni-load-more> <!--如果没有更多数据就显示'没有更多数据'-->
	</view>
</template>

<style lang="scss" scoped>
.classifylist {
	
	.content {
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 5rpx;
		padding: 5rpx;
		.item {
			height: 440rpx;
			display: block;
			image {
				width: 100%;
				height: 100%;
			
			}
		}
		
	}
}
</style>
