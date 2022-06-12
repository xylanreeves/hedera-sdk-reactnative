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
import { commonStyles } from '../../../styles/commonStyles'
import { color } from '../../../components/colors'
import { Formik } from 'formik'
import * as Yup from 'yup'

const EnterAccountIdScreen = ({ navigation }) => {
  const initialValues = {
    accountId: '',
  }

  const validationSchema = Yup.object().shape({
    accountId: Yup.string()
      .required('Please enter a valid Account ID')
      .matches(/^0\.0\.[0-9]+$/, 'Invalid Account ID')
      .min(5, "Please enter a valid Account ID")
      .typeError('Invalid Account ID'),
  })

  const onSubmission = () => {
    //verify Account Id
    //move to mnemonic screen
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.primaryDarkGray }}>
      <View style={commonStyles.headerView}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'rgba(255,255,255, 0.9)',
            }}
          >
            Import Account
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
              You need both your Hedera account ID and seed phrase to import an
              existing account.
            </Text>
          </View>
        </View>
      </View>

      {/* Content Body */}
      <View style={{ flex: 1 }}>
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
            <KeyboardAvoidingView
              style={{ flex: 1, justifyContent: 'space-between' }}
            >
              <View style={{ padding: 32, marginTop: 64 }}>
                {/* Enter your Hedera Account ID */}
                <View>
                  <Text style={{ color: color.whiteOp9, fontSize: 16 }}>
                    Enter your Hedera Account ID
                  </Text>
                  <Text style={{ color: color.lightGray }}>
                    Example Format: 0.0.12345
                  </Text>

                  <TextInput
                    style={[
                      styles.inputBox,
                      touched.accountId && errors.accountId
                        ? commonStyles.borderInvalid
                        : commonStyles.borderNeutral,
                    ]}
                    placeholder="0.0.xxxx"
                    placeholderTextColor={color.lightGray}
                    onChangeText={handleChange('accountId')}
                    onBlur={handleBlur('accountId')}
                    value={values.accountId}
                    keyboardType="numeric"
                  />
                  {touched.accountId && errors.accountId && (
                    <View style={{ width: 240 }}>
                      <Text style={commonStyles.errorText}>
                        {errors.accountId}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
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
                  borderTopColor: color.lightGrayBorder,
                }}
              >
                {/* Back Button */}
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => navigation.goBack()}
                >
                  <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                {/* transparent width between buttons */}
                <View style={{ width: 16 }}></View>
                {/* Submit Button  */}
                {/* This will take the user to EnterMnemonic Screen */}
                <TouchableOpacity
                  style={[
                    styles.buttons,
                    {
                      backgroundColor: 'rgb(107,114,128)',
                      opacity: values.accountId !== "" && isValid ? 1 : 0.33,
                    },
                  ]}
                  onPress={() => handleSubmit()}
                  disabled={values.accountId == '' || !isValid}
                >
                  <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
                {/*  */}
              </View>
            </KeyboardAvoidingView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  )
}

export default EnterAccountIdScreen

const styles = StyleSheet.create({
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
  backButtonText: {
    color: 'lightgray',
    fontWeight: 'bold',
  },
  nextButtonText: { color: color.primaryDarkGray, fontWeight: 'bold' },
})
