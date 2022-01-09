import fonts from './fonts';
import metrics from './metrics';
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
  metrics,
};

export default light;
