//ReactNavigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//Screens
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import MnemonicScreen from '../screens/MnemonicScreen'
import SettingScreen from '../screens/SettingScreen'
import WelcomeScreen from '../screens/WelcomeScreen'

const Stack = createNativeStackNavigator()

const commonOptions = {
  headerShown: false,
}

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={commonOptions}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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
    </Stack.Navigator>
  )
}

export default RootNavigator
