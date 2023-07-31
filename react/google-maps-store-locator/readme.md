![Star Badge](https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99)
# Requirement for this Project:

### React Project Setup:

Set up a new React project using Create React App or any other preferred method.
.e.i..
```
npx create-react-app GoogleMapsStoreLocator
```

### Google Maps API Key:

Obtain a Google Maps API key from the Google Cloud Console by following the steps provided by 
<a href="https://console.cloud.google.com/">Google Cloud</a> .

### NPM Library Installation:

Install the google-maps-react library using the following command in your project directory:

```npm install google-maps-react```

### Store Data:

Add store data to the stores array in the StoreMap component. Each store should have the following properties:
name: Name of the store.

- lat: Latitude of the store's location.
- lng: Longitude of the store's location.
- openingHours: Opening hours of the store.
- phoneNumber: Phone number of the store.

#

Replace 'YOUR_API_KEYS' in the GoogleApiWrapper with your actual Google Maps API key.
