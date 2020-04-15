import React, {useEffect, useState} from 'react';
//import { Provider, connect } from "react-redux";
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';
import Slideshow from 'react-native-slideshow';

import sample from '../assets/sample.jpg';
import home from '../assets/icons/home-icon.png';
import islam from '../assets/icons/islam-icon.png';
import umum from '../assets/icons/umum-icon.png';
import quran from '../assets/icons/quran-icon.png';
import article from '../assets/icons/article-alt-icon.png';
import qa from '../assets/icons/qa-icon.png';
import ustadz from'../assets/icons/ustadz-icon.png';
import history from '../assets/icons/history-icon.png';
import profile from '../assets/icons/profile-icon.png';
import banner_td from '../assets/banner-taawun-dakwah-new.png';
import logo from '../assets/logo.png'; 

export default function Home({route, navigation}) {
    return (
      <>
        <Slideshow 
            dataSource={[
              { url:'https://sofyanruray.info/wp-content/uploads/2014/11/Waspadai-Dukun-Mengaku-Wali-3.jpg' },
              { url:'https://sofyanruray.info/wp-content/uploads/2016/04/2016-04-21-14.39.17.jpg' },
              { url: banner_td }
            ]}
          />
          <Text style={styles.subtitle}>Mau Apa Hari Ini?</Text>
          <View style={styles.container}>
              <TouchableWithoutFeedback onPress={() => {navigation.navigate("Ilmu Qur'an")}}>
                 <View style={styles.home_grid_box} >
                  <Image source={quran} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Ilmu Qur'an</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => {navigation.navigate("Ilmu Agama")}}>
                  <View style={styles.home_grid_box}>
                    <Image source={islam} style={styles.home_grid_boxImage}/>
                    <Text style={[styles.home_grid_boxText]}>Ilmu Agama</Text>
                  </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => {navigation.navigate("Ilmu Umum")}}>
                <View style={styles.home_grid_box}>
                  <Image source={umum} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Ilmu Umum</Text>
                </View>
              </TouchableWithoutFeedback>
          </View>
          <View style={styles.container}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Artikel', {url: "https://sofyanruray.info/artikel-app"})}>
                <View style={styles.home_grid_box}>
                  <Image source={article} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Artikel</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Kajian', {url: "https://www.youtube.com/embed?listType=playlist&list=PLGiSRShugneENS8RkpuBqP1_TP-aHhrZp"})}>
                <View style={styles.home_grid_box}>
                  <Image source={ustadz} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Kajian</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback  onPress={() => navigation.navigate('Konsultasi', {url: "https://sofyanruray.info/tanya-jawab-app/"})}>
                <View style={styles.home_grid_box}>
                  <Image source={qa} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Tanya Jawab</Text>
                </View>
              </TouchableWithoutFeedback>
          </View>
        <View style={styles.tab_box}>
            <View style={[styles.grid_box, styles.sofyan_blue]}>
              <Image source={home} style={styles.tab_boxIcon} onClick={ () => mapStateToProps({current_page: "Home"})}/>
              <Text style={[styles.grid_boxText]}>Beranda</Text>
            </View>
            <View style={[styles.grid_box, styles.sofyan_blue]}>
              <Image source={profile} style={styles.tab_boxIcon}/>
               <Text style={[styles.grid_boxText]}>Profil</Text>
            </View>
            <TouchableWithoutFeedback  onPress={() => navigation.navigate('Histori Belajar')}>
              <View style={[styles.grid_box, styles.sofyan_blue]}>
                <Image source={history} style={styles.tab_boxIcon}/>
                 <Text style={[styles.grid_boxText]}>Histori</Text>
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
  title_bar__textHeading:{
    fontSize: 17,
    color: '#fff'
  },
  grid_box:{
    flex: 1,
    alignItems: 'center'
  }, 
  grid_boxText: {
    color: 'white',
    marginTop: 2,
    fontSize: 11,
    fontFamily: "Lato-Regular"
  }, 
  sofyan_blue: {
    backgroundColor: '#3b5998'
  },
  tab_box: {
    backgroundColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    bottom:0
  },
  tab_boxIcon: {
    width:22,
    height:22
  }, 
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: "Lato-Regular"
  },
  top_image:{
    flex: 2.5,
    width: undefined,
    height: undefined
  },
  grid_box:{
    flex: 3.5,
    alignItems: 'center'
  },
  home_grid_boxImage: {
    width: 50,
    height: 50
  },
  home_grid_boxText: {
    textAlign: 'center',
    width: 50,
    height: 50,
    fontSize: 11,
    fontFamily: "Lato-Regular"
  }
});
