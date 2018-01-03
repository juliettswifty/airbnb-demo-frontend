import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Explore />
        <Experiences />
      </div>
    );
  }
}

export default App;
