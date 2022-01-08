import type { OpenWeatherResponse } from '@app/types/open-weather';
import type { Status } from '@app/types/status';

export enum WeatherActionTypes {
  FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE',
}

export type WeatherAction =
  | {
      type: WeatherActionTypes.FETCH_WEATHER_REQUEST;
    }
  | {
      type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
      payload: OpenWeatherResponse;
    }
  | {
      type: WeatherActionTypes.FETCH_WEATHER_FAILURE;
      payload: Error;
    };

export type WeatherState = {
  readonly data: OpenWeatherResponse | null;
  readonly status: Status;
  readonly error: Error | null;
};
