import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import ThemeProps from 'src/themes/types';
import mainStyle from 'src/themes/style/main';
import { ReactChildProp } from 'src/components/types';

const Base: React.FC<ThemeProps & ReactChildProp> = ({
  theme,
  children,
}: ThemeProps & ReactChildProp) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={mainStyle({ theme })} />
      {children}
    </ThemeProvider>
  );
};

export default Base;
