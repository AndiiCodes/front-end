const button = document.querySelector('.hero__button');
const waves = document.querySelector('.hero__waves');

button.addEventListener('click', () => {
  waves.classList.toggle('is-centered');
});
