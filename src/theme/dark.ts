import fonts from './fonts';
import metrics from './metrics';
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
  metrics,
};

export default dark;
