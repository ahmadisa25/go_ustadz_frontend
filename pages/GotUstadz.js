import React, {useState, useEffect} from 'react';
import { ScrollView, View, FlatList, StyleSheet, Text, Image, Button } from 'react-native';

import { fetchData, takeData, PAKETS_API, formatRupiah } from '../utils';

const Item = ({ title, price, ...props}) => {
	return (
		<View style={styles.item}>
			<View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.price}>{formatRupiah(price.toString(), 'Rp')}</Text>
			</View>
			<View style={styles.item_buttons}>
				<Button
				title="pilih"
				color="#33CC33"
				borderRadius= '50'
				onPress={()=> props.nav.navigate("Terima Kasih", {paket: title, harga_paket: price, ustadz: props.ustadz})} //pas on press bawa juga parameter ustadznya
				/>
			</View>
		</View>
	); //else return <Modal item={{title, price}}/>
}

export default function GotUstadz({route, navigation, props}) {
	let fetchConfig = {
	    requestOptions: {
	        method: 'GET',
	        body: "",
	        redirect: 'follow'
	    },
	    url: PAKETS_API,
	    api_token: ""
	}
	let [user, setUser] = useState("");
	const [pakets, setPakets] = useState([]);
	const getStorageData = async (key) =>{ 
		const user_data = await takeData(key);
		setUser(user_data);
		const { api_token } = JSON.parse(user_data);
		fetchConfig.api_token = api_token;
		const data = await fetchData(fetchConfig);
		if(!data){
			nav.navigate('Beranda');
		} else setPakets(data);
	}

	useEffect( () => {
		getStorageData('user_data');
		//let user_data = getStorageData('user_data');
		//console.log(user_data);
		/*fetchConfig.api_token = api_token;
		*/
  	 }, []);
	const { ustadz } = route.params;
	return (
		<ScrollView style={styles.container}>
			<View style={styles.profile_view}>
				<Image source={{uri: ustadz.foto_profil}} style={styles.avatar}/>
				<Text style={styles.judul}>{ustadz.nama}</Text>
				<Text style={styles.alamat}>{ustadz.keahlian}</Text>
			</View>
			<Text style={styles.menu_title}>Pilihan Infaq</Text>
			<View style={styles.container}>
				{pakets && <FlatList
				data={pakets}
				renderItem={({ item }) => <Item title={item.nama + " " + item.durasi} price={item.harga} nav={navigation} ustadz={ustadz}/>}
				keyExtractor={item => item.id}
				/>}
				{!pakets.length && <Text style={{flex:1, alignItems:'center', color:'#fff'}}>Sedang Memuat....</Text>}
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
		fontFamily: 'Lato-Bold'
	},
	tempat: {
		backgroundColor: '#f9c2ff',
		padding: 10,
	},
	judul:{
		fontSize:16,
		color: '#fff',
		fontFamily: "Lato-Bold"
	},
	alamat: {
		fontSize:16,
		color: '#fff',
		fontFamily: "Lato-Regular",
		textAlign: 'center'
	},
	});

