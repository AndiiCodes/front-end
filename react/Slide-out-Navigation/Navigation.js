import React, { useEffect, useRef } from 'react';

export default function Navigation() {
  const activatorRef = useRef(null);
  const tlRef = useRef(null);
  const toggleRef = useRef(false);

  useEffect(() => {
    const card = activatorRef.current;

    tlRef.current = window.gsap.timeline({ defaults: { ease: 'power2.inOut' } });
    tlRef.current.to('.activator', {
      background: '#805ad5',
      borderRadius: '5em 0 0 5em',
    });
    tlRef.current.to('nav', {
      clipPath: 'ellipse(100% 100% at 50% 50%)',
    }, '-=.5');
    tlRef.current.to('nav img', {
      opacity: 1,
      transform: 'translateX(0)',
      stagger: 0.05,
    }, '-=.5');
    tlRef.current.pause();

    const handleClick = () => {
      toggleRef.current = !toggleRef.current;
      if (toggleRef.current) {
        tlRef.current.play();
      } else {
        tlRef.current.reverse();
      }
    };

    card.addEventListener('click', handleClick);

    return () => {
      card.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <header>
        <img
          className="activator"
          id="activator"
          src="//s.svgbox.net/hero-outline.svg?fill=fff#menu-alt-1"
          alt=""
          ref={activatorRef}
        />
        <nav>
          <ul>
            <li>
              <a href="#">
                <img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#bell" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#beaker" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#chat" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#cloud-download" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="//s.svgbox.net/hero-outline.svg?fill=805ad5#cog" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
