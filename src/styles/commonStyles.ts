import { StyleSheet } from 'react-native'
import { color } from '../components/colors'

export const commonStyles = StyleSheet.create({
  alignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  CustomAppButton: {
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
  headerView: {
    width: '100%',
    backgroundColor: color.transparentOverlay,
    height: '32%',
    padding: 16,
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: color.lightGrayBorder
  },
})
