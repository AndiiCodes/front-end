import React, { useState, useEffect } from 'react';

const FilterComponent = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterClick = (e) => {
    const titleItem = e.target;
    const current = titleItem.nextElementSibling.querySelectorAll('li');

    setActiveFilters((prevFilters) => {
      const filter = titleItem.textContent;
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((item) => item !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });

    titleItem.classList.toggle('active');
    current.forEach((li, index) => {
      li.classList.toggle('visible');
      if (titleItem.classList.contains('active')) {
        li.style.transitionDelay = index * 40 + 'ms';
      } else {
        li.style.transitionDelay = (current.length - index) * 40 + 'ms';
      }
    });
  };

  useEffect(() => {
    const titleItems = document.querySelectorAll('.title_items');
    titleItems.forEach((titleItem) => {
      titleItem.addEventListener('click', handleFilterClick);
    });
    return () => {
      titleItems.forEach((titleItem) => {
        titleItem.removeEventListener('click', handleFilterClick);
      });
    };
  }, []);

  return (
    <div className="filter">
      <p className="title">Filters</p>

      <p className="title_items">Texto</p>
      <ul>
        <li>
          <input type="radio" id="all" name="type" />
          <label htmlFor="all">All</label>
        </li>
        <li>
          <input type="radio" id="website" name="type" />
          <label htmlFor="website">Website</label>
        </li>
        <li>
          <input type="radio" id="icon" name="type" />
          <label htmlFor="icon">Icon</label>
        </li>
        <li>
          <input type="radio" id="mobile" name="type" />
          <label htmlFor="mobile">Mobile</label>
        </li>
        <li>
          <input type="radio" id="logo" name="type" />
          <label htmlFor="logo">Logo</label>
        </li>
        <li>
          <input type="radio" id="print" name="type" />
          <label htmlFor="print">Print</label>
        </li>
        <li>
          <input type="radio" id="ui" name="type" />
          <label htmlFor="ui">UI</label>
        </li>
        <li>
          <input type="radio" id="illustration" name="type" />
          <label htmlFor="illustration">Illustration</label>
        </li>
      </ul>

      <p className="title_items">City</p>
      <ul>
        <li>
          <input type="radio" id="ny" name="city" />
          <label htmlFor="ny">New York</label>
        </li>
        <li>
          <input type="radio" id="va" name="city" />
          <label htmlFor="va">Vancouver</label>
        </li>
        <li>
          <input type="radio" id="la" name="city" />
          <label htmlFor="la">Los Angeles</label>
        </li>
        <li>
          <input type="radio" id="ch" name="city" />
          <label htmlFor="ch">Chicago</label>
        </li>
        <li>
          <input type="radio" id="se" name="city" />
          <label htmlFor="se">Seattle</label>
        </li>
        <li>
          <input type="radio" id="san" name="city" />
          <label htmlFor="san">San Francisco</label>
        </li>
        <li>
          <input type="radio" id="to" name="city" />
          <label htmlFor="to">Toronto</label>
        </li>
      </ul>

      <p className="title_items">Budget</p>
      <ul>
        <li>
          <input type="radio" id="small" name="bonus" />
          <label htmlFor="small">100 - 300</label>
        </li>
        <li>
          <input type="radio" id="medium" name="bonus" />
          <label htmlFor="medium">300 - 1000</label>
        </li>
        <li>
          <input type="radio" id="big" name="bonus" />
          <label htmlFor="big">1000 - 3000</label>
        </li>
        <li>
          <input type="radio" id="bigest" name="bonus" />
          <label htmlFor="bigest">more 3000</label>
        </li>
      </ul>
    </div>
  );
};

export default FilterComponent;
