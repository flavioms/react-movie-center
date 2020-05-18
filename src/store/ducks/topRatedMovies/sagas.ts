/* eslint-disable @typescript-eslint/camelcase */
import { call, put } from 'redux-saga/effects';
import axios from '../../../config/axios';
import { loadTopRatedSuccess, loadTopRatedFailure } from './actions';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* loadTopRated() {
  try {
    const response = yield call(axios.get, '/movie/top_rated', {
      params: {
        api_key: process.env.REACT_APP_MOVIEDB_KEY,
        language: 'pt-BR',
      },
    });

    yield put(loadTopRatedSuccess(response.data));
  } catch (error) {
    yield put(loadTopRatedFailure());
  }
}
