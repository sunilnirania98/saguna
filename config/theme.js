import {Dimensions, StyleSheet} from 'react-native';
export const {width, height} = Dimensions.get('window');

// Global Colors
export const colors = {
  primary: '#9D51E7',

  //Colors
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  pinkLight: '#FFB6C1',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
  white: '#fff',
  gray: '#6c757d',
  grayDark: '#343a40',
  grayLight: '#D3D3D3',
  gold: '#FFD700',

  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#212121',
  black: '#000000',
};

export const sizes = {
  // Font sizes
  base: 8,
  font: 14,
  padding: 8,
  margin: 8,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  body: 14,
  input: 16,
  small: 8,
  large: 38,

  //Radius
  radius: 6,
  radius_circle: width / 2,

  // app dimensions
  width,
  height,
};

// Global Style
export const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: sizes.padding,
    paddingHorizontal: sizes.padding * 2,
  },

  section: {
    marginTop: sizes.margin,
    marginBottom: sizes.margin * 2,
  },

  heading: {
    color: colors.dark,
    fontSize: sizes.h2,
    fontWeight: 'bold',
    marginBottom: sizes.margin,
  },

  text: {
    fontSize: sizes.body,
    color: colors.dark,
    marginBottom: sizes.margin,
  },

  address: {
    maxWidth: sizes.width / 2,
    flexWrap: 'wrap',
  },

  btnLink: {},
  btnLinkText: {
    color: colors.primary,
  },

  /**FormStyle */
  formInputBox: {
    borderWidth: 1,
    borderRadius: sizes.radius,
    borderColor: colors.grayLight,
    marginBottom: sizes.margin * 1.5,
  },
  formInput: {
    fontSize: sizes.input,
  },

  formGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formGroupBox: {
    flex: 0.49,
    borderWidth: 1,
    borderRadius: sizes.radius,
    borderColor: colors.grayLight,
    marginBottom: sizes.margin * 1.5,
  },

  formButton: {
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.radius,
    padding: sizes.padding,
    backgroundColor: colors.primary,
  },
  formButtonText: {
    fontSize: sizes.body,
    color: colors.white,
    textAlign: 'center',
  },
});

export default {colors, sizes, appStyle};
