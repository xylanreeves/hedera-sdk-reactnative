import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LoginInput from '../components/loginScreen/loginInput'
import { StatusBar } from 'expo-status-bar'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bodyFont}>Shao Wallet</Text>
      <LoginInput />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bodyFont: {
      fontSize: 22,
      fontWeight: "bold"
      
    }
})