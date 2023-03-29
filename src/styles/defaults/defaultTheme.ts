import buttonStyles from './button';
import commonStyles from './common';
import frameStyles from './frame';
import potionStyles from './potion';
import { type DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  button: buttonStyles,
  common: commonStyles,
  frame: frameStyles,
  potion: potionStyles,
};

export { defaultTheme };
