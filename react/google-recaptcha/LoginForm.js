// ***NOTE , im using captcha V2 , 
// if you use this code, you SHOULD 
// get keys for captcha V2 and not V3!
// google.com/recaptcha/admin/create
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      setErrorMessage('Please complete the CAPTCHA.');
      return;
    }
    //Here you would normally make an API call to verify the reCAPTCHA token
    //and perform the login logic. For this example, 
    //let's simulate a successful login.
    if (email === 'andii@codes.com' && password === 'mypassword') {
      alert('Login successful!');
    } else {
      alert('Login failed. Incorrect email or password.');
    }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <ReCAPTCHA
          sitekey="REPLACE_With_Your_Site_Keys"
          onChange={handleCaptchaChange}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button
          type="submit"
          className={`submit ${captchaValue ? 'enabled' : 'disabled'}`}
          disabled={!captchaValue}
        >
          Sign in
        </button>
        <p className="signup-link">
          No account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
