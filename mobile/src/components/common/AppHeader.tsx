import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {containerStyles, iconStyles, textStyles} from '~/styles/globalStyles';
import {assets} from '~/styles/app/assets';
import {colors} from '~/styles/colors';
import Search from './Search';
import IconButton from './IconButton';

interface AppHeaderProps {
  onPress?: () => void;
  isLogin?: boolean;
  positionStyle?: StyleProp<ViewStyle>;
}
const AppHeader: React.FC<AppHeaderProps> = ({
  onPress,
  isLogin,
  positionStyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBar}>
        <Image style={iconStyles.icon24} source={assets.icon.menu} />
        <Text style={styles.textLogo}>Tech Heiml</Text>
        {isLogin ? (
          <View style={styles.containerLogin}>
            <Image style={iconStyles.icon24} source={assets.icon.login} />
            <Text>Login</Text>
          </View>
        ) : (
          <View style={styles.containerLogin}>
            <IconButton icon={assets.icon.login} />
            <Text style={styles.textLogin}>Login</Text>
          </View>
        )}
      </View>
      <View style={styles.containerSearch}>
        {isLogin && (
          <TouchableOpacity>
            <Image style={iconStyles.icon24} source={assets.icon.bag} />
          </TouchableOpacity>
        )}
        <Search placeholder="what wecan help you find ?" />
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {},
  containerBar: {
    ...containerStyles.containerBetween,
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  containerSearch: {
    ...containerStyles.containerRow,
    alignItems: 'center',
    marginTop: 12,
    gap: 16,
    paddingLeft: 4,
  },
  containerLogin: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  textLogo: {
    color: colors.primary400,
    ...textStyles.h3,
  },
  textLogin:{
    color: colors.primary400,
    ...textStyles.body_lg,
  }
});
