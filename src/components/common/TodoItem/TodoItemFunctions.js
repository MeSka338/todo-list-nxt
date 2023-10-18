import {
  DoneTodoAction,
  EditTodoAction,
  RemoveTodoAction,
  EditTextAction,
} from "@/actions/TodoActions";

let timeout;

export const doneTask = (dispatch, item) => {
  dispatch(DoneTodoAction(item));
  if (item.checked) {
    clearTimeout(timeout);
    dispatch({ type: "SET_DONE", payload: true });

    timeout = setTimeout(() => {
      dispatch({ type: "SET_DONE", payload: false });
    }, 3000);
  }
};

export const removeHandler = (dispatch, item) => {
  dispatch(RemoveTodoAction(item));
};

export const edit = (dispatch, item) => {
  dispatch(EditTodoAction(item));
};

export const handleChange = (dispatch, item, e) => {
  item.text = e.target.value;
  dispatch(EditTextAction(item));
};

export const setInput = (dispatch, e) => {
  dispatch({ type: "SET_INPUT", payload: e.target });
};
