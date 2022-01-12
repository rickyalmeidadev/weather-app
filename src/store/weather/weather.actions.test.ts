import { requestForegroundPermissionsAsync } from 'expo-location';
import { rest } from 'msw';
import MockedOpenWeather from '@app/mocks/open-weather';
import server from '@app/mocks/server';
import { getWeather } from './weather.actions';
import { WeatherActionTypes } from './weather.types';
import type { RootState } from '@app/store';

const getState = (): RootState => ({} as RootState);

it('dispatches the correct actions when resolved', async () => {
  const dispatch = jest.fn();
  const actions = [
    { type: WeatherActionTypes.FETCH_WEATHER_REQUEST },
    {
      type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
      payload: MockedOpenWeather.data,
    },
  ];
  const thunk = getWeather();
  await thunk(dispatch, getState, null);
  actions.forEach((action, index) => {
    const call = index + 1;
    expect(dispatch).toHaveBeenNthCalledWith(call, action);
  });
});

it('dispatches the correct actions when rejected', async () => {
  const handler = rest.get(
    'https://api.openweathermap.org/data/2.5/weather',
    (request, response, context) =>
      response(context.status(500), context.json(MockedOpenWeather.error)),
  );
  server.use(handler);
  const dispatch = jest.fn();
  const actions = [
    { type: WeatherActionTypes.FETCH_WEATHER_REQUEST },
    {
      type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
      payload: MockedOpenWeather.error,
    },
  ];
  const thunk = getWeather();
  await thunk(dispatch, getState, null);
  actions.forEach((action, index) => {
    const call = index + 1;
    expect(dispatch).toHaveBeenNthCalledWith(call, action);
  });
});

it('dispatches the correct actions when permission is denied', async () => {
  (requestForegroundPermissionsAsync as jest.Mock).mockImplementationOnce(
    () => ({ status: 'denied' }),
  );
  const dispatch = jest.fn();
  const actions = [
    { type: WeatherActionTypes.FETCH_WEATHER_REQUEST },
    {
      type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
      payload: new Error('You must grant permission to continue'),
    },
  ];
  const thunk = getWeather();
  await thunk(dispatch, getState, null);
  actions.forEach((action, index) => {
    const call = index + 1;
    expect(dispatch).toHaveBeenNthCalledWith(call, action);
  });
});
