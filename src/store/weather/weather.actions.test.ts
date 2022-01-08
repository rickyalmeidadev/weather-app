import { getWeatherByCoords } from './weather.actions';
import { WeatherActionTypes } from './weather.types';
import type { Coords } from '@app/types/location';
import type { OpenWeatherResponse } from '@app/types/open-weather';

const coords = {} as Coords;
const getState = () => {};

it('dispatches the correct actions when resolved', async () => {
  const data = {} as OpenWeatherResponse;
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(async () => ({ json: () => data } as any));
  const dispatch = jest.fn();
  const actions = [
    { type: WeatherActionTypes.FETCH_WEATHER_REQUEST },
    { type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: data },
  ];
  const thunk = getWeatherByCoords(coords);
  await thunk(dispatch, getState, null);
  actions.forEach((action, index) => {
    const call = index + 1;
    expect(dispatch).toHaveBeenNthCalledWith(call, action);
  });
});

it('dispatches the correct actions when rejected', async () => {
  const error = new Error('Error');
  jest.spyOn(global, 'fetch').mockImplementation(async () => {
    throw error;
  });
  const dispatch = jest.fn();
  const actions = [
    { type: WeatherActionTypes.FETCH_WEATHER_REQUEST },
    { type: WeatherActionTypes.FETCH_WEATHER_FAILURE, payload: error },
  ];
  const thunk = getWeatherByCoords(coords);
  await thunk(dispatch, getState, null);
  actions.forEach((action, index) => {
    const call = index + 1;
    expect(dispatch).toHaveBeenNthCalledWith(call, action);
  });
});
