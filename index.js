// @flow
import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

// $FlowExpectedError - react-navigation flow type error
AppRegistry.registerComponent(appName, () => App);
