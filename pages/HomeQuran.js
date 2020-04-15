import React, {useState, useEffect} from 'react';
//import { Provider, connect } from "react-redux";
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  AsyncStorage
} from 'react-native';

import { NEAR_USTADZ_API, fetchData } from '../utils';
import Loading from './Loading';

import arab from '../assets/icons/arab-icon.png';
import tafsir from '../assets/icons/tafsir-icon.png';

const fetchConfig = {
    method: 'POST',
    headers:{ "Content-Type" :"application/x-www-form-urlencoded", 
              "Accept":"application/json" },
    url: NEAR_USTADZ_API,
    body: ""
}

const sampleUstadz = {
      "nama": "Abu Ahmad Al-Banjary",
      "telepon": "082134577789",
      "alamat": "Jl. Salemba Raya no. 16, Kenari, Senen, Jakarta Pusat",
      "foto_profil": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg",
}


const onTopicClick = async (click, nav, hook) => {
    hook(true);
    //const ustadz = await fetchData(fetchConfig);
    //console.log(ustadz);
    //nav.navigate('Ustadz Ditemukan', {ustadz: sampleUstadz});
  }


export default function HomeQuran({navigation}) {
    console.log(AsyncStorage.getItem('position'));
    const [loading, setLoading] = useState(false);
    if(!loading)
    return (
      <>
          <Text style={styles.subtitle}>Pilih Subtopik</Text>
          <View style={styles.container}>
              <TouchableWithoutFeedback onPress={() => onTopicClick(this, navigation, setLoading)}>
                 <View style={styles.grid_box} >
                  <Image source={tafsir} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Tafsir</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => onTopicClick(this, navigation)}>
                  <View style={styles.grid_box}>
                    <Image source={arab} style={styles.home_grid_boxImage}/>
                    <Text style={[styles.home_grid_boxText]}>Tajwid</Text>
                  </View>
              </TouchableWithoutFeedback>
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
