// App.js
import React, { useEffect, useRef } from 'react';
import './index.css';
import CarouselItem from './components/Card';

const citiesData = [
  {
    imgSrc: 'https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Great Britain',
    city: 'London',
    popularPlaces: 12,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Indonesia',
    city: 'Bali',
    popularPlaces: 10,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Spain',
    city: 'Barcelona',
    popularPlaces: 10,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/4046386/pexels-photo-4046386.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Italy',
    city: 'Florence',
    popularPlaces: 10,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'United Arab Emirates',
    city: 'Dubai',
    popularPlaces: 10,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'France',
    city: 'Paris',
    popularPlaces: 12,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/572689/pexels-photo-572689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'New Zealand',
    city: 'West Coast',
    popularPlaces: 12,
  },
  // Replace this data if you want.
 
  
];

const App = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      window.$(carouselRef.current).owlCarousel({
        items: 5, 
        loop: true,
        margin: 10,
        nav: true, 
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 5
          }
        }
      });
    }
  }, []);

  return (
    <main>
      <div className="header">
        <span>top cities</span>
        <h1>Our popular cities</h1>
        <p>We are a team of humans with the strategy, tools, and solutions and digital products.</p>
      </div>
      <div className="owl-carousel owl-theme" ref={carouselRef}>
        {citiesData.map((cityData, index) => (
          <CarouselItem key={index} cityData={cityData} />
        ))}
      </div>
    </main>
  );
};

export default App;
