import { useState } from 'react';
import img1 from './img.jpg';
import img2 from './img2.jpg';
import "./Carousel.css"

function Slider() {
  
  const images = [img1, img2/*, ...*/];

  const [current, setCurrent] = useState(0);

  function prevImage() {
    setCurrent(current => (current + images.length - 1) % images.length);
  }

  function nextImage() {
    setCurrent(current => (current + 1) % images.length); 
  }

  return (
    <div className="slider">
      <img src={images[current]} />

      <div className="actions">
        <button onClick={prevImage}>&#x2039;</button>  
        <button onClick={nextImage}>&#x203a;</button>
      </div>

      <div className="dots">
        {images.map((image, index) => (
          <button 
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );

}

export default Slider