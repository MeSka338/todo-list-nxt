import React from "react";
import s from "./HomePage.module.scss";
import Animation from "./Animation";
import Todo from "./Todo";
import { useDispatch } from "react-redux";
const HomePage = () => {
  const dispatch = useDispatch();
  const changeMouse = (e) => {
    dispatch({
      type: "SET_MOUSE",
      payload: {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      },
    });
  };
  return (
    <div className={s.root} onMouseMove={(e) => changeMouse(e)}>
      <Animation />
      <Todo />
    </div>
  );
};

export default HomePage;
