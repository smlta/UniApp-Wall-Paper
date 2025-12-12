<script setup>
 import {ref} from 'vue'
 import {getCategoryList} from '@/API/api.js'
 import {onLoad} from '@dcloudio/uni-app'
 const query = {
	 classid: '',
	 name: ''
 } //查询参数对象
 onLoad((e) => {
	 const {_id=null,name=null} = e //解构传递的分类id和分类名字
	  query.classid = _id
	  query.name = name
	 uni.setNavigationBarTitle({
	 	title:name
	 })
	 getSomeWallList(query) //因为setup钩子比onload钩子先执行,所以需要在onload里发起请求获取数据,
	                        //如果在setup里发起请求,会导致发起请求时,参数对象未被赋值导致classid为空
	 
 }) //页面加载时获取name设置导航栏标题,初始化参数对象发起请求(onload),获取数据渲染
 const categoryList = ref([]) //壁纸列表
 const getSomeWallList = async (que) => {
	 const {data:{data}} = await getCategoryList(que)
	 categoryList.value = data
 } //获取某分类的所有壁纸
 
</script>

<template>
<view class="classifylist">
 <view class="content">
  <navigator class="item" v-for="item in categoryList" :key="item._id" url="/pages/preview/preview">
   <image :src="item.smallPicurl"></image>
  </navigator>
 </view>
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
