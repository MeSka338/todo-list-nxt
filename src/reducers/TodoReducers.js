const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: action.payload };
    case "REMOVE_TODO":
      return { todos: action.payload };
    case "DONE_TODO":
      return { todos: action.payload };
    case "DONE_ALL_TODO":
      return { todos: action.payload };
    case "EDIT_TODO":
      return { todos: action.payload };
    case "REMOVE_COMPLITED_TODO":
      return { todos: action.payload };
    case "UPDATE_LOCAL":
      return { todos: action.payload };

    default:
      return state;
  }
};

export default TodoReducer;
