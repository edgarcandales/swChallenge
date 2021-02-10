import { SHOW_MOVIES } from "../Types/types";



export const AddMoviesAction = (data) => async (dispatch, getState) => {
  console.log(data);
  try {
    dispatch({
      type: SHOW_MOVIES,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};