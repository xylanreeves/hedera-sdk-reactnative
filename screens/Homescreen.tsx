import React from "react"
import { View, Text, StatusBar } from 'react-native'

const Homescreen = () => {



    return(
        <View style={styles.container}>
        <Text>You new Account Id:</Text>
        {mAccount && <Text>{mAccount.toString()}</Text>}
        <StatusBar style="auto" />
      </View>
    )
}

export default Homescreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  