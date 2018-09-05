import React from "react";

const InputForm = props => (
  <div>
    <input type="text" placeholder="Enter text here..." value={props.inputValue} onChange={event => props.handleChange(event)} />{" "}
    <button onClick={() => props.addTodo()}>Add</button>
  </div>
);

export default InputForm;
