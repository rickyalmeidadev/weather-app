import { useColorScheme } from 'react-native';
import { dark, light } from '@app/theme';
import type { Theme } from '@app/theme';

const useTheme = (): Theme => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? dark : light;
};

export default useTheme;
