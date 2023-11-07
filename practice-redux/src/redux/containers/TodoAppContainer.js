import { connect } from "react-redux";
import { addTodo, removeTodo, removeAllTodo } from "../actions";
import TodoApp from "../../components/TodoApp";

function mapStateToProps(state, ownProps) {
  return {
    todoItems: state.todo,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text));
    },
    removeTodo: () => {
      dispatch(removeTodo());
    },
    removeAllTodo: () => {
      dispatch(removeAllTodo());
    },
  };
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
