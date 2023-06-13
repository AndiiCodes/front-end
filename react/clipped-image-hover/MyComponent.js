import React, { useEffect, useRef } from 'react';

const MyComponent = () => {
  const linkTextRef = useRef(null);
  const linkImageRef = useRef(null);

  useEffect(() => {
    const showImgContent = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      linkImageRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      linkTextRef.current.style.setProperty('--x', x + 'px');
      linkTextRef.current.style.setProperty('--y', y + 'px');
    };

    document.addEventListener('mousemove', showImgContent);

    return () => {
      document.removeEventListener('mousemove', showImgContent);
    };
  }, []);

  return (
    <div className="container">
      <a className="link" href="#">
       Eiffel Tower 
      </a>
      <span className="hover-container">
        <span className="link-text" aria-hidden="true" ref={linkTextRef}>
        🥖 Eiffel Tower 🇫🇷
        </span>
        <span className="image-container">
          <span className="image-inner">
            <img
              className="link-image"
              src="img-url"
              alt="Tokyo Tower"
              ref={linkImageRef}
            />
          </span>
        </span>
      </span>
    </div>
  );
};

export default MyComponent;
