import React from "react";
import { useDispatch } from "react-redux";
import { UnEditTodoAction } from "@/actions/TodoActions";
import {
  removeHandler,
  doneTask,
  edit,
  handleChange,
  setInput,
} from "./TodoItemFunctions";

import s from "./TodoItem.module.scss";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li
      className={
        item.edit ? `${s.todo_item} ${s.todo_item_edit}` : `${s.todo_item}`
      }
      onClick={(e) => setInput(dispatch, e)}
      onKeyPress={(e) => {
        if (e.key === "Enter" && item.edit) {
          dispatch(UnEditTodoAction());
        }
      }}
    >
      <input
        type="checkbox"
        className={s.todo_item__checked}
        name="checked"
        id={"checked" + item.id}
        defaultChecked={item.checked ? true : false}
        onClick={() => doneTask(dispatch, item)}
      />
      <label
        htmlFor={"checked" + item.id}
        className={item.edit ? `${s.edit}` : s.fake_checked}
      >
        <span
          className={item.checked ? `${s.check} ${s.check_edit}` : `${s.check}`}
        ></span>
      </label>
      <input
        type="text"
        value={item.text}
        onChange={(e) => handleChange(dispatch, item, e)}
        onDoubleClick={() => edit(dispatch, item)}
        readOnly={item.edit ? false : true}
        className={
          item.checked
            ? `${s.todo_item__value} ${s.todo_item__value_edit}`
            : `${s.todo_item__value} `
        }
      ></input>

      <button
        className={
          item.edit ? `${s.edit}` : `${s.todo_item__remove} ${s.button}`
        }
        onClick={() => removeHandler(dispatch, item)}
      >
        <img src="/close.svg" alt="rem"></img>
      </button>
    </li>
  );
};

export default TodoItem;
