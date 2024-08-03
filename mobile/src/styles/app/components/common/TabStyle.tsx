import { StyleSheet, Text, View } from 'react-native'  
import React from 'react'  
import { colors } from '~/styles/colors'  
import { containerStyles, iconStyles, textStyles } from '~/styles/globalStyles'  

export const TabStyle = StyleSheet.create({  
  containerModal: {  
    ...containerStyles.containerRow,
    maxHeight: 40,
  },  
  containerRegister: {  
    maxHeight: 40,
    ...containerStyles.containerRow,
  },  
  containerNavbar: {  
    ...containerStyles.containerRow,
    maxHeight: 20,  
  },  
  itemContainer: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',
  },  
  line: {  
    height: 1,
    backgroundColor: colors.grayCBCBCB,
    width: '100%',
    position:'absolute',
    bottom:1
  },  
  textNavbar: {  
    ...textStyles.body_sm,  
  },  
  textRegister: {  
    ...textStyles.button_lg,  
  },  
  textModalTitle: {  
    ...textStyles.button_lg,  
  },
  buttonClose:{
    flex:2,
    alignItems:'flex-end'
  },
  iconClose:{
    ...iconStyles.icon24,
    marginBottom:5,
    marginHorizontal:10
  }
});