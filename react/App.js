// App.js
import React from 'react'
import Dropdown from "./DropDown.js"
import "./index.css";

export default function App() {
  const dropdownOptions = ['All products', 'Photos', 'Graphics',
   'Templates', 'Plugins'];

  return (
    <div>
    <Dropdown options={dropdownOptions} />
    </div>
  )
}
