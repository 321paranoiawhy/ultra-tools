<template>
	<view class="root">
		<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#3370ff" fill-opacity="1"
				d="M0,128L48,112C96,96,192,64,288,74.7C384,85,480,139,576,133.3C672,128,768,64,864,69.3C960,75,1056,149,1152,176C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
			</path>
		</svg> -->
		<view class="welcome">
			欢迎使用 ultra-tools
		</view>
		<!-- <image class="logo" src="/static/logo.png"></image> -->

		<u-input placeholder="请输入你的手机号" v-model="phoneNumber" type="number" border="surround" clearable @blur="test">
		</u-input>

		<u-input placeholder="请输入验证码" v-model="verificationCode" type="number" border="surround" clearable
			@blur="checkVerificationCode">
			<template slot="suffix">
				<u-code ref="uCode" @change="codeChange" seconds="60" changeText="X秒重新获取"></u-code>
				<u-button @tap="getCode" :text="tips" type="success" size="mini"></u-button>
			</template>
		</u-input>

		<button :class="{actived:!!phoneNumber.length}" @click="gotoRegister" class="custom-button">下一步</button>

		<view class="agree">
			<mycheckbox @change="agree"></mycheckbox>
			<view>
				我已阅读并同意<a href="#/pages/register">服务协议</a>和<a href="#/pages/register">隐私政策</a>
			</view>
		</view>
		<view style="margin-top: 16rpx;">
			已有账号？<a href="#/pages/memorial-day/index">立即登录<sup></sup></a>
		</view>
		<view class="flex-1"></view>
		<u-divider text="更多方式" textColor="#8f959e" lineColor="#8f959e" :hairline="true"></u-divider>

		<u-button icon="qq-fill" text="QQ 登录" class="switchLogin" iconColor="#2EA121"></u-button>
		<u-button icon="weixin-fill" text="微信登录" class="switchLogin" iconColor="#2EA121"></u-button>
		<u-button icon="email" text="邮箱登录" class="switchLogin" iconColor="#2EA121"></u-button>

	</view>
</template>

<script>
	import mycheckbox from "../../components/checkbox.vue";
	import {
		checkPhoneNumber
	} from "../../utils/check.js";
	export default {
		components: {
			mycheckbox,
		},
		data() {
			return {
				phoneNumber: "",
				tips: "",
				verificationCode: "",
			}
		},
		onLoad() {

		},
		methods: {
			gotoRegister() {
				uni.navigateTo({
					url: "/pages/register",
				})
				console.log("hhh");
			},
			agree(e) {
				console.log(e);
			},
			test(phoneNumber) {
				if (!checkPhoneNumber(phoneNumber)) {
					uni.$u.toast('请输入合法的手机号码');
				}
			},
			// checkPhoneNumber(phoneNumber) {
			// 	console.log(phoneNumber);
			// 	const reg = /1\d{10}/;
			// 	if (!reg.test(phoneNumber)) {
			// 		uni.$u.toast('请输入合法的手机号码');
			// 	}
			// },
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 1000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			checkVerificationCode(code) {
				if (code !== "123456") {
					uni.$u.toast('请输入正确的验证码');
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
