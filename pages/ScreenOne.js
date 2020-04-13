import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { Screen } from '../components';

import confused from '../assets/icons/confused-icon.png';

export default function ScreenOne({navigation}){
	const btn = <Button title="Selanjutnya >" color="#3b5998" onPress={ () => navigation.navigate('Screen Two')}/>
	return <>
		<Screen img={confused} text={"Bingung kepada siapa anda harus menambah ilmu atau bertanya ketika tidak mengerti?"}/>
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