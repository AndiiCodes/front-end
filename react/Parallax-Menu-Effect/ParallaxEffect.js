import React, { useEffect } from 'react';

export default function ParallaxEffect() {
  useEffect(() => {
    const menu = document.getElementById("menu");

    Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
      item.onmouseover = () => {
        menu.dataset.activeIndex = index;
      };
    });
  }, []);

  return (
    <div>
      <div id="menu">
        <div id="menu-items">
          <div className="menu-item">Home</div>
          <div className="menu-item">Shop</div>
          <div className="menu-item">About</div>
          <div className="menu-item">Contact Us</div>
        </div>
        <div id="menu-background-pattern" />
        <div id="menu-background-image" />
      </div>
    </div>
  );
}
