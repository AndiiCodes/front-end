import React from 'react';

const Card = ({ image, heading, text, effect }) => {
  const backgroundImageStyle = {
    backgroundImage: `url("${image}")`,
  };

  return (
    <div className={`crd ${effect}`}>
      <div className="crd-img" style={backgroundImageStyle}></div>
      <div className="crd-info">
        <h2 className="crd-heading" dangerouslySetInnerHTML={{ __html: heading }}></h2>
        <p className="crd-text">{text}</p>
      </div>
    </div>
  );
};

const CardList = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          heading={card.heading}
          text={card.text}
          effect={card.effect}
        />
      ))}
    </div>
  );
};

export default CardList;
