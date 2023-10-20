export const AddTodoAction = (e, newTodo, input) => (dispatch, getState) => {
  e.preventDefault();

  const {
    Todo: { todos },
  } = getState();

  if (newTodo.text !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: [newTodo, ...todos],
    });
  }
  localStorage.setItem("todos", JSON.stringify([newTodo, ...todos]));

  input.current.value = "";
};

export const RemoveComplitedAction = () => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();
  dispatch({
    type: "REMOVE_COMPLITED_TODO",
    payload: todos.filter((item) => item.checked !== true),
  });

  localStorage.setItem(
    "todos",
    JSON.stringify(todos.filter((item) => item.checked !== true))
  );
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();
  dispatch({
    type: "REMOVE_TODO",
    payload: todos.filter((item) => item.id !== todo.id),
  });

  localStorage.setItem(
    "todos",
    JSON.stringify(todos.filter((item) => item.id !== todo.id))
  );
};

export const DoneTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  todos.forEach((item) => {
    if (item.id === todo.id) {
      item.checked = !item.checked;
    }
  });
  dispatch({
    type: "DONE_TODO",
    payload: [...todos],
  });

  localStorage.setItem("todos", JSON.stringify(todos));
};

export const DoneAllTodoAction = (mode, setMode) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  if (todos.length !== 0) {
    setMode((current) => !current);

    if (mode === true) {
      todos.forEach((item) => {
        item.checked = true;
      });
    } else if (mode === false) {
      todos.forEach((item) => {
        item.checked = false;
      });
    }
    dispatch({
      type: "DONE_ALL_TODO",
      payload: [...todos],
    });

    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("work");
  }
};

export const EditTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  todos.forEach((item) => {
    if (item.id === todo.id) {
      item.edit = true;
    }
  });
  dispatch({
    type: "EDIT_TODO",
    payload: [...todos],
  });

  localStorage.setItem("todos", JSON.stringify(todos));
};

export const UnEditTodoAction = () => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  todos.forEach((item) => {
    item.edit = false;
  });

  dispatch({
    type: "UNEDIT_TODO",
    payload: [...todos],
  });

  localStorage.setItem("todos", JSON.stringify(todos));
};

export const EditTextAction = (e, todo) => (dispatch, getState) => {
  todo.text = e.target.value;

  const {
    Todo: { todos },
  } = getState();
  todos.forEach((item) => {
    if (item.id === todo.id) {
      item.text = todo.text;
    }
  });

  dispatch({
    type: "EDIT_TEXT",
    payload: [...todos],
  });

  localStorage.setItem("todos", JSON.stringify(todos));
};

export const UpdateLocal = (todos) => (dispatch) => {
  todos.forEach((item) => {
    item.edit = false;
  });
  dispatch({
    type: "UPDATE_LOCAL",
    payload: [...todos],
  });
};
