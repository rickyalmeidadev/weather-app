import axios from 'axios';
import Config from '@app/config';
import { WeatherActionTypes } from './weather.types';
import type { ThunkAction } from 'redux-thunk';
import type { Coords } from '@app/types/location';
import type { OpenWeatherResponse } from '@app/types/open-weather';
import type { WeatherAction } from './weather.types';

type GetWeatherByCoordsThunkAction = ThunkAction<
  Promise<void>,
  any,
  null,
  WeatherAction
>;

export const getWeatherByCoords =
  (coords: Coords): GetWeatherByCoordsThunkAction =>
  async dispatch => {
    dispatch({ type: WeatherActionTypes.FETCH_WEATHER_REQUEST });
    try {
      const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/',
      });
      const response = await instance.get<OpenWeatherResponse>('/weather', {
        params: {
          lat: coords.latitude,
          lon: coords.longitude,
          units: 'metric',
          appid: Config.OPEN_WEATHER_KEY,
        },
      });
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
        payload: new Error((error as Error).message),
      });
    }
  };
