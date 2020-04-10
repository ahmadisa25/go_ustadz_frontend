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
import Slideshow from 'react-native-slideshow';

import sample from '../assets/sample.jpg';
import home from '../assets/icons/home-icon.png';
import fiqh from '../assets/icons/fiqh-icon.png';
import umum from '../assets/icons/umum-icon.png';
import tajwid from '../assets/icons/tajwid-icon.png';
import article from '../assets/icons/article-alt-icon.png';
import qa from '../assets/icons/qa-icon.png';
import schedule from '../assets/icons/schedule-icon.png';
import ustadz from'../assets/icons/ustadz-icon.png';
import tv from '../assets/icons/tv-icon.png';
import akhlaq from '../assets/icons/akhlaq-icon.png';
import blog from '../assets/icons/blog-icon.png';
import school from '../assets/icons/school-icon.png';
import social from '../assets/icons/social-icon.png';
import banner_td from '../assets/banner-taawun-dakwah-new.png';
import logo from '../assets/logo.png'; 

export default function Home({navigation}) {
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
                  <Image source={tajwid} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Ilmu Qur'an</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => {navigation.navigate("Ilmu Agama")}}>
                  <View style={styles.home_grid_box}>
                    <Image source={fiqh} style={styles.home_grid_boxImage}/>
                    <Text style={[styles.home_grid_boxText]}>Ilmu Agama</Text>
                  </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles.home_grid_box}>
                  <Image source={umum} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Ilmu Umum</Text>
                </View>
              </TouchableWithoutFeedback>
          </View>
          <View style={styles.container}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('ViewWeb', {url: "https://www.youtube.com/embed?listType=playlist&list=PLGiSRShugneENS8RkpuBqP1_TP-aHhrZp"})}>
                <View style={styles.home_grid_box}>
                  <Image source={ustadz} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Kajian</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('ViewWeb', {url: "https://sofyanruray.info/artikel-app"})}>
                <View style={styles.home_grid_box}>
                  <Image source={article} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Artikel</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback  onPress={() => navigation.navigate('ViewWeb', {url: "https://sofyanruray.info/tanya-jawab-app/"})}>
                <View style={styles.home_grid_box}>
                  <Image source={qa} style={styles.home_grid_boxImage}/>
                  <Text style={[styles.home_grid_boxText]}>Konsultasi</Text>
                </View>
              </TouchableWithoutFeedback>
          </View>
        {/*<View style={styles.tab_box}>
            <View style={[styles.grid_box, styles.sofyan_blue]}>
              <Image source={home} style={styles.tab_boxIcon} onClick={ () => mapStateToProps({current_page: "Home"})}/>
              <Text style={[styles.grid_boxText]}>Beranda</Text>
            </View>
            <View style={[styles.grid_box, styles.sofyan_blue]}>
              <Image source={reload} style={styles.tab_boxIcon}/>
               <Text style={[styles.grid_boxText]}>Muat Ulang</Text>
            </View>
            <View style={[styles.grid_box, styles.sofyan_blue]}>
              <Image source={share} style={styles.tab_boxIcon}/>
               <Text style={[styles.grid_boxText]}>Bagikan</Text>
            </View>
        </View>*/}
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
   top_bar:{
      backgroundColor: '#398AD7',
      justifyContent: 'center',
      flex: 0.5,
      paddingLeft: 15
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
    marginTop: 2
  }, 
  sofyan_blue: {
    backgroundColor: '#398AD7'
  },
  tab_box: {
    backgroundColor: '#398AD7',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    bottom:0
  },
  tab_boxIcon: {
    width: 25,
    height:25
  }, 
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 5
  },
  top_image:{
    flex: 2.5,
    width: undefined,
    height: undefined
  },
  black_box:{
    backgroundColor: '#000',
    opacity: 0.5,
    padding: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  black_box__text:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
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
    fontSize: 11
  }
});
