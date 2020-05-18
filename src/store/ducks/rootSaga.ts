/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, takeLatest } from 'redux-saga/effects';
import { PopularMoviesTypes } from './popularMovies/types';
import { loadPopular } from './popularMovies/sagas';
import { UpcomingMoviesTypes } from './upcomingMovies/types';
import { loadUpcoming } from './upcomingMovies/sagas';
import { TopRatedMoviesTypes } from './topRatedMovies/types';
import { loadTopRated } from './topRatedMovies/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(PopularMoviesTypes.LOAD_REQUEST, loadPopular),
    takeLatest(UpcomingMoviesTypes.LOAD_REQUEST, loadUpcoming),
    takeLatest(TopRatedMoviesTypes.LOAD_REQUEST, loadTopRated),
  ]);
}
