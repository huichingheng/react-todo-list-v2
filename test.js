import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";       //npm install react-test-renderer, and import shallow renderer like this
import App from "./App";

const renderer = new ShallowRenderer();           //create a new instance of ShallowRenderer
renderer.render(<App />);                                    //Since we are testing App.js component we put <App /> into this 
const result = renderer.getRenderOutput()        //this function will run App and give an output, we assign this output to result

                                                                               // if you console log result, you will see what your <App /> is made of, like all the divs and buttons and all

describe("<Body /> Components are", () => {
  it("Should match snapshot", () => {
    expect(result).toMatchSnapshot()                  //over here, we take the result, and call toMatchSnapshot() to do our snapshot testing.
  });
});