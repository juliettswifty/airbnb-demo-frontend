import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { Grid, Row, Col } from "react-flexbox-grid";
import Explore from "./Explore";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Explore />
      </div>
    );
  }
}

export default App;
