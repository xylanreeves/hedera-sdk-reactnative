import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { StatusBar } from "expo-status-bar"

import { createNewTestnetAccount, NewAccountProp } from "../../hederaTestnet"
//redux
import { RootState } from "../app/store"
import { useSelector, useDispatch } from "react-redux"

const HomeScreen = () => {

  const userAccountId = useSelector((state: RootState) => state.user.userAccountId)
  const dispatch = useDispatch()

    return(
        <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.bodyFont}>You new Account Id:</Text>
      </SafeAreaView>
    )
}

export default HomeScreen


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
  