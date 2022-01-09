import { getCurrentWeatherByCoords } from '@app/services/open-weather';
import { WeatherActionTypes } from './weather.types';
import type { ThunkAction } from 'redux-thunk';
import type { Coords } from '@app/types/location';
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
      const data = await getCurrentWeatherByCoords(coords);
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
        payload: new Error((error as Error).message),
      });
    }
  };
