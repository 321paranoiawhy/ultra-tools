// const URL_PREFIX = "http://multi_record.heicycyu.top:8888/";

const baseURL = process.env.NODE_ENV === 'development' ? '/api' : 'http://rp.heicycyu.top:8888'
// const baseURL = 'http://multi_record.heicycyu.top:8888'

// 默认请求方式为 POST
const API = (url, parameters, method = "POST") => {
	return fetch(url + "?" + new URLSearchParams(parameters), {
		method: method,
		mode: "cors",
	});
};

// Form POST 请求方式
const API_Form_POST = (url, parameters) => {
	// https://stackoverflow.com/questions/46640024/how-do-i-post-form-data-with-fetch-api
	const formdata = new FormData();
	for (let key in parameters) {
		formdata.append(key, parameters[key]);
	}
	return fetch(url, {
		method: "POST",
		mode: "cors",
		body: formdata,
	}).then(response => response.json())
	// .then(result => console.log(9999999, result))
	// .catch(error => console.log('error', error));
};

// GET 请求
const API_GET = (url, parameters) => {
	return fetch(url, {
			method: "GET",
			mode: "cors",
			headers: {
				"Authorization": parameters.Authorization,
				"accept": "application/json",
			},
		}).then(response => response.text())
		.then(result => console.log(9999999, result))
		.catch(error => console.log('error', error));
};

// 用户注册
export const regisiter = (parameters) => {
	return API_Form_POST(`${baseURL}/user/register`, parameters);
};

// 用户登录
export const login = (parameters) => {
	// return API_Form_POST(`${baseURL}/user/login`, parameters);
	const formdata = new FormData();
	for (let key in parameters) {
		formdata.append(key, parameters[key]);
	}
	return fetch(`${baseURL}/user/login`, {
		method: "POST",
		mode: "cors",
		body: formdata,
	}).then(response => {
		if (response.status === 200) {
			return response.json();
		} else {
			return "用户名错误或密码不存在";
		}
	});
};

// 用户信息
export const useInfo = (parameters) => {
	return API_GET(`${baseURL}/user/me`, parameters);
};

// 查询纪念日 GET
export const searchAnniversary = (parameters) => {
	return API(`${baseURL}/souvenir/anniversary/search`, parameters, "GET");
};

// 创建纪念日 POST
export const createAnniversary = (parameters) => {
	return API(`${baseURL}/souvenir/anniversary/create`, parameters);
};

// 更新纪念日 POST
export const updateAnniversary = (parameters) => {
	return API(`${baseURL}/souvenir/anniversary/update`, parameters);
};
