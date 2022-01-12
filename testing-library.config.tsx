import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '@app/store/reducer';
import type { ReactNode } from 'react';
import type { RootState } from '@app/store';

type Props = { children: ReactNode };

export const makeReduxWrapper = (state?: Partial<RootState>) => {
  return ({ children }: Props) => {
    const store = createStore(reducer, state, applyMiddleware(thunk));
    return <Provider store={store}>{children}</Provider>;
  };
};

export * from '@testing-library/react-native';
