import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const sampleUser = {
      "nama": "Fahru Abu Firnas",
      "email": "fahru@bantany.com",
      "telepon": "082134577789",
      "foto_profil": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg"
}

class Login extends Component {

	state = {
		isLogin: false,
		email: '',
		password: '',
		trueemail:"syo@gmail.com",
		truepassword: "ini sandi",
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
			console.log('ow');
			navigation.navigate("Beranda", {user: sampleUser});
		}
	}

	render() {
		const {navigation} = this.props;
		return(
			  <>
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
