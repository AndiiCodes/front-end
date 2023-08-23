import React, { useState } from 'react';

const TabComponent = () => {
  const tabData = [
    {
      id: 'tab_item_1',
      title: 'Terms of use',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis tempore error. Dolores, inventore? Animi sit amet nulla culpa et, eaque quam cum aspernatur beatae expedita, cumque provident. Id, deleniti minima doloremque voluptate quibusdam asperiores eius aut ratione, nostrum, vel maiores exercitationem! Modi nostrum accusantium dolor commodi tenetur incidunt ex?',
      content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab illum temporibus perspiciatis suscipit ullam cum mollitia officiis accusantium. Odio.',
      content3: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis tempore error. Dolores, inventore? Animi sit amet nulla culpa et, eaque quam cum aspernatur beatae expedita, cumque provident. Id, deleniti minima doloremque voluptate quibusdam asperiores eius aut ratione, nostrum, vel maiores exercitationem! Modi nostrum accusantium dolor commodi tenetur incidunt ex?',
      
    },
    {
      id: 'tab_item_2',
      title: 'Intellectual property rights',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab illum temporibus perspiciatis suscipit ullam cum mollitia officiis accusantium. Odio.',
      content2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis tempore error. Dolores, inventore? Animi sit amet nulla culpa et, eaque quam cum aspernatur beatae expedita, cumque provident. Id, deleniti minima doloremque voluptate quibusdam asperiores eius aut ratione, nostrum, vel maiores exercitationem! Modi nostrum accusantium dolor commodi tenetur incidunt ex?',
      content3: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis tempore error. Dolores, inventore? Animi sit amet nulla culpa et, eaque quam cum aspernatur beatae expedita, cumque provident. Id, deleniti minima doloremque voluptate quibusdam asperiores eius aut ratione, nostrum, vel maiores exercitationem! Modi nostrum accusantium dolor commodi tenetur incidunt ex?',
    },
    {
      id: 'tab_item_3',
      title: 'Prohibited activities',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis tempore error. Dolores, inventore? Animi sit amet nulla culpa et, eaque quam cum aspernatur beatae expedita, cumque provident. Id, deleniti minima doloremque voluptate quibusdam asperiores eius aut ratione, nostrum, vel maiores exercitationem! Modi nostrum accusantium dolor commodi tenetur incidunt ex?',
      content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab illum temporibus perspiciatis suscipit ullam cum mollitia officiis accusantium. Odio.',
      content3: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis tempore error. Dolores, inventore? Animi sit amet nulla culpa et, eaque quam cum aspernatur beatae expedita, cumque provident. Id, deleniti minima doloremque voluptate quibusdam asperiores eius aut ratione, nostrum, vel maiores exercitationem! Modi nostrum accusantium dolor commodi tenetur incidunt ex?',
    },
    {
      id: 'tab_item_4',
      title: 'Termination clause',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab illum temporibus perspiciatis suscipit ullam cum mollitia officiis accusantium. Odio.',
      content2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis tempore error. Dolores, inventore? Animi sit amet nulla culpa et, eaque quam cum aspernatur beatae expedita, cumque provident. Id, deleniti minima doloremque voluptate quibusdam asperiores eius aut ratione, nostrum, vel maiores exercitationem! Modi nostrum accusantium dolor commodi tenetur incidunt ex?',
      content3: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis tempore error. Dolores, inventore? Animi sit amet nulla culpa et, eaque quam cum aspernatur beatae expedita, cumque provident. Id, deleniti minima doloremque voluptate quibusdam asperiores eius aut ratione, nostrum, vel maiores exercitationem! Modi nostrum accusantium dolor commodi tenetur incidunt ex?',
    },
    {
      id: 'tab_item_5',
      title: 'Governing law',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis tempore error. Dolores, inventore? Animi sit amet nulla culpa et, eaque quam cum aspernatur beatae expedita, cumque provident. Id, deleniti minima doloremque voluptate quibusdam asperiores eius aut ratione, nostrum, vel maiores exercitationem! Modi nostrum accusantium dolor commodi tenetur incidunt ex?',
      content2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis tempore error. Dolores, inventore? Animi sit amet nulla culpa et, eaque quam cum aspernatur beatae expedita, cumque provident. Id, deleniti minima doloremque voluptate quibusdam asperiores eius aut ratione, nostrum, vel maiores exercitationem! Modi nostrum accusantium dolor commodi tenetur incidunt ex?',
      content3: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis tempore error. Dolores, inventore? Animi sit amet nulla culpa et, eaque quam cum aspernatur beatae expedita, cumque provident. Id, deleniti minima doloremque voluptate quibusdam asperiores eius aut ratione, nostrum, vel maiores exercitationem! Modi nostrum accusantium dolor commodi tenetur incidunt ex?',
    },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="wrapper flex_align_justify">
      <div className="tc_wrap">
        <div className="tabs_list">
          <ul>
            {tabData.map((tab) => (
              <li
                key={tab.id}
                data-tc={tab.id}
                className={activeTab === tab.id ? 'active' : ''}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="tabs_content">
          <div className="tab_head">
            <h2>Terms &amp; Conditions</h2>
          </div>
          <div className="tab_body">
            {tabData.map((tab) => (
              activeTab === tab.id && (
                <div
                  key={tab.id}
                  className={`tab_item ${tab.id} ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <h3>{tab.title}</h3>
                  <p>{tab.content}</p>
                  <p>{tab.content2}</p>
                  <p>{tab.content3}</p>
                </div>
              )
            ))}
          </div>
          <div className="tab_foot flex_align_justify">
            <button className="decline">Decline</button>
            <button className="agree">Agree</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
