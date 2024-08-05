import {Animated, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {HamburgerMenuStyle} from '~/styles/components/common/HamburgerMenuStyle';
import {assets} from '~/styles/app/assets';
import {DropCheckBoxStyle} from '~/styles/components/common/DropCheckBoxStyle';
import CheckBox from './CheckBox';

interface DropCheckBoxProps {
  title?: string;
  onItemPress?: (index: number) => void;
  data?: any[];
  positionStyle?: StyleProp<ViewStyle>;
}
const DropCheckBox: React.FC<DropCheckBoxProps> = ({
  title,
  onItemPress,
  data = [],
  positionStyle
}) => {
  const [arrCheck, setArrCheck] = useState<boolean[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (data.length !== arrCheck.length) {
      const newArray = Array.from({length: data.length}, () => false);
      setArrCheck(newArray);
    }
  }, [data]);

  const handleOnCheckBox = (index: number) => {
    setArrCheck(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
    if (onItemPress) {
      onItemPress(index);
    }
  };
  const heightInterpolate = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 40 * data.length],
  });
  const rotateInterpolate = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const animatedStyle = {
    transform: [{rotate: rotateInterpolate}],
  };

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: isExpanded ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isExpanded]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        activeOpacity={1}
        style={[DropCheckBoxStyle.header,positionStyle]}>
        <Text
          style={
            isExpanded ? HamburgerMenuStyle.text : HamburgerMenuStyle.textBlue
          }>
          {title}
        </Text>
        {data.length > 0 && (
          <Animated.Image
            style={[DropCheckBoxStyle.icon, animatedStyle]}
            source={
              isExpanded ? assets.icon.arrowUpBlue : assets.icon.arrowDown
            }
          />
        )}
      </TouchableOpacity>
      <Animated.View style={{height: heightInterpolate}}>
        {isExpanded && (
          <View>
            {data.map((item, index) => (
              <CheckBox
                key={item.key}
                title={item.brand}
                sub={item.sub}
                checked={arrCheck[index]}
                onPress={() => handleOnCheckBox(index)}
                positionStyle={{marginBottom: 16}}
              />
            ))}
          </View>
        )}
      </Animated.View>
      <View
        style={[DropCheckBoxStyle.line, isExpanded && {marginTop: 16}]}></View>
    </View>
  );
};
export default DropCheckBox;
