import React, { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@app/hooks';
import type { TouchableOpacityProps } from 'react-native';
import type { Theme } from '@app/theme';

type MaterialCommunityIconProps = Omit<
  ComponentProps<typeof MaterialCommunityIcons>,
  'size'
>;

interface IconProps extends MaterialCommunityIconProps {
  color?: keyof Theme['colors'];
  size?: keyof Theme['sizes'];
  onPress?: TouchableOpacityProps['onPress'];
  disabled?: boolean;
}

const Icon = ({ color, disabled, onPress, size, ...props }: IconProps) => {
  const theme = useTheme();

  const icon = (
    <MaterialCommunityIcons
      color={theme.colors[color ?? 'text']}
      size={theme.sizes[size ?? 'md'] * 1.8}
      {...props}
    />
  );

  if (typeof onPress === 'function') {
    const hitSlop = {
      top: theme.spacing.sm,
      bottom: theme.spacing.sm,
      left: theme.spacing.sm,
      right: theme.spacing.sm,
    };

    return (
      <TouchableOpacity disabled={disabled} hitSlop={hitSlop} onPress={onPress}>
        {icon}
      </TouchableOpacity>
    );
  }

  return icon;
};

export default Icon;
