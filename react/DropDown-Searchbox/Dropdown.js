import React, { useState } from 'react';

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="wrapper">
      <div className="dropdown" data-open={isOpen}>
        <label htmlFor="dropdown-toggle" className="dropdown-active">
          <span id="dropdown-selected">{selectedOption}</span>
          <i className="fa-solid fa-chevron-down dropdown-icon"></i>
        </label>
        <input className="dropdown-toggle"
          type="checkbox" name="dropdown-toggle"
          id="dropdown-toggle" aria-controls="dropdown-list" 
		  checked={isOpen}  onChange={handleToggle} />
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option} data-option={option}
              className={selectedOption === option ? 'active' : ''}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="searchbar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" name="search" id="search"
		 placeholder="Search apps, plugins and more" />
      </div>
    </div>
  );
};

export default Dropdown;
