import React, { Component } from "react";
import { todos } from "../seedData";
import Todo from "./Todo";
import InputForm from "./InputForm";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      names: todos,
      inputValue: ""
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.names.map((todo, i) => {
            // console.log(this.state.names)
            return (
              <Todo
                key={i}
                todos={todo}
                handleClick={() => this.handleClick(todo)}
              />
            );
          })}
        </ul>
        <InputForm inputValue={this.state.inputValue}
          handleChange={event => {this.handleChange(event);}}
          addTodo={() => {this.handleAdd();}}
        />
      </div>
    );
  }

  handleClick(todo) {
    const index = this.state.names.indexOf(todo);
    const updatedTodo = { ...todo, isCompleted: true };
    // console.log(updatedTodo)

    this.setState({
      names: [
        ...this.state.names.slice(0, index),
        updatedTodo,
        ...this.state.names.slice(index + 1)
      ]
    });
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleAdd() {
    const newTodo = {
      name: this.state.inputValue,
      inCompleted: false
    };
    this.setState({
      names: [...this.state.names, newTodo],
      inputValue: ""
    });
  }
}

export default TodoList;
