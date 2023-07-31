import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const stores = [
  { 
    name: '@AndiiCodes store1', 
    lat: -37.843326, 
    lng: 144.944780,
    openingHours: '9:00 AM - 6:00 PM',
    phoneNumber: '+61 234 563 7890'
  },
//   Add your data here as above^^
];

const StoreMap = (props) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const onMarkerClick = (props, marker, e) => {
    setActiveMarker(marker);
    setSelectedPlace(props.store);
    setShowingInfoWindow(true);
  };

  const onClose = () => {
    setActiveMarker(null);
    setSelectedPlace(null);
    setShowingInfoWindow(false);
  };

  return (
    <div className="map-container">
      <Map
        google={props.google}
        zoom={10}
        style={{ width: '100%', height: '100%' }}
        initialCenter={{ lat: -37.843326, lng: 144.944780 }}
      >
        {stores.slice(0, 10).map((store, index) => (
          <Marker
            key={index}
            position={{ lat: store.lat, lng: store.lng }}
            title={store.name}
            store={store} 
            onClick={onMarkerClick}
          />
        ))}
        {selectedPlace && (
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            onClose={onClose}
          >
            <div>
              <h3>{selectedPlace.name}</h3>
              <p>Opening Hours: {selectedPlace.openingHours}</p>
              <p>Phone Number: {selectedPlace.phoneNumber}</p>
            </div>
          </InfoWindow>
        )}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEYS', //replace with your google api keys.
})(StoreMap);
