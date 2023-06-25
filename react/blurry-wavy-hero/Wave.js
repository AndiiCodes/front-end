import React, { useState } from 'react';

const Wave = () => {
  const [isWavesCentered, setIsWavesCentered] = useState(false);

  const toggleWavesSize = () => {
    setIsWavesCentered((prevState) => !prevState);
  };

  return (
    <>
      <section className="hero">
        <div className={`hero__waves ${isWavesCentered ? 'is-centered' : ''}`} />
        <h1 className="hero__title">Lorem ipsum</h1>
        <button className="hero__button" onClick={toggleWavesSize}>
          Toggle Waves Size
        </button>
      </section>
      <section className="content">
        <p className="content__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p className="content__paragraph">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </>
  );
};

export default Wave;
