import {
  Dimensions,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import useAnimation from '~/hooks/animation/useDropdown';
import {colors} from '~/styles/colors';
import {assets} from '~/styles/app/assets';
import {HamburgerMenuStyle} from '~/styles/components/common/HamburgerMenuStyle';
import {DropCheckBoxStyle} from '~/styles/components/common/DropCheckBoxStyle';
import { DropPriceStyle } from '~/styles/components/common/DropPriceStyle';

interface DropPriceBoxProps {
  title: string;
  min: number;
  max: number;
  onPriceChange: (minPrice: number, maxPrice: number) => void;
}

const DropPrice: React.FC<DropPriceBoxProps> = ({
  onPriceChange,
  min,
  max,
  title,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {animatedStyle} = useAnimation(isExpanded);
  const [minPrice, setMinPrice] = useState(min.toString());
  const [maxPrice, setMaxPrice] = useState(max.toString());
  const screenWidth = Dimensions.get('window').width;
  const sliderLength = screenWidth - 50;

  const handleInputChange = (type: number, value: string) => {
    if (type == 0) {
      setMinPrice(value);
    } else {
      if (parseInt(value) > max) {
        setMaxPrice(max.toString());
      } else {
        setMaxPrice(value);
      }
    }
  };
  const handleSliderChange = (values: number[]) => {
    setMinPrice(values[0].toString());
    setMaxPrice(values[1].toString());
  };
  const handleTrackPress = (event: GestureResponderEvent) => {
    const {locationX} = event.nativeEvent;
    const value = Math.round(min + (locationX / sliderLength) * (max - min));
    const currentMinPrice = parseInt(minPrice);
    const currentMaxPrice = parseInt(maxPrice);
    if (Math.abs(value - currentMinPrice) < Math.abs(value - currentMaxPrice)) {
      setMinPrice(value.toString());
      handleSliderChange([value, currentMaxPrice]);
    } else {
      setMaxPrice(value.toString());
      handleSliderChange([currentMinPrice, value]);
    }
  };
  useEffect(() => {
    setMinPrice(min.toString());
    setMaxPrice(max.toString());
    onPriceChange(min, max);
  }, [min, max]);
  useEffect(() => {
    if (minPrice !== '' && maxPrice !== '') {
      onPriceChange(parseInt(minPrice), parseInt(maxPrice));
    }
  }, [minPrice, maxPrice]);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        style={DropPriceStyle.header}>
        <Text
          style={
            isExpanded ? HamburgerMenuStyle.text : HamburgerMenuStyle.textBlue
          }>
          {title}
        </Text>
        <Animated.Image
          style={[DropCheckBoxStyle.icon, animatedStyle]}
          source={isExpanded ? assets.icon.arrowUpBlue : assets.icon.arrowDown}
        />
      </TouchableOpacity>
      <Animated.View>
        {isExpanded && (
          <View>
            <View style={DropPriceStyle.inputContainer}>
              <TextInput
                style={DropPriceStyle.input}
                placeholder="min."
                keyboardType="numeric"
                value={minPrice.toString()}
                onChangeText={value => handleInputChange(0, value)}
              />
              <TextInput
                style={DropPriceStyle.input}
                placeholder="max."
                keyboardType="numeric"
                value={maxPrice.toString()}
                onChangeText={value => handleInputChange(1, value)}
              />
            </View>
            <TouchableWithoutFeedback onPress={handleTrackPress}>
              <View style={DropPriceStyle.sliderContainer}>
                <MultiSlider
                  values={[
                    minPrice == '' ? min : parseInt(minPrice),
                    maxPrice == '' ? max : parseInt(maxPrice),
                  ]}
                  sliderLength={sliderLength}
                  onValuesChange={handleSliderChange}
                  min={min}
                  max={max}
                  step={(max - min) / 100}
                  selectedStyle={{backgroundColor: colors.primary}}
                  unselectedStyle={{backgroundColor: colors.grayCBCBCB}}
                  containerStyle={{height: 40}}
                  trackStyle={{height: 6}}
                  touchDimensions={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    slipDisplacement: 40,
                  }}
                  customMarker={() => (
                    <View style={DropPriceStyle.marker}>
                      <View style={DropPriceStyle.markerInner} />
                    </View>
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Animated.View>
      <View style={[DropCheckBoxStyle.line, isExpanded && {marginTop: 16}]} />
    </View>
  );
};
export default DropPrice;
