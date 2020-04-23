import { call, takeLatest, put } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';
import { IMAGE, imageActions } from '../actions';

function* requestImageData(action) {
  try {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${action.payload}`;

    const response = yield call(fetch, url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Version': 'v1',
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
      },
    });

    const jsonResponse = yield response.json();
    const image = camelizeKeys(jsonResponse);
    yield put(imageActions.success(image));
  } catch (error) {
    yield put(imageActions.error(error));
  }
}

export default function* watchRequestImageData() {
  yield takeLatest(IMAGE.REQUEST, requestImageData);
}
