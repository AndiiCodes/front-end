// LoginPage.js 
import React, { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    const root = document.documentElement;
    const eye = document.getElementById('eyeball');
    const beam = document.getElementById('beam');
    const passwordInput = document.getElementById('password');

    const handleMouseMove = (e) => {
      let rect = beam.getBoundingClientRect();
      let mouseX = rect.right + (rect.width / 2);
      let mouseY = rect.top + (rect.height / 2);
      let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
      let degrees = (rad * (20 / Math.PI) * -1) - 350;

      root.style.setProperty('--beamDegrees', `${degrees}deg`);
    };

    const handleEyeClick = (e) => {
      e.preventDefault();
      document.body.classList.toggle('show-password');
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.focus();
    };

    root.addEventListener('mousemove', handleMouseMove);
    eye.addEventListener('click', handleEyeClick);

    return () => {
      root.removeEventListener('mousemove', handleMouseMove);
      eye.removeEventListener('click', handleEyeClick);
    };
  }, []);
// LoginPage.js 
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-item">
          <label htmlFor="username">Username</label>
          <div className="input-wrapper">
            <input
              type="text"
              id="username"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              data-lpignore="true"
            />
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              data-lpignore="true"
            />
            <button type="button" id="eyeball">
              <div className="eye" />
            </button>
            <div id="beam" />
          </div>
        </div>
        <button id="submit">Sign in</button>
      </form>
    </div>
  );
}
