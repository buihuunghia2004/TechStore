import { useEffect, useRef } from 'react';  
import { Animated } from 'react-native';  

const useDropdown = (isExpanded: boolean, heightItem: number, itemCount: number) => {   
  const animationValue = useRef(new Animated.Value(0)).current;  
  const heightInterpolate = useRef(new Animated.Value(0)).current;  

  useEffect(() => {  
    Animated.timing(heightInterpolate, {  
      toValue: isExpanded ? itemCount * heightItem : 0,   
      duration: 300,  
      useNativeDriver: false,  
    }).start();  
  }, [isExpanded, itemCount]);  

  const interpolatedHeight = heightInterpolate.interpolate({  
    inputRange: [0, itemCount * heightItem],  
    outputRange: [0, itemCount * heightItem],  
  });  

  const rotateInterpolate = animationValue.interpolate({  
    inputRange: [0, 1],  
    outputRange: ['0deg', '180deg'],  
  });  

  const animatedStyle = {  
    transform: [{ rotate: rotateInterpolate }],  
  };  

  useEffect(() => {  
    Animated.timing(animationValue, {  
      toValue: isExpanded ? 1 : 0,  
      duration: 300,  
      useNativeDriver: false,  
    }).start();  
  }, [isExpanded]);  

  return {  
    heightInterpolate: interpolatedHeight,   
    animatedStyle,   
  };  
};  

export default useDropdown;  