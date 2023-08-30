import React, { useState, useEffect } from 'react';

const CaptchaGenerator = () => {
  const [captchaText, setCaptchaText] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('#000'); 

  // Function to generate captcha
  const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split('');
    const changedString = randomStringArray.map((char) =>
      Math.random() > 0.5 ? char.toUpperCase() : char
    );
    const captchaText = changedString.join(' ');
    setCaptchaText(captchaText);
  };

  useEffect(() => {
    setIsSubmitDisabled(!captchaInput);
  }, [captchaInput]);

  const validateCaptcha = () => {
    const formattedCaptcha = captchaText.replace(/\s/g, '');
    if (formattedCaptcha === captchaInput) {
      setMessageColor('green');
      setMessage('Entered captcha is correct');
    } else {
      setMessageColor('#FF2525');
      setMessage('Entered captcha is not correct');
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="container">
      <header>Captcha</header>
      <div className="input_field captch_box">
        <input type="text" value={captchaText} disabled />
        <button className="refresh_button" onClick={generateCaptcha}>
          <i className="fa-solid fa-rotate-right"></i>
        </button>
      </div>
      <div className="input_field captch_input">
        <input
          type="text"
          placeholder="Enter captcha"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
        />
      </div>
      <div className="message" style={{ color: messageColor }}>
        {message}
      </div>
      <div className="input_field button">
        <button disabled={isSubmitDisabled} onClick={validateCaptcha}>
          Submit Captcha
        </button>
      </div>
    </div>
  );
};

export default CaptchaGenerator;
