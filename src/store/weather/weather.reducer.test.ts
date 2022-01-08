import reducer, { INITIAL_STATE } from './weather.reducer';
import { WeatherActionTypes } from './weather.types';
import type { WeatherAction, WeatherState } from './weather.types';
import { OpenWeatherResponse } from '@app/types/open-weather';

it('returns the initial state', () => {
  const action = {} as WeatherAction;
  const actual = reducer(undefined, action);
  const expected = INITIAL_STATE;
  expect(actual).toEqual(expected);
});

it('returns the loading status', () => {
  const action: WeatherAction = {
    type: WeatherActionTypes.FETCH_WEATHER_REQUEST,
  };
  const actual = reducer(undefined, action);
  const expected = { ...INITIAL_STATE, status: 'loading' };
  expect(actual).toEqual(expected);
});

it('returns the fetching status', () => {
  const state: WeatherState = {
    data: {} as OpenWeatherResponse,
    error: null,
    status: 'success',
  };
  const action: WeatherAction = {
    type: WeatherActionTypes.FETCH_WEATHER_REQUEST,
  };
  const actual = reducer(state, action);
  const expected = { ...state, status: 'fetching' };
  expect(actual).toEqual(expected);
});

it('returns the success status with the weather data', () => {
  const data = {} as OpenWeatherResponse;
  const action: WeatherAction = {
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
    payload: data,
  };
  const actual = reducer(undefined, action);
  const expected = { ...INITIAL_STATE, data, status: 'success' };
  expect(actual).toEqual(expected);
});

it('returns the error status with error object', () => {
  const error = new Error();
  const action: WeatherAction = {
    type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
    payload: error,
  };
  const actual = reducer(undefined, action);
  const expected = { ...INITIAL_STATE, error, status: 'error' };
  expect(actual).toEqual(expected);
});
