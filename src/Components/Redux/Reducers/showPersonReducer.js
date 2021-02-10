import { SHOW_PERSON } from "../Types/types";


const initialState = {
  showPerson: [],
};
export default function showPersonReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_PERSON:
      return { ...state, showPerson: action.payload };

    default:
      return state;
  }
}
