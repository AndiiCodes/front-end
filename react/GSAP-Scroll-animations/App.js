/* global gsap */

import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    if (isAnimationOk) {
      setupAnimations();
    }

    function setupAnimations() {
      gsap.from(".stroke__wide", {
        drawSVG: "0%",
        delay: 1,
        scrollTrigger: {
          trigger: "main",
          start: "-10% top",
          end: "bottom+=30% bottom",
          scrub: 1
        }
      });

      gsap.from(".stroke__mask", {
        drawSVG: "0%",
        scrollTrigger: {
          trigger: "#page",
          start: "-7% top",
          end: "bottom+=20% bottom",
          scrub: 1
        }
      });

      gsap.from(".stroke__narrow", {
        "--dashOffset": 2000,
        scrollTrigger: {
          trigger: "main",
          start: "-10% top",
          end: "bottom+=30% bottom",
          scrub: 2
        }
      });

      gsap.set(".stroke__blob", { transformOrigin: "50% 100%" });
      gsap.from(".stroke__blob", {
        scale: 0.85,
        y: 3000,
        x: -500,
        rotate: 10,
        delay: 1,
        scrollTrigger: {
          trigger: "main",
          start: "center top",
          end: "bottom top",
          toggleActions: "restart pause resume reset",
          scrub: 1
        }
      });

      let figures = gsap.utils.toArray(".gallery__image");
      figures.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "resume pause resume pause"
          }
        });
      });

      let images = gsap.utils.toArray(".gallery__image img");
      images.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 1.5,
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "resume pause resume pause"
          }
        });
      });

      let headers = gsap.utils.toArray(".header");
      headers.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          yPercent: 5,
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "resume pause resume pause"
          }
        });
      });
    }
  }, []);

  return (
    <main id="page">
    <section className="section section--hero">
      <div className="gallery">
        <h2 className="header header--primary gallery__header">
          <span>the thing</span>
        </h2>
        <figure className="gallery__image gallery__image--11">
          <img src="https://picsum.photos/600/600" alt="" />
          <figcaption className="gallery__image-caption">a photo</figcaption>
        </figure>
        <figure className="gallery__image gallery__image--11 gallery__image--small">
          <img src="https://picsum.photos/500/500" alt="" />
          <figcaption className="gallery__image-caption">a photo</figcaption>
        </figure>
        <figure className="gallery__image gallery__image--11">
          <img src="https://picsum.photos/700/700" alt="" />
          <figcaption className="gallery__image-caption">a photo</figcaption>
        </figure>
      </div>
    </section>
    <section className="section section--columns">
      <div className="gallery section__column section__column--half">
        <figure className="gallery__image gallery__image--full gallery__image--11">
          <img src="https://picsum.photos/600/900" alt="" />
          <figcaption className="gallery__image-caption">a photo</figcaption>
        </figure>
      </div>
      <div className="section__column section__column--half">
        <h2 className="header header--secondary section__header">
          <span>I haven't felt much of anything since my guinea pig died.</span>
        </h2>
        <p className="section__paragraph">
          Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes,
          lined with what would appear to be some sort of cruel muslin and the
          cute little pom-pom curtain pull cords. Cruel though they may be…
        </p>
        <a href="" className="section__link">
          Read more
        </a>
      </div>
    </section>
    <section className="section">
      <h2 className="header header--secondary section__header">
        <span>Okay, I like a challenge</span>
      </h2>
      <ul className="section--columns section--columns-stretched">
        <li className="section__column section__column--third">
          <a href="" className="section__column-link">
            <figure className="gallery__image gallery__image--full gallery__image--11">
              <img src="https://picsum.photos/200/200" alt="" />
              <figcaption className="gallery__image-caption">
                Don't shoot fire stick in space canoe!
              </figcaption>
            </figure>
            <h3 className="header header--quatenary section__column-header">
              <span>
                Doomsday device? Ah, now the ball's in Farnsworth's court!
              </span>
            </h3>
          </a>
          <p classs="section__column-paragraph">
            Do a flip! Whoa a real live robot; or is that some kind of cheesy New
            Year's costume? Who said that?
          </p>
        </li>
        <li className="section__column section__column--third">
          <a href="" className="section__column-link">
            <figure className="gallery__image gallery__image--full gallery__image--11">
              <img src="https://picsum.photos/210/210" alt="" />
              <figcaption className="gallery__image-caption">
                Don't shoot fire stick in space canoe!
              </figcaption>
            </figure>
            <h3 className="header header--quatenary section__column-header">
              <span>OK, if everyone's finished being stupid</span>
            </h3>
          </a>
          <p classs="section__column-paragraph">
            You'll have all the Slurm you can drink when you're partying with
            Slurms McKenzie! This is the worst kind of discrimination: the kind
            against me!
          </p>
        </li>
        <li className="section__column section__column--third">
          <a href="" className="section__column-link">
            <figure className="gallery__image gallery__image--full gallery__image--11">
              <img src="https://picsum.photos/220/220" alt="" />
              <figcaption className="gallery__image-caption">
                Don't shoot fire stick in space canoe!
              </figcaption>
            </figure>
            <h3 className="header header--quatenary section__column-header">
              <span>
                Whoa a real live robot; or is that some kind of cheesy New Year's
                costume?
              </span>
            </h3>
          </a>
          <p classs="section__column-paragraph">
            Do a flip! Whoa a real live robot; or is that some kind of cheesy New
            Year's costume? Who said that?
          </p>
        </li>
        <li className="section__column section__column--third">
          <a href="" className="section__column-link">
            <figure className="gallery__image gallery__image--full gallery__image--11">
              <img src="https://picsum.photos/230/230" alt="" />
              <figcaption className="gallery__image-caption">
                Don't shoot fire stick in space canoe!
              </figcaption>
            </figure>
            <h3 className="header header--quatenary section__column-header">
              <span>OK, if everyone's finished being stupid</span>
            </h3>
          </a>
          <p classs="section__column-paragraph">
            You'll have all the Slurm you can drink when you're partying with
            Slurms McKenzie! This is the worst kind of discrimination: the kind
            against me!
          </p>
        </li>
        <li className="section__column section__column--third">
          <a href="" className="section__column-link">
            <figure className="gallery__image gallery__image--full gallery__image--11">
              <img src="https://picsum.photos/240/240" alt="" />
              <figcaption className="gallery__image-caption">
                Don't shoot fire stick in space canoe!
              </figcaption>
            </figure>
            <h3 className="header header--quatenary section__column-header">
              <span>OK, if everyone's finished being stupid</span>
            </h3>
          </a>
          <p classs="section__column-paragraph">
            You'll have all the Slurm you can drink when you're partying with
            Slurms McKenzie! This is the worst kind of discrimination: the kind
            against me!
          </p>
        </li>
        <li className="section__column section__column--third">
          <a href="" className="section__column-link">
            <figure className="gallery__image gallery__image--full gallery__image--11">
              <img src="https://picsum.photos/250/250" alt="" />
              <figcaption className="gallery__image-caption">
                Don't shoot fire stick in space canoe!
              </figcaption>
            </figure>
            <h3 className="header header--quatenary section__column-header">
              <span>OK, if everyone's finished being stupid</span>
            </h3>
          </a>
          <p classs="section__column-paragraph">
            You'll have all the Slurm you can drink when you're partying with
            Slurms McKenzie! This is the worst kind of discrimination: the kind
            against me!
          </p>
        </li>
      </ul>
    </section>
    <section className="section section--elevated">
      <h2 className="header header--secondary header--fancy">
        <span>
          All I want is to be a monkey of moderate intelligence who wears a suit
        </span>
      </h2>
    </section>
    <svg
      className="stroke"
      preserveAspectRatio="xMidYMid slice"
      fillRule="evenodd"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 1000 8500 14948.91"
    >
      <defs>
        <mask id="mask">
          <path
            className="stroke__mask"
            d="M1799.62,844.469c0,-0 86.67,225.626 352.604,419.941c265.934,194.316 639.108,259.194 749.439,269.047c354.541,31.661 727.998,-254.715 1275.36,171.001c283.766,220.701 208.993,289.777 360.628,584.373c110.268,214.227 299.857,255.624 584.565,289.314c364.85,43.174 595.705,365.716 482.878,740.965c-149.255,496.405 -1272.82,904.06 -1765.26,829.414c-544.759,-82.578 -1046.53,-396.976 -970.684,-823.131c60.23,-338.391 593.618,-555.021 997.691,-232.209c552.948,441.75 831.032,965.428 629.208,1462.52c-201.824,497.089 -1034.61,402.817 -1549.24,718.21c-550.19,337.185 -200.112,988.499 -573.659,1558.23c-467.372,712.831 -455.685,1334.28 -873.02,1410.67c-465.433,85.192 -687.627,-545.142 -685.933,-964.731c1.612,-399.587 187.124,-708.201 747.229,-552.65c576.661,160.149 1237.76,1333.83 1850.63,1556.19c651.17,236.262 1193.39,-177.838 1723.39,-305.067c407.152,-97.738 1072.39,311.636 1368.98,136.826c207.995,-122.589 185.857,-552.168 -92.724,-479.922c-287.71,74.613 -535.68,360.921 -327.133,707.748c142.416,236.848 664.326,986.738 1166.91,1151.8c362.002,118.89 446.489,489.326 430.242,1068.17c-13.015,463.7 -839.212,630.514 -1258.24,614.161c-347.998,-13.581 -882.839,-28.699 -1100.92,148.324c-344.788,279.879 -432.27,742.736 -486.409,977.629c-52.38,227.261 -169.826,2150.04 -20.371,2401.76"
          />
        </mask>
      </defs>
      <path
        className="stroke__wide"
        d="M4462.32,625c0,0 14.613,622.459 -463.862,807.768c-481.301,186.404 -1447.09,-126.375 -1575.51,541.543c-124.818,649.224 959.032,311.455 1893.1,826.688c1089.01,600.699 -524.942,1127.57 -1302.17,1453.96c-951.997,399.786 -995.709,1421.16 -230.78,1308.47c1157.75,-170.555 2955.04,-369.639 2625.82,434.977c-258.167,630.956 -1834.68,308.013 -1915.59,964.376c-123.736,1003.78 785.635,859.091 1309.31,778.296c976.475,-150.654 1261.08,579.399 1203.78,1013.11c-62.259,471.302 -669.89,1009.61 -1534.75,1125.17c-1019.84,136.266 -2356.12,174.662 -2200.88,942.9c130.32,644.912 1957.69,378.097 2999.78,691.136c860.372,258.452 772.286,1223.59 346.923,1696.49c-769.812,855.852 -852.502,1355.35 -852.502,1355.35"
      />
      <path
        className="stroke__narrow"
        mask="url(#mask)"
        d="M1799.62,844.469c0,-0 86.67,225.626 352.604,419.941c265.934,194.316 639.108,259.194 749.439,269.047c354.541,31.661 727.998,-254.715 1275.36,171.001c283.766,220.701 208.993,289.777 360.628,584.373c110.268,214.227 299.857,255.624 584.565,289.314c364.85,43.174 595.705,365.716 482.878,740.965c-149.255,496.405 -1272.82,904.06 -1765.26,829.414c-544.759,-82.578 -1046.53,-396.976 -970.684,-823.131c60.23,-338.391 593.618,-555.021 997.691,-232.209c552.948,441.75 831.032,965.428 629.208,1462.52c-201.824,497.089 -1034.61,402.817 -1549.24,718.21c-550.19,337.185 -200.112,988.499 -573.659,1558.23c-467.372,712.831 -455.685,1334.28 -873.02,1410.67c-465.433,85.192 -687.627,-545.142 -685.933,-964.731c1.612,-399.587 187.124,-708.201 747.229,-552.65c576.661,160.149 1237.76,1333.83 1850.63,1556.19c651.17,236.262 1193.39,-177.838 1723.39,-305.067c407.152,-97.738 1072.39,311.636 1368.98,136.826c207.995,-122.589 185.857,-552.168 -92.724,-479.922c-287.71,74.613 -535.68,360.921 -327.133,707.748c142.416,236.848 664.326,986.738 1166.91,1151.8c362.002,118.89 446.489,489.326 430.242,1068.17c-13.015,463.7 -839.212,630.514 -1258.24,614.161c-347.998,-13.581 -882.839,-28.699 -1100.92,148.324c-344.788,279.879 -432.27,742.736 -486.409,977.629c-52.38,227.261 -169.826,2150.04 -20.371,2401.76"
      />
      <path
        className="stroke__blob"
        d="M16.433,16948.9l0,-4223.62l-16.433,-1736.42c48.513,-32.042 209.383,-99.459 464.775,-112.625c319.243,-16.417 847.398,391.875 1039.88,657c192.484,265.166 744.113,352 1298.09,279.25c553.975,-72.75 542.242,-342.584 880.258,-783.709c338.021,-441.166 823.925,-455.208 1295.74,-415.333c471.837,39.875 847.379,438.792 960.087,750.875c112.667,312.083 544.584,335.542 880.25,344.917c335.667,9.375 896.667,96.208 1295.75,382.5c319.209,229 389.667,768.041 384.959,1008.96l-0,3848.21l-8483.36,0Z"
      />
    </svg>
  </main>
  
  );
};

export default App;
