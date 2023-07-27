// CarouselItem.js
import React from 'react';

const CarouselItem = ({ cityData }) => {
  return (
    <div className="item">
      <img src={cityData.imgSrc} alt="" />
      <div className="overlay">
        <span>{cityData.country}</span>
        <div>
          <h2>{cityData.city}</h2>
          <p>{cityData.popularPlaces} Popular places</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
