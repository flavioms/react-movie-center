import Movie from '../Movie';

export enum TopRatedMoviesTypes {
  LOAD_REQUEST = '@topRatedMovies/LOAD_REQUEST',
  LOAD_SUCCESS = '@topRatedMovies/LOAD_SUCCESS',
  LOAD_FAILURE = '@topRatedMovies/LOAD_FAILURE',
}

export interface TopRatedMoviesState {
  readonly page: number;
  readonly data: Movie[];
  readonly total_pages: number;
  readonly loading: boolean;
  readonly error: boolean;
}
