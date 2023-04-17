const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('mousemove', e => {
    const x = event.offsetX;
    const y = event.offsetY;

    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
  });
});
