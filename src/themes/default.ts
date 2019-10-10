const DefaultTheme = {
  typography: {
    fontFamily: 'Open Sans, Sans-Serif, Arial, Helvetica',
    baseFontSize: '16px',
  },
  color: {
    primary: '#d81b60',
    primaryLight: '#ff5c8d',
    primaryDark: '#a00037',
    secondary: '#546e7a',
    secondaryLight: '#819ca9',
    secondaryDark: '#29434e',
    text: '#000',
    textOn: '#fff',
  },
  size: {
    button: {
      default: {
        width: '100%',
        height: '35px',
        padding: '15px 0',
      },
      small: {
        width: '84px',
        height: '35px',
        padding: '12px 0',
      },
      medium: {
        width: '104px',
        height: '45px',
        padding: '15px 0',
      },
      large: {
        width: '290px',
        height: '45px',
        padding: '15px 0',
      },
    },
  },
  shadow: {
    dp2Elevation: `0px 1px 5px rgba(0, 0, 0, 0.2), 
		0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)`,
    blurrish: '0px 0px 14px rgba(46, 49, 79, 0.25)',
    nav: '0px 2px 2px rgba(0, 0, 0, 0.25)',
    boxes: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
};

export default DefaultTheme;
