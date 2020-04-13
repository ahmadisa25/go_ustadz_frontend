import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { Screen } from '../components';

import loc from '../assets/icons/loc-icon.png';

//tambahin data user untuk di oper

export default function ScreenThree({navigation}){
	const btn = <Button title="Selanjutnya >" color="#3b5998" onPress={ () => navigation.navigate('Beranda')}/>
	return <> 
		<Screen img={loc} text={"Insya Allah, kami siap mencarikan dan mengajak mereka kepada anda. Cukup nyalakan GPS dan izinkan kami akses lokasi anda."}/>
		<View style={styles.next_btn}>{btn}</View>
	</>
}

const styles = StyleSheet.create({
	next_btn:{
		alignItems: 'center',
		marginLeft: 100,
		marginRight: 100
	}
});