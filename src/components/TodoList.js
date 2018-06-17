import React, { Component } from "react";
import { todos } from "../seedData.js";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      names: todos,
    };
  }
  
  render() {
    // console.log(this.state.list.todos);
    return (
      <ul>
        {this.state.names.map((todo, i) => {
          // console.log(todo.name);
          return (
            <li key={i}>{todo.name}{" "}
            </li>
          );
        })}
      </ul>
    );
  }



}
export default TodoList;
