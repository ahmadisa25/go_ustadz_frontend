import React, {useState} from 'react';
import { ScrollView, View, FlatList, StyleSheet, Text, Image, Button } from 'react-native';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'Infaq Konsultasi 1',
		price: 'Rp10.000/jam',
		ustadz: 'Ruslan Gani S. Pi',
		tanggal: '28/02/2020'
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Infaq Konsulatsi 2',
		price: 'Rp25.000/Jam',
		ustadz: 'Ruslan Gani S. Pi',
		tanggal: '28/02/2020'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Infaq Kursus 1',
		price: 'Rp50.000/Bulan',
		ustadz: 'Ruslan Gani S. Pi',
		tanggal: '24/02/2020'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Infaq Kursus 2',
		price: 'Rp60.000/Bulan',
		ustadz: 'Ruslan Gani S. Pi',
		tanggal: '23/02/2020'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Infaq Intensif 1',
		price: 'Rp150.000/Bulan',
		ustadz: 'Ruslan Gani S. Pi',
		tanggal: '21/02/2020'
	},
];

const Item = ({ title, price, ...props}) => {
	//const [showModal, setShowModal] = useState(false);
	//if(!showModal)
	return (
		<View style={styles.item}>
			<View>
				<Text style={styles.tanggal_order}>{props.tanggal}</Text>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.price}>{price}</Text>
				<Text>{props.ustadz}</Text>
			</View>
		</View>
	); //else return <Modal item={{title, price}}/>
}

export default function HistoryOrder({route, navigation, props}) {
	const { user } = route.params;
	return (
		<ScrollView style={styles.container}>
			<View style={styles.container}>
				<FlatList
				data={DATA}
				renderItem={({ item }) => <Item title={item.title} tanggal={item.tanggal} ustadz={item.ustadz} price={item.price} nav={navigation} user={user}/>}
				keyExtractor={item => item.id}
				/>
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

