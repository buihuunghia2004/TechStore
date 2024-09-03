import { useEffect, useState } from "react";
import { Animated } from "react-native";

const useFade = (isLogin: boolean) => {   
    const [opacityValue] = useState(new Animated.Value(1));

    useEffect(() => {
        Animated.timing(opacityValue, {
            toValue: isLogin ? 1 : 0,
            duration: 500, 
            useNativeDriver: true,
        }).start();
    }, [isLogin]);

    return opacityValue;
};

export default useFade;
