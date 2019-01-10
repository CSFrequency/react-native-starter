// @flow
import { createStackNavigator } from 'react-navigation';

import { defaultNavigationOptions } from 'Theme';
import Login from './Login';
import ForgottenPassword from './ForgottenPassword';
import Registration from './Registration';
import Welcome from './Welcome';

/**
 * We use a Stack Navigator for all the logged out screens
 */
export default createStackNavigator(
  {
    // $FlowExpectedError - react-navigation erroneous flow types
    ForgottenPassword,
    // $FlowExpectedError - react-navigation erroneous flow types
    Login,
    // $FlowExpectedError - react-navigation erroneous flow types
    Registration,
    // $FlowExpectedError - react-navigation erroneous flow types
    Welcome,
  },
  {
    defaultNavigationOptions,
    initialRouteName: 'Welcome',
  }
);
