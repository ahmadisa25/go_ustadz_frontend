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


export default function HomeSyari({navigation}) {
    return (
      <>
          <Text style={styles.subtitle}>Pilih Subtopik</Text>
          <View style={styles.container}>
              <TouchableWithoutFeedback>
                 <View style={styles.grid_box} >
                  <Image source={aqidah} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Aqidah</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                  <View style={styles.grid_box}>
                    <Image source={fiqh} style={styles.home_grid_boxImage}/>
                    <Text style={[styles.home_grid_boxText]}>Fiqh</Text>
                  </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                  <View style={styles.grid_box}>
                    <Image source={akhlaq} style={styles.home_grid_boxImage}/>
                    <Text style={[styles.home_grid_boxText]}>Akhlaq</Text>
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
