import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '~/styles/colors';
import {assets} from '~/styles/app/assets';
import {TabStyle} from '~/styles/components/common/TabStyle';

interface TabProps {
  type: 'Navbar' | 'ModalTitle' | 'Register';
  data: string[];
  onItemPress?: (key: string) => void;
  positionStyle?: StyleProp<ViewStyle>;
}
const Tab: React.FC<TabProps> = ({type, data,onItemPress}) => {
  const [currentItem, setCurrentItem] = useState<string | null>(null);
  const handleOnPress=(item:string)=>{
    setCurrentItem(item)
    if(onItemPress){
      onItemPress(item)
    }
  }
  useEffect(() => {
    setCurrentItem(data[0]);
  }, [type]);
  return (
    <View
      style={
        type == 'ModalTitle'
          ? TabStyle.containerModal
          : type == 'Register'
          ? TabStyle.containerRegister
          : TabStyle.containerNavbar
      }>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={TabStyle.itemContainer}
          onPress={() => handleOnPress(item)}>
          <Text
            style={[
              type == 'ModalTitle'
                ? TabStyle.textModalTitle
                : type == 'Register'
                ? TabStyle.textRegister
                : TabStyle.textNavbar,
              currentItem === item && {color: colors.primary},
            ]}>
            {item}
          </Text>
          <View
            style={[
              TabStyle.line,
              currentItem === item && {backgroundColor: colors.primary},
            ]}></View>
        </TouchableOpacity>
      ))}
      {type == 'ModalTitle' && (
        <View style={TabStyle.buttonClose}>
          <Image
            style={TabStyle.iconClose}
            source={assets.icon.close_circle_inactive}
          />
          <View style={TabStyle.line}></View>
        </View>
      )}
    </View>
  );
};
export default Tab;
