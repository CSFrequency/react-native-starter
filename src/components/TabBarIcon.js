// @flow
import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const iconSize = Platform.OS === 'ios' ? 30 : 24;

type Props = {
  focused: boolean,
  name: string,
};

export default ({ focused, name }: Props) => (
  <Icon color={focused ? '#c20006' : '#454647'} name={name} size={iconSize} />
);
