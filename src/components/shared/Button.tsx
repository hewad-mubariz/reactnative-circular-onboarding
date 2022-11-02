import React from 'react';
import {TouchableOpacity, ViewStyle, StyleProp, Pressable} from 'react-native';
import {isPlatformAndroid} from '../../constants/index';

type ButtonProps = React.ComponentProps<typeof TouchableOpacity> & {
  withoutFeedback?: boolean;
  withHitSlop?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Button = (props: ButtonProps) => {
  const {withoutFeedback = false, children, style, ...rest} = props;

  const nativeAndroidButton = () => (
    <Pressable
      testID="pressable"
      style={[style, {overflow: 'hidden'}]}
      {...rest}>
      {children}
    </Pressable>
  );

  const touchableOpacity = () => (
    <TouchableOpacity testID="touchableOpacity" {...{style}} {...rest}>
      {children}
    </TouchableOpacity>
  );

  if (isPlatformAndroid) {
    return nativeAndroidButton();
  } else {
    return touchableOpacity();
  }
};

export default Button;
