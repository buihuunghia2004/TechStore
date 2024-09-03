import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import { ShippingMethodCardStyle } from '~/styles/components/common/card/ShippingMethodCardStyle';
import RadioButton from './RadioButton';

interface Method {
  name: string;
  description: string;
  price: number;
}

interface ShippingCardMethodProps {
  methods: Method[];
  onPress?: (selectedIndexes: number[]) => void;
  positionStyle?: StyleProp<ViewStyle>;
}

const ShippingMethodCard: React.FC<ShippingCardMethodProps> = ({
  methods,
  onPress,
  positionStyle,
}) => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const handleCheck = (index: number) => {
    setSelectedIndexes(prev => {
      const isSelected = prev.includes(index);
      const updated = isSelected ? prev.filter(i => i !== index) : [...prev, index];
      if (onPress) {
        onPress(updated);
      }
      return updated;
    });
  };

  return (
    <View>
      {methods.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCheck(index)}
          style={[
            selectedIndexes.includes(index)
              ? ShippingMethodCardStyle.containerSelect
              : ShippingMethodCardStyle.container,
            positionStyle,
          ]}
        >
          <RadioButton
            title={item.name}
            price={item.price}
            sub={item.description}
            isChecked={ selectedIndexes.includes(index)}
            onPress={() => handleCheck(index)}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ShippingMethodCard;

const styles = StyleSheet.create({});
