import React from 'react'

export default function InputFields() {
  return (
    
    <>
  <div className="page">
    <div className="field field_v1">
      <label htmlFor="first-name" className="ha-screen-reader">
        First name
      </label>
      <input
        id="first-name"
        className="field__input"
        placeholder="e.g. Telegram @AndiiCodes"
      />
      <span className="field__label-wrap" aria-hidden="true">
        <span className="field__label">First name</span>
      </span>
    </div>
    <div className="field field_v2">
      <label htmlFor="last-name" className="ha-screen-reader">
        Last name
      </label>
      <input
        id="last-name"
        className="field__input"
        placeholder="e.g. AndiiCodes"
      />
      <span className="field__label-wrap" aria-hidden="true">
        <span className="field__label">Last name</span>
      </span>
    </div>
    <div className="field field_v3">
      <label htmlFor="email" className="ha-screen-reader">
        E-mail
      </label>
      <input
        id="email"
        className="field__input"
        placeholder="e.g. AndiiCodes@xyz.com"
      />
      <span className="field__label-wrap" aria-hidden="true">
        <span className="field__label">E-mail</span>
      </span>
    </div>
  </div>
 
</>


  )
}
