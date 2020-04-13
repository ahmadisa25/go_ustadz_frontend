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
import physics from '../assets/icons/physics-icon.png';
import math from '../assets/icons/math-icon.png';
import post from '../assets/icons/post-icon.png';
import chem from '../assets/icons/chem-icon.png';

const fetchConfig = {
    method: 'POST',
    headers:{ "Content-Type" :"application/x-www-form-urlencoded", 
              "Accept":"application/json" },
    url: API_BASE_URL,
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
    return (
      <>
          <Text style={styles.subtitle}>Pilih Subtopik</Text>
          <View style={styles.container}>
              <TouchableWithoutFeedback onPress={() => onTopicClick(this, navigation)}>
                  <View style={styles.grid_box}>
                    <Image source={math} style={styles.home_grid_boxImage}/>
                    <Text style={[styles.home_grid_boxText]}>Matematika</Text>
                  </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => onTopicClick(this, navigation)}>
                 <View style={styles.grid_box} >
                  <Image source={physics} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Fisika</Text>
                </View>
              </TouchableWithoutFeedback>
               <TouchableWithoutFeedback onPress={() => onTopicClick(this, navigation)}>
                  <View style={styles.grid_box}>
                    <Image source={chem} style={styles.home_grid_boxImage}/>
                    <Text style={[styles.home_grid_boxText]}>Kimia</Text>
                  </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => onTopicClick(this, navigation)}>
                  <View style={styles.grid_box}>
                    <Image source={post} style={styles.home_grid_boxImage}/>
                    <Text style={[styles.home_grid_boxText]}>Bahasa Inggris</Text>
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
    marginBottom: 10,
    fontFamily: "Lato-Regular"
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
    marginLeft: 20,
    fontFamily: "Lato-Regular"
  }
});
