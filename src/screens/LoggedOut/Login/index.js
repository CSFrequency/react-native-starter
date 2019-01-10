// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import { type NavigationScreenProp } from 'react-navigation';
import { Button, Link, Screen, TextInput } from 'Components';

type Props = {
  navigation: NavigationScreenProp<any>,
};
type State = {
  email: string,
  password: string,
};

export default class Login extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Login',
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
          onSubmitEditing={this.onLogin}
          ref={ref => {
            this.passwordInput = ref;
          }}
          value={password}
          secureTextEntry
        />
        <Link
          linkStyle={styles.link}
          onPress={this.onForgottenPassword}
          title="Forgot your password?"
        />
        <Button
          buttonStyle={styles.button}
          disabled={!email || !password}
          onPress={this.onLogin}
          title="Login"
        />
      </Screen>
    );
  }

  onEmailChangeText = (email: string) => {
    this.setState({ email });
  };

  onForgottenPassword = () => {
    const { navigation } = this.props;
    navigation.navigate('ForgottenPassword');
  };

  onPasswordChangeText = (password: string) => {
    this.setState({ password });
  };

  onLogin = () => {
    // Add proper login functionality here
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
  link: {
    alignSelf: 'flex-end',
    marginTop: 4,
  },
});
