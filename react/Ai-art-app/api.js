// api.js
import axios from 'axios';

const API_KEY = 'YOUR_DEEP-ART-EFFECTS_API_KEY';
const API_ENDPOINT = 'https://api.deeparteffects.com/v1/noauth';

const getStyles = () => {
  return axios.get(`${API_ENDPOINT}/styles`, {
    headers: {
      'x-api-key': API_KEY,
    },
  });
};

const applyArtEffect = (styleId, imageBase64Encoded, imageSize,
   partnerId, optimizeForPrint, useOriginalColors) => {
  return axios.post(
    `${API_ENDPOINT}/upload`,
    {
      styleId,
      imageBase64Encoded,
      imageSize,
      partnerId,
      optimizeForPrint,
      useOriginalColors,
    },
    {
      headers: {
        'x-api-key': API_KEY,
      },
    }
  );
};

const getSubmissionStatus = (submissionId) => {
  return axios.get(`${API_ENDPOINT}/result?submissionId=${submissionId}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  });
};

export { getStyles, applyArtEffect, getSubmissionStatus };
