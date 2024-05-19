import { useState } from 'react';
import ImageGrid from './imageGrid';
const Range = () => {
    const [RangeValue, setRangeValue] = useState(0);
    return (
       <>
       <h1>{RangeValue * 4}</h1>
        <label>Number of Images:</label>
        <input
          type="range"
          min="0"
          max="100"
          step="1" // Set the max value based on your preference
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <ImageGrid RangeValue={RangeValue}/>
       
       </>
    );
};

export default Range;