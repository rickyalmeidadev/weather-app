import { rest } from 'msw';
import MockedOpenWeather from './open-weather';

const handlers = [
  rest.get(
    'https://api.openweathermap.org/data/2.5/weather',
    (request, response, context) =>
      response(context.status(200), context.json(MockedOpenWeather.data)),
  ),
];

export default handlers;
