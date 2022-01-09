import { useTheme } from '@app/hooks';
import { Theme } from '@app/theme';
import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

type StyleSheet = {
  [key: string]: StyleProp<ImageStyle | TextStyle | ViewStyle>;
};

type Factory<T> = (theme: Theme) => T;

const makeStyles = <T extends StyleSheet>(styles: Factory<T> | T) => {
  return () => {
    const theme = useTheme();
    return typeof styles === 'function' ? styles(theme) : styles;
  };
};

export default makeStyles;
