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
import {CheckoutCardStyle} from '~/styles/components/common/card/CheckoutCardStyle';
import {imageStyle} from '~/styles/globalStyles';

interface CheckoutCardProps {
  color: string;
  quantity: number;
  image?: {uri: string};
  onPress?: () => void;
  positionStyle?: StyleProp<ViewStyle>;
}
const CheckoutCard: React.FC<CheckoutCardProps> = ({
  color,
  quantity,
  image,
  onPress,
  positionStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[CheckoutCardStyle.container,positionStyle]}>
      <Image style={imageStyle.image82_59} source={image} />
      <View style={CheckoutCardStyle.containerInfor}>
        <Text>x{quantity}</Text>
        <View style={CheckoutCardStyle.containerNameColor}>
          <View style={[CheckoutCardStyle.containerColor,{backgroundColor:`${color}`}]} />
          <Text style={CheckoutCardStyle.text}>Black</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CheckoutCard;