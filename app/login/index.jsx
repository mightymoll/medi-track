import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function LoginScreen() {
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
		</View>
	)
}

const styles = StyleSheet.create({
	image:{
		width: 200,
    height: 450,
		borderRadius: 23,
	}
})