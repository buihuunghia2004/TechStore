import {StyleSheet} from 'react-native';
import {colors} from '~/styles/colors';
import { spacing } from '~/styles/dimensions';
import {containerStyles, textStyles} from '~/styles/globalStyles';

export const SaleSectionCardStyle = StyleSheet.create({
  container: {
    ...containerStyles.card,
    width: 102,
    elevation:spacing.medium
  },
  text: {
    ...textStyles.body_sm,
    width: '100%',
    marginTop: 8,
    color:'black'
  },
  price: {
    ...textStyles.body_sm,
    color: 'red',
  },
  oldPrice: {
    marginTop: 8,
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: 'gray',
  },
  saleText: {
    backgroundColor: colors.secondary100,
    ...textStyles.body_sm,
    color: colors.secondary400,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute',
    top: 4,
    left: 0,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
});
