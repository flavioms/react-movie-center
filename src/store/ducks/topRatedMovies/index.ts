/* eslint-disable @typescript-eslint/camelcase */
import { Reducer } from 'redux';
import { TopRatedMoviesState, TopRatedMoviesTypes } from './types';

const INITAL_STATE: TopRatedMoviesState = {
  data: [],
  error: false,
  loading: false,
  page: 1,
  total_pages: 1,
};

const reducer: Reducer<TopRatedMoviesState> = (
  state = INITAL_STATE,
  action,
) => {
  switch (action.type) {
    case TopRatedMoviesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case TopRatedMoviesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.results,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    case TopRatedMoviesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, results: [] };
    default:
      return state;
  }
};

export default reducer;
