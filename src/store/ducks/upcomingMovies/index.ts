/* eslint-disable @typescript-eslint/camelcase */
import { Reducer } from 'redux';
import { UpcomingMoviesState, UpcomingMoviesTypes } from './types';

const INITAL_STATE: UpcomingMoviesState = {
  data: [],
  error: false,
  loading: false,
  page: 1,
  total_pages: 1,
};

const reducer: Reducer<UpcomingMoviesState> = (
  state = INITAL_STATE,
  action,
) => {
  switch (action.type) {
    case UpcomingMoviesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case UpcomingMoviesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.results,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    case UpcomingMoviesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, results: [] };
    default:
      return state;
  }
};

export default reducer;
