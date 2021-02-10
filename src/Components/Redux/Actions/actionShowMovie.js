import { SHOW_MOVIE } from "../Types/types";



export const AddMovieAction = (data) => async (dispatch, getState) => {
  console.log(data);
  try {
    dispatch({
      type: SHOW_MOVIE,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};