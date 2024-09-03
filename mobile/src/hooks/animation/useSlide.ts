import { useEffect, useState } from "react";
import { Animated } from "react-native";

const useSlide = (isLogin: boolean) => {   
    const [animationValue] = useState(new Animated.Value(0));

    useEffect(()=>{
        Animated.timing(animationValue,{
            toValue: isLogin ? 0 : 1,
            duration:800,
            useNativeDriver:true
        }).start()
    },[isLogin])
    const registerTranslate = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0], // Chuyển từ ngoài màn hình vào giữa màn hình
    });
    
    const loginTranslate = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -200], // Chuyển từ giữa màn hình ra ngoài
    });

    return { registerTranslate, loginTranslate };
}

export default useSlide;