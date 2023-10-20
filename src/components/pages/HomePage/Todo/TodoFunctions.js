import {
  AddTodoAction,
  RemoveComplitedAction,
  DoneAllTodoAction,
  UnEditTodoAction,
} from "@/actions/TodoActions";

export const handleSubmit = (e, newTodo, input, dispatch) => {
  e.preventDefault();
  dispatch(AddTodoAction(newTodo));
  input.current.value = "";
};

export const removeComlited = (dispatch) => {
  dispatch(RemoveComplitedAction());
};

export const handleChange = (e, setNewTodo, dispatch) => {
  setNewTodo({
    text: e.target.value,
    checked: false,
    edit: false,
    id: Date.now(),
  });
};

export const sellectAll = (todos, setMode, mode, dispatch) => {
  if (todos.length !== 0) {
    setMode((current) => !current);
    dispatch(DoneAllTodoAction(mode));
    console.log("work");
  }
};

export const saveEdit = (e, text, dispatch) => {
  if (e.target !== text) {
    dispatch(UnEditTodoAction());
  }

  console.log(e.target);
};
