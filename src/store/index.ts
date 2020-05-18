import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { PopularMoviesState } from './ducks/popularMovies/types';
import { UpcomingMoviesState } from './ducks/upcomingMovies/types';
import { TopRatedMoviesState } from './ducks/topRatedMovies/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  popularMovies: PopularMoviesState;
  upcomingMovies: UpcomingMoviesState;
  topRatedMovies: TopRatedMoviesState;
}
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
