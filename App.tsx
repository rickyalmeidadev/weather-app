import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Config from '@app/config';

const App = () => (
  <View style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
    <Text>{JSON.stringify(Config, null, 2)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
