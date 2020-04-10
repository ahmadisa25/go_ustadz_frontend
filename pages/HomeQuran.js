import React, {useState} from 'react';
//import { Provider, connect } from "react-redux";
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';

import { API_BASE_URL, fetchData } from '../utils';

import sample from '../assets/sample.jpg';
import home from '../assets/icons/home-icon.png';
import fiqh from '../assets/icons/fiqh-icon.png';
import umum from '../assets/icons/umum-icon.png';
import tajwid from '../assets/icons/tajwid-icon.png';
import article from '../assets/icons/article-alt-icon.png';
import qa from '../assets/icons/qa-icon.png';
import schedule from '../assets/icons/schedule-icon.png';
import aqidah from'../assets/icons/aqidah-icon.png';
import tv from '../assets/icons/tv-icon.png';
import akhlaq from '../assets/icons/akhlaq-icon.png';
import blog from '../assets/icons/blog-icon.png';
import school from '../assets/icons/school-icon.png';
import social from '../assets/icons/social-icon.png';
import banner_td from '../assets/banner-taawun-dakwah-new.png';
import logo from '../assets/logo.png'; 

let urlencoded = new URLSearchParams();
urlencoded.append("action_code", "near_ust");
urlencoded.append("user_lat", "-6.794105");
urlencoded.append("user_lon", "106.850579");
urlencoded.append("topic", "aqidah");

var form = new FormData();
form.append("action_code", "near_ust");
form.append("user_lat", "-6.794105");
form.append("user_lon", "106.850579");
form.append("topic", "aqidah");

console.log(urlencoded);

const fetchConfig = {
    method: 'POST',
    headers:{ "Content-Type" :"application/x-www-form-urlencoded", 
              "Accept":"application/json" },
    url: API_BASE_URL,
    body: form
}

const onTopicClick = async (click, nav) => {
    //setLoading(true);
    const sampleUstadz = {
      "nama": "Abu Ahmad Al-Banjary",
      "lulusan": "LIPIA Jakarta",
      "telepon": "082134577789",
      "foto_profil": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg"
    }
    nav.navigate('Ustadz Ditemukan', {ustadz: sampleUstadz});
    /*console.log('masup');
    const ustadz = await fetchData(fetchConfig);
    console.log(ustadz);*/
    /*props.setUstadz(ustadz);
    props.history.push({
           pathname: '/gotustadz',
           state: { ustadz }
    });*/
  }


export default function HomeQuran({navigation}) {
    return (
      <>
          <Text style={styles.subtitle}>Pilih Subtopik</Text>
          <View style={styles.container}>
              <TouchableWithoutFeedback onPress={() => onTopicClick(this, navigation)}>
                 <View style={styles.grid_box} >
                  <Image source={tajwid} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Tafsir</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => onTopicClick(this, navigation)}>
                  <View style={styles.grid_box}>
                    <Image source={fiqh} style={styles.home_grid_boxImage}/>
                    <Text style={[styles.home_grid_boxText]}>Tajwid</Text>
                  </View>
              </TouchableWithoutFeedback>
          </View>
      </>
  );
}

const styles = StyleSheet.create({
   subtitle: {
    fontSize: 17,
    paddingLeft: 15,
    marginTop: 20,
    marginBottom: 10
   },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 5
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
    marginLeft: 20
  }
});
