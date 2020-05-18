/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { action } from 'typesafe-actions';
import Movie from '../Movie';
import { PopularMoviesTypes } from './types';

export const loadPopularRequest = () => action(PopularMoviesTypes.LOAD_REQUEST);
export const loadPopularSuccess = (data: Movie[]) =>
  action(PopularMoviesTypes.LOAD_SUCCESS, data);
export const loadPopularFailure = () => action(PopularMoviesTypes.LOAD_FAILURE);
