import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Modal, TouchableWithoutFeedback } from 'react-native';

import { fetchData, storeData, errorAlert, removeData, takeData } from '../utils/';
import loc from '../assets/icons/loc-icon.png';

const sampleUser = {
      "nama": "Fahru Abu Firnas",
      "email": "fahru@bantany.com",
      "telepon": "082134577789",
      "foto_profil": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg"
}

class Login extends Component {
	state = {
		email: '',
		password: '',
		loadingVisible: false,
		warningVisible: true
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

			this.setState({loadingVisible: true});

			fetch("http://ayongaji.wartaqi.com/public/api/login", requestOptions)
			  .then(response => response.json())
			  .then(async (result) => {
			  	if(!result.msg && !result.errors){
			  		const data = await storeData('user_data', JSON.stringify(result));
			  		navigation.navigate('Beranda');
					this.setState({loadingVisible: false});
			  	} else{
			  		this.setState({loadingVisible: false});
			  		const error_text ='Email atau password salah';
			  		errorAlert(error_text);
			  	}
			  	
			  })
			  .catch(error => console.log('error', error));
		}
	}

	render() {
		const {navigation} = this.props;
		let { loadingVisible, warningVisible } = this.state;
		return(
			  <>
			  	<Modal
		          animationType="slide"
		          transparent={true}
		          visible={warningVisible}
		        >
			        <View style={styles.centeredView}>
			        	<View style={styles.modalView}>
		            		<Image source={loc}/>
							<Text style={styles.gps_warning}>Ayo Ngaji adalah sebuah aplikasi yang dapat membantu anda untuk mencari ustadz yang dapat menemani anda belajar.</Text>
							<Text style={styles.gps_warning}>Agar dapat membantu anda dalam hal tersebut, kami memerlukan GPS dan izin akses lokasi anda.</Text>
							<Text style={styles.gps_warning}>Anda dapat mengatur keduanya pada bagian pengaturan atau Settings di perangkat anda.</Text>
							<TouchableOpacity style={styles.gps_ok_touch} onPress={() => {
									this.setState({warningVisible: false});
								}
							}>
								<Text style={styles.gps_ok_btn}>OK</Text>
							</TouchableOpacity>
						</View>
			       	</View>
		        </Modal>
				<Modal
		          animationType="slide"
		          transparent={true}
		          visible={loadingVisible}
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

						<Text style={styles.register_text}>Belum punya akun? 
							<TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
								<Text style={styles.register_link}>Daftar disini</Text>
							</TouchableWithoutFeedback>
						</Text>
					</View>
				</View>
			</>
		)
	}
}
export default Login;

const styles = StyleSheet.create({
	gps_ok_touch: {
		margin: 10
	},
	gps_ok_btn: {
		fontSize: 20,
		color: '#336633',
		fontWeight: 'bold'
	},
	gps_warning: {
		textAlign: 'center',
		margin: 5
	},
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
