// ArtEffects.js
import React, { useState, useEffect } from 'react';
import { getStyles, applyArtEffect, getSubmissionStatus } from './api';

const ArtEffects = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [artStyles, setArtStyles] = useState([]);
  const [selectedArtStyle, setSelectedArtStyle] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submissionId, setSubmissionId] = useState(null);

  useEffect(() => {
    fetchArtStyles();
  }, []);

  const fetchArtStyles = async () => {
    try {
      const response = await getStyles();
      setArtStyles(response.data.styles);
      setSelectedArtStyle(response.data.styles[0].id); 
    } catch (error) {
      console.error('Error fetching art styles:', error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setUploadedImage(null); 
    setSubmissionId(null); 
  };

  const handleStyleChange = (e) => {
    setSelectedArtStyle(e.target.value);
  };

  const applyEffect = async () => {
    if (!selectedFile || !selectedArtStyle) return; 

    setLoading(true);
    try {
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        const imageBase64Encoded = fileReader.result.split(',')[1];
        console.log('Image Base64:', imageBase64Encoded);
        const response = await applyArtEffect(selectedArtStyle, 
          imageBase64Encoded, 512, null, false, false);
        console.log('Response:', response.data);
        setSubmissionId(response.data.submissionId); 
      };
      fileReader.readAsDataURL(selectedFile);
    } catch (error) {
      console.error('Error applying art effect:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkStatus = async () => {
      if (!submissionId) return;

      try {
        const response = await getSubmissionStatus(submissionId);
        if (response.data.status === 'finished') {
          setUploadedImage(response.data.url);
          setLoading(false);
          setSubmissionId(null); 
        } else if (response.data.status === 'error') {
          console.error('Error processing image:', response.data.message);
          setLoading(false);
          setSubmissionId(null); 
        } else {
          setTimeout(checkStatus, 3000); 
        }
      } catch (error) {
        console.error('Error checking submission status:', error);
        setLoading(false);
        setSubmissionId(null); 
      }
    };

    checkStatus();
  }, [submissionId]);

  return (
    <div className="art-effects-container">
      <input type="file" onChange={handleFileChange} />
      <br />
      <select value={selectedArtStyle} onChange={handleStyleChange}>
        {artStyles.map((style) => (
          <option key={style.id} value={style.id}>
            {style.title}
          </option>
        ))}
      </select>
      <br />
      <button onClick={applyEffect}>Apply Art Effect</button>
      {loading && <p className="loading-text">Loading...</p>} 
      <div className="image-container">
        {uploadedImage && <img className="uploaded-image" src={uploadedImage} alt="Uploaded with Art Effect" />}
      </div>
    </div>
  );
};

export default ArtEffects;
