import React, { useState } from 'react';
import fetchTikTokData from './api';
import './index.css';

function App() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responseData = await fetchTikTokData(url);
      setData(responseData);
      setError(null);
    } catch (error) {
      setError('An error occurred while fetching data.');
      setData(null);
    }
  };

  return (
    <div className="app-container">
      <div className="video-background">
        <video autoPlay muted loop className="video-bg">
          <source src="https://res.cloudinary.com/deafnuhyi/video/upload/v1691783973/abstract-gradient-background_xqizdv.mp4" type="video/mp4" />
    // this video url will be expired in Aug 14, 2023.
    // Remove it or Replace it with your own background IMG/VID
    // if you want same background as mine. PM me i'll send it to you.
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>TikTok Video Downloader</h1>
        <h3>Without WaterMark</h3>
        <form onSubmit={handleSubmit} className="centered-form">
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter TikTok URL"
              type="text"
              className="input"
            />
          </div>
          <button type="submit" className="button">
            <span>Download</span>
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {data && (
          <div className="video-container">
            <video controls width="640" height="360">
              <source src={data.data.play} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
