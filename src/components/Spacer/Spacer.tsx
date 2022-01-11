import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@app/hooks';
import type { Theme } from '@app/theme';

type SpacerProps = {
  x?: keyof Theme['spacing'];
  y?: keyof Theme['spacing'];
};

const Spacer = ({ x, y }: SpacerProps) => {
  const theme = useTheme();

  const styles = {
    marginHorizontal: x && theme.spacing[x] / 2,
    marginVertical: y && theme.spacing[y] / 2,
  };

  return <View style={styles} />;
};

export default Spacer;
