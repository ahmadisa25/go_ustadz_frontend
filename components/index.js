import React from 'react';
import {
	View,
	Image, 
	Text,
	Button,
	StyleSheet,
	Alert
} from 'react-native';

import { takeData } from '../utils';
import Login from '../pages/Login';

const NO_AUTH_ERR = "Anda belum login. Silakan melakukan login terlebih dahulu";

const ErrorScreen = (error_text) => {
	return(
		<View>
			<Text>{error_text}</Text>
		</View>
	);
}

export const withAuthorization = async (WrappedComponent) => {
	const user_data = await takeData("user_data");
	if(!user_data.email){
		Alert.alert(
                  'Oops...Terjadi Kesalahan',
                  NO_AUTH_ERR,
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  {cancelable: true},
               );
		return Login;
	} else{
		return WrappedComponent;
	}
}

export const Screen = (props, nav) => {
	return(
		<View style={[styles.screen_view, {backgroundColor: "#fff"}]}>
			<Image style={styles.screen_img} source={props.img}/>
			<Text style={styles.screen_text}>{props.text}</Text>
			{props.btn}
		</View>
	);
}

const styles = StyleSheet.create({
	screen_view:{
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		padding: 70
	},
	screen_img:{
		width: 150,
		height: 150
	},
	screen_text:{
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 20,
		fontFamily: "Lato-Regular",
		fontSize: 16
	}
});