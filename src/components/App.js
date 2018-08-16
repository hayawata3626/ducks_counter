import React, { Component } from "react";
import "../App.css";
import Counter from "../containers/Counter";
import logo from "../logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logoArea">
          <p className="logo">
            <img src={logo} />
          </p>
        </div>
        <Counter />
      </div>
    );
  }
}

export default App;
