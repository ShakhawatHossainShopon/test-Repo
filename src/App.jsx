import { useState } from "react";
import "./App.css"; // Import CSS file for styling
import img from "./assets/1.jpg";

const App = () => {
  const [value, setValue] = useState(1); // Initial value
  // State to hold the number of rows and columns
  const [gridSize, setGridSize] = useState({ rows: 1, cols: 1 });
  // State to hold the current color
  const [deg, setDeg] = useState("240"); // Initial color is black

  // Handler for the slider change
  const handleSliderChange = (event) => {
    setValue(event.target.value);
    const value = parseInt(event.target.value); // Parse slider value to integer
    const newGridSize = {
      rows: Math.round(value / 5.5),
      cols: Math.round(value / 5.5),
    };
    setGridSize(newGridSize);
   const randomColor = Math.floor(Math.random() * 360) + 1;
   setDeg(randomColor)
  };

  // Create grid items
  const createGridItems = () => {
    let items = [];
    for (let i = 0; i < gridSize.rows * gridSize.cols; i++) {
      items.push(
        <div key={i} className="grid-item">
          <div
            className="image-container"
          >
            <img src={img} style={{
               filter: `brightness(100%) contrast(100%) saturate(0%) sepia(100%) hue-rotate(${deg.toString()+"deg"})`}} width="100%" height="100%" alt={`Image ${i + 1}`} />
          </div>
        </div>
      );
    }
    return items;
  };

  return (
    <>
    <div className="main-div container">
      <label htmlFor="slider" className="label">
        {value * 2}
      </label>
      <>
        <input
          type="range"
          className="form-range"
          id="customRange1"
          min="4"
          step="1"
          max="50"
          defaultValue="1" // Use defaultValue instead of value for initial state
          onChange={handleSliderChange}
        />
      </>

      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize.cols}, auto)`, // Fix template string
          transition: "all 2s linear",
        }}
      >
        {createGridItems()}
      </div>
    </div>
    </>
  );
};

export default App;
