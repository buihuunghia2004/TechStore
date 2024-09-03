import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {containerStyles, iconStyles, imageStyle, textStyles} from '~/styles/globalStyles';
import {ProductCardStyle} from '~/styles/components/common/card/ProductCardStyle';
import {assets} from '~/styles/app/assets';
interface ProductCardProps {
  name?: string;
  sale?: number;
  price?: number;
  salePrice?: number;
  rate?: number;
  colorArray?: string[];
  image?: {uri: string};
  onPress?: () => void;
  positionStyle?: StyleProp<ViewStyle>;
}
const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  sale,
  price,
  rate,
  salePrice,
  colorArray = [],
  onPress,
  positionStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[ProductCardStyle.container,positionStyle]}>
      <View>
        <Image style={imageStyle.image132_104} source={image} />
        <Text style={ProductCardStyle.saleText}>-{sale}%</Text>
        <View style={ProductCardStyle.colorsContainer}>
          {colorArray.map((item, index) => (
            <View style={[ProductCardStyle.colorContainer,{backgroundColor:`${colorArray[index]}`}]}/>
          ))}
          <Image style={ProductCardStyle.icon} source={assets.icon.add}/>
        </View>
        <Text numberOfLines={1} style={ProductCardStyle.text}>
          {name}
        </Text>
        <Text style={ProductCardStyle.oldPrice}>{salePrice}vnd</Text>
        <View style={containerStyles.containerBetween}>
          <Text style={ProductCardStyle.price}>{price}vnd</Text>
          <View style={containerStyles.containerRow}>
            <Text style={ProductCardStyle.textRate}>{rate}</Text>
            <Image style={iconStyles.icon16} source={assets.icon.star_blue} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProductCard;
