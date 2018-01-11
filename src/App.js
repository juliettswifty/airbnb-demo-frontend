import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing/";
import Header from "./Header";
import Homes from "./Homes";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Demo Air Bnb</title>
        </Helmet>

        <BrowserRouter>
          <div className="App">
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/homes" exact component={Homes} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
