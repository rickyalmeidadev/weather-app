import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import { getCurrentWeatherByCoords } from '@app/services/open-weather';
import { WeatherActionTypes } from './weather.types';
import type { ThunkAction } from 'redux-thunk';
import type { RootState } from '@app/store';
import type { WeatherAction } from './weather.types';

type GetWeatherByCoordsThunkAction = ThunkAction<
  Promise<void>,
  RootState,
  null,
  WeatherAction
>;

export const getWeather = (): GetWeatherByCoordsThunkAction => {
  return async dispatch => {
    dispatch({ type: WeatherActionTypes.FETCH_WEATHER_REQUEST });
    try {
      const permission = await requestForegroundPermissionsAsync();
      if (permission.status !== 'granted') {
        throw new Error('You must grant permission to continue');
      }
      const position = await getCurrentPositionAsync();
      const data = await getCurrentWeatherByCoords(position.coords);
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
};
