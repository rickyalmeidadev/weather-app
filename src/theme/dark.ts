import fonts from './fonts';
import spacing from './spacing';
import sizes from './sizes';
import type { Theme } from './types';

const dark: Theme = {
  scheme: 'dark',
  colors: {
    primary: '#ec6e4c',
    background: '#111111',
    text: '#ffffff',
    muted: '#8a8a8a',
    success: '#5cb85c',
    error: '#a94442',
  },
  fonts,
  spacing,
  sizes,
};

export default dark;
