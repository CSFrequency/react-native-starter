// @flow
const PRIMARY = '#c20006';
const SECONDARY = '#454647';

export const colors = {
  primary: PRIMARY,
  secondary: SECONDARY,
  text: SECONDARY,
  white: '#fff',
};

export const defaultNavigationOptions = {
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: colors.primary,
    borderBottomWidth: 0,
  },
  headerTintColor: colors.white,
};
