import { StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';

function TestScrean() {
    const width = useSharedValue(50);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: width.value,
        };
    });

    // attach animated style to a View using style property
    return <Animated.View style={[styles.box, animatedStyle]} />;
}

const styles = StyleSheet.create({
    box: {
        height: 50,
        backgroundColor: 'blue',
    },
});

export default TestScrean;