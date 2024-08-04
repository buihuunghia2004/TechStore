import { StyleSheet, Text, View } from 'react-native' 
import { colors } from '~/styles/colors'

export const TextUnderLineStyle = StyleSheet.create({
  container:{
    minHeight:28,
    alignSelf:'flex-start',
  },
  text:{
    textAlign: 'left',
  },
  line:{
    flex : 1,
    maxHeight:1,
    backgroundColor:colors.primary,
    marginTop:4
  }
})