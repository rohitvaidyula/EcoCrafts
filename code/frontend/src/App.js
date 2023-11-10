// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { drawRect } from "./utilities";
import Description from "./components/Description";
import Feed from './components/camera/Feed';

function App() {
  
  return(
    <div className = "app">
      <Description />
      <Feed />
    </div>
  );
}

export default App;
