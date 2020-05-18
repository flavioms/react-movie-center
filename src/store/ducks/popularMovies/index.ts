/* eslint-disable @typescript-eslint/camelcase */
import { Reducer } from 'redux';
import { PopularMoviesState, PopularMoviesTypes } from './types';

const INITAL_STATE: PopularMoviesState = {
  data: [],
  error: false,
  loading: false,
  page: 1,
  total_pages: 1,
};

const reducer: Reducer<PopularMoviesState> = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case PopularMoviesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case PopularMoviesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.results,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    case PopularMoviesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, results: [] };
    default:
      return state;
  }
};

export default reducer;
