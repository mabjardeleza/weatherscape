import { combineReducers } from 'redux';

import { forecast, forecastSelection } from './Forecast';
import settings from './Settings';
import image from './Image';

export default combineReducers({
  forecast,
  forecastSelection,
  settings,
  image,
});
