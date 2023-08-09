const qrServerBaseUrl = 'https://api.qrserver.com/v1/create-qr-code/';

export const generateQRCode = (qrData, qrSize) => {
  const qrImageUrl = `${qrServerBaseUrl}?data=${encodeURIComponent(qrData)}&size=${qrSize}`;
  return qrImageUrl;
};


// no api key needed.. this service is free.
// make sure to check thier amazing work.
// https://goqr.me/
