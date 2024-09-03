import {
  Image,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {CartCardStyle} from '~/styles/components/common/card/CartCardStyle';
import {containerStyles, iconStyles, imageStyle} from '~/styles/globalStyles';
import {assets} from '~/styles/app/assets';
import AppButton from '../AppButton';
import IconButton from '../IconButton';

interface WishCardProps {
  name: string;
  colorName: string;
  colorCode?: string;
  oldPrice:number;
  price: number;
  image: {uri: string};
  onPress: (quantity: number) => void;
  positionStyle?: StyleProp<ViewStyle>;
}
const WishCard: React.FC<WishCardProps> = ({
  name,
  colorName,
  colorCode,
  oldPrice,
  price,
  image,
  onPress,
  positionStyle,
}) => {
  return (
    <View style={[CartCardStyle.container, positionStyle]}>
      <View style={CartCardStyle.containerImage}>
        <Image style={imageStyle.image132_104} source={image} />
      </View>
      <View>
        <Text style={CartCardStyle.textName}>{name}</Text>
        <View style={CartCardStyle.containerColor}>
          <View
            style={[CartCardStyle.color, {backgroundColor: `${colorCode}`}]}
          />
          <Text style={CartCardStyle.text}>{colorName}</Text>
        </View>
        <View style={CartCardStyle.containerColor}>
          <Image style={iconStyles.icon14} source={assets.icon.truck} />
          <Text style={CartCardStyle.text}>Free Delivery</Text>
        </View>
        <View style={CartCardStyle.containerColor}>
          <Image style={iconStyles.icon14} source={assets.icon.verify} />
          <Text style={CartCardStyle.text}>Guaranteed</Text>
        </View>
        <View style={CartCardStyle.containerPrice}>
        <Text style={CartCardStyle.textOldPrice}>{oldPrice}đ</Text>
          <Text style={CartCardStyle.textPrice}>{price}đ</Text>
        </View>
        <View style={[containerStyles.containerRow,{alignItems:'center'}]}>
          <AppButton
            onPress={() => console.log()}
            title="Add to cart"
            outline
            leftIcon={assets.icon.shopping_blue}
            positionStyle={{marginRight:24}}
          />
          <IconButton icon={assets.icon.trash}/>
        </View>
      </View>
    </View>
  );
};
export default WishCard;
