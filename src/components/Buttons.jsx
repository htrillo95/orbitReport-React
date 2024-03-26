import React from 'react';
import satData from './satData';
import './styling.css';

//Buttons component
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (

    //Div contain the buttons
    <div className="flex-container"> {/* Update className to "flex-container" */}

      {/* Map through displaySats creates buttons for each orbit type */}
      {displaySats.map((sat, id) => (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button> 
      ))}

      <button onClick={() => setSat(satData)}>All Orbits</button>

    </div>
  );
}

export default Buttons;