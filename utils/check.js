// 校验用户名
export const checkUsername = (username) => {
	if (username.length >= 4 && username.length <= 16) {
		return true;
	} else {
		return false;
	}
};

// 首次校验用户密码
export const checkPassword = (password) => {
	if (password.length >= 6 && password.length <= 32) {
		return true;
	} else {
		return false;
	}
};

// 二次检验用户密码
export const checkRepeatPassword = (password, repeat_password) => {
	// 避免空密码
	if (password === repeat_password && password.length) {
		return true;
	} else {
		return false;
	}
};

// 校验手机号码
export const checkPhoneNumber = (phoneNumber) => {
	const reg = /1\d{10}/;
	return reg.test(phoneNumber);
};

// 校验邮箱
export const checkEmail = (email) => {
	console.log(email);
};
