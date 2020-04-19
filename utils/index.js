import axios from 'axios';
import {Alert, AsyncStorage} from 'react-native';

const API_BASE_URL = "http://ayongaji.wartaqi.com/public/api/";
const LOGIN_API = API_BASE_URL + "login";
const NEAR_USTADZ_API = API_BASE_URL + "nearust";
const PAKETS_API = API_BASE_URL + "pakets";
const ORDERS_API = API_BASE_URL + "orders";

const ACTION_ERR = 'Maaf, saat ini permintaan anda tidak dapat diproses';

const TOPIC_IDS = {
  "Aqidah": 1,
  "Fiqh": 2,
  "Tajwid": 3,
  "Akhlaq": 5,
  "Tafsir": 6,
  "Matematika": 7,
  "Fisika": 8,
  "Biologi": 9,
  "Bahasa Inggris": 14
}

//function dibawah ini milik malasngoding.com
function formatRupiah(angka, prefix){
      let separator;
      var number_string = angka.replace(/[^,\d]/g, '').toString(),
      split       = number_string.split(','),
      sisa        = split[0].length % 3,
      rupiah        = split[0].substr(0, sisa),
      ribuan        = split[0].substr(sisa).match(/\d{3}/gi);
 
      // tambahkan titik jika yang di input sudah menjadi angka ribuan
      if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
      }
 
      rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
      return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

function errorAlert(error_text){
  return Alert.alert(
    'Error',
    error_text,
    [
      {text: 'OK'},
    ],
    {cancelable: true},
 );
}


function checkApiParams(params){
  const { api_method, auth_token, api_url, ...others} = params;
  if(!api_url){
    return false;
  } else if(!api_method){
    return false;
  }
}

function toUrlEncoded(form_object){
      let formBody=[];

      for(let key in form_object) {
        const encoded_key = encodeURIComponent(key);
        const encoded_value = encodeURIComponent(form_object[key]);
        formBody.push(encoded_key + "=" + encoded_value);
      }

      formBody = formBody.join("&");

      return formBody;
}

function axiosConfig(params){
  const { api_method, auth_token, api_url, ...others} = params;
  const config = {
      method: api_method? api_method: 'GET',
      headers: { "Content-Type" :"application/x-www-form-urlencoded"},
      url: api_url,
      data: others.body
  };
  if(auth_token){
    config.headers['Authorization'] = "Bearer " + auth_token 
  }
  return config;
}

function errorParser(url){
  switch(url){
    case 'NEAR_USTADZ_API':
      return "Tidak ada ustadz yang tersedia" 
      break;
    case 'PAKETS':
      return "Maaf, tidak ada paket belajar yang tersedia" 
      break;
  }
}

async function fetchData(config) {
    let { url,  requestOptions, api_token } = config;
    let { body } = requestOptions;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Accept", "application/json"); 

    if(api_token){
      myHeaders.append("Authorization", "Bearer " + api_token);
    }
    requestOptions.headers = myHeaders;

    if(body){
      requestOptions.body = toUrlEncoded(body);
    }


    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      if(!result || (!result.length && typeof result !== 'object')){
        errorAlert(errorParser(url));
        return false;
      } 
      return result;
    } catch (error) {
        errorAlert(ACTION_ERR);
    }
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

async function removeData(key){
  try {
    const value = await AsyncStorage.removeItem(key);
    const item = await takeData(key);
   // console.log(item);
    if(item !== null){
        Alert.alert(
              'Oops...Terjadi Kesalahan',
              'Silakan coba kembali',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: true},
            );
    }
    else return true;
  } catch (error) {
    console.log(error);
        Alert.alert(
              'Terjadi Kesalahan',
              'Aksi gagal dilakukan',
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
    return value;
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
  errorAlert,
  takeData,
  storeData,
  removeData,
  axiosConfig,
  TOPIC_IDS,
  formatRupiah,
	LOGIN_API,
  ORDERS_API,
  PAKETS_API,
  NEAR_USTADZ_API
}
