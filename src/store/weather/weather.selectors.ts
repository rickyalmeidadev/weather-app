import { RootState } from '@app/store';

export const selectWeatherUpdatedAt = (state: RootState) => {
  const { data } = state.weather;

  if (data === null) {
    return;
  }

  return data.dt;
};

export const selectWeatherInfo = (state: RootState) => {
  const { data } = state.weather;

  if (data === null) {
    return;
  }

  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].main,
    icon: data.weather[0].icon,
    max: data.main.temp_max,
    min: data.main.temp_min,
  };
};

export const selectWeatherDetails = (state: RootState) => {
  const { data } = state.weather;

  if (data === null) {
    return;
  }

  return {
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    wind: data.wind.speed,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
};

export const selectWeatherRequestStatus = (state: RootState) => {
  return state.weather.status;
};
