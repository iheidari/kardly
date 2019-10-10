import DefaultTheme from './default';

export type Theme = typeof DefaultTheme;

interface ThemeProps {
  theme: Theme;
}

export default ThemeProps;
