import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageProps,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {assets} from '~/styles/app/assets';
import {HamburgerMenuStyle} from '~/styles/components/common/HamburgerMenuStyle';
import {iconStyles, textStyles} from '~/styles/globalStyles';
import useAnimation from '~/hooks/animation/UseDropdown';
interface Content {
  id: string;
  name: string;
  icon: ImageProps;
}
interface HamburgerProps {
  title: string;
  data: Content[];
  type?: 'normal' | 'footer';
  onItemPress?: () => void;
  onPress?: () => void;
  positionStyle?: StyleProp<ViewStyle>
}
const HamburgerMenu: React.FC<HamburgerProps> = ({
  title,
  data,
  type,
  onPress,
  onItemPress,
  positionStyle
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {heightInterpolate, animatedStyle} = useAnimation(isExpanded);
  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
    if (onPress) onPress();
  };
  return (
    <View style={HamburgerMenuStyle.container}>
      <TouchableOpacity
        onPress={toggleExpanded}
        activeOpacity={1}
        style={[HamburgerMenuStyle.header,positionStyle]}>
        <Text
          style={
            isExpanded ? HamburgerMenuStyle.text : HamburgerMenuStyle.textBlue
          }>
          {title}
        </Text>
        {data.length > 0 && (
          <Animated.Image
            style={[HamburgerMenuStyle.icon, animatedStyle]}
            source={
              type == 'normal'
                ? isExpanded
                  ? assets.icon.arrowDownBlue
                  : assets.icon.arrowDown
                : isExpanded
                ? assets.icon.arrowDownBlue
                : assets.icon.arrowDownWhite
            }
          />
        )}
      </TouchableOpacity>
      <Animated.View style={{height: heightInterpolate}}>
        {isExpanded && (
          <View>
            {data?.map(item => (
              <TouchableOpacity
                key={item.id}
                style={HamburgerMenuStyle.itemContainer}
                onPress={onItemPress}>
                {type == 'normal' && (
                  <Image source={item.icon} style={iconStyles.icon20} />
                )}
                <Text style={textStyles.body_md}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </Animated.View>
    </View>
  );
};
export default HamburgerMenu;
