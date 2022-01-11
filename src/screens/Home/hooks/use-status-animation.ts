import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Status } from '@app/types/status';

const makeAnimation = (value: Animated.Value, to: number) => {
  const animation = Animated.timing(value, {
    toValue: to,
    duration: 250,
    useNativeDriver: true,
  });
  return animation;
};

const useStatusAnimation = (status: Status) => {
  const value = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const show = makeAnimation(value, 0);
    const hide = makeAnimation(value, 1);

    if (status === 'fetching') {
      show.start();
    }

    if (status === 'success') {
      hide.start();
    }

    return () => {
      show.stop();
      hide.stop();
    };
  }, [value, status]);

  return value;
};

export default useStatusAnimation;
