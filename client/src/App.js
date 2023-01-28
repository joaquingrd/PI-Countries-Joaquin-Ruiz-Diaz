import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/1-LandingPage/LandingPage";
import Home from "./components/2-Home/Home";
import About from "./components/6-About/About";
import Create from "./components/7-CreateActivity/CreateActivity";
import Details from "./components/8-DetailCountry/DetailCountry";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/countries/:id" component={Details} />
      </div>
    </BrowserRouter>
  );
}

export default App;
