const URL_PREFIX = "http://multi_record.heicycyu.top:8888/";

const baseURL = process.env.NODE_ENV === 'development' ? '/api' : 'http://multi_record.heicycyu.top:8888'

// 默认请求方式为 POST
const API = (url, parameters, method = "POST") => {
	return fetch(url + "?" + new URLSearchParams(parameters), {
		method: method,
		mode: "cors",
	});
};

// GET
export const searchAnniversary = (parameters) => {
	return API(`${baseURL}/souvenir/anniversary/search`, parameters, "GET");
};

// POST
export const createAnniversary = (parameters) => {
	return API(`${baseURL}/souvenir/anniversary/create`, parameters);
};

// POST
export const updateAnniversary = (parameters) => {
	return API(`${baseURL}/souvenir/anniversary/update`, parameters);
};
