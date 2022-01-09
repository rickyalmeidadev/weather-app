import { combineReducers } from 'redux';
import weather from './weather/weather.reducer';

const reducer = combineReducers({ weather });

export default reducer;
