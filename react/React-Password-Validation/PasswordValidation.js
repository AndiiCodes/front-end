import React, { useState, useEffect, useMemo } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [allRequirementsMet, setAllRequirementsMet] = useState(false);

  const requirements = useMemo(() => [
    { regex: /.{8,}/, text: 'At least 8 characters length' },
    { regex: /[0-9]/, text: 'At least 1 number (0...9)' },
    { regex: /[a-z]/, text: 'At least 1 lowercase letter (a...z)' },
    { regex: /[^A-Za-z0-9]/, text: 'At least 1 special symbol (!...$)' },
    { regex: /[A-Z]/, text: 'At least 1 uppercase letter (A...Z)' },
  ], []);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    
    const allMet = requirements.every((req) => req.regex.test(password));
    setAllRequirementsMet(allMet);
  }, [password, requirements]);

  return (
    <div className="wrapper">
      <div className="pass-field">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Create password"
          value={password}
          onChange={handlePasswordChange}
        />
        <i className={`fa-solid fa-eye${showPassword ? '-slash' : ''}`} onClick={togglePasswordVisibility}></i>
      </div>
      <div className="content">
        <p>Password must contain:</p>
        <ul className="requirement-list">
          {requirements.map((req, index) => (
            <li key={index} className={req.regex.test(password) ? 'valid' : ''}>
              <i className={`fa-solid ${req.regex.test(password) ? 'fa-check' : 'fa-circle'}`}></i>
              <span>{req.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='wrapper'>
      <button disabled={!allRequirementsMet}>Submit</button>
      </div>
    </div>
  );
};

export default PasswordInput;
