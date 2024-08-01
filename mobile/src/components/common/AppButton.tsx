import { Image, ImageProps, StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import { buttonStyles, iconStyles, textStyles } from '~/styles/globalStyles';
import { AppButtonStyle } from '~/styles/app/components/common/AppButtonStyle';

interface ButtonProps {
    title?: string;
    onPress: () => void;
    disabled?: boolean;
    outline?: boolean;
    leftIcon?: ImageProps;
    rightIcon?: ImageProps;
    positionStyle?: StyleProp<ViewStyle>;
}
const AppButton: React.FC<ButtonProps> = ({
    title,
    onPress,
    disabled = false,
    outline,
    leftIcon,
    rightIcon,
    positionStyle,
}) => {
    return (
        <TouchableOpacity
            style={[
                AppButtonStyle.container,
                positionStyle,
                disabled && AppButtonStyle.disabled,
                outline ? buttonStyles.outline : buttonStyles.solid,
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            {leftIcon && <Image source={leftIcon} style={iconStyles.icon24} />}
            <Text style={outline ? AppButtonStyle.textOutline : AppButtonStyle.text}>{title}</Text>
            {rightIcon && <Image source={rightIcon} style={iconStyles.icon24} />}
        </TouchableOpacity>
    );
};
export default AppButton;

