import React, { useRef, useState } from 'react';
import { Animated, Easing, Image, Text, TouchableOpacity, View } from 'react-native';
import { assets } from '~/styles/app/assets';
import { HamburgerMenuStyle } from '~/styles/app/components/common/HamburgerMenuStyle';
import { iconStyles, textStyles } from '~/styles/globalStyles';

interface Content {
    id: string;
    name: string;
    icon: string;
}
interface HamburgerProps {
    title: string;
    data: Content[];
    onItemPress?: () => void;
    onPress?: () => void;
}
const HamburgerMenu: React.FC<HamburgerProps> = ({
    title,
    data,
    onPress,
    onItemPress
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const animationValue = useRef(new Animated.Value(0)).current;

    const toggleExpanded = () => {
        setIsExpanded(prev => !prev);
        Animated.timing(animationValue, {
            toValue: isExpanded ? 0 : 1,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
        if (onPress) onPress();
    };
    const heightInterpolate = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 40 * data.length],
    });
    const rotateInterpolate = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'], 
    });
    const animatedStyle = {
        transform: [{ rotate: rotateInterpolate }],
    };

    return (
        <View style={HamburgerMenuStyle.container}>
            <TouchableOpacity onPress={toggleExpanded} activeOpacity={1}
                style={HamburgerMenuStyle.header}>
                <Text style={isExpanded  ? HamburgerMenuStyle.text : HamburgerMenuStyle.textBlue}>{title}</Text>
                {data.length > 0 && (
                    <Animated.Image 
                        style={[HamburgerMenuStyle.icon,animatedStyle]} 
                        source={isExpanded ? assets.icon.arrowDownBlue : assets.icon.arrowDown} 
                    />
                )}
            </TouchableOpacity>
            <Animated.View style={[HamburgerMenuStyle.menuContainer, { height: heightInterpolate }]}>
                {isExpanded && (
                    <View style={HamburgerMenuStyle.menuContainer}>
                        {data?.map((item) => (
                            <TouchableOpacity key={item.id} style={HamburgerMenuStyle.itemContainer} onPress={onItemPress}>
                                {item.icon && <Image source={{ uri: item.icon }} style={iconStyles.icon20}/>}
                                <Text style={textStyles.body_md}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </Animated.View>
        </View>
    );
};

export default HamburgerMenu;
