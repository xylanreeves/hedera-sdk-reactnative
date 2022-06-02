import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { color } from '../colors'

let customFonts = {
  'VarelaRound-Regular': require('../../../assets/fonts/VarelaRound-Regular.ttf'),
}

const AppLogo = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts)
    setFontsLoaded(true)
  }

  useEffect(() => {
    _loadFontsAsync()
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.logoContainer}>
      <Text style={styles.titleFont}>Shao</Text>
      <Text style={styles.subTitleFont}>Wallet</Text>
    </View>
  )
}

export const Tagline = () => {

  const [fontsLoaded, setFontsLoaded] = useState(false)
  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts)
    setFontsLoaded(true)
  }

  useEffect(() => {
    _loadFontsAsync()
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <View style={styles.taglineContainer}>
      <Text style={styles.taglineFont}>An HBAR crypto wallet for devs and users alike</Text>
    </View>
  )
}

export default AppLogo

const styles = StyleSheet.create({
  logoContainer: {
    width: 320,
    // backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taglineContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  taglineFont: {
    color: 'rgba(255, 255, 255, 0.22)',
    fontFamily: 'VarelaRound-Regular',
    fontSize: 16
},
  titleFont: {
    fontSize: 42,
    color: 'white',
    fontFamily: 'VarelaRound-Regular',
    marginRight: 32,
  },
  subTitleFont: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'VarelaRound-Regular',
    marginLeft: 32,
    marginTop: -8,
  },
})
