import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState('');
  const [productInfo, setProductInfo] = useState(null);

  const handleBarcodeChange = (e) => {
    setBarcode(e.target.value);
  };

  const handleGetData = async () => {
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`
        //this is a free api, make sure to check their amazing work!
      );

      setProductInfo(response.data.product);
    } catch (error) {
      console.error('Error fetching product information:', error);
    }
  };

  return (
    <div className="container">
      <label>
        Enter Product Barcode:
        <input type="text" value={barcode} onChange={handleBarcodeChange} />
      </label>
      <button onClick={handleGetData}>Get Data</button>

      {productInfo && (
        <div className="product-info">
          <h2>Product Information</h2>
          <p>Barcode: {productInfo.code}</p>
          <div>
            <img src={productInfo.image_url} alt="Product" />
            <div>
              <p>Name: {productInfo.product_name}</p>
              <p>Country of Origin: {productInfo.countries_tags}</p>
              <p>Energy: {productInfo.nutriments.energy}kj</p>
              <p>Sugar: {productInfo.nutriments.sugars}g</p>
              <p>Salt: {productInfo.nutriments.salt}g</p>
              <p>Ingredients: {productInfo.ingredients_text}</p>
              {/* Add more nutrient information as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;
