import React, {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import { Alert } from 'react-native';
//import { Provider, connect } from "react-redux";
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import HomeQuran from './pages/HomeQuran';
import HomeUmum from './pages/HomeUmum';
import HomeSyari from './pages/HomeSyari';
import ViewWeb from './pages/ViewWeb';
import GotUstadz from './pages/GotUstadz';
import HistoryOrder from './pages/HistoryOrder';
import Loading from './pages/Loading';
import TerimaKasih from './pages/TerimaKasih';
import ScreenOne from './pages/ScreenOne';
import ScreenTwo from './pages/ScreenTwo';
import ScreenThree from './pages/ScreenThree';


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
  const [position, setPosition] = useState("");
  const [user_data, setUserData] = useState("");

    //nanti dibikin async aja kalau mau fetch user data
    useEffect( () => {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                setPosition({"lat": position.coords.latitude, "long": position.coords.longitude});
                //pengecekan dibawah ini dilakukan after login
                const user_data = {
                  "nama": "Abu Ahmad Al-Banjary",
                  "telepon": "082134577789",
                  "alamat": "Jl. Salemba Raya no. 16, Kenari, Senen, Jakarta Pusat",
                  "is_activated": false
                }
                setUserData(user_data);
            },
            (error) => {
               Alert.alert(
                  'Terjadi Kesalahan',
                  'Silakan cek kembali apakah GPS dan akses lokasi anda. ',
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  {cancelable: true},
               );
                // See error code charts on the repo in github
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);
    return (
      <>
          <NavigationContainer theme={MyTheme}>
          <Stack.Navigator  screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#3b5998' },
          }}>
          {!user_data.is_activated && <> 
            <Stack.Screen options={{headerShown: false}}  name="Screen Satu" component={ScreenOne} />
            <Stack.Screen options={{headerShown: false}}  name="Screen Two" component={ScreenTwo} />
            <Stack.Screen options={{headerShown: false}} name="Screen Three" component={ScreenThree} />
           </>}
          <Stack.Screen name="Beranda" options={{headerLeft: null}} component={Home} />
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Ilmu Qur'an" component={HomeQuran} />
          <Stack.Screen name="Ilmu Agama" component={HomeSyari} />
          <Stack.Screen name="Ilmu Umum" component={HomeUmum} />
          <Stack.Screen name="Artikel" component={ViewWeb} />
          <Stack.Screen name="Konsultasi" component={ViewWeb} />
          <Stack.Screen name="Kajian" component={ViewWeb} />
          <Stack.Screen name="Ustadz Ditemukan" component={GotUstadz} />
          <Stack.Screen name="Histori Belajar" component={HistoryOrder} />
          <Stack.Screen name="Terima Kasih" component={TerimaKasih} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}