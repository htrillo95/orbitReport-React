import React, { useState } from 'react';
import satData from './components/satData';
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";


function App() {

   //Variables for managing satellite data
  const [sat, setSat] = useState(satData); //used to compare changes in state

  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; //array holding unique elements. Used to create the buttons
   // code continues ...

   //flters satellities according to orbit type
  const filterByType = (currentType) => { 
    const filteredSats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSats); //updates state
 };

  return ( //renders components
    <>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats} 
      />
      <Table sat={sat} />
    </>
  );
}

export default App;