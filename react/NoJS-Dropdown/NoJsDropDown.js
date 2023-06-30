import React from 'react'

export default function NoJsDropDown () {
  return (

      <div>
  <legend>Dropdown</legend>
  <details open="">
    <summary>
      Select your favorite movie...
      <i className="ph-caret-down-bold" />
    </summary>
    <div>
      <label>
        <input type="radio" name="radio" />
        <span>Se7en</span>
      </label>
      <label>
        <input type="radio" name="radio" defaultChecked="" />
        <span>Drive</span>
      </label>
      <label>
        <input type="radio" name="radio" />
        <span>Goodfellas</span>
      </label>
      <label>
        <input type="radio" name="radio" />
        <span>Pulp Fiction</span>
      </label>
      <label>
        <input type="radio" name="radio" />
        <span>The Departed</span>
      </label>
      <label>
        <input type="radio" name="radio" />
        <span>Inception</span>
      </label>
      <label>
        <input type="radio" name="radio" />
        <span>Big Fish</span>
      </label>
      <label>
        <input type="radio" name="radio" />
        <span>No Country For Old Men</span>
      </label>
      <label>
        <input type="radio" name="radio" />
        <span>The Godfather</span>
      </label>
      <label>
        <input type="radio" name="radio" />
        <span>Interstellar</span>
      </label>
      <label>
        <input type="radio" name="radio" />
        <span>Silence of the Lambs</span>
      </label>
      <label>
        <input type="radio" name="radio" />
        <span>The Thin Red Line</span>
      </label>
      <div className="fade" />
    </div>
  </details>
</div>

    
  )
}
