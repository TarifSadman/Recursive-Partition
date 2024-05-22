import React from 'react';
import Tile from './Tiles';
import './styles/grid.css';

const Grid = ({ onTileClick }) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
    return (
      <div className="grid">
        {letters.map((letter) => (
          <Tile key={letter} letter={letter} onClick={onTileClick} />
        ))}
      </div>
    );
  };
  
  export default Grid;
