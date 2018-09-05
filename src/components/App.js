import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList.js";
import Title from "./Title.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <TodoList />
      </div>
    );
  }
}

export default App;
