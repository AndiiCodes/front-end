import React, { useState } from 'react';
import { shortenUrl } from './api';
import Loader from './Loader';

function LinkShortener() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const shortenedUrl = await shortenUrl(longUrl);
      setShortUrl(shortenedUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
      setShortUrl('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="link-shortener-container">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="result">
            {shortUrl ? (
                <p>
                Shortened URL:{' '}
                <a href={`http://${shortUrl}`} target="_blank" rel="noopener noreferrer">
                    {shortUrl}
                </a>
                </p>
            ) : (
              <p>No shortened URL available.</p>
            )}
          </div>
        )}
        <button type="submit">Shorten</button>
      </form>
    </div>
  );
}

export default LinkShortener;
