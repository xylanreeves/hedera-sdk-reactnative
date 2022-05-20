import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'



export const initialValues = {
    mnemonic1: '',
    mnemonic2: '',
    mnemonic3: '',
    mnemonic4: '',
    mnemonic5: '',
    mnemonic6: '',
    mnemonic7: '',
    mnemonic8: '',
    mnemonic9: '',
    mnemonic10: '',
    mnemonic11: '',
    mnemonic12: '',
    mnemonic13: '',
    mnemonic14: '',
    mnemonic15: '',
    mnemonic16: '',
    mnemonic17: '',
    mnemonic18: '',
    mnemonic19: '',
    mnemonic20: '',
    mnemonic21: '',
    mnemonic22: '',
    mnemonic23: '',
    mnemonic24: '',
  }
  


const MnemonicInput = ({ mnemonicId, _onChangeText, _onBlur, _value }) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'green',
            width: '150', 
            
          }}
        >

          <View
            style={{
              backgroundColor: 'rgb(31, 41, 55)',
              borderRadius: 100,
            }}
          >

            <Text style={{ color: 'rgb(156,163,175)', padding: 4 }}>
              {mnemonicId}
            </Text>

          </View>

          <TextInput
            style={{
              backgroundColor: 'rgb(31, 41, 55)',
              color: 'rgb(156, 163, 175)',
              padding: 8,
              borderWidth: 1,
              borderRadius: 8,
              borderColor: 'rgba(107,114,128, 0.6)',
              width: 120,
              marginLeft: 8,
            }}
            placeholderTextColor="grey"
            onChangeText={_onChangeText}
            onBlur={_onBlur}
            value={_value}
          />

        </View>
      </>
    )
  }

export default MnemonicInput

const styles = StyleSheet.create({

    
})