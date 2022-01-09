import { combineReducers } from 'redux';
import weather from './weather';

const reducer = combineReducers({ weather });

export default reducer;
