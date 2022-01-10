import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWeatherByCoords,
  selectWeatherDetails,
  selectWeatherInfo,
  selectWeatherUpdatedAt,
} from '@app/store/weather';
import useStyles from './Home.styles';

const HomeScreen = () => {
  const styles = useStyles();

  const updatedAt = useSelector(selectWeatherUpdatedAt);
  const info = useSelector(selectWeatherInfo);
  const details = useSelector(selectWeatherDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    const latitude = -34.603722;
    const longitude = -58.381592;
    dispatch(getWeatherByCoords({ latitude, longitude }));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.monospace}>
        {JSON.stringify({ updatedAt, info, details }, null, 2)}
      </Text>
    </View>
  );
};

export default HomeScreen;
