/* eslint-disable no-undef */

import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    for (var i = 1; i <= 6; i++) {
      gsap.set('.t' + i + ' .thumbImg', {
        background: 'url(https://picsum.photos/id/' + (i + 53) + '/800/)',
      });
    }
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: '.thumbs',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (s) => {
        gsap.to('.thumbImg', {
          duration: 0.6,
          ease: 'expo',
          y: (i) => {
            return i % 2 === 0
              ? gsap.utils.interpolate(100, -300, s.progress)
              : gsap.utils.interpolate(350, -650, s.progress);
          },
          backgroundPosition: (i) => {
            var str = i % 2 === 0
              ? gsap.utils.interpolate(-200, 0, s.progress)
              : gsap.utils.interpolate(-500, 0, s.progress);
            return '50% ' + str + 'px';
          },
        });
      },
    });
    gsap.timeline({ repeat: -1 })
      .to('.nub', { opacity: 1 })
      .to('.nub', { attr: { points: '12,12 12,42' }, ease: 'power2' }, '+=0.2')
      .to('.nub', { attr: { points: '12,42 12,42', ease: 'power4.inOut' } })
      .to('.nub', { opacity: 0, ease: 'power2.in' }, '+=0.5');
    gsap.timeline({
      scrollTrigger: { trigger: '.section', start: '50px top', end: '150px top', scrub: 0.5 },
    }).to('.dir', { opacity: 0, ease: 'sine.inOut' });
  }, []);

  return (
    <>
  <section>
    <svg className="dir" width={24} height={54}
      xmlns="http://www.w3.org/2000/svg" stroke="#fff" 
      strokeLinecap="round">
      <rect x={2} y={2} rx={10} ry={10} 
      strokeWidth={2} width={20} height={50} />
      <polyline className="nub" strokeWidth={12}
        points="12,12 12,12" opacity={0}
/>
    </svg>
  </section>
  <section>
    <div className="txtBlock">
      <h1>Lorem Ipsum</h1>
      <p>
        Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div className="thumbs">
      <div className="thumb t1">
        <div className="thumbImg" />
      </div>
      <div className="thumb t2">
        <div className="thumbImg" />
      </div>
      <div className="thumb t3">
        <div className="thumbImg" />
      </div>
      <div className="thumb t4">
        <div className="thumbImg" />
      </div>
      <div className="thumb t5">
        <div className="thumbImg" />
      </div>
      <div className="thumb t6">
        <div className="thumbImg" />
      </div>
    </div>
  </section>
  <section />


    </>
  );
};

export default MyComponent;
