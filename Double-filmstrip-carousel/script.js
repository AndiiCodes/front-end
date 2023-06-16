const imgs = document.querySelectorAll('.row image')
const tls = []

gsap.set('image', {attr:{preserveAspectRatio:"xMidYMid slice", width:"390", height:"300", 'clip-path':"url(#cp1)"}})
gsap.set('.row', {y:(i)=>160+i*320, rotate:-15, svgOrigin:'400 400'})

imgs.forEach((img, i)=>{
 tls.push(
   gsap.timeline({defaults:{duration:1, ease:'none'}, paused:true, repeat:-1})
    .fromTo(img, {x:-400},{x:1600})
    .progress(i%5/5)
 )
})

Observer.create({
  target: window,
  type: "wheel,touch,drag",
  onRight: prev, 
  onUp: prev,
  onLeft: next,
  onDown: next
});

function prev(){
  tls.forEach((tl,i)=>{
    gsap.to(tl, {
      progress:()=>(i<5)?'+=0.03':'+=0.02',
      modifiers:{
        progress:(p)=> gsap.utils.wrap(0, 1, p)
      },
      ease:'power2'
    })
  })
}

function next(){
  tls.forEach((tl,i)=>{
    gsap.to(tl, {
      progress:()=>(i<5)?'-=0.03':'-=0.02',
      modifiers:{
        progress:(p)=> gsap.utils.wrap(0, 1, p)
      },
      ease:'power2'
    })
  })
}
