import { Image, ImageProps, StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import { buttonStyles, iconStyles, textStyles } from '~/styles/globalStyles';
import { AppButtonStyle } from '~/styles/app/components/common/AppButtonStyle';

interface ButtonProps {
    title?: string;
    onPress: () => void;
    disabled?: boolean;
    leftIcon?: ImageProps;
    rightIcon?: ImageProps;
    positionStyle?: StyleProp<ViewStyle>;
}
const AppButton: React.FC<ButtonProps> = ({
    title,
    onPress,
    disabled = false,
    leftIcon,
    rightIcon,
    positionStyle,
}) => {
    return (
        <TouchableOpacity
            onPress={!disabled ? onPress : undefined} 
            style={[AppButtonStyle.container, positionStyle, disabled && { opacity: 0.5 }]}
            disabled={disabled}
        >
            {leftIcon ?  <Image source={leftIcon} style={iconStyles.icon24}/> : null}
            <Text style={[AppButtonStyle.text]}>{title}</Text>
            {rightIcon ? <Image  source={rightIcon} style={iconStyles.icon24}/> : null}
        </TouchableOpacity>
    );
};
export default AppButton;

