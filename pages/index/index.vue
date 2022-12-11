<template>
	<view class="root">

		<view class="welcome">
			欢迎使用 ultra-tools
		</view>

		<u-input placeholder="请输入用户名" v-model="username" @focus="showUsenameTip = true;" @blur="onUsernameBlur"
			border="surround" clearable>
			<template slot="suffix" v-if="validUsername">
				<u-icon name="checkbox-mark" color="#3370ff"></u-icon>
			</template>
		</u-input>
		<view v-show="showUsenameTip">
			<view class="list">
				支持数字、大写字母、小写字母和下划线
			</view>
			<view class="list">
				长度为 4 ~ 16 位
			</view>
			<view class="list" style="color: #f93e3e;">
				用户名一经注册, 不可修改
			</view>
		</view>

		<!-- <u-icon name="info-circle"></u-icon> -->
		<u-input placeholder="请输入密码" v-model="password" @focus="showPasswordTip = true;" @blur="onPasswordBlur"
			type="password" border="surround" clearable>
			<template slot="suffix" v-if="validPassword">
				<u-icon name="checkbox-mark" color="#3370ff"></u-icon>
			</template>
		</u-input>
		<view class="list" v-show="showPasswordTip">
			长度为 6 ~ 32 位
		</view>

		<u-input placeholder="请重复密码" v-model="repeat_password" @focus="showRepeatPasswordTip = true;"
			@blur="onRepeatPasswordBlur" type="password" border="surround" clearable>
			<template slot="suffix" v-if="validRepeatPassword">
				<u-icon name="checkbox-mark" color="#3370ff"></u-icon>
			</template>
		</u-input>
		<view class="list" v-show="showRepeatPasswordTip">
			请重复已输入密码
		</view>

		<button :class="{actived: canRegister}" @click="gotoRegister" class="custom-button">注册</button>

		<view class="agree">
			<mycheckbox @change="agreeChange"></mycheckbox>
			<view>
				我已阅读并同意<a href="#/pages/register">服务协议</a>和<a href="#/pages/register">隐私政策</a>
			</view>
		</view>
		<view style="margin-top: 16rpx;">
			已有账号？<a href="#/pages/login/login">立即登录<sup></sup></a>
		</view>
		<view class="flex-1"></view>
	</view>
</template>

<script>
	import mycheckbox from "../../components/checkbox.vue";

	import {
		checkUsername,
		checkPassword,
		checkRepeatPassword,
	} from "../../utils/check.js";

	import {
		regisiter,
	} from "../../api/request.js";

	export default {
		components: {
			mycheckbox,
		},
		data() {
			return {
				username: "", // 用户名
				showUsenameTip: false,
				password: "", // 密码
				showPasswordTip: false,
				repeat_password: "", // 重复密码
				showRepeatPasswordTip: false,
				isAgreed: false,
			}
		},
		computed: {
			canRegister: function() {
				if (checkUsername(this.username) && checkPassword(this.password) && checkRepeatPassword(this.password,
						this.repeat_password) && this.isAgreed) {
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
			validRepeatPassword: function() {
				return checkRepeatPassword(this.password, this.repeat_password);
			},
		},
		onLoad() {

		},
		methods: {
			onUsernameBlur() {
				if (!checkUsername(this.username)) {
					uni.$u.toast('请输入合法的用户名');
				}
				this.showUsenameTip = false;
			},
			onPasswordBlur() {
				if (!checkPassword(this.password)) {
					uni.$u.toast('请输入合法的密码');
				}
				this.showPasswordTip = false;
			},
			onRepeatPasswordBlur() {
				if (!checkRepeatPassword(this.password, this.repeat_password)) {
					uni.$u.toast('请输入相同的密码');
				}
				this.showRepeatPasswordTip = false;
			},
			gotoRegister() {
				if (this.isAgreed) {
					regisiter({
						username: this.username, // 用户名
						password: this.password, // 密码
						repeat_password: this.repeat_password, // 重复密码
					}).then(() => {
						uni.$u.toast('注册成功');

						uni.navigateTo({
							url: `/pages/login/login?username=${this.username}&password=${this.password}`,
						});
					});
				}

				// if (checkUsername(this.username) && checkPassword(this.password, this.repeat_password) && this
				// 	.agreeStatus) {
				// 	// this.checkInput = true;
				// 	regisiter({
				// 		username: this.username, // 用户名
				// 		password: this.password, // 密码
				// 		repeat_password: this.repeat_password, // 重复密码
				// 	}).then(() => {
				// 		uni.$u.toast('注册成功');
				// 	});
				// }

				// useInfo({
				// 	"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3aHkxMjMiLCJleHAiOjE2NzE1NDM5MjN9.uZ8FTDWrfrFoh1NIkCtk6qzjl23mhTdLmOwgPhkckP4"
				// });
			},
			agreeChange(boolean) {
				this.isAgreed = boolean;
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

	.list {
		position: relative;
		margin-left: 12.5px;
	}

	.list::before {
		position: absolute;
		content: " ";
		left: -10px;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 10rpx;
		height: 10rpx;
		border-radius: 50%;
		background-color: #3370ff;
	}
</style>
