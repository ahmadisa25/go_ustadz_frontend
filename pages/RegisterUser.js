import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Modal, TouchableWithoutFeedback } from 'react-native';

import { fetchData, storeData, errorAlert, removeData, basicAlert } from '../utils/';
import loc from '../assets/icons/loc-icon.png';

const sampleUser = {
      "nama": "Fahru Abu Firnas",
      "email": "fahru@bantany.com",
      "telepon": "082134577789",
      "foto_profil": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg"
}


class RegisterUser extends Component {
	state = {
		nama: '',
		telepon: '',
		email: '',
		password: '',
		loadingVisible: false,
	}

	handleInput = (name) => {
		return (text) => {
			this.setState({ [name]: text })
		}
	}


	login = (event) => {
		const { email, password, nama, telepon } = this.state;
		const { navigation } = this.props;
		if(email && password) {
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
			myHeaders.append("Accept", "application/json");	

			const body = {
				nama: nama,
				email: email,
				password: password,
				telepon: telepon,
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

			fetch("http://ayongaji.wartaqi.com/public/api/users", requestOptions)
			  .then(response => response.json())
			  .then(async (result) => {
			  	console.log(result);
			  	if(!result.msg && !result.errors){
			  		basicAlert('Sukses', "Registrasi Berhasil");
			  		const data = await storeData('user_data', JSON.stringify(result));
			  		navigation.navigate('Login');
					this.setState({loadingVisible: false});
			  	} else{
			  		this.setState({loadingVisible: false});
			  		const error_text ='Silakan cek kembali isian anda.';
			  		errorAlert(error_text);
			  	}
			  	
			  })
			  .catch(error => console.log('error', error));
		}
	}

	render() {
		const {navigation} = this.props;
		return(
			  <>
			  <Modal
		          animationType="slide"
		          transparent={true}
		          visible={this.state.loadingVisible}
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
						<Text style={styles.judul}>REGISTER</Text>
						<TextInput style = {styles.input}
						underlineColorAndroid = "transparent"
						placeholder = "Nama Anda"
						name="nama"
						placeholderTextColor = "#3b5998"
						autoCapitalize = "none"
						onChangeText = {this.handleInput('nama')}/>
						<TextInput style={styles.input}
						underlineColorAndroid = "transparent"
						placeholder = "Email"
						name="email"
						placeholderTextColor = "#3b5998"
						autoCapitalize="none"
						autoCompleteType="email"
						textContentType="emailAddress"
						keyboardType="email-address"
						onChangeText={this.handleInput('email')}
						/>
						<TextInput style = {styles.input}
						secureTextEntry={true}
						underlineColorAndroid = "transparent"
						placeholder = "Password"
						name="password"
						placeholderTextColor = "#3b5998"
						autoCapitalize="none"
						onChangeText={this.handleInput('password')}/>
						<TextInput style = {styles.input}
						underlineColorAndroid = "transparent"
						placeholder = "No. HP Aktif"
						placeholderTextColor = "#3b5998"
						keyboardType="number-pad"
						autoCapitalize = "none"
						onChangeText = {this.handleInput('telepon')}/> 
						<TouchableOpacity style={styles.submitButton} onPress={this.login}>
							<Text style = {styles.submitButtonText}>DAFTAR</Text>
						</TouchableOpacity>
						<Text style={styles.info_text}>* Dalam pengisian password diperhatikan agar memiliki karakter alfabet (ada yang kapital dan tidak), angka dan simbol. Password juga harus memiliki minimal 8 karakter. </Text>
						<Text style={styles.register_text}>Sudah memiliki akun? Silakan login
							<TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
								<Text style={styles.register_link}> disini</Text>
							</TouchableWithoutFeedback>
						</Text>
					</View>
				</View>
			</>
		)
	}
}
export default RegisterUser;

const styles = StyleSheet.create({
	info_text:{
		textAlign: 'center',
		fontStyle: 'italic'
	},
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
