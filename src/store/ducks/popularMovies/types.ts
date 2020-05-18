import Movie from '../Movie';

export enum PopularMoviesTypes {
  LOAD_REQUEST = '@popularMovies/LOAD_REQUEST',
  LOAD_SUCCESS = '@popularMovies/LOAD_SUCCESS',
  LOAD_FAILURE = '@popularMovies/LOAD_FAILURE',
}

export interface PopularMoviesState {
  readonly page: number;
  readonly data: Movie[];
  readonly total_pages: number;
  readonly loading: boolean;
  readonly error: boolean;
}
