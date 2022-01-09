import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { useTheme } from '@app/hooks';
import { makeStyles } from '@app/utils';

const App = () => {
  const styles = useStyles();
  const theme = useTheme();
  const [loaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.scheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Text style={styles.text}>
        Open up <Text style={styles.code}>App.tsx</Text> to start working on
        your app!
      </Text>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
    fontSize: theme.metrics.md,
  },
  code: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.monospace,
    fontSize: theme.metrics.md,
  },
}));

export default App;
