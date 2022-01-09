import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import tron from '@tron';
import reducer from './reducer';

const enhancer = __DEV__
  ? compose(applyMiddleware(thunk), tron.createEnhancer!())
  : applyMiddleware(thunk);

const store = createStore(reducer, enhancer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
