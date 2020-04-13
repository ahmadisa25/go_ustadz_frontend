import React from 'react';
import {
	View,
	Image, 
	Text,
	Button,
	StyleSheet
} from 'react-native';

export const Screen = (props, nav) => {
	console.log(props);
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