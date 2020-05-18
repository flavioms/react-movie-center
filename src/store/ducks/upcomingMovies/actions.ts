/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { action } from 'typesafe-actions';
import Movie from '../Movie';
import { UpcomingMoviesTypes } from './types';

export const loadUpcomingRequest = () =>
  action(UpcomingMoviesTypes.LOAD_REQUEST);
export const loadUpcomingSuccess = (data: Movie[]) =>
  action(UpcomingMoviesTypes.LOAD_SUCCESS, data);
export const loadUpcomingFailure = () =>
  action(UpcomingMoviesTypes.LOAD_FAILURE);
