// @flow
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';

const DEFAULT_SIZE_MULTIPLIER = 0.7;
const DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER = 0.2;

const styles = StyleSheet.create({
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});

type Props = {
  size?: number,
  innerColor?: string,
  outerColor?: string,
  checked: boolean,
  onPress: () => void
};

const RadioButton = ({
  size,
  innerColor,
  outerColor,
  checked,
  onPress,
  ...props
}: Props) => {
  const outerStyle = {
    borderColor: outerColor,
    width: size + size * DEFAULT_SIZE_MULTIPLIER,
    height: size + size * DEFAULT_SIZE_MULTIPLIER,
    borderRadius: (size + size * DEFAULT_SIZE_MULTIPLIER) / 2,
    borderWidth: size * DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER
  };

  const innerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: innerColor
  };

  return (
    <TouchableOpacity style={[styles.radio, outerStyle]} onPress={onPress}>
      {checked ? <View style={innerStyle} {...props} /> : null}
    </TouchableOpacity>
  );
};

RadioButton.defaultProps = {
  size: 16,
  innerColor: 'dodgerblue',
  outerColor: 'dodgerblue'
};

export default RadioButton;
