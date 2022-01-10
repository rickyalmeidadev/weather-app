import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Text } from '@app/components';
import { getWeather, selectWeatherUpdatedAt } from '@app/store/weather';
import { getDistanceFromNow } from '@app/utils/date';
import useStyles from './Header.styles';

const Header = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const datetime = useSelector(selectWeatherUpdatedAt);

  const onGetWeather = () => {
    dispatch(getWeather());
  };

  const distance = useMemo(() => {
    if (typeof datetime !== 'number') {
      return '-';
    }

    const date = new Date(datetime * 1000);
    return getDistanceFromNow(date);
  }, [datetime]);

  return (
    <View style={styles.root}>
      <View>
        <Text color="muted" size="xs">
          Last updated
        </Text>
        <Text size="sm">{distance}</Text>
      </View>
      <Icon name="refresh" color="primary" onPress={onGetWeather} />
    </View>
  );
};

export default Header;
