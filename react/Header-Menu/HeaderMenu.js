import React from 'react'

export default function HeaderMenu() {
  return (
    <div>
    <nav className="nav">
  <input type="checkbox" className="nav__cb" id="menu-cb" />
  <div className="nav__content">
    <ul className="nav__items">
      <li className="nav__item">
        <span className="nav__item-text">Home</span>
      </li>
      <li className="nav__item">
        <span className="nav__item-text">Works</span>
      </li>
      <li className="nav__item">
        <span className="nav__item-text">About</span>
      </li>
      <li className="nav__item">
        <span className="nav__item-text">Contact</span>
      </li>
    </ul>
  </div>
  <label className="nav__btn" htmlFor="menu-cb" />
</nav>

    </div>
  )
}
