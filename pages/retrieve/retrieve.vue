<template>
	<view v-if="retrieveDataType == '用户名'" class="root">
		<u-input placeholder="请输入邮箱" v-model="email" border="surround" clearable>
			<template slot="suffix">
				<u-button type="success" size="mini" @click="onGetUsername">获取{{retrieveDataType}}</u-button>
			</template>
		</u-input>
		<view style="display: flex;margin-bottom: 40rpx;">
			<u-icon name="info-circle" color="#3370ff" style="margin-right: 8rpx;"></u-icon> 当前仅支持通过邮箱找回用户名
		</view>
		<view class="user-info" v-show="showUserInfo">
			<view>
				您的{{retrieveDataType}}为: <span class="highlight-span">{{userInformation}}</span>, 请妥善保存!
			</view>
			<a @click="gotoLogin">去登录<sup></sup></a>
		</view>
	</view>
	<view v-else class="root">
		<u-input :placeholder="`请输入${retrievePasswordMethod ? retrievePasswordMethod : '用户名'}`" v-model="email"
			border="surround" clearable>
			<template slot="suffix">
				<u-button type="success" size="mini">获取{{retrieveDataType}}</u-button>
			</template>
		</u-input>
		<u-button @click="showPicker = true" type="primary" shape="circle">切换方式</u-button>
		<!-- <view @click="showPicker = true">切换找回方式</view> -->

		<u-picker :show="showPicker" :columns="pickerData" @confirm="onPickerConfirm" @cancel="onPickerCancel">
		</u-picker>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.retrieveDataType = e.retrieveDataType;
			uni.setNavigationBarTitle({
				title: `找回${e.retrieveDataType}`,
			});
		},
		data() {
			return {
				retrieveDataType: "", // 找回数据类型
				email: "", // 邮箱
				showUserInfo: false,
				userInformation: "", // 用户信息: 用户名或密码
				showPicker: false,
				pickerData: [
					["用户名", "邮箱"]
				],
				retrievePasswordMethod: "", // 找回密码方式
			}
		},
		methods: {
			onGetUsername() {
				this.userInformation = "111";
				this.showUserInfo = true;
			},
			gotoLogin() {
				if (this.retriveDataType === "用户名") {
					uni.navigateTo({
						url: `/pages/login/login?username=${this.userInformation}`,
					});
				} else {
					// uni.navigateTo({
					// 	url: `/pages/login/login?username=${this.userInformation}`,
					// });
				}
			},
			onPickerConfirm(e) {
				this.retrievePasswordMethod = e.value[0];
				console.log(this.retrievePasswordMethod, 999);
				this.showPicker = false;
			},
			onPickerCancel() {
				this.showPicker = false;
			},
		}
	}
</script>

<style scoped>
	a,
	a:link,
	a:visited,
	a:hover,
	a:active {
		text-decoration: none !important;
	}

	a {
		color: #3370ff;
		margin: 0;
	}

	sup::after {
		content: "\2197";
		font-size: 1em;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	.root {
		width: 80%;
		margin: auto;
	}

	.u-input {
		margin: 40rpx auto;
	}

	.highlight-span {
		color: #fff;
		background-color: #f93e3e;
		padding: 12rpx;
		display: inline-block;
		text-align: center;
		min-width: 60px;
		margin-left: 10rpx;
		border-radius: 6rpx;
	}
</style>
