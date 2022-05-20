import React, { useState, useEffect } from 'react'

//ReactNative_Stuff
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
//redux
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './src/app/store'
//react-navigation
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation'

//the main app function
export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ReduxProvider>
  )
}
