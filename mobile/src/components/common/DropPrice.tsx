import {
  Dimensions,
  StyleSheet,
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
import {textStyles} from '~/styles/globalStyles';

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
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        style={styles.header}>
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
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="min."
                keyboardType="numeric"
                value={minPrice.toString()}
                onChangeText={value => handleInputChange(0, value)}
              />
              <TextInput
                style={styles.input}
                placeholder="max."
                keyboardType="numeric"
                value={maxPrice.toString()}
                onChangeText={value => handleInputChange(1, value)}
              />
            </View>
            <TouchableWithoutFeedback onPress={handleTrackPress}>
              <View style={styles.sliderContainer}>
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
                    <View style={styles.marker}>
                      <View style={styles.markerInner} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxHeight: 56,
  },
  text: {
    ...textStyles.body_lg,
    color: 'black',
  },
  inputContainer: {
    width: '100%',
    gap: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  input: {
    width: '25%',
    borderWidth: 1,
    borderColor: colors.gray717171,
    borderRadius: 8,
    padding: 8,
    textAlign: 'center',
  },
  sliderContainer: {
    width: '100%',
    alignItems: 'center',
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default DropPrice;
