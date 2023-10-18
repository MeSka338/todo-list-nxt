import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DoneTodoAction,
  EditTodoAction,
  RemoveTodoAction,
  EditTextAction,
  UnEditTodoAction,
} from "@/actions/TodoActions";
import s from "./TodoItem.module.scss";

const TodoItem = ({ item }) => {
  const DoneTrigger = useSelector((store) => store.DoneTrigger);
  const dispatch = useDispatch();

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  const doneTask = () => {
    let timeout;
    dispatch(DoneTodoAction(item));
    if (item.checked) {
      clearTimeout(timeout);
      dispatch({ type: "TRUE_DONE", payload: true });
      // console.log(DoneTrigger);

      timeout = setTimeout(() => {
        dispatch({ type: "TRUE_DONE", payload: false });
        // console.log(DoneTrigger);
      }, 3000);
    }
  };

  const edit = () => {
    dispatch(EditTodoAction(item));
  };

  const handleChange = (e) => {
    item.text = e.target.value;
    dispatch(EditTextAction(item));
  };
  const setInput = (e) => {
    dispatch({ type: "SET_INPUT", payload: e.target });
  };

  return (
    <li
      className={s.todo_item}
      style={item.edit ? { border: "solid 1px gray" } : { border: "none" }}
      onClick={(e) => setInput(e)}
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
        checked={item.checked ? true : false}
        onClick={doneTask}
      />
      <label
        for={"checked" + item.id}
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
        onChange={handleChange}
        onDoubleClick={() => edit(item)}
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
        onClick={() => removeHandler(item)}
      >
        <img src="/close.svg" alt="rem"></img>
      </button>
    </li>
  );
};

export default TodoItem;
