import { combineReducers } from 'redux';
import addPeopleReducer from './addPeopleReducer';
import showPersonReducer from './showPersonReducer';
import addMovieReducer from './addMovieReducer';
import addMoviesReducer from './addMoviesReducer';

export const rootReducer = combineReducers({
  people: addPeopleReducer,
  person: showPersonReducer,
  movies: addMoviesReducer,
  movie: addMovieReducer
});
