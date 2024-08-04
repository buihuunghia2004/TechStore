import { Animated, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { SwitchButtonStyle } from '~/styles/components/common/SwitchButtonStyle';

interface SwitchButtonProps{
    onPress? :()=>void,
    positionStyle? : StyleProp<ViewStyle>;
    disabled? : boolean;
}
const SwitchButton:React.FC<SwitchButtonProps> =({
    onPress,
    disabled,
    positionStyle
})=>{
    const [isSwitched, setIsSwitched] = useState(false);
    const handlePress = () => {
        if (!disabled) {
          setIsSwitched(prev => !prev);
          if (onPress) {
            onPress();
          }
        }
      };
    return (
         <TouchableOpacity  
            onPress={handlePress}
            activeOpacity={1}
            style={[
                SwitchButtonStyle.containerOff,
                isSwitched ? SwitchButtonStyle.containerOn : SwitchButtonStyle.containerOff,
                positionStyle,
            ]}
    >
      <Animated.View
        style={
          SwitchButtonStyle.circle}
      ></Animated.View>
    </TouchableOpacity>
  )
}
export default SwitchButton
