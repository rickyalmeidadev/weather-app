import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
  .configure({ host })
  .use(reactotronRedux())
  .useReactNative()
  .connect();

export default tron;
