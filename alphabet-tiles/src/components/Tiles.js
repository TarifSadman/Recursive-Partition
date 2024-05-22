import React from 'react';
import "./styles/tiles.css";

const Tile = ({ letter, onClick }) => {
  return (
    <div className="tile" onClick={() => onClick(letter)}>
      {letter}
    </div>
  );
};

export default Tile;
