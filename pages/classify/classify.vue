<script setup>
	import {ref} from 'vue'
	import {getWallCategory} from '@/API/api.js'
	const categoryList = ref([]) //分类壁纸列表
	const getCategory = async () => {
		const {data:{data}} = await getWallCategory({pageSize:15})
		categoryList.value = data
	}// 获取壁纸分类列表
	getCategory()
</script>

<template>
	<view class="classLayout">
		<view class="classify">
			<theme-item v-for="item in categoryList" :key="item._id" :item="item"></theme-item>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.classLayout {
	.classify {
		padding: 30rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15rpx;
	}
}
</style>
