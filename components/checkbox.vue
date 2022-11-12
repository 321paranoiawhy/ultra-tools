<template>
	<view class="checkbox" :class="{checked:checked}" @click="change">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
			}
		},
		methods: {
			change() {
				this.checked = !this.checked;
				this.$emit("change", this.checked);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.checkbox {
		width: 36rpx;
		height: 36rpx;
		position: relative;
		border-radius: 50%;
		border: 2rpx solid #8f959e;

		&.checked {
			background-color: #3370ff;
			border-color: #3370ff;

			&::after {
				content: " ";
				z-index: 100;
				position: absolute;
				left: 8rpx;
				top: 10rpx;
				height: 8rpx;
				width: 16rpx;
				border: 6rpx solid #fff;
				border-radius: 4rpx;
				border-top: none;
				border-right: none;
				transform: rotate(-45deg);
			}
		}
	}
</style>
