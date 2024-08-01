import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import { buttonStyles, textStyles } from '~/styles/globalStyles';

interface ButtonProps {
    title?: string;
    onClick: () => void;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    positionStyle?: StyleProp<ViewStyle>;
}

const AppButton: React.FC<ButtonProps> = ({
    title,
    onClick,
    disabled = false,
    leftIcon,
    rightIcon,
    positionStyle,
}) => {
    return (
        <TouchableOpacity
            onPress={!disabled ? onClick : undefined} 
            style={[buttonStyles.solid, positionStyle, disabled && { opacity: 0.5 }]}
            disabled={disabled}
        >
            {leftIcon}
            <Text style={textStyles.button_lg}>{title}</Text>
            {rightIcon}
        </TouchableOpacity>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    // Your styles here if needed
});
