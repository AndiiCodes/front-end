function updateProgressCircle() {
  const progressElement = document.querySelector('.progress-circle-bar');
  const scrollToTopElement = document.querySelector('.scroll-to-top');
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  let progress = (window.pageYOffset / totalHeight) * 283;
  progress = Math.min(progress, 283);
  progressElement.style.strokeDashoffset = 283 - progress;

  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    scrollToTopElement.style.opacity = '1';
  } else {
    scrollToTopElement.style.opacity = '0';
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


const scrollToTopElement = document.querySelector('.scroll-to-top');
scrollToTopElement.addEventListener('click', scrollToTop);


updateProgressCircle();
window.addEventListener('scroll', updateProgressCircle);
window.addEventListener('resize', updateProgressCircle);
