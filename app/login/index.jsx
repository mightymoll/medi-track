import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../constant/colors';
import {useRouter} from 'expo-router';

export default function LoginScreen() {

	const router = useRouter();

	return (
		<View>
			<View style={{
				display: 'flex',
				alignItems:'center',
				marginTop: 40,
			}}>
				<Image source={require('./../../assets/images/login.png')}
				style={styles.image} />
			</View>
			<View style={{
				padding: 25,
				backgroundColor: colors.PRIMARY,
        borderRadius: 10,
				height: '100%',
			}}>
				<Text style={{
					fontSize: 30,
					fontWeight:'bold',
					color: 'white',
          textAlign: 'center',
				}}>Stay on Track, Stay Healthy!</Text>
				<Text style={{
					fontSize: 17,
					color: 'white',
          textAlign: 'center',
					marginTop: 20,
					marginBottom: 20,
				}}>Track your meds, take control of your health. Stay consistent, stay confident
				</Text>
				<TouchableOpacity 
				style={styles.button} 
				onPress={()=>router.push('login/signIn')}>
					<Text style={{
						textAlign:'center',
						fontSize: 16,
						color: colors.PRIMARY,
					}}>Continue</Text>
				</TouchableOpacity>
				<Text style={{
					color:'white',
					marginTop: 10,
				}}>Note: By clicking continue, you agree to our terms and conditions
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	image:{
		width: 130,
    height: 300,
		borderRadius: 23,
	},
	button:{
		padding: 15,
		backgroundColor: 'white',
    borderRadius: 99,
	}
})