import { ADD_TODO, REMOVE_TODO, REMOVE_ALL } from "../actions";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.text);
    case REMOVE_TODO:
      return state.slice(0, -1);
    case REMOVE_ALL:
      return [];
    default:
      return state;
  }
};

export default todoReducer;
