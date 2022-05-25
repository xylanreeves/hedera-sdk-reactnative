import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { color } from '../components/colors'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { Formik } from 'formik'
import * as Yup from 'yup'

let customFonts = {
  'VarelaRound-Regular': require('../../assets/fonts/VarelaRound-Regular.ttf'),
}

const WelcomeScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts)
    setFontsLoaded(true)
  }

  useEffect(() => {
    _loadFontsAsync()
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const _initialValues = {
    accountId: '',
    privateKey: '',
  }

  const hederaClientValidationSchema = Yup.object().shape({
    accountId: Yup.string().required('Required').typeError('Invalid Account Id'),
    privateKey: Yup.string().required('Required').typeError('Invalid Private Key'),
  })

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.marginView}></View>
      <Text style={styles.titleFont}>Shao</Text>
      <Text style={styles.subTitleFont}>Wallet</Text>

      <View style={styles.textInputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelFont}>
            You can use your developer's testnet Account Id and Private Key
          </Text>
          <Text style={styles.labelFont}>
            Or proceed with the app's default keys
          </Text>
        </View>
        {/* / / / Formik / / / */}
        <KeyboardAvoidingView>
          <Formik
            initialValues={_initialValues}
            validationSchema={hederaClientValidationSchema}
            onSubmit={(values) => console.error(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              dirty,
            }) => (
              <View style={styles.textInputs}>
                <TextInput
                  style={[
                    styles.inputBox,
                    touched.accountId && errors.accountId && styles.borderInvalid,
                  ]}
                  placeholderTextColor="grey"
                  placeholder="Account Id"
                  onChangeText={handleChange('accountId')}
                  onBlur={handleBlur('accountId')}
                  value={values.accountId}
                />
                {touched.accountId && errors.accountId && (
                  <View style={{width: 240}}>
                    <Text style={styles.errorText}>{errors.accountId}</Text>
                  </View>
                )}
                <TextInput
                  style={[
                    styles.inputBox,
                    touched.privateKey &&
                      errors.privateKey &&
                      styles.borderInvalid,
                  ]}
                  placeholderTextColor="grey"
                  placeholder="Private Key"
                  onChangeText={handleChange('privateKey')}
                  onBlur={handleBlur('privateKey')}
                  value={values.privateKey}
                />
                {touched.privateKey && errors.privateKey && (
                  <View style={{width: 240}}>
                    <Text style={styles.errorText}>{errors.privateKey}</Text>
                  </View>
                )}
                <TouchableOpacity disabled={values.accountId == "" || values.privateKey == "" || !isValid}>
                  <View
                    style={[
                      styles.submitbutton,
                      touched.accountId && touched.privateKey && isValid ? '' : styles.disabledButton,
                    ]}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.submitButtonText}>Submit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
        {/* / / / / / / */}
      </View>

      <View style={styles.breakLine}></View>

      <View></View>
      <TouchableOpacity style={styles.defaultButton}>
        <Text style={styles.submitButtonText}>Proceed with Default Keys</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryDarkGray,
    alignItems: 'center',
  },
  titleFont: {
    fontSize: 42,
    color: 'white',
    fontFamily: 'VarelaRound-Regular',
    marginRight: 32,
  },
  subTitleFont: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'VarelaRound-Regular',
    marginLeft: 32,
    marginTop: -8,
  },
  marginView: {
    height: '25%',
  },
  textInputContainer: {
    marginTop: 164,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    fontSize: 16,
    backgroundColor: 'rgb(31, 41, 55)',
    color: 'rgb(156, 163, 175)',
    padding: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    width: 240,
  },
  labelContainer: {},
  labelFont: {
    color: 'gray',
  },
  textInputs: {
    marginTop: 16,
    // backgroundColor: 'yellow',
    width: '100%',
    alignItems: 'center',
  },
  submitbutton: {
    fontSize: 16,
    borderColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    width: 240,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: 'lightgray',
  },
  breakLine: {
    borderBottomColor: 'rgba(255,255,255,0.16)',
    borderWidth: 1,
    marginTop: 32,
    width: 120,
  },
  defaultButton: {
    fontSize: 16,
    backgroundColor: 'rgba(255,255,255,0.16)',
    padding: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    width: 240,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultButtonText: {},
  borderInvalid: {
    //darkRedBorder
    // borderColor: '#7f1d1d',
    borderColor: 'rgb(248, 113, 113)',
    // borderColor: 'rgb(239, 68, 68)'
  },
  errorText: {
    color: 'rgb(248, 113, 113)',
    // color: 'rgb(239, 68, 68)',
    marginHorizontal: 4,
    marginBottom: 4,
  },
  disabledButton: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
  },
})
