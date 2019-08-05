import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  './IMG_20190428_171852.jpg',
  './IMG_20190428_171854.jpg',
  './IMG_20190428_171901.jpg'
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true
}

export const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} />
        </div>
        <h2>First Slide</h2>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} />
        </div>
        <h2>Second Slide</h2>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} />
        </div>
        <h2>Third Slide</h2>
      </div>
    </Fade>
  )
}