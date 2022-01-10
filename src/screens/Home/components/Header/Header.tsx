import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Text } from '@app/components';
import { getWeather, selectWeatherUpdatedAt } from '@app/store/weather';
import useStyles from './Header.styles';

const Header = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const date = useSelector(selectWeatherUpdatedAt);

  const onGetWeather = () => {
    dispatch(getWeather());
  };

  return (
    <View style={styles.root}>
      <View>
        <Text color="muted" size="xs">
          Last updated at
        </Text>
        <Text>{date}</Text>
      </View>
      <Icon name="refresh" color="primary" onPress={onGetWeather} />
    </View>
  );
};

export default Header;
