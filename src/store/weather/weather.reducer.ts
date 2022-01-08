import { Reducer } from 'redux';
import { WeatherActionTypes } from './weather.types';
import type { WeatherAction, WeatherState } from './weather.types';

export const INITIAL_STATE: WeatherState = {
  data: null,
  error: null,
  status: 'idle',
};

type WeatherReducer = Reducer<WeatherState, WeatherAction>;

const reducer: WeatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER_REQUEST: {
      const status = state.data === null ? 'loading' : 'fetching';
      return { ...state, status };
    }
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS: {
      return { ...state, data: action.payload, status: 'success' };
    }
    case WeatherActionTypes.FETCH_WEATHER_FAILURE: {
      return { ...state, error: action.payload, status: 'error' };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
