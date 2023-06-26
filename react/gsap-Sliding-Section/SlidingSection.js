import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const slidingSectionRef = useRef(null);

  useEffect(() => {
    const initTimeline = () => {
      const timeline = window.gsap.timeline({
        scrollTrigger: {
          trigger: slidingSectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          // markers: true,
        }
      });
      timeline.fromTo(slidingSectionRef.current, {x: '-100%'}, {x: '100%'})
    };

    initTimeline();
  }, []);

  return (
    <div id="app">
      <div className="section section--fake">Fake content</div>
      <div ref={slidingSectionRef} className="section section--sliding">
        Wooooohooooo
      </div>
      <div className="section section--fake">Fake content</div>
    </div>
  );
};

export default MyComponent;
