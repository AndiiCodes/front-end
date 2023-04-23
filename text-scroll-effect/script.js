const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let paragraphs = [...document.querySelectorAll('p')];
let spans =[];

paragraphs.forEach(paragraph => {
  let htmlString = '';
  let pArray = paragraph.textContent.split('');
  for(let i = 0; i< pArray.length; i++){
    htmlString += `<span>${pArray[i]}</span>`;
  }
  paragraph.innerHTML = htmlString;
})

spans = [...document.querySelectorAll('span')];

function revealSpans(){
  for(let i = 0; i < spans.length; i++){
    if(spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2){
      let {left, top} = spans[i].getBoundingClientRect();
      top = top - (window.innerHeight * .1);
      let opacityValue = 1 - ((top * .01) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * .01) + (left * 0.001)).toFixed(3);
      opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
      spans[i].style.opacity = opacityValue;
    }
  }
}

window.addEventListener('scroll', () => {
  revealSpans()
})
revealSpans()
