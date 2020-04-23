import { fork, all } from 'redux-saga/effects';
import watchRequestForecast from './Forecast';
import watchRequestImageData from './Image';

export default function* rootSaga() {
  yield all([fork(watchRequestForecast), fork(watchRequestImageData)]);
}
