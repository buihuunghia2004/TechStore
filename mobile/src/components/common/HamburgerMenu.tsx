import React, {useRef, useState} from 'react';
import {
  Animated,
  Easing,
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
  positionStyle: StyleProp<ViewStyle>
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
  const animationValue = useRef(new Animated.Value(0)).current;

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
    Animated.timing(animationValue, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    if (onPress) onPress();
  };
  const heightInterpolate = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 40 * data.length],
  });
  const rotateInterpolate = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const animatedStyle = {
    transform: [{rotate: rotateInterpolate}],
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
