import {
  Image,
  ImageProps,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {containerStyles, iconStyles, textStyles} from '~/styles/globalStyles';
import {assets} from '~/styles/app/assets';
import {colors} from '~/styles/colors';
import {borderRadius} from '~/styles/dimensions';
import AppInput from './AppInput';
import HamburgerMenu from './HamburgerMenu';
import AppButton from './AppButton';
interface Content {
  id: string;
  name: string;
  icon: ImageProps;
}
const fakeContentData: Content[] = [
  {
    id: '1',
    name: 'Home',
    icon: {
      uri: 'https://example.com/icons/home.png',
      width: 24,
      height: 24,
    } as ImageProps, // Giả sử bạn đang sử dụng ImageProps từ 'react-native'
  },
  {
    id: '2',
    name: 'Profile',
    icon: {
      uri: 'https://example.com/icons/profile.png',
      width: 24,
      height: 24,
    } as ImageProps,
  },
  {
    id: '3',
    name: 'Settings',
    icon: {
      uri: 'https://example.com/icons/settings.png',
      width: 24,
      height: 24,
    } as ImageProps,
  },
  {
    id: '4',
    name: 'Profile',
    icon: {
      uri: 'https://example.com/icons/profile.png',
      width: 24,
      height: 24,
    } as ImageProps,
  },
  {
    id: '5',
    name: 'Settings',
    icon: {
      uri: 'https://example.com/icons/settings.png',
      width: 24,
      height: 24,
    } as ImageProps,
  },
];
interface AppFooterProps {
  positionStyle: StyleProp<ViewStyle>;
}
const AppFooter = () => {
  const [show, setShow] = useState();
  return (
    <View style={styles.container}>
      <View style={containerStyles.containerBetween}>
        <TouchableOpacity>
          <Image style={iconStyles.icon40} source={assets.icon.footer_chat} />
        </TouchableOpacity>
        <TouchableOpacity>
          {show ? (
            <Image
              style={iconStyles.icon40}
              source={assets.icon.footer_arrow_down}
            />
          ) : (
            <Image
              style={iconStyles.icon40}
              source={assets.icon.footer_arrow_up}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Sign up for News and updates</Text>
        <TouchableOpacity style={styles.containerEmail}>
          <View style={styles.containerStart}>
            <Image
              style={iconStyles.icon24}
              source={assets.icon.footer_user_white}
            />
            <Text style={styles.textHint}>E-mail Address</Text>
          </View>
          <Image
            style={iconStyles.icon24}
            source={assets.icon.arrow_right_white}
          />
        </TouchableOpacity>
      </View>
      <View>
        <HamburgerMenu type="footer" title="Company" data={fakeContentData} />
      </View>
      <View>
        <HamburgerMenu type="footer" title="Infor" data={fakeContentData} />
      </View>
      <View>
        <HamburgerMenu
          type="footer"
          title="Contact us"
          data={fakeContentData}
        />
      </View>
      <View style={styles.containerParthers}>
        <View>
          <Image />
          <Image />
          <Image />
          <Image />
        </View>
        <View>
          <Image />
          <Image />
          <Image />
          <Image />
        </View>
      </View>
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary900,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  containerIcon: {
    backgroundColor: colors.primary50,
    borderRadius: borderRadius.max,
    justifyContent: 'center',
    alignItems: 'center',
    ...iconStyles.icon40,
  },
  containerTitle: {
    flexDirection: 'column',
    padding: 8,
    gap: 12,
  },
  containerEmail: {
    ...containerStyles.containerBetween,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  containerStart: {
    flexDirection: 'row',
    gap: 8,
  },
  containerParthers: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:colors.gray2D2D2D
  },
  textTitle: {
    color: 'white',
    ...textStyles.h3,
  },
  textHint: {
    color: 'white',
    ...textStyles.body_md,
  },
});
