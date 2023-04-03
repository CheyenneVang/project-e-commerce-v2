import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  height: '400px'
}

const slideImages = [
  {
    url: 'https://m.media-amazon.com/images/I/81AHoE-QgFL._AC_SX679_.jpg'
  },
  {
    url: 'https://m.media-amazon.com/images/I/71tpOZEW0eL._AC_SX679_.jpg'
  },
  {
    url: 'https://m.media-amazon.com/images/I/71Ddlp2VLbL._AC_SX679_.jpg'
  },
];

const Slideshow = () => {
  return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  );
}

export default Slideshow;