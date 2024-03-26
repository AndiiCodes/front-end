import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
gsap.registerPlugin(CSSPlugin);

const CardsCarousel = () => {
  const [currentCard, setCurrentCard] = useState(2);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    moveCards(0.75);
  }, [currentCard, direction]);

  const moveCards = (dur = 0) => {
    gsap
      .timeline({
        defaults: {
          duration: dur,
          ease: "power3",
          stagger: { each: -0.03 * direction },
        },
      })
      .to(
        ".card",
        {
          x: () => -270 * currentCard,
          y: (i, target) =>
            parseInt(target.dataset.index, 10) === currentCard ? 0 : 15,
          height: (i, target) =>
            parseInt(target.dataset.index, 10) === currentCard ? 270 : 240,
          ease: "elastic.out(0.4)",
        },
        0
      );
  };

  const handleArrowClick = (i) => {
    setDirection(i === 0 ? 1 : -1);
    setCurrentCard((prevCurrentCard) =>
      i === 0
        ? Math.max(0, prevCurrentCard - 1)
        : Math.min(4, prevCurrentCard + 1)
    );
  };

  const handleCardClick = (i) => {
    setDirection(i < currentCard ? 1 : -1);
    setCurrentCard(i);
  };

  return (
    <div className="cards-wrapper">
      <div className="cards">
        {[...Array(5).keys()].map((i) => (
          <button
            key={i}
            className={`card card${i + 1}`}
            tabIndex="-1"
            onClick={() => handleCardClick(i)}
            data-index={i}
          >
            <p>Lorem, ipsum dolor.</p>
          </button>
        ))}
      </div>
      <button
        className="arrow-btn arrow-btn-prev"
        tabIndex="0"
        onClick={() => handleArrowClick(0)}
      >
        {/* svg here */}
      </button>
      <button
        className="arrow-btn arrow-btn-next"
        tabIndex="0"
        onClick={() => handleArrowClick(1)}
      >
        {/* svg here */}
      </button>
    </div>
  );
};

export default CardsCarousel;
