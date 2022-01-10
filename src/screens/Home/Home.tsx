import React from 'react';
import { Text, View } from 'react-native';

import useStyles from './Home.styles';

const HomeScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
