import React, {useState, useEffect} from 'react';
import { ScrollView, View, FlatList, StyleSheet, Text, Image, Button } from 'react-native';

import { fetchData, takeData, PAKETS_API } from '../utils';

const Item = ({ property, value }) => {
	return (
		<View style={styles.item}>
			<View>
				<Text style={styles.title}>{property}</Text>
			</View>
			<View style={styles.item_buttons}>
				<Text style={styles.price}>{value}</Text>			
			</View>
		</View>
	); //else return <Modal item={{title, price}}/>
}

export default function Profile({route, navigation, props}) {
	let fetchConfig = {
	    requestOptions: {
	        method: 'GET',
	        body: "",
	        redirect: 'follow'
	    },
	    url: PAKETS_API,
	    api_token: ""
	}
	let [user, setUser] = useState([]);
	const getStorageData = async (key) =>{ 
		const user_data = await takeData(key);
		setUser(user_data);
	}

	useEffect( () => {
		getStorageData('user_data');
  	 }, []);
	const user_obj = JSON.parse(user);
	return (
		<ScrollView style={styles.container}>
			<View style={styles.profile_view}>
				<Image source={{uri: user_obj.profile_picture}} style={styles.avatar}/>
				<Text style={styles.judul}>{user_obj.nama}</Text>
				<Text style={styles.alamat}>{user_obj.pekerjaan}</Text>
			</View>
			<View style={styles.container}>
				<Item property={"Email"} value={user_obj.email}/>	
				<Item property={"Telepon"} value={user_obj.telepon}/>	
				<Item property={"Status"} value={user_obj.status}/>	
				<Item property={"Tanggal Lahir"} value={user_obj.tanggal_lahir}/>	
				<Item property={"Alasan Bergabung"} value={user_obj.alasan_bergabung}/>	
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
	profile_view:{
		paddingTop: 10,
		alignItems: 'center',
	},
	avatar:{
		width: 100, 
		height: 100, 
		borderRadius: 50,
		margin: 10
	},
	item: {
		flexDirection: 'row',
		paddingLeft: 5,
		paddingRight: 5,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 20,
		justifyContent: 'space-between'
	},
	item_buttons: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	title: {
		marginTop: 5,
		marginBottom: 5,
		fontSize: 15,
		fontWeight: '700',
		color: '#000',
		fontFamily: "Lato-Regular"
	},
	price: {
		fontSize: 15,
		color: '#000',
		fontFamily: "Lato-Regular"
	},
	menu_title:{
		color: '#000',
		marginLeft: 10,
		marginTop: 20,
		marginBottom: 7,
		fontSize: 16,
		fontFamily: 'Lato-Bold'
	},
	tempat: {
		backgroundColor: '#f9c2ff',
		padding: 10,
	},
	judul:{
		fontSize:16,
		color: '#000',
		fontFamily: "Lato-Bold"
	},
	alamat: {
		fontSize:16,
		color: '#000',
		fontFamily: "Lato-Regular",
		textAlign: 'center'
	},
	});

