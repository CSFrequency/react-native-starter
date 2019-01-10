// @flow
import React from 'react';
import { type NavigationScreenProp } from 'react-navigation';
import { Button, Screen, Text } from 'Components';

type Props = {
  navigation: NavigationScreenProp<any>,
};

export default class ForgottenPassword extends React.Component<Props> {
  static navigationOptions = {
    title: 'Forgotten Password',
  };

  render() {
    return (
      <Screen centerHorizontal centerVertical>
        <Text>This is the forgotten password screen</Text>
        <Button onPress={this.onResetPassword} title="Reset Password" />
      </Screen>
    );
  }

  onResetPassword = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };
}
