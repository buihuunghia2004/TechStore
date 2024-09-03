import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {imageStyle} from '~/styles/globalStyles';
import {SaleSectionCardStyle} from '~/styles/components/common/card/SaleSectionCardStyle';
interface SaleSecionProps {
  title?: string;
  sale?: number;
  price?: number;
  salePrice?: number;
  image?: {uri: string};
  onPress?: () => void;
  positionStyle?: StyleProp<ViewStyle>;
}
const SaleSectionCard: React.FC<SaleSecionProps> = ({
  image,
  title,
  sale,
  price,
  salePrice,
  onPress,
  positionStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[SaleSectionCardStyle.container, positionStyle]}>
      <View>
        <Image style={imageStyle.image86_72} source={image} />
        <Text style={[SaleSectionCardStyle.saleText]}>-{sale}%</Text>
        <Text numberOfLines={1} style={SaleSectionCardStyle.text}>
          {title}
        </Text>
        <Text style={SaleSectionCardStyle.oldPrice}>{salePrice}vnd</Text>
        <Text style={SaleSectionCardStyle.price}>{price}vnd</Text>
      </View>
    </TouchableOpacity>
  );
};
export default SaleSectionCard;
