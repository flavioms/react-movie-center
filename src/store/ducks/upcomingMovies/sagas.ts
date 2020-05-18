/* eslint-disable @typescript-eslint/camelcase */
import { call, put } from 'redux-saga/effects';
import axios from '../../../config/axios';
import { loadUpcomingSuccess, loadUpcomingFailure } from './actions';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* loadUpcoming() {
  try {
    const response = yield call(axios.get, '/movie/upcoming', {
      params: {
        api_key: process.env.REACT_APP_MOVIEDB_KEY,
        language: 'pt-BR',
      },
    });

    yield put(loadUpcomingSuccess(response.data));
  } catch (error) {
    yield put(loadUpcomingFailure());
  }
}
