import React, { useState } from 'react';
import SplitPane from 'react-split-pane';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const RandomColorButton = ({ label, onClick }) => {
  const color = getRandomColor();
  return (
    <button
      className="btn m-2"
      style={{ backgroundColor: color, color: '#fff', border: 'none' }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Partition = ({ id, color, onSplit }) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: color, width: '100%', height: '100%' }}>
      <div>
        <RandomColorButton label="V" onClick={() => onSplit(id, 'horizontal')} />
        <RandomColorButton label="H" onClick={() => onSplit(id, 'vertical')} />
      </div>
    </div>
  );
};

const SplitContainer = ({ id, color }) => {
  const [splitDirection, setSplitDirection] = useState(null);

  const handleSplit = (id, direction) => {
    setSplitDirection(direction);
  };

  if (splitDirection) {
    const newColor = getRandomColor();
    return (
      <SplitPane split={splitDirection} defaultSize="50%" minSize={50} className="primary">
        <SplitContainer id={`${id}-1`} color={color} />
        <SplitContainer id={`${id}-2`} color={newColor} />
      </SplitPane>
    );
  }

  return <Partition id={id} color={color} onSplit={handleSplit} />;
};

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <SplitContainer id="0" color={getRandomColor()} />
    </div>
  );
};

export default App;
