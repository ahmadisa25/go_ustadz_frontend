import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import rocket from '../assets/icons/rocket.gif';

export default function Loading() {
return (
	<View style={styles.container}>
		<Text style={styles.paragraph}>
			Mencarikan ustadz yang pas untuk anda... 
		</Text>
		<Image source={rocket} style={{width: 245, height: 200}}/>
		<Text style={styles.paragraph}>
			Insya Allah kami akan segera kembali
		</Text>
		<Text style={styles.judul}>
			Dzikir mengingat Allah keutamaannya menyamai berjihad di jalan Alaah dan menafkahi harta pada jalan Allah
		</Text>
		<Text style={styles.judul}>(disarikan dari HR.Tirmidzi no 3377, rumaysho.com)</Text>
	</View>
);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor: '#3b5998',
		padding: 30,
	},
	paragraph: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#fff'
	},
	judul : {
		color:'#fff',
		fontSize: 13,
		textAlign: 'center',
		marginTop: 20,
	},
	});





