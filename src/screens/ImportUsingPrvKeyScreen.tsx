import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { color } from '../components/colors'
import { commonStyles } from '../styles/commonStyles'
import { Formik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'

const ImportUsingPrvKeyScreen = ({ navigation }) => {
  const initialValues = {
    accountId: '',
    privateKey: '',
  }

  const validationSchema = Yup.object().shape({
    accountId: Yup.string()
      .required('Please enter a valid Account ID')
      .typeError('Invalid Account ID'),
    privateKey: Yup.string()
      .required('Please enter a valid private key')
      .typeError('Invalid private key'),
  })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.primaryDarkGray }}>
      {/* Top Header */}
      <View style={styles.headerView}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'rgba(255,255,255, 0.9)',
            }}
          >
            Import Using Private Key
          </Text>
          <View
            style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 4 }}
          >
            <Text
              style={{
                fontSize: 16,
                color: color.whiteOp7,
              }}
            >
              You need both your Hedera account ID and private key to import an
              existing account
            </Text>
          </View>
        </View>
      </View>
      {/* Content Body */}
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
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
            <KeyboardAvoidingView>
              <View style={{ padding: 32, marginTop: 64 }}>
                {/* Enter your Hedera Account ID */}
                <View>
                  <Text style={{ color: color.whiteOp9, fontSize: 16 }}>
                    Enter your Hedera Account ID
                  </Text>
                  <Text style={{ color: color.lightGray }}>
                    Example Format: 0.0.12345
                  </Text>
                  {/*
          
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
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        confirmPinRef.current.focus()
                      }}
                    />
                    {touched.pin && errors.pin && (
                      <View style={{ width: 320 }}>
                        <Text style={commonStyles.errorText}>{errors.pin}</Text>
                      </View>
                    )}
                     */}
                  <TextInput
                    style={styles.inputBox}
                    placeholder="0.0.xxxx"
                    placeholderTextColor={color.lightGray}
                    onChangeText={handleChange('accountId')}
                    onBlur={handleBlur('accountId')}
                    value={values.accountId}
                    keyboardType="numeric"
                  />
                </View>
                {/* Enter your Private Key */}
                <View style={{ marginTop: 32 }}>
                  <Text style={{ color: color.whiteOp9, fontSize: 16 }}>
                    Enter your Private Key
                  </Text>
                  <Text style={{ color: color.lightGray }}>
                    Keep this secret!
                  </Text>
                  <TextInput
                    style={styles.inputBox}
                    placeholder=""
                    placeholderTextColor={color.lightGray}
                    onChangeText={handleChange('privateKey')}
                    onBlur={handleBlur('privateKey')}
                    value={values.privateKey}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          )}
        </Formik>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '16%',
            backgroundColor: color.transparentOverlay,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 16,
            borderTopWidth: 0.2,
            borderTopColor: color.lightGrayBorder
          }}
        >
          {/* Back Button */}
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.pop('ImportPrv')}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <View style={{ width: 16 }}></View>

          {/* Submit Button  */}

          <TouchableOpacity
            style={[
              styles.buttons,
              { backgroundColor: 'rgba(255,255,255,0.05)' },
            ]}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>

          {/*  */}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ImportUsingPrvKeyScreen

const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    backgroundColor: color.transparentOverlay,
    height: '32%',
    padding: 16,
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: color.lightGrayBorder
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
    marginTop: 4,
    marginLeft: -2,
  },
  buttons: {
    fontSize: 16,
    borderColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    // width: 319,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 32,
  },
  buttonText: {
    color: 'lightgray',
    fontWeight: 'bold',
  },
})
