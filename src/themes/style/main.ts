import { css, SerializedStyles } from '@emotion/core';
import ThemeProps from '../types';
import resetCss from './resetCss';

export default ({ theme }: ThemeProps): SerializedStyles => css`
	${resetCss}
	html {
		font-family: ${theme.typography.fontFamily};
		font-size: ${theme.typography.baseFontSize};
		color: ${theme.color.text};
	}
`;
