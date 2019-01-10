// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import { type NavigationScreenProp } from 'react-navigation';
import { Button, Screen, TextInput } from 'Components';

type Props = {
  navigation: NavigationScreenProp<any>,
};
type State = {
  email: string,
  password: string,
};

export default class Registration extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Registration',
  };

  passwordInput: TextInput | null;

  state = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;
    return (
      <Screen centerHorizontal paddedHorizontal paddedVertical>
        <TextInput
          autoCapitalize="none"
          onChangeText={this.onEmailChangeText}
          keyboardType="email-address"
          label="Email"
          onSubmitEditing={() =>
            this.passwordInput && this.passwordInput.focus()
          }
          spellCheck={false}
          value={email}
        />
        <TextInput
          autoCapitalize="none"
          label="Password"
          onChangeText={this.onPasswordChangeText}
          onSubmitEditing={this.onRegister}
          ref={ref => {
            this.passwordInput = ref;
          }}
          value={password}
          secureTextEntry
        />
        <Button
          buttonStyle={styles.button}
          disabled={!email || !password}
          onPress={this.onRegister}
          title="Register"
        />
      </Screen>
    );
  }

  onEmailChangeText = (email: string) => {
    this.setState({ email });
  };

  onPasswordChangeText = (password: string) => {
    this.setState({ password });
  };

  onRegister = () => {
    // Add proper registration functionality here
    // const { email, password } = this.state;
    const { navigation } = this.props;
    navigation.navigate('LoggedIn');
  };
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    marginHorizontal: 48,
    marginTop: 24,
  },
});
