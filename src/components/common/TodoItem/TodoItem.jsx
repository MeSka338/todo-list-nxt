import React from "react";
import { useDispatch } from "react-redux";
import {
  UnEditTodoAction,
  RemoveTodoAction,
  DoneTodoAction,
  EditTodoAction,
  EditTextAction,
} from "@/actions/TodoActions";

import s from "./TodoItem.module.scss";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  let timeout;

  const doneTask = () => {
    dispatch(DoneTodoAction(item));
    if (item.checked) {
      clearTimeout(timeout);
      dispatch({ type: "SET_DONE", payload: true });

      timeout = setTimeout(() => {
        dispatch({ type: "SET_DONE", payload: false });
      }, 3000);
    }
  };

  const setInput = (e) => {
    dispatch({ type: "SET_INPUT", payload: e.target });
  };

  return (
    <li
      className={
        item.edit ? `${s.todo_item} ${s.todo_item_edit}` : `${s.todo_item}`
      }
      onClick={(e) => setInput(e)}
      onKeyPress={(e) => {
        if (e.key === "Enter" && item.edit) {
          if (item.text === "") {
            dispatch(RemoveTodoAction(item));
          } else {
            dispatch(UnEditTodoAction(e));
          }
        }
      }}
    >
      <input
        type="checkbox"
        className={s.todo_item__checked}
        name="checked"
        id={item.id}
        defaultChecked={item.checked ? true : false}
        onClick={() => doneTask(dispatch, item)}
      />
      <label
        htmlFor={item.id}
        className={item.edit ? `${s.edit}` : s.fake_checked}
      >
        <span
          className={
            item.checked ? `${s.check} ${s.check_check}` : `${s.check}`
          }
        ></span>
      </label>
      <input
        type="text"
        value={item.text}
        onChange={(e) => dispatch(EditTextAction(e, item))}
        onDoubleClick={() => dispatch(EditTodoAction(item))}
        readOnly={item.edit ? false : true}
        className={
          item.checked
            ? `${s.todo_item__value} ${s.todo_item__value_checked}`
            : `${s.todo_item__value} `
        }
      ></input>

      <button
        className={
          item.edit ? `${s.edit}` : `${s.todo_item__remove} ${s.button}`
        }
        onClick={() => dispatch(RemoveTodoAction(item))}
      >
        <img src="icons/close.svg" alt="rem"></img>
      </button>
    </li>
  );
};

export default TodoItem;
