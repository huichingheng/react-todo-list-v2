import React from "react";

const Todo = props => {
  return (
    <li
      className={props.todos.isCompleted ? "done" : ""}
      onClick={props.handleClick}
    >
      {props.todos.name}
    </li>
  );
};

export default Todo;
