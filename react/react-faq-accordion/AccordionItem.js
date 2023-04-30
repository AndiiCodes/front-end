// AccordionItem.js 
import React, {  useState } from 'react';

const AccordionItem = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <button
            id={`accordion-button-${item.id}`}
            aria-expanded={index === activeIndex}
            onClick={() => toggleAccordion(index)}
          >
            <span className="accordion-title">{item.title}</span>
            <span className="icon" aria-hidden="true" />
          </button>
          {index === activeIndex && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default AccordionItem;
