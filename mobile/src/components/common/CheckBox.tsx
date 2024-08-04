import { Image, StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { iconStyles, textStyles } from '~/styles/globalStyles'
import { CheckBoxStyle } from '~/styles/components/common/CheckBoxStyle';
import { assets } from '~/styles/app/assets';

interface CheckBoxProps {
    title?: string;
    sub?: string;
    onPress?: () => void;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    checked?: boolean;
    positionStyle?: StyleProp<ViewStyle>;
}
const CheckBox: React.FC<CheckBoxProps> = ({
    title,
    sub,
    onPress,
    onChange,
    disabled = false,
    checked = false
}) => {
    const handlePress = () => {
        if (!disabled) {
            onPress?.();
            onChange?.(!checked);
        }
    };
    return (
        <TouchableOpacity
            style={CheckBoxStyle.container}
            onPress={handlePress}
            disabled={disabled}
        >
            <Image
                source={checked ? assets.icon.checkBook : assets.icon.unCheckBook}
                style={iconStyles.icon24}
            />
            {title && <Text style={CheckBoxStyle.text}>{title}</Text>}
            {sub && <Text style={textStyles.body_sm}>{sub}</Text>}
        </TouchableOpacity>
    )
}
export default CheckBox