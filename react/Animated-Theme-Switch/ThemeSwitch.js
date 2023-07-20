import React, { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPristine, setIsPristine] = useState(true);

  useEffect(() => {
    // Initially set the switch state based on the user's preferred color scheme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsChecked(true);
    }
  }, []);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
    setIsPristine(false);
  };

  return (
    <label className={`switch ${isChecked ? 
    'switch--checked' : ''} ${isPristine ? 'switch--pristine' : ''}`}>
      <input className="switch__input" type="checkbox"
        role="switch" checked={isChecked} onChange={handleToggle} />
      <svg
        className={`switch__scene ${isChecked ? 'switch__scene--checked' : ''}`}
        viewBox="0 0 48 24"
        width="48px"
        height="24px"
        aria-hidden="true"
      >
        <symbol id="switch-cloud" viewBox="0 0 10 6">
			<path d="m7.5,1c-.238,0-.463.049-.675.125-.55-.681-1.381-1.125-2.325-1.125-1.13,0-2.103.633-2.614,1.556-.124-.033-.251-.056-.386-.056-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5c.134,0,.262-.023.386-.056.511.924,1.484,1.556,2.614,1.556.943,0,1.775-.444,2.325-1.125.212.076.437.125.675.125,1.105,0,2-.895,2-2s-.895-2-2-2Z"/>
		</symbol>
		<symbol id="switch-star" viewBox="0 0 4 4">
			<path d="m2.277.172l.379.767c.045.091.132.154.233.169l.847.123c.253.037.355.348.171.527l-.613.597c-.073.071-.106.173-.089.273l.145.843c.043.252-.222.445-.448.326l-.757-.398c-.09-.047-.197-.047-.287,0l-.757.398c-.227.119-.491-.073-.448-.326l.145-.843c.017-.1-.016-.202-.089-.273L.094,1.758c-.183-.179-.082-.49.171-.527l.847-.123c.101-.015.188-.078.233-.169l.379-.767c.113-.23.441-.23.554,0Z"/>
		</symbol>
		<defs>
			<linearGradient id="switch-sun1" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stop-color="hsl(18,90%,50%)" />
				<stop offset="1" stop-color="hsl(43,90%,50%)" />
			</linearGradient>
			<linearGradient id="switch-sun2" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stop-color="hsl(43,90%,50%)" />
				<stop offset="1" stop-color="hsl(33,90%,50%)" />
			</linearGradient>
			<linearGradient id="switch-moon1" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stop-color="hsl(213,90%,95%)" />
				<stop offset="1" stop-color="hsl(213,90%,85%)" />
			</linearGradient>
			<linearGradient id="switch-moon2" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stop-color="hsla(213,90%,95%,0)" />
				<stop offset="1" stop-color="hsla(213,90%,95%,1)" />
			</linearGradient>
			<linearGradient id="switch-moon3" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stop-color="hsla(213,90%,75%,1)" />
				<stop offset="1" stop-color="hsla(213,90%,75%,0)" />
			</linearGradient>
			<linearGradient id="switch-cloud1" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stop-color="hsla(0,0%,100%,1)" />
				<stop offset="1" stop-color="hsla(0,0%,100%,0)" />
			</linearGradient>
		</defs>
		<g class="switch__stars" fill="hsl(213,90%,95%)">
			<g class="switch__star" transform="translate(28,14) scale(0)">
				<use href="#switch-star" width="4px" height="4px" />
			</g>
			<g class="switch__star" transform="translate(21,13) scale(0)">
				<use href="#switch-star" width="4px" height="4px" />
			</g>
			<g class="switch__star" transform="translate(17,10) scale(0)">
				<use href="#switch-star" width="4px" height="4px" />
			</g>
			<g class="switch__star" transform="translate(24,6) scale(0)">
				<use href="#switch-star" width="4px" height="4px" />
			</g>
			<g class="switch__star" transform="translate(31,5) scale(0)">
				<use href="#switch-star" width="4px" height="4px" />
			</g>
		</g>
		<g class="switch__handle" transform="translate(12,12)">
			<g class="switch__handle-side">
				<circle r="8" fill="url(#switch-sun1)" />
				<circle r="6.5" fill="url(#switch-sun2)" />
			</g>
			<g class="switch__handle-side" opacity="0">
				<circle r="8" fill="url(#switch-moon1)" />
				<circle r="6.5" fill="url(#switch-moon2)" />
				<clipPath id="switch-moon-clip">
					<circle class="switch__moon-hole" r="1.5" cx="-6" cy="2" />
					<circle class="switch__moon-hole" r="1.5" cx="-1" cy="3" />
					<circle class="switch__moon-hole" r="2" cx="-1" cy="8" />
					<circle class="switch__moon-hole" r="1" cx="2" cy="0" />
					<circle class="switch__moon-hole" r="5" cx="8" cy="6" />
				</clipPath>
				<circle r="8" fill="url(#switch-moon3)" clip-path="url(#switch-moon-clip)" />
			</g>
		</g>
		<g fill="url(#switch-cloud1)">
			<use class="switch__cloud" href="#switch-cloud" width="10" height="6" transform="translate(34,9)" />
			<use class="switch__cloud" href="#switch-cloud" width="10" height="6" transform="translate(24,13) scale(0.8)" />
			<use class="switch__cloud" href="#switch-cloud" width="10" height="6" transform="translate(24,5) scale(0.6)" />
		</g>


      </svg>
      <span className="switch__text">Dark Mode</span>
    </label>
  );
};

export default ThemeSwitch;




        	
