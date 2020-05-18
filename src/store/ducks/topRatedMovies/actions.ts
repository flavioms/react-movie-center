/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { action } from 'typesafe-actions';
import Movie from '../Movie';
import { TopRatedMoviesTypes } from './types';

export const loadTopRatedRequest = () =>
  action(TopRatedMoviesTypes.LOAD_REQUEST);
export const loadTopRatedSuccess = (data: Movie[]) =>
  action(TopRatedMoviesTypes.LOAD_SUCCESS, data);
export const loadTopRatedFailure = () =>
  action(TopRatedMoviesTypes.LOAD_FAILURE);
