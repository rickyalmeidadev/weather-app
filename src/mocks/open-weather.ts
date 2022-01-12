import type { OpenWeatherResponse } from '@app/types/open-weather';

const data: OpenWeatherResponse = {
  coord: { lon: -46.72, lat: -23.6456 },
  weather: [{ id: 701, main: 'Mist', description: 'névoa', icon: '50n' }],
  base: 'stations',
  main: {
    temp: 17.86,
    feels_like: 22.18,
    temp_min: 14.42,
    temp_max: 24.79,
    pressure: 993,
    humidity: 95,
  },
  visibility: 5000,
  wind: { speed: 3.6, deg: 160 },
  clouds: { all: 100 },
  dt: 1641688430,
  sys: {
    type: 1,
    id: 8446,
    country: 'BR',
    sunrise: 1641630488,
    sunset: 1641679115,
  },
  timezone: -10800,
  id: 3467722,
  name: 'Campo Limpo',
  cod: 200,
};

const error = new Error('Request failed with status code 500');

const MockedOpenWeather = {
  data,
  error,
};

export default MockedOpenWeather;
