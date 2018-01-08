import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing/";
import Header from "./Header";
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/homes" exact component={Homes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
