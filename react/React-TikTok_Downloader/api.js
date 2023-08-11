// api.js 
import axios from 'axios';

const fetchTikTokData = async (url) => {
  const options = {
    method: 'GET',
    url: 'https://tiktok-download-without-watermark.p.rapidapi.com/analysis',
    params: {
      url: url,
      hd: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'YOUR_RapidAPI_Key',
      'X-RapidAPI-Host': 'tiktok-download-without-watermark.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchTikTokData;
