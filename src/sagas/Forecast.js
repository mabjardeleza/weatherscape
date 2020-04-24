import { call, put, takeLatest, select } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';
import { FORECAST, forecastListActions, imageActions } from '../actions';
import UNITS from '../global/constants';

const getLocation = (state) => state.settings;
const getCurrentForecast = (state) => state.forecast.data;

function* requestForecastData() {
  try {
    const { cityName, countryCode } = yield select(getCurrentForecast);
    const {
      city,
      coordinates: { lat, lon },
      unitIndex,
    } = yield select(getLocation);
    const WEATHER_API = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.REACT_APP_WEATHERBIT_API_KEY}&units=${UNITS[unitIndex].key}`;

    let url = '';
    if (city !== '') {
      url = `${WEATHER_API}&city=${city}`;
    } else {
      url = `${WEATHER_API}&lat=${lat}&lon=${lon}`;
    }

    const response = yield call(fetch, url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const jsonResponse = yield response.json();
    const forecasts = camelizeKeys(jsonResponse);
    yield put(forecastListActions.success(forecasts));

    if (
      cityName !== forecasts.cityName ||
      countryCode !== forecasts.countryCode
    ) {
      yield put(imageActions.request(forecasts.cityName));
    }
  } catch (error) {
    yield put(forecastListActions.error(error));
  }
}

export default function* watchRequestForecast() {
  yield takeLatest(FORECAST.REQUEST, requestForecastData);
}
