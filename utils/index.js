import axios from 'axios';

const API_BASE_URL = "https://go-ustadz.000webhostapp.com/";
//const NEAR_USTADZ_API = API_BASE_URL + "nearust";

async function fetchData(config) {
	const response = await axios(config);
	const json = await response.data;
	console.log(json);
	return json;
}

export {
	fetchData,
	API_BASE_URL
}
