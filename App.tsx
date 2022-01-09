import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import store from '@app/store';
import { getWeatherByCoords } from '@app/store/weather';
import { makeStyles } from '@app/utils';

if (__DEV__) {
  require('@tron');
}

const App = () => {
  const styles = useStyles();
  const [loaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.root}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          <Weather />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const Weather = () => {
  const styles = useStyles();
  const data = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const latitude = -23.5475;
    const longitude = -46.63611;
    dispatch(getWeatherByCoords({ latitude, longitude }));
  }, [dispatch]);

  return <Text style={styles.monospace}>{JSON.stringify(data, null, 2)}</Text>;
};

const useStyles = makeStyles(({ theme }) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.metrics.md,
  },
  monospace: {
    marginTop: theme.metrics.lg,
    color: theme.colors.text,
    fontFamily: theme.fonts.monospace,
  },
}));

export default App;
