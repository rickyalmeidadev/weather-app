import React from 'react';
import {
  FlatList,
  ListRenderItem,
  useWindowDimensions,
  View,
} from 'react-native';
import { useTheme } from '@app/hooks';
import type { FlatListProps } from 'react-native';
import type { Theme } from '@app/theme';

interface GridListProps<T> extends FlatListProps<T> {
  renderItem: ListRenderItem<T>;
  spacing?: keyof Theme['spacing'];
}

const GridList = <T extends any>({
  numColumns,
  renderItem,
  spacing,
  ...props
}: GridListProps<T>) => {
  const dimensions = useWindowDimensions();
  const theme = useTheme();

  const padding = theme.spacing[spacing || 'md'];
  const width = dimensions.width / (numColumns ?? 2);

  return (
    <FlatList
      numColumns={numColumns ?? 2}
      renderItem={(...args) => (
        <View style={{ padding, width }}>{renderItem(...args)}</View>
      )}
      {...props}
    />
  );
};

export default GridList;
