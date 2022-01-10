import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { StatusBar } from '@app/components';
import Navigation from '@app/routes';
import store from '@app/store';

if (__DEV__) {
  require('@tron');
}

const App = () => {
  const [loaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
