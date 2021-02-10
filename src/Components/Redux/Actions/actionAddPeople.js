import { ADD_PEOPLE } from "../Types/types";



export const AddPeopleAction = (data) => async (dispatch, getState) => {
  console.log(data);
  try {
    dispatch({
      type: ADD_PEOPLE,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};