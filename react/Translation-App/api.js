// api.js
import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_TRANSLATION_API_KEY';

const translateText = async (textToTranslate, targetLanguage) => {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        q: textToTranslate,
        target: targetLanguage,
      }
    );

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error('Translation error occurred.');
  }
};

export default translateText;
