// Import dependencies
import React from "react";
import {Routes, Route } from 'react-router-dom';
import "./App.css";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return(
    <div className="app">
      <Routes>
        <Route exact path = "/" element = {<Homepage />} />
      </Routes>
    </div>
  )
}

export default App;
