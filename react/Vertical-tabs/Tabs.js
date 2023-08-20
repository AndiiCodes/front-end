import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabHeaders = [
    { icon: 'fa fa-code', text: 'Code' }
    // Rest of the Headers here.. 
  ];

  const tabContentData = [
    {
      title: 'Code',
      content: 'Lorem ipsum dolor sit amet...'
    }
    // Rest of the content here.. 
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
      <div className="tab-indicator" ></div>
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
