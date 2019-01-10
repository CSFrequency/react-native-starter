// @flow
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { type NavigationScreenProp } from 'react-navigation';

import assets from 'Assets';
import { Button, Screen, Text } from 'Components';

type Props = {
  navigation: NavigationScreenProp<any>,
};

export default class Home extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Screen centerHorizontal centerVertical>
        <View style={styles.header}>
          <Image
            resizeMode="contain"
            source={assets.logo}
            style={styles.logo}
          />
          <Text>You are logged in</Text>
        </View>
        <View style={styles.buttons}>
          <Button onPress={this.onLogout} title="Logout" />
        </View>
      </Screen>
    );
  }

  onLogout = () => {
    // Add proper logout functionality here
    const { navigation } = this.props;
    navigation.navigate('LoggedOut');
  };
}

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 300,
  },
});
