import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { customFonts } from '../fonts'
import { commonStyles } from '../../styles/commonStyles'
import { color } from '../colors'

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
      <View style={styles.outerView}>
        <View style={styles.mainContainer}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.mnemonicIdContainer}>
              <Text style={styles.mnemonicId}>{mnemonicId}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'column', marginLeft: 8 }}>
            <TextInput
              style={[
                styles.inputBox,
                _touched && _errors
                  ? commonStyles.borderInvalid
                  : styles.textValid,
              ]}
              placeholderTextColor="grey"
              onChangeText={_onChangeText}
              onBlur={_onBlur}
              value={_value}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 22 }}></View>
          {/* error message */}
          <View style={styles.errorContainer}>
            {true && true && <Text style={styles.errorText}>Required</Text>}
          </View>
        </View>
      </View>
    </>
  )
}

export default MnemonicInput

const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'column',
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // backgroundColor: 'green',
    marginTop: 4,
  },
  inputBox: {
    fontSize: 16,
    backgroundColor: 'rgb(31, 41, 55)',
    color: 'rgb(156, 163, 175)',
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: color.lightGrayBorder,
    width: 164,
    // marginBottom: 8
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
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mnemonicId: {
    color: 'rgb(156,163,175)',
    // backgroundColor: 'rgb(31, 41, 55)',
    // borderRadius: 100,
    // padding: 4,
    fontSize: 12,
    fontFamily: customFonts.Varela,
  },
  errorContainer: {
    marginLeft: 10,
    height: 20,
  },
  errorText: {
    // color: 'rgb(156,163,175)',
    color: 'rgb(248, 113, 113)',
    // color: 'rgb(239, 68, 68)',
  },
})
