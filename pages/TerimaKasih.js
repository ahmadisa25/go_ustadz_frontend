import * as React from 'react';
import { Text, ScrollView, View, StyleSheet, Image, Button, Linking } from 'react-native';
import rocket from '../assets/icons/rocket.gif';

export default function TerimaKasih({route, navigation}) {
	const {ustadz, paket, ...others} = route.params;
return (
	<ScrollView>
		<View style={styles.container}>
			<Text style={styles.paragraph}>
				Terima kasih telah memilih untuk belajar bersama kami!
			</Text>
			<View>
				<View style={styles.profile_view}>
					<Image source={{uri: ustadz.foto_profil}} style={styles.avatar}/>
					<Text style={styles.nama}>{ustadz.nama}</Text>
					<Text style={styles.alamat}>{ustadz.keahlian}</Text>
				</View>
				<View style={styles.profile_view}>
					<Text style={styles.nama}>Paket Belajar : {paket}</Text>
					<Text style={styles.alamat}>Harga Paket : Rp{others.harga_paket}</Text>
					
				</View>
			</View>
			<View style={styles.button_view}>
				<Button
					title="Hubungi Ustadz"
					color="#FF9933"
					borderRadius= '50'
					onPress={()=> Linking.openURL(`tel:${ustadz.telepon}`)} //pas on press bawa juga parameter ustadznya
				/>
			</View>
			<Text style={styles.judul}>
				Barangsiapa yang Allah kehendaki kebaikan padanya, niscaya Allah akan jadikan ia faham dalam agama
			</Text>
			<Text style={styles.judul}>(Muttaffaqun 'alaihi, muslim.or.id)</Text>
		</View>
	</ScrollView>
);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor: '#fff',
		padding: 30,
	},
	paragraph: {
		fontSize: 22,
		textAlign: 'center',
		color: '#000',
		fontFamily: "Lato-Bold"	
	},
	judul : {
		color:'#000',
		fontSize: 13,
		textAlign: 'center',
		marginTop: 20,
		fontFamily: "Lato-Regular"	
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
	nama:{
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
	button_view: {
		marginTop: 20
	}
	});





