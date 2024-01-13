// Import dependencies
import React from "react";
import {Routes, Route } from 'react-router-dom';
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Navigation from "./components/Navigation/Navigation";
import Result from "./components/Result/Result";

function App() {
  return(
    <div className="app">
      <div className="container">
        <Navigation />
      </div>
      <Routes>
        <Route exact path = "/" element = {<Homepage />} />
        <Route exact path = "/results" element = {<Result />} />
      </Routes>
    </div>
  )
}

export default App;
