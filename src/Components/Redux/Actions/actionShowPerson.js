import { SHOW_PERSON } from "../Types/types";



export const ShowPersonAction = (data) => async (dispatch, getState) => {
  console.log(data);
  try {
    dispatch({
      type: SHOW_PERSON,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};