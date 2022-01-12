import React from 'react';
import { rest } from 'msw';
import { makeReduxWrapper, render, waitFor } from '@testing-library';
import MockedOpenWeather from '@app/mocks/open-weather';
import server from '@app/mocks/server';
import { getDistanceFromNow, getScheduleFromDatetime } from '@app/utils/date';
import {
  toDegree,
  toHectoPascal,
  toMeterPerSecond,
  toPercentage,
} from '@app/utils/formatters';
import Home from './Home';

const info = {
  city: MockedOpenWeather.data.name,
  description: MockedOpenWeather.data.weather[0].main,
  temperature: toDegree(MockedOpenWeather.data.main.temp),
  max: toDegree(MockedOpenWeather.data.main.temp_max),
  min: toDegree(MockedOpenWeather.data.main.temp_min),
};

const details = {
  feelsLike: toDegree(MockedOpenWeather.data.main.feels_like),
  humidity: toPercentage(MockedOpenWeather.data.main.humidity),
  pressure: toHectoPascal(MockedOpenWeather.data.main.pressure),
  wind: toMeterPerSecond(MockedOpenWeather.data.wind.speed),
  sunrise: getScheduleFromDatetime(MockedOpenWeather.data.sys.sunrise),
  sunset: getScheduleFromDatetime(MockedOpenWeather.data.sys.sunset),
};

it('renders the initial loader correctly', () => {
  const wrapper = makeReduxWrapper();
  const screen = render(<Home />, { wrapper });
  expect(screen.getByLabelText(/loading weather/i)).toBeTruthy();
});

it('renders the last updated time and a refresh button', async () => {
  const wrapper = makeReduxWrapper();
  const screen = render(<Home />, { wrapper });
  const date = new Date(MockedOpenWeather.data.dt * 1000);
  const distance = getDistanceFromNow(date);
  await waitFor(() => {
    expect(screen.getByText(/last update/i)).toBeTruthy();
    expect(screen.getByText(distance)).toBeTruthy();
    expect(screen.getByLabelText(/refresh weather/i)).toBeTruthy();
  });
});

it('renders the weather main info', async () => {
  const wrapper = makeReduxWrapper();
  const screen = render(<Home />, { wrapper });
  await waitFor(() => {
    const icon = new RegExp(`icon for ${info.description}`, 'i');
    expect(screen.getByText(info.city)).toBeTruthy();
    expect(screen.getByText(info.description)).toBeTruthy();
    expect(screen.getByText(info.temperature)).toBeTruthy();
    expect(screen.getByText(info.max)).toBeTruthy();
    expect(screen.getByText(info.min)).toBeTruthy();

    expect(screen.getByLabelText(icon)).toBeTruthy();
    expect(screen.getByLabelText(/icon for maximum temperature/i)).toBeTruthy();
    expect(screen.getByLabelText(/icon for minimum temperature/i)).toBeTruthy();
  });
});

it('renders the weather details', async () => {
  const wrapper = makeReduxWrapper();
  const screen = render(<Home />, { wrapper });
  await waitFor(() => {
    expect(screen.getByText(/feels like/i)).toBeTruthy();
    expect(screen.getByLabelText(/icon for feels like/i)).toBeTruthy();
    expect(screen.getByText(details.feelsLike)).toBeTruthy();

    expect(screen.getByText(/humidity/i)).toBeTruthy();
    expect(screen.getByText(details.humidity)).toBeTruthy();
    expect(screen.getByLabelText(/icon for humidity/i)).toBeTruthy();

    expect(screen.getByText(/pressure/i)).toBeTruthy();
    expect(screen.getByText(details.pressure)).toBeTruthy();
    expect(screen.getByLabelText(/icon for pressure/i)).toBeTruthy();

    expect(screen.getByText(/wind/i)).toBeTruthy();
    expect(screen.getByText(details.wind)).toBeTruthy();
    expect(screen.getByLabelText(/icon for wind/i)).toBeTruthy();

    expect(screen.getByText(/sunrise/i)).toBeTruthy();
    expect(screen.getByText(details.sunrise)).toBeTruthy();
    expect(screen.getByLabelText(/icon for sunrise/i)).toBeTruthy();

    expect(screen.getByText(/sunset/i)).toBeTruthy();
    expect(screen.getByText(details.sunset)).toBeTruthy();
    expect(screen.getByLabelText(/icon for sunset/i)).toBeTruthy();
  });
});

it('renders the error message when fails to obtain weather', async () => {
  const handler = rest.get(
    'https://api.openweathermap.org/data/2.5/weather',
    (request, response, context) =>
      response(context.status(500), context.json(MockedOpenWeather.error)),
  );
  server.use(handler);
  const wrapper = makeReduxWrapper();
  const screen = render(<Home />, { wrapper });
  await waitFor(() => {
    expect(screen.getByText(MockedOpenWeather.error.message)).toBeTruthy();
  });
});
