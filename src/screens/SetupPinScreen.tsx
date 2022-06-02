import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLogo, { Tagline } from '../components/appLogo/appLogo'
import { color } from '../components/colors'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { commonStyles } from '../styles/commonStyles'

const SetupPinScreen = () => {
  const pinRef = useRef(null)
  const confirmPinRef = useRef(null)

  const initialValues = {
    pin: '',
    confirmPin: '',
  }

  const passwordSchema = Yup.object().shape({
    pin: Yup.string()
      .required('Required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(6, 'Must be 6 digit')
      .max(6, 'Must be 6 digit')
      .typeError('Invalid Pin'),
    confirmPin: Yup.string()
      .required('Required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .oneOf([Yup.ref('pin')], 'PIN do not match')
      .typeError('PIN do not match'),
  })

  // const focusChange = (e) => {
  //   if (e.target.value.length >= e.target.getAttribute('maxlength')) {
  //     e.target.nextElementSibling.focus()
  //   }
  // }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.marginView}></View>

      <AppLogo />
      <Tagline />

      <KeyboardAvoidingView>
        {/* two input goes here -- */}
        {/* / / / Formik / / / */}
        <Formik
          initialValues={initialValues}
          validationSchema={passwordSchema}
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
            <View style={{ marginTop: 128, width: 320 }}>
              <View>
                <Text style={{ color: 'rgba(255,255,255, 0.9)', fontSize: 16 }}>
                  Setup your PIN
                </Text>
                {/*  */}
                <View
                  style={[
                    { width: '100%', marginTop: 8 },
                    commonStyles.alignJustifyCenter,
                  ]}
                >
                  <Text
                    style={{ fontSize: 16, color: 'rgba(255,255,255, 0.5)' }}
                  >
                    Your PIN is only stored on this device for security purposes
                    & cannot be recovered
                  </Text>
                </View>
                {/*  */}
              </View>

              <View>
                <Text
                  style={{
                    marginTop: 32,
                    fontSize: 16,
                    color: 'rgba(255,255,255, 0.75)',
                  }}
                >
                  Please enter a six digit PIN
                </Text>
              </View>

              <View style={styles.textInputs}>
                <TextInput
                  ref={pinRef}
                  style={[
                    styles.inputBox,
                    touched.pin && errors.pin
                      ? commonStyles.borderInvalid
                      : commonStyles.borderNeutral,
                  ]}
                  placeholderTextColor="gray"
                  placeholder="Enter PIN"
                  onChangeText={handleChange('pin')}
                  onBlur={handleBlur('pin')}
                  value={values.pin}
                  keyboardType="numeric"
                  secureTextEntry={true}
                  numberOfLines={1}
                  maxLength={6}
                  returnKeyType='next'
                  onSubmitEditing={() => {
                    confirmPinRef.current.focus();
                  }}
                />
                {touched.pin && errors.pin && (
                  <View style={{ width: 320 }}>
                    <Text style={commonStyles.errorText}>{errors.pin}</Text>
                  </View>
                )}

                <TextInput
                  ref={confirmPinRef}
                  style={[
                    styles.inputBox,
                    touched.confirmPin && errors.confirmPin
                      ? commonStyles.borderInvalid
                      : commonStyles.borderNeutral,
                  ]}
                  placeholderTextColor="gray"
                  placeholder="Re-enter PIN"
                  onChangeText={handleChange('confirmPin')}
                  onBlur={handleBlur('confirmPin')}
                  value={values.confirmPin}
                  keyboardType="numeric"
                  secureTextEntry={true}
                  numberOfLines={1}
                  maxLength={6}
                  returnKeyType='done'
                  onSubmitEditing={() => {
                    if( values.pin !== '' && values.confirmPin !== '' && isValid){
                      handleSubmit()
                    }

                  }}
                />
                {touched.confirmPin && errors.confirmPin && (
                  <View style={{ width: 320 }}>
                    <Text style={commonStyles.errorText}>
                      {errors.confirmPin}
                    </Text>
                  </View>
                )}

                <TouchableOpacity
                  disabled={
                    values.pin == '' || values.confirmPin == '' || !isValid
                  }
                  onPress={() => handleSubmit()}
                >
                  <View
                    style={[
                      styles.submitbutton,
                      touched.pin && touched.confirmPin && isValid
                        ? styles.submitbutton
                        : styles.disabledButton,
                    ]}
                  >
                    <Text style={styles.submitButtonText}>Confirm Pin</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
        {/* / / / Formik - Ends / / / */}
      </KeyboardAvoidingView>
    </View>
  )
}

export default SetupPinScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryDarkGray,
    alignItems: 'center',
  },
  marginView: {
    height: '20%',
  },
  textInputContainer: {
    marginTop: 164,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputs: {
    marginTop: 16,
    // backgroundColor: 'yellow',
    width: '100%',
    alignItems: 'center',
  },
  inputBox: {
    fontSize: 16,
    backgroundColor: 'rgb(31, 41, 55)',
    color: 'rgb(156, 163, 175)',
    padding: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 8,
    width: 320,
    textAlign: 'center',
    // marginTop: 4
  },

  submitbutton: {

    fontSize: 16,
    borderColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 16,
    width: 319,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: 'lightgray',
  },
  disabledButton: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
  },
})
