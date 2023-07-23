import React, { useState } from 'react';


const CheckboxForm = () => {
  const initialCheckboxes = [
    { name: 'A', label: 'Apples', checked: true },
    { name: 'B', label: 'Bananas', checked: false },
    { name: 'C', label: 'Cherries', checked: false },
    { name: 'D', label: 'Oranges', checked: false },
  ];

  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.name === name ? { ...checkbox, checked } : checkbox
      )
    );
  };

  return (
    <form>
      {checkboxes.map((checkbox) => (
        <label key={checkbox.name} className="checkbox-label">
          <input
            type="checkbox"
            id={checkbox.name} 
            name={checkbox.name} 
            checked={checkbox.checked}
            onChange={handleChange}
          />
          <span>{checkbox.label}</span>
        </label>
      ))}
    </form>
  );
};

export default CheckboxForm;
