<template>
	<view class="search-container" ref="oSearchContainer">
		<input type="text" class="search-input" ref="oSearchInput" placeholder="search..." />
		<button class="btn" ref="oBtn">
			<u-icon name="search" size="64rpx"></u-icon>
		</button>
	</view>
</template>

<script>
	export default {
		mounted() {
			/**
			 * @description 点击搜索按钮给容器添加 active 类名
			 */
			const handleBtnClick = () => {
				oSearchContainer.classList.add('active');
				oSearchInput.focus();
			}

			/**
			 * @description 搜索输入框失去焦点时移除容器的 active 类名
			 */
			const handleBlur = () => {
				oSearchContainer.classList.remove('active');
			}

			const bindEvent = () => {
				oBtn.addEventListener('click', handleBtnClick);
				oSearchInput.addEventListener('blur', handleBlur);
			}

			const init = () => {
				bindEvent();
			}

			init();
		}
	}
</script>

<style scoped lang="scss">
	.search-container {
		position: relative;
		/* height: 50px; */
	}

	.search-input {
		height: 100%;
		width: 50px;
		border: 0;
		padding: 15px;
		font-size: 24px;
		background-color: #fff;
		transition: width 0.5s ease;
		border-radius: 20px;
	}

	.btn {
		position: absolute;
		inset: 0 auto auto 0;
		width: 50px;
		height: 100%;
		cursor: pointer;
		font-size: 24px;
		border: 0;
		background-color: #fff;
		transition: transform 0.5s ease;
		border-radius: 20px;
	}

	.btn:focus,
	.search-input:focus {
		outline: none;
	}

	.search-container.active .search-input {
		width: 200px !important;
	}

	.search-container.active .btn {
		transform: translateX(160px);
	}
</style>
