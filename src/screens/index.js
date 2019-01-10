// @flow
import { useScreens } from 'react-native-screens';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { defaultNavigationOptions } from 'Theme';
import Initialising from './Initialising';
import LoggedInStack from './LoggedIn';
import LoggedOutStack from './LoggedOut';

// Enable react-native-screens
useScreens();

/**
 * The main application is divided into 3 states:
 *
 * 1) Initialising - the app is loading, e.g. checking the authentication state
 * 2) Logged Out - the logged out application flow
 * 3) Logged In - the logged in application flow
 */
const Switch = createSwitchNavigator(
  {
    Initialising,
    LoggedIn: LoggedInStack,
    LoggedOut: LoggedOutStack,
  },
  {
    initialRouteName: 'Initialising',
  }
);
Switch.navigationOptions = {
  header: null,
};

/**
 * To support screens that can be shown in both logged out and logged in flows
 * we add an additional stack navigator which allows the screens to be specified
 * in one place, rather than in both the logged in and logged out stacks.
 * e.g. Privacy Policy or Terms of Use
 */
const AppNavigator = createStackNavigator(
  {
    Switch,
    // Add shared screens here
  },
  {
    defaultNavigationOptions,
    initialRouteName: 'Switch',
  }
);

export default createAppContainer(AppNavigator);
