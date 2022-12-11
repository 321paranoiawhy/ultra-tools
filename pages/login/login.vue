<template>
	<view class="root">
		<view class="welcome">
			欢迎使用 ultra-tools
		</view>

		<u-input placeholder="请输入用户名" v-model="username" border="surround" clearable>
			<template slot="suffix" v-if="validUsername">
				<u-icon name="checkbox-mark" color="#3370ff"></u-icon>
			</template>
		</u-input>
		<u-input placeholder="请输入密码" v-model="password" type="password" border="surround" clearable>
			<template slot="suffix" v-if="validPassword">
				<u-icon name="checkbox-mark" color="#3370ff"></u-icon>
			</template>
		</u-input>

		<button :class="{actived: canLogin}" @click="gotoLogin" class="custom-button">登录</button>

		<!-- <view class="flex-1"></view> -->
		<view @click="showPicker = true;">
			<!-- 忘记用户名或密码？<a href="#/pages/login/login">找回<sup></sup></a> -->
			忘记用户名或密码？<a>找回<sup></sup></a>
		</view>

		<u-divider text="更多方式" textColor="#8f959e" lineColor="#8f959e" :hairline="true"></u-divider>

		<u-button icon="qq-fill" text="QQ 登录" class="switchLogin" iconColor="#2EA121"></u-button>
		<u-button icon="weixin-fill" text="微信登录" class="switchLogin" iconColor="#2EA121"></u-button>
		<!-- <u-button icon="email" text="邮箱登录" class="switchLogin" iconColor="#2EA121"></u-button> -->

		<u-picker :show="showPicker" :columns="pickerData" @confirm="onPickerConfirm" @cancel="onPickerCancel">
		</u-picker>

	</view>
</template>

<script>
	import mycheckbox from "../../components/checkbox.vue";

	import {
		checkUsername,
		checkPassword
	} from "../../utils/check.js";

	import {
		login,
	} from "../../api/request.js";

	export default {
		components: {
			mycheckbox,
		},
		data() {
			return {
				username: "", // 用户名
				password: "", // 用户密码
				showPicker: false, // 是否显示忘记用户名或忘记密码选择器
				pickerData: [
					["用户名", "密码"]
				],
				retrieveDataType: "", // 找回数据的类型: 用户名或密码
			}
		},
		onLoad(e) {
			this.username = e.username ?? "";
			this.password = e.password ?? "";
		},
		computed: {
			canLogin: function() {
				if (checkUsername(this.username) && checkPassword(this.password)) {
					return true;
				} else {
					return false;
				}
			},
			validUsername: function() {
				return checkUsername(this.username);
			},
			validPassword: function() {
				return checkPassword(this.password);
			},
		},
		methods: {
			onPickerCancel() {
				this.showPicker = false;
			},
			onPickerConfirm(e) {
				this.retrieveDataType = e.value[0];
				console.log(e, this.retrieveDataType)
				uni.navigateTo({
					url: `/pages/retrieve/retrieve?retrieveDataType=${this.retrieveDataType}`,
				});
				this.showPicker = false;
			},
			gotoLogin() {
				// uni.navigateTo({
				// 	url: "/pages/register",
				// })

				if (this.canLogin) {
					login({
						username: this.username, // 用户名
						password: this.password, // 密码
					}).then((response) => {
						if (typeof response === "string") {
							uni.$u.toast(response);
						} else {
							uni.navigateTo({
								url: "/pages/memorial-day/index",
							});
						}
					});
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.root {
		display: flex;
		height: calc(100vh - 88rpx - 80rpx);
		flex-direction: column;
		padding: 48rpx 80rpx;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%233370ff' fill-opacity='1' d='M0 128L48 112C96 96 192 64 288 74.7C384 85 480 139 576 133.3C672 128 768 64 864 69.3C960 75 1056 149 1152 176C1248 203 1344 181 1392 170.7L1440 160L1440 0L1392 0C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0L0 0Z'%3E%3C/path%3E%3C/svg%3E");
		background-repeat: no-repeat;
	}

	.u-input {
		flex-grow: 0 !important;
		margin-top: 16rpx;
		margin-bottom: 16rpx;
	}

	a,
	a:link,
	a:visited,
	a:hover,
	a:active {
		text-decoration: none !important;
	}

	a {
		color: #3370ff;
		margin: 0 6rpx;
	}

	sup::after {
		content: "\2197";
		font-size: 1em;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	.agree {
		display: flex;
		align-items: center;
		gap: 16rpx;
		font-size: 28rpx;
	}

	u-button,
	.custom-button {
		color: #fff;
		background: #bbbfc4;
		border-color: #bbbfc4;
		width: 100%;
		height: 96rpx;
		margin-top: 32rpx;
		margin-bottom: 32rpx;
		cursor: not-allowed;

		&.actived {
			background: #3370ff;
			border-color: #3370ff;
		}
	}

	.welcome {
		color: #1f2329;
		font-size: 48rpx;
		font-weight: 700;
		line-height: 30px;
		margin-bottom: 48rpx;
	}

	.flex-1 {
		flex: 1;
	}

	.switchLogin {
		color: #1f2329;
		background: #fff;
		border-color: #d0d3d6;
		border-radius: 999999rpx;
		gap: 8rpx;
		margin-top: 12rpx;
		margin-bottom: 12rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
</style>
