import React from 'react';

const emojis = [
  ["🐳", "spouting whale", "U+1F433"],
  ["🐋", "whale", "U+1F40B"],
  ["🐬", "dolphin", "U+1F42C"],
  ["🐟", "fish", "U+1F41F"],
  ["🐠", "tropical fish", "U+1F420"],
  ["🐡", "blowfish", "U+1F421"],
  ["🦈", "shark", "U+1F988"],
  ["🐙", "octopus", "U+1F419"],
  ["🐚", "spiral shell", "U+1F41A"]
];

const Carousel = () => {
  return (
    <div className="wrapper">
      <div className="carousel">
        {emojis.map((i, index) => (
          <div className="carousel__item" key={index}>
            <div className="carousel__item-head">
              {i[0]}
            </div>
            <div className="carousel__item-body">
              <p className="title">{i[1]}</p>
              <p>Unicode: {i[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
