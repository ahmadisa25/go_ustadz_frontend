import React, {useState, useEffect} from 'react';
//import { Provider, connect } from "react-redux";
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';

import { NEAR_USTADZ_API, fetchData, takeData, errorAlert } from '../utils';
import Loading from './Loading';

import arab from '../assets/icons/arab-icon.png';
import tafsir from '../assets/icons/tafsir-icon.png';
import fiqh from '../assets/icons/fiqh-icon.png';
import umum from '../assets/icons/umum-icon.png';
import tajwid from '../assets/icons/tajwid-icon.png';
import aqidah from'../assets/icons/aqidah-icon.png';
import tv from '../assets/icons/tv-icon.png';
import akhlaq from '../assets/icons/akhlaq-icon.png';
import physics from '../assets/icons/physics-icon.png';
import math from '../assets/icons/math-icon.png';
import post from '../assets/icons/post-icon.png';
import chem from '../assets/icons/chem-icon.png'; 

let fetchConfig = {
    requestOptions: {
        method: 'GET',
        body: "",
        redirect: 'follow'
    },
    url: NEAR_USTADZ_API,
    api_token: ""
}

function getSubcategories (category) {
  switch(category){
    case "qur'an":
      return [
        {name: "Tajwid", icon: arab},
        {name: "Tafsir", icon: tafsir}
      ]
      break;
    case "agama":
      return [
        {name: "Aqidah", icon: aqidah},
        {name: "Fiqh", icon: fiqh},
        {name: "Akhlaq", icon: akhlaq},
      ]
      break;
    case "umum":
     return [
        {name: "Matematika", icon: math},
        {name: "Fisika", icon: physics},
        {name: "Kimia", icon: chem},
        {name: "Bahasa Inggris", icon: post}
      ]
      break;
  }
}


const onTopicClick = async (click, embedded_obj) => {
    const {nav, hook, topic} = embedded_obj;
    hook(true);
    let location = await takeData('position');
    let user_data = await takeData('user_data');
    location = JSON.parse(location);
    const {latitude, longitude} = location.coords;
    const { api_token } = JSON.parse(user_data);
    fetchConfig.api_token = api_token;
    fetchConfig.url+="?lat_alamat="+latitude+"&long_alamat="+longitude+"&topic="+topic;
    const ustadz = await fetchData(fetchConfig);
    if(!ustadz){
      const SELECT_ERR = 'Maaf saat ini pembelajaran belum bisa dilakukan. Coba beberapa saat lagi.'
      errorAlert(SELECT_ERR);
      nav.navigate('Beranda');
    }
    nav.navigate('Ustadz Ditemukan', {ustadz: ustadz[0], topic: topic});
  }


export default function Subcategories({route, navigation}) {
  let fetchConfig = {
      requestOptions: {
          method: 'GET',
          body: "",
          redirect: 'follow'
      },
      url: USER_ORDERS_API,
      api_token: ""
  }
  const [historySize, setHistorySize] = useState([]);
  const getStorageData = async (key) =>{ 
    const user_data = await takeData(key);
    const { id, api_token } = JSON.parse(user_data);
    fetchConfig.api_token = api_token;
    fetchConfig.url +="/" + id;
    const data = await fetchData(fetchConfig);
    console.log(data.length);
    if(!data){
      const HISTORY_ERR = 'Maaf, saat ini data histori belajar anda belum dapat diambil. Coba beberapa saat lagi.'
      errorAlert(HISTORY_ERR);
      nav.navigate('Beranda');
    } else setHistorySize(data);
  }

  useEffect( () => {
    getStorageData('user_data');
     }, []);
  
    const { tipe } = route.params;
    const [loading, setLoading] = useState(false);
    if(!loading)
    return (
      <>
          <Text style={styles.subtitle}>Pilih Subtopik</Text>
          <View style={styles.container}>
              {getSubcategories(tipe).map( subcat => {
                return(
                   <TouchableWithoutFeedback onPress={() => onTopicClick(this, {nav: navigation, hook: setLoading, topic:subcat.name})}>
                      <View style={styles.grid_box} >
                        <Image source={subcat.icon} style={styles.home_grid_boxImage}/>
                        <Text style={[styles.home_grid_boxText]}>{subcat.name}</Text>
                       </View>
                     </TouchableWithoutFeedback>
                )
              })}
          </View>
      </>
  );
  else return <Loading/>;
}

const styles = StyleSheet.create({
   subtitle: {
    fontSize: 17,
    paddingLeft: 15,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Lato-Regular"
   },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 5,
  },
  grid_box:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  home_grid_boxImage: {
    width: 70,
    height: 70
  },
  home_grid_boxText: {
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 20,
    fontFamily: "Lato-Regular"
  }
});
