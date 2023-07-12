import React, { useState } from 'react';

function NavigationTab() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-list"
        >
           <line x1={8} y1={6} x2={21} y2={6} />
         <line x1={8} y1={12} x2={21} y2={12} />
         <line x1={8} y1={18} x2={21} y2={18} />
         <line x1={3} y1={6} x2={3} y2={6} />
         <line x1={3} y1={12} x2={3} y2={12} />
         <line x1={3} y1={18} x2={3} y2={18} />
        </svg>
      ),
      text: 'List'
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-tag"
        >
         <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          
        </svg>
      ),
      text: 'Tags'
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-shopping-bag"
        >
           <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
         <line x1={3} y1={6} x2={21} y2={6} />
         <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
      text: 'Bag'
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-bell"
        >
           <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
         <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
      text: 'Notifications'
    }
  ];

  return (
    <nav className="navigation-tab">
      {tabItems.map((item, index) => (
        <div
          key={index}
          className={`navigation-tab-item ${activeTab === index ? 'active' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          <span className="navigation-tab__icon">{item.icon}</span>
          <span className="navigation-tab__txt">{item.text}</span>
        </div>
      ))}
      <div className="navigation-tab-overlay" style={{ left: activeTab * 130 + 'px' }} />
    </nav>
  );
}

export default NavigationTab;
