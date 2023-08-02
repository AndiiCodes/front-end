import React, { useState } from 'react';

const RestaurantFinder = () => {
  const [city, setCity] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const apiKey = 'YOUR_GOOGLE_API_KEYS';

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${apiKey}&query=restaurants+in+${city}`
      );

      if (response.ok) {
        const data = await response.json();
        const topRestaurants = data.results.slice(0, 10);
        setRestaurants(topRestaurants);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getImageUrl = (photoReference) =>
    `https://maps.googleapis.com/maps/api/place/photo?key=${apiKey}&photoreference=${photoReference}&maxwidth=200`;

  return (
    <div className="restaurant-finder">
      <h2>Find Top Restaurants in your area</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="📌Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="restaurants-list">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img src={getImageUrl(restaurant.photos?.[0]?.photo_reference)} alt={restaurant.name} />
            <div className="restaurant-details">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.formatted_address}</p>
              {restaurant.rating && (
                <p>Rating: {restaurant.rating}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantFinder;
