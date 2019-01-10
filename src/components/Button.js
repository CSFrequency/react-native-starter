// @flow
import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from 'Theme';

type TextProps = React.ElementProps<typeof Text>;
type TextStyle = $PropertyType<TextProps, 'style'>;
type ViewProps = React.ElementProps<typeof View>;
type ViewStyle = $PropertyType<ViewProps, 'style'>;

export type Props = {|
  accessibilityLabel?: string,
  buttonStyle?: ViewStyle,
  disabled?: boolean,
  onPress: any => any,
  textStyle?: TextStyle,
  title: string,
|};

const Button = ({
  accessibilityLabel,
  buttonStyle,
  disabled,
  onPress,
  textStyle,
  title,
}: Props) => {
  const accessibilityStates = [];
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (disabled) {
    buttonStyles.push(styles.buttonDisabled);
    textStyles.push(styles.textDisabled);
    accessibilityStates.push('disabled');
  }

  buttonStyles.push(buttonStyle);
  textStyles.push(textStyle);

  const Touchable =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Touchable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityStates={accessibilityStates}
      disabled={disabled}
      onPress={onPress}
    >
      <View style={buttonStyles}>
        <Text disabled={disabled} style={textStyles}>
          {title}
        </Text>
      </View>
    </Touchable>
  );
};

Button.defaultProps = {
  accessibilityLabel: undefined,
  buttonStyle: undefined,
  disabled: false,
  textStyle: undefined,
};

export default Button;

const styles = StyleSheet.create({
  button: {
    ...Platform.select({
      ios: {},
      android: {
        elevation: 4,
        backgroundColor: colors.primary,
        borderRadius: 2,
      },
    }),
  },
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: '#dfdfdf',
    },
  }),
  text: {
    textAlign: 'center',
    padding: 8,
    ...Platform.select({
      ios: {
        color: colors.primary,
        fontSize: 18,
      },
      android: {
        color: 'white',
        fontWeight: '500',
      },
    }),
  },
  textDisabled: Platform.select({
    ios: {
      color: '#cdcdcd',
    },
    android: {
      color: '#a1a1a1',
    },
  }),
});
