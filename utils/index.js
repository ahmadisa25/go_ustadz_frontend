import axios from 'axios';
import {Alert, AsyncStorage} from 'react-native';

const API_BASE_URL = "http://ayongaji.wartaqi.com/public/api/";
const LOGIN_API = API_BASE_URL + "login";
const NEAR_USTADZ_API = API_BASE_URL + "nearust";

function checkApiParams(params){
  const { api_method, auth_token, api_url ...others} = params;
  if(!api_url){
    return false;
  } else if(!api_method){
    return false;
  }
}

function axiosConfig(params){
  checkApiParams(params);
  const { api_method, auth_token, api_url ...others} = params;
  const config = {
      method: api_method? api_method: 'GET',
      headers: { "Content-Type" :"application/x-www-form-urlencoded", 
                "Accept":"application/json"}
      url: api_url,
      body: others.body
  };
  if(auth_token){
    config.headers['Authorization'] = "Bearer " + auth_token 
  }
  return config;
}

async function fetchData(config) {
	const response = await axios(axiosConfig(config));
	const json = await response.data;
	console.log(json);
	return json;
}

async function storeData(key, value){
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
     		Alert.alert(
              'Terjadi Kesalahan',
              'Silakan ulang kembali.',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: true},
            );
  }
}

//auth check bisa pake yang dibawah ini
async function takeData(key){
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    		Alert.alert(
              'Terjadi Kesalahan',
              'Data tidak ditemukan',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: true},
            );
  }
}


export {
	fetchData,
  takeData,
  storeData,
	LOGIN_API,
  NEAR_USTADZ_API
}
