import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constant/colors'
import {useRouter} from 'expo-router'

export default function SignIn() {

	const router = useRouter();

	return (
		<View style={{
			padding: 25
		}}>
			<Text style={styles.textHeader}>Let's sign you in</Text>
			<Text style={styles.subText}>Welcome Back</Text>
			<Text style={styles.subText}>You've been missed</Text>

			<View style={{marginTop:25}}>
				<Text>Email</Text>
				<TextInput placeholder='Email' style={styles.textInput}/>
			</View>

			<View style={{marginTop:25}}>
				<Text>Password</Text>
				<TextInput placeholder='Password' 
				secureTextEntry={true}
				style={styles.textInput}/>
			</View>

			<TouchableOpacity style={styles.button}>
				<Text style={{
					fontSize:17,
					color:'white',
					textAlign:'center',
				}}>Login</Text>
			</TouchableOpacity>

						<TouchableOpacity style={styles.buttonCreate}
						onPress={()=> router.push('login/signUp')}>
				<Text style={{
					fontSize:17,
					color: Colors.PRIMARY,
					textAlign:'center',
				}}>Create Account</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	textHeader:{
		fontSize: 30,
		fontWeight: 'bold',
	},
	subText:{
		fontSize: 17,
		fontWeight: 'bold',
		color: Colors.GRAY
	},
	textInput:{
		padding: 10,
		borderWidth: 1,
		fontSize:17,
		borderRadius: 10,
		marginTop:5,
		backgroundColor:'white'
	},
	button:{
		padding:20,
	backgroundColor: Colors.PRIMARY,
	borderRadius: 10,
	marginTop:35
	},
		buttonCreate:{
		padding:20,
	backgroundColor: 'white',
	borderRadius: 10,
	marginTop:20,
	borderWidth: 1,
	borderColor: Colors.PRIMARY
	}
})