// @flow
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { type NavigationScreenProp } from 'react-navigation';

import { Screen } from 'Components';

type Props = {
  navigation: NavigationScreenProp<any>,
};

export default class Initialising extends React.PureComponent<Props> {
  componentDidMount() {
    const { navigation } = this.props;
    // Add your initialisation logic here e.g. checking authentication state
    // Once initialised, either redirect to the LoggedIn or LoggedOut stack
    setTimeout(() => {
      navigation.navigate('LoggedOut');
    }, 1000);
  }

  render() {
    return (
      <Screen centerHorizontal centerVertical>
        <ActivityIndicator size="large" />
      </Screen>
    );
  }
}
