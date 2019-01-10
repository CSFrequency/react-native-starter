// @flow
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { colors } from 'Theme';
import Text from './Text';

type TextProps = React.ElementProps<typeof Text>;
type TextStyle = $PropertyType<TextProps, 'style'>;
type ViewProps = React.ElementProps<typeof View>;
type ViewStyle = $PropertyType<ViewProps, 'style'>;

type Props = {|
  linkStyle?: ViewStyle,
  onPress: () => any,
  textStyle?: TextStyle,
  title: string,
|};

const Link = ({ linkStyle, onPress, title, textStyle, ...props }: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, linkStyle]}
    {...props}
  >
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

Link.defaultProps = {
  linkStyle: undefined,
  textStyle: undefined,
};

export default Link;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: colors.primary,
    fontSize: 13,
  },
});
