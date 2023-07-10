import React, { useEffect, useRef } from 'react';

export default function ProgressCircle() {
  const scrollToTopElement = useRef(null);

  const updateProgressCircle = () => {
    const progressElement = document.querySelector('.progress-circle-bar');
    const scrollToTopElementRef = scrollToTopElement.current;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (window.pageYOffset / totalHeight) * 283;
    progress = Math.min(progress, 283);
    progressElement.style.strokeDashoffset = 283 - progress;

    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      scrollToTopElementRef.style.opacity = '1';
    } else {
      scrollToTopElementRef.style.opacity = '0';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    updateProgressCircle();
    window.addEventListener('scroll', updateProgressCircle);
    window.addEventListener('resize', updateProgressCircle);

    return () => {
      window.removeEventListener('scroll', updateProgressCircle);
      window.removeEventListener('resize', updateProgressCircle);
    };
  }, []);

  return (

    <div className="progress-circle-container">
    <div>
    
    </div>
      <svg className="progress-circle" viewBox="0 0 100 100">
        <circle className="progress-background" cx={50} cy={50} r={45} />
        <circle className="progress-circle-bar" cx={50} cy={50} r={45} />
      </svg>
      <div
        className="scroll-to-top"
        onClick={scrollToTop}
        ref={scrollToTopElement}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        
      </div>

    </div>
  );
}
