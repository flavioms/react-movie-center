import Movie from '../Movie';

export enum UpcomingMoviesTypes {
  LOAD_REQUEST = '@upcomingMovies/LOAD_REQUEST',
  LOAD_SUCCESS = '@upcomingMovies/LOAD_SUCCESS',
  LOAD_FAILURE = '@upcomingMovies/LOAD_FAILURE',
}

export interface UpcomingMoviesState {
  readonly page: number;
  readonly data: Movie[];
  readonly total_pages: number;
  readonly loading: boolean;
  readonly error: boolean;
}
