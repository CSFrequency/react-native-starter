// @flow
import * as React from 'react';
import { Text } from 'react-native';

type Props = React.ElementProps<typeof Text>;

export default ({ ...props }: Props) => <Text {...props} />;
