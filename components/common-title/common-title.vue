<template>
	<view class="common-title">
		<view class="name"><slot name="name"></slot></view>
		<view class="custom">
			<slot name="custom"></slot>
		</view>
	</view>
</template>

<script>
export default {
	name: 'common-title',
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.common-title {
	display: flex;
	padding: 0 30rpx;
	justify-content: space-between;
	.name {
		font-weight: bold;
		font-size: 40rpx;
	}
}
</style>
