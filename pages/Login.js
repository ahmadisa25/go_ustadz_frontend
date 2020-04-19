import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Modal } from 'react-native';

import { fetchData, storeData, LOGIN_API, errorAlert } from '../utils/';

const sampleUser = {
      "nama": "Fahru Abu Firnas",
      "email": "fahru@bantany.com",
      "telepon": "082134577789",
      "foto_profil": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg"
}

const loginConfig = {
	api_method: 'POST',
    api_url: LOGIN_API
}

class Login extends Component {
	state = {
		email: '',
		password: '',
		modalVisible: false
	}


	handleEmail = (text) => {
		this.setState({ email: text })
	}

	handlePassword = (text) => {
		this.setState({ password: text })
	}

	login = (event) => {
		//fetch data user disini
		const { email, password } = this.state;
		const { navigation } = this.props;
		if(email && password) {
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
			myHeaders.append("Accept", "application/json");	

			const body = {
				email: email,
				password: password
			}

			let formBody = [];

			for(let key in body) {
				const encoded_key = encodeURIComponent(key);
				const encoded_value = encodeURIComponent(body[key]);
				formBody.push(encoded_key + "=" + encoded_value);
			}

			formBody = formBody.join("&");

			const requestOptions = {
			  method: 'POST',
			  headers: myHeaders,
			  body: formBody,
			  redirect: 'follow'
			};

			this.setState({modalVisible: true});

			fetch("http://ayongaji.wartaqi.com/public/api/login", requestOptions)
			  .then(response => response.json())
			  .then(async (result) => {
			  	if(!result.msg && !result.errors){
			  		const data = await storeData('user_data', JSON.stringify(result));
			  		navigation.navigate('Beranda');
					this.setState({modalVisible: false});
			  	} else{
			  		this.setState({modalVisible: false});
			  		const error_text ='Email atau password salah';
			  		errorAlert(error_text);
			  	}
			  	
			  })
			  .catch(error => console.log('error', error));
		}
	}

	render() {
		const {navigation} = this.props;
		let { modalVisible } = this.state;
		return(
			  <>
				<Modal
		          animationType="slide"
		          transparent={true}
		          visible={modalVisible}
		          transparent={true}
		        >
		        <View style={styles.centeredView}>
            		<View style={styles.modalView}>
		        		<Text style={styles.modalText}>Sedang Memuat...</Text>
		        	</View>
		       	</View>
		        </Modal>
				<View style={styles.container}>
					<View style={styles.card}>
						<Text style={styles.paragraph}>
							Ayo 
						</Text>
						<Text style={styles.paragraph}>Ngaji!</Text>
						<Text style={styles.judul}>LOGIN</Text>
						<TextInput style={styles.input}
						underlineColorAndroid = "transparent"
						placeholder = "Email"
						placeholderTextColor = "#3b5998"
						autoCapitalize="none"
						autoCompleteType="email"
						textContentType="emailAddress"
						keyboardType="email-address"
						onChangeText={this.handleEmail}
						/>
						<TextInput style = {styles.input}
						secureTextEntry={true}
						underlineColorAndroid = "transparent"
						placeholder = "Password"
						placeholderTextColor = "#3b5998"
						autoCapitalize="none"
						onChangeText={this.handlePassword}/>

						<TouchableOpacity style={styles.submitButton} onPress={this.login}>
							<Text style = {styles.submitButtonText}>LOGIN</Text>
						</TouchableOpacity>
						<Text style={styles.register_text}>Belum punya akun? <Text style={styles.register_link}>Daftar disini</Text></Text>
					</View>
				</View>
			</>
		)
	}
}
export default Login;

const styles = StyleSheet.create({
	register_link:{
		color: "#9999CC",
		textDecorationLine: "underline"	
	},
	register_text:{
		marginTop: 30,
		marginBottom: 5,
		fontFamily: 'Lato-Regular',
		textAlign: 'center'
	},
	centeredView: {
	    flex: 1,
	    justifyContent: "center",
	    alignItems: "center",
	    marginTop: 22,
	    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  	},
  	modalView: {
	    margin: 20,
	    backgroundColor: "white",
	    borderRadius: 20,
	    padding: 35,
	    alignItems: "center",
	    shadowColor: "#000",
	    shadowOffset: {
	      width: 0,
	      height: 2
	    },
	    shadowOpacity: 0.25,
	    shadowRadius: 3.84,
	    elevation: 5
  	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 12,
		padding: 15,
		position: 'relative'
	},
	container: {
		justifyContent: 'center',
		backgroundColor: '#3b5998',
		padding: 30,
		color: '#fff',
		fontFamily: 'Lato-Regular',
		flex: 1
	},
	input: {
		margin: 15,
		height: 40,
		borderColor: '#3b5998',
		borderWidth: 1,
		borderRadius: 50,
		padding: 10
	},
	paragraph: {
		fontSize: 22,
		textAlign: 'center',
		fontFamily: "Lato-Bold",
		color:'#3b5998'
	},
	judul : {
		color:'black',
		fontSize: 13,
		textAlign: 'center',
		padding: 1,
		margin: 8,
		fontFamily: 'Lato-Bold'
	},
	submitButton: {
		backgroundColor: '#3b5998',
		padding: 10,
		margin: 15,
		height: 40,
		borderRadius: 12,
		alignItems: 'center'
	},
	submitButtonText:{
		color: 'white'
	},
	tempat: {
		marginTop: 30,
	}
	})
