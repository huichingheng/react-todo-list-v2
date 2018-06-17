import React, { Component } from "react";
import "./App.css";
// import TodoList from "./TodoList.js"
import Title from "./Title.js";
import { todos } from "../seedData.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: todos,
    };
  }

  render() {
    return (
      <div className="App">
        <Title />
        <input type="text" onChange={event => this.handleChange(event)} />
        <button onClick={() => this.handleClickAdd()}>Add</button>
        <ul>
          {this.state.names.map((todo, i) => {
            // console.log(todo.name);
            return (
              <li key={i}>
                {todo.name}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  // handleClick() {
  //   this.setState({textDecorationLine: "line-through"})
  // }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClickAdd() {
    this.setState({ names: [...this.state.names, this.state.value] });
  }
}

export default App;
