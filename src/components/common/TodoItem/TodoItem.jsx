import React from "react";
import { useDispatch } from "react-redux";
import {
  AddTodoAction,
  DoneTodoAction,
  EditTodoAction,
  RemoveComplitedAction,
  RemoveTodoAction,
} from "@/actions/TodoActions";
import s from "./TodoItem.module.scss";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  const doneTask = (t) => {
    dispatch(DoneTodoAction(t));
    console.log("check");
  };

  const edit = (t) => {
    dispatch(EditTodoAction(t));
    console.log(t);
  };

  return (
    <li className={s.todo_item}>
      <input
        type="checkbox"
        className={s.todo_item__checked}
        name="checked"
        id={"checked" + item.id}
        onClick={() => doneTask(item)}
        checked={item.checked ? true : false}
      />
      <label for={"checked" + item.id} className={s.fake_checked}>
        <span
          className={s.check}
          style={item.checked ? { opacity: "1" } : { opacity: "0" }}
        ></span>
      </label>
      <input
        type="text"
        readOnly={false}
        className={s.todo_item__value}
        style={
          item.checked
            ? {
                textDecoration: "line-through",
                color: "gray",
              }
            : { textDecoration: "none " }
        }
        value={item.text}
        onDoubleClick={() => edit(t)}
      ></input>
      <button
        className={`${s.todo_item__remove} ${s.button}`}
        onClick={() => removeHandler(item)}
      >
        <img src="/close.svg" alt="rem"></img>
      </button>
    </li>
  );
};

export default TodoItem;
