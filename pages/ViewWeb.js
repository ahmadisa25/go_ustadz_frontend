import React from 'react';
import { 
  StyleSheet,
  View,
  Linking,
  Button,
  Text,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import { WebView } from 'react-native-webview';
import home from '../assets/icons/home-icon.png'; 
import logo from '../assets/logo.png'; 


export default function ViewWeb({route, navigation}) {
    const {url, injectjs, html} = route.params;
    console.log(navigation.navigate) ;
    return <>
    <WebView source={{ uri: url }} scalesPageToFit={true}/>
    { route.params.url==="https://sofyanruray.info/google-sunnah" &&
    	<>
	    	<Text h6>Dengan melakukan pencarian di Mesin ini, maka anda menyetujui:</Text>
		    <Text style={{color: 'blue'}}
		      onPress={() => Linking.openURL('https://policies.google.com/privacy?hl=id')}>Kebijakan Privasi Google</Text>
	    </>
	}
   	</>
}
const styles = StyleSheet.create({
   top_bar:{
      backgroundColor: '#398AD7',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
   title_bar:{
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    flex: 0.4,
    width: undefined,
    height: undefined

  },
  logo_bar:{
    paddingTop: 7,
    paddingBottom: 7,
    flex: 1,
    width: undefined,
    height: undefined

  },
  top_logo:{
    width: 150,
    height: 50
  },
   home_icon:{
    width: 25,
    height: 25
  }
});