import React, {useState} from 'react';
//import { Provider, connect } from "react-redux";
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import HomeQuran from './pages/HomeQuran';
import HomeSyari from './pages/HomeSyari';
import ViewWeb from './pages/ViewWeb';
import GotUstadz from './pages/GotUstadz';
import Loading from './pages/Loading';
import TerimaKasih from './pages/TerimaKasih';
// import { getIcon } from './assets/icons';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
   background: '#fff'
  },
};

export default function App({navigation}) {
    return (
      <>
          <NavigationContainer theme={MyTheme}>
          <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Ilmu Qur'an" component={HomeQuran} />
          <Stack.Screen name="Ilmu Agama" component={HomeSyari} />
          <Stack.Screen name="ViewWeb" component={ViewWeb} />
          <Stack.Screen name="Ustadz Ditemukan" component={GotUstadz} />
          <Stack.Screen name="Terima Kasih" component={TerimaKasih} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}