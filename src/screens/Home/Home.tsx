import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getWeather } from '@app/store/weather';
import { Details, Header, Info } from './components';
import useStyles from './Home.styles';

const HomeScreen = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <View style={styles.root}>
      <Header />
      <Info />
      <Details />
    </View>
  );
};

export default HomeScreen;
