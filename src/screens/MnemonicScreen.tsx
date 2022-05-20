import { StatusBar } from 'expo-status-bar'
import { Formik, Form, useField } from 'formik'
import React from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {
  SafeAreaView,
  withSafeAreaInsets,
} from 'react-native-safe-area-context'
import * as Yup from 'yup'
import MnemonicInput, {
  initialValues,
} from '../components/mnemonicScreen/mnemonicInput'

const mnemonicValidationSchema = Yup.object({
  mnemonic: Yup.string()
    .max(10, 'Uhm...what are you doing?')
    .required('Required'),
})

const MnemonicScreen = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar style="light" />

    <Formik
      initialValues={initialValues}
      validationSchema={mnemonicValidationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <View style={styles.container}>
          <View style={styles.mnemonicInputContainer}>
            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={1}
                _onChangeText={handleChange('mnemonic1')}
                _onBlur={handleBlur('mnemonic1')}
                _value={values.mnemonic1}
              />

              <MnemonicInput
                mnemonicId={2}
                _onChangeText={handleChange('mnemonic2')}
                _onBlur={handleBlur('mnemonic2')}
                _value={values.mnemonic2}
              />
            </View>

            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={3}
                _onChangeText={handleChange('mnemonic3')}
                _onBlur={handleBlur('mnemonic3')}
                _value={values.mnemonic3}
              />
              <MnemonicInput
                mnemonicId={4}
                _onChangeText={handleChange('mnemonic4')}
                _onBlur={handleBlur('mnemonic4')}
                _value={values.mnemonic4}
              />
            </View>
            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={5}
                _onChangeText={handleChange('mnemonic5')}
                _onBlur={handleBlur('mnemonic5')}
                _value={values.mnemonic5}
              />

              <MnemonicInput
                mnemonicId={6}
                _onChangeText={handleChange('mnemonic6')}
                _onBlur={handleBlur('mnemonic6')}
                _value={values.mnemonic6}
              />
            </View>

            {/* /////////////////// */}

            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={7}
                _onChangeText={handleChange('mnemonic7')}
                _onBlur={handleBlur('mnemonic7')}
                _value={values.mnemonic7}
              />

              <MnemonicInput
                mnemonicId={8}
                _onChangeText={handleChange('mnemonic8')}
                _onBlur={handleBlur('mnemonic8')}
                _value={values.mnemonic8}
              />
            </View>

            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={9}
                _onChangeText={handleChange('mnemonic9')}
                _onBlur={handleBlur('mnemonic9')}
                _value={values.mnemonic9}
              />

              <MnemonicInput
                mnemonicId={10}
                _onChangeText={handleChange('mnemonic10')}
                _onBlur={handleBlur('mnemonic10')}
                _value={values.mnemonic10}
              />
            </View>

            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={11}
                _onChangeText={handleChange('mnemonic11')}
                _onBlur={handleBlur('mnemonic11')}
                _value={values.mnemonic11}
              />

              <MnemonicInput
                mnemonicId={12}
                _onChangeText={handleChange('mnemonic12')}
                _onBlur={handleBlur('mnemonic12')}
                _value={values.mnemonic12}
              />
            </View>

            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={13}
                _onChangeText={handleChange('mnemonic13')}
                _onBlur={handleBlur('mnemonic13')}
                _value={values.mnemonic13}
              />

              <MnemonicInput
                mnemonicId={14}
                _onChangeText={handleChange('mnemonic14')}
                _onBlur={handleBlur('mnemonic14')}
                _value={values.mnemonic14}
              />
            </View>

            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={15}
                _onChangeText={handleChange('mnemonic15')}
                _onBlur={handleBlur('mnemonic15')}
                _value={values.mnemonic15}
              />

              <MnemonicInput
                mnemonicId={16}
                _onChangeText={handleChange('mnemonic16')}
                _onBlur={handleBlur('mnemonic16')}
                _value={values.mnemonic16}
              />
            </View>

            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={17}
                _onChangeText={handleChange('mnemonic17')}
                _onBlur={handleBlur('mnemonic17')}
                _value={values.mnemonic17}
              />

              <MnemonicInput
                mnemonicId={18}
                _onChangeText={handleChange('mnemonic18')}
                _onBlur={handleBlur('mnemonic18')}
                _value={values.mnemonic18}
              />
            </View>

            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={19}
                _onChangeText={handleChange('mnemonic19')}
                _onBlur={handleBlur('mnemonic19')}
                _value={values.mnemonic19}
              />

              <MnemonicInput
                mnemonicId={20}
                _onChangeText={handleChange('mnemonic20')}
                _onBlur={handleBlur('mnemonic20')}
                _value={values.mnemonic20}
              />
            </View>

            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={21}
                _onChangeText={handleChange('mnemonic21')}
                _onBlur={handleBlur('mnemonic21')}
                _value={values.mnemonic21}
              />

              <MnemonicInput
                mnemonicId={22}
                _onChangeText={handleChange('mnemonic22')}
                _onBlur={handleBlur('mnemonic22')}
                _value={values.mnemonic22}
              />
            </View>

            <View style={styles.inputRows}>
              <MnemonicInput
                mnemonicId={23}
                _onChangeText={handleChange('mnemonic23')}
                _onBlur={handleBlur('mnemonic23')}
                _value={values.mnemonic23}
              />

              <MnemonicInput
                mnemonicId={24}
                _onChangeText={handleChange('mnemonic24')}
                _onBlur={handleBlur('mnemonic24')}
                _value={values.mnemonic24}
              />
            </View>

          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => handleSubmit}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  </SafeAreaView>
)

export default MnemonicScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
    // backgroundColor: 'rgb(31,41,55)',
    backgroundColor: 'rgb(17,24,39)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mnemonicInputContainer: {
    flex: 1,
    // backgroundColor: 'orange',
  },
  submitButton: {
    marginTop: 32,
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'rgb(107,114,128)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
  },
})
