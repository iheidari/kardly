import { css } from '@emotion/core';
import resetCss from './resetCss';

export default ({ theme }) => css`
  ${resetCss}
  html {
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.baseFontSize};
    color: ${theme.color.text};
    height: 100%;
  }
  body {
    background-color: ${theme.color.background};
    height: 100%;
    min-height: 100%;
    position: relative;
  }
`;
