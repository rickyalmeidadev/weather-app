import React from 'react';
import { Text as ReactNativeText } from 'react-native';
import { useTheme } from '@app/hooks';
import type { TextProps as ReactNativeTextProps } from 'react-native';
import type { Theme } from '@app/theme';

interface TextProps extends ReactNativeTextProps {
  color?: keyof Theme['colors'];
  font?: keyof Theme['fonts'];
  size?: keyof Theme['sizes'];
}

const Text = ({ color, font, size, style, ...props }: TextProps) => {
  const theme = useTheme();

  const styles = {
    color: theme.colors[color ?? 'text'],
    fontFamily: theme.fonts[font ?? 'regular'],
    fontSize: theme.sizes[size ?? 'md'],
  };

  return <ReactNativeText style={[styles, style]} {...props} />;
};

export default Text;
