/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/camelcase */
import { call, put, delay } from 'redux-saga/effects';
import axios from '../../../config/axios';
import { loadPopularSuccess, loadPopularFailure } from './actions';
import Movie from '../Movie';

interface Gender {
  id: number;
  name: string;
}
function* loadGenders(movies: Movie[]) {
  try {
    const { data } = yield call(axios.get, '/genre/movie/list', {
      params: {
        api_key: process.env.REACT_APP_MOVIEDB_KEY,
        language: 'pt-BR',
      },
    });

    const response = movies.map(movie => {
      return Object.assign(movie, {
        genreNames: movie.genre_ids.map(key => {
          return data.genres
            .filter((genre: Gender) => genre.id === key)
            .map((genre: Gender) => genre.name);
        }),
      });
    });

    yield delay(500);

    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export function* loadPopular() {
  try {
    const response = yield call(axios.get, '/movie/popular', {
      params: {
        api_key: process.env.REACT_APP_MOVIEDB_KEY,
        language: 'pt-BR',
      },
    });

    const results = yield call(loadGenders, response.data.results);
    response.data.results = results;

    yield put(loadPopularSuccess(response.data));
  } catch (error) {
    yield put(loadPopularFailure());
  }
}
