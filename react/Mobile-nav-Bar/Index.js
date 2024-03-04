import React, { useState } from 'react';

const Navbar = () => {
  const [activeElement, setActiveElement] = useState(0);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const getActiveColor = () => {
    switch (activeElement) {
      case 0:
        return '#e4ecfa';
      case 1:
        return '#fff6cc';
      case 2:
        return '#f0e4fa';
      default:
        return '#e4ecfa';
    }
  };

  const select = (index) => {
    setActiveElement(index);
  };

  const selectSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  return (
    <div className="wrapper">
      <div className="navbar">
        <a
          className={`navitem ${activeElement === 0 ? 'active' : ''}`}
          onClick={() => select(0)}
          style={{ '--activeclr': getActiveColor() }}
        >
          <div className="indicator" />
          <div className="hoverindicator" />
          <ion-icon name="home" />
        </a>
        <a
          className={`navitem ${activeElement === 1 ? 'active' : ''}`}
          onClick={() => select(1)}
          style={{ '--activeclr': getActiveColor() }}
        >
          <div className="indicator" />
          <div className="hoverindicator" />
          <ion-icon name="person" />
        </a>
        <div className={`navsearch ${isSearchActive ? 'active' : ''}`}>
          <input className="searchbox" />
          <div className="searchicon" onClick={selectSearch}>
            <ion-icon name="search" />
          </div>
        </div>
        <a
          className={`navitem ${activeElement === 2 ? 'active' : ''}`}
          onClick={() => select(2)}
          style={{ '--activeclr': getActiveColor() }}
        >
          <div className="indicator" />
          <div className="hoverindicator" />
          <ion-icon name="cog" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
