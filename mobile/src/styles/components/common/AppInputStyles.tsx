import { StyleSheet } from 'react-native'
import { colors } from '~/styles/colors'
import { containerStyles, textStyles } from '~/styles/globalStyles'

export const AppInputStyles = StyleSheet.create({
  container: {
    height: 65,
    maxHeight: 65,
  },
  containerInput: {
    ...containerStyles.containerRow,
    height: 40,
    maxHeight: 40,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: colors.background
  },
  input: {
    flex: 1,
    height: 40,
    maxHeight: 40,
    paddingHorizontal: 12,
  },
  textError:{
    color: colors.error
  },
  inactive: {
    color: colors.gray717171,
    borderColor: colors.gray2D2D2D,
  },
  foucused: {
    color: colors.primary,
    borderColor: colors.primary,
  },
  disable: {
    color: colors.grayCBCBCB,
    borderColor: colors.grayCBCBCB,
    opacity: 0.5
  },
  error: {
    color: colors.error,
    borderColor: colors.error,
  },
  label:{
    ...textStyles.body_sm,
    color: colors.gray717171,
    position: 'absolute',
    top: -10,
    left: 12,
    paddingHorizontal:5,
  },
  labelBackground:{
    backgroundColor: colors.background,
  },
  labelColor:{
    color: colors.primary
  }
})