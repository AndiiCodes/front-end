//test Url  https://www.instagram.com/reel/CvzvzCQNR9J/?igshid=MzRlODBiNWFlZA==
// App.js 
import React, { useState } from 'react';
import { downloadInstagramVideo } from './api';
import './index.css'; 
import Loader from './Loader';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (videoUrl) {
      setIsLoading(true);
      try {
        const data = await downloadInstagramVideo(videoUrl);
        setVideoData(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <video className="background-video" loop muted autoPlay>
        <source src="https://res.cloudinary.com/deafnuhyi/video/upload/v1691920847/Untitled_cjlqzp.mov" type="video/mp4" />
      </video>
    // This video url will expire in Aug 15, 2023.
    // feel free to remove it or replace it with your own.
      <div className="content">
        <h1 className="heading">Instagram Reel Video Downloader</h1>
        <input type="text" className="input"
          placeholder="Reel Url" value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        {isLoading ? (
          <div><Loader /></div>
        ) : (
          videoData && (
            <div className="video-section">
              <video className="video-player" controls>
                <source src={videoData.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )
        )}
        <button className="button" onClick={handleDownload}>
        <span>Download</span></button>
      </div>
    </div>
  );
}

export default App;
