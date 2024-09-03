import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {CartCardStyle} from '~/styles/components/common/card/CartCardStyle';
import {containerStyles, iconStyles, imageStyle} from '~/styles/globalStyles';
import {assets} from '~/styles/app/assets';
import IconButton from '../IconButton';

interface CartCardProps {
  name: string;
  colorName: string;
  colorCode?: string;
  price: number;
  image: {uri: string};
  onPress: (quantity: number) => void;
  positionStyle?: StyleProp<ViewStyle>;
}
const CartCard: React.FC<CartCardProps> = ({
  name,
  colorName,
  colorCode,
  price,
  image,
  onPress,
  positionStyle,
}) => {
  const [quantity, setQuantity] = useState(0);
  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onPress(newQuantity);
  };
  const decrementQuantity = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onPress(newQuantity);
    }
  };
  return (
    <View style={[CartCardStyle.container, positionStyle]}>
      <View style={CartCardStyle.containerImage}>
        <Image
          style={imageStyle.image132_104}
          source={image}
        />
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
          <Text style={CartCardStyle.textPrice}>{price}</Text>
        </View>
        <View style={containerStyles.containerRow}>
          <IconButton icon={assets.icon.trash}/>
          <View style={{justifyContent:'center'}}>
            <View style={CartCardStyle.containerQuantity}>
              <TouchableOpacity onPress={decrementQuantity}>
              <Image style={[iconStyles.icon8,{padding:5}]} source={assets.icon.minus}/>
              </TouchableOpacity>
              <Text style={CartCardStyle.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity}>
              <Image style={[iconStyles.icon8,{padding:5}]} source={assets.icon.plus}/>
              </TouchableOpacity>
            </View>
            <View style={CartCardStyle.line}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({});
