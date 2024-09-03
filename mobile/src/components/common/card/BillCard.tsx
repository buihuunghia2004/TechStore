import {StyleProp, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import { BillCardStyle } from '~/styles/components/common/card/BillCardStyle';

interface Item {
  title: string;
  price: number;
}
interface BillCardProps {
  items: Item[];
  positionStyle?: StyleProp<ViewStyle>;
}
const BillCard: React.FC<BillCardProps> = ({items, positionStyle}) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
  return (
    <View style={positionStyle}>
       <View style={BillCardStyle.contaiberBill}>
          {items.map((item,index) => (
            <View key={index} style={BillCardStyle.containerItem}>
                <Text style={BillCardStyle.textTitle}>{item.title}</Text>
                <Text style={BillCardStyle.textPrice}>{item.price.toFixed(1)} đ</Text>
            </View>
          ))}
          <View style={BillCardStyle.line}></View>
          <View style={BillCardStyle.containerItem}>
            <Text style={BillCardStyle.textTotal}>Grand total</Text>
            <Text style={BillCardStyle.textTotal}>{total} đ</Text>
          </View>
        </View>
    </View>
  );
};
export default BillCard;
