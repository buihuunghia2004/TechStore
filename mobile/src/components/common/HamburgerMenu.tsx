import React, {useState} from 'react';
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
import useDropdown from '~/hooks/animation/useDropdown';
import {assets} from '~/styles/app/assets';
import {colors} from '~/styles/colors';
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
  onItemPress?: (item: Content) => void;
  onPress?: () => void;
  positionStyle?: StyleProp<ViewStyle>;
}

const HamburgerMenu: React.FC<HamburgerProps> = ({
  title,
  data,
  type,
  onPress,
  onItemPress,
  positionStyle,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {heightInterpolate, animatedStyle} = useDropdown(isExpanded,data.length,40);

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
    if (onPress) onPress();
  };
  return (
    <View style={[positionStyle,{ overflow: 'hidden' }]}>
      <TouchableOpacity
        onPress={toggleExpanded}
        activeOpacity={1}
        style={[HamburgerMenuStyle.header, positionStyle]}>
        <Text
          style={
            type == 'normal'
              ? isExpanded
                ? HamburgerMenuStyle.textBlue
                : HamburgerMenuStyle.textNormal
              : isExpanded
              ? HamburgerMenuStyle.textBlue
              : HamburgerMenuStyle.textFooter
          }>
          {title}
        </Text>
        {data.length > 0 && (
          <Animated.Image
            style={[HamburgerMenuStyle.icon, animatedStyle]}
            source={
              type === 'normal'
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
      <Animated.View
        style={{
          height: heightInterpolate,
          overflow:'hidden'
        }}>
        {isExpanded && (
          <View>
            {data.map(item => (
              <TouchableOpacity
                key={item.id}
                style={HamburgerMenuStyle.itemContainer}
                onPress={() => onItemPress && onItemPress(item)}>
                {type === 'normal' && (
                  <Image source={item.icon} style={iconStyles.icon20} />
                )}
                <Text
                  style={[
                    textStyles.body_md,
                    type == 'footer'
                      ? {color: 'white'}
                      : {color: colors.gray444444},
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default HamburgerMenu;
