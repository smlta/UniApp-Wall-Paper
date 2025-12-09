<script setup>

</script>

<template>
<view class="classifylist">
 <view class="content">
  <navigator class="item" v-for="item in 3" url="/pages/preview/preview">
   <image src="/common/images/kirarashss-2.png"></image>
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
