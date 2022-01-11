import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Text } from '@app/components';
import {
  getWeather,
  selectWeatherRequestStatus,
  selectWeatherUpdatedAt,
} from '@app/store/weather';
import { useDistanceFromNow } from './hooks';
import useStyles from './Header.styles';

const Header = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const datetime = useSelector(selectWeatherUpdatedAt);
  const status = useSelector(selectWeatherRequestStatus);
  const distance = useDistanceFromNow(datetime);

  const onGetWeather = () => {
    dispatch(getWeather());
  };

  const disabled = status === 'loading' || status === 'fetching';

  return (
    <View style={styles.root}>
      <View>
        <Text color="muted" size="xs">
          Last updated
        </Text>
        <Text size="sm">{distance}</Text>
      </View>
      <Icon
        name="refresh"
        color="primary"
        onPress={onGetWeather}
        disabled={disabled}
      />
    </View>
  );
};

export default Header;
