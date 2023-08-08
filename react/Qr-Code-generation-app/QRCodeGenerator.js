import React, { useState } from 'react';
import { generateQRCode } from './api';

function QRCodeGenerator() {
  const [qrData, setQrData] = useState('example.com');
  const [qrSize, setQrSize] = useState('200x200');

  return (
    <div className="app-container">
      <h1 className="app-title">QR Code Generator</h1>
      <div className="input-container">
        <label className="input-label">QR URL:</label>
        <input
          className="input-field"
          type="text"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label className="input-label">QR Size:</label>
        <input
          className="input-field"
          type="text"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
        />
      </div>
      <div className="qr-code">
        <img className="qr-image" src={generateQRCode(qrData, qrSize)} alt="QR Code" />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
