import React from 'react';
import { Animated, Image, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ActivityIndicator, Icon, Spacer, Text } from '@app/components';
import {
  selectWeatherInfo,
  selectWeatherRequestStatus,
} from '@app/store/weather';
import { toDegree } from '@app/utils/formatters';
import { useStatusAnimation } from './hooks';
import useStyles from './Info.styles';

const INPUT_RANGE = [0, 1];
const OUTPUT_LIMIT = 26;

const Info = () => {
  const styles = useStyles();
  const info = useSelector(selectWeatherInfo);
  const status = useSelector(selectWeatherRequestStatus);
  const animatedValue = useStatusAnimation(status);

  if (!info) {
    return null;
  }

  const uri = `http://openweathermap.org/img/wn/${info.icon}@4x.png`;
  const temperature = toDegree(info.temperature);
  const max = toDegree(info.max);
  const min = toDegree(info.min);

  const makeTransform = (value: number) => [
    {
      translateX: animatedValue.interpolate({
        inputRange: INPUT_RANGE,
        outputRange: [value, 0],
      }),
    },
  ];

  const temperatureAnimatedStyle = {
    transform: makeTransform(+OUTPUT_LIMIT),
  };

  const activityIndicatorAnimatedStyle = {
    opacity: animatedValue.interpolate({
      inputRange: INPUT_RANGE,
      outputRange: [0, 1],
    }),
    transform: makeTransform(-OUTPUT_LIMIT),
  };

  return (
    <View style={styles.root}>
      <Text font="bold" size="xl">
        {info.city}
      </Text>
      <Spacer y="sm" />
      <Text color="muted" size="lg">
        {info.description}
      </Text>
      <Image
        accessibilityLabel={`Icon for ${info.description}`}
        style={styles.icon}
        source={{ uri }}
        resizeMode="contain"
      />
      <View style={styles.row}>
        <Animated.View style={temperatureAnimatedStyle}>
          <Text color="primary" font="bold" size="xxl">
            {temperature}
          </Text>
        </Animated.View>
        <Spacer x="sm" />
        <Animated.View style={activityIndicatorAnimatedStyle}>
          <ActivityIndicator size="large" />
        </Animated.View>
      </View>
      <Spacer y="sm" />
      <View style={styles.row}>
        <Text color="muted" size="lg">
          {max}
        </Text>
        <Icon
          accessibilityLabel="Icon for maximum temperature"
          name="thermometer-plus"
          color="muted"
          size="xss"
        />
        <Spacer x="md" />
        <Text color="muted" size="lg">
          {min}
        </Text>
        <Icon
          accessibilityLabel="Icon for minimum temperature"
          name="thermometer-minus"
          color="muted"
          size="xss"
        />
      </View>
    </View>
  );
};

export default Info;
