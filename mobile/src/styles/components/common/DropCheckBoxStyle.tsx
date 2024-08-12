import {StyleSheet} from 'react-native';
import {colors} from '~/styles/colors';
import {iconStyles} from '~/styles/globalStyles';

export const DropCheckBoxStyle = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    ...iconStyles.icon24,
    margin: 16,
  },
  line: {
    height: 1,
    backgroundColor: colors.grayCBCBCB,
    width: '100%',
    bottom: 1,
  },
});
