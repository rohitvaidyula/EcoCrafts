import React from 'react';
import './Description.css'; // Import the CSS file

class Description extends React.Component {
  render() {
    return (
      <div className= 'description'>
        <p>
          <b>C</b>ircular <b>E</b>conomy <b>M</b>anager is a web-based trash classification tool
          that informs you, the user, on how your plastic can be upccycled into a 
          Circular Economy based on crowd-sourced input
        </p>
        <p>Try it out yourself!</p>
      </div>
    );
  }
}

export default Description;