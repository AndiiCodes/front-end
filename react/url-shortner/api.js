// api.js

import axios from 'axios';

const apiKey = 'YOUR_API_KEY';
const customDomain = 'short.andiicodes.com';

const rebrandlyApi = axios.create({
  baseURL: 'https://api.rebrandly.com/v1/',
  headers: {
    apikey: apiKey,
    'Content-Type': 'application/json',
  },
});

export const shortenUrl = async (longUrl) => {
  try {
    const response = await rebrandlyApi.post('links', {
      destination: longUrl,
      domain: { fullName: customDomain },
    });
    
    return response.data.shortUrl; 
  } catch (error) {
    throw error;
  }
};
