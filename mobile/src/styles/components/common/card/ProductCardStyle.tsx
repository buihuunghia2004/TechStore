import {StyleSheet} from 'react-native';
import {borderRadius, spacing} from '~/styles/dimensions';
import {containerStyles, iconStyles, textStyles} from '~/styles/globalStyles';
import {SaleSectionCardStyle} from './SaleSectionCardStyle';
import { colors } from '~/styles/colors';

export const ProductCardStyle = StyleSheet.create({
  container: {
    ...containerStyles.card,
    width: 148,
    elevation: 2,
  },
  colorsContainer:{
    flexDirection:'column',
    position:'absolute',
    width:8,
    right:0,
    top:28,
  },
  colorContainer: {
    borderRadius:borderRadius.max,
    width:8,
    height:8,
    marginBottom:4,
  },
  icon:{
    ...iconStyles.icon8,
    marginVertical:8,
    resizeMode: 'contain',
  },
  textRate:{
    ...textStyles.h4,
    color:colors.primary500
  },
  text: {
    width: '100%',
    marginTop: 8,
    color: 'black',
  },
  price: {
    width: '71%',
    color: 'red',
  },
  oldPrice: {
    marginTop: 8,
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: 'gray',
  },
  saleText: {
    ...SaleSectionCardStyle.saleText,
  },
});
