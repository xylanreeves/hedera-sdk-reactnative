//ReactNavigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//Screens
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import MnemonicScreen from '../screens/MnemonicScreen'
import SettingScreen from '../screens/SettingScreen'

const Stack = createNativeStackNavigator()

const commonOptions = {
  headerShown: false,
}

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Mnemonic">
      <Stack.Screen name="Home" component={HomeScreen} />
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
    </Stack.Navigator>
  )
}

export default RootNavigator
