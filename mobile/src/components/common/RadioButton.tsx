import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import { assets } from '~/styles/app/assets';
import { ShippingMethodCardStyle } from '~/styles/components/common/card/ShippingMethodCardStyle';
import { RadioButtonStyle } from '~/styles/components/common/RadioButtonStyle';
import { iconStyles } from '~/styles/globalStyles';

interface RadioButtonProps {
  title: string;
  sub?: string;
  price?: number;
  isChecked: boolean; 
  onPress?: (checked: boolean) => void;
  positionStyle?: StyleProp<ViewStyle>;
}
const RadioButton: React.FC<RadioButtonProps> = ({
  title,
  sub,
  price,
  isChecked,
  onPress,
  positionStyle,
}) => {
  const handleCheck = () => {
    const newCheckState = !isChecked;
    if (onPress) {
      onPress(newCheckState);
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[positionStyle, RadioButtonStyle.container]}
      onPress={handleCheck}>
      <View style={RadioButtonStyle.headerContainer}>
        <Image
          style={iconStyles.icon16}
          source={isChecked ? assets.icon.radio_true : assets.icon.radio_false}
        />
        <Text style={RadioButtonStyle.textTitle}>{title}</Text>
      </View>
      <View style={ShippingMethodCardStyle.containerInfor}>
        {sub && (
          <Text style={ShippingMethodCardStyle.textDescription}>{sub}</Text>
        )}
        {price && (
          <Text style={ShippingMethodCardStyle.textPrice}>{price}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default RadioButton;
