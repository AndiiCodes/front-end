import React, { useState } from 'react';


function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabHeaders = [
    { icon: 'fa fa-code', text: 'Code' },
    { icon: 'fa fa-pencil-square', text: 'About' },
    { icon: 'fa fa-bar-chart', text: 'Services' },
    { icon: 'fa fa-envelope', text: 'Contact' }
  ];

  const tabContentData = [
    {
      title: 'Code',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...'
    },
    {
      title: 'About',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...'
    },
    {
      title: 'Services',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique... '
    },
    {
      title: 'Contact',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...'
    }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-header">
        {tabHeaders.map((header, index) => (
          <div
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            <i className={header.icon}></i> {header.text}
          </div>
        ))}
      </div>
      <div className="tab-indicator" style={{ top: `calc(80px + ${activeTab * 50}px)` }}></div>
      <div className="tab-content">
        {tabContentData.map((tab, index) => (
          <div key={index} className={activeTab === index ? 'active' : ''}>
            <i className={tabHeaders[index].icon}></i>
            <h2>{tab.title}</h2>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
