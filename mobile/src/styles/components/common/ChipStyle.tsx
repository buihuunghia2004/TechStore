import {StyleSheet} from 'react-native';
import { iconStyles, textStyles } from '~/styles/globalStyles';

export const ChipStyle = StyleSheet.create({
  container:{
    height:40,
    minHeight:40,
    borderRadius:8,
    borderWidth:1,
    borderColor:'black',
    paddingHorizontal:8,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'flex-start',
    justifyContent:'center',
    gap:8
  },
  removeIcon:{
    ...iconStyles.icon16
  },
  text:{
    ...textStyles.body_sm,
    color:'black',
  }
});
