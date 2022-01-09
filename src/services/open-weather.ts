import axios from 'axios';
import Config from '@app/config';
import type { Coords } from '@app/types/location';
import type { OpenWeatherResponse } from '@app/types/open-weather';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const getCurrentWeatherByCoords = async (
  coords: Coords,
): Promise<OpenWeatherResponse> => {
  const response = await instance.get<OpenWeatherResponse>('/weather', {
    params: {
      lat: coords.latitude,
      lon: coords.longitude,
      units: 'metric',
      appid: Config.OPEN_WEATHER_KEY,
    },
  });
  return response.data;
};
