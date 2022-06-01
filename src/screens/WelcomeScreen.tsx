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
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AccountId, Client, PrivateKey } from '@hashgraph/sdk'
import { useDispatch } from 'react-redux'
import { setHederaClient } from '../features/hedera/hederaSlice'
import { setIsSignedIn } from '../features/login/loginSlice'
import { saveInSecureStore } from '../app/expoSecureStore'
import AppLogo from '../components/appLogo/appLogo'


const WelcomeScreen = () => {

  // const userAccountId = useSelector(
  //   (state: RootState) => state.user.userAccountId,
  // )
  const dispatch = useDispatch()

 

 

  const customClientLogin = (values: {
    accountId: string
    privateKey: string
  }) => {
    // console.error(values)

    //init client with user's testnet credentials
    //navigate to homescreen with user info
    //set isSignedIn to true, reactNavigation will handle the navigation to homescreen.

    //save user's credentials to expo-secure

    try {
      var client = Client.forTestnet()
      client.setOperator(
        AccountId.fromString(values.accountId),
        PrivateKey.fromString(values.privateKey),
      )
      console.error('client: ', client)
      dispatch(setHederaClient(client))
      //save and persist client in expo-secure-store
      saveInSecureStore('hederaTestnetClient', client)

      if (client) {
        //this will automatically naviagate to homescreen
        dispatch(setIsSignedIn(true))
      }
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  const _initialValues = {
    accountId: '',
    privateKey: '',
  }

  const hederaClientValidationSchema = Yup.object().shape({
    accountId: Yup.string()
      .required('Required')
      .typeError('Invalid Account Id'),
    privateKey: Yup.string()
      .required('Required')
      .typeError('Invalid Private Key'),
  })

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.marginView}></View>

      <AppLogo />
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
            onSubmit={(values) => customClientLogin(values)}
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
                    touched.accountId && errors.accountId
                      ? styles.borderInvalid
                      : styles.borderNeutral,
                  ]}
                  placeholderTextColor="grey"
                  placeholder="Account Id"
                  onChangeText={handleChange('accountId')}
                  onBlur={handleBlur('accountId')}
                  value={values.accountId}
                />
                {touched.accountId && errors.accountId && (
                  <View style={{ width: 240 }}>
                    <Text style={styles.errorText}>{errors.accountId}</Text>
                  </View>
                )}
                <TextInput
                  style={[
                    styles.inputBox,
                    touched.privateKey && errors.privateKey
                      ? styles.borderInvalid
                      : styles.borderNeutral,
                  ]}
                  placeholderTextColor="grey"
                  placeholder="Private Key"
                  onChangeText={handleChange('privateKey')}
                  onBlur={handleBlur('privateKey')}
                  value={values.privateKey}
                />
                {touched.privateKey && errors.privateKey && (
                  <View style={{ width: 240 }}>
                    <Text style={styles.errorText}>{errors.privateKey}</Text>
                  </View>
                )}
                {/* This would lead the user to Homescreen */}
                <TouchableOpacity
                  disabled={
                    values.accountId == '' ||
                    values.privateKey == '' ||
                    !isValid
                  }
                  onPress={() => handleSubmit()}
                >
                  <View
                    style={[
                      styles.submitbutton,
                      touched.accountId && touched.privateKey && isValid
                        ? styles.submitbutton
                        : styles.disabledButton,
                    ]}
                  >
                    <Text style={styles.submitButtonText}>Submit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
        {/* / / / Formik Ends / / / */}
      </View>

      <View style={styles.breakLine}></View>

      {/* This would lead the user to the login screen */}
      <TouchableOpacity
        style={styles.defaultButton}
        onPress={() => alert('TODO: Should navigate to mnemonic login screen')}
      >
        <Text style={styles.submitButtonText}>Login with Mnemonic Phrase</Text>
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
    // marginTop: 4
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
  borderNeutral: {
    borderColor: 'transparent',
    // borderColor: 'rgba(255,255,255,0.2)',
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
  noStyle: {},
})
