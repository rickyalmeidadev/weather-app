import fonts from './fonts';
import spacing from './spacing';
import sizes from './sizes';
import type { Theme } from './types';

const dark: Theme = {
  scheme: 'dark',
  colors: {
    primary: '#ec6e4c',
    background: '#111111',
    surface: '#222222',
    text: '#f2f2f1',
    muted: '#8a8a8a',
  },
  fonts,
  spacing,
  sizes,
};

export default dark;
