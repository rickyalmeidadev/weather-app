import { Platform } from 'react-native';

const fonts = {
  regular: 'Roboto_400Regular',
  bold: 'Roboto_700Bold',
  monospace: Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace',
};

export default fonts;
