import React from 'react';
import './Description.css'; // Import the CSS file

class Description extends React.Component {
  render() {
    return (
      <header className="description">
        <h1>Circular Economy Manager</h1>
        <p className="description">Circular Economy Manager (CEM) is a web-based object detection tool that informs you, the user, on how your waste products can be upcycled into a circular economy based on crowd-sourced input. </p>
      </header>
    );
  }
}

export default Description;