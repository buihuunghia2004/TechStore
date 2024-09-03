import {StyleSheet} from 'react-native';
import { colors } from '~/styles/colors';
import { borderRadius } from '~/styles/dimensions';
import { containerStyles, textStyles } from '~/styles/globalStyles';

export const CheckoutCardStyle = StyleSheet.create({
  container: {
    ...containerStyles.card,
    width: 90,
    elevation: 2,
    alignItems:'center',
    padding:4
  },
  containerInfor:{
    width:'100%',
  },
  containerNameColor:{
    ...containerStyles.containerRow,
    alignItems:'center',
    marginTop:8
  },
  containerColor:{
    width:12,
    height:12,
    borderRadius:borderRadius.max,
  },
  text:{
    ...textStyles.button_sm,
    color:colors.gray717171,
    marginLeft:4,
  }

});
