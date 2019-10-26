import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import mainStyle from 'themes/style/main';

const Base = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={mainStyle({ theme })} />
      {children}
    </ThemeProvider>
  );
};

Base.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default Base;
