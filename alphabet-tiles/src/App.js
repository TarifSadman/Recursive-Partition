import React, { useState } from 'react';
import Grid from './components/Grid';
import './App.css';

const App = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newString = outputString + letter;

    const regex = /(.)\1{2}/g;
    newString = newString.replace(regex, '_');

    setOutputString(newString);
  };

  const handleReset = () => {
    setOutputString('');
  };

  return (
    <div className="app">
      <h1>Alphabet Grid</h1>
      <Grid onTileClick={handleTileClick} />
      <div className="output-container">
        <div id="outputString" className="output">
          {outputString}
        </div>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;