// TranslationApp.js
import React, { useState } from 'react';
import translateText from './api';

const languages = [
  { code: 'hi', name: 'Indian', flag: '🇮🇳' },
  { code: 'ar', name: 'Arabic', flag: '🇦🇪' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  // Add more languages as needed
];

const TranslationApp = () => {
  const [textToTranslate, setTextToTranslate] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('hi');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslation = async () => {
    try {
      const translated = await translateText(textToTranslate, targetLanguage);
      setTranslatedText(translated);
    } catch (error) {
      setTranslatedText('Translation error occurred.');
    }
  };

  return (
    <div className="container">
      <textarea
        value={textToTranslate}
        onChange={(e) => setTextToTranslate(e.target.value)}
        placeholder="Enter text to translate..."
        className="textarea"
      />

      <div className="language-select">
        <span className="flag-icon">
          {languages.find((lang) => lang.code === targetLanguage)?.flag}
        </span>
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          className="select"
        >
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleTranslation} className="button">
        Translate
      </button>

      {translatedText && (
        <div className="result-container">
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslationApp;
