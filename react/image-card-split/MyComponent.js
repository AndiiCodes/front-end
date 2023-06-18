import React, { useEffect } from 'react';

export default function MyComponent() {
  useEffect(() => {
    window.addEventListener("load", function(){
      let hoverImagesContainer = document.getElementById('imageHover');
      let loadingScreen = document.getElementById('loadingScreen');
      loadingScreen.style.opacity = '0';
      loadingScreen.style.zIndex = '-1';
      hoverImagesContainer.style.opacity = '1';
    });
  }, []);

  return (
    <>
      <div style={{ opacity: 0 }} id="imageHover">
        <div className="image-hover-container">
          <div className="container">
            <div className="middle">
              <div className="bg-image lake-district" />
              <a
                href="#" target="_blank" className="overlay">
                <p>Lake District</p>
                <p>Cumbria, uk</p>
                <p className="mobile-link">Read More</p>
              </a>
            </div>
            <div className="bottom-right">
              <div className="bg-image lake-district" />
            </div>
            <div className="bottom-left">
              <div className="bg-image lake-district" />
            </div>
            <div className="top-left">
              <div className="bg-image lake-district" />
            </div>
            <div className="top-right">
              <div className="bg-image lake-district" />
            </div>
          </div>
        </div>
        <div className="image-hover-container">
          <div className="container">
            <div className="middle">
              <div className="bg-image lancaster" />
            </div>
            <div className="bottom-right">
              <div className="bg-image lancaster" />
            </div>
            <div className="bottom-left">
              <div className="bg-image lancaster" />
            </div>
            <div className="top-left">
              <div className="bg-image lancaster" />
            </div>
            <div className="top-right">
              <div className="bg-image lancaster" />
            </div>
          </div>
        </div>
      </div>
      <div className="loading-container" id="loadingScreen">
        <div id="loading" />
      </div>
    </>
  );
}
