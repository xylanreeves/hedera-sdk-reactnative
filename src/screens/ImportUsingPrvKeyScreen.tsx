import {
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

const ImportUsingPrvKeyScreen = ({ navigation }) => {
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

      <View style={{ padding: 32, marginTop: 64 }}>
        {/* Enter your Hedera Account ID */}
        <View>
          <Text style={{ color: color.whiteOp9, fontSize: 16 }}>
            Enter your Hedera Account ID
          </Text>
          <Text style={{ color: color.lightGray }}>
            Example Format: 12345 or 0.0.12345
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

          <TextInput style={styles.inputBox} 
            placeholder='0.0.xxxx'
            placeholderTextColor={color.lightGray}
          />
        </View>
        {/* Enter your Private Key */}
        <View style={{ marginTop: 32 }}>
          <Text style={{ color: color.whiteOp9, fontSize: 16 }}>
            Enter your Private Key
          </Text>
          <Text style={{ color: color.lightGray }}>Keep this secret!</Text>
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
})
