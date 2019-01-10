// @flow
import * as React from 'react';
import {
  Dimensions,
  Keyboard,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { colors } from 'Theme';

type ViewProps = React.ElementProps<typeof View>;
type ViewStyle = $PropertyType<ViewProps, 'style'>;

type Props = {|
  centerHorizontal?: boolean,
  centerVertical?: boolean,
  children: React.Node,
  hasTabBar?: boolean,
  paddedHorizontal?: boolean,
  paddedVertical?: boolean,
  scrollable?: boolean,
  statusBarHidden?: boolean,
  style?: ViewStyle,
|};

type State = {|
  bottom: number,
|};

export default class Screen extends React.PureComponent<Props, State> {
  keyboardWillHideObserver: any;

  keyboardWillShowObserver: any;

  static defaultProps = {
    centerHorizontal: false,
    centerVertical: false,
    hasTabBar: false,
    paddedHorizontal: false,
    paddedVertical: false,
    scrollable: false,
    statusBarHidden: false,
    style: undefined,
  };

  state = {
    bottom: 0,
  };

  componentWillMount() {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowObserver = Keyboard.addListener(
        'keyboardWillShow',
        this.onKeyboardWillShow
      );
      this.keyboardWillHideObserver = Keyboard.addListener(
        'keyboardWillHide',
        this.onKeyboardWillHide
      );
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') {
      if (this.keyboardWillShowObserver) this.keyboardWillShowObserver.remove();
      if (this.keyboardWillHideObserver) this.keyboardWillHideObserver.remove();
    }
  }

  render() {
    const {
      centerHorizontal,
      centerVertical,
      children,
      paddedHorizontal,
      paddedVertical,
      scrollable,
      statusBarHidden,
      style,
    } = this.props;
    const { bottom } = this.state;

    if (scrollable) {
      return (
        <ScrollView
          contentContainerStyle={[
            centerHorizontal && styles.centerHorizontal,
            centerVertical && styles.centerVertical,
            paddedHorizontal && styles.paddedHorizontal,
            paddedVertical && styles.paddedVertical,
            style,
          ]}
          keyboardShouldPersistTaps="always"
          style={[styles.container, { bottom }]}
        >
          <StatusBar
            animated
            barStyle="light-content"
            hidden={statusBarHidden}
          />
          {children}
        </ScrollView>
      );
    }

    return (
      <View
        style={[
          styles.container,
          { bottom },
          centerHorizontal && styles.centerHorizontal,
          centerVertical && styles.centerVertical,
          paddedHorizontal && styles.paddedHorizontal,
          paddedVertical && styles.paddedVertical,
          style,
        ]}
      >
        <StatusBar animated barStyle="light-content" hidden={statusBarHidden} />
        {children}
      </View>
    );
  }

  onKeyboardWillShow = (e: any) => {
    const { hasTabBar } = this.props;
    this.setState({
      bottom: hasTabBar
        ? e.endCoordinates.height - tabBarOffset
        : e.endCoordinates.height,
    });
  };

  onKeyboardWillHide = () => {
    this.setState({
      bottom: 0,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  centerHorizontal: {
    alignItems: 'center',
  },
  centerVertical: {
    justifyContent: 'center',
  },
  paddedHorizontal: {
    paddingHorizontal: 16,
  },
  paddedVertical: {
    paddingVertical: 16,
  },
});

// Calculate the offset required for the tab bar when the keyboard shows
const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

const isIPhoneX = (() =>
  Platform.OS === 'ios' &&
  ((windowHeight === X_HEIGHT && windowWidth === X_WIDTH) ||
    (windowHeight === X_WIDTH && windowWidth === X_HEIGHT) ||
    (windowHeight === XSMAX_HEIGHT && windowWidth === XSMAX_WIDTH) ||
    (windowHeight === XSMAX_WIDTH && windowWidth === XSMAX_HEIGHT)))();

// eslint-disable-next-line no-nested-ternary
const tabBarOffset = Platform.OS === 'ios' ? (isIPhoneX ? 83 : 49) : 0;
