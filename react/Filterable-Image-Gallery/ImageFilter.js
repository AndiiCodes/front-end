import React, { useState } from 'react';
import "./App.css";

function ImageFilter() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterableData = [
    { name: 'nature', src: 'img.png', title: 'Mountains', text: 'Lorem ipsum dolor..' },
    { name: 'cars', src: 'img2.png', title: 'BMW', text: 'Lorem ipsum dolor..' },
    { name: 'people', src: 'img3.png', title: 'Person 1', text: 'Lorem ipsum dolor..' },
    // Add more data for other images/cards
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="image-filter-container">
      <div className="filter-buttons" id="filter-buttons">
        {['all', 'nature', 'cars', 'people'].map((filter) => (
          <button
            key={filter}
            className={`btn-filter ${activeFilter === filter ? 'active-filter' : ''}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter === 'all' ? 'Show all' : filter}
          </button>
        ))}
      </div>
      <div className="filterable-cards" id="filterable-cards">
        {filterableData.map((item, index) => (
          <div
            key={index}
            className={`card-filter ${activeFilter === 'all' || activeFilter === item.name ? '' : 'hide'}`}
          >
            <img src={item.src} alt={item.title} />
            <div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageFilter;
