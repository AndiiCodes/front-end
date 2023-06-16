import React, { useEffect } from 'react';

export default function MyComponent() {
  useEffect(() => {
    const imgs = document.querySelectorAll('.row image');
    const tls = [];

    const gsap = window.gsap; 

    gsap.set('image', {
      attr: { preserveAspectRatio: 'xMidYMid slice', width: '390', height: '300', 'clip-path': 'url(#cp1)' },
    });
    gsap.set('.row', { y: (i) => 160 + i * 320, rotate: -15, svgOrigin: '400 400' });

    imgs.forEach((img, i) => {
      tls.push(
        gsap
          .timeline({ defaults: { duration: 1, ease: 'none' }, paused: true, repeat: -1 })
          .fromTo(img, { x: -400 }, { x: 1600 })
          .progress((i % 5) / 5)
      );
    });

    function prev() {
      tls.forEach((tl, i) => {
        gsap.to(tl, {
          progress: () => (i < 5 ? '+=0.03' : '+=0.02'),
          modifiers: {
            progress: (p) => gsap.utils.wrap(0, 1, p),
          },
          ease: 'power2',
        });
      });
    }

    function next() {
      tls.forEach((tl, i) => {
        gsap.to(tl, {
          progress: () => (i < 5 ? '-=0.03' : '-=0.02'),
          modifiers: {
            progress: (p) => gsap.utils.wrap(0, 1, p),
          },
          ease: 'power2',
        });
      });
    }

    const Observer = window.Observer; 

    Observer.create({
      target: window,
      type: 'wheel,touch,drag',
      onRight: prev,
      onUp: prev,
      onLeft: next,
      onDown: next,
    });
  }, []);

  return (
    <div>
      <svg
        id="stage"
        viewBox="0 0 900 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="cp1">
          <rect width={390} height={300} rx={15} />
        </clipPath>
        <g className="r1 row">
          <image href="https://picsum.photos/id/55/800/600" />
          <image href="https://picsum.photos/id/98/800/600" />
          <image href="https://picsum.photos/id/35/800/600" />
          <image href="https://picsum.photos/id/62/800/600" />
          <image href="https://picsum.photos/id/46/800/600" />
        </g>
        <g className="r2 row">
          <image href="https://picsum.photos/id/50/800/600" />
          <image href="https://picsum.photos/id/80/800/600" />
          <image href="https://picsum.photos/id/40/800/600" />
          <image href="https://picsum.photos/id/69/800/600" />
          <image href="https://picsum.photos/id/66/800/600" />
        </g>
      </svg>
    </div>
  );
}
