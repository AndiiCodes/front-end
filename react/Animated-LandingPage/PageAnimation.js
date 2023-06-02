// PageAnimation.js 
import React, { useEffect } from 'react';

const PageAnimation = () => {
  useEffect(() => {
    const hero = document.querySelector('.hero');
    const slider = document.querySelector('.slider');
    const logo = document.querySelector('#logo');
    const hamburger = document.querySelector('.hamburger');
    const headline = document.querySelector('.headline');

    const tl = new window.TimelineMax();

    tl.fromTo(
      hero,
      1,
      { height: '0%' },
      { height: '80%', ease: window.Power2.easeInOut }
    )

    .fromTo(
      hero,
      1.2,
      { width: '100%' },
      { width: '80%', ease: window.Power2.easeInOut }
    )

    .fromTo(
      slider,
      1.2,
      { x: '-100%' },
      { x: '0%', ease: window.Power2.easeInOut },
      '-=1.2'
    )

    .fromTo(
      logo,
      0.5,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0 },
      '-=0.5'
    )

    .fromTo(
      hamburger,
      0.5,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0 },
      '-=0.5'
    );
  }, []);

  return (
    <>
      <header>
        <nav>
          <h3 id="logo">Dream Vacation</h3>
          <img
            className="hamburger"
            src="img.png"
            alt="hamburger"
          />
        </nav>
        <section>
          <div className="hero">
            <img
              src="img.png"
              alt="biking"
            />
            <h1 className="headline">Dream Big</h1>
          </div>
        </section>
      </header>
      <div className="slider" />
    </>
  );
};

export default PageAnimation;



// Must Include these GSAP Cdn's in Public/Index.html 
//  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js" integrity="sha512-DkPsH9LzNzZaZjCszwKrooKwgjArJDiEjA5tTgr3YX4E6TYv93ICS8T41yFHJnnSmGpnf0Mvb5NhScYbwvhn2w==" crossorigin="anonymous">  </script>
//  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js" integrity="sha512-0xrMWUXzEAc+VY7k48pWd5YT6ig03p4KARKxs4Bqxb9atrcn2fV41fWs+YXTKb8lD2sbPAmZMjKENiyzM/Gagw==" crossorigin="anonymous">     </script>
