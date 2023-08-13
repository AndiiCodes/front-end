// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'YOUR_RAPID_API_KEYS',
    'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
  },
});

export const downloadInstagramVideo = async (url) => {
  try {
    const response = await api.get('/index', {
      params: {
        url: url,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
