import React from 'react';
import './Description.css'; // Import the CSS file

class Description extends React.Component {
  render() {
    return (
      <div className= 'description'>
        <h1>
          CIRCULAR ECONOMY MANAGER
        </h1>
        <p>
          Circular Economy Manager (CEM) is a web-based trash classification tool
          that informs you, the user, on how your plastic can be upccycled into a 
          Circular Economy based on crowd-sourced input
        </p>
      </div>
    );
  }
}

export default Description;