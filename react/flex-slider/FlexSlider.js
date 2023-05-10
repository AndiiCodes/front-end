import React, { useState } from "react";

const Artists = () => {
  const [active, setActive] = useState(0);

  const artists=[
    {
      name: "Dom Dolla",
      description: `Dom Dolla is one of the latest Australian DJ/Producers to break globally following a succession of releases like “Take It”, “San Frandisco” & “Pump The Brakes”. Dom’s unique blend of house music has amassed over 300 million+ streams, Platinum-certified records, ARIA Award for Best Dance Release, back to back Beatport #1’s, US Billboard Dance top 10’s, triple j’s hottest 100, Shazam & Spotify Global top 100 charts.`,      
      backgroundUrl: "https://assets.codepen.io/152347/dom-dolla.jpg"
    },
    {
      name: "Crooked Colours",
      description: `Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album "Langata".`,
      backgroundUrl: "https://assets.codepen.io/152347/crooked-colours.jpg"
    },
    {
      name: "Mallrat",
      description: `Grace Kathleen Elizabeth Shaw, known professionally as Mallrat, is a 23-year-old Australian musician, singer, and rapper from Brisbane.  Mallrat released her official debut single, “Suicide Blonde” in 2015 whilst in her last year of High School. Since then, she has gone on to release three EPs: Uninvited (2016), In the Sky (2018) and Driving Music (2019).`,
      backgroundUrl: "https://assets.codepen.io/152347/mallrat.jpg"
    }
  ];
        return (
          <ul>
          {artists.map((artist, i) => (
            <li
              key={i}
              style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
              role="button"
              className={active === i ? 'active' : ''}
              onClick={() => setActive(i)}
            >
              <h3>{artist.name}</h3>
              <div className="section-content">
                <div className="inner">
                  <div className="bio">
                    <h2>{artist.name}</h2>
                    <p>{artist.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
        };
        
        export default Artists;



