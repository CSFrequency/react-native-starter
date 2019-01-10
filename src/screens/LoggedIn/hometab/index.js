// @flow
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { TabBarIcon } from 'Components';
import { defaultNavigationOptions } from 'Theme';
import Home from './Home';

export default createStackNavigator(
  {
    // $FlowExpectedError - react-navigation erroneous flow types
    Home,
  },
  // navigationOptions is needed for the parent tab container
  // $FlowExpectedError
  {
    defaultNavigationOptions,
    initialRouteName: 'Home',
    navigationOptions: () => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
      tabBarLabel: 'Home',
    }),
  }
);
