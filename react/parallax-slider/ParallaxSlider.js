import React, { useEffect } from 'react';

export default function ParallaxSlider() {
  useEffect(() => {
    let animation = true;
    let nextSlide;
    let scrolledUp;
    let $app;
    let curSlide = 1;

    const pagination = function (slide, target) {
      animation = true;
      if (target === undefined) {
        nextSlide = scrolledUp ? slide - 1 : slide + 1;
      } else {
        nextSlide = target;
      }

      $('.pages__item--' + nextSlide).addClass('page__item-active');
      $('.pages__item--' + slide).removeClass('page__item-active');

      $app.toggleClass('active');
      setTimeout(function () {
        animation = false;
      }, 3000);
    };

    const navigateDown = function () {
      if (curSlide > 1) return;
      scrolledUp = false;
      pagination(curSlide);
      curSlide++;
    };

    const navigateUp = function () {
      if (curSlide === 1) return;
      scrolledUp = true;
      pagination(curSlide);
      curSlide--;
    };

    $(document).ready(function () {
      $app = $('.app');
      var $img = $('.app__img');
      var $pageNav1 = $('.pages__item--1');
      var $pageNav2 = $('.pages__item--2');

      setTimeout(function () {
        $app.addClass('initial');
      }, 1500);

      setTimeout(function () {
        animation = false;
      }, 4500);

      $(document).on('mousewheel DOMMouseScroll', function (e) {
        var delta = e.originalEvent.wheelDelta;
        if (animation) return;
        if (delta > 0 || e.originalEvent.detail < 0) {
          navigateUp();
        } else {
          navigateDown();
        }
      });

      $(document).on("click", ".pages__item:not(.page__item-active)", function () {
        if (animation) return;
        var target = +$(this).attr('data-target');
        pagination(curSlide, target);
        curSlide = target;
      });
    });
  }, []);

  return (
    <div>
      <div className="cont">
        <div className="mouse" />
        <div className="app">
          <div className="app__bgimg">
            <div className="app__bgimg-image app__bgimg-image--1"></div>
            <div className="app__bgimg-image app__bgimg-image--2"></div>
          </div>
          <div className="app__img">
            <img
              onmousedown="return false"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/whiteTest4.png"
              alt="city"
            />
          </div>
          <div className="app__text app__text--1">
            <div className="app__text-line app__text-line--4">AMAZING</div>
            <div className="app__text-line app__text-line--3">SLIDER</div>
            <div className="app__text-line app__text-line--2">Subscribe now</div>
          </div>
          <div className="app__text app__text--2">
            <div className="app__text-line app__text-line--4">Creative</div>
            <div className="app__text-line app__text-line--3">parallax</div>
            <div className="app__text-line app__text-line--2">Subscribe now</div>
          </div>
        </div>
        <div className="pages">
          <ul className="pages__list">
            <li
              data-target={1}
              className="pages__item pages__item--1 page__item-active"
            />
            <li data-target={2} className="pages__item pages__item--2" />
          </ul>
        </div>
      </div>
    </div>
  );
}


// make sure to include JQuery cdn in your public/index.html file.
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
