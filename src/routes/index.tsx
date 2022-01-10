import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@app/screens';

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={HomeScreen} />
  </Navigator>
);

export default Navigation;
