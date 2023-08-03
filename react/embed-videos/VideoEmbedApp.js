import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader'; 

const VideoEmbedApp = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = 'YOUR_API_KEYS'; 
  const CHANNEL_NAME = 'CHANNEL_NAME';

  useEffect(() => {
    const fetchChannelId = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
          params: {
            part: 'contentDetails',
            forUsername: CHANNEL_NAME,
            key: API_KEY,
          },
        });

        const uploadsPlaylistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;

        const fetchVideos = async () => {
          try {
            const playlistResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
              params: {
                part: 'snippet',
                playlistId: uploadsPlaylistId,
                maxResults: 5,
                key: API_KEY,
              },
            });

            const videoData = playlistResponse.data.items;
            setVideos(videoData);
          } catch (error) {
            console.error('Error fetching videos:', error);
          } finally {
            setTimeout(() => {
              setIsLoading(false); 
            }, 4000);
          }
        };

        fetchVideos();
      } catch (error) {
        console.error('Error fetching channel ID:', error);
        setIsLoading(false); 
      }
    };

    fetchChannelId();
  }, []);

  return (
    <div className="app-container">
      <h1>Last 5 Videos</h1>
      <div className="video-container">
        {isLoading ? (
          <div className="loader"><Loader /></div>
        ) : (
          videos.map((video) => (
            <div key={video.snippet.resourceId.videoId} className="video-item">
              <iframe
                title={video.snippet.title}
                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoEmbedApp;
