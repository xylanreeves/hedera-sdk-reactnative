import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { color } from '../../components/colors'
import { commonStyles } from '../../styles/commonStyles'

const ImportWalletScreen = ({ navigation }) => {
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
            Import Existing Wallet
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
              Import an existing account using your Private Key or Seed phrase.
            </Text>
          </View>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginTop: 64 }}>
        {/* Import Existing Wallet Button */}

        <TouchableOpacity
          style={commonStyles.CustomAppButton}
          onPress={() => navigation.push('ImportPrv')}
        >
          <Text style={{ color: 'lightgray' }}>Import using Private Key</Text>
        </TouchableOpacity>

        {/* Create New Wallet Button */}

        <TouchableOpacity
          style={commonStyles.CustomAppButton}
          onPress={() => navigation.push('EnterAccountId')}
        >
          <Text style={{ color: 'lightgray' }}>
            Import using 24-Word Phrase
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ImportWalletScreen

const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    backgroundColor: color.transparentOverlay,
    height: '32%',
    padding: 16,
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: color.lightGrayBorder,
  },
})
