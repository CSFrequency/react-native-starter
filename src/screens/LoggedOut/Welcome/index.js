// @flow
import React from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { type NavigationScreenProp } from 'react-navigation';
import assets from 'Assets';
import { Button, Screen, Text } from 'Components';
import { colors } from 'Theme';

type Props = {
  navigation: NavigationScreenProp<any>,
};

export default class LoggedOutHome extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Screen statusBarHidden>
        <View style={styles.header}>
          <Image
            resizeMode="contain"
            source={assets.logo}
            style={styles.logo}
          />
          <Text style={styles.title}>React Native Starter</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            buttonStyle={styles.button}
            onPress={this.onLogin}
            title="Login"
          />
          <Button
            buttonStyle={styles.button}
            onPress={this.onRegister}
            title="Register"
          />
        </View>
      </Screen>
    );
  }

  onLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('Login');
  };

  onRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Registration');
  };
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    marginHorizontal: 48,
    ...Platform.select({
      android: {
        marginVertical: 4,
      },
    }),
  },
  buttons: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
  },
});
