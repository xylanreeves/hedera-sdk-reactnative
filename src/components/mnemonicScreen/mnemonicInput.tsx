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

const MnemonicInput = ({
  mnemonicId,
  _onChangeText,
  _onBlur,
  _value,
  _errors,
  _touched,
}) => {
  return (
    <>
      <View style={styles.mainContainer}>


        <View style={styles.mnemonicIdContainer}>
          <Text style={styles.mnemonicId}>{mnemonicId}</Text>
        </View>

        <TextInput
          style={[
            styles.inputBox,
            _touched && _errors ? styles.textInvalid : styles.textValid,
          ]}
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
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // backgroundColor: 'green',
    marginVertical: 4,
  },
  inputBox: {
    fontSize: 16,
    backgroundColor: 'rgb(31, 41, 55)',
    color: 'rgb(156, 163, 175)',
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    width: 150,
    marginLeft: 8,
  },
  textValid: {
    borderColor: 'rgba(107,114,128, 0.6)',
  },
  textInvalid: {
    //darkRedBorder
    borderColor: '#7f1d1d',
  },
  mnemonicIdContainer: {
    backgroundColor: 'rgb(31, 41, 55)',
    borderRadius: 100,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mnemonicId: {
    color: 'rgb(156,163,175)',
    // backgroundColor: 'rgb(31, 41, 55)',
    // borderRadius: 100,
    padding: 4,
  },
})
