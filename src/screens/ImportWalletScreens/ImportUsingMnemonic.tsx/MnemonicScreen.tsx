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
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'

import * as Yup from 'yup'
import MnemonicInput, {
  initialValues,
} from '../../../components/mnemonicScreen/mnemonicInput'

const mnemonicValidationSchema = Yup.object().shape({
  mnemonic: Yup.number()
    .max(10, 'Uhm...what are you doing?')
    .required('Required'),
})

const MnemonicScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView >
      <View style={{alignItems: 'center'}}>
      <StatusBar style="light" />
      <KeyboardAvoidingView>
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
            touched,
          }) => (
            <>
              <View style={styles.mnemonicInputContainer}>
                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={1}
                    _onChangeText={handleChange('mnemonic1')}
                    _onBlur={handleBlur('mnemonic1')}
                    _value={values.mnemonic1}
                    _errors={errors.mnemonic1}
                    _touched={touched.mnemonic1}
                  />
                  <View style={styles.blankWidth}></View>

                  <MnemonicInput
                    mnemonicId={2}
                    _onChangeText={handleChange('mnemonic2')}
                    _onBlur={handleBlur('mnemonic2')}
                    _value={values.mnemonic2}
                    _errors={errors.mnemonic2}
                    _touched={touched.mnemonic2}
                  />
                </View>

                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={3}
                    _onChangeText={handleChange('mnemonic3')}
                    _onBlur={handleBlur('mnemonic3')}
                    _value={values.mnemonic3}
                    _errors={errors.mnemonic3}
                    _touched={touched.mnemonic3}
                  />
                  <View style={styles.blankWidth}></View>
                  <MnemonicInput
                    mnemonicId={4}
                    _onChangeText={handleChange('mnemonic4')}
                    _onBlur={handleBlur('mnemonic4')}
                    _value={values.mnemonic4}
                    _errors={errors.mnemonic4}
                    _touched={touched.mnemonic4}
                  />
                </View>
                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={5}
                    _onChangeText={handleChange('mnemonic5')}
                    _onBlur={handleBlur('mnemonic5')}
                    _value={values.mnemonic5}
                    _errors={errors.mnemonic5}
                    _touched={touched.mnemonic5}
                  />
                  <View style={styles.blankWidth}></View>
                  <MnemonicInput
                    mnemonicId={6}
                    _onChangeText={handleChange('mnemonic6')}
                    _onBlur={handleBlur('mnemonic6')}
                    _value={values.mnemonic6}
                    _errors={errors.mnemonic6}
                    _touched={touched.mnemonic6}
                  />
                </View>

                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={7}
                    _onChangeText={handleChange('mnemonic7')}
                    _onBlur={handleBlur('mnemonic7')}
                    _value={values.mnemonic7}
                    _errors={errors.mnemonic7}
                    _touched={touched.mnemonic7}
                  />
                  <View style={styles.blankWidth}></View>
                  <MnemonicInput
                    mnemonicId={8}
                    _onChangeText={handleChange('mnemonic8')}
                    _onBlur={handleBlur('mnemonic8')}
                    _value={values.mnemonic8}
                    _errors={errors.mnemonic8}
                    _touched={touched.mnemonic8}
                  />
                </View>

                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={9}
                    _onChangeText={handleChange('mnemonic9')}
                    _onBlur={handleBlur('mnemonic9')}
                    _value={values.mnemonic9}
                    _errors={errors.mnemonic9}
                    _touched={touched.mnemonic9}
                  />
                  <View style={styles.blankWidth}></View>
                  <MnemonicInput
                    mnemonicId={10}
                    _onChangeText={handleChange('mnemonic10')}
                    _onBlur={handleBlur('mnemonic10')}
                    _value={values.mnemonic10}
                    _errors={errors.mnemonic10}
                    _touched={touched.mnemonic10}
                  />
                </View>

                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={11}
                    _onChangeText={handleChange('mnemonic11')}
                    _onBlur={handleBlur('mnemonic11')}
                    _value={values.mnemonic11}
                    _errors={errors.mnemonic11}
                    _touched={touched.mnemonic11}
                  />
                  <View style={styles.blankWidth}></View>
                  <MnemonicInput
                    mnemonicId={12}
                    _onChangeText={handleChange('mnemonic12')}
                    _onBlur={handleBlur('mnemonic12')}
                    _value={values.mnemonic12}
                    _errors={errors.mnemonic12}
                    _touched={touched.mnemonic12}
                  />
                </View>

                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={13}
                    _onChangeText={handleChange('mnemonic13')}
                    _onBlur={handleBlur('mnemonic13')}
                    _value={values.mnemonic13}
                    _errors={errors.mnemonic13}
                    _touched={touched.mnemonic13}
                  />
                  <View style={styles.blankWidth}></View>
                  <MnemonicInput
                    mnemonicId={14}
                    _onChangeText={handleChange('mnemonic14')}
                    _onBlur={handleBlur('mnemonic14')}
                    _value={values.mnemonic14}
                    _errors={errors.mnemonic14}
                    _touched={touched.mnemonic14}
                  />
                </View>

                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={15}
                    _onChangeText={handleChange('mnemonic15')}
                    _onBlur={handleBlur('mnemonic15')}
                    _value={values.mnemonic15}
                    _errors={errors.mnemonic15}
                    _touched={touched.mnemonic15}
                  />

                  <View style={styles.blankWidth}></View>

                  <MnemonicInput
                    mnemonicId={16}
                    _onChangeText={handleChange('mnemonic16')}
                    _onBlur={handleBlur('mnemonic16')}
                    _value={values.mnemonic16}
                    _errors={errors.mnemonic16}
                    _touched={touched.mnemonic16}
                  />
                </View>

                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={17}
                    _onChangeText={handleChange('mnemonic17')}
                    _onBlur={handleBlur('mnemonic17')}
                    _value={values.mnemonic17}
                    _errors={errors.mnemonic17}
                    _touched={touched.mnemonic17}
                  />

                  <View style={styles.blankWidth}></View>

                  <MnemonicInput
                    mnemonicId={18}
                    _onChangeText={handleChange('mnemonic18')}
                    _onBlur={handleBlur('mnemonic18')}
                    _value={values.mnemonic18}
                    _errors={errors.mnemonic18}
                    _touched={touched.mnemonic18}
                  />
                </View>

                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={19}
                    _onChangeText={handleChange('mnemonic19')}
                    _onBlur={handleBlur('mnemonic19')}
                    _value={values.mnemonic19}
                    _errors={errors.mnemonic19}
                    _touched={touched.mnemonic19}
                  />

                  <View style={styles.blankWidth}></View>

                  <MnemonicInput
                    mnemonicId={20}
                    _onChangeText={handleChange('mnemonic20')}
                    _onBlur={handleBlur('mnemonic20')}
                    _value={values.mnemonic20}
                    _errors={errors.mnemonic20}
                    _touched={touched.mnemonic20}
                  />
                </View>

                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={21}
                    _onChangeText={handleChange('mnemonic21')}
                    _onBlur={handleBlur('mnemonic21')}
                    _value={values.mnemonic21}
                    _errors={errors.mnemonic21}
                    _touched={touched.mnemonic21}
                  />

                  <View style={styles.blankWidth}></View>

                  <MnemonicInput
                    mnemonicId={22}
                    _onChangeText={handleChange('mnemonic22')}
                    _onBlur={handleBlur('mnemonic22')}
                    _value={values.mnemonic22}
                    _errors={errors.mnemonic22}
                    _touched={touched.mnemonic22}
                  />
                </View>

                <View style={styles.inputRows}>
                  <MnemonicInput
                    mnemonicId={23}
                    _onChangeText={handleChange('mnemonic23')}
                    _onBlur={handleBlur('mnemonic23')}
                    _value={values.mnemonic23}
                    _errors={errors.mnemonic23}
                    _touched={touched.mnemonic23}
                  />

                  <View style={styles.blankWidth}></View>

                  <MnemonicInput
                    mnemonicId={24}
                    _onChangeText={handleChange('mnemonic24')}
                    _onBlur={handleBlur('mnemonic24')}
                    _value={values.mnemonic24}
                    _errors={errors.mnemonic24}
                    _touched={touched.mnemonic24}
                  />
                </View>
              </View>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => handleSubmit}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
      </View>

    </ScrollView>
  </SafeAreaView>
)

export default MnemonicScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // padding: 16,
    // backgroundColor: 'rgb(31,41,55)',
    backgroundColor: 'rgb(17,24,39)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  mnemonicInputContainer: {
    // flex: 1,
    marginTop: 64,
    // marginLeft: 8,
    marginRight: 8,
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  submitButton: {
    marginTop: 32,
    // marginHorizontal: 32,
    marginBottom: 16,
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'rgb(107,114,128)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRows: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'yellow',
  },
  blankWidth: {
    width: 16,
  },
})
