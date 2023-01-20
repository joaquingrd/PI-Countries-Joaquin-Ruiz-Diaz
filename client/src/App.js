import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/1-LandingPage/LandingPage";
import Home from "./components/2-Home/Home";
import About from "./components/6-About/About";
import Creator from "./components/7-CreateActivity/CreateActivity";
import Detail from "./components/8-DetailCountry/DetailCountry";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/creator" component={Creator} />
        <Route exact path="/detail/:id" component={Detail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
