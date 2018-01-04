import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Explore />
        <Experiences />
        <Homes />
      </div>
    );
  }
}

export default App;
