import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { color } from '../components/colors'
import { commonStyles } from '../styles/commonStyles'

const NewWalletScreen = ({navigation}) => {
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
            Create or Import Wallet
          </Text>
          <View
            style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 4 }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: color.whiteOp8,
              }}
            >
              Create a new wallet{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: color.whiteOp7,
              }}
            >
              - or import an existing account using your{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: color.whiteOp8,
                fontStyle: 'italic',
              }}
            >
              Private Key{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: color.whiteOp7,
              }}
            >
              or{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: color.whiteOp8,
                fontStyle: 'italic',
              }}
            >
              24-Word Phrase
            </Text>
          </View>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginTop: 64 }}>
        {/* Import Existing Wallet Button */}

        <TouchableOpacity style={commonStyles.CustomAppButton} onPress={() => navigation.push('ImportWallet')}>
          <Text style={{ color: 'lightgray' }}>Import Existing Wallet</Text>
        </TouchableOpacity>

        {/* Create New Wallet Button */}

        <TouchableOpacity style={commonStyles.CustomAppButton}>
          <Text style={{ color: 'lightgray' }}>Create New Wallet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NewWalletScreen

const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    backgroundColor: color.transparentOverlay,
    height: '32%',
    padding: 16,
    justifyContent: 'center',
  },
})
