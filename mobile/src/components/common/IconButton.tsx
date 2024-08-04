import { Image, ImageProps, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { iconStyles } from '~/styles/globalStyles';
import { AppButtonStyle } from '~/styles/components/common/AppButtonStyle';

interface IconButtonProps {
    onPress?: () => void,
    icon?: ImageProps;
    disabled?: boolean;
    positionStyle?: StyleProp<ViewStyle>;
}
const IconButton: React.FC<IconButtonProps> = ({
    onPress,
    icon,
    disabled = false,
    positionStyle,
}) => {
    return (
        <TouchableOpacity
            style={[
                iconStyles.icon24,
                disabled && AppButtonStyle.disabled,
                positionStyle,
            ]} 
            onPress={onPress}>
            <Image style={iconStyles.icon24} source={icon} />
        </TouchableOpacity>
    )
}
export default IconButton
