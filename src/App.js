import React, { Component } from "react";
import "./App.css";

import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    username: ["vedran", "max", "milica"]
  };

  changeNameHandler = event => {
    this.setState({
      username: ["vedran", event.target.value, "milica"]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>1st Assignment</h1>
        <UserInput
          change={this.changeNameHandler}
          value={this.state.username[1]}
        />
        <UserOutput username={this.state.username[0]} />
        <UserOutput username={this.state.username[1]} />
        <UserOutput username={this.state.username[2]} />
      </div>
    );
  }
}

export default App;
