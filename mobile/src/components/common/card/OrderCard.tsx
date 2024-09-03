import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { imageStyle, textStyles} from '~/styles/globalStyles';
import { OrderCardStyle } from '~/styles/components/common/card/OrderCardStyle';
interface Infor {
  title: string;
  content: string;
}
interface Order {
  infors: Infor[];
  images: {uri: string}[];
}
interface OrderCardProps {
  orders?: Order[];
  onPress?: () => void;
  positionStyle?: StyleProp<ViewStyle>;
  positionItemStyle?:StyleProp<ViewStyle>;
}
const OrderCard: React.FC<OrderCardProps> = ({
  orders,
  onPress,
  positionStyle,
  positionItemStyle
}) => {
  return (
    <View style={positionStyle}>
      {orders?.map(order => (
        <TouchableOpacity onPress={onPress} style={[OrderCardStyle.containerItem,positionItemStyle]}>
          {order.infors.map(infor => (
            <View>
              <View style={OrderCardStyle.containerRow}>
                <Text style={[textStyles.caption,{color:'black'}]}>{infor.title}</Text>
                <Text style={[textStyles.body_sm,{color:'black'}]}>{infor.content}</Text>
              </View>
            </View>
          ))}
          <View style={OrderCardStyle.containerImages}>
            {order.images.map((image, imageIndex) =>
              imageIndex < 3 ? (
                <Image
                  key={imageIndex}
                  style={imageStyle.image62_48}
                  source={image}
                />
              ) : null,
            )}
            {order.images.length > 3 && (
              <View style={OrderCardStyle.containerTextSumHiden}>
                <Text style={OrderCardStyle.textSumHiden}>
                  +{order.images.length - 3}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default OrderCard;