// CardTransition.js 
import React from 'react'

export default function CardTransition() {
  return (
    <div><div className="page-wrapper">
    <div className="content-wrapper">
      <input type="radio" name="toggle" id="toggle1" />
      <input type="radio" name="toggle" id="toggle2" />
      <input type="radio" name="toggle" id="toggle3" />
      <section id="section-1">
        <div className="image-container">
          <img src="https://unsplash.it/500/600?image=939" alt="" />
        </div>
        <div className="info-container">
          <h1>Hello.</h1>
          <label htmlFor="toggle2">Click Me.</label>
        </div>
      </section>
      <section id="section-2">
        <div className="image-container">
          <img src="https://unsplash.it/500/600?image=868" alt="" />
        </div>
        <div className="info-container">
          <h1>Hello Again.</h1>
          <label htmlFor="toggle3">Click Me.</label>
        </div>
      </section>
    </div>
  </div>
  </div>
  )
}
