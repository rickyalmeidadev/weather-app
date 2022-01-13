import { useWindowDimensions } from 'react-native';
import { useTheme } from '@app/hooks';
import { Theme } from '@app/theme';
import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

type StyleSheet = {
  [key: string]: StyleProp<ImageStyle | TextStyle | ViewStyle>;
};

type Dimensions = ReturnType<typeof useWindowDimensions>;

type FactoryParams = {
  theme: Theme;
  dimensions: Dimensions;
};

type Factory<T> = (params: FactoryParams) => T;

export const makeStyles = <T extends StyleSheet>(styles: Factory<T> | T) => {
  return () => {
    const dimensions = useWindowDimensions();
    const theme = useTheme();
    return typeof styles === 'function'
      ? styles({ dimensions, theme })
      : styles;
  };
};
