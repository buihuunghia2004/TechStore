import { useEffect, useRef } from 'react';  
import { Animated } from 'react-native';  

const useDropdown = (isExpanded: boolean) => {  
  const animationValue = useRef(new Animated.Value(0)).current;  

  const heightInterpolate = animationValue.interpolate({  
    inputRange: [0, 1],  
    outputRange: [0, 40],
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
    heightInterpolate,  
    animatedStyle,  
  };  
};  

export default useDropdown;