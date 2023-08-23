let circlesContainer = document.querySelector(".circlesHolder")
let btn = document.querySelector(".btn")
function createCircles() {
  for (var i = 0; i < 12; i++){
    let circle = document.createElement("div")
    let circleWrapper = document.createElement("div")
    circle.setAttribute("class", "circle")
    circlesContainer.append(circleWrapper)
    circleWrapper.append(circle)
    gsap.set(circleWrapper, {rotation:i * 40})
    gsap.set(circle, {x:40})  
  }
}

createCircles()


const ani = gsap.timeline({repeat:-1, yoyo:true, paused:true})
  .to(".circle", {x:120, scale:3, duration:1, ease:"sine.inOut"})

btn.addEventListener("mouseenter", () => {
 ani.restart()
})

btn.addEventListener("mouseleave", () => {
  ani.pause()
   ani.tweenTo(0)
})