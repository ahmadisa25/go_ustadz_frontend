import React, {useState, useEffect} from 'react';
import { ScrollView, View, FlatList, StyleSheet, Text, Image, Button } from 'react-native';

import { USER_ORDERS_API, fetchData, takeData, errorAlert } from '../utils';

const Item = ({ title, price, ...props}) => {
	//const [showModal, setShowModal] = useState(false);
	//if(!showModal)
	return (
		<View style={styles.item}>
			<View>
				<Text style={styles.tanggal_order}>{props.tanggal}</Text>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.price}>{price}</Text>
				<Text>{props.topic}</Text>
				<Text>{props.ustadz}</Text>
			</View>
		</View>
	); //else return <Modal item={{title, price}}/>
}

export default function HistoryOrder({route, navigation, props}) {
	let fetchConfig = {
	    requestOptions: {
	        method: 'GET',
	        body: "",
	        redirect: 'follow'
	    },
	    url: USER_ORDERS_API,
	    api_token: ""
	}
	const [history, setHistory] = useState([]);
	const getStorageData = async (key) =>{ 
		const user_data = await takeData(key);
		const { id, api_token } = JSON.parse(user_data);
		fetchConfig.api_token = api_token;
		fetchConfig.url +="/" + id;
		const data = await fetchData(fetchConfig);
		console.log(data);
		if(!data){
			const HISTORY_ERR = 'Maaf, saat ini data histori belajar anda belum dapat diambil. Coba beberapa saat lagi.'
			errorAlert(HISTORY_ERR);
			nav.navigate('Beranda');
		} else setHistory(data);
	}

	useEffect( () => {
		getStorageData('user_data');
		//let user_data = getStorageData('user_data');
		//console.log(user_data);
		/*fetchConfig.api_token = api_token;
		*/
  	 }, []);
	return (
		<ScrollView style={styles.container}>
			<View style={styles.container}>
				{history && <FlatList
				data={history}
				renderItem={({ item }) => <Item title={item.paket.nama + " " + item.paket.durasi} tanggal={item.created_at} topic={item.topic} ustadz={item.server} price={item.price} nav={navigation}/>}
				keyExtractor={item => item.id}
				/>}
				{!history.length && <Text style={{flex:1, alignItems:'center', color:'#fff'}}>Sedang Memuat....</Text>}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3b5998',
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
		backgroundColor: '#CCCCFF',
		flexDirection: 'row',
		padding : 10,
		margin: 5,
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
		fontSize: 20,
		fontFamily: "Lato-Regular"
	},
	price: {
		fontSize: 15,
		fontFamily: "Lato-Regular"
	},
	menu_title:{
		color: '#fff',
		marginLeft: 10,
		marginTop: 20,
		marginBottom: 7,
		fontSize: 16,
		fontWeight: 'bold'
	},
	tempat: {
		backgroundColor: '#f9c2ff',
		padding: 10,
	},
	judul:{
		fontSize:14,
		fontWeight: 'bold',
		color: '#fff',
		fontFamily: "Lato-Bold"
	},
	alamat: {
		fontSize:16,
		color: '#fff',
		fontFamily: "Lato-Regular"
	},
	tanggal_order: {
		fontSize: 18,
		marginBottom: 10,
		fontFamily: "Lato-Bold"
	}
	});

