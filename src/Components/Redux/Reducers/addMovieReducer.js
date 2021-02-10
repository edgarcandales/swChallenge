import { SHOW_MOVIE } from "../Types/types";


const initialState = {
  movie: [],
};
export default function addMovieReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MOVIE:
      return { ...state, movie: action.payload };

    default:
      return state;
  }
}
