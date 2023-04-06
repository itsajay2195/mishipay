export const COLORS = {
    colors: {
      primary: '#007aff',
      secondary: '#6c757d',
      success: '#28a745',
      danger: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8',
      light: '#f2f2f2',
      dark: '#343a40',
      white: '#FFFFFF',
      red: '#ff0000',
      blue: '#0000FF',
      grey: '#808080',
      blueSecondary: '#8FB1CC',
      black: '#000000',
    },
  };
  
  export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 15,
    padding: 20,
  
    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 20,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
  
    // app dimensions
    width,
    height,
  };
  export const FONTS = {
    largeTitle: {fontFamily: 'Roboto-Black', fontSize: SIZES.largeTitle},
    h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
    h5: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h5, lineHeight: 22},
    body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
    body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
  };
  
  const appTheme = {COLORS, SIZES, FONTS};
  
  export default appTheme;
  