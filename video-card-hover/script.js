var cards = document.querySelectorAll(".cards__element");

for(var i = 0; i < cards.length; i++){
  cards[i].addEventListener("mouseenter", function(){
    gsap.to(this, 1, {width: 540, ease: "expo.inOut"});
  })
  cards[i].addEventListener("mouseleave", function(){
    gsap.to(this, 1, {width: 230, ease: "expo.inOut"});
  })
}
