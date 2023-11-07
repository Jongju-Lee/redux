// action type 정의
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const REMOVE_ALL = "REMOVE_ALL";

// action creator
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text: text,
  };
};

export const removeTodo = () => {
  return {
    type: REMOVE_TODO,
  };
};

export const removeAllTodo = () => {
  return {
    type: REMOVE_ALL,
  };
};
