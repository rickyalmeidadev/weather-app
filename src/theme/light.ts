import fonts from './fonts';
import spacing from './spacing';
import sizes from './sizes';
import type { Theme } from './types';

const light: Theme = {
  scheme: 'light',
  colors: {
    primary: '#ec6e4c',
    background: '#ffffff',
    surface: '#eeeeee',
    text: '#38383a',
    muted: '#8a8a8a',
  },
  fonts,
  spacing,
  sizes,
};

export default light;
