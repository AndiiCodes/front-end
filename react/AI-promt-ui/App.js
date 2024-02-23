import React, { useState } from 'react';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div id="form" className={`form ${isFormOpen ? 'open' : ''}`}>
      <div id="heading" className="glass glass--gradient glass--heading" onClick={toggleForm}>
        <span className="form-header">
          <span className="form-icon" />
          <span className="form-title">
            What would you like to build today?
          </span>{" "}
        </span>
        <button className="form-close-button">✕</button>
      </div>
      <div id="input" className="glass">
        <input type="text" placeholder="Type your request here" />
      </div>
    </div>
  );
}

export default App;
