import { SHOW_MOVIES } from "../Types/types";


const initialState = {
  movies: [],
};
export default function addMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MOVIES:
      return { ...state, movies: action.payload };

    default:
      return state;
  }
}
