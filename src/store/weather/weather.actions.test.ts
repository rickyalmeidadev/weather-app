import { getWeatherByCoords } from './weather.actions';
import { WeatherActionTypes } from './weather.types';
import type { Coords } from '@app/types/location';
import MockedOpenWeather from '@app/mocks/open-weather';
import server from '@app/mocks/server';
import { rest } from 'msw';

const coords = {} as Coords;
const getState = () => {};

it('dispatches the correct actions when resolved', async () => {
  const dispatch = jest.fn();
  const actions = [
    { type: WeatherActionTypes.FETCH_WEATHER_REQUEST },
    {
      type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
      payload: MockedOpenWeather.data,
    },
  ];
  const thunk = getWeatherByCoords(coords);
  await thunk(dispatch, getState, null);
  actions.forEach((action, index) => {
    const call = index + 1;
    expect(dispatch).toHaveBeenNthCalledWith(call, action);
  });
});

it('dispatches the correct actions when rejected', async () => {
  const error = new Error('Request failed with status code 500');
  const handler = rest.get(
    'https://api.openweathermap.org/data/2.5/weather',
    (request, response, context) =>
      response(context.status(500), context.json(error)),
  );
  server.use(handler);
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
