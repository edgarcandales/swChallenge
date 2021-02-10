import { ADD_PEOPLE } from "../Types/types";


const initialState = {
  people: [],
};
export default function addPeopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PEOPLE:
      return { ...state, people: action.payload };

    default:
      return state;
  }
}
