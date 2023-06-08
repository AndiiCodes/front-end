// VideoCard.js 
import React, { useEffect } from 'react';

export default function VideoCard() {
  useEffect(() => {
    var cards = document.querySelectorAll(".cards__element");

    function handleMouseEnter() {
      gsap.to(this, 1, { width: 540, ease: "expo.inOut" });
    }

    function handleMouseLeave() {
      gsap.to(this, 1, { width: 230, ease: "expo.inOut" });
    }

    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("mouseenter", handleMouseEnter);
      cards[i].addEventListener("mouseleave", handleMouseLeave);
    }
  }, []);

  return (
    <div>
      <div className="container flex__col">
        <div className="cards flex">
          <div className="cards__element flex__col">
            <div className="cards__video">
              <iframe
                src="video-url"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write;
                 encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
            </div>
            <div className="cards__image cards__image__1">
              <img src="img-preview.png" />
            </div>
            <div className="cards__title">Elisa S.</div>
            <div className="cards__text">Road trip blog</div>
          </div>
        </div>
      </div>
    </div>
  );
}


// <script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
// make sure you add this above^ into public/index.html 
