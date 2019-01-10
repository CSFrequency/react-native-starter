// @flow
import * as React from 'react';
import { YellowBox } from 'react-native';

import App from './screens';

// This can be used to ignore spurious warnings in React Native
// or specific libraries
YellowBox.ignoreWarnings([]);

export default () => <App />;
