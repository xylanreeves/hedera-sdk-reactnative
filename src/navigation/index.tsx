//ReactNavigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getValueFromSecureStore } from '../app/expoSecureStore'
//Redux
import { RootState } from '../app/store'
import { setHederaClient } from '../features/hedera/hederaSlice'
import { setIsSignedIn } from '../features/login/loginSlice'
//Screens
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import MnemonicScreen from '../screens/ImportWalletScreens/ImportUsingMnemonic.tsx/MnemonicScreen'
import NewWalletScreen from '../screens/ImportWalletScreens/NewWalletScreen'
import SettingScreen from '../screens/SettingScreen'
import SetupPinScreen from '../screens/SetupPinScreen'
import WelcomeScreen from '../screens/ImportWalletScreens/ImportWalletScreenTwo'
import ImportWalletScreen from '../screens/ImportWalletScreens/ImportWalletScreen'
import ImportUsingPrvKeyScreen from '../screens/ImportWalletScreens/ImportUsingPrvKeyScreen'
import ImportWalletScreenTwo from '../screens/ImportWalletScreens/ImportWalletScreenTwo'
import EnterAccountIdScreen from '../screens/ImportWalletScreens/ImportUsingMnemonic.tsx/EnterAccountIdScreen'
//Fonts
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
const Stack = createNativeStackNavigator()

const commonOptions = {
  headerShown: false,
}

let customFonts = {
  'VarelaRound-Regular': require('../../assets/fonts/VarelaRound-Regular.ttf'),
}

const RootNavigator = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts)
    setFontsLoaded(true)
  }

  useEffect(() => {
    _loadFontsAsync()
  })

  const dispatch = useDispatch()

  const isSignedIn = useSelector((state: RootState) => state.login.isSignedIn)

  // const getHederaClient = async () => {
  //   const hederaClient = await getValueFromSecureStore('hederaTestnetClient')
  //   if (hederaClient) {
  //     dispatch(setHederaClient(hederaClient))
  //     dispatch(setIsSignedIn(true))
  //   }
  // }

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Stack.Navigator initialRouteName="Mnemonic">
      {isSignedIn ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={commonOptions}
          />
        </>
      ) : (
        <>
          {/* Setup PIN to lock/unlock the app */}
          <Stack.Screen
            name="SetupPin"
            component={SetupPinScreen}
            options={commonOptions}
          />

          {/* Create or import wallet */}
          <Stack.Screen
            name="NewWallet"
            component={NewWalletScreen}
            options={commonOptions}
          />

          {/* Choose privateKey or mnemonic to import your account */}
          <Stack.Screen
            name="ImportWallet"
            component={ImportWalletScreen}
            options={commonOptions}
          />

          {/* I created two Import wallet screens lol
              might use second somewhere
          */}
          <Stack.Screen
            name="ImportWalletTwo"
            component={ImportWalletScreenTwo}
            options={commonOptions}
          />

          {/* Import using Private Keys */}
          <Stack.Screen
            name="ImportPrv"
            component={ImportUsingPrvKeyScreen}
            options={commonOptions}
          />

          <Stack.Screen
            name="EnterAccountId"
            component={EnterAccountIdScreen}
            options={commonOptions}
          />

          <Stack.Screen
            name="Mnemonic"
            component={MnemonicScreen}
            options={commonOptions}
          />

          {/* Login Screen to unlock the wallet via user's pin/password */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={commonOptions}
          />

          <Stack.Screen name="Settings" component={SettingScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default RootNavigator
