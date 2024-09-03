import { Image, ImageProps, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { assets } from '~/styles/app/assets';
import { imageStyle, textStyles } from '~/styles/globalStyles';

interface CategoryProps{
    title:string;
    image?: { uri: string }; 
    onPress:()=>void;
    positionStyle?: StyleProp<ViewStyle>;
}
const CategoryItem:React.FC<CategoryProps> = ({
    title,
    image,
    onPress,
    positionStyle
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,positionStyle]}>
        <Image style={imageStyle.image66} source={assets.image.product_demo}/>
      <Text style={textStyles.body_sm}>{title}</Text>
    </TouchableOpacity>
  )
}
export default CategoryItem
const styles = StyleSheet.create({
    container:{
        width:82,
        height:100,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:4,
        backgroundColor:'white',
        borderRadius:8,
        shadowColor: 'rgba(113, 113, 113, 0.12)', // Màu sắc của bóng
        shadowOffset: { width: -2, height: 2 }, // Độ dịch chuyển ngang và dọc
        shadowOpacity: 1, // Độ mờ của bóng
        shadowRadius: 15, // Độ mờ của bóng
        elevation: 5, // Độ cao của bóng (chỉ trên Android)
    }
})