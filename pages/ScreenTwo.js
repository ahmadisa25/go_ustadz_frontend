import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { Screen } from '../components';

import group from '../assets/icons/group-icon.png';

export default function ScreenTwo({navigation}){
	const btn = <Button title="Selanjutnya >" color="#3b5998" onPress={ () => navigation.navigate('Screen Three')}/>
	return <> 
		<Screen img={group} text={"Tenang ada para ustadz dan guru yang siap membantu. Mulai dari ilmu agama, sampai ilmu umum!"}/>
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