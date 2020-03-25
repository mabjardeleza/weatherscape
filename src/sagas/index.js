import { fork } from 'redux-saga/effects';
import watchRequestForecast from './Forecast';

export default function* rootSaga() {
  yield fork(watchRequestForecast);
}
