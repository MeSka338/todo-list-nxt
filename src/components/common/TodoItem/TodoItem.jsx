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
      className={s.todo_item}
      style={
        item.edit
          ? { border: "solid 1px gray" }
          : { borderTop: "1px solid #ebdcdc" }
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
          className={s.check}
          style={item.checked ? { opacity: "1" } : { opacity: "0" }}
        ></span>
      </label>
      <input
        type="text"
        value={item.text}
        className={s.todo_item__value}
        onChange={(e) => handleChange(dispatch, item, e)}
        onDoubleClick={() => edit(dispatch, item)}
        readOnly={item.edit ? false : true}
        style={
          item.checked
            ? {
                textDecoration: "line-through",
                color: "gray",
              }
            : { textDecoration: "none " }
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
