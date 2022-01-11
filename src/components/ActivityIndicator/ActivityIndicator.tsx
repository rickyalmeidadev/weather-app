import React from 'react';
import { ActivityIndicator as ReactNativeActivityIndicator } from 'react-native';
import { useTheme } from '@app/hooks';
import type { ActivityIndicatorProps as OriginalReactNativeActivityIndicatorProps } from 'react-native';
import type { Theme } from '@app/theme';

type ReactNativeActivityIndicatorProps = Omit<
  OriginalReactNativeActivityIndicatorProps,
  'color'
>;

interface ActivityIndicatorProps extends ReactNativeActivityIndicatorProps {
  color?: keyof Theme['colors'];
}

const ActivityIndicator = ({ color, ...props }: ActivityIndicatorProps) => {
  const theme = useTheme();

  return (
    <ReactNativeActivityIndicator
      color={theme.colors[color ?? 'muted']}
      {...props}
    />
  );
};

export default ActivityIndicator;
