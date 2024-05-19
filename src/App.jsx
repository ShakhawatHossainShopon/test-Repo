import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling
import img from './assets/118370944_10158036633809262_5522821191692056500_n.jpg'
const App = () => {
  // State to hold the number of rows and columns
  const [gridSize, setGridSize] = useState({ rows: 4, cols: 4 });

  // Handler for the slider change
  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value); // Parse slider value to integer
    const newGridSize = value >= 10 ? { rows: 8, cols: 8 } : { rows: 4, cols: 4 };
    setGridSize(newGridSize);
  };

  // Create grid items
  const createGridItems = () => {
    let items = [];
    for (let i = 0; i < gridSize.rows * gridSize.cols; i++) {
      items.push(<div key={i} className="grid-item"><img src={`${img}`} alt={`Image ${i + 1}`} /></div>);
      
    }
    return items;
  };

  return (
    <div>
      <h2>Dynamic Datagrid with Slider</h2>
      <div
        className="grid-container"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize.cols}, auto)`, // Fix template string
          padding: '10px',
        }}
      >
        {createGridItems()}
      </div>
      <input
        type="range"
        min="1"
        max="1000"
        defaultValue="1" // Use defaultValue instead of value for initial state
        id="slider"
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default App;
