// @flow
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { colors } from 'Theme';

import HomeTab from './hometab';

/**
 * The main logged in functionality is contained within a Tab Navigator.
 *
 * Each tab is itself a Stack Navigator to allow multiple screens to be
 * displayed within each tab.
 */
const Tabs = createBottomTabNavigator(
  {
    HomeTab,
    // Add additional tabs here
  },
  {
    initialRouteName: 'HomeTab',
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.secondary,
      // showLabel: false,
    },
  }
);

/**
 * In addition, we use a Stack Navigator to allow us to present screens as
 * a modal over the top of the tabs.
 */
export default createStackNavigator(
  {
    Tabs,
    // Add modal screens here
  },
  {
    headerMode: 'none',
    initialRouteName: 'Tabs',
    mode: 'modal',
  }
);
