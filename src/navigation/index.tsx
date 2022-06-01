//ReactNavigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useDispatch, useSelector } from 'react-redux'
import { getValueFromSecureStore } from '../app/expoSecureStore'
//Redux
import { RootState } from '../app/store'
import { setHederaClient } from '../features/hedera/hederaSlice'
import { setIsSignedIn } from '../features/login/loginSlice'
//Screens
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import MnemonicScreen from '../screens/MnemonicScreen'
import SettingScreen from '../screens/SettingScreen'
import SetupPinScreen from '../screens/SetupPinScreen'
import WelcomeScreen from '../screens/WelcomeScreen'

const Stack = createNativeStackNavigator()

const commonOptions = {
  headerShown: false,
}

const RootNavigator = () => {
  const dispatch = useDispatch()

  const isSignedIn = useSelector((state: RootState) => state.login.isSignedIn)

  // const getHederaClient = async () => {
  //   const hederaClient = await getValueFromSecureStore('hederaTestnetClient')
  //   if (hederaClient) {
  //     dispatch(setHederaClient(hederaClient))
  //     dispatch(setIsSignedIn(true))
  //   }
  // }

  return (
    <Stack.Navigator initialRouteName="SetupPin">
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
          <Stack.Screen
            name="SetupPin"
            component={SetupPinScreen}
            options={commonOptions}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={commonOptions}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={commonOptions}
          />
          <Stack.Screen
            name="Mnemonic"
            component={MnemonicScreen}
            options={commonOptions}
          />
          <Stack.Screen name="Settings" component={SettingScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default RootNavigator
