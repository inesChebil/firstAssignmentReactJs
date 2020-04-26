import React, { Component } from "react";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import "./App.css";

class App extends Component {
  state = {
    username: "ines"
  };
  changeUsernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    const style = {
      cursor: "pointer"
    };
    return (
      <div className="App">
        <UserInput
          style={style}
          changed={this.changeUsernameHandler}
          username={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
