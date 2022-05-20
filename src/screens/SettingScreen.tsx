import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const SettingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SettingScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
})