import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLogo, { Tagline } from '../components/appLogo/appLogo'
import { color } from '../components/colors'
import { Formik } from 'formik'
import * as Yup from 'yup'

const SetupPinScreen = () => {
  const initialValues = {
    pin: '',
    confirmPin: '',
  }

  const passwordSchema = Yup.object().shape({
    pin: Yup.number().required('Required').typeError('Invalid Pin'),
    confirmPin: Yup.number()
      .required('Required')
      .typeError('Password do not match'),
  })

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.marginView}></View>

      <AppLogo />
      <Tagline />

      <View>
        {/* two input goes here -- */}

        <Formik
          initialValues={initialValues}
          validationSchema={}
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
          }) => <View>
              

              {/* <TextInput>Enter 6 digit Pin</TextInput> */}
{/* Error.pin */}

              {/* <TextInput>Confirm Pin</TextInput> */}
              {/* Error confirm Pin */}



              </View>}
        </Formik>
      </View>
    </KeyboardAvoidingView>
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
    height: '25%',
  },
})
