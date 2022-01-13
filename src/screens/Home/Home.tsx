import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, Icon, Text } from '@app/components';
import {
  getWeather,
  selectWeatherRequestError,
  selectWeatherRequestStatus,
} from '@app/store/weather';
import { Details, Header, Info } from './components';
import useStyles from './Home.styles';

const HomeScreen = () => {
  const styles = useStyles();
  const status = useSelector(selectWeatherRequestStatus);
  const error = useSelector(selectWeatherRequestError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  if (status === 'error' && error) {
    return (
      <View style={styles.root}>
        <Header />
        <View style={[styles.center, styles.error]}>
          <Icon name="cloud-off-outline" color="muted" size="xxl" />
          <Text color="muted">{error.message}</Text>
        </View>
      </View>
    );
  }

  if (status === 'idle' || status === 'loading') {
    return (
      <View style={[styles.root, styles.center]}>
        <ActivityIndicator accessibilityLabel="Loading weather" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Header />
      <Info />
      <Details />
    </View>
  );
};

export default HomeScreen;
