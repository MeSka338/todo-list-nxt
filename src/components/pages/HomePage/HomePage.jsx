import React, { useState, useRef, useEffect } from "react";
import s from "./HomePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTodoAction,
  RemoveComplitedAction,
  DoneAllTodoAction,
  UnEditTodoAction,
  UpdateLocal,
} from "@/actions/TodoActions";
import TodoItem from "@/components/common/TodoItem";

const HomePage = () => {
  const [newTodo, setNewTodo] = useState({});
  const [filter, setFilter] = useState(0);
  const [mode, setMode] = useState(true);

  const input = useRef();
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.Todo);
  const { text } = useSelector((state) => state.Input);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(newTodo));
    input.current.value = "";
  };

  const removeComlited = () => {
    dispatch(RemoveComplitedAction());
  };

  const handleChange = (e) => {
    setNewTodo({
      text: e.target.value,
      checked: false,
      edit: false,
      id: Date.now(),
    });
  };

  const sellectAll = () => {
    if (todos.length !== 0) {
      setMode((current) => !current);
      dispatch(DoneAllTodoAction(mode));
      console.log("work");
    }
  };

  const saveEdit = (e) => {
    if (e.target !== text) {
      dispatch(UnEditTodoAction());
    }
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      dispatch(UpdateLocal(JSON.parse(localStorage.getItem("todos"))));
    }
  }, []);

  return (
    <>
      <section className={s.todoApp} onClick={(e) => saveEdit(e)}>
        <div className={s.todos}>
          <form className={s.todo_form} onSubmit={handleSubmit}>
            <button
              type="button"
              className={`${s.todo_form__sellectAll} ${s.button}`}
              onClick={sellectAll}
            >
              <img src="/arrow.svg" alt="arrow" />
            </button>
            <input
              type="text"
              placeholder="What need to be done?"
              className={s.todos__input}
              id="todosInput"
              required
              onChange={handleChange}
              ref={input}
            />
          </form>
          <ul className={s.todos__list}>
            {todos &&
              todos.map((t) => {
                if (filter === 0) {
                  return <TodoItem item={t} />;
                } else if (filter === 1 && t.checked === false) {
                  return <TodoItem item={t} />;
                } else if (filter === 2 && t.checked === true) {
                  return <TodoItem item={t} />;
                }
              })}
            <div className={s.todos__menu}>
              <p className={s.todos_count}>{todos.length} items</p>
              <div className={s.todos_pages}>
                <button
                  className={s.page}
                  onClick={() => {
                    setFilter(0);
                  }}
                >
                  ALL
                </button>
                <button
                  className={s.page}
                  onClick={() => {
                    setFilter(1);
                  }}
                >
                  Active
                </button>
                <button
                  className={s.page}
                  onClick={() => {
                    setFilter(2);
                  }}
                >
                  Complited
                </button>
              </div>
              <button
                className={`${s.clear_todos} ${s.page}`}
                onClick={removeComlited}
              >
                Clear complited
              </button>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomePage;
