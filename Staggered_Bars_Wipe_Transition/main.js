let t = gsap.to(".bar", 
  {xPercent:-100,  
   duration:0.8, 
   ease:"power1.inOut",
    stagger:{
      each:0.08,
      from:"end",
      ease:"power1.in"
    }
  }
)

function initialize() {
  gsap.set("body", {opacity:1})
}

window.addEventListener('load', (event) => {
  initialize()
});