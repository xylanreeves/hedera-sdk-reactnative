import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { createNewTestnetAccount, NewAccountProp } from '../../hederaTestnet'
//redux
import { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { color } from '../components/colors'

const HomeScreen = () => {
  const userAccountId = useSelector(
    (state: RootState) => state.user.userAccountId,
  )
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.upperDashboard}>

        <View style={styles.balances}>
          <Text style={styles.accBalanceFont}>$1,044.96</Text>
          <Text style={styles.hbarFont}>10,000 HBAR</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryDarkGray,
  },
 
  upperDashboard: {
    width: '100%',
    height: '42%',
    backgroundColor: 'rgba(255,255,255,0.03)',
    justifyContent: 'center'
  },
  balances: {

  },
  accBalanceFont: {
    color: color.lightGray,
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 32
  },
  hbarFont:{
    color: color.lightGray,
    marginLeft: 33

  }

})
