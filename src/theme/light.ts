import fonts from './fonts';
import spacing from './spacing';
import sizes from './sizes';
import type { Theme } from './types';

const light: Theme = {
  scheme: 'light',
  colors: {
    primary: '#ec6e4c',
    background: '#ffffff',
    text: '#111111',
    muted: '#8a8a8a',
    success: '#5cb85c',
    error: '#a94442',
  },
  fonts,
  spacing,
  sizes,
};

export default light;
