import { combineReducers } from 'redux';
import popularMovies from './popularMovies';
import upcomingMovies from './upcomingMovies';
import topRatedMovies from './topRatedMovies';

export default combineReducers({
  popularMovies,
  upcomingMovies,
  topRatedMovies,
});
