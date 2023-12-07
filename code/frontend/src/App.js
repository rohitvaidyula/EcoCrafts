// Import dependencies
import React from "react";
import "./App.css";
import Description from "./components/Description";
import Feed from './components/camera/Feed';
import Navigation from "./components/Navigation/Navigation";

function App() {
  return(
    <div className = "app">
      <Navigation />
      <Description />
      <Feed />
     </div>
  );
}

export default App;
