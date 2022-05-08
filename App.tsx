import React, { useState, useEffect } from 'react'
import { MY_ACCOUNT_ID, MY_PRIVATE_KEY } from '@env'

import { NavigationContainer } from '@react-navigation/native'

import Homescreen from './screens/Homescreen'

import {
  Client,
  PrivateKey,
  AccountCreateTransaction,
  AccountBalanceQuery,
  Hbar,
  AccountId,
} from '@hashgraph/sdk'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const [mAccount, setmAccount] = useState()
  const [client, setClient] = useState<Client>()

  useEffect(() => {
    initHederaClient()
  }, [])

  async function initHederaClient() {
    //Grab your Hedera testnet account ID and private key from your .env file
    const myAccountId = MY_ACCOUNT_ID
    const myPrivateKey = MY_PRIVATE_KEY

    try {
      // Create our connection to the Hedera network
      // The Hedera JS SDK makes this really easy!
      const _client = Client.forTestnet()
      _client.setOperator(myAccountId, myPrivateKey)

      setClient(_client)

      //Create new keys
      const newAccountPrivateKey = await PrivateKey.generateED25519()
      const newAccountPublicKey = newAccountPrivateKey.publicKey

      //Create a new account with 1,000 tinybar starting balance
      const newAccount = await new AccountCreateTransaction()
        .setKey(newAccountPublicKey)
        .setInitialBalance(Hbar.fromTinybars(1000))
        .execute(_client)

      // Get the new account ID
      const getReceipt = await newAccount.getReceipt(_client)
      const newAccountId = getReceipt.accountId
      setmAccount(newAccountId)

      //Log the account ID
      console.log('The new account ID is: ' + newAccountId)
    } catch (error) {
      console.error(error)
    }
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {' '}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
      </Stack.Navigator>
     
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
