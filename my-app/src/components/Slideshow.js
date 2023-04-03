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
    url: 'images/aerify-product-1.jpg'
  },
  {
    url: 'images/aerify-product-2.jpg'
  },
  {
    url: 'images/aerify-product-3.jpg'
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