// 校验手机号码
export const checkPhoneNumber = (phoneNumber) => {
	const reg = /1\d{10}/;
	return reg.test(phoneNumber);
};

// 校验邮箱
export const checkEmail = (email) => {
	console.log("hhh");
};
