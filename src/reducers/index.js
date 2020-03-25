import { combineReducers } from 'redux';

import { forecast, forecastSelection } from './Forecast';
import settings from './Settings';

export default combineReducers({
  forecast,
  forecastSelection,
  settings,
});
