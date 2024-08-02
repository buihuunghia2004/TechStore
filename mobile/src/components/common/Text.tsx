import React, { useRef, useState } from 'react';
import { Animated, Easing as RN_Easing, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

// Alias `Easing` as `RN_Easing` to avoid the TypeScript issue
const Easing = RN_Easing;

const EasingExample: React.FC = () => {
    const animationValue = useRef(new Animated.Value(0)).current;
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAnimation = (easing: Easing.EasingFunction) => {
        setIsExpanded(prev => !prev);
        Animated.timing(animationValue, {
            toValue: isExpanded ? 0 : 1,
            duration: 1000,
            easing: easing,
            useNativeDriver: false,
        }).start();
    };

    const translateY = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100],
    });

    const animatedStyle = {
        transform: [{ translateY }],
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => toggleAnimation(Easing.linear)}>
                <Text style={styles.buttonText}>Linear</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleAnimation(Easing.ease)}>
                <Text style={styles.buttonText}>Ease</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleAnimation(Easing.quad)}>
                <Text style={styles.buttonText}>Quad</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleAnimation(Easing.cubic)}>
                <Text style={styles.buttonText}>Cubic</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleAnimation(Easing.sin)}>
                <Text style={styles.buttonText}>Sin</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleAnimation(Easing.bounce)}>
                <Text style={styles.buttonText}>Bounce</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleAnimation(Easing.elastic(1))}>
                <Text style={styles.buttonText}>Elastic</Text>
            </TouchableOpacity>
            <Animated.View style={[animatedStyle, styles.animatedBox]}>
                {/* Nội dung của view */}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        margin: 10,
    },
    animatedBox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        marginTop: 20,
    },
});

export default EasingExample;
