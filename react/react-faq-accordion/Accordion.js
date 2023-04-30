// Accordion.js 
import React, { useEffect, useState } from 'react';
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        title: 'Why is the moon sometimes out during the day?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
      },
      {
        id: 2,
        title: 'What is the meaning of life?',
        content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
      },
      {
        id: 3,
        title: 'How do I get started with React?',
        content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
      },
    ]);
  }, []);

  return (
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <AccordionItem items={items} />
    </div>
  );
};

export default Accordion;
