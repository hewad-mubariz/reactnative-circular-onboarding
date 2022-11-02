import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Svg, {Circle} from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Button from '../shared/Button';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const radius = 30;
const circumference = radius * Math.PI * 2;
type Props = {
  index: number;
  onPress: () => void;
  screensLenght: number;
};
const CircularButton = ({screensLenght, onPress, index}: Props) => {
  const strokeOffset = useSharedValue(circumference);
  const animatedCircleProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(strokeOffset.value, {duration: 500}),
    };
  });
  useEffect(() => {
    let percentage = circumference / screensLenght;
    strokeOffset.value = circumference - percentage * (index + 1);
  }, [index]);
  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Svg height="100" width="100">
        <Circle cx="50" cy="50" r="30" stroke="lightblue" strokeWidth="1" />
        <AnimatedCircle
          animatedProps={animatedCircleProps}
          cx="50"
          cy="50"
          r={radius}
          stroke="#4fafb0"
          strokeWidth="2"
          strokeLinecap={'round'}
          strokeDasharray={`${radius * Math.PI * 2}`}
        />
      </Svg>

      <Button
        onPress={onPress}
        style={{
          padding: 12,
          backgroundColor: '#d3eeee',
          borderRadius: 20,
          position: 'absolute',
        }}>
        <Feather name="arrow-right" size={15} color={'black'} />
      </Button>
    </View>
  );
};

export default CircularButton;

const styles = StyleSheet.create({});
