import React from "react";
import s from "./HomePage.module.scss";
import Animation from "./Animation";
import Todo from "./Todo";
const HomePage = () => {
  return (
    <div className={s.root}>
      <Animation />
      <Todo />
    </div>
  );
};

export default HomePage;
