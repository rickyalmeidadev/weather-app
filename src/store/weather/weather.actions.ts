import { WeatherActionTypes } from './weather.types';
import type { ThunkAction } from 'redux-thunk';
import type { Coords } from '@app/types/location';
import type { OpenWeatherResponse } from '@app/types/open-weather';
import type { WeatherAction } from './weather.types';
import Config from '@app/config';

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
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${Config.OPEN_WEATHER_KEY}`,
      );
      const data: OpenWeatherResponse = await response.json();
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
        payload: error as Error,
      });
    }
  };
