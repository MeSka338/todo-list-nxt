import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateLocal } from "@/actions/TodoActions";
import {
  handleSubmit,
  removeComlited,
  handleChange,
  sellectAll,
  saveEdit,
} from "./TodoFunctions";

import s from "./Todo.module.scss";

import TodoItem from "@/components/common/TodoItem";

const Todo = () => {
  const [newTodo, setNewTodo] = useState({});
  const [filter, setFilter] = useState(0);
  const [mode, setMode] = useState(true);

  const input = useRef();
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.Todo);
  const { text } = useSelector((state) => state.Input);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      dispatch(UpdateLocal(JSON.parse(localStorage.getItem("todos"))));
    }
  }, []);

  return (
    <>
      <section
        className={s.todoApp}
        onClick={(e) => saveEdit(e, text, dispatch)}
      >
        <div className={s.todos}>
          <form
            className={s.todo_form}
            onSubmit={(e) => handleSubmit(e, newTodo, input, dispatch)}
          >
            <button
              type="button"
              className={`${s.todo_form__sellectAll} ${s.button}`}
              onClick={() => sellectAll(todos, setMode, mode, dispatch)}
            >
              <img src="/arrow.svg" alt="arrow" />
            </button>
            <input
              type="text"
              placeholder="What need to be done?"
              className={s.todos__input}
              id="todosInput"
              required
              onChange={(e) => handleChange(e, setNewTodo, dispatch)}
              ref={input}
            />
          </form>
          <ul className={s.todos__list}>
            {todos &&
              todos.map((t, key) => {
                if (filter === 0) {
                  return <TodoItem item={t} key={key} />;
                } else if (filter === 1 && t.checked === false) {
                  return <TodoItem item={t} key={key} />;
                } else if (filter === 2 && t.checked === true) {
                  return <TodoItem item={t} key={key} />;
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
                onClick={() => removeComlited(dispatch)}
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

export default Todo;
