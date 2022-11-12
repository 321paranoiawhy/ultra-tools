<template>
	<view ref="root" style="overflow-y: scroll;height: 80vh;">

		<view class="top-right-icon">
			<u-icon name="search" size="64rpx"></u-icon>
		</view>

		<!-- <AnimatedInput></AnimatedInput> -->

		<u-swipe-action>
			<u-swipe-action-item :options="options" v-for="(item,index) in dataArray" :key="index">
				<view class="swipe-action u-border-top u-border-bottom">
					<view class="swipe-action__content">
						<text class="swipe-action__content__text">距今已</text>
						<text class="custom-number">{{item.currentDay}}</text>
						<text>天</text>
					</view>
					<u-divider></u-divider>
					<view style="text-align: center;margin-bottom: 32rpx;">
						纪念日: {{item.initialDay}}
					</view>
				</view>
				<view class="absolute-icon">
					<u-icon name="edit-pen-fill" size="48rpx"></u-icon>
					<u-icon name="info-circle-fill" size="48rpx"></u-icon>
					<u-icon name="share-square" size="48rpx"></u-icon>
				</view>

			</u-swipe-action-item>
		</u-swipe-action>
		<view class="float-bottom-right">
			<u-icon name="plus" size="48rpx" color="red"></u-icon>
			{{addText}}
		</view>

	</view>
	<!-- <u-swipe-action>
		<u-swipe-action-item :options="options" v-for="(item,index) in test" :key="index">
			<view class="swipe-action u-border-top u-border-bottom">
				<view class="swipe-action__content">
					<text class="swipe-action__content__text">距今已</text>
					<text style="font-size: 64rpx;" class="custom-number">{{item.currentDay}}</text>
					<text>天</text>
				</view>
				<u-divider></u-divider>
				<view style="text-align: center;margin-bottom: 32rpx;">
					纪念日: {{item.initialDay}}
				</view>
			</view>
			<u-icon name="edit-pen-fill" size="48rpx"></u-icon>
		</u-swipe-action-item>
	</u-swipe-action> -->
</template>

<script>
	// import AnimatedInput from "../../components/AnimatedInput.vue";

	import {
		searchAnniversary,
		createAnniversary,
		updateAnniversary,
	} from "../../api/request.js";
	export default {
		// components: {
		// 	AnimatedInput,
		// },
		data() {
			return {
				options: [{
						text: '置顶',
						icon: 'pushpin-fill',
						iconSize: '20',
						style: {
							backgroundColor: '#3c9cff',
						}
					},
					{
						text: '删除',
						icon: 'trash',
						iconSize: '20',
						style: {
							backgroundColor: '#f9ae3d',
						}
					},
				],
				dataArray: [{
					initialDay: "2018/10/08",
					currentDay: 111,
				}, {
					initialDay: "2018/10/08",
					currentDay: 222,
				}, {
					initialDay: "2018/10/08",
					currentDay: 333,
				}, {
					initialDay: "2018/10/08",
					currentDay: 444,
				}, {
					initialDay: "2018/10/08",
					currentDay: 555,
				}, {
					initialDay: "2018/10/08",
					currentDay: 666,
				}, {
					initialDay: "2018/10/08",
					currentDay: 777,
				}],
				showSearch: true,
				addText: "添加纪念日",
			}
		},
		mounted() {
			this.$refs.root.$el.onscroll = (e) => {
				// console.log(e.target.scrollTop);
				// 已滚动 Y 轴距离
				const top = e.target.scrollTop;
				// if (top > 20) {
				// 	this.showSearch = false;
				// 	this.addText = "";
				// } else {
				// 	this.showSearch = true;
				// 	this.addText = "添加纪念日";
				// }
				this.addText = top > 20 ? "" : "添加纪念日";
			};


			searchAnniversary({
				id: 0,
				page: 0,
				page_size: 10,
				orcer_by: "-title",
			}).then((response) => response.json()).then(res => {
				console.log("res", res);
				console.log("data", res.data);
			});

			// createAnniversary({
			// 	id: 0,
			// 	page: 0,
			// 	page_size: 10,
			// 	orcer_by: "-title",
			// }).then((response) => response.json()).then(res => {
			// 	console.log("res", res);
			// 	console.log("data", res.data);
			// });
		},
		methods: {

		},
	}
</script>

<style scoped lang="scss">
	$icon-gap:16rpx; // 图标间距

	.swipe-action {
		&__content {
			padding: 50rpx 0 25rpx;
			text-align: center;

			&__text {
				font-size: 15px;
				color: $u-main-color;
			}
		}
	}

	.top-right-icon {
		display: flex;
		padding-right: 30rpx;
		gap: $icon-gap;
		justify-content: flex-end;

	}

	.float-bottom-right {
		position: fixed;
		display: flex;
		align-items: center;
		bottom: 40rpx;
		right: 40rpx;
		gap: $icon-gap;
		z-index: 100;
		background-color: #c2e7ff;
		border-radius: 80rpx;
		height: 80rpx;
		padding-left: 48rpx;
		padding-right: 48rpx;
		box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12) !important;
		// transition: all 3s;
	}


	.u-swipe-action {
		padding: 30rpx;

		& .absolute-icon {
			position: absolute;
			display: flex;
			flex-direction: row;
			gap: $icon-gap;
			top: 20rpx;
			right: 20rpx;
		}

		& .u-swipe-action-item {
			border-left: 1px solid #dadbde;
			border-right: 1px solid #dadbde;
			border-radius: 16rpx;
			margin-bottom: 32rpx;
		}
	}

	.u-swipe-action-item:nth-of-type(3n) .custom-number {
		// color: #241b02;
		background-color: #fae19a;
	}

	.u-swipe-action-item:nth-of-type(3n+1) .custom-number {
		// color: #241b02;
		background-color: #ccecd1;
	}

	.u-swipe-action-item:nth-of-type(3n+2) .custom-number {
		// color: #301302;
		background-color: #f9ddcb;
	}

	.custom-number {
		position: relative;
		font-size: 64rpx;
		border-radius: 50%;
		padding: 20rpx;
	}
</style>
