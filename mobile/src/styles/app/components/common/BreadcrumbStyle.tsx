import { StyleSheet } from 'react-native'
import { colors } from '~/styles/colors'
import { containerStyles, textStyles } from '~/styles/globalStyles'
export const BreadcrumbStyle = StyleSheet.create({
  container:{
    ...containerStyles.containerRow,
    alignItems:'center',
    maxHeight:16
  },
  itemContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
  },
  text:{
    ...textStyles.body_sm,
    justifyContent:'center'
  },
  textCurrent:{
    ...textStyles.body_sm,
    justifyContent:'center',
    color:colors.primary
  }
})
