// @flow
import * as React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { colors } from 'Theme';
import Text from './Text';

type TextInputProps = React.ElementProps<typeof RNTextInput>;

type Props = {
  ...TextInputProps,
  label?: string,
};

export default class TextInput extends React.Component<Props> {
  input: RNTextInput | null;

  static defaultProps = {
    label: undefined,
  };

  render() {
    const { label, style, ...props } = this.props;
    const inputStyles = [styles.input];
    if (style) {
      inputStyles.push(style);
    }
    return (
      <TouchableWithoutFeedback onPress={this.focus}>
        <View style={styles.container}>
          {label && <Text style={styles.label}>{label}</Text>}
          <RNTextInput
            ref={ref => {
              this.input = ref;
            }}
            style={styles.input}
            {...props}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  focus = () => {
    if (this.input) this.input.focus();
  };
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderBottomColor: colors.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 16,
    paddingHorizontal: 2,
  },
  fieldContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
  },
  input: {
    color: colors.secondary,
    fontSize: 15,
    height: 19,
    marginVertical: 8,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  label: {
    color: colors.primary,
    fontSize: 13,
  },
});
