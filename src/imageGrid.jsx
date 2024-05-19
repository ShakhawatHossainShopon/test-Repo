import "./App.css";
import img from "./assets/118370944_10158036633809262_5522821191692056500_n.jpg"
const imageGrid = ({RangeValue}) => {
  // Create an array with the specified count, filled with null values
  const images = Array.from({ length: (RangeValue * 4) }, (_, index) => index);
  console.log(images)
  console.log(RangeValue)
  return (
    <>
    <div className="container">
    <div className="image-grid">
      {images.map((_, index) => (
        <img key={index} src={img} alt={`Image ${index + 1}`} className="grid-item" />
      ))}
    </div>
    </div>
    </>
  );
};

export default imageGrid;